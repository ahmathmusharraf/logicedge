import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export default function DynamicBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX1 = useTransform(springX, (val) => val * 1);
  const moveY1 = useTransform(springY, (val) => val * 1);
  
  const moveX2 = useTransform(springX, (val) => val * -1.2);
  const moveY2 = useTransform(springY, (val) => val * -1.2);
  
  const moveX3 = useTransform(springX, (val) => val * 0.5);
  const moveY3 = useTransform(springY, (val) => val * 0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 100;
      const y = (clientY / innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Mesh Glow */}
      <div className="absolute inset-0 glow-mesh opacity-50" />
      
      {/* Animated Light Spheres with Parallax */}
      <motion.div 
        style={{ x: moveX1, y: moveY1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gold rounded-full blur-[120px] animate-float-slow"
      />
      
      <motion.div 
        style={{ x: moveX2, y: moveY2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-silver rounded-full blur-[150px] animate-float-medium"
      />

      <motion.div 
        style={{ x: moveX3, y: moveY3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] bg-gold rounded-full blur-[100px] animate-float-slow"
      />

      {/* Beam effects */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent opacity-30" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-silver/5 to-transparent opacity-30" />
      
      {/* Noise Texture Overlay (Enhanced) */}
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
