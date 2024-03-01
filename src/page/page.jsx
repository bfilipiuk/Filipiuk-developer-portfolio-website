import React from "react";
import { useState, useEffect } from "react";
import Loader from '../components/Loader/loader';
import Navbar from "../components/Navbar/navbar";
import '../components/Modals/twoLinksModal'
import './page.css'
import TwoLinksModal from "../components/Modals/twoLinksModal";

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
                    <button className="project" onClick={toggleModal}>
                      <span className="project-title">Weather app</span>
                      <div className="project-skillset">
                        <span>React</span>
                        <span>React</span>
                        <span>React</span>
                      </div>
                    </button>
                  </div>
                </div>
           </div>
    );
}

export default Page;