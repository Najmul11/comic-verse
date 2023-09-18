import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteFromWishlistMutation } from "../../../redux/api/apiSlice";
import { useAppSelector } from "../../../redux/hook";

type IBook = {
  _id?: string;
  title: string | undefined;
  author: string;
  bookCover: {
    publicId: string;
    photoUrl: string;
  };
};

type IProps = {
  book: IBook;
};
export const WishlistCard = ({ book }: IProps) => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();

  const { _id, title, author, bookCover } = book;

  const handleDelete = async () => {
    const response = await deleteFromWishlist({ id: _id, accessToken });
    console.log(response);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="h-24">
        <img
          src={bookCover?.photoUrl}
          alt=""
          className="max-h-full rounded-sm "
        />
      </div>
      <div className="flex w-full justify-between ">
        <Link to={`/all-books/${_id}`} className=" w-full">
          <p className="text-md font-semibold link">{title}</p>
          <p className="">
            <span className="  text-sm text-black text-opacity-60">
              Author{" "}
            </span>
            <span className="italic text-md font-medium ">{author}</span>
          </p>
        </Link>
        <button onClick={handleDelete} className="btn btn-sm rounded-sm group">
          <AiOutlineDelete className={"text-xl group-hover:text-orange-500"} />
        </button>
      </div>
    </div>
  );
};
