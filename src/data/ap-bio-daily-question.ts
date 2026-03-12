/**
 * AP Biology — Question of the Day
 *
 * Self-contained question pool covering all AP Bio units.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'Which molecule serves as the primary energy currency of the cell?', options: ['NADH', 'ATP', 'FADH₂', 'Glucose'], correctAnswer: 1, explanation: 'ATP (adenosine triphosphate) is the primary energy currency. Energy stored in its phosphoanhydride bonds is released during hydrolysis to power cellular work.' },
  { question: 'During which phase of mitosis do chromosomes align along the metaphase plate?', options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], correctAnswer: 1, explanation: 'During metaphase, chromosomes are pulled to the metaphase plate (cell equator) by spindle fibers attached to the kinetochores.' },
  { question: 'What is the role of DNA polymerase III in DNA replication?', options: ['Unwinds the double helix', 'Synthesizes RNA primers', 'Adds nucleotides to the growing strand', 'Joins Okazaki fragments'], correctAnswer: 2, explanation: 'DNA polymerase III is the main replicative enzyme that adds nucleotides to the 3′ end of the growing DNA strand in the 5′→3′ direction.' },
  { question: 'In the lac operon, what happens when lactose is present and glucose is absent?', options: ['The repressor binds the operator', 'Transcription is blocked', 'The operon is maximally transcribed', 'CAP cannot bind the promoter'], correctAnswer: 2, explanation: 'With lactose present, allolactose inactivates the repressor. Without glucose, cAMP levels rise and CAP binds the promoter, enabling maximum transcription.' },
  { question: 'Which of the following best describes the function of the Calvin cycle?', options: ['Produces O₂ from water', 'Fixes CO₂ into G3P using ATP and NADPH', 'Generates a proton gradient', 'Splits water molecules'], correctAnswer: 1, explanation: 'The Calvin cycle (light-independent reactions) fixes CO₂ into glyceraldehyde-3-phosphate (G3P) using the ATP and NADPH produced by the light reactions.' },
  { question: 'Which type of mutation involves a single nucleotide substitution that results in a premature stop codon?', options: ['Missense mutation', 'Nonsense mutation', 'Frameshift mutation', 'Silent mutation'], correctAnswer: 1, explanation: 'A nonsense mutation is a point mutation that changes an amino acid codon to a stop codon, resulting in a truncated (and usually nonfunctional) protein.' },
  { question: 'What is the expected phenotypic ratio of a dihybrid cross between two heterozygous organisms (AaBb × AaBb)?', options: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1'], correctAnswer: 2, explanation: 'A dihybrid cross of two doubly heterozygous parents produces a 9:3:3:1 phenotypic ratio when the genes assort independently (Mendel\'s second law).' },
  { question: 'Which process converts pyruvate to acetyl-CoA?', options: ['Glycolysis', 'Pyruvate oxidation', 'Citric acid cycle', 'Oxidative phosphorylation'], correctAnswer: 1, explanation: 'Pyruvate oxidation (pyruvate decarboxylation) converts pyruvate to acetyl-CoA in the mitochondrial matrix, releasing CO₂ and generating NADH.' },
  { question: 'In a food web, which trophic level typically has the least amount of available energy?', options: ['Primary producers', 'Primary consumers', 'Secondary consumers', 'Tertiary consumers'], correctAnswer: 3, explanation: 'Energy decreases at each trophic level (roughly 10% rule). Tertiary consumers, at the top, have the least available energy.' },
  { question: 'Which structure in a plant cell is responsible for photosynthesis?', options: ['Mitochondria', 'Ribosomes', 'Chloroplasts', 'Golgi apparatus'], correctAnswer: 2, explanation: 'Chloroplasts contain the thylakoid membranes and stroma where the light reactions and Calvin cycle of photosynthesis occur.' },
  { question: 'What is the main function of the sinoatrial (SA) node in the human heart?', options: ['Pumps blood to the lungs', 'Sets the pace of the heartbeat', 'Prevents backflow of blood', 'Oxygenates blood'], correctAnswer: 1, explanation: 'The SA node is the heart\'s natural pacemaker, generating electrical impulses that set the rhythm and rate of cardiac contraction.' },
  { question: 'Which hormone is primarily responsible for regulating blood glucose levels by promoting glycogen synthesis?', options: ['Glucagon', 'Insulin', 'Epinephrine', 'Cortisol'], correctAnswer: 1, explanation: 'Insulin, released by pancreatic beta cells, lowers blood glucose by promoting uptake into cells and stimulating glycogen synthesis in the liver.' },
  { question: 'Hardy-Weinberg equilibrium requires all of the following EXCEPT:', options: ['No mutation', 'Random mating', 'Natural selection', 'Large population size'], correctAnswer: 2, explanation: 'Hardy-Weinberg equilibrium requires no mutation, random mating, no natural selection, large population size, and no gene flow. Natural selection disrupts equilibrium.' },
  { question: 'Which type of immune cell is responsible for producing antibodies?', options: ['Cytotoxic T cells', 'Helper T cells', 'Plasma cells (B cells)', 'Macrophages'], correctAnswer: 2, explanation: 'Plasma cells, which are differentiated B lymphocytes, secrete large quantities of antibodies specific to the antigen that activated them.' },
  { question: 'What is the primary function of transfer RNA (tRNA)?', options: ['Carries genetic information from the nucleus', 'Catalyzes peptide bond formation', 'Delivers amino acids to the ribosome', 'Splices introns from mRNA'], correctAnswer: 2, explanation: 'tRNA molecules carry specific amino acids to the ribosome during translation, matching their anticodon with the mRNA codon to ensure correct protein assembly.' },
  { question: 'Which ecological relationship describes two species competing for the same limited resource?', options: ['Mutualism', 'Parasitism', 'Interspecific competition', 'Commensalism'], correctAnswer: 2, explanation: 'Interspecific competition occurs when individuals of different species compete for the same resources, such as food, space, or light.' },
  { question: 'Which of the following is an example of post-translational modification?', options: ['5′ capping of mRNA', 'Splicing of introns', 'Phosphorylation of a protein', 'Polyadenylation of mRNA'], correctAnswer: 2, explanation: 'Phosphorylation is a post-translational modification where a phosphate group is added to a protein, often altering its activity, localization, or interactions.' },
  { question: 'In the endosymbiotic theory, mitochondria are believed to have originated from:', options: ['Archaea', 'Aerobic proteobacteria', 'Cyanobacteria', 'Fungi'], correctAnswer: 1, explanation: 'The endosymbiotic theory proposes that mitochondria evolved from aerobic alpha-proteobacteria that were engulfed by an ancestral eukaryotic cell.' },
  { question: 'Which of the following best describes the fluid mosaic model of the cell membrane?', options: ['A rigid phospholipid bilayer with fixed proteins', 'A dynamic phospholipid bilayer with laterally moving proteins', 'A single layer of phospholipids with peripheral proteins', 'A carbohydrate layer surrounding a lipid core'], correctAnswer: 1, explanation: 'The fluid mosaic model describes the membrane as a dynamic phospholipid bilayer with diverse proteins that can move laterally, creating a mosaic pattern.' },
  { question: 'What type of selection favors individuals at both extremes of a phenotypic range?', options: ['Stabilizing selection', 'Directional selection', 'Disruptive selection', 'Sexual selection'], correctAnswer: 2, explanation: 'Disruptive (diversifying) selection favors phenotypes at both extremes over intermediate phenotypes, potentially leading to speciation.' },
  { question: 'Which enzyme unwinds the DNA double helix during replication?', options: ['DNA ligase', 'Helicase', 'Primase', 'Topoisomerase'], correctAnswer: 1, explanation: 'Helicase unwinds the double-stranded DNA at the replication fork by breaking hydrogen bonds between complementary base pairs.' },
  { question: 'In C₄ photosynthesis, what enzyme initially fixes CO₂?', options: ['RuBisCO', 'PEP carboxylase', 'ATP synthase', 'NADP⁺ reductase'], correctAnswer: 1, explanation: 'In C₄ plants, PEP carboxylase fixes CO₂ into oxaloacetate (a 4-carbon compound) in mesophyll cells before it is shuttled to bundle sheath cells for the Calvin cycle.' },
  { question: 'A frameshift mutation would most likely result from:', options: ['Substitution of one nucleotide', 'Insertion of three nucleotides', 'Deletion of two nucleotides', 'A silent point mutation'], correctAnswer: 2, explanation: 'A deletion of two nucleotides shifts the reading frame of all downstream codons, altering the amino acid sequence. Insertions or deletions not in multiples of three cause frameshifts.' },
  { question: 'Which organelle is responsible for detoxifying harmful substances and metabolizing lipids?', options: ['Rough ER', 'Smooth ER', 'Golgi apparatus', 'Lysosome'], correctAnswer: 1, explanation: 'The smooth endoplasmic reticulum (smooth ER) is involved in lipid synthesis, detoxification of drugs and poisons, and carbohydrate metabolism.' },
  { question: 'What is the net ATP yield from one molecule of glucose through aerobic respiration?', options: ['2 ATP', '4 ATP', '30-32 ATP', '38 ATP'], correctAnswer: 2, explanation: 'Aerobic respiration yields approximately 30-32 ATP per glucose molecule through glycolysis, pyruvate oxidation, the citric acid cycle, and oxidative phosphorylation.' },
  { question: 'Which biogeochemical cycle does NOT have a significant atmospheric component?', options: ['Carbon cycle', 'Nitrogen cycle', 'Phosphorus cycle', 'Water cycle'], correctAnswer: 2, explanation: 'The phosphorus cycle is primarily sedimentary — phosphorus moves through rocks, soil, water, and organisms but does not have a significant gaseous phase in the atmosphere.' },
  { question: 'Which of the following is a density-dependent factor that limits population growth?', options: ['Wildfire', 'Drought', 'Disease', 'Volcanic eruption'], correctAnswer: 2, explanation: 'Disease is density-dependent because its impact increases as population density rises (more individuals in close contact facilitates transmission).' },
  { question: 'What is the function of restriction enzymes in molecular biology?', options: ['Join DNA fragments together', 'Cut DNA at specific recognition sequences', 'Copy DNA sequences', 'Translate mRNA into protein'], correctAnswer: 1, explanation: 'Restriction enzymes (restriction endonucleases) cut double-stranded DNA at specific palindromic sequences, making them essential tools in molecular cloning and genetic engineering.' },
  { question: 'Which of the following correctly describes an action potential?', options: ['Gradual depolarization without a threshold', 'An all-or-nothing electrical signal along a neuron', 'Continuous signal that varies in amplitude', 'A chemical signal between neurons'], correctAnswer: 1, explanation: 'An action potential is an all-or-nothing event: once the threshold voltage is reached, the neuron fires a full-amplitude signal that propagates along the axon.' },
  { question: 'Which nitrogenous base is found in RNA but not in DNA?', options: ['Adenine', 'Guanine', 'Uracil', 'Cytosine'], correctAnswer: 2, explanation: 'RNA contains uracil (U) in place of thymine (T) found in DNA. Uracil pairs with adenine via two hydrogen bonds.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface BioDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): BioDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'ap-biology', question: q, dayNumber: day }]
}
