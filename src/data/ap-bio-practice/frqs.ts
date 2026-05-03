import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology — Free Response.
 * Mirrors official CB exam structure (Section II, 90 minutes):
 *   FRQ 1 — Long (Interpreting & Evaluating Experimental Results)            ~10 pts
 *   FRQ 2 — Long (Interpreting & Evaluating Experimental Results w/ Stats)   ~8 pts
 *   FRQ 3 — Short (Scientific Investigation)                                  ~4 pts
 *   FRQ 4 — Short (Conceptual Analysis)                                       ~4 pts
 *   FRQ 5 — Short (Analyze Model or Visual Representation)                    ~4 pts
 *   FRQ 6 — Short (Analyze Data)                                              ~4 pts
 */

export const FRQS: SAQItem[] = [
  /* ---------- FRQ 1 — LONG (Enzyme experiment) ---------- */
  {
    type: 'saq',
    topic: 'unit-3-cellular-energetics',
    prompt:
      'FRQ 1 — Long: Interpreting Experimental Results.\n\n' +
      'Researchers studied the activity of the enzyme catalase, which catalyzes the breakdown of hydrogen peroxide (H₂O₂) into water and oxygen gas. Five test tubes were set up, each containing the same concentration of catalase and H₂O₂. Each tube was placed at a different temperature, and the rate of O₂ production (mL O₂/min) was measured.\n\n' +
      '   Tube   Temperature (°C)   O₂ produced (mL/min)\n' +
      '    A           5                    1.0\n' +
      '    B          25                    4.5\n' +
      '    C          37                    8.0  (peak)\n' +
      '    D          50                    2.5\n' +
      '    E          70                    0.1\n',
    parts: [
      {
        letter: 'A',
        question:
          '(i) Identify the INDEPENDENT and DEPENDENT variables in this experiment. (ii) Identify ONE controlled variable.',
        rubric: [
          { id: 'a1', label: '1 pt — IV = temperature; DV = rate of O₂ produced (mL O₂/min)', description: 'Both correctly identified.' },
          { id: 'a2', label: '1 pt — Controlled variable (e.g., catalase concentration, H₂O₂ concentration, reaction time, pH, volume of solution)', description: 'Any reasonable controlled variable.' },
        ],
      },
      {
        letter: 'B',
        question:
          'Describe how to construct a graph of the data and identify the optimum temperature for catalase. Justify your identification of the optimum temperature.',
        rubric: [
          { id: 'b1', label: '1 pt — Graph: temperature on x-axis, O₂ rate on y-axis; properly labeled with units; data plotted as line/scatter; appropriate scale', description: 'Standard scientific graph conventions.' },
          { id: 'b2', label: '1 pt — Optimum temperature ≈ 37 °C, justified by maximum reaction rate (8.0 mL/min) at that temperature', description: 'Must explicitly identify 37 °C as optimum AND cite the highest rate.' },
        ],
      },
      {
        letter: 'C',
        question:
          'Explain in terms of enzyme structure WHY the reaction rate decreases sharply between 50 °C and 70 °C.',
        rubric: [
          { id: 'c1', label: '1 pt — At high temperatures, the enzyme is denatured (loss of tertiary structure), so the active site can no longer bind substrate effectively', description: 'Must explicitly mention denaturation OR loss of structure of the active site.' },
        ],
      },
      {
        letter: 'D',
        question:
          'A student hypothesizes that adding a competitive inhibitor (which competes with H₂O₂ for the active site) at 37 °C will decrease the reaction rate. Predict the effect on reaction rate at 37 °C and explain how the rate could be RESTORED to its uninhibited value.',
        rubric: [
          { id: 'd1', label: '1 pt — Reaction rate decreases when a competitive inhibitor is added', description: 'Must state inhibitor reduces rate.' },
          { id: 'd2', label: '1 pt — Rate can be restored by adding more H₂O₂ (substrate) — competitive inhibition is overcome by increasing substrate concentration', description: 'Must specifically identify increasing substrate concentration.' },
        ],
      },
      {
        letter: 'E',
        question:
          'Catalase activity is found in nearly all aerobic organisms. Propose ONE evolutionary advantage of producing catalase in cells that perform aerobic respiration.',
        rubric: [
          { id: 'e1', label: '1 pt — Catalase neutralizes the toxic byproduct H₂O₂ (a reactive oxygen species) generated during aerobic metabolism, protecting cells from oxidative damage', description: 'Must connect H₂O₂ as a toxic byproduct of aerobic metabolism with a fitness/survival benefit.' },
        ],
      },
      {
        letter: 'F',
        question:
          'Briefly describe ONE additional experimental modification that would strengthen the conclusions drawn from this experiment.',
        rubric: [
          { id: 'f1', label: '1 pt — Reasonable modification (e.g., multiple replicates per temperature, additional intermediate temperatures, control with no enzyme, use of statistical tests)', description: 'Any scientifically valid improvement.' },
        ],
      },
    ],
    sampleResponse:
      '(A) IV = temperature (°C); DV = rate of O₂ produced (mL/min). Controlled variables include catalase concentration, H₂O₂ concentration, reaction time, pH, and total reaction volume.\n\n' +
      '(B) Plot temperature on the x-axis (°C) and O₂ rate on the y-axis (mL/min). The curve rises from 5 to 37 °C, peaks at 37 °C, then falls sharply. Optimum temperature is 37 °C because the rate is highest (8.0 mL/min) at that temperature.\n\n' +
      '(C) Above ~50 °C, the increased thermal energy disrupts the noncovalent bonds (H bonds, ionic interactions, hydrophobic interactions) that maintain catalase\'s tertiary structure. The enzyme denatures, the active site distorts, and substrate binding is lost — sharply reducing rate by 70 °C.\n\n' +
      '(D) A competitive inhibitor at 37 °C will DECREASE the reaction rate by occupying the active site. The rate can be restored by increasing the substrate (H₂O₂) concentration: with abundant substrate, H₂O₂ will out-compete the inhibitor for the active site, returning Vmax to near-uninhibited levels.\n\n' +
      '(E) H₂O₂ is a toxic reactive oxygen species generated as a byproduct of aerobic metabolism. Cells that produce catalase quickly convert H₂O₂ to harmless H₂O and O₂, protecting macromolecules (DNA, membranes, proteins) from oxidative damage — a clear fitness advantage.\n\n' +
      '(F) Repeat each temperature with multiple replicates (n ≥ 3) and run a "no enzyme" negative control to confirm O₂ production is enzyme-dependent. Statistical analysis (e.g., standard error bars, ANOVA) would establish significance.',
  },

  /* ---------- FRQ 2 — LONG (Hardy-Weinberg / evolution data) ---------- */
  {
    type: 'saq',
    topic: 'unit-7-natural-selection',
    prompt:
      'FRQ 2 — Long: Interpreting Experimental Results with Statistical Analysis.\n\n' +
      'In a population of 400 mice, fur color is determined by a single gene with two alleles. The dark allele (D) is dominant to the light allele (d). The population shows the following genotype counts:\n\n' +
      '   DD = 144\n' +
      '   Dd = 192\n' +
      '   dd = 64\n',
    parts: [
      {
        letter: 'A',
        question:
          'Calculate the allele frequencies of D (p) and d (q) in this population. Show your work.',
        rubric: [
          { id: 'a1', label: '1 pt — p = 0.6, q = 0.4 with work shown', description: 'Total alleles = 800. D alleles = 2(144) + 192 = 480; p = 480/800 = 0.6. d alleles = 2(64) + 192 = 320; q = 320/800 = 0.4.' },
        ],
      },
      {
        letter: 'B',
        question:
          'Determine whether this population is in Hardy-Weinberg equilibrium for fur color. Show your work and justify your conclusion.',
        rubric: [
          { id: 'b1', label: '1 pt — Calculates expected genotype frequencies: DD = p² = 0.36 → 144; Dd = 2pq = 0.48 → 192; dd = q² = 0.16 → 64', description: 'Must show expected counts.' },
          { id: 'b2', label: '1 pt — Concludes population IS in Hardy-Weinberg equilibrium because observed = expected', description: 'Conclusion must be supported by the comparison.' },
        ],
      },
      {
        letter: 'C',
        question:
          'A predator that hunts by sight is introduced to the area. Over several generations, light-colored mice (dd) become much more conspicuous on the dark soil and are preyed upon at a much higher rate. Predict the effect on the frequencies of p and q over many generations and identify the type of selection acting.',
        rubric: [
          { id: 'c1', label: '1 pt — Frequency of d (q) decreases; frequency of D (p) increases', description: 'Predicted change in allele frequencies.' },
          { id: 'c2', label: '1 pt — Identifies DIRECTIONAL selection (favoring the dominant dark phenotype)', description: 'Must use the term "directional selection" or describe a shift toward one extreme.' },
        ],
      },
      {
        letter: 'D',
        question:
          'Explain TWO conditions of the Hardy-Weinberg model that have been violated by the introduction of the predator.',
        rubric: [
          { id: 'd1', label: '1 pt — Condition 1: No natural selection (predation is a form of selection)', description: 'Must explicitly identify "no selection."' },
          { id: 'd2', label: '1 pt — Condition 2: Any other valid HW assumption now reasonably questioned (e.g., random mating, no migration, large population, no mutation) — at minimum, students may argue the population is no longer in HW equilibrium AND identify a second HW assumption', description: 'Acceptable second answers include changes in effective population size due to differential mortality, or potential non-random mating if dark mice now have different reproductive success patterns.' },
        ],
      },
      {
        letter: 'E',
        question:
          'After many generations of predation, the recessive dd phenotype is reduced to 1% (q² = 0.01). Calculate the new allele frequencies and the percentage of HETEROZYGOUS carriers in the population.',
        rubric: [
          { id: 'e1', label: '1 pt — q = 0.1, p = 0.9, heterozygotes = 2pq = 2(0.9)(0.1) = 0.18 = 18%', description: 'Must show all three values.' },
        ],
      },
      {
        letter: 'F',
        question:
          'Explain WHY recessive alleles persist in a population even when the recessive phenotype is strongly selected against.',
        rubric: [
          { id: 'f1', label: '1 pt — Recessive alleles are "hidden" in heterozygotes (Dd), which display the dominant phenotype and are not selected against — so the d allele continues to be passed on through carriers', description: 'Must mention heterozygotes carrying recessive alleles without expressing the selected-against phenotype.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Total alleles = 2 × 400 = 800. D-alleles: 2(144) + 192 = 480 → p = 480/800 = 0.6. d-alleles: 2(64) + 192 = 320 → q = 320/800 = 0.4.\n\n' +
      '(B) Expected: DD = p² × 400 = (0.36)(400) = 144; Dd = 2pq × 400 = (0.48)(400) = 192; dd = q² × 400 = (0.16)(400) = 64. Observed = expected for all three genotypes → population IS in HW equilibrium.\n\n' +
      '(C) Light (dd) mice are preferentially preyed upon, lowering the frequency of d (q DECREASES) and raising the frequency of D (p INCREASES) over generations. This is DIRECTIONAL selection favoring the dark phenotype.\n\n' +
      '(D) (1) "No selection" is violated — predation is a form of natural selection acting on the recessive (dd) phenotype. (2) The assumption of a "large population with no genetic drift" may also be challenged because differential mortality reduces effective population size. (Equivalently, students may argue non-random mating if dark coloration is associated with mate choice.)\n\n' +
      '(E) q² = 0.01 → q = √0.01 = 0.1. p = 1 − 0.1 = 0.9. Heterozygote frequency = 2pq = 2(0.9)(0.1) = 0.18 = 18%.\n\n' +
      '(F) Recessive alleles persist because they are masked in heterozygotes (Dd). Heterozygotes display the dominant phenotype and are not removed by selection. As long as Dd carriers continue to reproduce, they pass d alleles on — selection cannot eliminate d unless every dd individual is removed AND no carriers reproduce.',
  },

  /* ---------- FRQ 3 — SHORT: Scientific Investigation (osmosis) ---------- */
  {
    type: 'saq',
    topic: 'unit-2-cell-structure',
    prompt:
      'FRQ 3 — Short: Scientific Investigation.\n\n' +
      'A student wants to determine the solute concentration of plant cells from a potato. The student designs an experiment using potato cores of equal mass placed in sucrose solutions of different molarities (0.0 M, 0.2 M, 0.4 M, 0.6 M, 0.8 M, 1.0 M). The cores are weighed before and after a 24-hour incubation. The student calculates the percent change in mass for each treatment.',
    parts: [
      {
        letter: 'A',
        question:
          'State a testable HYPOTHESIS the student is investigating. Be specific about the relationship between the variables.',
        rubric: [
          { id: 'a1', label: '1 pt — Testable hypothesis: e.g., "Potato cores will gain mass in solutions hypotonic to the cells (low sucrose) and lose mass in solutions hypertonic to the cells (high sucrose). The molarity at which mass change = 0 will equal the solute concentration of the cells."', description: 'Must include a directional, testable prediction connecting molarity and mass change.' },
        ],
      },
      {
        letter: 'B',
        question:
          'Identify ONE specific procedural step that ensures the experiment is a CONTROLLED comparison.',
        rubric: [
          { id: 'b1', label: '1 pt — Reasonable controlled element (e.g., equal initial core mass, equal volume of solution, same incubation time, same temperature, same potato variety)', description: 'Any single valid control.' },
        ],
      },
      {
        letter: 'C',
        question:
          'After the experiment, the student finds that the line of best fit crosses the x-axis (zero percent mass change) at approximately 0.45 M sucrose. Justify the conclusion that the solute concentration of the potato cells is approximately 0.45 M.',
        rubric: [
          { id: 'c1', label: '1 pt — At zero net mass change, water potential of the solution equals water potential of the cells (no net osmosis), so the external solute concentration matches the internal solute concentration', description: 'Must explicitly connect zero mass change to equal water potentials/equal solute concentrations.' },
        ],
      },
      {
        letter: 'D',
        question:
          'Predict and explain how the data would change if the experiment were repeated with potato cores from a potato that had been stored in dry conditions for several weeks.',
        rubric: [
          { id: 'd1', label: '1 pt — Cells from dry-stored potato have lower water content (more concentrated solute), so the x-intercept shifts to higher sucrose molarity (e.g., > 0.45 M); cores would gain mass in a wider range of sucrose solutions', description: 'Must predict the direction of the shift AND tie it to the cells\' more concentrated cytoplasm.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Hypothesis: If the sucrose concentration of the external solution is LOWER than that of the potato cell cytoplasm (hypotonic), the cores will gain mass; if HIGHER (hypertonic), they will lose mass; the molarity at which mass change = 0 will equal the solute concentration of the cells.\n\n' +
      '(B) Use cores of equal initial mass (also: equal solution volume, same incubation time, same temperature, same potato variety) to ensure differences are due only to the IV (sucrose molarity).\n\n' +
      '(C) At ~0.45 M, there is no net mass change → no net osmosis. This means the water potential of the external solution equals the water potential of the cells. Since both have the same solvent and similar pressures, equal water potentials imply equal solute concentrations: the cells\' solute concentration is ~0.45 M.\n\n' +
      '(D) A potato stored in dry conditions has lost water, concentrating its internal solutes. Its cells now have a higher solute concentration, so the x-intercept (where mass change = 0) shifts to a HIGHER sucrose molarity. Cores from this potato would gain mass across a wider range of sucrose solutions.',
  },

  /* ---------- FRQ 4 — SHORT: Conceptual Analysis (DNA replication) ---------- */
  {
    type: 'saq',
    topic: 'unit-6-gene-expression-regulation',
    prompt:
      'FRQ 4 — Short: Conceptual Analysis.\n\n' +
      'DNA replication in eukaryotes is described as semiconservative, bidirectional, and antiparallel. Different enzymes carry out specific roles to ensure accurate replication.',
    parts: [
      {
        letter: 'A',
        question:
          'Define "semiconservative replication" and explain what experiment first demonstrated it.',
        rubric: [
          { id: 'a1', label: '1 pt — Each daughter DNA molecule contains ONE original (parental) strand and ONE newly synthesized strand. Demonstrated by Meselson and Stahl using nitrogen isotopes (¹⁵N → ¹⁴N density-gradient experiment)', description: 'Must include both the definition AND the Meselson-Stahl experiment.' },
        ],
      },
      {
        letter: 'B',
        question:
          'Explain WHY the LAGGING strand must be synthesized as discontinuous fragments (Okazaki fragments) while the LEADING strand is synthesized continuously.',
        rubric: [
          { id: 'b1', label: '1 pt — DNA polymerase only synthesizes new DNA in the 5\'→3\' direction. The leading strand template runs 3\'→5\' toward the fork, allowing continuous synthesis. The lagging strand template runs 5\'→3\' toward the fork, so synthesis must occur AWAY from the fork in short fragments', description: 'Must explicitly cite the 5\'→3\' constraint of DNA polymerase AND explain how antiparallel orientation forces discontinuous synthesis on one strand.' },
        ],
      },
      {
        letter: 'C',
        question:
          'Identify the function of DNA LIGASE during replication.',
        rubric: [
          { id: 'c1', label: '1 pt — DNA ligase joins (seals) Okazaki fragments by forming phosphodiester bonds between the 3\' OH of one fragment and the 5\' phosphate of the next', description: 'Must mention joining/sealing fragments.' },
        ],
      },
      {
        letter: 'D',
        question:
          'A patient has a mutation that inactivates DNA polymerase\'s proofreading (3\'→5\' exonuclease) activity. Predict the most likely cellular consequence and explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Increased rate of replication errors (mutations) accumulating over cell generations, leading to higher risk of cancer and disease because incorrect nucleotides cannot be removed and corrected during replication', description: 'Must connect loss of proofreading to higher mutation rate AND a downstream consequence.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Semiconservative replication: each new DNA molecule is composed of one parental strand and one newly synthesized strand. Meselson and Stahl (1958) grew bacteria in heavy ¹⁵N, switched them to light ¹⁴N, and used cesium chloride density-gradient centrifugation across generations. The intermediate-density band after one generation (and the appearance of light + intermediate bands after two) ruled out conservative and dispersive models in favor of semiconservative replication.\n\n' +
      '(B) DNA polymerase can only add nucleotides to a free 3\' hydroxyl, so synthesis proceeds 5\'→3\'. Because the two strands of the parental DNA are antiparallel, only one strand (leading) has a template oriented to allow continuous 5\'→3\' synthesis toward the replication fork. The lagging strand template runs in the opposite direction, so polymerase synthesizes short Okazaki fragments AWAY from the fork as the helix unwinds.\n\n' +
      '(C) DNA ligase seals the gaps between Okazaki fragments on the lagging strand by catalyzing the formation of phosphodiester bonds between adjacent fragments, producing a continuous strand.\n\n' +
      '(D) Loss of 3\'→5\' exonuclease (proofreading) activity dramatically increases the replication error rate. Mutations accumulate every cell division and cannot be corrected during replication. Over time, this leads to a higher rate of damaging mutations, increasing the risk of cancer (loss of tumor suppressors / activation of oncogenes) and other genetic diseases.',
  },

  /* ---------- FRQ 5 — SHORT: Visual Model (cell signaling) ---------- */
  {
    type: 'saq',
    topic: 'unit-4-cell-communication-cell-cycle',
    prompt:
      'FRQ 5 — Short: Analyze Visual Representation.\n\n' +
      'A textbook diagram shows the following pathway:\n\n' +
      '   Insulin (extracellular) → Insulin receptor (transmembrane RTK) → autophosphorylation → IRS-1 → PI3K → Akt → activation of GLUT4 transporter insertion in plasma membrane → glucose uptake into cell.\n',
    parts: [
      {
        letter: 'A',
        question:
          'Identify the type of signaling shown (autocrine, paracrine, endocrine, or direct contact) and justify your answer.',
        rubric: [
          { id: 'a1', label: '1 pt — ENDOCRINE signaling — insulin is a hormone secreted by pancreatic β cells and travels through the bloodstream to distant target cells (e.g., muscle, adipose)', description: 'Must identify endocrine and connect to long-distance hormonal action.' },
        ],
      },
      {
        letter: 'B',
        question:
          'Explain WHY insulin (a peptide hormone) binds to a CELL-SURFACE receptor rather than an intracellular receptor.',
        rubric: [
          { id: 'b1', label: '1 pt — Insulin is a hydrophilic peptide and cannot cross the hydrophobic lipid bilayer; it must bind a cell-surface receptor (RTK)', description: 'Must connect hydrophilic nature of peptide hormone to inability to cross membrane.' },
        ],
      },
      {
        letter: 'C',
        question:
          'A diabetic patient has cells whose insulin receptors fail to autophosphorylate. Predict the most likely consequence on blood glucose and on the GLUT4 transporter.',
        rubric: [
          { id: 'c1', label: '1 pt — Without autophosphorylation, the signal cascade is not initiated → GLUT4 is not inserted in the plasma membrane → cells cannot take up glucose → blood glucose remains high (hyperglycemia)', description: 'Must connect failed autophosphorylation to blocked GLUT4 insertion AND elevated blood glucose.' },
        ],
      },
      {
        letter: 'D',
        question:
          'Briefly explain how this signaling cascade illustrates AMPLIFICATION of the original signal.',
        rubric: [
          { id: 'd1', label: '1 pt — Each step (RTK → IRS-1 → PI3K → Akt) activates many downstream molecules, so a small number of insulin molecules ultimately produces insertion of many GLUT4 transporters and large glucose uptake', description: 'Must explicitly mention that each step amplifies the signal.' },
        ],
      },
    ],
    sampleResponse:
      '(A) ENDOCRINE signaling. Insulin is secreted by pancreatic β cells into the bloodstream and acts on distant target cells (skeletal muscle, adipose, liver) — the defining feature of endocrine signaling.\n\n' +
      '(B) Insulin is a hydrophilic peptide hormone. The hydrophobic interior of the lipid bilayer prevents insulin from crossing the plasma membrane, so it must bind an extracellular cell-surface receptor (the insulin RTK).\n\n' +
      '(C) Without autophosphorylation, the receptor cannot recruit IRS-1 and the downstream cascade (PI3K, Akt) is not triggered. GLUT4 transporters remain in intracellular vesicles instead of being inserted into the plasma membrane. Glucose cannot enter the cell efficiently, and blood glucose stays elevated — hyperglycemia, a hallmark of insulin-resistant (Type 2) diabetes.\n\n' +
      '(D) Each step in the cascade is enzymatic, so a single activated receptor can phosphorylate many IRS-1 molecules; each IRS-1 can activate many PI3K; each PI3K can produce many active Akt molecules; and each Akt can drive insertion of many GLUT4 transporters. The overall effect is geometric amplification: a small number of insulin molecules → a large glucose-uptake response.',
  },

  /* ---------- FRQ 6 — SHORT: Analyze Data (predator-prey ecology) ---------- */
  {
    type: 'saq',
    topic: 'unit-8-ecology',
    prompt:
      'FRQ 6 — Short: Analyze Data.\n\n' +
      'Long-term population data from Isle Royale show oscillations in moose (prey) and gray wolf (predator) populations over many decades:\n\n' +
      '   Time     Moose     Wolves\n' +
      '   Year 0    900        20\n' +
      '   Year 5   1300        25\n' +
      '   Year 10  1600        45\n' +
      '   Year 15   900        50\n' +
      '   Year 20   500        25\n' +
      '   Year 25   800        15\n',
    parts: [
      {
        letter: 'A',
        question:
          'Describe the relationship between moose and wolf populations from Year 0 to Year 25.',
        rubric: [
          { id: 'a1', label: '1 pt — Cyclical relationship: moose population rises first, followed by wolf population rise (lagging); then moose decline triggers wolf decline (predator population lags prey)', description: 'Must describe lag and cyclic pattern.' },
        ],
      },
      {
        letter: 'B',
        question:
          'Explain WHY the wolf population begins to decline after Year 15 even though it had been increasing.',
        rubric: [
          { id: 'b1', label: '1 pt — Decline in moose population reduces food availability for wolves → wolves face higher mortality / lower reproduction → wolf population decreases', description: 'Must connect food scarcity to wolf decline.' },
        ],
      },
      {
        letter: 'C',
        question:
          'Predict the carrying capacity (K) for moose on Isle Royale based on the data and identify ONE biotic factor and ONE abiotic factor that could influence K.',
        rubric: [
          { id: 'c1', label: '1 pt — Estimated K ≈ 1500–1600 moose (peak observed) AND identifies one biotic (e.g., predation, food/vegetation availability, disease) AND one abiotic (e.g., winter temperature, snow depth, fire, habitat area) factor', description: 'Estimate must come from the data; both factor types named.' },
        ],
      },
      {
        letter: 'D',
        question:
          'A canine virus reduces the wolf population to 5 individuals at Year 30. Predict the impact on the moose population over the next 10 years and justify your answer.',
        rubric: [
          { id: 'd1', label: '1 pt — Moose population will likely INCREASE (initially exponentially) due to reduced predation, potentially overshooting carrying capacity and causing later starvation/collapse if vegetation is overgrazed', description: 'Must predict moose increase AND mention reduced predation OR potential overshoot.' },
        ],
      },
    ],
    sampleResponse:
      '(A) Moose and wolves show a classic cyclical predator-prey relationship: moose rise from Year 0 to ~Year 10. Wolves rise with a time lag, peaking at ~Year 15. Moose then decline from ~Year 15 onward as predation and resource limits intensify, and wolves follow with another lag, declining from ~Year 20.\n\n' +
      '(B) After Year 15, moose numbers are dropping. Less prey means less food per wolf, so wolf reproduction declines and mortality (especially of pups and weak adults) rises. The wolf population lags the prey decline before falling.\n\n' +
      '(C) The peak moose count (~1600 at Year 10) suggests K ≈ 1500–1600 moose. Biotic factor: predation by wolves (or food/vegetation availability or parasite load). Abiotic factor: winter severity (snow depth or temperature affecting moose survival and forage access).\n\n' +
      '(D) With wolves reduced to 5, predation pressure on moose drops sharply. The moose population is likely to INCREASE rapidly (approaching exponential growth in the near term). Over 5–10 years, moose may exceed carrying capacity, overgraze vegetation, and then experience a population crash from starvation or disease — illustrating delayed density-dependent regulation.',
  },
]
