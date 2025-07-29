import React from 'react';

const ChandlerMortgagesStylePreview = () => {
  // Chandler Mortgages brand colors
  const colors = {
    primary: [
      { name: 'Navy Blue', hex: '#0A1E3F', usage: 'Primary backgrounds, text, key elements' },
      { name: 'Arizona Red', hex: '#BC2323', usage: 'Accents, highlights, calls-to-action' },
      { name: 'Arizona Gold', hex: '#FFCC00', usage: 'Accents, highlights, secondary elements' },
      { name: 'Pure White', hex: '#FFFFFF', usage: 'Text on dark backgrounds, space, clarity' }
    ],
    secondary: [
      { name: 'Sky Blue', hex: '#4A90E2', usage: 'Secondary accents, digital elements, linked items' },
      { name: 'Silver Gray', hex: '#CCCCCC', usage: 'Backgrounds, dividers, subtle elements' },
      { name: 'Desert Tan', hex: '#D9C9A1', usage: 'Neutral backgrounds, form fields, subtle accents' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, prominent text' },
    secondary: { name: 'Playfair Display', fallback: 'serif', usage: '"Mortgages" script styling, elegant text elements, subheadings' },
    body: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, descriptions, form text, smaller content' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Chandler Mortgages - Visual Style Preview</h1>
      
      {/* Color Palette Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Primary Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.primary.map((color, index) => (
              <div key={index} className="w-48 rounded overflow-hidden shadow">
                <div 
                  style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #E5E5E5' : 'none' }} 
                  className="h-24 w-full"
                ></div>
                <div className="p-3 bg-white">
                  <p className="font-bold">{color.name}</p>
                  <p className="text-sm">{color.hex}</p>
                  <p className="text-sm text-gray-600 mt-1">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Secondary Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.secondary.map((color, index) => (
              <div key={index} className="w-48 rounded overflow-hidden shadow">
                <div 
                  style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #E5E5E5' : 'none' }} 
                  className="h-24 w-full"
                ></div>
                <div className="p-3 bg-white">
                  <p className="font-bold">{color.name}</p>
                  <p className="text-sm">{color.hex}</p>
                  <p className="text-sm text-gray-600 mt-1">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Typography Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Typography</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Primary Font: {typography.primary.name}</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="text-2xl">
              CHANDLER HOME LOANS
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }} className="text-2xl">
              Mortgages
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Body Font: {typography.body.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-base">
              Chandler Mortgages provides personalized mortgage solutions for Arizona homebuyers. Our team of local experts works with you to find the perfect loan program for your unique financial situation and homeownership goals.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.body.usage}</p>
          </div>
        </div>
      </section>
      
      {/* UI Elements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UI Elements</h2>
        
        <div className="bg-white p-4 rounded shadow mb-4">
          <h3 className="font-medium mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button style={{ backgroundColor: '#BC2323', color: 'white', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="px-4 py-2">
              Apply Now
            </button>
            <button style={{ backgroundColor: '#0A1E3F', color: 'white', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="px-4 py-2">
              Learn More
            </button>
            <button style={{ backgroundColor: 'white', color: '#0A1E3F', border: '2px solid #0A1E3F', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-3">Sample Mortgage Product Card</h3>
          <div style={{ border: '1px solid #E5E5E5', borderRadius: '5px' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#0A1E3F', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#0A1E3F' }} className="text-lg mb-2">Conventional Mortgage</h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-gray-700 text-base mb-4">
                Traditional financing with competitive rates and flexible terms for qualified borrowers with good credit scores.
              </p>
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', color: '#0A1E3F' }} className="text-sm">From 3% Down</span>
                <button style={{ backgroundColor: '#BC2323', color: 'white', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="px-3 py-1 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Website Header Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Website Header Example</h2>
        <div className="rounded overflow-hidden shadow">
          <div style={{ backgroundColor: '#0A1E3F', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  backgroundColor: '#0A1E3F', 
                  borderRadius: '50%', 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="mr-2">
                  <div style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '50%',
                    top: 0,
                    background: 'radial-gradient(circle at center, #FFCC00 20%, #BC2323 20%, #BC2323 40%, #FFCC00 40%, #FFCC00 60%, #BC2323 60%, #BC2323 80%, #FFCC00 80%)',
                    zIndex: 1
                  }}></div>
                  <div style={{ 
                    position: 'absolute',
                    width: '80%',
                    height: '20%',
                    bottom: '40%',
                    backgroundColor: 'white',
                    zIndex: 2,
                    borderRadius: '2px'
                  }}></div>
                </div>
                <span className="text-xl">CHANDLER <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontWeight: 'normal' }}>Mortgages</span></span>
              </div>
              <div className="hidden md:flex space-x-6">
                <span className="cursor-pointer">Home Loans</span>
                <span className="cursor-pointer">Refinance</span>
                <span className="cursor-pointer">Resources</span>
                <span className="cursor-pointer">About Us</span>
                <span className="cursor-pointer">Contact</span>
              </div>
              <div>
                <button style={{ backgroundColor: '#BC2323', color: 'white', borderRadius: '5px' }} className="px-4 py-2 text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#D9C9A1', color: '#0A1E3F', fontFamily: 'Open Sans, sans-serif', fontSize: '14px' }} className="p-2 flex justify-center">
            <span>Arizona's Trusted Mortgage Partner | Serving Phoenix Metro | Call: (480) 123-4567</span>
          </div>
        </div>
      </section>
      
      {/* Form Elements */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Form Elements</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#0A1E3F' }} className="text-lg mb-4">Quick Quote Request</h3>
          
          <div className="space-y-4">
            <div>
              <label style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', color: '#0A1E3F' }} className="block mb-1">Full Name</label>
              <input style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#D9C9A1', border: '1px solid #CCCCCC', borderRadius: '5px' }} className="w-full p-2" type="text" placeholder="John Smith" />
            </div>
            
            <div>
              <label style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', color: '#0A1E3F' }} className="block mb-1">Email Address</label>
              <input style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#D9C9A1', border: '1px solid #CCCCCC', borderRadius: '5px' }} className="w-full p-2" type="email" placeholder="john@example.com" />
            </div>
            
            <div>
              <label style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', color: '#0A1E3F' }} className="block mb-1">Loan Type</label>
              <select style={{ fontFamily: 'Open Sans, sans-serif', backgroundColor: '#D9C9A1', border: '1px solid #CCCCCC', borderRadius: '5px' }} className="w-full p-2">
                <option>Purchase</option>
                <option>Refinance</option>
                <option>Home Equity</option>
              </select>
            </div>
            
            <button style={{ backgroundColor: '#BC2323', color: 'white', borderRadius: '5px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', width: '100%' }} className="py-2 mt-2">
              Get Your Quote
            </button>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents a visual interpretation of the Chandler Mortgages brand based on the provided logo. Actual implementation may require refinement based on client feedback and specific application needs.
      </div>
    </div>
  );
};

export default ChandlerMortgagesStylePreview;
