import { Link } from 'react-router'
import AzariaImage from "../assets/AzariaImage.png"
import Typewriter from '../components/Typewriter';

function Home() {
  return (
    <main
      className="home-section">
        <Link to="/home"></Link>
      <div className="hero-text">
          <h1>Hello, I'm <span><Typewriter text="Azaria Francis" delay={150} /></span></h1>
          <p>Software Developer | NPower Student</p>
          <Link to="/projects" className="btn btn-left">View My Work</Link>
      </div>

      <div className="home-image">
          <img src={AzariaImage} alt="Picture of website author" />
      </div>
    </main>
  );
}

export default Home;