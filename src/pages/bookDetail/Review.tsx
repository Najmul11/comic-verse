import { IReview } from "../home/TopTenBooks/TopTenBooks";

type IProps = {
  userReview: IReview;
};

const Review = ({ userReview }: IProps) => {
  const { reviewer, review } = userReview;

  return (
    <div className="mt-2">
      <p>
        <span className="text-orange-500 font-semibold text-3xl">~ </span>
        {review}
      </p>
      <p className="">
        <span className="  italic text-black text-opacity-60">By </span>
        <span>{reviewer?.name}</span>
      </p>
    </div>
  );
};

export default Review;
