import React from 'react';

const HiredAutoInsuranceStylePreview = () => {
  // Hired Auto Insurance brand colors
  const colors = {
    primary: [
      { name: 'Deep Blue', hex: '#1E3A8A', usage: 'Main text elements, headers, navigation background, footer' },
      { name: 'Royal Blue', hex: '#3B82F6', usage: 'Accents, highlights, buttons, interactive elements' }
    ],
    secondary: [
      { name: 'Silver Gray', hex: '#E5E7EB', usage: 'Backgrounds, graphic elements, secondary sections' },
      { name: 'Dark Red', hex: '#B91C1C', usage: 'Important call-to-action buttons, important notices' },
      { name: 'Dark Gray', hex: '#1F2937', usage: 'Body text, secondary text elements' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, logo text, primary headings' },
    secondary: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields, general content' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Hired Auto Insurance Brand Style Preview</h1>
      
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
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#1E3A8A' }} className="text-2xl">
              HIRED AUTO INSURANCE
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#1F2937' }} className="text-base">
              Specialized insurance coverage for businesses with hired and non-owned vehicles. Protect your company from liability when employees use personal or rented vehicles for business purposes.
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
            <button style={{ backgroundColor: '#1E3A8A', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Get a Quote
            </button>
            <button style={{ backgroundColor: '#3B82F6', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Learn More
            </button>
            <button style={{ backgroundColor: '#B91C1C', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Urgent Coverage
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #e5e5e5', borderRadius: '4px' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#1E3A8A', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', color: '#1E3A8A', fontWeight: 'bold' }} className="text-lg mb-2">Non-Owned Auto Coverage</h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#1F2937' }} className="text-base mb-4">
                Protection for your business when employees use their personal vehicles for work-related activities. Covers liability gaps between personal auto policies and business needs.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#3B82F6', fontWeight: 'bold' }}>Business Protection</span>
                <button style={{ backgroundColor: '#1E3A8A', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-1 text-sm">
                  Get Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Hired Auto Insurance brand identity based on the provided logo. Actual implementations should maintain this professional, business-focused aesthetic while ensuring clarity and trust-building elements specific to the commercial auto insurance market.
      </div>
    </div>
  );
};

export default HiredAutoInsuranceStylePreview;