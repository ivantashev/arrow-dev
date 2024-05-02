import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Newsletter from "../../components/Common/Newsletter";
import Footer from "../../components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";

export default function Page() {
  return (
    <>
      <Navbar logoColour="white"/>

      <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
