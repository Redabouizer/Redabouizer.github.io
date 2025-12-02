import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* CDMA Solutions */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Computer Vision Developer (Intern)</h4>
                <h5>CDMA Solutions</h5>
              </div>
              <h3>Jul 2025 – Aug 2025</h3>
            </div>
            <p>
              Developed an AI system for automatic car damage estimation using 
              YOLO/Roboflow, OCR extraction, and a dashboard generating automated 
              quotes and alerts. Tech stack: Python, YOLOv8, OpenCV, TensorFlow, 
              FastAPI, Tesseract, MySQL.
            </p>
          </div>

          {/* Gogreen Solutions */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Project Manager & IoT Developer (Intern)</h4>
                <h5>Gogreen Solutions</h5>
              </div>
              <h3>Jul 2024 – Sep 2024</h3>
            </div>
            <p>
              Designed an intelligent IoT access-control system with facial 
              recognition and remote monitoring. Tech stack: Python, Flask, 
              React.js, MySQL, OpenCV, Raspberry Pi OS, TensorFlow.
            </p>
          </div>

          {/* OCP */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer (Intern)</h4>
                <h5>OCP Group</h5>
              </div>
              <h3>Apr 2023</h3>
            </div>
            <p>
              Built a web application for customer satisfaction management using 
              Laravel, React.js, and MySQL, improving data handling and internal 
              workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
