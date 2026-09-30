/**
 * MCAT Full-Length Form 2 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-09-30 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL2_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — Coupled equilibria: Hb–O2, CO2/bicarbonate, CO
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Coupled Equilibria in Oxygen and Carbon Dioxide Transport',
    passageText:
      'Oxygen transport in the blood depends on several reversible reactions that share chemical species, so a disturbance to one of them is felt by the others. Each of the four heme sites of hemoglobin binds one O₂ molecule. Binding at the four sites is cooperative, but many features of O₂ delivery can be understood from a simplified single-site equilibrium that includes the protons exchanged when hemoglobin changes conformation:\n\nHbH⁺ + O₂ ⇌ HbO₂ + H⁺ (Reaction 1)\n\nDeoxyhemoglobin binds protons more tightly than oxyhemoglobin because several histidine side chains and the N-terminal amino groups have higher p$K_a$ values in the deoxy conformation. Near physiological pH, roughly 0.6 H⁺ is exchanged for each O₂ bound. The binding of O₂ to heme is exothermic, with a standard enthalpy change of about −40 kJ per mole of O₂.\n\nCarbon dioxide produced by metabolism enters the same system. Dissolved CO₂ reacts with water, a step that the enzyme carbonic anhydrase accelerates inside red cells:\n\nCO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (Reaction 2)\n\nClinicians treat Reaction 2 as a single equilibrium with an apparent p$K_a$ of 6.1 and express dissolved CO₂ through its partial pressure: the concentration of dissolved CO₂ in millimoles per liter equals 0.03 times $P_{\\text{CO}_2}$ in mmHg. The Henderson–Hasselbalch equation then takes the form\n\n$\\text{pH} = 6.1 + \\log\\dfrac{[\\text{HCO}_3^-]}{0.03\\,P_{\\text{CO}_2}}$\n\nIn normal arterial plasma, $[\\text{HCO}_3^-]$ is about 24 mM and $P_{\\text{CO}_2}$ is about 40 mmHg. A conjugate pair whose p$K_a$ lies more than a full unit below the pH of a solution would make a weak buffer in a sealed flask. The bicarbonate system in the body, however, is open: the respiratory centers adjust ventilation so that $P_{\\text{CO}_2}$, and with it the concentration of dissolved CO₂, is held nearly constant from minute to minute, while the kidneys adjust $[\\text{HCO}_3^-]$ over hours to days.\n\nBecause Reactions 1 and 2 share H⁺, they are coupled. The decrease in O₂ affinity that accompanies a rise in $P_{\\text{CO}_2}$ or a fall in pH is known as the Bohr effect. The change in the capacity of blood to carry CO₂ that accompanies the oxygenation or deoxygenation of hemoglobin is known as the Haldane effect.\n\nCarbon monoxide competes with O₂ for the same heme sites:\n\nHbO₂ + CO ⇌ HbCO + O₂ (Reaction 3)\n\nWritten in terms of the partial pressures of the two gases, the equilibrium constant for Reaction 3 is about 250 at body temperature, so a partial pressure of CO far smaller than that of O₂ can occupy a substantial share of the heme sites. Bound CO also raises the O₂ affinity of the remaining sites in the same tetramer, so the O₂ that is carried is surrendered less readily to the tissues. Treatment of CO poisoning consists of raising the inspired $P_{\\text{O}_2}$, if necessary in a hyperbaric chamber, which drives Reaction 3 in reverse.',
    questions: [
      {
        question: 'A person breathes air containing enough CO that alveolar $P_{\\text{CO}}$ is 0.20 mmHg while alveolar $P_{\\text{O}_2}$ is 100 mmHg. Once Reaction 3 reaches equilibrium, and assuming that every heme site is occupied by either O₂ or CO, the percentage of heme sites carrying CO is closest to:',
        options: ['0.20%', '33%', '50%', '67%'],
        correctAnswer: 1,
        explanation:
          'For Reaction 3, $K = \\dfrac{[\\text{HbCO}]\\,P_{\\text{O}_2}}{[\\text{HbO}_2]\\,P_{\\text{CO}}} = 250$, so $[\\text{HbCO}]/[\\text{HbO}_2] = 250 \\times (0.20/100) = 0.50$. One CO-bound site for every two O₂-bound sites means CO occupies 1/3 of the sites, about 33%. The 50% value treats the 0.50 ratio as if it were the fraction of sites. The 67% value is the fraction still carrying O₂. The 0.20% value is simply the ratio of the two partial pressures, ignoring the much greater affinity of heme for CO.',
        skill: '5E equilibrium constant calculation (Skill 2)',
      },
      {
        question: 'According to the equilibria described in the passage, the binding of O₂ to hemoglobin in the pulmonary capillaries helps the blood unload CO₂ because oxygenation:',
        options: [
          'lowers the p$K_a$ of carbonic acid, so more bicarbonate turns into CO₂',
          'displaces CO₂ from the heme iron, where it had been bound in place of O₂',
          'increases the activity of carbonic anhydrase, which shifts Reaction 2 left',
          'releases H⁺ from hemoglobin; the protons drive Reaction 2 toward CO₂ and water',
        ],
        correctAnswer: 3,
        explanation:
          'Reaction 1 shows that O₂ binding converts HbH⁺ to HbO₂ and releases H⁺. Those protons combine with $\\text{HCO}_3^-$, pulling Reaction 2 toward $\\text{H}_2\\text{CO}_3$ and then CO₂ and water, and the CO₂ is exhaled; this is the Haldane effect. The p$K_a$ of carbonic acid is a property of that acid and is not changed by hemoglobin. CO₂ that travels on hemoglobin is carried on amino groups, not on the heme iron, and it does not compete with O₂ for heme. An enzyme speeds the approach to equilibrium but cannot shift the position of the equilibrium.',
        skill: '5E coupled equilibria and Le Chatelier (Skill 2)',
      },
      {
        question: 'Metabolism adds 12 mmol of a strong acid per liter of arterial plasma that initially has the normal values given in the passage. If ventilation rises just enough to keep $P_{\\text{CO}_2}$ at 40 mmHg, the plasma pH after the acid has reacted with bicarbonate is closest to:',
        options: ['7.1', '6.1', '6.8', '7.4'],
        correctAnswer: 0,
        explanation:
          'The added H⁺ converts 12 mM $\\text{HCO}_3^-$ into CO₂, leaving 12 mM bicarbonate. Because the extra CO₂ is exhaled, dissolved CO₂ stays at $0.03 \\times 40 = 1.2$ mM, so pH $= 6.1 + \\log(12/1.2) = 6.1 + 1 = 7.1$. A pH near 6.1 is what a sealed system would give: the CO₂ would accumulate to 13.2 mM and the ratio would fall below 1. A pH of 6.8 corresponds to a ratio of 5, which would require dissolved CO₂ to double as bicarbonate halved. A pH of 7.4 assumes the buffer absorbs the acid with no change at all, but halving the bicarbonate at constant CO₂ must lower the pH by log 2, about 0.3 unit.',
        skill: '5A open bicarbonate buffer (Skill 2)',
      },
      {
        question: 'Which of the following changes would alter the value of the equilibrium constant for Reaction 1?',
        options: [
          'Raising the partial pressure of O₂ in alveoli',
          'Lowering the pH of the blood from 7.4 to 7.2',
          'Raising the body temperature from 37 °C to 40 °C',
          'Raising the hemoglobin concentration of blood',
        ],
        correctAnswer: 2,
        explanation:
          'An equilibrium constant depends only on temperature. Because O₂ binding is exothermic, raising the temperature decreases $K$ for Reaction 1, lowering hemoglobin’s O₂ affinity. Raising $P_{\\text{O}_2}$ changes the reaction quotient, and the system shifts toward HbO₂ with $K$ unchanged. Lowering pH adds a product (H⁺) that appears in the equilibrium expression, so the position shifts toward HbH⁺ (the Bohr effect) while $K$ itself stays the same. Changing the amount of hemoglobin changes how much O₂ is bound, not the ratio that defines $K$.',
        skill: '5E equilibrium constant and temperature (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. PHYSICS — Ultrasound: penetration vs frequency, axial resolution
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-b-07',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Penetration and Resolution in Diagnostic Ultrasound',
    passageText:
      'Diagnostic ultrasound forms images from echoes. A piezoelectric transducer converts brief electrical pulses into pressure waves that travel into the body, and between pulses the same transducer acts as a receiver. Whenever a pulse meets a boundary between two tissues of different acoustic impedance, $Z = \\rho v$, where $\\rho$ is the density of the tissue and $v$ is the speed of sound in it, part of the wave is reflected back toward the transducer. The scanner assumes a speed of sound of 1540 m/s, the average for soft tissue, and converts the delay between the emission of a pulse and the arrival of each echo into the depth of the reflecting boundary.\n\nTwo requirements pull against each other when a transducer frequency is chosen. The first is axial resolution, the ability to distinguish two reflectors that lie one behind the other along the beam. Two such reflectors produce separate echoes only if they are farther apart than half the spatial length of the pulse, and the transducers used in medical imaging typically emit pulses that last two cycles. The second requirement is penetration. As a pulse travels, its intensity decreases because tissue absorbs and scatters acoustic energy. This attenuation is expressed in decibels (dB), where each 10 dB of loss corresponds to a tenfold decrease in intensity. In soft tissue the attenuation per centimeter is approximately proportional to frequency, so the attenuation coefficient $\\alpha$ of a material is reported in dB/(cm·MHz): a pulse of frequency $f$ that travels a distance $d$ loses $\\alpha f d$ decibels.\n\nTo characterize this trade-off, investigators imaged two tissue-mimicking phantoms, each containing thin nylon wires placed at 0.5-cm intervals of depth. Phantom A was formulated to mimic liver and had $\\alpha = 0.50$ dB/(cm·MHz). Phantom B was cast from a different gel whose attenuation had not been measured. The speed of sound was 1540 m/s in both phantoms. Five transducers with center frequencies from 2 to 10 MHz were each driven to emit the same acoustic intensity, and the receiver gain was set identically for every run. Under these conditions, a wire echo remained detectable as long as the total attenuation along the round trip from the transducer to the wire and back did not exceed 60 dB. For each transducer and phantom, the investigators recorded the greatest depth at which a wire echo could still be detected (Figure 1). The fraction of the incident energy reflected by a wire was taken to be the same at every frequency.\n\nIn a second test, the investigators mounted pairs of wires one behind the other along the beam axis in Phantom A at progressively smaller separations and recorded the smallest separation that each transducer could resolve. The 2-MHz transducer resolved wires 0.8 mm apart but not wires 0.7 mm apart, whereas the 10-MHz transducer still resolved wires 0.2 mm apart. The investigators concluded that no single frequency is best for all examinations, and that the operator must match the transducer to the depth of the structure being imaged.',
    chart: {
      title: 'Figure 1. Greatest depth at which a wire echo was detected, by transducer frequency',
      kind: 'line',
      xLabel: 'Transducer frequency',
      xUnit: 'MHz',
      yLabel: 'Maximum detection depth',
      yUnit: 'cm',
      xValues: [2, 4, 6, 8, 10],
      yValues: [30, 15, 10, 7.5, 6.0],
      seriesLabel: 'Phantom A',
      comparisonSeries: [{ label: 'Phantom B', yValues: [20, 10, 6.5, 5.0, 4.0] }],
    },
    questions: [
      {
        question: 'Which statement best describes the relationship between frequency and maximum detection depth shown in Figure 1 for Phantom A?',
        options: [
          'Depth falls by the same number of centimeters with each 2-MHz step',
          'Depth is proportional to the square of the ultrasound wavelength',
          'Depth times frequency has the same value for every transducer',
          'Depth is cut in half by every 2-MHz increase in the frequency used',
        ],
        correctAnswer: 2,
        explanation:
          'For Phantom A, depth × frequency is $2 \\times 30 = 4 \\times 15 = 6 \\times 10 = 8 \\times 7.5 = 10 \\times 6.0 = 60$ cm·MHz, so depth is inversely proportional to frequency, as expected when the allowed round-trip loss $2\\alpha f d$ is fixed at 60 dB. The decreases are not constant: 15 cm between 2 and 4 MHz but only 1.5 cm between 8 and 10 MHz. Because wavelength is inversely proportional to frequency, depth is proportional to the first power of wavelength, not its square. Depth halves only between 2 and 4 MHz; from 4 to 6 MHz it falls by one-third.',
        skill: '4D attenuation and frequency (Skill 4)',
      },
      {
        question: 'Based on Figure 1, the attenuation coefficient of Phantom B is closest to:',
        options: ['0.75 dB/(cm·MHz)', '0.33 dB/(cm·MHz)', '1.5 dB/(cm·MHz)', '0.50 dB/(cm·MHz)'],
        correctAnswer: 0,
        explanation:
          'For Phantom B, depth × frequency is about 40 cm·MHz (for example, 2 MHz × 20 cm). Setting the round-trip loss equal to the 60-dB limit gives $2\\alpha f d = 60$, so $\\alpha = 60/(2 \\times 40) = 0.75$ dB/(cm·MHz); equivalently, Phantom B’s depths are two-thirds of Phantom A’s, so its coefficient is 1.5 times 0.50. The value 1.5 dB/(cm·MHz) counts only the one-way path to the wire. The value 0.33 dB/(cm·MHz) scales Phantom A’s coefficient by the depth ratio instead of its inverse, although a shallower limit means more attenuation. The value 0.50 dB/(cm·MHz) assumes the phantoms attenuate equally, which the different depths rule out.',
        skill: '4D attenuation from data (Skill 4)',
      },
      {
        question: 'A structure lies 8 cm deep in tissue whose attenuation matches that of Phantom B. Using the best of the five transducers tested that can still detect echoes from that depth, the finest axial resolution attainable is closest to:',
        options: ['0.26 mm', '0.77 mm', '0.19 mm', '0.39 mm'],
        correctAnswer: 3,
        explanation:
          'Figure 1 shows that in Phantom B the 4-MHz transducer reaches 10 cm but the 6-MHz transducer reaches only 6.5 cm, so 4 MHz is the highest usable frequency. Its wavelength is $\\lambda = v/f = (1540\\ \\text{m/s})/(4 \\times 10^{6}\\ \\text{Hz}) \\approx 0.39$ mm. A two-cycle pulse is $2\\lambda$ long, and the resolution limit is half of that, or one wavelength, 0.39 mm. The 0.26-mm value is the resolution of the 6-MHz transducer, which cannot reach 8 cm in this tissue. The 0.77-mm value belongs to the 2-MHz transducer, which reaches the depth but resolves less finely than necessary. The 0.19-mm value takes half of a single wavelength rather than half of the two-cycle pulse.',
        skill: '4D wavelength and resolution (Skill 2)',
      },
      {
        question: 'When an ultrasound pulse passes from soft tissue into bone, in which the speed of sound is greater, how do the frequency and wavelength of the transmitted wave change?',
        options: [
          'Frequency increases, and wavelength stays the same',
          'Frequency stays the same, and the wavelength increases',
          'Frequency stays the same, and wavelength decreases',
          'Frequency decreases, and wavelength increases',
        ],
        correctAnswer: 1,
        explanation:
          'Frequency is set by the source: each wave crest arriving at the boundary launches one crest into the second medium, so frequency is unchanged on crossing. Because $v = f\\lambda$, a greater speed at the same frequency requires a longer wavelength. An increase in frequency with fixed wavelength would also produce a higher speed, but frequency does not change at a boundary. A shorter wavelength at the same frequency would mean a lower speed. A lower frequency with a longer wavelength wrongly assigns part of the speed change to frequency.',
        skill: '4D wave speed, frequency, wavelength (Skill 1)',
      },
      {
        question: 'Why was it important that all five transducers emitted the same acoustic intensity and that the receiver gain was the same for every run?',
        options: [
          'So differences in depth could be traced to frequency, not to signal strength',
          'So the speed of sound in each phantom would stay 1540 m/s at every frequency tested',
          'So the wavelength emitted by each transducer would be the same in all five of the runs',
          'So each wire would reflect the same fraction of incident energy at every frequency',
        ],
        correctAnswer: 0,
        explanation:
          'Maximum depth is reached when the echo just falls to the detection threshold. If one transducer emitted a weaker pulse or the receiver were less sensitive for that run, its echoes would fade out at a shallower depth for reasons unrelated to attenuation, confounding the effect of frequency. Emission intensity and receiver gain have no effect on the speed of sound, which depends on the properties of the medium. The wavelengths were meant to differ, because frequency is the independent variable. The fraction reflected by a wire depends on the impedance mismatch at the wire, not on how strongly the pulse was emitted.',
        skill: '4D controls in experimental design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. BIOCHEMISTRY — DNA melting curves: GC content, salt, ΔH/ΔS signs
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-b-08',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Thermal Melting of Synthetic DNA Duplexes',
    passageText:
      'When double-stranded DNA is heated, its two strands separate in a cooperative transition known as melting. The transition can be followed with a spectrophotometer. In the duplex, the bases are stacked on one another, and this stacking suppresses their absorption of ultraviolet light; as the strands come apart and the bases unstack, the absorbance at 260 nm rises by roughly one-third. The temperature at which half of the duplex molecules have dissociated is called the melting temperature, $T_m$. Melting can be reversed: when a melted sample is cooled slowly, complementary strands find one another and re-form the duplex, a process called annealing or, when one of the strands is a labeled probe, hybridization.\n\nInvestigators developing probes for a diagnostic assay synthesized three pairs of complementary 20-nucleotide strands. Each pair formed a perfectly matched 20-base-pair duplex with no overhanging ends. The duplexes differed only in base composition: Duplex 1 contained 5 G–C pairs, Duplex 2 contained 10, and Duplex 3 contained 15, with every remaining position occupied by an A–T pair. The sequences were designed so that no single strand could fold back on itself to form a hairpin.\n\nEach duplex was dissolved at a total strand concentration of 2.0 μM in a buffer containing 10 mM sodium phosphate (pH 7.0) and 0.10 M NaCl. Samples were heated from 45 °C to 80 °C at 0.5 °C per minute in a cuvette with a tight-fitting lid, and the absorbance at 260 nm was recorded continuously. At each temperature, the percentage of strands in the single-stranded state was calculated from the absorbance, using the absorbance of the fully paired duplex at low temperature and that of the fully separated strands at high temperature as reference values. The results are shown in Figure 1. Each sample was then cooled back to 45 °C at the same rate, and in every case its absorbance returned to within 1% of its starting value.\n\nThe investigators interpreted their curves in terms of the standard free energy of duplex formation from the two single strands, $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, treating $\\Delta H^\\circ$ and $\\Delta S^\\circ$ as approximately independent of temperature over the range studied. They noted that each phosphate group in the backbone carries one negative charge at pH 7.0, and that in the double helix the backbones of the two strands lie within about 2 nm of each other.\n\nFor the assay, a probe must remain bound to its target during a wash step and yet dissociate from sequences it does not match. The investigators therefore planned a second series of measurements in which Duplex 2 would be melted in buffers containing 1.0 M NaCl and 0.010 M NaCl, with all other conditions unchanged, so that the stringency of the wash could be adjusted through its ionic strength as well as through its temperature.',
    chart: {
      title: 'Figure 1. Percentage of strands in the single-stranded state versus temperature (0.10 M NaCl)',
      kind: 'line',
      xLabel: 'Temperature',
      xUnit: '°C',
      yLabel: 'Single-stranded',
      yUnit: '%',
      xValues: [45, 50, 55, 60, 65, 70, 75, 80],
      yValues: [2, 12, 50, 88, 98, 100, 100, 100],
      seriesLabel: 'Duplex 1 (5 G–C pairs)',
      comparisonSeries: [
        { label: 'Duplex 2 (10 G–C pairs)', yValues: [0, 0, 2, 12, 50, 88, 98, 100] },
        { label: 'Duplex 3 (15 G–C pairs)', yValues: [0, 0, 0, 0, 2, 12, 50, 88] },
      ],
      hidePointLabels: true,
    },
    questions: [
      {
        question: 'Based on Figure 1, replacing one A–T pair with a G–C pair in these duplexes raised $T_m$ by approximately:',
        options: ['0.5 °C', '1.0 °C', '10 °C', '2 °C'],
        correctAnswer: 3,
        explanation:
          'The curves cross 50% single-stranded at 55 °C, 65 °C, and 75 °C for Duplexes 1, 2, and 3, so each additional 5 G–C pairs raises $T_m$ by 10 °C, or about 2 °C per pair. The 10 °C value is the change for five substitutions, not one. The 1 °C value divides the 20 °C span between Duplexes 1 and 3 by the 20 base pairs of the duplex rather than by the 10 substitutions. The 0.5 °C value divides the 10 °C step by all 20 base pairs instead of by the 5 pairs that changed.',
        skill: '5D melting temperature from data (Skill 4)',
      },
      {
        question: 'The trend in $T_m$ among the three duplexes is best explained by the fact that, compared with an A–T pair, a G–C pair:',
        options: [
          'contains two purines, which are larger and stack more extensively',
          'forms three hydrogen bonds and stacks more strongly with its neighbors',
          'carries less negative charge, lowering repulsion between strands',
          'is held together by a covalent bond that must break during melting',
        ],
        correctAnswer: 1,
        explanation:
          'A G–C pair is joined by three hydrogen bonds rather than two, and G–C-containing steps have more favorable stacking energies, so more thermal energy is needed to separate G–C-rich duplexes. Every base pair, G–C or A–T, consists of one purine and one pyrimidine. The negative charge resides on the phosphates, one per nucleotide, so all three 20-base-pair duplexes carry the same charge. Base pairs are held by noncovalent interactions; no covalent bond breaks during melting, which is why the process is readily reversible.',
        skill: '5D nucleic acid structure and stability (Skill 1)',
      },
      {
        question: 'In the planned 1.0 M NaCl buffer, the $T_m$ of Duplex 2 would most likely be:',
        options: [
          'lower, because Na⁺ binds the bases and disrupts their hydrogen bonds',
          'unchanged, because NaCl does not take part in the base-pairing reaction',
          'higher, because Na⁺ screens the negative charges on the two backbones',
          'higher, because Cl⁻ strengthens the stacking between adjacent bases',
        ],
        correctAnswer: 2,
        explanation:
          'Bringing two polyanionic backbones within about 2 nm of each other costs electrostatic energy. A higher concentration of Na⁺ crowds counterions around the phosphates and screens that repulsion, stabilizing the duplex relative to the separated strands and raising $T_m$ above 65 °C (conversely, 0.010 M NaCl would lower it). Na⁺ associates with the negatively charged phosphates rather than breaking base-pair hydrogen bonds. Although NaCl does not appear in the base-pairing equation, ionic strength changes the free energy of the charged duplex and so shifts the equilibrium. Anions are repelled by the negatively charged DNA and do not enhance stacking.',
        skill: '5D electrostatics and duplex stability (Skill 2)',
      },
      {
        question: 'The results in Figure 1 indicate that, for formation of each duplex from its single strands:',
        options: [
          '$\\Delta H^\\circ$ and $\\Delta S^\\circ$ are both negative',
          '$\\Delta H^\\circ$ and $\\Delta S^\\circ$ are both positive',
          '$\\Delta H^\\circ$ is negative and $\\Delta S^\\circ$ is positive',
          '$\\Delta H^\\circ$ is positive and $\\Delta S^\\circ$ is negative',
        ],
        correctAnswer: 0,
        explanation:
          'Each duplex is stable at low temperature and dissociates at high temperature, so duplex formation is favorable at low $T$ and unfavorable at high $T$. For $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ to be negative at low $T$, $\\Delta H^\\circ$ must be negative; for it to become positive as $T$ rises, $-T\\Delta S^\\circ$ must be positive, so $\\Delta S^\\circ$ is negative, consistent with two strands becoming one ordered helix. If both were positive, the duplex would form only at high temperature. A negative $\\Delta H^\\circ$ with a positive $\\Delta S^\\circ$ would favor the duplex at every temperature, and the reverse combination would disfavor it at every temperature.',
        skill: '5E thermodynamics of duplex formation (Skill 2)',
      },
      {
        question: 'The investigators cooled each sample back to 45 °C after melting and compared its final absorbance with its starting absorbance. The main purpose of this step was to:',
        options: [
          'find the absorbance of fully separated strands for use as a reference value',
          'measure each $T_m$ a second time at a slower rate of temperature change',
          'test whether single strands had folded into hairpins after the duplex melted',
          'confirm that the absorbance rise reflected reversible separation, not damage',
        ],
        correctAnswer: 3,
        explanation:
          'If heating had degraded the DNA, or if solvent had evaporated and concentrated the sample, the absorbance would not return to its starting value on cooling. Recovery to within 1% shows that the curves record a reversible equilibrium between duplex and single strands, which is what a $T_m$ and a $\\Delta G^\\circ$ analysis assume. The reference absorbance of separated strands comes from the high-temperature end of the heating run, not from the cooled sample. The cooling rate was the same 0.5 °C per minute as the heating rate. Hairpin formation was already excluded by the sequence design, and a cooled sample dominated by re-formed duplex could not reveal hairpins in any case.',
        skill: '5D experimental controls (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Nuclear medicine: decay modes, PET, dose, T_eff
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Radionuclides in Imaging and Therapy',
    passageText:
      'Nuclear medicine exploits the fact that radioactive nuclei can be followed from outside the body or used to deliver energy to a chosen tissue. A nucleus is unstable when its ratio of neutrons to protons lies outside the band of stability, and it decays in a way that moves it toward that band. Nuclei with too many neutrons tend to undergo beta-minus decay, in which a neutron is converted into a proton and an electron is emitted. Nuclei with too few neutrons may undergo positron emission or electron capture, each of which converts a proton into a neutron. Very heavy nuclei often emit alpha particles, which are helium-4 nuclei. After any of these events the daughter nucleus may be left in an excited state, which relaxes by emitting a gamma-ray photon.\n\nPositron emission tomography (PET) relies on positron emitters such as fluorine-18, which has a half-life of 110 minutes and is incorporated into the glucose analog fluorodeoxyglucose. A positron emitted in tissue slows down within a millimeter or two, and it then meets an electron. The two particles annihilate, and their combined rest energy appears as two gamma photons of 511 keV each that travel in nearly opposite directions. Rings of detectors surrounding the patient register the two photons in coincidence, and the line joining the two detectors that fire together is known to pass through the site of annihilation. Many such lines, accumulated over several minutes, are reconstructed into an image of where the tracer has concentrated.\n\nTechnetium-99m, the most widely used imaging nuclide, is a long-lived excited state of technetium-99. It decays with a half-life of 6.0 hours by emitting a 140-keV gamma photon, which easily escapes the body to reach an external camera, and it emits few charged particles, so little energy is deposited locally.\n\nTherapeutic nuclides are chosen for the opposite property: they deposit their energy close to where they decay. Beta-minus emitters such as iodine-131, which has a half-life of 8.0 days and is concentrated by thyroid tissue, deposit their energy within about a millimeter of where they are emitted. Alpha particles deposit far more energy per unit length of path and stop within a few cell diameters. Radium-223 behaves chemically like calcium and accumulates at sites of active bone formation, including bone metastases; it decays through a chain of short-lived daughters, by a sequence of alpha and beta-minus decays, to stable lead-207.\n\nTwo quantities govern the radiation dose a patient receives. The first is the absorbed dose, the energy deposited per unit mass of tissue, measured in grays (1 Gy = 1 J/kg). The second is how long the nuclide remains in the body. Activity is lost both by physical decay and by biological elimination, and when both processes are first order, the effective half-life satisfies\n\n$\\dfrac{1}{T_{\\text{eff}}} = \\dfrac{1}{T_{\\text{phys}}} + \\dfrac{1}{T_{\\text{biol}}}$\n\nso that the effective half-life is shorter than either the physical or the biological half-life alone.',
    questions: [
      {
        question: 'The two photons produced by positron–electron annihilation in PET travel in nearly opposite directions because:',
        options: [
          'photons of equal energy must diverge to avoid destructive interference',
          'the pair had almost no total momentum before it annihilated',
          'the magnetic field of the detector ring bends the photons apart',
          'the positron and electron have opposite charges that must be conserved',
        ],
        correctAnswer: 1,
        explanation:
          'By the time it annihilates, the positron has slowed almost to rest, so the positron–electron pair has nearly zero total momentum. Conservation of momentum then requires the two photons, which each carry momentum $E/c$, to have equal and opposite momenta: equal energies and opposite directions. Interference affects how overlapping waves combine, not the directions in which the photons are emitted. Photons carry no charge, so a magnetic field does not deflect them. Charge is conserved because the +1 and −1 charges sum to zero and the photons are neutral; charge conservation says nothing about direction.',
        skill: '4E annihilation and momentum conservation (Skill 1)',
      },
      {
        question: 'A technetium-99m-labeled agent is cleared from the body with a biological half-life of 12 hours. About how long after injection has the activity remaining in the patient fallen to one-quarter of its initial value?',
        options: ['4.0 h', '12 h', '8.0 h', '18 h'],
        correctAnswer: 2,
        explanation:
          '$1/T_{\\text{eff}} = 1/6.0 + 1/12 = 3/12$, so $T_{\\text{eff}} = 4.0$ h. Falling to one-quarter takes two effective half-lives, 8.0 h. The 4.0-h value is one effective half-life, which leaves half the activity. The 12-h value is two physical half-lives and ignores biological clearance. The 18-h value is two half-lives computed from the average of 6 h and 12 h, but rates of removal add; half-lives do not average.',
        skill: '4E effective half-life (Skill 2)',
      },
      {
        question: 'The decay chain from radium-223 (atomic number 88) to lead-207 (atomic number 82) must include how many alpha decays and how many beta-minus decays?',
        options: ['4 alpha and 2 beta-minus', '4 alpha and 0 beta-minus', '3 alpha and 0 beta-minus', '4 alpha and 6 beta-minus'],
        correctAnswer: 0,
        explanation:
          'Only alpha decay changes the mass number, by 4 each time, so the drop from 223 to 207 requires $16/4 = 4$ alpha decays. Four alpha decays lower the atomic number by 8, from 88 to 80, and each beta-minus decay raises it by 1, so 2 beta-minus decays bring it to 82. Four alpha decays with no beta decay would end at element 80, mercury. Three alpha decays would lower the atomic number by exactly 6 but leave a mass number of 211. Four alpha and six beta-minus decays would give atomic number 86.',
        skill: '4E nuclear decay equations (Skill 2)',
      },
      {
        question: 'Over the course of treatment, alpha particles from the radium-223 decay chain deposit all of their energy in a 50-g region of bone tissue. If $2.5 \\times 10^{11}$ alpha particles, each with a kinetic energy of 5.0 MeV, are absorbed, the absorbed dose is closest to: (1 MeV = $1.6 \\times 10^{-13}$ J)',
        options: ['0.004 Gy', '40 Gy', '0.40 Gy', '4.0 Gy'],
        correctAnswer: 3,
        explanation:
          'Each alpha particle deposits $5.0 \\times 1.6 \\times 10^{-13} = 8.0 \\times 10^{-13}$ J, so the total energy is $(2.5 \\times 10^{11})(8.0 \\times 10^{-13}) = 0.20$ J. Dividing by the mass in kilograms, $0.20\\ \\text{J}/0.050\\ \\text{kg} = 4.0$ Gy. The 0.004-Gy value divides by the mass in grams rather than kilograms. The 0.40-Gy and 40-Gy values are power-of-ten slips, for example from using 0.50 kg or 5.0 g as the mass.',
        skill: '4E absorbed dose (Skill 2)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Chiral drugs, resolution, SN1/SN2/E1/E2 selection
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl2-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Stereochemistry and Reactivity in Chiral Drug Synthesis',
    passageText:
      'Many drugs contain one or more stereocenters. Because receptors and enzymes are themselves built from chiral amino acids, the two enantiomers of a drug often differ greatly in activity. The more active enantiomer is called the eutomer and the less active one the distomer. In some cases the distomer is simply inert; in others it produces side effects of its own or is converted in the body into the eutomer. Regulatory agencies therefore expect the manufacturer of a new chiral drug to characterize each enantiomer separately.\n\nEnantiomers have identical melting points, boiling points, and solubilities in achiral solvents, but they rotate plane-polarized light by equal amounts in opposite directions. The composition of a mixture of enantiomers is reported as its enantiomeric excess (ee), the percentage by which the major enantiomer exceeds the minor one. Because each enantiomer contributes to the observed rotation in proportion to its amount, the ee of a sample equals its specific rotation divided by the specific rotation of the pure major enantiomer.\n\nChemists obtain single enantiomers in two general ways. In a resolution, a racemic basic drug is treated with one enantiomer of a chiral acid, such as (R,R)-tartaric acid. The two salts that form are diastereomers, which can be separated by fractional crystallization; treating each separated salt with aqueous base then liberates the free amine. In a stereoselective synthesis, a stereocenter is created or transformed by a reaction whose stereochemical course is predictable.\n\nNucleophilic substitution at a stereocenter illustrates why the mechanism matters. In an SN2 reaction, the nucleophile attacks the carbon from the side opposite the leaving group in a single concerted step, and the rate depends on the concentrations of both the substrate and the nucleophile. SN2 reactions are fastest at methyl and primary carbons, slower at secondary carbons, and essentially absent at tertiary carbons. In an SN1 reaction, the leaving group departs first to form a planar carbocation, which the nucleophile can then attack from either face. This pathway is favored at tertiary carbons and in polar protic solvents, which stabilize the ionic intermediate. Elimination competes with both substitution pathways. Strong bases, especially bulky ones such as potassium tert-butoxide, favor E2 elimination, which requires the hydrogen being removed and the leaving group to be anti-periplanar, whereas weakly basic conditions and heat favor E1 elimination through the same carbocation formed in SN1.\n\nIn one route to a chiral nitrile intermediate, a chemist treats (R)-2-bromobutane with sodium cyanide in dimethyl sulfoxide (DMSO), a polar aprotic solvent, and isolates 2-methylbutanenitrile with high optical purity. A second chemist runs the same reaction in aqueous ethanol and isolates the same constitutional product, together with some butenes, but with markedly lower optical purity. Replacing sodium cyanide with potassium tert-butoxide in the second chemist’s solvent gives mainly butenes.',
    questions: [
      {
        question: 'The first chemist’s choice of DMSO as the solvent favors an SN2 pathway chiefly because polar aprotic solvents:',
        options: [
          'stabilize the carbocation that forms once bromide leaves the substrate',
          'donate hydrogen bonds to cyanide, making it a stronger nucleophile',
          'solvate the sodium ion well but leave the cyanide ion poorly solvated and reactive',
          'protonate the bromine atom, converting it into a better leaving group',
        ],
        correctAnswer: 2,
        explanation:
          'Polar aprotic solvents such as DMSO dissolve salts by solvating cations through their partially negative oxygen atoms, but they cannot hydrogen-bond to anions. The cyanide ion is therefore left relatively “naked” and highly nucleophilic, which accelerates the bimolecular SN2 step. Stabilizing a carbocation is what polar protic solvents do, and it favors SN1. Hydrogen bonding to an anion lowers its energy and weakens it as a nucleophile, and an aprotic solvent has no O–H or N–H bonds to donate in any case. DMSO is not an acid and does not protonate the leaving group.',
        skill: '5D solvent effects in substitution (Skill 1)',
      },
      {
        question: 'The major product isolated by the first chemist is expected to be:',
        options: [
          '(S)-2-methylbutanenitrile, formed with inversion of configuration',
          '(R)-2-methylbutanenitrile, formed with retention of configuration',
          'racemic 2-methylbutanenitrile, formed by way of a planar carbocation',
          '(R)-2-methylbutanenitrile, formed with inversion of configuration',
        ],
        correctAnswer: 0,
        explanation:
          'Backside attack in the SN2 step inverts the stereocenter. At C2 the priorities before reaction are Br > ethyl > methyl > H; after reaction they are CN > ethyl > methyl > H, because the nitrile carbon bears three bonds to nitrogen. The new group takes the old group’s top rank, so geometric inversion changes the descriptor from R to S. Retention would require a front-side or double-inversion pathway, which is not available here. A racemic product would require a carbocation, which the high optical purity of the product rules out. Labeling the inverted product (R) overlooks that the priority order is unchanged, so inversion of geometry must reverse the descriptor.',
        skill: '5D SN2 stereochemistry and R/S (Skill 2)',
      },
      {
        question: 'A sample of a chiral amine drug obtained by resolution has a specific rotation of +24°, and the pure (S) enantiomer has a specific rotation of +40° under the same conditions. The composition of the sample is:',
        options: ['60% (S) and 40% (R)', '80% (S) and 20% (R)', '76% (S) and 24% (R)', '40% (S) and 60% (R)'],
        correctAnswer: 1,
        explanation:
          'The ee is $24/40 = 60\\%$, meaning the (S) enantiomer exceeds the (R) by 60 percentage points. Solving $S - R = 60$ and $S + R = 100$ gives 80% (S) and 20% (R). Reporting 60% (S) mistakes the ee for the percentage of the major enantiomer. Reporting 24% (R) reads the observed rotation directly as a percentage. A sample that is 60% (R) would have a negative rotation, because the (R) enantiomer rotates light to the left by the same amount that (S) rotates it to the right.',
        skill: '5D enantiomeric excess (Skill 2)',
      },
      {
        question: 'Which experiment would best determine whether a carbocation pathway accounts for the lower optical purity of the second chemist’s product?',
        options: [
          'Measure the optical rotation of the starting bromide before any reaction',
          'Repeat the reaction in DMSO and compare the yields of the nitrile product',
          'Replace cyanide with tert-butoxide and measure the amount of butene formed',
          'Double the cyanide concentration and compare initial reaction rates',
        ],
        correctAnswer: 3,
        explanation:
          'The SN2 rate is proportional to the nucleophile concentration, whereas the SN1 rate depends only on the rate of ionization of the substrate. If doubling [CN⁻] less than doubles the initial rate of substitution in aqueous ethanol, part of the reaction is proceeding through the carbocation, which would explain the racemization. Measuring the starting material’s rotation only confirms its optical purity and says nothing about how it reacts. Switching to DMSO changes the very solvent whose effect is in question, and yield alone does not reveal mechanism. Adding a strong, bulky base probes E2 elimination, not the substitution pathway.',
        skill: '5D SN1 vs SN2 experimental design (Skill 3)',
      },
    ],
  },
]

export const FL2_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl2-cp-b-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'In the reaction MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O, which statement is correct?',
    options: [
      'Manganese is reduced from +7 to +2, so permanganate is the oxidizing agent',
      'Manganese is reduced from +7 to +2, so permanganate is the reducing agent',
      'Manganese is reduced from +8 to +2, so permanganate is the oxidizing agent',
      'Iron is reduced from +3 to +2, so the iron(III) ion is the oxidizing agent',
    ],
    correctAnswer: 0,
    explanation:
      'In MnO₄⁻, four oxygens at −2 contribute −8, so manganese must be +7 for the ion to carry a −1 charge; it ends as Mn²⁺, so it gains five electrons and is reduced. The species that is reduced is the oxidizing agent, because it takes electrons from Fe²⁺. Calling permanganate the reducing agent confuses what happens to a species with what it does to its partner. The +8 value ignores the ion’s −1 charge. Iron goes from +2 to +3, so it is oxidized, and Fe²⁺ is the reducing agent.',
    skill: '4C oxidation states and redox agents (Skill 1)',
  },
  {
    id: 'fl2-cp-b-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Which of the following elements has the largest second ionization energy?',
    options: ['Magnesium', 'Aluminum', 'Sodium', 'Silicon'],
    correctAnswer: 2,
    explanation:
      'Removing one electron from sodium leaves Na⁺ with the neon configuration, so the second electron must come from a filled inner shell that is much closer to the nucleus and far less shielded; the second ionization energy of sodium is roughly ten times its first. For magnesium, aluminum, and silicon, the second electron still comes from the valence (n = 3) shell, so their second ionization energies are far smaller, even though effective nuclear charge increases across the period.',
    skill: '4E periodic trends: ionization energy (Skill 1)',
  },
  {
    id: 'fl2-cp-b-d03',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A 6.0-Ω resistor and a 3.0-Ω resistor are connected in parallel across an ideal 12-V battery. What power is dissipated in the 3.0-Ω resistor?',
    options: ['24 W', '48 W', '16 W', '72 W'],
    correctAnswer: 1,
    explanation:
      'Each branch of a parallel circuit has the full 12 V across it, so $P = V^2/R = (12)^2/3.0 = 48$ W; equivalently, the branch current is 4.0 A and $P = I^2R = 16 \\times 3.0 = 48$ W. The 24-W value is the power in the 6.0-Ω resistor. The 72-W value is the total power delivered by the battery to both branches. The 16-W value applies $V^2/R$ with the series resistance of 9.0 Ω, as if the resistors were in series.',
    skill: '4C circuits: Ohm’s law and power (Skill 2)',
  },
  {
    id: 'fl2-cp-b-d04',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Aspartic acid has p$K_a$ values of 2.0 (α-carboxyl group), 3.9 (side-chain carboxyl group), and 9.8 (α-amino group). The isoelectric point of aspartic acid is closest to:',
    options: ['5.9', '6.9', '3.9', '3.0'],
    correctAnswer: 3,
    explanation:
      'At very low pH aspartic acid carries a net charge of +1. Losing the α-carboxyl proton (p$K_a$ 2.0) gives the neutral zwitterion, and losing the side-chain proton (p$K_a$ 3.9) gives a net −1 form, so the neutral species exists between these two steps and the pI is their average: $(2.0 + 3.9)/2 \\approx 3.0$. The value 5.9 averages the α-carboxyl and α-amino p$K_a$ values, which would be correct only for an amino acid without an ionizable side chain. The value 6.9 averages the two p$K_a$ values that flank the −1 to −2 transition. The value 3.9 is only the side-chain p$K_a$, at which the molecule carries about −0.5 net charge.',
    skill: '5D amino acid titration and pI (Skill 2)',
  },
  {
    id: 'fl2-cp-b-d05',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A drug’s carboxylate group forms a salt bridge with a lysine side chain in the drug’s binding pocket on an enzyme. When the pH is lowered from 7.4 to 3.0, binding weakens markedly. The most likely reason is that at pH 3.0 the:',
    options: [
      'carboxyl group of the drug is mostly protonated and is no longer negatively charged',
      'lysine side chain is mostly deprotonated and is no longer positively charged',
      'excess protons break the hydrogen bonds that hold the drug in the pocket',
      'hydrophobic contacts between the drug and the pocket become much stronger',
    ],
    correctAnswer: 0,
    explanation:
      'A carboxylic acid has a p$K_a$ near 4, so at pH 3.0 most drug molecules carry a neutral –COOH rather than a –COO⁻ group, and the ionic attraction to the positively charged lysine is lost. The lysine side chain (p$K_a$ near 10.5) becomes, if anything, even more fully protonated as the pH falls, so it remains positively charged. Protons do not generally break hydrogen bonds; protonation matters here because it removes a charge. Stronger hydrophobic contacts would tighten binding, not weaken it.',
    skill: '5B protein–ligand binding forces (Skill 1)',
  },
  {
    id: 'fl2-cp-b-d06',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'A student purifies a crude solid by recrystallization. Which property makes a solvent most suitable for this purpose?',
    options: [
      'It dissolves the compound readily at both high and low temperatures',
      'It boils at a temperature well above the melting point of the compound',
      'It dissolves the compound well when hot but poorly when cold',
      'It reacts with the impurities to turn them into the desired compound',
    ],
    correctAnswer: 2,
    explanation:
      'Recrystallization relies on dissolving the crude solid in a minimum of hot solvent and letting the compound crystallize as the solution cools, while soluble impurities stay in the cold mother liquor; that requires high solubility when hot and low solubility when cold. A solvent that dissolves the compound well even when cold leaves much of it in solution, so recovery is poor. A solvent that boils above the compound’s melting point tends to make the compound separate as an oil rather than as crystals. A purification solvent should be inert; chemical conversion of impurities is not how recrystallization works.',
    skill: '5C recrystallization (Skill 1)',
  },
  {
    id: 'fl2-cp-b-d07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'As a glass of cold tap water warms to room temperature, small bubbles collect on the inside of the glass even though the water is far below its boiling point. The best explanation is that:',
    options: [
      'the vapor pressure of the water has reached atmospheric pressure at the glass',
      'dissolving a gas in water is exothermic, so less gas stays dissolved as it warms',
      'water molecules decompose into hydrogen and oxygen gas as the temperature rises',
      'warming strengthens the attraction between dissolved gas molecules and water',
    ],
    correctAnswer: 1,
    explanation:
      'The dissolution of gases such as N₂ and O₂ in water releases heat, so by Le Chatelier’s principle raising the temperature shifts the equilibrium toward the gas phase; the water becomes supersaturated in air, and the excess gas comes out as bubbles. Vapor pressure equal to atmospheric pressure is the condition for boiling, which is far from being met at room temperature. Water does not decompose into H₂ and O₂ at ordinary temperatures. Stronger gas–water attraction would increase solubility, the opposite of what is observed.',
    skill: '5A gas solubility and temperature (Skill 1)',
  },
]
