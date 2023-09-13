const Sidebar = () => {
  const years = [
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  const genres = [
    "Superhero",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Crime/Noir",
    "Mystery",
    "Historical",
    "Romance",
    "Comedy",
    "Adventure",
  ];

  return (
    <div className=" rounded-lg flex flex-col gap-5">
      <div>
        <label className="label">
          <span className="label-text">Search</span>
        </label>
        <input
          type="text"
          placeholder="Search by title, author, genre"
          className="input input-bordered w-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="text-lg font-semibold">Filter By Genre</h3>
        <div className="grid grid-cols-2 ">
          {genres.map((genre, index) => (
            <div key={index} className="flex items-center ">
              <input
                type="checkbox"
                className="checkbox rounded-sm checkbox-xs  "
                id={genre}
                name="2020"
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
                className="checkbox rounded-sm checkbox-xs  "
                id={`year-${year}`}
                name="2020"
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
