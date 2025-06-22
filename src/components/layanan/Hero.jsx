export default function HeroLayanan() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero.jpg')" }} // letakkan gambar ini di public/images
    >
      <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Layanan</h1>
        <p className="text-white mt-2">
          <span className="font-medium">HOME</span> / <span className="font-bold">LAYANAN</span>
        </p>
      </div>
    </section>
  );
}