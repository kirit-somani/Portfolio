import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kiritsomani2911@gmail.com" data-cursor="disable">
                kiritsomani2911@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science Engineering, UPES</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/kirit-somani"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kirit-somani"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1KcztZXhXFkbCq1vJKAcJHxtXFEo3A5Fa?usp=sharing"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <h5>
            <MdCopyright /> 2025 Rajesh Chityal
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
