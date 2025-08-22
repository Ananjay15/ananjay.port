import {
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { toggleMenu, closeMenu } from "../redux/slices/menuSlice";
import { theme as themeMap } from "../theme";

export default function Navbar({ currentTheme }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);
  const isMenuOpen = useSelector((s) => s.menu.isMenuOpen);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
      } backdrop-blur-sm border-b transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DevPortfolio
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => dispatch(toggleMenu())}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden ${
            themeMap[isDarkMode ? "dark" : "light"].bg
          }/95 backdrop-blur-sm border-t ${
            currentTheme.border
          } transition-colors duration-300`}
        >
          <div className="flex flex-col items-center py-6 space-y-6 text-lg">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => dispatch(closeMenu())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
