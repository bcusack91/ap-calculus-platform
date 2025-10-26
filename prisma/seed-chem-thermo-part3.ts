import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Thermodynamics (Consolidated Part 3)...');

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

  // Topic 3: Gibbs Free Energy
  const gibbsTopic = await prisma.topic.create({
    data: {
      title: 'Gibbs Free Energy and Spontaneity',
      slug: 'gibbs-free-energy',
      description: 'Master Gibbs free energy, predict reaction spontaneity, and understand the relationship between ΔG, ΔH, ΔS, and temperature.',
      order: existingTopics + 1,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# Gibbs Free Energy and Spontaneity

## Gibbs Free Energy (G)

**Free energy:** Energy available to do work

**Gibbs equation:**

$$\\Delta G = \\Delta H - T\\Delta S$$

**Units:**
- ΔG: kJ/mol
- ΔH: kJ/mol
- T: K (always Kelvin!)
- ΔS: J/(mol·K) → convert to kJ/(mol·K)

**Key conversion:** 1 kJ = 1000 J

## Spontaneity Criterion

**ΔG predicts spontaneity:**

| ΔG | Process |
|----|---------|
| **ΔG < 0** | Spontaneous (favorable) |
| **ΔG = 0** | At equilibrium |
| **ΔG > 0** | Non-spontaneous (unfavorable) |

**Important:** Spontaneous ≠ fast
- Thermodynamics (ΔG) vs kinetics (rate)
- Diamonds → graphite: spontaneous but infinitely slow

## Temperature Dependence

**Four cases from ΔG = ΔH - TΔS:**

### Case 1: ΔH < 0, ΔS > 0
- **ΔG < 0 at all temperatures**
- Spontaneous always
- Example: Combustion reactions

### Case 2: ΔH > 0, ΔS < 0
- **ΔG > 0 at all temperatures**
- Never spontaneous
- Example: Reverse of combustion

### Case 3: ΔH < 0, ΔS < 0
- **ΔG < 0 at low T**
- **ΔG > 0 at high T**
- Spontaneous only when cold

### Case 4: ΔH > 0, ΔS > 0
- **ΔG > 0 at low T**
- **ΔG < 0 at high T**
- Spontaneous only when hot
- Example: Melting, vaporization

## Summary Table

| ΔH | ΔS | ΔG | Spontaneous? |
|----|----|----|--------------|
| - | + | Always - | Always |
| + | - | Always + | Never |
| - | - | - at low T, + at high T | Low T only |
| + | + | + at low T, - at high T | High T only |

## Calculating ΔG°_{rxn}

### Method 1: From ΔH° and ΔS°

$$\\Delta G° = \\Delta H° - T\\Delta S°$$

**Watch units!** Convert ΔS° from J/K to kJ/K

### Method 2: From ΔG°_f values

$$\\Delta G°_{\\text{rxn}} = \\sum n\\Delta G°_f(\\text{products}) - \\sum n\\Delta G°_f(\\text{reactants})$$

**Like ΔH°_f:**
- Elements in standard state: ΔG°_f = 0
- Tabulated for compounds

## Standard Free Energy of Formation

**ΔG°_f:** Free energy change to form 1 mole from elements (25°C, 1 atm)

**Examples:**
- H₂(g): ΔG°_f = 0
- H₂O(l): ΔG°_f = -237.1 kJ/mol
- CO₂(g): ΔG°_f = -394.4 kJ/mol

## Temperature and Equilibrium

**At equilibrium:** ΔG = 0

$$0 = \\Delta H - T_{\\text{eq}}\\Delta S$$

$$T_{\\text{eq}} = \\frac{\\Delta H}{\\Delta S}$$

**This gives transition temperature:**
- Below: one direction spontaneous
- Above: reverse direction spontaneous
- At T_eq: equilibrium (both directions equal)

## Free Energy and Equilibrium Constant

**Relationship:**

$$\\Delta G° = -RT\\ln K$$

**Or:**

$$\\Delta G = \\Delta G° + RT\\ln Q$$

**Where:**
- R = 8.314 J/(mol·K)
- K = equilibrium constant
- Q = reaction quotient

**Interpretation:**
- ΔG° < 0: K > 1 (products favored)
- ΔG° = 0: K = 1 (equal amounts)
- ΔG° > 0: K < 1 (reactants favored)

## Coupling Reactions

**Non-spontaneous reaction can be driven by spontaneous one:**

**If ΔG₁ > 0 (unfavorable):**
- Couple with reaction where ΔG₂ < 0
- If |ΔG₂| > ΔG₁, overall ΔG < 0

**Example: ATP in biology**
- ATP → ADP + Pi: ΔG° = -30.5 kJ/mol
- Drives many unfavorable biological reactions
`,
      exampleProblems: {
        create: [
          {
            question: 'For the reaction N₂(g) + 3H₂(g) → 2NH₃(g), ΔH° = -92.2 kJ and ΔS° = -198.7 J/K. (a) Calculate ΔG° at 25°C. (b) Is the reaction spontaneous? (c) At what temperature does ΔG = 0?',
            solution: `**Given:**
- ΔH° = -92.2 kJ
- ΔS° = -198.7 J/K = -0.1987 kJ/K
- T = 25°C = 298 K

---

**(a) Calculate ΔG° at 298 K**

**Use:** ΔG° = ΔH° - TΔS°

**Convert ΔS° to kJ/K:**
ΔS° = -198.7 J/K × (1 kJ/1000 J) = -0.1987 kJ/K

**Calculate:**
$$\\Delta G° = -92.2 - (298)(-0.1987)$$
$$\\Delta G° = -92.2 + 59.2$$
$$\\Delta G° = -33.0 \\text{ kJ}$$

**Answer (a):** ΔG° = -33.0 kJ

---

**(b) Is reaction spontaneous at 25°C?**

**ΔG° = -33.0 kJ < 0**

**Answer (b):** Yes, spontaneous at 25°C (ΔG° < 0)

---

**(c) Temperature where ΔG = 0**

**At equilibrium:** ΔG = 0

$$0 = \\Delta H° - T_{\\text{eq}}\\Delta S°$$

$$T_{\\text{eq}} = \\frac{\\Delta H°}{\\Delta S°}$$

**Use consistent units (both kJ):**

$$T_{\\text{eq}} = \\frac{-92.2 \\text{ kJ}}{-0.1987 \\text{ kJ/K}}$$

$$T_{\\text{eq}} = 464 \\text{ K}$$

**Convert to °C:** 464 - 273 = 191°C

**Answer (c):** T = 464 K or 191°C

---

**Interpretation:**

**Signs:** ΔH° < 0 (exothermic), ΔS° < 0 (less disorder)

**Temperature effect:**
- Low T: ΔG < 0 (spontaneous) - ΔH term dominates
- High T: ΔG > 0 (non-spontaneous) - TΔS term dominates
- Below 464 K: spontaneous
- Above 464 K: non-spontaneous

**This explains why Haber process runs at moderate temperature!**`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate ΔG°_{rxn} for: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l) using ΔG°_f values (kJ/mol): C₃H₈(g) = -23.5, CO₂(g) = -394.4, H₂O(l) = -237.1, O₂(g) = 0',
            solution: `**Reaction:** C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l)

**ΔG°_f values (kJ/mol):**
- C₃H₈(g): -23.5
- O₂(g): 0 (element)
- CO₂(g): -394.4
- H₂O(l): -237.1

---

**Formula:**

$$\\Delta G°_{\\text{rxn}} = \\sum n\\Delta G°_f(\\text{products}) - \\sum n\\Delta G°_f(\\text{reactants})$$

---

**Products:**

3 mol CO₂: 3(-394.4) = -1183.2 kJ
4 mol H₂O: 4(-237.1) = -948.4 kJ

**Sum:** -1183.2 + (-948.4) = -2131.6 kJ

---

**Reactants:**

1 mol C₃H₈: 1(-23.5) = -23.5 kJ
5 mol O₂: 5(0) = 0 kJ

**Sum:** -23.5 kJ

---

**Calculate ΔG°_{rxn}:**

$$\\Delta G°_{\\text{rxn}} = -2131.6 - (-23.5)$$
$$\\Delta G°_{\\text{rxn}} = -2131.6 + 23.5$$
$$\\Delta G°_{\\text{rxn}} = -2108.1 \\text{ kJ}$$

**Answer:** ΔG°_{rxn} = -2108 kJ

---

**Interpretation:**

**Highly negative ΔG°:**
- Very spontaneous
- This is combustion of propane
- Large energy release
- Why propane is excellent fuel

**Compare to other fuels:**
- All combustions have large negative ΔG°
- Spontaneous and exothermic
- Release useful energy`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'For the vaporization of water at 100°C: H₂O(l) → H₂O(g), ΔH°_{vap} = 40.7 kJ/mol. (a) Calculate ΔS°_{vap}. (b) Calculate ΔG° at 90°C, 100°C, and 110°C. (c) Explain results.',
            solution: `**Given:**
- Process: H₂O(l) → H₂O(g)
- ΔH°_{vap} = 40.7 kJ/mol
- Normal boiling point: 100°C = 373 K

---

**(a) Calculate ΔS°_{vap}**

**At boiling point:** ΔG = 0 (equilibrium)

$$\\Delta G = \\Delta H - T\\Delta S = 0$$

$$\\Delta S = \\frac{\\Delta H}{T}$$

**At T = 373 K:**

$$\\Delta S°_{\\text{vap}} = \\frac{40.7 \\text{ kJ/mol}}{373 \\text{ K}}$$

$$\\Delta S°_{\\text{vap}} = 0.109 \\text{ kJ/(mol·K)} = 109 \\text{ J/(mol·K)}$$

**Answer (a):** ΔS°_{vap} = 109 J/(mol·K)

---

**(b) Calculate ΔG° at different temperatures**

**Use:** ΔG° = ΔH° - TΔS°
- ΔH° = 40.7 kJ/mol
- ΔS° = 0.109 kJ/(mol·K)

**At 90°C (363 K):**
$$\\Delta G° = 40.7 - (363)(0.109)$$
$$\\Delta G° = 40.7 - 39.6 = +1.1 \\text{ kJ/mol}$$

**At 100°C (373 K):**
$$\\Delta G° = 40.7 - (373)(0.109)$$
$$\\Delta G° = 40.7 - 40.7 = 0 \\text{ kJ/mol}$$

**At 110°C (383 K):**
$$\\Delta G° = 40.7 - (383)(0.109)$$
$$\\Delta G° = 40.7 - 41.7 = -1.0 \\text{ kJ/mol}$$

**Answer (b):**
- 90°C: ΔG° = +1.1 kJ/mol
- 100°C: ΔG° = 0 kJ/mol
- 110°C: ΔG° = -1.0 kJ/mol

---

**(c) Explain results**

**At 90°C (below boiling point):**
- ΔG° = +1.1 kJ (positive)
- **Non-spontaneous**
- Liquid is stable phase
- Water won't boil at 1 atm

**At 100°C (boiling point):**
- ΔG° = 0
- **Equilibrium**
- Liquid ⇌ gas
- Both phases coexist at 1 atm
- Normal boiling point!

**At 110°C (above boiling point):**
- ΔG° = -1.0 kJ (negative)
- **Spontaneous**
- Gas is stable phase
- Water vaporizes spontaneously
- Can't maintain liquid at 1 atm

---

**General principle:**

**Phase transitions:**
- ΔH > 0, ΔS > 0 (liquid → gas)
- Low T: ΔG > 0 (liquid favored)
- T = T_{boiling}: ΔG = 0 (equilibrium)
- High T: ΔG < 0 (gas favored)

**Boiling point is where ΔG = 0 for vaporization at 1 atm**`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', gibbsTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: gibbsTopic.id,
        front: 'What is the Gibbs free energy equation and how does it predict spontaneity?',
        back: 'ΔG = ΔH - TΔS. ΔG < 0: spontaneous (favorable). ΔG = 0: equilibrium. ΔG > 0: non-spontaneous (unfavorable). Note: spontaneous ≠ fast (thermodynamics vs kinetics).'
      },
      {
        topicId: gibbsTopic.id,
        front: 'What are the four cases of spontaneity based on ΔH and ΔS signs?',
        back: 'ΔH<0, ΔS>0: always spontaneous. ΔH>0, ΔS<0: never spontaneous. ΔH<0, ΔS<0: spontaneous at low T. ΔH>0, ΔS>0: spontaneous at high T (like phase changes).'
      },
      {
        topicId: gibbsTopic.id,
        front: 'How do you calculate ΔG° from ΔH° and ΔS°? What unit conversion is critical?',
        back: 'ΔG° = ΔH° - TΔS°. CRITICAL: Convert ΔS° from J/K to kJ/K (divide by 1000) to match ΔH° units. T must be in Kelvin. Common mistake: forgetting conversion!'
      },
      {
        topicId: gibbsTopic.id,
        front: 'How do you calculate ΔG°_{rxn} from ΔG°_f values?',
        back: 'ΔG°_{rxn} = Σn·ΔG°_f(products) - Σn·ΔG°_f(reactants). Like ΔH° method. Elements in standard state: ΔG°_f = 0. Use coefficients from balanced equation.'
      },
      {
        topicId: gibbsTopic.id,
        front: 'How do you find the temperature where a reaction changes from spontaneous to non-spontaneous?',
        back: 'At equilibrium: ΔG = 0, so 0 = ΔH - T_eq·ΔS. Rearrange: T_eq = ΔH/ΔS. Use consistent units (both kJ). Below T_eq: one direction; above: reverse direction spontaneous.'
      },
      {
        topicId: gibbsTopic.id,
        front: 'What is the relationship between ΔG° and equilibrium constant K?',
        back: 'ΔG° = -RT ln(K). R = 8.314 J/(mol·K). ΔG° < 0: K > 1 (products favored). ΔG° = 0: K = 1. ΔG° > 0: K < 1 (reactants favored).'
      },
      {
        topicId: gibbsTopic.id,
        front: 'Why is ΔG = 0 at a phase transition (like boiling point)?',
        back: 'At phase transition under standard pressure: system at equilibrium (liquid ⇌ gas). Both phases coexist. ΔG = 0 defines the transition temperature. Example: water boils at 100°C because ΔG_vap = 0 at that T.'
      },
      {
        topicId: gibbsTopic.id,
        front: 'What is reaction coupling and how does it relate to ΔG?',
        back: 'Couple non-spontaneous reaction (ΔG₁ > 0) with spontaneous one (ΔG₂ < 0). If |ΔG₂| > ΔG₁, overall ΔG < 0 → drives unfavorable reaction. Example: ATP hydrolysis drives biological reactions.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', gibbsTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Thermodynamics (Part 3)!');
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
