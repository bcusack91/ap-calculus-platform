/**
 * Entrance Quiz — Rotational Kinematics — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Angular Displacement & Velocity
  {
    id: 'rk-ent-1a',
    question: 'A merry-go-round turns at a steady 12 revolutions per minute. What is its angular speed?',
    options: [
      '0.20 rad/s',
      '75.4 rad/s',
      '1.26 rad/s',
      '0.63 rad/s',
    ],
    correctIndex: 2,
    explanation: '$\\omega = 12 \\times 2\\pi / 60 = 1.26$ rad/s. The value 0.20 is revolutions per second (no $2\\pi$), 75.4 skips dividing by 60 s, and 0.63 uses $\\pi$ instead of $2\\pi$ per revolution.',
    partNumber: 1,
    partTitle: 'Angular Displacement & Velocity',
  },
  {
    id: 'rk-ent-1b',
    question: 'Counterclockwise is positive. A wheel\'s angular velocity changes uniformly from $-8.0$ rad/s to $-2.0$ rad/s in 3.0 s. What is its angular acceleration, and is the wheel speeding up or slowing down?',
    options: [
      '$-3.3\\text{ rad/s}^2$, speeding up',
      '$-2.0\\text{ rad/s}^2$, slowing down',
      '$+2.0\\text{ rad/s}^2$, speeding up',
      '$+2.0\\text{ rad/s}^2$, slowing down',
    ],
    correctIndex: 3,
    explanation: '$\\alpha = \\Delta\\omega/\\Delta t = (-2.0 - (-8.0))/3.0 = +2.0\\text{ rad/s}^2$. Because $\\omega$ is negative and $\\alpha$ is positive (opposite signs), the angular speed is decreasing, so the wheel is slowing down.',
    partNumber: 1,
    partTitle: 'Angular Displacement & Velocity',
  },
  // Part 2 — Rotational Kinematic Equations
  {
    id: 'rk-ent-2a',
    question: 'A wheel spinning at 12 rad/s is given a constant angular acceleration of $3.0\\text{ rad/s}^2$ in the direction it is already turning. Through what angle does it turn in the next 4.0 s?',
    options: [
      '72 rad',
      '48 rad',
      '96 rad',
      '24 rad',
    ],
    correctIndex: 0,
    explanation: '$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 12(4.0) + \\frac{1}{2}(3.0)(4.0)^2 = 48 + 24 = 72$ rad. Ignoring the acceleration gives 48 rad, and dropping the $\\frac{1}{2}$ gives 96 rad.',
    partNumber: 2,
    partTitle: 'Rotational Kinematic Equations',
  },
  {
    id: 'rk-ent-2b',
    question: 'A turbine starts from rest with constant angular acceleration and reaches angular speed $\\omega$ after 8 revolutions. How many more revolutions does it make while speeding up from $\\omega$ to $2\\omega$?',
    options: [
      '8 more revolutions',
      '24 more revolutions',
      '16 more revolutions',
      '32 more revolutions',
    ],
    correctIndex: 1,
    explanation: 'From rest, $\\omega^2 = 2\\alpha\\theta$, so the angle grows as $\\omega^2$: reaching $2\\omega$ takes $4 \\times 8 = 32$ revolutions in total, which is 24 more. The value 32 is the total from rest, not the additional turns.',
    partNumber: 2,
    partTitle: 'Rotational Kinematic Equations',
  },
  // Part 3 — Connecting Linear and Angular
  {
    id: 'rk-ent-3a',
    question: 'A wheel of radius 0.40 m starts from rest and speeds up uniformly to 5.0 rad/s in 2.0 s. At $t = 2.0$ s, what are the tangential and centripetal accelerations of a point on its rim?',
    options: [
      '$a_t = 2.5\\text{ m/s}^2$, $a_c = 10\\text{ m/s}^2$',
      '$a_t = 1.0\\text{ m/s}^2$, $a_c = 2.0\\text{ m/s}^2$',
      '$a_t = 1.0\\text{ m/s}^2$, $a_c = 10\\text{ m/s}^2$',
      '$a_t = 1.0\\text{ m/s}^2$, $a_c = 63\\text{ m/s}^2$',
    ],
    correctIndex: 2,
    explanation: '$\\alpha = 5.0/2.0 = 2.5\\text{ rad/s}^2$, so $a_t = r\\alpha = 0.40(2.5) = 1.0\\text{ m/s}^2$ and $a_c = r\\omega^2 = 0.40(25) = 10\\text{ m/s}^2$. Using $r\\omega$ gives 2.0, and $\\omega^2/r$ gives 63.',
    partNumber: 3,
    partTitle: 'Connecting Linear and Angular',
  },
  {
    id: 'rk-ent-3b',
    question: 'Two children ride a merry-go-round turning at constant angular speed: Ana sits 1.0 m from the center and Ben sits 3.0 m from the center. How does Ben\'s motion compare with Ana\'s?',
    options: [
      'Same angular speed, and one-third the centripetal acceleration',
      'Triple the angular speed, and equal centripetal acceleration',
      'Same angular speed, and nine times the centripetal acceleration',
      'Same angular speed, and three times the centripetal acceleration',
    ],
    correctIndex: 3,
    explanation: 'Every point on a rigid rotating body shares the same $\\omega$, and $a_c = r\\omega^2$ grows in proportion to $r$, so Ben\'s is three times Ana\'s. Nine times would follow from squaring the radius ratio, which the formula does not do.',
    partNumber: 3,
    partTitle: 'Connecting Linear and Angular',
  },
  // Part 4 — Rolling Without Slipping
  {
    id: 'rk-ent-4a',
    question: 'A wheel of radius 0.30 m rolls without slipping, making 50 revolutions in 25 s at steady speed. How fast does its center move?',
    options: [
      '3.8 m/s',
      '0.60 m/s',
      '1.9 m/s',
      '7.5 m/s',
    ],
    correctIndex: 0,
    explanation: 'Each revolution moves the center one circumference, $2\\pi(0.30) = 1.88$ m, so it covers 94 m in 25 s: 3.8 m/s. Leaving out $2\\pi$ gives 0.60 m/s, and 7.5 m/s is the speed of the top of the wheel.',
    partNumber: 4,
    partTitle: 'Rolling Without Slipping',
  },
  {
    id: 'rk-ent-4b',
    question: 'A car drives at 20 m/s on tires that roll without slipping. Relative to the road, how fast are the top of a tire and the point of the tire touching the road moving?',
    options: [
      'Top 20 m/s, contact point 20 m/s',
      'Top 40 m/s, contact point 0 m/s',
      'Top 40 m/s, contact point 20 m/s',
      'Top 20 m/s, contact point 0 m/s',
    ],
    correctIndex: 1,
    explanation: 'Each point\'s velocity is the center\'s 20 m/s plus its rotational velocity of magnitude $R\\omega = 20$ m/s. At the top these add to 40 m/s; at the contact point they cancel, so it is instantaneously at rest.',
    partNumber: 4,
    partTitle: 'Rolling Without Slipping',
  },
  // Part 5 — Rotational Inertia
  {
    id: 'rk-ent-5a',
    question: 'Two 0.50 kg balls are fixed to the ends of a light rod 0.80 m long. What is the rotational inertia of the system about an axis through the center of the rod, perpendicular to it?',
    options: [
      '$0.64\\text{ kg}\\cdot\\text{m}^2$',
      '$0.40\\text{ kg}\\cdot\\text{m}^2$',
      '$0.16\\text{ kg}\\cdot\\text{m}^2$',
      '$0.32\\text{ kg}\\cdot\\text{m}^2$',
    ],
    correctIndex: 2,
    explanation: 'Each ball is 0.40 m from the axis, so $I = 2(0.50)(0.40)^2 = 0.16\\text{ kg}\\cdot\\text{m}^2$. Using the full 0.80 m length for each ball gives 0.64, and 0.32 is the value about one end of the rod.',
    partNumber: 5,
    partTitle: 'Rotational Inertia',
  },
  {
    id: 'rk-ent-5b',
    question: 'A solid disk of radius $2R$ and a thin hoop of radius $R$ have the same mass $M$ and spin about their central axes. How does the disk\'s rotational inertia compare with the hoop\'s?',
    options: [
      'Equal to the hoop\'s',
      'Four times the hoop\'s',
      'Half of the hoop\'s',
      'Twice as large as the hoop\'s',
    ],
    correctIndex: 3,
    explanation: 'The disk has $\\frac{1}{2}M(2R)^2 = 2MR^2$ and the hoop has $MR^2$, so the disk\'s is twice as large. Its mass is less concentrated at the rim, but its doubled radius matters more because $I$ grows with the square of the distance.',
    partNumber: 5,
    partTitle: 'Rotational Inertia',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'rk-ent-6a',
    question: 'A car accelerates uniformly from rest to 15 m/s in 5.0 s on tires of radius 0.30 m that roll without slipping. About how many revolutions does each tire make in that time?',
    options: [
      '20 revolutions',
      '125 revolutions',
      '250 revolutions',
      '6.0 revolutions',
    ],
    correctIndex: 0,
    explanation: 'The car travels $\\frac{1}{2}(0+15)(5.0) = 37.5$ m, so each tire turns $37.5/0.30 = 125$ rad, or $125/2\\pi \\approx 20$ revolutions. The value 125 is the angle in radians, and 250 also uses 75 m (from forgetting that the car started from rest) and stops at radians.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'rk-ent-6b',
    question: 'A potter\'s wheel of radius 0.20 m slows uniformly from 6.0 rad/s to rest in 3.0 s. Just as it starts slowing, what is the magnitude of the total acceleration of a point on the rim?',
    options: [
      '$0.40\\text{ m/s}^2$',
      '$7.2\\text{ m/s}^2$',
      '$7.6\\text{ m/s}^2$',
      '$1.2\\text{ m/s}^2$',
    ],
    correctIndex: 1,
    explanation: '$\\alpha = 6.0/3.0 = 2.0\\text{ rad/s}^2$, so $a_t = 0.20(2.0) = 0.40\\text{ m/s}^2$, while $a_c = r\\omega^2 = 0.20(36) = 7.2\\text{ m/s}^2$. These are perpendicular, so the total is $\\sqrt{7.2^2 + 0.40^2} \\approx 7.2\\text{ m/s}^2$; adding them directly gives 7.6.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'rk-ent-7a',
    question: 'A graph of a wheel\'s angular velocity versus time is a straight line rising from 0 at $t = 0$ to 12 rad/s at $t = 6.0$ s. What are the wheel\'s angular acceleration and the angle it turns through in those 6.0 s?',
    options: [
      '$\\alpha = 0.50\\text{ rad/s}^2$; $\\theta = 36$ rad',
      '$\\alpha = 2.0\\text{ rad/s}^2$; $\\theta = 72$ rad',
      '$\\alpha = 2.0\\text{ rad/s}^2$; $\\theta = 36$ rad',
      '$\\alpha = 2.0\\text{ rad/s}^2$; $\\theta = 12$ rad',
    ],
    correctIndex: 2,
    explanation: 'The slope gives $\\alpha = 12/6.0 = 2.0\\text{ rad/s}^2$, and the area under the line gives $\\theta = \\frac{1}{2}(6.0)(12) = 36$ rad. Using the full rectangle gives 72 rad, and inverting the slope gives 0.50.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rk-ent-7b',
    question: 'A disk of radius 0.50 m starts from rest with constant angular acceleration. After 4.0 s, a point on its rim has a speed of 2.0 m/s. Through what angle has the disk turned?',
    options: [
      '4.0 rad',
      '16 rad',
      '2.0 rad',
      '8.0 rad',
    ],
    correctIndex: 3,
    explanation: '$\\omega = v/r = 4.0$ rad/s, so $\\alpha = 1.0\\text{ rad/s}^2$ and $\\theta = \\frac{1}{2}(1.0)(4.0)^2 = 8.0$ rad. Forgetting the $\\frac{1}{2}$ gives 16 rad, and 4.0 is the rim\'s arc length in meters, not an angle.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angular Displacement & Velocity' },
    { partNumber: 2, partTitle: 'Rotational Kinematic Equations' },
    { partNumber: 3, partTitle: 'Connecting Linear and Angular' },
    { partNumber: 4, partTitle: 'Rolling Without Slipping' },
    { partNumber: 5, partTitle: 'Rotational Inertia' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
