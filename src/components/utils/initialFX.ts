import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

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

  // Check if landing elements exist
  const landingElements = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  if (landingElements.length === 0) {
    console.warn("Landing elements not found, skipping animations");
    // Elements are still visible due to CSS fallback
    return;
  }

  try {
    var landingText = new SplitText(
      [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
      {
        type: "chars,lines",
        linesClass: "split-line",
      }
    );
    
    if (!landingText.chars || landingText.chars.length === 0) {
      console.warn("SplitText failed to create chars");
      return;
    }
    
    gsap.fromTo(
      landingText.chars!,
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
  } catch (error) {
    console.error("Error in landing text animation:", error);
    // Ensure text is visible even if animation fails
    landingElements.forEach(el => {
      (el as HTMLElement).style.opacity = "1";
    });
    return;
  }

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  // Wrap remaining animations in try-catch
  try {
    const h2InfoElement = document.querySelector(".landing-h2-info");
    if (h2InfoElement) {
      var landingText2 = new SplitText(".landing-h2-info", TextProps);
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

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
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

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
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
