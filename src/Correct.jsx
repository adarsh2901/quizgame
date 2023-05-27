import { useNavigate } from "react-router-dom";
import "./correct.css";

const Correct = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="text">Correct! The numbers are sorted.</p>
      <button className="button" onClick={() => navigate("/")}>
        Reset
      </button>
    </div>
  );
};

export default Correct;
