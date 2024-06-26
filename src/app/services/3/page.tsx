import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleThree from "../../../components/Services/ServicesStyleThree";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Services Style 3"
        BGImage="/images/page-banner3.jpg"
      />

      <ServicesStyleThree />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
