import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";

const EditBook = () => {
  const { control, handleSubmit, setValue, watch } = useForm();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setValue("image", file);

      setValue("imagePreview", previewURL);
    }
  };
  const imagePreview = watch("imagePreview");

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto flex justify-center items-center">
        <div className="lg:pt-24 pt-10">
          <h2 className="text-5xl font-bold text-center pb-8">Update book</h2>
          <div className="flex  bg-white rounded-lg">
            <form className="w-[430px]  bg-white rounded-lg py-6 px-8 flex flex-col ">
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
                <input
                  type="text"
                  placeholder="title"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author name</span>
                </label>
                <input
                  type="text"
                  placeholder="author name"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <input
                  type="text"
                  placeholder="genre"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publication date</span>
                </label>
                <input
                  type="date"
                  placeholder="genre"
                  className="input input-bordered "
                />
              </div>
              <button className=" btn mb-4 mt-8">update book</button>
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
