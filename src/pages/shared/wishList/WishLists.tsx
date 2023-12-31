import { TbJewishStar } from "react-icons/tb";
import { WishlistCard } from "./WishlistCard";
import { useGetProfileQuery } from "../../../redux/api/apiSlice";
import { IBook } from "../../home/TopTenBooks/TopTenBooks";

const WishLists = () => {
  const { data } = useGetProfileQuery(undefined);

  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className="btn  btn-ghost hover:bg-base-200 lg:px-6 rounded-sm group "
      >
        {data?.data?.wishlist.length > 0 && (
          <div className="badge badge-sm">{data.data.wishlist.length}</div>
        )}
        <TbJewishStar className={"text-xl group-hover:text-orange-500"} />{" "}
        wishlist
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-sm  w-96 flex flex-col gap-4"
      >
        {data?.data?.wishlist.map((book: IBook, index: number) => (
          <WishlistCard key={index} book={book}></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default WishLists;
