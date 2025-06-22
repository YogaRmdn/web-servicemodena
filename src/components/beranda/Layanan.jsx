export default function LayananSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kami ?</h2><hr />
        <p className="text-gray-600 mb-10 mt-5 leading-relaxed">
          Kami menyediakan layanan service kompor gas berbagai merk dengan
          teknisi <span className="bg-blue-600 px-3 py-2 text-white rounded-2xl">berpengalaman.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <img src="/layanan1.png" alt="layanan1" />
            <h3 className="text-xl font-semibold mb-2">Service Rutin</h3>
            <p>
              Membersihkan dan mengecek kompor Anda agar tetap aman digunakan.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <img src="/layanan2.png" alt="layanan2" />
            <h3 className="text-xl font-semibold mb-2">Perbaikan Kompor</h3>
            <p>Perbaikan api kecil, gas bocor, dan kompor mati total.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <img src="/layanan3.png" alt="layanan3" />
            <h3 className="text-xl font-semibold mb-2">Ganti Sparepart</h3>
            <p>
              Penggantian komponen yang rusak seperti burner, pipa, dan switch.
            </p>
          </div>
        </div>
        <a href="/layanan" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block mt-6">Selengkapnya</a>
      </div>
    </section>
  );
}
