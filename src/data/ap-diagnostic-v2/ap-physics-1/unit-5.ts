/**
 * AP Physics 1 diagnostic v2 — Unit 5: Torque and Rotational Dynamics (CED
 * 2024 topics 5.1–5.6). Torque is described as clockwise / counterclockwise
 * only (no right-hand-rule vector direction, 5.3 boundary); rotational inertia
 * values for extended bodies are given (5.4 boundary). g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s019',
    title: 'A balanced meterstick',
    kind: 'figure',
    content:
      'A uniform meterstick of mass 0.40 kg is balanced horizontally on a pivot at its 40 cm mark. A 0.50 kg mass hangs from the 0 cm mark, and a mass m hangs from the 80 cm mark, as shown. The stick is at rest. Use g = 10 m/s².',
    svg:
      '<svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Meterstick on a pivot at the 40 cm mark, a 0.50 kg mass hanging at 0 cm and an unknown mass m hanging at 80 cm" fill="none" stroke="currentColor" stroke-width="2">' +
      '<rect x="40" y="70" width="300" height="10"/>' +
      '<text x="40" y="62" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">0</text>' +
      '<text x="100" y="62" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">20</text>' +
      '<text x="160" y="62" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">40</text>' +
      '<text x="220" y="62" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">60</text>' +
      '<text x="280" y="62" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">80</text>' +
      '<text x="340" y="62" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">100 cm</text>' +
      '<polygon points="160,80 145,110 175,110" fill="currentColor" fill-opacity="0.3"/>' +
      '<text x="160" y="126" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">pivot</text>' +
      '<line x1="40" y1="80" x2="40" y2="130"/>' +
      '<rect x="22" y="130" width="36" height="30"/>' +
      '<text x="40" y="178" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">0.50 kg</text>' +
      '<line x1="280" y1="80" x2="280" y2="130"/>' +
      '<rect x="262" y="130" width="36" height="30"/>' +
      '<text x="280" y="178" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">m</text>' +
      '</svg>',
  },
  {
    id: 'phys1-s020',
    title: 'Angular velocity of a wheel',
    kind: 'graph',
    content:
      'A wheel starts from rest and rotates about a fixed axle. The graph shows its angular velocity versus time: it speeds up uniformly for 3.0 s, spins at a constant rate for 2.0 s, then slows uniformly to rest at t = 8.0 s.',
    chart: {
      title: 'Figure 7. Angular velocity of the wheel versus time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 's',
      yLabel: 'Angular velocity',
      yUnit: 'rad/s',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      yValues: [0, 2, 4, 6, 6, 6, 4, 2, 0],
      seriesLabel: 'Wheel',
    },
  },
  {
    id: 'phys1-s021',
    title: 'A string pulled from a wheel',
    kind: 'figure',
    content:
      'A wheel of radius 0.10 m can turn without friction about a fixed horizontal axle through its center. Its rotational inertia about the axle is 0.020 kg·m². A light string is wrapped around the rim, and a student pulls the free end horizontally with a constant 4.0 N force, as shown, starting from rest. The wheel also has a small hub of radius 0.050 m.',
    svg:
      '<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wheel of radius 0.10 m on a fixed axle with a smaller hub; a string leaves the top of the rim horizontally and is pulled to the right with 4.0 N" fill="none" stroke="currentColor" stroke-width="2">' +
      '<defs><marker id="phys1-s021-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>' +
      '<circle cx="120" cy="110" r="70"/>' +
      '<circle cx="120" cy="110" r="35" stroke-dasharray="4 3"/>' +
      '<circle cx="120" cy="110" r="4" fill="currentColor"/>' +
      '<line x1="120" y1="110" x2="190" y2="110" stroke-width="1"/>' +
      '<text x="155" y="125" text-anchor="middle" font-size="11" fill="currentColor" stroke="none">0.10 m</text>' +
      '<text x="120" y="98" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">hub</text>' +
      '<line x1="120" y1="40" x2="320" y2="40" marker-end="url(#phys1-s021-arrow)"/>' +
      '<text x="300" y="30" text-anchor="middle" font-size="13" fill="currentColor" stroke="none">F = 4.0 N</text>' +
      '</svg>',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: balanced meterstick (phys1-s019) ---
  {
    id: 'phys1-s019-q1',
    stimulusId: 'phys1-s019',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'easy',
    stem: 'What is the magnitude of the torque about the pivot exerted by the hanging 0.50 kg mass?',
    options: ['2.0 N·m', '5.0 N·m', '2.5 N·m', '0.20 N·m'],
    correctIndex: 0,
    explanation:
      'The mass’s weight is 5.0 N and its line of action is 40 cm = 0.40 m from the pivot, so τ = rF = (0.40)(5.0) = 2.0 N·m (counterclockwise in the figure). 5.0 N·m is the force alone; 2.5 N·m measures the lever arm from the stick’s center (0.50 m) instead of the pivot; 0.20 N·m uses the 0.040 m arm (a cm-to-m slip).',
  },
  {
    id: 'phys1-s019-q2',
    stimulusId: 'phys1-s019',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'medium',
    stem: 'What is the mass m?',
    options: ['0.40 kg', '0.50 kg', '0.60 kg', '4.0 kg'],
    correctIndex: 0,
    explanation:
      'Take torques about the pivot. Counterclockwise: (5.0 N)(0.40 m) = 2.0 N·m. Clockwise: the stick’s own 4.0 N weight acts at its center, 0.10 m from the pivot (0.40 N·m), plus mg at 0.40 m. Balance: 2.0 = 0.40 + mg(0.40), so mg = 4.0 N and m = 0.40 kg. 0.50 kg ignores the stick’s weight; 0.60 kg puts the stick’s torque on the wrong side (2.0 + 0.40); 4.0 kg reports the weight in newtons as the mass.',
  },
  {
    id: 'phys1-s019-q3',
    stimulusId: 'phys1-s019',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'hard',
    stem: 'What is the magnitude of the force that the pivot exerts on the meterstick?',
    options: ['13 N', '9.0 N', '4.0 N', '5.0 N'],
    correctIndex: 0,
    explanation:
      'The stick is in translational equilibrium too, so the pivot’s upward force balances all the downward forces on the stick: 5.0 N (left mass) + 4.0 N (mass m) + 4.0 N (stick) = 13 N. 9.0 N leaves out the stick’s own weight; 4.0 N counts only the stick (or only mass m); 5.0 N counts only the 0.50 kg mass, as if the pivot held up just the mass on its own side.',
  },
  // --- Set: angular velocity graph (phys1-s020) ---
  {
    id: 'phys1-s020-q1',
    stimulusId: 'phys1-s020',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'easy',
    stem: 'What is the wheel’s angular acceleration during the first 3.0 s?',
    options: ['2.0 rad/s²', '6.0 rad/s²', '18 rad/s²', '0.50 rad/s²'],
    correctIndex: 0,
    explanation:
      'Angular acceleration is the slope of the ω-t graph: (6.0 − 0)/3.0 = 2.0 rad/s². 6.0 rad/s² reads the angular velocity as the acceleration; 18 rad/s² multiplies instead of dividing; 0.50 rad/s² inverts the slope.',
  },
  {
    id: 'phys1-s020-q2',
    stimulusId: 'phys1-s020',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'medium',
    stem: 'Through what total angle does the wheel turn from t = 0 to t = 8.0 s?',
    options: ['30 rad', '48 rad', '21 rad', '15 rad'],
    correctIndex: 0,
    explanation:
      'Angular displacement is the area under the ω-t graph: ½(3.0)(6.0) + (2.0)(6.0) + ½(3.0)(6.0) = 9.0 + 12 + 9.0 = 30 rad. 48 rad uses 6.0 rad/s for all 8.0 s; 21 rad leaves out one of the triangles; 15 rad halves the total.',
  },
  {
    id: 'phys1-s020-q3',
    stimulusId: 'phys1-s020',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'hard',
    stem: 'A point on the wheel is 0.20 m from the axle. What is the magnitude of this point’s tangential acceleration at t = 4.0 s?',
    options: ['0 m/s²', '0.40 m/s²', '7.2 m/s²', '1.2 m/s²'],
    correctIndex: 0,
    explanation:
      'Tangential acceleration is a_t = rα, and from t = 3.0 s to 5.0 s the angular velocity is constant (α = 0), so a_t = 0. 0.40 m/s² uses the α of the first 3.0 s; 7.2 m/s² is the centripetal acceleration ω²r = (6.0)²(0.20), which is not tangential; 1.2 m/s² is the point’s speed ωr, not an acceleration.',
  },
  // --- Set: wheel with a pulled string (phys1-s021) ---
  {
    id: 'phys1-s021-q1',
    stimulusId: 'phys1-s021',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'medium',
    stem: 'What is the angular acceleration of the wheel?',
    options: ['20 rad/s²', '200 rad/s²', '10 rad/s²', '0.0080 rad/s²'],
    correctIndex: 0,
    explanation:
      'The string pulls tangent to the rim, so τ = rF = (0.10)(4.0) = 0.40 N·m and α = τ/I = 0.40/0.020 = 20 rad/s². 200 rad/s² divides the force, not the torque, by I; 10 rad/s² computes the torque with the hub radius (0.050 m) although the string is on the rim; 0.0080 rad/s² multiplies τ by I instead of dividing.',
  },
  {
    id: 'phys1-s021-q2',
    stimulusId: 'phys1-s021',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'medium',
    stem: 'How much string has unwound from the rim 2.0 s after the student begins pulling?',
    options: ['4.0 m', '8.0 m', '40 m', '2.0 m'],
    correctIndex: 0,
    explanation:
      'From rest, θ = ½αt² = ½(20)(2.0)² = 40 rad. The string unwinds one arc length per angle turned: s = rθ = (0.10)(40) = 4.0 m. 8.0 m drops the ½ (θ = αt²); 40 m reports the angle in radians as a length; 2.0 m uses the hub radius instead of the rim radius.',
  },
  {
    id: 'phys1-s021-q3',
    stimulusId: 'phys1-s021',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'hard',
    stem: 'The string is rewound around the hub instead of the rim and pulled with the same 4.0 N force. How does the wheel’s angular acceleration compare with its value when the string was on the rim?',
    options: [
      'It is half as large, because the force now has half the lever arm.',
      'It is the same, because the force and the wheel are unchanged.',
      'It is twice as large, because the hub is a smaller circle.',
      'It is one-fourth as large, because I depends on radius squared.',
    ],
    correctIndex: 0,
    explanation:
      'The same force at half the radius gives half the torque (τ = rF), and the wheel’s rotational inertia about the axle has not changed, so α = τ/I is halved. The force alone does not set α; winding on a smaller circle does not increase α (it changes how much string unwinds per turn); and the wheel’s I is a property of the wheel, not of where the string is attached.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u5-001',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'easy',
    stem: 'A 0.40 m bar is pivoted at one end. A 15 N force is applied at the other end, directed at 53° to the bar (sin 53° = 0.80, cos 53° = 0.60). What is the magnitude of the torque about the pivot?',
    options: [
      '4.8 N·m',
      '6.0 N·m',
      '3.6 N·m',
      '38 N·m',
    ],
    correctIndex: 0,
    explanation:
      'Only the force component perpendicular to the bar produces torque: τ = rF sin θ = (0.40)(15)(0.80) = 4.8 N·m. 6.0 N·m assumes the force is perpendicular; 3.6 N·m uses cos 53°, the component along the bar; 38 N·m divides the force by the length.',
  },
  {
    id: 'phys1-u5-002',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'easy',
    stem: 'A thin hoop and a solid disk have the same mass and the same radius. Each rotates about an axis through its center, perpendicular to its plane. Which has the greater rotational inertia?',
    options: [
      'The hoop, because all of its mass is at the full radius',
      'The disk, because its mass fills the whole circle out to the rim',
      'Neither, because equal mass and radius give equal inertia',
      'The disk, because a solid object is harder to turn than a ring',
    ],
    correctIndex: 0,
    explanation:
      'Rotational inertia is I = Σmr²: it grows with how far the mass sits from the axis. All of the hoop’s mass is at the full radius R (I = MR²), while much of the disk’s mass is closer to the center (I = ½MR²). Mass and radius alone do not fix I; the distribution does, and being solid does not make the disk harder to turn.',
  },
  {
    id: 'phys1-u5-003',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'easy',
    stem: 'A merry-go-round turns at a constant rate. Child A sits at the outer edge and child B sits halfway between the center and the edge. Which statement compares the children correctly?',
    options: [
      'They have the same angular velocity, and A has twice B’s linear speed.',
      'They have the same linear speed, and A has half B’s angular velocity.',
      'They have the same angular velocity and the same linear speed.',
      'A has twice B’s angular velocity and twice B’s linear speed.',
    ],
    correctIndex: 0,
    explanation:
      'Every point on a rigid rotating object turns through the same angle in the same time, so ω is the same for both. Linear speed is v = rω, so A, at twice the radius, moves twice as fast. The other options either give the children different angular velocities, which a rigid platform cannot do, or ignore the radius in v = rω.',
  },
  {
    id: 'phys1-u5-004',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'medium',
    stem: 'A ceiling fan turning at 30 rad/s is switched off and slows uniformly to rest in 10 s. About how many revolutions does it make while slowing down?',
    options: ['24 rev', '150 rev', '48 rev', '12 rev'],
    correctIndex: 0,
    explanation:
      'With uniform slowing the average angular velocity is (30 + 0)/2 = 15 rad/s, so θ = (15)(10) = 150 rad = 150/(2π) ≈ 24 revolutions. 150 rev forgets to convert radians to revolutions; 48 rev uses 30 rad/s for the whole 10 s (300 rad); 12 rev divides by 4π instead of 2π.',
  },
  {
    id: 'phys1-u5-005',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'medium',
    stem: 'A light rod 0.80 m long hangs horizontally from a single string as part of a mobile. A 3.0 kg ornament hangs from the left end and a 1.0 kg ornament hangs from the right end. Where must the string be attached for the rod to hang level?',
    options: [
      '0.20 m from the left end',
      '0.40 m from the left end',
      '0.60 m from the left end',
      '0.27 m from the left end',
    ],
    correctIndex: 0,
    explanation:
      'Balance torques about the string at distance d from the left end: (30 N)(d) = (10 N)(0.80 − d), so 40d = 8.0 and d = 0.20 m, closer to the heavier ornament. 0.40 m is the midpoint, which ignores the masses; 0.60 m puts the string closer to the lighter ornament (the masses swapped); 0.27 m divides 0.80 m by 3, using only the mass ratio.',
  },
  {
    id: 'phys1-u5-006',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'medium',
    stem: 'Two small 2.0 kg balls are fixed to a light rod, each 0.50 m from the rod’s center, and the rod spins about an axis through its center perpendicular to the rod. The balls are then moved to 0.25 m from the center. By what factor does the rotational inertia change?',
    options: ['It becomes 1/4 as large.', 'It becomes 1/2 as large.', 'It stays the same.', 'It becomes 1/8 as large.'],
    correctIndex: 0,
    explanation:
      'For point masses I = Σmr². Halving every r multiplies I by (½)² = ¼: from 2(2.0)(0.50)² = 1.0 kg·m² to 2(2.0)(0.25)² = 0.25 kg·m². ½ treats I as proportional to r; rotational inertia depends on where the mass is, not only how much there is; ⅛ cubes the radius ratio.',
  },
  {
    id: 'phys1-u5-007',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'medium',
    stem: 'A uniform rod of mass 3.0 kg and length 4.0 m has rotational inertia (1/12)ML² = 4.0 kg·m² about an axis through its center, perpendicular to the rod. What is its rotational inertia about a parallel axis through one end?',
    options: ['16 kg·m²', '52 kg·m²', '10 kg·m²', '12 kg·m²'],
    correctIndex: 0,
    explanation:
      'By the parallel-axis theorem, I = I_cm + Md², where d = 2.0 m is the distance from the center to the end: 4.0 + (3.0)(2.0)² = 4.0 + 12 = 16 kg·m². 52 kg·m² uses the full length as d; 10 kg·m² forgets to square d (Md = 6.0); 12 kg·m² keeps only the Md² term.',
  },
  {
    id: 'phys1-u5-008',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'medium',
    stem: 'A constant net torque of 6.0 N·m acts on a wheel with rotational inertia 1.5 kg·m² that starts from rest. How long does the wheel take to reach an angular velocity of 20 rad/s?',
    options: ['5.0 s', '2.2 s', '3.3 s', '0.20 s'],
    correctIndex: 0,
    explanation:
      'α = τ/I = 6.0/1.5 = 4.0 rad/s², and t = ω/α = 20/4.0 = 5.0 s. 2.2 s multiplies τ by I to get α (9.0 rad/s²); 3.3 s divides ω by the torque instead of by α; 0.20 s inverts t = ω/α.',
  },
  {
    id: 'phys1-u5-009',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'hard',
    stem: 'A uniform 4.0 m plank weighing 200 N lies on a flat ledge with 1.5 m of its length sticking out past the edge. A 300 N student walks out along the overhanging part. How far past the edge can the student stand before the plank begins to tip?',
    options: [
      '0.33 m',
      '1.5 m',
      '0.50 m',
      '0.75 m',
    ],
    correctIndex: 0,
    explanation:
      'The plank is about to tip when the ledge pushes only at its edge, so take torques about the edge. The plank’s weight acts at its center, 2.0 m from the end, which is 0.50 m back from the edge on the ledge side: 200 N × 0.50 m = 100 N·m. The student at distance d past the edge gives 300d. Tipping starts when 300d = 100, so d ≈ 0.33 m. 1.5 m assumes the student can reach the end; 0.50 m uses the plank’s lever arm for the student; 0.75 m swaps the two weights (200d = 300 × 0.50).',
  },
  {
    id: 'phys1-u5-010',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'hard',
    stem: 'A grinding wheel turns at a constant angular velocity while a motor drives it. Friction in the bearings exerts a constant 2.0 N·m torque opposing the rotation. What torque must the motor exert on the wheel?',
    options: [
      'Exactly 2.0 N·m, so that the net torque on the wheel is zero',
      'More than 2.0 N·m, so the wheel keeps turning forward',
      'Zero, since a turning wheel needs no torque to continue',
      'Less than 2.0 N·m, since its inertia carries it along',
    ],
    correctIndex: 0,
    explanation:
      'Constant angular velocity means zero angular acceleration, so by τ_net = Iα the net torque is zero: the motor must supply exactly 2.0 N·m to cancel friction. A net forward torque would make the wheel speed up. Zero motor torque would let friction slow the wheel. Rotational inertia resists CHANGES in rotation; it does not cancel an opposing torque.',
  },
  {
    id: 'phys1-u5-011',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'hard',
    stem: 'A block hangs from a light string wrapped around a pulley that has significant rotational inertia and turns on a frictionless axle. The block is released and accelerates downward. How does the tension in the string compare with the block’s weight while the block falls?',
    options: [
      'It is less than the weight, so that the block has a net downward force.',
      'It equals the weight, because the string supports the block.',
      'It is greater than the weight, because it must also turn the pulley.',
      'It is zero, because a falling block does not pull on the string.',
    ],
    correctIndex: 0,
    explanation:
      'The block accelerates downward, so the net force on it points down: mg − T = ma with a > 0, so T < mg. The tension is not zero either: it is the only force producing the torque that gives the pulley its angular acceleration. T = mg would mean no acceleration; T > mg would make the block accelerate upward.',
  },
  {
    id: 'phys1-u5-012',
    unit: 'unit-5',
    topicSlug: 'torque-and-equilibrium',
    difficulty: 'medium',
    stem: 'Two children balance a seesaw that is pivoted at its center. Child P then slides closer to the pivot while child Q stays put. What happens?',
    options: [
      'Q’s side goes down, because P’s torque about the pivot is now smaller.',
      'P’s side goes down, because P is now closer to the pivot point.',
      'Nothing changes, because neither child’s weight has changed.',
      'P’s side goes down, because P’s weight now acts on a shorter arm.',
    ],
    correctIndex: 0,
    explanation:
      'Balance means equal and opposite torques about the pivot. Moving closer shortens P’s lever arm, so P’s torque (weight × arm) decreases while Q’s is unchanged. The net torque is now in Q’s direction, so Q’s side goes down. A shorter lever arm means LESS torque, not more; and torque depends on the arm as well as the weight.',
  },
  {
    id: 'phys1-u5-013',
    unit: 'unit-5',
    topicSlug: 'rotational-kinematics',
    difficulty: 'medium',
    stem: 'The same torque is applied to a uniform rod about two different axes, each perpendicular to the rod: one through its center and one through one end. In which case is the angular acceleration greater?',
    options: [
      'About the center, where the rod’s rotational inertia is smaller',
      'About the end, because the rod’s mass is spread farther from the axis',
      'The same for both, because the rod’s mass and the torque do not change',
      'About the end, because the long lever arm makes the rod easier to turn',
    ],
    correctIndex: 0,
    explanation:
      'α = τ/I. About the center, the rod’s mass is closer to the axis on average, so I is smaller ((1/12)ML² versus (1/3)ML² about an end), and the same torque gives a larger α. Mass spread farther from the axis INCREASES I and decreases α; the axis location matters even though the mass does not change; and the torque is the same in both cases by assumption.',
  },
]
