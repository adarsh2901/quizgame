import QuizGame from "./QuizGame";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Correct from "./Correct";
import Wrong from "./Wrong";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizGame />} />
        <Route path="/correct" element={<Correct />} />
        <Route path="/wrong" element={<Wrong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
