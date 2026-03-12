import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Thermodynamics (Consolidated Part 2)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Thermodynamics category
  const thermoCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Thermodynamics'
    }
  });

  if (!thermoCategory) {
    throw new Error('Thermodynamics category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: thermoCategory.id }
  });

  // Topic 2: Entropy and Second Law
  const entropyTopic = await prisma.topic.create({
    data: {
      title: 'Entropy and the Second Law',
      slug: 'entropy-second-law',
      description: 'Understand entropy as disorder, predict entropy changes, and learn the second and third laws of thermodynamics.',
      order: existingTopics + 1,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# Entropy and the Second Law

## What is Entropy?

**Entropy (S):** Measure of disorder or randomness in a system
- Units: J/(mol·K)
- Symbol: S (absolute), ΔS (change)

**Higher entropy = more disorder:**
- More ways to arrange particles
- More dispersed energy
- More random motion

**Nature favors increasing entropy**

## Second Law of Thermodynamics

**For universe:**

$$\\Delta S_{\\text{universe}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} > 0$$

**Spontaneous processes:** ΔS_{universe} > 0
- Entropy of universe always increases
- Can't reverse without increasing entropy elsewhere

## Predicting Entropy Changes

**ΔS > 0 (entropy increases):**
1. **Phase changes:** solid → liquid → gas
2. **Dissolving:** Solid/liquid dissolves in solvent
3. **More gas molecules:** Δn_{gas} > 0
4. **Temperature increase:** Same substance, higher T
5. **Larger molecules:** More complex structure

**ΔS < 0 (entropy decreases):**
- Opposite of above
- Gas → liquid → solid
- Precipitation
- Fewer gas molecules

### Comparing Entropy

**States of matter (same substance):**

$$S_{\\text{gas}} > S_{\\text{liquid}} > S_{\\text{solid}}$$

**Example:** S(H₂O, g) > S(H₂O, l) > S(H₂O, s)

**Temperature:**
- Higher T → higher S
- More thermal motion

**Molecular complexity:**
- More atoms → more S
- Example: S(C₃H₈) > S(CH₄)

**Number of particles:**
- More moles → more S
- Example: 2 mol > 1 mol

## Calculating ΔS°_{rxn}

**Standard entropy change:**

$$\\Delta S°_{\\text{rxn}} = \\sum nS°(\\text{products}) - \\sum nS°(\\text{reactants})$$

**Similar to ΔH°, but:**
- S° values never zero (even for elements)
- Third Law: S = 0 at 0 K for perfect crystal

**Example values:**
- H₂O(l): S° = 69.9 J/(mol·K)
- CO₂(g): S° = 213.7 J/(mol·K)
- O₂(g): S° = 205.0 J/(mol·K)

## Rules for Predicting Sign of ΔS

**Check for gas molecules:**

**If Δn_{gas} > 0:** ΔS° > 0 (likely)
**If Δn_{gas} < 0:** ΔS° < 0 (likely)
**If Δn_{gas} = 0:** Check phase changes, complexity

**Examples:**

1. **CaCO₃(s) → CaO(s) + CO₂(g)**
   - 0 gas → 1 gas
   - Δn_{gas} = +1
   - **ΔS° > 0** ✓

2. **2H₂(g) + O₂(g) → 2H₂O(l)**
   - 3 gas → 0 gas  
   - Δn_{gas} = -3
   - **ΔS° < 0** ✓

3. **N₂(g) + 3H₂(g) → 2NH₃(g)**
   - 4 gas → 2 gas
   - Δn_{gas} = -2
   - **ΔS° < 0** ✓

## Third Law of Thermodynamics

**Third Law:** Perfect crystal at 0 K has S = 0

**Consequences:**
- Absolute entropies can be measured
- S° always ≥ 0
- Can't reach absolute zero (Nernst)

## Entropy and Temperature

**Heating increases entropy:**

$$\\Delta S = \\frac{q_{\\text{rev}}}{T}$$

**At constant pressure:**

$$\\Delta S = \\frac{nC_p\\Delta T}{T}$$

**Phase changes:**

$$\\Delta S_{\\text{phase}} = \\frac{\\Delta H_{\\text{phase}}}{T}$$

**Example:** Melting ice at 0°C (273 K)

$$\\Delta S_{\\text{fus}} = \\frac{\\Delta H_{\\text{fus}}}{T} = \\frac{6.01 \\text{ kJ/mol}}{273 \\text{ K}} = 22.0 \\text{ J/(mol·K)}$$
`,
      exampleProblems: {
        create: [
          {
            question: 'Predict the sign of ΔS° for each: (a) 2SO₂(g) + O₂(g) → 2SO₃(g), (b) NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq), (c) CO₂(s) → CO₂(g)',
            solution: `**Strategy:** Look for phase changes and gas molecule changes

---

**(a) 2SO₂(g) + O₂(g) → 2SO₃(g)**

**Count gas molecules:**
- Reactants: 2 + 1 = 3 moles gas
- Products: 2 moles gas
- **Δn_{gas} = 2 - 3 = -1**

**Fewer gas molecules → less disorder**

**ΔS° < 0 (negative)**

---

**(b) NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq)**

**Phase change:** solid → aqueous ions

**Considerations:**
- Solid is ordered crystal
- Aqueous ions are mobile, dispersed
- 1 particle → 2 particles (more disorder)

**Dissolving increases disorder**

**ΔS° > 0 (positive)**

---

**(c) CO₂(s) → CO₂(g)**

**Phase change:** solid → gas (sublimation)

**Solid:** Ordered, fixed positions
**Gas:** Random motion, highly dispersed

**Major increase in disorder**

**ΔS° > 0 (positive, large)**

---

**Summary:**

| Reaction | ΔS° Sign | Reason |
|----------|----------|--------|
| (a) 2SO₂ + O₂ → 2SO₃ | **Negative** | 3 gas → 2 gas (Δn = -1) |
| (b) NH₄NO₃(s) → ions(aq) | **Positive** | Solid → dissolved ions |
| (c) CO₂(s) → CO₂(g) | **Positive** | Solid → gas (large increase) |`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate ΔS°_{rxn} for: 2H₂(g) + O₂(g) → 2H₂O(l). Given S° values (J/mol·K): H₂(g) = 130.6, O₂(g) = 205.0, H₂O(l) = 69.9',
            solution: `**Reaction:** 2H₂(g) + O₂(g) → 2H₂O(l)

**Given S° values (J/mol·K):**
- H₂(g): 130.6
- O₂(g): 205.0
- H₂O(l): 69.9

---

**Formula:**

$$\\Delta S°_{\\text{rxn}} = \\sum nS°(\\text{products}) - \\sum nS°(\\text{reactants})$$

---

**Calculate products:**

2 mol H₂O(l): 2(69.9) = 139.8 J/K

**Sum products:** 139.8 J/K

---

**Calculate reactants:**

2 mol H₂(g): 2(130.6) = 261.2 J/K
1 mol O₂(g): 1(205.0) = 205.0 J/K

**Sum reactants:** 261.2 + 205.0 = 466.2 J/K

---

**Calculate ΔS°_{rxn}:**

$$\\Delta S°_{\\text{rxn}} = 139.8 - 466.2$$
$$\\Delta S°_{\\text{rxn}} = -326.4 \\text{ J/K}$$

**Answer:** ΔS°_{rxn} = -326 J/K

---

**Interpretation:**

**Negative ΔS°:**
- Makes sense! 3 gas molecules → 2 liquid molecules
- Δn_{gas} = 0 - 3 = -3
- Large decrease in disorder
- Gases (high entropy) → liquid (lower entropy)

**Yet reaction is spontaneous:**
- Very exothermic (ΔH° = -572 kJ)
- Entropy decrease offset by large energy release
- ΔG° determines spontaneity (next topic!)`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Calculate the entropy change when 1.00 mol of ice melts at 0°C. ΔH_{fus} = 6.01 kJ/mol.',
            solution: `**Given:**
- n = 1.00 mol ice
- T = 0°C = 273 K (constant during phase change)
- ΔH_{fus} = 6.01 kJ/mol = 6010 J/mol

**Process:** H₂O(s) → H₂O(l) at 273 K

---

**For phase change at constant T:**

$$\\Delta S = \\frac{q_{\\text{rev}}}{T} = \\frac{\\Delta H_{\\text{phase}}}{T}$$

**At equilibrium (melting point):** process is reversible

---

**Calculate ΔS_{fus}:**

$$\\Delta S_{\\text{fus}} = \\frac{\\Delta H_{\\text{fus}}}{T}$$

$$\\Delta S_{\\text{fus}} = \\frac{6010 \\text{ J/mol}}{273 \\text{ K}}$$

$$\\Delta S_{\\text{fus}} = 22.0 \\text{ J/(mol·K)}$$

**For 1.00 mol:**

$$\\Delta S = 1.00 \\text{ mol} \\times 22.0 \\text{ J/(mol·K)} = 22.0 \\text{ J/K}$$

**Answer:** ΔS = 22.0 J/K

---

**Interpretation:**

**Positive ΔS:**
- Expected! Solid → liquid
- Ice: ordered crystal lattice
- Water: molecules can move more freely
- Disorder increases

**Magnitude:**
- ΔS_{fus} always positive
- ΔS_{vap} much larger (liquid → gas)
- ΔS_{sub} = ΔS_{fus} + ΔS_{vap}

---

**General pattern for H₂O:**

$$\\Delta S_{\\text{sub}} > \\Delta S_{\\text{vap}} > \\Delta S_{\\text{fus}} > 0$$

**All phase changes from more ordered → less ordered have ΔS > 0**`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', entropyTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: entropyTopic.id,
        front: 'What is entropy and what does the second law of thermodynamics state?',
        back: 'Entropy (S): measure of disorder/randomness. Units: J/(mol·K). Second Law: ΔS_universe > 0 for spontaneous processes. Entropy of universe always increases. ΔS_univ = ΔS_sys + ΔS_surr.'
      },
      {
        topicId: entropyTopic.id,
        front: 'What changes lead to an increase in entropy (ΔS > 0)?',
        back: '1) Phase: solid→liquid→gas, 2) Dissolving solids, 3) More gas molecules (Δn_gas > 0), 4) Temperature increase, 5) Breaking large molecule into smaller pieces, 6) Increase in particles.'
      },
      {
        topicId: entropyTopic.id,
        front: 'How do you predict sign of ΔS° using gas molecules?',
        back: 'Count gas moles: Δn_gas = moles_products - moles_reactants. If Δn_gas > 0: ΔS° > 0 (likely). If Δn_gas < 0: ΔS° < 0 (likely). Gas phase has highest entropy.'
      },
      {
        topicId: entropyTopic.id,
        front: 'How do you calculate ΔS°_{rxn} from standard entropy values?',
        back: 'ΔS°_{rxn} = Σn·S°(products) - Σn·S°(reactants). Similar to ΔH° but S° values are NEVER zero (even for elements). Third Law: S = 0 only at 0 K for perfect crystal.'
      },
      {
        topicId: entropyTopic.id,
        front: 'Compare entropy for states of matter: solid, liquid, gas.',
        back: 'S_gas >> S_liquid > S_solid. Gas: most random, highest entropy. Liquid: moderate entropy, some movement. Solid: ordered, lowest entropy. Example: S(H₂O,g) > S(H₂O,l) > S(H₂O,s).'
      },
      {
        topicId: entropyTopic.id,
        front: 'What is the third law of thermodynamics?',
        back: 'Perfect crystal at absolute zero (0 K) has S = 0. Consequences: 1) Absolute entropies can be measured, 2) S° always ≥ 0, 3) Cannot reach absolute zero (Nernst). Allows tabulation of S° values.'
      },
      {
        topicId: entropyTopic.id,
        front: 'How do you calculate entropy change for a phase transition?',
        back: 'At phase change (constant T): ΔS = ΔH_phase/T. Example: melting ice at 273 K, ΔS_fus = ΔH_fus/273. Always positive for solid→liquid→gas. Reversible at equilibrium temperature.'
      },
      {
        topicId: entropyTopic.id,
        front: 'Why does dissolving a solid in water usually increase entropy?',
        back: 'Solid: ordered crystal lattice (low S). Dissolved: ions/molecules dispersed, mobile in solution (high S). 1 particle → many particles. Exception: some dissolutions decrease S_surr if endothermic.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', entropyTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Thermodynamics (Part 2)!');
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
