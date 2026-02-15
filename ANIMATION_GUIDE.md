# 🎬 Generating the Unit Circle Animation

This guide will help you create the animated GIF for the unit circle lesson using Manim-GL.

## 📋 Quick Start

```bash
cd scripts
./generate-unit-circle-animation.sh
```

That's it! The script will generate the animation and save it to `public/animations/unit-circle-animation.gif`.

---

## 🔧 Prerequisites

### 1. Install Python (if not already installed)
```bash
# Check if Python is installed
python3 --version

# macOS (via Homebrew)
brew install python3

# Or download from https://www.python.org/downloads/
```

### 2. Install Manim-GL
```bash
pip3 install manimgl
```

### 3. Install FFmpeg (for GIF conversion)
```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (via Chocolatey)
choco install ffmpeg
```

---

## 📖 Step-by-Step Instructions

### Option 1: Automated (Recommended)

1. **Navigate to scripts directory:**
   ```bash
   cd "/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/scripts"
   ```

2. **Run the generation script:**
   ```bash
   ./generate-unit-circle-animation.sh
   ```

3. **Wait for completion** (usually 30-60 seconds)

4. **Check the output:**
   - Video: `public/animations/UnitCircleAnimation.mp4`
   - GIF: `public/animations/unit-circle-animation.gif`

### Option 2: Manual Control

1. **Generate the animation with preview:**
   ```bash
   manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation
   ```
   This will open a window showing the animation.

2. **Generate without preview (faster):**
   ```bash
   manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation -w -o
   ```

3. **Specify output directory:**
   ```bash
   manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation -o --video_output_dir public/animations
   ```

4. **Convert to GIF:**
   ```bash
   ffmpeg -i public/animations/UnitCircleAnimation.mp4 \
       -vf "fps=30,scale=800:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
       -loop 0 \
       public/animations/unit-circle-animation.gif
   ```

---

## 🎨 Animation Details

The generated animation will show:

1. **Coordinate System** appears (1.5 seconds)
2. **Unit Circle** is drawn (2 seconds)
3. **Zoom** into first quadrant (2 seconds)
4. **Angles** populate sequentially:
   - 0° (0.9 seconds)
   - 30° (0.9 seconds)
   - 45° (0.9 seconds)
   - 60° (0.9 seconds)
   - 90° (0.9 seconds)
5. **Endpoint coordinates** appear:
   - (1, 0) (1.1 seconds)
   - (0, 1) (1.1 seconds)
6. **X-coordinates** (cos values) fade in (2.7 seconds)
7. **Y-coordinates** (sin values) fade in (2.7 seconds)
8. **Full coordinates** replace x/y labels (2.4 seconds)
9. **Hold final frame** (2 seconds)
10. **Fade out** for loop (1.5 seconds)

**Total duration:** ~22 seconds per loop

---

## ⚙️ Customization

Edit `scripts/create-unit-circle-animation.py` to modify:

### Change Animation Speed
```python
# Find lines with run_time and adjust:
self.play(Create(circle), run_time=2)  # Change 2 to 1 for faster
```

### Change Colors
```python
circle = Circle(
    radius=2,
    color=PURPLE,  # Change to BLUE, RED, GREEN, etc.
    stroke_width=4
)
```

### Change Font Sizes
```python
label = Tex(f"{deg}°", font_size=28)  # Change 28 to larger/smaller
```

### Skip Zoom Animation
```python
# Comment out or remove the zoom section:
# self.play(
#     plane.animate.scale(2).shift(LEFT * 2 + DOWN * 2),
#     ...
# )
```

---

## 📊 File Sizes

Typical output sizes:
- **MP4 Video:** 1-3 MB
- **Optimized GIF:** 2-5 MB

To reduce GIF size, edit the ffmpeg command:
```bash
# Smaller size (600px wide)
-vf "fps=20,scale=600:-1:flags=lanczos,..."

# Even smaller (400px wide, 20fps)
-vf "fps=20,scale=400:-1:flags=lanczos,..."
```

---

## 🐛 Troubleshooting

### Error: "manimgl: command not found"
**Solution:** Install Manim-GL
```bash
pip3 install manimgl
```

### Error: "ffmpeg: command not found"
**Solution:** Install FFmpeg
```bash
brew install ffmpeg  # macOS
```

### Animation runs but no file created
**Solution:** Check the output directory
```bash
ls -la public/animations/
```

### GIF is too large
**Solution:** Reduce scale or fps in the ffmpeg command
```bash
scale=600:-1  # instead of 800:-1
fps=20        # instead of fps=30
```

### Manim opens in a window but doesn't save
**Solution:** Use the `-w` flag
```bash
manimgl scripts/create-unit-circle-animation.py UnitCircleAnimation -w -o
```

### Colors look wrong in dark mode
**Solution:** The animation is designed to work on both light and dark backgrounds. If needed, you can create two versions:
```python
# Light mode version
background_color = WHITE

# Dark mode version  
background_color = "#1a1a1a"
```

---

## 🎯 Integration with Website

Once generated, the animation is automatically used in Part 3, Section 2 of the Unit Circle lesson.

The component (`UnitCircleAnimation`) will:
1. Try to load `unit-circle-animation.gif`
2. Fall back to placeholder SVG if not found
3. Show generation instructions below the animation

To test it:
```bash
# Start dev server
npm run dev

# Navigate to:
http://localhost:3000/topics/the-unit-circle/interactive?part=3
```

---

## 📚 Resources

- **Manim-GL Documentation:** https://github.com/3b1b/manim
- **Manim Community:** https://www.manim.community/
- **FFmpeg Documentation:** https://ffmpeg.org/documentation.html
- **Animation Examples:** https://github.com/3b1b/manim/tree/master/example_scenes

---

## 🚀 Next Steps

After generating the animation:

1. ✅ Verify it appears in the lesson (Part 3, Section 2)
2. ✅ Test on different screen sizes
3. ✅ Check file size (optimize if > 5MB)
4. ✅ Commit to git:
   ```bash
   git add public/animations/unit-circle-animation.gif
   git commit -m "Add unit circle animation"
   ```
5. ✅ Deploy to production

Enjoy your beautiful mathematical animation! 🎉
