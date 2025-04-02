import React from 'react';

const GlazingInsuranceStylePreview = () => {
  // Glazing Insurance brand colors
  const colors = {
    primary: [
      { name: 'Deep Navy Blue', hex: '#0A3D62', usage: 'Main text elements, headers, navigation background, footer' },
      { name: 'Medium Blue', hex: '#3498DB', usage: 'Accents, highlights, buttons, links' }
    ],
    secondary: [
      { name: 'Light Blue', hex: '#AED6F1', usage: 'Backgrounds, dividers, secondary elements' },
      { name: 'White', hex: '#FFFFFF', usage: 'Backgrounds, text on dark elements, negative space' },
      { name: 'Light Gray', hex: '#F2F2F2', usage: 'Secondary backgrounds, form fields, subtle separations' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, logo text, major heading elements' },
    secondary: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Glazing Insurance Brand Style Preview</h1>
      
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
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Primary Font: {typography.primary.name}</h3>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }} className="text-2xl">
              GLAZING INSURANCE SOLUTIONS
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-base">
              Specialized insurance coverage for glass contractors, glaziers, and glass installation businesses. Our comprehensive policies protect your business from the unique risks of the glazing industry.
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
            <button style={{ backgroundColor: '#3498DB', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Get a Quote
            </button>
            <button style={{ backgroundColor: 'white', color: '#3498DB', border: '2px solid #3498DB', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Learn More
            </button>
            <button style={{ backgroundColor: '#0A3D62', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #e5e5e5', borderRadius: '4px' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#0A3D62', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', color: '#0A3D62' }} className="font-bold text-lg mb-2">Glass Contractor Coverage</h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-gray-700 text-base mb-4">
                Comprehensive insurance specifically designed for glaziers and glass installation professionals, covering liability, equipment, and specialized risks.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#3498DB', fontWeight: 'bold' }}>Custom Quotes</span>
                <button style={{ backgroundColor: '#3498DB', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-1 text-sm">
                  Get Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Glazing Insurance brand identity based on the provided logo. Actual implementations should maintain this professional, clean aesthetic while ensuring clarity and trust-building elements.
      </div>
    </div>
  );
};

export default GlazingInsuranceStylePreview;