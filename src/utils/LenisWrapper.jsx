import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisWrapper = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,  // Adjust smoothness speed
      smooth: true,
      direction: "vertical", // Can be 'horizontal' if needed
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing function
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;
