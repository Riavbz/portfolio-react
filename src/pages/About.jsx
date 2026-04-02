import aboutAzaria from "../assets/aboutAzaria.jpeg"
import Typewriter from "../components/Typewriter";

function About() {

  return (
    <main className="about">
     <div className="container">
            <h1 className="headings shift"><Typewriter text="About Me" delay={70} />
            </h1>
            <div className="about-content">
                <img src={aboutAzaria} alt="Profile Image" />
                <div className="text">
                    <p><Typewriter text="Hi, I'm Azaria Francis - a Computer Science graduate with a passion for problem-solving and building technology that makes life easier. I enjoy working with different technologies, building projects, and I love learning how different tools fit together to create real solutions. I'm currently expanding skills through hands-on projects while exploring roles in software development and tech innovation." delay={50} /></p>
                    <div className="skills">
                        <span>HTML/CSS</span>
                        <span>Java</span>
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>React</span>
                        <span>SQL</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default About;