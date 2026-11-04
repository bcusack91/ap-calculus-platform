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

**Combustion analysis** supplies the same data for an unknown hydrocarbon: every C leaves as $\\text{CO}_2$ and every H as $\\text{H}_2\\text{O}$, so mol C $=$ mol $\\text{CO}_2$ collected and mol H $= 2 \\times$ mol $\\text{H}_2\\text{O}$; any oxygen in the compound is found by mass difference. (The *Combustion Analysis* section later in this part works a full example.)

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
      id: 'st1-balancing',
      type: 'text' as const,
      content: `## Balancing Equations by Inspection

A chemical equation is a recipe written in moles, and it is usable only once it is balanced: each element, and the net charge, must match on both sides, because a reaction rearranges atoms and electrons without creating or destroying either. Only the **coefficients** (the numbers in front of formulas) may be changed. Subscripts are fixed, since rewriting $\\text{H}_2\\text{O}$ as $\\text{H}_2\\text{O}_2$ names a different substance.

### A Reliable Order

1. Give the most complex formula a coefficient of 1 and work outward from it.
2. Balance elements that appear in only one species per side first; a polyatomic ion that survives unchanged ($\\text{SO}_4^{2-}$, $\\text{NO}_3^-$, $\\text{PO}_4^{3-}$) counts as one unit.
3. Balance H, then O, last; they usually appear in several species.
4. Free elements ($\\text{O}_2$, Fe, $\\text{Cl}_2$) go last, since their coefficient disturbs nothing else.
5. If a fraction appears, multiply every coefficient by its denominator, then recount each element.

**Example — aluminum burning in oxygen:** $\\text{Al} + \\text{O}_2 \\to \\text{Al}_2\\text{O}_3$. With one $\\text{Al}_2\\text{O}_3$, Al needs a 2 and O needs 3 atoms, which is $\\tfrac{3}{2}\\text{O}_2$. Doubling everything clears the fraction: $4\\text{Al} + 3\\text{O}_2 \\to 2\\text{Al}_2\\text{O}_3$ (Al $4 = 4$, O $6 = 6$).

### Charge Must Balance Too

In a net ionic equation, atom bookkeeping is not enough: the total charge on each side must match. $\\text{Al} + \\text{Cu}^{2+} \\to \\text{Al}^{3+} + \\text{Cu}$ has one Al and one Cu on each side, yet the left is $2+$ and the right is $3+$. The fix comes from the least common multiple of the charges, 6: two $\\text{Al}^{3+}$ ($6+$) need three $\\text{Cu}^{2+}$ ($6+$):

$$2\\text{Al} + 3\\text{Cu}^{2+} \\to 2\\text{Al}^{3+} + 3\\text{Cu}$$

Read as electrons, each Al loses 3 and each $\\text{Cu}^{2+}$ gains 2, so 2 Al supply the 6 electrons that 3 $\\text{Cu}^{2+}$ take; a charge mismatch always means electrons are unaccounted for.
`
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

### Worked Example — Balancing by Inspection

**Problem.** Balance two equations: the combustion of ethanol, $\\text{C}_2\\text{H}_5\\text{OH} + \\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O}$, and the reaction of aluminum metal with silver ion, $\\text{Al} + \\text{Ag}^+ \\to \\text{Al}^{3+} + \\text{Ag}$.

- **(a)** With one ethanol, what coefficients do $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ take?
- **(b)** How many $\\text{O}_2$ does the ethanol equation then need?
- **(c)** The silver equation already has one Al and one Ag on each side; what shows it is still unbalanced?
- **(d)** What coefficients balance the silver equation for both atoms and charge?

**(a) Carbon and hydrogen first.** Two C give $2\\text{CO}_2$; the six H ($5 + 1$) give $3\\text{H}_2\\text{O}$. Oxygen waits, since it sits in every species but one.

**(b) Oxygen last.** With $2\\text{CO}_2 + 3\\text{H}_2\\text{O}$ from (a), the right side holds $4 + 3 = 7$ O. Ethanol supplies 1, so $\\text{O}_2$ must supply 6 atoms, or 3 molecules: $\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\to 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$. Check: C $2 = 2$, H $6 = 6$, O $7 = 7$.

**(c) The charge check.** The left side is $1+$ and the right is $3+$. Atoms balance, but each Al gives up three electrons while each $\\text{Ag}^+$ accepts only one, so two electrons are unaccounted for.

**(d) Charge balance.** One $\\text{Al}^{3+}$ ($3+$) needs three $\\text{Ag}^+$ ($3+$): $\\text{Al} + 3\\text{Ag}^+ \\to \\text{Al}^{3+} + 3\\text{Ag}$. Both sides now hold 1 Al, 3 Ag and a charge of $3+$, and the 3 electrons Al loses are the 3 that the silver ions gain.
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
          },
          {
            question: `Iron rusts by $\\text{Fe} + \\text{O}_2 \\to \\text{Fe}_2\\text{O}_3$. Which coefficients, in order (Fe, $\\text{O}_2$, $\\text{Fe}_2\\text{O}_3$), balance the equation with whole numbers?`,
            options: [`2, 3, 1`, `4, 3, 2`, `2, 3, 2`, `4, 6, 2`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Start from one $\\text{Fe}_2\\text{O}_3$: 2 Fe and 3 O, which is $\\tfrac{3}{2}\\text{O}_2$; doubling clears the fraction to $4\\text{Fe} + 3\\text{O}_2 \\to 2\\text{Fe}_2\\text{O}_3$ (Fe $4 = 4$, O $6 = 6$). The set 2, 3, 1 has six O atoms on the left against three on the right; 2, 3, 2 has two Fe against four; and 4, 6, 2 counts the six O atoms needed as six $\\text{O}_2$ molecules.`
          },
          {
            question: `Which equation is balanced for both atoms and charge?`,
            options: [
              `$\\text{Cu} + \\text{Ag}^+ \\to \\text{Cu}^{2+} + \\text{Ag}$`,
              `$\\text{Cu} + 2\\text{Ag}^+ \\to \\text{Cu}^+ + 2\\text{Ag}$`,
              `$\\text{Cu} + 2\\text{Ag}^+ \\to \\text{Cu}^{2+} + 2\\text{Ag}$`,
              `$2\\text{Cu} + \\text{Ag}^+ \\to \\text{Cu}^{2+} + \\text{Ag}$`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `With two silver ions per copper, both sides hold 1 Cu and 2 Ag, and the charge is $2+$ on each side: the two electrons one Cu loses are the two that two $\\text{Ag}^+$ gain. The one-to-one version balances atoms but has $1+$ against $2+$; the version forming $\\text{Cu}^+$ has $2+$ against $1+$; and the version with two Cu atoms on the left but one on the right fails the atom count.`
          },
          {
            question: `A student "balances" $\\text{H}_2 + \\text{O}_2 \\to \\text{H}_2\\text{O}$ by rewriting the product as $\\text{H}_2\\text{O}_2$. What is wrong with this?`,
            options: [
              `Changing a subscript changes the substance; only coefficients may be changed`,
              `Nothing; each side now has the same number of atoms of every element`,
              `The $\\text{O}_2$ also needs a coefficient of 2 for the atoms to match`,
              `Coefficients should be left as fractions rather than cleared`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\text{H}_2\\text{O}_2$ is hydrogen peroxide, not water, so the rewritten equation describes a different reaction; the real fix is a coefficient, $2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$. The atoms do match in the student's version, which is exactly why the error is tempting; giving $\\text{O}_2$ a 2 would unbalance oxygen again; and fractions are cleared, not kept, in a finished equation.`
          }
        ]
      }
    },
    {
      id: 'st1-combustion',
      type: 'text' as const,
      content: `## Combustion Analysis

A weighed sample of an unknown organic compound burns completely in excess $\\text{O}_2$; a drying agent traps the water, a basic absorbent traps the $\\text{CO}_2$, and each trap is weighed. Conservation of atoms turns those two masses into a formula:

- **Carbon:** every C atom leaves in one $\\text{CO}_2$, so mol C $=$ mol $\\text{CO}_2 = m_{\\text{CO}_2}/44.0$.
- **Hydrogen:** every H atom leaves in water, two per molecule, so mol H $= 2 \\times$ mol $\\text{H}_2\\text{O} = 2 \\times m_{\\text{H}_2\\text{O}}/18.0$.
- **Oxygen:** the oxygen in the products came largely from the $\\text{O}_2$ supply, so it says nothing about the sample. Instead, mass O $=$ sample mass $-$ mass C $-$ mass H, with mass C $=$ mol C $\\times 12.0$ and mass H $=$ mol H $\\times 1.0$; then mol O $=$ mass O$/16.0$. A difference near zero means a pure hydrocarbon.

From there the route is the familiar one: divide the moles by the smallest for the empirical formula, then scale by $M_{\\text{molecular}}/M_{\\text{empirical}}$ once a molar mass is known. Note that the mass of $\\text{CO}_2$ is not the mass of carbon: only $12.0/44.0 = 27.3\\%$ of it is.

### Worked Example — Combustion Analysis of an Oxygen-Containing Compound

**Problem.** A 0.920 g sample of a compound of C, H and O burns completely, giving 1.76 g of $\\text{CO}_2$ (44.0 g/mol) and 1.08 g of $\\text{H}_2\\text{O}$ (18.0 g/mol). Its molar mass is 46.0 g/mol.

- **(a)** How many moles of C and of H does the sample contain?
- **(b)** What mass of oxygen does the sample contain?
- **(c)** What is the empirical formula?
- **(d)** Is that also the molecular formula?

**(a) From the traps.** $\\text{CO}_2$: $1.76/44.0 = 0.0400$ mol, so 0.0400 mol C. $\\text{H}_2\\text{O}$: $1.08/18.0 = 0.0600$ mol, and two H per water give $2 \\times 0.0600 = 0.120$ mol H.

**(b) Oxygen by difference.** With the moles from (a): mass C $= 0.0400 \\times 12.0 = 0.480$ g and mass H $= 0.120 \\times 1.0 = 0.120$ g, so mass O $= 0.920 - 0.480 - 0.120 = 0.320$ g, which is $0.320/16.0 = 0.0200$ mol O. (The oxygen in the traps is useless here; most of it came from the $\\text{O}_2$ supply.)

**(c) Simplest ratio.** Dividing 0.0400, 0.120 and 0.0200 by the smallest, 0.0200: C 2, H 6, O 1. The empirical formula is $\\text{C}_2\\text{H}_6\\text{O}$, mass $24.0 + 6.0 + 16.0 = 46.0$ g/mol.

**(d) Scale check.** $46.0/46.0 = 1$, so the molecular formula is also $\\mathbf{\\text{C}_2\\text{H}_6\\text{O}}$. Combustion analysis cannot tell isomers apart: ethanol and dimethyl ether both fit.
`
    },
    {
      id: 'st1-quiz3',
      type: 'multiple-choice' as const,
      content: `**Combustion Analysis** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 1.50 g sample of a compound containing C, H and O burns completely to give 2.20 g of $\\text{CO}_2$ (44.0 g/mol) and 0.900 g of $\\text{H}_2\\text{O}$ (18.0 g/mol). What mass of oxygen did the sample contain?`,
            options: [`0.700 g`, `0.850 g`, `0.800 g`, `2.40 g`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$2.20/44.0 = 0.0500$ mol C, or 0.600 g; $0.900/18.0 = 0.0500$ mol water, so 0.100 mol H, or 0.100 g. Oxygen is what is left: $1.50 - 0.600 - 0.100 = 0.800$ g. The value 0.850 g counts one H per water (0.050 g of H), 0.700 g is the carbon plus hydrogen rather than the remainder, and 2.40 g adds up the oxygen in the trapped products, most of which came from the $\\text{O}_2$ supply.`
          },
          {
            question: `A hydrocarbon burns completely and produces equal numbers of moles of $\\text{CO}_2$ and $\\text{H}_2\\text{O}$. Which compound could it be?`,
            options: [`$\\text{C}_2\\text{H}_6$`, `$\\text{C}_3\\text{H}_6$`, `$\\text{C}_2\\text{H}_2$`, `$\\text{C}_6\\text{H}_6$`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Equal moles of $\\text{CO}_2$ and water mean mol C $=$ mol $\\text{H}_2\\text{O}$ and mol H $= 2 \\times$ mol $\\text{H}_2\\text{O}$, so the compound has two H per C, the $\\text{CH}_2$ ratio of $\\text{C}_3\\text{H}_6$ (3 $\\text{CO}_2$ and 3 $\\text{H}_2\\text{O}$). Ethane gives 2 $\\text{CO}_2$ and 3 waters, acetylene gives 2 $\\text{CO}_2$ and 1 water, and benzene gives 6 $\\text{CO}_2$ and 3 waters.`
          },
          {
            question: `A student estimates a sample's oxygen content by adding up the oxygen atoms in the trapped $\\text{CO}_2$ and $\\text{H}_2\\text{O}$. Compared with the true value, this estimate is:`,
            options: [
              `Too high, since the products also carry oxygen from the $\\text{O}_2$ supply`,
              `Too low, since part of the sample's oxygen leaves as unreacted $\\text{O}_2$ gas`,
              `Correct, since the only oxygen in the products is the sample's own oxygen`,
              `Correct only if the sample was a pure hydrocarbon with no oxygen at all`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The sample burns in excess oxygen, so the O atoms in the $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ are a mixture of the sample's oxygen and the supply's; counting all of them overstates the sample's share, which is why sample O is taken by difference instead. The sample's oxygen does not escape as $\\text{O}_2$; the products hold far more than the sample's own oxygen; and for a pure hydrocarbon the estimate is worst of all, since the true value is zero while the products still contain oxygen.`
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
- **Empirical vs. molecular.** % or combustion data → moles → divide by the smallest, clearing fractions ($1 : 1.5 \\to 2 : 3$); scale by $M_{\\text{molecular}}/M_{\\text{empirical}}$.
- **Balance, then use the ratio.** Change coefficients only, matching atoms AND charge; then grams → moles → mole ratio → grams.

**Common traps**

- **22.4 L for everything.** The 22.4 L/mol shortcut holds only for an ideal gas at STP, never for liquids, solids or other conditions.
- **Grams-to-grams jumps.** Masses never convert directly between two substances; only the mole ratio bridges them.
- **One H per water, O from the traps.** Each $\\text{H}_2\\text{O}$ carries two H, and product oxygen includes the $\\text{O}_2$ supply, so sample O comes by difference.
- **Atoms balanced, charge not.** $\\text{Al} + \\text{Ag}^+ \\to \\text{Al}^{3+} + \\text{Ag}$ matches atoms yet reads $1+$ against $3+$; three $\\text{Ag}^+$ per Al fix it.

<!-- yield:low -->
- Low-yield extras: the modern 0°C / 100 kPa definition of STP.
<!-- /yield -->
`
    }
  ]
};
