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
              <div />
              <div className="main">
                <div className="rdmText">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis tempus justo sit amet consectetur. Duis consequat vulputate magna sit amet euismod. Phasellus ornare, ipsum at aliquet venenatis, metus arcu posuere ex, non commodo diam erat vitae massa. Cras felis libero, egestas vitae justo vel, pretium vulputate urna. Maecenas sit amet sapien suscipit, pellentesque tortor sit amet, placerat diam. Suspendisse id pellentesque augue. Mauris a eleifend purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis tincidunt lorem justo, vitae sagittis odio bibendum eu. Aliquam urna turpis, rhoncus vitae lacinia sit amet, posuere nec nisl. Donec et enim ut magna porttitor accumsan. Quisque in velit in purus feugiat dictum vitae id nisi. Suspendisse sit amet tincidunt dui.
                  </p>
                </div>
            </div>
          </div>
    );
}

export default Page;