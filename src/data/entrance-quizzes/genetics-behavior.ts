/**
 * Entrance Quiz — Genetics & Behavior (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Nature, Nurture, and Their Interaction
  {
    id: 'gb-ent-1a',
    question: 'A fearless, highly active toddler keeps climbing the furniture, so her parents sign her up for gymnastics. Coaches praise her boldness, and over the years she becomes even more daring. Which idea does this best illustrate?',
    options: ['Inborn traits shape the experiences a child gets', 'Parenting alone determines a child\'s temperament', 'Genes fix a trait no matter what the setting is', 'A trait that runs in families must be genetic'],
    correctIndex: 0,
    explanation: 'Her inborn temperament led her parents to choose gymnastics and drew praise from coaches, and those experiences amplified the trait. Nature and nurture interacted rather than acting alone.',
    partNumber: 1,
    partTitle: 'Nature, Nurture, and Their Interaction',
  },
  {
    id: 'gb-ent-1b',
    question: 'A student notices that her mother, grandmother and aunt all love to cook and concludes that a talent for cooking must be inherited. What is the best critique of her reasoning?',
    options: ['A talent for cooking cannot be shaped by heredity', 'Only identical twins share genetic predispositions', 'Families pass down kitchens and habits, not just genes', 'Three women are enough to prove a genetic cause'],
    correctIndex: 2,
    explanation: 'Family members share homes, recipes and encouragement as well as genes, so family resemblance alone cannot show that a trait is genetic.',
    partNumber: 1,
    partTitle: 'Nature, Nurture, and Their Interaction',
  },

  // Part 2: The Evolutionary Perspective and the Misuse of Heredity
  {
    id: 'gb-ent-2a',
    question: 'Which explanation of widespread modern obesity uses the evolutionary perspective correctly?',
    options: ['Heavier people have always had more children', 'People learn to like sweets only from ads', 'Ancestral sweet cravings meet abundant food today', 'Selection recently produced new genes for overeating'],
    correctIndex: 2,
    explanation: 'A craving for sweet and fatty food helped ancestors get scarce calories. In today\'s environment of cheap, abundant food, the same evolved tendency contributes to obesity, a mismatch.',
    partNumber: 2,
    partTitle: 'The Evolutionary Perspective and the Misuse of Heredity',
  },
  {
    id: 'gb-ent-2b',
    question: 'Early-1900s eugenicists pointed to families in which poverty continued across several generations as proof that poverty was inherited. What was the central scientific error?',
    options: ['Ignoring that families also pass on living conditions', 'Using too few generations to estimate genetic fitness', 'Treating poverty as a behavior learned from parents', 'Relying on twin studies instead of family histories'],
    correctIndex: 0,
    explanation: 'Families share circumstances such as schooling, wealth and neighborhoods along with genes. Eugenicists ignored these environmental influences and treated social outcomes as fixed inheritance.',
    partNumber: 2,
    partTitle: 'The Evolutionary Perspective and the Misuse of Heredity',
  },

  // Part 3: Family, Twin, and Adoption Studies
  {
    id: 'gb-ent-3a',
    question: 'In a study of identical twins raised apart, records show that the adoption agency placed most twin pairs with families of similar income, religion and region. Why does this weaken the study\'s conclusions?',
    options: ['The twins no longer share most of their genes', 'Their homes may have been much alike', 'Income cannot affect personality in any way', 'It turns the study into a true experiment'],
    correctIndex: 1,
    explanation: 'Selective placement means the "different" homes were alike, so some of the twins\' similarity could come from similar environments rather than shared genes.',
    partNumber: 3,
    partTitle: 'Family, Twin, and Adoption Studies',
  },
  {
    id: 'gb-ent-3b',
    question: 'Researchers find that the risk of schizophrenia is higher in the parents and siblings of patients than in their cousins, and higher in cousins than in the general population. Which design is this, and what is its main limitation?',
    options: ['Twin study; identical twins may be treated more alike', 'Adoption study; adoptive homes vary less than others', 'Family study; closer kin also share more environment', 'Experiment; kinship was randomly assigned to people'],
    correctIndex: 2,
    explanation: 'Tracking risk by degree of relatedness is a family study. Close relatives usually share homes and stressors as well as genes, so the design cannot separate the two influences.',
    partNumber: 3,
    partTitle: 'Family, Twin, and Adoption Studies',
  },

  // Part 4: Reading Twin and Adoption Data
  {
    id: 'gb-ent-4a',
    question: 'In a practice study, 80 fraternal twin pairs have at least one twin with a disorder. In 12 of those pairs, both twins have it. What is the concordance rate?',
    options: ['12%', '20%', '80%', '15%'],
    correctIndex: 3,
    explanation: 'Concordance is the number of pairs in which both twins are affected divided by the number with at least one affected: 12 ÷ 80 = 0.15, or 15%.',
    partNumber: 4,
    partTitle: 'Reading Twin and Adoption Data',
  },
  {
    id: 'gb-ent-4b',
    question: 'Practice data for a personality trait show these correlations: identical twins raised together, .62; identical twins raised apart, .60; fraternal twins raised together, .30; adoptive siblings, .05. Which conclusion is best supported?',
    options: ['The shared home is the main source of similarity', 'Genes matter but a shared home adds little', 'The trait is 62 percent genetic in each twin', 'Genes play no role because r stays under 1.00'],
    correctIndex: 1,
    explanation: 'Identical twins are about twice as similar as fraternal twins, pointing to genetic influence. Identical twins raised apart are nearly as similar as those raised together, and adoptive siblings barely resemble each other, so the shared home adds little.',
    partNumber: 4,
    partTitle: 'Reading Twin and Adoption Data',
  },

  // Part 5: Heritability and Its Misreadings
  {
    id: 'gb-ent-5a',
    question: 'In Country A, nearly all children attend similar, well-funded schools. In Country B, schooling ranges from none at all to excellent. In which country would the heritability of reading scores most likely be higher?',
    options: ['Country B, where environments differ more', 'Country A, where environments differ less', 'Neither, since reading has no genetic basis', 'Both equally, since heritability is fixed'],
    correctIndex: 1,
    explanation: 'When environments are similar, fewer of the differences among children come from the environment, so a larger share is linked to genetic differences and heritability rises.',
    partNumber: 5,
    partTitle: 'Heritability and Its Misreadings',
  },
  {
    id: 'gb-ent-5b',
    question: 'Height is highly heritable in well-nourished populations, yet average height rose substantially in many countries during the 20th century. What does this show?',
    options: ['Height must actually have low heritability', 'Heritability applies only to psychological traits', 'Genes for height spread rapidly in that century', 'High heritability does not mean a trait is fixed'],
    correctIndex: 3,
    explanation: 'Heritability describes differences among people in a population, not the average level of a trait. Better nutrition raised average height even though height differences remain strongly linked to genes.',
    partNumber: 5,
    partTitle: 'Heritability and Its Misreadings',
  },

  // Part 6: AP Exam Practice: AAQ and EBQ
  {
    id: 'gb-ent-6a',
    question: 'Researchers gave 300 identical and 250 fraternal twin pairs, all raised together, a 30-item anxiety questionnaire and compared how closely co-twins\' scores were related. Which research method was used, and why?',
    options: ['An experiment, since twin type is the IV', 'A case study, since each pair is examined', 'A correlational study, since nothing is manipulated', 'A meta-analysis, since many pairs are combined'],
    correctIndex: 2,
    explanation: 'Twin type occurs naturally and cannot be randomly assigned, and the researchers only measured how closely scores were related. That makes a twin study correlational.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: AAQ and EBQ',
  },
  {
    id: 'gb-ent-6b',
    question: 'An EBQ source reports that adopted children\'s vocabulary scores correlate r = .30 with their biological mothers\' scores and r = .28 with how many hours their adoptive parents read aloud to them each week. Which explanation of this source is most accurate?',
    options: ['Vocabulary is 30 percent genetic in each child', 'Reading aloud is proven to cause vocabulary growth', 'The correlations are too weak to show any influence', 'The similar links point to genes and home'],
    correctIndex: 3,
    explanation: 'The child resembles the biological mother through genes alone and relates to adoptive reading through environment alone, and the two correlations are similar, so both influences appear to contribute. Correlations are not percentages and do not prove causation.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: AAQ and EBQ',
  },

  // Part 7: Synthesis Review: Heredity, Environment, and Evidence
  {
    id: 'gb-ent-7a',
    question: 'Infants in every culture studied become distressed when separated from caregivers. In twin studies, identical twins are more alike than fraternal twins in how intense that distress is. Which pairing best explains each finding?',
    options: ['Universal: learned norms; twin gap: shared home', 'Universal: evolved tendency; twin gap: genetic differences', 'Universal: eugenics; twin gap: selective placement', 'Universal: heritability; twin gap: random assignment'],
    correctIndex: 1,
    explanation: 'A behavior found across cultures fits an evolved, species-typical tendency that aided infant survival. Differences between individuals, shown by the identical-fraternal gap, point to genetic differences among people.',
    partNumber: 7,
    partTitle: 'Synthesis Review: Heredity, Environment, and Evidence',
  },
  {
    id: 'gb-ent-7b',
    question: 'A woman adopted at birth has a biological father with bipolar disorder. Raised in a warm, stable home, she stays well until her first year of college, when several severe stressors arrive at once and symptoms appear. Which explanation best fits?',
    options: ['An inherited vulnerability was triggered by events', 'Her adoptive home caused the illness through warmth', 'Her genes guaranteed the illness regardless of events', 'Heritability shows how much of her illness is genetic'],
    correctIndex: 0,
    explanation: 'An inherited vulnerability combined with heavy stress made the disorder more likely than either alone, the diathesis-stress idea. Heritability describes populations and cannot give one person\'s genetic share.',
    partNumber: 7,
    partTitle: 'Synthesis Review: Heredity, Environment, and Evidence',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Nature, Nurture, and Their Interaction' },
    { partNumber: 2, partTitle: 'The Evolutionary Perspective and the Misuse of Heredity' },
    { partNumber: 3, partTitle: 'Family, Twin, and Adoption Studies' },
    { partNumber: 4, partTitle: 'Reading Twin and Adoption Data' },
    { partNumber: 5, partTitle: 'Heritability and Its Misreadings' },
    { partNumber: 6, partTitle: 'AP Exam Practice: AAQ and EBQ' },
    { partNumber: 7, partTitle: 'Synthesis Review: Heredity, Environment, and Evidence' },
  ]
}
