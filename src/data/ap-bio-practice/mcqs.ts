import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology — 60 stimulus-based MCQs.
 * Distribution mirrors official CB exam weighting:
 *   U1 Chemistry of Life                  (6)
 *   U2 Cell Structure & Function          (7)
 *   U3 Cellular Energetics                (9)
 *   U4 Cell Communication & Cell Cycle    (8)
 *   U5 Heredity                           (6)
 *   U6 Gene Expression & Regulation       (9)
 *   U7 Natural Selection                  (10)
 *   U8 Ecology                            (5)
 */

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — CHEMISTRY OF LIFE (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'Which property of water is MOST directly responsible for its ability to moderate temperature in coastal ecosystems?',
    options: [
      'Its low surface tension.',
      'Its high specific heat capacity due to extensive hydrogen bonding.',
      'Its non-polar covalent bonds.',
      'Its lower density as a liquid than as a solid.',
    ],
    correctAnswer: 1,
    explanation:
      'Water\'s high specific heat — a consequence of breaking many hydrogen bonds before kinetic energy rises — allows large bodies of water to absorb/release significant heat with minimal temperature change.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus:
      'A researcher hydrolyzes an unknown biological macromolecule and obtains a mixture of amino acids.',
    question: 'The unknown macromolecule was most likely:',
    options: [
      'A polysaccharide such as glycogen.',
      'A nucleic acid such as DNA.',
      'A protein.',
      'A triglyceride.',
    ],
    correctAnswer: 2,
    explanation:
      'Proteins are polymers of amino acids; hydrolysis releases the monomers. Polysaccharides yield monosaccharides, nucleic acids yield nucleotides, and triglycerides yield glycerol and fatty acids.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'A peptide bond between two amino acids forms between:',
    options: [
      'The R group of one amino acid and the alpha-carbon of another.',
      'The amino (–$NH_{2}$) group of one amino acid and the carboxyl (–COOH) group of another, releasing water.',
      'Two R groups via disulfide bonding.',
      'Two phosphate groups via condensation.',
    ],
    correctAnswer: 1,
    explanation:
      'A peptide bond forms by dehydration synthesis between the amino group of one amino acid and the carboxyl group of the next, releasing $H_{2}O$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'The directionality of a DNA strand (5\' to 3\') is determined by the:',
    options: [
      'Orientation of nitrogenous bases relative to the sugar.',
      'Position of the phosphate group on the deoxyribose sugar (5\' phosphate, 3\' hydroxyl).',
      'Pattern of hydrogen bonding between complementary bases.',
      'Identity of the purine bases relative to pyrimidines.',
    ],
    correctAnswer: 1,
    explanation:
      'The 5\' end has a free phosphate on the 5\' carbon of deoxyribose; the 3\' end has a free hydroxyl on the 3\' carbon. New nucleotides are always added to the 3\' end.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    stimulus:
      'A double-stranded DNA molecule is found to be 22% adenine.',
    question: 'What percentage of the molecule is guanine?',
    options: [
      '22%',
      '28%',
      '44%',
      '78%',
    ],
    correctAnswer: 1,
    explanation:
      'By Chargaff\'s rule: A = T = 22%, so A + T = 44%. The remaining 56% is split equally between G and C, so G = 28%.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-chemistry-of-life',
    question: 'The tertiary structure of a globular protein is BEST described as:',
    options: [
      'The linear sequence of amino acids in the polypeptide.',
      'Local folding patterns (alpha helices and beta sheets) stabilized by hydrogen bonds in the backbone.',
      'The overall three-dimensional folding of a single polypeptide, stabilized by interactions among R groups.',
      'The interaction of two or more separate polypeptide subunits.',
    ],
    correctAnswer: 2,
    explanation:
      'Tertiary structure = 3D fold of one polypeptide, stabilized by R-group interactions (H bonds, ionic bonds, disulfide bridges, hydrophobic interactions). Secondary = α/β; quaternary = multiple subunits.',
  },

  /* ============================ UNIT 2 — CELL STRUCTURE & FUNCTION (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'Which of the following best explains why small cells are generally more efficient at exchanging materials with their environment than large cells?',
    options: [
      'Small cells contain more mitochondria per unit volume.',
      'Small cells have a higher surface-area-to-volume ratio, increasing membrane area relative to internal demand.',
      'Small cells have larger nuclei relative to their cytoplasm.',
      'Small cells lack a cell membrane.',
    ],
    correctAnswer: 1,
    explanation:
      'As a cell grows, volume increases faster than surface area. A high surface-area-to-volume ratio in small cells allows efficient diffusion of nutrients, gases, and wastes.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'A cell that produces and secretes large quantities of digestive enzymes would be expected to have unusually well-developed:',
    options: [
      'Smooth endoplasmic reticulum and lysosomes.',
      'Rough endoplasmic reticulum and Golgi apparatus.',
      'Mitochondria and chloroplasts.',
      'Peroxisomes and nucleoli.',
    ],
    correctAnswer: 1,
    explanation:
      'Secreted proteins are synthesized on ribosomes of rough ER, modified and packaged in the Golgi, then released by exocytosis.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'A red blood cell (~0.9% NaCl interior) is placed into a solution of 5% NaCl.',
    question: 'Which of the following best describes what happens to the cell?',
    options: [
      'Water moves into the cell, causing it to lyse (burst).',
      'Water moves out of the cell, causing it to shrivel (crenate).',
      'NaCl diffuses into the cell until concentrations equalize.',
      'Active transport pumps remove all water from the cell.',
    ],
    correctAnswer: 1,
    explanation:
      'The 5% NaCl solution is hypertonic to the cell. Water moves out of the cell by osmosis, causing crenation.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'Which of the following is a key piece of evidence supporting the endosymbiotic origin of mitochondria and chloroplasts?',
    options: [
      'Both organelles contain their own circular DNA and ribosomes that resemble those of bacteria.',
      'Both organelles use only one membrane to enclose their contents.',
      'Both organelles divide only when the cell undergoes mitosis.',
      'Both organelles are found in all eukaryotic cells.',
    ],
    correctAnswer: 0,
    explanation:
      'Mitochondria and chloroplasts have circular DNA, 70S (bacterial-type) ribosomes, double membranes, and binary-fission-like division — strong evidence for an endosymbiotic origin from prokaryotic ancestors.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'Active transport across a cell membrane differs from facilitated diffusion in that active transport:',
    options: [
      'Always moves substances down their concentration gradients.',
      'Requires energy input (typically from ATP hydrolysis) to move substances against their concentration gradients.',
      'Does not require any membrane proteins.',
      'Only occurs through the lipid bilayer, not through proteins.',
    ],
    correctAnswer: 1,
    explanation:
      'Active transport uses energy (commonly ATP) to move substances against their gradients via membrane proteins (e.g., $Na^{+}/K^{+}$ pump). Facilitated diffusion is passive and goes WITH the gradient.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    question: 'Which structural feature of the phospholipid bilayer accounts for its selective permeability to small nonpolar molecules but not to ions?',
    options: [
      'The presence of cholesterol in animal membranes.',
      'The hydrophobic interior formed by fatty-acid tails, which excludes charged or large polar molecules.',
      'Phosphate head groups that actively repel ions.',
      'A glycoprotein coating that filters molecules by size.',
    ],
    correctAnswer: 1,
    explanation:
      'The hydrophobic core of the bilayer freely admits small nonpolar molecules ($O_{2}$, $CO_{2}$) but blocks ions and large polar molecules, which require channel or transporter proteins.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-cell-structure',
    stimulus:
      'A cell with a water potential (Ψ) of −0.3 MPa is placed in a beaker of solution with Ψ = −0.1 MPa.',
    question: 'Which of the following will most likely occur?',
    options: [
      'Net movement of water out of the cell into the beaker.',
      'Net movement of water into the cell from the beaker.',
      'No net movement of water; system is at equilibrium.',
      'Solutes will move from the beaker into the cell to equalize Ψ.',
    ],
    correctAnswer: 1,
    explanation:
      'Water flows from regions of HIGHER (less negative) water potential to regions of LOWER (more negative) water potential. Beaker (−0.1) > cell (−0.3), so water flows INTO the cell.',
  },

  /* ============================ UNIT 3 — CELLULAR ENERGETICS (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In aerobic respiration, the largest amount of ATP is produced during which stage?',
    options: [
      'Glycolysis.',
      'Pyruvate oxidation.',
      'The Krebs (citric acid) cycle.',
      'Oxidative phosphorylation (ETC + chemiosmosis).',
    ],
    correctAnswer: 3,
    explanation:
      'Glycolysis and the Krebs cycle each produce only a few ATP directly; oxidative phosphorylation generates ~26–28 ATP via the proton gradient that drives ATP synthase.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'The function of NADH and $FADH_{2}$ in cellular respiration is to:',
    options: [
      'Serve as substrates for ATP synthase.',
      'Carry high-energy electrons to the electron transport chain.',
      'Bind oxygen and form water.',
      'Phosphorylate glucose for entry into glycolysis.',
    ],
    correctAnswer: 1,
    explanation:
      'NADH and $FADH_{2}$ are electron carriers. They donate electrons to the ETC, where the energy released pumps protons and ultimately powers ATP synthesis.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'A scientist treats isolated mitochondria with a chemical that makes the inner mitochondrial membrane freely permeable to protons.',
    question: 'Which of the following effects would most likely be observed?',
    options: [
      'ATP synthesis would increase because protons can move freely.',
      'ATP synthesis would decrease because the proton gradient required to drive ATP synthase is dissipated.',
      'Glycolysis would stop in the cytoplasm.',
      'Oxygen consumption would stop entirely.',
    ],
    correctAnswer: 1,
    explanation:
      'Chemiosmosis depends on a proton gradient across the inner mitochondrial membrane. Uncouplers (like DNP) make the membrane proton-permeable, collapsing the gradient and dramatically reducing ATP synthesis. Heat is released instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In photosynthesis, the role of light in the light-dependent reactions is to:',
    options: [
      'Power the Calvin cycle by directly providing energy to RuBisCO.',
      'Excite electrons in chlorophyll, which are then used to generate ATP and NADPH.',
      'Split $CO_{2}$ into carbon and oxygen.',
      'Activate ATP synthase by directly binding to it.',
    ],
    correctAnswer: 1,
    explanation:
      'Light excites electrons in chlorophyll molecules of photosystems II and I, driving the ETC that generates ATP (chemiosmosis) and NADPH for the Calvin cycle.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'Which of the following best summarizes the inputs and outputs of the Calvin cycle (per molecule of glucose synthesized)?',
    options: [
      'Inputs: light, water, $CO_{2}$; Outputs: $O_{2}$, ATP, NADPH.',
      'Inputs: 6 $CO_{2}$, 18 ATP, 12 NADPH; Outputs: 1 G3P (× 2 → glucose), 18 ADP, 12 NADP$ {}^{+}$.',
      'Inputs: oxygen, glucose; Outputs: $CO_{2}$, water, ATP.',
      'Inputs: chlorophyll, water; Outputs: light, oxygen.',
    ],
    correctAnswer: 1,
    explanation:
      'The Calvin cycle (light-independent) uses $CO_{2}$, ATP, and NADPH from the light reactions to fix carbon into G3P (precursor to glucose), regenerating ADP and NADP$ {}^{+}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'The water molecules split during the light-dependent reactions of photosynthesis serve primarily to:',
    options: [
      'Provide the carbon backbone for glucose.',
      'Replace electrons lost from chlorophyll in photosystem II and release $O_{2}$ as a byproduct.',
      'Hydrate the thylakoid membranes.',
      'Provide hydrogen for direct ATP synthesis.',
    ],
    correctAnswer: 1,
    explanation:
      'Photolysis of water at the oxygen-evolving complex of PSII replaces electrons lost from excited chlorophyll, releasing $O_{2}$ as a byproduct and contributing protons to the thylakoid lumen gradient.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'In the absence of oxygen, many cells continue to produce ATP through fermentation. The primary purpose of fermentation is to:',
    options: [
      'Generate large quantities of ATP through the Krebs cycle.',
      'Regenerate $NAD^{+}$ so glycolysis can continue producing a small amount of ATP.',
      'Produce $CO_{2}$ for use in the Calvin cycle.',
      'Pump protons across the inner mitochondrial membrane.',
    ],
    correctAnswer: 1,
    explanation:
      'Fermentation regenerates $NAD^{+}$ from NADH (by reducing pyruvate to lactate or ethanol + $CO_{2}$), allowing glycolysis to continue producing 2 ATP per glucose anaerobically.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    question: 'Enzymes increase the rate of biochemical reactions by:',
    options: [
      'Increasing the free energy of the products.',
      'Lowering the activation energy of the reaction.',
      'Adding heat to the reactants.',
      'Changing the equilibrium position of the reaction.',
    ],
    correctAnswer: 1,
    explanation:
      'Enzymes lower the activation energy (Ea), increasing reaction rate. They do NOT change ΔG or the equilibrium position — only the path to it.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cellular-energetics',
    stimulus:
      'A noncompetitive inhibitor binds to an allosteric site on an enzyme.',
    question: 'Which of the following best describes the effect of this inhibitor on enzyme activity?',
    options: [
      'Increasing substrate concentration will fully overcome the inhibition.',
      'The inhibitor changes the enzyme\'s shape so the active site no longer binds substrate as effectively, regardless of substrate concentration.',
      'The inhibitor competes with the substrate for the active site.',
      'The inhibitor permanently destroys the enzyme.',
    ],
    correctAnswer: 1,
    explanation:
      'Noncompetitive inhibitors bind allosteric sites and alter enzyme shape, lowering Vmax. Increasing substrate cannot overcome it (unlike competitive inhibition).',
  },

  /* ============================ UNIT 4 — CELL COMM & CELL CYCLE (8) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Which of the following correctly orders the typical sequence of cell signaling?',
    options: [
      'Response → Reception → Transduction.',
      'Reception → Transduction → Response.',
      'Transduction → Reception → Response.',
      'Reception → Response → Transduction.',
    ],
    correctAnswer: 1,
    explanation:
      'Cell signaling: Reception (signal binds receptor) → Transduction (signal relayed/amplified through cascade) → Response (cellular change).',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'A signaling molecule that cannot cross the plasma membrane (such as the peptide hormone insulin) most likely binds to:',
    options: [
      'An intracellular receptor in the nucleus.',
      'A receptor protein on the cell surface (e.g., a receptor tyrosine kinase or G-protein-coupled receptor).',
      'DNA in the cytoplasm.',
      'A mitochondrial membrane.',
    ],
    correctAnswer: 1,
    explanation:
      'Hydrophilic signals (like peptide hormones) cannot cross the membrane and bind cell-surface receptors. Hydrophobic signals (steroids) cross the membrane and bind intracellular receptors.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'A cell with a faulty p53 tumor suppressor protein is most likely to:',
    options: [
      'Stop dividing entirely.',
      'Undergo apoptosis at higher than normal rates.',
      'Continue through the cell cycle even with damaged DNA, increasing the risk of cancer.',
      'Produce only somatic mutations and no germline mutations.',
    ],
    correctAnswer: 2,
    explanation:
      'p53 halts the cell cycle at the G1 checkpoint when DNA is damaged and triggers repair or apoptosis. Loss of p53 function allows damaged cells to divide, a hallmark of many cancers.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    stimulus:
      'In a controlled experiment, scientists block cyclin synthesis in dividing cells.',
    question: 'Which of the following is the most likely consequence?',
    options: [
      'Cells will divide faster because cyclins inhibit the cell cycle.',
      'Cells will arrest because cyclin-CDK complexes are needed to drive progression past cell cycle checkpoints.',
      'Cells will skip the S phase but otherwise divide normally.',
      'Cells will undergo meiosis instead of mitosis.',
    ],
    correctAnswer: 1,
    explanation:
      'Cyclins activate cyclin-dependent kinases (CDKs) that phosphorylate proteins driving the cell cycle past checkpoints. Without cyclin, CDKs are inactive and the cell arrests.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'The G1 checkpoint primarily checks for:',
    options: [
      'Successful chromosome attachment to the spindle.',
      'Cell size, nutrient availability, growth signals, and DNA integrity before committing to S phase.',
      'Completion of cytokinesis.',
      'Proper homolog pairing during meiosis.',
    ],
    correctAnswer: 1,
    explanation:
      'G1 (restriction) checkpoint assesses readiness to replicate DNA: cell size, nutrients, growth factors, and absence of DNA damage.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'During mitosis, sister chromatids separate during which phase?',
    options: [
      'Prophase.',
      'Metaphase.',
      'Anaphase.',
      'Telophase.',
    ],
    correctAnswer: 2,
    explanation:
      'Anaphase: cohesin holding sister chromatids together is cleaved and the chromatids are pulled to opposite poles by shortening kinetochore microtubules.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'A signal-transduction pathway often includes a "phosphorylation cascade" because phosphorylation cascades:',
    options: [
      'Prevent the original signal from ever being amplified.',
      'Amplify the signal — one receptor activation can phosphorylate many downstream proteins, producing a large response from a small signal.',
      'Reduce the cell\'s sensitivity to extracellular signals.',
      'Permanently change DNA sequence.',
    ],
    correctAnswer: 1,
    explanation:
      'Each kinase in the cascade can phosphorylate many substrate molecules, geometrically amplifying the original signal — a key reason a few hormone molecules can produce a major cellular response.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-cell-communication-cell-cycle',
    question: 'Programmed cell death (apoptosis) is important for normal development because it:',
    options: [
      'Allows random destruction of healthy tissues.',
      'Removes unneeded or damaged cells (e.g., cells between developing fingers in mammalian embryos), shaping tissues and eliminating threats.',
      'Always indicates a viral infection.',
      'Triggers uncontrolled cell division.',
    ],
    correctAnswer: 1,
    explanation:
      'Apoptosis sculpts tissues during development (e.g., webbing between digits), removes damaged or virus-infected cells, and maintains tissue homeostasis.',
  },

  /* ============================ UNIT 5 — HEREDITY (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'In pea plants, purple flowers (P) are dominant to white flowers (p). A heterozygous purple-flowered plant (Pp) is crossed with a white-flowered plant (pp).',
    question: 'What proportion of the offspring is expected to have white flowers?',
    options: [
      '0% (none)',
      '25%',
      '50%',
      '100%',
    ],
    correctAnswer: 2,
    explanation:
      'Cross Pp × pp produces ½ Pp (purple) and ½ pp (white). 50% white-flowered offspring.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'A pedigree shows a trait that appears in every generation, affects males and females in roughly equal numbers, and an affected child always has at least one affected parent.',
    question: 'What is the most likely inheritance pattern?',
    options: [
      'Autosomal recessive.',
      'Autosomal dominant.',
      'X-linked recessive.',
      'Mitochondrial.',
    ],
    correctAnswer: 1,
    explanation:
      'Autosomal dominant traits appear every generation, affect both sexes, and require at least one affected parent to produce an affected offspring.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Independent assortment of alleles during meiosis occurs primarily during:',
    options: [
      'Crossing over in prophase I.',
      'Random alignment of homologous chromosome pairs at the metaphase plate during metaphase I.',
      'Sister chromatid separation in anaphase II.',
      'Cytokinesis at the end of telophase II.',
    ],
    correctAnswer: 1,
    explanation:
      'Independent assortment results from the random orientation of each homologous pair at the metaphase I plate, producing $2^{n}$ possible combinations of maternal/paternal chromosomes.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'A man with hemophilia (X-linked recessive) marries a woman who is a carrier of the trait.',
    question: 'What is the probability that any given DAUGHTER will have hemophilia?',
    options: [
      '0%',
      '25%',
      '50%',
      '100%',
    ],
    correctAnswer: 2,
    explanation:
      'Father is $X^{h}$ Y. Mother is $X^{H}$ $X^{h}$. Daughters inherit $X^{h}$ from father and either $X^{H}$ or $X^{h}$ from mother → ½ are $X^{H}$ $X^{h}$ (carriers) and ½ are $X^{h}$ $X^{h}$ (affected). 50% affected.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    question: 'Crossing over between non-sister chromatids during prophase I of meiosis primarily contributes to genetic diversity by:',
    options: [
      'Producing identical copies of parental chromosomes.',
      'Recombining alleles between maternal and paternal homologs, creating new chromosomal combinations.',
      'Increasing the chromosome number in the gametes.',
      'Repairing all DNA mutations.',
    ],
    correctAnswer: 1,
    explanation:
      'Crossing over swaps segments between maternal and paternal homologs, generating recombinant chromatids with novel allele combinations — a major source of genetic variation.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-heredity',
    stimulus:
      'In a cross between two plants heterozygous for two unlinked genes (AaBb × AaBb), offspring are produced.',
    question: 'What fraction of offspring is expected to display BOTH dominant phenotypes?',
    options: [
      '1/16',
      '3/16',
      '6/16',
      '9/16',
    ],
    correctAnswer: 3,
    explanation:
      'Dihybrid cross AaBb × AaBb yields 9:3:3:1 phenotypic ratio. 9/16 of offspring show both dominant traits.',
  },

  /* ============================ UNIT 6 — GENE EXPRESSION & REGULATION (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'During DNA replication, the role of DNA polymerase is to:',
    options: [
      'Unwind the DNA double helix.',
      'Add new nucleotides to the 3\' end of a growing strand, using the parent strand as a template.',
      'Splice out introns from pre-mRNA.',
      'Translate codons into amino acids.',
    ],
    correctAnswer: 1,
    explanation:
      'DNA polymerase synthesizes new DNA only in the 5\'→3\' direction, adding nucleotides to the 3\' OH of the growing strand. Helicase unwinds; spliceosome edits pre-mRNA; ribosomes translate.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which of the following correctly describes the LAGGING strand of DNA during replication?',
    options: [
      'Synthesized continuously in the 5\'→3\' direction toward the replication fork.',
      'Synthesized discontinuously as Okazaki fragments, which are later joined by DNA ligase.',
      'Replicated by RNA polymerase only.',
      'Not replicated until the next cell cycle.',
    ],
    correctAnswer: 1,
    explanation:
      'Because DNA polymerase only synthesizes 5\'→3\', the lagging strand (oriented opposite to fork movement) is built as short Okazaki fragments later sealed by DNA ligase.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which of the following enzymes is most directly responsible for synthesizing mRNA from a DNA template during transcription?',
    options: [
      'DNA polymerase.',
      'RNA polymerase.',
      'DNA ligase.',
      'Reverse transcriptase.',
    ],
    correctAnswer: 1,
    explanation:
      'RNA polymerase reads the DNA template (3\'→5\') and synthesizes a complementary mRNA strand in the 5\'→3\' direction.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'In eukaryotes, pre-mRNA undergoes several modifications before translation, including 5\' capping, 3\' polyadenylation, and splicing.',
    question: 'What is the function of the 5\' cap and the poly-A tail?',
    options: [
      'They specify the codons for amino acids.',
      'They protect the mRNA from degradation and aid in ribosome binding for translation.',
      'They serve as primers for DNA replication.',
      'They form the active sites of ribosomes.',
    ],
    correctAnswer: 1,
    explanation:
      'The 5\' cap and poly-A tail stabilize mRNA against nuclease degradation and assist export from the nucleus and ribosome binding for translation.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    stimulus:
      'A point mutation changes a single nucleotide in a gene, transforming the codon UAC (tyrosine) into UAA (stop codon).',
    question: 'This type of mutation is best classified as:',
    options: [
      'A silent mutation.',
      'A missense mutation.',
      'A nonsense mutation.',
      'A frameshift mutation.',
    ],
    correctAnswer: 2,
    explanation:
      'A nonsense mutation converts an amino-acid codon into a STOP codon, prematurely terminating translation. Silent: no AA change; missense: different AA; frameshift: insertion/deletion.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'In the lac operon of E. coli, when lactose is ABSENT and glucose is present, what is the state of the operon?',
    options: [
      'The repressor is bound to the operator and transcription is OFF.',
      'The repressor is removed from the operator and transcription is ON.',
      'CAP is bound and transcription is fully active.',
      'The operon is permanently deleted.',
    ],
    correctAnswer: 0,
    explanation:
      'Without lactose, the lac repressor binds the operator, blocking RNA polymerase. Transcription of the lac genes is OFF.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which of the following best describes a primary purpose of differential gene expression in multicellular eukaryotes?',
    options: [
      'It allows different cell types to arise from a common genome by transcribing different sets of genes.',
      'It increases mutation rates in specific tissues.',
      'It removes introns from DNA permanently.',
      'It eliminates noncoding regions from the genome.',
    ],
    correctAnswer: 0,
    explanation:
      'All somatic cells share the same DNA, but selectively expressing different gene sets produces specialized cell types (neurons, muscle, etc.).',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'A retrovirus such as HIV uses reverse transcriptase to:',
    options: [
      'Convert its RNA genome into DNA, which can then integrate into the host genome.',
      'Translate viral RNA directly into proteins.',
      'Splice host introns out of mRNA.',
      'Repair damaged host DNA.',
    ],
    correctAnswer: 0,
    explanation:
      'Reverse transcriptase synthesizes DNA from an RNA template, allowing the viral genome to integrate into the host chromosome as a provirus.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-gene-expression-regulation',
    question: 'Which of the following best explains the role of transcription factors in eukaryotic gene regulation?',
    options: [
      'They bind to specific DNA sequences (promoters, enhancers) and either promote or inhibit RNA polymerase recruitment.',
      'They translate mRNA into protein.',
      'They unwind the DNA double helix during replication.',
      'They cleave peptide bonds during protein degradation.',
    ],
    correctAnswer: 0,
    explanation:
      'Transcription factors bind regulatory DNA sequences and modulate the assembly of the transcription initiation complex, controlling whether and how often a gene is transcribed.',
  },

  /* ============================ UNIT 7 — NATURAL SELECTION (10) ============================ */
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Which of the following is REQUIRED for natural selection to act on a population?',
    options: [
      'Heritable variation in a trait that affects fitness.',
      'A constant environment.',
      'Sexual reproduction.',
      'Equal allele frequencies between sexes.',
    ],
    correctAnswer: 0,
    explanation:
      'Natural selection requires heritable variation among individuals that affects survival or reproduction (fitness). The other options are not strictly required.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'In a population in Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.4.',
    question: 'What is the expected frequency of HETEROZYGOUS individuals in the population?',
    options: [
      '0.16',
      '0.24',
      '0.36',
      '0.48',
    ],
    correctAnswer: 3,
    explanation:
      'p = 1 − 0.4 = 0.6. Heterozygous frequency = 2pq = 2(0.6)(0.4) = 0.48.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Which of the following best describes GENETIC DRIFT?',
    options: [
      'A change in allele frequencies caused by differential reproductive success of phenotypes.',
      'Random fluctuation in allele frequencies, especially impactful in small populations.',
      'The directed change of allele frequencies toward higher fitness.',
      'Movement of alleles between populations through migration.',
    ],
    correctAnswer: 1,
    explanation:
      'Genetic drift = random changes in allele frequency due to chance sampling effects. It has the largest effect in small populations and can cause loss of alleles unrelated to fitness.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'A "founder effect" occurs when:',
    options: [
      'A small group separates from a larger population and establishes a new population whose allele frequencies differ from the original.',
      'A natural disaster reduces the size of a population dramatically.',
      'Two populations exchange migrants and merge their gene pools.',
      'Mutations occur at exceptionally high rates.',
    ],
    correctAnswer: 0,
    explanation:
      'Founder effect: a few individuals colonize a new area, carrying only a non-representative subset of the parent population\'s alleles. (Bottleneck = size reduction in place; gene flow = migration.)',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Which of the following is the BEST example of DIRECTIONAL selection?',
    options: [
      'Antibiotic-resistant bacteria becoming more common in a population repeatedly exposed to antibiotics.',
      'Average human birth weights being favored over very small or very large birth weights.',
      'Two distinct color morphs of a species becoming more common at the expense of intermediate forms.',
      'Random changes in beak size in a small island population.',
    ],
    correctAnswer: 0,
    explanation:
      'Directional selection shifts the population toward one extreme (e.g., highly resistant bacteria). Stabilizing favors intermediates (B); disruptive favors extremes (C); D is genetic drift.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Vestigial structures (such as pelvic bones in whales) are considered evidence for evolution because they:',
    options: [
      'Demonstrate that organisms always become more complex over time.',
      'Suggest descent with modification from ancestors that used these structures functionally.',
      'Indicate that whales evolved from modern land mammals.',
      'Show that mutations always reduce structure size.',
    ],
    correctAnswer: 1,
    explanation:
      'Vestigial structures are remnants of features functional in an ancestor — strong evidence for descent with modification.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    stimulus:
      'Two species of finches living on the same island feed on different sizes of seeds and have different beak shapes.',
    question: 'Which evolutionary process is most directly illustrated by this scenario?',
    options: [
      'Convergent evolution.',
      'Resource partitioning driven by adaptive radiation.',
      'Genetic drift in small populations.',
      'Allopatric speciation.',
    ],
    correctAnswer: 1,
    explanation:
      'Adaptive radiation produces multiple species from a common ancestor that exploit different resources, reducing competition (resource partitioning). Galápagos finches are the classic example.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'The biological species concept defines a species primarily by:',
    options: [
      'Identical morphology among individuals.',
      'The ability of members to interbreed and produce viable, fertile offspring.',
      'Sharing the same ecological niche.',
      'Living within the same geographic range.',
    ],
    correctAnswer: 1,
    explanation:
      'The biological species concept (Mayr): species are groups of populations that interbreed (or could interbreed) to produce viable, fertile offspring and are reproductively isolated from other such groups.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'The "molecular clock" hypothesis assumes that:',
    options: [
      'All mutations occur at exactly the same rate in all genes.',
      'Neutral mutations accumulate at a relatively constant rate over time, so genetic differences can estimate time since divergence.',
      'DNA never mutates without natural selection.',
      'Mitochondrial DNA never mutates.',
    ],
    correctAnswer: 1,
    explanation:
      'The molecular clock assumes neutral mutations accumulate at a roughly constant rate. The number of differences between two species\' homologous sequences can estimate when their lineages diverged.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-natural-selection',
    question: 'Endosymbiotic theory proposes that mitochondria and chloroplasts originated from:',
    options: [
      'Ancient viruses that integrated into eukaryotic cells.',
      'Free-living prokaryotes engulfed by larger cells, which then established a mutualistic relationship.',
      'Vesicles pinched off from the eukaryotic plasma membrane.',
      'Random aggregations of phospholipids.',
    ],
    correctAnswer: 1,
    explanation:
      'Endosymbiotic theory: ancestral eukaryotes engulfed aerobic prokaryotes (→ mitochondria) and later photosynthetic prokaryotes (→ chloroplasts), which evolved into present-day organelles.',
  },

  /* ============================ UNIT 8 — ECOLOGY (5) ============================ */
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'In a typical food chain, only about 10% of the energy at one trophic level is transferred to the next. The other ~90% is primarily:',
    options: [
      'Stored in the bodies of consumers indefinitely.',
      'Lost as heat through metabolic processes (respiration) at each level.',
      'Used to synthesize new DNA in the next trophic level.',
      'Returned directly to producers.',
    ],
    correctAnswer: 1,
    explanation:
      'At each trophic level, most energy is used for metabolism (respiration) and lost as heat. Only ~10% is incorporated into biomass available to the next level — the basis of the energy pyramid.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'A population of rabbits experiences exponential growth in an environment with seemingly unlimited resources, then encounters its carrying capacity (K). Population growth slows and eventually stabilizes near K.',
    question: 'This pattern is best described by which growth model?',
    options: [
      'Exponential growth (J-shaped curve).',
      'Logistic growth (S-shaped curve).',
      'Linear growth.',
      'Constant decline.',
    ],
    correctAnswer: 1,
    explanation:
      'Logistic growth: rapid (near-exponential) growth at low density slows as density approaches K, producing an S-shaped (sigmoidal) curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'A species that has a large effect on its community relative to its abundance — such that its removal would dramatically alter the ecosystem — is best described as a:',
    options: [
      'Pioneer species.',
      'Keystone species.',
      'Invasive species.',
      'Climax species.',
    ],
    correctAnswer: 1,
    explanation:
      'Keystone species (e.g., sea otters, sea stars) exert disproportionately large effects on community structure and function. Their removal triggers dramatic change.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    stimulus:
      'A symbiotic relationship in which both species benefit is termed:',
    question: 'Which of the following relationships is an example of mutualism?',
    options: [
      'A tapeworm living inside a mammal\'s intestines.',
      'Mycorrhizal fungi exchanging nutrients with plant roots — fungi receive sugars; plants receive enhanced water and mineral uptake.',
      'A barnacle attached to a whale\'s skin without affecting the whale.',
      'A lion preying on an antelope.',
    ],
    correctAnswer: 1,
    explanation:
      'Mutualism: both species benefit (mycorrhizae). Parasitism: A. Commensalism: C. Predation: D.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-ecology',
    question: 'Which of the following ecological responses is most likely to occur as Earth\'s mean global temperature continues to rise?',
    options: [
      'Tropical species ranges will contract toward the equator.',
      'Many species\' ranges will shift toward higher latitudes and higher elevations, and the timing of seasonal events (phenology) will shift.',
      'Photosynthesis will universally increase across all ecosystems.',
      'Coral reefs will become more abundant due to warmer waters.',
    ],
    correctAnswer: 1,
    explanation:
      'Documented climate-change responses: poleward and upslope range shifts, earlier spring phenology, mismatch between species and resources, and coral bleaching from thermal stress.',
  },
]
