import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import About from "./pages/About";

function App() {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width-device-width, inital-scale=1.0" />
        <title>Tamara - Personal Portfolio</title>
      </head>

      <div className="wrapper-main">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </html>
  );
}

export default App;
