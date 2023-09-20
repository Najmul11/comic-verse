import useTitle from "../../hooks/useTitle";
import Slider from "./Slider/Slider";
import TopTenBooks from "./TopTenBooks/TopTenBooks";

const Home = () => {
  useTitle("Home");
  return (
    <div className="dark:bg-black">
      <Slider />
      <TopTenBooks />
    </div>
  );
};

export default Home;
