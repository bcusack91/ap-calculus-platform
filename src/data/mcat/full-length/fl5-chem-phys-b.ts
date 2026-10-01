/**
 * MCAT Full-Length Form 5 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-09-30 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL5_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — Dialysis, osmolarity, tonicity, clearance (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Solute Clearance in a Hollow-Fiber Dialyzer',
    passageText:
      'When the kidneys fail, waste solutes such as urea and creatinine accumulate in the blood, and hemodialysis is used to remove them. Blood is pumped through a bundle of thousands of hollow fibers whose walls are a semipermeable membrane, while a prepared solution called dialysate flows around the outside of the fibers. Small solutes diffuse across the membrane down their concentration gradients; water and dissolved solutes can also be driven across by a hydrostatic pressure difference, a process called ultrafiltration. The membrane pores admit water and small molecules but exclude proteins and cells.\n\nThe osmolarity of a solution is the total concentration of dissolved particles, counting every ion of a dissociated salt separately. The tonicity of a solution relative to a cell, by contrast, depends only on the solutes that cannot cross the cell membrane. Urea crosses most cell membranes readily, so it raises the osmolarity of plasma without adding to its tonicity. A typical dialysate contains 140 mM $\\text{Na}^+$, 2 mM $\\text{K}^+$, 1.5 mM $\\text{Ca}^{2+}$, 0.5 mM $\\text{Mg}^{2+}$, 110 mM $\\text{Cl}^-$, 35 mM $\\text{HCO}_3^-$, and 5 mM glucose, so that its electrolyte content resembles that of plasma while it contains none of the wastes to be removed. The potassium level is kept below that of plasma so that excess potassium leaves the blood, and the bicarbonate level is kept above that of plasma so that bicarbonate enters the blood and corrects the acidosis of renal failure.\n\nThe efficiency of a dialyzer for a given solute is expressed as its clearance, $K$, the volume of blood completely cleared of the solute per unit time:\n\n$K = Q_B\\,\\dfrac{C_{in} - C_{out}}{C_{in}}$\n\nwhere $Q_B$ is the flow rate of blood through the fibers and $C_{in}$ and $C_{out}$ are the solute concentrations entering and leaving the dialyzer. Clearance is a property of the dialyzer and the operating conditions, not of how much solute happens to be present.\n\nTo characterize a new dialyzer, engineers perfused it with a test solution containing five solutes at a flow rate of $Q_B$ = 300 mL/min while dialysate of the composition above flowed at 500 mL/min. In Trial 1 the dialysate flowed in the direction opposite to the test solution (countercurrent flow). In Trial 2 the same dialyzer was run with the dialysate flowing in the same direction as the test solution (concurrent flow). In Trial 3 a dialyzer of the same design but with twice the membrane area was run under the countercurrent conditions of Trial 1. The ultrafiltration rate was set to zero in all trials, so no net water moved across the membrane and the outlet flow equaled the inlet flow. Table 1 lists the inlet and outlet concentrations of the five solutes in Trial 1, and Table 2 lists the urea clearance measured in each of the three trials.',
    figure:
      '**Table 1.** Inlet and outlet concentrations of test solutes, Trial 1 (countercurrent, $Q_B$ = 300 mL/min)\n\n| Solute | Molar mass (g/mol) | Inlet, $C_{in}$ (mg/L) | Outlet, $C_{out}$ (mg/L) |\n|---|---|---|---|\n| Urea | 60 | 1000 | 300 |\n| Creatinine | 113 | 100 | 40 |\n| Vitamin B₁₂ | 1355 | 10 | 8 |\n| Inulin | 5200 | 10 | 9.5 |\n| Albumin | 66,000 | 40,000 | 40,000 |\n\n**Table 2.** Urea clearance in the three trials\n\n| Trial | Flow arrangement | Membrane area | Urea clearance (mL/min) |\n|---|---|---|---|\n| 1 | countercurrent | 1× | 210 |\n| 2 | concurrent | 1× | 165 |\n| 3 | countercurrent | 2× | 250 |',
    questions: [
      {
        question: 'Based on Table 1, the clearance of creatinine in Trial 1 is closest to:',
        options: ['60 mL/min', '120 mL/min', '150 mL/min', '180 mL/min'],
        correctAnswer: 3,
        explanation:
          'Clearance is the blood flow multiplied by the fraction of solute removed: $K = Q_B (C_{in} - C_{out})/C_{in} = (300\\ \\text{mL/min})(100 - 40)/100 = (300)(0.60) = 180$ mL/min. The value 120 mL/min multiplies the flow by the fraction remaining (40/100) instead of the fraction removed. The value 150 mL/min assumes half of the creatinine was removed. The value 60 mL/min is the concentration drop in mg/L mistaken for a clearance.',
        skill: '5A dialysis clearance from a data table (Skill 4)',
      },
      {
        question: 'Which statement best explains why doubling the membrane area in Trial 3 raised urea clearance by much less than a factor of two?',
        options: [
          'Clearance cannot exceed the blood flow rate, and in Trial 1 it was already a large fraction of that limit',
          'Urea diffuses so slowly that the added membrane area was not reached during the transit time',
          'The larger membrane allowed more urea to re-enter the test solution from the dialysate side',
          'The dialysate became saturated with urea inside the larger dialyzer, halting further net diffusion',
        ],
        correctAnswer: 0,
        explanation:
          'Even a perfect membrane can only remove the urea that the blood delivers; when $C_{out}$ falls to zero, $K = Q_B$ = 300 mL/min. Trial 1 was already at 210 mL/min, so doubling the area could add at most 90 mL/min, and the observed rise to 250 mL/min reflects this flow limit. Urea is a very small molecule that diffuses quickly, so slow diffusion does not explain the result. Dialysate enters with no urea and flows at 500 mL/min, so it is neither a source of urea nor close to saturation with it.',
        skill: '5A diffusion-limited versus flow-limited clearance (Skill 2)',
      },
      {
        question: 'Countercurrent flow produced a higher urea clearance than concurrent flow (Table 2) because, with countercurrent flow:',
        options: [
          'the dialysate and the test solution remain in contact for a longer time',
          'a concentration gradient persists along the whole fiber',
          'urea diffuses faster because the two streams move in opposite directions',
          'the hydrostatic pressure difference across the membrane is larger',
        ],
        correctAnswer: 1,
        explanation:
          'In countercurrent exchange the blood at the exit meets fresh dialysate and the blood at the entrance meets dialysate that has already picked up urea, so at every point along the fiber the test solution is still more concentrated than the adjacent dialysate and diffusion continues. In concurrent flow the two streams approach the same concentration partway along the fiber and net transfer stops. Contact time is set by the flow rates and fiber length, which were unchanged. The diffusion coefficient of urea does not depend on the direction of bulk flow, and the ultrafiltration rate (hydrostatic driving force) was zero in both trials.',
        skill: '5A countercurrent exchange and concentration gradients (Skill 1)',
      },
      {
        question: 'A red blood cell, whose cytoplasm has an osmolarity of about 290 mOsm/L, is placed in a solution whose only solutes are 250 mOsm/L of $\\text{Na}^+$ and $\\text{Cl}^-$ ions and 40 mOsm/L of urea. The cell is expected to:',
        options: [
          'neither swell nor shrink, because the solution is isosmotic with the cytoplasm',
          'shrink, because urea draws water out of the cell by osmosis',
          'swell, because urea enters the cell and the remaining solutes are hypotonic to the cytoplasm',
          'swell, because sodium chloride enters the cell and raises its internal osmolarity',
        ],
        correctAnswer: 2,
        explanation:
          'The solution is isosmotic (290 mOsm/L) but not isotonic. Urea equilibrates across the membrane, so it exerts no sustained osmotic effect; only the 250 mOsm/L of ions are effective osmoles, and that is less than the 290 mOsm/L inside the cell, so water enters and the cell swells. Isosmotic solutions do not guarantee constant cell volume when a permeant solute is present. Urea cannot draw water out because it does not remain confined to one side of the membrane. $\\text{Na}^+$ and $\\text{Cl}^-$ do not freely enter red cells, which is why they count as effective osmoles.',
        skill: '5A osmolarity versus tonicity (Skill 2)',
      },
      {
        question: 'The engineers wish to confirm that the clearance values obtained from Table 1 reflect properties of the solutes and the membrane rather than the particular inlet concentrations used. Which additional experiment would best address this?',
        options: [
          'Repeat Trial 1 using pure water as the dialysate and compare the outlet concentrations',
          'Repeat Trial 1 at a higher blood flow rate and compare the clearance of urea with that of albumin',
          'Repeat Trial 1 with a dialysate that already contains urea and creatinine at their inlet concentrations',
          'Repeat Trial 1 with each solute at several different inlet concentrations and compare the clearances',
        ],
        correctAnswer: 3,
        explanation:
          'If clearance is independent of concentration, as the passage claims, then varying the inlet concentration of each solute should leave its clearance unchanged; that is the direct test. Using pure water changes the dialysate composition (and would create osmotic water movement) rather than testing concentration dependence. Changing the blood flow rate alters the clearance itself and compares two solutes rather than two concentrations. Adding urea and creatinine to the dialysate removes the concentration gradient and would simply show that clearance falls to zero, which tests the driving force, not concentration independence.',
        skill: '5A experimental design: testing concentration independence (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. BIOCHEMISTRY — Reduction potentials of respiratory carriers (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-cp-b-07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Reduction Potentials of the Respiratory Carriers',
    passageText:
      'The electrons removed from fuel molecules during catabolism are passed along a series of carriers in the inner mitochondrial membrane and finally to oxygen. Each carrier can exist in an oxidized and a reduced form, and the tendency of the oxidized form to accept electrons is expressed as a standard reduction potential. Because many of these half-reactions consume or release protons, biochemists use a biochemical standard state in which the potential, $E^{\\circ\\prime}$, is measured at pH 7. Electrons flow spontaneously from a couple of lower $E^{\\circ\\prime}$ to a couple of higher $E^{\\circ\\prime}$, and the standard free-energy change for the transfer of $n$ moles of electrons is $\\Delta G^{\\circ\\prime} = -nF\\Delta E^{\\circ\\prime}$, where $\\Delta E^{\\circ\\prime}$ is the potential of the accepting couple minus that of the donating couple and $F$ = 96.5 kJ·V⁻¹·mol⁻¹.\n\nThe free energy released in the respiratory chain is not used to make ATP directly. Complexes I, III, and IV use it to move protons from the matrix into the intermembrane space, creating a proton-motive force with two components: an electrical potential difference across the membrane (matrix negative) and a pH difference (matrix alkaline). ATP synthase allows protons to return to the matrix and couples their passage to the phosphorylation of ADP, which under the conditions prevailing in the matrix requires about 50 kJ per mole of ATP formed.\n\nTable 1 lists $E^{\\circ\\prime}$ values for several biologically important couples. For a flavin or heme bound within a protein, the value is a property of the whole protein, because the surrounding amino acids alter the relative stability of the oxidized and reduced states, and the same cofactor can therefore have very different potentials in different proteins.\n\nTo measure the potential of cytochrome c, a small soluble heme protein that carries one electron at a time between Complexes III and IV, investigators placed the purified protein in a sealed, oxygen-free cuvette at pH 7 and 25 °C together with a platinum electrode and a mixture of small redox-active dyes. The dyes exchange electrons rapidly with both the electrode and the protein, so that when the electrode is held at a chosen potential the protein comes to equilibrium with it. Cytochrome c absorbs strongly at 550 nm only in its reduced form, so the fraction of the protein in the oxidized state at each potential was calculated from the absorbance at that wavelength. The results are shown in Table 2. For a couple that exchanges $n$ electrons, the Nernst equation predicts that the ratio of oxidized to reduced forms changes tenfold for every $0.059/n$ V change in potential at 25 °C, and that the potential at which the two forms are present in equal amounts is $E^{\\circ\\prime}$.',
    figure:
      '**Table 1.** Standard reduction potentials of selected couples at pH 7 (written as reductions)\n\n| Half-reaction | n | $E^{\\circ\\prime}$ (V) |\n|---|---|---|\n| 2 H⁺ → H₂ | 2 | −0.42 |\n| NAD⁺ + H⁺ → NADH | 2 | −0.32 |\n| Pyruvate → lactate | 2 | −0.19 |\n| Fumarate → succinate | 2 | +0.03 |\n| Ubiquinone (Q) → ubiquinol (QH₂) | 2 | +0.045 |\n| Cytochrome a₃ (Fe³⁺ → Fe²⁺) | 1 | +0.385 |\n| ½ O₂ + 2 H⁺ → H₂O | 2 | +0.82 |\n\n**Table 2.** Redox titration of cytochrome c (pH 7, 25 °C)\n\n| Electrode potential (V) | Fraction of cytochrome c oxidized |\n|---|---|\n| 0.175 | 0.09 |\n| 0.205 | 0.24 |\n| 0.235 | 0.50 |\n| 0.265 | 0.76 |\n| 0.295 | 0.91 |',
    questions: [
      {
        question: 'According to Table 1, which of the following could be reduced by NADH but NOT by succinate under biochemical standard conditions?',
        options: ['Pyruvate', 'Ubiquinone', 'Cytochrome a₃', 'H⁺ (to H₂)'],
        correctAnswer: 0,
        explanation:
          'A donor reduces an acceptor spontaneously only if the acceptor couple has the higher $E^{\\circ\\prime}$. NADH (couple at −0.32 V) can reduce pyruvate (−0.19 V), but succinate (couple at +0.03 V) cannot, because the pyruvate couple lies below it. Ubiquinone (+0.045 V) and cytochrome a₃ (+0.385 V) lie above both donor couples, so either NADH or succinate can reduce them. The H⁺/H₂ couple (−0.42 V) lies below both, so neither donor can reduce it.',
        skill: '5E direction of electron transfer from reduction potentials (Skill 2)',
      },
      {
        question: 'Based on Table 2, the standard reduction potential of cytochrome c at pH 7 is closest to:',
        options: ['0.175 V', '0.205 V', '0.235 V', '0.295 V'],
        correctAnswer: 2,
        explanation:
          'At $E^{\\circ\\prime}$ the oxidized and reduced forms are equal in concentration, and Table 2 shows the fraction oxidized reaching 0.50 at 0.235 V. The spacing of the data confirms a one-electron couple: 0.060 V above the midpoint the ratio of oxidized to reduced forms is about 10:1 (fraction oxidized 0.91), as the Nernst equation predicts for $n$ = 1. The value 0.175 V is where the protein is about 90% reduced; 0.205 V and 0.295 V are the points at which the protein is roughly one-quarter and nine-tenths oxidized, respectively.',
        skill: '5E reading a redox titration table (Skill 4)',
      },
      {
        question: 'Using Tables 1 and 2, the standard free energy released when two electrons pass from reduced cytochrome c to oxygen (forming water) is enough to support the synthesis of at most how many ATP under the conditions described in the passage?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation:
          '$\\Delta E^{\\circ\\prime} = 0.82 - 0.235 = 0.585$ V, and for two electrons $\\Delta G^{\\circ\\prime} = -(2)(96.5)(0.585) \\approx -113$ kJ/mol. At about 50 kJ per mole of ATP, 113 kJ supports two ATP (113/50 = 2.3, which rounds down because a third ATP would require 150 kJ). One ATP underestimates the energy available; three or four ATP would require more free energy than this step releases. (In cells Complex IV actually supports roughly one ATP, because some of the energy is lost as heat and the proton stoichiometry is not perfectly efficient.)',
        skill: '5E ΔG°′ = −nFΔE°′ and ATP yield (Skill 2)',
      },
      {
        question: 'The investigators repeat the titration using a tenfold higher concentration of cytochrome c. Compared with Table 2, the potential at which half of the protein is oxidized would be expected to:',
        options: [
          'shift higher by about 0.059 V, because the Nernst equation contains a logarithmic concentration term',
          'shift lower by about 0.059 V, because more reduced protein is present at every potential',
          'shift higher by about 0.030 V, because the couple exchanges one electron rather than two',
          'remain the same, because the potential depends on the ratio of the two forms',
        ],
        correctAnswer: 3,
        explanation:
          'The Nernst equation relates the potential to the ratio [oxidized]/[reduced]; multiplying both concentrations by ten leaves the ratio, and therefore the midpoint potential, unchanged. The logarithmic term involves the ratio, not the absolute concentration, so no 0.059 V shift occurs in either direction. The 0.030 V spacing would apply to the tenfold ratio change of a two-electron couple, but cytochrome c exchanges one electron and in any case concentration does not shift the midpoint.',
        skill: '5E predicting the outcome of a modified experiment (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PHYSICS — Force, drift velocity, and mobility in electrophoresis (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-cp-b-08',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Drift of Charged DNA in an Electric Field',
    passageText:
      'Electrophoresis separates charged molecules by their motion through a fluid under an applied electric field. In the simplest arrangement, two electrodes separated by a distance $d$ are held at a potential difference $V$ by a power supply, producing a nearly uniform field of magnitude $E = V/d$ in the buffer solution between them. A particle carrying net charge $q$ experiences a force $F = qE$ directed along the field for positive charge and against it for negative charge. Each phosphate group along a DNA backbone carries one negative charge at neutral pH, so a double-stranded DNA fragment of $N$ base pairs carries a charge of about $-2Ne$, where $e$ is the elementary charge.\n\nA particle moving through a liquid does not accelerate indefinitely. As its speed increases it experiences a viscous drag force proportional to its speed, $F_{drag} = fv$, where $f$ is the friction coefficient; for a sphere of radius $r$ in a fluid of viscosity $\\eta$, $f = 6\\pi\\eta r$. Within microseconds of the field being switched on the particle settles to a steady drift speed. The ratio of drift speed to field strength, $\\mu = v/E$, is called the electrophoretic mobility and is a property of the particle and the medium.\n\nIn free solution the mobility of DNA is nearly independent of its length: a longer fragment carries proportionally more charge but also drags proportionally more solvent along with it, and the two effects cancel. To separate fragments by length, electrophoresis is therefore run in a gel, a water-swollen network of polymer fibers whose pores are comparable in size to the molecules being separated. A fragment longer than the pore size must thread its way through the network and is repeatedly delayed by collisions with the fibers, so its drift speed falls as its length increases. Over a limited range the migration distance decreases roughly linearly with the logarithm of fragment length, which allows an unknown fragment to be sized by comparison with standards of known length run in the same gel.\n\nInvestigators measured the drift speed of a 1,000-base-pair DNA fragment in buffer alone and in a 1% agarose gel, and that of a 5,000-base-pair fragment in the same gel, at several field strengths at 25 °C. Speeds were obtained by tracking fluorescently labeled fragments under a microscope, and the results are shown in Figure 1. The apparatus used in the study had electrodes 20 cm apart and was operated at voltages between 0 and 200 V. The investigators noted that the current through the buffer rose in proportion to the applied voltage and that at the highest voltages the buffer warmed noticeably during a run.',
    chart: {
      title: 'Figure 1. Drift speed of DNA fragments versus electric field strength (25 °C)',
      kind: 'line',
      xLabel: 'Field strength',
      xUnit: 'V/cm',
      yLabel: 'Drift speed',
      yUnit: 'μm/s',
      xValues: [0, 2, 4, 6, 8, 10],
      yValues: [0, 8, 16, 24, 32, 40],
      seriesLabel: '1,000 bp, free solution',
      comparisonSeries: [
        { label: '1,000 bp, 1% agarose gel', yValues: [0, 2, 4, 6, 8, 10] },
        { label: '5,000 bp, 1% agarose gel', yValues: [0, 1, 2, 3, 4, 5] },
      ],
    },
    questions: [
      {
        question: 'When the apparatus described in the passage is operated at 200 V, the magnitude of the electric force on a 1,000-base-pair fragment is closest to: ($e = 1.6 \\times 10^{-19}$ C)',
        options: ['$3.2 \\times 10^{-15}$ N', '$1.6 \\times 10^{-13}$ N', '$3.2 \\times 10^{-13}$ N', '$3.2 \\times 10^{-11}$ N'],
        correctAnswer: 2,
        explanation:
          'The field is $E = V/d = 200\\ \\text{V}/0.20\\ \\text{m} = 1000$ V/m. A 1,000-bp fragment carries about $2Ne = 2000(1.6 \\times 10^{-19}) = 3.2 \\times 10^{-16}$ C, so $F = qE = (3.2 \\times 10^{-16})(1000) = 3.2 \\times 10^{-13}$ N, directed toward the positive electrode because the charge is negative. The $1.6 \\times 10^{-13}$ N value counts one charge per base pair instead of two. The $3.2 \\times 10^{-15}$ N value treats 10 V/cm as 10 V/m, and the $3.2 \\times 10^{-11}$ N value treats the 20 cm electrode spacing as 0.20 cm.',
        skill: '4C force on a charge in a uniform field (Skill 2)',
      },
      {
        question: 'Based on Figure 1, the electrophoretic mobility of the 1,000-base-pair fragment in free solution is closest to:',
        options: ['$1 \\times 10^{-4}$ cm²·V⁻¹·s⁻¹', '$4 \\times 10^{-4}$ cm²·V⁻¹·s⁻¹', '$1 \\times 10^{-3}$ cm²·V⁻¹·s⁻¹', '$4 \\times 10^{-3}$ cm²·V⁻¹·s⁻¹'],
        correctAnswer: 1,
        explanation:
          'Mobility is the slope of the drift-speed line. In free solution the speed reaches 40 μm/s at 10 V/cm; converting, $40\\ \\mu\\text{m/s} = 4.0 \\times 10^{-3}$ cm/s, so $\\mu = v/E = (4.0 \\times 10^{-3}\\ \\text{cm/s})/(10\\ \\text{V/cm}) = 4 \\times 10^{-4}$ cm²·V⁻¹·s⁻¹. The $1 \\times 10^{-4}$ value is the slope of the 1,000-bp line in the gel, not in free solution. The $4 \\times 10^{-3}$ value forgets to divide by the field strength, and $1 \\times 10^{-3}$ mixes the gel speed with the wrong field.',
        skill: '4C mobility as the slope of a drift-speed plot (Skill 4)',
      },
      {
        question: 'The drift speed of a fragment becomes constant shortly after the field is applied because:',
        options: [
          'the electric force on the fragment weakens as the fragment moves away from the electrode',
          'the field inside a conducting buffer falls to zero once current begins to flow',
          'the charge of the fragment is gradually neutralized by counterions in the buffer',
          'the drag force grows with speed until it balances the electric force, leaving no net force',
        ],
        correctAnswer: 3,
        explanation:
          'By Newton’s second law a particle accelerates only while there is a net force. The electric force $qE$ is constant in a uniform field, while the drag force $fv$ increases with speed; when $fv = qE$ the net force is zero and the particle moves at a constant terminal speed $v = qE/f$. The field between parallel electrodes is uniform, so the electric force does not weaken with position. A steady current in the buffer requires a nonzero field, so the field does not vanish. Counterions screen but do not eliminate the fragment’s charge, and this screening is established before the field is applied rather than developing over time.',
        skill: '4A balanced forces and terminal velocity (Skill 1)',
      },
      {
        question: 'If the 1,000-base-pair fragment is run in the 1% agarose gel at 10 V/cm, approximately how far does it migrate in 30 minutes?',
        options: ['0.6 cm', '1.2 cm', '1.8 cm', '7.2 cm'],
        correctAnswer: 2,
        explanation:
          'From Figure 1, the 1,000-bp fragment moves at 10 μm/s in the gel at 10 V/cm. In 30 min = 1800 s it travels $(10\\ \\mu\\text{m/s})(1800\\ \\text{s}) = 18{,}000\\ \\mu\\text{m} = 1.8$ cm. The 7.2 cm value uses the free-solution speed of 40 μm/s rather than the gel speed. The 0.6 cm value uses 10 minutes instead of 30, and the 1.2 cm value corresponds to 20 minutes.',
        skill: '4C migration distance from speed and time (Skill 2)',
      },
      {
        question: 'Which observation from Figure 1 provides the strongest evidence that the gel separates fragments by sieving rather than by altering their charge?',
        options: [
          'The longer fragment is slower than the shorter one in the gel',
          'The free-solution drift speed increases linearly with field strength',
          'The 1,000-base-pair fragment moves more slowly in the gel than in free solution',
          'Both gel curves are straight lines that pass through the origin of the plot',
        ],
        correctAnswer: 0,
        explanation:
          'The two fragments have the same charge per unit length, so if the gel acted only on charge both would be slowed equally; the fact that the longer fragment is slowed more shows that the delay depends on size, which is the signature of sieving by the pore network. A lower speed in the gel than in solution is consistent with either explanation, since extra friction or reduced effective charge would both lower the speed. Linear speed-versus-field behavior, in solution or in the gel, shows only that mobility is constant at each condition and says nothing about what sets its value.',
        skill: '4C evaluating evidence for a proposed mechanism (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Gases in anesthesia: vapor pressure, Dalton, real gases (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Delivering Volatile Anesthetics as Vapors',
    passageText:
      'Most general anesthetics used in operating rooms are volatile liquids whose vapors are inhaled. Sevoflurane and isoflurane are halogenated ethers that are liquids at room temperature; desflurane boils at 22.8 °C; and nitrous oxide (N₂O) is a gas at room temperature and atmospheric pressure but is stored as a liquid under pressure in cylinders. These agents act in the brain, and the depth of anesthesia depends on the partial pressure of the agent in the alveoli, which after a period of equilibration approximates its partial pressure in arterial blood and in the brain.\n\nA liquid in a closed container evaporates until the pressure of its vapor reaches a value, the vapor pressure, that depends only on the identity of the liquid and the temperature. At 20 °C the vapor pressure of sevoflurane is about 160 mmHg and that of isoflurane about 240 mmHg. A vaporizer exploits this property. A stream of carrier gas, usually oxygen or an oxygen–air mixture, is split: part passes through a chamber containing the liquid agent, where it becomes saturated with vapor, while the remainder bypasses the chamber. The two streams recombine, and a dial sets the ratio of the two flows and hence the final concentration of agent delivered to the patient, which is expressed as a percentage by volume. The vaporizer is temperature compensated, because evaporation cools the liquid and a cooler liquid has a lower vapor pressure.\n\nIn a mixture of gases that behave ideally, each component exerts a partial pressure equal to the product of its mole fraction and the total pressure, and the total pressure is the sum of the partial pressures (Dalton’s law). Because volume fractions and mole fractions are identical for ideal gases, a dial setting of 2% sevoflurane at sea level corresponds to a partial pressure of about 15 mmHg in the inspired gas.\n\nThe potency of an inhaled anesthetic is described by its minimum alveolar concentration (MAC), the alveolar concentration, expressed as a volume percentage at a total pressure of one atmosphere, at which half of patients do not move in response to a surgical incision. Sevoflurane has a MAC of about 2%, isoflurane about 1.2%, and nitrous oxide about 105%, so nitrous oxide cannot by itself produce surgical anesthesia at ordinary pressure. Because the effect is produced by molecules dissolved in neural membranes, and the number of molecules dissolved at equilibrium is proportional to the partial pressure in the gas phase, MAC is more fundamentally a partial pressure than a concentration, and anesthesiologists working far above sea level must take this into account.\n\nAnesthetic vapors are delivered at partial pressures of only a few mmHg to a few hundred mmHg, where the ideal gas law describes them well. The gases in the supply cylinders are another matter. Oxygen is stored at about 150 atm, where the molecules are close enough together that intermolecular attractions and the finite volume of the molecules themselves become noticeable, and the ideal gas law is only an approximation. Nitrous oxide has a critical temperature of 36.5 °C; below that temperature it can be liquefied by pressure alone, so a full cylinder at room temperature contains liquid N₂O beneath its own vapor at a pressure of about 50 atm.',
    questions: [
      {
        question: 'At 20 °C and a total pressure of 760 mmHg, the maximum mole fraction of sevoflurane in the gas leaving the vaporizing chamber is closest to:',
        options: ['0.021', '0.21', '0.32', '0.79'],
        correctAnswer: 1,
        explanation:
          'Gas leaving the chamber is saturated with vapor, so the partial pressure of sevoflurane equals its vapor pressure, 160 mmHg. By Dalton’s law the mole fraction is the partial pressure divided by the total pressure: $160/760 \\approx 0.21$. The value 0.79 is the mole fraction of the carrier gas, not the anesthetic. The value 0.32 is the corresponding fraction for isoflurane (240/760). The value 0.021 is a power-of-ten slip that happens to match the clinical dial setting, which is reached only after dilution by the bypass stream.',
        skill: '4B vapor pressure, Dalton’s law, and mole fraction (Skill 2)',
      },
      {
        question: 'A hospital at high altitude has an ambient pressure of 570 mmHg. To provide sevoflurane at the same inspired partial pressure that a 2.0% mixture provides at sea level, the inspired gas at this hospital must contain sevoflurane at a volume percentage of approximately:',
        options: ['1.5%', '2.0%', '2.7%', '4.0%'],
        correctAnswer: 2,
        explanation:
          'Partial pressure equals mole fraction times total pressure. At sea level 2.0% of 760 mmHg is about 15 mmHg; at 570 mmHg the required fraction is $15/570 \\approx 0.027$, or equivalently $2.0\\% \\times (760/570) = 2.7\\%$. A 2.0% mixture at this pressure would provide only about 11 mmHg, roughly three-quarters of the intended partial pressure, and 1.5% scales the fraction in the wrong direction. A 4.0% mixture doubles the sea-level fraction, far more than the 33% increase the pressure ratio calls for.',
        skill: '4B partial pressure at reduced total pressure (Skill 2)',
      },
      {
        question: 'The pressure gauge on a cylinder of nitrous oxide reads a nearly constant value for a long time during use and then falls rapidly. Which of the following best explains this behavior?',
        options: [
          'Nitrous oxide deviates strongly from ideal behavior at high pressure, so the gauge reads inaccurately until the pressure is low',
          'The cylinder valve restricts the flow so that the internal pressure cannot change until the valve is fully opened',
          'The temperature of the cylinder rises during use, offsetting the loss of gas until the cylinder is nearly empty',
          'Liquid nitrous oxide in the cylinder maintains the vapor at a fixed pressure until the last of the liquid has evaporated',
        ],
        correctAnswer: 3,
        explanation:
          'Below its critical temperature nitrous oxide exists in the cylinder as a liquid in equilibrium with its vapor, and the pressure of a vapor above its liquid is the vapor pressure, which depends only on temperature. As gas is withdrawn, more liquid evaporates to replace it, so the gauge stays near the vapor pressure until no liquid remains; only then does the pressure fall as the remaining gas is used. Non-ideal behavior changes the relation between pressure and amount somewhat but does not make the pressure constant. A valve cannot hold the internal pressure fixed while the contents are leaving. Evaporation cools the cylinder rather than warming it, and a temperature change could not keep the pressure constant for most of the cylinder’s life.',
        skill: '4B vapor–liquid equilibrium in a pressurized cylinder (Skill 1)',
      },
      {
        question: 'Under which of the following conditions would the behavior of oxygen deviate MOST from the predictions of the ideal gas law?',
        options: ['150 atm and −20 °C', '150 atm and 60 °C', '1 atm and −20 °C', '1 atm and 60 °C'],
        correctAnswer: 0,
        explanation:
          'The ideal gas law assumes that molecules occupy no volume and exert no forces on one another. High pressure packs the molecules closely, making their own volume a significant fraction of the container and bringing them within range of intermolecular attractions, and low temperature reduces their kinetic energy so that those attractions have a larger effect on their motion. Both conditions therefore favor deviation, and the combination of 150 atm and −20 °C deviates most. At 1 atm the molecules are so far apart that behavior is nearly ideal at either temperature, and at 150 atm the higher temperature reduces, but does not eliminate, the deviation.',
        skill: '4B conditions for non-ideal gas behavior (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Alcohols, ethers, and epoxides (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl5-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Alcohols, Ethers, and the Reactivity of Epoxides',
    passageText:
      'Alcohols, ethers, and epoxides all contain an sp³-hybridized oxygen bearing two lone pairs, yet their chemistry differs markedly. An alcohol has an O–H bond that can donate a hydrogen bond, so alcohols boil far above alkanes and ethers of similar mass and dissolve readily in water when the carbon chain is short. The O–H bond is weakly acidic: the pKa of a simple alcohol is about 16 to 18, so hydroxide removes only a small fraction of the protons, and complete conversion to the alkoxide requires a stronger base such as sodium hydride or a reactive metal such as sodium. Electron-withdrawing substituents near the hydroxyl stabilize the alkoxide and lower the pKa. Because hydroxide is a poor leaving group, substitution at the carbon bearing an alcohol usually requires that the oxygen first be protonated or converted into a better leaving group.\n\nEthers have no O–H bond. They cannot donate hydrogen bonds, boil at about the temperature of alkanes of similar mass, and are nearly inert toward bases, nucleophiles, and mild oxidants, which makes them useful solvents. They are cleaved only by strong acids with nucleophilic conjugate bases, such as HBr or HI, which protonate the ether oxygen and then displace an alcohol from the protonated ether. The most general synthesis of an ether is the Williamson synthesis, in which an alkoxide displaces a halide from an alkyl halide. Because the alkoxide is both a strong nucleophile and a strong base, the reaction succeeds with methyl and primary halides and fails with tertiary halides, which undergo elimination instead.\n\nEpoxides are three-membered cyclic ethers. Their C–O–C bond angle of about 60° is far from the tetrahedral value, so the ring carries substantial strain, and opening the ring releases that strain. Epoxides are therefore far more reactive than ordinary ethers. They are prepared by treating an alkene with a peroxyacid, which delivers an oxygen atom to one face of the double bond and preserves the alkene’s geometry, or by treating a halohydrin with base, in which the alkoxide displaces the halide intramolecularly.\n\nEpoxides open under two sets of conditions. A strong nucleophile such as an alkoxide, a thiolate, a Grignard reagent, or hydride attacks the ring directly in an SN2 manner, adding to the less hindered carbon from the side opposite the oxygen. Under acidic conditions the epoxide oxygen is first protonated, which makes the ring a much better leaving group; a weak nucleophile such as water or an alcohol then attacks, still from the side opposite the oxygen, but preferentially at the more substituted carbon, because that carbon bears more of the positive charge in the transition state. In either case a cyclic epoxide gives a product in which the two new substituents are trans to each other. Acid-catalyzed hydrolysis of an epoxide is thus a route to anti-1,2-diols, complementing the syn addition of two hydroxyl groups achieved by osmium tetroxide or by cold, dilute potassium permanganate.\n\nBecause hydroxyl groups react with strong bases, organometallic reagents, and oxidants, a hydroxyl is often protected when another part of the molecule must be transformed. Converting it to a silyl ether with a trialkylsilyl chloride and a mild base masks the O–H; the silyl ether is inert to the subsequent reagents and is removed afterward with a fluoride salt, regenerating the alcohol.',
    questions: [
      {
        question: 'Treatment of 2-methyloxirane (propylene oxide) with sodium methoxide in methanol, followed by neutralization, gives mainly:',
        options: ['2-methoxy-1-propanol', '1-methoxy-2-propanol', '1,2-dimethoxypropane', '1,2-propanediol'],
        correctAnswer: 1,
        explanation:
          'Methoxide is a strong nucleophile, so it opens the epoxide by SN2 attack at the less hindered carbon, the CH₂ of the ring, placing the methoxy group on C-1 and leaving the alkoxide on C-2, which becomes a hydroxyl on neutralization: $\\text{CH}_3\\text{OCH}_2\\text{CH(OH)CH}_3$, 1-methoxy-2-propanol. 2-Methoxy-1-propanol is the product expected under acidic conditions, where the more substituted carbon is attacked. The diether would require a second substitution at the hydroxyl, which does not occur under these conditions, and the diol forms only if water, not methoxide, is the nucleophile.',
        skill: '5D regiochemistry of epoxide opening under basic conditions (Skill 1)',
      },
      {
        question: 'Which reagent sequence converts cyclohexene into trans-1,2-cyclohexanediol?',
        options: [
          'cold, dilute KMnO₄ in base',
          'OsO₄, then aqueous NaHSO₃',
          'H₂O with catalytic H₂SO₄',
          'a peroxyacid, then aqueous acid',
        ],
        correctAnswer: 3,
        explanation:
          'A peroxyacid converts the alkene to cyclohexene oxide, and acid-catalyzed hydrolysis opens the ring with water attacking from the side opposite the oxygen, so the two hydroxyl groups end up trans (anti addition overall). Cold, dilute permanganate and osmium tetroxide both deliver two hydroxyls to the same face of the double bond and give the cis diol. Aqueous acid alone adds water across the double bond once, giving cyclohexanol rather than a diol.',
        skill: '5D syn versus anti dihydroxylation (Skill 1)',
      },
      {
        question: 'Which pair of reagents is best suited to preparing tert-butyl methyl ether, $(\\text{CH}_3)_3\\text{COCH}_3$, by the Williamson synthesis?',
        options: [
          'sodium methoxide and 2-bromo-2-methylpropane',
          'potassium tert-butoxide and methanol',
          'potassium tert-butoxide and bromomethane',
          'tert-butanol and methanol with catalytic sulfuric acid',
        ],
        correctAnswer: 2,
        explanation:
          'The Williamson synthesis joins an alkoxide to an alkyl halide by SN2 displacement, so the halide must be methyl or primary; the only workable disconnection of tert-butyl methyl ether therefore uses the tertiary alkoxide, tert-butoxide, as the nucleophile and bromomethane as the electrophile. Pairing methoxide with the tertiary bromide fails because the strongly basic alkoxide cannot attack a tertiary carbon and instead causes E2 elimination to 2-methylpropene. tert-Butoxide and methanol simply exchange a proton, because hydroxide is too poor a leaving group for methanol to be displaced. Acid-catalyzed condensation of alcohols is not the Williamson route, and with a tertiary alcohol acid mainly causes dehydration to the alkene.',
        skill: '5D choosing substrates for the Williamson ether synthesis (Skill 1)',
      },
      {
        question: 'When trans-2-chlorocyclohexanol is treated with sodium hydroxide it is rapidly converted to cyclohexene oxide, whereas the cis isomer under the same conditions is not. The best explanation is that:',
        options: [
          'only in the trans isomer can the alkoxide oxygen reach the carbon bearing chlorine from the side opposite the chlorine',
          'the cis isomer forms an intramolecular hydrogen bond that prevents hydroxide from removing the hydroxyl proton',
          'the trans isomer is the more stable diastereomer and therefore has the lower activation energy for ring closure',
          'the chlorine of the cis isomer is more hindered, so hydroxide displaces it directly to give a diol instead',
        ],
        correctAnswer: 0,
        explanation:
          'Epoxide formation from a halohydrin is an intramolecular SN2 reaction: the alkoxide must attack the carbon bearing the halide from the back side, which requires the oxygen and the chlorine to be anti to each other. In the trans isomer a ring flip places both groups axial and anti, allowing backside attack; in the cis isomer the two groups can never be anti, so ring closure is geometrically impossible. Hydroxide removes the hydroxyl proton of either isomer, and an intramolecular hydrogen bond, if present, would not prevent deprotonation. Greater thermodynamic stability of a starting material does not lower an activation energy. Direct displacement of a secondary chloride by hydroxide is slow and would be no more favorable in the cis isomer.',
        skill: '5D stereochemical requirement of intramolecular SN2 (Skill 2)',
      },
    ],
  },
]

export const FL5_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl5-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A parallel-plate capacitor is charged by a battery and then disconnected from it. A slab of dielectric is then inserted so that it fills the space between the plates. Which of the following quantities increases as a result?',
    options: [
      'the charge on each plate',
      'the capacitance of the capacitor',
      'the potential difference between the plates',
      'the energy stored in the capacitor',
    ],
    correctAnswer: 1,
    explanation:
      'The dielectric becomes polarized in the field of the plates, and its induced charges set up an opposing field that reduces the net field between the plates by the factor κ. With the battery disconnected the plate charge is trapped, so a smaller field means a smaller potential difference ($V = Ed$), and because $C = Q/V$ the capacitance rises by the factor κ. The stored energy $U = Q^2/2C$ falls by the same factor; the work the slab does as it is pulled into the gap accounts for the difference. Charge could change only if the battery were still connected.',
    skill: '4C capacitor with a dielectric, battery disconnected (Skill 1)',
  },
  {
    id: 'fl5-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A worker pushes a 20 kg crate 5.0 m across a horizontal floor at constant speed. The coefficient of kinetic friction between crate and floor is 0.40, and $g = 10\\ \\text{m/s}^2$. How much thermal energy is generated in the crate and floor?',
    options: ['80 J', '100 J', '400 J', '1000 J'],
    correctAnswer: 2,
    explanation:
      'At constant speed the push balances kinetic friction, $f = \\mu_k N = (0.40)(20\\ \\text{kg})(10\\ \\text{m/s}^2) = 80$ N. The work done against friction, $W = fd = (80\\ \\text{N})(5.0\\ \\text{m}) = 400$ J, is dissipated entirely as thermal energy because the kinetic energy of the crate does not change. The value 80 J is the friction force mistaken for an energy; 100 J is the product of mass and distance; 1000 J is $mgd$, the work that would be needed to lift the crate 5.0 m rather than slide it.',
    skill: '4A work against friction converted to heat (Skill 2)',
  },
  {
    id: 'fl5-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'The visible emission spectrum of atomic hydrogen consists of a few sharp lines rather than a continuous band of color. This observation is explained by the fact that:',
    options: [
      'the electron radiates continuously as it orbits, but only a few frequencies escape the atom',
      'hydrogen atoms in the discharge tube collide with one another at only a few specific speeds',
      'the single proton of the nucleus can absorb and re-emit photons of only a few specific energies',
      'only certain electron energies are allowed, so only certain photon energies are emitted',
    ],
    correctAnswer: 3,
    explanation:
      'In the Bohr model the electron’s energy is quantized, $E_n = -13.6\\ \\text{eV}/n^2$, and a photon is emitted only when the electron drops from one allowed level to a lower one, carrying away exactly the energy difference; a limited set of differences gives a limited set of wavelengths. An orbiting electron that radiated continuously would produce a continuous spectrum and would spiral into the nucleus, which is precisely what the Bohr model rejects. Atomic collision speeds follow a continuous distribution and do not set the line positions. The nucleus does not take part in the electronic transitions that produce visible light.',
    skill: '4E Bohr model and discrete emission lines (Skill 1)',
  },
  {
    id: 'fl5-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'For the reaction N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), $K_c = 4.0$ at a certain temperature. A sealed vessel at that temperature contains 2.0 M N₂, 1.0 M H₂, and 4.0 M NH₃. Which of the following describes the mixture?',
    options: [
      '$Q < K$, so the concentration of NH₃ will increase',
      '$Q < K$, so the concentration of NH₃ will decrease',
      '$Q > K$, so the concentration of NH₃ will increase',
      '$Q > K$, so the concentration of NH₃ will decrease',
    ],
    correctAnswer: 3,
    explanation:
      'The reaction quotient is $Q = [\\text{NH}_3]^2/([\\text{N}_2][\\text{H}_2]^3) = (4.0)^2/[(2.0)(1.0)^3] = 16/2 = 8.0$. Because $Q > K$, the ratio of products to reactants is too high, and the reaction proceeds in reverse, consuming NH₃ and forming N₂ and H₂ until $Q$ falls to 4.0. A value of $Q$ below $K$ would drive the reaction forward, but that is not the case here, and a system with $Q > K$ cannot increase its product concentration further.',
    skill: '5E reaction quotient versus equilibrium constant (Skill 2)',
  },
  {
    id: 'fl5-cp-b-d05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'A molecule contains a single stereocenter bonded to –NH₂, –CO₂H, –CH₃, and –H. When the molecule is viewed with the hydrogen pointing away from the viewer, the path from –NH₂ to –CO₂H to –CH₃ runs clockwise. The molecule is:',
    options: [
      'R, and it rotates plane-polarized light clockwise',
      'R, but the direction of its optical rotation cannot be predicted',
      'S, and it rotates plane-polarized light counterclockwise',
      'S, but the direction of its optical rotation cannot be predicted',
    ],
    correctAnswer: 1,
    explanation:
      'Priorities follow atomic number at the first point of difference: N (–NH₂) outranks the two carbons, and the carboxyl carbon (attached to O, O, O) outranks the methyl carbon (H, H, H), while H is lowest. With the lowest-priority group pointing away, a clockwise path from highest to third priority means the R configuration. The R/S designation describes the spatial arrangement only; the sign of optical rotation is an experimental property with no fixed relationship to the configuration, so neither (+) nor (−) can be deduced. The S options reverse the sense of rotation of the priority sequence.',
    skill: '5D assigning R/S configuration (Skill 2)',
  },
  {
    id: 'fl5-cp-b-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Which of the following best distinguishes a prosthetic group, such as the heme of a cytochrome, from a cosubstrate-type coenzyme, such as NAD⁺?',
    options: [
      'A prosthetic group stays bound during catalysis, whereas NAD⁺ dissociates and is regenerated elsewhere',
      'A prosthetic group is always an inorganic metal ion, whereas NAD⁺ and all other coenzymes are organic molecules',
      'A prosthetic group participates only in allosteric regulation, whereas NAD⁺ takes part directly in the catalytic reaction',
      'A prosthetic group is synthesized entirely by the cell itself, whereas NAD⁺ must be obtained intact from the diet',
    ],
    correctAnswer: 0,
    explanation:
      'Cofactors are nonprotein components required for enzyme activity; organic cofactors are coenzymes. A prosthetic group is a cofactor, organic or inorganic, that remains tightly or covalently bound to the enzyme and is regenerated in place during each catalytic cycle, whereas a cosubstrate such as NAD⁺ binds, is converted (to NADH), dissociates, and is restored to its original form by a different enzyme. Prosthetic groups include organic molecules such as heme, FAD in many flavoproteins, and biotin, so they are not limited to metal ions. Both types participate directly in catalysis rather than in allosteric regulation. NAD⁺ is assembled by the cell from the vitamin niacin, not absorbed intact.',
    skill: '5D cofactor, coenzyme, and prosthetic group (Skill 1)',
  },
  {
    id: 'fl5-cp-b-d07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A 0.10 M aqueous solution of a weak monoprotic acid HA has $K_a = 1.0 \\times 10^{-5}$. The percentage of the acid molecules that are ionized is approximately:',
    options: ['1.0%', '2.0%', '3.2%', '10%'],
    correctAnswer: 0,
    explanation:
      'For a weak acid with small $K_a$, $[\\text{H}^+] \\approx \\sqrt{K_a C} = \\sqrt{(1.0 \\times 10^{-5})(0.10)} = \\sqrt{1.0 \\times 10^{-6}} = 1.0 \\times 10^{-3}$ M, so the fraction ionized is $(1.0 \\times 10^{-3})/(0.10) = 0.010$, or 1.0%. The approximation is valid because 1% ionization barely changes the acid concentration. The 3.2% value would apply to a 0.010 M solution (percent ionization rises on dilution); 10% confuses $\\sqrt{K_a C}$ with $\\sqrt{K_a/C}$; and 2.0% has no basis in the calculation.',
    skill: '5A percent ionization of a weak acid (Skill 2)',
  },
]
