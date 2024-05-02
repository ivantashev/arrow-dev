"use client";

import React, {useState} from "react";
import sendEmail from "@/services/Mailgun/SendEmail";

interface FormState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendEmail(
        process.env.NEXT_PUBLIC_TO_EMAIL ?? "",
        `New message from contact form.`,
        `Name: ${formData.name}
Email: ${formData.email} 
Phone: ${formData.number} 
Message: ${formData.message}`
    ).then((response) => {
      if (response) {
        setSuccess(true);
      }
    });

    // Reset form data after submission if needed
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });

    setSuccess(true);
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Get In Touch</h2>
          <p>
            Thank you for considering Arrow. Please provide a brief overview of the services you're interested in, and
            we'll reach out to you promptly to discuss further details.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="number"
                      placeholder="Phone number"
                      className="form-control"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                        name="message"
                        cols={30}
                        rows={6}
                        placeholder="Write your message..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  {success && (
                      <div className="alert alert-success">
                        Your message has been sent successfully.
                      </div>
                  )}
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
