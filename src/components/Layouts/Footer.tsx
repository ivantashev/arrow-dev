"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from '../../../public/images/arrow_logo_black.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                  className="single-footer-widget"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={150}
                        height={40}
                    />
                  </Link>
                </div>

                <p>
                  Laravel and NextJS specialists.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/arrow-technology" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Arrow. All Rights Reserved By{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
