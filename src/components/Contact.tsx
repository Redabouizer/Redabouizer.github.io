import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          
          {/* Email + Phone */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:redabouizergane@gmail.com" data-cursor="disable">
                redabouizergane@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+212682195002" data-cursor="disable">
                +212 6 82 19 50 02
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Redabouizer"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/reda-bouizergane"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/RedaBouizergane"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer Signature */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Reda Bouizergane</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
