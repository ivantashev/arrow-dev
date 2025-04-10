"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState<boolean>(false);

  // Auto Play Video
  const videoEl = useRef<HTMLVideoElement>(null);

  const attemptPlay = () => {
    videoEl.current?.play().catch((error) => {
      console.error("Error attempting to play", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <div className="hero-banner video-studio center overly-6">
        <div className="video-background">
          <video
            playsInline
            loop
            muted
            src="/video/promo-video.mp4"
            ref={videoEl}
          />
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Welcome to our video studio!
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/contact-us/"
                  className="btn btn-primary mr-0"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Contact Us
                </Link>
              </div>

              <div
                className="video-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div onClick={() => setToggler(!toggler)} className="video-btn">
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
