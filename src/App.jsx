import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu"; // Pastikan sudah buat src/pages/Menu.jsx
import About from "./pages/About"; // Pastikan sudah buat src/pages/About.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
