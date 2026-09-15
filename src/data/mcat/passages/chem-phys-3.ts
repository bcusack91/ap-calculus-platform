/**
 * MCAT chem-phys passage bank — expansion wave 3 (physics). Six passages on
 * physics areas not covered by waves 1-2: membrane RC circuits, magnetic
 * deflection, standing sound waves, heat transfer, impulse/momentum, and
 * buoyancy. Every calculation was worked by hand; every passage passed a blind
 * re-solve and an independent physics fact check before needsReview: false.
 * Gated by the same checks as scripts/import-passage-seeds.ts (KaTeX compile,
 * chart integrity, key balance, no letter-position references, dup checks vs
 * the live banks).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage } from '../types'

export const CHEM_PHYS_PASSAGES_3: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. CIRCUITS — Membrane as a parallel RC circuit; myelin as layers in series
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp3-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Membrane Capacitance and Myelination',
    passageText:
      'Neurophysiologists often model a patch of cell membrane as a resistor and a capacitor connected in parallel. The lipid bilayer is a thin insulator separating two conducting solutions, so it stores charge like a capacitor, while ion channels provide conducting pathways that act as a resistance. For unmyelinated membrane, typical specific values are a capacitance of $c_m = 1.0\\ \\mu\\text{F/cm}^2$ and a resistance of $r_m = 2000\\ \\Omega\\cdot\\text{cm}^2$. A patch of area $A$ therefore has $C = c_m A$ and $R = r_m/A$.\n\nInvestigators isolated an unmyelinated membrane patch of area $1.0 \\times 10^{-3}\\ \\text{cm}^2$ and injected a constant current $I = 10$ nA beginning at $t = 0$. Because the current first charges the capacitance and only gradually flows through the resistance, the change in membrane voltage approaches its final value exponentially:\n\n$\\Delta V(t) = IR\\left(1 - e^{-t/\\tau}\\right), \\quad \\tau = RC$\n\nAfter one time constant, $\\Delta V$ has reached about 63% of its final value $IR$, and after about five time constants it is essentially at that final value.\n\nThe investigators repeated the measurement on a patch of the same area taken from a myelinated internode, where Schwann cell membrane wraps the axon many times. Because they expected this patch to have a much higher resistance, they injected a much smaller current, 0.050 nA. The voltage responses of both patches are shown in Figure 1.\n\nFinally, the investigators pointed out that the charge that must be moved onto the membrane capacitance to change its voltage, $Q = C\\Delta V$, sets how many ions must flow before a region of axon depolarizes. They proposed that this quantity helps explain why myelinated axons conduct impulses faster than unmyelinated axons of similar diameter.',
    chart: {
      title: 'Figure 1. Membrane voltage change after a step of injected current begins at t = 0',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'ms',
      yLabel: 'Voltage change',
      yUnit: 'mV',
      xValues: [0, 1, 2, 3, 4, 6, 8, 10],
      yValues: [0, 7.9, 12.6, 15.5, 17.3, 19.0, 19.6, 19.9],
      seriesLabel: 'Unmyelinated patch (I = 10 nA)',
      comparisonSeries: [
        { label: 'Myelinated patch (I = 0.050 nA)', yValues: [0, 3.9, 6.3, 7.8, 8.6, 9.5, 9.8, 9.9] },
      ],
    },
    questions: [
      {
        question: 'Using the specific membrane values given in the passage, what is the time constant of the unmyelinated patch?',
        options: ['2.0 ms', '10 ms', '20 ms', '2.0 s'],
        correctAnswer: 0,
        explanation:
          'For the patch, $C = c_m A = (1.0 \\times 10^{-6}\\ \\text{F/cm}^2)(1.0 \\times 10^{-3}\\ \\text{cm}^2) = 1.0 \\times 10^{-9}$ F and $R = r_m/A = (2000\\ \\Omega\\cdot\\text{cm}^2)/(1.0 \\times 10^{-3}\\ \\text{cm}^2) = 2.0 \\times 10^{6}\\ \\Omega$. Then $\\tau = RC = (2.0 \\times 10^{6})(1.0 \\times 10^{-9}) = 2.0 \\times 10^{-3}$ s = 2.0 ms. The area cancels, so $\\tau = r_m c_m$ for any patch size. Figure 1 agrees: the unmyelinated trace reaches 12.6 mV, about 63% of its 20 mV plateau, at 2 ms. The 10 ms value is roughly the time needed to reach the plateau (about five time constants), not one time constant. The 20 ms value slips a factor of ten. The 2.0 s value treats the capacitance as 1.0 mF/cm² instead of 1.0 μF/cm².',
        skill: 'RC circuits',
      },
      {
        question: 'Based on Figure 1, the resistance of the unmyelinated patch is closest to:',
        options: ['2.0 kΩ', '1.3 MΩ', '2.0 MΩ', '20 MΩ'],
        correctAnswer: 2,
        explanation:
          'At steady state the capacitance is fully charged and all of the injected current flows through the resistance, so $R = \\Delta V_{final}/I$. The unmyelinated trace levels off near 20 mV with $I = 10$ nA: $R = (2.0 \\times 10^{-2}\\ \\text{V})/(1.0 \\times 10^{-8}\\ \\text{A}) = 2.0 \\times 10^{6}\\ \\Omega$ = 2.0 MΩ, which matches $r_m/A$ from the passage. The 1.3 MΩ value divides the 12.6 mV reading at 2 ms, taken before the voltage has finished rising, by the current. The 2.0 kΩ value treats the current as 10 μA. The 20 MΩ value slips a factor of ten in the unit conversion.',
        skill: 'Ohm’s law',
      },
      {
        question: 'If the myelin is modeled as $N$ identical membrane layers in series, the data in Figure 1 indicate that $N$ is closest to:',
        options: ['2', '100', '200', '400'],
        correctAnswer: 1,
        explanation:
          'For the myelinated patch, $R = (1.0 \\times 10^{-2}\\ \\text{V})/(5.0 \\times 10^{-11}\\ \\text{A}) = 2.0 \\times 10^{8}\\ \\Omega$, which is 100 times the 2.0 MΩ of the unmyelinated patch. Resistances in series add, so $N$ layers give $NR$, and $N = 100$. Both traces reach 63% of their plateaus at 2 ms, so $\\tau$ is unchanged; with $R$ 100 times larger, $C$ must be 100 times smaller, as expected for 100 equal capacitors in series. The value 2 is the ratio of the plateau voltages alone. The value 200 is the ratio of the injected currents alone, ignoring that the plateaus differ. The value 400 multiplies the current ratio by the voltage ratio instead of dividing.',
        skill: 'Series resistance and capacitance',
      },
      {
        question: 'According to the charge argument in the passage, myelin helps an axon conduct impulses faster because the myelinated membrane has a:',
        options: [
          'shorter time constant, so its voltage settles sooner',
          'higher capacitance, so it stores more charge for the impulse',
          'lower resistance, so more ionic current crosses each internode',
          'lower capacitance, so less charge must cross to shift its voltage',
        ],
        correctAnswer: 3,
        explanation:
          'The passage states that the charge needed to change membrane voltage is $Q = C\\Delta V$. Stacking layers in series lowers capacitance (here by a factor of about 100), so far less charge, and far fewer ions, must move to depolarize the internodal membrane, leaving more of the current to travel on along the axon (the higher membrane resistance also limits leakage). A shorter time constant is contradicted by Figure 1: both traces reach 63% of their plateaus at the same 2 ms. Capacitors in series have a lower, not higher, total capacitance. Resistors in series have a higher total resistance, and myelin reduces rather than increases the current leaking across the membrane.',
        skill: 'Capacitance',
      },
      {
        question: 'For the unmyelinated patch, how many monovalent ions’ worth of charge must be placed on the membrane capacitance to change its voltage by 20 mV? ($e = 1.6 \\times 10^{-19}$ C)',
        options: ['$1.3 \\times 10^{6}$', '$6.3 \\times 10^{7}$', '$1.3 \\times 10^{8}$', '$1.3 \\times 10^{11}$'],
        correctAnswer: 2,
        explanation:
          '$Q = C\\Delta V = (1.0 \\times 10^{-9}\\ \\text{F})(2.0 \\times 10^{-2}\\ \\text{V}) = 2.0 \\times 10^{-11}$ C. Dividing by the charge per ion gives $(2.0 \\times 10^{-11})/(1.6 \\times 10^{-19}) = 1.25 \\times 10^{8} \\approx 1.3 \\times 10^{8}$ ions. The $1.3 \\times 10^{11}$ value uses the specific capacitance of 1.0 μF without multiplying by the patch area. The $6.3 \\times 10^{7}$ value inserts a stray factor of one-half, borrowed from the energy expression $\\frac{1}{2}CV^2$. The $1.3 \\times 10^{6}$ value uses the 100-fold smaller capacitance of the myelinated patch.',
        skill: 'Charge and capacitance',
      },
    ],
    needsReview: false,
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. MAGNETISM — Velocity selector + magnetic-sector mass spectrometer
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp3-02',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Magnetic-Sector Analysis of a Urea Breath Test',
    passageText:
      'The urea breath test detects *Helicobacter pylori*, a stomach bacterium that produces the enzyme urease. A patient swallows urea labeled with carbon-13. If urease is present, the labeled urea is split, and the resulting $^{13}\\text{CO}_2$ is absorbed into the blood and exhaled. Breath samples collected before and 30 minutes after the dose are analyzed with an isotope-ratio mass spectrometer.\n\nIn the instrument, $\\text{CO}_2$ molecules are ionized to singly charged positive ions and sent through a velocity selector: parallel plates create a uniform electric field of $4.0 \\times 10^{4}$ V/m perpendicular to a uniform magnetic field of 0.40 T, with both fields perpendicular to the ions’ velocity, and only ions for which the electric and magnetic forces cancel pass straight through to the exit slit. The selected ions then enter a region containing only a uniform 0.40 T magnetic field perpendicular to their velocity. There each ion follows a semicircular path of radius $r = \\frac{mv}{qB}$ and strikes a detector plate lying in the same plane as the entrance slit. Separate collectors measure the ion current at mass 44 u ($^{12}\\text{CO}_2^+$) and at mass 45 u ($^{13}\\text{CO}_2^+$); contributions from oxygen isotopes are neglected. Use $e = 1.6 \\times 10^{-19}$ C and $1\\ \\text{u} \\approx 1.6 \\times 10^{-27}$ kg.\n\nThe analyzer reports the ratio of the mass-45 ion current to the mass-44 ion current. Because about 1.1% of natural carbon is carbon-13, every sample shows a baseline ratio near 0.011, and this baseline varies slightly with diet. The clinic classifies a test as positive when the 30-minute ratio exceeds the patient’s own baseline ratio by more than 0.40% of that baseline value. Table 1 lists results for four patients.',
    figure:
      '**Table 1. Ion-current ratios (mass 45 : mass 44)**\n\n| Patient | Baseline ratio | 30-minute ratio |\n|---------|----------------|-----------------|\n| 1 | 0.011180 | 0.011190 |\n| 2 | 0.011200 | 0.011300 |\n| 3 | 0.011150 | 0.011190 |\n| 4 | 0.011210 | 0.011260 |',
    questions: [
      {
        question: 'What is the radius of the semicircular path followed by $^{12}\\text{CO}_2^+$ ions in the analyzer?',
        options: ['1.1 cm', '1.8 cm', '5.5 cm', '11 cm'],
        correctAnswer: 3,
        explanation:
          'Ions leave the selector only if $qE = qvB$, so $v = E/B = (4.0 \\times 10^{4}\\ \\text{V/m})/(0.40\\ \\text{T}) = 1.0 \\times 10^{5}$ m/s. The ion mass is $44(1.6 \\times 10^{-27}) = 7.04 \\times 10^{-26}$ kg, so $r = \\frac{mv}{qB} = \\frac{(7.04 \\times 10^{-26})(1.0 \\times 10^{5})}{(1.6 \\times 10^{-19})(0.40)} = 0.11$ m = 11 cm. The 1.8 cm value computes the selector speed as $EB$ instead of $E/B$. The 5.5 cm value adds the 0.40 T fields of the two regions and uses 0.80 T. The 1.1 cm value slips a factor of ten.',
        skill: 'Magnetic force on moving charges',
      },
      {
        question: 'How much work does the analyzer’s magnetic field do on an ion as it travels along its semicircular path?',
        options: [
          'None, so the ion’s speed is constant along the path',
          'Positive work, so the ion speeds up as its path curves',
          'Negative work, so the ion slows as it nears the detector',
          'Work equal to $qvB$ times the length of the semicircle',
        ],
        correctAnswer: 0,
        explanation:
          'The magnetic force $q\\vec{v} \\times \\vec{B}$ is always perpendicular to the velocity, so it has no component along the displacement and does zero work. By the work–energy theorem the kinetic energy, and therefore the speed, stays constant; the force only changes the direction of motion, which is why the path is a circle of constant radius. Positive or negative work would change the speed and with it the radius, which a semicircular path rules out. Multiplying $qvB$ by the path length treats the force as if it pointed along the path.',
        skill: 'Work and magnetic force',
      },
      {
        question: 'At the detector plate, how far apart are the impact points of the mass-44 and mass-45 ion beams?',
        options: ['0.25 mm', '2.5 mm', '5.0 mm', '50 mm'],
        correctAnswer: 2,
        explanation:
          'At fixed $v$, $q$, and $B$, the radius is proportional to mass. The mass-45 radius is $(45/44)(0.110\\ \\text{m}) = 0.1125$ m, so the radii differ by 2.5 mm. Each ion strikes the plate after half a circle, at a distance $2r$ from the entrance slit, so the impact points are $2(2.5\\ \\text{mm}) = 5.0$ mm apart. The 2.5 mm value is only the difference in radii and forgets that each impact point lies a full diameter from the slit. The 0.25 mm and 50 mm values are power-of-ten slips.',
        skill: 'Mass spectrometry',
      },
      {
        question: 'According to the clinic’s criterion, which patients in Table 1 have a positive test?',
        options: ['None of the four patients', 'Patients 2 and 4', 'Patients 2, 3, and 4', 'All four patients'],
        correctAnswer: 1,
        explanation:
          'Compare each rise in ratio with 0.40% of that patient’s baseline, which is about 0.000045 for every patient. Patient 1 rose by 0.000010 (0.09%), which is negative. Patient 2 rose by 0.000100 (0.89%), which is positive. Patient 3 rose by 0.000040 (0.36%), which is negative. Patient 4 rose by 0.000050 (0.45%), which is positive. So only Patients 2 and 4 are positive. Calling no patient positive misreads the criterion as a rise of 0.40 times the baseline (40%) rather than 0.40% of it. Including Patient 3 treats a rise of 0.000040 as clearing a threshold of about 0.000045. Calling all four positive counts any rise at all, but the criterion requires more than a 0.40% rise.',
        skill: 'Data interpretation',
      },
      {
        question: 'Why does the protocol compare each 30-minute sample with the same patient’s baseline sample rather than with the natural ratio of 0.011?',
        options: [
          'The magnetic field drifts from one patient to the next, moving both beams off their collectors',
          'Urease is most active before the dose, so the baseline sample shows the full effect of the enzyme',
          'The selector passes a different ion speed for each breath sample, which changes both path radii',
          'Diet shifts each person’s natural $^{13}\\text{C}$ level, so the rise must be measured from it',
        ],
        correctAnswer: 3,
        explanation:
          'The passage notes that the baseline ratio varies slightly with diet. A fixed reference of 0.011 would mix that natural person-to-person variation into the result, while comparing with each patient’s own baseline isolates the extra $^{13}\\text{CO}_2$ produced from the labeled urea. A field drift large enough to move the beams off their collectors would spoil every measurement, and no choice of reference ratio would fix it; the passage attributes baseline variation to diet. Before the dose, urease acts only on the body’s own urea at natural isotope abundance, so the pre-dose sample carries no labeled-urea signal; the enrichment appears only after the labeled urea is swallowed. The selector’s fixed electric and magnetic fields pass the same speed, $E/B$, for every sample.',
        skill: 'Experimental design',
      },
    ],
    needsReview: false,
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. SOUND — Closed-tube resonance of the ear canal; decibels
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp3-03',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Resonance of the Ear Canal',
    passageText:
      'The external ear canal is a roughly cylindrical air-filled tube, open at the outer ear and closed at the eardrum. Like a pipe closed at one end, it supports standing sound waves whose resonant frequencies are\n\n$f_n = \\frac{nv}{4L}, \\quad n = 1, 3, 5, \\ldots$\n\nwhere $L$ is the length of the canal and $v$ is the speed of sound. Near a resonant frequency, the sound at the eardrum is boosted relative to the sound arriving at the ear. The boost is largest at the fundamental resonance and falls off gradually at frequencies on either side of it.\n\nAudiologists measured this boost in a volunteer whose canal length, estimated from imaging, was 2.5 cm. A thin probe tube connected to a microphone was placed just in front of the eardrum, and pure tones from a loudspeaker were presented one at a time. For each tone, the sound level at the eardrum was compared with the level measured at the same location with the listener absent. The difference, called the ear-canal gain, is plotted in Figure 1; for this analysis, assume the gain arises entirely from resonance of the canal. Because the air in the canal is near body temperature, the speed of sound was taken as 350 m/s.\n\nSound intensity level is defined as $\\beta = 10 \\log_{10}(I/I_0)$, where $I_0 = 1.0 \\times 10^{-12}\\ \\text{W/m}^2$. A gain of $\\Delta\\beta$ decibels therefore corresponds to multiplying the intensity by $10^{\\Delta\\beta/10}$.\n\nThe audiologists noted that workers exposed to loud broadband noise often first lose hearing sensitivity near 4000 Hz. They proposed that canal resonance, by concentrating acoustic energy in this frequency region, contributes to that pattern of damage.',
    chart: {
      title: 'Figure 1. Ear-canal gain versus tone frequency (canal length 2.5 cm)',
      kind: 'line',
      xLabel: 'Tone frequency',
      xUnit: 'Hz',
      yLabel: 'Ear-canal gain',
      yUnit: 'dB',
      xValues: [500, 1000, 2000, 3000, 3500, 4000, 6000, 8000],
      yValues: [0, 1, 6, 16, 20, 18, 8, 3],
      seriesLabel: 'Volunteer 1',
    },
    questions: [
      {
        question: 'According to the closed-tube model, the lowest resonant frequency of the volunteer’s ear canal is:',
        options: ['3500 Hz', '7000 Hz', '10,500 Hz', '14,000 Hz'],
        correctAnswer: 0,
        explanation:
          'For $n = 1$, $f_1 = \\frac{v}{4L} = \\frac{350\\ \\text{m/s}}{4(0.025\\ \\text{m})} = \\frac{350}{0.10} = 3500$ Hz, which matches the peak gain in Figure 1. The 7000 Hz value uses $v/2L$, the relation for a tube open at both ends. The 10,500 Hz value is the next allowed resonance, $n = 3$. The 14,000 Hz value uses $v/L$.',
        skill: 'Standing waves',
      },
      {
        question: 'A 3500 Hz tone arrives at the volunteer’s ear with an intensity level of 70 dB. Based on Figure 1, the intensity at the eardrum is greater than the arriving intensity by a factor of about:',
        options: ['2', '20', '100', '10,000'],
        correctAnswer: 2,
        explanation:
          'Figure 1 shows a gain of 20 dB at 3500 Hz, so the level at the eardrum is 90 dB. An increase of $\\Delta\\beta$ multiplies intensity by $10^{\\Delta\\beta/10} = 10^{20/10} = 10^{2} = 100$. The factor of 2 converts 20 dB to 2 bels and uses that number directly as the multiplier. The factor of 20 treats decibels as a linear scale. The factor of 10,000 squares 100, which would be a 40 dB gain.',
        skill: 'Decibels',
      },
      {
        question: 'A second volunteer’s ear-canal gain peaks at 2800 Hz. Using the same model and speed of sound, this volunteer’s canal length is closest to:',
        options: ['2.0 cm', '3.1 cm', '6.3 cm', '12.5 cm'],
        correctAnswer: 1,
        explanation:
          'Rearranging $f_1 = v/4L$ gives $L = \\frac{v}{4f_1} = \\frac{350}{4(2800)} = \\frac{350}{11{,}200} = 0.031$ m, about 3.1 cm. A lower resonant frequency means a longer canal. The 2.0 cm value scales 2.5 cm by 2800/3500, as if length were proportional to frequency. The 6.3 cm value uses the open-tube relation $L = v/2f$. The 12.5 cm value is the full wavelength, $v/f$.',
        skill: 'Standing waves',
      },
      {
        question: 'At the eardrum, the fundamental standing wave in the canal has:',
        options: [
          'a displacement antinode, where the pressure variation is largest',
          'a displacement node, where the pressure variation is smallest',
          'a displacement antinode, where the pressure variation is smallest',
          'a displacement node, where the pressure variation is largest',
        ],
        correctAnswer: 3,
        explanation:
          'The eardrum is the closed end of the tube, where air cannot move back and forth freely, so it is a displacement node. Pressure variation is greatest where displacement is least, so the closed end is a pressure antinode, which is also why sound pressure is boosted at the eardrum. A displacement antinode with the smallest pressure variation describes the open outer end, not the eardrum. In a sound wave, displacement nodes coincide with pressure antinodes, so a displacement node with the smallest pressure variation, or a displacement antinode with the largest, cannot occur.',
        skill: 'Sound waves',
      },
      {
        question: 'Which modification would most directly test the conclusion that the peak in Figure 1 is produced by resonance of the ear canal?',
        options: [
          'Extend the canal with a short tube and check that the peak moves to a lower frequency',
          'Raise the level of every tone and check that the peak moves to a higher frequency',
          'Test noise-exposed workers and check that their hearing losses center near 4000 Hz',
          'Repeat the measurement a week later and check that the gain at 3500 Hz is unchanged',
        ],
        correctAnswer: 0,
        explanation:
          'The model predicts $f_1 = v/4L$, so lengthening the tube should lower the peak frequency by a calculable amount; for example, a canal effectively 3.5 cm long should peak near $350/(4 \\times 0.035) = 2500$ Hz. Observing that predicted shift ties the peak to canal length. Resonant frequency depends on tube length and the speed of sound, not on how loud the tone is, so a louder tone is not expected to move the peak. Hearing losses in workers show only a correlation with the resonance region and cannot show what produces the gain peak. A repeat measurement tests reliability, not mechanism.',
        skill: 'Experimental design',
      },
    ],
    needsReview: false,
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. HEAT TRANSFER — Evaporative cooling, specific heat, latent heat
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp3-04',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Evaporative Cooling During Exercise in the Heat',
    passageText:
      'During prolonged exercise, only about 20% of the energy released by metabolism does mechanical work; the rest appears as heat that must leave the body if core temperature is to stay constant. Heat leaves the skin by radiation, conduction, and convection, all of which depend on a temperature difference between the skin and its surroundings, and by evaporation of sweat, which removes the latent heat of vaporization of water, $L_v = 2.4 \\times 10^{6}$ J/kg at skin temperature. Sweat that drips off the skin without evaporating removes essentially no heat.\n\nExercise physiologists studied an 80 kg cyclist pedaling at constant power in an environmental chamber whose air and walls were held at 35 °C. The cyclist’s metabolic heat production was 700 W throughout. Mean skin temperature stayed close to 35 °C in both of two trials: a dry trial at 30% relative humidity and a humid trial at 80% relative humidity. Core temperature was recorded every 10 minutes (Figure 1), and each trial was stopped after 40 minutes for safety. Sweat that dripped from the cyclist was collected in a tray beneath the bicycle; it totaled 0.05 kg in the dry trial and 0.50 kg in the humid trial.\n\nTo interpret the temperature data, the investigators treated the body as a single object with a uniform temperature and an average specific heat of $c = 3500\\ \\text{J}/(\\text{kg}\\cdot{}^\\circ\\text{C})$. Heat retained in the body raises its temperature according to $Q = mc\\Delta T$, so the rate at which heat is stored is $mc\\,\\Delta T/\\Delta t$.',
    chart: {
      title: 'Figure 1. Core temperature of the cyclist during exercise in a 35 °C chamber',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'min',
      yLabel: 'Core temperature',
      yUnit: '°C',
      xValues: [0, 10, 20, 30, 40],
      yValues: [37.0, 37.5, 37.8, 37.9, 37.9],
      seriesLabel: 'Dry trial (30% RH)',
      comparisonSeries: [{ label: 'Humid trial (80% RH)', yValues: [37.0, 37.8, 38.4, 39.0, 39.6] }],
    },
    questions: [
      {
        question: 'If no heat at all left the cyclist’s body, by how much would core temperature rise in 10 minutes?',
        options: ['0.15 °C', '1.5 °C', '9.0 °C', '15 °C'],
        correctAnswer: 1,
        explanation:
          'In 10 minutes (600 s) the body produces $Q = (700\\ \\text{W})(600\\ \\text{s}) = 4.2 \\times 10^{5}$ J. Then $\\Delta T = \\frac{Q}{mc} = \\frac{4.2 \\times 10^{5}}{(80)(3500)} = \\frac{4.2 \\times 10^{5}}{2.8 \\times 10^{5}} = 1.5$ °C. The 0.15 °C value is the rise in one minute, not ten. The 9.0 °C value is the rise in a full hour. The 15 °C value slips a factor of ten, as if 6000 s had elapsed.',
        skill: 'Specific heat',
      },
      {
        question: 'What mass of sweat must evaporate to remove all 700 W of metabolic heat for 40 minutes?',
        options: ['0.012 kg', '0.070 kg', '0.70 kg', '1.1 kg'],
        correctAnswer: 2,
        explanation:
          'The heat to remove is $Q = (700\\ \\text{W})(40 \\times 60\\ \\text{s}) = 1.68 \\times 10^{6}$ J. Each kilogram of evaporated sweat removes $2.4 \\times 10^{6}$ J, so $m = \\frac{1.68 \\times 10^{6}}{2.4 \\times 10^{6}} = 0.70$ kg. The 0.012 kg value leaves the time in minutes instead of seconds. The 0.070 kg value slips a power of ten in the division. The 1.1 kg value (1.05 kg before rounding) is the mass needed for a full 60 minutes. Because dripped sweat removes no heat, the cyclist would have to secrete more than 0.70 kg if any sweat dripped.',
        skill: 'Latent heat',
      },
      {
        question: 'Based on Figure 1, at what average rate was heat being stored in the cyclist’s body between 20 and 40 minutes of the humid trial?',
        options: ['280 W', '420 W', '700 W', '16,800 W'],
        correctAnswer: 0,
        explanation:
          'Core temperature rose from 38.4 °C to 39.6 °C, which is 1.2 °C in 20 minutes (1200 s), or $1.0 \\times 10^{-3}$ °C/s. The storage rate is $mc\\,\\Delta T/\\Delta t = (80)(3500)(1.0 \\times 10^{-3}) = 280$ W. The 420 W value is the heat still being lost (700 W − 280 W), not the heat stored. The 700 W value would require that no heat left the body at all. The 16,800 W value uses the rise per minute (0.06 °C/min) as though it were per second.',
        skill: 'Heat and power',
      },
      {
        question: 'Evaporation was essentially the only effective route of heat loss in this chamber because:',
        options: [
          'the skin and its surroundings were at almost the same temperature',
          'water vapor in the air blocks the emission of infrared radiation',
          'the latent heat of water becomes much larger at 35 °C',
          'conduction to air occurs only when skin is cooler than the air',
        ],
        correctAnswer: 0,
        explanation:
          'The passage states that radiation, conduction, and convection all depend on a temperature difference between the skin and its surroundings. With the chamber air and walls at 35 °C and mean skin temperature close to 35 °C, that difference was near zero, so those routes carried almost no net heat, while evaporation does not require the skin to be warmer than its surroundings. Water vapor does not stop skin from emitting infrared radiation; net radiative loss was small because the walls were as warm as the skin. The latent heat is given as a fixed $2.4 \\times 10^{6}$ J/kg, and in reality it decreases slightly as temperature rises. Heat conducts from warmer to cooler objects, so skin cooler than the air would gain heat, not lose it.',
        skill: 'Heat transfer mechanisms',
      },
      {
        question: 'Which explanation best accounts for the difference between the two trials in Figure 1?',
        options: [
          'Humid air lowered the latent heat that each kilogram of evaporated sweat removed',
          'The cyclist produced more metabolic heat in the humid trial than in the dry trial',
          'Warm, moist air carried heat into the skin by convection during the humid trial',
          'More sweat dripped off instead of evaporating, so less latent heat was removed',
        ],
        correctAnswer: 3,
        explanation:
          'In humid air the difference in water vapor concentration between skin and air is smaller, so sweat evaporates more slowly and more of it drips off; the tray collected 0.50 kg in the humid trial versus 0.05 kg in the dry trial. Dripped sweat removes essentially no heat, so less of the 700 W was lost and the remainder was stored, raising core temperature steadily. Latent heat is a property of water at a given temperature; humidity changes how much sweat evaporates, not how much heat each kilogram removes. The passage states that heat production was 700 W in both trials. Convection requires a temperature difference, and the skin and air were both near 35 °C.',
        skill: 'Heat transfer mechanisms',
      },
    ],
    needsReview: false,
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. MOMENTUM & ENERGY — Force-plate analysis of a jump
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp3-05',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Force-Plate Analysis of a Vertical Jump',
    passageText:
      'Sports scientists use force plates to measure the vertical ground reaction force that the floor exerts on an athlete. By Newton’s second law, the net vertical force on the athlete equals the rate of change of the athlete’s momentum. Starting from rest, the net impulse delivered during push-off therefore equals the athlete’s momentum at takeoff:\n\n$\\int (F - mg)\\, dt = m v_{takeoff}$\n\nwhere $F$ is the force-plate reading and $mg$ is the athlete’s weight.\n\nA 60 kg elite volleyball player performed a squat jump: she held a stationary crouch, then pushed upward as hard as possible without first dipping lower. The push-off lasted 0.30 s, after which the plate reading dropped to zero as her feet left the surface. To simplify the analysis, the investigators averaged the plate force over three consecutive 0.10 s intervals (Figure 1). Take $g = 10\\ \\text{m/s}^2$ and neglect air resistance.\n\nAfter takeoff, the athlete is a projectile: her center of mass rises until its vertical velocity is zero and then falls back. Jump height can therefore be estimated in two ways, either from the takeoff velocity found by the impulse method or from the flight time, measured as the interval during which the plate reads zero. The two methods agree only if the athlete lands with her center of mass at the same height it had at takeoff.\n\nOn landing, the athlete must again receive an impulse from the floor to bring her to rest. Coaches teach athletes to bend their knees on landing, a technique that changes how the stopping impulse is delivered by the floor.',
    chart: {
      title: 'Figure 1. Average ground reaction force in each 0.10 s interval of push-off',
      kind: 'bar',
      xLabel: 'Push-off interval',
      xUnit: 's',
      yLabel: 'Average plate force',
      yUnit: 'N',
      xValues: ['0–0.10', '0.10–0.20', '0.20–0.30'],
      yValues: [900, 1500, 1200],
      seriesLabel: 'Squat jump, 60 kg athlete',
    },
    questions: [
      {
        question: 'Based on Figure 1, the net impulse delivered to the athlete during push-off is:',
        options: ['90 N·s', '180 N·s', '360 N·s', '540 N·s'],
        correctAnswer: 1,
        explanation:
          'Her weight is $mg = (60)(10) = 600$ N. The net force in each interval is the plate force minus 600 N: 300 N, 900 N, and 600 N. Each lasts 0.10 s, so the net impulse is $(300 + 900 + 600)(0.10) = 180$ N·s. The 360 N·s value is the total plate impulse, $(900 + 1500 + 1200)(0.10)$, without subtracting the weight. The 540 N·s value adds the weight’s 180 N·s impulse instead of subtracting it. The 90 N·s value uses only the middle interval.',
        skill: 'Impulse',
      },
      {
        question: 'The height her center of mass rises after takeoff is closest to:',
        options: ['0.15 m', '0.30 m', '0.45 m', '0.90 m'],
        correctAnswer: 2,
        explanation:
          'The takeoff velocity is $v = \\frac{180\\ \\text{N}\\cdot\\text{s}}{60\\ \\text{kg}} = 3.0$ m/s. Rising to the apex, kinetic energy becomes gravitational potential energy: $h = \\frac{v^2}{2g} = \\frac{(3.0)^2}{2(10)} = 0.45$ m. The 0.90 m value omits the one-half in the kinetic energy. The 0.30 m value is $v/g$, the time to reach the apex in seconds, reported as a height. The 0.15 m value is $v/2g$, which forgets to square the velocity.',
        skill: 'Conservation of energy',
      },
      {
        question: 'If she lands with her center of mass at the takeoff height, the flight time recorded by the force plate should be:',
        options: ['0.30 s', '0.60 s', '0.90 s', '1.2 s'],
        correctAnswer: 1,
        explanation:
          'Gravity reduces her upward velocity by 10 m/s every second, so she reaches the apex after $t = v/g = 3.0/10 = 0.30$ s. By symmetry the descent takes another 0.30 s, for a flight time of 0.60 s. As a check, $h = \\frac{1}{8}gt^2 = \\frac{1}{8}(10)(0.60)^2 = 0.45$ m, the same height the impulse method gives. The 0.30 s value is only the rise. The 0.90 s value adds the 0.30 s push-off, when the plate is still reading a force. The 1.2 s value uses $4v/g$, counting the rise and fall twice.',
        skill: 'Projectile motion',
      },
      {
        question: 'On one landing she touched down at 3.0 m/s and was brought to rest in 0.15 s. The average force the floor exerted on her during this landing was:',
        options: ['600 N', '1200 N', '1800 N', '3000 N'],
        correctAnswer: 2,
        explanation:
          'Take upward as positive. Her momentum changes from $-(60)(3.0) = -180$ kg·m/s to zero, so the net impulse is +180 N·s and the average net force is $180/0.15 = 1200$ N upward. The floor must supply this net force and also support her weight: $F = 1200 + 600 = 1800$ N. The 1200 N value is the net force only, leaving out the weight. The 600 N value is the weight alone, as if no momentum had to be removed. The 3000 N value treats the landing as a rebound, with a momentum change of 360 kg·m/s, and then adds the weight.',
        skill: 'Impulse–momentum theorem',
      },
      {
        question: 'Bending the knees on landing lowers the average force on the athlete mainly because it:',
        options: [
          'lengthens the time over which her momentum is reduced to zero',
          'reduces the total impulse needed to bring her body to rest',
          'reduces the momentum she has when her feet touch down',
          'turns her kinetic energy into gravitational potential energy',
        ],
        correctAnswer: 0,
        explanation:
          'The impulse needed to stop her is fixed by her momentum at touchdown: $F_{net}\\,\\Delta t = \\Delta p$. Flexing the knees spreads the stop over a longer time, so the same change in momentum requires a smaller average net force. The impulse is not reduced, because she must still go from 3.0 m/s to rest. Her touchdown speed is set before her feet reach the floor, so bending the knees cannot change it. As she crouches her center of mass moves down, so gravitational potential energy decreases rather than increases; her kinetic energy is dissipated in muscles and tissues.',
        skill: 'Impulse–momentum theorem',
      },
    ],
    needsReview: false,
  },

  // ────────────────────────────────────────────────────────────────────────
  // 6. FLUID STATICS — Archimedes’ principle and hydrostatic weighing
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp3-06',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Hydrostatic Weighing and Body Composition',
    passageText:
      'Hydrostatic (underwater) weighing estimates body composition from whole-body density. It relies on Archimedes’ principle: a submerged object experiences an upward buoyant force equal to the weight of the fluid it displaces, $F_b = \\rho_{water} V_{displaced}\\, g$.\n\nIn the procedure, a subject is first weighed in air. The subject then sits on a seat suspended from a scale inside a tank of water, exhales as completely as possible, and is fully submerged while the scale reading, the apparent weight, is recorded. The weight in air minus the apparent weight equals the buoyant force, from which the displaced volume is calculated. The displaced volume includes air that remains in the lungs even after maximal exhalation, called the residual volume, which is measured separately for each subject by a gas-dilution method. Subtracting the residual volume gives the volume of body tissue, and dividing body mass by tissue volume gives body density. The scale is tared so that the seat does not affect the reading, and the mass of air in the lungs is negligible.\n\nBody fat has a density of about $0.90\\ \\text{g/cm}^3$, and fat-free tissue about $1.10\\ \\text{g/cm}^3$. A two-compartment model based on these values relates body density $D$, in g/cm³, to the percentage of body mass that is fat:\n\n$\\%\\,\\text{fat} = \\frac{495}{D} - 450$\n\nA laboratory tested four adults in water of density $1.00\\ \\text{g/cm}^3$ ($1000\\ \\text{kg/m}^3$), taking $g = 10\\ \\text{m/s}^2$. Volumes were computed in liters and densities in kilograms per liter, which is numerically equal to grams per cubic centimeter, before being entered into the model. Results are shown in Table 1.',
    figure:
      '**Table 1. Hydrostatic weighing results**\n\n| Subject | Mass in air (kg) | Apparent weight underwater (N) | Residual volume (L) |\n|---------|------------------|--------------------------------|---------------------|\n| 1 | 78.0 | 20 | 1.0 |\n| 2 | 64.8 | 38 | 1.0 |\n| 3 | 71.4 | 4 | 1.0 |\n| 4 | 53.0 | 8 | 2.2 |',
    questions: [
      {
        question: 'What buoyant force acts on Subject 1 while fully submerged?',
        options: ['20 N', '760 N', '780 N', '800 N'],
        correctAnswer: 1,
        explanation:
          'Weight in air is $mg = (78.0)(10) = 780$ N. While submerged, the scale force and the buoyant force together balance the weight, so $F_b = 780 - 20 = 760$ N. The 20 N value is the apparent weight, not the buoyant force. The 780 N value is the weight in air; a buoyant force that large would make the scale read zero. The 800 N value adds the scale reading to the weight instead of subtracting it.',
        skill: 'Buoyancy',
      },
      {
        question: 'Subject 1’s body density is closest to:',
        options: ['0.962 g/cm³', '1.013 g/cm³', '1.026 g/cm³', '1.040 g/cm³'],
        correctAnswer: 3,
        explanation:
          'The displaced volume is $V = \\frac{F_b}{\\rho g} = \\frac{760}{(1000)(10)} = 0.0760\\ \\text{m}^3 = 76.0$ L. Removing the 1.0 L residual volume leaves 75.0 L of tissue, so $D = \\frac{78.0\\ \\text{kg}}{75.0\\ \\text{L}} = 1.040$ kg/L, which is 1.040 g/cm³. The 1.026 value divides by the full 76.0 L, leaving the lung air in. The 1.013 value adds the residual volume (77.0 L) instead of subtracting it. The 0.962 value inverts the ratio, dividing volume by mass.',
        skill: 'Density',
      },
      {
        question: 'Based on Table 1, which subject has the greatest percentage of body fat?',
        options: ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'],
        correctAnswer: 2,
        explanation:
          'More fat means lower density, so compute each density. Subject 2: $F_b = 648 - 38 = 610$ N, tissue volume 61.0 L − 1.0 L = 60.0 L, $D = 64.8/60.0 = 1.080$. Subject 3: $F_b = 714 - 4 = 710$ N, tissue volume 71.0 L − 1.0 L = 70.0 L, $D = 71.4/70.0 = 1.020$. Subject 4: $F_b = 530 - 8 = 522$ N, tissue volume 52.2 L − 2.2 L = 50.0 L, $D = 53.0/50.0 = 1.060$. With Subject 1 at 1.040, Subject 3 has the lowest density and the most fat (about 35%, versus 26% for Subject 1, 17% for Subject 4, and 8% for Subject 2). Subject 1 is the heaviest, but mass alone does not determine density. Subject 4 would look fattest if the residual volume were ignored ($53.0/52.2 \\approx 1.015$), but their larger residual volume only adds buoyancy; after subtracting it, their tissue density is the second highest. Subject 2 has the highest density and the least fat.',
        skill: 'Data interpretation',
      },
      {
        question: 'In a repeat trial, Subject 1 exhaled incompletely, leaving 0.5 L more air in the lungs than the measured residual volume. If the technician still subtracted the measured residual volume, the calculated body fat percentage would be:',
        options: [
          'too low, because the calculated tissue volume would be too small',
          'too low, because the calculated tissue volume would be too large',
          'unchanged, because the extra lung air has negligible mass',
          'too high, because the calculated tissue volume would be too large',
        ],
        correctAnswer: 3,
        explanation:
          'The extra 0.5 L of air adds $(1000)(0.5 \\times 10^{-3})(10) = 5$ N of buoyancy, so the scale reads 15 N. The calculation then gives a displaced volume of 76.5 L and, after subtracting only 1.0 L, a tissue volume of 75.5 L, so $D = 78.0/75.5 \\approx 1.033$, lower than the true 1.040. In the model, $\\%\\,\\text{fat} = 495/D - 450$ increases as $D$ decreases, so the estimate rises from about 26% to about 29%. Although the air’s mass is negligible, its volume adds buoyancy, so the result does change. The tissue volume comes out too large, not too small, and a too-large tissue volume lowers the calculated density, which raises rather than lowers the fat estimate.',
        skill: 'Experimental error',
      },
      {
        question: 'Two subjects have the same tissue volume and the same residual volume but different body masses. When both are fully submerged, they experience:',
        options: [
          'equal buoyant forces, with the heavier subject having the larger apparent weight',
          'a larger buoyant force on the heavier subject, with equal apparent weights',
          'equal buoyant forces, with both subjects having the same apparent weight',
          'a larger buoyant force and a larger apparent weight on the heavier subject',
        ],
        correctAnswer: 0,
        explanation:
          'By Archimedes’ principle, the buoyant force depends only on the volume of water displaced (tissue plus lung air) and the density of the water, not on the mass of the submerged body, so the buoyant forces are equal. Apparent weight is weight minus buoyant force, so with equal buoyant forces the heavier subject has the larger apparent weight, and that difference is what reveals the heavier subject’s greater density. Unequal buoyant forces would wrongly tie buoyancy to mass, and equal apparent weights would require equal masses.',
        skill: 'Buoyancy',
      },
    ],
    needsReview: false,
  },
]
