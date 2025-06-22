import { useState } from "react";

export default function Kontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    pesan: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (!form.nama) newError.nama = "Wajib Diisi";
    if (!form.email) newError.email = "Wajib Diisi";
    if (!form.telepon) newError.telepon = "Wajib Diisi";
    setError(newError);

    if (Object.keys(newError).length === 0) {
      console.log("Form submitted:", form);
      alert("Pesan berhasil dikirim!");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Tinggalkan Kami Pesan</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nama */}
        <div>
          <label className="block font-medium">
            Nama <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="nama"
            placeholder="Nama Anda"
            value={form.nama}
            onChange={handleChange}
            className={`w-full border rounded-md px-4 py-2 ${
              error.nama ? "border-red-500 bg-blue-50" : "border-gray-300"
            }`}
          />
          {error.nama && <p className="text-red-500 text-sm mt-1">{error.nama}</p>}
        </div>

        {/* Email & Telepon */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-medium">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded-md px-4 py-2 ${
                error.email ? "border-red-500 bg-blue-50" : "border-gray-300"
              }`}
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>
          <div className="flex-1">
            <label className="block font-medium">
              Telepon <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="telepon"
              placeholder="Nomor Telepon Anda"
              value={form.telepon}
              onChange={handleChange}
              className={`w-full border rounded-md px-4 py-2 ${
                error.telepon ? "border-red-500 bg-blue-50" : "border-gray-300"
              }`}
            />
            {error.telepon && <p className="text-red-500 text-sm mt-1">{error.telepon}</p>}
          </div>
        </div>

        {/* Alamat */}
        <div>
          <label className="block font-medium">Alamat</label>
          <input
            type="text"
            name="alamat"
            placeholder="Alamat Anda"
            value={form.alamat}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        {/* Pesan */}
        <div>
          <label className="block font-medium">Pesan</label>
          <textarea
            name="pesan"
            placeholder="Tulis pesan anda"
            value={form.pesan}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-32"
          />
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          KIRIM PESAN
        </button>
      </form>

      {/* Google Maps */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3943.8492185762516!2d115.2212641!3d-8.7058653!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDInMjEuMSJTIDExNcKwMTMnMjUuOCJF!5e0!3m2!1sid!2sid!4v1750584670333!5m2!1sid!2sid"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
