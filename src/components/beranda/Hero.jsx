export default function Hero() {
  return (
    // Hero 1
    <section
      className="pt-24 bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white text-center px-4 font-poetsen"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundBlendMode: "darken",
      }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-bold mb-4 drop-shadow-lg">
        Service Center Kompor <br /> Modena
      </h1>
      <p className="text-lg sm:text-xl mb-6 drop-shadow">
        Kami melayani perbaikan dan pemeliharaan kompor khusus merk Modena. dengan teknisi berpengalaman.
      </p>
      <a
        href="https://wa.me/6281234567890"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition"
      >
        Hubungi Kami
      </a>
    </section>
  );
}
