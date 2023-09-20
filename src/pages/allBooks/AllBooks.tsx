import SingleBook from "../home/TopTenBooks/SingleBook";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";
import Sidebar from "./Sidebar/Sidebar";
import { IBook } from "../home/TopTenBooks/TopTenBooks";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import useTitle from "../../hooks/useTitle";

const AllBooks = () => {
  useTitle("All books");
  // const { data, error, isLoading } = useGetAllBooksQuery(undefined);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    setSearchText(event.target.value);
  };

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

  const { data } = useGetBooksQuery({
    genres: selectedGenres,
    years: selectedYears,
    searchTerm: searchText,
  });

  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    // ... do something with `page`
  }
  return (
    <div>
      <div className="container mx-auto  flex gap-5 py-12">
        <div className="w-1/4">
          <Sidebar
            selectedGenres={selectedGenres}
            selectedYears={selectedYears}
            handleGenreChange={handleGenreChange}
            handleYearChange={handleYearChange}
            handleSearch={handleSearch}
            searchText={searchText}
          />
        </div>
        <div className="w-3/4   rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-5">
            {data?.data?.data.map((book: IBook, index: number) => {
              const { genre, publishedDate } = book;
              return (
                <SingleBook book={book} key={index}>
                  <>
                    <p className="text-white text-sm font-medium"># {genre}</p>
                    <p className="text-white text-sm font-medium">
                      {publishedDate}
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
