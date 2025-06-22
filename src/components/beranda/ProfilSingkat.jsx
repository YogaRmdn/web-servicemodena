export default function ProfilSingkat() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Gambar */}
        <div className="w-full md:w-1/2">
          <img
            className="rounded-3xl shadow w-full"
            src="/profile-singkat.jpg"
            alt="profil-singkat"
          />
        </div>

        {/* Teks */}
        <div className="w-full md:w-1/2 max-w-3xl text-center md:text-left space-y-7">
          <h1 className="text-4xl leading-relaxed">
            Service kompor gas dan listrik dengan teknisi <span className="bg-blue-600 px-3 text-white rounded-2xl">berpengalaman.</span>
          </h1><hr />
          <p>
            Selamat datang di Service Kompor Modena. Kami menangani berbagai
            kerusakan seperti kebocoran gas, penggantian sparepart, mati total,
            dan lainnya.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
          >
            Profil selengkapnya
          </a>
        </div>

      </div>
    </section>
  );
}
