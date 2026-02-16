import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 1 - Circular Motion Part 2 (Gravitation)...')

  // Find the Circular Motion & Gravitation category
  const circularCategory = await prisma.category.findUnique({
    where: { slug: 'circular-motion-gravitation' },
  })

  if (!circularCategory) {
    throw new Error('Circular Motion & Gravitation category not found')
  }

  // ============================================
  // TOPIC 3: Newton's Law of Universal Gravitation
  // ============================================
  const universalGravitation = await prisma.topic.upsert({
    where: { slug: 'universal-gravitation' },
    update: {},
    create: {
      slug: 'universal-gravitation',
      title: 'Newton\'s Law of Universal Gravitation',
      description: 'Gravitational force between masses and gravitational fields',
      order: 3,
      categoryId: circularCategory.id,
      isPremium: false,
      textContent: `
# 🌍 Newton's Law of Universal Gravitation

## The Universal Law

Every object in the universe attracts every other object with a gravitational force. Newton's Law of Universal Gravitation describes this attraction:

$$F_g = G\\frac{m_1 m_2}{r^2}$$

where:
- $F_g$ = gravitational force (N)
- $G$ = universal gravitational constant = $6.67 \\times 10^{-11}$ N·m²/kg²
- $m_1, m_2$ = masses of the two objects (kg)
- $r$ = distance between the centers of the masses (m)

> **💡 Key Insight**: Gravity acts between ALL objects, but we only notice it for very massive objects (like planets) because $G$ is extremely small!

---

## Characteristics of Gravitational Force

### 1. Always Attractive
Unlike electric force (which can attract or repel), gravitational force is **always attractive**.

### 2. Action-Reaction Pairs
By Newton's 3rd Law, the force Earth exerts on you equals the force you exert on Earth:

$$F_{Earth \\to you} = F_{you \\to Earth}$$

Both have magnitude $\\frac{Gm_{Earth}m_{you}}{r^2}$

### 3. Inverse Square Law
Force is inversely proportional to $r^2$:
- If distance doubles, force becomes $\\frac{1}{4}$ as strong
- If distance triples, force becomes $\\frac{1}{9}$ as strong

### 4. Long Range
Gravity has infinite range (never becomes exactly zero), though it becomes negligibly small at large distances.

---

## Gravitational Field

The **gravitational field** $g$ at a point is the gravitational force per unit mass:

$$g = \\frac{F_g}{m} = \\frac{GM}{r^2}$$

where $M$ is the mass creating the field and $r$ is the distance from its center.

### At Earth's Surface

$$g = \\frac{GM_{Earth}}{R_{Earth}^2} = 9.8 \\text{ m/s}^2$$

where:
- $M_{Earth} = 5.97 \\times 10^{24}$ kg
- $R_{Earth} = 6.37 \\times 10^6$ m

### Above Earth's Surface

At height $h$ above Earth's surface:

$$g_h = \\frac{GM_{Earth}}{(R_{Earth} + h)^2}$$

As altitude increases, $g$ decreases.

**Example**: At the altitude of the International Space Station (~400 km):

$$g_{ISS} \\approx 8.7 \\text{ m/s}^2$$

(About 89% of surface gravity - astronauts aren't "weightless" due to zero gravity, but due to free fall!)

---

## Weight vs. Mass

### Mass
- **Definition**: Amount of matter in an object
- **Property**: Intrinsic to the object
- **Units**: kg
- **Changes?**: Never changes

### Weight
- **Definition**: Gravitational force on an object: $W = mg$
- **Property**: Depends on location
- **Units**: N (newtons)
- **Changes?**: Yes! Different on Moon, Mars, in orbit, etc.

**Example**: A 70 kg person
- **Mass**: 70 kg (everywhere)
- **Weight on Earth**: $W = 70 \\times 9.8 = 686$ N
- **Weight on Moon**: $W = 70 \\times 1.6 = 112$ N (Moon's $g \\approx 1.6$ m/s²)

---

## Gravitational Force Inside vs. Outside

### Outside a Uniform Sphere
Use the distance from the **center** of the sphere:

$$F = \\frac{GMm}{r^2}$$

This applies to any point outside the sphere (including at the surface).

### Inside a Uniform Sphere
Only the mass **inside** radius $r$ contributes to the force. The shell of mass outside $r$ has zero net effect!

$$F = \\frac{GM_{inside}m}{r^2}$$

For a uniform sphere:
$$M_{inside} = M\\frac{r^3}{R^3}$$

So: $$F = \\frac{GMm}{R^3}r$$

The force is **proportional to $r$** inside a uniform sphere (increases linearly from zero at center).

---

## Orbital Motion

When gravitational force provides the centripetal force, objects orbit!

### Circular Orbits

Set gravitational force equal to required centripetal force:

$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

Simplify (mass $m$ cancels):

$$\\frac{GM}{r} = v^2$$

$$v = \\sqrt{\\frac{GM}{r}}$$

### Orbital Speed
The orbital speed is **independent of the satellite's mass** and depends only on:
- The mass of the central body ($M$)
- The orbital radius ($r$)

**Important**: Closer orbits are faster! (Smaller $r$ means larger $v$)

### Orbital Period

Using $v = \\frac{2\\pi r}{T}$:

$$\\frac{2\\pi r}{T} = \\sqrt{\\frac{GM}{r}}$$

$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

**Kepler's 3rd Law**: $T^2 \\propto r^3$

---

## Escape Velocity

The **escape velocity** is the minimum speed needed to escape a planet's gravitational pull:

$$v_{esc} = \\sqrt{\\frac{2GM}{R}}$$

For Earth: $v_{esc} \\approx 11,200$ m/s (about 25,000 mph!)

> **Note**: This is $\\sqrt{2}$ times the orbital velocity at the surface.

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting r²
❌ **Wrong**: $F_g = \\frac{Gm_1m_2}{r}$
✅ **Right**: $F_g = \\frac{Gm_1m_2}{r^2}$

### Mistake 2: Using Surface Distance for Satellites
❌ **Wrong**: Using Earth's radius for a satellite 1000 km up
✅ **Right**: Use $r = R_{Earth} + h = 6370 + 1000 = 7370$ km

### Mistake 3: Confusing Weight and Mass
❌ **Wrong**: "I'm weightless in space, so my mass is zero"
✅ **Right**: Mass is constant; weight is $mg$ where $g$ varies with location

### Mistake 4: Thinking Gravity Stops
❌ **Wrong**: "There's no gravity in space"
✅ **Right**: Gravity extends infinitely (though it weakens with distance). Astronauts feel "weightless" because they're in free fall, not because gravity is absent.

---

## Problem-Solving Strategy

1. **Identify the masses** and the distance between their **centers**
2. **Use** $F_g = \\frac{Gm_1m_2}{r^2}$ for gravitational force
3. **For orbits**, set $F_g = F_c$: $\\frac{GMm}{r^2} = \\frac{mv^2}{r}$
4. **Remember** the satellite's mass cancels in orbital calculations
5. **Check** if distance is from center or from surface (add radius if needed)

---

## Real-World Applications

### GPS Satellites
- Orbit at ~20,200 km altitude
- Must account for weaker gravity (slower time due to general relativity)
- Orbital period ~12 hours

### Geostationary Satellites
- Orbit at ~35,800 km altitude
- Period = 24 hours (matches Earth's rotation)
- Appear stationary above a point on equator

### Tides
- Moon's gravity creates tidal bulges
- Differential force (near side vs. far side) causes tides
- Sun also contributes (spring and neap tides)

---

## Key Formulas Summary

| Formula | Description |
|---------|-------------|
| $F_g = \\frac{Gm_1m_2}{r^2}$ | Gravitational force between masses |
| $g = \\frac{GM}{r^2}$ | Gravitational field strength |
| $W = mg$ | Weight of object |
| $v_{orbit} = \\sqrt{\\frac{GM}{r}}$ | Orbital speed |
| $T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ | Orbital period |
| $v_{esc} = \\sqrt{\\frac{2GM}{R}}$ | Escape velocity |

**Constants:**
- $G = 6.67 \\times 10^{-11}$ N·m²/kg²
- $M_{Earth} = 5.97 \\times 10^{24}$ kg
- $R_{Earth} = 6.37 \\times 10^6$ m
`,
      exampleProblems: {
        create: [
          {
            question: 'Calculate the gravitational force between Earth (mass = $5.97 \\times 10^{24}$ kg) and the Moon (mass = $7.35 \\times 10^{22}$ kg) when they are $3.84 \\times 10^8$ m apart.',
            solution: `**Given Information:**
- Earth's mass: $M_E = 5.97 \\times 10^{24}$ kg
- Moon's mass: $M_M = 7.35 \\times 10^{22}$ kg
- Distance: $r = 3.84 \\times 10^8$ m
- Gravitational constant: $G = 6.67 \\times 10^{-11}$ N·m²/kg²

---

**Find:** Gravitational force $F_g$

---

**Solution:**

Use Newton's Law of Universal Gravitation:

$$F_g = G\\frac{m_1 m_2}{r^2}$$

Substitute values:

$$F_g = (6.67 \\times 10^{-11})\\frac{(5.97 \\times 10^{24})(7.35 \\times 10^{22})}{(3.84 \\times 10^8)^2}$$

Calculate the numerator:
$$6.67 \\times 5.97 \\times 7.35 = 292.6$$
$$10^{-11} \\times 10^{24} \\times 10^{22} = 10^{35}$$
$$\\text{Numerator} = 292.6 \\times 10^{35} = 2.926 \\times 10^{37}$$

Calculate the denominator:
$$(3.84)^2 = 14.75$$
$$(10^8)^2 = 10^{16}$$
$$\\text{Denominator} = 14.75 \\times 10^{16} = 1.475 \\times 10^{17}$$

Divide:
$$F_g = \\frac{2.926 \\times 10^{37}}{1.475 \\times 10^{17}}$$

$$F_g = 1.98 \\times 10^{20} \\text{ N}$$

---

**Answer**: The gravitational force is approximately **$1.98 \\times 10^{20}$ N** (or 198 billion billion newtons).

> **Note**: By Newton's 3rd Law, this is both the force Earth exerts on the Moon AND the force the Moon exerts on Earth!`,
            difficulty: Difficulty.EASY,
            order: 1,
          },
          {
            question: 'The International Space Station orbits at an altitude of 400 km above Earth\'s surface. Calculate (a) the gravitational field strength at that altitude, and (b) the orbital speed of the ISS.',
            solution: `**Given Information:**
- Altitude: $h = 400$ km = $4.0 \\times 10^5$ m
- Earth's mass: $M_E = 5.97 \\times 10^{24}$ kg
- Earth's radius: $R_E = 6.37 \\times 10^6$ m
- $G = 6.67 \\times 10^{-11}$ N·m²/kg²

---

**(a) Find gravitational field strength $g$ at altitude $h$**

---

**Step 1: Find the distance from Earth's center**

$$r = R_E + h = 6.37 \\times 10^6 + 4.0 \\times 10^5$$

$$r = 6.77 \\times 10^6 \\text{ m}$$

---

**Step 2: Calculate gravitational field**

$$g = \\frac{GM_E}{r^2}$$

$$g = \\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{(6.77 \\times 10^6)^2}$$

Numerator:
$$6.67 \\times 5.97 \\times 10^{13} = 3.98 \\times 10^{14}$$

Denominator:
$$(6.77)^2 \\times 10^{12} = 45.8 \\times 10^{12} = 4.58 \\times 10^{13}$$

$$g = \\frac{3.98 \\times 10^{14}}{4.58 \\times 10^{13}} = 8.69 \\text{ m/s}^2$$

---

**(b) Find orbital speed $v$**

---

**Step 3: Set gravitational force = centripetal force**

$$\\frac{GM_E m}{r^2} = \\frac{mv^2}{r}$$

The mass $m$ cancels:

$$\\frac{GM_E}{r} = v^2$$

$$v = \\sqrt{\\frac{GM_E}{r}}$$

---

**Step 4: Calculate**

$$v = \\sqrt{\\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{6.77 \\times 10^6}}$$

$$v = \\sqrt{\\frac{3.98 \\times 10^{14}}{6.77 \\times 10^6}}$$

$$v = \\sqrt{5.88 \\times 10^7}$$

$$v = 7.67 \\times 10^3 \\text{ m/s} = 7670 \\text{ m/s}$$

---

**Alternative for part (b):**

Since $g = \\frac{GM_E}{r^2}$, we have $GM_E = gr^2$

$$v = \\sqrt{\\frac{GM_E}{r}} = \\sqrt{gr}$$

$$v = \\sqrt{(8.69)(6.77 \\times 10^6)}$$

$$v = \\sqrt{5.88 \\times 10^7} = 7670 \\text{ m/s}$$

---

**Answers**: 
- (a) $g \\approx$ **8.69 m/s²** (about 89% of surface gravity)
- (b) Orbital speed $\\approx$ **7670 m/s** (about 17,000 mph!)

> **Note**: Despite $g$ being nearly the same as on Earth's surface, astronauts feel "weightless" because both they and the ISS are in free fall toward Earth!`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'A satellite is in a circular orbit around Earth with a period of 24 hours (a geostationary orbit). Calculate: (a) the orbital radius, (b) the altitude above Earth\'s surface, and (c) the orbital speed.',
            solution: `**Given Information:**
- Period: $T = 24$ hours = $86,400$ s
- Earth's mass: $M_E = 5.97 \\times 10^{24}$ kg
- Earth's radius: $R_E = 6.37 \\times 10^6$ m
- $G = 6.67 \\times 10^{-11}$ N·m²/kg²

---

**(a) Find orbital radius $r$**

---

**Step 1: Use the period formula**

$$T = 2\\pi\\sqrt{\\frac{r^3}{GM_E}}$$

---

**Step 2: Solve for $r$**

Square both sides:
$$T^2 = 4\\pi^2\\frac{r^3}{GM_E}$$

$$r^3 = \\frac{GM_E T^2}{4\\pi^2}$$

$$r = \\left(\\frac{GM_E T^2}{4\\pi^2}\\right)^{1/3}$$

---

**Step 3: Calculate**

Numerator:
$$GM_E T^2 = (6.67 \\times 10^{-11})(5.97 \\times 10^{24})(86400)^2$$

$$= (6.67)(5.97)(86400)^2 \\times 10^{13}$$

$$= (6.67)(5.97)(7.464 \\times 10^9) \\times 10^{13}$$

$$= 297.3 \\times 10^{22} = 2.973 \\times 10^{24}$$

Denominator:
$$4\\pi^2 = 39.48$$

$$r^3 = \\frac{2.973 \\times 10^{24}}{39.48} = 7.53 \\times 10^{22}$$

$$r = (7.53 \\times 10^{22})^{1/3}$$

Using calculator or estimation:
$$r \\approx 4.22 \\times 10^7 \\text{ m}$$

---

**(b) Find altitude $h$ above Earth's surface**

---

$$h = r - R_E$$

$$h = 4.22 \\times 10^7 - 6.37 \\times 10^6$$

$$h = 4.22 \\times 10^7 - 0.637 \\times 10^7$$

$$h = 3.58 \\times 10^7 \\text{ m} = 35,800 \\text{ km}$$

---

**(c) Find orbital speed $v$**

---

**Method 1: Using $v = \\frac{2\\pi r}{T}$**

$$v = \\frac{2\\pi (4.22 \\times 10^7)}{86400}$$

$$v = \\frac{2.65 \\times 10^8}{8.64 \\times 10^4}$$

$$v = 3.07 \\times 10^3 \\text{ m/s} = 3070 \\text{ m/s}$$

---

**Method 2: Using $v = \\sqrt{\\frac{GM_E}{r}}$**

$$v = \\sqrt{\\frac{(6.67 \\times 10^{-11})(5.97 \\times 10^{24})}{4.22 \\times 10^7}}$$

$$v = \\sqrt{\\frac{3.98 \\times 10^{14}}{4.22 \\times 10^7}}$$

$$v = \\sqrt{9.43 \\times 10^6}$$

$$v \\approx 3070 \\text{ m/s}$$

---

**Answers**: 
- (a) Orbital radius: **42,200 km** (from Earth's center)
- (b) Altitude: **35,800 km** (above Earth's surface)
- (c) Orbital speed: **3070 m/s** (about 6,900 mph)

**Application**: Geostationary satellites at this altitude complete one orbit in exactly 24 hours, so they remain above the same point on Earth's equator - perfect for communication satellites!`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
    },
  })

  console.log('✓ Created topic: Universal Gravitation')

  // Create flashcards for Universal Gravitation
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: universalGravitation.id,
        front: 'What is Newton\'s Law of Universal Gravitation?',
        back: '$F_g = \\frac{Gm_1m_2}{r^2}$ where $G = 6.67 \\times 10^{-11}$ N·m²/kg², $m_1$ and $m_2$ are masses, and $r$ is the distance between their centers',
        hint: 'Inverse square law - force decreases with distance squared',
      },
      {
        topicId: universalGravitation.id,
        front: 'How does gravitational force change if the distance between two objects doubles?',
        back: 'The force becomes $\\frac{1}{4}$ as strong (inverse square law: $F \\propto \\frac{1}{r^2}$)',
        hint: 'If $r \\to 2r$, then $F \\to \\frac{F}{4}$',
      },
      {
        topicId: universalGravitation.id,
        front: 'What is gravitational field strength $g$?',
        back: '$g = \\frac{GM}{r^2}$ - the gravitational force per unit mass at distance $r$ from mass $M$',
        hint: 'On Earth\'s surface, $g = 9.8$ m/s²',
      },
      {
        topicId: universalGravitation.id,
        front: 'What is the difference between mass and weight?',
        back: 'Mass is the amount of matter (constant, in kg). Weight is gravitational force $W = mg$ (varies with location, in N).',
        hint: 'Your mass is the same on Moon; your weight is less',
      },
      {
        topicId: universalGravitation.id,
        front: 'What is the orbital speed for a circular orbit?',
        back: '$v = \\sqrt{\\frac{GM}{r}}$ where $M$ is the central mass and $r$ is orbital radius. Note: satellite\'s mass cancels!',
        hint: 'Set gravitational force equal to centripetal force',
      },
      {
        topicId: universalGravitation.id,
        front: 'How does orbital speed depend on orbital radius?',
        back: 'Closer orbits are faster: $v \\propto \\frac{1}{\\sqrt{r}}$. As $r$ increases, $v$ decreases.',
        hint: 'Mercury orbits faster than Earth, Earth faster than Mars',
      },
      {
        topicId: universalGravitation.id,
        front: 'What is the orbital period formula?',
        back: '$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$ - This is Kepler\'s 3rd Law: $T^2 \\propto r^3$',
        hint: 'Larger orbits take longer to complete',
      },
      {
        topicId: universalGravitation.id,
        front: 'Why do astronauts feel "weightless" on the ISS if gravity is still 89% of Earth\'s surface value?',
        back: 'They\'re in continuous free fall toward Earth. Both they and the ISS fall together at the same rate, creating the sensation of weightlessness.',
        hint: 'Not zero gravity - just free fall!',
      },
      {
        topicId: universalGravitation.id,
        front: 'What is escape velocity?',
        back: '$v_{esc} = \\sqrt{\\frac{2GM}{R}}$ - the minimum speed needed to escape a planet\'s gravity. For Earth, about 11,200 m/s.',
        hint: 'This is $\\sqrt{2}$ times the orbital velocity at the surface',
      },
      {
        topicId: universalGravitation.id,
        front: 'For a satellite calculation, should you use Earth\'s radius or the distance from Earth\'s center?',
        back: 'Distance from Earth\'s CENTER: $r = R_{Earth} + h$ where $h$ is altitude above surface',
        hint: 'Common mistake: forgetting to add Earth\'s radius!',
      },
    ],
  })

  console.log('✓ Created 10 flashcards for Universal Gravitation')

  const exampleCount = await prisma.exampleProblem.count({
    where: {
      topic: {
        categoryId: circularCategory.id,
      },
    },
  })

  const flashcardCount = await prisma.flashcard.count({
    where: {
      topic: {
        categoryId: circularCategory.id,
      },
    },
  })

  const topicCount = await prisma.topic.count({
    where: {
      categoryId: circularCategory.id,
    },
  })

  console.log('\n✅ Successfully seeded AP Physics 1 - Circular Motion Part 2!')
  console.log(`   Topics: ${topicCount - 2} new (3 total in category)`)
  console.log(`   Examples: ${exampleCount}`)
  console.log(`   Flashcards: ${flashcardCount}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
