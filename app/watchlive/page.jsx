"use client";

import React, { useState } from "react";

const WatchLive = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full text-black">
      {/* LOVE TO ALL */}
      <div className="w-full bg-gray-800 text-center py-2 font-bold text-lg text-white capitalize">
        💟LOVE TO ALL💟
      </div>

      {/* Player */}
      <div className="flex justify-center mt-0">
        {activeTab === 1 && (
          <iframe
            src="https://siamstools.netlify.app/tv/tsportsjadoo.html"
            width="100%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        )}  
        {activeTab === 2 && (
          <iframe
            src="https://siamstools.netlify.app/tv/play.html?id=1"
            width="100%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        )}

        {activeTab === 3 && (
          <iframe
            src="https://cinebuzz.netfy.live/nagorik.m3u8"
            width="100%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        )}
        {activeTab === 4 && (
          <iframe
            src="https://cinebuzz.netfy.live/crichd/play.php?cricid=willowusa"
            width="100%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        )}
        {activeTab === 5 && (
          <iframe
            src="https://freecatvold.pages.dev/gdplayer?player=plyr&provider=rand&format=video%2Fmp4&link=https://cinebuzz.netfy.live/nagorik.m3u8"
            width="100%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] sm:w-[80%] lg:w-[70%] xl:w-[60%]"
          ></iframe>
        )}
      </div>

      {/* Bookmark It */}
      <div className="w-full bg-gray-800 text-center py-1 font-bold text-base text-white capitalize mt-0">
        Bookmark It👇 to Stay With Us
      </div>

      {/* BPL Link */}
      <div className="w-full bg-gray-800 text-center py-1 font-bold text-base text-white capitalize mt-0">
        BPL25.NETLIFY.APP
      </div>

      {/* Buttons Container */}
      <div className="flex justify-center mt-3 px-3">
        <div className="bg-gray-800 p-4 rounded-lg w-full sm:w-[95%] lg:w-[65%] xl:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Tsports-Jadoo", "Gazi TV" , "Nagorik TV", "Willow", "Nagorik TV"].map(
              (label, index) => (
                <button
                  key={index}
                  className={`w-full py-2 text-base font-bold rounded-md transition-all duration-300 ${
                    activeTab === index + 1
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md transform scale-105"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;