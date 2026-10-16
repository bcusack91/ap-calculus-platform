/**
 * Entrance Quiz — Newton's First and Second Laws — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Inertia & Newton's First Law
  {
    id: 'nfs-ent-1a',
    question: 'A hockey puck slides across level, frictionless ice in a straight line at constant speed. Which statement about the forces on the puck is correct?',
    options: [
      'The forces on it add up to zero',
      'A small forward force keeps it going',
      'Its forward push slowly runs out',
      'The net force points along its motion',
    ],
    correctIndex: 0,
    explanation: 'Constant velocity means zero acceleration, so by Newton\'s first law the net force is zero (weight and the normal force cancel). No force is needed to maintain motion, only to change it.',
    partNumber: 1,
    partTitle: 'Inertia & Newton\'s First Law',
  },
  {
    id: 'nfs-ent-1b',
    question: 'A ball hangs from a string attached to the ceiling of a train car. The train has been moving at constant speed and then begins to brake. While the train slows, what happens to the string, as seen by a passenger?',
    options: [
      'It hangs straight down as before',
      'It tilts toward the front of the train',
      'It tilts toward the back of the train',
      'It tilts toward one side of the train',
    ],
    correctIndex: 1,
    explanation: 'The ball tends to keep moving forward at its original speed (inertia) while the car slows, so it swings forward until the string\'s tilt supplies the backward force that slows the ball with the train.',
    partNumber: 1,
    partTitle: 'Inertia & Newton\'s First Law',
  },
  // Part 2 — Newton's Second Law
  {
    id: 'nfs-ent-2a',
    question: 'Three horizontal forces act on a 4.0 kg box on a frictionless floor: 30 N east, 18 N west, and 16 N north. What is the magnitude of the box\'s acceleration?',
    options: [
      '$16\\text{ m/s}^2$',
      '$7.0\\text{ m/s}^2$',
      '$5.0\\text{ m/s}^2$',
      '$3.0\\text{ m/s}^2$',
    ],
    correctIndex: 2,
    explanation: 'The net force has components 12 N east and 16 N north, so $F_{\\text{net}} = \\sqrt{12^2 + 16^2} = 20$ N and $a = 20/4.0 = 5.0\\text{ m/s}^2$. Adding the component magnitudes (28 N) gives 7.0, and adding all three forces gives 16.',
    partNumber: 2,
    partTitle: 'Newton\'s Second Law',
  },
  {
    id: 'nfs-ent-2b',
    question: 'At one instant a cart is moving to the right, while the net force on it points to the left. Which statement is correct at that instant?',
    options: [
      'It is speeding up now',
      'It is moving to the left',
      'It is moving at constant speed',
      'It is slowing down',
    ],
    correctIndex: 3,
    explanation: 'Acceleration always points along the net force, here to the left. With velocity to the right and acceleration to the left, the cart is slowing down; it is still moving right at that instant and will reverse only if the force keeps acting after it stops.',
    partNumber: 2,
    partTitle: 'Newton\'s Second Law',
  },
  // Part 3 — Free Body Diagrams
  {
    id: 'nfs-ent-3a',
    question: 'A box is pulled up a rough ramp at constant speed by a rope parallel to the ramp. Which list gives all the forces acting on the box?',
    options: [
      'Weight, normal force, tension, and friction',
      'Weight, tension, friction, and a force of motion',
      'Weight, normal force, tension, friction, and the net force',
      'Weight, normal force, and tension, nothing else',
    ],
    correctIndex: 0,
    explanation: 'The Earth pulls down (weight), the ramp pushes perpendicular to its surface (normal) and along it opposing the sliding (friction), and the rope pulls (tension). The net force is the sum of these, not an extra force, and there is no "force of motion".',
    partNumber: 3,
    partTitle: 'Free Body Diagrams',
  },
  {
    id: 'nfs-ent-3b',
    question: 'A skydiver falls straight down at a constant (terminal) speed. Which describes the forces on her?',
    options: [
      'Weight down only, since she is moving downward',
      'Weight down and air resistance up, equal in size',
      'Weight down, larger than the air resistance up',
      'Air resistance up, larger than the weight down',
    ],
    correctIndex: 1,
    explanation: 'Constant velocity means zero net force, so the upward air resistance must exactly balance her weight. A larger weight would make her speed up, and a larger drag would slow her.',
    partNumber: 3,
    partTitle: 'Free Body Diagrams',
  },
  // Part 4 — Applying F = ma — Single Object Problems
  {
    id: 'nfs-ent-4a',
    question: 'A 60 kg person stands on a scale in an elevator that is moving upward but slowing down at $2.0\\text{ m/s}^2$. What does the scale read? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '720 N',
      '600 N',
      '480 N',
      '120 N',
    ],
    correctIndex: 2,
    explanation: 'The acceleration points down (slowing while moving up), so with up positive $N - mg = m(-2.0)$ and $N = 60(10 - 2.0) = 480$ N. The direction of the acceleration, not of the velocity, sets the reading.',
    partNumber: 4,
    partTitle: 'Applying F = ma — Single Object Problems',
  },
  {
    id: 'nfs-ent-4b',
    question: 'A 20 kg sled on frictionless snow is pulled by a rope with a 100 N tension at $37^\\circ$ above the horizontal ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). What is the normal force on the sled? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '200 N',
      '260 N',
      '120 N',
      '140 N',
    ],
    correctIndex: 3,
    explanation: 'Vertically, $N + T\\sin 37^\\circ - mg = 0$, so $N = 200 - 60 = 140$ N. The upward component of the pull reduces the normal force; using the cosine instead gives 120 N.',
    partNumber: 4,
    partTitle: 'Applying F = ma — Single Object Problems',
  },
  // Part 5 — Weight & Normal Force
  {
    id: 'nfs-ent-5a',
    question: 'A 50 kg student stands on a scale in an elevator, and the scale reads 400 N. Which must be true of the elevator? Use $g = 10\\text{ m/s}^2$.',
    options: [
      'It is accelerating downward at $2\\text{ m/s}^2$',
      'It is accelerating upward at $2\\text{ m/s}^2$',
      'It is moving down at a constant speed of $2$ m/s',
      'It is accelerating downward at $8\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'The student\'s weight is 500 N, so $N - mg = 400 - 500 = -100$ N gives $a = -2\\text{ m/s}^2$: a downward acceleration of $2\\text{ m/s}^2$. The elevator could be moving down and speeding up or moving up and slowing down; constant velocity would make the scale read 500 N.',
    partNumber: 5,
    partTitle: 'Weight & Normal Force',
  },
  {
    id: 'nfs-ent-5b',
    question: 'A 5.0 kg box rests on a table while a string pulls straight up on it with a 20 N force. What is the normal force from the table on the box? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '50 N',
      '30 N',
      '20 N',
      '70 N',
    ],
    correctIndex: 1,
    explanation: 'The box is in equilibrium, so $N + 20 - 50 = 0$ and $N = 30$ N. The normal force adjusts to whatever the other vertical forces require; it equals $mg$ only when nothing else pushes or pulls vertically.',
    partNumber: 5,
    partTitle: 'Weight & Normal Force',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'nfs-ent-6a',
    question: 'On a frictionless table, a horizontal rope pulls a 3.0 kg block with a 24 N force, and a light string connects that block to a 1.0 kg block trailing behind it. What is the tension in the connecting string?',
    options: [
      '24 N',
      '18 N',
      '6 N',
      '12 N',
    ],
    correctIndex: 2,
    explanation: 'Both blocks share $a = 24/(3.0 + 1.0) = 6.0\\text{ m/s}^2$. The string is the only horizontal force on the 1.0 kg block, so $T = (1.0)(6.0) = 6$ N; the 18 N value is the net force on the front block.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'nfs-ent-6b',
    question: 'A 1200 kg car brakes from 25 m/s to rest over a distance of 50 m with constant deceleration. What is the magnitude of the net braking force?',
    options: [
      '3750 N',
      '600 N',
      '15000 N',
      '7500 N',
    ],
    correctIndex: 3,
    explanation: 'From $v^2 = v_0^2 + 2a\\Delta x$, $a = 625/100 = 6.25\\text{ m/s}^2$, so $F = ma = 1200(6.25) = 7500$ N. Leaving out the 2 in $2a\\Delta x$ doubles the result to 15000 N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'nfs-ent-7a',
    question: 'Cart X has three times the mass of cart Y. Starting from rest, each is pushed by the same constant net force over the same distance. How does X\'s final speed compare with Y\'s?',
    options: [
      '$\\dfrac{1}{\\sqrt{3}}$ of Y\'s speed',
      'One-third of Y\'s speed',
      'One-ninth of Y\'s speed',
      'Equal to Y\'s speed',
    ],
    correctIndex: 0,
    explanation: 'X\'s acceleration is one-third of Y\'s, and from $v^2 = 2a\\Delta x$ its $v^2$ is one-third as large, so its speed is $1/\\sqrt{3}$ of Y\'s. One-third would be right for equal pushing times, not equal distances.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'nfs-ent-7b',
    question: 'A worker pushes a heavy crate across a level floor at constant speed with a 200 N horizontal force. Which statement is correct?',
    options: [
      'The push is larger than the friction force',
      'Friction and the push are equal in size',
      'The net force is 200 N in the forward direction',
      'The crate\'s inertia supplies a forward force',
    ],
    correctIndex: 1,
    explanation: 'Constant velocity means zero net force, so the backward friction (200 N) must balance the 200 N push. A push larger than friction would make the crate speed up, and inertia is not a force.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Inertia & Newton\'s First Law' },
    { partNumber: 2, partTitle: 'Newton\'s Second Law' },
    { partNumber: 3, partTitle: 'Free Body Diagrams' },
    { partNumber: 4, partTitle: 'Applying F = ma — Single Object Problems' },
    { partNumber: 5, partTitle: 'Weight & Normal Force' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
