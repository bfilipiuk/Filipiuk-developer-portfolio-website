import React, { useState, useEffect } from "react";
import Loader from "../components/Loader/loader";
import Navbar from "../components/Navbar/navbar";
import ContactForm from "../components/ContactForm/contactform";
import Footer from "../components/Footer/footer";
import CustomSnackbar from "../components/Snackbar/Snackbar";
import ExperienceItem from "../components/ExperienceItem/ExperienceItem";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import Skillset from "../components/Skillset/Skillset";
// import { ReactComponent as LinkedinIcon } from "../assets/LinkedIn_icon.svg";
// import { ReactComponent as GitIcon } from "../assets/githubicon.svg";
// import { ReactComponent as BehanceIcon } from "../assets/behance-2.svg";
import "./styles.css";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);
  const handleFormAlert = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    const interval = setInterval(() => {
      setProgress((oldProgress) => Math.min(oldProgress + 10, 100));
      if (progress >= 100) clearInterval(interval);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [progress]);

  if (loading) return <Loader progress={progress} />;

  return (
    <div>
      <Navbar />
      <div className="full-page">
        <header id="start" className="header">
          <h1 className="header-text-1">Bartek Filipiuk</h1>
          <h2 className="header-text-2">Developer Portfolio</h2>
          <p className="header-text-3">
            Passionate about technology and focused on creating solutions that 
            address real-world challenges in IT and everyday life. Technology is not just about innovation but also about making a tangible difference in people’s lives.
          </p>
        </header>

        <section id="about" className="about">
          <h2 className="about-header">About me</h2>
          <p className="about-text">
            Fourth-year Telecommunications student on ICT specialization with a strong interest in IT engineering. I’m passionate about solving real-world problems, 
            both in IT and in everyday life, always looking to make things work better. I like learning new things as I believe that no knowledge 
            is useless—everything can prove valuable one day in the IT world . In my spare time I am an enthusiast of extreme physical challenges 
            and sports in general, which have taught me to keep "banging my head against the wall" until I reach my goals.
          </p>
          <h2 className="experience-header">Skillset</h2>
          <Skillset skills={["Networking", "SDN", "QoS", "Linux", "Python", "Java", "C", "C++", "Arduino", "HTML", "CSS", "React", 
                            "JavaScript", "Azure", "Bash", "GitHub or other VCS", "Latex", "Wireshark", "Mobile Networks", "Figma UI/UX"]} />
        </section>

        <section id="projects" className="projects">
          <h2 className="projects-header">Projects</h2>
          <div className="projects-container">
            <ProjectItem
              title="Project"
              skills={["React", "API Integration"]}
              links={[
                { href: "https://github.com", src: "/assets/githubicon.svg", alt: "GitHub Icon" }
              ]}
              href="https://google.com"
            />
            <ProjectItem
              title="Project"
              skills={["React", "API Integration"]}
              links={[
                { href: "https://github.com", src: "/assets/githubicon.svg", alt: "GitHub Icon" }
              ]}
            />
            <ProjectItem
              title="Project"
              skills={["React", "API Integration"]}
              links={[
                { href: "https://github.com", src: "/assets/githubicon.svg", alt: "GitHub Icon" }
              ]}
            />
            <ProjectItem
              title="Project"
              skills={["React", "API Integration"]}
              links={[
                { href: "https://github.com", src: "/assets/githubicon.svg", alt: "GitHub Icon" }
              ]}
            />
            <ProjectItem
              title="Project"
              skills={["React", "API Integration"]}
              links={[
                { href: "https://github.com", src: "/assets/githubicon.svg", alt: "GitHub Icon" }
              ]}
            />
          </div>
        </section>

        <section id="contact" className="contact">
          <h2 className="contact-header">Contact</h2>
          <ContactForm onFormAlert={handleFormAlert} />
          <CustomSnackbar
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            severity={snackbarSeverity}
          />
          <div className="contact-info-header">Find me here:</div>
          <div className="contact-info">
            <span>bartek.filipiuk02@gmail.com</span>
            <span>+48 882 607 006</span>
            <div className="contact-info-icons">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/LinkedIn_icon.svg" className="linkedin-icon" />             
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/githubicon.svg" className="git-icon" />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/behance-2.svg" className="behance-icon" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
