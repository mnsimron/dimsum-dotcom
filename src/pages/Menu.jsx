import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFire, FaUtensils, FaArrowLeft, FaHome } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuCategories = [
    {
      title: "Dimsum Original",
      desc: "Dimsum ayam premium dengan 6 pilihan topping (Wortel, Jamur, Keju, Crab Stick, Sosis, Twister).",
      icon: <FaUtensils />,
      items: ["Isi 5 Pcs", "Isi 10 Pcs", "Party Pack 20 Pcs"],
      img: "/ori.svg"
    },
    {
      title: "Dimsum Click-Mentai",
      desc: "Sensasi dimsum yang dibalut saus mentai creamy dan di-torch api panas untuk aroma smoky.",
      icon: <FaFire />,
      items: ["Mentai Original", "Mentai Spicy", "Double Cheese Mentai"],
      img: "/mentai.svg"
    },
    {
      title: "Dimsum Frozen",
      desc: "Kemasan praktis untuk stok cemilan di rumah. Cukup kukus 10 menit, siap saji!",
      icon: <FaBoxesStacked />,
      items: ["Pack Isi 20 (Frozen)", "Pack Isi 50 (Frozen)", "Pack Isi 75 (Frozen)"],
      img: "/frozen.svg"
    }
  ];

  return (
    <div className="bg-[#FFEABF] min-h-screen pt-24 pb-20 px-4 relative overflow-hidden font-sans">      
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 bg-white text-[#D5540C] p-3 rounded-2xl shadow-xl border-2 border-[#D5540C]/10 hover:bg-[#D5540C] hover:text-white transition-all flex items-center gap-2 font-black text-sm group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="hidden md:inline uppercase tracking-tighter">Kembali ke Home</span>
      </Link>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#D5540C] uppercase tracking-tighter">Daftar Menu</h1>
          <p className="text-gray-600 mt-4 font-medium italic">Klik kartu untuk melihat detail paket</p>
          <div className="h-2 w-20 bg-[#0593CA] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((cat, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index)}
              className={`p-8 rounded-[3.5rem] shadow-2xl border-4 flex flex-col cursor-pointer transition-all duration-500 relative overflow-hidden group ${
                activeIndex === index 
                ? "bg-[#D5540C] border-[#FFEABF] scale-105 text-white shadow-[#D5540C]/40" 
                : "bg-white border-transparent hover:border-[#FFEABF] text-gray-800"
              }`}
            >
              {/* SVG Background Illustration */}
              <img 
                src={cat.img} 
                alt={cat.title}
                className={`absolute -right-5 -top-3 w-48 h-48 transition-all duration-700 pointer-events-none rounded-full ${
                  activeIndex === index 
                  ? "opacity-80 scale-150 rotate-12 brightness-125" 
                  : "opacity-30 scale-100 rotate-0 brightness-100"
                }`}
              />

              {/* Icon Container */}
              <div className={`text-4xl mb-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner transition-all duration-500 relative z-10 ${
                activeIndex === index 
                ? "bg-white/20 rotate-[360deg] text-white" 
                : "bg-[#FFEABF]/30 text-[#D5540C]"
              }`}>
                {cat.icon}
              </div>
              
              <h2 className={`text-2xl font-black mb-4 uppercase leading-none relative z-10 ${
                activeIndex === index ? "text-white" : "text-[#D5540C]"
              }`}>
                {cat.title}
              </h2>
              
              <p className={`text-sm mb-8 font-medium leading-relaxed relative z-10 ${
                activeIndex === index ? "text-white/90" : "text-gray-600"
              }`}>
                {cat.desc}
              </p>
              
              <div className="mt-auto relative z-10">
                <h4 className={`font-bold mb-4 text-xs uppercase tracking-widest ${
                   activeIndex === index ? "text-[#FFEABF]" : "text-[#0593CA]"
                }`}>
                  Pilihan Paket:
                </h4>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className={`p-4 rounded-2xl text-sm font-bold shadow-sm border transition-all duration-300 ${
                      activeIndex === index 
                      ? "bg-white/10 border-white/20 text-white backdrop-blur-md" 
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

        {/* Home Button at Bottom */}
        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0593CA] font-black uppercase tracking-widest text-sm hover:underline">
            <FaHome /> Kembali ke Beranda Utama
          </Link>
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-20 bg-[#D5540C] p-12 rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden group">
          <h2 className="text-4xl font-black mb-4 tracking-tighter">Mau Pesan Banyak?</h2>
          <p className="mb-10 font-medium opacity-90 max-w-lg mx-auto">Kami menerima pesanan katering, ulang tahun, hajatan, hingga perpisahan kantor.</p>
          <a 
            href="https://wa.me" 
            className="bg-white text-[#D5540C] px-12 py-5 rounded-3xl font-black hover:scale-110 active:scale-95 transition-all inline-flex items-center gap-3 shadow-2xl text-xl uppercase tracking-tighter"
          >
            <FaWhatsapp size={28}/> HUBUNGI WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
