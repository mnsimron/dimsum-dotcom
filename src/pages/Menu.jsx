import { useState } from "react"; // Tambahkan useState
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFire, FaIceCream, FaUtensils, FaArrowLeft, FaHome } from "react-icons/fa";

const Menu = () => {
  // State untuk menyimpan index card yang aktif (default null atau 0)
  const [activeIndex, setActiveIndex] = useState(null);

  const menuCategories = [
    {
      title: "Dimsum Original",
      desc: "Dimsum ayam premium dengan 6 pilihan topping (Wortel, Jamur, Keju, Crab Stick, Sosis, Twister).",
      icon: <FaUtensils className={activeIndex === 0 ? "text-white" : "text-[#D5540C]"} />,
      items: ["Isi 4 Pcs", "Isi 10 Pcs", "Party Pack 20 Pcs"],
    },
    {
      title: "Dimsum Click-Mentai",
      desc: "Sensasi dimsum yang dibalut saus mentai creamy dan di-torch api panas untuk aroma smoky.",
      icon: <FaFire className={activeIndex === 1 ? "text-white" : "text-red-600"} />,
      items: ["Mentai Original", "Mentai Spicy", "Double Cheese Mentai"],
    },
    {
      title: "Dimsum Frozen",
      desc: "Kemasan praktis untuk stok cemilan di rumah. Cukup kukus 10 menit, siap saji!",
      icon: <FaIceCream className={activeIndex === 2 ? "text-white" : "text-[#0593CA]"} />,
      items: ["Pack Isi 10 (Frozen)", "Pack Isi 25 (Frozen)", "Saus Botolan"],
    }
  ];

  return (
    <div className="bg-[#FFEABF] min-h-screen pt-24 pb-20 px-4 relative">      
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 bg-white text-[#D5540C] p-3 rounded-2xl shadow-xl border-2 border-[#D5540C]/10 hover:bg-[#D5540C] hover:text-white transition-all flex items-center gap-2 font-black text-sm group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="hidden md:inline uppercase tracking-tighter">Kembali ke Home</span>
      </Link>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#D5540C] uppercase tracking-tighter">Daftar Menu</h1>
          <p className="text-gray-600 mt-4 font-medium italic">Klik kartu untuk memilih menu favoritmu</p>
          <div className="h-2 w-20 bg-[#0593CA] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((cat, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index)} // Set index saat diklik
              className={`p-8 rounded-[3rem] shadow-xl border-4 flex flex-col cursor-pointer transition-all duration-300 transform ${
                activeIndex === index 
                ? "bg-[#D5540C] border-[#FFEABF] scale-105 text-white" // Warna Primary saat Active
                : "bg-white border-transparent hover:border-[#FFEABF] text-gray-800" // Putih saat Inactive
              }`}
            >
              <div className={`text-4xl mb-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-colors ${
                activeIndex === index ? "bg-white/20" : "bg-[#FFEABF]/30"
              }`}>
                {cat.icon}
              </div>
              
              <h2 className={`text-2xl font-black mb-4 uppercase leading-none transition-colors ${
                activeIndex === index ? "text-white" : "text-[#D5540C]"
              }`}>
                {cat.title}
              </h2>
              
              <p className={`text-sm mb-6 font-medium leading-relaxed transition-colors ${
                activeIndex === index ? "text-white/90" : "text-gray-600"
              }`}>
                {cat.desc}
              </p>
              
              <div className="mt-auto">
                <h4 className={`font-bold mb-3 text-xs uppercase tracking-widest ${
                   activeIndex === index ? "text-[#FFEABF]" : "text-[#0593CA]"
                }`}>
                  Pilihan Paket:
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className={`p-3 rounded-xl text-sm font-bold shadow-sm border transition-all ${
                      activeIndex === index 
                      ? "bg-white/10 border-white/20 text-white" 
                      : "bg-[#FFEABF]/20 border-[#D5540C]/5 text-gray-700"
                    }`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0593CA] font-black uppercase tracking-widest text-sm hover:underline">
            <FaHome /> Kembali ke Beranda Utama
          </Link>
        </div>

        <div className="mt-20 bg-[#D5540C] p-10 rounded-[3rem] text-center text-white shadow-2xl">
          <h2 className="text-3xl font-black mb-4">Mau Pesan Banyak untuk Acara?</h2>
          <p className="mb-8 font-medium opacity-90">Kami menerima pesanan katering, ulang tahun, hajatan dan perpisahan kantor.</p>
          <a href="https://wa.me" className="bg-white text-[#D5540C] px-10 py-4 rounded-2xl font-black hover:bg-[#FFEABF] transition-colors inline-flex items-center gap-2 shadow-lg text-lg">
            <FaWhatsapp size={24}/> HUBUNGI WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
