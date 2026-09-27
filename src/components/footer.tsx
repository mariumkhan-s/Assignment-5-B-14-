function Footer() {
  return (
    <footer className=" bg-white px-6 py-12">
      <div className="mx-auto max-w-[940px]">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-pink-500 text-[8px] font-bold text-white">
                DS
              </div>

              <h2 className="text-sm font-bold">
                <span className="text-gray-800">Dev</span>
                <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-3 max-w-[300px] text-[9px] leading-4 text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-[9px] text-gray-600 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-600 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-600 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-3 text-[9px] font-bold uppercase tracking-wide text-gray-800">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-[9px] font-bold uppercase tracking-wide text-gray-800">
              COMPANY
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-[9px] font-bold uppercase tracking-wide text-gray-800">
              LEGAL
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-400 hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Space */}
        <div className="h-14"></div>

        {/* Divider */}
        <div className="border-t border-gray-100"></div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-3 pt-4 sm:flex-row">

          <p className="text-[9px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-[9px] text-gray-400 hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[9px] text-gray-400 hover:text-pink-500"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;