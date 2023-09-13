import { TbJewishStar } from "react-icons/tb";
import { WishlistCard } from "./WishlistCard";

const WishLists = () => {
  const comicBooks = [
    {
      _id: "unh8r76r",
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
    },
  ];

  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className="btn  btn-ghost hover:bg-base-200 lg:px-6 rounded-sm group"
      >
        <TbJewishStar className={"text-xl group-hover:text-orange-500"} />
        wishlist
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-sm  w-96 flex flex-col gap-4"
      >
        {comicBooks.map((book, index) => (
          <WishlistCard key={index} book={book}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishLists;
