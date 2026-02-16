import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Creating more micro-lessons for Limits (Part 2)...')

  // Find the Limits category
  const category = await prisma.category.findFirst({
    where: { slug: 'limits' }
  })

  if (!category) {
    throw new Error('Limits category not found.')
  }

  // Delete any existing topics with these slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: ['one-sided-limits-in-detail', 'direct-substitution-method', 'factoring-method-limits', 'rationalizing-technique-limits']
      }
    }
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // 5. One-Sided Limits in Depth
  const topic5 = await prisma.topic.create({
    data: {
      title: 'One-Sided Limits in Detail',
      slug: 'one-sided-limits-in-detail',
      description: 'Understanding left-hand and right-hand limits and when they matter',
      order: 5,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## One-Sided Limits Explained

Sometimes a function behaves differently depending on which direction you approach a point. One-sided limits let us describe this precisely.

### Left-Hand Limit

The **left-hand limit** examines the function as we approach from the **left** (smaller values):

$$\\lim_{x \\to a^-} f(x) = L$$

> Think of it as: "What happens as we walk toward a from the left side of the number line?"

**Key Points:**
- The superscript **-** means "from below" or "from the left"
- We only look at x-values **less than** a
- Example: approaching x = 3 from values like 2.9, 2.99, 2.999...

### Right-Hand Limit

The **right-hand limit** examines the function as we approach from the **right** (larger values):

$$\\lim_{x \\to a^+} f(x) = L$$

> Think of it as: "What happens as we walk toward a from the right side of the number line?"

**Key Points:**
- The superscript **+** means "from above" or "from the right"
- We only look at x-values **greater than** a
- Example: approaching x = 3 from values like 3.1, 3.01, 3.001...

### The Big Rule

> **For a two-sided limit to exist, both one-sided limits must exist AND be equal!**

$$\\lim_{x \\to a} f(x) = L \\text{ if and only if } \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = L$$

### Example: When One-Sided Limits Differ

Consider a piecewise function:

$$f(x) = \\begin{cases} x + 1 & \\text{if } x < 2 \\\\ x + 5 & \\text{if } x \\geq 2 \\end{cases}$$

**From the left** (using $x + 1$):
$$\\lim_{x \\to 2^-} f(x) = 2 + 1 = 3$$

**From the right** (using $x + 5$):
$$\\lim_{x \\to 2^+} f(x) = 2 + 5 = 7$$

Since $3 \\neq 7$, the two-sided limit **does not exist**!

$$\\lim_{x \\to 2} f(x) = \\text{DNE}$$

### Why This Matters

One-sided limits are crucial for:
- **Piecewise functions** that change formula at a point
- **Functions with jumps** (discontinuities)
- **Rational functions** near vertical asymptotes
- **Absolute value functions** at the vertex

### Visual Interpretation

On a graph:
- **Left-hand limit**: Cover everything to the right of a, look where the curve is heading
- **Right-hand limit**: Cover everything to the left of a, look where the curve is heading
- **If they point to different heights**, the two-sided limit DNE
`,
      exampleProblems: {
        create: [
          {
            question: 'Find $\\lim_{x \\to 3^-} f(x)$ and $\\lim_{x \\to 3^+} f(x)$ where $f(x) = \\begin{cases} 2x & \\text{if } x < 3 \\\\ x^2 & \\text{if } x \\geq 3 \\end{cases}$',
            solution: `**Left-hand limit** (approaching from x < 3):

When x < 3, we use the formula $f(x) = 2x$

$$\\lim_{x \\to 3^-} f(x) = \\lim_{x \\to 3^-} 2x = 2(3) = 6$$

**Right-hand limit** (approaching from x ≥ 3):

When x ≥ 3, we use the formula $f(x) = x^2$

$$\\lim_{x \\to 3^+} f(x) = \\lim_{x \\to 3^+} x^2 = 3^2 = 9$$

**Conclusion:**

Since $\\lim_{x \\to 3^-} f(x) = 6$ and $\\lim_{x \\to 3^+} f(x) = 9$, and $6 \\neq 9$:

$$\\lim_{x \\to 3} f(x) = \\text{DNE}$$

The function has a **jump discontinuity** at x = 3.`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Given $g(x) = |x - 5|$, find $\\lim_{x \\to 5^-} \\frac{g(x)}{x - 5}$ and $\\lim_{x \\to 5^+} \\frac{g(x)}{x - 5}$',
            solution: `First, let's rewrite the absolute value as a piecewise function:

$$|x - 5| = \\begin{cases} -(x - 5) = 5 - x & \\text{if } x < 5 \\\\ x - 5 & \\text{if } x \\geq 5 \\end{cases}$$

**Left-hand limit** (x < 5):

$$\\lim_{x \\to 5^-} \\frac{|x - 5|}{x - 5} = \\lim_{x \\to 5^-} \\frac{5 - x}{x - 5} = \\lim_{x \\to 5^-} \\frac{-(x - 5)}{x - 5} = \\lim_{x \\to 5^-} (-1) = -1$$

**Right-hand limit** (x ≥ 5):

$$\\lim_{x \\to 5^+} \\frac{|x - 5|}{x - 5} = \\lim_{x \\to 5^+} \\frac{x - 5}{x - 5} = \\lim_{x \\to 5^+} 1 = 1$$

**Result:**
- Left-hand limit: **-1**
- Right-hand limit: **1**
- Two-sided limit: **DNE** (because -1 ≠ 1)`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'For $\\lim_{x \\to a} f(x)$ to exist, what condition must the one-sided limits satisfy?',
            back: 'Both one-sided limits must exist and be equal: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)$'
          },
          {
            front: 'When evaluating a left-hand limit $\\lim_{x \\to a^-} f(x)$ for a piecewise function, which piece do you use?',
            back: 'Use the piece of the function that applies when x < a (values less than a)'
          },
          {
            front: 'What type of discontinuity occurs when one-sided limits exist but are not equal?',
            back: 'A jump discontinuity'
          }
        ]
      }
    }
  })

  // 6. Direct Substitution Method
  const topic6 = await prisma.topic.create({
    data: {
      title: 'Direct Substitution Method',
      slug: 'direct-substitution-method',
      description: 'The simplest limit technique: when you can just plug in the value',
      order: 6,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Direct Substitution Method

The easiest way to find a limit? **Just plug in the number!**

### When It Works

Direct substitution works when the function is **continuous** at the point. This includes:

- **Polynomial functions**: $x^2$, $3x^3 - 2x + 1$, etc.
- **Rational functions** (when denominator ≠ 0)
- **Radical functions** (when defined)
- **Trigonometric functions** (at most points)
- **Exponential and logarithmic functions**

> If you can evaluate $f(a)$ without any problems, then $\\lim_{x \\to a} f(x) = f(a)$

### The Process

To find $\\lim_{x \\to a} f(x)$:

1. **Try substituting** x = a directly into f(x)
2. **If you get a number** → That's your answer! ✓
3. **If you get $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$**, etc. → Need a different technique

### Example 1: Polynomial

Find $\\lim_{x \\to 2} (x^2 + 3x - 1)$

**Solution:**
Just substitute x = 2:

$$\\lim_{x \\to 2} (x^2 + 3x - 1) = (2)^2 + 3(2) - 1 = 4 + 6 - 1 = 9$$

✓ Answer: **9**

### Example 2: Rational Function (Works)

Find $\\lim_{x \\to 3} \\frac{x + 1}{x - 1}$

**Solution:**
Substitute x = 3:

$$\\lim_{x \\to 3} \\frac{x + 1}{x - 1} = \\frac{3 + 1}{3 - 1} = \\frac{4}{2} = 2$$

✓ Answer: **2**

### Example 3: When It Fails

Find $\\lim_{x \\to 1} \\frac{x - 1}{x^2 - 1}$

**Attempt:**
$$\\frac{1 - 1}{1^2 - 1} = \\frac{0}{0}$$

✗ This is **indeterminate**! Direct substitution doesn't work here.

> When you get $\\frac{0}{0}$, you need algebraic manipulation (factoring, rationalizing, etc.)

### Indeterminate Forms

These special cases mean direct substitution has **failed**:

| Form | What to Do |
|------|------------|
| $\\frac{0}{0}$ | Factor, simplify, rationalize |
| $\\frac{\\infty}{\\infty}$ | Divide by highest power |
| $0 \\cdot \\infty$ | Rewrite as a fraction |
| $\\infty - \\infty$ | Combine terms differently |

We'll cover techniques for these in upcoming lessons!

### Quick Check Method

**Ask yourself**: "Can I safely plug in this number?"

- Is the function defined there? → Try it!
- Does the denominator become zero? → Can't use direct substitution
- Is there a square root of a negative? → Can't use direct substitution
- Otherwise → Go for it!

### Practice Tip

> Always **try direct substitution first**. It's the fastest method when it works!

If you get a real number, you're done. If you get an indeterminate form, move on to other techniques.
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\lim_{x \\to 4} (2x^2 - 5x + 3)$ using direct substitution.',
            solution: `Since this is a polynomial, we can substitute directly:

$$\\lim_{x \\to 4} (2x^2 - 5x + 3)$$

Substitute x = 4:

$$= 2(4)^2 - 5(4) + 3$$
$$= 2(16) - 20 + 3$$
$$= 32 - 20 + 3$$
$$= 15$$

**Answer: 15**`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'Try to evaluate $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$ using direct substitution. What happens?',
            solution: `Let's try substituting x = 5:

$$\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5} = \\frac{5^2 - 25}{5 - 5} = \\frac{25 - 25}{0} = \\frac{0}{0}$$

**Result: Indeterminate form $\\frac{0}{0}$**

Direct substitution **fails** because we get an indeterminate form.

To actually solve this, we need to factor the numerator:

$$\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5} = \\lim_{x \\to 5} \\frac{(x-5)(x+5)}{x - 5} = \\lim_{x \\to 5} (x + 5) = 10$$

The limit exists and equals **10**, but we couldn't find it with direct substitution alone.`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'When can you use direct substitution to evaluate a limit?',
            back: 'When the function is continuous at that point (you can plug in the value without any issues)'
          },
          {
            front: 'What does it mean when you get $\\frac{0}{0}$ after direct substitution?',
            back: 'It\'s an indeterminate form, meaning you need to use algebraic techniques like factoring or rationalizing'
          },
          {
            front: 'What is the first method you should always try when evaluating a limit?',
            back: 'Direct substitution - plug in the value and see if you get a real number'
          }
        ]
      }
    }
  })

  // 7. Factoring to Evaluate Limits
  const topic7 = await prisma.topic.create({
    data: {
      title: 'Factoring Method for Limits',
      slug: 'factoring-method-limits',
      description: 'Use factoring to simplify and evaluate limits with indeterminate forms',
      order: 7,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Solving Limits by Factoring

When direct substitution gives you $\\frac{0}{0}$, **factoring** is often your best friend!

### The Problem

You try to evaluate $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ and get:

$$\\frac{f(a)}{g(a)} = \\frac{0}{0}$$

This means **both the numerator and denominator have (x - a) as a factor**.

### The Solution

1. **Factor** both the numerator and denominator
2. **Cancel** the common factor (x - a)
3. **Re-evaluate** using direct substitution

> The key insight: $(x - a)$ is causing the problem, so eliminate it!

### Example 1: Basic Factoring

Find $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$

**Step 1: Try direct substitution**
$$\\frac{2^2 - 4}{2 - 2} = \\frac{0}{0}$$ ← Indeterminate!

**Step 2: Factor the numerator**
$$x^2 - 4 = (x - 2)(x + 2)$$

**Step 3: Rewrite and cancel**
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2} = \\lim_{x \\to 2} (x + 2)$$

**Step 4: Now use direct substitution**
$$= 2 + 2 = 4$$

**Answer: 4**

### Why Can We Cancel?

> We're evaluating the limit **as x approaches 2**, not **at x = 2**.

Since $x \\neq 2$ during the approach, we can safely divide by $(x - 2)$.

### Example 2: Factor Both Parts

Find $\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 5x + 6}$

**Step 1: Check for $\\frac{0}{0}$**
$$\\frac{9 - 9}{9 - 15 + 6} = \\frac{0}{0}$$ ✓

**Step 2: Factor everything**
- Numerator: $x^2 - 9 = (x - 3)(x + 3)$
- Denominator: $x^2 - 5x + 6 = (x - 3)(x - 2)$

**Step 3: Cancel common factor**
$$\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{(x-3)(x-2)} = \\lim_{x \\to 3} \\frac{x + 3}{x - 2}$$

**Step 4: Direct substitution**
$$= \\frac{3 + 3}{3 - 2} = \\frac{6}{1} = 6$$

**Answer: 6**

### Common Factoring Patterns

| Expression | Factored Form |
|------------|---------------|
| $x^2 - a^2$ | $(x - a)(x + a)$ |
| $x^2 + bx + c$ | Find two numbers that multiply to c, add to b |
| $x^3 - a^3$ | $(x - a)(x^2 + ax + a^2)$ |
| $x^3 + a^3$ | $(x + a)(x^2 - ax + a^2)$ |

### Strategy Summary

1. **Always try direct substitution first**
2. **If you get $\\frac{0}{0}$, factor!**
3. **Look for common factors to cancel**
4. **Try direct substitution again** on the simplified form
5. **Success!** ✓

### What If Factoring Doesn't Work?

If you still get $\\frac{0}{0}$ after factoring, try:
- Rationalizing (for radicals)
- Multiplying by conjugates
- L'Hôpital's Rule (advanced)
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$',
            solution: `**Step 1: Try direct substitution**

$$\\frac{5^2 - 25}{5 - 5} = \\frac{0}{0}$$

This is indeterminate, so we need to factor.

**Step 2: Factor the numerator**

$$x^2 - 25 = (x - 5)(x + 5)$$

This is a difference of squares pattern.

**Step 3: Rewrite and cancel**

$$\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5} = \\lim_{x \\to 5} \\frac{(x-5)(x+5)}{x - 5}$$

Cancel the common factor $(x - 5)$:

$$= \\lim_{x \\to 5} (x + 5)$$

**Step 4: Direct substitution**

$$= 5 + 5 = 10$$

**Answer: 10**`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'Evaluate $\\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}$ (This is important for derivatives!)',
            solution: `**Step 1: Expand the numerator**

$$(x + h)^2 - x^2 = x^2 + 2xh + h^2 - x^2 = 2xh + h^2$$

**Step 2: Rewrite the limit**

$$\\lim_{h \\to 0} \\frac{2xh + h^2}{h}$$

**Step 3: Factor out h from the numerator**

$$\\lim_{h \\to 0} \\frac{h(2x + h)}{h}$$

**Step 4: Cancel the common factor**

$$\\lim_{h \\to 0} (2x + h)$$

**Step 5: Direct substitution**

$$= 2x + 0 = 2x$$

**Answer: 2x**

Note: This limit is actually the derivative of $f(x) = x^2$!`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'When you get $\\frac{0}{0}$ from direct substitution, what algebraic technique should you try first?',
            back: 'Factoring - both the numerator and denominator likely have a common factor that can be cancelled'
          },
          {
            front: 'Why can we cancel the factor $(x - a)$ when evaluating $\\lim_{x \\to a}$?',
            back: 'Because we\'re evaluating the limit as x approaches a, not at x = a, so x ≠ a during the approach'
          },
          {
            front: 'What is the factored form of $x^2 - a^2$?',
            back: '$(x - a)(x + a)$ - this is the difference of squares pattern'
          }
        ]
      }
    }
  })

  // 8. Rationalizing Technique
  const topic8 = await prisma.topic.create({
    data: {
      title: 'Rationalizing to Evaluate Limits',
      slug: 'rationalizing-technique-limits',
      description: 'Use conjugate multiplication to handle limits with radicals',
      order: 8,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Rationalizing Technique

When you have **square roots** or other radicals causing $\\frac{0}{0}$, **multiply by the conjugate**!

### What's a Conjugate?

For an expression with a radical:

| Expression | Conjugate |
|------------|-----------|
| $\\sqrt{x} + a$ | $\\sqrt{x} - a$ |
| $\\sqrt{x} - a$ | $\\sqrt{x} + a$ |
| $a + \\sqrt{x}$ | $a - \\sqrt{x}$ |

> The conjugate has the **same terms** but the **opposite sign** in the middle.

### Why It Works

When you multiply conjugates, you get a **difference of squares**:

$$(a + b)(a - b) = a^2 - b^2$$

This eliminates the radical!

### The Process

1. **Identify** which part has the radical
2. **Multiply** by the conjugate over itself (= 1)
3. **Expand** using difference of squares
4. **Simplify** and cancel
5. **Evaluate** the limit

### Example 1: Basic Rationalization

Find $\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x}$

**Step 1: Try direct substitution**
$$\\frac{\\sqrt{0 + 4} - 2}{0} = \\frac{2 - 2}{0} = \\frac{0}{0}$$ ← Indeterminate!

**Step 2: Multiply by the conjugate**

The conjugate of $\\sqrt{x + 4} - 2$ is $\\sqrt{x + 4} + 2$

$$\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x} \\cdot \\frac{\\sqrt{x + 4} + 2}{\\sqrt{x + 4} + 2}$$

**Step 3: Multiply the numerator (difference of squares)**

$$(\\sqrt{x + 4} - 2)(\\sqrt{x + 4} + 2) = (\\sqrt{x + 4})^2 - 2^2 = (x + 4) - 4 = x$$

**Step 4: Rewrite**

$$\\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x + 4} + 2)}$$

**Step 5: Cancel x**

$$\\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 4} + 2}$$

**Step 6: Direct substitution**

$$= \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{2 + 2} = \\frac{1}{4}$$

**Answer: $\\frac{1}{4}$**

### Example 2: Conjugate in Denominator

Find $\\lim_{h \\to 0} \\frac{5}{\\sqrt{25 + h} - 5}$

**Step 1: Check**
$$\\frac{5}{\\sqrt{25} - 5} = \\frac{5}{0}$$ ← Undefined, but let's rationalize!

**Step 2: Multiply by conjugate**

$$\\lim_{h \\to 0} \\frac{5}{\\sqrt{25 + h} - 5} \\cdot \\frac{\\sqrt{25 + h} + 5}{\\sqrt{25 + h} + 5}$$

**Step 3: Simplify denominator**

$$= \\lim_{h \\to 0} \\frac{5(\\sqrt{25 + h} + 5)}{(25 + h) - 25}$$

$$= \\lim_{h \\to 0} \\frac{5(\\sqrt{25 + h} + 5)}{h}$$

Wait, this doesn't help directly. Let's think about what happens:

As $h \\to 0^+$: numerator → $5(5 + 5) = 50$, denominator → $0^+$

This limit approaches $+\\infty$!

### When to Use This Technique

✓ **Use rationalizing when:**
- You see square roots or radicals
- Direct substitution gives $\\frac{0}{0}$
- The radical is in the numerator or denominator

✗ **Don't use it when:**
- No radicals present (use factoring instead)
- The radical isn't causing the problem

### Key Formula to Remember

$$(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b$$

This eliminates both radicals at once!

### Practice Strategy

1. Spot the radical
2. Write down its conjugate
3. Multiply top and bottom
4. Use $(a+b)(a-b) = a^2 - b^2$
5. Simplify and evaluate
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\lim_{x \\to 9} \\frac{x - 9}{\\sqrt{x} - 3}$',
            solution: `**Step 1: Try direct substitution**

$$\\frac{9 - 9}{\\sqrt{9} - 3} = \\frac{0}{0}$$

Indeterminate form - we need to rationalize!

**Step 2: Multiply by the conjugate of the denominator**

The conjugate of $\\sqrt{x} - 3$ is $\\sqrt{x} + 3$

$$\\lim_{x \\to 9} \\frac{x - 9}{\\sqrt{x} - 3} \\cdot \\frac{\\sqrt{x} + 3}{\\sqrt{x} + 3}$$

**Step 3: Multiply denominator (difference of squares)**

$$(\\sqrt{x} - 3)(\\sqrt{x} + 3) = (\\sqrt{x})^2 - 3^2 = x - 9$$

**Step 4: Rewrite the expression**

$$\\lim_{x \\to 9} \\frac{(x - 9)(\\sqrt{x} + 3)}{x - 9}$$

**Step 5: Cancel $(x - 9)$**

$$\\lim_{x \\to 9} (\\sqrt{x} + 3)$$

**Step 6: Direct substitution**

$$= \\sqrt{9} + 3 = 3 + 3 = 6$$

**Answer: 6**`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x}$',
            solution: `This one has radicals in both terms! Let's rationalize.

**Step 1: Multiply by conjugate**

Conjugate of $\\sqrt{1 + x} - \\sqrt{1 - x}$ is $\\sqrt{1 + x} + \\sqrt{1 - x}$

$$\\lim_{x \\to 0} \\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x} \\cdot \\frac{\\sqrt{1 + x} + \\sqrt{1 - x}}{\\sqrt{1 + x} + \\sqrt{1 - x}}$$

**Step 2: Multiply numerator**

$$(\\sqrt{1+x} - \\sqrt{1-x})(\\sqrt{1+x} + \\sqrt{1-x})$$
$$= (\\sqrt{1+x})^2 - (\\sqrt{1-x})^2$$
$$= (1 + x) - (1 - x)$$
$$= 1 + x - 1 + x = 2x$$

**Step 3: Rewrite**

$$\\lim_{x \\to 0} \\frac{2x}{x(\\sqrt{1 + x} + \\sqrt{1 - x})}$$

**Step 4: Cancel x**

$$\\lim_{x \\to 0} \\frac{2}{\\sqrt{1 + x} + \\sqrt{1 - x}}$$

**Step 5: Direct substitution**

$$= \\frac{2}{\\sqrt{1} + \\sqrt{1}} = \\frac{2}{1 + 1} = \\frac{2}{2} = 1$$

**Answer: 1**`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What is the conjugate of $\\sqrt{x} + 5$?',
            back: '$\\sqrt{x} - 5$ (same terms, opposite sign in the middle)'
          },
          {
            front: 'What happens when you multiply $(\\sqrt{a} + b)(\\sqrt{a} - b)$?',
            back: 'You get $a - b^2$ using the difference of squares formula, which eliminates the radical'
          },
          {
            front: 'When should you use the rationalizing technique for limits?',
            back: 'When you have radicals (square roots) and direct substitution gives an indeterminate form like $\\frac{0}{0}$'
          }
        ]
      }
    }
  })

  console.log('✅ Created 4 more micro-lessons for Limits!')
  console.log('📚 Topics created (Part 2):')
  console.log('   5. One-Sided Limits')
  console.log('   6. Direct Substitution')
  console.log('   7. Factoring Method for Limits')
  console.log('   8. Rationalizing to Evaluate Limits')
  console.log('\n💡 Continuing to build comprehensive Limits section!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
