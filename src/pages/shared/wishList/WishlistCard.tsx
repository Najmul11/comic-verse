import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

type IBook = {
  _id: string;
  title: string;
  author: string;
  image: string;
};

type IProps = {
  book: IBook;
};
export const WishlistCard = ({ book }: IProps) => {
  const { _id, title, author, image } = book;

  return (
    <div className="flex items-center gap-2">
      <div className="h-24">
        <img src={image} alt="" className="max-h-full rounded-sm" />
      </div>
      <div>
        <Link to={`/all-books/${_id}`} className="text-md font-semibold link">
          {title}
        </Link>
        <p className="">
          <span className="  text-sm text-black text-opacity-60">Author </span>
          <span className="italic text-md font-medium ">{author}</span>
        </p>
      </div>
      <button className="btn btn-sm rounded-sm group">
        <AiOutlineDelete className={"text-xl group-hover:text-orange-500"} />
      </button>
    </div>
  );
};
