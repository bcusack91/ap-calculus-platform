export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "rational-functions-asymptotes-precalc",
    cards: [
      {
        front: "What is a rational function?",
        back: "A function of the form $f(x) = \\\\frac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials and $q(x) \\\\neq 0$. The domain excludes all $x$ for which $q(x) = 0$.",
        hint: "A ratio of two polynomials.",
      },
      {
        front: "How do you find vertical asymptotes of a rational function?",
        back: "Reduce the function to lowest terms, then set the denominator equal to zero and solve. Each remaining zero of the denominator gives a vertical asymptote $x = a$.",
        hint: "Denominator zeros that don't cancel.",
      },
      {
        front: "What is a hole (removable discontinuity) and how do you find it?",
        back: "A hole occurs at $x = a$ when a factor cancels from both numerator and denominator. The graph is undefined there but does not blow up; find the $y$-value by plugging $a$ into the reduced function.",
        hint: "A factor that cancels top and bottom.",
      },
      {
        front: "How do you find horizontal asymptotes by comparing degrees? Let $n$ = degree of numerator, $m$ = degree of denominator.",
        back: "If $n < m$: horizontal asymptote $y = 0$. If $n = m$: $y = \\\\frac{a}{b}$, the ratio of leading coefficients. If $n > m$: no horizontal asymptote (check for a slant asymptote).",
        hint: "Compare top degree to bottom degree.",
      },
      {
        front: "When does a rational function have a slant (oblique) asymptote, and how do you find it?",
        back: "When the numerator degree is exactly one more than the denominator degree ($n = m + 1$). Find it by polynomial long division; the quotient (ignoring the remainder) is the line $y = mx + b$.",
        hint: "Numerator degree one higher than denominator.",
      },
      {
        front: "Can a graph cross a horizontal asymptote? A vertical asymptote?",
        back: "A graph CAN cross a horizontal (or slant) asymptote, especially near the middle of the domain; the asymptote only governs end behavior. A graph can NEVER cross a vertical asymptote.",
        hint: "End-behavior lines vs. forbidden $x$-values.",
      },
      {
        front: "How do you find the $x$- and $y$-intercepts of a rational function?",
        back: "For $x$-intercepts, set the numerator (of the reduced function) equal to zero and solve. For the $y$-intercept, evaluate $f(0)$, provided $0$ is in the domain.",
        hint: "Numerator zeros give $x$-intercepts.",
      },
      {
        front: "Find all asymptotes of $f(x) = \\\\frac{2x^2 - 8}{x^2 - x - 6}$.",
        back: "Factor: $\\\\frac{2(x-2)(x+2)}{(x-3)(x+2)}$. Cancel $(x+2)$ giving a hole at $x = -2$. Vertical asymptote $x = 3$. Degrees equal, so horizontal asymptote $y = \\\\frac{2}{1} = 2$.",
        hint: "Factor everything first, then cancel.",
      },
      {
        front: "Find the slant asymptote of $f(x) = \\\\frac{x^2 + 1}{x - 1}$.",
        back: "Divide: $x^2 + 1 = (x-1)(x+1) + 2$, so $f(x) = x + 1 + \\\\frac{2}{x-1}$. The slant asymptote is $y = x + 1$.",
        hint: "Long-divide; keep the quotient.",
      },
      {
        front: "Common trap: why must you reduce the function BEFORE finding vertical asymptotes?",
        back: "Because a factor that cancels produces a hole, not a vertical asymptote. Setting the original denominator to zero without canceling wrongly reports a vertical asymptote where a removable hole exists.",
        hint: "Cancel first to distinguish holes from asymptotes.",
      },
      {
        front: "How do you determine the sign/behavior of $f(x)$ near a vertical asymptote $x = a$?",
        back: "Test values just left and just right of $a$. The sign of $f$ tells you whether the branch goes to $+\\\\infty$ or $-\\\\infty$. An odd-multiplicity factor flips sign across the asymptote; an even-multiplicity factor keeps the same sign on both sides.",
        hint: "Test points on each side; watch multiplicity.",
      },
      {
        front: "What is the end behavior of a rational function with a horizontal asymptote $y = L$?",
        back: "As $x \\\\to \\\\infty$ and as $x \\\\to -\\\\infty$, $f(x) \\\\to L$. The horizontal asymptote describes both far-left and far-right ends, though the approach (from above/below) can differ.",
        hint: "Same limiting value on both ends.",
      },
      {
        front: "Can a rational function have both a horizontal and a slant asymptote?",
        back: "No. It has at most one end-behavior asymptote: a horizontal one (degree $n \\\\leq m$) OR a slant one ($n = m+1$), never both. Higher-degree numerators give curved (e.g., parabolic) end behavior instead.",
        hint: "It's one or the other, not both.",
      },
    ],
  },
  {
    slug: "conic-sections-precalc",
    cards: [
      {
        front: "What are the four conic sections, and how are they formed?",
        back: "Circle, ellipse, parabola, and hyperbola. They are the curves formed by intersecting a plane with a double cone at different angles.",
        hint: "Slice a cone four ways.",
      },
      {
        front: "Standard equation of a circle with center $(h, k)$ and radius $r$.",
        back: "$(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r > 0$ is the radius. All points are exactly distance $r$ from the center.",
        hint: "Distance formula set equal to $r^2$.",
      },
      {
        front: "Standard equation of an ellipse centered at $(h, k)$. Define $a$, $b$, and $c$.",
        back: "$\\\\frac{(x-h)^2}{a^2} + \\\\frac{(y-k)^2}{b^2} = 1$, with $a > b$. The larger denominator $a^2$ lies under the major-axis variable. Vertices are $a$ from center, co-vertices $b$ from center, and foci $c$ from center where $c^2 = a^2 - b^2$.",
        hint: "Sum of denominators-style; $c^2 = a^2 - b^2$.",
      },
      {
        front: "Standard equation of a hyperbola. Define $a$, $b$, $c$ and how it differs from an ellipse.",
        back: "$\\\\frac{(x-h)^2}{a^2} - \\\\frac{(y-k)^2}{b^2} = 1$ (opens left/right). The MINUS sign distinguishes it from an ellipse. The positive term's variable indicates the opening direction. Foci: $c^2 = a^2 + b^2$.",
        hint: "Subtraction, and $c^2 = a^2 + b^2$.",
      },
      {
        front: "What is the focal relationship $c^2 = a^2 - b^2$ vs. $c^2 = a^2 + b^2$ used for?",
        back: "Use $c^2 = a^2 - b^2$ for an ELLIPSE ($a$ is largest). Use $c^2 = a^2 + b^2$ for a HYPERBOLA. In both, $c$ is the center-to-focus distance.",
        hint: "Minus for ellipse, plus for hyperbola.",
      },
      {
        front: "Standard equation of a parabola opening up/down with vertex $(h, k)$. What is $p$?",
        back: "$(x - h)^2 = 4p(y - k)$. Here $|p|$ is the distance from vertex to focus (and to directrix). If $p > 0$ it opens up; $p < 0$ opens down. The focus is $(h, k+p)$ and the directrix is $y = k - p$.",
        hint: "$4p$ multiplies the squared term's partner.",
      },
      {
        front: "What are the asymptotes of a hyperbola $\\\\frac{(x-h)^2}{a^2} - \\\\frac{(y-k)^2}{b^2} = 1$?",
        back: "The lines $y - k = \\\\pm \\\\frac{b}{a}(x - h)$. They pass through the center and form the diagonals of the central box ($a$ horizontal, $b$ vertical).",
        hint: "Slopes $\\\\pm b/a$ through the center.",
      },
      {
        front: "How do you identify a conic from a general second-degree equation $Ax^2 + Cy^2 + Dx + Ey + F = 0$ (no $xy$ term)?",
        back: "Circle if $A = C$. Ellipse if $A$ and $C$ are unequal but same sign ($AC > 0$). Hyperbola if $A$ and $C$ have opposite signs ($AC < 0$). Parabola if exactly one of $A$, $C$ is zero.",
        hint: "Compare signs and equality of $A$ and $C$.",
      },
      {
        front: "Procedure: convert $x^2 + y^2 - 6x + 4y - 12 = 0$ to standard form.",
        back: "Complete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$, giving $(x-3)^2 + (y+2)^2 = 25$. It is a circle, center $(3, -2)$, radius $5$.",
        hint: "Group, complete the square, add to both sides.",
      },
      {
        front: "What is the eccentricity $e$ of a conic, and what values correspond to each type?",
        back: "$e = \\\\frac{c}{a}$ measures how 'stretched' a conic is. Circle: $e = 0$. Ellipse: $0 < e < 1$. Parabola: $e = 1$. Hyperbola: $e > 1$.",
        hint: "Ratio of focal distance to vertex distance.",
      },
      {
        front: "Common trap: in an ellipse, how do you decide whether the major axis is horizontal or vertical?",
        back: "Look at which denominator is LARGER. If $a^2$ (the larger value) is under the $x$-term, the major axis is horizontal; if under the $y$-term, it is vertical. The foci always lie on the major axis.",
        hint: "Larger denominator marks the major axis.",
      },
      {
        front: "Find the foci of $\\\\frac{x^2}{25} + \\\\frac{y^2}{9} = 1$.",
        back: "$a^2 = 25$, $b^2 = 9$, so $c^2 = 25 - 9 = 16$, $c = 4$. Major axis is horizontal, so foci are $(\\\\pm 4, 0)$.",
        hint: "$c^2 = a^2 - b^2$ for the ellipse.",
      },
      {
        front: "What is the latus rectum of a parabola, and what is its length?",
        back: "The latus rectum is the chord through the focus perpendicular to the axis of symmetry. Its length is $|4p|$ for a parabola $(x-h)^2 = 4p(y-k)$, useful for sketching the width at the focus.",
        hint: "Width at the focus equals $|4p|$.",
      },
    ],
  },
  {
    slug: "inverse-trig-functions-precalc",
    cards: [
      {
        front: "What is the range (output interval) of $y = \\\\arcsin x$?",
        back: "$\\\\left[-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right]$. The domain is $[-1, 1]$. Output angles lie in quadrants I and IV (plus the endpoints).",
        hint: "Right half of the unit circle.",
      },
      {
        front: "What is the range of $y = \\\\arccos x$?",
        back: "$[0, \\\\pi]$. The domain is $[-1, 1]$. Output angles lie in quadrants I and II (top half).",
        hint: "Top half of the unit circle.",
      },
      {
        front: "What is the range of $y = \\\\arctan x$?",
        back: "$\\\\left(-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right)$, open interval. The domain is all real numbers. Output angles are in quadrants I and IV.",
        hint: "Open interval; domain is everything.",
      },
      {
        front: "Why must we restrict the domain of trig functions to define inverses?",
        back: "Trig functions are periodic, so they are not one-to-one and fail the horizontal line test. Restricting the domain to an interval where the function is one-to-one allows a single-valued inverse.",
        hint: "Periodic functions aren't one-to-one.",
      },
      {
        front: "Evaluate $\\\\arcsin\\\\left(-\\\\frac{1}{2}\\\\right)$.",
        back: "$-\\\\frac{\\\\pi}{6}$. We need an angle in $\\\\left[-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right]$ with sine $-\\\\frac{1}{2}$, which is in quadrant IV.",
        hint: "Stay in the arcsin range.",
      },
      {
        front: "Evaluate $\\\\arccos\\\\left(-\\\\frac{\\\\sqrt{2}}{2}\\\\right)$.",
        back: "$\\\\frac{3\\\\pi}{4}$. We need an angle in $[0, \\\\pi]$ with cosine $-\\\\frac{\\\\sqrt{2}}{2}$, which is in quadrant II.",
        hint: "Arccos of a negative lands in quadrant II.",
      },
      {
        front: "Simplify $\\\\sin(\\\\arcsin x)$ and state the restriction.",
        back: "$\\\\sin(\\\\arcsin x) = x$ for all $x \\\\in [-1, 1]$. Applying a function to its inverse cancels, but only within the inverse's domain.",
        hint: "Cancels on $[-1,1]$.",
      },
      {
        front: "Common trap: does $\\\\arcsin(\\\\sin x) = x$ for all $x$?",
        back: "No. It equals $x$ only when $x \\\\in \\\\left[-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right]$. For other $x$, the output is the coterminal/reference angle inside the arcsin range, e.g. $\\\\arcsin(\\\\sin \\\\frac{3\\\\pi}{4}) = \\\\frac{\\\\pi}{4}$.",
        hint: "Answer must land in arcsin's range.",
      },
      {
        front: "Evaluate $\\\\cos\\\\left(\\\\arctan\\\\frac{3}{4}\\\\right)$ using a reference triangle.",
        back: "Let $\\\\tan\\\\theta = \\\\frac{3}{4}$ (opposite $3$, adjacent $4$, hypotenuse $5$). Then $\\\\cos\\\\theta = \\\\frac{4}{5}$. Since $\\\\arctan$ gives a quadrant-I angle here, the answer is positive.",
        hint: "Draw a 3-4-5 triangle.",
      },
      {
        front: "How do you evaluate a composition like $\\\\sin(\\\\arccos x)$ as an algebraic expression?",
        back: "Let $\\\\theta = \\\\arccos x$ so $\\\\cos\\\\theta = x$. Build a right triangle: adjacent $= x$, hypotenuse $= 1$, so opposite $= \\\\sqrt{1 - x^2}$. Thus $\\\\sin(\\\\arccos x) = \\\\sqrt{1 - x^2}$ (nonnegative on $[0,\\\\pi]$).",
        hint: "Set the inverse equal to $\\\\theta$, draw the triangle.",
      },
      {
        front: "What are the horizontal asymptotes of $y = \\\\arctan x$?",
        back: "$y = \\\\frac{\\\\pi}{2}$ as $x \\\\to +\\\\infty$ and $y = -\\\\frac{\\\\pi}{2}$ as $x \\\\to -\\\\infty$. The function never reaches these values, matching its open range.",
        hint: "Range boundaries become asymptotes.",
      },
      {
        front: "Why does $\\\\arccsc$/$\\\\arcsec$ output cause sign-care, and what is a safe strategy?",
        back: "Their ranges exclude certain quadrants, so reciprocal inverses are error-prone. A reliable strategy is to convert: $\\\\arcsec x = \\\\arccos\\\\frac{1}{x}$ and $\\\\arccsc x = \\\\arcsin\\\\frac{1}{x}$, then use the standard ranges.",
        hint: "Convert to arccos/arcsin of the reciprocal.",
      },
      {
        front: "Evaluate $\\\\tan(\\\\arcsin\\\\frac{5}{13})$.",
        back: "Opposite $5$, hypotenuse $13$, so adjacent $= 12$. Then $\\\\tan = \\\\frac{5}{12}$. Arcsin gives a quadrant-I angle here, so the result is positive.",
        hint: "5-12-13 triangle.",
      },
    ],
  },
  {
    slug: "transformations-functions-precalc",
    cards: [
      {
        front: "How does $f(x) + k$ transform the graph of $f(x)$?",
        back: "A vertical shift: up by $k$ units if $k > 0$, down if $k < 0$. Outputs change; the $x$-values are unaffected.",
        hint: "Outside the function = vertical = intuitive direction.",
      },
      {
        front: "How does $f(x - h)$ transform the graph of $f(x)$?",
        back: "A horizontal shift: RIGHT by $h$ units (when $h > 0$). The motion is opposite to the sign inside the parentheses, which surprises students.",
        hint: "Inside = horizontal = opposite of the sign.",
      },
      {
        front: "How does $a \\\\cdot f(x)$ with $|a| > 1$ vs. $0 < |a| < 1$ affect the graph?",
        back: "$|a| > 1$ is a vertical STRETCH (taller); $0 < |a| < 1$ is a vertical SHRINK (flatter). If $a < 0$, it also reflects across the $x$-axis.",
        hint: "Outside multiplier = vertical scaling.",
      },
      {
        front: "How does $f(bx)$ affect the graph horizontally?",
        back: "It horizontally scales by a factor of $\\\\frac{1}{b}$. $|b| > 1$ compresses (narrower); $0 < |b| < 1$ stretches (wider). The reciprocal relationship is the common trap.",
        hint: "Inside multiplier = horizontal = reciprocal effect.",
      },
      {
        front: "What does $-f(x)$ do? What does $f(-x)$ do?",
        back: "$-f(x)$ reflects across the $x$-axis (flips up/down). $f(-x)$ reflects across the $y$-axis (flips left/right).",
        hint: "Negative outside = over $x$-axis; negative inside = over $y$-axis.",
      },
      {
        front: "In $g(x) = a f(b(x - h)) + k$, what does each parameter control?",
        back: "$a$ = vertical stretch/shrink and reflection; $b$ = horizontal stretch/shrink and reflection; $h$ = horizontal shift; $k$ = vertical shift. Apply horizontal changes to inputs and vertical changes to outputs.",
        hint: "$a$,$k$ are vertical; $b$,$h$ are horizontal.",
      },
      {
        front: "What is the correct order to apply multiple transformations?",
        back: "For horizontal: factor out $b$, then apply stretch/reflection before the shift (because of order of operations on the input). For vertical: apply stretch/reflection before the shift. A safe method is to transform a few key points.",
        hint: "Stretch/reflect, then shift; track key points.",
      },
      {
        front: "A point $(x, y)$ is on $f$. Where does it move under $g(x) = 2f(x - 3) - 1$?",
        back: "The point becomes $(x + 3,\\\\ 2y - 1)$: shift right $3$, then double the height and shift down $1$.",
        hint: "Right $3$, vertical $\\\\times 2$, down $1$.",
      },
      {
        front: "Is a function even or odd from its transformation symmetry? Define both.",
        back: "Even: $f(-x) = f(x)$, symmetric about the $y$-axis. Odd: $f(-x) = -f(x)$, symmetric about the origin. Many functions are neither.",
        hint: "$y$-axis symmetry vs. origin symmetry.",
      },
      {
        front: "Common trap: students shift $f(x+2)$ to the right. Which way does it actually go?",
        back: "LEFT by $2$. Inside-the-parentheses changes move the graph opposite to the sign: $+2$ shifts left, $-2$ shifts right.",
        hint: "Inside is backwards.",
      },
      {
        front: "How does the order matter for $g(x) = f(2x - 4)$ when finding the transformation?",
        back: "Factor the input: $f(2(x - 2))$. So it is a horizontal compression by $\\\\frac{1}{2}$ AND a shift right by $2$. Not a shift of $4$. Failing to factor is a frequent error.",
        hint: "Factor out the coefficient first.",
      },
      {
        front: "Describe the full transformation of $y = -\\\\frac{1}{2}(x + 1)^2 + 3$ from $y = x^2$.",
        back: "Shift left $1$; vertical shrink by $\\\\frac{1}{2}$; reflect over the $x$-axis (negative $a$); shift up $3$. Vertex is $(-1, 3)$, parabola opens downward.",
        hint: "Read $h$, $a$, sign, then $k$.",
      },
      {
        front: "How does the domain and range change under transformations?",
        back: "Horizontal transformations (shifts/stretches/$y$-axis reflections) affect the DOMAIN; vertical transformations (shifts/stretches/$x$-axis reflections) affect the RANGE. Apply the same operation to interval endpoints.",
        hint: "Horizontal -> domain; vertical -> range.",
      },
    ],
  },
  {
    slug: "rates-of-change-precalc",
    cards: [
      {
        front: "What is the average rate of change of $f$ on $[a, b]$?",
        back: "$\\\\frac{f(b) - f(a)}{b - a}$, the slope of the secant line connecting $(a, f(a))$ and $(b, f(b))$. It measures the function's average steepness over the interval.",
        hint: "Slope between two points.",
      },
      {
        front: "What does the sign of the average rate of change tell you?",
        back: "Positive means the function increases on average over the interval; negative means it decreases on average; zero means the endpoints have equal outputs (net no change).",
        hint: "Sign = increasing or decreasing.",
      },
      {
        front: "What distinguishes the average rate of change from the instantaneous rate of change?",
        back: "Average rate uses two points (secant slope) over an interval; instantaneous rate is the slope at a single point (tangent line), approximated by shrinking the interval toward one point.",
        hint: "Secant over interval vs. tangent at a point.",
      },
      {
        front: "How do you estimate an instantaneous rate of change at $x = a$ without calculus?",
        back: "Compute the average rate of change over a very small interval around $a$, e.g. $\\\\frac{f(a + 0.001) - f(a)}{0.001}$, or average the slopes just before and just after $a$.",
        hint: "Use a tiny interval near the point.",
      },
      {
        front: "What is the average rate of change of a LINEAR function on any interval?",
        back: "It is constant and equal to the slope $m$. Linear functions have the same rate of change everywhere, which is what defines them.",
        hint: "Lines have a single constant rate.",
      },
      {
        front: "How do you recognize a linear, quadratic, or exponential model from a table of equally spaced inputs?",
        back: "Linear: constant FIRST differences. Quadratic: constant SECOND differences. Exponential: constant RATIO between successive outputs.",
        hint: "Differences vs. ratios.",
      },
      {
        front: "Find the average rate of change of $f(x) = x^2$ on $[1, 4]$.",
        back: "$\\\\frac{f(4) - f(1)}{4 - 1} = \\\\frac{16 - 1}{3} = \\\\frac{15}{3} = 5$.",
        hint: "Plug into the secant-slope formula.",
      },
      {
        front: "Why is the average rate of change of an exponential function not constant?",
        back: "Exponential functions change by a constant factor (ratio), so the absolute change grows with the output. The rate of change increases (for growth) or decreases (for decay), never staying fixed.",
        hint: "Constant ratio, not constant difference.",
      },
      {
        front: "What is the difference quotient and how does it relate to rate of change?",
        back: "$\\\\frac{f(x + h) - f(x)}{h}$. It is the average rate of change over $[x, x+h]$; as $h \\\\to 0$ it approaches the instantaneous rate (slope of the tangent line).",
        hint: "Average rate with interval width $h$.",
      },
      {
        front: "How does concavity relate to how the rate of change behaves?",
        back: "Concave up: the rate of change is increasing (the graph curves upward, slopes getting larger). Concave down: the rate of change is decreasing. This describes acceleration of the function's growth.",
        hint: "Concave up = speeding up; concave down = slowing down.",
      },
      {
        front: "Common trap: a function can be increasing while its rate of change decreases. Explain.",
        back: "Yes. If $f$ increases but is concave down (e.g. $\\\\sqrt{x}$), the function still rises but more and more slowly: the rate of change is positive yet shrinking toward zero.",
        hint: "Increasing and decelerating coexist.",
      },
      {
        front: "Interpret average rate of change in a real-world units context.",
        back: "It carries units of (output units) per (input unit). E.g. for distance $d(t)$ in miles over time $t$ in hours, the average rate of change is average speed in miles per hour.",
        hint: "Units are output-per-input.",
      },
      {
        front: "A population is $200$ at $t = 2$ and $450$ at $t = 7$ (years). Find and interpret the average rate of change.",
        back: "$\\\\frac{450 - 200}{7 - 2} = \\\\frac{250}{5} = 50$ people per year. On average, the population grew by $50$ people each year over that interval.",
        hint: "Secant slope with units.",
      },
    ],
  },
  {
    slug: "law-of-sines-cosines-precalc",
    cards: [
      {
        front: "State the Law of Sines and name its variables.",
        back: "$\\\\frac{\\\\sin A}{a} = \\\\frac{\\\\sin B}{b} = \\\\frac{\\\\sin C}{c}$, where $A, B, C$ are the angles and $a, b, c$ are the sides opposite them respectively.",
        hint: "Each side over the sine of its opposite angle (or the reciprocal).",
      },
      {
        front: "Which cases (combinations of given parts) call for the Law of Sines?",
        back: "Use it when you know an angle and its opposite side, specifically the AAS, ASA, and SSA cases. It requires a complete angle-side opposite pair.",
        hint: "Need a matching angle-side pair.",
      },
      {
        front: "State the Law of Cosines (one form) and name its variables.",
        back: "$c^2 = a^2 + b^2 - 2ab\\\\cos C$, where $C$ is the angle opposite side $c$, and $a, b$ are the other two sides. There are analogous forms for $a^2$ and $b^2$.",
        hint: "Like Pythagorean theorem plus a correction term.",
      },
      {
        front: "Which cases call for the Law of Cosines?",
        back: "Use it for SAS (two sides and the included angle, to find the third side) and SSS (all three sides, to find an angle). These cases lack a complete angle-side opposite pair.",
        hint: "SAS and SSS.",
      },
      {
        front: "Why is SSA called the 'ambiguous case'?",
        back: "Given two sides and a non-included angle, there can be zero, one, or two triangles. The Law of Sines may yield two valid angle solutions (an angle and its supplement), requiring you to check which are geometrically possible.",
        hint: "Two sides + non-included angle = possibly two triangles.",
      },
      {
        front: "In the SSA case, how do you find the second possible angle?",
        back: "If $\\\\sin B = k$ gives a first angle $B_1$, the supplement $B_2 = 180^\\\\circ - B_1$ is a candidate. Keep it only if $A + B_2 < 180^\\\\circ$, leaving room for the third angle.",
        hint: "Subtract from $180^\\\\circ$ and check the angle sum.",
      },
      {
        front: "Solve for side $c$: $a = 7$, $b = 9$, included angle $C = 60^\\\\circ$.",
        back: "$c^2 = 7^2 + 9^2 - 2(7)(9)\\\\cos 60^\\\\circ = 49 + 81 - 126(0.5) = 130 - 63 = 67$, so $c = \\\\sqrt{67} \\\\approx 8.19$.",
        hint: "SAS -> Law of Cosines.",
      },
      {
        front: "Find angle $A$ when $a = 6$, $b = 8$, $c = 10$ (SSS).",
        back: "$\\\\cos A = \\\\frac{b^2 + c^2 - a^2}{2bc} = \\\\frac{64 + 100 - 36}{160} = \\\\frac{128}{160} = 0.8$, so $A = \\\\cos^{-1}(0.8) \\\\approx 36.87^\\\\circ$.",
        hint: "Rearrange Law of Cosines for $\\\\cos A$.",
      },
      {
        front: "What is the area formula using two sides and the included angle?",
        back: "$\\\\text{Area} = \\\\frac{1}{2}ab\\\\sin C$, where $a$ and $b$ are two sides and $C$ is the angle between them. Useful in SAS situations.",
        hint: "Half the product of two sides times sine of the included angle.",
      },
      {
        front: "What is Heron's formula and when is it used?",
        back: "For a triangle with sides $a, b, c$, let $s = \\\\frac{a + b + c}{2}$ (semiperimeter). Then $\\\\text{Area} = \\\\sqrt{s(s-a)(s-b)(s-c)}$. Use it for SSS when you only know the three sides.",
        hint: "Semiperimeter formula for SSS area.",
      },
      {
        front: "Common trap: when using Law of Cosines to find an obtuse angle, what about $\\\\cos$ being negative?",
        back: "A negative cosine correctly yields an angle between $90^\\\\circ$ and $180^\\\\circ$, and $\\\\cos^{-1}$ returns it directly. Unlike the Law of Sines, the Law of Cosines is NOT ambiguous and gives a unique angle.",
        hint: "Negative cosine = obtuse, unambiguous.",
      },
      {
        front: "Best practice: when finding angles with the Law of Sines, which angle should you solve for first?",
        back: "Solve for the SMALLEST unknown angle (opposite the shortest side) first. It must be acute, avoiding the supplement ambiguity, after which the remaining angle comes from the $180^\\\\circ$ sum.",
        hint: "Smallest angle first to dodge ambiguity.",
      },
      {
        front: "When the Law of Cosines reduces to the Pythagorean theorem, what is the angle?",
        back: "When $C = 90^\\\\circ$, $\\\\cos C = 0$, so $c^2 = a^2 + b^2 - 0 = a^2 + b^2$. The Pythagorean theorem is the special right-angle case of the Law of Cosines.",
        hint: "Right angle kills the cosine term.",
      },
    ],
  },
  {
    slug: "exponential-functions-modeling-precalc",
    cards: [
      {
        front: "What is the standard form of an exponential function, and name the parameters?",
        back: "$f(x) = a \\\\cdot b^x$, where $a$ is the initial value (the $y$-intercept, $f(0) = a$) and $b > 0$, $b \\\\neq 1$, is the constant growth/decay factor (base).",
        hint: "Initial value times base to the $x$.",
      },
      {
        front: "How do you tell exponential growth from decay from the base $b$?",
        back: "If $b > 1$, the function grows. If $0 < b < 1$, it decays. The base is the factor by which output multiplies each time $x$ increases by $1$.",
        hint: "$b>1$ grows; $0<b<1$ decays.",
      },
      {
        front: "Convert a growth rate $r$ to a base $b$ in $a(1+r)^t$ form.",
        back: "$b = 1 + r$. For example, $8\\\\%$ growth gives $b = 1.08$; $8\\\\%$ decay gives $b = 1 - 0.08 = 0.92$. Here $r$ is the decimal rate per period.",
        hint: "Base $= 1 \\\\pm$ percent rate.",
      },
      {
        front: "What is the continuous growth/decay model and its parameters?",
        back: "$A(t) = A_0 e^{kt}$, where $A_0$ is the initial amount, $k$ is the continuous rate ($k > 0$ growth, $k < 0$ decay), $t$ is time, and $e \\\\approx 2.718$. Used for continuously compounded processes.",
        hint: "Uses $e$ and a continuous rate $k$.",
      },
      {
        front: "What is the horizontal asymptote of $f(x) = a b^x + c$?",
        back: "$y = c$. The basic exponential approaches its baseline (often $y = 0$) on one end; a vertical shift by $c$ moves the asymptote to $y = c$.",
        hint: "The vertical shift sets the asymptote.",
      },
      {
        front: "Write the compound interest formula and define every variable.",
        back: "$A = P\\\\left(1 + \\\\frac{r}{n}\\\\right)^{nt}$: $A$ = final amount, $P$ = principal, $r$ = annual rate (decimal), $n$ = compoundings per year, $t$ = years.",
        hint: "Principal grows by rate split into $n$ periods.",
      },
      {
        front: "What is the half-life model, and how do you set it up?",
        back: "$A(t) = A_0 \\\\left(\\\\frac{1}{2}\\\\right)^{t/h}$, where $h$ is the half-life (time for the amount to halve) and $A_0$ is the initial amount. After each $h$ units of time, the quantity is multiplied by $\\\\frac{1}{2}$.",
        hint: "Base $\\\\frac{1}{2}$, exponent $t/h$.",
      },
      {
        front: "Given two data points, how do you find $a$ and $b$ for $y = ab^x$?",
        back: "Plug both points to get two equations; divide them to eliminate $a$ and solve for $b$, then back-substitute to find $a$. Dividing cancels $a$ because it appears as a common factor.",
        hint: "Divide the equations to isolate $b$.",
      },
      {
        front: "Find the exponential model through $(0, 5)$ and $(2, 45)$.",
        back: "From $(0,5)$: $a = 5$. Then $45 = 5b^2 \\\\Rightarrow b^2 = 9 \\\\Rightarrow b = 3$. Model: $y = 5 \\\\cdot 3^x$.",
        hint: "Use the $x=0$ point for $a$ first.",
      },
      {
        front: "How do you solve $3 \\\\cdot 2^x = 96$ for $x$?",
        back: "Divide: $2^x = 32$. Recognize $32 = 2^5$, so $x = 5$. Alternatively, take a logarithm of both sides: $x = \\\\frac{\\\\ln 32}{\\\\ln 2}$.",
        hint: "Isolate the power, then match bases or log.",
      },
      {
        front: "Common trap: why is $f(x) = x^2$ NOT exponential, while $f(x) = 2^x$ is?",
        back: "In an exponential function the variable is in the EXPONENT with a constant base. $x^2$ has a constant exponent and variable base (it is a power function). They grow very differently.",
        hint: "Variable in the exponent vs. variable in the base.",
      },
      {
        front: "What real-world quantities are modeled exponentially, and what feature signals it?",
        back: "Population growth, radioactive decay, compound interest, drug concentration, and cooling. The signal is a constant percentage change per unit time (constant ratio between successive equally spaced outputs).",
        hint: "Constant percent change per period.",
      },
      {
        front: "How does the logistic model differ from a pure exponential model?",
        back: "A logistic model $P(t) = \\\\frac{L}{1 + Ce^{-kt}}$ grows nearly exponentially at first but levels off at a carrying capacity $L$ (a horizontal asymptote). Pure exponential growth increases without bound.",
        hint: "Has a ceiling (carrying capacity).",
      },
    ],
  },
  {
    slug: "transformations-precalc",
    cards: [
      {
        front: "What is the parent function, and why does it matter for transformations?",
        back: "The simplest form of a function family (e.g. $y = x^2$, $y = |x|$, $y = \\\\sqrt{x}$, $y = b^x$). Transformations modify this base graph, so recognizing the parent lets you predict the transformed shape.",
        hint: "The base graph you transform.",
      },
      {
        front: "Summarize vertical vs. horizontal shifts in $y = f(x - h) + k$.",
        back: "$+k$ shifts the graph up (down if negative), a VERTICAL shift. $-h$ inside shifts the graph RIGHT (left if the sign inside is $+$), a HORIZONTAL shift that moves opposite to the inside sign.",
        hint: "$k$ outside up/down; $h$ inside backwards.",
      },
      {
        front: "How do vertical stretches and shrinks work in $y = a f(x)$?",
        back: "Multiply all output values by $a$. $|a| > 1$ stretches vertically (taller), $0 < |a| < 1$ shrinks (flatter), and $a < 0$ also reflects across the $x$-axis.",
        hint: "Outside multiplier scales heights.",
      },
      {
        front: "How do horizontal stretches and shrinks work in $y = f(bx)$?",
        back: "Inputs are scaled by $\\\\frac{1}{b}$. $|b| > 1$ compresses horizontally (narrower), $0 < |b| < 1$ stretches (wider). $b < 0$ also reflects across the $y$-axis. The reciprocal effect is the trap.",
        hint: "Inside multiplier scales widths reciprocally.",
      },
      {
        front: "Reflections: what do $-f(x)$ and $f(-x)$ do?",
        back: "$-f(x)$ reflects across the $x$-axis (flips vertically). $f(-x)$ reflects across the $y$-axis (flips horizontally).",
        hint: "Negate output vs. negate input.",
      },
      {
        front: "Apply $y = -|x - 2| + 3$ to the parent $y = |x|$. Describe each step.",
        back: "Shift right $2$ (vertex to $x=2$), reflect across the $x$-axis (opens downward), shift up $3$. The vertex lands at $(2, 3)$ and the V opens down.",
        hint: "Read inside shift, reflection sign, outside shift.",
      },
      {
        front: "What is the general transformation template, and what does each part control?",
        back: "$y = a f(b(x - h)) + k$: $a$ vertical scale/reflection, $b$ horizontal scale/reflection, $h$ horizontal shift, $k$ vertical shift. Vertical pieces act on outputs; horizontal pieces act on inputs.",
        hint: "$a$,$b$ scale; $h$,$k$ shift.",
      },
      {
        front: "Where does a key point $(x_0, y_0)$ on $f$ map under $y = a f(b(x - h)) + k$?",
        back: "It maps to $\\\\left(\\\\frac{x_0}{b} + h,\\\\ a y_0 + k\\\\right)$: divide the input by $b$, add $h$; multiply the output by $a$, add $k$.",
        hint: "Input: divide by $b$, add $h$. Output: times $a$, plus $k$.",
      },
      {
        front: "Common trap: in $y = f(2x - 6)$, why isn't it just 'shift right $6$'?",
        back: "You must factor the input: $f(2(x - 3))$. The transformation is a horizontal compression by $\\\\frac{1}{2}$ and a shift RIGHT $3$ (not $6$). Always factor out the coefficient first.",
        hint: "Factor the coefficient before reading the shift.",
      },
      {
        front: "How do transformations affect even/odd symmetry intuition for graphing?",
        back: "Even functions ($f(-x)=f(x)$) are symmetric about the $y$-axis, so a $y$-axis reflection leaves them unchanged. Odd functions ($f(-x)=-f(x)$) are symmetric about the origin. Recognizing this saves work when reflecting.",
        hint: "$y$-axis symmetry vs. origin symmetry.",
      },
      {
        front: "What order do you apply stretches/reflections vs. shifts to avoid errors?",
        back: "Inside (horizontal): apply scaling/reflection first, then the shift, respecting order of operations on the input. Outside (vertical): apply scaling/reflection, then the shift. Tracking a few key points is the safest verification.",
        hint: "Scale/reflect before shift; verify with points.",
      },
      {
        front: "How does a transformation change the domain and range?",
        back: "Horizontal transformations (shifts, horizontal scales, $y$-axis reflections) alter the DOMAIN. Vertical transformations (shifts, vertical scales, $x$-axis reflections) alter the RANGE. Apply the same operations to the original interval endpoints.",
        hint: "Horizontal -> domain; vertical -> range.",
      },
      {
        front: "Sketch-check: how do you verify a transformed graph quickly?",
        back: "Transform 2-3 anchor points of the parent (such as the vertex/intercepts and one nearby point) using the mapping rules, plot them, and connect using the parent's shape. This catches sign and order mistakes.",
        hint: "Map a few anchor points and connect.",
      },
    ],
  },
];
