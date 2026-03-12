/**
 * Geometry Diagnostic Test Generator
 *
 * Two alternate forms (A / B), ~30 questions spanning 6 core domains.
 */

export interface GeometryDiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface GeometryDomain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface GeometryDiagnosticTestData {
  form: 'A' | 'B'
  questions: GeometryDiagnosticQuestion[]
  domains: GeometryDomain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface GeometryDomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface GeometryRecommendedTopic { slug: string; name: string; domainId: string; priority: 'high' | 'medium' }

export interface GeometryDiagnosticResults {
  form: 'A' | 'B'
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedLevel: string
  domains: GeometryDomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: GeometryRecommendedTopic[]
}

const GEOMETRY_DOMAINS: GeometryDomain[] = [
  { id: 'congruence', name: 'Congruence & Triangles', topicSlugs: ['triangle-congruence', 'cpctc', 'isosceles-equilateral-triangles'], questionTarget: 5 },
  { id: 'similarity', name: 'Similarity & Proportions', topicSlugs: ['similar-triangles', 'proportional-relationships', 'triangle-proportionality'], questionTarget: 5 },
  { id: 'right-triangles', name: 'Right Triangles & Trigonometry', topicSlugs: ['pythagorean-theorem', 'special-right-triangles', 'basic-trigonometry'], questionTarget: 5 },
  { id: 'circles', name: 'Circles', topicSlugs: ['circle-theorems', 'arc-length-sector-area', 'inscribed-angles'], questionTarget: 5 },
  { id: 'area-volume', name: 'Area, Surface Area & Volume', topicSlugs: ['area-of-polygons', 'surface-area', 'volume-formulas'], questionTarget: 5 },
  { id: 'coordinate-geometry', name: 'Coordinate Geometry & Transformations', topicSlugs: ['distance-midpoint', 'transformations', 'slope-parallel-perpendicular'], questionTarget: 5 },
]

export { GEOMETRY_DOMAINS }

interface PoolQuestion { question: string; options: string[]; correctAnswer: number; explanation: string; domain: string; topicSlug: string; formSet: 'A' | 'B' | 'both' }

const questionPool: PoolQuestion[] = [
  // ---- Congruence & Triangles ----
  { question: 'Which postulate proves two triangles congruent if two sides and the included angle are equal?', options: ['SAS', 'SSA', 'AAA', 'AAS'], correctAnswer: 0, explanation: 'Side-Angle-Side (SAS) proves congruence when two sides and the included angle match.', domain: 'congruence', topicSlug: 'triangle-congruence', formSet: 'A' },
  { question: 'The sum of the interior angles of a triangle is:', options: ['180°', '360°', '90°', '270°'], correctAnswer: 0, explanation: 'The Triangle Angle Sum Theorem states angles sum to 180°.', domain: 'congruence', topicSlug: 'triangle-congruence', formSet: 'A' },
  { question: 'In an isosceles triangle, the base angles are:', options: ['Equal', 'Supplementary', 'Complementary', 'Right angles'], correctAnswer: 0, explanation: 'The Base Angles Theorem: base angles of an isosceles triangle are congruent.', domain: 'congruence', topicSlug: 'isosceles-equilateral-triangles', formSet: 'A' },
  { question: 'CPCTC stands for:', options: ['Corresponding Parts of Congruent Triangles are Congruent', 'Central Parts of Congruent Triangles are Congruent', 'Corresponding Points Create Triangle Congruence', 'Congruent Parts of Corresponding Triangles are Congruent'], correctAnswer: 0, explanation: 'CPCTC: once triangles are proven congruent, all corresponding parts are also congruent.', domain: 'congruence', topicSlug: 'cpctc', formSet: 'B' },
  { question: 'An equilateral triangle has all angles measuring:', options: ['60°', '90°', '45°', '120°'], correctAnswer: 0, explanation: 'All three angles in an equilateral triangle are 60° (180° ÷ 3).', domain: 'congruence', topicSlug: 'isosceles-equilateral-triangles', formSet: 'B' },
  { question: 'Which is NOT a triangle congruence postulate?', options: ['SSA', 'SSS', 'ASA', 'AAS'], correctAnswer: 0, explanation: 'SSA (Side-Side-Angle) is NOT a valid congruence postulate — it can produce two different triangles.', domain: 'congruence', topicSlug: 'triangle-congruence', formSet: 'B' },
  { question: 'An exterior angle of a triangle equals:', options: ['The sum of the two remote interior angles', 'The adjacent interior angle', '180° minus all three interior angles', 'Half the opposite angle'], correctAnswer: 0, explanation: 'The Exterior Angle Theorem: an exterior angle equals the sum of the two non-adjacent interior angles.', domain: 'congruence', topicSlug: 'triangle-congruence', formSet: 'both' },
  { question: 'If two triangles are congruent by ASA, what is given?', options: ['Two angles and the included side', 'Two angles and a non-included side', 'Two sides and an angle', 'Three angles'], correctAnswer: 0, explanation: 'ASA: Angle-Side-Angle — two angles and the side between them.', domain: 'congruence', topicSlug: 'triangle-congruence', formSet: 'both' },

  // ---- Similarity & Proportions ----
  { question: 'Two triangles are similar if all corresponding angles are:', options: ['Equal', 'Supplementary', 'Complementary', 'Right'], correctAnswer: 0, explanation: 'AA (Angle-Angle) similarity: if two angles match, the triangles are similar.', domain: 'similarity', topicSlug: 'similar-triangles', formSet: 'A' },
  { question: 'If two triangles are similar with a scale factor of 3:1, the ratio of their areas is:', options: ['9:1', '3:1', '6:1', '27:1'], correctAnswer: 0, explanation: 'Area scales by the square of the linear scale factor: 3² = 9.', domain: 'similarity', topicSlug: 'proportional-relationships', formSet: 'A' },
  { question: 'A line parallel to one side of a triangle divides the other two sides:', options: ['Proportionally', 'Equally', 'Perpendicularly', 'Randomly'], correctAnswer: 0, explanation: 'The Triangle Proportionality Theorem (basic proportionality theorem).', domain: 'similarity', topicSlug: 'triangle-proportionality', formSet: 'A' },
  { question: 'If △ABC ~ △DEF with AB/DE = 2/5, and AB = 6, what is DE?', options: ['15', '12', '2.4', '30'], correctAnswer: 0, explanation: '6/DE = 2/5 → DE = 6 × 5/2 = 15.', domain: 'similarity', topicSlug: 'similar-triangles', formSet: 'B' },
  { question: 'SAS Similarity requires:', options: ['Two proportional sides and the included angle equal', 'Two equal sides and any angle', 'Three proportional sides', 'Two angles equal'], correctAnswer: 0, explanation: 'SAS Similarity: two sides in proportion and the included angle congruent.', domain: 'similarity', topicSlug: 'similar-triangles', formSet: 'B' },
  { question: 'The geometric mean of 4 and 16 is:', options: ['8', '10', '12', '20'], correctAnswer: 0, explanation: 'Geometric mean = √(4 × 16) = √64 = 8.', domain: 'similarity', topicSlug: 'proportional-relationships', formSet: 'B' },
  { question: 'Similar figures have the same:', options: ['Shape but not necessarily size', 'Size but not shape', 'Area', 'Perimeter'], correctAnswer: 0, explanation: 'Similar figures have the same shape — corresponding angles equal, sides proportional.', domain: 'similarity', topicSlug: 'similar-triangles', formSet: 'both' },
  { question: 'If corresponding sides of two similar triangles are in ratio 1:4, the perimeter ratio is:', options: ['1:4', '1:16', '1:2', '1:8'], correctAnswer: 0, explanation: 'Perimeter scales linearly with the scale factor, so 1:4.', domain: 'similarity', topicSlug: 'proportional-relationships', formSet: 'both' },

  // ---- Right Triangles & Trigonometry ----
  { question: 'In a right triangle with legs 3 and 4, the hypotenuse is:', options: ['5', '7', '6', '√7'], correctAnswer: 0, explanation: 'Pythagorean Theorem: 3² + 4² = 9 + 16 = 25. √25 = 5.', domain: 'right-triangles', topicSlug: 'pythagorean-theorem', formSet: 'A' },
  { question: 'In a 45-45-90 triangle, if a leg is 6, the hypotenuse is:', options: ['6√2', '12', '6√3', '3√2'], correctAnswer: 0, explanation: 'In a 45-45-90 triangle, hypotenuse = leg × √2 = 6√2.', domain: 'right-triangles', topicSlug: 'special-right-triangles', formSet: 'A' },
  { question: 'sin(30°) =', options: ['1/2', '√3/2', '√2/2', '1'], correctAnswer: 0, explanation: 'From the 30-60-90 triangle: sin(30°) = opposite/hypotenuse = 1/2.', domain: 'right-triangles', topicSlug: 'basic-trigonometry', formSet: 'A' },
  { question: 'In a 30-60-90 triangle, if the shorter leg is 5, the longer leg is:', options: ['5√3', '10', '5√2', '10√3'], correctAnswer: 0, explanation: 'In a 30-60-90 triangle, longer leg = shorter leg × √3 = 5√3.', domain: 'right-triangles', topicSlug: 'special-right-triangles', formSet: 'B' },
  { question: 'The Pythagorean Theorem applies to:', options: ['Right triangles only', 'All triangles', 'Isosceles triangles', 'Equilateral triangles'], correctAnswer: 0, explanation: 'a² + b² = c² applies only to right triangles, where c is the hypotenuse.', domain: 'right-triangles', topicSlug: 'pythagorean-theorem', formSet: 'B' },
  { question: 'cos(θ) in a right triangle equals:', options: ['Adjacent / Hypotenuse', 'Opposite / Hypotenuse', 'Opposite / Adjacent', 'Hypotenuse / Adjacent'], correctAnswer: 0, explanation: 'SOH-CAH-TOA: Cosine = Adjacent / Hypotenuse.', domain: 'right-triangles', topicSlug: 'basic-trigonometry', formSet: 'B' },
  { question: 'A Pythagorean triple is:', options: ['Three positive integers a, b, c where a² + b² = c²', 'Any three sides of a triangle', 'Three equal angles', 'Three consecutive integers'], correctAnswer: 0, explanation: 'Pythagorean triples like (3,4,5), (5,12,13) satisfy a² + b² = c².', domain: 'right-triangles', topicSlug: 'pythagorean-theorem', formSet: 'both' },
  { question: 'tan(45°) =', options: ['1', '0', '√3', 'undefined'], correctAnswer: 0, explanation: 'tan(45°) = sin(45°)/cos(45°) = 1.', domain: 'right-triangles', topicSlug: 'basic-trigonometry', formSet: 'both' },

  // ---- Circles ----
  { question: 'The area of a circle with radius 7 is:', options: ['49π', '14π', '7π', '49'], correctAnswer: 0, explanation: 'A = πr² = π(7²) = 49π.', domain: 'circles', topicSlug: 'circle-theorems', formSet: 'A' },
  { question: 'An inscribed angle is half the:', options: ['Central angle that subtends the same arc', 'Circumference', 'Diameter', 'Radius'], correctAnswer: 0, explanation: 'Inscribed Angle Theorem: inscribed angle = ½ central angle (same arc).', domain: 'circles', topicSlug: 'inscribed-angles', formSet: 'A' },
  { question: 'The arc length of a 90° arc in a circle with radius 10 is:', options: ['5π', '10π', '20π', '25π'], correctAnswer: 0, explanation: 'Arc length = (θ/360) × 2πr = (90/360)(20π) = 5π.', domain: 'circles', topicSlug: 'arc-length-sector-area', formSet: 'A' },
  { question: 'A tangent to a circle is perpendicular to the radius at the point of:', options: ['Tangency', 'Origin', 'Center', 'Chord'], correctAnswer: 0, explanation: 'A tangent line touches the circle at exactly one point and is perpendicular to the radius there.', domain: 'circles', topicSlug: 'circle-theorems', formSet: 'B' },
  { question: 'The area of a sector with central angle 60° and radius 6 is:', options: ['6π', '36π', '12π', '3π'], correctAnswer: 0, explanation: 'Sector area = (θ/360)πr² = (60/360)π(36) = 6π.', domain: 'circles', topicSlug: 'arc-length-sector-area', formSet: 'B' },
  { question: 'An inscribed angle subtending a semicircle measures:', options: ['90°', '180°', '45°', '60°'], correctAnswer: 0, explanation: 'An angle inscribed in a semicircle intercepts a 180° arc, so the angle is 90°.', domain: 'circles', topicSlug: 'inscribed-angles', formSet: 'B' },
  { question: 'The circumference of a circle with diameter 10 is:', options: ['10π', '5π', '20π', '100π'], correctAnswer: 0, explanation: 'C = πd = 10π.', domain: 'circles', topicSlug: 'circle-theorems', formSet: 'both' },
  { question: 'Two chords intersecting inside a circle create segments where:', options: ['Product of segments of one chord = product of segments of the other', 'The segments are equal', 'The sum equals the diameter', 'The angles are all 90°'], correctAnswer: 0, explanation: 'Intersecting Chords Theorem: (seg1)(seg2) = (seg3)(seg4).', domain: 'circles', topicSlug: 'circle-theorems', formSet: 'both' },

  // ---- Area, Surface Area & Volume ----
  { question: 'The area of a triangle with base 10 and height 6 is:', options: ['30', '60', '16', '36'], correctAnswer: 0, explanation: 'A = ½bh = ½(10)(6) = 30.', domain: 'area-volume', topicSlug: 'area-of-polygons', formSet: 'A' },
  { question: 'The volume of a rectangular prism 4 × 5 × 6 is:', options: ['120', '60', '240', '15'], correctAnswer: 0, explanation: 'V = lwh = 4 × 5 × 6 = 120.', domain: 'area-volume', topicSlug: 'volume-formulas', formSet: 'A' },
  { question: 'The surface area of a cube with side length 3 is:', options: ['54', '27', '36', '18'], correctAnswer: 0, explanation: 'SA = 6s² = 6(9) = 54.', domain: 'area-volume', topicSlug: 'surface-area', formSet: 'A' },
  { question: 'The volume of a cylinder with radius 3 and height 10 is:', options: ['90π', '30π', '60π', '9π'], correctAnswer: 0, explanation: 'V = πr²h = π(9)(10) = 90π.', domain: 'area-volume', topicSlug: 'volume-formulas', formSet: 'B' },
  { question: 'The area of a trapezoid with bases 8 and 12, height 5 is:', options: ['50', '60', '100', '40'], correctAnswer: 0, explanation: 'A = ½(b₁ + b₂)h = ½(20)(5) = 50.', domain: 'area-volume', topicSlug: 'area-of-polygons', formSet: 'B' },
  { question: 'The volume of a cone is related to a cylinder (same base and height) by factor:', options: ['1/3', '1/2', '2/3', '1/4'], correctAnswer: 0, explanation: 'V_cone = (1/3)πr²h, which is 1/3 of the cylinder volume.', domain: 'area-volume', topicSlug: 'volume-formulas', formSet: 'B' },
  { question: 'The volume of a sphere with radius 3 is:', options: ['36π', '27π', '12π', '108π'], correctAnswer: 0, explanation: 'V = (4/3)πr³ = (4/3)π(27) = 36π.', domain: 'area-volume', topicSlug: 'volume-formulas', formSet: 'both' },
  { question: 'The area of a regular hexagon with side s is:', options: ['(3√3/2)s²', '6s²', '3s²', '(√3/4)s²'], correctAnswer: 0, explanation: 'A regular hexagon = 6 equilateral triangles. A = 6 × (√3/4)s² = (3√3/2)s².', domain: 'area-volume', topicSlug: 'area-of-polygons', formSet: 'both' },

  // ---- Coordinate Geometry & Transformations ----
  { question: 'The distance between (1, 2) and (4, 6) is:', options: ['5', '7', '√25', '3'], correctAnswer: 0, explanation: 'd = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5.', domain: 'coordinate-geometry', topicSlug: 'distance-midpoint', formSet: 'A' },
  { question: 'The midpoint of (2, 8) and (6, 4) is:', options: ['(4, 6)', '(8, 12)', '(2, 2)', '(4, 4)'], correctAnswer: 0, explanation: 'Midpoint = ((2+6)/2, (8+4)/2) = (4, 6).', domain: 'coordinate-geometry', topicSlug: 'distance-midpoint', formSet: 'A' },
  { question: 'A reflection over the y-axis maps (3, 5) to:', options: ['(−3, 5)', '(3, −5)', '(−3, −5)', '(5, 3)'], correctAnswer: 0, explanation: 'Reflecting over the y-axis negates the x-coordinate: (3, 5) → (−3, 5).', domain: 'coordinate-geometry', topicSlug: 'transformations', formSet: 'A' },
  { question: 'A 90° clockwise rotation maps (x, y) to:', options: ['(y, −x)', '(−y, x)', '(−x, −y)', '(x, −y)'], correctAnswer: 0, explanation: '90° clockwise: (x, y) → (y, −x).', domain: 'coordinate-geometry', topicSlug: 'transformations', formSet: 'B' },
  { question: 'Lines with slopes 2 and −½ are:', options: ['Perpendicular', 'Parallel', 'Neither', 'Coincident'], correctAnswer: 0, explanation: 'Product of slopes = 2 × (−½) = −1, so the lines are perpendicular.', domain: 'coordinate-geometry', topicSlug: 'slope-parallel-perpendicular', formSet: 'B' },
  { question: 'A translation of (x, y) → (x + 3, y − 2) moves points:', options: ['Right 3, down 2', 'Left 3, up 2', 'Right 3, up 2', 'Left 3, down 2'], correctAnswer: 0, explanation: '+3 to x is right; −2 to y is down.', domain: 'coordinate-geometry', topicSlug: 'transformations', formSet: 'B' },
  { question: 'Two lines with the same slope are:', options: ['Parallel', 'Perpendicular', 'Intersecting', 'Skew'], correctAnswer: 0, explanation: 'Equal slopes mean parallel lines (unless they\'re the same line).', domain: 'coordinate-geometry', topicSlug: 'slope-parallel-perpendicular', formSet: 'both' },
  { question: 'The equation of a circle centered at (h, k) with radius r is:', options: ['(x−h)² + (y−k)² = r²', 'x² + y² = r²', '(x+h)² + (y+k)² = r', 'x² + y² + hx + ky = r²'], correctAnswer: 0, explanation: 'Standard form: (x − h)² + (y − k)² = r².', domain: 'coordinate-geometry', topicSlug: 'distance-midpoint', formSet: 'both' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function generateGeometryDiagnosticTest(form: 'A' | 'B'): GeometryDiagnosticTestData {
  const eligible = questionPool.filter(q => q.formSet === form || q.formSet === 'both')
  const selected: PoolQuestion[] = []
  for (const domain of GEOMETRY_DOMAINS) {
    const domainQs = shuffle(eligible.filter(q => q.domain === domain.id))
    selected.push(...domainQs.slice(0, domain.questionTarget))
  }
  const questions: GeometryDiagnosticQuestion[] = shuffle(selected).map(q => ({
    question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: q.domain, topicSlug: q.topicSlug,
  }))
  return { form, questions, domains: GEOMETRY_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 35 }
}

export function scoreGeometryDiagnostic(form: 'A' | 'B', questions: GeometryDiagnosticQuestion[], answers: Record<number, number>): GeometryDiagnosticResults {
  const domainMap = new Map<string, { correct: number; total: number }>()
  GEOMETRY_DOMAINS.forEach(d => domainMap.set(d.id, { correct: 0, total: 0 }))
  questions.forEach((q, i) => { const entry = domainMap.get(q.domain)!; entry.total++; if (answers[i] === q.correctAnswer) entry.correct++ })
  let totalCorrect = 0, totalQuestions = 0
  const domainResults: GeometryDomainResult[] = GEOMETRY_DOMAINS.map(d => {
    const entry = domainMap.get(d.id)!; totalCorrect += entry.correct; totalQuestions += entry.total
    const pct = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0
    return { domainId: d.id, domainName: d.name, correct: entry.correct, total: entry.total, percentage: pct, level: pct >= 75 ? 'strong' : pct >= 50 ? 'moderate' : 'weak' }
  })
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
  const estimatedLevel = pct >= 90 ? 'Advanced' : pct >= 75 ? 'Proficient' : pct >= 60 ? 'Developing' : 'Beginning'
  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)
  const recommendedTopics: GeometryRecommendedTopic[] = []
  domainResults.filter(d => d.level === 'weak' || d.level === 'moderate').forEach(d => {
    const domain = GEOMETRY_DOMAINS.find(dom => dom.id === d.domainId)!
    domain.topicSlugs.forEach(slug => { recommendedTopics.push({ slug, name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), domainId: d.domainId, priority: d.level === 'weak' ? 'high' : 'medium' }) })
  })
  return { form, totalCorrect, totalQuestions, percentage: pct, estimatedLevel, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics }
}

export function pickNextForm(previousForms: ('A' | 'B')[]): 'A' | 'B' {
  if (previousForms.length === 0) return 'A'
  return previousForms[0] === 'A' ? 'B' : 'A'
}
