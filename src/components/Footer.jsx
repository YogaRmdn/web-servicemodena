import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Kiri - Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-20 mb-4" />
          <h1 className="text-2xl font-bold">Service Kompor Modena</h1>
          </div>
          <p className="text-sm leading-relaxed">
            Kepercayaan Anda adalah prioritas kami, dan kami siap membantu agar kompor Anda berfungsi optimal kembali.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-bold mb-4">MENU</h3>
          <ul className="space-y-2 text-sm">
            <li>&gt; Profil</li>
            <li>&gt; Layanan</li>
            <li>&gt; Artikel</li>
            <li>&gt; Kontak</li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-bold mb-4">KONTAK</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>Alamat :</strong><br />
              JL. Beringin Timur STP. 11, No. 4, Kassi-Kassi, Kec. Rappocini, Kota Makassar, Sulawesi Selatan
            </li>
            <li><strong>Whatsapp :</strong><br />0813-1122-4493</li>
            <li><strong>Telepon :</strong><br />0813-1122-4493</li>
          </ul>
        </div>

        {/* Artikel */}
        <div>
          <h3 className="font-bold mb-4">SOSIAL MEDIA</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              Facebook
            </li>
            <li className="flex items-start gap-3">
              Instagram
            </li>
            <li className="flex items-start gap-3">
              Youtube
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-xs text-gray-400">
        Copyright © 2025 Service Kompor Makassar - Published by Santriit
      </div>
    </footer>
  );
}
