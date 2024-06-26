"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const UserExperienceData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "User Experience",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "User Experience",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "User Experience",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "User Experience",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "User Experience",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "User Experience",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "600",
  },
];

const UserExperience: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        {UserExperienceData &&
          UserExperienceData.slice(0, 6).map((value, i) => (
            <div className="col-lg-4 col-md-6 mt-40" key={i}>
              <div
                className="single-case-studies"
                style={{
                  backgroundImage: `url(${value.image})`,
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={value.aosDelay}
              >
                <div className="content">
                  <span>
                    <Link href={value.viewDetails}>{value.category}</Link>
                  </span>
                  <h3>
                    <Link href={value.viewDetails}>{value.title}</Link>
                  </h3>
                </div>

                <Link href={value.viewDetails} className="btn btn-primary">
                  View Case Study
                </Link>

                <div className="shape">
                  <Image
                    src={value.shapeImage}
                    alt="shape"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserExperience;
