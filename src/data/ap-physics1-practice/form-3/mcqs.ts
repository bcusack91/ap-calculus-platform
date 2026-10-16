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
    optionExplanations: [
      '0 m/s is the average velocity, which is zero because the dog ends where it started. Average speed uses the total distance, 24 m, not the displacement.',
      '1.2 m/s counts the 12 m only once, but the dog runs 12 m out and 12 m back, a total distance of 24 m.',
      'The dog runs 12 m out and 12 m back, a total distance of 24 m, in 10.0 s, so its average speed is $24/10.0 = 2.4$ m/s.',
      '3.0 m/s is the dog\'s speed while it is moving, 24 m in 8.0 s; the average speed for the interval must include the 2.0 s rest, giving 24 m over 10.0 s.',
    ],
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
    optionExplanations: [
      'At $t = 8.0$ s the dog is on the last segment, whose slope is $(0 - 12)/(10.0 - 6.0) = -3.0$ m/s; the negative sign shows it is heading back toward the start.',
      '+3.0 m/s has the right magnitude but drops the sign of the slope. The position is decreasing from 12 m to 0, so the velocity is negative.',
      '0 m/s is the slope of the resting segment from 4.0 s to 6.0 s; by 8.0 s the dog is moving back toward the start.',
      '+0.75 m/s divides the position at 8.0 s, 6 m, by 8.0 s. The velocity is the slope of the position–time graph at that time, not position divided by time.',
    ],
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
    optionExplanations: [
      '10.0 min uses the downstream ground speed, 4.0 m/s, for both legs, ignoring that the current slows her to 2.0 m/s going upstream.',
      '13.3 min is the still-water time, 2.4 km at 3.0 m/s, which assumes the current\'s effects cancel. They do not: she spends longer fighting the current than riding it.',
      'Upstream her ground speed is $3.0 - 1.0 = 2.0$ m/s, taking 600 s; downstream it is 4.0 m/s, taking 300 s; the total is 900 s, or 15.0 min.',
      '20.0 min uses the upstream ground speed, 2.0 m/s, for both legs, ignoring that the current speeds her up to 4.0 m/s on the way back.',
    ],
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
    optionExplanations: [
      '2.7 is the average speed in m/s, $5.4/2$; it must be multiplied by the 1.50 s to give the distance fallen.',
      'The speed rises uniformly, so the distance is the area under the speed–time graph, $\\tfrac{1}{2}(5.4)(1.50) \\approx 4.1$ m, or the average speed of 2.7 m/s times 1.50 s.',
      '5.4 m reads the final speed, 5.4 m/s, as the distance; the distance is the area under the speed–time graph, not its final value.',
      '8.1 m multiplies the final speed by the time, $5.4(1.50)$, as if the wrench had moved at 5.4 m/s throughout instead of speeding up from rest.',
    ],
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
    optionExplanations: [
      'The ball rises until its vertical velocity is zero, at $t = 1.5$ s, and the height is the triangular area under the vertical-velocity graph: $\\tfrac{1}{2}(15)(1.5) \\approx 11.3$ m.',
      '22.5 m drops the one-half, computing $15(1.5)$, as if the ball rose at 15 m/s the whole time instead of slowing to zero.',
      '24.0 m is the horizontal range, $8.0(3.0)$, not a height; the horizontal velocity does not affect how high the ball rises.',
      '45.0 m multiplies the 15 m/s vertical launch component by the whole 3.0 s flight, which counts the descent and ignores that the vertical speed decreases.',
    ],
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
    optionExplanations: [
      '4.0 m/s² divides the 240 N air-resistance force alone by the mass. The acceleration depends on the net force, the weight minus the air resistance.',
      'At 20 m/s the net force is $mg - F_{air} = 600 - 240 = 360$ N downward, so $a = 360/60 = 6.0$ m/s².',
      '10 m/s² is the free-fall acceleration, which ignores the 240 N of air resistance acting upward at 20 m/s.',
      '14 m/s² adds the two forces, $(600 + 240)/60$, but air resistance points up, opposite the weight, so it subtracts.',
    ],
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
    optionExplanations: [
      '0.15 uses the average spring force during the compression, 3.0 N, but the block at rest feels the full spring force at its present compression, $kx = 6.0$ N.',
      'Static friction must balance the spring force, $kx = 150(0.040) = 6.0$ N, and it can be at most $\\mu_s mg = \\mu_s(20)$ N, so $\\mu_s \\ge 0.30$.',
      '0.60 adds the wall\'s push on the spring as a second 6.0 N force on the block; the wall acts on the spring, and only the spring\'s 6.0 N acts on the block.',
      '3.0 divides the 6.0 N spring force by the 2.0 kg mass instead of by the 20 N weight that sets the normal force.',
    ],
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
    optionExplanations: [
      '$0.10d$ is the balance point\'s distance from the Moon, not from Earth; the point lies close to the much less massive Moon.',
      '$0.50d$ ignores the difference in mass. With Earth 81 times as massive, the forces balance much closer to the Moon than to Earth.',
      'The forces balance where $M_E/r_E^2 = M_M/r_M^2$, so $r_E/r_M = \\sqrt{81} = 9$ and $r_E = 9d/10 = 0.90d$.',
      '$0.99d$ sets the distance ratio equal to the mass ratio, 81, without taking the square root; gravity falls off as $1/r^2$, so the ratio is $\\sqrt{81} = 9$.',
    ],
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
    optionExplanations: [
      'The deceleration is the slope of the velocity graph, $2.0/4.0 = 0.50$ m/s², and friction alone causes it, so $\\mu_k g = 0.50$ and $\\mu_k = 0.050$.',
      '0.15 divides the initial speed by the time, $6.0/4.0 = 1.5$ m/s², but the acceleration is the change in velocity, 2.0 m/s, over 4.0 s.',
      '0.20 uses the 2.0 m/s change in speed as the acceleration, forgetting to divide by the 4.0 s over which the change occurs.',
      '0.50 is the deceleration itself, in m/s²; the coefficient of friction is that deceleration divided by $g$.',
    ],
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
    optionExplanations: [
      'The child\'s push on the wall and the wall\'s push back on her are both inside the child–wagon system, as is the seat\'s friction on her, so the net external horizontal force is zero and the system stays at rest.',
      'The 50 N push on the wall is balanced within the system by the forces on the child; only an external horizontal force could accelerate the system, and none acts here.',
      'By Newton\'s third law the wall pushes back on her with exactly 50 N, not less. The two forces of a third-law pair are always equal in magnitude.',
      'The wall does push back with 50 N, but that is an internal force, and internal forces cannot set the system\'s center of mass moving in either direction.',
    ],
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
    optionExplanations: [
      '1.7 m/s uses $\\sin 30°$ instead of $\\tan 30°$. Dividing the horizontal tension equation by the vertical one gives $\\tan 30° = v^2/(rg)$.',
      'The vertical tension component balances the weight and the horizontal component supplies the centripetal force, so $\\tan 30° = v^2/(rg)$ and $v = \\sqrt{0.58(0.60)(10)} \\approx 1.9$ m/s.',
      '2.4 m/s ignores the angle, using $v = \\sqrt{rg}$, which corresponds to a string at 45°; at 30° the horizontal tension component is smaller than the weight.',
      '3.2 m/s inverts the tangent, $\\sqrt{rg/\\tan 30°}$, which would describe a string tilted 60° from the vertical rather than 30°.',
    ],
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
    optionExplanations: [
      'The wall\'s normal force supplies the centripetal force, $N = mv^2/r = 32m$, and friction $\\mu_s N$ must hold up the weight $mg$, so $\\mu_s \\ge g/(v^2/r) = 10/32 \\approx 0.31$.',
      '0.63 uses $v^2/(2r) = 16$ m/s² for the centripetal acceleration, which halves the normal force; the centripetal acceleration is $v^2/r = 32$ m/s².',
      '1.0 takes the wall\'s normal force to equal the rider\'s weight. The normal force here is horizontal and supplies the centripetal force, $mv^2/r$, which is 3.2 times the weight.',
      '3.2 inverts the ratio, $(v^2/r)/g$; the required coefficient is the weight divided by the normal force, $g/(v^2/r)$.',
    ],
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
    optionExplanations: [
      'With no horizontal force on it, the puck keeps its velocity (Newton\'s first law), continuing forward at the bus\'s original speed while the table slows beneath it.',
      'Slowing down with the bus would require a backward horizontal force on the puck, which the frictionless table cannot supply.',
      'Speeding up would require a forward force on the puck, and none acts. The puck only appears to move forward relative to the slowing bus.',
      'Stopping would need a large backward force on the puck, but no horizontal force acts on it, so its velocity cannot change.',
    ],
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
    optionExplanations: [
      'Half compares the net forces, $\\Delta p/\\Delta t$, which are 3000 N and then 1500 N. Power is the rate of energy transfer, which is larger in the second interval.',
      'The work-energy theorem gives 60 kJ in the first 4.0 s, or 15 kW, and $\\tfrac{1}{2}(1200)(20^2 - 10^2) = 180$ kJ in the next 8.0 s, or 22.5 kW, a ratio of 1.5.',
      'Twice compares the speeds, 20 m/s and 10 m/s; power depends on the change in kinetic energy, which goes with $v^2$, divided by the length of each interval.',
      'Three times compares the work, 180 kJ and 60 kJ, without dividing by the times; the second interval lasts twice as long, so its average power is only 1.5 times as great.',
    ],
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
    optionExplanations: [
      '1.25 m is the vertical rise, $5.0/(0.40 \\cdot 10)$, not the distance along the ramp; on a 30° ramp the distance traveled is twice the rise.',
      '1.44 m uses $\\cos 30°$ for the rise; the vertical height gained after sliding a distance $d$ along the ramp is $d\\sin 30°$.',
      'The spring stores $\\tfrac{1}{2}(250)(0.20)^2 = 5.0$ J, which all becomes gravitational energy: $mg\\,d\\sin 30° = 5.0$ J, so $d = 5.0/(0.40 \\cdot 10 \\cdot 0.50) = 2.5$ m.',
      '5.0 m drops the one-half from the spring energy, using $kx^2 = 10$ J, which doubles the distance.',
    ],
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
    optionExplanations: [
      'Kinetic friction has the same magnitude everywhere and opposes the motion, so its work, $-f\\,d$, grows with path length: more negative work on the 8.0 m path. Gravity is perpendicular to the level floor and does no work.',
      'Path independence holds for gravity, not for friction. Friction acts along the whole distance slid, so it does more negative work on the 8.0 m path than on the 5.0 m path.',
      'Gravity is perpendicular to the level floor along both paths, so it does no work on either trip, however long the path is.',
      'Friction\'s work depends on the distance slid, not on the time taken, so the longer curved path, not the straight one, gets the more negative work.',
    ],
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
    optionExplanations: [
      '1200 J is only the triangle for the first 4.0 s, when the power ramps up; it leaves out the 3600 J delivered at constant power afterward.',
      '3600 J is only the rectangle from 4.0 s to 10.0 s at 600 W; it leaves out the 1200 J delivered while the power ramps up.',
      'Energy is the area under the power–time graph: a triangle of $\\tfrac{1}{2}(600)(4.0) = 1200$ J plus a rectangle of $600(6.0) = 3600$ J, for 4800 J.',
      '6000 J treats the power as 600 W for the whole 10.0 s, but the power is lower during the first 4.0 s, while it ramps up from zero.',
    ],
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
    optionExplanations: [
      'One-fourth accounts for the halved stretch, which enters squared, but not for the doubled spring constant, which doubles the energy back up to half.',
      'Spring B stores $\\tfrac{1}{2}(2k)(x/2)^2 = \\tfrac{1}{4}kx^2$, which is half of spring A\'s $\\tfrac{1}{2}kx^2$, because the stretch enters squared.',
      'The same amount treats the energy as proportional to $kx$, so that doubling $k$ and halving $x$ cancel. Elastic energy is $\\tfrac{1}{2}kx^2$, so the halved stretch counts twice.',
      'Twice accounts only for the doubled spring constant and ignores the halved stretch, which by itself cuts the energy to one-fourth.',
    ],
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
    optionExplanations: [
      'Instantaneous power is $P = Fv$, so at constant power the motor\'s force is $P/v$, which shrinks as the speed rises; on a frictionless track the acceleration $F/m$ shrinks with it.',
      'A constant rate of energy transfer does not mean a constant force. Each joule adds less speed when the cart is already moving fast, so the acceleration drops.',
      'At constant power the kinetic energy grows at a constant rate, not faster, and $P = Fv$ means the force, and so the acceleration, falls as the speed rises.',
      'Power is force times speed, $P = Fv$, not force equals power times speed. Solving for the force gives $F = P/v$, which decreases as the speed increases.',
    ],
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
    optionExplanations: [
      'The system loses $(3.0 - 1.0)(10)(0.50) = 10$ J of gravitational energy, shared as kinetic energy by both blocks: $\\tfrac{1}{2}(4.0)v^2 = 10$ J, so $v \\approx 2.2$ m/s.',
      '2.6 m/s gives the 10 J to the 3.0 kg block alone, but the 1.0 kg block moves at the same speed and carries kinetic energy too.',
      '3.2 m/s is free fall through 0.50 m, $\\sqrt{2gh}$, which ignores the rising 1.0 kg block\'s weight and the kinetic energy it gains.',
      '4.5 m/s gives all 10 J to the 1.0 kg block alone, ignoring that the 3.0 kg block moves at the same speed and holds most of the kinetic energy.',
    ],
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
    optionExplanations: [
      '17 m/s is $\\sqrt{2gh} = \\sqrt{300}$, which ignores the 10 m/s launch speed; the ball starts with kinetic energy as well as gravitational energy.',
      'Energy conservation gives $v^2 = v_0^2 + 2gh = 100 + 300$, so $v = 20$ m/s for any launch direction, because gravity\'s work depends only on the 15 m drop.',
      '27 m/s adds the launch speed to $\\sqrt{2gh}$, $10 + 17$, but energies add, not speeds, so the squares must be combined: $\\sqrt{10^2 + 300}$.',
      'The direction changes the path and the flight time, but kinetic energy is a scalar and gravity\'s work depends only on the 15 m drop, so the final speed is 20 m/s for any direction.',
    ],
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
    optionExplanations: [
      '1.25 m swaps the masses, placing 3.0 kg at the rod\'s midpoint and 1.0 kg at its end: $[3.0(1.0) + 1.0(2.0)]/4.0$.',
      '1.50 m leaves the rod\'s term out of the numerator, $3.0(2.0)/4.0$; it also matches a simple average of the 1.0 m and 2.0 m positions, which ignores the masses.',
      'The rod\'s mass acts at its midpoint, 1.0 m from the left end, and the ball is at 2.0 m, so $x = [1.0(1.0) + 3.0(2.0)]/4.0 = 1.75$ m.',
      '2.33 m divides the moment sum, 7.0 kg·m, by the ball\'s 3.0 kg instead of the total 4.0 kg, which puts the center of mass beyond the end of the rod.',
    ],
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
    optionExplanations: [
      'The total momentum is $1.0(2.0) + 2.0(-1.0) = 0$, so afterward $1.0(-1.0) + 2.0v_B = 0$ and $v_B = +0.50$ m/s, to the right.',
      '0.50 m/s to the left has the right magnitude but the wrong direction. With cart A moving left afterward and zero total momentum, cart B must move right.',
      '1.5 m/s is cart B\'s change in velocity, from −1.0 to +0.50 m/s, not its final velocity.',
      '2.5 m/s to the right treats cart B\'s initial velocity as rightward, which gives a total momentum of 4.0 kg·m/s instead of zero.',
    ],
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
    optionExplanations: [
      'No net external force acts on the two-glider system, so its total momentum is conserved, and the velocity of its center of mass, total momentum divided by total mass, is unchanged.',
      'Kinetic energy decreases in a collision in which the gliders stick together; some of it is transformed into internal energy.',
      'The gliders exert forces on each other in the collision, so each one\'s speed changes; after sticking they share one common speed.',
      'Each glider\'s momentum changes because of the force from the other glider; only the total momentum of the system is conserved.',
    ],
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
    optionExplanations: [
      'Zero confuses momentum with speed. The speed is unchanged, but momentum is a vector, and after half a revolution the ball moves in the opposite direction.',
      '2.0 kg·m/s is the magnitude of the momentum itself, $0.50(4.0)$; reversing that momentum changes it by twice as much.',
      'After half a revolution the velocity has reversed, so $\\Delta p = m(4.0) - m(-4.0) = 2mv = 4.0$ kg·m/s.',
      '6.3 kg·m/s adds up momentum along the semicircular path, $\\pi mv$, as if momentum were a scalar; the change depends only on the initial and final momentum vectors.',
    ],
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
    optionExplanations: [
      'The block gains the momentum the bullet loses: $2.0v = 0.010(400 - 250) = 1.5$ kg·m/s, so $v = 0.75$ m/s.',
      '1.25 m/s uses the bullet\'s final momentum, $0.010(250)$; the block receives only the momentum the bullet loses in passing through.',
      '2.0 m/s gives the block all of the bullet\'s initial momentum, which would apply only if the bullet stopped inside the block instead of passing through.',
      '3.25 m/s adds the two speeds, $0.010(400 + 250)/2.0$, but the bullet keeps moving forward, so its momentum change is the difference.',
    ],
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
      'The weight acts at the midpoint, so $\\tau = Mg(L/2)$ and $\\alpha = \\tau/I = 3g/(2L) = 10$ rad/s², giving the free end $\\alpha L = 15$ m/s², more than $g$. The value 7.5 m/s² is the acceleration of the rod\'s center, 10 m/s² assumes free fall, and 5.0 m/s² uses $I = ML^2$ (all the mass at the end) while keeping the weight at the midpoint.',
    optionExplanations: [
      '5.0 m/s² treats all of the mass as a point at the rod\'s end, $I = ML^2$, while keeping the weight at the midpoint; the actual inertia is only $\\tfrac{1}{3}ML^2$.',
      '7.5 m/s² is the linear acceleration of the rod\'s center, $\\alpha(L/2)$; the free end is twice as far from the pivot, so its acceleration is twice as large.',
      '10 m/s² assumes the end falls freely, but the rod rotates about the pivot, and its angular acceleration gives the far end more than $g$.',
      'The weight acts at the midpoint, so $\\tau = Mg(L/2)$ and $\\alpha = \\tau/I = 3g/(2L) = 10$ rad/s², giving the free end $\\alpha L = 15$ m/s², more than $g$.',
    ],
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
    optionExplanations: [
      '40 N inverts the lever arms, $F(1.0) = 80(0.50)$, as if the right hand were at the pole\'s center and the weight 0.50 m from the end.',
      '80 N is the pole\'s weight. The right hand must hold up that weight and also balance the left hand\'s downward 80 N push.',
      'Taking torques about the left end, $F_R(0.50) = 80(1.0)$, so $F_R = 160$ N; the left hand then pushes down with 80 N, making the net force zero.',
      '320 N uses the full 2.0 m length as the weight\'s lever arm, but a uniform pole\'s weight acts at its center, 1.0 m from the left end.',
    ],
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
    optionExplanations: [
      '0.15 rad/s² inverts the ratio, $r/a = 0.30/2.0$; the angular acceleration is the linear acceleration divided by the radius.',
      '0.60 rad/s² multiplies the linear acceleration by the radius; the relation $a = \\alpha r$ means $\\alpha = a/r$.',
      '2.0 rad/s² reuses the linear acceleration, ignoring the 0.30 m radius that converts the linear quantity to an angular one.',
      'Rolling without slipping links the linear and angular accelerations by $a = \\alpha r$, so $\\alpha = 2.0/0.30 \\approx 6.7$ rad/s².',
    ],
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
    optionExplanations: [
      'The torques are $10(0.20) = 2.0$ N·m clockwise and $6.0(0.50) = 3.0$ N·m counterclockwise, so the net torque is 1.0 N·m counterclockwise and $\\alpha = 1.0/0.50 = 2.0$ rad/s² counterclockwise.',
      'This has the right magnitude but the wrong direction; the smaller 6.0 N force acts at the larger radius and produces the larger torque, so the wheel turns counterclockwise.',
      '8.0 rad/s² clockwise compares the forces instead of the torques, using the 4.0 N difference; torque depends on the radius at which each force acts.',
      '10 rad/s² adds the two torques, $(2.0 + 3.0)/0.50$, but they act in opposite directions, so they subtract.',
    ],
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
    optionExplanations: [
      'Mass held far from her body\'s axis greatly increases her rotational inertia, so by $\\alpha = \\tau/I$ a given tipping torque produces a smaller angular acceleration, giving her time to correct.',
      'Adding mass far from the axis increases rotational inertia; it cannot decrease it. A smaller rotational inertia would make her tip faster, not help her balance.',
      'Raising her center of mass would not reduce the torque from gravity when she tips; the pole helps by increasing her rotational inertia instead.',
      'A larger upward force from the rope acts at her support point and does not cancel a tipping torque; the pole works by slowing the rotation.',
    ],
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
    optionExplanations: [
      '75 J is only the translational energy, $\\tfrac{1}{2}(6.0)(5.0)^2$; a rolling ball also has rotational kinetic energy.',
      'Rolling without slipping gives $\\omega = v/R$, so $K = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}(\\tfrac{2}{5}MR^2)(v/R)^2 = 0.70Mv^2 = 105$ J.',
      '113 J uses the solid-disk value $\\tfrac{1}{2}MR^2$, which gives $0.75Mv^2$; a solid sphere has $I = \\tfrac{2}{5}MR^2$.',
      '150 J uses the hoop value $MR^2$, which gives $Mv^2$; a solid sphere has its mass closer to the axis, with $I = \\tfrac{2}{5}MR^2$.',
    ],
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
    optionExplanations: [
      'Zero assumes kinetic energy is conserved along with angular momentum, but friction between the disks transforms some of it into internal energy, as in a perfectly inelastic collision.',
      '1/4 is the fraction of the original energy that the upper disk alone keeps, $\\tfrac{1}{2}I(\\omega_0/2)^2$; the lower disk holds the same amount.',
      'Angular momentum is conserved, $I\\omega_0 = 2I\\omega$, so $\\omega = \\omega_0/2$, and the final energy $\\tfrac{1}{2}(2I)(\\omega_0/2)^2$ is half the initial, so half is transformed.',
      '3/4 squares the halved angular speed but forgets the doubled rotational inertia, counting only one disk\'s final energy as remaining.',
    ],
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
    optionExplanations: [
      'Angular momentum about the axle is conserved: $0.050(4.0)(0.60) = [0.12 + 0.050(0.60)^2]\\omega$, so $\\omega = 0.12/0.138 \\approx 0.87$ rad/s.',
      '1.0 rad/s leaves out the clay\'s own rotational inertia, $0.050(0.60)^2 = 0.018$ kg·m², after it sticks to the end of the rod.',
      '3.3 rad/s divides the clay\'s speed by the rod\'s full length, $4.0/1.2$, which ignores the rod\'s rotational inertia and uses the wrong radius.',
      '6.7 rad/s divides the clay\'s speed by the half-length, $4.0/0.60$, as if the clay kept its speed; it ignores the rod\'s rotational inertia entirely.',
    ],
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
    optionExplanations: [
      '0.51 N/m is $m/T^2$, which leaves out the factor of $4\\pi^2$ that comes from solving $T = 2\\pi\\sqrt{m/k}$ for $k$.',
      '3.2 N/m uses $2\\pi$ instead of $4\\pi^2$; solving $T = 2\\pi\\sqrt{m/k}$ for $k$ squares the $2\\pi$ along with the period.',
      '12.5 N/m divides by the period instead of its square, $4\\pi^2(0.20)/0.63$, which also gives a different value for each row of the table.',
      'From $T = 2\\pi\\sqrt{m/k}$, $k = 4\\pi^2m/T^2$, and every row gives about 20 N/m, for example $39.5(0.20)/(0.63)^2$.',
    ],
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
    optionExplanations: [
      'The block oscillates about its equilibrium position, where the spring force balances the weight; the net force is zero there, so the speed is greatest at the original hanging position.',
      'At the spring\'s natural length the weight is unbalanced, so the block is still accelerating there; that is not the equilibrium point of the hanging block.',
      'The lowest point is a turning point, where the block momentarily stops before the spring pulls it back up, so its speed is zero there.',
      'The highest point is also a turning point, where the speed is zero. A small spring force there means the block is far from equilibrium, not that it is moving fast.',
    ],
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
    optionExplanations: [
      'From $t = 0$ to 0.50 s the velocity is positive, so the cart moves right the whole time and stops at its rightmost point at 0.50 s; there the spring pulls it back, so the acceleration points left.',
      'The cart passes equilibrium when its speed is greatest, at 0.25 s and 0.75 s. At 0.50 s the velocity is zero, so the cart is at a turning point.',
      'The cart is at its leftmost point at $t = 0$ and 1.00 s; after moving right with positive velocity from 0 to 0.50 s, it is at its rightmost point.',
      'At a turning point the cart is farthest from equilibrium, where the spring force and the acceleration are greatest, not zero.',
    ],
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
    optionExplanations: [
      '1.2 kg/m³ leaves the pressure in kilopascals, dividing 1.2 by $gh = 10(0.10)$; 1.2 kPa is 1200 Pa.',
      '830 kg/m³ inverts the comparison with water, $1000/1.2$; a liquid giving more pressure per meter than water\'s 10 kPa/m is denser than water, not less.',
      'Gauge pressure is $\\rho g h$, so the slope of pressure versus depth, 12,000 Pa/m, equals $\\rho g$, and $\\rho = 12{,}000/10 = 1200$ kg/m³.',
      '12,000 kg/m³ is the slope, 12,000 Pa/m, taken as the density; it still has to be divided by $g = 10$ m/s².',
    ],
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
    optionExplanations: [
      'The buoyant force equals the hydrometer\'s weight in both liquids, so $\\rho_X(15.0) = 1000(12.0)$ and $\\rho_X = 800$ kg/m³; it floats deeper in the less dense liquid.',
      '1000 kg/m³ confuses the equal buoyant forces with equal densities. The buoyant force is the same, but the hydrometer displaces more of liquid X, so X is less dense.',
      '1250 kg/m³ inverts the ratio, $1000(15.0/12.0)$. Floating deeper means the liquid is less dense, so its density must be below water\'s.',
      '1560 kg/m³ squares the inverted ratio, $1000(15.0/12.0)^2$; the submerged volume is proportional to the depth, so the ratio enters only once.',
    ],
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
    optionExplanations: [
      '0.080 m/s inverts the area ratio, $0.40(0.60/3.0)$; the water must speed up, not slow down, as it passes into the smaller total area of the holes.',
      '0.40 m/s assumes the speed is unchanged, but the 30 holes have a total area of only 0.60 cm², one-fifth of the pipe\'s 3.0 cm².',
      'The volume flow rate is shared by all 30 holes, whose total area is $30(0.020) = 0.60$ cm², so $v = 0.40(3.0)/0.60 = 2.0$ m/s.',
      '60 m/s pushes the whole flow through a single 0.020 cm² hole, ignoring that the flow is divided among 30 holes.',
    ],
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
    optionExplanations: [
      '2.8 m/s is $\\sqrt{gh} = \\sqrt{8}$, which drops the factor of 2 that comes from setting $\\tfrac{1}{2}\\rho v^2$ equal to $\\rho g h$.',
      'Bernoulli\'s equation from the tank\'s surface, at atmospheric pressure and nearly at rest, to the open end, also at atmospheric pressure, gives $v = \\sqrt{2gh} = \\sqrt{2(10)(0.80)} = 4.0$ m/s.',
      '8.0 m/s is $gh = 10(0.80)$ with no square root and no factor of 2, so it is not even a speed; its units are m²/s².',
      '16 is $2gh$, the square of the speed in m²/s²; taking its square root gives the actual speed of 4.0 m/s.',
    ],
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
    optionExplanations: [
      'The net force comes from the pressure difference: $(1.0 - 0.70) \\times 10^5 \\times 4.0 \\times 10^{-3} = 120$ N, pushing the lid inward.',
      '280 N is the force from the inside air alone, $0.70 \\times 10^5 \\times 4.0 \\times 10^{-3}$; the outside air pushes the opposite way with a larger force.',
      '400 N is the force from the outside air alone; the air inside the jar pushes outward with 280 N, offsetting most of it.',
      '680 N adds the inside and outside forces, but they push on opposite faces of the lid in opposite directions, so they subtract.',
    ],
  },
]
