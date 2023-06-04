import "./App.css";
import "./pages/Pages.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Project";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
