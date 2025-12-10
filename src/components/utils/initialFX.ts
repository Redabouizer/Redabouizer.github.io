import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

// Register SplitText plugin
gsap.registerPlugin(SplitText);

export function initialFX() {
  // Safety checks for DOM elements
  const mainElement = document.getElementsByTagName("main")[0];
  if (!mainElement) {
    console.warn("Main element not found, retrying...");
    setTimeout(() => initialFX(), 100);
    return;
  }

  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  mainElement.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate simple elements first
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.3,
    }
  );
  
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  // Animate landing intro with SplitText
  const landingIntro = document.querySelector(".landing-intro h2");
  const landingName = document.querySelector(".landing-intro h1");
  const landingRole = document.querySelector(".landing-info h3");

  if (landingIntro && landingName && landingRole) {
    const splitIntro = new SplitText(landingIntro, { type: "chars" });
    const splitName = new SplitText(landingName, { type: "chars" });
    const splitRole = new SplitText(landingRole, { type: "chars" });

    gsap.fromTo(
      splitIntro.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.03,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      splitName.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.02,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      splitRole.chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.02,
        delay: 0.8,
      }
    );
  }

  // Animate alternating h2 titles with SplitText
  const h2Info = document.querySelector(".landing-h2-info");
  const h2Info1 = document.querySelector(".landing-h2-info-1");

  if (h2Info && h2Info1) {
    const splitH2 = new SplitText(h2Info, { type: "chars" });
    const splitH21 = new SplitText(h2Info1, { type: "chars" });

    gsap.set(splitH21.chars, { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 1.5 });
    
    tl.fromTo(
      splitH2.chars,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.02, ease: "power2.out" }
    )
    .to(splitH2.chars, { 
      opacity: 0, 
      y: -10, 
      duration: 0.5, 
      stagger: 0.02, 
      ease: "power2.in",
      delay: 2.5 
    })
    .fromTo(
      splitH21.chars,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.02, ease: "power2.out" },
      "<"
    )
    .to(splitH21.chars, { 
      opacity: 0, 
      y: -10, 
      duration: 0.5, 
      stagger: 0.02, 
      ease: "power2.in",
      delay: 2.5 
    });
  }
}
