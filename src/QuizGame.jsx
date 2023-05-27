import { useEffect, useState } from "react";
import "./QuizGame.css";
import { useNavigate } from "react-router-dom";

const QuizGame = () => {
  const [values, setValues] = useState([]);
  const navigate = useNavigate();

  const generateRandomValues = (count) => {
    const randomValues = [];
    for (let i = 0; i < count; i++) {
      randomValues.push(Math.floor(Math.random() * 100));
    }
    return randomValues;
  };

  const resetGame = () => {
    // Generate new random values
    const newValues = generateRandomValues(5);
    setValues(newValues);
  };

  useEffect(() => {
    resetGame(); // Call resetGame on component mount
  }, []);

  const checkAnswer = () => {
    const buckets = document.getElementsByClassName("bucket");
    const userValues = [];
    for (let i = 0; i < buckets.length; i++) {
      const bucket = buckets[i];
      if (bucket.children.length === 1) {
        userValues.push(parseInt(bucket.children[0].innerText));
      } else {
        alert("Please fill all inputs!");
        return;
      }
    }

    const sortedValues = [...userValues].sort((a, b) => a - b);
    const isCorrect =
      JSON.stringify(userValues) === JSON.stringify(sortedValues);

    if (isCorrect) {
      navigate("/correct");
    } else {
      navigate("/wrong");
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    if (event.target.tagName === "DIV" && element) {
      event.target.appendChild(element);
    }
  };

  return (
    <div className="container">
      <div className="game-container">
        <h2>Arrange the values in Ascending Order.</h2>
        <ul className="options" id="options">
          {values.map((value, index) => (
            <li key={index} id={`value${index}`} draggable onDragStart={drag}>
              {value}
            </li>
          ))}
        </ul>

        <div className="buckets">
          <div
            className="bucket"
            id="bucket1"
            onDrop={drop}
            onDragOver={allowDrop}
          ></div>
          <div
            className="bucket"
            id="bucket2"
            onDrop={drop}
            onDragOver={allowDrop}
          ></div>
          <div
            className="bucket"
            id="bucket3"
            onDrop={drop}
            onDragOver={allowDrop}
          ></div>
          <div
            className="bucket"
            id="bucket4"
            onDrop={drop}
            onDragOver={allowDrop}
          ></div>
          <div
            className="bucket"
            id="bucket5"
            onDrop={drop}
            onDragOver={allowDrop}
          ></div>
        </div>

        <button className="check-btn" onClick={checkAnswer}>
          Check
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
