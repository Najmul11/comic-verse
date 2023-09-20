/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { useAppSelector } from "../../redux/hook";
import { useListNewBookMutation } from "../../redux/api/apiSlice";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

type IFormData = {
  author: string;
  title: string;
  publishedDate: string;
  image?: File | undefined;
  genre: string;
  imagePreview?: string;
};

const AddNewBook = () => {
  useTitle("Add new book");
  const { control, handleSubmit, setValue, watch, reset } =
    useForm<IFormData>();

  const { accessToken } = useAppSelector((state) => state.accessToken);
  const [listNewBook, { isLoading }] = useListNewBookMutation();

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
    const formData = new FormData();

    formData.append("author", data.author);
    formData.append("title", data.title);
    formData.append("genre", data.genre);
    formData.append("publishedDate", data.publishedDate);
    if (data.image) formData.append("file", data.image);

    const response = (await listNewBook({
      data: formData,
      accessToken,
    })) as any;

    if (response.data) {
      reset();
      toast.success("Book added successfully");
    }
    if (response.error) toast.error(response.error.data.message);
  };

  return (
    <div className="bg-base-200 min-h-screen dark:bg-black">
      <div className="container mx-auto flex justify-center items-center">
        <div className="lg:pt-20 pt-10">
          <h2 className="text-5xl font-bold text-center pb-8 dark:text-white">
            List a Book
          </h2>
          <div className="flex flex-col-reverse lg:flex-row bg-white rounded-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[430px]  bg-white rounded-lg py-6 px-8 flex flex-col "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cover photo</span>
                </label>
                <input
                  onChange={(e) => handleFileChange(e)}
                  type="file"
                  placeholder="You can't touch this"
                  className="file-input file-input-bordered w-full "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <Controller
                  name="title"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="title"
                      className="input input-bordered"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author name</span>
                </label>
                <Controller
                  name="author"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="author name"
                      className="input input-bordered"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <Controller
                  name="genre"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="genre"
                      className="input input-bordered"
                    />
                  )}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publication date</span>
                </label>
                <Controller
                  name="publishedDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="date"
                      placeholder="published date"
                      className="input input-bordered"
                    />
                  )}
                />
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className=" btn mb-4 mt-8"
              >
                Add book
              </button>
            </form>
            {imagePreview && (
              <div className="py-10 lg:pr-8 mx-2 lg:mx-0">
                <img
                  src={imagePreview}
                  alt=""
                  className="lg:w-80 h-[480px]  rounded-lg w-full "
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
