/**
 * Entrance Quiz — Anatomy and Physiology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Musculoskeletal System
  {
    id: 'map-ent-1a',
    question: 'During a skeletal muscle contraction, the binding of Ca²⁺ to troponin causes:',
    options: [
      'Direct cross-bridge formation between actin and myosin without further steps.',
      'Tropomyosin to shift, exposing myosin-binding sites on actin filaments.',
      'Myosin heads to hydrolyze ATP before any conformational change.',
      'Actin filaments to slide toward the Z-discs without myosin involvement.'
    ],
    correctIndex: 1,
    explanation: 'At rest, tropomyosin blocks myosin-binding sites on actin. Ca²⁺ (released from the SR) binds troponin C, causing a conformational shift in the troponin-tropomyosin complex. Tropomyosin moves laterally, exposing binding sites—allowing myosin heads (already charged with ADP + Pi) to bind and initiate the power stroke.',
    partNumber: 1,
    partTitle: 'Musculoskeletal System'
  },
  {
    id: 'map-ent-1b',
    question: 'The sarcomere is the functional unit of a myofibril. During contraction, which band/zone SHORTENS?',
    options: [
      'A band (thick filament zone)',
      'I band (thin filament only zone)',
      'Both the A band and H zone shorten equally.',
      'The I band and H zone shorten; the A band length remains constant.'
    ],
    correctIndex: 3,
    explanation: 'In the sliding filament model, thin filaments slide over thick filaments. The A band (containing all thick filaments) remains constant in length. The I band (thin filaments only) and H zone (thick filaments only, no overlap) both shorten as filaments slide past each other.',
    partNumber: 1,
    partTitle: 'Musculoskeletal System'
  },

  // Part 2: Digestive System
  {
    id: 'map-ent-2a',
    question: 'Pepsinogen, the inactive zymogen of pepsin, is secreted by which gastric cells and activated by:',
    options: [
      'Chief cells; activated by HCl (low pH) in the stomach lumen.',
      'Parietal cells; activated by intrinsic factor.',
      'G cells; activated by gastrin.',
      'Goblet cells; activated by enterokinase.'
    ],
    correctIndex: 0,
    explanation: 'Chief (zymogenic) cells in gastric glands secrete pepsinogen. The low pH (~2) of gastric HCl (secreted by parietal cells) cleaves the inhibitory peptide from pepsinogen, forming active pepsin. Pepsin itself also autocatalytically activates more pepsinogen.',
    partNumber: 2,
    partTitle: 'Digestive System'
  },
  {
    id: 'map-ent-2b',
    question: 'Bile salts emulsify dietary fats in the small intestine. This process aids digestion because:',
    options: [
      'Bile salts chemically hydrolyze triglycerides into fatty acids and glycerol.',
      'Emulsification increases the surface area of fat droplets, allowing pancreatic lipase greater access for hydrolysis.',
      'Bile salts transport fatty acids directly across enterocyte membranes.',
      'Emulsification raises the pH of the duodenum, optimizing lipase activity.'
    ],
    correctIndex: 1,
    explanation: 'Bile salts (amphipathic molecules from cholesterol) disperse large fat globules into smaller microdroplets (emulsification), dramatically increasing surface area. This allows pancreatic lipase (with colipase) to hydrolyze triglycerides more efficiently. Bile salts do not chemically digest fats.',
    partNumber: 2,
    partTitle: 'Digestive System'
  },

  // Part 3: Immune System
  {
    id: 'map-ent-3a',
    question: 'Which class of immunoglobulin is the most abundant in serum and the primary antibody of secondary (memory) immune responses?',
    options: [
      'IgM',
      'IgA',
      'IgG',
      'IgE'
    ],
    correctIndex: 2,
    explanation: 'IgG is the most abundant serum Ig (~75%). It is the primary antibody of secondary responses due to B-cell class switching and memory. IgG crosses the placenta (passive immunity to the fetus). IgM is the first produced in a primary response; IgA is the dominant mucosal antibody.',
    partNumber: 3,
    partTitle: 'Immune System'
  },
  {
    id: 'map-ent-3b',
    question: 'MHC class I molecules present peptide antigens to:',
    options: [
      'CD4⁺ helper T cells, initiating antibody production.',
      'CD8⁺ cytotoxic T cells, triggering destruction of the presenting cell.',
      'B cells, promoting immunoglobulin class switching.',
      'NK cells, inhibiting their cytotoxic activity.'
    ],
    correctIndex: 1,
    explanation: 'MHC class I (on all nucleated cells) presents endogenous/intracellular antigens (e.g., viral peptides) to CD8⁺ cytotoxic T cells via TCR interaction. Activated CTLs kill the presenting cell. MHC class II (on APCs) presents to CD4⁺ helper T cells.',
    partNumber: 3,
    partTitle: 'Immune System'
  },

  // Part 4: Reproductive System
  {
    id: 'map-ent-4a',
    question: 'The LH surge on approximately day 14 of the menstrual cycle triggers:',
    options: [
      'Proliferation of the endometrium in preparation for implantation.',
      'Ovulation and conversion of the dominant follicle into the corpus luteum.',
      'Menstruation by causing progesterone levels to fall.',
      'FSH secretion to stimulate primordial follicle development.'
    ],
    correctIndex: 1,
    explanation: 'High estrogen from the dominant follicle causes a positive feedback LH surge. The LH surge triggers final maturation and release of the oocyte (ovulation) ~36 hours later, and transforms the ruptured follicle into the corpus luteum, which secretes progesterone and estrogen during the luteal phase.',
    partNumber: 4,
    partTitle: 'Reproductive System'
  },
  {
    id: 'map-ent-4b',
    question: 'Testosterone produced by Leydig cells in the testes is required for:',
    options: [
      'FSH-independent spermatogenesis and Sertoli cell support functions.',
      'Spermatogenesis, secondary sexual characteristics, and anabolic effects on muscle and bone.',
      'LH production by the anterior pituitary.',
      'Inhibin synthesis, which promotes FSH release.'
    ],
    correctIndex: 1,
    explanation: 'Testosterone (and its metabolite DHT) is essential for: initiation and maintenance of spermatogenesis (acts on Sertoli cells), development and maintenance of male secondary sexual characteristics, anabolic effects (muscle mass, bone density), and libido. Inhibin from Sertoli cells inhibits FSH (negative feedback).',
    partNumber: 4,
    partTitle: 'Reproductive System'
  },

  // Part 5: Homeostasis
  {
    id: 'map-ent-5a',
    question: 'Negative feedback is the primary mechanism maintaining homeostasis. In thermoregulation, if body temperature rises above the set point:',
    options: [
      'The hypothalamus increases metabolic heat production.',
      'The response amplifies the temperature increase to reach a new equilibrium.',
      'Effectors (sweat glands, vasodilation) are activated to return temperature to the set point.',
      'Positive feedback loops are activated to rapidly raise temperature further.'
    ],
    correctIndex: 2,
    explanation: 'Negative feedback: the stimulus (↑ temperature) → hypothalamic thermostat detects deviation → activates effectors (sweating, cutaneous vasodilation) → heat is lost → temperature returns to set point (~37°C). The response opposes the original change—defining negative feedback.',
    partNumber: 5,
    partTitle: 'Homeostasis'
  },
  {
    id: 'map-ent-5b',
    question: 'Positive feedback in physiology:',
    options: [
      'Is always pathological and serves no normal function.',
      'Occurs when the response amplifies the original stimulus, moving away from the set point, as seen in childbirth contractions and blood clotting.',
      'Returns the body to its set point more rapidly than negative feedback.',
      'Requires external hormonal input and cannot be initiated internally.'
    ],
    correctIndex: 1,
    explanation: 'Positive feedback amplifies a change (response reinforces stimulus), moving away from the initial state. This is appropriate in self-limited processes: oxytocin/uterine contractions during labor (until delivery stops the stimulus) and platelet aggregation/blood clotting (until vessel is sealed).',
    partNumber: 5,
    partTitle: 'Homeostasis'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'map-ent-6a',
    question: 'A patient takes a drug that blocks acetylcholinesterase at the neuromuscular junction. The most likely consequence is:',
    options: [
      'Muscle paralysis due to insufficient ACh binding at motor end plates.',
      'Sustained muscle contraction/spasm because ACh accumulates and continuously stimulates nicotinic receptors.',
      'Decreased heart rate due to excess parasympathetic tone at the SA node.',
      'Inhibition of epinephrine release from the adrenal medulla.'
    ],
    correctIndex: 1,
    explanation: 'Acetylcholinesterase normally breaks down ACh in the synaptic cleft. Blocking it → ACh accumulates → prolonged binding to nAChRs at the NMJ → sustained depolarization → spastic paralysis (like organophosphate poisoning). This is the mechanism of nerve agents and some insecticides.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'map-ent-6b',
    question: 'The juxtaglomerular apparatus (JGA) releases renin when:',
    options: [
      'Blood pressure in the afferent arteriole increases.',
      'Blood pressure in the afferent arteriole decreases, Na⁺ delivery to the macula densa falls, or sympathetic stimulation occurs.',
      'Aldosterone levels are high.',
      'ANP (atrial natriuretic peptide) is released from the atria.'
    ],
    correctIndex: 1,
    explanation: 'Renin is released from JG cells in response to: (1) decreased stretch in the afferent arteriole (↓BP), (2) decreased NaCl at the macula densa, and (3) β1-adrenergic stimulation. Renin initiates the RAAS cascade → angiotensin II → aldosterone → ↑Na⁺/water retention → ↑BP.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'map-ent-7a',
    question: 'Type I muscle fibers (slow-twitch, oxidative) are better suited for endurance exercise than type II fibers because they:',
    options: [
      'Have fewer mitochondria but more glycogen stores.',
      'Are larger in diameter and generate more peak force.',
      'Rely primarily on anaerobic glycolysis for rapid ATP production.',
      'Have abundant mitochondria, high myoglobin content, and resist fatigue via aerobic metabolism.'
    ],
    correctIndex: 3,
    explanation: 'Type I (slow-twitch, red, oxidative) fibers: rich in mitochondria, high myoglobin (O₂ storage), dense capillary supply, rely on aerobic respiration → fatigue-resistant, ideal for endurance. Type IIb (fast-twitch, white, glycolytic) fibers: large, powerful, fatigue quickly, rely on anaerobic glycolysis.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'map-ent-7b',
    question: 'Inflammation is a hallmark of the innate immune response. Which of the following best describes the role of histamine in acute inflammation?',
    options: [
      'Histamine activates complement proteins to lyse bacterial membranes.',
      'Histamine is released from mast cells, causing vasodilation and increased vascular permeability, facilitating immune cell recruitment.',
      'Histamine kills bacteria directly through oxidative burst mechanisms.',
      'Histamine activates cytotoxic T cells to clear infected tissue.'
    ],
    correctIndex: 1,
    explanation: 'Mast cell degranulation releases histamine and other mediators. Histamine acts on H1 receptors on venular endothelium, causing vasodilation (redness, warmth) and increased vascular permeability (edema formation). This allows plasma proteins and phagocytes to access the site of infection.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Musculoskeletal System' },
    { partNumber: 2, partTitle: 'Digestive System' },
    { partNumber: 3, partTitle: 'Immune System' },
    { partNumber: 4, partTitle: 'Reproductive System' },
    { partNumber: 5, partTitle: 'Homeostasis' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
