import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <footer className="px-4 py-10 text-sm text-center text-gray-800  md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">BrightSite</span>. All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
