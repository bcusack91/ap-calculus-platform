/**
 * Entrance Quiz — Fitness & Environment (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'fe-ent-1a', question: 'In biology, what does "fitness" refer to?', options: ['Physical strength and endurance', 'An organism\'s reproductive success — the ability to pass on genes to the next generation', 'The speed at which an organism can run', 'How long an organism lives'], correctIndex: 1, explanation: 'Biological fitness is measured by reproductive success — the number of viable, fertile offspring an organism produces. It has nothing to do with physical strength or athletic ability.', partNumber: 1, partTitle: 'Natural Selection & Fitness' },
  { id: 'fe-ent-1b', question: 'Natural selection acts directly on which level?', options: ['Genotypes', 'Allele frequencies', 'Phenotypes', 'DNA sequences'], correctIndex: 2, explanation: 'Natural selection acts on phenotypes (observable traits) because the environment interacts with what organisms look like and how they behave, not directly with their DNA. Phenotypes that enhance survival and reproduction are selected for.', partNumber: 1, partTitle: 'Natural Selection & Fitness' },

  // Part 2
  { id: 'fe-ent-2a', question: 'What is an adaptation in the biological sense?', options: ['Any change an organism makes during its lifetime', 'A heritable trait that increases an organism\'s survival and reproduction in a specific environment', 'A temporary behavioral response to danger', 'A mutation that always harms the organism'], correctIndex: 1, explanation: 'An adaptation is a heritable trait shaped by natural selection that increases fitness in a particular environment. It is not an individual\'s learned behavior or short-term adjustment.', partNumber: 2, partTitle: 'Adaptation' },
  { id: 'fe-ent-2b', question: 'Which of the following is an example of a physiological adaptation?', options: ['A bird building a nest in a sheltered location', 'Antifreeze proteins in Arctic fish that prevent blood from freezing', 'A lizard basking on a rock to warm up', 'A moth that resembles tree bark'], correctIndex: 1, explanation: 'Antifreeze proteins are a physiological adaptation — an internal biochemical mechanism that enhances survival. Nest building is behavioral, basking is also behavioral, and bark resemblance is a structural adaptation.', partNumber: 2, partTitle: 'Adaptation' },

  // Part 3
  { id: 'fe-ent-3a', question: 'What is phenotypic plasticity?', options: ['The inability of an organism to change in response to its environment', 'The ability of a single genotype to produce different phenotypes depending on environmental conditions', 'A mutation that changes the phenotype permanently', 'The process by which genes are shuffled during meiosis'], correctIndex: 1, explanation: 'Phenotypic plasticity allows one genotype to produce different phenotypes in response to different environmental conditions, enabling organisms to adjust to variable environments without genetic changes.', partNumber: 3, partTitle: 'Phenotypic Plasticity' },
  { id: 'fe-ent-3b', question: 'A plant with the same genotype grows taller in shade than in direct sunlight. This is an example of:', options: ['A point mutation', 'Genetic drift', 'Phenotypic plasticity', 'Speciation'], correctIndex: 2, explanation: 'The plant has the same DNA in both conditions, but its phenotype (height) differs based on the environment. This is a classic example of phenotypic plasticity — the environment influences gene expression and the resulting trait.', partNumber: 3, partTitle: 'Phenotypic Plasticity' },

  // Part 4
  { id: 'fe-ent-4a', question: 'What is a biological trade-off?', options: ['A situation where gaining an advantage in one trait comes at a cost to another trait', 'An exchange of genetic material between two organisms', 'A type of mutualistic symbiosis', 'The process of organisms trading food resources'], correctIndex: 0, explanation: 'Trade-offs occur because organisms have limited energy and resources. Investing energy in one function (e.g., reproduction) reduces energy available for another (e.g., immune defense or growth).', partNumber: 4, partTitle: 'Trade-offs' },
  { id: 'fe-ent-4b', question: 'How do r-selected and K-selected species differ in reproductive strategy?', options: ['r-selected species have long lifespans; K-selected have short lifespans', 'r-selected species produce many offspring with little parental care; K-selected produce few offspring with more parental investment', 'r-selected species are always larger than K-selected species', 'There is no meaningful difference between them'], correctIndex: 1, explanation: 'r-selected species (e.g., insects, bacteria) maximize reproductive rate with many offspring and minimal care. K-selected species (e.g., elephants, whales) invest heavily in fewer offspring, increasing each one\'s survival probability.', partNumber: 4, partTitle: 'Trade-offs' },

  // Part 5
  { id: 'fe-ent-5a', question: 'What creates selection pressures on a population?', options: ['Only abiotic factors like temperature and rainfall', 'Only biotic factors like predation and competition', 'Both biotic and abiotic environmental variation', 'Exclusively random chance events'], correctIndex: 2, explanation: 'Selection pressures arise from both biotic factors (predators, parasites, competition, mates) and abiotic factors (temperature, water availability, sunlight). Together, they determine which phenotypes have higher fitness.', partNumber: 5, partTitle: 'Environmental Variation' },
  { id: 'fe-ent-5b', question: 'Why do heterogeneous (varied) environments tend to maintain greater genetic diversity?', options: ['Because mutations occur more frequently in varied environments', 'Because different conditions favor different alleles, so no single genotype is universally superior', 'Because organisms in varied environments do not reproduce', 'Because gene flow is always absent in varied environments'], correctIndex: 1, explanation: 'In heterogeneous environments, different conditions in different patches favor different traits. This balancing selection maintains multiple alleles because no single genotype has the highest fitness everywhere.', partNumber: 5, partTitle: 'Environmental Variation' },

  // Part 6
  { id: 'fe-ent-6a', question: 'During a severe drought, all small-beaked finches on an island die because they cannot crack the only available hard seeds. What happens to the beak size distribution?', options: ['It shifts toward smaller beaks', 'It remains unchanged', 'It shifts toward larger beaks (directional selection)', 'All finches go extinct immediately'], correctIndex: 2, explanation: 'This is directional selection: the environmental pressure (drought → only hard seeds) selects against small beaks. Survivors with larger beaks reproduce, shifting the population\'s beak size distribution toward larger beaks.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'fe-ent-6b', question: 'Why doesn\'t natural selection produce "perfect" organisms?', options: ['Because mutations only cause harmful changes', 'Because of constraints from existing anatomy, trade-offs, and constantly changing environments', 'Because organisms choose not to evolve', 'Because all organisms are already perfectly adapted'], correctIndex: 1, explanation: 'Natural selection cannot produce perfection because: (1) evolution works on existing structures (historical constraints), (2) trade-offs limit simultaneous optimization of all traits, and (3) environments constantly change, so today\'s optimum may not be tomorrow\'s.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'fe-ent-7a', question: 'A trait that increases fitness in a desert environment may decrease fitness in a tropical rainforest. This illustrates that:', options: ['Fitness is absolute and universal across all environments', 'Fitness is relative to the specific environment in which an organism lives', 'Organisms can choose which environment to evolve for', 'All traits are equally advantageous everywhere'], correctIndex: 1, explanation: 'Fitness is always relative to the environment. A trait like water-conserving thick skin is advantageous in a desert but may be unnecessary or costly in a humid rainforest. Context determines the value of a trait.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'fe-ent-7b', question: 'AP Biology frequently tests your ability to connect fitness to evidence. Which skill is most important?', options: ['Memorizing every species\' habitat', 'Analyzing data from experiments or field observations to determine which traits confer higher fitness', 'Drawing organisms from memory', 'Listing all possible mutations in a genome'], correctIndex: 1, explanation: 'AP Bio emphasizes scientific practices: interpreting data, analyzing experiments, and using evidence to support claims about fitness and natural selection. Data analysis skills are essential for the exam.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Natural Selection & Fitness' },
    { partNumber: 2, partTitle: 'Adaptation' },
    { partNumber: 3, partTitle: 'Phenotypic Plasticity' },
    { partNumber: 4, partTitle: 'Trade-offs' },
    { partNumber: 5, partTitle: 'Environmental Variation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
