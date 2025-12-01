import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BrowseSkills from "./pages/BrowseSkills";
import OfferSkill from "./pages/OfferSkill";
import RequestSkill from "./pages/RequestSkill";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseSkills />} />
        <Route path="/offer" element={<OfferSkill />} />
        <Route path="/request" element={<RequestSkill />} />
      </Routes>
    </BrowserRouter>
  );
}
