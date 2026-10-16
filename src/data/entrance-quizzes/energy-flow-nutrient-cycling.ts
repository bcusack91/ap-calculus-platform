/**
 * Entrance Quiz — Energy Flow & Nutrient Cycling (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Autotrophs, Heterotrophs and Energy Capture (GPP from NPP, chemoautotrophs)
 *  2 — Organism Energetics (mass-specific metabolic rate, ectotherm energy needs)
 *  3 — Food Webs, Trophic Efficiency and Pyramids (efficiencies from data, food-web arrows)
 *  4 — Carbon and Water Cycles (runoff after clearing, carbon reservoirs)
 *  5 — Nitrogen and Phosphorus Cycles (ammonification, eutrophication sequence)
 *  6 — AP Exam Practice: Energy and Matter Data (light and dark bottles, replicates)
 *  7 — Synthesis Review (limiting nutrients, fixation vs nitrification)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Autotrophs, Heterotrophs and Energy Capture
  {
    id: 'befn-ent-1a',
    question:
      'The producers in a marsh store 1,800 kJ/m²/yr as net primary production and use 2,700 kJ/m²/yr in their own cellular respiration. What is their gross primary production?',
    options: [
      '900 kJ/m²/yr',
      '4,500 kJ/m²/yr',
      '1,800 kJ/m²/yr',
      '2,700 kJ/m²/yr',
    ],
    correctIndex: 1,
    explanation:
      'NPP = GPP − R, so GPP = NPP + R = 1,800 + 2,700 = 4,500 kJ/m²/yr. Subtracting gives 900, and 1,800 is the NPP itself.',
    partNumber: 1,
    partTitle: 'Autotrophs, Heterotrophs and Energy Capture',
  },
  {
    id: 'befn-ent-1b',
    question:
      'Which of these organisms is a chemoautotroph?',
    options: [
      'A fungus that digests a fallen log',
      'A cyanobacterium that uses light to fix $CO_2$',
      'A bacterium that oxidizes ammonium to fix $CO_2$',
      'A tubeworm that houses bacteria inside its body',
    ],
    correctIndex: 2,
    explanation:
      'A chemoautotroph fixes $CO_2$ using energy from oxidizing inorganic molecules, as nitrifying bacteria do with ammonium. The cyanobacterium is a photoautotroph, the fungus is a heterotroph, and the tubeworm relies on its bacteria for food.',
    partNumber: 1,
    partTitle: 'Autotrophs, Heterotrophs and Energy Capture',
  },

  // Part 2: Organism Energetics
  {
    id: 'befn-ent-2a',
    question:
      'A 0.1-kg bird uses 40 kcal per day, and a 50-kg mammal uses 2,000 kcal per day. How do their metabolic rates per kilogram compare?',
    options: [
      'Per kilogram, the bird uses 10 times as much energy',
      'Per kilogram, the mammal uses 50 times as much energy',
      'Per kilogram, the two animals use the same amount',
      'Per kilogram, the bird uses 500 times as much energy',
    ],
    correctIndex: 0,
    explanation:
      'Bird: $40 \\div 0.1 = 400$ kcal/kg/day; mammal: $2{,}000 \\div 50 = 40$ kcal/kg/day, so the bird\'s rate per kilogram is 10 times higher. The mammal uses 50 times more energy in total, but mass-specific metabolic rate falls as body size rises.',
    partNumber: 2,
    partTitle: 'Organism Energetics',
  },
  {
    id: 'befn-ent-2b',
    question:
      'A python can go several weeks between meals, while a dog of the same body mass needs food every day. Which explanation is best supported?',
    options: [
      'The python digests its food more slowly, so each meal lasts longer',
      'The python stores all of its food as fat and never respires it',
      'The dog has a lower metabolic rate, so it must eat more often',
      'The python is an ectotherm and spends little food energy keeping warm',
    ],
    correctIndex: 3,
    explanation:
      'Endotherms such as dogs spend much of their energy budget on metabolic heat, while ectotherms get body heat from the environment and use far less energy. The dog has the higher metabolic rate, and the python still respires its stored fuel.',
    partNumber: 2,
    partTitle: 'Organism Energetics',
  },

  // Part 3: Food Webs, Trophic Efficiency and Pyramids
  {
    id: 'befn-ent-3a',
    question:
      'In a field, producers store 12,000 kJ/m²/yr, herbivores produce 960 kJ/m²/yr, and the carnivores that eat the herbivores produce 96 kJ/m²/yr. What are the two trophic efficiencies, in order?',
    options: [
      '8% from producers to herbivores, and then 10% to carnivores',
      '10% from producers to herbivores, then 8% to carnivores',
      '92% from producers to herbivores, then 90% to carnivores',
      '8% from producers to herbivores, then 0.8% to carnivores',
    ],
    correctIndex: 0,
    explanation:
      '$960 \\div 12{,}000 = 0.08$ (8%) and $96 \\div 960 = 0.10$ (10%). 92% and 90% are the fractions not passed on, and 0.8% compares the carnivores with the producers rather than with the herbivores.',
    partNumber: 3,
    partTitle: 'Food Webs, Trophic Efficiency and Pyramids',
  },
  {
    id: 'befn-ent-3b',
    question:
      'In a food web diagram, an arrow points from grass to a rabbit. What does the arrow show?',
    options: [
      'The rabbit provides energy to the grass',
      'The grass and the rabbit compete for space',
      'Energy passes from the grass to the rabbit',
      'The rabbit and the grass are the same trophic level',
    ],
    correctIndex: 2,
    explanation:
      'Food web arrows point from the food to the eater, the direction in which energy and matter move. Reversing the arrows is a common error.',
    partNumber: 3,
    partTitle: 'Food Webs, Trophic Efficiency and Pyramids',
  },

  // Part 4: Carbon and Water Cycles
  {
    id: 'befn-ent-4a',
    question:
      'After a hillside forest is clear-cut, more of the rain that falls runs off over the surface instead of soaking in. Which further effect is most likely?',
    options: [
      'More rain falls downwind, since more water flows to streams',
      'Groundwater recharge falls and erosion increases',
      'Transpiration rises, since the soil now holds more water',
      'Evaporation from the ocean stops in that region',
    ],
    correctIndex: 1,
    explanation:
      'Without roots and leaf litter to slow it, water runs off rather than infiltrating, so less recharges groundwater and more soil is carried away. Removing trees also cuts transpiration, which tends to reduce rainfall downwind.',
    partNumber: 4,
    partTitle: 'Carbon and Water Cycles',
  },
  {
    id: 'befn-ent-4b',
    question:
      'Which reservoir holds the largest amount of Earth\'s carbon but exchanges it with the other reservoirs most slowly?',
    options: [
      'The atmosphere, as carbon dioxide gas',
      'The surface ocean, as dissolved bicarbonate',
      'Living biomass, as organic molecules',
      'Sedimentary rock, such as limestone',
    ],
    correctIndex: 3,
    explanation:
      'Sedimentary rocks hold the most carbon, but it cycles over millions of years through burial, uplift and volcanic activity. The atmosphere, surface ocean and living biomass exchange carbon quickly.',
    partNumber: 4,
    partTitle: 'Carbon and Water Cycles',
  },

  // Part 5: Nitrogen and Phosphorus Cycles
  {
    id: 'befn-ent-5a',
    question:
      'Which process returns nitrogen from the proteins of dead organisms to the soil as ammonium?',
    options: [
      'Nitrogen fixation by bacteria in root nodules',
      'Ammonification by decomposers',
      'Denitrification by bacteria in waterlogged soil',
      'Nitrification of ammonium by chemoautotrophs',
    ],
    correctIndex: 1,
    explanation:
      'Decomposers break down organic nitrogen in dead matter and wastes into ammonium (ammonification). Fixation converts $N_2$ gas to ammonia, nitrification turns ammonium into nitrate, and denitrification returns nitrate to the air as $N_2$.',
    partNumber: 5,
    partTitle: 'Nitrogen and Phosphorus Cycles',
  },
  {
    id: 'befn-ent-5b',
    question:
      'Which sequence correctly describes how fertilizer runoff leads to fish deaths in a lake?',
    options: [
      'Runoff → algal bloom → algae die → decomposers use up $O_2$ → fish die',
      'Runoff → nutrients poison fish → algae grow on dead fish → $O_2$ falls',
      'Runoff → algal bloom → living algae use up all $O_2$ → fish die',
      'Runoff → decomposers die → algae stop growing → $O_2$ falls → fish die',
    ],
    correctIndex: 0,
    explanation:
      'Added nitrogen and phosphorus relieve nutrient limitation, so algae bloom. When the algae die, decomposers respire them aerobically and deplete dissolved oxygen, leaving deep water hypoxic. The nutrients are not directly toxic, and living algae release oxygen in daylight.',
    partNumber: 5,
    partTitle: 'Nitrogen and Phosphorus Cycles',
  },

  // Part 6: AP Exam Practice: Energy and Matter Data
  {
    id: 'befn-ent-6a',
    question:
      'In a light-bottle, dark-bottle test, dissolved $O_2$ starts at 8.2 mg/L in both bottles. After 24 hours the light bottle holds 9.0 mg/L and the dark bottle 7.5 mg/L. What are the respiration rate and the gross primary production?',
    options: [
      'Respiration 0.7 mg/L per day; GPP 1.5 mg/L per day',
      'Respiration 0.7 mg/L per day; GPP 0.8 mg/L per day',
      'Respiration 0.8 mg/L per day; GPP 1.5 mg/L per day',
      'Respiration 1.5 mg/L per day; GPP 0.7 mg/L per day',
    ],
    correctIndex: 0,
    explanation:
      'The dark bottle shows respiration only: $8.2 - 7.5 = 0.7$. The light bottle shows NPP: $9.0 - 8.2 = 0.8$. GPP = NPP + R = $0.8 + 0.7 = 1.5$ mg/L per day (the same as light minus dark). 0.8 is the NPP, not the GPP.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Energy and Matter Data',
  },
  {
    id: 'befn-ent-6b',
    question:
      'In a nutrient-enrichment experiment, students set up three identical tanks of lake water for each treatment instead of one. What is the main purpose of these replicates?',
    options: [
      'To make sure every tank receives exactly the same nutrient',
      'To serve as the control group for the whole experiment',
      'To keep a fluke in one container from deciding the result',
      'To change the independent variable three different ways',
    ],
    correctIndex: 2,
    explanation:
      'Replicates show whether a result is consistent rather than a fluke of one tank, so differences between treatments can be trusted. The control is the tank set with no added nutrient, and the treatments are what vary the independent variable.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Energy and Matter Data',
  },

  // Part 7: Synthesis Review
  {
    id: 'befn-ent-7a',
    question:
      'In a grassland where nitrogen limits plant growth, researchers add phosphorus but no nitrogen to some plots. What is the most likely effect on NPP in those plots?',
    options: [
      'NPP rises sharply, since any added nutrient increases growth',
      'NPP falls, since phosphorus is toxic to most grassland plants',
      'NPP doubles, since phosphorus replaces nitrogen in proteins',
      'NPP changes little, since nitrogen is still in short supply',
    ],
    correctIndex: 3,
    explanation:
      'A limiting nutrient is the one in shortest supply relative to need; adding a different nutrient does not relieve that limit. Phosphorus cannot substitute for the nitrogen in amino acids and nucleic acids.',
    partNumber: 7,
    partTitle: 'Synthesis Review',
  },
  {
    id: 'befn-ent-7b',
    question:
      'A student writes: "Nitrogen-fixing bacteria convert nitrogen gas directly into nitrate for plants." Which correction is accurate?',
    options: [
      'Fixation turns $N_2$ into nitrogen oxides that plants absorb from the air',
      'Fixation makes ammonia, and nitrifying bacteria then oxidize ammonium to nitrate',
      'Fixation returns nitrate to the air as $N_2$, the reverse of what was written',
      'Fixation is done by plants themselves, and bacteria only make nitrate',
    ],
    correctIndex: 1,
    explanation:
      'Nitrogen fixation converts $N_2$ to ammonia (ammonium in soil water); nitrifying chemoautotrophs then oxidize ammonium to nitrite and nitrate. Returning nitrogen to the air is denitrification.',
    partNumber: 7,
    partTitle: 'Synthesis Review',
  },
]

/**
 * Generate an entrance quiz for the energy-flow-nutrient-cycling topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Autotrophs, Heterotrophs and Energy Capture' },
    { partNumber: 2, partTitle: 'Organism Energetics' },
    { partNumber: 3, partTitle: 'Food Webs, Trophic Efficiency and Pyramids' },
    { partNumber: 4, partTitle: 'Carbon and Water Cycles' },
    { partNumber: 5, partTitle: 'Nitrogen and Phosphorus Cycles' },
    { partNumber: 6, partTitle: 'AP Exam Practice: Energy and Matter Data' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
