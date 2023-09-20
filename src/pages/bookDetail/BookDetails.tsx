/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import Review from "./Review";
import {
  useAddToWishListMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
  usePostReviewMutation,
} from "../../redux/api/apiSlice";
import { IBook } from "../home/TopTenBooks/TopTenBooks";
import { formateDate } from "./dateFormate";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";
import useTitle from "../../hooks/useTitle";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useTitle("Book details");

  const { register, handleSubmit, watch, reset } = useForm();

  const { user } = useAppSelector((state) => state.user);
  const { accessToken } = useAppSelector((state) => state.accessToken);

  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });
  const [postReview, { isLoading: postLoading }] = usePostReviewMutation();
  const [deleteBook, { isLoading: deleteLoading }] = useDeleteBookMutation();
  const [addToWishList] = useAddToWishListMutation();

  const review = watch("review");

  let bookInfo: IBook = {} as IBook;
  if (data?.data) {
    bookInfo = data.data;
  }

  const { _id, title, author, bookCover, genre, publishedDate, reviews } =
    bookInfo;

  const dateObj = new Date(publishedDate);
  const newPublishedDate = formateDate(dateObj);

  const onSubmit = async (data: any) => {
    const response = (await postReview({ id, data, accessToken })) as any;
    if (response.data) {
      reset();
      toast.success("Thanks for the feedback");
    }
    if (response.error) toast.error(response.error.data.message);
  };

  const handleDelete = async () => {
    const response = (await deleteBook({ id, accessToken })) as any;

    if (response.data) {
      toast.success("Book deleted successfully");
      navigate("/all-books");
    }

    if (response.error) toast.error(response.error.data.message);
  };
  const handleAddToWishlist = async () => {
    const response = (await addToWishList({ id, accessToken })) as any;

    if (response.data) toast.success("Book added to wishlist");

    if (response.error) toast.error(response.error.data.message);
  };

  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container h-screen  mx-auto flex p-16">
        <div className="w-1/2 lg:h-[700px] flex justify-center items-center">
          <img
            src={bookCover?.photoUrl}
            alt=""
            className="w-96 h-[600px]  rounded-lg "
          />
        </div>
        <div className="w-1/2 p-5">
          <div className="flex justify-end gap-10 ">
            {user && (
              <>
                <button
                  onClick={handleAddToWishlist}
                  className="btn rounded-sm group"
                >
                  Add to wishList
                </button>

                <Link to={`/edit-book/${_id}`} className="btn rounded-sm">
                  Edit Book
                </Link>
                <label htmlFor="delete-modal" className="btn rounded-sm group">
                  {" "}
                  <AiOutlineDelete
                    className={"text-xl group-hover:fill-red-600"}
                  />
                  delete{" "}
                </label>
              </>
            )}
          </div>
          <div className="px-5 py-10">
            <div className="flex flex-col gap-4">
              <h2 className=" text-3xl font-semibold capitalize">{title}</h2>
              <p className="">
                <span className="italic  text-xl text-black text-opacity-60 dark:text-white">
                  By{" "}
                </span>
                <span className=" text-2xl font-medium capitalize">
                  {author}
                </span>
              </p>
              <p className="">
                <span className="italic  text-xl text-black text-opacity-60 dark:text-white">
                  Genre{" "}
                </span>
                <span className="text-2xl font-medium capitalize">{genre}</span>
              </p>
              <p className="">
                <span className="italic  text-xl text-black text-opacity-60 dark:text-white">
                  Punlication Date{" "}
                </span>
                <span className="text-2xl font-medium ">
                  {newPublishedDate}
                </span>
              </p>
              <div className="bg-base-200 p-5  rounded-sm flex flex-col gap-4">
                <h4 className="text-2xl font-semibold dark:text-orange-500">
                  Reviews
                </h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-5 ">
                    <input
                      type="text"
                      {...register("review", { required: true })}
                      placeholder="Write review here"
                      className="input input-bordered w-full rounded-sm"
                    />
                    <button
                      type="submit"
                      disabled={!review || postLoading}
                      className="btn rounded-sm  group hover:text-orange-500"
                    >
                      <VscSend className={"text-2xl text-orange-500"} />
                      Post review
                    </button>
                  </div>
                </form>
                <div>
                  {reviews?.length > 0 &&
                    reviews.map((review, index) => (
                      <Review key={index} userReview={review} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal handleDelete={handleDelete} deleteLoading={deleteLoading} />
    </div>
  );
};

export default BookDetails;
