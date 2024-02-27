import React from "react";
import { useState, useEffect } from "react";
import Loader from '../components/Loader/loader';
import Navbar from "../components/Navbar/navbar";
import './page.css'

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false); // New state to control fade-out

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
        return <Loader progress={progress} className={fadeOut ? 'fade-out' : ''} />;
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
                  <div className="projects-header" id="projects">Projekty</div>
                  <div className="projects-container">
                    <a className="project">
                      <span className="project-title">Weather app</span>
                      <div className="project-skillset">
                        <span>React</span>
                        <span>React</span>
                        <span>React</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
           </div>
    );
}

export default Page;