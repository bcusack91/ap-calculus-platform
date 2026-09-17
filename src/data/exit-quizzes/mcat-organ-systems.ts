/**
 * MCAT Organ Systems, Anatomy & Physiology Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import { shuffleArray } from '@/lib/shuffle-options'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'The sinoatrial (SA) node is located in:', options: ['Left ventricle', 'Right atrium', 'Left atrium', 'Right ventricle'], correctAnswer: 1, explanation: 'The SA node is located in the wall of the right atrium. It is the primary pacemaker of the heart, initiating each heartbeat.', difficulty: 'easy',
  },
  {
    question: 'Which hormone stimulates the reabsorption of water in the collecting duct of the nephron?', options: ['Aldosterone', 'Antidiuretic hormone', 'Atrial natriuretic peptide', 'Parathyroid hormone'], correctAnswer: 1, explanation: 'ADH (antidiuretic hormone/vasopressin) increases water permeability of the collecting duct by inserting aquaporin-2 channels, promoting water reabsorption and concentrating urine. Aldosterone acts mainly on sodium reabsorption, ANP promotes sodium and water loss, and parathyroid hormone regulates calcium.', difficulty: 'easy',
  },
  {
    question: 'The primary function of the large intestine is:', options: ['Protein digestion', 'Vitamin B12 absorption', 'Water absorption', 'Carbohydrate digestion'], correctAnswer: 2, explanation: 'The large intestine (colon) primarily absorbs water and electrolytes from indigestible food matter and forms feces. Most nutrient absorption occurs in the small intestine, and vitamin B12 is absorbed in the terminal ileum, not the colon.', difficulty: 'easy',
  },
  {
    question: 'Type I pneumocytes in the lungs are specialized for:', options: ['Mucus secretion', 'Surfactant production', 'Gas exchange', 'Immune defense'], correctAnswer: 2, explanation: 'Type I pneumocytes are thin, flat cells that make up ~95% of the alveolar surface area and are specialized for gas exchange. Type II pneumocytes produce surfactant.', difficulty: 'medium',
  },
  {
    question: 'Which part of the brain is primarily responsible for coordinating voluntary movement and balance?', options: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'], correctAnswer: 1, explanation: 'The cerebellum coordinates voluntary movements, balance, posture, and motor learning. The cerebrum handles higher cognitive functions, while the medulla controls autonomic functions.', difficulty: 'easy',
  },
  {
    question: 'Pepsin is activated in the stomach by:', options: ['Enteropeptidase', 'Low gastric pH', 'Pancreatic enzymes', 'Alkaline conditions'], correctAnswer: 1, explanation: 'HCl lowers stomach pH to ~2, which converts inactive pepsinogen to active pepsin. Pepsin is a protease that begins protein digestion in the stomach. Enteropeptidase activates trypsinogen in the duodenum, not pepsinogen in the stomach.', difficulty: 'easy',
  },
  {
    question: 'The glomerular filtration rate (GFR) is primarily driven by:', options: ['Capillary oncotic pressure', 'Capsular hydrostatic pressure', 'Capillary hydrostatic pressure', 'Capsular oncotic pressure'], correctAnswer: 2, explanation: 'GFR is driven by the high hydrostatic pressure in the glomerular capillaries, forcing plasma filtrate through the filtration membrane into Bowman\'s capsule. Capillary oncotic pressure and hydrostatic pressure in Bowman\'s capsule both oppose filtration, and oncotic pressure in the capsule is near zero because little protein is filtered.', difficulty: 'medium',
  },
  {
    question: 'Hemoglobin\'s oxygen-binding curve is sigmoidal due to:', options: ['Independent binding at each subunit', 'Cooperative binding between subunits', 'Competitive inhibition by $CO_{2}$', 'Irreversible binding of oxygen'], correctAnswer: 1, explanation: 'Hemoglobin exhibits cooperative binding: binding of $O_{2}$ to one subunit increases the affinity of other subunits for $O_{2}$, producing the characteristic sigmoidal (S-shaped) curve.', difficulty: 'medium',
  },
  {
    question: 'The myelin sheath in the peripheral nervous system is formed by:', options: ['Astrocytes', 'Oligodendrocytes', 'Schwann cells', 'Microglia'], correctAnswer: 2, explanation: 'Schwann cells myelinate neurons in the PNS (one Schwann cell per internode). In the CNS, oligodendrocytes perform this function (each myelinating multiple axon segments).', difficulty: 'easy',
  },
  {
    question: 'During muscle contraction, which ion is released from the sarcoplasmic reticulum?', options: ['$Na^{+}$', '$K^{+}$', '$Ca^{2+}$', '$Mg^{2+}$'], correctAnswer: 2, explanation: '$Ca^{2+}$ is released from the sarcoplasmic reticulum upon stimulation. It binds troponin, causing a conformational change that moves tropomyosin and exposes myosin-binding sites on actin.', difficulty: 'easy',
  },
  {
    question: 'The countercurrent multiplier system in the loop of Henle creates:', options: ['A hypotonic medullary interstitium', 'A hypertonic medullary interstitium', 'A hypertonic cortical interstitium', 'A hypotonic cortical interstitium'], correctAnswer: 1, explanation: 'The countercurrent multiplier (descending limb permeable to water, ascending limb pumps out NaCl) creates an increasingly hypertonic medullary interstitium, enabling concentration of urine. The effect builds toward the inner medulla; the cortical interstitium stays roughly isotonic with plasma.', difficulty: 'hard',
  },
  {
    question: 'Bile is produced by the _____ and stored in the _____.', options: ['Gallbladder; liver', 'Liver; gallbladder', 'Pancreas; gallbladder', 'Stomach; duodenum'], correctAnswer: 1, explanation: 'Bile is synthesized by hepatocytes in the liver and stored/concentrated in the gallbladder. It is released into the duodenum to emulsify fats.', difficulty: 'easy',
  },
  {
    question: 'Which immunoglobulin is the first antibody produced during a primary immune response?', options: ['IgG', 'IgA', 'IgM', 'IgE'], correctAnswer: 2, explanation: 'IgM is the first antibody class produced during a primary immune response. It is a pentamer with high avidity. IgG dominates during the secondary response and is the most abundant in serum.', difficulty: 'medium',
  },
  {
    question: 'The parasympathetic nervous system uses which neurotransmitter at its target organs?', options: ['Norepinephrine', 'Acetylcholine', 'Epinephrine', 'Serotonin'], correctAnswer: 1, explanation: 'The parasympathetic nervous system uses acetylcholine (ACh) at both the ganglionic synapse and the target organ. The sympathetic system uses ACh at ganglia but norepinephrine at most target organs, and epinephrine is released into the blood by the adrenal medulla.', difficulty: 'easy',
  },
  {
    question: 'Surfactant in the lungs functions to:', options: ['Raise alveolar surface tension', 'Lower surface tension in alveoli', 'Facilitate $CO_{2}$ transport', 'Trap inhaled particles in mucus'], correctAnswer: 1, explanation: 'Pulmonary surfactant (produced by Type II pneumocytes) reduces surface tension in alveoli, preventing collapse (atelectasis) during expiration and making it easier to inflate the lungs. Trapping particles is the job of airway mucus, and $CO_{2}$ transport happens in the blood.', difficulty: 'easy',
  },
]

// Sensory systems — exact-tagged for mcat-anatomy-physiology-sensory-mcat (a
// diagnostic-recommendable slug that was serving autonomic/nervous items).
const sensoryPool: MCATQuizQuestion[] = [
  {
    question: 'In darkness, photoreceptors release glutamate continuously because:',
    options: ['cGMP keeps cation channels open, depolarizing the cell', 'Rhodopsin is active, opening cation channels', 'Transducin closes cation channels, depolarizing the cell', 'Light-independent $Ca^{2+}$ influx triggers exocytosis'],
    correctAnswer: 0,
    explanation: 'In the dark, cGMP levels are high and hold cGMP-gated $Na^{+}/Ca^{2+}$ channels open (the "dark current"), so the photoreceptor sits depolarized at about −40 mV and releases glutamate. Light activates rhodopsin and transducin, phosphodiesterase lowers cGMP, the channels close, and the cell HYPERpolarizes and releases less glutamate.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Compared with cones, rods:',
    options: ['Are more light-sensitive but give poorer acuity', 'Are concentrated in the central fovea', 'Mediate color vision through three distinct photopigments', 'Have faster response kinetics than cones'],
    correctAnswer: 0,
    explanation: 'Rods contain rhodopsin, respond to single photons, and converge many-to-one onto bipolar cells, which boosts sensitivity at the cost of spatial resolution. Cones are the fovea-dense, fast, three-pigment receptors that support color and high-acuity daytime vision.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'A lesion of the optic chiasm most typically produces loss of:',
    options: ['Both temporal visual fields', 'Complete vision loss in one eye', 'The nasal visual field of both eyes', 'The right visual field of both eyes'],
    correctAnswer: 0,
    explanation: 'Fibers from the nasal half of each retina cross at the chiasm, and the nasal retina views the temporal visual field. Cutting the crossing fibers therefore removes the temporal field of each eye (bitemporal hemianopsia). Loss of one whole eye is an optic-nerve lesion; loss of one side of the field in both eyes is an optic-tract or cortical lesion.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'The correct sequence of structures in sound transmission is:',
    options: ['Tympanic membrane → ossicles → oval window → cochlear fluid → hair cells', 'Tympanic membrane → oval window → ossicles → hair cells → cochlear fluid', 'Ossicles → tympanic membrane → round window → hair cells → cochlear fluid', 'Oval window → tympanic membrane → ossicles → cochlear fluid → hair cells'],
    correctAnswer: 0,
    explanation: 'Sound vibrates the tympanic membrane, the malleus-incus-stapes chain transmits the vibration to the oval window, pressure waves travel through the cochlear perilymph, and the basilar membrane movement bends hair-cell stereocilia against the tectorial membrane. The round window releases the pressure at the end of the path.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'The middle-ear ossicles are necessary because:',
    options: ['They overcome the air-to-fluid impedance mismatch', 'The cochlea cannot detect vibrations below 1 kHz', 'They convert mechanical vibration into action potentials', 'They filter out sounds above the range of hearing'],
    correctAnswer: 0,
    explanation: 'Most sound energy would reflect off the boundary between air and cochlear fluid. The ossicles act as a lever, and the large tympanic membrane focuses force onto the small oval window, together amplifying pressure enough to drive the fluid. Transduction to action potentials happens at the hair cells and spiral ganglion, not in the ossicles.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'High-frequency sounds are detected at the:',
    options: ['Base of the cochlea, where the basilar membrane is narrow and stiff', 'Apex of the cochlea, where the basilar membrane is wide and floppy', 'Round window, which vibrates fastest', 'Semicircular canals, which sense rapid oscillation'],
    correctAnswer: 0,
    explanation: 'The basilar membrane is tonotopically organized: it is narrow and stiff near the oval window (base), where it resonates with high frequencies, and wide and flexible at the apex, where low frequencies peak. Place theory maps pitch to position along this membrane.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Which structures detect rotational acceleration of the head?',
    options: ['Semicircular canals', 'Utricle and saccule', 'Organ of Corti in the cochlea', 'Vestibular nuclei of the brainstem'],
    correctAnswer: 0,
    explanation: 'The three semicircular canals are arranged in orthogonal planes; head rotation lags the endolymph, which deflects the cupula and bends the hair cells of the ampulla. The utricle and saccule (the otolith organs) sense linear acceleration and static tilt, the organ of Corti is the auditory organ, and the vestibular nuclei receive the signals rather than transduce them.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'The utricle and saccule signal linear acceleration and head tilt because:',
    options: ['Otoliths shift and bend hair cells when the head moves', 'Endolymph flows through the semicircular canals', 'The tectorial membrane vibrates against stereocilia', 'The basilar membrane resonates at specific frequencies'],
    correctAnswer: 0,
    explanation: 'Calcium carbonate otoliths sit on a gelatinous membrane over the hair cells of the macula. Because they are denser than the surrounding fluid, gravity or linear acceleration displaces them and shears the stereocilia. Endolymph flow in the canals encodes rotation, and the tectorial and basilar membranes belong to the cochlea.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'A patient hears a vibrating tuning fork placed on the mastoid bone louder than the same fork held beside the ear (bone conduction exceeds air conduction). This finding indicates:',
    options: ['Conductive hearing loss in that ear', 'Sensorineural loss in that ear', 'A lesion of the auditory cortex', 'Normal hearing in that ear'],
    correctAnswer: 0,
    explanation: 'Bone conduction bypasses the outer and middle ear and stimulates the cochlea directly. When bone conduction beats air conduction, the cochlea works but the conductive pathway (canal, tympanic membrane, ossicles) is impaired. In sensorineural loss both routes are reduced and air conduction still exceeds bone conduction.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Olfaction is unusual among the senses because olfactory signals:',
    options: ['Reach the cortex without first relaying through the thalamus', 'Are transduced by ionotropic receptors rather than GPCRs', 'Adapt very slowly compared with other senses', 'Are carried by cranial nerve V'],
    correctAnswer: 0,
    explanation: 'Olfactory receptor neurons project through the olfactory bulb directly to the piriform cortex and limbic structures; every other sensory modality relays in the thalamus first. Odorant receptors are G protein-coupled, olfaction adapts quickly, and the olfactory nerve is cranial nerve I.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Salty and sour tastes are transduced differently from sweet, bitter, and umami because salty and sour tastants:',
    options: ['Act through ion channels rather than GPCRs', 'Use G protein-coupled receptors rather than ion channels', 'Are detected by free nerve endings instead of taste cells', 'Require binding to olfactory receptors in the nasal cavity'],
    correctAnswer: 0,
    explanation: 'Salt ($Na^{+}$) and acid ($H^{+}$) are small ions that enter or act on ion channels in the taste-cell membrane and depolarize it directly. Sweet, bitter, and umami molecules bind G protein-coupled receptors (T1R and T2R families) and signal through second messengers.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Pacinian corpuscles fire at the onset and offset of pressure but fall silent during sustained pressure. They are best classified as:',
    options: ['Rapidly adapting (phasic) receptors', 'Slowly adapting (tonic) mechanoreceptors', 'Nociceptors signaling sharp pain', 'Proprioceptors of the limb muscles'],
    correctAnswer: 0,
    explanation: 'Phasic receptors signal change: their firing decays quickly under a constant stimulus, which suits Pacinian corpuscles to vibration and texture. Tonic receptors (such as Merkel discs and Ruffini endings) keep firing during a maintained stimulus and encode steady pressure or stretch.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Which receptor signals muscle length and the rate of change of length?',
    options: ['Muscle spindle', 'Golgi tendon organ', 'Pacinian corpuscle', 'Merkel disc'],
    correctAnswer: 0,
    explanation: 'Muscle spindles lie in parallel with extrafusal fibers and report stretch and its velocity, driving the stretch reflex. Golgi tendon organs sit in series with the muscle at the tendon and report tension. Pacinian corpuscles and Merkel discs are cutaneous mechanoreceptors.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Rubbing a bumped shin reduces the pain. According to gate-control theory, this occurs because:',
    options: ['Touch fibers inhibit pain transmission in the dorsal horn', 'Endorphins are released from the rubbed skin', 'Nociceptors adapt rapidly to repeated mechanical stimulation', 'The rubbing overwhelms the somatosensory cortex'],
    correctAnswer: 0,
    explanation: 'Large-diameter A-beta touch fibers excite inhibitory interneurons in the dorsal horn that suppress transmission from the small-diameter pain fibers, closing the "gate" before the signal ascends. Endogenous opioids act centrally rather than in skin, nociceptors adapt slowly, and the effect is spinal, not cortical.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
  {
    question: 'Increasing the intensity of a stimulus is encoded by a single sensory neuron primarily through:',
    options: ['Higher firing frequency', 'Larger action potential amplitude', 'Longer action potential duration', 'Faster conduction velocity'],
    correctAnswer: 0,
    explanation: 'Action potentials are all-or-none, so amplitude, duration, and conduction velocity are fixed for a given axon. A stronger stimulus produces a larger receptor potential, which drives a higher firing rate (frequency coding); across the population, more neurons are also recruited.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-anatomy-physiology-sensory-mcat',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [...questionPool, ...sensoryPool, ...authoredFor(['mcat-organ-systems-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'organ-systems', topicSlug) : fullPool
  const shuffled = shuffleArray(source)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `organ-systems-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-organ-systems',
  }))
}
