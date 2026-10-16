/**
 * AP Physics 1 diagnostic v2 — Unit 3: Work, Energy, and Power (CED 2024
 * topics 3.1–3.5). Power is only a rate of energy change (no efficiency or
 * horsepower content, 3.5). Energy conservation uses system language as the
 * CED does. g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

const bar = (x: number, units: number) =>
  units > 0
    ? `<rect x="${x}" y="${190 - 25 * units}" width="26" height="${25 * units}" fill="currentColor" fill-opacity="0.35"/>`
    : `<line x1="${x}" y1="190" x2="${x + 26}" y2="190" stroke-width="3"/>`
const grid = (x0: number) =>
  [1, 2, 3, 4, 5, 6].map((u) => `<line x1="${x0}" y1="${190 - 25 * u}" x2="${x0 + 160}" y2="${190 - 25 * u}" stroke-width="0.6" stroke-dasharray="3 3"/>`).join('')
const labels = (x0: number) =>
  ['K', 'Ug', 'Us', 'ΔEint']
    .map((t, i) => `<text x="${x0 + 13 + 40 * i}" y="206" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">${t}</text>`)
    .join('')

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s011',
    title: 'Energy bar charts for a block and a spring',
    kind: 'figure',
    content:
      'A 0.50 kg block is released from rest on a rough incline. It slides down, hits a spring at the bottom and compresses it. State 1 is the moment of release; state 2 is the moment of maximum compression, when the block is momentarily at rest. The system is the block, Earth, the spring and the incline surface. Gravitational potential energy is defined as zero at the block’s position in state 2. The bar charts show, for each state, the kinetic energy K, the gravitational potential energy Ug, the spring potential energy Us and the increase in internal (thermal) energy ΔEint since state 1. Each grid division represents the same amount of energy. State 1: K = 0, Ug = 6 divisions, Us = 0, ΔEint = 0. State 2: K = 0, Ug = 0, Us = 5 divisions, ΔEint = 1 division.',
    svg:
      '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two energy bar charts. State 1: gravitational potential energy 6 divisions, all others zero. State 2: spring potential energy 5 divisions, internal energy increase 1 division, others zero." fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<text x="100" y="24" text-anchor="middle" font-size="13" fill="currentColor" stroke="none">State 1</text>' +
      '<text x="300" y="24" text-anchor="middle" font-size="13" fill="currentColor" stroke="none">State 2</text>' +
      grid(20) +
      grid(220) +
      '<line x1="20" y1="190" x2="180" y2="190" stroke-width="2"/>' +
      '<line x1="220" y1="190" x2="380" y2="190" stroke-width="2"/>' +
      bar(27, 0) + bar(67, 6) + bar(107, 0) + bar(147, 0) +
      bar(227, 0) + bar(267, 0) + bar(307, 5) + bar(347, 1) +
      labels(27) +
      labels(227) +
      '</svg>',
  },
  {
    id: 'phys1-s012',
    title: 'Braking force on a cart versus position',
    kind: 'graph',
    content:
      'A 2.0 kg cart rolls along a level track and passes x = 0 moving at 6.0 m/s in the +x direction. From x = 0 on, a magnetic brake exerts a force on the cart directed opposite its motion, with the magnitude shown in the graph as a function of position: it rises steadily from 0 to 8.0 N over the first 4.0 m and stays at 8.0 N beyond that, for as long as the cart keeps moving. No other horizontal forces act on the cart.',
    chart: {
      title: 'Figure 4. Magnitude of the braking force versus position',
      kind: 'line',
      xLabel: 'Position x',
      xUnit: 'm',
      yLabel: 'Braking force',
      yUnit: 'N',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      yValues: [0, 2, 4, 6, 8, 8, 8, 8, 8],
      seriesLabel: 'Braking force',
    },
  },
  {
    id: 'phys1-s013',
    title: 'Spring launcher experiment',
    kind: 'table',
    content:
      'Students use a vertical spring launcher to fire a 0.050 kg ball straight up. For each trial they compress the spring by a distance x, release it, and measure the maximum height h the ball rises above its release point. Air resistance and the spring’s own mass are negligible, and the ball leaves the spring at the release point. Use g = 10 m/s².\n\n| Compression x (m) | Maximum height h (m) |\n|---|---|\n| 0.010 | 0.20 |\n| 0.020 | 0.80 |\n| 0.030 | 1.80 |\n| 0.040 | 3.20 |',
  },
  {
    id: 'phys1-s014',
    title: 'A coaster car on a track',
    kind: 'figure',
    content:
      'A 400 kg roller-coaster car starts from rest at point A, 45 m above the ground, and coasts along the track shown. Point B is at ground level and point C is the top of a hill 25 m above the ground. Unless a question says otherwise, friction and air resistance are negligible. Use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Roller-coaster track starting at point A 45 m high, dropping to point B at ground level, rising to point C 25 m high, then descending" fill="none" stroke="currentColor" stroke-width="2">' +
      '<line x1="10" y1="200" x2="370" y2="200" stroke-width="1"/>' +
      '<path d="M20 20 L45 20 C 100 20, 110 200, 150 200 C 190 200, 220 100, 260 100 C 300 100, 320 170, 360 170"/>' +
      '<rect x="28" y="8" width="20" height="10" fill="currentColor"/>' +
      '<text x="38" y="40" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">A (45 m)</text>' +
      '<text x="150" y="217" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">B (0 m)</text>' +
      '<text x="260" y="90" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">C (25 m)</text>' +
      '</svg>',
  },
  {
    id: 'phys1-s015',
    title: 'A motor lifting loads',
    kind: 'table',
    content:
      'An electric motor lifts loads straight up at constant speed. For each trial, students record the load’s mass, the height it is lifted and the time the lift takes. Use g = 10 m/s².\n\n| Trial | Mass (kg) | Height lifted (m) | Time (s) |\n|---|---|---|---|\n| 1 | 20 | 3.0 | 4.0 |\n| 2 | 40 | 3.0 | 6.0 |\n| 3 | 30 | 6.0 | 12 |\n| 4 | 50 | 2.0 | 8.0 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: energy bar charts (phys1-s011) ---
  {
    id: 'phys1-s011-q1',
    stimulusId: 'phys1-s011',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'easy',
    stem: 'Which claim is best supported by the bar charts?',
    options: [
      'Friction between the block and the incline converted some of the system’s energy into internal energy.',
      'The total energy of the system decreased by one division between state 1 and state 2.',
      'The incline is frictionless, because the block is at rest in both states.',
      'The spring gained all of the gravitational potential energy the system lost.',
    ],
    correctIndex: 0,
    explanation:
      'The system lost 6 divisions of Ug and gained 5 of Us plus 1 of internal energy, so its total stays 6 divisions: one division was turned into thermal energy, which on a rough incline is the work of kinetic friction inside the system. The total did NOT decrease (it is conserved for this system); being at rest in both states says nothing about friction; and the spring got only 5 of the 6 divisions.',
  },
  {
    id: 'phys1-s011-q2',
    stimulusId: 'phys1-s011',
    unit: 'unit-3',
    topicSlug: 'gravitational-potential-energy',
    difficulty: 'medium',
    stem: 'Each grid division represents 2.0 J. Through what vertical height did the block descend between state 1 and state 2?',
    options: ['2.4 m', '2.0 m', '24 m', '1.2 m'],
    correctIndex: 0,
    explanation:
      'Ug in state 1 is 6 × 2.0 J = 12 J, measured from the state-2 position, so mgh = 12 J and h = 12/(0.50 × 10) = 2.4 m. 2.0 m uses the spring’s 10 J instead of the gravitational energy; 24 m leaves out g (12/0.50); 1.2 m halves the energy as if Ug were ½mgh.',
  },
  {
    id: 'phys1-s011-q3',
    stimulusId: 'phys1-s011',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'hard',
    stem: 'Each grid division represents 2.0 J, and the spring’s maximum compression is 0.20 m. What is the spring constant?',
    options: ['500 N/m', '600 N/m', '250 N/m', '50 N/m'],
    correctIndex: 0,
    explanation:
      'In state 2 the spring stores 5 × 2.0 = 10 J, so ½k(0.20)² = 10 J and k = 2(10)/0.040 = 500 N/m. 600 N/m uses all 12 J, ignoring the 2 J that went to internal energy; 250 N/m drops the ½ (kx² = 10); 50 N/m divides the energy by the compression once (as if U = kx).',
  },
  // --- Set: force versus position (phys1-s012) ---
  {
    id: 'phys1-s012-q1',
    stimulusId: 'phys1-s012',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'easy',
    stem: 'How much work does the braking force do on the cart from x = 0 to x = 4.0 m?',
    options: [
      '−16 J',
      '−32 J',
      '−8.0 J',
      '+16 J',
    ],
    correctIndex: 0,
    explanation:
      'The work is the area under the force-position graph, with a negative sign because the force opposes the displacement: W = −½(4.0 m)(8.0 N) = −16 J. −32 J uses a rectangle (8.0 N × 4.0 m) and drops the ½; −8.0 J reads the force value as the work; +16 J has the right size but the wrong sign for a force opposite the motion.',
  },
  {
    id: 'phys1-s012-q2',
    stimulusId: 'phys1-s012',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'medium',
    stem: 'What is the kinetic energy of the cart when it reaches the 4.0 m mark?',
    options: [
      '20 J',
      '16 J',
      '36 J',
      '52 J',
    ],
    correctIndex: 0,
    explanation:
      'The cart starts with K = ½(2.0)(6.0)² = 36 J. The brake does −16 J of work over the first 4.0 m (the triangle’s area), so by the work-energy theorem K = 36 − 16 = 20 J. 16 J is the work done, not the energy left; 36 J ignores the brake; 52 J adds the brake’s work, a sign error.',
  },
  {
    id: 'phys1-s012-q3',
    stimulusId: 'phys1-s012',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'hard',
    stem: 'At what position does the cart come to rest?',
    options: [
      'x = 6.5 m',
      'x = 4.5 m',
      'x = 8.5 m',
      'x = 8.0 m',
    ],
    correctIndex: 0,
    explanation:
      'At x = 4.0 m the cart still has 20 J. Beyond that the force is a constant 8.0 N, which removes 8.0 J per meter, so the cart stops 20/8.0 = 2.5 m later, at x = 6.5 m. 4.5 m divides the full 36 J by 8.0 N, as if the force were 8.0 N from the start; 8.5 m adds 36/8.0 to 4.0 m without subtracting the 16 J already removed; 8.0 m is just the end of the graph.',
  },
  // --- Set: spring launcher data (phys1-s013) ---
  {
    id: 'phys1-s013-q1',
    stimulusId: 'phys1-s013',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'medium',
    stem: 'The students want to plot a graph of their data that is a straight line through the origin. Which quantities should they plot?',
    options: ['h versus x²', 'h versus x', 'h versus √x', 'h² versus x'],
    correctIndex: 0,
    explanation:
      'Doubling x (0.010 → 0.020 m) multiplies h by 4 (0.20 → 0.80 m), and tripling x multiplies h by 9, so h ∝ x². This matches energy conservation: ½kx² = mgh gives h = (k/2mg)x², so h versus x² is a straight line through the origin with slope k/(2mg). h versus x curves upward; h versus √x curves even more; h² versus x would need h ∝ √x.',
  },
  {
    id: 'phys1-s013-q2',
    stimulusId: 'phys1-s013',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'hard',
    stem: 'Based on the data, what is the spring constant of the launcher’s spring?',
    options: ['2000 N/m', '1000 N/m', '50 N/m', '20 N/m'],
    correctIndex: 0,
    explanation:
      'All the spring energy becomes gravitational energy at the top: ½kx² = mgh, so k = 2mgh/x². Using the first row: k = 2(0.050)(10)(0.20)/(0.010)² = 0.20/1.0 × 10⁻⁴ = 2000 N/m (every row gives the same value). 1000 N/m drops the ½; 50 N/m uses kx = mg, a force balance that does not apply to a launch; 20 N/m divides by x instead of x².',
  },
  {
    id: 'phys1-s013-q3',
    stimulusId: 'phys1-s013',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'medium',
    stem: 'The students compress the spring by 0.050 m for one more trial. What maximum height should they predict?',
    options: ['5.0 m', '4.0 m', '1.0 m', '6.4 m'],
    correctIndex: 0,
    explanation:
      'Because h ∝ x², multiplying the 0.010 m compression by 5 multiplies 0.20 m by 25: h = 5.0 m (the row-to-row increases 0.60, 1.0, 1.4 also continue to 1.8 m, giving 3.2 + 1.8 = 5.0 m). 4.0 m scales the last row linearly (3.20 × 5/4); 1.0 m scales the first row linearly (0.20 × 5); 6.4 m simply doubles the last height.',
  },
  // --- Set: roller coaster (phys1-s014) ---
  {
    id: 'phys1-s014-q1',
    stimulusId: 'phys1-s014',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'easy',
    stem: 'What is the speed of the car at point B?',
    options: ['30 m/s', '21 m/s', '45 m/s', '15 m/s'],
    correctIndex: 0,
    explanation:
      'With no friction, the car-Earth system’s mechanical energy is constant: mg(45 m) = ½mv², so v = √(2 × 10 × 45) = √900 = 30 m/s. 21 m/s drops the 2 (√450); 45 m/s reads the height as a speed; 15 m/s halves the correct answer.',
  },
  {
    id: 'phys1-s014-q2',
    stimulusId: 'phys1-s014',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'medium',
    stem: 'What is the speed of the car at point C?',
    options: ['20 m/s', '22 m/s', '10 m/s', '25 m/s'],
    correctIndex: 0,
    explanation:
      'From A to C the car descends a net 45 − 25 = 20 m, so ½v² = g(20 m) and v = √400 = 20 m/s. 22 m/s uses C’s 25 m height as the drop (√500); 10 m/s subtracts the speeds as if speed fell linearly; 25 m/s reads C’s height as a speed.',
  },
  {
    id: 'phys1-s014-q3',
    stimulusId: 'phys1-s014',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'hard',
    stem: 'On a test run with friction present, the car reaches point C moving at only 10 m/s. How much mechanical energy was transformed into internal energy between A and C?',
    options: ['6.0 × 10⁴ J', '8.0 × 10⁴ J', '2.0 × 10⁴ J', '1.0 × 10⁵ J'],
    correctIndex: 0,
    explanation:
      'The system lost mg(20 m) = (400)(10)(20) = 8.0 × 10⁴ J of gravitational energy but kept ½(400)(10²) = 2.0 × 10⁴ J as kinetic energy, so 8.0 × 10⁴ − 2.0 × 10⁴ = 6.0 × 10⁴ J became internal energy. 8.0 × 10⁴ J forgets the car is still moving; 2.0 × 10⁴ J is the kinetic energy at C; 1.0 × 10⁵ J adds the two instead of subtracting.',
  },
  // --- Set: motor power (phys1-s015) ---
  {
    id: 'phys1-s015-q1',
    stimulusId: 'phys1-s015',
    unit: 'unit-3',
    topicSlug: 'power-physics',
    difficulty: 'medium',
    stem: 'In which trial did the motor deliver energy to the load at the greatest average rate?',
    options: ['Trial 2', 'Trial 1', 'Trial 3', 'Trial 4'],
    correctIndex: 0,
    explanation:
      'Average power is the work done (mgh) divided by the time. Trial 1: 600 J/4.0 s = 150 W. Trial 2: 1200 J/6.0 s = 200 W. Trial 3: 1800 J/12 s = 150 W. Trial 4: 1000 J/8.0 s = 125 W. Trial 1 has the shortest time, trial 3 the most work and trial 4 the heaviest load, but none of those alone sets the rate.',
  },
  {
    id: 'phys1-s015-q2',
    stimulusId: 'phys1-s015',
    unit: 'unit-3',
    topicSlug: 'power-physics',
    difficulty: 'hard',
    stem: 'The motor lifts the trial 3 load again, still at constant speed, but now at 1.5 m/s. What power must the motor deliver to the load?',
    options: ['450 W', '150 W', '200 W', '45 W'],
    correctIndex: 0,
    explanation:
      'At constant speed the motor’s force equals the load’s weight, 300 N, and the power is P = Fv = (300 N)(1.5 m/s) = 450 W (three times the 0.50 m/s of trial 3, so three times its 150 W). 150 W assumes the same work means the same power, ignoring the shorter time; 200 W divides the force by the speed; 45 W multiplies the mass, not the weight, by the speed.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u3-001',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'easy',
    stem: 'A traveler pulls a suitcase 20 m along a level floor with a constant 50 N force directed 60° above the horizontal (cos 60° = 0.50, sin 60° = 0.87). How much work does this force do on the suitcase?',
    options: ['500 J', '1000 J', '870 J', '0 J'],
    correctIndex: 0,
    explanation:
      'Only the force component along the displacement does work: W = Fd cos θ = (50)(20)(0.50) = 500 J. 1000 J ignores the angle; 870 J uses sin 60° (the vertical component, which is perpendicular to the motion); 0 J assumes an angled force does no work.',
  },
  {
    id: 'phys1-u3-002',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'easy',
    stem: 'A box slides 3.0 m down a rough incline. How much work does the normal force from the incline do on the box?',
    options: [
      'Zero, because the normal force is perpendicular to the box’s displacement',
      'Positive, because the normal force pushes the box away from the incline surface',
      'Negative, because the normal force acts opposite to the box’s weight component',
      'Negative, because the incline is rough and the box loses mechanical energy',
    ],
    correctIndex: 0,
    explanation:
      'W = Fd cos θ and the normal force is at 90° to the displacement along the incline, so it does zero work regardless of friction. The normal force does push away from the surface, but the box does not move in that direction. It is kinetic FRICTION, not the normal force, that does the negative work on a rough incline.',
  },
  {
    id: 'phys1-u3-003',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'easy',
    stem: 'Car A has half the mass of car B and moves at twice car B’s speed. What is the ratio of car A’s kinetic energy to car B’s kinetic energy?',
    options: ['2', '1', '4', '1/2'],
    correctIndex: 0,
    explanation:
      'K = ½mv². Halving the mass halves K, and doubling the speed multiplies K by 2² = 4, so K_A/K_B = ½ × 4 = 2. 1 assumes the two changes cancel (treating K as proportional to mv); 4 counts only the speed; 1/2 counts only the mass.',
  },
  {
    id: 'phys1-u3-004',
    unit: 'unit-3',
    topicSlug: 'gravitational-potential-energy',
    difficulty: 'easy',
    stem: 'A 60 kg hiker climbs from a trailhead at 1200 m elevation to a summit at 1500 m elevation by a winding trail 2.0 km long. What is the change in the gravitational potential energy of the hiker-Earth system?',
    options: ['1.8 × 10⁵ J', '1.2 × 10⁶ J', '9.0 × 10⁵ J', '1.8 × 10⁴ J'],
    correctIndex: 0,
    explanation:
      'ΔUg = mgΔy depends only on the change in height, not the path: (60)(10)(300 m) = 1.8 × 10⁵ J. 1.2 × 10⁶ J uses the 2.0 km trail length; 9.0 × 10⁵ J uses the summit elevation (1500 m) instead of the change; 1.8 × 10⁴ J leaves out g.',
  },
  {
    id: 'phys1-u3-005',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'easy',
    stem: 'A trampoline surface acts like a spring with spring constant 5000 N/m. A gymnast presses it down 0.30 m. How much elastic potential energy does it store at that moment?',
    options: [
      '225 J',
      '450 J',
      '750 J',
      '1500 J',
    ],
    correctIndex: 0,
    explanation:
      'Us = ½kx² = ½(5000)(0.30)² = ½(5000)(0.090) = 225 J. 450 J drops the ½; 750 J forgets to square x (½kx); 1500 J is kx, the spring force in newtons, not an energy.',
  },
  {
    id: 'phys1-u3-006',
    unit: 'unit-3',
    topicSlug: 'power-physics',
    difficulty: 'easy',
    stem: 'An escalator carries 20 people, each of mass 60 kg, up a vertical height of 8.0 m every minute at constant speed. At what average rate does it increase the gravitational potential energy of the people-Earth system?',
    options: [
      '1600 W',
      '96 000 W',
      '80 W',
      '160 W',
    ],
    correctIndex: 0,
    explanation:
      'Each minute the escalator raises 20 × 60 kg = 1200 kg through 8.0 m: ΔU = mgh = (1200)(10)(8.0) = 96 000 J per 60 s, so P = 96 000/60 = 1600 W. 96 000 W forgets to divide by the 60 s; 80 W counts only one person; 160 W leaves out g.',
  },
  {
    id: 'phys1-u3-007',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'medium',
    stem: 'A 2.0 kg block slides 4.0 m across a rough, level floor, and its speed drops from 6.0 m/s to 2.0 m/s. What is the coefficient of kinetic friction between the block and the floor?',
    options: [
      '0.40',
      '0.80',
      '0.10',
      '0.20',
    ],
    correctIndex: 0,
    explanation:
      'Friction’s work equals the change in kinetic energy: −μk mg d = ½m(v² − v₀²), so μk = (v₀² − v²)/(2gd) = (36 − 4.0)/(2 × 10 × 4.0) = 32/80 = 0.40. 0.80 drops the 2 in the denominator; 0.10 uses the change in speed squared ((6.0 − 2.0)² = 16) and an extra factor of 2; 0.20 uses (v₀ − v)² = 16 over 80.',
  },
  {
    id: 'phys1-u3-008',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'medium',
    stem: 'A spring with spring constant 800 N/m is compressed 0.10 m and then launches a 0.50 kg block across a level, frictionless surface. What is the block’s speed after it leaves the spring?',
    options: ['4.0 m/s', '16 m/s', '2.8 m/s', '5.7 m/s'],
    correctIndex: 0,
    explanation:
      'The spring’s energy ½kx² = ½(800)(0.10)² = 4.0 J becomes the block’s kinetic energy: ½(0.50)v² = 4.0, so v² = 16 and v = 4.0 m/s. 16 m/s reports v²; 2.8 m/s drops the ½ in the kinetic energy (mv² = 4.0); 5.7 m/s drops the ½ in the spring energy (kx² = ½mv²).',
  },
  {
    id: 'phys1-u3-009',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'medium',
    stem: 'A ball falls from rest with negligible air resistance. A graph of the ball’s kinetic energy versus the distance it has fallen is a straight line through the origin with a slope of 4.0 J/m. What is the mass of the ball?',
    options: ['0.40 kg', '4.0 kg', '40 kg', '0.80 kg'],
    correctIndex: 0,
    explanation:
      'Kinetic energy gained equals gravitational energy lost: K = mg·d, so the slope of K versus d is mg. mg = 4.0 N gives m = 4.0/10 = 0.40 kg. 4.0 kg reads the slope (a weight in newtons) as the mass; 40 kg multiplies by g instead of dividing; 0.80 kg treats the slope as ½mg (m = 2 × 4.0/10).',
  },
  {
    id: 'phys1-u3-010',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'medium',
    stem: 'A pendulum bob hangs from a 2.0 m string. It is pulled aside until the string makes a 60° angle with the vertical (cos 60° = 0.50, sin 60° = 0.87) and released from rest. Air resistance is negligible. What is the bob’s speed at the lowest point of the swing?',
    options: ['4.5 m/s', '6.3 m/s', '5.9 m/s', '3.2 m/s'],
    correctIndex: 0,
    explanation:
      'The bob starts L(1 − cos 60°) = 2.0(0.50) = 1.0 m above the lowest point, so v = √(2gh) = √20 ≈ 4.5 m/s. 6.3 m/s uses the full string length as the height (√40); 5.9 m/s uses L sin 60° = 1.7 m, the horizontal displacement, as the height; 3.2 m/s drops the 2 (√(gh)).',
  },
  {
    id: 'phys1-u3-011',
    unit: 'unit-3',
    topicSlug: 'power-physics',
    difficulty: 'medium',
    stem: 'A car moves along a level highway at a constant 25 m/s. The total resistive force from air and the road on the car is 600 N. At what rate must the engine deliver energy to keep the car moving at this speed?',
    options: ['15 000 W', '600 W', '24 W', '7500 W'],
    correctIndex: 0,
    explanation:
      'At constant speed the driving force equals the 600 N resistance, so P = Fv = (600 N)(25 m/s) = 15 000 W. 600 W confuses the force with the power; 24 W divides the force by the speed; 7500 W puts in a ½ as if this were a kinetic-energy formula.',
  },
  {
    id: 'phys1-u3-012',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'medium',
    stem: 'Two frictionless slides start at the same height and end at the same lower height. Slide 1 is a straight ramp; slide 2 dips steeply first and then levels out, so it is longer. Identical blocks start from rest at the top of each slide. Which statement correctly compares the blocks’ speeds at the bottom?',
    options: [
      'The speeds are equal, because each block descends through the same height.',
      'The block on slide 2 is faster, because it picks up speed earlier.',
      'The block on slide 1 is faster, because its path is shorter.',
      'The speeds are equal only if the two blocks take equal times to arrive.',
    ],
    correctIndex: 0,
    explanation:
      'Gravity is a conservative force and the normal force does no work, so each block’s kinetic energy at the bottom equals mgh for the same drop: equal speeds. Gaining speed earlier changes how long the trip takes, not the final speed; neither the shape nor the length of a frictionless path changes it; and the arrival times can differ (the block on slide 2 travels faster for most of its trip) without changing the equal final speeds.',
  },
  {
    id: 'phys1-u3-013',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'medium',
    stem: 'A 60 kg skier starts from rest and glides down a slope, descending a vertical height of 50 m. At the bottom she is moving at 25 m/s. How much work did friction and air resistance together do on her?',
    options: [
      '−1.1 × 10⁴ J',
      '−3.0 × 10⁴ J',
      '+1.9 × 10⁴ J',
      '−1.9 × 10⁴ J',
    ],
    correctIndex: 0,
    explanation:
      'Work-energy theorem: W_gravity + W_other = ΔK. W_gravity = mgh = (60)(10)(50) = 3.0 × 10⁴ J and ΔK = ½(60)(25²) = 1.875 × 10⁴ J, so W_other = 1.875 × 10⁴ − 3.0 × 10⁴ ≈ −1.1 × 10⁴ J. −3.0 × 10⁴ J is the negative of gravity’s work; ±1.9 × 10⁴ J is the kinetic energy at the bottom (with either sign), not the work of the resistive forces.',
  },
  {
    id: 'phys1-u3-014',
    unit: 'unit-3',
    topicSlug: 'gravitational-potential-energy',
    difficulty: 'medium',
    stem: 'A student carries a 2.0 kg ball up a 3.0 m staircase, walks 4.0 m across a landing, and then walks down 1.0 m of steps. How much work does the gravitational force do on the ball during the whole trip?',
    options: ['−40 J', '−60 J', '+40 J', '−160 J'],
    correctIndex: 0,
    explanation:
      'Gravity is conservative, so its work depends only on the net change in height: the ball ends 3.0 − 1.0 = 2.0 m higher, and W = −mgΔy = −(2.0)(10)(2.0) = −40 J. −60 J counts only the climb; +40 J has the right size but the wrong sign (gravity opposes the net rise); −160 J uses the total path length of 8.0 m.',
  },
  {
    id: 'phys1-u3-015',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'hard',
    stem: 'Block A has mass m and block B has mass 2m. They are launched across the same rough, level floor with equal kinetic energies, and the coefficient of kinetic friction is the same for both. How do their sliding distances compare?',
    options: [
      'A slides twice as far as B, because friction on A is half as large.',
      'They slide the same distance, because they start with the same energy.',
      'B slides twice as far as A, because B has more inertia to keep moving.',
      'A slides four times as far as B, because A’s speed is twice B’s speed.',
    ],
    correctIndex: 0,
    explanation:
      'Friction removes all the kinetic energy: μk mg d = K, so d = K/(μk mg). With equal K, the block with half the mass feels half the friction force and slides twice as far. Equal energy does not mean equal distance, because the stopping force differs. B’s greater mass makes the friction on it larger, not smaller. A’s speed is √2 times B’s, not 2 times, and the energy argument is the direct route anyway.',
  },
  {
    id: 'phys1-u3-016',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'hard',
    stem: 'A spring with spring constant 300 N/m is already stretched 0.20 m from its relaxed length. How much work must be done on the spring to stretch it slowly from 0.20 m to 0.40 m?',
    options: [
      '18 J',
      '6.0 J',
      '36 J',
      '12 J',
    ],
    correctIndex: 0,
    explanation:
      'The work equals the change in stored energy: ½k(0.40² − 0.20²) = ½(300)(0.16 − 0.040) = 18 J. 6.0 J uses ½k(Δx)², as if the spring started relaxed; 36 J drops the ½; 12 J multiplies the starting force (kx = 60 N) by the 0.20 m stretch, ignoring that the force keeps growing.',
  },
  {
    id: 'phys1-u3-017',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'hard',
    stem: 'A ball falls from rest, with negligible air resistance. Student 1 chooses the ball alone as the system; student 2 chooses the ball and Earth as the system. Which pair of descriptions is correct?',
    options: [
      'For the ball alone, gravity does positive work on it from outside; for the ball and Earth, no external work is done and Ug becomes K.',
      'For the ball alone, its own potential energy becomes K; for the ball and Earth, gravity does positive external work.',
      'For the ball alone, no work is done because the ball is in free fall; for the ball and Earth, Ug becomes K with no work done.',
      'For both systems, gravity does positive work from outside, and in both the total energy of the system increases.',
    ],
    correctIndex: 0,
    explanation:
      'A single object cannot have potential energy; potential energy belongs to the interacting pair. With the ball alone as the system, Earth is outside and gravity does positive work on the ball, increasing its K. With ball + Earth, gravity is internal, no external work is done, and the system’s Ug converts to K. The second option swaps these; "no work in free fall" ignores that gravity acts along the displacement; and the ball-Earth system’s total energy does not change.',
  },
  {
    id: 'phys1-u3-018',
    unit: 'unit-3',
    topicSlug: 'power-physics',
    difficulty: 'hard',
    stem: 'A winch pulls a 50 kg cart up a frictionless ramp inclined 30° above the horizontal (sin 30° = 0.50, cos 30° = 0.87) at a constant speed of 2.0 m/s, with the cable parallel to the ramp. At what rate does the winch do work on the cart?',
    options: ['500 W', '1000 W', '870 W', '250 W'],
    correctIndex: 0,
    explanation:
      'At constant speed the cable force balances the weight’s component along the ramp: F = mg sin 30° = (500)(0.50) = 250 N, so P = Fv = (250)(2.0) = 500 W. Equivalently, the cart rises at v sin 30° = 1.0 m/s, and mg × 1.0 m/s = 500 W. 1000 W uses the full weight (a vertical lift at 2.0 m/s); 870 W uses cos 30°; 250 W is the cable force, not the power.',
  },
  {
    id: 'phys1-u3-019',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'hard',
    stem: 'A constant net force acts on a cart that starts from rest on a level track. Which statement about the cart’s kinetic energy K is correct?',
    options: [
      'K is proportional to the distance traveled and to the square of the elapsed time.',
      'K is proportional to the elapsed time and to the square of the distance.',
      'K is proportional to both the distance traveled and the elapsed time.',
      'K is proportional to the square of both the elapsed time and the distance.',
    ],
    correctIndex: 0,
    explanation:
      'The work-energy theorem gives K = F_net·d, so K ∝ d. With constant acceleration from rest, v = at, so K = ½m(at)² ∝ t². (Consistently, d = ½at² ∝ t².) The other options mix up which variable is squared, or treat K as linear in time, which would require v ∝ √t.',
  },
  {
    id: 'phys1-u3-020',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'hard',
    stem: 'A worker lowers a heavy box straight down at constant speed by holding a rope attached to it. Which correctly describes the work done on the box during the descent?',
    options: [
      'Gravity does positive work, the rope does an equal amount of negative work, and the net work is zero.',
      'Gravity does positive work, the rope does no work, and the net work is equal to gravity’s work.',
      'Gravity does negative work, the rope does positive work, and the net work is zero.',
      'Both gravity and the rope do positive work, because both forces act on the moving box.',
    ],
    correctIndex: 0,
    explanation:
      'Gravity points down along the displacement (positive work); the rope pulls up, opposite the displacement (negative work). Constant speed means ΔK = 0, so by the work-energy theorem the net work is zero and the two works are equal in size. A force that opposes the motion still does work (negative); gravity’s work is positive when the box moves down; and the rope’s work cannot be positive while it pulls opposite the motion.',
  },
  {
    id: 'phys1-u3-021',
    unit: 'unit-3',
    topicSlug: 'elastic-potential-energy',
    difficulty: 'hard',
    stem: 'A block is pushed against a spring on a level surface, compressed a distance x, and released; it then slides across a rough floor until it stops. If the compression is doubled to 2x, how does the distance the block slides on the rough floor change? (Assume the spring region is frictionless.)',
    options: ['It becomes four times as far.', 'It becomes twice as far.', 'It stays the same.', 'It becomes √2 times as far.'],
    correctIndex: 0,
    explanation:
      'The spring energy ½kx² becomes kinetic energy, which friction then removes over distance d: μk mg d = ½kx². So d ∝ x², and doubling x multiplies d by 4. "Twice as far" treats the energy as proportional to x; √2 assumes d ∝ √x; "the same" ignores the energy change entirely.',
  },
  {
    id: 'phys1-u3-022',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'hard',
    stem: 'A worker drags a box across a level floor along a closed loop that ends where it started. How much total work does kinetic friction do on the box over the whole loop?',
    options: [
      'A negative amount that grows with the length of the loop',
      'Zero, because the box ends where it started, with zero displacement',
      'Zero, because friction does negative work going out and positive work coming back',
      'A positive amount, because the worker’s force and friction are always balanced',
    ],
    correctIndex: 0,
    explanation:
      'Kinetic friction always points opposite the box’s velocity, so on every segment it does negative work, −μk mg × (distance). Over the loop W = −μk mg × (total path length), which is not zero and grows with the path. This is what makes friction nonconservative. "Zero displacement means zero work" holds only for conservative forces; friction never does positive work on the sliding box; and balanced forces would make the net work zero, not friction’s work.',
  },
  {
    id: 'phys1-u3-023',
    unit: 'unit-3',
    topicSlug: 'power-physics',
    difficulty: 'hard',
    stem: 'A graph of a cart’s kinetic energy versus time is a straight line with a positive slope. The cart moves on a level track. Which statement is correct?',
    options: [
      'The net power on the cart is constant, so the net force decreases as it speeds up.',
      'The net force on the cart is constant, so its energy grows at a steady rate.',
      'The cart’s speed increases at a constant rate, so its acceleration is constant.',
      'The cart moves at a constant speed, because its energy changes at a steady rate.',
    ],
    correctIndex: 0,
    explanation:
      'The slope of K versus t is the rate of energy transfer, the net power, so the power is constant. Since P = F_net v, a constant P with increasing v means the net force (and acceleration) decreases. A constant net force from rest would give K ∝ t², a curve, not a line; constant acceleration is the same thing; and a cart at constant speed has constant K (zero slope).',
  },
  {
    id: 'phys1-u3-024',
    unit: 'unit-3',
    topicSlug: 'work-and-kinetic-energy',
    difficulty: 'medium',
    stem: 'A box is raised to a loading dock 1.0 m high at constant speed, either by lifting it straight up or by pushing it up a frictionless ramp. How do the two methods compare?',
    options: [
      'The work is the same, but the ramp needs a smaller force.',
      'The ramp needs less work, because the force applied is smaller.',
      'The ramp needs more work, because the box travels a longer distance.',
      'The work is the same, and the two methods need the same force as well.',
    ],
    correctIndex: 0,
    explanation:
      'Either way the work done on the box equals the increase in gravitational energy, mgh, because the speed stays constant and there is no friction. On the ramp the push only has to balance mg sin θ, a smaller force, applied over a proportionally longer distance (d = h/sin θ), so Fd = mgh again. A smaller force does not mean less work, a longer path does not mean more work, and the forces are not the same.',
  },
]
