import SingleBook from "../home/TopTenBooks/SingleBook";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";
import Sidebar from "./Sidebar/Sidebar";
import { IBook } from "../home/TopTenBooks/TopTenBooks";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import useTitle from "../../hooks/useTitle";

const AllBooks = () => {
  useTitle("All books");

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const { data } = useGetBooksQuery({
    genres: selectedGenres,
    years: selectedYears,
    searchTerm: searchText,
    page: currentPage,
  });

  // Handle checkbox changes
  const handleGenreChange = (genre: string): void => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleYearChange = (year: number): void => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="dark:bg-black">
      <div className="container mx-auto   py-12">
        <div className="flex gap-5">
          <div className="w-1/4">
            <Sidebar
              selectedGenres={selectedGenres}
              selectedYears={selectedYears}
              handleGenreChange={handleGenreChange}
              handleYearChange={handleYearChange}
              handleSearch={handleSearch}
            />
          </div>
          <div className="w-3/4   rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
              {data?.data?.data.map((book: IBook, index: number) => {
                const { genre, publishedDate } = book;
                return (
                  <SingleBook book={book} key={index}>
                    <>
                      <p className="text-white text-sm font-medium">
                        # {genre}
                      </p>
                      <p className="text-white text-sm font-medium">
                        {publishedDate}
                      </p>
                    </>
                  </SingleBook>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-20  mx-auto w-3/5">
          <Pagination
            totalPages={Math.ceil(data?.data?.meta?.total / 10)}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
