#!/bin/bash

# Build minified versions for production
echo "🔨 Building minified versions..."

# Check if uglify-js is installed
if ! command -v uglifyjs &> /dev/null; then
    echo "Installing uglify-js..."
    npm install -g uglify-js
fi

# Check if clean-css-cli is installed  
if ! command -v cleancss &> /dev/null; then
    echo "Installing clean-css-cli..."
    npm install -g clean-css-cli
fi

# Minify JavaScript
echo "Minifying JavaScript..."
uglifyjs dist/cca-interactive-map-combined.js \
    -o dist/cca-interactive-map-combined.min.js \
    -c -m \
    --source-map "url='cca-interactive-map-combined.min.js.map'"

# Minify CSS
echo "Minifying CSS..."
cleancss -o dist/cca-interactive-map.min.css dist/cca-interactive-map.css

# Get file sizes
ORIGINAL_JS=$(ls -lh dist/cca-interactive-map-combined.js | awk '{print $5}')
MINIFIED_JS=$(ls -lh dist/cca-interactive-map-combined.min.js | awk '{print $5}')
ORIGINAL_CSS=$(ls -lh dist/cca-interactive-map.css | awk '{print $5}')
MINIFIED_CSS=$(ls -lh dist/cca-interactive-map.min.css | awk '{print $5}')

echo "✅ Minification complete!"
echo "JavaScript: $ORIGINAL_JS → $MINIFIED_JS"
echo "CSS: $ORIGINAL_CSS → $MINIFIED_CSS"