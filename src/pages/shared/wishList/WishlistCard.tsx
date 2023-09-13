import { Link } from "react-router-dom";
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
    <Link to={`/all-books/${_id}`} className="flex items-center gap-3">
      <div className="h-24">
        <img src={image} alt="" className="max-h-full" />
      </div>
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="">
          <span className="  text-sm text-black text-opacity-60">Author </span>
          <span className="italic text-md font-medium ">{author}</span>
        </p>
      </div>
    </Link>
  );
};
