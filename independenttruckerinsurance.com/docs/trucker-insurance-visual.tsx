import React from 'react';

const IndependentTruckerInsuranceStylePreview = () => {
  // Independent Trucker Insurance brand colors
  const colors = {
    primary: [
      { name: 'Deep Blue', hex: '#0A3D91', usage: 'Primary background, dark elements, header areas' },
      { name: 'Medium Blue', hex: '#135FD7', usage: 'Gradients, secondary backgrounds, supporting elements' },
      { name: 'Gold/Yellow', hex: '#FFCC00', usage: 'Secondary text, accent elements, call-to-action buttons' }
    ],
    secondary: [
      { name: 'Light Blue', hex: '#4A90E2', usage: 'Highlights, gradient tops, accent elements' },
      { name: 'Silver/Gray', hex: '#D8D8D8', usage: 'Neutral backgrounds, secondary elements, truck details' },
      { name: 'White', hex: '#FFFFFF', usage: 'Primary text, clean space, backgrounds' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Franklin Gothic', fallback: 'sans-serif', usage: 'Logo text for "INDEPENDENT", headlines, navigation' },
    secondary: { name: 'Roboto', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields, "TRUCKER INSURANCE" text' },
    accent: { name: 'Titillium Web', fallback: 'sans-serif', usage: 'Data points, statistics, technical specifications' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Independent Trucker Insurance Brand Style Preview</h1>
      
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
            <p style={{ fontFamily: 'Arial Black, sans-serif', fontWeight: 'bold', color: '#0A3D91' }} className="text-2xl uppercase">
              INDEPENDENT
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Arial, sans-serif', color: '#FFCC00', fontWeight: 'bold' }} className="text-xl mb-3">
              TRUCKER INSURANCE
            </p>
            <p style={{ fontFamily: 'Arial, sans-serif' }} className="text-base">
              We understand the unique challenges independent truckers face on the road. Our specialized insurance solutions provide the protection you need to keep your business moving forward with confidence.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: 'Arial Narrow, sans-serif', color: '#135FD7' }} className="text-base">
              <span className="font-bold text-lg">98.7%</span> Claims Satisfaction Rate<br/>
              <span className="font-bold text-lg">24/7</span> Roadside Assistance<br/>
              <span className="font-bold text-lg">30+</span> Years Industry Experience
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
            <button style={{ 
              background: 'linear-gradient(to bottom, #FFCC00, #E6B800)', 
              color: '#0A3D91', 
              fontFamily: 'Arial, sans-serif', 
              fontWeight: 'bold',
              borderRadius: '4px' 
            }} className="px-4 py-2">
              Get a Free Quote
            </button>
            <button style={{ 
              background: 'linear-gradient(to bottom, #0A3D91, #072C6A)', 
              color: 'white', 
              fontFamily: 'Arial, sans-serif',
              borderRadius: '4px'  
            }} className="px-4 py-2">
              Find Coverage Options
            </button>
            <button style={{ 
              backgroundColor: 'white', 
              color: '#0A3D91', 
              fontFamily: 'Arial, sans-serif',
              border: '2px solid #0A3D91',
              borderRadius: '4px'  
            }} className="px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #D8D8D8', borderRadius: '4px' }} className="max-w-sm overflow-hidden shadow">
            <div style={{ 
              background: 'linear-gradient(to bottom, #4A90E2, #0A3D91)', 
              height: '8px', 
              width: '100%' 
            }}></div>
            <div className="p-4">
              <h4 style={{ 
                fontFamily: 'Arial Black, sans-serif', 
                color: '#0A3D91', 
                fontWeight: 'bold' 
              }} className="text-lg mb-2 uppercase">Commercial Auto Coverage</h4>
              <p style={{ fontFamily: 'Arial, sans-serif' }} className="text-gray-700 text-base mb-4">
                Comprehensive protection for your truck against accidents, theft, and damage. Includes liability coverage and optional cargo protection.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ 
                  fontFamily: 'Arial Narrow, sans-serif', 
                  color: '#135FD7',
                  fontWeight: 'bold'
                }}>Starting at $X,XXX/year</span>
                <button style={{ 
                  backgroundColor: '#FFCC00', 
                  color: '#0A3D91', 
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  borderRadius: '4px'  
                }} className="px-4 py-1">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Independent Trucker Insurance brand identity based on the provided logo. Actual implementations should maintain the professional, reliable aesthetic while ensuring clear information presentation for the trucking audience.
      </div>
    </div>
  );
};

export default IndependentTruckerInsuranceStylePreview;
