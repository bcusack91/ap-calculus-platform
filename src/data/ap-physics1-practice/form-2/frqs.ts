import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Physics 1 practice exam, form 2: Section II, 4 free-response questions (95 min).
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
      '**FRQ 1 — Mathematical Routines (10 points)**\n\nA rectangular raft made of solid foam is 2.0 m long, 1.5 m wide and 0.20 m thick, and has a mass of 90 kg. It floats at rest, flat side down and level, in a freshwater lake (density 1000 kg/m³). Water drag is negligible. Use $g = 10\\,\\text{m/s}^2$.',
    parts: [
      {
        letter: 'a',
        question: '(a) Calculate the depth of the raft\'s bottom face below the water surface when the raft floats empty.',
        rubric: [
          { id: 'a1', label: '1 pt — Buoyant force equals weight', description: 'Writes $\\rho_w g A d = mg$ (or $F_B = mg$ with $F_B = \\rho_w V_{sub} g$), with $A = 2.0 \\times 1.5 = 3.0$ m². Writing $F_B = \\rho_{raft} V g$ does not earn the point.' },
          { id: 'a2', label: '1 pt — Depth with units', description: '$d = 90/(1000 \\times 3.0) = 0.030$ m (3.0 cm). Accept 0.029–0.031 m.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) A 60 kg swimmer climbs onto the raft and stands at its center. Calculate how much farther the raft sinks.',
        rubric: [
          { id: 'b1', label: '1 pt — Extra buoyant force equals the swimmer\'s weight', description: '$\\rho_w g A\\,\\Delta d = (60)(10)$, or a new total depth from $\\rho_w g A d\' = (150)(10)$.' },
          { id: 'b2', label: '1 pt — Extra depth with units', description: '$\\Delta d = 60/3000 = 0.020$ m, so the bottom face is now 0.050 m deep. An answer of 0.050 m labeled as the extra depth does not earn the point.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Calculate the greatest total mass of passengers and cargo, placed at the center, that the raft can carry before its top surface reaches the water line.',
        rubric: [
          { id: 'c1', label: '1 pt — Maximum buoyant force uses the full raft volume', description: '$F_{B,max} = \\rho_w g (3.0 \\times 0.20) = 6000$ N, equivalent to 600 kg.' },
          { id: 'c2', label: '1 pt — Subtracts the raft\'s own mass', description: '$600 - 90 = 510$ kg. Answering 600 kg does not earn this point.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) With only the swimmer aboard, calculate the gauge pressure of the water at the raft\'s bottom face and the upward force this pressure exerts on the bottom face. State how this force compares with the combined weight of the raft and swimmer, and explain why.',
        rubric: [
          { id: 'd1', label: '1 pt — Gauge pressure and force', description: '$P = \\rho_w g d = (1000)(10)(0.050) = 500$ Pa, and a force consistent with it, $F = PA = 500(3.0) = 1500$ N upward.' },
          { id: 'd2', label: '1 pt — Equal, with reason', description: 'States the force equals the 1500 N combined weight, because the raft is in equilibrium and this upward pressure force is the buoyant force. Noting that the pressure forces on the sides are horizontal and cancel is good but not required.' },
        ],
      },
      {
        letter: 'e',
        question: '(e) The swimmer leaves the raft gently, without pushing it vertically. Immediately afterward the raft is still level with its bottom face 0.050 m deep. Calculate the raft\'s acceleration (magnitude and direction) at that instant.',
        rubric: [
          { id: 'e1', label: '1 pt — Net force on the raft', description: 'Buoyant force 1500 N up minus raft weight 900 N down: net 600 N upward.' },
          { id: 'e2', label: '1 pt — Acceleration with direction', description: '$a = 600/90 \\approx 6.7$ m/s² upward. Accept 6.6–6.7 m/s²; the direction must be stated.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Floating means the buoyant force equals the raft\'s weight: $\\rho_w g A d = mg$, with $A = 3.0$ m². So $d = 90/(1000 \\cdot 3.0) = 0.030$ m.\n\n(b) The extra buoyant force must equal the swimmer\'s weight: $\\rho_w g A\\,\\Delta d = 600$ N, so $\\Delta d = 600/(1000 \\cdot 10 \\cdot 3.0) = 0.020$ m. The bottom face is now 0.050 m deep.\n\n(c) Fully submerged, the raft displaces $3.0 \\times 0.20 = 0.60$ m³, so the largest buoyant force is $1000 \\cdot 10 \\cdot 0.60 = 6000$ N, enough to support 600 kg. Subtracting the raft\'s 90 kg leaves 510 kg of load.\n\n(d) $P = \\rho g d = 1000 \\cdot 10 \\cdot 0.050 = 500$ Pa, so $F = PA = 1500$ N. This equals the 1500 N weight of raft plus swimmer: the pressure forces on the vertical sides are horizontal and cancel, so the upward pressure force on the bottom is the buoyant force, and it must balance the weight for the raft to be at rest.\n\n(e) Right after the swimmer leaves, the buoyant force is still 1500 N but the weight is only 900 N, so $F_{net} = 600$ N upward and $a = 600/90 \\approx 6.7$ m/s² upward.',
  },

  /* ============== Q2 — Translation Between Representations (12) ============== */
  {
    type: 'saq',
    topic: 'frq-translation-representations',
    prompt:
      '**FRQ 2 — Translation Between Representations (12 points)**\n\nA 2.0 kg block is launched up a straight ramp inclined at 37° above the horizontal ($\\sin 37° = 0.60$, $\\cos 37° = 0.80$). At $t = 0$ the block is at the bottom of the ramp, moving up the ramp at 8.0 m/s. The coefficient of kinetic friction between the block and the ramp is 0.25, and the coefficient of static friction is 0.40. Take up the ramp as the positive direction. Air resistance is negligible; use $g = 10\\,\\text{m/s}^2$.',
    parts: [
      {
        letter: 'a',
        question: '(a) Draw (or describe precisely) free-body diagrams for the block (i) while it slides up the ramp and (ii) while it slides down the ramp. Represent each force with an arrow starting on the block, label it, and give each force\'s magnitude.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct forces in both diagrams', description: 'Exactly three forces in each: gravitational force (vertically down, 20 N), normal force (perpendicular to the ramp, away from it) and kinetic friction (parallel to the ramp). Any extra force, such as a "force of motion" up the ramp, loses this point; components of the gravitational force drawn as clearly distinguished (for example dashed) arrows are not extra forces.' },
          { id: 'a2', label: '1 pt — Friction direction reverses', description: 'Friction points down the ramp in (i), when the block moves up, and up the ramp in (ii), when the block moves down.' },
          { id: 'a3', label: '1 pt — Magnitudes', description: 'Normal force $mg\\cos 37° = 16$ N and friction $\\mu_k N = 4.0$ N in both diagrams, with the gravitational force 20 N.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Calculate the magnitude of the block\'s acceleration (i) while it slides up the ramp and (ii) while it slides down the ramp.',
        rubric: [
          { id: 'b1', label: '1 pt — Acceleration going up', description: '$a = g\\sin 37° + \\mu_k g\\cos 37° = 6.0 + 2.0 = 8.0$ m/s² (directed down the ramp; the direction is not required).' },
          { id: 'b2', label: '1 pt — Acceleration going down', description: '$a = g\\sin 37° - \\mu_k g\\cos 37° = 6.0 - 2.0 = 4.0$ m/s² (directed down the ramp; the direction is not required).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) When the block momentarily stops at its highest point, does it stay there or slide back down? Justify your answer by comparing forces.',
        rubric: [
          { id: 'c1', label: '1 pt — Correct force comparison', description: 'Compares the gravitational component along the ramp, $mg\\sin 37° = 12$ N, with the maximum static friction, $\\mu_s mg\\cos 37° = 0.40(16) = 6.4$ N. The equivalent comparison $\\tan 37° = 0.75 > \\mu_s = 0.40$, derived from these forces, also earns the point.' },
          { id: 'c2', label: '1 pt — Correct conclusion', description: 'Because 12 N > 6.4 N, static friction cannot hold the block, so it slides back down. The conclusion earns the point only with a correct comparison.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) On axes of velocity versus time, sketch the block\'s velocity from $t = 0$ until it returns to the bottom of the ramp. Label the time at which the block is at its highest point, the time at which it returns to the bottom, and the velocity at that return.',
        rubric: [
          { id: 'd1', label: '1 pt — Upward segment', description: 'A straight line from +8.0 m/s at $t = 0$ to zero at $t = 1.0$ s (slope −8.0 m/s²).' },
          { id: 'd2', label: '1 pt — Downward segment is shallower', description: 'A straight line continuing below the axis from zero with a smaller-magnitude slope (−4.0 m/s²), so the graph bends at $t = 1.0$ s.' },
          { id: 'd3', label: '1 pt — Return time and velocity', description: 'The block travels 4.0 m up the ramp, so it returns at $t = 1.0 + \\sqrt{2(4.0)/4.0} \\approx 2.4$ s with velocity $\\approx -5.7$ m/s. Accept 2.3–2.5 s and −5.5 to −5.8 m/s.' },
        ],
      },
      {
        letter: 'e',
        question: '(e) Using energy, calculate the block\'s speed when it returns to the bottom, and explain why it is less than the launch speed.',
        rubric: [
          { id: 'e1', label: '1 pt — Energy calculation', description: 'Friction does $-f(2d) = -4.0(8.0) = -32$ J over the 4.0 m up and back, so $K_f = 64 - 32 = 32$ J and $v = \\sqrt{2(32)/2.0} \\approx 5.7$ m/s.' },
          { id: 'e2', label: '1 pt — Reason the speed is smaller', description: 'Gravity does zero net work over the round trip, but kinetic friction does negative work on both legs, transforming mechanical energy into internal energy. "Energy is lost" without naming friction\'s negative work does not earn the point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) (i) Going up: weight 20 N straight down; normal force 16 N perpendicular to the ramp, away from its surface; kinetic friction 4.0 N down the ramp. (ii) Going down: the same weight and normal force, with the 4.0 N friction now pointing up the ramp.\n\n(b) Going up, the gravitational component (12 N) and friction (4.0 N) both point down the ramp: $a = 16/2.0 = 8.0$ m/s². Going down they oppose: $a = (12 - 4.0)/2.0 = 4.0$ m/s², down the ramp.\n\n(c) At the top, the pull down the ramp is $mg\\sin 37° = 12$ N, but static friction can supply at most $0.40 \\times 16 = 6.4$ N. Since 12 N is larger, the block slides back down.\n\n(d) The graph is a straight line from +8.0 m/s at $t = 0$ down to 0 at $t = 1.0$ s, then a less steep straight line continuing into negative values. Going up, the block travels $8.0^2/(2 \\cdot 8.0) = 4.0$ m; coming down from rest at 4.0 m/s², it takes $\\sqrt{2(4.0)/4.0} = 1.41$ s, so it returns at about 2.4 s moving at $-4.0(1.41) \\approx -5.7$ m/s.\n\n(e) Over the round trip gravity does no net work, and friction does $-4.0 \\text{ N} \\times 8.0 \\text{ m} = -32$ J. The kinetic energy falls from $\\tfrac{1}{2}(2.0)(8.0)^2 = 64$ J to 32 J, so $v = \\sqrt{32} \\approx 5.7$ m/s. It is less than 8.0 m/s because friction transforms 32 J of mechanical energy into internal energy.',
  },

  /* ============== Q3 — Experimental Design and Analysis (10) ============== */
  {
    type: 'saq',
    topic: 'frq-experimental-design',
    prompt:
      '**FRQ 3 — Experimental Design and Analysis (10 points)**\n\nStudents want to determine the gravitational field strength $g$ in their laboratory using a simple pendulum. They have a small, dense metal bob of radius 2.0 cm with a hook, light string, a stand with a clamp, a meterstick, a stopwatch and a protractor.',
    parts: [
      {
        letter: 'a',
        question: '(a) Describe a procedure the students could use to collect data that would allow them to determine $g$. Include what they vary, what they measure and how they would reduce experimental uncertainty in the period. Give enough detail that another student could repeat the experiment.',
        rubric: [
          { id: 'a1', label: '1 pt — Independent variable', description: 'Varies the pendulum length $L$ over at least five values, measuring each with the meterstick from the pivot to a consistent point on the bob (ideally its center).' },
          { id: 'a2', label: '1 pt — Measuring the period', description: 'Pulls the bob aside by a small angle (about 10° or less, checked with the protractor), releases it from rest and times the swings with the stopwatch.' },
          { id: 'a3', label: '1 pt — Reducing uncertainty', description: 'Times many oscillations (for example 10 or 20) and divides by the number, and/or repeats each timing and averages.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Identify the quantities the students should graph to obtain a straight line, and explain how they would use the line to find $g$.',
        rubric: [
          { id: 'b1', label: '1 pt — Linearizing quantities', description: 'Graphs $T^2$ versus $L$ (or $T$ versus $\\sqrt{L}$, or $L$ versus $T^2$), justified by $T = 2\\pi\\sqrt{L/g}$.' },
          { id: 'b2', label: '1 pt — g from the slope', description: 'For $T^2$ versus $L$, slope $= 4\\pi^2/g$, so $g = 4\\pi^2/\\text{slope}$ (or the matching relation for the axes chosen).' },
        ],
      },
      {
        letter: 'c',
        question: '(c) The students\' data are shown.\n\n| Length $L$ (m) | Time for 10 oscillations (s) |\n|---|---|\n| 0.20 | 9.0 |\n| 0.40 | 12.7 |\n| 0.60 | 15.5 |\n| 0.80 | 18.0 |\n| 1.00 | 20.1 |\n\nCalculate the values needed for your graph, describe the best-fit line, and use its slope to calculate $g$.',
        rubric: [
          { id: 'c1', label: '1 pt — Processed data', description: 'Periods 0.90, 1.27, 1.55, 1.80, 2.01 s and $T^2$ values 0.81, 1.61, 2.40, 3.24, 4.04 s² (or the values for the axes chosen).' },
          { id: 'c2', label: '1 pt — Slope of the best-fit line', description: 'A straight line through (or very near) the origin with slope about 4.0 s²/m (accept 3.9–4.1 s²/m), found from the line or from two well-separated points. Dividing one data point by its own $L$ happens to give a similar number here but does not earn the point, because it assumes the line passes through the origin instead of using the best fit.' },
          { id: 'c3', label: '1 pt — Value of g', description: '$g = 4\\pi^2/4.04 \\approx 9.8$ m/s². Accept 9.6–10.1 m/s², consistent with the slope found.' },
        ],
      },
      {
        letter: 'd',
        question: '(d) Another group measures each length from the clamp to the top of the bob instead of to its center, and graphs $T^2$ versus $L$. Describe how this changes their graph, and state whether their value of $g$ found from the slope is too large, too small or unaffected.',
        rubric: [
          { id: 'd1', label: '1 pt — Effect on the graph', description: 'Every recorded length is 0.020 m too short, so each point shifts left by the same amount: the line keeps its slope but no longer passes through the origin (it has a positive $T^2$-intercept, equivalently it crosses the $L$-axis at −0.020 m).' },
          { id: 'd2', label: '1 pt — Effect on g', description: 'Unaffected, because a constant offset in $L$ does not change the slope. Saying $g$ is too large or too small loses this point.' },
        ],
      },
    ],
    sampleResponse:
      '(a) Tie the bob to the string and clamp the string to the stand. Measure $L$ from the clamp to the bob\'s center with the meterstick. Pull the bob aside about 10° (check with the protractor) and release it from rest. Time 10 full oscillations with the stopwatch and divide by 10 to get $T$; repeat the timing three times and average. Repeat for five lengths from 0.20 m to 1.00 m.\n\n(b) Since $T = 2\\pi\\sqrt{L/g}$, $T^2 = (4\\pi^2/g)L$. A graph of $T^2$ (vertical) versus $L$ (horizontal) is a straight line through the origin with slope $4\\pi^2/g$, so $g = 4\\pi^2/\\text{slope}$.\n\n(c) $T$ = 0.90, 1.27, 1.55, 1.80, 2.01 s, so $T^2$ = 0.81, 1.61, 2.40, 3.24, 4.04 s². The points lie on a straight line through the origin. Using (0.20, 0.81) and (1.00, 4.04), the slope is $3.23/0.80 \\approx 4.04$ s²/m, so $g = 39.5/4.04 \\approx 9.8$ m/s².\n\n(d) Their lengths are all 0.020 m too short, so every point moves 0.020 m to the left. The line has the same slope but crosses the $T^2$ axis above zero. Because $g$ comes from the slope, their value of $g$ is unaffected.',
  },

  /* ============== Q4 — Qualitative/Quantitative Translation (8) ============== */
  {
    type: 'saq',
    topic: 'frq-qualitative-quantitative-translation',
    prompt:
      '**FRQ 4 — Qualitative/Quantitative Translation (8 points)**\n\nPendulum 1 is a uniform rod of mass $M$ and length $L$, pivoted at its top end. Pendulum 2 is a small ball of mass $M$ fixed to the end of a light rod of length $L$, also pivoted at its top end. The rotational inertia of the uniform rod about its end is $\\tfrac{1}{3}ML^2$; treat the ball as a point mass. Each pendulum is held horizontal and released from rest, and each swings down about a frictionless pivot. Air resistance is negligible.',
    parts: [
      {
        letter: 'a',
        question: '(a) When each pendulum hangs vertically, is the speed of the free end of pendulum 1 greater than, less than or equal to the speed of the ball on pendulum 2? Justify your answer without deriving or manipulating equations.',
        rubric: [
          { id: 'a1', label: '1 pt — Correct claim', description: 'The free end of the uniform rod (pendulum 1) is faster.' },
          { id: 'a2', label: '1 pt — Qualitative reasoning', description: 'A valid physical argument, for example: the rod\'s center of mass falls only half as far, so it gains less kinetic energy, but its mass sits much closer to the pivot, so its rotational inertia is reduced even more, giving a larger angular speed; or, by torque, the rod\'s weight acts at half the distance but its rotational inertia is far smaller, so it has a larger angular acceleration throughout the swing. The response must say explicitly why the inertia effect outweighs the energy (or torque) effect, and that both free ends are a distance $L$ from the pivot; exact fractions are not required. A bare claim, or reasoning about mass alone, does not earn this point.' },
        ],
      },
      {
        letter: 'b',
        question: '(b) Derive an expression for the speed of the free end of each pendulum when it hangs vertically, in terms of $g$ and $L$, and find the ratio of the two speeds.',
        rubric: [
          { id: 'b1', label: '1 pt — Energy equation for the rod', description: '$Mg(L/2) = \\tfrac{1}{2}\\left(\\tfrac{1}{3}ML^2\\right)\\omega^2$, using the drop of the center of mass ($L/2$) and the rotational kinetic energy.' },
          { id: 'b2', label: '1 pt — Speed of the rod\'s free end', description: '$\\omega = \\sqrt{3g/L}$, so $v_1 = \\omega L = \\sqrt{3gL}$.' },
          { id: 'b3', label: '1 pt — Speed of the ball', description: '$MgL = \\tfrac{1}{2}Mv_2^2$ (or $\\tfrac{1}{2}(ML^2)\\omega^2$), so $v_2 = \\sqrt{2gL}$.' },
          { id: 'b4', label: '1 pt — Comparison', description: 'States $v_1/v_2 = \\sqrt{3/2} \\approx 1.22$ from the two expressions.' },
        ],
      },
      {
        letter: 'c',
        question: '(c) Explain how your expressions from part (b) are or are not consistent with your reasoning in part (a).',
        rubric: [
          { id: 'c1', label: '1 pt — Consistency stated', description: 'States that $\\sqrt{3gL} > \\sqrt{2gL}$ agrees with the claim that the rod\'s free end is faster (or correctly explains an inconsistency with an incorrect claim in part (a)).' },
          { id: 'c2', label: '1 pt — Links the factors to the reasoning', description: 'Identifies the factor of $\\tfrac{1}{2}$ from the rod\'s center-of-mass drop and the factor of $\\tfrac{1}{3}$ from its rotational inertia, and notes that the net effect, $\\omega^2 = 3g/L$ versus $2g/L$, favors the rod, as argued in part (a).' },
        ],
      },
    ],
    sampleResponse:
      '(a) The free end of the uniform rod is faster. Both free ends are the same distance $L$ from the pivot, so the faster one belongs to the pendulum with the larger angular speed. The rod\'s center of mass is at its middle, so it falls only half as far as the ball and the rod gains only half as much kinetic energy. But the rod\'s mass is spread out along its length, much of it close to the pivot, so its rotational inertia is only one-third of the ball\'s. Cutting the inertia to one-third more than makes up for having half the energy, so the rod turns faster at the bottom.\n\n(b) Rod: $Mg\\frac{L}{2} = \\frac{1}{2}\\cdot\\frac{1}{3}ML^2\\omega^2$, so $\\omega^2 = 3g/L$ and $v_1 = \\omega L = \\sqrt{3gL}$. Ball: $MgL = \\frac{1}{2}Mv_2^2$, so $v_2 = \\sqrt{2gL}$. The ratio is $v_1/v_2 = \\sqrt{1.5} \\approx 1.22$.\n\n(c) These agree with part (a): $\\sqrt{3gL} > \\sqrt{2gL}$. The $\\frac{1}{2}$ in the rod\'s energy comes from the center of mass falling $L/2$, and the $\\frac{1}{3}$ comes from its rotational inertia; together they give $\\omega^2 = 3g/L$ for the rod versus $2g/L$ for the ball, so the smaller rotational inertia wins, as argued.',
  },
]
