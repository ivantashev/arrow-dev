"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    icon: "/images/software/icon1.png",
    title: "API development",
    shortText:
        "Laravel streamlines API development, making it an ideal option for constructing resilient and scalable APIs that cater to decoupled architecture, mobile applications, and third-party integrations.",
    viewDetails: null,
    aosDelay: "100",
  },
  {
    icon: "/images/software/icon2.png",
    title: "Enterprise applications",
    shortText:
      "Laravel and NextJS frameworks allow us to build  complex, data-intensive enterprise applications that require high performance and reliability",
    viewDetails: null,
    aosDelay: "200",
  },
  {
    icon: "/images/software/icon4.png",
    title: "Online portals",
    shortText:
      "Craft customizable and intuitive customer portal solutions designed specifically to meet your company's requirements, ensuring seamless customer interactions.",
    viewDetails: null,
    aosDelay: "300",
  },
  {
    icon: "/images/software/icon3.png",
    title: "Startups and MVPs",
    shortText:
      "Utilize Laravel's and NextJS swift development capabilities to rapidly launch minimum viable products (MVPs), validating ideas promptly and attracting potential investors.",
    viewDetails: null,
    aosDelay: "400",
  },
];

const HelpDesk: React.FC = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <h3>Every Arrow project is a distinctive combination of marketing services tailored to optimize your brand's
              expansion</h3>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 4).map((value, i) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="software-single-help-desk-box">
                    <div className="icon">
                      <Image
                        src={value.icon}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                    {value.viewDetails && <Link href={value.viewDetails} className="link-btn">
                      Learn More <i className="fa-solid fa-angle-right"></i>
                    </Link>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
