import React from 'react';

const UFCInsuranceStylePreview = () => {
  // UFC Insurance brand colors
  const colors = {
    primary: [
      { name: 'Dark Navy/Black', hex: '#0A0E14', usage: 'Primary background, dark elements' },
      { name: 'Bright White', hex: '#FFFFFF', usage: 'Primary text for "UFC" and "INSURANCE", highlights' },
      { name: 'UFC Red', hex: '#D20A0A', usage: 'Accent elements, underline, call-to-action buttons' }
    ],
    secondary: [
      { name: 'UFC Orange', hex: '#F7941D', usage: 'Accent splashes, highlights, secondary elements' },
      { name: 'Steel Gray', hex: '#CCCCCC', usage: 'Secondary text, distressed effects, subtle backgrounds' },
      { name: 'UFC Blue', hex: '#1A73E8', usage: 'Hyperlinks, secondary accents, digital elements' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Impact', fallback: 'sans-serif', usage: 'Headlines, navigation, logo text, major heading elements' },
    secondary: { name: 'Industry Gothic', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields' },
    accent: { name: 'Agency FB', fallback: 'sans-serif', usage: 'Special callouts, pricing, statistics' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">UFC Insurance Brand Style Preview</h1>
      
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
            <p style={{ fontFamily: 'Impact, sans-serif', fontWeight: 'bold' }} className="text-2xl uppercase">
              ULTIMATE FIGHTING COVERAGE
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Arial, sans-serif' }} className="text-base">
              Our insurance coverage provides powerful protection for fighters, gyms, trainers, and event organizers in the combat sports industry. With specialized policies designed for the unique risks of MMA and combat sports.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: 'Arial Narrow, sans-serif' }} className="text-xl uppercase tracking-wide">
              CHAMPIONSHIP LEVEL PROTECTION
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.accent.usage}</p>
          </div>
        </div>
      </section>
      
      {/* UI Elements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UI Elements</h2>
        
        <div className="bg-white p-4 rounded shadow mb-4" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button style={{ backgroundColor: '#D20A0A', color: 'white', fontFamily: 'Impact, sans-serif' }} className="px-4 py-2 rounded uppercase">
              Get a Quote
            </button>
            <button style={{ backgroundColor: '#0A0E14', color: 'white', fontFamily: 'Impact, sans-serif' }} className="px-4 py-2 rounded uppercase">
              Learn More
            </button>
            <button style={{ backgroundColor: 'white', color: '#D20A0A', border: '2px solid #D20A0A', fontFamily: 'Impact, sans-serif' }} className="px-4 py-2 rounded uppercase">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #e5e5e5' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#0A0E14', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Impact, sans-serif', color: '#0A0E14' }} className="font-bold text-lg mb-2 uppercase">FIGHTER PROTECTION PLAN</h4>
              <p style={{ fontFamily: 'Arial, sans-serif' }} className="text-gray-700 text-base mb-4">
                Comprehensive coverage for professional and amateur fighters, including injury, liability, and career protection options.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', color: '#D20A0A' }} className="font-bold">FROM $99/MONTH</span>
                <button style={{ backgroundColor: '#D20A0A', color: 'white', fontFamily: 'Impact, sans-serif' }} className="px-4 py-1 rounded uppercase text-sm">
                  Get Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the UFC Insurance brand identity based on the provided logo. Actual implementations should maintain this aggressive, energetic aesthetic while ensuring professional presentation.
      </div>
    </div>
  );
};

export default UFCInsuranceStylePreview;
