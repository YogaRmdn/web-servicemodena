import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon burger & close (opsional, bisa diganti svg)

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Layanan", path: "/layanan" },
    { name: "Kontak", path: "/kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" width={50} />
          <span className="text-2xl">Service Kompor Modena</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`hover:text-blue-600 transition font-medium ${
                  location.pathname === item.path
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden bg-white text-black shadow-md transition-all duration-300 px-6 py-4`}
        >
          <ul className="space-y-4">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-600 transition ${
                    location.pathname === item.path
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
