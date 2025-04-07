"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../../public/images/software/banner-img.png";

const Banner: React.FC = () => {
  return (
    <>
      <div className="software-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="software-banner-content">
                <h1
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                  Supporting Your Business's Success
                </h1>

                <p
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                  Whether you require assistance in building your idea, supporting an existing system, or
                  enhancing your engineering team, we're here for you.
                </p>

                <Link
                  href="/contact-us/"
                  className="software-btn"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="software-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={bannerImg}
                  alt="banner-image"
                  width={1081}
                  height={1012}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
