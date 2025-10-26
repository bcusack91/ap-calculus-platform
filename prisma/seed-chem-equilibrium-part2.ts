import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Equilibrium (Consolidated Part 2)...');

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

  // Topic 2: Reaction Quotient and Le Chatelier
  const leChatelierTopic = await prisma.topic.create({
    data: {
      title: 'Reaction Quotient and Le Chatelier\'s Principle',
      slug: 'reaction-quotient-le-chatelier',
      description: 'Use Q to predict reaction direction and apply Le Chatelier\'s principle to predict equilibrium shifts.',
      order: existingTopics + 1,
      categoryId: equilibriumCategory.id,
      isPremium: false,
      textContent: `
# Reaction Quotient and Le Chatelier's Principle

## Reaction Quotient (Q)

**Q:** Same form as K, but uses any concentrations (not just equilibrium)

**For reaction:** aA + bB ⇌ cC + dD

$$Q = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

**Difference from K:**
- K: only at equilibrium
- Q: at any moment
- Same expression, different values

## Comparing Q and K

**Predicting direction:**

| Comparison | Direction | What happens |
|------------|-----------|--------------|
| **Q < K** | Forward → | Make more products |
| **Q = K** | Equilibrium | No net change |
| **Q > K** | Reverse ← | Make more reactants |

**Memory aid:**
- Q < K: Need more products (go forward)
- Q > K: Too many products (go backward)

**Example:**

For N₂ + 3H₂ ⇌ 2NH₃, K = 0.50

**If [N₂] = 1.0, [H₂] = 1.0, [NH₃] = 0.50:**

$$Q = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3} = \\frac{(0.50)^2}{(1.0)(1.0)^3} = 0.25$$

Q (0.25) < K (0.50) → Forward reaction proceeds

## Le Chatelier's Principle

**"When stress applied to equilibrium, system shifts to relieve stress"**

**Types of stress:**
1. Concentration changes
2. Pressure/volume changes
3. Temperature changes

## Concentration Changes

**Add reactant:**
- Shift right (toward products)
- Consume added reactant
- Make more products

**Add product:**
- Shift left (toward reactants)
- Consume added product
- Make more reactants

**Remove reactant:**
- Shift left (toward reactants)
- Replace removed reactant

**Remove product:**
- Shift right (toward products)
- Replace removed product

**Example:** N₂(g) + 3H₂(g) ⇌ 2NH₃(g)

| Change | Shift | Why |
|--------|-------|-----|
| Add N₂ | Right → | Consume excess N₂ |
| Remove H₂ | Left ← | Replace removed H₂ |
| Add NH₃ | Left ← | Consume excess NH₃ |

**Note:** Adding/removing solid or pure liquid has NO effect

## Pressure/Volume Changes

**For reactions with gases:**

### Decrease Volume (Increase Pressure):
- Shifts toward side with **fewer moles of gas**
- Relieves pressure by reducing gas molecules

### Increase Volume (Decrease Pressure):
- Shifts toward side with **more moles of gas**
- Fills space with more gas molecules

**Example:** N₂(g) + 3H₂(g) ⇌ 2NH₃(g)

**Count moles gas:**
- Left: 1 + 3 = 4 moles
- Right: 2 moles

**Increase pressure:** Shift right (fewer moles)
**Decrease pressure:** Shift left (more moles)

**Special case:** Δn = 0 (equal moles)
- Pressure change: **no shift**
- Example: H₂ + I₂ ⇌ 2HI (2 moles each side)

### Adding Inert Gas:

**At constant volume:** No shift (partial pressures unchanged)
**At constant pressure:** Volume increases, shift to more moles

## Temperature Changes

**Temperature is different - actually changes K value!**

### Exothermic Reaction (ΔH < 0):

**Think of heat as product:**

A + B ⇌ C + D + heat

**Increase T:** Shift left (consume heat, favor reactants)
- K decreases

**Decrease T:** Shift right (produce heat, favor products)
- K increases

### Endothermic Reaction (ΔH > 0):

**Think of heat as reactant:**

A + B + heat ⇌ C + D

**Increase T:** Shift right (use heat, favor products)
- K increases

**Decrease T:** Shift left (less heat available, favor reactants)
- K decreases

**Summary:**

| Reaction Type | Increase T | K value |
|---------------|------------|---------|
| Exothermic (ΔH < 0) | Shift left | Decreases |
| Endothermic (ΔH > 0) | Shift right | Increases |

## Catalyst Effect

**Catalyst:**
- Speeds up both forward AND reverse reactions equally
- **NO shift in equilibrium position**
- **NO change in K**
- Reaches equilibrium faster

## Summary of Le Chatelier

**Effect on equilibrium position:**

| Stress | Equilibrium Shift | K Changes? |
|--------|-------------------|------------|
| Add/remove substance | Yes | No |
| Change pressure/volume | Yes (if Δn ≠ 0) | No |
| Change temperature | Yes | **YES** |
| Add catalyst | No shift | No |

**Only temperature changes K value!**
`,
      exampleProblems: {
        create: [
          {
            question: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), K_c = 4.0 at 1000 K. At a certain time, [SO₂] = 0.40 M, [O₂] = 0.30 M, [SO₃] = 1.2 M. Calculate Q and predict the direction of reaction.',
            solution: `**Given:**
- Reaction: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)
- K_c = 4.0
- Current: [SO₂] = 0.40 M, [O₂] = 0.30 M, [SO₃] = 1.2 M

---

**Calculate Q:**

**K/Q expression:**

$$Q = \\frac{[\\ce{SO3}]^2}{[\\ce{SO2}]^2[\\ce{O2}]}$$

**Substitute values:**

$$Q = \\frac{(1.2)^2}{(0.40)^2(0.30)}$$

$$Q = \\frac{1.44}{(0.16)(0.30)}$$

$$Q = \\frac{1.44}{0.048}$$

$$Q = 30$$

**Answer:** Q = 30

---

**Compare Q and K:**

Q = 30, K = 4.0

**Q > K**

**Meaning:**
- Too many products (SO₃) relative to equilibrium
- System will shift LEFT (reverse)
- Consume SO₃, make more SO₂ and O₂

**Direction:** ← Reverse (toward reactants)

---

**Summary:**

| Value | Amount |
|-------|--------|
| Q | 30 |
| K | 4.0 |
| **Comparison** | **Q > K** |
| **Direction** | **Reverse (←)** |

**Until Q = K, reaction proceeds in reverse direction.**`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'For the equilibrium: N₂O₄(g) ⇌ 2NO₂(g), ΔH° = +57.2 kJ. Predict how each change affects the equilibrium: (a) Add N₂O₄, (b) Decrease volume, (c) Increase temperature, (d) Add catalyst.',
            solution: `**Reaction:** N₂O₄(g) ⇌ 2NO₂(g)
**ΔH° = +57.2 kJ (endothermic)**

---

**(a) Add N₂O₄**

**Type:** Concentration change

**Effect:**
- Adding reactant
- Shifts RIGHT (toward products)
- System consumes excess N₂O₄
- Makes more NO₂

**Answer:** Shifts right, increases [NO₂]

---

**(b) Decrease volume**

**Type:** Pressure/volume change

**Count moles gas:**
- Left: 1 mole N₂O₄
- Right: 2 moles NO₂
- Δn = 2 - 1 = +1

**Decrease volume = increase pressure**

**Effect:**
- Shifts toward **fewer moles**
- Shifts LEFT (toward N₂O₄)
- Relieves pressure by reducing total moles

**Answer:** Shifts left, decreases [NO₂]

---

**(c) Increase temperature**

**Type:** Temperature change (changes K!)

**Reaction is endothermic:** Heat is reactant

N₂O₄(g) + heat ⇌ 2NO₂(g)

**Increase T:**
- More heat available
- Shifts RIGHT (toward products)
- Uses added heat
- K increases

**Answer:** Shifts right, increases [NO₂], K increases

---

**(d) Add catalyst**

**Type:** Catalyst

**Effect:**
- Speeds up both forward and reverse equally
- **NO shift in position**
- **NO change in K**
- Reaches equilibrium faster only

**Answer:** No shift, no change in concentrations or K

---

**Summary:**

| Change | Direction | [NO₂] | K Changes? |
|--------|-----------|-------|------------|
| (a) Add N₂O₄ | Right → | Increases | No |
| (b) Decrease volume | Left ← | Decreases | No |
| (c) Increase T | Right → | Increases | **Yes (↑)** |
| (d) Add catalyst | No shift | No change | No |`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'For the exothermic reaction: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH° = -198 kJ. To maximize SO₃ production, should you use: (a) high or low temperature? (b) high or low pressure? (c) Explain any trade-offs.',
            solution: `**Reaction:** 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)
**ΔH° = -198 kJ (exothermic)**

**Goal:** Maximize SO₃ production

---

**(a) Temperature choice**

**Reaction is exothermic:** Heat is product

2SO₂(g) + O₂(g) ⇌ 2SO₃(g) + heat

**Low temperature:**
- Shifts RIGHT (toward products)
- Produces heat (relieves cold stress)
- Favors SO₃ formation
- K is larger at low T

**High temperature:**
- Shifts LEFT (toward reactants)
- Consumes heat
- Favors SO₂ and O₂
- K is smaller at high T

**Answer (a):** **Low temperature** favors SO₃

---

**(b) Pressure choice**

**Count moles gas:**
- Left: 2 + 1 = 3 moles
- Right: 2 moles
- Δn = 2 - 3 = -1

**High pressure:**
- Shifts toward **fewer moles**
- Shifts RIGHT (toward SO₃)
- Relieves pressure
- Favors products

**Low pressure:**
- Shifts toward more moles
- Shifts LEFT
- Favors reactants

**Answer (b):** **High pressure** favors SO₃

---

**(c) Trade-offs**

**Temperature trade-off:**

**Low T (thermodynamics):**
- ✓ Better yield (more SO₃)
- ✓ Higher K
- ✗ Reaction VERY slow
- ✗ Takes too long industrially

**High T (kinetics):**
- ✗ Lower yield (less SO₃)
- ✗ Lower K
- ✓ Much faster reaction
- ✓ Reaches equilibrium quickly

**Industrial compromise:**
- Use **moderate temperature** (~450°C)
- Acceptable yield
- Reasonable rate
- Use catalyst (V₂O₅) to speed up
- Multiple passes through reactor

**Pressure:**
- High pressure favored (1-2 atm)
- No major trade-off
- Equipment cost for very high pressure

---

**Summary - Contact Process for SO₃:**

| Factor | Ideal (equilibrium) | Industrial choice | Reason |
|--------|---------------------|-------------------|---------|
| Temperature | Low | Moderate (450°C) | Balance yield vs rate |
| Pressure | High | Moderate (1-2 atm) | Good yield, low cost |
| Catalyst | Yes | V₂O₅ | Speeds reaction at moderate T |

**Key lesson:** Industrial processes balance thermodynamics (K) and kinetics (rate)!`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', leChatelierTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: leChatelierTopic.id,
        front: 'What is the reaction quotient Q and how does it differ from K?',
        back: 'Q: same form as K but uses any concentrations (not just equilibrium). Q = [products]^coeff/[reactants]^coeff. K is only at equilibrium. Q predicts direction: Q<K go forward, Q=K equilibrium, Q>K go reverse.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'How do you use Q to predict reaction direction?',
        back: 'Compare Q to K: Q < K → forward (make products), Q = K → equilibrium (no change), Q > K → reverse (make reactants). Memory: Q<K need more products, Q>K too many products.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'What is Le Chatelier\'s Principle?',
        back: 'When stress applied to equilibrium, system shifts to relieve stress. Stresses: concentration, pressure/volume, temperature. System opposes the change by shifting equilibrium position.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'How do concentration changes affect equilibrium?',
        back: 'Add reactant → shift right (consume it). Add product → shift left. Remove reactant → shift left (replace it). Remove product → shift right. Note: Adding/removing pure solids or liquids has NO effect.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'How do pressure/volume changes affect gas equilibria?',
        back: 'Decrease volume (↑ pressure) → shift to fewer moles gas. Increase volume (↓ pressure) → shift to more moles gas. If Δn=0 (equal moles both sides) → no shift. Adding inert gas at constant V: no shift.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'How does temperature affect equilibrium differently than other stresses?',
        back: 'Temperature actually CHANGES K value! Other stresses don\'t. Exothermic (ΔH<0): increase T shifts left, K decreases. Endothermic (ΔH>0): increase T shifts right, K increases. Think heat as product/reactant.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'For exothermic reaction, how does temperature change affect equilibrium?',
        back: 'Exothermic: heat is product (A+B⇌C+heat). Increase T: shift left (consume heat), K decreases. Decrease T: shift right (produce heat), K increases. Low T favors products but reaction slower.'
      },
      {
        topicId: leChatelierTopic.id,
        front: 'What effect does a catalyst have on equilibrium?',
        back: 'NO effect on equilibrium position or K value. Speeds forward and reverse equally. Reaches equilibrium FASTER but same final concentrations. Only affects kinetics, not thermodynamics.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', leChatelierTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Equilibrium (Part 2)!');
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
