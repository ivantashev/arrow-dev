"use client";

import React from "react";
import Link from "next/link";

const CtaAreaTwo: React.FC = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <h3
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Ready to have a conversation?
            </h3>
            <p>
              We're ready to engage in discussions about how we can collaborate, sharing our knowledge and experience to fulfill your product development needs. Take the initiative to propel your business forward.
            </p>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <Link href="/contact-us/" className="custom-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
