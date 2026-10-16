import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 practice exam, form 2: 42 MCQs (Section I, 85 min, May 2027 format, 4 options).
 * CED unit tally:
 *   U1 Kinematics                                     5   (10–15%)
 *   U2 Force & Translational Dynamics                 8   (18–23%)
 *   U3 Work, Energy, Power                            8   (18–23%)
 *   U4 Linear Momentum                                5   (10–15%)
 *   U5 Torque & Rotational Dynamics                   5   (10–15%)
 *   U6 Energy & Momentum of Rotating Systems          3   (5–8%)
 *   U7 Oscillations                                   3   (5–8%)
 *   U8 Fluids                                         5   (10–15%)
 * Stimulus items (figure, graph or data table): sets of 2 on the cyclist acceleration table,
 * the kicked-ball video table and the slingshot force table, plus single-stimulus items.
 * Calculator allowed throughout. Use g = 10 m/s² unless an item says otherwise.
 */

const CYCLIST =
  'A cyclist starts from rest at $t = 0$ and rides along a straight, level road. The table gives the cyclist\'s acceleration, which is constant during each time interval. Positive is the direction of motion.\n\n| Time interval (s) | Acceleration (m/s²) |\n|---|---|\n| 0 to 3.0 | +2.0 |\n| 3.0 to 6.0 | 0 |\n| 6.0 to 8.0 | −1.5 |'

const KICKED_BALL =
  'A ball is kicked from level ground at $t = 0$. Video analysis gives its horizontal position $x$ and its height $y$ above the ground every 0.50 s while it rises. Air resistance is negligible; use $g = 10\\,\\text{m/s}^2$.\n\n| $t$ (s) | $x$ (m) | $y$ (m) |\n|---|---|---|\n| 0 | 0 | 0 |\n| 0.50 | 4.0 | 8.75 |\n| 1.00 | 8.0 | 15.0 |\n| 1.50 | 12.0 | 18.75 |\n| 2.00 | 16.0 | 20.0 |'

const SLINGSHOT =
  'Students stretch the rubber band of a slingshot and record the force the band exerts at several stretches. Between the measured points the force changes linearly with the stretch.\n\n| Stretch (m) | Force (N) |\n|---|---|\n| 0 | 0 |\n| 0.05 | 4.0 |\n| 0.10 | 8.0 |\n| 0.15 | 10.0 |\n| 0.20 | 12.0 |'

export const MCQS: MCQItem[] = [
  /* ---- U1 Kinematics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus: CYCLIST,
    question: 'What is the cyclist\'s velocity at $t = 8.0$ s?',
    options: ['0 m/s', '3.0 m/s', '6.0 m/s', '9.0 m/s'],
    correctAnswer: 1,
    explanation:
      'The velocity reaches $2.0(3.0) = 6.0$ m/s at $t = 3.0$ s, stays at 6.0 m/s until $t = 6.0$ s, and then drops by $1.5(2.0) = 3.0$ m/s, leaving 3.0 m/s. The value 6.0 m/s ignores the braking interval, 9.0 m/s adds the braking change instead of subtracting it, and 0 m/s assumes the braking stops the cyclist, which would take 4.0 s at this rate.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus: CYCLIST,
    question: 'How far does the cyclist travel from $t = 0$ to $t = 8.0$ s?',
    options: ['27 m', '36 m', '39 m', '48 m'],
    correctAnswer: 1,
    explanation:
      'The distances are $\\tfrac{1}{2}(2.0)(3.0)^2 = 9$ m, then $6.0(3.0) = 18$ m, then $6.0(2.0) - \\tfrac{1}{2}(1.5)(2.0)^2 = 9$ m, for 36 m in all. Leaving out the braking interval gives 27 m, treating the last 2.0 s as constant speed gives 39 m, and 48 m assumes 6.0 m/s for the whole 8.0 s.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    question:
      'A hot-air balloon is rising vertically at a constant 5.0 m/s. When the balloon is 30 m above the ground, a sandbag is released from it. Air resistance on the sandbag is negligible. How long after its release does the sandbag reach the ground? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['2.0 s', '2.4 s', '3.0 s', '3.5 s'],
    correctAnswer: 2,
    explanation:
      'The sandbag leaves with the balloon\'s upward velocity of 5.0 m/s, so $-30 = 5.0t - 5t^2$, which gives $t = 3.0$ s. Dropping it from rest gives $\\sqrt{2(30)/10} \\approx 2.4$ s, taking the 5.0 m/s as downward gives 2.0 s, and 3.5 s adds the 0.5 s rise to a total that already includes it.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus: KICKED_BALL,
    question: 'What is the ball\'s speed at $t = 2.00$ s?',
    options: ['0 m/s', '8.0 m/s', '10 m/s', '20 m/s'],
    correctAnswer: 1,
    explanation:
      'The height changes by 8.75, 6.25, 3.75 and 1.25 m in successive intervals, dropping by 2.5 m each time, so the vertical velocity falls from 20 m/s to zero at $t = 2.00$ s, the top of the path. Only the constant horizontal velocity, $4.0/0.50 = 8.0$ m/s, remains. The value 0 m/s forgets the horizontal motion, 10 m/s is the average vertical velocity over the rise, and 20 m/s is the vertical component of the launch velocity, which is zero by the top.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-kinematics',
    stimulus: KICKED_BALL,
    question: 'How far from the kick, measured horizontally, does the ball land?',
    options: ['16 m', '20 m', '32 m', '64 m'],
    correctAnswer: 2,
    explanation:
      'The rise takes 2.00 s, so the flight over level ground takes 4.00 s, and the ball moves $8.0(4.00) = 32$ m horizontally. The value 16 m is the horizontal position at the top of the path, 20 m is the maximum height, and 64 m wrongly scales the distance with the square of the time, although the horizontal velocity is constant.',
  },

  /* ---- U2 Force & Translational Dynamics (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      '**Figure.** A 200 N sign hangs at rest from two light cables attached to its top corners. The left cable runs up and to the left and the right cable runs up and to the right to a horizontal ceiling. Each cable makes an angle of 30° with the ceiling, and the arrangement is symmetric. ($\\sin 30° = 0.50$, $\\cos 30° = 0.87$)',
    question: 'What is the tension in each cable?',
    options: ['100 N', '115 N', '200 N', '400 N'],
    correctAnswer: 2,
    explanation:
      'Only the vertical components hold the sign up: $2T\\sin 30° = 200$ N, so $T = 200$ N. The value 100 N splits the weight between the cables and ignores the angle, 115 N uses $\\cos 30°$ for the vertical component, and 400 N lets one cable carry the whole weight.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      '**Figure.** A 2.0 kg block rests on a frictionless ramp inclined at 30° above the horizontal. It is held by a light spring of spring constant 200 N/m, attached to the top of the ramp and parallel to the ramp surface. The block is at rest. ($\\sin 30° = 0.50$, $\\cos 30° = 0.87$; $g = 10\\,\\text{m/s}^2$)',
    question: 'By how much is the spring stretched from its natural length?',
    options: ['0.0050 m', '0.050 m', '0.087 m', '0.10 m'],
    correctAnswer: 1,
    explanation:
      'Along the ramp the spring force balances the gravitational component: $kx = mg\\sin 30° = 10$ N, so $x = 10/200 = 0.050$ m. Using $\\cos 30°$ gives 0.087 m, using the full weight gives 0.10 m, and 0.0050 m leaves $g$ out of the weight.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'Student A (50 kg) and student B (75 kg) stand on skateboards on a level floor, each holding one end of a light rope. Student A pulls the rope hand over hand while B simply holds on. Friction is negligible. Which statement correctly compares the horizontal forces on the students and their accelerations?',
    options: [
      'The forces have equal magnitudes, and A\'s acceleration is 1.5 times as large as B\'s.',
      'The forces have equal magnitudes, so the two accelerations are also equal.',
      'The forces are unequal, since A does the pulling, so B accelerates more.',
      'The forces are unequal, with 1.5 times as much on B, so the accelerations match.',
    ],
    correctAnswer: 0,
    explanation:
      'A light rope has the same tension at both ends, so it pulls each student with the same magnitude of force no matter who pulls. With equal forces, $a = F/m$ gives the 50 kg student $75/50 = 1.5$ times the acceleration of the 75 kg student. Who does the pulling does not change the forces, and equal forces on unequal masses cannot give equal accelerations.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      'The table lists the mass and the radius of four planets, as multiples of Earth\'s mass $M_E$ and radius $R_E$.\n\n| Planet | Mass | Radius |\n|---|---|---|\n| A | $2.0\\,M_E$ | $2.0\\,R_E$ |\n| B | $4.0\\,M_E$ | $3.0\\,R_E$ |\n| C | $0.50\\,M_E$ | $0.50\\,R_E$ |\n| D | $8.0\\,M_E$ | $4.0\\,R_E$ |',
    question: 'On the surface of which planet would a 1.0 kg object have the greatest weight?',
    options: ['Planet A', 'Planet B', 'Planet C', 'Planet D'],
    correctAnswer: 2,
    explanation:
      'Surface field strength is proportional to $M/R^2$, which gives 0.50, 0.44, 2.0 and 0.50 times Earth\'s value for planets A, B, C and D. Planet C has the least mass but by far the smallest radius, so its surface field is strongest. Choosing planet D or B ranks by mass alone, and planet A ignores that its doubled radius cuts the field by a factor of 4.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'An all-wheel-drive car starts from rest on a level road. The coefficient of static friction between its tires and the road is 0.80, and the tires do not slip. What is the shortest time in which the car can reach 24 m/s? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['2.4 s', '3.0 s', '6.0 s', '30 s'],
    correctAnswer: 1,
    explanation:
      'Static friction from the road is the only horizontal force, so the largest acceleration is $\\mu_s g = 8.0$ m/s², and $t = 24/8.0 = 3.0$ s. The value 2.4 s assumes an acceleration of $g$, 6.0 s puts only half the car\'s weight on driving wheels, which applies to a two-wheel-drive car, and 30 s uses 0.80 m/s² as the acceleration.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      'A student whirls a 0.20 kg puck in a horizontal circle on a frictionless table, using a light string tied to a fixed peg at the center of the circle. The table lists four trials.\n\n| Trial | Radius (m) | Period (s) |\n|---|---|---|\n| 1 | 0.50 | 1.0 |\n| 2 | 1.00 | 2.0 |\n| 3 | 0.30 | 0.50 |\n| 4 | 0.80 | 1.0 |',
    question: 'In which trial is the tension in the string greatest?',
    options: ['Trial 1', 'Trial 2', 'Trial 3', 'Trial 4'],
    correctAnswer: 2,
    explanation:
      'The tension supplies the centripetal force $m(2\\pi/T)^2 r$, which is proportional to $r/T^2$: 0.50, 0.25, 1.2 and 0.80 m/s² (before the factor $4\\pi^2 m$) for trials 1 to 4. Trial 3 has the smallest radius but the shortest period, and the period enters squared. Trial 2 has the largest radius but the slowest rotation, and trial 4 is second.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    question:
      'A roller-coaster car moves upside down through the top of a vertical circular loop of radius 10 m, on the inside of the track, at 15 m/s. What is the magnitude of the force the seat exerts on a 50 kg rider at that point? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['500 N', '625 N', '1125 N', '1625 N'],
    correctAnswer: 1,
    explanation:
      'At the top both the seat force and the weight point down, toward the center: $N + mg = mv^2/r = 50(225)/10 = 1125$ N, so $N = 625$ N. The value 1125 N leaves out the weight, 1625 N adds the weight as at the bottom of a loop, and 500 N is just the rider\'s weight.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-force-translational-dynamics',
    stimulus:
      '**Figure.** A small ball hangs from a light string attached to the ceiling of a subway car. While the car accelerates along a straight, level track, the string hangs at a steady 37° from the vertical, with the ball displaced toward the rear of the car. ($\\sin 37° = 0.60$, $\\cos 37° = 0.80$, $\\tan 37° = 0.75$; $g = 10\\,\\text{m/s}^2$)',
    question: 'What is the magnitude of the car\'s acceleration?',
    options: ['6.0 m/s²', '7.5 m/s²', '8.0 m/s²', '13.3 m/s²'],
    correctAnswer: 1,
    explanation:
      'The vertical tension component balances the weight, $T\\cos 37° = mg$, and the horizontal component gives the ball the car\'s acceleration, $T\\sin 37° = ma$, so $a = g\\tan 37° = 7.5$ m/s². The values 6.0 and 8.0 m/s² use $g\\sin 37°$ and $g\\cos 37°$, and 13.3 m/s² inverts the tangent.',
  },

  /* ---- U3 Work, Energy, Power (8) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus:
      'A skier starts from rest at point A and glides down a snowy slope through points B, C and D in that order; the slope rises over a bump between B and C. The table gives the kinetic energy $K$ and the gravitational potential energy $U_g$ of the skier–Earth system at each point, with $U_g = 0$ at point D. No one pushes the skier.\n\n| Point | $K$ (J) | $U_g$ (J) |\n|---|---|---|\n| A | 0 | 12,000 |\n| B | 7,000 | 4,000 |\n| C | 2,000 | 8,000 |\n| D | 6,000 | 0 |',
    question:
      'Between which two consecutive points is the most mechanical energy transformed into internal energy by friction and air resistance?',
    options: ['Between A and B', 'Between B and C', 'Between C and D', 'Equally on all three segments'],
    correctAnswer: 2,
    explanation:
      'The mechanical energy $K + U_g$ is 12,000, 11,000, 10,000 and 6,000 J at A, B, C and D, so the losses are 1,000 J, 1,000 J and 4,000 J, and the largest is between C and D. Choosing A to B confuses the large drop in potential energy with energy lost, and choosing B to C confuses the drop in kinetic energy (converted to potential energy on the bump) with energy lost.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus:
      '**Figure.** A box rides up an inclined conveyor belt from a loading dock to a truck. The belt runs up a straight ramp at constant speed, and the box moves with the belt without slipping.',
    question: 'Which statement correctly describes the work done on the box by each force as it rides up the belt?',
    options: [
      'Friction does positive work, gravity does negative work, and the normal force does no work.',
      'Friction does no work because the box does not slip, gravity does negative work, and the normal force does no work.',
      'Friction does negative work, gravity does negative work, and the normal force does positive work.',
      'Friction does positive work, gravity does negative work, and the normal force does negative work.',
    ],
    correctAnswer: 0,
    explanation:
      'Static friction on the box points up the belt, along the box\'s displacement, so it does positive work; gravity has a component opposite the displacement, so it does negative work; and the normal force is perpendicular to the motion, so it does no work. These cancel, consistent with the constant speed. No slipping means no motion relative to the belt, but the box still moves relative to the ground, so static friction does work on it: static friction can do work whenever the contact surface moves along with the object.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'A 0.15 kg baseball is thrown so that its kinetic energy equals that of a 6.0 kg medicine ball moving at 2.0 m/s. What is the baseball\'s speed?',
    options: ['6.3 m/s', '8.9 m/s', '12.6 m/s', '80 m/s'],
    correctAnswer: 2,
    explanation:
      'The medicine ball has $\\tfrac{1}{2}(6.0)(2.0)^2 = 12$ J, so $\\tfrac{1}{2}(0.15)v^2 = 12$ J and $v = \\sqrt{160} \\approx 12.6$ m/s. The value 80 m/s gives the baseball equal momentum instead of equal kinetic energy, 8.9 m/s drops the factor of one-half on the baseball side only, and 6.3 m/s leaves out the medicine ball\'s 2.0 m/s.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus: SLINGSHOT,
    question: 'How much elastic potential energy does the band store when it is stretched 0.20 m?',
    options: ['0.55 J', '1.2 J', '1.4 J', '2.4 J'],
    correctAnswer: 2,
    explanation:
      'The stored energy is the area under the force–stretch graph: $0.10 + 0.30 + 0.45 + 0.55 = 1.4$ J for the four trapezoids. The value 1.2 J treats the band as an ideal spring, $\\tfrac{1}{2}(12)(0.20)$, although the force does not grow linearly, 2.4 J multiplies the final force by the stretch, and 0.55 J is only the last segment.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    stimulus: SLINGSHOT,
    question:
      'With the band stretched 0.20 m, the slingshot launches a 0.050 kg pebble horizontally. If all of the stored energy becomes the pebble\'s kinetic energy, what is the pebble\'s launch speed?',
    options: ['5.3 m/s', '6.9 m/s', '7.5 m/s', '9.8 m/s'],
    correctAnswer: 2,
    explanation:
      'With 1.4 J stored, $\\tfrac{1}{2}(0.050)v^2 = 1.4$ J gives $v = \\sqrt{56} \\approx 7.5$ m/s. The value 5.3 m/s drops the factor of one-half in the kinetic energy, and 6.9 m/s and 9.8 m/s start from the incorrect stored energies of 1.2 J and 2.4 J.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'An elevator car of mass 1200 kg is connected by a cable over a pulley at the top of the shaft to a 1000 kg counterweight, which moves down as the car moves up. A motor turns the pulley to raise the car at a constant 2.0 m/s. Friction and the masses of the cable and pulley are negligible. What power must the motor deliver? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['4.0 kW', '20 kW', '24 kW', '44 kW'],
    correctAnswer: 0,
    explanation:
      'As the car rises the counterweight descends at the same speed, so the system\'s gravitational energy increases at $(1200 - 1000)(10)(2.0) = 4.0$ kW, which the motor must supply. The value 24 kW ignores the counterweight, 44 kW adds the counterweight as a second load, and 20 kW uses the counterweight\'s weight instead of the difference.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'A crane lowers a 200 kg crate, initially at rest, through a vertical distance of 5.0 m with a constant downward acceleration of 2.0 m/s². How much work does the cable do on the crate during the descent? (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['−8000 J', '−10,000 J', '−12,000 J', '+10,000 J'],
    correctAnswer: 0,
    explanation:
      'Newton\'s second law gives $mg - T = ma$, so $T = 200(10 - 2.0) = 1600$ N upward, and the work is $-1600(5.0) = -8000$ J because the tension opposes the downward displacement. Setting the tension equal to the weight gives −10,000 J, using $m(g + a)$ gives −12,000 J, and +10,000 J is the work done by gravity, not by the cable.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-work-energy-power',
    question:
      'A pump lifts water from a well to a storage tank 12 m higher, delivering 0.50 m³ of water each minute at a low, steady speed. What is the minimum average power the pump must deliver? (Water density 1000 kg/m³; $g = 10\\,\\text{m/s}^2$.)',
    options: ['1.0 W', '100 W', '1.0 kW', '60 kW'],
    correctAnswer: 2,
    explanation:
      'Each minute the pump raises 500 kg through 12 m, which takes $500(10)(12) = 60{,}000$ J, so the power is $60{,}000/60 = 1.0$ kW. The value 60 kW treats the energy per minute as energy per second, 100 W leaves out $g$, and 1.0 W treats the 0.50 m³ as 0.50 kg.',
  },

  /* ---- U4 Linear Momentum (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    stimulus:
      '**Figure.** Three small balls are fixed to a light, rigid L-shaped frame that lies in the $xy$-plane: a 2.0 kg ball at the origin $(0, 0)$, a 1.0 kg ball at $(4.0\\text{ m}, 0)$ and a 3.0 kg ball at $(0, 3.0\\text{ m})$.',
    question: 'Where is the center of mass of the three-ball system?',
    options: ['(0.67 m, 1.5 m)', '(1.3 m, 1.0 m)', '(2.0 m, 1.5 m)', '(1.5 m, 0.67 m)'],
    correctAnswer: 0,
    explanation:
      'Weighting each position by mass gives $x = 1.0(4.0)/6.0 = 0.67$ m and $y = 3.0(3.0)/6.0 = 1.5$ m. The point (1.3 m, 1.0 m) averages the positions without weighting by mass, (2.0 m, 1.5 m) is the midpoint of the frame\'s extent, and (1.5 m, 0.67 m) swaps the coordinates.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question:
      'A 60 kg person stands at the back end of a 120 kg rowboat that is at rest on a still lake. The person walks 4.0 m forward along the boat to its front end. Water resistance is negligible. How far does the boat move relative to the water?',
    options: ['1.3 m backward', '2.0 m backward', '2.7 m backward', '1.3 m forward'],
    correctAnswer: 0,
    explanation:
      'With no external horizontal force the center of mass stays put, so $60\\,x_p = 120\\,x_b$ while $x_p + x_b = 4.0$ m; the boat moves $4.0(60)/180 \\approx 1.3$ m backward. The value 2.0 m uses the mass ratio 60/120 on the whole 4.0 m, and 2.7 m is the person\'s displacement relative to the water. The boat must move opposite the person, not forward.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    stimulus:
      'A 0.50 kg cart moves along a straight, level track with negligible friction. At $t = 0$ its velocity is +1.0 m/s. The table gives the net horizontal force on the cart, which is constant during each interval.\n\n| Time interval (s) | Net force (N) |\n|---|---|\n| 0 to 2.0 | +4.0 |\n| 2.0 to 5.0 | −2.0 |',
    question: 'What is the cart\'s velocity at $t = 5.0$ s?',
    options: ['+3.0 m/s', '+4.0 m/s', '+5.0 m/s', '+29 m/s'],
    correctAnswer: 2,
    explanation:
      'The net impulse is $(4.0)(2.0) + (-2.0)(3.0) = +2.0$ N·s, which changes the velocity by $2.0/0.50 = +4.0$ m/s, from +1.0 to +5.0 m/s. The value +4.0 m/s is the change alone, +3.0 m/s adds the impulse to the velocity without dividing by the mass, and +29 m/s adds the magnitudes of the two impulses.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    question:
      'Water leaves a hose horizontally at 10 m/s, at a rate of 2.0 kg/s, and strikes a vertical wall. The water does not bounce back; it runs straight down the wall. What is the magnitude of the average horizontal force the water exerts on the wall?',
    options: ['2.0 N', '20 N', '40 N', '100 N'],
    correctAnswer: 1,
    explanation:
      'Each second the wall stops 2.0 kg of water moving at 10 m/s, removing 20 kg·m/s of horizontal momentum, so the force is 20 N. The value 40 N would apply if the water rebounded at the same speed, 100 N is the rate of kinetic energy delivered ($\\tfrac{1}{2}\\dot{m}v^2$, in watts), and 2.0 N leaves out the speed.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-linear-momentum',
    stimulus:
      '**Figure.** On a level track with negligible friction, cart P (2.0 kg) moves to the right at 3.0 m/s toward cart Q (1.0 kg), which moves to the left at 3.0 m/s. The carts have putty on their bumpers and stick together when they collide.',
    question: 'How much of the system\'s kinetic energy is transformed into other forms in the collision?',
    options: ['1.5 J', '4.5 J', '12 J', '13.5 J'],
    correctAnswer: 2,
    explanation:
      'The total momentum is $2.0(3.0) - 1.0(3.0) = 3.0$ kg·m/s, so the joined carts move at 1.0 m/s to the right with $\\tfrac{1}{2}(3.0)(1.0)^2 = 1.5$ J; the initial kinetic energy was $9.0 + 4.5 = 13.5$ J, so 12 J is transformed. The value 13.5 J assumes the carts stop, 1.5 J is the energy that remains, and 4.5 J is cart Q\'s initial kinetic energy.',
  },

  /* ---- U5 Torque & Rotational Dynamics (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    stimulus:
      'A door, seen from above, is hinged along one edge. Four horizontal forces are applied to it, one at a time. ($\\sin 30° = 0.50$, $\\sin 60° = 0.87$)\n\n| Force | Magnitude (N) | Distance from hinge (m) | Angle between force and door |\n|---|---|---|---|\n| 1 | 20 | 0.80 | 90° |\n| 2 | 40 | 0.80 | 30° |\n| 3 | 30 | 0.60 | 90° |\n| 4 | 50 | 0.35 | 60° |',
    question: 'Which force exerts the torque of greatest magnitude about the hinge?',
    options: ['Force 1', 'Force 2', 'Force 3', 'Force 4'],
    correctAnswer: 2,
    explanation:
      'The torque magnitude is $rF\\sin\\theta$: 16, 16, 18 and 15.2 N·m for forces 1 to 4, so force 3 is greatest. Force 4 is the largest force but acts closest to the hinge and at an angle, and forces 1 and 2 act farthest out but are smaller or angled.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    stimulus:
      '**Figure.** A person holds a 5.0 kg ball in one palm with the forearm horizontal and the upper arm vertical. Model the forearm as a rigid bar that pivots at the elbow. The biceps muscle pulls straight up on the forearm 0.040 m from the elbow. The ball\'s center is 0.32 m from the elbow, and the forearm\'s own 15 N weight acts 0.15 m from the elbow. ($g = 10\\,\\text{m/s}^2$)',
    question: 'What is the magnitude of the force exerted by the biceps?',
    options: ['65 N', '400 N', '456 N', '520 N'],
    correctAnswer: 2,
    explanation:
      'Taking torques about the elbow, $F(0.040) = 50(0.32) + 15(0.15) = 18.25$ N·m, so $F \\approx 456$ N. Leaving out the forearm\'s weight gives 400 N, placing the forearm\'s weight at the hand gives 520 N, and 65 N is the total weight, which ignores how much shorter the biceps\' lever arm is.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    stimulus:
      'Small spheres are attached to light rods that rotate about a fixed axis. The table describes four arrangements; distances are measured from the axis.\n\n| Arrangement | Spheres |\n|---|---|\n| P | two 1.0 kg spheres, each 0.40 m from the axis |\n| Q | one 2.0 kg sphere, 0.40 m from the axis |\n| R | four 0.50 kg spheres, each 0.30 m from the axis |\n| S | one 1.0 kg sphere, 0.60 m from the axis |',
    question: 'Which arrangement has the greatest rotational inertia about the axis?',
    options: ['Arrangement P', 'Arrangement Q', 'Arrangement R', 'Arrangement S'],
    correctAnswer: 3,
    explanation:
      'Summing $mr^2$ gives 0.32, 0.32, 0.18 and 0.36 kg·m² for P, Q, R and S. Arrangement S has the least mass but the largest distance, and the distance enters squared. P and Q tie because the same 2.0 kg sits at the same 0.40 m, and R has the most spheres but the smallest radius.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question:
      'A potter\'s wheel with rotational inertia 0.80 kg·m² spins freely at 10 rad/s. The potter presses a wet hand against the wheel\'s rim, 0.25 m from the axis, with a normal force of 20 N. The coefficient of kinetic friction between hand and wheel is 0.40. If friction from the hand is the only torque, how long does the wheel take to stop?',
    options: ['0.25 s', '1.0 s', '1.6 s', '4.0 s'],
    correctAnswer: 3,
    explanation:
      'The friction force is $0.40(20) = 8.0$ N, its torque is $8.0(0.25) = 2.0$ N·m, so $\\alpha = 2.0/0.80 = 2.5$ rad/s² and $t = 10/2.5 = 4.0$ s. Leaving out the radius gives 1.0 s, using the 20 N normal force as the friction force gives 1.6 s, and 0.25 s divides the angular acceleration by the angular speed.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-torque-rotational-dynamics',
    question:
      'Disk 1 is a uniform solid disk of mass $M$ and radius $R$. Disk 2 is cut from the same sheet of material, so it has the same thickness, but its radius is $2R$. How does the rotational inertia of disk 2 about its central axis compare with that of disk 1?',
    options: ['Two times as large', 'Four times as large', 'Eight times as large', 'Sixteen times as large'],
    correctAnswer: 3,
    explanation:
      'Doubling the radius of a disk of the same thickness quadruples its area and so its mass, and $I = \\tfrac{1}{2}MR^2$ then grows by $4 \\times 2^2 = 16$. Four times accounts only for the larger radius or only for the larger mass, and two or eight times scale one factor linearly.',
  },

  /* ---- U6 Energy & Momentum of Rotating Systems (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question:
      'A motor turns a wheel that starts from rest on a frictionless axle; the wheel\'s rotational inertia is 0.50 kg·m². The motor\'s torque is 4.0 N·m while the wheel turns through its first 5.0 rad, and then the torque decreases linearly to zero as the wheel turns through the next 5.0 rad. What is the wheel\'s angular speed after it has turned through 10 rad?',
    options: ['7.7 rad/s', '8.9 rad/s', '11 rad/s', '12.6 rad/s'],
    correctAnswer: 2,
    explanation:
      'The work done is the area under the torque–angle graph, $4.0(5.0) + \\tfrac{1}{2}(4.0)(5.0) = 30$ J, so $\\tfrac{1}{2}(0.50)\\omega^2 = 30$ J and $\\omega \\approx 11$ rad/s. Counting only the first 5.0 rad (20 J) gives 8.9 rad/s, treating the torque as 4.0 N·m for all 10 rad (40 J) gives 12.6 rad/s, and 7.7 rad/s drops the factor of one-half from the kinetic energy.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    stimulus:
      '**Figure.** A playground merry-go-round has rotational inertia 320 kg·m² about its frictionless axle. A 40 kg child stands at its rim, 2.0 m from the axle, while it turns at 1.0 rad/s. The child then walks inward and stands 1.0 m from the axle. Treat the child as a point mass.',
    question: 'What is the new angular speed of the merry-go-round and child?',
    options: ['0.75 rad/s', '1.3 rad/s', '2.0 rad/s', '4.0 rad/s'],
    correctAnswer: 1,
    explanation:
      'No external torque acts about the axle, so angular momentum is conserved: $(320 + 40 \\cdot 2.0^2)(1.0) = (320 + 40 \\cdot 1.0^2)\\omega$, giving $\\omega = 480/360 \\approx 1.3$ rad/s. The value 0.75 rad/s inverts the ratio, 2.0 rad/s scales by the ratio of the child\'s radii, and 4.0 rad/s scales by its square, both ignoring the merry-go-round\'s own large rotational inertia.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-rotational-energy-momentum',
    question:
      'A thin hoop rolls without slipping along a level floor at 3.0 m/s and then rolls, still without slipping, up a ramp. How high does the hoop\'s center rise before the hoop momentarily stops? Air resistance is negligible. (Use $g = 10\\,\\text{m/s}^2$.)',
    options: ['0.45 m', '0.63 m', '0.68 m', '0.90 m'],
    correctAnswer: 3,
    explanation:
      'A rolling hoop has $K = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}(MR^2)(v/R)^2 = Mv^2$, and all of it becomes $Mgh$, so $h = v^2/g = 0.90$ m. The value 0.45 m counts only translational energy, as for a sliding block, and 0.63 m and 0.68 m are the heights for a rolling solid sphere and solid disk, which store less energy in rotation.',
  },

  /* ---- U7 Oscillations (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question:
      'A block attached to a horizontal spring oscillates in simple harmonic motion on a frictionless surface. During which part of each cycle do the block\'s velocity and acceleration point in the same direction?',
    options: [
      'Whenever the block is moving toward the equilibrium position',
      'Whenever the block is moving away from the equilibrium position',
      'Whenever the block is momentarily at rest at one of its two turning points',
      'Whenever the block is on the stretched side of the equilibrium position',
    ],
    correctAnswer: 0,
    explanation:
      'The acceleration always points toward equilibrium, so it points along the velocity whenever the block moves toward equilibrium and is speeding up. Moving away from equilibrium the two are opposite and the block slows; at the turning points the velocity is zero, so it has no direction; and on the stretched side the block moves away from equilibrium for half the time, when the two point opposite ways.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    stimulus:
      'Two carts oscillate, each on its own spring, on frictionless tracks. The table gives the amplitude and period read from each cart\'s sinusoidal position–time graph.\n\n| Cart | Amplitude (m) | Period (s) |\n|---|---|---|\n| A | 0.10 | 2.0 |\n| B | 0.20 | 1.0 |',
    question: 'How does cart B\'s maximum speed compare with cart A\'s?',
    options: ['Equal to cart A\'s', 'Half of cart A\'s', 'Twice cart A\'s', 'Four times cart A\'s'],
    correctAnswer: 3,
    explanation:
      'The maximum speed is $A\\omega = 2\\pi A/T$, so it doubles with B\'s doubled amplitude and doubles again with B\'s halved period: $0.20/1.0$ versus $0.10/2.0$, a factor of 4. Twice accounts for only one of the two changes, equal treats them as canceling, and half multiplies the amplitude by the period instead of dividing.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-oscillations',
    question:
      'A clockmaker wants a simple pendulum whose period is 2.0 s at a location where $g = 9.8\\,\\text{m/s}^2$. About how long should the pendulum be?',
    options: ['0.99 m', '3.1 m', '4.0 m', '6.2 m'],
    correctAnswer: 0,
    explanation:
      'From $T = 2\\pi\\sqrt{L/g}$, $L = gT^2/(4\\pi^2) = 9.8(4.0)/39.5 \\approx 0.99$ m. The value 3.1 m is $gT/(2\\pi)$, which forgets to square, 6.2 m uses $2\\pi$ instead of $4\\pi^2$, and 4.0 m comes from $T = \\pi\\sqrt{L/g}$, which drops the factor of 2.',
  },

  /* ---- U8 Fluids (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      '**Figure.** A U-shaped glass tube, open at both ends, contains water (density 1000 kg/m³). Oil that does not mix with water is poured into the left arm and floats on the water there. At equilibrium the oil column in the left arm is 0.16 m tall, measured up from the oil–water boundary, and the water surface in the right arm stands 0.12 m above the level of that boundary.',
    question: 'What is the density of the oil?',
    options: ['1780 kg/m³', '750 kg/m³', '1000 kg/m³', '1330 kg/m³'],
    correctAnswer: 1,
    explanation:
      'At the level of the boundary the pressures in the two arms are equal, so $\\rho_{oil}(0.16) = 1000(0.12)$ and $\\rho_{oil} = 750$ kg/m³. The value 1330 kg/m³ inverts the height ratio, 1000 kg/m³ assumes the columns balance only if the liquids match, and 1780 kg/m³ squares the inverted ratio.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      '**Figure.** A square glass window, 0.50 m on each side, is set vertically in the wall of a large aquarium. The center of the window is 2.0 m below the water surface (density 1000 kg/m³). Air at atmospheric pressure is on the other side of the window. ($g = 10\\,\\text{m/s}^2$)',
    question: 'What is the magnitude of the net force that the water and the air together exert on the window?',
    options: ['5000 N', '10,000 N', '20,000 N', '30,000 N'],
    correctAnswer: 0,
    explanation:
      'Atmospheric pressure acts on both faces and cancels, so the net force is the average gauge pressure, at the window\'s center, times the area: $(1000)(10)(2.0)(0.25) = 5000$ N. Reporting the gauge pressure of 20,000 Pa as a force gives 20,000 N, multiplying by the 0.50 m side instead of the area gives 10,000 N, and 30,000 N uses the absolute pressure and forgets the air on the other side.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      '**Figure.** A solid cube 0.10 m on each side floats at rest at the boundary between a layer of oil (density 800 kg/m³) and the water beneath it (density 1000 kg/m³). The bottom 0.040 m of the cube is in the water and its top 0.060 m is in the oil; the oil layer covers the cube completely.',
    question: 'What is the density of the cube?',
    options: ['400 kg/m³', '880 kg/m³', '900 kg/m³', '920 kg/m³'],
    correctAnswer: 1,
    explanation:
      'The cube\'s weight equals the weight of the fluid it displaces in both layers: $\\rho(0.10) = 1000(0.040) + 800(0.060)$, so $\\rho = 880$ kg/m³. The value 400 kg/m³ counts only the water, 900 kg/m³ simply averages the two densities, and 920 kg/m³ swaps the two depths.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    question:
      'A nurse pushes the plunger of a syringe at a steady 0.50 cm/s. The barrel\'s inner cross-sectional area is 2.0 cm², and the needle\'s inner cross-sectional area is 0.010 cm². Treating the liquid as an ideal fluid, how fast does it move through the needle?',
    options: ['0.0025 cm/s', '0.50 cm/s', '7.07 cm/s', '100 cm/s'],
    correctAnswer: 3,
    explanation:
      'Continuity requires $A_1v_1 = A_2v_2$, so $v_2 = 0.50(2.0)/0.010 = 100$ cm/s. The value 0.50 cm/s assumes the speed is the same everywhere, 7.07 cm/s scales by the square root of the area ratio as if speed depended on the diameter ratio, and 0.0025 cm/s inverts the area ratio.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-fluids',
    stimulus:
      '**Figure.** Water (density 1000 kg/m³) flows steadily through a pipe from point 1 at ground level up to point 2, which is 2.0 m higher. The pipe\'s cross-sectional area is 6.0 cm² at point 1 and 2.0 cm² at point 2, and the water moves at 1.0 m/s at point 1. Treat the water as an ideal fluid. ($g = 10\\,\\text{m/s}^2$)',
    question: 'How much greater is the pressure at point 1 than at point 2?',
    options: ['4.0 kPa', '16 kPa', '20 kPa', '24 kPa'],
    correctAnswer: 3,
    explanation:
      'Continuity gives 3.0 m/s at point 2, and Bernoulli\'s equation gives $P_1 - P_2 = \\rho g h + \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = 20{,}000 + 4{,}000$ Pa $= 24$ kPa. The value 20 kPa includes only the height, 4.0 kPa only the speed change, and 16 kPa subtracts the speed term as if the water slowed down.',
  },
]
