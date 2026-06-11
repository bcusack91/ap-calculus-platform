import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Thermodynamics (Consolidated Part 1)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Check if Thermodynamics category exists, if not create it
  let thermoCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Thermodynamics'
    }
  });

  if (!thermoCategory) {
    const maxOrder = await prisma.category.findFirst({
      where: { courseId: chemistryCourse.id },
      orderBy: { order: 'desc' },
      select: { order: true }
    });

    thermoCategory = await prisma.category.create({
      data: {
        name: 'Thermodynamics',
        slug: 'thermodynamics',
        description: 'Study energy changes, enthalpy, entropy, and spontaneity of chemical reactions.',
        courseId: chemistryCourse.id,
        order: (maxOrder?.order ?? 0) + 1
      }
    });
    console.log('✓ Created category: Thermodynamics');
  }

  // Topic 1: Enthalpy and Calorimetry
  const enthalpyTopic = await prisma.topic.create({
    data: {
      title: 'Enthalpy and Calorimetry',
      slug: 'enthalpy-calorimetry',
      description: 'Understand heat, enthalpy changes, calorimetry, Hess\'s law, and standard enthalpies of formation.',
      order: 1,
      categoryId: thermoCategory.id,
      isPremium: false,
      textContent: `
# Enthalpy and Calorimetry

## Energy and Heat

**System:** Part of universe we're studying
**Surroundings:** Everything else

**Energy transfer:**
- **Heat (q):** Energy transferred due to temperature difference
- **Work (w):** Energy transferred by force through distance

**First Law of Thermodynamics:**

$$\\Delta E = q + w$$

**Sign conventions:**
- **+q:** Heat absorbed by system (endothermic)
- **-q:** Heat released by system (exothermic)
- **+w:** Work done on system
- **-w:** Work done by system

## Enthalpy (H)

**Enthalpy:** Heat content at constant pressure

$$\\Delta H = q_p$$

**At constant pressure (most reactions):** Heat change = enthalpy change

**Exothermic reaction:**
- ΔH < 0 (negative)
- Releases heat to surroundings
- Products lower energy than reactants
- Feels warm

**Endothermic reaction:**
- ΔH > 0 (positive)
- Absorbs heat from surroundings
- Products higher energy than reactants
- Feels cold

## Calorimetry

**Calorimetry:** Measuring heat changes

**Heat capacity equation:**

$$q = mc\\Delta T$$

**Where:**
- q = heat (J)
- m = mass (g)
- c = specific heat capacity (J/g·°C)
- ΔT = T_{final} - T_{initial}

**Common specific heats:**
- Water: 4.18 J/(g·°C)
- Metals: 0.1-1 J/(g·°C)

### Coffee Cup Calorimeter

**For solution reactions:**
- Constant pressure (open to atmosphere)
- Measures q_p = ΔH
- Simple styrofoam cup

**Assumption:** All heat goes to solution (usually aqueous)

$$q_{\\text{solution}} = -q_{\\text{reaction}}$$

### Bomb Calorimeter

**For combustion:**
- Constant volume
- Measures ΔE (not ΔH)
- More precise, sealed container

$$q = C_{\\text{cal}}\\Delta T$$

**C_{cal}** = calorimeter constant (J/°C)

## Hess's Law

**Hess's Law:** ΔH is path independent - only depends on initial and final states

**Use:** Calculate ΔH for reaction from known ΔH values

**Rules:**
1. Reverse reaction → change sign of ΔH
2. Multiply reaction by n → multiply ΔH by n
3. Add reactions → add ΔH values

**Example approach:**
- Manipulate given equations to match target
- Add them to get target equation
- Add corresponding ΔH values

## Standard Enthalpy of Formation (ΔH°_f)

**ΔH°_f:** Enthalpy change to form 1 mole from elements in standard states

**Standard conditions:**
- 25°C (298 K)
- 1 atm pressure
- 1 M concentration

**Key rules:**
- ΔH°_f of element in standard state = 0
- ΔH°_f values tabulated for compounds

**Examples:**
- C(graphite): ΔH°_f = 0
- O₂(g): ΔH°_f = 0
- H₂O(l): ΔH°_f = -285.8 kJ/mol
- CO₂(g): ΔH°_f = -393.5 kJ/mol

## Calculating ΔH°_{rxn}

**From ΔH°_f values:**

$$\\Delta H°_{\\text{rxn}} = \\sum n\\Delta H°_f(\\text{products}) - \\sum n\\Delta H°_f(\\text{reactants})$$

**Steps:**
1. Sum (coefficient × ΔH°_f) for products
2. Sum (coefficient × ΔH°_f) for reactants
3. Subtract: products - reactants

**Shortcut:** Products minus reactants (with coefficients)

## Bond Enthalpies

**Bond enthalpy:** Energy to break 1 mole of bonds (always positive)

**Estimating ΔH_{rxn}:**

$$\\Delta H_{\\text{rxn}} = \\sum \\text{bonds broken} - \\sum \\text{bonds formed}$$

**Energy required to break bonds (positive)**
**Energy released forming bonds (negative)**

**Note:** Bond enthalpies are averages, less accurate than ΔH°_f
`,
      exampleProblems: {
        create: [
          {
            question: 'When 50.0 mL of 1.0 M HCl is mixed with 50.0 mL of 1.0 M NaOH in a coffee cup calorimeter, the temperature rises from 21.0°C to 27.5°C. Calculate ΔH for the reaction in kJ/mol. Assume solution density = 1.0 g/mL and c = 4.18 J/(g·°C).',
            solution: `**Given:**
- V_{HCl} = 50.0 mL, [HCl] = 1.0 M
- V_{NaOH} = 50.0 mL, [NaOH] = 1.0 M
- T_i = 21.0°C, T_f = 27.5°C
- Density = 1.0 g/mL, c = 4.18 J/(g·°C)

**Reaction:** HCl + NaOH → NaCl + H₂O

---

**Step 1: Calculate heat absorbed by solution**

Total volume = 50.0 + 50.0 = 100.0 mL

Mass = 100.0 mL × 1.0 g/mL = 100.0 g

ΔT = 27.5 - 21.0 = 6.5°C

$$q_{\\text{solution}} = mc\\Delta T$$
$$q_{\\text{solution}} = (100.0)(4.18)(6.5)$$
$$q_{\\text{solution}} = 2717 \\text{ J} = 2.72 \\text{ kJ}$$

---

**Step 2: Calculate heat of reaction**

$$q_{\\text{reaction}} = -q_{\\text{solution}} = -2.72 \\text{ kJ}$$

(Negative because reaction releases heat - exothermic)

---

**Step 3: Calculate moles reacted**

Moles HCl = (1.0 M)(0.050 L) = 0.050 mol
Moles NaOH = (1.0 M)(0.050 L) = 0.050 mol

**Limiting reactant:** Both 0.050 mol (1:1 ratio) → 0.050 mol reacts

---

**Step 4: Calculate ΔH per mole**

$$\\Delta H = \\frac{q_{\\text{reaction}}}{\\text{moles}} = \\frac{-2.72 \\text{ kJ}}{0.050 \\text{ mol}}$$

$$\\Delta H = -54.4 \\text{ kJ/mol}$$

**Answer:** ΔH = -54 kJ/mol (exothermic)

**Note:** Literature value is -57.1 kJ/mol - our answer is close!`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Given: (1) C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ, (2) H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ, (3) C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l), ΔH° = -1367 kJ. Use Hess\'s law to find ΔH° for: 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)',
            solution: `**Target equation:**
2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)

**Given equations:**
1. C(s) + O₂(g) → CO₂(g), ΔH° = -393.5 kJ
2. H₂(g) + ½O₂(g) → H₂O(l), ΔH° = -285.8 kJ
3. C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l), ΔH° = -1367 kJ

---

**Strategy:** Manipulate equations to match target

**Target needs:**
- 2 C(s) on left → multiply equation 1 by 2
- 3 H₂(g) on left → multiply equation 2 by 3
- C₂H₅OH(l) on right → reverse equation 3

---

**Equation 1 × 2:**
2C(s) + 2O₂(g) → 2CO₂(g)
ΔH° = 2(-393.5) = -787.0 kJ

**Equation 2 × 3:**
3H₂(g) + 3/2 O₂(g) → 3H₂O(l)
ΔH° = 3(-285.8) = -857.4 kJ

**Equation 3 reversed:**
2CO₂(g) + 3H₂O(l) → C₂H₅OH(l) + 3O₂(g)
ΔH° = -(-1367) = +1367 kJ

---

**Add all three:**

2C(s) + 2O₂(g) → 2CO₂(g)
3H₂(g) + 3/2 O₂(g) → 3H₂O(l)
2CO₂(g) + 3H₂O(l) → C₂H₅OH(l) + 3O₂(g)

**Cancel species on both sides:**
- 2CO₂(g): appears as product (eq 1) and reactant (eq 3) → cancel
- 3H₂O(l): appears as product (eq 2) and reactant (eq 3) → cancel
- O₂(g): 2 + 3/2 on left, 3 on right → net ½ on left

**Net equation:**
2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l) ✓

---

**Add ΔH° values:**

$$\\Delta H° = -787.0 + (-857.4) + 1367$$
$$\\Delta H° = -787.0 - 857.4 + 1367$$
$$\\Delta H° = -277.4 \\text{ kJ}$$

**Answer:** ΔH° = -277 kJ

**This is ΔH°_f of ethanol!**`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Calculate ΔH°_{rxn} for: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l) using ΔH°_f values: CH₄(g) = -74.8 kJ/mol, CO₂(g) = -393.5 kJ/mol, H₂O(l) = -285.8 kJ/mol, O₂(g) = 0.',
            solution: `**Reaction:** CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)

**Given ΔH°_f values:**
- CH₄(g): -74.8 kJ/mol
- O₂(g): 0 (element in standard state)
- CO₂(g): -393.5 kJ/mol
- H₂O(l): -285.8 kJ/mol

---

**Formula:**

$$\\Delta H°_{\\text{rxn}} = \\sum n\\Delta H°_f(\\text{products}) - \\sum n\\Delta H°_f(\\text{reactants})$$

---

**Products:**

1 mol CO₂: 1(-393.5) = -393.5 kJ
2 mol H₂O: 2(-285.8) = -571.6 kJ

**Sum products:** -393.5 + (-571.6) = -965.1 kJ

---

**Reactants:**

1 mol CH₄: 1(-74.8) = -74.8 kJ
2 mol O₂: 2(0) = 0 kJ

**Sum reactants:** -74.8 + 0 = -74.8 kJ

---

**Calculate ΔH°_{rxn}:**

$$\\Delta H°_{\\text{rxn}} = -965.1 - (-74.8)$$
$$\\Delta H°_{\\text{rxn}} = -965.1 + 74.8$$
$$\\Delta H°_{\\text{rxn}} = -890.3 \\text{ kJ}$$

**Answer:** ΔH°_{rxn} = -890 kJ

---

**Interpretation:**
- Highly exothermic (negative ΔH)
- This is combustion of methane (natural gas)
- Releases 890 kJ per mole CH₄ burned
- Why natural gas is good fuel

**Check:**
- Products more negative than reactants → exothermic ✓
- Magnitude makes sense for combustion ✓`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', enthalpyTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: enthalpyTopic.id,
        front: 'What is enthalpy (ΔH) and how do exothermic vs endothermic reactions differ?',
        back: 'Enthalpy: heat content at constant pressure (ΔH = q_p). Exothermic: ΔH < 0, releases heat, products lower energy, feels warm. Endothermic: ΔH > 0, absorbs heat, products higher energy, feels cold.'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'What is the heat capacity equation and what does each variable represent?',
        back: 'q = mcΔT. q = heat (J), m = mass (g), c = specific heat (J/g·°C), ΔT = T_final - T_initial. For water: c = 4.18 J/(g·°C). Used in calorimetry.'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'What is Hess\'s Law and how is it used?',
        back: 'ΔH is path independent - depends only on initial and final states. Can calculate ΔH by adding known reactions. Rules: reverse equation → change sign; multiply by n → multiply ΔH by n; add equations → add ΔH values.'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'What is standard enthalpy of formation (ΔH°_f)?',
        back: 'Enthalpy change to form 1 mole of compound from elements in standard states (25°C, 1 atm). Elements in standard state: ΔH°_f = 0. Example: C(graphite), O₂(g), H₂(g) all = 0.'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'How do you calculate ΔH°_{rxn} from ΔH°_f values?',
        back: 'ΔH°_{rxn} = Σn·ΔH°_f(products) - Σn·ΔH°_f(reactants). Sum (coefficient × ΔH°_f) for products, subtract sum for reactants. Remember coefficients and signs!'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'In coffee cup calorimetry, what is the relationship between q_solution and q_reaction?',
        back: 'q_reaction = -q_solution. Heat released by reaction is absorbed by solution (or vice versa). Calculate q_solution = mcΔT, then q_reaction = -q_solution. Divide by moles for ΔH.'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'What is the difference between coffee cup and bomb calorimeters?',
        back: 'Coffee cup: constant pressure, measures ΔH, simple, for solution reactions. Bomb: constant volume, measures ΔE, precise, sealed, for combustion. q = C_cal × ΔT for bomb.'
      },
      {
        topicId: enthalpyTopic.id,
        front: 'How do you estimate ΔH_{rxn} using bond enthalpies?',
        back: 'ΔH_{rxn} = Σ(bonds broken) - Σ(bonds formed). Breaking bonds: positive (requires energy). Forming bonds: negative (releases energy). Less accurate than ΔH°_f (uses averages).'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', enthalpyTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Thermodynamics (Part 1)!');
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
