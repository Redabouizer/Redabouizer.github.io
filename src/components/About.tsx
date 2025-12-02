import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content-wrapper">
        <div className="about-image-container">
          <img
            src="/images/profile.JPG"
            alt="Reda Bouizergane Profile"
            className="about-profile-pic"
          />
        </div>

        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            I am Reda Bouizergane, a Computer Science student at 1337 Khouribga
            (42 Network) and EMSI Casablanca (Honoris United Universities).
            I specialize in full‑stack development and am passionate about using
            modern technologies to design scalable solutions and drive digital
            transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;