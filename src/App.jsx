import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavItem from "./Components/NavItem";
import NavBoard from "./Components/NavBoard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NavBoard category={category} />
    </div>
  );
}

export default App;
