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
  const { data, error, isLoading } = useGetAllBooksQuery(undefined);

  return (
    <div>
      <div className="container  mx-auto ">
        <div className="lg:pt-20 lg:pb-10">
          <h2 className="text-5xl font-bold py-2 text-black ">
            People's Choice Best Ten
          </h2>
        </div>
        <div className=" grid grid-cols-4 gap-10 justify-center  items-center lg:pb-20">
          {data?.data?.data.map((book: IBook, index: number) => (
            <SingleBook key={index} book={book} index={index + 1}></SingleBook>
          ))}
          <div>
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
