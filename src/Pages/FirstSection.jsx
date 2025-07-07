import React from 'react';

function FirstSection() {
  return (
  
   <div>
        <section className="grid grid-cols-1 gap-6 px-4 py-8 py-12 -mt-8 bg-white sm:grid-cols-2 lg:grid-cols-3grid lg:grid-cols-3">
        <div className="p-6 bg-white rounded-xl shadow-md border text-center min-h-[200px] flex flex-col justify-center">
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Fast Setup</h3>
    <p className="text-gray-600">
      Launch your site in minutes with our intuitive builder.
    </p>
  </div>
  <div className="p-6 bg-white rounded-xl shadow-md border text-center min-h-[200px] flex flex-col justify-center">
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Responsive Design</h3>
    <p className="text-gray-600">
      Looks great on phones, tablets, and desktops automatically.
    </p>
  </div>
  <div className="p-6 bg-white rounded-xl shadow-md border text-center min-h-[200px] flex flex-col justify-center">
    <h3 className="mb-2 text-xl font-semibold text-gray-800">Easy Customization</h3>
    <p className="text-gray-600">
      No coding needed — change fonts, colors, layout, and more.
    </p>
  </div>

      </section>
   </div>
  );
}

export default FirstSection;
