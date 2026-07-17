/**
 * Entrance Quiz — Organ Systems (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Cardiovascular System
  {
    id: 'mos-ent-1a',
    question: 'During systole, the left ventricle contracts and ejects blood into the aorta. What prevents backflow of blood into the left atrium during this event?',
    options: [
      'Pulmonary semilunar valve',
      'Tricuspid (right atrioventricular) valve',
      'Mitral (bicuspid/left atrioventricular) valve',
      'Aortic semilunar valve'
    ],
    correctIndex: 2,
    explanation: 'The mitral (bicuspid) valve separates the left atrium from the left ventricle. It closes during ventricular systole (S1 heart sound), preventing regurgitation into the atrium. The aortic valve prevents backflow from the aorta into the left ventricle.',
    partNumber: 1,
    partTitle: 'Cardiovascular System'
  },
  {
    id: 'mos-ent-1b',
    question: 'Cardiac output (CO) is defined as stroke volume (SV) × heart rate (HR). If a patient has a resting HR of 70 bpm and an SV of 70 mL, what is the approximate CO?',
    options: [
      '140 mL/min',
      '4,900 mL/min (≈ 4.9 L/min)',
      '700 mL/min',
      '49,000 mL/min'
    ],
    correctIndex: 1,
    explanation: 'CO = SV × HR = 70 mL × 70 bpm = 4,900 mL/min ≈ 4.9 L/min. Normal resting CO is 5 L/min. During exercise, CO can increase to 20–25 L/min via increases in both HR and SV (Frank-Starling mechanism).',
    partNumber: 1,
    partTitle: 'Cardiovascular System'
  },

  // Part 2: Respiratory System
  {
    id: 'mos-ent-2a',
    question: 'The majority of $CO_{2}$ in the blood is transported as:',
    options: [
      'Dissolved $CO_{2}$ in plasma.',
      '$CO_{2}$ bound to hemoglobin (carbaminohemoglobin).',
      'Bicarbonate ions $(HCO_{3}^{-})$ in the plasma.',
      '$CO_{2}$ bound to albumin.'
    ],
    correctIndex: 2,
    explanation: '~70% of $CO_{2}$ is transported as $HCO_{3}^{-}$. Inside RBCs, carbonic anhydrase catalyzes $CO_{2}$ + $H_{2}O$ → $H_{2}CO_{3}$ → $H^{+}$ + $HCO_{3}^{-}$. $HCO_{3}^{-}$ exits RBCs via the chloride shift. ~20–23% is carbaminohemoglobin; only ~7% is dissolved.',
    partNumber: 2,
    partTitle: 'Respiratory System'
  },
  {
    id: 'mos-ent-2b',
    question: 'During inspiration, the diaphragm contracts and moves downward. This causes intrathoracic pressure to:',
    options: [
      'Increase above atmospheric pressure, pushing air out of the lungs.',
      'Decrease below atmospheric pressure, drawing air into the lungs.',
      'Remain equal to atmospheric pressure throughout the breathing cycle.',
      'Increase, then rapidly decrease during the same inspiratory event.'
    ],
    correctIndex: 1,
    explanation: 'Diaphragm contraction increases thoracic volume. By Boyle\'s Law ($P_{1}V_{1}$ = $P_{2}V_{2}$), increased volume decreases intrathoracic pressure below atmospheric pressure (~−1 $cmH_{2}O$). This pressure gradient drives air into the lungs (bulk flow).',
    partNumber: 2,
    partTitle: 'Respiratory System'
  },

  // Part 3: Renal System
  {
    id: 'mos-ent-3a',
    question: 'Antidiuretic hormone (ADH/vasopressin) increases water reabsorption by inserting aquaporin-2 channels into which nephron segment?',
    options: [
      'Proximal convoluted tubule',
      'Thin descending limb of the loop of Henle',
      'Thick ascending limb of the loop of Henle',
      'Collecting duct'
    ],
    correctIndex: 3,
    explanation: 'ADH acts on V2 receptors in the collecting duct principal cells, triggering cAMP-mediated insertion of AQP2 channels into the apical membrane. This dramatically increases water permeability, producing concentrated urine. The thick ascending limb is impermeable to water.',
    partNumber: 3,
    partTitle: 'Renal System'
  },
  {
    id: 'mos-ent-3b',
    question: 'The glomerular filtration rate (GFR) can be estimated clinically using the clearance of which substance?',
    options: [
      'Glucose, because it is freely filtered and completely reabsorbed.',
      'Creatinine, because it is freely filtered and not significantly reabsorbed or secreted.',
      'Urea, because it is completely retained by the kidney.',
      'Protein, because it is filtered in proportion to plasma concentration.'
    ],
    correctIndex: 1,
    explanation: 'An ideal GFR marker is freely filtered, not reabsorbed, not secreted, and not metabolized. Inulin is the gold standard; creatinine is the clinical approximation. Creatinine is slightly secreted, causing a minor overestimation of GFR, but it\'s practical. Glucose is reabsorbed; proteins are not filtered normally.',
    partNumber: 3,
    partTitle: 'Renal System'
  },

  // Part 4: Nervous System
  {
    id: 'mos-ent-4a',
    question: 'During an action potential, rapid depolarization (phase 0) is caused by:',
    options: [
      'Efflux of $K^{+}$ through voltage-gated $K^{+}$ channels.',
      'Influx of $Na^{+}$ through voltage-gated $Na^{+}$ channels.',
      'Influx of $Ca^{2+}$ through L-type calcium channels.',
      'Efflux of $Cl^{-}$ through ligand-gated channels.'
    ],
    correctIndex: 1,
    explanation: 'When membrane potential reaches threshold (~−55 mV), voltage-gated $Na^{+}$ channels rapidly open, allowing massive $Na^{+}$ influx down its electrochemical gradient. This drives the membrane potential toward +30 to +40 mV (depolarization). $K^{+}$ efflux causes repolarization (phase 3).',
    partNumber: 4,
    partTitle: 'Nervous System'
  },
  {
    id: 'mos-ent-4b',
    question: 'The sympathetic nervous system releases norepinephrine at most postganglionic synapses. Which receptor subtype primarily mediates the "fight-or-flight" increase in heart rate?',
    options: [
      'α1-adrenergic receptor',
      'β1-adrenergic receptor',
      'M2 muscarinic receptor',
      'α2-adrenergic receptor'
    ],
    correctIndex: 1,
    explanation: 'β1-adrenergic receptors (Gs-coupled) dominate in the SA node and ventricles. Norepinephrine/epinephrine binding increases cAMP, activating PKA, which phosphorylates HCN and L-type $Ca^{2+}$ channels to increase heart rate (chronotropy) and contractility (inotropy).',
    partNumber: 4,
    partTitle: 'Nervous System'
  },

  // Part 5: Endocrine System
  {
    id: 'mos-ent-5a',
    question: 'In a healthy individual, blood glucose rises after a meal. Which pancreatic cell type and hormone respond to restore normal glucose levels?',
    options: [
      'Alpha cells release glucagon, promoting glycogenolysis.',
      'Beta cells release insulin, promoting glucose uptake and glycogen synthesis.',
      'Delta cells release somatostatin, stimulating insulin secretion.',
      'Beta cells release glucagon, promoting gluconeogenesis.'
    ],
    correctIndex: 1,
    explanation: 'Postprandial hyperglycemia stimulates pancreatic β cells to release insulin. Insulin promotes GLUT4 translocation (muscle/fat), glycogen synthesis (liver/muscle), and protein synthesis, lowering blood glucose back to ~90 mg/dL. Glucagon (α cells) does the opposite during fasting.',
    partNumber: 5,
    partTitle: 'Endocrine System'
  },
  {
    id: 'mos-ent-5b',
    question: 'The hypothalamus-pituitary-adrenal (HPA) axis is an example of a neuroendocrine negative feedback loop. High cortisol levels inhibit which structures?',
    options: [
      'The adrenal medulla and the thyroid gland.',
      'The hypothalamus (↓CRH) and the anterior pituitary (↓ACTH).',
      'The posterior pituitary (↓ADH) and the kidneys.',
      'The adrenal cortex directly, with no upstream effects.'
    ],
    correctIndex: 1,
    explanation: 'Cortisol (from the adrenal cortex) provides negative feedback to both the hypothalamus (reducing CRH release) and the anterior pituitary (reducing ACTH release). This classic feedback loop maintains cortisol within a physiological range. Excess cortisol → Cushing\'s syndrome.',
    partNumber: 5,
    partTitle: 'Endocrine System'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mos-ent-6a',
    question: 'A patient presents with metabolic acidosis (low blood pH, low $HCO_{3}^{-}$). The respiratory system compensates by:',
    options: [
      'Hypoventilating to retain $CO_{2}$ and raise blood pH.',
      'Hyperventilating to blow off $CO_{2}$, reducing carbonic acid and raising blood pH.',
      'Increasing aldosterone secretion to retain $HCO_{3}^{-}$.',
      'Releasing ADH to retain water and dilute the acid concentration.'
    ],
    correctIndex: 1,
    explanation: 'In metabolic acidosis, chemoreceptors detect low pH and stimulate hyperventilation. Exhaling $CO_{2}$ shifts the equilibrium $CO_{2}$ + $H_{2}O$ ⇌ $H_{2}CO_{3}$ ⇌ $H^{+}$ + $HCO_{3}^{-}$ to the left, consuming $H^{+}$ and raising pH. This respiratory compensation acts within minutes.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mos-ent-6b',
    question: 'A patient with type 1 diabetes produces no insulin. Skeletal muscle cells in this patient would have difficulty taking up glucose because:',
    options: [
      'Insulin is required to activate GLUT1 transporters in all tissues.',
      'Without insulin, GLUT4 vesicles remain sequestered intracellularly and are not inserted into the plasma membrane.',
      'Glucose is destroyed by glucagon, which rises in the absence of insulin.',
      'Skeletal muscle cells lack the enzymes needed to phosphorylate glucose.'
    ],
    correctIndex: 1,
    explanation: 'GLUT4 is the insulin-sensitive glucose transporter in skeletal muscle and adipose tissue. Insulin signaling (via PI3K/Akt) causes GLUT4 vesicles to translocate to and fuse with the plasma membrane. Without insulin, GLUT4 stays intracellular and glucose uptake is severely impaired.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mos-ent-7a',
    question: 'The Frank-Starling law of the heart states that increased ventricular end-diastolic volume (preload) leads to:',
    options: [
      'Decreased stroke volume due to overstretching of cardiac fibers.',
      'Increased stroke volume because greater stretch increases the force of contraction.',
      'Decreased heart rate to compensate for increased filling.',
      'Increased afterload, reducing cardiac output.'
    ],
    correctIndex: 1,
    explanation: 'The Frank-Starling mechanism: increased preload → greater ventricular stretch → more optimal actin-myosin overlap → stronger contraction → increased stroke volume. This intrinsic property allows the heart to match output to venous return without needing extrinsic neural control.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mos-ent-7b',
    question: 'A patient loses a large volume of blood (hemorrhage). Which combined response is most appropriate?',
    options: [
      'Decreased heart rate and vasodilation to redirect blood to peripheral tissues.',
      'Increased heart rate, vasoconstriction, and ADH/aldosterone release to maintain blood pressure and volume.',
      'Decreased respiratory rate to conserve oxygen.',
      'Insulin release to mobilize glucose as an emergency fuel.'
    ],
    correctIndex: 1,
    explanation: 'Hemorrhage triggers baroreceptor-mediated sympathetic activation (↑HR, ↑contractility, vasoconstriction) and hormonal responses (ADH retains water, RAAS releases aldosterone to retain $Na^{+}/water$). Together these restore blood pressure and volume—a critical integrated organ-systems response.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Cardiovascular System' },
    { partNumber: 2, partTitle: 'Respiratory System' },
    { partNumber: 3, partTitle: 'Renal System' },
    { partNumber: 4, partTitle: 'Nervous System' },
    { partNumber: 5, partTitle: 'Endocrine System' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
