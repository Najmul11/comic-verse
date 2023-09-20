/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../redux/api/apiSlice";
import { useAppDispatch } from "../../redux/hook";
import { setAccessToken } from "../../redux/slices/accessTokenSlice";
import { setUser } from "../../redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import useTitle from "../../hooks/useTitle";
import toast from "react-hot-toast";

type IFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  useTitle("Login");
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const { handleSubmit, control, watch } = useForm<IFormData>();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const response = (await userLogin(data)) as any;
    if ("data" in response) {
      const accessToken = response.data?.data?.accessToken;
      await dispatch(setAccessToken(accessToken));
      const decodedToken = jwtDecode(accessToken);
      await dispatch(setUser(decodedToken));
      navigate(from, { replace: true });
    }
    if (response.error) toast.error(response.error.data.message);
  };
  const password = watch("password");
  const email = watch("email");
  return (
    <div className="bg-base-200 min-h-screen dark:bg-black">
      <div className="container mx-auto flex justify-center items-center">
        <div className="lg:pt-32 pt-20">
          <h2 className="text-5xl font-bold text-center pb-8 dark:text-white">
            Login now!
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[430px]  bg-white rounded-lg p-6 px-8 flex flex-col "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...field}
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
                render={({ field }) => (
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    {...field}
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
                <Link to={"/signup"} className="label-text-alt link link-hover">
                  New here? Sign up{" "}
                </Link>
              </label>
            </div>
            <button
              type="submit"
              disabled={!password || !email || isLoading}
              className=" btn mb-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
