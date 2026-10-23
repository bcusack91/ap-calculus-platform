/**
 * AP diagnostic v2 blueprints: units, CED exam weightings and the per-sitting
 * quotas derived from them.
 *
 * Quotas: each unit's share of a sitting is proportional to the MIDPOINT of
 * its CED "Exam Weighting" range for the multiple-choice section, normalized
 * (Chemistry's midpoints sum to 89%, Physics 1's to 104%), and rounded to
 * whole questions by largest remainder. Ties go to the heavier unit, then the
 * lower unit number. Sitting lengths and time limits are the v1 ones (33–36
 * questions, 40–45 minutes), so the pacing a student knows does not change.
 *
 * Weight sources (CED text in ap-phase1-pipeline/trim/…, re-checked
 * 2026-10-16; none of these four changed for May 2027 per AP-2027-FORMATS.md):
 * - Chemistry: AP Chemistry CED (effective Fall 2024), "Units of Instruction /
 *   Exam Weighting" table (trim/ap-chemistry/ced/ced.txt l. 806).
 * - Biology: AP Biology CED © 2025 (updated framework, Fall 2025), "Units /
 *   Exam Weighting" table (trim/ap-biology/ced/ced.txt l. 861).
 * - Physics 1: AP Physics 1 CED (2024 revision, 8 units incl. Fluids), "Exam
 *   Weighting for the Multiple-Choice Section" (trim/ced-physics/ap-physics-1.txt l. 730).
 * - Calculus AB: AP Calculus AB and BC CED (2026–27 with Fall 2026
 *   clarifications), "Exam Weighting (AB)" column (scratchpad ced/calc-ced.txt
 *   l. 717; trim/ap-calculus-ab/CED-NOTES.md).
 * - Calculus BC: the same CED, "Exam Weighting (BC)" column (Units 1–8 at their
 *   BC weights, plus Units 9 and 10; the same ranges as the BC practice-form
 *   spec in scripts/check-ap-practice-form.ts). BC keeps the v1 BC sitting
 *   (40 questions, 55 minutes). Its bank is the AB v2 bank plus BC-only items
 *   (src/data/ap-diagnostic-v2/ap-calculus-bc), so Units 1–8 draw AB items at
 *   BC weights and Units 6–8 also draw the BC-only topics (6.11–6.14, 7.5,
 *   7.9, 8.13).
 */
import { PRECALC_TOPIC_TITLES } from '@/lib/course-includes'
import type { ApDiagV2Blueprint, ApDiagV2Course, ApDiagV2Difficulty, ApDiagV2Unit } from './types'

const CHEMISTRY: ApDiagV2Blueprint = {
  course: 'ap-chemistry',
  label: 'AP Chemistry',
  categoryPrefix: 'ap-chem-diagnostic',
  seenCourse: 'ap-chem',
  pagePath: '/ap-chem-diagnostic',
  length: 33,
  timeLimitMinutes: 40,
  setsPerSitting: 2,
  referenceSheet: 'ap-chemistry',
  weightSource: 'AP Chemistry CED (Fall 2024), Units of Instruction / Exam Weighting',
  units: [
    { id: 'unit-1', number: 1, name: 'Atomic Structure and Properties', weight: [7, 9], topicSlugs: ['moles-molar-mass', 'electron-configuration', 'periodic-trends', 'photoelectron-spectroscopy'] },
    { id: 'unit-2', number: 2, name: 'Compound Structure and Properties', weight: [7, 9], topicSlugs: ['lewis-structures-formal-charge', 'vsepr-molecular-geometry', 'types-of-chemical-bonds', 'hybridization-sigma-pi-bonds'] },
    { id: 'unit-3', number: 3, name: 'Properties of Substances and Mixtures', weight: [18, 22], topicSlugs: ['types-intermolecular-forces', 'ideal-gas-law', 'solutions-solubility', 'properties-states-matter', 'mixtures-separations', 'atomic-spectra'] },
    { id: 'unit-4', number: 4, name: 'Chemical Reactions', weight: [7, 9], topicSlugs: ['stoichiometry-limiting-reactants', 'net-ionic-equations', 'reaction-types', 'oxidation-reduction-reactions'] },
    { id: 'unit-5', number: 5, name: 'Kinetics', weight: [7, 9], topicSlugs: ['reaction-rates-and-rate-laws', 'integrated-rate-laws', 'reaction-mechanisms', 'activation-energy-arrhenius'] },
    { id: 'unit-6', number: 6, name: 'Thermochemistry', weight: [7, 9], topicSlugs: ['enthalpy-calorimetry'] },
    { id: 'unit-7', number: 7, name: 'Equilibrium', weight: [7, 9], topicSlugs: ['equilibrium-constants-expressions', 'le-chatelier-equilibrium-shifts', 'intro-equilibrium', 'reaction-quotient-le-chatelier', 'ice-tables-calculations', 'solubility-ksp', 'solubility-equilibrium'] },
    { id: 'unit-8', number: 8, name: 'Acids and Bases', weight: [11, 15], topicSlugs: ['acid-base-theories-ph', 'weak-acids-bases-ka-kb', 'buffer-solutions-henderson-hasselbalch', 'acid-base-titrations'] },
    { id: 'unit-9', number: 9, name: 'Thermodynamics and Electrochemistry', weight: [7, 9], topicSlugs: ['gibbs-free-energy', 'entropy-second-law', 'galvanic-cells-potentials', 'electrolytic-cells-faraday', 'spontaneity-free-energy-applications', 'galvanic-cells-thermo-applications', 'nernst-equation-concentration'] },
  ],
  topicNames: {
    'moles-molar-mass': 'Moles and Molar Mass',
    'electron-configuration': 'Atomic Structure and Electron Configuration',
    'periodic-trends': 'Periodic Trends',
    'photoelectron-spectroscopy': 'Photoelectron Spectroscopy (PES)',
    'atomic-spectra': 'Atomic Spectra: Photons, Quantized Energy Levels & PES',
    'types-of-chemical-bonds': 'Types of Chemical Bonds',
    'lewis-structures-formal-charge': 'Lewis Structures and Formal Charge',
    'vsepr-molecular-geometry': 'VSEPR Theory and Molecular Geometry',
    'hybridization-sigma-pi-bonds': 'Hybridization and Sigma/Pi Bonds',
    'types-intermolecular-forces': 'Types of Intermolecular Forces',
    'properties-states-matter': 'Properties of Solids, Liquids, and Gases',
    'solutions-solubility': 'Solutions and Solubility',
    'ideal-gas-law': 'Ideal Gas Law and Gas Properties',
    'mixtures-separations': 'Mixtures and Separation Techniques',
    'reaction-types': 'Types of Chemical Reactions',
    'stoichiometry-limiting-reactants': 'Stoichiometry and Limiting Reactants',
    'net-ionic-equations': 'Net Ionic Equations and Spectator Ions',
    'oxidation-reduction-reactions': 'Oxidation-Reduction (Redox) Reactions',
    'reaction-rates-and-rate-laws': 'Reaction Rates and Rate Laws',
    'integrated-rate-laws': 'Integrated Rate Laws and Half-Life',
    'activation-energy-arrhenius': 'Activation Energy and Temperature Effects',
    'reaction-mechanisms': 'Reaction Mechanisms and Intermediates',
    'enthalpy-calorimetry': 'Enthalpy and Calorimetry',
    'entropy-second-law': 'Entropy and the Second Law',
    'gibbs-free-energy': 'Gibbs Free Energy and Spontaneity',
    'equilibrium-constants-expressions': 'Equilibrium Constants and Expressions',
    'le-chatelier-equilibrium-shifts': "Le Chatelier's Principle and Equilibrium Shifts",
    'acid-base-theories-ph': 'Acid-Base Theories and pH Scale',
    'weak-acids-bases-ka-kb': 'Weak Acids, Weak Bases, and K_a/K_b',
    'buffer-solutions-henderson-hasselbalch': 'Buffer Solutions and Henderson-Hasselbalch',
    'acid-base-titrations': 'Acid-Base Titrations and Indicators',
    'spontaneity-free-energy-applications': 'Spontaneity and Free Energy Applications',
    'galvanic-cells-thermo-applications': 'Galvanic Cells and Thermodynamic Applications',
    'intro-equilibrium': 'Introduction to Chemical Equilibrium',
    'reaction-quotient-le-chatelier': "Reaction Quotient and Le Chatelier's Principle",
    'ice-tables-calculations': 'ICE Tables and Equilibrium Calculations',
    'solubility-equilibrium': 'Solubility Equilibrium: Ksp, Common-Ion Effect & Precipitation',
    'solubility-ksp': 'Solubility Equilibria and K_sp',
    'galvanic-cells-potentials': 'Galvanic Cells and Standard Cell Potentials',
    'nernst-equation-concentration': 'Nernst Equation and Concentration Effects',
    'electrolytic-cells-faraday': 'Electrolytic Cells and Quantitative Electrolysis',
  },
}

const BIOLOGY: ApDiagV2Blueprint = {
  course: 'ap-biology',
  label: 'AP Biology',
  categoryPrefix: 'ap-bio-diagnostic',
  seenCourse: 'ap-bio',
  pagePath: '/ap-bio-diagnostic',
  length: 33,
  timeLimitMinutes: 45,
  setsPerSitting: 3,
  referenceSheet: 'ap-biology',
  weightSource: 'AP Biology CED (© 2025, Fall 2025 framework), Units / Exam Weighting',
  units: [
    { id: 'unit-1', number: 1, name: 'Chemistry of Life', weight: [8, 11], topicSlugs: ['water-properties', 'proteins', 'nucleic-acids', 'carbohydrates', 'lipids'] },
    { id: 'unit-2', number: 2, name: 'Cells', weight: [10, 13], topicSlugs: ['cell-membrane-transport', 'cell-organelles', 'prokaryotic-eukaryotic-cells'] },
    { id: 'unit-3', number: 3, name: 'Cellular Energetics', weight: [12, 16], topicSlugs: ['enzymes-metabolism', 'cellular-respiration', 'photosynthesis', 'enzyme-kinetics'] },
    { id: 'unit-4', number: 4, name: 'Cell Communication and Cell Cycle', weight: [10, 15], topicSlugs: ['cell-signaling', 'cell-cycle-mitosis'] },
    { id: 'unit-5', number: 5, name: 'Heredity', weight: [8, 11], topicSlugs: ['mendelian-genetics', 'meiosis', 'non-mendelian-genetics', 'chromosomal-inheritance'] },
    { id: 'unit-6', number: 6, name: 'Gene Expression and Regulation', weight: [12, 16], topicSlugs: ['gene-regulation', 'transcription-rna-processing', 'translation', 'dna-replication'] },
    { id: 'unit-7', number: 7, name: 'Natural Selection', weight: [13, 20], topicSlugs: ['natural-selection', 'phylogeny-classification', 'speciation', 'natural-selection-adaptation'] },
    { id: 'unit-8', number: 8, name: 'Ecology', weight: [10, 15], topicSlugs: ['population-ecology', 'community-ecology', 'ecosystems-energy', 'population-dynamics'] },
  ],
  topicNames: {
    'water-properties': 'Water and Its Properties',
    'carbohydrates': 'Carbohydrates',
    'lipids': 'Lipids',
    'proteins': 'Proteins',
    'enzyme-kinetics': 'Enzyme Kinetics',
    'nucleic-acids': 'Nucleic Acids',
    'prokaryotic-eukaryotic-cells': 'Prokaryotic vs. Eukaryotic Cells',
    'cell-organelles': 'Cell Organelles',
    'cell-membrane-transport': 'Cell Membrane and Transport',
    'enzymes-metabolism': 'Enzymes and Metabolism',
    'cellular-respiration': 'Cellular Respiration',
    'photosynthesis': 'Photosynthesis',
    'cell-signaling': 'Cell Signaling and Signal Transduction',
    'cell-cycle-mitosis': 'Cell Cycle and Mitosis',
    'meiosis': 'Meiosis and Sexual Reproduction',
    'mendelian-genetics': 'Mendelian Genetics',
    'non-mendelian-genetics': 'Non-Mendelian Inheritance',
    'chromosomal-inheritance': 'Chromosomal Basis of Inheritance',
    'dna-replication': 'DNA Structure and Replication',
    'transcription-rna-processing': 'Transcription and RNA Processing',
    'translation': 'Translation and Protein Synthesis',
    'gene-regulation': 'Gene Regulation',
    'natural-selection': 'Natural Selection and Evolution',
    'natural-selection-adaptation': 'Natural Selection and Adaptation',
    'speciation': 'Speciation',
    'phylogeny-classification': 'Phylogeny and Classification',
    'population-ecology': 'Population Ecology',
    'community-ecology': 'Community Ecology and Interactions',
    'population-dynamics': 'Population Dynamics',
    'ecosystems-energy': 'Ecosystems and Energy Flow',
  },
}

const PHYSICS_1: ApDiagV2Blueprint = {
  course: 'ap-physics-1',
  label: 'AP Physics 1',
  categoryPrefix: 'ap-physics1-diagnostic',
  seenCourse: 'ap-physics1',
  pagePath: '/ap-physics1-diagnostic',
  length: 36,
  timeLimitMinutes: 45,
  setsPerSitting: 2,
  referenceSheet: 'ap-physics-1',
  weightSource: 'AP Physics 1 CED (2024 revision), Exam Weighting for the Multiple-Choice Section',
  units: [
    { id: 'unit-1', number: 1, name: 'Kinematics', weight: [10, 15], topicSlugs: ['one-dimensional-motion', 'motion-graphs', 'projectile-motion', 'two-dimensional-motion'] },
    { id: 'unit-2', number: 2, name: 'Force and Translational Dynamics', weight: [18, 23], topicSlugs: ['newtons-first-second-laws', 'friction', 'newtons-third-law', 'inclined-planes', 'uniform-circular-motion', 'centripetal-force', 'universal-gravitation'] },
    { id: 'unit-3', number: 3, name: 'Work, Energy, and Power', weight: [18, 23], topicSlugs: ['conservation-of-energy', 'work-and-kinetic-energy', 'gravitational-potential-energy', 'elastic-potential-energy', 'power-physics'] },
    { id: 'unit-4', number: 4, name: 'Linear Momentum', weight: [10, 15], topicSlugs: ['momentum-and-impulse', 'conservation-of-momentum', 'collisions'] },
    { id: 'unit-5', number: 5, name: 'Torque and Rotational Dynamics', weight: [10, 15], topicSlugs: ['torque-and-equilibrium', 'rotational-kinematics'] },
    { id: 'unit-6', number: 6, name: 'Energy and Momentum of Rotating Systems', weight: [5, 8], topicSlugs: ['angular-momentum'] },
    { id: 'unit-7', number: 7, name: 'Oscillations', weight: [5, 8], topicSlugs: ['introduction-to-shm', 'energy-in-shm'] },
    { id: 'unit-8', number: 8, name: 'Fluids', weight: [10, 15], topicSlugs: ['fluids-density-and-pressure', 'fluids-buoyancy', 'fluids-continuity', 'fluids-bernoulli'] },
  ],
  topicNames: {
    'one-dimensional-motion': 'One-Dimensional Motion',
    'motion-graphs': 'Motion Graphs',
    'two-dimensional-motion': 'Two-Dimensional Motion',
    'projectile-motion': 'Projectile Motion',
    'newtons-first-second-laws': "Newton's First and Second Laws",
    'newtons-third-law': "Newton's Third Law and Applications",
    'friction': 'Friction',
    'inclined-planes': 'Inclined Planes',
    'uniform-circular-motion': 'Uniform Circular Motion',
    'centripetal-force': 'Centripetal Force',
    'universal-gravitation': "Newton's Law of Universal Gravitation",
    'work-and-kinetic-energy': 'Work and Kinetic Energy',
    'gravitational-potential-energy': 'Gravitational Potential Energy',
    'elastic-potential-energy': 'Elastic Potential Energy and Springs',
    'power-physics': 'Power',
    'conservation-of-energy': 'Conservation of Energy',
    'momentum-and-impulse': 'Momentum and Impulse',
    'conservation-of-momentum': 'Conservation of Momentum',
    'collisions': 'Collisions',
    'introduction-to-shm': 'Introduction to Simple Harmonic Motion',
    'energy-in-shm': 'Energy in Simple Harmonic Motion',
    'torque-and-equilibrium': 'Torque and Rotational Equilibrium',
    'rotational-kinematics': 'Rotational Kinematics',
    'angular-momentum': 'Rotational Dynamics and Angular Momentum',
    'fluids-density-and-pressure': 'Density and Pressure in Fluids',
    'fluids-buoyancy': "Buoyancy and Archimedes' Principle",
    'fluids-continuity': 'Continuity Equation and Flow Rate',
    'fluids-bernoulli': "Bernoulli's Equation",
  },
}

const CALCULUS_AB: ApDiagV2Blueprint = {
  course: 'ap-calculus-ab',
  label: 'AP Calculus AB',
  categoryPrefix: 'calcab-diagnostic',
  seenCourse: 'calcab',
  pagePath: '/calcab-diagnostic',
  length: 35,
  timeLimitMinutes: 45,
  setsPerSitting: 2,
  weightSource: 'AP Calculus AB and BC CED (2026–27), Exam Weighting (AB)',
  units: [
    { id: 'unit-1', number: 1, name: 'Limits and Continuity', weight: [10, 15], topicSlugs: ['limits-continuity-calcab', 'continuity-introduction', 'limits-at-infinity', 'one-sided-limits', 'estimating-limits-graphs', 'estimating-limits-tables', 'what-is-a-limit', 'direct-substitution-method', 'factoring-method-limits', 'rationalizing-technique-limits', 'infinite-limits-vertical-asymptotes', 'types-of-discontinuity'] },
    { id: 'unit-2', number: 2, name: 'Differentiation: Definition and Fundamental Properties', weight: [10, 15], topicSlugs: ['definition-of-derivative-calcab', 'basic-differentiation-rules-calcab', 'derivatives-of-exponential-functions'] },
    { id: 'unit-3', number: 3, name: 'Differentiation: Composite, Implicit, and Inverse Functions', weight: [5, 10], topicSlugs: ['chain-rule-calcab', 'implicit-differentiation', 'inverse-functions-derivatives-calcab'] },
    { id: 'unit-4', number: 4, name: 'Contextual Applications of Differentiation', weight: [10, 15], topicSlugs: ['related-rates', 'particle-motion-calcab', 'linearization-differentials-calcab', 'lhopitals-rule'] },
    { id: 'unit-5', number: 5, name: 'Analytical Applications of Differentiation', weight: [15, 20], topicSlugs: ['applications-of-derivatives-calcab', 'theorem-applications-calcab', 'optimization-calcab', 'second-derivative-test'] },
    { id: 'unit-6', number: 6, name: 'Integration and Accumulation of Change', weight: [15, 20], topicSlugs: ['definite-integrals-calcab', 'accumulation-functions-calcab', 'antiderivatives-indefinite-integrals-calcab', 'u-substitution-calcab'] },
    { id: 'unit-7', number: 7, name: 'Differential Equations', weight: [5, 10], topicSlugs: ['differential-equations-calcab', 'exponential-models-calcab'] },
    { id: 'unit-8', number: 8, name: 'Applications of Integration', weight: [10, 15], topicSlugs: ['area-between-curves-calcab', 'volumes-of-revolution-calcab', 'integration-applications-calcab'] },
  ],
  topicNames: {
    'limits-continuity-calcab': 'Limits & Continuity: Unit 1 Review',
    'what-is-a-limit': 'What is a Limit?',
    'estimating-limits-tables': 'Estimating Limits from Tables',
    'estimating-limits-graphs': 'Estimating Limits from Graphs',
    'one-sided-limits': 'One-Sided Limits',
    'direct-substitution-method': 'Direct Substitution Method',
    'factoring-method-limits': 'Factoring Method for Limits',
    'rationalizing-technique-limits': 'Rationalizing to Evaluate Limits',
    'limits-at-infinity': 'Limits at Infinity',
    'infinite-limits-vertical-asymptotes': 'Infinite Limits and Vertical Asymptotes',
    'continuity-introduction': 'What is Continuity?',
    'types-of-discontinuity': 'Types of Discontinuity',
    'definition-of-derivative-calcab': 'Definition of the Derivative',
    'basic-differentiation-rules-calcab': 'Basic Differentiation Rules',
    'chain-rule-calcab': 'Chain Rule',
    'inverse-functions-derivatives-calcab': 'Inverse Functions & Derivatives',
    'derivatives-of-exponential-functions': 'Derivatives of Exponential Functions',
    'implicit-differentiation': 'Implicit Differentiation',
    'related-rates': 'Related Rates',
    'second-derivative-test': 'The Second Derivative Test',
    'applications-of-derivatives-calcab': 'Applications of Derivatives',
    'optimization-calcab': 'Optimization',
    'linearization-differentials-calcab': 'Linearization & Differentials',
    'lhopitals-rule': 'L\'Hôpital\'s Rule',
    'theorem-applications-calcab': 'Theorem Applications',
    'particle-motion-calcab': 'Particle Motion',
    'definite-integrals-calcab': 'Definite Integrals',
    'antiderivatives-indefinite-integrals-calcab': 'Antiderivatives & Indefinite Integrals',
    'u-substitution-calcab': 'u-Substitution',
    'accumulation-functions-calcab': 'Accumulation Functions',
    'area-between-curves-calcab': 'Area Between Curves',
    'volumes-of-revolution-calcab': 'Volumes of Revolution',
    'integration-applications-calcab': 'Integration Applications',
    'differential-equations-calcab': 'Differential Equations',
    'exponential-models-calcab': 'Exponential Models',
  },
}

const BC_ONLY_TOPIC_NAMES: Record<string, string> = {
  'integration-by-parts-calcbc': 'Integration by Parts',
  'partial-fractions-calcbc': 'Partial Fractions',
  'improper-integrals-calcbc': 'Improper Integrals',
  'euler-method-advanced-calcbc': 'Euler\'s Method',
  'logistic-models-calcbc': 'Logistic Models',
  'arc-length-surface-area-calcbc': 'Arc Length',
  'parametric-curves-calculus-calcbc': 'Parametric Curves & Calculus',
  'vector-valued-functions-calcbc': 'Vector-Valued Functions',
  'polar-calculus-calcbc': 'Polar Calculus',
  'infinite-sequences-calcbc': 'Infinite Sequences',
  'infinite-series-calcbc': 'Infinite Series',
  'convergence-tests-summary-calcbc': 'Convergence Tests',
  'alternating-series-calcbc': 'Alternating Series',
  'taylor-maclaurin-series-calcbc': 'Taylor & Maclaurin Series',
  'lagrange-error-bound-calcbc': 'Lagrange Error Bound',
  'power-series-calcbc': 'Power Series',
  'series-applications-calcbc': 'Series Applications',
}

/** An AB unit with BC-only topics appended (Units 6–8 of the BC CED). */
const bcUnit = (n: number, weight: readonly [number, number], extraTopics: string[] = []): ApDiagV2Unit => {
  const ab = CALCULUS_AB.units[n - 1]
  return { ...ab, weight, topicSlugs: [...ab.topicSlugs, ...extraTopics] }
}

const CALCULUS_BC: ApDiagV2Blueprint = {
  course: 'ap-calculus-bc',
  label: 'AP Calculus BC',
  categoryPrefix: 'calcbc-diagnostic',
  seenCourse: 'calcbc',
  pagePath: '/calcbc-diagnostic',
  length: 40,
  timeLimitMinutes: 55,
  setsPerSitting: 2,
  includes: ['ap-calculus-ab'],
  weightSource: 'AP Calculus AB and BC CED (2026–27), Exam Weighting (BC)',
  units: [
    bcUnit(1, [4, 7]),
    bcUnit(2, [4, 7]),
    bcUnit(3, [4, 7]),
    bcUnit(4, [6, 9]),
    bcUnit(5, [8, 11]),
    bcUnit(6, [17, 20], ['integration-by-parts-calcbc', 'partial-fractions-calcbc', 'improper-integrals-calcbc']),
    bcUnit(7, [6, 9], ['euler-method-advanced-calcbc', 'logistic-models-calcbc']),
    bcUnit(8, [6, 9], ['arc-length-surface-area-calcbc']),
    { id: 'unit-9', number: 9, name: 'Parametric Equations, Polar Coordinates, and Vector-Valued Functions', weight: [11, 12], topicSlugs: ['parametric-curves-calculus-calcbc', 'vector-valued-functions-calcbc', 'polar-calculus-calcbc'] },
    {
      id: 'unit-10',
      number: 10,
      name: 'Infinite Sequences and Series',
      weight: [17, 18],
      topicSlugs: [
        'convergence-tests-summary-calcbc',
        'taylor-maclaurin-series-calcbc',
        'power-series-calcbc',
        'infinite-series-calcbc',
        'alternating-series-calcbc',
        'lagrange-error-bound-calcbc',
        'infinite-sequences-calcbc',
        'series-applications-calcbc',
      ],
    },
  ],
  topicNames: { ...CALCULUS_AB.topicNames, ...BC_ONLY_TOPIC_NAMES },
}

/**
 * AP Precalculus (precalc-final PLAN.md / ASSESSMENTS.md §3, Oct 2026). The
 * May 2027 exam assesses CED Units 1–3 only (Unit 4 is not on the exam, owner
 * rule "not on the exam = not in the program"). Weights are the CED "Exam
 * Weighting" ranges (BRIEF.md); midpoints 35 / 33.5 / 32.5 give 10 / 10 / 10
 * at length 30. Sitting 30 q / 60 min (owner decision O3: the exam runs 2.5
 * min per item; v1 was 30 / 40). Unit topics are the canonical PLAN.md slugs,
 * heaviest lessons first (they are the fallback recommendations).
 */
const PRECALCULUS: ApDiagV2Blueprint = {
  course: 'ap-precalculus',
  label: 'AP Precalculus',
  categoryPrefix: 'ap-precalculus-diagnostic',
  seenCourse: 'ap-precalculus',
  pagePath: '/ap-precalculus-diagnostic',
  length: 30,
  timeLimitMinutes: 60,
  setsPerSitting: 2,
  weightSource: 'AP Precalculus CED, Exam Weighting (Units 1–3; Unit 4 is not assessed)',
  units: [
    {
      id: 'unit-1',
      number: 1,
      name: 'Polynomial and Rational Functions',
      weight: [30, 40],
      topicSlugs: [
        'polynomial-functions-precalc',
        'rational-functions-precalc',
        'rates-of-change-precalc',
        'transformations-precalc',
        'function-modeling-precalc',
        'fundamental-theorem-algebra',
        'polynomial-division-remainder-theorem',
      ],
    },
    {
      id: 'unit-2',
      number: 2,
      name: 'Exponential and Logarithmic Functions',
      weight: [27, 40],
      topicSlugs: [
        'exponential-functions-precalc',
        'logarithmic-functions-precalc',
        'function-composition-inverses-precalc',
        'exponential-logarithmic-modeling-precalc',
        'sequences-series-precalc',
      ],
    },
    {
      id: 'unit-3',
      number: 3,
      name: 'Trigonometric and Polar Functions',
      weight: [30, 35],
      topicSlugs: [
        'trigonometric-functions-precalc',
        'graphing-trig-functions',
        'trigonometric-identities-precalc',
        'solving-trig-equations',
        'inverse-trig-functions-precalc',
        'polar-coordinates-precalc',
        'the-unit-circle',
      ],
    },
  ],
  topicNames: { ...PRECALC_TOPIC_TITLES },
}

export const AP_DIAG_V2_BLUEPRINTS: Record<ApDiagV2Course, ApDiagV2Blueprint> = {
  'ap-chemistry': CHEMISTRY,
  'ap-biology': BIOLOGY,
  'ap-physics-1': PHYSICS_1,
  'ap-calculus-ab': CALCULUS_AB,
  'ap-calculus-bc': CALCULUS_BC,
  'ap-precalculus': PRECALCULUS,
}

export const AP_DIAG_V2_COURSES = Object.keys(AP_DIAG_V2_BLUEPRINTS) as ApDiagV2Course[]

export function isApDiagV2Course(course: string): course is ApDiagV2Course {
  return course in AP_DIAG_V2_BLUEPRINTS
}

/**
 * The stored v2 categories whose served items count as seen for a course: its
 * own plus those of every course its bank includes (BC reads AB v2 attempts).
 */
export function apDiagV2SeenCategories(course: ApDiagV2Course): string[] {
  const bp = AP_DIAG_V2_BLUEPRINTS[course]
  return [course, ...(bp.includes ?? [])].map((c) => `${AP_DIAG_V2_BLUEPRINTS[c].categoryPrefix}-v2`)
}

/** Midpoint of a unit's CED weighting range. */
export const unitMidpoint = (u: Pick<ApDiagV2Unit, 'weight'>) => (u.weight[0] + u.weight[1]) / 2

/**
 * Whole-question quotas proportional to `weights`, summing to `total`
 * (largest remainder; ties to the larger weight, then the earlier index).
 */
export function apportion(weights: number[], total: number): number[] {
  const sum = weights.reduce((a, b) => a + b, 0)
  if (sum <= 0 || total <= 0) return weights.map(() => 0)
  const exact = weights.map((w) => (w / sum) * total)
  const out = exact.map(Math.floor)
  let left = total - out.reduce((a, b) => a + b, 0)
  const order = exact
    .map((e, i) => ({ i, rem: e - Math.floor(e), w: weights[i] }))
    // Remainders are compared rounded so float noise never breaks a tie.
    .sort((a, b) => Math.round((b.rem - a.rem) * 1e9) || b.w - a.w || a.i - b.i)
  for (const { i } of order) {
    if (left <= 0) break
    out[i]++
    left--
  }
  return out
}

/** Per-unit questions per sitting, keyed by unit id. */
export function unitQuotas(bp: ApDiagV2Blueprint): Record<string, number> {
  const q = apportion(bp.units.map(unitMidpoint), bp.length)
  return Object.fromEntries(bp.units.map((u, i) => [u.id, q[i]]))
}

/**
 * Easy / medium / hard targets inside one unit's quota: an even three-way
 * split, a remainder going to medium first and then hard (AP items run
 * medium-to-hard; an easy-heavy diagnostic would read high).
 */
export function difficultyTargets(quota: number): Record<ApDiagV2Difficulty, number> {
  const base = Math.floor(quota / 3)
  const rem = quota - base * 3
  return { easy: base, medium: base + (rem >= 1 ? 1 : 0), hard: base + (rem >= 2 ? 1 : 0) }
}
