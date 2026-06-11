import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Acids and Bases (Consolidated Part 4)...');

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

  // Topic 4: Acid-Base Titrations
  const titrationTopic = await prisma.topic.create({
    data: {
      title: 'Acid-Base Titrations and Indicators',
      slug: 'acid-base-titrations',
      description: 'Master titration curves, equivalence points, and choosing appropriate indicators for acid-base titrations.',
      order: existingTopics + 1,
      categoryId: acidsBasesCategory.id,
      isPremium: false,
      textContent: `
# Acid-Base Titrations and Indicators

## What is a Titration?

**Titration:** Gradual addition of solution of known concentration (titrant) to solution being analyzed (analyte)

**Purpose:** Determine concentration of unknown

**Equivalence point:** Moles acid = moles base (stoichiometric point)

**Endpoint:** Where indicator changes color (ideally = equivalence point)

## Types of Titrations

**Four main types:**

1. **Strong acid + strong base**
2. **Weak acid + strong base**
3. **Strong acid + weak base**
4. **Weak acid + weak base** (not common)

**Each has distinct titration curve!**

## Strong Acid - Strong Base Titration

**Example:** HCl + NaOH

**Titration curve features:**

**Region 1 - Before equivalence:**
- Excess acid present
- pH low (< 7)
- pH rises slowly

**Equivalence point:**
- Moles H⁺ = moles OH⁻
- Only Na⁺ and Cl⁻ (neutral)
- **pH = 7.00** (at 25°C)
- Sharp pH jump (pH 3-11)

**Region 3 - After equivalence:**
- Excess base present
- pH high (> 7)
- pH rises slowly

**Buffer region:** None!

## Weak Acid - Strong Base Titration

**Example:** CH₃COOH + NaOH

**Titration curve features:**

**Region 1 - Before adding base:**
- Weak acid only
- pH = weak acid calculation
- pH higher than strong acid

**Region 2 - Buffer region:**
- HA + A⁻ present (buffer!)
- pH changes slowly
- Use Henderson-Hasselbalch

**Half-equivalence point:**
- Moles base = ½ moles acid
- [HA] = [A⁻]
- **pH = pK_a** (important!)

**Equivalence point:**
- All HA → A⁻
- Only conjugate base present
- **pH > 7** (basic!)
- pH jump narrower than strong/strong

**Region 4 - Excess base:**
- pH controlled by excess OH⁻

## Strong Acid - Weak Base Titration

**Example:** HCl + NH₃

**Opposite of weak acid - strong base:**

**Before equivalence:**
- Buffer region (B + BH⁺)
- pH < 7

**Half-equivalence:**
- pH = pK_a of BH⁺ (or 14 - pK_b)

**Equivalence point:**
- All B → BH⁺ (conjugate acid)
- **pH < 7** (acidic!)

**After equivalence:**
- Excess strong acid
- pH very low

## Calculations During Titration

### Before Equivalence (strong acid/base):

**Excess reactant determines pH**

**Example:** 25.0 mL 0.10 M HCl + 10.0 mL 0.10 M NaOH

**Moles H⁺:** 0.025 L × 0.10 M = 0.0025 mol
**Moles OH⁻:** 0.010 L × 0.10 M = 0.0010 mol

**After reaction:** 0.0025 - 0.0010 = 0.0015 mol H⁺ remains

**Volume:** 25.0 + 10.0 = 35.0 mL = 0.035 L

**[H⁺]:** 0.0015/0.035 = 0.043 M
**pH:** -log(0.043) = 1.37

### At Equivalence (weak acid/strong base):

**Only conjugate base present**

**Use K_b calculation or Henderson-Hasselbalch at equivalence**

### In Buffer Region (weak acid/strong base):

**Use Henderson-Hasselbalch:**

**Moles unreacted HA and moles A⁻ formed**

pH = pK_a + log(moles A⁻/moles HA)

## Indicators

**Indicator:** Weak acid (HIn) with different colors for HIn and In⁻

**HIn ⇌ H⁺ + In⁻**
- HIn: one color (acidic form)
- In⁻: different color (basic form)

**Color change:** Occurs over ~2 pH units centered at pK_a(indicator)

**Common indicators:**

| Indicator | pK_a | Color change | pH range |
|-----------|------|--------------|----------|
| Methyl orange | 3.7 | Red → Yellow | 3.1-4.4 |
| Bromothymol blue | 7.0 | Yellow → Blue | 6.0-7.6 |
| Phenolphthalein | 9.4 | Colorless → Pink | 8.3-10.0 |

## Choosing an Indicator

**Match indicator range to equivalence point pH:**

**Strong acid + strong base:**
- pH at equivalence = 7
- Any indicator with range 4-10 works
- Phenolphthalein, bromothymol blue ✓

**Weak acid + strong base:**
- pH at equivalence > 7 (8-10 typical)
- Need indicator that changes in basic range
- **Phenolphthalein** (8.3-10.0) ✓
- Methyl orange ✗ (too acidic)

**Strong acid + weak base:**
- pH at equivalence < 7 (4-6 typical)
- Need indicator that changes in acidic range
- **Methyl orange** (3.1-4.4) ✓
- Phenolphthalein ✗ (too basic)

## Polyprotic Acid Titrations

**Multiple equivalence points:**

**Example:** H₂SO₃ (diprotic)

**First equivalence:** H₂SO₃ → HSO₃⁻
- pH depends on K_a1

**Second equivalence:** HSO₃⁻ → SO₃²⁻
- pH depends on K_a2

**Curve shows two distinct pH jumps**

## Titration Curve Sketching

**Key points to plot:**

1. **Initial pH** (before titration)
2. **Buffer region** (gradual rise)
3. **Half-equivalence** (pH = pK_a for weak acid)
4. **Equivalence point** (sharp rise)
5. **After equivalence** (slow rise)

**Shape depends on acid/base strength!**
`,
      exampleProblems: {
        create: [
          {
            question: 'Calculate the pH when 25.0 mL of 0.100 M HCl is titrated with: (a) 0.0 mL NaOH, (b) 12.5 mL of 0.100 M NaOH, (c) 25.0 mL of 0.100 M NaOH, (d) 30.0 mL of 0.100 M NaOH.',
            solution: `**Given:**
- 25.0 mL of 0.100 M HCl
- Titrant: 0.100 M NaOH

**Initial moles H⁺:** 0.0250 L × 0.100 M = 0.00250 mol

---

**(a) 0.0 mL NaOH (before titration)**

**Pure HCl solution:**
- [H⁺] = 0.100 M
- pH = -log(0.100) = 1.00

**Answer (a):** pH = 1.00

---

**(b) 12.5 mL NaOH (half-equivalence)**

**Moles OH⁻ added:** 0.0125 L × 0.100 M = 0.00125 mol

**Neutralization:** H⁺ + OH⁻ → H₂O

**After reaction:**
- Moles H⁺ remaining: 0.00250 - 0.00125 = 0.00125 mol
- Moles OH⁻: 0 (limiting)

**Total volume:** 25.0 + 12.5 = 37.5 mL = 0.0375 L

**[H⁺]:**

$$[H^+] = \\frac{0.00125 \\text{ mol}}{0.0375 \\text{ L}} = 0.0333 \\text{ M}$$

**pH:**

$$\\text{pH} = -\\log(0.0333) = 1.48$$

**Answer (b):** pH = 1.48

---

**(c) 25.0 mL NaOH (equivalence point)**

**Moles OH⁻ added:** 0.0250 L × 0.100 M = 0.00250 mol

**Exactly neutralizes all H⁺!**

**After reaction:**
- Only Na⁺ and Cl⁻ (neutral ions)
- Neither hydrolyzes

**Strong acid + strong base → neutral salt**

**pH = 7.00**

**Answer (c):** pH = 7.00

---

**(d) 30.0 mL NaOH (past equivalence)**

**Moles OH⁻ added:** 0.0300 L × 0.100 M = 0.00300 mol

**After reaction:**
- Moles H⁺: 0 (all neutralized)
- Moles OH⁻ excess: 0.00300 - 0.00250 = 0.00050 mol

**Total volume:** 25.0 + 30.0 = 55.0 mL = 0.0550 L

**[OH⁻]:**

$$[OH^-] = \\frac{0.00050 \\text{ mol}}{0.0550 \\text{ L}} = 0.00909 \\text{ M}$$

**pOH:**

$$\\text{pOH} = -\\log(0.00909) = 2.04$$

**pH:**

$$\\text{pH} = 14.00 - 2.04 = 11.96$$

**Answer (d):** pH = 11.96

---

**Summary:**

| Volume NaOH | pH | Region |
|-------------|-----|--------|
| 0.0 mL | 1.00 | Before |
| 12.5 mL | 1.48 | Before (halfway) |
| 25.0 mL | 7.00 | Equivalence |
| 30.0 mL | 11.96 | After |`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A 25.0 mL sample of 0.150 M acetic acid (K_a = 1.8 × 10⁻⁵) is titrated with 0.150 M NaOH. Calculate the pH: (a) initially, (b) after adding 12.5 mL NaOH, (c) at equivalence point.',
            solution: `**Given:**
- 25.0 mL of 0.150 M CH₃COOH
- K_a = 1.8 × 10⁻⁵
- Titrant: 0.150 M NaOH

**Initial moles CH₃COOH:** 0.0250 L × 0.150 M = 0.00375 mol

**pK_a:** -log(1.8 × 10⁻⁵) = 4.74

---

**(a) Initial pH (before NaOH)**

**Weak acid calculation:**

$$K_a = \\frac{x^2}{0.150 - x}$$

**Approximation:** x² = K_a × 0.150

$$x = \\sqrt{(1.8 \\times 10^{-5})(0.150)} = 1.64 \\times 10^{-3}$$

**pH = -log(1.64 × 10⁻³) = 2.78**

**Answer (a):** pH = 2.78

---

**(b) After 12.5 mL NaOH (half-equivalence)**

**Moles OH⁻:** 0.0125 L × 0.150 M = 0.001875 mol

**Reaction:** CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O

**After reaction:**
- Moles CH₃COOH: 0.00375 - 0.001875 = 0.001875 mol
- Moles CH₃COO⁻: 0.001875 mol

**Equal moles HA and A⁻!**

**At half-equivalence:** pH = pK_a

**pH = 4.74**

**Answer (b):** pH = 4.74

**Note:** This is a key point - always true for weak acid/strong base!

---

**(c) At equivalence point**

**Moles NaOH needed:** 0.00375 mol (same as acid)
**Volume NaOH:** 0.00375 mol ÷ 0.150 M = 0.0250 L = 25.0 mL

**After reaction:**
- All CH₃COOH → CH₃COO⁻
- Moles CH₃COO⁻: 0.00375 mol
- Total volume: 25.0 + 25.0 = 50.0 mL

**[CH₃COO⁻]:**

$$[CH_3COO^-] = \\frac{0.00375}{0.0500} = 0.0750 \\text{ M}$$

**This is weak base!**

**Find K_b:**

$$K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$$

**Base equilibrium:** CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻

$$K_b = \\frac{x^2}{0.0750}$$

$$x = \\sqrt{(5.6 \\times 10^{-10})(0.0750)} = 6.48 \\times 10^{-6}$$

**[OH⁻] = 6.48 × 10⁻⁶ M**

**pOH = -log(6.48 × 10⁻⁶) = 5.19**

**pH = 14.00 - 5.19 = 8.81**

**Answer (c):** pH = 8.81

---

**Key observation:** Equivalence point pH > 7 for weak acid/strong base!

**Summary:**

| Point | pH | Explanation |
|-------|-----|-------------|
| Initial | 2.78 | Weak acid |
| Half-equiv | 4.74 | pH = pK_a (buffer!) |
| Equivalence | 8.81 | Weak base (A⁻) |`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'For the titration of 25.0 mL of 0.100 M NH₃ (K_b = 1.8 × 10⁻⁵) with 0.100 M HCl: (a) What is the pH at equivalence? (b) Which indicator is appropriate: phenolphthalein (8.3-10.0) or methyl orange (3.1-4.4)?',
            solution: `**Given:**
- 25.0 mL of 0.100 M NH₃ (weak base)
- K_b = 1.8 × 10⁻⁵
- Titrant: 0.100 M HCl (strong acid)

**This is strong acid + weak base titration!**

---

**(a) pH at equivalence**

**Initial moles NH₃:** 0.0250 L × 0.100 M = 0.00250 mol

**At equivalence:**
- All NH₃ → NH₄⁺ (conjugate acid)
- Moles NH₄⁺: 0.00250 mol
- Volume HCl added: 25.0 mL (same M and mol)
- Total volume: 25.0 + 25.0 = 50.0 mL

**[NH₄⁺]:**

$$[NH_4^+] = \\frac{0.00250}{0.0500} = 0.0500 \\text{ M}$$

**NH₄⁺ is weak acid!**

**Find K_a:**

$$K_a = \\frac{K_w}{K_b} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$$

**Acid equilibrium:** NH₄⁺ ⇌ NH₃ + H⁺

$$K_a = \\frac{x^2}{0.0500 - x} \\approx \\frac{x^2}{0.0500}$$

$$x^2 = (5.6 \\times 10^{-10})(0.0500)$$

$$x^2 = 2.8 \\times 10^{-11}$$

$$x = 5.29 \\times 10^{-6}$$

**[H⁺] = 5.29 × 10⁻⁶ M**

**pH:**

$$\\text{pH} = -\\log(5.29 \\times 10^{-6}) = 5.28$$

**Answer (a):** pH = 5.28

**Note:** pH < 7 at equivalence (acidic!)

---

**(b) Choose indicator**

**Equivalence point pH = 5.28**

**Phenolphthalein:**
- Range: 8.3-10.0 (basic range)
- Changes color at pH 8-10
- **Too high!** Won't change at pH 5.28 ✗

**Methyl orange:**
- Range: 3.1-4.4 (acidic range)
- Changes color at pH 3-4
- **Close to equivalence pH** ✓

**Answer (b):** Methyl orange is appropriate

**Better choice:** Bromocresol green (3.8-5.4) if available

---

**Reasoning:**

**For weak base + strong acid:**
- Equivalence point is acidic (pH < 7)
- Need acidic-range indicator
- Methyl orange changes in acidic region
- Phenolphthalein wouldn't change until past equivalence

**General rule:**
- Strong/strong: any indicator (pH = 7)
- Weak acid/strong base: basic indicator (phenolphthalein)
- Strong acid/weak base: acidic indicator (methyl orange)

---

**Summary:**

| Titration Type | pH at equiv | Indicator |
|----------------|-------------|-----------|
| Strong/strong | 7 | Any (4-10) |
| Weak acid/strong base | > 7 | Phenolphthalein |
| Strong acid/weak base | < 7 | Methyl orange |`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', titrationTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: titrationTopic.id,
        front: 'What is a titration and what is the equivalence point?',
        back: 'Titration: gradual addition of titrant (known conc) to analyte (unknown). Equivalence point: moles acid = moles base (stoichiometric). Endpoint: where indicator changes (ideally = equivalence point). Determine unknown concentration.'
      },
      {
        topicId: titrationTopic.id,
        front: 'Describe the titration curve for strong acid + strong base.',
        back: 'Before equiv: low pH, excess acid. Equivalence: pH=7 (neutral salt Na⁺, Cl⁻). Sharp pH jump (3-11). After equiv: high pH, excess base. NO buffer region. pH=7 only for strong/strong at 25°C.'
      },
      {
        topicId: titrationTopic.id,
        front: 'What are the key features of weak acid + strong base titration curve?',
        back: 'Initial: weak acid pH (higher than strong). Buffer region: HA + A⁻ present, pH changes slowly. Half-equivalence: pH=pK_a ([HA]=[A⁻]). Equivalence: pH>7 (weak base A⁻ present). Narrower pH jump than strong/strong.'
      },
      {
        topicId: titrationTopic.id,
        front: 'What is special about the half-equivalence point?',
        back: 'Moles base = ½ moles acid, so [HA]=[A⁻]. From Henderson-Hasselbalch: pH = pK_a + log(1) = pK_a. Best buffering point. Can determine pK_a from titration curve. Only for weak acid or weak base titrations.'
      },
      {
        topicId: titrationTopic.id,
        front: 'Why is equivalence point pH ≠ 7 for weak acid/base titrations?',
        back: 'Weak acid + strong base: equiv point has conjugate base A⁻ (basic), so pH>7. Strong acid + weak base: equiv point has conjugate acid BH⁺ (acidic), so pH<7. Only strong/strong gives pH=7.'
      },
      {
        topicId: titrationTopic.id,
        front: 'What is an acid-base indicator and how does it work?',
        back: 'Indicator: weak acid (HIn) with different colors for HIn and In⁻. HIn ⇌ H⁺ + In⁻. Color change over ~2 pH units centered at pK_a(indicator). Match indicator range to equivalence point pH.'
      },
      {
        topicId: titrationTopic.id,
        front: 'How do you choose the right indicator for a titration?',
        back: 'Match indicator range to equivalence pH. Strong/strong (pH=7): any (phenolphthalein, bromothymol blue). Weak acid/strong base (pH>7): phenolphthalein (8.3-10). Strong acid/weak base (pH<7): methyl orange (3.1-4.4). Range must include equiv point!'
      },
      {
        topicId: titrationTopic.id,
        front: 'What are common indicators and their pH ranges?',
        back: 'Methyl orange: 3.1-4.4 (red→yellow), acidic range. Bromothymol blue: 6.0-7.6 (yellow→blue), neutral range. Phenolphthalein: 8.3-10.0 (colorless→pink), basic range. Each changes over ~2 pH units around their pK_a.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', titrationTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Acids and Bases (Part 4)!');
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
