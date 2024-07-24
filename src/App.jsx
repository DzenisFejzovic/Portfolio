import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import WebDevelopment from "./components/sites/webDevelopment";
import RobloxStudio from "./components/sites/robloxStudio";
import ThreeDmodelling from "./components/sites/3Dmodelling";
import AboutMe from "./components/sites/aboutMe";

function App() {
  return (
    <>
      <div>
        <AboutMe></AboutMe>
      </div>

      <Routes>
        <Route path="/webDevelopment" element={<WebDevelopment />} />
        <Route path="/robloxStudio" element={<RobloxStudio />} />
        <Route path="/3Dmodelling" element={<ThreeDmodelling />} />
      </Routes>
    </>
  );
}

export default App;
