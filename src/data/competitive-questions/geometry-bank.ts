// Geometry question bank for competitive mode

export interface GeometryQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: GeometryQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the sum of the interior angles of a triangle?',
    options: ['$180°$', '$360°$', '$90°$', '$270°$'],
    correctAnswer: 0,
    explanation: 'The angles of any triangle always sum to $180°$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the area of a rectangle with length $8$ and width $5$?',
    options: ['$40$', '$26$', '$13$', '$80$'],
    correctAnswer: 0,
    explanation: '$A = l \\times w = 8 \\times 5 = 40$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'How many sides does a hexagon have?',
    options: ['$6$', '$5$', '$7$', '$8$'],
    correctAnswer: 0,
    explanation: 'A hexagon has 6 sides.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is the Pythagorean theorem?',
    options: ['$a^2 + b^2 = c^2$', '$a + b = c$', '$a^2 - b^2 = c^2$', '$2a + 2b = c$'],
    correctAnswer: 0,
    explanation: 'In a right triangle, the sum of the squares of the legs equals the square of the hypotenuse.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What is the circumference of a circle with radius $7$?',
    options: ['$14\\pi$', '$7\\pi$', '$49\\pi$', '$28\\pi$'],
    correctAnswer: 0,
    explanation: '$C = 2\\pi r = 2\\pi(7) = 14\\pi$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Two angles that add up to $90°$ are called:',
    options: ['Complementary', 'Supplementary', 'Vertical', 'Adjacent'],
    correctAnswer: 0,
    explanation: 'Complementary angles sum to $90°$; supplementary angles sum to $180°$.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is the volume of a cube with side length $4$?',
    options: ['$64$', '$16$', '$48$', '$12$'],
    correctAnswer: 0,
    explanation: '$V = s^3 = 4^3 = 64$.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'An isosceles triangle has:',
    options: ['At least two equal sides', 'All sides different', 'All three sides equal', 'No equal angles'],
    correctAnswer: 0,
    explanation: 'An isosceles triangle has at least two sides (and two base angles) that are equal.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'What is the area of a triangle with base $10$ and height $6$?',
    options: ['$30$', '$60$', '$16$', '$36$'],
    correctAnswer: 0,
    explanation: '$A = \\frac{1}{2}bh = \\frac{1}{2}(10)(6) = 30$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'If two parallel lines are cut by a transversal, alternate interior angles are:',
    options: ['Congruent', 'Supplementary', 'Complementary', 'Vertical'],
    correctAnswer: 0,
    explanation: 'When a transversal crosses parallel lines, alternate interior angles are equal (congruent).',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is the midpoint of $(2, 8)$ and $(6, 4)$?',
    options: ['$(4, 6)$', '$(8, 12)$', '$(2, 2)$', '$(4, 4)$'],
    correctAnswer: 0,
    explanation: 'Midpoint = $\\left(\\frac{2+6}{2}, \\frac{8+4}{2}\\right) = (4, 6)$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'A regular polygon has all interior angles measuring $120°$. How many sides does it have?',
    options: ['$6$', '$5$', '$8$', '$4$'],
    correctAnswer: 0,
    explanation: 'Interior angle = $\\frac{(n-2)180}{n}$. Set equal to $120$: $120n = 180n - 360 \\Rightarrow n = 6$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the surface area of a sphere with radius $3$?',
    options: ['$36\\pi$', '$27\\pi$', '$12\\pi$', '$9\\pi$'],
    correctAnswer: 0,
    explanation: '$SA = 4\\pi r^2 = 4\\pi(9) = 36\\pi$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Two similar triangles have sides in the ratio $3:5$. If the smaller triangle has area $18$, what is the area of the larger?',
    options: ['$50$', '$30$', '$45$', '$75$'],
    correctAnswer: 0,
    explanation: 'Area ratio = $(3/5)^2 = 9/25$. So $18/A = 9/25 \\Rightarrow A = 50$.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What is the length of the hypotenuse of a 30-60-90 triangle with short leg $5$?',
    options: ['$10$', '$5\\sqrt{3}$', '$5\\sqrt{2}$', '$15$'],
    correctAnswer: 0,
    explanation: 'In a 30-60-90 triangle, the hypotenuse is twice the short leg: $2 \\times 5 = 10$.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'An arc of a circle with radius $6$ subtends a central angle of $60°$. What is the arc length?',
    options: ['$2\\pi$', '$6\\pi$', '$\\pi$', '$12\\pi$'],
    correctAnswer: 0,
    explanation: 'Arc length = $\\frac{\\theta}{360} \\times 2\\pi r = \\frac{60}{360} \\times 12\\pi = 2\\pi$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'What is the area of a regular hexagon with side length $4$?',
    options: ['$24\\sqrt{3}$', '$16\\sqrt{3}$', '$48\\sqrt{3}$', '$96$'],
    correctAnswer: 0,
    explanation: 'Area of regular hexagon = $\\frac{3\\sqrt{3}}{2}s^2 = \\frac{3\\sqrt{3}}{2}(16) = 24\\sqrt{3}$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'In circle $O$, chord $AB = 10$ and the distance from the center to the chord is $12$. What is the radius?',
    options: ['$13$', '$\\sqrt{119}$', '$11$', '$15$'],
    correctAnswer: 0,
    explanation: 'The perpendicular from center bisects the chord: half-chord $= 5$. By Pythagorean theorem: $r = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'What is the volume of a cone with radius $3$ and height $4$?',
    options: ['$12\\pi$', '$36\\pi$', '$9\\pi$', '$4\\pi$'],
    correctAnswer: 0,
    explanation: '$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(4) = 12\\pi$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'A tangent line to a circle is perpendicular to the radius at the point of tangency. If the tangent length from an external point is $8$ and the radius is $6$, what is the distance from the external point to the center?',
    options: ['$10$', '$14$', '$\\sqrt{100}$', '$2\\sqrt{7}$'],
    correctAnswer: 0,
    explanation: 'The tangent, radius, and line to center form a right triangle: $d = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'What is the relationship between an inscribed angle and the central angle that subtend the same arc?',
    options: ['Inscribed angle = half the central angle', 'They are equal', 'Inscribed angle = twice the central angle', 'No relationship exists'],
    correctAnswer: 0,
    explanation: 'The Inscribed Angle Theorem states that an inscribed angle is half the central angle subtending the same arc.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'A sphere is inscribed in a cube of side $10$. What is the volume of the sphere?',
    options: ['$\\frac{500\\pi}{3}$', '$\\frac{1000\\pi}{3}$', '$500\\pi$', '$\\frac{4000\\pi}{3}$'],
    correctAnswer: 0,
    explanation: 'Inscribed sphere has diameter = side length, so $r = 5$. $V = \\frac{4}{3}\\pi(125) = \\frac{500\\pi}{3}$.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'Two secants from an external point form an angle of $40°$. If the far arc is $120°$, what is the near arc?',
    options: ['$40°$', '$80°$', '$60°$', '$100°$'],
    correctAnswer: 0,
    explanation: 'External angle = $\\frac{1}{2}$(far arc - near arc). $40 = \\frac{1}{2}(120 - x) \\Rightarrow x = 40°$.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'What is the lateral surface area of a cylinder with radius $5$ and height $10$?',
    options: ['$100\\pi$', '$50\\pi$', '$250\\pi$', '$150\\pi$'],
    correctAnswer: 0,
    explanation: 'Lateral SA = $2\\pi rh = 2\\pi(5)(10) = 100\\pi$.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'In a rhombus, the diagonals are $6$ and $8$. What is the area?',
    options: ['$24$', '$48$', '$14$', '$36$'],
    correctAnswer: 0,
    explanation: 'Area of a rhombus = $\\frac{d_1 \\times d_2}{2} = \\frac{6 \\times 8}{2} = 24$.',
    difficulty: 'hard',
  },
]

export function getGeometryQuestions(count: number = 10): GeometryQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
