import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Equilibrium (Consolidated Part 4)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Equilibrium category
  const equilibriumCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Chemical Equilibrium'
    }
  });

  if (!equilibriumCategory) {
    throw new Error('Equilibrium category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: equilibriumCategory.id }
  });

  // Topic 4: Solubility Equilibria
  const solubilityTopic = await prisma.topic.create({
    data: {
      title: 'Solubility Equilibria and K_sp',
      slug: 'solubility-ksp',
      description: 'Understand solubility product constant (K_sp), predict precipitation, and calculate solubility from K_sp.',
      order: existingTopics + 1,
      categoryId: equilibriumCategory.id,
      isPremium: false,
      textContent: `
# Solubility Equilibria and K_sp

## Solubility Equilibrium

**Dissolving ionic compound:**

$$\\ce{AB(s) <=> A^+(aq) + B^-(aq)}$$

**At equilibrium:** Saturated solution
- Solid in contact with dissolved ions
- Rate dissolving = rate precipitating

## Solubility Product Constant (K_sp)

**For general ionic solid:**

$$\\ce{M_aX_b(s) <=> aM^{b+}(aq) + bX^{a-}(aq)}$$

**K_sp expression:**

$$K_{sp} = [M^{b+}]^a[X^{a-}]^b$$

**Key points:**
- Pure solid NOT included (like all heterogeneous K)
- Only dissolved ions
- Temperature dependent
- Called solubility product

**Examples:**

1. **AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)**

$$K_{sp} = [Ag^+][Cl^-]$$

2. **PbI₂(s) ⇌ Pb²⁺(aq) + 2I⁻(aq)**

$$K_{sp} = [Pb^{2+}][I^-]^2$$

3. **Ca₃(PO₄)₂(s) ⇌ 3Ca²⁺(aq) + 2PO₄³⁻(aq)**

$$K_{sp} = [Ca^{2+}]^3[PO_4^{3-}]^2$$

## Molar Solubility

**Molar solubility (s):** Maximum moles that dissolve per liter

**Different from K_sp:**
- K_sp = equilibrium constant
- s = concentration (mol/L)

**Relationship depends on stoichiometry**

### Example: AgCl

**AgCl(s) ⇌ Ag⁺ + Cl⁻**

If solubility = s:
- [Ag⁺] = s
- [Cl⁻] = s

**K_sp = s·s = s²**

### Example: PbI₂

**PbI₂(s) ⇌ Pb²⁺ + 2I⁻**

If solubility = s:
- [Pb²⁺] = s
- [I⁻] = 2s (stoichiometry!)

**K_sp = s·(2s)² = 4s³**

## Calculating s from K_sp

**General strategy:**

1. Write dissolution equation
2. Express ion concentrations in terms of s
3. Write K_sp expression
4. Substitute and solve for s

**Example:** Calculate s for Ag₂CrO₄ given K_sp = 1.1 × 10⁻¹²

**Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻**

**If s = solubility:**
- [Ag⁺] = 2s
- [CrO₄²⁻] = s

**K_sp = [Ag⁺]²[CrO₄²⁻] = (2s)²(s) = 4s³**

$$1.1 \\times 10^{-12} = 4s^3$$

$$s^3 = 2.75 \\times 10^{-13}$$

$$s = 6.5 \\times 10^{-5} \\text{ M}$$

## Ion Product (Q_sp)

**Like Q for solubility:**

$$Q_{sp} = [M^{b+}]^a[X^{a-}]^b$$

**Use current concentrations (not equilibrium)**

**Predicting precipitation:**

| Comparison | Result |
|------------|--------|
| **Q_sp < K_sp** | Unsaturated, no precipitate |
| **Q_sp = K_sp** | Saturated, equilibrium |
| **Q_sp > K_sp** | Supersaturated, **precipitate forms** |

**Example:** Will AgCl precipitate?

**Given:** K_sp(AgCl) = 1.8 × 10⁻¹⁰
**Mix:** [Ag⁺] = 1.0 × 10⁻⁴ M, [Cl⁻] = 1.0 × 10⁻⁴ M

**Calculate Q_sp:**

$$Q_{sp} = [Ag^+][Cl^-] = (1.0 \\times 10^{-4})(1.0 \\times 10^{-4}) = 1.0 \\times 10^{-8}$$

**Compare:** Q_sp (1.0 × 10⁻⁸) > K_sp (1.8 × 10⁻¹⁰)

**Result:** Yes, AgCl precipitates!

## Common Ion Effect

**Adding ion already in equilibrium:**

**Shifts equilibrium by Le Chatelier**

**Example:** AgCl in NaCl solution

AgCl(s) ⇌ Ag⁺ + Cl⁻

**Add NaCl (source of Cl⁻):**
- Increases [Cl⁻]
- Shifts left (less dissolving)
- **Decreases solubility**

**Common ion decreases solubility**

## Complex Ion Formation

**Metal ions can form complex ions:**

**Increases solubility**

**Example:** AgCl in NH₃

$$\\ce{Ag^+ + 2NH3 <=> Ag(NH3)2^+}$$

**Removes Ag⁺ from solution:**
- Shifts dissolution right
- More AgCl dissolves
- **Increases solubility**

## pH and Solubility

**For salts of weak acids/bases:**

**pH affects solubility**

**Example:** CaF₂ in acidic solution

CaF₂(s) ⇌ Ca²⁺ + 2F⁻

**In acid:** H⁺ + F⁻ → HF
- Removes F⁻
- Shifts right
- **More soluble in acid**

**Rule:**
- Salts of weak acids: more soluble in acid
- Salts of weak bases: more soluble in base

## Selective Precipitation

**Separate ions by precipitation:**

**Strategy:**
1. Calculate K_sp for each compound
2. Find [anion] needed to precipitate each
3. Add reagent slowly
4. First compound precipitates first

**Example:** Separate Ag⁺ and Pb²⁺ using Cl⁻

**Given:**
- K_sp(AgCl) = 1.8 × 10⁻¹⁰
- K_sp(PbCl₂) = 1.7 × 10⁻⁵

**AgCl precipitates at much lower [Cl⁻]**

Can separate by controlling [Cl⁻]
`,
      exampleProblems: {
        create: [
          {
            question: 'The K_sp of AgCl is 1.8 × 10⁻¹⁰ at 25°C. Calculate the molar solubility of AgCl in pure water.',
            solution: `**Given:**
- Compound: AgCl
- K_sp = 1.8 × 10⁻¹⁰

---

**Write dissolution equation:**

$$\\ce{AgCl(s) <=> Ag^+(aq) + Cl^-(aq)}$$

---

**Set up ICE table:**

Let s = molar solubility (mol/L that dissolve)

| | AgCl(s) | Ag⁺ | Cl⁻ |
|-|---------|---------|---------|
| I | solid | 0 | 0 |
| C | -s | +s | +s |
| E | solid | s | s |

**At equilibrium:**
- [Ag⁺] = s
- [Cl⁻] = s

---

**Write K_sp expression:**

$$K_{sp} = [Ag^+][Cl^-]$$

**Substitute:**

$$1.8 \\times 10^{-10} = (s)(s) = s^2$$

---

**Solve for s:**

$$s^2 = 1.8 \\times 10^{-10}$$

$$s = \\sqrt{1.8 \\times 10^{-10}}$$

$$s = 1.3 \\times 10^{-5} \\text{ M}$$

**Answer:** Molar solubility = 1.3 × 10⁻⁵ M

---

**Interpretation:**

**Very small solubility:**
- AgCl is "insoluble" (K_sp very small)
- Only 1.3 × 10⁻⁵ mol/L dissolves
- This is why AgCl precipitates easily

**In grams per liter:**
- Molar mass AgCl = 143.5 g/mol
- s = (1.3 × 10⁻⁵ mol/L)(143.5 g/mol) = 1.9 × 10⁻³ g/L

Very low solubility!`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'The K_sp of PbI₂ is 7.9 × 10⁻⁹. Calculate: (a) the molar solubility in pure water, (b) the molar solubility in 0.10 M NaI solution.',
            solution: `**Given:**
- Compound: PbI₂
- K_sp = 7.9 × 10⁻⁹

**Dissolution:** PbI₂(s) ⇌ Pb²⁺(aq) + 2I⁻(aq)

---

**(a) Molar solubility in pure water**

**Let s = solubility:**

| | PbI₂(s) | Pb²⁺ | 2I⁻ |
|-|---------|---------|---------|
| I | solid | 0 | 0 |
| C | -s | +s | +2s |
| E | solid | s | 2s |

**Note:** For every 1 Pb²⁺, get 2 I⁻

**K_sp expression:**

$$K_{sp} = [Pb^{2+}][I^-]^2$$

$$7.9 \\times 10^{-9} = (s)(2s)^2$$

$$7.9 \\times 10^{-9} = s \\cdot 4s^2$$

$$7.9 \\times 10^{-9} = 4s^3$$

$$s^3 = \\frac{7.9 \\times 10^{-9}}{4} = 1.975 \\times 10^{-9}$$

$$s = \\sqrt[3]{1.975 \\times 10^{-9}}$$

$$s = 1.25 \\times 10^{-3} \\text{ M}$$

**Answer (a):** s = 1.3 × 10⁻³ M in pure water

---

**(b) Molar solubility in 0.10 M NaI**

**NaI provides common ion (I⁻):**
- NaI → Na⁺ + I⁻
- [I⁻]₀ = 0.10 M (from NaI)

**ICE table:**

| | PbI₂(s) | Pb²⁺ | 2I⁻ |
|-|---------|---------|------------|
| I | solid | 0 | 0.10 |
| C | -s | +s | +2s |
| E | solid | s | 0.10+2s |

**K_sp expression:**

$$7.9 \\times 10^{-9} = (s)(0.10 + 2s)^2$$

**Small s approximation:**

Since K_sp is very small, s << 0.10

**Assume:** 0.10 + 2s ≈ 0.10

$$7.9 \\times 10^{-9} = (s)(0.10)^2$$

$$7.9 \\times 10^{-9} = s(0.010)$$

$$s = \\frac{7.9 \\times 10^{-9}}{0.010}$$

$$s = 7.9 \\times 10^{-7} \\text{ M}$$

**Check:** 2s = 1.6 × 10⁻⁶ << 0.10 ✓ (approximation valid)

**Answer (b):** s = 7.9 × 10⁻⁷ M in 0.10 M NaI

---

**Comparison:**

**Pure water:** s = 1.3 × 10⁻³ M
**0.10 M NaI:** s = 7.9 × 10⁻⁷ M

**Common ion effect:**
- Solubility decreased by factor of ~1600!
- I⁻ from NaI shifts equilibrium left
- Much less PbI₂ dissolves`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A solution contains 0.010 M Ag⁺ and 0.010 M Pb²⁺. If NaCl is slowly added, which compound precipitates first? K_sp(AgCl) = 1.8 × 10⁻¹⁰, K_sp(PbCl₂) = 1.7 × 10⁻⁵.',
            solution: `**Given:**
- [Ag⁺] = 0.010 M
- [Pb²⁺] = 0.010 M
- K_sp(AgCl) = 1.8 × 10⁻¹⁰
- K_sp(PbCl₂) = 1.7 × 10⁻⁵

**Adding NaCl → source of Cl⁻**

---

**Find [Cl⁻] needed to precipitate each:**

**For AgCl:** AgCl(s) ⇌ Ag⁺ + Cl⁻

**Precipitation when Q_sp = K_sp:**

$$K_{sp} = [Ag^+][Cl^-]$$

$$1.8 \\times 10^{-10} = (0.010)[Cl^-]$$

$$[Cl^-] = \\frac{1.8 \\times 10^{-10}}{0.010}$$

$$[Cl^-] = 1.8 \\times 10^{-8} \\text{ M}$$

**AgCl precipitates when [Cl⁻] ≥ 1.8 × 10⁻⁸ M**

---

**For PbCl₂:** PbCl₂(s) ⇌ Pb²⁺ + 2Cl⁻

**Precipitation when Q_sp = K_sp:**

$$K_{sp} = [Pb^{2+}][Cl^-]^2$$

$$1.7 \\times 10^{-5} = (0.010)[Cl^-]^2$$

$$[Cl^-]^2 = \\frac{1.7 \\times 10^{-5}}{0.010}$$

$$[Cl^-]^2 = 1.7 \\times 10^{-3}$$

$$[Cl^-] = \\sqrt{1.7 \\times 10^{-3}}$$

$$[Cl^-] = 0.041 \\text{ M}$$

**PbCl₂ precipitates when [Cl⁻] ≥ 0.041 M**

---

**Compare:**

**AgCl precipitates at:** [Cl⁻] = 1.8 × 10⁻⁸ M
**PbCl₂ precipitates at:** [Cl⁻] = 0.041 M

**AgCl requires much less Cl⁻!**

**Answer:** **AgCl precipitates first**

---

**Separation:**

**Can separate Ag⁺ and Pb²⁺:**

**Step 1:** Add Cl⁻ slowly to [Cl⁻] = 1.8 × 10⁻⁸ M
- AgCl precipitates
- Pb²⁺ stays in solution

**Step 2:** Continue adding to [Cl⁻] = 0.041 M
- Now PbCl₂ precipitates
- Most Ag⁺ already removed

**Window for separation:**

1.8 × 10⁻⁸ M < [Cl⁻] < 0.041 M

**In this range:**
- AgCl precipitated
- PbCl₂ still dissolved
- Successful separation!

---

**General rule:**

**Compound with smaller K_sp precipitates first** (when cations at equal concentration)`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', solubilityTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solubilityTopic.id,
        front: 'What is K_sp and how do you write the expression for M_aX_b(s)?',
        back: 'K_sp = solubility product constant for saturated solution. For M_aX_b(s) ⇌ aM^b+ + bX^a-: K_sp = [M^b+]^a[X^a-]^b. Pure solid NOT included. Only dissolved ions. Temperature dependent.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'What is molar solubility and how does it relate to K_sp?',
        back: 'Molar solubility (s) = max moles dissolving per liter (mol/L). Different from K_sp. Relationship depends on stoichiometry. Example: AgCl, K_sp = s². PbI₂, K_sp = 4s³. Must consider ion ratios.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'How do you calculate molar solubility from K_sp?',
        back: '1) Write dissolution equation, 2) Express ion concentrations in terms of s (use stoichiometry!), 3) Write K_sp expression, 4) Substitute and solve. Example: Ag₂CrO₄: [Ag⁺]=2s, [CrO₄²⁻]=s, so K_sp=4s³.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'What is Q_sp and how do you use it to predict precipitation?',
        back: 'Q_sp = ion product (like Q for solubility), uses current concentrations. Q_sp < K_sp: unsaturated, no precipitate. Q_sp = K_sp: saturated, equilibrium. Q_sp > K_sp: supersaturated, PRECIPITATE forms.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'What is the common ion effect on solubility?',
        back: 'Adding ion already in equilibrium decreases solubility (Le Chatelier). Example: AgCl in NaCl solution - extra Cl⁻ shifts left, less AgCl dissolves. Common ion always decreases solubility.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'How do complex ions affect solubility?',
        back: 'Complex ion formation increases solubility. Example: AgCl in NH₃. Ag⁺ + 2NH₃ ⇌ Ag(NH₃)₂⁺ removes Ag⁺ from solution, shifts dissolution right, more AgCl dissolves. Opposite of common ion effect.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'How does pH affect solubility of salts?',
        back: 'Salts of weak acids: more soluble in acid (H⁺ reacts with anion). Example: CaF₂ more soluble in acid (H⁺ + F⁻ → HF). Salts of weak bases: more soluble in base. Strong acid/base salts: pH independent.'
      },
      {
        topicId: solubilityTopic.id,
        front: 'How do you perform selective precipitation to separate ions?',
        back: 'Add precipitating reagent slowly. Compound with smaller K_sp precipitates first (at equal cation concentrations). Calculate [anion] for each precipitation. Control addition to window where one precipitates but not other.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', solubilityTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Equilibrium (Part 4)!');
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
