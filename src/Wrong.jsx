import { useNavigate } from "react-router-dom";
import "./correct.css";

const Wrong = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="text">Wrong! The numbers are not sorted.</p>
      <button
        className="button"
        onClick={() => navigate("/")}
        style={{ backgroundColor: "red" }}
      >
        Reset
      </button>
    </div>
  );
};

export default Wrong;
