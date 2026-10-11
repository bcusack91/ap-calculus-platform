/**
 * MCAT Full-Length Form 6 — Chemical & Physical Foundations, file A
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

export const FL6_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. PHYSICS (experiment, chart) — Surface tension, Laplace's law, surfactant
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-a-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Surface Tension and the Inflation of the Lung',
    passageText:
      'A molecule in the interior of a liquid is attracted equally in all directions by its neighbors, but a molecule at an air–liquid interface has neighbors on only one side and experiences a net pull toward the bulk of the liquid. As a result the surface behaves like a stretched elastic film that contracts to the smallest area available to it. The surface tension, $\\gamma$, is the force that this film exerts per unit length along the surface; for pure water at body temperature $\\gamma$ is about 70 mN/m.\n\nBecause a curved surface under tension presses inward on whatever it encloses, the gas inside a bubble is at a higher pressure than the liquid around it. For a spherical bubble of radius $r$ with a single air–liquid interface, the law of Laplace gives the excess pressure as $\\Delta P = 2\\gamma / r$. This is also the pressure that must be supplied to keep the bubble from collapsing.\n\nThe human lung contains several hundred million alveoli, roughly spherical air spaces about 0.1 mm in radius whose walls are coated with a thin film of water. Each alveolus is in effect a bubble that opens into an airway, and neighboring alveoli, which are not all the same size, communicate with one another through the airways they share. Cells in the alveolar wall secrete pulmonary surfactant, a mixture composed chiefly of the phospholipid dipalmitoylphosphatidylcholine, which spreads over the surface of the film. The amount of surfactant on the surface of an alveolus stays roughly constant during a breath, so its molecules are packed more densely when the alveolus is small, at the end of expiration, than when it is inflated. The surface tension of the film has been measured at about 30 mN/m at high lung volume and about 5 mN/m at low lung volume. Infants born very prematurely, before the lungs secrete adequate surfactant, often develop respiratory distress syndrome, in which alveoli collapse at the end of each expiration and must be reopened with every breath.\n\nTo measure the mechanical contribution of surfactant, investigators removed the lungs from anesthetized adult rats. Lungs in the control group were studied without further treatment. Lungs in the second group were first lavaged: they were filled through the trachea with isotonic saline and drained, five times in succession, a procedure that washes surfactant out of the alveoli. Each lung was then suspended in a humidified chamber at 37 °C, inflated with air to a transpulmonary pressure of 30 cm H₂O, and allowed to deflate in steps of 5 cm H₂O. (Transpulmonary pressure is the pressure in the airways minus the pressure at the outer surface of the lung; 1 cm H₂O is about 98 Pa.) At each step the volume of air remaining in the lung was recorded once it had become steady. Mean volumes for the two groups are plotted in Figure 1.\n\nThe ease with which a lung can be inflated is expressed as its compliance, the change in volume per unit change in transpulmonary pressure, $\\Delta V / \\Delta P$. A lung of low compliance demands a larger pressure swing, and therefore more work from the respiratory muscles, for every breath of a given size. The investigators noted that lavage might alter a lung in ways other than by removing surfactant, for example by injuring the elastic tissue of the alveolar walls, which resists stretching whether or not an air–liquid interface is present.',
    chart: {
      title: 'Figure 1. Volume of air in excised rat lungs during stepwise deflation from 30 cm H₂O (mean, n = 6 per group)',
      kind: 'line',
      xLabel: 'Transpulmonary pressure',
      xUnit: 'cm H₂O',
      yLabel: 'Lung volume',
      yUnit: 'mL',
      xValues: [0, 5, 10, 15, 20, 25, 30],
      yValues: [1.5, 5.5, 7.8, 9.0, 9.6, 9.9, 10.0],
      seriesLabel: 'Control',
      comparisonSeries: [{ label: 'Lavaged', yValues: [0.5, 1.0, 2.0, 4.0, 6.5, 8.5, 9.5] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, between transpulmonary pressures of 0 and 5 cm H₂O the compliance of the control lungs is approximately how many times that of the lavaged lungs?',
        options: ['3 times', '5.5 times', '8 times', '16 times'],
        correctAnswer: 2,
        explanation:
          'Compliance is $\\Delta V / \\Delta P$. Over this interval the control lungs change by $5.5 - 1.5 = 4.0$ mL and the lavaged lungs by $1.0 - 0.5 = 0.5$ mL for the same 5 cm H₂O, giving 0.8 and 0.1 mL per cm H₂O, a ratio of 8. The value 3 is the ratio of the two volumes at zero pressure and the value 5.5 is the ratio of the two volumes at 5 cm H₂O; each compares volumes rather than changes in volume. A ratio of 16 does not follow from any pair of intervals on the two curves.',
        optionExplanations: [
          'A ratio of 3 is the ratio of the two volumes at 0 cm H₂O (1.5 mL to 0.5 mL). Compliance compares changes in volume over the interval, not the volumes themselves at one endpoint.',
          'A ratio of 5.5 is the ratio of the two volumes at 5 cm H₂O (5.5 mL to 1.0 mL). It again compares absolute volumes at a single pressure rather than the slopes $\\Delta V / \\Delta P$ over the interval.',
          'Compliance is $\\Delta V / \\Delta P$. From 0 to 5 cm H₂O the control lungs gain $5.5 - 1.5 = 4.0$ mL and the lavaged lungs gain $1.0 - 0.5 = 0.5$ mL over the same pressure step, so the ratio is $4.0 / 0.5 = 8$.',
          'A factor of 16 does not correspond to any pair of volume changes on the two curves over this interval; it would require the control lungs to gain 8 mL while the lavaged lungs gained 0.5 mL, which Figure 1 does not show.',
        ],
        skill: '4B compliance from a pressure–volume figure (Skill 4)',
      },
      {
        question: 'In a lavaged lung, two alveoli with radii of 0.05 mm and 0.10 mm are lined with films of equal surface tension and open into the same airway. Which outcome is most likely?',
        options: [
          'Air moves from the smaller alveolus into the larger one, and the smaller alveolus collapses.',
          'Air moves from the larger alveolus into the smaller one until the two radii become equal.',
          'Air moves from the larger alveolus into the smaller one, and the larger alveolus collapses.',
          'No air moves between the alveoli, because equal surface tensions produce equal pressures.',
        ],
        correctAnswer: 0,
        explanation:
          'With $\\gamma$ equal, $\\Delta P = 2\\gamma / r$ is twice as large in the alveolus of half the radius, and gas flows from high pressure to low, so the smaller alveolus empties into the larger. The process feeds on itself: as the smaller alveolus shrinks its pressure rises further, so it collapses rather than settling at a new size. Flow from the larger to the smaller alveolus, whether it is imagined to equalize the radii or to collapse the larger one, would require the larger alveolus to hold the higher pressure, the reverse of what the law of Laplace gives. Equal surface tensions produce equal pressures only when the radii are also equal.',
        optionExplanations: [
          'With equal surface tension, $\\Delta P = 2\\gamma / r$ is twice as large in the alveolus with half the radius, so gas flows from the smaller, higher-pressure alveolus into the larger one. Shrinking raises the small alveolus’s pressure further, so it collapses rather than stabilizing.',
          'Flow from the larger into the smaller alveolus would require the larger one to hold the higher pressure, the reverse of Laplace’s law. Equalizing the radii is also impossible here, because any size difference grows rather than shrinks when surface tension is uniform.',
          'This reverses the direction of flow. The larger alveolus has the lower pressure by $2\\gamma / r$, so it receives air rather than giving it up; it is the smaller alveolus, not the larger, that collapses.',
          'Equal surface tensions give equal pressures only if the radii are also equal. Here the radii differ by a factor of two, so the pressures differ by a factor of two and air must move between the connected alveoli.',
        ],
        skill: '4B law of Laplace and the instability of connected bubbles (Skill 2)',
      },
      {
        question: 'During expiration the radius of an alveolus in a control lung decreases to half its initial value while the surface tension of its film falls from 30 mN/m to 5 mN/m. Over this interval the pressure required to hold the alveolus open:',
        options: [
          'increases to twice its initial value.',
          'decreases to one-twelfth of its initial value.',
          'decreases to one-sixth of its initial value.',
          'decreases to one-third of its initial value.',
        ],
        correctAnswer: 3,
        explanation:
          'The pressure is $2\\gamma / r$. The surface tension falls to one-sixth of its starting value and the radius to one-half, so the pressure changes by a factor of $(1/6) \\div (1/2) = 1/3$; the fall in surface tension more than offsets the smaller radius, which is how surfactant keeps small alveoli from emptying. A doubling is what would happen if the surface tension stayed fixed while the radius halved. One-sixth accounts for the surface tension but ignores the change in radius. One-twelfth multiplies the two factors, as if pressure were proportional to the radius instead of inversely proportional to it.',
        optionExplanations: [
          'A doubling is what would happen if the radius halved while the surface tension stayed fixed at its initial value. The stem says surface tension falls from 30 to 5 mN/m, which more than offsets the smaller radius.',
          'One-twelfth multiplies the factor 1/6 from surface tension by the factor 1/2 from radius, as if pressure were proportional to the radius. Laplace’s law has $r$ in the denominator, so halving the radius raises the pressure, not lowers it.',
          'One-sixth accounts for the surface tension falling to one-sixth of its starting value but ignores the radius. Because the radius also halves, the pressure $2\\gamma / r$ is doubled by that change, giving a net factor of 1/3, not 1/6.',
          'The pressure is $2\\gamma / r$. Surface tension falls to 1/6 of its initial value and the radius to 1/2, so the pressure changes by $(1/6) \\div (1/2) = 1/3$. The surfactant effect outweighs the shrinking radius, which is how small alveoli are kept open.',
        ],
        skill: '4B proportional reasoning with the law of Laplace (Skill 2)',
      },
      {
        question: 'To separate the effect of surface forces from any injury to lung tissue, the investigators repeat the experiment with both groups of lungs inflated with saline instead of air, which abolishes the air–liquid interface. If lavage did not injure the tissue, which result is expected at a transpulmonary pressure of 10 cm H₂O?',
        options: [
          'The control lungs hold about 7.8 mL, and the lavaged lungs hold about 2.0 mL.',
          'Both groups hold the same volume, and that volume is greater than 7.8 mL.',
          'Both groups hold the same volume, and that volume is close to 2.0 mL.',
          'Both groups hold the same volume, and that volume lies between 2.0 mL and 7.8 mL.',
        ],
        correctAnswer: 1,
        explanation:
          'With no air–liquid interface there is no surface tension in either group, so the curve of each lung reflects only the elasticity of its tissue; if the tissue is uninjured, the two groups must behave identically. Surface tension opposes inflation even in the control lungs, where surfactant lowers it but does not remove it, so a lung freed of surface tension altogether holds more at a given pressure than the 7.8 mL that the air-filled control lungs hold at 10 cm H₂O. Volumes of 7.8 mL and 2.0 mL would simply repeat the air-filled result, which is what would be expected only if the interface had not been removed. A shared volume near 2.0 mL, or anywhere below the control value, would mean that removing surface tension made the lungs harder to inflate.',
        optionExplanations: [
          'Volumes of 7.8 mL and 2.0 mL simply repeat the air-filled result from Figure 1. Those values reflect surface tension at an air–liquid interface, which saline filling abolishes, so the difference between the groups should disappear if the tissue is uninjured.',
          'With no air–liquid interface there is no surface tension in either group, so each curve reflects only tissue elasticity, and uninjured tissue behaves identically in both. Because surface tension opposed inflation even in control lungs, removing it entirely lets each lung hold more than 7.8 mL at 10 cm H₂O.',
          'A shared volume near 2.0 mL would mean that removing surface tension made both groups as hard to inflate as the surfactant-depleted lungs were. Removing an inflation-opposing force cannot lower the volume held at a given pressure; it raises it.',
          'Any shared volume below 7.8 mL would mean that abolishing surface tension made the control lungs harder to inflate than they were with air. Surface tension always opposes inflation, so its removal must increase the volume held, placing the saline curve above 7.8 mL.',
        ],
        skill: '4B predicting the result of a control experiment (Skill 3)',
      },
      {
        question: 'Which statement best explains how the phospholipid in pulmonary surfactant lowers the surface tension of the alveolar film?',
        options: [
          'Its head groups form hydrogen bonds with surface water that are stronger than those between water molecules.',
          'Its molecules dissolve in the bulk of the film, where they break hydrogen bonds between interior water molecules.',
          'Its molecules collect at the interface, where they take the place of water molecules that attract one another strongly.',
          'Its fatty acyl tails extend into the water film, where they attract water molecules more strongly than air does.',
        ],
        correctAnswer: 2,
        explanation:
          'Surface tension arises from the strong, unbalanced attractions among water molecules at the interface. An amphipathic phospholipid gathers at the surface with its polar head in the water and its nonpolar tails in the air, so the surface is populated by molecules that attract one another far more weakly than water molecules do, and the tension falls. Stronger hydrogen bonding to surface water would increase cohesion at the surface, not reduce it. Surface tension is a property of the interface, so a solute acting on interior water would have little effect, and a phospholipid does not dissolve as single molecules in bulk water in any case. The nonpolar tails are excluded from water and point toward the air; they do not attract water strongly.',
        optionExplanations: [
          'Stronger hydrogen bonding to surface water would increase cohesion among surface molecules, which is the very source of surface tension. That would raise the tension, not lower it, and polar head groups do not out-bond water to water in any case.',
          'Surface tension is a property of the interface, so a solute acting on interior water would have little effect. A phospholipid is amphipathic and does not dissolve as single molecules in bulk water; it is driven to the surface instead.',
          'Surface tension comes from the strong, unbalanced attractions among water molecules at the interface. An amphipathic phospholipid gathers at the surface with polar heads in the water and nonpolar tails toward the air, replacing strongly self-attracting water molecules with weakly interacting ones, so the tension falls.',
          'Fatty acyl tails are nonpolar and are excluded from water; they point toward the air, not into the film. They do not attract water strongly, and if anything the hydrophobic effect pushes them out of the aqueous phase entirely.',
        ],
        skill: '5B intermolecular forces and surface-active molecules (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY (experiment, table) — Freezing-point osmometry, osmolar gap
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-a-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Freezing-Point Osmometry and the Osmolar Gap',
    passageText:
      'The osmolality of a solution is the total concentration of dissolved particles, expressed in osmoles (moles of particles) per kilogram of water, without regard to what the particles are. A solute that dissociates contributes more than one particle per formula unit, and the van ’t Hoff factor, $i$, is the number of moles of particles actually present in solution for each mole of solute dissolved. Properties that depend only on the concentration of solute particles are called colligative. One of them is the depression of the freezing point: a solution freezes below the freezing point of the pure solvent by an amount $\\Delta T_f = i K_f m$, where $m$ is the molality of the solute and $K_f$ is a constant of the solvent. For water $K_f$ is 1.86 °C·kg/mol, so an aqueous solution containing 1.00 osmol/kg freezes at −1.86 °C.\n\nClinical laboratories use this relationship to measure the osmolality of serum. In a freezing-point osmometer a small sample is cooled several degrees below its freezing point without solidifying and is then disturbed with a vibrating wire. Ice forms at once, the heat released warms the sample, and the temperature settles at a plateau at which ice and solution are in equilibrium; the plateau temperature is recorded as the freezing point.\n\nSerum osmolality can also be estimated from routine chemistry results, because nearly all of the dissolved particles in normal serum are accounted for by sodium salts, glucose, and urea:\n\ncalculated osmolality (mOsm/kg) = 2 × [Na⁺] + [glucose] + [urea]\n\nwith each concentration in mmol/L. The osmolar gap is the measured osmolality minus the calculated osmolality. In healthy people the gap is smaller than 10 mOsm/kg. A larger gap means that the serum holds an appreciable concentration of some solute that the calculation leaves out, and in an emergency department it raises the suspicion that the patient has swallowed a low-molar-mass alcohol such as methanol, ethylene glycol, or isopropanol.\n\nA hospital laboratory evaluating a new freezing-point osmometer first measured four aqueous standards, each containing 0.100 mol of a single solute per kilogram of water (Table 1). It then analyzed serum from three patients who had been brought to the emergency department in a confused state (Table 2). Blood from each patient was collected in a plain glass tube containing no additives and was allowed to clot before the serum was separated by centrifugation.\n\nThe laboratory also owns a vapor-pressure osmometer, which relies on a different colligative property. A sample is sealed in a small chamber, and the instrument senses the total pressure of vapor in the air space above the liquid and reports how far the dissolved particles have lowered it below the value for pure water. Methanol, which boils at 65 °C, was later identified in the serum of Patient 2.',
    figure:
      '**Table 1. Freezing points of aqueous standards (each 0.100 mol solute per kg water)**\n\n| Standard | Solute | Freezing point (°C) |\n|----------|--------|---------------------|\n| A | Glucose | −0.186 |\n| B | NaCl | −0.348 |\n| C | CaCl₂ | −0.489 |\n| D | Acetic acid | −0.188 |\n\n**Table 2. Serum chemistry results (mmol/L) and serum freezing points of three patients**\n\n| Patient | Na⁺ | Glucose | Urea | Freezing point (°C) |\n|---------|-----|---------|------|---------------------|\n| 1 | 140 | 5 | 5 | −0.539 |\n| 2 | 136 | 5 | 13 | −0.651 |\n| 3 | 125 | 40 | 5 | −0.558 |',
    questions: [
      {
        question: 'Based on Table 2 and the passage, the osmolar gap of Patient 2 is closest to:',
        options: ['18 mOsm/kg', '60 mOsm/kg', '78 mOsm/kg', '196 mOsm/kg'],
        correctAnswer: 1,
        explanation:
          'A freezing point of −0.651 °C corresponds to a measured osmolality of $0.651 / 1.86 = 0.350$ osmol/kg, or 350 mOsm/kg. The calculated osmolality is $2(136) + 5 + 13 = 290$ mOsm/kg, so the gap is 60 mOsm/kg. The value 78 subtracts only the doubled sodium term and leaves out glucose and urea. The value 196 fails to double the sodium concentration. The value 18 is simply the sum of the glucose and urea concentrations, not a difference between measured and calculated osmolality.',
        optionExplanations: [
          'A gap of 18 mOsm/kg is just the sum of the glucose and urea concentrations (5 + 13). It is not a difference between measured and calculated osmolality and does not use the freezing point at all.',
          'Measured osmolality is $0.651 / 1.86 = 0.350$ osmol/kg = 350 mOsm/kg. Calculated osmolality is $2(136) + 5 + 13 = 290$ mOsm/kg. The gap is $350 - 290 = 60$ mOsm/kg, well above the normal ceiling of 10.',
          'A gap of 78 results from subtracting only the doubled sodium term, $350 - 272$, and omitting the glucose and urea contributions from the calculated osmolality. Those terms belong in the formula and shrink the gap to 60.',
          'A gap of 196 comes from failing to double the sodium concentration, $350 - (136 + 5 + 13)$. The formula multiplies sodium by 2 to count its counter-anions, so this value grossly overstates the unexplained solute.',
        ],
        skill: '5A osmolality from freezing-point data (Skill 4)',
      },
      {
        question: 'If the serum of Patient 2 were analyzed on the vapor-pressure osmometer, the reported osmolality would most likely be:',
        options: [
          'higher than the freezing-point result, because methanol lowers the vapor pressure of water more than a salt does.',
          'higher than the freezing-point result, because methanol boils at a lower temperature than water does.',
          'equal to the freezing-point result, because both instruments respond only to the number of particles.',
          'lower than the freezing-point result, because methanol molecules add to the vapor above the sample.',
        ],
        correctAnswer: 3,
        explanation:
          'The vapor-pressure instrument infers the particle concentration from how far the total vapor pressure above the sample has fallen. A nonvolatile solute lowers that pressure, but methanol is more volatile than water and enters the vapor itself, offsetting the reduction, so the instrument registers little or none of the methanol and reports a lower osmolality than the freezing-point method, in which every dissolved particle counts whether or not it is volatile. Nothing makes one methanol molecule lower the vapor pressure of water more than one particle of any other solute; that is the meaning of a colligative property. A low boiling point is the reason the reading is too low, not too high. The two instruments would agree only if every solute were nonvolatile.',
        optionExplanations: [
          'One methanol molecule cannot lower water’s vapor pressure more than one particle of any other solute; a colligative effect depends only on particle number. Moreover, methanol’s volatility makes the reading too low, not too high.',
          'Methanol’s low boiling point is exactly why the vapor-pressure reading comes out too low, not too high: the volatile methanol contributes vapor of its own that masks the lowering of water’s vapor pressure.',
          'The two instruments would agree only if every solute were nonvolatile. Methanol is volatile and enters the vapor phase, so the vapor-pressure osmometer undercounts it while the freezing-point instrument counts every dissolved particle regardless of volatility.',
          'The vapor-pressure instrument infers particle concentration from how far total vapor pressure above the sample has fallen. Methanol is more volatile than water and adds its own vapor, offsetting that reduction, so the instrument registers little of the methanol and reports a lower osmolality than the freezing-point method.',
        ],
        skill: '5A vapor-pressure lowering and volatile solutes (Skill 2)',
      },
      {
        question: 'Based on Table 1, an aqueous solution containing 0.050 mol/kg NaCl together with 0.050 mol/kg glucose would be expected to freeze at approximately:',
        options: ['−0.186 °C', '−0.267 °C', '−0.348 °C', '−0.534 °C'],
        correctAnswer: 1,
        explanation:
          'Freezing-point depression is proportional to the concentration of particles, so each solute at half the concentration of its standard contributes half of that standard’s depression: $0.348 / 2 + 0.186 / 2 = 0.174 + 0.093 = 0.267$ °C. A freezing point of −0.186 °C treats the mixture as 0.100 mol/kg of a solute that does not dissociate, and −0.348 °C treats all of the solute as NaCl. The value −0.534 °C adds the two full depressions, as if each solute were present at 0.100 mol/kg.',
        optionExplanations: [
          'A freezing point of −0.186 °C treats the mixture as 0.100 mol/kg of a nondissociating solute, like the glucose standard alone. It ignores that half of the solute is NaCl, which contributes nearly two particles per formula unit.',
          'Freezing-point depression is additive and proportional to particle concentration, so each solute at half its standard concentration contributes half that standard’s depression: $0.348 / 2 + 0.186 / 2 = 0.174 + 0.093 = 0.267$ °C below zero.',
          'A freezing point of −0.348 °C treats all 0.100 mol/kg of solute as NaCl. Only 0.050 mol/kg is NaCl; the other 0.050 mol/kg is glucose, which depresses the freezing point about half as much per mole because it does not dissociate.',
          'A freezing point of −0.534 °C adds the two full depressions from Table 1, as if each solute were present at 0.100 mol/kg. Each is present at only 0.050 mol/kg, so each contributes only half of its standard’s depression.',
        ],
        skill: '5A additivity of colligative effects (Skill 2)',
      },
      {
        question: 'The blood samples were collected in tubes containing no additives. If the tubes had instead contained the anticoagulant potassium oxalate and the resulting plasma had been analyzed, the most likely effect on the results would have been:',
        options: [
          'a falsely large osmolar gap, because the measured osmolality would include the added salt.',
          'a falsely small osmolar gap, because the calculated osmolality would include the added salt.',
          'an unchanged osmolar gap, because ionic solutes have no effect on the freezing point.',
          'an unchanged osmolar gap, because the added salt would raise both osmolalities equally.',
        ],
        correctAnswer: 0,
        explanation:
          'Potassium oxalate dissolves in the sample and adds potassium and oxalate ions, which depress the freezing point like any other particles, so the measured osmolality rises. The calculated osmolality is built only from sodium, glucose, and urea, none of which the additive changes, so the difference between the two grows and could be mistaken for evidence of a toxic alcohol. The calculated value cannot absorb the added salt, because neither of its ions appears in the formula, which rules out both a smaller gap and an equal rise in the two values. Ionic solutes certainly depress the freezing point, as the NaCl and CaCl₂ standards show.',
        optionExplanations: [
          'Potassium oxalate adds K⁺ and oxalate ions, which depress the freezing point like any other particles and raise the measured osmolality. The calculated value uses only sodium, glucose, and urea, which the additive does not change, so the gap grows and could mimic a toxic alcohol.',
          'The calculated osmolality cannot include the added salt, because neither potassium nor oxalate appears in the formula $2[\\text{Na}^+] + [\\text{glucose}] + [\\text{urea}]$. The additive raises only the measured value, so the gap becomes larger, not smaller.',
          'Ionic solutes certainly depress the freezing point; the NaCl and CaCl₂ standards in Table 1 freeze lower than the glucose standard at the same molality. Added ions therefore change the measured osmolality and the gap.',
          'The added salt raises only the measured osmolality. The calculated osmolality is built from sodium, glucose, and urea alone, none of which the additive changes, so the two values do not rise equally and the gap widens.',
        ],
        skill: '5A sample handling as a source of artifact (Skill 3)',
      },
      {
        question: 'In the formula for calculated osmolality, the sodium concentration is multiplied by 2 because:',
        options: [
          'sodium salts in serum dissociate only about halfway, so the measured value must be doubled.',
          'each sodium ion depresses the freezing point twice as much as an uncharged particle does.',
          'each sodium ion is accompanied by an anion, which counts as a separate particle.',
          'each sodium ion binds water molecules, which halves the amount of solvent that is free.',
        ],
        correctAnswer: 2,
        explanation:
          'A solution is electrically neutral, so every sodium ion in serum is balanced by an anion, chiefly chloride or bicarbonate, and each of those anions is an independent dissolved particle; doubling the sodium concentration is a shorthand for counting sodium together with its counterions. Colligative effects depend on the number of particles and not on their charge, so a sodium ion depresses the freezing point no more than a glucose molecule does. Incomplete dissociation would reduce the particle count, which would call for a factor smaller than 2, not a doubling. Hydration of ions does not remove half of the solvent, and the formula makes no correction for it.',
        optionExplanations: [
          'Incomplete dissociation would reduce the particle count and call for a factor smaller than 2, not a doubling. Sodium salts in serum are essentially fully dissociated, and the factor of 2 accounts for the anion partner, not for partial dissociation.',
          'Colligative effects depend on the number of dissolved particles, not their charge. A sodium ion depresses the freezing point no more than a glucose molecule does; the doubling counts a second particle, the accompanying anion, not a stronger effect per ion.',
          'A solution is electrically neutral, so every sodium ion is balanced by an anion, chiefly chloride or bicarbonate, and each anion is an independent dissolved particle. Doubling the sodium concentration is shorthand for counting sodium together with its counterions.',
          'Hydration of ions does not remove half of the solvent, and the formula makes no correction for bound water. Osmolality is per kilogram of water in the sample, and the factor of 2 reflects counterion particles, not solvent availability.',
        ],
        skill: '5A electrolytes and particle count in solution (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOCHEMISTRY (information) — Tautomers, photodimers, intercalation, alkylation, depurination
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-a-03',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Chemical Routes to Damage in the Bases of DNA',
    passageText:
      'The information in DNA is carried by the pattern of hydrogen-bond donors and acceptors that each base presents to its partner on the opposite strand, and that pattern depends on which tautomer of the base is present. Tautomers are constitutional isomers that interconvert by moving a hydrogen atom and shifting a double bond. Guanine and thymine exist almost entirely in the keto form, in which a ring carbon bears a carbonyl oxygen and the neighboring ring nitrogen bears a hydrogen. Adenine and cytosine exist almost entirely in the amino form, with an –NH₂ group attached to the ring. In perhaps one molecule in ten thousand at any instant, however, the hydrogen has shifted: the carbonyl has become a hydroxyl group (the enol form of guanine or thymine), or the –NH₂ group has become =NH (the imino form of adenine or cytosine). Each such shift turns a hydrogen-bond acceptor into a donor and a nearby donor into an acceptor. A base in its rare form therefore presents the pairing pattern of the other base of its own class: enol guanine, a purine, is read as though it were adenine, and imino cytosine, a pyrimidine, is read as though it were thymine. If the rare form is present in a template strand at the moment a polymerase copies it, the wrong nucleotide is incorporated, although the template base itself soon returns to its common form.\n\nUltraviolet light of wavelengths near 260 nm is absorbed by the conjugated π systems of the bases. When two thymines lie next to each other on the same strand, an absorbed photon can join them covalently: the C5=C6 double bond of one ring adds across the C5=C6 double bond of the other, creating a four-membered cyclobutane ring that locks the two bases together. The resulting dimer bends the helix and stalls DNA polymerase.\n\nIntercalating agents such as ethidium and the acridine dyes are flat, polycyclic aromatic cations with roughly the dimensions of a base pair. They slip between adjacent base pairs and are held there by the same stacking interactions that hold neighboring base pairs to each other. Each bound molecule pushes the base pairs on either side of it apart by an additional 0.34 nm, and during replication the distortion can cause a nucleotide to be inserted or skipped.\n\nAlkylating agents transfer a carbon group to an atom of a base. In double-stranded DNA the most reactive position is N7 of guanine, whose lone pair lies in the plane of the ring, takes no part in base pairing, and is exposed in the major groove. The nitrogen mustards have the general structure R–N(CH₂CH₂Cl)₂. In water the amine nitrogen of the drug attacks the chlorine-bearing carbon of one of its own arms, closing a strained three-membered ring called an aziridinium cation; N7 of a guanine then opens this ring. Because the drug has two arms, the sequence can be repeated at a second guanine, and when the two guanines lie on opposite strands the strands can no longer be separated.\n\nThe most easily broken bond in DNA is not in the backbone at all. It is the N-glycosidic bond that joins C1′ of deoxyribose to N9 of a purine. Its hydrolysis, called depurination, releases the free base and leaves a sugar with no base attached. The reaction is much faster in acidic solution, in which ring nitrogens of the purine become protonated. Guanines that have been alkylated at N7 are also lost many times faster than unmodified guanines.',
    questions: [
      {
        question: 'An adenine in a template strand is in its imino form at the instant it is copied, and the resulting duplex is then replicated once more. In one of the descendant duplexes, the site that originally held adenine paired with thymine now holds, in the same strand order:',
        options: ['guanine paired with cytosine.', 'cytosine paired with guanine.', 'thymine paired with adenine.', 'adenine paired with cytosine.'],
        correctAnswer: 0,
        explanation:
          'By the pattern described in the passage, a rare tautomer is read as the other base of its own class, so imino adenine, a purine, is read as guanine and cytosine is incorporated opposite it. In the next round that cytosine serves as a template for guanine, so one descendant duplex carries guanine paired with cytosine where adenine had been paired with thymine: a purine has replaced a purine, and a pyrimidine a pyrimidine. Cytosine paired with guanine, or thymine paired with adenine, would place a pyrimidine where the purine had been, which tautomerization does not produce. Adenine paired with cytosine is the mismatch present immediately after the first round of copying, not a pair that survives a further round of replication.',
        optionExplanations: [
          'Imino adenine, a purine, is read as guanine, so cytosine is incorporated opposite it. In the next round that cytosine templates guanine, leaving one descendant duplex with guanine paired with cytosine where adenine–thymine had been: a purine replaces a purine and a pyrimidine replaces a pyrimidine.',
          'Cytosine paired with guanine places a pyrimidine where the purine adenine was. Tautomer-driven mispairing substitutes a base for the other base of its own class, so the strand that held adenine ends up holding guanine, not cytosine.',
          'Thymine paired with adenine places a pyrimidine in the position that held a purine and a purine where thymine was. A tautomeric shift of adenine causes it to be read as guanine, not as thymine, so this swap of classes does not occur.',
          'Adenine paired with cytosine is the mismatch present immediately after the first round of copying, while the template adenine is still in place. After the adenine returns to its amino form and the duplex replicates again, this mismatch resolves into normal pairs; it does not persist.',
        ],
        skill: '5D base tautomers and mispairing (Skill 2)',
      },
      {
        question: 'Formation of a cyclobutane dimer changes C5 and C6 of each participating thymine from:',
        options: [
          '$sp^3$ to $sp^2$ hybridization, and the dimer absorbs 260 nm light more strongly than two free thymines.',
          '$sp^3$ to $sp^2$ hybridization, and the dimer absorbs 260 nm light less strongly than two free thymines.',
          '$sp^2$ to $sp^3$ hybridization, and the dimer absorbs 260 nm light more strongly than two free thymines.',
          '$sp^2$ to $sp^3$ hybridization, and the dimer absorbs 260 nm light less strongly than two free thymines.',
        ],
        correctAnswer: 3,
        explanation:
          'Before the reaction C5 and C6 are joined by a double bond and each is $sp^2$ hybridized; in the cyclobutane ring each of them has four single bonds and is $sp^3$. Removing the C5=C6 double bond breaks the conjugation that links it to the ring carbonyls, and because absorption near 260 nm depends on that conjugated π system, the dimer absorbs less strongly there. The two options that begin with $sp^3$ carbons reverse the direction of the change, since an atom in a double bond cannot be $sp^3$. Stronger absorption would require a more extended conjugated system, whereas the dimer has a shorter one.',
        optionExplanations: [
          'An atom joined by a double bond is $sp^2$, not $sp^3$, so starting from $sp^3$ reverses the direction of the change. Also, the dimer absorbs less at 260 nm because conjugation is lost, so stronger absorption is doubly wrong.',
          'This reverses the hybridization change: C5 and C6 begin $sp^2$ because they share a double bond, and become $sp^3$ when that bond is replaced by two new single bonds in the cyclobutane ring. The absorbance direction here is correct, but the hybridization is backward.',
          'The hybridization change from $sp^2$ to $sp^3$ is right, but absorption near 260 nm depends on the conjugated π system. Removing the C5=C6 double bond breaks conjugation with the ring carbonyls, so the dimer absorbs less strongly, not more.',
          'Before reaction, C5 and C6 share a double bond and are $sp^2$; in the cyclobutane ring each has four single bonds and is $sp^3$. Losing the C5=C6 double bond shortens the conjugated π system responsible for 260 nm absorption, so the dimer absorbs less strongly there.',
        ],
        skill: '5B hybridization and conjugation (Skill 1)',
      },
      {
        question: 'The step in which a nitrogen mustard forms its aziridinium cation is best classified as:',
        options: [
          'a bimolecular elimination in which nitrogen removes a proton as chloride ion departs.',
          'an intramolecular nucleophilic substitution in which nitrogen displaces chloride.',
          'a unimolecular substitution in which chloride departs to leave a primary carbocation.',
          'an electrophilic addition in which nitrogen adds across a carbon–carbon double bond.',
        ],
        correctAnswer: 1,
        explanation:
          'The lone pair on the amine nitrogen attacks a carbon bearing a good leaving group within the same molecule and chloride is expelled as the new C–N bond forms, which is a nucleophilic substitution carried out intramolecularly; the product is a cation because nitrogen now has four bonds. An elimination would produce a carbon–carbon double bond, not a ring. A unimolecular pathway would require a primary carbocation, which is too unstable to form, and backside attack at an unhindered primary carbon is the favored route. The drug contains no carbon–carbon double bond for an addition reaction to occur across.',
        optionExplanations: [
          'An elimination would produce a carbon–carbon double bond by removing a proton from the carbon adjacent to the one losing chloride. The passage describes a new ring forming via a C–N bond, which is substitution, not elimination.',
          'The amine nitrogen’s lone pair attacks a chlorine-bearing carbon within the same molecule, expelling chloride as the new C–N bond forms. That is a nucleophilic substitution carried out intramolecularly; the product is a cation because nitrogen now bears four bonds.',
          'A unimolecular pathway would require chloride to leave first and generate a primary carbocation, which is far too unstable to form. At an unhindered primary carbon, direct backside attack by the nitrogen nucleophile is the favored route.',
          'The nitrogen mustard R–N(CH₂CH₂Cl)₂ contains no carbon–carbon double bond, so there is nothing for nitrogen to add across. The reaction displaces a chloride leaving group from a saturated carbon.',
        ],
        skill: '5D nucleophilic substitution at a primary carbon (Skill 1)',
      },
      {
        question: 'The most likely reason that both acid and alkylation at N7 accelerate the loss of guanine from DNA is that each:',
        options: [
          'adds steric bulk to the purine, which strains the bond between the base and the sugar.',
          'withdraws electron density from water, which makes it a much stronger nucleophile.',
          'places positive charge on the purine ring, which makes the base a better leaving group.',
          'neutralizes the negative charge on the phosphates, which exposes the sugar to water.',
        ],
        correctAnswer: 2,
        explanation:
          'Protonating a ring nitrogen and attaching an alkyl group to N7 both leave the purine ring carrying a positive charge. When the bond from C1′ to N9 breaks, its electron pair stays with the base, and a positively charged ring accepts that pair far more readily than a neutral one, so the base departs more easily. A proton adds essentially no bulk, so steric strain cannot be what the two treatments share. Withdrawing electron density from water would make it a weaker nucleophile, not a stronger one. Alkylation at N7 does nothing to the charge on the phosphate groups, and the backbone is not the site of this reaction.',
        optionExplanations: [
          'A proton adds essentially no steric bulk, so steric strain cannot be the shared mechanism by which acid and N7 alkylation both accelerate depurination. The common factor is electronic, a positive charge on the ring, not size.',
          'Withdrawing electron density from water would make it a weaker nucleophile, not a stronger one. Neither protonation of the purine nor alkylation at N7 acts on water; both modify the base itself.',
          'Protonating a ring nitrogen and alkylating N7 both leave the purine ring positively charged. When the C1′–N9 bond breaks, its electron pair stays with the base, and a cationic ring accepts that pair far more readily than a neutral one, so the base is a better leaving group.',
          'Alkylation at N7 does nothing to the negative charge on the phosphate groups, and the backbone is not where depurination occurs. The bond that breaks is the N-glycosidic bond between C1′ of the sugar and N9 of the base.',
        ],
        skill: '5D leaving-group ability in glycosidic bond hydrolysis (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. PHYSICS (information) — Pulse oximetry: two-wavelength light absorption
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-a-04',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Reading Arterial Oxygen Saturation with Two Wavelengths of Light',
    passageText:
      'A pulse oximeter estimates the percentage of arterial hemoglobin that is carrying oxygen without a blood sample. Its probe, clipped across a fingertip or an earlobe, holds two light-emitting diodes on one side and a single photodetector on the other. One diode emits red light at a wavelength of 660 nm and the other emits near-infrared light at 940 nm. The diodes are switched on alternately several hundred times each second, with a dark interval after each pair of flashes during which the detector records the room light that reaches it.\n\nThe method rests on the Beer–Lambert law. When light of incident intensity $I_0$ passes through a solution and emerges with intensity $I$, the absorbance $A = \\log_{10}(I_0/I)$ equals $\\varepsilon c \\ell$, where $\\varepsilon$ is the molar absorptivity of the solute at that wavelength, $c$ is its concentration, and $\\ell$ is the path length. When several absorbing substances are present, their absorbances add. Oxyhemoglobin (HbO₂) and deoxyhemoglobin (Hb) have different absorption spectra: at 660 nm the molar absorptivity of Hb is about ten times that of HbO₂, whereas at 940 nm HbO₂ is the stronger absorber by a factor of nearly two.\n\nLight crossing a finger is absorbed by skin, bone, and venous blood as well as by arterial blood, and only the last is of interest. The instrument isolates it by means of the pulse. With each heartbeat the small arteries swell slightly and add a little arterial blood to the light path, so the transmitted intensity at each wavelength consists of a large steady component and a small ripple, typically 1–2% of the total, that rises and falls with the heartbeat. At each wavelength the device divides the size of the ripple by the steady component, and it then takes the ratio of the two results:\n\n$R = \\dfrac{(\\text{ripple}/\\text{steady})_{660}}{(\\text{ripple}/\\text{steady})_{940}}$\n\nA calibration curve stored in the device converts $R$ into the displayed saturation, SpO₂. The curve was obtained empirically, by recording $R$ in healthy volunteers who breathed oxygen-poor gas mixtures while their arterial blood was sampled and analyzed directly. On a typical curve $R = 0.4$ corresponds to a saturation of 100% and $R = 1.0$ to a saturation of 85%, and the points between and beyond these values lie close to a straight line.\n\nThe calculation assumes that arterial blood contains only two light-absorbing forms of hemoglobin. Two other forms violate that assumption. Carboxyhemoglobin (COHb), produced when carbon monoxide occupies the oxygen-binding site, absorbs 660 nm light almost exactly as HbO₂ does and absorbs very little at 940 nm. Methemoglobin (MetHb), in which the heme iron has been oxidized to Fe³⁺ and can no longer bind oxygen, absorbs strongly, and about equally, at both wavelengths. Laboratory instruments called CO-oximeters measure all four forms of hemoglobin in a drawn blood sample. Readings can also be disturbed by anything on the surface of the finger that sharply reduces the light reaching the detector at one wavelength but not at the other, including some colors of fingernail polish.',
    questions: [
      {
        question: 'Which fingernail polish would be expected to interfere most with the measurement made at 660 nm?',
        options: [
          'Red polish, because a red pigment absorbs red light most strongly',
          'Blue polish, because a blue pigment absorbs red light strongly',
          'Red polish, because a red pigment emits its own light near 660 nm',
          'Blue polish, because a blue pigment emits its own light near 940 nm',
        ],
        correctAnswer: 1,
        explanation:
          'The color of a pigment is the color of the light it does not absorb. A blue polish looks blue because it returns short-wavelength visible light and absorbs the long-wavelength end of the visible spectrum, which includes 660 nm, so it cuts the red signal sharply while leaving the infrared signal largely intact. A red pigment absorbs blue and green light and passes red light, so it removes little of the 660 nm beam. Ordinary pigments are colored because of selective absorption and reflection; they do not emit light of their own, so neither emission-based option describes how a polish could act.',
        optionExplanations: [
          'A red pigment looks red because it reflects red light and absorbs blue and green. It therefore removes little of the 660 nm beam and would interfere less with the red channel, not most.',
          'A pigment’s color is the light it does not absorb. Blue polish returns short-wavelength light and absorbs the long-wavelength end of the visible spectrum, including 660 nm, so it sharply cuts the red signal while leaving the 940 nm infrared signal largely intact.',
          'Ordinary pigments are colored by selective absorption and reflection; they do not emit light of their own. A red pigment passes 660 nm light rather than generating it, so this describes neither how polish behaves nor why it would interfere.',
          'Pigments do not emit light, and 940 nm is the infrared channel, not the 660 nm channel the question asks about. Blue polish interferes at 660 nm because it absorbs red light, not because of any emission near 940 nm.',
        ],
        skill: '4D color, absorption, and reflection of visible light (Skill 1)',
      },
      {
        question: 'As the fraction of MetHb in arterial blood becomes very large, the displayed SpO₂ would be expected to approach:',
        options: ['0%', '50%', '85%', '100%'],
        correctAnswer: 2,
        explanation:
          'MetHb absorbs about equally at the two wavelengths, so when it dominates the pulsatile absorbance the ripple-to-steady quotient becomes nearly the same at 660 nm and at 940 nm and $R$ approaches 1.0, which the calibration curve converts to 85%, whatever the true oxygen saturation may be. A reading near 100% would require $R$ near 0.4, meaning much weaker pulsatile absorption of red than of infrared light, which is the signature of HbO₂ or COHb. Readings of 50% or 0% would require $R$ well above 1, meaning red absorption far greater than infrared absorption, which is the signature of Hb.',
        optionExplanations: [
          'A reading of 0% would require $R$ far above 1, meaning pulsatile red absorption much greater than infrared absorption, which is the signature of deoxyhemoglobin. MetHb absorbs equally at both wavelengths and drives $R$ toward 1.0 instead.',
          'A reading of 50% would also require $R$ well above 1.0, with red absorption substantially exceeding infrared absorption. MetHb’s equal absorbance at both wavelengths pushes the ratio toward 1.0, which maps to 85% rather than 50%.',
          'MetHb absorbs about equally at 660 and 940 nm, so when it dominates the pulsatile absorbance the ripple-to-steady quotient becomes nearly identical at both wavelengths and $R$ approaches 1.0. The calibration curve converts $R = 1.0$ to 85%, regardless of true oxygen saturation.',
          'A reading near 100% requires $R$ near 0.4, meaning much weaker pulsatile absorption of red than of infrared light. That is the signature of HbO₂ or COHb, not of MetHb, which absorbs the two wavelengths about equally.',
        ],
        skill: '4D ratio of absorbances at two wavelengths (Skill 2)',
      },
      {
        question: 'An arterial blood sample from a patient rescued from a house fire is found by CO-oximetry to contain 70% HbO₂, 28% COHb, and 2% Hb. A pulse oximeter on this patient’s finger most likely displays a value closest to:',
        options: ['28%', '70%', '72%', '98%'],
        correctAnswer: 3,
        explanation:
          'At 660 nm COHb absorbs almost exactly as HbO₂ does, so the red channel, which is the one that reports the presence of Hb, sees blood in which only 2% of the hemoglobin absorbs red light strongly. The device therefore counts COHb largely as though it were HbO₂ and displays a value in the nineties, close to $70 + 28 = 98$%, concealing the fact that more than a quarter of the hemoglobin carries no oxygen. A reading of 70% would require the device to tell COHb apart from HbO₂, which two wavelengths cannot do. The value 72% treats COHb as if it were simply missing from the total, and 28% is the COHb fraction itself.',
        optionExplanations: [
          'A value of 28% is the COHb fraction itself. The pulse oximeter cannot see COHb as distinct from HbO₂, so it never reports that fraction; it folds it into the apparent saturation.',
          'A reading of 70% would require the device to distinguish COHb from HbO₂. At 660 nm the two absorb almost identically and COHb absorbs very little at 940 nm, so two wavelengths cannot separate them and the true 70% is hidden.',
          'A value of 72% treats COHb as if it were simply absent from the total, computing HbO₂ as 70 of 72. The device does not exclude COHb; it counts it alongside HbO₂ because their red absorbances match, inflating the reading further.',
          'At 660 nm COHb absorbs almost exactly as HbO₂ does, so the red channel, which detects Hb, sees only 2% strongly absorbing hemoglobin. The device counts COHb as though it were HbO₂ and displays about $70 + 28 = 98$%, concealing the carbon monoxide poisoning.',
        ],
        skill: '4D limits of a two-wavelength absorbance measurement (Skill 2)',
      },
      {
        question: 'A manufacturer wishes to build a pulse oximeter that reports the fractions of HbO₂, Hb, COHb, and MetHb separately. Which change to the design described in the passage is necessary?',
        options: [
          'Adding diodes that emit at wavelengths other than 660 and 940 nm',
          'Raising the intensity of the light emitted by the two existing diodes',
          'Placing a second photodetector beside the existing one in the probe',
          'Switching the two existing diodes on and off at a higher frequency',
        ],
        correctAnswer: 0,
        explanation:
          'Because absorbances add, the pulsatile absorbance at each wavelength is one equation in the unknown concentrations of the absorbing species, and two wavelengths give only enough independent information to apportion the hemoglobin between two forms. Distinguishing four forms requires measurements at additional wavelengths at which their absorptivities differ. Brighter diodes change both the ripple and the steady component in proportion and add no new information. A second detector or faster switching would record the same two absorbances again; neither supplies an absorbance at a new wavelength.',
        optionExplanations: [
          'Because absorbances add, each wavelength gives one equation in the unknown concentrations of the absorbing species. Two wavelengths can apportion hemoglobin between only two forms; resolving four forms requires additional wavelengths at which their absorptivities differ.',
          'Brighter diodes raise the ripple and the steady component in proportion, so the ratio at each wavelength is unchanged. Intensity adds no new independent measurement and cannot separate species that absorb identically at the existing wavelengths.',
          'A second photodetector would record the same two absorbances again at 660 and 940 nm. It duplicates existing information rather than adding an equation at a new wavelength, so it cannot distinguish COHb or MetHb from the other forms.',
          'Faster switching only increases how often the same two absorbances are sampled. It improves time resolution but supplies no absorbance at a new wavelength, which is what distinguishing four hemoglobin species requires.',
        ],
        skill: '4D instrument design for a multicomponent absorbance measurement (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. ORGANIC CHEMISTRY (experiment, table) — Recrystallization and melting point
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-a-05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Purifying and Identifying a Solid Carboxylic Acid',
    passageText:
      'Recrystallization purifies a solid by exploiting the dependence of solubility on temperature. The impure solid is dissolved in the smallest volume of boiling solvent that will take it up, any material that refuses to dissolve is removed by filtering the solution while it is hot, and the filtrate is allowed to cool slowly, first to room temperature and then in an ice bath. As the solution cools it can no longer hold all of the desired compound, which separates as crystals; impurities present in small amounts never reach their own solubility limits and stay behind in the liquid. The crystals are collected by vacuum filtration, rinsed with a little ice-cold solvent, and dried.\n\nPurity is judged from the melting range, the interval between the temperature at which the first droplet of liquid appears and the temperature at which the last crystal disappears. A pure compound typically melts within a range of 1–2 °C; a contaminated sample begins to melt at a lower temperature and melts over a wider range. The same behavior can be used to test whether two samples are the same substance. In a mixed melting point determination, the two samples are ground together into a fine, intimate powder and the melting range of the mixture is measured.\n\nA student prepared Compound X, an aromatic carboxylic acid, and isolated 5.00 g of a tan crude solid. To choose a recrystallization solvent she looked up the solubility of pure X in four liquids at 0 °C and at the boiling point of each (Table 1). She recrystallized the crude product from toluene, set aside a few milligrams of the crystals for a melting range, and then recrystallized the remainder from toluene a second time. Her instructor told her that X was one of two known compounds, P and Q, whose melting ranges, measured on authentic samples in the same apparatus, were identical. She therefore prepared 1:1 mixtures (by mass) of twice-recrystallized X with each authentic sample and measured their melting ranges (Table 2).\n\nIn a variation called mixed-solvent recrystallization, which is used when no single liquid is suitable, the solid is dissolved in a hot solvent in which it is very soluble, and a second liquid in which it is nearly insoluble is added dropwise until the hot solution just turns cloudy. A drop of the first solvent is added to clear the solution, which is then cooled as usual. The method works only if the two liquids are miscible with each other in all proportions.\n\nThe student also noted that the hot toluene solution of the crude product was pale yellow, whereas the crystals obtained from it were nearly white, and that the liquid drained from the first crop of crystals left a brown, gummy residue when the toluene was allowed to evaporate. A portion of this residue melted between 85 °C and 110 °C.',
    figure:
      '**Table 1. Solubility of Compound X (g per 100 mL of solvent)**\n\n| Solvent | Boiling point (°C) | Solubility at 0 °C | Solubility at boiling point |\n|---------|--------------------|--------------------|-----------------------------|\n| Water | 100 | 0.04 | 0.60 |\n| Ethanol | 78 | 45 | 80 |\n| Toluene | 111 | 1.0 | 25 |\n| Hexane | 69 | 0.02 | 0.30 |\n\n**Table 2. Masses and melting ranges**\n\n| Sample | Mass (g) | Melting range (°C) |\n|--------|----------|--------------------|\n| Crude X | 5.00 | 119–128 |\n| X after one recrystallization | 4.10 | 129–133 |\n| X after two recrystallizations | 3.50 | 133–134 |\n| Authentic P | — | 133–134 |\n| Authentic Q | — | 133–134 |\n| X (recrystallized twice) + P, 1:1 | — | 133–134 |\n| X (recrystallized twice) + Q, 1:1 | — | 108–121 |',
    questions: [
      {
        question: 'Suppose that 5.00 g of pure X is dissolved in the minimum volume of boiling toluene and the solution is then cooled to 0 °C. Based on Table 1, the greatest mass of crystals that could be collected is:',
        options: ['0.20 g', '4.00 g', '4.80 g', '5.00 g'],
        correctAnswer: 2,
        explanation:
          'Boiling toluene dissolves 25 g of X per 100 mL, so 5.00 g requires $5.00 / 25 \\times 100 = 20$ mL. At 0 °C toluene holds 1.0 g per 100 mL, so 20 mL keeps 0.20 g in solution and at most $5.00 - 0.20 = 4.80$ g can crystallize. The value 0.20 g is the mass that stays dissolved, not the mass recovered. The value 4.00 g subtracts the full 1.0 g that 100 mL would retain, although only 20 mL of solvent is present. Recovering all 5.00 g would require X to be completely insoluble in cold toluene, which Table 1 shows it is not.',
        optionExplanations: [
          'A mass of 0.20 g is what stays dissolved in the 20 mL of toluene at 0 °C (1.0 g per 100 mL × 20 mL), not the mass recovered. The recoverable crystals are the remainder, 4.80 g.',
          'A recovery of 4.00 g subtracts the full 1.0 g that 100 mL of cold toluene would retain. Only 20 mL of solvent is used to dissolve 5.00 g at the boiling point, so only 0.20 g remains dissolved.',
          'Boiling toluene dissolves 25 g per 100 mL, so 5.00 g needs $5.00 / 25 \\times 100 = 20$ mL. At 0 °C that 20 mL still holds $1.0 \\times 0.20 = 0.20$ g, so at most $5.00 - 0.20 = 4.80$ g can crystallize.',
          'Recovering all 5.00 g would require X to be completely insoluble in cold toluene. Table 1 shows a solubility of 1.0 g per 100 mL at 0 °C, so some X necessarily remains in the mother liquor.',
        ],
        skill: '5C recovery calculated from solubility data (Skill 4)',
      },
      {
        question: 'Based on Table 1 and the passage, which pair of liquids would be most suitable for a mixed-solvent recrystallization of X?',
        options: ['Ethanol and water', 'Toluene and water', 'Hexane and water', 'Ethanol and toluene'],
        correctAnswer: 0,
        explanation:
          'The method needs one liquid that dissolves X very well, a second in which X is nearly insoluble, and complete miscibility between the two. X is highly soluble in ethanol and almost insoluble in water, and ethanol and water mix in all proportions because both form hydrogen bonds. Toluene and water are immiscible, as are hexane and water, so each of those pairs would separate into two layers; in addition, X dissolves poorly in both hexane and water, leaving nothing to dissolve it in the first place. Ethanol and toluene are miscible, but hot toluene dissolves X well, so adding it to a hot ethanol solution would not bring X to the point of crystallizing.',
        optionExplanations: [
          'X is highly soluble in ethanol (45–80 g/100 mL) and nearly insoluble in water (0.04–0.60 g/100 mL), and the two liquids are miscible in all proportions because both hydrogen bond. This satisfies every requirement for mixed-solvent recrystallization.',
          'Toluene and water are immiscible and would separate into two layers, violating the passage’s requirement that the pair mix in all proportions. The method would fail before any crystallization could occur.',
          'Hexane and water are immiscible, so this pair fails the miscibility requirement. In addition, X is nearly insoluble in both liquids, leaving no solvent in the pair that could dissolve the compound in the first place.',
          'Ethanol and toluene are miscible, but hot toluene dissolves X well (25 g/100 mL at its boiling point). Adding it to a hot ethanol solution would not reduce X’s solubility enough to bring the solution to the cloud point.',
        ],
        skill: '5C solvent polarity, miscibility, and solubility (Skill 2)',
      },
      {
        question: 'Which finding in Table 2 identifies Compound X?',
        options: [
          'X and authentic P melt over the same range when measured separately, so X is P.',
          'X and authentic Q melt over the same range when measured separately, so X is Q.',
          'The mixture of X with Q melts over the widest range of all the samples, so X is Q.',
          'The mixture of X with P melts over the same range as either alone, so X is P.',
        ],
        correctAnswer: 3,
        explanation:
          'If two samples are the same compound, mixing them changes nothing, and the mixture melts just as each sample does alone; if they are different compounds, each is a contaminant of the other, and the mixture melts lower and over a wider range. The X–P mixture melts at 133–134 °C, unchanged, whereas the X–Q mixture melts at 108–121 °C, so X is P. Melting ranges measured separately cannot settle the question, because P and Q melt over the same range and X matches both equally well. The broad, depressed range of the X–Q mixture shows that X and Q are different substances, which is the opposite of what that option concludes.',
        optionExplanations: [
          'P and Q melt over the same range (133–134 °C), so matching X’s melting range to P alone cannot distinguish P from Q. Melting ranges measured separately are consistent with X being either compound.',
          'Q and P have identical melting ranges, so X matching Q when measured separately is equally consistent with X being P. The separate measurements cannot settle the identity; only the mixed melting points can.',
          'The broad, depressed range of the X–Q mixture (108–121 °C) shows that X and Q are different substances, because each contaminates the other. Concluding that X is Q from this result is the opposite of what the data indicate.',
          'If two samples are the same compound, mixing them changes nothing and the mixture melts as each does alone. The X–P mixture melts at 133–134 °C, unchanged, while the X–Q mixture melts lower and broader, so X is P.',
        ],
        skill: '5C mixed melting point as a test of identity (Skill 2)',
      },
      {
        question: 'The crude solid begins to melt at a lower temperature than purified X because molecules of the impurities:',
        options: [
          'form covalent bonds to X that are weaker than the bonds within a single molecule of X.',
          'disrupt the regular packing of X in the crystal, weakening the attractions that hold it together.',
          'absorb part of the heat supplied, lowering the temperature that the thermometer registers.',
          'raise the vapor pressure of the solid, allowing it to boil before it has finished melting.',
        ],
        correctAnswer: 1,
        explanation:
          'Melting requires overcoming the intermolecular attractions that hold molecules in an ordered lattice. Foreign molecules do not fit the lattice of X, so they interrupt its regular packing and reduce the attractions between neighboring molecules, and less thermal energy, meaning a lower temperature, is needed for the solid to begin to liquefy. Melting breaks no covalent bonds, and impurities mixed into a solid are not covalently attached to it. A contaminant that absorbed heat would slow the warming of the sample but would not change the temperature at which the lattice gives way. Melting is a transition from solid to liquid, and neither boiling nor the vapor pressure of the solid enters into it.',
        optionExplanations: [
          'Melting breaks no covalent bonds, and impurities mixed into a solid are not covalently attached to it. Melting-point depression arises from disrupted intermolecular packing, not from weak covalent links between impurity and X.',
          'Melting requires overcoming the intermolecular attractions that hold molecules in an ordered lattice. Foreign molecules do not fit the lattice of X, so they interrupt regular packing and weaken attractions between neighbors; less thermal energy, a lower temperature, is then needed to begin liquefying.',
          'A contaminant that absorbed heat would slow the warming of the sample but would not change the temperature at which the lattice gives way. Melting point depends on the strength of the lattice, not on how quickly heat is supplied.',
          'Melting is a transition from solid to liquid; neither boiling nor the vapor pressure of the solid enters into it. A sample does not boil before melting, and impurities act by disturbing the crystal lattice.',
        ],
        skill: '5B intermolecular forces and melting-point depression (Skill 1)',
      },
    ],
  },
]

export const FL6_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl6-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A gaseous sodium atom releases energy when it gains an electron, but a gaseous magnesium atom does not. The best explanation is that the electron added to magnesium must:',
    options: [
      'enter the 3s subshell, where it is repelled by two electrons rather than by one.',
      'enter the n = 4 shell, because the n = 3 shell of magnesium is completely filled.',
      'pair with an electron of the same spin, which lowers the stability of the 3s subshell.',
      'enter a 3p orbital, which lies higher in energy than the half-filled 3s orbital of sodium.',
    ],
    correctAnswer: 3,
    explanation:
      'Sodium has the configuration [Ne]3s¹, so an added electron completes the 3s subshell, where it is held strongly enough for energy to be released. Magnesium is [Ne]3s², with the 3s subshell already full, so an added electron must occupy a 3p orbital, which is higher in energy and well shielded by the 3s pair; the anion is not stable relative to the neutral atom. A third electron cannot enter the 3s subshell at all, since an orbital holds at most two. The n = 3 shell of magnesium is far from filled, because its 3p and 3d subshells are empty. Two electrons that share an orbital must have opposite spins, so pairing with an electron of the same spin does not occur.',
    optionExplanations: [
      'A third electron cannot enter the 3s subshell, because an orbital holds at most two electrons and magnesium’s 3s is already full with [Ne]3s². The added electron is forced into a higher 3p orbital.',
      'The n = 3 shell of magnesium is far from filled; only the 3s subshell is complete, and the 3p and 3d subshells are empty. There is no need for the electron to go to n = 4.',
      'Two electrons that share an orbital must have opposite spins by the Pauli exclusion principle, so pairing with an electron of the same spin does not occur. This describes an impossible configuration rather than the real reason.',
      'Sodium is [Ne]3s¹, so an added electron completes the 3s subshell and is held firmly enough to release energy. Magnesium is [Ne]3s² with 3s full, so the added electron must occupy a higher-energy, well-shielded 3p orbital, and the anion is not stable.',
    ],
    skill: '4E electron affinity and electron configuration (Skill 1)',
  },
  {
    id: 'fl6-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'The rate constant of a reaction is reported as $4.0 \\times 10^{-3}$ L·mol⁻¹·s⁻¹. What is the overall order of the reaction?',
    options: ['Zero', 'First', 'Second', 'Third'],
    correctAnswer: 2,
    explanation:
      'A rate has units of mol·L⁻¹·s⁻¹, and for a reaction of overall order $n$ the rate equals $k$ times concentration raised to the power $n$, so $k$ has units of (mol/L)$^{1-n}$ per second. Units of L·mol⁻¹·s⁻¹ correspond to $1 - n = -1$, so the reaction is second order overall. A zero-order rate constant has the units of the rate itself, mol·L⁻¹·s⁻¹. A first-order rate constant has units of s⁻¹, with no concentration term. A third-order rate constant has units of L²·mol⁻²·s⁻¹.',
    optionExplanations: [
      'A zero-order rate constant has the units of the rate itself, mol·L⁻¹·s⁻¹, because rate = $k$ with no concentration term. The given units contain L·mol⁻¹, which is the inverse of that.',
      'A first-order rate constant has units of s⁻¹ with no concentration term at all, since rate = $k[A]$ and the concentration units cancel. The given constant carries L·mol⁻¹, so the order is higher than one.',
      'Rate has units mol·L⁻¹·s⁻¹, and rate = $k[\\text{conc}]^n$, so $k$ has units (mol/L)$^{1-n}$·s⁻¹. Units of L·mol⁻¹·s⁻¹ correspond to $1 - n = -1$, so $n = 2$: second order overall.',
      'A third-order rate constant has units L²·mol⁻²·s⁻¹, because two concentration factors must be cancelled to give the rate. The given constant has only one factor of L·mol⁻¹, indicating second order.',
    ],
    skill: '5E units of the rate constant and reaction order (Skill 1)',
  },
  {
    id: 'fl6-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Separate 0.10 M aqueous solutions of NH₄Cl, KBr, and NaCN are prepared at 25 °C. Which ranking lists the solutions in order of increasing pH?',
    options: ['NH₄Cl < KBr < NaCN', 'NaCN < KBr < NH₄Cl', 'KBr < NH₄Cl < NaCN', 'NH₄Cl < NaCN < KBr'],
    correctAnswer: 0,
    explanation:
      'The ammonium ion is the conjugate acid of a weak base and donates a proton to water, so NH₄Cl gives an acidic solution. K⁺ and Br⁻ are the ions of a strong base and a strong acid and do not react with water, so KBr is neutral. Cyanide is the conjugate base of the weak acid HCN and removes a proton from water, so NaCN gives a basic solution. The ranking that begins with NaCN reverses the acidic and basic salts. The ranking that begins with KBr treats a neutral salt as more acidic than ammonium chloride, and the ranking that ends with KBr treats it as more basic than a cyanide solution.',
    optionExplanations: [
      'Ammonium is the conjugate acid of weak base NH₃ and donates a proton to water, giving an acidic solution. K⁺ and Br⁻ come from a strong base and strong acid and do not hydrolyze, so KBr is neutral. Cyanide is the conjugate base of weak acid HCN, so NaCN is basic.',
      'This ranking reverses the acidic and basic salts. NaCN is basic because cyanide accepts a proton from water, and NH₄Cl is acidic because ammonium donates one, so NaCN cannot have the lowest pH.',
      'This places neutral KBr below acidic NH₄Cl. Neither K⁺ nor Br⁻ reacts with water, so KBr has pH about 7, while ammonium hydrolysis gives NH₄Cl a pH below 7. The neutral salt must sit in the middle.',
      'This places neutral KBr above basic NaCN. Cyanide hydrolyzes to produce hydroxide, raising the pH well above 7, whereas KBr stays near 7, so NaCN must have the highest pH of the three.',
    ],
    skill: '5A hydrolysis of salts and solution pH (Skill 1)',
  },
  {
    id: 'fl6-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A 60-kg passenger stands on a scale in an elevator that is moving upward and slowing down at 2.0 m/s². Taking $g = 10$ m/s², the scale reads:',
    options: ['120 N', '480 N', '600 N', '720 N'],
    correctAnswer: 1,
    explanation:
      'An elevator that moves upward while slowing has a downward acceleration. Taking upward as positive, $N - mg = ma$ with $a = -2.0$ m/s², so $N = m(g + a) = 60(10 - 2.0) = 480$ N, and the scale reads less than the passenger’s true weight. The value 600 N is the reading at rest or at constant velocity. The value 720 N would apply if the acceleration were upward, as when the elevator speeds up while rising; it confuses the direction of the velocity with the direction of the acceleration. The value 120 N is the net force on the passenger, $ma$, not the force exerted by the scale.',
    optionExplanations: [
      'A reading of 120 N is the net force on the passenger, $ma = 60 \\times 2.0$, not the normal force the scale exerts. The scale reads the normal force, which is $m(g + a)$ with the acceleration taken as negative.',
      'An elevator moving upward while slowing has a downward acceleration. Taking up as positive, $N - mg = ma$ with $a = -2.0$ m/s², so $N = 60(10 - 2.0) = 480$ N; the scale reads less than true weight.',
      'A reading of 600 N is the passenger’s true weight, $mg$, which the scale shows only at rest or at constant velocity. Here the elevator is accelerating downward, so the normal force is reduced below 600 N.',
      'A reading of 720 N would require an upward acceleration, as when the elevator speeds up while rising. This confuses the direction of the velocity (upward) with the direction of the acceleration (downward, since the elevator is slowing).',
    ],
    skill: '4A Newton’s second law and apparent weight (Skill 2)',
  },
  {
    id: 'fl6-cp-a-d05',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A glycoprotein is treated with an enzyme that removes only N-linked oligosaccharides, yet some carbohydrate remains covalently attached to the protein. The remaining sugars are most likely bonded to the side chain of:',
    options: ['asparagine.', 'glutamine.', 'lysine.', 'threonine.'],
    correctAnswer: 3,
    explanation:
      'Protein-bound carbohydrate is attached in two ways: N-linked chains are joined to the amide nitrogen of asparagine, and O-linked chains are joined to the hydroxyl oxygen of serine or threonine. Sugars that survive an enzyme specific for N-linked chains must therefore be O-linked, and of the residues listed only threonine has a side-chain hydroxyl group. Asparagine is the attachment site of the N-linked chains that the enzyme removed. Glutamine also has a side-chain amide, but it is not the residue used for N-linked glycosylation. The amino group of lysine is not a site of enzymatic attachment of oligosaccharide chains.',
    optionExplanations: [
      'Asparagine is the attachment site for N-linked oligosaccharides, which are exactly the chains the enzyme removed. Sugars that remain must be attached elsewhere, through an O-linkage.',
      'Glutamine also has a side-chain amide, but it is not the residue used for N-linked glycosylation, and it has no hydroxyl for O-linkage. No standard oligosaccharide attachment occurs at glutamine.',
      'The ε-amino group of lysine is not a site of enzymatic oligosaccharide attachment. O-linked chains require a side-chain hydroxyl, which lysine lacks.',
      'Protein-bound carbohydrate is either N-linked to asparagine’s amide nitrogen or O-linked to the hydroxyl of serine or threonine. Sugars surviving an N-linkage-specific enzyme must be O-linked, and threonine is the only listed residue with a side-chain hydroxyl.',
    ],
    skill: '5D glycoproteins and glycosidic linkage to amino acid side chains (Skill 1)',
  },
  {
    id: 'fl6-cp-a-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'At 25 °C the equilibrium constant for the conversion of metabolite S into metabolite P is $1.0 \\times 10^{3}$. Given that $2.3RT = 5.7$ kJ/mol at this temperature, the standard free energy change for the conversion is closest to:',
    options: ['−17 kJ/mol', '−5.7 kJ/mol', '+5.7 kJ/mol', '+17 kJ/mol'],
    correctAnswer: 0,
    explanation:
      'The standard free energy change is $-RT \\ln K = -2.3RT \\log K$. With $\\log K = 3$, this is $-(5.7)(3) = -17$ kJ/mol; an equilibrium constant greater than 1 means that products are favored, so the sign must be negative. The value +17 kJ/mol has the right magnitude and the wrong sign and would correspond to an equilibrium constant of $10^{-3}$. The values ±5.7 kJ/mol correspond to equilibrium constants of 10 and 0.1, which is what results if the logarithm is taken as 1 instead of 3.',
    optionExplanations: [
      'Standard free energy is $-RT \\ln K = -2.3RT \\log K$. With $\\log K = 3$ and $2.3RT = 5.7$ kJ/mol, $\\Delta G° = -(5.7)(3) = -17$ kJ/mol. An equilibrium constant above 1 favors products, so the sign is negative.',
      'A value of −5.7 kJ/mol corresponds to $K = 10$, taking $\\log K$ as 1 instead of 3. The sign is right, but the magnitude omits the factor of 3 from the exponent of $10^3$.',
      'A value of +5.7 kJ/mol corresponds to $K = 0.1$. It both uses $\\log K = 1$ instead of 3 and carries the wrong sign; a $K$ greater than 1 cannot give a positive standard free energy change.',
      'A value of +17 kJ/mol has the right magnitude but the wrong sign; it would correspond to $K = 10^{-3}$, a reaction favoring reactants. Since $K = 10^3$ favors products, $\\Delta G°$ must be negative.',
    ],
    skill: '5E standard free energy from an equilibrium constant (Skill 2)',
  },
  {
    id: 'fl6-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Arachidonic acid is a 20-carbon fatty acid whose four cis double bonds begin at carbons 5, 8, 11, and 14, numbered from the carboxyl carbon. It is classified as an:',
    options: ['ω-3 fatty acid.', 'ω-5 fatty acid.', 'ω-6 fatty acid.', 'ω-9 fatty acid.'],
    correctAnswer: 2,
    explanation:
      'The ω designation counts from the methyl end of the chain to the first double bond encountered. The double bond nearest the methyl end begins at carbon 14 counted from the carboxyl end, which is carbon $20 - 14 = 6$ counted from the methyl carbon, so arachidonic acid is an ω-6 fatty acid. The label ω-5 mistakes the position of the first double bond from the carboxyl end for the ω number. An ω-3 acid of this length would need a double bond beginning at carbon 17, and an ω-9 acid would have its last double bond beginning at carbon 11.',
    optionExplanations: [
      'An ω-3 acid of 20 carbons would need its methyl-end double bond to begin at carbon 17 from the carboxyl end (carbon 3 from the methyl end). Arachidonic acid’s last double bond begins at carbon 14.',
      'The label ω-5 mistakes the position of the first double bond counted from the carboxyl end (carbon 5) for the ω number. The ω designation counts from the methyl end, not the carboxyl end.',
      'The ω number counts from the methyl end to the first double bond. The double bond nearest the methyl end begins at carbon 14 from the carboxyl, which is carbon $20 - 14 = 6$ from the methyl carbon, so arachidonic acid is ω-6.',
      'An ω-9 acid of 20 carbons would have its methyl-end double bond beginning at carbon 11 from the carboxyl end. Arachidonic acid has a double bond at 11, but a later one at 14, which is what sets the ω number.',
    ],
    skill: '5D fatty acid nomenclature (Skill 1)',
  },
  {
    id: 'fl6-cp-a-d08',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'A sample of (R)-3-methyl-2-pentanone slowly loses its optical activity when it is dissolved in dilute aqueous acid, although the compound recovered is still 3-methyl-2-pentanone. The best explanation is that:',
    options: [
      'water adds to the carbonyl group and creates a second stereocenter at C2.',
      'the enol formed toward C3 is planar at that carbon and is reprotonated on either face.',
      'protonation of the carbonyl oxygen makes the two faces of the ketone identical.',
      'the methyl group on C3 migrates to C2 by way of a carbocation intermediate.',
    ],
    correctAnswer: 1,
    explanation:
      'The stereocenter, C3, is an α-carbon that bears a hydrogen. Acid catalyzes conversion of the ketone into its enol, in which C3 is $sp^2$ hybridized and planar; when the enol returns to the keto form, a proton can add to either face of C3 with equal probability, giving equal amounts of the R and S ketones, a racemic mixture with no net optical rotation. Hydration of the carbonyl is reversible and does not disturb the configuration at C3, and the recovered material is the ketone, not a hydrate. Protonating the carbonyl oxygen leaves the four different groups on C3 in place, so by itself it cannot erase the stereocenter. Migration of the methyl group would give a constitutional isomer, not the same ketone.',
    optionExplanations: [
      'Hydration of the carbonyl is reversible and does not disturb the configuration at C3, the existing stereocenter. The recovered material is the ketone itself, not a hydrate, so a transient second stereocenter cannot explain the lost rotation.',
      'C3 is an α-carbon bearing a hydrogen. Acid catalyzes enol formation, in which C3 becomes $sp^2$ and planar; reprotonation on either face returns the ketone as equal amounts of R and S, a racemic mixture with no net optical rotation.',
      'Protonating the carbonyl oxygen leaves the four different groups on C3 in place, so by itself it cannot erase the stereocenter. The ketone’s faces becoming equivalent is irrelevant; racemization requires C3 to become planar.',
      'Migration of the methyl group from C3 to C2 would give a constitutional isomer, not 3-methyl-2-pentanone. The stem says the recovered compound is unchanged, which rules out a rearrangement.',
    ],
    skill: '5D keto–enol tautomerization and racemization at an α-carbon (Skill 2)',
  },
]
