"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

import logo from "../../../public/images/arrow_logo_black.png";
import logoWhite from "../../../public/images/arrow_logo_white.png";

const Navbar = ({ logoColour = "black" }: { logoColour?: string }) => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <div className="others-options">
              <Link href="/contact-us/" className="btn btn-primary">
                Get in touch
              </Link>
            </div>
            {/* Toggle navigation */}

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <MegaMenu />
              </ul>
              <Link href="/" className="navbar-brand">
                <Image
                  src={logoColour === "black" ? logo : logoWhite}
                  alt="logo"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
