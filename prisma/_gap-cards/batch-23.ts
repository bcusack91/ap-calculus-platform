export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "bc-exam-strategies-calcbc",
    cards: [
      {
        front: "How is the AP Calculus BC exam structured (sections and timing)?",
        back: "Section I is multiple choice: Part A (30 questions, 60 min, no calculator) and Part B (15 questions, 45 min, calculator). Section II is free response: Part A (2 questions, 30 min, calculator) and Part B (4 questions, 60 min, no calculator). MC and FRQ are weighted 50/50.",
        hint: "Two sections, each split into calculator and non-calculator parts."
      },
      {
        front: "On the calculator-active FRQ, which four calculator capabilities must you be able to use without showing work?",
        back: "You may: (1) graph a function in a window, (2) find zeros/roots (solve equations), (3) compute a numerical derivative at a point, and (4) compute a numerical definite integral. You must still write the setup (the integral or derivative expression) before giving the numerical answer.",
        hint: "Graph, solve, differentiate, integrate."
      },
      {
        front: "What is the standard rule for reporting decimal answers on the FRQ?",
        back: "Report at least 3 places after the decimal point (truncated or rounded). Do not round intermediate values prematurely, because that can throw off the final 3-decimal answer.",
        hint: "Three decimal places."
      },
      {
        front: "On an FRQ, you write $\\\\int_0^4 v(t)\\\\,dt$ and then a wrong number. How is this scored versus writing only the number?",
        back: "Writing the correct definite-integral setup typically earns the setup point even if the arithmetic answer is wrong. Writing only a bare number with no setup earns nothing if the number is wrong, and is risky even if right. Always show the integral or derivative you evaluated.",
        hint: "Setup points are awarded separately from the answer."
      },
      {
        front: "What does it mean that 'BC includes all of AB,' and how does the AB subscore work?",
        back: "About 60% of BC content is shared AB material; the rest is BC-only (series, parametric/polar/vector, advanced integration, logistic, Euler). Your exam yields a BC score (1-5) plus an AB subscore (1-5) computed from the AB-aligned questions.",
        hint: "BC = AB content + extra units."
      },
      {
        front: "What is a smart strategy for the no-calculator MC section regarding pacing?",
        back: "You have about 2 minutes per question (60 min / 30 questions). Answer easy questions first, flag hard ones, and never leave blanks since there is no guessing penalty. Eliminate impossible answers (wrong sign, wrong units, out of range) before guessing.",
        hint: "No penalty for guessing; pace at ~2 min each."
      },
      {
        front: "When a series-convergence FRQ asks you to 'justify,' what must your justification name?",
        back: "Name the specific test (e.g., ratio test, alternating series test, p-series, comparison) and verify its exact conditions in writing. A correct conclusion without naming the test or checking its hypotheses usually loses justification points.",
        hint: "Name the test AND check its conditions."
      },
      {
        front: "On a related-rates or accumulation FRQ, what common point do students lose by forgetting?",
        back: "Units and proper interpretation. When asked to interpret an answer 'in the context of the problem,' you must state what the number means with correct units (e.g., 'the amount of water in liters after 5 minutes'), not just restate the computation.",
        hint: "Interpret with units in context."
      },
      {
        front: "What is the danger of 'mathematical run-on' in FRQ work, and how do you avoid it?",
        back: "Writing a chain of equalities that is not actually all equal (e.g., $f'(x)=\\\\ldots=5=g(2)$ where the pieces are not equal) can lose points even if the final answer is right. Write each distinct quantity on its own line with a clear label.",
        hint: "Don't string non-equal expressions with equals signs."
      },
      {
        front: "For a Taylor/Maclaurin FRQ, what three skills are almost always tested?",
        back: "(1) Writing terms or the general term of the series, (2) using a known series (e.g., for $e^x$, $\\\\sin x$, $\\\\frac{1}{1-x}$) or substitution/differentiation/integration to build a new one, and (3) bounding error with the Lagrange remainder or alternating series error.",
        hint: "Build the series, use known series, bound the error."
      },
      {
        front: "Worked strategy: a free-response gives a calculator-active integral $\\\\int_1^5 e^{-t^2}\\\\,dt$. What do you write?",
        back: "Write the integral expression exactly as $\\\\int_1^5 e^{-t^2}\\\\,dt$, then the numerical value from your calculator to 3 decimals (about $0.139$). The written integral earns setup credit; the number earns the answer point.",
        hint: "Setup first, then the 3-decimal value."
      },
      {
        front: "What is a key 'last-minute' content checklist unique to BC (not on AB)?",
        back: "Series and convergence tests; Taylor/Maclaurin series and error bounds; parametric, polar, and vector-valued functions (derivatives, arc length, area); improper integrals; logistic growth; Euler's method; integration by parts and partial fractions.",
        hint: "The BC-only units."
      },
      {
        front: "Why should you read the entire FRQ before starting part (a)?",
        back: "Later parts often reuse a value, function, or table from earlier parts, and the global context tells you what variables mean and their units. Reading ahead prevents re-deriving things and avoids misinterpreting the function (e.g., whether it is a rate or an amount).",
        hint: "Parts build on each other."
      }
    ]
  },
  {
    slug: "review-connections-calcbc",
    cards: [
      {
        front: "State the Fundamental Theorem of Calculus (both parts) and how they connect.",
        back: "Part 1: if $F(x)=\\\\int_a^x f(t)\\\\,dt$ then $F'(x)=f(x)$. Part 2: $\\\\int_a^b f(x)\\\\,dx = F(b)-F(a)$ where $F'=f$. Together they show differentiation and integration are inverse operations.",
        hint: "Derivative of an accumulation function; evaluation via antiderivative."
      },
      {
        front: "How are a function's position, velocity, and acceleration connected through calculus?",
        back: "Velocity $v(t)=s'(t)$ and acceleration $a(t)=v'(t)=s''(t)$. Reversing: $s(t)=s_0+\\\\int v\\\\,dt$ and displacement $=\\\\int_a^b v\\\\,dt$. Total distance $=\\\\int_a^b |v(t)|\\\\,dt$.",
        hint: "Differentiate down, integrate up; absolute value for distance."
      },
      {
        front: "How does the sign of $f'$ and $f''$ connect to the shape of $f$'s graph?",
        back: "$f'>0$ means $f$ increasing; $f'<0$ decreasing. $f''>0$ means concave up; $f''<0$ concave down. Sign changes of $f'$ give local extrema; sign changes of $f''$ give inflection points.",
        hint: "First derivative = slope; second = concavity."
      },
      {
        front: "What is the connection between average value of a function and the FTC?",
        back: "The average value of $f$ on $[a,b]$ is $\\\\frac{1}{b-a}\\\\int_a^b f(x)\\\\,dx$. The Mean Value Theorem for integrals guarantees some $c$ with $f(c)$ equal to this average.",
        hint: "Integral divided by interval length."
      },
      {
        front: "How are limits, continuity, and differentiability nested as conditions?",
        back: "Differentiability implies continuity, and continuity implies the limit exists and equals the function value. The reverse implications fail: a function can be continuous but not differentiable (e.g., $|x|$ at $0$).",
        hint: "Differentiable -> continuous -> limit exists; not reversible."
      },
      {
        front: "Connect the Riemann sum to the definite integral.",
        back: "A definite integral is the limit of Riemann sums: $\\\\int_a^b f(x)\\\\,dx=\\\\lim_{n\\\\to\\\\infty}\\\\sum_{i=1}^n f(x_i^*)\\\\Delta x$. Left, right, midpoint, and trapezoidal sums are finite approximations of this limit.",
        hint: "Integral = limit of sampled rectangles."
      },
      {
        front: "How do you decide whether a real-world FRQ wants a derivative or an integral?",
        back: "If you are given a rate (units like L/min) and asked for an amount or total change, integrate. If you are given an amount and asked how fast it changes, differentiate. Watch units to confirm.",
        hint: "Rate -> integrate for total; amount -> differentiate for rate."
      },
      {
        front: "What is the net change theorem and how does it connect to accumulation?",
        back: "$\\\\int_a^b f'(x)\\\\,dx = f(b)-f(a)$: integrating a rate of change gives the net change in the quantity. So $f(b)=f(a)+\\\\int_a^b f'(x)\\\\,dx$, the key for finding a future amount from an initial amount plus accumulated rate.",
        hint: "Integral of a rate = net change."
      },
      {
        front: "How are the Intermediate Value Theorem (IVT) and Mean Value Theorem (MVT) used as justification tools?",
        back: "IVT: if $f$ is continuous on $[a,b]$ and a value lies between $f(a)$ and $f(b)$, some $c$ attains it (used to guarantee a root or a specific value). MVT: if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, some $c$ has $f'(c)=\\\\frac{f(b)-f(a)}{b-a}$ (used to guarantee a slope/instantaneous rate equals the average rate).",
        hint: "IVT for values; MVT for slopes."
      },
      {
        front: "Connect parametric, polar, and rectangular representations of curves.",
        back: "All describe curves in the plane. Parametric uses $x(t),y(t)$; polar uses $r(\\\\theta)$ with $x=r\\\\cos\\\\theta,\\\\;y=r\\\\sin\\\\theta$; rectangular uses $y=f(x)$. Slope in parametric/polar comes from $\\\\frac{dy/dt}{dx/dt}$, generalizing $\\\\frac{dy}{dx}$.",
        hint: "Same curves, different coordinate descriptions."
      },
      {
        front: "How are Taylor polynomials connected to derivatives at a point?",
        back: "The Taylor polynomial centered at $a$ uses the function's derivatives there: $f(a)+f'(a)(x-a)+\\\\frac{f''(a)}{2!}(x-a)^2+\\\\cdots$. Each coefficient is $\\\\frac{f^{(n)}(a)}{n!}$, so a series encodes all derivative information at $a$.",
        hint: "Coefficients are derivatives over factorials."
      },
      {
        front: "Worked connection: given $g(x)=\\\\int_2^x f(t)\\\\,dt$ with $f$ continuous, where does $g$ have a local max?",
        back: "Since $g'(x)=f(x)$ by the FTC, local maxima of $g$ occur where $f$ changes from positive to negative. Find $x$-values where $f$ crosses zero going downward.",
        hint: "Critical points of $g$ are zeros of $f$."
      },
      {
        front: "How is L'Hopital's Rule connected to indeterminate forms across topics?",
        back: "For limits of the form $\\\\frac{0}{0}$ or $\\\\frac{\\\\infty}{\\\\infty}$, $\\\\lim\\\\frac{f}{g}=\\\\lim\\\\frac{f'}{g'}$ when the latter exists. It links derivatives to limit evaluation and recurs in improper integrals, series term limits, and rate comparisons.",
        hint: "Differentiate top and bottom for indeterminate ratios."
      }
    ]
  },
  {
    slug: "improper-integrals-calcbc",
    cards: [
      {
        front: "What makes an integral 'improper,' and what are the two types?",
        back: "An integral is improper if (1) a limit of integration is infinite, e.g., $\\\\int_1^\\\\infty$, or (2) the integrand is unbounded (has a vertical asymptote/discontinuity) on the interval. Both are evaluated as limits.",
        hint: "Infinite bound or infinite integrand."
      },
      {
        front: "How do you evaluate $\\\\int_a^\\\\infty f(x)\\\\,dx$ correctly?",
        back: "Replace $\\\\infty$ with $b$, integrate to get $F(b)-F(a)$, then take $\\\\lim_{b\\\\to\\\\infty}$. If the limit is a finite number the integral converges to that value; otherwise it diverges.",
        hint: "Rewrite as a limit of a proper integral."
      },
      {
        front: "What does it mean for an improper integral to converge versus diverge?",
        back: "It converges if the defining limit exists and is finite; it diverges if the limit is infinite or does not exist. Convergence means the (possibly infinite) region has finite area.",
        hint: "Finite limit = converge."
      },
      {
        front: "State the p-test for $\\\\int_1^\\\\infty \\\\frac{1}{x^p}\\\\,dx$.",
        back: "It converges if $p>1$ and diverges if $p\\\\le 1$. For example, $\\\\int_1^\\\\infty \\\\frac{1}{x^2}\\\\,dx=1$ converges, but $\\\\int_1^\\\\infty \\\\frac{1}{x}\\\\,dx$ diverges.",
        hint: "Converges only when $p>1$ (over $[1,\\\\infty)$)."
      },
      {
        front: "State the p-test for $\\\\int_0^1 \\\\frac{1}{x^p}\\\\,dx$ (note this is opposite the $\\\\infty$ case).",
        back: "Over $[0,1]$ it converges if $p<1$ and diverges if $p\\\\ge 1$. The asymptote is at $x=0$, so smaller exponents tame the singularity.",
        hint: "Near $0$ it is the reverse of the $\\\\infty$ rule."
      },
      {
        front: "How do you handle $\\\\int_{-\\\\infty}^{\\\\infty} f(x)\\\\,dx$?",
        back: "Split it at any finite point $c$: $\\\\int_{-\\\\infty}^c f + \\\\int_c^\\\\infty f$, evaluate each as its own limit, and require BOTH to converge. If either diverges, the whole integral diverges.",
        hint: "Split into two independent improper integrals."
      },
      {
        front: "What is the common trap with $\\\\int_{-1}^{1}\\\\frac{1}{x^2}\\\\,dx$?",
        back: "The integrand blows up at $x=0$ inside the interval, so it is improper there. You must split at $0$ and take limits; ignoring the discontinuity and computing $[-1/x]$ gives a wrong (negative) finite answer. It actually diverges.",
        hint: "Interior discontinuity must be split out."
      },
      {
        front: "How does the comparison test for improper integrals work?",
        back: "If $0\\\\le f(x)\\\\le g(x)$ and $\\\\int g$ converges, then $\\\\int f$ converges. If $0\\\\le g(x)\\\\le f(x)$ and $\\\\int g$ diverges, then $\\\\int f$ diverges. Compare to a known integral (often a p-integral).",
        hint: "Smaller than a convergent = converges; bigger than a divergent = diverges."
      },
      {
        front: "Why is $\\\\int_0^\\\\infty e^{-x}\\\\,dx$ a useful known result?",
        back: "It converges: $\\\\int_0^\\\\infty e^{-x}\\\\,dx=\\\\lim_{b\\\\to\\\\infty}(-e^{-b}+e^0)=1$. Exponential decay integrals converge and serve as comparison benchmarks.",
        hint: "Equals 1; exponential decay converges."
      },
      {
        front: "Worked example: evaluate $\\\\int_1^\\\\infty \\\\frac{1}{x^2}\\\\,dx$.",
        back: "$\\\\int_1^b x^{-2}\\\\,dx=[-x^{-1}]_1^b=-\\\\frac{1}{b}+1$. As $b\\\\to\\\\infty$ this approaches $1$, so the integral converges to $1$.",
        hint: "Antiderivative $-1/x$, then limit."
      },
      {
        front: "Worked example: does $\\\\int_0^1 \\\\frac{1}{\\\\sqrt{x}}\\\\,dx$ converge?",
        back: "Here $p=\\\\frac{1}{2}<1$ over $[0,1]$, so it converges. Compute $\\\\lim_{a\\\\to 0^+}[2\\\\sqrt{x}]_a^1 = 2-0 = 2$.",
        hint: "Singularity at $0$, $p=1/2$."
      },
      {
        front: "When using L'Hopital inside an improper integral limit, what should you watch for?",
        back: "After integrating you often get forms like $\\\\frac{\\\\ln b}{b}$ or $b e^{-b}$ as $b\\\\to\\\\infty$. Apply L'Hopital (or known growth-rate facts) to resolve $\\\\frac{\\\\infty}{\\\\infty}$ or $\\\\infty\\\\cdot 0$ correctly; exponentials beat polynomials beat logarithms.",
        hint: "Resolve indeterminate limits at the end."
      },
      {
        front: "Can a region with infinite extent have finite area? Give the key intuition.",
        back: "Yes. If $f$ decays fast enough (like $1/x^2$ or $e^{-x}$), the accumulated area is finite even over an infinite interval. The decay rate, not the interval length, determines convergence.",
        hint: "Fast decay -> finite area."
      }
    ]
  },
  {
    slug: "logistic-models-calcbc",
    cards: [
      {
        front: "Write the logistic differential equation and name every variable.",
        back: "$\\\\frac{dP}{dt}=kP\\\\left(1-\\\\frac{P}{L}\\\\right)$, where $P$ is the population (amount), $t$ is time, $k>0$ is the growth-rate constant, and $L$ is the carrying capacity (the maximum sustainable value).",
        hint: "Rate proportional to $P$ and to remaining capacity."
      },
      {
        front: "What is the carrying capacity $L$ and what is $\\\\lim_{t\\\\to\\\\infty}P(t)$ for logistic growth?",
        back: "$L$ is the upper limit the population approaches. For $0<P_0<L$, $\\\\lim_{t\\\\to\\\\infty}P(t)=L$. Population growth slows as $P\\\\to L$ because the factor $(1-P/L)\\\\to 0$.",
        hint: "Population levels off at $L$."
      },
      {
        front: "Write the logistic solution (closed form) and name its constants.",
        back: "$P(t)=\\\\dfrac{L}{1+Ae^{-kt}}$, where $L$ is carrying capacity, $k$ the growth constant, and $A=\\\\frac{L-P_0}{P_0}$ is set by the initial condition $P(0)=P_0$.",
        hint: "S-shaped curve; $A$ from initial value."
      },
      {
        front: "At what population value is the logistic growth rate $\\\\frac{dP}{dt}$ largest?",
        back: "The growth rate is maximized when $P=\\\\frac{L}{2}$, exactly half the carrying capacity. This is also where the logistic curve has its inflection point (fastest growth).",
        hint: "Half of carrying capacity."
      },
      {
        front: "Why does $P=\\\\frac{L}{2}$ give the maximum growth rate? (justify with calculus)",
        back: "$\\\\frac{dP}{dt}=kP(1-P/L)$ is a downward parabola in $P$ with roots at $P=0$ and $P=L$; its vertex is at the midpoint $P=L/2$, giving the maximum rate $\\\\frac{kL}{4}$.",
        hint: "Parabola vertex midway between roots $0$ and $L$."
      },
      {
        front: "What are the equilibrium solutions of the logistic equation, and which is stable?",
        back: "Equilibria are $P=0$ and $P=L$ (where $\\\\frac{dP}{dt}=0$). $P=L$ is stable (populations near it move toward it); $P=0$ is unstable.",
        hint: "Set the rate to zero; $L$ is the attracting one."
      },
      {
        front: "How is the logistic model different from exponential growth $\\\\frac{dP}{dt}=kP$?",
        back: "Exponential growth is unbounded and accelerates forever. Logistic growth includes the limiting factor $(1-P/L)$, so growth slows and levels off at $L$. For small $P$, logistic behaves nearly exponentially.",
        hint: "Logistic adds a ceiling."
      },
      {
        front: "Given $\\\\frac{dP}{dt}=0.05P(1-\\\\frac{P}{800})$, identify $k$, $L$, and the max growth rate.",
        back: "$k=0.05$, carrying capacity $L=800$. Maximum growth rate is $\\\\frac{kL}{4}=\\\\frac{0.05\\\\cdot 800}{4}=10$ (per unit time), occurring when $P=400$.",
        hint: "Read off coefficients; max rate $=kL/4$ at $P=L/2$."
      },
      {
        front: "How do you find the maximum growth rate value for a logistic model?",
        back: "The maximum of $\\\\frac{dP}{dt}$ equals $\\\\frac{kL}{4}$, attained at $P=\\\\frac{L}{2}$. Plug $P=L/2$ into $kP(1-P/L)=k\\\\cdot\\\\frac{L}{2}\\\\cdot\\\\frac{1}{2}=\\\\frac{kL}{4}$.",
        hint: "$kL/4$."
      },
      {
        front: "If $P_0 > L$ (population starts above capacity), what does the logistic model predict?",
        back: "$\\\\frac{dP}{dt}=kP(1-P/L)<0$, so the population decreases and still approaches $L$ from above. The carrying capacity is approached from either side.",
        hint: "Above $L$, growth rate is negative -> decline to $L$."
      },
      {
        front: "What is a common FRQ trap when asked for the population's behavior 'as $t\\\\to\\\\infty$'?",
        back: "Many students try to solve the ODE fully. Instead, recognize the carrying capacity: as long as $P_0>0$, $\\\\lim_{t\\\\to\\\\infty}P=L$. You can answer from the structure of the equation without the explicit solution.",
        hint: "Answer is $L$; no full solve needed."
      },
      {
        front: "How do you identify the carrying capacity directly from a logistic equation written as $\\\\frac{dP}{dt}=aP-bP^2$?",
        back: "Factor: $\\\\frac{dP}{dt}=aP(1-\\\\frac{b}{a}P)$, so $k=a$ and $L=\\\\frac{a}{b}$. The carrying capacity is the ratio of the linear coefficient to the quadratic coefficient.",
        hint: "$L=a/b$ after factoring."
      },
      {
        front: "Worked: a logistic model has $L=1000$ and $P(0)=100$. Find the constant $A$ in $P(t)=\\\\frac{L}{1+Ae^{-kt}}$.",
        back: "$A=\\\\frac{L-P_0}{P_0}=\\\\frac{1000-100}{100}=9$. So $P(t)=\\\\frac{1000}{1+9e^{-kt}}$.",
        hint: "$A=(L-P_0)/P_0$."
      }
    ]
  },
  {
    slug: "vector-valued-functions-calcbc",
    cards: [
      {
        front: "What is a vector-valued function, and how do you differentiate it?",
        back: "A vector-valued function is $\\\\vec{r}(t)=\\\\langle x(t),y(t)\\\\rangle$ describing a particle's position. You differentiate component-wise: $\\\\vec{r}\\\\,'(t)=\\\\langle x'(t),y'(t)\\\\rangle$, which is the velocity vector.",
        hint: "Differentiate each component separately."
      },
      {
        front: "Given position $\\\\vec{r}(t)=\\\\langle x(t),y(t)\\\\rangle$, what are velocity, acceleration, and speed?",
        back: "Velocity $\\\\vec{v}(t)=\\\\langle x'(t),y'(t)\\\\rangle$; acceleration $\\\\vec{a}(t)=\\\\langle x''(t),y''(t)\\\\rangle$; speed $=|\\\\vec{v}(t)|=\\\\sqrt{(x')^2+(y')^2}$ (a scalar).",
        hint: "Speed is the magnitude of velocity."
      },
      {
        front: "How do you find the slope $\\\\frac{dy}{dx}$ of the path of a vector-valued function?",
        back: "$\\\\frac{dy}{dx}=\\\\frac{dy/dt}{dx/dt}=\\\\frac{y'(t)}{x'(t)}$, provided $x'(t)\\\\ne 0$. This is the tangent-line slope of the curve traced out.",
        hint: "Divide the $y$-rate by the $x$-rate."
      },
      {
        front: "Write the formula for the total distance traveled by a particle from $t=a$ to $t=b$.",
        back: "Distance $=\\\\int_a^b |\\\\vec{v}(t)|\\\\,dt=\\\\int_a^b \\\\sqrt{(x'(t))^2+(y'(t))^2}\\\\,dt$. This is arc length of the path.",
        hint: "Integrate speed over time."
      },
      {
        front: "How do you find a particle's position at time $t$ given velocity and an initial position?",
        back: "Integrate each velocity component and add the initial position: $x(t)=x(t_0)+\\\\int_{t_0}^t x'(s)\\\\,ds$ and similarly for $y$. Equivalently, $\\\\vec{r}(t)=\\\\vec{r}(t_0)+\\\\int_{t_0}^t \\\\vec{v}(s)\\\\,ds$.",
        hint: "Antidifferentiate velocity, use the initial condition."
      },
      {
        front: "What is the difference between displacement and total distance for a vector function?",
        back: "Displacement is the vector $\\\\int_a^b \\\\vec{v}(t)\\\\,dt=\\\\langle \\\\int x'\\\\,dt, \\\\int y'\\\\,dt\\\\rangle$ (change in position). Total distance is the scalar $\\\\int_a^b |\\\\vec{v}(t)|\\\\,dt$ (path length), and is generally larger.",
        hint: "Displacement is a vector; distance is a scalar arc length."
      },
      {
        front: "How do you find the magnitude of acceleration at a given time?",
        back: "$|\\\\vec{a}(t)|=\\\\sqrt{(x''(t))^2+(y''(t))^2}$. Plug in the time value after computing both second derivatives.",
        hint: "Magnitude formula on the second derivatives."
      },
      {
        front: "When is a particle moving in the rightward direction? Upward direction?",
        back: "Moving right when $x'(t)>0$ (rightward when the $x$-component of velocity is positive); moving up when $y'(t)>0$. At rest momentarily when $\\\\vec{v}(t)=\\\\langle 0,0\\\\rangle$.",
        hint: "Sign of each velocity component."
      },
      {
        front: "Worked: $\\\\vec{r}(t)=\\\\langle t^2, \\\\sin t\\\\rangle$. Find the velocity and speed at $t=0$.",
        back: "$\\\\vec{v}(t)=\\\\langle 2t,\\\\cos t\\\\rangle$, so $\\\\vec{v}(0)=\\\\langle 0,1\\\\rangle$. Speed $=\\\\sqrt{0^2+1^2}=1$.",
        hint: "Differentiate components, then magnitude."
      },
      {
        front: "How do you find when a particle is at rest (motionless) for a vector function?",
        back: "Set both velocity components to zero simultaneously: solve $x'(t)=0$ AND $y'(t)=0$ for the same $t$. The particle is at rest only where both hold.",
        hint: "Both components zero at the same time."
      },
      {
        front: "A common trap: students compute $\\\\int_a^b \\\\sqrt{(x')^2+(y')^2}\\\\,dt$ for displacement. Why is that wrong?",
        back: "That integral gives total distance (arc length), not displacement. Displacement uses the signed component integrals $\\\\langle \\\\int x'\\\\,dt,\\\\int y'\\\\,dt\\\\rangle$; the square-root-of-squares is always the distance.",
        hint: "Speed integral = distance, not displacement."
      },
      {
        front: "How is a vector-valued function related to a parametric curve?",
        back: "They are the same idea: $\\\\vec{r}(t)=\\\\langle x(t),y(t)\\\\rangle$ traces the parametric curve $(x(t),y(t))$. All parametric formulas (slope, speed, arc length) carry over directly.",
        hint: "Vector form is parametric in disguise."
      },
      {
        front: "How do you find the second derivative $\\\\frac{d^2y}{dx^2}$ for a vector/parametric path?",
        back: "Let $\\\\frac{dy}{dx}=\\\\frac{y'(t)}{x'(t)}$. Then $\\\\frac{d^2y}{dx^2}=\\\\frac{\\\\frac{d}{dt}\\\\left(\\\\frac{dy}{dx}\\\\right)}{x'(t)}$ — differentiate the slope with respect to $t$, then divide by $x'(t)$ again, not by $x''$.",
        hint: "Differentiate $dy/dx$ w.r.t. $t$, divide by $dx/dt$."
      }
    ]
  },
  {
    slug: "euler-method-advanced-calcbc",
    cards: [
      {
        front: "What is Euler's method used for, and what is its core formula?",
        back: "It numerically approximates the solution of a differential equation $\\\\frac{dy}{dx}=f(x,y)$ with a given initial point. Update rule: $y_{n+1}=y_n + f(x_n,y_n)\\\\cdot \\\\Delta x$, with $x_{n+1}=x_n+\\\\Delta x$.",
        hint: "New $y$ = old $y$ + slope times step."
      },
      {
        front: "In the Euler update $y_{n+1}=y_n+f(x_n,y_n)\\\\Delta x$, name each symbol.",
        back: "$y_n$ is the current approximate $y$-value, $f(x_n,y_n)=\\\\frac{dy}{dx}$ is the slope at the current point, $\\\\Delta x$ (step size $h$) is the horizontal step, and $y_{n+1}$ is the next approximation.",
        hint: "Slope at current point times step size."
      },
      {
        front: "Worked Euler step: $\\\\frac{dy}{dx}=x+y$, $y(0)=1$, $\\\\Delta x=0.5$. Find $y$ at $x=0.5$.",
        back: "Slope at $(0,1)$ is $0+1=1$. $y_1=1+(1)(0.5)=1.5$. So the approximation at $x=0.5$ is $1.5$.",
        hint: "$y_{new}=1+1\\\\cdot 0.5$."
      },
      {
        front: "Continue: from $(0.5,1.5)$ with $\\\\frac{dy}{dx}=x+y$, $\\\\Delta x=0.5$, find $y$ at $x=1$.",
        back: "Slope at $(0.5,1.5)$ is $0.5+1.5=2$. $y_2=1.5+(2)(0.5)=2.5$. So $y(1)\\\\approx 2.5$.",
        hint: "Recompute slope at the new point each step."
      },
      {
        front: "Does Euler's method usually overestimate or underestimate the true solution, and why?",
        back: "It depends on concavity. If the true solution is concave up ($y''>0$), tangent-line steps lie below the curve, so Euler underestimates. If concave down ($y''<0$), Euler overestimates.",
        hint: "Concave up -> underestimate; concave down -> overestimate."
      },
      {
        front: "How does step size $\\\\Delta x$ affect Euler's method accuracy?",
        back: "Smaller step sizes give more accurate approximations (error roughly proportional to $\\\\Delta x$) but require more steps. Larger steps are faster but accumulate more error.",
        hint: "Smaller step = more accurate, more work."
      },
      {
        front: "Why does Euler's method accumulate error over multiple steps?",
        back: "Each step uses the slope only at the starting point of that step, ignoring how the slope changes across the interval. Errors compound because each new step starts from an already-approximate point.",
        hint: "Tangent slope is only correct at the step's start."
      },
      {
        front: "How is Euler's method connected to a tangent-line (local linear) approximation?",
        back: "Each Euler step is a tangent-line approximation: $y_{n+1}\\\\approx y_n+y'(x_n)\\\\Delta x$ is just $L(x)=y_n+f(x_n,y_n)(x-x_n)$ evaluated at $x_n+\\\\Delta x$. Euler chains many local linearizations.",
        hint: "Linearization repeated step by step."
      },
      {
        front: "What is a common arithmetic trap when doing Euler's method by hand?",
        back: "Forgetting to recompute the slope $f(x_n,y_n)$ at each new point, or using the new $y$ but the old $x$ (or vice versa). Always update BOTH $x$ and $y$ before computing the next slope.",
        hint: "Recompute slope at the updated point each step."
      },
      {
        front: "If asked to approximate $y$ at $x=2$ from $x=0$ using two steps, what is $\\\\Delta x$?",
        back: "Step size $\\\\Delta x=\\\\frac{2-0}{2}=1$. Use $x=0\\\\to 1\\\\to 2$ with the Euler update at each step.",
        hint: "Total interval divided by number of steps."
      },
      {
        front: "Worked: $\\\\frac{dy}{dx}=2x$, $y(1)=3$, one step to $x=1.5$. Find $y(1.5)$ and compare to exact.",
        back: "Slope at $(1,3)$ is $2(1)=2$; $y\\\\approx 3+2(0.5)=4$. Exact solution is $y=x^2+2$, so $y(1.5)=4.25$. Euler underestimates because $y=x^2+2$ is concave up.",
        hint: "$4$ vs exact $4.25$; concave up -> under."
      },
      {
        front: "How would you set up an Euler approximation with unequal interpretation when given a table of $\\\\frac{dy}{dx}$ values?",
        back: "Read the slope at the current $(x_n,y_n)$ from the differential equation (not a table of $y$), multiply by the given $\\\\Delta x$, and add to $y_n$. Each step requires evaluating $f$ at the most recent approximate point.",
        hint: "Plug current point into the given $dy/dx$."
      },
      {
        front: "Why might an FRQ pair Euler's method with a slope field question?",
        back: "Both visualize/approximate solutions to $\\\\frac{dy}{dx}=f(x,y)$. The slope field shows tangent directions; Euler's method numerically 'walks' along those tangent directions step by step from the initial condition.",
        hint: "Euler follows the slope field's arrows."
      }
    ]
  },
  {
    slug: "advanced-integration-calcbc",
    cards: [
      {
        front: "State the integration by parts formula and name each piece.",
        back: "$\\\\int u\\\\,dv = uv - \\\\int v\\\\,du$. Choose $u$ to differentiate and $dv$ to integrate; then $du=u'\\\\,dx$ and $v=\\\\int dv$. Use it for products like $x e^x$, $x\\\\ln x$, $x\\\\sin x$.",
        hint: "$uv$ minus the integral of $v\\\\,du$."
      },
      {
        front: "What is the LIATE rule for choosing $u$ in integration by parts?",
        back: "Pick $u$ as the function that comes first in LIATE: Logarithmic, Inverse trig, Algebraic (polynomial), Trigonometric, Exponential. The remaining factor becomes $dv$.",
        hint: "Order of preference for $u$: L-I-A-T-E."
      },
      {
        front: "Worked: $\\\\int x e^x\\\\,dx$ by parts.",
        back: "Let $u=x$ ($du=dx$), $dv=e^x\\\\,dx$ ($v=e^x$). Then $\\\\int x e^x\\\\,dx = x e^x - \\\\int e^x\\\\,dx = x e^x - e^x + C = e^x(x-1)+C$.",
        hint: "$u=x$, $dv=e^x dx$."
      },
      {
        front: "How do you integrate a rational function using partial fractions (proper, distinct linear factors)?",
        back: "Factor the denominator, then write the fraction as a sum like $\\\\frac{A}{x-a}+\\\\frac{B}{x-b}$. Solve for constants $A,B$, then integrate each term to get logarithms: $A\\\\ln|x-a|+B\\\\ln|x-b|+C$.",
        hint: "Decompose into simple fractions, integrate term by term."
      },
      {
        front: "Worked partial fractions: decompose $\\\\frac{1}{(x-1)(x+1)}$.",
        back: "$\\\\frac{1}{(x-1)(x+1)}=\\\\frac{A}{x-1}+\\\\frac{B}{x+1}$. Solving gives $A=\\\\frac{1}{2}$, $B=-\\\\frac{1}{2}$. So the integral is $\\\\frac{1}{2}\\\\ln|x-1|-\\\\frac{1}{2}\\\\ln|x+1|+C$.",
        hint: "Cover-up: $A=1/2$, $B=-1/2$."
      },
      {
        front: "What must be true before applying partial fractions, and what if it is not?",
        back: "The rational function must be proper (numerator degree < denominator degree). If it is improper, first do polynomial long division, then apply partial fractions to the remainder.",
        hint: "Divide first if top degree >= bottom degree."
      },
      {
        front: "How do you integrate $\\\\int \\\\frac{1}{x^2+a^2}\\\\,dx$?",
        back: "$\\\\int \\\\frac{1}{x^2+a^2}\\\\,dx=\\\\frac{1}{a}\\\\arctan\\\\left(\\\\frac{x}{a}\\\\right)+C$. Recognize an irreducible quadratic denominator (no real roots) as an arctangent form.",
        hint: "Sum of squares -> arctangent."
      },
      {
        front: "When does integration by parts need to be applied twice or use the 'tabular' shortcut?",
        back: "Apply it repeatedly when the new integral is still a product (e.g., $\\\\int x^2 e^x\\\\,dx$ needs two applications). Tabular integration speeds this up when one factor (like $x^n$) differentiates to zero after several steps.",
        hint: "Repeat for higher-degree polynomial times $e^x/\\\\sin/\\\\cos$."
      },
      {
        front: "How do you handle $\\\\int e^x \\\\sin x\\\\,dx$ (the 'cycling' integral)?",
        back: "Apply integration by parts twice; the original integral reappears. Solve algebraically: $\\\\int e^x\\\\sin x\\\\,dx=\\\\frac{e^x(\\\\sin x-\\\\cos x)}{2}+C$. Set $I=\\\\ldots+(\\\\pm I)$ and solve for $I$.",
        hint: "It loops back; solve for the integral algebraically."
      },
      {
        front: "What substitution clears $\\\\int \\\\frac{1}{x\\\\ln x}\\\\,dx$, and what is the answer?",
        back: "Let $u=\\\\ln x$, $du=\\\\frac{1}{x}\\\\,dx$. Then $\\\\int \\\\frac{1}{u}\\\\,du=\\\\ln|u|+C=\\\\ln|\\\\ln x|+C$.",
        hint: "Inner-function substitution $u=\\\\ln x$."
      },
      {
        front: "What is a common trap with integration by parts on the AB-only set vs BC?",
        back: "Integration by parts and partial fractions are BC-only techniques. A common trap is choosing $u$ and $dv$ poorly so the new integral is harder than the original. Use LIATE; if it gets worse, swap the choices.",
        hint: "Bad $u$/$dv$ choice makes it harder."
      },
      {
        front: "How do you integrate when the denominator has a repeated linear factor like $\\\\frac{1}{(x-2)^2}$ in partial fractions?",
        back: "Include a term for each power: $\\\\frac{A}{x-2}+\\\\frac{B}{(x-2)^2}$. Each repeated factor of multiplicity $m$ contributes $m$ terms with denominators of increasing power.",
        hint: "Repeated factor -> one term per power."
      },
      {
        front: "Worked: $\\\\int \\\\frac{2x}{x^2+1}\\\\,dx$. What technique and answer?",
        back: "Recognize the numerator as the derivative of the denominator; use $u=x^2+1$, $du=2x\\\\,dx$. Result: $\\\\ln(x^2+1)+C$. (No partial fractions needed.)",
        hint: "Numerator = derivative of denominator -> log."
      }
    ]
  },
  {
    slug: "series-applications-calcbc",
    cards: [
      {
        front: "Write the Maclaurin series for $e^x$, $\\\\sin x$, and $\\\\cos x$.",
        back: "$e^x=\\\\sum_{n=0}^\\\\infty \\\\frac{x^n}{n!}$; $\\\\sin x=\\\\sum_{n=0}^\\\\infty \\\\frac{(-1)^n x^{2n+1}}{(2n+1)!}$; $\\\\cos x=\\\\sum_{n=0}^\\\\infty \\\\frac{(-1)^n x^{2n}}{(2n)!}$. All converge for all real $x$.",
        hint: "Memorize these three; all have infinite radius."
      },
      {
        front: "Write the geometric series and its sum, including the convergence condition.",
        back: "$\\\\sum_{n=0}^\\\\infty ar^n=\\\\frac{a}{1-r}$ for $|r|<1$ (diverges otherwise). Here $a$ is the first term and $r$ is the common ratio. The function form: $\\\\frac{1}{1-x}=\\\\sum_{n=0}^\\\\infty x^n$ for $|x|<1$.",
        hint: "Sum $= a/(1-r)$, only when $|r|<1$."
      },
      {
        front: "How do you build a new Taylor series from a known one (substitution)?",
        back: "Substitute into a known series. Example: from $\\\\frac{1}{1-x}=\\\\sum x^n$, replace $x$ with $-x^2$ to get $\\\\frac{1}{1+x^2}=\\\\sum (-1)^n x^{2n}$ for $|x|<1$.",
        hint: "Plug a new expression into a known series."
      },
      {
        front: "How do you find a Taylor series for an antiderivative or derivative?",
        back: "Differentiate or integrate the known series term-by-term within its interval of convergence. Example: integrating $\\\\frac{1}{1+x^2}=\\\\sum(-1)^n x^{2n}$ gives $\\\\arctan x=\\\\sum \\\\frac{(-1)^n x^{2n+1}}{2n+1}$.",
        hint: "Term-by-term differentiate/integrate the series."
      },
      {
        front: "State the Lagrange error bound for a Taylor polynomial.",
        back: "$|R_n(x)|\\\\le \\\\frac{M}{(n+1)!}|x-a|^{n+1}$, where $M$ is an upper bound for $|f^{(n+1)}|$ on the interval between $a$ and $x$, $n$ is the polynomial degree, and $a$ is the center. It bounds the truncation error.",
        hint: "Next-derivative bound times distance term over factorial."
      },
      {
        front: "State the alternating series error bound and when it applies.",
        back: "For a convergent alternating series, the truncation error is at most the absolute value of the first omitted term: $|S-S_n|\\\\le |a_{n+1}|$. It applies when terms decrease in magnitude to $0$.",
        hint: "Error <= first dropped term's size."
      },
      {
        front: "How do you use a Taylor series to estimate a value like $\\\\sin(0.1)$?",
        back: "Plug $0.1$ into the series: $\\\\sin(0.1)\\\\approx 0.1 - \\\\frac{0.1^3}{3!}+\\\\cdots$. Use as many terms as needed; the alternating series bound tells you the error from stopping.",
        hint: "Substitute the value and truncate."
      },
      {
        front: "How do you find a limit like $\\\\lim_{x\\\\to 0}\\\\frac{\\\\sin x - x}{x^3}$ using series?",
        back: "Replace $\\\\sin x$ by its series: $\\\\sin x - x = -\\\\frac{x^3}{6}+\\\\frac{x^5}{120}-\\\\cdots$. Divide by $x^3$ to get $-\\\\frac{1}{6}+\\\\frac{x^2}{120}-\\\\cdots$, so the limit is $-\\\\frac{1}{6}$.",
        hint: "Substitute series, cancel powers, take $x\\\\to 0$."
      },
      {
        front: "What is the radius and interval of convergence, and how do you find them?",
        back: "The radius $R$ is the distance from the center within which a power series converges; use the ratio test ($\\\\lim|a_{n+1}/a_n|<1$) to find it. Then test the endpoints separately to get the full interval of convergence.",
        hint: "Ratio test for $R$; check endpoints by hand."
      },
      {
        front: "Worked: find the interval of convergence of $\\\\sum_{n=1}^\\\\infty \\\\frac{x^n}{n}$.",
        back: "Ratio test gives $|x|<1$, so $R=1$. At $x=1$: $\\\\sum \\\\frac{1}{n}$ diverges (harmonic). At $x=-1$: $\\\\sum \\\\frac{(-1)^n}{n}$ converges (alternating). Interval: $[-1,1)$.",
        hint: "Endpoints differ: include $-1$, exclude $1$."
      },
      {
        front: "How do you approximate a definite integral of a non-elementary function using series?",
        back: "Expand the integrand as a series, integrate term-by-term, then evaluate. Example: $\\\\int_0^1 e^{-x^2}\\\\,dx=\\\\int_0^1(1-x^2+\\\\frac{x^4}{2}-\\\\cdots)\\\\,dx=1-\\\\frac{1}{3}+\\\\frac{1}{10}-\\\\cdots$.",
        hint: "Series the integrand, integrate each term."
      },
      {
        front: "What is a common trap when writing the 'general term' of a Taylor series on an FRQ?",
        back: "Getting the sign pattern $(-1)^n$ vs $(-1)^{n+1}$ wrong, or mismatching the exponent and factorial index. Always check by listing the first 3-4 terms and confirming the formula reproduces them exactly.",
        hint: "Verify the general term against the first few terms."
      },
      {
        front: "Worked: write the first three nonzero terms of the Maclaurin series for $\\\\frac{1}{1+x}$.",
        back: "Substitute $-x$ into $\\\\frac{1}{1-x}=\\\\sum x^n$: $\\\\frac{1}{1+x}=1-x+x^2-x^3+\\\\cdots$. First three nonzero terms: $1-x+x^2$, valid for $|x|<1$.",
        hint: "Geometric with ratio $-x$."
      }
    ]
  }
];
