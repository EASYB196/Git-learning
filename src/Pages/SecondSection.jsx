import React from "react";

function Second() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center bg-purple-50 md:py-40">
      <h1 className="mb-6 text-3xl font-bold md:text-5xl">
        Ready to build something amazing?
      </h1>
      <p className="mb-8 text-base text-gray-700 md:text-xl">
        Join thousands of others who are already <br className="hidden md:block" />
        creating stunning websites.
      </p>
      <button className="px-6 py-3 text-base text-white bg-purple-600 rounded-lg md:text-lg md:px-7">
        Start Free Trial
      </button>
    </div>
  
  );
}

export default Second;
