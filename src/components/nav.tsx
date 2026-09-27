import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        <div className="flex items-center gap-3">

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-sm px-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-gray-700"></span>
              <span className="block h-0.5 w-5 bg-gray-700"></span>
              <span className="block h-0.5 w-5 bg-gray-700"></span>
            </div>
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500">
              <span className="text-[11px] font-bold text-white">
                DS
              </span>
            </div>

            <span className="text-base font-bold text-gray-800">
              Dev
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Stack
              </span>
            </span>

          </a>
        </div>

        <ul className="hidden items-center gap-7 text-sm text-gray-600 lg:flex">

          <li>
            <a
              href="#"
              className="font-medium text-pink-500 transition hover:text-pink-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="transition hover:text-pink-500"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition hover:text-pink-500"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="transition hover:text-pink-500"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition hover:text-pink-500"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="flex items-center gap-2 sm:gap-3">

          <button className="hidden text-sm font-medium text-gray-700 transition hover:text-pink-500 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:opacity-90 sm:px-5 sm:text-sm">
            Sign Up
          </button>

        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-sm lg:hidden">

          <ul className="flex flex-col gap-4 text-sm text-gray-600">

            <li>
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="block font-medium text-pink-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-pink-500"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-pink-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block transition hover:text-pink-500"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;