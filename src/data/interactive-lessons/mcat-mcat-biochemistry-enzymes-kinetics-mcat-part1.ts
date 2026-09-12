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
- **Electrostatic/metal-ion catalysis:** metal cations stabilize negative charge (e.g., $Zn^{2+}$ in carbonic anhydrase)
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
            options: [`The activation energy`, `The rate of the forward reaction`, `The equilibrium constant $K_{eq}$`, `The rate of formation of the transition state`],
            correctAnswer: 2,
            explanation: `Catalysts lower $E_a$ and accelerate forward AND reverse rates equally, so equilibrium position ($K_{eq}$, and $\\Delta G^{\\circ}$) is untouched. The enzyme changes how fast equilibrium is reached, never where it lies.`
          },
          {
            question: `Transition-state analogs are among the most potent enzyme inhibitors known because:`,
            options: [`They covalently modify the active site`, `Enzymes bind the transition state more tightly than the substrate, so a stable mimic of it binds extremely tightly`, `They are always larger than the substrate`, `They shift the equilibrium of the reaction toward reactants`],
            correctAnswer: 1,
            explanation: `Catalysis works by complementing the transition state's geometry and charge. A stable molecule mimicking that state exploits the enzyme's tightest binding interactions, giving very low dissociation constants. No covalent chemistry is required.`
          },
          {
            question: `A patient with severe thiamine (vitamin B1) deficiency shows impaired activity of pyruvate dehydrogenase. In this context, thiamine pyrophosphate is best described as a:`,
            options: [`Substrate consumed by the reaction`, `Coenzyme required by the enzyme`, `Competitive inhibitor`, `Prosthetic heme group`],
            correctAnswer: 1,
            explanation: `TPP is an organic, vitamin-derived helper molecule — a coenzyme. Without it the apoenzyme cannot function. It is regenerated each cycle (not consumed like a substrate) and it promotes, not inhibits, catalysis.`
          },
          {
            question: `The enzyme that catalyzes glucose-6-phosphate to fructose-6-phosphate belongs to which enzyme class?`,
            options: [`Isomerase`, `Transferase`, `Hydrolase`, `Ligase`],
            correctAnswer: 0,
            explanation: `The reaction rearranges atoms within a single molecule (aldose to ketose) — an isomerization. No group is transferred between molecules, no water is used, and no ATP-dependent joining occurs.`
          },
          {
            question: `In chymotrypsin's catalytic triad (Ser-His-Asp), the role of histidine is to:`,
            options: [`Form the covalent acyl-enzyme intermediate`, `Act as a general base, deprotonating serine so it can attack the substrate carbonyl`, `Bind the metal cofactor`, `Provide the oxyanion hole`],
            correctAnswer: 1,
            explanation: `His abstracts the proton from Ser's hydroxyl (general base catalysis), generating the strong serine nucleophile; Asp orients and stabilizes protonated His. Serine, not histidine, forms the covalent intermediate; backbone N-H groups form the oxyanion hole.`
          }
        ]
      }
    },
    {
      id: 'ek1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Enzymes lower $E_a$ by stabilizing the transition state; $\\Delta G$, $K_{eq}$, and spontaneity never change
- Induced fit > lock and key; transition-state analogs = ultra-potent inhibitors
- Catalytic toolkit: acid-base (His), covalent (Ser proteases), metal ions, proximity/orientation
- Apoenzyme + cofactor = holoenzyme; coenzymes are vitamin-derived (NAD$^+$, FAD, CoA, TPP, PLP, biotin)
- Know the six EC classes and the kinase/phosphatase/phosphorylase distinction`
    },
    {
      id: 'ek1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Catalysis Concepts

<details>
<summary><b>Example 1: Energy diagram reasoning</b></summary>

**Question:** For an exergonic reaction ($\\Delta G^{\\circ\\prime} = -20$ kJ/mol) with $E_a = 80$ kJ/mol uncatalyzed, sketch what changes when an enzyme is added.

**Solution:**
1. Reactant and product energy levels: **unchanged** — so $\\Delta G^{\\circ\\prime}$ stays −20 kJ/mol.
2. The peak (transition state) drops: $E_a$ might fall from 80 to, say, 30 kJ/mol.
3. Both the forward barrier and reverse barrier decrease by the same absolute amount at the peak; their difference (still −20) is preserved.

**MCAT Strategy:** On any energy-diagram question, the enzyme only moves the hump, never the endpoints.
</details>

<details>
<summary><b>Example 2: Distinguish cofactor depletion from inhibition</b></summary>

**Question:** An enzyme preparation loses activity after dialysis against buffer, and activity is restored by adding back a small filtrate fraction that is heat-stable. Is the missing component more likely a protein subunit or a coenzyme?

**Solution:**
1. Dialysis removes SMALL molecules — a loosely bound cofactor/coenzyme dialyzes away; protein subunits generally do not.
2. Heat stability: proteins denature with heat; small organic cofactors and metal ions survive boiling.
3. Conclusion: a dialyzable, heat-stable **coenzyme** (or metal ion) was removed, converting holoenzyme to inactive apoenzyme.

**MCAT Strategy:** "Small, dialyzable, heat-stable" is exam code for cofactor/coenzyme.
</details>

<details>
<summary><b>Example 3: Classify the enzyme from the reaction</b></summary>

**Question:** Classify each: (a) pyruvate + CO$_2$ + ATP → oxaloacetate + ADP + P$_i$; (b) glucose-6-phosphate + H$_2$O → glucose + P$_i$; (c) lactate + NAD$^+$ → pyruvate + NADH.

**Solution:**
1. (a) Joins CO$_2$ to pyruvate at the expense of ATP → **ligase** (pyruvate carboxylase; note biotin cofactor for carboxylations).
2. (b) Cleaves a phosphate ester using water → **hydrolase** (glucose-6-phosphatase).
3. (c) Electron transfer to NAD$^+$ → **oxidoreductase** (lactate dehydrogenase).

**MCAT Strategy:** Scan for the signature: ATP + joining = ligase; water = hydrolase; NAD$^+$/FAD = oxidoreductase; group moved between molecules = transferase.
</details>`
    }
  ]
};
