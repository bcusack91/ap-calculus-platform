import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Electrochemistry (Consolidated Part 3)...');

  // Find the AP Chemistry course
  const chemistryCourse = await prisma.course.findUnique({
    where: { slug: 'ap-chemistry' }
  });

  if (!chemistryCourse) {
    throw new Error('AP Chemistry course not found');
  }

  // Find the Electrochemistry category
  const electrochemCategory = await prisma.category.findFirst({
    where: {
      courseId: chemistryCourse.id,
      name: 'Electrochemistry'
    }
  });

  if (!electrochemCategory) {
    throw new Error('Electrochemistry category not found');
  }

  // Get current topic count
  const existingTopics = await prisma.topic.count({
    where: { categoryId: electrochemCategory.id }
  });

  // Topic 3: Electrolytic Cells
  const electrolyticTopic = await prisma.topic.create({
    data: {
      title: 'Electrolytic Cells and Quantitative Electrolysis',
      slug: 'electrolytic-cells-faraday',
      description: 'Explore electrolysis, compare galvanic vs electrolytic cells, and use Faraday\'s laws for quantitative calculations.',
      order: existingTopics + 1,
      categoryId: electrochemCategory.id,
      isPremium: false,
      textContent: `
# Electrolytic Cells and Quantitative Electrolysis

## Galvanic vs Electrolytic Cells

**Galvanic (Voltaic) Cell:**
- Spontaneous redox reaction
- Chemical → Electrical energy
- E°_cell > 0
- ΔG < 0
- Example: Batteries

**Electrolytic Cell:**
- Non-spontaneous redox forced by external voltage
- Electrical → Chemical energy
- E°_cell < 0 (reversed)
- ΔG > 0 (reversed)
- Examples: Electroplating, aluminum production, charging batteries

## Electrolysis

**Electrolysis:** Using electric current to drive non-spontaneous redox

**Requirements:**
1. External power source (battery, DC supply)
2. Electrolyte (molten or aqueous)
3. Two electrodes (inert or active)
4. Complete circuit

**Applications:**
- Metal purification (copper, aluminum)
- Electroplating (chrome, gold)
- Producing chemicals (Cl₂, NaOH, H₂)
- Charging batteries

## Electrode Identification in Electrolytic Cells

**Anode:**
- Connected to **positive** terminal
- Oxidation occurs
- Electrons leave
- Opposite of galvanic!

**Cathode:**
- Connected to **negative** terminal
- Reduction occurs
- Electrons enter
- Opposite of galvanic!

**Mnemonic still works:** AN OX, RED CAT
- But voltage source reverses polarity

## Electrolysis of Molten Salts

**Molten NaCl example:**

**Cathode (−):** Na⁺ + e⁻ → Na(l)
**Anode (+):** 2Cl⁻ → Cl₂(g) + 2e⁻

**Overall:** 2NaCl(l) → 2Na(l) + Cl₂(g)

**Simple:** Only one species to reduce (Na⁺) and one to oxidize (Cl⁻)

**Industrial:** Produces Na metal and Cl₂ gas

## Electrolysis of Aqueous Solutions

**More complex:** Water can be oxidized or reduced!

**Water reduction:** 2H₂O + 2e⁻ → H₂(g) + 2OH⁻ (E° = -0.83 V)
**Water oxidation:** 2H₂O → O₂(g) + 4H⁺ + 4e⁻ (E° = +1.23 V)

**Competition at cathode:**
- Most easily reduced species wins
- Higher (more positive) E°

**Competition at anode:**
- Most easily oxidized species wins
- Lower (more negative) E°

**General rules:**

**Cathode (reduction):**
- Active metals (Na⁺, K⁺, Mg²⁺): H₂O reduced instead → H₂(g)
- Less active (Cu²⁺, Ag⁺): Metal ion reduced → metal
- Very negative E°: water wins

**Anode (oxidation):**
- Active anions (Cl⁻, Br⁻, I⁻): Anion oxidized → X₂(g)
- Oxyanions (NO₃⁻, SO₄²⁻): H₂O oxidized → O₂(g)
- Inert electrode required

## Electrolysis Examples

**Aqueous NaCl:**

**Cathode:** 2H₂O + 2e⁻ → H₂ + 2OH⁻ (Na⁺ too active)
**Anode:** 2Cl⁻ → Cl₂ + 2e⁻

**Overall:** 2H₂O + 2Cl⁻ → H₂ + Cl₂ + 2OH⁻

**Products:** H₂, Cl₂, NaOH (chlor-alkali process)

---

**Aqueous CuSO₄:**

**Cathode:** Cu²⁺ + 2e⁻ → Cu (copper deposits)
**Anode:** 2H₂O → O₂ + 4H⁺ + 4e⁻ (SO₄²⁻ not oxidized)

**Overall:** 2Cu²⁺ + 2H₂O → 2Cu + O₂ + 4H⁺

**Application:** Copper purification

## Faraday's Laws of Electrolysis

**First Law:** Mass deposited ∝ charge passed

**Second Law:** For same charge, mass ∝ molar mass / electrons

**Quantitative relationship:**

$$\\text{moles e}^- = \\frac{\\text{charge (C)}}{F}$$

**Where F = 96,485 C/mol** (Faraday constant)

**Charge:**

$$Q = I \\times t$$

- Q = charge (coulombs, C)
- I = current (amperes, A)
- t = time (seconds, s)

## Stoichiometry of Electrolysis

**Step-by-step:**

1. **Calculate charge:** Q = I × t
2. **Calculate moles e⁻:** mol e⁻ = Q/F
3. **Use stoichiometry:** Relate e⁻ to substance
4. **Calculate amount:** mol, mass, or volume

**Example:** Cu²⁺ + 2e⁻ → Cu
- 2 moles e⁻ → 1 mole Cu
- If 10 mol e⁻: 5 mol Cu deposited

## Electroplating

**Electroplating:** Coating object with thin metal layer

**Setup:**
- Anode: Pure metal (dissolves)
- Cathode: Object to plate (metal deposits)
- Electrolyte: Metal ion solution

**Example:** Chrome plating

**Cathode:** Cr³⁺ + 3e⁻ → Cr (chrome layer forms)
**Anode:** Cr → Cr³⁺ + 3e⁻ (chrome dissolves)

**Thickness controlled by:**
- Current
- Time
- Current density (A/cm²)

## Metal Purification

**Copper purification:**

**Anode:** Impure Cu → Cu²⁺ + 2e⁻
**Cathode:** Cu²⁺ + 2e⁻ → Pure Cu

**Impurities:**
- More active metals (Fe, Zn): Stay dissolved
- Less active metals (Ag, Au): Fall to bottom (anode sludge)
- Recovered for value!

**Result:** 99.99% pure copper

## Calculating Products

**Gas production:**

$$\\text{moles gas} = \\frac{\\text{moles e}^-}{n}$$

**Where n = electrons per molecule:**
- H₂: 2e⁻ → 1 H₂
- O₂: 4e⁻ → 1 O₂
- Cl₂: 2e⁻ → 1 Cl₂

**Volume at STP:**

$$V = \\text{moles} \\times 22.4 \\text{ L/mol}$$

## Battery Charging

**Charging = Electrolysis!**

**Discharging (galvanic):**
- Spontaneous
- Chemical → Electrical

**Charging (electrolytic):**
- Apply reverse voltage
- Electrical → Chemical
- Restores reactants

**Lead-acid battery:**

**Discharge:** Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O
**Charge:** Reverse reaction forced

## Overpotential

**Overpotential:** Extra voltage needed beyond theoretical

**Reasons:**
- Activation energy for electrode reactions
- Resistance in electrolyte
- Concentration polarization

**Practical:** Need E_applied > |E°_cell| to start electrolysis

**Example:** Water electrolysis E° = -1.23 V, but need ~2 V in practice
`,
      exampleProblems: {
        create: [
          {
            question: 'How many grams of Cu will be deposited at the cathode when a 3.00 A current passes through a CuSO₄ solution for 2.00 hours? Cu²⁺ + 2e⁻ → Cu. F = 96,485 C/mol, Cu = 63.5 g/mol.',
            solution: `**Given:**
- Current I = 3.00 A
- Time t = 2.00 hours = 2.00 × 3600 = 7200 s
- Cathode reaction: Cu²⁺ + 2e⁻ → Cu
- F = 96,485 C/mol
- Molar mass Cu = 63.5 g/mol

---

**Step 1: Calculate charge (Q)**

$$Q = I \\times t$$

$$Q = 3.00 \\text{ A} \\times 7200 \\text{ s}$$

$$Q = 21,600 \\text{ C}$$

---

**Step 2: Calculate moles of electrons**

$$\\text{mol e}^- = \\frac{Q}{F}$$

$$\\text{mol e}^- = \\frac{21,600}{96,485}$$

$$\\text{mol e}^- = 0.224 \\text{ mol e}^-$$

---

**Step 3: Use stoichiometry**

**From equation:** Cu²⁺ + 2e⁻ → Cu

**2 mol e⁻ → 1 mol Cu**

$$\\text{mol Cu} = \\frac{0.224 \\text{ mol e}^-}{2}$$

$$\\text{mol Cu} = 0.112 \\text{ mol}$$

---

**Step 4: Calculate mass**

$$\\text{mass} = \\text{mol} \\times \\text{molar mass}$$

$$\\text{mass} = 0.112 \\times 63.5$$

$$\\text{mass} = 7.11 \\text{ g}$$

**Answer: 7.11 g Cu deposited**

---

**Summary:**

3.00 A × 2.00 hr → 21,600 C → 0.224 mol e⁻ → 0.112 mol Cu → 7.11 g Cu

**Check:** Makes sense - about 1/9 mole Cu in 2 hours at 3 A`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'A current of 5.00 A is passed through molten NaCl for 30.0 minutes. Calculate: (a) moles of Na produced, (b) volume of Cl₂ gas at STP. Na⁺ + e⁻ → Na, 2Cl⁻ → Cl₂ + 2e⁻.',
            solution: `**Given:**
- Current I = 5.00 A
- Time t = 30.0 min = 30.0 × 60 = 1800 s
- Cathode: Na⁺ + e⁻ → Na
- Anode: 2Cl⁻ → Cl₂ + 2e⁻
- F = 96,485 C/mol

---

**Calculate charge:**

$$Q = I \\times t = 5.00 \\times 1800 = 9000 \\text{ C}$$

**Calculate moles electrons:**

$$\\text{mol e}^- = \\frac{Q}{F} = \\frac{9000}{96,485} = 0.0933 \\text{ mol e}^-$$

---

**(a) Moles Na produced**

**Cathode:** Na⁺ + e⁻ → Na

**1 mol e⁻ → 1 mol Na**

$$\\text{mol Na} = 0.0933 \\text{ mol}$$

**Answer (a): 0.0933 mol Na**

---

**(b) Volume Cl₂ at STP**

**Anode:** 2Cl⁻ → Cl₂ + 2e⁻

**2 mol e⁻ → 1 mol Cl₂**

$$\\text{mol Cl}_2 = \\frac{0.0933}{2} = 0.0467 \\text{ mol}$$

**Volume at STP:**

$$V = \\text{mol} \\times 22.4 \\text{ L/mol}$$

$$V = 0.0467 \\times 22.4$$

$$V = 1.05 \\text{ L}$$

**Answer (b): 1.05 L Cl₂**

---

**Verification:**

**Overall reaction:** 2NaCl → 2Na + Cl₂

**2 mol Na : 1 mol Cl₂**

$$\\frac{0.0933}{0.0467} = 2.00$$ ✓

**Ratio checks!**

---

**Summary:**

- 9000 C → 0.0933 mol e⁻
- Cathode: 0.0933 mol e⁻ → 0.0933 mol Na
- Anode: 0.0933 mol e⁻ → 0.0467 mol Cl₂ → 1.05 L at STP

**Same electrons flow through both electrodes!**`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'Electrolysis of aqueous NaCl produces H₂ and Cl₂. What current is needed to produce 10.0 L of H₂ gas at STP in 1.50 hours? 2H₂O + 2e⁻ → H₂ + 2OH⁻.',
            solution: `**Given:**
- Electrolysis of aqueous NaCl
- Volume H₂ = 10.0 L at STP
- Time t = 1.50 hours = 1.50 × 3600 = 5400 s
- Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻
- Find: Current I

---

**Step 1: Moles H₂**

**At STP:** 1 mol gas = 22.4 L

$$\\text{mol H}_2 = \\frac{10.0 \\text{ L}}{22.4 \\text{ L/mol}}$$

$$\\text{mol H}_2 = 0.446 \\text{ mol}$$

---

**Step 2: Moles electrons**

**From cathode equation:** 2H₂O + 2e⁻ → H₂

**2 mol e⁻ → 1 mol H₂**

$$\\text{mol e}^- = 0.446 \\times 2$$

$$\\text{mol e}^- = 0.892 \\text{ mol}$$

---

**Step 3: Charge needed**

$$Q = \\text{mol e}^- \\times F$$

$$Q = 0.892 \\times 96,485$$

$$Q = 86,049 \\text{ C}$$

---

**Step 4: Calculate current**

$$I = \\frac{Q}{t}$$

$$I = \\frac{86,049 \\text{ C}}{5400 \\text{ s}}$$

$$I = 15.9 \\text{ A}$$

**Answer: 15.9 A**

---

**Verification:**

**Working backward:**
- 15.9 A × 5400 s = 85,860 C ✓
- 85,860/96,485 = 0.890 mol e⁻ ✓
- 0.890/2 = 0.445 mol H₂ ✓
- 0.445 × 22.4 = 9.97 L ≈ 10.0 L ✓

---

**Summary:**

To produce 10.0 L H₂ in 1.50 hr:

$$10.0 \\text{ L} \\to 0.446 \\text{ mol H}_2 \\to 0.892 \\text{ mol e}^- \\to 86,049 \\text{ C} \\to 15.9 \\text{ A}$$

---

**What happens at anode?**

**Anode:** 2Cl⁻ → Cl₂ + 2e⁻

**Same 0.892 mol e⁻:**

$$\\text{mol Cl}_2 = \\frac{0.892}{2} = 0.446 \\text{ mol}$$

**Volume Cl₂ = 0.446 × 22.4 = 10.0 L**

**Equal volumes H₂ and Cl₂ produced!**

**Overall:** 2H₂O + 2Cl⁻ → H₂ + Cl₂ + 2OH⁻`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', electrolyticTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: electrolyticTopic.id,
        front: 'What is the difference between galvanic and electrolytic cells?',
        back: 'Galvanic: spontaneous, chemical→electrical, E°>0, ΔG<0 (batteries). Electrolytic: non-spontaneous forced by external voltage, electrical→chemical, E°<0, ΔG>0 (electroplating, charging). Electrode polarity REVERSED in electrolytic!'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'What are the electrode assignments in electrolytic cells?',
        back: 'Anode: connected to POSITIVE terminal, oxidation, electrons leave (opposite of galvanic!). Cathode: connected to NEGATIVE terminal, reduction, electrons enter. Mnemonic still works: AN OX, RED CAT. Voltage source reverses polarity.'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'What happens during electrolysis of aqueous solutions?',
        back: 'Competition! Water can oxidize or reduce. Cathode: most easily reduced wins (higher E°) - active metals (Na⁺,K⁺)→H₂O reduced to H₂, less active (Cu²⁺,Ag⁺)→metal. Anode: most easily oxidized wins - active anions (Cl⁻,Br⁻)→X₂, oxyanions→O₂.'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'What is Faraday\'s law and how do you use it?',
        back: 'mol e⁻ = Q/F where Q=charge (C), F=96,485 C/mol. Steps: 1) Q=I×t (current×time), 2) mol e⁻=Q/F, 3) Use stoichiometry (e⁻ to substance), 4) Calculate mass/volume. Example: 2e⁻→Cu means 10 mol e⁻ gives 5 mol Cu.'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'How does electroplating work?',
        back: 'Coat object with metal. Anode: pure metal dissolves (M→M^n++ne⁻). Cathode: object gets plated (M^n++ne⁻→M). Electrolyte: metal ion solution. Thickness controlled by current, time, current density. Chrome plating: Cr³⁺+3e⁻→Cr at cathode.'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'What is metal purification by electrolysis?',
        back: 'Copper purification: Anode=impure Cu→Cu²⁺+2e⁻. Cathode=Cu²⁺+2e⁻→pure Cu. More active impurities (Fe,Zn) stay dissolved. Less active (Ag,Au) fall to bottom as anode sludge (recovered!). Result: 99.99% pure copper.'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'How do you calculate gas volumes from electrolysis?',
        back: 'mol gas = (mol e⁻)/n where n=electrons per molecule. H₂: 2e⁻→1H₂ (n=2). O₂: 4e⁻→1O₂ (n=4). Cl₂: 2e⁻→1Cl₂ (n=2). Volume at STP: V=mol×22.4 L/mol. Electrolysis of NaCl(aq): equal volumes H₂ and Cl₂!'
      },
      {
        topicId: electrolyticTopic.id,
        front: 'What is battery charging and what is overpotential?',
        back: 'Charging IS electrolysis - apply reverse voltage to restore reactants. Discharge: spontaneous, chemical→electrical. Charge: electrical→chemical. Overpotential: extra voltage needed beyond E° for activation energy, resistance, polarization. Example: water E°=-1.23V but need ~2V.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', electrolyticTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Electrochemistry (Part 3)!');
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
