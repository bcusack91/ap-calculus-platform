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
        optionExplanations: [
          'This is just the ratio of the two partial pressures (0.20/100). It ignores the equilibrium constant of 250, which makes heme bind CO far more strongly than O₂ at equal partial pressures.',
          'Correct. From Reaction 3, $[\\text{HbCO}]/[\\text{HbO}_2] = K \\cdot P_{\\text{CO}}/P_{\\text{O}_2} = 250 \\times 0.20/100 = 0.50$. One CO site per two O₂ sites means CO occupies 1 of every 3 sites, about 33%.',
          'Fifty percent treats the 0.50 ratio of HbCO to HbO₂ as if it were the fraction of all sites. A ratio of 1:2 corresponds to a fraction of 1/3, not 1/2.',
          'Sixty-seven percent is the fraction of sites still carrying O₂ (2 of every 3). The question asks for the CO-occupied share, which is the remaining one-third.',
        ],
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
        optionExplanations: [
          'The p$K_a$ of carbonic acid is a fixed property of that acid at a given temperature. Hemoglobin cannot alter it; what oxygenation changes is the proton concentration, not the acid’s dissociation constant.',
          'CO₂ carried on hemoglobin is bound to amino groups as carbamino compounds, not to the heme iron, and it does not compete with O₂ for heme. Displacement from iron is not the mechanism.',
          'An enzyme speeds the approach to equilibrium but cannot shift its position. Even if oxygenation affected carbonic anhydrase, that would not change where Reaction 2 settles.',
          'Correct. Reaction 1 shows O₂ binding converts HbH⁺ to HbO₂ and releases H⁺. Those protons combine with HCO₃⁻ and push Reaction 2 back toward CO₂ and water, which is exhaled; this is the Haldane effect.',
        ],
        skill: '5E coupled equilibria and Le Chatelier (Skill 2)',
      },
      {
        question: 'Metabolism adds 12 mmol of a strong acid per liter of arterial plasma that initially has the normal values given in the passage. If ventilation rises just enough to keep $P_{\\text{CO}_2}$ at 40 mmHg, the plasma pH after the acid has reacted with bicarbonate is closest to:',
        options: ['7.1', '6.1', '6.8', '7.4'],
        correctAnswer: 0,
        explanation:
          'The added H⁺ converts 12 mM $\\text{HCO}_3^-$ into CO₂, leaving 12 mM bicarbonate. Because the extra CO₂ is exhaled, dissolved CO₂ stays at $0.03 \\times 40 = 1.2$ mM, so pH $= 6.1 + \\log(12/1.2) = 6.1 + 1 = 7.1$. A pH near 6.1 is what a sealed system would give: the CO₂ would accumulate to 13.2 mM and the ratio would fall below 1. A pH of 6.8 corresponds to a ratio of 5, which would require dissolved CO₂ to double as bicarbonate halved. A pH of 7.4 assumes the buffer absorbs the acid with no change at all, but halving the bicarbonate at constant CO₂ must lower the pH by log 2, about 0.3 unit.',
        optionExplanations: [
          'Correct. The acid converts 12 mM HCO₃⁻ to CO₂, leaving 12 mM. Because ventilation holds $P_{\\text{CO}_2}$ at 40 mmHg, dissolved CO₂ stays at 1.2 mM, so pH $= 6.1 + \\log(12/1.2) = 7.1$.',
          'A pH equal to the p$K_a$ would require equal bicarbonate and dissolved CO₂. That is roughly what a sealed flask would give, where the 12 mM of CO₂ produced accumulates, but here the extra CO₂ is exhaled.',
          'A pH of 6.8 corresponds to a bicarbonate-to-CO₂ ratio of 5, which would require dissolved CO₂ to roughly double while bicarbonate halved. With $P_{\\text{CO}_2}$ held constant, CO₂ stays at 1.2 mM.',
          'An unchanged pH assumes the buffer absorbs the acid with no effect, but bicarbonate falls from 24 to 12 mM while CO₂ is constant. Halving the ratio must lower pH by log 2, about 0.3 unit.',
        ],
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
        optionExplanations: [
          'Raising $P_{\\text{O}_2}$ changes the reaction quotient, and the system shifts toward HbO₂ to restore equilibrium. The constant $K$ itself does not change; only the position of the equilibrium does.',
          'Lowering pH adds H⁺, a product in Reaction 1, so the equilibrium shifts toward HbH⁺ (the Bohr effect). This shift occurs at a fixed $K$; concentrations of participants never alter the constant.',
          'Correct. An equilibrium constant depends only on temperature. Because O₂ binding is exothermic (ΔH ≈ −40 kJ/mol), raising the temperature lowers $K$ for Reaction 1 and reduces hemoglobin’s O₂ affinity.',
          'More hemoglobin means more total O₂ bound, but the ratio of products to reactants that defines $K$ is unchanged. Changing the amount of a participant shifts quantities, not the equilibrium constant.',
        ],
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
        optionExplanations: [
          'The decrements are not constant: depth falls 15 cm between 2 and 4 MHz but only 1.5 cm between 8 and 10 MHz. The relationship is inverse, not linear.',
          'Wavelength is inversely proportional to frequency, and depth is also inversely proportional to frequency, so depth is proportional to the first power of wavelength, not its square.',
          'Correct. Depth × frequency is 60 cm·MHz for every transducer (2 × 30, 4 × 15, 6 × 10, 8 × 7.5, 10 × 6.0). Depth is inversely proportional to frequency, as expected when the round-trip loss $2\\alpha f d$ is capped at 60 dB.',
          'Depth halves only from 2 to 4 MHz (30 to 15 cm). From 4 to 6 MHz it drops by one-third (15 to 10 cm), so halving per 2-MHz step is not the pattern.',
        ],
        skill: '4D attenuation and frequency (Skill 4)',
      },
      {
        question: 'Based on Figure 1, the attenuation coefficient of Phantom B is closest to:',
        options: ['0.75 dB/(cm·MHz)', '0.33 dB/(cm·MHz)', '1.5 dB/(cm·MHz)', '0.50 dB/(cm·MHz)'],
        correctAnswer: 0,
        explanation:
          'For Phantom B, depth × frequency is about 40 cm·MHz (for example, 2 MHz × 20 cm). Setting the round-trip loss equal to the 60-dB limit gives $2\\alpha f d = 60$, so $\\alpha = 60/(2 \\times 40) = 0.75$ dB/(cm·MHz); equivalently, Phantom B’s depths are two-thirds of Phantom A’s, so its coefficient is 1.5 times 0.50. The value 1.5 dB/(cm·MHz) counts only the one-way path to the wire. The value 0.33 dB/(cm·MHz) scales Phantom A’s coefficient by the depth ratio instead of its inverse, although a shallower limit means more attenuation. The value 0.50 dB/(cm·MHz) assumes the phantoms attenuate equally, which the different depths rule out.',
        optionExplanations: [
          'Correct. For Phantom B, depth × frequency ≈ 40 cm·MHz (e.g., 2 MHz × 20 cm). Setting the round-trip loss $2\\alpha f d = 60$ dB gives $\\alpha = 60/80 = 0.75$ dB/(cm·MHz), 1.5 times Phantom A’s value since its depths are two-thirds as great.',
          'This scales Phantom A’s 0.50 by the depth ratio 2/3 instead of its inverse. A shallower detection limit means more attenuation per centimeter, so the coefficient must be larger than 0.50, not smaller.',
          'This counts only the one-way path to the wire ($\\alpha f d = 60$). The echo must travel to the wire and back, so the attenuation path is $2d$, which halves the coefficient to 0.75.',
          'Equal coefficients would give equal detection depths, but Phantom B’s depths are consistently two-thirds of Phantom A’s. The phantoms clearly attenuate differently.',
        ],
        skill: '4D attenuation from data (Skill 4)',
      },
      {
        question: 'A structure lies 8 cm deep in tissue whose attenuation matches that of Phantom B. Using the best of the five transducers tested that can still detect echoes from that depth, the finest axial resolution attainable is closest to:',
        options: ['0.26 mm', '0.77 mm', '0.19 mm', '0.39 mm'],
        correctAnswer: 3,
        explanation:
          'Figure 1 shows that in Phantom B the 4-MHz transducer reaches 10 cm but the 6-MHz transducer reaches only 6.5 cm, so 4 MHz is the highest usable frequency. Its wavelength is $\\lambda = v/f = (1540\\ \\text{m/s})/(4 \\times 10^{6}\\ \\text{Hz}) \\approx 0.39$ mm. A two-cycle pulse is $2\\lambda$ long, and the resolution limit is half of that, or one wavelength, 0.39 mm. The 0.26-mm value is the resolution of the 6-MHz transducer, which cannot reach 8 cm in this tissue. The 0.77-mm value belongs to the 2-MHz transducer, which reaches the depth but resolves less finely than necessary. The 0.19-mm value takes half of a single wavelength rather than half of the two-cycle pulse.',
        optionExplanations: [
          'About 0.26 mm is the resolution of the 6-MHz transducer, but in Phantom B tissue that transducer reaches only 6.5 cm and cannot image a structure at 8 cm.',
          'About 0.77 mm is the resolution of the 2-MHz transducer. It reaches the depth, but 4 MHz also does and resolves twice as finely, so this is not the finest attainable.',
          'This halves a single wavelength rather than half of the two-cycle pulse. The pulse is $2\\lambda$ long, and half of that is one wavelength, 0.39 mm, not 0.19 mm.',
          'Correct. In Phantom B the 4-MHz transducer reaches 10 cm while 6 MHz reaches only 6.5 cm, so 4 MHz is the highest usable frequency. $\\lambda = 1540/(4 \\times 10^6) \\approx 0.39$ mm; a two-cycle pulse resolves half its length, one wavelength.',
        ],
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
        optionExplanations: [
          'Frequency is fixed by the source and does not change at a boundary; each crest arriving launches one crest into bone. A higher speed with fixed wavelength would require a frequency change that does not occur.',
          'Correct. Frequency is set by the source and is unchanged on crossing. Since $v = f\\lambda$, the greater speed in bone at the same frequency requires a longer wavelength.',
          'A shorter wavelength at the same frequency would mean a lower speed ($v = f\\lambda$). Sound travels faster in bone, so the wavelength must lengthen, not shorten.',
          'The wavelength does increase, but frequency does not fall. All of the speed change appears in the wavelength because the frequency is dictated by the transducer, not by the medium.',
        ],
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
        optionExplanations: [
          'Correct. Maximum depth is where the echo just reaches the detection threshold. A weaker pulse or less receiver sensitivity in one run would make echoes vanish shallower for reasons unrelated to attenuation, confounding the frequency effect.',
          'The speed of sound depends on the medium’s density and compressibility, not on how strongly the pulse is emitted or how the receiver is set. These settings have no bearing on sound speed.',
          'Wavelengths were meant to differ: frequency is the independent variable, and $\\lambda = v/f$ changes with each transducer. Equal intensity does not and should not equalize wavelength.',
          'The fraction reflected depends on the impedance mismatch at the wire, not on emission intensity or gain. The passage states this fraction was taken as constant; it is an assumption, not something the controls enforce.',
        ],
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
        optionExplanations: [
          'This divides the 10 °C step between duplexes by all 20 base pairs. Only 5 pairs change between consecutive duplexes, so the step should be divided by 5.',
          'This divides the 20 °C span between Duplex 1 and Duplex 3 by the 20 base pairs in the duplex rather than by the 10 substitutions that separate them.',
          'Ten degrees is the $T_m$ increase between consecutive duplexes, which differ by five G–C pairs, not one. The per-pair change is one-fifth of this.',
          'Correct. The curves cross 50% at 55, 65 and 75 °C for Duplexes 1, 2 and 3. Each additional 5 G–C pairs adds 10 °C, so each substitution raises $T_m$ by about 2 °C.',
        ],
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
        optionExplanations: [
          'Every Watson–Crick pair, A–T or G–C, consists of one purine and one pyrimidine. A G–C pair does not contain two purines, so this cannot explain the trend.',
          'Correct. A G–C pair has three hydrogen bonds rather than two, and G–C-containing steps have more favorable stacking energies, so G–C-rich duplexes need more thermal energy to separate.',
          'The negative charge is on the phosphate backbone, one per nucleotide, and is identical for all three 20-bp duplexes regardless of base composition. Charge differences cannot explain the trend.',
          'Base pairs are held by hydrogen bonds and stacking, both noncovalent. No covalent bond breaks during melting, which is why the process reverses completely on cooling.',
        ],
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
        optionExplanations: [
          'Na⁺ associates with the negatively charged phosphates, not with the bases, and does not break base-pair hydrogen bonds. Higher salt stabilizes, rather than destabilizes, the duplex.',
          'Although NaCl does not appear in the base-pairing equation, ionic strength changes the electrostatic free energy of two closely spaced polyanionic backbones, and so shifts the duplex–strand equilibrium.',
          'Correct. The two backbones lie within about 2 nm of each other and repel electrostatically. More Na⁺ counterions screen that repulsion, stabilizing the duplex relative to the separated strands and raising $T_m$.',
          'Chloride is repelled by the negatively charged DNA and does not interact with the stacked bases. The stabilizing species is the cation, acting on the phosphates.',
        ],
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
        optionExplanations: [
          'Correct. The duplex forms at low $T$ (ΔG° < 0) and dissociates at high $T$ (ΔG° > 0). With ΔG° = ΔH° − TΔS°, that requires ΔH° < 0 and ΔS° < 0, consistent with two strands becoming one ordered helix.',
          'If both were positive, ΔG° would be negative only at high temperature, so the duplex would form on heating and melt on cooling, the reverse of what Figure 1 shows.',
          'A negative ΔH° with a positive ΔS° makes ΔG° negative at every temperature, so the duplex would never melt. The sharp melting transition rules this out.',
          'A positive ΔH° with a negative ΔS° makes ΔG° positive at every temperature, so the duplex would never form. The samples are fully paired at 45 °C, so this is impossible.',
        ],
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
        optionExplanations: [
          'The reference absorbance for fully separated strands is taken from the high-temperature end of the heating run, where all curves reach 100%. Cooling the sample back to 45 °C gives the duplex value, not the separated-strand value.',
          'Cooling was done at the same 0.5 °C per minute as heating, so no slower rate was used. The step compared the end absorbance to the start value, not a second $T_m$.',
          'Hairpin formation was excluded by the sequence design, and a cooled sample dominated by re-formed duplex could not reveal hairpins in any case. Recovery of the starting absorbance argues against any alternative structure.',
          'Correct. If heating had degraded the DNA or evaporation had concentrated the sample, absorbance would not return to its starting value. Recovery within 1% shows the curves record a reversible duplex–strand equilibrium, which the $T_m$ and ΔG° analysis requires.',
        ],
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
        optionExplanations: [
          'Interference describes how overlapping waves combine in amplitude; it does not determine the directions in which photons are emitted. The 180° geometry comes from momentum conservation.',
          'Correct. The positron has slowed almost to rest before annihilating, so the pair has nearly zero total momentum. The two photons, each carrying momentum $E/c$, must therefore have equal and opposite momenta: equal energies, opposite directions.',
          'Photons carry no charge and are not deflected by magnetic fields. PET detector rings do not steer the photons; they simply register where the photons arrive.',
          'Charge is conserved (+1 and −1 sum to zero, and photons are neutral), but charge conservation says nothing about direction of travel. Momentum conservation is the relevant principle.',
        ],
        skill: '4E annihilation and momentum conservation (Skill 1)',
      },
      {
        question: 'A technetium-99m-labeled agent is cleared from the body with a biological half-life of 12 hours. About how long after injection has the activity remaining in the patient fallen to one-quarter of its initial value?',
        options: ['4.0 h', '12 h', '8.0 h', '18 h'],
        correctAnswer: 2,
        explanation:
          '$1/T_{\\text{eff}} = 1/6.0 + 1/12 = 3/12$, so $T_{\\text{eff}} = 4.0$ h. Falling to one-quarter takes two effective half-lives, 8.0 h. The 4.0-h value is one effective half-life, which leaves half the activity. The 12-h value is two physical half-lives and ignores biological clearance. The 18-h value is two half-lives computed from the average of 6 h and 12 h, but rates of removal add; half-lives do not average.',
        optionExplanations: [
          'Four hours is one effective half-life ($1/T_{\\text{eff}} = 1/6 + 1/12 = 1/4$), after which half the activity remains. Falling to one-quarter requires two such half-lives.',
          'Twelve hours is two physical half-lives of Tc-99m (6.0 h each) and ignores biological clearance. Both processes remove activity, so the actual time is shorter.',
          'Correct. Rates add: $1/T_{\\text{eff}} = 1/6.0 + 1/12 = 3/12$, so $T_{\\text{eff}} = 4.0$ h. One-quarter of the initial activity remains after two effective half-lives, 8.0 h.',
          'This takes two half-lives of 9 h, the average of 6 h and 12 h. But removal rates add, so the effective half-life (4.0 h) is shorter than either; half-lives do not average.',
        ],
        skill: '4E effective half-life (Skill 2)',
      },
      {
        question: 'The decay chain from radium-223 (atomic number 88) to lead-207 (atomic number 82) must include how many alpha decays and how many beta-minus decays?',
        options: ['4 alpha and 2 beta-minus', '4 alpha and 0 beta-minus', '3 alpha and 0 beta-minus', '4 alpha and 6 beta-minus'],
        correctAnswer: 0,
        explanation:
          'Only alpha decay changes the mass number, by 4 each time, so the drop from 223 to 207 requires $16/4 = 4$ alpha decays. Four alpha decays lower the atomic number by 8, from 88 to 80, and each beta-minus decay raises it by 1, so 2 beta-minus decays bring it to 82. Four alpha decays with no beta decay would end at element 80, mercury. Three alpha decays would lower the atomic number by exactly 6 but leave a mass number of 211. Four alpha and six beta-minus decays would give atomic number 86.',
        optionExplanations: [
          'Correct. Only alpha decay changes the mass number, by 4 each, so $(223 - 207)/4 = 4$ alphas. Those lower Z by 8 (88 → 80); each beta-minus raises Z by 1, so 2 beta decays reach Z = 82.',
          'Four alpha decays alone would lower the atomic number from 88 to 80, ending at mercury-207, not lead-207. Two beta-minus decays are needed to raise Z back to 82.',
          'Three alpha decays would lower Z by exactly 6 (88 → 82) but would reduce the mass number only to 211, not 207. The mass-number change requires four alphas.',
          'Four alphas plus six beta-minus decays would give Z = 88 − 8 + 6 = 86, radon, not lead (Z = 82). Only two beta decays balance the atomic number.',
        ],
        skill: '4E nuclear decay equations (Skill 2)',
      },
      {
        question: 'Over the course of treatment, alpha particles from the radium-223 decay chain deposit all of their energy in a 50-g region of bone tissue. If $2.5 \\times 10^{11}$ alpha particles, each with a kinetic energy of 5.0 MeV, are absorbed, the absorbed dose is closest to: (1 MeV = $1.6 \\times 10^{-13}$ J)',
        options: ['0.004 Gy', '40 Gy', '0.40 Gy', '4.0 Gy'],
        correctAnswer: 3,
        explanation:
          'Each alpha particle deposits $5.0 \\times 1.6 \\times 10^{-13} = 8.0 \\times 10^{-13}$ J, so the total energy is $(2.5 \\times 10^{11})(8.0 \\times 10^{-13}) = 0.20$ J. Dividing by the mass in kilograms, $0.20\\ \\text{J}/0.050\\ \\text{kg} = 4.0$ Gy. The 0.004-Gy value divides by the mass in grams rather than kilograms. The 0.40-Gy and 40-Gy values are power-of-ten slips, for example from using 0.50 kg or 5.0 g as the mass.',
        optionExplanations: [
          'This divides the 0.20 J deposited by 50 g rather than by 0.050 kg. The gray is defined per kilogram, so the result is a thousand times too small.',
          'This is ten times too large, as would result from using 5.0 g (0.0050 kg) as the mass or from a power-of-ten slip in the energy per particle.',
          'This is ten times too small, as would result from using 0.50 kg instead of 0.050 kg. The correct mass in kilograms is 0.050.',
          'Correct. Each alpha deposits $5.0 \\times 1.6 \\times 10^{-13} = 8.0 \\times 10^{-13}$ J, so the total is $(2.5 \\times 10^{11})(8.0 \\times 10^{-13}) = 0.20$ J. Dividing by 0.050 kg gives 4.0 Gy.',
        ],
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
        optionExplanations: [
          'Carbocation stabilization is the role of polar protic solvents and favors SN1, the opposite of what the first chemist achieved. The high optical purity shows no carbocation formed.',
          'Hydrogen bonding to an anion lowers its energy and makes it a weaker nucleophile, and DMSO has no O–H or N–H bonds to donate anyway. This reverses the actual effect of protic solvents.',
          'Correct. DMSO solvates Na⁺ through its partially negative oxygen but cannot hydrogen-bond to anions, leaving cyanide relatively unsolvated and highly nucleophilic, which accelerates the bimolecular SN2 step.',
          'DMSO is not an acid and does not protonate the leaving group. Bromide is already a good leaving group, and the solvent’s role concerns the nucleophile, not the substrate.',
        ],
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
        optionExplanations: [
          'Correct. SN2 backside attack inverts the geometry at C2. Priorities before (Br > ethyl > methyl > H) and after (CN > ethyl > methyl > H) keep the same order, so geometric inversion flips the descriptor from R to S.',
          'Retention would require front-side attack or a double inversion, neither of which is available in a concerted SN2 reaction. The stereocenter is inverted.',
          'A racemic product would require a planar carbocation intermediate attacked from both faces. The high optical purity isolated by the first chemist rules this out; SN2 in DMSO is stereospecific.',
          'Inversion did occur, but because the incoming CN takes the same top priority rank that Br held, flipping the geometry must also flip the descriptor. The inverted product is (S), not (R).',
        ],
        skill: '5D SN2 stereochemistry and R/S (Skill 2)',
      },
      {
        question: 'A sample of a chiral amine drug obtained by resolution has a specific rotation of +24°, and the pure (S) enantiomer has a specific rotation of +40° under the same conditions. The composition of the sample is:',
        options: ['60% (S) and 40% (R)', '80% (S) and 20% (R)', '76% (S) and 24% (R)', '40% (S) and 60% (R)'],
        correctAnswer: 1,
        explanation:
          'The ee is $24/40 = 60\\%$, meaning the (S) enantiomer exceeds the (R) by 60 percentage points. Solving $S - R = 60$ and $S + R = 100$ gives 80% (S) and 20% (R). Reporting 60% (S) mistakes the ee for the percentage of the major enantiomer. Reporting 24% (R) reads the observed rotation directly as a percentage. A sample that is 60% (R) would have a negative rotation, because the (R) enantiomer rotates light to the left by the same amount that (S) rotates it to the right.',
        optionExplanations: [
          'Sixty percent is the enantiomeric excess (24/40), not the percentage of the major enantiomer. A 60:40 mixture would have an ee of only 20% and a rotation of +8°.',
          'Correct. ee = 24/40 = 60%, meaning (S) exceeds (R) by 60 percentage points. Solving S − R = 60 and S + R = 100 gives 80% (S) and 20% (R).',
          'Reading the observed +24° rotation directly as a percentage of the minor enantiomer has no basis. The rotation gives the ee (60%), which then determines the composition.',
          'A sample that is 60% (R) would have a net negative rotation, since (R) rotates light by −40° per unit. The observed rotation is positive, so (S) must be the major enantiomer.',
        ],
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
        optionExplanations: [
          'Measuring the starting bromide’s rotation confirms only that the starting material was optically pure. It says nothing about which mechanism operates during the reaction.',
          'Switching to DMSO changes the very solvent whose effect is in question, and yield alone does not reveal mechanism. The question is what happens in aqueous ethanol.',
          'Replacing cyanide with a strong, bulky base probes E2 elimination, not substitution. It would not reveal whether substitution in aqueous ethanol proceeds through a carbocation.',
          'Correct. SN2 rate is proportional to nucleophile concentration while SN1 rate depends only on substrate ionization. If doubling [CN⁻] less than doubles the substitution rate, part of the reaction goes through a carbocation, explaining the racemization.',
        ],
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
    optionExplanations: [
      'Correct. In MnO₄⁻ four oxygens contribute −8, so Mn is +7 for a −1 ion; it ends as Mn²⁺, gaining five electrons. The species reduced is the oxidizing agent, since it takes electrons from Fe²⁺.',
      'The oxidation states are right, but the label is reversed. A species that is itself reduced removes electrons from its partner and is therefore the oxidizing agent, not the reducing agent.',
      'Manganese is +7, not +8. Four oxygens at −2 give −8, and the ion carries a −1 charge, so Mn must be +7 to make the total −1.',
      'Iron goes from +2 to +3, losing an electron, so it is oxidized, not reduced. Fe²⁺ is the reducing agent; Fe³⁺ is the product, not a reactant.',
    ],
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
    optionExplanations: [
      'Magnesium’s second electron comes from the 3s valence shell, like the first. Its second ionization energy is higher than its first but far below sodium’s, because no inner shell is breached.',
      'Aluminum’s second electron is removed from the 3s subshell, still in the valence shell. Its second ionization energy is moderate, not the largest.',
      'Correct. Removing one electron from sodium leaves Na⁺ with a neon core. The second electron must come from the filled n = 2 shell, much closer to the nucleus and poorly shielded, so sodium’s second ionization energy is roughly ten times its first.',
      'Silicon’s second electron comes from the 3p subshell, within the valence shell. Despite its higher effective nuclear charge, its second ionization energy is much smaller than sodium’s core-electron removal.',
    ],
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
    optionExplanations: [
      'Twenty-four watts is the power in the 6.0-Ω resistor ($12^2/6.0$). The question asks about the 3.0-Ω branch, which carries twice the current and dissipates twice the power.',
      'Correct. Each parallel branch has the full 12 V across it, so $P = V^2/R = 144/3.0 = 48$ W; equivalently the branch current is 4.0 A and $I^2R = 16 \\times 3.0 = 48$ W.',
      'Sixteen watts applies $V^2/R$ with 9.0 Ω, the series combination, as if the resistors were in series. In parallel each resistor sees the full battery voltage.',
      'Seventy-two watts is the total power delivered by the battery to both branches (24 W + 48 W). The question asks only about the 3.0-Ω resistor.',
    ],
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
    optionExplanations: [
      'Averaging the α-carboxyl (2.0) and α-amino (9.8) p$K_a$ values would be correct for an amino acid with no ionizable side chain. Aspartate’s side-chain carboxyl changes which two p$K_a$ values bracket the neutral form.',
      'Averaging 3.9 and 9.8 gives the midpoint of the −1 to −2 transition, not the pH where the net charge is zero. The neutral zwitterion exists between the two carboxyl p$K_a$ values.',
      'At pH 3.9 the side-chain carboxyl is half-deprotonated and the α-carboxyl is nearly fully deprotonated, giving a net charge of about −0.5, not zero. This is a single p$K_a$, not the pI.',
      'Correct. The neutral zwitterion forms after the α-carboxyl loses its proton (p$K_a$ 2.0) and becomes −1 after the side chain loses its proton (p$K_a$ 3.9). The pI is their average, $(2.0 + 3.9)/2 \\approx 3.0$.',
    ],
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
    optionExplanations: [
      'Correct. A carboxylic acid has p$K_a$ near 4, so at pH 3.0 most of the drug carries a neutral –COOH. Without the negative charge, the ionic attraction to the protonated lysine is lost and binding weakens.',
      'Lysine’s side chain has a p$K_a$ near 10.5, so lowering the pH makes it even more completely protonated and positively charged. The lysine partner of the salt bridge is intact at pH 3.0.',
      'Excess protons do not generically break hydrogen bonds. Protonation matters here specifically because it neutralizes the carboxylate charge that formed the salt bridge.',
      'Stronger hydrophobic contacts would tighten binding, not weaken it, and a pH change does not substantially alter hydrophobic interactions. This is the wrong direction for the observed effect.',
    ],
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
    optionExplanations: [
      'If the compound dissolves well even when cold, most of it stays in the mother liquor on cooling and recovery is poor. Low solubility when cold is essential for crystals to form.',
      'A solvent boiling above the compound’s melting point tends to make the compound separate as an oil rather than crystallize. Boiling point should be below the melting point.',
      'Correct. Recrystallization dissolves the crude solid in a minimum of hot solvent and lets the compound crystallize on cooling while soluble impurities remain in the cold mother liquor; that demands high hot and low cold solubility.',
      'A recrystallization solvent must be chemically inert toward the compound and impurities. Converting impurities into product is a chemical reaction, not a purification by crystallization.',
    ],
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
    optionExplanations: [
      'Vapor pressure equal to atmospheric pressure is the condition for boiling, which occurs at 100 °C. At room temperature water’s vapor pressure is far below 1 atm.',
      'Correct. Dissolution of N₂ and O₂ in water is exothermic, so by Le Chatelier’s principle warming shifts the equilibrium toward the gas phase. The water becomes supersaturated with air, and the excess comes out as bubbles.',
      'Water does not decompose into hydrogen and oxygen at ordinary temperatures; that requires electrolysis or temperatures of thousands of kelvin. The bubbles are dissolved air.',
      'Stronger gas–water attraction would increase gas solubility and keep gas dissolved. The opposite is observed: solubility falls on warming because the attractions are outweighed by thermal motion.',
    ],
    skill: '5A gas solubility and temperature (Skill 1)',
  },
]
