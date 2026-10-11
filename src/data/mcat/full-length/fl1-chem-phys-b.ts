/**
 * MCAT Full-Length Form 1 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-09-29 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL1_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. BIOCHEMISTRY — Protein purification table, SDS-PAGE, IEF, SEC, DEAE
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-b-06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Purification of a Recombinant Aminotransferase',
    passageText:
      'Researchers set out to purify a bacterial aminotransferase expressed in *Escherichia coli* so that its kinetic properties could be studied. Enzyme activity was measured by coupling the transamination reaction to an NADH-dependent dehydrogenase and following the decrease in absorbance at 340 nm; one unit (U) was defined as the amount of enzyme that converts 1 μmol of substrate per minute at 25 °C. Total protein was measured with the Bradford assay, in which the dye Coomassie Brilliant Blue shifts its absorbance maximum to 595 nm when it binds protein; bovine serum albumin was used to construct the standard curve. Because the dye responds mainly to arginine and aromatic side chains, the color yield per milligram varies somewhat from one protein to another, so the researchers treated the protein values as consistent within the study rather than absolute.\n\nCells were lysed by sonication in 50 mM phosphate buffer, pH 7.5, and the lysate was cleared by centrifugation (Step 1). Solid ammonium sulfate was added to 45% saturation; the resulting precipitate was collected, redissolved in a small volume of buffer, and dialyzed overnight against the same phosphate buffer (Step 2). The dialyzed sample was loaded onto a column of DEAE-cellulose, a resin that carries positively charged diethylaminoethyl groups, equilibrated at pH 7.5. After the column was washed with buffer, bound proteins were eluted with a linear gradient of NaCl, and the fractions containing activity were pooled (Step 3). The pool was concentrated and passed through a size-exclusion column that had been calibrated with globular protein standards of known mass (Step 4). Table 1 summarizes the purification.\n\nThe final preparation gave a single band on SDS-PAGE with an apparent molecular mass of 48 kDa; the position of the band was unchanged whether the sample was prepared with or without the reducing agent β-mercaptoethanol. On the calibrated size-exclusion column, the native enzyme eluted at a volume corresponding to a globular protein of approximately 96 kDa. Isoelectric focusing of the purified protein in a pH 3–10 gradient gel showed a single band at pH 5.2.\n\nThe researchers noted that in Step 2 the enzyme precipitated at 45% saturation while most contaminating proteins remained in solution, and that the DEAE step removed the majority of the contaminants that remained. They also observed that a small fraction of the pooled activity from Step 3 was lost during concentration before Step 4, presumably through adsorption of enzyme to the concentrator membrane, and that no activity was detected in the material that passed through the DEAE column during loading and washing.',
    figure:
      '**Table 1. Purification of the aminotransferase from 10 g of cells**\n\n| Step | Total protein (mg) | Total activity (U) |\n|------|--------------------|--------------------|\n| 1. Cleared lysate | 5,000 | 20,000 |\n| 2. Ammonium sulfate precipitate, dialyzed | 1,200 | 18,000 |\n| 3. DEAE-cellulose pool | 150 | 15,000 |\n| 4. Size-exclusion pool | 30 | 12,000 |',
    questions: [
      {
        question: 'Based on Table 1, the fold purification achieved through Step 3 (relative to the cleared lysate) and the overall yield of activity after Step 4 are, respectively:',
        options: ['25-fold and 60%', '25-fold and 75%', '100-fold and 60%', '33-fold and 75%'],
        correctAnswer: 0,
        explanation:
          'Specific activity is total activity divided by total protein: 20,000 U / 5,000 mg = 4 U/mg in the lysate and 15,000 U / 150 mg = 100 U/mg after Step 3, so the fold purification through Step 3 is 100/4 = 25. Yield is the activity remaining relative to the starting activity: 12,000 U / 20,000 U = 60% after Step 4. The pairing of 25-fold with 75% takes the yield from Step 3 rather than Step 4. The pairing of 100-fold with 60% takes the fold purification from Step 4 (400 U/mg ÷ 4 U/mg). The 33-fold value is the ratio of total protein (5,000/150), which ignores the activity lost along the way.',
        optionExplanations: [
          'Specific activity rises from 20,000/5,000 = 4 U/mg in the lysate to 15,000/150 = 100 U/mg after Step 3, a 25-fold purification. Yield after Step 4 is 12,000/20,000 = 60%.',
          'The 25-fold purification is right, but 75% is the yield after Step 3 (15,000/20,000). The question asks for the yield after Step 4, where 12,000 U remain, which is 60%.',
          'The 60% yield is right, but 100-fold is the purification after Step 4 (400 U/mg ÷ 4 U/mg), not through Step 3, where specific activity is 100 U/mg, a 25-fold increase.',
          'Thirty-three-fold is the ratio of total protein (5,000/150), which ignores the activity lost along the way, and 75% is the Step 3 yield rather than the final yield after Step 4.',
        ],
        skill: '5D protein purification (Skill 4)',
      },
      {
        question: 'The behavior of the enzyme on the DEAE-cellulose column is best explained by the fact that, at pH 7.5, the enzyme:',
        options: [
          'carries a net positive charge and is repelled by the resin, so it passes through during the wash',
          'carries a net negative charge and binds the resin until the salt gradient displaces it',
          'carries no net charge and is retained only through hydrophobic contacts with the resin',
          'is held by its protonated histidine side chains, which pair with the resin’s counter-ions',
        ],
        correctAnswer: 1,
        explanation:
          'Isoelectric focusing placed the enzyme’s pI at 5.2. At pH 7.5, more than two units above the pI, the protein’s acidic side chains are deprotonated and it carries a net negative charge, so it binds the positively charged diethylaminoethyl groups; the rising NaCl gradient then supplies chloride ions that compete for the resin and displace the protein, which matches the observation that no activity passed through during loading. A net positive charge would require a pH below the pI. A protein with no net charge exists only at its pI, and DEAE-cellulose is an ion exchanger, not a hydrophobic resin. Histidine side chains (pKa near 6) are mostly neutral at pH 7.5, and a positively charged group would be repelled by the resin in any case.',
        optionExplanations: [
          'A net positive charge would require the pH to lie below the enzyme’s pI of 5.2. At pH 7.5 the protein is negative, and the passage states that no activity passed through during loading.',
          'With a pI of 5.2, at pH 7.5 the enzyme’s acidic side chains are deprotonated and it is net negative, so it binds the positively charged DEAE groups until chloride from the NaCl gradient competes it off, matching the observation that no activity passed through unbound.',
          'A protein is uncharged only at its pI (5.2), not at pH 7.5. Moreover, DEAE-cellulose is an ion exchanger that retains proteins by charge, not a hydrophobic-interaction resin.',
          'Histidine (p$K_a$ near 6) is mostly neutral at pH 7.5, and a protonated histidine would be positive and repelled by the cationic resin rather than pairing with its counter-ions.',
        ],
        skill: '5D ion-exchange chromatography (Skill 2)',
      },
      {
        question: 'Taken together, the SDS-PAGE, reducing-agent, and size-exclusion results indicate that the native enzyme is most likely a:',
        options: [
          'single 96-kDa polypeptide that SDS cleaves into two 48-kDa fragments',
          'homodimer whose two subunits are joined by a disulfide bond',
          'homodimer whose two subunits associate through noncovalent interactions',
          'heterodimer of two subunits that differ substantially in mass',
        ],
        correctAnswer: 2,
        explanation:
          'Size exclusion, run under native conditions, reports a mass of about 96 kDa, whereas SDS-PAGE, which dissociates noncovalent assemblies, shows a single 48-kDa species: two identical 48-kDa subunits make a 96-kDa dimer. Because the SDS-PAGE band is the same with or without β-mercaptoethanol, no disulfide bond needs to be broken to separate the subunits, so they are held together noncovalently. SDS is a detergent that disrupts noncovalent interactions; it does not cleave peptide bonds. A disulfide-linked dimer would run near 96 kDa on SDS-PAGE without reducing agent and near 48 kDa with it. A heterodimer of unequal subunits would give two bands on SDS-PAGE.',
        optionExplanations: [
          'SDS is a detergent that disrupts noncovalent associations; it does not cleave peptide bonds. A single 96-kDa chain would still run at 96 kDa on SDS-PAGE.',
          'A disulfide-linked dimer would migrate near 96 kDa without β-mercaptoethanol and near 48 kDa with it. The band position was unchanged by the reducing agent, so no disulfide holds the subunits together.',
          'Native size exclusion gives 96 kDa, SDS-PAGE gives a single 48-kDa band, and the reducing agent changes nothing: two identical 48-kDa subunits held together by noncovalent interactions that SDS alone disrupts.',
          'A heterodimer of subunits that differ substantially in mass would produce two distinct bands on SDS-PAGE, but the final preparation gave a single 48-kDa band.',
        ],
        skill: '5D protein quaternary structure (Skill 2)',
      },
      {
        question: 'Why was the redissolved ammonium sulfate precipitate dialyzed before it was loaded onto the DEAE column?',
        options: [
          'To remove salt ions that would otherwise compete with the protein for the charged groups on the resin',
          'To concentrate the sample so that the enzyme would bind the resin more tightly than the contaminating proteins',
          'To raise the pH of the sample above the isoelectric point of the enzyme so that it could bind the resin',
          'To denature the remaining contaminating proteins so that they could be pelleted and removed by centrifugation',
        ],
        correctAnswer: 0,
        explanation:
          'Ion-exchange binding depends on electrostatic attraction between the protein and the resin, and a redissolved ammonium sulfate pellet is a concentrated salt solution. Sulfate anions would compete with the negatively charged enzyme for the positively charged resin, and the high ionic strength would screen the attraction, so the enzyme would pass through unbound; dialysis against low-salt buffer removes the small salt ions while retaining the protein. Dialysis dilutes rather than concentrates a sample, and binding strength is set by charge, not by concentration. The pellet was redissolved in the same pH 7.5 buffer, so the pH did not need adjusting. Dialysis at 4 °C against buffer does not denature proteins.',
        optionExplanations: [
          'A redissolved ammonium sulfate pellet is a concentrated salt solution. Sulfate anions would compete with the negatively charged enzyme for the cationic resin and the high ionic strength would screen the attraction, so dialysis removes the salt first.',
          'Dialysis dilutes rather than concentrates a sample, and the strength of ion-exchange binding is determined by the protein’s charge, not by its concentration.',
          'The pellet was redissolved in the same pH 7.5 phosphate buffer used throughout, so the pH was already more than two units above the pI; no pH adjustment was needed.',
          'Dialysis against buffer at low temperature is a gentle buffer-exchange step; it does not denature proteins, and no centrifugation step is described after it.',
        ],
        skill: '5D separation methods (Skill 3)',
      },
      {
        question: 'If the purified enzyme were applied to the size-exclusion column together with a 150-kDa globular protein and a 25-kDa globular protein, the order in which the three would elute is:',
        options: [
          '25-kDa protein, then the enzyme, then the 150-kDa protein',
          'the enzyme, then the 25-kDa protein, then the 150-kDa protein',
          '150-kDa protein, then the 25-kDa protein, then the enzyme',
          '150-kDa protein, then the enzyme, then the 25-kDa protein',
        ],
        correctAnswer: 3,
        explanation:
          'In size-exclusion chromatography, molecules too large to enter the pores of the beads travel only through the space between beads and elute first, while smaller molecules enter the pores, take a longer path, and elute later. The native enzyme behaves as a 96-kDa globular protein, so the 150-kDa protein elutes first, the enzyme second, and the 25-kDa protein last. Ordering from smallest to largest reverses the principle, as if size exclusion worked like SDS-PAGE, where small proteins migrate fastest. Placing the enzyme first or the 25-kDa protein before the enzyme would require the intermediate or smallest species to be excluded from more pores than the largest, which is not possible.',
        optionExplanations: [
          'This ordering runs smallest to largest, as if size exclusion worked like SDS-PAGE. In size exclusion the largest molecules are excluded from the pores and elute first.',
          'The 96-kDa enzyme cannot elute before the 150-kDa protein, which is excluded from more pore volume and takes the shorter path. Placing the 25-kDa protein second also inverts the principle.',
          'The 150-kDa protein does elute first, but the 25-kDa protein, which enters the most pore volume, must elute last, after the 96-kDa enzyme, not before it.',
          'Large molecules bypass the bead pores and elute first; small ones enter the pores and elute later. The native enzyme behaves as 96 kDa, so the order is 150 kDa, enzyme, 25 kDa.',
        ],
        skill: '5D size-exclusion chromatography (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. GENERAL CHEMISTRY — Kinetics: order from half-lives, k, Ea, design
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-b-07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Hydrolysis of a β-Lactam Antibiotic in Solution',
    passageText:
      'Antibiotics of the penicillin family contain a four-membered β-lactam ring, a cyclic amide whose strained geometry makes its carbonyl carbon unusually susceptible to nucleophilic attack. In aqueous solution the ring opens by hydrolysis to give an inactive penicilloic acid. Because the drug is often dissolved hours before it is infused, pharmacists need to know how quickly this loss of activity occurs under storage conditions.\n\nResearchers studied the hydrolysis of one such antibiotic (Drug P) in 0.10 M phosphate buffer. Hydrolysis of the β-lactam ring is catalyzed by hydroxide ion: the rate law is first order in hydroxide ion concentration, and within a single buffered run the hydroxide concentration remains constant. Water is present in vast excess. The concentration of intact drug was followed by high-performance liquid chromatography, which separates the intact drug from its ring-opened product so that each can be quantified independently; the sum of the two concentrations remained equal to the starting concentration throughout every run, showing that no other products formed.\n\nThree runs were carried out at pH 7.4. In Run 1, a solution initially 8.0 mM in Drug P was held at 37 °C; in Run 2, a solution initially 4.0 mM was held at 37 °C; and in Run 3, a solution initially 8.0 mM was held at 47 °C. Samples were withdrawn every 10 minutes for 50 minutes and analyzed immediately; each run was performed in triplicate, and the reported concentrations are means whose standard deviations were smaller than the plotted symbols. Solutions were held in a water bath controlled to within 0.1 °C. The results are plotted in Figure 1.\n\nIn a separate set of runs (not shown), the researchers examined the effect of adding a purified β-lactamase, a bacterial enzyme that hydrolyzes the same amide bond. In the presence of the enzyme the drug disappeared within seconds at 37 °C, the initial rate of disappearance was proportional to the enzyme concentration, and the product was identical to that of the non-enzymatic reaction. The enzyme was recovered unchanged at the end of the reaction.\n\nThe researchers concluded that the temperature dependence of the non-enzymatic reaction was consistent with the Arrhenius equation, $k = A e^{-E_a/RT}$, and they used the rate constants from Runs 1 and 3 to estimate the activation energy of the hydroxide-catalyzed hydrolysis. They also noted that phosphate buffer components can themselves act as weak general-base catalysts, and they cautioned that rate constants measured in one buffer may not transfer exactly to solutions prepared in a different buffer, even at the same pH.',
    chart: {
      title: 'Figure 1. Concentration of intact Drug P versus time at pH 7.4',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'min',
      yLabel: '[Drug P]',
      yUnit: 'mM',
      xValues: [0, 10, 20, 30, 40, 50],
      yValues: [8.0, 5.7, 4.0, 2.8, 2.0, 1.4],
      seriesLabel: 'Run 1 (8.0 mM, 37 °C)',
      comparisonSeries: [
        { label: 'Run 2 (4.0 mM, 37 °C)', yValues: [4.0, 2.8, 2.0, 1.4, 1.0, 0.7] },
        { label: 'Run 3 (8.0 mM, 47 °C)', yValues: [8.0, 4.0, 2.0, 1.0, 0.5, 0.25] },
      ],
    },
    questions: [
      {
        question: 'The data in Figure 1 support the conclusion that the hydrolysis is first order in Drug P because:',
        options: [
          'the concentration falls by the same number of millimolar in each 10-minute interval',
          'the time required for the concentration to fall by half is the same in Run 1 and Run 2',
          'the initial rate of disappearance in Run 3 is twice the initial rate in Run 1',
          'the initial rate of disappearance in Run 2 is equal to the initial rate in Run 1',
        ],
        correctAnswer: 1,
        explanation:
          'For a first-order process the half-life, $t_{1/2} = 0.693/k$, is independent of the starting concentration. In Figure 1 both Run 1 (8.0 → 4.0 mM) and Run 2 (4.0 → 2.0 mM) take 20 minutes to halve, and within each run every successive halving also takes 20 minutes, which is the signature of first-order kinetics. A constant drop per interval would describe a zero-order reaction, and the figure shows the drop shrinking over time. The faster rate in Run 3 reflects the higher temperature and says nothing about the order with respect to the drug. Equal initial rates at different starting concentrations would indicate zero order; the initial rate in Run 2 is in fact about half that in Run 1.',
        optionExplanations: [
          'A constant drop in millimolar per interval is the signature of a zero-order reaction. Figure 1 shows the drop shrinking each interval (2.3, 1.7, 1.2, and so on), not staying constant.',
          'For a first-order process the half-life is independent of starting concentration. Run 1 (8.0 → 4.0 mM) and Run 2 (4.0 → 2.0 mM) both take 20 minutes to halve, and each successive halving also takes 20 minutes.',
          'The faster disappearance in Run 3 reflects the higher temperature (47 °C versus 37 °C), not the order in Drug P. A temperature comparison cannot establish reaction order.',
          'Equal initial rates at different starting concentrations would indicate zero order. In fact the initial rate in Run 2 is about half that in Run 1, which is what first order predicts.',
        ],
        skill: '5E reaction order from data (Skill 4)',
      },
      {
        question: 'The rate constant for the hydrolysis of Drug P at 37 °C and pH 7.4 is closest to:',
        options: ['0.020 min⁻¹', '0.025 min⁻¹', '0.035 min⁻¹', '0.069 min⁻¹'],
        correctAnswer: 2,
        explanation:
          'From Figure 1 the half-life at 37 °C is 20 min (8.0 mM falls to 4.0 mM at 20 min and to 2.0 mM at 40 min). For a first-order reaction $k = 0.693/t_{1/2} = 0.693/20\\ \\text{min} \\approx 0.035\\ \\text{min}^{-1}$. The value 0.069 min⁻¹ uses a 10-minute half-life, which belongs to Run 3 at 47 °C. The value 0.020 min⁻¹ is the reciprocal of the 50-minute observation window rather than of the half-life. The value 0.025 min⁻¹ is the average fractional loss per minute over the first 20 minutes (half of the drug in 20 min), which is not how a first-order rate constant is defined.',
        optionExplanations: [
          'A value of 0.020 min⁻¹ is the reciprocal of the 50-minute observation window, not of the half-life. The rate constant is derived from $t_{1/2}$, not from the total time of the experiment.',
          'A value of 0.025 min⁻¹ is the average fractional loss per minute over the first 20 minutes (half the drug in 20 min). A first-order rate constant is 0.693 divided by the half-life, not 0.5 divided by it.',
          'Figure 1 shows a 20-minute half-life at 37 °C (8.0 to 4.0 mM at 20 min, 2.0 mM at 40 min). For first order, $k = 0.693/t_{1/2} = 0.693/20 \\approx 0.035\\ \\text{min}^{-1}$.',
          'A value of 0.069 min⁻¹ corresponds to a 10-minute half-life, which is what Run 3 shows at 47 °C, not the 37 °C condition asked about.',
        ],
        skill: '5E rate constant calculation (Skill 2)',
      },
      {
        question: 'The researchers want to verify that the reaction is first order in hydroxide ion. Which additional set of runs would best test this?',
        options: [
          'Runs at pH 7.4, 8.4, and 9.4, each at 37 °C with the same initial drug concentration, comparing half-lives',
          'Runs at 27 °C, 37 °C, and 47 °C, each at pH 7.4 with the same initial drug concentration, comparing rate constants',
          'Runs at pH 7.4 and 37 °C with initial drug concentrations of 2.0, 4.0, and 8.0 mM, comparing initial rates',
          'Runs at pH 7.4 and 37 °C with three different concentrations of β-lactamase, comparing initial rates',
        ],
        correctAnswer: 0,
        explanation:
          'To establish the order with respect to a species, its concentration must be varied while everything else is held constant. Each unit increase in pH raises the hydroxide concentration tenfold, so if the reaction is first order in hydroxide the observed rate constant should rise tenfold and the half-life should fall from 20 min to about 2 min and then 0.2 min at pH 8.4 and 9.4. Varying temperature tests the Arrhenius relationship, not the dependence on hydroxide. Varying the initial drug concentration repeats the comparison of Runs 1 and 2 and probes the order in drug only. Varying enzyme concentration characterizes the enzyme-catalyzed pathway, whose rate the passage already states is proportional to enzyme concentration.',
        optionExplanations: [
          'To find the order in hydroxide, only hydroxide must vary. Each pH unit raises $[\\text{OH}^-]$ tenfold, so first-order dependence predicts the half-life falling from 20 min to about 2 min and then 0.2 min.',
          'Varying temperature while holding pH fixed probes the Arrhenius relationship and activation energy; hydroxide concentration stays constant, so this says nothing about the order in hydroxide.',
          'Varying initial drug concentration repeats the comparison already made between Runs 1 and 2 and tests the order in Drug P, not in hydroxide ion.',
          'Varying β-lactamase concentration characterizes the enzyme-catalyzed pathway, which the passage already states is proportional to enzyme concentration; it does not address the non-enzymatic hydroxide dependence.',
        ],
        skill: '5E rate-law experimental design (Skill 3)',
      },
      {
        question: 'Which statement best explains why the rate constant in Run 3 is larger than the rate constant in Run 1?',
        options: [
          'At the higher temperature, the equilibrium constant for hydrolysis is larger, so more product forms',
          'At the higher temperature, the reaction proceeds by a different mechanism with a larger frequency factor',
          'At the higher temperature, the activation energy of the hydroxide-catalyzed pathway is lower',
          'At the higher temperature, a larger fraction of collisions has energy exceeding the activation energy',
        ],
        correctAnswer: 3,
        explanation:
          'The Arrhenius equation describes how the rate constant grows with temperature at a fixed activation energy: raising the temperature broadens the distribution of molecular energies, so a larger fraction of encounters between drug and hydroxide has enough energy to cross the barrier, and here a 10 °C rise roughly doubles $k$. The activation energy is a property of the pathway and does not change with temperature; it is the exponential factor $e^{-E_a/RT}$ that changes. A larger equilibrium constant would affect the final extent of reaction, but hydrolysis already goes to completion in both runs and the question concerns rate, not equilibrium. Nothing in the data suggests a change of mechanism, and the frequency factor $A$ is nearly temperature independent.',
        optionExplanations: [
          'An equilibrium constant governs the final extent of reaction, not its rate. Hydrolysis already goes to completion in both runs; the question is about how fast $k$ changes with temperature.',
          'Nothing in the data suggests a change in mechanism, and the frequency factor $A$ in the Arrhenius equation is nearly temperature independent; the exponential term is what changes.',
          'Activation energy is a property of the reaction pathway and does not depend on temperature. Temperature changes the fraction of collisions that can surmount a fixed barrier.',
          'In $k = Ae^{-E_a/RT}$, raising $T$ makes the exponential factor larger: a broader energy distribution means more drug–hydroxide encounters exceed the fixed activation energy, roughly doubling $k$ here for a 10 °C rise.',
        ],
        skill: '5E activation energy and temperature (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PHYSICS (info) — Membrane capacitor, Ohm's law, RC discharge, ½CV²
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-b-08',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Capacitance and Current in Excitable Tissue',
    passageText:
      'The plasma membrane of a cell behaves electrically as a parallel-plate capacitor. The lipid bilayer, roughly 5 nm thick, is an insulator that separates two conducting salt solutions, the cytosol and the extracellular fluid. Capacitance per unit area is given by $C/A = \\kappa\\varepsilon_0/d$, where $\\kappa$ is the dielectric constant of the bilayer and $d$ its thickness; for biological membranes the measured value is close to $1\\ \\mu\\text{F/cm}^2$ regardless of cell type, because bilayer thickness and composition vary little. A resting potential of about $-70$ mV therefore corresponds to a stored charge $Q = CV$ on each face of the membrane, with the intracellular face negative. Only a minute fraction of the ions in the cell is needed to supply this charge, which is why the bulk ion concentrations on either side are essentially unchanged by the resting potential.\n\nIon channels embedded in the bilayer act as conductors in parallel with this capacitance. Each open channel has a conductance $g$ (the reciprocal of its resistance), and the current through it obeys Ohm’s law in the form $I = g(V_m - E_{ion})$, where $V_m - E_{ion}$ is the driving force: the difference between the membrane potential and the equilibrium potential of the permeating ion. Because the channels lie in parallel, the total membrane conductance is the sum of the individual channel conductances. The membrane’s time constant, $\\tau = RC$, sets how quickly the potential can change in response to a current, and it is this quantity, rather than the capacitance alone, that governs how rapidly a synaptic input can charge the postsynaptic membrane.\n\nThe same physics governs external defibrillation. Ventricular fibrillation is a disorganized electrical state in which the ventricles quiver without pumping; a large, brief current through the heart can depolarize most of the myocardium at once, after which a coordinated rhythm may resume. A defibrillator stores charge on a capacitor of about 100 μF by charging it to a high voltage, typically 2000 V in older monophasic devices. When the paddles are applied, the capacitor discharges through the patient’s chest, whose transthoracic resistance is commonly 50–100 Ω depending on chest size, electrode contact, and the conductive gel used. The discharge follows the exponential RC law: the current begins at a peak value $I_0 = V_0/R$ and decays with time constant $\\tau = RC$, so that the stored energy is delivered over a few milliseconds.\n\nOnly a fraction of the delivered current actually traverses the heart, because the chest wall, lungs, and blood offer parallel paths. Modern devices measure transthoracic resistance through the paddles before the shock and adjust the charging voltage or the pulse duration so that the delivered energy, rather than the stored energy, matches the clinician’s setting. Many also truncate the pulse and reverse its polarity partway through (a biphasic waveform), which lowers the energy required for successful defibrillation.\n\nThe relationship between energy and voltage is central to device design. Because the energy stored in a capacitor is $U = \\tfrac{1}{2}CV^2$, doubling the charging voltage quadruples the stored energy, and the capacitor must be built to tolerate the electric field between its plates at full charge. Electrical safety rules for the operator follow from the same considerations: a current of tens of milliamperes across the chest can itself induce fibrillation, so a person touching the patient during discharge could receive a dangerous shock.',
    questions: [
      {
        question: 'The magnitude of the electric field within the lipid bilayer of a cell at its resting potential is closest to:',
        options: ['$1 \\times 10^{4}$ V/m', '$1 \\times 10^{5}$ V/m', '$1 \\times 10^{6}$ V/m', '$1 \\times 10^{7}$ V/m'],
        correctAnswer: 3,
        explanation:
          'For a parallel-plate geometry the field is uniform and equals the potential difference divided by the plate separation: $E = V/d = (0.070\\ \\text{V})/(5 \\times 10^{-9}\\ \\text{m}) = 1.4 \\times 10^{7}$ V/m, closest to $1 \\times 10^{7}$ V/m. This enormous field across a very thin insulator is what allows voltage-gated channels to sense small changes in membrane potential. The value $1 \\times 10^{4}$ V/m results from using 5 μm rather than 5 nm for the thickness. The value $1 \\times 10^{6}$ V/m slips one power of ten in converting nanometers to meters, and $1 \\times 10^{5}$ V/m slips two.',
        optionExplanations: [
          'A field of $1 \\times 10^{4}$ V/m results from using a thickness of 5 μm instead of 5 nm, three orders of magnitude too thick for a lipid bilayer.',
          'A field of $1 \\times 10^{5}$ V/m slips two powers of ten in converting the 5 nm thickness to meters (5 × 10⁻⁹ m).',
          'A field of $1 \\times 10^{6}$ V/m slips one power of ten in the nanometer-to-meter conversion; 0.070 V across 5 × 10⁻⁹ m gives 1.4 × 10⁷ V/m.',
          'For parallel plates the field is uniform: $E = V/d = 0.070\\ \\text{V}/(5 \\times 10^{-9}\\ \\text{m}) = 1.4 \\times 10^{7}$ V/m, closest to $1 \\times 10^{7}$ V/m. This huge field is what voltage-gated channels sense.',
        ],
        skill: '4C electric field in a capacitor (Skill 2)',
      },
      {
        question: 'The energy stored in the 100-μF capacitor of a monophasic defibrillator charged to 2000 V is:',
        options: ['0.2 J', '2 J', '200 J', '400 J'],
        correctAnswer: 2,
        explanation:
          '$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(1.0 \\times 10^{-4}\\ \\text{F})(2.0 \\times 10^{3}\\ \\text{V})^2 = \\tfrac{1}{2}(1.0 \\times 10^{-4})(4.0 \\times 10^{6}) = 200$ J, in the range of energies used clinically. The value 400 J omits the factor of one-half. The value 2 J uses $V$ rather than $V^2$ (giving $\\tfrac{1}{2}CV$ with mismatched units), and 0.2 J compounds that error with a misplaced decimal in the capacitance.',
        optionExplanations: [
          'A value of 0.2 J compounds two errors: using $V$ instead of $V^2$ and misplacing a decimal in the capacitance. The correct expression is $\\tfrac{1}{2}CV^2$.',
          'A value of 2 J uses $V$ rather than $V^2$ (computing $\\tfrac{1}{2}CV$ with mismatched units). Energy on a capacitor scales with the square of the voltage.',
          '$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(1.0 \\times 10^{-4}\\ \\text{F})(2000\\ \\text{V})^2 = \\tfrac{1}{2}(10^{-4})(4 \\times 10^{6})$ = 200 J, within the clinical range for monophasic defibrillation.',
          'A value of 400 J omits the factor of one-half in $\\tfrac{1}{2}CV^2$, computing $CV^2$ instead.',
        ],
        skill: '4C capacitor energy (Skill 2)',
      },
      {
        question: 'The same fully charged defibrillator is discharged into Patient X, whose transthoracic resistance is 50 Ω, and later into Patient Y, whose transthoracic resistance is 100 Ω. Compared with Patient X, Patient Y receives:',
        options: [
          'half the peak current and the same total energy, delivered over a longer time',
          'half the peak current and half the total energy, delivered over an equal time interval',
          'the same peak current and the same total energy, delivered over a shorter time',
          'twice the peak current and twice the total energy, delivered over a shorter time',
        ],
        correctAnswer: 0,
        explanation:
          'The peak current is $I_0 = V_0/R$, so doubling the resistance halves the peak current (40 A becomes 20 A for a 2000-V charge). The time constant $\\tau = RC$ doubles (5 ms becomes 10 ms), so the discharge lasts longer. The total energy delivered is the energy that was stored on the capacitor, $\\tfrac{1}{2}CV_0^2$, all of which is eventually dissipated in the resistance regardless of its value, so the total energy is essentially unchanged. Half the energy over the same time would require the energy to depend on $R$, which it does not. The same or twice the peak current contradicts Ohm’s law for a fixed initial voltage, and a shorter delivery time contradicts the longer time constant.',
        optionExplanations: [
          'Peak current $I_0 = V_0/R$ halves when resistance doubles; the time constant $\\tau = RC$ doubles, so delivery takes longer. All stored energy $\\tfrac{1}{2}CV_0^2$ is eventually dissipated in the chest regardless of $R$, so total energy is unchanged.',
          'Half the peak current is right, but the stored energy does not depend on $R$; all of it is dissipated eventually. Also the time constant doubles, so the discharge is not over an equal interval.',
          'The same peak current contradicts Ohm’s law for a fixed initial voltage: $I_0 = V_0/R$ must halve. A shorter delivery time also contradicts the doubled time constant $RC$.',
          'Twice the peak current would require half the resistance, not double. The energy stored on the capacitor is fixed by $\\tfrac{1}{2}CV_0^2$ and cannot double, and the time constant lengthens rather than shortens.',
        ],
        skill: '4C RC discharge and Ohm’s law (Skill 2)',
      },
      {
        question: 'When many ligand-gated channels open simultaneously in a postsynaptic membrane, the membrane time constant:',
        options: [
          'increases, because the open channels add to the total membrane capacitance',
          'increases, because the open channels add to the total membrane resistance',
          'decreases, because the open channels reduce the total membrane resistance',
          'is unchanged, because the time constant depends only on the membrane area',
        ],
        correctAnswer: 2,
        explanation:
          'Open channels are conductors in parallel with one another and with the membrane capacitance. Parallel conductances add, so opening more channels raises the total conductance and lowers the membrane resistance $R$; with the capacitance fixed by the bilayer, $\\tau = RC$ decreases and the membrane potential can change more quickly. Channels are proteins that conduct ions; they do not change the thickness or area of the insulating bilayer, so the capacitance is unaffected. Adding parallel pathways lowers rather than raises resistance. Area affects $R$ and $C$ in opposite directions and cancels out of $\\tau$, which depends on the specific resistance and capacitance, so area is not what fixes the time constant.',
        optionExplanations: [
          'Channels are proteins that conduct ions; they do not alter the thickness or area of the insulating bilayer, so membrane capacitance is unchanged when they open.',
          'Open channels are parallel conductances, and parallel conductances add. More open channels lower the total membrane resistance; they cannot raise it.',
          'Ligand-gated channels are conductors in parallel; opening many of them raises total conductance and lowers membrane resistance $R$. With $C$ fixed by the bilayer, $\\tau = RC$ decreases and the potential can change faster.',
          'Membrane area affects $R$ and $C$ in opposite directions and cancels out of $\\tau$, which depends on specific resistance and capacitance. Opening channels changes resistance, so $\\tau$ does change.',
        ],
        skill: '4C parallel conductances and time constant (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Electrochemistry: glucose biosensor, E°, Nernst
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'An Enzyme-Based Amperometric Glucose Sensor',
    passageText:
      'Portable glucose meters used by people with diabetes are small electrochemical cells. The disposable sensing strip contains the enzyme glucose oxidase, which catalyzes the oxidation of glucose to gluconolactone. During the reaction, the enzyme’s tightly bound cofactor, flavin adenine dinucleotide (FAD), accepts two electrons and two protons to become $\\text{FADH}_2$. For the enzyme to turn over again, $\\text{FADH}_2$ must be reoxidized. In the enzyme’s natural setting, molecular oxygen serves this role and is reduced to hydrogen peroxide. In the strip, a synthetic electron acceptor, the ferricyanide ion $\\text{Fe(CN)}_6^{3-}$, present in large excess in the reagent layer, is used instead; it is reduced to ferrocyanide, $\\text{Fe(CN)}_6^{4-}$, as it reoxidizes $\\text{FADH}_2$.\n\nThe working electrode of the strip is held at a potential positive enough to oxidize ferrocyanide back to ferricyanide, and the resulting electrons flow through the meter to the counter electrode. The working potential is set relative to a silver/silver chloride reference electrode built into the strip. As long as the electrode reaction is fast compared with the enzyme reaction, the steady-state current is proportional to the rate at which the enzyme produces ferrocyanide and therefore reports the glucose concentration. Table 1 lists reduction potentials for the relevant half-reactions under the strip’s operating conditions (pH 7.0, 25 °C), relative to the standard hydrogen electrode.\n\nStudents evaluating a prototype strip measured the steady-state current at a series of glucose concentrations in buffer (Table 2). They then tested the effect of ascorbate (vitamin C), a substance present in blood at up to about 0.1 mM that is itself readily oxidized at an electrode held at the working potential. Two versions of the strip were compared: the plain prototype and a version in which the enzyme–mediator reagent layer was covered by a thin, negatively charged polymer membrane, so that sample components had to cross the membrane to reach the reagent layer and the electrode. The membrane admits small neutral molecules but largely excludes anions. Each version was tested in 4.0 mM glucose with and without 0.10 mM ascorbate (Table 3).\n\nThe students noted that the current in Table 2 rose almost linearly with glucose concentration at low concentrations but increased more slowly at the highest concentrations tested. They also observed that the sensor’s response was essentially unchanged when the buffer was purged with nitrogen to remove dissolved oxygen, whereas an older sensor design, which detected the hydrogen peroxide produced when oxygen serves as the electron acceptor, gave a much smaller current under the same oxygen-free conditions. Finally, they confirmed that a strip prepared without glucose oxidase gave no measurable current in 10 mM glucose, and that adding ferrocyanide directly to the sample produced a current even in the absence of glucose.',
    figure:
      '**Table 1. Reduction potentials at pH 7.0 and 25 °C (vs. standard hydrogen electrode)**\n\n| Half-reaction | E (V) |\n|---------------|-------|\n| $\\text{Fe(CN)}_6^{3-} + e^- \\rightarrow \\text{Fe(CN)}_6^{4-}$ | +0.36 |\n| $\\text{O}_2 + 2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2\\text{O}_2$ | +0.28 |\n| $\\text{AgCl} + e^- \\rightarrow \\text{Ag} + \\text{Cl}^-$ | +0.20 |\n| $\\text{FAD} + 2\\text{H}^+ + 2e^- \\rightarrow \\text{FADH}_2$ | −0.22 |\n\n**Table 2. Steady-state current of the plain prototype strip versus glucose concentration**\n\n| Glucose (mM) | Current (μA) |\n|--------------|--------------|\n| 0 | 0.00 |\n| 2.0 | 0.40 |\n| 4.0 | 0.80 |\n| 6.0 | 1.18 |\n| 8.0 | 1.50 |\n| 10.0 | 1.76 |\n\n**Table 3. Effect of ascorbate on the current (μA) in 4.0 mM glucose**\n\n| Strip | No ascorbate | 0.10 mM ascorbate |\n|-------|--------------|-------------------|\n| Plain prototype | 0.80 | 1.12 |\n| Membrane-coated | 0.78 | 0.80 |',
    questions: [
      {
        question: 'Under the strip’s operating conditions, the potential of the reaction in which ferricyanide reoxidizes $\\text{FADH}_2$ is:',
        options: [
          '+0.14 V, and the reaction proceeds spontaneously',
          '+0.58 V, and the reaction is spontaneous',
          '−0.58 V, and the reaction is nonspontaneous',
          '+0.58 V, but only while the electrode circuit is closed',
        ],
        correctAnswer: 1,
        explanation:
          'In this reaction ferricyanide is reduced (the cathode half-reaction, E = +0.36 V) and $\\text{FADH}_2$ is oxidized, which is the reverse of the FAD reduction half-reaction (E = −0.22 V). The reaction potential is $E_{cathode} - E_{anode} = 0.36 - (-0.22) = +0.58$ V; a positive value means $\\Delta G$ is negative and the reaction is spontaneous, which is why ferricyanide can regenerate the active enzyme. The value +0.14 V subtracts 0.22 instead of −0.22. A value of −0.58 V would describe the reverse reaction, ferrocyanide reducing FAD, which does not occur spontaneously. The spontaneity of the reaction between the mediator and the enzyme is a property of the two couples and does not depend on whether the electrode circuit is closed; the circuit is needed only to reoxidize ferrocyanide and measure the current.',
        optionExplanations: [
          'A potential of +0.14 V subtracts 0.22 instead of −0.22: $E_{cathode} - E_{anode} = 0.36 - (-0.22)$, not 0.36 − 0.22. The sign of the FAD couple’s potential was dropped.',
          'Ferricyanide is reduced (E = +0.36 V) and $\\text{FADH}_2$ is oxidized, the reverse of the FAD half-reaction (E = −0.22 V). $E = 0.36 - (-0.22) = +0.58$ V; positive E means negative $\\Delta G$ and spontaneity.',
          'A potential of −0.58 V describes the reverse reaction, ferrocyanide reducing FAD, which is indeed nonspontaneous. The reaction asked about is the forward one, in which ferricyanide reoxidizes $\\text{FADH}_2$.',
          'The spontaneity of the reaction between mediator and enzyme is set by the two reduction potentials alone. The electrode circuit is needed only to reoxidize ferrocyanide and measure current, not to make this reaction occur.',
        ],
        skill: '4C cell potential from reduction potentials (Skill 2)',
      },
      {
        question: 'During a measurement, the solution next to the working electrode contains a much higher concentration of ferricyanide than of ferrocyanide. According to the Nernst equation, relative to the value listed in Table 1, the reduction potential of the mediator couple in this region is:',
        options: [
          'more positive, because the reaction quotient for the reduction is less than 1',
          'more positive, because the reaction quotient for the reduction is greater than 1',
          'more negative, because the reaction quotient for the reduction is less than 1',
          'unchanged, because the Nernst equation applies only to solutions at equilibrium',
        ],
        correctAnswer: 0,
        explanation:
          'For the reduction $\\text{Fe(CN)}_6^{3-} + e^- \\rightarrow \\text{Fe(CN)}_6^{4-}$, the reaction quotient is $Q = [\\text{Fe(CN)}_6^{4-}]/[\\text{Fe(CN)}_6^{3-}]$, and the Nernst equation gives $E = E^\\circ - (0.0592/n)\\log Q$. With far more ferricyanide (the oxidized form) than ferrocyanide, $Q < 1$, $\\log Q$ is negative, and $E$ is more positive than +0.36 V: a solution rich in the oxidized species is a stronger oxidizing agent. A quotient greater than 1 would require an excess of the reduced form and would lower the potential. The Nernst equation describes the potential of any half-cell whose concentrations are known, not only equilibrium mixtures; at equilibrium the cell potential would be zero.',
        optionExplanations: [
          'For the reduction half-reaction, $Q = [\\text{Fe(CN)}_6^{4-}]/[\\text{Fe(CN)}_6^{3-}]$. With far more ferricyanide (oxidized form), $Q < 1$, $\\log Q$ is negative, and $E = E^\\circ - (0.0592/n)\\log Q$ is more positive than +0.36 V.',
          'A reaction quotient greater than 1 would require an excess of the reduced form (ferrocyanide) over ferricyanide, the opposite of the stated condition, and it would make $E$ more negative, not more positive.',
          'The direction is reversed: with $Q < 1$, $\\log Q$ is negative, and subtracting a negative term raises $E$. A solution rich in the oxidized species is a stronger oxidizing agent.',
          'The Nernst equation gives the potential of any half-cell with known concentrations, not just equilibrium mixtures. At true equilibrium the cell potential would be zero, which is not the situation here.',
        ],
        skill: '4C Nernst equation (Skill 1)',
      },
      {
        question: 'The decrease in the slope of the current–glucose relationship at the highest concentrations in Table 2 is best explained by:',
        options: [
          'depletion of ferricyanide in the reagent layer, which limits the reoxidation of the enzyme',
          'saturation of glucose oxidase, whose rate approaches its maximum as glucose concentration rises',
          'consumption of dissolved oxygen, which the enzyme requires at high glucose concentrations',
          'reduction of ferricyanide by glucose itself, which becomes significant only at high glucose concentrations',
        ],
        correctAnswer: 1,
        explanation:
          'The current reports the rate of the enzyme reaction, and an enzyme-catalyzed rate follows Michaelis–Menten behavior: nearly proportional to substrate concentration when substrate is scarce and approaching a maximum when the enzyme is saturated. Table 2 shows the current rising by 0.40 μA for each 2 mM increment up to 4 mM but by only 0.26 μA between 8 and 10 mM, the expected flattening toward $V_{max}$. Ferricyanide is present in large excess, so it is not depleted. Oxygen is not part of the mediated pathway, and the nitrogen-purge test showed that the response does not depend on it. Direct reduction of ferricyanide by glucose is ruled out by the strip prepared without enzyme, which gave no current in 10 mM glucose.',
        optionExplanations: [
          'Ferricyanide is present in large excess in the reagent layer, so it is not depleted at the glucose concentrations tested. Its abundance is exactly what keeps the enzyme turning over.',
          'The current reports the enzyme’s rate, which follows Michaelis–Menten kinetics: proportional to glucose when scarce and approaching $V_{max}$ when the enzyme saturates. Table 2 shows the increment per 2 mM shrinking from 0.40 μA to 0.26 μA.',
          'Oxygen plays no role in the mediated pathway; ferricyanide replaces it. The nitrogen-purge test showed the response was unchanged without dissolved oxygen, ruling this out.',
          'The strip prepared without glucose oxidase gave no measurable current in 10 mM glucose, so glucose does not reduce ferricyanide directly at any tested concentration.',
        ],
        skill: '4C enzyme electrode data interpretation (Skill 4)',
      },
      {
        question: 'The results in Table 3 for the membrane-coated strip best support which conclusion about the interference from ascorbate?',
        options: [
          'Ascorbate acts as a substrate of glucose oxidase, and the membrane blocks it by excluding neutral molecules',
          'Ascorbate lowers the pH of the sample and shifts the mediator potential, and the membrane buffers the sample',
          'Ascorbate reduces glucose in the sample so that less of it reaches the enzyme, and the membrane binds ascorbate',
          'Ascorbate is oxidized directly at the electrode of the plain strip, and the membrane blocks it by excluding the ascorbate anion',
        ],
        correctAnswer: 3,
        explanation:
          'The plain strip gives 0.32 μA of extra current when ascorbate is added, consistent with the passage’s note that ascorbate is readily oxidized at the working potential, adding electrons to the measured current without any involvement of glucose. The negatively charged membrane, which excludes anions, removes essentially all of the extra current (0.78 → 0.80 μA) while leaving the glucose response intact, so the interfering species must be an anion that the membrane keeps away from the electrode; ascorbate is an anion at pH 7. If ascorbate were a substrate of glucose oxidase the membrane, which admits neutral molecules, would not block a neutral substrate, and in any case glucose oxidase is specific for glucose. A pH shift would change the glucose signal too, and a polymer membrane does not buffer a sample. Ascorbate raised rather than lowered the current, so it did not reduce the amount of glucose reaching the enzyme.',
        optionExplanations: [
          'Glucose oxidase is specific for glucose, and the membrane admits small neutral molecules, so it would not block a neutral substrate. Ascorbate also adds current without the enzyme, pointing to direct electrode oxidation.',
          'A pH shift that altered the mediator potential would change the glucose signal too, yet the membrane-coated strip gives essentially the same current with and without ascorbate. A polymer membrane does not buffer a sample.',
          'Ascorbate raised the plain strip’s current from 0.80 to 1.12 μA, so it did not reduce the amount of glucose reaching the enzyme; less glucose would lower the current, not raise it.',
          'Ascorbate added 0.32 μA to the plain strip, consistent with direct oxidation at the working potential. The anion-excluding membrane removed that extra current (0.78 → 0.80 μA) while preserving the glucose response, so the interferent is the ascorbate anion.',
        ],
        skill: '4C interference and control design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY (info) — Carbonyl chemistry in metabolism
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Carbonyl Reactivity in Metabolic Chemistry',
    passageText:
      'Much of intermediary metabolism is the chemistry of the carbonyl group. The carbon–oxygen double bond is polarized, leaving the carbon electron-poor and susceptible to attack by nucleophiles: the nucleophile bonds to carbon, the π electrons shift onto oxygen, and a tetrahedral intermediate forms. Aldehydes and ketones differ in how readily this occurs. The carbonyl carbon of a ketone bears two alkyl groups, whereas that of an aldehyde bears one alkyl group and a hydrogen, and both the electronic and the steric consequences of this difference matter to biological chemistry.\n\nSeveral classes of carbonyl reaction recur throughout metabolism. When an alcohol adds to an aldehyde or ketone, the product is a hemiacetal; the cyclic forms of glucose and fructose are intramolecular hemiacetals in which a hydroxyl group of the sugar has added to its own carbonyl carbon. When a primary amine adds, the initial tetrahedral carbinolamine loses water to form an imine (Schiff base), a carbon–nitrogen double bond. Imine formation is reversible and is fastest at mildly acidic pH, near 5: the dehydration step requires the hydroxyl group of the carbinolamine to be protonated so that water can leave, yet the amine must remain largely unprotonated to attack the carbonyl carbon in the first place. Class I aldolases and transaminases use imine linkages between a lysine side chain and a substrate or cofactor; the pyridoxal phosphate cofactor of transaminases is anchored to its enzyme through exactly such a linkage. Secondary amines cannot form a neutral imine; they instead form enamines, in which the double bond lies between the α-carbon and the former carbonyl carbon.\n\nThe hydrogens on the carbon adjacent to a carbonyl (the α-carbon) are weakly acidic, with a $pK_a$ near 20 for a simple ketone, because the conjugate base, an enolate, delocalizes the negative charge onto oxygen. Removal of an α-hydrogen and reprotonation on oxygen gives the enol tautomer; keto and enol forms interconvert through this pathway, and for a simple aldehyde or ketone the keto form predominates overwhelmingly at equilibrium. When the α-carbon lies between two carbonyl groups, as in a 1,3-dicarbonyl compound, the negative charge of the enolate is shared by both oxygens. Enzymes exploit enolate and enediol intermediates to move hydrogens and to make and break carbon–carbon bonds. In the aldol reaction, an enolate (or enamine) attacks the carbonyl carbon of a second molecule, creating a new carbon–carbon bond between the α-carbon of the nucleophile and the former carbonyl carbon of the electrophile and giving a β-hydroxy carbonyl compound. The reaction is reversible, and the reverse process, a retro-aldol cleavage, is how aldolase splits the six-carbon sugar fructose 1,6-bisphosphate into two three-carbon fragments during glycolysis.\n\nCarbonyl compounds also occupy a specific oxidation level. The oxidation state of a carbon atom can be tracked by counting its bonds to oxygen (or other electronegative atoms) and to hydrogen: an alcohol carbon has one bond to oxygen, an aldehyde or ketone carbon two, and a carboxylic acid or ester carbon three. Conversion of an alcohol to a carbonyl compound, or of an aldehyde to a carboxylic acid, is an oxidation and in cells requires an electron acceptor such as $\\text{NAD}^+$; the reverse conversions require a reducing agent such as NADH. Transformations that merely rearrange bonds within the same oxidation level, such as tautomerization or hemiacetal formation, require no external oxidant or reductant. Glyceraldehyde 3-phosphate dehydrogenase, for example, couples the oxidation of an aldehyde to the reduction of $\\text{NAD}^+$, whereas triose phosphate isomerase interconverts an aldose and a ketose through an enediol intermediate without any net change in the oxidation state of the molecule as a whole.',
    questions: [
      {
        question: 'Compared with a ketone, an aldehyde undergoes nucleophilic addition more readily because the carbonyl carbon of the aldehyde:',
        options: [
          'is less sterically hindered and is less stabilized by electron donation from alkyl groups',
          'is more sterically hindered but bears a larger partial positive charge from the hydrogen',
          'has a weaker carbon–oxygen π bond because of the attached hydrogen',
          'gives a tetrahedral intermediate that is stabilized by resonance with the hydrogen',
        ],
        correctAnswer: 0,
        explanation:
          'Alkyl groups donate electron density to the carbonyl carbon by induction and hyperconjugation, reducing its partial positive charge, and they also crowd the approach of a nucleophile. An aldehyde has only one alkyl group where a ketone has two, so its carbonyl carbon is both more electrophilic and more accessible. The aldehyde is less, not more, hindered. The π bond of an aldehyde is not weaker than that of a ketone in any way relevant to nucleophilic addition; the difference lies in the electrophilicity and accessibility of the carbon. A hydrogen atom has no lone pairs or π electrons and cannot participate in resonance with the tetrahedral intermediate.',
        optionExplanations: [
          'An aldehyde has one alkyl group where a ketone has two. Alkyl groups donate electron density (reducing the carbon’s partial positive charge) and crowd the nucleophile’s approach, so the aldehyde carbon is more electrophilic and more accessible.',
          'The aldehyde carbon is less hindered, not more, because a hydrogen is much smaller than an alkyl group. The claim about steric hindrance reverses the actual comparison.',
          'The C=O π bond of an aldehyde is not weaker than a ketone’s in any way relevant to nucleophilic addition; the difference lies in the electrophilicity and accessibility of the carbonyl carbon.',
          'A hydrogen atom has no lone pairs or π electrons, so it cannot participate in resonance with the tetrahedral intermediate. Resonance stabilization is not the source of aldehyde reactivity.',
        ],
        skill: '5D aldehyde vs ketone reactivity (Skill 1)',
      },
      {
        question: 'Fructose 1,6-bisphosphate is a ketone whose carbonyl group is at C2 and which bears hydroxyl groups at C3, C4, and C5. In the retro-aldol cleavage carried out by aldolase, the carbon–carbon bond that is broken is the bond between:',
        options: ['C1 and C2', 'C2 and C3', 'C3 and C4', 'C4 and C5'],
        correctAnswer: 2,
        explanation:
          'In an aldol addition the new carbon–carbon bond joins the α-carbon of the nucleophile to the former carbonyl carbon of the electrophile, which becomes the carbon bearing the β-hydroxyl group. A retro-aldol cleavage breaks that same bond. In fructose 1,6-bisphosphate the carbonyl is at C2, so the α-carbon is C3 and the β-carbon bearing the hydroxyl is C4; cleavage between C3 and C4 gives a three-carbon ketone fragment (C1–C3, dihydroxyacetone phosphate) and a three-carbon aldehyde fragment (C4–C6, glyceraldehyde 3-phosphate). Breaking C1–C2 or C2–C3 would sever a bond to the carbonyl carbon itself, which the aldol mechanism does not do. Breaking C4–C5 would separate the β-carbon from the γ-carbon, not from the α-carbon.',
        optionExplanations: [
          'Breaking C1–C2 would sever a bond to the carbonyl carbon itself. The aldol mechanism forms and breaks the bond between the α-carbon and the former electrophilic carbonyl carbon, never a bond directly to the nucleophile’s carbonyl.',
          'Breaking C2–C3 would separate the carbonyl carbon from its own α-carbon, which the retro-aldol mechanism does not do; the enolate forms at C3 and remains attached to C2.',
          'With the carbonyl at C2, the α-carbon is C3 and the β-hydroxyl carbon is C4; the aldol bond joins these two. Retro-aldol cleavage of C3–C4 gives dihydroxyacetone phosphate (C1–C3) and glyceraldehyde 3-phosphate (C4–C6).',
          'Breaking C4–C5 would separate the β-carbon from the γ-carbon rather than from the α-carbon, and it would not yield two three-carbon fragments.',
        ],
        skill: '5D aldol and retro-aldol reactions (Skill 2)',
      },
      {
        question: 'A researcher tries to form a Schiff base between the lysine side chains of a peptide and an aldehyde reagent at pH 2. The reaction is very slow chiefly because, at this pH:',
        options: [
          'the aldehyde is protonated on oxygen and can no longer act as an electrophile',
          'the lysine amino group is protonated and is therefore not nucleophilic',
          'the carbinolamine intermediate cannot be protonated and so cannot lose water',
          'the aldehyde exists mainly as its enol tautomer, which lacks a carbonyl carbon',
        ],
        correctAnswer: 1,
        explanation:
          'The side-chain amino group of lysine has a $pK_a$ near 10.5, so at pH 2 essentially every molecule is the ammonium ion, which has no lone pair and cannot attack the carbonyl carbon; without the initial addition, no carbinolamine and no imine can form. Protonation of the carbonyl oxygen makes the carbon a stronger, not a weaker, electrophile. At pH 2 the carbinolamine hydroxyl would be protonated readily, so the dehydration step is not the obstacle; the problem lies earlier. The keto form of a simple aldehyde predominates overwhelmingly at any pH, so the enol tautomer is not what limits the reaction.',
        optionExplanations: [
          'Protonating the carbonyl oxygen makes the carbonyl carbon a stronger electrophile, not a weaker one, so this cannot be what slows the reaction at low pH.',
          'Lysine’s side-chain amine has a p$K_a$ near 10.5, so at pH 2 it is essentially fully protonated as the ammonium ion, which has no lone pair and cannot attack the carbonyl carbon. No carbinolamine, hence no imine, can form.',
          'At pH 2 the carbinolamine hydroxyl would be protonated very readily, so dehydration is not the obstacle. The problem lies earlier, at the initial nucleophilic addition.',
          'The keto form of a simple aldehyde predominates overwhelmingly at any pH, so the enol tautomer is a negligible fraction and is not what limits imine formation.',
        ],
        skill: '5D imine formation and pH (Skill 2)',
      },
      {
        question: 'Which of the following compounds has the most acidic carbon-bound hydrogen?',
        options: ['Propanal', 'Propane', 'Propanoic acid', '2,4-Pentanedione'],
        correctAnswer: 3,
        explanation:
          'In 2,4-pentanedione the central carbon (C3) lies between two carbonyl groups, so removing one of its hydrogens gives an enolate whose negative charge is delocalized onto both oxygens; this extra stabilization makes the C3–H bond far more acidic ($pK_a$ near 9) than the α-hydrogen of a simple ketone or aldehyde. Propanal has α-hydrogens whose enolate is stabilized by a single carbonyl ($pK_a$ near 17). The α-hydrogens of propanoic acid are less acidic still, because the carboxyl group is a weaker electron-withdrawing group toward its α-carbon than a ketone carbonyl and, once the O–H is ionized, the carboxylate resists further loss of charge; its O–H hydrogen is acidic, but the question asks about carbon-bound hydrogens. Propane has no adjacent electron-withdrawing group and its C–H bonds are essentially non-acidic ($pK_a$ near 50).',
        optionExplanations: [
          'Propanal has α-hydrogens whose enolate is stabilized by a single carbonyl (p$K_a$ near 17). That is more acidic than an alkane but far less than a hydrogen flanked by two carbonyls.',
          'Propane has no adjacent electron-withdrawing group, and its C–H bonds are essentially non-acidic (p$K_a$ near 50). It is the least acidic compound listed.',
          'Propanoic acid’s acidic hydrogen is on oxygen, not carbon. Its α-C–H hydrogens are less acidic than propanal’s, because a carboxyl group withdraws less strongly toward its α-carbon and the carboxylate resists further loss of charge.',
          'In 2,4-pentanedione the C3 hydrogens sit between two carbonyls; the resulting enolate delocalizes negative charge onto both oxygens, lowering the p$K_a$ to about 9, far more acidic than any other carbon-bound hydrogen listed.',
        ],
        skill: '5D acidity of α-hydrogens (Skill 1)',
      },
      {
        question: 'Lactate dehydrogenase converts pyruvate, $\\text{CH}_3\\text{COCOO}^-$, to lactate, $\\text{CH}_3\\text{CH(OH)COO}^-$. Which statement correctly describes this transformation?',
        options: [
          'It is an oxidation of C2 that requires $\\text{NAD}^+$, and it destroys a stereocenter',
          'It is a tautomerization of C2 that requires no cofactor, and it creates a stereocenter',
          'It is a reduction of C2 that requires NADH, and it creates a stereocenter',
          'It is a reduction of C2 that requires NADH, and it leaves the stereochemistry unchanged',
        ],
        correctAnswer: 2,
        explanation:
          'At C2, pyruvate has a ketone carbon with two bonds to oxygen, whereas lactate has an alcohol carbon with one bond to oxygen and a new bond to hydrogen: the oxidation level of C2 drops, so the reaction is a reduction and requires a reducing agent, NADH. In lactate, C2 is bonded to four different groups (H, OH, $\\text{CH}_3$, and $\\text{COO}^-$), so a stereocenter is created where none existed in the planar ketone; the enzyme delivers hydride to one face only and produces a single enantiomer. An oxidation would require $\\text{NAD}^+$ and would run the reaction in the opposite direction. A tautomerization interconverts keto and enol forms without changing the oxidation level, but pyruvate and lactate differ in oxidation level. Because pyruvate has no stereocenter, the stereochemistry cannot be left unchanged; it is newly established.',
        optionExplanations: [
          'Pyruvate’s C2 goes from two bonds to oxygen (ketone) to one bond to oxygen plus a new C–H, which is a reduction, not an oxidation. $\\text{NAD}^+$ would drive the reverse direction, and no stereocenter is destroyed because pyruvate has none.',
          'A tautomerization interconverts keto and enol forms without changing the oxidation level, but pyruvate (ketone carbon) and lactate (alcohol carbon) differ in oxidation level, so a cofactor is required.',
          'C2 drops from two bonds to oxygen to one, gaining a bond to hydrogen: a reduction requiring NADH. In lactate C2 bears H, OH, $\\text{CH}_3$, and $\\text{COO}^-$, a newly created stereocenter absent in planar pyruvate.',
          'The reduction and NADH requirement are right, but pyruvate has no stereocenter, so stereochemistry cannot be left unchanged; the enzyme creates a new stereocenter at C2 by delivering hydride to one face.',
        ],
        skill: '5D oxidation levels and stereocenters (Skill 2)',
      },
    ],
  },
]

export const FL1_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl1-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'The activity of a sample of a radioactive nuclide falls from 6400 counts per minute to 100 counts per minute over 60 minutes. What is the half-life of the nuclide?',
    options: ['6.0 min', '10 min', '15 min', '20 min'],
    correctAnswer: 1,
    explanation:
      'The activity falls by a factor of 6400/100 = 64 = $2^6$, so six half-lives have elapsed in 60 minutes and the half-life is 10 min. A half-life of 6.0 min confuses the number of half-lives with their length. A half-life of 15 min would correspond to only four half-lives (a factor of 16), and 20 min to three (a factor of 8), neither of which reduces the activity by a factor of 64.',
    optionExplanations: [
      'A half-life of 6.0 min confuses the number of half-lives (six) with their duration. Six half-lives in 60 minutes means each lasts 10 minutes.',
      'Activity falls by 6400/100 = 64 = $2^6$, so six half-lives elapsed in 60 minutes, giving a half-life of 10 min.',
      'A 15-minute half-life gives only four half-lives in 60 minutes, reducing activity by a factor of 16 (to 400 counts per minute), not by the observed factor of 64.',
      'A 20-minute half-life gives three half-lives in 60 minutes, a factor of 8 (to 800 counts per minute), far short of the observed 64-fold decrease.',
    ],
    skill: '4E half-life (Skill 2)',
  },
  {
    id: 'fl1-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A proton and an electron enter the same uniform magnetic field with identical velocities directed perpendicular to the field. Compared with the proton, the electron follows a circular path that:',
    options: [
      'has the same radius but curves in the opposite direction',
      'has a somewhat larger radius and curves in the opposite direction',
      'has a much smaller radius and curves in the same direction',
      'has a much smaller radius and curves in the opposite direction',
    ],
    correctAnswer: 3,
    explanation:
      'The radius of the circular path is $r = mv/(|q|B)$. The two particles have charges of equal magnitude and the same speed in the same field, so the radius is proportional to mass; the electron, about 1/1840 the mass of the proton, has a far smaller radius. The magnetic force $q\\vec{v} \\times \\vec{B}$ reverses direction when the sign of the charge reverses, so the electron curves the opposite way. Equal radii would require equal masses. A larger radius would require the electron to be more massive than the proton, and curving in the same direction would require charges of the same sign.',
    optionExplanations: [
      'Equal radii would require equal masses, since $r = mv/(|q|B)$ with equal charge magnitude, speed, and field. The electron is about 1/1840 the proton’s mass, so its radius is far smaller.',
      'A larger radius would require the electron to be more massive than the proton. The opposite curvature is right, but the radius comparison is reversed.',
      'Curving in the same direction would require charges of the same sign. The magnetic force $q\\vec{v} \\times \\vec{B}$ flips direction when the sign of $q$ flips, so the electron curves oppositely.',
      'Radius $r = mv/(|q|B)$ is proportional to mass for equal charge, speed, and field, so the much lighter electron has a much smaller radius. Its negative charge reverses the force direction, so it curves the opposite way.',
    ],
    skill: '4C magnetic force on moving charges (Skill 2)',
  },
  {
    id: 'fl1-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Sulfur trioxide is produced by the exothermic gas-phase reaction 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g). Which change increases the equilibrium yield of SO₃?',
    options: [
      'Raising the temperature at constant volume',
      'Adding a solid catalyst at constant temperature',
      'Decreasing the volume of the container at constant temperature',
      'Adding argon gas to the container at constant volume',
    ],
    correctAnswer: 2,
    explanation:
      'Three moles of gas are converted to two, so decreasing the volume raises the total pressure and, by Le Chatelier’s principle, shifts the equilibrium toward the side with fewer moles of gas, increasing the amount of SO₃. Raising the temperature of an exothermic reaction shifts the equilibrium toward the reactants, lowering the yield. A catalyst speeds the approach to equilibrium equally in both directions and does not change the equilibrium composition. Adding an inert gas at constant volume raises the total pressure but leaves every partial pressure unchanged, so the reaction quotient is unaffected and no shift occurs.',
    optionExplanations: [
      'The reaction is exothermic, so raising the temperature shifts the equilibrium toward the reactants (heat is treated as a product), lowering the yield of SO₃.',
      'A catalyst speeds the approach to equilibrium equally in both directions and lowers the activation barrier, but it does not change the equilibrium composition or yield.',
      'Three moles of gas become two. Decreasing the volume raises total pressure, and Le Chatelier’s principle shifts the equilibrium toward the side with fewer moles of gas, increasing SO₃.',
      'Adding an inert gas at constant volume raises total pressure but leaves every reactant and product partial pressure unchanged, so the reaction quotient is unaffected and no shift occurs.',
    ],
    skill: '5E Le Chatelier’s principle (Skill 1)',
  },
  {
    id: 'fl1-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Which of the following species has a trigonal pyramidal molecular geometry?',
    options: ['NH₃', 'BF₃', 'SO₃', 'CO₃²⁻'],
    correctAnswer: 0,
    explanation:
      'Nitrogen in NH₃ has four electron domains (three bonding pairs and one lone pair), giving a tetrahedral electron-domain geometry; because one domain is a lone pair, the molecular shape is trigonal pyramidal with H–N–H angles slightly less than 109.5°. BF₃ has three bonding domains and no lone pair on boron, so it is trigonal planar. SO₃ has three bonding domains around sulfur with no lone pair and is likewise trigonal planar. The carbonate ion has three bonding domains around carbon with no lone pair and is trigonal planar as well, with equivalent resonance structures.',
    optionExplanations: [
      'Nitrogen in NH₃ has three bonding pairs and one lone pair, four electron domains in a tetrahedral arrangement. With one domain a lone pair, the molecular shape is trigonal pyramidal.',
      'Boron in BF₃ has three bonding domains and no lone pair, so the molecule is trigonal planar with 120° bond angles.',
      'Sulfur in SO₃ has three bonding domains and no lone pair, giving a trigonal planar geometry; the resonance structures are equivalent.',
      'Carbon in the carbonate ion has three bonding domains and no lone pair, so CO₃²⁻ is trigonal planar with three equivalent resonance structures.',
    ],
    skill: '5B VSEPR geometry (Skill 1)',
  },
  {
    id: 'fl1-cp-b-d05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'A compound with molecular formula C₃H₆O shows a strong infrared absorption at 1715 cm⁻¹ and no absorption above 3000 cm⁻¹, and its ¹H NMR spectrum consists of a single singlet. The compound is:',
    options: ['propanal (propionaldehyde)', 'propanone (acetone)', 'prop-2-en-1-ol (allyl alcohol)', '2-methyloxirane (propylene oxide)'],
    correctAnswer: 1,
    explanation:
      'A strong band near 1715 cm⁻¹ is a C=O stretch, and a single singlet means all six hydrogens are equivalent and have no neighboring hydrogens to couple with: acetone, with two identical methyl groups flanking a carbonyl, fits both observations. Propanal also contains a carbonyl but would show three signals, including an aldehyde proton near 9.8 ppm split by the adjacent CH₂. Allyl alcohol has no carbonyl and would show a broad O–H stretch near 3300 cm⁻¹ and vinyl hydrogens above 3000 cm⁻¹. Propylene oxide has no carbonyl (an ether oxygen in a ring) and would give several coupled signals.',
    optionExplanations: [
      'Propanal has a carbonyl (1715 cm⁻¹ fits), but its ¹H NMR would show three signals, including an aldehyde proton near 9.8 ppm split by the adjacent CH₂; a single singlet is impossible.',
      'The 1715 cm⁻¹ band is a C=O stretch, and a single singlet means all six hydrogens are equivalent with no coupling partners: acetone’s two identical methyl groups flanking a carbonyl fit both observations.',
      'Allyl alcohol has no carbonyl; it would show a broad O–H stretch near 3300 cm⁻¹ and vinyl C–H stretches above 3000 cm⁻¹, both of which the spectrum lacks.',
      'Propylene oxide has an ether oxygen in a ring, not a carbonyl, so it would not absorb at 1715 cm⁻¹, and its ring and methyl hydrogens would give several coupled signals.',
    ],
    skill: '5D IR and NMR structure identification (Skill 2)',
  },
  {
    id: 'fl1-cp-b-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'When a bacterium is moved from 37 °C to 20 °C, it remodels its plasma membrane so that fluidity is maintained at the lower temperature. Which change in membrane composition accomplishes this?',
    options: [
      'A larger proportion of saturated fatty acyl chains in the phospholipids',
      'A larger proportion of trans-unsaturated fatty acyl chains in the phospholipids',
      'A larger proportion of longer fatty acyl chains in the phospholipids',
      'A larger proportion of cis-unsaturated fatty acyl chains in the phospholipids',
    ],
    correctAnswer: 3,
    explanation:
      'A cis double bond introduces a kink in the acyl chain that prevents neighboring chains from packing closely, lowering the temperature at which the bilayer transitions from a fluid to a gel state; increasing the proportion of cis-unsaturated chains keeps the membrane fluid in the cold. Saturated chains pack tightly and raise the transition temperature, stiffening the membrane. Trans double bonds keep the chain nearly linear, so trans-unsaturated chains pack almost as well as saturated ones and provide little fluidity. Longer chains have more van der Waals contact and also pack more tightly, reducing fluidity.',
    optionExplanations: [
      'Saturated chains are straight and pack tightly, raising the gel-to-fluid transition temperature. More saturated chains would stiffen the membrane in the cold, the opposite of what is needed.',
      'A trans double bond keeps the chain nearly linear, so trans-unsaturated chains pack almost as well as saturated ones and provide little added fluidity.',
      'Longer chains have more van der Waals contact area and pack more tightly, which reduces fluidity and raises the transition temperature.',
      'A cis double bond kinks the acyl chain and prevents close packing, lowering the gel-to-fluid transition temperature. More cis-unsaturated chains keep the membrane fluid at 20 °C.',
    ],
    skill: '5D membrane lipid structure and fluidity (Skill 1)',
  },
  {
    id: 'fl1-cp-b-d07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'What is the osmotic pressure of a 0.15 M aqueous NaCl solution at 310 K, assuming complete dissociation? (R = 0.0821 L·atm/mol·K)',
    options: ['7.6 atm', '3.8 atm', '0.76 atm', '15 atm'],
    correctAnswer: 0,
    explanation:
      'Osmotic pressure is a colligative property that depends on the total concentration of dissolved particles: $\\Pi = iMRT$, and NaCl dissociates into two ions, so $i = 2$. $\\Pi = 2(0.15\\ \\text{mol/L})(0.0821\\ \\text{L·atm/mol·K})(310\\ \\text{K}) \\approx 7.6$ atm, close to the osmotic pressure of blood plasma, which is why 0.15 M NaCl is used as an isotonic saline. The value 3.8 atm omits the van ’t Hoff factor. The value 15 atm doubles the factor to 4. The value 0.76 atm slips one decimal place in the concentration.',
    optionExplanations: [
      'NaCl dissociates into two ions, so $i = 2$ and $\\Pi = iMRT = 2(0.15)(0.0821)(310) \\approx 7.6$ atm, close to the osmotic pressure of plasma, which is why 0.15 M NaCl is isotonic saline.',
      'A value of 3.8 atm omits the van ’t Hoff factor, treating NaCl as a single undissociated particle. Osmotic pressure depends on the total number of dissolved particles.',
      'A value of 0.76 atm slips one decimal place in the concentration (using 0.015 M instead of 0.15 M).',
      'A value of 15 atm doubles the van ’t Hoff factor to 4, as if NaCl produced four ions per formula unit rather than two.',
    ],
    skill: '5A osmotic pressure (Skill 2)',
  },
]
