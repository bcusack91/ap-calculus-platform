import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding AP Chemistry - Electrochemistry (Consolidated Part 2)...');

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

  // Topic 2: Nernst Equation
  const nernstTopic = await prisma.topic.create({
    data: {
      title: 'Nernst Equation and Concentration Effects',
      slug: 'nernst-equation-concentration',
      description: 'Use the Nernst equation to calculate cell potential under non-standard conditions and relate E to equilibrium constant K.',
      order: existingTopics + 1,
      categoryId: electrochemCategory.id,
      isPremium: false,
      textContent: `
# Nernst Equation and Concentration Effects

## Non-Standard Conditions

**Standard conditions (E°):**
- 25°C (298 K)
- 1 M concentrations
- 1 atm pressures

**Real conditions often differ!**
- Different concentrations
- Different temperatures
- Cell potential changes

## The Nernst Equation

**General form:**

$$E = E° - \\frac{RT}{nF}\\ln Q$$

**At 25°C (298 K):**

$$E = E° - \\frac{0.0592}{n}\\log Q$$

**Where:**
- E = cell potential (V)
- E° = standard cell potential (V)
- R = 8.314 J/(mol·K)
- T = temperature (K)
- n = moles of electrons transferred
- F = 96,485 C/mol
- Q = reaction quotient

**0.0592 V** comes from (RT ln 10)/F at 298 K

## Reaction Quotient (Q)

**For redox reaction:**

$$\\ce{aA + bB -> cC + dD}$$

**Q expression:**

$$Q = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$$

**Same as equilibrium K, but use current concentrations**

**Rules:**
- Include aqueous and gaseous species
- Omit pure solids and liquids
- Use partial pressures (atm) for gases

## Using Nernst Equation

**Step-by-step:**

1. Calculate E° from standard potentials
2. Write balanced equation
3. Determine n (electrons transferred)
4. Write Q expression
5. Calculate Q from concentrations
6. Substitute into Nernst equation
7. Solve for E

## Effect of Concentration

**Le Chatelier applies to electrochemistry!**

**Increase [products]:**
- Q increases
- E decreases (more negative)
- Forward reaction less favorable

**Increase [reactants]:**
- Q decreases
- E increases (more positive)
- Forward reaction more favorable

**Dilution effects:**
- Cell potential changes
- Can shift from spontaneous to non-spontaneous

## Concentration Cells

**Same species at both electrodes, different concentrations**

**Example:** Cu | Cu²⁺(dilute) || Cu²⁺(concentrated) | Cu

**E° = 0** (same half-reactions)

**But E ≠ 0!** (different concentrations)

**Nernst equation:**

$$E = 0 - \\frac{0.0592}{n}\\log\\frac{[Cu^{2+}]_{\\text{anode}}}{[Cu^{2+}]_{\\text{cathode}}}$$

**Electrons flow from dilute to concentrated**
- Dilute side: Cu → Cu²⁺ (oxidation)
- Concentrated side: Cu²⁺ → Cu (reduction)
- Equalizes concentrations

## Relationship to Equilibrium

**At equilibrium:**
- E = 0 (no driving force)
- Q = K

**Substitute into Nernst:**

$$0 = E° - \\frac{0.0592}{n}\\log K$$

**Rearrange:**

$$E° = \\frac{0.0592}{n}\\log K$$

**Or:**

$$\\log K = \\frac{nE°}{0.0592}$$

**Can calculate K from E°!**

**Relationship:**
- Large positive E° → Large K (products favored)
- Large negative E° → Small K (reactants favored)

## Temperature Effects

**Full Nernst equation needed if T ≠ 298 K:**

$$E = E° - \\frac{RT}{nF}\\ln Q$$

**Temperature affects:**
- Both E° and the coefficient
- Generally small effect for moderate T changes

## Dead Battery

**Battery dies when E → 0:**
- Approaches equilibrium
- Reactants and products balanced
- Q → K
- No more driving force

**Recharging:**
- Apply external voltage
- Reverse reaction
- Restore reactants

## pH and Electrochemistry

**Many half-reactions involve H⁺:**

**Example:** MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O

**E depends on pH!**

**Lower pH (higher [H⁺]):**
- Shifts reduction forward
- Increases E
- Stronger oxidizing agent

**Higher pH (lower [H⁺]):**
- Shifts reduction backward
- Decreases E
- Weaker oxidizing agent

## Sign of E and Spontaneity

**Under any conditions:**

| E | ΔG | Spontaneous? |
|---|-----|--------------|
| **E > 0** | ΔG < 0 | Yes |
| **E = 0** | ΔG = 0 | Equilibrium |
| **E < 0** | ΔG > 0 | No |

**General relationship:**

$$\\Delta G = -nFE$$

**At standard conditions:**

$$\\Delta G° = -nFE°$$
`,
      exampleProblems: {
        create: [
          {
            question: 'Calculate the cell potential at 25°C for: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) when [Zn²⁺] = 0.10 M and [Cu²⁺] = 2.0 M. E°_cell = 1.10 V.',
            solution: `**Given:**
- Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
- [Zn²⁺] = 0.10 M
- [Cu²⁺] = 2.0 M
- E°_cell = 1.10 V
- T = 25°C

---

**Determine n:**

**Half-reactions:**
- Zn → Zn²⁺ + 2e⁻
- Cu²⁺ + 2e⁻ → Cu

**n = 2 electrons transferred**

---

**Write Q expression:**

$$Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]}$$

**Solids (Zn, Cu) not included**

**Calculate Q:**

$$Q = \\frac{0.10}{2.0} = 0.050$$

---

**Nernst equation (25°C):**

$$E = E° - \\frac{0.0592}{n}\\log Q$$

**Substitute:**

$$E = 1.10 - \\frac{0.0592}{2}\\log(0.050)$$

$$E = 1.10 - 0.0296 \\times \\log(0.050)$$

$$\\log(0.050) = -1.30$$

$$E = 1.10 - 0.0296 \\times (-1.30)$$

$$E = 1.10 - (-0.038)$$

$$E = 1.10 + 0.038$$

$$E = 1.14 \\text{ V}$$

**Answer:** E = 1.14 V

---

**Interpretation:**

**E (1.14 V) > E° (1.10 V)**

**Why?**
- [Cu²⁺] is high (2.0 M > 1.0 M)
- [Zn²⁺] is low (0.10 M < 1.0 M)
- Q < 1 makes forward reaction MORE favorable
- Cell potential increases

**Q = 0.050 < 1:**
- More reactants than at standard
- Le Chatelier: favors products
- Higher voltage

**Still spontaneous (E > 0)!**`,
            difficulty: 'EASY',
            order: 1
          },
          {
            question: 'Calculate the equilibrium constant K for the reaction: Ni(s) + 2Ag⁺(aq) ⇌ Ni²⁺(aq) + 2Ag(s). E°(Ag⁺/Ag) = +0.80 V, E°(Ni²⁺/Ni) = -0.23 V.',
            solution: `**Given:**
- Reaction: Ni(s) + 2Ag⁺(aq) ⇌ Ni²⁺(aq) + 2Ag(s)
- E°(Ag⁺/Ag) = +0.80 V
- E°(Ni²⁺/Ni) = -0.23 V

---

**Calculate E°_cell:**

**Oxidation:** Ni → Ni²⁺ + 2e⁻ (E°_anode = -0.23 V)
**Reduction:** Ag⁺ + e⁻ → Ag (×2) (E°_cathode = +0.80 V)

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}}$$

$$E°_{\\text{cell}} = 0.80 - (-0.23) = 1.03 \\text{ V}$$

---

**Determine n:**

2 electrons transferred (2e⁻ in each half-reaction)

**n = 2**

---

**Use relationship between E° and K:**

**At equilibrium:** E = 0, Q = K

$$E° = \\frac{0.0592}{n}\\log K$$

**Rearrange:**

$$\\log K = \\frac{nE°}{0.0592}$$

**Substitute:**

$$\\log K = \\frac{(2)(1.03)}{0.0592}$$

$$\\log K = \\frac{2.06}{0.0592}$$

$$\\log K = 34.8$$

**Take antilog:**

$$K = 10^{34.8}$$

$$K = 6.3 \\times 10^{34}$$

**Answer:** K = 6.3 × 10³⁴

---

**Interpretation:**

**Extremely large K!**
- Reaction goes essentially to completion
- Products heavily favored
- Consistent with large positive E° (1.03 V)

**General pattern:**
- E° = 0.06 V → K ≈ 10
- E° = 0.12 V → K ≈ 100
- E° = 0.60 V → K ≈ 10²⁰
- E° = 1.0 V → K ≈ 10³⁴

**Each +0.06 V adds ~1 to log K** (for n=1)

---

**Verification:**

**Large positive E°** (1.03 V) means:
- ΔG° very negative
- Reaction very spontaneous
- Products extremely favored
- K >> 1 ✓`,
            difficulty: 'MEDIUM',
            order: 2
          },
          {
            question: 'A concentration cell is constructed: Ag(s) | Ag⁺(0.010 M) || Ag⁺(1.0 M) | Ag(s). (a) Calculate E_cell at 25°C. (b) Which electrode is the anode?',
            solution: `**Given:**
- Concentration cell: Ag | Ag⁺(0.010 M) || Ag⁺(1.0 M) | Ag
- Same metal, different [Ag⁺]
- T = 25°C

---

**(a) Calculate E_cell**

**Half-reactions:**

**Both sides:** Ag⁺ + e⁻ ⇌ Ag

**E° for both = +0.80 V**

**Standard cell potential:**

$$E°_{\\text{cell}} = E°_{\\text{cathode}} - E°_{\\text{anode}} = 0.80 - 0.80 = 0$$

**Concentration cell always has E° = 0!**

---

**Overall reaction:**

**Dilute side oxidizes, concentrated side reduces:**

Ag⁺(1.0 M) + e⁻ → Ag (cathode - concentrated)
Ag → Ag⁺(0.010 M) + e⁻ (anode - dilute)

**Net:** Ag⁺(1.0 M) → Ag⁺(0.010 M)

**Tries to equalize concentrations**

---

**Q expression:**

$$Q = \\frac{[Ag^+]_{\\text{anode}}}{[Ag^+]_{\\text{cathode}}} = \\frac{0.010}{1.0} = 0.010$$

**n = 1** (one electron)

---

**Nernst equation:**

$$E = E° - \\frac{0.0592}{n}\\log Q$$

$$E = 0 - \\frac{0.0592}{1}\\log(0.010)$$

$$\\log(0.010) = -2.0$$

$$E = 0 - 0.0592 \\times (-2.0)$$

$$E = 0 + 0.118$$

$$E = 0.12 \\text{ V}$$

**Answer (a):** E_cell = 0.12 V

---

**(b) Which is anode?**

**Anode:** Dilute side (0.010 M)
- Oxidation occurs: Ag → Ag⁺
- Increases [Ag⁺] in dilute solution
- Electrons leave this electrode

**Cathode:** Concentrated side (1.0 M)
- Reduction occurs: Ag⁺ → Ag
- Decreases [Ag⁺] in concentrated solution
- Electrons enter this electrode

**Answer (b):** Dilute side (0.010 M) is anode

---

**General rule for concentration cells:**

**Dilute → Anode** (oxidation increases concentration)
**Concentrated → Cathode** (reduction decreases concentration)

**System tries to equalize concentrations!**

---

**Alternative Nernst form for concentration cells:**

$$E = \\frac{0.0592}{n}\\log\\frac{[\\text{concentrated}]}{[\\text{dilute}]}$$

$$E = \\frac{0.0592}{1}\\log\\frac{1.0}{0.010}$$

$$E = 0.0592 \\times \\log(100) = 0.0592 \\times 2 = 0.12 \\text{ V}$$ ✓

**Concentration ratio of 10 → E = 0.059 V**
**Concentration ratio of 100 → E = 0.118 V**`,
            difficulty: 'HARD',
            order: 3
          }
        ]
      }
    }
  });

  console.log('✓ Created topic:', nernstTopic.title);

  // Create flashcards
  await prisma.flashcard.createMany({
    data: [
      {
        topicId: nernstTopic.id,
        front: 'What is the Nernst equation and when do you use it?',
        back: 'E = E° - (0.0592/n)log Q at 25°C. Use for NON-standard conditions (concentrations ≠ 1M, pressure ≠ 1atm). E=cell potential, E°=standard, n=electrons, Q=reaction quotient. General: E = E° - (RT/nF)ln Q.'
      },
      {
        topicId: nernstTopic.id,
        front: 'How do concentration changes affect cell potential?',
        back: 'Increase [products]: Q↑, E decreases (less favorable). Increase [reactants]: Q↓, E increases (more favorable). Le Chatelier applies! Q<1 (excess reactants): E>E°. Q>1 (excess products): E<E°.'
      },
      {
        topicId: nernstTopic.id,
        front: 'What is a concentration cell?',
        back: 'Same species at both electrodes, different concentrations. E°=0 but E≠0! Dilute side: anode (oxidation increases conc). Concentrated side: cathode (reduction decreases conc). Tries to equalize concentrations. E=(0.0592/n)log([conc]/[dilute]).'
      },
      {
        topicId: nernstTopic.id,
        front: 'How do you calculate equilibrium constant K from E°?',
        back: 'At equilibrium: E=0, Q=K. From Nernst: E° = (0.0592/n)log K. Rearrange: log K = nE°/0.0592. Large positive E° → large K (products favored). Negative E° → small K (reactants favored).'
      },
      {
        topicId: nernstTopic.id,
        front: 'How does pH affect electrochemical cells?',
        back: 'Many half-reactions involve H⁺. Lower pH (high [H⁺]): shifts reduction forward, E increases, stronger oxidizing agent. Higher pH (low [H⁺]): shifts reduction backward, E decreases, weaker oxidizing agent. Must include [H⁺] in Q!'
      },
      {
        topicId: nernstTopic.id,
        front: 'What happens when a battery dies?',
        back: 'E → 0 as cell approaches equilibrium. Q → K, reactants and products balanced. No driving force left. Recharging: apply external voltage to reverse reaction and restore reactants. Chemical energy depleted.'
      },
      {
        topicId: nernstTopic.id,
        front: 'What is the relationship between E, ΔG, and spontaneity?',
        back: 'ΔG = -nFE (any conditions). E>0: ΔG<0 (spontaneous). E=0: ΔG=0 (equilibrium). E<0: ΔG>0 (non-spontaneous). At standard: ΔG° = -nFE°. E and ΔG always opposite signs.'
      },
      {
        topicId: nernstTopic.id,
        front: 'How do you use the Nernst equation step-by-step?',
        back: '1) Calculate E° from standard potentials, 2) Write balanced equation, 3) Find n (electrons), 4) Write Q (products/reactants, omit solids/liquids), 5) Calculate Q from concentrations, 6) E = E° - (0.0592/n)log Q, 7) Solve for E.'
      }
    ]
  });

  console.log('✓ Created 8 flashcards for', nernstTopic.title);

  console.log('\n✅ Successfully seeded AP Chemistry - Electrochemistry (Part 2)!');
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
