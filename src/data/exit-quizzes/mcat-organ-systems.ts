/**
 * MCAT Organ Systems, Anatomy & Physiology Exit Quiz
 */

import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'The sinoatrial (SA) node is located in:', options: ['Left ventricle', 'Right atrium', 'Left atrium', 'Right ventricle'], correctAnswer: 1, explanation: 'The SA node is located in the wall of the right atrium. It is the primary pacemaker of the heart, initiating each heartbeat.', difficulty: 'easy',
  },
  {
    question: 'Which hormone stimulates the reabsorption of water in the collecting duct of the nephron?', options: ['Aldosterone', 'ADH (vasopressin)', 'ANP', 'Cortisol'], correctAnswer: 1, explanation: 'ADH (antidiuretic hormone/vasopressin) increases water permeability of the collecting duct by inserting aquaporin-2 channels, promoting water reabsorption and concentrating urine.', difficulty: 'easy',
  },
  {
    question: 'The primary function of the large intestine is:', options: ['Protein digestion', 'Fat absorption', 'Water and electrolyte absorption', 'Carbohydrate digestion'], correctAnswer: 2, explanation: 'The large intestine (colon) primarily absorbs water and electrolytes from indigestible food matter and forms feces. Most nutrient absorption occurs in the small intestine.', difficulty: 'easy',
  },
  {
    question: 'Type I pneumocytes in the lungs are specialized for:', options: ['Mucus secretion', 'Surfactant production', 'Gas exchange', 'Immune defense'], correctAnswer: 2, explanation: 'Type I pneumocytes are thin, flat cells that make up ~95% of the alveolar surface area and are specialized for gas exchange. Type II pneumocytes produce surfactant.', difficulty: 'medium',
  },
  {
    question: 'Which part of the brain is primarily responsible for coordinating voluntary movement and balance?', options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'], correctAnswer: 1, explanation: 'The cerebellum coordinates voluntary movements, balance, posture, and motor learning. The cerebrum handles higher cognitive functions, while the medulla controls autonomic functions.', difficulty: 'easy',
  },
  {
    question: 'Pepsin is activated in the stomach by:', options: ['Bile salts', 'HCl (low pH)', 'Pancreatic enzymes', 'Alkaline conditions'], correctAnswer: 1, explanation: 'HCl lowers stomach pH to ~2, which converts inactive pepsinogen to active pepsin. Pepsin is a protease that begins protein digestion in the stomach.', difficulty: 'easy',
  },
  {
    question: 'The glomerular filtration rate (GFR) is primarily driven by:', options: ['Active transport', 'Osmotic pressure', 'Hydrostatic pressure in the glomerulus', 'Secretion by tubular cells'], correctAnswer: 2, explanation: 'GFR is driven by the high hydrostatic pressure in the glomerular capillaries, forcing plasma filtrate through the filtration membrane into Bowman\'s capsule.', difficulty: 'medium',
  },
  {
    question: 'Hemoglobin\'s oxygen-binding curve is sigmoidal due to:', options: ['Independent binding of O₂ to each subunit', 'Cooperative binding between subunits', 'Competitive inhibition by CO₂', 'Irreversible binding of oxygen'], correctAnswer: 1, explanation: 'Hemoglobin exhibits cooperative binding: binding of O₂ to one subunit increases the affinity of other subunits for O₂, producing the characteristic sigmoidal (S-shaped) curve.', difficulty: 'medium',
  },
  {
    question: 'The myelin sheath in the peripheral nervous system is formed by:', options: ['Astrocytes', 'Oligodendrocytes', 'Schwann cells', 'Microglia'], correctAnswer: 2, explanation: 'Schwann cells myelinate neurons in the PNS (one Schwann cell per internode). In the CNS, oligodendrocytes perform this function (each myelinating multiple axon segments).', difficulty: 'easy',
  },
  {
    question: 'During muscle contraction, which ion is released from the sarcoplasmic reticulum?', options: ['Na⁺', 'K⁺', 'Ca²⁺', 'Mg²⁺'], correctAnswer: 2, explanation: 'Ca²⁺ is released from the sarcoplasmic reticulum upon stimulation. It binds troponin, causing a conformational change that moves tropomyosin and exposes myosin-binding sites on actin.', difficulty: 'easy',
  },
  {
    question: 'The countercurrent multiplier system in the loop of Henle creates:', options: ['A dilute medullary interstitium', 'A hypertonic medullary interstitium', 'Increased GFR', 'Decreased blood pH'], correctAnswer: 1, explanation: 'The countercurrent multiplier (descending limb permeable to water, ascending limb pumps out NaCl) creates an increasingly hypertonic medullary interstitium, enabling concentration of urine.', difficulty: 'hard',
  },
  {
    question: 'Bile is produced by the _____ and stored in the _____.', options: ['Gallbladder; liver', 'Liver; gallbladder', 'Pancreas; gallbladder', 'Stomach; duodenum'], correctAnswer: 1, explanation: 'Bile is synthesized by hepatocytes in the liver and stored/concentrated in the gallbladder. It is released into the duodenum to emulsify fats.', difficulty: 'easy',
  },
  {
    question: 'Which immunoglobulin is the first antibody produced during a primary immune response?', options: ['IgG', 'IgA', 'IgM', 'IgE'], correctAnswer: 2, explanation: 'IgM is the first antibody class produced during a primary immune response. It is a pentamer with high avidity. IgG dominates during the secondary response and is the most abundant in serum.', difficulty: 'medium',
  },
  {
    question: 'The parasympathetic nervous system uses which neurotransmitter at its target organs?', options: ['Norepinephrine', 'Acetylcholine', 'Dopamine', 'Serotonin'], correctAnswer: 1, explanation: 'The parasympathetic nervous system uses acetylcholine (ACh) at both the ganglionic synapse and the target organ. The sympathetic system uses ACh at ganglia but norepinephrine at target organs.', difficulty: 'easy',
  },
  {
    question: 'Surfactant in the lungs functions to:', options: ['Increase surface tension', 'Decrease surface tension and prevent alveolar collapse', 'Facilitate CO₂ transport', 'Destroy pathogens'], correctAnswer: 1, explanation: 'Pulmonary surfactant (produced by Type II pneumocytes) reduces surface tension in alveoli, preventing collapse (atelectasis) during expiration and making it easier to inflate the lungs.', difficulty: 'easy',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `organ-systems-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-organ-systems',
  }))
}
