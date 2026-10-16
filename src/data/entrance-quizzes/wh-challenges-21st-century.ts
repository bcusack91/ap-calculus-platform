/**
 * Entrance Quiz — Challenges of the 21st Century (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson (scope ends in 2001).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whc-ent-1a',
    question: 'Which feature of the 1997 Kyoto Protocol best explains why it did little to slow worldwide greenhouse-gas emissions in its first years?',
    options: ['It set no binding limits on emissions for any country', 'It exempted developing nations, and the U.S. never ratified it', 'It banned CFCs rather than the gases that warm the planet', 'It applied only to the member states of the European Union'],
    correctIndex: 1,
    explanation: 'Kyoto set binding targets only for developed countries, so fast-growing China and India had none, and the largest emitter of the 1990s stayed out. It did set binding limits, CFCs were the Montreal Protocol\'s target, and it covered developed countries beyond Europe.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whc-ent-1b',
    question: 'Which factor best explains why the World Health Organization was able to declare smallpox eradicated in 1980?',
    options: ['The disease had died out on its own in the world\'s poorest regions', 'The disease infected only animals by the middle of the century', 'The United States carried out the campaign alone without the WHO', 'An effective vaccine and backing from both Cold War blocs'],
    correctIndex: 3,
    explanation: 'Smallpox was a single, clear target with a reliable vaccine, and both the United States and the Soviet Union supported the campaign. Vaccination, not natural decline, ended it, the effort was international, and smallpox was a human disease.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whc-ent-2a',
    question: 'The Aral Sea in Central Asia lost much of its area from the 1960s onward. Which development most directly caused this?',
    options: ['Rising sea levels that pushed salt water into the basin', 'Oil drilling by Western companies along the shoreline', 'Soviet irrigation that diverted its rivers to grow cotton', 'Earthquakes that opened cracks and drained the basin'],
    correctIndex: 2,
    explanation: 'Soviet planners diverted the Amu Darya and Syr Darya to irrigate cotton fields, so far less water reached the sea, a case of competition for fresh water. The other choices did not cause the shrinkage.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whc-ent-2b',
    question: 'Heart disease and Alzheimer\'s disease became more common causes of death in wealthy countries during the twentieth century mainly because',
    options: ['more people survived childhood and lived into old age', 'new viruses carried these diseases along air routes', 'antibiotics caused these illnesses as a side effect', 'poverty in wealthy countries rose steadily after 1945'],
    correctIndex: 0,
    explanation: 'Vaccines, antibiotics, and clean water let far more people reach old age, when such diseases of longevity appear. They are not spread by viruses, are not caused by antibiotics, and poverty did not rise steadily in wealthy countries.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whc-ent-3a',
    question: 'Which explanation best accounts for malaria remaining a major killer in sub-Saharan Africa through 2001?',
    options: ['No treatment for malaria had ever been discovered anywhere', 'Resistance to drugs and DDT in poor regions kept control weak', 'The disease had only recently reached Africa from the Americas', 'Mosquitoes in Africa could not be affected by any insecticide'],
    correctIndex: 1,
    explanation: 'Parasites grew resistant to drugs and mosquitoes to DDT, and poor health systems could not keep up, so malaria persisted as a disease of poverty. Treatments existed, malaria was long established in Africa, and insecticides had worked before resistance spread.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whc-ent-3b',
    question: 'Oral rehydration therapy, widely adopted from the 1970s, saved millions of children who had cholera or severe diarrhea mainly because it',
    options: ['required a hospital stay and an expensive intravenous drip', 'replaced the need for clean water in crowded cities', 'was a vaccine that ended cholera in every country by 1980', 'was a cheap salt-and-sugar solution families could use'],
    correctIndex: 3,
    explanation: 'A simple mixture of salt, sugar, and water replaced lost fluids at almost no cost, so it worked even where hospitals were scarce. It was not intravenous, not a vaccine, and did not remove the need for clean water.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  {
    id: 'whc-ent-4a',
    question: 'The 1984 gas leak at a Union Carbide pesticide plant in Bhopal, India, which killed thousands, became a symbol of',
    options: ['nuclear radiation spreading across national borders', 'industrial hazards falling on poorer communities', 'the success of global safety rules for chemical plants', 'deforestation caused by cattle ranching in the Amazon'],
    correctIndex: 1,
    explanation: 'A multinational\'s plant operating under weaker safety rules in a poorer country showed how global production could shift dangers onto vulnerable people. Radiation describes Chernobyl, the disaster exposed failed safety rules, and Amazon ranching is a separate case.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whc-ent-4b',
    question: 'India\'s Chipko movement (1973) and Kenya\'s Green Belt Movement (1977) are best used to challenge which claim?',
    options: ['Environmental activism began and stayed mainly in the West', 'Rural women played a part in protecting forests and land', 'Deforestation threatened the livelihoods of village families', 'Grassroots groups organized to resist commercial logging'],
    correctIndex: 0,
    explanation: 'Both movements began in the global South and were led largely by rural women, which undercuts the idea that environmentalism was a Western affair. The other claims are supported, not challenged, by these cases.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whc-ent-5a',
    question: 'The United Nations set up international courts for the former Yugoslavia in 1993 and for Rwanda in 1994. These courts best illustrate',
    options: ['the League of Nations\' revival under a new name', 'the end of national governments as the main actors', 'institutions adapting to wars fought inside states', 'superpower rivalry blocking all action at the UN'],
    correctIndex: 2,
    explanation: 'After the Cold War, the UN system expanded to deal with genocide and ethnic war within states. The League had been replaced in 1945, states remained the main actors, and the tribunals show the Security Council acting rather than blocked.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whc-ent-5b',
    question: 'Which change in environmental politics between the early 1900s and 2001 is most accurate?',
    options: ['Pollution seen as the price of progress became a subject of treaties', 'Governments regulated air pollution strictly before 1920 but stopped after 1945', 'Environmental concern faded as industrial production grew after 1945', 'Climate change was settled by a binding treaty that all nations ratified'],
    correctIndex: 0,
    explanation: 'Early industrial smoke was widely accepted, but by the late century treaties addressed ozone (1987) and climate (1992, 1997). Regulation grew rather than shrank after 1945, concern rose with Silent Spring and Stockholm, and climate change remained a subject of debate.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whc-ent-6a',
    question: 'A 1987 report by a UN commission chaired by Norway\'s prime minister defined "sustainable development" as meeting present needs without harming future generations\' ability to meet their own (paraphrased). The report\'s point of view is best described as that of',
    options: ['oil companies opposing any limits on production', 'grassroots activists calling for an end to economic growth', 'officials from rich and poorer states seeking a compromise', 'a single government defending its own industries'],
    correctIndex: 2,
    explanation: 'The Brundtland Commission brought together officials from developed and developing countries to reconcile growth in poorer nations with environmental protection. It was not an industry group, it did not reject growth, and it represented many governments.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whc-ent-6b',
    question: 'A 1990s statement by an oil-exporting government opposes binding limits on greenhouse gases. A historian using it should pay closest attention to',
    options: ['the country\'s economic stake in fossil fuels', 'the length of the statement and its date of release', 'whether the statement was written in English', 'the scientific training of the people who typed it'],
    correctIndex: 0,
    explanation: 'An economy that depends on oil exports has a direct interest in resisting emissions limits, which shapes the statement\'s argument. Length, language, and clerical details reveal little about its point of view.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whc-ent-7a',
    question: 'Al-Qaeda\'s 1998 bombings of the U.S. embassies in Kenya and Tanzania are best classified as an example of',
    options: ['a proxy war between Cold War superpowers', 'a revolt against European colonial rule', 'a war between two national armies', 'political violence by a non-state network'],
    correctIndex: 3,
    explanation: 'Al-Qaeda was a transnational network, not a state, that attacked civilians for political aims. The Cold War had ended, no national armies fought, and Kenya and Tanzania had been independent for decades.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whc-ent-7b',
    question: 'Which statement best describes continuity and change in world health between 1900 and 2001?',
    options: ['Infectious diseases vanished once antibiotics spread around the world', 'Life expectancy fell in every region as new diseases spread', 'New epidemics kept emerging even as vaccines wiped out smallpox', 'Major epidemics stopped after the influenza pandemic of 1918'],
    correctIndex: 2,
    explanation: 'Vaccines and antibiotics extended lives and smallpox was declared eradicated in 1980, yet new epidemics such as Ebola and HIV/AIDS continued to appear. Infectious disease did not vanish, life expectancy rose in most regions, and epidemics continued after 1918.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
