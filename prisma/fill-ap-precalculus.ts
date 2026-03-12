import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('📚 Filling AP Precalculus empty categories...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'ap-precalculus' } })
  if (course === null) { console.log('Course not found'); return }

  // Find existing empty categories
  const cats = await prisma.category.findMany({ where: { courseId: course.id }, orderBy: { order: 'asc' } })

  const polyRat = cats.find(c => c.slug === 'polynomial-rational-functions')
  const expLog = cats.find(c => c.slug === 'exponential-logarithmic-functions')
  const paramVec = cats.find(c => c.slug === 'parameters-vectors-matrices')

  if (polyRat) {
    const topics = [
      { title: 'Polynomial Functions and End Behavior', slug: 'polynomial-functions-end-behavior-precalc', order: 0,
        description: 'Analyze polynomial functions, their zeros, multiplicity, and end behavior.',
        textContent: `# Polynomial Functions and End Behavior

## Polynomial Functions

$$f(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$$

## Rates of Change

### Average Rate of Change (AROC)
$$\\text{AROC} = \\frac{f(b) - f(a)}{b - a}$$

### Concavity from AROC
- If AROC is **increasing** → concave **up**
- If AROC is **decreasing** → concave **down**

## Zeros and Multiplicity

If $(x - c)^k$ is a factor of $f(x)$:
- **Odd** $k$: graph **crosses** x-axis at $x = c$
- **Even** $k$: graph **bounces** at $x = c$
- Higher $k$ → flatter near the zero

## End Behavior (Limit Notation)

$$\\lim_{x \\to \\infty} f(x) \\quad \\text{and} \\quad \\lim_{x \\to -\\infty} f(x)$$

Determined by the leading term $a_nx^n$:

| $n$ | $a_n > 0$ | $a_n < 0$ |
|-----|-----------|-----------|
| Even | $+\\infty, +\\infty$ | $-\\infty, -\\infty$ |
| Odd | $-\\infty, +\\infty$ | $+\\infty, -\\infty$ |

## Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a, b]$ and $d$ is between $f(a)$ and $f(b)$, then there exists $c \\in (a, b)$ with $f(c) = d$.

## Factoring Techniques

- **Rational Root Theorem**: Possible rational roots are $\\pm\\frac{p}{q}$
- **Descartes' Rule of Signs**: Count sign changes for positive/negative real zeros
- **Polynomial Long Division** and **Synthetic Division**

> **AP Precalculus Tip**: The College Board emphasizes limit notation for end behavior. Always write: $\\lim_{x \\to \\infty} f(x) = +\\infty$`
      },
      { title: 'Rational Functions and Asymptotes', slug: 'rational-functions-asymptotes-precalc', order: 1,
        description: 'Analyze rational functions including vertical, horizontal, and slant asymptotes.',
        textContent: `# Rational Functions and Asymptotes

## Rational Functions

$$f(x) = \\frac{p(x)}{q(x)}$$

## Vertical Asymptotes and Holes

Factor both numerator and denominator:
- **Hole**: Common factor cancels → point discontinuity
- **Vertical Asymptote (VA)**: Factor remains in denominator

$$f(x) = \\frac{(x-2)(x+1)}{(x-2)(x-3)}$$

Hole at $x = 2$; VA at $x = 3$

### Behavior Near VAs
$$\\lim_{x \\to 3^+} f(x) = +\\infty \\quad \\text{or} \\quad -\\infty$$
$$\\lim_{x \\to 3^-} f(x) = +\\infty \\quad \\text{or} \\quad -\\infty$$

## Horizontal Asymptotes (HA)

$$f(x) = \\frac{a_nx^n + \\cdots}{b_mx^m + \\cdots}$$

| Condition | HA |
|-----------|-----|
| $n < m$ | $y = 0$ |
| $n = m$ | $y = \\frac{a_n}{b_m}$ |
| $n > m$ | No HA |

$$\\lim_{x \\to \\pm\\infty} f(x) = \\text{HA value}$$

## Slant (Oblique) Asymptotes

When $n = m + 1$, perform polynomial division. The quotient is the slant asymptote.

## Zeros of Rational Functions

Set the **numerator** equal to zero (after canceling common factors):
$$\\frac{p(x)}{q(x)} = 0 \\iff p(x) = 0$$

## Solving Rational Inequalities

1. Find zeros and undefined values
2. Create a sign chart
3. Test intervals

## Partial Fractions

$$\\frac{2x + 5}{(x+1)(x+3)} = \\frac{A}{x+1} + \\frac{B}{x+3}$$

Solve for $A$ and $B$ by substituting convenient values.

> **AP Precalculus Tip**: Always use limit notation when describing asymptotic behavior. A function "approaches" an asymptote; it doesn't "equal" it.`
      },
      { title: 'Transformations of Functions', slug: 'transformations-functions-precalc', order: 2,
        description: 'Apply transformations including shifts, reflections, stretches, and compositions.',
        textContent: `# Transformations of Functions

## Parent Functions

Know the shapes of: $x$, $x^2$, $x^3$, $\\sqrt{x}$, $|x|$, $\\frac{1}{x}$

## Transformation Rules

Starting from $y = f(x)$:

$$y = af(b(x - h)) + k$$

| Parameter | Effect |
|-----------|--------|
| $k > 0$ | Shift **up** $k$ units |
| $k < 0$ | Shift **down** $|k|$ units |
| $h > 0$ | Shift **right** $h$ units |
| $h < 0$ | Shift **left** $|h|$ units |
| $a > 1$ | Vertical stretch by $a$ |
| $0 < a < 1$ | Vertical compression by $a$ |
| $a < 0$ | Reflect over **x-axis** |
| $b > 1$ | Horizontal compression by $\\frac{1}{b}$ |
| $0 < b < 1$ | Horizontal stretch by $\\frac{1}{b}$ |
| $b < 0$ | Reflect over **y-axis** |

## Order of Transformations

**Inside → Outside** (affects input first, then output):
1. Horizontal reflection ($b < 0$)
2. Horizontal stretch/compression
3. Horizontal shift
4. Vertical stretch/compression
5. Vertical reflection ($a < 0$)
6. Vertical shift

## Function Composition

$$(f \\circ g)(x) = f(g(x))$$

Apply $g$ first, then $f$ to the result.

**Domain of** $f \\circ g$: All $x$ in the domain of $g$ such that $g(x)$ is in the domain of $f$.

## Inverse Functions

$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$

To find $f^{-1}$:
1. Replace $f(x)$ with $y$
2. Swap $x$ and $y$
3. Solve for $y$

Graphs of $f$ and $f^{-1}$ are reflections over $y = x$.

## Even and Odd Functions

- **Even**: $f(-x) = f(x)$ → symmetric about y-axis
- **Odd**: $f(-x) = -f(x)$ → symmetric about origin

> **AP Tip**: Horizontal transformations are "opposite" of what you'd expect. $f(x - 3)$ shifts RIGHT 3, not left.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: polyRat.id }
      })
      console.log('  ✅ ' + t.slug)
    }
    console.log('  📂 Filled: Polynomial and Rational Functions (3 topics)')
  }

  if (expLog) {
    const topics = [
      { title: 'Exponential Functions and Modeling', slug: 'exponential-functions-modeling-precalc', order: 0,
        description: 'Model growth and decay with exponential functions using various bases.',
        textContent: `# Exponential Functions and Modeling

## Exponential Functions

$$f(x) = ab^x$$

- $a$ = initial value
- $b$ = base (growth/decay factor)
- Domain: all reals; Range: $y > 0$ (if $a > 0$)

## Natural Exponential Function

$$f(x) = e^x \\quad (e \\approx 2.71828...)$$

## Growth and Decay Models

### Continuous growth/decay
$$f(t) = ae^{kt}$$
- $k > 0$: growth
- $k < 0$: decay

### Half-life
$$A(t) = A_0 \\left(\\frac{1}{2}\\right)^{t/h}$$

where $h$ = half-life

### Doubling time
$$A(t) = A_0 \\cdot 2^{t/d}$$

where $d$ = doubling time

## Constructing Exponential Models

Given two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$b = \\left(\\frac{y_2}{y_1}\\right)^{\\frac{1}{x_2 - x_1}}$$

Then $a = \\frac{y_1}{b^{x_1}}$

## Comparing Linear and Exponential

Over equal intervals:
- **Linear**: Constant rate of change (differences)
- **Exponential**: Constant ratio (multiplicative change)

| Feature | Linear | Exponential |
|---------|--------|-------------|
| Equal intervals | Add constant | Multiply by constant |
| Equation | $f(x) = mx + b$ | $f(x) = ab^x$ |
| Graph | Line | Curve |
| Long-term | Constant growth | Accelerating growth |

## Logistic Growth

$$f(t) = \\frac{L}{1 + Ce^{-kt}}$$

- $L$ = carrying capacity
- Starts exponential, levels off at $L$

> **AP Precalculus Tip**: The College Board expects you to model with exponential functions given contextual data and interpret parameters in context.`
      },
      { title: 'Logarithmic Functions and Equations', slug: 'logarithmic-functions-equations-precalc', order: 1,
        description: 'Evaluate logarithms, apply properties, and solve logarithmic equations.',
        textContent: `# Logarithmic Functions and Equations

## Definition

$$\\log_b(x) = y \\iff b^y = x$$

Special cases:
- $\\log(x) = \\log_{10}(x)$
- $\\ln(x) = \\log_e(x)$

## Properties of Logarithms

$$\\log_b(MN) = \\log_b M + \\log_b N$$
$$\\log_b\\left(\\frac{M}{N}\\right) = \\log_b M - \\log_b N$$
$$\\log_b(M^p) = p \\log_b M$$
$$\\log_b b = 1 \\quad \\log_b 1 = 0$$

## Change of Base Formula

$$\\log_b x = \\frac{\\ln x}{\\ln b} = \\frac{\\log x}{\\log b}$$

## Graphs of Logarithmic Functions

$y = \\log_b x$ is the inverse of $y = b^x$:

| Feature | $y = b^x$ | $y = \\log_b x$ |
|---------|----------|----------------|
| Domain | $(-\\infty, \\infty)$ | $(0, \\infty)$ |
| Range | $(0, \\infty)$ | $(-\\infty, \\infty)$ |
| Asymptote | $y = 0$ | $x = 0$ |
| Key point | $(0, 1)$ | $(1, 0)$ |

## Solving Logarithmic Equations

**Strategy 1**: Convert to exponential form
$$\\log_3(x+2) = 4 \\implies x + 2 = 3^4 = 81 \\implies x = 79$$

**Strategy 2**: Combine logs, then convert
$$\\ln x + \\ln(x-2) = \\ln 3$$
$$\\ln[x(x-2)] = \\ln 3$$
$$x^2 - 2x = 3 \\implies x = 3 \\quad (x = -1 \\text{ extraneous})$$

## Solving Exponential Equations

$$5^{2x-1} = 125 \\implies 5^{2x-1} = 5^3 \\implies 2x - 1 = 3 \\implies x = 2$$

$$3^x = 20 \\implies x = \\frac{\\ln 20}{\\ln 3} \\approx 2.727$$

## Semi-Log Plots

When data is plotted on a semi-log scale (log y vs. x), exponential data appears **linear**.

$$\\ln y = kt + \\ln a \\quad \\text{(slope } = k, \\text{ y-intercept } = \\ln a\\text{)}$$

> **AP Precalculus Tip**: Semi-log and log-log plots are emphasized on the exam. If data is linear on a semi-log plot, it's exponential.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: expLog.id }
      })
      console.log('  ✅ ' + t.slug)
    }
    console.log('  📂 Filled: Exponential and Logarithmic Functions (2 topics)')
  }

  if (paramVec) {
    const topics = [
      { title: 'Parametric Equations and Vectors', slug: 'parametric-equations-vectors-precalc', order: 0,
        description: 'Work with parametric equations, polar coordinates, and vectors.',
        textContent: `# Parametric Equations and Vectors

## Parametric Equations

Instead of $y = f(x)$, both $x$ and $y$ depend on a parameter $t$:

$$x = f(t), \\quad y = g(t)$$

### Eliminating the Parameter

1. Solve one equation for $t$
2. Substitute into the other

**Example**: $x = 2t + 1$, $y = t^2$
$$t = \\frac{x-1}{2} \\implies y = \\left(\\frac{x-1}{2}\\right)^2 = \\frac{(x-1)^2}{4}$$

### Parametric Line
$$x = x_0 + at, \\quad y = y_0 + bt$$

Direction: $\\langle a, b \\rangle$, passes through $(x_0, y_0)$

### Parametric Circle
$$x = h + r\\cos t, \\quad y = k + r\\sin t, \\quad 0 \\leq t \\leq 2\\pi$$

## Polar Coordinates

Point $(r, \\theta)$ where:
- $r$ = distance from origin
- $\\theta$ = angle from positive x-axis

### Conversion
$$x = r\\cos\\theta, \\quad y = r\\sin\\theta$$
$$r = \\sqrt{x^2 + y^2}, \\quad \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)$$

## Vectors

### Definition
$$\\vec{v} = \\langle a, b \\rangle$$

### Magnitude
$$|\\vec{v}| = \\sqrt{a^2 + b^2}$$

### Unit Vector
$$\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$$

### Operations
$$\\vec{u} + \\vec{v} = \\langle u_1 + v_1, u_2 + v_2 \\rangle$$
$$c\\vec{v} = \\langle cv_1, cv_2 \\rangle$$

### Dot Product
$$\\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 = |\\vec{u}||\\vec{v}|\\cos\\theta$$

## Matrices (Introduction)

### 2×2 Matrix
$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$

### Matrix Multiplication
$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ax + by \\\\ cx + dy \\end{pmatrix}$$

### Transformation Matrices
Rotation by $\\theta$:
$$R = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$$

> **AP Precalculus Tip**: Unit 4 topics (parametric, polar, vectors, matrices) are emphasized for understanding how functions can be represented beyond $y = f(x)$.`
      }
    ]
    for (const t of topics) {
      await prisma.topic.create({
        data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: paramVec.id }
      })
      console.log('  ✅ ' + t.slug)
    }
    console.log('  📂 Filled: Parameters, Vectors, and Matrices (1 topic)')
  }

  console.log('\n🎉 AP Precalculus empty categories filled with 6 new topics total.')
}

main().catch(console.error).finally(() => prisma.$disconnect())
