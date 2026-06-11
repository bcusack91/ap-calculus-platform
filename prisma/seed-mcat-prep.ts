import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Creating MCAT Prep course...')

  // ─── Create the MCAT Prep Course ───
  const mcat = await prisma.course.upsert({
    where: { slug: 'mcat-prep' },
    update: {},
    create: {
      slug: 'mcat-prep',
      name: 'MCAT Prep',
      description: 'Master the MCAT with comprehensive review of Chem/Phys, CARS, Bio/Biochem, and Psych/Soc sections.',
      order: 102,
      icon: '🏥',
      color: 'teal'
    }
  })
  console.log('✅ MCAT Prep course created:', mcat.id)

  // ═══════════════════════════════════════════
  // Category 1: Chemical & Physical Foundations
  // ═══════════════════════════════════════════
  const chemPhys = await prisma.category.upsert({
    where: { slug: 'mcat-chem-phys-foundations' },
    update: {},
    create: {
      slug: 'mcat-chem-phys-foundations',
      name: 'Chemical & Physical Foundations',
      description: 'General chemistry, organic chemistry, physics, and biochemistry for the MCAT',
      order: 1,
      icon: '⚗️',
      courseId: mcat.id
    }
  })
  console.log('  ✅ Category: Chemical & Physical Foundations')

  // Topic 1: General Chemistry
  await prisma.topic.upsert({
    where: { slug: 'mcat-general-chemistry-mcat' },
    update: {},
    create: {
      slug: 'mcat-general-chemistry-mcat',
      title: 'General Chemistry',
      description: 'Atomic structure, bonding, stoichiometry, acids/bases, kinetics, and thermodynamics',
      order: 1,
      categoryId: chemPhys.id,
      textContent: `# General Chemistry for the MCAT

## Atomic Structure & Periodic Trends

Electron configuration determines chemical behavior. The arrangement of electrons follows the Aufbau principle, filling lower energy orbitals first: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰...

**Periodic Trends:**
- **Electronegativity:** Increases across a period (left to right) and up a group
- **Ionization Energy:** Increases across a period and up a group  
- **Atomic Radius:** Decreases across a period, increases down a group
- **Effective Nuclear Charge (Zeff):** Increases across a period

## Chemical Bonding

- **Ionic bonds:** Transfer of electrons between metals and nonmetals
- **Covalent bonds:** Sharing of electrons between nonmetals
- **VSEPR Theory:** Predicts molecular geometry based on electron pair repulsion
- **Hybridization:** sp (linear), sp² (trigonal planar), sp³ (tetrahedral)

## Acids, Bases & Buffers

**Brønsted-Lowry:** Acids donate H⁺, bases accept H⁺
**Lewis:** Acids accept electron pairs, bases donate electron pairs

$$\\text{pH} = -\\log[\\text{H}^+]$$
$$\\text{Henderson-Hasselbalch: } \\text{pH} = \\text{p}K_a + \\log\\frac{[A^-]}{[HA]}$$

## Chemical Kinetics

$$\\text{Rate} = k[A]^m[B]^n$$
$$\\text{Arrhenius: } k = Ae^{-E_a/RT}$$

Catalysts lower activation energy without being consumed.
`
    }
  })

  // Topic 2: Organic Chemistry
  await prisma.topic.upsert({
    where: { slug: 'mcat-organic-chemistry-mcat' },
    update: {},
    create: {
      slug: 'mcat-organic-chemistry-mcat',
      title: 'Organic Chemistry',
      description: 'Functional groups, stereochemistry, substitution/elimination, carbonyl chemistry, and spectroscopy',
      order: 2,
      categoryId: chemPhys.id,
      textContent: `# Organic Chemistry for the MCAT

## Functional Groups

Key functional groups to know:
- **Hydroxyl (-OH):** Alcohols
- **Carbonyl (C=O):** Aldehydes and ketones
- **Carboxyl (-COOH):** Carboxylic acids
- **Amino (-NH₂):** Amines
- **Thiol (-SH):** Thiols

## Stereochemistry

A **chiral center** has four different substituents. Assign R/S using Cahn-Ingold-Prelog priority rules.

- **Enantiomers:** Non-superimposable mirror images (same physical properties, opposite optical rotation)
- **Diastereomers:** Stereoisomers that are NOT mirror images (different physical properties)

## Substitution & Elimination

| Reaction | Steps | Favored By |
|----------|-------|------------|
| SN1 | 2 (carbocation) | 3° substrate, polar protic solvent |
| SN2 | 1 (backside attack) | 1° substrate, strong nucleophile |
| E1 | 2 (carbocation) | 3° substrate, heat |
| E2 | 1 (anti-periplanar) | Strong base, heat |

## Spectroscopy

- **IR:** O-H ~3300 cm⁻¹ (broad), C=O ~1700 cm⁻¹ (sharp)
- **¹H NMR:** Chemical shift reflects electronic environment; splitting follows n+1 rule
- **Mass Spec:** Molecular ion peak gives molecular weight
`
    }
  })

  // Topic 3: Physics - Mechanics
  await prisma.topic.upsert({
    where: { slug: 'mcat-physics-mechanics-mcat' },
    update: {},
    create: {
      slug: 'mcat-physics-mechanics-mcat',
      title: 'Physics: Mechanics',
      description: 'Kinematics, forces, work/energy, momentum, fluids, and waves',
      order: 3,
      categoryId: chemPhys.id,
      textContent: `# Physics: Mechanics for the MCAT

## Kinematics

$$v = v_0 + at$$
$$x = x_0 + v_0 t + \\frac{1}{2}at^2$$
$$v^2 = v_0^2 + 2a(x - x_0)$$

**Projectile Motion:** Horizontal velocity is constant; vertical acceleration = g = 9.8 m/s²

## Newton's Laws

1. An object at rest stays at rest (inertia)
2. **F = ma** — net force equals mass times acceleration
3. Every action has an equal and opposite reaction

**Friction:** Static (fs ≤ μsN) prevents motion; Kinetic (fk = μkN) acts during motion

## Work, Energy & Power

$$W = Fd\\cos\\theta$$
$$KE = \\frac{1}{2}mv^2$$
$$PE_{gravity} = mgh$$
$$\\text{Conservation: } KE_1 + PE_1 = KE_2 + PE_2$$

## Fluids

$$P = P_0 + \\rho gh \\quad \\text{(hydrostatic pressure)}$$
$$F_b = \\rho_{fluid} \\cdot V_{displaced} \\cdot g \\quad \\text{(buoyancy)}$$
$$P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g h_2 \\quad \\text{(Bernoulli)}$$
`
    }
  })

  // Topic 4: Physics - Electricity & Optics
  await prisma.topic.upsert({
    where: { slug: 'mcat-physics-electricity-mcat' },
    update: {},
    create: {
      slug: 'mcat-physics-electricity-mcat',
      title: 'Physics: Electricity & Optics',
      description: 'Electrostatics, circuits, magnetism, optics, nuclear physics, and electrochemistry',
      order: 4,
      categoryId: chemPhys.id,
      textContent: `# Physics: Electricity & Optics for the MCAT

## Electrostatics

$$F = \\frac{kq_1 q_2}{r^2} \\quad \\text{(Coulomb's Law)}$$
$$E = \\frac{kQ}{r^2} \\quad \\text{(Electric Field)}$$
$$V = \\frac{kQ}{r} \\quad \\text{(Electric Potential)}$$

## Circuits

$$V = IR \\quad \\text{(Ohm's Law)}$$
$$P = IV = I^2R = \\frac{V^2}{R}$$

- **Series:** R_total = R₁ + R₂ + ...; same current
- **Parallel:** 1/R_total = 1/R₁ + 1/R₂ + ...; same voltage

## Optics

$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\quad \\text{(Snell's Law)}$$
$$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\quad \\text{(Thin Lens)}$$

## Electrochemistry

- **Galvanic cells:** Spontaneous, positive E°cell
- **Electrolytic cells:** Non-spontaneous, require external voltage
- **Nernst equation:** E = E° - (RT/nF)ln(Q)
`
    }
  })

  // Topic 5: Biochemistry Foundations
  await prisma.topic.upsert({
    where: { slug: 'mcat-biochemistry-foundations-mcat' },
    update: {},
    create: {
      slug: 'mcat-biochemistry-foundations-mcat',
      title: 'Biochemistry Foundations',
      description: 'Amino acids, enzyme kinetics, metabolism, lipids, nucleic acids, and bioenergetics',
      order: 5,
      categoryId: chemPhys.id,
      textContent: `# Biochemistry Foundations for the MCAT

## Amino Acids & Protein Structure

20 standard amino acids classified by side chain:
- **Nonpolar:** G, A, V, L, I, P, F, W, M
- **Polar:** S, T, C, Y, N, Q
- **Positively charged:** K, R, H
- **Negatively charged:** D, E

**Protein Structure:**
- Primary: amino acid sequence
- Secondary: α-helix, β-sheet (H-bonds)
- Tertiary: 3D fold (hydrophobic, ionic, disulfide)
- Quaternary: multiple subunits

## Enzyme Kinetics

$$v = \\frac{V_{max}[S]}{K_m + [S]} \\quad \\text{(Michaelis-Menten)}$$

- **Competitive inhibitor:** Increases apparent Km, Vmax unchanged
- **Non-competitive inhibitor:** Decreases Vmax, Km unchanged

## Metabolism

- **Glycolysis:** Glucose → 2 pyruvate + 2 ATP + 2 NADH (cytoplasm)
- **Krebs Cycle:** Acetyl-CoA → 2 CO₂ + 3 NADH + 1 FADH₂ + 1 GTP
- **ETC/Oxidative Phosphorylation:** NADH → ~2.5 ATP; FADH₂ → ~1.5 ATP
- **Total from glucose:** ~30-32 ATP
`
    }
  })

  // ═══════════════════════════════════════════
  // Category 2: CARS (Critical Analysis & Reasoning Skills)
  // ═══════════════════════════════════════════
  const cars = await prisma.category.upsert({
    where: { slug: 'mcat-cars' },
    update: {},
    create: {
      slug: 'mcat-cars',
      name: 'Critical Analysis & Reasoning Skills (CARS)',
      description: 'Passage-based reasoning from humanities and social sciences',
      order: 2,
      icon: '📖',
      courseId: mcat.id
    }
  })
  console.log('  ✅ Category: CARS')

  // Topic 6: CARS Strategy
  await prisma.topic.upsert({
    where: { slug: 'mcat-cars-strategy-mcat' },
    update: {},
    create: {
      slug: 'mcat-cars-strategy-mcat',
      title: 'CARS Strategy',
      description: 'Overview, active reading, main idea identification, inference, and question types',
      order: 1,
      categoryId: cars.id,
      textContent: `# CARS Strategy for the MCAT

## Overview

CARS = 53 questions in 90 minutes across 9 passages. NO outside knowledge is needed — everything you need is in the passage.

Passages come from humanities, social sciences, ethics, philosophy, and cultural studies.

## Active Reading

- Build a mental outline of each paragraph's purpose
- Note transition words: however, moreover, nevertheless — they signal shifts
- Paraphrase each paragraph in one sentence
- Identify the author's thesis and tone

## Question Types

1. **Foundations of Comprehension:** Answer is directly stated in the passage
2. **Reasoning Within the Text:** Evaluate the logic and structure
3. **Reasoning Beyond the Text:** Apply passage ideas to new situations

## Common Traps

- Extreme language ("always," "never") is usually wrong
- Partially correct answers that miss a key nuance
- Answers that are true but not supported by the passage
- Opposite of the author's actual view
`
    }
  })

  // Topic 7: CARS Passages
  await prisma.topic.upsert({
    where: { slug: 'mcat-cars-passages-mcat' },
    update: {},
    create: {
      slug: 'mcat-cars-passages-mcat',
      title: 'CARS Passage Types',
      description: 'Humanities, social science, ethics, arts, comparative passages, and time management',
      order: 2,
      categoryId: cars.id,
      textContent: `# CARS Passage Types

## Humanities
History, literature, philosophy, religion — often argumentative or interpretive. Look for the author's thesis and the evidence used to support it.

## Social Science
Psychology, sociology, anthropology, economics. Data or studies may be described — evaluate methodology and conclusions. Watch for correlation vs. causation.

## Ethics & Philosophy
Moral dilemmas or competing ethical frameworks. Common frameworks: utilitarianism (outcomes), deontology (duties), virtue ethics (character).

## Arts & Culture
Art, music, architecture, literary criticism. Focus on the author's evaluation and cultural significance.

## Time Management
- 10 minutes per passage (9 × 10 = 90 min)
- ~4 minutes reading, ~6 minutes for ~6 questions
- If stuck >90 seconds, flag and move on
- Never leave blanks — no penalty for wrong answers
`
    }
  })

  // Topic 8: CARS Reasoning
  await prisma.topic.upsert({
    where: { slug: 'mcat-cars-reasoning-mcat' },
    update: {},
    create: {
      slug: 'mcat-cars-reasoning-mcat',
      title: 'CARS Logical Reasoning',
      description: 'Logical reasoning, strengthening/weakening arguments, assumptions, evidence, and fallacies',
      order: 3,
      categoryId: cars.id,
      textContent: `# CARS Logical Reasoning

## Argument Structure
Arguments have **premises** (evidence) and **conclusions** (claims). Identify both.

## Strengthening & Weakening
- **Strengthen:** Evidence that supports the conclusion or fills a gap
- **Weaken:** Evidence that undermines a premise or provides a counterexample
- The answer must address the specific connection between evidence and conclusion

## Assumptions
An assumption is an unstated premise the argument relies on.
- **Test by negation:** If negating the choice destroys the argument, it's a necessary assumption

## Common Fallacies
- **Ad hominem:** Attacking the person, not the argument
- **Straw man:** Misrepresenting an opponent's position
- **False dichotomy:** Only two options when more exist
- **Appeal to authority:** Citing authority rather than evidence
`
    }
  })

  // ═══════════════════════════════════════════
  // Category 3: Biological & Biochemical Foundations
  // ═══════════════════════════════════════════
  const bioBiochem = await prisma.category.upsert({
    where: { slug: 'mcat-bio-biochem-foundations' },
    update: {},
    create: {
      slug: 'mcat-bio-biochem-foundations',
      name: 'Biological & Biochemical Foundations',
      description: 'Cell biology, molecular biology, organ systems, genetics, anatomy, and microbiology',
      order: 3,
      icon: '🧬',
      courseId: mcat.id
    }
  })
  console.log('  ✅ Category: Bio/Biochem Foundations')

  // Topic 9: Cell Biology
  await prisma.topic.upsert({
    where: { slug: 'mcat-cell-biology-mcat' },
    update: {},
    create: {
      slug: 'mcat-cell-biology-mcat',
      title: 'Cell Biology',
      description: 'Cell structure, membrane transport, signaling, cell cycle, apoptosis, and stem cells',
      order: 1,
      categoryId: bioBiochem.id,
      textContent: `# Cell Biology for the MCAT

## Cell Structure
- **Nucleus:** Contains DNA, site of transcription
- **Mitochondria:** ATP via oxidative phosphorylation
- **Rough ER:** Ribosome-studded, protein synthesis
- **Smooth ER:** Lipid synthesis, detoxification
- **Golgi:** Modifies, sorts, packages proteins

## Membrane Transport
- **Passive:** Diffusion, osmosis, facilitated — no energy, down gradient
- **Active:** Na⁺/K⁺ ATPase (3 Na⁺ out, 2 K⁺ in per ATP)
- **Endocytosis:** Phagocytosis, pinocytosis, receptor-mediated
- **Exocytosis:** Vesicle fusion with membrane

## Cell Signaling
- **GPCRs:** G-protein coupled receptors → second messengers (cAMP, IP3, Ca²⁺)
- **RTKs:** Receptor tyrosine kinases — dimerize and autophosphorylate

## Cell Cycle
G1 → S (DNA synthesis) → G2 → M (mitosis)
Checkpoints at G1/S, G2/M, and metaphase
`
    }
  })

  // Topic 10: Molecular Biology
  await prisma.topic.upsert({
    where: { slug: 'mcat-molecular-biology-mcat' },
    update: {},
    create: {
      slug: 'mcat-molecular-biology-mcat',
      title: 'Molecular Biology',
      description: 'DNA replication, transcription, translation, gene regulation, mutations, and biotech',
      order: 2,
      categoryId: bioBiochem.id,
      textContent: `# Molecular Biology for the MCAT

## DNA Replication
Semiconservative replication:
- **Helicase** unwinds DNA
- **Primase** lays RNA primer
- **DNA Pol III** extends 5'→3'
- **Ligase** seals Okazaki fragments on lagging strand

## Transcription
RNA polymerase reads template 3'→5', synthesizes mRNA 5'→3'.

**Post-transcriptional processing:**
- 5' cap (7-methylguanosine)
- 3' poly-A tail
- Intron splicing (alternative splicing → multiple proteins from one gene)

## Translation
- Start codon: **AUG** (methionine)
- Stop codons: **UAA, UAG, UGA**
- tRNA anticodon pairs with mRNA codon

## Biotechnology
- **PCR:** Amplifies DNA using primers + Taq polymerase + thermal cycling
- **Gel electrophoresis:** Separates by size (smaller = faster)
- **CRISPR-Cas9:** Gene editing with guide RNA
- **Blots:** Southern (DNA), Northern (RNA), Western (protein) — SNOWdrop
`
    }
  })

  // Topic 11: Organ Systems
  await prisma.topic.upsert({
    where: { slug: 'mcat-organ-systems-mcat' },
    update: {},
    create: {
      slug: 'mcat-organ-systems-mcat',
      title: 'Organ Systems',
      description: 'Cardiovascular, respiratory, renal, digestive, endocrine, and nervous systems',
      order: 3,
      categoryId: bioBiochem.id,
      textContent: `# Organ Systems for the MCAT

## Cardiovascular
- 4 chambers: right side → lungs (pulmonary), left side → body (systemic)
- SA node pacemaker → atrial contraction → AV node → ventricular contraction
- Hemoglobin: cooperative binding, Bohr effect (low pH → right shift → O₂ release)

## Respiratory
- Negative pressure breathing (diaphragm contraction)
- Gas exchange in alveoli via partial pressure gradients

## Renal
- Nephron: glomerulus → PCT → Loop of Henle → DCT → Collecting duct
- ADH: increases water reabsorption
- Aldosterone: increases Na⁺ reabsorption (RAAS)

## Digestive
- Stomach: HCl, pepsin (protein digestion)
- Small intestine: pancreatic enzymes + bile salts
- Absorption via villi

## Endocrine
- Hypothalamus → Pituitary → Target organs
- Insulin (↓glucose) vs. Glucagon (↑glucose)
- Thyroid (T3/T4: ↑metabolism), PTH (↑Ca²⁺)

## Nervous
- CNS (brain + spinal cord) + PNS (somatic + autonomic)
- Sympathetic (fight/flight) vs. Parasympathetic (rest/digest)
- Action potential: resting (−70mV) → depolarization (Na⁺ in) → repolarization (K⁺ out)
`
    }
  })

  // Topic 12: Genetics & Evolution
  await prisma.topic.upsert({
    where: { slug: 'mcat-genetics-evolution-mcat' },
    update: {},
    create: {
      slug: 'mcat-genetics-evolution-mcat',
      title: 'Genetics & Evolution',
      description: 'Mendelian genetics, population genetics, natural selection, speciation, and immunology',
      order: 4,
      categoryId: bioBiochem.id,
      textContent: `# Genetics & Evolution for the MCAT

## Mendelian Genetics
- **Segregation:** Alleles separate in meiosis
- **Independent Assortment:** Genes on different chromosomes sort independently
- Punnett squares: Aa × Aa → 3:1 phenotype ratio

## Non-Mendelian Patterns
- Incomplete dominance (intermediate phenotype)
- Codominance (both expressed, e.g., AB blood type)
- X-linked inheritance (males hemizygous)
- Polygenic traits (continuous distribution)

## Population Genetics
$$p^2 + 2pq + q^2 = 1 \\quad \\text{(Hardy-Weinberg)}$$

Conditions for equilibrium: no mutation, no selection, no migration, random mating, large population.

## Natural Selection & Speciation
- Directional, stabilizing, and disruptive selection
- Allopatric (geographic barrier) vs. sympatric speciation

## Immune System
- **Innate:** Skin, phagocytes, complement, inflammation (fast, nonspecific)
- **Adaptive:** B cells (antibodies) + T cells (cell-mediated) — slow, specific, memory
- **MHC I:** All nucleated cells → CD8⁺ T cells
- **MHC II:** APCs → CD4⁺ helper T cells
`
    }
  })

  // Topic 13: Anatomy & Physiology
  await prisma.topic.upsert({
    where: { slug: 'mcat-anatomy-physiology-mcat' },
    update: {},
    create: {
      slug: 'mcat-anatomy-physiology-mcat',
      title: 'Anatomy & Physiology',
      description: 'Musculoskeletal, reproductive, integumentary, sensory systems, and embryology',
      order: 5,
      categoryId: bioBiochem.id,
      textContent: `# Anatomy & Physiology for the MCAT

## Musculoskeletal
- **Skeletal muscle:** Voluntary, striated; sarcomere = functional unit
- **Sliding filament theory:** Ca²⁺ → troponin → actin-myosin binding
- **Bone:** Osteoblasts build, osteoclasts resorb

## Reproductive System
- Male: Testes → sperm + testosterone
- Female: Ovaries → eggs + estrogen/progesterone
- Menstrual cycle: Follicular (FSH) → Ovulation (LH surge) → Luteal (progesterone)

## Sensory Systems
- **Vision:** Rods (dim light), cones (color)
- **Hearing:** Cochlea transduces sound waves
- **Vestibular:** Semicircular canals (rotation), otoliths (linear)

## Embryology
- Cleavage → Morula → Blastocyst
- Gastrulation: ectoderm (skin, nerves), mesoderm (muscle, bone), endoderm (GI, lungs)
- Neurulation: neural tube → CNS
`
    }
  })

  // Topic 14: Microbiology
  await prisma.topic.upsert({
    where: { slug: 'mcat-microbiology-mcat' },
    update: {},
    create: {
      slug: 'mcat-microbiology-mcat',
      title: 'Microbiology',
      description: 'Bacteria, viruses, fungi, microbial genetics, antimicrobials, and host-pathogen interactions',
      order: 6,
      categoryId: bioBiochem.id,
      textContent: `# Microbiology for the MCAT

## Bacteria
- Prokaryotic, cell wall (peptidoglycan)
- **Gram+:** Thick peptidoglycan (purple); **Gram−:** Thin + outer membrane (pink)
- Shapes: cocci (spheres), bacilli (rods), spirilla (spirals)
- Binary fission (asexual, rapid)

## Viruses
- Obligate intracellular parasites; DNA or RNA genome
- **Lytic:** Replicate immediately, lyse cell
- **Lysogenic:** Integrate into host genome
- **Retroviruses (HIV):** RNA → DNA via reverse transcriptase

## Microbial Genetics
- **Transformation:** Uptake of free DNA
- **Transduction:** DNA transfer via bacteriophage
- **Conjugation:** Direct transfer via pilus (F-plasmid)
- Plasmids often carry antibiotic resistance genes

## Antimicrobials
- Target cell wall (penicillin), protein synthesis (tetracycline), DNA (fluoroquinolones)
- Resistance: mutation or horizontal gene transfer
`
    }
  })

  // ═══════════════════════════════════════════
  // Category 4: Psychological, Social & Biological Foundations
  // ═══════════════════════════════════════════
  const psychSoc = await prisma.category.upsert({
    where: { slug: 'mcat-psych-soc-foundations' },
    update: {},
    create: {
      slug: 'mcat-psych-soc-foundations',
      name: 'Psychological, Social & Biological Foundations',
      description: 'Psychology, sociology, and their biological bases',
      order: 4,
      icon: '🧠',
      courseId: mcat.id
    }
  })
  console.log('  ✅ Category: Psych/Soc Foundations')

  // Topic 15: Psychology & Behavior
  await prisma.topic.upsert({
    where: { slug: 'mcat-psychology-behavior-mcat' },
    update: {},
    create: {
      slug: 'mcat-psychology-behavior-mcat',
      title: 'Psychology & Behavior',
      description: 'Sensation, perception, learning, memory, cognition, motivation, development, and personality',
      order: 1,
      categoryId: psychSoc.id,
      textContent: `# Psychology & Behavior for the MCAT

## Sensation & Perception
- **Absolute threshold:** Minimum intensity detected 50% of the time
- **Weber's Law:** JND is proportional to stimulus magnitude
- **Signal Detection Theory:** Sensitivity + response bias

## Learning
- **Classical conditioning (Pavlov):** CS + UCS → CR
- **Operant conditioning (Skinner):** Reinforcement ↑ behavior, Punishment ↓ behavior
- **Memory:** Sensory → Short-term (7±2) → Long-term

## Cognition
- **Broca's area:** Speech production (damage → nonfluent aphasia)
- **Wernicke's area:** Comprehension (damage → fluent aphasia)
- Cognitive biases: confirmation bias, anchoring, framing

## Motivation & Emotion
- **Maslow's Hierarchy:** Physiological → Safety → Belonging → Esteem → Self-actualization
- **James-Lange:** Event → arousal → emotion
- **Schachter-Singer:** Arousal + cognitive label = emotion

## Development
- **Piaget:** Sensorimotor → Preoperational → Concrete → Formal
- **Erikson:** 8 psychosocial stages
- **Kohlberg:** Pre-conventional → Conventional → Post-conventional
`
    }
  })

  // Topic 16: Sociology
  await prisma.topic.upsert({
    where: { slug: 'mcat-sociology-mcat' },
    update: {},
    create: {
      slug: 'mcat-sociology-mcat',
      title: 'Sociology',
      description: 'Social structure, culture, socialization, group dynamics, health disparities, and demographics',
      order: 2,
      categoryId: psychSoc.id,
      textContent: `# Sociology for the MCAT

## Social Stratification
- Class defined by income, education, occupation, wealth
- **Social mobility:** Intragenerational (within lifetime) vs. intergenerational (across generations)
- **Intersectionality:** Overlapping identities create unique experiences

## Culture & Socialization
- **Culture:** Shared beliefs, values, norms
- **Agents of socialization:** Family, peers, media, school, religion
- **Ethnocentrism vs. Cultural Relativism**

## Social Interaction
- **Symbolic interactionism:** Meaning created through interaction
- **Dramaturgy (Goffman):** Front stage vs. backstage
- **Looking-glass self (Cooley):** Self-concept based on perceived perceptions

## Group Dynamics
- **Conformity (Asch):** Group pressure influences answers
- **Obedience (Milgram):** Authority influences harmful actions
- **Groupthink:** Desire for harmony → poor decisions

## Health Disparities
- Social determinants: income, education, race, environment, healthcare access
- **Sick role (Parsons):** Society expects sick to seek help and try to recover
`
    }
  })

  // ═══════════════════════════════════════════
  // Category 5: MCAT Strategy & Test Day
  // ═══════════════════════════════════════════
  const strategy = await prisma.category.upsert({
    where: { slug: 'mcat-strategy' },
    update: {},
    create: {
      slug: 'mcat-strategy',
      name: 'MCAT Strategy & Test Day',
      description: 'Science passage strategy, test format, study planning, and test day tips',
      order: 5,
      icon: '🎯',
      courseId: mcat.id
    }
  })
  console.log('  ✅ Category: Strategy & Test Day')

  // Topic 17: Science Passage Strategy
  await prisma.topic.upsert({
    where: { slug: 'mcat-science-passage-strategy-mcat' },
    update: {},
    create: {
      slug: 'mcat-science-passage-strategy-mcat',
      title: 'Science Passage Strategy',
      description: 'Reading passages, data interpretation, experimental design, discrete questions, and common traps',
      order: 1,
      categoryId: strategy.id,
      textContent: `# Science Passage Strategy

## Reading Science Passages
- 4-7 paragraphs with figures, graphs, and experimental data
- Read the passage first, note hypothesis and experimental design
- Identify variables: independent, dependent, controlled
- Don't memorize details — refer back as needed

## Data Interpretation
- Read axis labels, units, and scales FIRST
- Identify trends: direct, inverse, or no correlation
- Tables: cross-reference rows and columns

## Experimental Design
- Control group vs. experimental group
- Positive control validates the assay; negative control confirms no false positives
- Randomization and blinding reduce bias
- Statistical significance: p < 0.05

## Common Traps
- Extreme answers are usually wrong
- Data in the passage ≠ support for the answer
- Answer the question asked, not what you think they should ask
- If two answers are opposites, one is likely correct
`
    }
  })

  // Topic 18: Test Day Strategy
  await prisma.topic.upsert({
    where: { slug: 'mcat-test-day-strategy-mcat' },
    update: {},
    create: {
      slug: 'mcat-test-day-strategy-mcat',
      title: 'Test Day Strategy',
      description: 'MCAT format, scoring, study planning, section strategies, and test day preparation',
      order: 2,
      categoryId: strategy.id,
      textContent: `# MCAT Test Day Strategy

## Format & Scoring
- **4 sections:** Chem/Phys (59Q, 95 min), CARS (53Q, 90 min), Bio/Biochem (59Q, 95 min), Psych/Soc (59Q, 95 min)
- Total: 230 questions, ~6 hours 15 minutes with breaks
- Each section: 118-132; Total: 472-528; Median ~500

## Study Planning
- 3-6 month timeline typical
- Content review (1-2 months) → Practice passages (2-3 months) → Full-lengths (final month)
- Use spaced repetition (Anki) for high-yield facts
- Track performance by topic to target weak areas

## Section Tips
- **Chem/Phys:** Strong on calculations — practice dimensional analysis
- **CARS:** Practice daily, at least 1 passage/day
- **Bio/Biochem:** Most content-heavy — amino acids, metabolism, organ systems are highest yield
- **Psych/Soc:** Terminology-heavy, often easiest to improve

## Test Day
- Bring: valid ID, confirmation, snacks, layers, watch
- Get 8+ hours of sleep the night before
- During breaks: eat, hydrate, stretch — do NOT review material
- Competitive scores: 510+ MD, 505+ DO, 515+ top-25 schools
`
    }
  })

  console.log('')
  console.log('✅ MCAT Prep course fully seeded!')
  console.log('   5 categories, 18 topics with full text content')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
