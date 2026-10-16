/**
 * AP topics and units retired because the May 2027 exams do not test them
 * (owner rule: "If the exam doesn't cover it, we shouldn't have it in the
 * program"; the test is each course's 2026-27 CED). prisma/retire-ap-topics.ts
 * deletes the rows; tests/lib/ap-retired-topics.test.ts keeps them from coming
 * back into lessons, quizzes, study plans and redirects.
 */

/** On-exam topics that live in a retiring unit: topic slug -> new unit slug (+ order). */
export const REPARENTED_AP_TOPICS: Record<string, { category: string; order: number }> = {
  // Polar functions are AP Precalculus Topics 3.13-3.15 (Unit 3), not Unit 4.
  'polar-coordinates': { category: 'trigonometric-functions', order: 20 },
  'polar-coordinates-precalc': { category: 'precalc-trig-functions', order: 20 },
  // Rates of change are Topics 1.1-1.4 (Unit 1).
  'rates-of-change-precalc': { category: 'precalc-polynomial-rational', order: 0 },
}

/** Retired topic slug -> CED reason (short). Redirects live in legacy-topic-redirects.ts. */
export const RETIRED_AP_TOPICS: Record<string, string> = {
  // AP Calculus AB
  'trig-substitution': 'Not in the AB or BC CED (already redirected).',
  'partial-fractions': 'BC-only Topic 6.12; the row sat in an AB unit (already redirected).',
  'integration-by-parts': 'BC-only Topic 6.11; the row sat in an AB unit (already redirected).',
  'volumes-shell-method': 'Shell method is in neither CED (8.9-8.12 are disc/washer only).',
  'newtons-method': 'Not in the CED (4.6 is tangent-line approximation only).',
  // AP Computer Science A
  'csa-inheritance-polymorphism': 'Topic 1.12 exclusion: designing and implementing inheritance is out of scope.',
  // AP English Literature
  'englit-literary-criticism': 'Critical-theory lenses appear nowhere in the CED.',
  // AP Physics 2 (fluids moved to Physics 1 Unit 8 in the 2024-25 CED)
  'density-and-pressure': 'Physics 1 Topic 8.1, not in Physics 2 Units 9-15.',
  'buoyancy-archimedes-principle': 'Physics 1 Topic 8.2, not in Physics 2 Units 9-15.',
  'fluid-dynamics-continuity': 'Physics 1 Topic 8.3, not in Physics 2 Units 9-15.',
  'fluid-dynamics': 'Duplicate of fluid-dynamics-continuity (Physics 1 Topic 8.3).',
  'bernoullis-equation': 'Physics 1 Topic 8.4, not in Physics 2 Units 9-15.',
  'phase-changes-latent-heat': 'Latent heat is in no Unit 9 topic (9.1-9.6).',
  // AP Physics C
  'physics-c-damped-driven-oscillations': 'Mechanics Unit 7 has no damping EK; resonance is taught in SHM.',
  'physics-c-electromagnetic-waves': 'E&M CED has no EM-wave EK (13.2.A.4 boundary statement).',
  // AP Precalculus (Unit 4 is not assessed on the exam)
  'circles-parabolas': 'Unit 4 Topic 4.6 (conics), not assessed.',
  'ellipses-hyperbolas': 'Unit 4 Topic 4.6 (conics), not assessed.',
  'conic-sections-precalc': 'Unit 4 Topic 4.6 (conics), not assessed.',
  'parametric-equations': 'Unit 4 Topics 4.1-4.4, 4.7, not assessed.',
  'parametric-equations-precalc': 'Unit 4 Topics 4.1-4.4, 4.7, not assessed.',
  'vectors-in-plane': 'Unit 4 Topics 4.8-4.9, not assessed.',
  'vectors-two-dimensions-precalc': 'Unit 4 Topics 4.8-4.9, not assessed.',
  'matrix-operations': 'Unit 4 Topics 4.10-4.14, not assessed.',
  'matrices-precalc': 'Unit 4 Topics 4.10-4.14, not assessed.',
  'law-of-sines-cosines': 'Only in EK 4.8.D.2 (Unit 4), not assessed.',
  'law-of-sines-cosines-precalc': 'Only in EK 4.8.D.2 (Unit 4), not assessed.',
  'partial-fraction-decomposition': 'Topic 1.11 exclusion: partial fractions are not in the course.',
  'systems-of-equations': 'Prerequisite only, not a CED topic.',
  'systems-of-equations-precalc': 'Prerequisite only, not a CED topic.',
  'limits-introduction-precalc': 'Evaluating limits is calculus; limit notation is taught in the rational/polynomial topics.',
  'continuity-precalc': 'Continuity and the IVT are not in the CED.',
  'arc-length-and-sector-area': 'Sector area and angular speed are not in the CED; s = r*theta is taught in degrees-and-radians.',
  // AP Statistics (2026-27 revision removed these)
  'transformations-linearity': 'Old 2.9 departures from linearity, removed in the 2026-27 revision.',
  'combining-random-variables': 'Old 4.9, removed in the 2026-27 revision.',
  'geometric-distribution': 'Old 4.12, removed in the 2026-27 revision.',
  'inference-regression': 'Old Unit 9 (inference for slopes), removed in the 2026-27 revision.',
}

/** Retired unit (Category) slug -> its course and the on-exam unit its /categories URL 308s to (next.config.ts). */
export const RETIRED_AP_UNITS: Record<string, { course: string; redirect: string }> = {
  'advanced-integration': { course: 'ap-calculus-ab', redirect: 'calcab-integration' },
  'csa-inheritance': { course: 'ap-computer-science-a', redirect: 'csa-writing-classes' },
  // Fluids are AP Physics 1 Unit 8 now; send old links to that unit.
  'fluid-mechanics': { course: 'ap-physics-2', redirect: 'fluids' },
  'parameters-vectors-matrices': { course: 'ap-precalculus', redirect: 'trigonometric-functions' },
  'precalc-polar-vectors-matrices': { course: 'ap-precalculus', redirect: 'precalc-trig-functions' },
  'precalc-intro-calculus': { course: 'ap-precalculus', redirect: 'precalc-polynomial-rational' },
  'regression-correlation': { course: 'ap-statistics', redirect: 'two-variable-data' },
}
