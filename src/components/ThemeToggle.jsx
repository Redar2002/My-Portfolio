import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDarkMode}
      className="relative flex items-center w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {/* Cercle qui glisse */}
      <span
        className={`absolute left-1 flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          <Moon className="w-4 h-4 text-gray-700" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};
