import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { useAppSelector } from "../../redux/hook";
import { useEditBookMutation } from "../../redux/api/apiSlice";
import { useParams } from "react-router-dom";

type IFormData = {
  author: string;
  title: string;
  publishedDate: string;
  image?: File | undefined;
  genre: string;
};

const EditBook = () => {
  const { id } = useParams();
  const { control, handleSubmit, setValue, watch } = useForm();

  const [editBook] = useEditBookMutation();
  const { accessToken } = useAppSelector((state) => state.accessToken);

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
      console.log(data);
      const formData = new FormData();

      formData.append("author", data.author);
      formData.append("title", data.title);
      formData.append("genre", data.genre);
      formData.append("publishedDate", data.publishedDate);
      formData.append("file", data.image);

      const response = await editBook({ id, data: formData, accessToken });
      console.log(response);
    } catch (error) {}
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto flex justify-center items-center">
        <div className="lg:pt-24 pt-10">
          <h2 className="text-5xl font-bold text-center pb-8">Update book</h2>
          <div className="flex  bg-white rounded-lg">
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
              <button type="submit" className=" btn mb-4 mt-8">
                update book
              </button>
            </form>
            {imagePreview && (
              <div className="py-10 pr-8  ">
                <img
                  src={imagePreview}
                  alt=""
                  className="w-80 h-[480px]  rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
