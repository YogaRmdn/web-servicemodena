export default function Tentang() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        
        {/* Kiri - Teks */}
        <div className="flex-1 space-y-6">
          <h5 className="text-center text-3xl tracking-widest font-semibold text-gray-600">Tentang kami ?</h5><hr className="text-gray-600" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Service Kompor <span className="text-blue-600">Modena</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Selamat datang di Service Kompor Modena, penyedia layanan terpercaya untuk perbaikan dan pemeliharaan kompor gas di Jakarta & Bali. Kami menangani berbagai kerusakan seperti kebocoran gas, penggantian sparepart, mati total, dan kompor yang hanya mengeluarkan api kecil.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Keunggulan kami terletak pada biaya service yang terjangkau tanpa mengurangi kualitas layanan. Kami berkomitmen untuk memberikan solusi terbaik dengan perhatian penuh terhadap kebutuhan Anda.
          </p>
        </div>

        {/* Kanan - Gambar */}
        <div className="flex-1 relative flex flex-col items-center">
          <img
            src="/hero.jpg"
            alt="Profil"
            className="rounded-3xl shadow-xl w-full max-w-md"
          />
          <img
            src="/logo.png"
            alt="Api"
            className="absolute bottom-[-40px] left-[-40px] w-32 h-32 rounded-2xl shadow-xl border-4 border-white"
          />
          <img
            src="/logo.png"
            alt="Logo"
            className="absolute top-[-20px] right-[-20px] w-24 h-24 rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
