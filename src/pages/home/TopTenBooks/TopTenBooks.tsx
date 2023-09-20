import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";
import { useGetAllBooksQuery } from "../../../redux/api/apiSlice";

export type IReview = {
  review: string;
  reviewer: {
    name: string;
  };
};

export type IBook = {
  _id: string;
  title: string;
  author: string;
  bookCover: {
    publicId: string;
    photoUrl: string;
  };
  genre: string;
  publishedDate: string;
  reviews: IReview[];
};

const TopTenBooks = () => {
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div>
      <div className="container  mx-auto px-2 pb-5">
        <div className="py-8 lg:pt-20 lg:pb-10">
          <h2 className="text-3xl lg:text-5xl font-bold py-2 text-black dark:text-white">
            People's Choice Best Ten
          </h2>
        </div>
        <div className=" grid  lg:grid-cols-4 gap-4 lg:gap-10 justify-center  items-center lg:pb-20">
          {data?.data?.data.map((book: IBook, index: number) => (
            <SingleBook key={index} book={book} index={index + 1}></SingleBook>
          ))}
          <div className="text-center lg:text-left">
            <Link to={"/all-books"} className="btn rounded-sm">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTenBooks;
