import { Link } from "react-router-dom";
import { IComicBook } from "./AllBooks";

type IProps = {
  book: IComicBook;
};

const SingleBook = ({ book }: IProps) => {
  const { title, image, author, genre, publicationDate } = book;

  return (
    <Link
      to={"/"}
      className="relative group lg:h-[400px] rounded-lg w-64 mx-auto"
    >
      <div className="overflow-hidden rounded-lg shadow-lg ">
        <img
          src={image}
          alt={title}
          className=" w-full transition-transform transform group-hover:scale-105 rounded-lg lg:h-[400px]"
        />
      </div>
      <div className="absolute inset-0 flex items-end justify-center px-4 py-2 bg-gradient-to-t from-black to-transparent to-60% opacity-80  transition-opacity group-hover:opacity-100 rounded-lg">
        <div>
          <h2 className="text-white text-lg font-semibold">{title}</h2>
          <h3 className="text-white text-sm font-semibold">
            <span className="italic font-light">By</span> {author}
          </h3>
          <p className="text-white text-sm font-medium"># {genre}</p>
          <p className="text-white text-sm font-medium">{publicationDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
