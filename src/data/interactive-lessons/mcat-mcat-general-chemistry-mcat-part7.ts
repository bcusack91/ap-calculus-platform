export const mcatGenChemPart7Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc7-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 7 of 7 — Electrochemistry & Redox**

Electrochemistry bridges general chemistry, biochemistry, and physiology. The MCAT tests galvanic cells, electrolytic cells, the Nernst equation, and — critically — biological redox: electron transport chain, NADH/FADH₂ as electron carriers, and oxidation state assignments in metabolic intermediates.
`
    },
    {
      id: 'gc7-oxidation-states',
      type: 'text' as const,
      content: `## Oxidation States & Half-Reactions

### Assigning Oxidation States — Rules (in priority order)

1. Free element = 0 (e.g., $\\text{O}_2$, $\\text{Fe}$)
2. Monatomic ion = ionic charge (e.g., $\\text{Na}^+ = +1$, $\\text{Cl}^- = -1$)
3. F is always $-1$ in compounds
4. O is usually $-2$ (exception: peroxides $-1$; $\\text{OF}_2$ = $+2$)
5. H is usually $+1$ (exception: metal hydrides $= -1$)
6. Sum of oxidation states = overall charge of species

**Example — $\\text{Cr}_2\\text{O}_7^{2-}$:**  
$2x + 7(-2) = -2$ → $2x = 12$ → $x = +6$ (Cr is +6, a strong oxidizing agent)

### OIL RIG

**O**xidation **I**s **L**oss of electrons | **R**eduction **I**s **G**ain of electrons

| Term | Definition |
|------|-----------|
| Oxidation | Loss of electrons; increase in oxidation state |
| Reduction | Gain of electrons; decrease in oxidation state |
| Oxidizing agent | Gets reduced (accepts e⁻); is itself oxidized |
| Reducing agent | Gets oxidized (donates e⁻); is itself reduced |

### Balancing Redox Half-Reactions (Acidic Solution)

1. Split into oxidation and reduction half-reactions.
2. Balance atoms other than O and H.
3. Balance O by adding $\\text{H}_2\\text{O}$.
4. Balance H by adding $\\text{H}^+$.
5. Balance charge by adding $e^-$.
6. Multiply half-reactions so electrons cancel; add together.
`
    },
    {
      id: 'gc7-cells',
      type: 'text' as const,
      content: `## Galvanic & Electrolytic Cells

### Key Vocabulary

| Term | Galvanic Cell | Electrolytic Cell |
|------|--------------|-----------------|
| Purpose | Converts chemical energy → electrical | Converts electrical → chemical |
| $\\Delta G$ | Negative (spontaneous) | Positive (non-spontaneous) |
| $E°_{cell}$ | Positive | Negative (or forced) |
| Anode charge | Negative | Positive |
| Cathode charge | Positive | Negative |

**Unchanging rule:** Oxidation always at the anode; reduction always at the cathode.  
Memory: AN-OX, RED-CAT (ANode = OXidation; REDuction = CAThode)

### Standard Cell Potential

$$E°_{cell} = E°_{cathode} - E°_{anode}$$

The half-reaction with the **more positive** standard reduction potential is the cathode (gets reduced).

**Example — Galvanic cell with Zn and Cu:**

| Half-reaction | $E°$ (V) |
|---------------|---------|
| $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$ | $+0.34$ |
| $\\text{Zn}^{2+} + 2e^- \\to \\text{Zn}$ | $-0.76$ |

Cu²⁺ has higher $E°$ → cathode (reduced). Zn → anode (oxidized).

$$E°_{cell} = 0.34 - (-0.76) = +1.10\\text{ V}$$

### Free Energy Connection

$$\\Delta G° = -nFE°_{cell}$$

where $n$ = moles of electrons transferred, $F = 96{,}485$ C/mol (Faraday's constant)

Also: $\\Delta G° = -RT\\ln K$, so a positive $E°_{cell}$ → $K > 1$ → products favored.
`
    },
    {
      id: 'gc7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Redox & Cell Potentials** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the $\\text{Zn-Cu}$ galvanic cell ($E°_{cell} = +1.10$ V, $n = 2$), what is $\\Delta G°$? ($F = 96{,}485$ C/mol)`,
            options: [
              `$-212$ kJ/mol`,
              `$+212$ kJ/mol`,
              `$-106$ kJ/mol`,
              `$+1.10$ J/mol`
            ],
            correctAnswer: 0,
            explanation: `$\\Delta G° = -nFE° = -(2)(96{,}485)(1.10) = -212{,}267\\text{ J/mol} \\approx -212\\text{ kJ/mol}$. Negative $\\Delta G°$ confirms the reaction is spontaneous.`
          },
          {
            question: `In an electrolytic cell used for electroplating copper, at which electrode does copper deposit?`,
            options: [
              `Anode (where oxidation occurs)`,
              `Cathode (where reduction occurs)`,
              `Either electrode depending on $E°$`,
              `At the salt bridge`
            ],
            correctAnswer: 1,
            explanation: `$\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$ is a reduction. Reduction occurs at the cathode. In electroplating, the object to be plated is the cathode.`
          },
          {
            question: `What is the oxidation state of Mn in $\\text{KMnO}_4$?`,
            options: [
              `$+7$`,
              `$+4$`,
              `$+2$`,
              `$+6$`
            ],
            correctAnswer: 0,
            explanation: `$K = +1$, each $O = -2$. Total: $1 + x + 4(-2) = 0$ → $x = +7$. $\\text{KMnO}_4$ is permanganate, Mn(VII), a powerful oxidizing agent commonly used in MCAT redox passages.`
          },
          {
            question: `In the reaction $\\text{Mg} + \\text{CuSO}_4 \\to \\text{MgSO}_4 + \\text{Cu}$, magnesium is:`,
            options: [
              `The oxidizing agent (gains electrons)`,
              `The reducing agent (loses electrons, is oxidized)`,
              `Neither reduced nor oxidized`,
              `The catalyst`
            ],
            correctAnswer: 1,
            explanation: `Mg goes from 0 to +2: loss of electrons = oxidation. Mg is oxidized → it is the reducing agent (reduces $\\text{Cu}^{2+}$ to Cu). Cu²⁺ is the oxidizing agent.`
          },
          {
            question: `If $E°_{cell}$ is positive under standard conditions, which statement is true?`,
            options: [
              `$\\Delta G° > 0$ and $K < 1$`,
              `$\\Delta G° < 0$ and $K > 1$`,
              `$\\Delta G° = 0$ and $K = 1$`,
              `No conclusion can be drawn about $K$`
            ],
            correctAnswer: 1,
            explanation: `$\\Delta G° = -nFE°$. Positive $E°$ → negative $\\Delta G°$ → spontaneous → $K > 1$ (products favored at equilibrium).`
          }
        ]
      }
    },
    {
      id: 'gc7-nernst',
      type: 'text' as const,
      content: `## Nernst Equation & Biological Redox

### Nernst Equation

Cell potential changes with concentration. At 25°C:

$$E = E° - \\frac{0.0592}{n}\\log Q$$

General form:

$$E = E° - \\frac{RT}{nF}\\ln Q$$

**What Q does:**
- $Q < 1$ (more reactants): $E > E°$ (reaction more favorable)
- $Q > 1$ (more products): $E < E°$ (reaction less favorable)
- At equilibrium: $Q = K$, $E = 0$

### Faraday's Law of Electrolysis

$$\\text{mass deposited} = \\frac{M \\cdot I \\cdot t}{n \\cdot F}$$

where $M$ = molar mass, $I$ = current (amps), $t$ = time (seconds), $n$ = electrons per ion, $F = 96{,}485$ C/mol

**Example:** How long to deposit 0.635 g of Cu (M = 63.5 g/mol) at 1.00 A?
$$t = \\frac{m \\cdot n \\cdot F}{M \\cdot I} = \\frac{0.635 \\times 2 \\times 96{,}485}{63.5 \\times 1.00} = \\frac{122{,}500}{63.5} \\approx 1930\\text{ s}$$

### Biological Redox (High-Yield MCAT Connection)

**Electron carriers in cellular respiration:**
- $\\text{NAD}^+$ (oxidized) / NADH (reduced) — 2 electrons + 1 proton
- FAD (oxidized) / $\\text{FADH}_2$ (reduced)

In the **electron transport chain (ETC)**:
- NADH is oxidized (donates electrons to Complex I)
- Electrons move through protein complexes with decreasing energy
- $\\text{O}_2$ is the final electron acceptor (reduced to $\\text{H}_2\\text{O}$)
- Proton gradient drives ATP synthase

This is electrochemistry at its most biological: ETC = a series of redox couples, each with successively more positive $E°$, driving spontaneous electron flow.
`
    },
    {
      id: 'gc7-quiz2',
      type: 'multiple-choice' as const,
      content: `**Nernst Equation & Biological Redox** 🎯`,
      exercise: {
        questions: [
          {
            question: `For a galvanic cell reaction with $n=2$, $E°=+0.50$ V, and $Q=100$ at 25°C, the actual cell potential $E$ is approximately:`,
            options: [
              `$+0.44$ V`,
              `$+0.56$ V`,
              `$+0.50$ V`,
              `$-0.44$ V`
            ],
            correctAnswer: 0,
            explanation: `$E = E° - (0.0592/n)\\log Q = 0.50 - (0.0592/2)\\log 100 = 0.50 - 0.0296 \\times 2 = 0.50 - 0.059 \\approx 0.44$ V.`
          },
          {
            question: `In the electron transport chain, $\\text{O}_2$ is the final electron acceptor. This means $\\text{O}_2$ is:`,
            options: [
              `Oxidized to $\\text{H}_2\\text{O}$`,
              `Reduced to $\\text{H}_2\\text{O}$`,
              `A reducing agent`,
              `Converted to $\\text{CO}_2$`
            ],
            correctAnswer: 1,
            explanation: `$\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$. Accepting electrons = reduction. $\\text{O}_2$ is the strongest oxidizing agent in the ETC and is reduced to water.`
          },
          {
            question: `How does NADH function in cellular respiration?`,
            options: [
              `As a proton pump in the mitochondrial membrane`,
              `As the final electron acceptor`,
              `As an electron donor (reducing agent) that donates electrons to Complex I`,
              `As an ATP phosphate group donor`
            ],
            correctAnswer: 2,
            explanation: `NADH is oxidized to $\\text{NAD}^+$ at Complex I, donating 2 electrons to the electron transport chain. NADH is the reducing agent — it gets oxidized and reduces the protein complex.`
          }
        ]
      }
    },
    {
      id: 'gc7-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 7

- **AN-OX, RED-CAT:** Anode = Oxidation; Cathode = Reduction — in both galvanic AND electrolytic cells.
- **Galvanic:** spontaneous, $E° > 0$, $\\Delta G < 0$; **Electrolytic:** non-spontaneous, requires external energy.
- **$E°_{cell} = E°_{cathode} - E°_{anode}$:** the half-reaction with higher $E°$ is at the cathode.
- **$\\Delta G° = -nFE°$:** positive $E°$ → negative $\\Delta G°$ → $K > 1$.
- **Nernst equation:** more product ($Q$ ↑) → lower cell potential; at equilibrium $E = 0$.
- **Oxidizing agent** gets reduced; **reducing agent** gets oxidized.
- **ETC connection:** NADH (reducing agent) → Complex I → O₂ (final oxidizing agent) → H₂O.
`
    }
  ]
};
