import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Optics Part 2...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const opticsCategory = await prisma.category.upsert({
    where: { slug: 'optics' },
    update: {},
    create: {
      slug: 'optics',
      name: 'Optics',
      description: 'Reflection, refraction, mirrors, lenses, interference, diffraction',
      order: 5,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Found category: Optics')

  // ============================================
  // TOPIC 1: Lenses
  // ============================================
  const lenses = await prisma.topic.upsert({
    where: { slug: 'lenses' },
    update: {},
    create: {
      slug: 'lenses',
      title: 'Lenses',
      description: 'Converging and diverging lenses, thin lens equation, magnification, optical instruments',
      order: 2,
      categoryId: opticsCategory.id,
      isPremium: false,
      textContent: `
# 🔍 Lenses

## Types of Lenses

### Converging (Convex) Lens:
- Thicker in middle
- **Focal length f > 0** (positive)
- Parallel rays converge at focal point
- Can form real or virtual images

### Diverging (Concave) Lens:
- Thinner in middle
- **Focal length f < 0** (negative)
- Parallel rays appear to diverge from focal point
- Always forms virtual, upright, reduced images

**Both sides** of lens have same focal length!

---

## Thin Lens Equation

$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

where:
- $f$ = focal length (+ for converging, - for diverging)
- $d_o$ = object distance (always positive)
- $d_i$ = image distance (+ for real, - for virtual)

**Magnification:**
$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

> **💡 Same equations as mirrors!** But sign conventions differ slightly.

---

## Sign Conventions (Lenses)

| Quantity | Positive | Negative |
|----------|----------|----------|
| $f$ | Converging | Diverging |
| $d_o$ | Real object | (rare) |
| $d_i$ | Real (opposite side) | Virtual (same side as object) |
| $m$ | Upright | Inverted |

**Key difference from mirrors**: Real image on **opposite side** of lens from object!

---

## Ray Diagrams (Converging Lens)

Draw any 2 of these 3 rays:
1. **Parallel ray** → refracts through F on far side
2. **Focal ray** (through F on near side) → refracts parallel
3. **Center ray** (through lens center) → straight through (no bend)

Where rays intersect = image location!

**Cases:**
- $d_o > 2f$: Real, inverted, reduced (cameras)
- $d_o = 2f$: Real, inverted, same size
- $f < d_o < 2f$: Real, inverted, enlarged (projectors)
- $d_o < f$: Virtual, upright, enlarged (magnifying glass!)

---

## Lensmaker's Equation

$$\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$

where:
- n = index of refraction of lens
- $R_1$, $R_2$ = radii of curvature of surfaces

(Not commonly used in AP Physics 2, but good to know!)

---

## Power of Lens

$$P = \\frac{1}{f}$$

Unit: **Diopter (D)** = m⁻¹

**Higher power → shorter f → more bending**

Example: Eyeglass prescription "+2.00 D" means f = 0.50 m

---

## Compound Lens Systems

Two lenses in combination:

**Method 1** (Total power):
$$P_{total} = P_1 + P_2$$

**Method 2** (Step-by-step):
1. Find image from lens 1
2. Use that image as object for lens 2
3. Total magnification: $m_{total} = m_1 \\times m_2$

---

## Optical Instruments

### Magnifying Glass:
- Single converging lens
- Object inside focal length ($d_o < f$)
- Virtual, upright, enlarged image
- Angular magnification: $M = \\frac{25 \\text{ cm}}{f}$

### Compound Microscope:
- **Objective** lens (short f): Forms real, enlarged image
- **Eyepiece** lens: Acts as magnifying glass on that image
- Total magnification: $M = m_o \\times M_e = -\\frac{L}{f_o} \\times \\frac{25}{f_e}$
- Very high magnification (~100-1000×)

### Telescope:
- **Objective** lens (long f): Forms real, reduced image of distant object
- **Eyepiece**: Magnifies that image
- Angular magnification: $M = -\\frac{f_o}{f_e}$
- Larger objective → more light → see fainter objects

### Camera:
- Converging lens
- Object far away ($d_o >> f$), so $d_i \\approx f$
- Real, inverted, reduced image on film/sensor
- Adjustable f (zoom) and aperture (brightness)

### Human Eye:
- Cornea + lens = converging system
- Lens changes shape (accommodation) to focus
- Image on retina (real, inverted, reduced)
- Brain flips it!

**Nearsighted** (myopia): Eyeball too long → use diverging lens
**Farsighted** (hyperopia): Eyeball too short → use converging lens

---

## Aberrations

**Spherical aberration**: Rays at edge focus differently
- Solution: Parabolic lens, smaller aperture

**Chromatic aberration**: Different colors focus at different points
- Solution: Achromatic doublet (two lenses)

---

## Problem-Solving Strategy

1. **Identify lens type**: f > 0 (converging) or f < 0 (diverging)
2. **Use thin lens equation**: $1/f = 1/d_o + 1/d_i$
3. **Find magnification**: $m = -d_i/d_o$
4. **Interpret signs**:
   - $d_i > 0$: Real (opposite side)
   - $d_i < 0$: Virtual (same side)
   - $m < 0$: Inverted
   - $m > 0$: Upright

---

## Common Mistakes

❌ Confusing lens and mirror sign conventions (real image location!)
❌ Forgetting f is negative for diverging lens
❌ Using wrong magnification formula for instruments
❌ Thinking diverging lens can form real image (never!)
❌ Not checking calculator mode (degrees vs radians)
`,
    },
  })

  console.log('✓ Created topic: Lenses')

  // ============================================
  // TOPIC 2: Interference and Diffraction
  // ============================================
  const interferenceDiffraction = await prisma.topic.upsert({
    where: { slug: 'interference-diffraction' },
    update: {},
    create: {
      slug: 'interference-diffraction',
      title: 'Interference and Diffraction',
      description: "Young's double slit, single slit diffraction, diffraction grating, thin film interference",
      order: 3,
      categoryId: opticsCategory.id,
      isPremium: false,
      textContent: `
# 🌈 Interference and Diffraction

## Wave Nature of Light

Light exhibits **wave properties**:
- Interference (constructive and destructive)
- Diffraction (bending around obstacles)
- Polarization

These prove light is a wave!

---

## Young's Double Slit

Two narrow slits illuminated by coherent light:

**Path difference** determines interference:

**Bright fringes** (constructive):
$$d \\sin\\theta = m\\lambda$$

**Dark fringes** (destructive):
$$d \\sin\\theta = \\left(m + \\frac{1}{2}\\right)\\lambda$$

where:
- d = slit separation
- θ = angle from center
- m = order (0, ±1, ±2, ...)
- λ = wavelength

**Small angle approximation** (θ << 1 rad):
$$\\sin\\theta \\approx \\tan\\theta \\approx \\frac{y}{L}$$

**Fringe spacing** on screen:
$$\\Delta y = \\frac{\\lambda L}{d}$$

where L = distance to screen

> **💡 Key**: Smaller slit spacing d → larger fringe spacing Δy!

---

## Conditions for Interference

1. **Coherent sources**: Constant phase relationship
2. **Monochromatic**: Single wavelength (or narrow range)
3. **Similar amplitudes**: For clear pattern

Laser light is ideal!

---

## Single Slit Diffraction

Single wide slit creates **diffraction pattern**:

**Dark fringes**:
$$a \\sin\\theta = m\\lambda$$

where:
- a = slit width
- m = ±1, ±2, ... (NOT zero!)

**Central maximum**: Brightest, twice as wide as other maxima

**Width of central max**:
$$w = \\frac{2\\lambda L}{a}$$

> **💡 Key**: Narrower slit a → wider central maximum!

**Difference from double slit**:
- Double slit: Narrow bright fringes (interference)
- Single slit: Wide central max, dimmer side maxima (diffraction)

---

## Diffraction Grating

Many equally-spaced slits (100s to 1000s per mm):

**Bright fringes** (very sharp!):
$$d \\sin\\theta = m\\lambda$$

where d = spacing between slits

**Advantages:**
- Very sharp, bright lines
- Separates wavelengths well (spectroscopy!)
- Higher orders (larger m) more spread out

**Dispersion**: Different λ at different angles
- Red: longer λ, larger θ
- Violet: shorter λ, smaller θ

**Resolving power**: $R = mN$ (N = number of slits)

---

## Thin Film Interference

Light reflects from top and bottom surfaces of thin film:

**Phase change** on reflection:
- **Fast to slow** (n_low to n_high): 180° = λ/2 shift
- **Slow to fast**: No phase change

**Constructive interference**:
- If ONE reflection has phase change:
$$2t = \\left(m + \\frac{1}{2}\\right)\\lambda_n$$

- If ZERO or TWO reflections have phase change:
$$2t = m\\lambda_n$$

where:
- t = film thickness
- $\\lambda_n = \\lambda/n$ = wavelength in film

**Destructive** is opposite!

**Applications:**
- Soap bubbles (swirling colors)
- Oil slicks on water
- Anti-reflection coatings (destructive for reflection)

---

## Polarization

Light wave with E field oscillating in **one plane only**.

**Unpolarized** → **Polarized**: Use polarizer (absorbs one component)

**Malus's Law**: Intensity through second polarizer
$$I = I_0 \\cos^2\\theta$$

where θ = angle between polarizers

**Crossed polarizers** (θ = 90°): No light passes!

**Ways to polarize:**
1. Polarizing filter
2. Reflection (Brewster's angle)
3. Scattering (why sky is blue and polarized!)

---

## Rayleigh Criterion (Resolution)

Two point sources barely resolved when:

$$\\theta_{min} = 1.22\\frac{\\lambda}{D}$$

where D = aperture diameter

**Smaller θ_min → better resolution**
- Larger aperture (telescope!) → better
- Shorter wavelength (blue light) → better

---

## Problem-Solving Strategy

**Double Slit:**
1. Bright: $d \\sin\\theta = m\\lambda$
2. Use small angle: $\\sin\\theta \\approx y/L$
3. Fringe spacing: $\\Delta y = \\lambda L/d$

**Single Slit:**
1. Dark: $a \\sin\\theta = m\\lambda$ (m ≠ 0)
2. Central max width: $w = 2\\lambda L/a$

**Thin Film:**
1. Count phase changes (reflections)
2. Use $\\lambda_n = \\lambda/n$ in film
3. Path difference = 2t
4. Add/subtract λ/2 for phase changes

---

## Common Mistakes

❌ Confusing d (slit separation) with a (slit width)
❌ Using m = 0 for single slit dark fringe (m starts at ±1!)
❌ Forgetting λ_n = λ/n in thin films
❌ Not accounting for phase change on reflection
❌ Wrong units (nm vs m, degrees vs radians)
❌ Thinking larger slit spacing → larger fringe spacing (opposite!)
`,
    },
  })

  console.log('✓ Created topic: Interference and Diffraction')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: lenses.id,
        question: 'A converging lens with focal length 15 cm is used to form an image of an object 30 cm away. Find (a) image distance, (b) magnification, (c) describe image.',
        solution: `**Given:**
- Focal length: $f = 15$ cm (positive, converging)
- Object distance: $d_o = 30$ cm

**Part (a):** Image distance

Thin lens equation:
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$
$$\\frac{1}{15} = \\frac{1}{30} + \\frac{1}{d_i}$$
$$\\frac{1}{d_i} = \\frac{1}{15} - \\frac{1}{30} = \\frac{2-1}{30} = \\frac{1}{30}$$
$$d_i = 30 \\text{ cm}$$

**Part (b):** Magnification

$$m = -\\frac{d_i}{d_o} = -\\frac{30}{30} = -1.0$$

**Part (c):** Image description

- $d_i > 0$: **Real** (opposite side of lens)
- $m < 0$: **Inverted**
- $|m| = 1$: **Same size** as object
- Note: Object is at 2f, image also at 2f!

**Answer:**
- **(a)** d_i = **30 cm** (opposite side)
- **(b)** m = **-1.0**
- **(c)** Real, inverted, same size`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: lenses.id,
        question: 'A diverging lens has focal length -20 cm. An object is placed 40 cm from the lens. Find the image distance and magnification.',
        solution: `**Given:**
- Focal length: $f = -20$ cm (negative, diverging)
- Object distance: $d_o = 40$ cm

**Solution:**

Thin lens equation:
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$
$$\\frac{1}{-20} = \\frac{1}{40} + \\frac{1}{d_i}$$
$$\\frac{1}{d_i} = -\\frac{1}{20} - \\frac{1}{40} = \\frac{-2-1}{40} = -\\frac{3}{40}$$
$$d_i = -\\frac{40}{3} = -13.3 \\text{ cm}$$

Magnification:
$$m = -\\frac{d_i}{d_o} = -\\frac{(-13.3)}{40} = +0.33$$

**Image description:**
- $d_i < 0$: **Virtual** (same side as object)
- $m > 0$: **Upright**
- $|m| < 1$: **Reduced** (1/3 size)

**Answer:**
- d_i = **-13.3 cm** (same side, virtual)
- m = **+0.33** (upright, reduced)

Note: Diverging lenses ALWAYS produce virtual, upright, reduced images!`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: lenses.id,
        question: 'A converging lens with f = 10 cm is used as a magnifying glass. An object is placed 6 cm from the lens. Find the magnification.',
        solution: `**Given:**
- Focal length: $f = 10$ cm
- Object distance: $d_o = 6$ cm

**Note**: Object is inside focal length ($d_o < f$) - magnifying glass configuration!

**Solution:**

Find image distance:
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$
$$\\frac{1}{10} = \\frac{1}{6} + \\frac{1}{d_i}$$
$$\\frac{1}{d_i} = \\frac{1}{10} - \\frac{1}{6} = \\frac{3-5}{30} = -\\frac{2}{30} = -\\frac{1}{15}$$
$$d_i = -15 \\text{ cm}$$

Magnification:
$$m = -\\frac{d_i}{d_o} = -\\frac{(-15)}{6} = +2.5$$

**Image description:**
- $d_i < 0$: **Virtual** (same side as object)
- $m > 0$: **Upright**
- $|m| > 1$: **Enlarged** (2.5× larger!)

**Answer:** m = **+2.5** (virtual, upright, enlarged)

This is why magnifying glasses work - object inside f gives enlarged virtual image!`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
      {
        topicId: interferenceDiffraction.id,
        question: 'In a double slit experiment with 550 nm light, slits are 0.20 mm apart, and screen is 2.0 m away. What is the spacing between bright fringes?',
        solution: `**Given:**
- Wavelength: $\\lambda = 550$ nm $= 5.5 \\times 10^{-7}$ m
- Slit separation: $d = 0.20$ mm $= 2.0 \\times 10^{-4}$ m
- Screen distance: $L = 2.0$ m

**Solution:**

Fringe spacing:
$$\\Delta y = \\frac{\\lambda L}{d} = \\frac{(5.5 \\times 10^{-7})(2.0)}{2.0 \\times 10^{-4}}$$
$$\\Delta y = \\frac{1.1 \\times 10^{-6}}{2.0 \\times 10^{-4}} = 5.5 \\times 10^{-3} \\text{ m}$$
$$\\Delta y = 5.5 \\text{ mm}$$

**Answer:** Fringe spacing = **5.5 mm**

Bright fringes are 5.5 mm apart on the screen.`,
        difficulty: Difficulty.EASY,
        order: 3,
        isPremium: false,
      },
      {
        topicId: interferenceDiffraction.id,
        question: 'A single slit of width 0.050 mm produces a diffraction pattern with 600 nm light on a screen 1.5 m away. What is the width of the central bright maximum?',
        solution: `**Given:**
- Slit width: $a = 0.050$ mm $= 5.0 \\times 10^{-5}$ m
- Wavelength: $\\lambda = 600$ nm $= 6.0 \\times 10^{-7}$ m
- Screen distance: $L = 1.5$ m

**Solution:**

Width of central maximum:
$$w = \\frac{2\\lambda L}{a} = \\frac{2(6.0 \\times 10^{-7})(1.5)}{5.0 \\times 10^{-5}}$$
$$w = \\frac{1.8 \\times 10^{-6}}{5.0 \\times 10^{-5}} = 0.036 \\text{ m}$$
$$w = 36 \\text{ mm} = 3.6 \\text{ cm}$$

**Answer:** Central maximum width = **3.6 cm**

This is the distance between the first dark fringes on either side of center.`,
        difficulty: Difficulty.MEDIUM,
        order: 4,
        isPremium: false,
      },
      {
        topicId: interferenceDiffraction.id,
        question: 'A soap film (n = 1.33) is 450 nm thick. What wavelength of visible light (in air) is most strongly reflected? Assume normal incidence.',
        solution: `**Given:**
- Film index: $n = 1.33$
- Thickness: $t = 450$ nm
- Air on both sides (n = 1.00)

**Solution:**

Step 1: Count phase changes.
- Top surface: air (1.00) → film (1.33) = **phase change** (λ/2)
- Bottom surface: film (1.33) → air (1.00) = no phase change

**One phase change total**

Step 2: Constructive interference (for ONE phase change):
$$2t = \\left(m + \\frac{1}{2}\\right)\\lambda_n = \\left(m + \\frac{1}{2}\\right)\\frac{\\lambda}{n}$$
$$\\lambda = \\frac{2tn}{m + 1/2}$$

Step 3: Try m = 0, 1, 2... to find visible wavelength (400-700 nm)

$m = 0$:
$$\\lambda = \\frac{2(450)(1.33)}{0.5} = 2394 \\text{ nm}$$ (infrared, too long)

$m = 1$:
$$\\lambda = \\frac{2(450)(1.33)}{1.5} = 798 \\text{ nm}$$ (infrared, too long)

$m = 2$:
$$\\lambda = \\frac{2(450)(1.33)}{2.5} = 479 \\text{ nm}$$ (blue-green, visible!) ✓

**Answer:** λ = **479 nm** (blue-green light)

This is why soap bubbles appear colored!`,
        difficulty: Difficulty.HARD,
        order: 5,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: lenses.id,
        front: 'Compare converging and diverging lenses.',
        back: 'Converging (convex): thick middle, f>0, parallel rays converge, can form real/virtual. Diverging (concave): thin middle, f<0, parallel rays diverge, always virtual/upright/reduced.',
      },
      {
        topicId: lenses.id,
        front: 'State the thin lens equation and magnification formula.',
        back: '1/f = 1/d_o + 1/d_i. m = -d_i/d_o. f>0 converging, f<0 diverging. d_i>0 real (opposite side), d_i<0 virtual (same side). m<0 inverted, m>0 upright.',
      },
      {
        topicId: lenses.id,
        front: 'What is the power of a lens?',
        back: 'P = 1/f (unit: Diopter, D = m⁻¹). Higher power → shorter f → more bending. Eyeglass "+2.00 D" means f = 0.50 m (converging).',
      },
      {
        topicId: lenses.id,
        front: 'How does a magnifying glass work?',
        back: 'Converging lens with object inside focal length (d_o < f). Produces virtual, upright, enlarged image on same side as object. Angular magnification M = 25cm/f.',
      },
      {
        topicId: lenses.id,
        front: 'How does a compound microscope work?',
        back: 'Objective (short f): real enlarged image. Eyepiece: magnifies that image like magnifying glass. Total M = m_o × M_e = -(L/f_o)(25/f_e). Very high magnification (~100-1000×).',
      },
      {
        topicId: lenses.id,
        front: 'What type of lens corrects nearsightedness? Farsightedness?',
        back: 'Nearsighted (myopia, eyeball too long): diverging lens. Farsighted (hyperopia, eyeball too short): converging lens. Lenses move focal point to retina.',
      },
      {
        topicId: lenses.id,
        front: 'What causes chromatic aberration?',
        back: 'Different colors (wavelengths) have different n → different f → focus at different points. Violet bends more (shorter f), red less. Solution: achromatic doublet (two lenses).',
      },
      {
        topicId: lenses.id,
        front: 'Where is image located for converging lens with object at different positions?',
        back: 'd_o > 2f: real/inverted/reduced (camera). d_o = 2f: real/inverted/same. f < d_o < 2f: real/inverted/enlarged (projector). d_o < f: virtual/upright/enlarged (magnifier).',
      },
      {
        topicId: interferenceDiffraction.id,
        front: "What is the condition for bright fringes in Young's double slit?",
        back: 'd sinθ = mλ (m = 0, ±1, ±2...). Dark: d sinθ = (m+1/2)λ. Fringe spacing Δy = λL/d. Smaller slit spacing d → larger fringe spacing!',
      },
      {
        topicId: interferenceDiffraction.id,
        front: 'What is the condition for dark fringes in single slit diffraction?',
        back: 'a sinθ = mλ (m = ±1, ±2..., NOT zero!). a = slit width. Central max width: w = 2λL/a. Narrower slit → wider central maximum.',
      },
      {
        topicId: interferenceDiffraction.id,
        front: 'How does a diffraction grating work?',
        back: 'Many equally-spaced slits. Bright: d sinθ = mλ. Very sharp lines, good for spectroscopy. Red: longer λ, larger θ. Resolving power R = mN.',
      },
      {
        topicId: interferenceDiffraction.id,
        front: 'When does phase change occur in thin film interference?',
        back: 'Reflection from fast→slow medium (n_low→n_high): 180° = λ/2 shift. Slow→fast: no shift. Count shifts from BOTH surfaces. Use λ_n = λ/n in film. Path diff = 2t.',
      },
      {
        topicId: interferenceDiffraction.id,
        front: "State Malus's Law for polarization.",
        back: 'I = I₀cos²θ, where θ = angle between polarizers. Crossed polarizers (θ=90°): I=0, no light. Aligned (θ=0°): I=I₀, maximum.',
      },
      {
        topicId: interferenceDiffraction.id,
        front: 'What is the Rayleigh criterion for resolution?',
        back: 'θ_min = 1.22λ/D, where D = aperture diameter. Better resolution: larger aperture (bigger telescope) or shorter wavelength. Two sources barely resolved at this angle.',
      },
      {
        topicId: interferenceDiffraction.id,
        front: 'Why does thin film interference create colors?',
        back: 'Path difference 2t + phase changes → constructive for some λ, destructive for others. Different wavelengths (colors) interfere differently. Soap bubbles, oil slicks show swirling colors.',
      },
      {
        topicId: interferenceDiffraction.id,
        front: 'What are three ways to polarize light?',
        back: '1) Polarizing filter (absorbs one component) 2) Reflection at Brewster\'s angle 3) Scattering (why sky is blue and polarized). Unpolarized has E oscillating in all directions.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Lenses')
  console.log('✓ Created 8 flashcards for Interference and Diffraction')

  console.log('\n✅ Successfully seeded AP Physics 2 - Optics Part 2!')
  console.log('   Topics: 2')
  console.log('   Examples: 6')
  console.log('   Flashcards: 16')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
