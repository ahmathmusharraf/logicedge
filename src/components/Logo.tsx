import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export default function Logo({ className, size = "md", withText = true }: LogoProps) {
  const sizes = {
    sm: { icon: "w-6 h-6", text: "text-base" },
    md: { icon: "w-8 h-8", text: "text-xl" },
    lg: { icon: "w-12 h-12", text: "text-2xl" },
  };

  return (
    <div className={cn("flex items-center gap-3 transition-opacity hover:opacity-90", className)}>
      <div className={cn("relative rotate-45", sizes[size].icon)}>
        {/* Diamond Outer */}
        <div className="absolute inset-0 bg-silver-gradient rounded-sm shadow-[0_0_15px_rgba(192,192,192,0.2)]" />
        {/* Diamond Inner Black */}
        <div className="absolute inset-[15%] bg-black rounded-xs" />
        {/* Diamond Center Gold */}
        <div className="absolute inset-[30%] bg-gold-gradient rounded-xs shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-white/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {withText && (
        <span className={cn("font-display font-bold tracking-tighter text-white", sizes[size].text)}>
          LOGIC <span className="text-gold-gradient">EDGE</span>
        </span>
      )}
    </div>
  );
}
