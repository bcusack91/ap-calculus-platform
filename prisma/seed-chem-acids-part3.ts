import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Acids and Bases (Consolidated Part 3)...');

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

  // Topic 3: Buffer Solutions
  const bufferTopic = await prisma.topic.create({
    data: {
      title: 'Buffer Solutions and Henderson-Hasselbalch',
      slug: 'buffer-solutions-henderson-hasselbalch',
      description: 'Master buffer systems, calculate buffer pH using Henderson-Hasselbalch equation, and understand buffer capacity.',
      order: existingTopics + 1,
      categoryId: acidsBasesCategory.id,
      isPremium: false,
      textContent: `
# Buffer Solutions and Henderson-Hasselbalch

## What is a Buffer?

**Buffer:** Solution that resists pH change when small amounts of acid or base are added

**Composition:**
- Weak acid (HA) + conjugate base (A⁻), OR
- Weak base (B) + conjugate acid (BH⁺)

**Examples:**
- CH₃COOH/CH₃COO⁻ (acetic acid/acetate)
- NH₃/NH₄⁺ (ammonia/ammonium)
- H₂PO₄⁻/HPO₄²⁻ (phosphate buffer)

## How Buffers Work

**Weak acid buffer: HA/A⁻**

**Add H⁺:** A⁻ + H⁺ → HA (conjugate base neutralizes)

**Add OH⁻:** HA + OH⁻ → A⁻ + H₂O (weak acid neutralizes)

**Result:** pH stays relatively constant

**Key:** Need significant amounts of BOTH components

## Henderson-Hasselbalch Equation

**For weak acid buffer:**

$$\\text{pH} = \\text{pK}_a + \\log\\frac{[A^-]}{[HA]}$$

**Or:**

$$\\text{pH} = \\text{pK}_a + \\log\\frac{[\\text{base}]}{[\\text{acid}]}$$

**Where pK_a = -log K_a**

**For weak base buffer:**

$$\\text{pOH} = \\text{pK}_b + \\log\\frac{[BH^+]}{[B]}$$

Then pH = 14 - pOH

## Special Cases

**When [A⁻] = [HA]:**

$$\\text{pH} = \\text{pK}_a + \\log(1) = \\text{pK}_a$$

**Equal amounts:** pH = pK_a (best buffering!)

**Ratio of 10:1 or 1:10:**
- pH = pK_a ± 1
- Still effective buffer

## Preparing Buffers

**Two methods:**

### Method 1: Mix weak acid and its salt
- Example: CH₃COOH + NaCH₃COO
- Calculate pH from Henderson-Hasselbalch

### Method 2: Partial neutralization
- Start with weak acid, add strong base (or vice versa)
- Creates conjugate base in situ
- Common in lab

**Example:** 1.0 M HA + 0.5 M NaOH
- Forms 0.5 M A⁻ and leaves 0.5 M HA
- pH = pK_a (equal amounts)

## Buffer Capacity

**Capacity:** Amount of acid/base buffer can neutralize

**Factors:**
1. **Concentrations:** Higher = more capacity
2. **Ratio:** 1:1 ratio = maximum capacity

**Best buffer:**
- pH ≈ pK_a (ratio close to 1:1)
- High concentrations of both

**Effective range:** pK_a ± 1

## Calculating pH Changes in Buffers

**General approach:**

1. **Determine initial amounts** (use moles, not M)
2. **Add strong acid/base** (neutralization)
3. **Calculate new amounts** after reaction
4. **Find new concentrations** (divide by volume)
5. **Use Henderson-Hasselbalch**

**Or use ICE for neutralization:**

**Add OH⁻ to HA/A⁻ buffer:**
- HA + OH⁻ → A⁻ + H₂O (goes to completion)
- Decreases [HA], increases [A⁻]

**Add H⁺ to HA/A⁻ buffer:**
- A⁻ + H⁺ → HA (goes to completion)
- Increases [HA], decreases [A⁻]

## Common Ion Effect Revisited

**Buffer is example of common ion effect:**

**HA ⇌ H⁺ + A⁻**

**Adding A⁻ (from salt):**
- Shifts left
- Suppresses ionization of HA
- Lower [H⁺] than HA alone
- Higher pH than HA alone

## Choosing a Buffer

**Select pK_a close to desired pH:**

**Want pH = 7.0?**
- Choose acid with pK_a ≈ 7.0
- H₂PO₄⁻/HPO₄²⁻ (pK_a = 7.2) ✓

**Want pH = 4.7?**
- Choose acid with pK_a ≈ 4.7
- CH₃COOH/CH₃COO⁻ (pK_a = 4.76) ✓

**Rule:** Buffer effective within pK_a ± 1

## Biological Buffers

**Blood pH = 7.4 (tightly controlled):**

**Major buffer:** H₂CO₃/HCO₃⁻
- pK_a = 6.1
- CO₂(g) ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
- Respiratory system controls CO₂
- Kidneys control HCO₃⁻

**Phosphate buffer:** H₂PO₄⁻/HPO₄²⁻
- pK_a = 7.2
- Important in cells

**Protein buffers:** Hemoglobin, albumin
`,
      exampleProblems: {
        create: [
          {
            question: 'Calculate the pH of a buffer containing 0.50 M CH₃COOH and 0.30 M CH₃COO⁻. K_a = 1.8 × 10⁻⁵.',
            solution: `**Given:**
- [CH₃COOH] = 0.50 M (weak acid)
- [CH₃COO⁻] = 0.30 M (conjugate base)
- K_a = 1.8 × 10⁻⁵

**This is a buffer!** HA/A⁻ system

---

**Calculate pK_a:**

$$\\text{pK}_a = -\\log K_a$$

$$\\text{pK}_a = -\\log(1.8 \\times 10^{-5})$$

$$\\text{pK}_a = 4.74$$

---

**Use Henderson-Hasselbalch:**

$$\\text{pH} = \\text{pK}_a + \\log\\frac{[A^-]}{[HA]}$$

$$\\text{pH} = 4.74 + \\log\\frac{[CH_3COO^-]}{[CH_3COOH]}$$

$$\\text{pH} = 4.74 + \\log\\frac{0.30}{0.50}$$

$$\\text{pH} = 4.74 + \\log(0.60)$$

$$\\text{pH} = 4.74 + (-0.22)$$

$$\\text{pH} = 4.52$$

**Answer:** pH = 4.52

---

**Interpretation:**

**pH < pK_a** because [acid] > [base]

**Ratio:** 0.30/0.50 = 0.60
- More acid than base
- pH slightly below pK_a
- Still effective buffer (ratio between 0.1 and 10)

**Buffer range:** 4.74 ± 1 = 3.74 to 5.74
- pH 4.52 is well within range ✓`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A buffer is made by mixing 50.0 mL of 0.40 M NH₃ with 50.0 mL of 0.20 M NH₄Cl. K_b(NH₃) = 1.8 × 10⁻⁵. (a) Calculate the pH. (b) Calculate pH after adding 5.0 mL of 0.10 M HCl.',
            solution: `**Given:**
- 50.0 mL of 0.40 M NH₃
- 50.0 mL of 0.20 M NH₄Cl
- K_b = 1.8 × 10⁻⁵

---

**(a) Initial pH**

**Find K_a for NH₄⁺:**

$$K_a = \\frac{K_w}{K_b} = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$$

$$\\text{pK}_a = -\\log(5.6 \\times 10^{-10}) = 9.25$$

**Calculate total volume:** 50.0 + 50.0 = 100.0 mL

**Calculate concentrations:**

$$[NH_3] = \\frac{(0.40)(50.0)}{100.0} = 0.20 \\text{ M}$$

$$[NH_4^+] = \\frac{(0.20)(50.0)}{100.0} = 0.10 \\text{ M}$$

**Henderson-Hasselbalch:**

$$\\text{pH} = \\text{pK}_a + \\log\\frac{[NH_3]}{[NH_4^+]}$$

$$\\text{pH} = 9.25 + \\log\\frac{0.20}{0.10}$$

$$\\text{pH} = 9.25 + \\log(2.0)$$

$$\\text{pH} = 9.25 + 0.30$$

$$\\text{pH} = 9.55$$

**Answer (a):** pH = 9.55

---

**(b) After adding HCl**

**Calculate moles before HCl:**
- NH₃: 0.20 M × 0.100 L = 0.020 mol
- NH₄⁺: 0.10 M × 0.100 L = 0.010 mol

**Moles HCl added:**
- 0.10 M × 0.005 L = 0.00050 mol H⁺

**Reaction:** NH₃ + H⁺ → NH₄⁺

| | NH₃ | H⁺ | NH₄⁺ |
|-|---------|-----------|---------|
| Before | 0.020 | 0.00050 | 0.010 |
| Change | -0.00050 | -0.00050 | +0.00050 |
| After | 0.01950 | 0 | 0.01050 |

**New volume:** 100.0 + 5.0 = 105.0 mL = 0.105 L

**New concentrations:**

$$[NH_3] = \\frac{0.01950}{0.105} = 0.186 \\text{ M}$$

$$[NH_4^+] = \\frac{0.01050}{0.105} = 0.100 \\text{ M}$$

**New pH:**

$$\\text{pH} = 9.25 + \\log\\frac{0.186}{0.100}$$

$$\\text{pH} = 9.25 + \\log(1.86)$$

$$\\text{pH} = 9.25 + 0.27$$

$$\\text{pH} = 9.52$$

**Answer (b):** pH = 9.52

---

**Summary:**

**Before HCl:** pH = 9.55
**After HCl:** pH = 9.52
**Change:** ΔpH = -0.03 (tiny!)

**Without buffer:** 5.0 mL of 0.10 M HCl in 100 mL water → pH ≈ 2

**Buffer resists pH change!**`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'What mass of sodium acetate (CH₃COONa, MW = 82.0 g/mol) must be added to 500.0 mL of 0.20 M acetic acid to create a buffer with pH = 5.00? K_a = 1.8 × 10⁻⁵.',
            solution: `**Given:**
- Volume acetic acid: 500.0 mL = 0.500 L
- [CH₃COOH] = 0.20 M
- Desired pH = 5.00
- K_a = 1.8 × 10⁻⁵
- MW(CH₃COONa) = 82.0 g/mol

---

**Calculate pK_a:**

$$\\text{pK}_a = -\\log(1.8 \\times 10^{-5}) = 4.74$$

---

**Use Henderson-Hasselbalch to find ratio:**

$$\\text{pH} = \\text{pK}_a + \\log\\frac{[A^-]}{[HA]}$$

$$5.00 = 4.74 + \\log\\frac{[CH_3COO^-]}{[CH_3COOH]}$$

$$5.00 - 4.74 = \\log\\frac{[CH_3COO^-]}{[CH_3COOH]}$$

$$0.26 = \\log\\frac{[CH_3COO^-]}{[CH_3COOH]}$$

**Take antilog:**

$$\\frac{[CH_3COO^-]}{[CH_3COOH]} = 10^{0.26} = 1.82$$

---

**Calculate [CH₃COO⁻]:**

$$[CH_3COO^-] = 1.82 \\times [CH_3COOH]$$

$$[CH_3COO^-] = 1.82 \\times 0.20$$

$$[CH_3COO^-] = 0.364 \\text{ M}$$

---

**Calculate moles needed:**

**Moles CH₃COO⁻:**

$$n = M \\times V = 0.364 \\text{ mol/L} \\times 0.500 \\text{ L}$$

$$n = 0.182 \\text{ mol}$$

---

**Calculate mass:**

**CH₃COONa → CH₃COO⁻ + Na⁺** (1:1 ratio)

**Moles CH₃COONa needed = 0.182 mol**

$$\\text{mass} = n \\times \\text{MW}$$

$$\\text{mass} = 0.182 \\text{ mol} \\times 82.0 \\text{ g/mol}$$

$$\\text{mass} = 14.9 \\text{ g}$$

**Answer:** 15 g of sodium acetate

---

**Verify:**

**After adding salt:**
- [CH₃COOH] = 0.20 M
- [CH₃COO⁻] = 0.364 M

$$\\text{pH} = 4.74 + \\log\\frac{0.364}{0.20}$$

$$\\text{pH} = 4.74 + 0.26 = 5.00$$ ✓

**Note:** Assumes volume change negligible when adding solid`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', bufferTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: bufferTopic.id,
        front: 'What is a buffer and what are the two types of buffer systems?',
        back: 'Buffer: solution resisting pH change when acid/base added. Type 1: weak acid (HA) + conjugate base (A⁻). Type 2: weak base (B) + conjugate acid (BH⁺). Need significant amounts of BOTH components.'
      },
      {
        topicId: bufferTopic.id,
        front: 'How does a buffer resist pH change when acid or base is added?',
        back: 'Add H⁺: conjugate base neutralizes (A⁻ + H⁺ → HA). Add OH⁻: weak acid neutralizes (HA + OH⁻ → A⁻ + H₂O). Both components present to handle either addition. pH stays relatively constant.'
      },
      {
        topicId: bufferTopic.id,
        front: 'What is the Henderson-Hasselbalch equation for weak acid buffers?',
        back: 'pH = pK_a + log([A⁻]/[HA]) or pH = pK_a + log([base]/[acid]). When [A⁻]=[HA], pH=pK_a (best buffering). pK_a = -log(K_a). Quick way to calculate buffer pH.'
      },
      {
        topicId: bufferTopic.id,
        front: 'What is buffer capacity and what factors affect it?',
        back: 'Capacity: amount of acid/base buffer can neutralize. Factors: 1) Higher concentrations = more capacity, 2) Ratio 1:1 = maximum capacity. Effective range: pK_a ± 1. Best buffer: pH ≈ pK_a with high concentrations.'
      },
      {
        topicId: bufferTopic.id,
        front: 'How do you calculate pH change when strong acid/base added to buffer?',
        back: '1) Calculate initial moles (use moles not M!), 2) Neutralization reaction (completion), 3) Calculate new moles after reaction, 4) Find new concentrations (÷volume), 5) Use Henderson-Hasselbalch. Key: strong acid/base reactions go to completion.'
      },
      {
        topicId: bufferTopic.id,
        front: 'What are the two methods for preparing buffer solutions?',
        back: 'Method 1: Mix weak acid + its salt (e.g., CH₃COOH + NaCH₃COO). Method 2: Partial neutralization - start with weak acid, add strong base to create conjugate base (or vice versa). Both create HA/A⁻ system.'
      },
      {
        topicId: bufferTopic.id,
        front: 'How do you choose the right buffer for a desired pH?',
        back: 'Select acid with pK_a ≈ desired pH. Buffer effective within pK_a ± 1. Examples: pH 7 → H₂PO₄⁻/HPO₄²⁻ (pK_a=7.2). pH 4.7 → CH₃COOH/CH₃COO⁻ (pK_a=4.76). Match pK_a to target pH.'
      },
      {
        topicId: bufferTopic.id,
        front: 'What are the major buffer systems in human blood?',
        back: 'Blood pH = 7.4 (tightly controlled). Major: H₂CO₃/HCO₃⁻ (pK_a=6.1) - respiratory system controls CO₂, kidneys control HCO₃⁻. Also: H₂PO₄⁻/HPO₄²⁻ (pK_a=7.2) in cells, protein buffers (hemoglobin).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', bufferTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Acids and Bases (Part 3)!');
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
