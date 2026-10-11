/**
 * MCAT Full-Length Form 3 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-09-30 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL3_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — Electrolysis & Faraday's laws: silver plating
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Electroplating Antimicrobial Silver Coatings',
    passageText:
      'Silver ions are toxic to many bacteria at concentrations that human tissue tolerates, so thin silver coatings are applied to some catheters, wound dressings, and orthopedic pins to reduce the risk of infection. A common way to coat a conductive object is electroplating, a form of electrolysis in which an external power supply drives a redox reaction that would not proceed on its own. The object to be coated is immersed in a solution containing ions of the coating metal and is wired to one terminal of the supply, and a second electrode, the counter electrode, completes the circuit through the solution. As current flows, metal ions from the solution become atoms that remain on the surface of the object as a solid film.\n\nThe amount of metal deposited is governed by Faraday’s laws of electrolysis. The charge that passes through the cell equals the current multiplied by the time for which it flows, and one mole of electrons carries a charge of approximately 96,500 C (the Faraday constant). The number of moles of metal deposited therefore equals the number of moles of electrons delivered divided by the number of electrons needed to convert one ion into one atom. In practice, not every electron that reaches the object deposits metal. Some electrons can drive a competing reaction at the same surface, such as the conversion of water or hydronium ions to hydrogen gas. The fraction of the total charge that yields the desired product is called the current efficiency of the process.\n\nA laboratory preparing silver-coated stainless-steel pins carried out the runs summarized in Table 1. In Runs 1–4, each pin was immersed in a 0.10 M aqueous silver nitrate bath at pH 5 and 25 °C, and the counter electrode was a bar of pure silver. The bath was stirred at a constant rate, and each pin had an exposed surface area of 20 cm². A regulated supply held the current constant for exactly 965 s, after which the pin was rinsed, dried, and weighed; the gain in mass was taken as the mass of the deposit. In each of Runs 1–4, the silver bar weighed less at the end than at the start. Near the end of Run 4, small bubbles of a colorless gas were seen forming on the pin.\n\nTo compare metals, the laboratory also coated one pin with copper (Run 5), using a 0.10 M copper(II) sulfate bath and a copper counter electrode, with all other conditions unchanged. The molar masses of silver and copper are 108 g/mol and 63.5 g/mol, respectively.\n\nBefore scaling up, the laboratory planned to identify conditions that would deposit a coating of a specified mass in the shortest practical time without roughening the surface. The staff noted that deposits formed at very high current tend to be powdery and poorly adherent, because the metal ions next to the surface are consumed faster than stirring can replace them, and that a coating thinner than about 1 μm tends to wear through wherever the pin rubs against bone or another implant.',
    figure:
      '**Table 1.** Electroplating runs (constant current, 965 s each)\n\n| Run | Bath | Current (A) | Mass deposited (mg) |\n|---|---|---|---|\n| 1 | AgNO₃ | 0.10 | 108 |\n| 2 | AgNO₃ | 0.20 | 216 |\n| 3 | AgNO₃ | 0.40 | 389 |\n| 4 | AgNO₃ | 0.80 | 605 |\n| 5 | CuSO₄ | 0.20 | 63 |',
    questions: [
      {
        question: 'During Runs 1–4, the pin functioned as the:',
        options: [
          'anode, and it was connected to the positive terminal of the supply',
          'cathode, and it was connected to the positive terminal of the supply',
          'anode, and it was connected to the negative terminal of the supply',
          'cathode, and it was connected to the negative terminal of the supply',
        ],
        correctAnswer: 3,
        explanation:
          'Silver ions gained electrons at the pin and became solid silver, so reduction occurred there, which makes the pin the cathode. In an electrolytic cell the external supply pushes electrons into the cathode, so the cathode is the electrode wired to the negative terminal. The silver bar, which lost mass as Ag was oxidized to $\\text{Ag}^+$, was the anode, wired to the positive terminal; both anode options therefore describe the bar, not the pin. A cathode wired to the positive terminal reverses the polarity that an external supply imposes during electrolysis.',
        optionExplanations: [
          'The anode is where oxidation occurs. In Runs 1–4 the silver bar lost mass as Ag was oxidized to $\\text{Ag}^+$, so the bar, not the pin, was the anode wired to the positive terminal.',
          'The pin is indeed the cathode, since silver ions were reduced to metal on it, but in an electrolytic cell the supply pushes electrons into the cathode, so it must be wired to the negative terminal, not the positive one.',
          'The pin gained silver by reduction of $\\text{Ag}^+$, so it cannot be the anode. The negative terminal is correct for the pin, but the electrode name is wrong; the anode in these runs was the silver bar.',
          'Silver ions gained electrons at the pin and became solid silver, so reduction occurred there, making the pin the cathode. In electrolysis the external supply drives electrons into the cathode, so it is wired to the negative terminal.',
        ],
        skill: '4C electrolytic cells (Skill 1)',
      },
      {
        question: 'Based on Table 1, as the current in the silver bath was raised from 0.10 A to 0.80 A, the current efficiency:',
        options: [
          'stayed near 100% at every current, since the deposit grew at each step',
          'fell at every step, since the deposit grew less than the current did',
          'stayed near 100% at the two lowest currents and then fell at higher ones',
          'rose at every step, since more total charge passed at the higher currents',
        ],
        correctAnswer: 2,
        explanation:
          'Each run lasted 965 s, so 0.10 A delivers 96.5 C, or 1.0 mmol of electrons, enough for 1.0 mmol (108 mg) of silver. The theoretical masses for Runs 1–4 are therefore 108, 216, 432, and 864 mg, and the measured masses correspond to efficiencies of about 100%, 100%, 90%, and 70%. The deposit did grow at every step, but from 0.40 A upward it grew less than in proportion to the current, so the efficiency did not stay at 100%. Between Runs 1 and 2 the deposit doubled along with the current, so the efficiency did not fall at every step, and passing more charge does not by itself raise the fraction of charge used for silver.',
        optionExplanations: [
          'Growth of the deposit at each step does not mean 100% efficiency. The theoretical masses are 108, 216, 432 and 864 mg; the measured 389 and 605 mg at 0.40 and 0.80 A fall well short, showing efficiency dropped.',
          'Between Runs 1 and 2 the deposit exactly doubled (108 to 216 mg) along with the current, so efficiency stayed at 100% for that step. The decline begins only at 0.40 A, not at every step.',
          'With 965 s per run, 0.10 A delivers 1.0 mmol of electrons, enough for 108 mg of silver. Theoretical masses are 108, 216, 432 and 864 mg; measured values give efficiencies of about 100%, 100%, 90% and 70%, so efficiency held and then fell.',
          'Passing more total charge does not increase the fraction of charge that deposits silver. In fact the deposit grew less than proportionally at higher currents, and gas bubbles in Run 4 signal a competing reaction consuming electrons.',
        ],
        skill: '4C current efficiency from data (Skill 4)',
      },
      {
        question: 'Compared with Run 2, Run 5 deposited:',
        options: [
          'half as many moles of metal, because each $\\text{Cu}^{2+}$ ion requires two electrons',
          'the same number of moles of metal, because the same charge was passed',
          'half as many moles of metal, because copper plated with lower efficiency',
          'one-third as many moles of metal, because copper has a lower molar mass',
        ],
        correctAnswer: 0,
        explanation:
          'Run 2 deposited 216 mg ÷ 108 g/mol ≈ 2.0 mmol of silver, and Run 5 deposited 63 mg ÷ 63.5 g/mol ≈ 1.0 mmol of copper. Both runs passed 193 C (2.0 mmol of electrons); each $\\text{Ag}^+$ needs one electron but each $\\text{Cu}^{2+}$ needs two, so the same charge deposits half as many moles of copper, with both efficiencies near 100%. Equal charge gives equal moles only when the ions carry the same charge. The copper efficiency was not lower, since 1.0 mmol was deposited out of an expected 1.0 mmol. One-third is roughly the ratio of the masses deposited, not of the moles.',
        optionExplanations: [
          'Run 2 deposited 216 mg ÷ 108 g/mol ≈ 2.0 mmol of Ag; Run 5 deposited 63 mg ÷ 63.5 g/mol ≈ 1.0 mmol of Cu. Both passed 2.0 mmol of electrons, but each $\\text{Cu}^{2+}$ needs two electrons, so half as many moles of copper were deposited.',
          'Equal charge gives equal moles of metal only when the ions carry the same charge. Here $\\text{Ag}^+$ takes one electron and $\\text{Cu}^{2+}$ takes two, so the same charge deposits half as many copper atoms.',
          'The copper efficiency was not lower. The 2.0 mmol of electrons passed in Run 5 should deposit 1.0 mmol of copper (63.5 mg), and 63 mg was observed, so efficiency was essentially 100%. The halving comes from stoichiometry.',
          'One-third is roughly the ratio of the deposited masses (63/216), not of the moles. Molar mass affects the mass per mole deposited, not the number of moles, which is governed by charge and electrons per ion.',
        ],
        skill: '4C Faraday stoichiometry (Skill 2)',
      },
      {
        question: 'The laboratory wants to deposit 540 mg of silver on a pin in 965 s using the silver nitrate bath. Based on Table 1, the current should be:',
        options: [
          'exactly 0.50 A, because 482.5 C delivers the needed 5.0 mmol of electrons',
          'more than 0.50 A, because the efficiency is below 100% at such currents',
          'about 1.0 A, because each $\\text{Ag}^+$ ion needs two electrons to be deposited',
          'less than 0.50 A, because the silver bar also releases $\\text{Ag}^+$ into the bath',
        ],
        correctAnswer: 1,
        explanation:
          'A 540-mg deposit is 5.0 mmol of silver, which requires 5.0 mmol of electrons, or 482.5 C; delivered in 965 s, that is 0.50 A if every electron deposits silver. Table 1 shows efficiencies of about 90% at 0.40 A and 70% at 0.80 A, so near 0.5 A part of the charge goes to side reactions and a larger current is needed. "Exactly 0.50 A" assumes the 100% efficiency seen only at the lowest currents. Reduction of $\\text{Ag}^+$ to Ag takes one electron, not two. The $\\text{Ag}^+$ released at the anode replenishes the bath but does not reduce the number of electrons that must be delivered to the pin.',
        optionExplanations: [
          'Exactly 0.50 A assumes every electron deposits silver. Table 1 shows that is true only at the lowest currents (0.10–0.20 A); at 0.40 A efficiency is already about 90%, so 0.50 A would fall short of 540 mg.',
          'A 540 mg deposit is 5.0 mmol of Ag, requiring 5.0 mmol of electrons (482.5 C), or 0.50 A over 965 s at 100% efficiency. Table 1 shows efficiency drops to about 90% at 0.40 A and 70% at 0.80 A, so a current above 0.50 A is needed.',
          'Reduction of $\\text{Ag}^+$ to Ag takes one electron, not two. Doubling the current on that basis has no justification, and 1.0 A would also push the process further into the powdery, low-efficiency regime.',
          'The silver anode replenishes $\\text{Ag}^+$ in the bath, but that does not reduce the number of electrons the pin must receive. Each silver atom deposited still requires one electron, regardless of where the ions come from.',
        ],
        skill: '4C electrolysis calculations (Skill 2)',
      },
      {
        question: 'Which additional measurement would most directly test the hypothesis that the charge not used to deposit silver in Run 4 produced hydrogen gas at the pin?',
        options: [
          'Weigh the silver bar before and after Run 4 and compare its loss with the deposit',
          'Repeat Run 4 at 50 °C and determine whether the deposit becomes heavier or lighter',
          'Repeat Run 2 for 3860 s so that it passes the same total charge that Run 4 passed',
          'Collect the gas formed at the pin during Run 4 and determine the moles of H₂ in it',
        ],
        correctAnswer: 3,
        explanation:
          'About 30% of the 8.0 mmol of electrons in Run 4 (2.4 mmol) did not deposit silver; if they reduced hydrogen ions or water, collecting the gas should yield about 1.2 mmol of $\\text{H}_2$, since each molecule takes two electrons, which directly tests the hypothesis. The mass lost by the silver bar reflects the charge passed at the anode but reveals nothing about which reaction consumed electrons at the pin. A change in deposit mass at 50 °C would not identify the side product. Repeating Run 2 for longer tests whether total charge or current causes the drop in efficiency, a different question from what the missing electrons produced.',
        optionExplanations: [
          'The silver bar’s mass loss reflects the charge passed at the anode, which equals the total charge. It reveals nothing about which reaction consumed electrons at the pin, so it cannot identify hydrogen as the side product.',
          'A change in deposit mass at a different temperature might alter the efficiency but would not identify what the missing electrons produced. It tests a different variable rather than the identity of the side product.',
          'Running Run 2 longer to match Run 4’s total charge tests whether total charge or current causes the efficiency drop. That is a different question from whether the lost charge produced hydrogen.',
          'About 30% of Run 4’s 8.0 mmol of electrons (2.4 mmol) did not deposit silver. If they reduced hydrogen ions or water, about 1.2 mmol of $\\text{H}_2$ should be collected (two electrons per molecule), directly testing the hypothesis.',
        ],
        skill: '4C research design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. BIOCHEMISTRY — Isothermal titration calorimetry of two inhibitors
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-b-07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'The Thermodynamic Signature of Two Enzyme Inhibitors',
    passageText:
      'Most drugs act by binding reversibly to a target protein, and the strength of that binding is described by the dissociation constant, $K_d$, the concentration of free ligand at which half of the protein’s binding sites are occupied. The standard free energy of binding is related to the association constant, $K_a = 1/K_d$, by $\\Delta G^\\circ = -RT\\ln K_a$, and it can be divided into enthalpic and entropic parts through $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$. Two ligands with the same affinity can therefore bind for quite different reasons: one through hydrogen bonds and close van der Waals contacts that release heat, another through changes in the order of the ligand, the protein, or the surrounding solvent.\n\nIsothermal titration calorimetry (ITC) measures these quantities directly. A solution of the protein is placed in a sample cell held at constant temperature, and small, equal volumes of a concentrated ligand solution are injected in sequence. After each injection, the instrument measures the heat that must be removed from or supplied to the cell to keep its temperature constant. Early in the titration, nearly every injected ligand molecule finds an empty site, so the heat per mole of injected ligand approximates the enthalpy of binding. As the sites fill, less of each new injection binds, and the heat per injection declines toward zero. The molar ratio of ligand to protein at the midpoint of this decline reports the number of binding sites per protein molecule, and the sharpness of the decline is fitted to obtain $K_d$. Before each experiment, the same ligand solution is also injected into buffer alone, and the small heats measured in this reference titration are subtracted from those measured with protein.\n\nA research group optimizing inhibitors of a bacterial enzyme used ITC at 25 °C (298 K) to study two closely related compounds. Compound 1 carries a hydroxyl group that, in a crystal structure of the complex, donates a hydrogen bond to an aspartate side chain in the binding pocket. In Compound 2, that hydroxyl group is replaced by a chlorine atom, which cannot donate a hydrogen bond. In the crystal structure of the Compound 2 complex, the chlorine atom sits in a small cleft lined by leucine and valine side chains; in crystals of the enzyme alone, several water molecules occupy fixed positions in this cleft.\n\nFigure 1 shows the heat released per mole of injected ligand, after the reference-titration correction, as a function of the molar ratio of ligand to enzyme in the cell. Curve fitting gave $K_d = 1.0\\ \\mu\\text{M}$ for Compound 1 and $K_d = 0.10\\ \\mu\\text{M}$ for Compound 2. For calculations, the group took $RT \\approx 2.5$ kJ/mol at 298 K, so that each tenfold change in $K_d$ corresponds to a change in $\\Delta G^\\circ$ of about 5.7 kJ/mol. The group plans to combine the two modifications in a third compound, reasoning that a ligand gaining favorable contributions from both enthalpy and entropy would bind more tightly than either parent compound.',
    chart: {
      title: 'Figure 1. Heat released per mole of injected ligand versus the molar ratio of ligand to enzyme (25 °C)',
      kind: 'line',
      xLabel: 'Molar ratio, ligand : enzyme',
      yLabel: 'Heat released',
      yUnit: 'kJ per mol ligand',
      xValues: [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0],
      yValues: [39.5, 38.5, 34, 20, 6, 2.5, 1, 0.5],
      seriesLabel: 'Compound 1',
      comparisonSeries: [{ label: 'Compound 2', yValues: [20, 20, 19.5, 10, 1, 0.5, 0.3, 0.2] }],
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'Which statement about the two compounds is best supported by Figure 1?',
        options: [
          'Each binds one per enzyme, and Compound 2 releases about half as much heat per mole.',
          'Each binds one per enzyme, and Compound 2 releases about twice as much heat per mole.',
          'Compound 1 binds two per enzyme, and Compound 2 releases half as much heat per mole.',
          'Compound 2 binds two per enzyme, and both release about the same heat per mole.',
        ],
        correctAnswer: 0,
        explanation:
          'Both curves fall to half of their initial height at a ligand-to-enzyme ratio of 1.0, which indicates one binding site per enzyme molecule. The early injections, in which nearly all of the ligand binds, release about 40 kJ/mol for Compound 1 and about 20 kJ/mol for Compound 2, so Compound 2 releases about half as much heat per mole bound. "Twice as much" reverses that comparison. Neither curve has its midpoint at a ratio of 2, so neither compound binds two per enzyme, and the two plateau heights clearly differ.',
        optionExplanations: [
          'Both curves fall to half their initial height at a ligand-to-enzyme ratio of 1.0, indicating one site per enzyme. Early injections release about 40 kJ/mol for Compound 1 and about 20 kJ/mol for Compound 2, so Compound 2 releases about half as much heat.',
          'The stoichiometry is right, but the heat comparison is reversed. Compound 1’s plateau is near 40 kJ/mol and Compound 2’s near 20 kJ/mol, so Compound 2 releases less heat per mole, not twice as much.',
          'If Compound 1 bound two per enzyme, its curve would drop to half height at a molar ratio of 2.0. Figure 1 shows the midpoint at 1.0 for Compound 1, so it binds one per enzyme.',
          'Compound 2’s curve has its midpoint at a ratio of 1.0, not 2.0, so it binds one per enzyme. The plateau heights also clearly differ (about 20 vs 40 kJ/mol), so the heats are not the same.',
        ],
        skill: '5E reading an ITC isotherm (Skill 4)',
      },
      {
        question: 'For the binding of Compound 2 at 298 K, the entropic term $-T\\Delta S^\\circ$ is closest to:',
        options: ['$-60$ kJ/mol', '$+6$ kJ/mol', '$-20$ kJ/mol', '$+20$ kJ/mol'],
        correctAnswer: 2,
        explanation:
          'A $K_d$ of 0.10 μM corresponds to $K_a = 10^7$, so $\\Delta G^\\circ \\approx -7 \\times 5.7 \\approx -40$ kJ/mol. Figure 1 shows about 20 kJ released per mole bound, so $\\Delta H^\\circ \\approx -20$ kJ/mol. Then $-T\\Delta S^\\circ = \\Delta G^\\circ - \\Delta H^\\circ \\approx -40 - (-20) = -20$ kJ/mol, a favorable entropic contribution. The value $+20$ kJ/mol is $T\\Delta S^\\circ$ itself, or a sign error; $-60$ kJ/mol adds $\\Delta H^\\circ$ to $\\Delta G^\\circ$ instead of subtracting it; $+6$ kJ/mol is the entropic term for Compound 1 ($-34 - (-40)$).',
        optionExplanations: [
          'This value adds $\\Delta H^\\circ$ to $\\Delta G^\\circ$ instead of subtracting it: $-40 + (-20) = -60$. The entropic term is $\\Delta G^\\circ - \\Delta H^\\circ$, which requires subtraction.',
          'Positive 6 kJ/mol is the entropic term for Compound 1: $K_d = 1.0$ μM gives $\\Delta G^\\circ \\approx -34$ kJ/mol and $\\Delta H^\\circ \\approx -40$, so $-T\\Delta S^\\circ \\approx +6$. The question asks about Compound 2.',
          'A $K_d$ of 0.10 μM means $K_a = 10^7$, so $\\Delta G^\\circ \\approx -7 \\times 5.7 \\approx -40$ kJ/mol. Figure 1 gives $\\Delta H^\\circ \\approx -20$ kJ/mol, so $-T\\Delta S^\\circ = \\Delta G^\\circ - \\Delta H^\\circ \\approx -20$ kJ/mol, a favorable entropic contribution.',
          'Positive 20 kJ/mol is $T\\Delta S^\\circ$ itself (the entropy change is positive), or a sign error. The question asks for $-T\\Delta S^\\circ$, which is negative when the entropic contribution is favorable.',
        ],
        skill: '5E ΔG = ΔH − TΔS from binding data (Skill 2)',
      },
      {
        question: 'The difference between the entropy changes for binding of the two compounds is most likely due mainly to:',
        options: [
          'loss of rotational and translational freedom by Compound 2 on binding',
          'greater disorder of the solvent once the chlorine fills the nonpolar cleft',
          'an extra hydrogen bond formed between Compound 2 and the binding site',
          'stronger electrostatic attraction between the chlorine and aspartate',
        ],
        correctAnswer: 1,
        explanation:
          'Water molecules held in fixed positions against a nonpolar surface gain freedom when a nonpolar group displaces them into bulk solvent; this hydrophobic effect makes $\\Delta S^\\circ$ more positive and explains why binding of Compound 2 is entropically favored. Loss of rotational and translational freedom accompanies the binding of any ligand and makes $\\Delta S^\\circ$ more negative, not more positive. Compound 2 cannot donate the hydrogen bond that Compound 1 makes, and hydrogen bonds contribute mainly to $\\Delta H^\\circ$. The chlorine atom carries no formal charge, its partial negative charge would be repelled rather than attracted by the anionic aspartate, and an electrostatic attraction would appear mainly in $\\Delta H^\\circ$ in any case.',
        optionExplanations: [
          'Any ligand loses rotational and translational freedom on binding, so this effect applies to both compounds and makes $\\Delta S^\\circ$ more negative. It cannot explain why Compound 2 is more entropically favorable than Compound 1.',
          'In the free enzyme, water molecules sit in fixed positions in the nonpolar cleft. When the chlorine displaces them into bulk solvent they gain freedom, raising solvent entropy. This hydrophobic effect accounts for the favorable $\\Delta S^\\circ$ of Compound 2.',
          'Compound 2 replaces the hydroxyl with chlorine, which cannot donate a hydrogen bond, so it forms fewer hydrogen bonds than Compound 1, not more. Hydrogen bonds also contribute mainly to $\\Delta H^\\circ$, not entropy.',
          'Chlorine carries no formal charge, and its partial negative charge would be repelled, not attracted, by the anionic aspartate. Any electrostatic interaction would appear mainly in the enthalpy term rather than the entropy term.',
        ],
        skill: '5B hydrophobic effect and binding entropy (Skill 1)',
      },
      {
        question: 'Assuming that $\\Delta H^\\circ$ and $\\Delta S^\\circ$ do not change with temperature, repeating the Compound 1 titration at 37 °C instead of 25 °C would cause its $K_d$ to:',
        options: [
          'decrease, because binding releases heat to the surroundings',
          'stay the same, because neither ΔH° nor ΔS° changes with temperature',
          'decrease, because the −TΔS° term would become more favorable',
          'increase, because the binding of Compound 1 is exothermic',
        ],
        correctAnswer: 3,
        explanation:
          'The temperature dependence of an equilibrium constant is set by $\\Delta H^\\circ$: for an exothermic process, raising $T$ shifts the equilibrium toward the side that absorbs heat, here the unbound enzyme and ligand, so $K_a$ falls and $K_d$ rises. The same conclusion follows from $\\ln K_a = -\\Delta H^\\circ/RT + \\Delta S^\\circ/R$; Figure 1 shows heat released on binding ($\\Delta H^\\circ \\approx -40$ kJ/mol), so the first term, and hence $K_a$, shrinks as $T$ rises. The fact that binding releases heat means heating disfavors it, so $K_d$ does not decrease. Constant $\\Delta H^\\circ$ and $\\Delta S^\\circ$ do not make $K$ constant, because $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ contains $T$ explicitly. For Compound 1, $-T\\Delta S^\\circ \\approx +6$ kJ/mol, so $\\Delta S^\\circ$ is negative and the $-T\\Delta S^\\circ$ term becomes less favorable, not more, as $T$ increases.',
        optionExplanations: [
          'Because binding releases heat, raising the temperature shifts the equilibrium toward the side that absorbs heat, the unbound state. That weakens binding and raises $K_d$; it does not lower it.',
          'Constant $\\Delta H^\\circ$ and $\\Delta S^\\circ$ do not make $K$ constant, because $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ contains $T$ explicitly. For Compound 1, $\\Delta G^\\circ$ becomes less negative as $T$ rises.',
          'For Compound 1, $-T\\Delta S^\\circ \\approx +6$ kJ/mol, so $\\Delta S^\\circ$ is negative. Raising $T$ makes $-T\\Delta S^\\circ$ larger and more positive, less favorable, not more. The premise is backward for this compound.',
          'Figure 1 shows Compound 1 binding releases about 40 kJ/mol, so $\\Delta H^\\circ$ is negative. For an exothermic process, raising $T$ shifts equilibrium toward the unbound species, so $K_a$ falls and $K_d$ rises.',
        ],
        skill: '5E temperature dependence of K (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PHYSICS — Standing waves in closed and open tubes; vocal-tract model
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-b-08',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Air-Column Resonance as a Model of the Vocal Tract',
    passageText:
      'The sounds of speech begin as a buzz produced by the vocal folds, which open and close periodically as air from the lungs is pushed between them. The rate of this vibration sets the pitch of the voice. The buzz contains many frequencies, and the air-filled vocal tract above the folds, from the larynx to the lips, strengthens those that match its own resonant frequencies and weakens the others. These resonances, called formants, determine which vowel a listener hears. Moving the tongue, jaw, and lips changes the shape of the tract and shifts the formants, and a speaker can do this while holding the pitch constant.\n\nA resonance of an air column occurs when sound waves reflected from the ends of the column reinforce the incoming waves, producing a standing wave. At a closed end, the air cannot move along the axis of the tube. At an open end, the air is free to move, but the pressure is held close to atmospheric pressure. The allowed standing-wave patterns, and therefore the resonant frequencies, depend on the length of the column, on whether each end is open or closed, and on the gas that fills it. For columns of a given type, each resonant frequency is inversely proportional to the length of the column.\n\nTo build a physical model of the vocal tract, a group of speech scientists measured resonances in rigid plastic tubes with an inner diameter of 2.5 cm. In Series A, each tube was closed at one end by a rigid cap in which a small loudspeaker was mounted, and its other end was open. In Series B, each tube was open at both ends, and the same loudspeaker was held just outside one end. For each tube, the loudspeaker produced a pure tone whose frequency was swept slowly upward from 100 Hz while a small microphone near the far end recorded the sound level. The lowest frequency at which the level passed through a sharp maximum was recorded as the fundamental resonance. The tubes ranged in length from 0.10 m to 0.35 m. All measurements were made in the same room, and the air temperature was checked before each run; it remained at 20 °C throughout. Figure 1 shows the results.\n\nThe group then used the closed–open tube to model the vocal tract of a speaker producing a neutral vowel, treating the tract as a uniform tube closed at the vocal folds and open at the lips. In a follow-up study, the group plans to fill the tubes with a mixture of helium and oxygen, in which sound travels considerably faster than in air, to model the unusual voice quality reported by deep-sea divers who breathe such mixtures. Divers’ vocal folds are assumed to vibrate at their usual rates, because the folds are driven by muscle tension and airflow rather than by the resonances of the tract.',
    chart: {
      title: 'Figure 1. Fundamental resonant frequency versus tube length (air, 20 °C)',
      kind: 'line',
      xLabel: 'Tube length',
      xUnit: 'm',
      yLabel: 'Fundamental frequency',
      yUnit: 'Hz',
      xValues: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
      yValues: [850, 567, 425, 340, 283, 243],
      seriesLabel: 'Series A (closed at one end)',
      comparisonSeries: [{ label: 'Series B (open at both ends)', yValues: [1700, 1133, 850, 680, 567, 486] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, the speed of sound in the air inside the tubes was closest to:',
        options: ['170 m/s', '340 m/s', '680 m/s', '85 m/s'],
        correctAnswer: 1,
        explanation:
          'A tube closed at one end has a fundamental wavelength of $4L$; in Series A the 0.25-m tube resonated at 340 Hz, so $v = f\\lambda = 340\\ \\text{Hz} \\times 1.0\\ \\text{m} = 340$ m/s. Series B agrees: an open–open tube has $\\lambda = 2L$, and the 0.25-m tube resonated at 680 Hz, giving $680 \\times 0.50 = 340$ m/s. A value of 170 m/s results from using $\\lambda = 2L$ for the closed tube, 680 m/s from using $\\lambda = 4L$ for the open tube, and 85 m/s from taking the wavelength to equal the tube length.',
        optionExplanations: [
          'A value of 170 m/s results from using $\\lambda = 2L$ for the closed–open tube. The fundamental of a tube closed at one end spans a quarter wavelength, so $\\lambda = 4L$, not $2L$.',
          'In Series A the 0.25 m closed–open tube resonated at 340 Hz with $\\lambda = 4L = 1.0$ m, giving $v = 340$ m/s. Series B confirms this: the open tube at 0.25 m gave 680 Hz with $\\lambda = 2L = 0.50$ m, also 340 m/s.',
          'A value of 680 m/s comes from applying $\\lambda = 4L$ to the open–open tube, whose fundamental wavelength is actually $2L$. Doubling the correct wavelength doubles the apparent speed.',
          'A value of 85 m/s comes from taking the wavelength equal to the tube length for the closed tube (340 Hz × 0.25 m). Neither tube type has a fundamental wavelength equal to its length.',
        ],
        skill: '4D wave speed from resonance data (Skill 4)',
      },
      {
        question: 'When a Series B tube resonates at its fundamental frequency, the standing wave has a displacement node:',
        options: [
          'only at the center of the tube',
          'at each of the two open ends of the tube',
          'only at the end nearest the loudspeaker',
          'at the center and at each open end',
        ],
        correctAnswer: 0,
        explanation:
          'Air at an open end moves freely, so each open end is a displacement antinode (and a pressure node). The simplest pattern with antinodes at both ends spans half a wavelength and has a single displacement node midway along the tube, which is why $\\lambda = 2L$ for the fundamental. Nodes at both ends describe a tube closed at both ends. The loudspeaker, held outside the open end, does not impose a node there. Nodes at the center and at both ends would require closed ends and a full wavelength in the tube.',
        optionExplanations: [
          'Each open end is a displacement antinode because air moves freely there. The simplest pattern with antinodes at both ends spans half a wavelength and has a single displacement node at the center, consistent with $\\lambda = 2L$.',
          'Displacement nodes at both ends would describe a tube closed at both ends, where air cannot move. At an open end air moves freely, making it a displacement antinode, not a node.',
          'The loudspeaker is held just outside the open end and does not impose a boundary condition. Both ends remain open and are therefore displacement antinodes, not nodes.',
          'Nodes at the center and both ends would require a full wavelength within the tube and closed ends. The open–open fundamental has only half a wavelength and antinodes at the ends.',
        ],
        skill: '4D standing waves: nodes and antinodes (Skill 1)',
      },
      {
        question: 'Using the speed of sound indicated by Figure 1, the two lowest resonant frequencies of a uniform vocal tract 0.17 m long, modeled as described in the passage, would be:',
        options: ['250 Hz and 750 Hz', '500 Hz and 1000 Hz', '500 Hz and 1500 Hz', '1000 Hz and 2000 Hz'],
        correctAnswer: 2,
        explanation:
          'The tract is modeled as closed at the folds and open at the lips, so its fundamental has $\\lambda = 4L = 0.68$ m and $f = 340/0.68 = 500$ Hz. A closed–open tube supports only odd multiples of its fundamental, so the next resonance is $3 \\times 500 = 1500$ Hz. The pair 500 and 1000 Hz wrongly includes the second harmonic, which a closed–open tube cannot support. The pair 1000 and 2000 Hz belongs to a 0.17-m tube open at both ends, and 250 and 750 Hz belong to a closed–open tube twice as long.',
        optionExplanations: [
          'The pair 250 and 750 Hz would be correct for a closed–open tube 0.34 m long, twice the given length. For $L = 0.17$ m, $\\lambda = 4L = 0.68$ m gives a fundamental of 500 Hz, not 250.',
          'The fundamental of 500 Hz is correct, but a closed–open tube supports only odd harmonics. The second resonance is three times the fundamental (1500 Hz), not twice it; 1000 Hz cannot resonate.',
          'Modeled as closed at the folds and open at the lips, the tract has $\\lambda = 4L = 0.68$ m, so $f_1 = 340/0.68 = 500$ Hz. A closed–open tube supports only odd multiples, so the next resonance is $3 \\times 500 = 1500$ Hz.',
          'The pair 1000 and 2000 Hz belongs to a 0.17 m tube open at both ends ($\\lambda = 2L = 0.34$ m, all harmonics). The passage models the tract as closed at one end, which halves the fundamental and removes even harmonics.',
        ],
        skill: '4D harmonics of a closed–open pipe (Skill 2)',
      },
      {
        question: 'Compared with the same speech in air, the voice of a diver breathing the helium–oxygen mixture would have:',
        options: [
          'a higher pitch, with formants at the same frequencies',
          'a higher pitch, with formants at higher frequencies',
          'the same pitch, with formants at lower frequencies',
          'the same pitch, with formants at higher frequencies',
        ],
        correctAnswer: 3,
        explanation:
          'Pitch is set by the vibration rate of the vocal folds, which the passage says is unchanged. The formants are resonances of the tract, whose length and shape fix the resonant wavelengths; because $f = v/\\lambda$, a faster speed of sound raises every formant. Both higher-pitch options attribute to the gas a change in fold vibration that it does not produce, and one of them also leaves the formants unchanged despite the faster sound speed. Lower formants would require sound to travel more slowly in the mixture than in air.',
        optionExplanations: [
          'The passage says the vocal folds vibrate at their usual rate in the mixture, so pitch is unchanged. Formants, being tract resonances with fixed wavelengths, must rise because $f = v/\\lambda$ and $v$ is higher.',
          'Pitch is set by fold vibration, which the passage states does not change with the gas. The formants do rise, but the higher pitch is a change the gas does not produce.',
          'Lower formants would require sound to travel more slowly in the helium–oxygen mixture than in air. The passage states sound travels considerably faster in the mixture, so formants rise.',
          'Pitch depends on the vibration rate of the vocal folds, which the passage says is unchanged. Formants are tract resonances whose wavelengths are fixed by tract geometry, so a faster speed of sound raises each formant frequency via $f = v/\\lambda$.',
        ],
        skill: '4D resonance and wave speed (Skill 2)',
      },
      {
        question: 'The investigators checked the air temperature before each run mainly because a change in temperature would:',
        options: [
          'change the speed of sound and so shift every resonant frequency',
          'change the lengths of the tubes enough to shift the resonances',
          'change which harmonics a closed–open tube is able to support',
          'change the loudness of the tone produced by the loudspeaker',
        ],
        correctAnswer: 0,
        explanation:
          'The speed of sound in air increases with temperature (by roughly 0.6 m/s per °C), and because each resonant frequency equals $v/\\lambda$ with $\\lambda$ fixed by the tube, an uncontrolled temperature change would shift every data point. Thermal expansion of plastic over a few degrees changes a 0.25-m tube by far less than a millimeter, a negligible effect. Which harmonics are allowed depends on the conditions at the ends of the tube, not on temperature. A change in loudness could alter the height of each maximum but not the frequency at which it occurs.',
        optionExplanations: [
          'The speed of sound in air rises with temperature (about 0.6 m/s per °C). Each resonant frequency equals $v/\\lambda$ with $\\lambda$ fixed by the tube, so an uncontrolled temperature change would shift every data point.',
          'Thermal expansion of plastic over a few degrees changes a 0.25 m tube by far less than a millimeter, a negligible fraction of its length. Tube length is not meaningfully affected by room-temperature variation.',
          'Which harmonics a tube supports depends on the boundary conditions at its ends (open or closed), not on temperature. A closed–open tube supports odd harmonics at any temperature.',
          'Loudspeaker loudness might change the height of each resonance peak but not the frequency at which the peak occurs. The investigators recorded frequencies, so loudness is not the concern.',
        ],
        skill: '4D controlled variables (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Beer–Lambert calibration for serum iron
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Validating a Colorimetric Assay for Serum Iron',
    passageText:
      'When light passes through a solution of an absorbing substance, the fraction of the light transmitted, $T = I/I_0$, falls as the concentration of the absorber and the length of the light path increase. Absorbance is defined as $A = -\\log T$, and over a limited range it obeys the Beer–Lambert law, $A = \\varepsilon b c$, in which $b$ is the path length in centimeters, $c$ is the molar concentration, and $\\varepsilon$ is the molar absorptivity, a property of the absorbing species at a given wavelength. Absorbances are additive: a solution containing two absorbing species has an absorbance equal to the sum of their separate contributions at that wavelength. When the absorbance is high, very little light reaches the detector, and stray light and other instrumental limitations cause measured absorbances to fall below the values the law predicts.\n\nMany clinical assays convert a colorless analyte into a colored product so that it can be measured in this way. In one method for serum iron, a reagent releases iron from its transport protein, reduces it to $\\text{Fe}^{2+}$, and supplies a chromogen, an organic ligand that binds $\\text{Fe}^{2+}$ to form an intensely colored magenta complex. The complex absorbs most strongly at 562 nm, a wavelength at which the free chromogen does not absorb. The chromogen is present in large excess, so essentially all of the iron is converted to the complex.\n\nA laboratory validating this method prepared iron standards in reagent and measured their absorbance at 562 nm in cuvettes with a path length of 1.00 cm, after zeroing the spectrophotometer on a reagent blank that contained no iron (Table 1). The concentrations in Table 1 are those of iron in the cuvette.\n\nPatient samples were then analyzed. For each, 1.00 mL of serum was mixed with 1.00 mL of reagent, and the absorbance of the mixture was read at 562 nm. Because some sera contain other colored substances, a sample blank was also prepared for each patient by mixing 1.00 mL of the serum with 1.00 mL of a solution identical to the reagent except that it lacked the chromogen. The laboratory’s procedure is to subtract the absorbance of the sample blank from that of the complete mixture and to report the iron concentration of the undiluted serum. The results are shown in Table 2.\n\nSample Q was visibly pink because of hemolysis, the rupture of red blood cells during collection, which releases hemoglobin into the serum; hemoglobin absorbs light in the green region of the spectrum, which includes 562 nm. Sample R came from a patient receiving treatment for iron overload, a condition in which serum iron can reach several times the upper limit of the normal range. The laboratory director asked the staff to decide, before the method is adopted, how results from samples such as Q and R should be handled, and whether any additional standards should be added to the calibration.',
    figure:
      '**Table 1.** Calibration standards (iron concentration in the cuvette)\n\n| Standard | [Fe] (μM) | $A_{562}$ |\n|---|---|---|\n| Blank | 0 | 0.000 |\n| S1 | 10 | 0.250 |\n| S2 | 20 | 0.500 |\n| S3 | 40 | 1.000 |\n| S4 | 80 | 1.720 |\n\n**Table 2.** Patient samples\n\n| Sample | $A_{562}$, complete mixture | $A_{562}$, sample blank |\n|---|---|---|\n| P | 0.255 | 0.005 |\n| Q | 0.420 | 0.120 |\n| R | 2.150 | 0.010 |',
    questions: [
      {
        question: 'Compared with the reagent blank, Standard S3 transmitted approximately what percentage of the light at 562 nm?',
        options: ['1%', '50%', '10%', '90%'],
        correctAnswer: 2,
        explanation:
          'Because $A = -\\log T$, an absorbance of 1.000 corresponds to $T = 10^{-1}$, or 10% transmission. An absorbance of 2 would be needed for 1% transmission. The value 90% is the fraction absorbed, not the fraction transmitted. Transmission of 50% corresponds to an absorbance of only about 0.30; absorbance and transmittance are related logarithmically, not linearly.',
        optionExplanations: [
          'One percent transmission corresponds to an absorbance of 2 ($T = 10^{-2}$). Standard S3 has an absorbance of only 1.000, so it transmits ten times more light than this.',
          'Fifty percent transmission corresponds to an absorbance of about 0.30 ($-\\log 0.5$). Absorbance and transmittance are related logarithmically, not linearly, so an absorbance of 1 does not mean half the light is blocked.',
          'Since $A = -\\log T$, an absorbance of 1.000 gives $T = 10^{-1} = 0.10$, so Standard S3 transmitted about 10% of the light at 562 nm compared with the reagent blank.',
          'Ninety percent is the fraction of light absorbed, not transmitted, by S3. The question asks what percentage passed through to the detector, which is the complementary 10%.',
        ],
        skill: '4D absorbance and transmittance (Skill 1)',
      },
      {
        question: 'The iron concentration in the undiluted serum of Patient P is closest to:',
        options: ['5 μM', '20 μM', '10 μM', '40 μM'],
        correctAnswer: 1,
        explanation:
          'The corrected absorbance is $0.255 - 0.005 = 0.250$, which Table 1 places at 10 μM of iron in the cuvette (the standards give 0.025 absorbance units per μM). The serum was diluted twofold by mixing equal volumes with reagent, so the serum concentration is 20 μM. The value 10 μM is the cuvette concentration, left uncorrected for dilution. The value 5 μM divides by the dilution factor instead of multiplying, and 40 μM applies the twofold correction twice.',
        optionExplanations: [
          'Five μM divides the cuvette concentration by the dilution factor instead of multiplying. Mixing 1.00 mL serum with 1.00 mL reagent dilutes the serum twofold, so the serum is more concentrated than the cuvette, not less.',
          'The corrected absorbance is 0.255 − 0.005 = 0.250, which Table 1 places at 10 μM in the cuvette (0.025 absorbance units per μM). Equal-volume mixing diluted the serum twofold, so the undiluted serum contains 20 μM iron.',
          'Ten μM is the iron concentration in the cuvette, read directly from the calibration. It has not been corrected for the twofold dilution that occurs when 1.00 mL of serum is mixed with 1.00 mL of reagent.',
          'Forty μM applies the twofold dilution correction twice. Only one dilution step occurred (serum plus an equal volume of reagent), so the cuvette value of 10 μM should be doubled once.',
        ],
        skill: '4D Beer–Lambert calibration and dilution (Skill 2)',
      },
      {
        question: 'If the laboratory had omitted the sample-blank subtraction for Sample Q, the reported serum iron would have been too high by approximately:',
        options: ['2.4 μM', '4.8 μM', '12 μM', '9.6 μM'],
        correctAnswer: 3,
        explanation:
          'The sample blank records the absorbance of hemoglobin and other colored serum components at 562 nm (0.120), which adds to the absorbance of the iron complex. At 0.025 absorbance units per μM, 0.120 corresponds to 4.8 μM in the cuvette, or 9.6 μM in the serum after the twofold dilution correction. The value 4.8 μM omits the dilution correction, and 2.4 μM divides by the dilution factor instead of multiplying. The value 12 μM is the true cuvette concentration of iron in Sample Q, $(0.420 - 0.120)/0.025$, not the size of the error.',
        optionExplanations: [
          'This value divides the hemoglobin-equivalent cuvette concentration (4.8 μM) by the dilution factor instead of multiplying. The serum is twice as concentrated as the cuvette, so the serum error is larger, not smaller.',
          'This is the error in cuvette concentration (0.120 ÷ 0.025 = 4.8 μM) but omits the twofold dilution correction. The laboratory reports undiluted serum values, so the error must be doubled.',
          'Twelve μM is the true cuvette iron concentration of Sample Q, (0.420 − 0.120)/0.025. It is the correct value in the cuvette, not the size of the error that skipping the blank would introduce.',
          'The sample blank absorbance of 0.120 is hemoglobin and other colored components at 562 nm. At 0.025 absorbance units per μM that equals 4.8 μM in the cuvette, or 9.6 μM in serum after the twofold dilution correction.',
        ],
        skill: '4D additivity of absorbance (Skill 2)',
      },
      {
        question: 'Which procedure would give the most reliable result for Sample R?',
        options: [
          'Dilute the serum further with saline, reanalyze it, and correct for the extra dilution',
          'Read its concentration from a straight line extended through Standards S1, S2, and S3',
          'Use Standard S4 alone as a one-point calibration for the absorbance of Sample R',
          'Repeat the reading at a wavelength at which the iron complex absorbs more strongly',
        ],
        correctAnswer: 0,
        explanation:
          'The corrected absorbance of Sample R (2.14) lies beyond every standard, and S4 shows that above an absorbance of about 1 the response falls below the Beer–Lambert line (80 μM gives 1.72 rather than the 2.00 expected). Diluting the serum brings the absorbance back into the linear range covered by S1–S3, and the result is then multiplied by the additional dilution factor. Extending the line assumes linearity where Table 1 shows it fails. S4 itself lies in the nonlinear region and below the absorbance of R, so a one-point calibration on it would be biased. A wavelength of stronger absorption would raise the absorbance further and worsen the problem.',
        optionExplanations: [
          'Sample R’s corrected absorbance (2.14) exceeds every standard, and S4 shows the response is already nonlinear above about 1.0. Diluting brings the absorbance into the linear S1–S3 range, after which the extra dilution factor is applied.',
          'Extending a straight line through S1–S3 assumes Beer–Lambert linearity holds at absorbance 2.14. Table 1 shows it already fails at S4 (1.72 observed vs 2.00 expected), so extrapolation would overestimate the concentration.',
          'S4 lies in the nonlinear region and still below the absorbance of Sample R. A one-point calibration anchored there would carry S4’s own deviation and would still require extrapolating beyond the measured range.',
          'A wavelength of stronger absorption would raise the absorbance even further, pushing the reading deeper into the range where stray light makes measurements unreliable. It worsens the problem rather than solving it.',
        ],
        skill: '4D linear range of a calibration (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Carboxylic acid derivatives; amide resonance
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Reactivity of Carboxylic Acid Derivatives',
    passageText:
      'Acyl chlorides, acid anhydrides, esters, and amides are derivatives of carboxylic acids. Each contains a carbonyl group whose carbon is also bonded to an electronegative atom, and each reacts with nucleophiles by a common pathway called nucleophilic acyl substitution. In the first step, the nucleophile adds to the electrophilic carbonyl carbon, breaking the C=O π bond and forming a tetrahedral intermediate in which the former carbonyl oxygen carries a negative charge. In the second step, the intermediate collapses: the C=O bond re-forms, and one of the groups attached to the former carbonyl carbon is expelled. Whether the intermediate goes on to products or returns to starting material depends largely on which attached group is the better leaving group, and good leaving groups are weak bases, the conjugate bases of strong acids. The conjugate acids of the groups expelled from the four derivatives have approximate p$K_a$ values of −7 (HCl), 5 (a carboxylic acid), 16 (an alcohol), and 35 (ammonia or an amine).\n\nA second factor is resonance donation. The atom bonded to the acyl carbon can share a lone pair with the carbonyl group, spreading out the partial positive charge on the carbonyl carbon and making it less electrophilic. Chlorine donates poorly, because its lone pairs occupy 3p orbitals that overlap weakly with the 2p orbitals of carbon. Oxygen donates moderately, and in an anhydride the donation of the central oxygen is shared between two carbonyl groups. Nitrogen, the least electronegative of these atoms, donates most strongly. The two factors reinforce each other, so the four derivatives form a ladder of reactivity, and in general a derivative can be converted readily into one below it on the ladder but not into one above it unless it is first activated.\n\nAmide resonance has consequences beyond reactivity. In the peptide bond, delocalization of the nitrogen lone pair gives the carbon–nitrogen bond substantial double-bond character. The bond is shorter than a typical C–N single bond, rotation about it is restricted, and in proteins the peptide group is nearly always found in the trans configuration, in which the two α-carbons lie on opposite sides of the C–N bond. As a result, the flexibility of a polypeptide backbone comes almost entirely from rotation about the bonds to each α-carbon. Uncatalyzed hydrolysis of a peptide bond at neutral pH is so slow that its half-life is estimated in years, and proteases must use specialized catalytic strategies to accelerate it.\n\nEsters occupy the middle of the ladder. In water containing an acid catalyst, an ester is hydrolyzed to a carboxylic acid and an alcohol in a reversible reaction. In aqueous base, hydrolysis goes to completion, because the carboxylic acid formed is immediately deprotonated to a carboxylate ion, whose negative charge makes it resistant to attack by nucleophiles. If an ester is instead heated with a large excess of a different alcohol and an acid or base catalyst, the alkoxy groups exchange in a reaction called transesterification. A related acyl transfer occurs in the body when aspirin, an ester of acetic acid, meets the enzyme cyclooxygenase: the hydroxyl group of a serine side chain in the active site attacks the acetyl carbonyl carbon, and the enzyme is left permanently acetylated and inactive.',
    questions: [
      {
        question: 'As a result of amide resonance, which atoms of a peptide group lie in a single plane?',
        options: [
          'Only the carbonyl C, the carbonyl O, and the amide N',
          'The carbonyl C and O, the amide N and H, and both α-carbons',
          'The amide N and H and both α-carbons, but not the carbonyl O',
          'The carbonyl C, the amide N, and the side-chain atoms of each residue',
        ],
        correctAnswer: 1,
        explanation:
          'The partial C=N double bond makes the peptide group planar in the same way that a C=C double bond makes an alkene planar: the carbonyl carbon and oxygen, the amide nitrogen and its hydrogen, and the two α-carbons bonded to C and N all lie in one plane. Limiting the plane to three atoms ignores the atoms attached to each end of the partial double bond. The carbonyl oxygen takes part directly in the resonance and must lie in the plane. Side chains are attached to the α-carbons, about which rotation is free, so they are not held in the peptide plane.',
        optionExplanations: [
          'Limiting the plane to three atoms ignores the atoms attached to each end of the partial C=N double bond. Just as an alkene holds all six attached atoms coplanar, the peptide group holds six atoms in a plane.',
          'The partial C=N double bond makes the peptide group planar like an alkene: the carbonyl C and O, the amide N and H, and the two α-carbons bonded to C and N all lie in one plane. Rotation is restricted about the C–N bond.',
          'The carbonyl oxygen participates directly in the resonance that creates the partial double bond, so it must lie in the plane. Excluding it misunderstands which atoms are part of the delocalized system.',
          'Side chains are attached to the α-carbons, about which rotation is free, so they are not held in the peptide plane. The passage says backbone flexibility comes from rotation about bonds to each α-carbon.',
        ],
        skill: '5D peptide bond geometry (Skill 1)',
      },
      {
        question: 'In the tetrahedral intermediate formed when hydroxide adds to the carbonyl carbon of an ester, that carbon is:',
        options: [
          'sp² hybridized, with bond angles near 120°',
          'sp hybridized, with bond angles near 180°',
          'sp³ hybridized, with bond angles near 90°',
          'sp³ hybridized, with bond angles near 109.5°',
        ],
        correctAnswer: 3,
        explanation:
          'When the nucleophile adds and the π bond breaks, the carbon goes from three to four σ-bonded groups and becomes sp³ hybridized, with approximately tetrahedral angles of 109.5°. The sp² description with 120° angles fits the carbonyl carbon before addition and after the intermediate collapses. An sp carbon with 180° angles has only two σ bonds, as in a nitrile or an alkyne. Angles of 90° do not arise from sp³ hybridization.',
        optionExplanations: [
          'An sp² carbon with 120° angles describes the carbonyl carbon before the nucleophile adds, and again after the intermediate collapses and the C=O re-forms. It is not the geometry of the tetrahedral intermediate.',
          'An sp carbon with 180° angles has only two σ bonds, as in a nitrile or alkyne. The intermediate carbon has four σ bonds, so this geometry is impossible.',
          'The sp³ hybridization is right, but sp³ carbons have bond angles near 109.5°, not 90°. Ninety-degree angles do not arise from any standard hybridization of carbon.',
          'When hydroxide adds and the π bond breaks, the carbon gains a fourth σ-bonded group and becomes sp³ hybridized with roughly tetrahedral angles of 109.5°. This is why the species is called a tetrahedral intermediate.',
        ],
        skill: '5D hybridization in acyl substitution (Skill 1)',
      },
      {
        question: 'Phenol has a p$K_a$ of about 10. Compared with ethyl acetate, phenyl acetate would be expected to undergo base-promoted hydrolysis:',
        options: [
          'more slowly, because phenoxide is a weaker base than ethoxide',
          'faster, because phenoxide is a stronger base than ethoxide',
          'faster, because phenoxide is a weaker base than ethoxide',
          'more slowly, because its phenyl ring makes the ester less polar',
        ],
        correctAnswer: 2,
        explanation:
          'Phenol (p$K_a$ ≈ 10) is a much stronger acid than ethanol (p$K_a$ ≈ 16), so phenoxide is a weaker base and a better leaving group. In addition, the ring delocalizes the lone pairs of the ester oxygen, so that oxygen donates less to the carbonyl, leaving the carbonyl carbon more electrophilic; both effects speed hydrolysis. A weaker-base leaving group speeds rather than slows the reaction. Phenoxide is not a stronger base than ethoxide, as the p$K_a$ values show. Overall polarity is not what governs the rate of nucleophilic acyl substitution.',
        optionExplanations: [
          'The premise is right (phenoxide is the weaker base) but the conclusion is reversed. A weaker base is a better leaving group, which speeds the collapse of the tetrahedral intermediate to products rather than slowing it.',
          'Phenol’s pKa of about 10 versus ethanol’s 16 means phenoxide is a weaker base than ethoxide, not stronger. A stronger-base leaving group would slow hydrolysis anyway, so both the premise and the mechanism are off.',
          'Phenol (pKa ≈ 10) is a much stronger acid than ethanol (pKa ≈ 16), so phenoxide is a weaker base and a better leaving group. The ring also pulls the ester oxygen’s lone pairs away from the carbonyl, making it more electrophilic. Both effects speed hydrolysis.',
          'Overall polarity does not govern the rate of nucleophilic acyl substitution; leaving-group ability and carbonyl electrophilicity do. The phenyl ring actually makes the ester more reactive, not less.',
        ],
        skill: '5D leaving-group ability in acyl substitution (Skill 2)',
      },
      {
        question: 'Methyl benzoate is heated with a large excess of ethanol whose oxygen atoms are all ¹⁸O, together with an acid catalyst. Assuming the mechanism described in the passage, the ¹⁸O label will be found mainly:',
        options: [
          'in the ester product, bonded to both the acyl carbon and the ethyl group',
          'in the ester product, as the oxygen of its carbon–oxygen double bond',
          'in the methanol released, as the oxygen atom of its hydroxyl group',
          'in benzoic acid formed as a by-product, as one of its two oxygen atoms',
        ],
        correctAnswer: 0,
        explanation:
          'In nucleophilic acyl substitution, the ethanol oxygen bonds to the carbonyl carbon, and the methoxy group is later expelled from the tetrahedral intermediate as methanol, so the bond that breaks is the acyl C–O bond, not the O–CH₃ bond. The labeled oxygen therefore ends up bonded to both the acyl carbon and the ethyl group in ethyl benzoate. The carbonyl oxygen comes from the original ester, not from ethanol. The methanol carries away the original, unlabeled methoxy oxygen. No water is present to hydrolyze the ester to benzoic acid, and even hydrolysis would not place ethanol’s oxygen there.',
        optionExplanations: [
          'In the mechanism, the ethanol oxygen attacks the carbonyl carbon and becomes the new alkoxy oxygen of the ester, while the methoxy group departs intact as methanol. The ¹⁸O therefore ends up bonded to both the acyl carbon and the ethyl group.',
          'The carbonyl oxygen in the product is the original carbonyl oxygen of methyl benzoate. Although it is briefly an alkoxide in the intermediate, it does not exchange with the incoming ethanol oxygen under these conditions.',
          'The methanol released carries the original, unlabeled methoxy oxygen, because the bond that breaks is the acyl C–O bond, not the O–CH₃ bond. The label stays with the ethyl group it entered with.',
          'No water is present to hydrolyze the ester to benzoic acid, so this by-product does not form in significant amounts. Even if it did, the oxygen from ethanol would not be incorporated into it.',
        ],
        skill: '5D transesterification mechanism (Skill 2)',
      },
    ],
  },
]

export const FL3_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl3-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A crate slides down a ramp inclined at 30° to the horizontal and moves at constant speed. The coefficient of kinetic friction between the crate and the ramp is closest to: (sin 30° = 0.50, cos 30° = 0.87)',
    options: ['0.50', '0.87', '0.58', '1.7'],
    correctAnswer: 2,
    explanation:
      'At constant speed the net force is zero, so the friction force equals the component of gravity along the ramp: $\\mu_k mg\\cos\\theta = mg\\sin\\theta$, giving $\\mu_k = \\tan 30° = 0.50/0.87 \\approx 0.58$. The value 0.50 is sin 30° alone, which would be correct only if the normal force equaled the full weight. The value 0.87 is cos 30°, and 1.7 is cos 30°/sin 30°, the ratio inverted.',
    optionExplanations: [
      'This is sin 30° alone, which would be correct only if the normal force equaled the full weight. On an incline the normal force is $mg\\cos\\theta$, so the coefficient is $\\tan\\theta$, not $\\sin\\theta$.',
      'This is cos 30°, the factor that gives the normal force. The coefficient of friction is the ratio of the gravitational component along the ramp to the normal force, which requires dividing sine by cosine.',
      'At constant speed the net force is zero, so friction balances the component of gravity along the ramp: $\\mu_k mg\\cos\\theta = mg\\sin\\theta$, giving $\\mu_k = \\tan 30° = 0.50/0.87 \\approx 0.58$.',
      'This is cos 30°/sin 30°, the inverted ratio. A coefficient greater than 1 would mean friction exceeds the normal force, which would stop the crate rather than let it slide at constant speed.',
    ],
    skill: '4A friction on an incline (Skill 2)',
  },
  {
    id: 'fl3-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'Which of the following changes would increase the resistivity of the material in a copper wire?',
    options: [
      'Replacing it with a wire twice as long',
      'Raising its temperature',
      'Replacing it with a wire half as thick',
      'Adding a second wire to it in series',
    ],
    correctAnswer: 1,
    explanation:
      'Resistivity is a property of the material and its condition, not of the wire’s shape; in a metal it rises with temperature because the more vigorously vibrating lattice scatters conduction electrons more often. A longer wire, a thinner wire, or a second wire in series each increases the resistance, $R = \\rho L/A$, of the circuit element, but none of them changes $\\rho$, the resistivity of copper.',
    optionExplanations: [
      'A longer wire has more resistance ($R = \\rho L/A$), but resistivity $\\rho$ is a property of the copper itself and is unchanged by the wire’s length.',
      'Resistivity is a property of the material and its condition, not of the wire’s dimensions. In a metal, heating makes the lattice vibrate more vigorously, scattering conduction electrons more often and raising $\\rho$.',
      'A thinner wire has a smaller cross-sectional area and therefore more resistance, but the material is the same copper with the same resistivity. Geometry changes $R$, not $\\rho$.',
      'Adding a wire in series increases the total resistance of the circuit element, but each wire’s material keeps its own resistivity. Series combination is a circuit property, not a material one.',
    ],
    skill: '4C resistivity vs resistance (Skill 1)',
  },
  {
    id: 'fl3-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'For which of the following processes is the entropy change of the system negative?',
    options: [
      'Solid carbon dioxide subliming to a gas',
      'Solid ammonium nitrate dissolving in water',
      'Solid calcium carbonate decomposing to CaO and CO₂',
      'H₂ and O₂ gases forming liquid water',
    ],
    correctAnswer: 3,
    explanation:
      'Three moles of gas (2 H₂ + O₂) become two moles of liquid water, so the number of gas-phase particles and the positional freedom of the system both fall, and $\\Delta S < 0$. Sublimation converts a solid into a gas and greatly increases entropy. Dissolving an ionic solid disperses its ions through the solvent, and for ammonium nitrate the overall entropy change is positive, which is why it dissolves spontaneously even though the process is endothermic. The decomposition of calcium carbonate releases a gas from a solid, so its entropy change is positive.',
    optionExplanations: [
      'Sublimation converts a solid into a gas, releasing molecules from a rigid lattice into free motion. This greatly increases the system’s entropy, so $\\Delta S$ is positive.',
      'Dissolving ammonium nitrate disperses ions throughout the solvent, and the overall entropy change is positive. That positive $\\Delta S$ is why the salt dissolves spontaneously despite the process being endothermic.',
      'Decomposition of calcium carbonate releases CO₂ gas from a solid. Creating a gas-phase product from a solid reactant increases entropy, so $\\Delta S$ is positive.',
      'Three moles of gas (2 H₂ + O₂) become two moles of liquid water. The number of gas-phase particles and the positional freedom of the system both drop sharply, so $\\Delta S$ is negative.',
    ],
    skill: '5E sign of entropy change (Skill 1)',
  },
  {
    id: 'fl3-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'The mass spectrum of an element shows only two peaks, for singly charged ions at m/z 63 and m/z 65, with relative heights of 70 and 30. The average atomic mass of the element is closest to:',
    options: ['63.6', '63.0', '64.0', '64.4'],
    correctAnswer: 0,
    explanation:
      'The average atomic mass is the abundance-weighted mean of the isotope masses: $0.70 \\times 63 + 0.30 \\times 65 = 44.1 + 19.5 = 63.6$. The value 64.0 is the unweighted mean of the two masses. The value 64.4 reverses the abundances, weighting the heavier isotope at 70%. The value 63.0 ignores the heavier isotope entirely.',
    optionExplanations: [
      'The average atomic mass is the abundance-weighted mean: $0.70 \\times 63 + 0.30 \\times 65 = 44.1 + 19.5 = 63.6$. The more abundant lighter isotope pulls the average toward 63.',
      'This value ignores the heavier isotope entirely and takes the mass of the m/z 63 peak alone. The 30% abundance of the m/z 65 isotope must raise the average above 63.',
      'This is the simple unweighted mean of 63 and 65. It ignores the relative abundances, which weight the lighter isotope more heavily (70% vs 30%).',
      'This value reverses the abundances, weighting the heavier isotope at 70% ($0.30 \\times 63 + 0.70 \\times 65 = 64.4$). The taller peak at m/z 63 means the lighter isotope is the more abundant one.',
    ],
    skill: '4E isotopes and average atomic mass (Skill 2)',
  },
  {
    id: 'fl3-cp-b-d05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'Before an alcohol is used as the substrate in an SN2 reaction, its hydroxyl group is often converted to a tosylate (p-toluenesulfonate) ester. This is done because:',
    options: [
      'hydroxide is a weak base, so it bonds too strongly to carbon to be displaced',
      'tosylate is a strong nucleophile, so it attacks the substrate carbon readily',
      'tosylate is a weak, resonance-stabilized base, so it departs readily',
      'tosylate adds steric bulk at the carbon, so it promotes backside attack',
    ],
    correctAnswer: 2,
    explanation:
      'Good leaving groups are weak bases. The negative charge of the tosylate anion is delocalized over three sulfonyl oxygens, making it the conjugate base of a strong acid and an excellent leaving group, whereas hydroxide is a strong base and a poor one. Hydroxide is a strong base, not a weak one. Tosylate’s role is to leave, not to attack, and it is a poor nucleophile. Steric bulk at the reacting carbon hinders backside attack rather than promoting it.',
    optionExplanations: [
      'Hydroxide is a strong base, not a weak one. It is precisely because hydroxide is a strong base (the conjugate base of water, pKa ≈ 16) that it is a poor leaving group.',
      'Tosylate is a poor nucleophile, and its role is to leave, not to attack. The nucleophile in an SN2 reaction is a separate species that displaces the tosylate.',
      'Good leaving groups are weak bases. The negative charge of tosylate is delocalized over three sulfonyl oxygens, making it the conjugate base of a strong acid and an excellent leaving group, unlike the strongly basic hydroxide.',
      'Steric bulk at or near the reacting carbon hinders backside attack in SN2 reactions rather than promoting it. The tosylate’s bulk is on the sulfur side, away from the carbon, and is not the reason it is used.',
    ],
    skill: '5D leaving-group ability (Skill 1)',
  },
  {
    id: 'fl3-cp-b-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A segment of one strand of a DNA double helix has the sequence 5′-GATTC-3′. Written in the 5′→3′ direction, the sequence of the complementary strand is:',
    options: ['5′-CTAAG-3′', '5′-GAATC-3′', '5′-GAAUC-3′', '5′-CUAAG-3′'],
    correctAnswer: 1,
    explanation:
      'The two strands of a double helix are antiparallel, so the complement pairs C with G, T with A, A with T, and G with C to give 3′-CTAAG-5′, which is written 5′-GAATC-3′. 5′-CTAAG-3′ lists the correct complementary bases but labels the ends as if the strands were parallel. Both sequences containing U use uracil, which occurs in RNA rather than DNA.',
    optionExplanations: [
      'This lists the correct complementary bases (C, T, A, A, G) but labels the ends as if the strands were parallel. The complement of 5′-GATTC-3′ is 3′-CTAAG-5′, which reads 5′-GAATC-3′.',
      'Pairing C–G, T–A, A–T, G–C along the antiparallel strand gives 3′-CTAAG-5′. Rewritten in the 5′→3′ direction, that is 5′-GAATC-3′.',
      'This sequence contains uracil (U), which occurs in RNA, not DNA. The complementary strand of a DNA double helix must use thymine (T) to pair with adenine.',
      'This sequence contains uracil, a base found in RNA rather than DNA, and also labels the ends as if the strands were parallel. Both errors disqualify it.',
    ],
    skill: '5D nucleic acid strand polarity (Skill 1)',
  },
  {
    id: 'fl3-cp-b-d07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'An unknown gas has a density of 1.25 g/L at 0 °C and 1.00 atm, conditions under which one mole of an ideal gas occupies 22.4 L. The gas is most likely:',
    options: ['O₂', 'CO₂', 'CH₄', 'N₂'],
    correctAnswer: 3,
    explanation:
      'Molar mass equals density times molar volume: $1.25\\ \\text{g/L} \\times 22.4\\ \\text{L/mol} = 28$ g/mol, which matches N₂. O₂ (32 g/mol) would have a density of about 1.43 g/L, CO₂ (44 g/mol) about 1.96 g/L, and CH₄ (16 g/mol) about 0.71 g/L.',
    optionExplanations: [
      'O₂ has a molar mass of 32 g/mol, which would give a density of 32/22.4 ≈ 1.43 g/L at these conditions, higher than the observed 1.25 g/L.',
      'CO₂ has a molar mass of 44 g/mol, which would give a density of 44/22.4 ≈ 1.96 g/L, far above the observed value.',
      'CH₄ has a molar mass of 16 g/mol, which would give a density of 16/22.4 ≈ 0.71 g/L, well below the observed 1.25 g/L.',
      'Molar mass equals density times molar volume: $1.25\\ \\text{g/L} \\times 22.4\\ \\text{L/mol} = 28$ g/mol. That matches N₂ (2 × 14 g/mol).',
    ],
    skill: '4B gas density and molar mass (Skill 2)',
  },
]
