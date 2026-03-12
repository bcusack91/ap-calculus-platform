#!/bin/bash

# Script to generate the Unit Circle animation using Manim-GL
# This will create a video and convert it to a GIF

echo "🎬 Generating Unit Circle Animation with Manim-GL..."

# Navigate to the scripts directory
cd "$(dirname "$0")"

# Check if manimgl is installed
if ! command -v manimgl &> /dev/null
then
    echo "❌ manimgl not found. Installing manim and dependencies..."
    echo "Please run: pip install manimgl"
    exit 1
fi

# Generate the animation (high quality)
echo "📹 Rendering animation..."
manimgl create-unit-circle-animation.py UnitCircleAnimation -o --video_output_dir ../public/animations

# Check if ffmpeg is available for GIF conversion
if command -v ffmpeg &> /dev/null
then
    echo "🎞️  Converting to GIF..."
    
    # Find the most recent video file
    VIDEO_FILE=$(ls -t ../public/animations/UnitCircleAnimation.mp4 2>/dev/null | head -1)
    
    if [ -f "$VIDEO_FILE" ]; then
        # Convert to optimized GIF
        ffmpeg -i "$VIDEO_FILE" \
            -vf "fps=30,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
            -loop 0 \
            ../public/animations/unit-circle-animation.gif -y
        
        echo "✅ Animation saved to public/animations/unit-circle-animation.gif"
        echo "📊 File size: $(du -h ../public/animations/unit-circle-animation.gif | cut -f1)"
    else
        echo "❌ Video file not found at $VIDEO_FILE"
        exit 1
    fi
else
    echo "⚠️  ffmpeg not found. Video saved but not converted to GIF."
    echo "To convert to GIF, install ffmpeg: brew install ffmpeg"
    echo "Video location: public/animations/UnitCircleAnimation.mp4"
fi

echo "🎉 Done!"
