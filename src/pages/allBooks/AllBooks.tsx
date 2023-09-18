import SingleBook from "../home/TopTenBooks/SingleBook";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";
import Sidebar from "./Sidebar/Sidebar";
import { IBook } from "../home/TopTenBooks/TopTenBooks";
import { useGetAllBooksQuery } from "../../redux/api/apiSlice";

const AllBooks = () => {
  const { data, error, isLoading } = useGetAllBooksQuery(undefined);

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
          <Sidebar />
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
