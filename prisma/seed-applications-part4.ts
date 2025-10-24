import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Applications of Derivatives micro-lessons - Part 4...')

  // Get the Applications of Derivatives category
  const applicationsCategory = await prisma.category.upsert({
    where: { slug: 'applications-of-derivatives' },
    update: {},
    create: {
      slug: 'applications-of-derivatives',
      name: 'Applications of Derivatives',
      description: 'Using derivatives to solve real-world problems',
      order: 3,
      icon: '🎯',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'lhopitals-rule',
          'linear-approximation',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: L'Hôpital's Rule
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'lhopitals-rule',
      title: "L'Hôpital's Rule",
      description: 'Evaluating indeterminate forms using derivatives',
      order: 7,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 🔄 L'Hôpital's Rule

## What is L'Hôpital's Rule?

**L'Hôpital's Rule** (pronounced "low-pea-tahl") is a powerful technique for evaluating limits that result in **indeterminate forms** like $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$.

> **💡 Key Idea**: When direct substitution gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, take the derivative of the top and bottom separately, then try again!

---

## The Rule (Formal Statement)

Suppose $\\lim_{x \\to a} f(x) = 0$ and $\\lim_{x \\to a} g(x) = 0$ (or both approach $\\pm\\infty$).

If $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ exists, then:

$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

**Important**: This works for $x \\to a$, $x \\to a^+$, $x \\to a^-$, $x \\to \\infty$, or $x \\to -\\infty$!

---

## When to Use L'Hôpital's Rule

### Indeterminate Forms That Work

L'Hôpital's Rule applies **ONLY** to these forms:

1. $\\frac{0}{0}$ ← most common
2. $\\frac{\\infty}{\\infty}$ ← also very common

### Forms That DON'T Work Directly

These are NOT indeterminate forms for L'Hôpital's Rule:
- $\\frac{1}{0}$ (this is $\\pm\\infty$, not indeterminate)
- $\\frac{0}{\\infty}$ (this equals 0)
- $\\frac{\\infty}{0}$ (this is $\\pm\\infty$)

**But wait!** We can sometimes convert other indeterminate forms:
- $0 \\cdot \\infty$ → rewrite as $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$
- $\\infty - \\infty$ → combine and rewrite as a fraction
- $0^0$, $1^\\infty$, $\\infty^0$ → use logarithms first!

---

## How to Apply L'Hôpital's Rule

### Step-by-Step Process

**Step 1**: Try **direct substitution** first

**Step 2**: Check if you get $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$
- If YES → L'Hôpital's Rule applies!
- If NO → use another method

**Step 3**: Take derivatives of numerator and denominator **separately**
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

**Step 4**: Evaluate the new limit
- If you get a number, you're done!
- If you get $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ again, apply L'Hôpital's Rule again!
- If you get something else, stop and use a different method

---

## Example 1: Basic Application

Evaluate $\\lim_{x \\to 0} \\frac{\\sin x}{x}$

**Step 1: Direct substitution**

$$\\frac{\\sin 0}{0} = \\frac{0}{0}$$ ← indeterminate form!

---

**Step 2: Apply L'Hôpital's Rule**

Take derivatives of top and bottom separately:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{(\\sin x)'}{(x)'}$$

$$= \\lim_{x \\to 0} \\frac{\\cos x}{1}$$

---

**Step 3: Evaluate**

$$= \\frac{\\cos 0}{1} = \\frac{1}{1} = 1$$

**Answer**: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

---

## Example 2: Apply Twice

Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$

**First attempt: Direct substitution**

$$\\frac{1 - \\cos 0}{0^2} = \\frac{1-1}{0} = \\frac{0}{0}$$ ← use L'Hôpital's!

---

**Apply L'Hôpital's Rule (first time)**

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\frac{(1-\\cos x)'}{(x^2)'}$$

$$= \\lim_{x \\to 0} \\frac{\\sin x}{2x}$$

---

**Check: Direct substitution again**

$$\\frac{\\sin 0}{2(0)} = \\frac{0}{0}$$ ← still indeterminate!

---

**Apply L'Hôpital's Rule (second time)**

$$\\lim_{x \\to 0} \\frac{\\sin x}{2x} = \\lim_{x \\to 0} \\frac{(\\sin x)'}{(2x)'}$$

$$= \\lim_{x \\to 0} \\frac{\\cos x}{2}$$

$$= \\frac{\\cos 0}{2} = \\frac{1}{2}$$

**Answer**: $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$

---

## Example 3: Infinity Form

Evaluate $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$

**Step 1: Check the form**

As $x \\to \\infty$: $\\ln x \\to \\infty$ and $x \\to \\infty$

Form: $\\frac{\\infty}{\\infty}$ ← L'Hôpital's applies!

---

**Step 2: Apply L'Hôpital's Rule**

$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = \\lim_{x \\to \\infty} \\frac{(\\ln x)'}{(x)'}$$

$$= \\lim_{x \\to \\infty} \\frac{1/x}{1}$$

$$= \\lim_{x \\to \\infty} \\frac{1}{x} = 0$$

**Answer**: $\\lim_{x \\to \\infty} \\frac{\\ln x}{x} = 0$

**Interpretation**: Logarithms grow slower than linear functions!

---

## Converting Other Indeterminate Forms

### Form: $0 \\cdot \\infty$

**Strategy**: Rewrite as a fraction

$$\\lim_{x \\to 0^+} x \\ln x$$

This is $0 \\cdot (-\\infty)$ form.

Rewrite: $\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}$

Now it's $\\frac{-\\infty}{\\infty}$ form!

Apply L'Hôpital's:
$$= \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} \\frac{x^2}{-x} = \\lim_{x \\to 0^+} (-x) = 0$$

### Form: $\\infty - \\infty$

**Strategy**: Combine into a single fraction

$$\\lim_{x \\to 0^+} \\left(\\frac{1}{x} - \\frac{1}{\\sin x}\\right)$$

This is $\\infty - \\infty$ form.

Combine: $\\lim_{x \\to 0^+} \\frac{\\sin x - x}{x \\sin x}$

Now it's $\\frac{0}{0}$ form → use L'Hôpital's!

### Form: $1^\\infty$, $0^0$, $\\infty^0$

**Strategy**: Take natural log first, use L'Hôpital's, then exponentiate

$$\\lim_{x \\to 0^+} x^x$$

This is $0^0$ form.

Let $y = x^x$, then $\\ln y = x \\ln x$

Find $\\lim_{x \\to 0^+} \\ln y = \\lim_{x \\to 0^+} x \\ln x = 0$ (from earlier)

Therefore: $\\lim_{x \\to 0^+} y = e^0 = 1$

---

## Example: Exponential Form

Evaluate $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$

This is $1^\\infty$ form.

**Step 1: Take natural log**

Let $y = \\left(1 + \\frac{1}{x}\\right)^x$

$$\\ln y = x \\ln\\left(1 + \\frac{1}{x}\\right)$$

---

**Step 2: Evaluate limit of $\\ln y$**

$$\\lim_{x \\to \\infty} \\ln y = \\lim_{x \\to \\infty} x \\ln\\left(1 + \\frac{1}{x}\\right)$$

This is $\\infty \\cdot 0$ form.

Rewrite: $\\lim_{x \\to \\infty} \\frac{\\ln(1 + 1/x)}{1/x}$ (now $\\frac{0}{0}$ form)

---

**Step 3: Apply L'Hôpital's**

$$= \\lim_{x \\to \\infty} \\frac{\\frac{1}{1+1/x} \\cdot (-1/x^2)}{-1/x^2}$$

$$= \\lim_{x \\to \\infty} \\frac{1}{1+1/x} = 1$$

---

**Step 4: Exponentiate**

$$\\lim_{x \\to \\infty} y = e^{\\lim \\ln y} = e^1 = e$$

**Answer**: $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$

This is actually the **definition of $e$**! 🎉

---

## ⚠️ Common Mistakes

### Mistake 1: Using When It Doesn't Apply

**WRONG**: Using L'Hôpital's for $\\lim_{x \\to 0} \\frac{x}{1} = 0$

This is NOT indeterminate! Just substitute.

### Mistake 2: Taking Derivative of the Whole Fraction

**WRONG**: $\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]$ (using quotient rule)

**RIGHT**: $\\frac{f'(x)}{g'(x)}$ (derivatives separately!)

L'Hôpital's says take derivatives of top and bottom **separately**, not the derivative of the quotient!

### Mistake 3: Not Checking the Form

Always verify you have $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ before applying!

### Mistake 4: Applying Infinitely

If L'Hôpital's keeps giving $\\frac{0}{0}$, you might be in a loop. Try a different method!

### Mistake 5: Forgetting to Simplify

Sometimes simplifying algebraically is easier than using L'Hôpital's multiple times.

---

## When NOT to Use L'Hôpital's Rule

### Alternative 1: Algebra is Easier

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 4$$

Yes, L'Hôpital's would work, but factoring is simpler!

### Alternative 2: Standard Limits

You should know: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

Don't need L'Hôpital's every time!

### Alternative 3: The Form Doesn't Match

If you get $\\frac{5}{0}$, that's $\\infty$ (or $-\\infty$), not indeterminate!

---

## Quick Reference Chart

| Original Form | What to Do | Result Form |
|---------------|------------|-------------|
| $\\frac{0}{0}$ | L'Hôpital's directly | Apply rule |
| $\\frac{\\infty}{\\infty}$ | L'Hôpital's directly | Apply rule |
| $0 \\cdot \\infty$ | Rewrite as fraction | $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ |
| $\\infty - \\infty$ | Combine fractions | $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ |
| $1^\\infty$, $0^0$, $\\infty^0$ | Take ln first | $0 \\cdot \\infty$ → fraction |

---

## Growth Rates Using L'Hôpital's

L'Hôpital's Rule helps us compare growth rates:

**Logarithms grow slower than polynomials**:
$$\\lim_{x \\to \\infty} \\frac{\\ln x}{x^p} = 0 \\text{ for any } p > 0$$

**Polynomials grow slower than exponentials**:
$$\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\text{ for any } n$$

**Order from slowest to fastest**:
$$\\ln x \\ll x^p \\ll e^x \\ll x!$$

---

## Historical Note

Named after **Guillaume de l'Hôpital** (1661-1704), though it was actually discovered by his teacher **Johann Bernoulli**!

L'Hôpital paid Bernoulli to teach him calculus and share his discoveries. The rule appeared in L'Hôpital's book, the first calculus textbook ever published!

---

## 📝 Practice Strategy

1. **Always try direct substitution first** - might not be indeterminate!
2. **Check the form** - only $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$ work directly
3. **Convert other forms** to one of the two usable forms
4. **Take derivatives separately** - not the derivative of the quotient!
5. **Simplify when possible** - sometimes algebra is faster
6. **Be ready to apply multiple times** - but watch for loops
7. **For exponential forms**, take ln first, then exponentiate at the end
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$ using L\'Hôpital\'s Rule.',
            solution: `**Step 1: Direct substitution**

$$\\frac{e^0 - 1 - 0}{0^2} = \\frac{1 - 1 - 0}{0} = \\frac{0}{0}$$

Indeterminate form! ✓

---

**Step 2: Apply L'Hôpital's Rule (first time)**

Take derivatives of numerator and denominator separately:

Numerator: $(e^x - 1 - x)' = e^x - 1$

Denominator: $(x^2)' = 2x$

$$\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\lim_{x \\to 0} \\frac{e^x - 1}{2x}$$

---

**Step 3: Check the new limit**

$$\\frac{e^0 - 1}{2(0)} = \\frac{1-1}{0} = \\frac{0}{0}$$

Still indeterminate! Apply L'Hôpital's again.

---

**Step 4: Apply L'Hôpital's Rule (second time)**

Numerator: $(e^x - 1)' = e^x$

Denominator: $(2x)' = 2$

$$\\lim_{x \\to 0} \\frac{e^x - 1}{2x} = \\lim_{x \\to 0} \\frac{e^x}{2}$$

---

**Step 5: Evaluate**

$$= \\frac{e^0}{2} = \\frac{1}{2}$$

**Answer**: $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2} = \\frac{1}{2}$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Evaluate $\\lim_{x \\to \\infty} \\frac{x^2}{e^x}$ using L\'Hôpital\'s Rule. What does this tell you about growth rates?',
            solution: `**Step 1: Check the form**

As $x \\to \\infty$: numerator $x^2 \\to \\infty$ and denominator $e^x \\to \\infty$

Form: $\\frac{\\infty}{\\infty}$ ← L'Hôpital's applies!

---

**Step 2: Apply L'Hôpital's Rule (first time)**

$$\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = \\lim_{x \\to \\infty} \\frac{(x^2)'}{(e^x)'}$$

$$= \\lim_{x \\to \\infty} \\frac{2x}{e^x}$$

---

**Step 3: Check the form again**

As $x \\to \\infty$: $2x \\to \\infty$ and $e^x \\to \\infty$

Still $\\frac{\\infty}{\\infty}$ form!

---

**Step 4: Apply L'Hôpital's Rule (second time)**

$$\\lim_{x \\to \\infty} \\frac{2x}{e^x} = \\lim_{x \\to \\infty} \\frac{(2x)'}{(e^x)'}$$

$$= \\lim_{x \\to \\infty} \\frac{2}{e^x}$$

---

**Step 5: Evaluate**

$$= \\frac{2}{\\infty} = 0$$

**Answer**: $\\lim_{x \\to \\infty} \\frac{x^2}{e^x} = 0$

---

**Interpretation**:

Even though $x^2$ grows to infinity, $e^x$ grows **so much faster** that the ratio goes to 0.

**Growth rate conclusion**: Exponential functions grow faster than any polynomial!

In general: $\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0$ for any positive integer $n$.`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Evaluate $\\lim_{x \\to 0^+} (\\sin x)^x$ using L\'Hôpital\'s Rule.',
            solution: `**Step 1: Identify the form**

As $x \\to 0^+$: $\\sin x \\to 0^+$

So $(\\sin x)^x$ is the form $0^0$ (indeterminate!)

Can't use L'Hôpital's directly on this form.

---

**Step 2: Use logarithms**

Let $y = (\\sin x)^x$

Take natural log of both sides:
$$\\ln y = \\ln[(\\sin x)^x] = x \\ln(\\sin x)$$

---

**Step 3: Find limit of $\\ln y$**

$$\\lim_{x \\to 0^+} \\ln y = \\lim_{x \\to 0^+} x \\ln(\\sin x)$$

This is $0 \\cdot (-\\infty)$ form.

---

**Step 4: Rewrite as a fraction**

$$\\lim_{x \\to 0^+} x \\ln(\\sin x) = \\lim_{x \\to 0^+} \\frac{\\ln(\\sin x)}{1/x}$$

This is $\\frac{-\\infty}{\\infty}$ form → can use L'Hôpital's!

---

**Step 5: Apply L'Hôpital's Rule**

Numerator: $(\\ln(\\sin x))' = \\frac{1}{\\sin x} \\cdot \\cos x = \\frac{\\cos x}{\\sin x} = \\cot x$

Denominator: $(1/x)' = -1/x^2$

$$\\lim_{x \\to 0^+} \\frac{\\ln(\\sin x)}{1/x} = \\lim_{x \\to 0^+} \\frac{\\cot x}{-1/x^2}$$

$$= \\lim_{x \\to 0^+} \\frac{\\cos x}{\\sin x} \\cdot (-x^2)$$

$$= \\lim_{x \\to 0^+} \\frac{-x^2 \\cos x}{\\sin x}$$

---

**Step 6: Simplify and apply L'Hôpital's again**

$$= \\lim_{x \\to 0^+} \\frac{-x^2 \\cos x}{\\sin x} = \\lim_{x \\to 0^+} \\left(-x \\cdot \\frac{x\\cos x}{\\sin x}\\right)$$

Since $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, we have $\\lim_{x \\to 0} \\frac{x}{\\sin x} = 1$

$$= \\lim_{x \\to 0^+} (-x) \\cdot \\cos x \\cdot 1 = 0 \\cdot 1 = 0$$

---

**Step 7: Exponentiate to find $y$**

$$\\lim_{x \\to 0^+} \\ln y = 0$$

Therefore:
$$\\lim_{x \\to 0^+} y = e^0 = 1$$

**Answer**: $\\lim_{x \\to 0^+} (\\sin x)^x = 1$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What are the two indeterminate forms where L\'Hôpital\'s Rule applies directly?',
            back: '$\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$. For other indeterminate forms like $0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$, you must first convert them to one of these two forms.',
            hint: 'Both are fraction forms',
          },
          {
            front: 'State L\'Hôpital\'s Rule.',
            back: 'If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, then $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$ (if the right side exists). Take derivatives of top and bottom SEPARATELY!',
            hint: 'Derivatives of numerator and denominator separately',
          },
          {
            front: 'How do you handle the indeterminate form $0^0$ or $1^\\infty$ with L\'Hôpital\'s Rule?',
            back: 'Let $y$ equal the expression, take ln of both sides, find $\\lim \\ln y$ using L\'Hôpital\'s (converting to $0 \\cdot \\infty$ then to a fraction), then exponentiate: $\\lim y = e^{\\lim \\ln y}$.',
            hint: 'Use logarithms first',
          },
          {
            front: 'What common mistake do students make when applying L\'Hôpital\'s Rule?',
            back: 'Taking the derivative of the entire quotient using the quotient rule, instead of taking derivatives of numerator and denominator SEPARATELY. L\'Hôpital\'s says $\\frac{f\'(x)}{g\'(x)}$, NOT $(\\frac{f}{g})\'$!',
            hint: 'It\'s not the quotient rule',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Linear Approximation
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'linear-approximation',
      title: 'Linear Approximation',
      description: 'Using tangent lines to approximate function values',
      order: 8,
      categoryId: applicationsCategory.id,
      isPremium: false,
      textContent: `
# 📏 Linear Approximation

## What is Linear Approximation?

**Linear approximation** (also called **linearization**) uses the **tangent line** at a point to approximate function values nearby.

> **💡 Key Idea**: Near a point, a smooth curve looks almost like its tangent line! We can use this to estimate values.

---

## The Formula

The **linear approximation** of $f(x)$ near $x = a$ is:

$$L(x) = f(a) + f'(a)(x - a)$$

This is the equation of the **tangent line** at $(a, f(a))$!

### Point-Slope Form Connection

Recall the tangent line equation:
$$y - f(a) = f'(a)(x - a)$$

Solving for $y$:
$$y = f(a) + f'(a)(x - a)$$

This is exactly $L(x)$!

---

## Why It Works

### Geometric Interpretation

- The tangent line at $x = a$ has slope $f'(a)$
- It passes through the point $(a, f(a))$
- For $x$ close to $a$, the function $f(x)$ is close to the tangent line $L(x)$

**Visual**: Zoom in on any smooth curve → it looks like a straight line!

### The Approximation

For $x$ near $a$:
$$f(x) \\approx L(x) = f(a) + f'(a)(x - a)$$

The closer $x$ is to $a$, the better the approximation!

---

## How to Find Linear Approximation

### Step-by-Step Process

**Step 1**: Identify the function $f(x)$ and the point $a$

**Step 2**: Calculate $f(a)$ (the $y$-value at $a$)

**Step 3**: Find $f'(x)$ and calculate $f'(a)$ (the slope at $a$)

**Step 4**: Write the linear approximation:
$$L(x) = f(a) + f'(a)(x - a)$$

**Step 5**: Use $L(x)$ to estimate $f(x)$ for $x$ near $a$

---

## Example 1: Estimating a Square Root

Use linear approximation to estimate $\\sqrt{26}$.

**Step 1: Choose a nearby point**

$\\sqrt{25} = 5$ is easy to compute!

Let $f(x) = \\sqrt{x}$ and $a = 25$

We want to estimate $f(26)$ using $a = 25$

---

**Step 2: Calculate $f(a)$**

$$f(25) = \\sqrt{25} = 5$$

---

**Step 3: Find $f'(a)$**

$$f'(x) = \\frac{1}{2\\sqrt{x}}$$

$$f'(25) = \\frac{1}{2\\sqrt{25}} = \\frac{1}{2(5)} = \\frac{1}{10}$$

---

**Step 4: Write the linear approximation**

$$L(x) = f(25) + f'(25)(x - 25)$$

$$L(x) = 5 + \\frac{1}{10}(x - 25)$$

---

**Step 5: Estimate $\\sqrt{26}$**

$$\\sqrt{26} \\approx L(26) = 5 + \\frac{1}{10}(26 - 25)$$

$$= 5 + \\frac{1}{10}(1) = 5 + 0.1 = 5.1$$

**Answer**: $\\sqrt{26} \\approx 5.1$

**Check**: $\\sqrt{26} \\approx 5.099...$ (calculator) → Very close! ✓

---

## Example 2: Estimating a Trig Value

Use linear approximation to estimate $\\sin(0.1)$.

**Step 1: Choose a point**

Use $a = 0$ (since $\\sin 0$ is known)

Let $f(x) = \\sin x$ and $a = 0$

---

**Step 2: Calculate $f(0)$**

$$f(0) = \\sin 0 = 0$$

---

**Step 3: Find $f'(0)$**

$$f'(x) = \\cos x$$

$$f'(0) = \\cos 0 = 1$$

---

**Step 4: Linear approximation**

$$L(x) = 0 + 1(x - 0) = x$$

---

**Step 5: Estimate**

$$\\sin(0.1) \\approx L(0.1) = 0.1$$

**Answer**: $\\sin(0.1) \\approx 0.1$

**Check**: $\\sin(0.1) \\approx 0.0998...$ → Very close for small angles!

**This is why** $\\sin x \\approx x$ for small $x$ (in radians)!

---

## Differential Notation

### Alternative Form

We can write the linear approximation as:

$$\\Delta y \\approx dy$$

where:
- $\\Delta y = f(x) - f(a)$ (actual change)
- $dy = f'(a) \\cdot dx$ (approximate change)
- $dx = x - a$ (change in $x$)

### The Formula

$$f(x) \\approx f(a) + f'(a) \\cdot dx$$

This is the **same** as $L(x) = f(a) + f'(a)(x-a)$!

---

## Example 3: Using Differentials

The radius of a sphere is measured to be $r = 10$ cm with a possible error of $\\pm 0.1$ cm. Estimate the maximum error in the calculated volume.

**Step 1: Volume formula**

$$V = \\frac{4}{3}\\pi r^3$$

---

**Step 2: Find $dV$**

$$\\frac{dV}{dr} = 4\\pi r^2$$

$$dV = 4\\pi r^2 \\cdot dr$$

---

**Step 3: Plug in values**

$r = 10$ cm, $dr = \\pm 0.1$ cm

$$dV = 4\\pi (10)^2 (0.1) = 4\\pi (100)(0.1) = 40\\pi$$

$$dV \\approx 125.7 \\text{ cm}^3$$

**Answer**: The maximum error in volume is approximately $\\pm 126$ cm³.

---

**Step 4: Relative error**

$$\\frac{dV}{V} = \\frac{40\\pi}{\\frac{4}{3}\\pi(10)^3} = \\frac{40\\pi}{\\frac{4000\\pi}{3}} = \\frac{40 \\cdot 3}{4000} = \\frac{120}{4000} = 0.03$$

Relative error: 3%

---

## When Linear Approximation Works Best

### Good Approximations

Linear approximation is **most accurate** when:

1. $x$ is **very close** to $a$
2. The function is **smooth** (no corners or discontinuities)
3. The function doesn't curve too sharply (second derivative is small)

### Poor Approximations

Linear approximation can be **inaccurate** when:

1. $x$ is **far** from $a$
2. The function has **high curvature** (large second derivative)
3. There are discontinuities or sharp corners

---

## Error in Linear Approximation

The **error** is the difference between actual and approximate values:

$$E(x) = f(x) - L(x)$$

### Second Derivative Test

If $f''$ exists, the error is related to the second derivative:

$$E(x) \\approx \\frac{f''(a)}{2}(x-a)^2$$

**Key insight**: 
- Error grows like $(x-a)^2$ (quadratically)
- If $|f''|$ is large, the error is larger
- Error is always small when $x \\approx a$

---

## Applications of Linear Approximation

### Application 1: Mental Math

Estimate $\\sqrt{101}$:

$\\sqrt{100} = 10$, and $f'(100) = \\frac{1}{2\\sqrt{100}} = \\frac{1}{20}$

$$\\sqrt{101} \\approx 10 + \\frac{1}{20}(1) = 10.05$$

### Application 2: Physics

Small oscillations of a pendulum: $\\sin \\theta \\approx \\theta$ (for small angles)

This simplifies differential equations!

### Application 3: Engineering

Estimating how measurement errors propagate through calculations.

### Application 4: Economics

Marginal cost/revenue approximations using derivatives.

---

## Linear vs. Quadratic Approximation

### Linear (First Order)

$$L(x) = f(a) + f'(a)(x-a)$$

Uses tangent line (first derivative)

### Quadratic (Second Order)

$$Q(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2}(x-a)^2$$

Uses curvature (second derivative) → more accurate!

This leads to **Taylor series** (later topic)!

---

## ⚠️ Common Mistakes

### Mistake 1: Using Wrong Point

Choose $a$ where $f(a)$ and $f'(a)$ are **easy to compute**!

Don't use $a = 26$ to estimate $\\sqrt{26}$ → use $a = 25$!

### Mistake 2: Units in Error Problems

When finding $dV$, $dr$, etc., keep track of units!

### Mistake 3: Confusing $\\Delta y$ and $dy$

- $\\Delta y$ is the **actual** change (exact)
- $dy$ is the **approximate** change (using derivative)
- They're only approximately equal!

### Mistake 4: Using Far-Away Points

Linear approximation only works well when $x$ is **close** to $a$.

Don't use $a = 0$ to estimate $\\sin(1)$ → error is too large!

### Mistake 5: Wrong Derivative

Make sure to calculate $f'(a)$ correctly!

---

## Important Approximations to Know

### Small Angle Approximations (in radians!)

For $x$ near 0:
- $\\sin x \\approx x$
- $\\cos x \\approx 1$
- $\\tan x \\approx x$

### Exponential and Logarithm

For $x$ near 0:
- $e^x \\approx 1 + x$
- $\\ln(1+x) \\approx x$

### Power Functions

For $x$ near 1:
- $(1+x)^n \\approx 1 + nx$ (binomial approximation)

---

## The Big Picture

### From Local to Global

- **Local behavior**: Linear approximation uses tangent line (local info)
- **Global behavior**: To approximate over larger intervals, need more terms (Taylor series)

### Foundation for Advanced Topics

Linear approximation is the first step toward:
- Taylor series
- Newton's method
- Numerical analysis
- Differential equations

---

## 📝 Practice Strategy

1. **Choose $a$ wisely** - pick where $f(a)$ and $f'(a)$ are easy to compute
2. **Write the formula** first: $L(x) = f(a) + f'(a)(x-a)$
3. **Calculate carefully** - show each step
4. **Check your answer** - does it make sense? Is it close to $f(a)$?
5. **For error problems**, use differentials: $dy = f'(a) \\cdot dx$
6. **Remember**: Only accurate when $x$ is close to $a$!
7. **Memorize** common approximations ($\\sin x \\approx x$, etc.)
`,
      exampleProblems: {
        create: [
          {
            question: 'Use linear approximation to estimate $(15.9)^{1/4}$. Then find the actual value and calculate the error.',
            solution: `**Step 1: Choose a nearby point**

$16^{1/4} = 2$ is easy to compute!

Let $f(x) = x^{1/4}$ and $a = 16$

---

**Step 2: Calculate $f(16)$**

$$f(16) = 16^{1/4} = 2$$

---

**Step 3: Find $f'(x)$ and $f'(16)$**

$$f'(x) = \\frac{1}{4}x^{-3/4} = \\frac{1}{4x^{3/4}}$$

$$f'(16) = \\frac{1}{4(16)^{3/4}} = \\frac{1}{4(8)} = \\frac{1}{32}$$

---

**Step 4: Linear approximation**

$$L(x) = f(16) + f'(16)(x - 16)$$

$$L(x) = 2 + \\frac{1}{32}(x - 16)$$

---

**Step 5: Estimate $(15.9)^{1/4}$**

$$L(15.9) = 2 + \\frac{1}{32}(15.9 - 16)$$

$$= 2 + \\frac{1}{32}(-0.1)$$

$$= 2 - \\frac{0.1}{32} = 2 - 0.003125$$

$$= 1.996875$$

**Approximation**: $(15.9)^{1/4} \\approx 1.997$

---

**Step 6: Find actual value**

Using a calculator: $(15.9)^{1/4} \\approx 1.99687...$

---

**Step 7: Calculate error**

$$\\text{Error} = |\\text{Actual} - \\text{Approximate}|$$

$$= |1.99687 - 1.996875| \\approx 0.000005$$

**Answer**: 
- Linear approximation: $1.997$
- Actual value: $1.99687$
- Error: approximately $0.000005$ (very small!)`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'The side length of a cube is measured to be $s = 12$ cm with a possible error of $\\pm 0.2$ cm. Use differentials to estimate the maximum error in the calculated surface area.',
            solution: `**Step 1: Surface area formula**

For a cube: $A = 6s^2$

---

**Step 2: Find $dA$**

$$\\frac{dA}{ds} = 12s$$

$$dA = 12s \\cdot ds$$

---

**Step 3: Plug in values**

$s = 12$ cm, $ds = \\pm 0.2$ cm

$$dA = 12(12)(0.2) = 144(0.2) = 28.8 \\text{ cm}^2$$

**Maximum error in surface area**: $\\pm 28.8$ cm²

---

**Step 4: Calculate percentage error**

Actual surface area: $A = 6(12)^2 = 6(144) = 864$ cm²

Percentage error:
$$\\frac{dA}{A} \\times 100\\% = \\frac{28.8}{864} \\times 100\\%$$

$$= 0.0333... \\times 100\\% \\approx 3.33\\%$$

---

**Answer**: 
- Maximum error: $\\pm 28.8$ cm²
- Percentage error: approximately $3.3\\%$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Find the linear approximation of $f(x) = \\cos x$ at $a = 0$, and use it to estimate $\\cos(0.2)$. Compare with the actual value.',
            solution: `**Step 1: Find $f(0)$**

$$f(0) = \\cos 0 = 1$$

---

**Step 2: Find $f'(x)$ and $f'(0)$**

$$f'(x) = -\\sin x$$

$$f'(0) = -\\sin 0 = 0$$

---

**Step 3: Linear approximation**

$$L(x) = f(0) + f'(0)(x - 0)$$

$$L(x) = 1 + 0 \\cdot x = 1$$

---

**Step 4: Estimate $\\cos(0.2)$**

$$\\cos(0.2) \\approx L(0.2) = 1$$

---

**Step 5: Compare with actual value**

Using calculator: $\\cos(0.2) \\approx 0.9801$

Error: $|0.9801 - 1| = 0.0199$

---

**Analysis**:

The linear approximation gives 1, but the actual value is about 0.98.

Why is the error larger than in previous examples?

Look at $f''(x) = -\\cos x$, so $f''(0) = -1 \\neq 0$

The function has **curvature** at $x = 0$, so the linear approximation isn't perfect.

The error is approximately:
$$E(x) \\approx \\frac{f''(0)}{2}x^2 = \\frac{-1}{2}(0.2)^2 = -0.02$$

This matches our observed error! ✓

---

**Better approximation**: Use quadratic approximation
$$Q(x) = 1 + 0 \\cdot x + \\frac{-1}{2}x^2 = 1 - \\frac{x^2}{2}$$

$$\\cos(0.2) \\approx 1 - \\frac{(0.2)^2}{2} = 1 - \\frac{0.04}{2} = 1 - 0.02 = 0.98$$

Much better! ✓

**Answer**: 
- Linear approximation: $\\cos(0.2) \\approx 1$
- Actual: $\\cos(0.2) \\approx 0.9801$
- The linear approximation has moderate error because the function has curvature`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the formula for linear approximation of $f(x)$ near $x = a$?',
            back: '$L(x) = f(a) + f\'(a)(x - a)$. This is the equation of the tangent line at the point $(a, f(a))$. For $x$ near $a$, we approximate $f(x) \\approx L(x)$.',
            hint: 'Tangent line formula',
          },
          {
            front: 'Why does linear approximation work?',
            back: 'When you zoom in on a smooth curve near a point, it looks like a straight line (the tangent line). The closer $x$ is to $a$, the better the curve resembles its tangent line, so $f(x) \\approx L(x)$.',
            hint: 'Think about zooming in on a curve',
          },
          {
            front: 'What is the differential form $dy$ and how does it relate to linear approximation?',
            back: '$dy = f\'(a) \\cdot dx$ where $dx = x - a$. It approximates the actual change $\\Delta y = f(x) - f(a)$. This gives the same formula: $f(x) \\approx f(a) + dy = f(a) + f\'(a)(x-a)$.',
            hint: 'Approximate change using derivative',
          },
          {
            front: 'Give an important small-angle approximation.',
            back: 'For $x$ near 0 (in radians): $\\sin x \\approx x$. This comes from linear approximation of $\\sin x$ at $a = 0$ where $f(0) = 0$ and $f\'(0) = \\cos 0 = 1$, giving $L(x) = x$.',
            hint: 'Sine function near zero',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Applications of Derivatives micro-lessons!')
  console.log('\nTopics created:')
  console.log('  7. L\'Hôpital\'s Rule')
  console.log('  8. Linear Approximation')
  console.log('\n💡 Applications section is expanding!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
