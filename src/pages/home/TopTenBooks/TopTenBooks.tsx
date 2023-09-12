import { Link } from "react-router-dom";
import SingleBook from "./SingleBook";

export type IComicBook = {
  title: string;
  author: string;
  image: string;
  genre: string;
  publicationDate: string;
};

const comicBooks: IComicBook[] = [
  {
    title: "Spider-Man: The Amazing Spider-Man",
    author: "Stan Lee",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "March 1963",
  },
  {
    title: "Batman: The Dark Knight Returns",
    author: "Frank Miller",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "February 1986",
  },
  {
    title: "X-Men: Days of Future Past",
    author: "Chris Claremont",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "January 1981",
  },
  {
    title: "Wonder Woman: Gods and Mortals",
    author: "George Pérez",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "July 1987",
  },
  {
    title: "Superman: Birthright",
    author: "Mark Waid",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "October 2003",
  },
  {
    title: "The Walking Dead: Days Gone Bye",
    author: "Robert Kirkman",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Horror",
    publicationDate: "October 2003",
  },
  {
    title: "Watchmen",
    author: "Alan Moore",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "September 1986",
  },
  {
    title: "Captain America: The Winter Soldier",
    author: "Ed Brubaker",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "March 2005",
  },
  {
    title: "Iron Man: Extremis",
    author: "Warren Ellis",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Superhero",
    publicationDate: "November 2005",
  },
  {
    title: "The Sandman: Preludes and Nocturnes",
    author: "Neil Gaiman",
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/6259cb878dd80/clean.jpg",
    genre: "Fantasy",
    publicationDate: "January 1989",
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
