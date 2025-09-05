import React from 'react';

const IndoorSkiTrainerStylePreview = () => {
  // Indoor Ski Trainer brand colors
  const colors = {
    primary: [
      { name: 'Alpine Blue', hex: '#0066CC', usage: 'Main text elements, headers, navigation background, footer' },
      { name: 'Snow White', hex: '#FFFFFF', usage: 'Backgrounds, text on dark elements, negative space' }
    ],
    secondary: [
      { name: 'Ice Blue', hex: '#A5D8FF', usage: 'Highlights, backgrounds, secondary elements' },
      { name: 'Dynamic Red', hex: '#E53E3E', usage: 'Call-to-action buttons, important highlights, performance elements' },
      { name: 'Slate Gray', hex: '#2D3748', usage: 'Body text, secondary text elements, balance' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, logo text, primary headings' },
    secondary: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, descriptions, specifications, general content' },
    accent: { name: 'Bebas Neue', fallback: 'sans-serif', usage: 'Performance statistics, numbers, special callouts' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Indoor Ski Trainer Brand Style Preview</h1>
      
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
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#0066CC' }} className="text-2xl">
              INDOOR SKI TRAINER
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#2D3748' }} className="text-base">
              The advanced training system for year-round ski conditioning. Perfect your technique, build ski-specific muscle memory, and improve performance with our professional-grade indoor training equipment.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '1px', color: '#E53E3E' }} className="text-xl">
              45° EDGE ANGLE | 87% IMPROVEMENT
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
            <button style={{ backgroundColor: '#0066CC', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Shop Now
            </button>
            <button style={{ backgroundColor: '#A5D8FF', color: '#0066CC', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Training Videos
            </button>
            <button style={{ backgroundColor: '#E53E3E', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Get Training Plan
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Product Card</h3>
          <div style={{ border: '1px solid #e5e5e5', borderRadius: '4px' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#0066CC', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', color: '#0066CC', fontWeight: 'bold' }} className="text-lg mb-2">PRO SERIES SKI TRAINER</h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#2D3748' }} className="text-base mb-4">
                Professional-grade indoor ski training system with adjustable resistance, digital performance tracking, and customizable angle settings for all skill levels.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Arial, sans-serif', color: '#E53E3E', fontWeight: 'bold', letterSpacing: '1px' }}>$899.99</span>
                <button style={{ backgroundColor: '#E53E3E', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-1 text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Indoor Ski Trainer brand identity based on the provided logo. Actual implementations should maintain this technical, dynamic aesthetic while ensuring clarity and performance-focused elements specific to the skiing training equipment market.
      </div>
    </div>
  );
};

export default IndoorSkiTrainerStylePreview;