/**
 * MCAT Full-Length Form 7 — Chemical & Physical Foundations, file A
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

export const FL7_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. PHYSICS (experiment, chart) — Squat jump on a force plate
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-a-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Reading a Vertical Jump from a Force Plate',
    passageText:
      'The height of a standing vertical jump is widely used as a measure of lower-limb power in athletes and of physical function in older adults. Instead of marking how high a jumper can reach, many laboratories record the jump on a force plate, a rigid platform resting on sensors that report, as a function of time, the vertical force pressing on its upper surface. The plate pushes up on the jumper with a force of the same magnitude, so the record gives the ground reaction force, $F$, that acts on the jumper at each instant. During a jump performed in place, the only other external force on the jumper is body weight, $mg$.\n\nThe motion of the jumper’s center of mass can be reconstructed from this record. At any instant the net upward force on the jumper is $F - mg$. By the impulse–momentum theorem, the area lying between the force record and a horizontal line drawn at body weight, accumulated from the start of the movement, equals the upward momentum that the center of mass has acquired. Once the feet leave the plate the jumper is a projectile, and the distance through which the center of mass rises after take-off depends only on the take-off speed.\n\nIn one study, volunteers performed squat jumps. Each volunteer lowered into a crouch with the knees bent to 90°, held that position without moving for 2 s, and then jumped as high as possible without first dipping downward. The hands were kept on the hips throughout. The plate was sampled 1000 times per second. Figure 1 shows the record for one 80-kg volunteer at intervals of 0.05 s, beginning at the instant the push started ($t = 0$) and ending at take-off, when the force fell to zero. The investigators took $g$ to be 10 m/s².\n\nTwo derived quantities were reported for each jump. The first was jump height, defined as the rise of the center of mass after take-off and calculated from the take-off speed given by the impulse method. The second was mechanical power. Average power was calculated as the total mechanical energy, kinetic plus gravitational potential, gained by the center of mass between the start of the push and take-off, divided by the duration of the push.\n\nFor comparison, the investigators also estimated jump height by a simpler flight-time method, which requires only the length of the interval during which the plate reads zero. The method treats the center of mass as leaving and returning at the same height, so that exactly half of the flight time is spent rising. The investigators cautioned that this holds only if the jumper’s posture at landing matches the posture at take-off, when the hips, knees, and ankles are fully extended.\n\nSome of the volunteers repeated the test with a countermovement jump, in which the jumper starts upright, dips rapidly, and reverses into the push without pausing. For every one of these volunteers the countermovement jump was higher than the squat jump.',
    chart: {
      title: 'Figure 1. Vertical ground reaction force during the push phase of a squat jump by an 80-kg volunteer',
      kind: 'line',
      xLabel: 'Time from start of push',
      xUnit: 's',
      yLabel: 'Ground reaction force',
      yUnit: 'N',
      xValues: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
      yValues: [800, 1100, 1400, 1600, 1800, 2000, 1300, 0],
      seriesLabel: 'Squat jump',
    },
    questions: [
      {
        question: 'Based on Figure 1, the upward acceleration of the volunteer’s center of mass at the instant of peak force is closest to:',
        options: ['10 m/s²', '15 m/s²', '25 m/s²', '35 m/s²'],
        correctAnswer: 1,
        explanation:
          'At its peak the plate force is 2000 N, and the volunteer’s weight is $(80)(10) = 800$ N, so the net upward force is 1200 N and the acceleration is $1200 / 80 = 15$ m/s². The value 25 m/s² divides the whole plate reading by the mass, ignoring the weight that the plate force must first balance. The value 35 m/s² adds the weight to the plate force instead of subtracting it. The value 10 m/s² is the acceleration at 0.15 s, when the plate reads 1600 N, not the acceleration at the peak.',
        optionExplanations: [
          'This is the acceleration at 0.15 s, when the plate reads 1600 N: $(1600 - 800)/80 = 10$ m/s². At the peak the plate reads 2000 N, so the net force and acceleration are larger.',
          'At the peak the plate reads 2000 N while body weight is $(80)(10) = 800$ N. The net upward force is $2000 - 800 = 1200$ N, so $a = 1200/80 = 15$ m/s².',
          'This divides the entire plate reading by the mass, $2000/80 = 25$ m/s², and forgets that 800 N of the plate force only balances the volunteer’s weight. Only the excess over body weight accelerates the center of mass.',
          'This adds the weight to the plate force, $(2000 + 800)/80 = 35$ m/s². Weight acts downward while the plate pushes upward, so the two forces oppose each other and the weight must be subtracted.',
        ],
        skill: '4A Newton’s second law applied to a force–time record (Skill 4)',
      },
      {
        question: 'Based on Figure 1, the upward speed of the volunteer’s center of mass is greatest:',
        options: [
          'at 0.25 s, when the plate force reaches its peak.',
          'between 0.25 s and 0.30 s, when the plate force first declines.',
          'between 0.30 s and 0.35 s, when the plate force equals body weight.',
          'at 0.35 s, when the feet lose contact with the plate.',
        ],
        correctAnswer: 2,
        explanation:
          'The center of mass gains upward speed for as long as the net force on it is upward, that is, for as long as the plate force exceeds the body weight of 800 N. Figure 1 shows the force falling from 1300 N at 0.30 s to zero at 0.35 s, so it passes through 800 N within that interval; from then on the net force is downward and the volunteer slows slightly before leaving the plate. At 0.25 s the force and the acceleration are greatest, but the speed is still increasing. Between 0.25 s and 0.30 s the force is declining yet remains well above body weight, so the speed continues to rise. At take-off the net force has already been downward for a short time, so the speed is a little below its maximum.',
        optionExplanations: [
          'At 0.25 s the force, and therefore the acceleration, is at its maximum, but a maximum acceleration means the speed is still increasing as fast as it ever will. Peak force marks peak acceleration, not peak speed.',
          'Between 0.25 s and 0.30 s the force falls from 2000 N to 1300 N, but it remains well above the 800-N body weight. The net force is still upward, so the center of mass keeps speeding up throughout this interval.',
          'Speed increases as long as the plate force exceeds body weight (800 N). The force is 1300 N at 0.30 s and 0 at 0.35 s, so it crosses 800 N inside this interval; at that crossing the net force is zero and the speed peaks.',
          'Just before take-off the plate force has already dropped below body weight, so the net force on the volunteer is downward and the center of mass has been slowing slightly. The speed at take-off is a little less than the maximum.',
        ],
        skill: '4A net force and the instant of maximum speed (Skill 2)',
      },
      {
        question: 'The area between the force record in Figure 1 and the body-weight line, taken over the whole push, is 200 N·s. After take-off, the volunteer’s center of mass rises through a distance closest to:',
        options: ['0.31 m', '0.63 m', '2.5 m', '3.1 m'],
        correctAnswer: 0,
        explanation:
          'The area between the record and the body-weight line is the net impulse, which equals the momentum at take-off, so $v = 200 / 80 = 2.5$ m/s. After take-off the kinetic energy is converted into gravitational potential energy, $\\tfrac{1}{2}mv^2 = mgh$, so $h = v^2 / 2g = 6.25 / 20 \\approx 0.31$ m. The value 0.63 m is $v^2 / g$, which leaves the factor of one-half out of the kinetic energy. The value 2.5 m is the take-off speed in meters per second relabeled as a distance. The value 3.1 m is $v^2 / 2$, which leaves $g$ out of the potential energy.',
        optionExplanations: [
          'The net impulse of 200 N·s equals the momentum at take-off, so $v = 200/80 = 2.5$ m/s. With $\\tfrac{1}{2}mv^2 = mgh$, the rise is $h = v^2/2g = 6.25/20 \\approx 0.31$ m.',
          'This is $v^2/g = 6.25/10 \\approx 0.63$ m, which drops the factor of one-half from the kinetic energy. The energy balance is $\\tfrac{1}{2}mv^2 = mgh$, so the rise is half this value.',
          'This is the take-off speed, 2.5 m/s, relabeled as a distance in meters. Converting the impulse to a speed is only the first step; the rise still has to be found from energy conservation, and it is far smaller than 2.5 m.',
          'This is $v^2/2 = 6.25/2 \\approx 3.1$ m, which leaves $g$ out of the potential-energy term. A 3-m rise of the center of mass is not a plausible standing jump; dividing by $g = 10$ m/s² gives the actual rise.',
        ],
        skill: '4A impulse–momentum and conservation of energy (Skill 2)',
      },
      {
        question: 'In the squat jump of a 60-kg volunteer, the push lasted 0.30 s; during the push the center of mass rose 0.35 m and reached an upward speed of 3.0 m/s. As defined in the passage, the average power for this jump was closest to:',
        options: ['480 W', '700 W', '900 W', '1600 W'],
        correctAnswer: 3,
        explanation:
          'Average power is the mechanical energy gained during the push divided by the duration of the push. The gain in gravitational potential energy is $mgh = (60)(10)(0.35) = 210$ J and the gain in kinetic energy is $\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}(60)(3.0)^2 = 270$ J, a total of 480 J, and $480 / 0.30 = 1600$ W. The value 700 W counts only the potential energy, and 900 W counts only the kinetic energy. The value 480 W is the energy gained, in joules, with the division by the time left out.',
        optionExplanations: [
          'This is the total mechanical energy gained, 480 J, reported as if it were a power. Power requires dividing that energy by the 0.30-s duration of the push, which gives a much larger number of watts.',
          'This counts only the gravitational potential energy: $mgh = (60)(10)(0.35) = 210$ J, and $210/0.30 = 700$ W. The passage defines mechanical energy as kinetic plus potential, so the kinetic term must be added as well.',
          'This counts only the kinetic energy: $\\tfrac{1}{2}(60)(3.0)^2 = 270$ J, and $270/0.30 = 900$ W. The center of mass also rose 0.35 m during the push, so the potential-energy gain of 210 J must be included.',
          'The passage defines average power as total mechanical energy gained during the push divided by push duration. Potential energy $(60)(10)(0.35) = 210$ J plus kinetic energy $\\tfrac{1}{2}(60)(3.0)^2 = 270$ J gives 480 J, and $480/0.30 = 1600$ W.',
        ],
        skill: '4A mechanical energy and average power (Skill 2)',
      },
      {
        question: 'A volunteer takes off with the legs fully extended but lands with the hips and knees deeply bent. Compared with the height obtained by the impulse method, the height that the flight-time method gives for this jump is most likely:',
        options: [
          'too large, because the center of mass falls farther than it rose before the feet touch down.',
          'too large, because bending the legs during the flight raises the speed of the center of mass.',
          'too small, because bending the legs during the flight shortens the time spent rising.',
          'the same, because the time of flight does not depend on the posture of the jumper.',
        ],
        correctAnswer: 0,
        explanation:
          'The flight-time method assumes that the center of mass is at the same height at landing as at take-off, so that half of the flight is spent rising. A jumper who lands with the legs bent does not touch the plate until the center of mass has dropped below its take-off height, so the flight lasts longer than twice the time of rise, and the method converts the extra time into extra height. Movements made in the air cannot change the speed with which the center of mass left the ground or the path it follows afterward, so they neither raise its speed nor shorten its rise. The time of flight does depend on landing posture, because posture determines how far the center of mass must fall before the feet reach the plate.',
        optionExplanations: [
          'The flight-time method assumes the center of mass lands at its take-off height so that half the flight is spent rising. Landing with bent legs lets the center of mass drop below take-off height before the feet touch, lengthening the flight and inflating the computed height.',
          'The direction is right but the reason is not. Once airborne, the jumper is a projectile and no movement of the limbs can change the speed or path of the center of mass. The error comes from the landing posture, not from any change in speed during flight.',
          'Bending the legs in the air cannot shorten the rise: the center of mass follows a fixed projectile path set by take-off speed. In fact the flight is lengthened, not shortened, because the center of mass descends farther before touchdown, making the estimate too large.',
          'The time of flight does depend on posture, because posture at landing sets how far the center of mass must fall before the feet reach the plate. The passage explicitly warns that the method holds only when landing posture matches take-off posture.',
        ],
        skill: '4A validity of a flight-time measurement (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY (experiment, table) — Antacid capacity by back-titration
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-a-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Measuring the Acid-Neutralizing Capacity of Antacid Tablets',
    passageText:
      'Antacids relieve heartburn by consuming hydrochloric acid in the stomach. The active ingredients of most tablets are sparingly soluble bases: calcium carbonate (CaCO₃, 100 g/mol), magnesium hydroxide (Mg(OH)₂, 58 g/mol), and aluminum hydroxide (Al(OH)₃, 78 g/mol). Each reacts completely with an excess of strong acid:\n\nCaCO₃(s) + 2 H⁺ → Ca²⁺ + H₂O + CO₂(g)\n\nMg(OH)₂(s) + 2 H⁺ → Mg²⁺ + 2 H₂O\n\nAl(OH)₃(s) + 3 H⁺ → Al³⁺ + 3 H₂O\n\nThe acid-neutralizing capacity of a tablet is the number of moles of H⁺ that it consumes. Capacity is usually determined by back-titration: the tablet is allowed to react with a measured excess of acid, and the acid that is left over is then titrated with a standard solution of base.\n\nStudents tested three commercial tablets, each containing a single active ingredient together with inert binders and flavorings. Each tablet was crushed in a mortar and transferred to a flask, and 50.00 mL of 0.500 M HCl was added by pipet. The flask was covered loosely with a watch glass and its contents were stirred at 37 °C for 15 minutes, by which time any fizzing had stopped and only a faint haze of binder remained. Four drops of bromophenol blue, an indicator that is yellow below pH 3.0 and blue above pH 4.6, were added, and the mixture was titrated with 0.250 M NaOH until it first turned green and stayed green. A blank that contained the acid and the indicator but no tablet was carried through the same steps. The results are shown in Table 1.\n\nAn indicator that changes color in acidic solution was chosen for two reasons. First, carbon dioxide that stays dissolved after a carbonate tablet has reacted is a weak acid, with a p$K_a$ of 6.4 for its first ionization, and it would consume titrant if the solution were taken to a basic end point. Second, the aluminum ion is soluble only in acidic solution: as the pH rises much above 4, Al³⁺ combines with hydroxide ion and Al(OH)₃ reappears as a gelatinous precipitate. Magnesium ion, by contrast, stays in solution until the pH exceeds about 9.\n\nThe students also recorded practical differences among the ingredients. Calcium carbonate releases a gas as it reacts, magnesium hydroxide acts as a laxative, and aluminum hydroxide tends to cause constipation, which is why the two hydroxides are often combined in a single product. Because a dose is limited by the mass of solid that a person is willing to swallow, the students expressed their results in two ways: per tablet, and per gram of active ingredient. The second figure measures how efficiently a compound neutralizes acid for its mass.',
    figure:
      '**Table 1. Back-titration of antacid samples (each treated with 50.00 mL of 0.500 M HCl, then titrated with 0.250 M NaOH)**\n\n| Sample | Active ingredient | NaOH required to reach end point (mL) |\n|--------|-------------------|----------------------------------------|\n| Blank (no tablet) | — | 100.0 |\n| Tablet A | CaCO₃ | 60.0 |\n| Tablet B | Mg(OH)₂ | 52.0 |\n| Tablet C | Al(OH)₃ | 64.0 |',
    questions: [
      {
        question: 'According to Table 1, how many millimoles of H⁺ were neutralized by Tablet B?',
        options: ['6.0 mmol', '12.0 mmol', '13.0 mmol', '24.0 mmol'],
        correctAnswer: 1,
        explanation:
          'The blank shows that the acid added to every flask requires 100.0 mL of 0.250 M NaOH, or 25.0 mmol, for neutralization. The Tablet B flask required only 52.0 mL, or 13.0 mmol, so the tablet had already consumed $25.0 - 13.0 = 12.0$ mmol of H⁺. The value 13.0 mmol is the acid left over, not the acid neutralized by the tablet. The value 6.0 mmol is the amount of Mg(OH)₂ in the tablet, each mole of which consumes two moles of H⁺. The value 24.0 mmol comes from multiplying the 48.0-mL difference in titrant volume by the concentration of the HCl instead of the concentration of the NaOH.',
        optionExplanations: [
          'This is the amount of Mg(OH)₂ in the tablet, not the acid it neutralized. Each formula unit of Mg(OH)₂ consumes two H⁺, so 6.0 mmol of base accounts for 12.0 mmol of acid, which is the quantity asked for.',
          'The blank shows that all the acid added needs $(100.0)(0.250) = 25.0$ mmol of NaOH. Tablet B’s flask needed only $(52.0)(0.250) = 13.0$ mmol, so the tablet had already consumed $25.0 - 13.0 = 12.0$ mmol of H⁺.',
          'This is the acid left over after the tablet reacted, $(52.0)(0.250) = 13.0$ mmol, which is what the NaOH titrated. The acid neutralized by the tablet is the blank value minus this leftover, not the leftover itself.',
          'This multiplies the 48.0-mL difference in titrant volume by the 0.500 M concentration of the HCl rather than the 0.250 M concentration of the NaOH actually delivered. The volumes in Table 1 are volumes of NaOH, so its molarity must be used.',
        ],
        skill: '5A back-titration stoichiometry from a data table (Skill 4)',
      },
      {
        question: 'Based on the reactions and molar masses given in the passage, which ranking lists the active ingredients in order of increasing millimoles of H⁺ neutralized per gram of compound?',
        options: [
          'Al(OH)₃ < Mg(OH)₂ < CaCO₃',
          'CaCO₃ < Al(OH)₃ < Mg(OH)₂',
          'Mg(OH)₂ < CaCO₃ < Al(OH)₃',
          'CaCO₃ < Mg(OH)₂ < Al(OH)₃',
        ],
        correctAnswer: 3,
        explanation:
          'The amount of H⁺ neutralized per gram is the number of protons consumed per formula unit divided by the molar mass: $2/100 = 20$ mmol/g for CaCO₃, $2/58 \\approx 34$ mmol/g for Mg(OH)₂, and $3/78 \\approx 38$ mmol/g for Al(OH)₃. The ranking that places Mg(OH)₂ highest orders the compounds by molar mass alone and overlooks the third proton consumed by each Al(OH)₃. The ranking that places CaCO₃ highest is the correct order reversed. The ranking that places Mg(OH)₂ lowest has no basis, since Mg(OH)₂ consumes as many protons as CaCO₃ does and has a smaller molar mass.',
        optionExplanations: [
          'This is the correct order reversed. CaCO₃ at $2/100 = 20$ mmol/g has the lowest capacity per gram, not the highest, and Al(OH)₃ at $3/78 \\approx 38$ mmol/g has the highest. Increasing order must start with CaCO₃.',
          'This ranks the compounds by molar mass alone (100, 78, 58 g/mol), which would be right if every compound consumed the same number of protons. Al(OH)₃ consumes three H⁺ per formula unit, which lifts it above Mg(OH)₂ despite its larger mass.',
          'Placing Mg(OH)₂ lowest has no basis: it consumes two H⁺ per formula unit, the same as CaCO₃, but its molar mass (58 g/mol) is smaller, so its capacity per gram ($\\approx 34$ mmol/g) is higher than that of CaCO₃ (20 mmol/g).',
          'Capacity per gram is protons consumed per formula unit divided by molar mass: $2/100 = 20$ mmol/g for CaCO₃, $2/58 \\approx 34$ mmol/g for Mg(OH)₂, and $3/78 \\approx 38$ mmol/g for Al(OH)₃, giving this increasing order.',
        ],
        skill: '5A equivalents of acid neutralized per gram of base (Skill 2)',
      },
      {
        question: 'Suppose that the titration of the Tablet C flask had been continued beyond the bromophenol blue end point until the pH reached 7. Based on Table 1 and the passage, the total volume of NaOH delivered would have been closest to:',
        options: ['36 mL', '64 mL', '100 mL', '136 mL'],
        correctAnswer: 2,
        explanation:
          'Tablet C neutralized $(100.0 - 64.0)(0.250) = 9.0$ mmol of H⁺, so its flask holds 3.0 mmol of Al³⁺. Above about pH 4 each Al³⁺ takes up three hydroxide ions as solid Al(OH)₃ forms again, which consumes a further 9.0 mmol of NaOH, or 36 mL, for a total of 100 mL. This is the volume required by the blank: once the aluminum hydroxide has re-formed, every mole of HCl originally added has been neutralized by NaOH, and the tablet would appear to have no capacity at all. A volume of 64 mL assumes that only the leftover acid reacts with the titrant. A volume of 36 mL is the additional titrant alone, and 136 mL adds that 36 mL to the blank volume instead of to the 64 mL already delivered.',
        optionExplanations: [
          'This is only the extra titrant consumed when Al(OH)₃ re-precipitates: 3.0 mmol Al³⁺ × 3 OH⁻ = 9.0 mmol, or 36 mL. The question asks for the total volume delivered, which must include the 64.0 mL already added to reach the first end point.',
          'This is the volume in Table 1 for the bromophenol blue end point and assumes that only leftover HCl consumes titrant. The passage states that above about pH 4, Al³⁺ combines with hydroxide to re-form Al(OH)₃, which consumes additional NaOH before pH 7.',
          'Tablet C neutralized $(100.0 - 64.0)(0.250) = 9.0$ mmol H⁺, leaving 3.0 mmol Al³⁺. Re-forming Al(OH)₃ consumes 3 OH⁻ per Al³⁺, another 9.0 mmol, or 36 mL. The total is $64 + 36 = 100$ mL, the same as the blank.',
          'This adds the 36 mL of extra titrant to the blank volume of 100 mL rather than to the 64 mL actually delivered to the Tablet C flask. The blank is a separate flask; the Tablet C titration starts from its own 64.0 mL.',
        ],
        skill: '5A choice of end point when a metal hydroxide can precipitate (Skill 2)',
      },
      {
        question: 'Which procedural error would cause the acid-neutralizing capacity of Tablet A to be overestimated?',
        options: [
          'Adding several drops of NaOH after the end point has been reached',
          'Leaving a portion of the crushed tablet behind in the mortar',
          'Rinsing the walls of the flask with distilled water before titrating',
          'Losing droplets of the acid mixture as spray during fizzing',
        ],
        correctAnswer: 3,
        explanation:
          'The capacity is calculated as the acid added minus the leftover acid found by titration, so any error that makes the titration find too little leftover acid inflates the result. Droplets lost as spray carry away HCl that the tablet did not neutralize; less NaOH is then needed, and the missing acid is credited to the tablet. Adding NaOH past the end point makes the leftover acid appear larger and the capacity smaller. Leaving part of the tablet in the mortar means that less base reacts, which also lowers the result. Rinsing the walls with water changes the volume of the solution but not the number of moles of acid in it, so the titration is unaffected.',
        optionExplanations: [
          'Overshooting the end point delivers extra NaOH, which makes the leftover acid appear larger. Since capacity is acid added minus leftover acid, a larger apparent leftover gives a smaller capacity, an underestimate rather than an overestimate.',
          'Tablet material left in the mortar means less base reaches the flask, so less HCl is consumed, more acid is left over, and more NaOH is needed. The calculated capacity falls, so this error underestimates rather than overestimates.',
          'Adding water dilutes the solution but does not change the number of moles of HCl present. Titration measures moles of acid, not concentration, so the NaOH volume and the computed capacity are unaffected by rinsing the walls.',
          'Spray carries away HCl that the tablet never neutralized. Less acid remains to be titrated, so less NaOH is needed, and the missing acid is wrongly credited to the tablet. The computed capacity is therefore too high.',
        ],
        skill: '5A sources of error in a back-titration (Skill 3)',
      },
      {
        question: 'A direct titration, in which HCl is added from a buret to a suspension of the crushed tablet in water, is not used for these antacids. The most likely reason is that:',
        options: [
          'the solids react slowly, so the indicator would signal an end point before all of the base had reacted.',
          'the solids are weak bases, so the reaction with a strong acid would stop well short of completion.',
          'the solids are insoluble in water, so they would be unable to react with the acid that was added.',
          'the solids release a gas, so the volume of acid delivered could not be read from the buret.',
        ],
        correctAnswer: 0,
        explanation:
          'A titration requires a reaction that is rapid as well as complete. Acid added to a suspension reacts only at the surfaces of the particles, so the solution turns acidic and the indicator changes color while undissolved base remains, and the color then drifts back as the solid goes on reacting. Supplying excess acid, allowing time for the reaction to finish, and then titrating the clear solution with NaOH replaces this slow reaction with a fast one between dissolved ions. Carbonates and hydroxides are consumed completely by excess strong acid, so an incomplete reaction is not the difficulty. The solids do react with acid even though they are insoluble in water; that is how they act in the stomach. Only the carbonate tablet releases a gas, and escaping gas does not interfere with reading a buret.',
        optionExplanations: [
          'A titration needs a reaction that is fast as well as complete. Acid added to suspended solid reacts only at particle surfaces, so the solution turns acidic and the indicator changes color while unreacted base remains, giving a premature and drifting end point.',
          'These are weak bases, but the reaction of a carbonate or hydroxide with excess strong acid still goes to completion, as the passage’s equations and the back-titration itself rely on. Incompleteness is not the obstacle; speed is.',
          'The solids are sparingly soluble, yet they clearly do react with acid: that is how they work in the stomach and how the back-titration consumes HCl. Insolubility slows the reaction but does not prevent it.',
          'Only the carbonate tablet releases gas, and the two hydroxide tablets do not, so this could not explain avoiding direct titration for all three. Gas escaping from the flask also has no effect on reading the volume in a buret.',
        ],
        skill: '5A requirements for a titration reaction (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOCHEMISTRY (information) — NAD⁺, FAD, PLP, TPP, and biotin as reagents
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-a-03',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Coenzymes as the Chemical Reagents of Metabolism',
    passageText:
      'The side chains of the twenty common amino acids supply acids, bases, and nucleophiles, but they are poorly equipped to remove electrons from a substrate or to stabilize a pair of electrons left behind on carbon. Enzymes that carry out redox reactions, or that break bonds to carbon, therefore recruit small organic coenzymes, most of them derived from vitamins, whose structures are each suited to one kind of chemistry.\n\nNicotinamide adenine dinucleotide (NAD⁺) is a two-electron oxidant. Its reactive portion is a pyridinium ring, a six-membered aromatic ring containing a positively charged nitrogen. A dehydrogenase holds its substrate so that a hydrogen bonded to carbon is delivered, together with both electrons of the C–H bond, directly to C4 of the ring; when the substrate is an alcohol, the hydroxyl proton is released to the solvent at the same time. In the product, NADH, the ring is uncharged, and the hydrogen it has acquired does not exchange with water. NADH leaves the enzyme and gives up its electron pair elsewhere. Because the ring has no stable form that holds a single extra electron, NAD⁺ and NADH take part only in two-electron transfers.\n\nFlavin adenine dinucleotide (FAD) is more versatile. Its three-ring system can accept one electron to give a semiquinone radical, in which the unpaired electron is delocalized over the rings, and then a second electron to give FADH₂. Flavins usually remain bound to their enzymes throughout.\n\nPyridoxal phosphate (PLP) handles amino acids. In the resting enzyme the aldehyde carbon of PLP is held in a Schiff base, a C=N linkage, with a lysine side chain. An incoming amino acid displaces the lysine, so that its own α-amino group forms the Schiff base, which is conjugated with the pyridinium ring of the coenzyme. If any one of the bonds from the α-carbon to its other three substituents now breaks in such a way that the electron pair stays on the α-carbon, the negative charge is spread through the C=N bond into the ring, which serves as an electron sink. In an aminotransferase, the α-hydrogen is removed as a proton, the double bond shifts, and hydrolysis releases an α-keto acid, leaving the amino group on the coenzyme as pyridoxamine phosphate (PMP). A second α-keto acid then binds, and the same steps run in reverse to produce a new amino acid and regenerate PLP.\n\nThiamine pyrophosphate (TPP) performs a similar service for α-keto acids, which cannot lose CO₂ unaided because nothing in the molecule can accept the electron pair that is left behind. The thiazolium ring of TPP contains a carbon, C2, that lies between a positively charged nitrogen and a sulfur, and the proton on this carbon is far more acidic than an ordinary C–H proton. The carbanion formed by its removal adds to the ketone carbonyl of pyruvate, and in the resulting adduct the thiazolium ring is placed to take up the electrons released when CO₂ departs.\n\nBiotin carries CO₂ in the opposite direction. Attached to its enzyme through a long, flexible link to a lysine side chain, biotin is first carboxylated on a ring nitrogen at the expense of one ATP. The carboxyl group is then handed to a carbon nucleophile, the enolate of an acceptor molecule.',
    questions: [
      {
        question: 'Alcohol dehydrogenase oxidizes ethanol to acetaldehyde with NAD⁺ as the oxidant. The reaction is run in ordinary water with ethanol in which both hydrogens on C1 have been replaced by deuterium (CH₃CD₂OH). Where are the two deuterium atoms found after the reaction?',
        options: [
          'Both atoms are released into the solvent as D⁺.',
          'Both atoms are transferred to the reduced coenzyme.',
          'One atom enters the solvent, and one remains on acetaldehyde.',
          'One atom is on the reduced coenzyme, and one remains on acetaldehyde.',
        ],
        correctAnswer: 3,
        explanation:
          'The transfer is direct: a hydrogen bonded to C1 of the alcohol moves, with both electrons of its C–H bond, to C4 of the nicotinamide ring, and once there it does not exchange with water. One deuterium therefore ends up on the reduced coenzyme. The other deuterium is still bonded to C1, which has become the carbonyl carbon of acetaldehyde, CH₃CDO. The only hydrogen released to the solvent is the hydroxyl proton, which is ordinary hydrogen in this substrate, so no deuterium enters the water. Both atoms cannot go to the coenzyme, because oxidizing an alcohol to an aldehyde removes only one hydrogen from carbon.',
        optionExplanations: [
          'The only hydrogen released to the solvent is the hydroxyl proton, which is ordinary hydrogen in CH₃CD₂OH. The deuterium atoms are bonded to carbon, and neither one is lost as D⁺ to the water.',
          'Oxidizing an alcohol to an aldehyde removes just one hydrogen from C1; the other stays on the carbonyl carbon of the product. Only one deuterium can be transferred to C4 of the nicotinamide ring.',
          'This correctly leaves one deuterium on acetaldehyde but sends the other to the solvent. The passage says the hydride is delivered directly to C4 of NAD⁺ and does not exchange with water, so it ends up on NADH, not in solution.',
          'The hydride from C1 goes directly, with both electrons, to C4 of the nicotinamide ring, where it does not exchange with water, so one deuterium is on the reduced coenzyme. The other deuterium remains on C1, now the carbonyl carbon of CH₃CDO.',
        ],
        skill: '5D hydride transfer to NAD⁺ traced with an isotope label (Skill 2)',
      },
      {
        question: 'Purified aspartate aminotransferase, with PLP bound at each active site, is mixed with a large excess of aspartate. No α-keto acid is added. Which outcome is expected?',
        options: [
          'Oxaloacetate accumulates steadily, because PLP is regenerated after each turnover.',
          'One oxaloacetate forms per active site, and the coenzyme is left as PMP.',
          'No oxaloacetate forms, because a Schiff base cannot form without an α-keto acid.',
          'One glutamate forms per active site, and the coenzyme is regenerated as PLP.',
        ],
        correctAnswer: 1,
        explanation:
          'In the first half of the reaction, aspartate takes the place of lysine in the Schiff base with PLP, loses its α-hydrogen, and is released as its α-keto acid, oxaloacetate, while its amino group stays on the coenzyme as PMP. Returning PMP to PLP requires an α-keto acid to accept that amino group, and none is present, so each active site completes one half-reaction and stops. Steady accumulation of oxaloacetate would require the coenzyme to be regenerated, which cannot happen here. The Schiff base forms between PLP and the amino acid itself, so the first half-reaction does not depend on an α-keto acid. Glutamate would form, and PLP would be regenerated, only if α-ketoglutarate were supplied to accept the amino group from PMP.',
        optionExplanations: [
          'Steady accumulation would need PLP regenerated after each turnover, but converting PMP back to PLP requires an α-keto acid to accept the amino group. With none present, the coenzyme is stranded as PMP after one turnover.',
          'Aspartate displaces lysine from the Schiff base, loses its α-hydrogen, and is hydrolyzed off as oxaloacetate, leaving its amino group on the coenzyme as PMP. Without an α-keto acid to accept that group, each active site completes only this first half-reaction.',
          'The Schiff base forms between PLP and the incoming amino acid, displacing the lysine; no α-keto acid is involved in that step. The first half-reaction proceeds normally and produces one oxaloacetate per site.',
          'Glutamate would form only if α-ketoglutarate were present to accept the amino group from PMP in the second half-reaction. No α-keto acid is supplied, so neither glutamate formation nor regeneration of PLP can occur.',
        ],
        skill: '5D the two half-reactions of PLP-dependent transamination (Skill 2)',
      },
      {
        question: 'The proton on C2 of the thiazolium ring of TPP is unusually acidic for a hydrogen bonded to carbon. The carbanion formed when this proton is removed is stabilized chiefly by:',
        options: [
          'the positive charge on the adjacent nitrogen.',
          'the negative charges on the pyrophosphate group.',
          'electron donation from a neighboring methyl group.',
          'resonance that places the charge on phosphorus atoms.',
        ],
        correctAnswer: 0,
        explanation:
          'An acid is stronger when its conjugate base is more stable. Removing the proton from C2 leaves a lone pair and a negative charge on a carbon that is bonded directly to a positively charged nitrogen, and the attraction between these adjacent opposite charges stabilizes the carbanion. The pyrophosphate group lies at the far end of the molecule and is not conjugated with the ring; its negative charges would repel a carbanion, not stabilize it, and no resonance form can move the charge onto phosphorus. Alkyl groups donate electron density, which destabilizes a carbanion and makes a C–H bond less acidic, not more.',
        optionExplanations: [
          'The C2 carbanion sits directly beside a positively charged ring nitrogen, and the electrostatic attraction between adjacent opposite charges stabilizes the conjugate base. A more stable conjugate base means a more acidic C–H proton.',
          'The pyrophosphate group is at the far end of the molecule and not conjugated with the thiazolium ring. Its negative charges would repel a carbanion and destabilize it, making the proton less acidic, not more.',
          'Alkyl groups are electron-donating, which pushes additional electron density onto an already negative carbon. That destabilizes a carbanion and makes the parent C–H bond less acidic, the opposite of the effect observed.',
          'No resonance form of the thiazolium ring places charge on phosphorus; the phosphate groups are joined through a saturated chain and are not part of the ring’s π system. The stabilization is electrostatic, from the adjacent cationic nitrogen.',
        ],
        skill: '5D stability of a conjugate base and C–H acidity (Skill 1)',
      },
      {
        question: 'Avidin, a protein in raw egg white, binds biotin so tightly that biotin-dependent enzymes are inactivated. Which reaction of pyruvate would be blocked directly in a cell extract treated with avidin?',
        options: [
          'Pyruvate + NADH + H⁺ → lactate + NAD⁺',
          'Pyruvate + glutamate → alanine + α-ketoglutarate',
          'Pyruvate + HCO₃⁻ + ATP → oxaloacetate + ADP + Pᵢ',
          'Pyruvate + H⁺ → acetaldehyde + CO₂',
        ],
        correctAnswer: 2,
        explanation:
          'Biotin-dependent enzymes are carboxylases: they attach CO₂, taken from bicarbonate and activated at the expense of ATP, to a carbon nucleophile. The conversion of pyruvate, a three-carbon α-keto acid, into oxaloacetate, a four-carbon one, is such a reaction; it is catalyzed by pyruvate carboxylase. Reduction of pyruvate to lactate is a hydride transfer from NADH. Formation of alanine from pyruvate is a transamination, which depends on PLP. Conversion of pyruvate to acetaldehyde is the decarboxylation of an α-keto acid, which depends on TPP; it removes CO₂ instead of adding it and does not involve biotin.',
        optionExplanations: [
          'Reduction of pyruvate to lactate is a hydride transfer from NADH catalyzed by lactate dehydrogenase. It uses the nicotinamide coenzyme described in the passage, not biotin, and would be unaffected by avidin.',
          'Converting pyruvate to alanine is a transamination, which the passage attributes to PLP-dependent aminotransferases. Biotin plays no role in moving an amino group, so avidin would not block this reaction.',
          'Biotin-dependent enzymes are carboxylases that attach CO₂ from bicarbonate to a carbon nucleophile at the cost of ATP. Converting three-carbon pyruvate to four-carbon oxaloacetate with HCO₃⁻ and ATP is exactly this reaction, catalyzed by pyruvate carboxylase.',
          'Decarboxylation of pyruvate to acetaldehyde is the TPP-dependent chemistry described in the passage: the thiazolium carbanion adds to the ketone and absorbs the electrons released as CO₂ leaves. It removes CO₂ rather than adding it, so biotin is not involved.',
        ],
        skill: '5D matching a coenzyme to its reaction type (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. ORGANIC CHEMISTRY (experiment, table) — UV–visible absorption and conjugation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-a-04',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Conjugation and the Absorption of Ultraviolet Light',
    passageText:
      'Organic molecules absorb ultraviolet (UV) or visible light when a photon has exactly the energy needed to promote an electron from an occupied molecular orbital to an empty one. The transition of lowest energy runs from the highest occupied molecular orbital (HOMO) to the lowest unoccupied molecular orbital (LUMO), and the wavelength at which a compound absorbs most strongly, $\\lambda_{\\text{max}}$, shifts whenever the gap between those two orbitals changes. Electrons in σ bonds are held so tightly that alkanes such as hexane absorb only below about 150 nm. Electrons in π bonds are promoted more easily, and nonbonding electrons, such as the lone pairs on a carbonyl oxygen, more easily still.\n\nHow strongly a compound absorbs is expressed by its molar absorptivity, ε, which is the absorbance of a 1 M solution in a cell with a 1-cm light path. The principal bands of alkenes are intense, with ε of 10,000 M⁻¹·cm⁻¹ or more. By contrast, the band near 280 nm that arises when a lone-pair electron of a ketone such as acetone is promoted into an empty orbital of the C=O group is very weak, with ε of about 15 M⁻¹·cm⁻¹.\n\nA student examined how the arrangement of double bonds affects $\\lambda_{\\text{max}}$. Dilute solutions (about 10⁻⁵ M) of five hydrocarbons, among them β-carotene, the orange pigment of carrots, were prepared in hexane. The spectrum of each solution was recorded from 200 to 700 nm in a quartz cell with a 1.00-cm path, against a reference cell that held hexane alone. Because air and most solvents absorb strongly below 200 nm, the value for a sixth hydrocarbon, 1,4-pentadiene, was taken from the literature. In each compound described as conjugated, double and single bonds alternate without interruption along the chain. The results are given in Table 1.\n\nThe student then turned to sunscreens. The UV radiation in sunlight that reaches the ground is divided into UV-A (315–400 nm) and UV-B (280–315 nm); UV-B photons are chiefly responsible for sunburn. Organic sunscreen ingredients are designed to absorb these photons and to release the energy harmlessly as heat. One widely used ingredient, an ester of 4-methoxycinnamic acid, has the structure CH₃O–C₆H₄–CH=CH–CO₂R, in which a benzene ring, a carbon–carbon double bond, and the ester carbonyl form one continuous conjugated system and R is a saturated eight-carbon chain. In ethanol, the student measured a $\\lambda_{\\text{max}}$ of 310 nm and an ε of 24,000 M⁻¹·cm⁻¹ for this compound. Because no single ingredient absorbs across the whole of both ranges, commercial products combine several absorbers.\n\nThe student noted one limitation of the survey. β-Carotene differs from the other conjugated compounds in more than the length of its conjugated system: its chain carries methyl branches, and the double bonds at the two ends of the system lie within six-membered rings.',
    figure:
      '**Table 1. Wavelength of maximum absorption of six hydrocarbons**\n\n| Compound | Number of C=C bonds | Arrangement of C=C bonds | λmax (nm) |\n|----------|---------------------|--------------------------|-----------|\n| 1,4-Pentadiene | 2 | Isolated | 178 |\n| 1,3-Pentadiene | 2 | Conjugated | 223 |\n| 1,3,5-Hexatriene | 3 | Conjugated | 268 |\n| 1,3,5,7-Octatetraene | 4 | Conjugated | 304 |\n| 1,3,5,7,9-Decapentaene | 5 | Conjugated | 334 |\n| β-Carotene | 11 | Conjugated | 452 |',
    questions: [
      {
        question: 'Which pair of compounds in Table 1 provides the best evidence that $\\lambda_{\\text{max}}$ depends on whether double bonds are conjugated, and not simply on how many double bonds a molecule contains?',
        options: [
          '1,3-Pentadiene and 1,3,5-hexatriene',
          '1,4-Pentadiene and 1,3-pentadiene',
          '1,4-Pentadiene and β-carotene',
          '1,3,5,7,9-Decapentaene and β-carotene',
        ],
        correctAnswer: 1,
        explanation:
          'The two pentadienes are isomers with the same number of carbons and the same number of double bonds; only the arrangement of the double bonds differs, and $\\lambda_{\\text{max}}$ rises from 178 nm to 223 nm when they are conjugated. Because nothing else changes, the shift can be assigned to conjugation. In each of the other pairs the number of double bonds changes as well: 1,3-pentadiene and hexatriene are both conjugated and differ by one double bond, 1,4-pentadiene and β-carotene differ in both number and arrangement, and decapentaene and β-carotene are both conjugated and differ in number. None of those comparisons separates the effect of conjugation from the effect of simply having more double bonds.',
        optionExplanations: [
          'Both compounds are conjugated and differ by one double bond (two versus three), so the rise from 223 to 268 nm reflects a change in number, not arrangement. It cannot separate the effect of conjugation from the effect of more double bonds.',
          'The two pentadienes have identical carbon count and the same two double bonds; only their arrangement differs, and $\\lambda_{\\text{max}}$ jumps from 178 to 223 nm. With number held constant, the shift isolates the effect of conjugation.',
          'These two compounds differ in both the number of double bonds (2 versus 11) and their arrangement (isolated versus conjugated). With two variables changing at once, the shift to 452 nm cannot be attributed to conjugation alone.',
          'Both are conjugated; they differ in the number of double bonds (5 versus 11) and, as the passage notes, in methyl branching and ring placement. This comparison tests the effect of chain length, not of conjugation versus isolation.',
        ],
        skill: '5C choosing the comparison that isolates one variable in spectral data (Skill 4)',
      },
      {
        question: 'Based on the trend in Table 1, which change to the structure of the 4-methoxycinnamate ester would be most likely to move its $\\lambda_{\\text{max}}$ out of the UV-B range and into the UV-A range?',
        options: [
          'Adding H₂ across the C=C bond that joins the ring to the carbonyl group',
          'Lengthening the saturated chain R from eight carbons to twelve carbons',
          'Replacing the benzene ring with a saturated six-membered carbon ring',
          'Inserting a second C=C bond between the ring and the carbonyl group',
        ],
        correctAnswer: 3,
        explanation:
          'Table 1 shows that each additional conjugated double bond moves the absorption maximum to longer wavelength, because extending a conjugated system narrows the gap between the HOMO and the LUMO. A second C=C bond placed between the ring and the carbonyl lengthens the conjugated system of the ester and should move its maximum from 310 nm toward the UV-A range. Adding H₂ to the existing C=C bond, or replacing the benzene ring with a saturated ring, shortens the conjugated system and would move the maximum to shorter wavelength. The chain R contains only σ bonds and is not part of the conjugated system, so its length has almost no effect on the wavelength absorbed.',
        optionExplanations: [
          'Hydrogenating the C=C bond between the ring and the carbonyl breaks the conjugated system into two separate pieces. Table 1 shows that shorter conjugation means shorter $\\lambda_{\\text{max}}$, so this would move absorption away from UV-A.',
          'The chain R is saturated and contains only σ bonds, so it is not part of the conjugated system. Lengthening it from eight to twelve carbons changes the HOMO–LUMO gap of the chromophore almost not at all.',
          'Replacing the benzene ring with a saturated ring removes six π electrons from the conjugated system, shortening it. By the trend in Table 1 this would shift $\\lambda_{\\text{max}}$ to shorter wavelength, deeper into the UV, not toward UV-A.',
          'Table 1 shows each additional conjugated double bond lengthens $\\lambda_{\\text{max}}$ because the HOMO–LUMO gap narrows. Inserting a second C=C bond extends the ring–alkene–carbonyl system, pushing the maximum from 310 nm toward the UV-A range above 315 nm.',
        ],
        skill: '5C extent of conjugation and absorption wavelength (Skill 2)',
      },
      {
        question: 'The absorption band that gives each conjugated hydrocarbon in Table 1 its $\\lambda_{\\text{max}}$ results from the promotion of an electron from:',
        options: [
          'a π bonding orbital to a π* antibonding orbital.',
          'a σ bonding orbital to a σ* antibonding orbital.',
          'a nonbonding orbital to a π* antibonding orbital.',
          'a π* antibonding orbital to a π bonding orbital.',
        ],
        correctAnswer: 0,
        explanation:
          'In a conjugated hydrocarbon the highest occupied orbital is a π bonding orbital and the lowest empty orbital is a π* antibonding orbital, so the transition of lowest energy, which produces the band at the longest wavelength, is from π to π*. A transition from σ to σ* requires far more energy and falls below about 150 nm, as the passage notes for alkanes. Hydrocarbons have no lone pairs, so no nonbonding electrons are available to be promoted. Movement of an electron from π* to π describes an excited molecule returning to its ground state, which releases energy and is not absorption.',
        optionExplanations: [
          'In a conjugated hydrocarbon the HOMO is a π bonding orbital and the LUMO is a π* antibonding orbital. The lowest-energy transition, which gives the longest-wavelength band and hence $\\lambda_{\\text{max}}$, is π → π*.',
          'σ → σ* transitions require far more energy; the passage notes that alkanes, which have only σ bonds, absorb below about 150 nm. The bands in Table 1 lie at 178–452 nm, far too long for σ electrons.',
          'Nonbonding electrons belong to lone pairs on atoms such as the oxygen of a carbonyl. The compounds in Table 1 are hydrocarbons with no lone pairs, so no n → π* transition is possible.',
          'Moving an electron from π* down to π describes an excited molecule relaxing back to its ground state, which releases energy. Absorption requires promotion from a lower-energy orbital to a higher one, not the reverse.',
        ],
        skill: '5C electronic transitions in UV–visible spectroscopy (Skill 1)',
      },
      {
        question: 'The student considers replacing hexane with acetone as the solvent so that more polar samples can be studied by the same procedure. The most serious objection to this plan is that acetone:',
        options: [
          'has so small a molar absorptivity that the reference cell could not be matched to the sample cell.',
          'forms hydrogen bonds to the hydrocarbons, which would move every absorption band into the visible range.',
          'is present at so high a concentration that its weak band would hide absorption by several of the samples.',
          'contains no π electrons, so it could not dissolve compounds that have conjugated double bonds.',
        ],
        correctAnswer: 2,
        explanation:
          'Absorbance is the product of molar absorptivity, concentration, and path length. A solute at 10⁻⁵ M must have a large ε to be detected, but a solvent is present at more than 10 M, so even with ε near 15 M⁻¹·cm⁻¹ pure acetone has an absorbance in the hundreds near 280 nm and transmits essentially no light there. Hexatriene and octatetraene, whose maxima in Table 1 lie on either side of that wavelength, could not be measured. A small molar absorptivity is therefore no reason to dismiss the absorption of a solvent, and it creates no difficulty in matching the two cells. Acetone cannot donate hydrogen bonds to hydrocarbons, and a change of solvent shifts a band by a few nanometers, not into the visible range. Acetone does contain π electrons, in its C=O bond, and π electrons are not what enable a solvent to dissolve a polyene.',
        optionExplanations: [
          'A small molar absorptivity is not the problem, and matching the reference cell to the sample cell is routine regardless of ε. The real difficulty is that a solvent is present at such high concentration that even ε ≈ 15 gives enormous absorbance.',
          'Acetone has no O–H or N–H bond and cannot donate hydrogen bonds, and hydrocarbons have no acceptor sites. Solvent changes shift bands by only a few nanometers, never into the visible range.',
          'Absorbance is ε × concentration × path length. Acetone as solvent is above 10 M, so even with ε ≈ 15 M⁻¹·cm⁻¹ its 280-nm band has absorbance in the hundreds and transmits no light there, masking hexatriene (268 nm) and octatetraene (304 nm).',
          'Acetone does contain π electrons, in its C=O double bond. Moreover, solubility depends on polarity and intermolecular forces, not on whether a solvent contains π electrons, so this reasoning is doubly mistaken.',
        ],
        skill: '5C choosing a solvent that is transparent in the region measured (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSICS (information) — Heat transfer, hypothermia, and rewarming
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-cp-a-05',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Heat Exchange Between the Body and Its Surroundings',
    passageText:
      'A resting adult produces heat at a rate of about 100 W, and core temperature stays near 37 °C only when heat is lost to the surroundings at the same rate. Four processes carry heat across the skin.\n\nConduction is the transfer of heat through a material from its warmer side to its cooler side without any bulk movement of the material. The rate of conduction through a layer of area $A$ and thickness $d$ is $kA\\,\\Delta T/d$, where $\\Delta T$ is the temperature difference across the layer and $k$ is the thermal conductivity of the material: about 0.025 W/(m·°C) for still air, 0.20 W/(m·°C) for fat, and 0.60 W/(m·°C) for water. Convection is the carrying away of heat by a moving fluid. Air or water that has been warmed by the skin is swept away and replaced by cooler fluid, which keeps the temperature difference across the thin layer next to the skin large. Radiation is the emission of electromagnetic waves, chiefly infrared, by every surface; the power emitted rises with the fourth power of the absolute temperature of the surface, and a body also absorbs the radiation emitted by its surroundings. Evaporation removes about 2400 J for every gram of water that is vaporized from the skin or the airways.\n\nHow far a given quantity of heat changes the temperature of an object depends on the mass of the object and on its specific heat. The specific heat of the human body averages about 3500 J/(kg·°C). That of water is 4200 J/(kg·°C); the body’s value is lower because fat, protein, and bone store less heat per kilogram than water does. Air has a specific heat of about 1000 J/(kg·°C) and a density near 1.2 kg/m³, roughly one-thousandth the density of water.\n\nHypothermia is defined as a core temperature below 35 °C. The body defends itself against cooling by constricting the blood vessels of the skin, which lets the skin and the fat beneath it act as an insulating shell, and by shivering, which can raise heat production severalfold for a limited time. These defenses are quickly overwhelmed in cold water. A person immersed in water at 10 °C may become hypothermic within an hour, whereas the same person, lightly dressed in still air at 10 °C, could maintain core temperature for many hours.\n\nMethods of rewarming are classified by the source of the heat. In passive rewarming, wet clothing is removed, the patient is dried and wrapped in insulating layers, often including a thin sheet of plastic film coated with metal, and the patient’s own heat production restores the core temperature. In active external rewarming, heat is applied to the skin with forced warm air or heating pads. Active internal rewarming delivers heat directly to the core, for example by infusing intravenous fluid that has been warmed to 40–42 °C, or by having the patient breathe air that has been warmed and saturated with water vapor. Dry air warmed to the same temperature is far less effective.',
    questions: [
      {
        question: 'A 60-kg patient whose body temperature is uniformly 30 °C receives 1.0 kg of intravenous fluid at 40 °C. If the fluid has the specific heat of water and no heat is exchanged with the surroundings, the patient’s temperature rises by approximately:',
        options: ['0.2 °C', '2.0 °C', '5.0 °C', '10 °C'],
        correctAnswer: 0,
        explanation:
          'The heat given up by the fluid equals the heat gained by the body. The body’s heat capacity is $(60)(3500) = 210{,}000$ J/°C, fifty times that of the fluid, $(1.0)(4200) = 4200$ J/°C, so the body warms by one-fiftieth of the amount by which the fluid cools. The fluid cools by very nearly 10 °C, giving up about 42,000 J, and $42{,}000 / 210{,}000 = 0.2$ °C. A rise of 2.0 °C misplaces a decimal in this ratio. A rise of 5.0 °C would bring both to the midpoint of the two temperatures, which would be correct only if the fluid and the body had equal heat capacities. A rise of 10 °C would bring the patient to the starting temperature of the fluid, which would require the fluid to give up heat without cooling.',
        optionExplanations: [
          'The body’s heat capacity is $(60)(3500) = 210{,}000$ J/°C, fifty times that of the fluid, $(1.0)(4200) = 4200$ J/°C. The fluid cools almost 10 °C and releases about 42,000 J, so the body warms by $42{,}000/210{,}000 \\approx 0.2$ °C.',
          'This is off by a factor of ten. The ratio of heat capacities is 50, not 5, so the body rises by one-fiftieth of the fluid’s drop (about 10 °C), which is 0.2 °C, not 2.0 °C.',
          'A 5.0 °C rise would bring both the body and the fluid to 35 °C, the midpoint. That happens only when the two heat capacities are equal; here the body’s is fifty times larger, so it barely changes temperature.',
          'A 10 °C rise would bring the patient to the fluid’s starting temperature of 40 °C, which would require the fluid to give up heat without cooling at all. Heat flows until the two temperatures meet, and the fluid must cool as the body warms.',
        ],
        skill: '5E heat exchange between two bodies, Q = mcΔT (Skill 2)',
      },
      {
        question: 'Dry clothing holds a layer of still air against the skin, and when the clothing is soaked, water takes the place of that air. If the thickness of the layer and the temperatures on its two sides stay the same, soaking the clothing changes the rate at which heat is conducted through the layer by a factor of approximately:',
        options: ['0.04', '4', '24', '576'],
        correctAnswer: 2,
        explanation:
          'With the area, thickness, and temperature difference fixed, the rate of conduction is proportional to the thermal conductivity of the layer, so replacing air with water multiplies the rate by $0.60 / 0.025 = 24$. A factor of 0.04 is the inverse ratio and would mean that wet clothing insulates better than dry clothing. A factor of about 4 is the ratio of the specific heats of water and air, which governs how much heat each stores, not how fast heat passes through. A factor of 576 squares the ratio of conductivities, although the rate depends on the first power of $k$.',
        optionExplanations: [
          'This is the inverse ratio, $0.025/0.60 \\approx 0.04$, which would mean wet clothing conducts heat more slowly than dry and so insulates better. Water conducts far better than still air, so the rate rises, not falls.',
          'This is roughly the ratio of specific heats of water and air (4200/1000). Specific heat governs how much heat a material stores, not how fast heat passes through it; conduction rate depends on thermal conductivity.',
          'With area, thickness, and temperature difference fixed, the conduction rate is proportional to thermal conductivity. Replacing still air ($k = 0.025$) with water ($k = 0.60$) multiplies the rate by $0.60/0.025 = 24$.',
          'This is $24^2$, the squared ratio of conductivities. The conduction formula $kA\\,\\Delta T/d$ is linear in $k$, so the rate scales with the first power of the conductivity ratio, not its square.',
        ],
        skill: '4A/5E proportional reasoning with thermal conduction (Skill 2)',
      },
      {
        question: 'Which process of heat loss is the metal coating on the plastic film specifically intended to reduce?',
        options: [
          'Conduction, because a metal has a very low thermal conductivity',
          'Radiation, because a metal surface reflects infrared waves',
          'Convection, because a metal coating keeps air from circulating',
          'Evaporation, because a metal coating absorbs water vapor from skin',
        ],
        correctAnswer: 1,
        explanation:
          'A warm body emits infrared radiation, and a shiny metal surface is a good reflector and a poor emitter of electromagnetic waves, so the coating returns much of the emitted radiation to the patient. Metals are excellent conductors of heat, so the coating cannot reduce conduction, and it is in any case far too thin to insulate. The plastic film itself is what blocks moving air and so limits convection; adding metal contributes nothing to that. Metals do not absorb water vapor, and evaporation is limited by the impermeable film, not by its coating.',
        optionExplanations: [
          'Metals are excellent conductors of heat, not poor ones, so a metal coating cannot reduce conduction. In any case the coating is far too thin to act as an insulating layer.',
          'A warm body loses heat by emitting infrared radiation. A shiny metal surface reflects infrared and is a poor emitter, so the coating returns much of the patient’s emitted radiation and cuts radiative loss.',
          'It is the plastic film itself, as an impermeable barrier, that stops air from circulating and so limits convection. Adding a metal coating to the film contributes nothing further to blocking air movement.',
          'Metals do not absorb water vapor. Evaporation is limited by the impermeable plastic film trapping moisture near the skin, not by its metal coating, which serves a different purpose.',
        ],
        skill: '5E mechanisms of heat transfer: radiation (Skill 1)',
      },
      {
        question: 'Warm air that is saturated with water vapor delivers far more heat to a hypothermic patient’s airways than dry air at the same temperature does, chiefly because the water vapor:',
        options: [
          'is at a higher temperature than the air with which it is mixed.',
          'conducts heat poorly, which keeps the inhaled air from cooling.',
          'is denser than air, which increases the mass of gas in each breath.',
          'releases its heat of vaporization as it condenses on the cooler airway walls.',
        ],
        correctAnswer: 3,
        explanation:
          'Vaporizing water absorbs a large quantity of heat, and that heat is given back when the vapor condenses. Vapor that meets the cooler lining of the airways condenses there and releases about 2400 J per gram, whereas a gram of dry air cooling by 10 °C gives up only about 10 J. Gases mixed in the same sample are at the same temperature, so the vapor cannot be warmer than the air around it. Poor conduction would hinder the delivery of heat to the airways, not help it. Water vapor, with a molar mass of 18 g/mol, is less dense than air, and the mass inhaled is in any case not what accounts for the difference.',
        optionExplanations: [
          'Gases mixed in the same sample share a single temperature. Water vapor saturating warm air is at the same temperature as the air, so it cannot deliver heat by being warmer.',
          'Poor thermal conduction would slow the transfer of heat into the airway walls, hindering rewarming rather than helping it. The vapor’s advantage comes from a phase change, not from conduction properties.',
          'Water vapor (18 g/mol) is less dense than air (about 29 g/mol), not more. And even if the mass per breath were slightly different, that could not account for a difference of two orders of magnitude in heat delivered.',
          'Vaporizing water absorbs about 2400 J per gram, and that heat is released again when the vapor condenses on the cooler airway lining. A gram of dry air cooling 10 °C gives up only about 10 J, so condensation delivers vastly more heat.',
        ],
        skill: '5E latent heat released on condensation (Skill 1)',
      },
    ],
  },
]

export const FL7_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl7-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Barium sulfate is swallowed as a contrast agent for X-ray imaging even though dissolved Ba²⁺ is toxic. Adding a small amount of soluble sodium sulfate to the suspension lowers the concentration of dissolved Ba²⁺ because the added sulfate ion:',
    options: [
      'lowers the $K_{sp}$ of BaSO₄, so that less of the solid dissolves at equilibrium.',
      'raises the pH of the mixture, so that Ba²⁺ precipitates as barium hydroxide.',
      'shifts the dissolution equilibrium toward solid BaSO₄, while $K_{sp}$ keeps the same value.',
      'forms a soluble complex with Ba²⁺, so that less of the free ion stays in solution.',
    ],
    correctAnswer: 2,
    explanation:
      'Solid BaSO₄ is in equilibrium with its ions, and $K_{sp} = [\\text{Ba}^{2+}][\\text{SO}_4^{2-}]$ is a constant at a given temperature. Raising the sulfate concentration makes the ion product exceed $K_{sp}$, so BaSO₄ precipitates until the product returns to $K_{sp}$, which leaves less Ba²⁺ in solution; this is the common-ion effect. The value of $K_{sp}$ changes with temperature, not with the addition of an ion. Sulfate is so weak a base that it has almost no effect on pH, and barium hydroxide is in any case a soluble strong base. Sulfate forms an insoluble salt with Ba²⁺, not a soluble complex, and a complexing agent would increase the total amount of barium in solution.',
    optionExplanations: [
      '$K_{sp}$ is an equilibrium constant that changes only with temperature. Adding an ion cannot lower it; the ion product temporarily exceeds the unchanged $K_{sp}$, and precipitation restores it.',
      'Sulfate is an extremely weak base and has essentially no effect on pH. Even if the pH rose, barium hydroxide is a soluble strong base, so Ba²⁺ would not precipitate as Ba(OH)₂.',
      'Raising the sulfate concentration pushes the ion product above $K_{sp}$, so BaSO₄ precipitates until $[\\text{Ba}^{2+}][\\text{SO}_4^{2-}]$ returns to the constant. Less Ba²⁺ remains dissolved while $K_{sp}$ itself is unchanged: the common-ion effect.',
      'Sulfate forms an insoluble salt with Ba²⁺, not a soluble complex. A complexing agent would do the opposite of what is wanted, pulling more barium into solution by stabilizing it as a dissolved species.',
    ],
    skill: '5A common-ion effect on solubility (Skill 1)',
  },
  {
    id: 'fl7-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'The hydrogen carbonate ion, HCO₃⁻, is amphoteric. When a strong base such as NaOH is added to an aqueous solution of NaHCO₃, the HCO₃⁻ ion acts as:',
    options: [
      'an acid, and it is converted to CO₃²⁻.',
      'an acid, and it is converted to H₂CO₃.',
      'a base, and it is converted to CO₃²⁻.',
      'a base, and it is converted to H₂CO₃.',
    ],
    correctAnswer: 0,
    explanation:
      'Hydroxide ion removes a proton from HCO₃⁻: $\\text{HCO}_3^- + \\text{OH}^- \\rightarrow \\text{CO}_3^{2-} + \\text{H}_2\\text{O}$. A species that donates a proton is acting as a Brønsted–Lowry acid, and what remains after the proton is lost, CO₃²⁻, is its conjugate base. H₂CO₃ is the conjugate acid of HCO₃⁻ and forms only when HCO₃⁻ accepts a proton, so an acid cannot be converted to it. HCO₃⁻ acts as a base when a strong acid is added, not when NaOH is added, and a base that accepted a proton would become H₂CO₃; it could not become CO₃²⁻, which has one proton fewer.',
    optionExplanations: [
      'Hydroxide removes a proton from HCO₃⁻, giving CO₃²⁻ and water. Donating a proton is the defining behavior of a Brønsted–Lowry acid, and the product that remains, CO₃²⁻, is the conjugate base of HCO₃⁻.',
      'Acting as an acid means losing a proton, and H₂CO₃ has one more proton than HCO₃⁻, not one fewer. An acid cannot be converted into its own conjugate acid; H₂CO₃ forms only when HCO₃⁻ accepts a proton.',
      'HCO₃⁻ acts as a base only when a proton donor is added, such as a strong acid. NaOH supplies OH⁻, a proton acceptor, so HCO₃⁻ must act as the acid. A base gaining a proton also could not become CO₃²⁻, which has fewer protons.',
      'Toward a strong acid HCO₃⁻ would indeed act as a base and form H₂CO₃, but the species added here is a strong base. Hydroxide ion accepts a proton from HCO₃⁻, so HCO₃⁻ is the acid in this reaction.',
    ],
    skill: '5A amphoteric species and conjugate acid–base pairs (Skill 1)',
  },
  {
    id: 'fl7-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A liquid boils at 77 °C (350 K) under a pressure of 1 atm, and its enthalpy of vaporization at that temperature is 35 kJ/mol. The entropy of vaporization of the liquid at its boiling point is closest to:',
    options: ['−100 J/(mol·K)', '+0.10 J/(mol·K)', '+100 J/(mol·K)', '+455 J/(mol·K)'],
    correctAnswer: 2,
    explanation:
      'At the boiling point, liquid and vapor are in equilibrium, so $\\Delta G = \\Delta H - T\\Delta S = 0$ and $\\Delta S = \\Delta H / T = 35{,}000 / 350 = +100$ J/(mol·K). The sign must be positive, because a gas is far more disordered than the liquid from which it forms; −100 J/(mol·K) would describe condensation. The value +0.10 J/(mol·K) results from leaving the enthalpy in kilojoules while reporting the answer in joules. The value +455 J/(mol·K) results from dividing by the Celsius temperature, 77, instead of the absolute temperature.',
    optionExplanations: [
      'The sign is wrong. Vaporization converts liquid to gas, a large increase in disorder, so $\\Delta S$ must be positive. A value of −100 J/(mol·K) would describe the reverse process, condensation.',
      'This leaves $\\Delta H$ in kilojoules while labeling the answer in joules: $35/350 = 0.10$. Converting 35 kJ to 35,000 J before dividing by 350 K gives 100 J/(mol·K).',
      'At the boiling point liquid and vapor are in equilibrium, so $\\Delta G = 0$ and $\\Delta S = \\Delta H/T = 35{,}000\\ \\text{J/mol} / 350\\ \\text{K} = +100$ J/(mol·K). The positive sign reflects the greater disorder of the gas.',
      'This divides by the Celsius temperature, $35{,}000/77 \\approx 455$. Thermodynamic relations such as $\\Delta S = \\Delta H/T$ require absolute temperature in kelvin, which is 350 K here.',
    ],
    skill: '5E entropy of vaporization at the boiling point (Skill 2)',
  },
  {
    id: 'fl7-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A 0.50-kg mass is attached to a vertical spring and lowered slowly until it hangs at rest, with the spring stretched 0.10 m beyond its natural length. Taking $g = 10$ m/s², the elastic potential energy stored in the spring is:',
    options: ['0.25 J', '0.50 J', '2.5 J', '5.0 J'],
    correctAnswer: 0,
    explanation:
      'At rest the spring force balances the weight, $kx = mg$, so $k = (0.50)(10) / 0.10 = 50$ N/m, and the stored energy is $\\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(50)(0.10)^2 = 0.25$ J. The value 0.50 J is $mgx$, the gravitational potential energy lost by the mass; it overstates the energy stored, because the spring force grows from zero to $mg$ during the stretch and averages only half of $mg$, the remainder of the energy being taken up by the hand that lowers the mass. The value 2.5 J is $\\tfrac{1}{2}kx$, which omits the square. The value 5.0 J is $kx$, which is the spring force in newtons and not an energy.',
    optionExplanations: [
      'From equilibrium, $k = mg/x = (0.50)(10)/0.10 = 50$ N/m. The stored elastic energy is $\\tfrac{1}{2}kx^2 = \\tfrac{1}{2}(50)(0.10)^2 = 0.25$ J.',
      'This is $mgx = (0.50)(10)(0.10) = 0.50$ J, the gravitational potential energy the mass loses. Only half of it is stored in the spring, because the spring force grows from zero to $mg$ and averages $mg/2$; the lowering hand absorbs the rest.',
      'This is $\\tfrac{1}{2}kx = \\tfrac{1}{2}(50)(0.10) = 2.5$, which omits the square on $x$. Spring potential energy depends on the square of the extension, giving 0.25 J.',
      'This is $kx = (50)(0.10) = 5.0$ N, the spring force at equilibrium, which is a force rather than an energy. Energy requires the factor $\\tfrac{1}{2}$ and a second factor of $x$.',
    ],
    skill: '4A Hooke’s law and spring potential energy (Skill 2)',
  },
  {
    id: 'fl7-cp-a-d05',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'An object is placed 15 cm from a thin converging lens that has a focal length of 10 cm. The image formed by the lens is:',
    options: [
      'real, inverted, and half the size of the object.',
      'real, inverted, and twice the size of the object.',
      'virtual, upright, and half the size of the object.',
      'virtual, upright, and twice the size of the object.',
    ],
    correctAnswer: 1,
    explanation:
      'From the thin-lens equation, $1/i = 1/f - 1/o = 1/10 - 1/15 = 1/30$, so the image lies 30 cm from the lens on the side opposite the object. A positive image distance means that the image is real, and a real image formed by a single lens is inverted. The magnification is $-i/o = -30/15 = -2$, so the image is twice the size of the object. A real image half the size of the object would form if the two distances were interchanged, with the object 30 cm from the lens. A virtual, upright image forms only when the object is closer to a converging lens than its focal length, and such an image is always enlarged, never reduced.',
    optionExplanations: [
      'A real, inverted image half the size of the object would form if the object were 30 cm from the lens, with the image at 15 cm. Here the object is at 15 cm, inside twice the focal length, so the image is enlarged, not reduced.',
      'From $1/i = 1/f - 1/o = 1/10 - 1/15 = 1/30$, the image is 30 cm beyond the lens. A positive image distance means a real image, which a single lens inverts, and $m = -i/o = -30/15 = -2$, so it is twice the object’s size.',
      'A virtual, upright image from a converging lens forms only when the object is inside the focal length (closer than 10 cm). At 15 cm the object is outside the focal point, so the image is real and inverted.',
      'With the object at 15 cm, beyond the 10-cm focal length, a converging lens forms a real, inverted image, not a virtual, upright one. Virtual images from a converging lens are always enlarged, but that is not the case here.',
    ],
    skill: '4D thin-lens equation and magnification (Skill 2)',
  },
  {
    id: 'fl7-cp-a-d06',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'In Newman projections drawn along the C2–C3 bond of butane, the gauche conformation is higher in energy than the anti conformation because, in the gauche conformation:',
    options: [
      'the two methyl groups are 180° apart, which is too far for them to attract each other.',
      'the two methyl groups are 0° apart, which places their bonds in full eclipse.',
      'the C–H bonds on C2 are aligned with those on C3, which creates torsional strain.',
      'the two methyl groups are 60° apart, which lets them crowd each other.',
    ],
    correctAnswer: 3,
    explanation:
      'The anti and gauche conformations are both staggered, so neither has eclipsed bonds. In the anti conformation the two methyl groups are 180° apart; in the gauche conformation they are only 60° apart, close enough for their electron clouds to repel each other, and this steric strain raises the energy by roughly 4 kJ/mol. An angle of 180° describes the anti conformation itself, which is the more stable of the two. An angle of 0° between the methyl groups describes the fully eclipsed conformation, the least stable of all, and not the gauche form. Aligned C–H bonds occur only in eclipsed conformations, not in a staggered conformation such as gauche.',
    optionExplanations: [
      'A 180° separation of the methyl groups describes the anti conformation, which is the more stable of the two staggered forms. Nothing about the anti form explains why gauche is higher in energy.',
      'A 0° separation describes the fully eclipsed conformation, the least stable of all butane conformations. The gauche conformation is staggered, not eclipsed, so its bonds are not in full eclipse.',
      'Aligned C–H bonds, and the torsional strain they cause, occur only in eclipsed conformations. Both gauche and anti are staggered, with all bonds 60° apart, so torsional strain cannot distinguish them.',
      'In the gauche conformation the two methyl groups sit on adjacent staggered positions, only 60° apart. Their electron clouds repel, producing steric strain of roughly 4 kJ/mol relative to the anti form, where the methyls are 180° apart.',
    ],
    skill: '5D conformations of butane in Newman projections (Skill 1)',
  },
  {
    id: 'fl7-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Which property of a polypeptide backbone is a consequence of resonance within the peptide bond?',
    options: [
      'The C–N bond of the peptide group is longer than the C–N single bond of an amine.',
      'Rotation is restricted about the C–N bond of the peptide group but is free about both bonds to the α-carbon.',
      'Rotation is restricted about the bonds to the α-carbon but is free about the C–N bond of the peptide group.',
      'The nitrogen of the peptide group is basic enough to carry a positive charge at physiological pH.',
    ],
    correctAnswer: 1,
    explanation:
      'Delocalization of the nitrogen lone pair into the carbonyl group gives the C–N bond of the peptide group partial double-bond character. Rotation about that bond would destroy the overlap, so it is restricted, whereas the N–Cα and Cα–C bonds are ordinary single bonds; rotation about these two bonds is what allows a chain to fold. The option that assigns the restriction to the bonds at the α-carbon reverses the two. Partial double-bond character makes the C–N bond shorter, not longer, than the single bond of an amine. Because its lone pair is committed to resonance, the amide nitrogen is not appreciably basic and is not protonated at physiological pH.',
    optionExplanations: [
      'Resonance gives the peptide C–N bond partial double-bond character, which makes it shorter than an ordinary amine C–N single bond, not longer. This reverses the actual effect.',
      'Delocalizing the nitrogen lone pair into the carbonyl gives the C–N bond partial double-bond character; rotation would destroy that overlap, so it is restricted. The N–Cα and Cα–C bonds are ordinary single bonds and rotate freely, allowing folding.',
      'This reverses the two: the bonds to the α-carbon are single bonds with free rotation (the φ and ψ angles), while the peptide C–N bond is the one locked by resonance.',
      'Because its lone pair is committed to resonance with the carbonyl, the amide nitrogen is not available to accept a proton and is essentially non-basic. It is not protonated at physiological pH.',
    ],
    skill: '5D resonance and restricted rotation in the peptide bond (Skill 1)',
  },
  {
    id: 'fl7-cp-a-d08',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Squalene, the open-chain hydrocarbon from which cholesterol is made, has the molecular formula C₃₀H₅₀ and is assembled entirely from five-carbon isoprene units. Squalene contains:',
    options: [
      'three isoprene units and is classified as a triterpene.',
      'six isoprene units and is classified as a triterpene.',
      'six isoprene units and is classified as a sesquiterpene.',
      'three isoprene units and is classified as a sesquiterpene.',
    ],
    correctAnswer: 1,
    explanation:
      'Each isoprene unit contributes five carbons, so a 30-carbon skeleton contains $30 / 5 = 6$ units. Terpenes are named by pairs of isoprene units: a monoterpene has two units (10 carbons), a sesquiterpene three (15 carbons), a diterpene four (20 carbons), and a triterpene six (30 carbons). Squalene is therefore a triterpene built from six units. The prefix tri- counts ten-carbon terpene units, not isoprene units, so three isoprene units would make a 15-carbon sesquiterpene, and neither option with three units fits a 30-carbon compound. Six units do not make a sesquiterpene, which has only 15 carbons.',
    optionExplanations: [
      'Three isoprene units contain only 15 carbons, not the 30 in squalene. Three isoprene units would make a sesquiterpene; a triterpene requires six.',
      'Each isoprene unit has five carbons, so C₃₀ contains $30/5 = 6$ units. Terpenes are named by ten-carbon pairs of isoprene units: mono- (2 units), sesqui- (3), di- (4), tri- (6). Six units make a triterpene.',
      'Six isoprene units is the correct count, but six units make a 30-carbon triterpene. A sesquiterpene has three units and 15 carbons, so the classification does not match the unit count.',
      'Three isoprene units would indeed be a sesquiterpene, but that compound has only 15 carbons. Squalene has 30 carbons and so must contain six isoprene units, making it a triterpene.',
    ],
    skill: '5D isoprene units and terpene classification (Skill 1)',
  },
]
