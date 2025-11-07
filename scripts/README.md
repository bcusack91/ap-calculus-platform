# Unit Circle Animation Generator

This directory contains scripts to generate an animated visualization of the unit circle using Manim-GL.

## Animation Sequence

The animation shows:
1. **Coordinate axes** appear
2. **Unit circle** is drawn (radius = 1)
3. **Zoom into first quadrant**
4. **Angles populate** sequentially: 0° → 30° → 45° → 60° → 90°
5. **Endpoint coordinates** appear: (1, 0) and (0, 1)
6. **X-coordinates** (cosine values) fade in for middle points
7. **Y-coordinates** (sine values) fade in for middle points
8. **Full coordinates** replace individual x/y labels

## Prerequisites

### Install Manim-GL
```bash
pip install manimgl
```

### Install FFmpeg (for GIF conversion)
```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (via Chocolatey)
choco install ffmpeg
```

## Usage

### Quick Start (Recommended)
```bash
cd scripts
./generate-unit-circle-animation.sh
```

This will:
- Generate the animation video
- Convert it to an optimized GIF
- Save it to `public/animations/unit-circle-animation.gif`

### Manual Method

If you want to customize settings:

```bash
# Generate video only (will open preview)
manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation

# Generate video without preview
manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation -w

# Generate high-quality version
manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation -o --video_output_dir public/animations
```

### Convert to GIF Manually
```bash
ffmpeg -i public/animations/UnitCircleAnimation.mp4 \
    -vf "fps=30,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 \
    public/animations/unit-circle-animation.gif
```

## Customization

Edit `create-unit-circle-animation.py` to customize:
- Animation timing (change `run_time` values)
- Colors (change `color=` parameters)
- Font sizes (change `font_size=` values)
- Positions (modify `next_to()` calls)
- Animation effects (change `FadeIn`, `Write`, etc.)

## File Structure

```
scripts/
  ├── create-unit-circle-animation.py    # Manim-GL source code
  ├── generate-unit-circle-animation.sh  # Build script
  └── README.md                          # This file

public/
  └── animations/
      ├── UnitCircleAnimation.mp4        # Video output
      └── unit-circle-animation.gif      # GIF output
```

## Troubleshooting

### "manimgl: command not found"
Install Manim-GL: `pip install manimgl`

### "ffmpeg: command not found"
Install FFmpeg: `brew install ffmpeg` (macOS)

### Animation runs too fast/slow
Edit the `run_time` values in `create-unit-circle-animation.py`

### GIF file too large
Reduce the scale in the ffmpeg command (e.g., `scale=600:-1` instead of `scale=800:-1`)

## Integration with Next.js

Once generated, the GIF can be used in React components:

```tsx
<Image 
  src="/animations/unit-circle-animation.gif" 
  alt="Unit Circle Animation"
  width={800}
  height={800}
/>
```

Or with a marker in the lesson content:
```typescript
content: `
**Understanding Coordinates**

[UNIT_CIRCLE_ANIMATION]

The animation shows...
`
```
