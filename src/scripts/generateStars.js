import React, { useEffect, useRef } from 'react';
import './generateStars.css';

const BackgroundStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight + 2000;

        const stars_quantity = 100;
        for (let i = 0; i < stars_quantity; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 1 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
        }
    }, []);

    return <canvas ref={canvasRef} className="background-stars" />;
};

export default BackgroundStars;
