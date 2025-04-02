import React from 'react';

const BarNightclubInsuranceStylePreview = () => {
  // Bar & Nightclub Insurance brand colors
  const colors = {
    primary: [
      { name: 'Deep Purple', hex: '#3C1053', usage: 'Main text elements, headers, navigation background, footer' },
      { name: 'Electric Blue', hex: '#00B4D8', usage: 'Accents, highlights, buttons, interactive elements' }
    ],
    secondary: [
      { name: 'Black', hex: '#121212', usage: 'Backgrounds, important text, dark elements' },
      { name: 'Neon Pink', hex: '#FF36AB', usage: 'Important call-to-action buttons, highlights, attention elements' },
      { name: 'Light Gray', hex: '#F8F9FA', usage: 'Backgrounds, text on dark elements, spacing' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Montserrat Bold', fallback: 'sans-serif', usage: 'Headers, navigation, logo text, primary headings' },
    secondary: { name: 'Open Sans', fallback: 'sans-serif', usage: 'Body text, descriptions, form fields, general content' },
    accent: { name: 'Bebas Neue', fallback: 'sans-serif', usage: 'Special highlights, promotional elements, event-related content' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Bar & Nightclub Insurance Brand Style Preview</h1>
      
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
                  style={{ backgroundColor: color.hex, border: color.hex === '#F8F9FA' ? '1px solid #E5E5E5' : 'none' }} 
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
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#3C1053' }} className="text-2xl">
              BAR & NIGHTCLUB INSURANCE
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#121212' }} className="text-base">
              Specialized insurance coverage for bars, nightclubs, and entertainment venues. Our comprehensive policies protect your business from the unique risks of the hospitality and nightlife industry.
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow" style={{ border: '1px solid #e5e5e5' }}>
            <h3 className="font-medium mb-2">Accent Font: {typography.accent.name}</h3>
            <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '1px', color: '#FF36AB' }} className="text-xl">
              EXCLUSIVE VENUE PROTECTION
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.accent.usage}</p>
          </div>
        </div>
      </section>
      
      {/* UI Elements Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">UI Elements</h2>
        
        <div style={{ backgroundColor: '#121212' }} className="p-4 rounded shadow mb-4">
          <h3 className="font-medium mb-3 text-white">Buttons on Dark Background</h3>
          <div className="flex flex-wrap gap-4">
            <button style={{ backgroundColor: '#00B4D8', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Get a Quote
            </button>
            <button style={{ backgroundColor: '#3C1053', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              View Coverage
            </button>
            <button style={{ backgroundColor: '#FF36AB', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        
        <div style={{ backgroundColor: '#121212' }} className="p-4 rounded shadow">
          <h3 className="font-medium mb-3 text-white">Sample Card Component</h3>
          <div style={{ border: '1px solid #3C1053', borderRadius: '4px', backgroundColor: '#1E1E1E' }} className="max-w-sm rounded overflow-hidden shadow">
            <div style={{ backgroundColor: '#3C1053', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', color: '#00B4D8', fontWeight: 'bold' }} className="text-lg mb-2">Liquor Liability Coverage</h4>
              <p style={{ fontFamily: 'Open Sans, sans-serif', color: '#F8F9FA' }} className="text-base mb-4">
                Specialized protection for bars and nightclubs against claims arising from alcohol-related incidents. Our policies help protect your business from the unique risks of serving alcohol.
              </p>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Arial, sans-serif', color: '#F8F9FA', fontWeight: 'bold', letterSpacing: '1px' }}>Industry-Specific</span>
                <button style={{ backgroundColor: '#FF36AB', color: 'white', fontFamily: 'Montserrat, sans-serif', borderRadius: '4px' }} className="px-4 py-1 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents the Bar & Nightclub Insurance brand identity based on the provided logo. Actual implementations should maintain this sophisticated yet vibrant aesthetic while ensuring clarity and trust-building elements specific to the hospitality and entertainment insurance market.
      </div>
    </div>
  );
};

export default BarNightclubInsuranceStylePreview;