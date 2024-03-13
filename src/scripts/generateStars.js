import React, { useEffect, useRef } from 'react';
import './generateStars.css';

const BackgroundStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth- 20;
            canvas.height = Math.max(
              document.body.scrollHeight, document.documentElement.scrollHeight,
              document.body.offsetHeight, document.documentElement.offsetHeight,
              document.body.clientHeight, document.documentElement.clientHeight
            );

            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing stars

            const stars_quantity = 100;
            for (let i = 0; i < stars_quantity; i++) {
                const x = Math.random() * canvas.width - 20;
                const y = Math.random() * canvas.height;
                ctx.beginPath();
                ctx.arc(x, y, 1, 0, 2 * Math.PI); // Draw a full circle for stars
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        };

        // Initialize canvas size
        updateCanvasSize();

        // Update canvas on window resize
        window.addEventListener('resize', updateCanvasSize);

        // Observe changes in the document to update the canvas size
        const observer = new MutationObserver(updateCanvasSize);
        observer.observe(document.body, {
            childList: true, // observe direct children
            subtree: true, // and lower descendants
            attributes: false,
            characterData: false,
        });

        // Cleanup function
        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="background-stars" />;
};

export default BackgroundStars;
