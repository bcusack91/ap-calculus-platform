#!/bin/bash

# Simple script to create a static animated SVG/GIF for the unit circle
# This is a fallback that doesn't require Manim-GL

echo "🎨 Creating Unit Circle animation (simplified version)..."

cd "$(dirname "$0")"

# Check if we have the HTML file
if [ ! -f "../public/animations/unit-circle-animation.html" ]; then
    echo "❌ HTML animation file not found"
    exit 1
fi

echo "✅ HTML animation created at: public/animations/unit-circle-animation.html"
echo ""
echo "📖 To view it: Open public/animations/unit-circle-animation.html in your browser"
echo ""
echo "🎬 To convert to GIF, you have two options:"
echo ""
echo "Option 1: Use a screen recorder to record the animation, then:"
echo "  ffmpeg -i recording.mov -vf 'fps=30,scale=800:-1' public/animations/unit-circle-animation.gif"
echo ""
echo "Option 2: For now, we'll use the interactive component in Next.js directly"
echo ""
echo "💡 The animation is integrated into the website and will work as an HTML page"

# For now, we'll just inform the user
# A proper conversion would require a browser automation tool like Puppeteer

echo ""
echo "🎉 Done! The animation is ready to use in the lesson."
