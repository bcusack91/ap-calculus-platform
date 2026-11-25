import { describe, expect, it } from 'vitest'
import { FLASHCARD_AREAS, MCAT_SUBJECTS, areaOfCourse, flashcardCatalogHref, groupCoursesByArea, groupIntoUnits, subjectOfTopic } from '@/lib/flashcard-catalog'

/** Every MCAT topic slug in the database on 2026-11-13 (117), plus the four split topics of 2026-11-24. */
const MCAT_TOPICS = [
  'mcat-organic-chemistry-functional-groups-mcat',
  'mcat-biochemistry-amino-acids-proteins-mcat',
  'mcat-physics-electricity-electrostatics-mcat',
  'mcat-physics-electricity-electric-fields-mcat',
  'mcat-physics-electricity-electric-potential-mcat',
  'mcat-general-chemistry-mcat',
  'mcat-physics-mechanics-kinematics-mcat',
  'mcat-general-chemistry-atomic-structure-mcat',
  'mcat-physics-mechanics-forces-newton-laws-mcat',
  'mcat-organic-chemistry-stereochemistry-mcat',
  'mcat-organic-chemistry-mcat',
  'mcat-biochemistry-enzymes-kinetics-mcat',
  'mcat-physics-electricity-dc-circuits-mcat',
  'mcat-general-chemistry-spectra-nuclear-mcat',
  'mcat-physics-electricity-kirchhoff-power-mcat',
  'mcat-physics-mechanics-mcat',
  'mcat-biochemistry-carbohydrate-metabolism-mcat',
  'mcat-general-chemistry-stoichiometry-mcat',
  'mcat-physics-mechanics-work-energy-power-mcat',
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  'mcat-general-chemistry-solutions-gases-mcat',
  'mcat-physics-electricity-emf-capacitors-mcat',
  'mcat-physics-electricity-mcat',
  'mcat-physics-mechanics-momentum-collisions-mcat',
  'mcat-organic-chemistry-carbonyls-mcat',
  'mcat-biochemistry-lipid-metabolism-mcat',
  'mcat-biochemistry-foundations-mcat',
  'mcat-organic-chemistry-spectroscopy-mcat',
  'mcat-physics-electricity-rc-circuits-mcat',
  'mcat-physics-mechanics-fluids-mcat',
  'mcat-biochemistry-bioenergetics-mcat',
  'mcat-general-chemistry-thermodynamics-mcat',
  'mcat-lab-methods-mcat',
  'mcat-physics-electricity-magnetism-mcat',
  'mcat-physics-mechanics-fluid-dynamics-mcat',
  'mcat-physics-mechanics-buoyancy-mcat',
  'mcat-physics-mechanics-viscosity-mcat',
  'mcat-general-chemistry-kinetics-mcat',
  'mcat-lab-methods-spectroscopy-assays-mcat',
  'mcat-physics-waves-interference-mcat',
  'mcat-general-chemistry-energy-mechanisms-mcat',
  'mcat-physics-electricity-induction-mcat',
  'mcat-general-chemistry-acid-base-equilibrium-mcat',
  'mcat-physics-electricity-optics-mcat',
  'mcat-physics-waves-sound-mcat',
  'mcat-physics-electricity-electrochemistry-mcat',
  'mcat-general-chemistry-titrations-equilibrium-mcat',
  'mcat-cars-strategy-mcat',
  'mcat-cars-strategy-active-reading-mcat',
  'mcat-cars-passages-humanities-mcat',
  'mcat-cars-reasoning-argument-structure-mcat',
  'mcat-cars-passages-mcat',
  'mcat-cars-passages-social-science-mcat',
  'mcat-cars-reasoning-assumptions-mcat',
  'mcat-cars-strategy-main-idea-inference-mcat',
  'mcat-cars-strategy-elimination-mcat',
  'mcat-cars-passages-ethics-mcat',
  'mcat-cars-reasoning-mcat',
  'mcat-cars-reasoning-strengthen-weaken-mcat',
  'mcat-cars-passages-comparative-mcat',
  'mcat-cars-strategy-timing-mcat',
  'mcat-cars-reasoning-fallacies-mcat',
  'mcat-molecular-biology-dna-replication-mcat',
  'mcat-cell-biology-mcat',
  'mcat-cell-biology-organelles-mcat',
  'mcat-microbiology-bacteria-mcat',
  'mcat-genetics-evolution-mendelian-mcat',
  'mcat-organ-systems-cardiovascular-mcat',
  'mcat-anatomy-physiology-musculoskeletal-mcat',
  'mcat-microbiology-viruses-mcat',
  'mcat-genetics-evolution-population-genetics-mcat',
  'mcat-cell-biology-membrane-transport-mcat',
  'mcat-organ-systems-respiratory-mcat',
  'mcat-molecular-biology-mcat',
  'mcat-molecular-biology-transcription-mcat',
  'mcat-anatomy-physiology-reproductive-mcat',
  'mcat-genetics-evolution-natural-selection-mcat',
  'mcat-organ-systems-mcat',
  'mcat-cell-biology-signaling-mcat',
  'mcat-microbiology-genetics-mcat',
  'mcat-molecular-biology-translation-mcat',
  'mcat-organ-systems-renal-mcat',
  'mcat-anatomy-physiology-sensory-mcat',
  'mcat-microbiology-genetics-regulation-mcat',
  'mcat-molecular-biology-biotechnology-mcat',
  'mcat-genetics-evolution-mcat',
  'mcat-genetics-evolution-immunology-mcat',
  'mcat-cell-biology-cell-cycle-mcat',
  'mcat-anatomy-physiology-embryology-mcat',
  'mcat-organ-systems-endocrine-nervous-mcat',
  'mcat-anatomy-physiology-organogenesis-mcat',
  'mcat-microbiology-antimicrobials-mcat',
  'mcat-anatomy-physiology-mcat',
  'mcat-microbiology-mcat',
  'mcat-psychology-behavior-mcat',
  'mcat-psychology-behavior-sensation-perception-mcat',
  'mcat-sociology-structure-stratification-mcat',
  'mcat-sociology-mcat',
  'mcat-psychology-behavior-learning-memory-mcat',
  'mcat-sociology-culture-socialization-mcat',
  'mcat-sociology-groups-interaction-mcat',
  'mcat-psychology-behavior-cognition-language-mcat',
  'mcat-psychology-behavior-development-mcat',
  'mcat-sociology-interaction-organizations-mcat',
  'mcat-psychology-behavior-disorders-mcat',
  'mcat-sociology-health-disparities-mcat',
  'mcat-social-psychology-mcat',
  'mcat-biological-basis-behavior-mcat',
  'mcat-science-passage-strategy-reading-mcat',
  'mcat-science-passage-strategy-mcat',
  'mcat-test-day-strategy-format-scoring-mcat',
  'mcat-science-passage-strategy-figures-mcat',
  'mcat-test-day-strategy-study-planning-mcat',
  'mcat-test-day-strategy-mcat',
  'mcat-science-passage-strategy-experimental-design-mcat',
  'mcat-test-day-strategy-section-specific-mcat',
  'mcat-science-passage-strategy-discrete-questions-mcat',
  'mcat-test-day-strategy-test-day-logistics-mcat',
  'mcat-research-methods-mcat',
  'mcat-biostatistics-mcat',
  'mcat-quantitative-skills-mcat',
]

describe('flashcard areas', () => {
  it('files each course under one area, and unknown courses under "More"', () => {
    const all = FLASHCARD_AREAS.flatMap((a) => a.courses)
    expect(new Set(all).size).toBe(all.length)
    expect(areaOfCourse('mcat-prep').name).toBe('Test Prep')
    expect(areaOfCourse('ap-chemistry').name).toBe('AP Science')
    expect(areaOfCourse('brand-new-course').name).toBe('More Courses')
  })

  it('groups courses in area order and drops empty areas', () => {
    const groups = groupCoursesByArea([{ slug: 'ap-statistics' }, { slug: 'sat-prep' }, { slug: 'mystery' }, { slug: 'mcat-prep' }, { slug: 'ap-calculus-ab' }])
    expect(groups.map((g) => [g.area.name, g.courses.map((c) => c.slug)])).toEqual([
      ['Test Prep', ['mcat-prep', 'sat-prep']],
      ['AP Math', ['ap-calculus-ab', 'ap-statistics']],
      ['More Courses', ['mystery']],
    ])
  })
})

describe('MCAT subjects', () => {
  it('files every MCAT topic under exactly one subject', () => {
    const unfiled = MCAT_TOPICS.filter((s) => !subjectOfTopic(MCAT_SUBJECTS, s))
    expect(unfiled).toEqual([])
  })

  it('names only real topics in its units, each once', () => {
    const named = MCAT_SUBJECTS.flatMap((s) => s.units.flatMap((u) => u.slugs))
    expect(named.filter((s) => !MCAT_TOPICS.includes(s))).toEqual([])
    expect(new Set(named).size).toBe(named.length)
  })

  it('leaves no topic in a "More" unit', () => {
    for (const subject of MCAT_SUBJECTS) {
      const mine = MCAT_TOPICS.filter((s) => subjectOfTopic(MCAT_SUBJECTS, s) === subject).map((slug) => ({ slug }))
      expect(groupIntoUnits(subject, mine).map((u) => u.name), subject.key).toEqual(subject.units.map((u) => u.name))
    }
  })

  it('puts electrochemistry with general chemistry, not physics', () => {
    expect(subjectOfTopic(MCAT_SUBJECTS, 'mcat-physics-electricity-electrochemistry-mcat')?.key).toBe('general-chemistry')
    expect(subjectOfTopic(MCAT_SUBJECTS, 'mcat-physics-electricity-dc-circuits-mcat')?.key).toBe('physics')
  })

  it('orders a unit by study order and keeps an unfiled topic visible', () => {
    const physics = MCAT_SUBJECTS.find((s) => s.key === 'physics')!
    const units = groupIntoUnits(physics, [
      { slug: 'mcat-physics-brand-new-mcat' },
      { slug: 'mcat-physics-electricity-kirchhoff-power-mcat' },
      { slug: 'mcat-physics-electricity-dc-circuits-mcat' },
    ])
    expect(units).toEqual([
      { name: 'Electricity & Circuits', topics: [{ slug: 'mcat-physics-electricity-dc-circuits-mcat' }, { slug: 'mcat-physics-electricity-kirchhoff-power-mcat' }] },
      { name: 'More Physics', topics: [{ slug: 'mcat-physics-brand-new-mcat' }] },
    ])
  })
})

describe('flashcardCatalogHref', () => {
  it('builds the three levels', () => {
    expect(flashcardCatalogHref()).toBe('/flashcards')
    expect(flashcardCatalogHref('mcat-prep')).toBe('/flashcards?course=mcat-prep')
    expect(flashcardCatalogHref('mcat-prep', 'physics')).toBe('/flashcards?course=mcat-prep&subject=physics')
  })
})
