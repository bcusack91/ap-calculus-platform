/**
 * AP Physics 1 diagnostic v2 — Unit 1: Kinematics (CED 2024 topics 1.1–1.5).
 * Relative velocity stays one-dimensional (1.4 boundary). g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s002',
    title: 'Velocity of a cart on a straight track',
    kind: 'graph',
    content:
      'A motion sensor records the velocity of a cart moving along a straight, level track for 8.0 s. Positive velocity means motion away from the sensor. The cart starts at the 0 m mark at t = 0. The graph shows velocity versus time; the cart’s velocity changes linearly between the plotted points.',
    chart: {
      title: 'Figure 1. Velocity of the cart versus time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 's',
      yLabel: 'Velocity',
      yUnit: 'm/s',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      yValues: [2, 4, 6, 6, 6, 4, 2, 0, -2],
      seriesLabel: 'Cart',
    },
  },
  {
    id: 'phys1-s003',
    title: 'Two runners on a straight path',
    kind: 'graph',
    content:
      'Runners P and Q start side by side at x = 0 at time t = 0 and run in the same direction along a straight path. The graph shows each runner’s position versus time. Runner P’s positions are labeled on the graph. Runner Q starts from rest; Q’s positions at t = 0, 1, 2, 3, 4 and 5 s are 0, 1, 4, 9, 16 and 25 m.',
    chart: {
      title: 'Figure 2. Position versus time for runners P and Q',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 's',
      yLabel: 'Position',
      yUnit: 'm',
      xValues: [0, 1, 2, 3, 4, 5],
      yValues: [0, 4, 8, 12, 16, 20],
      seriesLabel: 'Runner P',
      comparisonSeries: [{ label: 'Runner Q', yValues: [0, 1, 4, 9, 16, 25] }],
    },
  },
  {
    id: 'phys1-s004',
    title: 'A ball launched horizontally from a cliff',
    kind: 'figure',
    content:
      'A ball is launched horizontally with speed 15 m/s from the edge of a cliff 20 m above level ground, as shown. The dashed curve sketches the ball’s path to the ground. Air resistance is negligible; use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A ball at the top edge of a 20 m cliff is launched horizontally at 15 m/s; a dashed curve shows its path to the ground" fill="none" stroke="currentColor" stroke-width="2">' +
      '<defs><marker id="phys1-s004-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>' +
      '<polyline points="10,60 120,60 120,200 370,200"/>' +
      '<circle cx="120" cy="52" r="7" fill="currentColor"/>' +
      '<line x1="130" y1="40" x2="190" y2="40" marker-end="url(#phys1-s004-arrow)"/>' +
      '<text x="160" y="30" text-anchor="middle" font-size="13" fill="currentColor" stroke="none">15 m/s</text>' +
      '<path d="M127 52 Q 228 52 330 198" stroke-dasharray="6 5"/>' +
      '<line x1="60" y1="64" x2="60" y2="196" marker-end="url(#phys1-s004-arrow)" marker-start="url(#phys1-s004-arrow)" stroke-width="1.5"/>' +
      '<text x="52" y="135" text-anchor="end" font-size="13" fill="currentColor" stroke="none">20 m</text>' +
      '<text x="250" y="218" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">level ground</text>' +
      '</svg>',
  },
  {
    id: 'phys1-s005',
    title: 'Cart released on an incline',
    kind: 'table',
    content:
      'Students release a cart from rest at the top of a long, straight incline and use a motion sensor to record its distance x down the incline at equal time intervals.\n\n| Time t (s) | Distance x (m) |\n|---|---|\n| 0 | 0 |\n| 0.50 | 0.10 |\n| 1.00 | 0.40 |\n| 1.50 | 0.90 |\n| 2.00 | 1.60 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: velocity-time graph (phys1-s002) ---
  {
    id: 'phys1-s002-q1',
    stimulusId: 'phys1-s002',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'easy',
    stem: 'Based on the graph, what is the acceleration of the cart at t = 1.0 s?',
    options: ['2.0 m/s²', '4.0 m/s²', '0.50 m/s²', '6.0 m/s²'],
    correctIndex: 0,
    explanation:
      'Acceleration is the slope of the velocity-time graph. From t = 0 to 2 s the velocity rises from 2 m/s to 6 m/s: a = (6 − 2)/(2 − 0) = 2.0 m/s². 4.0 m/s² divides the velocity at 1 s by the time (v/t), ignoring the 2 m/s starting velocity; 0.50 m/s² inverts the slope (Δt/Δv); 6.0 m/s² reads the highest velocity as if it were the acceleration.',
  },
  {
    id: 'phys1-s002-q2',
    stimulusId: 'phys1-s002',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'medium',
    stem: 'How far from the 0 m mark is the cart at t = 4.0 s?',
    options: ['20 m', '24 m', '16 m', '12 m'],
    correctIndex: 0,
    explanation:
      'Displacement is the area under the velocity-time graph. From 0 to 2 s the area is a trapezoid: ½(2 + 6)(2) = 8 m. From 2 to 4 s it is a rectangle: (6)(2) = 12 m. Total 20 m. 24 m multiplies the 6 m/s velocity by the whole 4 s; 16 m treats the first segment as a triangle from 0 m/s (½ · 2 · 4 = 4 m), dropping the 2 m/s starting velocity; 12 m counts only the constant-velocity segment.',
  },
  {
    id: 'phys1-s002-q3',
    stimulusId: 'phys1-s002',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'hard',
    stem: 'At what time during the 8.0 s interval is the cart farthest from the 0 m mark?',
    options: [
      't = 7.0 s, when the velocity changes from positive to negative',
      't = 4.0 s, when the cart begins to slow down',
      't = 8.0 s, at the end of the recorded interval',
      't = 3.0 s, in the middle of the constant-velocity segment',
    ],
    correctIndex: 0,
    explanation:
      'The cart moves away from the mark as long as its velocity is positive, so its distance keeps growing until t = 7.0 s, when v = 0. After that the velocity is negative and the cart comes back. At t = 4.0 s the cart is still moving away, only more slowly (slowing down is not turning around). At t = 8.0 s it has already returned 1 m. t = 3.0 s is the middle of the fastest motion, not its end.',
  },
  // --- Set: position-time graphs of two runners (phys1-s003) ---
  {
    id: 'phys1-s003-q1',
    stimulusId: 'phys1-s003',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'easy',
    stem: 'What is the speed of runner P?',
    options: ['4.0 m/s', '16 m/s', '0.25 m/s', '20 m/s'],
    correctIndex: 0,
    explanation:
      'P’s position-time graph is a straight line, so P’s speed is constant and equals the slope: (20 m − 0)/(5.0 s) = 4.0 m/s. 16 m/s and 20 m/s read a position as a speed; 0.25 m/s inverts the slope (time per meter).',
  },
  {
    id: 'phys1-s003-q2',
    stimulusId: 'phys1-s003',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'medium',
    stem: 'At t = 4.0 s the two graphs cross. Which statement correctly compares the runners at that instant?',
    options: [
      'Q is moving faster than P, because Q’s graph is steeper than P’s there.',
      'P and Q are moving at the same speed, because they are at the same position.',
      'P is moving faster than Q, because P’s graph lay above Q’s until that time.',
      'P and Q are moving at the same speed, because both have gone 16 m in 4.0 s.',
    ],
    correctIndex: 0,
    explanation:
      'Speed is the slope of a position-time graph, not its height. At t = 4.0 s Q’s curve is steeper: Q started from rest with constant acceleration (x = t², so a = 2 m/s²) and has v = at = 8 m/s, while P moves at 4 m/s. Crossing graphs mean equal positions, not equal speeds. Equal distances in equal times give equal AVERAGE speeds, not equal speeds at that instant. P being ahead earlier says nothing about the speeds at 4.0 s.',
  },
  {
    id: 'phys1-s003-q3',
    stimulusId: 'phys1-s003',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'hard',
    stem: 'At what time do the two runners have the same velocity?',
    options: ['t = 2.0 s', 't = 4.0 s', 't = 0 s', 't = 3.0 s'],
    correctIndex: 0,
    explanation:
      'Equal velocities mean equal slopes. Q’s positions fit x = t² (1 m/s² × t²), so Q has a = 2 m/s² and v = 2t; this equals P’s 4.0 m/s at t = 2.0 s (the chord from 1 s to 3 s also has slope (9 − 1)/2 = 4 m/s). t = 4.0 s is where the positions are equal; at t = 0 Q is at rest while P already moves; at t = 3.0 s Q is moving at 6 m/s.',
  },
  // --- Set: horizontal launch from a cliff (phys1-s004) ---
  {
    id: 'phys1-s004-q1',
    stimulusId: 'phys1-s004',
    unit: 'unit-1',
    topicSlug: 'projectile-motion',
    difficulty: 'easy',
    stem: 'How long is the ball in the air before it reaches the ground?',
    options: ['2.0 s', '1.3 s', '1.4 s', '4.0 s'],
    correctIndex: 0,
    explanation:
      'The ball starts with zero vertical velocity, so 20 m = ½(10 m/s²)t², giving t² = 4.0 s² and t = 2.0 s. 1.3 s divides the height by the horizontal speed (20/15), mixing the two directions; 1.4 s drops the ½ (√(20/10)); 4.0 s is t², not t.',
  },
  {
    id: 'phys1-s004-q2',
    stimulusId: 'phys1-s004',
    unit: 'unit-1',
    topicSlug: 'projectile-motion',
    difficulty: 'medium',
    stem: 'The ball is launched again from the same point at 30 m/s, twice the original speed and still horizontal. How do its time in the air and its landing distance from the base of the cliff compare with the original launch?',
    options: [
      'The time is the same, and the landing distance doubles.',
      'The time doubles, and the landing distance becomes four times as far.',
      'The time is halved, and the landing distance stays the same.',
      'The time is the same, and the landing distance becomes four times as far.',
    ],
    correctIndex: 0,
    explanation:
      'The fall time depends only on the vertical motion, which starts from zero vertical velocity and covers 20 m either way: still 2.0 s. With the same time, doubling the horizontal velocity doubles the landing distance (from 30 m to 60 m). Horizontal speed does not change how long the ball takes to fall, so neither doubling nor halving the time is right, and the distance grows in proportion to the speed, not its square.',
  },
  {
    id: 'phys1-s004-q3',
    stimulusId: 'phys1-s004',
    unit: 'unit-1',
    topicSlug: 'projectile-motion',
    difficulty: 'hard',
    stem: 'What is the speed of the ball just before it hits the ground?',
    options: ['25 m/s', '35 m/s', '20 m/s', '15 m/s'],
    correctIndex: 0,
    explanation:
      'Just before impact the vertical velocity is gt = (10)(2.0) = 20 m/s and the horizontal velocity is still 15 m/s. The speed is the magnitude of the vector sum: √(15² + 20²) = 25 m/s. 35 m/s adds the components as if they were parallel; 20 m/s keeps only the vertical part; 15 m/s assumes the speed does not change.',
  },
  // --- Set: cart on an incline, data table (phys1-s005) ---
  {
    id: 'phys1-s005-q1',
    stimulusId: 'phys1-s005',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'medium',
    stem: 'Which claim about the cart’s motion is best supported by the data?',
    options: [
      'The distance covered in each 0.50 s interval grows by the same amount, so the acceleration is constant.',
      'The distance covered in each 0.50 s interval stays the same from one interval to the next, so the velocity is constant.',
      'The distance covered in each 0.50 s interval grows by a larger amount each time, so the acceleration increases.',
      'The distance covered in each 0.50 s interval grows by a smaller amount each time, so the acceleration decreases.',
    ],
    correctIndex: 0,
    explanation:
      'The distances in successive 0.50 s intervals are 0.10, 0.30, 0.50 and 0.70 m. Each is 0.20 m more than the one before, which is the signature of constant acceleration (Δx = aT² between consecutive equal intervals). The intervals are not equal, so the velocity is not constant, and the increase is steady rather than growing or shrinking.',
  },
  {
    id: 'phys1-s005-q2',
    stimulusId: 'phys1-s005',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'medium',
    stem: 'What is the magnitude of the cart’s acceleration?',
    options: ['0.80 m/s²', '0.40 m/s²', '1.6 m/s²', '0.20 m/s²'],
    correctIndex: 0,
    explanation:
      'Starting from rest, x = ½at². At t = 2.00 s, 1.60 m = ½a(4.00 s²), so a = 0.80 m/s² (every row agrees, e.g. 0.40 = ½a(1.00)). 0.40 m/s² drops the ½ (x = at²); 1.6 m/s² divides 2x by t instead of t²; 0.20 m/s² is the 0.20 m growth per interval, which still has to be divided by (0.50 s)².',
  },
  {
    id: 'phys1-s005-q3',
    stimulusId: 'phys1-s005',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'hard',
    stem: 'What is the cart’s speed at t = 2.00 s?',
    options: ['1.6 m/s', '0.80 m/s', '1.4 m/s', '3.2 m/s'],
    correctIndex: 0,
    explanation:
      'With a = 0.80 m/s² from rest, v = at = (0.80)(2.00) = 1.6 m/s. 0.80 m/s is the average velocity over the whole run (1.60 m / 2.00 s), half the final speed for uniform acceleration from rest; 1.4 m/s is the average velocity over the last interval (0.70 m / 0.50 s), which is the speed at t = 1.75 s, not 2.00 s; 3.2 m/s doubles the correct value.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u1-001',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'easy',
    stem: 'A delivery van drives 30 km east in 0.50 h, then 10 km west in the next 0.50 h. What is the van’s average velocity for the whole hour?',
    options: ['20 km/h east', '40 km/h east', '60 km/h east', '20 km/h west'],
    correctIndex: 0,
    explanation:
      'Average velocity is displacement over time: the van ends 30 − 10 = 20 km east of its start after 1.0 h, so 20 km/h east. 40 km/h is the average SPEED (total distance 40 km / 1.0 h); 60 km/h east is the speed on the first leg only; west has the direction of the net displacement reversed.',
  },
  {
    id: 'phys1-u1-002',
    unit: 'unit-1',
    topicSlug: 'two-dimensional-motion',
    difficulty: 'easy',
    stem: 'A moving walkway 50 m long carries people at 1.5 m/s relative to the ground. A traveler walks along it in the same direction at 1.0 m/s relative to the walkway. How long does the traveler take to go from one end of the walkway to the other?',
    options: [
      '20 s',
      '100 s',
      '50 s',
      '33 s',
    ],
    correctIndex: 0,
    explanation:
      'In one dimension the velocities add: relative to the ground the traveler moves at 1.5 + 1.0 = 2.5 m/s, so t = 50/2.5 = 20 s. 100 s subtracts the speeds (0.5 m/s), as if she walked against the walkway; 50 s uses only her walking speed; 33 s uses only the walkway’s speed.',
  },
  {
    id: 'phys1-u1-003',
    unit: 'unit-1',
    topicSlug: 'projectile-motion',
    difficulty: 'easy',
    stem: 'A crate is released from a cargo plane flying horizontally at constant velocity. Air resistance is negligible. Where is the crate, relative to the plane, when it reaches the ground?',
    options: [
      'Directly beneath the plane at that moment',
      'Behind the point that is directly below the plane',
      'Ahead of the point directly below the plane',
      'Directly below the point where it was released',
    ],
    correctIndex: 0,
    explanation:
      'The crate leaves with the plane’s horizontal velocity, and with no horizontal force it keeps that velocity while it falls. The plane also keeps that velocity, so the crate stays directly beneath it. "Behind" assumes the crate loses horizontal speed (air resistance, which is negligible here); "directly below the release point" assumes it starts with no horizontal velocity; "ahead" would require a forward push.',
  },
  {
    id: 'phys1-u1-004',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'medium',
    stem: 'A runner completes 1.5 laps of a circular track whose circumference is 400 m. What is the magnitude of the runner’s displacement?',
    options: ['127 m', '600 m', '0 m', '64 m'],
    correctIndex: 0,
    explanation:
      'After 1.5 laps the runner is directly across the circle from the start, so the displacement is one diameter. r = 400/(2π) = 63.7 m, so the diameter is 127 m. 600 m is the distance traveled, not the displacement; 0 m would be true after a whole number of laps; 64 m is the radius, not the diameter.',
  },
  {
    id: 'phys1-u1-005',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'medium',
    stem: 'A stone is dropped from rest from a tall bridge. Air resistance is negligible. How far does the stone fall during the second second of its fall (from t = 1.0 s to t = 2.0 s)?',
    options: ['15 m', '20 m', '10 m', '5.0 m'],
    correctIndex: 0,
    explanation:
      'From rest, y = ½gt²: after 1.0 s the stone has fallen 5.0 m and after 2.0 s it has fallen 20 m, so during the second second it falls 20 − 5.0 = 15 m. 20 m is the total distance after 2.0 s; 10 m multiplies the speed at t = 1.0 s (10 m/s) by 1.0 s, ignoring the speed gained during that second; 5.0 m is the distance in the first second.',
  },
  {
    id: 'phys1-u1-006',
    unit: 'unit-1',
    topicSlug: 'two-dimensional-motion',
    difficulty: 'medium',
    stem: 'Car A moves east at 25 m/s and car B moves west at 15 m/s on a straight road. At one instant they are 400 m apart and approaching each other. How long after that instant do they meet?',
    options: ['10 s', '40 s', '16 s', '27 s'],
    correctIndex: 0,
    explanation:
      'Relative to car B, car A approaches at 25 + 15 = 40 m/s (opposite directions add), so the gap closes in 400/40 = 10 s. 40 s subtracts the speeds (25 − 15 = 10 m/s), which would describe cars moving the same way; 16 s and 27 s use only one car’s speed, as if the other were parked.',
  },
  {
    id: 'phys1-u1-007',
    unit: 'unit-1',
    topicSlug: 'two-dimensional-motion',
    difficulty: 'medium',
    stem: 'A hiker walks 400 m north, then 300 m south, then 400 m east. What is the magnitude of the hiker’s displacement?',
    options: ['412 m', '1100 m', '500 m', '700 m'],
    correctIndex: 0,
    explanation:
      'Add components: north–south gives 400 − 300 = 100 m north; east gives 400 m. The magnitude is √(100² + 400²) = √170 000 ≈ 412 m. 1100 m is the total distance walked; 500 m uses the 300-400-500 triangle without combining the north and south legs; 700 m adds 300 and 400 as if they were parallel.',
  },
  {
    id: 'phys1-u1-008',
    unit: 'unit-1',
    topicSlug: 'projectile-motion',
    difficulty: 'medium',
    stem: 'A marble rolls off the edge of a horizontal table 1.25 m high and lands on the floor 2.0 m from the base of the table. Air resistance is negligible. How fast was the marble moving when it left the table?',
    options: ['4.0 m/s', '1.6 m/s', '8.0 m/s', '2.0 m/s'],
    correctIndex: 0,
    explanation:
      'Vertically, 1.25 m = ½(10)t², so t² = 0.25 s² and t = 0.50 s. Horizontally the speed is constant: v = 2.0 m / 0.50 s = 4.0 m/s. 1.6 m/s divides the landing distance by the height (2.0/1.25); 8.0 m/s uses t² = 0.25 as the time; 2.0 m/s assumes a 1.0 s fall.',
  },
  {
    id: 'phys1-u1-009',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'hard',
    stem: 'A ball is thrown straight upward at 10 m/s from a balcony 15 m above the ground. It rises, then falls past the balcony to the ground. Air resistance is negligible. How long after the throw does the ball hit the ground?',
    options: ['3.0 s', '1.0 s', '2.0 s', '1.7 s'],
    correctIndex: 0,
    explanation:
      'Take up as positive with the origin at the balcony: −15 = 10t − 5t², so t² − 2t − 3 = 0 and (t − 3)(t + 1) = 0, giving t = 3.0 s. 1.0 s is the time to reach the top; 2.0 s is when the ball passes the balcony again on the way down; 1.7 s is the time to fall 15 m from rest (√(2 · 15/10)), ignoring the upward throw.',
  },
  {
    id: 'phys1-u1-010',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'hard',
    stem: 'From the top of a building, one ball is thrown straight up at speed v₀ and, at the same moment, an identical ball is thrown straight down at the same speed v₀. Air resistance is negligible. How do their speeds just before they hit the ground compare?',
    options: [
      'The speeds are equal, because both balls fall the same height and start with the same speed.',
      'The ball thrown down is faster, because it starts with a velocity in the direction of the motion.',
      'The ball thrown up is faster, because it is in the air longer and gains speed for a longer time.',
      'The speeds are equal, because both balls have the same acceleration for the same length of time.',
    ],
    correctIndex: 0,
    explanation:
      'v² = v₀² + 2gh depends only on the starting speed and the net drop, which are the same for both, so the impact speeds are equal. (The upward ball returns to the roof moving down at v₀ and then repeats the other ball’s motion.) The thrown-down ball reaches the ground sooner but not faster; the thrown-up ball is in the air longer, yet its first part of the trip only undoes its upward velocity; and the two balls are NOT in the air for the same time, so that reason is false.',
  },
  {
    id: 'phys1-u1-011',
    unit: 'unit-1',
    topicSlug: 'motion-graphs',
    difficulty: 'hard',
    stem: 'The position-time graph of a cart moving along a line is a downward-opening parabola with its highest point at t = 3 s. Which describes the cart’s velocity-time graph over the same interval?',
    options: [
      'A straight line with negative slope that crosses v = 0 exactly at t = 3 s',
      'A downward-opening parabola that has its highest point at t = 3 s',
      'A straight line with positive slope that crosses zero at t = 3 s',
      'A horizontal line at a negative value for the whole time interval',
    ],
    correctIndex: 0,
    explanation:
      'A parabolic x(t) means constant acceleration, so v(t) is a straight line. The x-graph is concave down, so the acceleration is negative (negative slope on the v-graph), and the slope of x is zero at the peak, so v = 0 at t = 3 s. Copying the parabola confuses position with velocity; a positive slope would be a concave-up (U-shaped) x-graph; a constant negative velocity gives a straight, falling x-graph.',
  },
  {
    id: 'phys1-u1-012',
    unit: 'unit-1',
    topicSlug: 'two-dimensional-motion',
    difficulty: 'hard',
    stem: 'A student rides a cart moving east at a constant 3 m/s. She tosses a ball horizontally toward the west at 3 m/s relative to the cart. Air resistance is negligible. How does an observer standing on the ground describe the motion of the ball after it leaves her hand?',
    options: [
      'It falls straight down, because its horizontal velocity relative to the ground is zero.',
      'It moves west along a curved path, because it was thrown west at 3 m/s.',
      'It moves east along a curved path, because it shares the cart’s velocity.',
      'It falls straight down, because a horizontal toss gives a ball no horizontal motion.',
    ],
    correctIndex: 0,
    explanation:
      'Relative to the ground the ball’s horizontal velocity is +3 m/s (cart) + (−3 m/s) (toss) = 0, so it starts with only vertical motion and falls straight down. "West at 3 m/s" uses the velocity relative to the cart, not the ground; "east" forgets the toss; and a horizontal toss normally DOES give horizontal motion, so that reason is wrong even though the conclusion matches.',
  },
  {
    id: 'phys1-u1-013',
    unit: 'unit-1',
    topicSlug: 'projectile-motion',
    difficulty: 'hard',
    stem: 'A ball is kicked from level ground with a horizontal velocity component of 12 m/s and an upward component of 16 m/s. Air resistance is negligible. What is the ball’s speed 2.5 s after the kick, while it is still in the air?',
    options: ['15 m/s', '20 m/s', '12 m/s', '9.0 m/s'],
    correctIndex: 0,
    explanation:
      'The horizontal component stays 12 m/s. The vertical component is 16 − (10)(2.5) = −9.0 m/s (moving down). The speed is √(12² + 9.0²) = √225 = 15 m/s. 20 m/s is the launch speed, which returns only at landing height (at 3.2 s); 12 m/s is the horizontal component alone (the speed at the top, at 1.6 s); 9.0 m/s is the vertical component alone.',
  },
  {
    id: 'phys1-u1-014',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'hard',
    stem: 'Ball 1 is dropped from rest from a tall tower. Exactly 1.0 s later, ball 2 is dropped from rest from the same point. Air resistance is negligible. While both balls are falling, which statement is correct?',
    options: [
      'The distance between them increases, and the difference in their speeds stays at 10 m/s.',
      'The distance between them stays at 5.0 m, because both have the same acceleration g.',
      'The distance increases, and the difference in their speeds grows beyond 10 m/s.',
      'The distance between them shrinks, because the later ball gains 10 m/s every second.',
    ],
    correctIndex: 0,
    explanation:
      'Both balls have the same acceleration g, so the difference in their velocities never changes: ball 1 is always (10 m/s²)(1.0 s) = 10 m/s faster. A constant velocity difference means the separation grows steadily (by 10 m every second), starting from the 5.0 m ball 1 had fallen when ball 2 was released. Equal accelerations keep the speed DIFFERENCE fixed, not the distance; the speed difference does not grow; and ball 2 gains speed at the same rate as ball 1, so it never catches up.',
  },
  {
    id: 'phys1-u1-015',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'medium',
    stem: 'A cart moves back and forth along a straight track. Over a 10 s interval its average velocity is zero. Which statement must be true?',
    options: [
      'It ended the interval at its starting position.',
      'It was at rest during the whole interval of time.',
      'Its average speed over the interval was also zero.',
      'Its acceleration was zero at every instant in the interval.',
    ],
    correctIndex: 0,
    explanation:
      'Average velocity is displacement divided by time, so zero average velocity means zero displacement: the cart ends where it started. It could have moved a long way and back, so it need not have been at rest, its average SPEED (distance/time) can be large, and its velocity, and therefore its acceleration, can change.',
  },
]
