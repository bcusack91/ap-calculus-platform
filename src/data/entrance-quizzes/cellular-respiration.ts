/**
 * Entrance Quiz — Cellular Respiration (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'cr-ent-1a', question: 'Which equation correctly summarizes aerobic cellular respiration?', options: ['$C_{6}H_{12}O_{6}$ + $6O_{2}$ → $6CO_{2}$ + $6H_{2}O$ + ATP', '$6CO_{2}$ + $6H_{2}O$ → $C_{6}H_{12}O_{6}$ + $6O_{2}$', '$C_{6}H_{12}O_{6}$ → $2C_{2}H_{5}OH$ + $2CO_{2}$', '$2H_{2}O$ → $2H_{2}$ + $O_{2}$'], correctIndex: 0, explanation: 'Aerobic cellular respiration breaks down glucose $(C_{6}H_{12}O_{6})$ using oxygen $(6O_{2})$ to produce carbon dioxide $(6CO_{2})$, water $(6H_{2}O)$, and ATP energy. The second option is photosynthesis in reverse.', partNumber: 1, partTitle: 'Overview of Cell Respiration' },
  { id: 'cr-ent-1b', question: 'Cellular respiration is classified as which type of metabolic process?', options: ['Anabolic — it builds complex molecules from simpler ones', 'Catabolic — it breaks down glucose to release energy', 'Photosynthetic — it uses light energy to make glucose', 'Chemosynthetic — it uses inorganic chemicals as energy'], correctIndex: 1, explanation: 'Cellular respiration is catabolic because it breaks down the complex molecule glucose into simpler products $(CO_{2} and H_{2}O)$, releasing the stored energy as ATP in the process.', partNumber: 1, partTitle: 'Overview of Cell Respiration' },

  // Part 2
  { id: 'cr-ent-2a', question: 'Where does glycolysis occur, and what is its net ATP yield per glucose molecule?', options: ['Mitochondrial matrix; 36 ATP', 'Cytoplasm; 2 ATP and 2 NADH', 'Inner mitochondrial membrane; 4 ATP', 'Nucleus; 2 ATP'], correctIndex: 1, explanation: 'Glycolysis takes place in the cytoplasm and produces a net yield of 2 ATP and 2 NADH per glucose molecule. It splits one 6-carbon glucose into two 3-carbon pyruvate molecules.', partNumber: 2, partTitle: 'Glycolysis' },
  { id: 'cr-ent-2b', question: 'Why is glycolysis considered an anaerobic process?', options: ['It produces oxygen as a byproduct', 'It requires carbon dioxide to proceed', 'It does not require oxygen to occur', 'It can only happen in the absence of glucose'], correctIndex: 2, explanation: 'Glycolysis is anaerobic because it does not require oxygen. It can proceed whether oxygen is present or absent, which is why it occurs in both aerobic respiration and fermentation.', partNumber: 2, partTitle: 'Glycolysis' },

  // Part 3
  { id: 'cr-ent-3a', question: 'What happens during pyruvate oxidation?', options: ['Glucose is split into two pyruvate molecules', 'Pyruvate is converted to acetyl-CoA, releasing $CO_{2}$ and producing NADH', 'Pyruvate is converted directly to ATP', 'Pyruvate is transported to the thylakoid membrane'], correctIndex: 1, explanation: 'In the mitochondrial matrix, each pyruvate is oxidized: it loses a carbon as $CO_{2}$, is reduced to form NADH, and the remaining 2-carbon fragment joins coenzyme A to form acetyl-CoA.', partNumber: 3, partTitle: 'Pyruvate Oxidation' },
  { id: 'cr-ent-3b', question: 'Pyruvate oxidation serves as a critical link between which two stages of cellular respiration?', options: ['Light reactions and Calvin cycle', 'Glycolysis and the citric acid (Krebs) cycle', 'Oxidative phosphorylation and fermentation', 'The citric acid cycle and the electron transport chain'], correctIndex: 1, explanation: 'Pyruvate oxidation connects glycolysis (which produces pyruvate in the cytoplasm) to the Krebs cycle (which uses acetyl-CoA in the mitochondrial matrix), bridging the anaerobic and aerobic stages.', partNumber: 3, partTitle: 'Pyruvate Oxidation' },

  // Part 4
  { id: 'cr-ent-4a', question: 'What are the primary products of the citric acid (Krebs) cycle?', options: ['Glucose and oxygen', 'Mostly electron carriers: NADH and $FADH_{2}$', 'Large quantities of ATP only', 'Pyruvate and acetyl-CoA'], correctIndex: 1, explanation: 'The Krebs cycle primarily generates electron carriers (NADH and $FADH_{2}$) that will donate electrons to the ETC. While it does produce some ATP (GTP), its main role is to harvest high-energy electrons.', partNumber: 4, partTitle: 'Citric Acid Cycle' },
  { id: 'cr-ent-4b', question: 'Per single turn of the citric acid cycle, what is produced?', options: ['3 NADH, 1 $FADH_{2}$, 1 ATP (or GTP), and 2 $CO_{2}$', '1 NADH, 3 $FADH_{2}$, 2 ATP, and 1 $CO_{2}$', '6 NADH, 2 $FADH_{2}$, 4 ATP, and 6 $CO_{2}$', '2 NADH, 2 $FADH_{2}$, 2 ATP, and 4 $CO_{2}$'], correctIndex: 0, explanation: 'Each turn of the Krebs cycle produces 3 NADH, 1 $FADH_{2}$, 1 ATP (via GTP), and releases 2 $CO_{2}$. Since each glucose yields 2 acetyl-CoA, the cycle turns twice per glucose.', partNumber: 4, partTitle: 'Citric Acid Cycle' },

  // Part 5
  { id: 'cr-ent-5a', question: 'Where does the electron transport chain (ETC) occur, and what is the final electron acceptor?', options: ['Outer mitochondrial membrane; NADH is the final acceptor', 'Inner mitochondrial membrane; oxygen $(O_{2})$ is the final electron acceptor', 'Cytoplasm; carbon dioxide is the final acceptor', 'Thylakoid membrane; water is the final acceptor'], correctIndex: 1, explanation: 'The ETC is embedded in the inner mitochondrial membrane. Electrons pass through protein complexes and ultimately reduce $O_{2}$ to form $H_{2}O$. Without oxygen, the chain cannot function.', partNumber: 5, partTitle: 'Oxidative Phosphorylation' },
  { id: 'cr-ent-5b', question: 'How does chemiosmosis generate ATP during oxidative phosphorylation?', options: ['ATP synthase pumps protons out of the matrix', '$H^{+}$ ions flow down their concentration gradient through ATP synthase, driving ATP production', 'Electrons directly bond to ADP to form ATP', 'Oxygen molecules provide energy to phosphorylate ADP'], correctIndex: 1, explanation: 'The ETC pumps $H^{+}$ ions into the intermembrane space, creating a proton gradient. $H^{+}$ flows back into the matrix through ATP synthase, and this flow (chemiosmosis) provides the energy to phosphorylate ADP into ATP (~26–28 ATP per glucose).', partNumber: 5, partTitle: 'Oxidative Phosphorylation' },

  // Part 6
  { id: 'cr-ent-6a', question: 'Approximately how many total ATP molecules are produced from the complete oxidation of one glucose molecule?', options: ['2 ATP', '4 ATP', '30–32 ATP', '100 ATP'], correctIndex: 2, explanation: 'Complete aerobic respiration of one glucose yields approximately 30–32 ATP total: 2 from glycolysis, 2 from the Krebs cycle, and ~26–28 from oxidative phosphorylation.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cr-ent-6b', question: 'Cyanide blocks Complex IV of the electron transport chain. What is the predicted effect?', options: ['Glycolysis speeds up to compensate', 'Electrons cannot flow through the ETC, the proton gradient collapses, and ATP production by ATP synthase stops', 'The Krebs cycle runs in reverse', 'Oxygen production increases dramatically'], correctIndex: 1, explanation: 'Blocking Complex IV prevents electrons from reaching $O_{2}$, halting electron flow entirely. Without electron flow, protons are not pumped, the gradient dissipates, and ATP synthase cannot produce ATP via chemiosmosis.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7
  { id: 'cr-ent-7a', question: 'What is the purpose of fermentation when oxygen is unavailable?', options: ['To produce large amounts of ATP', 'To regenerate $NAD^{+}$ so glycolysis can continue', 'To completely oxidize glucose', 'To convert ADP to ATP using the ETC'], correctIndex: 1, explanation: 'Fermentation (lactic acid or alcoholic) does not produce additional ATP. Its key function is regenerating $NAD^{+}$ from NADH so that glycolysis—the only ATP-producing pathway available without $O_{2}$—can continue.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'cr-ent-7b', question: 'Which stage of cellular respiration produces the most ATP?', options: ['Glycolysis', 'Pyruvate oxidation', 'The citric acid cycle', 'Oxidative phosphorylation'], correctIndex: 3, explanation: 'Oxidative phosphorylation (ETC + chemiosmosis) produces approximately 26–28 of the 30–32 total ATP per glucose, far more than substrate-level phosphorylation in glycolysis or the Krebs cycle.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Overview of Cell Respiration' },
    { partNumber: 2, partTitle: 'Glycolysis' },
    { partNumber: 3, partTitle: 'Pyruvate Oxidation' },
    { partNumber: 4, partTitle: 'Citric Acid Cycle' },
    { partNumber: 5, partTitle: 'Oxidative Phosphorylation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
