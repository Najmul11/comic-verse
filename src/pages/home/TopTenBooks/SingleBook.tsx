import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { IBook } from "./TopTenBooks";

type IProps = {
  book: IBook;
  index?: number;
  children?: ReactNode;
};
const SingleBook = ({ book, index, children }: IProps) => {
  const { _id, title, bookCover, author } = book;

  const { photoUrl } = bookCover;

  return (
    <Link
      to={`/all-books/${_id}`}
      className={`relative group rounded-lg ${
        index ? "lg:h-[570px]" : "lg:h-[400px]"
      }`}
    >
      <div className="overflow-hidden rounded-lg shadow-lg ">
        <img
          src={photoUrl}
          alt={title}
          className={` w-full transition-transform transform group-hover:scale-105 rounded-lg ${
            index ? "lg:h-[570px]" : "lg:h-[400px]"
          }`}
        />
      </div>
      <div className="absolute inset-0 flex items-end justify-center px-4 py-2 bg-gradient-to-t from-black to-transparent to-60% opacity-80  transition-opacity group-hover:opacity-100 rounded-lg">
        <div className={`${!index && "h-32"}`}>
          <h2 className="text-white text-lg font-semibold">
            {index && `#${index} `}
            {title}
          </h2>
          <h3 className="text-white text-sm font-semibold">
            <span className="italic font-light">By</span> {author}
          </h3>
          {children}
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
