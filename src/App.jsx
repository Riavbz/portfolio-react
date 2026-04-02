import { Route, Routes } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import './styles/main.css'

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <NavBar />
      <main className="pt-20 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
      {/* <main className="pt-16">
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <ContactForm id="contact" />
      </main> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;