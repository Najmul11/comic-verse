import SingleBook from "../home/TopTenBooks/SingleBook";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";

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

const AllBooks = () => {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    // ... do something with `page`
  }
  return (
    <div>
      <div className="container mx-auto  flex gap-5 py-12">
        <div className="w-1/4 bg-orange-500">hello</div>
        <div className="w-3/4   rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
            {comicBooks.map((book, index) => {
              const { genre, publicationDate } = book;
              return (
                <SingleBook book={book} key={index}>
                  <>
                    <p className="text-white text-sm font-medium"># {genre}</p>
                    <p className="text-white text-sm font-medium">
                      {publicationDate}
                    </p>
                  </>
                </SingleBook>
              );
            })}
          </div>
          <div className="pt-20  mx-auto w-3/5">
            <Pagination
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
