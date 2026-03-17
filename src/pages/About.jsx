import { Link } from "react-router-dom";
import { FaHistory, FaGlobeAmericas, FaUtensils, FaHeart, FaArrowLeft, FaHome } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#FFEABF] min-h-screen font-sans text-gray-800 flex flex-col selection:bg-[#0593CA] selection:text-white">
      {/* Tombol Kembali */}
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 bg-white text-[#D5540C] p-3 rounded-2xl shadow-xl border-2 border-[#D5540C]/10 hover:bg-[#D5540C] hover:text-white transition-all flex items-center gap-2 font-black text-sm group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="hidden md:inline uppercase tracking-tighter text-xs">Beranda</span>
      </Link>

      <main className="flex-grow pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* JUDUL BESAR */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-[#D5540C] tracking-tighter leading-none mb-4">
              SEJARAH & PERJALANAN<br/> <span className="text-[#0593CA]">Dimsum DotCom</span>
            </h1>
            <div className="h-2 w-24 bg-[#D5540C] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            
            {/* BABAK 1: TRADISI KUNO */}
            <section className="relative pl-8 border-l-4 border-[#D5540C]/30">
              <div className="absolute -left-[14px] top-0 bg-[#D5540C] text-white p-2 rounded-full">
                <FaHistory size={12} />
              </div>
              <h2 className="text-2xl font-black text-[#D5540C] uppercase mb-4 tracking-tight">Awal Mula di Jalur Sutra</h2>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border-b-8 border-[#D5540C]/10">
                <p className="leading-relaxed mb-4">
                  Ratusan tahun lalu di wilayah selatan Tiongkok (Guangdong), para pedagang menyusuri <span className="font-bold text-[#0593CA]">Silk Road</span>. Kelelahan membuat mereka berhenti di rumah teh untuk menikmati makanan kecil yang hangat dan ringan.
                </p>
                <p className="italic text-[#D5540C] font-medium bg-[#FFEABF]/30 p-4 rounded-xl border-l-4 border-[#D5540C]">
                  "Dimsum secara harfiah berarti 'Menyentuh Hati'. Awalnya hanya pendamping teh, kini menjadi simbol kebersamaan sosial melalui tradisi Yum Cha."
                </p>
              </div>
            </section>

            {/* BABAK 2: PENYEBARAN DUNIA */}
            <section className="relative pl-8 border-l-4 border-[#0593CA]/30">
              <div className="absolute -left-[14px] top-0 bg-[#0593CA] text-white p-2 rounded-full">
                <FaGlobeAmericas size={12} />
              </div>
              <h2 className="text-2xl font-black text-[#0593CA] uppercase mb-4 tracking-tight">Menyebar ke Penjuru Dunia</h2>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border-b-8 border-[#0593CA]/10">
                <p className="leading-relaxed mb-6">
                  Seiring migrasi masyarakat Tiongkok, restoran dimsum mulai menjamur di Hong Kong, Singapore, hingga Kuala Lumpur. Dimsum bukan lagi sekadar makanan rumah teh, tapi kuliner populer untuk sarapan hingga camilan santai.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Siomay', 'Hakau', 'Bakpao', 'Lumpia', 'Dumpling'].map(item => (
                    <span key={item} className="bg-[#0593CA]/5 text-[#0593CA] text-xs font-black p-2 rounded-lg text-center uppercase border border-[#0593CA]/10 tracking-widest">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* BABAK 3: ADAPTASI INDONESIA */}
            <section className="relative pl-8 border-l-4 border-[#D5540C]/30">
              <div className="absolute -left-[14px] top-0 bg-[#D5540C] text-white p-2 rounded-full">
                <FaUtensils size={12} />
              </div>
              <h2 className="text-2xl font-black text-[#D5540C] uppercase mb-4 tracking-tight">Tiba di Indonesia</h2>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border-b-8 border-[#D5540C]/10">
                <p className="leading-relaxed">
                  Dimsum masuk ke Jakarta, Medan, dan Surabaya melalui komunitas Tionghoa. Kini, ia menjadi <span className="italic">comfort food</span> favorit karena rasanya yang gurih, porsi praktis, dan kemudahan teknologi <span className="font-bold text-[#0593CA]">Frozen Food</span> yang bisa dinikmati kapan saja di rumah.
                </p>
              </div>
            </section>

            {/* BABAK 4: HADIRNYA DIMSUM DOTCOM */}
            <section className="bg-[#D5540C] p-10 md:p-14 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                <FaHeart size={200} />
              </div>
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-black mb-6 tracking-tighter">Hadirnya Dimsum DotCom</h2>
                <div className="space-y-6 text-lg font-medium opacity-90 leading-relaxed">
                  <p>
                    Berangkat dari kecintaan terhadap kuliner penuh cerita ini, lahirlah <span className="underline decoration-white/40">Dimsum DotCom</span>.
                  </p>
                  <p>
                    Kami percaya dimsum adalah simbol kebersamaan. Dengan bahan berkualitas dan resep yang disempurnakan sejak 2025, kami hadir membawa kebahagiaan di setiap gigitan.
                  </p>
                  <p className="text-xl font-black italic pt-4">
                    "Karena bagi kami, setiap dimsum bukan sekadar makanan — tetapi sebuah cerita."
                  </p>
                </div>
              </div>
            </section>

          </div>

          <div className="mt-20 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-[#0593CA] font-black uppercase tracking-widest text-sm hover:underline">
              <FaHome /> Kembali ke Beranda Utama
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center bg-white border-t border-[#D5540C]/10 w-full mt-auto">
        <p className="font-black text-[#D5540C]">© 2026 Dimsum DotCom</p>
      </footer>
    </div>
  );
};

export default About;
