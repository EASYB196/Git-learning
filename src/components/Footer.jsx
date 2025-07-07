import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <footer className=" text-center text-sm md:text-base text-gray-800 py-10 px-4">
        © {new Date().getFullYear()} <span className="font-semibold">BrightSite</span>. All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
