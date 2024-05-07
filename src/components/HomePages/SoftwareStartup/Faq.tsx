"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../../public/images/software/faq-img.png";

const Faq: React.FC = () => {
  return (
    <>
      <div className="ptb-50">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Ask &amp; Question</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion software-faq">
                <Accordion allowZeroExpanded>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What services does your Development Agency offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        At our company, we offer an extensive selection of web application development services,
                        encompassing custom solutions, API development, as well as migration services to NextJS/VueJS.
                        Additionally, we provide reliable support and maintenance. Our team of experienced developers is
                        dedicated to delivering top-notch, scalable, and secure web applications customised to suit your
                        business requirements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the cost of the web application development?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The pricing of constructing a web application is contingent upon several factors, such as
                        project scope, feature intricacy, and timeline. During the initial consultation, we furnish
                        competitive rates and a comprehensive breakdown of costs. Our commitment lies in delivering
                        cost-efficient and top-tier web application development solutions
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can you assist with support and maintenance for web applications after development?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Definitely! We provide post-development support and maintenance services for all web
                        applications. Our team of experts delivers timely updates and ongoing maintenance to keep your
                        web application current and running smoothly. Our dedication is to guarantee the enduring
                        success of your web application.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is your agency capable of integrating third-party applications with web applications?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, our company has extensive experience in integrating third-party applications, covering
                        APIs, plugins, and other apps. Our team excels at achieving seamless integration to elevate the
                        functionality and user experience of your web application.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="faq-img pl-30"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image src={faqImg} alt="Image" width={744} height={744} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
