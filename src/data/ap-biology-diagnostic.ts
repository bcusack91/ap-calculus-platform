/**
 * AP Biology Diagnostic Test Generator
 *
 * Produces two alternate forms (A and B) each with ~33 questions spanning
 * all 8 AP Biology units.  After each test, weak domains are mapped to
 * 3-5 specific topic slugs the student should review.
 */

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface APBioDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

interface APBioPoolQuestion extends APBioDiagnosticQuestion {
  formSet: 'A' | 'B' | 'both'
}

export interface APBioDomain {
  id: string
  name: string
  /** Topic slugs that map to this domain (used for remediation links) */
  topicSlugs: string[]
  questionTarget: number
}

export interface APBioDiagnosticTestData {
  form: 'A' | 'B'
  questions: APBioDiagnosticQuestion[]
  domains: APBioDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APBioDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APBioRecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APBioDiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number // 1-5
  domains: APBioDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APBioRecommendedTopic[]
}

/* ------------------------------------------------------------------ */
/*  Domain definitions                                                 */
/* ------------------------------------------------------------------ */

const AP_BIO_DOMAINS: APBioDomain[] = [
  {
    id: 'chemistry-of-life',
    name: 'Chemistry of Life',
    topicSlugs: ['water-properties', 'carbohydrates'],
    questionTarget: 4,
  },
  {
    id: 'cell-structure',
    name: 'Cell Structure & Function',
    topicSlugs: ['prokaryotic-eukaryotic-cells', 'cell-membrane-transport'],
    questionTarget: 4,
  },
  {
    id: 'cellular-energetics',
    name: 'Cellular Energetics',
    topicSlugs: ['enzyme-kinetics', 'cellular-respiration'],
    questionTarget: 5,
  },
  {
    id: 'cell-communication',
    name: 'Cell Communication & Cell Cycle',
    topicSlugs: ['cell-signaling', 'cell-cycle-mitosis'],
    questionTarget: 4,
  },
  {
    id: 'heredity',
    name: 'Heredity',
    topicSlugs: ['mendelian-genetics', 'non-mendelian-genetics'],
    questionTarget: 4,
  },
  {
    id: 'gene-expression',
    name: 'Gene Expression & Regulation',
    topicSlugs: ['dna-replication', 'gene-regulation'],
    questionTarget: 4,
  },
  {
    id: 'natural-selection',
    name: 'Natural Selection & Evolution',
    topicSlugs: ['natural-selection', 'speciation'],
    questionTarget: 4,
  },
  {
    id: 'ecology',
    name: 'Ecology',
    topicSlugs: ['population-ecology', 'community-ecology'],
    questionTarget: 4,
  },
]

export { AP_BIO_DOMAINS }

/* ------------------------------------------------------------------ */
/*  Embedded question pool                                             */
/* ------------------------------------------------------------------ */

const apBioQuestionPool: APBioPoolQuestion[] = [
  // ========== CHEMISTRY OF LIFE ==========
  {
    question: 'Which property of water is MOST directly responsible for the ability of insects like water striders to walk on water?',
    options: ['High specific heat', 'Cohesion and surface tension', 'Universal solvent properties', 'Expansion upon freezing'],
    correctAnswer: 1,
    explanation: 'The cohesive nature of water molecules creates surface tension at the air-water interface, strong enough to support the weight of small insects.',
    domain: 'chemistry-of-life',
    topicSlug: 'water-properties',
    formSet: 'A',
  },
  {
    question: 'A polypeptide chain folds into a specific three-dimensional shape. Which level of protein structure is determined primarily by interactions between R groups (side chains)?',
    options: ['Primary structure', 'Secondary structure', 'Tertiary structure', 'Quaternary structure'],
    correctAnswer: 2,
    explanation: 'Tertiary structure results from interactions among R groups, including hydrophobic interactions, ionic bonds, hydrogen bonds, and disulfide bridges between amino acid side chains.',
    domain: 'chemistry-of-life',
    topicSlug: 'water-properties',
    formSet: 'A',
  },
  {
    question: 'Which of the following is a difference between saturated and unsaturated fatty acids?',
    options: [
      'Saturated fatty acids contain double bonds between carbons',
      'Unsaturated fatty acids are typically solid at room temperature',
      'Saturated fatty acids have no double bonds and pack tightly together',
      'Unsaturated fatty acids have more hydrogen atoms per carbon',
    ],
    correctAnswer: 2,
    explanation: 'Saturated fatty acids lack double bonds between carbons, allowing them to pack closely together, which is why they tend to be solid at room temperature (e.g., butter).',
    domain: 'chemistry-of-life',
    topicSlug: 'water-properties',
    formSet: 'B',
  },
  {
    question: 'Dehydration synthesis reactions are involved in forming which of the following?',
    options: [
      'Phospholipid bilayers from individual phospholipids',
      'Peptide bonds between amino acids',
      'Hydrogen bonds between water molecules',
      'Ionic bonds between sodium and chloride',
    ],
    correctAnswer: 1,
    explanation: 'Dehydration synthesis (condensation) reactions form covalent bonds between monomers by removing water. Peptide bonds link amino acids together in this manner.',
    domain: 'chemistry-of-life',
    topicSlug: 'water-properties',
    formSet: 'B',
  },
  {
    question: 'Which element is present in proteins and nucleic acids but NOT in carbohydrates or lipids?',
    options: ['Carbon', 'Oxygen', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 2,
    explanation: 'Nitrogen is a key component of amino groups in amino acids and of nitrogenous bases in nucleic acids. Carbohydrates and most lipids contain only C, H, and O.',
    domain: 'chemistry-of-life',
    topicSlug: 'carbohydrates',
    formSet: 'A',
  },
  {
    question: 'What type of bond holds the two strands of a DNA double helix together?',
    options: ['Covalent bonds', 'Hydrogen bonds', 'Ionic bonds', 'Peptide bonds'],
    correctAnswer: 1,
    explanation: 'Hydrogen bonds between complementary nitrogenous bases (A-T and G-C) hold the two strands of DNA together. These bonds are individually weak but collectively strong.',
    domain: 'chemistry-of-life',
    topicSlug: 'carbohydrates',
    formSet: 'B',
  },
  {
    question: 'The high specific heat of water is important for living organisms because it:',
    options: [
      'allows water to dissolve a wide variety of solutes',
      'helps maintain stable internal temperatures despite environmental changes',
      'enables ice to float on liquid water',
      'creates surface tension at air-water interfaces',
    ],
    correctAnswer: 1,
    explanation: 'Water\'s high specific heat means it can absorb or release large amounts of heat energy with relatively small changes in temperature, helping organisms maintain homeostasis.',
    domain: 'chemistry-of-life',
    topicSlug: 'carbohydrates',
    formSet: 'both',
  },
  {
    question: 'Which functional group, when present, makes an organic molecule an amino acid?',
    options: ['Hydroxyl group (—OH)', 'Carboxyl group (—COOH) only', 'Both an amino group (—NH₂) and a carboxyl group (—COOH)', 'Phosphate group (—PO₄)'],
    correctAnswer: 2,
    explanation: 'Amino acids are defined by the presence of both an amino group (—NH₂) and a carboxyl group (—COOH) attached to a central carbon, along with a variable R group.',
    domain: 'chemistry-of-life',
    topicSlug: 'carbohydrates',
    formSet: 'A',
  },

  // ========== CELL STRUCTURE & FUNCTION ==========
  {
    question: 'Which organelle contains its own DNA and is thought to have originated from an ancient endosymbiotic relationship?',
    options: ['Golgi apparatus', 'Lysosome', 'Mitochondrion', 'Peroxisome'],
    correctAnswer: 2,
    explanation: 'Mitochondria (and chloroplasts) contain their own circular DNA and double membranes, supporting the endosymbiotic theory that they were once free-living prokaryotes.',
    domain: 'cell-structure',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    formSet: 'A',
  },
  {
    question: 'A cell is placed in a hypertonic solution. Which outcome is MOST likely?',
    options: [
      'The cell will swell and possibly lyse',
      'The cell will shrink as water moves out by osmosis',
      'There will be no net movement of water',
      'Solutes will move into the cell by active transport',
    ],
    correctAnswer: 1,
    explanation: 'In a hypertonic solution the solute concentration outside is higher, so water moves out of the cell by osmosis, causing the cell to shrink (crenation in animal cells, plasmolysis in plant cells).',
    domain: 'cell-structure',
    topicSlug: 'cell-membrane-transport',
    formSet: 'A',
  },
  {
    question: 'Which of the following is a function of the rough endoplasmic reticulum?',
    options: [
      'Lipid synthesis and detoxification',
      'Synthesis of proteins destined for secretion or membrane insertion',
      'Modification and sorting of lipids only',
      'Breakdown of hydrogen peroxide',
    ],
    correctAnswer: 1,
    explanation: 'The rough ER is studded with ribosomes that synthesize proteins. These proteins are typically destined for secretion, incorporation into membranes, or delivery to other organelles.',
    domain: 'cell-structure',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    formSet: 'B',
  },
  {
    question: 'Active transport differs from facilitated diffusion in that active transport:',
    options: [
      'moves molecules down their concentration gradient',
      'requires energy input (ATP) to move molecules against their concentration gradient',
      'uses channel proteins embedded in the membrane',
      'does not require membrane proteins',
    ],
    correctAnswer: 1,
    explanation: 'Active transport uses energy (often from ATP hydrolysis) to move substances against their concentration gradient, from lower to higher concentration.',
    domain: 'cell-structure',
    topicSlug: 'cell-membrane-transport',
    formSet: 'B',
  },
  {
    question: 'The fluid mosaic model of the cell membrane describes it as:',
    options: [
      'a rigid phospholipid bilayer with fixed protein positions',
      'a flexible bilayer of phospholipids with proteins that can move laterally within the membrane',
      'a single layer of phospholipids with peripheral proteins only',
      'a carbohydrate matrix with embedded phospholipids',
    ],
    correctAnswer: 1,
    explanation: 'The fluid mosaic model describes the membrane as a dynamic structure where phospholipids and proteins can move laterally, giving it fluidity and a mosaic-like composition.',
    domain: 'cell-structure',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    formSet: 'both',
  },
  {
    question: 'Cells lining the small intestine have microvilli on their apical surface. What is the primary advantage of this structural feature?',
    options: [
      'Increased surface area for absorption',
      'Protection against pathogens',
      'Secretion of digestive enzymes',
      'Movement of the cell',
    ],
    correctAnswer: 0,
    explanation: 'Microvilli dramatically increase the surface area of intestinal cells, enhancing their ability to absorb nutrients from the lumen of the small intestine.',
    domain: 'cell-structure',
    topicSlug: 'prokaryotic-eukaryotic-cells',
    formSet: 'A',
  },
  {
    question: 'Aquaporins are membrane proteins that facilitate the movement of water across the cell membrane. This is an example of:',
    options: ['Active transport', 'Simple diffusion', 'Facilitated diffusion', 'Endocytosis'],
    correctAnswer: 2,
    explanation: 'Aquaporins are channel proteins that allow water to pass through the membrane down its concentration gradient without energy input — this is facilitated diffusion.',
    domain: 'cell-structure',
    topicSlug: 'cell-membrane-transport',
    formSet: 'both',
  },
  {
    question: 'The sodium-potassium pump moves 3 Na⁺ out and 2 K⁺ into the cell per ATP hydrolyzed. This is an example of:',
    options: ['Facilitated diffusion', 'Osmosis', 'Primary active transport', 'Secondary active transport'],
    correctAnswer: 2,
    explanation: 'The Na⁺/K⁺-ATPase directly uses ATP to move ions against their concentration gradients, making it a primary active transport mechanism.',
    domain: 'cell-structure',
    topicSlug: 'cell-membrane-transport',
    formSet: 'A',
  },

  // ========== CELLULAR ENERGETICS ==========
  {
    question: 'An enzyme lowers the activation energy of a reaction by:',
    options: [
      'increasing the temperature of the surroundings',
      'providing an alternative reaction pathway with a lower energy barrier',
      'changing the overall free-energy change (ΔG) of the reaction',
      'adding energy to the substrate molecules',
    ],
    correctAnswer: 1,
    explanation: 'Enzymes are biological catalysts that lower activation energy by stabilizing the transition state, providing an alternative pathway without altering ΔG.',
    domain: 'cellular-energetics',
    topicSlug: 'enzyme-kinetics',
    formSet: 'A',
  },
  {
    question: 'A competitive inhibitor of an enzyme works by:',
    options: [
      'binding to the active site and blocking substrate access',
      'binding to an allosteric site and changing enzyme shape',
      'permanently denaturing the enzyme',
      'increasing the Km without affecting Vmax when substrate concentration is saturating',
    ],
    correctAnswer: 0,
    explanation: 'Competitive inhibitors resemble the substrate and bind to the enzyme\'s active site, directly competing with the substrate for access.',
    domain: 'cellular-energetics',
    topicSlug: 'enzyme-kinetics',
    formSet: 'A',
  },
  {
    question: 'In cellular respiration, the largest number of ATP molecules are produced during which stage?',
    options: ['Glycolysis', 'Pyruvate oxidation', 'The citric acid (Krebs) cycle', 'Oxidative phosphorylation (electron transport chain)'],
    correctAnswer: 3,
    explanation: 'Oxidative phosphorylation, driven by the electron transport chain and chemiosmosis, produces approximately 26-28 of the ~30-32 total ATP per glucose molecule.',
    domain: 'cellular-energetics',
    topicSlug: 'cellular-respiration',
    formSet: 'A',
  },
  {
    question: 'Where do the light-dependent reactions of photosynthesis occur?',
    options: ['Stroma of the chloroplast', 'Thylakoid membranes', 'Cytoplasm', 'Inner mitochondrial membrane'],
    correctAnswer: 1,
    explanation: 'The light-dependent reactions occur in the thylakoid membranes where photosystems I and II, the electron transport chain, and ATP synthase are located.',
    domain: 'cellular-energetics',
    topicSlug: 'cellular-respiration',
    formSet: 'A',
  },
  {
    question: 'The Calvin cycle uses CO₂, ATP, and NADPH to produce:',
    options: ['Glucose directly', 'G3P (glyceraldehyde-3-phosphate)', 'Pyruvate', 'Oxygen'],
    correctAnswer: 1,
    explanation: 'The Calvin cycle produces G3P. Two molecules of G3P can then be used to synthesize one molecule of glucose or other organic compounds.',
    domain: 'cellular-energetics',
    topicSlug: 'cellular-respiration',
    formSet: 'B',
  },
  {
    question: 'An increase in temperature above the optimal range denatures an enzyme by:',
    options: [
      'breaking peptide bonds in the primary structure',
      'disrupting weak interactions that maintain tertiary structure',
      'removing cofactors from the active site',
      'converting the enzyme to a competitive inhibitor',
    ],
    correctAnswer: 1,
    explanation: 'High temperatures disrupt hydrogen bonds, hydrophobic interactions, and other weak forces that maintain the enzyme\'s three-dimensional shape, leading to denaturation.',
    domain: 'cellular-energetics',
    topicSlug: 'enzyme-kinetics',
    formSet: 'B',
  },
  {
    question: 'Which molecule is the final electron acceptor in the mitochondrial electron transport chain?',
    options: ['NAD⁺', 'FAD', 'Oxygen (O₂)', 'Carbon dioxide (CO₂)'],
    correctAnswer: 2,
    explanation: 'Oxygen is the final electron acceptor in the ETC. It combines with electrons and H⁺ ions to form water. Without O₂, the chain stalls and ATP production via oxidative phosphorylation stops.',
    domain: 'cellular-energetics',
    topicSlug: 'cellular-respiration',
    formSet: 'B',
  },
  {
    question: 'During fermentation in yeast, pyruvate is converted to:',
    options: ['Lactate', 'Ethanol and CO₂', 'Acetyl-CoA', 'Citrate'],
    correctAnswer: 1,
    explanation: 'Yeast undergoes alcoholic fermentation, converting pyruvate to ethanol and CO₂. This regenerates NAD⁺ so glycolysis can continue in the absence of oxygen.',
    domain: 'cellular-energetics',
    topicSlug: 'cellular-respiration',
    formSet: 'both',
  },
  {
    question: 'Chemiosmosis in mitochondria involves:',
    options: [
      'the direct transfer of phosphate groups to ADP',
      'H⁺ ions flowing down their concentration gradient through ATP synthase',
      'the breakdown of glucose in the cytoplasm',
      'the reduction of NAD⁺ to NADH in the matrix',
    ],
    correctAnswer: 1,
    explanation: 'Chemiosmosis occurs when protons (H⁺) flow through ATP synthase from the intermembrane space to the matrix, driven by the electrochemical gradient, powering ATP synthesis.',
    domain: 'cellular-energetics',
    topicSlug: 'cellular-respiration',
    formSet: 'both',
  },
  {
    question: 'A non-competitive inhibitor affects enzyme activity by:',
    options: [
      'competing with the substrate for the active site',
      'binding to an allosteric site and altering the enzyme\'s conformation',
      'lowering the activation energy further',
      'increasing the concentration of substrate',
    ],
    correctAnswer: 1,
    explanation: 'Non-competitive inhibitors bind at an allosteric site (not the active site), changing the enzyme\'s shape so that the active site is less effective, reducing Vmax.',
    domain: 'cellular-energetics',
    topicSlug: 'enzyme-kinetics',
    formSet: 'both',
  },

  // ========== CELL COMMUNICATION & CELL CYCLE ==========
  {
    question: 'In a signal transduction pathway, a second messenger such as cyclic AMP (cAMP) serves to:',
    options: [
      'bind directly to DNA to activate gene transcription',
      'amplify the signal by activating multiple downstream proteins',
      'transport the signal molecule across the plasma membrane',
      'degrade the receptor after signaling is complete',
    ],
    correctAnswer: 1,
    explanation: 'Second messengers like cAMP amplify the initial signal by activating numerous protein kinases or other effectors, creating a cascade that magnifies the cellular response.',
    domain: 'cell-communication',
    topicSlug: 'cell-signaling',
    formSet: 'A',
  },
  {
    question: 'Which checkpoint in the cell cycle ensures that all chromosomes are properly attached to spindle fibers before proceeding to anaphase?',
    options: ['G₁/S checkpoint', 'G₂/M checkpoint', 'M checkpoint (spindle assembly checkpoint)', 'S phase checkpoint'],
    correctAnswer: 2,
    explanation: 'The M checkpoint (spindle assembly checkpoint) monitors kinetochore attachment to spindle microtubules, preventing anaphase until all chromosomes are properly aligned.',
    domain: 'cell-communication',
    topicSlug: 'cell-cycle-mitosis',
    formSet: 'A',
  },
  {
    question: 'Apoptosis (programmed cell death) is important because it:',
    options: [
      'provides energy for neighboring cells',
      'eliminates damaged or unnecessary cells in a controlled manner',
      'increases the rate of cell division in tissues',
      'prevents diffusion of signaling molecules',
    ],
    correctAnswer: 1,
    explanation: 'Apoptosis is a tightly regulated process that removes cells that are damaged, infected, or no longer needed, without triggering inflammation — essential for development and homeostasis.',
    domain: 'cell-communication',
    topicSlug: 'cell-signaling',
    formSet: 'B',
  },
  {
    question: 'During which phase of meiosis do homologous chromosomes separate?',
    options: ['Anaphase I', 'Anaphase II', 'Metaphase I', 'Telophase II'],
    correctAnswer: 0,
    explanation: 'During anaphase I of meiosis, homologous chromosome pairs (tetrads) are separated, reducing the chromosome number by half. Sister chromatids separate later in anaphase II.',
    domain: 'cell-communication',
    topicSlug: 'cell-cycle-mitosis',
    formSet: 'B',
  },
  {
    question: 'G protein-coupled receptors (GPCRs) are activated when:',
    options: [
      'a ligand binds to the intracellular domain',
      'a ligand binds to the extracellular domain, causing a conformational change that activates a G protein',
      'ATP directly phosphorylates the receptor',
      'the receptor dimerizes without any ligand',
    ],
    correctAnswer: 1,
    explanation: 'When a ligand binds the extracellular domain of a GPCR, the receptor changes shape, activating an associated G protein on the cytoplasmic side, which then initiates a signaling cascade.',
    domain: 'cell-communication',
    topicSlug: 'cell-signaling',
    formSet: 'both',
  },
  {
    question: 'Crossing over during meiosis occurs between:',
    options: [
      'sister chromatids of the same chromosome',
      'non-sister chromatids of homologous chromosomes',
      'chromosomes from different pairs',
      'centromeres of replicated chromosomes',
    ],
    correctAnswer: 1,
    explanation: 'Crossing over (recombination) occurs during prophase I between non-sister chromatids of homologous chromosomes, increasing genetic diversity in the resulting gametes.',
    domain: 'cell-communication',
    topicSlug: 'cell-cycle-mitosis',
    formSet: 'both',
  },
  {
    question: 'A mutation that causes a Ras protein to be permanently active (always bound to GTP) would MOST likely result in:',
    options: [
      'Decreased cell division',
      'Uncontrolled cell growth and potential cancer',
      'Increased apoptosis',
      'Reduced signal transduction',
    ],
    correctAnswer: 1,
    explanation: 'Ras is a key signaling protein in growth factor pathways. If constitutively active, it continuously signals the cell to divide, which can lead to uncontrolled proliferation and cancer.',
    domain: 'cell-communication',
    topicSlug: 'cell-signaling',
    formSet: 'A',
  },
  {
    question: 'At the end of meiosis II, how many haploid cells are produced from one diploid parent cell?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 3,
    explanation: 'Meiosis consists of two rounds of division. One diploid cell produces two haploid cells after meiosis I, then each divides again in meiosis II, yielding four haploid daughter cells total.',
    domain: 'cell-communication',
    topicSlug: 'cell-cycle-mitosis',
    formSet: 'A',
  },

  // ========== HEREDITY ==========
  {
    question: 'In a dihybrid cross between two organisms heterozygous for both traits (AaBb × AaBb), assuming independent assortment, what fraction of offspring will display both recessive phenotypes?',
    options: ['1/4', '1/16', '3/16', '9/16'],
    correctAnswer: 1,
    explanation: 'For each trait, 1/4 of offspring are homozygous recessive. With independent assortment, the probability of both recessive phenotypes = 1/4 × 1/4 = 1/16.',
    domain: 'heredity',
    topicSlug: 'mendelian-genetics',
    formSet: 'A',
  },
  {
    question: 'A test cross is used to determine:',
    options: [
      'whether a trait is autosomal or sex-linked',
      'the genotype of an organism showing the dominant phenotype',
      'the rate of mutation in a population',
      'whether two genes are on the same chromosome',
    ],
    correctAnswer: 1,
    explanation: 'A test cross involves mating an organism with the dominant phenotype (unknown genotype) with a homozygous recessive individual. The offspring ratios reveal whether the unknown is homozygous or heterozygous.',
    domain: 'heredity',
    topicSlug: 'mendelian-genetics',
    formSet: 'A',
  },
  {
    question: 'Codominance is demonstrated when:',
    options: [
      'one allele is completely dominant over another',
      'the heterozygote shows a blended intermediate phenotype',
      'both alleles are fully expressed in the heterozygote',
      'an allele is only expressed in males',
    ],
    correctAnswer: 2,
    explanation: 'In codominance, both alleles contribute equally and are both visibly expressed in the heterozygote. An example is the AB blood type in humans, where both A and B antigens are present.',
    domain: 'heredity',
    topicSlug: 'non-mendelian-genetics',
    formSet: 'B',
  },
  {
    question: 'A human female carrier of hemophilia (X^H X^h) mates with a normal male (X^H Y). What is the probability of a son being hemophilic?',
    options: ['0%', '25%', '50%', '100%'],
    correctAnswer: 2,
    explanation: 'Sons inherit their single X from their mother. The carrier mother has a 50% chance of passing on X^h, so 50% of sons will be X^h Y (hemophilic).',
    domain: 'heredity',
    topicSlug: 'non-mendelian-genetics',
    formSet: 'A',
  },
  {
    question: 'According to Mendel\'s law of segregation:',
    options: [
      'genes on different chromosomes assort independently',
      'two alleles for a gene separate during gamete formation so each gamete carries one allele',
      'dominant alleles always mask recessive alleles in heterozygotes',
      'linked genes are always inherited together',
    ],
    correctAnswer: 1,
    explanation: 'The law of segregation states that the two alleles for each gene separate during meiosis, so each gamete receives only one allele for each trait.',
    domain: 'heredity',
    topicSlug: 'mendelian-genetics',
    formSet: 'B',
  },
  {
    question: 'Epistasis occurs when:',
    options: [
      'one gene masks or modifies the expression of another gene',
      'multiple alleles exist for a single gene locus',
      'one allele is incompletely dominant over another',
      'genes on the same chromosome are linked',
    ],
    correctAnswer: 0,
    explanation: 'Epistasis is a gene interaction where one gene\'s alleles mask or modify the phenotypic expression of alleles of a different gene, such as coat color in Labrador retrievers.',
    domain: 'heredity',
    topicSlug: 'non-mendelian-genetics',
    formSet: 'B',
  },
  {
    question: 'Polygenic inheritance is characterized by:',
    options: [
      'a single gene controlling multiple phenotypic traits',
      'multiple genes contributing to a single phenotypic trait with continuous variation',
      'one pair of alleles with complete dominance',
      'X-linked inheritance patterns',
    ],
    correctAnswer: 1,
    explanation: 'Polygenic inheritance involves multiple genes (often on different chromosomes) contributing additively to a single trait, producing continuous variation such as human height or skin color.',
    domain: 'heredity',
    topicSlug: 'non-mendelian-genetics',
    formSet: 'both',
  },
  {
    question: 'If a trait follows autosomal recessive inheritance and both parents are carriers, what fraction of their offspring is expected to be phenotypically affected?',
    options: ['1/2', '1/4', '3/4', '1/8'],
    correctAnswer: 1,
    explanation: 'Carrier × Carrier (Aa × Aa) produces a 1:2:1 genotypic ratio. Only the 1/4 who are homozygous recessive (aa) express the recessive phenotype.',
    domain: 'heredity',
    topicSlug: 'mendelian-genetics',
    formSet: 'both',
  },

  // ========== GENE EXPRESSION & REGULATION ==========
  {
    question: 'During transcription, RNA polymerase reads the DNA template strand in which direction?',
    options: ["5' to 3'", "3' to 5'", 'Both directions simultaneously', 'Direction depends on the gene'],
    correctAnswer: 1,
    explanation: "RNA polymerase reads the DNA template strand in the 3' to 5' direction while synthesizing the mRNA in the 5' to 3' direction.",
    domain: 'gene-expression',
    topicSlug: 'dna-replication',
    formSet: 'A',
  },
  {
    question: 'Which of the following is a post-transcriptional modification of mRNA in eukaryotes?',
    options: [
      'Removal of introns by RNA splicing',
      'Methylation of histones',
      'Addition of amino acids by ribosomes',
      'Binding of transcription factors to the promoter',
    ],
    correctAnswer: 0,
    explanation: 'Before mRNA leaves the nucleus, introns (non-coding sequences) are removed by spliceosomes, and exons are joined together. A 5\' cap and 3\' poly-A tail are also added.',
    domain: 'gene-expression',
    topicSlug: 'dna-replication',
    formSet: 'A',
  },
  {
    question: 'A codon on mRNA reads 5\'-AUG-3\'. What amino acid does this specify?',
    options: ['Leucine', 'Methionine (start codon)', 'Valine', 'Alanine'],
    correctAnswer: 1,
    explanation: 'AUG is the universal start codon and codes for methionine. It signals the ribosome to begin translation at that point on the mRNA.',
    domain: 'gene-expression',
    topicSlug: 'gene-regulation',
    formSet: 'A',
  },
  {
    question: 'The lac operon in E. coli is an example of:',
    options: [
      'positive regulation only',
      'an inducible operon regulated by a repressor and an activator',
      'constitutive gene expression',
      'post-translational modification',
    ],
    correctAnswer: 1,
    explanation: 'The lac operon is inducible: in the presence of lactose the repressor is inactivated, and when glucose is low, CAP-cAMP activates transcription — demonstrating both negative and positive regulation.',
    domain: 'gene-expression',
    topicSlug: 'gene-regulation',
    formSet: 'B',
  },
  {
    question: 'DNA replication is described as semi-conservative because:',
    options: [
      'both strands are completely new after replication',
      'each new double helix contains one original strand and one newly synthesized strand',
      'only one strand of the parent DNA is replicated',
      'replication occurs in a conservative manner in prokaryotes but not eukaryotes',
    ],
    correctAnswer: 1,
    explanation: 'Semi-conservative replication means each daughter molecule consists of one parental (template) strand and one newly synthesized strand, as demonstrated by the Meselson-Stahl experiment.',
    domain: 'gene-expression',
    topicSlug: 'dna-replication',
    formSet: 'B',
  },
  {
    question: 'A point mutation that changes a codon from GAA to GAG (both coding for glutamic acid) is called a:',
    options: ['Missense mutation', 'Nonsense mutation', 'Silent (synonymous) mutation', 'Frameshift mutation'],
    correctAnswer: 2,
    explanation: 'A silent mutation changes a nucleotide but does not alter the amino acid encoded, due to the degeneracy (redundancy) of the genetic code.',
    domain: 'gene-expression',
    topicSlug: 'gene-regulation',
    formSet: 'both',
  },
  {
    question: 'Epigenetic modifications such as DNA methylation typically:',
    options: [
      'alter the DNA sequence directly',
      'silence gene expression without changing the nucleotide sequence',
      'increase the rate of DNA replication',
      'only occur in prokaryotic organisms',
    ],
    correctAnswer: 1,
    explanation: 'Epigenetic modifications like DNA methylation and histone modification regulate gene expression without changing the underlying DNA sequence. Methylation of promoter regions typically silences genes.',
    domain: 'gene-expression',
    topicSlug: 'gene-regulation',
    formSet: 'A',
  },
  {
    question: 'Okazaki fragments are produced during DNA replication on the:',
    options: [
      'leading strand, synthesized continuously',
      'lagging strand, synthesized discontinuously',
      'both strands equally',
      'template strand only',
    ],
    correctAnswer: 1,
    explanation: 'Because DNA polymerase can only synthesize in the 5\' to 3\' direction, the lagging strand is synthesized in short fragments (Okazaki fragments) that are later joined by DNA ligase.',
    domain: 'gene-expression',
    topicSlug: 'dna-replication',
    formSet: 'both',
  },

  // ========== NATURAL SELECTION & EVOLUTION ==========
  {
    question: 'Which of the following is required for evolution by natural selection to occur?',
    options: [
      'All individuals must reproduce equally',
      'Traits must be acquired during the organism\'s lifetime',
      'Heritable variation in traits must exist in a population, and some variants must confer differential survival or reproduction',
      'Mutations must always be beneficial',
    ],
    correctAnswer: 2,
    explanation: 'Natural selection requires heritable variation and differential fitness. Individuals with advantageous traits survive and reproduce more, passing those traits to the next generation.',
    domain: 'natural-selection',
    topicSlug: 'natural-selection',
    formSet: 'A',
  },
  {
    question: 'Genetic drift is MOST likely to significantly affect allele frequencies in:',
    options: [
      'very large populations',
      'small, isolated populations',
      'populations with high gene flow',
      'populations experiencing strong directional selection',
    ],
    correctAnswer: 1,
    explanation: 'Genetic drift — random changes in allele frequency — has a much larger effect in small populations where chance events can significantly shift allele frequencies from one generation to the next.',
    domain: 'natural-selection',
    topicSlug: 'natural-selection',
    formSet: 'A',
  },
  {
    question: 'Two populations of squirrels become separated by a newly formed canyon. Over many generations, they diverge into two distinct species. This is an example of:',
    options: ['Sympatric speciation', 'Allopatric speciation', 'Parapatric speciation', 'Artificial selection'],
    correctAnswer: 1,
    explanation: 'Allopatric speciation occurs when a physical barrier (geographic isolation) divides a population, preventing gene flow and allowing independent divergence.',
    domain: 'natural-selection',
    topicSlug: 'speciation',
    formSet: 'B',
  },
  {
    question: 'On a phylogenetic tree, organisms that share a more recent common ancestor are:',
    options: [
      'always in the same genus',
      'placed on branches that diverge closer to the tips of the tree',
      'always morphologically identical',
      'members of the same species',
    ],
    correctAnswer: 1,
    explanation: 'On a phylogenetic tree, more closely related species share a more recent branching point (node), meaning their lineages diverged more recently.',
    domain: 'natural-selection',
    topicSlug: 'speciation',
    formSet: 'A',
  },
  {
    question: 'Hardy-Weinberg equilibrium requires all of the following conditions EXCEPT:',
    options: [
      'No natural selection',
      'Random mating',
      'Small population size',
      'No mutation',
    ],
    correctAnswer: 2,
    explanation: 'Hardy-Weinberg equilibrium requires a large population (to avoid genetic drift), random mating, no selection, no mutation, and no gene flow. Small population size violates this condition.',
    domain: 'natural-selection',
    topicSlug: 'natural-selection',
    formSet: 'B',
  },
  {
    question: 'Analogous structures (e.g., wings of insects and wings of birds) are evidence of:',
    options: [
      'common ancestry (homology)',
      'convergent evolution driven by similar environmental pressures',
      'genetic drift in both lineages',
      'artificial selection',
    ],
    correctAnswer: 1,
    explanation: 'Analogous structures arise from convergent evolution — independent evolution of similar traits in unrelated lineages adapting to similar environments, not from shared ancestry.',
    domain: 'natural-selection',
    topicSlug: 'speciation',
    formSet: 'both',
  },
  {
    question: 'Stabilizing selection tends to:',
    options: [
      'favor individuals at one extreme of the phenotype range',
      'favor individuals at both extremes of the phenotype range',
      'favor intermediate phenotypes and reduce phenotypic variation',
      'produce a bimodal distribution of phenotypes',
    ],
    correctAnswer: 2,
    explanation: 'Stabilizing selection selects against extreme phenotypes, favoring the average. This narrows the phenotypic distribution over time (e.g., human birth weight).',
    domain: 'natural-selection',
    topicSlug: 'natural-selection',
    formSet: 'both',
  },
  {
    question: 'The biological species concept defines a species as:',
    options: [
      'a group of organisms that look morphologically similar',
      'a population of organisms that can interbreed and produce viable, fertile offspring',
      'any group sharing the same ecological niche',
      'organisms with identical DNA sequences',
    ],
    correctAnswer: 1,
    explanation: 'The biological species concept (Ernst Mayr) defines a species as a group of populations whose members can interbreed in nature and produce viable, fertile offspring, reproductively isolated from other groups.',
    domain: 'natural-selection',
    topicSlug: 'speciation',
    formSet: 'B',
  },

  // ========== ECOLOGY ==========
  {
    question: 'In a population showing logistic growth, the growth rate is highest when the population is at:',
    options: [
      'carrying capacity (K)',
      'half the carrying capacity (K/2)',
      'a very small population size',
      'above the carrying capacity',
    ],
    correctAnswer: 1,
    explanation: 'In logistic growth, the per capita rate of increase is maximized at N = K/2 because there are enough individuals to reproduce rapidly but resources are not yet limiting.',
    domain: 'ecology',
    topicSlug: 'population-ecology',
    formSet: 'A',
  },
  {
    question: 'A keystone species is one that:',
    options: [
      'is always the most abundant species in a community',
      'has a disproportionately large impact on community structure relative to its abundance',
      'is always at the top of the food chain',
      'only exists in climax communities',
    ],
    correctAnswer: 1,
    explanation: 'A keystone species has an outsized effect on community structure and biodiversity relative to its numbers. Removing it causes dramatic changes (e.g., sea otters in kelp forests).',
    domain: 'ecology',
    topicSlug: 'community-ecology',
    formSet: 'A',
  },
  {
    question: 'Which of the following is a density-dependent factor limiting population growth?',
    options: ['Wildfire', 'Disease', 'Volcanic eruption', 'Drought'],
    correctAnswer: 1,
    explanation: 'Density-dependent factors such as disease, competition, and predation have a greater impact as population density increases. Wildfires, volcanoes, and droughts are density-independent.',
    domain: 'ecology',
    topicSlug: 'population-ecology',
    formSet: 'A',
  },
  {
    question: 'Primary succession differs from secondary succession in that primary succession:',
    options: [
      'occurs where no soil or organisms previously existed',
      'occurs after a disturbance in an established community with intact soil',
      'is always faster than secondary succession',
      'only occurs in marine environments',
    ],
    correctAnswer: 0,
    explanation: 'Primary succession begins on bare substrates (e.g., newly formed volcanic rock) where no soil exists. Secondary succession occurs where soil and seed banks remain after a disturbance.',
    domain: 'ecology',
    topicSlug: 'community-ecology',
    formSet: 'B',
  },
  {
    question: 'In an energy pyramid, approximately what percentage of energy is transferred from one trophic level to the next?',
    options: ['1%', '10%', '50%', '90%'],
    correctAnswer: 1,
    explanation: 'On average, only about 10% of the energy at one trophic level is transferred to the next. The rest is lost as metabolic heat, used for life processes, or remains in uneaten biomass.',
    domain: 'ecology',
    topicSlug: 'community-ecology',
    formSet: 'B',
  },
  {
    question: 'A type III survivorship curve is characterized by:',
    options: [
      'high survival throughout life with mortality concentrated in old age',
      'constant mortality rate throughout life',
      'high mortality early in life with survivors having high subsequent survival',
      'mortality concentrated in middle age',
    ],
    correctAnswer: 2,
    explanation: 'Type III survivorship curves (e.g., many fish, invertebrates, plants) show very high juvenile mortality; the few individuals that survive beyond early stages have much better survival odds.',
    domain: 'ecology',
    topicSlug: 'population-ecology',
    formSet: 'both',
  },
  {
    question: 'Nitrogen fixation is the process by which:',
    options: [
      'plants absorb nitrates from the soil through their roots',
      'atmospheric N₂ is converted to ammonia (NH₃) by certain bacteria',
      'decomposers release nitrogen from organic matter',
      'lightning converts N₂ into nitrogen oxides in the atmosphere',
    ],
    correctAnswer: 1,
    explanation: 'Nitrogen fixation is performed primarily by certain prokaryotes (e.g., Rhizobium in root nodules of legumes) that convert atmospheric N₂ into ammonia, making nitrogen available to plants.',
    domain: 'ecology',
    topicSlug: 'community-ecology',
    formSet: 'both',
  },
  {
    question: 'The competitive exclusion principle states that:',
    options: [
      'two species competing for the same limited resource cannot coexist indefinitely in the same niche',
      'competition always leads to extinction of both species',
      'predators always exclude competitors from a habitat',
      'two species can occupy the same niche if they are closely related',
    ],
    correctAnswer: 0,
    explanation: 'Gause\'s competitive exclusion principle states that two species occupying the exact same ecological niche cannot stably coexist — one will outcompete and exclude the other.',
    domain: 'ecology',
    topicSlug: 'community-ecology',
    formSet: 'A',
  },
  {
    question: 'An r-selected species is typically characterized by:',
    options: [
      'large body size, few offspring, extensive parental care',
      'small body size, many offspring, little parental care, rapid reproduction',
      'long lifespan and low mortality',
      'population size near carrying capacity',
    ],
    correctAnswer: 1,
    explanation: 'r-selected species maximize reproductive rate: they produce many offspring with little investment per offspring, mature quickly, and thrive in unpredictable environments.',
    domain: 'ecology',
    topicSlug: 'population-ecology',
    formSet: 'B',
  },
]

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

/**
 * Build a diagnostic test for either form A or form B.
 * Questions are drawn from the question pool tagged with that form (or 'both').
 */
export function generateAPBioDiagnosticTest(form: 'A' | 'B'): APBioDiagnosticTestData {
  const questions: APBioDiagnosticQuestion[] = []

  for (const domain of AP_BIO_DOMAINS) {
    const pool = apBioQuestionPool.filter(
      (q) => q.domain === domain.id && (q.formSet === form || q.formSet === 'both'),
    )

    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, domain.questionTarget)

    for (const q of selected) {
      questions.push({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        domain: domain.id,
        topicSlug: q.topicSlug,
      })
    }
  }

  // Shuffle the final question order
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5)

  return {
    form,
    questions: shuffledQuestions,
    domains: AP_BIO_DOMAINS,
    totalQuestions: shuffledQuestions.length,
    timeLimitMinutes: 45,
  }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPBioDiagnostic(
  form: 'A' | 'B',
  questions: APBioDiagnosticQuestion[],
  answers: Record<number, number>,
): APBioDiagnosticResults {
  const domainResults: APBioDomainResult[] = AP_BIO_DOMAINS.map(domain => {
    const domainQs = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.domain === domain.id)

    const correct = domainQs.filter(({ i }) => {
      const answer = answers[i]
      return answer !== undefined && answer === questions[i].correctAnswer
    }).length

    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' =
      percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'

    return {
      domainId: domain.id,
      domainName: domain.name,
      correct,
      total,
      percentage,
      level,
    }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Estimated AP score (1-5 scale)
  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Build recommended topics — pick 1-2 slugs per weak domain, 1 per moderate domain
  // prioritize weak first, cap at 5 total
  const recommendedTopics: APBioRecommendedTopic[] = []

  const weakDomains = domainResults.filter(d => d.level === 'weak')
  const moderateDomains = domainResults.filter(d => d.level === 'moderate')

  for (const wd of weakDomains) {
    const domainDef = AP_BIO_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue

    // Find specific topic slugs the student missed
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === wd.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slugsToRecommend = missedSlugs.size > 0
      ? [...missedSlugs].slice(0, 2)
      : domainDef.topicSlugs.slice(0, 2)

    for (const slug of slugsToRecommend) {
      if (recommendedTopics.length >= 5) break
      recommendedTopics.push({
        slug,
        name: slugToReadableName(slug),
        domainId: wd.domainId,
        priority: 'high',
      })
    }
  }

  for (const md of moderateDomains) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_BIO_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue

    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => {
      if (q.domain === md.domainId) {
        const answer = answers[i]
        if (answer === undefined || answer !== q.correctAnswer) {
          missedSlugs.add(q.topicSlug)
        }
      }
    })

    const slug = missedSlugs.size > 0
      ? [...missedSlugs][0]
      : domainDef.topicSlugs[0]

    recommendedTopics.push({
      slug,
      name: slugToReadableName(slug),
      domainId: md.domainId,
      priority: 'medium',
    })
  }

  return {
    form,
    totalCorrect,
    totalQuestions,
    percentage,
    estimatedAPScore,
    domains: domainResults,
    weakAreas,
    moderateAreas,
    strengths,
    recommendedTopics: recommendedTopics.slice(0, 5),
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/**
 * Pick the next form the student should take.
 * - If they've never taken a test → A
 * - If their last form was A → B
 * - If their last form was B → A
 */
export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[previousForms.length - 1] === 'A' ? 'B' : 'A'
}

const SLUG_LABELS: Record<string, string> = {
  'water-properties': 'Water & Macromolecules',
  'carbohydrates': 'Cell Chemistry Basics',
  'prokaryotic-eukaryotic-cells': 'Cell Structure & Function',
  'cell-membrane-transport': 'Membrane Transport',
  'enzyme-kinetics': 'Enzyme Catalysis',
  'cellular-respiration': 'Photosynthesis & Cellular Respiration',
  'cell-signaling': 'Cell Signaling',
  'cell-cycle-mitosis': 'Cell Cycle, Mitosis & Meiosis',
  'mendelian-genetics': 'Mendelian Genetics',
  'non-mendelian-genetics': 'Non-Mendelian Inheritance',
  'dna-replication': 'DNA Replication & Transcription',
  'gene-regulation': 'Translation & Gene Regulation',
  'natural-selection': 'Natural Selection',
  'speciation': 'Speciation & Phylogeny',
  'population-ecology': 'Population Ecology',
  'community-ecology': 'Community & Ecosystem Ecology',
}

function slugToReadableName(slug: string): string {
  return SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
