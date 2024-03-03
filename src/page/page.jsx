import React from "react";
import { useState, useEffect } from "react";
import Loader from '../components/Loader/loader';
import Navbar from "../components/Navbar/navbar";
import '../components/Modals/twoLinksModal'
import ContactForm from "../components/ContactForm/contactform";
import { ReactComponent as LinkIcon } from '../assets/linkicon.svg';
import { ReactComponent as GitIcon} from '../assets/githubicon.svg';
import { ReactComponent as LinkedinIcon } from '../assets/LinkedIn_icon.svg';
import './page.css'

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
      console.log(modal);
    }

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);

        // Simulate progress
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
              <div className="main" id="start">
                <div className="header">
                  <div className="header-text-1">Bartek Filipiuk</div>
                  <div className="header-text-2">Developer Portfolio</div>
                  <div className="header-text-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In augue lectus, lobortis hendrerit augue ut, pretium facilisis arcu. Praesent sit amet
                    viverra enim. Vestibulum quis justo sagittis, commodo ligula ut, auctor augue. Aliquam 
                    non mi sed nunc pellentesque pretium ut id purus.
                  </div>
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
                  <div className="projects-header" id="projects">Projekty</div>
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
                <div className="contact">
                  <div className="contact-header">Kontakt</div>
                  <div className="contact-container">
                    <div className="contact-info">
                      <span>bartek.filipiuk02@gmail.com</span>
                      <span>+48 882 607 006</span>
                      <span>email@gmail.com</span>
                      <span>email@gmail.com</span>
                      <div className="contact-info-icons">
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"><LinkedinIcon className="linkedin-icon" /></a>
                        <a href="https://www.google.com/" target="_blank" rel="noreferrer"><GitIcon className="git-icon" /></a>
                      </div>
                    </div>
                    <ContactForm />
                  </div>
                </div>
           </div>
    );
}

export default Page;