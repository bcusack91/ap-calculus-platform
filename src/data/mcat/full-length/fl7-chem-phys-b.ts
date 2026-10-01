/**
 * MCAT Full-Length Form 7 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-10-01 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL7_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — Indirect calorimetry and the respiratory quotient (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Estimating Energy Release from Respiratory Gas Exchange',
    passageText:
      'The rate at which a person releases energy can be measured directly, by enclosing the person in an insulated chamber and recording the heat given off, but the equipment is costly and slow to respond. Indirect calorimetry instead infers energy release from the gases exchanged at the mouth. The method rests on the fact that the complete oxidation of a given fuel consumes $\\text{O}_2$, forms $\\text{CO}_2$, and releases heat in fixed proportions. Because enthalpy is a state function, those proportions are the same whether the fuel is burned in a single step or oxidized through the many steps of metabolism, as long as the reactants and products are the same.\n\nThe two main classes of fuel can be represented by glucose and by palmitic acid, a typical saturated fatty acid:\n\nReaction 1: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O, with $\\Delta H^\\circ$ = −2800 kJ per mole of glucose\n\nReaction 2: C₁₆H₃₂O₂ + 23 O₂ → 16 CO₂ + 16 H₂O, with $\\Delta H^\\circ$ = −10,000 kJ per mole of palmitic acid\n\nThe respiratory quotient (RQ) of a fuel is the number of moles of $\\text{CO}_2$ formed divided by the number of moles of $\\text{O}_2$ consumed when the fuel is completely oxidized. When a mixture of fuels is being oxidized, the ratio for the whole body lies between the RQ values of the individual fuels and reveals their proportions. Protein is a third fuel, with an RQ of about 0.8, but because it ordinarily supplies a minor share of the energy, the investigators in the study described below treated the body as oxidizing only carbohydrate and fat.\n\nA healthy adult volunteer breathed through a mouthpiece connected to a flow meter and a gas analyzer. From the volume of air breathed each minute and the difference in composition between inspired and expired air, the instrument calculated the rate of $\\text{O}_2$ uptake, $\\dot{V}_{\\text{O}_2}$, and the rate of $\\text{CO}_2$ output, $\\dot{V}_{\\text{CO}_2}$. Measurements were made under four conditions: lying at rest after an overnight fast; lying at rest at the end of a 60-hour fast; cycling at a moderate work rate for 20 min; and cycling for 4 min at a heavy work rate that the volunteer could not have sustained much longer. The values in Table 1 are averages over the final minute of each condition. A fingertip blood sample taken at the end of each condition was analyzed for lactate.\n\nThe ratio of $\\dot{V}_{\\text{CO}_2}$ to $\\dot{V}_{\\text{O}_2}$ measured at the mouth equals the RQ of the fuel mixture only if the $\\text{CO}_2$ leaving the lungs is being formed by oxidation at the same rate. The body holds a large reserve of carbon dioxide, most of it as bicarbonate ion in the blood and tissue fluids, in equilibrium with the dissolved gas:\n\nCO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻\n\nWhenever this reserve is growing or shrinking, the output of $\\text{CO}_2$ at the mouth departs from its rate of production in the tissues, and the measured ratio no longer describes the fuels alone. Very little $\\text{O}_2$ is stored in the body, so $\\dot{V}_{\\text{O}_2}$ follows the rate of oxidation closely, and it is regarded as the more reliable of the two measurements for estimating energy release.',
    figure:
      '**Table 1.** Gas exchange and blood lactate of the volunteer under four conditions\n\n| Condition | $\\dot{V}_{\\text{O}_2}$ (mmol/min) | $\\dot{V}_{\\text{CO}_2}$ (mmol/min) | Blood lactate (mM) |\n|---|---|---|---|\n| Rest, overnight fast | 11.0 | 8.8 | 0.9 |\n| Rest, 60-hour fast | 11.5 | 8.0 | 0.8 |\n| Moderate cycling | 60 | 54 | 1.6 |\n| Heavy cycling | 130 | 143 | 9.5 |',
    questions: [
      {
        question: 'Ethanol, C₂H₅OH, is completely oxidized in the body to CO₂ and H₂O. Based on the definition given in the passage, the RQ of ethanol is closest to:',
        options: ['0.57', '0.67', '1.00', '1.50'],
        correctAnswer: 1,
        explanation:
          'The balanced equation is C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O: two carbons give 2 CO₂, six hydrogens give 3 H₂O, and the seven oxygen atoms of the products come from the one oxygen of ethanol plus three molecules of O₂. The RQ is therefore 2/3 = 0.67. The value 0.57 results from overlooking the oxygen atom already present in ethanol and using 3.5 O₂. The value 1.00 is the RQ of glucose, and 1.50 is the ratio inverted.',
        skill: '5E respiratory quotient from a balanced combustion equation (Skill 2)',
      },
      {
        question: 'Based on Reactions 1 and 2, for each mole of $\\text{O}_2$ consumed, the oxidation of palmitic acid releases:',
        options: [
          'about 7% less energy than the oxidation of glucose',
          'about 7% more energy than the oxidation of glucose',
          'about 3.6 times as much energy as the oxidation of glucose',
          'about one-quarter as much energy as the oxidation of glucose',
        ],
        correctAnswer: 0,
        explanation:
          'Reaction 1 releases 2800 kJ for 6 mol of O₂, or about 467 kJ per mole of O₂; Reaction 2 releases 10,000 kJ for 23 mol of O₂, or about 435 kJ per mole of O₂. The ratio 435/467 is about 0.93, so palmitic acid releases roughly 7% less energy per mole of O₂. Reversing the two values gives the answer of 7% more. The factor of 3.6 compares the fuels per mole of fuel rather than per mole of O₂, and one-quarter is the ratio of the O₂ coefficients (6/23).',
        skill: '5E enthalpy of combustion per mole of O₂ (Skill 2)',
      },
      {
        question: 'Suppose that palmitic acid was the only fuel being oxidized at the end of the 60-hour fast. Based on Table 1 and Reaction 2, the rate of energy release in that condition was closest to:',
        options: ['0.50 kJ/min', '3.5 kJ/min', '5.0 kJ/min', '115 kJ/min'],
        correctAnswer: 2,
        explanation:
          'Each mole of palmitic acid requires 23 mol of O₂, so an uptake of 11.5 mmol of O₂ per minute corresponds to 11.5/23 = 0.50 mmol of palmitic acid per minute, which releases 0.50 × 10⁻³ mol × 10,000 kJ/mol = 5.0 kJ/min. The value 0.50 is the number of millimoles of fuel oxidized each minute, not an energy. The value 3.5 kJ/min divides the CO₂ output, 8.0 mmol/min, by 23. The value 115 kJ/min multiplies the O₂ uptake by the molar enthalpy without allowing for the 23 O₂ consumed per molecule of fuel.',
        skill: '5E rate of energy release from gas-exchange data (Skill 4)',
      },
      {
        question: 'In the heavy-cycling condition, the ratio of $\\dot{V}_{\\text{CO}_2}$ to $\\dot{V}_{\\text{O}_2}$ exceeds the RQ of either fuel. Which process best accounts for this result?',
        options: [
          'Palmitic acid becomes the main fuel and yields more CO₂ per O₂ than glucose',
          'Glucose is converted to lactic acid in a step that uses O₂ but forms no CO₂',
          'Dissolved CO₂ is converted to HCO₃⁻, which is then retained in the blood',
          'Lactic acid donates H⁺ to HCO₃⁻, and the H₂CO₃ that forms breaks down to CO₂',
        ],
        correctAnswer: 3,
        explanation:
          'Blood lactate rose to 9.5 mM during heavy cycling, which shows that lactic acid was being produced rapidly. Its H⁺ shifts the equilibrium CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ to the left, so CO₂ drawn from the bicarbonate reserve is exhaled in addition to the CO₂ formed by oxidation, and the ratio rises above 1.00. Palmitic acid yields less CO₂ per O₂ than glucose (16/23), which would lower the ratio. The conversion of glucose to lactic acid neither consumes O₂ nor forms CO₂. Retaining CO₂ as bicarbonate would reduce the CO₂ output and lower the ratio.',
        skill: '5A bicarbonate buffering of a metabolic acid (Skill 1)',
      },
      {
        question: 'The investigators later wished to estimate how much protein the volunteer oxidized during the 60-hour fast. Which additional measurement would make this possible?',
        options: [
          'The rate of nitrogen loss in the urine',
          'The rate of N₂ uptake from the inspired air',
          'The rate of water vapor loss in the expired air',
          'The rate of glucose excretion in the urine',
        ],
        correctAnswer: 0,
        explanation:
          'Carbohydrate and fat contain no nitrogen, whereas the nitrogen of oxidized amino acids is not released as a gas but is excreted, mainly as urea, so urinary nitrogen measures the protein oxidized. Gas exchange alone supplies two numbers and cannot resolve three fuels, especially since the RQ of protein lies between those of the other two. N₂ is neither consumed nor produced in metabolism. Water is formed by every fuel, and the loss of water vapor depends mostly on breathing. Glucose in the urine reports on how the kidney handles glucose, not on protein oxidation.',
        skill: '5E resolving a third fuel in indirect calorimetry (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. BIOCHEMISTRY — Chymotrypsin burst kinetics with p-nitrophenyl acetate (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-b-07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'A Burst of Product in the Chymotrypsin Reaction',
    passageText:
      'Chymotrypsin is a digestive protease that hydrolyzes peptide bonds on the carboxyl side of large hydrophobic residues. Its active site contains three side chains, known as the catalytic triad, held in a fixed arrangement: the hydroxyl group of Ser195 is hydrogen-bonded to one ring nitrogen of His57, and the other ring nitrogen of His57 is hydrogen-bonded to the carboxylate of Asp102. Nearby, the backbone N–H groups of Gly193 and Ser195 point toward the position occupied by the carbonyl oxygen of a bound substrate, forming a pocket called the oxyanion hole.\n\nThe enzyme also hydrolyzes simple esters, and one of these, p-nitrophenyl acetate (pNPA), has been used to dissect the reaction into steps. pNPA is colorless, but one of its hydrolysis products, the p-nitrophenolate ion, is yellow and absorbs strongly at 400 nm; the other product is acetate. The reaction is thought to proceed through a covalent intermediate:\n\nStep 1 (acylation): E + pNPA → acetyl–E + p-nitrophenolate\n\nStep 2 (deacylation): acetyl–E + H₂O → E + acetate\n\nIn Step 1 the oxygen of Ser195 attacks the carbonyl carbon of the ester, and the acetyl group is transferred to the enzyme as p-nitrophenolate departs. In Step 2 a water molecule takes the place of the departed product and hydrolyzes the ester linkage of the acetyl–enzyme, restoring the free enzyme. The two steps need not have similar rate constants.\n\nInvestigators prepared a stock solution of chymotrypsin whose concentration was determined from its absorbance at 280 nm, a measurement that reports total protein whether or not the protein is able to catalyze the reaction. At time zero, enzyme was mixed by hand with pNPA in buffer at pH 7.8 and 25 °C to give 20 μM enzyme and 1.0 mM pNPA, a concentration far above the $K_m$ of the enzyme for this substrate. The absorbance at 400 nm was read every 10 s, beginning 10 s after mixing, and was converted to the concentration of p-nitrophenolate. The experiment was repeated with 10 μM enzyme and the same concentration of pNPA (Figure 1). In a blank that contained pNPA but no enzyme, less than 0.2 μM p-nitrophenolate appeared in 60 s. When the enzyme had first been treated with diisopropyl fluorophosphate, a reagent that attaches a bulky phosphoryl group to the oxygen of Ser195 and to none of the other 27 serine residues of the protein, the trace could not be distinguished from the blank.\n\nIn both traces of Figure 1, product had already accumulated by the first reading, after which its concentration rose slowly and at a constant rate. Rapid-mixing instruments, which record absorbance within a few milliseconds of mixing, later showed that the early phase is a smooth rise that is complete in about 2 s. The investigators extended the linear part of each trace back to time zero in order to characterize the enzyme preparation, noting that commercial samples of chymotrypsin commonly contain some molecules that have been inactivated by self-digestion or by unfolding during storage.',
    chart: {
      title: 'Figure 1. p-Nitrophenolate formed after mixing chymotrypsin with 1.0 mM pNPA (pH 7.8, 25 °C)',
      kind: 'line',
      xLabel: 'Time after mixing',
      xUnit: 's',
      yLabel: 'p-Nitrophenolate',
      yUnit: 'μM',
      xValues: [10, 20, 30, 40, 50, 60],
      yValues: [17, 18, 19, 20, 21, 22],
      seriesLabel: '20 μM enzyme',
      comparisonSeries: [{ label: '10 μM enzyme', yValues: [8.5, 9, 9.5, 10, 10.5, 11] }],
    },
    questions: [
      {
        question: 'Based on Figure 1 and the reaction scheme, the percentage of the enzyme molecules in the 20 μM sample that were catalytically active is closest to:',
        options: ['20%', '80%', '85%', '100%'],
        correctAnswer: 1,
        explanation:
          'Between 10 s and 60 s the 20 μM trace rises by 1 μM every 10 s, so extending this line back to time zero gives an intercept of 17 − 1 = 16 μM. Each active enzyme molecule releases one p-nitrophenolate ion in Step 1 as it becomes acetylated, so the intercept counts the active sites: 16 μM out of 20 μM, or 80%. The value 85% uses the first reading without removing the product formed by 10 s of steady turnover. The value 100% assumes that all of the protein measured at 280 nm is active, and 20% is the inactive share.',
        skill: '5E burst amplitude as a count of active sites (Skill 4)',
      },
      {
        question: 'During the interval from 10 s to 60 s in Figure 1, most of the active enzyme molecules are present as:',
        options: [
          'free enzyme that has not yet bound a molecule of pNPA',
          'a noncovalent complex of the enzyme with intact pNPA',
          'the acetyl–enzyme that is produced in Step 1',
          'enzyme that carries a phosphoryl group on Ser195',
        ],
        correctAnswer: 2,
        explanation:
          'A rapid release of about one product molecule per active site, followed by slow, steady formation, means that Step 1 is fast and Step 2 limits turnover. The enzyme therefore accumulates in the form that precedes the slow step, the acetyl–enzyme, and each molecule that returns to the free form is quickly acetylated again by the saturating pNPA. Free enzyme and the noncovalent complex with pNPA are both consumed rapidly by the fast first step. Phosphorylated Ser195 arises only in the separate experiment with diisopropyl fluorophosphate.',
        skill: '5E rate-limiting step and the accumulating enzyme form (Skill 2)',
      },
      {
        question: 'A critic suggests that the product present at the first reading comes from a small amount of a highly reactive ester that contaminates the pNPA and that the enzyme destroys within seconds, rather than from Step 1. Which observation argues most directly against this suggestion?',
        options: [
          'The intercept of the 10 μM trace is about half that of the 20 μM trace',
          'The final slope of the 10 μM trace is about half that of the 20 μM trace',
          'The blank that lacked enzyme formed less than 0.2 μM product in 60 s',
          'Both of the traces rise at a constant rate between 10 s and 60 s',
        ],
        correctAnswer: 0,
        explanation:
          'Both mixtures contained the same amount of pNPA and therefore the same amount of any contaminant, so on the critic’s view the early product should be the same size in both traces. Instead, the intercept falls from about 16 μM to about 8 μM when the enzyme is halved, as expected if each enzyme molecule releases one product molecule in Step 1. A slope proportional to enzyme is expected of any catalyst and fits either view. The blank shows only that the early product requires enzyme, which the critic’s proposal also predicts. A constant rate after 10 s says nothing about the origin of the product formed before 10 s.',
        skill: '5E evaluating an alternative explanation for a burst (Skill 3)',
      },
      {
        question: 'In Step 1, the hydrogen bond between Ser195 and His57 contributes to catalysis mainly because His57:',
        options: [
          'donates a proton to Ser195, making the serine oxygen a better leaving group',
          'forms a covalent bond to the acetyl group before Ser195 is able to attack',
          'neutralizes the negative charge that develops on the carbonyl oxygen atom',
          'accepts the proton of Ser195, making the serine oxygen a stronger nucleophile',
        ],
        correctAnswer: 3,
        explanation:
          'An alcohol is a weak nucleophile, but as the Ser195 oxygen attacks the carbonyl carbon, the imidazole ring of His57 acts as a base and takes the hydroxyl proton, so the attacking oxygen has alkoxide character; Asp102 holds the ring in position and stabilizes its protonated form. Donating a proton to Ser195 would make its oxygen less nucleophilic, and Ser195 is not a leaving group in Step 1. The acetyl group is transferred to serine, as the labeling of Ser195 by diisopropyl fluorophosphate indicates, not to histidine. The negative charge that develops on the carbonyl oxygen is stabilized by the backbone N–H groups of the oxyanion hole.',
        skill: '5E general-base catalysis in the catalytic triad (Skill 1)',
      },
      {
        question: 'For amide substrates of chymotrypsin, Step 1 is much slower than Step 2. If the experiment were repeated with an amide substrate that releases a colored amine in Step 1, the trace would be expected to:',
        options: [
          'jump to the concentration of active enzyme and then stay level',
          'rise from the origin at a constant rate, with no early jump',
          'jump to twice the concentration of active enzyme and then rise',
          'curve upward as the acyl–enzyme accumulates during the 60 s',
        ],
        correctAnswer: 1,
        explanation:
          'An early jump appears only when the intermediate forms faster than it breaks down, so that the enzyme accumulates as acyl–enzyme after releasing its first product. If Step 1 is the slow step, each acyl–enzyme is hydrolyzed almost as soon as it forms, the first product molecule appears at the same rate as later ones, and the trace is a straight line through the origin whose slope is set by Step 1. A jump followed by a level line would mean that the enzyme reacts once and never turns over. A jump of twice the enzyme concentration has no basis in a mechanism that releases one amine per cycle. An upward curve would require the rate to increase with time, but little acyl–enzyme accumulates and the steady state is reached at once.',
        skill: '5E predicting kinetics when acylation is rate-limiting (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PHYSICS — Electric current through the body: skin and internal resistance (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-b-08',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Skin Resistance and the Current Through the Body',
    passageText:
      'The injury caused by an electric shock depends on the current that passes through the body and on the route the current takes, rather than directly on the voltage of the source. For a given source, the current is fixed by the resistance of the path. When a person touches conductors with both hands, the path consists of three parts in series: the skin under one contact, the internal tissues of the arms and chest, and the skin under the other contact. Internal tissues are bathed in electrolyte solution and conduct fairly well. The outermost layer of the skin, a thin sheet of dry, dead cells, conducts poorly. Under a contact, this layer behaves approximately as a slab of resistivity $\\rho$ and thickness $L$ covering an area $A$, so that its resistance is $R = \\rho L / A$.\n\nStudents measured the hand-to-hand resistance of a volunteer. A regulated 1.0-V source was connected in series with a sensitive ammeter and two flat metal electrodes, one pressed against each palm, and the resistance of the whole path was calculated from the steady current. Electrodes with contact areas of 10 $\\text{cm}^2$ and 20 $\\text{cm}^2$ were used. In the dry trials, the palms had been washed, dried, and left exposed to room air for 10 min. In the wet trials, the palms had been soaked for 5 min in 0.9% NaCl solution, and the electrodes were applied while the skin was still wet. The electrodes were centered on the same marked positions in every trial. The results are given in Table 1.\n\nTable 2 lists approximate thresholds for the effects of a current that passes from one hand to the other for about 1 s. Above the let-go threshold, the muscles that close the hand contract so strongly that a person gripping a conductor is unable to release it, which prolongs the exposure. Ventricular fibrillation is an uncoordinated twitching of the heart muscle that stops the pumping of blood and is fatal unless it is reversed within minutes. These thresholds were established for the alternating current of household wiring; for the purposes of this passage, such a current can be analyzed with the relationships that apply to a steady current.\n\nElectrical energy is also converted to thermal energy in each part of the path, at a rate $P = I^2R$. With currents far above those in Table 2, this heating produces burns, which are often most severe at the places where the current enters and leaves the body. The students used their results to estimate the currents that would flow if the volunteer were to touch conductors at the 120-V potential difference of a household supply, first with dry hands and then with wet hands, and they compared each estimate with the thresholds in Table 2. They concluded that the same source could be nearly harmless under one set of conditions and dangerous under another.',
    figure:
      '**Table 1.** Hand-to-hand resistance of the volunteer, measured at 1.0 V\n\n| Trial | Skin | Contact area per hand (cm²) | Resistance (kΩ) |\n|---|---|---|---|\n| 1 | Dry | 10 | 100.5 |\n| 2 | Dry | 20 | 50.5 |\n| 3 | Wet | 10 | 2.00 |\n| 4 | Wet | 20 | 1.25 |\n\n**Table 2.** Approximate thresholds for a hand-to-hand current lasting about 1 s\n\n| Effect | Current (mA) |\n|---|---|\n| Perception (faint tingling) | 1 |\n| Let-go (grip cannot be released) | 15 |\n| Ventricular fibrillation | 100 |',
    questions: [
      {
        question: 'Assume that the resistance of the internal tissues is the same in every trial and that the resistance of the skin under each contact is inversely proportional to the contact area. Based on Table 1, the resistance of the internal tissues is closest to:',
        options: ['0.50 kΩ', '0.75 kΩ', '1.25 kΩ', '1.50 kΩ'],
        correctAnswer: 0,
        explanation:
          'The total resistance is the sum of the skin and internal parts. Doubling the contact area halves the skin part, so the drop from Trial 3 to Trial 4, 2.00 − 1.25 = 0.75 kΩ, is half of the skin resistance in Trial 3. The skin therefore contributes 1.50 kΩ in Trial 3, leaving 2.00 − 1.50 = 0.50 kΩ for the internal tissues; Trials 1 and 2 give the same result (100.5 − 50.5 = 50 kΩ is half of 100 kΩ, leaving 0.5 kΩ). The value 0.75 kΩ is the difference between the wet trials, 1.50 kΩ is the skin resistance in Trial 3, and 1.25 kΩ is the total resistance in Trial 4.',
        skill: '4C separating series resistances from data (Skill 4)',
      },
      {
        question: 'A person whose hands make contact as in Trial 3 grasps two conductors that differ in potential by 120 V. If the resistance of the path is the value given in Table 1, the current is expected to be:',
        options: [
          'below the perception threshold, so that it would not be felt',
          'above the perception threshold but below the let-go threshold',
          'above the let-go threshold but below the fibrillation threshold',
          'above the fibrillation threshold, so that it could be fatal',
        ],
        correctAnswer: 2,
        explanation:
          '$I = V/R = 120\\ \\text{V} / 2000\\ \\Omega = 0.060$ A, or 60 mA. This exceeds the 15-mA let-go threshold, so the person could not release the conductors, but it lies below the 100-mA threshold for fibrillation. A current below 1 mA, or one between 1 and 15 mA, would require a path resistance above 8 kΩ, as with dry skin (120 V/100.5 kΩ ≈ 1.2 mA). A current above 100 mA would require a path resistance below 1.2 kΩ.',
        skill: '4C Ohm’s law applied to a series path (Skill 2)',
      },
      {
        question: 'A current of 100 mA that enters at a fingertip and leaves at the wrist of the same hand is far less likely to cause fibrillation than a hand-to-hand current of 100 mA. The best explanation is that:',
        options: [
          'the shorter path has less resistance, so that less charge flows each second',
          'the current is used up in the skin, so that little of it reaches deeper tissue',
          'the heart responds to the voltage of the source and not to the current in it',
          'charge flows only between the contacts, so little of it crosses the heart',
        ],
        correctAnswer: 3,
        explanation:
          'Charge is conserved, so a steady current is the same at every point along a single path, and it flows only through the tissue that lies between the two contacts. Between a fingertip and the wrist of one hand, that tissue does not include the chest, whereas a hand-to-hand path crosses it. A lower resistance would not reduce a current that is stated to be 100 mA in both cases. Current is not consumed along a path; what falls along the path is the potential. Table 2 gives the thresholds as currents, and the passage identifies current, not source voltage, as the cause of injury.',
        skill: '4C conservation of charge and the path of a current (Skill 1)',
      },
      {
        question: 'The estimate of the current that a 120-V source would drive through dry hands relies on a property of the path that the students did not test. Which additional procedure would test it?',
        options: [
          'Repeating Trial 1 with a second ammeter placed in series with the first one',
          'Repeating Trial 1 at several source voltages and comparing current with voltage',
          'Repeating Trial 1 after the palms have been washed and dried a second time',
          'Repeating Trial 1 with electrodes of a third contact area, 15 cm² per hand',
        ],
        correctAnswer: 1,
        explanation:
          'Using a resistance measured at 1.0 V to predict the current at 120 V assumes that the path is ohmic, that is, that its resistance does not depend on the applied voltage. The test is to vary the voltage and see whether the current remains proportional to it; if the outer skin layer conducts better at higher voltages, the estimate is too low. A second ammeter checks the instrument, and drying the palms again checks repeatability; neither varies the voltage. A third electrode area tests the dependence on area further, which Trials 1 and 2 already address.',
        skill: '4C testing whether a conductor is ohmic (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Phase diagrams: freeze-drying and supercritical CO₂ (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Phase Diagrams in Freeze-Drying and Supercritical Extraction',
    passageText:
      'A phase diagram maps the physical state of a pure substance as a function of temperature and pressure. Three boundary lines divide the diagram into regions in which the solid, the liquid, or the gas is the stable phase, and along each line two phases coexist at equilibrium. The three lines meet at the triple point, the single combination of temperature and pressure at which all three phases are in equilibrium with one another. The liquid–gas line does not continue indefinitely. As the temperature rises along it, the liquid becomes less dense and the vapor in equilibrium with it becomes more dense, until at the critical point the two are identical and the boundary between them disappears. A substance held at a temperature and a pressure that are both above the critical values is called a supercritical fluid. Values for water and carbon dioxide are given in Table 1.\n\nThe direction in which each boundary line leans reflects a general rule: at a fixed temperature, an increase in pressure favors whichever phase occupies the smaller volume. The solid–gas and liquid–gas lines therefore always rise toward the right of the diagram. For most substances, including carbon dioxide, the solid–liquid line also leans to the right, so that the melting point rises slightly as the pressure increases. Water is an exception: its solid–liquid line leans to the left.\n\nThese features are exploited in freeze-drying, which is used to preserve vaccines, antibodies, and other products that are damaged by heat and are unstable in solution. The solution is dispensed into vials and frozen at about −40 °C. The chamber is then evacuated until the gas that remains is almost entirely water vapor at a very low pressure, and a condenser coil held at −70 °C continuously removes that vapor. In this stage, called primary drying, ice passes directly into the vapor phase and leaves a dry, porous cake that keeps the shape of the frozen solution and redissolves within seconds when water is added back. The shelves beneath the vials are warmed in a controlled way throughout primary drying. If liquid water appears at any point, the cake collapses into a dense film, and the product may be lost.\n\nCarbon dioxide illustrates a different use of the diagram. A block of solid carbon dioxide (dry ice) left in an open container disappears without forming a puddle. Under suitable conditions, however, carbon dioxide becomes a supercritical fluid that is as dense as many liquids yet flows through porous solids almost as freely as a gas. Because the carbon dioxide molecule has no net dipole moment, the fluid dissolves compounds of low polarity, and its strength as a solvent can be adjusted through its density by changing the pressure. Supercritical carbon dioxide at about 60 °C and 250 atm is used to remove caffeine from coffee beans and to extract oils and flavor compounds from plant material. When the pressure is released at the end of the process, the carbon dioxide leaves the extract as a gas, so that no solvent residue remains, an advantage over organic solvents such as dichloromethane.',
    figure:
      '**Table 1.** Triple points and critical points of water and carbon dioxide\n\n| Substance | Triple point | Critical point |\n|---|---|---|\n| H₂O | 0.01 °C, 0.006 atm | 374 °C, 218 atm |\n| CO₂ | −56.6 °C, 5.1 atm | 31 °C, 73 atm |',
    questions: [
      {
        question: 'Suppose that during primary drying the pressure of water vapor in the chamber rose to 0.02 atm while the shelves warmed the vials from −40 °C to 5 °C. Based on Table 1, the ice remaining in the vials would most likely:',
        options: [
          'sublime more rapidly as it warmed',
          'stay solid at the higher pressure',
          'melt, so that the cake collapsed',
          'pass into the supercritical state',
        ],
        correctAnswer: 2,
        explanation:
          'Liquid water can exist only at pressures above the triple-point pressure, 0.006 atm. Primary drying works because the vapor pressure in the chamber is kept below that value, so that warmed ice can only sublime. At 0.02 atm the ice is above the triple-point pressure, and warming it past about 0 °C carries it across the solid–liquid line, so it melts and the cake collapses. Faster sublimation would require a lower, not a higher, vapor pressure in the chamber. Ice cannot remain solid at 5 °C at this pressure, and the supercritical region of water lies above 374 °C and 218 atm.',
        skill: '4B triple point and the conditions for sublimation (Skill 2)',
      },
      {
        question: 'Which property of water accounts for the direction in which its solid–liquid line leans?',
        options: [
          'Ice is less dense than the liquid water that it forms on melting',
          'Ice has a lower vapor pressure than liquid water at the same temperature',
          'Liquid water has a higher heat capacity than ice at the melting point',
          'Water has a larger enthalpy of vaporization than enthalpy of fusion',
        ],
        correctAnswer: 0,
        explanation:
          'According to the rule in the passage, raising the pressure favors the phase of smaller volume. A line that leans to the left means that pressure lowers the melting point, that is, pressure converts ice to liquid, so the liquid must be the more compact phase; ice, with its open hydrogen-bonded lattice, is less dense than liquid water. The lower vapor pressure of ice below 0 °C, the higher heat capacity of the liquid, and the larger enthalpy of vaporization are all true of water, but none of them concerns the relative volumes of the solid and the liquid.',
        skill: '4B slope of the solid–liquid boundary and density (Skill 1)',
      },
      {
        question: 'A sample of CO₂ gas is held at 40 °C while its pressure is raised slowly from 1 atm to 250 atm. Based on Table 1 and the passage, during the compression the sample:',
        options: [
          'condenses to a liquid when the pressure reaches about 5.1 atm',
          'condenses to a liquid when the pressure reaches about 73 atm',
          'deposits as a solid before it enters the supercritical region',
          'becomes steadily denser without ever separating into two phases',
        ],
        correctAnswer: 3,
        explanation:
          'The critical temperature of CO₂ is 31 °C. At 40 °C the sample is above it, where liquid and vapor are no longer distinct, so no pressure can produce condensation; the gas simply becomes denser and, once the pressure passes 73 atm, is called a supercritical fluid. The value 5.1 atm is the triple-point pressure, which matters only near −57 °C. Condensation near 73 atm would occur only at a temperature just below 31 °C. Solid CO₂ cannot form at 40 °C in this pressure range, because the solid–liquid line starts at −56.6 °C and leans only slightly to the right.',
        skill: '4B critical temperature and the liquefaction of a gas (Skill 2)',
      },
      {
        question: 'In freeze-drying, the solution is frozen before the chamber is evacuated. If a vial of the liquid solution at 20 °C were instead exposed directly to the low pressure of the chamber, the liquid would first be expected to:',
        options: [
          'freeze at once, because a vacuum conducts heat away from the liquid surface',
          'boil, because its vapor pressure exceeds the pressure of the gas above it',
          'stay unchanged, because water cannot vaporize below its normal boiling point',
          'sublime, because any liquid passes directly to vapor below its triple point',
        ],
        correctAnswer: 1,
        explanation:
          'A liquid boils when its vapor pressure reaches the pressure of the gas above it. Water at 20 °C has a vapor pressure of roughly 0.02 atm, well above the chamber pressure, which must be kept below the triple-point pressure of 0.006 atm, so the liquid would boil and froth out of the vial; freezing the solution first prevents this. A vacuum is a poor conductor of heat and does not itself freeze the liquid. Water can vaporize, and can boil, far below 100 °C; the normal boiling point applies only at 1 atm. Sublimation is the conversion of a solid, not a liquid, into vapor.',
        skill: '4B vapor pressure and boiling at reduced pressure (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Chemistry at the α-carbon: enolates, aldol, Claisen (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Enolates and Carbon–Carbon Bond Formation at the α-Carbon',
    passageText:
      'A hydrogen on the carbon next to a carbonyl group, the α-carbon, is far more acidic than a hydrogen of an alkane. The p$K_a$ of an α-hydrogen is about 20 in a ketone and about 25 in an ester, compared with roughly 50 for an alkane, because the anion that is left behind, an enolate, is stabilized by delocalization of its negative charge onto the carbonyl oxygen. Although most of the charge resides on oxygen, an enolate usually reacts with electrophiles at its α-carbon, forming a new bond to carbon and regenerating the C=O group. With an alkyl halide, for example, an enolate gives a ketone that carries a new alkyl group on the α-carbon.\n\nAn unsymmetrical ketone can form two different enolates. Removing a hydrogen from the more substituted α-carbon gives the enolate with the more highly substituted, and therefore more stable, C=C bond. The hydrogens on the less substituted α-carbon, however, are more exposed and are removed more rapidly. Which enolate predominates depends on the conditions. Lithium diisopropylamide (LDA) is a very strong, bulky base (the p$K_a$ of its conjugate acid is about 36) that is used in slight excess at −78 °C; under these conditions deprotonation is rapid, complete, and effectively irreversible. An alkoxide base in an alcohol solvent at room temperature removes α-hydrogens reversibly, so that the two enolates interconvert through the ketone until they reach equilibrium.\n\nWhen the electrophile is the carbonyl carbon of a second aldehyde or ketone, the reaction is an aldol addition, and its product is a β-hydroxy carbonyl compound. On heating, this product commonly loses water to give an α,β-unsaturated carbonyl compound, in which the new C=C bond is conjugated with the C=O group; the overall process is called an aldol condensation. Aldol additions are reversible. The reverse reaction, retro-aldol cleavage, breaks the bond between the α- and β-carbons of a β-hydroxy carbonyl compound, and it is the chemistry by which the glycolytic enzyme aldolase splits the six-carbon sugar fructose 1,6-bisphosphate into two three-carbon fragments. A mixture of two different carbonyl compounds can give as many as four aldol products, unless only one of the partners is able to form an enolate.\n\nEsters undergo a related reaction, the Claisen condensation, in which the enolate of one ester molecule attacks the carbonyl carbon of another, and the product is a β-keto ester together with one molecule of alcohol. Cells carry out the same kind of carbon–carbon bond formation with thioesters. In the reaction catalyzed by thiolase, two molecules of acetyl-CoA are converted to acetoacetyl-CoA and free coenzyme A, the first step in the synthesis of ketone bodies and of cholesterol. Enzymes of the same family run the reaction in reverse during the breakdown of fatty acids, when coenzyme A cleaves a β-ketoacyl-CoA into acetyl-CoA and an acyl-CoA that is two carbons shorter.',
    questions: [
      {
        question: 'A chemist treats 2-methylcyclohexanone with LDA at −78 °C and then adds iodomethane. The major product is expected to be:',
        options: [
          '2,6-dimethylcyclohexanone, because the more exposed α-hydrogen is removed fastest',
          '2,6-dimethylcyclohexanone, because the less substituted enolate is more stable',
          '2,2-dimethylcyclohexanone, because the more substituted enolate forms fastest',
          '2,2-dimethylcyclohexanone, because the more substituted enolate is more stable',
        ],
        correctAnswer: 0,
        explanation:
          'LDA at −78 °C removes a proton rapidly and irreversibly, so the product reflects which hydrogen is removed fastest. The hydrogens on C6, the unsubstituted α-carbon, are more accessible to the bulky base than the single hydrogen on C2, so the less substituted enolate forms and is methylated at C6, giving 2,6-dimethylcyclohexanone. The less substituted enolate is the less stable one, so stability is not the reason. The more substituted enolate, which would lead to 2,2-dimethylcyclohexanone, is the more stable but forms more slowly; it predominates only when the enolates can equilibrate, as with an alkoxide at room temperature.',
        skill: '5D kinetic versus thermodynamic enolates (Skill 2)',
      },
      {
        question: 'In cold, dilute aqueous NaOH, two molecules of propanal, CH₃CH₂CHO, combine in an aldol addition. The product isolated before any loss of water is:',
        options: ['3-hydroxyhexanal', '4-hydroxyhexanal', '3-hydroxy-2-methylpentanal', '4-hydroxy-2-methylpentanal'],
        correctAnswer: 2,
        explanation:
          'Hydroxide removes a hydrogen from C2 of one propanal, and that α-carbon attacks the carbonyl carbon of a second propanal, which becomes a carbon bearing OH. The product, CH₃CH₂CH(OH)CH(CH₃)CHO, has a five-carbon chain with the hydroxyl on C3 (the β-carbon) and a methyl branch on C2: 3-hydroxy-2-methylpentanal. A straight six-carbon chain would require bond formation at the methyl carbon (C3) of propanal, which is not an α-carbon. A 4-hydroxy compound would place the hydroxyl on a carbon that was never a carbonyl carbon.',
        skill: '5D structure of an aldol addition product (Skill 2)',
      },
      {
        question: 'An enolate adds to an aldehyde to give an addition product, whereas with an ester it gives a substitution product. This difference arises because the tetrahedral intermediate formed from the ester:',
        options: [
          'is too crowded to accept a proton from the solvent',
          'has no α-hydrogen that the base would be able to remove',
          'loses a hydride ion more readily than it loses water',
          'can expel an alkoxide ion and re-form a C=O group',
        ],
        correctAnswer: 3,
        explanation:
          'Addition of the enolate to either carbonyl gives a tetrahedral alkoxide. In the adduct from an aldehyde, the carbon bears only hydrogen and carbon substituents, neither of which can leave, so the alkoxide is protonated and the product is an alcohol. In the adduct from an ester, the carbon also bears an OR group that can depart as an alkoxide, so the C=O group re-forms and the net result is substitution at the acyl carbon. Crowding does not prevent protonation. Whether the adduct has α-hydrogens does not decide between addition and substitution. Hydride is an extremely poor leaving group and is not lost.',
        skill: '5D Claisen condensation as nucleophilic acyl substitution (Skill 1)',
      },
      {
        question: 'Which of the following aldehydes can act only as the electrophile, and never as the enolate partner, in a mixed aldol reaction?',
        options: ['Propanal', 'Benzaldehyde', '2-Methylpropanal', 'Phenylethanal'],
        correctAnswer: 1,
        explanation:
          'An aldehyde can form an enolate only if the carbon next to its carbonyl group bears a hydrogen. In benzaldehyde, C₆H₅CHO, that carbon is a ring carbon with no hydrogen, so benzaldehyde can only accept an enolate at its carbonyl carbon. Propanal has two α-hydrogens on its CH₂ group, 2-methylpropanal has one on its CH group, and phenylethanal, C₆H₅CH₂CHO, has two on the CH₂ group between the ring and the carbonyl.',
        skill: '5D α-hydrogens and the partners in a mixed aldol reaction (Skill 1)',
      },
    ],
  },
]

export const FL7_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl7-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A car traveling at 15 m/s on a level road brakes with its wheels locked and slides 20 m before it stops. If the same car, on the same road, begins to slide at 30 m/s, the distance it slides before stopping is closest to:',
    options: ['28 m', '40 m', '80 m', '160 m'],
    correctAnswer: 2,
    explanation:
      'By the work–energy theorem, the work done by friction, $f d$, equals the kinetic energy removed, $\\tfrac{1}{2}mv^2$. The friction force is the same in both cases, so the stopping distance is proportional to $v^2$: doubling the speed quadruples the kinetic energy and the distance, giving 4 × 20 m = 80 m. The value 40 m assumes that distance is proportional to speed, 28 m assumes that it is proportional to the square root of speed, and 160 m assumes that it is proportional to the cube of speed.',
    skill: '4A work–energy theorem and stopping distance (Skill 2)',
  },
  {
    id: 'fl7-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A beam of red laser light with a wavelength of 660 nm in air enters the eye, whose interior has a refractive index of about 1.33. Compared with the light in air, the light inside the eye has:',
    options: [
      'a shorter wavelength and the same photon energy',
      'a shorter wavelength and a lower photon energy',
      'the same wavelength and a lower photon energy',
      'a longer wavelength and the same photon energy',
    ],
    correctAnswer: 0,
    explanation:
      'The frequency of a wave is set by its source and does not change when the wave crosses a boundary, so the photon energy, $E = hf$, is unchanged, which is why the light is still seen as red. The speed falls to $c/n$, and because $\\lambda = v/f$, the wavelength falls by the same factor, to about 660/1.33 ≈ 500 nm. A lower photon energy would require a lower frequency. An unchanged wavelength at a lower speed would also require a lower frequency, and a longer wavelength would require a higher speed, as in a medium with an index below 1.',
    skill: '4D refraction: speed, wavelength, and frequency in a medium (Skill 1)',
  },
  {
    id: 'fl7-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Phosphorus-32 (atomic number 15), a radioactive label used to tag nucleic acids, decays to sulfur-32 (atomic number 16). The charged particle emitted in this decay is:',
    options: ['an alpha particle', 'a positron', 'a proton', 'an electron'],
    correctAnswer: 3,
    explanation:
      'The mass number stays at 32 while the atomic number rises from 15 to 16, so a neutron in the nucleus has become a proton. Charge is conserved only if a particle of charge −1 and negligible mass is emitted: an electron, in beta-minus decay (an uncharged antineutrino accompanies it). An alpha particle would lower the mass number by 4 and the atomic number by 2. A positron would lower the atomic number by 1, giving silicon-32. Emission of a proton would lower both the mass number and the atomic number by 1.',
    skill: '4E identifying the particle in a nuclear decay (Skill 1)',
  },
  {
    id: 'fl7-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'At 25 °C, the $K_a$ of formic acid, HCOOH, is $1.8 \\times 10^{-4}$. The $K_b$ of the formate ion, HCOO⁻, at this temperature is closest to:',
    options: ['$1.8 \\times 10^{-18}$', '$5.6 \\times 10^{-11}$', '$1.8 \\times 10^{-10}$', '$5.6 \\times 10^{3}$'],
    correctAnswer: 1,
    explanation:
      'For a conjugate acid–base pair in water, $K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$ at 25 °C, so $K_b = (1.0 \\times 10^{-14})/(1.8 \\times 10^{-4}) = 5.6 \\times 10^{-11}$. The value $1.8 \\times 10^{-18}$ multiplies $K_a$ by $K_w$ instead of dividing. The value $1.8 \\times 10^{-10}$ subtracts the exponents but carries the 1.8 over unchanged instead of taking its reciprocal. The value $5.6 \\times 10^{3}$ is $1/K_a$, the equilibrium constant for protonation of formate by $\\text{H}_3\\text{O}^+$, not by water.',
    skill: '5A Ka × Kb = Kw for a conjugate pair (Skill 2)',
  },
  {
    id: 'fl7-cp-b-d05',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A rechargeable cell delivers current to a lamp and is later recharged by an external power supply. During recharging, with each electrode named for the half-reaction then occurring at it, the cell reaction and the flow of electrons through the external circuit are described by:',
    options: [
      'a negative cell potential and a positive ΔG, with electrons moving from anode to cathode',
      'a negative cell potential and a positive ΔG, with electrons moving from cathode to anode',
      'a positive cell potential and a negative ΔG, with electrons moving from anode to cathode',
      'a positive cell potential and a positive ΔG, with electrons moving from cathode to anode',
    ],
    correctAnswer: 0,
    explanation:
      'During discharge the cell is galvanic: its reaction is spontaneous, with $E_{cell} > 0$ and $\\Delta G = -nFE_{cell} < 0$. Recharging forces the reverse reaction, so the cell is electrolytic, with $E_{cell} < 0$ and $\\Delta G > 0$; the power supply provides the work. In both kinds of cell the anode is by definition the electrode at which oxidation occurs, so electrons leave the anode and travel through the external circuit to the cathode; what changes on recharging is which physical electrode plays each role. A positive potential with a negative ΔG describes discharge. A positive potential with a positive ΔG is impossible, because the two always have opposite signs.',
    skill: '5E galvanic versus electrolytic cells (Skill 1)',
  },
  {
    id: 'fl7-cp-b-d06',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'When 3-methyl-2-butanol is heated with concentrated HBr, the substitution proceeds through a carbocation. The major product is:',
    options: ['2-bromo-3-methylbutane', '1-bromo-3-methylbutane', '1-bromo-2-methylbutane', '2-bromo-2-methylbutane'],
    correctAnswer: 3,
    explanation:
      'Protonation of the hydroxyl group and loss of water give a secondary carbocation at C2. The neighboring carbon, C3, bears a hydrogen and two methyl groups, so a 1,2-hydride shift from C3 to C2 converts the secondary cation into a more stable tertiary cation, which bromide then captures to give 2-bromo-2-methylbutane. The product 2-bromo-3-methylbutane would form without rearrangement and is the minor product. The two 1-bromo compounds would require a primary carbocation, which is less stable than either the secondary or the tertiary cation.',
    skill: '5D carbocation stability and a 1,2-hydride shift (Skill 2)',
  },
  {
    id: 'fl7-cp-b-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'The genome of a newly isolated virus contains 25% A, 33% T, 24% G, and 18% C, and no uracil. The genome is most likely:',
    options: ['double-stranded DNA', 'double-stranded RNA', 'single-stranded DNA', 'single-stranded RNA'],
    correctAnswer: 2,
    explanation:
      'The presence of thymine and the absence of uracil identify the nucleic acid as DNA. In a double-stranded molecule every A pairs with T and every G pairs with C, so Chargaff’s rules require A = T and G = C. Here A (25%) differs from T (33%), and G (24%) differs from C (18%), so the bases are not paired with a complementary strand and the genome is single-stranded. Double-stranded DNA would show equal amounts within each pair, and either form of RNA would contain uracil in place of thymine.',
    skill: '5D Chargaff’s rules and strandedness of a genome (Skill 2)',
  },
]
