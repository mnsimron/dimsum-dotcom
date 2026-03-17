import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaChevronRight, FaBars, FaTimes } from "react-icons/fa";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [word, setWord] = useState("Rumah ");
  const [fade, setFade] = useState(true);

  const backgroundDimsums = [
    { id: 1, src: "/dimsum-1.svg", top: "15%", left: "10%", size: "w-12 md:w-20", delay: "0s", duration: "6s" },
    { id: 2, src: "/dimsum-2.svg", top: "20%", left: "80%", size: "w-16 md:w-24", delay: "1s", duration: "8s" },
    { id: 3, src: "/dimsum-3.svg", top: "70%", left: "15%", size: "w-10 md:w-16", delay: "2s", duration: "7s" },
    { id: 4, src: "/dimsum-1.svg", top: "80%", left: "85%", size: "w-20 md:w-28", delay: "0.5s", duration: "9s" },
    { id: 5, src: "/dimsum-2.svg", top: "50%", left: "5%", size: "w-8 md:w-12", delay: "3s", duration: "5s" },
    { id: 6, src: "/dimsum-3.svg", top: "10%", left: "50%", size: "w-10 md:w-14", delay: "4s", duration: "10s" },
    { id: 7, src: "/dimsum-3.svg", top: "60%", left: "70%", size: "w-12 md:w-18", delay: "2.5s", duration: "6.5s" },
  ];

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

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWord((prev) => (prev === "Rumah " ? "Murah " : "Rumah "));
        setFade(true);
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
            <div className="bg-[#0593CA] h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-[#D5540C] mt-4 font-bold uppercase text-sm italic">
            Menyiapkan Dimsum Anda... {progress}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFEABF] min-h-screen font-sans text-gray-800 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {backgroundDimsums.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt="floating-dimsum"
            className={`absolute ${item.size} opacity-40 md:opacity-50 transition-transform`}
            style={{
              top: item.top,
              left: item.left,
              animation: `floatingDimsum ${item.duration} ease-in-out infinite alternate`,
              animationDelay: item.delay,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes floatingDimsum {
            from { transform: translateY(0) rotate(0deg); }
            to { transform: translateY(-30px) rotate(15deg); }
          }
        `}
      </style>

      <main className="flex-grow relative z-10 flex flex-col">
        <a href="https://wa.me" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center group">
          <FaWhatsapp size={30} />
        </a>

        {/* NAVBAR RESPONSIVE */}
        <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#D5540C]/10 py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl md:text-2xl font-black text-[#D5540C]">
              Dimsum <span className="text-[#0593CA]">DotCom</span>
            </Link>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8 font-bold text-[#D5540C]">
              <Link to="/" className="hover:text-[#0593CA]">Home</Link>
              <Link to="/menu" className="hover:text-[#0593CA]">Menu</Link>
              <Link to="/about" className="hover:text-[#0593CA]">Tentang</Link>
            </div>

            {/* Tombol Hamburger Mobile */}
            <button className="md:hidden text-[#D5540C] text-2xl focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-4 font-bold text-[#D5540C] pb-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0593CA]">Home</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0593CA]">Menu</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#0593CA]">Tentang</Link>
            </div>
          </div>
        </nav>

        {/* HERO SECTION RESPONSIVE */}
        <section className="flex-grow px-4 text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-[#D5540C] mb-8 leading-tight flex flex-col items-center w-full">
            <span className="whitespace-nowrap">Cemilan Enak</span>
            
            <div className="w-full flex justify-center items-center text-[#0593CA]">
                <div className="flex-1 text-right">
                  <span>Harga</span>
                </div>
                <div className="flex-1 text-left ml-2 md:ml-4 relative h-[1.3em] overflow-visible">
                  <span className={`absolute left-0 transition-all duration-500 transform whitespace-nowrap ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    {word}
                  </span>
                </div>
            </div>
          </h1>
          <Link to="/menu" className="bg-[#D5540C] text-white px-6 md:px-8 py-3 rounded-2xl font-bold text-base md:text-lg hover:bg-orange-700 shadow-xl inline-flex items-center gap-2 transition-transform active:scale-95">
              Lihat Menu Lengkap <FaChevronRight />
          </Link>
        </section>
      </main>

      <footer className="py-8 md:py-10 text-center bg-white border-t border-[#D5540C]/10 relative z-10">
        <p className="font-black text-[#D5540C] text-sm md:text-base">© 2026 Dimsum DotCom</p>
      </footer>
    </div>
  );
}

export default Home;
