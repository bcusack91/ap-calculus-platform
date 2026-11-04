export const mcatStoichiometryPart1Data = {
  topicSlug: 'mcat-general-chemistry-stoichiometry-mcat',
  sections: [
    {
      id: 'st1-intro',
      type: 'text' as const,
      content: `# Stoichiometry: Moles & Reactions

**Part 1 of 2 — Moles, Molar Mass & Avogadro's Number**

Stoichiometry is the quantitative backbone of chemistry. Every MCAT general chemistry calculation—concentration, yield, titration, gas laws—relies on accurate mole conversions.

## The Mole

One mole = $6.022 \\times 10^{23}$ entities (Avogadro's number, $N_A$).

This is the bridge between **atomic scale** (amu) and **lab scale** (grams): a particle of mass $X$ amu has a molar mass of $X$ g/mol. One $\\text{H}_2\\text{O}$ molecule is 18.0 amu, so one mole of water weighs 18.0 g.

### Key Conversions

$$\\text{moles} = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}}$$

$$\\text{molecules} = \\text{moles} \\times 6.022 \\times 10^{23}$$

$$\\text{moles (gas at STP)} = \\frac{\\text{volume (L)}}{22.4\\text{ L/mol}}$$

"STP" on the MCAT means 0°C and 1 atm, where one mole of ideal gas fills 22.4 L.

<!-- yield:low -->
(Note: some modern definitions use 0°C / 100 kPa; the MCAT typically uses the traditional 22.4 L/mol value.)
<!-- /yield -->

### Density

Density links mass and volume: $\\rho = m/V$. For an ideal gas, substituting $n = m/M$ into $PV = nRT$ gives
$$\\rho = \\frac{PM}{RT}$$
so at STP a gas's density is $M/22.4$ g/L (for $\\text{O}_2$, $32.0/22.4 = 1.43$ g/L). A heavier gas is denser at the same $P$ and $T$.

## Molar Mass Calculation

Add the atomic masses of all atoms in the formula.

**Example — $\\text{H}_2\\text{SO}_4$ (sulfuric acid):** $2(1.0) + 32.1 + 4(16.0) = 2.0 + 32.1 + 64.0 = \\mathbf{98.1\\text{ g/mol}}$.

**Example — $\\text{Ca}_3(\\text{PO}_4)_2$ (calcium phosphate):** a subscript outside parentheses multiplies everything inside, so there are 2 P and 8 O: $3(40.1) + 2(31.0) + 8(16.0) = 120.3 + 62.0 + 128.0 = \\mathbf{310.3\\text{ g/mol}}$.

## Percent Composition

$$\\%\\text{ by mass of element} = \\frac{n \\times M_{\\text{element}}}{M_{\\text{compound}}} \\times 100$$

**Example — % O in $\\text{H}_2\\text{O}$:**
$$\\frac{16.0}{18.0} \\times 100 = 88.9\\%$$

## Empirical vs. Molecular Formula

- **Empirical formula:** Simplest whole-number ratio of atoms.
- **Molecular formula:** Actual number of atoms; always a whole-number multiple of the empirical formula.

**Workflow, % composition → empirical formula:** assume a 100 g sample (grams = percentages) → divide each by its atomic mass (moles) → divide all by the smallest → round to integers, multiplying through if a fraction remains ($1 : 1.5$ becomes $2 : 3$).

**Combustion analysis** supplies the same data for an unknown hydrocarbon: every C leaves as $\\text{CO}_2$ and every H as $\\text{H}_2\\text{O}$, so mol C $=$ mol $\\text{CO}_2$ collected and mol H $= 2 \\times$ mol $\\text{H}_2\\text{O}$; any oxygen in the compound is found by mass difference.

### Worked Example — From % Composition to Molecular Formula

**Problem.** A compound is 54.5% C, 9.1% H and 36.4% O by mass, and its molar mass is 88 g/mol.

- **(a)** How many moles of each element are in a 100 g sample?
- **(b)** What is the empirical formula?
- **(c)** What is the molecular formula?

**(a) Moles per 100 g.** C: $54.5/12.0 = 4.54$ mol. H: $9.1/1.0 = 9.1$ mol. O: $36.4/16.0 = 2.275$ mol.

**(b) Simplest ratio.** Divide the moles from (a) by the smallest, 2.275: C $= 2.0$, H $= 4.0$, O $= 1.0$. The empirical formula is $\\text{C}_2\\text{H}_4\\text{O}$, with mass $24 + 4 + 16 = 44$ g/mol.

**(c) Scale up.** With 44 g/mol from (b): $n = 88/44 = 2$, so the molecular formula is $(\\text{C}_2\\text{H}_4\\text{O})_2 = \\mathbf{\\text{C}_4\\text{H}_8\\text{O}_2}$.
`
    },
    {
      id: 'st1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Moles & Molar Mass — Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: `How many moles are in 49.0 g of $\\text{H}_2\\text{SO}_4$ (molar mass = 98.1 g/mol)?`,
            options: [`0.25 mol`, `0.50 mol`, `1.00 mol`, `2.00 mol`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `$n = m/M = 49.0/98.1 \\approx 0.50\\text{ mol}$. The value 2.00 mol divides the molar mass by the mass instead of the reverse, 1.00 mol treats the 49.0 g sample as a full mole, and 0.25 mol halves the correct answer again.`
          },
          {
            question: `What is the percent composition of carbon in glucose $\\text{C}_6\\text{H}_{12}\\text{O}_6$ (molar mass = 180 g/mol)?`,
            options: [`40.0%`, `53.3%`, `6.7%`, `25.0%`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `% C $= (6 \\times 12.0)/180 \\times 100 = 72/180 \\times 100 = \\mathbf{40.0\\%}$. The value 53.3% is oxygen's share and 6.7% is hydrogen's; 25.0% counts atoms (6 of 24) instead of mass.`
          },
          {
            question: `A compound is 40.0% C, 6.7% H, and 53.3% O by mass. What is its empirical formula?`,
            options: [`$\\text{CH}_2\\text{O}$`, `$\\text{C}_2\\text{H}_4\\text{O}_2$`, `$\\text{CHO}$`, `$\\text{CH}_4\\text{O}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Moles: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Ratio: C:H:O = 3.33:6.7:3.33 = 1:2:1. Empirical formula = **$\\text{CH}_2\\text{O}$** (formaldehyde unit; glucose and others have this EF). $\\text{C}_2\\text{H}_4\\text{O}_2$ has the right ratio but is not the simplest; $\\text{CHO}$ divides hydrogen's mass by 2.0 instead of 1.0, and $\\text{CH}_4\\text{O}$ doubles the hydrogen moles.`
          },
          {
            question: `How many molecules are in 2.0 moles of $\\text{CO}_2$?`,
            options: [
              `$6.0 \\times 10^{23}$`,
              `$1.2 \\times 10^{24}$`,
              `$3.0 \\times 10^{23}$`,
              `$3.3 \\times 10^{-24}$`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$2.0\\text{ mol} \\times 6.022 \\times 10^{23}\\text{ molecules/mol} = \\mathbf{1.2 \\times 10^{24}\\text{ molecules}}$. $6.0 \\times 10^{23}$ is only one mole, $3.0 \\times 10^{23}$ divides Avogadro's number by 2 instead of multiplying, and $3.3 \\times 10^{-24}$ divides the moles by $N_A$.`
          },
          {
            question: `A compound has empirical formula $\\text{CH}_2$ and molar mass 56 g/mol. What is its molecular formula?`,
            options: [`$\\text{C}_2\\text{H}_4$`, `$\\text{C}_3\\text{H}_6$`, `$\\text{C}_4\\text{H}_8$`, `$\\text{C}_5\\text{H}_{10}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Empirical formula mass of $\\text{CH}_2 = 14\\text{ g/mol}$. Ratio $= 56/14 = 4$. Molecular formula $= (\\text{CH}_2)_4 = \\mathbf{\\text{C}_4\\text{H}_8}$ (could be cyclobutane or 1-butene). Check by molar mass: $\\text{C}_2\\text{H}_4$ is 28, $\\text{C}_3\\text{H}_6$ is 42 and $\\text{C}_5\\text{H}_{10}$ is 70 g/mol, so none matches 56.`
          }
        ]
      }
    },
    {
      id: 'st1-worked',
      type: 'text' as const,
      content: `## Worked Example: Multi-Step Mole Calculation

**Problem.** 9.80 g of $\\text{H}_2\\text{SO}_4$ ($M = 98.1$ g/mol) reacts completely with excess NaOH:

$$\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$$

- **(a)** How many moles of $\\text{H}_2\\text{SO}_4$ react?
- **(b)** How many moles of $\\text{Na}_2\\text{SO}_4$ form?
- **(c)** How many grams of $\\text{Na}_2\\text{SO}_4$ is that?

**(a) Moles of acid.** Divide the mass by the molar mass:
$$n = \\frac{9.80\\text{ g}}{98.1\\text{ g/mol}} = 0.100\\text{ mol}$$

**(b) Mole ratio.** The balanced equation gives 1 mol $\\text{Na}_2\\text{SO}_4$ per mol $\\text{H}_2\\text{SO}_4$, so the $0.100$ mol from (a) gives:
$$0.100\\text{ mol } \\text{H}_2\\text{SO}_4 \\times \\frac{1\\text{ mol } \\text{Na}_2\\text{SO}_4}{1\\text{ mol } \\text{H}_2\\text{SO}_4} = 0.100\\text{ mol}$$

**(c) Grams of salt.** The molar mass is $2(23) + 32 + 4(16) = 142\\text{ g/mol}$, so the $0.100$ mol from (b) weighs:
$$0.100\\text{ mol} \\times 142\\text{ g/mol} = \\mathbf{14.2\\text{ g}}$$

### MCAT Strategy
Always write the balanced equation first. Every stoichiometry problem requires it. Check that atoms and charges balance on both sides before calculating.
`
    },
    {
      id: 'st1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Applied Mole Calculations** 🎯`,
      exercise: {
        questions: [
          {
            question: `How many grams of $\\text{NaCl}$ (molar mass = 58.5 g/mol) contain $1.20 \\times 10^{24}$ formula units?`,
            options: [`58.5 g`, `117 g`, `175.5 g`, `29.3 g`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Moles $= 1.20 \\times 10^{24} / 6.02 \\times 10^{23} = 2.0\\text{ mol}$. Mass $= 2.0 \\times 58.5 = \\mathbf{117\\text{ g}}$. The value 29.3 g inverts the particle ratio (0.50 mol); 58.5 g is one mole and 175.5 g is three.`
          },
          {
            question: `What volume (in L) does 0.500 mol of an ideal gas occupy at STP?`,
            options: [`11.2 L`, `22.4 L`, `44.8 L`, `5.6 L`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `At STP, 1 mol of ideal gas occupies 22.4 L. So 0.500 mol occupies $0.500 \\times 22.4 = \\mathbf{11.2\\text{ L}}$. 22.4 L is a full mole, 44.8 L divides 22.4 by 0.500 instead of multiplying, and 5.6 L halves the answer again.`
          },
          {
            question: `Combustion analysis of 0.300 g of a hydrocarbon produces 0.880 g $\\text{CO}_2$ and 0.540 g $\\text{H}_2\\text{O}$. What is the empirical formula?`,
            options: [`$\\text{C}_2\\text{H}_3$`, `$\\text{C}_4\\text{H}$`, `$\\text{CH}_3$`, `$\\text{C}_2\\text{H}_6$`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Moles $\\text{CO}_2 = 0.880/44 = 0.0200$, so mol C $= 0.0200$. Moles $\\text{H}_2\\text{O} = 0.540/18 = 0.0300$, so mol H $= 0.0600$. C:H $= 0.020:0.060 = 1:3$. Empirical formula $= \\mathbf{\\text{CH}_3}$. $\\text{C}_2\\text{H}_3$ forgets that each water carries two H; $\\text{C}_4\\text{H}$ treats the roughly 4 : 1 mass ratio of C to H (0.240 g : 0.060 g) as a mole ratio; $\\text{C}_2\\text{H}_6$ is a molecular formula, not the simplest ratio.`
          }
        ]
      }
    },
    {
      id: 'st1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **The mole is the hub.** 1 mol $= 6.022 \\times 10^{23}$ particles $=$ the molar mass in grams $=$ 22.4 L of ideal gas at STP.
- **Molar mass and % mass.** Sum atomic mass × subscript; % of an element $= n \\times M_{\\text{element}}/M_{\\text{compound}} \\times 100$.
- **Empirical vs. molecular.** % → moles → divide by the smallest gives the empirical formula; scale it by $M_{\\text{molecular}}/M_{\\text{empirical}}$.
- **Balance, then use the ratio.** Grams → moles → mole ratio from the balanced equation → grams solves every conversion.

**Common traps**

- **22.4 L for everything.** The 22.4 L/mol shortcut holds only for an ideal gas at STP, never for liquids, solids or other conditions.
- **Grams-to-grams jumps.** Masses never convert directly between two substances; only the mole ratio bridges them.
- **One H per water.** Each $\\text{H}_2\\text{O}$ carries two H atoms, so in combustion analysis mol H $= 2 \\times$ mol $\\text{H}_2\\text{O}$.
- **Rounding away fractions.** A ratio of $1 : 1.5$ is not rounded to $1 : 2$; multiply through by 2 to get $2 : 3$.

<!-- yield:low -->
- Low-yield extras: the modern 0°C / 100 kPa definition of STP.
<!-- /yield -->
`
    }
  ]
};
