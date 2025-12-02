import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* Intro */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              REDA
              <br />
              <span>BOUIZERGANE</span>
            </h1>
          </div>

          {/* Dynamic Titles */}
          <div className="landing-info">
            <h3>A Passionate</h3>

            {/* Animation Block 1 */}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Full-Stack Developer</div>
              <div className="landing-h2-2">AI Engineer</div>
            </h2>

            {/* Animation Block 2 */}
            <h2>
              <div className="landing-h2-info">AI Engineer</div>
              <div className="landing-h2-info-1">Full-Stack Developer</div>
            </h2>
          </div>

        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;
