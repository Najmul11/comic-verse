import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto flex justify-center items-center">
        <div className="lg:pt-32 pt-10">
          <h2 className="text-5xl font-bold text-center pb-8">Login now!</h2>
          <form className="w-[430px]  bg-white rounded-lg p-6 px-8 flex flex-col ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered "
              />
            </div>
            <div className="flex justify-between pb-8">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to={"/signup"} className="label-text-alt link link-hover">
                  New here? Sign up{" "}
                </Link>
              </label>
            </div>
            <button className=" btn mb-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
