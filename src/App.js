import Home from "./components/Home/Home";
import Styles from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore/Explore";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
