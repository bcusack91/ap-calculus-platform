export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "limits-introduction-precalc",
    cards: [
      {
        front: "What does the limit notation $\\lim_{x \\to a} f(x) = L$ mean?",
        back: "It means that as $x$ gets arbitrarily close to $a$ (from both sides, but not equal to $a$), the values of $f(x)$ get arbitrarily close to the single number $L$. The limit describes the function's behavior NEAR $a$, not its value AT $a$.",
        hint: "Approaching, not arriving.",
      },
      {
        front: "What is the difference between a one-sided and a two-sided limit?",
        back: "$\\lim_{x \\to a^-} f(x)$ (left-hand limit) considers $x$ approaching $a$ from values less than $a$; $\\lim_{x \\to a^+} f(x)$ (right-hand limit) considers $x$ approaching from values greater than $a$. The two-sided limit $\\lim_{x \\to a} f(x)$ exists only if both one-sided limits exist and are equal.",
        hint: "Minus = from the left.",
      },
      {
        front: "When does a limit fail to exist?",
        back: "A limit fails to exist if (1) the left- and right-hand limits disagree (jump), (2) the function grows without bound near $a$ ($\\pm\\infty$), or (3) the function oscillates and never settles on one value (e.g., $\\sin(1/x)$ near 0).",
        hint: "Jump, blow-up, or oscillation.",
      },
      {
        front: "Can $\\lim_{x \\to a} f(x)$ exist even if $f(a)$ is undefined?",
        back: "Yes. The limit only depends on values near $a$, not the value at $a$. For example, $f(x) = \\frac{x^2 - 1}{x - 1}$ is undefined at $x = 1$, but $\\lim_{x \\to 1} f(x) = 2$.",
        hint: "The hole doesn't matter.",
      },
      {
        front: "How do you evaluate a limit by direct substitution, and when does it work?",
        back: "Plug $a$ in for $x$: if $f$ is continuous at $a$ (polynomials, and rationals/roots/trig where defined), then $\\lim_{x \\to a} f(x) = f(a)$. Always try substitution first.",
        hint: "Try plugging in first.",
      },
      {
        front: "What is an indeterminate form, and what should you do when you get one?",
        back: "$\\frac{0}{0}$ is an indeterminate form: it does not mean the limit is undefined, only that more work is needed. Try factoring, rationalizing, or simplifying the expression, then re-evaluate.",
        hint: "0/0 means 'do more work.'",
      },
      {
        front: "Worked example: evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
        back: "Substitution gives $\\frac{0}{0}$. Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$. Now substitute: $3 + 3 = 6$. So the limit is $6$.",
        hint: "Factor the difference of squares.",
      },
      {
        front: "Worked example: evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$.",
        back: "Substitution gives $\\frac{0}{0}$. Multiply by the conjugate $\\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}$ to get $\\frac{x}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2}$. Substitute: $\\frac{1}{2+2} = \\frac{1}{4}$.",
        hint: "Rationalize the numerator.",
      },
      {
        front: "What does it mean when $\\lim_{x \\to a} f(x) = \\infty$?",
        back: "It means $f(x)$ increases without bound as $x$ approaches $a$. Technically the limit does not 'exist' as a finite number, but writing $\\infty$ describes the unbounded behavior, usually indicating a vertical asymptote at $x = a$.",
        hint: "Vertical asymptote behavior.",
      },
      {
        front: "How can you estimate a limit numerically?",
        back: "Build a table of $f(x)$ for $x$-values approaching $a$ from both sides (e.g., 2.9, 2.99, 2.999 and 3.1, 3.01, 3.001). If both columns of outputs converge to the same number, that number is the estimated limit.",
        hint: "Make a table from both sides.",
      },
      {
        front: "Common trap: does $\\lim_{x \\to 2} f(x)$ equal $f(2)$ for a piecewise function with a jump at 2?",
        back: "Not necessarily. If the left and right pieces give different values at 2, the two-sided limit does not exist even though $f(2)$ may be defined. Limit existence and the function value are independent.",
        hint: "Check both sides separately.",
      },
      {
        front: "How do you read a limit from a graph?",
        back: "Trace the curve from the left toward $x = a$ to find the left-hand limit, then from the right for the right-hand limit. If they meet at the same height, that height is the two-sided limit; open/closed dots show the function value but do not affect the limit.",
        hint: "Follow the curve, ignore the dot's openness.",
      },
      {
        front: "What is the Squeeze (Sandwich) Theorem, conceptually?",
        back: "If $g(x) \\le f(x) \\le h(x)$ near $a$ and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$. It is used when $f$ is trapped between two functions with the same limit, e.g., for $x^2 \\sin(1/x)$.",
        hint: "Trapped between equal limits.",
      },
    ],
  },
  {
    slug: "polynomial-functions-end-behavior-precalc",
    cards: [
      {
        front: "What two features of a polynomial determine its end behavior?",
        back: "The degree (even or odd) and the sign of the leading coefficient. Together they decide whether each 'arm' of the graph rises or falls as $x \\to \\pm\\infty$.",
        hint: "Degree parity + leading sign.",
      },
      {
        front: "Describe the end behavior of an even-degree polynomial with a positive leading coefficient.",
        back: "Both ends rise: as $x \\to -\\infty$, $f(x) \\to +\\infty$, and as $x \\to +\\infty$, $f(x) \\to +\\infty$. The graph opens upward like a parabola (up-up).",
        hint: "Even + positive = up on both ends.",
      },
      {
        front: "Describe the end behavior of an even-degree polynomial with a negative leading coefficient.",
        back: "Both ends fall: as $x \\to \\pm\\infty$, $f(x) \\to -\\infty$. The graph opens downward (down-down).",
        hint: "Even + negative = down on both ends.",
      },
      {
        front: "Describe the end behavior of an odd-degree polynomial with a positive leading coefficient.",
        back: "Ends go in opposite directions: as $x \\to -\\infty$, $f(x) \\to -\\infty$, and as $x \\to +\\infty$, $f(x) \\to +\\infty$ (down on the left, up on the right). Like $y = x^3$.",
        hint: "Odd + positive = down-up.",
      },
      {
        front: "Describe the end behavior of an odd-degree polynomial with a negative leading coefficient.",
        back: "As $x \\to -\\infty$, $f(x) \\to +\\infty$, and as $x \\to +\\infty$, $f(x) \\to -\\infty$ (up on the left, down on the right). Like $y = -x^3$.",
        hint: "Odd + negative = up-down.",
      },
      {
        front: "Why does only the leading term control end behavior?",
        back: "For very large $|x|$, the highest-degree term grows much faster than all others, so it dominates the value of the polynomial. Lower-degree terms become negligible in comparison.",
        hint: "Highest power wins at the extremes.",
      },
      {
        front: "What is the maximum number of real zeros and turning points of a degree-$n$ polynomial?",
        back: "At most $n$ real zeros (roots) and at most $n - 1$ turning points (local maxima/minima). A degree-4 polynomial has at most 4 roots and 3 turns.",
        hint: "n roots, n minus one turns.",
      },
      {
        front: "How does the multiplicity of a real zero affect the graph at that $x$-intercept?",
        back: "Odd multiplicity: the graph crosses the $x$-axis (with a flattening if multiplicity > 1). Even multiplicity: the graph touches and turns around (bounces off) without crossing.",
        hint: "Odd crosses, even bounces.",
      },
      {
        front: "Worked example: state the end behavior of $f(x) = -2x^3 + 5x - 1$.",
        back: "Leading term is $-2x^3$: degree 3 (odd), leading coefficient negative. So as $x \\to -\\infty$, $f(x) \\to +\\infty$; as $x \\to +\\infty$, $f(x) \\to -\\infty$ (up-down).",
        hint: "Look only at -2x^3.",
      },
      {
        front: "Worked example: what is the end behavior of $f(x) = 3x^4 - 7x^2 + 2$?",
        back: "Leading term $3x^4$: even degree, positive coefficient. Both ends rise: $f(x) \\to +\\infty$ as $x \\to \\pm\\infty$.",
        hint: "Even + positive.",
      },
      {
        front: "What does the constant term of a polynomial tell you graphically?",
        back: "The constant term equals $f(0)$, which is the $y$-intercept of the graph (where it crosses the $y$-axis).",
        hint: "Plug in x = 0.",
      },
      {
        front: "Common trap: is $f(x) = 4x^2 - x^5 + 3$ degree 2?",
        back: "No. Reorder by degree: the highest power is $-x^5$, so the polynomial is degree 5 (odd) with a negative leading coefficient. Always identify the term with the largest exponent, not the first one written.",
        hint: "Find the biggest exponent anywhere.",
      },
      {
        front: "How do you write end behavior using limit notation?",
        back: "Use $\\lim_{x \\to +\\infty} f(x)$ and $\\lim_{x \\to -\\infty} f(x)$, each equal to $+\\infty$ or $-\\infty$. For example, for $y = x^3$: $\\lim_{x \\to -\\infty} x^3 = -\\infty$ and $\\lim_{x \\to +\\infty} x^3 = +\\infty$.",
        hint: "Limits at plus/minus infinity.",
      },
    ],
  },
  {
    slug: "logarithmic-functions-equations-precalc",
    cards: [
      {
        front: "What is the definition of a logarithm?",
        back: "$\\log_b(x) = y$ means $b^y = x$, where the base $b > 0$, $b \\neq 1$, and $x > 0$. A logarithm answers 'to what power must I raise $b$ to get $x$?'",
        hint: "Log is an exponent.",
      },
      {
        front: "What do $\\log$ (without a base) and $\\ln$ mean?",
        back: "$\\log x$ usually denotes the common logarithm, base 10 ($\\log_{10} x$). $\\ln x$ denotes the natural logarithm, base $e$ ($\\log_e x$), where $e \\approx 2.718$.",
        hint: "log = base 10, ln = base e.",
      },
      {
        front: "State the three main logarithm laws.",
        back: "Product: $\\log_b(MN) = \\log_b M + \\log_b N$. Quotient: $\\log_b(M/N) = \\log_b M - \\log_b N$. Power: $\\log_b(M^p) = p\\log_b M$. These convert products/quotients/powers into sums/differences/multiples.",
        hint: "Multiply to add, divide to subtract, power pulls down.",
      },
      {
        front: "What is the change-of-base formula and when is it used?",
        back: "$\\log_b x = \\frac{\\log_c x}{\\log_c b}$ for any valid base $c$. Use it to evaluate logs of any base on a calculator (which only has $\\log_{10}$ and $\\ln$), e.g., $\\log_2 7 = \\frac{\\ln 7}{\\ln 2}$.",
        hint: "New base on top and bottom.",
      },
      {
        front: "What are the domain and range of $f(x) = \\log_b x$?",
        back: "Domain: $x > 0$ (you can only take the log of a positive number). Range: all real numbers $(-\\infty, \\infty)$. There is a vertical asymptote at $x = 0$.",
        hint: "Positive inputs, all outputs.",
      },
      {
        front: "How are logarithmic and exponential functions related?",
        back: "$\\log_b x$ and $b^x$ are inverse functions. So $\\log_b(b^x) = x$ and $b^{\\log_b x} = x$. Their graphs are reflections of each other across the line $y = x$.",
        hint: "They undo each other.",
      },
      {
        front: "Evaluate $\\log_3 81$ without a calculator.",
        back: "Ask: $3$ to what power gives $81$? Since $3^4 = 81$, $\\log_3 81 = 4$.",
        hint: "Rewrite 81 as a power of 3.",
      },
      {
        front: "Worked example: solve $\\log_2(x + 1) = 5$.",
        back: "Rewrite in exponential form: $2^5 = x + 1$, so $32 = x + 1$, giving $x = 31$. Check the domain: $x + 1 = 32 > 0$, valid.",
        hint: "Convert to exponential form.",
      },
      {
        front: "Worked example: solve $\\log(x) + \\log(x - 3) = 1$.",
        back: "Combine: $\\log[x(x-3)] = 1$, so $x(x-3) = 10^1 = 10$. Then $x^2 - 3x - 10 = 0 \\Rightarrow (x-5)(x+2) = 0$, giving $x = 5$ or $x = -2$. Reject $x = -2$ (makes log of a negative); answer $x = 5$.",
        hint: "Combine logs, then check the domain.",
      },
      {
        front: "How do you solve an exponential equation like $5^x = 20$ using logs?",
        back: "Take a log of both sides: $x \\ln 5 = \\ln 20$, so $x = \\frac{\\ln 20}{\\ln 5} \\approx 1.861$. The power rule moves the exponent down in front.",
        hint: "Take ln of both sides.",
      },
      {
        front: "Common trap: is $\\log(a + b)$ equal to $\\log a + \\log b$?",
        back: "No. $\\log a + \\log b = \\log(ab)$, not $\\log(a + b)$. There is no log rule that simplifies the log of a SUM. This is one of the most common errors.",
        hint: "Sum inside ≠ sum of logs.",
      },
      {
        front: "Why must you always check solutions to logarithmic equations?",
        back: "Algebra can produce extraneous solutions that make the argument of a log zero or negative, which is undefined. Always substitute back and discard any value that violates the domain ($\\text{argument} > 0$).",
        hint: "Watch for negative arguments.",
      },
      {
        front: "What are $\\log_b 1$ and $\\log_b b$ for any valid base $b$?",
        back: "$\\log_b 1 = 0$ (since $b^0 = 1$) and $\\log_b b = 1$ (since $b^1 = b$). These hold for every valid base.",
        hint: "Power 0 and power 1.",
      },
    ],
  },
  {
    slug: "matrices-precalc",
    cards: [
      {
        front: "What is the dimension (order) of a matrix, and how is it written?",
        back: "Dimension is written as $m \\times n$, where $m$ is the number of rows and $n$ is the number of columns. Rows first, then columns. A $2 \\times 3$ matrix has 2 rows and 3 columns.",
        hint: "Rows × columns.",
      },
      {
        front: "When can two matrices be added, and how?",
        back: "Two matrices can be added only if they have the SAME dimensions. You add corresponding entries (entry-by-entry). Subtraction works the same way.",
        hint: "Same size, add entry by entry.",
      },
      {
        front: "What is scalar multiplication of a matrix?",
        back: "Multiply every entry of the matrix by the scalar (a single number). For example, $3 \\begin{bmatrix} 1 & 2 \\\\ 0 & 4 \\end{bmatrix} = \\begin{bmatrix} 3 & 6 \\\\ 0 & 12 \\end{bmatrix}$.",
        hint: "Distribute to every entry.",
      },
      {
        front: "What is the rule for when matrix multiplication $AB$ is defined?",
        back: "$AB$ is defined only when the number of columns of $A$ equals the number of rows of $B$. If $A$ is $m \\times n$ and $B$ is $n \\times p$, then $AB$ is $m \\times p$ (inner dimensions must match; outer dimensions give the result size).",
        hint: "Inner numbers must match.",
      },
      {
        front: "How do you compute a single entry of a matrix product $AB$?",
        back: "The entry in row $i$, column $j$ of $AB$ is the dot product of row $i$ of $A$ with column $j$ of $B$: multiply matching elements and sum them.",
        hint: "Row of A dotted with column of B.",
      },
      {
        front: "Is matrix multiplication commutative?",
        back: "No. In general $AB \\neq BA$. The order matters; sometimes $BA$ is not even defined when $AB$ is. This is a key difference from ordinary number multiplication.",
        hint: "Order matters.",
      },
      {
        front: "What is the identity matrix $I$?",
        back: "A square matrix with 1's on the main diagonal and 0's elsewhere. It acts like the number 1: $AI = IA = A$ for any compatible matrix $A$.",
        hint: "Diagonal of 1's; the matrix 'one.'",
      },
      {
        front: "What is the determinant of a $2 \\times 2$ matrix $\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$?",
        back: "$\\det = ad - bc$. It is the difference of the diagonal products. If the determinant is 0, the matrix has no inverse (it is singular).",
        hint: "Main diagonal minus off-diagonal.",
      },
      {
        front: "What is the inverse of a $2 \\times 2$ matrix $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$?",
        back: "$A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$. Swap $a$ and $d$, negate $b$ and $c$, and divide by the determinant. Only exists if $ad - bc \\neq 0$.",
        hint: "Swap diagonal, negate other two, divide by det.",
      },
      {
        front: "What does $A^{-1}$ satisfy by definition?",
        back: "$A A^{-1} = A^{-1} A = I$, the identity matrix. The inverse 'undoes' the matrix, analogous to a reciprocal for numbers.",
        hint: "Product gives the identity.",
      },
      {
        front: "How can a system of linear equations be written and solved with matrices?",
        back: "Write it as $AX = B$, where $A$ is the coefficient matrix, $X$ the variable column, and $B$ the constants. If $A^{-1}$ exists, the solution is $X = A^{-1}B$.",
        hint: "AX = B, so X = A inverse times B.",
      },
      {
        front: "Worked example: find the determinant of $\\begin{bmatrix} 4 & 3 \\\\ 2 & 5 \\end{bmatrix}$.",
        back: "$\\det = (4)(5) - (3)(2) = 20 - 6 = 14$. Since it is nonzero, the matrix is invertible.",
        hint: "ad minus bc.",
      },
      {
        front: "Common trap: when adding the dimensions for $A_{3\\times2}$ times $B_{2\\times4}$, what is the product's size?",
        back: "The product $AB$ is $3 \\times 4$. The inner dimensions (2 and 2) match, so multiplication is defined, and the result uses the outer dimensions (3 and 4).",
        hint: "Keep the outer numbers.",
      },
    ],
  },
  {
    slug: "rational-functions-precalc",
    cards: [
      {
        front: "What is a rational function?",
        back: "A function of the form $f(x) = \\frac{p(x)}{q(x)}$, where $p$ and $q$ are polynomials and $q(x) \\neq 0$. Its domain excludes any $x$ that makes the denominator zero.",
        hint: "Polynomial over polynomial.",
      },
      {
        front: "How do you find the vertical asymptotes of a rational function?",
        back: "First reduce the fraction to lowest terms. Vertical asymptotes occur at the $x$-values that make the simplified denominator zero (these are not common factors with the numerator).",
        hint: "Zeros of the reduced denominator.",
      },
      {
        front: "What causes a hole (removable discontinuity) instead of a vertical asymptote?",
        back: "A hole occurs at any $x$ where a factor cancels from both numerator and denominator. The function is undefined there, but the graph has a single missing point rather than an asymptote.",
        hint: "Canceled common factor.",
      },
      {
        front: "How do you find the horizontal asymptote by comparing degrees?",
        back: "Let $n$ = degree of numerator, $m$ = degree of denominator. If $n < m$: $y = 0$. If $n = m$: $y = \\frac{\\text{leading coeff of top}}{\\text{leading coeff of bottom}}$. If $n > m$: no horizontal asymptote (possibly a slant one).",
        hint: "Compare top and bottom degrees.",
      },
      {
        front: "When does a rational function have a slant (oblique) asymptote, and how do you find it?",
        back: "When the numerator's degree is exactly one more than the denominator's. Divide using polynomial (long) division; the quotient (ignoring the remainder) is the slant asymptote line $y = mx + b$.",
        hint: "Degree exactly one higher; do long division.",
      },
      {
        front: "How do you find the $x$-intercepts of a rational function?",
        back: "Set the numerator equal to zero and solve (after reducing). An $x$-intercept occurs where the numerator is zero AND the denominator is nonzero.",
        hint: "Numerator equals zero.",
      },
      {
        front: "How do you find the $y$-intercept of a rational function?",
        back: "Evaluate $f(0)$ by substituting $x = 0$, provided the denominator is not zero there. The result is the $y$-intercept.",
        hint: "Plug in x = 0.",
      },
      {
        front: "Worked example: find all asymptotes of $f(x) = \\frac{2x^2 + 1}{x^2 - 4}$.",
        back: "Denominator zero at $x = \\pm 2$, so vertical asymptotes at $x = 2$ and $x = -2$. Degrees are equal (2 and 2), so horizontal asymptote $y = \\frac{2}{1} = 2$.",
        hint: "Factor x^2 - 4; compare degrees.",
      },
      {
        front: "Worked example: identify the hole in $f(x) = \\frac{x^2 - 9}{x - 3}$.",
        back: "Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\neq 3$. The $(x-3)$ cancels, so there is a hole at $x = 3$, with $y = 3 + 3 = 6$. The point $(3, 6)$ is removed.",
        hint: "Cancel and substitute back.",
      },
      {
        front: "Can a graph cross its horizontal asymptote?",
        back: "Yes. A horizontal asymptote describes END behavior (as $x \\to \\pm\\infty$); the graph may cross it in the middle region. A graph can NEVER cross a vertical asymptote.",
        hint: "Horizontal yes, vertical no.",
      },
      {
        front: "Common trap: does every zero of the denominator give a vertical asymptote?",
        back: "No. If the factor also cancels with the numerator, that zero gives a HOLE, not an asymptote. Always reduce the function before locating vertical asymptotes.",
        hint: "Check for cancellation first.",
      },
      {
        front: "How do you determine the domain of a rational function?",
        back: "Set the original denominator equal to zero and solve; exclude those $x$-values. The domain is all real numbers except those excluded values (this includes values that create holes).",
        hint: "Exclude denominator zeros.",
      },
      {
        front: "What is the parent rational function and its key features?",
        back: "$f(x) = \\frac{1}{x}$. It has a vertical asymptote at $x = 0$, a horizontal asymptote at $y = 0$, and lies in the first and third quadrants. It is an odd function (symmetric about the origin).",
        hint: "The basic reciprocal curve.",
      },
    ],
  },
  {
    slug: "trigonometric-identities-precalc",
    cards: [
      {
        front: "State the three Pythagorean identities.",
        back: "$\\sin^2\\theta + \\cos^2\\theta = 1$; $1 + \\tan^2\\theta = \\sec^2\\theta$; $1 + \\cot^2\\theta = \\csc^2\\theta$. The last two come from dividing the first by $\\cos^2\\theta$ and $\\sin^2\\theta$.",
        hint: "All derive from sin² + cos² = 1.",
      },
      {
        front: "What are the reciprocal identities?",
        back: "$\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$. Cosecant pairs with sine, secant with cosine.",
        hint: "csc-sin, sec-cos, cot-tan.",
      },
      {
        front: "What are the quotient identities?",
        back: "$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ and $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$. These let you rewrite tangent/cotangent in terms of sine and cosine.",
        hint: "Tangent = sine over cosine.",
      },
      {
        front: "What are the even/odd (negative-angle) identities?",
        back: "Cosine and secant are even: $\\cos(-\\theta) = \\cos\\theta$, $\\sec(-\\theta) = \\sec\\theta$. Sine, tangent, cosecant, cotangent are odd: $\\sin(-\\theta) = -\\sin\\theta$, $\\tan(-\\theta) = -\\tan\\theta$.",
        hint: "Only cosine and secant are even.",
      },
      {
        front: "State the sine and cosine sum identities.",
        back: "$\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$; $\\cos(A + B) = \\cos A \\cos B - \\sin A \\sin B$. Note cosine's sign flips to minus for a sum.",
        hint: "Sine keeps sign; cosine flips it.",
      },
      {
        front: "State the sine and cosine difference identities.",
        back: "$\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$; $\\cos(A - B) = \\cos A \\cos B + \\sin A \\sin B$. For a difference, the signs are opposite of the sum formulas.",
        hint: "Swap the middle signs from the sum.",
      },
      {
        front: "State the double-angle identity for sine.",
        back: "$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$. It is derived from the sine sum formula with $A = B = \\theta$.",
        hint: "Two, sine, cosine.",
      },
      {
        front: "Give the three forms of the cosine double-angle identity.",
        back: "$\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$. Choose the form that matches the rest of the problem.",
        hint: "Three equivalent forms.",
      },
      {
        front: "Worked example: simplify $\\frac{\\sin\\theta}{\\csc\\theta} + \\frac{\\cos\\theta}{\\sec\\theta}$.",
        back: "Since $\\csc\\theta = 1/\\sin\\theta$ and $\\sec\\theta = 1/\\cos\\theta$, this becomes $\\sin^2\\theta + \\cos^2\\theta = 1$.",
        hint: "Use reciprocal identities.",
      },
      {
        front: "Worked example: verify $\\sec\\theta - \\sec\\theta\\sin^2\\theta = \\cos\\theta$.",
        back: "Factor: $\\sec\\theta(1 - \\sin^2\\theta) = \\sec\\theta\\cos^2\\theta = \\frac{1}{\\cos\\theta}\\cdot\\cos^2\\theta = \\cos\\theta$. Verified.",
        hint: "Factor and use 1 - sin² = cos².",
      },
      {
        front: "What is the general strategy for proving a trig identity?",
        back: "Work on one side only (usually the more complicated one), convert everything to sines and cosines, use Pythagorean/quotient identities, and simplify until it matches the other side. Do not move terms across the equals sign as if solving an equation.",
        hint: "Transform one side into the other.",
      },
      {
        front: "Common trap: is $\\sin(A + B)$ equal to $\\sin A + \\sin B$?",
        back: "No. Trig functions are not distributive over addition. You must use the sum formula: $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$. Likewise $\\cos(2\\theta) \\neq 2\\cos\\theta$.",
        hint: "No distributing into the angle.",
      },
      {
        front: "What are the cofunction identities?",
        back: "$\\sin\\theta = \\cos(90^\\circ - \\theta)$ and $\\tan\\theta = \\cot(90^\\circ - \\theta)$ (and reciprocals). A function of an angle equals the cofunction of its complement.",
        hint: "Function of angle = cofunction of complement.",
      },
    ],
  },
  {
    slug: "continuity-precalc",
    cards: [
      {
        front: "What three conditions must hold for $f$ to be continuous at $x = a$?",
        back: "(1) $f(a)$ is defined; (2) $\\lim_{x \\to a} f(x)$ exists; (3) $\\lim_{x \\to a} f(x) = f(a)$. All three are required.",
        hint: "Defined, limit exists, they match.",
      },
      {
        front: "Intuitively, what does it mean for a function to be continuous?",
        back: "You can draw the entire graph without lifting your pencil over the interval. There are no holes, jumps, or breaks.",
        hint: "No lifting the pencil.",
      },
      {
        front: "What is a removable discontinuity?",
        back: "A hole in the graph: the limit exists but either $f(a)$ is undefined or $f(a)$ does not equal the limit. It can be 'removed' by redefining the single point.",
        hint: "A fixable hole.",
      },
      {
        front: "What is a jump discontinuity?",
        back: "A discontinuity where the left-hand and right-hand limits both exist but are NOT equal, so the graph jumps from one value to another. Common in piecewise functions.",
        hint: "Left ≠ right; graph leaps.",
      },
      {
        front: "What is an infinite (essential) discontinuity?",
        back: "A discontinuity at a vertical asymptote, where the function increases or decreases without bound near $a$. The limit is $\\pm\\infty$, so it does not exist.",
        hint: "Vertical asymptote.",
      },
      {
        front: "Which common function families are continuous on their entire domains?",
        back: "Polynomials (continuous everywhere), and rational, root, exponential, logarithmic, and trigonometric functions are continuous wherever they are defined.",
        hint: "Most familiar functions, where defined.",
      },
      {
        front: "Worked example: is $f(x) = \\frac{x^2 - 4}{x - 2}$ continuous at $x = 2$?",
        back: "No. $f(2)$ is undefined (denominator is 0). Although $\\lim_{x\\to 2} f(x) = 4$ exists, condition (1) fails, so there is a removable discontinuity (hole) at $x = 2$.",
        hint: "Check if f(2) is defined.",
      },
      {
        front: "Worked example: find $k$ so that the piecewise function $f(x) = \\begin{cases} x + 3 & x \\le 1 \\\\ kx & x > 1 \\end{cases}$ is continuous at $x = 1$.",
        back: "Set the pieces equal at $x = 1$: $1 + 3 = k(1)$, so $k = 4$. This makes the left and right limits equal, removing the jump.",
        hint: "Match the two pieces at x = 1.",
      },
      {
        front: "What does it mean for a function to be continuous on a closed interval $[a, b]$?",
        back: "It is continuous at every interior point, continuous from the right at $a$ ($\\lim_{x\\to a^+} f(x) = f(a)$), and continuous from the left at $b$ ($\\lim_{x\\to b^-} f(x) = f(b)$).",
        hint: "Interior plus one-sided at the ends.",
      },
      {
        front: "State the Intermediate Value Theorem (IVT).",
        back: "If $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c$ in $(a, b)$ with $f(c) = N$. It is used to guarantee a root or specific output exists.",
        hint: "Continuous functions hit every in-between value.",
      },
      {
        front: "How is the IVT used to show an equation has a solution in an interval?",
        back: "Show $f$ is continuous on $[a, b]$ and that $f(a)$ and $f(b)$ have opposite signs (so 0 lies between them). Then IVT guarantees a $c$ in $(a, b)$ with $f(c) = 0$, i.e., a root.",
        hint: "Sign change implies a root.",
      },
      {
        front: "Common trap: if $\\lim_{x \\to a} f(x)$ exists, is $f$ automatically continuous at $a$?",
        back: "No. The limit existing is only one of three conditions. The function must also be defined at $a$ AND its value must equal the limit. A hole has a limit but no continuity.",
        hint: "Limit existing isn't enough.",
      },
      {
        front: "Is the function $f(x) = \\tan x$ continuous everywhere?",
        back: "No. It is continuous on its domain but has infinite discontinuities (vertical asymptotes) at $x = \\frac{\\pi}{2} + \\pi n$, where $\\cos x = 0$.",
        hint: "Breaks where cosine is zero.",
      },
    ],
  },
  {
    slug: "systems-of-equations-precalc",
    cards: [
      {
        front: "What does it mean to solve a system of equations?",
        back: "To find all sets of variable values that satisfy every equation simultaneously. Graphically, the solution is the point(s) where the graphs intersect.",
        hint: "Where all equations are true at once.",
      },
      {
        front: "What are the three possible outcomes for a system of two linear equations?",
        back: "(1) One solution (lines intersect at a point); (2) no solution (parallel lines, inconsistent system); (3) infinitely many solutions (same line, dependent system).",
        hint: "One, none, or infinitely many.",
      },
      {
        front: "Describe the substitution method.",
        back: "Solve one equation for one variable, substitute that expression into the other equation to get a single-variable equation, solve it, then back-substitute to find the other variable.",
        hint: "Isolate, plug in, back-substitute.",
      },
      {
        front: "Describe the elimination (addition) method.",
        back: "Multiply equations as needed so one variable has opposite coefficients, then add the equations to eliminate that variable. Solve the result and back-substitute.",
        hint: "Cancel a variable by adding.",
      },
      {
        front: "Worked example: solve $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ by elimination.",
        back: "Add the equations: $3x = 9 \\Rightarrow x = 3$. Substitute into $x - y = 2$: $3 - y = 2 \\Rightarrow y = 1$. Solution: $(3, 1)$.",
        hint: "The y terms cancel when you add.",
      },
      {
        front: "Worked example: solve $\\begin{cases} y = x^2 \\\\ y = x + 2 \\end{cases}$.",
        back: "Set equal: $x^2 = x + 2 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1) = 0$. So $x = 2$ or $x = -1$, giving points $(2, 4)$ and $(-1, 1)$.",
        hint: "Substitution; factor the quadratic.",
      },
      {
        front: "How can a nonlinear system (line and circle) have 0, 1, or 2 solutions?",
        back: "A line can miss a circle (0 solutions), be tangent to it (1 solution), or cross it (2 solutions). Solve by substitution; the number of real solutions to the resulting quadratic tells you which case occurs.",
        hint: "Miss, touch, or cross.",
      },
      {
        front: "What happens algebraically when a linear system has no solution?",
        back: "Eliminating both variables yields a false statement like $0 = 5$. This contradiction means the lines are parallel and the system is inconsistent.",
        hint: "You get a false number statement.",
      },
      {
        front: "What happens algebraically when a system has infinitely many solutions?",
        back: "Both variables eliminate and you get a true statement like $0 = 0$. This means the equations represent the same line (dependent), so every point on that line is a solution.",
        hint: "You get a true identity like 0 = 0.",
      },
      {
        front: "How do you solve a 3-variable linear system by elimination?",
        back: "Eliminate one variable from two different pairs of equations to get two equations in two variables, solve that smaller system, then back-substitute to find the third variable.",
        hint: "Reduce 3 variables to 2, then to 1.",
      },
      {
        front: "Common trap when using substitution—what is easy to forget?",
        back: "After solving for one variable, you must back-substitute to find the OTHER variable(s); a complete solution lists all coordinates. Also, remember nonlinear systems can have multiple solutions—don't stop at one.",
        hint: "Find every variable; expect multiple points.",
      },
      {
        front: "How can matrices solve a linear system, and when is this efficient?",
        back: "Write the system as $AX = B$ and compute $X = A^{-1}B$, or use Gaussian elimination on the augmented matrix. This is efficient for larger systems (3 or more variables) and is calculator-friendly.",
        hint: "X = A inverse times B.",
      },
      {
        front: "When should you prefer elimination over substitution?",
        back: "Use elimination when no variable has a coefficient of 1 (so isolating would create messy fractions) or when coefficients line up to cancel easily. Use substitution when a variable is already isolated or easy to isolate.",
        hint: "Elimination for messy coefficients.",
      },
    ],
  },
];
