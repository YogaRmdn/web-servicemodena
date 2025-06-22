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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = {};
    if (!form.nama) newError.nama = "Wajib Diisi";
    if (!form.email) newError.email = "Wajib Diisi";
    if (!form.telepon) newError.telepon = "Wajib Diisi";
    setError(newError);

    if (Object.keys(newError).length === 0) {
      setIsSubmitting(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1dbf389d-b7c5-41b4-a8f8-2563b971bb90",
          subject: "Pesan Baru dari Website Service Kompor",
          nama: form.nama,
          email: form.email,
          telepon: form.telepon,
          alamat: form.alamat,
          pesan: form.pesan,
        }),
      });

      setIsSubmitting(false);

      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        setIsSuccess(true);
        setForm({
          nama: "",
          email: "",
          telepon: "",
          alamat: "",
          pesan: "",
        });
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
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
            required
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
              required
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
              required
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

        {/* Tombol */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          {isSubmitting ? "Mengirim..." : "KIRIM PESAN"}
        </button>
      </form>

      {/* Google Maps */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2345.0269642817775!2d115.22268198973302!3d-8.70583519610566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDInMjEuMSJTIDExNcKwMTMnMjUuOCJF!5e0!3m2!1sid!2sid!4v1750584975586!5m2!1sid!2sid"
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
