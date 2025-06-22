export default function Testimoni() {
  const data = [
    {
      nama: "Budi Setiawan",
      komentar: "Pelayanannya cepat dan teknisinya ramah. Kompor saya langsung normal!",
    },
    {
      nama: "Siti Rahma",
      komentar: "Service-nya memuaskan, harga juga terjangkau. Recommended banget!",
    },
    {
      nama: "Andi Komaru",
      komentar: "Kompor mati total, setelah dibantu langsung bisa nyala. Mantap!",
    },
  ];

  return (
    <section
      className="bg-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/testimoni.jpg')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-white mb-12">
          Testimoni Pelanggan ?
        </h2>
        <hr className="text-white" />

        <div className="grid gap-8 md:grid-cols-3 mt-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <img
                src="/bintang5.png"
                alt="bintang"
                className="w-28 h-auto mb-4"
              />
              <p className="text-gray-700 italic mb-3">"{item.komentar}"</p>
              <h4 className="font-semibold text-gray-800">{item.nama}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
