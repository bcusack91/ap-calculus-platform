import type { ShotList } from '../types'

/**
 * Shot list: MCAT Physics — Fluids Part 4: Viscosity & Blood Flow
 * (topic mcat-physics-mechanics-fluid-dynamics-mcat, "Fluids in Motion"; the last of four Fluids video parts).
 *
 * Source: lesson Part 2 (src/data/interactive-lessons/mcat-mcat-physics-mechanics-fluid-dynamics-mcat-part2.ts),
 * its deck figures (FL_ALL at FLUIDS_IN_MOTION_AT in src/data/deck-figures/index.ts) and its
 * lesson-built exit pool (the part-2 items of src/data/exit-quizzes/lesson-built/mcat-physics-mechanics-fluid-dynamics-mcat.ts).
 * Eight Manim clips in four pairs (owner format, Nov 2026): a CONCEPT clip that teaches the
 * idea and ends on the "Remember" recap, then a WORKED-EXAMPLES clip with two examples, each
 * shown in full with a pause-and-try prompt before the solution. Concept clips get conceptual
 * checkpoint questions; worked-example clips get questions that mirror their two examples
 * with new numbers.
 * Clips 1–2 follow "Viscosity: When Fluids Are Real". Clips 3–4 follow "Poiseuille's Law".
 * Clips 5–6 follow "The Circulation as a Fluids Problem". Clips 7–8 follow "Grading a
 * Stenosis: Which Law Applies?", "Passage Strategy: Pick the Regime First" (its physics,
 * without the word) and "Worked Example — Grading a Stenosis" (clip 8, Example 1 keeps the
 * lesson's numbers). Flow rate, continuity, Bernoulli, Torricelli and the Venturi meter are
 * Fluids Part 3 and are assumed. The low-yield extras (the critical Reynolds number of about
 * 2000, the Korotkoff name, airway resistance peaking in the medium bronchi, the
 * Fåhræus–Lindqvist effect) are left out.
 *
 * Every clip is `mcatOnly: 'all'`: AP Physics 1 does not test viscosity or Poiseuille's law,
 * so no section of this part is shared. Working values: g = 10 m/s², blood density
 * 1000 kg/m³ (the lesson's value) and blood viscosity 4.0 × 10⁻³ Pa·s (the lesson gives no
 * number, only "3 to 4 times water"). Vascular resistance is in mmHg·min/L or mmHg·s/mL.
 *
 * The checkpoint questions are what a YouTube viewer answers at studymondo.com/v/<code>
 * (src/data/video-short-links.ts). Proposed codes: viscous1/viscous2, pipe1/pipe2,
 * blood1/blood2, stenosis1/stenosis2. They use new scenarios and numbers, so they never
 * repeat an exit-quiz item or a worked example. The last clip closes the fluids series, so
 * its end card says "Thanks for watching" with no "Up next" (owner, 2026-11-18).
 */
export const shotList: ShotList = {
  courseSlug: 'mcat-prep',
  topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat',
  title: 'Fluids Part 4: Viscosity & Blood Flow',
  overview:
    'Eight animated clips in four pairs that take fluids from the ideal to the real: what viscosity is and why it costs pressure, how Poiseuille\'s law ties flow to the fourth power of a tube\'s radius, how the circulation works as a circuit with the heart as its battery, and how to choose the right law for a narrowed vessel. Each idea gets a concept clip followed by a worked-examples clip in which every problem is shown in full, with a moment to pause and try it before the solution. The clips assume the flow rate, continuity and Bernoulli ideas from Fluids Part 3 and the series and parallel rules from the Circuits videos. The biology runs deep here: hematocrit, murmurs and bruits, the blood-pressure cuff, cardiac output and total peripheral resistance, arterioles as the body\'s control valves, stenoses and aneurysms. Each clip ends with three checkpoint questions; the topic exit quiz follows the last clip.',
  clips: [
    // ── 1 · Viscosity and real fluids (concepts) ─────────────────────────
    {
      title: 'Viscosity and Real Fluids',
      minutes: 7,
      goal: 'Explain what viscosity is and why it makes pressure fall along a uniform tube, describe the velocity profile of smooth flow, and predict when flow turns turbulent and how that is heard in the body.',
      keyPoints: [
        'Viscosity η is a fluid\'s internal friction: its resistance to layers sliding past one another, measured in pascal-seconds (Pa·s). Honey is far more viscous than water, and a liquid\'s viscosity falls as it warms.',
        'Blood is about 3 to 4 times as viscous as water, and its viscosity rises with hematocrit, the fraction of blood volume taken up by red cells: polycythemia thickens blood, anemia thins it.',
        'In smooth flow through a tube, the layer touching the wall is at rest and the center moves fastest, a bullet-shaped (parabolic) profile. The v in Q = Av is the AVERAGE across the tube.',
        'Viscosity costs energy. Friction between layers turns mechanical energy into heat, so pressure falls steadily along even a uniform, horizontal tube. Bernoulli\'s equation predicts no drop there, because it assumes no energy is lost; a pressure difference is needed just to keep a real fluid moving at constant speed, which is why the heart must keep pumping.',
        'Laminar flow is smooth layers that do not mix: silent, with flow proportional to the pressure difference. Turbulent flow is chaotic eddies: noisy, and it needs much more pressure for the same flow. Turbulence is more likely with higher speed, larger diameter, higher density and lower viscosity, combined in the Reynolds number Re = ρvD/η; above a critical value the flow turns turbulent, and then neither Bernoulli\'s equation nor Poiseuille\'s law holds.',
        'Blood flow is mostly laminar. Turbulence appears where blood moves fast (past a narrowed valve or vessel, in the aorta in heavy exercise, in severe anemia) and is heard as a murmur over the heart or a bruit over an artery. A blood-pressure cuff uses it: tapping sounds begin when the cuff pressure falls to systolic and vanish when it falls below diastolic.',
      ],
      showOnScreen: [
        'Honey and water poured side by side, then a stack of fluid layers sliding past one another with friction arrows between them and the label η (Pa·s)',
        'A blood sample spun down into plasma and red cells with a hematocrit readout, and a viscosity dial rising with it (anemia, normal, polycythemia)',
        'A tube in cross-section with velocity arrows: zero at the wall, longest at the center, tracing a parabola; a dashed line marks the average speed used in Q = Av',
        'A uniform horizontal tube with a row of pressure gauges: for the ideal fluid every gauge reads the same; for the real fluid the readings step down evenly, with heat shimmering off the tube',
        'The laminar-vs-turbulent table filling row by row (pattern, energy loss, sound), with smooth streamlines beside swirling eddies',
        'Re = ρvD/η with four sliders (speed, diameter, density, viscosity), a needle swinging from "laminar" toward "turbulent"',
        'A stethoscope over a narrowed valve (murmur) and over a narrowed artery (bruit), then a cuff on an arm with its pressure falling past systolic (sounds start) and past diastolic (sounds stop)',
        'The "Remember" recap',
        'End card: "Up next: Viscosity: Worked Examples"',
      ],
      pitfalls: [
        'Using Bernoulli to explain the pressure drop along a uniform tube: it predicts none.',
        'Thinking friction slows the fluid along the tube: the speed stays the same and the PRESSURE falls.',
        'Treating the speed in Q = Av as the speed everywhere across the tube.',
        'Saying thicker blood is more turbulent: higher viscosity damps turbulence.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'Blood flows smoothly through an artery at an average speed of 30 cm/s. Which statement describes the blood at the wall and at the center of the artery?',
          options: [
            'At rest at the wall; faster than 30 cm/s at the center',
            'At 30 cm/s at the wall; also 30 cm/s at the center',
            'Fastest at the wall; slower than 30 cm/s at the center',
            'At rest at the wall; exactly 30 cm/s at the center',
          ],
          correctAnswer: 0,
          explanation:
            'In laminar flow the layer touching the wall does not move and the speed rises toward the center, so the center must be faster than the average for the slow outer layers to be balanced. The same speed everywhere is the ideal-fluid picture, with no friction between layers; "fastest at the wall" has the profile inside out; and putting the average at the center forgets that every other layer is slower than the center, which would drag the average below 30 cm/s.',
        },
        {
          question: 'Honey is pumped steadily through a horizontal pipe of uniform width. Compared with a point upstream, the honey at a point farther downstream has:',
          options: [
            'A lower speed and the same pressure',
            'A lower speed and a lower pressure',
            'The same speed and a lower pressure',
            'The same speed and the same pressure',
          ],
          correctAnswer: 2,
          explanation:
            'The pipe\'s area is the same everywhere, so continuity keeps the average speed the same; friction between the layers turns energy into heat, and that loss shows up as a falling pressure. "Lower speed" would mean less volume passing each second downstream, which a leak-free pipe cannot do. "Same speed, same pressure" is Bernoulli\'s answer for an ideal fluid, which ignores the friction that honey has in abundance.',
        },
        {
          question: 'A pump pushes water through a pipe. At first, doubling the pump pressure doubles the flow. Beyond a certain pressure, doubling it again raises the flow by much less. What changed?',
          options: [
            'The water grew more viscous as its speed rose',
            'The flow turned turbulent, and eddies waste energy',
            'Continuity limits the flow that one pipe can carry',
            'The wall layer broke free and began to slide',
          ],
          correctAnswer: 1,
          explanation:
            'Laminar flow is proportional to the pressure difference. As the speed rises, so does the Reynolds number, and past a critical value the flow turns turbulent: the eddies turn much more energy into heat, so far more pressure is needed for each extra bit of flow. Water\'s viscosity does not rise with its speed; continuity only says the flow is the same at every cross-section, not that it has a ceiling; and a wall layer that slid would carry MORE flow, not less.',
        },
      ],
    },
    // ── 2 · Viscosity (worked examples) ──────────────────────────────────
    {
      title: 'Viscosity: Worked Examples',
      minutes: 5,
      goal: 'Track the steady pressure drop along a uniform tube carrying a viscous fluid, and compute and compare Reynolds numbers to judge which flow is closer to turbulence.',
      keyPoints: [
        'Uniform tube, steady flow: the speed is the same at every point (continuity), and the pressure falls by the same amount in every meter.',
        'Bernoulli would give no drop at all in a uniform, horizontal tube; the whole drop is the cost of viscosity.',
        'Re = ρvD/η has no units. Use the DIAMETER, in meters, and the average speed.',
        'For a comparison, scale Re factor by factor: up with speed, diameter and density, down with viscosity.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the 2.0 m tube with gauges at each end, a pressure-vs-position graph drawn as a straight line from 5000 Pa to 1000 Pa, the 1.5 m point read off at 2000 Pa, then the line extended to 3.0 m',
        'Example 2: the aorta with ρ, v, D and η labeled, the units cancelling to leave Re = 1500; then the anemia and polycythemia cases as factor changes on a laminar-to-turbulent gauge',
        'The "Remember" recap of the method',
        'End card: "Up next: Poiseuille\'s Law"',
      ],
      workedExample:
        'Example 1: Glycerin flows steadily through a horizontal tube of uniform width, 2.0 m long. A gauge at the inlet reads 5000 Pa and a gauge at the outlet reads 1000 Pa. The glycerin enters at 0.20 m/s. (a) What is its speed at the outlet? (b) What outlet pressure would Bernoulli\'s equation predict? (c) What is the pressure 1.5 m from the inlet? (d) If the same flow ran through 3.0 m of the same tube, what would the total pressure drop be? (a) The area is the same, so by continuity the speed is still 0.20 m/s; (b) same speed and same height, so Bernoulli predicts no change: 5000 Pa; (c) the real drop is 5000 − 1000 = 4000 Pa over 2.0 m, or 2000 Pa per meter, so after 1.5 m the pressure is 5000 − (2000)(1.5) = 2000 Pa; (d) (2000 Pa/m)(3.0 m) = 6000 Pa. Example 2: Blood (density 1000 kg/m³, viscosity 4.0 × 10⁻³ Pa·s) moves through an aorta 2.0 cm in diameter at an average speed of 0.30 m/s. (a) What is the Reynolds number? (b) In severe anemia the viscosity falls to half and the heart pushes the blood 1.5 times as fast. What is the new Reynolds number? (c) Which way does that push the flow, and how would a clinician detect it? (d) In polycythemia the viscosity doubles at the normal speed. What is the Reynolds number, and what does thicker blood cost? (a) Re = ρvD/η = (1000)(0.30)(0.020)/(4.0 × 10⁻³) = 6.0/(4.0 × 10⁻³) = 1500, with no units; (b) Re scales as v/η, so it changes by 1.5/0.5 = 3, to 4500; (c) toward turbulence, heard through a stethoscope as a murmur; (d) Re = 1500/2 = 750, farther from turbulence, but the thicker blood has more friction, so the heart must supply more pressure for the same flow.',
      pitfalls: [
        'Lowering the speed along a uniform tube "because of friction".',
        'Using the radius, or leaving the diameter in centimeters, in Re = ρvD/η.',
        'Multiplying by the viscosity in a Reynolds comparison instead of dividing.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'Oil flows steadily through a horizontal tube of uniform width, 3.0 m long. The inlet gauge reads 9000 Pa and the outlet gauge reads 3000 Pa. What is the pressure 1.0 m from the inlet?',
          options: ['5000 Pa', '6000 Pa', '9000 Pa', '7000 Pa'],
          correctAnswer: 3,
          explanation:
            'The drop is 9000 − 3000 = 6000 Pa over 3.0 m, or 2000 Pa per meter, so 1.0 m in the pressure is 9000 − 2000 = 7000 Pa. 5000 Pa is the pressure 1.0 m from the OUTLET; 6000 Pa is the midpoint (and the size of the total drop); and 9000 Pa is Bernoulli\'s answer, no change in a uniform horizontal tube, which ignores viscosity.',
        },
        {
          question: 'Blood enters a narrowing where the vessel\'s diameter is half its normal value, and the flow rate through the vessel is unchanged. By what factor does the Reynolds number, Re = ρvD/η, change in the narrowing?',
          options: ['It is doubled', 'It is halved', 'It is quadrupled', 'It is unchanged'],
          correctAnswer: 0,
          explanation:
            'Half the diameter means one-quarter of the area, so at the same flow rate the speed is 4 times as great. Re ∝ vD changes by 4 × ½ = 2: flow in a narrowing is closer to turbulence. "Halved" changes the diameter and forgets the speed; "quadrupled" changes the speed and forgets the diameter; and "unchanged" takes the speed as only doubling, as if v ∝ 1/D instead of 1/D².',
        },
        {
          question: 'A patient\'s blood viscosity falls from 4.0 × 10⁻³ to 3.0 × 10⁻³ Pa·s after an infusion, while the average blood speed in the aorta rises from 0.30 to 0.40 m/s. By about what factor does the Reynolds number change?',
          options: ['About 1.3', 'About 0.56', 'About 1.8', 'About 1.0'],
          correctAnswer: 2,
          explanation:
            'Re ∝ v/η, so the factor is (0.40/0.30) × (4.0/3.0) = 16/9 ≈ 1.8. About 1.3 counts the speed alone (or the viscosity alone); about 1.0 multiplies by the viscosity ratio instead of dividing, so the two changes seem to cancel; and about 0.56 is the whole ratio upside down.',
        },
      ],
    },
    // ── 3 · Poiseuille's law (concepts) ──────────────────────────────────
    {
      title: 'Poiseuille\'s Law',
      minutes: 7,
      goal: 'State Poiseuille\'s law, explain how flow depends on pressure difference, radius, length and viscosity, and tell the fourth-power rule for flow apart from the squared rule of continuity.',
      keyPoints: [
        'For laminar flow of a viscous fluid through a long, rigid, cylindrical tube of radius r and length L, Q = πr⁴ΔP/(8ηL), where ΔP is the pressure difference between the tube\'s ends (the driving pressure).',
        'Three of the factors are simple proportions: double ΔP and the flow doubles; double the length or the viscosity and the flow halves.',
        'The fourth power of the radius is the one to remember. Double the radius and the flow is 16 times as great; halve it and the flow is one-sixteenth. A radius cut of only about 16% halves the flow, because 0.84⁴ ≈ 0.5. A wider tube wins twice: more area, and more fluid far from the wall, where it moves fastest.',
        'If the flow must stay the same, the driving pressure must make up the difference: half the radius needs 16 times the pressure.',
        'Squared or fourth power? Continuity relates speed and area when the flow rate is FIXED, so v ∝ 1/r². Poiseuille tells you what the flow rate will BE for a given pressure difference and tube, so Q ∝ r⁴.',
        'The law assumes laminar, steady flow of a fluid with constant viscosity through a rigid tube. Vessels flex and blood is a suspension of cells, but the r⁴ conclusion holds well enough to reason with.',
      ],
      showOnScreen: [
        'A long tube with a gauge at each end and a measuring cylinder filling at its outlet; Q = πr⁴ΔP/(8ηL) builds term by term as each quantity is highlighted on the tube',
        'Three sliders in turn: ΔP up (cylinder fills faster in proportion), L up and η up (it fills more slowly in proportion)',
        'Two tubes of radius r and 2r under the same pressure: the wider one fills 16 cylinders in the time the narrow one fills 1',
        'The parabolic profile in the narrow and the wide tube: the wide tube\'s parabola is both broader and taller',
        'The scaling table filling row by row (radius doubled, radius halved, length doubled, viscosity doubled, ΔP doubled) with resistance and flow columns',
        'A split screen: "flow fixed → continuity, v ∝ 1/r²" beside "pressure fixed → Poiseuille, Q ∝ r⁴"',
        'The "Remember" recap',
        'End card: "Up next: Poiseuille\'s Law: Worked Examples"',
      ],
      pitfalls: [
        'Using r² (the area) where Poiseuille needs r⁴.',
        'Applying continuity\'s "narrower means faster" when the pressure, not the flow, is what stays fixed.',
        'Putting the length or the viscosity in the numerator.',
        'Using Poiseuille for turbulent flow or a short, wide opening.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'Fluid drips too slowly from an IV bag through tubing and a narrow cannula. Assuming laminar flow limited by the cannula, which single change raises the flow rate the most?',
          options: [
            'Raising the bag to double the driving pressure',
            'Using a cannula that is half as long as before',
            'Using a cannula with 1.5 times the radius',
            'Diluting the fluid to half of its viscosity',
          ],
          correctAnswer: 2,
          explanation:
            'Q = πr⁴ΔP/(8ηL). A radius 1.5 times as large multiplies the flow by 1.5⁴ ≈ 5, while doubling the pressure, halving the length and halving the viscosity each only double it. Choosing one of those three treats the radius as if it entered to the first power, when it is the one factor raised to the fourth.',
        },
        {
          question: 'A long tube is replaced by one of half the radius, and the pressure difference across it is kept the same. What happens to the average SPEED of the fluid in the tube?',
          options: [
            'It quadruples, since the area falls to one-quarter',
            'It falls to one-quarter, since flow falls 16-fold',
            'It falls to one-sixteenth, the same as the flow',
            'It stays the same, since the pressure is unchanged',
          ],
          correctAnswer: 1,
          explanation:
            'At a fixed pressure difference Poiseuille gives Q ∝ r⁴, so the flow falls to 1/16. The area falls to 1/4, and v = Q/A = (1/16)/(1/4) = 1/4. "Quadruples" is continuity, which holds only if the flow rate is kept fixed; "one-sixteenth" reports the change in flow, not speed; and "the same" assumes pressure alone sets the speed, ignoring the tube\'s resistance.',
        },
        {
          question: 'For which of these flows would Poiseuille\'s law give the most trustworthy prediction?',
          options: [
            'Saline moving slowly through a long, narrow needle',
            'A turbulent jet just beyond a narrowed heart valve',
            'Water gushing from a short, wide hole in a tank',
            'Air rushing through a wide windpipe in a cough',
          ],
          correctAnswer: 0,
          explanation:
            'Poiseuille\'s law assumes laminar, steady flow through a long, rigid tube, which slow flow in a narrow needle matches. A turbulent jet breaks the laminar assumption; a short, wide hole has almost no length for friction to act over, so it is an ideal-flow (Torricelli) problem; and fast flow in a wide airway has a high Reynolds number and turns turbulent.',
        },
      ],
    },
    // ── 4 · Poiseuille's law (worked examples) ───────────────────────────
    {
      title: 'Poiseuille\'s Law: Worked Examples',
      minutes: 5.5,
      goal: 'Compute a flow rate from Poiseuille\'s law in SI units, and scale flow, pressure and speed when a tube\'s radius changes, at fixed pressure and at fixed flow.',
      keyPoints: [
        'Convert first: radius and length in meters, pressure in pascals, viscosity in Pa·s. Then Q comes out in m³/s, and 1 m³/s = 10⁶ mL/s.',
        'Raise the RADIUS (not the diameter) to the fourth power, and handle the powers of ten separately: (10⁻³)⁴ = 10⁻¹².',
        'For a changed tube, scale instead of recomputing: Q ∝ r⁴ΔP/(ηL).',
        'Ask what is held fixed. Fixed pressure: flow scales as r⁴ and speed as r². Fixed flow: pressure scales as 1/r⁴ and speed as 1/r².',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the tube with its four givens converted to SI, the substitution collapsing to π × 10⁻⁶ m³/s, the speed check v = Q/A = 1.0 m/s, then the half-radius tube at 1/16 of the flow and at 16 times the pressure',
        'Example 2: an artery segment with plaque shrinking its radius to 80%, a two-column table ("pressure fixed" and "flow fixed") filling with 0.8² = 0.64 and 0.8⁴ ≈ 0.41',
        'The "Remember" recap of the method',
        'End card: "Up next: Blood Flow as a Circuit"',
      ],
      workedExample:
        'Example 1: Blood (viscosity 4.0 × 10⁻³ Pa·s) flows through a tube of radius 1.0 mm and length 25 cm under a pressure difference of 8000 Pa (about 60 mmHg). (a) What is the flow rate, in m³/s and in mL/s? (b) What is the average speed of the blood? (c) The tube is swapped for one of radius 0.50 mm with the same length and pressure difference. What is the new flow rate? (d) What pressure difference would restore the original flow through the narrow tube? (a) Q = πr⁴ΔP/(8ηL) = π(1.0 × 10⁻³)⁴(8000)/[8(4.0 × 10⁻³)(0.25)] = π(8.0 × 10⁻⁹)/(8.0 × 10⁻³) = π × 10⁻⁶ ≈ 3.1 × 10⁻⁶ m³/s = 3.1 mL/s; (b) A = πr² = π × 10⁻⁶ m², so v = Q/A = 1.0 m/s; (c) half the radius gives (½)⁴ = 1/16 of the flow: 3.1/16 ≈ 0.20 mL/s; (d) 16 times the pressure: 16 × 8000 = 128,000 Pa, more than one atmosphere. Example 2: Plaque narrows a long segment of an artery to 80% of its normal radius. (a) If the pressure difference across the segment is unchanged, to what fraction of normal does the flow fall? (b) In that case, how does the average blood speed in the segment change? (c) If instead the body keeps the flow normal, by what factor must the pressure difference across the segment rise? (d) In that case, how does the blood speed in the segment change? (a) Q ∝ r⁴: 0.8⁴ = 0.41, so the flow falls to about 41%; (b) v = Q/A changes by 0.41/0.64 = 0.64, so the blood moves SLOWER, at 64% of normal; (c) ΔP ∝ 1/r⁴: 1/0.41 ≈ 2.4 times the pressure difference; (d) continuity at fixed flow: v ∝ 1/r² = 1/0.64 ≈ 1.6 times as fast.',
      pitfalls: [
        'Raising the diameter to the fourth power: a 16-fold error.',
        'Leaving millimeters or centimeters unconverted, or losing the 8 or the π.',
        'Scaling flow by r² at fixed pressure.',
        'Saying a narrowed tube always speeds the fluid up: only when the flow rate is maintained.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'Blood (viscosity 4.0 × 10⁻³ Pa·s) flows laminarly through a tube 50 cm long with an internal DIAMETER of 4.0 mm, under a pressure difference of 2000 Pa. What is the flow rate?',
          options: ['2.0 mL/s', '6.3 mL/s', '50 mL/s', '100 mL/s'],
          correctAnswer: 1,
          explanation:
            'The radius is 2.0 mm, so r⁴ = (2.0 × 10⁻³)⁴ = 1.6 × 10⁻¹¹ m⁴, and Q = π(1.6 × 10⁻¹¹)(2000)/[8(4.0 × 10⁻³)(0.50)] = π(3.2 × 10⁻⁸)/(1.6 × 10⁻²) = 2π × 10⁻⁶ m³/s ≈ 6.3 mL/s. 2.0 mL/s leaves out the π; 50 mL/s leaves out the 8 in the denominator; and 100 mL/s uses the diameter as the radius, which is 2⁴ = 16 times too large.',
        },
        {
          question: 'A drainage tube is replaced by one with three times the radius and three times the length. With the same fluid and the same pressure difference, the laminar flow rate is multiplied by:',
          options: ['3', '9', '243', '27'],
          correctAnswer: 3,
          explanation:
            'Q ∝ r⁴/L, so the factor is 3⁴/3 = 81/3 = 27. A factor of 3 uses the area, r²/L = 9/3; 9 uses r² and ignores the length (or uses r³ ÷ 3); and 243 multiplies by the length, 81 × 3, when a longer tube means more friction and LESS flow.',
        },
        {
          question: 'A long arteriole constricts to 70% of its original radius while the pressure difference across it stays the same. To about what fractions of their original values do the flow rate and the average blood speed fall?',
          options: [
            'Flow to about 24%; speed to about 49%',
            'Flow to about 49%; speed stays at 100%',
            'Flow to about 24%; speed UP to about 204%',
            'Flow to about 70%; speed UP to about 143%',
          ],
          correctAnswer: 0,
          explanation:
            'At fixed pressure, Q ∝ r⁴: 0.7⁴ = 0.24. The area falls to 0.7² = 0.49, so v = Q/A = 0.24/0.49 = 0.49. "49% and unchanged" scales the flow with the area, r²; "speed up to 204%" applies continuity (v ∝ 1/r²), which needs the flow to be held fixed, and here it is not; and "70% and 143%" scales both with the first power of the radius.',
        },
      ],
    },
    // ── 5 · Blood flow as a circuit (concepts) ───────────────────────────
    {
      title: 'Blood Flow as a Circuit',
      minutes: 8,
      goal: 'Treat the circulation as a circuit: relate pressure difference, flow and resistance, combine vessels in series and in parallel, and explain why the arterioles take the largest pressure drop and control where blood goes.',
      keyPoints: [
        'Poiseuille\'s law is Ohm\'s law for fluids: ΔP = QR, with the tube\'s resistance R = 8ηL/(πr⁴). Pressure difference plays the part of voltage, flow rate the part of current, and the heart is the battery.',
        'For the whole systemic circuit, Q is the cardiac output (about 5 L/min at rest), ΔP is the mean arterial pressure (about 93 mmHg) minus the near-zero pressure in the right atrium, and R is the total peripheral resistance of all the systemic vessels: MAP ≈ CO × TPR.',
        'Blood passes through the vessel types in SERIES (artery, arteriole, capillary, venule, vein): the resistances add, the same flow passes through every level, and the level with the most resistance takes the largest pressure drop. The organs branch off the aorta in PARALLEL: 1/R_total = 1/R₁ + 1/R₂ + …, lower than any single organ\'s resistance, with the same pressure difference across each. Opening more beds lowers TPR; closing or removing one raises it.',
        'The largest pressure drop is across the arterioles, from about 90 to about 35 mmHg. Each capillary is narrower than an arteriole, but so many capillaries sit in parallel that their combined resistance is lower. (Their huge TOTAL area is also why capillary blood is the slowest.)',
        'Arteriole walls contain smooth muscle, and because R ∝ 1/r⁴, a small change in radius makes a large change in resistance. Constricting one organ\'s arterioles cuts that organ\'s flow and diverts blood to the other parallel beds.',
        'Viscosity counts too: a higher hematocrit raises η, the resistance and the heart\'s workload. Air obeys the same logic: a pressure difference between the alveoli and the atmosphere drives air through the airways, and narrowing them, as in asthma, sharply cuts airflow through r⁴.',
      ],
      showOnScreen: [
        'A battery-and-resistor loop beside a heart-and-vessel loop, with labels pairing off one at a time: V ↔ ΔP, I ↔ Q, R ↔ R, V = IR ↔ ΔP = QR, then R = 8ηL/(πr⁴) expanding out of the vessel',
        'The systemic loop from left ventricle to right atrium with live readouts: CO ≈ 5 L/min, MAP ≈ 93 mmHg, right atrium ≈ 0, and MAP ≈ CO × TPR',
        'Vessel levels drawn as resistors in series (artery, arteriole, capillary, venule, vein) with one flow arrow through all of them, then the organs (brain, kidneys, gut, muscle) as parallel branches off the aorta with the same pressure across each',
        'A parallel branch being added (total resistance readout falls) and one being removed (it rises)',
        'A graph of pressure against position along the systemic circuit: nearly flat in the arteries, a steep fall across the arterioles from about 90 to about 35 mmHg, gentle through capillaries and veins',
        'One arteriole feeding a fan of many capillaries: each capillary resistor is large, the parallel bundle\'s readout is small',
        'A ring of smooth muscle tightening around an arteriole: the radius shrinks slightly, the resistance readout leaps, and flow arrows shift to the neighboring parallel beds',
        'The "Remember" recap',
        'End card: "Up next: Blood Flow as a Circuit: Worked Examples"',
      ],
      pitfalls: [
        'Adding parallel resistances: removing a parallel bed RAISES the total resistance.',
        'Putting the largest pressure drop at the capillaries because each one is the narrowest vessel.',
        'Saying capillary blood is fast because capillaries are narrow: their total area is the largest, so it is the slowest.',
        'Letting the flow differ between series levels: every level carries the whole cardiac output.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat', 'mcat-organ-systems-cardiovascular-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'In a severe allergic reaction, arterioles all over the body dilate at once. If the heart\'s output did not change, what would happen to the mean arterial pressure?',
          options: [
            'It rises, since wider vessels carry more blood',
            'It rises, since open beds add more resistance',
            'It holds, since the heart alone sets pressure',
            'It falls, since resistance falls at equal flow',
          ],
          correctAnswer: 3,
          explanation:
            'Wider arterioles mean a much lower resistance (R ∝ 1/r⁴), so total peripheral resistance falls, and MAP ≈ CO × TPR falls with it at the same cardiac output: the dangerous pressure drop of anaphylaxis. "Wider vessels carry more blood" confuses flow with pressure; opening parallel paths LOWERS the total resistance, as with parallel resistors; and the heart sets the flow, while the pressure depends on the resistance that flow meets.',
        },
        {
          question: 'A narrowing adds resistance to the artery that supplies a kidney, in series with the kidney\'s own vessels. Aortic and venous pressures are unchanged, and the kidney\'s vessels do not adjust. What happens?',
          options: [
            'Flow falls, and the pressure past the narrowing falls',
            'Flow holds, and the pressure past the narrowing falls',
            'Flow falls, and the pressure past the narrowing rises',
            'Flow holds, and the pressure past the narrowing holds',
          ],
          correctAnswer: 0,
          explanation:
            'This is a series circuit with a fixed "voltage": adding resistance raises the total, so the flow Q = ΔP/R_total falls, and the new resistance takes a share of the pressure drop, leaving less pressure at the kidney, like a voltage divider. "Flow holds" treats the organ as if the heart forced a fixed flow through it, but the blood can divert to other parallel beds; and a pressure RISE past a resistance would need the pressure to climb in the direction of flow.',
        },
        {
          question: 'Blood flows through four vessel levels connected in series. Which level shows the largest pressure drop?',
          options: [
            'The one whose single vessels are narrowest',
            'The one with the greatest total resistance',
            'The one that lies closest to the heart',
            'The one that carries the greatest flow',
          ],
          correctAnswer: 1,
          explanation:
            'Every series level carries the same flow, so ΔP = QR is largest where the level\'s TOTAL resistance is largest, just as the largest series resistor takes the largest voltage. The narrowest single vessels are the capillaries, but so many lie in parallel that their combined resistance is below the arterioles\'; position in the chain does not set the drop; and no series level carries more flow than another.',
        },
      ],
    },
    // ── 6 · Blood flow as a circuit (worked examples) ────────────────────
    {
      title: 'Blood Flow as a Circuit: Worked Examples',
      minutes: 6,
      goal: 'Use MAP ≈ CO × TPR, divide a pressure drop among vessel levels in series, combine organ beds in parallel, and find how a small change in arteriole radius redirects flow.',
      keyPoints: [
        'Whole circuit: TPR = MAP/CO, with the right atrial pressure taken as zero. Units: mmHg ÷ L/min = mmHg·min/L.',
        'Series levels: the same Q through each, so each level\'s drop is QR and the drops add to the total.',
        'Parallel beds: the same ΔP across each, so each bed\'s flow is ΔP/R and the flows add to the total. Combine by reciprocals; the total is below the smallest.',
        'Radius changes go through r⁴: about 19% wider halves a resistance (1.19⁴ ≈ 2), and about 16% narrower doubles it (0.84⁴ ≈ 0.5).',
        'Check, as in a circuit: series drops sum to the total pressure, parallel flows sum to the total flow.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the systemic loop with TPR = 18 mmHg·min/L, then four series resistors (1.0, 11, 4.0, 2.0) with pressure bars of 5, 55, 20 and 10 mmHg stacking to 90 and the pressure-vs-position graph stepping down; then the exercise readouts (12 L/min, 108 mmHg, TPR = 9.0)',
        'Example 2: three parallel beds (60, 60, 30) between 90 mmHg and 0 with flow arrows of 1.5, 1.5 and 3.0 L/min; the third bed\'s arteriole tightening, its resistor changing to 60, and the arrows settling at 2.0 L/min each at 120 mmHg',
        'The "Remember" recap of the method',
        'End card: "Up next: Stenosis: Which Law Applies"',
      ],
      workedExample:
        'Example 1: At rest a patient\'s cardiac output is 5.0 L/min and the mean arterial pressure is 90 mmHg; take the right atrial pressure as zero. (a) What is the total peripheral resistance? (b) Model the systemic circuit as four levels in series: arteries 1.0, arterioles 11, capillaries 4.0 and veins 2.0 mmHg·min/L. What is the pressure drop across each level, and what is the pressure as blood enters the capillaries? (c) During exercise the cardiac output rises to 12 L/min and the mean arterial pressure to 108 mmHg. What is the new total peripheral resistance? (d) By about what percentage must an arteriole\'s radius grow to halve its resistance? (a) TPR = MAP/CO = 90/5.0 = 18 mmHg·min/L; (b) the levels add to 1.0 + 11 + 4.0 + 2.0 = 18, and each drop is QR: 5.0, 55, 20 and 10 mmHg, adding to 90; the arterioles take the most, and blood enters the capillaries at 90 − 5.0 − 55 = 30 mmHg; (c) TPR = 108/12 = 9.0 mmHg·min/L, half the resting value, even though the pressure rose; (d) R ∝ 1/r⁴, so r⁴ must double: r grows by a factor of 2^(1/4) ≈ 1.19, about 19%. Example 2: Three organ beds branch in parallel between the aorta, at 90 mmHg, and the veins, at about 0 mmHg. Their resistances are 60, 60 and 30 mmHg·min/L. (a) What is their combined resistance? (b) What is the flow through each bed, and the total? (c) The arterioles of the 30-unit bed constrict by about 16% in radius. What is that bed\'s new resistance? (d) If the heart keeps the total flow the same, what are the new pressure and the new flow through each bed? (a) 1/R = 1/60 + 1/60 + 1/30 = 4/60, so R = 15 mmHg·min/L, less than the smallest; (b) Q = ΔP/R: 90/60 = 1.5, 1.5 and 90/30 = 3.0 L/min, total 6.0 L/min (and 90/15 = 6.0 checks); (c) 0.84⁴ ≈ 0.5, so the resistance doubles to 60; (d) three 60s in parallel give 20 mmHg·min/L, so ΔP = (6.0)(20) = 120 mmHg and each bed carries 120/60 = 2.0 L/min: the constricted bed fell from 3.0 to 2.0, the other two rose from 1.5 to 2.0, and the arterial pressure rose.',
      pitfalls: [
        'Adding parallel resistances, or forgetting to invert 1/R at the end.',
        'Giving each series level the whole 90 mmHg, or a different flow.',
        'Treating a 16% narrowing as a 16% rise in resistance.',
        'Assuming the unchanged beds keep their old flow after a neighbor constricts.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat', 'mcat-organ-systems-cardiovascular-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'A vascular circuit is modelled as four levels in series: arteries 2.0, arterioles 12, capillaries 4.0 and veins 2.0 mmHg·min/L. The flow is 4.0 L/min. What is the pressure drop across the arterioles?',
          options: ['3.0 mmHg', '16 mmHg', '48 mmHg', '80 mmHg'],
          correctAnswer: 2,
          explanation:
            'Series levels share one flow, so the arterioles\' drop is ΔP = QR = (4.0)(12) = 48 mmHg. 80 mmHg is the drop across the whole chain, (4.0)(20), as if the arterioles saw all of it (the parallel rule); 16 mmHg is the capillaries\' drop, (4.0)(4.0), from assuming the narrowest vessels lose the most; and 3.0 divides the resistance by the flow instead of multiplying.',
        },
        {
          question: 'Two organ beds with resistances of 40 and 10 mmHg·min/L branch in parallel between an artery at 80 mmHg and a vein at about 0 mmHg. What is the total flow through the pair?',
          options: ['10 L/min', '1.6 L/min', '2.0 L/min', '8.0 L/min'],
          correctAnswer: 0,
          explanation:
            'Each parallel bed sees the full 80 mmHg: 80/40 = 2.0 L/min and 80/10 = 8.0 L/min, total 10 L/min (the combined resistance is (40)(10)/50 = 8.0, and 80/8.0 = 10 checks). 1.6 L/min adds the resistances as if in series (80/50); 2.0 and 8.0 L/min each count only one of the two beds.',
        },
        {
          question: 'Two identical organ beds in parallel, each 30 mmHg·min/L, share a total flow of 6.0 L/min. One bed\'s arterioles then narrow by about 16% in radius, and the heart keeps the total flow at 6.0 L/min. What is the flow through the UNCHANGED bed now?',
          options: ['2.0 L/min', '3.0 L/min', '3.2 L/min', '4.0 L/min'],
          correctAnswer: 3,
          explanation:
            'A 16% narrowing doubles that bed\'s resistance to 60 (0.84⁴ ≈ 0.5). The pair is now (30)(60)/90 = 20 mmHg·min/L, so ΔP = (6.0)(20) = 120 mmHg, and the unchanged bed carries 120/30 = 4.0 L/min. 2.0 L/min is the CONSTRICTED bed\'s flow (120/60); 3.0 L/min assumes the unchanged bed keeps its old share; and 3.2 L/min raises the narrowed bed\'s resistance by only 16%, forgetting the fourth power.',
        },
      ],
    },
    // ── 7 · Stenosis: which law applies (concepts) ───────────────────────
    {
      title: 'Stenosis: Which Law Applies',
      minutes: 7.5,
      goal: 'Choose the regime before the equation: decide whether a narrowed vessel is a continuity, Bernoulli or Poiseuille question, and explain why the three laws agree.',
      keyPoints: [
        'A stenosis is an abnormal narrowing of a vessel or valve. Three laws answer three different questions about it: how fast is the blood (continuity), what is the pressure in the narrow part (Bernoulli), and how much flow gets through for a given driving pressure (Poiseuille).',
        'Continuity applies whenever the flow is known or assumed unchanged, as in a mild stenosis where the body maintains flow: the blood is faster in the narrowing, v ∝ 1/A.',
        'Bernoulli fits a SHORT narrowing, where the speed changes quickly and friction in the brief segment is small: the kinetic term grows, so the pressure dips in the jet. Downstream the jet breaks into turbulence, heard as a bruit. Clinicians measure the jet\'s speed with Doppler ultrasound.',
        'Poiseuille fits a LONG narrowing, or any question about whether flow can be maintained at a fixed driving pressure: R ∝ 1/r⁴, so resistance climbs steeply and flow falls.',
        'The laws do not contradict one another. Continuity assumes Q stays fixed; Poiseuille tells you what that costs (a larger ΔP), or how far Q falls if ΔP cannot rise. The reverse case is an aneurysm, an abnormal widening: blood slows in it (continuity), slower blood means a higher pressure on the wall (Bernoulli), and that pressure stretches the wall further, a vicious cycle.',
        'Pick the regime first. Static (nothing flowing; depth, floating, pistons): P = P₀ + ρgh, Pascal, Archimedes. Ideal flow ("non-viscous", short constrictions, speeds and pressures): continuity, Bernoulli, Torricelli. Viscous flow (long tubes or vessels, a viscosity given, pressure falling along a uniform tube): Poiseuille, Q = ΔP/R, series and parallel. Then ask: one tube or a branching network (use total area)? Is the flow fixed, or the driving pressure? Laminar, or turbulent, where neither equation applies?',
      ],
      showOnScreen: [
        'An artery with a short narrowing; three question cards appear over it in turn ("How fast?", "What pressure in the jet?", "How much flow gets through?"), each snapping to its law',
        'The three-row table filling in: question, law, what the stenosis does (faster, v ∝ 1/A; lower pressure; less flow, R ∝ 1/r⁴)',
        'The short stenosis with streamlines crowding together, speed arrows lengthening, a pressure gauge dipping in the jet, then eddies downstream with a stethoscope and the word "bruit"; a Doppler probe reading the jet speed',
        'A long narrowed segment drawn as a large resistor in series with the vessel bed: the resistance readout climbing as r shrinks, the flow readout falling',
        'Two dials side by side: "flow held fixed → ΔP must rise" and "ΔP held fixed → flow falls"',
        'An aneurysm bulging: streamlines spreading, speed arrows shortening, the wall-pressure gauge rising and the bulge growing',
        'The regime table (static, ideal flow, viscous flow) with its clues and tools, then the three follow-up questions as a checklist',
        'The "Remember" recap',
        'End card: "Up next: Stenosis: Worked Examples"',
      ],
      pitfalls: [
        'Using Bernoulli along a long, viscous vessel, where friction takes the pressure.',
        'Saying "narrowing speeds blood up, so more gets through": speed is not flow rate.',
        'Thinking the pressure is higher in the narrow, fast part: it is lower there, and higher in an aneurysm.',
        'Applying Bernoulli or Poiseuille in the turbulent region beyond the stenosis.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat', 'mcat-organ-systems-cardiovascular-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'One textbook says blood speeds up in a stenosis; another says a stenosis reduces blood flow. How can both statements be true?',
          options: [
            'They cannot be: continuity forbids any fall in the flow',
            'Speed rises in the narrowing while volume per second falls',
            'Speed rises before the narrowing and then falls inside it',
            'Flow falls at first, until the faster blood restores it',
          ],
          correctAnswer: 1,
          explanation:
            'Speed and flow rate are different quantities. Inside the narrowing the area is small, so the blood moves faster than it does just upstream (continuity), while the added resistance can lower the volume passing per second through the whole vessel (Poiseuille). Continuity says the flow is the same at every cross-section at one moment, not that it can never be lower than it was before the stenosis formed; the speed peaks INSIDE the narrowing; and a faster jet does not restore flow, since Q = Av and the area has shrunk.',
        },
        {
          question: 'A Doppler probe measures how fast blood jets through a short, narrowed heart valve. Which law turns that speed into the pressure drop from the chamber into the jet?',
          options: [
            'Poiseuille, using the valve\'s radius and length',
            'Continuity, using the ratio of the two areas',
            'Bernoulli, using the gain in the kinetic term',
            'Hydrostatics, using the depth of the blood',
          ],
          correctAnswer: 2,
          explanation:
            'Across a short narrowing friction is small, so energy is conserved: the pressure falls by the gain in ½ρv², which is Bernoulli. Poiseuille describes friction along a LONG tube and needs a length and a viscosity, not a jet speed; continuity links speeds to areas but says nothing about pressure; and the hydrostatic term needs a height difference, which a valve does not have.',
        },
        {
          question: 'Just beyond a tight stenosis, the fast jet breaks up into swirling eddies. Which statement about that region is correct?',
          options: [
            'Bernoulli holds there, since the blood moves fast',
            'Poiseuille holds there, since energy is being lost',
            'Both hold there, as long as the heart rate is steady',
            'Neither Bernoulli nor Poiseuille holds in the eddies',
          ],
          correctAnswer: 3,
          explanation:
            'Turbulence wastes energy in eddies, which breaks Bernoulli\'s no-loss assumption, and it is not laminar, which breaks Poiseuille\'s. Speed alone does not make Bernoulli valid; Poiseuille accounts for the orderly friction of laminar layers, not the larger loss in eddies; and a steady heart rate does not make the flow smooth. The eddies are what a stethoscope picks up as a bruit.',
        },
      ],
    },
    // ── 8 · Stenosis (worked examples) ───────────────────────────────────
    {
      title: 'Stenosis: Worked Examples',
      minutes: 6,
      goal: 'Grade a short stenosis from its jet speed with continuity and Bernoulli, and find how a long narrowing cuts flow by treating it as a Poiseuille resistance in series.',
      keyPoints: [
        'Short narrowing, speeds given: run continuity backwards. The speed ratio gives the area ratio, and the square root of that gives the radius ratio.',
        'Pressure dip in the jet: ΔP = ½ρ(v₂² − v₁²), with speeds in m/s and each speed squared before subtracting; 1 mmHg ≈ 133 Pa.',
        'Long narrowing: scale only the narrowed LENGTH by 1/r⁴, then add it in series with the rest of the vessel and the bed it feeds.',
        'New flow = driving pressure ÷ new total resistance; the pressure reaching the bed is what is left after the artery\'s drop.',
      ],
      showOnScreen: [
        'Each problem shown in full on screen, read aloud, then a "Pause the video and try it" prompt before any work',
        'Example 1: the carotid artery with Doppler speeds of 60 and 240 cm/s, the area shrinking to one-quarter and the radius to one-half, the Bernoulli line giving 2700 Pa ≈ 20 mmHg, the "×16 per centimeter" resistance label, then eddies and a stethoscope downstream',
        'Example 2: the artery as a 4.0-unit resistor in series with a 21-unit bed under 100 mmHg; one quarter of the artery turning into a 16-unit resistor; the flow readout dropping from 4.0 to 2.5 mL/s and the bed\'s pressure from 84 to about 53 mmHg',
        'The "Remember" recap: pick the regime, then the law',
        'End card: "Thanks for watching" (the last video of the fluids series; no "Up next")',
      ],
      workedExample:
        'Example 1: A carotid ultrasound shows peak blood speed rising from 60 cm/s upstream to 240 cm/s inside a short stenosis. Take blood\'s density as 1000 kg/m³ and 1 mmHg ≈ 133 Pa. (a) By how much has the vessel\'s radius (and diameter) been reduced? (b) How much lower is the pressure in the jet, in mmHg? (c) If the narrowing were long rather than short, how would each centimeter of it compare in resistance with a normal centimeter of the vessel? (d) What happens to the blood just beyond the stenosis, and how is it detected? (a) Continuity at roughly constant flow: a 4-fold rise in speed means the area is one-quarter, and A ∝ r², so the radius is halved, a 50% reduction in diameter; (b) Bernoulli with 0.60 and 2.4 m/s: ΔP = ½ρ(v₂² − v₁²) = ½(1000)(5.76 − 0.36) = (500)(5.4) = 2700 Pa, and 2700/133 ≈ 20 mmHg; (c) Poiseuille: R ∝ 1/r⁴, so each centimeter has 2⁴ = 16 times the resistance; (d) the fast jet turns turbulent, and the turbulence is heard as a bruit. Example 2: A long leg artery with a resistance of 4.0 mmHg·s/mL feeds a muscle bed with a resistance of 21 mmHg·s/mL, in series. The pressure difference across the pair is 100 mmHg. (a) What is the flow? (b) Plaque then narrows one quarter of the artery\'s length to half its radius. What is the artery\'s new resistance? (c) What is the new flow, if the driving pressure and the bed do not change? (d) What pressure difference is left across the muscle bed, before and after? (a) Q = ΔP/R = 100/(4.0 + 21) = 4.0 mL/s; (b) the narrowed quarter was 1.0 unit and becomes 16 × 1.0 = 16, so the artery is 3.0 + 16 = 19 mmHg·s/mL; (c) Q = 100/(19 + 21) = 2.5 mL/s; (d) before: 100 − (4.0)(4.0) = 84 mmHg; after: 100 − (2.5)(19) = 52.5 mmHg, about 53 (and (2.5)(21) = 52.5 checks).',
      pitfalls: [
        'Reporting the area reduction (75%) as the diameter reduction (50%).',
        'Squaring the difference of the speeds instead of taking the difference of the squares.',
        'Leaving speeds in cm/s in Bernoulli\'s equation.',
        'Multiplying the whole artery\'s resistance by 16 when only part of its length is narrowed.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-physics-mechanics-fluid-dynamics-mcat', 'mcat-organ-systems-cardiovascular-mcat'],
      mcatOnly: 'all',
      checkpoint: [
        {
          question: 'Ultrasound shows blood speed rising from 40 cm/s upstream to 360 cm/s inside a short stenosis. Assuming the flow rate is the same at both places, by about how much has the vessel\'s DIAMETER been reduced?',
          options: ['About 11%', 'About 33%', 'About 67%', 'About 89%'],
          correctAnswer: 2,
          explanation:
            'The speed rose 9-fold, so the area is 1/9 of normal; A ∝ r², so the radius and diameter are 1/3 of normal, a reduction of about 67%. About 89% is the reduction in AREA (1 − 1/9); about 33% is the diameter that REMAINS, not the reduction; and about 11% is the remaining area, 1/9.',
        },
        {
          question: 'Blood (density 1000 kg/m³) speeds up from 50 cm/s to 250 cm/s as it enters a short stenosis at the same height. How much lower is the pressure in the jet than upstream?',
          options: ['3000 Pa', '2000 Pa', '6000 Pa', '1000 Pa'],
          correctAnswer: 0,
          explanation:
            'ΔP = ½ρ(v₂² − v₁²) = ½(1000)(2.5² − 0.50²) = (500)(6.25 − 0.25) = 3000 Pa, about 23 mmHg. 2000 Pa squares the DIFFERENCE of the speeds, ½(1000)(2.0)²; 6000 Pa leaves out the ½; and 1000 Pa forgets to square at all, ½(1000)(2.5 − 0.50).',
        },
        {
          question: 'An artery with a resistance of 2.0 mmHg·s/mL feeds a tissue bed of 13 mmHg·s/mL in series, with 60 mmHg across the pair. Half of the artery\'s length then narrows to half its radius. If nothing else changes, what is the new flow?',
          options: ['0.25 mL/s', '2.0 mL/s', '1.3 mL/s', '3.3 mL/s'],
          correctAnswer: 1,
          explanation:
            'The narrowed half was 1.0 unit and becomes 16, so the artery is 1.0 + 16 = 17 and the total is 17 + 13 = 30 mmHg·s/mL: Q = 60/30 = 2.0 mL/s, half the original 60/15 = 4.0 mL/s. 0.25 mL/s divides the whole flow by 16, ignoring the rest of the circuit; 1.3 mL/s multiplies the WHOLE artery by 16 (60/45); and 3.3 mL/s uses r², making the narrowed half only 4 units (60/18).',
        },
      ],
    },
  ],
}
