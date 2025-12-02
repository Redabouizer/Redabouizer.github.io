import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    name: "UGC Platform",
    category: "Full-Stack Web Application",
    description: "Platform connecting creators with brands with authentication and content management.",
    tools: "Next.js, Java Spring Boot, PostgreSQL, REST API",
    image: "/images/UGC.png",
    link: ""
  },
  {
    id: 2,
    name: "Beauty Center Management",
    category: "Management System",
    description: "Application for appointments, clients, and inventory management.",
    tools: "React.js, Laravel, MySQL, Redux",
    image: "/images/solibook.png",
    link: ""
  },
  {
    id: 3,
    name: "Customer Satisfaction Platform",
    category: "Feedback & Analytics",
    description: "Feedback system with analytics dashboard and reporting.",
    tools: "React.js, Laravel, MySQL, Chart.js",
    image: "/images/Feedback.png",
    link: ""
  },
  {
    id: 4,
    name: "Inventory Management System",
    category: "Enterprise Application",
    description: "Stock tracking with automated alerts and reporting.",
    tools: "React.js, Laravel, MySQL, Material-UI",
    image: "/images/Inventory.png",
    link: ""
  },
  {
    id: 5,
    name: "WordPress Reservation Platform",
    category: "Custom WordPress Solution",
    description: "Service reservations with WhatsApp notifications.",
    tools: "WordPress, PHP, JavaScript, WhatsApp API",
    image: "/images/weclaim-screenshot.jpg",
    video: "weclaim-screenshot.mp4",
    link: "https://weclaim.ma/"
  },
  {
    id: 6,
    name: "AI Customer Service Chatbot",
    category: "AI/ML Integration",
    description: "Chatbot with NLP and multi-language support.",
    tools: "Python, TensorFlow, Node.js, OpenAI API",
    image: "/images/chatbot.png",
    link: ""
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Description</h4>
                <p className="work-description">{project.description}</p>
                <h4>Tools & Technologies</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage 
                image={project.image} 
                alt={project.name}
                video={project.video}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
