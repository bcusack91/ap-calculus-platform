/**
 * Entrance Quiz — Organ Systems (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Cardiovascular System
  {
    id: 'mos-ent-1a',
    question: 'During systole, the left ventricle contracts and ejects blood into the aorta. What prevents backflow of blood into the left atrium during this event?',
    options: [
      'Pulmonary semilunar valve',
      'Tricuspid (right atrioventricular) valve',
      'Mitral (left atrioventricular) valve',
      'Aortic semilunar valve'
    ],
    correctIndex: 2,
    explanation: 'The mitral (bicuspid) valve separates the left atrium from the left ventricle, and it closes as the ventricle contracts (contributing to the S1 heart sound) to stop regurgitation into the atrium. The tricuspid valve guards the same boundary on the right side, while the two semilunar valves prevent backflow from the great arteries into the ventricles.',
    partNumber: 1,
    partTitle: 'Cardiovascular System'
  },
  {
    id: 'mos-ent-1b',
    question: 'Cardiac output (CO) is defined as stroke volume (SV) × heart rate (HR). If a patient has a resting HR of 70 bpm and an SV of 70 mL, what is the approximate CO?',
    options: [
      '140 mL/min',
      '4,900 mL/min',
      '700 mL/min',
      '49,000 mL/min'
    ],
    correctIndex: 1,
    explanation: 'CO = SV × HR = 70 mL × 70 bpm = 4,900 mL/min ≈ 4.9 L/min, right at the normal resting value of about 5 L/min. Adding the two figures instead of multiplying gives 140, and the other choices are the product off by a factor of ten. During exercise CO can reach 20–25 L/min as both HR and SV rise (Frank-Starling mechanism).',
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
    explanation: '~70% of $CO_{2}$ is transported as $HCO_{3}^{-}$. Inside RBCs, carbonic anhydrase catalyzes $CO_{2}$ + $H_{2}O$ → $H_{2}CO_{3}$ → $H^{+}$ + $HCO_{3}^{-}$. $HCO_{3}^{-}$ exits RBCs via the chloride shift. ~20–23% is carbaminohemoglobin; only ~7% is dissolved; albumin is not a $CO_{2}$ carrier.',
    partNumber: 2,
    partTitle: 'Respiratory System'
  },
  {
    id: 'mos-ent-2b',
    question: 'During inspiration, the diaphragm contracts and moves downward. This causes intrathoracic pressure to:',
    options: [
      'Increase above atmospheric pressure, pushing air out.',
      'Decrease below atmospheric pressure, drawing air in.',
      'Remain equal to atmospheric pressure the entire time.',
      'Rise briefly, then fall sharply during the same breath.'
    ],
    correctIndex: 1,
    explanation: 'Diaphragm contraction increases thoracic volume, and by Boyle\'s Law ($P_{1}V_{1}$ = $P_{2}V_{2}$) the added volume drops intrathoracic pressure below atmospheric. That gradient drives bulk flow of air into the lungs. Pressure rises above atmospheric only during expiration, and if it never changed there would be no gradient and no airflow at all.',
    partNumber: 2,
    partTitle: 'Respiratory System'
  },

  // Part 3: Renal System
  {
    id: 'mos-ent-3a',
    question: 'Antidiuretic hormone (ADH/vasopressin) increases water reabsorption by inserting aquaporin-2 channels into which nephron segment?',
    options: [
      'Proximal tubule',
      'Thin descending limb of Henle',
      'Thick ascending limb of Henle',
      'Cortical collecting duct'
    ],
    correctIndex: 3,
    explanation: 'ADH acts on V2 receptors in the principal cells of the cortical and medullary collecting duct, triggering cAMP-mediated insertion of AQP2 channels into the apical membrane. This dramatically increases water permeability, producing concentrated urine. The proximal tubule and thin descending limb are already water-permeable without ADH, and the thick ascending limb is impermeable to water.',
    partNumber: 3,
    partTitle: 'Renal System'
  },
  {
    id: 'mos-ent-3b',
    question: 'The glomerular filtration rate (GFR) can be estimated clinically using the clearance of which substance?',
    options: [
      'Glucose, which is freely filtered but fully reabsorbed.',
      'Creatinine, which is freely filtered and barely reabsorbed.',
      'Urea, which is filtered and then partly reabsorbed.',
      'Albumin, which is filtered in proportion to plasma level.'
    ],
    correctIndex: 1,
    explanation: 'An ideal filtration marker is freely filtered and then neither reabsorbed, secreted, nor metabolized, so its clearance equals GFR. Inulin is the research gold standard and creatinine the clinical stand-in — slightly secreted, so it overestimates GFR a little, but easy to measure. Glucose is completely reabsorbed below its transport maximum, urea is substantially reabsorbed and therefore underestimates GFR, and albumin is almost entirely held back by the filtration barrier.',
    partNumber: 3,
    partTitle: 'Renal System'
  },

  // Part 4: Nervous System
  {
    id: 'mos-ent-4a',
    question: 'During an action potential, rapid depolarization (phase 0) is caused by:',
    options: [
      'Efflux of $K^{+}$ through delayed-rectifier $K^{+}$ channels.',
      'Influx of $Na^{+}$ through voltage-gated $Na^{+}$ channels.',
      'Influx of $Ca^{2+}$ through postsynaptic NMDA receptor channels.',
      'Efflux of $Cl^{-}$ through ligand-gated chloride channels.'
    ],
    correctIndex: 1,
    explanation: 'Once the membrane reaches threshold (~−55 mV), voltage-gated $Na^{+}$ channels open and $Na^{+}$ rushes in down its electrochemical gradient, driving the membrane to +30 to +40 mV. Delayed-rectifier $K^{+}$ efflux produces repolarization afterward, NMDA-receptor $Ca^{2+}$ influx is a postsynaptic graded event rather than the axonal upstroke, and $Cl^{-}$ movement through ligand-gated channels is inhibitory.',
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
    explanation: 'β1-adrenergic receptors (Gs-coupled) dominate in the SA node and ventricles. Norepinephrine/epinephrine binding increases cAMP, activating PKA, which phosphorylates HCN and L-type $Ca^{2+}$ channels to increase heart rate (chronotropy) and contractility (inotropy). α1 mediates vasoconstriction, α2 inhibits further NE release, and M2 is the parasympathetic receptor that slows the heart.',
    partNumber: 4,
    partTitle: 'Nervous System'
  },

  // Part 5: Endocrine System
  {
    id: 'mos-ent-5a',
    question: 'In a healthy individual, blood glucose rises after a meal. Which pancreatic cell type and hormone respond to restore normal glucose levels?',
    options: [
      'Alpha cells release glucagon, driving glycogenolysis.',
      'Beta cells release insulin, driving glucose uptake.',
      'Delta cells release somatostatin, raising insulin output.',
      'Beta cells release glucagon, driving gluconeogenesis.'
    ],
    correctIndex: 1,
    explanation: 'Postprandial hyperglycemia stimulates pancreatic beta cells to release insulin, which drives GLUT4 translocation in muscle and fat, glycogen synthesis in liver and muscle, and protein synthesis, pulling glucose back toward ~90 mg/dL. Glucagon comes from alpha cells and raises glucose during fasting, and somatostatin from delta cells inhibits rather than stimulates insulin release.',
    partNumber: 5,
    partTitle: 'Endocrine System'
  },
  {
    id: 'mos-ent-5b',
    question: 'The hypothalamus-pituitary-adrenal (HPA) axis is an example of a neuroendocrine negative feedback loop. High cortisol levels inhibit which structures?',
    options: [
      'The adrenal medulla and the thyroid gland together.',
      'The hypothalamus and the anterior pituitary.',
      'The posterior pituitary and the collecting ducts.',
      'Only the adrenal cortex, with no upstream effect.'
    ],
    correctIndex: 1,
    explanation: 'Cortisol from the adrenal cortex feeds back on both the hypothalamus, reducing CRH release, and the anterior pituitary, reducing ACTH release, which keeps cortisol inside a physiological range (loss of that restraint produces Cushing\'s syndrome). The adrenal medulla, thyroid, and posterior pituitary are not part of this axis, and feedback that stopped at the adrenal cortex would leave the upstream drive unopposed.',
    partNumber: 5,
    partTitle: 'Endocrine System'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mos-ent-6a',
    question: 'A patient presents with metabolic acidosis (low blood pH, low $HCO_{3}^{-}$). The respiratory system compensates by:',
    options: [
      'Hypoventilating to retain $CO_{2}$, which raises blood pH.',
      'Hyperventilating to blow off $CO_{2}$ and raise blood pH.',
      'Raising aldosterone secretion to retain filtered $HCO_{3}^{-}$.',
      'Releasing ADH to retain water and dilute the acid.'
    ],
    correctIndex: 1,
    explanation: 'Chemoreceptors sense the low pH and drive hyperventilation. Exhaling $CO_{2}$ pulls $CO_{2}$ + $H_{2}O$ ⇌ $H_{2}CO_{3}$ ⇌ $H^{+}$ + $HCO_{3}^{-}$ to the left, consuming $H^{+}$ and raising pH within minutes. Retaining $CO_{2}$ would lower pH further, and the aldosterone and ADH responses are renal or volume-related, not respiratory compensation.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mos-ent-6b',
    question: 'A patient with type 1 diabetes produces no insulin. Skeletal muscle cells in this patient would have difficulty taking up glucose because:',
    options: [
      'GLUT1 transporters require insulin in every tissue.',
      'GLUT4 vesicles stay inside the cell without insulin.',
      'Glucagon, which rises without insulin, degrades glucose.',
      'Muscle cells lack hexokinase to phosphorylate glucose.'
    ],
    correctIndex: 1,
    explanation: 'GLUT4 is the insulin-sensitive transporter of skeletal muscle and adipose tissue: insulin signaling through PI3K/Akt moves GLUT4 vesicles to the plasma membrane, and without that signal they stay sequestered and uptake collapses. GLUT1 is insulin-independent, glucagon mobilizes rather than destroys glucose, and muscle has ample hexokinase.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mos-ent-7a',
    question: 'The Frank-Starling law of the heart states that increased ventricular end-diastolic volume (preload) leads to:',
    options: [
      'Decreased stroke volume, because the fibers overstretch.',
      'Increased stroke volume, because stretch strengthens contraction.',
      'Decreased heart rate, compensating for the extra filling.',
      'Increased afterload, which lowers overall cardiac output.'
    ],
    correctIndex: 1,
    explanation: 'Greater end-diastolic volume stretches the ventricle, improving actin-myosin overlap so the next contraction is stronger and ejects more blood. This intrinsic property lets the heart match its output to venous return with no neural input. Overstretch only reduces force at volumes beyond the physiological range, and preload is distinct from afterload and from the rate-setting activity of the SA node.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mos-ent-7b',
    question: 'A patient loses a large volume of blood (hemorrhage). Which combined response is most appropriate?',
    options: [
      'Slower heart rate and vasodilation to perfuse the periphery.',
      'Faster heart rate, vasoconstriction, and ADH/aldosterone release.',
      'Slower breathing to conserve the remaining oxygen supply.',
      'Insulin release to mobilize glucose as an emergency fuel.'
    ],
    correctIndex: 1,
    explanation: 'Falling pressure unloads the baroreceptors, which raises sympathetic outflow (faster rate, stronger contraction, vasoconstriction) while ADH retains water and the RAAS releases aldosterone to retain $Na^{+}$ and water, together defending pressure and volume. Slowing the heart or dilating vessels would drop pressure further, hypoventilation worsens oxygen delivery, and insulin lowers blood glucose rather than mobilizing it.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
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
