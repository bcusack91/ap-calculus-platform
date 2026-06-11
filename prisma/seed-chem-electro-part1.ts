import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Electrochemistry (Consolidated Part 1)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Create or find Electrochemistry category
  let electrochemCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Electrochemistry'
    }
  });

  if (!electrochemCategory) {
    const maxOrder = await prisma.category.findFirst({
      where: { courseId: chemistryCourse.id },
      orderBy: { order: 'desc' }
    });

    electrochemCategory = await prisma.category.create({
      data: {
        name: 'Electrochemistry',
        slug: 'electrochemistry',
        description: 'Master galvanic cells, cell potentials, the Nernst equation, and electrolytic cells.',
        order: (maxOrder?.order ?? 0) + 1,
        courseId: chemistryCourse.id
      }
    });

    console.log('✓ Created category:', electrochemCategory.name);
  }

  // Topic 1: Galvanic Cells and Standard Potentials
  const galvanicTopic = await prisma.topic.create({
    data: {
      title: 'Galvanic Cells and Standard Cell Potentials',
      slug: 'galvanic-cells-potentials',
      description: 'Understand voltaic cells, half-reactions, standard reduction potentials, and calculating cell voltage.',
      order: 1,
      categoryId: electrochemCategory.id,
      isPremium: false,
      textContent: `
# Galvanic Cells and Standard Cell Potentials

## Redox Review

**Oxidation:** Loss of electrons (increase in oxidation number)
**Reduction:** Gain of electrons (decrease in oxidation number)

**OIL RIG:** Oxidation Is Loss, Reduction Is Gain

**Redox reaction:** Both oxidation and reduction occur simultaneously

## Galvanic (Voltaic) Cells

**Galvanic cell:** Spontaneous redox reaction produces electric current

**Components:**

1. **Anode:** Oxidation occurs (electrons leave)
   - Negative electrode
   - Loses mass over time

2. **Cathode:** Reduction occurs (electrons enter)
   - Positive electrode
   - Gains mass over time

3. **Salt bridge:** Allows ion flow to maintain neutrality
   - Contains inert electrolyte (KNO₃, Na₂SO₄)
   - Completes circuit

4. **External circuit:** Electrons flow from anode to cathode

**Mnemonic:** "AN OX and a RED CAT"
- ANode = OXidation
- REDuction = CAThode

## Cell Notation (Line Notation)

**Standard format:**

$$\\text{Anode | Anode solution || Cathode solution | Cathode}$$

**Example:** Zn/Zn²⁺ || Cu²⁺/Cu

- Single line (|): Phase boundary
- Double line (||): Salt bridge
- Anode always on left
- Cathode always on right

**Full example:**

Zn(s) | Zn²⁺(aq, 1 M) || Cu²⁺(aq, 1 M) | Cu(s)

## Standard Reduction Potentials (E°)

**Standard conditions:**
- 25°C (298 K)
- 1 M concentrations
- 1 atm pressure for gases

**Standard reduction potential (E°):** Voltage when half-reaction occurs under standard conditions

**Measured relative to standard hydrogen electrode (SHE):**

$$\\text{2H}^+(aq) + 2e^- \\rightarrow \\text{H}_2(g) \\quad E° = 0.00 \\text{ V}$$

**All potentials compared to this reference**

## Using Standard Reduction Potential Table

**More positive E°:** Stronger oxidizing agent (easier to reduce)
**More negative E°:** Stronger reducing agent (easier to oxidize)

**Common half-reactions:**

| Half-Reaction | E° (V) |
|---------------|--------|
| F₂ + 2e⁻ → 2F⁻ | +2.87 |
| Au³⁺ + 3e⁻ → Au | +1.50 |
| Ag⁺ + e⁻ → Ag | +0.80 |
| Cu²⁺ + 2e⁻ → Cu | +0.34 |
| 2H⁺ + 2e⁻ → H₂ | 0.00 |
| Zn²⁺ + 2e⁻ → Zn | -0.76 |
| Li⁺ + e⁻ → Li | -3.05 |

**Top of table:** Best oxidizing agents (F₂, Au³⁺)
**Bottom of table:** Best reducing agents (Li, Zn)

## Calculating Standard Cell Potential

**Formula:**

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$$

**Or:**

$$E°_{\\text{cell}} = E°_{\\text{red}} - E°_{\\text{ox}}$$

**Steps:**

1. Identify oxidation and reduction half-reactions
2. Look up E° for each (as reduction)
3. E°_cell = E°_cathode - E°_anode
4. If E°_cell > 0: spontaneous
5. If E°_cell < 0: non-spontaneous

## Predicting Spontaneity

**From cell potential:**

| $E°_{\\text{cell}}$ | $\\Delta G°$ | Spontaneous? |
|---------|-----|--------------|
| **Positive** | Negative | Yes (galvanic) |
| **Zero** | Zero | At equilibrium |
| **Negative** | Positive | No (needs energy) |

**Relationship to ΔG°:**

$$\\Delta G° = -nFE°_{\\text{cell}}$$

**Where:**
- n = moles of electrons transferred
- F = Faraday constant = 96,485 C/mol e⁻
- E°_cell in volts

## Example Cell: Zn-Cu Cell

**Overall reaction:**

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

**Half-reactions:**

**Anode (oxidation):** Zn → Zn²⁺ + 2e⁻
- E° = -0.76 V (reverse of reduction)

**Cathode (reduction):** Cu²⁺ + 2e⁻ → Cu
- E° = +0.34 V

**Cell potential:**

$$E°_{\\text{cell}} = 0.34 - (-0.76) = 1.10 \\text{ V}$$

**Positive → spontaneous!**

**Cell notation:** Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)

## Balancing Redox Equations

**Half-reaction method:**

1. **Separate** into oxidation and reduction
2. **Balance atoms** (except O and H)
3. **Balance O** with H₂O
4. **Balance H** with H⁺
5. **Balance charge** with e⁻
6. **Multiply** to equalize electrons
7. **Add** half-reactions
8. **Cancel** common terms

**In base:** Add OH⁻ to neutralize H⁺

## Intensive vs Extensive Properties

**E° is intensive:**
- Does NOT depend on amount
- Don't multiply E° when balancing
- E° same whether 1 electron or 1000 electrons

**ΔG° is extensive:**
- Depends on amount (moles)
- Must multiply by n (electrons transferred)

## Predicting Reactions

**Will reaction occur spontaneously?**

**Compare E° values:**
- Species with higher E° gets reduced (cathode)
- Species with lower E° gets oxidized (anode)
- Calculate E°_cell
- If positive → yes!
`,
      exampleProblems: {
        create: [
          {
            question: 'Calculate the standard cell potential for: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s). E°(Ag⁺/Ag) = +0.80 V, E°(Zn²⁺/Zn) = -0.76 V. Is the reaction spontaneous?',
            solution: `**Given:**
- Reaction: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s)
- E°(Ag⁺/Ag) = +0.80 V
- E°(Zn²⁺/Zn) = -0.76 V

---

**Identify half-reactions:**

**Oxidation (anode):** Zn → Zn²⁺ + 2e⁻
- Zn loses electrons
- E°_anode = -0.76 V (as reduction)

**Reduction (cathode):** Ag⁺ + e⁻ → Ag (×2 for balance)
- Ag⁺ gains electrons
- E°_cathode = +0.80 V

---

**Calculate E°_cell:**

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$$

$$E°_{\\text{cell}} = 0.80 - (-0.76)$$

$$E°_{\\text{cell}} = 0.80 + 0.76$$

$$E°_{\\text{cell}} = 1.56 \\text{ V}$$

**Answer:** E°_cell = 1.56 V

---

**Is reaction spontaneous?**

**E°_cell = +1.56 V > 0**

**Yes, reaction is spontaneous!**

---

**Cell notation:**

Zn(s) | Zn²⁺(aq) || Ag⁺(aq) | Ag(s)

**Explanation:**
- Positive cell potential indicates spontaneous redox
- Electrons flow from Zn (anode) to Ag⁺ (cathode)
- Zn is stronger reducing agent (lower E°)
- Ag⁺ is stronger oxidizing agent (higher E°)

**Note:** We did NOT multiply E° by 2 even though 2Ag⁺ are reduced. E° is intensive property!`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate ΔG° for the reaction: 3Mg(s) + 2Al³⁺(aq) → 3Mg²⁺(aq) + 2Al(s). E°(Al³⁺/Al) = -1.66 V, E°(Mg²⁺/Mg) = -2.37 V. F = 96,485 C/mol e⁻.',
            solution: `**Given:**
- Reaction: 3Mg(s) + 2Al³⁺(aq) → 3Mg²⁺(aq) + 2Al(s)
- E°(Al³⁺/Al) = -1.66 V
- E°(Mg²⁺/Mg) = -2.37 V
- F = 96,485 C/mol e⁻

---

**Identify half-reactions:**

**Oxidation:** Mg → Mg²⁺ + 2e⁻ (×3)
- 3Mg → 3Mg²⁺ + 6e⁻
- E°_anode = -2.37 V

**Reduction:** Al³⁺ + 3e⁻ → Al (×2)
- 2Al³⁺ + 6e⁻ → 2Al
- E°_cathode = -1.66 V

**Electrons transferred:** n = 6

---

**Calculate E°_cell:**

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$$

$$E°_{\\text{cell}} = -1.66 - (-2.37)$$

$$E°_{\\text{cell}} = -1.66 + 2.37$$

$$E°_{\\text{cell}} = 0.71 \\text{ V}$$

---

**Calculate ΔG°:**

$$\\Delta G° = -nFE°_{\\text{cell}}$$

**Substitute values:**

$$\\Delta G° = -(6)(96,485)(0.71)$$

$$\\Delta G° = -6 \\times 96,485 \\times 0.71$$

$$\\Delta G° = -410,858 \\text{ J}$$

$$\\Delta G° = -411 \\text{ kJ}$$

**Answer:** ΔG° = -411 kJ

---

**Interpretation:**

**E°_cell = +0.71 V** → spontaneous
**ΔG° = -411 kJ** → spontaneous (negative ΔG°)

**Consistent!** Both indicate reaction is spontaneous.

**Energy released:** 411 kJ per 3 mol Mg reacted

---

**Key relationship:**

$$\\Delta G° = -nFE°_{\\text{cell}}$$

- Positive E° → Negative ΔG° → Spontaneous
- Negative E° → Positive ΔG° → Non-spontaneous
- E° = 0 → ΔG° = 0 → Equilibrium`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Will the reaction Cu(s) + 2H⁺(aq) → Cu²⁺(aq) + H₂(g) occur spontaneously under standard conditions? E°(Cu²⁺/Cu) = +0.34 V, E°(H⁺/H₂) = 0.00 V.',
            solution: `**Given:**
- Proposed reaction: Cu(s) + 2H⁺(aq) → Cu²⁺(aq) + H₂(g)
- E°(Cu²⁺/Cu) = +0.34 V
- E°(H⁺/H₂) = 0.00 V (SHE reference)

---

**Analyze proposed reaction:**

**Oxidation half:** Cu → Cu²⁺ + 2e⁻
- Copper is oxidized (loses electrons)
- Would be anode
- E°_anode = +0.34 V (as reduction)

**Reduction half:** 2H⁺ + 2e⁻ → H₂
- Protons are reduced (gain electrons)
- Would be cathode
- E°_cathode = 0.00 V

---

**Calculate E°_cell:**

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$$

$$E°_{\\text{cell}} = 0.00 - 0.34$$

$$E°_{\\text{cell}} = -0.34 \\text{ V}$$

**E°_cell is negative!**

---

**Answer:** NO, reaction is NOT spontaneous

**Reason:** E°_cell = -0.34 V < 0

---

**Explanation:**

**Cu has higher E° (+0.34) than H⁺ (0.00):**
- Cu²⁺ is better oxidizing agent than H⁺
- Cu²⁺ prefers to be reduced, not oxidized
- Copper is "noble" - resists oxidation by acids

**Spontaneous reaction is REVERSE:**

Cu²⁺(aq) + H₂(g) → Cu(s) + 2H⁺(aq)

**For this reverse:**
- E°_cell = 0.34 - 0.00 = +0.34 V ✓
- Spontaneous!

---

**Activity series application:**

**Metals below H in activity series:**
- Cu, Ag, Au (E° > 0)
- Do NOT react with non-oxidizing acids (HCl, H₂SO₄)
- Need oxidizing acid (HNO₃) to dissolve

**Metals above H in activity series:**
- Zn, Fe, Mg (E° < 0)
- DO react with acids
- Produce H₂ gas

---

**General rule:**

**To predict spontaneity:**
- Higher E° species gets reduced (cathode)
- Lower E° species gets oxidized (anode)
- If proposed reaction matches this: E°_cell > 0, spontaneous
- If proposed reaction reverses this: E°_cell < 0, non-spontaneous`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', galvanicTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: galvanicTopic.id,
        front: 'What is a galvanic (voltaic) cell and what are its main components?',
        back: 'Galvanic cell: spontaneous redox produces electric current. Anode: oxidation occurs (negative, loses mass). Cathode: reduction occurs (positive, gains mass). Salt bridge: ion flow for neutrality. External circuit: electrons flow anode→cathode. "AN OX, RED CAT"'
      },
      {
        topicId: galvanicTopic.id,
        front: 'What is cell notation and how do you write it?',
        back: 'Format: Anode | Anode solution || Cathode solution | Cathode. Example: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s). Single line |: phase boundary. Double line ||: salt bridge. Anode always left, cathode right.'
      },
      {
        topicId: galvanicTopic.id,
        front: 'What is standard reduction potential (E°) and what is the reference?',
        back: 'E°: voltage for half-reaction under standard conditions (25°C, 1M, 1atm). Reference: standard hydrogen electrode (SHE): 2H⁺+2e⁻→H₂, E°=0.00V. All potentials measured relative to this. More positive E° = better oxidizing agent.'
      },
      {
        topicId: galvanicTopic.id,
        front: 'How do you calculate standard cell potential E°_cell?',
        back: 'E°_cell = E°_cathode - E°_anode = E°_reduction - E°_oxidation. 1) Identify oxidation and reduction, 2) Look up E° (as reduction), 3) Calculate difference, 4) If E°_cell > 0: spontaneous. E° is intensive - don\'t multiply!'
      },
      {
        topicId: galvanicTopic.id,
        front: 'How does cell potential relate to spontaneity and ΔG°?',
        back: 'E°_cell > 0: spontaneous (ΔG° < 0). E°_cell = 0: equilibrium (ΔG° = 0). E°_cell < 0: non-spontaneous (ΔG° > 0). Relationship: ΔG° = -nFE°_cell. n=electrons, F=96,485 C/mol.'
      },
      {
        topicId: galvanicTopic.id,
        front: 'What does the position in the reduction potential table tell you?',
        back: 'Top (large positive E°): strong oxidizing agents (F₂, Au³⁺), easily reduced. Bottom (large negative E°): strong reducing agents (Li, Zn), easily oxidized. Higher E° species reduced, lower E° species oxidized in spontaneous reaction.'
      },
      {
        topicId: galvanicTopic.id,
        front: 'Why is E° an intensive property and what does this mean?',
        back: 'E° doesn\'t depend on amount - same whether 1 or 1000 electrons transfer. Don\'t multiply E° when balancing equations! But ΔG° IS extensive - multiply by n (moles electrons). E° tells tendency, not total energy.'
      },
      {
        topicId: galvanicTopic.id,
        front: 'How do you predict if a redox reaction will occur spontaneously?',
        back: 'Compare E° values: species with higher E° gets reduced (cathode), lower E° gets oxidized (anode). Calculate E°_cell = E°_cathode - E°_anode. If E°_cell > 0: spontaneous. Example: Cu (E°=+0.34) won\'t dissolve in HCl (E°=0) because E°_cell<0.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', galvanicTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Electrochemistry (Part 1)!');
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
