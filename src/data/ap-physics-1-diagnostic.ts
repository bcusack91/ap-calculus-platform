/**
 * AP Physics 1 Diagnostic Test Generator
 *
 * 10 deterministic forms, ~33 questions each spanning all 7 AP
 * Physics 1 units. Each form uses a seeded shuffle to select a
 * unique subset of questions from the pool. Weak areas map to
 * topic slugs for interactive review.
 */

export const TOTAL_FORMS = 10

export interface APPhysics1DiagnosticQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export interface APPhysics1Domain {
  id: string
  name: string
  topicSlugs: string[]
  questionTarget: number
}

export interface APPhysics1DiagnosticTestData {
  form: number
  questions: APPhysics1DiagnosticQuestion[]
  domains: APPhysics1Domain[]
  totalQuestions: number
  timeLimitMinutes: number
}

export interface APPhysics1DomainResult {
  domainId: string
  domainName: string
  correct: number
  total: number
  percentage: number
  level: 'strong' | 'moderate' | 'weak'
}

export interface APPhysics1RecommendedTopic {
  slug: string
  name: string
  domainId: string
  priority: 'high' | 'medium'
}

export interface APPhysics1DiagnosticResults {
  form: number
  totalCorrect: number
  totalQuestions: number
  percentage: number
  estimatedAPScore: number
  domains: APPhysics1DomainResult[]
  weakAreas: string[]
  moderateAreas: string[]
  strengths: string[]
  recommendedTopics: APPhysics1RecommendedTopic[]
}

const AP_PHYSICS1_DOMAINS: APPhysics1Domain[] = [
  { id: 'kinematics', name: 'Kinematics', topicSlugs: ['one-dimensional-motion', 'two-dimensional-motion'], questionTarget: 5 },
  { id: 'dynamics', name: 'Dynamics (Newton\'s Laws)', topicSlugs: ['newtons-first-second-laws', 'friction'], questionTarget: 5 },
  { id: 'circular-motion-gravity', name: 'Circular Motion & Gravitation', topicSlugs: ['uniform-circular-motion', 'universal-gravitation'], questionTarget: 5 },
  { id: 'energy', name: 'Energy', topicSlugs: ['work-and-kinetic-energy', 'conservation-of-energy'], questionTarget: 5 },
  { id: 'momentum', name: 'Momentum', topicSlugs: ['momentum-and-impulse', 'collisions'], questionTarget: 5 },
  { id: 'simple-harmonic-motion', name: 'Simple Harmonic Motion', topicSlugs: ['introduction-to-shm', 'energy-in-shm'], questionTarget: 4 },
  { id: 'torque-rotation', name: 'Torque & Rotational Motion', topicSlugs: ['torque-and-equilibrium', 'angular-momentum'], questionTarget: 4 },
  { id: 'fluids', name: 'Fluids', topicSlugs: ['fluid-pressure', 'buoyancy', 'fluid-dynamics'], questionTarget: 3 },
]

export { AP_PHYSICS1_DOMAINS }

export interface PoolQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  domain: string
  topicSlug: string
}

export const AP_PHYSICS1_QUESTION_POOL: PoolQuestion[] = [
  // ---- Kinematics ----
  { question: 'An object is thrown vertically upward. At the highest point, its acceleration is:', options: ['Zero', '9.8 m/s² downward', '9.8 m/s² upward', 'Dependent on the initial velocity'], correctAnswer: 1, explanation: 'Near Earth\'s surface, the acceleration due to gravity is always 9.8 m/s² downward, regardless of velocity.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A car accelerates uniformly from rest to 20 m/s in 5 seconds. How far does it travel?', options: ['50 m', '100 m', '25 m', '200 m'], correctAnswer: 0, explanation: 'd = ½at² = ½(4)(25) = 50 m. Or d = (v₀ + v)t/2 = (0 + 20)(5)/2 = 50 m.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A projectile is launched at 45° above the horizontal. At what angle is the velocity vector at the highest point?', options: ['45° above horizontal', '0° (horizontal)', '90° (vertical)', '45° below horizontal'], correctAnswer: 1, explanation: 'At the peak the vertical velocity is zero; only horizontal velocity remains, so the velocity is horizontal (0°).', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'Two balls are dropped from the same height. Ball A has twice the mass of Ball B. Ignoring air resistance, which hits the ground first?', options: ['Ball A', 'Ball B', 'They hit at the same time', 'Cannot be determined'], correctAnswer: 2, explanation: 'In free fall (no air resistance), all objects experience the same gravitational acceleration regardless of mass.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A ball is launched horizontally from a cliff. What determines the time in the air?', options: ['The horizontal velocity', 'The height of the cliff', 'The mass of the ball', 'Both horizontal velocity and height'], correctAnswer: 1, explanation: 'Time of flight depends only on the vertical fall: t = √(2h/g). Horizontal velocity is independent.', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'The slope of a position-time graph represents:', options: ['Acceleration', 'Velocity', 'Force', 'Displacement'], correctAnswer: 1, explanation: 'The slope Δx/Δt of a position-time graph gives velocity (or instantaneous velocity for a curve).', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A projectile has a range R when launched at angle θ. What other angle gives the same range?', options: ['θ/2', '90° − θ', '180° − θ', '2θ'], correctAnswer: 1, explanation: 'For the same launch speed, complementary angles (θ and 90° − θ) give the same range due to the sin(2θ) factor.', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'The area under an acceleration-time graph gives:', options: ['Displacement', 'Change in velocity', 'Force', 'Kinetic energy'], correctAnswer: 1, explanation: 'Area under a-t graph = ∫a dt = Δv (change in velocity).', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A car traveling at 30 m/s brakes uniformly and stops in 6 seconds. The braking distance is:', options: ['150 m', '90 m', '45 m', '180 m'], correctAnswer: 1, explanation: 'a = -30/6 = -5 m/s². d = v₀t + ½at² = 30(6) + ½(-5)(36) = 180 - 90 = 90 m.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A ball is thrown upward at 20 m/s. The time to reach maximum height is approximately:', options: ['1 s', '2 s', '4 s', '10 s'], correctAnswer: 1, explanation: 't = v₀/g = 20/10 = 2 s (using g ≈ 10 m/s²).', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'During projectile motion (no air resistance), the horizontal component of velocity:', options: ['Increases', 'Decreases', 'Remains constant', 'Equals the vertical component'], correctAnswer: 2, explanation: 'No horizontal force acts, so horizontal velocity stays constant throughout the flight.', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'An object moves 5 m east, then 5 m north. Its displacement magnitude is:', options: ['10 m', '5 m', '7.07 m', '0 m'], correctAnswer: 2, explanation: 'Displacement = √(5² + 5²) = 5√2 ≈ 7.07 m at 45° northeast.', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'The instantaneous velocity of an object can be found from a position-time graph by:', options: ['Finding the slope of the tangent line', 'Calculating the area under the curve', 'Finding the y-intercept', 'Averaging two endpoints'], correctAnswer: 0, explanation: 'Instantaneous velocity is the derivative dx/dt, which equals the slope of the tangent line at that point.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A stone is dropped from a 45 m tower. The time to hit the ground is approximately:', options: ['2 s', '3 s', '4.5 s', '9 s'], correctAnswer: 1, explanation: 't = √(2h/g) = √(2·45/10) = √9 = 3 s.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A projectile is fired with initial speed v₀ at angle θ. Its maximum height is:', options: ['v₀²sin²θ/(2g)', 'v₀²sin(2θ)/g', 'v₀²/(2g)', 'v₀sinθ/g'], correctAnswer: 0, explanation: 'At the peak, v_y = 0. Using v² = v₀²sin²θ - 2gh → h = v₀²sin²θ/(2g).', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'An object in free fall has been falling for 3 seconds. Its speed is approximately:', options: ['10 m/s', '20 m/s', '30 m/s', '45 m/s'], correctAnswer: 2, explanation: 'v = gt = 10(3) = 30 m/s (using g ≈ 10 m/s²).', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A car\'s velocity-time graph is a straight line with positive slope. The car is:', options: ['Moving at constant velocity', 'Accelerating uniformly', 'Decelerating', 'At rest'], correctAnswer: 1, explanation: 'A straight line on a v-t graph means constant acceleration. Positive slope means speed is increasing.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'A boat crosses a river at 4 m/s perpendicular to a 3 m/s current. The resultant speed is:', options: ['5 m/s', '7 m/s', '1 m/s', '12 m/s'], correctAnswer: 0, explanation: 'Resultant = √(4² + 3²) = √(16 + 9) = √25 = 5 m/s.', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  { question: 'Which quantity is scalar (not a vector)?', options: ['Velocity', 'Acceleration', 'Displacement', 'Speed'], correctAnswer: 3, explanation: 'Speed has magnitude only, while velocity, acceleration, and displacement all have both magnitude and direction.', domain: 'kinematics', topicSlug: 'one-dimensional-motion' },
  { question: 'Two projectiles are launched at the same speed but at 30° and 60°. Which reaches a greater maximum height?', options: ['The one at 30°', 'The one at 60°', 'Both reach the same height', 'Cannot be determined'], correctAnswer: 1, explanation: 'h_max = v₀²sin²θ/(2g). sin²60° > sin²30°, so the 60° launch reaches higher.', domain: 'kinematics', topicSlug: 'two-dimensional-motion' },
  // ---- Dynamics ----
  { question: 'A 5 kg object experiences a net force of 20 N. Its acceleration is:', options: ['4 m/s²', '100 m/s²', '0.25 m/s²', '25 m/s²'], correctAnswer: 0, explanation: 'Newton\'s second law: a = F/m = 20/5 = 4 m/s².', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A book sits on a table. The normal force on the book is an example of Newton\'s:', options: ['First law', 'Second law', 'Third law', 'Law of gravitation'], correctAnswer: 2, explanation: 'The normal force is the table\'s reaction to the book pushing down — an action-reaction pair (Third law).', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A 10 kg box is pushed with 50 N across a floor with μk = 0.3. What is the acceleration?', options: ['5 m/s²', '2.06 m/s²', '3 m/s²', '2 m/s²'], correctAnswer: 1, explanation: 'f = μk·mg = 0.3(10)(9.8) = 29.4 N. Fnet = 50 − 29.4 = 20.6 N. a = 20.6/10 ≈ 2.06 m/s².', domain: 'dynamics', topicSlug: 'friction' },
  { question: 'An elevator accelerates upward. The apparent weight of a person inside is:', options: ['Less than their true weight', 'Equal to their true weight', 'Greater than their true weight', 'Zero'], correctAnswer: 2, explanation: 'When accelerating up, the normal force (apparent weight) exceeds mg: N = m(g + a).', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'Static friction is always:', options: ['Equal to μsN', 'Less than or equal to μsN', 'Greater than kinetic friction', 'Proportional to velocity'], correctAnswer: 1, explanation: 'Static friction adjusts up to a maximum of μsN. It\'s only equal to μsN at the point of impending motion.', domain: 'dynamics', topicSlug: 'friction' },
  { question: 'Two objects are connected by a massless string over a frictionless pulley (Atwood machine). They accelerate because:', options: ['The total force is zero', 'The net force on the system is the difference in their weights', 'Tension is different on each side', 'Gravity is different for each mass'], correctAnswer: 1, explanation: 'For an Atwood machine: a = (m₁ − m₂)g/(m₁ + m₂). The net force is the weight difference.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'Newton\'s first law (inertia) states:', options: ['F = ma', 'Every action has an equal and opposite reaction', 'An object maintains its state of motion unless a net force acts on it', 'Force equals the rate of change of momentum'], correctAnswer: 2, explanation: 'The law of inertia: without a net external force, an object remains at rest or moves at constant velocity.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A block slides down a frictionless incline at angle θ. Its acceleration is:', options: ['g', 'g sin θ', 'g cos θ', 'g tan θ'], correctAnswer: 1, explanation: 'On a frictionless incline, the component of gravity along the surface is mg sin θ, so a = g sin θ.', domain: 'dynamics', topicSlug: 'friction' },
  { question: 'A 2000 kg car accelerates from 0 to 25 m/s in 10 s. The net force on the car is:', options: ['500 N', '2500 N', '5000 N', '50000 N'], correctAnswer: 2, explanation: 'F = ma = 2000(25/10) = 2000(2.5) = 5000 N.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'Two forces of 3 N and 4 N act perpendicular to each other on an object. The net force magnitude is:', options: ['1 N', '5 N', '7 N', '12 N'], correctAnswer: 1, explanation: 'F_net = √(3² + 4²) = √(9 + 16) = √25 = 5 N.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A 50 kg person stands on a scale in an elevator moving at constant velocity. The scale reads:', options: ['0 N', '250 N', '490 N', '980 N'], correctAnswer: 2, explanation: 'At constant velocity, a = 0, so N = mg = 50(9.8) = 490 N.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'The coefficient of kinetic friction is typically:', options: ['Greater than the coefficient of static friction', 'Equal to the coefficient of static friction', 'Less than the coefficient of static friction', 'Dependent on the area of contact'], correctAnswer: 2, explanation: 'Kinetic friction is generally less than maximum static friction for the same surfaces.', domain: 'dynamics', topicSlug: 'friction' },
  { question: 'An object in translational equilibrium must have:', options: ['Zero velocity', 'Zero acceleration', 'Maximum friction', 'Zero mass'], correctAnswer: 1, explanation: 'ΣF = 0 means a = 0. The object can still move at constant velocity.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A 3 kg block hangs from a string attached to the ceiling. The tension in the string is:', options: ['3 N', '9.8 N', '29.4 N', '0 N'], correctAnswer: 2, explanation: 'In equilibrium: T = mg = 3(9.8) = 29.4 N.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A force is applied to push a heavy crate but it does not move. The static friction force equals:', options: ['Zero', 'The applied force', 'μsN', 'mg'], correctAnswer: 1, explanation: 'Static friction matches the applied force up to its maximum (μsN). Since the crate doesn\'t move, fs = F_applied.', domain: 'dynamics', topicSlug: 'friction' },
  { question: 'When you push against a wall and nothing moves, the reaction force is:', options: ['Gravity', 'The wall pushing back on you', 'Friction with the floor', 'Your weight'], correctAnswer: 1, explanation: 'Newton\'s third law: the wall exerts an equal and opposite force on you.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'The free-body diagram for an object sliding down a rough incline includes:', options: ['Only gravity', 'Gravity and normal force only', 'Gravity, normal force, and kinetic friction', 'Gravity and friction only'], correctAnswer: 2, explanation: 'Three forces act: gravity (downward), normal force (perpendicular to surface), and kinetic friction (opposing motion up the incline).', domain: 'dynamics', topicSlug: 'friction' },
  { question: 'If the net force on a 10 kg object is zero, the object:', options: ['Must be at rest', 'Must be moving at constant speed', 'Could be at rest or moving at constant velocity', 'Must be accelerating'], correctAnswer: 2, explanation: 'Newton\'s first law: zero net force means zero acceleration — the object can be at rest or moving at constant velocity.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'The weight of a 10 kg object on the Moon (g ≈ 1.6 m/s²) is:', options: ['10 N', '16 N', '98 N', '160 N'], correctAnswer: 1, explanation: 'W = mg = 10(1.6) = 16 N (compared to 98 N on Earth).', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  { question: 'A 5 kg object on a frictionless surface has a 10 N horizontal force applied. After 4 seconds, its velocity is:', options: ['2 m/s', '4 m/s', '8 m/s', '20 m/s'], correctAnswer: 2, explanation: 'a = F/m = 10/5 = 2 m/s². v = at = 2(4) = 8 m/s.', domain: 'dynamics', topicSlug: 'newtons-first-second-laws' },
  // ---- Circular Motion Gravity ----
  { question: 'An object in uniform circular motion has a constant:', options: ['Velocity', 'Acceleration', 'Speed', 'Net force direction'], correctAnswer: 2, explanation: 'In uniform circular motion speed is constant but velocity changes direction continuously.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'The centripetal acceleration of an object moving in a circle of radius r at speed v is:', options: ['v/r', 'v²/r', 'vr', 'v²r'], correctAnswer: 1, explanation: 'Centripetal acceleration ac = v²/r, directed toward the center of the circle.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'Newton\'s law of gravitation states that gravitational force is proportional to:', options: ['The sum of the masses', 'The product of the masses divided by distance squared', 'The difference of the masses', 'Mass times distance'], correctAnswer: 1, explanation: 'F = Gm₁m₂/r². Force is proportional to the product of masses and inversely proportional to distance squared.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'A satellite in circular orbit has its centripetal force provided by:', options: ['Its engines', 'Gravity', 'Normal force', 'Tension'], correctAnswer: 1, explanation: 'For a satellite, gravity provides the centripetal force: mg = mv²/r.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'If the radius of a circular orbit doubles (same speed), the centripetal acceleration:', options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'], correctAnswer: 1, explanation: 'ac = v²/r. If r doubles and v stays the same, ac is halved.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'At the top of a vertical loop, the minimum speed for an object to maintain contact is found by setting:', options: ['N = mg', 'mg = mv²/r (with N = 0)', 'T = mg', 'F = 0'], correctAnswer: 1, explanation: 'At the minimum speed, normal force is zero: gravity alone provides centripetal force, so mg = mv²/r → v = √(gr).', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'The gravitational field strength g at distance r from Earth\'s center is:', options: ['GM/r', 'GM/r²', 'GMr', 'GM/r³'], correctAnswer: 1, explanation: 'g = GM/r², which decreases as the square of the distance from the center.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'A car rounds a flat, unbanked curve. The force providing centripetal acceleration is:', options: ['Gravity', 'Normal force', 'Friction', 'The engine force'], correctAnswer: 2, explanation: 'On a flat curve, static friction between the tires and road provides the centripetal force.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'If you double the speed of an object in circular motion (same radius), the centripetal force:', options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'], correctAnswer: 1, explanation: 'F = mv²/r. Doubling v → F increases by factor of 4.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'The period of a satellite in circular orbit depends on:', options: ['Mass of the satellite', 'Orbital radius and mass of the planet', 'Only the satellite\'s speed', 'Mass of satellite and speed only'], correctAnswer: 1, explanation: 'From Kepler\'s third law: T² = 4π²r³/(GM). Period depends on orbital radius and planet mass.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'An object moves in a circle at constant speed. The direction of its acceleration is:', options: ['Tangent to the circle', 'Toward the center', 'Away from the center', 'In the direction of motion'], correctAnswer: 1, explanation: 'Centripetal acceleration always points toward the center of the circular path.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'If the distance between two objects doubles, the gravitational force between them:', options: ['Doubles', 'Halves', 'Becomes one-quarter', 'Quadruples'], correctAnswer: 2, explanation: 'F ∝ 1/r². Doubling r reduces F to (1/2)² = 1/4 of the original.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'The centripetal force on an object in circular motion is:', options: ['A new type of fundamental force', 'The net inward force (could be gravity, tension, friction, etc.)', 'Always equal to mg', 'Always provided by friction'], correctAnswer: 1, explanation: 'Centripetal force is not a new force — it is the net radial force provided by whichever forces act inward.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'A ball on a string swings in a vertical circle. The string tension is greatest at:', options: ['The top', 'The bottom', 'The sides', 'Tension is constant'], correctAnswer: 1, explanation: 'At the bottom: T - mg = mv²/r → T = mv²/r + mg. Speed is also greatest at the bottom.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'Kepler\'s third law relates:', options: ['Period and eccentricity', 'Period squared and orbital radius cubed', 'Speed and mass', 'Force and distance'], correctAnswer: 1, explanation: 'T² ∝ r³ — the square of the orbital period is proportional to the cube of the semi-major axis.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'Astronauts in the ISS appear weightless because:', options: ['There is no gravity in space', 'Gravity is very weak at that altitude', 'They are in continuous free fall along with the station', 'The ISS shields them from gravity'], correctAnswer: 2, explanation: 'The ISS and astronauts are in free fall (orbiting), so they experience apparent weightlessness despite gravity being ~90% of surface value.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'A car rounds a banked curve with no friction. The centripetal force is provided by:', options: ['Gravity alone', 'The normal force alone', 'A component of the normal force', 'Friction'], correctAnswer: 2, explanation: 'On a frictionless banked curve, the horizontal component of the normal force (N sin θ) provides the centripetal force.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'The escape velocity from a planet depends on:', options: ['Only the object\'s mass', 'The planet\'s mass and radius', 'Only the planet\'s radius', 'The object\'s initial height'], correctAnswer: 1, explanation: 'v_esc = √(2GM/R). It depends on the planet\'s mass M and radius R, not the object\'s mass.', domain: 'circular-motion-gravity', topicSlug: 'universal-gravitation' },
  { question: 'A coin on a turntable flies off when the rotation speed increases because:', options: ['Gravity decreases', 'The required centripetal force exceeds maximum static friction', 'The normal force decreases', 'The coin gains too much kinetic energy'], correctAnswer: 1, explanation: 'The required centripetal force (mω²r) increases with ω. When it exceeds μsN, friction can\'t hold the coin.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  { question: 'For an object in uniform circular motion, the work done by the centripetal force is:', options: ['Positive', 'Negative', 'Zero', 'Equal to ½mv²'], correctAnswer: 2, explanation: 'The centripetal force is always perpendicular to the velocity, so W = Fd cos 90° = 0.', domain: 'circular-motion-gravity', topicSlug: 'uniform-circular-motion' },
  // ---- Energy ----
  { question: 'The work-energy theorem states:', options: ['Work equals force times distance always', 'The net work on an object equals its change in kinetic energy', 'Energy is always conserved', 'Work done by friction is always positive'], correctAnswer: 1, explanation: 'W_net = ΔKE = ½mv² − ½mv₀². Net work equals the change in kinetic energy.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'A spring compressed by x stores potential energy equal to:', options: ['kx', '½kx', 'kx²', '½kx²'], correctAnswer: 3, explanation: 'Elastic potential energy PE = ½kx², where k is the spring constant.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'If a ball is dropped from height h, its speed just before hitting the ground is:', options: ['√(gh)', '√(2gh)', '2gh', 'gh'], correctAnswer: 1, explanation: 'Conservation of energy: mgh = ½mv² → v = √(2gh).', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'Work done by a constant force at 90° to the displacement is:', options: ['Maximum', 'Positive', 'Negative', 'Zero'], correctAnswer: 3, explanation: 'W = Fd cos θ. When θ = 90°, cos 90° = 0, so no work is done.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'Power is defined as:', options: ['Force × displacement', 'Work / time', 'Energy × time', 'Force / acceleration'], correctAnswer: 1, explanation: 'Power = W/t = rate of doing work, measured in watts (J/s).', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'In a system where only conservative forces act, which quantity is conserved?', options: ['Kinetic energy only', 'Potential energy only', 'Total mechanical energy (KE + PE)', 'Momentum only'], correctAnswer: 2, explanation: 'When only conservative forces (gravity, springs) do work, total mechanical energy KE + PE is conserved.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'Doubling the speed of an object multiplies its kinetic energy by:', options: ['2', '4', '8', '√2'], correctAnswer: 1, explanation: 'KE = ½mv². If v doubles, KE = ½m(2v)² = 4(½mv²), so KE quadruples.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'A roller coaster car starts from rest at the top of a 20 m hill. Ignoring friction, its speed at the bottom is approximately:', options: ['10 m/s', '14 m/s', '20 m/s', '40 m/s'], correctAnswer: 2, explanation: 'v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s (using g ≈ 10 m/s²).', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'A 10 kg box is lifted 3 m vertically. The work done against gravity is:', options: ['30 J', '98 J', '294 J', '300 J'], correctAnswer: 2, explanation: 'W = mgh = 10(9.8)(3) = 294 J.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'Friction does negative work on a sliding object because:', options: ['It always points upward', 'The friction force is opposite to the displacement', 'It reduces mass', 'Friction has no direction'], correctAnswer: 1, explanation: 'W = Fd cos 180° = −Fd. The force of friction opposes the direction of motion.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'A pendulum swings from its highest point to its lowest. The primary energy transformation is:', options: ['KE → PE', 'PE → KE', 'KE → thermal energy', 'PE → thermal energy'], correctAnswer: 1, explanation: 'As the pendulum descends, gravitational PE converts to kinetic energy.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'An object slides down a rough incline. Compared to a frictionless incline of the same height, it reaches the bottom with:', options: ['The same speed', 'Greater speed', 'Less speed', 'The same kinetic energy'], correctAnswer: 2, explanation: 'Friction converts some PE to thermal energy, so less KE (and lower speed) at the bottom.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'The SI unit of energy is:', options: ['Newton', 'Watt', 'Joule', 'Pascal'], correctAnswer: 2, explanation: 'Energy is measured in joules (J). 1 J = 1 N·m = 1 kg·m²/s².', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'A spring with k = 200 N/m is stretched 0.1 m. The elastic PE stored is:', options: ['1 J', '2 J', '10 J', '20 J'], correctAnswer: 0, explanation: 'PE = ½kx² = ½(200)(0.1)² = ½(200)(0.01) = 1 J.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'Two identical cars travel at 20 m/s and 40 m/s. The ratio of their kinetic energies is:', options: ['1:2', '1:4', '1:8', '2:1'], correctAnswer: 1, explanation: 'KE ∝ v². (20)²:(40)² = 400:1600 = 1:4.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'When a ball bounces and reaches a lower height each time, the \'lost\' energy primarily becomes:', options: ['Nuclear energy', 'Gravitational PE', 'Thermal energy and sound', 'The energy is destroyed'], correctAnswer: 2, explanation: 'Energy is conserved but converted to thermal energy (heat in the ball and floor) and sound waves.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'A 1500 W motor lifts a 50 kg load. The speed at which it lifts the load is approximately:', options: ['0.33 m/s', '3.06 m/s', '15 m/s', '30 m/s'], correctAnswer: 1, explanation: 'P = Fv → 1500 = (50 × 9.8)v → v = 1500/490 ≈ 3.06 m/s.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'A force of 50 N pushes an object 10 m at 60° to the direction of motion. The work done is:', options: ['500 J', '250 J', '433 J', '0 J'], correctAnswer: 1, explanation: 'W = Fd cos θ = 50(10) cos 60° = 500(0.5) = 250 J.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  { question: 'Total mechanical energy is conserved only when:', options: ['Speed is constant', 'No non-conservative forces do work', 'The object moves in a circle', 'Mass is constant'], correctAnswer: 1, explanation: 'Non-conservative forces (like friction) convert mechanical energy to other forms. Without them, KE + PE = constant.', domain: 'energy', topicSlug: 'conservation-of-energy' },
  { question: 'An engine does 6000 J of work in 3 seconds. Its power output is:', options: ['2000 W', '18000 W', '6000 W', '3000 W'], correctAnswer: 0, explanation: 'P = W/t = 6000/3 = 2000 W.', domain: 'energy', topicSlug: 'work-and-kinetic-energy' },
  // ---- Momentum ----
  { question: 'Impulse is equal to:', options: ['Force × time = change in momentum', 'Force × distance', 'Mass × acceleration', 'Energy / time'], correctAnswer: 0, explanation: 'Impulse J = FΔt = Δp (change in momentum). This is the impulse-momentum theorem.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'In a perfectly inelastic collision, which is conserved?', options: ['Kinetic energy only', 'Momentum only', 'Both kinetic energy and momentum', 'Neither'], correctAnswer: 1, explanation: 'In perfectly inelastic collisions, objects stick together. Momentum is conserved but kinetic energy is not.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'A 2 kg ball moving at 3 m/s collides head-on with a 1 kg ball at rest and they stick together. Their final speed is:', options: ['1 m/s', '2 m/s', '3 m/s', '6 m/s'], correctAnswer: 1, explanation: 'Conservation of momentum: 2(3) + 1(0) = (2+1)v → v = 6/3 = 2 m/s.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'A firecracker at rest explodes into two pieces. Their total momentum after the explosion is:', options: ['Greater than zero', 'Zero', 'Dependent on the masses', 'Equal to the kinetic energy'], correctAnswer: 1, explanation: 'Initial momentum was zero. By conservation of momentum, total momentum remains zero after the explosion.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'In an elastic collision between two identical masses where one is initially at rest, the first mass:', options: ['Bounces backward', 'Stops completely', 'Continues at half its speed', 'Speeds up'], correctAnswer: 1, explanation: 'In a 1D elastic collision between equal masses, the moving mass stops and the stationary mass takes on its full velocity.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'A longer collision time (like an airbag) reduces:', options: ['Impulse', 'Change in momentum', 'The average force experienced', 'Total energy'], correctAnswer: 2, explanation: 'J = FΔt = Δp. If Δp is fixed but Δt increases, the average force F decreases — that is the purpose of airbags.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'The center of mass of a system with no external forces:', options: ['Accelerates toward the heavier object', 'Moves at constant velocity', 'Is always at rest', 'Oscillates'], correctAnswer: 1, explanation: 'Without external forces, the center of mass maintains constant velocity (Newton\'s first law for systems).', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'In which type of collision is kinetic energy conserved?', options: ['Perfectly inelastic', 'Elastic', 'Explosive', 'All collisions'], correctAnswer: 1, explanation: 'By definition, elastic collisions conserve both momentum and kinetic energy.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'The momentum of a 4 kg object moving at 5 m/s is:', options: ['9 kg·m/s', '20 kg·m/s', '1.25 kg·m/s', '0.8 kg·m/s'], correctAnswer: 1, explanation: 'p = mv = 4(5) = 20 kg·m/s.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'A 0.5 kg ball moving at 6 m/s is stopped in 0.01 s. The average force on it is:', options: ['30 N', '300 N', '3 N', '3000 N'], correctAnswer: 1, explanation: 'F = Δp/Δt = (0.5 × 6)/0.01 = 3/0.01 = 300 N.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'Two objects with equal and opposite momenta collide and stick together. Their final velocity is:', options: ['Equal to the average speed', 'Zero', 'Equal to the faster object\'s velocity', 'Indeterminate'], correctAnswer: 1, explanation: 'p_total = +p + (−p) = 0. Since (m₁ + m₂)v_f = 0, v_f = 0.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'In an explosion (internal forces only), the total momentum of the system:', options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'], correctAnswer: 2, explanation: 'Internal forces cannot change the total momentum of a system. Only external forces can.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'A 1000 kg car at 20 m/s hits a 2000 kg truck at rest and they lock bumpers. Their final speed is approximately:', options: ['20 m/s', '10 m/s', '6.67 m/s', '13.3 m/s'], correctAnswer: 2, explanation: '1000(20) + 2000(0) = 3000v → v = 20000/3000 ≈ 6.67 m/s.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'The area under a force-time graph equals:', options: ['Work', 'Power', 'Impulse', 'Momentum'], correctAnswer: 2, explanation: 'Impulse J = ∫F dt, which is the area under the F-t graph.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'In a 2D collision, momentum is conserved:', options: ['Only in the x-direction', 'Only in the y-direction', 'Independently in both x and y directions', 'Only along the line of impact'], correctAnswer: 2, explanation: 'Momentum is a vector; conservation applies independently to each component.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'A golf club exerts a force on a ball. During contact, the force on the club from the ball is:', options: ['Less than the force on the ball', 'Equal in magnitude and opposite in direction', 'Greater than the force on the ball', 'Unrelated to the force on the ball'], correctAnswer: 1, explanation: 'Newton\'s third law: action-reaction forces are always equal in magnitude and opposite in direction.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'After a perfectly inelastic collision, the kinetic energy of the system:', options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'], correctAnswer: 1, explanation: 'In inelastic collisions, some KE is converted to thermal energy, sound, and deformation.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'A rocket propels itself forward by:', options: ['Pushing against the atmosphere', 'Expelling exhaust gas backward (conservation of momentum)', 'Using gravity assists', 'Magnetic repulsion'], correctAnswer: 1, explanation: 'Rockets work by conservation of momentum: expelling mass backward gives the rocket forward momentum.', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  { question: 'Two identical balls undergo a head-on elastic collision with equal and opposite velocities. After the collision, each ball:', options: ['Stops', 'Reverses direction with the same speed', 'Continues in the same direction', 'Moves perpendicular to the original direction'], correctAnswer: 1, explanation: 'In an elastic head-on collision of equal masses with equal speeds, each ball reverses direction.', domain: 'momentum', topicSlug: 'collisions' },
  { question: 'The unit of impulse is equivalent to:', options: ['kg·m/s² (same as force)', 'N·s (same as kg·m/s)', 'J (same as energy)', 'W (same as power)'], correctAnswer: 1, explanation: 'Impulse = FΔt has units of N·s, which equals kg·m/s (units of momentum).', domain: 'momentum', topicSlug: 'momentum-and-impulse' },
  // ---- Simple Harmonic Motion ----
  { question: 'In simple harmonic motion, the restoring force is proportional to:', options: ['Velocity', 'Displacement from equilibrium', 'Acceleration only', 'Mass'], correctAnswer: 1, explanation: 'SHM requires F = −kx: the restoring force is proportional to displacement and directed toward equilibrium.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'The period of a simple pendulum depends on:', options: ['Mass and length', 'Length and gravitational acceleration only', 'Mass and amplitude', 'Amplitude only'], correctAnswer: 1, explanation: 'T = 2π√(L/g). Period depends only on length and g, not on mass or (small) amplitude.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'A standing wave on a string fixed at both ends has nodes at the endpoints. The fundamental frequency has:', options: ['No nodes', 'One antinode in the middle', 'Two antinodes', 'Three antinodes'], correctAnswer: 1, explanation: 'The fundamental mode (first harmonic) has nodes at both ends and one antinode at the center (half wavelength).', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'The period of a mass-spring system is:', options: ['T = 2π√(m/k)', 'T = 2π√(k/m)', 'T = 2π√(L/g)', 'T = 1/f²'], correctAnswer: 0, explanation: 'For a mass on a spring: T = 2π√(m/k). Period increases with mass and decreases with stiffer springs.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'The speed of a wave on a string increases when:', options: ['Tension increases', 'Mass per unit length increases', 'Frequency decreases', 'Amplitude increases'], correctAnswer: 0, explanation: 'v = √(T/μ). Greater tension increases wave speed; greater linear density decreases it.', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'At the equilibrium position of SHM, the object has:', options: ['Maximum displacement and zero velocity', 'Maximum velocity and zero displacement', 'Maximum acceleration', 'Zero kinetic energy'], correctAnswer: 1, explanation: 'At equilibrium, displacement is zero (max velocity) and acceleration is zero (no restoring force).', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'Resonance occurs when:', options: ['Friction is very high', 'The driving frequency matches the natural frequency of the system', 'The amplitude is zero', 'The system is critically damped'], correctAnswer: 1, explanation: 'Resonance produces maximum amplitude when the external driving frequency equals the system\'s natural frequency.', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'Doubling the mass on a spring changes the period by a factor of:', options: ['2', '√2', '½', '4'], correctAnswer: 1, explanation: 'T = 2π√(m/k). Doubling m → T multiplied by √2.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'At maximum displacement in SHM, the magnitude of the acceleration is:', options: ['Zero', 'Maximum', 'Equal to the velocity', 'Minimum but nonzero'], correctAnswer: 1, explanation: 'a = −ω²x. At maximum x (amplitude), |a| = ω²A is maximum.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'The total energy in SHM equals:', options: ['½kA² (where A is amplitude)', 'mgh', '½mv_max²', 'Both A and C are correct'], correctAnswer: 3, explanation: 'Total energy E = ½kA² = ½mv_max². It is constant and equals the maximum PE or maximum KE.', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'The frequency of a pendulum on the Moon (g = 1.6 m/s²) compared to Earth is:', options: ['Higher', 'Lower', 'The same', 'Cannot be determined'], correctAnswer: 1, explanation: 'f = (1/2π)√(g/L). Smaller g on the Moon means lower frequency (longer period).', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'Energy in SHM continuously converts between:', options: ['KE and gravitational PE only', 'KE and elastic PE', 'Thermal and KE', 'PE and momentum'], correctAnswer: 1, explanation: 'In a mass-spring system, energy oscillates between kinetic energy and elastic potential energy.', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'If the amplitude of SHM is doubled, the maximum speed:', options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'], correctAnswer: 0, explanation: 'v_max = Aω. Doubling A doubles v_max.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'A wave with frequency 5 Hz and wavelength 2 m has a speed of:', options: ['2.5 m/s', '10 m/s', '0.4 m/s', '7 m/s'], correctAnswer: 1, explanation: 'v = fλ = 5(2) = 10 m/s.', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'Two oscillators have the same amplitude but different frequencies (f₁ = 2f₂). The oscillator with higher frequency has:', options: ['Greater maximum speed', 'Lesser maximum speed', 'The same maximum speed', 'Greater period'], correctAnswer: 0, explanation: 'v_max = A(2πf). Higher frequency → greater maximum speed (for the same amplitude).', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'Superposition of waves means:', options: ['Waves cancel completely', 'Waves add algebraically at each point in space', 'Waves always form standing waves', 'Wave energy is destroyed'], correctAnswer: 1, explanation: 'The principle of superposition: when waves overlap, the net displacement is the algebraic sum at each point.', domain: 'simple-harmonic-motion', topicSlug: 'energy-in-shm' },
  { question: 'The phase difference between displacement and acceleration in SHM is:', options: ['0° (in phase)', '90°', '180° (out of phase)', '270°'], correctAnswer: 2, explanation: 'a = −ω²x. Displacement and acceleration are 180° out of phase (when x is max positive, a is max negative).', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  { question: 'In SHM, the motion of a mass on a spring is periodic because:', options: ['It moves in a circle', 'The restoring force is constant', 'The restoring force is proportional to displacement from equilibrium', 'Gravity pulls it back'], correctAnswer: 2, explanation: 'SHM arises when F = −kx: the proportional restoring force creates a sinusoidal oscillation.', domain: 'simple-harmonic-motion', topicSlug: 'introduction-to-shm' },
  // ---- Torque Rotation ----
  { question: 'Torque is calculated as:', options: ['Force × distance (parallel)', 'Force × lever arm (perpendicular distance)', 'Mass × angular acceleration', 'Both B and C are correct'], correctAnswer: 3, explanation: 'τ = rF sin θ = r⊥F (lever arm method) and τ = Iα (Newton\'s second law for rotation). Both are valid.', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'For an object in static equilibrium:', options: ['Net force is zero only', 'Net torque is zero only', 'Both net force and net torque are zero', 'Velocity must be zero'], correctAnswer: 2, explanation: 'Static equilibrium requires both ΣF = 0 (translational) and Στ = 0 (rotational).', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'The moment of inertia of an object depends on:', options: ['Mass only', 'Shape only', 'Mass distribution relative to the axis of rotation', 'Angular velocity'], correctAnswer: 2, explanation: 'I = Σmr². Moment of inertia depends on both the mass and how it is distributed relative to the rotation axis.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'Angular momentum is conserved when:', options: ['No net external force acts', 'No net external torque acts', 'The object moves in a straight line', 'Speed is constant'], correctAnswer: 1, explanation: 'Angular momentum L = Iω is conserved when the net external torque on the system is zero.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'A spinning figure skater pulls in their arms. Their angular velocity:', options: ['Decreases', 'Increases', 'Stays the same', 'Goes to zero'], correctAnswer: 1, explanation: 'Pulling arms in reduces I. Since L = Iω is conserved, ω must increase.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'A wrench applies the most torque when the force is applied:', options: ['Parallel to the wrench', 'At the pivot point', 'Perpendicular to the wrench at the end', 'At any angle near the pivot'], correctAnswer: 2, explanation: 'τ = rF sin θ is maximized when θ = 90° (perpendicular) and r is maximum (far from pivot).', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'The rotational analog of F = ma is:', options: ['L = Iω', 'τ = Iα', 'KE = ½Iω²', 'W = τθ'], correctAnswer: 1, explanation: 'τ = Iα is Newton\'s second law for rotation: net torque equals moment of inertia times angular acceleration.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'A seesaw is balanced when a 40 kg child sits 2 m from the pivot. Where must a 20 kg child sit?', options: ['1 m from the pivot', '2 m from the pivot', '4 m from the pivot', '3 m from the pivot'], correctAnswer: 2, explanation: 'Balance: 40(2) = 20(x) → x = 4 m. Torques must be equal and opposite.', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'The angular velocity of any point on a rigid rotating disc is:', options: ['Greater at the edge', 'Greater at the center', 'The same everywhere on the disc', 'Zero at the center'], correctAnswer: 2, explanation: 'All points on a rigid body share the same angular velocity ω, though their linear speeds differ.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'Rolling without slipping requires:', options: ['Zero friction', 'Static friction at the contact point', 'Kinetic friction at the contact point', 'Air resistance'], correctAnswer: 1, explanation: 'Rolling without slipping involves static friction (no relative sliding) at the contact point with the surface.', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'A solid sphere and a hollow sphere of the same mass and radius roll down an incline. Which reaches the bottom first?', options: ['The solid sphere', 'The hollow sphere', 'They arrive at the same time', 'Cannot be determined without knowing the masses'], correctAnswer: 0, explanation: 'The solid sphere has a smaller moment of inertia ratio (I = 2/5 mr² vs 2/3 mr²), so more energy goes to translation.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'The SI unit of torque is:', options: ['Joule', 'Newton-meter', 'Watt', 'Pascal'], correctAnswer: 1, explanation: 'Torque is measured in newton-meters (N·m). Though dimensionally the same as joules, the name N·m is used for torque.', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'A door is easiest to open when you push:', options: ['Near the hinge', 'At the center of the door', 'At the edge farthest from the hinge', 'Anywhere — location does not matter'], correctAnswer: 2, explanation: 'τ = rF. Pushing farthest from the hinge maximizes the lever arm r, producing the most torque for a given force.', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'The rotational kinetic energy of a spinning object is:', options: ['½mv²', 'Iω', '½Iω²', 'Iα'], correctAnswer: 2, explanation: 'Rotational KE = ½Iω², analogous to translational KE = ½mv².', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'When a spinning top slows down due to friction, angular momentum is:', options: ['Created from nothing', 'Transferred to the Earth via frictional torque', 'Destroyed', 'Converted to linear momentum'], correctAnswer: 1, explanation: 'The frictional torque transfers angular momentum from the top to the Earth.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'A uniform rod pivoted at one end has a moment of inertia of mL²/3. Pivoted at the center, it is mL²/12. The ratio (end to center) is:', options: ['1:1', '2:1', '4:1', '3:1'], correctAnswer: 2, explanation: '(mL²/3)/(mL²/12) = 12/3 = 4. Pivoting at the end gives 4× the moment of inertia.', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  { question: 'For a ladder leaning against a frictionless wall, the friction at the floor must be directed:', options: ['Upward', 'Toward the wall', 'Away from the wall', 'There is no friction needed'], correctAnswer: 1, explanation: 'The wall pushes the ladder outward horizontally. Floor friction must point toward the wall to balance it.', domain: 'torque-rotation', topicSlug: 'torque-and-equilibrium' },
  { question: 'If the net torque on a system is zero, the angular velocity:', options: ['Must be zero', 'Must be constant (could be zero or nonzero)', 'Must be increasing', 'Must be decreasing'], correctAnswer: 1, explanation: 'Στ = 0 → α = 0, so ω does not change. It remains at whatever value it has (including possibly zero).', domain: 'torque-rotation', topicSlug: 'angular-momentum' },
  // ---- Fluids (added 2024+ AP Physics 1 framework) ----
  { question: 'Pressure in a static fluid depends on:', options: ['Container shape', 'Surface area of the container', 'Depth and fluid density', 'Total volume of fluid'], correctAnswer: 2, explanation: 'For a static fluid, P = P₀ + ρgh — pressure depends only on depth h and density ρ, not container shape.', domain: 'fluids', topicSlug: 'fluid-pressure' },
  { question: 'A diver descends 10 m in fresh water (ρ = 1000 kg/m³). The additional pressure on the diver is approximately:', options: ['1,000 Pa', '10,000 Pa', '100,000 Pa', '1,000,000 Pa'], correctAnswer: 2, explanation: 'ΔP = ρgh = 1000 × 10 × 10 = 100,000 Pa (≈ 1 atm of additional pressure per 10 m of fresh water).', domain: 'fluids', topicSlug: 'fluid-pressure' },
  { question: 'A 50 cm² piston pushes down on a hydraulic fluid with 100 N. A second piston on the same closed system has area 500 cm². The maximum lift force at the second piston is:', options: ['100 N', '500 N', '1,000 N', '5,000 N'], correctAnswer: 2, explanation: 'Pascal\u2019s principle: P₁ = P₂. F₂ = F₁ × A₂/A₁ = 100 × 500/50 = 1,000 N.', domain: 'fluids', topicSlug: 'fluid-pressure' },
  { question: 'Atmospheric pressure at sea level is approximately 10⁵ Pa. The downward force on a tabletop measuring 1 m × 0.5 m due to the atmosphere is roughly:', options: ['5 × 10² N', '5 × 10⁴ N', '5 × 10⁵ N', '1 × 10⁵ N'], correctAnswer: 1, explanation: 'F = PA = 10⁵ × (1 × 0.5) = 5 × 10⁴ N. (We don\u2019t feel it because pressure also pushes up from below.)', domain: 'fluids', topicSlug: 'fluid-pressure' },
  { question: 'Two open containers of different shapes hold water at the same depth. The pressure at the bottom of each container:', options: ['Is greater in the wider container', 'Is greater in the narrower container', 'Is the same in both', 'Depends on the total weight of water'], correctAnswer: 2, explanation: 'Static fluid pressure depends only on depth and density, not container shape — this is the hydrostatic paradox.', domain: 'fluids', topicSlug: 'fluid-pressure' },
  { question: 'A mercury barometer reads 760 mm. If the same instrument were filled with water (ρ ≈ 1/13.6 that of mercury) instead, the column height needed to balance atmospheric pressure would be approximately:', options: ['760 mm', '760 cm', '10.3 m', '76 m'], correctAnswer: 2, explanation: 'Pressure must match: ρ_Hg g h_Hg = ρ_w g h_w → h_w = 0.76 × 13.6 ≈ 10.3 m.', domain: 'fluids', topicSlug: 'fluid-pressure' },
  { question: 'Archimedes\u2019 principle states that the buoyant force on a submerged object equals:', options: ['The weight of the object', 'The mass of the displaced fluid', 'The weight of the displaced fluid', 'The volume of the object times g'], correctAnswer: 2, explanation: 'F_buoy = ρ_fluid × V_displaced × g = weight of the displaced fluid.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'A 2 kg block of density 500 kg/m³ is placed in water (ρ = 1000 kg/m³). What fraction of the block is submerged when it floats?', options: ['1/4', '1/2', '3/4', 'It sinks'], correctAnswer: 1, explanation: 'Floating: ρ_obj/ρ_fluid of the volume is submerged. 500/1000 = 1/2.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'An object weighs 50 N in air and 30 N when fully submerged in water. The buoyant force on it is:', options: ['20 N', '30 N', '50 N', '80 N'], correctAnswer: 0, explanation: 'F_buoy = apparent weight loss = 50 − 30 = 20 N.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'Two solid balls of equal volume but different masses are fully submerged in water. The buoyant forces on them are:', options: ['Equal', 'Greater on the heavier ball', 'Greater on the lighter ball', 'Zero on each'], correctAnswer: 0, explanation: 'F_buoy depends on the volume of fluid displaced, not the object\u2019s mass. Equal volumes → equal buoyant forces.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'A steel ship floats in seawater because:', options: ['Steel becomes less dense in salt water', 'The hull shape displaces a weight of seawater equal to the ship\u2019s weight', 'Air pressure pushes up on the ship', 'Surface tension supports it'], correctAnswer: 1, explanation: 'A hollow hull displaces a large volume of water — its average density (mass/total volume) is less than seawater.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'A block floats with 80% submerged in fluid X. The same block floats with 60% submerged in fluid Y. Which fluid is denser?', options: ['Fluid X', 'Fluid Y', 'They have the same density', 'Cannot be determined'], correctAnswer: 1, explanation: 'Less submersion = denser fluid (more buoyancy per unit volume). Fluid Y supports the block with less submerged volume.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'A scuba diver is neutrally buoyant. To rise without swimming, the diver should:', options: ['Exhale air to reduce lung volume', 'Inhale to increase lung volume', 'Carry more weights', 'Swim downward harder'], correctAnswer: 1, explanation: 'Inhaling expands the diver\u2019s volume, increasing displaced water and buoyant force above weight, causing the diver to rise.', domain: 'fluids', topicSlug: 'buoyancy' },
  { question: 'For an ideal fluid in steady flow, the continuity equation A₁v₁ = A₂v₂ expresses conservation of:', options: ['Energy', 'Momentum', 'Mass (volume) flow rate', 'Pressure'], correctAnswer: 2, explanation: 'Mass conservation in an incompressible fluid means the volume flow rate Av is constant along a streamline.', domain: 'fluids', topicSlug: 'fluid-dynamics' },
  { question: 'Water flows through a pipe whose radius narrows from 4 cm to 2 cm. If the speed in the wide section is 1 m/s, the speed in the narrow section is:', options: ['0.25 m/s', '1 m/s', '4 m/s', '16 m/s'], correctAnswer: 2, explanation: 'A₁v₁ = A₂v₂ and A ∝ r². Area ratio 16/4 = 4, so v₂ = 4 × 1 = 4 m/s.', domain: 'fluids', topicSlug: 'fluid-dynamics' },
  { question: 'According to Bernoulli\u2019s equation, in a horizontal pipe where fluid speeds up:', options: ['Pressure increases', 'Pressure decreases', 'Pressure is unchanged', 'Density decreases'], correctAnswer: 1, explanation: 'P + ½ρv² + ρgh = constant. At the same height h, faster v means lower P.', domain: 'fluids', topicSlug: 'fluid-dynamics' },
  { question: 'Why does the roof of a house sometimes lift off in a strong wind?', options: ['Wind blows directly upward on the roof', 'Fast air over the roof has lower pressure than the still air below it, creating a net upward force', 'The roof becomes lighter when wind blows', 'Wind heats the air below the roof'], correctAnswer: 1, explanation: 'Bernoulli effect: high-speed air above lowers the pressure on top, while the higher inside pressure pushes the roof up.', domain: 'fluids', topicSlug: 'fluid-dynamics' },
  { question: 'Bernoulli\u2019s equation applies most accurately to a fluid that is:', options: ['Compressible and viscous', 'Incompressible, steady, and non-viscous', 'Turbulent and gaseous', 'Static and pressurized'], correctAnswer: 1, explanation: 'Bernoulli\u2019s equation assumes ideal flow: incompressible, steady, non-viscous along a streamline.', domain: 'fluids', topicSlug: 'fluid-dynamics' },
]

/* ------------------------------------------------------------------ */
/*  Seeded deterministic shuffle (Linear Congruential Generator)       */
/* ------------------------------------------------------------------ */

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr]
  let s = seed | 0
  const next = () => {
    s = (Math.imul(s, 1664525) + 1013904223) | 0
    return ((s >>> 0) / 0x100000000)
  }
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/* ------------------------------------------------------------------ */
/*  Generator                                                          */
/* ------------------------------------------------------------------ */

export function generateAPPhysics1DiagnosticTest(form: number): APPhysics1DiagnosticTestData {
  const questions: APPhysics1DiagnosticQuestion[] = []

  for (const domain of AP_PHYSICS1_DOMAINS) {
    const pool = AP_PHYSICS1_QUESTION_POOL.filter(q => q.domain === domain.id)
    // Seed uniquely per form + domain so each form gets a different selection
    const shuffled = seededShuffle(pool, form * 7919 + domain.id.charCodeAt(0) * 31)
    const selected = shuffled.slice(0, domain.questionTarget)
    for (const q of selected) {
      questions.push({ question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation, domain: domain.id, topicSlug: q.topicSlug })
    }
  }

  // Shuffle question order (seeded so it is stable for the same form)
  return { form, questions: seededShuffle(questions, form * 104729), domains: AP_PHYSICS1_DOMAINS, totalQuestions: questions.length, timeLimitMinutes: 45 }
}

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

export function scoreAPPhysics1Diagnostic(
  form: number,
  questions: APPhysics1DiagnosticQuestion[],
  answers: Record<number, number>,
): APPhysics1DiagnosticResults {
  const domainResults: APPhysics1DomainResult[] = AP_PHYSICS1_DOMAINS.map(domain => {
    const domainQs = questions.map((q, i) => ({ q, i })).filter(({ q }) => q.domain === domain.id)
    const correct = domainQs.filter(({ i }) => answers[i] !== undefined && answers[i] === questions[i].correctAnswer).length
    const total = domainQs.length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    const level: 'strong' | 'moderate' | 'weak' = percentage >= 75 ? 'strong' : percentage >= 50 ? 'moderate' : 'weak'
    return { domainId: domain.id, domainName: domain.name, correct, total, percentage, level }
  })

  const totalCorrect = domainResults.reduce((s, d) => s + d.correct, 0)
  const totalQuestions = domainResults.reduce((s, d) => s + d.total, 0)
  const percentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  let estimatedAPScore: number
  if (percentage >= 80) estimatedAPScore = 5
  else if (percentage >= 65) estimatedAPScore = 4
  else if (percentage >= 50) estimatedAPScore = 3
  else if (percentage >= 35) estimatedAPScore = 2
  else estimatedAPScore = 1

  const weakAreas = domainResults.filter(d => d.level === 'weak').map(d => d.domainName)
  const moderateAreas = domainResults.filter(d => d.level === 'moderate').map(d => d.domainName)
  const strengths = domainResults.filter(d => d.level === 'strong').map(d => d.domainName)

  // Some legacy domain slugs aren't real Topic records — canonicalize them so
  // recommendation links resolve to live topic/lesson pages (same pattern as SAT).
  const CANONICAL_TOPIC_MAP: Record<string, string> = {
    'fluid-pressure': 'density-and-pressure',
    'buoyancy': 'buoyancy-archimedes-principle',
  }
  const canonicalizeTopicSlug = (s: string) => CANONICAL_TOPIC_MAP[s] ?? s
  const recommendedTopics: APPhysics1RecommendedTopic[] = []
  // Prioritize by exam weight (questionTarget) so highest-impact topics surface first.
  const examWeight = (id: string) => AP_PHYSICS1_DOMAINS.find(d => d.id === id)?.questionTarget ?? 0
  const weakDomainResults = [...domainResults.filter(d => d.level === 'weak')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  const moderateDomainResults = [...domainResults.filter(d => d.level === 'moderate')].sort((a, b) => examWeight(b.domainId) - examWeight(a.domainId))
  for (const wd of weakDomainResults) {
    const domainDef = AP_PHYSICS1_DOMAINS.find(d => d.id === wd.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === wd.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slugs = missedSlugs.size > 0 ? [...missedSlugs].slice(0, 2) : domainDef.topicSlugs.slice(0, 2)
    for (const slug of slugs.map(canonicalizeTopicSlug)) { if (recommendedTopics.length < 5 && !recommendedTopics.some(t => t.slug === slug)) recommendedTopics.push({ slug, name: slugToReadableName(slug), domainId: wd.domainId, priority: 'high' }) }
  }
  for (const md of moderateDomainResults) {
    if (recommendedTopics.length >= 5) break
    const domainDef = AP_PHYSICS1_DOMAINS.find(d => d.id === md.domainId)
    if (!domainDef) continue
    const missedSlugs = new Set<string>()
    questions.forEach((q, i) => { if (q.domain === md.domainId && (answers[i] === undefined || answers[i] !== q.correctAnswer)) missedSlugs.add(q.topicSlug) })
    const slug = missedSlugs.size > 0 ? [...missedSlugs].values().next().value : domainDef.topicSlugs[0]
    if (slug) { const canonical = canonicalizeTopicSlug(slug); if (!recommendedTopics.some(t => t.slug === canonical)) recommendedTopics.push({ slug: canonical, name: slugToReadableName(canonical), domainId: md.domainId, priority: 'medium' }) }
  }

  return { form, totalCorrect, totalQuestions, percentage, estimatedAPScore, domains: domainResults, weakAreas, moderateAreas, strengths, recommendedTopics: recommendedTopics.slice(0, 5) }
}

export function pickNextForm(previousForms: number[]): number {
  if (previousForms.length === 0) return 1
  const last = previousForms[previousForms.length - 1]
  return last >= TOTAL_FORMS ? 1 : last + 1
}

export const AP_PHYSICS1_SLUG_LABELS: Record<string, string> = {
  'one-dimensional-motion': '1D Motion & Free Fall',
  'two-dimensional-motion': '2D Motion & Projectiles',
  'newtons-first-second-laws': 'Newton\'s First and Second Laws',
  'newtons-third-law': 'Newton\'s Third Law and Applications',
  'friction': 'Friction',
  'uniform-circular-motion': 'Uniform Circular Motion',
  'centripetal-force': 'Centripetal Force',
  'universal-gravitation': 'Universal Gravitation',
  'work-and-kinetic-energy': 'Work and Kinetic Energy',
  'conservation-of-energy': 'Conservation of Energy',
  'momentum-and-impulse': 'Momentum and Impulse',
  'collisions': 'Collisions',
  'introduction-to-shm': 'Introduction to Simple Harmonic Motion',
  'energy-in-shm': 'Energy in Simple Harmonic Motion',
  'torque-and-equilibrium': 'Torque and Rotational Equilibrium',
  'angular-momentum': 'Rotational Dynamics and Angular Momentum',
  'fluid-pressure': 'Fluid Pressure & Pascal\u2019s Principle',
  'buoyancy': 'Buoyancy & Archimedes\u2019 Principle',
  'fluid-dynamics': 'Fluid Dynamics & Bernoulli\u2019s Equation',
}

function slugToReadableName(slug: string): string {
  return AP_PHYSICS1_SLUG_LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
