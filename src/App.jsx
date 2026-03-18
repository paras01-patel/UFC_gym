import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Coching from "./components/Coching";
import About from "./components/About";
import News from "./components/News";
import Classes from "./components/Classes";
import Login from "./components/Login";
  import Signup from "./components/Signup";





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coching" element={<Coching />} />
        <Route path="classes" element={<Classes />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />


      </Routes>
    </>
  );
}

export default App;