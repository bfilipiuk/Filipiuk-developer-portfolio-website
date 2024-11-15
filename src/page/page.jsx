import React, { useState, useEffect } from "react";
import Loader from "../components/Loader/loader";
import Navbar from "../components/Navbar/navbar";
import ContactForm from "../components/ContactForm/contactform";
import Footer from "../components/Footer/footer";
import CustomSnackbar from "../components/Snackbar/Snackbar";
import ExperienceItem from "../components/ExperienceItem/ExperienceItem";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import Skillset from "../components/Skillset/Skillset";
import { ReactComponent as LinkedinIcon } from "../assets/LinkedIn_icon.svg";
import { ReactComponent as GitIcon } from "../assets/githubicon.svg";
import { ReactComponent as BehanceIcon } from "../assets/behance-2.svg";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
            lectus, lobortis hendrerit augue ut, pretium facilisis arcu.
          </p>
        </header>

        <section id="about" className="about">
          <h2 className="about-header">O mnie</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue
            lectus, lobortis hendrerit augue ut, pretium facilisis arcu.
          </p>
          <Skillset skills={["React", "JavaScript", "CSS", "HTML", "Git"]} />

          <h2 className="experience-header">Doświadczenie</h2>
          <ExperienceItem
            dates="Kwiecień 2020 - Marzec 2024"
            title="Freelance - Graphic Designer"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            skills={["React", "CSS", "Figma"]}
          />
        </section>

        <section id="projects" className="projects">
          <h2 className="projects-header">Projekty</h2>
          <div className="projects-container">
            <ProjectItem
              title="Weather App"
              skills={["React", "API Integration"]}
              links={[
                { href: "https://www.google.com", Icon: LinkedinIcon },
                { href: "https://www.google.com", Icon: GitIcon },
              ]}
            />
          </div>
        </section>

        <section id="contact" className="contact">
          <h2 className="contact-header">Kontakt</h2>
          <ContactForm onFormAlert={handleFormAlert} />
          <CustomSnackbar
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            severity={snackbarSeverity}
          />
          <div className="contact-info-header">Znajdziesz mnie również tu:</div>
          <div className="contact-info">
            <span>bartek.filipiuk02@gmail.com</span>
            <span>+48 882 607 006</span>
            <div className="contact-info-icons">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className="linkedin-icon" />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <GitIcon className="git-icon" />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <BehanceIcon className="behance-icon" />
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
