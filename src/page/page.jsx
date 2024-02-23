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
              <div className="main">
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
           </div>
    );
}

export default Page;