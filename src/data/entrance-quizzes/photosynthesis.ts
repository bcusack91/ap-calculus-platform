/**
 * Entrance Quiz — Photosynthesis (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'ps-ent-1a', question: 'Where do the light reactions of photosynthesis take place, and what are their products?', options: ['Thylakoid membranes; ATP, NADPH, and $O_{2}$', 'Stroma; glucose and $O_{2}$', 'Cytoplasm; ATP and $CO_{2}$', 'Inner mitochondrial membrane; NADH and $FADH_{2}$'], correctIndex: 0, explanation: 'The light reactions occur in the thylakoid membranes of chloroplasts. They use light energy to split water, releasing $O_{2}$, and produce ATP and NADPH that power the Calvin cycle.', partNumber: 1, partTitle: 'Light Reactions' },
  { id: 'ps-ent-1b', question: 'Which equation correctly represents the overall reaction of photosynthesis?', options: ['$C_{6}H_{12}O_{6}$ + $6O_{2}$ → $6CO_{2}$ + $6H_{2}O$', '$6CO_{2}$ + $6H_{2}O$ → $C_{6}H_{12}O_{6}$ + $6O_{2}$', '$2H_{2}O_{2}$ → $2H_{2}O$ + $O_{2}$', '$CO_{2}$ + $H_{2}O$ → $CH_{4}$ + $O_{2}$'], correctIndex: 1, explanation: 'Photosynthesis uses carbon dioxide and water, powered by light energy, to produce glucose and oxygen: $6CO_{2}$ + $6H_{2}O$ → $C_{6}H_{12}O_{6}$ + $6O_{2}$.', partNumber: 1, partTitle: 'Light Reactions' },

  // Part 2
  { id: 'ps-ent-2a', question: 'What is the role of Photosystem II (PSII) in the light reactions?', options: ['It fixes $CO_{2}$ into organic molecules', 'It splits water molecules, releasing electrons, $H^{+}$ ions, and $O_{2}$', 'It reduces NADP$ {}^{+}$ to NADPH', 'It synthesizes glucose from G3P'], correctIndex: 1, explanation: 'PSII absorbs light energy and uses it to split water (photolysis): $H_{2}O$ → $2H^{+}$ + $2e^{-}$ + $\\tfrac{1}{2} O_{2}$. The electrons replace those excited out of the PSII reaction center, and $O_{2}$ is released as a byproduct.', partNumber: 2, partTitle: 'Photosystems' },
  { id: 'ps-ent-2b', question: 'What do photosystems contain that allows them to capture light energy?', options: ['ATP synthase and electron carriers only', 'Chlorophyll and accessory pigments organized in antenna complexes', 'RuBisCO and other carbon-fixing enzymes', 'Glucose receptors that absorb solar radiation'], correctIndex: 1, explanation: 'Photosystems contain chlorophyll a, chlorophyll b, and accessory pigments (carotenoids, xanthophylls) arranged in antenna complexes that capture photons and funnel energy to the reaction center.', partNumber: 2, partTitle: 'Photosystems' },

  // Part 3
  { id: 'ps-ent-3a', question: 'In the Calvin cycle, what enzyme fixes $CO_{2}$ into an organic molecule?', options: ['ATP synthase', 'DNA polymerase', 'RuBisCO', 'Helicase'], correctIndex: 2, explanation: 'RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes carbon fixation in the Calvin cycle, combining $CO_{2}$ with RuBP (a 5-carbon sugar) to eventually produce G3P in the stroma.', partNumber: 3, partTitle: 'Calvin Cycle' },
  { id: 'ps-ent-3b', question: 'The Calvin cycle requires inputs from the light reactions. Which molecules does it use?', options: ['$O_{2}$ and glucose', 'ATP and NADPH', 'NADH and $FADH_{2}$', '$H_{2}O$ and $CO_{2}$ only'], correctIndex: 1, explanation: 'The Calvin cycle uses ATP (for energy) and NADPH (for reducing power) produced by the light reactions to fix $CO_{2}$ and synthesize G3P. Without the light reactions, the Calvin cycle cannot proceed.', partNumber: 3, partTitle: 'Calvin Cycle' },

  // Part 4
  { id: 'ps-ent-4a', question: 'How do C4 plants minimize photorespiration?', options: ['They close stomata during the day and open them at night', 'They fix $CO_{2}$ initially in mesophyll cells, then concentrate it in bundle-sheath cells for the Calvin cycle', 'They use a different final electron acceptor in the light reactions', 'They lack RuBisCO entirely'], correctIndex: 1, explanation: 'C4 plants use PEP carboxylase to fix $CO_{2}$ into a 4-carbon compound in mesophyll cells, then shuttle it to bundle-sheath cells where $CO_{2}$ is released at high concentration near RuBisCO, minimizing photorespiration.', partNumber: 4, partTitle: 'C3 vs C4 vs CAM' },
  { id: 'ps-ent-4b', question: 'What adaptation allows CAM plants to survive in arid environments?', options: ['They perform photosynthesis only in their roots', 'They open stomata at night to fix $CO_{2}$, reducing water loss during the day', 'They do not perform the Calvin cycle', 'They absorb water through their leaves instead of roots'], correctIndex: 1, explanation: 'CAM plants open stomata at night (when it is cooler and more humid) to take in $CO_{2}$ and store it as organic acids. During the day, stomata close to conserve water, and the stored $CO_{2}$ is released for the Calvin cycle.', partNumber: 4, partTitle: 'C3 vs C4 vs CAM' },

  // Part 5
  { id: 'ps-ent-5a', question: 'Which factors directly affect the rate of photosynthesis?', options: ['Light intensity, $CO_{2}$ concentration, and temperature', 'Oxygen concentration, nitrogen levels, and gravity', 'Soil pH, wind speed, and humidity only', 'ATP concentration, NADH levels, and glucose supply'], correctIndex: 0, explanation: 'The rate of photosynthesis is primarily influenced by light intensity (drives light reactions), $CO_{2}$ concentration (substrate for Calvin cycle), and temperature (affects enzyme activity, especially RuBisCO).', partNumber: 5, partTitle: 'Photosynthesis Factors' },
  { id: 'ps-ent-5b', question: 'Why do plants appear green?', options: ['Chlorophyll absorbs green light most efficiently', 'Chlorophyll absorbs red and blue light and reflects green light', 'Plant cell walls are naturally green', 'Green pigments are produced during cellular respiration'], correctIndex: 1, explanation: 'Chlorophyll absorbs light most strongly in the red (~680 nm) and blue (~430 nm) wavelengths. Green wavelengths are reflected or transmitted, which is why plants appear green to our eyes.', partNumber: 5, partTitle: 'Photosynthesis Factors' },

  // Part 6
  { id: 'ps-ent-6a', question: 'DCMU is a herbicide that blocks electron flow from Photosystem II. What would happen to a plant treated with DCMU?', options: ['The Calvin cycle would speed up', 'No $O_{2}$ would be produced and no NADPH would be generated', 'More glucose would be synthesized', 'Chemiosmosis would increase'], correctIndex: 1, explanation: 'Blocking electron flow from PSII stops water splitting (no $O_{2}$ released) and prevents electrons from reaching PSI, so NADP$ {}^{+}$ cannot be reduced to NADPH. Without NADPH (and reduced ATP production), the Calvin cycle also stops.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ps-ent-6b', question: 'Why does the rate of photosynthesis plateau at high light intensities?', options: ['The plant runs out of chlorophyll', 'Another factor (such as $CO_{2}$ concentration or enzyme capacity) becomes limiting', 'Light destroys the thylakoid membranes', 'Oxygen inhibits the light reactions at high intensity'], correctIndex: 1, explanation: 'At high light intensities, the light reactions produce ATP and NADPH faster than the Calvin cycle can use them. The rate plateaus because another factor—typically $CO_{2}$ availability or RuBisCO enzyme capacity—becomes the limiting factor.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'ps-ent-7a', question: 'How are photosynthesis and cellular respiration related?', options: ['They are identical processes occurring in different organelles', 'They are complementary: the products of one serve as reactants for the other', 'Photosynthesis occurs only in animals; respiration only in plants', 'They both require light to function'], correctIndex: 1, explanation: 'Photosynthesis produces glucose and $O_{2}$, which are used by cellular respiration. Respiration produces $CO_{2}$ and $H_{2}O$, which are used by photosynthesis. They are complementary metabolic pathways.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'ps-ent-7b', question: 'What do photosynthesis and cellular respiration have in common?', options: ['Both occur exclusively in chloroplasts', 'Both use an electron transport chain and chemiosmosis to produce ATP', 'Both require sunlight', 'Both produce glucose as a final product'], correctIndex: 1, explanation: 'Both photosynthesis (in thylakoid membranes) and cellular respiration (in the inner mitochondrial membrane) use electron transport chains and chemiosmosis ($H^{+}$ gradients driving ATP synthase) to produce ATP.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Light Reactions' },
    { partNumber: 2, partTitle: 'Photosystems' },
    { partNumber: 3, partTitle: 'Calvin Cycle' },
    { partNumber: 4, partTitle: 'C3 vs C4 vs CAM' },
    { partNumber: 5, partTitle: 'Photosynthesis Factors' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
