import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

async function main() {
  console.log('Seeding AP Physics 2 - Thermodynamics Part 1...')

  const physics2Course = await prisma.course.findUnique({
    where: { slug: 'ap-physics-2' },
  })

  if (!physics2Course) {
    throw new Error('AP Physics 2 course not found')
  }

  const thermoCategory = await prisma.category.upsert({
    where: { slug: 'thermodynamics' },
    update: {},
    create: {
      slug: 'thermodynamics',
      name: 'Thermodynamics',
      description: 'Temperature, heat, thermal properties, and laws of thermodynamics',
      order: 1,
      courseId: physics2Course.id,
    },
  })

  console.log('✓ Created category: Thermodynamics')

  // ============================================
  // TOPIC 1: Temperature and Thermal Expansion
  // ============================================
  const temperature = await prisma.topic.upsert({
    where: { slug: 'temperature-thermal-expansion' },
    update: {},
    create: {
      slug: 'temperature-thermal-expansion',
      title: 'Temperature and Thermal Expansion',
      description: 'Temperature scales, thermal equilibrium, and thermal expansion of materials',
      order: 1,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# 🌡️ Temperature and Thermal Expansion

## What is Temperature?

**Temperature** is a measure of the average kinetic energy of particles in a substance. Higher temperature means particles move faster on average.

> **💡 Microscopic view**: Temperature reflects the random thermal motion of atoms and molecules.

---

## Temperature Scales

### Celsius (°C)
- Water freezes: 0°C
- Water boils: 100°C (at 1 atm)
- Used in most of the world

### Fahrenheit (°F)
- Water freezes: 32°F
- Water boils: 212°F
- Used primarily in the US

### Kelvin (K)
- **Absolute temperature scale**
- Zero Kelvin = absolute zero (no molecular motion)
- Water freezes: 273.15 K
- Water boils: 373.15 K
- **No degree symbol!** (Just "K", not "°K")

### Conversions:

**Celsius ↔ Kelvin:**
$$T_K = T_C + 273.15$$
$$T_C = T_K - 273.15$$

**Celsius ↔ Fahrenheit:**
$$T_F = \\frac{9}{5}T_C + 32$$
$$T_C = \\frac{5}{9}(T_F - 32)$$

**Temperature Changes:**
- $\\Delta T_K = \\Delta T_C$ (same size degree)
- $\\Delta T_F = \\frac{9}{5}\\Delta T_C$

---

## Thermal Equilibrium

**Zeroth Law of Thermodynamics**: If objects A and B are each in thermal equilibrium with object C, then A and B are in thermal equilibrium with each other.

This seems obvious but is fundamental—it allows us to use thermometers!

When in thermal equilibrium:
- No net heat flow between objects
- Objects have the same temperature
- System reaches stable state

---

## Thermal Expansion

Most materials **expand when heated** and **contract when cooled**. Molecules vibrate more at higher temperatures, increasing average spacing.

### Linear Expansion

For a solid rod or beam:

$$\\Delta L = \\alpha L_0 \\Delta T$$

where:
- $\\Delta L$ = change in length
- $\\alpha$ = coefficient of linear expansion (1/°C or 1/K)
- $L_0$ = original length
- $\\Delta T$ = temperature change

**Final length:**
$$L = L_0(1 + \\alpha \\Delta T)$$

### Common Linear Expansion Coefficients:

| Material | α (×10⁻⁶ /°C) |
|----------|---------------|
| Steel    | 11            |
| Aluminum | 24            |
| Copper   | 17            |
| Glass    | 9             |
| Concrete | 12            |

### Area Expansion

For a flat surface:

$$\\Delta A = 2\\alpha A_0 \\Delta T$$

or using area expansion coefficient $\\beta = 2\\alpha$:

$$\\Delta A = \\beta A_0 \\Delta T$$

### Volume Expansion

For a 3D object:

$$\\Delta V = 3\\alpha V_0 \\Delta T$$

or using volume expansion coefficient $\\gamma = 3\\alpha$:

$$\\Delta V = \\gamma V_0 \\Delta T$$

**For liquids**, we typically use $\\beta_V$ directly (not related to linear expansion):

**Water**: $\\beta_V \\approx 210 \\times 10^{-6}$ /°C
**Mercury**: $\\beta_V \\approx 180 \\times 10^{-6}$ /°C

---

## Special Case: Water

Water is unusual! It has **maximum density at 4°C**:

- Below 4°C: water expands as it cools
- At 0°C: ice is less dense than water (ice floats)
- This property is crucial for aquatic life in winter

Without this property:
- Lakes would freeze from bottom up
- All aquatic life would die in winter
- Earth's climate would be very different

---

## Applications

### Engineering Considerations
- **Expansion joints** in bridges, buildings, railroads
- Gaps allow for thermal expansion without buckling
- Power lines sag more in summer (expansion)

### Bimetallic Strips
- Two metals with different $\\alpha$ bonded together
- Bend when heated (one expands more than other)
- Used in thermostats, circuit breakers

### Railway Gaps
- Older railroad tracks had gaps between sections
- Modern continuous welded rail uses different techniques
- Still must account for thermal stress

---

## Problem-Solving Strategy

1. **Identify the type of expansion**: linear, area, or volume
2. **Choose reference state**: usually room temperature
3. **Apply appropriate formula**:
   - Linear: $\\Delta L = \\alpha L_0 \\Delta T$
   - Area: $\\Delta A = 2\\alpha A_0 \\Delta T$
   - Volume: $\\Delta V = 3\\alpha V_0 \\Delta T$
4. **Watch temperature scale**: Use Celsius or Kelvin (difference is same)
5. **Check sign**: Heating → expansion (positive), cooling → contraction (negative)

---

## Common Mistakes

❌ Using Fahrenheit in thermal expansion (must use Celsius or Kelvin)
❌ Forgetting that $\\Delta T_K = \\Delta T_C$ (changes are equal)
❌ Using wrong coefficient (linear vs. volume)
❌ Not accounting for expansion in all dimensions
❌ Assuming water behaves normally below 4°C
`,
    },
  })

  console.log('✓ Created topic: Temperature and Thermal Expansion')

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: temperature.id,
        question: 'Convert the following temperatures: (a) 25°C to Kelvin, (b) 300 K to Celsius, (c) 98.6°F (body temperature) to Celsius.',
        solution: `**Solution:**

**Part (a):** 25°C to Kelvin
$$T_K = T_C + 273.15 = 25 + 273.15 = 298.15 \\text{ K}$$

**Part (b):** 300 K to Celsius
$$T_C = T_K - 273.15 = 300 - 273.15 = 26.85°\\text{C}$$

**Part (c):** 98.6°F to Celsius
$$T_C = \\frac{5}{9}(T_F - 32) = \\frac{5}{9}(98.6 - 32)$$
$$T_C = \\frac{5}{9}(66.6) = 37.0°\\text{C}$$

**Answer:**
- **(a)** 298.15 K (approximately 298 K)
- **(b)** 26.85°C (room temperature)
- **(c)** 37.0°C (normal body temperature)`,
        difficulty: Difficulty.EASY,
        order: 0,
        isPremium: false,
      },
      {
        topicId: temperature.id,
        question: 'A steel bridge is 1000 m long at 20°C. How much does it expand when the temperature rises to 40°C? (α_steel = 11 × 10⁻⁶ /°C)',
        solution: `**Given:**
- Original length: $L_0 = 1000$ m
- Initial temp: $T_1 = 20°\\text{C}$
- Final temp: $T_2 = 40°\\text{C}$
- Linear expansion: $\\alpha = 11 \\times 10^{-6}$ /°C

**Find:** Change in length $\\Delta L$

**Solution:**

Step 1: Calculate temperature change.
$$\\Delta T = 40 - 20 = 20°\\text{C}$$

Step 2: Apply linear expansion formula.
$$\\Delta L = \\alpha L_0 \\Delta T$$
$$\\Delta L = (11 \\times 10^{-6})(1000)(20)$$
$$\\Delta L = 0.22 \\text{ m} = 22 \\text{ cm}$$

**Answer:** The bridge expands by **0.22 m or 22 cm**

This is why bridges need expansion joints!`,
        difficulty: Difficulty.MEDIUM,
        order: 1,
        isPremium: false,
      },
      {
        topicId: temperature.id,
        question: 'An aluminum sphere has a radius of 10.0 cm at 20°C. (a) What is its radius at 100°C? (b) What is the change in volume? (α_Al = 24 × 10⁻⁶ /°C)',
        solution: `**Given:**
- Initial radius: $r_0 = 10.0$ cm $= 0.100$ m
- $\\Delta T = 100 - 20 = 80°\\text{C}$
- $\\alpha = 24 \\times 10^{-6}$ /°C

**Solution:**

**Part (a):** New radius

Step 1: Find change in radius.
$$\\Delta r = \\alpha r_0 \\Delta T = (24 \\times 10^{-6})(0.100)(80)$$
$$\\Delta r = 1.92 \\times 10^{-4} \\text{ m} = 0.0192 \\text{ cm}$$

Step 2: Find new radius.
$$r = r_0 + \\Delta r = 10.0 + 0.0192 = 10.0192 \\text{ cm}$$

**Part (b):** Change in volume

Method 1: Using volume expansion.
$$\\Delta V = 3\\alpha V_0 \\Delta T$$

Initial volume:
$$V_0 = \\frac{4}{3}\\pi r_0^3 = \\frac{4}{3}\\pi (0.100)^3 = 4.19 \\times 10^{-3} \\text{ m}^3$$

Change:
$$\\Delta V = 3(24 \\times 10^{-6})(4.19 \\times 10^{-3})(80)$$
$$\\Delta V = 2.41 \\times 10^{-5} \\text{ m}^3 = 24.1 \\text{ cm}^3$$

Method 2: Calculate volumes directly.
$$V_f = \\frac{4}{3}\\pi r_f^3 = \\frac{4}{3}\\pi (0.10019)^3 = 4.214 \\times 10^{-3} \\text{ m}^3$$
$$\\Delta V = V_f - V_0 = 2.4 \\times 10^{-5} \\text{ m}^3$$ ✓

**Answer:**
- **(a)** New radius: **10.02 cm** (tiny change!)
- **(b)** Volume change: **24 cm³**`,
        difficulty: Difficulty.HARD,
        order: 2,
        isPremium: false,
      },
    ],
  })

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: temperature.id,
        front: 'What is temperature on a microscopic level?',
        back: 'Temperature is a measure of the average kinetic energy of particles in a substance. Higher temperature = faster particle motion on average.',
      },
      {
        topicId: temperature.id,
        front: 'Convert between Celsius and Kelvin.',
        back: 'T_K = T_C + 273.15. Note: ΔT_K = ΔT_C (temperature changes are equal). Water freezes at 273.15 K (0°C) and boils at 373.15 K (100°C).',
      },
      {
        topicId: temperature.id,
        front: 'State the Zeroth Law of Thermodynamics.',
        back: 'If objects A and B are each in thermal equilibrium with object C, then A and B are in thermal equilibrium with each other. Allows thermometer use.',
      },
      {
        topicId: temperature.id,
        front: 'Give the formula for linear thermal expansion.',
        back: 'ΔL = αL₀ΔT, where α is coefficient of linear expansion, L₀ is original length, ΔT is temperature change. Final length: L = L₀(1 + αΔT).',
      },
      {
        topicId: temperature.id,
        front: 'How does area expansion relate to linear expansion?',
        back: 'ΔA = 2αA₀ΔT (or ΔA = βA₀ΔT where β = 2α). Area expansion coefficient is twice the linear expansion coefficient.',
      },
      {
        topicId: temperature.id,
        front: 'How does volume expansion relate to linear expansion?',
        back: 'ΔV = 3αV₀ΔT (or ΔV = γV₀ΔT where γ = 3α). Volume expansion coefficient is three times the linear expansion coefficient.',
      },
      {
        topicId: temperature.id,
        front: 'Why is water unusual regarding thermal expansion?',
        back: 'Water has maximum density at 4°C. Below 4°C it expands as it cools. Ice is less dense than water (floats). This property is crucial for aquatic life.',
      },
      {
        topicId: temperature.id,
        front: 'What is a bimetallic strip and how does it work?',
        back: 'Two metals with different α bonded together. When heated, one expands more than the other, causing bending. Used in thermostats and circuit breakers.',
      },
    ],
  })

  console.log('✓ Created 8 flashcards for Temperature and Thermal Expansion')

  console.log('\n✅ Successfully seeded AP Physics 2 - Thermodynamics Part 1!')
  console.log('   Topics: 1')
  console.log('   Examples: 3')
  console.log('   Flashcards: 8')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
