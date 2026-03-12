import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Derivatives micro-lessons - Advanced Techniques (Part 4)...')

  // Get or create the Derivatives category
  const derivativesCategory = await prisma.category.upsert({
    where: { slug: 'derivatives' },
    update: {},
    create: {
      slug: 'derivatives',
      name: 'Derivatives',
      description: 'Understanding rates of change and differentiation',
      order: 2,
      icon: '📈',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'implicit-differentiation',
          'related-rates',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: Implicit Differentiation
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'implicit-differentiation',
      title: 'Implicit Differentiation',
      description: 'Finding derivatives when y is not isolated',
      order: 13,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# 🔄 Implicit Differentiation

## What is Implicit Differentiation?

So far, we've worked with **explicit functions** where $y$ is isolated:
- $y = x^2 + 3x$ ✓
- $y = \\sin(2x)$ ✓
- $y = e^x$ ✓

But many equations have $x$ and $y$ **mixed together** and can't be easily solved for $y$:
- $x^2 + y^2 = 25$ (circle)
- $xy + y^3 = x$ 
- $\\sin(xy) = x + y$

**Implicit differentiation** lets us find $\\frac{dy}{dx}$ WITHOUT solving for $y$ first!

---

## The Basic Idea

When differentiating an equation implicitly:

1. Differentiate **both sides** with respect to $x$
2. Remember that $y$ is a function of $x$ (even though we don't know the formula)
3. Use the **Chain Rule** whenever you differentiate a term with $y$
4. Solve for $\\frac{dy}{dx}$

> **💡 Key Insight**: When you differentiate a function of $y$, multiply by $\\frac{dy}{dx}$ (the Chain Rule!)

---

## Important Derivative Patterns

When differentiating implicitly, remember these patterns:

### Pattern 1: Powers of y

$$\\frac{d}{dx}[y^n] = ny^{n-1} \\cdot \\frac{dy}{dx}$$

**Examples**:
- $\\frac{d}{dx}[y^2] = 2y\\frac{dy}{dx}$
- $\\frac{d}{dx}[y^3] = 3y^2\\frac{dy}{dx}$
- $\\frac{d}{dx}[\\sqrt{y}] = \\frac{1}{2\\sqrt{y}}\\frac{dy}{dx}$

### Pattern 2: Functions of y

$$\\frac{d}{dx}[\\sin y] = \\cos y \\cdot \\frac{dy}{dx}$$

$$\\frac{d}{dx}[e^y] = e^y \\cdot \\frac{dy}{dx}$$

$$\\frac{d}{dx}[\\ln y] = \\frac{1}{y} \\cdot \\frac{dy}{dx}$$

### Pattern 3: Products of x and y

Use the **Product Rule**!

$$\\frac{d}{dx}[xy] = (1)y + x\\frac{dy}{dx} = y + x\\frac{dy}{dx}$$

$$\\frac{d}{dx}[x^2y] = 2xy + x^2\\frac{dy}{dx}$$

---

## Step-by-Step Process

### Example: Find $\\frac{dy}{dx}$ if $x^2 + y^2 = 25$

**Step 1: Differentiate both sides with respect to $x$**

$$\\frac{d}{dx}[x^2 + y^2] = \\frac{d}{dx}[25]$$

---

**Step 2: Apply derivative rules to each term**

Left side:
- $\\frac{d}{dx}[x^2] = 2x$
- $\\frac{d}{dx}[y^2] = 2y\\frac{dy}{dx}$ (Chain Rule!)

Right side:
- $\\frac{d}{dx}[25] = 0$

So we get: $2x + 2y\\frac{dy}{dx} = 0$

---

**Step 3: Solve for $\\frac{dy}{dx}$**

$$2y\\frac{dy}{dx} = -2x$$

$$\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}$$

**Answer**: $\\displaystyle\\frac{dy}{dx} = -\\frac{x}{y}$

> This tells us the slope at any point $(x, y)$ on the circle!

---

## More Complex Examples

### Example with Product Rule

Find $\\frac{dy}{dx}$ if $xy + y^3 = 6$

**Step 1: Differentiate both sides**

$$\\frac{d}{dx}[xy + y^3] = \\frac{d}{dx}[6]$$

---

**Step 2: Apply rules**

For $xy$, use Product Rule: $y + x\\frac{dy}{dx}$

For $y^3$: $3y^2\\frac{dy}{dx}$

For $6$: $0$

$$y + x\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = 0$$

---

**Step 3: Collect $\\frac{dy}{dx}$ terms**

$$x\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = -y$$

$$\\frac{dy}{dx}(x + 3y^2) = -y$$

$$\\frac{dy}{dx} = \\frac{-y}{x + 3y^2}$$

---

## Finding Slopes of Tangent Lines

We can use implicit differentiation to find slopes at specific points!

### Example: Circle Equation

For $x^2 + y^2 = 25$, we found $\\frac{dy}{dx} = -\\frac{x}{y}$

**Find the slope at point $(3, 4)$:**

$$\\frac{dy}{dx}\\bigg|_{(3,4)} = -\\frac{3}{4}$$

**Find the slope at point $(0, 5)$:**

$$\\frac{dy}{dx}\\bigg|_{(0,5)} = -\\frac{0}{5} = 0$$ (horizontal tangent!)

**Find the slope at point $(5, 0)$:**

$$\\frac{dy}{dx}\\bigg|_{(5,0)} = -\\frac{5}{0}$$ → undefined (vertical tangent!)

---

## ⚠️ Common Mistakes

### Mistake 1: Forgetting dy/dx
❌ $\\frac{d}{dx}[y^2] = 2y$
✅ $\\frac{d}{dx}[y^2] = 2y\\frac{dy}{dx}$

### Mistake 2: Not Using Product Rule
❌ $\\frac{d}{dx}[xy] = y$
✅ $\\frac{d}{dx}[xy] = y + x\\frac{dy}{dx}$

### Mistake 3: Forgetting to Solve for dy/dx
Don't stop after differentiating - you must **isolate** $\\frac{dy}{dx}$!

### Mistake 4: Arithmetic Errors
When solving for $\\frac{dy}{dx}$, collect ALL terms with $\\frac{dy}{dx}$ on one side.

---

## Special Cases

### Horizontal Tangents

Occur when $\\frac{dy}{dx} = 0$

Set the numerator equal to zero and solve.

### Vertical Tangents

Occur when $\\frac{dy}{dx}$ is undefined

Set the denominator equal to zero and solve.

### Second Derivatives

You can differentiate implicitly **twice** to find $\\frac{d^2y}{dx^2}$!

After finding $\\frac{dy}{dx}$, differentiate the entire equation again (treating $\\frac{dy}{dx}$ as a function).

---

## When to Use Implicit Differentiation

Use implicit differentiation when:

1. **Equation can't be solved for $y$** (or it's very difficult)
2. **Circles, ellipses, hyperbolas** - standard conic sections
3. **Equations with $y$ on both sides** or mixed with $x$
4. **Finding tangent lines** to implicit curves
5. **Related rates problems** (coming up next!)

> **💡 Pro Tip**: Even if you CAN solve for $y$, implicit differentiation is often faster!

---

## Why It Works

Implicit differentiation works because of the **Chain Rule**.

When we write $y$, we really mean $y(x)$ - a function of $x$.

So when we differentiate $y^2$:
$$\\frac{d}{dx}[y^2] = \\frac{d}{dx}[(y(x))^2] = 2y(x) \\cdot y'(x) = 2y\\frac{dy}{dx}$$

It's just the Chain Rule in disguise!

---

## 📝 Practice Strategy

1. **Differentiate** both sides with respect to $x$
2. **Remember** the Chain Rule for every $y$ term
3. **Use Product Rule** when $x$ and $y$ are multiplied
4. **Collect** all $\\frac{dy}{dx}$ terms on one side
5. **Factor** out $\\frac{dy}{dx}$
6. **Solve** by dividing
7. **Simplify** your final answer
`,
      exampleProblems: {
        create: [
          {
            question: 'Use implicit differentiation to find $\\frac{dy}{dx}$ if $x^3 + y^3 = 6xy$.',
            solution: `**Step 1: Differentiate both sides with respect to $x$**

$$\\frac{d}{dx}[x^3 + y^3] = \\frac{d}{dx}[6xy]$$

---

**Step 2: Left side**

$\\frac{d}{dx}[x^3] = 3x^2$

$\\frac{d}{dx}[y^3] = 3y^2\\frac{dy}{dx}$ (Chain Rule)

Total: $3x^2 + 3y^2\\frac{dy}{dx}$

---

**Step 3: Right side (Product Rule)**

$\\frac{d}{dx}[6xy] = 6\\left[y + x\\frac{dy}{dx}\\right] = 6y + 6x\\frac{dy}{dx}$

---

**Step 4: Set them equal**

$$3x^2 + 3y^2\\frac{dy}{dx} = 6y + 6x\\frac{dy}{dx}$$

---

**Step 5: Collect $\\frac{dy}{dx}$ terms on one side**

$$3y^2\\frac{dy}{dx} - 6x\\frac{dy}{dx} = 6y - 3x^2$$

---

**Step 6: Factor out $\\frac{dy}{dx}$**

$$\\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$$

---

**Step 7: Solve for $\\frac{dy}{dx}$**

$$\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x}$$

We can factor out 3:

$$\\frac{dy}{dx} = \\frac{3(2y - x^2)}{3(y^2 - 2x)} = \\frac{2y - x^2}{y^2 - 2x}$$

**Answer**: $\\displaystyle\\frac{dy}{dx} = \\frac{2y - x^2}{y^2 - 2x}$`,
            difficulty: Difficulty.HARD,
            order: 1,
          },
          {
            question: 'Find the equation of the tangent line to the curve $x^2 + xy + y^2 = 7$ at the point $(1, 2)$.',
            solution: `**Step 1: Find $\\frac{dy}{dx}$ using implicit differentiation**

Differentiate both sides:

$$\\frac{d}{dx}[x^2 + xy + y^2] = \\frac{d}{dx}[7]$$

---

**Step 2: Differentiate each term**

$\\frac{d}{dx}[x^2] = 2x$

$\\frac{d}{dx}[xy] = y + x\\frac{dy}{dx}$ (Product Rule)

$\\frac{d}{dx}[y^2] = 2y\\frac{dy}{dx}$ (Chain Rule)

$\\frac{d}{dx}[7] = 0$

So: $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$

---

**Step 3: Solve for $\\frac{dy}{dx}$**

$$x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = -2x - y$$

$$\\frac{dy}{dx}(x + 2y) = -2x - y$$

$$\\frac{dy}{dx} = \\frac{-2x - y}{x + 2y}$$

---

**Step 4: Evaluate at point $(1, 2)$**

$$\\frac{dy}{dx}\\bigg|_{(1,2)} = \\frac{-2(1) - 2}{1 + 2(2)} = \\frac{-4}{5}$$

So the slope is $m = -\\frac{4}{5}$

---

**Step 5: Write equation using point-slope form**

$$y - y_1 = m(x - x_1)$$

$$y - 2 = -\\frac{4}{5}(x - 1)$$

$$y - 2 = -\\frac{4}{5}x + \\frac{4}{5}$$

$$y = -\\frac{4}{5}x + \\frac{4}{5} + 2$$

$$y = -\\frac{4}{5}x + \\frac{14}{5}$$

**Answer**: $y = -\\frac{4}{5}x + \\frac{14}{5}$ or $y - 2 = -\\frac{4}{5}(x - 1)$`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Find all points on the curve $x^2 + y^2 = 4x + 4y$ where the tangent line is horizontal.',
            solution: `**Step 1: Find $\\frac{dy}{dx}$ using implicit differentiation**

$$\\frac{d}{dx}[x^2 + y^2] = \\frac{d}{dx}[4x + 4y]$$

$$2x + 2y\\frac{dy}{dx} = 4 + 4\\frac{dy}{dx}$$

---

**Step 2: Solve for $\\frac{dy}{dx}$**

$$2y\\frac{dy}{dx} - 4\\frac{dy}{dx} = 4 - 2x$$

$$\\frac{dy}{dx}(2y - 4) = 4 - 2x$$

$$\\frac{dy}{dx} = \\frac{4 - 2x}{2y - 4} = \\frac{2(2 - x)}{2(y - 2)} = \\frac{2 - x}{y - 2}$$

---

**Step 3: Horizontal tangent when $\\frac{dy}{dx} = 0$**

This occurs when the numerator equals zero:

$$2 - x = 0$$

$$x = 2$$

---

**Step 4: Find corresponding $y$ values**

Substitute $x = 2$ into the original equation:

$$2^2 + y^2 = 4(2) + 4y$$

$$4 + y^2 = 8 + 4y$$

$$y^2 - 4y - 4 = 0$$

Using the quadratic formula:

$$y = \\frac{4 \\pm \\sqrt{16 + 16}}{2} = \\frac{4 \\pm \\sqrt{32}}{2} = \\frac{4 \\pm 4\\sqrt{2}}{2} = 2 \\pm 2\\sqrt{2}$$

---

**Step 5: State the points**

The tangent line is horizontal at:

$$(2, 2 + 2\\sqrt{2})$$ and $$(2, 2 - 2\\sqrt{2})$$

**Answer**: Points are $(2, 2 + 2\\sqrt{2})$ and $(2, 2 - 2\\sqrt{2})$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the key difference between explicit and implicit differentiation?',
            back: 'Explicit: $y$ is isolated (like $y = x^2$). Implicit: $y$ is mixed with $x$ (like $x^2 + y^2 = 25$). With implicit differentiation, we differentiate without solving for $y$ first.',
            hint: 'Think about whether y is already isolated',
          },
          {
            front: 'What is $\\frac{d}{dx}[y^2]$ using implicit differentiation?',
            back: '$2y\\frac{dy}{dx}$ - Remember to multiply by $\\frac{dy}{dx}$ because of the Chain Rule!',
            hint: 'Don\'t forget the Chain Rule - y is a function of x',
          },
          {
            front: 'What is $\\frac{d}{dx}[xy]$ using implicit differentiation?',
            back: '$y + x\\frac{dy}{dx}$ - Use the Product Rule: $(1)(y) + (x)\\frac{dy}{dx}$',
            hint: 'This is a product of x and y, so use Product Rule',
          },
          {
            front: 'When is a tangent line horizontal on an implicit curve?',
            back: 'When $\\frac{dy}{dx} = 0$, which occurs when the numerator of $\\frac{dy}{dx}$ equals zero (and denominator is not zero).',
            hint: 'Set the derivative equal to zero',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Related Rates
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'related-rates',
      title: 'Related Rates',
      description: 'Finding how rates of change are related to each other',
      order: 14,
      categoryId: derivativesCategory.id,
      isPremium: false,
      textContent: `
# ⏱️ Related Rates

## What are Related Rates?

**Related rates** problems involve finding how fast one quantity is changing based on how fast another related quantity is changing.

### Real-World Examples

1. **Balloon**: If you're inflating a balloon at 2 cubic inches per second, how fast is the radius increasing?

2. **Ladder**: A ladder is sliding down a wall. If the bottom is moving away at 3 ft/sec, how fast is the top sliding down?

3. **Shadow**: You're walking toward a lamppost. How fast is your shadow shrinking?

4. **Water tank**: Water is draining from a cone-shaped tank. How fast is the water level dropping?

> **💡 Key Idea**: Use derivatives to connect rates of change of related quantities!

---

## The General Strategy

### Step-by-Step Process

1. **Draw a picture** (if applicable)
2. **Identify known and unknown information**
   - What rates are given? (these are derivatives)
   - What rate are we finding? (this is the unknown derivative)
3. **Write an equation** relating the variables
4. **Differentiate both sides** with respect to time $t$ (implicit differentiation!)
5. **Substitute known values**
6. **Solve for the unknown rate**

> **⚠️ IMPORTANT**: Don't substitute values until AFTER differentiating!

---

## Common Rate Notation

In related rates, we use derivatives with respect to time:

- $\\frac{dr}{dt}$ = rate of change of radius
- $\\frac{dV}{dt}$ = rate of change of volume
- $\\frac{dA}{dt}$ = rate of change of area
- $\\frac{dh}{dt}$ = rate of change of height
- $\\frac{dx}{dt}$ = rate of change of position

**Units matter!** If $\\frac{dx}{dt} = 5$ ft/sec, that means the position is increasing at 5 feet per second.

---

## Example 1: Expanding Circle

**Problem**: The radius of a circle is increasing at 3 cm/sec. How fast is the area increasing when the radius is 10 cm?

---

**Step 1: Identify information**

Given: $\\frac{dr}{dt} = 3$ cm/sec (radius increasing)

Find: $\\frac{dA}{dt}$ when $r = 10$ cm

---

**Step 2: Write equation relating variables**

$$A = \\pi r^2$$

---

**Step 3: Differentiate with respect to time**

$$\\frac{dA}{dt} = \\frac{d}{dt}[\\pi r^2]$$

$$\\frac{dA}{dt} = \\pi \\cdot 2r \\cdot \\frac{dr}{dt}$$

$$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$$

---

**Step 4: Substitute known values**

When $r = 10$ and $\\frac{dr}{dt} = 3$:

$$\\frac{dA}{dt} = 2\\pi(10)(3) = 60\\pi \\text{ cm}^2/\\text{sec}$$

**Answer**: The area is increasing at $60\\pi \\approx 188.5$ square cm per second.

---

## Example 2: Ladder Sliding Down Wall

**Problem**: A 13-foot ladder is leaning against a wall. The bottom is being pulled away from the wall at 2 ft/sec. How fast is the top sliding down when the bottom is 5 feet from the wall?

---

**Step 1: Draw and identify**

Let $x$ = distance from wall to bottom of ladder

Let $y$ = height of top of ladder on wall

Given: $\\frac{dx}{dt} = 2$ ft/sec (bottom moving away)

Find: $\\frac{dy}{dt}$ when $x = 5$ ft

---

**Step 2: Write equation**

By Pythagorean theorem:

$$x^2 + y^2 = 13^2 = 169$$

---

**Step 3: Find $y$ when $x = 5$**

$$5^2 + y^2 = 169$$
$$y^2 = 144$$
$$y = 12$$ feet

---

**Step 4: Differentiate with respect to time**

$$\\frac{d}{dt}[x^2 + y^2] = \\frac{d}{dt}[169]$$

$$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$$

---

**Step 5: Substitute and solve**

When $x = 5$, $y = 12$, and $\\frac{dx}{dt} = 2$:

$$2(5)(2) + 2(12)\\frac{dy}{dt} = 0$$

$$20 + 24\\frac{dy}{dt} = 0$$

$$\\frac{dy}{dt} = -\\frac{20}{24} = -\\frac{5}{6}$$ ft/sec

**Answer**: The top is sliding down at $\\frac{5}{6}$ ft/sec (negative means decreasing).

---

## Common Formulas for Related Rates

### Geometry Formulas

**Circle**:
- Area: $A = \\pi r^2$
- Circumference: $C = 2\\pi r$

**Sphere**:
- Volume: $V = \\frac{4}{3}\\pi r^3$
- Surface Area: $S = 4\\pi r^2$

**Cone**:
- Volume: $V = \\frac{1}{3}\\pi r^2 h$

**Cylinder**:
- Volume: $V = \\pi r^2 h$

**Triangle**:
- Area: $A = \\frac{1}{2}bh$

**Pythagorean Theorem**: $a^2 + b^2 = c^2$

**Similar Triangles**: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$

---

## ⚠️ Common Mistakes

### Mistake 1: Substituting Too Early
❌ Substitute values before differentiating
✅ Differentiate first, then substitute

### Mistake 2: Wrong Signs
If a quantity is **decreasing**, its rate is **negative**!

### Mistake 3: Forgetting Chain Rule
When differentiating $r^2$ with respect to $t$: $\\frac{d}{dt}[r^2] = 2r\\frac{dr}{dt}$

### Mistake 4: Units
Always include units in your answer! (ft/sec, cm³/min, etc.)

### Mistake 5: Missing the Relationship
Make sure your equation actually relates the variables in the problem.

---

## Problem Types

### Type 1: Area and Volume
Expanding/shrinking circles, spheres, cones, etc.

**Key**: Use geometry formulas and differentiate with respect to time.

### Type 2: Pythagorean Relationships
Ladders, shadows, moving vehicles, etc.

**Key**: Set up right triangle and use $a^2 + b^2 = c^2$

### Type 3: Similar Triangles
Shadows, conical tanks with changing water levels, etc.

**Key**: Set up proportion using similar triangles, then differentiate.

### Type 4: Distance and Position
Two objects moving, finding rate of change of distance between them.

**Key**: Use distance formula or Pythagorean theorem.

---

## Tips for Success

### Before Differentiating:
1. **Draw** a clear diagram
2. **Label** variables that change with time
3. **Label** constants (like ladder length)
4. **Write** the equation relating variables

### When Differentiating:
1. **Differentiate** the entire equation with respect to $t$
2. **Use Chain Rule** for every variable
3. **Don't substitute** until after differentiating

### After Differentiating:
1. **Substitute** known values
2. **Solve** for the unknown rate
3. **Check** the sign (increasing or decreasing?)
4. **Include** proper units

---

## Word Problem Clues

Certain phrases tell you what rate is given or asked:

- "increasing at..." → positive rate
- "decreasing at..." → negative rate  
- "how fast is..." → find a derivative
- "at the instant when..." → specific value to substitute
- "at what rate..." → find a derivative
- "constant rate" → the rate doesn't change

---

## 📝 Practice Strategy

1. **Read carefully** and identify what's given and what's asked
2. **Draw** and label everything
3. **Find** the equation relating your variables
4. **Differentiate** with respect to time (use implicit differentiation)
5. **Substitute** values at the specific instant
6. **Solve** for the unknown rate
7. **Check** sign and units
`,
      exampleProblems: {
        create: [
          {
            question: 'A spherical balloon is being inflated at a rate of 100 cubic inches per minute. How fast is the radius increasing when the radius is 5 inches?',
            solution: `**Step 1: Identify information**

Given: $\\frac{dV}{dt} = 100$ in³/min (volume increasing)

Find: $\\frac{dr}{dt}$ when $r = 5$ inches

---

**Step 2: Write volume formula for a sphere**

$$V = \\frac{4}{3}\\pi r^3$$

---

**Step 3: Differentiate with respect to time**

$$\\frac{dV}{dt} = \\frac{d}{dt}\\left[\\frac{4}{3}\\pi r^3\\right]$$

$$\\frac{dV}{dt} = \\frac{4}{3}\\pi \\cdot 3r^2 \\cdot \\frac{dr}{dt}$$

$$\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$$

---

**Step 4: Substitute known values**

When $r = 5$ and $\\frac{dV}{dt} = 100$:

$$100 = 4\\pi(5)^2\\frac{dr}{dt}$$

$$100 = 4\\pi(25)\\frac{dr}{dt}$$

$$100 = 100\\pi\\frac{dr}{dt}$$

---

**Step 5: Solve for $\\frac{dr}{dt}$**

$$\\frac{dr}{dt} = \\frac{100}{100\\pi} = \\frac{1}{\\pi}$$

**Answer**: The radius is increasing at $\\frac{1}{\\pi} \\approx 0.318$ inches per minute.`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'A water tank has the shape of an inverted cone with base radius 2 meters and height 4 meters. If water is being pumped into the tank at 2 cubic meters per minute, find the rate at which the water level is rising when the water is 3 meters deep.',
            solution: `**Step 1: Identify information**

Given: $\\frac{dV}{dt} = 2$ m³/min (volume increasing)

Find: $\\frac{dh}{dt}$ when $h = 3$ meters

Tank dimensions: radius = 2 m, height = 4 m

---

**Step 2: Set up volume formula**

Volume of cone: $V = \\frac{1}{3}\\pi r^2 h$

But $r$ and $h$ both vary! We need to eliminate one variable.

---

**Step 3: Use similar triangles**

The cone and the water always have the same shape, so:

$$\\frac{r}{h} = \\frac{2}{4} = \\frac{1}{2}$$

Therefore: $r = \\frac{h}{2}$

---

**Step 4: Substitute into volume formula**

$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi\\left(\\frac{h}{2}\\right)^2 h$$

$$V = \\frac{1}{3}\\pi \\cdot \\frac{h^2}{4} \\cdot h = \\frac{\\pi h^3}{12}$$

---

**Step 5: Differentiate with respect to time**

$$\\frac{dV}{dt} = \\frac{\\pi}{12} \\cdot 3h^2 \\cdot \\frac{dh}{dt}$$

$$\\frac{dV}{dt} = \\frac{\\pi h^2}{4}\\frac{dh}{dt}$$

---

**Step 6: Substitute and solve**

When $h = 3$ and $\\frac{dV}{dt} = 2$:

$$2 = \\frac{\\pi(3)^2}{4}\\frac{dh}{dt}$$

$$2 = \\frac{9\\pi}{4}\\frac{dh}{dt}$$

$$\\frac{dh}{dt} = \\frac{2 \\cdot 4}{9\\pi} = \\frac{8}{9\\pi}$$

**Answer**: The water level is rising at $\\frac{8}{9\\pi} \\approx 0.283$ meters per minute.`,
            difficulty: Difficulty.HARD,
            order: 2,
          },
          {
            question: 'Two cars start from the same point. Car A travels north at 50 mph and Car B travels east at 40 mph. How fast is the distance between them increasing 2 hours later?',
            solution: `**Step 1: Draw and identify**

After $t$ hours:
- Car A is $50t$ miles north
- Car B is $40t$ miles east
- Let $z$ = distance between them

Given: $\\frac{dx}{dt} = 40$ mph (Car B going east)
       $\\frac{dy}{dt} = 50$ mph (Car A going north)

Find: $\\frac{dz}{dt}$ when $t = 2$ hours

---

**Step 2: Set up relationship (Pythagorean theorem)**

Let $x$ = distance Car B has traveled (east)

Let $y$ = distance Car A has traveled (north)

$$x^2 + y^2 = z^2$$

---

**Step 3: Find positions at $t = 2$ hours**

$x = 40(2) = 80$ miles

$y = 50(2) = 100$ miles

$z = \\sqrt{80^2 + 100^2} = \\sqrt{6400 + 10000} = \\sqrt{16400} = 20\\sqrt{41}$ miles

---

**Step 4: Differentiate with respect to time**

$$\\frac{d}{dt}[x^2 + y^2] = \\frac{d}{dt}[z^2]$$

$$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 2z\\frac{dz}{dt}$$

Divide by 2:

$$x\\frac{dx}{dt} + y\\frac{dy}{dt} = z\\frac{dz}{dt}$$

---

**Step 5: Substitute values**

$$80(40) + 100(50) = 20\\sqrt{41}\\frac{dz}{dt}$$

$$3200 + 5000 = 20\\sqrt{41}\\frac{dz}{dt}$$

$$8200 = 20\\sqrt{41}\\frac{dz}{dt}$$

---

**Step 6: Solve for $\\frac{dz}{dt}$**

$$\\frac{dz}{dt} = \\frac{8200}{20\\sqrt{41}} = \\frac{410}{\\sqrt{41}} = \\frac{410\\sqrt{41}}{41} = 10\\sqrt{41}$$

**Answer**: The distance between the cars is increasing at $10\\sqrt{41} \\approx 64.0$ mph.`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the most important rule for related rates problems?',
            back: 'Do NOT substitute values until AFTER you differentiate! Differentiate the equation first, then plug in the given values.',
            hint: 'Think about the order of operations',
          },
          {
            front: 'What does $\\frac{dV}{dt} = 5$ m³/min mean?',
            back: 'The volume is increasing at a rate of 5 cubic meters per minute. The derivative represents a rate of change with respect to time.',
            hint: 'The derivative is a rate',
          },
          {
            front: 'What are the 6 steps for solving related rates problems?',
            back: '1. Draw picture 2. Identify knowns/unknowns 3. Write equation 4. Differentiate w.r.t. time 5. Substitute values 6. Solve for unknown rate',
            hint: 'Think of the systematic approach',
          },
          {
            front: 'If a quantity is decreasing, what sign does its rate have?',
            back: 'Negative. For example, if water is draining from a tank, $\\frac{dV}{dt} < 0$ (negative rate).',
            hint: 'Decreasing means the derivative is negative',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 Advanced Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  13. Implicit Differentiation')
  console.log('  14. Related Rates')
  console.log('\n💡 Ready to continue with more topics!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
