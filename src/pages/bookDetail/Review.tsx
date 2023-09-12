type IUserReview = {
  reviewer: string;
  reviewerEmail: string;
  review: string;
};
type IProps = {
  userReview: IUserReview;
};

const Review = ({ userReview }: IProps) => {
  const { reviewer, reviewerEmail, review } = userReview;
  return (
    <div className="mt-2">
      <p>
        <span className="text-orange-500 font-semibold text-3xl">~ </span>
        {review}
      </p>
      <p className="">
        <span className="  italic text-black text-opacity-60">By </span>
        <span>{reviewer}</span>
      </p>
    </div>
  );
};

export default Review;
