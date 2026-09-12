/**
 * Entrance Quiz — Anatomy and Physiology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Musculoskeletal System
  {
    id: 'map-ent-1a',
    question: 'During a skeletal muscle contraction, the binding of $Ca^{2+}$ to troponin causes:',
    options: [
      'Myosin heads to hydrolyze ATP, cocking them into the high-energy state.',
      'Tropomyosin to shift, exposing myosin-binding sites on actin.',
      'Cross-bridges to detach from actin so that the muscle can relax.',
      'Thin filaments to slide toward the Z-discs without myosin involvement.'
    ],
    correctIndex: 1,
    explanation: 'At rest, tropomyosin covers the myosin-binding sites on actin. $Ca^{2+}$ released from the sarcoplasmic reticulum binds troponin C, the troponin-tropomyosin complex changes shape, and tropomyosin rolls aside so myosin heads — already charged with ADP + Pi from an earlier ATP hydrolysis — can bind and drive the power stroke. ATP hydrolysis recocks the head independently of $Ca^{2+}$, and it is ATP BINDING (not $Ca^{2+}$) that detaches a cross-bridge.',
    partNumber: 1,
    partTitle: 'Musculoskeletal System'
  },
  {
    id: 'map-ent-1b',
    question: 'The sarcomere is the functional unit of a myofibril. During contraction, which band/zone SHORTENS?',
    options: [
      'The A band shortens while the I band and H zone both stay constant.',
      'Only the I band shortens, while the H zone gets wider.',
      'The I band and the H zone shorten; the A band stays constant.',
      'All three bands shorten, but the A band shortens least.'
    ],
    correctIndex: 2,
    explanation: 'In the sliding filament model the filaments themselves do not shorten; they overlap more. The A band equals the length of the thick filaments, so it never changes. The I band (thin filament only) and the H zone (thick filament only) are the regions of non-overlap, so both narrow as the Z-discs are pulled toward the M line.',
    partNumber: 1,
    partTitle: 'Musculoskeletal System'
  },

  // Part 2: Digestive System
  {
    id: 'map-ent-2a',
    question: 'Pepsinogen, the inactive zymogen of pepsin, is secreted by which gastric cells and activated by:',
    options: [
      'Chief cells; activated by gastric HCl at low pH.',
      'Parietal cells; activated by the intrinsic factor they secrete.',
      'G cells; activated by gastrin released into the circulation.',
      'Goblet cells; activated by duodenal enterokinase.'
    ],
    correctIndex: 0,
    explanation: 'Chief (zymogenic) cells of the gastric glands secrete pepsinogen; the pH ~2 environment created by parietal-cell HCl cleaves off the inhibitory propeptide to yield active pepsin, which then autocatalytically activates more pepsinogen. Parietal cells make HCl and intrinsic factor (for $B_{12}$ absorption, not zymogen activation), G cells secrete gastrin, and enterokinase acts in the duodenum on trypsinogen.',
    partNumber: 2,
    partTitle: 'Digestive System'
  },
  {
    id: 'map-ent-2b',
    question: 'Bile salts emulsify dietary fats in the small intestine. This process aids digestion because:',
    options: [
      'Bile salts hydrolyze triglycerides into fatty acids and glycerol.',
      'Emulsification increases fat-droplet surface area for pancreatic lipase.',
      'Bile salts carry fatty acids directly across the enterocyte membrane.',
      'Emulsification raises duodenal pH to the optimum for lipase activity.'
    ],
    correctIndex: 1,
    explanation: 'Bile salts are amphipathic cholesterol derivatives that break large fat globules into microdroplets, multiplying the lipid-water interface where pancreatic lipase (with colipase) can work. They are detergents, not enzymes, so they perform no hydrolysis; micelles ferry the products to the brush border but the fatty acids then cross the membrane on their own; and it is pancreatic bicarbonate, not emulsification, that neutralizes duodenal acid.',
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
    explanation: 'IgG is the most abundant serum immunoglobulin (~75%) and the isotype that dominates secondary responses after class switching in memory B cells. It is also the only isotype that crosses the placenta. IgM is the first antibody of a primary response, IgA dominates mucosal secretions, and IgE mediates allergy and antiparasitic responses.',
    partNumber: 3,
    partTitle: 'Immune System'
  },
  {
    id: 'map-ent-3b',
    question: 'MHC class I molecules present peptide antigens to:',
    options: [
      '$CD4^{+}$ helper T cells, which then license B-cell antibody production.',
      '$CD8^{+}$ cytotoxic T cells, which kill the presenting cell.',
      'B cells, driving immunoglobulin class switching.',
      'NK cells, triggering their release of cytotoxic granules.'
    ],
    correctIndex: 1,
    explanation: 'MHC class I is expressed on all nucleated cells and displays endogenous peptides — viral or tumor proteins made inside the cell — to $CD8^{+}$ cytotoxic T cells, which then kill that cell. MHC class II on professional APCs is what presents to $CD4^{+}$ helper T cells. NK cells read MHC class I with INHIBITORY receptors: normal class I expression suppresses NK killing, and it is the LOSS of class I ("missing self") that triggers degranulation.',
    partNumber: 3,
    partTitle: 'Immune System'
  },

  // Part 4: Reproductive System
  {
    id: 'map-ent-4a',
    question: 'The LH surge on approximately day 14 of the menstrual cycle triggers:',
    options: [
      'Proliferation of the endometrial lining ahead of implantation.',
      'Ovulation and conversion of the follicle into the corpus luteum.',
      'Menstruation, by causing progesterone levels to fall abruptly.',
      'The FSH rise that recruits a new cohort of follicles.'
    ],
    correctIndex: 1,
    explanation: 'Rising estrogen from the dominant follicle flips to POSITIVE feedback and produces the LH surge, which completes oocyte maturation and releases it about 36 hours later, then luteinizes the ruptured follicle into the corpus luteum that secretes progesterone through the luteal phase. Endometrial proliferation is driven by follicular estrogen; menstruation follows corpus luteum regression about two weeks later.',
    partNumber: 4,
    partTitle: 'Reproductive System'
  },
  {
    id: 'map-ent-4b',
    question: 'Testosterone produced by Leydig cells in the testes is required for:',
    options: [
      'Stimulating LH secretion from the anterior pituitary.',
      'Spermatogenesis and male secondary sexual characteristics.',
      'Inhibin synthesis by Sertoli cells, which promotes FSH release.',
      'Blocking aromatase so that no estrogen is produced in males.'
    ],
    correctIndex: 1,
    explanation: 'Testosterone (and its 5-alpha-reductase product DHT) acts on Sertoli cells to sustain spermatogenesis and drives male secondary sexual characteristics, muscle and bone anabolism, and libido. It INHIBITS rather than stimulates LH by negative feedback on the hypothalamus and pituitary; inhibin comes from Sertoli cells and suppresses FSH; and a fraction of testosterone is aromatized to estradiol, which males need for bone maturation.',
    partNumber: 4,
    partTitle: 'Reproductive System'
  },

  // Part 5: Homeostasis
  {
    id: 'map-ent-5a',
    question: 'Negative feedback is the primary mechanism maintaining homeostasis. In thermoregulation, if body temperature rises above the set point:',
    options: [
      'The hypothalamus raises metabolic heat production still further.',
      'Shivering and cutaneous vasoconstriction begin in the periphery.',
      'Sweat glands and cutaneous vasodilation are activated.',
      'Positive feedback drives temperature further above the set point.'
    ],
    correctIndex: 2,
    explanation: 'The defining feature of negative feedback is that the response OPPOSES the deviation: the hypothalamic thermostat detects the rise and recruits heat-losing effectors — sweating for evaporative loss and cutaneous vasodilation for radiative loss — returning temperature toward ~37°C. Shivering and vasoconstriction are the opposite (heat-conserving) responses used when temperature falls below set point.',
    partNumber: 5,
    partTitle: 'Homeostasis'
  },
  {
    id: 'map-ent-5b',
    question: 'Positive feedback in physiology:',
    options: [
      'Is always pathological and never serves a normal role.',
      'Occurs when the response amplifies the original stimulus.',
      'Restores the body to its set point faster than negative feedback does.',
      'Requires an external hormone and cannot be initiated internally.'
    ],
    correctIndex: 1,
    explanation: 'Positive feedback drives a variable further from its starting point rather than back toward it, so it cannot be a set-point-restoring mechanism. Physiology uses it for self-terminating cascades: oxytocin and uterine contractions during labor (delivery removes the stimulus) and platelet activation in clotting (a sealed vessel removes the stimulus). Both are normal, internally initiated, and not pathological.',
    partNumber: 5,
    partTitle: 'Homeostasis'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'map-ent-6a',
    question: 'A patient takes a drug that blocks acetylcholinesterase at the neuromuscular junction. The most likely consequence is:',
    options: [
      'Flaccid paralysis from too little ACh reaching the motor end plate.',
      'Sustained contraction and spasm as ACh accumulates in the cleft.',
      'A faster heart rate caused by excess sympathetic tone at the SA node.',
      'Reduced epinephrine release from the adrenal medulla.'
    ],
    correctIndex: 1,
    explanation: 'Acetylcholinesterase normally clears ACh from the synaptic cleft within milliseconds. Blocking it leaves ACh bound to nicotinic receptors, producing prolonged end-plate depolarization, fasciculations, and spastic paralysis — the picture of organophosphate and nerve-agent poisoning. Systemically the same drug SLOWS the heart (excess ACh at muscarinic receptors on the SA node) and INCREASES adrenal catecholamine release, since the preganglionic sympathetic fibers to the medulla are cholinergic.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'map-ent-6b',
    question: 'The juxtaglomerular apparatus (JGA) releases renin when:',
    options: [
      'Pressure in the afferent arteriole rises and stretches the JG cells.',
      'Afferent arteriolar pressure falls or macula densa NaCl delivery drops.',
      'Plasma aldosterone and angiotensin II are already high.',
      'Atrial natriuretic peptide is released in response to atrial stretch.'
    ],
    correctIndex: 1,
    explanation: 'Three stimuli release renin from JG cells: reduced stretch of the afferent arteriole (low renal perfusion pressure), reduced NaCl sensed by the macula densa, and beta-1 adrenergic sympathetic stimulation. Renin then starts the RAAS cascade toward angiotensin II and aldosterone, raising $Na^{+}$ and water retention and blood pressure. High angiotensin II/aldosterone feeds back to SUPPRESS renin, and ANP likewise inhibits it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'map-ent-7a',
    question: 'Type I muscle fibers (slow-twitch, oxidative) are better suited for endurance exercise than type II fibers because they:',
    options: [
      'Contain fewer mitochondria but hold much larger glycogen stores.',
      'Are larger in diameter and generate more peak force per fiber.',
      'Are packed with mitochondria and myoglobin, so they resist fatigue.',
      'Rely mainly on anaerobic glycolysis for very rapid ATP production.'
    ],
    correctIndex: 2,
    explanation: 'Type I fibers are red and oxidative: dense mitochondria, high myoglobin for local $O_{2}$ storage, and a rich capillary supply let them regenerate ATP aerobically almost indefinitely, so they fatigue slowly. The other options describe type IIb (fast-twitch, white, glycolytic) fibers, which are larger, more forceful, glycogen- and glycolysis-dependent, and fatigue quickly.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'map-ent-7b',
    question: 'Inflammation is a hallmark of the innate immune response. Which of the following best describes the role of histamine in acute inflammation?',
    options: [
      'It activates the complement cascade, which lyses bacterial membranes.',
      'It kills ingested bacteria directly through an oxidative burst.',
      'It causes vasodilation and a local rise in vascular permeability.',
      'It activates cytotoxic T cells to clear the infected tissue.'
    ],
    correctIndex: 2,
    explanation: 'Mast cells and basophils degranulate and release histamine, which acts on H1 receptors of venular endothelium: arteriolar vasodilation produces the redness and warmth, and endothelial contraction opens interendothelial gaps so plasma proteins and leukocytes can leave the vessel, producing the swelling. Complement is activated by antibody or microbial surfaces, the oxidative burst belongs to phagocytes, and cytotoxic T cells are adaptive rather than innate.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
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
