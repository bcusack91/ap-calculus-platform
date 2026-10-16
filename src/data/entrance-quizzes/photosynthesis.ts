/**
 * Entrance Quiz — Photosynthesis (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Light Reactions (action spectra, light-reaction products)
 *  2 — Photosystems (electron flow backing up, water as electron donor)
 *  3 — Calvin Cycle (carbon bookkeeping, fate of fixed carbon)
 *  4 — Photosynthesis, Respiration, and the Carbon Cycle (ATP in roots, carbon budget)
 *  5 — Photosynthesis Factors (limiting factors, leaf disc assay)
 *  6 — Problem-Solving Workshop (labeling logic, net O2 over a day)
 *  7 — AP Review (tracing oxygen across organisms, CO2 drawdown)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Light Reactions
  {
    id: 'bps-ent-1a',
    question:
      'Chlorophyll extracted from an alga absorbs strongly at 450 nm and 680 nm but very little at 500 nm. The alga\'s action spectrum has peaks at 450 nm and 680 nm and a third peak at 500 nm. Which conclusion is best supported?',
    options: [
      'Light at 500 nm is reflected, which drives photosynthesis',
      'Another pigment absorbs 500 nm light and passes its energy along',
      'Chlorophyll absorbs best at 500 nm once it is inside living cells',
      'The 500 nm peak shows light can drive photosynthesis unabsorbed',
    ],
    correctIndex: 1,
    explanation:
      'Only absorbed light can drive photosynthesis. A peak in the action spectrum where chlorophyll absorbs little means some other pigment in the chloroplast absorbs that wavelength and contributes its energy. Reflected light does no work.',
    partNumber: 1,
    partTitle: 'Light Reactions',
  },
  {
    id: 'bps-ent-1b',
    question:
      'Isolated chloroplasts are lit and supplied with water, ADP, phosphate and $NADP^+$, but no $CO_2$. Which products will build up?',
    options: [
      'ATP, NADPH and $O_2$',
      'Glucose, ATP and $O_2$',
      'Sugar, NADPH and water',
      '$CO_2$, ATP and glucose',
    ],
    correctIndex: 0,
    explanation:
      'The light reactions use water, light, $NADP^+$, ADP and phosphate to make ATP, NADPH and $O_2$, and they can run without $CO_2$. With no $CO_2$, the Calvin cycle cannot make sugar, so ATP and NADPH accumulate.',
    partNumber: 1,
    partTitle: 'Light Reactions',
  },

  // Part 2: Photosystems
  {
    id: 'bps-ent-2a',
    question:
      'Lit chloroplasts are treated so that the Calvin cycle stops, and soon nearly all of their $NADP^+$ has been converted to NADPH. What happens next to $O_2$ release from these chloroplasts?',
    options: [
      'It rises, since electrons no longer need to reach $NADP^+$',
      'It stays steady, since water splitting needs only light',
      'It falls, since electrons back up and water splitting slows',
      'It rises, since the unused NADPH is broken down into $O_2$',
    ],
    correctIndex: 2,
    explanation:
      'Electrons flow from water through PSII, the chain and PSI to $NADP^+$. With no $NADP^+$ left to accept them, the carriers stay loaded, PSII cannot pass on new electrons, and water splitting (the source of $O_2$) slows.',
    partNumber: 2,
    partTitle: 'Photosystems',
  },
  {
    id: 'bps-ent-2b',
    question:
      'Some photosynthetic bacteria use hydrogen sulfide ($H_2S$) instead of water as their source of electrons, and they release sulfur instead of $O_2$. What does this comparison support about plant photosynthesis?',
    options: [
      'The $O_2$ released by plants comes from the $CO_2$ they fix',
      'Plants and these bacteria both get their electrons from $H_2S$',
      'The $O_2$ released by plants is made from water by the Calvin cycle',
      'The $O_2$ released by plants comes from the water they split',
    ],
    correctIndex: 3,
    explanation:
      'The waste product matches the electron donor: splitting $H_2S$ leaves sulfur, so splitting water at PSII must be what leaves $O_2$. The $O_2$ does not come from $CO_2$ or from the Calvin cycle.',
    partNumber: 2,
    partTitle: 'Photosystems',
  },

  // Part 3: Calvin Cycle
  {
    id: 'bps-ent-3a',
    question:
      'Each turn of the Calvin cycle fixes one $CO_2$. How many turns are needed to supply the carbon for 3 glucose molecules?',
    options: ['3', '6', '18', '36'],
    correctIndex: 2,
    explanation:
      'Each glucose has 6 carbons, so 3 glucose need 18 carbons, which means 18 $CO_2$ fixed in 18 turns. 6 turns make only one glucose.',
    partNumber: 3,
    partTitle: 'Calvin Cycle',
  },
  {
    id: 'bps-ent-3b',
    question:
      'Sugars made in a bean plant\'s leaves are later used to build amino acids in its developing seeds. Besides this carbon, what must the plant supply to make the amino acids?',
    options: [
      'Nitrogen absorbed from the soil',
      'Extra $O_2$ released by photosystem II',
      'Light that reaches the seeds directly',
      'Additional ATP carried in from the leaves',
    ],
    correctIndex: 0,
    explanation:
      'Calvin cycle sugars supply carbon skeletons, but amino acids also contain nitrogen, which plants take up from the soil. ATP is not shipped between organs; sugar is.',
    partNumber: 3,
    partTitle: 'Calvin Cycle',
  },

  // Part 4: Photosynthesis, Respiration, and the Carbon Cycle
  {
    id: 'bps-ent-4a',
    question:
      'Root cells of a carrot have mitochondria but no chloroplasts. Where does the ATP that powers these root cells come from?',
    options: [
      'ATP made in the leaves and carried to the roots in the phloem',
      'ATP absorbed directly from soil microbes living near the roots',
      'Calvin cycle reactions that the root cells run using soil $CO_2$',
      'Respiration of sugars that were made in the leaves and sent down',
    ],
    correctIndex: 3,
    explanation:
      'Leaves make sugar, which is transported to non-photosynthetic tissues; root cells then make their own ATP by cellular respiration in their mitochondria. ATP is used where it is made and is not exported between organs.',
    partNumber: 4,
    partTitle: 'Photosynthesis, Respiration, and the Carbon Cycle',
  },
  {
    id: 'bps-ent-4b',
    question:
      'In one year, photosynthesis in a forest fixes 1,000 g of carbon per square meter. Plant respiration releases 450 g, and animals and decomposers release 500 g. What is the forest\'s net carbon balance for the year?',
    options: [
      'It stores 50 g of carbon per square meter',
      'It releases 50 g of carbon per square meter',
      'It stores 550 g of carbon per square meter',
      'It stores 1,000 g of carbon per square meter',
    ],
    correctIndex: 0,
    explanation:
      'Carbon in minus carbon out: $1{,}000 - 450 - 500 = 50$ g per square meter stored. Subtracting only plant respiration gives 550, and ignoring respiration gives 1,000.',
    partNumber: 4,
    partTitle: 'Photosynthesis, Respiration, and the Carbon Cycle',
  },

  // Part 5: Photosynthesis Factors
  {
    id: 'bps-ent-5a',
    question:
      'Photosynthesis rates (relative units): at low $CO_2$, 5 at dim light and 6 at bright light; at high $CO_2$, 5 at dim light and 15 at bright light. Which conclusion is best supported?',
    options: [
      'Light limits the rate at low $CO_2$, since bright light raises it',
      '$CO_2$ limits the rate at low $CO_2$, so extra light helps little',
      'Temperature limits the rate, since dim and bright light give similar rates',
      '$CO_2$ limits the rate in dim light, since high $CO_2$ raises it there',
    ],
    correctIndex: 1,
    explanation:
      'At low $CO_2$, brighter light barely raises the rate (5 to 6), so $CO_2$ is the limiting factor. In dim light, raising $CO_2$ changes nothing (5 to 5), so light limits there. Once $CO_2$ is high, bright light triples the rate. The rate is set by whichever factor is in shortest supply.',
    partNumber: 5,
    partTitle: 'Photosynthesis Factors',
  },
  {
    id: 'bps-ent-5b',
    question:
      'In a leaf disc assay, discs float to the top in 6 minutes when a lamp is 10 cm away but take 20 minutes when it is 40 cm away. Which explanation is best supported?',
    options: [
      'The nearer lamp heats the water, so the discs absorb more $CO_2$',
      'The farther lamp gives more green light, which slows respiration',
      'Dimmer light makes the discs release $CO_2$, which sinks them',
      'Brighter light speeds $O_2$ production, so the discs rise sooner',
    ],
    correctIndex: 3,
    explanation:
      'Moving the lamp closer raises light intensity. Below saturation, more light speeds the light reactions, and the $O_2$ produced collects in the discs and makes them float sooner.',
    partNumber: 5,
    partTitle: 'Photosynthesis Factors',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bps-ent-6a',
    question:
      'Isolated chloroplast stroma (with no thylakoids) is kept in darkness and given ATP, NADPH and $^{14}CO_2$. Will radioactive sugar appear?',
    options: [
      'No, since carbon fixation needs light to strike the stroma',
      'No, since $O_2$ from photosystem II is required for fixation',
      'Yes, since the supplied carriers do the job light normally does',
      'Yes, because the radioactive label itself drives fixation',
    ],
    correctIndex: 2,
    explanation:
      'The Calvin cycle depends on light only indirectly, through the ATP and NADPH the light reactions supply. Provide those directly and the stroma can fix $CO_2$ into sugar in the dark.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bps-ent-6b',
    question:
      'A leaf\'s net $O_2$ production is +8 μmol/h in the light and −3 μmol/h in the dark. If it receives 10 hours of light and 14 hours of darkness, what is its net $O_2$ production for the whole day?',
    options: ['−42 μmol', '+38 μmol', '+80 μmol', '+122 μmol'],
    correctIndex: 1,
    explanation:
      'Light: $10 \\times 8 = 80$ μmol gained; dark: $14 \\times 3 = 42$ μmol used. Net = $80 - 42 = +38$ μmol. Ignoring the night gives 80, and adding the night loss gives 122.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bps-ent-7a',
    question:
      'An oxygen atom from water taken up by a plant\'s roots is released into the air as part of $O_2$. A person inhales that $O_2$ and uses it in cellular respiration. In which molecule does the oxygen atom end up?',
    options: [
      '$H_2O$ made at the end of the transport chain',
      '$CO_2$ released during the citric acid cycle',
      'Glucose stored in the person\'s liver cells',
      'ATP made by ATP synthase in the mitochondria',
    ],
    correctIndex: 0,
    explanation:
      'The plant splits water at PSII and releases its oxygen as $O_2$. In respiration, $O_2$ is the final electron acceptor and combines with electrons and $H^+$ to form water. The oxygen in exhaled $CO_2$ comes from food molecules, not from inhaled $O_2$.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bps-ent-7b',
    question:
      'A potted plant is sealed in a clear jar in bright light. The $CO_2$ in the jar falls from 400 ppm to 250 ppm and then stays at 250 ppm. Why does it stop falling?',
    options: [
      'The plant has stopped respiring because light is present',
      'The light reactions have used up all the water in the jar',
      'Photosynthesis has slowed to match respiration',
      'The Calvin cycle cannot run at all below 300 ppm of $CO_2$',
    ],
    correctIndex: 2,
    explanation:
      'As $CO_2$ falls, it limits the Calvin cycle until $CO_2$ uptake by photosynthesis equals $CO_2$ release by respiration, so the level holds steady. Plant cells keep respiring in the light, and fixation slows rather than stopping at a set threshold.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the photosynthesis topic.
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
    { partNumber: 1, partTitle: 'Light Reactions' },
    { partNumber: 2, partTitle: 'Photosystems' },
    { partNumber: 3, partTitle: 'Calvin Cycle' },
    { partNumber: 4, partTitle: 'Photosynthesis, Respiration, and the Carbon Cycle' },
    { partNumber: 5, partTitle: 'Photosynthesis Factors' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
