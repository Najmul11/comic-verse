import { Link } from "react-router-dom";
import { IComicBook } from "./TopTenBooks";

type IProps = {
  book: IComicBook;
  index?: number;
};
const SingleBook = ({ book, index }: IProps) => {
  const { title, image, author } = book;
  return (
    <Link to={"/"} className="relative group lg:h-[570px]">
      <div className="overflow-hidden rounded-lg shadow-lg ">
        <img
          src={image}
          alt={title}
          className=" w-full transition-transform transform group-hover:scale-105 rounded-lg lg:h-[570px]"
        />
      </div>
      <div className="absolute inset-0 flex items-end justify-center px-4 py-2 bg-gradient-to-t from-black to-transparent to-40% opacity-80  transition-opacity group-hover:opacity-100 rounded-lg">
        <div>
          <h2 className="text-white text-lg font-semibold">
            #{index} {title}
          </h2>
          <h3 className="text-white text-sm font-semibold">
            <span className="italic font-light">By</span> {author}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
