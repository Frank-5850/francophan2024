import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/francophan2024/">Home</Link>
        {" | "}
        <Link to="/francophan2024/About">About</Link>
        {" | "}
        <Link to="/francophan2024/work">Work</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
