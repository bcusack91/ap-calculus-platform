export const mcatEnzKineticsPart1Data = {
  topicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  sections: [
    {
      id: 'ek1-intro',
      type: 'text' as const,
      content: `# Enzymes & Kinetics

**Part 1 of 4 — Enzyme Fundamentals: Catalysis & Specificity**

### What Enzymes Do (and Don't Do)

Enzymes are biological catalysts (mostly proteins; some catalytic RNAs — ribozymes, including the ribosome's peptidyl transferase center). A catalyst:

- **Lowers activation energy** ($E_a$) by stabilizing the **transition state**
- **Speeds up** both forward and reverse reactions equally
- Is **regenerated unchanged** after each cycle

A catalyst does **NOT** change:

- $\\Delta G$ of the reaction (thermodynamics untouched)
- $K_{eq}$ or the final equilibrium position
- Whether a reaction is spontaneous

The rate boost comes from the Arrhenius relationship: rate $\\propto e^{-E_a/RT}$, so even a modest drop in $E_a$ multiplies the rate enormously.

### Binding Models

| Model | Idea | Status |
|-------|------|--------|
| Lock and key | Rigid active site perfectly complements substrate | Oversimplified |
| Induced fit | Binding reshapes BOTH enzyme and substrate toward the transition state | Preferred model |

The deepest statement of catalysis: enzymes bind the **transition state** more tightly than the substrate itself. (This is why **transition-state analogs** are extraordinarily potent inhibitors.)

### Catalytic Strategies

- **Acid-base catalysis:** His (pKa ~6) donates/accepts protons
- **Covalent catalysis:** transient enzyme-substrate covalent bond (e.g., serine protease acyl-enzyme intermediate via the Ser-His-Asp catalytic triad)
- **Electrostatic/metal-ion catalysis:** metal cations stabilize negative charge or activate water (e.g., $Zn^{2+}$ in carbonic anhydrase lowers bound water's pKa so a $Zn$-bound hydroxide attacks CO$_2$)
- **Proximity and orientation:** holding substrates next to each other in the right geometry

### Cofactors and Coenzymes

| Term | Meaning |
|------|---------|
| Cofactor | Nonprotein helper: metal ion or organic molecule |
| Coenzyme | Organic cofactor, often vitamin-derived (NAD$^+$ from niacin, FAD from riboflavin, CoA from pantothenate, TPP from thiamine, PLP from B6, biotin) |
| Prosthetic group | Tightly/covalently bound cofactor (e.g., heme) |
| Apoenzyme | Enzyme without its cofactor (inactive) |
| Holoenzyme | Enzyme + cofactor (active) |

### Enzyme Classes (EC) — Recognize the Reaction Type

| Class | Catalyzes | Example |
|-------|-----------|---------|
| Oxidoreductase | Redox (electron transfer) | Lactate dehydrogenase |
| Transferase | Moves a functional group | Kinases (phosphoryl transfer) |
| Hydrolase | Cleaves with water | Proteases, lipases, phosphatases |
| Lyase | Cleaves/forms bonds WITHOUT water or redox | Aldolase |
| Isomerase | Rearranges within one molecule | Phosphoglucose isomerase |
| Ligase | Joins two molecules using ATP | DNA ligase, pyruvate carboxylase |

MCAT trap: **kinase** (transfers phosphate from ATP to substrate) vs. **phosphatase** (hydrolyzes phosphate off) vs. **phosphorylase** (attacks a bond with inorganic phosphate).`
    },
    {
      id: 'ek1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Enzyme Fundamentals** 🎯`,
      exercise: {
        questions: [
          {
            question: `An enzyme increases the rate of a reaction by a factor of $10^{6}$. Which quantity is unchanged by the enzyme?`,
            options: [`The activation energy`, `The rate of the forward reaction`, `The equilibrium constant $K_{eq}$`, `The transition-state energy`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Catalysts lower $E_a$ and accelerate forward AND reverse rates equally, so equilibrium position ($K_{eq}$, and $\\Delta G^{\\circ}$) is untouched. The enzyme changes how fast equilibrium is reached, never where it lies.`
          },
          {
            question: `Transition-state analogs are among the most potent enzyme inhibitors known because:`,
            options: [`They form irreversible covalent bonds with active-site residues`, `They mimic the transition state that enzymes bind most tightly`, `They bind an allosteric site and lock the enzyme in its T state`, `They shift the equilibrium of the reaction toward reactants`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Enzymes bind the transition state more tightly than the substrate itself, so a stable mimic of that state binds extremely tightly. Catalysis works by complementing the transition state's geometry and charge, and the analog exploits those tightest binding interactions, giving very low dissociation constants. No covalent chemistry is required; the analog occupies the active site rather than an allosteric site, and no inhibitor can shift an equilibrium position.`
          },
          {
            question: `A patient with severe thiamine (vitamin B1) deficiency shows impaired activity of pyruvate dehydrogenase. In this context, thiamine pyrophosphate is best described as a:`,
            options: [`Substrate consumed by the reaction`, `Coenzyme required by the enzyme`, `Competitive inhibitor of the enzyme`, `Tightly bound prosthetic heme group`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `TPP is an organic, vitamin-derived helper molecule — a coenzyme. Without it the apoenzyme cannot function. It is regenerated each cycle (not consumed like a substrate) and it promotes, not inhibits, catalysis. It is also not a heme group: heme is an iron porphyrin, not a vitamin-B1 derivative.`
          },
          {
            question: `The enzyme that catalyzes glucose-6-phosphate to fructose-6-phosphate belongs to which enzyme class?`,
            options: [`Isomerase`, `Transferase`, `Hydrolase`, `Ligase`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The reaction rearranges atoms within a single molecule (aldose to ketose) — an isomerization. No group is transferred between molecules, no water is used, and no ATP-dependent joining occurs.`
          },
          {
            question: `In chymotrypsin's catalytic triad (Ser-His-Asp), the role of histidine is to:`,
            options: [`Form the covalent acyl-enzyme intermediate by attacking the carbonyl`, `Act as a general base that deprotonates serine`, `Coordinate a zinc ion that polarizes the carbonyl`, `Form the oxyanion hole that stabilizes the intermediate`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `His abstracts the proton from Ser's hydroxyl (general base catalysis), generating the strong serine nucleophile that attacks the substrate carbonyl; Asp orients and stabilizes protonated His. Serine, not histidine, forms the covalent intermediate; backbone N-H groups form the oxyanion hole. Chymotrypsin uses no metal ion; zinc polarizing a substrate carbonyl belongs to metalloproteases such as carboxypeptidase A.`
          }
        ]
      }
    },
    {
      id: 'ek1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Catalysis Concepts

**Problem 1.** An exergonic reaction has $\\Delta G^{\\circ\\prime} = -20$ kJ/mol and an uncatalyzed $E_a = 80$ kJ/mol. An enzyme is added.

- **(a)** Do the reactant and product energy levels change?
- **(b)** What happens to the peak of the energy diagram?
- **(c)** How do the forward and reverse barriers change, and is $\\Delta G^{\\circ\\prime}$ preserved?

**(a) The endpoints.** Reactant and product energy levels are **unchanged**, so $\\Delta G^{\\circ\\prime}$ stays −20 kJ/mol.

**(b) The peak.** The transition state drops: $E_a$ might fall from 80 to, say, 30 kJ/mol.

**(c) Both barriers.** The forward and reverse barriers both decrease by the same absolute amount at the peak, so their difference (still −20 kJ/mol) is preserved. On any energy-diagram question, the enzyme only moves the hump, never the endpoints.

**Problem 2.** Three metabolic reactions each carry the signature of one enzyme class. Read the signature, then name the class.

- **(a)** Which class catalyzes pyruvate + CO$_2$ + ATP → oxaloacetate + ADP + P$_i$?
- **(b)** Which class catalyzes glucose-6-phosphate + H$_2$O → glucose + P$_i$?
- **(c)** Which class catalyzes lactate + NAD$^+$ → pyruvate + NADH?
- **(d)** What signature identifies each of these three classes, and how would a transferase look?

**(a) Joining with ATP.** CO$_2$ is joined to pyruvate at the expense of ATP: a **ligase** (pyruvate carboxylase; note the biotin cofactor for carboxylations).

**(b) Water in.** A phosphate ester is cleaved using water: a **hydrolase** (glucose-6-phosphatase).

**(c) Electrons moved.** Electrons transfer to NAD$^+$: an **oxidoreductase** (lactate dehydrogenase).

**(d) The signatures.** ATP + joining = ligase; water = hydrolase; NAD$^+$/FAD = oxidoreductase. A transferase moves a group between two molecules, as a kinase moves phosphate from ATP to its substrate.

**Problem 3.** An enzyme preparation loses activity after dialysis against buffer. Activity is restored by adding back a small filtrate fraction that is heat-stable.

- **(a)** What size of molecule does dialysis remove?
- **(b)** What does heat stability say about the missing component?
- **(c)** Is the missing component more likely a protein subunit or a coenzyme?

**(a) Dialysis.** Dialysis removes SMALL molecules: a loosely bound cofactor or coenzyme dialyzes away; protein subunits generally do not.

**(b) Heat stability.** Proteins denature with heat; small organic cofactors and metal ions survive boiling.

**(c) Conclusion.** A dialyzable, heat-stable **coenzyme** (or metal ion) was removed, converting the holoenzyme to inactive apoenzyme. "Small, dialyzable, heat-stable" is exam code for a cofactor or coenzyme.`
    },
    {
      id: 'ek1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Catalysts lower $E_a$ only.** Enzymes stabilize the transition state; $\\Delta G$, $K_{eq}$ and spontaneity never change.
- **Transition state binds tightest.** Induced fit beats lock and key, and transition-state analogs are ultra-potent inhibitors.
- **Cofactors complete enzymes.** Apoenzyme + cofactor = holoenzyme; coenzymes are vitamin-derived (NAD$^+$, FAD, CoA, TPP, PLP).
- **Six EC classes.** Oxidoreductase (redox), transferase (group), hydrolase (water), lyase (no-water split), isomerase (rearrange), ligase (ATP).

**Common traps**

- **Enzymes shifting equilibrium.** A catalyst speeds forward and reverse rates equally: it changes how fast, never where, equilibrium lies.
- **Kinase vs. phosphatase vs. phosphorylase.** Kinases add phosphate from ATP, phosphatases hydrolyze it off, phosphorylases cleave with P$_i$.
- **His as the nucleophile.** In the Ser-His-Asp triad, His is the general base; serine forms the covalent acyl-enzyme.
- **A protein lost on dialysis.** Dialysis removes small molecules; a small, heat-stable rescue fraction is a coenzyme or metal ion, not a protein.`
    }
  ]
};
