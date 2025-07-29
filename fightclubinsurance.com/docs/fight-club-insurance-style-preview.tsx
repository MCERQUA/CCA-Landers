import React from 'react';

const FightClubInsuranceStylePreview = () => {
  // Fight Club Insurance brand colors
  const colors = {
    primary: [
      { name: 'Bold Black', hex: '#000000', usage: 'Typography, outlines, primary backgrounds' },
      { name: 'Combat Red', hex: '#D20000', usage: 'Accents, CTAs, highlights, important elements' },
      { name: 'Pure White', hex: '#FFFFFF', usage: 'Text on dark backgrounds, negative space' }
    ],
    secondary: [
      { name: 'Fighter Tan', hex: '#E0B88D', usage: 'Backgrounds, neutral elements, form fields' },
      { name: 'Steel Blue', hex: '#3D5866', usage: 'Secondary backgrounds, alternating elements' },
      { name: 'Deep Navy', hex: '#1A2E3C', usage: 'Dark UI elements, footer backgrounds' },
      { name: 'Shadow Gray', hex: '#333333', usage: 'Secondary text, shadows, subtle backgrounds' }
    ]
  };

  // Typography
  const typography = {
    primary: { name: 'Impact', fallback: 'sans-serif', usage: 'Main headings, navigation, primary messaging' },
    secondary: { name: 'Barlow Condensed', fallback: 'sans-serif', usage: 'Subheadings, button text, accents' },
    body: { name: 'Barlow', fallback: 'sans-serif', usage: 'Body text, descriptions, form labels' }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Fight Club Insurance - Visual Style Preview</h1>
      
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
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Primary Font: {typography.primary.name}</h3>
            <p style={{ fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }} className="text-3xl">
              FIGHT CLUB INSURANCE
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.primary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Secondary Font: {typography.secondary.name}</h3>
            <p style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="text-xl">
              SPECIALIZED COVERAGE FOR COMBAT SPORTS
            </p>
            <p className="text-sm text-gray-600 mt-1">Used for: {typography.secondary.usage}</p>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-medium mb-2">Body Font: {typography.body.name}</h3>
            <p style={{ fontFamily: 'Arial, sans-serif' }} className="text-base">
              Fight Club Insurance provides specialized coverage for fighters, trainers, gyms, and event promoters in the combat sports industry. Our policies are designed to address the unique risks and challenges faced by those in boxing, MMA, martial arts, and other fighting disciplines.
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
            <button style={{ backgroundColor: '#D20000', color: 'white', borderRadius: '4px', fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="px-4 py-2">
              Get Covered Now
            </button>
            <button style={{ backgroundColor: '#000000', color: 'white', borderRadius: '4px', fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="px-4 py-2">
              View Plans
            </button>
            <button style={{ backgroundColor: 'white', color: '#000000', border: '2px solid #000000', borderRadius: '4px', fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-medium mb-3">Sample Insurance Product Card</h3>
          <div style={{ border: '2px solid #000000', borderRadius: '4px' }} className="max-w-sm overflow-hidden shadow">
            <div style={{ backgroundColor: '#000000', height: '8px', width: '100%' }}></div>
            <div className="p-4">
              <h4 style={{ fontFamily: 'Impact, sans-serif', color: '#000000', textTransform: 'uppercase' }} className="text-xl mb-2">Fighter Coverage</h4>
              <p style={{ fontFamily: 'Arial, sans-serif', color: '#333333' }} className="text-base mb-4">
                Comprehensive insurance for professional and amateur fighters. Includes injury coverage, medical expenses, and disability protection tailored to combat sports.
              </p>
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', color: '#000000' }} className="text-sm">Starting at $59/month</span>
                <button style={{ backgroundColor: '#D20000', color: 'white', borderRadius: '4px', fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="px-3 py-1 text-sm">
                  Get a Quote
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
          <div style={{ backgroundColor: '#000000', color: 'white' }} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div style={{ 
                  width: '50px', 
                  height: '40px', 
                  position: 'relative', 
                  marginRight: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    backgroundColor: '#D20000',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '5px'
                  }}></div>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    backgroundColor: '#3D5866',
                    borderRadius: '50%',
                    position: 'absolute',
                    right: '5px'
                  }}></div>
                </div>
                <span style={{ fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }} className="text-xl">FIGHT CLUB INSURANCE</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="cursor-pointer">Fighters</span>
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="cursor-pointer">Gyms</span>
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="cursor-pointer">Events</span>
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="cursor-pointer">Claims</span>
                <span style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="cursor-pointer">About</span>
              </div>
              <div>
                <button style={{ backgroundColor: '#D20000', color: 'white', borderRadius: '4px', fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', textTransform: 'uppercase' }} className="px-4 py-2 text-sm">
                  Get Protected
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#3D5866', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '14px' }} className="p-2 flex justify-center">
            <span>24/7 Claims Support for Combat Athletes | Licensed in All 50 States | Call: (800) FIGHT-INS</span>
          </div>
        </div>
      </section>
      
      {/* Form Elements */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Form Elements</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: 'Impact, sans-serif', color: '#000000', textTransform: 'uppercase' }} className="text-xl mb-4">Quick Quote Request</h3>
          
          <div className="space-y-4">
            <div>
              <label style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', color: '#000000', textTransform: 'uppercase' }} className="block mb-1">Fighter Name</label>
              <input style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#E0B88D', border: '1px solid #333333', borderRadius: '4px' }} className="w-full p-2" type="text" placeholder="Jon Jones" />
            </div>
            
            <div>
              <label style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', color: '#000000', textTransform: 'uppercase' }} className="block mb-1">Fighting Discipline</label>
              <select style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#E0B88D', border: '1px solid #333333', borderRadius: '4px' }} className="w-full p-2">
                <option>MMA</option>
                <option>Boxing</option>
                <option>Muay Thai</option>
                <option>Brazilian Jiu-Jitsu</option>
                <option>Wrestling</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label style={{ fontFamily: 'Arial Narrow, sans-serif', fontWeight: 'bold', color: '#000000', textTransform: 'uppercase' }} className="block mb-1">Experience Level</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="experience" className="mr-2" />
                  <span style={{ fontFamily: 'Arial, sans-serif' }}>Amateur</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="experience" className="mr-2" />
                  <span style={{ fontFamily: 'Arial, sans-serif' }}>Professional</span>
                </label>
              </div>
            </div>
            
            <button style={{ 
              backgroundColor: '#D20000', 
              color: 'white', 
              borderRadius: '4px', 
              fontFamily: 'Arial Narrow, sans-serif', 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              width: '100%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }} className="py-3 mt-2">
              Get In The Ring
            </button>
          </div>
        </div>
      </section>
      
      <div className="text-sm text-gray-600 italic">
        Note: This style preview represents a visual interpretation of the Fight Club Insurance brand based on the provided logo. Actual implementation may require refinement based on client feedback and specific application needs.
      </div>
    </div>
  );
};

export default FightClubInsuranceStylePreview;
