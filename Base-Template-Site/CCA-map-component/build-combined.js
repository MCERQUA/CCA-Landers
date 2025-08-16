#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the main JS file
const mainJS = fs.readFileSync(path.join(__dirname, 'dist/cca-interactive-map.js'), 'utf8');

// Read the state paths data
const stateData = fs.readFileSync(path.join(__dirname, 'dist/state-paths.json'), 'utf8');

// Create combined version with embedded data
const combinedJS = `/**
 * CCA Interactive US Map Component - Combined Version
 * Includes all state path data embedded
 * 
 * @version 1.0.0
 * @author CCA Insurance Team
 */

// Embedded state path data
window.CCAMapStateData = ${stateData};

${mainJS}`;

// Write combined file
fs.writeFileSync(path.join(__dirname, 'dist/cca-interactive-map-combined.js'), combinedJS);

console.log('✅ Combined version created: dist/cca-interactive-map-combined.js');