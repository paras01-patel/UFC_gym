import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Coching from "./components/Coching";
import About from "./components/About";
import News from "./components/News";
import Classes from "./components/Classes";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coching" element={<Coching />} />
        <Route path="classes" element={<Classes />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;