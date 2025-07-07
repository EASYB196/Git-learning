import React from "react";

function Second() {
  return (
    <div className="bg-purple-50 py-20 px-4 md:py-40 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Ready to build something amazing?
      </h1>
      <p className="text-base md:text-xl text-gray-700 mb-8">
        Join thousands of others who are already <br className="hidden md:block" />
        creating stunning websites.
      </p>
      <button className="bg-purple-600 text-white text-base md:text-lg rounded-lg px-6 md:px-7 py-3">
        Start Free Trial
      </button>
    </div>
  );
}

export default Second;
