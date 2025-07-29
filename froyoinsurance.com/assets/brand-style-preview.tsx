import React from 'react';

const FroyoInsuranceStylePreview = () => {
  // Froyo Insurance brand colors
  const colors = {
    primary: [
      { name: 'Berry Purple', hex: '#8A2BE2', usage: 'Primary brand color, headers, important UI elements' },
      { name: 'Mint Green', hex: '#3EB489', usage: 'Secondary brand color, buttons, highlights, icons' },
      { name: 'Yogurt White', hex: '#F8F7FF', usage: 'Backgrounds, spaces, text areas, negative space' }
    ],
    secondary: [
      { name: 'Raspberry Pink', hex: '#E84A5F', usage: 'Accents, call-to-action elements, highlights' },
      { name: 'Blueberry Blue', hex: '#25567B', usage: 'Footer backgrounds, secondary text, depth elements' },
      { name: 'Soft Yellow', hex: '#FFF07C', usage: 'Subtle highlights, background accents, success messages' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Quicksand', fallback: 'sans-serif', usage: 'Headlines, navigation, important UI text' },
    secondary: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, form fields, descriptions' },
    accent: { name: 'Pacifico', fallback: 'cursive', usage: 'Occasional accent text, promotional headings' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Froyo Insurance Brand Style Preview</h1>
      
      {/* Color Palette Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
        
        <div className="mb-4">
          <h3 className="font-medium mb-2">Primary Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.primary.map((color, index) => (
              <div key={index} className="w-48 rounded-lg overflow-hidden shadow">
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
              <div key={index} className="w-48 rounded-lg overflow-hidden shadow">
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
          <div className="bg-white p-4 rounded-lg shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Primary Font: {typography.primary.name}</h3>
            <p style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold', color: '#8A2BE2' }} className="text-2xl">
              Froyo Insurance Protection
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#25567B' }} className="text-base">
              We provide specialized insurance coverage for frozen yogurt businesses, protecting your shop with policies designed for the unique risks you face. Our comprehensive solutions include property, liability, spoilage, and equipment breakdown coverage.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: 'Pacifico, cursive', color: '#E84A5F' }} className="text-xl">
              Sweet protection for your business
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.accent.usage}</p>
          </div>
        </div>
      </section>
      
      {/* UI Elements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UI Elements</h2>
        
        <div className="bg-white p-4 rounded-lg shadow mb-4" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <button style={{ backgroundColor: '#8A2BE2', color: 'white', fontFamily: 'Quicksand, sans-serif', fontWeight: '600', borderRadius: '8px' }} className="px-4 py-2">
              Get a Quote
            </button>
            <button style={{ backgroundColor: '#3EB489', color: 'white', fontFamily: 'Quicksand, sans-serif', fontWeight: '600', borderRadius: '8px' }} className="px-4 py-2">
              Learn More
            </button>
            <button style={{ backgroundColor: 'white', color: '#8A2BE2', border: '2px solid #8A2BE2', fontFamily: 'Quicksand, sans-serif', fontWeight: '600', borderRadius: '8px' }} className="px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden' }} className="max-w-sm shadow">
            <div style={{ 
              background: 'linear-gradient(135deg, #8A2BE2 0%, #3EB489 100%)', 
              height: '8px', 
              width: '100%' 
            }}></div>
            <div className="p-4" style={{ backgroundColor: '#F8F7FF' }}>
              <h4 style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 'bold', color: '#8A2BE2' }} className="text-lg mb-2">
                Property Protection Coverage
              </h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#25567B' }} className="text-base mb-4">
                Comprehensive protection for your shop, equipment, and inventory against damage, theft, and other covered perils.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Open Sans, sans-serif', color: '#3EB489', fontWeight: '600' }}>Starting at $79/month</span>
                <button style={{ 
                  backgroundColor: '#E84A5F', 
                  color: 'white', 
                  fontFamily: 'Quicksand, sans-serif', 
                  fontWeight: '600',
                  borderRadius: '8px'
                }} className="px-4 py-1 text-sm">
                  Get Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sample Pattern Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Design Elements</h2>
        
        <div className="bg-white p-4 rounded-lg shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Pattern</h3>
          <div style={{ 
            height: '100px', 
            width: '100%', 
            background: '#F8F7FF',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            {/* Creating a simple sprinkle pattern */}
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '3px',
                  borderRadius: '3px',
                  backgroundColor: i % 3 === 0 ? '#E84A5F' : i % 3 === 1 ? '#3EB489' : '#8A2BE2',
                  transform: `rotate(${Math.random() * 180}deg)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 'bold',
              color: '#25567B'
            }}>
              Sprinkle Pattern Background
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Froyo Insurance brand identity. The design combines playful frozen yogurt elements with professional insurance attributes to create a unique, industry-specific brand.
      </div>
    </div>
  );
};

export default FroyoInsuranceStylePreview;
