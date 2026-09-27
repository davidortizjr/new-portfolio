import { useEffect } from 'react';
import gsap from 'gsap';

import M from '../assets/M.svg';
import A from '../assets/A.svg';
import X from '../assets/X.svg';

function LoadingScreen() {
    useEffect(() => {
        const letters = document.querySelectorAll('.loading-letter');

        gsap.fromTo(letters, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.5 });
    }, []);

    return (
        <div className="loading-screen absolute inset-0 z-50 overflow-hidden">
            <div className="flex justify-center items-center h-screen w-full gap-4 sm:gap-8 md:gap-12 px-4">
                <img
                    className="loading-letter h-[25vh] max-h-[237px] w-auto"
                    src={M}
                    alt="M"
                />
                <img
                    className="loading-letter h-[25vh] max-h-[237px] w-auto"
                    src={A}
                    alt="A"
                />
                <img
                    className="loading-letter h-[25vh] max-h-[237px] w-auto"
                    src={X}
                    alt="X"
                />
            </div>
        </div>
    );
}

export default LoadingScreen;