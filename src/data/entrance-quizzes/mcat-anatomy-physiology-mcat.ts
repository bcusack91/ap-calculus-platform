/**
 * Entrance Quiz — Anatomy & Physiology (MCAT)
 * 14 questions · 7 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so each part tests the lesson part of the same number).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Musculoskeletal System'
const P2 = 'Reproductive System'
const P3 = 'Embryology & Development'
const P4 = 'Skin & Integumentary System'
const P5 = 'Special Senses'
const P6 = 'Blood & Lymphatic System'
const P7 = 'Homeostasis & Integration'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Musculoskeletal System
  { id: 'map-ent-1a', question: 'In skeletal muscle, the Ca$^{2+}$ that triggers contraction comes mainly from:', options: ['Extracellular fluid entering through T-tubules', 'The sarcoplasmic reticulum, via ryanodine receptors', 'Mitochondria, released by the electron transport chain', 'The nucleus, released through the nuclear pores'], correctIndex: 1, explanation: 'Depolarization spreads down the T-tubules, the DHP receptors there open the ryanodine receptors of the sarcoplasmic reticulum, and stored Ca$^{2+}$ floods the cytosol. Skeletal muscle does not depend on extracellular Ca$^{2+}$ (cardiac muscle does), and neither mitochondria nor the nucleus is the trigger source.', partNumber: 1, partTitle: P1 },
  { id: 'map-ent-1b', question: 'Which bone cells deposit new bone matrix?', options: ['Osteoclasts', 'Chondrocytes', 'Osteoblasts', 'Fibroblasts'], correctIndex: 2, explanation: 'Osteoblasts build bone by laying down osteoid that then mineralizes. Osteoclasts do the opposite and resorb bone, chondrocytes maintain cartilage, and fibroblasts make the matrix of ordinary connective tissue.', partNumber: 1, partTitle: P1 },

  // Part 2 — Reproductive System
  { id: 'map-ent-2a', question: 'The LH surge near day 14 of the menstrual cycle triggers:', options: ['Ovulation, then formation of the corpus luteum', 'Thickening of the endometrium before implantation', 'Menstruation, by making progesterone fall', 'An FSH rise that recruits the next follicles'], correctIndex: 0, explanation: 'The LH surge causes the mature follicle to release its oocyte, and the remaining follicle becomes the progesterone-secreting corpus luteum. The endometrium thickens under estrogen and progesterone, menstruation follows the fall in progesterone when the corpus luteum dies, and new follicles are recruited by FSH.', partNumber: 2, partTitle: P2 },
  { id: 'map-ent-2b', question: 'Sertoli cells, which respond to FSH, mainly:', options: ['Secrete testosterone in response to LH', 'Produce the fructose-rich seminal fluid', 'Store mature sperm until ejaculation', 'Support and nourish developing sperm'], correctIndex: 3, explanation: 'Sertoli cells line the seminiferous tubules, form the blood–testis barrier and nourish developing sperm. Testosterone comes from Leydig cells under LH, fructose-rich fluid comes from the seminal vesicles, and sperm mature and are stored in the epididymis.', partNumber: 2, partTitle: P2 },

  // Part 3 — Embryology & Development
  { id: 'map-ent-3a', question: 'In the blastocyst, which cells go on to form the embryo itself?', options: ['The trophoblast', 'The inner cell mass', 'The zona pellucida', 'The corpus luteum'], correctIndex: 1, explanation: 'The inner cell mass becomes the embryo, while the trophoblast forms the fetal part of the placenta and secretes hCG. The zona pellucida is the glycoprotein coat around the egg, and the corpus luteum is an ovarian structure, not part of the embryo.', partNumber: 3, partTitle: P3 },
  { id: 'map-ent-3b', question: 'The brain, the spinal cord and the epidermis all develop from which germ layer?', options: ['Mesoderm', 'Endoderm', 'Ectoderm', 'Notochord'], correctIndex: 2, explanation: 'Ectoderm forms the nervous system (through the neural tube) and the epidermis. Mesoderm forms muscle, bone and blood, endoderm forms the lining of the gut and airways, and the notochord is a mesoderm-derived rod that induces the neural plate but does not become it.', partNumber: 3, partTitle: P3 },

  // Part 4 — Skin & Integumentary System
  { id: 'map-ent-4a', question: 'Which skin layer contains the blood vessels, sweat glands and hair follicles?', options: ['The epidermis', 'The stratum corneum', 'The stratum basale', 'The dermis'], correctIndex: 3, explanation: 'The dermis is vascular connective tissue that holds vessels, nerves, glands and follicles. The epidermis is avascular and fed by diffusion from the dermis, and the stratum corneum and stratum basale are both layers within the epidermis.', partNumber: 4, partTitle: P4 },
  { id: 'map-ent-4b', question: 'When core body temperature rises above the hypothalamic set point, the body responds with:', options: ['Sweating and cutaneous vasodilation', 'Shivering and cutaneous vasoconstriction', 'Brown-fat heat production and piloerection', 'Positive feedback that raises heat output'], correctIndex: 0, explanation: 'Thermoregulation is negative feedback: when the body is too warm, skin vessels dilate to shed heat and sweat cools the skin as it evaporates. Shivering, vasoconstriction and brown-fat heat production are responses to cold, and adding more heat would worsen the problem.', partNumber: 4, partTitle: P4 },

  // Part 5 — Special Senses
  { id: 'map-ent-5a', question: 'Compared with rods, cones are specialized for:', options: ['Vision in dim light, with low acuity', 'Color and sharp vision in bright light', 'Detecting motion only in the periphery', 'Sensing light intensity but never color'], correctIndex: 1, explanation: 'Cones come in three types for color, need bright light and are packed in the fovea for sharp vision. Rods handle dim-light vision with lower acuity and do not distinguish color.', partNumber: 5, partTitle: P5 },
  { id: 'map-ent-5b', question: 'At the optic chiasm, which retinal fibers cross to the opposite side of the brain?', options: ['Fibers from the nasal half of each retina', 'Fibers from the temporal half of each retina', 'Every fiber from both retinas', 'None; each eye projects only to its own side'], correctIndex: 0, explanation: 'Nasal retinal fibers (which see the temporal visual fields) cross at the chiasm, while temporal fibers stay on the same side. That partial crossing lets each hemisphere receive the opposite visual field from both eyes.', partNumber: 5, partTitle: P5 },

  // Part 6 — Blood & Lymphatic System
  { id: 'map-ent-6a', question: 'Which is a function of the lymphatic system?', options: ['Carrying $O_{2}$ from the lungs to the tissues', 'Making the clotting factors that form fibrin', 'Returning tissue fluid and absorbing dietary fat', 'Filtering plasma to form urine in nephrons'], correctIndex: 2, explanation: 'Lymphatic vessels return excess interstitial fluid to the blood, lacteals in the intestine absorb dietary fat, and lymph nodes filter pathogens. Red blood cells carry $O_{2}$, the liver makes clotting factors, and the kidneys form urine.', partNumber: 6, partTitle: P6 },
  { id: 'map-ent-6b', question: "A patient's hematocrit is 45%. This value is the:", options: ['Fraction of plasma that consists of protein', 'Share of hemoglobin bound to oxygen', 'Number of white cells per microliter', 'Fraction of blood volume made of red cells'], correctIndex: 3, explanation: 'Hematocrit is the percentage of whole blood volume occupied by red blood cells, normally about 40–45%, with plasma making up most of the rest. Hemoglobin saturation, plasma protein content and the white cell count are separate measurements.', partNumber: 6, partTitle: P6 },

  // Part 7 — Homeostasis & Integration
  { id: 'map-ent-7a', question: 'A response that opposes the original change and returns a variable to its set point is an example of:', options: ['Positive feedback', 'Feedforward control', 'Overshoot compensation', 'Negative feedback'], correctIndex: 3, explanation: 'Negative feedback counteracts a deviation and restores the set point, as in insulin lowering a high blood glucose. Positive feedback amplifies the stimulus toward an endpoint (oxytocin in labor), and normal compensation moves a value toward normal without overshooting.', partNumber: 7, partTitle: P7 },
  { id: 'map-ent-7b', question: 'In respiratory acidosis, the primary change is:', options: ['A rise in $PCO_{2}$ from hypoventilation', 'A fall in $PCO_{2}$ from hyperventilation', 'A loss of $HCO_{3}^{-}$ from diarrhea', 'A gain of $HCO_{3}^{-}$ from vomiting'], correctIndex: 0, explanation: 'Hypoventilation retains $CO_{2}$, raising $PCO_{2}$ and lowering pH. Hyperventilation causes respiratory alkalosis, losing $HCO_{3}^{-}$ causes metabolic acidosis, and the $HCO_{3}^{-}$ gain after vomiting is metabolic alkalosis.', partNumber: 7, partTitle: P7 },
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
