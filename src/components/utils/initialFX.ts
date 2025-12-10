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

  // Animate simple elements first (no SplitText)
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

  // Simple fade-in for main landing text (NO SplitText to avoid issues)
  gsap.fromTo(
    [".landing-intro h2", ".landing-intro h1", ".landing-info h3"],
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
      stagger: 0.1,
    }
  );

  // Simple fade-in for dynamic h2 titles (NO SplitText - just make them visible)
  gsap.set([".landing-h2-info", ".landing-h2-info-1", ".landing-h2-1", ".landing-h2-2"], {
    opacity: 1,
    y: 0,
  });

  // Optional: Simple alternating animation for the h2 titles
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  tl.to(".landing-h2-info", { opacity: 1, duration: 0.5 })
    .to(".landing-h2-info", { opacity: 0, duration: 0.5, delay: 3 })
    .to(".landing-h2-info-1", { opacity: 1, duration: 0.5 }, "<")
    .to(".landing-h2-info-1", { opacity: 0, duration: 0.5, delay: 3 })
    .to(".landing-h2-info", { opacity: 1, duration: 0.5 }, "<");
}
