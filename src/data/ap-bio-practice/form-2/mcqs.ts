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
    optionExplanations: [
      'Adhesion, hydrogen bonding between water and the polar glass, pulls water up the walls. Cohesion, hydrogen bonding among water molecules, drags the rest of the column along, so water rises in the tube.',
      'Specific heat describes how much a substance\'s temperature changes when it gains or loses heat; it has nothing to do with capillary rise. Nothing in the setup heats the water so that it expands up the tube.',
      'Glass is polar, not nonpolar, so water is attracted to it rather than repelled. Tube 5 shows the opposite of this claim: when the wall was made nonpolar with wax, the water did not rise at all.',
      'Every tube is open to the same air as the dish, so there is no pressure difference to draw water up as in a straw. The rise comes from water\'s attraction to the glass and to itself.',
    ],
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
    optionExplanations: [
      'About 6 mm reverses the relationship. The data show that narrower tubes give higher rises, so a tube one-tenth as wide as tube 3 should raise water higher than 60 mm, not lower.',
      'Halving the diameter doubles the rise (15, 30, 60 mm), so the rise is inversely proportional to the diameter. A 0.05 mm tube is one-tenth the width of tube 3, so the rise is about 10 × 60 = 600 mm.',
      'About 60 mm is the rise already measured in the 0.5 mm tube. It ignores the tenfold decrease in diameter, which the trend says should raise the column about ten times higher.',
      'About 6,000 mm treats a tenfold decrease in diameter as if it produced a hundredfold increase in rise. In tubes 1–3 the rise changes by the same factor as the diameter but inversely, so the factor is 10.',
    ],
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
    optionExplanations: [
      'Hexane is a nonpolar hydrocarbon with no O–H or N–H bonds, so it forms no hydrogen bonds with glass at all. Strong attraction to the glass would make it rise higher, not hold it near the bottom.',
      'The stimulus identifies hexane as a nonpolar liquid, so its molecules are not polar and carry no charges. Its weak rise comes from weak attractions, not from repulsion by the glass.',
      'Without hydrogen bonds, hexane molecules are held together only by weak dispersion forces. The cohesion that drags the column upward is much weaker than in water, so hexane rises less in a tube of the same width.',
      'Water, not hexane, has the unusually high specific heat. Specific heat also does not drive capillary rise, so it cannot explain the difference between tubes 2 and 4.',
    ],
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
    optionExplanations: [
      'Tube 5 shows the opposite. Cohesion among water molecules was unchanged by the wax, yet the water did not rise; if cohesion alone caused the rise, tube 5 would match tube 2.',
      'Wax is nonpolar, not polar. Coating the glass removed the polar surface that water hydrogen-bonds to, which is why the water no longer climbed the wall.',
      'Wax is a nonpolar lipid and does not dissolve in water, so it cannot break water\'s hydrogen bonds. Water\'s cohesion and surface tension were still present in tube 5.',
      'The wax coating removed the polar glass surface that water adheres to, and the rise disappeared even though cohesion was unchanged. Attraction to the tube wall is therefore needed for water to rise.',
    ],
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
    optionExplanations: [
      'Each separated polypeptide still folds normally, so its primary, secondary, and tertiary structure are intact, yet it cannot bind oxygen. Binding must depend on how the four subunits fit together, which is quaternary structure.',
      'The stem says each separated polypeptide still folds into its normal shape, so tertiary structure is intact. Since binding is still lost, the missing feature must be the association of the subunits.',
      'Helices and sheets are part of each polypeptide\'s normal fold, and the separated chains still fold normally. Secondary structure is therefore present even though oxygen binding is lost.',
      'Separating the polypeptides does not change their amino acid sequences, so primary structure is unchanged. What is lost is the assembly of the four chains into one functional protein.',
    ],
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
    optionExplanations: [
      'A–T pairs are held by two hydrogen bonds and G–C pairs by three, so the number is not the same in every pair. The constant width comes from the sizes of the paired bases, not from their bond counts.',
      'Every pair contains one two-ring purine (A or G) and one one-ring pyrimidine (T or C). Each rung of the ladder therefore spans the same distance, keeping the backbones a constant width apart.',
      'Paired bases are joined by hydrogen bonds, not covalent bonds, which is why the strands can be separated during replication. The type of bond also would not explain the constant width.',
      'Two purines would be too wide to fit between the backbones, and two pyrimidines would be too narrow. Pairs actually join one purine and one pyrimidine, which gives a constant width.',
    ],
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
    optionExplanations: [
      'A rate that rises with outside concentration fits simple diffusion as well as transport by proteins. Only a rate that stops rising shows that a limited number of transporters are in use.',
      'The lower rate in drug-treated cells shows that most uptake depends on ATP. That supports active transport, but it does not show that the number of transport proteins limits the rate.',
      'When the rate stops increasing even though more amino acid is available, every transporter is already in use. A limited number of transport proteins therefore sets the maximum rate near 16 nmol/min.',
      'Building up a concentration higher than the outside shows the cells use energy to move the amino acid against its gradient. It does not show that the number of transporters is limited.',
    ],
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
    optionExplanations: [
      'Simple diffusion stops when the inside and outside concentrations are equal, as happened in the drug-treated cells. The untreated cells reached 25 mM inside versus 2.0 mM outside, so this was not diffusion.',
      'An inside level higher than the outside level shows net uptake, not loss. The cells gathered the amino acid from the medium until its concentration inside was more than ten times the outside level.',
      'The untreated cells were never given the drug, and the drug stops ATP production rather than making membranes permeable. The claim describes neither the untreated cells nor the data.',
      'The inside concentration rose to 25 mM while the outside was 2.0 mM, so the cells moved the amino acid from lower to higher concentration. Movement against a gradient is active transport and requires energy.',
    ],
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
    optionExplanations: [
      'Without ATP, the amino acid could still move passively down its gradient by facilitated diffusion through membrane proteins. Uptake stopped once the inside level matched the outside level of 2.0 mM.',
      'Amino acids are polar and charged, so they do not cross the hydrophobic core freely the way oxygen does. The drug-treated rate also levels off, which points to transport proteins rather than free diffusion.',
      'The inside concentration of the drug-treated cells reached 2.0 mM, not zero. The amino acid entered and stayed inside until the inside and outside concentrations were equal.',
      'The amino acid was labeled radioactively and measured as it entered from the medium, so the data track uptake from outside, not synthesis inside. The level also stopped exactly at the outside concentration.',
    ],
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
    optionExplanations: [
      'ATP production is unaffected by the second drug, so energy is not what changes. At 16.0 mM the transporters are saturated, so their number, not ATP, limits the rate.',
      'At 16.0 mM the transporters are saturated, so the maximum rate equals the number of transporters times the rate of each one. Halving the transporters halves the rate, to about 8 nmol/min.',
      'Saturated transporters are already working as fast as they can, so giving each one more amino acid cannot speed them up. With half as many transporters, the rate falls rather than rises.',
      'The second drug does not affect ATP production, so it does not remove the energy source as the first drug did. The rate would fall to about half of the untreated rate, not to the drug-treated rate.',
    ],
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
    optionExplanations: [
      'This reverses the effect of saturation. Saturated tails are straight and pack tightly together, which makes a membrane more rigid, especially at low temperature.',
      'Longer tails form more hydrophobic interactions with their neighbors, which makes a bilayer less fluid, not more. Cold-adapted membranes generally use shorter or more unsaturated tails.',
      'Cis double bonds put bends in unsaturated tails, which keeps them from packing closely. The membrane therefore stays fluid at low temperature.',
      'The number of membrane proteins does not set the fluidity of the lipid layer. Fluidity depends on how tightly the fatty acid tails pack, which the bacteria adjust through the tails they build.',
    ],
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
    optionExplanations: [
      'Secretion requires the protein to enter the ER and then pass through the Golgi and vesicles to the plasma membrane. Without the signal sequence, the protein never enters this pathway, so it cannot be secreted.',
      'Proteins reach the Golgi only by traveling from the ER in vesicles. A protein made on a free ribosome never enters the ER, so it cannot reach the Golgi.',
      'Nuclear import requires its own specific signal; it is not a default destination. A protein lacking any targeting signal stays in the cytosol.',
      'Without the sequence that directs its ribosome to the rough ER, the protein is finished on a free ribosome and released into the cytosol, where it stays.',
    ],
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
    optionExplanations: [
      'In an open beaker Ψp = 0, so Ψ = Ψs = −(2)(0.20)(0.0831)(298) ≈ −9.9 bars. Water moves from higher to lower water potential, so it leaves the cells at −6.0 bars for the solution at −9.9 bars.',
      'The water potential is right, but the direction is reversed. Water moves toward lower water potential, and −9.9 bars is lower than the cells\' −6.0 bars, so water leaves the cells.',
      'About −19.8 bars counts the factor of 2 twice. Using i = 2 once gives −(2)(0.20)(0.0831)(298) ≈ −9.9 bars.',
      'About −4.9 bars forgets that NaCl dissociates into two particles, so it uses i = 1. It also sends water toward the higher water potential, the opposite of the direction water moves.',
    ],
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
    optionExplanations: [
      '0.008 mL/min is the rate for germinating peas at 10°C (0.33 mL ÷ 40 min). The question asks about the germinating peas at 25°C.',
      'The average rate is the total change divided by the elapsed time: 0.80 mL ÷ 40 min = 0.020 mL/min for the germinating peas at 25°C.',
      '0.20 mL is the volume taken up in the first 10 minutes, not in 1 minute. Dividing it by 10 gives the same 0.020 mL/min as the full 40-minute calculation.',
      '0.80 mL is the total volume of oxygen taken up over the whole 40 minutes. Reporting it as a rate per minute skips the step of dividing by the time.',
    ],
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
    optionExplanations: [
      'This reverses the data. The peas took up more oxygen at 25°C (0.80 mL) than at 10°C (0.33 mL), so the higher temperature increased respiration rather than denaturing the enzymes.',
      'Each group took up oxygen at a steady rate, but the two rates differ by more than a factor of two. A steady rate within each group does not mean temperature had no effect.',
      'At 25°C the peas took up about 0.80 mL of $O_{2}$ in 40 minutes versus 0.33 mL at 10°C. Respiration was faster at the higher temperature, as expected for enzyme-catalyzed reactions below their optimum.',
      'The peas took up $O_{2}$ at both temperatures, so both groups were carrying out aerobic respiration. Nothing in the data indicates fermentation at 10°C.',
    ],
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
    optionExplanations: [
      'Seeds have no functioning photosynthetic tissue, and a sealed vial in a water bath gives them no reason to photosynthesize. Low uptake reflects low use of oxygen, not replacement of it.',
      'The KOH absorbs any $CO_{2}$ the peas release, so $CO_{2}$ cannot offset the oxygen reading. The respirometer measures oxygen use alone.',
      'Dormant seeds already contain mitochondria, and the data show they did take up a little oxygen. They respire slowly rather than not at all.',
      'A dormant seed is alive but metabolically slow, so it breaks down little of its stored food and uses little oxygen. Germination demands ATP for growth, so respiration speeds up.',
    ],
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
    optionExplanations: [
      'A sealed vial\'s gas volume also changes when the bath temperature or the air pressure drifts. A beads-only vial records that change, and subtracting it leaves the change caused by the peas.',
      'The beads contain no cells; they fill space so each vial holds the same volume of material. The control does not make the number of living cells equal.',
      'Glass beads are not alive and absorb no oxygen, so there is nothing to add back. The control measures volume changes caused by temperature and pressure.',
      'The beads-only vial also contained KOH, so it cannot show how the peas would respire without KOH. It contained no peas at all.',
    ],
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
    optionExplanations: [
      'ATP synthase alone in the light made no ATP (vesicle 2), so it is not powered directly by light. It needs the $H^{+}$ gradient that the light-driven pump builds.',
      'ATP was made only when light ran the pump and ATP synthase was present (vesicle 4), and a leaky membrane abolished it (vesicle 5). The $H^{+}$ gradient drives ATP synthase, and no electron carriers were present.',
      'The pump alone made no ATP (vesicle 1), so it does not make ATP itself. It only builds the $H^{+}$ gradient that ATP synthase uses.',
      'No electron carriers were present in any vesicle, yet vesicle 4 made ATP. An $H^{+}$ gradient is enough, so electron transport is not required by ATP synthase itself.',
    ],
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
    optionExplanations: [
      'Enzymes are not used up by the reactions they catalyze. Adding substrate at 14 minutes restarted product formation at the original rate, so the enzyme was still present.',
      'A denatured enzyme would not recover when more substrate was added. Product formation resumed at the original rate, so the enzyme was still active.',
      'Adding substrate at 14 minutes restarted product formation at about the original rate. The enzyme was therefore still active, and the reaction had stopped because the substrate ran out.',
      'The mixture was held at 30°C, so cooling does not explain the plateau. Product formation also resumed at its original rate as soon as more substrate was added.',
    ],
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
    optionExplanations: [
      'This reverses the gradient. Electron transport pumps $H^{+}$ from the stroma into the thylakoid space, so the stroma has the lower $H^{+}$ concentration.',
      'The cytosol is outside the chloroplast, and the outer membrane does not hold the gradient that drives ATP synthase. The light reactions build their gradient across the thylakoid membrane.',
      'The intermembrane space is where mitochondria build their $H^{+}$ gradient. In chloroplasts the gradient is built across the thylakoid membrane, into the thylakoid space.',
      'Electron transport pumps $H^{+}$ into the thylakoid space, and splitting water adds more. $H^{+}$ then flows down its gradient through ATP synthase into the stroma, where ATP is released.',
    ],
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
    optionExplanations: [
      'Cells drive endergonic reactions by coupling them to the exergonic hydrolysis of ATP. Transferring a phosphate to a reactant forms an intermediate, so the overall process releases free energy.',
      'Cells do not heat themselves enough to drive reactions, and high heat would denature their enzymes. Collisions also do not change whether a reaction is endergonic.',
      'An enzyme lowers activation energy but does not change ΔG. It cannot turn an endergonic reaction into one that releases free energy.',
      'Glutamine is the product, and raising the concentration of a product pushes a reaction backward, not forward. Removing product, not adding it, would favor the forward direction.',
    ],
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
    optionExplanations: [
      'The stimulus says M* enters cells and acts like M, not that it binds the surface receptor. Its effect inside the cell bypasses the receptor step.',
      'With no H at all, a compound that mimics M inside the cell produced nearly the full response (95 versus 100). M is therefore sufficient and acts downstream of the receptor.',
      'Treatment 4 had no H, yet glucose release reached 95, close to the 100 seen with H. Once M is present, H binding is not required.',
      'Treatment 2 shows M rising when H is added, and the stimulus describes M as activating glycogen breakdown. M is part of the signal that causes glucose release, not a product of it.',
    ],
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
    optionExplanations: [
      'Drug P acts on the enzyme that breaks down M, not on the receptor. Nothing in the data shows more H binding to the cells.',
      'Blocking glycogen breakdown would lower glucose release, but treatment 5 released more glucose than treatment 2. Drug P blocks the breakdown of M, not of glycogen.',
      'Drug P blocks the enzyme that destroys M, and M rose from 20 to 45 units. Breaking down a signaling molecule is how cells normally end a response, so blocking it prolonged and increased the response.',
      'M was not the same in the two treatments; it was more than twice as high with drug P (45 versus 20). The larger response follows from more M, not from greater sensitivity to M.',
    ],
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
    optionExplanations: [
      'Low M and low release, as in treatment 3, describe a pathway that is not activated. A receptor locked in its active shape relays the signal even without H.',
      'An active receptor raises M, so M would not stay low. Treatment 4 reached high release by supplying an M mimic directly, which bypasses the receptor rather than describing an active receptor.',
      'Treatment 4 shows that high M is enough to trigger glucose release without H. High M paired with low release contradicts the data.',
      'A receptor locked in its active shape relays the signal without the ligand. M would rise and glucose would be released as if H were present, as in treatment 2.',
    ],
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
    optionExplanations: [
      'Treatments 2 and 3 differ only in drug R, which blocks H from binding its receptor. With binding blocked, M stayed at the baseline of 1 instead of rising to 20.',
      'Treatments 1 and 4 test whether M alone is sufficient for glucose release; neither involves H. They give no evidence about whether H must bind its receptor to raise M.',
      'Treatments 2 and 5 both let H bind; they differ in drug P, which blocks the breakdown of M. This comparison tests how the signal is turned off.',
      'Treatments 4 and 5 differ in more than one variable: H, drug P, and the M mimic. No single comparison between them isolates receptor binding.',
    ],
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
    optionExplanations: [
      'Adding the numbers (20 + 500 = 520) treats the steps as additive. In a cascade each step multiplies the number of molecules activated at the step before it.',
      'The steps multiply: 1 receptor × 20 relay proteins × 1 enzyme each × 500 messengers per second = 10,000 per second. Amplification of this kind lets a few ligand molecules produce a large response.',
      '1,000 uses a factor of 2 relay proteins instead of 20. With 20 relay proteins each activating one enzyme, the total is 20 × 500 = 10,000.',
      '100,000 adds an extra factor of 10 that is not in the pathway. Each relay protein activates only one enzyme, so the total is 20 × 500 = 10,000.',
    ],
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
    optionExplanations: [
      'Genes for growth-promoting proteins are mostly on autosomes, so cells carry two copies. Being on a sex chromosome is not what makes one mutation enough.',
      'Mutation rates do not explain the pattern. The difference lies in what the mutations do: one overactive growth protein is dominant, while a halting protein still works if one normal copy remains.',
      'An overactive growth-promoting protein pushes the cell to divide no matter what the normal copy does, so one mutant copy is enough. A halting protein still works with one normal copy, so both copies must fail.',
      'One mutant copy of a halting gene usually does not change division, because the other copy still works. Cells with damaged halting genes are also not always removed, which is why such mutations contribute to cancer.',
    ],
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
    optionExplanations: [
      'A response to medium alone would show that X is released into the medium. A membrane-bound signal stays on the producing cells, so medium without those cells should not trigger a response.',
      'A response that grows stronger with distance fits neither contact signaling nor diffusion from a source. Signals from a source generally weaken as distance increases.',
      'A filter that lets molecules pass but keeps the cells apart would block contact signaling. A response across it would show that X diffuses as a secreted molecule.',
      'A membrane-bound signal acts only through direct contact. Targets should respond when touching the producing cells but not to medium, which contains no free signal.',
    ],
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
    optionExplanations: [
      'In a test cross, the dihybrid parent makes four gamete types in equal numbers if the genes assort independently, and the tthh parent contributes only t h. The four phenotypes should appear 1:1:1:1, about 250 each.',
      'A 9:3:3:1 ratio comes from crossing two dihybrids. Here one parent is homozygous recessive for both genes, so the ratio is 1:1:1:1.',
      'Only two phenotype classes would mean the genes were completely linked with no crossing over. Independent assortment predicts all four classes in equal numbers.',
      'A 3:1 tall-to-dwarf ratio would require both parents to carry T. The dwarf parent is tt, so the Tt × tt cross gives tall and dwarf plants in a 1:1 ratio.',
    ],
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
    optionExplanations: [
      'About 96 comes from dividing the summed squared deviations by the total of 1,000 instead of by each expected value of 250. Dividing correctly gives about 385.',
      'With 250 expected in each class, χ² = (162² + 148² + 158² + 152²)/250 ≈ 385. Four classes give 3 degrees of freedom and a critical value of 7.81, so independent assortment is rejected.',
      'About 2.5 comes from adding the deviations divided by 250 without squaring them. The chi-square formula squares each deviation before dividing, giving about 385.',
      'The value of 385 is right, but a test with four phenotype classes has 3 degrees of freedom, not 1. The conclusion is still rejection, but the stated test is reported incorrectly.',
    ],
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
    optionExplanations: [
      '41 comes from one parental class alone (412 out of 1,000). Map distance uses the recombinant offspring, which are the two rare classes.',
      '9.2 uses only one of the two recombinant classes (92 out of 1,000). Both rare classes are recombinants, so both must be counted.',
      'The rare classes are the recombinants: (92 + 98)/1,000 = 0.19, or 19% recombination. One percent recombination equals one map unit, so the genes are 19 map units apart.',
      '81% is the share of parental offspring, (412 + 398)/1,000. Map distance is based on the share of recombinant offspring, which is 19%.',
    ],
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
    optionExplanations: [
      'If tall and hairy were on the same homolog, the tall, hairy and dwarf, smooth offspring would be the common classes. In fact they are the rare classes, so they are the recombinants.',
      'A parent with tall and smooth alleles on both homologs would be TThh, not heterozygous for both genes. Crossed with tthh, it could produce no dwarf or hairy offspring at all.',
      'Genes on different, nonhomologous chromosomes assort independently and would give about 250 of each phenotype. The data are strongly skewed toward two classes, so the genes are linked.',
      'The most common offspring, tall, smooth and dwarf, hairy, carry the parental combinations. One homolog therefore carried T with h, and the other carried t with H.',
    ],
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
    optionExplanations: [
      'Mitochondria are passed to offspring in the egg cytoplasm, not by sperm. An affected mother passes the trait to all her children, and an affected father passes it to none.',
      'An X-linked dominant allele from an affected father would reach all his daughters. Here the children of affected fathers are never affected.',
      'An X-linked recessive allele from a carrier mother would affect about half of her sons and few of her daughters. Here all sons and daughters of affected mothers are affected.',
      'An autosomal dominant allele would pass from affected fathers as often as from affected mothers, to about half of the children. Here affected fathers never pass it on.',
    ],
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
      'By the product rule, P(A_) from Aa × Aa = 3/4, P(bb) from Bb × bb = 1/2, and P(cc) from Cc × Cc = 1/4, so the fraction is 3/4 × 1/2 × 1/4 = 3/32. The value 3/64 treats the B cross as Bb × Bb, 1/16 drops the A term and also treats the B cross as Bb × Bb, and 9/64 treats the B cross as giving 3/4 instead of 1/2.',
    optionExplanations: [
      '3/64 treats the B cross as Bb × Bb, giving 1/4 for bb. The cross is Bb × bb, so the chance of bb is 1/2.',
      'By the product rule, P(A_) from Aa × Aa = 3/4, P(bb) from Bb × bb = 1/2, and P(cc) from Cc × Cc = 1/4. The fraction is 3/4 × 1/2 × 1/4 = 3/32.',
      '1/16 does not follow from the three gene probabilities. It equals 1/4 × 1/4, which leaves out the 3/4 for gene A and also treats Bb × bb as if it gave bb only a quarter of the time.',
      '9/64 uses 3/4 for gene B, as if bb came from a cross that gives the recessive phenotype three-quarters of the time. Bb × bb gives bb half of the time.',
    ],
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
    optionExplanations: [
      '5′-ATG CCT GAA TGG TAA-3′ is the DNA coding strand, which contains T. RNA contains U in place of T, so this cannot be the mRNA.',
      '5′-UAC GGA CUU ACC AUU-3′ copies the template sequence itself with U for T. The mRNA must be complementary to the template, not the same as it.',
      'RNA polymerase pairs each template base with its complement (A–U, T–A, G–C, C–G) and builds the mRNA 5′ to 3′, antiparallel to the template. This gives 5′-AUG CCU GAA UGG UAA-3′.',
      '5′-AAU GGU AAG UCC GUA-3′ is the correct transcript written backward. It has the right bases, but labeling that order 5′ to 3′ reverses the strand\'s direction.',
    ],
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
    optionExplanations: [
      'An inserted base shifts the reading frame and changes every codon after it, so the sequence cannot stay the same. Here the shift produces a stop codon after two amino acids.',
      'A single-base insertion shifts the frame and changes every codon downstream, not just one. The third codon becomes UGA, a stop codon, rather than a different amino acid.',
      'An insertion of one base does not add one amino acid; adding a whole codon would take three bases. One base shifts the frame for every codon that follows.',
      'The new mRNA is 5′-AUG CCC UGA AUG GUA A-3′. The insertion shifts the reading frame and makes the third codon UGA, a stop codon, so translation ends after Met-Pro.',
    ],
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
    optionExplanations: [
      'Template CTT is transcribed as GAA, which codes for Glu. Changing it to CTC gives the codon GAG, which also codes for Glu, so the polypeptide is unchanged.',
      'Changing template ACC to ATC changes the codon UGG (Trp) to UAG, a stop codon. This nonsense mutation shortens the polypeptide.',
      'Changing template GGA to GAA changes the codon CCU (Pro) to CUU (Leu). This missense mutation changes one amino acid in the polypeptide.',
      'Deleting one base shifts the reading frame, so every codon after the deletion is read differently. The amino acid sequence changes from that point on.',
    ],
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
    optionExplanations: [
      'The template strand is complementary to the mRNA, whichever direction it is read. Reading it 3′ to 5′ still gives complementary bases, not matching ones.',
      'The mRNA and the nontemplate strand are both complementary to the template strand, so they have the same sequence and direction. The nontemplate (coding) strand matches the mRNA, with T in place of U.',
      'Reading the template from 5′ to 3′ only reverses its order; its bases are still complementary to the mRNA. It does not match the mRNA sequence.',
      'Each anticodon is complementary to its codon, not identical to it. A list of anticodons would therefore resemble the template, not the mRNA.',
    ],
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
    optionExplanations: [
      'Releasing the repressor would raise enzyme production when tryptophan is already plentiful, the opposite of what the cell needs. Bound tryptophan activates the repressor instead.',
      'Tryptophan works through the repressor protein, not by binding the promoter. Its effect is to shut the operon off, not to recruit RNA polymerase.',
      'Tryptophan acts as a corepressor. When bound to the repressor, it activates it, so the repressor binds the operator and blocks RNA polymerase, and the cell stops making enzymes for a product it already has.',
      'In the trp operon, tryptophan controls transcription through the repressor and operator. Stopping translation while transcription continues does not describe how this operon is regulated.',
    ],
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
    optionExplanations: [
      'If heat only stabilized existing protein H, protein H would rise even with transcription blocked. In the drug-treated culture it stayed at 1, and the untreated mRNA rose 40-fold.',
      'If heat sped translation of existing mRNA, protein H would rise even with transcription blocked. With the drug, protein H stayed at 1 throughout.',
      'If heat blocked mRNA breakdown, gene H mRNA would build up even with transcription blocked. With the drug, it stayed at 1 and then fell to 0.5.',
      'Without the drug, gene H mRNA rose 40-fold within 10 minutes and protein H followed. When transcription was blocked, neither rose, so heat acts mainly by increasing transcription of the gene.',
    ],
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
    optionExplanations: [
      'Suspect 2 has all three of the crime-scene fragment sizes. DNA moves toward the positive electrode, and small fragments move through the gel fastest, so the 900 bp fragment travels farthest.',
      'Suspect 2 does match, but the 4,000 bp fragment is the largest and moves the most slowly. The smallest fragment, 900 bp, travels farthest from the well.',
      'Suspect 1 shares only two of the three bands and has an 1,800 bp fragment instead of 2,500 bp. A match requires every band to be the same size.',
      'Having the same number of bands is not a match when the sizes differ. Suspect 3 has 3,200 bp and 600 bp fragments that are not in the crime-scene sample.',
    ],
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
    optionExplanations: [
      'Adding each amino acid to the carboxyl end is right, but the direction is reversed. Ribosomes read mRNA 5′ to 3′, so they move toward the 3′ end; moving toward the 5′ end would read the codons backward.',
      'Ribosomes read mRNA 5′ to 3′, so they move toward the 3′ end. Each new amino acid is linked by its amino group to the carboxyl end of the growing chain, so the polypeptide grows toward its carboxyl end.',
      'The direction along the mRNA is right, but the amino end is where the chain began. New amino acids are added to the carboxyl end of the growing polypeptide.',
      'Both parts are reversed. Ribosomes move toward the mRNA\'s 3′ end, and new amino acids are added to the carboxyl end of the chain, not the amino end.',
    ],
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
    optionExplanations: [
      '0.8 is the frequency of allele B, since p = 1 − q = 1 − 0.2. The question asks for the frequency of b.',
      '0.04 is the frequency of the bb genotype, 4 pale lizards out of 100, which equals $q^{2}$. The allele frequency is its square root.',
      'Pale lizards (bb) are 4 of 100 on dark soil, so $q^{2} = 0.04$ and $q = 0.2$. This is the frequency of allele b.',
      '0.96 is the share of brown lizards, which includes both BB and Bb genotypes. It is a phenotype frequency, not the frequency of allele b.',
    ],
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
    optionExplanations: [
      'Brown models were attacked less often on dark soil (12% versus 48%). Predators do not favor one color everywhere, so allele B is not selected against at every site.',
      'Attack rates differed by about four to five times between the two colors at each site, so attacks were far from random. Color clearly affects the chance of being attacked.',
      'The clay models measure predation, not how skin color develops. The stimulus also states that skin color is controlled by one gene.',
      'At each site, the model that contrasted with the ground was attacked about four to five times as often. Matching the background lowers predation, so skin color affects survival.',
    ],
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
    optionExplanations: [
      'Drift changes allele frequencies at random with respect to traits, but selection makes the trait that improves survival common. At both sites, the common color is the one predators attacked less, which points to selection.',
      'A difference in allele frequency between sites could arise by drift alone. It shows that the populations differ but not why, so it does not distinguish selection from drift.',
      'Interbreeding and fertile young show that the two color forms belong to one species. That says nothing about whether the color difference is adaptive.',
      'Similar population sizes say nothing about whether the color difference improves survival. It does not show whether the difference arose by selection or by chance.',
    ],
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
    optionExplanations: [
      'Gene flow mixes the alleles of the two sites and makes the populations more alike, which slows speciation rather than speeding it up.',
      'Migrants from the dunes carry b alleles, so gene flow keeps adding them to the dark-soil population even though selection removes pale lizards there. This helps explain the few pale lizards seen.',
      'Moving to a new site does not change an individual\'s alleles. Pale offspring arise when two parents each pass on a b allele, not when B alleles turn into b.',
      'Selection acts on individuals, but it does change allele frequencies across generations. Migration adds alleles to the population, so it does have an effect.',
    ],
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
    optionExplanations: [
      'The environment does not cause the mutations an organism needs. Mutations arise at random with respect to need; the dark soil only affected which lizards survived.',
      'Characteristics acquired during an individual\'s life, such as a color change, are not inherited. Only heritable alleles like B are passed to offspring.',
      'Mutations arise at random with respect to need. Once B existed, brown lizards on dark soil were attacked less, survived and reproduced more, and B became common.',
      'Nothing requires the mutation to have arisen after predators began hunting there; it could have existed earlier. Predators only made B advantageous once it was present.',
    ],
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
    optionExplanations: [
      '54% is the share of purple plants that are homozygous, $p^{2}$ divided by the purple fraction (0.49 ÷ 0.91). The question asks for the heterozygous share.',
      '42% is $2pq$ as a share of all plants, including white ones. The question asks for the share of purple plants only, so 0.42 must be divided by 0.91.',
      '49% is $p^{2}$, the homozygous dominant share of all plants. It describes neither heterozygotes nor a share of purple plants only.',
      'Since $q^{2} = 0.09$, $q = 0.3$ and $p = 0.7$. Heterozygotes are $2pq = 0.42$ of all plants, and purple plants are 0.91, so $0.42 \\div 0.91 \\approx 46\\%$ of purple plants are heterozygous.',
    ],
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
    optionExplanations: [
      'When a population crashes to a few individuals, the alleles that survive are a chance sample and many are lost. Regrowth from that small group cannot restore them, so the large modern population has little variation.',
      'Gene flow from a highly variable species would add variation, not remove it. The southern species is highly variable, so mixing with it could not explain low variation.',
      'Selection is unlikely to have favored a single genotype at every gene studied. Losing variation at all genes at once fits a chance loss of alleles during a crash.',
      'Mutation adds new alleles rather than converting many alleles into one. It cannot explain a loss of genetic variation.',
    ],
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
    optionExplanations: [
      'The hybrids produced in the laboratory are healthy and fertile, which rules out a postzygotic barrier. The species are kept apart before mating can occur.',
      'The species share meadows and mate readily when brought together, but their breeding seasons do not overlap. Mating never happens in nature, which is temporal isolation, a prezygotic barrier.',
      'Both species live in the same meadows, so they are not kept physically apart. A geographic barrier cannot explain their isolation.',
      'Adults of the two species mate readily in the laboratory, so females do not ignore the other species\' males. The barrier is timing, not behavior.',
    ],
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
    optionExplanations: [
      'Acquired changes are not inherited. A fish growing fewer plates in response to lake water would not pass that change to its offspring through its genes.',
      'An identical new mutation arising separately in every lake is very unlikely. The low-armor allele was already present in the marine ancestors, so no new mutation was needed.',
      'The low-armor allele already existed at about 1% in the marine ancestors, so colonists brought it to each lake, where selection raised its frequency. The same change in many lakes points to selection.',
      'Genetic drift is random and would not push many independent lakes in the same direction. The repeated outcome across lakes points to selection, not chance.',
    ],
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
    optionExplanations: [
      'Offspring raised in the laboratory on either kind of fruit have beaks like their parents\'. The fruit eaten during development does not set beak length.',
      'The short-beaked bugs live on a tree that became common only about 50 years ago. Nothing suggests they are an older species that was already short-beaked.',
      'Changes caused by use or disuse during life are not inherited, and the rearing results show beak length follows the parents rather than the fruit. The difference is genetic.',
      'Laboratory-raised offspring keep their parents\' beak length whatever fruit they eat, so the difference is heritable. It arose after the small-fruited tree spread, showing evolution on a short time scale.',
    ],
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
    optionExplanations: [
      'During exponential growth the population grows by $r_{max}N = 0.3 \\times 400 = 120$ mice per month, because each individual adds 0.3 offspring per month on average.',
      '133 comes from dividing 400 by 3 instead of multiplying 400 by 0.3. The exponential growth equation multiplies the per capita rate by the population size.',
      '12 misplaces the decimal point, using 0.03 instead of 0.3. The correct product is $0.3 \\times 400 = 120$ mice per month.',
      '1,200 multiplies 400 by 3 instead of 0.3. The per capita growth rate is 0.3 per month, so the population grows by 120 mice per month.',
    ],
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
    optionExplanations: [
      'The data show bleaching first and deaths months later, so the algae left before the corals died, not after. Deaths followed the loss of the algae.',
      'Bleaching rose sharply above +1.0°C, and deaths followed months later. The corals starved after losing the photosynthetic algae that supply most of their food, so heat broke down the mutualism.',
      'Nothing in the data indicates the algae became parasites. Bleaching means the algae left the corals\' tissues, not that they began to feed on them.',
      'Warm water holds less dissolved oxygen, not more. The data link the deaths to the earlier loss of the algae, not to oxygen poisoning.',
    ],
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
    optionExplanations: [
      'Nitrate was plentiful before iron was added, yet phytoplankton stayed scarce, so nitrate was not limiting. It fell only after iron let the phytoplankton grow and use it.',
      'The data give no evidence about predators or toxicity. The bloom followed from adding a nutrient that the phytoplankton were short of.',
      'Nitrate and phosphate were plentiful but phytoplankton were scarce, and adding only iron produced a bloom. Iron was therefore the nutrient in shortest supply relative to need.',
      'Phytoplankton are photosynthetic and get their energy from light, not from iron. Iron is a nutrient they need, not an energy source.',
    ],
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
    optionExplanations: [
      'If food were unlimited, there would be no pressure for the species to divide the trees among themselves. The partitioning is best explained by competition that it reduces.',
      'Mutualism requires each species to benefit the other. Feeding in separate parts of the trees does not help the other species; it only reduces overlap in what they eat.',
      'Nothing in the stimulus indicates a keystone role or that any warbler controls the prey of the others. All five species eat insects in different parts of the trees.',
      'Species that use the same resource in different ways compete less, which is resource partitioning. This lets similar species coexist instead of one excluding the others.',
    ],
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
    optionExplanations: [
      'The egrets benefit by catching the insects the cattle stir up, and the cattle neither gain nor lose. One species benefiting while the other is unaffected defines commensalism.',
      'Mutualism requires both species to benefit, but the stem states that the cattle are neither helped nor harmed. Sharing a grassland does not make the relationship mutualistic.',
      'In parasitism one species feeds on another and harms it. The egrets eat insects, not the cattle\'s food or tissues, and the cattle are unharmed.',
      'Competition requires both species to use the same limited resource. The egrets eat insects while the cattle eat grass, so they do not compete for food.',
    ],
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
    optionExplanations: [
      'The chemicals attract wasps rather than poisoning the caterpillars. The stem describes the wasps, not the chemicals, as what kills the caterpillars.',
      'The plant\'s signal recruits a predator of its herbivore. Wasps kill the caterpillars, so signaling plants lose less leaf tissue and can put more energy into making seeds.',
      'The scenario says nothing about signaling to other plants or about growth rates. The described effect of the chemicals is to attract wasps that kill caterpillars.',
      'Corn is wind-pollinated, and the stem describes the wasps only as parasites of the caterpillars. Nothing indicates the wasps pollinate the plants.',
    ],
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
    optionExplanations: [
      'A plant covering the lake has not exceeded its resources in a way that predicts collapse. Nothing in the stem suggests its population is above carrying capacity.',
      'Nothing in the stem reports native fish eating the plant. The plant has escaped the specialist herbivores that kept it uncommon in its native range.',
      'The plant thrives where it has escaped its specialist herbivores. Releasing a host-tested enemy from its native range could restore that control, which is the basis of biological control.',
      'Extra nutrients usually favor fast-growing floating plants rather than the native plants. Adding fertilizer is likely to make the infestation worse, not better.',
    ],
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
    optionExplanations: [
      'The losses were 280, 230, and 130 g/m², so they were not equal. Plots with more species lost less biomass in the drought.',
      'The one-species plots grew the least biomass in both years: 400 g/m² in the normal year and 120 g/m² in the drought. They did not grow the most in the normal year.',
      'The 16-species plots grew the most biomass in both years, including the normal year (610 g/m²). More species did not mean less biomass in a normal year.',
      'The 1-, 4-, and 16-species plots kept 30%, about 56%, and about 79% of their normal biomass during the drought. More diverse plots kept a larger share, so they were more resilient.',
    ],
  },
]
