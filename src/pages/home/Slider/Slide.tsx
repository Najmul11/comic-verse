import { ISliderData } from "./Slide.constant";

type IProps = {
  slide: ISliderData;
};

const Slide = ({ slide }: IProps) => {
  const { image, tagline } = slide;
  return (
    <div className="rounded-md relative">
      <img src={image} alt="" className="w-full lg:h-[700px] rounded-md" />
      <div className="absolute inset-0 bg-gradient-to-r  from-black to-transparent opacity-100"></div>
      <div className="absolute inset-0 bg-gradient-to-r  from-black to-transparent opacity-80"></div>
      <div className="absolute  inset-0 flex justify-center  items-center  text-center">
        <h1 className="text-3xl lg:text-6xl font-semibold text-white mb-2 lg:mb-6 dark:text-gray-300">
          {tagline}
        </h1>
      </div>
    </div>
  );
};

export default Slide;
