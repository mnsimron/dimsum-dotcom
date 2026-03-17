import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaChevronRight, FaBars } from "react-icons/fa";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State untuk animasi teks Rumah/Murah
  const [word, setWord] = useState("Rumah");
  const [fade, setFade] = useState(true);

  // EFFECT 1: Untuk Progress Bar (Simulasi 2.5 detik sesuai durasi Anda)
  useEffect(() => {
    const duration = 2500; 
    const intervalTime = duration / 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800); 
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // EFFECT 2: Untuk Transisi Teks Rumah -> Murah (Setiap 10 Detik)
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade(false); // Efek keluar
      
      setTimeout(() => {
        setWord((prev) => (prev === "Rumah" ? "Murah" : "Rumah"));
        setFade(true); // Efek masuk
      }, 500);
      
    }, 10000);

    return () => clearInterval(wordInterval);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#FFEABF] min-h-screen flex items-center justify-center px-4">
        <div className="text-center w-full max-w-md">
          <h1 className="text-5xl font-black text-[#D5540C]">
            Dimsum <span className="text-[#0593CA]">DotCom</span>
          </h1>
          <div className="mt-8 w-full bg-white rounded-full h-4 overflow-hidden border border-[#D5540C]/10">
            <div 
              className="bg-[#0593CA] h-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-[#D5540C] mt-4 font-bold uppercase text-sm italic">
            Menyiapkan Dimsum Anda... {progress}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFEABF] min-h-screen font-sans text-gray-800">
      <a href="https://wa.me" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center group">
        <FaWhatsapp size={30} />
      </a>

      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#D5540C]/10 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-black text-[#D5540C]">
            Dimsum <span className="text-[#0593CA]">DotCom</span>
          </Link>
          <div className="hidden md:flex gap-8 font-bold text-[#D5540C]">
            <Link to="/" className="hover:text-[#0593CA]">Home</Link>
            <Link to="/menu" className="hover:text-[#0593CA]">Menu</Link>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-[#D5540C] mb-6 leading-tight flex flex-col items-center">
        <span>Cemilan Enak</span>
        
        {/* Kontainer Utama Baris Kedua dengan Lebar Tetap agar tidak goyang */}
        <div className="w-full max-w-[500px] md:max-w-[800px] flex justify-center items-center text-[#0593CA]">
            
            {/* Box Kiri untuk kata "Harga" (Diberi flex-1 agar menekan ke tengah) */}
            <div className="flex-1 text-right">
            <span>Harga</span>
            </div>

            {/* Box Kanan untuk kata "Rumah/Murah" (Diberi flex-1 agar menekan ke tengah) */}
            <div className="flex-1 text-left ml-4 overflow-hidden h-[1.2em] relative">
            <span 
                className={`absolute left-0 transition-all duration-500 transform ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                {word}
            </span>
            </div>

        </div>
        </h1>
        <Link to="/menu" className="bg-[#D5540C] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 shadow-xl inline-flex items-center gap-2">
            Lihat Menu Lengkap <FaChevronRight />
        </Link>
      </section>

      <footer className="py-10 text-center bg-white border-t border-[#D5540C]/10">
        <p className="font-black text-[#D5540C]">© 2026 Dimsum DotCom</p>
      </footer>
    </div>
  );
}

export default Home;
