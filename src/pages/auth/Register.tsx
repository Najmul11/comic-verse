import { ChangeEvent } from "react";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUserMutation } from "../../redux/api/apiSlice";

type IFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  image?: File | undefined;
  name: string;
};

export const Register = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const [createUser] = useCreateUserMutation();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setValue("image", file);
      setValue("imagePreview", previewURL);
    }
  };
  const imagePreview = watch("imagePreview");

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.image);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      console.log(formData);

      const response = await createUser(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto flex justify-center items-center">
        <div className="lg:pt-16 pt-10">
          <h2 className="text-5xl font-bold text-center pb-8">Register</h2>

          <div className="flex flex-col bg-white rounded-lg gap-4 py-4">
            <div className="rounded-full w-20 bg-gray-400 h-20 mx-auto">
              {imagePreview && (
                <div className="">
                  <img
                    src={imagePreview}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
              )}
            </div>

            <form
              className="w-[430px] bg-white rounded-lg px-8 flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Set Avatar</span>
                </label>
                <input
                  name="image"
                  onChange={(e) => handleFileChange(e)}
                  type="file"
                  placeholder="You can't touch this"
                  className="file-input file-input-bordered w-full file-input-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="full name"
                      className="input input-sm input-bordered"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="email"
                      className="input input-sm input-bordered"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      placeholder="password"
                      className="input input-sm  input-bordered"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      placeholder="confirm password"
                      className="input input-sm  input-bordered"
                    />
                  )}
                />
              </div>
              <div className="flex justify-between pb-8">
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <Link
                    to={"/login"}
                    className="label-text-alt link link-hover"
                  >
                    Have an account? Login
                  </Link>
                </label>
              </div>
              <button type="submit" className="btn mb-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
