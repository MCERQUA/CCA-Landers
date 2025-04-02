import React from 'react';

const HoodVentInsuranceStylePreview = () => {
  // Hood Vent Cleaning Insurance brand colors
  const colors = {
    primary: [
      { name: 'Deep Navy Blue', hex: '#0B3C5D', usage: 'Main text elements, headers, navigation background, footer' },
      { name: 'Medium Teal Blue', hex: '#328CC1', usage: 'Accents, highlights, buttons, interactive elements' }
    ],
    secondary: [
      { name: 'Silver Gray', hex: '#D9D9D9', usage: 'Backgrounds, graphic elements, secondary sections' },
      { name: 'Warm Orange', hex: '#F47B20', usage: 'Call-to-action buttons, important highlights, emergency services' },
      { name: 'Dark Charcoal', hex: '#212529', usage: 'Body text, secondary text elements' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, logo text, primary headings' },
    secondary: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields, general content' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Hood Vent Cleaning Insurance Brand Style Preview</h1>
      
      {/* Color Palette Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Primary Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.primary.map((color, index) => (
              <div key={index} className="w-48 rounded overflow-hidden shadow">
                <div 
                  style={{ backgroundColor: color.hex }} 
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
                  style={{ backgroundColor: color.hex }} 
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
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Primary Font: {typography.primary.name}</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#0B3C5D' }} className="text-2xl">
              HOOD VENT CLEANING INSURANCE
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#212529' }} className="text-base">
              Specialized insurance coverage for hood vent cleaning professionals, protecting your business from the unique risks of restaurant kitchen exhaust system maintenance, cleaning, and fire prevention.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
        </div>
      </section>
      
      {/* UI Elements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UI Elements</h2>
        
        <div className="bg-white p-4 rounded shadow mb-4" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button style={{ backgroundColor: '#0B3C5D', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Get a Quote
            </button>
            <button style={{ backgroundColor: '#328CC1', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Learn More
            </button>
            <button style={{ backgroundColor: '#F47B20', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Emergency Services
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #e5e5e5', borderRadius: '4px' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#0B3C5D', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', color: '#0B3C5D', fontWeight: 'bold' }} className="text-lg mb-2">Fire Code Compliance Coverage</h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#212529' }} className="text-base mb-4">
                Protect your hood vent cleaning business with specialized insurance that covers both liability risks and potential damages related to fire code compliance work.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#328CC1', fontWeight: 'bold' }}>Industry-Specific Protection</span>
                <button style={{ backgroundColor: '#F47B20', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-1 text-sm">
                  Get Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Hood Vent Cleaning Insurance brand identity based on the provided logo. Actual implementations should maintain this professional, specialized aesthetic while ensuring clarity and trust-building elements specific to the restaurant safety industry.
      </div>
    </div>
  );
};

export default HoodVentInsuranceStylePreview;