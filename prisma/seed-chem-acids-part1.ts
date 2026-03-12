import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Acids and Bases (Consolidated Part 1)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Create or find Acids and Bases category
  let acidsBasesCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Acids and Bases'
    }
  });

  if (!acidsBasesCategory) {
    const maxOrder = await prisma.category.findFirst({
      where: { courseId: chemistryCourse.id },
      orderBy: { order: 'desc' }
    });

    acidsBasesCategory = await prisma.category.create({
      data: {
        name: 'Acids and Bases',
        slug: 'acids-and-bases',
        description: 'Master acid-base theories, pH calculations, buffers, and titrations.',
        order: (maxOrder?.order ?? 0) + 1,
        courseId: chemistryCourse.id
      }
    });

    console.log('✓ Created category:', acidsBasesCategory.name);
  }

  // Topic 1: Acid-Base Theories and pH
  const phTopic = await prisma.topic.create({
    data: {
      title: 'Acid-Base Theories and pH Scale',
      slug: 'acid-base-theories-ph',
      description: 'Understand Arrhenius, Brønsted-Lowry, and Lewis theories; master pH, pOH, and the pH scale.',
      order: 1,
      categoryId: acidsBasesCategory.id,
      isPremium: false,
      textContent: `
# Acid-Base Theories and pH Scale

## Arrhenius Theory

**Simplest definition (aqueous solutions):**

**Acid:** Produces H⁺ in water
- HCl → H⁺ + Cl⁻

**Base:** Produces OH⁻ in water
- NaOH → Na⁺ + OH⁻

**Limitation:** Only for aqueous solutions

## Brønsted-Lowry Theory

**More general definition:**

**Acid:** Proton (H⁺) donor
**Base:** Proton (H⁺) acceptor

**Example:**

$$\\ce{HCl + H2O -> H3O^+ + Cl^-}$$

- HCl: acid (donates H⁺)
- H₂O: base (accepts H⁺)

**Conjugate acid-base pairs:**

$$\\ce{HA + B <=> A^- + HB^+}$$

- HA/A⁻: conjugate pair (differ by H⁺)
- B/HB⁺: conjugate pair

**Example:** NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
- NH₃/NH₄⁺: conjugate pair
- H₂O/OH⁻: conjugate pair

## Lewis Theory

**Most general:**

**Acid:** Electron pair acceptor
**Base:** Electron pair donor

**Example:** BF₃ + NH₃ → F₃B-NH₃
- BF₃: Lewis acid (accepts electron pair)
- NH₃: Lewis base (donates electron pair)

**All Brønsted acids/bases are Lewis, but not vice versa**

## Autoionization of Water

**Water self-ionizes:**

$$\\ce{2H2O <=> H3O^+ + OH^-}$$

**Simplified:** H₂O ⇌ H⁺ + OH⁻

**Ion product constant (K_w):**

$$K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ at 25°C}$$

**Key relationships:**
- Pure water: [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M
- Acidic: [H⁺] > [OH⁻]
- Basic: [H⁺] < [OH⁻]
- Always: [H⁺][OH⁻] = 1.0 × 10⁻¹⁴

## pH Scale

**pH definition:**

$$\\text{pH} = -\\log[H^+]$$

**pOH definition:**

$$\\text{pOH} = -\\log[OH^-]$$

**Relationship:**

$$\\text{pH} + \\text{pOH} = 14.00 \\text{ at 25°C}$$

**pH Scale interpretation:**

| pH | [H⁺] (M) | Type |
|----|----------|------|
| 0 | 1 | Very acidic |
| 1 | 0.1 | Strong acid |
| 7 | 1.0 × 10⁻⁷ | Neutral |
| 13 | 1.0 × 10⁻¹³ | Strong base |
| 14 | 1.0 × 10⁻¹⁴ | Very basic |

**Ranges:**
- pH < 7: Acidic
- pH = 7: Neutral
- pH > 7: Basic

## Calculating pH

**From [H⁺]:**

$$\\text{pH} = -\\log[H^+]$$

**Example:** [H⁺] = 1.0 × 10⁻³ M

pH = -log(1.0 × 10⁻³) = 3.00

**From [OH⁻]:**

1. Calculate pOH = -log[OH⁻]
2. pH = 14.00 - pOH

**Example:** [OH⁻] = 1.0 × 10⁻⁴ M

pOH = -log(1.0 × 10⁻⁴) = 4.00
pH = 14.00 - 4.00 = 10.00

## Calculating [H⁺] from pH

**Inverse relationship:**

$$[H^+] = 10^{-\\text{pH}}$$

**Example:** pH = 5.00

[H⁺] = 10⁻⁵·⁰⁰ = 1.0 × 10⁻⁵ M

## Strong Acids and Bases

**Strong acids (completely ionize):**
- HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄

**For strong monoprotic acid:**
- [H⁺] = [acid]

**Example:** 0.010 M HCl
- [H⁺] = 0.010 M
- pH = -log(0.010) = 2.00

**Strong bases (completely dissociate):**
- Group 1A hydroxides: LiOH, NaOH, KOH
- Group 2A hydroxides: Ca(OH)₂, Ba(OH)₂, Sr(OH)₂

**For strong base:**
- [OH⁻] = [base] × (number of OH⁻)

**Example:** 0.010 M NaOH
- [OH⁻] = 0.010 M
- pOH = 2.00
- pH = 12.00

**Example:** 0.010 M Ca(OH)₂
- [OH⁻] = 2 × 0.010 = 0.020 M
- pOH = -log(0.020) = 1.70
- pH = 14.00 - 1.70 = 12.30

## Significant Figures in pH

**pH has decimal places = sig figs in [H⁺]**

**Example:** [H⁺] = 2.5 × 10⁻³ M (2 sig figs)
- pH = 2.60 (2 decimal places)

**The digits before decimal point come from exponent**
`,
      exampleProblems: {
        create: [
          {
            question: 'Identify the conjugate acid-base pairs in: HF(aq) + NH₃(aq) ⇌ F⁻(aq) + NH₄⁺(aq)',
            solution: `**Reaction:** HF(aq) + NH₃(aq) ⇌ F⁻(aq) + NH₄⁺(aq)

---

**Identify acids and bases:**

**Left side (reactants):**
- **HF:** Has H⁺ to donate → **acid**
- **NH₃:** Can accept H⁺ → **base**

**Right side (products):**
- **F⁻:** Accepted H⁺ to become HF → **base**
- **NH₄⁺:** Donated H⁺ to become NH₃ → **acid**

---

**Conjugate pairs differ by one H⁺:**

**Pair 1: HF and F⁻**
- HF → F⁻ + H⁺
- HF is acid, F⁻ is its conjugate base
- **HF/F⁻ conjugate acid-base pair**

**Pair 2: NH₃ and NH₄⁺**
- NH₃ + H⁺ → NH₄⁺
- NH₃ is base, NH₄⁺ is its conjugate acid
- **NH₃/NH₄⁺ conjugate acid-base pair**

---

**Summary:**

| Species | Role | Conjugate |
|---------|------|-----------|
| HF | Acid | F⁻ (conjugate base) |
| NH₃ | Base | NH₄⁺ (conjugate acid) |
| F⁻ | Conjugate base | of HF |
| NH₄⁺ | Conjugate acid | of NH₃ |

**Answers:**
- **Pair 1:** HF/F⁻
- **Pair 2:** NH₃/NH₄⁺

---

**Pattern:** Conjugate pairs always differ by exactly one proton (H⁺)`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate the pH and pOH of a solution with [OH⁻] = 3.5 × 10⁻⁴ M at 25°C.',
            solution: `**Given:**
- [OH⁻] = 3.5 × 10⁻⁴ M
- T = 25°C (K_w = 1.0 × 10⁻¹⁴)

---

**Calculate pOH:**

$$\\text{pOH} = -\\log[OH^-]$$

$$\\text{pOH} = -\\log(3.5 \\times 10^{-4})$$

**Using calculator:**

$$\\text{pOH} = -(\\log 3.5 + \\log 10^{-4})$$

$$\\text{pOH} = -(0.544 - 4)$$

$$\\text{pOH} = -(-3.456)$$

$$\\text{pOH} = 3.456$$

**Round to 2 decimal places (2 sig figs in 3.5):**

**pOH = 3.46**

---

**Calculate pH:**

**Use relationship:**

$$\\text{pH} + \\text{pOH} = 14.00$$

$$\\text{pH} = 14.00 - \\text{pOH}$$

$$\\text{pH} = 14.00 - 3.46$$

$$\\text{pH} = 10.54$$

---

**Verify using [H⁺]:**

**From K_w:**

$$[H^+] = \\frac{K_w}{[OH^-]} = \\frac{1.0 \\times 10^{-14}}{3.5 \\times 10^{-4}}$$

$$[H^+] = 2.86 \\times 10^{-11} \\text{ M}$$

**pH:**

$$\\text{pH} = -\\log(2.86 \\times 10^{-11}) = 10.54$$ ✓

---

**Answers:**
- **pOH = 3.46**
- **pH = 10.54**

**Interpretation:** pH > 7, solution is basic`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A solution of Ba(OH)₂ has pH = 12.60 at 25°C. Calculate the concentration of Ba(OH)₂.',
            solution: `**Given:**
- Compound: Ba(OH)₂ (strong base)
- pH = 12.60
- T = 25°C

**Note:** Ba(OH)₂ → Ba²⁺ + 2OH⁻ (2 OH⁻ per formula unit)

---

**Calculate pOH:**

$$\\text{pH} + \\text{pOH} = 14.00$$

$$\\text{pOH} = 14.00 - 12.60 = 1.40$$

---

**Calculate [OH⁻]:**

$$[OH^-] = 10^{-\\text{pOH}}$$

$$[OH^-] = 10^{-1.40}$$

$$[OH^-] = 3.98 \\times 10^{-2} \\text{ M}$$

$$[OH^-] = 0.0398 \\text{ M}$$

---

**Calculate [Ba(OH)₂]:**

**Stoichiometry:** Ba(OH)₂ → Ba²⁺ + 2OH⁻

**Each Ba(OH)₂ produces 2 OH⁻:**

$$[Ba(OH)_2] = \\frac{[OH^-]}{2}$$

$$[Ba(OH)_2] = \\frac{0.0398}{2}$$

$$[Ba(OH)_2] = 0.0199 \\text{ M}$$

**Answer:** [Ba(OH)₂] = 0.020 M or 2.0 × 10⁻² M

---

**Verify:**

**If [Ba(OH)₂] = 0.020 M:**
- [OH⁻] = 2 × 0.020 = 0.040 M
- pOH = -log(0.040) = 1.40
- pH = 14.00 - 1.40 = 12.60 ✓

---

**Key point:** Remember to account for stoichiometry! 

Ba(OH)₂ produces **2 moles OH⁻** per mole compound.`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', phTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: phTopic.id,
        front: 'Compare Arrhenius, Brønsted-Lowry, and Lewis acid-base theories.',
        back: 'Arrhenius: acid produces H⁺, base produces OH⁻ (aqueous only). Brønsted-Lowry: acid donates H⁺, base accepts H⁺ (more general). Lewis: acid accepts e⁻ pair, base donates e⁻ pair (most general). Each includes previous.'
      },
      {
        topicId: phTopic.id,
        front: 'What is a conjugate acid-base pair?',
        back: 'Two species that differ by one H⁺. Example: HF/F⁻ or NH₃/NH₄⁺. When acid loses H⁺, forms conjugate base. When base gains H⁺, forms conjugate acid. Always differ by exactly one proton.'
      },
      {
        topicId: phTopic.id,
        front: 'What is K_w and what does it tell us about water?',
        back: 'K_w = [H⁺][OH⁻] = 1.0×10⁻¹⁴ at 25°C. Autoionization constant of water. Pure water: [H⁺]=[OH⁻]=1.0×10⁻⁷ M. Acidic: [H⁺]>[OH⁻]. Basic: [H⁺]<[OH⁻]. Product always 10⁻¹⁴.'
      },
      {
        topicId: phTopic.id,
        front: 'Define pH and pOH and state their relationship.',
        back: 'pH = -log[H⁺], pOH = -log[OH⁻]. Relationship: pH + pOH = 14.00 (at 25°C). pH < 7: acidic. pH = 7: neutral. pH > 7: basic. Can convert between pH, pOH, [H⁺], [OH⁻].'
      },
      {
        topicId: phTopic.id,
        front: 'How do you calculate pH from [H⁺] and vice versa?',
        back: 'pH = -log[H⁺]. Reverse: [H⁺] = 10^(-pH). Example: [H⁺]=1.0×10⁻³ → pH=3.00. Example: pH=5.00 → [H⁺]=1.0×10⁻⁵ M. Remember sig figs: decimal places in pH = sig figs in [H⁺].'
      },
      {
        topicId: phTopic.id,
        front: 'List the strong acids and how to calculate their pH.',
        back: 'Strong acids: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄. Completely ionize. For monoprotic: [H⁺]=[acid]. Example: 0.010 M HCl → [H⁺]=0.010 M → pH=2.00. 100% dissociation.'
      },
      {
        topicId: phTopic.id,
        front: 'List the strong bases and how to calculate pH from Ba(OH)₂.',
        back: 'Strong bases: Group 1A hydroxides (NaOH, KOH), Group 2A (Ca(OH)₂, Ba(OH)₂, Sr(OH)₂). Ba(OH)₂ → Ba²⁺ + 2OH⁻. [OH⁻]=2×[Ba(OH)₂]. Find pOH, then pH=14-pOH. Account for stoichiometry!'
      },
      {
        topicId: phTopic.id,
        front: 'What are the significant figure rules for pH?',
        back: 'Decimal places in pH = sig figs in [H⁺]. Example: [H⁺]=2.5×10⁻³ (2 sig figs) → pH=2.60 (2 decimal places). Digits before decimal come from exponent, don\'t count as sig figs.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', phTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Acids and Bases (Part 1)!');
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
