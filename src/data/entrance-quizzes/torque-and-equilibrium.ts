/**
 * Entrance Quiz — Torque and Rotational Equilibrium — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What Is Torque?
  {
    id: 'tq-ent-1a',
    question: 'A mechanic pulls on the end of a 0.40 m wrench with a 60 N force directed at $30^\\circ$ to the wrench handle ($\\sin 30^\\circ = 0.50$, $\\cos 30^\\circ = 0.87$). What is the magnitude of the torque about the bolt?',
    options: [
      '24 N·m',
      '12 N·m',
      '21 N·m',
      '150 N·m',
    ],
    correctIndex: 1,
    explanation: '$\\tau = rF\\sin\\theta = 0.40(60)(0.50) = 12$ N·m; only the force component perpendicular to the wrench turns the bolt. Ignoring the angle gives 24 N·m, and using the cosine gives 21 N·m.',
    partNumber: 1,
    partTitle: 'What Is Torque?',
  },
  {
    id: 'tq-ent-1b',
    question: 'You push on a door with the same size force each time. Which push produces the greatest torque about the hinges?',
    options: [
      'At the handle, directed toward the hinges',
      'Near the hinges, perpendicular to the door',
      'At the handle, perpendicular to the door',
      'At the handle, at $30^\\circ$ to the door\'s face',
    ],
    correctIndex: 2,
    explanation: 'Torque is $rF\\sin\\theta$: it is largest for the greatest distance from the axis and a force at $90^\\circ$ to the door. A push aimed at the hinges has zero lever arm.',
    partNumber: 1,
    partTitle: 'What Is Torque?',
  },
  // Part 2 — Calculating Torque
  {
    id: 'tq-ent-2a',
    question: 'A horizontal beam 3.0 m long is hinged at a wall. A cable attached to the far end pulls with 200 N at $37^\\circ$ above the beam ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). What is the cable\'s torque about the hinge?',
    options: [
      '600 N·m',
      '120 N·m',
      '480 N·m',
      '360 N·m',
    ],
    correctIndex: 3,
    explanation: 'The lever arm is the perpendicular distance from the hinge to the cable\'s line of action, $3.0\\sin 37^\\circ = 1.8$ m, so $\\tau = 1.8(200) = 360$ N·m. Using the cosine gives 480 N·m.',
    partNumber: 2,
    partTitle: 'Calculating Torque',
  },
  {
    id: 'tq-ent-2b',
    question: 'Three pushes act on a door, each at a stated distance from the hinge: A is 30 N at 0.90 m, perpendicular to the door; B is 60 N at 0.90 m, at $30^\\circ$ to the door ($\\sin 30^\\circ = 0.50$); C is 45 N at 0.60 m, perpendicular. How do their torques about the hinge compare?',
    options: [
      '$\\tau_A = \\tau_B = \\tau_C$',
      '$\\tau_B > \\tau_C > \\tau_A$',
      '$\\tau_B > \\tau_A > \\tau_C$',
      '$\\tau_A > \\tau_C > \\tau_B$',
    ],
    correctIndex: 0,
    explanation: 'A gives $0.90(30) = 27$ N·m, B gives $0.90(60)(0.50) = 27$ N·m, and C gives $0.60(45) = 27$ N·m. The largest force does not win when its perpendicular component or its distance is smaller.',
    partNumber: 2,
    partTitle: 'Calculating Torque',
  },
  // Part 3 — Rotational Equilibrium
  {
    id: 'tq-ent-3a',
    question: 'A meter stick of negligible mass balances on a pivot at its 50 cm mark. A 3.0 N weight hangs at the 20 cm mark. Where must a 2.0 N weight hang to keep it balanced?',
    options: [
      'At the 80 cm mark',
      'At the 95 cm mark',
      'At the 70 cm mark',
      'At the 30 cm mark',
    ],
    correctIndex: 1,
    explanation: 'The 3.0 N weight is 30 cm from the pivot, giving $3.0(30) = 90$ N·cm. The 2.0 N weight needs $90/2.0 = 45$ cm on the other side, at the 95 cm mark. Mirroring the 30 cm distance gives the 80 cm mark.',
    partNumber: 3,
    partTitle: 'Rotational Equilibrium',
  },
  {
    id: 'tq-ent-3b',
    question: 'A uniform plank balanced at its center holds a 600 N person 1.0 m to the left of center and a 400 N person 1.5 m to the right. Both people then move 0.50 m farther from the center. What happens?',
    options: [
      'The lighter person\'s end drops down',
      'It stays balanced, since both moved the same amount',
      'It tips toward the heavier person',
      'It stays balanced, since neither weight changed',
    ],
    correctIndex: 2,
    explanation: 'Afterward the torques are $600(1.5) = 900$ N·m and $400(2.0) = 800$ N·m, so the net torque turns the plank down on the heavier person\'s side. Equal shifts add more torque for the larger weight.',
    partNumber: 3,
    partTitle: 'Rotational Equilibrium',
  },
  // Part 4 — Static Equilibrium
  {
    id: 'tq-ent-4a',
    question: 'A uniform 4.0 m beam weighing 200 N rests on supports at its two ends. A 600 N load sits 1.0 m from the left end. What force does the left support exert?',
    options: [
      '250 N',
      '450 N',
      '400 N',
      '550 N',
    ],
    correctIndex: 3,
    explanation: 'Taking torques about the right support: $N_L(4.0) = 600(3.0) + 200(2.0) = 2200$ N·m, so $N_L = 550$ N (and the right support gives the remaining 250 N). Leaving out the beam\'s weight gives 450 N.',
    partNumber: 4,
    partTitle: 'Static Equilibrium',
  },
  {
    id: 'tq-ent-4b',
    question: 'An object is in translational equilibrium but not in rotational equilibrium. Which describes its possible motion?',
    options: [
      'Its spin can change, but its center of mass cannot accelerate',
      'It must be at rest and must stay at rest',
      'It must move in a straight line with increasing speed',
      'It accelerates in a straight line without any rotation',
    ],
    correctIndex: 0,
    explanation: 'Zero net force means the center of mass has no acceleration, but a nonzero net torque (as from a couple) gives an angular acceleration, so the object\'s rotation changes.',
    partNumber: 4,
    partTitle: 'Static Equilibrium',
  },
  // Part 5 — Balancing Beams and See-Saw Problems
  {
    id: 'tq-ent-5a',
    question: 'A uniform 6.0 m plank weighing 200 N lies on a flat roof with 2.0 m sticking out past the edge. How far past the edge can a 500 N person walk before the plank starts to tip?',
    options: [
      '2.0 m',
      '0.40 m',
      '1.0 m',
      '0.80 m',
    ],
    correctIndex: 1,
    explanation: 'The plank\'s center is 1.0 m back from the edge, so about the edge its weight gives $200(1.0) = 200$ N·m. The plank tips when $500\\,d$ exceeds that, at $d = 0.40$ m.',
    partNumber: 5,
    partTitle: 'Balancing Beams and See-Saw Problems',
  },
  {
    id: 'tq-ent-5b',
    question: 'A uniform 4.0 m beam weighing 100 N balances on a pivot 1.0 m from its left end, with a 50 N weight hanging at its right end. What weight hangs at the left end?',
    options: [
      '150 N',
      '350 N',
      '250 N',
      '200 N',
    ],
    correctIndex: 2,
    explanation: 'About the pivot, the left weight\'s torque $W(1.0)$ must balance the beam\'s weight at its center, $100(1.0)$, plus the right weight, $50(3.0)$: $W = 100 + 150 = 250$ N. Ignoring the beam gives 150 N.',
    partNumber: 5,
    partTitle: 'Balancing Beams and See-Saw Problems',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'tq-ent-6a',
    question: 'A horizontal 2.0 m beam weighing 100 N is hinged at a wall. A cable from its far end to the wall makes $30^\\circ$ with the beam, and a 300 N sign hangs from the far end. What is the cable tension? Use $\\sin 30^\\circ = 0.50$.',
    options: [
      '350 N',
      '1400 N',
      '800 N',
      '700 N',
    ],
    correctIndex: 3,
    explanation: 'About the hinge, $T\\sin 30^\\circ(2.0) = 300(2.0) + 100(1.0) = 700$ N·m, so $T = 700/(0.50 \\times 2.0) = 700$ N. Ignoring the angle gives 350 N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tq-ent-6b',
    question: 'When solving for a cable\'s tension in a hinged-beam problem, why is the hinge the most useful point to take torques about?',
    options: [
      'The unknown hinge force has no torque about that point',
      'The hinge force is always zero in equilibrium',
      'Torques about any other point are not balanced',
      'Only that point gives the correct answer',
    ],
    correctIndex: 0,
    explanation: 'Any force acting at the pivot has zero lever arm, so the unknown hinge force drops out of the torque equation. Torques balance about every point in equilibrium; the hinge is simply the most convenient.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'tq-ent-7a',
    question: 'A uniform rod of weight $W$ is hinged at one end and held horizontal by a vertical string attached three-quarters of the way along the rod from the hinge. What is the tension in the string?',
    options: [
      '$\\tfrac{1}{2}W$',
      '$\\tfrac{2}{3}W$',
      '$\\tfrac{3}{4}W$',
      '$\\tfrac{3}{2}W$',
    ],
    correctIndex: 1,
    explanation: 'About the hinge, $T(\\tfrac{3}{4}L) = W(\\tfrac{1}{2}L)$ because the weight acts at the rod\'s center, so $T = \\tfrac{2}{3}W$. Putting the weight at the string\'s position gives $W$, and inverting the ratio gives $\\tfrac{3}{2}W$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'tq-ent-7b',
    question: 'Two 20 N forces act perpendicular to a 0.60 m rod at its two ends, one pushing up and the other pushing down. What are the net force and net torque on the rod?',
    options: [
      '40 N net force, zero net torque',
      'Zero net force and zero net torque',
      'Zero net force, 12 N·m torque',
      'Zero net force, 6.0 N·m of net torque',
    ],
    correctIndex: 2,
    explanation: 'The forces cancel, but about the center each gives $0.30(20) = 6.0$ N·m in the same rotational sense, for 12 N·m in all (a couple). Counting only one force gives 6.0 N·m.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Is Torque?' },
    { partNumber: 2, partTitle: 'Calculating Torque' },
    { partNumber: 3, partTitle: 'Rotational Equilibrium' },
    { partNumber: 4, partTitle: 'Static Equilibrium' },
    { partNumber: 5, partTitle: 'Balancing Beams and See-Saw Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
