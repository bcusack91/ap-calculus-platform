import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 practice exam, form 3: Section II, 4 free-response questions (95 min).
 * Q1 Mathematical Routines (10) · Q2 Translation Between Representations (12)
 * Q3 Experimental Design and Analysis (10) · Q4 Qualitative/Quantitative Translation (8)
 * Per-question points follow the common 10/12/10/8 split (not printed in the 2027 overview).
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ============== Q1 — Mathematical Routines (10) ============== */
  {
    type: 'saq',
    topic: 'frq-mathematical-routines',
    prompt:
      '**FRQ 1 — Mathematical Routines (10 points)**\n\nA 0.20 kg ball hangs from a light string 1.25 m long. The ball is pulled aside until the string is horizontal and is released from rest. At the lowest point of its swing the ball strikes a 0.60 kg block that is at rest on a level floor. Just after the collision the ball moves backward (opposite its original direction) at 1.0 m/s. The block then slides across the floor; the coefficient of kinetic friction between block and floor is 0.30. Air resistance is negligible. Use $g = 10\\,\\text{m/s}^2$.',
    parts: [
      {
        letter: 'a',
        question: '(a) Calculate the speed of the ball just before it strikes the block.',
        rubric: [
          { id: 'a1', label: '1 pt — Energy conservation', description: '$mgL = \\tfrac{1}{2}mv^2$, with the ball falling the full string length, 1.25 m.' },
          { id: 'a2', label: '1 pt — Speed with units', description: '$v = \\sqrt{2(10)(1.25)} = 5.0$ m/s.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the tension in the string just before the collision.',
        rubric: [
          { id: 'b1', label: '1 pt — Newton\'s second law for circular motion', description: '$T - mg = mv^2/L$, with tension up and weight down at the lowest point. Writing $T = mg$ or $T + mg = mv^2/L$ does not earn the point.' },
          { id: 'b2', label: '1 pt — Tension with units', description: '$T = 0.20(10) + 0.20(25)/1.25 = 2.0 + 4.0 = 6.0$ N.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate the velocity of the block just after the collision.',
        rubric: [
          { id: 'c1', label: '1 pt — Momentum conservation with signs', description: '$0.20(5.0) = 0.20(-1.0) + 0.60\\,v_B$, with the ball\'s final velocity negative.' },
          { id: 'c2', label: '1 pt — Velocity with direction', description: '$v_B = 1.2/0.60 = 2.0$ m/s, in the ball\'s original direction of motion. Using +1.0 m/s for the ball gives 1.33 m/s and does not earn this point.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Determine whether the collision is elastic. Support your answer with calculations.',
        rubric: [
          { id: 'd1', label: '1 pt — Kinetic energies', description: 'Before: $\\tfrac{1}{2}(0.20)(5.0)^2 = 2.5$ J. After: $\\tfrac{1}{2}(0.20)(1.0)^2 + \\tfrac{1}{2}(0.60)(2.0)^2 = 0.10 + 1.2 = 1.3$ J.' },
          { id: 'd2', label: '1 pt — Conclusion', description: 'Not elastic (inelastic): the total kinetic energy decreases, by 1.2 J. (Noting that it is not perfectly inelastic, because the objects separate, is not required.)' },
        ],
      },
      {
        letter: 'e',
        question: '(e) Calculate how far the block slides before it stops.',
        rubric: [
          { id: 'e1', label: '1 pt — Work–energy or kinematics relation', description: '$\\mu_k m g d = \\tfrac{1}{2}mv_B^2$, or $a = \\mu_k g = 3.0$ m/s² with $0 = v_B^2 - 2ad$.' },
          { id: 'e2', label: '1 pt — Distance with units', description: '$d = (2.0)^2/(2 \\times 3.0) \\approx 0.67$ m. Accept 0.66–0.67 m; carry-through from an incorrect $v_B$ in part (c) earns this point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) The ball falls 1.25 m, so $mgL = \\tfrac{1}{2}mv^2$ and $v = \\sqrt{2gL} = \\sqrt{25} = 5.0$ m/s.\n\n(b) At the bottom the net upward force is centripetal: $T - mg = mv^2/L$, so $T = 0.20(10) + 0.20(5.0)^2/1.25 = 2.0 + 4.0 = 6.0$ N.\n\n(c) Taking the ball\'s original direction as positive: $0.20(5.0) = 0.20(-1.0) + 0.60v_B$, so $0.60v_B = 1.2$ and $v_B = 2.0$ m/s in the original direction.\n\n(d) $K_{before} = \\tfrac{1}{2}(0.20)(25) = 2.5$ J; $K_{after} = 0.10 + \\tfrac{1}{2}(0.60)(4.0) = 1.3$ J. Kinetic energy decreased, so the collision is inelastic (but not perfectly inelastic, since they separate).\n\n(e) Friction does $-\\mu_k mgd$ of work, which removes the block\'s kinetic energy: $0.30(0.60)(10)d = \\tfrac{1}{2}(0.60)(2.0)^2$, so $d = 1.2/1.8 \\approx 0.67$ m.',
  },

  /* ============== Q2 — Translation Between Representations (12) ============== */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    prompt:
      '**FRQ 2 — Translation Between Representations (12 points)**\n\nA 0.40 kg ball is launched from the edge of a ledge 50 m above level ground with a speed of 25 m/s at 37° above the horizontal ($\\sin 37° = 0.60$, $\\cos 37° = 0.80$). It lands on the ground below. Air resistance is negligible. Take up and away from the ledge as positive, and use $g = 10\\,\\text{m/s}^2$.',
    parts: [
      {
        letter: 'a',
        question: '(a) On separate axes, sketch the horizontal velocity component $v_x$ and the vertical velocity component $v_y$ of the ball as functions of time, from launch until it lands. Label the values at launch, the time of the highest point and the values at landing.',
        rubric: [
          { id: 'a1', label: '1 pt — Horizontal component', description: 'A horizontal line at $v_x = 20$ m/s for the whole flight.' },
          { id: 'a2', label: '1 pt — Vertical component shape', description: 'A single straight line with slope −10 m/s² starting at +15 m/s and crossing zero at $t = 1.5$ s (the highest point).' },
          { id: 'a3', label: '1 pt — Landing values', description: 'The $v_y$ line ends at $t = 5.0$ s with $v_y = -35$ m/s; the $v_x$ line ends at the same time. Carry-through from an incorrect flight time in part (b) earns this point if consistent.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the time the ball is in the air and its horizontal distance from the base of the ledge when it lands.',
        rubric: [
          { id: 'b1', label: '1 pt — Vertical-motion equation', description: '$-50 = 15t - 5t^2$ (or an equivalent two-step treatment of the rise and fall).' },
          { id: 'b2', label: '1 pt — Flight time', description: '$t = 5.0$ s. (Stating that the negative root, $t = -2.0$ s, is rejected is not required.)' },
          { id: 'b3', label: '1 pt — Horizontal distance', description: '$x = 20(5.0) = 100$ m.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Taking the ground as the zero of gravitational potential energy, give the kinetic energy $K$ and the gravitational potential energy $U_g$ of the ball–Earth system (i) at launch, (ii) at the highest point and (iii) just before landing, as you would show them on energy bar charts.',
        rubric: [
          { id: 'c1', label: '1 pt — At launch', description: '$K = \\tfrac{1}{2}(0.40)(25)^2 = 125$ J and $U_g = 0.40(10)(50) = 200$ J.' },
          { id: 'c2', label: '1 pt — At the highest point', description: 'Only $v_x$ remains, so $K = \\tfrac{1}{2}(0.40)(20)^2 = 80$ J, and $U_g = 325 - 80 = 245$ J (the ball is 11.25 m above the ledge, 61.25 m above the ground). $K = 0$ at the top does not earn this point.' },
          { id: 'c3', label: '1 pt — Just before landing, and the total', description: '$K = 325$ J and $U_g = 0$; the total, 325 J, is the same in all three states.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Calculate the ball\'s speed just before it lands, and show that it is consistent with your answer to part (c).',
        rubric: [
          { id: 'd1', label: '1 pt — Speed from components', description: '$v = \\sqrt{20^2 + 35^2} = \\sqrt{1625} \\approx 40$ m/s.' },
          { id: 'd2', label: '1 pt — Consistency with the energy', description: '$\\tfrac{1}{2}(0.40)(1625) = 325$ J, which matches the landing kinetic energy in part (c) (or $v^2 = 25^2 + 2(10)(50) = 1625$).' },
        ],
      },
      {
        letter: 'e',
        question: '(e) The ball is launched again from the same ledge with the same speed, but horizontally. Is its speed just before landing greater than, less than or equal to the speed in part (d)? Justify your answer.',
        rubric: [
          { id: 'e1', label: '1 pt — Equal, with an energy argument', description: 'Equal: the ball starts with the same kinetic energy at the same height, and gravity does the same work over the same 50 m drop, so it lands with the same kinetic energy and speed. The claim alone does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) $v_x$: a flat line at 20 m/s from $t = 0$ to $t = 5.0$ s. $v_y$: a straight line from +15 m/s at $t = 0$, falling by 10 m/s each second, through zero at $t = 1.5$ s (the highest point), down to −35 m/s at landing, $t = 5.0$ s.\n\n(b) $y = 15t - 5t^2 = -50$ gives $t^2 - 3t - 10 = 0$, so $(t - 5)(t + 2) = 0$ and $t = 5.0$ s. Horizontally, $x = 20(5.0) = 100$ m.\n\n(c) Launch: $K = \\tfrac{1}{2}(0.40)(625) = 125$ J, $U_g = 0.40(10)(50) = 200$ J. Top: the ball still moves at 20 m/s, so $K = 80$ J; it is $15^2/20 = 11.25$ m above the ledge, so $U_g = 0.40(10)(61.25) = 245$ J. Landing: $U_g = 0$ and $K = 325$ J. The total is 325 J each time.\n\n(d) $v = \\sqrt{20^2 + (-35)^2} = \\sqrt{1625} \\approx 40$ m/s, and $\\tfrac{1}{2}(0.40)(1625) = 325$ J, the same as the landing kinetic energy in (c).\n\n(e) Equal. The direction of launch does not change the initial kinetic energy or the 50 m drop, so gravity does the same work and the ball lands with the same 325 J of kinetic energy and the same speed.',
  },

  /* ============== Q3 — Experimental Design and Analysis (10) ============== */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    prompt:
      '**FRQ 3 — Experimental Design and Analysis (10 points)**\n\nStudents want to determine the coefficient of kinetic friction $\\mu_k$ between a wooden block and a long, level lab bench. They can launch the block across the bench by hand. They have a photogate connected to a timer, an opaque card of known width that can be mounted on top of the block, a meterstick and a balance.',
    parts: [
      {
        letter: 'a',
        question: '(a) Describe a procedure the students could use to collect data that would allow them to determine $\\mu_k$. Include what they measure, how they find the block\'s speed and how they would reduce experimental uncertainty. Give enough detail that another student could repeat the experiment.',
        rubric: [
          { id: 'a1', label: '1 pt — Speed measurement', description: 'Mounts the card, places the photogate on the bench, and finds the block\'s speed as it passes the gate from $v = w/\\Delta t$ (card width over blocking time), with the hand already off the block before the gate.' },
          { id: 'a2', label: '1 pt — Stopping distance', description: 'Measures with the meterstick the distance $d$ the block slides from the photogate to where it stops, using the same reference point on the block each time.' },
          { id: 'a3', label: '1 pt — Range of trials and repetition', description: 'Launches the block at at least five different speeds (repeating trials at each speed is a good addition). Repeating trials at a single speed does not earn this point, since a graph of $d$ against $v^2$ needs a range of speeds.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Derive an equation relating the stopping distance $d$ to the speed $v$ at the photogate. Use it to identify quantities the students could graph to obtain a straight line, and explain how they would find $\\mu_k$ from the line.',
        rubric: [
          { id: 'b1', label: '1 pt — Work–energy starting point', description: '$\\mu_k m g d = \\tfrac{1}{2}mv^2$ (friction\'s work removes the kinetic energy), or the equivalent with $a = \\mu_k g$.' },
          { id: 'b2', label: '1 pt — Linear relationship', description: '$d = v^2/(2\\mu_k g)$, so a graph of $d$ versus $v^2$ is a straight line through the origin (or $v^2$ versus $d$).' },
          { id: 'b3', label: '1 pt — μk from the slope', description: 'Slope $= 1/(2\\mu_k g)$, so $\\mu_k = 1/(2g \\cdot \\text{slope})$ (or slope $= 2\\mu_k g$ for $v^2$ versus $d$).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) The students\' data are shown.\n\n| Speed at photogate $v$ (m/s) | Stopping distance $d$ (m) |\n|---|---|\n| 0.60 | 0.046 |\n| 0.80 | 0.083 |\n| 1.00 | 0.126 |\n| 1.20 | 0.185 |\n| 1.40 | 0.249 |\n\nUsing your graph from part (b), calculate the slope of the best-fit line and use it to determine $\\mu_k$. Use $g = 9.8\\,\\text{m/s}^2$.',
        rubric: [
          { id: 'c1', label: '1 pt — Processed data', description: '$v^2$ values 0.36, 0.64, 1.00, 1.44, 1.96 m²/s² (or the values for the axes chosen).' },
          { id: 'c2', label: '1 pt — Slope of the best-fit line', description: 'About 0.127 s²/m for $d$ versus $v^2$ (accept 0.12–0.135 s²/m), or about 7.9 m/s² for $v^2$ versus $d$ (accept 7.4–8.3), from the line or well-separated points.' },
          { id: 'c3', label: '1 pt — Value of μk', description: '$\\mu_k = 1/(2 \\times 9.8 \\times 0.127) \\approx 0.40$. Accept 0.37–0.43, consistent with the slope found.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) After the experiment, the students discover that the bench was tilted slightly, so the block was sliding slightly downhill in each trial. Is their value of $\\mu_k$ too large, too small or unaffected? Explain.',
        rubric: [
          { id: 'd1', label: '1 pt — Too small, with reasoning', description: 'Too small: the gravitational component along the bench helped the block along, so it slid farther than friction alone would allow, making the slope of $d$ versus $v^2$ larger and the calculated $\\mu_k$ smaller. The claim alone does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Mount the card on the block and measure its width $w$. Place the photogate partway along the bench. Push the block so that it is already sliding freely (hand removed) when it passes the gate, and record the blocking time $\\Delta t$; the speed at the gate is $v = w/\\Delta t$. Measure the distance $d$ from the gate to where the block stops. Repeat for at least five different launch speeds, doing three trials near each speed.\n\n(b) After the gate only kinetic friction does work: $\\mu_k mgd = \\tfrac{1}{2}mv^2$, so $d = v^2/(2\\mu_k g)$. A graph of $d$ (vertical) versus $v^2$ (horizontal) is a straight line through the origin with slope $1/(2\\mu_k g)$, so $\\mu_k = 1/(2g \\times \\text{slope})$.\n\n(c) $v^2$ = 0.36, 0.64, 1.00, 1.44, 1.96 m²/s². The points fall on a line through the origin; using (0.36, 0.046) and (1.96, 0.249), the slope is $0.203/1.60 \\approx 0.127$ s²/m. Then $\\mu_k = 1/(2 \\times 9.8 \\times 0.127) \\approx 0.40$.\n\n(d) Too small. Sliding slightly downhill, the block had a component of gravity pushing it forward in addition to friction holding it back, so it went farther for each speed. That makes the slope too large, and since $\\mu_k = 1/(2g \\times \\text{slope})$, the calculated $\\mu_k$ is too small.',
  },

  /* ============== Q4 — Qualitative/Quantitative Translation (8) ============== */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative-translation',
    prompt:
      '**FRQ 4 — Qualitative/Quantitative Translation (8 points)**\n\nA crate of mass $m$ is moved across a level floor at constant velocity by a person using a light handle. In method 1 the person pulls on the handle with a force directed at an angle $\\theta$ above the horizontal. In method 2 the person pushes on the handle with a force directed at the same angle $\\theta$ below the horizontal. The coefficient of kinetic friction between the crate and the floor is $\\mu_k$ in both cases.',
    parts: [
      {
        letter: 'a',
        question: '(a) Is the magnitude of the force the person must exert in method 2 greater than, less than or equal to the magnitude in method 1? Justify your answer without deriving or manipulating equations.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct claim', description: 'Method 2 (pushing down at an angle) needs the greater force.' },
          { id: 'a2', label: '1 pt — Reasoning through the normal force', description: 'Pulling upward at an angle lifts part of the crate\'s weight, so the floor pushes up less and friction is smaller; pushing downward at an angle presses the crate into the floor, so the normal force and friction are larger, and a larger horizontal component is needed to balance it; at the same angle a larger horizontal component means a larger total force. Reasoning that mentions only "pushing is harder" earns no credit.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Derive an expression for the magnitude of the applied force in each method, in terms of $m$, $g$, $\\theta$ and $\\mu_k$.',
        rubric: [
          { id: 'b1', label: '1 pt — Normal force, method 1', description: '$N_1 = mg - F_1\\sin\\theta$ from vertical equilibrium.' },
          { id: 'b2', label: '1 pt — Expression, method 1', description: 'Horizontal equilibrium $F_1\\cos\\theta = \\mu_k N_1$ gives $F_1 = \\dfrac{\\mu_k mg}{\\cos\\theta + \\mu_k\\sin\\theta}$.' },
          { id: 'b3', label: '1 pt — Normal force, method 2', description: '$N_2 = mg + F_2\\sin\\theta$ from vertical equilibrium.' },
          { id: 'b4', label: '1 pt — Expression, method 2', description: 'Horizontal equilibrium $F_2\\cos\\theta = \\mu_k N_2$ gives $F_2 = \\dfrac{\\mu_k mg}{\\cos\\theta - \\mu_k\\sin\\theta}$.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Explain how your expressions from part (b) are or are not consistent with your reasoning in part (a).',
        rubric: [
          { id: 'c1', label: '1 pt — Consistency stated', description: 'For $\\theta > 0$ the denominator for method 2 is smaller ($\\cos\\theta - \\mu_k\\sin\\theta < \\cos\\theta + \\mu_k\\sin\\theta$), so $F_2 > F_1$, which agrees with part (a) (or correctly explains an inconsistency with an incorrect claim).' },
          { id: 'c2', label: '1 pt — Links the terms to the reasoning', description: 'Identifies the $\\pm F\\sin\\theta$ term in the normal force (the vertical component lifting the crate or pressing it down) as the source of the $\\pm\\mu_k\\sin\\theta$ difference in the denominators.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Pushing (method 2) takes more force. When the person pulls up at an angle, part of the force lifts the crate, so the floor\'s normal force is less than the weight and kinetic friction is smaller. When the person pushes down at an angle, part of the force presses the crate into the floor, so the normal force, and with it friction, is larger. At constant velocity the horizontal component of the applied force must equal the friction, so the push must be larger.\n\n(b) Method 1: vertically $N_1 + F_1\\sin\\theta = mg$, so $N_1 = mg - F_1\\sin\\theta$; horizontally $F_1\\cos\\theta = \\mu_k(mg - F_1\\sin\\theta)$, so $F_1 = \\mu_k mg/(\\cos\\theta + \\mu_k\\sin\\theta)$. Method 2: $N_2 = mg + F_2\\sin\\theta$ and $F_2\\cos\\theta = \\mu_k(mg + F_2\\sin\\theta)$, so $F_2 = \\mu_k mg/(\\cos\\theta - \\mu_k\\sin\\theta)$.\n\n(c) The numerators are equal, and for any angle above zero the denominator for method 2 is smaller, so $F_2 > F_1$, as claimed in (a). The difference comes from the $\\pm F\\sin\\theta$ term in the normal force: the vertical component lifts the crate in method 1 and presses it down in method 2, which is exactly the reasoning in (a).',
  },
]
