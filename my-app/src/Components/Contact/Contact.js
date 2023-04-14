import "./Contact.css";
import React from "react";
import { contactInfo } from "../../Portfolio";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="transbox">
        <h2>Contact</h2>

        <a
          className="contact-detail-email"
          href={"mailto:" + contactInfo.email_address}
        >
          Email Me!
        </a>
      </div>
    </div>
  );
}
