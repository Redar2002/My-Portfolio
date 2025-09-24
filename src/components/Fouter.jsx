export const Fouter = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between ie">
      <div className="mx-auto max-w-7xl px-6 py-10 md:flex md:items-center md:justify-between lg:px-8">
        {/* Left */}
        <div className="flex justify-center md:justify-start">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Reda Laksyer. All rights reserved.
          </p>
        </div>

        {/* Center: Links */}
        <div className="p-4 mt-6 flex justify-center space-x-6 md:order-2 md:mt-0">
          <a href="#about" className="text-sm text-gray-600 hover:text-primary transition">
            About
          </a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Right: Social icons */}
        <div className="mt-6 flex justify-center space-x-5 md:order-3 md:mt-0">
          <a
            href="https://www.linkedin.com/in/reda-laksyer-31704926a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-primary transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.96 0-1.73-.79-1.73-1.73s.77-1.73 1.73-1.73 1.73.79 1.73 1.73-.78 1.73-1.73 1.73zm13.5 11.27h-3v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.9v1.36h.04c.4-.76 1.38-1.55 2.85-1.55 3.05 0 3.61 2.01 3.61 4.62v5.57z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100008622878301"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 hover:text-primary transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.243l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.309h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.592 1.323-1.324v-21.351c0-.733-.593-1.325-1.324-1.325z" />
            </svg>
          </a>
          <a
            href="https://wa.me/212667641474"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-500 hover:text-primary transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M16 .5c-8.548 0-15.5 6.952-15.5 15.5 0 2.727.709 5.39 2.053 7.75l-2.166 7.904 8.112-2.132c2.268 1.236 4.823 1.887 7.501 1.887h.001c8.548 0 15.5-6.952 15.5-15.5s-6.952-15.5-15.5-15.5zM16 28c-2.295 0-4.537-.617-6.493-1.784l-.465-.273-4.815 1.265 1.285-4.69-.303-.48c-1.27-2.009-1.94-4.326-1.94-6.738 0-7.168 5.832-13 13-13s13 5.832 13 13-5.832 13-13 13zm7.163-9.397c-.393-.197-2.329-1.15-2.689-1.283-.36-.134-.623-.197-.886.197s-1.018 1.283-1.248 1.547-.46.296-.853.099c-.393-.197-1.66-.613-3.164-1.954-1.169-1.043-1.957-2.332-2.187-2.725-.23-.393-.025-.606.172-.803.177-.177.393-.46.59-.69.197-.23.262-.393.393-.656.131-.262.066-.492-.033-.69-.099-.197-.886-2.142-1.215-2.94-.32-.768-.645-.663-.886-.675l-.755-.013c-.23 0-.59.082-.898.394-.309.311-1.181 1.152-1.181 2.807s1.21 3.257 1.378 3.483c.169.223 2.382 3.637 5.77 5.096.807.349 1.436.557 1.926.713.809.257 1.545.221 2.127.134.649-.097 2.329-.951 2.659-1.868.328-.917.328-1.701.23-1.868-.098-.167-.36-.263-.753-.46z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
