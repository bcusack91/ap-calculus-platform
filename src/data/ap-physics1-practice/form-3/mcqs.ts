import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 practice exam, form 3: 42 MCQs (Section I, 85 min, May 2027 format, 4 options).
 * CED unit tally:
 *   U1 Kinematics                                     5   (10–15%)
 *   U2 Force & Translational Dynamics                 8   (18–23%)
 *   U3 Work, Energy, Power                            8   (18–23%)
 *   U4 Linear Momentum                                5   (10–15%)
 *   U5 Torque & Rotational Dynamics                   5   (10–15%)
 *   U6 Energy & Momentum of Rotating Systems          3   (5–8%)
 *   U7 Oscillations                                   3   (5–8%)
 *   U8 Fluids                                         5   (10–15%)
 * Stimulus items (figure, graph or data table): one set of 2 on the dog's position graph,
 * plus single-stimulus items.
 * Calculator allowed throughout. Use g = 10 m/s² unless an item says otherwise.
 */

const DOG_RUN =
  'A dog runs back and forth along a straight path. Its position–time graph is made of straight segments joining the points in the table.\n\n| Time (s) | Position (m) |\n|---|---|\n| 0 | 0 |\n| 4.0 | 12 |\n| 6.0 | 12 |\n| 10.0 | 0 |'

export const MCQS: MCQItem[] = [
  /* ---- U1 Kinematics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus: DOG_RUN,
    question: 'What is the dog\'s average speed for the 10.0 s interval?',
    options: ['0 m/s', '1.2 m/s', '2.4 m/s', '3.0 m/s'],
    correctAnswer: 2,
    explanation:
      'The dog runs 12 m out and 12 m back, a distance of 24 m, in 10.0 s, so its average speed is 2.4 m/s. Zero is the average velocity, since the dog ends where it started; 1.2 m/s counts the 12 m only once; and 3.0 m/s is the speed while the dog is moving, which ignores the 2.0 s rest.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus: DOG_RUN,
    question: 'What is the dog\'s velocity at $t = 8.0$ s?',
    options: ['−3.0 m/s', '+3.0 m/s', '0 m/s', '+0.75 m/s'],
    correctAnswer: 0,
    explanation:
      'At $t = 8.0$ s the dog is on the last segment, whose slope is $(0 - 12)/(10.0 - 6.0) = -3.0$ m/s. The value +3.0 m/s drops the sign of the slope, 0 m/s is the slope of the resting segment, and +0.75 m/s divides the position at 8.0 s (6 m) by the time, which is not the slope.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question:
      'A rower can move at 3.0 m/s relative to the water. She rows 1.2 km straight upstream in a river whose current flows at 1.0 m/s, then turns and rows 1.2 km straight back downstream to her starting point. How long does the round trip take?',
    options: ['10.0 min', '13.3 min', '15.0 min', '20.0 min'],
    correctAnswer: 2,
    explanation:
      'Upstream her ground speed is 2.0 m/s, taking 600 s; downstream it is 4.0 m/s, taking 300 s; the total is 900 s, or 15.0 min. The value 13.3 min is the still-water time, which assumes the current\'s effects cancel, while 10.0 min uses 4.0 m/s both ways and 20.0 min uses 2.0 m/s both ways.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus:
      'An astronaut drops a small wrench from rest on planet X, which has no atmosphere. A sensor records the wrench\'s speed as it falls.\n\n| Time (s) | Speed (m/s) |\n|---|---|\n| 0 | 0 |\n| 0.50 | 1.8 |\n| 1.00 | 3.6 |\n| 1.50 | 5.4 |',
    question: 'How far has the wrench fallen at $t = 1.50$ s?',
    options: ['2.7 m', '4.1 m', '5.4 m', '8.1 m'],
    correctAnswer: 1,
    explanation:
      'The speed rises uniformly, so the distance is the area under the speed–time graph: $\\tfrac{1}{2}(5.4)(1.50) \\approx 4.1$ m. The value 8.1 m multiplies the final speed by the time as if the wrench had moved at 5.4 m/s throughout, 5.4 m reads the final speed as the distance, and 2.7 m is the average speed in m/s, not a distance.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus:
      'A ball is launched from level ground. Its vertical velocity component decreases linearly from +15 m/s at $t = 0$ to −15 m/s at $t = 3.0$ s, when it lands, and its horizontal velocity component stays at 8.0 m/s throughout. Air resistance is negligible.',
    question: 'What is the greatest height the ball reaches above the ground?',
    options: ['11.3 m', '22.5 m', '24.0 m', '45.0 m'],
    correctAnswer: 0,
    explanation:
      'The ball rises until its vertical velocity is zero, at $t = 1.5$ s, and the height is the area of that triangle: $\\tfrac{1}{2}(15)(1.5) \\approx 11.3$ m. The value 22.5 m drops the one-half, 45.0 m multiplies 15 m/s by the whole 3.0 s flight, and 24.0 m is the horizontal range, $8.0(3.0)$.',
  },

  /* ---- U2 Force & Translational Dynamics (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      'A 60 kg skydiver falls straight down. The table gives the upward air-resistance force on the skydiver at several speeds. ($g = 10\\,\\text{m/s}^2$)\n\n| Speed (m/s) | Air-resistance force (N) |\n|---|---|\n| 10 | 60 |\n| 20 | 240 |\n| 30 | 540 |\n| 40 | 960 |',
    question: 'What is the magnitude of the skydiver\'s acceleration at the moment she is falling at 20 m/s?',
    options: ['4.0 m/s²', '6.0 m/s²', '10 m/s²', '14 m/s²'],
    correctAnswer: 1,
    explanation:
      'The net force is $mg - F_{air} = 600 - 240 = 360$ N downward, so $a = 360/60 = 6.0$ m/s². The value 4.0 m/s² divides the air-resistance force alone by the mass, 14 m/s² adds the two forces, and 10 m/s² ignores air resistance.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      '**Figure.** A 2.0 kg block rests on a rough, level floor next to a vertical wall. A light spring of spring constant 150 N/m is compressed 0.040 m between the wall and the block, and the block stays at rest. ($g = 10\\,\\text{m/s}^2$)',
    question: 'What is the smallest coefficient of static friction between the block and the floor that keeps the block at rest?',
    options: ['0.15', '0.30', '0.60', '3.0'],
    correctAnswer: 1,
    explanation:
      'Static friction must balance the spring force $kx = 150(0.040) = 6.0$ N, and it can be at most $\\mu_s(20)$ N, so $\\mu_s \\ge 0.30$. The value 0.15 uses the average spring force during the compression, 0.60 adds the wall\'s push on the spring as a second force on the block, and 3.0 divides by the mass instead of the weight.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'Earth\'s mass is about 81 times the Moon\'s mass. A spacecraft travels along the straight line joining their centers, which are a distance $d$ apart. At what distance from Earth\'s center is the net gravitational force on the spacecraft from Earth and the Moon zero?',
    options: ['$0.10d$', '$0.50d$', '$0.90d$', '$0.99d$'],
    correctAnswer: 2,
    explanation:
      'The forces balance where $M_E/r_E^2 = M_M/r_M^2$, so $r_E/r_M = \\sqrt{81} = 9$ and $r_E = 0.90d$. The value $0.99d$ uses the mass ratio without the square root, $0.10d$ is the distance from the Moon rather than from Earth, and $0.50d$ ignores the difference in mass.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      'A hockey puck slides in a straight line across a level ice rink after it leaves the stick. Its velocity decreases linearly from 6.0 m/s at $t = 0$ to 4.0 m/s at $t = 4.0$ s. Air resistance is negligible. ($g = 10\\,\\text{m/s}^2$)',
    question: 'What is the coefficient of kinetic friction between the puck and the ice?',
    options: ['0.050', '0.15', '0.20', '0.50'],
    correctAnswer: 0,
    explanation:
      'The deceleration is the slope, $2.0/4.0 = 0.50$ m/s², and friction alone causes it, so $\\mu_k g = 0.50$ and $\\mu_k = 0.050$. The value 0.50 is the acceleration itself, 0.20 uses the 2.0 m/s change in speed as the acceleration, and 0.15 divides the initial speed by the time.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'A child sits in a wagon at rest on level ground. Keeping her feet inside the wagon, she pushes forward on its front wall with a 50 N force. Friction on the wheels and air resistance are negligible. What happens to the child–wagon system?',
    options: [
      'It stays at rest, because the push is internal to the system.',
      'It moves forward, because the 50 N push on the wall is unbalanced.',
      'It moves forward, because the wall pushes back on her with less force.',
      'It moves backward, because the wall pushes back on her with 50 N.',
    ],
    correctAnswer: 0,
    explanation:
      'The push and the wall\'s 50 N push back on the child are both inside the child–wagon system, and the seat\'s friction on her balances the wall\'s push, so the net external horizontal force is zero and the system\'s center of mass stays at rest. The push on the wall is balanced within the system, the third-law forces are equal rather than unequal, and an internal pair cannot move the system backward either.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      '**Figure.** A 0.50 kg ball on a light string moves at constant speed in a horizontal circle of radius 0.60 m, with the string making a constant 30° angle with the vertical (a conical pendulum). ($\\sin 30° = 0.50$, $\\cos 30° = 0.87$, $\\tan 30° = 0.58$; $g = 10\\,\\text{m/s}^2$)',
    question: 'What is the ball\'s speed?',
    options: ['1.7 m/s', '1.9 m/s', '2.4 m/s', '3.2 m/s'],
    correctAnswer: 1,
    explanation:
      'The vertical tension component balances the weight and the horizontal component supplies the centripetal force, so $\\tan 30° = v^2/(rg)$ and $v = \\sqrt{0.58(0.60)(10)} \\approx 1.9$ m/s. Using $\\sin 30°$ in place of the tangent gives 1.7 m/s, ignoring the angle ($v = \\sqrt{rg}$) gives 2.4 m/s, and inverting the tangent gives 3.2 m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'In an amusement-park rotor, riders stand against the inside wall of a vertical cylinder of radius 2.0 m. The cylinder spins so that the riders move at 8.0 m/s, and then the floor drops away. What is the smallest coefficient of static friction between a rider and the wall that keeps the rider from sliding down? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['0.31', '0.63', '1.0', '3.2'],
    correctAnswer: 0,
    explanation:
      'The wall\'s normal force supplies the centripetal force, $N = mv^2/r = 32m$, and friction must hold up the weight, so $\\mu_s \\ge g/(v^2/r) = 10/32 \\approx 0.31$. The value 3.2 inverts the ratio, 1.0 takes the normal force to equal the weight, and 0.63 uses $v^2/(2r)$ for the centripetal acceleration.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'A puck rests on a frictionless air-hockey table bolted to the floor of a bus moving forward at constant velocity. The bus then brakes. According to an observer standing at the roadside, what does the puck do while the bus slows?',
    options: [
      'It keeps moving forward at the bus\'s original speed.',
      'It slows down along with the bus and stays in place on the table.',
      'It speeds up and moves forward faster than the bus was moving.',
      'It stops moving at the instant the brakes are applied.',
    ],
    correctAnswer: 0,
    explanation:
      'With no horizontal force on it, the puck keeps the velocity it had (Newton\'s first law), so it continues forward at the original speed while the table slows beneath it. Slowing with the bus would need a horizontal force the frictionless table cannot supply, speeding up would need a forward force, and the puck cannot stop without a force either.',
  },

  /* ---- U3 Work, Energy, Power (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus:
      'A 1200 kg test car accelerates along a straight, level track. The table gives its speed at three times. Ignore friction and air resistance.\n\n| Time (s) | Speed (m/s) |\n|---|---|\n| 0 | 0 |\n| 4.0 | 10 |\n| 12.0 | 20 |',
    question: 'How does the average power delivered to the car from 4.0 s to 12.0 s compare with the average power from 0 to 4.0 s?',
    options: ['Half as great', 'One and a half times as great', 'Twice as great', 'Three times as great'],
    correctAnswer: 1,
    explanation:
      'The work-energy theorem gives 60 kJ in the first 4.0 s (15 kW) and $\\tfrac{1}{2}(1200)(20^2 - 10^2) = 180$ kJ in the next 8.0 s (22.5 kW), a ratio of 1.5. Three times compares the work without dividing by the times, twice compares the speeds, and half compares the net forces, which are average rates of change of momentum, not of energy.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus:
      '**Figure.** A spring with spring constant 250 N/m lies along a frictionless ramp inclined at 30° above the horizontal, with its lower end fixed. A 0.40 kg block, not attached to the spring, is pushed down against it, compressing it 0.20 m, and is released from rest. ($\\sin 30° = 0.50$, $\\cos 30° = 0.87$; $g = 10\\,\\text{m/s}^2$)',
    question: 'How far along the ramp does the block travel from its release point before it momentarily stops?',
    options: ['1.25 m', '1.44 m', '2.5 m', '5.0 m'],
    correctAnswer: 2,
    explanation:
      'The spring stores $\\tfrac{1}{2}(250)(0.20)^2 = 5.0$ J, which all becomes gravitational energy: $mg\\,d\\sin 30° = 5.0$ J, so $d = 5.0/(0.40 \\cdot 10 \\cdot 0.50) = 2.5$ m. The value 1.25 m is the vertical rise rather than the distance along the ramp, 1.44 m uses $\\cos 30°$, and 5.0 m drops the one-half in the spring energy.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'A worker slides a crate across a level warehouse floor from point A to point B, once along a straight 5.0 m path and once along a curved 8.0 m path. The coefficient of kinetic friction is the same everywhere. Which statement compares the work done on the crate on the two trips?',
    options: [
      'Friction does more negative work on the curved path, and gravity does no work on either path.',
      'Friction does the same negative work on both of the paths, and gravity does no work on either path.',
      'Friction does more negative work on the curved path, and gravity does more work on that path too.',
      'Friction does more negative work on the straight path, because the crate covers it in less time.',
    ],
    correctAnswer: 0,
    explanation:
      'Kinetic friction has the same magnitude everywhere and always opposes the motion, so its work, $-f\\,d$, grows with the path length: more negative work on the 8.0 m path. Gravity is perpendicular to a level floor and does no work on either trip. Path independence holds for gravity, not for friction, so equal friction work and extra gravitational work are both wrong, and the work done by friction depends on the distance slid, not on how long the trip takes.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus:
      'The power a motor delivers to a winch increases linearly from 0 at $t = 0$ to 600 W at $t = 4.0$ s, and then stays constant at 600 W until $t = 10.0$ s.',
    question: 'How much energy does the motor deliver from $t = 0$ to $t = 10.0$ s?',
    options: ['1200 J', '3600 J', '4800 J', '6000 J'],
    correctAnswer: 2,
    explanation:
      'Energy is the area under the power–time graph: a triangle of $\\tfrac{1}{2}(600)(4.0) = 1200$ J plus a rectangle of $600(6.0) = 3600$ J, for 4800 J. The value 6000 J treats the power as 600 W the whole time, and 1200 J and 3600 J are each only one part of the area.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'Spring A has spring constant $k$ and is stretched a distance $x$. Spring B has spring constant $2k$ and is stretched a distance $x/2$. How does the elastic potential energy stored in spring B compare with that stored in spring A?',
    options: ['One-fourth as much', 'Half as much', 'The same amount', 'Twice as much'],
    correctAnswer: 1,
    explanation:
      'Spring B stores $\\tfrac{1}{2}(2k)(x/2)^2 = \\tfrac{1}{4}kx^2$, half of spring A\'s $\\tfrac{1}{2}kx^2$, because the stretch enters squared. "The same amount" treats the energy as proportional to $kx$, one-fourth accounts for the halved stretch but not the doubled constant, and twice accounts only for the doubled constant.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'A motor that delivers a constant power pulls a cart along a level, frictionless track, starting from a low speed. As the cart\'s speed increases, what happens to its acceleration?',
    options: [
      'It decreases, because the force the motor exerts equals the power divided by the speed.',
      'It stays constant, because the motor supplies energy to the cart at a constant rate.',
      'It increases, because the cart gains kinetic energy faster as its speed increases.',
      'It increases, because the force the motor exerts equals the power times the speed.',
    ],
    correctAnswer: 0,
    explanation:
      'Instantaneous power is $P = Fv$, so at constant power the force, and with it the acceleration, falls as the speed rises. A constant energy rate does not mean a constant force, the kinetic energy grows at the same rate rather than faster, and power is force times speed, not force equals power times speed.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus:
      '**Figure.** Blocks of mass 3.0 kg and 1.0 kg hang from the two ends of a light string that passes over a light, frictionless pulley. The blocks are released from rest. ($g = 10\\,\\text{m/s}^2$)',
    question: 'Using conservation of energy, find the speed of each block after the 3.0 kg block has descended 0.50 m.',
    options: ['2.2 m/s', '2.6 m/s', '3.2 m/s', '4.5 m/s'],
    correctAnswer: 0,
    explanation:
      'The system loses $(3.0 - 1.0)(10)(0.50) = 10$ J of gravitational energy, and both blocks share the kinetic energy: $\\tfrac{1}{2}(4.0)v^2 = 10$ J, so $v \\approx 2.2$ m/s. Giving the 10 J to the 3.0 kg block alone gives 2.6 m/s and to the 1.0 kg block alone gives 4.5 m/s, and 3.2 m/s is free fall through 0.50 m.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'A 0.50 kg ball is thrown from the edge of a roof 15 m above level ground with a speed of 10 m/s. The direction of the throw is not known. Air resistance is negligible. What is the ball\'s speed just before it hits the ground? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['17 m/s', '20 m/s', '27 m/s', 'It depends on the direction of the throw.'],
    correctAnswer: 1,
    explanation:
      'Energy conservation gives $v^2 = v_0^2 + 2gh = 100 + 300$, so $v = 20$ m/s for any launch direction, because gravity\'s work depends only on the 15 m drop. The value 17 m/s ignores the launch speed, 27 m/s adds the two speeds instead of their squares, and the direction changes the path and the time, not the final speed.',
  },

  /* ---- U4 Linear Momentum (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    stimulus: '**Figure.** A uniform rod 2.0 m long with a mass of 1.0 kg has a small 3.0 kg ball fixed to its right end.',
    question: 'How far from the rod\'s left end is the center of mass of the rod–ball system?',
    options: ['1.25 m', '1.50 m', '1.75 m', '2.33 m'],
    correctAnswer: 2,
    explanation:
      'The rod\'s mass acts at its midpoint, so $x = [1.0(1.0) + 3.0(2.0)]/4.0 = 1.75$ m. The value 1.50 m leaves out the rod\'s contribution to the numerator (or averages the two positions), 1.25 m swaps the two masses, and 2.33 m divides by the ball\'s mass instead of the total mass.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    stimulus:
      '**Figure.** On a level track with negligible friction, cart A (1.0 kg) moves to the right at 2.0 m/s and cart B (2.0 kg) moves to the left at 1.0 m/s. Just after they collide, cart A moves to the left at 1.0 m/s.',
    question: 'What is cart B\'s velocity just after the collision?',
    options: ['0.50 m/s to the right', '0.50 m/s to the left', '1.5 m/s to the right', '2.5 m/s to the right'],
    correctAnswer: 0,
    explanation:
      'The total momentum is $1.0(2.0) + 2.0(-1.0) = 0$, so afterward $1.0(-1.0) + 2.0v_B = 0$ and $v_B = +0.50$ m/s, to the right. The value 1.5 m/s is B\'s change in velocity, not its final velocity, 2.5 m/s treats B\'s initial velocity as rightward, and 0.50 m/s to the left has the sign reversed.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question:
      'Two gliders on a level, frictionless air track collide and stick together. Which quantity for the two-glider system has the same value just after the collision as just before it?',
    options: [
      'The velocity of the system\'s center of mass',
      'The total kinetic energy of the gliders',
      'The speed of each of the two gliders',
      'The magnitude of each glider\'s momentum',
    ],
    correctAnswer: 0,
    explanation:
      'No net external force acts, so the total momentum, and therefore the velocity of the center of mass, is unchanged. Kinetic energy decreases in a sticking collision, and each glider\'s speed and momentum change because the gliders exert forces on each other.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question:
      'A 0.50 kg ball on a string moves in a horizontal circle at a constant speed of 4.0 m/s. What is the magnitude of the change in the ball\'s momentum during half a revolution?',
    options: ['0', '2.0 kg·m/s', '4.0 kg·m/s', '6.3 kg·m/s'],
    correctAnswer: 2,
    explanation:
      'After half a revolution the velocity has reversed, so $\\Delta p = m(4.0) - m(-4.0) = 2mv = 4.0$ kg·m/s. Zero confuses momentum with speed, 2.0 kg·m/s is the magnitude of the momentum itself, and 6.3 kg·m/s adds momentum along the semicircular path as if it were a scalar.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    stimulus:
      '**Figure.** A 0.010 kg bullet moving horizontally at 400 m/s passes straight through a 2.0 kg wooden block that is initially at rest on a frictionless surface. The bullet leaves the block moving at 250 m/s in the same direction.',
    question: 'What is the block\'s speed just after the bullet exits?',
    options: ['0.75 m/s', '1.25 m/s', '2.0 m/s', '3.25 m/s'],
    correctAnswer: 0,
    explanation:
      'The block gains the momentum the bullet loses: $2.0v = 0.010(400 - 250)$, so $v = 0.75$ m/s. The value 2.0 m/s gives the block all of the bullet\'s initial momentum, 1.25 m/s uses the bullet\'s final momentum, and 3.25 m/s adds the two speeds.',
  },

  /* ---- U5 Torque & Rotational Dynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    stimulus:
      '**Figure.** A uniform rod of length 1.5 m is pivoted at its left end on a frictionless horizontal axle. It is held horizontal and released from rest. The rod\'s rotational inertia about the pivot is $\\tfrac{1}{3}ML^2$. ($g = 10\\,\\text{m/s}^2$)',
    question: 'Just after release, what is the magnitude of the linear acceleration of the rod\'s free right end?',
    options: ['5.0 m/s²', '7.5 m/s²', '10 m/s²', '15 m/s²'],
    correctAnswer: 3,
    explanation:
      'The weight acts at the midpoint, so $\\tau = Mg(L/2)$ and $\\alpha = \\tau/I = 3g/(2L) = 10$ rad/s², giving the free end $\\alpha L = 15$ m/s², more than $g$. The value 7.5 m/s² is the acceleration of the rod\'s center, 10 m/s² assumes free fall, and 5.0 m/s² treats the rod as a point mass at its end.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    stimulus:
      '**Figure.** A person holds a uniform 2.0 m pole of mass 8.0 kg horizontal and at rest. The left hand is at the pole\'s left end and pushes straight down; the right hand is 0.50 m from the left end and pushes straight up. ($g = 10\\,\\text{m/s}^2$)',
    question: 'What is the magnitude of the upward force exerted by the right hand?',
    options: ['40 N', '80 N', '160 N', '320 N'],
    correctAnswer: 2,
    explanation:
      'Taking torques about the left end, $F_R(0.50) = 80(1.0)$, so $F_R = 160$ N; the left hand then pushes down with 80 N, so the net force is zero. The value 80 N is just the weight, 40 N inverts the lever arms, and 320 N uses the full 2.0 m length as the weight\'s lever arm.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question:
      'A car with tires of radius 0.30 m speeds up from rest with a constant acceleration of 2.0 m/s², and its tires roll without slipping. What is the angular acceleration of each tire?',
    options: ['0.15 rad/s²', '0.60 rad/s²', '2.0 rad/s²', '6.7 rad/s²'],
    correctAnswer: 3,
    explanation:
      'Rolling without slipping links the linear and angular accelerations by $a = \\alpha r$, so $\\alpha = 2.0/0.30 \\approx 6.7$ rad/s². The value 0.60 rad/s² multiplies by the radius, 0.15 rad/s² inverts the ratio, and 2.0 rad/s² reuses the linear acceleration.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    stimulus:
      '**Figure.** A stepped wheel turns on a frictionless axle and has rotational inertia 0.50 kg·m². A string wrapped around its inner hub, of radius 0.20 m, is pulled with a 10 N force that tends to turn the wheel clockwise. A string wrapped around its outer rim, of radius 0.50 m, is pulled with a 6.0 N force that tends to turn it counterclockwise. Both strings leave the wheel tangentially.',
    question: 'What is the wheel\'s angular acceleration?',
    options: [
      '2.0 rad/s², counterclockwise',
      '2.0 rad/s², clockwise',
      '8.0 rad/s², clockwise',
      '10 rad/s², counterclockwise',
    ],
    correctAnswer: 0,
    explanation:
      'The torques are $10(0.20) = 2.0$ N·m clockwise and $6.0(0.50) = 3.0$ N·m counterclockwise, so the net torque is 1.0 N·m counterclockwise and $\\alpha = 1.0/0.50 = 2.0$ rad/s², counterclockwise. Comparing the forces instead of the torques gives 8.0 rad/s² clockwise, adding the two torques gives 10 rad/s², and 2.0 rad/s² clockwise has the direction reversed.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question:
      'A tightrope walker carries a long, heavy pole held horizontally across her body. How does the pole help her keep her balance on the rope?',
    options: [
      'It increases her rotational inertia, so she tips more slowly.',
      'It decreases her rotational inertia, so she can rotate back upright more quickly.',
      'It raises her center of mass, so gravity exerts less torque on her when she tips.',
      'It adds weight, so the rope pushes up harder and the net torque on her is zero.',
    ],
    correctAnswer: 0,
    explanation:
      'Mass held far from her body\'s axis greatly increases her rotational inertia, so by $\\alpha = \\tau/I$ the same tipping torque produces a much smaller angular acceleration, giving her time to correct. Adding mass far from the axis cannot decrease the rotational inertia, raising the center of mass would not reduce the torque, and a larger normal force does not cancel a tipping torque.',
  },

  /* ---- U6 Energy & Momentum of Rotating Systems (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question:
      'A 6.0 kg bowling ball, a uniform solid sphere ($I = \\tfrac{2}{5}MR^2$), rolls without slipping down a lane at 5.0 m/s. What is its total kinetic energy?',
    options: ['75 J', '105 J', '113 J', '150 J'],
    correctAnswer: 1,
    explanation:
      'Rolling without slipping gives $\\omega = v/R$, so $K = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}\\left(\\tfrac{2}{5}MR^2\\right)(v/R)^2 = 0.70Mv^2 = 105$ J. The value 75 J leaves out the rotational energy, 113 J uses the disk value $\\tfrac{1}{2}MR^2$, and 150 J uses the hoop value $MR^2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    stimulus:
      '**Figure.** Two identical uniform disks are mounted on the same frictionless vertical axle. The upper disk spins at angular speed $\\omega_0$ while the lower disk is at rest. The upper disk is dropped onto the lower one, and friction between them brings the two disks to a common angular speed.',
    question: 'What fraction of the initial rotational kinetic energy is transformed into internal energy?',
    options: ['0', '1/4', '1/2', '3/4'],
    correctAnswer: 2,
    explanation:
      'Angular momentum is conserved, so $I\\omega_0 = 2I\\omega$ and $\\omega = \\omega_0/2$; the final energy is $\\tfrac{1}{2}(2I)(\\omega_0/2)^2 = \\tfrac{1}{2}$ of the initial, so half is transformed. Zero assumes kinetic energy is conserved along with angular momentum, 3/4 squares the halved angular speed but forgets the doubled rotational inertia, and 1/4 is the fraction of the original energy left in the upper disk alone.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    stimulus:
      '**Figure.** A uniform rod 1.2 m long lies on a frictionless, horizontal table and can turn freely about a vertical axle through its center. Its rotational inertia about the axle is 0.12 kg·m². A 0.050 kg lump of clay slides across the table at 4.0 m/s, perpendicular to the rod, strikes one end of the rod and sticks there.',
    question: 'What is the angular speed of the rod and clay just after the collision?',
    options: ['0.87 rad/s', '1.0 rad/s', '3.3 rad/s', '6.7 rad/s'],
    correctAnswer: 0,
    explanation:
      'Angular momentum about the axle is conserved: $0.050(4.0)(0.60) = [0.12 + 0.050(0.60)^2]\\omega$, so $\\omega = 0.12/0.138 \\approx 0.87$ rad/s. The value 1.0 rad/s leaves out the clay\'s rotational inertia, and 3.3 and 6.7 rad/s simply divide the clay\'s speed by the rod\'s length or half-length, ignoring the rod.',
  },

  /* ---- U7 Oscillations (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    stimulus:
      'Students hang different masses from the same spring, set each one oscillating vertically, and time the period.\n\n| Mass (kg) | Period (s) |\n|---|---|\n| 0.20 | 0.63 |\n| 0.40 | 0.89 |\n| 0.60 | 1.09 |\n| 0.80 | 1.26 |',
    question: 'What is the spring constant of the spring?',
    options: ['0.51 N/m', '3.2 N/m', '12.5 N/m', '20 N/m'],
    correctAnswer: 3,
    explanation:
      'From $T = 2\\pi\\sqrt{m/k}$, $k = 4\\pi^2 m/T^2$; every row gives about 20 N/m (for example $39.5(0.20)/0.40$). The value 0.51 N/m leaves out the $4\\pi^2$, 3.2 N/m uses $2\\pi$ instead of $4\\pi^2$, and 12.5 N/m divides by the period instead of its square.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question:
      'A block hangs at rest from a vertical spring. It is pulled down 5.0 cm and released, and it oscillates vertically. Where in its motion is the block\'s speed greatest?',
    options: [
      'At the position where it originally hung at rest',
      'At the position where the spring is at its natural length',
      'At the lowest point, where the spring is stretched the most',
      'At the highest point, where the spring force is the smallest',
    ],
    correctAnswer: 0,
    explanation:
      'The block oscillates about its equilibrium position, where the spring force balances the weight, and the speed is greatest where the net force is zero. At the spring\'s natural length the weight is unbalanced, so the block is still accelerating there, and the highest and lowest points are turning points, where the speed is zero.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    stimulus:
      'A cart on a horizontal spring oscillates on a frictionless track; positive is to the right. Its velocity–time graph is sinusoidal: the velocity is 0 at $t = 0$, rises to a maximum of +0.30 m/s at $t = 0.25$ s, returns to 0 at $t = 0.50$ s, reaches −0.30 m/s at $t = 0.75$ s, and is 0 again at $t = 1.00$ s.',
    question: 'At $t = 0.50$ s, where is the cart and in which direction does its acceleration point?',
    options: [
      'At its rightmost point, with acceleration to the left',
      'At equilibrium, with zero acceleration',
      'At its leftmost point, accelerating to the right',
      'At its rightmost point, with zero acceleration',
    ],
    correctAnswer: 0,
    explanation:
      'From $t = 0$ to $0.50$ s the velocity is positive, so the cart moves right the whole time and stops at $t = 0.50$ s at its rightmost point; there the spring pulls it back, so the acceleration points left. Equilibrium is where the speed is greatest (at 0.25 s), the leftmost point is reached at 0 and 1.00 s, and the acceleration is greatest, not zero, at a turning point.',
  },

  /* ---- U8 Fluids (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      'A pressure sensor is lowered into an open tank of an unknown liquid. The table gives the gauge pressure at several depths below the surface. ($g = 10\\,\\text{m/s}^2$)\n\n| Depth (m) | Gauge pressure (kPa) |\n|---|---|\n| 0.10 | 1.2 |\n| 0.20 | 2.4 |\n| 0.30 | 3.6 |\n| 0.40 | 4.8 |',
    question: 'What is the density of the liquid?',
    options: ['1.2 kg/m³', '830 kg/m³', '1200 kg/m³', '12,000 kg/m³'],
    correctAnswer: 2,
    explanation:
      'Gauge pressure is $\\rho g h$, so the slope of pressure versus depth, 12,000 Pa/m, equals $\\rho g$, and $\\rho = 1200$ kg/m³. The value 12,000 kg/m³ forgets to divide by $g$, 1.2 kg/m³ leaves the pressure in kilopascals, and 830 kg/m³ inverts the ratio to water\'s density.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      '**Figure.** A hydrometer is a weighted glass tube of uniform cross-section that floats upright. In water (density 1000 kg/m³), 12.0 cm of its length is below the surface. In liquid X, 15.0 cm of its length is below the surface.',
    question: 'What is the density of liquid X?',
    options: ['800 kg/m³', '1000 kg/m³', '1250 kg/m³', '1560 kg/m³'],
    correctAnswer: 0,
    explanation:
      'The buoyant force equals the hydrometer\'s weight in both liquids, so $\\rho_X(15.0) = 1000(12.0)$ and $\\rho_X = 800$ kg/m³; it sinks deeper in the less dense liquid. The value 1250 kg/m³ inverts the ratio, 1560 kg/m³ squares the inverted ratio, and 1000 kg/m³ confuses the equal buoyant forces with equal densities.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question:
      'Water flows at 0.40 m/s through a pipe of cross-sectional area 3.0 cm² into a shower head that has 30 holes, each with a cross-sectional area of 0.020 cm². Treating the water as an ideal fluid, how fast does the water leave each hole?',
    options: ['0.080 m/s', '0.40 m/s', '2.0 m/s', '60 m/s'],
    correctAnswer: 2,
    explanation:
      'The volume flow rate is shared by all 30 holes, whose total area is 0.60 cm², so $v = 0.40(3.0)/0.60 = 2.0$ m/s. The value 60 m/s pushes the whole flow through a single hole, 0.40 m/s assumes the speed is unchanged, and 0.080 m/s inverts the area ratio.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      '**Figure.** A flexible tube is used as a siphon to drain water from a large open tank. The tube rises over the tank\'s rim and runs down the outside, and its open lower end is 0.80 m below the water surface in the tank. Water flows steadily out of the lower end into the air. Treat the water as an ideal fluid. ($g = 10\\,\\text{m/s}^2$)',
    question: 'How fast does the water leave the lower end of the tube?',
    options: ['2.8 m/s', '4.0 m/s', '8.0 m/s', '16 m/s'],
    correctAnswer: 1,
    explanation:
      'Bernoulli\'s equation from the tank\'s surface, where the pressure is atmospheric and the speed is nearly zero, to the open end, also at atmospheric pressure, gives $v = \\sqrt{2gh} = \\sqrt{16} = 4.0$ m/s. The value 2.8 m/s leaves out the factor of 2, and 8.0 and 16 m/s forget the square root.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question:
      'The air pressure inside a sealed jar is $0.70 \\times 10^5$ Pa, and the atmospheric pressure outside is $1.0 \\times 10^5$ Pa. The jar\'s lid has an area of $4.0 \\times 10^{-3}$ m². What is the magnitude of the net force that the air inside and outside exerts on the lid?',
    options: ['120 N', '280 N', '400 N', '680 N'],
    correctAnswer: 0,
    explanation:
      'The net force comes from the pressure difference: $(1.0 - 0.70) \\times 10^5 \\times 4.0 \\times 10^{-3} = 120$ N, pushing the lid in. The values 280 N and 400 N use only the inside or only the outside pressure, and 680 N adds the two forces although they point in opposite directions.',
  },
]
