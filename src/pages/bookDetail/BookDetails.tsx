import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { VscSend } from "react-icons/vsc";
import Review from "./Review";

const BookDetails = () => {
  const user = "d";

  const comicBook = {
    _id: "e",
    title: "Spider-Man: The Amazing Spider-Man",
    author: "Stan Lee",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "March 1963",
    reviews: [
      {
        reviewer: "Najmul",
        reviewerEmail: "naz@hubmail.com",
        review: "Its fantastic",
      },
    ],
  };
  const { _id, title, author, image, genre, publicationDate, reviews } =
    comicBook;

  return (
    <div>
      <div className="container h-screen  mx-auto flex p-16">
        <div className="w-1/2 lg:h-[700px] flex justify-center items-center">
          <img src={image} alt="" className="w-96 h-[600px]  rounded-lg " />
        </div>
        <div className="w-1/2 p-5">
          <div className="flex justify-end gap-10 ">
            {user && (
              <button className="btn rounded-sm group">Add to wishList</button>
            )}
            <Link to={`/edit-book/${_id}`} className="btn rounded-sm">
              Edit Book
            </Link>
            <button className="btn rounded-sm group">
              <AiOutlineDelete className={"text-xl group-hover:fill-red-600"} />
              delete
            </button>
          </div>
          <div className="px-5 py-10">
            <div className="flex flex-col gap-4">
              <h2 className=" text-3xl font-semibold">{title}</h2>
              <p className="">
                <span className="  text-xl text-black text-opacity-60">
                  Author{" "}
                </span>
                <span className="italic text-2xl font-medium ">{author}</span>
              </p>
              <p className="">
                <span className="  text-xl text-black text-opacity-60">
                  Genre{" "}
                </span>
                <span className="text-2xl font-medium ">{genre}</span>
              </p>
              <p className="">
                <span className="  text-xl text-black text-opacity-60">
                  Punlication Date{" "}
                </span>
                <span className="text-2xl font-medium ">{publicationDate}</span>
              </p>
              <div className="bg-base-200 p-5  rounded-sm flex flex-col gap-4">
                <h4 className="text-2xl font-semibold">Reviews</h4>
                <div className="flex gap-5 ">
                  <input
                    type="text"
                    placeholder="Write review here"
                    className="input input-bordered w-full rounded-sm"
                  />
                  <button className="btn rounded-sm  group hover:text-orange-500">
                    <VscSend className={"text-2xl text-orange-500"} />
                    Post review
                  </button>
                </div>
                <div>
                  {reviews.length > 0 &&
                    reviews.map((review, index) => (
                      <Review key={index} userReview={review} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
