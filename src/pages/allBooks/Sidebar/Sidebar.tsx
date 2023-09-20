import { genres, years } from "./sidebar.constant";

type IProps = {
  selectedGenres: string[];
  selectedYears: number[];
  handleGenreChange: (genre: string) => void;
  handleYearChange: (year: number) => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Sidebar = ({
  selectedGenres,
  selectedYears,
  handleGenreChange,
  handleYearChange,
  handleSearch,
}: IProps) => {
  return (
    <div className=" rounded-lg flex flex-col gap-5 dark:text-white">
      <div>
        <label className="label">
          <span className="label-text dark:text-white">Search</span>
        </label>
        <input
          type="text"
          placeholder="Search by title, author, genre"
          className="input input-bordered w-full rounded-md dark:text-black"
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-lg font-semibold">Filter By Genre</h3>
        <div className="grid grid-cols-2 ">
          {genres.map((genre, index) => (
            <div key={index} className="flex items-center ">
              <input
                type="checkbox"
                className="checkbox rounded-sm checkbox-xs  dark:border-white"
                id={genre}
                name="genre"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              <label
                htmlFor={genre}
                className="text-md cursor-pointer px-2 font-medium"
              >
                {genre}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-lg font-semibold">Filter By year</h3>
        <div className="grid grid-cols-3 ">
          {years.map((year, index) => (
            <div key={index} className="flex items-center ">
              <input
                type="checkbox"
                className="checkbox rounded-sm checkbox-xs  dark:border-whit"
                id={`year-${year}`}
                name="year"
                checked={selectedYears.includes(year)}
                onChange={() => handleYearChange(year)}
              />
              <label
                htmlFor={`year-${year}`}
                className="text-md cursor-pointer px-2 font-medium"
              >
                {year}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
