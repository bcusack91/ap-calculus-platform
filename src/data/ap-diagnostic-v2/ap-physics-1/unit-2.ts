/**
 * AP Physics 1 diagnostic v2 — Unit 2: Force and Translational Dynamics
 * (CED 2024 topics 2.1–2.9). The engine sample set phys1-s001 (two blocks and
 * a string) lives in ./sample.ts and also counts toward this unit.
 * Banked curves are frictionless only (2.9 boundary); no springs in series or
 * parallel. g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s006',
    title: 'A block at rest on a rough incline',
    kind: 'figure',
    content:
      'A 5.0 kg block rests on a rough incline that makes an angle of 37° with the horizontal (sin 37° = 0.60, cos 37° = 0.80). The coefficient of static friction between the block and the incline is 0.90. The free-body diagram shows the three forces on the block: its weight (straight down), the normal force (perpendicular to the incline) and static friction (up the incline). Use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block on a 37 degree incline with arrows for weight straight down, normal force perpendicular to the incline and static friction up the incline" fill="none" stroke="currentColor" stroke-width="2">' +
      '<defs><marker id="phys1-s006-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>' +
      '<polygon points="30,230 310,230 310,20"/>' +
      '<path d="M78 230 A 48 48 0 0 0 69 201"/>' +
      '<text x="88" y="222" font-size="13" fill="currentColor" stroke="none">37°</text>' +
      '<polygon points="164,129.5 204,99.5 186,75.5 146,105.5"/>' +
      '<line x1="175" y1="102.5" x2="175" y2="180" marker-end="url(#phys1-s006-arrow)"/>' +
      '<text x="182" y="182" font-size="13" fill="currentColor" stroke="none">weight</text>' +
      '<line x1="175" y1="102.5" x2="139" y2="54.5" marker-end="url(#phys1-s006-arrow)"/>' +
      '<text x="96" y="48" font-size="13" fill="currentColor" stroke="none">normal</text>' +
      '<line x1="175" y1="102.5" x2="223" y2="66.5" marker-end="url(#phys1-s006-arrow)"/>' +
      '<text x="228" y="62" font-size="13" fill="currentColor" stroke="none">static friction</text>' +
      '</svg>',
  },
  {
    id: 'phys1-s007',
    title: 'Scale readings in an elevator',
    kind: 'table',
    content:
      'A 60 kg student stands on a bathroom scale on the floor of an elevator that starts at rest on the ground floor. The scale reading is constant during each time interval in the table, and the elevator is again at rest at t = 10.0 s. Use g = 10 m/s².\n\n| Time interval (s) | Scale reading (N) |\n|---|---|\n| 0 to 2.0 | 720 |\n| 2.0 to 8.0 | 600 |\n| 8.0 to 10.0 | 480 |',
  },
  {
    id: 'phys1-s008',
    title: 'A block on a table pulled by a hanging block',
    kind: 'figure',
    content:
      'Block A (mass 3.0 kg) sits on a rough horizontal table; the coefficient of kinetic friction between A and the table is 0.20. A light string runs from block A over a light, frictionless pulley at the edge of the table to block B (mass 3.0 kg), which hangs below the pulley. The blocks are released from rest and A slides toward the pulley. Use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block A on a rough horizontal table connected by a string over a pulley at the table edge to hanging block B" fill="none" stroke="currentColor" stroke-width="2">' +
      '<rect x="20" y="90" width="250" height="14"/>' +
      '<line x1="40" y1="104" x2="40" y2="220"/>' +
      '<line x1="250" y1="104" x2="250" y2="220"/>' +
      '<rect x="80" y="45" width="70" height="45"/>' +
      '<text x="115" y="73" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">A</text>' +
      '<text x="115" y="38" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">3.0 kg</text>' +
      '<line x1="150" y1="67" x2="286" y2="67"/>' +
      '<circle cx="286" cy="82" r="15"/>' +
      '<line x1="270" y1="90" x2="278" y2="88"/>' +
      '<line x1="301" y1="82" x2="301" y2="150"/>' +
      '<rect x="281" y="150" width="40" height="40"/>' +
      '<text x="301" y="175" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">B</text>' +
      '<text x="330" y="210" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">3.0 kg</text>' +
      '</svg>',
  },
  {
    id: 'phys1-s009',
    title: 'Friction on a crate as the push increases',
    kind: 'graph',
    content:
      'A 10 kg crate rests on a level floor. A student pushes it horizontally with a force that increases slowly from 0 N to 100 N, and a force sensor records the friction force on the crate. The crate stays at rest until the push exceeds 60 N; it then starts to slide, and the friction force drops to 40 N and stays there. Use g = 10 m/s².',
    chart: {
      title: 'Figure 3. Friction force on the crate versus applied force',
      kind: 'line',
      xLabel: 'Applied horizontal force',
      xUnit: 'N',
      yLabel: 'Friction force',
      yUnit: 'N',
      xValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      yValues: [0, 10, 20, 30, 40, 50, 60, 40, 40, 40, 40],
      seriesLabel: 'Friction on crate',
    },
  },
  {
    id: 'phys1-s010',
    title: 'A car through the bottom of a dip',
    kind: 'figure',
    content:
      'A 1000 kg car drives through a dip in a road. Near its lowest point the road is a circular arc of radius 50 m, as shown. At the lowest point the car moves at 15 m/s. The forces on the car there are its weight (down) and the normal force from the road (up). Use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A car at the lowest point of a dip in the road shaped like a circular arc of radius 50 m, with the normal force up and the weight down" fill="none" stroke="currentColor" stroke-width="2">' +
      '<defs><marker id="phys1-s010-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>' +
      '<path d="M30 30 Q 180 330 330 30"/>' +
      '<rect x="160" y="152" width="40" height="18"/>' +
      '<circle cx="168" cy="172" r="5"/>' +
      '<circle cx="192" cy="172" r="5"/>' +
      '<line x1="180" y1="152" x2="180" y2="90" marker-end="url(#phys1-s010-arrow)"/>' +
      '<text x="188" y="98" font-size="13" fill="currentColor" stroke="none">normal force</text>' +
      '<line x1="180" y1="170" x2="180" y2="212" marker-end="url(#phys1-s010-arrow)"/>' +
      '<text x="188" y="210" font-size="13" fill="currentColor" stroke="none">weight</text>' +
      '<line x1="150" y1="160" x2="110" y2="160" marker-end="url(#phys1-s010-arrow)" stroke-width="1.5"/>' +
      '<text x="106" y="153" text-anchor="end" font-size="12" fill="currentColor" stroke="none">15 m/s</text>' +
      '<text x="180" y="40" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">arc radius 50 m</text>' +
      '</svg>',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: block on a rough incline (phys1-s006) ---
  {
    id: 'phys1-s006-q1',
    stimulusId: 'phys1-s006',
    unit: 'unit-2',
    topicSlug: 'inclined-planes',
    difficulty: 'easy',
    stem: 'What is the magnitude of the normal force on the block?',
    options: ['40 N', '50 N', '30 N', '63 N'],
    correctIndex: 0,
    explanation:
      'Perpendicular to the incline the block does not accelerate, so N = mg cos 37° = (50 N)(0.80) = 40 N. 50 N is the full weight (true only on level ground); 30 N uses sin instead of cos; 63 N divides by cos 37° instead of multiplying.',
  },
  {
    id: 'phys1-s006-q2',
    stimulusId: 'phys1-s006',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'medium',
    stem: 'What is the magnitude of the static friction force on the block while it is at rest?',
    options: ['30 N', '36 N', '40 N', '50 N'],
    correctIndex: 0,
    explanation:
      'At rest the net force along the incline is zero, so static friction balances the weight’s component down the incline: f = mg sin 37° = (50)(0.60) = 30 N. 36 N is μsN = (0.90)(40), the MAXIMUM static friction, which is reached only when the block is about to slip; 40 N is the normal force; 50 N is the weight.',
  },
  {
    id: 'phys1-s006-q3',
    stimulusId: 'phys1-s006',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'hard',
    stem: 'A student now pushes on the block with a force directed up the incline, parallel to its surface, and slowly increases the push. What is the smallest push that will start the block sliding up the incline?',
    options: ['66 N', '36 N', '6.0 N', '30 N'],
    correctIndex: 0,
    explanation:
      'To start the block moving UP, the push must overcome both the weight’s component down the incline (30 N) and the maximum static friction, which now points DOWN the incline (μsN = 0.90 × 40 = 36 N): F = 30 + 36 = 66 N. 36 N forgets the weight component; 6.0 N keeps friction pointing up the incline (36 − 30); 30 N ignores friction altogether.',
  },
  // --- Set: elevator scale readings (phys1-s007) ---
  {
    id: 'phys1-s007-q1',
    stimulusId: 'phys1-s007',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'easy',
    stem: 'What is the acceleration of the elevator from t = 0 to t = 2.0 s?',
    options: ['2.0 m/s² upward', '2.0 m/s² downward', '12 m/s² upward', '10 m/s² downward'],
    correctIndex: 0,
    explanation:
      'The scale pushes up with 720 N and gravity pulls down with mg = 600 N, so F_net = 120 N upward and a = 120/60 = 2.0 m/s² upward. Downward reverses the sign of the net force; 12 m/s² divides the scale reading alone by the mass, forgetting the weight; 10 m/s² downward is free fall, which would make the scale read zero.',
  },
  {
    id: 'phys1-s007-q2',
    stimulusId: 'phys1-s007',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'medium',
    stem: 'Which statement best describes the elevator’s motion from t = 2.0 s to t = 8.0 s?',
    options: [
      'It moves upward at a constant speed of 4.0 m/s.',
      'It is at rest, because the scale reads the student’s weight.',
      'It moves upward and speeds up at a constant rate.',
      'It moves downward at a constant speed of 4.0 m/s.',
    ],
    correctIndex: 0,
    explanation:
      'A reading of 600 N equals mg, so the net force and acceleration are zero: the velocity stays whatever it was at t = 2.0 s, which is (2.0 m/s²)(2.0 s) = 4.0 m/s upward. A scale reading equal to the weight means zero ACCELERATION, not zero velocity. Speeding up would need a reading above 600 N, and nothing reversed the upward motion.',
  },
  {
    id: 'phys1-s007-q3',
    stimulusId: 'phys1-s007',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'hard',
    stem: 'How far does the elevator travel from t = 0 to t = 10.0 s?',
    options: ['32 m', '24 m', '40 m', '28 m'],
    correctIndex: 0,
    explanation:
      'From 0 to 2.0 s it speeds up from rest at 2.0 m/s²: ½(2.0)(2.0)² = 4 m. From 2.0 to 8.0 s it moves at 4.0 m/s: 24 m. From 8.0 to 10.0 s the 480 N reading gives a = (480 − 600)/60 = −2.0 m/s², slowing it from 4.0 m/s to rest: average 2.0 m/s × 2.0 s = 4 m. Total 32 m. 24 m counts only the constant-speed part; 40 m assumes 4.0 m/s for all 10 s; 28 m leaves out one of the 4 m segments.',
  },
  // --- Set: block on a table and hanging block (phys1-s008) ---
  {
    id: 'phys1-s008-q1',
    stimulusId: 'phys1-s008',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'medium',
    stem: 'What is the magnitude of the acceleration of the blocks?',
    options: [
      '4.0 m/s²',
      '5.0 m/s²',
      '8.0 m/s²',
      '10 m/s²',
    ],
    correctIndex: 0,
    explanation:
      'Treat A and B as one 6.0 kg system along the string. Driving force: B’s weight, 30 N. Opposing force: kinetic friction on A, μk m_A g = (0.20)(30) = 6.0 N. a = (30 − 6.0)/6.0 = 4.0 m/s². 5.0 m/s² ignores friction; 8.0 m/s² divides the 24 N net force by A’s mass only; 10 m/s² is free fall, ignoring that B must drag A.',
  },
  {
    id: 'phys1-s008-q2',
    stimulusId: 'phys1-s008',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'hard',
    stem: 'What is the tension in the string while the blocks move?',
    options: [
      '18 N',
      '30 N',
      '12 N',
      '24 N',
    ],
    correctIndex: 0,
    explanation:
      'For B alone: m_B g − T = m_B a, so T = (3.0)(10 − 4.0) = 18 N. Check with A: T − f = (18 − 6.0) = 12 N = (3.0)(4.0). 30 N assumes the tension equals B’s weight, which would leave B unaccelerated; 12 N is A’s net force, m_A a, which forgets that the string must also overcome friction; 24 N is the net force on the whole system.',
  },
  // --- Set: friction versus applied force (phys1-s009) ---
  {
    id: 'phys1-s009-q1',
    stimulusId: 'phys1-s009',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'easy',
    stem: 'According to the graph, what is the friction force on the crate when the student pushes with 30 N?',
    options: ['30 N', '60 N', '40 N', '0 N'],
    correctIndex: 0,
    explanation:
      'While the crate is at rest, static friction matches the push exactly (net force zero), so a 30 N push meets 30 N of friction, as the graph shows. 60 N is the maximum static friction, reached only just before slipping; 40 N is the kinetic friction once the crate slides; 0 N would leave the 30 N push unbalanced.',
  },
  {
    id: 'phys1-s009-q2',
    stimulusId: 'phys1-s009',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'medium',
    stem: 'What are the coefficients of static and kinetic friction between the crate and the floor?',
    options: ['μs = 0.60 and μk = 0.40', 'μs = 0.40 and μk = 0.60', 'μs = 0.60 and μk = 0.60', 'μs = 6.0 and μk = 4.0'],
    correctIndex: 0,
    explanation:
      'On level ground with a horizontal push, N = mg = 100 N. Maximum static friction is 60 N, so μs = 60/100 = 0.60; sliding friction is 40 N, so μk = 40/100 = 0.40. Swapping them contradicts the graph (static friction peaks higher); using 0.60 for both ignores the drop when sliding starts; 6.0 and 4.0 divide by the mass in kilograms instead of the normal force.',
  },
  {
    id: 'phys1-s009-q3',
    stimulusId: 'phys1-s009',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'hard',
    stem: 'What is the crate’s acceleration at the moment the push reaches 80 N?',
    options: ['4.0 m/s²', '2.0 m/s²', '8.0 m/s²', '0 m/s²'],
    correctIndex: 0,
    explanation:
      'The crate is sliding, so friction is the kinetic 40 N: a = (80 − 40)/10 = 4.0 m/s². 2.0 m/s² subtracts the 60 N static maximum, which no longer applies once the crate moves; 8.0 m/s² ignores friction; 0 m/s² assumes friction always matches the push, which is true only while the crate is at rest.',
  },
  // --- Set: car over a hill (phys1-s010) ---
  {
    id: 'phys1-s010-q1',
    stimulusId: 'phys1-s010',
    unit: 'unit-2',
    topicSlug: 'centripetal-force',
    difficulty: 'medium',
    stem: 'What is the magnitude of the normal force on the car at the lowest point of the dip?',
    options: [
      '14 500 N',
      '10 000 N',
      '5500 N',
      '4500 N',
    ],
    correctIndex: 0,
    explanation:
      'At the lowest point the center of the circle is above the car, so the net force points up with size mv²/r = (1000)(15²)/50 = 4500 N. Then N − mg = 4500 N, so N = 10 000 + 4500 = 14 500 N. 10 000 N ignores the circular motion; 5500 N uses the hilltop relation N = mg − mv²/r; 4500 N is the net (centripetal) force, not the normal force.',
  },
  {
    id: 'phys1-s010-q2',
    stimulusId: 'phys1-s010',
    unit: 'unit-2',
    topicSlug: 'centripetal-force',
    difficulty: 'hard',
    stem: 'At what speed would the car have to pass through the lowest point for the normal force on it to equal twice its weight?',
    options: [
      '22 m/s',
      '32 m/s',
      '30 m/s',
      '16 m/s',
    ],
    correctIndex: 0,
    explanation:
      'N = 2mg means N − mg = mg = mv²/r, so v = √(gr) = √(10 × 50) ≈ 22 m/s. 32 m/s is √(2gr), which would make N three times the weight; 30 m/s doubles the present speed, as if N were proportional to v; 16 m/s is √(gr/2).',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u2-001',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'easy',
    stem: 'In which situation is the net force on the object zero?',
    options: [
      'A car moves at a steady 25 m/s along a straight, level road.',
      'A car moves at a steady 25 m/s around a level, circular curve.',
      'A ball is at the highest point of its flight after a vertical toss.',
      'A stone has just been released from rest and is beginning to fall.',
    ],
    correctIndex: 0,
    explanation:
      'Zero net force means zero acceleration: constant speed in a constant direction. The car on the straight road qualifies. The car on the curve has constant speed but changing direction, so it accelerates toward the center. The ball at the top and the falling stone both have weight as their net force (a = g), even where the velocity is momentarily zero.',
  },
  {
    id: 'phys1-u2-002',
    unit: 'unit-2',
    topicSlug: 'newtons-third-law',
    difficulty: 'easy',
    stem: 'A strong magnet and a small iron nail are held near each other and attract. The magnet has 50 times the mass of the nail. How does the force the nail exerts on the magnet compare with the force the magnet exerts on the nail?',
    options: [
      'The two forces are equal in magnitude.',
      'The force on the magnet is 50 times greater.',
      'The force on the magnet is 50 times smaller.',
      'The force on the magnet is zero, because only magnets exert magnetic forces.',
    ],
    correctIndex: 0,
    explanation:
      'The two forces are a Newton’s third-law pair: equal in magnitude and opposite in direction, whatever the masses or which object "causes" the force. The masses affect the accelerations (the nail accelerates 50 times more), not the forces. The nail does pull on the magnet; an interaction always acts on both objects.',
  },
  {
    id: 'phys1-u2-003',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'easy',
    stem: 'Two horizontal forces act on a 2.0 kg puck on frictionless ice: 3.0 N toward the east and 4.0 N toward the north. What is the magnitude of the puck’s acceleration?',
    options: ['2.5 m/s²', '3.5 m/s²', '0.50 m/s²', '5.0 m/s²'],
    correctIndex: 0,
    explanation:
      'The forces are perpendicular, so the net force is √(3.0² + 4.0²) = 5.0 N and a = 5.0/2.0 = 2.5 m/s². 3.5 m/s² adds the magnitudes (7.0 N) as if the forces were parallel; 0.50 m/s² subtracts them; 5.0 m/s² is the net force in newtons, not divided by the mass.',
  },
  {
    id: 'phys1-u2-004',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'easy',
    stem: 'A box sits on a level conveyor belt that moves at a constant 2 m/s, and the box moves along with the belt without slipping. What is the friction force on the box?',
    options: [
      'There is none, because the box moves at constant velocity and needs no net force.',
      'Static friction points forward, because the belt must carry the box along.',
      'Kinetic friction points backward, because the box is moving across the floor.',
      'Static friction points backward, because the box tends to stay behind the belt.',
    ],
    correctIndex: 0,
    explanation:
      'The box has constant velocity, so the net force on it is zero. Vertically, gravity and the normal force cancel; horizontally there is no other force for friction to balance, so friction is zero. A moving object does not need a force to keep moving (Newton’s first law). Static friction would act only if the belt sped up or slowed down, and kinetic friction requires the box to slide relative to the belt, which it does not.',
  },
  {
    id: 'phys1-u2-005',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'easy',
    stem: 'A worker pushes a 20 kg crate across a level floor at a constant velocity with a horizontal force. The coefficient of kinetic friction between the crate and the floor is 0.30. How large is the worker’s push?',
    options: [
      '60 N',
      '6.0 N',
      '200 N',
      '140 N',
    ],
    correctIndex: 0,
    explanation:
      'Constant velocity means zero net force, so the push equals kinetic friction: f = μkN = (0.30)(200 N) = 60 N, with N = mg on a level floor. 6.0 N multiplies μk by the mass instead of the normal force; 200 N is the normal force (the weight), as if a push had to match the weight; 140 N subtracts friction from the weight, which mixes perpendicular forces.',
  },
  {
    id: 'phys1-u2-006',
    unit: 'unit-2',
    topicSlug: 'universal-gravitation',
    difficulty: 'medium',
    stem: 'Planet X has the same average density as Earth but half of Earth’s radius. Earth’s surface gravitational field is 10 N/kg. What is the gravitational field at the surface of planet X?',
    options: [
      '5.0 N/kg',
      '2.5 N/kg',
      '10 N/kg',
      '40 N/kg',
    ],
    correctIndex: 0,
    explanation:
      'With the same density, mass scales with volume: halving the radius divides the mass by 2³ = 8. Then g = GM/R² changes by (1/8)/(1/2)² = 1/2, giving 5.0 N/kg. (Equivalently g ∝ ρR.) 2.5 N/kg divides the mass by 8 but then uses g ∝ M/R instead of M/R²; 10 N/kg assumes equal density means equal g; 40 N/kg keeps Earth’s mass and applies only the 1/R² factor.',
  },
  {
    id: 'phys1-u2-007',
    unit: 'unit-2',
    topicSlug: 'universal-gravitation',
    difficulty: 'medium',
    stem: 'A planet has twice Earth’s mass and twice Earth’s radius. Earth’s surface gravitational field is 10 N/kg. What is the gravitational field at the surface of the planet?',
    options: ['5.0 N/kg', '10 N/kg', '20 N/kg', '2.5 N/kg'],
    correctIndex: 0,
    explanation:
      'g = GM/R². Doubling M doubles g, and doubling R divides it by 4, so g = 10 × 2/4 = 5.0 N/kg. 10 N/kg assumes the two changes cancel (treating g as M/R); 20 N/kg counts only the mass; 2.5 N/kg counts only the radius.',
  },
  {
    id: 'phys1-u2-008',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'medium',
    stem: 'A shopper pushes a 20 kg cart across a level, frictionless floor by pushing on its handle with a 50 N force directed 37° below the horizontal (sin 37° = 0.60, cos 37° = 0.80). What is the magnitude of the normal force from the floor on the cart?',
    options: [
      '230 N',
      '200 N',
      '170 N',
      '240 N',
    ],
    correctIndex: 0,
    explanation:
      'Vertically the cart does not accelerate, so N = mg + (downward component of the push) = 200 + (50)(0.60) = 230 N. 200 N ignores the push’s vertical component; 170 N subtracts it, as if the push were directed upward; 240 N uses the horizontal component (50 × 0.80 = 40 N) as the vertical one.',
  },
  {
    id: 'phys1-u2-009',
    unit: 'unit-2',
    topicSlug: 'inclined-planes',
    difficulty: 'medium',
    stem: 'A box slides down a rough ramp inclined at 37° above the horizontal (sin 37° = 0.60, cos 37° = 0.80) at a constant velocity. What is the coefficient of kinetic friction between the box and the ramp?',
    options: ['0.75', '0.60', '0.80', '1.33'],
    correctIndex: 0,
    explanation:
      'Constant velocity means zero net force along the ramp: μk mg cos θ = mg sin θ, so μk = tan θ = 0.60/0.80 = 0.75. 0.60 is sin θ alone; 0.80 is cos θ alone; 1.33 inverts the ratio (cos θ/sin θ).',
  },
  {
    id: 'phys1-u2-010',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'medium',
    stem: 'A student holds a 4.0 kg book at rest against a vertical wall by pushing horizontally on it with a 50 N force. The coefficient of static friction between the book and the wall is 0.90. What is the magnitude of the static friction force on the book?',
    options: ['40 N', '45 N', '50 N', '36 N'],
    correctIndex: 0,
    explanation:
      'The book is at rest, so vertically static friction balances its weight: f = mg = 40 N. The 50 N push sets the normal force (N = 50 N) and therefore the maximum possible friction, μsN = 45 N, but static friction is only as large as needed. 50 N is the push (the normal force), and 36 N multiplies μs by the weight instead of the normal force.',
  },
  {
    id: 'phys1-u2-011',
    unit: 'unit-2',
    topicSlug: 'centripetal-force',
    difficulty: 'medium',
    stem: 'A coin sits 0.20 m from the center of a horizontal turntable. The coefficient of static friction between the coin and the turntable is 0.50. What is the greatest speed the coin can have, moving in a circle with the turntable, without sliding?',
    options: [
      '1.0 m/s',
      '5.0 m/s',
      '0.32 m/s',
      '0.71 m/s',
    ],
    correctIndex: 0,
    explanation:
      'Static friction supplies the centripetal force, up to μs mg: μs mg = mv²/r, so v = √(μs g r) = √(0.50 × 10 × 0.20) = √1.0 = 1.0 m/s. 5.0 m/s divides by r instead of multiplying (√(μs g/r)); 0.32 m/s leaves out g (√(μs r)); 0.71 m/s divides by 2 inside the root.',
  },
  {
    id: 'phys1-u2-012',
    unit: 'unit-2',
    topicSlug: 'universal-gravitation',
    difficulty: 'medium',
    stem: 'Two small spheres attract each other gravitationally with force F. The mass of each sphere is doubled, and the distance between their centers is also doubled. What is the new gravitational force between them?',
    options: ['F', '2F', '4F', 'F/2'],
    correctIndex: 0,
    explanation:
      'F = Gm₁m₂/r². Doubling both masses multiplies the force by 2 × 2 = 4; doubling r divides it by 2² = 4. The net factor is 1, so the force is still F. 2F counts only one mass doubling; 4F ignores the distance; F/2 treats the force as inversely proportional to r.',
  },
  {
    id: 'phys1-u2-013',
    unit: 'unit-2',
    topicSlug: 'universal-gravitation',
    difficulty: 'medium',
    stem: 'An astronaut wakes up in a closed, windowless cabin. She feels pressed to the floor exactly as she would on Earth, and a ball she releases falls to the floor with an acceleration of 10 m/s². Which conclusion is justified by these observations alone?',
    options: [
      'The cabin may be at rest on Earth or accelerating at 10 m/s² far from any planet; she has no way to tell which.',
      'The cabin must be at rest on Earth, because only a gravitational field makes a released ball fall.',
      'The cabin must be accelerating far from any planet, because she feels pressed to the floor.',
      'The cabin may be at rest on Earth or moving at a constant 10 m/s far from any planet; she cannot tell which.',
    ],
    correctIndex: 0,
    explanation:
      'By the equivalence principle, a uniform gravitational field and an acceleration of the same size in the opposite direction produce the same effects inside a closed frame, so no local experiment can distinguish them. A released ball also "falls" in an accelerating cabin (the floor rises toward it), so gravity is not required. Feeling pressed to the floor happens in both cases. A cabin moving at CONSTANT velocity in deep space would produce weightlessness, not a falling ball.',
  },
  {
    id: 'phys1-u2-014',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'hard',
    stem: 'A child pulls a 6.0 kg sled across level snow with a rope at 37° above the horizontal (sin 37° = 0.60, cos 37° = 0.80). The rope tension is 40 N and the coefficient of kinetic friction is 0.25. What is the magnitude of the sled’s acceleration?',
    options: [
      '3.8 m/s²',
      '2.8 m/s²',
      '5.3 m/s²',
      '1.8 m/s²',
    ],
    correctIndex: 0,
    explanation:
      'Vertically, N + T sin 37° = mg, so N = 60 − 24 = 36 N and kinetic friction is (0.25)(36) = 9.0 N. Horizontally, a = (T cos 37° − f)/m = (32 − 9.0)/6.0 ≈ 3.8 m/s². 2.8 m/s² takes N = mg = 60 N (friction 15 N), ignoring the rope’s upward pull; 5.3 m/s² ignores friction; 1.8 m/s² adds the rope’s vertical component to the weight (N = 84 N, friction 21 N), a sign error.',
  },
  {
    id: 'phys1-u2-015',
    unit: 'unit-2',
    topicSlug: 'centripetal-force',
    difficulty: 'hard',
    stem: 'A car rounds a frictionless banked curve at exactly the speed for which no friction is needed. How does the magnitude of the normal force on the car compare with the car’s weight mg?',
    options: [
      'It is greater than mg, because its vertical component alone must balance the weight.',
      'It is less than mg, because only a component of the weight presses into the road.',
      'It is equal to mg, because the car does not accelerate in the vertical direction.',
      'It is less than mg, because part of the normal force is used to turn the car.',
    ],
    correctIndex: 0,
    explanation:
      'The car accelerates horizontally toward the center, not along the road surface, so the normal force is tilted: its vertical component N cos θ equals mg, and its horizontal component N sin θ supplies the centripetal force. N = mg/cos θ > mg. "Less than mg" carries over the inclined-plane result N = mg cos θ, which holds only when the acceleration is along the incline. "Equal to mg" forgets that only the vertical component of N balances the weight.',
  },
  {
    id: 'phys1-u2-016',
    unit: 'unit-2',
    topicSlug: 'universal-gravitation',
    difficulty: 'hard',
    stem: 'Astronomers measure the orbital period T and orbital radius r of several moons of the same planet, all in nearly circular orbits. A graph of T² versus r³ for the moons is a straight line through the origin. What can be determined from the slope of this line?',
    options: [
      'The mass of the planet',
      'The mass of each moon',
      'The radius of the planet',
      'The density of each moon',
    ],
    correctIndex: 0,
    explanation:
      'Setting gravity equal to the centripetal force, GMm/r² = m(2π/T)²r, gives T² = (4π²/GM)r³. The moon’s mass m cancels, so the slope 4π²/GM depends only on the planet’s mass M. The moons’ masses and densities do not affect their orbits, and the planet’s radius does not appear in the relation.',
  },
  {
    id: 'phys1-u2-017',
    unit: 'unit-2',
    topicSlug: 'universal-gravitation',
    difficulty: 'hard',
    stem: 'Satellite A, of mass m, moves in a circular orbit of radius r around a planet at speed v. Satellite B, of mass 2m, moves in a circular orbit of radius 2r around the same planet. What is the orbital speed of satellite B?',
    options: ['v/√2', 'v/2', 'v√2', 'v'],
    correctIndex: 0,
    explanation:
      'Setting gravity equal to the centripetal force, GMm/r² = mv²/r, gives v = √(GM/r): the satellite’s own mass cancels and v ∝ 1/√r. Doubling r gives v/√2. v/2 treats v as inversely proportional to r; v√2 has the dependence upside down; v assumes the doubled mass and doubled radius cancel, but the satellite’s mass does not affect its orbital speed at all.',
  },
  {
    id: 'phys1-u2-018',
    unit: 'unit-2',
    topicSlug: 'centripetal-force',
    difficulty: 'hard',
    stem: 'A 0.50 kg ball on a 0.80 m string is swung in a vertical circle. At the lowest point of the circle the ball moves at 4.0 m/s. What is the tension in the string at that point?',
    options: ['15 N', '10 N', '5.0 N', '7.5 N'],
    correctIndex: 0,
    explanation:
      'At the bottom the center is above the ball, so T − mg = mv²/r: T = 5.0 + (0.50)(4.0²)/0.80 = 5.0 + 10 = 15 N. 10 N is only the centripetal (net) force; 5.0 N is mv²/r − mg, the expression for the TOP of the circle; 7.5 N forgets to square v (mg + mv/r).',
  },
  {
    id: 'phys1-u2-019',
    unit: 'unit-2',
    topicSlug: 'newtons-third-law',
    difficulty: 'hard',
    stem: 'Two students pull on the opposite ends of a light rope. Each pulls with a force of 100 N, and the rope is at rest. What is the tension in the rope?',
    options: ['100 N', '200 N', '0 N', '50 N'],
    correctIndex: 0,
    explanation:
      'Look at one end: the student there pulls with 100 N, and the rope, being at rest, pulls back with 100 N. Tension is the force the rope exerts at any point, so it is 100 N. A wall replacing one student would do the same job. 200 N adds the two pulls, but they act on opposite ends and do not combine into one tension; 0 N is the NET force on the rope; 50 N splits one pull between the ends.',
  },
  {
    id: 'phys1-u2-020',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'hard',
    stem: 'A 2.0 kg block sits on top of a 3.0 kg block that rests on a frictionless floor. The coefficient of static friction between the two blocks is 0.50. A horizontal force F is applied to the lower block only. What is the largest F for which the blocks accelerate together without the top block slipping?',
    options: ['25 N', '10 N', '15 N', '50 N'],
    correctIndex: 0,
    explanation:
      'Static friction from the lower block is the only horizontal force on the top block, so the top block’s acceleration can be at most μs g = (0.50)(10) = 5.0 m/s². For both blocks to share that acceleration, F = (2.0 + 3.0)(5.0) = 25 N. 10 N is the maximum friction force itself (μs m_top g), which accelerates only the top block; 15 N uses only the lower block’s mass; 50 N treats the full system weight as the friction limit.',
  },
  {
    id: 'phys1-u2-021',
    unit: 'unit-2',
    topicSlug: 'newtons-third-law',
    difficulty: 'hard',
    stem: 'A book rests on a table. Earth pulls down on the book with its weight. According to Newton’s third law, what is the other force of this interaction pair?',
    options: [
      'The upward gravitational force exerted by the book on Earth',
      'The upward normal force exerted by the table on the book',
      'The downward force exerted by the book on the table',
      'The upward force of the floor on the table’s legs',
    ],
    correctIndex: 0,
    explanation:
      'A third-law pair is the two forces of ONE interaction, acting on the two objects involved, of the same type. Earth pulls the book by gravity, so the partner is the book pulling Earth by gravity, upward on Earth. The table’s normal force on the book is equal in size here but belongs to a different interaction (book-table contact) and acts on the same object, the book; the book pushing on the table is the partner of the normal force; the floor-table force involves neither the book nor Earth’s pull.',
  },
  {
    id: 'phys1-u2-022',
    unit: 'unit-2',
    topicSlug: 'friction',
    difficulty: 'medium',
    stem: 'A person starts walking forward from rest on a level floor, and the shoes do not slip. What is the direction of the friction force exerted by the floor on the person’s shoe?',
    options: [
      'Forward, because the shoe pushes backward on the floor',
      'Backward, because friction always opposes the person’s motion',
      'Backward, because the shoe slides forward across the floor',
      'There is no friction, because the shoe does not slide on the floor',
    ],
    correctIndex: 0,
    explanation:
      'To speed up forward the person needs a forward external force, and the only horizontal one is static friction from the floor. The foot pushes backward on the floor, and by Newton’s third law the floor pushes forward on the foot. Friction opposes the relative SLIPPING the surfaces would have, not the person’s motion; the shoe does not slide; and static friction acts without any sliding.',
  },
  {
    id: 'phys1-u2-023',
    unit: 'unit-2',
    topicSlug: 'centripetal-force',
    difficulty: 'medium',
    stem: 'A rider sits on a scale on a Ferris wheel that turns at constant speed in a vertical circle. Where in the circle does the scale show its greatest reading?',
    options: [
      'At the bottom, where the normal force has to exceed the rider’s weight',
      'At the top, where the rider is farthest from the center of Earth',
      'At the top, where the net force on the rider points downward',
      'The reading is the same everywhere, because the speed is constant',
    ],
    correctIndex: 0,
    explanation:
      'The net force must point toward the center of the circle, with constant magnitude mv²/r. At the bottom the center is above the rider, so N − mg = mv²/r and N = mg + mv²/r, the largest value. At the top the center is below, so N = mg − mv²/r, the smallest. The few meters of extra height change gravity negligibly; a downward net force means a SMALLER normal force; and constant speed does not mean constant normal force, because the direction of the needed net force changes.',
  },
]
