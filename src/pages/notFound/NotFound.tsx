import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        \<h1 className="text-6xl">Ooops Not Found</h1>
        <button onClick={() => navigate("/")} className="btn rounded-sm mt-5">
          go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
