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

  // Check if landing elements exist for SplitText
  const landingElements = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  if (landingElements.length === 0) {
    console.warn("Landing elements not found, skipping SplitText animations");
    return;
  }

  // Try SplitText animations
  try {
    const landingText = new SplitText(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );
    
    if (landingText.chars && landingText.chars.length > 0) {
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  } catch (error) {
    console.error("Error in landing text SplitText animation:", error);
    // Ensure text is visible even if animation fails
    landingElements.forEach(el => {
      (el as HTMLElement).style.opacity = "1";
    });
  }

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  // Declare variables at the top level
  let landingText2: SplitText | null = null;
  let landingText3: SplitText | null = null;
  let landingText4: SplitText | null = null;
  let landingText5: SplitText | null = null;

  // Wrap remaining animations in try-catch
  try {
    const h2InfoElement = document.querySelector(".landing-h2-info");
    if (h2InfoElement) {
      landingText2 = new SplitText(".landing-h2-info", TextProps);
      if (landingText2.chars && landingText2.chars.length > 0) {
        gsap.fromTo(
          landingText2.chars!,
          { opacity: 0, y: 80, filter: "blur(5px)" },
          {
            opacity: 1,
            duration: 1.2,
            filter: "blur(0px)",
            ease: "power3.inOut",
            y: 0,
            stagger: 0.025,
            delay: 0.3,
          }
        );
      }
    }
  } catch (error) {
    console.error("Error in landingText2 animation:", error);
  }

  // Simple animations already done above

  try {
    const h2Info1Element = document.querySelector(".landing-h2-info-1");
    const h21Element = document.querySelector(".landing-h2-1");
    const h22Element = document.querySelector(".landing-h2-2");

    if (h2Info1Element) landingText3 = new SplitText(".landing-h2-info-1", TextProps);
    if (h21Element) landingText4 = new SplitText(".landing-h2-1", TextProps);
    if (h22Element) landingText5 = new SplitText(".landing-h2-2", TextProps);

    if (landingText2 && landingText3) {
      LoopText(landingText2, landingText3);
    }
    if (landingText4 && landingText5) {
      LoopText(landingText4, landingText5);
    }
  } catch (error) {
    console.error("Error in loop text animations:", error);
  }
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars!,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars!,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars!,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars!,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
