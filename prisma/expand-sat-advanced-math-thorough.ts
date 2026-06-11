import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Advanced Math with thorough content...\n')

  // ============================================================
  // TOPIC 1: Quadratic Equations
  // ============================================================
  const quadratics = await prisma.topic.findUnique({
    where: { slug: 'sat-quadratic-equations' }
  })

  if (quadratics) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: quadratics.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Solve: $x^2 - 9 = 0$',
          solution: `**Method: Difference of Squares**

$$x^2 - 9 = 0$$
$$x^2 = 9$$
$$x = \\pm 3$$

**Or by factoring:** $(x-3)(x+3) = 0$, so $x = 3$ or $x = -3$.

**Answer:** $x = 3$ or $x = -3$`
        },
        {
          topicId: quadratics.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Solve by factoring: $x^2 + 5x - 14 = 0$',
          solution: `**Step 1:** Find two numbers that multiply to $-14$ and add to $+5$.
$7 \\times (-2) = -14$ and $7 + (-2) = 5$ ✓

**Step 2:** Factor:
$$(x + 7)(x - 2) = 0$$

**Step 3:** Apply zero product property:
$$x + 7 = 0 \\implies x = -7$$
$$x - 2 = 0 \\implies x = 2$$

**Check:** $(-7)^2 + 5(-7) - 14 = 49 - 35 - 14 = 0$ ✓
$(2)^2 + 5(2) - 14 = 4 + 10 - 14 = 0$ ✓

**Answer:** $x = -7$ or $x = 2$`
        },
        {
          topicId: quadratics.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'The graph of $y = (x-3)^2 - 4$ is a parabola. What are its vertex, axis of symmetry, and $x$-intercepts?',
          solution: `**This is in vertex form:** $y = (x-h)^2 + k$ where vertex = $(h, k)$

**Vertex:** $(3, -4)$

**Axis of symmetry:** $x = 3$ (vertical line through the vertex)

**$x$-intercepts:** Set $y = 0$:
$$(x-3)^2 - 4 = 0$$
$$(x-3)^2 = 4$$
$$x - 3 = \\pm 2$$
$$x = 5 \\text{ or } x = 1$$

**Answer:** Vertex $(3, -4)$, axis $x = 3$, $x$-intercepts at $(1, 0)$ and $(5, 0)$.

Since the coefficient of $(x-3)^2$ is positive ($+1$), the parabola opens **upward**.`
        },
        {
          topicId: quadratics.id,
          order: 13,
          difficulty: 'HARD',
          question: 'For the equation $2x^2 - 5x + k = 0$ to have exactly one real solution, what must be the value of $k$?',
          solution: `**Key concept:** A quadratic has exactly one real solution when the discriminant equals zero.

**Discriminant formula:** $b^2 - 4ac$

Here: $a = 2$, $b = -5$, $c = k$

$$b^2 - 4ac = 0$$
$$(-5)^2 - 4(2)(k) = 0$$
$$25 - 8k = 0$$
$$k = \\frac{25}{8}$$

**Check:** $2x^2 - 5x + \\frac{25}{8} = 0$
$\\Delta = 25 - 4(2)(\\frac{25}{8}) = 25 - 25 = 0$ ✓ (one solution)

**Answer:** $k = \\frac{25}{8}$

**Discriminant summary:**
- $\\Delta > 0$: two real solutions
- $\\Delta = 0$: one real solution (double root)
- $\\Delta < 0$: no real solutions`
        },
        {
          topicId: quadratics.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'If the sum of the solutions of $3x^2 - 12x + c = 0$ is twice the product of the solutions, find $c$.',
          solution: `**Step 1:** Use Vieta\'s formulas for $ax^2 + bx + c = 0$:
- Sum of solutions: $x_1 + x_2 = -\\frac{b}{a} = -\\frac{-12}{3} = 4$
- Product of solutions: $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{c}{3}$

**Step 2:** Apply the condition: sum = twice the product
$$4 = 2 \\cdot \\frac{c}{3}$$
$$4 = \\frac{2c}{3}$$
$$12 = 2c$$
$$c = 6$$

**Check:** $3x^2 - 12x + 6 = 0 \\implies x^2 - 4x + 2 = 0$
$x = \\frac{4 \\pm \\sqrt{16-8}}{2} = \\frac{4 \\pm 2\\sqrt{2}}{2} = 2 \\pm \\sqrt{2}$
Sum = $4$ ✓, Product = $(2+\\sqrt{2})(2-\\sqrt{2}) = 4-2 = 2$ ✓
Is $4 = 2(2)$? Yes ✓

**Answer:** $c = 6$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: quadratics.id,
          front: 'What are the four methods for solving a quadratic equation?',
          back: '1. **Factoring** — fastest when the quadratic factors nicely\n2. **Taking square roots** — when there is no linear ($x$) term\n3. **Completing the square** — works always, gives vertex form\n4. **Quadratic formula** — $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ — always works',
          hint: 'There are four main approaches'
        },
        {
          topicId: quadratics.id,
          front: 'What does the discriminant $b^2 - 4ac$ tell you?',
          back: '**Positive:** 2 real solutions (graph crosses x-axis twice)\n**Zero:** 1 real solution (graph touches x-axis once)\n**Negative:** No real solutions (graph doesn\'t cross x-axis)',
          hint: 'It determines the nature and number of solutions'
        },
        {
          topicId: quadratics.id,
          front: 'In vertex form $y = a(x-h)^2 + k$, what is the vertex?',
          back: 'The vertex is $(h, k)$. If $a > 0$, the parabola opens up and the vertex is a minimum. If $a < 0$, it opens down and the vertex is a maximum.',
          hint: 'The values inside the parentheses give the vertex coordinates'
        },
        {
          topicId: quadratics.id,
          front: 'What are Vieta\'s formulas for $ax^2 + bx + c = 0$?',
          back: 'Sum of roots: $x_1 + x_2 = -\\frac{b}{a}$\nProduct of roots: $x_1 \\cdot x_2 = \\frac{c}{a}$\nUseful for SAT questions about the sum or product of solutions without actually solving.',
          hint: 'They relate the coefficients to the roots'
        },
        {
          topicId: quadratics.id,
          front: 'How do you convert from standard form $y = ax^2 + bx + c$ to vertex form?',
          back: 'Complete the square or use the vertex formula: $h = -\\frac{b}{2a}$ and $k = f(h)$. Example: $y = x^2 - 6x + 5$ → $h = 3$, $k = 9 - 18 + 5 = -4$ → $y = (x-3)^2 - 4$.',
          hint: 'Use the formula for the x-coordinate of the vertex'
        },
        {
          topicId: quadratics.id,
          front: 'What is the zero product property?',
          back: 'If $ab = 0$, then $a = 0$ or $b = 0$ (or both). This is why factoring works: if $(x-3)(x+2) = 0$, then either $x-3 = 0$ or $x+2 = 0$.',
          hint: 'The product of two things is zero only if at least one of them is zero'
        },
        {
          topicId: quadratics.id,
          front: 'What is the axis of symmetry for $y = ax^2 + bx + c$?',
          back: '$x = -\\frac{b}{2a}$. This is a vertical line that passes through the vertex. The parabola is symmetric about this line.',
          hint: 'The vertex formula gives the x-coordinate'
        }
      ]
    })

    console.log('✓ sat-quadratic-equations expanded')
  }

  // ============================================================
  // TOPIC 2: Exponents and Radicals
  // ============================================================
  const exponents = await prisma.topic.findUnique({
    where: { slug: 'sat-exponents-radicals' }
  })

  if (exponents) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: exponents.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Simplify: $\\frac{x^5}{x^2}$',
          solution: `**Rule:** $\\frac{x^a}{x^b} = x^{a-b}$

$$\\frac{x^5}{x^2} = x^{5-2} = x^3$$

**Answer:** $x^3$`
        },
        {
          topicId: exponents.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Simplify: $(2x^3)^4$',
          solution: `**Rule:** $(ab)^n = a^n \\cdot b^n$ and $(x^a)^b = x^{ab}$

$$(2x^3)^4 = 2^4 \\cdot (x^3)^4 = 16 \\cdot x^{12} = 16x^{12}$$

**Answer:** $16x^{12}$

**Common mistake:** Forgetting to raise the coefficient (2) to the power as well.`
        },
        {
          topicId: exponents.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Rewrite $\\sqrt[3]{x^5}$ using rational exponents.',
          solution: `**Rule:** $\\sqrt[n]{x^m} = x^{m/n}$

$$\\sqrt[3]{x^5} = x^{5/3}$$

**Check:** $x^{5/3} = x^{1 + 2/3} = x \\cdot x^{2/3} = x\\sqrt[3]{x^2}$

**Answer:** $x^{5/3}$

**SAT Tip:** The SAT frequently asks you to convert between radical and exponential notation.`
        },
        {
          topicId: exponents.id,
          order: 13,
          difficulty: 'HARD',
          question: 'If $27^x = 9^{x+1}$, what is the value of $x$?',
          solution: `**Strategy:** Express both sides as powers of 3.

$27 = 3^3$, so $27^x = (3^3)^x = 3^{3x}$
$9 = 3^2$, so $9^{x+1} = (3^2)^{x+1} = 3^{2(x+1)} = 3^{2x+2}$

**Set the exponents equal** (same base):
$$3x = 2x + 2$$
$$x = 2$$

**Check:** $27^2 = 729$ and $9^3 = 729$ ✓

**Answer:** $x = 2$

**Strategy:** When you have exponential equations, try to make the bases the same, then set exponents equal.`
        },
        {
          topicId: exponents.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Simplify: $\\frac{(3x^2y^{-1})^3}{9x^{-1}y^4}$',
          solution: `**Step 1:** Simplify the numerator:
$$(3x^2y^{-1})^3 = 3^3 \\cdot x^{2 \\cdot 3} \\cdot y^{-1 \\cdot 3} = 27x^6y^{-3}$$

**Step 2:** Write the full fraction:
$$\\frac{27x^6y^{-3}}{9x^{-1}y^4}$$

**Step 3:** Simplify coefficients: $\\frac{27}{9} = 3$

**Step 4:** Apply quotient rule for each variable:
$$x^{6-(-1)} = x^7$$
$$y^{-3-4} = y^{-7} = \\frac{1}{y^7}$$

**Step 5:** Combine:
$$3 \\cdot x^7 \\cdot y^{-7} = \\frac{3x^7}{y^7}$$

**Answer:** $\\frac{3x^7}{y^7}$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: exponents.id,
          front: 'What are the five key exponent rules?',
          back: '1. $x^a \\cdot x^b = x^{a+b}$ (product)\n2. $\\frac{x^a}{x^b} = x^{a-b}$ (quotient)\n3. $(x^a)^b = x^{ab}$ (power)\n4. $x^0 = 1$ (zero exponent)\n5. $x^{-a} = \\frac{1}{x^a}$ (negative exponent)',
          hint: 'Product, Quotient, Power, Zero, Negative'
        },
        {
          topicId: exponents.id,
          front: 'How do you convert between radical and exponential notation?',
          back: '$\\sqrt[n]{x^m} = x^{m/n}$. The index of the radical becomes the denominator of the fraction exponent. Example: $\\sqrt{x} = x^{1/2}$ and $\\sqrt[3]{x^2} = x^{2/3}$.',
          hint: 'The root goes in the denominator of the exponent'
        },
        {
          topicId: exponents.id,
          front: 'What does $x^{-3}$ equal?',
          back: '$x^{-3} = \\frac{1}{x^3}$. A negative exponent means "take the reciprocal." It does NOT make the answer negative.',
          hint: 'Negative exponent = flip to denominator'
        },
        {
          topicId: exponents.id,
          front: 'How do you solve $4^x = 8$ using same-base method?',
          back: 'Rewrite both as powers of 2: $4^x = (2^2)^x = 2^{2x}$ and $8 = 2^3$. Then $2^{2x} = 2^3$, so $2x = 3$, giving $x = \\frac{3}{2}$.',
          hint: 'Find a common base, then set exponents equal'
        },
        {
          topicId: exponents.id,
          front: 'How do you rationalize the denominator of $\\frac{5}{\\sqrt{3}}$?',
          back: 'Multiply numerator and denominator by $\\sqrt{3}$: $\\frac{5}{\\sqrt{3}} \\cdot \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$.',
          hint: 'Multiply by the radical over itself'
        },
        {
          topicId: exponents.id,
          front: 'What is $\\sqrt{a} \\cdot \\sqrt{b}$ equal to?',
          back: '$\\sqrt{a} \\cdot \\sqrt{b} = \\sqrt{ab}$. You can multiply under the same radical. Similarly, $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$.',
          hint: 'Radicals can be combined through multiplication'
        },
        {
          topicId: exponents.id,
          front: 'What is the common mistake with $(x + y)^2$?',
          back: '$(x + y)^2 \\neq x^2 + y^2$! The correct expansion is $(x + y)^2 = x^2 + 2xy + y^2$. Don\'t forget the middle term $2xy$.',
          hint: 'FOIL or use the perfect square trinomial pattern'
        }
      ]
    })

    console.log('✓ sat-exponents-radicals expanded')
  }

  // ============================================================
  // TOPIC 3: Exponential Functions
  // ============================================================
  const exponential = await prisma.topic.findUnique({
    where: { slug: 'sat-exponential-functions' }
  })

  if (exponential) {
    await prisma.topic.update({
      where: { id: exponential.id },
      data: {
        textContent: `# Exponential Functions and Equations on the SAT

## What Is an Exponential Function?

An exponential function has the form:
$$f(x) = a \\cdot b^x$$

Where:
- $a$ = initial value (when $x = 0$)
- $b$ = base (growth/decay factor)
- $x$ = typically time or number of periods

---

## Growth vs. Decay

| Condition | Type | Example |
|---|---|---|
| $b > 1$ | **Exponential Growth** | Population doubling |
| $0 < b < 1$ | **Exponential Decay** | Radioactive decay |
| $b = 1$ | No change (constant) | — |

### Growth Rate and Decay Rate

If value increases by $r\\%$ per period:
$$f(x) = a(1 + r)^x$$

If value decreases by $r\\%$ per period:
$$f(x) = a(1 - r)^x$$

**Example:** A car worth \\$25,000 depreciates by 15% per year:
$$V(t) = 25000(1 - 0.15)^t = 25000(0.85)^t$$

---

## Identifying Exponential Functions

| Feature | Linear | Exponential |
|---|---|---|
| Pattern | Add a constant | Multiply by a constant |
| Equation | $y = mx + b$ | $y = a \\cdot b^x$ |
| Rate of change | Constant | Changes (accelerating) |
| Graph | Straight line | Curved |

### From a Table

| $x$ | $y$ (Linear) | $y$ (Exponential) |
|---|---|---|
| 0 | 5 | 5 |
| 1 | 8 | 10 |
| 2 | 11 | 20 |
| 3 | 14 | 40 |

Linear: $+3$ each time. Exponential: $\\times 2$ each time.

---

## Compound Interest

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

| Variable | Meaning |
|---|---|
| $A$ | Final amount |
| $P$ | Principal (initial) |
| $r$ | Annual interest rate (decimal) |
| $n$ | Times compounded per year |
| $t$ | Time in years |

**Special case — continuous compounding:**
$$A = Pe^{rt}$$

---

## Half-Life and Doubling Time

**Half-life:** $A = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$ where $h$ is the half-life

**Doubling time:** $A = A_0 \\cdot 2^{t/d}$ where $d$ is the doubling time

---

## SAT Question Types

### Type 1: Interpret the Function
"In $f(t) = 500(1.03)^t$, what does the 500 represent? What does 1.03 represent?"
- 500 = initial value
- 1.03 = 3% growth per period ($b = 1 + r = 1 + 0.03$)

### Type 2: Growth/Decay Identification
"Does $y = 200(0.85)^x$ represent growth or decay, and by what percent?"
- Decay (because $0.85 < 1$)
- Rate = $1 - 0.85 = 0.15 = 15\\%$ decay per period

### Type 3: Evaluate at a Specific Time
"If $P(t) = 1000(1.05)^t$, what is $P(10)$?"
$P(10) = 1000(1.05)^{10} \\approx 1628.89$

### Type 4: Compound Interest
"\\$5,000 at 4% annual interest compounded quarterly for 3 years"
$A = 5000(1 + 0.04/4)^{4 \\cdot 3} = 5000(1.01)^{12}$

---

## Common SAT Mistakes

1. **Confusing growth rate with growth factor:** 5% growth has factor $1.05$, not $0.05$
2. **Forgetting the initial value:** $f(0) = a$, the initial value is the coefficient
3. **Using the wrong formula for compounding:** Check what $n$ is (monthly = 12, quarterly = 4, etc.)
4. **Confusing linear and exponential** — check if the table adds or multiplies
5. **Not recognizing half-life pattern:** Multiply by $\\frac{1}{2}$ each half-life period
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: exponential.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A bacteria colony starts with 100 bacteria and doubles every hour. Write a function for the population $P$ after $t$ hours, and find the population after 5 hours.',
          solution: `**Step 1:** Identify the components:
- Initial value: $a = 100$
- Growth factor: $b = 2$ (doubling)

**Function:** $P(t) = 100 \\cdot 2^t$

**Step 2:** Find $P(5)$:
$$P(5) = 100 \\cdot 2^5 = 100 \\cdot 32 = 3{,}200$$

**Answer:** $P(t) = 100 \\cdot 2^t$; after 5 hours there are 3,200 bacteria.`
        },
        {
          topicId: exponential.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'The value of a car is modeled by $V(t) = 30000(0.82)^t$, where $t$ is in years. What is the annual depreciation rate, and what will the car be worth after 3 years?',
          solution: `**Step 1:** Identify the decay rate.
The base is $0.82$, so:
$$r = 1 - 0.82 = 0.18 = 18\\%$$

The car depreciates by **18% per year**.

**Step 2:** Find $V(3)$:
$$V(3) = 30000(0.82)^3 = 30000(0.551368) \\approx \\$16{,}541$$

**Answer:** 18% annual depreciation; worth approximately \\$16,541 after 3 years.`
        },
        {
          topicId: exponential.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Which function represents a quantity that increases by 7% each month?\n\nA) $f(x) = 100(7)^x$\nB) $f(x) = 100(1.7)^x$\nC) $f(x) = 100(0.07)^x$\nD) $f(x) = 100(1.07)^x$',
          solution: `**Key:** "Increases by 7% each month" means growth rate $r = 0.07$.

The growth factor is $b = 1 + r = 1 + 0.07 = 1.07$.

**A)** $b = 7$ → this is 600% growth, not 7% ✗
**B)** $b = 1.7$ → this is 70% growth, not 7% ✗
**C)** $b = 0.07$ → this is decay (and extreme decay at that) ✗
**D)** $b = 1.07$ → this is 7% growth ✓

**Answer:** D) $f(x) = 100(1.07)^x$

**Common mistake:** Using $0.07$ or $7$ as the base instead of $1.07$.`
        },
        {
          topicId: exponential.id,
          order: 13,
          difficulty: 'HARD',
          question: '\\$2,000 is invested at 6% annual interest, compounded monthly. What is the value after 5 years?',
          solution: `**Formula:** $A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$

**Values:**
- $P = 2000$ (principal)
- $r = 0.06$ (6% as decimal)
- $n = 12$ (monthly compounding)
- $t = 5$ (years)

**Step 1:** Substitute:
$$A = 2000\\left(1 + \\frac{0.06}{12}\\right)^{12 \\times 5}$$
$$A = 2000(1 + 0.005)^{60}$$
$$A = 2000(1.005)^{60}$$

**Step 2:** Calculate:
$$(1.005)^{60} \\approx 1.34885$$
$$A \\approx 2000 \\times 1.34885 \\approx \\$2{,}697.70$$

**Answer:** Approximately \\$2,697.70

**SAT Tip:** Make sure to identify $n$ correctly: monthly = 12, quarterly = 4, semiannually = 2, annually = 1.`
        },
        {
          topicId: exponential.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A radioactive substance has a half-life of 8 days. If you start with 500 grams, how much remains after 20 days?',
          solution: `**Half-life formula:** $A = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$

**Values:**
- $A_0 = 500$ grams
- $h = 8$ days (half-life)
- $t = 20$ days

**Substitute:**
$$A = 500\\left(\\frac{1}{2}\\right)^{20/8} = 500\\left(\\frac{1}{2}\\right)^{2.5}$$

**Calculate:**
$$\\left(\\frac{1}{2}\\right)^{2.5} = \\left(\\frac{1}{2}\\right)^2 \\cdot \\left(\\frac{1}{2}\\right)^{0.5} = \\frac{1}{4} \\cdot \\frac{1}{\\sqrt{2}} = \\frac{1}{4\\sqrt{2}} \\approx 0.17678$$

$$A \\approx 500 \\times 0.17678 \\approx 88.4 \\text{ grams}$$

**Answer:** Approximately 88.4 grams

**Quick check:** After 8 days: 250g. After 16 days: 125g. After 24 days: 62.5g. So after 20 days (between 16 and 24), the answer should be between 62.5 and 125. ✓`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: exponential.id,
          front: 'In $f(x) = a \\cdot b^x$, what do $a$ and $b$ represent?',
          back: '$a$ = initial value (the value when $x = 0$). $b$ = growth/decay factor. If $b > 1$, growth. If $0 < b < 1$, decay.',
          hint: 'Plug in $x = 0$ to find $a$'
        },
        {
          topicId: exponential.id,
          front: 'How do you tell from a table whether data is linear or exponential?',
          back: '**Linear:** consecutive $y$-values have a constant DIFFERENCE. **Exponential:** consecutive $y$-values have a constant RATIO. Compute differences vs. ratios to decide.',
          hint: 'Adding vs. multiplying'
        },
        {
          topicId: exponential.id,
          front: 'What is the compound interest formula?',
          back: '$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$ where $P$ = principal, $r$ = annual rate, $n$ = compounding periods per year, $t$ = years. For continuous: $A = Pe^{rt}$.',
          hint: 'PRNT — Principal, Rate, Number of periods, Time'
        },
        {
          topicId: exponential.id,
          front: 'If something decreases by 20% per year, what is the decay factor?',
          back: 'Decay factor = $1 - 0.20 = 0.80$. The function is $f(t) = a(0.80)^t$. After each year, 80% of the previous amount remains.',
          hint: 'Subtract the rate from 1'
        },
        {
          topicId: exponential.id,
          front: 'What is the half-life formula?',
          back: '$A = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$ where $A_0$ = initial amount, $t$ = time elapsed, $h$ = half-life period. After each half-life, the amount is halved.',
          hint: 'Multiply by 1/2 for each half-life period'
        },
        {
          topicId: exponential.id,
          front: 'How do exponential graphs differ from linear graphs?',
          back: 'Exponential graphs are CURVED (not straight). Growth curves start slow then rise steeply. Decay curves drop quickly then level off. They have a horizontal asymptote (approach but never reach zero for decay).',
          hint: 'Think about the shape of the curve'
        },
        {
          topicId: exponential.id,
          front: 'What is the difference between "increases by 5%" and "is 5% of"?',
          back: '"Increases by 5%" → multiply by $1.05$ (add 5% to the current amount). "Is 5% of" → multiply by $0.05$ (take 5% of the amount). These are very different!',
          hint: 'One adds to the original, the other takes a fraction'
        }
      ]
    })

    console.log('✓ sat-exponential-functions expanded')
  }

  // ============================================================
  // TOPIC 4: Polynomials and Factoring
  // ============================================================
  const polynomials = await prisma.topic.findUnique({
    where: { slug: 'sat-polynomials-factoring' }
  })

  if (polynomials) {
    await prisma.topic.update({
      where: { id: polynomials.id },
      data: {
        textContent: `# Polynomials and Factoring on the SAT

## What Is a Polynomial?

A **polynomial** is an expression with variables and coefficients using only addition, subtraction, multiplication, and non-negative integer exponents.

$$P(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$$

- **Degree:** The highest power of the variable
- **Leading coefficient:** The coefficient of the highest-degree term
- **Constant term:** The term with no variable ($a_0$)

---

## Types of Polynomials

| Degree | Name | Example |
|---|---|---|
| 0 | Constant | $5$ |
| 1 | Linear | $3x + 2$ |
| 2 | Quadratic | $x^2 - 4x + 1$ |
| 3 | Cubic | $2x^3 + x - 7$ |
| 4 | Quartic | $x^4 - 3x^2 + 1$ |

---

## Factoring Techniques

### 1. Greatest Common Factor (GCF)
$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

### 2. Difference of Squares
$$a^2 - b^2 = (a + b)(a - b)$$
Example: $x^2 - 25 = (x+5)(x-5)$

### 3. Perfect Square Trinomials
$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$
Example: $x^2 + 10x + 25 = (x+5)^2$

### 4. Trinomial Factoring ($x^2 + bx + c$)
Find two numbers that multiply to $c$ and add to $b$.
Example: $x^2 + 7x + 12 = (x+3)(x+4)$

### 5. Trinomial Factoring ($ax^2 + bx + c$, $a \\neq 1$)
Use the AC method or trial and error.
Example: $2x^2 + 7x + 3 = (2x+1)(x+3)$

### 6. Sum and Difference of Cubes
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

### 7. Factor by Grouping
$$x^3 + 3x^2 + 2x + 6 = x^2(x+3) + 2(x+3) = (x^2+2)(x+3)$$

---

## Polynomial Operations

### Addition/Subtraction
Combine like terms (same variable, same exponent).

### Multiplication
Use FOIL for binomials, or distribute each term.
$$(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$$

### Division
**Polynomial long division** or **synthetic division** (for dividing by $x - c$).

---

## Remainder Theorem

When polynomial $P(x)$ is divided by $(x - c)$, the remainder is $P(c)$.

**Example:** If $P(x) = x^3 - 2x + 1$, the remainder when divided by $(x - 3)$ is:
$$P(3) = 27 - 6 + 1 = 22$$

---

## Factor Theorem

$(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$.

**Example:** Is $(x - 2)$ a factor of $x^3 - 4x^2 + x + 6$?
$P(2) = 8 - 16 + 2 + 6 = 0$ → Yes!

---

## SAT Question Types

### Type 1: Factor a Polynomial
"Factor $x^2 - 5x - 6$" → $(x-6)(x+1)$

### Type 2: Find Zeros from Factored Form
"If $f(x) = (x-2)(x+3)(x-5)$, what are the zeros?" → $x = 2, -3, 5$

### Type 3: Polynomial Division
"What is the remainder when $x^3 + 2x - 5$ is divided by $x - 1$?"
$P(1) = 1 + 2 - 5 = -2$ (use the Remainder Theorem!)

### Type 4: Equivalent Expressions
"Which expression is equivalent to $(x+2)^3$?"
$= x^3 + 3(x^2)(2) + 3(x)(4) + 8 = x^3 + 6x^2 + 12x + 8$

---

## Common SAT Mistakes

1. **Sign errors when factoring** — double-check by FOILing your answer
2. **Forgetting the GCF** before trying other methods
3. **Confusing $(x+3)^2$ with $x^2 + 9$** — it's $x^2 + 6x + 9$!
4. **Not using the Remainder Theorem** — much faster than long division
5. **Dropping terms** when subtracting polynomials — distribute the negative sign
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: polynomials.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Factor completely: $3x^2 - 12$',
          solution: `**Step 1:** Factor out the GCF first:
$$3x^2 - 12 = 3(x^2 - 4)$$

**Step 2:** Recognize the difference of squares:
$$3(x^2 - 4) = 3(x + 2)(x - 2)$$

**Answer:** $3(x+2)(x-2)$

**Key:** Always look for a GCF first!`
        },
        {
          topicId: polynomials.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Factor: $2x^2 + 7x + 3$',
          solution: `**AC Method:** $a \\cdot c = 2 \\cdot 3 = 6$. Find two numbers that multiply to 6 and add to 7: **6 and 1**.

**Rewrite middle term:**
$$2x^2 + 6x + x + 3$$

**Factor by grouping:**
$$2x(x + 3) + 1(x + 3)$$
$$(2x + 1)(x + 3)$$

**Check:** $(2x+1)(x+3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$ ✓

**Answer:** $(2x+1)(x+3)$`
        },
        {
          topicId: polynomials.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'What is the remainder when $P(x) = 2x^3 - x^2 + 3x - 7$ is divided by $(x - 2)$?',
          solution: `**Use the Remainder Theorem:** The remainder when $P(x)$ is divided by $(x - c)$ is $P(c)$.

Here $c = 2$:
$$P(2) = 2(2)^3 - (2)^2 + 3(2) - 7$$
$$= 2(8) - 4 + 6 - 7$$
$$= 16 - 4 + 6 - 7$$
$$= 11$$

**Answer:** The remainder is 11.

**SAT Tip:** The Remainder Theorem saves enormous time compared to polynomial long division!`
        },
        {
          topicId: polynomials.id,
          order: 13,
          difficulty: 'HARD',
          question: 'If $f(x) = x^3 - 6x^2 + 11x - 6$ and $f(1) = 0$, factor $f(x)$ completely.',
          solution: `**Step 1:** Since $f(1) = 0$, by the Factor Theorem, $(x - 1)$ is a factor.

**Step 2:** Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ using synthetic division:

$1 | 1 \\quad -6 \\quad 11 \\quad -6$
$\\quad | \\quad 1 \\quad -5 \\quad 6$
$\\quad 1 \\quad -5 \\quad 6 \\quad 0$

Quotient: $x^2 - 5x + 6$

**Step 3:** Factor the quadratic:
$x^2 - 5x + 6 = (x - 2)(x - 3)$

**Answer:** $f(x) = (x-1)(x-2)(x-3)$

The zeros are $x = 1, 2, 3$.`
        },
        {
          topicId: polynomials.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Which polynomial has zeros at $x = -1$, $x = 2$, and $x = 4$, and passes through the point $(0, -16)$?',
          solution: `**Step 1:** Write the general form using the zeros:
$$f(x) = a(x + 1)(x - 2)(x - 4)$$

**Step 2:** Use the point $(0, -16)$ to find $a$:
$$f(0) = a(0 + 1)(0 - 2)(0 - 4) = a(1)(-2)(-4) = 8a$$
$$-16 = 8a$$
$$a = -2$$

**Step 3:** Write the final polynomial:
$$f(x) = -2(x+1)(x-2)(x-4)$$

**Check:** $f(0) = -2(1)(-2)(-4) = -2(8) = -16$ ✓

**Answer:** $f(x) = -2(x+1)(x-2)(x-4)$

Expanded: $f(x) = -2x^3 + 10x^2 - 4x - 16$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: polynomials.id,
          front: 'What is the Remainder Theorem?',
          back: 'When polynomial $P(x)$ is divided by $(x - c)$, the remainder is $P(c)$. Just plug in $c$ to find the remainder — no long division needed!',
          hint: 'Evaluate the polynomial at the value inside the divisor'
        },
        {
          topicId: polynomials.id,
          front: 'What is the Factor Theorem?',
          back: '$(x - c)$ is a factor of $P(x)$ if and only if $P(c) = 0$. In other words, $c$ is a zero of the polynomial.',
          hint: 'It connects factors to zeros'
        },
        {
          topicId: polynomials.id,
          front: 'What is the difference of squares formula?',
          back: '$a^2 - b^2 = (a+b)(a-b)$. Example: $x^2 - 49 = (x+7)(x-7)$. Note: $a^2 + b^2$ does NOT factor over the reals.',
          hint: 'The sum of two squares cannot be factored the same way'
        },
        {
          topicId: polynomials.id,
          front: 'What should you always do FIRST when factoring?',
          back: 'Look for a Greatest Common Factor (GCF). Factor it out before trying any other technique. Example: $4x^2 - 16 = 4(x^2 - 4) = 4(x+2)(x-2)$.',
          hint: 'Check if all terms share a common factor'
        },
        {
          topicId: polynomials.id,
          front: 'If a polynomial has degree $n$, how many zeros can it have at most?',
          back: 'At most $n$ zeros. A quadratic (degree 2) has at most 2 zeros. A cubic (degree 3) has at most 3 zeros. This is the Fundamental Theorem of Algebra.',
          hint: 'The degree tells you the maximum number of solutions'
        },
        {
          topicId: polynomials.id,
          front: 'What is the sum of cubes formula?',
          back: '$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$. Memory aid: "Same sign, Opposite sign, Always Positive" (SOAP). Example: $x^3 + 8 = (x+2)(x^2 - 2x + 4)$.',
          hint: 'SOAP: Same, Opposite, Always Positive'
        },
        {
          topicId: polynomials.id,
          front: 'How do you multiply $(x + a)^3$?',
          back: '$(x+a)^3 = x^3 + 3x^2a + 3xa^2 + a^3$. Use the binomial theorem or multiply step by step. The coefficients follow Pascal\'s Triangle: 1, 3, 3, 1.',
          hint: 'Use Pascal\'s Triangle: 1, 3, 3, 1'
        }
      ]
    })

    console.log('✓ sat-polynomials-factoring expanded')
  }

  // ============================================================
  // TOPIC 5: Polynomial and Rational Expressions
  // ============================================================
  const polyRational = await prisma.topic.findUnique({
    where: { slug: 'sat-polynomial-rational-expressions' }
  })

  if (polyRational) {
    await prisma.topic.update({
      where: { id: polyRational.id },
      data: {
        textContent: `# Polynomial and Rational Expressions on the SAT

## Rational Expressions

A **rational expression** is a fraction where the numerator and/or denominator are polynomials:
$$\\frac{P(x)}{Q(x)} \\quad \\text{where } Q(x) \\neq 0$$

---

## Simplifying Rational Expressions

**Factor and cancel common factors.**

$$\\frac{x^2 - 4}{x^2 + 4x + 4} = \\frac{(x-2)(x+2)}{(x+2)^2} = \\frac{x-2}{x+2}$$

> **Critical:** You can only cancel FACTORS (things being multiplied), never terms (things being added).

**WRONG:** $\\frac{x + 3}{x + 5} \\neq \\frac{3}{5}$ ← Cannot cancel the $x$'s!

---

## Operations with Rational Expressions

### Multiplication
Factor, cancel, then multiply:
$$\\frac{x^2-1}{x+3} \\cdot \\frac{x+3}{x-1} = \\frac{(x+1)(x-1)}{x+3} \\cdot \\frac{x+3}{x-1} = x+1$$

### Division
Flip the second fraction and multiply:
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$

### Addition/Subtraction
Find a common denominator first:
$$\\frac{1}{x} + \\frac{2}{x+1} = \\frac{x+1}{x(x+1)} + \\frac{2x}{x(x+1)} = \\frac{3x+1}{x(x+1)}$$

---

## Domain Restrictions

A rational expression is undefined when the **denominator equals zero**.

$$\\frac{x+3}{x^2-9} = \\frac{x+3}{(x+3)(x-3)}$$

Domain restrictions: $x \\neq 3$ and $x \\neq -3$

Even after simplifying to $\\frac{1}{x-3}$, the restriction $x \\neq -3$ still applies!

---

## Solving Rational Equations

**Strategy:** Multiply both sides by the LCD to clear fractions.

$$\\frac{3}{x} + \\frac{2}{x+1} = 1$$

LCD = $x(x+1)$:
$$3(x+1) + 2x = x(x+1)$$
$$3x + 3 + 2x = x^2 + x$$
$$5x + 3 = x^2 + x$$
$$0 = x^2 - 4x - 3$$

> **Always check for extraneous solutions!** Plug your answers back in to make sure the denominators aren't zero.

---

## SAT Question Types

### Type 1: Simplify a Rational Expression
Factor and cancel.

### Type 2: Find the Domain
Identify values that make the denominator zero.

### Type 3: Add/Subtract Rational Expressions
Find common denominators and combine.

### Type 4: Solve a Rational Equation
Clear fractions, solve, and check for extraneous solutions.

---

## Common SAT Mistakes

1. **Canceling terms instead of factors:** $\\frac{x+3}{x+5}$ cannot be simplified!
2. **Forgetting domain restrictions** after simplifying
3. **Not checking for extraneous solutions** — solutions that make a denominator zero must be rejected
4. **Incorrect LCD** — make sure to include all unique factors
5. **Sign errors** when distributing negatives in subtraction of rational expressions
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: polyRational.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Simplify: $\\frac{x^2 - 9}{x + 3}$',
          solution: `**Step 1:** Factor the numerator (difference of squares):
$$\\frac{(x+3)(x-3)}{x+3}$$

**Step 2:** Cancel the common factor $(x+3)$:
$$= x - 3 \\quad (x \\neq -3)$$

**Answer:** $x - 3$, provided $x \\neq -3$`
        },
        {
          topicId: polyRational.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Add: $\\frac{2}{x-1} + \\frac{3}{x+2}$',
          solution: `**Step 1:** Find the LCD: $(x-1)(x+2)$

**Step 2:** Rewrite each fraction with the LCD:
$$\\frac{2(x+2)}{(x-1)(x+2)} + \\frac{3(x-1)}{(x-1)(x+2)}$$

**Step 3:** Add the numerators:
$$\\frac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \\frac{2x+4+3x-3}{(x-1)(x+2)} = \\frac{5x+1}{(x-1)(x+2)}$$

**Answer:** $\\frac{5x+1}{(x-1)(x+2)}$`
        },
        {
          topicId: polyRational.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'For what values of $x$ is $\\frac{x^2 + 2x - 15}{x^2 - x - 6}$ undefined?',
          solution: `**Step 1:** The expression is undefined when the denominator = 0.

$$x^2 - x - 6 = 0$$

**Step 2:** Factor:
$$(x-3)(x+2) = 0$$

**Step 3:** Solve:
$$x = 3 \\quad \\text{or} \\quad x = -2$$

**Answer:** The expression is undefined at $x = 3$ and $x = -2$.

**Note:** Even though the full expression simplifies (the numerator factors to $(x+5)(x-3)$, and $(x-3)$ cancels), $x = 3$ is still a restriction because it was in the original denominator.`
        },
        {
          topicId: polyRational.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Solve: $\\frac{4}{x-2} = \\frac{x}{x-2} + 2$',
          solution: `**Step 1:** Note the domain restriction: $x \\neq 2$

**Step 2:** Multiply both sides by $(x-2)$:
$$4 = x + 2(x-2)$$
$$4 = x + 2x - 4$$
$$4 = 3x - 4$$
$$8 = 3x$$
$$x = \\frac{8}{3}$$

**Step 3:** Check: $x = \\frac{8}{3} \\neq 2$, so it's valid. ✓

**Verify:** $\\frac{4}{\\frac{8}{3}-2} = \\frac{4}{\\frac{2}{3}} = 6$ and $\\frac{\\frac{8}{3}}{\\frac{2}{3}} + 2 = 4 + 2 = 6$ ✓

**Answer:** $x = \\frac{8}{3}$`
        },
        {
          topicId: polyRational.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Solve: $\\frac{2}{x+1} + \\frac{1}{x-1} = \\frac{4}{x^2-1}$',
          solution: `**Step 1:** Note that $x^2 - 1 = (x+1)(x-1)$, so LCD = $(x+1)(x-1)$

Domain restrictions: $x \\neq 1$ and $x \\neq -1$

**Step 2:** Multiply every term by $(x+1)(x-1)$:
$$2(x-1) + 1(x+1) = 4$$

**Step 3:** Distribute and solve:
$$2x - 2 + x + 1 = 4$$
$$3x - 1 = 4$$
$$3x = 5$$
$$x = \\frac{5}{3}$$

**Step 4:** Check: $x = \\frac{5}{3} \\neq \\pm 1$, so it's valid. ✓

**Answer:** $x = \\frac{5}{3}$

**SAT Tip:** Always factor the denominators first to find the LCD and identify domain restrictions.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: polyRational.id,
          front: 'Can you cancel terms (things being added) in a rational expression?',
          back: 'NO! You can only cancel FACTORS (things being multiplied). $\\frac{x+3}{x+5}$ cannot be simplified. But $\\frac{(x+3)(x-1)}{(x+3)(x+2)} = \\frac{x-1}{x+2}$ because $(x+3)$ is a common FACTOR.',
          hint: 'Factor first, then cancel'
        },
        {
          topicId: polyRational.id,
          front: 'What is an extraneous solution?',
          back: 'A solution obtained algebraically that does not satisfy the original equation — usually because it makes a denominator zero. Always check your solutions in rational equations!',
          hint: 'It makes a denominator equal to zero'
        },
        {
          topicId: polyRational.id,
          front: 'How do you add two fractions with different denominators?',
          back: 'Find the LCD, convert each fraction to have the LCD as its denominator, then add the numerators. $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$',
          hint: 'Common denominator, then combine numerators'
        },
        {
          topicId: polyRational.id,
          front: 'How do you divide rational expressions?',
          back: 'Multiply by the reciprocal (flip the second fraction): $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$. Then factor and cancel.',
          hint: 'Keep, Change, Flip'
        },
        {
          topicId: polyRational.id,
          front: 'When is a rational expression equal to zero?',
          back: 'When the NUMERATOR equals zero (and the denominator does NOT equal zero at that point). $\\frac{P(x)}{Q(x)} = 0$ when $P(x) = 0$ and $Q(x) \\neq 0$.',
          hint: 'A fraction is zero when its top is zero'
        },
        {
          topicId: polyRational.id,
          front: 'After simplifying $\\frac{(x-3)(x+2)}{(x-3)(x+5)}$ to $\\frac{x+2}{x+5}$, is $x = 3$ in the domain?',
          back: 'No! Even though $(x-3)$ was canceled, $x = 3$ still makes the ORIGINAL expression undefined. Domain restrictions from the original expression always apply.',
          hint: 'The original denominator determines the domain'
        },
        {
          topicId: polyRational.id,
          front: 'How do you solve a rational equation?',
          back: '1. Factor all denominators. 2. Find the LCD. 3. Multiply every term by the LCD. 4. Solve the resulting polynomial equation. 5. Check for extraneous solutions.',
          hint: 'Clear the fractions, solve, then verify'
        }
      ]
    })

    console.log('✓ sat-polynomial-rational-expressions expanded')
  }

  // ============================================================
  // TOPIC 6: Nonlinear Equations and Functions
  // ============================================================
  const nonlinear = await prisma.topic.findUnique({
    where: { slug: 'sat-nonlinear-equations-functions' }
  })

  if (nonlinear) {
    await prisma.topic.update({
      where: { id: nonlinear.id },
      data: {
        textContent: `# Nonlinear Equations and Functions on the SAT

## Beyond Linear: Types of Nonlinear Functions

### Quadratic Functions
$$f(x) = ax^2 + bx + c$$
Graph: parabola. Covered in depth in the Quadratic Equations topic.

### Absolute Value Functions
$$f(x) = |ax + b| + c$$
Graph: V-shape. The vertex is at $(-b/a, c)$.

### Square Root Functions
$$f(x) = \\sqrt{ax + b}$$
Graph: Half-parabola (starts at a point, curves right).
Domain: $ax + b \\geq 0$

### Rational Functions
$$f(x) = \\frac{a}{x - h} + k$$
Graph: Hyperbola with asymptotes at $x = h$ and $y = k$.

---

## Solving Systems with Nonlinear Equations

Systems involving one linear and one nonlinear equation:

### Linear-Quadratic System
$$y = x + 2 \\quad \\text{and} \\quad y = x^2$$

Substitute: $x^2 = x + 2$
$$x^2 - x - 2 = 0$$
$$(x-2)(x+1) = 0$$
$$x = 2 \\text{ or } x = -1$$

Solutions: $(2, 4)$ and $(-1, 1)$

**Number of solutions:**
- The line can intersect the parabola at 0, 1, or 2 points
- 0 points: no solution
- 1 point: tangent line
- 2 points: two solutions

---

## Radical Equations

### Solving Equations with Square Roots

**Strategy:** Isolate the radical, then square both sides.

$$\\sqrt{2x + 3} = 5$$
$$2x + 3 = 25$$
$$2x = 22$$
$$x = 11$$

> **Always check!** Squaring can introduce extraneous solutions.

### Example with Extraneous Solution
$$\\sqrt{x + 5} = x - 1$$
$$x + 5 = (x-1)^2 = x^2 - 2x + 1$$
$$0 = x^2 - 3x - 4 = (x-4)(x+1)$$
$$x = 4 \\text{ or } x = -1$$

Check $x = 4$: $\\sqrt{9} = 3$ and $4 - 1 = 3$ ✓
Check $x = -1$: $\\sqrt{4} = 2$ and $-1 - 1 = -2$ ✗ (extraneous!)

---

## Absolute Value Equations

$$|ax + b| = c$$

If $c \\geq 0$: Two equations → $ax + b = c$ or $ax + b = -c$
If $c < 0$: No solution (absolute value can't be negative)

**Example:** $|2x - 3| = 7$
$2x - 3 = 7 \\implies x = 5$
$2x - 3 = -7 \\implies x = -2$

---

## Function Composition and Evaluation

For complex function problems:
1. Read carefully — what specific value or expression are they asking for?
2. Substitute step by step
3. Simplify completely

---

## SAT Question Types

### Type 1: Solve a Radical Equation
Isolate the radical, square both sides, check for extraneous solutions.

### Type 2: Linear-Quadratic System
Substitute and solve the resulting quadratic.

### Type 3: Number of Intersections
Use the discriminant of the resulting quadratic to determine 0, 1, or 2 intersections.

### Type 4: Absolute Value Equations
Split into two cases.

---

## Common SAT Mistakes

1. **Not checking for extraneous solutions** in radical equations
2. **Forgetting there are two cases** for absolute value
3. **Errors when squaring both sides** — expand $(x-1)^2$ carefully!
4. **Assuming a nonlinear system always has 2 solutions** — it could have 0 or 1
5. **Domain errors** — $\\sqrt{x}$ requires $x \\geq 0$
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: nonlinear.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Solve: $|x - 4| = 6$',
          solution: `**Two cases:**

**Case 1:** $x - 4 = 6 \\implies x = 10$

**Case 2:** $x - 4 = -6 \\implies x = -2$

**Check:** $|10 - 4| = |6| = 6$ ✓ and $|-2 - 4| = |-6| = 6$ ✓

**Answer:** $x = 10$ or $x = -2$`
        },
        {
          topicId: nonlinear.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Solve: $\\sqrt{3x + 1} = 4$',
          solution: `**Step 1:** Square both sides to eliminate the radical:
$$3x + 1 = 16$$

**Step 2:** Solve for $x$:
$$3x = 15$$
$$x = 5$$

**Step 3:** Check: $\\sqrt{3(5) + 1} = \\sqrt{16} = 4$ ✓

**Answer:** $x = 5$`
        },
        {
          topicId: nonlinear.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'How many solutions does the system $y = x^2 - 3$ and $y = 2x - 1$ have?',
          solution: `**Step 1:** Set equal:
$$x^2 - 3 = 2x - 1$$
$$x^2 - 2x - 2 = 0$$

**Step 2:** Use the discriminant: $b^2 - 4ac = (-2)^2 - 4(1)(-2) = 4 + 8 = 12$

Since $\\Delta = 12 > 0$, the quadratic has **two real solutions**, meaning the line intersects the parabola at **two points**.

**Answer:** 2 solutions

**Discriminant shortcut:**
- $\\Delta > 0$ → 2 intersections
- $\\Delta = 0$ → 1 intersection (tangent)
- $\\Delta < 0$ → 0 intersections`
        },
        {
          topicId: nonlinear.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Solve: $\\sqrt{x + 7} = x + 1$',
          solution: `**Step 1:** Square both sides:
$$x + 7 = (x+1)^2 = x^2 + 2x + 1$$

**Step 2:** Rearrange:
$$0 = x^2 + 2x + 1 - x - 7 = x^2 + x - 6$$

**Step 3:** Factor:
$$(x + 3)(x - 2) = 0$$
$$x = -3 \\text{ or } x = 2$$

**Step 4:** CHECK both (squaring can create extraneous solutions):

$x = -3$: $\\sqrt{-3 + 7} = \\sqrt{4} = 2$ and $-3 + 1 = -2$. Is $2 = -2$? **No!** ✗ Extraneous!

$x = 2$: $\\sqrt{2 + 7} = \\sqrt{9} = 3$ and $2 + 1 = 3$. Is $3 = 3$? **Yes!** ✓

**Answer:** $x = 2$ only

**Key lesson:** Always check solutions in radical equations!`
        },
        {
          topicId: nonlinear.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'For what value of $k$ does the line $y = 3x + k$ intersect the parabola $y = x^2 + 2$ at exactly one point?',
          solution: `**Step 1:** Set the equations equal:
$$x^2 + 2 = 3x + k$$
$$x^2 - 3x + (2 - k) = 0$$

**Step 2:** For exactly one intersection, the discriminant must equal zero:
$$b^2 - 4ac = 0$$
$$(-3)^2 - 4(1)(2 - k) = 0$$
$$9 - 8 + 4k = 0$$
$$1 + 4k = 0$$
$$k = -\\frac{1}{4}$$

**Step 3:** Verify: With $k = -\\frac{1}{4}$:
$x^2 - 3x + \\frac{9}{4} = 0 \\implies (x - \\frac{3}{2})^2 = 0 \\implies x = \\frac{3}{2}$

One solution ✓

**Answer:** $k = -\\frac{1}{4}$`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: nonlinear.id,
          front: 'When solving a radical equation, why must you check your solutions?',
          back: 'Squaring both sides can introduce extraneous solutions — values that satisfy the squared equation but NOT the original. Always plug solutions back into the ORIGINAL equation.',
          hint: 'Squaring is not a reversible operation'
        },
        {
          topicId: nonlinear.id,
          front: 'How do you solve an absolute value equation $|ax + b| = c$?',
          back: 'If $c \\geq 0$: Split into two cases. Case 1: $ax + b = c$. Case 2: $ax + b = -c$. If $c < 0$: NO solution (absolute value can\'t be negative).',
          hint: 'Two cases when c is non-negative'
        },
        {
          topicId: nonlinear.id,
          front: 'How many times can a line intersect a parabola?',
          back: '0, 1, or 2 times. Set the linear and quadratic equations equal, then check the discriminant. $\\Delta > 0$: 2 points. $\\Delta = 0$: 1 point (tangent). $\\Delta < 0$: 0 points.',
          hint: 'Use the discriminant of the resulting equation'
        },
        {
          topicId: nonlinear.id,
          front: 'What is the domain of $f(x) = \\sqrt{x - 3}$?',
          back: '$x \\geq 3$ (or $[3, \\infty)$). The expression under a square root must be non-negative: $x - 3 \\geq 0$, so $x \\geq 3$.',
          hint: 'The radicand must be ≥ 0'
        },
        {
          topicId: nonlinear.id,
          front: 'What does the graph of $y = |x|$ look like?',
          back: 'A V-shape with vertex at the origin. The left side has slope $-1$ and the right side has slope $+1$. The function equals $x$ when $x \\geq 0$ and $-x$ when $x < 0$.',
          hint: 'Think of a V opening upward'
        },
        {
          topicId: nonlinear.id,
          front: 'How do you solve a linear-quadratic system?',
          back: '1. Set the linear equation equal to the quadratic. 2. Rearrange to standard form. 3. Solve the quadratic (factor or use the formula). 4. Find the corresponding $y$-values.',
          hint: 'Substitute one equation into the other'
        },
        {
          topicId: nonlinear.id,
          front: 'Can $|x| = -3$ have any solution?',
          back: 'No! Absolute value is always non-negative ($\\geq 0$). It can never equal a negative number. So $|\\text{anything}| = \\text{negative}$ has no solution.',
          hint: 'Absolute value measures distance, which is never negative'
        }
      ]
    })

    console.log('✓ sat-nonlinear-equations-functions expanded')
  }

  console.log('\n✅ SAT Advanced Math expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
