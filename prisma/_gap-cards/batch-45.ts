export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "linearization-differentials-calcab",
    cards: [
      {
        front: "What is the equation of the linearization (tangent line approximation) of $f$ at $x = a$?",
        back: "$L(x) = f(a) + f'(a)(x - a)$. Here $f(a)$ is the function value at the point of tangency, $f'(a)$ is the slope there, and $L(x) \\\\approx f(x)$ for $x$ near $a$.",
        hint: "It is just the tangent line written as a function.",
      },
      {
        front: "Why does linearization give a good approximation only near the point of tangency?",
        back: "The tangent line matches $f$ in value and first derivative at $x = a$, so the error is roughly proportional to $(x-a)^2$. As $x$ moves away from $a$, the curve bends away from the line and the error grows.",
        hint: "Error scales with the square of the distance.",
      },
      {
        front: "Estimate $\\\\sqrt{4.1}$ using linearization.",
        back: "Let $f(x) = \\\\sqrt{x}$, $a = 4$. Then $f(4) = 2$ and $f'(x) = \\\\frac{1}{2\\\\sqrt{x}}$ so $f'(4) = \\\\frac{1}{4}$. $L(4.1) = 2 + \\\\frac{1}{4}(0.1) = 2.025$ (actual $\\\\approx 2.0248$).",
        hint: "Pick a base point where the value is easy.",
      },
      {
        front: "What is the differential $dy$, and how is it defined?",
        back: "$dy = f'(x)\\\\,dx$. Here $dx$ is an independent small change in $x$ and $dy$ is the corresponding change along the tangent line. It approximates the true change $\\\\Delta y$ in the function.",
        hint: "Slope times the run.",
      },
      {
        front: "Distinguish $\\\\Delta y$ from $dy$.",
        back: "$\\\\Delta y = f(x + \\\\Delta x) - f(x)$ is the exact change in the function. $dy = f'(x)\\\\,dx$ is the change along the tangent line. For small $dx = \\\\Delta x$, $dy \\\\approx \\\\Delta y$.",
        hint: "Curve change vs. line change.",
      },
      {
        front: "Use differentials to estimate the change in volume of a sphere when $r$ goes from $3$ to $3.02$.",
        back: "$V = \\\\frac{4}{3}\\\\pi r^3$, so $dV = 4\\\\pi r^2\\\\,dr$. At $r = 3$, $dr = 0.02$: $dV = 4\\\\pi (9)(0.02) = 0.72\\\\pi \\\\approx 2.26$ cubic units.",
        hint: "$dV = 4\\\\pi r^2\\\\, dr$.",
      },
      {
        front: "When does linearization OVERESTIMATE the true value of $f$?",
        back: "When the graph is concave down ($f'' < 0$) near $a$, the tangent line lies above the curve, so $L(x)$ overestimates $f(x)$.",
        hint: "Concave down means tangent on top.",
      },
      {
        front: "When does linearization UNDERESTIMATE the true value of $f$?",
        back: "When the graph is concave up ($f'' > 0$) near $a$, the tangent line lies below the curve, so $L(x)$ underestimates $f(x)$.",
        hint: "Concave up means tangent below.",
      },
      {
        front: "What is relative (or percent) error expressed with differentials?",
        back: "Relative error $\\\\approx \\\\frac{dy}{y}$, and percent error $\\\\approx \\\\frac{dy}{y}\\\\times 100\\\\%$. Useful in error-propagation problems where a measured quantity has uncertainty $dx$.",
        hint: "Divide the differential by the quantity itself.",
      },
      {
        front: "What is the standard procedure to approximate $f(b)$ by linearization?",
        back: "Choose a nearby base point $a$ where $f(a)$ and $f'(a)$ are easy. Compute $L(x) = f(a) + f'(a)(x-a)$. Evaluate $L(b)$. Use concavity to state over/under-estimate.",
        hint: "Find a, build L, plug in b.",
      },
      {
        front: "Common trap: a student picks $a$ far from the target point. Why is this a problem?",
        back: "Linearization accuracy depends on $x$ being close to $a$. A distant base point produces large error. Always choose the nearest convenient point with a known value.",
        hint: "Closer base = smaller error.",
      },
      {
        front: "Estimate $f(2.1)$ given $f(2) = 5$ and $f'(2) = 3$.",
        back: "$L(2.1) = 5 + 3(2.1 - 2) = 5 + 3(0.1) = 5.3$.",
        hint: "Plug straight into the tangent-line formula.",
      },
      {
        front: "Newton's Method: what is the iteration formula and what does it find?",
        back: "$x_{n+1} = x_n - \\\\frac{f(x_n)}{f'(x_n)}$. It uses tangent-line (linearization) ideas repeatedly to approximate a root of $f(x) = 0$.",
        hint: "Repeatedly follow the tangent down to the x-axis.",
      },
    ],
  },
  {
    slug: "integration-applications-calcab",
    cards: [
      {
        front: "Formula for the area between two curves $f$ (top) and $g$ (bottom) from $x = a$ to $x = b$.",
        back: "$A = \\\\int_a^b [f(x) - g(x)]\\\\,dx$, where $f(x) \\\\ge g(x)$ on $[a,b]$. Always subtract bottom from top; split the integral wherever the curves cross.",
        hint: "Top minus bottom.",
      },
      {
        front: "When integrating with respect to $y$, what is the area-between-curves formula?",
        back: "$A = \\\\int_c^d [f_{\\\\text{right}}(y) - f_{\\\\text{left}}(y)]\\\\,dy$, where you express curves as $x$ in terms of $y$. Use this when curves are easier as functions of $y$.",
        hint: "Right minus left, integrate dy.",
      },
      {
        front: "Disk method: volume of a solid of revolution about a horizontal axis.",
        back: "$V = \\\\pi \\\\int_a^b [R(x)]^2\\\\,dx$, where $R(x)$ is the radius (distance from the axis to the curve). Use when the region touches the axis of revolution (no gap).",
        hint: "Pi times radius squared, integrated.",
      },
      {
        front: "Washer method: volume formula and when to use it.",
        back: "$V = \\\\pi \\\\int_a^b \\\\left([R(x)]^2 - [r(x)]^2\\\\right)\\\\,dx$, where $R$ is the outer radius and $r$ the inner radius. Use when there is a gap between the region and the axis.",
        hint: "Outer squared minus inner squared.",
      },
      {
        front: "Volume by known cross-sections: general setup.",
        back: "$V = \\\\int_a^b A(x)\\\\,dx$, where $A(x)$ is the area of a cross-section perpendicular to the $x$-axis. The base is usually a region; the side length comes from the curves bounding it.",
        hint: "Integrate the cross-sectional area.",
      },
      {
        front: "Cross-section area: square with side $s$, semicircle with diameter $d$, equilateral triangle with side $s$.",
        back: "Square: $s^2$. Semicircle (diameter $d$): $\\\\frac{1}{8}\\\\pi d^2$. Equilateral triangle: $\\\\frac{\\\\sqrt{3}}{4}s^2$. The side or diameter equals the distance between bounding curves.",
        hint: "Side length comes from top minus bottom.",
      },
      {
        front: "Average value of a function $f$ on $[a,b]$.",
        back: "$f_{\\\\text{avg}} = \\\\frac{1}{b-a}\\\\int_a^b f(x)\\\\,dx$. It is the constant height that gives the same net area as $f$ over the interval.",
        hint: "Integral divided by interval length.",
      },
      {
        front: "Accumulation: if $F(x) = F(a) + \\\\int_a^x f(t)\\\\,dt$, what does the integral represent?",
        back: "It is the net accumulated change of $F$ from $a$ to $x$. Add it to the initial value $F(a)$ to get the current amount. This is the FTC accumulation form.",
        hint: "Start value plus accumulated change.",
      },
      {
        front: "A tank fills at rate $r(t)$ liters/min. What does $\\\\int_0^{10} r(t)\\\\,dt$ give?",
        back: "The total liters added to the tank during the first 10 minutes (net change in volume). Add the initial volume to get the amount present at $t = 10$.",
        hint: "Integral of a rate is total amount.",
      },
      {
        front: "Common trap: forgetting to find intersection points before computing area between curves. Why does it matter?",
        back: "The limits of integration ARE the intersection points (or given bounds). Wrong limits give the wrong area, and you may need to split where the top/bottom curves switch.",
        hint: "Set $f(x) = g(x)$ to find limits.",
      },
      {
        front: "Worked example: area between $y = x$ and $y = x^2$ on $[0,1]$.",
        back: "On $[0,1]$, $x \\\\ge x^2$. $A = \\\\int_0^1 (x - x^2)\\\\,dx = \\\\left[\\\\frac{x^2}{2} - \\\\frac{x^3}{3}\\\\right]_0^1 = \\\\frac{1}{2} - \\\\frac{1}{3} = \\\\frac{1}{6}$.",
        hint: "Top minus bottom, then integrate.",
      },
      {
        front: "Revolving about a line $y = k$ (not the x-axis): how do the radii change?",
        back: "The radius is the distance from the curve to the line: $R(x) = |f(x) - k|$. For a washer, outer and inner radii are each measured from $y = k$, not from $y = 0$.",
        hint: "Radius is distance to the axis of revolution.",
      },
      {
        front: "Total distance vs. displacement for velocity $v(t)$ on $[a,b]$.",
        back: "Displacement $= \\\\int_a^b v(t)\\\\,dt$ (net, can be negative). Total distance $= \\\\int_a^b |v(t)|\\\\,dt$ (always non-negative). Split where $v$ changes sign for distance.",
        hint: "Absolute value for distance.",
      },
      {
        front: "Worked example: average value of $f(x) = x^2$ on $[0,3]$.",
        back: "$f_{\\\\text{avg}} = \\\\frac{1}{3}\\\\int_0^3 x^2\\\\,dx = \\\\frac{1}{3}\\\\cdot\\\\frac{27}{3} = \\\\frac{1}{3}\\\\cdot 9 = 3$.",
        hint: "Divide by the interval length 3.",
      },
    ],
  },
  {
    slug: "particle-motion-calcab",
    cards: [
      {
        front: "Relationship among position $s(t)$, velocity $v(t)$, and acceleration $a(t)$.",
        back: "$v(t) = s'(t)$ and $a(t) = v'(t) = s''(t)$. Differentiate to go down (position to velocity to acceleration); integrate to go up.",
        hint: "Derivatives go down, integrals go up.",
      },
      {
        front: "When is a particle moving RIGHT (positive direction) vs. LEFT?",
        back: "Moving right when $v(t) > 0$; moving left when $v(t) < 0$. The particle is momentarily at rest when $v(t) = 0$.",
        hint: "Sign of velocity gives direction.",
      },
      {
        front: "How do you determine when a particle is speeding up vs. slowing down?",
        back: "Speeding up when $v$ and $a$ have the SAME sign; slowing down when they have OPPOSITE signs. Speed $= |v(t)|$.",
        hint: "Same signs = speeding up.",
      },
      {
        front: "Why is 'speeding up' NOT the same as 'positive acceleration'?",
        back: "Speeding up depends on the relationship between $v$ and $a$, not the sign of $a$ alone. A particle with $a > 0$ but $v < 0$ is slowing down.",
        hint: "Compare signs of v and a together.",
      },
      {
        front: "Displacement of a particle from $t = a$ to $t = b$.",
        back: "Displacement $= \\\\int_a^b v(t)\\\\,dt = s(b) - s(a)$. It is the net change in position and can be positive, negative, or zero.",
        hint: "Net change in position.",
      },
      {
        front: "Total distance traveled from $t = a$ to $t = b$.",
        back: "Total distance $= \\\\int_a^b |v(t)|\\\\,dt$. Find where $v = 0$, split the interval, and add the absolute values of each piece's displacement.",
        hint: "Integrate the absolute value of velocity.",
      },
      {
        front: "How do you find the position at time $t$ given $v(t)$ and an initial position?",
        back: "$s(t) = s(t_0) + \\\\int_{t_0}^{t} v(\\\\tau)\\\\,d\\\\tau$. Add the accumulated displacement to the known initial position.",
        hint: "Initial position plus accumulated change.",
      },
      {
        front: "When is the particle at its maximum distance to the RIGHT (greatest position)?",
        back: "Find critical points where $v(t) = 0$, then test. Position is maximized where $v$ changes from $+$ to $-$ (or at an endpoint). Compare candidate positions.",
        hint: "Velocity changes sign + to -.",
      },
      {
        front: "Common trap: confusing 'at rest' with 'changing direction'. Clarify.",
        back: "$v(t) = 0$ means at rest. The particle changes direction only if $v$ also changes sign there. A velocity that touches zero without sign change (e.g. $v = (t-2)^2$) does not reverse.",
        hint: "Need a sign change to turn around.",
      },
      {
        front: "Worked example: $v(t) = t^2 - 4t + 3$ on $[0,4]$. When does the particle change direction?",
        back: "$v = 0$ at $t = 1, 3$. Sign: positive on $[0,1)$, negative on $(1,3)$, positive on $(3,4]$. It changes direction at $t = 1$ and $t = 3$.",
        hint: "Factor: $(t-1)(t-3)$.",
      },
      {
        front: "If $a(t)$ and $v(0)$ are given, how do you find $v(t)$?",
        back: "$v(t) = v(0) + \\\\int_0^t a(\\\\tau)\\\\,d\\\\tau$. Acceleration integrates up to velocity; use the initial velocity as the constant.",
        hint: "Integrate acceleration, add v(0).",
      },
      {
        front: "Average velocity vs. average speed on $[a,b]$.",
        back: "Average velocity $= \\\\frac{s(b)-s(a)}{b-a} = \\\\frac{1}{b-a}\\\\int_a^b v\\\\,dt$. Average speed $= \\\\frac{1}{b-a}\\\\int_a^b |v|\\\\,dt = \\\\frac{\\\\text{total distance}}{b-a}$.",
        hint: "Speed uses absolute value of v.",
      },
      {
        front: "Worked example: total distance for $v(t) = t - 2$ on $[0,3]$.",
        back: "$v = 0$ at $t = 2$. On $[0,2]$, $v < 0$: $\\\\int_0^2 (t-2)\\\\,dt = -2$. On $[2,3]$, $v > 0$: $\\\\int_2^3 (t-2)\\\\,dt = \\\\frac{1}{2}$. Total distance $= 2 + \\\\frac{1}{2} = 2.5$.",
        hint: "Split at t = 2, sum absolute values.",
      },
    ],
  },
  {
    slug: "optimization-calcab",
    cards: [
      {
        front: "What is the general procedure for solving an optimization problem?",
        back: "Write the quantity to optimize (objective) as a function of ONE variable using a constraint equation, find its domain, take the derivative, find critical points, and verify max/min with the first- or second-derivative test or endpoints.",
        hint: "Objective, constraint, derivative, test.",
      },
      {
        front: "Why must you express the objective in terms of a single variable before differentiating?",
        back: "A single-variable function lets you use ordinary calculus ($f'(x) = 0$). The constraint equation provides the relationship to eliminate the extra variable.",
        hint: "Use the constraint to substitute.",
      },
      {
        front: "What is the Closed Interval (Candidates) Test for absolute extrema?",
        back: "On a closed interval $[a,b]$, evaluate $f$ at all critical points inside the interval AND at both endpoints $a$ and $b$. The largest output is the absolute max, the smallest is the absolute min.",
        hint: "Check critical points and endpoints.",
      },
      {
        front: "How does the First Derivative Test classify a critical point?",
        back: "If $f'$ changes $+ \\\\to -$ at $c$, then $c$ is a local max. If $f'$ changes $- \\\\to +$, it is a local min. If no sign change, it is neither.",
        hint: "Sign change of f' around c.",
      },
      {
        front: "How does the Second Derivative Test classify a critical point $c$ where $f'(c) = 0$?",
        back: "If $f''(c) > 0$, $c$ is a local min (concave up). If $f''(c) < 0$, $c$ is a local max (concave down). If $f''(c) = 0$, the test is inconclusive.",
        hint: "Positive f'' means min.",
      },
      {
        front: "Common trap in optimization: ignoring the domain. Why is the domain critical?",
        back: "Physical constraints (lengths must be positive, etc.) restrict the domain. The optimum may occur at a domain endpoint, and ignoring the domain can give an invalid answer.",
        hint: "Lengths and areas can't be negative.",
      },
      {
        front: "Worked example: find two positive numbers with sum 10 whose product is maximum.",
        back: "Let numbers be $x$ and $10 - x$. Product $P = x(10-x) = 10x - x^2$. $P' = 10 - 2x = 0 \\\\Rightarrow x = 5$. Since $P'' = -2 < 0$, max at $x = 5$. Numbers are $5$ and $5$, product $25$.",
        hint: "Constraint: $x + y = 10$.",
      },
      {
        front: "Optimization setup: open-top box from constraint. What are objective and constraint?",
        back: "Objective: maximize volume $V$. Constraint: a fixed surface area or fixed sheet dimensions. Use the constraint to write $V$ as a function of one variable, then optimize.",
        hint: "Volume is objective; surface area is constraint.",
      },
      {
        front: "A farmer has 100 ft of fence for a rectangular pen against a wall (one side free). Maximize area.",
        back: "Let width $= x$ (two sides), length $= 100 - 2x$. $A = x(100 - 2x) = 100x - 2x^2$. $A' = 100 - 4x = 0 \\\\Rightarrow x = 25$. Length $= 50$. Max area $= 25 \\\\cdot 50 = 1250$ ft$^2$.",
        hint: "Only three sides need fence.",
      },
      {
        front: "Why should you justify a maximum rather than just finding a critical point?",
        back: "A critical point may be a min, a max, or neither. AP graders require justification (sign chart, second-derivative test, or endpoint comparison) to confirm it is the desired extremum.",
        hint: "Critical point alone is not enough.",
      },
      {
        front: "How do you minimize the distance from a point to a curve efficiently?",
        back: "Minimize the SQUARED distance $D^2$ instead of $D$. The same $x$ minimizes both (since square root is increasing), and avoiding the radical makes differentiation much easier.",
        hint: "Minimize $D^2$ to skip the radical.",
      },
      {
        front: "Minimize cost: a cylindrical can holds fixed volume $V$. Set up the objective.",
        back: "Surface area $S = 2\\\\pi r^2 + 2\\\\pi r h$ with constraint $V = \\\\pi r^2 h$. Solve constraint for $h = \\\\frac{V}{\\\\pi r^2}$, substitute, then minimize $S(r)$.",
        hint: "Use volume to eliminate h.",
      },
      {
        front: "When an optimization domain is open (e.g. $x > 0$), how do you confirm a global extremum?",
        back: "Use the First or Second Derivative Test to show the single critical point is the only candidate and the function behaves appropriately (e.g. $\\\\to \\\\infty$) at the open ends, so it must be the global extremum.",
        hint: "One critical point + behavior at the ends.",
      },
    ],
  },
  {
    slug: "free-response-strategies-calcab",
    cards: [
      {
        front: "What must you ALWAYS do when using a definite integral to justify an answer on the FRQ?",
        back: "Show the integral set up with correct limits and integrand, then evaluate (by hand or calculator). Stating only a number without the integral expression loses setup points.",
        hint: "Write the integral, then the value.",
      },
      {
        front: "On a calculator-active FRQ, how should answers be reported?",
        back: "Carry at least 3 decimal places (truncate or round) in the final answer, and only round at the end. Premature rounding causes lost accuracy points.",
        hint: "Three decimals, round only at the end.",
      },
      {
        front: "What does the phrase 'justify your answer' require on the AP exam?",
        back: "A complete mathematical reason: cite the relevant theorem or sign behavior (e.g. 'since $f' $ changes from positive to negative'), not just a restatement of the conclusion.",
        hint: "Give the reason, not just the result.",
      },
      {
        front: "How do you justify an absolute maximum on a closed interval?",
        back: "Use the Candidates Test: state that you evaluated $f$ at the critical points and endpoints, present the values, and identify the largest. Reference that a continuous function on a closed interval attains its max.",
        hint: "Compare critical points and endpoints with values shown.",
      },
      {
        front: "Justifying a point of inflection: what must change?",
        back: "State that $f''$ (or $f'$'s increasing/decreasing behavior) CHANGES SIGN at that $x$-value. A sign change of $f''$ is required, not merely $f'' = 0$.",
        hint: "Concavity must actually switch.",
      },
      {
        front: "What is the standard justification for 'speeding up' in a particle-motion FRQ?",
        back: "State the signs of velocity and acceleration at that instant and note they are the SAME, so the particle is speeding up (or opposite, so slowing down).",
        hint: "Compare signs of v(t) and a(t).",
      },
      {
        front: "Common trap: units. When are units expected on FRQ answers?",
        back: "Whenever a problem gives units, your answer should include them (e.g. meters, liters/min). Many rubrics award a point specifically for correct units with interpretation.",
        hint: "Always label real-world answers.",
      },
      {
        front: "How should you handle the Mean Value Theorem (MVT) justification on an FRQ?",
        back: "State that $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$ (the hypotheses), then conclude there exists $c$ with $f'(c) = \\\\frac{f(b)-f(a)}{b-a}$.",
        hint: "Verify hypotheses, then state conclusion.",
      },
      {
        front: "What is the correct way to interpret $\\\\int_a^b R(t)\\\\,dt$ in context?",
        back: "It equals the total accumulated quantity (e.g. total liters, total people) that $R$ describes the rate of, over the time interval $[a,b]$, with correct units.",
        hint: "Integral of a rate = total amount, with units.",
      },
      {
        front: "Why is it risky to do work only on your calculator without writing it down?",
        back: "Graders score the written setup. If you only key in an integral and write the answer, you may earn the answer point but lose setup points. Always record the math expression.",
        hint: "The setup must appear on paper.",
      },
      {
        front: "FRQ strategy: interpreting the meaning of a derivative $g'(5)$ in context.",
        back: "State the rate of change of the quantity $g$ represents, at the specific input value, with units (e.g. 'the water is rising at 3 liters per minute at $t = 5$').",
        hint: "Rate of change, at that input, with units.",
      },
      {
        front: "How do you earn full credit on a related-rates FRQ?",
        back: "Write the relating equation, differentiate implicitly with respect to $t$ (showing $\\\\frac{d}{dt}$), substitute the given instantaneous values, and solve for the requested rate with units.",
        hint: "Equation, differentiate in t, substitute, solve.",
      },
      {
        front: "Time-management tip for the calculator-active section.",
        back: "The four allowed operations are: graphing, finding zeros/intersections, numerical derivative at a point, and numerical definite integral. Use them to save time but always show the setup.",
        hint: "Four built-in calculator capabilities.",
      },
    ],
  },
  {
    slug: "inverse-functions-derivatives-calcab",
    cards: [
      {
        front: "What is the formula for the derivative of an inverse function?",
        back: "If $g = f^{-1}$, then $g'(x) = \\\\frac{1}{f'(g(x))}$. The derivative of the inverse at $x$ is the reciprocal of $f'$ evaluated at the corresponding point $g(x)$.",
        hint: "Reciprocal of f' at the matching point.",
      },
      {
        front: "If $f(a) = b$, how do you find $(f^{-1})'(b)$?",
        back: "$(f^{-1})'(b) = \\\\frac{1}{f'(a)}$, since $f^{-1}(b) = a$. Locate the point $(a,b)$ on $f$, then take the reciprocal of the slope there.",
        hint: "Reciprocal of f'(a) where f(a) = b.",
      },
      {
        front: "Worked example: $f(x) = x^3 + 2x + 1$, $f(1) = 4$. Find $(f^{-1})'(4)$.",
        back: "$f'(x) = 3x^2 + 2$, so $f'(1) = 5$. Thus $(f^{-1})'(4) = \\\\frac{1}{f'(1)} = \\\\frac{1}{5}$.",
        hint: "Find f'(1), then reciprocal.",
      },
      {
        front: "Why must $f$ be one-to-one to have an inverse function?",
        back: "A function has an inverse only if it is one-to-one (passes the horizontal line test), so each output comes from exactly one input. Otherwise the inverse is not a function.",
        hint: "Horizontal line test.",
      },
      {
        front: "Common trap: students compute $\\\\frac{1}{f'(x)}$ instead of $\\\\frac{1}{f'(g(x))}$. What is wrong?",
        back: "You must evaluate $f'$ at $g(x) = f^{-1}(x)$, the corresponding input, not at $x$ itself. The reciprocal is of the slope at the matching point on $f$.",
        hint: "Plug in g(x), not x.",
      },
      {
        front: "Geometric meaning: how are slopes of $f$ and $f^{-1}$ at corresponding points related?",
        back: "If $f$ has slope $m$ at $(a,b)$, then $f^{-1}$ has slope $\\\\frac{1}{m}$ at the reflected point $(b,a)$. Graphs of $f$ and $f^{-1}$ are reflections across $y = x$.",
        hint: "Reflect across y = x; reciprocal slopes.",
      },
      {
        front: "Derivative of $\\\\arcsin x$ (inverse sine).",
        back: "$\\\\frac{d}{dx}\\\\arcsin x = \\\\frac{1}{\\\\sqrt{1 - x^2}}$, valid for $-1 < x < 1$.",
        hint: "1 over root of (1 minus x squared).",
      },
      {
        front: "Derivative of $\\\\arctan x$ (inverse tangent).",
        back: "$\\\\frac{d}{dx}\\\\arctan x = \\\\frac{1}{1 + x^2}$, valid for all real $x$.",
        hint: "1 over (1 plus x squared).",
      },
      {
        front: "Derivative of $\\\\arccos x$ (inverse cosine).",
        back: "$\\\\frac{d}{dx}\\\\arccos x = -\\\\frac{1}{\\\\sqrt{1 - x^2}}$, valid for $-1 < x < 1$. It is the negative of the $\\\\arcsin$ derivative.",
        hint: "Negative of the arcsin derivative.",
      },
      {
        front: "How do you differentiate $\\\\arctan(3x)$?",
        back: "Use the chain rule: $\\\\frac{d}{dx}\\\\arctan(3x) = \\\\frac{1}{1 + (3x)^2}\\\\cdot 3 = \\\\frac{3}{1 + 9x^2}$.",
        hint: "Apply the chain rule to the inner 3x.",
      },
      {
        front: "Why is the derivative formula for inverses an application of the chain rule?",
        back: "Differentiating $f(f^{-1}(x)) = x$ gives $f'(f^{-1}(x))\\\\cdot (f^{-1})'(x) = 1$, so $(f^{-1})'(x) = \\\\frac{1}{f'(f^{-1}(x))}$.",
        hint: "Differentiate the identity $f(f^{-1}(x)) = x$.",
      },
      {
        front: "Worked example from a table: $f(2) = 7$, $f'(2) = 4$. Find $(f^{-1})'(7)$.",
        back: "Since $f(2) = 7$, $f^{-1}(7) = 2$. So $(f^{-1})'(7) = \\\\frac{1}{f'(2)} = \\\\frac{1}{4}$.",
        hint: "Match the point, then reciprocal.",
      },
      {
        front: "What is the relationship between $e^x$ and $\\\\ln x$ as inverse functions?",
        back: "$\\\\ln x$ is the inverse of $e^x$. Their derivatives illustrate the rule: $\\\\frac{d}{dx}\\\\ln x = \\\\frac{1}{x}$, and at corresponding points the slopes are reciprocals.",
        hint: "ln and exp are inverses.",
      },
    ],
  },
  {
    slug: "scatter-plots-trend-lines-grade8",
    cards: [
      {
        front: "What is a scatter plot?",
        back: "A graph that shows the relationship between two sets of data by plotting points as ordered pairs $(x, y)$. Each point represents one observation with two measurements.",
        hint: "Points for two-variable data.",
      },
      {
        front: "What is a trend line (line of best fit)?",
        back: "A straight line drawn through a scatter plot that best shows the overall pattern of the data. It is used to make predictions and describe the relationship.",
        hint: "The line that best follows the points.",
      },
      {
        front: "What is a positive association (correlation)?",
        back: "As the $x$-values increase, the $y$-values tend to increase too. The points generally rise from left to right.",
        hint: "Both go up together.",
      },
      {
        front: "What is a negative association (correlation)?",
        back: "As the $x$-values increase, the $y$-values tend to decrease. The points generally fall from left to right.",
        hint: "One up, the other down.",
      },
      {
        front: "What does 'no association' mean in a scatter plot?",
        back: "There is no clear pattern between $x$ and $y$. The points are scattered randomly with no upward or downward trend.",
        hint: "No clear pattern.",
      },
      {
        front: "What is an outlier in a scatter plot?",
        back: "A point that lies far away from the overall pattern of the other points. It does not fit the general trend.",
        hint: "A point that stands apart.",
      },
      {
        front: "What is a cluster in a scatter plot?",
        back: "A group of data points that are bunched closely together in one area of the graph, showing several observations with similar values.",
        hint: "A bunch of nearby points.",
      },
      {
        front: "Difference between a linear and a nonlinear association.",
        back: "Linear: the points roughly follow a straight line. Nonlinear: the points follow a curve (such as bending upward or downward) rather than a straight line.",
        hint: "Straight line vs. curve.",
      },
      {
        front: "How do you use a trend line to make a prediction?",
        back: "Find the $x$-value on the horizontal axis, go up to the trend line, then read across to the $y$-value. That $y$ is your predicted value.",
        hint: "Go up to the line, then across.",
      },
      {
        front: "How do you write the equation of a trend line?",
        back: "Use $y = mx + b$, where $m$ is the slope (rise over run from two points on the line) and $b$ is the $y$-intercept (where the line crosses the $y$-axis).",
        hint: "Slope-intercept form.",
      },
      {
        front: "What does the SLOPE of a trend line tell you in a real-world context?",
        back: "It tells the rate of change: how much $y$ changes for each 1-unit increase in $x$ (for example, dollars earned per hour worked).",
        hint: "Change in y per unit of x.",
      },
      {
        front: "What does the Y-INTERCEPT of a trend line tell you in context?",
        back: "It is the predicted value of $y$ when $x = 0$ (for example, a starting fee before any hours are worked). Sometimes it has no real-world meaning.",
        hint: "The y-value when x is 0.",
      },
      {
        front: "Worked example: a trend line passes through $(0, 2)$ and $(4, 10)$. Find its equation.",
        back: "Slope $m = \\\\frac{10 - 2}{4 - 0} = \\\\frac{8}{4} = 2$. The $y$-intercept is $2$. So $y = 2x + 2$.",
        hint: "Find slope first, then use the intercept.",
      },
      {
        front: "Common trap: does correlation mean one thing CAUSES the other?",
        back: "No. A trend or association shows two variables move together, but it does not prove that one causes the other. There may be other factors involved.",
        hint: "Association is not causation.",
      },
    ],
  },
  {
    slug: "geometric-transformations-grade8",
    cards: [
      {
        front: "What is a geometric transformation?",
        back: "A way of moving or resizing a figure on a coordinate plane. The four main types are translation, reflection, rotation, and dilation.",
        hint: "Moving or resizing a shape.",
      },
      {
        front: "What is a translation?",
        back: "A slide that moves every point of a figure the same distance in the same direction. The shape, size, and orientation stay the same.",
        hint: "A slide.",
      },
      {
        front: "What is the rule for translating a point right $a$ and up $b$?",
        back: "$(x, y) \\\\to (x + a, y + b)$. Add $a$ to the $x$-coordinate and $b$ to the $y$-coordinate (use negatives for left/down).",
        hint: "Add to x and y.",
      },
      {
        front: "What is a reflection?",
        back: "A flip of a figure over a line (the line of reflection), producing a mirror image. The shape and size stay the same but orientation reverses.",
        hint: "A flip / mirror image.",
      },
      {
        front: "What is the rule for reflecting a point over the x-axis? Over the y-axis?",
        back: "Over the $x$-axis: $(x, y) \\\\to (x, -y)$. Over the $y$-axis: $(x, y) \\\\to (-x, y)$. The reflected coordinate's sign flips.",
        hint: "Negate y for x-axis; negate x for y-axis.",
      },
      {
        front: "What is a rotation?",
        back: "A turn of a figure around a fixed point (the center of rotation) by a given angle and direction. Size and shape are preserved.",
        hint: "A turn around a point.",
      },
      {
        front: "Rule for rotating a point 90 degrees counterclockwise about the origin.",
        back: "$(x, y) \\\\to (-y, x)$. Swap the coordinates and negate the new first coordinate.",
        hint: "Swap, then negate the new x.",
      },
      {
        front: "Rule for rotating a point 180 degrees about the origin.",
        back: "$(x, y) \\\\to (-x, -y)$. Both coordinates change sign. (Direction does not matter for 180 degrees.)",
        hint: "Negate both coordinates.",
      },
      {
        front: "What is a dilation?",
        back: "A transformation that resizes a figure by a scale factor $k$, making it larger ($k > 1$) or smaller ($0 < k < 1$). The shape stays similar but the size changes.",
        hint: "Resize by a scale factor.",
      },
      {
        front: "Rule for a dilation centered at the origin with scale factor $k$.",
        back: "$(x, y) \\\\to (kx, ky)$. Multiply both coordinates by $k$.",
        hint: "Multiply both coordinates by k.",
      },
      {
        front: "What is a rigid motion (isometry), and which transformations are rigid?",
        back: "A transformation that preserves distance and angle, so the image is congruent to the original. Translations, reflections, and rotations are rigid; dilations are NOT.",
        hint: "Distance-preserving = congruent.",
      },
      {
        front: "What does it mean for two figures to be CONGRUENT vs. SIMILAR?",
        back: "Congruent: same shape AND same size (related by rigid motions). Similar: same shape but possibly different size (related by a dilation, with or without rigid motions).",
        hint: "Congruent = identical; similar = same shape.",
      },
      {
        front: "Common trap: does a dilation produce a congruent figure?",
        back: "No (unless $k = 1$). A dilation changes the size, so the image is SIMILAR to the original, not congruent. Only translations, reflections, and rotations give congruent images.",
        hint: "Dilation changes size = similar only.",
      },
      {
        front: "Worked example: translate triangle vertex $(3, -2)$ left 5 and up 4.",
        back: "Left 5 means $-5$ to $x$; up 4 means $+4$ to $y$: $(3 - 5, -2 + 4) = (-2, 2)$.",
        hint: "Add -5 to x and +4 to y.",
      },
    ],
  },
];
