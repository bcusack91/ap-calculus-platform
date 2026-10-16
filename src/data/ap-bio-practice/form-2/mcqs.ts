import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology practice exam, Form 2: 60 MCQs (May 2027 format, 90 minutes).
 * Unit counts follow the CED weights:
 *   U1 Chemistry of Life                  (6)   8–11%
 *   U2 Cell Structure & Function          (7)  10–13%
 *   U3 Cellular Energetics                (8)  12–16%
 *   U4 Cell Communication & Cell Cycle    (7)  10–15%
 *   U5 Heredity                           (6)   8–11%
 *   U6 Gene Expression & Regulation       (8)  12–16%
 *   U7 Natural Selection                  (10) 13–20%
 *   U8 Ecology                            (8)  10–15%
 * Seven data/experiment sets (4–5 questions each, consecutive, sharing one
 * stimulus) plus discrete questions.
 */

const SET_CAPILLARY =
  'Students stood clean glass tubes of different inner diameters upright in a dish of liquid and measured how far the liquid rose inside each tube above the level in the dish. They tested water, hexane (a nonpolar liquid), and water in a glass tube whose inner surface had been coated with a thin layer of wax.\n\n' +
  '| Tube | Inner diameter (mm) | Liquid | Rise above the dish level (mm) |\n' +
  '|---|---|---|---|\n' +
  '| 1 | 2.0 | Water | 15 |\n' +
  '| 2 | 1.0 | Water | 30 |\n' +
  '| 3 | 0.5 | Water | 60 |\n' +
  '| 4 | 1.0 | Hexane | 11 |\n' +
  '| 5 | 1.0 | Water (wax-coated tube) | −2 (below the dish level) |'

const SET_UPTAKE =
  'Researchers measured how fast cultured animal cells take up a radioactively labeled amino acid from the surrounding medium. Half of the trials used cells first treated with a drug that blocks ATP production by cellular respiration. Each trial lasted 5 minutes.\n\n' +
  '| Amino acid outside the cells (mM) | Uptake rate, untreated cells (nmol/min) | Uptake rate, drug-treated cells (nmol/min) |\n' +
  '|---|---|---|\n' +
  '| 0.5 | 4.0 | 0.6 |\n' +
  '| 1.0 | 7.0 | 1.1 |\n' +
  '| 2.0 | 11.0 | 2.1 |\n' +
  '| 4.0 | 14.0 | 3.8 |\n' +
  '| 8.0 | 15.5 | 5.9 |\n' +
  '| 16.0 | 16.0 | 6.2 |\n\n' +
  'In a separate 60-minute test with 2.0 mM amino acid outside the cells, the concentration inside the untreated cells reached 25 mM, and the concentration inside the drug-treated cells reached 2.0 mM.'

const SET_RESPIROMETER =
  'Students measured oxygen uptake with respirometers: sealed vials attached to thin, graduated tubes. Each vial held a layer of potassium hydroxide (KOH), which absorbs $CO_{2}$, under a cotton pad. A vial contained 25 germinating peas, 25 dormant (dry) peas plus glass beads, or glass beads alone, so that every vial held the same volume of material. Vials sat in water baths at 10°C or 25°C. Every reading was corrected by subtracting the change in a beads-only vial at the same temperature.\n\n' +
  '| Time (min) | Germinating peas, 10°C (mL $O_{2}$) | Germinating peas, 25°C (mL $O_{2}$) | Dormant peas, 25°C (mL $O_{2}$) |\n' +
  '|---|---|---|---|\n' +
  '| 0 | 0.00 | 0.00 | 0.00 |\n' +
  '| 10 | 0.08 | 0.20 | 0.01 |\n' +
  '| 20 | 0.16 | 0.42 | 0.02 |\n' +
  '| 30 | 0.25 | 0.61 | 0.03 |\n' +
  '| 40 | 0.33 | 0.80 | 0.04 |'

const SET_HORMONE =
  'Liver cells release glucose when hormone H binds to a receptor protein on the cell surface. Binding of H raises the concentration of a small molecule, M, inside the cell, and M activates enzymes that break down glycogen. Researchers measured M and glucose release in cultured liver cells given five treatments. Drug R blocks H from binding its receptor. Compound M* enters cells and acts like M. Drug P blocks the enzyme that breaks down M.\n\n' +
  '| Treatment | M inside cells (relative units) | Glucose released (relative units) |\n' +
  '|---|---|---|\n' +
  '| 1. No additions | 1 | 5 |\n' +
  '| 2. H | 20 | 100 |\n' +
  '| 3. H + drug R | 1 | 6 |\n' +
  '| 4. M* (no H) | not measured | 95 |\n' +
  '| 5. H + drug P | 45 | 170 |'

const SET_LINKAGE =
  'In tomato plants, the allele for tall stems (T) is dominant to the allele for dwarf stems (t), and the allele for hairy stems (H) is dominant to the allele for smooth stems (h). A plant heterozygous for both genes was crossed with a dwarf, smooth plant (tthh). The cross produced 1,000 offspring.\n\n' +
  '| Offspring phenotype | Number |\n' +
  '|---|---|\n' +
  '| Tall, smooth | 412 |\n' +
  '| Dwarf, hairy | 398 |\n' +
  '| Tall, hairy | 92 |\n' +
  '| Dwarf, smooth | 98 |\n\n' +
  'Chi-square critical values at p = 0.05: 3.84 (1 degree of freedom), 5.99 (2), 7.81 (3).'

const SET_CODE =
  'The template strand of a short region of a gene is shown with its 3′ end at the left:\n\n' +
  '3′-TAC GGA CTT ACC ATT-5′\n\n' +
  'Part of the genetic code (mRNA codons):\n\n' +
  '| Codon | Amino acid |\n' +
  '|---|---|\n' +
  '| AUG | Met |\n' +
  '| CCU, CCC | Pro |\n' +
  '| CUU | Leu |\n' +
  '| GAA, GAG | Glu |\n' +
  '| UGG | Trp |\n' +
  '| UAA, UAG, UGA | Stop |'

const SET_LIZARDS =
  'A species of lizard lives both on dark volcanic soil and, a few kilometers away, on white gypsum dunes. Skin color is controlled by one gene: the dominant allele B gives brown skin, and lizards with genotype bb are pale. Researchers counted lizards of each color at the two sites. They also set out equal numbers of brown and pale clay lizard models at each site for one week and recorded the percentage of models with marks from birds or other predators.\n\n' +
  '| Site | Brown lizards counted | Pale lizards counted | Brown models attacked (%) | Pale models attacked (%) |\n' +
  '|---|---|---|---|---|\n' +
  '| Dark soil | 96 | 4 | 12 | 48 |\n' +
  '| White dunes | 3 | 97 | 51 | 10 |'

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — CHEMISTRY OF LIFE (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_CAPILLARY,
    question: 'Which explanation best accounts for the rise of water in tubes 1–3?',
    options: [
      'Hydrogen bonds attract water both to the polar glass surface and to other water molecules, pulling the column upward.',
      'Water has a high specific heat, so it absorbs heat from the glass, expands, and is pushed upward through the tube.',
      'Water molecules are repelled by the nonpolar glass, so they crowd toward the center of the tube and are forced up.',
      'The air pressure inside a narrow tube is lower than over the dish, so water is drawn up as it is through a straw.',
    ],
    correctAnswer: 0,
    explanation:
      'Adhesion (hydrogen bonding between water and the polar glass surface) pulls water up the walls, and cohesion (hydrogen bonding among water molecules) drags the rest of the column along. Glass is polar, not nonpolar, so water is attracted to it rather than repelled. Specific heat concerns temperature change, not capillary rise, and the tubes are open to the same air as the dish, so there is no pressure difference.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_CAPILLARY,
    question: 'Based on the trend in tubes 1–3, how high would water be expected to rise in a glass tube with an inner diameter of 0.05 mm?',
    options: [
      'About 6 mm',
      'About 600 mm',
      'About 60 mm',
      'About 6,000 mm',
    ],
    correctAnswer: 1,
    explanation:
      'Each time the diameter is halved, the rise doubles (15 → 30 → 60 mm), so the rise is inversely proportional to the diameter. A 0.05 mm tube is one-tenth the diameter of tube 3, so the rise should be about ten times 60 mm, or 600 mm. Six millimeters reverses the relationship, 60 mm ignores the change in diameter, and 6,000 mm treats a tenfold change as a hundredfold one.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_CAPILLARY,
    question: 'Hexane rose much less than water in tubes of the same diameter (tubes 2 and 4). Which difference between the two liquids best explains this result?',
    options: [
      'Hexane forms more hydrogen bonds with the glass than water does, which holds the hexane near the bottom of the tube.',
      'Hexane is polar and its molecules carry charges, so they are repelled by the charged surface of the glass tube.',
      'Hexane cannot form hydrogen bonds, so its molecules attract one another much less strongly than water molecules do.',
      'Hexane has a higher specific heat than water, so it stays cooler and does not expand up the narrow glass tube.',
    ],
    correctAnswer: 2,
    explanation:
      'Hexane is a nonpolar hydrocarbon with no O–H or N–H bonds, so it cannot hydrogen-bond; its molecules are held together only by weak dispersion forces, so the cohesion that drags the column up is far weaker than in water and the rise is smaller. It forms no hydrogen bonds with glass at all, and it is nonpolar rather than polar. Water, not hexane, has the unusually high specific heat, and specific heat does not drive capillary rise.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus: SET_CAPILLARY,
    question: 'Which conclusion is best supported by the result for tube 5?',
    options: [
      'The rise of water depends only on cohesion, because the wax did not change how water molecules attract one another.',
      'The wax made the inner surface more polar, so water formed more hydrogen bonds with it and was pulled down the tube.',
      'The wax dissolved into the water and broke its hydrogen bonds, so the water no longer showed any surface tension.',
      'The rise of water depends on its attraction to the tube wall, because a nonpolar wall does not pull the water upward.',
    ],
    correctAnswer: 3,
    explanation:
      'Coating the glass with nonpolar wax removed the polar surface that water adheres to, and the rise disappeared even though cohesion among water molecules was unchanged; adhesion to the wall is therefore required. If cohesion alone caused the rise, tube 5 would match tube 2. Wax is nonpolar, not polar, and it does not dissolve in water.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'An oxygen-carrying protein in a marine worm is made of four identical polypeptides. When the four polypeptides are separated, each one still folds into its normal shape, but none of them can bind oxygen. Which level of protein structure does oxygen binding require?',
    options: [
      'Quaternary structure, the association of the four folded polypeptides',
      'Tertiary structure, the overall three-dimensional fold of each polypeptide',
      'Secondary structure, the helices and sheets held by backbone hydrogen bonds',
      'Primary structure, the sequence of amino acids within each polypeptide',
    ],
    correctAnswer: 0,
    explanation:
      'Each separated polypeptide keeps its normal fold, so its primary, secondary and tertiary structures are intact, yet binding is lost; oxygen binding therefore depends on the way the four folded subunits fit together, which is quaternary structure. The amino acid sequence, the helices and sheets, and the fold of each single chain are all still present in the separated subunits, so none of them can be what is missing.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'Along the whole length of a DNA double helix, the two sugar-phosphate backbones stay the same distance apart. Which feature of base pairing best explains this constant width?',
    options: [
      'Each base pair is held together by the same number of hydrogen bonds.',
      'Each base pair joins a two-ring purine with a one-ring pyrimidine.',
      'Each base is covalently bonded to the base opposite it on the other strand.',
      'Each base pair joins two purines or two pyrimidines of matching size.',
    ],
    correctAnswer: 1,
    explanation:
      'Every pair contains one double-ring base (A or G) and one single-ring base (T or C), so each rung of the ladder spans the same distance. A–T pairs have two hydrogen bonds and G–C pairs three, so the number differs. The paired bases are joined by hydrogen bonds, not covalent bonds, and two purines would be too wide while two pyrimidines would be too narrow.',
  },

  /* ============================ UNIT 2 — CELL STRUCTURE & FUNCTION (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_UPTAKE,
    question: 'Which feature of the data best supports the claim that the amino acid crosses the membrane through a limited number of transport proteins?',
    options: [
      'The untreated uptake rate rises as the outside concentration increases from 0.5 mM to 2.0 mM.',
      'The drug-treated uptake rate is lower than the untreated rate at every outside concentration.',
      'The untreated uptake rate levels off near 16 nmol/min as the outside concentration keeps rising.',
      'The untreated cells reached an inside concentration higher than the outside concentration.',
    ],
    correctAnswer: 2,
    explanation:
      'A rate that stops increasing when more substrate is available means every transporter is already in use, so the number of transport proteins limits the rate. A rate that rises with concentration fits simple diffusion as well. The drug effect and the accumulation against a gradient show that uptake uses energy, not that the number of transporters is limited.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_UPTAKE,
    question: 'Which conclusion about the untreated cells is best supported by the 60-minute test?',
    options: [
      'They took up the amino acid by simple diffusion until the inside and outside levels were equal.',
      'They lost amino acid to the medium, because their inside level ended higher than the outside level.',
      'They became permeable to the amino acid only after the drug had stopped their ATP production.',
      'They moved the amino acid against its concentration gradient, a process that requires energy.',
    ],
    correctAnswer: 3,
    explanation:
      'The inside concentration (25 mM) rose far above the outside concentration (2.0 mM), so the cells moved the amino acid from lower to higher concentration, which is active transport and needs an energy input. Diffusion would stop when the levels were equal, as happened in the drug-treated cells. A higher inside level shows net uptake, not loss, and the untreated cells were never given the drug.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_UPTAKE,
    question: 'The drug-treated cells still took up some amino acid, and their inside concentration stopped rising at 2.0 mM. The best explanation is that, without ATP, the amino acid',
    options: [
      'kept moving down its gradient through membrane proteins until the inside and outside levels matched',
      'crossed the hydrophobic core of the bilayer freely, as small nonpolar molecules such as oxygen do',
      'was pumped back out of the cells as fast as it entered, so the inside level stayed close to zero',
      'was made inside the cells from glucose, so no amino acid needed to cross the plasma membrane at all',
    ],
    correctAnswer: 0,
    explanation:
      'With no ATP, the amino acid could still move passively down its concentration gradient by facilitated diffusion, which stops when inside and outside concentrations are equal (2.0 mM each); the drug-treated rate also levels off, which points to proteins. The inside level reached 2.0 mM, not zero. Amino acids are polar and charged, so they do not cross the hydrophobic core freely, and the label measured uptake from outside, not synthesis inside.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus: SET_UPTAKE,
    question: 'A second drug halves the number of these transport proteins in the plasma membrane but does not affect ATP production. Compared with untreated cells, the uptake rate of cells given this drug at 16.0 mM would most likely be',
    options: [
      'about the same, because ATP production, not the number of transporters, limits uptake at that concentration',
      'about half as fast, because the highest possible rate depends on how many transporters are present',
      'about twice as fast, because each of the remaining transporters would receive more amino acid molecules',
      'about equal to the drug-treated rate, because both drugs remove the energy source that powers the uptake',
    ],
    correctAnswer: 1,
    explanation:
      'At 16.0 mM the transporters are saturated, so the rate equals the number of transporters times the rate per transporter; halving the transporters halves the maximum rate, to about 8 nmol/min. ATP is still being made, so energy is not what changed. Saturated transporters cannot work faster when more amino acid is present, and the second drug does not block ATP production.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'A culture of bacteria growing at 37°C is moved to 15°C. Over the next few hours, the bacteria change the fatty acids they build into their membrane phospholipids. Which change would best keep their membranes fluid at the lower temperature?',
    options: [
      'A higher proportion of saturated fatty acid tails, whose straight chains slide past one another more easily',
      'Longer fatty acid tails, which form more hydrophobic interactions and keep the bilayer from freezing solid',
      'A higher proportion of unsaturated fatty acid tails, whose bends keep the tails from packing tightly together',
      'Fewer proteins in the membrane, so that more of the surface is covered by the phospholipids\' polar heads',
    ],
    correctAnswer: 2,
    explanation:
      'Cis double bonds put bends in unsaturated tails, which keeps them from packing closely, so the membrane stays fluid at low temperature. Saturated tails are straight and pack tightly, which makes a membrane more rigid. Longer tails also increase hydrophobic interactions, which makes a bilayer less fluid, and the number of membrane proteins does not set the fluidity of the lipid layer.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'A protein that a gland cell normally secretes begins with a short amino acid sequence that directs the ribosome making it to the rough endoplasmic reticulum (ER). In a mutant cell, only this sequence is deleted. Where is the mutant protein most likely to end up?',
    options: [
      'Outside the cell, because the rest of the protein still carries the information needed for secretion',
      'In the Golgi complex, because proteins made on ribosomes without the signal go straight to the Golgi',
      'In the nucleus, because proteins that lack an ER signal are imported into the nucleus by default',
      'In the cytosol, because it is made on a free ribosome and never enters the ER',
    ],
    correctAnswer: 3,
    explanation:
      'Without the sequence that targets its ribosome to the rough ER, the protein is finished on a free ribosome and stays in the cytosol. Secretion requires passage through the ER, then the Golgi, then vesicles to the plasma membrane, so a protein that never enters the ER cannot be secreted or reach the Golgi. Nuclear import requires its own specific signal; it is not a default destination.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'Cells of a celery stalk have a water potential of −6.0 bars. A thin slice of the stalk is placed in an open beaker of 0.20 M NaCl solution at 25°C (298 K). Solute potential is $\\Psi_{s} = -iCRT$, where $R = 0.0831$ L·bar/(mol·K). NaCl dissociates completely in water, so $i = 2$.',
    question: 'What is the water potential of the NaCl solution, and in which direction is there net movement of water?',
    options: [
      'About −9.9 bars; water moves out of the celery cells into the solution.',
      'About −9.9 bars; water moves into the celery cells from the solution.',
      'About −19.8 bars; water moves out of the celery cells into the solution.',
      'About −4.9 bars; water moves into the celery cells from the solution.',
    ],
    correctAnswer: 0,
    explanation:
      'In an open beaker the pressure potential is 0, so $\\Psi = \\Psi_{s} = -(2)(0.20)(0.0831)(298) \\approx -9.9$ bars. Water moves from higher to lower water potential, so it leaves the cells (−6.0 bars) for the solution (−9.9 bars). The −4.9 value forgets that NaCl gives two particles, −19.8 counts the factor of 2 twice, and water does not move toward the higher water potential.',
  },

  /* ============================ UNIT 3 — CELLULAR ENERGETICS (8) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_RESPIROMETER,
    question: 'What was the average rate of oxygen uptake by the germinating peas at 25°C over the 40 minutes?',
    options: [
      '0.008 mL/min',
      '0.020 mL/min',
      '0.20 mL/min',
      '0.80 mL/min',
    ],
    correctAnswer: 1,
    explanation:
      'The rate is the total change divided by the time: 0.80 mL ÷ 40 min = 0.020 mL/min. The value 0.008 mL/min is the rate at 10°C (0.33 ÷ 40), 0.20 mL/min reads the 10-minute volume as a per-minute rate, and 0.80 mL/min is the total volume without dividing by the time.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_RESPIROMETER,
    question: 'Which claim is best supported by comparing the germinating peas at 10°C and at 25°C?',
    options: [
      'The higher temperature denatured respiratory enzymes, so less oxygen was taken up at 25°C than at 10°C.',
      'Temperature had no effect on respiration, because both groups took up oxygen at a steady rate over time.',
      'The higher temperature increased the rate of respiration, consistent with faster enzyme-catalyzed reactions.',
      'The higher temperature caused the peas to switch from fermentation to aerobic respiration in the vial.',
    ],
    correctAnswer: 2,
    explanation:
      'At 25°C the peas took up about 0.80 mL of $O_{2}$ in 40 minutes versus 0.33 mL at 10°C, so respiration was faster at the higher temperature, as expected when enzyme-catalyzed reactions speed up with temperature below the optimum. Uptake was higher, not lower, at 25°C. Each rate was steady, but the two rates differ, and $O_{2}$ was taken up at both temperatures, so neither group was fermenting.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_RESPIROMETER,
    question: 'The dormant peas took up far less oxygen than the germinating peas at 25°C. The best explanation is that dormant seeds',
    options: [
      'photosynthesize inside the vial, so they replace most of the oxygen that they use',
      'release more $CO_{2}$ than the $O_{2}$ they use, so their gas volume stays the same',
      'lack mitochondria until they germinate, so they cannot carry out any respiration',
      'have a much lower metabolic rate, so they break down very little of their stored food',
    ],
    correctAnswer: 3,
    explanation:
      'A dormant seed is alive but metabolically slow, so it oxidizes little of its stored food and uses little oxygen; once it germinates, growth demands ATP and respiration speeds up. Seeds have no functioning photosynthetic tissue in a dark vial, dormant seeds already contain mitochondria (they did take up a little oxygen), and the KOH absorbs any $CO_{2}$ released, so $CO_{2}$ cannot mask the reading.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus: SET_RESPIROMETER,
    question: 'Why was each reading corrected using a vial that held only glass beads at the same temperature?',
    options: [
      'To remove volume changes caused by the air in the vial warming, cooling or changing pressure',
      'To make sure that each vial held the same number of living cells as the other vials in its bath',
      'To measure the oxygen that the glass beads absorb, so that it can be added back to the totals',
      'To show how fast the peas respire when no KOH is present in the vial to absorb the $CO_{2}$',
    ],
    correctAnswer: 0,
    explanation:
      'A sealed vial\'s gas volume also changes when the bath temperature or the air pressure drifts, so a beads-only vial shows that change, and subtracting it leaves the change due to the peas. The beads only fill space so that each vial holds the same volume; they contain no cells and absorb no oxygen. The beads-only vial also contained KOH, so it cannot show respiration without KOH.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'Researchers made artificial vesicles from phospholipids and inserted one or both of two purified proteins: a light-driven pump from a prokaryote that moves $H^{+}$ into the vesicle, and ATP synthase. ADP and phosphate were supplied outside the vesicles, and the researchers recorded whether ATP was made. No other proteins were present.\n\n| Vesicle | Proteins inserted | Light | Chemical that makes the membrane leaky to $H^{+}$ | ATP made? |\n|---|---|---|---|---|\n| 1 | Pump only | On | No | No |\n| 2 | ATP synthase only | On | No | No |\n| 3 | Pump and ATP synthase | Off | No | No |\n| 4 | Pump and ATP synthase | On | No | Yes |\n| 5 | Pump and ATP synthase | On | Yes | No |',
    question: 'Which conclusion is best supported by the results?',
    options: [
      'ATP synthase is powered directly by light, so it needs no other protein to make ATP.',
      'An $H^{+}$ gradient alone can drive ATP synthase, with no electron carriers.',
      'The pump makes ATP itself when it absorbs light, and ATP synthase only speeds this up.',
      'ATP synthesis requires electrons passed along a chain of carriers to a final acceptor.',
    ],
    correctAnswer: 1,
    explanation:
      'ATP was made only when light ran the pump and ATP synthase was present (vesicle 4), and making the membrane leaky to $H^{+}$ abolished it (vesicle 5), so the $H^{+}$ gradient built by the pump is what drives ATP synthase; no electron carriers were present. ATP synthase alone in light made no ATP (vesicle 2), so it is not light-driven, and the pump alone made no ATP (vesicle 1).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'An enzyme was mixed with its substrate at 30°C, and the total amount of product was measured every 2 minutes.\n\n| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |\n|---|---|---|---|---|---|---|---|---|\n| Total product (µmol) | 0 | 8 | 15 | 20 | 23 | 24 | 24 | 24 |\n\nAt 14 minutes more substrate was added, and product again formed at about the rate seen in the first 2 minutes.',
    question: 'Which explanation best accounts for the leveling off between 10 and 14 minutes?',
    options: [
      'The enzyme had been used up, because each enzyme molecule acts only once.',
      'The product had denatured the enzyme, which could then no longer work.',
      'The substrate had been used up, while the enzyme was still active.',
      'The mixture had cooled as the reaction gave off its heat to the air.',
    ],
    correctAnswer: 2,
    explanation:
      'Adding substrate at 14 minutes restarted product formation at the original rate, so the enzyme was still present and active; the reaction stopped because the substrate ran out. Enzymes are not consumed by the reactions they catalyze, and a denatured enzyme would not recover when substrate was added. The mixture was held at 30°C, so cooling does not explain the plateau.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In a chloroplast carrying out the light-dependent reactions, where is the $H^{+}$ concentration highest, and in which direction do $H^{+}$ ions move through ATP synthase?',
    options: [
      'In the stroma; $H^{+}$ moves into the thylakoid space through ATP synthase.',
      'In the cytosol; $H^{+}$ moves into the stroma through the outer membrane.',
      'In the intermembrane space; $H^{+}$ moves into the stroma through ATP synthase.',
      'In the thylakoid space; $H^{+}$ moves into the stroma through ATP synthase.',
    ],
    correctAnswer: 3,
    explanation:
      'Electron transport in the thylakoid membrane pumps $H^{+}$ into the thylakoid space, and the splitting of water adds more, so the gradient runs from the thylakoid space to the stroma, where ATP synthase releases ATP. Pumping into the stroma reverses the gradient. The intermembrane space is where mitochondria build their gradient, and the cytosol is outside the chloroplast entirely.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'Joining glutamate and ammonia to make the amino acid glutamine is endergonic. Cells nevertheless make glutamine continuously. Which mechanism allows this reaction to proceed in cells?',
    options: [
      'Coupling it to ATP hydrolysis, often by moving a phosphate group onto a reactant',
      'Heating the reactants until enough of their molecules collide with the needed energy',
      'Binding the reactants to an enzyme that makes the reaction release free energy instead',
      'Raising the concentration of glutamine so that the reaction is pushed in the forward direction',
    ],
    correctAnswer: 0,
    explanation:
      'Cells drive endergonic reactions by coupling them to the exergonic hydrolysis of ATP; a phosphorylated intermediate makes the overall process release energy. Cells do not heat themselves enough to drive reactions, and an enzyme lowers activation energy without changing whether a reaction is exergonic or endergonic. Adding more product pushes a reaction backward, not forward.',
  },

  /* ============================ UNIT 4 — CELL COMMUNICATION & CELL CYCLE (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_HORMONE,
    question: 'Which claim is best supported by the result of treatment 4?',
    options: [
      'M* binds the receptor for H at the cell surface and activates it in the same way that H does.',
      'M acts downstream of the receptor, so raising M alone is enough to trigger glucose release.',
      'Glucose release requires H to bind its receptor, even when M is already present in the cell.',
      'M is a product of glycogen breakdown, so it rises only after the cells have released glucose.',
    ],
    correctAnswer: 1,
    explanation:
      'With no H at all, a compound that mimics M inside the cell produced almost the full response (95 vs 100), so M is sufficient and acts after the receptor step. The stimulus says M* enters cells and acts like M, not that it binds the surface receptor, and the result shows H is not required once M is present. Treatment 2 shows M rising when H is added, and the stimulus describes M as activating glycogen breakdown, not as its product.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_HORMONE,
    question: 'Cells in treatment 5 released more glucose than cells in treatment 2. Which explanation is most consistent with the data?',
    options: [
      'Drug P activated the receptor for H, so more molecules of H bound to each cell than in treatment 2.',
      'Drug P blocked the breakdown of glycogen, so the cells kept more of their glucose stored inside them.',
      'Breakdown of M normally ends the signal, so blocking it let M build up and prolonged the cells\' response.',
      'Drug P lowered the amount of M needed for a response, so the same level of M caused a larger effect.',
    ],
    correctAnswer: 2,
    explanation:
      'Drug P blocks the enzyme that destroys M, and M rose from 20 to 45 units, so the extra glucose release follows from more M lasting longer; removing a signaling molecule is how cells normally switch a response off. Drug P acts on the M-degrading enzyme, not the receptor. Blocking glycogen breakdown would lower glucose release, and M was not the same in the two treatments, it was more than twice as high.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_HORMONE,
    question: 'A mutation changes the receptor so that it stays in its active shape whether or not H is bound. In cells with this mutation and no added H, the researchers would most likely observe',
    options: [
      'low M and low glucose release, similar to treatment 3',
      'low M but high glucose release, similar to treatment 4',
      'high M but low glucose release, because H is still required',
      'high M and high glucose release, similar to treatment 2',
    ],
    correctAnswer: 3,
    explanation:
      'A receptor locked in its active shape relays the signal without the ligand, so M would rise and glucose would be released as if H were present. Low M with low release describes a pathway that is not activated. Treatment 4 shows that high M is enough for release, so high M with low release is not expected, and an active receptor raises M rather than bypassing it.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus: SET_HORMONE,
    question: 'Which comparison provides the best evidence that H must bind its receptor to raise the level of M?',
    options: [
      'Treatments 2 and 3',
      'Treatments 1 and 4',
      'Treatments 2 and 5',
      'Treatments 4 and 5',
    ],
    correctAnswer: 0,
    explanation:
      'Treatments 2 and 3 differ only in drug R, which blocks binding of H to its receptor; with binding blocked, M stayed at the baseline level of 1 instead of rising to 20. Treatments 1 and 4 test whether M alone is sufficient, treatments 2 and 5 test how the signal is turned off, and treatments 4 and 5 differ in more than one variable.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'In one signaling pathway, each activated receptor activates 20 relay-protein molecules, each relay protein activates one enzyme molecule, and each enzyme molecule makes 500 molecules of a second messenger per second. How many second-messenger molecules are made per second for each activated receptor?',
    options: [
      '520',
      '10,000',
      '1,000',
      '100,000',
    ],
    correctAnswer: 1,
    explanation:
      'The steps multiply: 1 receptor × 20 relay proteins × 1 enzyme each × 500 messengers per enzyme per second = 10,000 per second, which is how a few ligand molecules produce a large response. Adding the numbers (520) treats the steps as additive, 1,000 drops the factor of 20 relay proteins for a factor of 2, and 100,000 adds an extra factor of 10.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Cancer can begin when just one of a cell\'s two copies of a gene for a growth-promoting protein is mutated, but it usually requires both copies of a gene for a protein that halts the cell cycle to be mutated. Which explanation best accounts for this difference?',
    options: [
      'Genes for growth-promoting proteins lie on sex chromosomes, so a cell has only one copy of each of them.',
      'Genes for halting proteins mutate much less often, so two mutations are needed before any change can occur.',
      'One normal copy still makes enough of the halting protein, but one overactive growth protein drives division alone.',
      'One mutant copy of either gene makes the cell divide, but cells with mutant halting genes are always removed.',
    ],
    correctAnswer: 2,
    explanation:
      'A mutation that makes a growth-promoting protein overactive is dominant, because the overactive protein pushes the cell to divide whatever the normal copy does. A halting protein (tumor suppressor) still works if one normal copy remains, so its loss of function shows only when both copies fail. These genes are mostly on autosomes, mutation rates do not explain the pattern, and cells with damaged halting genes are not always removed, which is why such mutations contribute to cancer.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Some cells signal their neighbors with a signal molecule that stays attached to the plasma membrane of the signaling cell. Which result would best support the claim that signal X works this way, rather than as a secreted molecule?',
    options: [
      'Target cells respond to medium taken from X-producing cells, even when no producing cells are present.',
      'Target cells respond more strongly the farther they are placed from the X-producing cells.',
      'Target cells respond to X-producing cells on the other side of a filter that lets molecules pass.',
      'Target cells respond only when touching X-producing cells, and not to medium taken from those cells.',
    ],
    correctAnswer: 3,
    explanation:
      'A membrane-bound signal acts only through direct contact, so targets should respond when touching the producing cells but not to the medium, which contains no free signal. A response to medium alone or across a molecule-permeable filter would show a secreted signal. A response that grows with distance fits neither contact nor diffusion from a source.',
  },

  /* ============================ UNIT 5 — HEREDITY (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus: SET_LINKAGE,
    question: 'If the two genes assorted independently, which offspring numbers would be expected from this cross?',
    options: [
      'About 250 of each of the four phenotypes',
      'About 562, 188, 188 and 62 (a 9:3:3:1 ratio)',
      'Only tall, smooth and dwarf, hairy plants, 500 of each',
      'About 750 tall and 250 dwarf, with half of each group hairy',
    ],
    correctAnswer: 0,
    explanation:
      'This is a test cross: the dihybrid parent makes four gamete types in equal proportions if the genes assort independently, and the tthh parent contributes only t h, so the four phenotypes appear 1:1:1:1, about 250 each. A 9:3:3:1 ratio comes from crossing two dihybrids, only two classes would mean complete linkage, and a 3:1 tall-to-dwarf ratio would need both parents to carry T.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus: SET_LINKAGE,
    question: 'Which statement correctly reports a chi-square test of the hypothesis that the genes assort independently?',
    options: [
      'χ² ≈ 96 with 3 degrees of freedom, so the hypothesis of independent assortment is rejected.',
      'χ² ≈ 385 with 3 degrees of freedom, so the hypothesis of independent assortment is rejected.',
      'χ² ≈ 2.5 with 3 degrees of freedom, so the hypothesis of independent assortment is supported.',
      'χ² ≈ 385 with 1 degree of freedom, so the hypothesis of independent assortment is rejected.',
    ],
    correctAnswer: 1,
    explanation:
      'With 250 expected in each class, χ² = (162² + 148² + 158² + 152²) / 250 ≈ 385, and four phenotype classes give 3 degrees of freedom (critical value 7.81). Because 385 is far above 7.81, the hypothesis is rejected. The value 96 divides the summed squared deviations by the total of 1,000 instead of by each expected value, 2.5 adds the deviations divided by 250 without squaring them, and a four-class test has 3, not 1, degrees of freedom.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus: SET_LINKAGE,
    question: 'Based on these data, what is the distance between the two genes?',
    options: [
      '41 map units',
      '9.2 map units',
      '19 map units',
      '81 map units',
    ],
    correctAnswer: 2,
    explanation:
      'The rare classes are the recombinants: (92 + 98) / 1,000 = 0.19, or 19% recombination, which is 19 map units. Using only one recombinant class gives 9.2, 41 comes from one parental class (412 / 1,000), and 81 is the share of parental offspring, not of recombinants.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus: SET_LINKAGE,
    question: 'Which arrangement of alleles on the homologous chromosomes of the heterozygous parent best accounts for the data?',
    options: [
      'One homolog had the tall and hairy alleles; the other had the dwarf and smooth alleles.',
      'Both homologs had the tall and smooth alleles, so the parent was true-breeding.',
      'The tall and hairy alleles were on two different, nonhomologous chromosomes.',
      'One homolog had the tall and smooth alleles; the other had the dwarf and hairy alleles.',
    ],
    correctAnswer: 3,
    explanation:
      'The most common offspring (tall, smooth and dwarf, hairy) carry the parental combinations, so one homolog carried T with h and the other t with H. If T and H had been on the same homolog, tall, hairy and dwarf, smooth would be the common classes. Genes on different chromosomes would give a 1:1:1:1 ratio, and a parent with T and h on both homologs could not be heterozygous or produce dwarf offspring.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'In a family studied for three generations, a rare muscle disorder passes from affected mothers to all of their sons and daughters. The children of an affected father and an unaffected mother are never affected. Which explanation best accounts for this pattern?',
    options: [
      'The allele is in mitochondrial DNA, passed to offspring in the egg\'s cytoplasm.',
      'The allele is X-linked dominant, so affected fathers pass it to all daughters.',
      'The allele is X-linked recessive, so it passes from mothers to their sons only.',
      'The allele is autosomal dominant, so each child of an affected parent has it.',
    ],
    correctAnswer: 0,
    explanation:
      'Mitochondria are passed to offspring in the egg cytoplasm, not by sperm, so an affected mother passes the trait to all her children and an affected father to none. An X-linked recessive allele from a carrier mother would affect about half her sons and few daughters. An X-linked dominant allele from an affected father would affect all his daughters, and an autosomal dominant allele would pass from affected fathers as often as from mothers.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'In the cross AaBbCc × AabbCc, the three genes assort independently and each dominant allele is completely dominant. What fraction of the offspring is expected to show the dominant phenotype for gene A and the recessive phenotypes for genes B and C?',
    options: [
      '3/64',
      '3/32',
      '1/16',
      '9/64',
    ],
    correctAnswer: 1,
    explanation:
      'By the product rule, P(A_) from Aa × Aa = 3/4, P(bb) from Bb × bb = 1/2, and P(cc) from Cc × Cc = 1/4, so the fraction is 3/4 × 1/2 × 1/4 = 3/32. The value 3/64 treats the B cross as Bb × Bb, 1/16 drops the A term, and 9/64 treats the B cross as giving 3/4 instead of 1/2.',
  },

  /* ============================ UNIT 6 — GENE EXPRESSION & REGULATION (8) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE,
    question: 'What is the sequence of the mRNA transcribed from this region?',
    options: [
      '5′-ATG CCT GAA TGG TAA-3′',
      '5′-UAC GGA CUU ACC AUU-3′',
      '5′-AUG CCU GAA UGG UAA-3′',
      '5′-AAU GGU AAG UCC GUA-3′',
    ],
    correctAnswer: 2,
    explanation:
      'RNA polymerase pairs each template base with its complement (A–U, T–A, G–C, C–G) and builds the mRNA 5′ to 3′, antiparallel to the template, giving 5′-AUG CCU GAA UGG UAA-3′. The UAC sequence copies the template itself, the ATG sequence is the DNA coding strand (RNA has U, not T), and AAU GGU... is the correct transcript written backward.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE,
    question: 'A mutation inserts one extra G into the template strand between its first and second triplets, giving 3′-TAC G GGA CTT ACC ATT-5′. What polypeptide does this region now encode?',
    options: [
      'Met-Pro-Glu-Trp, the same as before the insertion',
      'Met-Leu-Glu-Trp, because only one codon is changed',
      'Met-Pro-Pro-Glu-Trp, with one extra amino acid added',
      'Met-Pro, because the shift creates an early stop codon',
    ],
    correctAnswer: 3,
    explanation:
      'The new mRNA is 5′-AUG CCC UGA AUG GUA A-3′; the insertion shifts the reading frame, and the third codon becomes UGA, a stop codon, so translation ends after Met-Pro. A single-base insertion changes every codon after it rather than adding one amino acid or altering only one codon, so the sequence does not stay the same or gain a whole residue.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE,
    question: 'Which single change to the template strand of the original region would NOT change the amino acid sequence of the polypeptide?',
    options: [
      'Changing CTT to CTC',
      'Changing ACC to ATC',
      'Changing GGA to GAA',
      'Deleting the first C of CTT',
    ],
    correctAnswer: 0,
    explanation:
      'Template CTT is transcribed as GAA (Glu); changing it to CTC gives GAG, which also codes for Glu, so this is a silent mutation. GGA to GAA changes the codon CCU (Pro) to CUU (Leu), a missense mutation. ACC to ATC changes UGG (Trp) to UAG (stop), a nonsense mutation, and deleting a base shifts the reading frame.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus: SET_CODE,
    question: 'Which nucleic acid sequence matches the mRNA from this region exactly, except for having T where the mRNA has U?',
    options: [
      'The template strand, read from its 3′ end to its 5′ end',
      'The DNA strand that pairs with the template strand',
      'The template strand, read from its 5′ end to its 3′ end',
      'The tRNA anticodons for each codon, listed in order',
    ],
    correctAnswer: 1,
    explanation:
      'The mRNA is complementary to the template strand, and so is the nontemplate strand, so the nontemplate (coding) strand has the same sequence and direction as the mRNA, with T in place of U. The template strand is complementary to the mRNA in either reading direction, and the anticodons are complementary to the codons, not identical to them.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'In E. coli, the genes for the enzymes that make the amino acid tryptophan form one operon, and tryptophan can bind the operon\'s repressor protein. When tryptophan is plentiful in the cell,',
    options: [
      'the repressor leaves the operator, so the operon is transcribed at a higher rate',
      'tryptophan binds the promoter directly and recruits more RNA polymerase to it',
      'the repressor binds the operator and blocks RNA polymerase from transcribing it',
      'ribosomes stop translating the operon\'s mRNA, while transcription is unchanged',
    ],
    correctAnswer: 2,
    explanation:
      'Tryptophan acts as a corepressor: bound tryptophan activates the repressor, which binds the operator and blocks RNA polymerase, so the cell stops making enzymes for a product it already has. Releasing the repressor would raise enzyme production when it is least needed. Tryptophan works through the repressor rather than the promoter, and this regulation acts on transcription.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'Yeast cells were moved from 25°C to 39°C at time 0. The amounts of mRNA from gene H and of protein H were measured in relative units. In a second culture, a drug that blocks transcription was added just before the temperature shift.\n\n| Time after shift (min) | Gene H mRNA, no drug | Protein H, no drug | Gene H mRNA, drug | Protein H, drug |\n|---|---|---|---|---|\n| 0 | 1 | 1 | 1 | 1 |\n| 10 | 40 | 3 | 1 | 1 |\n| 30 | 55 | 30 | 1 | 1 |\n| 60 | 50 | 48 | 0.5 | 1 |',
    question: 'Which conclusion about the effect of heat on gene H is best supported?',
    options: [
      'Heat makes the existing protein H more stable, without any new gene H mRNA being made.',
      'Heat makes ribosomes translate the existing gene H mRNA faster, without new transcription.',
      'Heat blocks the breakdown of gene H mRNA, so the mRNA builds up without new transcription.',
      'Heat raises the expression of gene H mainly by increasing the transcription of the gene.',
    ],
    correctAnswer: 3,
    explanation:
      'Without the drug, gene H mRNA rose 40-fold within 10 minutes and protein H followed; when transcription was blocked, neither rose, so the response depends on making new mRNA, that is, on increased transcription. If heat only stabilized the protein, sped up translation of existing mRNA, or slowed mRNA breakdown, protein H or its mRNA would have risen even with transcription blocked.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'DNA from a crime-scene sample and from three suspects was cut with the same restriction enzyme, and the fragments were separated by gel electrophoresis.\n\n' +
      '| Sample | Fragment sizes (base pairs) |\n' +
      '|---|---|\n' +
      '| Crime scene | 4,000; 2,500; 900 |\n' +
      '| Suspect 1 | 4,000; 1,800; 900 |\n' +
      '| Suspect 2 | 4,000; 2,500; 900 |\n' +
      '| Suspect 3 | 3,200; 2,500; 600 |',
    question: 'Which statement about the gel is correct?',
    options: [
      'Suspect 2 matches, and in that lane the 900 bp fragment moved farthest from the well.',
      'Suspect 2 matches, and in that lane the 4,000 bp fragment moved farthest from the well.',
      'Suspect 1 matches, because the 4,000 bp and 900 bp bands are found in the sample.',
      'Suspect 3 matches, because it has as many bands as the crime-scene sample has.',
    ],
    correctAnswer: 0,
    explanation:
      'Only suspect 2 has all three of the sample\'s fragment sizes. DNA is negatively charged and moves toward the positive electrode, and small fragments slip through the gel fastest, so the 900 bp fragment travels farthest. Suspect 1 shares two of the three bands, which excludes a match, and having the same number of bands is not a match when the sizes differ.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'During translation, in which direction does a ribosome move along an mRNA, and where is each new amino acid added to the growing polypeptide?',
    options: [
      'Toward the mRNA\'s 5′ end; each amino acid joins the carboxyl end of the chain',
      'Toward the mRNA\'s 3′ end; each amino acid joins the carboxyl end of the chain',
      'Toward the mRNA\'s 3′ end; each amino acid joins the amino end of the chain',
      'Toward the mRNA\'s 5′ end; each amino acid joins the amino end of the chain',
    ],
    correctAnswer: 1,
    explanation:
      'Ribosomes read mRNA 5′ to 3′, so they move toward the 3′ end, and each new amino acid is linked by its amino group to the carboxyl group at the end of the growing chain, so the polypeptide grows from its amino end toward its carboxyl end. Moving toward the 5′ end would read the codons backward, and the amino end is where the chain began, not where amino acids are added.',
  },

  /* ============================ UNIT 7 — NATURAL SELECTION (10) ============================ */
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_LIZARDS,
    question: 'Assume that the genotype frequencies of the lizards counted on dark soil match Hardy–Weinberg proportions. What is the frequency of allele b there?',
    options: [
      '0.8',
      '0.04',
      '0.2',
      '0.96',
    ],
    correctAnswer: 2,
    explanation:
      'Pale lizards (bb) are 4 of 100, so $q^{2} = 0.04$ and $q = 0.2$. The value 0.04 is the frequency of the bb genotype, not of the allele; 0.8 is the frequency of B; and 0.96 is the share of brown lizards.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_LIZARDS,
    question: 'Which conclusion is best supported by the results with the clay models?',
    options: [
      'Predators attack brown lizards more often wherever they live, so allele B is selected against.',
      'Predators attack the clay models at random, so skin color has no effect on a lizard\'s survival.',
      'Skin color is set by the ground the lizards live on rather than by the alleles they inherit.',
      'Predators find lizards that contrast with the ground more easily, so skin color affects survival.',
    ],
    correctAnswer: 3,
    explanation:
      'At each site the model that contrasted with the ground was attacked about four to five times as often (pale models on dark soil, brown models on white dunes), so matching the background improves survival. Brown models were attacked less on dark soil, so predators do not favor one color everywhere. The models show predation, not how color develops, and the attack rates are far from random.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_LIZARDS,
    question: 'Which finding best supports the claim that the color difference between the two sites resulted from natural selection rather than genetic drift?',
    options: [
      'At each site, the common skin color is the color that predators attacked less often.',
      'Allele B, for brown color, is common on dark soil and rare on the white dunes nearby.',
      'Brown and pale lizards from the same site can interbreed and produce fertile young.',
      'The lizard population on the dunes is about the same size as the one on dark soil.',
    ],
    correctAnswer: 0,
    explanation:
      'Drift changes allele frequencies at random with respect to traits, whereas selection makes the trait that improves survival common; the color that predators attack less is the common one at both sites. A difference in allele frequency between sites could arise by drift alone. Interbreeding and population size say nothing about whether the change was adaptive.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_LIZARDS,
    question: 'Lizards sometimes move between the two sites. What is the most likely effect of this movement on the dark-soil population?',
    options: [
      'It speeds the formation of two separate species, because it mixes the alleles of the two sites.',
      'It adds b alleles from the dunes each generation, so a few pale lizards keep appearing.',
      'It makes brown lizards produce pale offspring by changing the B alleles they carry into b alleles.',
      'It has no effect, because natural selection acts on individual lizards rather than on alleles.',
    ],
    correctAnswer: 1,
    explanation:
      'Migrants from the dunes carry b alleles, so gene flow keeps adding them to the dark-soil population even though selection removes pale lizards there, which helps explain the 4 pale lizards. Gene flow makes populations more alike, which slows speciation. Moving does not change an individual\'s alleles, and selection on individuals does change allele frequencies.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus: SET_LIZARDS,
    question: 'Allele B arose by a mutation. Which statement about the origin and spread of B on the dark soil is best supported?',
    options: [
      'The dark soil caused the mutation in lizards whose pale skin made them easy to see.',
      'Lizards that darkened while living on dark soil passed the acquired color to their young.',
      'The mutation happened by chance, and the dark soil made lizards carrying it more likely to survive.',
      'The mutation could only have arisen after predators had started hunting on the dark soil.',
    ],
    correctAnswer: 2,
    explanation:
      'Mutations arise at random with respect to need; once B existed, brown lizards on dark soil were attacked less, survived and reproduced more, and B became common. The environment does not cause the mutations an organism needs, characteristics acquired during life are not inherited, and nothing requires the mutation to postdate the predators.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'In a population of wildflowers in Hardy–Weinberg equilibrium for a gene with two alleles, 9% of the plants have white flowers, the recessive phenotype; the rest have purple flowers. What percentage of the purple-flowered plants are heterozygous?',
    options: [
      '54%',
      '42%',
      '49%',
      '46%',
    ],
    correctAnswer: 3,
    explanation:
      'Here $q^{2} = 0.09$, so $q = 0.3$ and $p = 0.7$. Heterozygotes are $2pq = 0.42$ of all plants and purple plants are $1 - 0.09 = 0.91$, so $0.42 \\div 0.91 \\approx 46\\%$ of purple plants are heterozygous. The value 42% is the share of all plants, 49% is $p^{2}$ as a share of all plants, and 54% is the share of purple plants that are homozygous.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Hunting reduced the northern elephant seal to about 20 individuals in the 1890s. Under protection, the population has grown to more than 200,000, yet almost no genetic variation is found at the genes studied. A related southern species that was never reduced to such low numbers is highly variable at the same genes. Which process best explains the northern population\'s low variation?',
    options: [
      'A bottleneck, in which chance alone determined which alleles the few survivors carried',
      'Gene flow from the southern species, which replaced the northern population\'s alleles',
      'Natural selection for one best genotype at every gene as the population grew in size again',
      'New mutations in the growing population, which converted many alleles into a single allele',
    ],
    correctAnswer: 0,
    explanation:
      'When a population crashes to a few individuals, the alleles that survive are a chance sample, and many are lost; regrowth from that small group cannot restore them, so the large modern population carries little variation. Gene flow from a highly variable species would add variation, not remove it. Selection is unlikely to have favored a single genotype at every gene studied, and mutation adds new alleles rather than merging existing ones.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Two closely related species of field crickets live in the same meadows. One species becomes sexually mature and mates only in spring, and the other only in late summer. In the laboratory, adults of the two species mate readily and produce healthy, fertile hybrids. Which barrier keeps the two species apart in nature?',
    options: [
      'A postzygotic barrier that makes the hybrid offspring sterile',
      'A temporal barrier, because the two species mate in different seasons',
      'A geographic barrier that keeps the two species physically apart',
      'A behavioral barrier in which females ignore the other species\' males',
    ],
    correctAnswer: 1,
    explanation:
      'The species share meadows and mate readily when brought together, but in nature their breeding seasons do not overlap, so mating never happens; this is temporal isolation, a prezygotic barrier. The healthy, fertile hybrids rule out a postzygotic barrier, the ready mating in the laboratory rules out a behavioral one, and living in the same meadows rules out geographic isolation.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Marine stickleback fish are covered with bony armor plates. After the last ice age, marine sticklebacks colonized many newly formed freshwater lakes, and in lake after lake the fish evolved to have few plates. An allele that causes low armor is present at about 1% frequency in marine populations. Which explanation for the repeated evolution of low armor is best supported?',
    options: [
      'Lake water made each young fish grow fewer plates, and this acquired change was passed to its offspring.',
      'The same new low-armor mutation happened to arise by chance in every lake soon after it was colonized.',
      'Selection in each lake favored a low-armor allele that the colonists already carried.',
      'Genetic drift alone fixed the low-armor allele, independently and by chance, in every one of the lakes.',
    ],
    correctAnswer: 2,
    explanation:
      'The low-armor allele already existed at low frequency in the marine ancestors, so colonists brought it to each lake, where selection raised its frequency; the same change in many independent lakes points to selection rather than chance. Acquired changes are not inherited. An identical new mutation arising separately in every lake is very unlikely when the allele was already available, and drift would not push many lakes in the same direction.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'In Florida, soapberry bugs pierce fruits with their beaks to reach the seeds inside. The native host plant has large fruits. An introduced tree with much smaller fruits became common about 50 years ago, and bugs living on it now have much shorter beaks than bugs on the native host. Offspring of both groups raised in the laboratory on either kind of fruit have beaks like their parents\'. Which conclusion is best supported?',
    options: [
      'Beak length is set by the fruit each bug feeds on while it is developing.',
      'The bugs on the introduced tree are an older species that was already short-beaked.',
      'Short beaks developed because the bugs on small fruits used their beaks less.',
      'The difference in beak length is heritable and evolved after the introduced tree spread.',
    ],
    correctAnswer: 3,
    explanation:
      'Laboratory-raised offspring keep their parents\' beak length whatever fruit they eat, so the difference is genetic, and it arose after the small-fruited tree became common, showing evolution on a short time scale. The rearing results rule out an effect of the fruit on development and of use or disuse, and the short-beaked bugs live on a tree that has been common for only about 50 years.',
  },

  /* ============================ UNIT 8 — ECOLOGY (8) ============================ */
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'A population of 400 field mice has a maximum per capita growth rate ($r_{max}$) of 0.3 per month while food is abundant. For exponential growth, $\\frac{dN}{dt} = r_{max}N$.',
    question: 'What is the population\'s growth rate at this time?',
    options: [
      '120 mice per month',
      '133 mice per month',
      '12 mice per month',
      '1,200 mice per month',
    ],
    correctAnswer: 0,
    explanation:
      'The population grows by $r_{max}N = 0.3 \\times 400 = 120$ mice per month. The value 133 divides 400 by 3 instead of multiplying by 0.3, 12 misplaces the decimal point (0.03 × 400), and 1,200 multiplies by 3 instead of 0.3.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'Reef-building corals get most of their food from photosynthetic algae that live inside their tissues, and the corals supply the algae with shelter and nutrients. When corals lose these algae, they turn white ("bleach"). Researchers recorded bleaching on reefs during a warm summer and coral deaths six months later.\n\n| Water temperature above the summer average (°C) | Colonies bleached (%) | Colonies dead after 6 months (%) |\n|---|---|---|\n| 0 | 2 | 1 |\n| +0.5 | 5 | 1 |\n| +1.0 | 30 | 8 |\n| +1.5 | 70 | 25 |\n| +2.0 | 92 | 51 |',
    question: 'Which explanation best accounts for the coral deaths in the warmest water?',
    options: [
      'Heat killed the corals directly, and the algae left their tissues only after the corals had died.',
      'Heat broke down the mutualism, so the corals lost the sugars that their algae made by photosynthesis.',
      'The algae became parasites in warm water and began to feed on the tissues of the corals.',
      'Warm water held more dissolved oxygen, and the extra oxygen poisoned the cells of the coral.',
    ],
    correctAnswer: 1,
    explanation:
      'Bleaching (loss of the algae) rose sharply above +1.0°C and deaths followed months later, so the corals starved after losing the photosynthetic partners that supply most of their food. The algae left first, not after the corals died. Nothing indicates the algae became parasites, and warm water holds less dissolved oxygen, not more.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'In some regions of the open ocean, the water has plenty of nitrate and phosphate but few phytoplankton. Researchers added dissolved iron to a 64 km² patch of such ocean and sampled it and the surrounding water for two weeks.\n\n| Measurement after 2 weeks | Inside the iron-treated patch | Surrounding water |\n|---|---|---|\n| Phytoplankton chlorophyll (µg/L) | 3.2 | 0.3 |\n| Nitrate (µmol/L) | 6 | 21 |\n| Dissolved $CO_{2}$ (relative units) | 0.8 | 1.0 |',
    question: 'Which conclusion about the phytoplankton in this region is best supported?',
    options: [
      'Nitrate was the limiting nutrient, because it was used up as the phytoplankton grew.',
      'Iron is toxic to the predators of phytoplankton, so the phytoplankton were not eaten.',
      'Iron was the nutrient limiting the growth of phytoplankton in this part of the ocean.',
      'The phytoplankton grew because the iron gave them a new source of chemical energy.',
    ],
    correctAnswer: 2,
    explanation:
      'Nitrate was plentiful before iron was added, yet phytoplankton stayed scarce; adding only iron produced a bloom, so iron was in shortest supply relative to need. Nitrate fell only because the growing phytoplankton used it after iron was supplied. The data give no evidence about predators, and phytoplankton get their energy from light, not from iron.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Five species of insect-eating warblers live in the same spruce forest. Each species feeds mostly in a different part of the trees: the treetops, the outer branches, the middle branches, near the trunk, or the lowest branches. Which explanation best accounts for this pattern?',
    options: [
      'Competition is absent, because the forest has more insects than the birds can eat.',
      'The five species are mutualists that share their food by feeding in different places.',
      'Each species is a keystone predator that controls the prey of the other four species.',
      'Dividing the shared resource reduces competition and lets the five species coexist.',
    ],
    correctAnswer: 3,
    explanation:
      'Species that use the same resource in different ways (resource partitioning) compete less, which allows similar species to coexist instead of one excluding the others. Mutualism requires each species to benefit the other, which feeding in different places does not do. Nothing indicates a keystone role, and if food were unlimited there would be no pressure for the species to divide the trees.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Cattle egrets follow grazing cattle and eat the insects that the cattle stir up from the grass as they walk. The cattle are neither helped nor harmed by the egrets. Which type of interaction is this?',
    options: [
      'Commensalism, because one species benefits and the other is unaffected',
      'Mutualism, because both species gain food from the same grassland',
      'Parasitism, because the egrets take food that belongs to the cattle',
      'Competition, because both species feed in the same area of grass',
    ],
    correctAnswer: 0,
    explanation:
      'The egrets benefit by catching insects more easily, and the cattle gain nothing and lose nothing, which defines commensalism. Mutualism requires both species to benefit. The egrets eat insects, not the cattle\'s food or tissues, so this is not parasitism or competition for a shared resource.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'When caterpillars chew on corn leaves, the damaged plants release airborne chemicals that attract parasitic wasps, which lay their eggs in the caterpillars and kill them. Undamaged plants do not release these chemicals. How does this response most likely increase the fitness of the corn?',
    options: [
      'The chemicals poison the caterpillars directly, so plants never need to attract any wasps.',
      'Wasps kill the caterpillars, so signaling plants lose less tissue and make more seeds.',
      'The chemicals warn nearby corn plants to grow faster, so the field produces more total biomass.',
      'Wasps pollinate the corn flowers in return, so plants that release the signal make more seeds.',
    ],
    correctAnswer: 1,
    explanation:
      'The plant\'s signal recruits a predator of its herbivore, so signaling plants lose less leaf tissue and can put more energy into reproduction. The chemicals attract wasps rather than poisoning the caterpillars, the scenario says nothing about signaling to other plants or about growth rates, and corn is wind-pollinated, so the wasps are not pollinators.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'A floating water plant introduced to a lake on another continent covered most of the lake\'s surface within five years. In its native range the plant is uncommon, and two weevil species there feed only on it; neither weevil lives in the new range. Which prediction is best supported?',
    options: [
      'The plant will soon decline, because its population is already above the lake\'s carrying capacity.',
      'Native fish will control the plant within one season by switching from eating insects to eating it.',
      'Releasing a host-tested insect enemy from the plant\'s native area could shrink the infestation.',
      'Adding fertilizer to the lake would let the native plants outcompete the floating plant within a year.',
    ],
    correctAnswer: 2,
    explanation:
      'The plant thrives where it has escaped its specialist herbivores, so restoring one of them could limit it, which is the basis of biological control. A population covering the lake has not exceeded its resources in a way that predicts collapse, and native fish are not reported to eat it. Extra nutrients usually favor fast-growing floating plants rather than the native plants.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'Researchers planted grassland plots with 1, 4 or 16 plant species and measured the plant biomass in each plot in a normal year and in a drought year.\n\n' +
      '| Species planted | Biomass, normal year (g/m²) | Biomass, drought year (g/m²) |\n' +
      '|---|---|---|\n' +
      '| 1 | 400 | 120 |\n' +
      '| 4 | 520 | 290 |\n' +
      '| 16 | 610 | 480 |',
    question: 'Which claim is best supported by the data?',
    options: [
      'Drought lowered biomass by the same amount in every plot, whatever the number of species.',
      'The one-species plots grew the most biomass in the normal year and the least in the drought.',
      'Plots with more species grew less biomass in a normal year but more in the drought.',
      'Plots with more species kept a larger share of their biomass during the drought.',
    ],
    correctAnswer: 3,
    explanation:
      'The 1-, 4- and 16-species plots kept 30%, about 56% and about 79% of their normal biomass in the drought, so more diverse plots were more resilient. The losses (280, 230 and 130 g/m²) were not equal. The 16-species plots grew the most biomass in both years, and the one-species plots grew the least in both.',
  },
]
