import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Acids and Bases (Consolidated Part 2)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Acids and Bases category
  const acidsBasesCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Acids and Bases'
    }
  });

  if (!acidsBasesCategory) {
    throw new Error('Acids and Bases category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: acidsBasesCategory.id }
  });

  // Topic 2: Weak Acids and Bases
  const weakTopic = await prisma.topic.create({
    data: {
      title: 'Weak Acids, Weak Bases, and K_a/K_b',
      slug: 'weak-acids-bases-ka-kb',
      description: 'Understand weak acid/base equilibria, acid and base dissociation constants (K_a and K_b), and percent ionization.',
      order: existingTopics + 1,
      categoryId: acidsBasesCategory.id,
      isPremium: false,
      textContent: `
# Weak Acids, Weak Bases, and K_a/K_b

## Weak Acids

**Definition:** Partially ionizes in water (< 100%)

**General equilibrium:**

$$\\ce{HA(aq) + H2O(l) <=> H3O^+(aq) + A^-(aq)}$$

**Simplified:** HA ⇌ H⁺ + A⁻

**Examples:** CH₃COOH, HF, HNO₂, H₃PO₄

## Acid Dissociation Constant (K_a)

**Equilibrium expression:**

$$K_a = \\frac{[H^+][A^-]}{[HA]}$$

**K_a magnitude:**
- Larger K_a = stronger acid
- Typical range: 10⁻² to 10⁻¹⁴
- Strong acids: K_a >> 1

**Common weak acids:**

| Acid | K_a |
|------|-----|
| HF | 6.8 × 10⁻⁴ |
| HNO₂ | 4.5 × 10⁻⁴ |
| CH₃COOH | 1.8 × 10⁻⁵ |
| H₂CO₃ | 4.3 × 10⁻⁷ |

## Weak Acid pH Calculation

**Use ICE table:**

**Example:** HA ⇌ H⁺ + A⁻

| | HA | H⁺ | A⁻ |
|-|---------|-------|-------|
| I | [HA]₀ | 0 | 0 |
| C | -x | +x | +x |
| E | [HA]₀-x | x | x |

**K_a expression:**

$$K_a = \\frac{x^2}{[HA]_0 - x}$$

**Solve for x = [H⁺], then pH = -log x**

## Small x Approximation (5% Rule)

**When [HA]₀/K_a > 100:**

**Assume:** [HA]₀ - x ≈ [HA]₀

$$K_a \\approx \\frac{x^2}{[HA]_0}$$

$$x = \\sqrt{K_a \\cdot [HA]_0}$$

**Check validity:**
- Calculate x
- If x/[HA]₀ < 5%, approximation valid
- If x/[HA]₀ > 5%, use quadratic

## Weak Bases

**Definition:** Partially ionize by accepting H⁺

**General equilibrium:**

$$\\ce{B(aq) + H2O(l) <=> BH^+(aq) + OH^-(aq)}$$

**Examples:** NH₃, CH₃NH₂, pyridine

## Base Dissociation Constant (K_b)

**Equilibrium expression:**

$$K_b = \\frac{[BH^+][OH^-]}{[B]}$$

**Common weak bases:**

| Base | K_b |
|------|-----|
| NH₃ | 1.8 × 10⁻⁵ |
| CH₃NH₂ | 4.4 × 10⁻⁴ |
| C₅H₅N (pyridine) | 1.7 × 10⁻⁹ |

## Weak Base pH Calculation

**ICE table:** B + H₂O ⇌ BH⁺ + OH⁻

| | B | BH⁺ | OH⁻ |
|-|---------|-------|-------|
| I | [B]₀ | 0 | 0 |
| C | -x | +x | +x |
| E | [B]₀-x | x | x |

**K_b expression:**

$$K_b = \\frac{x^2}{[B]_0 - x}$$

**Solve for x = [OH⁻]:**
1. Calculate x from K_b
2. pOH = -log[OH⁻]
3. pH = 14.00 - pOH

## Relationship between K_a and K_b

**For conjugate acid-base pair:**

$$K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$$

**Example:** NH₃/NH₄⁺
- K_b(NH₃) = 1.8 × 10⁻⁵
- K_a(NH₄⁺) = K_w/K_b = 5.6 × 10⁻¹⁰

**Stronger acid → weaker conjugate base**
**Stronger base → weaker conjugate acid**

## Percent Ionization

**Measure of acid/base strength:**

$$\\text{% ionization} = \\frac{[H^+]_{\\text{eq}}}{[HA]_0} \\times 100\\%$$

**For weak acids:**
- Typically < 5%
- Increases with dilution
- Larger K_a → larger % ionization

**Example:** 0.10 M acetic acid
- K_a = 1.8 × 10⁻⁵
- [H⁺] = 1.3 × 10⁻³ M
- % ionization = (1.3 × 10⁻³/0.10) × 100% = 1.3%

## pK_a and pK_b

**Analogous to pH:**

$$\\text{pK}_a = -\\log K_a$$

$$\\text{pK}_b = -\\log K_b$$

**Relationship:**

$$\\text{pK}_a + \\text{pK}_b = 14.00$$

**Interpretation:**
- Smaller pK_a = stronger acid
- Smaller pK_b = stronger base

## Polyprotic Acids

**Multiple ionizable protons:**

**Example:** H₂SO₃

**First ionization:** H₂SO₃ ⇌ H⁺ + HSO₃⁻
- K_a1 (larger)

**Second ionization:** HSO₃⁻ ⇌ H⁺ + SO₃²⁻
- K_a2 (smaller)

**Pattern:** K_a1 >> K_a2 >> K_a3

**For pH:** Usually only first ionization matters (K_a1 >> K_a2)
`,
      exampleProblems: {
        create: [
          {
            question: 'Calculate the pH of a 0.10 M solution of acetic acid (CH₃COOH). K_a = 1.8 × 10⁻⁵.',
            solution: `**Given:**
- [CH₃COOH]₀ = 0.10 M
- K_a = 1.8 × 10⁻⁵

**Equilibrium:** CH₃COOH ⇌ H⁺ + CH₃COO⁻

---

**Set up ICE table:**

| | CH₃COOH | H⁺ | CH₃COO⁻ |
|-|---------|-----|---------|
| I | 0.10 | 0 | 0 |
| C | -x | +x | +x |
| E | 0.10-x | x | x |

---

**Write K_a expression:**

$$K_a = \\frac{[H^+][CH_3COO^-]}{[CH_3COOH]} = \\frac{x^2}{0.10-x}$$

---

**Check for approximation:**

$$\\frac{[HA]_0}{K_a} = \\frac{0.10}{1.8 \\times 10^{-5}} = 5.6 \\times 10^3$$

**Since ratio > 100, try small x approximation:**

$$1.8 \\times 10^{-5} = \\frac{x^2}{0.10}$$

$$x^2 = (1.8 \\times 10^{-5})(0.10)$$

$$x^2 = 1.8 \\times 10^{-6}$$

$$x = 1.34 \\times 10^{-3}$$

---

**Check validity:**

$$\\frac{x}{[HA]_0} = \\frac{1.34 \\times 10^{-3}}{0.10} = 0.0134 = 1.34\\%$$

**1.34% < 5%** ✓ Approximation valid!

---

**Calculate pH:**

[H⁺] = x = 1.34 × 10⁻³ M

$$\\text{pH} = -\\log(1.34 \\times 10^{-3})$$

$$\\text{pH} = 2.87$$

**Answer:** pH = 2.87

---

**Percent ionization:**

$$\\% = \\frac{1.34 \\times 10^{-3}}{0.10} \\times 100\\% = 1.3\\%$$

Only 1.3% of acetic acid ionized (weak acid!)`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate the pH of a 0.25 M ammonia (NH₃) solution. K_b = 1.8 × 10⁻⁵.',
            solution: `**Given:**
- [NH₃]₀ = 0.25 M
- K_b = 1.8 × 10⁻⁵

**Equilibrium:** NH₃ + H₂O ⇌ NH₄⁺ + OH⁻

---

**Set up ICE table:**

| | NH₃ | NH₄⁺ | OH⁻ |
|-|---------|-------|-------|
| I | 0.25 | 0 | 0 |
| C | -x | +x | +x |
| E | 0.25-x | x | x |

---

**Write K_b expression:**

$$K_b = \\frac{[NH_4^+][OH^-]}{[NH_3]} = \\frac{x^2}{0.25-x}$$

---

**Check approximation:**

$$\\frac{[B]_0}{K_b} = \\frac{0.25}{1.8 \\times 10^{-5}} = 1.4 \\times 10^4 > 100$$ ✓

**Use approximation:**

$$1.8 \\times 10^{-5} = \\frac{x^2}{0.25}$$

$$x^2 = (1.8 \\times 10^{-5})(0.25)$$

$$x^2 = 4.5 \\times 10^{-6}$$

$$x = 2.12 \\times 10^{-3}$$

**Check:** x/[B]₀ = 2.12×10⁻³/0.25 = 0.85% < 5% ✓

---

**Calculate pOH:**

[OH⁻] = x = 2.12 × 10⁻³ M

$$\\text{pOH} = -\\log(2.12 \\times 10^{-3})$$

$$\\text{pOH} = 2.67$$

---

**Calculate pH:**

$$\\text{pH} = 14.00 - \\text{pOH}$$

$$\\text{pH} = 14.00 - 2.67$$

$$\\text{pH} = 11.33$$

**Answer:** pH = 11.33

---

**Interpretation:**
- pH > 7: basic solution ✓
- Weak base partially ionizes
- Only ~0.85% ionized`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'The pH of a 0.50 M solution of a weak acid (HA) is 2.68. Calculate: (a) K_a, (b) percent ionization, (c) K_b for the conjugate base A⁻.',
            solution: `**Given:**
- [HA]₀ = 0.50 M
- pH = 2.68

**Equilibrium:** HA ⇌ H⁺ + A⁻

---

**(a) Calculate K_a**

**Find [H⁺] from pH:**

$$[H^+] = 10^{-\\text{pH}} = 10^{-2.68}$$

$$[H^+] = 2.09 \\times 10^{-3} \\text{ M}$$

---

**ICE table:**

| | HA | H⁺ | A⁻ |
|-|-----------|---------------|---------------|
| I | 0.50 | 0 | 0 |
| C | -2.09×10⁻³ | +2.09×10⁻³ | +2.09×10⁻³ |
| E | 0.498 | 2.09×10⁻³ | 2.09×10⁻³ |

**At equilibrium:**
- [HA] = 0.50 - 0.00209 = 0.498 M
- [H⁺] = [A⁻] = 2.09 × 10⁻³ M

---

**Calculate K_a:**

$$K_a = \\frac{[H^+][A^-]}{[HA]}$$

$$K_a = \\frac{(2.09 \\times 10^{-3})(2.09 \\times 10^{-3})}{0.498}$$

$$K_a = \\frac{4.37 \\times 10^{-6}}{0.498}$$

$$K_a = 8.8 \\times 10^{-6}$$

**Answer (a):** K_a = 8.8 × 10⁻⁶

---

**(b) Calculate percent ionization**

$$\\% \\text{ ionization} = \\frac{[H^+]_{\\text{eq}}}{[HA]_0} \\times 100\\%$$

$$\\% \\text{ ionization} = \\frac{2.09 \\times 10^{-3}}{0.50} \\times 100\\%$$

$$\\% \\text{ ionization} = 0.418\\%$$

**Answer (b):** 0.42% ionization

---

**(c) Calculate K_b for conjugate base A⁻**

**Use relationship:**

$$K_a \\times K_b = K_w$$

$$K_b = \\frac{K_w}{K_a}$$

$$K_b = \\frac{1.0 \\times 10^{-14}}{8.8 \\times 10^{-6}}$$

$$K_b = 1.1 \\times 10^{-9}$$

**Answer (c):** K_b = 1.1 × 10⁻⁹

---

**Summary:**

| Property | Value |
|----------|-------|
| K_a (HA) | 8.8 × 10⁻⁶ |
| % ionization | 0.42% |
| K_b (A⁻) | 1.1 × 10⁻⁹ |

**Note:** HA is moderately weak acid; A⁻ is very weak base (small K_b)`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', weakTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: weakTopic.id,
        front: 'What is a weak acid and how does it differ from a strong acid?',
        back: 'Weak acid: partially ionizes (<100%) in water. Exists mostly as HA, small amounts as H⁺ and A⁻. Strong acid: completely ionizes (100%). Examples weak: CH₃COOH, HF, HNO₂. Weak acids have K_a < 1.'
      },
      {
        topicId: weakTopic.id,
        front: 'What is K_a and what does its magnitude tell you?',
        back: 'K_a = acid dissociation constant = [H⁺][A⁻]/[HA]. Larger K_a = stronger acid, more ionization. Typical range 10⁻² to 10⁻¹⁴. Strong acids K_a>>1. Use to calculate pH of weak acid solutions.'
      },
      {
        topicId: weakTopic.id,
        front: 'When can you use the small x approximation for weak acids?',
        back: 'When [HA]₀/K_a > 100, assume x negligible. Simplify: K_a ≈ x²/[HA]₀, so x=√(K_a·[HA]₀). CHECK: x/[HA]₀ < 5% valid, >5% use quadratic. Saves time on calculations.'
      },
      {
        topicId: weakTopic.id,
        front: 'How do you calculate pH of a weak acid solution?',
        back: 'Set up ICE table: HA ⇌ H⁺ + A⁻. K_a = x²/(HA₀-x). Try approximation if [HA]₀/K_a>100. Solve for x=[H⁺]. pH=-log(x). Check approximation validity (<5%).'
      },
      {
        topicId: weakTopic.id,
        front: 'What is K_b and how do you calculate pH of a weak base?',
        back: 'K_b = base dissociation constant = [BH⁺][OH⁻]/[B]. Set up ICE: B + H₂O ⇌ BH⁺ + OH⁻. Solve for x=[OH⁻]. pOH=-log[OH⁻]. pH=14-pOH. Similar to weak acid but solve for OH⁻ first.'
      },
      {
        topicId: weakTopic.id,
        front: 'What is the relationship between K_a and K_b for conjugate pairs?',
        back: 'K_a × K_b = K_w = 1.0×10⁻¹⁴. For any conjugate acid-base pair. Example: NH₃/NH₄⁺. Stronger acid → weaker conjugate base. Stronger base → weaker conjugate acid. Can calculate one from other.'
      },
      {
        topicId: weakTopic.id,
        front: 'What is percent ionization and what does it tell you?',
        back: '% ionization = ([H⁺]eq/[HA]₀) × 100%. Measures extent of ionization. Weak acids typically <5%. Increases with dilution. Larger K_a → larger %. Example: 1% means 99% remains as HA.'
      },
      {
        topicId: weakTopic.id,
        front: 'What are polyprotic acids and how do K_a values compare?',
        back: 'Polyprotic: multiple ionizable H⁺ (H₂SO₃, H₃PO₄). Multiple K_a: K_a1 >> K_a2 >> K_a3. First ionization much stronger. For pH calculations, usually only K_a1 matters. Each step progressively weaker.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', weakTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Acids and Bases (Part 2)!');
  console.log('   Topics: 1');
  console.log('   Examples: 3');
  console.log('   Flashcards: 8');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
