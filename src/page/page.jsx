import React from "react";
import { useState, useEffect } from "react";
import Loader from '../components/Loader/loader';
import Navbar from "../components/Navbar/navbar";
import '../components/Modals/twoLinksModal'
import ContactForm from "../components/ContactForm/contactform";
import { ReactComponent as LinkIcon } from '../assets/linkicon.svg';
import { ReactComponent as GitIcon} from '../assets/githubicon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/LinkedIn_icon.svg';
import { ReactComponent as BehanceIcon } from '../assets/behance-2.svg';
import './page.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Footer from "../components/Footer/footer";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  }

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // success, error, warning, info

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
   };

  const handleFormAlert = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress < 100) {
          return oldProgress + 10;
        }
        clearInterval(interval);
        return 100;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
    
  if (loading) {
    return <Loader progress={progress}/>;
  }

  return (
    <div>
      <Navbar />
      <div className="full-page">
        <div className="header" id="start">
          <div className="header-text-1">Bartek Filipiuk</div>
          <div className="header-text-2">Developer Portfolio</div>
          <div className="header-text-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu. Praesent sit amet
            viverra enim. Vestibulum quis justo sagittis, commodo ligula ut, auctor augue. Aliquam 
            non mi sed nunc pellentesque pretium ut id purus.
          </div>
        </div>
        <div className="about" id="about">
          <div className="about-header">O mnie</div>
          <div className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu. Praesent sit amet
            viverra enim. Vestibulum quis justo sagittis, commodo ligula ut, auctor augue. Aliquam 
            non mi sed nunc pellentesque pretium ut id purus.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu.
          </div>
          <div className="skillset-header">Umiejętności</div>
          <div className="skillset-container">
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <span>React</span>
          </div>
          <div className="experience-header">Doświadczenie</div>
          <div className="experience-container">
            <div className="experience-dates">Kwiecień 2020 - Marzec 2024</div>
            <div className="experience-info-container">
              <div className="experience-title">Freelance - Graphic Designer</div>
              <div className="experience-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit
                augue ut, pretium facilisis arcu. Praesent sit amet viverra enim. Vestibulum quis justo sagittis,
                commodo ligula ut, auctor augue. Aliquam non mi sed nunc pellentesque pretium ut id purus.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit
                augue ut, pretium facilisis arcu. Praesent sit amet viverra enim. Vestibulum quis justo sagittis.
              </div>
              <div className="experience-skillset">
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
              </div>
            </div>
          </div>
          <div className="experience-container">
            <div className="experience-dates">Kwiecień 2020 - Marzec 2024</div>
            <div className="experience-info-container">
              <div className="experience-title">Freelance - Graphic Designer</div>
              <div className="experience-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit
                augue ut, pretium facilisis arcu. Praesent sit amet viverra enim. Vestibulum quis justo sagittis,
                commodo ligula ut, auctor augue. Aliquam non mi sed nunc pellentesque pretium ut id purus.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit
                augue ut, pretium facilisis arcu. Praesent sit amet viverra enim. Vestibulum quis justo sagittis.
              </div>
              <div className="experience-skillset">
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
              </div>
            </div>
          </div>
          <div className="experience-container">
            <div className="experience-dates">Kwiecień 2020 - Marzec 2024</div>
            <div className="experience-info-container">
              <div className="experience-title">Freelance - Graphic Designer</div>
              <div className="experience-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit
                augue ut, pretium facilisis arcu. Praesent sit amet viverra enim. Vestibulum quis justo sagittis,
                commodo ligula ut, auctor augue. Aliquam non mi sed nunc pellentesque pretium ut id purus.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue lectus, lobortis hendrerit
                augue ut, pretium facilisis arcu. Praesent sit amet viverra enim. Vestibulum quis justo sagittis.
              </div>
              <div className="experience-skillset">
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
                <span>React</span>
              </div>
            </div>
          </div>         
        </div>
        <div className="projects" id="projects">
          <div className="projects-header">Projekty</div>
          <div className="projects-container">
            <div className="project">
              <div className="project-icon-container">
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkIcon className="link-icon" /></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
              </div>
              <div className="project-title-skillset-container">
                <span className="project-title">Weather app</span>
                <div className="project-skillset">
                  <span>React</span>
                  <span>React</span>
                  <span>React</span>
              </div>
            </div>
          </div>
                      <div className="project">
                        <div className="project-icon-container">
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkIcon className="link-icon" /></a>
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                        </div>
                        <div className="project-title-skillset-container">
                          <span className="project-title">Weather app</span>
                          <div className="project-skillset">
                            <span>React</span>
                            <span>React</span>
                            <span>React</span>
                          </div>
                        </div>
                      </div>
                      <div className="project">
                        <div className="project-icon-container">
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkIcon className="link-icon" /></a>
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                        </div>
                        <div className="project-title-skillset-container">
                          <span className="project-title">Weather app</span>
                          <div className="project-skillset">
                            <span>React</span>
                            <span>React</span>
                            <span>React</span>
                          </div>
                        </div>
                      </div>
                      <div className="project">
                        <div className="project-icon-container">
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkIcon className="link-icon" /></a>
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                        </div>
                        <div className="project-title-skillset-container">
                          <span className="project-title">Weather app</span>
                          <div className="project-skillset">
                            <span>React</span>
                            <span>React</span>
                            <span>React</span>
                          </div>
                        </div>
                      </div>
                      <div className="project">
                        <div className="project-icon-container">
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkIcon className="link-icon" /></a>
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                        </div>
                        <div className="project-title-skillset-container">
                          <span className="project-title">Weather app</span>
                          <div className="project-skillset">
                            <span>React</span>
                            <span>React</span>
                            <span>React</span>
                          </div>
                        </div>
                      </div>
                      <div className="project">
                        <div className="project-icon-container">
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkIcon className="link-icon" /></a>
                          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                        </div>
                        <div className="project-title-skillset-container">
                          <span className="project-title">Weather app</span>
                          <div className="project-skillset">
                            <span>React</span>
                            <span>React</span>
                            <span>React</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        <div className="contact" id="contact">
          <div className="contact-header">Kontakt</div>
          <div className="contact-container">
            <ContactForm onFormAlert={handleFormAlert} />
              <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}} open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                  {snackbarMessage}
                </Alert>
              </Snackbar>
            <div className="contact-info-header">
              Znajdziesz mnie również tu:
            </div>
            <div className="contact-info">
              <span>bartek.filipiuk02@gmail.com</span>
              <span>+48 882 607 006</span>
              <div className="contact-info-icons">
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkedinIcon className="linkedin-icon" /></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                <a href="https://www.google.com/" target="_blank" rel="noreferrer"><BehanceIcon className="behance-icon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;