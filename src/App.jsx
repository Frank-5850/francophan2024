import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
