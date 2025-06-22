import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";
import Layanan from "./pages/Layanan";
import Kontak from "./pages/Kontak";

export default function App() {
  return (
    <div className="font-poetsen">
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Router>
    </div>
  );
}
