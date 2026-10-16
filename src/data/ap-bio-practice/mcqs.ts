import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology — 60 MCQs (the real exam has 60 in 90 minutes).
 * Distribution follows the 2025–26 CED unit weights:
 *   U1 Chemistry of Life                  (6)   8–11%
 *   U2 Cell Structure & Function          (7)  10–13%
 *   U3 Cellular Energetics                (9)  12–16%
 *   U4 Cell Communication & Cell Cycle    (8)  10–15%
 *   U5 Heredity                           (6)   8–11%
 *   U6 Gene Expression & Regulation       (9)  12–16%
 *   U7 Natural Selection                  (9)  13–20%
 *   U8 Ecology                            (6)  10–15%
 */

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — CHEMISTRY OF LIFE (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus:
      'Over one year, the daily air temperature in a coastal city varied by an average of 6°C, while the daily temperature in a city at the same latitude 400 km inland varied by an average of 15°C.',
    question: 'Which property of water best explains the smaller daily temperature range in the coastal city?',
    options: [
      'Water molecules are strongly cohesive, so the surface tension of the ocean keeps heat from escaping into the air.',
      'Ice is less dense than liquid water, so floating ice insulates the water beneath it from changes in air temperature.',
      'Water has a high specific heat, so a large body of water absorbs and releases heat with little change in temperature.',
      'Water is a polar solvent, so the salts dissolved in seawater absorb the solar energy before it warms the air.',
    ],
    correctAnswer: 2,
    explanation:
      'Hydrogen bonds must be broken before water molecules move faster, so water has a high specific heat and the ocean absorbs and releases large amounts of heat with little temperature change, moderating nearby air. Ice floating on water does insulate lakes, but a coastal city in a temperate climate is moderated year-round by liquid water, not by ice cover.',
    optionExplanations: [
      'Cohesion and surface tension are real properties of water, but they do not stop heat from moving between the ocean and the air. They do not explain why the ocean\'s temperature, and so the coastal air, changes so little.',
      'Floating ice does insulate the water beneath it, but a coastal city is moderated all year by a large body of liquid water, not by ice cover, so ice cannot explain a smaller daily range.',
      'Hydrogen bonds must be broken before water molecules speed up, so water has a high specific heat. The ocean absorbs heat by day and releases it at night with little temperature change, moderating the nearby air.',
      'Water is a good polar solvent, but dissolved salts do not absorb solar energy in a way that buffers air temperature. The moderating effect comes from water\'s own high specific heat, not from its solutes.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus:
      'A researcher completely hydrolyzes an unknown biological macromolecule. Every product molecule contains a central carbon bonded to an amino group, a carboxyl group, a hydrogen atom, and a variable side chain.',
    question: 'The unknown macromolecule was most likely',
    options: [
      'a nucleic acid, built from nucleotides joined by phosphodiester bonds',
      'a protein, built from many monomers that are joined by peptide bonds',
      'a polysaccharide, built from monosaccharides joined by glycosidic bonds',
      'a triglyceride, built from glycerol and fatty acids joined by ester bonds',
    ],
    correctAnswer: 1,
    explanation:
      'A central carbon carrying an amino group, a carboxyl group, and a variable R group is the structure of an amino acid, the monomer of proteins. Nucleic acids also contain nitrogen, but their hydrolysis yields nucleotides (a sugar, a phosphate, and a nitrogenous base), not amino acids.',
    optionExplanations: [
      'Nucleic acids contain nitrogen too, but hydrolyzing one yields nucleotides made of a sugar, a phosphate, and a nitrogenous base. None of the products would have the amino group, carboxyl group, and R group described.',
      'Each product has a central carbon with an amino group, a carboxyl group, a hydrogen, and a variable side chain, which is the structure of an amino acid. Amino acids are the monomers of proteins, joined by peptide bonds.',
      'Hydrolyzing a polysaccharide yields monosaccharides, which are made of carbon, hydrogen, and oxygen and carry no amino group. The products described are amino acids, so the polymer is not a carbohydrate.',
      'Hydrolyzing a triglyceride yields glycerol and fatty acids, and neither has an amino group or a variable side chain on a central carbon. Triglycerides are also not polymers of repeating monomers.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'A peptide bond between two amino acids forms',
    options: [
      'between the central carbon of one amino acid and the R group of the next one, releasing water',
      'between the R groups of two adjacent amino acids, releasing a molecule of water',
      'between the amino groups of two adjacent amino acids, using up a molecule of water',
      'between the carboxyl group of one amino acid and the amino group of the next, releasing water',
    ],
    correctAnswer: 3,
    explanation:
      'Dehydration synthesis links the carboxyl group of one amino acid to the amino group of the next, releasing water and forming the peptide backbone. Bonds between R groups (such as disulfide bridges) stabilize folding, but they are not the peptide bonds that join the chain.',
    optionExplanations: [
      'The central carbon and the R group are not where the peptide bond forms. The bond joins the carboxyl group of one amino acid to the amino group of the next, leaving the R groups free as side chains.',
      'Bonds between R groups, such as disulfide bridges, help stabilize a protein\'s folded shape, but they are not peptide bonds. Peptide bonds form the backbone and do not involve the side chains.',
      'A peptide bond does not link two amino groups, and forming it releases water rather than using it. Using up water describes hydrolysis, the reaction that breaks peptide bonds apart.',
      'Dehydration synthesis joins the carboxyl group of one amino acid to the amino group of the next, releasing a water molecule. This repeated bond forms the backbone of the polypeptide chain.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'The 5\' and 3\' ends of a single strand of DNA are defined by',
    options: [
      'which carbon of the terminal deoxyribose carries a free phosphate or a free hydroxyl group',
      'whether a purine or a pyrimidine base occupies the first position at that end of the strand',
      'the direction in which hydrogen bonds form between the bases of the two paired strands',
      'the order in which RNA primers were laid down when the strand was last replicated',
    ],
    correctAnswer: 0,
    explanation:
      'The 5\' end has a phosphate attached to the 5\' carbon of deoxyribose, and the 3\' end has a free hydroxyl on the 3\' carbon; this sugar-phosphate orientation gives each strand its direction. Hydrogen bonds between bases hold the two strands together, but they do not determine which end of a strand is 5\' or 3\'.',
    optionExplanations: [
      'Strand direction comes from the sugar-phosphate backbone: the 5\' end has a phosphate on the 5\' carbon of deoxyribose, and the 3\' end has a free hydroxyl on the 3\' carbon.',
      'Either a purine or a pyrimidine can sit at either end of a strand, so the identity of the terminal base cannot define its ends. Direction is set by the orientation of the sugar-phosphate backbone.',
      'Hydrogen bonds between bases hold the two strands together, but they do not give a single strand its direction. A single strand has 5\' and 3\' ends even when it is not paired with another strand.',
      'RNA primers are a feature of replication and are removed afterward, so they cannot define the ends of a finished strand. The ends are set by which carbon of the terminal sugar is free.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus:
      'A sample of double-stranded DNA is found to be 22% adenine.',
    question: 'What percentage of the nucleotides in the sample contain guanine?',
    options: [
      '22%',
      '28%',
      '56%',
      '78%',
    ],
    correctAnswer: 1,
    explanation:
      'Adenine pairs with thymine, so A = T = 22% and A + T = 44%. The remaining 56% is split equally between guanine and cytosine, so guanine is 28%; 56% is the combined G + C total, not guanine alone.',
    optionExplanations: [
      '22% is the percentage of adenine and, by base pairing, of thymine. Guanine pairs with cytosine, not adenine, so its share must come from the nucleotides left over after A and T are counted.',
      'Since A pairs with T, A = T = 22%, so A + T = 44%. The remaining 56% is split equally between guanine and cytosine, so guanine makes up 28% of the nucleotides.',
      '56% is the combined percentage of guanine plus cytosine. Because G pairs with C in equal amounts, guanine alone is half of that total, or 28%.',
      '78% is what is left after subtracting adenine alone, ignoring that thymine also makes up 22%. Subtracting both A and T leaves 56%, and guanine is half of that.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus:
      'A single substitution replaces a nonpolar amino acid buried in the core of a folded enzyme with a negatively charged amino acid. The enzyme still contains the same number of amino acids, but it loses most of its catalytic activity.',
    question: 'Which explanation is best supported by these observations?',
    options: [
      'The substitution breaks a peptide bond in the backbone, splitting the enzyme into two shorter, inactive fragments.',
      'The charged R group disrupts the interactions that hold the enzyme\'s fold, changing the shape of its active site.',
      'The new R group blocks hydrogen bonding along the backbone, so no alpha helix can form anywhere in the enzyme.',
      'The substitution changes only the primary structure, so the shape of the enzyme and its active site stay the same.',
    ],
    correctAnswer: 1,
    explanation:
      'Nonpolar R groups cluster in the protein interior through hydrophobic interactions; placing a charged R group there disrupts tertiary structure and can distort the active site. The enzyme still has the same number of amino acids, so the substitution did not break the chain into fragments.',
    optionExplanations: [
      'Changing one amino acid for another does not break the backbone, and the stimulus states the enzyme still has the same number of amino acids, so it was not split into fragments.',
      'Nonpolar R groups cluster in the core through hydrophobic interactions. A charged R group there disrupts the tertiary structure that holds the fold, which can distort the active site and reduce catalysis.',
      'Alpha helices form by hydrogen bonds between backbone atoms, and one new R group would not prevent every helix in the enzyme from forming. The main effect is on the hydrophobic interactions of the core.',
      'The substitution does change the primary structure, but primary structure determines how the chain folds. The loss of activity shows the shape changed, so claiming the shape stays the same contradicts the data.',
    ],
  },

  /* ============================ UNIT 2 — CELL STRUCTURE & FUNCTION (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'Students model cells as agar cubes with side lengths of 1 cm, 2 cm, and 4 cm. The surface-area-to-volume ratios of the cubes are 6:1, 3:1, and 1.5:1, respectively.',
    question: 'Based on the model, which statement best explains why most cells are small?',
    options: [
      'As a cell grows, its nucleus shrinks relative to the cytoplasm, so it cannot direct enough synthesis of proteins.',
      'As a cell grows, its surface area increases faster than its volume, so it takes in more material than it can use.',
      'As a cell grows, its plasma membrane becomes thicker, so substances take longer to diffuse across the larger surface.',
      'As a cell grows, its volume increases faster than its surface area, so it has less membrane per unit of cytoplasm.',
    ],
    correctAnswer: 3,
    explanation:
      'The ratios fall from 6:1 to 1.5:1 because volume scales with the cube of side length while surface area scales with the square, so larger cells have less membrane for exchange per unit of volume. The data show surface area growing more slowly than volume, the opposite of the claim that surface area grows faster than volume.',
    optionExplanations: [
      'The model compares only surface area and volume, so it gives no evidence about the size of the nucleus. The claim that the nucleus shrinks is not supported by the agar cubes.',
      'This reverses the relationship in the data. The ratios fall from 6:1 to 1.5:1, which shows that volume grows faster than surface area as the cube gets larger, not the other way around.',
      'Membrane thickness does not change as a cell grows, and the model says nothing about thickness. The problem with large cells is too little membrane relative to volume, not a thicker barrier.',
      'Volume scales with the cube of side length while surface area scales with the square, so the ratio falls as the cube grows. A large cell has less membrane per unit of cytoplasm for exchange.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'A pancreatic cell that synthesizes and secretes large quantities of digestive enzymes would be expected to have unusually extensive',
    options: [
      'free cytosolic ribosomes and peroxisomes',
      'smooth endoplasmic reticulum and lysosomes',
      'rough endoplasmic reticulum and Golgi complex',
      'mitochondria and smooth endoplasmic reticulum',
    ],
    correctAnswer: 2,
    explanation:
      'Secreted proteins are made by ribosomes on the rough ER, then modified and packaged in the Golgi complex for exocytosis. Free ribosomes also make proteins, but those proteins stay in the cytosol rather than entering the secretory pathway.',
    optionExplanations: [
      'Free cytosolic ribosomes make proteins that stay in the cytosol, and peroxisomes break down fatty acids and toxins. Neither is part of the pathway that exports proteins out of the cell.',
      'Smooth ER makes lipids and detoxifies, and lysosomes digest material inside the cell. Neither one makes or packages proteins for export, so they would not be especially extensive in a secretory cell.',
      'Secreted enzymes are made by ribosomes on the rough ER, then modified and packaged by the Golgi complex into vesicles for exocytosis. A cell exporting large amounts of protein needs both to be extensive.',
      'All active cells need mitochondria, and smooth ER makes lipids and steroids rather than proteins. Neither feature is specific to a cell that makes and exports large amounts of enzyme.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'A red blood cell, whose cytoplasm is about 0.9% NaCl, is placed in a solution of 5% NaCl.',
    question: 'Which of the following best describes what happens to the cell?',
    options: [
      'Water leaves the cell by osmosis, and the cell shrinks.',
      'Water enters the cell by osmosis, and the cell swells and bursts.',
      'Sodium ions diffuse into the cell until the two concentrations are equal.',
      'Water moves in and out at equal rates, so the cell keeps its original volume.',
    ],
    correctAnswer: 0,
    explanation:
      'The 5% NaCl solution is hypertonic to the cell, so water moves out by osmosis and the cell shrivels. The membrane is largely impermeable to sodium ions, so the gradient is resolved by water movement rather than by salt diffusing in.',
    optionExplanations: [
      'The 5% NaCl solution has a higher solute concentration than the 0.9% cytoplasm, so it is hypertonic. Water moves out of the cell by osmosis, and the cell shrinks.',
      'This reverses the direction of osmosis. Water would enter and burst the cell only in a hypotonic solution; here the outside solution is far more concentrated than the cytoplasm.',
      'The plasma membrane is largely impermeable to sodium ions, so the gradient is not resolved by salt diffusing in. Water, which crosses readily, moves out instead.',
      'Equal movement in and out happens only in an isotonic solution. The 5% solution is much more concentrated than the 0.9% cytoplasm, so there is a net loss of water.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'Which observation provides evidence for the endosymbiotic origin of mitochondria and chloroplasts?',
    options: [
      'Both are assembled from membrane vesicles that bud off the endoplasmic reticulum.',
      'Both are enclosed by a single membrane that is continuous with the plasma membrane.',
      'Both contain their own circular DNA and ribosomes resembling those of bacteria.',
      'Both are present in every eukaryotic cell, including the cells of animals and fungi.',
    ],
    correctAnswer: 2,
    explanation:
      'Circular DNA, bacteria-like ribosomes, a double membrane, and division by a fission-like process all point to descent from free-living prokaryotes that were engulfed by an ancestral cell. Both organelles have two membranes, not one, and chloroplasts are absent from animal and fungal cells.',
    optionExplanations: [
      'Mitochondria and chloroplasts are not built from ER vesicles; they grow and divide on their own, much like bacteria. An ER origin would argue against endosymbiosis rather than support it.',
      'Both organelles have a double membrane, and neither is continuous with the plasma membrane. The double membrane is itself evidence of engulfment, so a single continuous membrane is a false premise.',
      'Circular DNA and bacteria-like ribosomes are features of prokaryotes. Finding them inside these organelles supports descent from free-living prokaryotes that were engulfed by an ancestral eukaryotic cell.',
      'This is false: chloroplasts are found only in plants and algae, not in animal or fungal cells. Being widespread would not, by itself, show a prokaryotic origin anyway.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'Lysosomes contain digestive enzymes that are most active at about pH 5, the pH inside the lysosome. At pH 7.2, the pH of the cytosol, these enzymes have less than 5% of their maximum activity.',
    question: 'A small number of lysosomes break open inside an otherwise healthy cell. Which outcome is most likely, based on these data?',
    options: [
      'Rapid digestion of the cytosol, because the enzymes work faster once they leave the lysosome',
      'Little damage, because the released enzymes are nearly inactive at the pH of the cytosol',
      'Little damage, because the enzymes are too large to reach any proteins in the cytosol',
      'Rapid digestion of the nucleus, because the enzymes are drawn into its acidic interior',
    ],
    correctAnswer: 1,
    explanation:
      'The enzymes are nearly inactive at pH 7.2, so a few that leak into the cytosol do little harm; keeping them in an acidic compartment both lets them work and protects the rest of the cell. Their activity falls, not rises, outside the lysosome. Enzymes free in the cytosol can reach its proteins, and the nucleus is not acidic.',
    optionExplanations: [
      'This reverses the data. The enzymes have under 5% of their maximum activity at pH 7.2, so they work far more slowly, not faster, after they leave the acidic lysosome.',
      'The data show the enzymes keep less than 5% of their activity at cytosolic pH 7.2. A few released enzymes therefore do little harm, which is one benefit of confining them to an acidic compartment.',
      'The predicted outcome is right, but the reason is not supported. Enzymes released into the cytosol can reach its proteins; the data point to low activity at pH 7.2, not to enzyme size.',
      'The nucleus is not acidic, and nothing in the data suggests the enzymes are drawn into it. At the near-neutral pH inside the cell, the enzymes are mostly inactive.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'Which feature of the phospholipid bilayer best explains why small nonpolar molecules cross it readily while ions do not?',
    options: [
      'The glycoproteins on the outer surface, which act as a sieve that excludes particles by their size',
      'The negatively charged phosphate heads, which repel ions but let nonpolar molecules slip between them',
      'The cholesterol packed between phospholipids, which seals gaps wider than a single water molecule',
      'The hydrophobic core formed by fatty acid tails, which charged particles cannot easily enter',
    ],
    correctAnswer: 3,
    explanation:
      'The nonpolar interior of the bilayer lets small nonpolar molecules such as $O_{2}$ and $CO_{2}$ dissolve through it but excludes ions, which need channels or transporters. The phosphate heads face the watery environment on both sides and are not what blocks ions; the barrier is the hydrophobic core.',
    optionExplanations: [
      'Glycoproteins on the outer surface function in cell recognition and signaling, not as a size sieve. Many ions are smaller than molecules such as $O_{2}$, so size cannot explain the difference.',
      'The phosphate heads face the watery fluid on both sides of the membrane and are not what blocks ions. The barrier is the hydrophobic interior that charged particles cannot easily enter.',
      'Cholesterol mainly adjusts membrane fluidity; it does not seal gaps by size. Ions are excluded because of their charge, which keeps them out of the nonpolar core.',
      'The fatty acid tails form a nonpolar core. Small nonpolar molecules such as $O_{2}$ and $CO_{2}$ dissolve through it, while charged ions are excluded and need channels or transporters.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'A plant cell with a water potential of −3.0 bars is placed in an open beaker of 0.1 M sucrose solution at 22°C (295 K). Solute potential is calculated as Ψs = −iCRT, where R = 0.0831 L·bar/(mol·K).',
    question: 'Which statement correctly describes the solution and the net movement of water?',
    options: [
      'The solution\'s water potential is about −2.45 bars, so water moves into the cell.',
      'The solution\'s water potential is about +2.45 bars, so water moves into the cell.',
      'The solution\'s water potential is about −2.45 bars, so water moves out of the cell.',
      'The solution\'s water potential is about −4.90 bars, so water moves out of the cell.',
    ],
    correctAnswer: 0,
    explanation:
      'Sucrose does not ionize (i = 1), so Ψs = −(1)(0.1)(0.0831)(295) ≈ −2.45 bars, and in an open beaker the pressure potential is 0, so the solution\'s Ψ is about −2.45 bars. Water moves from higher water potential (−2.45) to lower water potential (−3.0), so it enters the cell; using i = 2 treats sucrose as if it dissociated like NaCl.',
    optionExplanations: [
      'Sucrose does not ionize, so i = 1 and Ψs = −(1)(0.1)(0.0831)(295) ≈ −2.45 bars; in an open beaker Ψp = 0. Water moves from −2.45 to the lower −3.0 bars, so it enters the cell.',
      'Solute potential is always negative or zero, because dissolved solutes lower water potential. The direction stated is right, but a positive water potential for a sucrose solution in an open beaker is impossible.',
      'The water potential is right, but the direction is reversed. Water moves from higher to lower water potential, and −2.45 bars is higher than the cell\'s −3.0 bars, so water enters the cell.',
      'A value of −4.90 bars comes from using i = 2, as if sucrose dissociated like NaCl. Sucrose does not ionize, so i = 1 and the solution\'s water potential is about −2.45 bars.',
    ],
  },

  /* ============================ UNIT 3 — CELLULAR ENERGETICS (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In aerobic cellular respiration, most of the ATP is produced by',
    options: [
      'glycolysis in the cytosol of the cell',
      'oxidative phosphorylation at the inner membrane',
      'the Krebs cycle in the mitochondrial matrix',
      'the oxidation of pyruvate in the mitochondrial matrix',
    ],
    correctAnswer: 1,
    explanation:
      'Electron transport builds a proton gradient across the inner mitochondrial membrane, and protons flowing back through ATP synthase produce most of the cell\'s ATP. The Krebs cycle generates many NADH and $FADH_{2}$ but makes only a small amount of ATP directly.',
    optionExplanations: [
      'Glycolysis produces only a net 2 ATP per glucose by substrate-level phosphorylation. That is a small fraction of the total, most of which comes from the proton gradient across the inner membrane.',
      'The electron transport chain pumps protons across the inner mitochondrial membrane, and protons flowing back through ATP synthase make most of the cell\'s ATP. This process is oxidative phosphorylation.',
      'The Krebs cycle generates many NADH and $FADH_{2}$, but it makes only a small amount of ATP directly. Its main contribution is supplying electron carriers to the electron transport chain.',
      'Oxidizing pyruvate to acetyl-CoA produces NADH and releases $CO_{2}$, but it makes no ATP directly. The ATP from that NADH is made later by oxidative phosphorylation.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In cellular respiration, the main role of NADH and $FADH_{2}$ is to',
    options: [
      'transfer energy from ATP to glucose at the start of glycolysis',
      'donate phosphate groups directly to ADP to form ATP',
      'combine with oxygen at the end of the chain to form water',
      'carry high-energy electrons to the electron transport chain',
    ],
    correctAnswer: 3,
    explanation:
      'NADH and $FADH_{2}$ are electron carriers that deliver electrons to the electron transport chain, where their energy is used to pump protons. Oxygen, not NADH, is the final electron acceptor that combines with electrons and protons to form water.',
    optionExplanations: [
      'NADH and $FADH_{2}$ do not move energy from ATP to glucose. Glycolysis uses ATP in its early steps, but those phosphates come from ATP itself, not from electron carriers.',
      'Electron carriers do not hold phosphate groups. ATP is made by ATP synthase or by substrate-level phosphorylation, both of which use phosphate from other sources.',
      'Oxygen, not NADH, is the final electron acceptor; it combines with electrons and protons to form water at the end of the chain. NADH supplies electrons at the start of the chain.',
      'NADH and $FADH_{2}$ carry high-energy electrons from glycolysis and the Krebs cycle to the electron transport chain, where that energy is used to pump protons for ATP synthesis.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'A scientist treats isolated mitochondria with a chemical that makes the inner mitochondrial membrane freely permeable to protons ($H^{+}$).',
    question: 'Which effect on ATP synthesis is most likely?',
    options: [
      'ATP synthesis is unchanged, because the electron transport chain continues to pump protons.',
      'ATP synthesis increases, because protons can now flow back into the matrix more quickly.',
      'ATP synthesis decreases, because the proton gradient that drives ATP synthase is dissipated.',
      'ATP synthesis decreases, because electrons can no longer flow along the electron transport chain.',
    ],
    correctAnswer: 2,
    explanation:
      'ATP synthase is driven by protons flowing down their gradient; if protons leak freely across the membrane, the gradient collapses and little ATP is made. Electron transport actually continues, often faster, but the protons it pumps leak straight back, so the gradient never builds up.',
    optionExplanations: [
      'Proton pumping does continue, but the pumped protons leak straight back across the membrane instead of passing through ATP synthase. Without a gradient, ATP synthesis cannot stay the same.',
      'Protons returning to the matrix make ATP only when they pass through ATP synthase. Leaking freely across the membrane bypasses the enzyme, so ATP output falls rather than rises.',
      'ATP synthase is driven by protons flowing down their gradient. If the membrane lets protons leak freely, the gradient collapses and little ATP is made.',
      'The decrease is right, but the reason is wrong. Electron transport keeps running, often faster; it is the proton gradient, not electron flow, that the chemical destroys.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In the light-dependent reactions of photosynthesis, the role of light is to',
    options: [
      'excite electrons in chlorophyll, whose transfer powers the production of ATP and NADPH',
      'supply energy directly to the enzyme that attaches $CO_{2}$ to an organic molecule',
      'split molecules of $CO_{2}$, releasing oxygen gas and freeing carbon for building sugars',
      'bind to ATP synthase and turn it without the need for a proton gradient across the membrane',
    ],
    correctAnswer: 0,
    explanation:
      'Light energizes electrons in the photosystems; as they move along the electron transport chain, they build a proton gradient for ATP synthesis and reduce $NADP^{+}$ to NADPH. Carbon fixation in the Calvin cycle uses that ATP and NADPH and is not powered by light directly.',
    optionExplanations: [
      'Light excites electrons in chlorophyll. As they move along the thylakoid electron transport chain, they build a proton gradient that drives ATP synthesis and reduce $NADP^{+}$ to NADPH.',
      'The enzyme that attaches $CO_{2}$ (rubisco) works in the Calvin cycle, which runs on the ATP and NADPH made by the light reactions. Light does not supply energy to that enzyme directly.',
      'Light reactions split water, not $CO_{2}$, and the oxygen released comes from water. Carbon from $CO_{2}$ is fixed later in the Calvin cycle.',
      'Light does not bind to ATP synthase. ATP synthase in the thylakoid membrane is driven by the proton gradient, which light-driven electron transport builds.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'Isolated chloroplasts are kept in the dark and supplied with $CO_{2}$ and an ample supply of ATP and NADPH.',
    question: 'Which result is expected?',
    options: [
      'Oxygen is released, because water is split whenever NADPH is present in the stroma.',
      'No carbon is fixed, because the Calvin cycle needs light to energize its enzymes directly.',
      'Carbon is fixed into sugar, because the Calvin cycle uses ATP and NADPH but not light directly.',
      'Carbon is fixed using ATP alone, because the Calvin cycle produces its own NADPH.',
    ],
    correctAnswer: 2,
    explanation:
      'The Calvin cycle requires ATP and NADPH, which the light reactions normally supply; if they are provided directly, carbon fixation can occur in the dark. Light is needed only to make ATP and NADPH, not to run the Calvin cycle enzymes themselves.',
    optionExplanations: [
      'Water is split only when light excites photosystem II, so no oxygen is released in the dark. Having NADPH in the stroma does not cause water to be split.',
      'The Calvin cycle enzymes do not need light directly; they need the ATP and NADPH that light reactions normally make. Since those are supplied, carbon fixation can proceed in the dark.',
      'The Calvin cycle uses ATP and NADPH to fix $CO_{2}$ into sugar. Light is needed only to make those molecules, so providing them directly lets carbon fixation occur in the dark.',
      'The Calvin cycle does not make its own NADPH; it consumes NADPH supplied by the light reactions. Here NADPH is provided directly, and the cycle uses it along with ATP.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'The water molecules split during the light-dependent reactions of photosynthesis serve primarily to',
    options: [
      'supply the oxygen atoms that are built into the sugars made in the Calvin cycle',
      'replace electrons lost from photosystem II, releasing $O_{2}$ as a by-product',
      'act as the final electron acceptor at the end of the thylakoid electron transport chain',
      'donate electrons directly to $NADP^{+}$ without passing through either photosystem',
    ],
    correctAnswer: 1,
    explanation:
      'Splitting water replaces the electrons that photosystem II loses when light excites it, releasing $O_{2}$ and adding protons to the thylakoid space. The oxygen atoms in sugars come from $CO_{2}$, and $NADP^{+}$, not water, is the final electron acceptor.',
    optionExplanations: [
      'The oxygen atoms built into sugars come from $CO_{2}$, not from water. Oxygen from split water is released as $O_{2}$ gas.',
      'When light excites photosystem II, it loses electrons. Splitting water replaces them, releases $O_{2}$ as a by-product, and adds protons to the thylakoid space.',
      'Water is the electron donor at the start of the chain, not the final acceptor. In photosynthesis the final electron acceptor is $NADP^{+}$, which is reduced to NADPH.',
      'Electrons from water pass through photosystem II, the electron transport chain, and photosystem I before reaching $NADP^{+}$. Water does not hand electrons to $NADP^{+}$ directly.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In the absence of oxygen, many cells continue to make ATP by fermentation. The main function of fermentation is to',
    options: [
      'convert lactate back into glucose so that the cell has more fuel for glycolysis',
      'produce extra ATP by sending pyruvate through the Krebs cycle without oxygen',
      'build a proton gradient so that ATP synthase can keep working without oxygen',
      'regenerate $NAD^{+}$ so glycolysis can keep making a small amount of ATP',
    ],
    correctAnswer: 3,
    explanation:
      'Glycolysis needs $NAD^{+}$; fermentation transfers electrons from NADH to pyruvate or a derivative, regenerating $NAD^{+}$ so glycolysis can continue making 2 ATP per glucose. The Krebs cycle depends on the electron transport chain to recycle its carriers, so it does not run without oxygen.',
    optionExplanations: [
      'Fermentation does not convert lactate back into glucose. It converts pyruvate into lactate or ethanol in order to recycle $NAD^{+}$ for glycolysis.',
      'The Krebs cycle does not run without oxygen, because its carriers are recycled only by the electron transport chain. Fermentation makes no extra ATP beyond glycolysis.',
      'Fermentation does not build a proton gradient; without oxygen, the electron transport chain stops. The only ATP made is the 2 per glucose from glycolysis.',
      'Glycolysis needs $NAD^{+}$ to keep running. Fermentation passes electrons from NADH to pyruvate or a derivative, regenerating $NAD^{+}$ so glycolysis can keep making 2 ATP per glucose.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'An energy diagram for a reaction shows reactants at 50 kJ/mol and products at 20 kJ/mol. The highest point on the curve is 120 kJ/mol without an enzyme and 80 kJ/mol with the enzyme.',
    question: 'Which statement correctly describes the effect of the enzyme?',
    options: [
      'It lowers the activation energy by 40 kJ/mol and leaves ΔG at −30 kJ/mol.',
      'It lowers ΔG by 40 kJ/mol and leaves the activation energy unchanged at 70 kJ/mol.',
      'It lowers the activation energy by 40 kJ/mol and changes ΔG to −70 kJ/mol.',
      'It raises the energy of the reactants by 40 kJ/mol so they reach the peak.',
    ],
    correctAnswer: 0,
    explanation:
      'Activation energy falls from 70 kJ/mol (120 − 50) to 30 kJ/mol (80 − 50), a drop of 40 kJ/mol. ΔG depends only on the reactants and products (20 − 50 = −30 kJ/mol), and enzymes do not change it.',
    optionExplanations: [
      'Activation energy falls from 70 kJ/mol (120 − 50) to 30 kJ/mol (80 − 50), a drop of 40 kJ/mol. ΔG depends only on reactants and products, 20 − 50 = −30 kJ/mol, and the enzyme leaves it unchanged.',
      'This reverses what an enzyme does. Enzymes lower activation energy and do not change ΔG, which stays at −30 kJ/mol because the reactant and product energies are unchanged.',
      'The drop in activation energy is right, but ΔG does not change. It is set by the reactants at 50 and the products at 20 kJ/mol, so it stays at −30 kJ/mol with or without the enzyme.',
      'Enzymes do not raise the energy of the reactants, which stay at 50 kJ/mol in the diagram. The enzyme lowers the peak, giving the reaction a lower-energy path.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'An inhibitor binds to an enzyme at a site other than the active site.',
    question: 'Which of the following best describes the effect of this inhibitor?',
    options: [
      'It blocks the active site directly, so adding more substrate restores the maximum reaction rate.',
      'It changes the enzyme\'s shape, so adding more substrate does not restore the maximum reaction rate.',
      'It is pushed off the enzyme by extra substrate, so the maximum reaction rate is fully restored.',
      'It breaks peptide bonds in the enzyme, so the enzyme is degraded and must be made again.',
    ],
    correctAnswer: 1,
    explanation:
      'A noncompetitive inhibitor binds an allosteric site and changes the enzyme\'s shape, so even high substrate concentrations cannot restore the maximum rate. Competitive inhibitors bind the active site, and only that kind of inhibition can be overcome by adding more substrate.',
    optionExplanations: [
      'An inhibitor that blocks the active site is competitive, but this one binds a site other than the active site. Adding more substrate cannot compete it away.',
      'Binding at a site other than the active site changes the enzyme\'s shape. Because substrate is not competing for the same site, even high substrate levels cannot restore the maximum rate.',
      'Extra substrate pushes off only an inhibitor that competes for the active site. This inhibitor binds elsewhere, so the substrate cannot displace it or fully restore the maximum rate.',
      'Inhibitors bind enzymes; they do not hydrolyze their peptide bonds. Reversible inhibition changes the enzyme\'s activity without destroying it.',
    ],
  },

  /* ============================ UNIT 4 — CELL COMM & CELL CYCLE (8) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Which of the following correctly orders the three stages of cell signaling?',
    options: [
      'Response, reception, transduction',
      'Reception, transduction, response',
      'Transduction, reception, response',
      'Reception, response, transduction',
    ],
    correctAnswer: 1,
    explanation:
      'A ligand first binds a receptor (reception), the signal is relayed and often amplified inside the cell (transduction), and the cell then changes its activity (response). Transduction must come before the response because it is the relay that carries the signal to the target.',
    optionExplanations: [
      'A response cannot come first, because the cell must detect the signal before it changes its activity. The sequence begins with a ligand binding a receptor.',
      'A ligand first binds a receptor (reception). The signal is then relayed and often amplified inside the cell (transduction), and the cell finally changes its activity (response).',
      'Transduction relays a signal that has already been received, so it cannot occur before reception. The ligand must bind its receptor first.',
      'The response cannot come before transduction, because transduction is the relay that carries the signal from the receptor to the target that responds.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Insulin is a peptide hormone that cannot diffuse through the lipid bilayer. Its receptor is most likely',
    options: [
      'a protein in the outer mitochondrial membrane',
      'a protein dissolved in the cytosol of the cell',
      'a protein located inside the nucleus of the cell',
      'a protein embedded in the plasma membrane',
    ],
    correctAnswer: 3,
    explanation:
      'Hydrophilic signals such as peptide hormones cannot pass through the hydrophobic interior of the membrane, so they bind receptors on the cell surface. Cytosolic and nuclear receptors bind small nonpolar signals, such as steroid hormones, that can diffuse into the cell.',
    optionExplanations: [
      'Mitochondrial membranes are inside the cell. A signal that cannot cross the plasma membrane could never reach a receptor in the outer mitochondrial membrane.',
      'Cytosolic receptors bind small nonpolar signals, such as steroid hormones, that diffuse across the membrane. Insulin cannot cross the bilayer, so it cannot reach a receptor in the cytosol.',
      'Nuclear receptors bind signals that diffuse into the cell, such as steroid and thyroid hormones. Insulin cannot cross the plasma membrane, so it cannot reach the nucleus.',
      'A hydrophilic peptide hormone cannot pass through the hydrophobic core of the bilayer, so it must bind a receptor on the cell surface. That receptor is a protein embedded in the plasma membrane.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus:
      'The protein p53 halts the cell cycle when DNA is damaged and can trigger apoptosis if the damage is not repaired.',
    question: 'A cell that lacks functional p53 is most likely to',
    options: [
      'undergo apoptosis more often, because damaged DNA goes unrepaired',
      'stop dividing permanently, because no cell can pass the checkpoint',
      'continue dividing despite DNA damage, raising the risk of cancer',
      'divide normally, because other checkpoints fully take over its role',
    ],
    correctAnswer: 2,
    explanation:
      'Without p53, cells with damaged DNA are neither stopped nor eliminated, so mutations accumulate in dividing cells, which can lead to cancer. p53 is what triggers apoptosis of damaged cells, so losing it makes apoptosis less likely, not more.',
    optionExplanations: [
      'This reverses p53\'s role. p53 is what triggers apoptosis of damaged cells, so a cell without it is less likely, not more likely, to undergo apoptosis.',
      'p53 halts the cycle only when DNA is damaged. Without it, cells are less able to stop, so the loss leads to unchecked division rather than permanent arrest.',
      'Without p53, cells with damaged DNA are neither halted nor eliminated. They keep dividing, mutations accumulate, and the risk of cancer rises.',
      'The stimulus gives p53 a specific role in halting damaged cells and triggering apoptosis. Nothing indicates other checkpoints fully replace it, and losing p53 is strongly associated with cancer.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus:
      'In a controlled experiment, scientists block the synthesis of cyclins in dividing cells.',
    question: 'Which of the following is the most likely result?',
    options: [
      'The cells arrest at a checkpoint, because CDKs are inactive without cyclins.',
      'The cells divide faster, because cyclins normally act as brakes on the cycle.',
      'The cells skip S phase but otherwise complete mitosis and cytokinesis normally.',
      'The cells keep dividing, because CDKs are present at constant levels throughout.',
    ],
    correctAnswer: 0,
    explanation:
      'Cyclin-dependent kinases are active only when bound to cyclins, and the active complexes drive the cell past checkpoints. CDK levels do stay fairly constant, but without cyclins the kinases remain inactive, so the cells arrest.',
    optionExplanations: [
      'CDKs are active only when bound to cyclins, and active cyclin-CDK complexes drive the cell past checkpoints. Blocking cyclin synthesis leaves the kinases inactive, so the cells arrest.',
      'This reverses the role of cyclins. Cyclins activate CDKs and push the cycle forward; they are not brakes, so removing them would stop division rather than speed it up.',
      'Cyclins are needed at several transitions, including entry into S phase and into mitosis. Without them the cell cannot pass these checkpoints, so it would not complete mitosis normally.',
      'CDK levels do stay fairly constant, but CDKs are inactive without cyclins. Constant CDK levels are not enough to keep the cells dividing.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'The G1 checkpoint primarily determines',
    options: [
      'whether cytokinesis has divided the cytoplasm before the next round of growth',
      'whether every chromosome is attached to spindle fibers before chromatids separate',
      'whether conditions are favorable and DNA is undamaged before replication begins',
      'whether homologous chromosomes have paired before crossing over can take place',
    ],
    correctAnswer: 2,
    explanation:
      'At the G1 checkpoint the cell assesses size, nutrients, growth signals, and DNA integrity before committing to S phase; cells that do not pass may enter G0. Spindle attachment is checked later, at the checkpoint that controls chromatid separation during mitosis.',
    optionExplanations: [
      'The completion of cytokinesis is not what the G1 checkpoint checks. Cytokinesis ends the previous division; the G1 checkpoint decides whether the cell will commit to a new round of replication.',
      'Spindle attachment is checked at the checkpoint in mitosis that controls when sister chromatids separate, not at G1.',
      'At the G1 checkpoint the cell assesses its size, nutrients, growth signals, and DNA integrity before committing to S phase. Cells that do not pass may enter G0.',
      'Homologous chromosomes pair only in meiosis, during prophase I. The G1 checkpoint is part of the cell cycle and controls entry into DNA replication.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Which event in mitosis directly moves sister chromatids to opposite poles of the cell?',
    options: [
      'The centromeres divide, and like charges on the chromatids push them to opposite poles.',
      'Proteins linking each chromatid pair are cleaved, and kinetochore microtubules shorten.',
      'The chromosomes condense, and their two chromatids separate as they become visible.',
      'A cleavage furrow pinches the cell, pulling one chromatid into each side of the cell.',
    ],
    correctAnswer: 1,
    explanation:
      'Sister chromatids are held together until the joining proteins are cleaved; kinetochore microtubules then shorten and pull each chromatid toward a pole. Cytokinesis divides the cytoplasm only after the chromatids have already separated, so the cleavage furrow does not move them.',
    optionExplanations: [
      'Chromatids are not pushed apart by electric charge. They are pulled toward the poles by shortening kinetochore microtubules after the proteins holding them together are cut.',
      'Sister chromatids stay together until the proteins joining them are cleaved. Kinetochore microtubules then shorten and pull each chromatid toward an opposite pole in anaphase.',
      'Chromosomes condense in prophase, but the sister chromatids stay joined at the centromere until anaphase. Condensation makes them visible but does not separate them.',
      'Cytokinesis divides the cytoplasm only after the chromatids have already moved to the poles. The cleavage furrow separates the two cells, not the chromatids.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Many signal transduction pathways include a phosphorylation cascade. A key advantage of a cascade is that',
    options: [
      'the cascade lets a single ligand bind many receptors at once on the cell surface',
      'each kinase removes a phosphate from the next protein, ending the signal quickly',
      'the cascade copies the signal into DNA so that daughter cells inherit the response',
      'one activated kinase can phosphorylate many proteins, amplifying the signal',
    ],
    correctAnswer: 3,
    explanation:
      'Each activated kinase phosphorylates many molecules of the next protein, so a few signal molecules can produce a large cellular response. Removing phosphates is the job of phosphatases, which turn the pathway off rather than relay the signal.',
    optionExplanations: [
      'Each ligand molecule binds one receptor, and a cascade acts inside the cell, after reception. Amplification comes from the kinases, not from one ligand binding many receptors.',
      'Removing phosphates is the job of phosphatases, which switch the pathway off. In a cascade, each kinase adds phosphates to the next protein, which relays and amplifies the signal.',
      'A phosphorylation cascade acts on proteins and does not write the signal into DNA. The response is not passed to daughter cells by copying the signal into the genome.',
      'Each activated kinase can phosphorylate many molecules of the next protein in the pathway. A few signal molecules can therefore produce a very large cellular response.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Apoptosis is important in the normal development of multicellular organisms because it',
    options: [
      'removes specific cells at set times, such as the webbing between the digits of an embryo',
      'removes cells at random so that every tissue keeps a constant total number of cells',
      'is triggered when cells are injured, so that they burst and release their contents',
      'causes cells to divide rapidly so that new structures such as fingers can take shape',
    ],
    correctAnswer: 0,
    explanation:
      'Apoptosis is an orderly, genetically controlled process that eliminates particular cells, for example the webbing between developing digits. Cells that burst after injury are dying by necrosis, which causes inflammation; apoptosis dismantles cells in an orderly way without spilling their contents.',
    optionExplanations: [
      'Apoptosis is an orderly, genetically controlled process that eliminates particular cells at set times. Removing the webbing between developing digits is a classic example.',
      'Apoptosis is not random; it removes particular cells at particular times during development. Its purpose is to shape structures, not to hold total cell number constant.',
      'Cells that burst after injury and spill their contents are dying by necrosis, which causes inflammation. Apoptosis dismantles cells in an orderly way without releasing their contents.',
      'Apoptosis is cell death, not cell division. Fingers take shape because the cells between them are removed, not because cells divide rapidly.',
    ],
  },

  /* ============================ UNIT 5 — HEREDITY (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'In pea plants, purple flowers (P) are dominant to white flowers (p). A cross of Pp × pp produces 115 purple-flowered and 85 white-flowered offspring. A student tests the hypothesis of a 1:1 ratio using χ² = Σ(o − e)²/e. Critical values at p = 0.05: 3.84 (1 degree of freedom), 5.99 (2), 7.81 (3).',
    question: 'Which conclusion is correct?',
    options: [
      'χ² = 4.50, which is less than 5.99, so the 1:1 hypothesis is not rejected.',
      'χ² = 4.50, which is greater than 3.84, so the 1:1 hypothesis is rejected.',
      'χ² = 2.25, which is less than 3.84, so the 1:1 hypothesis is not rejected.',
      'χ² = 0.30, which is less than 3.84, so the 1:1 hypothesis is not rejected.',
    ],
    correctAnswer: 1,
    explanation:
      'The expected counts are 100 and 100, so χ² = 15²/100 + 15²/100 = 4.50. With two phenotype classes there is 1 degree of freedom, and 4.50 exceeds 3.84, so the deviation is unlikely to be due to chance alone; comparing with 5.99 uses the wrong degrees of freedom.',
    optionExplanations: [
      'The χ² value of 4.50 is right, but 5.99 is the critical value for 2 degrees of freedom. Two phenotype classes give only 1 degree of freedom, so the correct cutoff is 3.84.',
      'Expected counts are 100 and 100, so χ² = 15²/100 + 15²/100 = 4.50. With two phenotype classes there is 1 degree of freedom, and 4.50 exceeds 3.84, so the 1:1 hypothesis is rejected.',
      'A value of 2.25 counts only one of the two phenotype classes. Both classes deviate by 15 from the expected 100, so each contributes 2.25 and χ² is 4.50.',
      'A value of 0.30 does not follow from the formula; each class contributes (15)²/100 = 2.25. The correct total is 4.50, which exceeds the critical value.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'In a four-generation pedigree, a trait appears in every generation and affects males and females in about equal numbers. An affected father passes the trait to two of his three sons, and every affected child has at least one affected parent.',
    question: 'Which mode of inheritance is most consistent with the pedigree?',
    options: [
      'X-linked recessive',
      'Autosomal recessive',
      'X-linked dominant',
      'Autosomal dominant',
    ],
    correctAnswer: 3,
    explanation:
      'A trait that appears in every generation, affects both sexes equally, and always has an affected parent fits autosomal dominant inheritance. An X-linked dominant trait could also appear in every generation, but a father passes his Y chromosome, not his X, to his sons, so he could not transmit it to them.',
    optionExplanations: [
      'X-linked recessive traits usually affect many more males than females and often skip generations, and fathers cannot pass an X-linked trait to their sons. The pedigree shows none of these patterns.',
      'Autosomal recessive traits often skip generations and can appear in children of two unaffected parents. Here the trait appears in every generation and every affected child has an affected parent.',
      'An X-linked dominant trait could appear in every generation, but a father passes his Y chromosome, not his X, to his sons. He could not transmit an X-linked trait to two of his sons.',
      'A trait that appears in every generation, affects both sexes about equally, always has an affected parent, and passes from father to son fits autosomal dominant inheritance.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Independent assortment of genes on different chromosomes results from',
    options: [
      'the separation of sister chromatids to opposite poles in meiosis II',
      'crossing over between nonsister chromatids early in meiosis I',
      'the random orientation of each homologous pair at the middle of the cell in meiosis I',
      'fertilization of one egg by a randomly chosen sperm cell from the father',
    ],
    correctAnswer: 2,
    explanation:
      'Each homologous pair lines up independently of the others in meiosis I, so maternal and paternal chromosomes are sorted into gametes in $2^{n}$ possible combinations. Crossing over also increases variation, but it reshuffles alleles within a chromosome pair rather than sorting different chromosomes independently.',
    optionExplanations: [
      'Separation of sister chromatids in meiosis II divides identical copies, so it does not create new combinations of chromosomes. Independent assortment is set in meiosis I.',
      'Crossing over does increase variation, but it reshuffles alleles within a homologous pair. Independent assortment refers to how different chromosome pairs are sorted relative to one another.',
      'Each homologous pair lines up at the middle of the cell independently of the others in meiosis I. Maternal and paternal chromosomes are therefore sorted into gametes in many possible combinations.',
      'Random fertilization adds variation among offspring, but it happens after meiosis. Independent assortment describes how chromosomes are sorted into gametes during meiosis I.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'A man with hemophilia, an X-linked recessive disorder, has children with a woman who is a carrier.',
    question: 'What is the probability that any given daughter of this couple will have hemophilia?',
    options: [
      '0%',
      '25%',
      '50%',
      '100%',
    ],
    correctAnswer: 2,
    explanation:
      'Every daughter receives the father\'s $X^{h}$ and has a ½ chance of receiving the mother\'s $X^{h}$, so half of the daughters are expected to be $X^{h}X^{h}$ and affected. The value 25% is the chance that a child of either sex is an affected daughter, not the chance for a daughter.',
    optionExplanations: [
      'Every daughter receives her father\'s X, which carries the hemophilia allele. Because the mother is a carrier, a daughter can also inherit the allele from her, so the risk is not 0%.',
      '25% is the chance that any child, of either sex, is an affected daughter. Among daughters only, each one already has the father\'s allele and a ½ chance of the mother\'s, so the risk is 50%.',
      'Every daughter gets her father\'s $X^{h}$ and has a ½ chance of getting her mother\'s $X^{h}$. Half of the daughters are therefore expected to be $X^{h}X^{h}$ and affected.',
      'The mother is a carrier, so each daughter has only a ½ chance of inheriting her $X^{h}$. Every daughter would be affected only if the mother were also affected.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Crossing over during prophase I of meiosis contributes to genetic variation by',
    options: [
      'exchanging segments between homologous chromosomes, forming new combinations of alleles',
      'swapping segments between sister chromatids, forming chromatids with brand-new alleles',
      'doubling the number of chromosomes in each gamete so that more alleles are passed on',
      'repairing mutations in one homolog by copying the matching segment from the other one',
    ],
    correctAnswer: 0,
    explanation:
      'Crossing over between nonsister chromatids of homologous chromosomes produces recombinant chromatids that carry new combinations of maternal and paternal alleles. Sister chromatids are identical copies, so exchanging segments between them would not create new combinations.',
    optionExplanations: [
      'Crossing over between nonsister chromatids of homologous chromosomes produces recombinant chromatids. They carry new combinations of maternal and paternal alleles.',
      'Sister chromatids are identical copies, so swapping segments between them would not produce anything new. Crossing over also reshuffles existing alleles rather than creating brand-new ones.',
      'Meiosis halves the chromosome number; crossing over does not change it. Gametes carry one set of chromosomes, whether or not crossing over occurred.',
      'Crossing over is not a repair mechanism. It exchanges segments between homologs, which mixes maternal and paternal alleles.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'Two plants heterozygous for two unlinked genes (AaBb × AaBb) are crossed. A and B are completely dominant.',
    question: 'What fraction of the offspring is expected to show both dominant phenotypes?',
    options: [
      '1/16',
      '3/16',
      '6/16',
      '9/16',
    ],
    correctAnswer: 3,
    explanation:
      'Each gene gives a ¾ chance of the dominant phenotype, and because the genes assort independently, the probability of both is ¾ × ¾ = 9/16. The fraction 3/16 is the chance of one dominant and one recessive phenotype in a particular combination.',
    optionExplanations: [
      '1/16 is the chance of both recessive phenotypes (aabb), ¼ × ¼. Each gene gives a ¾ chance of the dominant phenotype, so both dominant is ¾ × ¾.',
      '3/16 is the chance of one dominant and one recessive phenotype in a particular combination, such as A_bb. The fraction showing both dominant phenotypes is larger.',
      '6/16 is the total chance of having exactly one dominant phenotype, 3/16 + 3/16. The question asks for offspring showing both dominant phenotypes.',
      'Each gene gives a ¾ chance of the dominant phenotype. Because the genes assort independently, the chance of both is ¾ × ¾ = 9/16.',
    ],
  },

  /* ============================ UNIT 6 — GENE EXPRESSION & REGULATION (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'During DNA replication, the role of DNA polymerase is to',
    options: [
      'join Okazaki fragments by sealing gaps in the sugar-phosphate backbone',
      'unwind the double helix by breaking hydrogen bonds between paired bases',
      'add nucleotides to the 3\' end of a new strand, using the parent strand as a template',
      'lay down short RNA primers that give each new strand a starting point',
    ],
    correctAnswer: 2,
    explanation:
      'DNA polymerase adds complementary nucleotides to the 3\' end of a growing strand, so new DNA is built 5\' to 3\'. Sealing gaps between Okazaki fragments is done by ligase, and unwinding is done by helicase.',
    optionExplanations: [
      'Sealing gaps between Okazaki fragments is the job of DNA ligase, not DNA polymerase. Polymerase builds the new strand.',
      'Unwinding the helix by breaking hydrogen bonds is the job of helicase. DNA polymerase acts after the strands are separated.',
      'DNA polymerase adds complementary nucleotides to the 3\' end of a growing strand, reading the parent strand as a template. New DNA is therefore built 5\' to 3\'.',
      'Short RNA primers are laid down by primase. DNA polymerase needs a primer because it can only add to an existing 3\' end.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which statement correctly describes the lagging strand during DNA replication?',
    options: [
      'It is made continuously toward the fork, because its template runs 3\' to 5\' toward the fork.',
      'It is made in short fragments that are later joined, because synthesis runs only 5\' to 3\'.',
      'It is made by RNA polymerase, because DNA polymerase cannot read a 5\' to 3\' template.',
      'It is copied only after the leading strand is finished, because both share one polymerase.',
    ],
    correctAnswer: 1,
    explanation:
      'DNA polymerase builds only in the 5\' to 3\' direction, so the strand oriented away from the moving fork is made in short Okazaki fragments that ligase later joins. Continuous synthesis toward the fork describes the leading strand.',
    optionExplanations: [
      'Continuous synthesis toward the fork describes the leading strand, not the lagging strand. The lagging strand is built away from the fork in short fragments.',
      'DNA polymerase builds only 5\' to 3\', so the strand oriented away from the moving fork is made in short Okazaki fragments. DNA ligase later joins them into one strand.',
      'Both strands are built by DNA polymerase; RNA polymerase transcribes RNA. Primase makes only the short RNA primers that each fragment starts from.',
      'Both strands are copied at the same time as the fork moves. The lagging strand is not delayed until the leading strand is finished.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which enzyme synthesizes mRNA using a DNA template during transcription?',
    options: [
      'DNA polymerase',
      'RNA polymerase',
      'DNA ligase',
      'Reverse transcriptase',
    ],
    correctAnswer: 1,
    explanation:
      'RNA polymerase reads the template strand of DNA and builds a complementary RNA strand 5\' to 3\'. DNA polymerase also reads a DNA template, but it builds DNA during replication rather than RNA.',
    optionExplanations: [
      'DNA polymerase also reads a DNA template, but it builds DNA during replication. It does not make the RNA copy of a gene.',
      'RNA polymerase reads the template strand of DNA and builds a complementary RNA strand 5\' to 3\'. That is transcription.',
      'DNA ligase joins DNA fragments, for example Okazaki fragments, by sealing the sugar-phosphate backbone. It does not synthesize RNA.',
      'Reverse transcriptase does the opposite of transcription: it uses an RNA template to build DNA. Transcription uses a DNA template to build RNA.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'In eukaryotes, pre-mRNA is modified before translation by the addition of a 5\' cap and a 3\' poly-A tail and by the removal of introns.',
    question: 'What is the main function of the 5\' cap and the poly-A tail?',
    options: [
      'They pair with tRNA anticodons to position the first amino acid.',
      'They mark the start and stop codons that set the reading frame of the mRNA.',
      'They are removed with the introns before the mRNA leaves the nucleus.',
      'They protect the mRNA from degradation and help it bind to ribosomes.',
    ],
    correctAnswer: 3,
    explanation:
      'The cap and tail protect mRNA from degradation, aid its export from the nucleus, and help ribosomes attach for translation. Start and stop codons are part of the coding sequence itself, not the added cap and tail.',
    optionExplanations: [
      'Pairing with tRNA anticodons is done by codons in the coding sequence, starting with the start codon. The cap and tail are not codons.',
      'Start and stop codons are part of the coding sequence itself. The cap and tail are added to the ends of the transcript and do not set the reading frame.',
      'Only introns are removed. The 5\' cap and poly-A tail stay on the mature mRNA when it leaves the nucleus.',
      'The 5\' cap and the poly-A tail protect mRNA from degradation, help export it from the nucleus, and help ribosomes attach for translation.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'A single nucleotide substitution in a gene changes the mRNA codon UAC (tyrosine) to UAA (stop).',
    question: 'This mutation is best classified as',
    options: [
      'a silent mutation',
      'a missense mutation',
      'a nonsense mutation',
      'a frameshift mutation',
    ],
    correctAnswer: 2,
    explanation:
      'A substitution that turns an amino acid codon into a stop codon is a nonsense mutation and ends translation early. A missense mutation also changes a single codon, but it replaces one amino acid with another rather than creating a stop codon.',
    optionExplanations: [
      'A silent mutation changes a codon to one coding for the same amino acid. Here tyrosine is replaced by a stop codon, so the protein is changed.',
      'A missense mutation changes one codon to a different amino acid. UAA is a stop codon, not an amino acid codon, so this is not missense.',
      'A substitution that turns an amino acid codon into a stop codon is a nonsense mutation. Changing UAC to UAA ends translation early and shortens the protein.',
      'A frameshift results from inserting or deleting nucleotides in a number that is not a multiple of three. This is a single substitution, so the reading frame stays the same.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'In the lac operon of E. coli, what happens when lactose is absent?',
    options: [
      'The repressor binds the operator, and the genes are not transcribed.',
      'The repressor leaves the operator, and the genes are transcribed.',
      'Lactose binds the operator, and the genes are transcribed at high levels.',
      'The repressor binds the promoter, and the genes are transcribed slowly.',
    ],
    correctAnswer: 0,
    explanation:
      'Without lactose, the active repressor binds the operator and blocks RNA polymerase, so the lac genes are off. The repressor releases the operator only when lactose (as allolactose) binds it, which is why the operon is called inducible.',
    optionExplanations: [
      'Without lactose, the active repressor binds the operator and blocks RNA polymerase. The lac genes are therefore not transcribed.',
      'The repressor leaves the operator only when lactose, as allolactose, binds to it. With no lactose, the repressor stays bound and the genes stay off.',
      'Lactose does not bind the operator, and it is absent in this case. When lactose is present, it binds the repressor, not the DNA.',
      'The repressor binds the operator, not the promoter, and it blocks transcription rather than just slowing it. The genes are essentially off.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'A neuron and a muscle cell from the same person contain identical DNA, yet they produce very different sets of proteins.',
    question: 'Which explanation best accounts for this difference?',
    options: [
      'Each cell type deletes the genes it does not need during development.',
      'Different cells transcribe different subsets of the same set of genes.',
      'Each cell type acquires mutations that create the genes it requires.',
      'Each cell type translates the same mRNAs using a different genetic code.',
    ],
    correctAnswer: 1,
    explanation:
      'Cell types differ because transcription factors and other regulators switch different sets of genes on and off in each cell. The DNA is identical in both cells, so genes have not been deleted or newly created.',
    optionExplanations: [
      'The stimulus states that the two cells contain identical DNA, so genes have not been deleted. Differentiated cells keep the full genome.',
      'Transcription factors and other regulators switch different sets of genes on and off in each cell type. The cells share one genome but express different subsets of it.',
      'Cells do not acquire mutations to make the genes they need, and the stimulus states the DNA is identical. Differences come from regulation, not new genes.',
      'The genetic code is essentially universal and is the same in every cell of an organism. The cells differ in which mRNAs they make, not in how they read them.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'A retrovirus such as HIV uses the enzyme reverse transcriptase to',
    options: [
      'cut the host chromosome so that its RNA genome can be inserted as RNA',
      'translate its RNA genome directly into viral proteins on host ribosomes',
      'make an RNA copy of the host genome that it packages into new virus particles',
      'make a DNA copy of its RNA genome that can be integrated into host DNA',
    ],
    correctAnswer: 3,
    explanation:
      'Reverse transcriptase uses viral RNA as a template to build DNA, which can then be inserted into a host chromosome and transcribed by host enzymes. Viral proteins are made on host ribosomes, but only after the integrated DNA is transcribed into mRNA.',
    optionExplanations: [
      'Reverse transcriptase does not cut the host chromosome, and the viral genome is not inserted as RNA. The RNA is first copied into DNA, and that DNA is integrated.',
      'Translation is carried out by host ribosomes, not by reverse transcriptase. Viral proteins are made only after the integrated DNA has been transcribed into mRNA.',
      'Reverse transcriptase copies the viral genome, not the host genome. It also makes DNA, not RNA.',
      'Reverse transcriptase uses the viral RNA as a template to build DNA. That DNA can be integrated into a host chromosome and transcribed by host enzymes.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which of the following best describes the role of transcription factors in eukaryotic gene regulation?',
    options: [
      'They bind the ends of chromosomes and unwind the DNA for replication.',
      'They bind mRNA in the cytoplasm and determine which codons are translated.',
      'They bind specific DNA sequences and help or hinder RNA polymerase binding.',
      'They bind newly made proteins and mark them for degradation in the cell.',
    ],
    correctAnswer: 2,
    explanation:
      'Transcription factors bind promoters and enhancers and influence whether RNA polymerase assembles at a gene, controlling how often it is transcribed. Regulation of mRNA in the cytoplasm happens after transcription and is carried out by other molecules, such as small regulatory RNAs.',
    optionExplanations: [
      'Binding chromosome ends and unwinding DNA for replication describes other proteins, such as helicase. Transcription factors control transcription, not replication.',
      'Transcription factors act on DNA in the nucleus. Control over which mRNAs are translated happens after transcription and involves other molecules, such as small regulatory RNAs.',
      'Transcription factors bind promoters and enhancers and help or hinder the assembly of RNA polymerase at a gene. This controls how often the gene is transcribed.',
      'Marking proteins for degradation is a step after translation, carried out by tags such as ubiquitin. Transcription factors act earlier, at the level of transcription.',
    ],
  },

  /* ============================ UNIT 7 — NATURAL SELECTION (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Which of the following is required for natural selection to occur in a population?',
    options: [
      'Heritable variation in a trait that affects survival or reproduction',
      'An environment that stays the same over many generations',
      'Sexual reproduction that shuffles alleles in every generation',
      'A population large enough that genetic drift has no effect',
    ],
    correctAnswer: 0,
    explanation:
      'Selection acts when heritable differences among individuals cause differences in survival or reproduction. Sexual reproduction adds variation, but asexual bacteria also evolve by natural selection, so it is not required.',
    optionExplanations: [
      'Selection acts when individuals differ in heritable traits that affect how well they survive or reproduce. Without heritable variation, there is nothing for selection to favor.',
      'An unchanging environment is not required. Selection occurs in changing environments too, and changing conditions often drive it.',
      'Sexual reproduction adds variation, but it is not required. Asexual bacteria also evolve by natural selection, for example when they become resistant to antibiotics.',
      'Selection does not require that drift be absent. Both act in real populations at the same time, including small ones.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'A population of 1,000 diploid individuals is in Hardy-Weinberg equilibrium for a gene with two alleles. In the population, 160 individuals show the recessive phenotype.',
    question: 'How many individuals are expected to be heterozygous?',
    options: [
      '160',
      '240',
      '360',
      '480',
    ],
    correctAnswer: 3,
    explanation:
      'q² = 160/1,000 = 0.16, so q = 0.4 and p = 0.6. Heterozygotes are 2pq = 2(0.6)(0.4) = 0.48 of the population, or 480 individuals; 360 is the number of homozygous dominant individuals (p²).',
    optionExplanations: [
      '160 is the number of homozygous recessive individuals (q² × 1,000), not the number of heterozygotes. Heterozygotes are counted with 2pq.',
      '240 does not follow from the Hardy-Weinberg equation. With q = 0.4 and p = 0.6, 2pq = 0.48, giving 480 heterozygotes.',
      '360 is the number of homozygous dominant individuals, because p² = 0.36 of 1,000. Heterozygotes are counted with 2pq instead.',
      'q² = 160/1,000 = 0.16, so q = 0.4 and p = 0.6. Heterozygotes are 2pq = 2(0.6)(0.4) = 0.48 of the population, or 480 individuals.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Which of the following best describes genetic drift?',
    options: [
      'Changes in allele frequencies caused by individuals moving between populations',
      'Changes in allele frequencies caused by differences in reproductive success',
      'Chance changes in allele frequencies, with the largest effects in small populations',
      'Changes in allele frequencies caused by new mutations arising in each generation',
    ],
    correctAnswer: 2,
    explanation:
      'Genetic drift is random change in allele frequencies from chance sampling of which individuals reproduce, and it is strongest in small populations. Changes driven by differences in reproductive success are natural selection, which is not random with respect to fitness.',
    optionExplanations: [
      'Changes in allele frequencies caused by individuals moving between populations describe gene flow. Genetic drift is change caused by chance alone.',
      'Changes caused by differences in reproductive success are natural selection, which is not random with respect to fitness. Drift is driven by chance.',
      'Genetic drift is a random change in allele frequencies caused by chance in which individuals reproduce. Its effects are largest in small populations.',
      'Mutation is the source of new alleles, but it is a separate mechanism from drift. Drift changes the frequencies of alleles already present, by chance.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'About 200 settlers founded a community that remained largely isolated for many generations. Today, a rare recessive allele that causes short limbs and extra fingers is far more common in the community than in the population the settlers came from.',
    question: 'Which process best explains the high frequency of the allele?',
    options: [
      'Bottleneck effect',
      'Founder effect',
      'Gene flow',
      'Directional selection',
    ],
    correctAnswer: 1,
    explanation:
      'When a small group starts a new population, its allele frequencies can differ by chance from the source population; that is the founder effect. A bottleneck also reduces variation by chance, but it occurs when an existing population is drastically reduced in place, not when a few individuals start a new one.',
    optionExplanations: [
      'A bottleneck also changes allele frequencies by chance, but it happens when an existing population is drastically reduced in place. Here a small group left to found a new community.',
      'When a small group starts a new population, its allele frequencies can differ from the source population by chance. A rare allele can then become common in the isolated community.',
      'Gene flow mixes populations and makes their allele frequencies more similar. This community stayed isolated, which is the opposite of gene flow.',
      'Nothing indicates that short limbs and extra fingers raise survival or reproduction. The allele\'s high frequency is better explained by chance in a small founding group than by selection.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Which of the following is the best example of directional selection?',
    options: [
      'An allele becoming common on an island after a storm kills birds at random',
      'Intermediate birth weights in humans having the highest infant survival',
      'Small and large beaks both increasing while medium beaks become rare',
      'Insecticide-resistant mosquitoes becoming common after years of spraying',
    ],
    correctAnswer: 3,
    explanation:
      'Directional selection favors one extreme phenotype, as when repeated spraying favors the most resistant mosquitoes. Favoring intermediate birth weights is stabilizing selection, and random deaths in a storm change allele frequencies by drift rather than selection.',
    optionExplanations: [
      'Random deaths in a storm change allele frequencies by genetic drift, not selection. The survivors were not favored for any trait.',
      'Favoring intermediate birth weights over both extremes is stabilizing selection. Directional selection favors one extreme.',
      'Favoring both extremes over the intermediate is disruptive selection. Directional selection shifts a population toward one extreme only.',
      'Directional selection favors one extreme phenotype. Repeated spraying favors the most resistant mosquitoes, shifting the population toward resistance.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Vestigial structures, such as the reduced pelvic bones of whales, are evidence for evolution because they',
    options: [
      'are leftover remnants of structures that functioned in ancestral species',
      'are early stages of structures that will become functional in later species',
      'formed when whale ancestors stopped using their legs and passed on the loss',
      'show that whales descended directly from a modern species of land mammal',
    ],
    correctAnswer: 0,
    explanation:
      'A reduced structure with little or no function is best explained as a remnant inherited from ancestors that used it, an example of descent with modification. Changes caused by disuse during an individual\'s life are not inherited, so the bones did not shrink because ancestors stopped using their legs.',
    optionExplanations: [
      'A reduced structure with little or no function is best explained as a remnant inherited from ancestors that used it. This is evidence of descent with modification.',
      'Evolution does not anticipate future needs. Structures do not develop in advance of being useful, so vestigial organs are not early versions of future ones.',
      'Changes caused by disuse during an individual\'s life are not inherited. The bones shrank over generations through heritable variation and selection, not through ancestors\' disuse.',
      'Vestigial structures point to common ancestry, not descent from a living species. Whales and modern land mammals share an ancestor; whales did not descend from a modern species.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'Two finch species that descended from a common ancestor live on the same island. One species has a deep, heavy beak and cracks large seeds; the other has a narrow beak and eats small seeds and insects.',
    question: 'Which evolutionary process is best illustrated by these species?',
    options: [
      'Convergent evolution, as unrelated species adapted to similar food sources',
      'Divergent evolution, as populations adapted to different food sources',
      'Genetic drift, as chance events fixed different beak alleles in each species',
      'Gene flow, as migrants carried new beak alleles between the two species',
    ],
    correctAnswer: 1,
    explanation:
      'Descendants of one ancestor that became specialized for different foods illustrate divergent evolution, the pattern behind adaptive radiation. Convergent evolution describes unrelated lineages becoming similar, which is the opposite of what the finches show.',
    optionExplanations: [
      'Convergent evolution describes unrelated lineages becoming similar. These finches share a common ancestor and became different, which is the opposite pattern.',
      'Descendants of a single ancestor that became specialized for different foods show divergent evolution. This is the pattern behind adaptive radiation.',
      'The beaks clearly match each species\' food, which points to adaptation by selection rather than chance. Nothing in the stimulus suggests random fixation of beak alleles.',
      'Gene flow between the species would make their beaks more alike, not more different. The two species differ sharply, which argues against substantial gene flow.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Horses and donkeys can mate and produce mules, which are healthy but almost always sterile. Which type of reproductive barrier keeps horses and donkeys separate species?',
    options: [
      'A prezygotic barrier, because horses and donkeys cannot mate with each other',
      'A geographic barrier, because horses and donkeys live on separate continents',
      'A postzygotic barrier, because the hybrid offspring form but are infertile',
      'A temporal barrier, because horses and donkeys breed in different seasons',
    ],
    correctAnswer: 2,
    explanation:
      'Horses and donkeys do mate and produce living hybrids, so the barrier acts after the zygote forms: mules are sterile, so genes cannot flow between the two species. The successful matings rule out a prezygotic barrier, including geographic and temporal isolation, which would prevent mating altogether.',
    optionExplanations: [
      'Horses and donkeys do mate and produce living mules, so the barrier does not act before fertilization. A prezygotic barrier would prevent the hybrid zygote from forming.',
      'Horses and donkeys clearly can meet and mate, since they produce mules. A geographic barrier, a type of prezygotic isolation, would prevent mating altogether.',
      'The barrier acts after the zygote forms. Mules are healthy but almost always sterile, so genes cannot pass from one species to the other through the hybrids.',
      'Breeding in different seasons would prevent mating, but horses and donkeys do mate successfully. The barrier is the sterility of the hybrid, not timing.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'The table compares the amino acid sequence of the protein cytochrome c in humans with that in four other species.\n\nSpecies: number of amino acid differences from humans\nChimpanzee: 0\nRhesus monkey: 1\nDog: 11\nYeast: 44',
    question: 'Which conclusion is best supported by the data?',
    options: [
      'Dogs evolved from rhesus monkeys, which differ from humans at fewer sites.',
      'Humans evolved from chimpanzees, which have an identical cytochrome c.',
      'Humans share a more recent common ancestor with dogs than with yeast.',
      'Yeast cytochrome c must be less functional than human cytochrome c.',
    ],
    correctAnswer: 2,
    explanation:
      'Fewer sequence differences indicate more recent common ancestry, so humans and dogs (11 differences) are more closely related than humans and yeast (44). Humans and chimpanzees share a recent common ancestor; identical sequences do not mean one species evolved from the other.',
    optionExplanations: [
      'Dogs did not evolve from rhesus monkeys; both are living species. Sequence differences indicate how recently species shared a common ancestor, not that one living species gave rise to another.',
      'Identical sequences show that humans and chimpanzees shared a very recent common ancestor. They do not mean that humans evolved from chimpanzees, which are a modern species.',
      'Fewer sequence differences indicate a more recent common ancestor. Humans differ from dogs at 11 sites and from yeast at 44, so humans are more closely related to dogs.',
      'Sequence differences show relatedness, not function. Yeast cytochrome c works in yeast cells, and the data give no information about how well it functions.',
    ],
  },

  /* ============================ UNIT 8 — ECOLOGY (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'Producers in a grassland store 15,000 kcal of energy per square meter per year in new biomass.',
    question: 'If about 10% of the energy at each trophic level is transferred to the next, about how much energy is available to secondary consumers?',
    options: [
      '1,500 kcal',
      '150 kcal',
      '15 kcal',
      '13,500 kcal',
    ],
    correctAnswer: 1,
    explanation:
      'Primary consumers receive about 10% of 15,000 kcal, or 1,500 kcal, and secondary consumers receive about 10% of that, or 150 kcal. Most of the rest is used in cellular respiration and lost as heat, which is why 1,500 kcal is the amount at the primary-consumer level, one step too soon.',
    optionExplanations: [
      '1,500 kcal is the energy available to primary consumers, one level above producers. Secondary consumers are one step further, so another 10% transfer applies.',
      'Primary consumers receive about 10% of 15,000 kcal, or 1,500 kcal. Secondary consumers receive about 10% of that, or 150 kcal.',
      '15 kcal is about the energy that would reach tertiary consumers, three transfers from the producers. Secondary consumers are only two transfers away.',
      '13,500 kcal is the roughly 90% of producer energy that is not passed on, most of it lost as heat in cellular respiration. It is not the energy available to any consumer level.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'A deer population has a maximum per capita growth rate of 0.4 per year and a carrying capacity of 800. The current population is 200. Logistic growth is modeled by $\\frac{dN}{dt} = r_{max}N\\frac{K - N}{K}$.',
    question: 'What is the population\'s current growth rate?',
    options: [
      '20 individuals per year',
      '60 individuals per year',
      '80 individuals per year',
      '240 individuals per year',
    ],
    correctAnswer: 1,
    explanation:
      'dN/dt = 0.4 × 200 × (800 − 200)/800 = 80 × 0.75 = 60 individuals per year. The value 80 ignores the carrying capacity and is the exponential rate, which overestimates growth once resources begin to limit the population.',
    optionExplanations: [
      '20 individuals per year does not follow from the equation. 0.4 × 200 = 80, and multiplying by (800 − 200)/800 = 0.75 gives 60.',
      'dN/dt = 0.4 × 200 × (800 − 200)/800 = 80 × 0.75 = 60 individuals per year. The population is well below K, so it still grows fairly quickly.',
      '80 individuals per year is $r_{max}N$ alone, the exponential rate. It ignores the (K − N)/K term, which reduces growth as the population approaches carrying capacity.',
      '240 individuals per year comes from multiplying 0.4 by the 600 individuals of remaining capacity rather than by the current population. The equation multiplies by N = 200.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'On a rocky shore, researchers removed a predatory sea star from experimental plots. Within a few years, mussels covered most of the rock, and the number of species in the plots fell from 15 to 8. Control plots with sea stars kept about 15 species.',
    question: 'Based on these results, the sea star is best described as',
    options: [
      'a keystone species',
      'a pioneer species',
      'an invasive species',
      'a primary producer',
    ],
    correctAnswer: 0,
    explanation:
      'Removing the sea star let mussels outcompete other species, sharply reducing diversity, so the predator has a large effect on community structure relative to its abundance. A pioneer species is the first to colonize bare ground during succession, which does not describe a predator maintaining diversity.',
    optionExplanations: [
      'Removing the sea star let mussels crowd out other species, and diversity fell from 15 to 8. A predator with such a large effect on community structure is a keystone species.',
      'A pioneer species is the first to colonize bare ground during succession. The sea star is a predator that maintains diversity, which does not describe a pioneer.',
      'Nothing in the stimulus says the sea star was introduced from elsewhere. Its presence maintains diversity, which is the opposite of the harm an invasive species usually causes.',
      'A sea star is a predator, not a producer, because it eats mussels and other animals. Producers make their own food by photosynthesis or chemosynthesis.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Which of the following relationships is an example of mutualism?',
    options: [
      'Barnacles that ride on a whale\'s skin and reach food without affecting the whale',
      'Tapeworms that absorb nutrients in a mammal\'s gut and weaken the host over time',
      'Mycorrhizal fungi that supply minerals to plant roots and receive sugars in return',
      'Lions that hunt antelope and keep the herd from overgrazing the grassland',
    ],
    correctAnswer: 2,
    explanation:
      'In mutualism both species benefit: the fungi gain sugars and the plant gains water and minerals. Barnacles on a whale benefit while the whale is unaffected, which is commensalism rather than mutualism.',
    optionExplanations: [
      'The barnacles benefit while the whale is unaffected, so this relationship is commensalism. Mutualism requires both species to benefit.',
      'The tapeworm benefits and the host is harmed, so this relationship is parasitism. In mutualism neither partner is harmed.',
      'In mutualism both species benefit. The fungi supply the plant with water and minerals and receive sugars from photosynthesis in return.',
      'Lions hunting antelope is predation: the lion benefits and the antelope that is eaten is harmed. Any indirect effect on the grassland does not make it mutualism.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'Over 40 years of warming springs, an oak species began leafing out about 10 days earlier. Caterpillars that feed on the new leaves now peak about 10 days earlier as well, but a songbird that feeds these caterpillars to its chicks lays its eggs only about 2 days earlier than it did 40 years ago.',
    question: 'Which consequence for the songbird population is best supported by these data?',
    options: [
      'Chicks hatch after the caterpillar peak, so fewer young survive to leave the nest.',
      'Chicks hatch before the caterpillar peak, so the parents can raise larger broods.',
      'Caterpillar numbers decline sharply, because the birds now eat more of them each spring.',
      'Chicks hatch eight days earlier in the next generation, as the parents learn the new timing.',
    ],
    correctAnswer: 0,
    explanation:
      'The caterpillar peak moved about 8 days further ahead than the birds\' laying date, so chicks now hatch after their main food has peaked, which lowers chick survival. Timing of egg-laying is not reset within a single generation; any change depends on heritable variation and selection over many generations.',
    optionExplanations: [
      'The caterpillar peak moved about 8 days further ahead than the birds\' laying date. Chicks now hatch after their main food has peaked, which lowers chick survival.',
      'This reverses the timing. The caterpillar peak shifted 10 days earlier but laying shifted only 2 days, so chicks hatch after the peak, not before it.',
      'The data say nothing about caterpillar numbers declining. Because the birds are now mistimed, they would likely eat fewer caterpillars at the peak, not more.',
      'Egg-laying timing is not reset by learning within one generation. Any lasting change depends on heritable variation and selection over many generations.',
    ],
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'Simpson\'s diversity index is D = 1 − Σ(n/N)², where n is the number of individuals of one species and N is the total number of individuals.\n\nCommunity A: 25, 25, 25, and 25 individuals of four species\nCommunity B: 85, 5, 5, and 5 individuals of four species',
    question: 'Which statement is correct?',
    options: [
      'The two communities have equal diversity, because each one contains four species.',
      'Community B has the higher index, 0.73, because one species makes up most of the total.',
      'Community A has the higher index, 0.25, because its four species are equally abundant.',
      'Community A has the higher index, 0.75, because individuals are spread evenly among species.',
    ],
    correctAnswer: 3,
    explanation:
      'For Community A, Σ(n/N)² = 4(0.25)² = 0.25, so D = 0.75; for Community B, Σ(n/N)² = 0.7225 + 3(0.0025) = 0.73, so D = 0.27. Both have four species, but A\'s greater evenness gives it higher diversity; 0.73 is the sum before subtracting from 1.',
    optionExplanations: [
      'Simpson\'s index depends on how evenly individuals are spread among species, not only on the number of species. Both have four species, but they differ greatly in evenness.',
      '0.73 is the value of Σ(n/N)² for Community B before it is subtracted from 1, so D = 0.27. A community dominated by one species has lower diversity, not higher.',
      '0.25 is the value of Σ(n/N)² for Community A before it is subtracted from 1. Community A does have the higher index, but D = 1 − 0.25 = 0.75.',
      'For Community A, Σ(n/N)² = 4(0.25)² = 0.25, so D = 0.75; for Community B, D = 1 − 0.73 = 0.27. A\'s even distribution of individuals gives it higher diversity.',
    ],
  },
]
