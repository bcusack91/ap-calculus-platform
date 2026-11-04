/**
 * Entrance Quiz — Organ Systems (MCAT)
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so each part tests the lesson part of the same number).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Cardiovascular System'
const P2 = 'Respiratory System'
const P3 = 'Digestive System'
const P4 = 'Renal System (Kidneys)'
const P5 = 'Endocrine System'
const P6 = 'Nervous System'
const P7 = 'Immune System'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Cardiovascular System
  { id: 'mos-ent-1a', question: 'During ventricular systole, which valve keeps blood from flowing back from the left ventricle into the left atrium?', options: ['Pulmonary valve', 'Tricuspid valve', 'Mitral valve', 'Aortic valve'], correctIndex: 2, explanation: 'The mitral valve is the left atrioventricular valve; it closes as the ventricles contract (part of the first heart sound). The tricuspid guards the right side, and the semilunar valves open during systole to let blood leave the ventricles.', partNumber: 1, partTitle: P1 },
  { id: 'mos-ent-1b', question: 'A patient has a resting heart rate of 70 beats/min and a stroke volume of 70 mL. Cardiac output is about:', options: ['140 mL/min', '4,900 mL/min', '700 mL/min', '49,000 mL/min'], correctIndex: 1, explanation: 'Cardiac output = heart rate × stroke volume = 70 × 70 = 4,900 mL/min, about 4.9 L/min, a normal resting value. Adding the numbers gives 140, and the 700 and 49,000 figures misplace the decimal by a factor of 10.', partNumber: 1, partTitle: P1 },

  // Part 2 — Respiratory System
  { id: 'mos-ent-2a', question: 'The O$_2$–hemoglobin dissociation curve is sigmoidal because:', options: ['Each hemoglobin can carry only a single O$_2$', 'O$_2$ binds the globin chains, not the heme iron', 'Myoglobin passes O$_2$ to hemoglobin in blood', 'Each bound O$_2$ raises affinity for the next'], correctIndex: 3, explanation: 'Hemoglobin binds O$_2$ cooperatively: each O$_2$ that binds makes the remaining sites more likely to bind, giving the S shape. Each hemoglobin carries up to four O$_2$ on its heme irons, and myoglobin is a muscle protein with a hyperbolic curve.', partNumber: 2, partTitle: P2 },
  { id: 'mos-ent-2b', question: 'In a healthy person at rest, the breathing rate is set mainly by:', options: ['Arterial $P_{CO_2}$, sensed via CSF pH in the medulla', 'Arterial $P_{O_2}$, sensed by the carotid bodies', 'Blood glucose, sensed by medullary neurons', 'Hemoglobin saturation, sensed in the alveoli'], correctIndex: 0, explanation: 'Central chemoreceptors in the medulla respond to the CSF pH changes that track arterial $CO_2$, and this drives normal ventilation. Peripheral chemoreceptors respond strongly to low $P_{O_2}$ only once it falls well below normal (under about 60 mmHg), and glucose and alveolar saturation are not ventilatory signals.', partNumber: 2, partTitle: P2 },

  // Part 3 — Digestive System
  { id: 'mos-ent-3a', question: 'Pepsinogen is secreted by which gastric cells, and what activates it?', options: ['Parietal cells; activated by intrinsic factor', 'G cells; activated by circulating gastrin', 'Goblet cells; activated by enteropeptidase', 'Chief cells; activated by stomach acid (HCl)'], correctIndex: 3, explanation: 'Chief cells secrete the zymogen pepsinogen, which the low pH of gastric HCl converts to active pepsin. Parietal cells secrete HCl and intrinsic factor, G cells secrete gastrin, and enteropeptidase works in the duodenum to activate trypsinogen.', partNumber: 3, partTitle: P3 },
  { id: 'mos-ent-3b', question: 'Pancreatic amylase digests:', options: ['Starch into maltose and short sugars', 'Proteins into peptides and amino acids', 'Triglycerides into fatty acids and glycerol', 'Lactose into glucose and galactose'], correctIndex: 0, explanation: 'Amylase (from salivary glands and pancreas) breaks starch into maltose and other short carbohydrates. Proteins are digested by proteases such as trypsin, triglycerides by lipase, and lactose by the brush-border enzyme lactase.', partNumber: 3, partTitle: P3 },

  // Part 4 — Renal System (Kidneys)
  { id: 'mos-ent-4a', question: 'Which sequence traces filtrate through the nephron?', options: ['Glomerulus → DCT → loop of Henle → PCT → collecting duct', 'Collecting duct → PCT → loop of Henle → DCT → glomerulus', 'Glomerulus → PCT → loop of Henle → DCT → collecting duct', 'Glomerulus → loop of Henle → PCT → collecting duct → DCT'], correctIndex: 2, explanation: 'Plasma is filtered at the glomerulus into Bowman’s capsule, then flows through the proximal convoluted tubule, the loop of Henle, the distal convoluted tubule and finally the collecting duct. The other orders swap the proximal and distal tubules or run the path backward.', partNumber: 4, partTitle: P4 },
  { id: 'mos-ent-4b', question: 'The kidneys filter about 180 L of plasma a day but make only about 1.5 L of urine. Roughly what fraction of the filtrate is reabsorbed?', options: ['About 50%', 'About 75%', 'About 90%', 'About 99%'], correctIndex: 3, explanation: 'Only 1.5 of 180 L leaves as urine, under 1%, so about 99% of the filtrate is reabsorbed. Reabsorbing only 90% would still leave about 18 L of urine a day.', partNumber: 4, partTitle: P4 },

  // Part 5 — Endocrine System
  { id: 'mos-ent-5a', question: 'Blood glucose rises after a meal. Which pancreatic cells and hormone bring it back down?', options: ['Alpha cells, releasing glucagon to drive glycogenolysis', 'Beta cells, releasing insulin to drive glucose uptake', 'Delta cells, releasing somatostatin to raise insulin', 'Beta cells, releasing glucagon to drive gluconeogenesis'], correctIndex: 1, explanation: 'Beta cells release insulin, which promotes glucose uptake (GLUT4 in muscle and fat) and glycogen storage. Glucagon comes from alpha cells and raises glucose during fasting, and somatostatin inhibits rather than raises insulin release.', partNumber: 5, partTitle: P5 },
  { id: 'mos-ent-5b', question: 'Which hormone raises blood Ca$^{2+}$, partly by stimulating bone resorption?', options: ['Calcitonin', 'Parathyroid hormone', 'Aldosterone', 'Antidiuretic hormone'], correctIndex: 1, explanation: 'Parathyroid hormone raises blood calcium by increasing bone resorption, renal calcium reabsorption and vitamin D activation. Calcitonin has the opposite effect and lowers calcium, aldosterone regulates $Na^{+}$ and $K^{+}$, and antidiuretic hormone regulates water reabsorption.', partNumber: 5, partTitle: P5 },

  // Part 6 — Nervous System
  { id: 'mos-ent-6a', question: "The rapid depolarizing phase of a neuron's action potential is caused by:", options: ['Efflux of $K^{+}$ through voltage-gated $K^{+}$ channels', 'Influx of $Ca^{2+}$ through NMDA receptor channels', 'Influx of $Na^{+}$ through voltage-gated $Na^{+}$ channels', 'Efflux of $Cl^{-}$ through ligand-gated $Cl^{-}$ channels'], correctIndex: 2, explanation: 'At threshold, voltage-gated $Na^{+}$ channels open and $Na^{+}$ rushes in, driving the membrane toward $E_{Na}$. $K^{+}$ efflux causes repolarization, $Ca^{2+}$ entry at NMDA receptors is a postsynaptic event, and $Cl^{-}$ flow through ligand-gated channels is inhibitory.', partNumber: 6, partTitle: P6 },
  { id: 'mos-ent-6b', question: 'Myelinated axons conduct action potentials faster than unmyelinated axons of the same size mainly because:', options: ['The impulse jumps from one node of Ranvier to the next', 'Myelin pumps $Na^{+}$ into the axon at each internode', 'Myelin holds the resting potential right at threshold', 'Myelinated axons have no refractory period at all'], correctIndex: 0, explanation: 'Myelin insulates the axon, so the action potential regenerates only at the gaps (nodes of Ranvier) and effectively jumps between them: saltatory conduction. Myelin is not a pump and does not set the resting potential, and every patch of excitable membrane, myelinated or not, has a refractory period.', partNumber: 6, partTitle: P6 },

  // Part 7 — Immune System
  { id: 'mos-ent-7a', question: 'Which cells secrete antibodies during a humoral immune response?', options: ['Plasma cells (from B cells)', 'Cytotoxic $CD8^{+}$ T cells', 'Helper $CD4^{+}$ T cells', 'Natural killer (NK) cells'], correctIndex: 0, explanation: 'Activated B cells differentiate into plasma cells, which secrete antibodies. Cytotoxic T cells kill infected cells directly, helper T cells release cytokines that activate B and T cells, and NK cells are innate killers of cells lacking MHC I.', partNumber: 7, partTitle: P7 },
  { id: 'mos-ent-7b', question: 'Which cells display MHC class II molecules?', options: ['Every nucleated cell in the body', 'Dendritic cells, macrophages, B cells', 'Cytotoxic T cells and NK cells only', 'Neutrophils, platelets and red blood cells'], correctIndex: 1, explanation: 'MHC II is found on professional antigen-presenting cells (dendritic cells, macrophages and B cells), which show exogenous antigen to $CD4^{+}$ helper T cells. MHC I, not MHC II, is on every nucleated cell, and red blood cells have no nucleus and no MHC.', partNumber: 7, partTitle: P7 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
