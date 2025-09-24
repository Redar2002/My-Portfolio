import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      role="banner"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <span  className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Reda
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Laksyer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 flex justify-center">
            <a href="#projects" className="comic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      {/* --- Scroll indicator amélioré --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-sm text-muted-foreground tracking-wide uppercase animate-pulse">
          Scroll Down
        </span>
        <div className="relative flex items-center justify-center">
          {/* Cercle animé */}
          <span className="absolute w-12 h-12 rounded-full border-2 border-primary/40 animate-ping" />
          <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};
