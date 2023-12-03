// components/FullscreenButton.js
import React, { useState, useEffect } from 'react';
import { FaFilePowerpoint } from 'react-icons/fa';

const FullscreenButton = ({ targetId }: any) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const toggleFullscreen = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      if (!isFullscreen) {
        targetElement.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable fullscreen:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
            <button
            onClick={toggleFullscreen}
            className="text-gray-400 font-semibold flex gap-2 mt-[150px] sm:mt-4 md:mt-4 ml-4 sm:ml-2 md:ml-2 items-center"
          >
            <FaFilePowerpoint className="text-white bg-gray-300 select-none p-2 text-3xl rounded-full" />
            <p className="pt-1 select-none sm:hidden md:hidden"> Full screen</p>
          </button>
  );
};

export default FullscreenButton;
