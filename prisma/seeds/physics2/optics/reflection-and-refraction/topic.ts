import '../../../../../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

/**
 * Creates the Reflection and Refraction topic with lesson content and example problems.
 * Run flashcard seed files separately for each part.
 */
export async function seedReflectionRefractionTopic() {
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

  const reflectionRefraction = await prisma.topic.upsert({
    where: { slug: 'reflection-refraction' },
    update: {},
    create: {
      slug: 'reflection-refraction',
      title: 'Reflection and Refraction',
      description: "Law of reflection, Snell's law, total internal reflection, dispersion, mirrors",
      order: 1,
      categoryId: opticsCategory.id,
      isPremium: false,
      textContent: `
# 🔆 Reflection and Refraction

## Nature of Light

Light is an **electromagnetic wave**:
- Electric and magnetic fields oscillate perpendicular to propagation
- Travels at $c = 3.0 \\times 10^8$ m/s in vacuum
- Also exhibits particle properties (photons) - wave-particle duality!

**Wavelength** $\\lambda$ and **frequency** $f$:
$$c = \\lambda f$$

**Visible spectrum**: 400 nm (violet) to 700 nm (red)

---

## Law of Reflection

When light reflects from smooth surface:

$$\\theta_i = \\theta_r$$

**Angle of incidence = Angle of reflection**

Angles measured from **normal** (perpendicular to surface).

**Specular reflection**: Smooth surface (mirror) - parallel rays stay parallel
**Diffuse reflection**: Rough surface - parallel rays scatter

---

## Plane Mirrors

Image characteristics:
- **Virtual**: Behind mirror (light doesn't actually go there)
- **Upright**: Same orientation as object
- **Same size**: $h_i = h_o$
- **Same distance**: $d_i = d_o$ (but behind mirror)

**Lateral inversion**: Left and right reversed (but not up/down!)

---

## Index of Refraction

Speed of light in a material:
$$v = \\frac{c}{n}$$

where **n** is **index of refraction** (n ≥ 1, dimensionless)

Common values:
- Vacuum: n = 1 (exactly)
- Air: n ≈ 1.0003 ≈ 1
- Water: n = 1.33
- Glass: n ≈ 1.5
- Diamond: n = 2.42

**Higher n → slower light → more bending**

---

## Snell's Law

When light crosses boundary between media:

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$

where:
- $n_1$, $\\theta_1$ = index and angle in medium 1
- $n_2$, $\\theta_2$ = index and angle in medium 2

**Angles from normal to surface!**

### Light entering denser medium (n₂ > n₁):
- Bends **toward normal** (θ₂ < θ₁)
- Speed decreases, wavelength decreases
- Frequency stays same!

### Light entering less dense medium (n₂ < n₁):
- Bends **away from normal** (θ₂ > θ₁)
- Speed increases, wavelength increases

> **💡 Mnemonic**: Fast → Slow: toward normal. Slow → Fast: away from normal.

---

## Total Internal Reflection

When light goes from **denser to less dense** (n₁ > n₂):

If θ₁ > θ_c (critical angle), light reflects completely back!

**Critical angle:**
$$\\sin\\theta_c = \\frac{n_2}{n_1}$$

(Only exists when n₁ > n₂)

**Applications:**
- Fiber optics (light trapped inside fiber)
- Diamonds sparkle (n = 2.42 → small θ_c → lots of TIR)
- Prisms in binoculars

For water-air (n₁ = 1.33, n₂ = 1):
$$\\theta_c = \\sin^{-1}(1/1.33) = 48.6°$$

---

## Dispersion

**Different wavelengths have different n** (for same material)!

White light → prism → **spectrum** (ROYGBIV)

- Violet: higher n → bends more
- Red: lower n → bends less

**Rainbow**: Water droplets act as prisms
1. Refraction entering drop (dispersion)
2. Reflection inside drop
3. Refraction exiting drop (more dispersion)

---

## Curved Mirrors

### Concave Mirror (converging):
- Parallel rays converge at **focal point**
- Focal length: $f = R/2$ (R = radius of curvature)
- Can form real or virtual images

### Convex Mirror (diverging):
- Parallel rays appear to diverge from focal point **behind** mirror
- $f$ is negative
- Always forms virtual, upright, reduced images

---

## Mirror Equation

$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$

where:
- $f$ = focal length
- $d_o$ = object distance (positive)
- $d_i$ = image distance (positive if real, negative if virtual)

**Magnification:**
$$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$$

- $m > 0$: upright image
- $m < 0$: inverted image
- $|m| > 1$: enlarged
- $|m| < 1$: reduced

---

## Sign Conventions (Mirrors)

| Quantity | Positive | Negative |
|----------|----------|----------|
| $f$ | Concave | Convex |
| $d_o$ | Real object | (rare) |
| $d_i$ | Real image (front) | Virtual image (behind) |
| $m$ | Upright | Inverted |

---

## Ray Diagrams (Concave Mirror)

Draw any 2 of these 3 rays:
1. **Parallel ray** → reflects through F
2. **Focal ray** (through F) → reflects parallel
3. **Center ray** (through C) → reflects back on itself

Where rays intersect = image location!

---

## Problem-Solving Strategy

**Snell's Law:**
1. Draw diagram with normal
2. Identify n₁, θ₁, n₂
3. Apply: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$
4. Check for TIR if going to less dense medium

**Mirrors:**
1. Identify f (positive for concave, negative for convex)
2. Use mirror equation: $1/f = 1/d_o + 1/d_i$
3. Find magnification: $m = -d_i/d_o$
4. Interpret signs

---

## Common Mistakes

❌ Measuring angles from surface instead of normal
❌ Forgetting to check for total internal reflection
❌ Wrong sign for f (convex mirrors have negative f!)
❌ Confusing d_i sign (positive = real/front, negative = virtual/behind)
❌ Thinking frequency changes during refraction (only v and λ change!)
❌ Using degrees instead of checking calculator mode
`,
    },
  })

  console.log('✓ Created topic: Reflection and Refraction')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: reflectionRefraction.id,
        question: 'Light travels from air (n = 1.00) into water (n = 1.33) at an angle of 30° from the normal. What is the angle of refraction?',
        solution: `**Given:**
- Medium 1 (air): $n_1 = 1.00$
- Medium 2 (water): $n_2 = 1.33$
- Incident angle: $\\theta_1 = 30°$

**Solution:**

Apply Snell's Law:
$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$
$$(1.00)\\sin(30°) = (1.33)\\sin\\theta_2$$
$$0.50 = 1.33 \\sin\\theta_2$$
$$\\sin\\theta_2 = \\frac{0.50}{1.33} = 0.376$$
$$\\theta_2 = \\sin^{-1}(0.376) = 22.1°$$

**Check**: Entering denser medium (n₂ > n₁), so bends toward normal. ✓
θ₂ = 22.1° < θ₁ = 30° ✓

**Answer:** θ₂ = **22.1°** (bends toward normal)`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: reflectionRefraction.id,
        question: 'What is the critical angle for light going from glass (n = 1.50) to air (n = 1.00)? What happens at 45° incidence?',
        solution: `**Given:**
- Medium 1 (glass): $n_1 = 1.50$
- Medium 2 (air): $n_2 = 1.00$

**Part 1:** Critical angle

$$\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1.00}{1.50} = 0.667$$
$$\\theta_c = \\sin^{-1}(0.667) = 41.8°$$

**Part 2:** At 45° incidence

Since $45° > \\theta_c = 41.8°$, we have **total internal reflection**!

Light reflects completely back into glass. No refraction into air.

**Answer:**
- Critical angle: **θ_c = 41.8°**
- At 45°: **Total internal reflection** (no light exits to air)

This is why fiber optic cables work - light trapped inside!`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: reflectionRefraction.id,
        question: 'A concave mirror has focal length 20 cm. An object is placed 60 cm from the mirror. Find (a) image distance, (b) magnification, (c) describe the image.',
        solution: `**Given:**
- Focal length: $f = 20$ cm (positive for concave)
- Object distance: $d_o = 60$ cm

**Part (a):** Image distance

Mirror equation:
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$$
$$\\frac{1}{20} = \\frac{1}{60} + \\frac{1}{d_i}$$
$$\\frac{1}{d_i} = \\frac{1}{20} - \\frac{1}{60} = \\frac{3-1}{60} = \\frac{2}{60} = \\frac{1}{30}$$
$$d_i = 30 \\text{ cm}$$

**Part (b):** Magnification

$$m = -\\frac{d_i}{d_o} = -\\frac{30}{60} = -0.50$$

**Part (c):** Image description

- $d_i > 0$: **Real** image (in front of mirror)
- $m < 0$: **Inverted**
- $|m| < 1$: **Reduced** (half size)
- Located 30 cm in front of mirror

**Answer:**
- **(a)** d_i = **30 cm** (in front)
- **(b)** m = **-0.50**
- **(c)** Real, inverted, reduced to half size`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  console.log('✓ Created 3 example problems')

  return reflectionRefraction
}

// Run standalone if executed directly
if (require.main === module) {
  seedReflectionRefractionTopic()
    .then(() => {
      console.log('\n✅ Successfully seeded Reflection and Refraction topic!')
    })
    .catch((e) => {
      console.error('Error seeding:', e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
