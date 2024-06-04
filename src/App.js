import { useState, useEffect } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <nav>
        <h3 className="nav-title">Learn React Router</h3>
        <div className="nav-buttons">
          <Link to={"/"}>
            <Button variant="contained">SWITCH TO A</Button>
          </Link>

          <Link to={"/B"}>
            <Button variant="contained" color="secondary">
              SWITCH TO B
            </Button>
          </Link>

          <Link to={"/C"}>
            <Button variant="contained" color="success">
              SWITCH TO C
            </Button>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path={"/"} element={<ComponentA />} />
        <Route path={"/B"} element={<ComponentB />} />
        <Route path={"/C"} element={<ComponentC />} />
      </Routes>
    </div>
  );
}

export default App;
