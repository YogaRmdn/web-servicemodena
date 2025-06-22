export default function Layanan() {
  const layananList = [
    {
      title: "Pasang Kompor Baru",
      deskripsi: "Kami menyediakan layanan pemasangan kompor baru dengan profesional. Jadi Anda bisa langsung menikmati kenyamanan memasak di rumah.",
      icon: "/layanan1.png",
    },
    {
      title: "Penggantian Sparepart",
      deskripsi: "Layanan penggantian sparepart kompor dengan teknisi ahli dan sparepart berkualitas tinggi. Percayakan perbaikan kompor Anda kepada kami.",
      icon: "/layanan3.png",
    },
    {
      title: "Kebocoran Gas",
      deskripsi: "Kami siap menangani kebocoran gas dengan cepat dan aman menggunakan teknisi berpengalaman dan peralatan canggih.",
      icon: "/layanan4.png",
    },
    {
      title: "Kompor Mati / Api Kecil",
      deskripsi: "Kami siap membantu Anda mengatasi berbagai masalah teknis, seperti api yang tidak stabil, kompor mati, dan masalah pengapian.",
      icon: "/layanan2.png",
    },
  ];

  return (
    <section className="bg-gray-100 text-white py-12">
      <div className="overflow-x-auto px-6">
        <div className="flex gap-6 min-w-[800px] sm:min-w-full text-black">
          {layananList.map((item, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white hover:bg-gray-200 transition rounded-xl p-6 border"
            >
              <img src={item.icon} alt={item.title} className="w-20 mb-4" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
