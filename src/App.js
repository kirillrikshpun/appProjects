import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";
import AuthComponent from "./components/AuthComponent";
import MainComponent from "./components/MainComponent";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData")) && navigate("/info")
  }, [])

  return (
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route path="info" element={<MainComponent />} />
      </Routes>
  );
}

export default App;