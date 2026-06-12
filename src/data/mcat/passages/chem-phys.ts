/**
 * MCAT Chemical & Physical Foundations of Biological Systems — passage bank.
 *
 * Seven experimental/expository passages (one per core discipline) plus six
 * discrete items. Numbers are kept clean for the calculator-free exam, and
 * every answer key has been worked by hand. Items whose key is even slightly
 * contestable carry `needsReview: true`.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */

import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const CHEM_PHYS_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY — Enzyme kinetics (Vmax/Km, inhibition)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-biochem-01',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Inhibition of Alkaline Phosphatase',
    passageText:
      'Alkaline phosphatase (ALP) hydrolyzes phosphate monoesters. To characterize the enzyme, researchers incubated a fixed amount of ALP with the chromogenic substrate p-nitrophenyl phosphate (pNPP) at a range of substrate concentrations and measured the initial reaction velocity ($v_0$) spectrophotometrically by following the appearance of yellow p-nitrophenolate at 405 nm.\n\nThe team first established baseline Michaelis–Menten kinetics (Condition A). They then repeated the assay in the presence of inorganic phosphate, a known product of the reaction (Condition B), and separately in the presence of a small molecule, levamisole (Condition C). For each condition they fit the data to the Michaelis–Menten equation, $v_0 = \\frac{V_{max}[S]}{K_m + [S]}$, and extracted the apparent kinetic parameters shown in Figure 1.\n\nThroughout, the enzyme concentration, temperature (37 °C), and buffer pH (9.8) were held constant. The investigators noted that levamisole bears no structural resemblance to pNPP and that increasing the substrate concentration to very high levels did not overcome its effect. In contrast, the inhibitory effect of inorganic phosphate could be progressively reduced by adding more substrate. All velocities are reported in micromoles of product formed per minute ($\\mu\\text{mol/min}$).',
    figure:
      '**Figure 1. Apparent kinetic parameters of ALP under three conditions**\n\n| Condition | Additive | Apparent $K_m$ (mM) | $V_{max}$ ($\\mu\\text{mol/min}$) |\n|-----------|----------|---------------------|----------------------------------|\n| A | None | 0.5 | 100 |\n| B | Inorganic phosphate | 2.0 | 100 |\n| C | Levamisole | 0.5 | 40 |',
    questions: [
      {
        question:
          'Under Condition A, what is the initial velocity when the substrate concentration equals 0.5 mM?',
        options: ['25 µmol/min', '50 µmol/min', '67 µmol/min', '100 µmol/min'],
        correctAnswer: 1,
        explanation:
          'At [S] = Km, the Michaelis–Menten equation gives v0 = Vmax·Km/(Km + Km) = Vmax/2. With Vmax = 100, v0 = 50 µmol/min. The 100 trap is Vmax itself (reached only as [S] → ∞); 67 mistakenly uses [S] = 2·Km.',
        skill: 'Enzyme kinetics',
      },
      {
        question:
          'Based on Figure 1, the inhibition produced by inorganic phosphate (Condition B) is best classified as:',
        options: ['Competitive', 'Uncompetitive', 'Noncompetitive', 'Irreversible'],
        correctAnswer: 0,
        explanation:
          'Inorganic phosphate raises the apparent Km (0.5 → 2.0 mM) while leaving Vmax unchanged, and the passage states excess substrate overcomes it — the signature of competitive inhibition. Uncompetitive and noncompetitive inhibition both lower Vmax. Irreversible inhibition could not be relieved by adding substrate.',
        skill: 'Enzyme inhibition',
      },
      {
        question: 'Levamisole (Condition C) most likely acts by:',
        options: [
          'Binding the active site in place of pNPP',
          'Binding a site distinct from the active site and lowering the catalytic rate',
          'Covalently and permanently modifying the catalytic residue',
          'Increasing the affinity of the enzyme for substrate',
        ],
        correctAnswer: 1,
        explanation:
          'Levamisole lowers Vmax (100 → 40) without changing Km, and the passage notes it is structurally unlike the substrate and is not overcome by excess substrate — classic noncompetitive (allosteric) inhibition. A pure competitive inhibitor (option A) would raise Km, not lower Vmax. "Permanently/covalently" overstates the data, which were fit to reversible Michaelis–Menten kinetics. Lowering Vmax is the opposite of increasing affinity.',
        skill: 'Enzyme inhibition',
      },
      {
        question:
          'Under Condition C, at a substrate concentration of 1.5 mM, the initial velocity is closest to:',
        options: ['10 µmol/min', '30 µmol/min', '40 µmol/min', '60 µmol/min'],
        correctAnswer: 1,
        explanation:
          'Use the Condition C parameters (Vmax = 40, Km = 0.5). v0 = 40·(1.5)/(0.5 + 1.5) = 60/2.0 = 30 µmol/min. The 40 trap is Vmax (not yet reached); 60 mistakenly applies Condition A’s Vmax.',
        skill: 'Enzyme kinetics',
      },
      {
        question:
          'Which additional control would best confirm that the Condition B effect is due to product inhibition rather than a change in assay pH?',
        options: [
          'Repeating Condition A at a higher enzyme concentration',
          'Measuring the buffer pH before and after adding inorganic phosphate',
          'Using a substrate that produces a differently colored product',
          'Running the assay at 25 °C instead of 37 °C',
        ],
        correctAnswer: 1,
        explanation:
          'Inorganic phosphate is a weak base that could shift the buffer pH and alter activity for reasons unrelated to competitive product inhibition. Confirming the pH is unchanged isolates the inhibition mechanism. Changing enzyme amount, product color, or temperature does not address whether the additive perturbed pH.',
        skill: 'Experimental design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY — Acid–base equilibrium, buffers, titration
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-genchem-acidbase-01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Buffering Capacity of an Acetate System',
    passageText:
      'Acetic acid ($\\text{CH}_3\\text{COOH}$, $K_a = 1.8 \\times 10^{-5}$) is a weak monoprotic acid widely used to model physiological buffering. A student prepared a series of acetate buffers and probed their behavior by titration with strong base.\n\nIn the first experiment, the student combined 0.10 mol of acetic acid and 0.10 mol of sodium acetate in 1.0 L of water and recorded the pH. In a second experiment, the ratio of conjugate base to acid was deliberately set to 10:1. The student then titrated a fresh 50.0 mL sample of 0.10 M acetic acid with 0.10 M $\\text{NaOH}$ and monitored the pH with a calibrated electrode, generating the curve sketched in Figure 1. The half-equivalence point and the equivalence point were both identified on the curve.\n\nThe student observed that adding small amounts of strong acid or base near the 1:1 buffer composition changed the pH only slightly, whereas the same additions to pure water caused large pH swings. At the equivalence point of the titration, the solution contained only acetate ion and sodium ion, and the measured pH was above 7. The relationship $\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]}$ was used to rationalize the buffer region. Recall that $\\log 2 \\approx 0.3$ and $\\log 5 \\approx 0.7$.',
    chart: {
      title: 'Figure 1. Titration of 50.0 mL of 0.10 M acetic acid with 0.10 M NaOH',
      kind: 'line',
      xLabel: 'Volume of 0.10 M NaOH added',
      xUnit: 'mL',
      yLabel: 'pH',
      seriesLabel: 'pH',
      hidePointLabels: true,
      xValues: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 48, 50, 52, 55, 60],
      yValues: [2.87, 3.79, 4.14, 4.37, 4.56, 4.74, 4.92, 5.11, 5.34, 5.69, 6.12, 8.72, 11.30, 11.68, 11.96],
      annotations: [
        { xIndex: 5, label: 'half-eq (pH = pKa)' },
        { xIndex: 11, label: 'equivalence' },
      ],
    },
    questions: [
      {
        question: 'In the first experiment (1:1 acid to conjugate base), the pH is closest to:',
        options: ['1.8', '4.7', '7.0', '9.3'],
        correctAnswer: 1,
        explanation:
          'When [A−] = [HA], the log term is zero and pH = pKa. pKa = −log(1.8 × 10⁻⁵) ≈ 4.7. The 7.0 trap assumes neutrality; 1.8 confuses Ka’s coefficient with pH; 9.3 is roughly 14 − pKa (the pKb region), not this solution.',
        skill: 'Buffers',
      },
      {
        question: 'In the second experiment, with [A−]/[HA] = 10:1, the pH is closest to:',
        options: ['3.7', '4.7', '5.7', '6.7'],
        correctAnswer: 2,
        explanation:
          'pH = pKa + log(10) = 4.7 + 1 = 5.7. The 3.7 trap subtracts the log term (that would be the 1:10 ratio); 4.7 ignores the ratio entirely.',
        skill: 'Henderson–Hasselbalch',
      },
      {
        question: 'On the titration curve, the pH at the half-equivalence point (25.0 mL) equals:',
        options: ['3.0', '4.7', '7.0', '8.7'],
        correctAnswer: 1,
        explanation:
          'At the half-equivalence point, exactly half the acid has been neutralized, so [HA] = [A−] and pH = pKa ≈ 4.7. This is the standard graphical method for reading pKa. The equivalence-point pH (>7) and the starting pH (~3) are different features of the curve.',
        skill: 'Titration',
      },
      {
        question: 'The equivalence-point pH is above 7 because:',
        options: [
          'Excess NaOH remains after the reaction',
          'Acetate ion is a weak base that hydrolyzes water to produce hydroxide',
          'Sodium ion acts as a weak acid',
          'The acetic acid is not fully neutralized at this point',
        ],
        correctAnswer: 1,
        explanation:
          'At the equivalence point all acetic acid has been converted to acetate, the conjugate base of a weak acid. Acetate reacts with water (A− + H2O ⇌ HA + OH−) to give a basic solution. There is no excess NaOH exactly at equivalence (option A); Na+ is a spectator, not an acid; and the acid is fully neutralized, ruling out option D.',
        skill: 'Salt hydrolysis',
      },
      {
        question:
          'Which composition gives the GREATEST buffering capacity against both added acid and added base?',
        options: [
          '[A−]/[HA] = 1:1',
          '[A−]/[HA] = 10:1',
          '[A−]/[HA] = 1:10',
          '[A−]/[HA] = 100:1',
        ],
        correctAnswer: 0,
        explanation:
          'Buffer capacity is maximal and most symmetric when [A−] = [HA] (pH = pKa), because comparable reserves of both the weak acid and its conjugate base are available. Skewed ratios resist added acid OR added base well, but not both equally.',
        skill: 'Buffers',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. PHYSICS — Electrochemistry / circuits (galvanic cell, E°, Ohm's law)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-physics-echem-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'A Zinc–Copper Galvanic Cell Driving a Resistor',
    passageText:
      'A student assembled a Daniell cell to study how a spontaneous redox reaction can drive an electric current. One half-cell held a zinc electrode in 1.0 M $\\text{ZnSO}_4$; the other held a copper electrode in 1.0 M $\\text{CuSO}_4$. A salt bridge connected the two solutions, and the electrodes were wired through an external resistor.\n\nThe relevant standard reduction potentials are $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\ \\text{V}$ and $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\ \\text{V}$. Under standard conditions the cell delivered a measured open-circuit voltage close to the value predicted from these potentials. The student then connected external resistors and recorded the current, treating the cell’s standard potential as an ideal EMF and neglecting internal resistance for the calculations below.\n\nAs the cell discharged, the mass of one electrode increased while the other decreased, and the blue color of the copper solution faded over time. The student noted that the salt bridge was essential: without it, charge accumulated and the current stopped almost immediately. Cations and anions migrated through the bridge to keep each half-cell electrically neutral.',
    figure:
      '**Figure 1. Standard cell components**\n\n| Half-cell | Electrode | Solution | $E^\\circ$ (V) |\n|-----------|-----------|----------|----------------|\n| Left | Zn | 1.0 M ZnSO₄ | −0.76 |\n| Right | Cu | 1.0 M CuSO₄ | +0.34 |\n\nOverall reaction: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$',
    questions: [
      {
        question: 'The standard cell potential ($E^\\circ_{cell}$) is:',
        options: ['+0.42 V', '+1.10 V', '−0.42 V', '−1.10 V'],
        correctAnswer: 1,
        explanation:
          'E°cell = E°cathode − E°anode = (+0.34) − (−0.76) = +1.10 V. Cu2+ is reduced (cathode), Zn is oxidized (anode). The +0.42 trap adds the magnitudes incorrectly; the negative options reverse the spontaneous direction.',
        skill: 'Electrochemistry',
      },
      {
        question: 'Which electrode is the anode, and what happens to its mass?',
        options: [
          'Copper; mass increases',
          'Copper; mass decreases',
          'Zinc; mass increases',
          'Zinc; mass decreases',
        ],
        correctAnswer: 3,
        explanation:
          'Oxidation occurs at the anode. Zn is oxidized (Zn → Zn2+ + 2e−), so the zinc electrode dissolves and its mass decreases. Copper is the cathode, where Cu2+ plates out and mass increases — the opposite of the chosen answer.',
        skill: 'Electrochemistry',
      },
      {
        question:
          'Treating the cell as an ideal 1.10 V source with no internal resistance, what current flows through a 5.5 Ω external resistor?',
        options: ['0.05 A', '0.20 A', '0.50 A', '6.05 A'],
        correctAnswer: 1,
        explanation:
          'Ohm’s law: I = V/R = 1.10 V / 5.5 Ω = 0.20 A. The 6.05 A trap multiplies V×R; 0.50 A drops a factor of ten.',
        skill: 'Ohm’s law',
      },
      {
        question:
          'If two identical 5.5 Ω resistors are connected in parallel across the same cell, the current drawn from the cell will:',
        options: [
          'Double, because the equivalent resistance is halved',
          'Halve, because the equivalent resistance is doubled',
          'Stay the same, because voltage is unchanged',
          'Drop to zero, because parallel paths cancel',
        ],
        correctAnswer: 0,
        explanation:
          'Two equal resistors in parallel give an equivalent resistance of R/2 = 2.75 Ω. With voltage fixed, I = V/R, so halving resistance doubles the total current (0.20 A → 0.40 A). Parallel resistors lower, not raise, equivalent resistance, ruling out option B.',
        skill: 'Circuits',
      },
      {
        question: 'Why does the current stop almost immediately if the salt bridge is removed?',
        options: [
          'The standard potentials become equal without the bridge',
          'Charge builds up in each half-cell, opposing further electron flow',
          'The copper electrode stops conducting electrons',
          'The resistor short-circuits the cell',
        ],
        correctAnswer: 1,
        explanation:
          'The salt bridge carries ions to neutralize the positive charge accumulating in the anode compartment (Zn2+ produced) and the negative charge in the cathode compartment (SO4 2− left behind). Without ion migration, this charge separation builds an opposing potential that halts electron flow. The intrinsic E° values do not change (option A), and the electrodes still conduct.',
        skill: 'Electrochemistry',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. ORGANIC CHEMISTRY — Separations & spectroscopy
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-orgo-01',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Isolating Benzoic Acid by Acid–Base Extraction',
    passageText:
      'A student was given a dichloromethane ($\\text{CH}_2\\text{Cl}_2$) solution containing a mixture of benzoic acid (a carboxylic acid), aniline (an aromatic amine), and naphthalene (a neutral aromatic hydrocarbon). The goal was to isolate pure benzoic acid using a liquid–liquid extraction in a separatory funnel, exploiting differences in acid–base behavior to selectively move compounds between the organic and aqueous layers.\n\nThe student first shook the organic solution with aqueous $\\text{NaHCO}_3$. The aqueous layer was separated, then carefully acidified with concentrated $\\text{HCl}$, producing a white precipitate that was collected by filtration. The recovered solid was characterized by infrared (IR) spectroscopy. The IR spectrum showed a very broad absorption from roughly 2500–3300 $\\text{cm}^{-1}$ overlapping the C–H stretches, and a strong, sharp band near 1690 $\\text{cm}^{-1}$.\n\nDichloromethane is denser than water, so in the separatory funnel the organic layer sits below the aqueous layer. The student recorded that benzoic acid has a $\\text{p}K_a$ near 4, aniline’s conjugate acid (anilinium) has a $\\text{p}K_a$ near 5, and naphthalene has no acidic or basic proton in this range. Carbonic acid (from $\\text{NaHCO}_3$) has a first $\\text{p}K_a$ near 6.',
    figure:
      '**Figure 1. Key IR absorptions of the isolated white solid**\n\n| Wavenumber (cm⁻¹) | Appearance | Likely assignment |\n|---------------------|------------|-------------------|\n| 2500–3300 | Very broad | O–H stretch (carboxylic acid) |\n| ~3030 | Weak | sp² C–H stretch |\n| ~1690 | Strong, sharp | C=O stretch |',
    questions: [
      {
        question: 'When the mixture is shaken with aqueous NaHCO₃, which component moves into the aqueous layer?',
        options: [
          'Naphthalene, as the neutral hydrocarbon',
          'Aniline, deprotonated to its conjugate base',
          'Benzoic acid, deprotonated to benzoate',
          'All three components equally',
        ],
        correctAnswer: 2,
        explanation:
          'Bicarbonate is a mild base that deprotonates carboxylic acids (benzoic acid, pKa ~4) but not phenols or amines. The resulting benzoate ion is charged and water-soluble, so it partitions into the aqueous layer. Aniline is a base, not an acid, so NaHCO3 does not deprotonate it; naphthalene is inert.',
        skill: 'Extraction',
      },
      {
        question:
          'After separating the aqueous layer and adding concentrated HCl, the white precipitate forms because:',
        options: [
          'Benzoate is reprotonated to neutral, water-insoluble benzoic acid',
          'HCl oxidizes benzoate to a new compound',
          'Sodium chloride precipitates out of solution',
          'Aniline is salted out by the added acid',
        ],
        correctAnswer: 0,
        explanation:
          'Acidifying the basic aqueous layer with HCl pushes the equilibrium back toward neutral benzoic acid (pKa ~4), which has low water solubility and precipitates. No oxidation occurs; NaCl is highly soluble; aniline was never in this aqueous layer.',
        skill: 'Extraction',
      },
      {
        question:
          'In the separatory funnel, the layer containing dissolved naphthalene is found:',
        options: [
          'On top, because dichloromethane is less dense than water',
          'On the bottom, because dichloromethane is denser than water',
          'Evenly distributed between both layers',
          'As a solid layer at the interface',
        ],
        correctAnswer: 1,
        explanation:
          'The passage states dichloromethane is denser than water, so the organic layer sits on the bottom. Naphthalene is neutral and nonpolar, so it stays dissolved in that lower organic layer. Option A inverts the densities.',
        skill: 'Extraction',
      },
      {
        question:
          'The very broad 2500–3300 cm⁻¹ absorption together with the strong 1690 cm⁻¹ band is most diagnostic of:',
        options: [
          'A primary amine (N–H) and an alkene (C=C)',
          'An alcohol (O–H) and an aldehyde (C=O)',
          'A carboxylic acid O–H and its carbonyl C=O',
          'A terminal alkyne (≡C–H) and a nitrile (C≡N)',
        ],
        correctAnswer: 2,
        explanation:
          'A carboxylic acid shows a characteristically very broad O–H stretch spanning ~2500–3300 cm⁻¹ (hydrogen-bonded dimer) plus a strong C=O stretch near 1690–1710 cm⁻¹. A simple alcohol O–H is broad but centered higher (~3200–3550) and narrower; amine N–H bands are sharper and often doubled. The data and the chemistry both point to benzoic acid.',
        skill: 'IR spectroscopy',
      },
      {
        question:
          'To then isolate pure aniline from the remaining organic layer, the best next wash is:',
        options: [
          'Aqueous NaHCO₃ again',
          'Aqueous NaOH',
          'Aqueous HCl',
          'Pure water',
        ],
        correctAnswer: 2,
        explanation:
          'Aniline is a base; washing with aqueous HCl protonates it to the water-soluble anilinium ion, pulling it into the aqueous layer and leaving neutral naphthalene behind in the organic layer. Aniline can later be freed by basifying. NaHCO3/NaOH are bases and would not extract a basic compound; pure water does not ionize aniline appreciably.',
        skill: 'Extraction',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSICS — Fluids / pressure in a physiological context
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-physics-fluids-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Blood Flow Through a Stenotic Artery',
    passageText:
      'Cardiovascular physiologists model blood flow using the principles of fluid dynamics. Treating blood as an idealized incompressible fluid in steady flow, two relationships are central: the continuity equation, $A_1 v_1 = A_2 v_2$, and Bernoulli’s equation, which relates pressure and velocity along a streamline.\n\nA researcher studied a region of an artery narrowed by atherosclerotic plaque (a stenosis). Upstream of the plaque the vessel had a certain cross-sectional radius; within the stenosis the radius was reduced to half its upstream value, while the volumetric flow rate (volume per time) was conserved across the region. The investigator also considered the effect of vessel geometry on resistance, noting that for laminar flow the volumetric flow rate through a cylindrical vessel scales with the fourth power of its radius at fixed pressure difference (Poiseuille’s law).\n\nFinally, the researcher examined hydrostatic effects by comparing arterial pressure in the brain versus the feet of a standing patient, using $P = \\rho g h$ with blood density $\\rho \\approx 1.05 \\times 10^3\\ \\text{kg/m}^3$ and $g \\approx 10\\ \\text{m/s}^2$. The vertical distance from the heart to the feet was taken as about 1.2 m. Neglecting viscous losses for the velocity and pressure comparisons, the researcher applied these idealized relationships to interpret the data.',
    figure:
      '**Figure 1. Geometry across the stenosis**\n\n| Region | Radius (relative) | Cross-sectional area (relative) |\n|--------|-------------------|----------------------------------|\n| Upstream | 1.0 | 1.0 |\n| Stenosis | 0.5 | 0.25 |\n\nVolumetric flow rate $Q = A v$ is the same in both regions.',
    questions: [
      {
        question:
          'If the radius within the stenosis is half the upstream radius, the blood velocity inside the stenosis is:',
        options: [
          'Half the upstream velocity',
          'Twice the upstream velocity',
          'Four times the upstream velocity',
          'Unchanged',
        ],
        correctAnswer: 2,
        explanation:
          'By continuity, A1v1 = A2v2. Area scales with r², so halving the radius gives one-quarter the area. To keep Q constant, velocity must rise by 4×. The "twice" trap scales velocity with radius rather than area.',
        skill: 'Continuity',
      },
      {
        question: 'According to Bernoulli’s principle, the pressure exerted on the vessel wall inside the stenosis is:',
        options: [
          'Higher than upstream, because the vessel is narrower',
          'Lower than upstream, because the fluid moves faster',
          'Equal to upstream, because flow rate is conserved',
          'Zero, because the fluid is incompressible',
        ],
        correctAnswer: 1,
        explanation:
          'Bernoulli’s equation requires that where velocity increases (the stenosis), pressure decreases along a horizontal streamline. The faster-moving blood in the narrowing exerts lower lateral pressure on the wall. Conserved flow rate (continuity) does not imply equal pressure.',
        skill: 'Bernoulli',
      },
      {
        question:
          'Considering Poiseuille’s law, halving a vessel’s radius at fixed pressure difference reduces its volumetric flow capacity by a factor of:',
        options: ['2', '4', '8', '16'],
        correctAnswer: 3,
        explanation:
          'Poiseuille flow scales as r⁴. (1/2)⁴ = 1/16, so the flow capacity falls to one-sixteenth — a factor of 16 reduction. The factor-of-4 trap uses area (r²) instead of the fourth-power dependence.',
        skill: 'Poiseuille',
      },
      {
        question:
          'The hydrostatic pressure difference between the heart and the feet (h ≈ 1.2 m) is closest to:',
        options: ['1.3 kPa', '13 kPa', '130 kPa', '1300 kPa'],
        correctAnswer: 1,
        explanation:
          'P = ρgh = (1.05 × 10³)(10)(1.2) ≈ 1.26 × 10⁴ Pa ≈ 13 kPa. The 1.3 kPa trap drops a power of ten; 130 kPa adds one. (For reference, ~13 kPa ≈ 95 mmHg, the well-known boost in foot arterial pressure on standing.)',
        skill: 'Hydrostatics',
      },
      {
        question:
          'In reality, blood is viscous and the artery is not perfectly rigid. Compared with the idealized Bernoulli prediction, accounting for viscosity would:',
        options: [
          'Eliminate the velocity increase in the stenosis',
          'Add an additional pressure drop along the direction of flow due to energy dissipation',
          'Reverse the direction of flow through the stenosis',
          'Make the pressure inside the stenosis higher than upstream',
        ],
        correctAnswer: 1,
        explanation:
          'Viscosity dissipates mechanical energy, so a real vessel shows an additional, net pressure drop in the flow direction beyond the reversible Bernoulli exchange — pressure is not fully recovered downstream. Continuity still forces the velocity increase (ruling out A), and viscosity does not reverse flow or raise stenosis pressure above upstream.',
        skill: 'Experimental reasoning',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 6. THERMODYNAMICS / BIOENERGETICS — ΔG, ΔH, ΔS, coupling
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-thermo-01',
    section: 'chem-phys',
    discipline: 'thermodynamics',
    title: 'Coupling ATP Hydrolysis to Glucose Phosphorylation',
    passageText:
      'The first step of glycolysis phosphorylates glucose to glucose-6-phosphate (G6P). On its own, the direct reaction of glucose with inorganic phosphate is thermodynamically unfavorable. Cells circumvent this by coupling the reaction to the hydrolysis of ATP, catalyzed by hexokinase.\n\nA biochemistry class examined the standard free-energy changes ($\\Delta G^\\circ{}′$) for the relevant reactions, listed in Figure 1. They treated the coupled reaction as the algebraic sum of the two half-reactions sharing the phosphate. The class also reviewed the master relationship $\\Delta G = \\Delta H - T\\Delta S$ and the link between standard free energy and equilibrium, $\\Delta G^\\circ = -RT\\ln K_{eq}$, noting that a negative $\\Delta G^\\circ$ corresponds to $K_{eq} > 1$.\n\nThe instructor emphasized the distinction between $\\Delta G^\\circ$ (standard conditions, all species at 1 M) and the actual $\\Delta G$, which depends on the real intracellular concentrations of reactants and products. In a resting cell the ATP/ADP ratio is held far above its equilibrium value, making the actual $\\Delta G$ of ATP hydrolysis substantially more negative than the standard value. ATP hydrolysis is also exothermic and proceeds with an increase in entropy, as a single reactant yields multiple products.',
    figure:
      '**Figure 1. Standard free-energy changes ($\\Delta G^\\circ{}′$, pH 7, 25 °C)**\n\n| Reaction | $\\Delta G^\\circ{}′$ (kJ/mol) |\n|----------|------------------------------|\n| Glucose + Pᵢ → G6P + H₂O | +13.8 |\n| ATP + H₂O → ADP + Pᵢ | −30.5 |\n| **Coupled: Glucose + ATP → G6P + ADP** | **?** |',
    questions: [
      {
        question: 'The standard free-energy change of the coupled reaction (glucose + ATP → G6P + ADP) is:',
        options: ['+44.3 kJ/mol', '−16.7 kJ/mol', '−30.5 kJ/mol', '−44.3 kJ/mol'],
        correctAnswer: 1,
        explanation:
          'Add the two reactions; the shared Pi and H2O cancel: (+13.8) + (−30.5) = −16.7 kJ/mol. The +44.3 and −44.3 traps subtract the magnitudes instead of adding the signed values; −30.5 ignores the unfavorable phosphorylation step.',
        skill: 'Bioenergetics',
      },
      {
        question: 'Because the coupled reaction has a negative ΔG°, its equilibrium constant K_eq is:',
        options: ['Less than 1', 'Exactly 1', 'Greater than 1', 'Negative'],
        correctAnswer: 2,
        explanation:
          'From ΔG° = −RT ln Keq, a negative ΔG° requires ln Keq > 0, i.e., Keq > 1 (products favored). Keq is a ratio of concentrations and can never be negative. ΔG° = 0 would give Keq = 1.',
        skill: 'Thermodynamics',
      },
      {
        question:
          'ATP hydrolysis is described as exothermic with increasing entropy. At constant temperature, this combination guarantees that ΔG is:',
        options: [
          'Positive at all temperatures',
          'Negative at all temperatures',
          'Negative only at low temperature',
          'Negative only at high temperature',
        ],
        correctAnswer: 1,
        explanation:
          'With ΔH < 0 (exothermic) and ΔS > 0, ΔG = ΔH − TΔS is negative regardless of T, since both terms are negative for positive T. The temperature-dependent cases (C and D) apply when ΔH and ΔS have the same sign, which is not the case here.',
        skill: 'Gibbs free energy',
      },
      {
        question:
          'Why is the actual ΔG of ATP hydrolysis in a resting cell MORE negative than the standard ΔG°′?',
        options: [
          'The cell is colder than 25 °C',
          'The intracellular ATP/ADP ratio is kept far above its equilibrium value',
          'The cell maintains all reactants and products at exactly 1 M',
          'Enzymes lower ΔG by lowering the activation energy',
        ],
        correctAnswer: 1,
        explanation:
          'Actual ΔG = ΔG°′ + RT ln Q. A high [ATP]/[ADP][Pi] ratio makes Q small, so RT ln Q is negative, pushing ΔG below ΔG°′. The 1 M condition (option C) defines ΔG°′ itself. Enzymes change kinetics, not the thermodynamic ΔG (option D).',
        skill: 'Bioenergetics',
      },
      {
        question:
          'Which statement about the role of hexokinase in this coupled reaction is correct?',
        options: [
          'It makes the otherwise unfavorable phosphorylation thermodynamically favorable',
          'It physically couples ATP hydrolysis to glucose phosphorylation so the reactions share a common intermediate',
          'It increases the equilibrium constant of the coupled reaction',
          'It supplies the free energy that drives phosphorylation',
        ],
        correctAnswer: 1,
        explanation:
          'Hexokinase mechanistically couples the two processes by transferring the phosphoryl group directly from ATP to glucose, so the two reactions proceed as a single favorable reaction sharing that common phosphoryl group. An enzyme cannot alter thermodynamics: it does not make an unfavorable reaction favorable (A) or change Keq (C) — those come from the coupling itself. The driving free energy is supplied by ATP, not by the enzyme (D).',
        skill: 'Enzyme thermodynamics',
        needsReview: false,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. GENERAL CHEMISTRY — Solutions & kinetics (rate laws)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-genchem-kinetics-01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Kinetics of a Bimolecular Substitution',
    passageText:
      'A chemist studied the rate of the reaction $\\text{A} + \\text{B} \\rightarrow \\text{products}$ by the method of initial rates. The concentrations of the two reactants were varied independently, and the initial rate of product formation was measured in each trial under identical temperature and solvent conditions. The data are collected in Figure 1.\n\nFrom these trials the chemist determined the order of the reaction with respect to each reactant and wrote the overall rate law, $\\text{rate} = k[\\text{A}]^m[\\text{B}]^n$. The chemist then explored the temperature dependence of the rate constant, noting that increasing the temperature raised $k$ and recalling the Arrhenius relationship between $k$, the activation energy, and temperature. A catalyst was later added in a separate experiment.\n\nThe chemist was careful to use INITIAL rates so that the reverse reaction and product accumulation could be neglected, and to change only one concentration at a time between comparison trials. All concentrations are in mol/L and rates in $\\text{mol}\\,\\text{L}^{-1}\\text{s}^{-1}$.',
    figure:
      '**Figure 1. Method of initial rates**\n\n| Trial | [A] (M) | [B] (M) | Initial rate (M/s) |\n|-------|---------|---------|--------------------|\n| 1 | 0.10 | 0.10 | 2.0 × 10⁻³ |\n| 2 | 0.20 | 0.10 | 4.0 × 10⁻³ |\n| 3 | 0.10 | 0.20 | 8.0 × 10⁻³ |',
    questions: [
      {
        question: 'What is the order of the reaction with respect to A?',
        options: ['Zero order', 'First order', 'Second order', 'Third order'],
        correctAnswer: 1,
        explanation:
          'Compare trials 1 and 2 ([B] held constant): doubling [A] (0.10 → 0.20) doubles the rate (2.0 → 4.0 × 10⁻³). Rate ∝ [A]¹, so the reaction is first order in A. A doubling-for-doubling response is the definition of first order.',
        skill: 'Rate laws',
      },
      {
        question: 'What is the order of the reaction with respect to B?',
        options: ['Zero order', 'First order', 'Second order', 'Third order'],
        correctAnswer: 2,
        explanation:
          'Compare trials 1 and 3 ([A] held constant): doubling [B] (0.10 → 0.20) quadruples the rate (2.0 → 8.0 × 10⁻³). A 4× change for a 2× concentration change (2² = 4) means second order in B.',
        skill: 'Rate laws',
      },
      {
        question: 'The value of the rate constant k is closest to:',
        options: ['0.2 M⁻² s⁻¹', '2.0 M⁻² s⁻¹', '20 M⁻² s⁻¹', '200 M⁻² s⁻¹'],
        correctAnswer: 1,
        explanation:
          'rate = k[A][B]². Using trial 1: 2.0 × 10⁻³ = k(0.10)(0.10)² = k(0.10)(0.010) = k(1.0 × 10⁻³). So k = 2.0 M⁻² s⁻¹. The units (third-order overall → M⁻² s⁻¹) confirm the setup; the other options are power-of-ten errors.',
        skill: 'Rate constant',
      },
      {
        question: 'What is the overall order of the reaction?',
        options: ['First', 'Second', 'Third', 'Fourth'],
        correctAnswer: 2,
        explanation:
          'Overall order = m + n = 1 (in A) + 2 (in B) = 3. The reaction is third order overall, consistent with the M⁻² s⁻¹ units of k.',
        skill: 'Rate laws',
      },
      {
        question:
          'Adding a catalyst in a later experiment would most directly increase the rate by:',
        options: [
          'Raising the activation energy of the reaction',
          'Lowering the activation energy, increasing k at a given temperature',
          'Increasing the concentration of reactant B',
          'Shifting the equilibrium toward products',
        ],
        correctAnswer: 1,
        explanation:
          'A catalyst provides an alternative pathway with a lower activation energy; via the Arrhenius relation (k = Ae^{−Ea/RT}), lowering Ea raises k and thus the rate at fixed T. Catalysts do not raise Ea, change reactant concentrations, or shift the equilibrium position (they speed forward and reverse equally).',
        skill: 'Catalysis',
      },
      {
        question:
          'Why did the chemist insist on measuring INITIAL rates rather than rates later in the reaction?',
        options: [
          'Initial rates are easier to read off the data table',
          'Early on, product concentration is negligible, so the reverse reaction can be ignored',
          'The rate constant changes as the reaction proceeds',
          'Temperature is only constant at the start',
        ],
        correctAnswer: 1,
        explanation:
          'At early times, little product has formed, so the reverse reaction and any product inhibition are negligible and the measured rate reflects the forward rate law cleanly. The rate constant k is fixed at constant temperature (ruling out C), and temperature is controlled throughout (ruling out D).',
        skill: 'Experimental design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PHYSICS — Geometric optics (thin lens, magnification, refraction)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-physics-optics-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Imaging with a Converging Lens',
    passageText:
      'An optics student characterized a thin converging (biconvex) lens on an optical bench. The lens had a focal length of $f = +10\\ \\text{cm}$. A small illuminated object (an arrow) was mounted on the bench, and a white screen was moved until a sharp image formed. The student used the thin-lens equation, $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$, and the magnification relation, $m = -\\frac{d_i}{d_o}$, with the sign convention that real images and real objects have positive distances.\n\nIn the first trial the object was placed 30 cm from the lens (well outside the focal length) and the screen position was recorded. The student noted that the projected image was inverted relative to the object. In a later trial the object was moved inside the focal length to study the virtual-image regime, where no real image can be projected on a screen.\n\nThe student also examined refraction at a water–air boundary. A laser beam traveled up from water ($n = 1.33$) toward the flat air ($n = 1.00$) surface. Using Snell’s law, $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$, the student found that beyond a certain angle of incidence the beam no longer escaped into the air but was entirely reflected back into the water. The refractive index of air was taken as 1.00 throughout.',
    figure:
      '**Figure 1. Lens trial 1 ($f = +10$ cm)**\n\n| Quantity | Value |\n|----------|-------|\n| Object distance $d_o$ | 30 cm |\n| Object height | 2.0 cm |\n| Image orientation | inverted |\n\nFor the refraction study: light travels from water ($n=1.33$) into air ($n=1.00$).',
    questions: [
      {
        question: 'In trial 1, the image distance $d_i$ is:',
        options: ['+7.5 cm', '+15 cm', '+30 cm', '−15 cm'],
        correctAnswer: 1,
        explanation:
          'From 1/f = 1/do + 1/di: 1/di = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 = 1/15, so di = +15 cm (positive → a real image on the far side). The −15 cm trap flips the sign (virtual); +30 cm wrongly assumes di = do.',
        skill: 'Thin lens',
      },
      {
        question: 'The magnification of the image in trial 1 is:',
        options: ['−2.0', '−0.5', '+0.5', '+2.0'],
        correctAnswer: 1,
        explanation:
          'm = −di/do = −(15)/(30) = −0.5. The negative sign indicates an inverted image; the magnitude 0.5 means it is reduced to half size (a 2.0 cm object → 1.0 cm image). The −2.0 trap inverts the ratio (do/di).',
        skill: 'Magnification',
      },
      {
        question: 'The image formed in trial 1 is best described as:',
        options: [
          'Virtual, upright, and enlarged',
          'Real, inverted, and reduced',
          'Real, upright, and the same size',
          'Virtual, inverted, and reduced',
        ],
        correctAnswer: 1,
        explanation:
          'di > 0 means the image is real (projectable on the screen); m = −0.5 means inverted and reduced. An object outside f for a converging lens always gives a real, inverted image. Virtual images require di < 0, which occurs only when the object is inside the focal length.',
        skill: 'Image properties',
      },
      {
        question: 'The power of this lens, in diopters, is:',
        options: ['+0.1 D', '+1.0 D', '+10 D', '+100 D'],
        correctAnswer: 2,
        explanation:
          'Power P = 1/f with f in meters: f = 10 cm = 0.10 m, so P = 1/0.10 = +10 D. The +0.1 D trap leaves f in centimeters (1/10); +100 D squares the error.',
        skill: 'Lens power',
      },
      {
        question:
          'For the laser traveling from water into air, the critical angle for total internal reflection satisfies:',
        options: [
          '$\\sin\\theta_c = 1.33$',
          '$\\sin\\theta_c = 1.00/1.33 \\approx 0.75$',
          '$\\sin\\theta_c = 1.33/1.00 = 1.33$',
          '$\\sin\\theta_c = 1.00$',
        ],
        correctAnswer: 1,
        explanation:
          'At the critical angle the refracted ray grazes the surface (θ2 = 90°), so n1 sinθc = n2 sin90° = n2. Thus sinθc = n2/n1 = 1.00/1.33 ≈ 0.75 (θc ≈ 49°). Total internal reflection occurs only going from the denser (water) to the less dense (air) medium, requiring n2 < n1; sinθc = 1.33 is impossible since sine cannot exceed 1.',
        skill: 'Total internal reflection',
      },
      {
        question:
          'If the object is instead placed 5 cm from the lens (inside the focal length), the resulting image is:',
        options: [
          'Real and inverted, projectable on a screen',
          'Virtual, upright, and enlarged',
          'Located at infinity',
          'Real and the same size as the object',
        ],
        correctAnswer: 1,
        explanation:
          'With do = 5 cm < f = 10 cm: 1/di = 1/10 − 1/5 = 1/10 − 2/10 = −1/10, so di = −10 cm (virtual, same side as object). m = −di/do = −(−10)/5 = +2.0, i.e. upright and enlarged — the magnifying-glass regime. A real image (options A/D) requires the object outside f; an image at infinity requires the object exactly at f.',
        skill: 'Thin lens',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Electrochemistry (Nernst equation, concentration cell)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-genchem-nernst-01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'A Copper Concentration Cell',
    passageText:
      'To probe how ion concentration controls cell voltage, a chemist built a concentration cell from two copper electrodes, each dipped in a $\\text{CuSO}_4$ solution, joined by a salt bridge. Because both electrodes are identical metal in the same ion, the standard cell potential $E^\\circ_{cell}$ is exactly zero; any measured voltage arises solely from the difference in $\\text{Cu}^{2+}$ concentration between the two compartments.\n\nThe spontaneous direction is the one that dilutes the concentrated half-cell and concentrates the dilute one. Reduction ($\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$) occurs in the more concentrated compartment (the cathode), and oxidation ($\\text{Cu} \\rightarrow \\text{Cu}^{2+} + 2e^-$) occurs in the dilute compartment (the anode). The chemist applied the Nernst equation at 25 °C in its base-10 form, $E_{cell} = E^\\circ_{cell} - \\frac{0.0592}{n}\\log Q$, where $n$ is the number of electrons transferred and $Q$ is the reaction quotient.\n\nThe chemist held one half-cell at 1.0 M $\\text{Cu}^{2+}$ and varied the other, recording the open-circuit voltage in Figure 1. As the cell discharged, the two concentrations drifted toward each other, and the voltage fell. The chemist reasoned that once the concentrations became equal, $Q = 1$ and the cell would reach equilibrium. Use $\\log 10 = 1$ and $\\log 100 = 2$.',
    figure:
      '**Figure 1. Measured voltage of the Cu concentration cell (one half-cell fixed at 1.0 M)**\n\n| Trial | [Cu²⁺] dilute (M) | [Cu²⁺] concentrated (M) | $E_{cell}$ (V) |\n|-------|-------------------|--------------------------|-----------------|\n| 1 | 0.10 | 1.0 | ? |\n| 2 | 0.010 | 1.0 | ? |\n| 3 | 1.0 | 1.0 | 0.00 |\n\nFor this cell, $n = 2$ and $Q = \\dfrac{[\\text{Cu}^{2+}]_{\\text{dilute (anode)}}}{[\\text{Cu}^{2+}]_{\\text{conc (cathode)}}}$.',
    questions: [
      {
        question: 'Why is the standard cell potential of this concentration cell exactly zero?',
        options: [
          'Because copper is a noble metal',
          'Because both half-cells use the same electrode and same redox couple, so the standard reduction potentials cancel',
          'Because the salt bridge cancels the voltage',
          'Because Cu²⁺ does not undergo reduction',
        ],
        correctAnswer: 1,
        explanation:
          'E°cell = E°cathode − E°anode. Both half-cells are Cu²⁺/Cu with the identical standard reduction potential, so the difference is zero. Any voltage then comes only from the concentration term in the Nernst equation. The salt bridge maintains neutrality but does not set E° (option C), and Cu²⁺ is certainly reduced at the cathode (option D).',
        skill: 'Concentration cells',
      },
      {
        question: 'In trial 1 (dilute = 0.10 M, concentrated = 1.0 M), the cell voltage is closest to:',
        options: ['0.0148 V', '0.0296 V', '0.0592 V', '0.118 V'],
        correctAnswer: 1,
        explanation:
          'Q = [anode]/[cathode] = 0.10/1.0 = 0.10, so log Q = −1. E = 0 − (0.0592/2)(−1) = +0.0296 V. The 0.0592 trap forgets to divide by n = 2; 0.0148 divides by an extra factor.',
        skill: 'Nernst equation',
      },
      {
        question: 'In trial 2 (dilute = 0.010 M, concentrated = 1.0 M), the cell voltage is closest to:',
        options: ['0.0296 V', '0.0592 V', '0.118 V', '0.178 V'],
        correctAnswer: 1,
        explanation:
          'Q = 0.010/1.0 = 0.010, log Q = −2. E = 0 − (0.0592/2)(−2) = (0.0296)(2) = 0.0592 V. A 100-fold concentration ratio gives twice the voltage of the 10-fold ratio in trial 1 — voltage scales with log of the ratio.',
        skill: 'Nernst equation',
      },
      {
        question: 'As the concentration cell discharges, the measured voltage:',
        options: [
          'Increases until the solutions are equal',
          'Decreases toward zero as the two concentrations converge',
          'Stays constant until the cell suddenly dies',
          'Reverses sign immediately',
        ],
        correctAnswer: 1,
        explanation:
          'Discharge dilutes the cathode (concentrated) side and concentrates the anode (dilute) side, driving Q toward 1 and log Q toward 0. So E falls toward zero, reaching equilibrium when the concentrations are equal. The voltage does not rise (A) or hold constant (C); it only reverses if the concentration ratio inverts, which discharge does not do.',
        skill: 'Concentration cells',
      },
      {
        question: 'Which change would INCREASE the voltage of the cell in trial 1?',
        options: [
          'Diluting the dilute (anode) half-cell further',
          'Adding more CuSO₄ to the dilute (anode) half-cell',
          'Diluting the concentrated (cathode) half-cell',
          'Adding water equally to both half-cells',
        ],
        correctAnswer: 0,
        explanation:
          'Voltage grows as the concentration ratio (cathode/anode) grows, i.e. as Q = anode/cathode shrinks. Diluting the anode side lowers [Cu²⁺]anode, decreasing Q and raising E. Adding CuSO₄ to the anode (B) or diluting the cathode (C) shrinks the ratio and lowers E; adding water equally leaves the ratio unchanged.',
        skill: 'Nernst equation',
      },
      {
        question:
          'At equilibrium the cell voltage is zero. This corresponds to a reaction quotient $Q$ of:',
        options: ['0', '1', '2', '10'],
        correctAnswer: 1,
        explanation:
          'E = 0 requires log Q = 0, i.e. Q = 1, meaning the two Cu²⁺ concentrations are equal. (Equivalently, since E°cell = 0, the equilibrium constant K = 1.) Q = 0 would require zero ion concentration; Q = 10 would give a nonzero voltage.',
        skill: 'Equilibrium',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. BIOCHEMISTRY — Spectrophotometry & Beer's law (quantitation of a protein)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cp-biochem-spectro-01',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Quantifying NADH by Absorption Spectroscopy',
    passageText:
      'The reduced cofactor NADH absorbs ultraviolet light strongly at 340 nm, whereas its oxidized form $\\text{NAD}^+$ does not. Biochemists exploit this to follow dehydrogenase reactions in real time. A student measured NADH concentrations using the Beer–Lambert law, $A = \\varepsilon b c$, where $A$ is the (unitless) absorbance, $\\varepsilon$ is the molar absorptivity, $b$ is the path length, and $c$ is the molar concentration.\n\nFor NADH at 340 nm, $\\varepsilon = 6{,}200\\ \\text{M}^{-1}\\text{cm}^{-1}$. The student used a cuvette with a standard 1.0 cm path length and first confirmed the spectrophotometer was blanked against buffer alone. Absorbance is related to the fraction of light transmitted, $T$, by $A = -\\log_{10} T$; an absorbance of 1.0 therefore means only 10% of the incident light passes through.\n\nThe student prepared a dilution series of pure NADH and recorded the absorbance of each, then used an enzyme assay in which NADH is consumed, watching the 340 nm signal fall over time. The student verified that all samples fell within the linear range of the instrument (absorbance below about 1.0), where absorbance is directly proportional to concentration, before quantifying any unknown.',
    figure:
      '**Figure 1. Absorbance of NADH standards (340 nm, 1.0 cm path)**\n\n| Sample | [NADH] (µM) | Absorbance $A$ |\n|--------|-------------|-----------------|\n| 1 | 50 | 0.31 |\n| 2 | 100 | 0.62 |\n| 3 | Unknown | 0.31 |\n\n($\\varepsilon = 6{,}200\\ \\text{M}^{-1}\\text{cm}^{-1}$, $b = 1.0$ cm.)',
    questions: [
      {
        question:
          'Using $A = \\varepsilon b c$, what concentration of NADH gives an absorbance of 0.62 in a 1.0 cm cuvette?',
        options: ['$1.0 \\times 10^{-5}$ M', '$5.0 \\times 10^{-5}$ M', '$1.0 \\times 10^{-4}$ M', '$6.2 \\times 10^{-4}$ M'],
        correctAnswer: 2,
        explanation:
          'c = A/(εb) = 0.62 / (6200 × 1.0) = 1.0 × 10⁻⁴ M (= 100 µM), matching sample 2. The 5.0 × 10⁻⁵ trap uses A = 0.31; 6.2 × 10⁻⁴ misplaces a factor of ten.',
        skill: "Beer's law",
      },
      {
        question: 'The unknown (sample 3) has an absorbance of 0.31. Its NADH concentration is:',
        options: ['25 µM', '50 µM', '100 µM', '150 µM'],
        correctAnswer: 1,
        explanation:
          'Within the linear range, A ∝ c. Sample 1 (50 µM) gave A = 0.31, and the unknown also reads 0.31, so it is 50 µM. Equivalently c = 0.31/(6200 × 1.0) = 5.0 × 10⁻⁵ M = 50 µM.',
        skill: "Beer's law",
      },
      {
        question:
          'An absorbance of 1.0 corresponds to what fraction of incident light being transmitted through the sample?',
        options: ['100%', '50%', '10%', '1%'],
        correctAnswer: 2,
        explanation:
          'A = −log₁₀ T, so T = 10^(−A) = 10^(−1.0) = 0.10, i.e. 10% transmitted (90% absorbed). The 1% answer corresponds to A = 2.0; 50% would be A ≈ 0.30.',
        skill: 'Absorbance vs transmittance',
      },
      {
        question:
          'During the enzyme assay, the 340 nm absorbance falls steadily over time. This indicates that:',
        options: [
          'NAD⁺ is being converted to NADH',
          'NADH is being consumed (oxidized to NAD⁺)',
          'The path length is increasing',
          'The molar absorptivity is decreasing',
        ],
        correctAnswer: 1,
        explanation:
          'Only NADH absorbs at 340 nm; a falling absorbance means [NADH] is decreasing as it is oxidized to non-absorbing NAD⁺. Producing NADH (option A) would raise absorbance. Path length and ε are fixed properties of the cuvette and molecule, not time-dependent here.',
        skill: 'Enzyme assays',
      },
      {
        question:
          'If a sample is too concentrated and reads an absorbance of 2.5, the best way to obtain an accurate concentration is to:',
        options: [
          'Report 2.5 directly using Beer’s law',
          'Dilute the sample so the reading falls within the linear range (A < ~1), then multiply by the dilution factor',
          'Increase the path length of the cuvette',
          'Switch to a wavelength where NADH does not absorb',
        ],
        correctAnswer: 1,
        explanation:
          'At very high absorbance, stray light and detector limits make A no longer linear in c, so direct use of Beer’s law is unreliable. Diluting brings the reading into the linear range; the true concentration is the measured value times the dilution factor. Increasing the path length raises A further (wrong direction), and a non-absorbing wavelength gives no signal at all.',
        skill: 'Experimental design',
      },
      {
        question:
          'Two NADH solutions are measured: one in a 1.0 cm cuvette, the other in a 2.0 cm cuvette, both at the same concentration. The 2.0 cm sample’s absorbance is:',
        options: [
          'Half that of the 1.0 cm sample',
          'Equal to the 1.0 cm sample',
          'Twice that of the 1.0 cm sample',
          'Four times that of the 1.0 cm sample',
        ],
        correctAnswer: 2,
        explanation:
          'A = εbc is linear in path length b. Doubling b at fixed c and ε doubles A. The dependence is first power, not squared (ruling out the 4× option), and absorbance certainly changes with path length (ruling out "equal").',
        skill: "Beer's law",
      },
    ],
  },
]

export const CHEM_PHYS_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'cp-disc-01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'What is the pH of a $1 \\times 10^{-3}$ M solution of the strong acid HCl?',
    options: ['1', '3', '7', '11'],
    correctAnswer: 1,
    explanation:
      'HCl is a strong acid, so [H+] = 1 × 10⁻³ M and pH = −log(10⁻³) = 3. The pH 11 trap is the pOH; pH 1 would require a 0.1 M solution.',
    skill: 'pH',
  },
  {
    id: 'cp-disc-02',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'An object is dropped from rest. Neglecting air resistance and taking $g \\approx 10\\ \\text{m/s}^2$, how far does it fall in 2.0 s?',
    options: ['10 m', '20 m', '40 m', '80 m'],
    correctAnswer: 1,
    explanation:
      'd = ½gt² = ½(10)(2.0)² = ½(10)(4) = 20 m. The 40 m trap forgets the factor of ½; 10 m uses t instead of t².',
    skill: 'Kinematics',
  },
  {
    id: 'cp-disc-03',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question:
      'How many signals would you expect in the $^1\\text{H}$ NMR spectrum of 1,4-dimethylbenzene (para-xylene)?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation:
      'Para-xylene is highly symmetric: all six methyl protons are equivalent (one signal), and all four aromatic protons are equivalent by symmetry (one signal). That gives 2 distinct signals. Lower symmetry isomers (ortho/meta) would show more.',
    skill: 'NMR',
  },
  {
    id: 'cp-disc-04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'In the reaction $\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$, which species is the oxidizing agent?',
    options: ['Zn', 'Zn²⁺', 'Cu²⁺', 'Cu'],
    correctAnswer: 2,
    explanation:
      'The oxidizing agent is itself reduced. Cu2+ gains electrons (Cu2+ + 2e− → Cu), so Cu2+ is reduced and is the oxidizing agent. Zn is oxidized, making it the reducing agent — the common reversal trap.',
    skill: 'Redox',
  },
  {
    id: 'cp-disc-05',
    section: 'chem-phys',
    discipline: 'thermodynamics',
    question:
      'A reaction has $\\Delta H > 0$ and $\\Delta S > 0$. Under what conditions is it spontaneous?',
    options: [
      'At all temperatures',
      'At no temperature',
      'Only at sufficiently high temperature',
      'Only at sufficiently low temperature',
    ],
    correctAnswer: 2,
    explanation:
      'ΔG = ΔH − TΔS. With ΔH > 0 and ΔS > 0, the −TΔS term grows more negative as T rises, so ΔG becomes negative (spontaneous) only above a threshold temperature. This is the entropy-driven, high-temperature case.',
    skill: 'Gibbs free energy',
  },
  {
    id: 'cp-disc-06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question:
      'At its isoelectric point (pI), an amino acid in solution exists predominantly as which species?',
    options: [
      'A fully positive cation',
      'A fully negative anion',
      'A zwitterion with no net charge',
      'A neutral, uncharged molecule with no formal charges',
    ],
    correctAnswer: 2,
    explanation:
      'At the pI the net charge is zero, but for an amino acid this is achieved as a zwitterion — a protonated amino group (–NH3+) balancing a deprotonated carboxylate (–COO−). It is not literally uncharged (option D); both charged groups are present, summing to zero net charge.',
    skill: 'Amino acids',
  },
  {
    id: 'cp-disc-07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question:
      'Using $PV = nRT$ with $R = 0.0821\\ \\text{L}\\cdot\\text{atm}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$, what volume does 1.0 mol of an ideal gas occupy at 1.0 atm and 273 K?',
    options: ['2.24 L', '11.2 L', '22.4 L', '44.8 L'],
    correctAnswer: 2,
    explanation:
      'V = nRT/P = (1.0)(0.0821)(273)/(1.0) ≈ 22.4 L — the familiar molar volume of an ideal gas at STP. The 11.2 L trap is the half-mole value; 44.8 L doubles it.',
    skill: 'Ideal gas law',
  },
  {
    id: 'cp-disc-08',
    section: 'chem-phys',
    discipline: 'physics',
    question:
      'A current of 2.0 A flows through a 3.0 Ω resistor. What is the power dissipated by the resistor?',
    options: ['1.5 W', '6.0 W', '12 W', '18 W'],
    correctAnswer: 2,
    explanation:
      'Power dissipated in a resistor is P = I²R = (2.0)²(3.0) = (4.0)(3.0) = 12 W. The 6.0 W trap uses P = IR (wrong formula); 1.5 W uses I/R. Equivalently V = IR = 6.0 V and P = IV = 12 W.',
    skill: 'Electric power',
  },
]
