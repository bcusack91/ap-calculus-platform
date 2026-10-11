/**
 * MCAT Full-Length Form 8 — Chemical & Physical Foundations, file A
 * (passages 1–5, 22 questions, plus 8 discrete items).
 *
 * Built to the 2026-09 AAMC-representativeness brief: 400–600-word passages,
 * a mix of experiment and information passages, keys that require using the
 * passage rather than matching its wording, and position/length-balanced
 * options. Explanations reference options by CONTENT, never by letter.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL8_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. PHYSICS (experiment, chart) — Malus's law and a sugar polarimeter
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-a-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'A Student-Built Polarimeter for Sugar Solutions',
    passageText:
      'Light is an electromagnetic wave whose electric field oscillates at right angles to the direction in which the wave travels. In the light from an ordinary lamp the direction of this oscillation changes at random from moment to moment, and the light is said to be unpolarized. A polarizing filter transmits only the component of the electric field that lies along one direction, called its transmission axis, so the light that leaves the filter is plane-polarized. When plane-polarized light of intensity $I_0$ falls on a second filter whose axis makes an angle $\\theta$ with the plane of polarization, the transmitted intensity is given by Malus’s law, $I = I_0\\cos^2\\theta$.\n\nSolutions of chiral molecules such as sugars are optically active: they turn the plane of polarization of light that passes through them. The observed rotation, $\\alpha$, is proportional to the length of solution traversed and to the concentration of the chiral solute. The specific rotation of a compound, $[\\alpha]$, is defined by $[\\alpha] = \\alpha/(l\\,c)$, where $l$ is the path length in decimeters and $c$ is the concentration in grams per milliliter. A compound that turns the plane clockwise, as seen by an observer looking toward the light source, is dextrorotatory and is assigned a positive rotation; one that turns it counterclockwise is levorotatory. For the yellow light of a sodium lamp (589 nm) at 20 °C, the specific rotations of three common sugars are +66.5° for sucrose, +52.7° for D-glucose, and −92.4° for D-fructose. The last two values refer to solutions in which the ring forms of the sugar have come to equilibrium.\n\nStudents assembled a polarimeter from a sodium lamp, a fixed polarizing filter (the polarizer), a glass sample tube 2.00 dm long with flat end windows, a second polarizing filter mounted in a rotating holder with an angular scale (the analyzer), and a photodetector. The analyzer angle was defined as zero when the axis of the analyzer was parallel to that of the polarizer, and it was counted as positive for clockwise rotation as seen looking toward the lamp.\n\nIn the first run the tube was filled with distilled water, and the detector reading was recorded as the analyzer was turned from 0° to 180° in steps of 30°. In the second run the tube was filled with an aqueous solution of sucrose of unknown concentration, and the measurements were repeated. The results are shown in Figure 1. The students confirmed that the detector read zero when the lamp was blocked and that neither the windows of the tube nor the solutions absorbed a measurable fraction of the light.\n\nThe students noted two limitations of the method. First, the analyzer setting that gives the minimum intensity would be the same if the plane of polarization were turned through a further 180° in either direction, so a single run does not fix the rotation uniquely. Second, sucrose is slowly hydrolyzed in acidic solution: one molecule of sucrose (342 g/mol) and one of water give one molecule of D-glucose and one of D-fructose (180 g/mol each). The students therefore dissolved their sucrose in neutral water and measured the solution promptly.',
    chart: {
      title: 'Figure 1. Detector reading versus analyzer angle with the sample tube filled with water or with a sucrose solution (589 nm, 20 °C)',
      kind: 'line',
      xLabel: 'Analyzer angle',
      xUnit: '°',
      yLabel: 'Detector reading',
      yUnit: 'μW',
      xValues: [0, 30, 60, 90, 120, 150, 180],
      yValues: [60, 80, 60, 20, 0, 20, 60],
      seriesLabel: 'Sucrose solution',
      comparisonSeries: [{ label: 'Water', yValues: [80, 60, 20, 0, 20, 60, 80] }],
    },
    questions: [
      {
        question: 'Polarizing filters have no counterpart for sound traveling through air. The reason is that sound waves in air:',
        options: [
          'are longitudinal, so their oscillation has only one possible direction.',
          'are slow, so their oscillation dies out before it reaches a detector.',
          'are long in wavelength, so they bend around any filter in their path.',
          'are mechanical, so they cannot pass through a solid sheet of material.',
        ],
        correctAnswer: 0,
        explanation:
          'A polarizing filter selects one of the many directions, all perpendicular to the direction of travel, in which a transverse wave can oscillate. In a sound wave in air the molecules move back and forth along the direction of travel, so there is only one direction of oscillation and nothing for a filter to select. Speed is irrelevant: slow transverse waves, such as those on a stretched string, can be polarized. Wavelength is also irrelevant, since microwaves with wavelengths of centimeters are readily polarized. Being mechanical is no obstacle either; sound passes through solids, and mechanical waves that are transverse can be polarized.',
        optionExplanations: [
          'Sound in air is longitudinal: the molecules oscillate back and forth along the direction of travel. With only one possible direction of oscillation there is nothing for a polarizing filter to select, so polarization has no meaning for such a wave.',
          'Speed has nothing to do with polarization. Slow transverse waves, such as those on a stretched string, can be polarized, and sound clearly does reach detectors such as microphones without dying out.',
          'Wavelength is irrelevant to whether a wave can be polarized. Microwaves have wavelengths of centimeters and are readily polarized by grids of wires; diffraction around an obstacle is a separate phenomenon.',
          'Being mechanical is no obstacle: sound passes through solid walls, and mechanical waves that are transverse, like those on a string, can be polarized. The decisive property is the direction of oscillation, not the medium.',
        ],
        skill: '4D polarization as a property of transverse waves (Skill 1)',
      },
      {
        question: 'With the sucrose solution in the tube, the analyzer is set to 75°. Based on Figure 1, the detector reading at this setting is closest to:',
        options: ['5 μW', '20 μW', '40 μW', '60 μW'],
        correctAnswer: 2,
        explanation:
          'The greatest reading on either curve shows that the light reaching the analyzer has an intensity $I_0$ of 80 μW, and the sucrose curve, with its maximum at 30° and its minimum at 120°, shows that the plane of polarization leaving the solution lies at 30°. An analyzer set to 75° therefore makes an angle of 45° with that plane, and by Malus’s law the reading is $80\\cos^2 45° = 40$ μW. A reading of 5 μW is $80\\cos^2 75°$, which ignores the rotation produced by the sugar. A reading of 20 μW corresponds to an angle of 60° between the analyzer and the plane of polarization, and 60 μW to an angle of 30°; neither is the angle that a 75° setting makes with a plane lying at 30°.',
        optionExplanations: [
          'A reading of 5 μW is $80\\cos^2 75°$, which treats the plane of polarization as still lying at 0°. The sucrose curve shows that the plane has been rotated to 30°, so the angle to use is 45°, not 75°.',
          'A reading of 20 μW corresponds to an angle of 60° between analyzer and plane of polarization, as the sucrose curve shows at 90°. An analyzer at 75° is only 45° from the plane at 30°.',
          'The sucrose curve peaks at 30° and reads zero at 120°, so the plane of polarization leaving the solution lies at 30°. An analyzer at 75° is 45° from that plane, and Malus’s law gives $80\\cos^2 45° = 40$ μW.',
          'A reading of 60 μW requires an angle of only 30° between analyzer and plane, which is what the sucrose curve shows at 0° and 60°. This choice may come from reading the water curve or misplacing the maximum.',
        ],
        skill: '4D Malus’s law with a rotated plane of polarization (Skill 2)',
      },
      {
        question: 'Assume that the sucrose solution turned the plane of polarization through less than 90°. Based on Figure 1 and the passage, the concentration of sucrose in the solution is closest to:',
        options: ['0.11 g/mL', '0.23 g/mL', '0.45 g/mL', '0.90 g/mL'],
        correctAnswer: 1,
        explanation:
          'With water in the tube the minimum lies at 90°, and with the sucrose solution it lies at 120°, so the observed rotation is +30°. Rearranging the definition of specific rotation gives $c = \\alpha/([\\alpha]\\,l) = 30/(66.5 \\times 2.00) \\approx 0.23$ g/mL. The value 0.45 g/mL leaves out the path length, treating the 2.00-dm tube as if it were 1 dm long. The value 0.90 g/mL takes the analyzer setting of 120° as the rotation instead of the 30° shift between the two curves. The value 0.11 g/mL divides by the path length twice.',
        optionExplanations: [
          'A value of 0.11 g/mL comes from dividing the 30° rotation by $66.5 \\times 4$, that is, applying the 2.00-dm path length twice. The definition $[\\alpha] = \\alpha/(l\\,c)$ uses the path length only once.',
          'Water gives its minimum at 90° and sucrose at 120°, so the observed rotation is +30°. Rearranging the definition, $c = \\alpha/([\\alpha]\\,l) = 30/(66.5 \\times 2.00) \\approx 0.23$ g/mL.',
          'A value of 0.45 g/mL is $30/66.5$, which omits the path length and treats the 2.00-dm tube as if it were 1 dm long. Rotation is proportional to path length, so the longer tube means a lower concentration.',
          'A value of 0.90 g/mL is $120/(66.5 \\times 2.00)$, taking the analyzer setting of 120° as the rotation. The rotation is the 30° shift between the water minimum and the sucrose minimum, not the absolute setting.',
        ],
        skill: '4D concentration from observed rotation and specific rotation (Skill 4)',
      },
      {
        question: 'Which additional measurement would best resolve the first limitation noted by the students?',
        options: [
          'Repeating the sucrose run with a lamp that is twice as bright',
          'Repeating the sucrose run with analyzer steps of 5° instead of 30°',
          'Repeating the sucrose run with the solution diluted by half',
          'Repeating the sucrose run with the polarizer turned through 90°',
        ],
        correctAnswer: 2,
        explanation:
          'Rotation is proportional to concentration, so diluting the solution by half halves the true rotation, and candidate rotations that differ by 180° then predict different readings. A true rotation of +30° would become +15° and move the minimum to 105°, whereas a true rotation of −150° would become −75° and move the minimum to 15°. A brighter lamp raises every reading in proportion without moving the minimum. Finer steps locate the minimum more precisely, but every candidate rotation still gives a minimum at that same setting. Turning the polarizer shifts the minima for water and for sucrose by the same amount, which leaves their separation, and the ambiguity, unchanged.',
        optionExplanations: [
          'A brighter lamp raises every reading on the curve in proportion but moves none of the minima. Both candidate rotations, +30° and −150°, still predict a minimum at 120°, so the ambiguity remains.',
          'Finer angular steps locate the minimum more precisely, but the two candidate rotations differ by exactly 180° and therefore predict the very same minimum setting. Precision cannot distinguish readings that are identical in principle.',
          'Rotation is proportional to concentration, so halving the concentration halves the true rotation. A true rotation of +30° becomes +15° and the minimum moves to 105°, whereas −150° becomes −75° and the minimum moves to 15°, so one run separates the two.',
          'Turning the polarizer by 90° shifts the water minimum and the sucrose minimum by the same amount. Their separation, which is what defines the rotation, is unchanged, and so is the 180° ambiguity.',
        ],
        skill: '4D resolving an ambiguous polarimeter reading (Skill 3)',
      },
      {
        question: 'A trace of acid is added to the sucrose solution in the tube, and hydrolysis is allowed to go to completion. Compared with the sucrose curve in Figure 1, the analyzer angle of minimum intensity for the hydrolyzed solution is:',
        options: [
          'greater than 120°, because two optically active sugars have replaced one.',
          'still 120°, because hydrolysis leaves every stereocenter unchanged.',
          'exactly 90°, because the rotations of the two products cancel.',
          'less than 90°, because fructose rotates more strongly than glucose.',
        ],
        correctAnswer: 3,
        explanation:
          'Hydrolysis produces glucose and fructose in equal numbers of moles and, because their molar masses are equal, in equal mass concentrations. Gram for gram, fructose turns the plane counterclockwise (−92.4°) more than glucose turns it clockwise (+52.7°), so the mixture is levorotatory and the minimum falls below the 90° found with water. A minimum above 120° would require products that are more dextrorotatory than sucrose, but one of them is levorotatory. The rotation of a solution depends on the molecules present, not on a tally of stereocenters, and the products have specific rotations different from that of sucrose, so the minimum cannot stay at 120°. The two rotations would cancel only if the specific rotations were equal in magnitude, which they are not.',
        optionExplanations: [
          'A minimum above 120° would require the products to be more dextrorotatory than sucrose. Two active sugars replace one, but fructose is strongly levorotatory, so the net rotation moves the other way.',
          'Hydrolysis does leave the stereocenters intact, but rotation depends on the molecules present, not on a tally of stereocenters. Glucose and fructose have specific rotations different from sucrose, so the minimum cannot remain at 120°.',
          'Cancellation to exactly 90° would require the two products to have equal and opposite specific rotations. At equal mass concentration, fructose (−92.4°) outweighs glucose (+52.7°), so the sum is not zero.',
          'Equal moles of glucose and fructose, each 180 g/mol, give equal mass concentrations. Gram for gram, fructose turns the plane counterclockwise (−92.4°) more than glucose turns it clockwise (+52.7°), so the mixture is levorotatory and the minimum falls below the water value of 90°.',
        ],
        skill: '4D additivity of optical rotations in a mixture (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY (experiment, chart) — Iodide-catalyzed decomposition of H₂O₂
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-a-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Iodide as a Catalyst for the Decomposition of Hydrogen Peroxide',
    passageText:
      'Hydrogen peroxide is unstable with respect to water and oxygen:\n\n2 H₂O₂(aq) → 2 H₂O(l) + O₂(g) (Reaction 1)\n\nThe reaction releases 98 kJ per mole of H₂O₂ consumed, yet a clean solution kept in the dark can be stored for months, because the activation energy of the uncatalyzed reaction is about 75 kJ/mol. Many substances speed the decomposition. With iodide ion in neutral solution, the activation energy falls to about 56 kJ/mol, and the rate is found to be proportional both to the concentration of H₂O₂ and to the concentration of I⁻. A two-step mechanism accounts for these findings:\n\nStep 1 (slow): H₂O₂ + I⁻ → H₂O + IO⁻\n\nStep 2 (fast): H₂O₂ + IO⁻ → H₂O + O₂ + I⁻\n\nStudents followed the reaction by collecting the gas that it produced. A flask containing a magnetic stir bar was clamped in a water bath at 20 °C and joined by a short tube to a gas syringe whose plunger moved freely, so that the gas collected stayed at a pressure of 1 atm. In Run 1, 10.0 mL of 0.80 M H₂O₂ was placed in the flask, 10.0 mL of 0.20 M KI was added, the flask was stoppered at once, and a timer was started. The volume of gas in the syringe was read every 15 min for 90 min. Run 2 was carried out in the same way, except that the 10.0 mL of KI solution was replaced by 5.0 mL of 0.20 M KI together with 5.0 mL of distilled water. The results are shown in Figure 1. At 20 °C and 1 atm, one mole of a gas occupies about 24 L. The students judged that the O₂ left dissolved in the mixture and the water vapor carried into the syringe were too small in amount to affect their conclusions.\n\nCells are protected from H₂O₂, a by-product of oxidative metabolism, by the enzyme catalase, which brings about the same overall change as Reaction 1. Each subunit of catalase contains a heme group whose iron atom is in the +3 oxidation state in the resting enzyme. One molecule of H₂O₂ oxidizes the heme to a form known as compound I, in which an oxygen atom is bound to the iron, and leaves as water. A second molecule of H₂O₂ then reduces compound I back to the resting enzyme and is itself converted to O₂ and water. With catalase the activation energy is below 25 kJ/mol, and a single molecule of the enzyme can decompose millions of molecules of H₂O₂ each second.\n\nWhen the students added a few drops of a dilute extract of liver, a tissue rich in catalase, to a fresh portion of the H₂O₂ solution, gas was evolved too quickly for the syringe to be read. An extract that had first been held in boiling water for 5 min and then cooled produced no measurable gas in 30 min, whereas a KI solution treated in the same way was as effective as before.',
    chart: {
      title: 'Figure 1. Volume of gas collected after mixing H₂O₂ with KI at two iodide concentrations (20 °C, 1 atm)',
      kind: 'line',
      xLabel: 'Time after mixing',
      xUnit: 'min',
      yLabel: 'Volume of gas collected',
      yUnit: 'mL',
      xValues: [15, 30, 45, 60, 75, 90],
      yValues: [48, 72, 84, 90, 93, 94.5],
      seriesLabel: 'Run 1 (0.10 M I⁻)',
      comparisonSeries: [{ label: 'Run 2 (0.050 M I⁻)', yValues: [28, 48, 62, 72, 79, 84] }],
    },
    questions: [
      {
        question: 'Based on Figure 1 and the amounts of reagents used, the percentage of the H₂O₂ originally present in Run 1 that had decomposed 45 min after mixing is closest to:',
        options: ['44%', '75%', '84%', '88%'],
        correctAnswer: 3,
        explanation:
          'The flask held $(0.0100\\ \\text{L})(0.80\\ \\text{M}) = 8.0$ mmol of H₂O₂, which by Reaction 1 can give 4.0 mmol of O₂, or $(4.0\\ \\text{mmol})(24\\ \\text{mL/mmol}) = 96$ mL of gas. At 45 min, 84 mL had been collected, so $84/96$, or about 88%, of the H₂O₂ had decomposed. A value of 44% results from assuming that each H₂O₂ gives one O₂, which doubles the expected final volume to 192 mL. A value of 84% treats the reading in milliliters as if it were a percentage, which would be correct only if the final volume were 100 mL. A value of 75% is the fraction that had decomposed at 30 min, when 72 mL had been collected.',
        optionExplanations: [
          'A value of 44% is $84/192$, which assumes each H₂O₂ gives one O₂ and so doubles the expected final volume. Reaction 1 shows that two H₂O₂ molecules produce only one O₂.',
          'A value of 75% is the fraction decomposed at 30 min, when 72 mL had been collected ($72/96$). The question asks about the 45-min reading, which is 84 mL.',
          'A value of 84% treats the 84-mL reading as if it were a percentage, which would hold only if the final volume were 100 mL. The theoretical final volume here is 96 mL, not 100.',
          'The flask held $(0.0100\\ \\text{L})(0.80\\ \\text{M}) = 8.0$ mmol of H₂O₂, which gives 4.0 mmol of O₂ by Reaction 1, or 96 mL at 24 mL/mmol. The 84 mL collected at 45 min is $84/96 \\approx 88\\%$.',
        ],
        skill: '5E extent of reaction from the volume of gas evolved (Skill 4)',
      },
      {
        question: 'In the mechanism given in the passage, I⁻ and IO⁻ act, respectively, as:',
        options: [
          'a catalyst and an intermediate.',
          'an intermediate and a catalyst.',
          'a reactant and a product.',
          'a catalyst and a transition state.',
        ],
        correctAnswer: 0,
        explanation:
          'Iodide is consumed in step 1 and regenerated in step 2, so it is present before the reaction begins and is recovered unchanged when it ends; it does not appear in the overall equation, yet the rate depends on its concentration. That is the behavior of a catalyst. The ion IO⁻ is absent at the start, is formed in step 1, and is consumed in step 2, which makes it an intermediate. Reversing the two labels ignores which species is present at the start. Iodide is not a reactant in the overall sense, because none of it is used up, and IO⁻ is not a product, because none of it remains. A transition state is the highest-energy arrangement of atoms along a single step; it cannot be formed in one step and consumed in another, as IO⁻ is.',
        optionExplanations: [
          'Iodide is consumed in step 1 and regenerated in step 2, so it is present at the start, is recovered unchanged, and does not appear in the overall equation even though the rate depends on it: a catalyst. IO⁻ is formed in step 1 and consumed in step 2: an intermediate.',
          'This reverses the two labels. The species present before the reaction and recovered at the end is the catalyst, I⁻; the species that is absent at the start, formed, and then used up is the intermediate, IO⁻.',
          'Iodide is not a reactant in the overall sense, because none of it is used up when both steps are summed, and IO⁻ is not a product, because none of it remains. Neither appears in Reaction 1.',
          'A transition state is the fleeting highest-energy arrangement along a single step and is never an isolable species. IO⁻ is formed in one step and consumed in another, which is the definition of an intermediate, not a transition state.',
        ],
        skill: '5E catalyst versus intermediate in a mechanism (Skill 1)',
      },
      {
        question: 'Suppose that Run 1 were repeated with 10.0 mL of 0.40 M KI in place of the 0.20 M KI. Based on the passage and Figure 1, the volume of gas collected in the first 15 min would be closest to:',
        options: ['48 mL', '72 mL', '84 mL', '96 mL'],
        correctAnswer: 1,
        explanation:
          'The rate is proportional to the concentration of I⁻, so doubling that concentration doubles the rate at every stage of the reaction, and each volume is reached in half the time. The new run would therefore reach at 15 min the volume that Run 1 reached at 30 min, 72 mL. Figure 1 shows the same relationship in the other direction: Run 2, with half as much iodide, needs about twice as long as Run 1 to deliver a given volume. A volume of 48 mL assumes that the amount of catalyst has no effect on the rate. A volume of 96 mL doubles the Run 1 reading, but the rate falls as H₂O₂ is used up, so twice the initial rate does not give twice the volume; 96 mL would mean that all of the H₂O₂ had decomposed. A volume of 84 mL is the Run 1 reading at 45 min, which would require three times as much iodide.',
        optionExplanations: [
          'A volume of 48 mL is the Run 1 reading at 15 min and assumes that doubling the catalyst has no effect. The passage states that the rate is proportional to the concentration of I⁻.',
          'The rate is proportional to iodide concentration, so doubling I⁻ doubles the rate at every stage and each volume is reached in half the time. The new run reaches at 15 min what Run 1 reached at 30 min: 72 mL. Run 2 shows the same pattern in reverse.',
          'A volume of 84 mL is the Run 1 reading at 45 min, which would be reached at 15 min only with three times as much iodide, not twice as much.',
          'A volume of 96 mL simply doubles the 15-min reading of Run 1, but the rate falls as H₂O₂ is consumed, so twice the initial rate does not yield twice the volume. 96 mL would mean complete decomposition within 15 min.',
        ],
        skill: '5E effect of catalyst concentration on a reaction time course (Skill 2)',
      },
      {
        question: 'The 5.0 mL of distilled water included in Run 2 served to:',
        options: [
          'keep the initial concentration of H₂O₂ the same as in Run 1.',
          'keep the number of moles of H₂O₂ the same as in Run 1.',
          'keep the final volume of O₂ the same as in Run 1.',
          'keep the temperature of the mixture the same as in Run 1.',
        ],
        correctAnswer: 0,
        explanation:
          'The purpose of Run 2 was to change the concentration of iodide alone. Without the added water, the total volume of the mixture would have been 15 mL instead of 20 mL, and the H₂O₂ would have started at 0.53 M instead of 0.40 M; a difference between the two curves could not then be assigned to iodide. Replacing the missing KI solution with an equal volume of water keeps the starting concentration of H₂O₂, on which the rate also depends, the same in both runs. The number of moles of H₂O₂ is fixed by the 10.0 mL of 0.80 M solution and is unaffected by adding water, and the final volume of O₂ depends only on that number of moles. The temperature was held constant by the water bath, not by 5 mL of water.',
        optionExplanations: [
          'Run 2 was meant to change iodide alone. Without the extra water the mixture would be 15 mL instead of 20 mL and the H₂O₂ would start at 0.53 M rather than 0.40 M, so the added water keeps the starting H₂O₂ concentration, on which the rate also depends, matched to Run 1.',
          'The number of moles of H₂O₂ is fixed by the 10.0 mL of 0.80 M solution and does not change when water is added. Adding water changes concentration, not amount.',
          'The final volume of O₂ depends only on the moles of H₂O₂ present, which are the same in both runs regardless of dilution. The water affects how fast the gas appears, not how much eventually forms.',
          'Temperature was controlled by clamping the flask in a 20 °C water bath. Five milliliters of water added to the mixture plays no role in holding the temperature constant.',
        ],
        skill: '5E holding one concentration fixed while varying another (Skill 3)',
      },
      {
        question: 'The different effects of boiling on the liver extract and on the KI solution are best explained by the fact that the activity of catalase, unlike that of iodide, depends on:',
        options: [
          'peptide bonds, which are hydrolyzed within minutes in boiling water.',
          'dissolved oxygen, which is driven out of a solution when it is boiled.',
          'a folded structure, which is held together by weak interactions.',
          'disulfide bonds, which are reduced to free thiols in boiling water.',
        ],
        correctAnswer: 2,
        explanation:
          'An enzyme catalyzes its reaction only when its polypeptide chain is folded so that the groups of the active site, here the heme and the side chains around it, are held in the correct arrangement. That fold is maintained largely by hydrogen bonds, ionic attractions, and hydrophobic interactions, which are disrupted at high temperature, and the denatured protein does not regain its activity simply on cooling. Iodide is a single ion with no such structure to lose. Peptide bonds are covalent and survive minutes in boiling neutral water; their hydrolysis requires strong acid or base and many hours, or a protease. Catalase produces O₂ and does not require it. Disulfide bonds are also covalent and are broken by reducing agents, not by heat alone.',
        optionExplanations: [
          'Peptide bonds are covalent and survive minutes in boiling neutral water; cleaving them requires strong acid or base for many hours, or a protease. Catalase loses activity because it unfolds, not because its chain is cut.',
          'Catalase produces O₂ rather than consuming it, so loss of dissolved oxygen cannot explain the loss of activity. Moreover, the KI solution was boiled too and lost its dissolved gas without losing effectiveness.',
          'An enzyme works only when its polypeptide is folded so that the active-site groups, here the heme and surrounding side chains, are correctly arranged. That fold depends on hydrogen bonds, ionic attractions, and hydrophobic interactions, which heat disrupts irreversibly. Iodide, a single ion, has no structure to lose.',
          'Disulfide bonds are covalent and are broken by reducing agents, not by heat alone. Heat denatures the enzyme by disrupting the weak noncovalent interactions that maintain its fold.',
        ],
        skill: '5E dependence of enzyme catalysis on folded structure (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOCHEMISTRY (information) — Collagen: Gly–X–Y, hydroxyproline, cross-links
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-a-03',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Collagen and the Chemistry of the Triple Helix',
    passageText:
      'Collagen is the most abundant protein in mammals and the main load-bearing component of tendon, bone, skin, and the walls of blood vessels. Its basic unit is a stiff rod about 300 nm long, built from three polypeptide chains called α chains, each roughly 1000 residues in length. In type I collagen, the principal form in bone and tendon, two of the three chains are α1 chains and the third is an α2 chain, which is encoded by a separate gene.\n\nThe sequence of an α chain is highly repetitive. For almost its whole length it consists of the triplet Gly–X–Y, in which X is frequently proline and Y is frequently 4-hydroxyproline. The rings of these two residues restrict rotation about the backbone, and each chain adopts an extended left-handed helix with about three residues per turn, quite unlike the compact α-helix and without hydrogen bonds between residues of the same chain. Three such chains then wind around one another in a right-handed triple helix. Every third residue of each chain lies along the central axis of the triple helix, where the three backbones come into close contact, while the side chains at positions X and Y point outward. The assembly is held together by hydrogen bonds that run from a backbone N–H group in one chain to a backbone C=O group in a neighboring chain.\n\nHydroxyproline is produced by prolyl hydroxylase, an enzyme of the endoplasmic reticulum that acts on proline residues of newly made α chains before the chains assemble. The enzyme requires O₂, α-ketoglutarate, and an iron ion that must be in the Fe²⁺ state; ascorbate (vitamin C) returns the iron to this state whenever it becomes oxidized to Fe³⁺. A triple helix of fully hydroxylated chains remains folded up to about 40 °C, whereas one assembled from chains that lack hydroxyproline unfolds near 25 °C. In scurvy, which follows a prolonged lack of vitamin C in the diet, blood vessels become fragile, the gums bleed, and wounds fail to heal.\n\nAfter secretion from the cell, collagen molecules pack side by side in a staggered array to form fibrils. Fibrils owe much of their tensile strength to covalent cross-links that are made outside the cell. Lysyl oxidase, a copper-dependent extracellular enzyme, converts the ε-amino groups of certain lysine side chains to aldehydes, which then react spontaneously with amino groups or with other aldehydes on neighboring molecules. Cross-links continue to accumulate throughout life, which is one reason that collagen from older animals is tougher and harder to dissolve.\n\nOsteogenesis imperfecta, or brittle bone disease, most often results from a mutation in one of the two copies of a gene for a type I collagen chain. In some patients the mutant allele yields no α chain at all. In others it yields a full-length chain in which a single glycine has been replaced by a larger residue. The altered chain is still incorporated into triple helices, but a molecule that contains even one such chain folds slowly, is unstable, and is largely degraded. The disease is generally more severe in the second group of patients than in the first.',
    questions: [
      {
        question: 'Glycine is required at every third position of an α chain because glycine:',
        options: [
          'has a rigid backbone that holds each chain in its extended helix.',
          'has a side chain small enough to fit where the three chains meet.',
          'has a side chain that donates hydrogen bonds to the other chains.',
          'has a nonpolar side chain that is driven away from the solvent.',
        ],
        correctAnswer: 1,
        explanation:
          'The residue at every third position lies on the central axis, where the three backbones are packed so closely that there is no room for a side chain larger than a hydrogen atom, and glycine is the only amino acid whose side chain is a single hydrogen. Glycine is the most flexible residue, not a rigid one; the stiffness of each chain comes from the rings of proline and hydroxyproline. The hydrogen bonds between chains involve backbone N–H and C=O groups, and a side chain consisting of one hydrogen bonded to carbon cannot donate a hydrogen bond. Being nonpolar is not the requirement: alanine and valine are also nonpolar, yet either one in place of glycine disrupts the triple helix, which is what happens in osteogenesis imperfecta.',
        optionExplanations: [
          'Glycine is the most flexible residue, not a rigid one. The stiffness of each α chain comes from the rings of proline and hydroxyproline at positions X and Y, which restrict backbone rotation.',
          'Every third residue lies on the central axis where the three backbones pack so closely that there is room only for a hydrogen atom. Glycine is the sole amino acid whose side chain is a single hydrogen.',
          'The hydrogen bonds between chains run from backbone N–H to backbone C=O groups. Glycine’s side chain, a hydrogen bonded to carbon, cannot donate a hydrogen bond, so this is not its role.',
          'Nonpolarity is not the requirement. Alanine and valine are also nonpolar, yet replacing glycine with a larger residue disrupts the triple helix, as the passage describes for osteogenesis imperfecta. Size, not polarity, is decisive.',
        ],
        skill: '5D glycine and close packing in the collagen triple helix (Skill 1)',
      },
      {
        question: 'Two cultures of fibroblasts that are actively secreting collagen are supplied with ¹⁴C-labeled amino acids: one with labeled proline and the other with labeled 4-hydroxyproline. Both amino acids enter the cells. Radioactive 4-hydroxyproline residues will be found in newly made collagen from:',
        options: [
          'the culture given labeled proline only.',
          'the culture given labeled hydroxyproline only.',
          'both of the cultures, to a similar extent.',
          'neither of the two cultures, at any time.',
        ],
        correctAnswer: 0,
        explanation:
          'Hydroxyproline arises when prolyl hydroxylase modifies proline residues that are already part of an α chain. Labeled proline is attached to its tRNA, incorporated during translation, and then hydroxylated in the endoplasmic reticulum, so the label appears in hydroxyproline residues of the product. Free hydroxyproline is not one of the twenty amino acids specified by the genetic code: no codon and no tRNA exist for it, so a ribosome cannot place it in a chain. The choice of labeled hydroxyproline alone reverses the true result, and the choice of both cultures assumes that free hydroxyproline can be incorporated directly. The choice of neither culture overlooks the fact that the carbon label of proline is retained when the residue is hydroxylated.',
        optionExplanations: [
          'Hydroxyproline arises when prolyl hydroxylase modifies proline residues already incorporated into an α chain. Labeled proline is placed by the ribosome and then hydroxylated in the ER, so its carbon label appears in hydroxyproline residues of the product.',
          'This reverses the true result. Free hydroxyproline is not one of the twenty encoded amino acids: no codon and no tRNA exist for it, so a ribosome cannot place it in a chain, and the label is excluded.',
          'Both cultures would be labeled only if free hydroxyproline could be incorporated directly during translation. It cannot, because the modification is made after the proline residue is already part of the chain.',
          'Neither culture being labeled overlooks that the carbon skeleton of proline is retained when the residue is hydroxylated. The proline culture therefore does produce labeled hydroxyproline residues.',
        ],
        skill: '5D hydroxyproline as a post-translational modification (Skill 2)',
      },
      {
        question: 'A patient is heterozygous for a mutation that replaces one glycine in the α1 chain of type I collagen. Assume that normal and mutant α1 chains are made in equal amounts and combine at random with normal α2 chains. What fraction of the patient’s type I collagen molecules contain at least one mutant chain?',
        options: ['1/4', '1/2', '3/4', '7/8'],
        correctAnswer: 2,
        explanation:
          'Each type I molecule contains two α1 chains and one α2 chain. The probability that a given α1 position is filled by a normal chain is 1/2, so the probability that both are normal is $(1/2)^2 = 1/4$, and the remaining 3/4 of the molecules carry at least one mutant chain. This is why a substitution can be more harmful than an allele that makes no chain: the latter merely halves the supply of α1 chains, and every molecule that forms is normal. The value 1/4 is the fraction of molecules in which both α1 chains are normal. The value 1/2 is the fraction of α1 chains that are mutant, not the fraction of molecules affected. The value 7/8 would apply if all three chains of the molecule were α1 chains.',
        optionExplanations: [
          'A fraction of 1/4 is the probability that both α1 positions are filled by normal chains, $(1/2)^2$. The question asks for the complementary fraction, molecules containing at least one mutant chain.',
          'A fraction of 1/2 is the fraction of α1 chains that are mutant, not the fraction of molecules affected. Because each molecule draws two α1 chains, more than half of the molecules receive at least one mutant copy.',
          'Each type I molecule has two α1 chains and one α2 chain. The chance that both α1 positions are normal is $(1/2)^2 = 1/4$, so $3/4$ of molecules carry at least one mutant chain, which is why a substitution is worse than a null allele.',
          'A fraction of 7/8 would apply if all three chains of the molecule were α1 chains, $1 - (1/2)^3$. The α2 chain comes from a separate, unaffected gene, so only two positions are at risk.',
        ],
        skill: '5D random assembly of chains carrying a glycine substitution (Skill 2)',
      },
      {
        question: 'β-Aminopropionitrile is a specific inhibitor of lysyl oxidase. Compared with collagen from untreated animals, collagen from young animals fed this compound would be expected to have:',
        options: [
          'triple helices that unfold at a lower temperature and fibrils of normal strength.',
          'triple helices that unfold at a lower temperature and fibrils of low strength.',
          'triple helices of normal stability and fibrils of normal strength.',
          'triple helices of normal stability and fibrils of low strength.',
        ],
        correctAnswer: 3,
        explanation:
          'Lysyl oxidase acts outside the cell, after the chains have been hydroxylated, assembled into triple helices, and secreted. Blocking it leaves the hydroxyproline content, and therefore the temperature at which the triple helix unfolds, unchanged, but it prevents formation of the aldehydes from which the covalent cross-links between molecules arise, so the fibrils are weak and the collagen is unusually easy to extract. Triple helices that unfold at a lower temperature would result from a failure of proline hydroxylation, as in vitamin C deficiency, not from a failure of cross-linking. Fibrils of normal strength are not expected when the cross-links responsible for much of that strength cannot form.',
        optionExplanations: [
          'Lower unfolding temperature results from a lack of hydroxyproline, which depends on prolyl hydroxylase and vitamin C, not on lysyl oxidase. And without cross-links the fibrils cannot have normal strength.',
          'The helix half of this pairing is wrong. Lysyl oxidase acts outside the cell after hydroxylation and assembly are complete, so inhibiting it leaves hydroxyproline content and helix stability unchanged.',
          'Blocking lysyl oxidase prevents the lysine-derived aldehydes that form covalent cross-links, and the passage attributes much of fibril strength to those cross-links. Fibril strength therefore cannot be normal.',
          'Lysyl oxidase works extracellularly, after chains have been hydroxylated, wound into triple helices, and secreted, so inhibiting it leaves helix stability intact. But without the aldehydes it generates, the covalent cross-links that give fibrils their tensile strength cannot form, so the fibrils are weak.',
        ],
        skill: '5D covalent cross-links versus stability of the triple helix (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. ORGANIC CHEMISTRY (experiment, tables) — Reverse-phase HPLC of analgesics
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-a-04',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Reverse-Phase Chromatography of Four Ingredients of Pain Relievers',
    passageText:
      'High-performance liquid chromatography (HPLC) separates the components of a mixture by pumping a liquid, the mobile phase, at high pressure through a column packed with fine particles, the stationary phase. In the reverse-phase mode, the particles are silica whose surface carries covalently attached 18-carbon alkyl chains (C18), and the mobile phase is a mixture of water with a miscible organic solvent such as methanol. Each compound divides its time between the two phases, and the time that elapses between injection and the arrival of a compound at the detector is its retention time. A compound that does not enter the stationary phase at all emerges at the void time, which was 1.0 min for the column used in this study.\n\nAnalysts developing a quality-control method for nonprescription pain relievers studied four compounds: acetaminophen, a phenol (p$K_a$ 9.5) that also contains an amide group; caffeine, a heterocyclic compound with no group that gains or loses a proton between pH 2 and pH 8; aspirin, a carboxylic acid (p$K_a$ 3.5) that also contains an ester group; and ibuprofen, a carboxylic acid (p$K_a$ 4.4) whose only other features are a benzene ring and saturated hydrocarbon groups. A standard solution containing 0.100 mg/mL of each compound was prepared, and 10 μL was injected under three sets of conditions. Each mobile phase was a mixture of methanol and an aqueous phosphate buffer; the percentage stated is the percentage of methanol by volume, and the pH is that of the buffer. The column temperature (30 °C) and the flow rate (1.0 mL/min) were the same in every run, and the compounds were detected by their absorbance of ultraviolet light at 230 nm. The retention times are given in Table 1.\n\nThe detector records absorbance as a function of time, so each compound appears as a peak, and the area of a peak is proportional to the mass of that compound injected. The constant of proportionality differs from one compound to another, because the four compounds do not absorb equally at 230 nm.\n\nThe analysts then examined a commercial tablet whose active ingredients are acetaminophen, aspirin, and caffeine. One tablet was crushed and stirred with the first mobile phase, the mixture was filtered to remove insoluble binders, and the filtrate was diluted with more of the same mobile phase to a final volume of 500 mL. A 10-μL portion was injected under the first set of conditions, immediately after an injection of the standard solution. The peak areas, in the arbitrary units reported by the instrument, are given in Table 2. All solutions were analyzed within an hour of being prepared, because aspirin in water is slowly hydrolyzed to salicylic acid and acetic acid.',
    figure:
      '**Table 1. Retention times (min) of the four compounds in the standard solution**\n\n| Compound | 50% methanol, pH 2.5 | 70% methanol, pH 2.5 | 50% methanol, pH 7.0 |\n|----------|----------------------|----------------------|----------------------|\n| Acetaminophen | 1.8 | 1.3 | 1.8 |\n| Caffeine | 2.3 | 1.5 | 2.3 |\n| Aspirin | 3.5 | 1.8 | 1.2 |\n| Ibuprofen | 30.0 | 6.0 | 4.0 |\n\n**Table 2. Peak areas (arbitrary units) for 10-μL injections at 50% methanol, pH 2.5**\n\n| Solution injected | Acetaminophen | Caffeine | Aspirin |\n|-------------------|---------------|----------|---------|\n| Standard (0.100 mg/mL of each compound) | 1500 | 800 | 500 |\n| Tablet extract (one tablet in 500 mL) | 7500 | 1040 | 2400 |',
    questions: [
      {
        question: 'Under the first set of conditions in Table 1, the compound that spends the greatest share of its time in the stationary phase is held there chiefly by:',
        options: [
          'London dispersion forces between its hydrocarbon groups and the C18 chains.',
          'hydrogen bonds between its carboxyl group and the C18 chains.',
          'ionic attraction between its carboxylate group and the C18 chains.',
          'dipole–dipole forces between its amide group and the C18 chains.',
        ],
        correctAnswer: 0,
        explanation:
          'The compound with the longest retention time, ibuprofen, spends the most time in the stationary phase. The C18 chains are saturated hydrocarbon: they have no polar bonds, no charge, and no hydrogen-bond donors or acceptors, so the only attraction they can offer is the London dispersion force, which is greatest for a solute with a large nonpolar surface such as the ring and alkyl groups of ibuprofen. The poor solvation of those groups by the polar mobile phase works in the same direction. An alkyl chain can neither accept nor donate a hydrogen bond, so the carboxyl group gains nothing from it. Ionic attraction requires charges on both partners; the C18 chains have none, and at pH 2.5 the carboxyl group is protonated in any case. An amide group is found in acetaminophen, the compound retained least, and the chains have no dipole with which it could interact.',
        optionExplanations: [
          'Ibuprofen, retained for 30 min, spends the most time in the stationary phase. C18 chains are saturated hydrocarbon with no polar bonds, charges, or hydrogen-bonding groups, so London dispersion with ibuprofen’s large nonpolar ring and alkyl surface is the only attraction available.',
          'An alkyl chain can neither donate nor accept a hydrogen bond, so the carboxyl group gains nothing from the stationary phase. Hydrogen bonding would, if anything, favor the aqueous mobile phase.',
          'Ionic attraction requires charges on both partners. The C18 chains carry none, and at pH 2.5, below the p$K_a$ of 4.4, ibuprofen’s carboxyl group is protonated and uncharged in any case.',
          'The amide group belongs to acetaminophen, the compound retained least, so it cannot be what holds the most-retained compound. Moreover, saturated hydrocarbon chains have no dipole for a dipole–dipole interaction.',
        ],
        skill: '5C dispersion forces and retention on a nonpolar stationary phase (Skill 1)',
      },
      {
        question: 'Which statement best explains why raising the pH of the buffer from 2.5 to 7.0 changed the retention times of only two of the four compounds?',
        options: [
          'Aspirin and ibuprofen are uncharged at pH 7.0 and dissolve less readily in the mobile phase.',
          'Aspirin and ibuprofen are anions at pH 7.0 and are solvated more strongly by the mobile phase.',
          'Aspirin and ibuprofen are cations at pH 7.0 and are repelled by the stationary phase.',
          'Aspirin and ibuprofen are hydrolyzed at pH 7.0 and are detected as smaller fragments.',
        ],
        correctAnswer: 1,
        explanation:
          'Both pH values lie far below the p$K_a$ of the phenol in acetaminophen, and caffeine has no group that ionizes in this range, so the charge on those two compounds does not change. The carboxylic acids are different: pH 2.5 is below both p$K_a$ values, so aspirin and ibuprofen are mostly protonated and uncharged, whereas pH 7.0 is more than two units above both, so each is more than 99% in its carboxylate form. An anion is strongly solvated by water and methanol and has little affinity for hydrocarbon chains, so it passes through the column sooner. The acids are uncharged at pH 2.5, not at pH 7.0, and a solute that dissolved less readily in the mobile phase would be retained longer, not for a shorter time. A carboxylic acid loses a proton as the pH rises; it does not gain one to become a cation. Ibuprofen has no bond that water can hydrolyze, and the passage describes the hydrolysis of aspirin as slow.',
        optionExplanations: [
          'This has the chemistry backward. The acids are uncharged at pH 2.5, not at pH 7.0, and a solute that dissolved less readily in the mobile phase would be retained longer, yet their retention times fell.',
          'Only the two carboxylic acids change charge between the pH values: pH 2.5 is below both p$K_a$ values, while pH 7.0 is more than two units above, so each is over 99% carboxylate. The anion is strongly solvated by the polar mobile phase and leaves the hydrocarbon phase sooner.',
          'A carboxylic acid loses a proton as pH rises; it does not gain one. Neither aspirin nor ibuprofen has a basic group that could be protonated to form a cation.',
          'Ibuprofen has no bond that water hydrolyzes, and the passage describes aspirin hydrolysis as slow, with solutions analyzed within an hour. Hydrolysis would also produce new peaks, not simply shift two retention times.',
        ],
        skill: '5C ionization of carboxylic acids and reverse-phase retention (Skill 2)',
      },
      {
        question: 'Based on Table 2, the mass of aspirin in the tablet is closest to:',
        options: ['48 mg', '80 mg', '150 mg', '240 mg'],
        correctAnswer: 3,
        explanation:
          'Peak area is proportional to the mass injected, and equal volumes were injected, so the aspirin concentration of the extract is $(2400/500)(0.100\\ \\text{mg/mL}) = 0.48$ mg/mL. The extract had a volume of 500 mL, so the tablet contained $(0.48)(500) = 240$ mg. A value of 80 mg results from comparing the aspirin peak of the extract with the acetaminophen peak of the standard, and 150 mg from comparing it with the caffeine peak; because the compounds absorb differently at 230 nm, each must be compared with its own standard. A value of 48 mg results from multiplying the concentration by 100 mL instead of by the 500 mL to which the extract was made up.',
        optionExplanations: [
          'A value of 48 mg multiplies the extract concentration of 0.48 mg/mL by 100 mL rather than by the 500 mL to which the extract was diluted. The whole tablet went into 500 mL.',
          'A value of 80 mg compares the extract’s aspirin peak (2400) with the standard’s acetaminophen peak (1500). Because the compounds absorb differently at 230 nm, aspirin must be compared with the aspirin standard peak of 500.',
          'A value of 150 mg compares the aspirin peak of the extract with the caffeine standard peak of 800. Each compound has its own response factor at 230 nm, so only the aspirin standard is a valid reference.',
          'Peak area is proportional to mass injected with equal volumes, so the extract contains $(2400/500)(0.100) = 0.48$ mg/mL of aspirin. Over the 500-mL extract volume that is $0.48 \\times 500 = 240$ mg per tablet.',
        ],
        skill: '5C quantitation from peak areas with an external standard (Skill 4)',
      },
      {
        question: 'The analysts want to shorten the analysis of the four-compound mixture at pH 2.5 without bringing the first three peaks closer together than they are under the first set of conditions. Based on Table 1, which procedure would best accomplish this?',
        options: [
          'Pumping 70% methanol for the whole of the run',
          'Pumping 70% methanol until aspirin has emerged, then 50% methanol',
          'Pumping 50% methanol until aspirin has emerged, then 70% methanol',
          'Pumping 50% methanol for the whole of the run at half the flow rate',
        ],
        correctAnswer: 2,
        explanation:
          'In 50% methanol the first three compounds emerge at 1.8, 2.3, and 3.5 min, well apart, but ibuprofen is held for 30 min. In 70% methanol ibuprofen emerges at 6.0 min, but the first three compounds are crowded between 1.3 and 1.8 min. Running the more polar solvent until aspirin has emerged preserves the spacing of the early peaks, and raising the methanol content afterward releases ibuprofen quickly. Using 70% methanol throughout shortens the run but compresses the early peaks. Starting with 70% methanol and then changing to 50% combines the crowding of the early peaks with a long wait for ibuprofen. Halving the flow rate makes every compound take longer to pass through the column.',
        optionExplanations: [
          'Using 70% methanol throughout does shorten the run, but Table 1 shows the first three peaks crowded between 1.3 and 1.8 min, closer together than the 1.8, 2.3, and 3.5 min spacing the analysts want to keep.',
          'Starting with 70% methanol compresses the early peaks into the 1.3–1.8 min window, and switching to 50% afterward then holds ibuprofen for a long time. This combines the worst of both conditions.',
          'Running 50% methanol until aspirin emerges at 3.5 min preserves the 1.8, 2.3, 3.5 min spacing of the first three peaks. Raising to 70% afterward releases ibuprofen quickly instead of holding it for 30 min, shortening the run.',
          'Halving the flow rate makes every compound take longer to reach the detector, so the analysis becomes slower, not faster. It does nothing about the long retention of ibuprofen.',
        ],
        skill: '5C designing a solvent program from retention data (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSICS (information) — Fluorescence, the Stokes shift, energy transfer
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-a-05',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Fluorescence, Energy Transfer, and the Fading of Dyes',
    passageText:
      'A molecule that absorbs a photon of visible or ultraviolet light is raised from its ground electronic state to an excited electronic state. Each electronic state includes a ladder of closely spaced vibrational levels, and absorption usually leaves the molecule in one of the upper vibrational levels of the excited state. Within about a picosecond ($10^{-12}$ s) the molecule settles to the lowest vibrational level of the excited state, where it remains for a few nanoseconds. A fluorescent molecule, or fluorophore, then returns to the ground state by emitting a photon. Because emission starts from the bottom of the excited state and commonly ends on an upper vibrational level of the ground state, the emitted light lies at longer wavelengths than the light that was absorbed. The difference between the wavelength of maximum absorption and the wavelength of maximum emission is called the Stokes shift. For fluorescein, a dye widely used to label proteins, the two maxima lie near 494 nm and 520 nm.\n\nThe Stokes shift is what makes fluorescence so sensitive a method of detection. In a fluorescence microscope, a filter placed between the lamp and the specimen passes only wavelengths that the fluorophore absorbs, and a second filter between the specimen and the detector passes only wavelengths that it emits. The exciting light, which is many thousands of times more intense than the fluorescence, is thereby kept from the detector, and labeled structures appear bright against a dark background. Antibodies, nucleic acid probes, and lipids that carry covalently attached fluorophores are used in this way to locate particular molecules within cells.\n\nAn excited fluorophore can also pass its energy directly to a second light-absorbing molecule nearby, without emitting a photon. This process, called resonance energy transfer, requires that the second molecule, the acceptor, be able to absorb at wavelengths at which the first, the donor, would otherwise emit. The acceptor is raised to its own excited state and may then fluoresce at its own, still longer, wavelengths. The efficiency of transfer, $E$, defined as the fraction of excited donors that give their energy to an acceptor, falls steeply with the distance $r$ between the two:\n\n$E = \\dfrac{1}{1 + (r/R_0)^6}$\n\nHere $R_0$ is a constant for a given pair of dyes, usually between 2 and 6 nm. Because these distances are comparable to the dimensions of proteins, a donor and an acceptor attached at two sites on a macromolecule serve as a ruler: a change of shape that alters the distance between the sites changes the relative brightness of the donor and acceptor emission.\n\nFluorophores do not last indefinitely. A molecule in an excited state is far more reactive than one in the ground state, and from time to time an excited dye molecule reacts irreversibly, often with dissolved oxygen, to give a product that neither absorbs nor emits visible light. This photobleaching limits the number of photons that one dye molecule can emit over its lifetime, and it causes a labeled specimen to fade under continuous illumination.',
    questions: [
      {
        question: 'A fluorescein molecule absorbs a photon at 494 nm and emits a photon at 520 nm. The difference in energy between the two photons is:',
        options: [
          'carried away by a second emitted photon that has a wavelength of 26 nm.',
          'stored in the molecule, which is left in an excited electronic state.',
          'transferred as thermal energy to the surrounding solvent molecules.',
          'removed from the emitted photon as it slows on leaving the solution.',
        ],
        correctAnswer: 2,
        explanation:
          'Energy is conserved, so the difference between the energy absorbed and the energy emitted must go somewhere. As the excited molecule settles to the lowest vibrational level of the excited state, and again when it relaxes from an upper vibrational level of the ground state after emission, its excess vibrational energy passes through collisions to the surrounding solvent, which is warmed very slightly. A photon with a wavelength of 26 nm would carry far more energy than the 494-nm photon that was absorbed; a difference between two wavelengths is not the wavelength that corresponds to a difference between two energies. The molecule ends in its ground electronic state, so the energy is not stored in it. The energy of a photon is fixed by its frequency, which does not change when light passes from one medium into another, so a change of speed on leaving the solution removes no energy.',
        optionExplanations: [
          'A wavelength of 26 nm would carry far more energy than the 494-nm photon absorbed, violating conservation. A difference between two wavelengths is not the wavelength that corresponds to the difference between two energies.',
          'The molecule returns to its ground electronic state after emitting, so no electronic energy is stored. The excess appears as vibrational energy that is quickly lost, not as a lingering excited state.',
          'Energy is conserved, so the gap between absorbed and emitted photon energies must go somewhere. The molecule settles vibrationally within the excited state before emitting and again in the ground state afterward, and that excess vibrational energy is dissipated by collisions as heat to the solvent.',
          'A photon’s energy is set by its frequency, which does not change when light crosses from one medium to another; only its speed and wavelength change. Leaving the solution removes no energy from the photon.',
        ],
        skill: '4E conservation of energy and the Stokes shift (Skill 1)',
      },
      {
        question: 'A donor and an acceptor for which $R_0$ is 5.0 nm are attached to a protein. In one conformation of the protein the two dyes are 10 nm apart. In this conformation, the efficiency of energy transfer is closest to:',
        options: ['1.5%', '11%', '20%', '33%'],
        correctAnswer: 0,
        explanation:
          'With $r/R_0 = 2$, $(r/R_0)^6 = 2^6 = 64$, so $E = 1/(1 + 64) = 1/65 \\approx 0.015$, or about 1.5%. Moving the dyes from a separation of $R_0$, at which the expression gives 50%, to twice that distance thus lowers the efficiency to under 2%, which is why the method is so sensitive to distance. A value of 33% results from using the first power of the ratio, $1/(1 + 2)$; a value of 20% from using its square, $1/(1 + 4)$; and a value of 11% from using its cube, $1/(1 + 8)$.',
        optionExplanations: [
          'With $r/R_0 = 10/5 = 2$, $(r/R_0)^6 = 64$, so $E = 1/(1 + 64) = 1/65 \\approx 0.015$, about 1.5%. Doubling the separation from $R_0$ drops the efficiency from 50% to under 2%.',
          'A value of 11% is $1/(1 + 2^3) = 1/9$, which uses the cube of the distance ratio. The passage gives the sixth power.',
          'A value of 20% is $1/(1 + 2^2) = 1/5$, which uses the square of the distance ratio instead of the sixth power.',
          'A value of 33% is $1/(1 + 2) = 1/3$, which uses the first power of the ratio. The sixth-power dependence is what makes energy transfer so steeply sensitive to distance.',
        ],
        skill: '4D distance dependence of resonance energy transfer (Skill 2)',
      },
      {
        question: 'A protein carries a donor and an acceptor 4 nm apart, and $R_0$ for the pair is 5 nm. The sample is illuminated at a wavelength absorbed only by the acceptor until the acceptor has been completely photobleached. When the donor is then excited, its emission, compared with its emission before the acceptor was bleached, is:',
        options: [
          'weaker, because the bleached acceptor now absorbs the photons that the donor emits.',
          'stronger, because excited donors can no longer pass energy to an acceptor.',
          'unchanged, because photobleaching alters the acceptor and leaves the donor intact.',
          'absent, because energy transfer from the acceptor was what excited the donor.',
        ],
        correctAnswer: 1,
        explanation:
          'At 4 nm, a distance less than $R_0$, more than half of the excited donors give their energy to the acceptor instead of emitting, so the donor emission is weak while the acceptor is intact. A bleached acceptor no longer absorbs visible light, so it cannot receive energy from the donor; every excited donor must now return to the ground state by its other routes, and the donor emission rises. For the same reason the bleached product cannot absorb the photons that the donor emits. The donor molecule is indeed unaltered, but the brightness of its emission depends on whether an acceptor is available to take its energy. Energy flows from donor to acceptor, not the reverse, and the donor is excited directly by the light that it absorbs.',
        optionExplanations: [
          'A bleached acceptor neither absorbs nor emits visible light, so it cannot absorb the donor’s emitted photons. The direction of the effect is also wrong: removing the acceptor makes donor emission stronger, not weaker.',
          'At 4 nm, less than $R_0$, more than half of excited donors hand their energy to the acceptor rather than emitting. Once the acceptor is bleached it can no longer accept energy, so every excited donor returns to the ground state by emission or its other routes, and donor fluorescence rises.',
          'The donor molecule is indeed unaltered, but its emission brightness depends on whether an acceptor is nearby to drain its excitation. Removing that drain changes the donor’s emission even though the donor itself is intact.',
          'Energy flows from donor to acceptor, not the reverse, and the donor is excited directly by the light it absorbs. Loss of the acceptor therefore cannot abolish donor emission.',
        ],
        skill: '4D donor emission after loss of the acceptor (Skill 2)',
      },
      {
        question: 'A dilute solution of a fluorophore is illuminated at its wavelength of maximum absorption. If the intensity of the illumination is doubled while its wavelength is kept the same, and photobleaching is negligible, the fluorescence will consist of:',
        options: [
          'the same number of photons per second, at shorter wavelengths than before.',
          'the same number of photons per second, at the same wavelengths as before.',
          'about twice as many photons per second, at shorter wavelengths than before.',
          'about twice as many photons per second, at the same wavelengths as before.',
        ],
        correctAnswer: 3,
        explanation:
          'At a fixed wavelength, a more intense beam delivers more photons per second, each with the same energy as before. In a dilute solution in which only a small fraction of the molecules is excited at any moment, twice as many photons are absorbed per second, and twice as many are emitted. The energy of each emitted photon is set by the spacing of the energy levels of the fluorophore, not by the number of photons arriving, so the emission spectrum does not move. An unchanged number of emitted photons would require that the dye already be absorbing all that it could, which is not the case in a dilute solution under ordinary illumination. A shift to shorter wavelengths would require each molecule to take up more energy per absorption, but the energy of an absorbed photon depends on its wavelength, which was not changed.',
        optionExplanations: [
          'Both halves of this choice fail. Doubling the intensity doubles the photon arrival rate, so a dilute solution absorbs and emits twice as many photons, not the same number; and the emission wavelength cannot shift shorter, because each emitted photon’s energy is set by the fluorophore’s energy levels.',
          'In a dilute solution only a small fraction of molecules is excited at any instant, so doubling the incoming photons doubles the absorptions and emissions. The photon count would stay unchanged only if the dye were already saturated.',
          'The emission spectrum does not move: each emitted photon’s energy depends on the spacing of the fluorophore’s levels, not on how many photons arrive. A shift to shorter wavelengths would require more energy per absorbed photon, but the wavelength was kept the same.',
          'A more intense beam at the same wavelength delivers twice as many photons per second, each with the same energy. In a dilute solution twice as many are absorbed and emitted, and the emitted photon energies, fixed by the molecule’s energy levels, are unchanged.',
        ],
        skill: '4E photon number versus photon energy in fluorescence (Skill 1)',
      },
    ],
  },
]

export const FL8_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl8-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A 0.60-g sample of a compound that contains only carbon, hydrogen, and oxygen is burned completely in excess O₂, producing 0.88 g of CO₂ and 0.36 g of H₂O. The empirical formula of the compound is:',
    options: ['CH₂', 'CHO', 'CH₂O', 'CH₂O₃'],
    correctAnswer: 2,
    explanation:
      'All of the carbon ends up in CO₂: $0.88/44 = 0.020$ mol of C, or 0.24 g. All of the hydrogen ends up in H₂O: $0.36/18 = 0.020$ mol of H₂O, which contains 0.040 mol of H, or 0.040 g. Oxygen is found by difference, $0.60 - 0.24 - 0.04 = 0.32$ g, or 0.020 mol. The mole ratio C : H : O is 1 : 2 : 1, so the empirical formula is CH₂O. The formula CH₂ ignores the 0.32 g of the sample that is neither carbon nor hydrogen. The formula CHO counts one hydrogen atom per molecule of water instead of two. The formula CH₂O₃ takes the oxygen from the products, 0.040 mol in the CO₂ and 0.020 mol in the H₂O, although most of that oxygen came from the O₂ in which the sample was burned.',
    optionExplanations: [
      'The formula CH₂ ignores the 0.32 g of the 0.60-g sample that is neither carbon (0.24 g) nor hydrogen (0.04 g). That mass is oxygen, 0.020 mol, and must appear in the formula.',
      'The formula CHO counts one hydrogen per water molecule instead of two. The 0.020 mol of H₂O contains 0.040 mol of H, giving a 1 : 2 ratio of C to H.',
      'Carbon: $0.88/44 = 0.020$ mol (0.24 g). Hydrogen: $0.36/18 = 0.020$ mol H₂O, so 0.040 mol H (0.04 g). Oxygen by difference: $0.60 - 0.28 = 0.32$ g $= 0.020$ mol. The ratio 1 : 2 : 1 gives CH₂O.',
      'The formula CH₂O₃ counts the oxygen in the products, 0.040 mol in CO₂ plus 0.020 mol in H₂O, but most of that oxygen came from the O₂ used for combustion. Oxygen in the sample must be found by difference.',
    ],
    skill: '5A empirical formula from combustion analysis (Skill 2)',
  },
  {
    id: 'fl8-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Boron trifluoride reacts with ammonia to give the adduct F₃B–NH₃. In this reaction:',
    options: [
      'BF₃ is the Lewis acid, because boron accepts an electron pair from nitrogen.',
      'BF₃ is the Lewis base, because fluorine donates an electron pair to nitrogen.',
      'NH₃ is the Lewis acid, because nitrogen donates a proton to a fluorine atom.',
      'NH₃ is the Lewis base, because nitrogen accepts an electron pair from boron.',
    ],
    correctAnswer: 0,
    explanation:
      'A Lewis acid accepts an electron pair, and a Lewis base donates one. Boron in BF₃ has only six valence electrons and an empty 2p orbital; the nitrogen of NH₃ has a lone pair, which it shares with boron to form the new B–N bond, both electrons of which come from nitrogen. BF₃ is therefore the acid and NH₃ the base. The lone pairs on fluorine are not donated to nitrogen, which has no empty orbital to receive them. No proton is transferred in this reaction, so NH₃ is not acting as an acid of any kind. NH₃ is indeed the Lewis base, but the reason is that nitrogen donates an electron pair; boron has no lone pair to give.',
    optionExplanations: [
      'A Lewis acid accepts an electron pair. Boron in BF₃ has only six valence electrons and an empty 2p orbital, and nitrogen’s lone pair fills it to form the B–N bond; both bonding electrons come from nitrogen.',
      'Fluorine lone pairs are not donated to nitrogen, which already has a complete octet and no empty orbital to receive them. BF₃ is electron-deficient at boron, which makes it the acceptor, not the donor.',
      'No proton is transferred in forming F₃B–NH₃; the reaction is the sharing of nitrogen’s lone pair with boron. NH₃ is not acting as any kind of acid here.',
      'NH₃ is indeed the Lewis base, but the stated reason is backward. Nitrogen donates the electron pair to boron; boron has no lone pair to give and is the acceptor.',
    ],
    skill: '5A Lewis acids and bases in adduct formation (Skill 1)',
  },
  {
    id: 'fl8-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A sample of acetic acid (p$K_a$ 4.8) is titrated with standardized NaOH. By mistake the student uses methyl red, which changes color between pH 4.4 and pH 6.2, in place of phenolphthalein, which changes color between pH 8.2 and pH 10.0, and stops adding base when the color change is complete. Compared with the true value, the concentration of acetic acid calculated from this end point will be:',
    options: [
      'too low, because the indicator itself neutralizes part of the acetic acid.',
      'too low, because the color change is complete before the equivalence point.',
      'too high, because the color change is complete after the equivalence point.',
      'accurate, because the pH rises steeply through the range of either indicator.',
    ],
    correctAnswer: 1,
    explanation:
      'At the equivalence point the flask contains sodium acetate, the salt of a weak acid and a strong base, so the solution is basic, with a pH near 9. Methyl red has finished changing color by pH 6.2, where $[\\text{acetate}]/[\\text{acetic acid}] = 10^{6.2 - 4.8} \\approx 25$ and about 4% of the acid has not yet been neutralized. Too little NaOH is recorded, and the calculated concentration is too low. The steep part of this titration curve runs from about pH 7 to pH 10; the range of methyl red lies largely in the buffer region below it, where the pH rises gradually, so the two indicators do not give the same volume. An end point after equivalence would be found with an indicator that changes color well above pH 10. A few drops of indicator consume a negligible quantity of titrant, and an indicator is itself a weak acid, which could not neutralize acetic acid.',
    optionExplanations: [
      'A few drops of indicator consume a negligible amount of titrant, and an indicator is itself a weak acid, so it cannot neutralize acetic acid. The error arises from where the color change occurs, not from the indicator’s own reaction.',
      'At equivalence the solution is sodium acetate, with pH near 9. Methyl red finishes changing by pH 6.2, where $[\\text{acetate}]/[\\text{acid}] = 10^{1.4} \\approx 25$ and about 4% of the acid is still unneutralized. Too little NaOH is recorded, so the calculated concentration is too low.',
      'An end point after equivalence would require an indicator that changes color well above pH 10. Methyl red’s range of 4.4 to 6.2 lies below the equivalence pH of about 9, so the error runs in the opposite direction.',
      'The steep part of this curve runs from about pH 7 to 10; methyl red’s range lies largely in the gradual buffer region below it. Because the pH rises slowly there, the two indicators do not give the same volume.',
    ],
    skill: '5A error from a mismatched indicator in a weak acid–strong base titration (Skill 2)',
  },
  {
    id: 'fl8-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A block attached to an ideal spring oscillates on a frictionless horizontal surface. Which change will increase the period of the oscillation?',
    options: [
      'Increasing the amplitude of the motion',
      'Increasing the force constant of the spring',
      'Increasing the strength of the gravitational field',
      'Increasing the mass of the block',
    ],
    correctAnswer: 3,
    explanation:
      'The period of a mass on a spring is $T = 2\\pi\\sqrt{m/k}$. A larger mass has more inertia and responds more slowly to the same restoring force, so the period increases. A larger amplitude means a greater distance to travel, but the restoring force, and with it the speed at each stage of the motion, is greater in proportion, and the period is unchanged. A stiffer spring exerts a larger restoring force at every displacement and shortens the period. Gravity does not appear in the expression: on a horizontal surface the weight is balanced by the normal force, and even for a hanging mass gravity only shifts the equilibrium position. It is the period of a pendulum, not of a mass on a spring, that depends on $g$.',
    optionExplanations: [
      'Amplitude does not affect the period of a mass on a spring. A larger amplitude means a greater distance, but the restoring force and speed increase in proportion, so the time per cycle is unchanged.',
      'A stiffer spring exerts a larger restoring force at every displacement and makes the block accelerate faster, which shortens the period. Since $T = 2\\pi\\sqrt{m/k}$, increasing $k$ decreases $T$.',
      'Gravity does not appear in $T = 2\\pi\\sqrt{m/k}$. On a horizontal surface the weight is balanced by the normal force; it is the pendulum, not the spring oscillator, whose period depends on $g$.',
      'The period of a mass on a spring is $T = 2\\pi\\sqrt{m/k}$. A larger mass has more inertia and responds more slowly to the same restoring force, so increasing $m$ lengthens the period.',
    ],
    skill: '4A period of a mass on a spring (Skill 1)',
  },
  {
    id: 'fl8-cp-a-d05',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A receptor binds a ligand at a single site with a dissociation constant, $K_d$, of 2.0 nM. When the concentration of free ligand is 6.0 nM, the fraction of the receptor molecules that have ligand bound is:',
    options: ['0.25', '0.33', '0.67', '0.75'],
    correctAnswer: 3,
    explanation:
      'For a single binding site, $K_d = [\\text{R}][\\text{L}]/[\\text{RL}]$, and the fraction of receptors occupied is $[\\text{L}]/([\\text{L}] + K_d) = 6.0/(6.0 + 2.0) = 0.75$. The value 0.25 is the fraction of receptors left unoccupied, $K_d/([\\text{L}] + K_d)$. The value 0.33 is the ratio $K_d/[\\text{L}]$, which equals the ratio of free receptor to occupied receptor and is not a fraction of the total. The value 0.67 would be the occupancy at a free ligand concentration of 4.0 nM, twice $K_d$ instead of three times $K_d$.',
    optionExplanations: [
      'A value of 0.25 is the fraction of receptors left unoccupied, $K_d/([\\text{L}] + K_d) = 2.0/8.0$. The question asks for the bound fraction, its complement.',
      'A value of 0.33 is the ratio $K_d/[\\text{L}] = 2.0/6.0$, which equals free receptor divided by occupied receptor. That is a ratio of two populations, not a fraction of the total.',
      'A value of 0.67 would be the occupancy at a free ligand concentration of 4.0 nM, twice $K_d$, giving $4/(4 + 2)$. Here the ligand is at three times $K_d$.',
      'For a single site, fractional occupancy is $[\\text{L}]/([\\text{L}] + K_d) = 6.0/(6.0 + 2.0) = 0.75$. At three times $K_d$, three-quarters of the receptors are bound.',
    ],
    skill: '5D dissociation constant and fractional occupancy (Skill 2)',
  },
  {
    id: 'fl8-cp-a-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A triacylglycerol is hydrolyzed completely by a lipase in water that is enriched in the isotope ¹⁸O. Which statement correctly describes the products and the location of the ¹⁸O label?',
    options: [
      'Glycerol and three fatty acids are formed, and the label is in the fatty acids.',
      'Glycerol and three fatty acids are formed, and the label is in the glycerol.',
      'Glycerol 3-phosphate and two fatty acids are formed, and the label is in the fatty acids.',
      'Glycerol 3-phosphate and two fatty acids are formed, and the label is in the glycerol 3-phosphate.',
    ],
    correctAnswer: 0,
    explanation:
      'A triacylglycerol is glycerol esterified with three fatty acids, so complete hydrolysis consumes three molecules of water and gives one glycerol and three fatty acids. In the hydrolysis of an ester, the oxygen of water attacks the carbonyl carbon, and the bond that breaks is the one between that carbon and the oxygen of the alcohol. Each glycerol oxygen therefore stays on glycerol, and the oxygen from water becomes part of the carboxyl group of a fatty acid. Label in glycerol would require cleavage of the bond between a glycerol carbon and its oxygen, which does not occur. Glycerol 3-phosphate and two fatty acids are the components of a phosphatidic acid, the core of a glycerophospholipid; a triacylglycerol contains no phosphate.',
    optionExplanations: [
      'A triacylglycerol is glycerol esterified with three fatty acids, so complete hydrolysis uses three waters and gives glycerol plus three fatty acids. In ester hydrolysis the water oxygen attacks the carbonyl carbon and the acyl–O bond breaks, so the ¹⁸O ends up in the fatty acid carboxyl groups.',
      'Label in glycerol would require breaking the bond between a glycerol carbon and its oxygen, which does not happen. Ester hydrolysis cleaves the carbonyl carbon–oxygen bond, so glycerol keeps its original oxygens.',
      'Glycerol 3-phosphate and two fatty acids are the components of a phosphatidic acid, the core of a glycerophospholipid. A triacylglycerol contains no phosphate, so these cannot be its hydrolysis products.',
      'This both misidentifies the products, which are glycerol and three fatty acids since triacylglycerols lack phosphate, and misplaces the label, which goes into the fatty acid carboxyl groups, not the glycerol backbone.',
    ],
    skill: '5D site of bond cleavage in triacylglycerol hydrolysis (Skill 2)',
  },
  {
    id: 'fl8-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A laboratory has an antibody against a serum protein and needs to learn whether the protein in a patient’s serum is the intact 60-kDa form or a 35-kDa fragment. Which method should be chosen, and why?',
    options: [
      'ELISA, because it separates the proteins by mass before the antibody is applied.',
      'ELISA, because it measures the amount of protein that the antibody captures in a well.',
      'Western blot, because it separates the proteins by mass before the antibody is applied.',
      'Western blot, because it detects the mRNA that encodes the protein of interest.',
    ],
    correctAnswer: 2,
    explanation:
      'In a Western blot the proteins of a sample are first separated by SDS–polyacrylamide gel electrophoresis, which sorts them by molecular mass, and are then transferred to a membrane and probed with the antibody; the position of the labeled band reveals the size of the protein that the antibody recognizes. In an ELISA the antibody captures or detects its target in the well of a plate without any prior separation, so the signal reports how much antigen is present but not its size, and an intact protein and a fragment that share the same epitope cannot be told apart. ELISA does measure the amount captured, but that does not answer the question asked. Detection of an mRNA after electrophoresis and transfer describes a Northern blot, not a Western blot.',
    optionExplanations: [
      'ELISA involves no separation step: the antibody captures its target directly in the well of a plate. Attributing size separation to ELISA confuses it with the Western blot.',
      'ELISA does measure how much antigen the antibody captures, but that reports amount, not size. An intact protein and a fragment sharing the same epitope would give indistinguishable signals.',
      'In a Western blot, proteins are first separated by SDS–PAGE according to molecular mass, then transferred to a membrane and probed with the antibody. The position of the band shows whether the recognized protein is 60 kDa or 35 kDa.',
      'A Western blot detects protein, not mRNA. Detecting an mRNA after electrophoresis and transfer describes a Northern blot, which would say nothing about the size of the protein in serum.',
    ],
    skill: '5D ELISA versus Western blot (Skill 1)',
  },
  {
    id: 'fl8-cp-a-d08',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'Which of the following acids loses CO₂ most readily when it is warmed gently?',
    options: ['CH₃CH₂CH₂COOH', 'CH₃COCH₂COOH', 'CH₃COCH₂CH₂COOH', 'CH₃COCOOH'],
    correctAnswer: 1,
    explanation:
      'A carboxylic acid with a carbonyl group at the β position, two carbons from the carboxyl carbon, loses CO₂ on gentle heating. The carbonyl oxygen accepts the acidic proton through a six-membered cyclic transition state as the C–C bond breaks, and the electron pair left behind is taken up by the carbonyl group to give an enol, which tautomerizes to a ketone; CH₃COCH₂COOH gives acetone and CO₂. Butanoic acid, CH₃CH₂CH₂COOH, has no carbonyl group to accept those electrons. In CH₃COCH₂CH₂COOH the ketone is one carbon too far away to form the six-membered arrangement or to stabilize the electrons released. In CH₃COCOOH the ketone carbon is bonded directly to the carboxyl carbon, where it cannot take up the electron pair, which is why enzymes require thiamine pyrophosphate to decarboxylate α-keto acids.',
    optionExplanations: [
      'Butanoic acid, CH₃CH₂CH₂COOH, has no carbonyl group to accept the electron pair left behind when the C–C bond breaks, so it has no low-energy route to lose CO₂ and is thermally stable.',
      'A carboxylic acid with a ketone at the β position loses CO₂ on gentle warming: the carbonyl oxygen accepts the acidic proton through a six-membered cyclic transition state as the C–C bond breaks, giving an enol that tautomerizes. CH₃COCH₂COOH gives acetone and CO₂.',
      'In CH₃COCH₂CH₂COOH the ketone is at the γ position, one carbon too far to form the six-membered cyclic transition state or to stabilize the electrons released by C–C cleavage. This γ-keto acid does not decarboxylate readily.',
      'In CH₃COCOOH the ketone carbon is bonded directly to the carboxyl carbon (an α-keto acid), where it cannot take up the electron pair through a cyclic arrangement. This is why enzymes need thiamine pyrophosphate to decarboxylate α-keto acids.',
    ],
    skill: '5D decarboxylation of a β-keto acid (Skill 1)',
  },
]
