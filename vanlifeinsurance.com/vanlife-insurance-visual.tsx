import React from 'react';

const VanLifeInsuranceStylePreview = () => {
  // VanLife Insurance brand colors
  const colors = {
    primary: [
      { name: 'Mint/Teal Gradient Start', hex: '#9DFFD6', usage: 'Primary text elements, headers, accents, top gradient' },
      { name: 'Navy Blue', hex: '#0A1E3F', usage: 'Borders, backgrounds, framing elements' },
      { name: 'Coral Orange', hex: '#FF6B35', usage: 'Accent elements, CTAs, highlights, van lower body' }
    ],
    secondary: [
      { name: 'Cream', hex: '#FFF8DC', usage: 'Backgrounds, van upper body, light text elements' },
      { name: 'Gradient End Yellow', hex: '#FFDE59', usage: 'Bottom text gradient, accents, secondary highlights' },
      { name: 'Palm Green', hex: '#2E8B57', usage: 'Natural elements, secondary accents, footer elements' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Kanit', fallback: 'sans-serif', usage: 'Logo text, headlines, navigation' },
    secondary: { name: 'Quicksand', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields' },
    accent: { name: 'Pacifico', fallback: 'cursive', usage: 'Special callouts, adventure-related quotes, casual elements' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">VanLife Insurance Brand Style Preview</h1>
      
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
            <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#9DFFD6', textShadow: '1px 1px 1px #0A1E3F' }} className="text-2xl">
              VANLIFE INSURANCE
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Verdana, sans-serif' }} className="text-base">
              Specialized insurance coverage for your home on wheels. We understand the van life journey and provide protection that moves with you, wherever your adventures may lead.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: 'cursive' }} className="text-xl">
              Adventure Awaits
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
            <button style={{ backgroundColor: '#FF6B35', color: 'white', fontFamily: 'Arial, sans-serif', borderRadius: '8px' }} className="px-4 py-2">
              Get Your Quote
            </button>
            <button style={{ backgroundColor: '#0A1E3F', color: '#9DFFD6', fontFamily: 'Arial, sans-serif', borderRadius: '8px' }} className="px-4 py-2">
              Explore Coverage
            </button>
            <button style={{ backgroundColor: 'transparent', color: '#FF6B35', fontFamily: 'Arial, sans-serif', border: '2px solid #FF6B35', borderRadius: '8px' }} className="px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
          <h3 className="font-medium mb-3">Sample Card Component</h3>
          <div style={{ border: '2px solid #0A1E3F', borderRadius: '12px' }} className="max-w-sm overflow-hidden shadow">
            <div style={{ backgroundColor: '#FFF8DC', height: '100px' }} className="w-full flex items-center justify-center">
              <div style={{ width: '80px', height: '60px', backgroundColor: '#0A1E3F', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '60px', height: '40px', background: 'linear-gradient(to bottom, #FFF8DC 50%, #FF6B35 50%)', borderRadius: '6px' }}></div>
              </div>
            </div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Arial, sans-serif', color: '#0A1E3F', fontWeight: 'bold' }} className="text-lg mb-2">Van Life Protection Plan</h4>
              <p style={{ fontFamily: 'Verdana, sans-serif' }} className="text-gray-700 text-base mb-4">
                Coverage designed specifically for your mobile lifestyle, including vehicle, personal belongings, and liability protection.
              </p>
              <div style={{ fontFamily: 'cursive', color: '#2E8B57', marginBottom: '12px' }} className="text-base">
                Freedom to roam, protected
              </div>
              <button style={{ backgroundColor: '#FF6B35', color: 'white', fontFamily: 'Arial, sans-serif', borderRadius: '8px' }} className="px-4 py-2 w-full">
                Get Covered
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the VanLife Insurance brand identity based on the provided logo. Actual implementations should incorporate the playful, adventurous aesthetic while ensuring the information is clear and accessible.
      </div>
    </div>
  );
};

export default VanLifeInsuranceStylePreview;
