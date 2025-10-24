import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Creating Derivatives micro-lessons (Part 1)...')

  // Find or create the Derivatives category
  const category = await prisma.category.upsert({
    where: { slug: 'derivatives' },
    update: {},
    create: {
      slug: 'derivatives',
      name: 'Derivatives',
      description: 'Differentiation rules, techniques, and applications',
      order: 2,
      icon: 'd/dx'
    }
  })

  // Delete any existing topics with these slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: ['what-is-a-derivative', 'derivative-notation', 'derivative-as-slope', 'derivative-as-rate-of-change']
      }
    }
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // 1. What is a Derivative?
  const topic1 = await prisma.topic.create({
    data: {
      title: 'What is a Derivative?',
      slug: 'what-is-a-derivative',
      description: 'Understanding the fundamental concept of derivatives',
      order: 1,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Understanding Derivatives

A **derivative** measures how a function changes. It's the mathematical way to describe **rates of change**.

### The Big Idea

> The derivative tells you how fast something is changing at a specific moment.

Think of it like this:
- **Speed** is the derivative of position (how fast your location changes)
- **Acceleration** is the derivative of speed (how fast your speed changes)
- The **slope of a curve** at a point is the derivative

### From Slope to Derivative

Remember the slope of a line between two points?

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$

The derivative is what happens when we make those points **infinitely close together**!

### The Definition

The derivative of $f(x)$ at $x = a$ is:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

Let's break this down:
- **$f(a + h)$**: Function value slightly to the right
- **$f(a)$**: Function value at the point
- **$f(a + h) - f(a)$**: Change in y-values
- **$h$**: Change in x-values (approaching 0)
- **The limit**: Make h infinitesimally small

### What This Fraction Means

$$\\frac{f(a + h) - f(a)}{h}$$

This is the **average rate of change** over the interval from $a$ to $a + h$.

As $h \\to 0$, we get the **instantaneous rate of change** (the derivative!)

### Geometric Interpretation

The derivative at a point is the **slope of the tangent line** to the curve at that point.

- **Secant line**: Connects two points on the curve
- **Tangent line**: Touches the curve at exactly one point
- As the two points get closer, the secant line → tangent line

### Example: Computing from Definition

Find the derivative of $f(x) = x^2$ at $x = 3$ using the definition.

$$f'(3) = \\lim_{h \\to 0} \\frac{f(3 + h) - f(3)}{h}$$

**Step 1**: Find $f(3 + h)$ and $f(3)$
- $f(3 + h) = (3 + h)^2 = 9 + 6h + h^2$
- $f(3) = 9$

**Step 2**: Substitute
$$f'(3) = \\lim_{h \\to 0} \\frac{(9 + 6h + h^2) - 9}{h} = \\lim_{h \\to 0} \\frac{6h + h^2}{h}$$

**Step 3**: Factor and simplify
$$= \\lim_{h \\to 0} \\frac{h(6 + h)}{h} = \\lim_{h \\to 0} (6 + h)$$

**Step 4**: Evaluate
$$= 6 + 0 = 6$$

So $f'(3) = 6$ — the slope at $x = 3$ is 6!

### Why Derivatives Matter

Derivatives help us:
- Find **maximum and minimum** values
- Determine where functions are **increasing or decreasing**
- Analyze **motion** (velocity, acceleration)
- Optimize **real-world problems**
- Understand **rates of change** in science and economics

### The Function vs. Its Derivative

If $y = f(x)$ is our function, then $y' = f'(x)$ is the **derivative function** that gives the slope at every point.

> Original function → tells you the value
> Derivative function → tells you the rate of change
`,
      exampleProblems: {
        create: [
          {
            question: 'Use the definition of derivative to find $f\'(2)$ if $f(x) = 3x - 1$.',
            solution: `Using the definition:

$$f'(2) = \\lim_{h \\to 0} \\frac{f(2 + h) - f(2)}{h}$$

**Step 1: Find the function values**

$$f(2 + h) = 3(2 + h) - 1 = 6 + 3h - 1 = 5 + 3h$$
$$f(2) = 3(2) - 1 = 5$$

**Step 2: Substitute into the definition**

$$f'(2) = \\lim_{h \\to 0} \\frac{(5 + 3h) - 5}{h} = \\lim_{h \\to 0} \\frac{3h}{h}$$

**Step 3: Simplify**

$$= \\lim_{h \\to 0} 3 = 3$$

**Answer: $f'(2) = 3$**

This makes sense! $f(x) = 3x - 1$ is a line with slope 3, so the derivative (slope) at any point is 3.`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'Find the derivative of $f(x) = x^2 + 2x$ at $x = 1$ using the limit definition.',
            solution: `Using the definition:

$$f'(1) = \\lim_{h \\to 0} \\frac{f(1 + h) - f(1)}{h}$$

**Step 1: Find $f(1 + h)$**

$$f(1 + h) = (1 + h)^2 + 2(1 + h)$$
$$= 1 + 2h + h^2 + 2 + 2h$$
$$= 3 + 4h + h^2$$

**Step 2: Find $f(1)$**

$$f(1) = 1^2 + 2(1) = 1 + 2 = 3$$

**Step 3: Substitute**

$$f'(1) = \\lim_{h \\to 0} \\frac{(3 + 4h + h^2) - 3}{h}$$
$$= \\lim_{h \\to 0} \\frac{4h + h^2}{h}$$

**Step 4: Factor and simplify**

$$= \\lim_{h \\to 0} \\frac{h(4 + h)}{h} = \\lim_{h \\to 0} (4 + h)$$

**Step 5: Evaluate**

$$= 4 + 0 = 4$$

**Answer: $f'(1) = 4$**`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What does the derivative measure?',
            back: 'The rate of change of a function, or the slope of the tangent line at a point'
          },
          {
            front: 'What is the limit definition of the derivative at x = a?',
            back: '$f\'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$'
          },
          {
            front: 'Geometrically, what does the derivative represent?',
            back: 'The slope of the tangent line to the curve at that point'
          },
          {
            front: 'What is the difference between a secant line and a tangent line?',
            back: 'A secant line connects two points on a curve; a tangent line touches at exactly one point'
          }
        ]
      }
    }
  })

  // 2. Derivative Notation
  const topic2 = await prisma.topic.create({
    data: {
      title: 'Derivative Notation',
      slug: 'derivative-notation',
      description: 'Understanding the different ways to write derivatives',
      order: 2,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Derivative Notation

There are several ways to write derivatives. They all mean the same thing, but are used in different contexts!

### The Main Notations

For a function $y = f(x)$, all of these mean "the derivative":

| Notation | Read as | Context |
|----------|---------|---------|
| $f'(x)$ | "f prime of x" | Lagrange notation |
| $\\frac{dy}{dx}$ | "dy dx" | Leibniz notation |
| $y'$ | "y prime" | When y is the function |
| $\\frac{df}{dx}$ | "df dx" | Alternative Leibniz |
| $Df(x)$ | "D f of x" | Operator notation |
| $\\dot{y}$ | "y dot" | Physics (time derivative) |

### Lagrange Notation: $f'(x)$

**Prime notation** is the most common in calculus.

- **$f'(x)$**: First derivative
- **$f''(x)$**: Second derivative (derivative of the derivative)
- **$f'''(x)$**: Third derivative
- **$f^{(n)}(x)$**: nth derivative

**Example:** If $f(x) = x^3$, then $f'(x) = 3x^2$

### Leibniz Notation: $\\frac{dy}{dx}$

This looks like a fraction, and sometimes we can treat it like one!

**Parts:**
- **$dy$**: "Infinitesimal change in y"
- **$dx$**: "Infinitesimal change in x"
- **$\\frac{dy}{dx}$**: "Rate of change of y with respect to x"

**Example:** If $y = x^2$, then $\\frac{dy}{dx} = 2x$

### At a Specific Point

To indicate the derivative **at a particular value**:

**Lagrange:**
$$f'(3) \\text{ or } f'(a)$$

**Leibniz:**
$$\\left.\\frac{dy}{dx}\\right|_{x=3} \\text{ or } \\frac{dy}{dx}\\bigg|_{x=a}$$

The vertical bar means "evaluated at".

### Higher-Order Derivatives

**Second derivative** (derivative of the derivative):

| Notation | Meaning |
|----------|---------|
| $f''(x)$ | Second derivative |
| $\\frac{d^2y}{dx^2}$ | Second derivative (Leibniz) |
| $y''$ | Second derivative |

**Third derivative:**
- $f'''(x)$ or $f^{(3)}(x)$
- $\\frac{d^3y}{dx^3}$

**nth derivative:**
- $f^{(n)}(x)$
- $\\frac{d^ny}{dx^n}$

### Why Different Notations?

**Use $f'(x)$ when:**
- Working with function notation
- You want clean, simple expressions

**Use $\\frac{dy}{dx}$ when:**
- Emphasizing the relationship between variables
- Using the chain rule
- Doing implicit differentiation
- Separating variables in differential equations

**Use $\\dot{y}$ when:**
- Dealing with time derivatives in physics
- $t$ is the independent variable

### Example Comparison

For $y = x^3 + 2x$:

**Prime notation:**
$$f'(x) = 3x^2 + 2$$

**Leibniz notation:**
$$\\frac{dy}{dx} = 3x^2 + 2$$

**At $x = 1$:**
$$f'(1) = 3(1)^2 + 2 = 5$$
$$\\left.\\frac{dy}{dx}\\right|_{x=1} = 5$$

They all give the same answer!

### The "d" Operator

When we write $\\frac{d}{dx}$, we can think of it as an operator:

$$\\frac{d}{dx}[x^2] = 2x$$

Read as: "Take the derivative with respect to x of $x^2$"

### Partial Derivatives (Preview)

For functions of multiple variables (later in calculus):

$$\\frac{\\partial f}{\\partial x}$$

The $\\partial$ symbol indicates a **partial derivative** (holding other variables constant).

### Practice Tips

1. **Be consistent** within a problem
2. **Read the question** - match the notation used
3. **$f'(x)$ is faster** for simple work
4. **$\\frac{dy}{dx}$ is clearer** for chain rule and related rates
5. **Context matters** - physics vs. pure math
`,
      exampleProblems: {
        create: [
          {
            question: 'If $f(x) = 5x^2 - 3x$, write the derivative using three different notations.',
            solution: `First, find the derivative: The derivative of $5x^2$ is $10x$, and the derivative of $-3x$ is $-3$.

**Three notations:**

1. **Lagrange (prime) notation:**
   $$f'(x) = 10x - 3$$

2. **Leibniz notation (if we call the function y):**
   $$\\frac{dy}{dx} = 10x - 3$$

3. **Operator notation:**
   $$\\frac{d}{dx}[5x^2 - 3x] = 10x - 3$$

All three express the same derivative!`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'What is the difference between f\'\'(x) and d²y/dx²?',
            solution: `**There is no difference in meaning!**

Both represent the **second derivative** - the derivative of the derivative.

**f\'\'(x)** is **Lagrange notation** (prime notation):
- Clean and simple
- Easy to write
- Common in pure mathematics

**d²y/dx²** is **Leibniz notation**:
- Emphasizes "second derivative with respect to x"
- The d² on top means "differentiate twice"
- The dx² on bottom means "with respect to x, twice"
- More common in physics and applications

**Example:** If f(x) = x⁴:
- f\'(x) = 4x³ (first derivative)
- f\'\'(x) = 12x² (second derivative)
- d²y/dx² = 12x² (same thing!)`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What does $f\'(x)$ notation represent?',
            back: 'The derivative of f with respect to x (Lagrange or prime notation)'
          },
          {
            front: 'What does $\\frac{dy}{dx}$ mean?',
            back: 'The derivative of y with respect to x (Leibniz notation), representing the rate of change of y per unit change in x'
          },
          {
            front: 'How do you write the second derivative in Leibniz notation?',
            back: '$\\frac{d^2y}{dx^2}$ (d squared y over dx squared)'
          },
          {
            front: 'What does the vertical bar notation $\\left.\\frac{dy}{dx}\\right|_{x=a}$ mean?',
            back: 'The derivative evaluated at x = a (the derivative at that specific point)'
          }
        ]
      }
    }
  })

  // 3. Derivative as Slope of Tangent Line
  const topic3 = await prisma.topic.create({
    data: {
      title: 'Derivative as Slope',
      slug: 'derivative-as-slope',
      description: 'Understanding derivatives through tangent lines and slope',
      order: 3,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Derivative as Slope

The most visual way to understand derivatives: **they give you the slope of the tangent line!**

### Tangent Lines Explained

A **tangent line** to a curve at a point:
- Touches the curve at exactly that point
- Has the same "direction" as the curve at that point
- Doesn't cross the curve (locally)

> Think of it as the "best linear approximation" to the curve at that point.

### The Connection

$$\\text{slope of tangent line at } x = a \\quad = \\quad f'(a)$$

The derivative **is** the slope!

### Finding the Tangent Line Equation

Once you know the slope $m = f'(a)$ and the point $(a, f(a))$, use point-slope form:

$$y - f(a) = f'(a)(x - a)$$

Or rearrange to slope-intercept form:

$$y = f'(a)(x - a) + f(a)$$

### Example 1: Find the Tangent Line

Find the equation of the tangent line to $f(x) = x^2$ at $x = 2$.

**Step 1: Find the point**
$$f(2) = 2^2 = 4$$
Point: $(2, 4)$

**Step 2: Find the slope (derivative)**
Using the power rule (we'll learn this soon): $f'(x) = 2x$
$$f'(2) = 2(2) = 4$$
Slope: $m = 4$

**Step 3: Use point-slope form**
$$y - 4 = 4(x - 2)$$
$$y - 4 = 4x - 8$$
$$y = 4x - 4$$

**Answer:** The tangent line is $y = 4x - 4$

### Positive, Negative, and Zero Slopes

The derivative tells you the curve's behavior:

| $f'(a)$ | Tangent Line | Curve Behavior |
|---------|--------------|----------------|
| $f'(a) > 0$ | Slopes upward | **Increasing** |
| $f'(a) < 0$ | Slopes downward | **Decreasing** |
| $f'(a) = 0$ | **Horizontal** | Flat (critical point) |

### Critical Points

When $f'(a) = 0$, we have a **critical point**:
- Could be a **maximum** (top of a hill)
- Could be a **minimum** (bottom of a valley)
- Could be a **saddle point** (neither)

The horizontal tangent line is a clue that something interesting is happening!

### Example 2: Horizontal Tangent

Find where $f(x) = x^2 - 4x + 3$ has a horizontal tangent line.

**Step 1: Find the derivative**
$$f'(x) = 2x - 4$$

**Step 2: Set equal to zero**
$$2x - 4 = 0$$
$$2x = 4$$
$$x = 2$$

**Step 3: Find the point**
$$f(2) = 4 - 8 + 3 = -1$$

**Answer:** Horizontal tangent at $(2, -1)$

This is actually the **vertex** (minimum) of the parabola!

### Secant Lines vs. Tangent Lines

**Secant line**: Connects two points on the curve
- Slope: $\\frac{f(b) - f(a)}{b - a}$ (average rate of change)

**Tangent line**: Touches at one point
- Slope: $f'(a)$ (instantaneous rate of change)

> As the two points of a secant line get closer, the secant line approaches the tangent line!

### Normal Lines

The **normal line** is perpendicular to the tangent line.

If the tangent line has slope $m = f'(a)$, the normal line has slope:

$$m_{\\text{normal}} = -\\frac{1}{f'(a)}$$

(Negative reciprocal)

### Graphical Analysis

Looking at a graph:
- **Steep tangent** → Large $|f'(a)|$ → Fast change
- **Gentle tangent** → Small $|f'(a)|$ → Slow change
- **Horizontal tangent** → $f'(a) = 0$ → No change (momentarily)

### Practice Visualization

For any curve:
1. Pick a point
2. Imagine a line that "just kisses" the curve there
3. That line's slope is the derivative
4. If you can't draw it without lifting your pencil, it's not differentiable there!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the equation of the tangent line to $f(x) = x^3$ at the point $(1, 1)$.',
            solution: `**Step 1: Verify the point**
$$f(1) = 1^3 = 1$$ ✓ The point $(1, 1)$ is on the curve.

**Step 2: Find the derivative**
Using the power rule: $f'(x) = 3x^2$

**Step 3: Find the slope at x = 1**
$$f'(1) = 3(1)^2 = 3$$

**Step 4: Use point-slope form**
$$y - 1 = 3(x - 1)$$
$$y - 1 = 3x - 3$$
$$y = 3x - 2$$

**Answer: $y = 3x - 2$**

We can verify: at $x = 1$, $y = 3(1) - 2 = 1$ ✓`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Where does $g(x) = x^3 - 3x^2$ have horizontal tangent lines?',
            solution: `Horizontal tangent lines occur where $g'(x) = 0$.

**Step 1: Find the derivative**
$$g'(x) = 3x^2 - 6x$$

**Step 2: Set equal to zero**
$$3x^2 - 6x = 0$$

**Step 3: Factor**
$$3x(x - 2) = 0$$

**Step 4: Solve**
$$x = 0 \\text{ or } x = 2$$

**Step 5: Find the y-coordinates**
- At $x = 0$: $g(0) = 0 - 0 = 0$
- At $x = 2$: $g(2) = 8 - 12 = -4$

**Answer:** Horizontal tangent lines at $(0, 0)$ and $(2, -4)$

These are the **critical points** where the function changes from increasing to decreasing or vice versa!`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What does the derivative tell you about the tangent line?',
            back: 'The derivative at a point equals the slope of the tangent line at that point'
          },
          {
            front: 'What does it mean when f\'(a) = 0?',
            back: 'The tangent line is horizontal at that point (a critical point)'
          },
          {
            front: 'How do you find the equation of a tangent line at point (a, f(a))?',
            back: 'Use point-slope form: y - f(a) = f\'(a)(x - a), where f\'(a) is the slope'
          },
          {
            front: 'If a tangent line has slope m, what is the slope of the normal line?',
            back: 'The negative reciprocal: -1/m'
          }
        ]
      }
    }
  })

  // 4. Derivative as Rate of Change
  const topic4 = await prisma.topic.create({
    data: {
      title: 'Derivative as Rate of Change',
      slug: 'derivative-as-rate-of-change',
      description: 'Understanding derivatives through real-world rates of change',
      order: 4,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Derivative as Rate of Change

Derivatives measure **how fast things change**. This is their most powerful real-world application!

### Average vs. Instantaneous Rate of Change

**Average rate of change** (over an interval):
$$\\frac{f(b) - f(a)}{b - a}$$

**Instantaneous rate of change** (at a point):
$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$

> The derivative is the instantaneous rate of change!

### Motion: Position, Velocity, Acceleration

This is where derivatives truly shine!

**If $s(t)$ is position** (where you are):
- **$s'(t) = v(t)$** is velocity (how fast you're moving)
- **$v'(t) = s''(t) = a(t)$** is acceleration (how fast your speed is changing)

**The derivative hierarchy:**
$$\\text{Position} \\xrightarrow{\\text{derivative}} \\text{Velocity} \\xrightarrow{\\text{derivative}} \\text{Acceleration}$$

### Example: Free Fall

An object is dropped from a building. Its height is $h(t) = 100 - 4.9t^2$ meters (where $t$ is in seconds).

**Find the velocity:**
$$v(t) = h'(t) = -9.8t \\text{ m/s}$$

**Find velocity at $t = 2$ seconds:**
$$v(2) = -9.8(2) = -19.6 \\text{ m/s}$$

The negative sign means **downward**!

**Find the acceleration:**
$$a(t) = v'(t) = h''(t) = -9.8 \\text{ m/s}^2$$

This is constant (gravity)!

### Sign of the Derivative

The sign tells you the **direction** of change:

| $f'(x)$ | Meaning |
|---------|---------|
| $f'(x) > 0$ | $f$ is **increasing** |
| $f'(x) < 0$ | $f$ is **decreasing** |
| $f'(x) = 0$ | $f$ is **stationary** (not changing) |

**Example:** If $v(t) > 0$, you're moving in the **positive direction**.
If $v(t) < 0$, you're moving in the **negative direction**.

### Units Matter!

The derivative's units are:
$$\\frac{\\text{units of output}}{\\text{units of input}}$$

**Examples:**
- Position in meters, time in seconds → Velocity in **m/s**
- Cost in dollars, quantity in items → Marginal cost in **$/item**
- Temperature in °C, time in hours → Rate of temperature change in **°C/hr**

### Related Rates

When two quantities both depend on time, their rates of change are related through derivatives!

**Example:** A balloon is being inflated. The radius increases at 2 cm/s. How fast is the volume changing?

We know:
- $\\frac{dr}{dt} = 2$ cm/s (given)
- $V = \\frac{4}{3}\\pi r^3$ (volume formula)

Take the derivative with respect to time:
$$\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt}$$

At $r = 5$ cm:
$$\\frac{dV}{dt} = 4\\pi(5)^2(2) = 200\\pi \\text{ cm}^3\\text{/s}$$

### Economics: Marginal Analysis

In economics, "marginal" means "derivative"!

**Marginal cost:** $C'(x)$ = cost to produce one more unit
**Marginal revenue:** $R'(x)$ = revenue from selling one more unit
**Marginal profit:** $P'(x) = R'(x) - C'(x)$

**Example:** If $C(x) = 1000 + 5x + 0.01x^2$ dollars:
$$C'(x) = 5 + 0.02x$$

At $x = 100$ units: $C'(100) = 5 + 2 = \\$7$ per unit

### Population Growth

If $P(t)$ is population at time $t$:
- $P'(t) > 0$: Population **growing**
- $P'(t) < 0$: Population **shrinking**
- $|P'(t)|$: **Rate** of growth/decline

**Example:** $P(t) = 1000e^{0.02t}$ (exponential growth)
$$P'(t) = 20e^{0.02t}$$

The population is always growing (positive derivative)!

### Optimization Preview

To maximize or minimize something:
1. Find where $f'(x) = 0$ (critical points)
2. Test to see if it's a max or min
3. Check endpoints if on a closed interval

We'll explore this deeply in later lessons!

### The Power of Derivatives

Derivatives let us:
- ✓ Predict future behavior
- ✓ Find optimal solutions
- ✓ Understand dynamic systems
- ✓ Model real-world phenomena
- ✓ Make informed decisions

> Calculus transforms static snapshots into dynamic understanding!
`,
      exampleProblems: {
        create: [
          {
            question: 'A particle moves along a line with position $s(t) = t^3 - 6t^2 + 9t$ meters at time $t$ seconds. Find the velocity and acceleration at $t = 2$ seconds.',
            solution: `**Step 1: Find velocity (first derivative)**

$$v(t) = s'(t) = 3t^2 - 12t + 9$$

At $t = 2$:
$$v(2) = 3(2)^2 - 12(2) + 9 = 12 - 24 + 9 = -3 \\text{ m/s}$$

The particle is moving at **3 m/s in the negative direction**.

**Step 2: Find acceleration (second derivative)**

$$a(t) = v'(t) = s''(t) = 6t - 12$$

At $t = 2$:
$$a(2) = 6(2) - 12 = 12 - 12 = 0 \\text{ m/s}^2$$

The acceleration is **zero** at $t = 2$ - the particle is neither speeding up nor slowing down at that instant.

**Summary:**
- Velocity at $t = 2$: **-3 m/s** (moving backward)
- Acceleration at $t = 2$: **0 m/s²** (constant velocity)`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'The temperature of coffee is given by $T(t) = 20 + 60e^{-0.1t}$ degrees Celsius, where $t$ is in minutes. How fast is the temperature changing at $t = 10$ minutes?',
            solution: `We need to find $T'(10)$ to get the rate of temperature change.

**Step 1: Find the derivative**

$$T'(t) = \\frac{d}{dt}[20 + 60e^{-0.1t}]$$

The derivative of 20 is 0.
Using the chain rule: $\\frac{d}{dt}[e^{-0.1t}] = e^{-0.1t} \\cdot (-0.1)$

$$T'(t) = 60 \\cdot (-0.1)e^{-0.1t} = -6e^{-0.1t}$$

**Step 2: Evaluate at t = 10**

$$T'(10) = -6e^{-0.1(10)} = -6e^{-1} = -\\frac{6}{e} \\approx -2.21$$

**Answer:** The temperature is decreasing at about **2.21 °C per minute** at $t = 10$ minutes.

The negative sign indicates the coffee is **cooling down** (as expected!).`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'If s(t) is position, what does s\'(t) represent?',
            back: 'Velocity - the rate of change of position with respect to time'
          },
          {
            front: 'If s(t) is position, what does s\'\'(t) represent?',
            back: 'Acceleration - the rate of change of velocity, or the second derivative of position'
          },
          {
            front: 'What does it mean when f\'(x) > 0?',
            back: 'The function f is increasing (output values are getting larger as x increases)'
          },
          {
            front: 'In economics, what is marginal cost?',
            back: 'The derivative of the cost function C\'(x) - the cost to produce one additional unit'
          }
        ]
      }
    }
  })

  console.log('✅ Created 4 foundational Derivatives micro-lessons!')
  console.log('📚 Topics created (Part 1):')
  console.log('   1. What is a Derivative?')
  console.log('   2. Derivative Notation')
  console.log('   3. Derivative as Slope')
  console.log('   4. Derivative as Rate of Change')
  console.log('\n💡 Ready to continue with differentiation rules!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
