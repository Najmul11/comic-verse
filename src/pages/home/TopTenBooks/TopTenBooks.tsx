import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";

export type IComicBook = {
  title: string;
  author: string;
  image: string;
};

const comicBooks: IComicBook[] = [
  {
    title: "Spider-Man: The Amazing Spider-Man",
    author: "Stan Lee",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "Batman: The Dark Knight Returns",
    author: "Frank Miller",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "X-Men: Days of Future Past",
    author: "Chris Claremont",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "Wonder Woman: Gods and Mortals",
    author: "George Pérez",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "Superman: Birthright",
    author: "Mark Waid",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "The Walking Dead: Days Gone Bye",
    author: "Robert Kirkman",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "Captain America: The Winter Soldier",
    author: "Ed Brubaker",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "Iron Man: Extremis",
    author: "Warren Ellis",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
  {
    title: "The Sandman: Preludes and Nocturnes",
    author: "Neil Gaiman",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
  },
];

const TopTenBooks = () => {
  return (
    <div>
      <div className="container  mx-auto ">
        <div className="lg:pt-20 lg:pb-10">
          <h2 className="text-5xl font-bold py-2 text-black ">
            People's Choice Best Ten
          </h2>
        </div>
        <div className=" grid grid-cols-4 gap-10 justify-center  items-center lg:pb-20">
          {comicBooks.map((book, index) => (
            <SingleBook key={index} book={book} index={index + 1}></SingleBook>
          ))}
          <div>
            <Link to={"/"} className="btn rounded-sm">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTenBooks;
