/**
 * Geometry — Question of the Day
 *
 * Self-contained question pool covering core Geometry topics.
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'What is the sum of the interior angles of a triangle?', options: ['90°', '180°', '270°', '360°'], correctAnswer: 1, explanation: 'The sum of the interior angles of any triangle is always 180°.' },
  { question: 'A rectangle has length 8 and width 5. What is its area?', options: ['13', '26', '40', '80'], correctAnswer: 2, explanation: 'Area of a rectangle = length × width = 8 × 5 = 40.' },
  { question: 'Two angles are supplementary. One measures 65°. What is the other?', options: ['25°', '65°', '115°', '295°'], correctAnswer: 2, explanation: 'Supplementary angles sum to 180°. So 180° − 65° = 115°.' },
  { question: 'What is the Pythagorean theorem?', options: ['a + b = c', 'a² + b² = c²', 'a × b = c', '2a + 2b = c'], correctAnswer: 1, explanation: 'The Pythagorean theorem states that in a right triangle, the sum of the squares of the legs equals the square of the hypotenuse: a² + b² = c².' },
  { question: 'A right triangle has legs of length 6 and 8. What is the hypotenuse?', options: ['7', '10', '14', '48'], correctAnswer: 1, explanation: 'c² = 6² + 8² = 36 + 64 = 100 → c = 10.' },
  { question: 'What is the circumference of a circle with radius 7? (Use π ≈ 22/7)', options: ['22', '44', '154', '88'], correctAnswer: 1, explanation: 'C = 2πr = 2 × (22/7) × 7 = 44.' },
  { question: 'What is the area of a circle with radius 3?', options: ['6π', '9π', '3π', '12π'], correctAnswer: 1, explanation: 'Area = πr² = π(3)² = 9π.' },
  { question: 'If two parallel lines are cut by a transversal, alternate interior angles are:', options: ['Supplementary', 'Complementary', 'Congruent', 'Adjacent'], correctAnswer: 2, explanation: 'When a transversal crosses parallel lines, alternate interior angles are congruent (equal in measure).' },
  { question: 'A quadrilateral has how many diagonals?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'A quadrilateral (4 sides) has 2 diagonals. The formula is n(n−3)/2 = 4(1)/2 = 2.' },
  { question: 'What is the volume of a rectangular prism with dimensions 3 × 4 × 5?', options: ['12', '47', '60', '120'], correctAnswer: 2, explanation: 'Volume = length × width × height = 3 × 4 × 5 = 60.' },
  { question: 'An isosceles triangle has two sides of length 7 and a base of length 10. What is the perimeter?', options: ['17', '24', '27', '34'], correctAnswer: 1, explanation: 'Perimeter = 7 + 7 + 10 = 24.' },
  { question: 'What is the measure of each interior angle of a regular hexagon?', options: ['90°', '108°', '120°', '135°'], correctAnswer: 2, explanation: 'Interior angle of a regular n-gon = (n−2)×180°/n. For a hexagon: (6−2)×180°/6 = 720°/6 = 120°.' },
  { question: 'The diagonals of a rectangle are:', options: ['Perpendicular', 'Congruent', 'Neither perpendicular nor congruent', 'Parallel'], correctAnswer: 1, explanation: 'The diagonals of a rectangle are always congruent (equal in length). They bisect each other but are not necessarily perpendicular (unless it\'s a square).' },
  { question: 'What transformation flips a figure over a line?', options: ['Rotation', 'Translation', 'Reflection', 'Dilation'], correctAnswer: 2, explanation: 'A reflection flips a figure over a line (the line of reflection), creating a mirror image.' },
  { question: 'If two triangles are similar, their corresponding angles are:', options: ['Supplementary', 'Congruent', 'Complementary', 'Unrelated'], correctAnswer: 1, explanation: 'Similar triangles have congruent corresponding angles and proportional corresponding sides.' },
  { question: 'What is the surface area of a cube with side length 4?', options: ['16', '64', '96', '256'], correctAnswer: 2, explanation: 'SA = 6s² = 6(4)² = 6(16) = 96.' },
  { question: 'A sector of a circle has a central angle of 90° and radius 6. What is its area?', options: ['9π', '36π', '6π', '3π'], correctAnswer: 0, explanation: 'Sector area = (θ/360°)πr² = (90/360)π(36) = (1/4)(36π) = 9π.' },
  { question: 'What is the slope of a line perpendicular to a line with slope 2/3?', options: ['2/3', '−2/3', '3/2', '−3/2'], correctAnswer: 3, explanation: 'Perpendicular slopes are negative reciprocals. The negative reciprocal of 2/3 is −3/2.' },
  { question: 'In a 30-60-90 triangle, if the shortest side is 5, what is the hypotenuse?', options: ['5√2', '5√3', '10', '15'], correctAnswer: 2, explanation: 'In a 30-60-90 triangle, the sides are in ratio 1 : √3 : 2. If the shortest side (opposite 30°) is 5, the hypotenuse is 2 × 5 = 10.' },
  { question: 'What is the midpoint of the segment from (2, 6) to (8, 10)?', options: ['(5, 8)', '(6, 16)', '(10, 4)', '(3, 2)'], correctAnswer: 0, explanation: 'Midpoint = ((2+8)/2, (6+10)/2) = (5, 8).' },
  { question: 'The area of a trapezoid with bases 6 and 10 and height 4 is:', options: ['24', '32', '40', '60'], correctAnswer: 1, explanation: 'Area = ½(b₁ + b₂)h = ½(6 + 10)(4) = ½(16)(4) = 32.' },
  { question: 'What type of angle measures exactly 90°?', options: ['Acute', 'Right', 'Obtuse', 'Straight'], correctAnswer: 1, explanation: 'A right angle measures exactly 90°. Acute < 90°, obtuse is between 90° and 180°, and straight = 180°.' },
  { question: 'If a rhombus has diagonals of length 6 and 8, what is its area?', options: ['24', '48', '14', '28'], correctAnswer: 0, explanation: 'Area of a rhombus = ½ × d₁ × d₂ = ½ × 6 × 8 = 24.' },
  { question: 'The distance between points (1, 2) and (4, 6) is:', options: ['5', '7', '√7', '25'], correctAnswer: 0, explanation: 'd = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.' },
  { question: 'What is the volume of a cylinder with radius 3 and height 10?', options: ['30π', '60π', '90π', '900π'], correctAnswer: 2, explanation: 'V = πr²h = π(9)(10) = 90π.' },
  { question: 'In a 45-45-90 triangle, the legs are each 1. What is the hypotenuse?', options: ['1', '√2', '2', '√3'], correctAnswer: 1, explanation: 'In a 45-45-90 triangle, sides are in ratio 1:1:√2. With legs of 1, the hypotenuse = √2.' },
  { question: 'Two triangles are congruent by SAS if they have:', options: ['Three pairs of congruent sides', 'Two congruent sides and the included angle', 'Two congruent angles and a side', 'All angles congruent'], correctAnswer: 1, explanation: 'SAS (Side-Angle-Side) congruence requires two pairs of congruent sides and the included angle (the angle between those sides) to be congruent.' },
  { question: 'What is the sum of exterior angles of any convex polygon?', options: ['180°', '360°', '540°', 'It depends on the polygon'], correctAnswer: 1, explanation: 'The sum of exterior angles of any convex polygon is always 360°, regardless of the number of sides.' },
  { question: 'A regular pentagon has how many lines of symmetry?', options: ['3', '4', '5', '10'], correctAnswer: 2, explanation: 'A regular n-gon has n lines of symmetry. A regular pentagon has 5 lines of symmetry.' },
  { question: 'The volume of a sphere with radius 3 is:', options: ['12π', '36π', '27π', '108π'], correctAnswer: 1, explanation: 'V = (4/3)πr³ = (4/3)π(27) = 36π.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface GeometryDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): GeometryDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'geometry', question: q, dayNumber: day }]
}
