import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Creating Derivatives micro-lessons - Differentiation Rules (Part 2)...')

  // Find the Derivatives category
  const category = await prisma.category.findFirst({
    where: { slug: 'derivatives' }
  })

  if (!category) {
    throw new Error('Derivatives category not found.')
  }

  // Delete any existing topics with these slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: ['power-rule-basics', 'constant-multiple-sum-rules', 'product-rule', 'quotient-rule']
      }
    }
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // 5. The Power Rule
  const topic5 = await prisma.topic.create({
    data: {
      title: 'The Power Rule',
      slug: 'power-rule-basics',
      description: 'The most fundamental differentiation rule for polynomials',
      order: 5,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Power Rule

The **Power Rule** is the easiest and most-used differentiation rule. Master this, and you've mastered half of calculus!

### The Rule

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

In words: **Bring down the exponent, then subtract 1 from the exponent.**

### How It Works

**Step 1:** Multiply by the exponent
**Step 2:** Decrease the exponent by 1

### Basic Examples

**Example 1:** $\\frac{d}{dx}[x^3]$

Bring down the 3, subtract 1 from exponent:
$$= 3x^{3-1} = 3x^2$$

**Example 2:** $\\frac{d}{dx}[x^5]$

$$= 5x^{5-1} = 5x^4$$

**Example 3:** $\\frac{d}{dx}[x^{10}]$

$$= 10x^{10-1} = 10x^9$$

### Special Cases

**First power:** $\\frac{d}{dx}[x^1] = \\frac{d}{dx}[x]$

$$= 1 \\cdot x^{1-1} = 1 \\cdot x^0 = 1$$

> The derivative of x is always 1!

**Constant:** $\\frac{d}{dx}[c] = \\frac{d}{dx}[x^0]$

$$= 0 \\cdot x^{-1} = 0$$

> The derivative of any constant is 0!

### Negative Exponents

The power rule works for **negative exponents** too!

**Example:** $\\frac{d}{dx}[x^{-2}]$

$$= -2x^{-2-1} = -2x^{-3} = -\\frac{2}{x^3}$$

**Example:** $\\frac{d}{dx}\\left[\\frac{1}{x}\\right] = \\frac{d}{dx}[x^{-1}]$

$$= -1 \\cdot x^{-1-1} = -x^{-2} = -\\frac{1}{x^2}$$

### Fractional Exponents

Works for fractions too!

**Example:** $\\frac{d}{dx}[x^{1/2}] = \\frac{d}{dx}[\\sqrt{x}]$

$$= \\frac{1}{2}x^{1/2 - 1} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$$

**Example:** $\\frac{d}{dx}[x^{2/3}]$

$$= \\frac{2}{3}x^{2/3 - 1} = \\frac{2}{3}x^{-1/3} = \\frac{2}{3x^{1/3}}$$

### Converting Radicals and Fractions

Before using the power rule, convert to exponent form:

| Expression | Exponent Form | Derivative |
|------------|---------------|------------|
| $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{1}{2}x^{-1/2}$ |
| $\\sqrt[3]{x}$ | $x^{1/3}$ | $\\frac{1}{3}x^{-2/3}$ |
| $\\frac{1}{x}$ | $x^{-1}$ | $-x^{-2}$ |
| $\\frac{1}{x^2}$ | $x^{-2}$ | $-2x^{-3}$ |

### Why It Works

The power rule comes from the limit definition:

$$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^n - x^n}{h}$$

Using the binomial theorem and simplifying, we get $nx^{n-1}$.

But thankfully, we don't need to do that every time!

### Common Mistakes to Avoid

❌ **Wrong:** $\\frac{d}{dx}[x^3] = x^2$ (forgot to bring down the 3)

✓ **Right:** $\\frac{d}{dx}[x^3] = 3x^2$

❌ **Wrong:** $\\frac{d}{dx}[x^5] = 5x^5$ (forgot to subtract 1)

✓ **Right:** $\\frac{d}{dx}[x^5] = 5x^4$

❌ **Wrong:** $\\frac{d}{dx}[3] = 3$ (derivative of constant ≠ the constant)

✓ **Right:** $\\frac{d}{dx}[3] = 0$

### Practice Strategy

1. Identify the exponent on x
2. Multiply by that exponent
3. Subtract 1 from the exponent
4. Simplify if needed

### Multiple Terms (Preview)

For polynomials, differentiate term by term:

$$\\frac{d}{dx}[x^3 + x^2] = \\frac{d}{dx}[x^3] + \\frac{d}{dx}[x^2] = 3x^2 + 2x$$

We'll formalize this in the next lesson!
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of f(x) = x⁷',
            solution: `Using the power rule:

$$f'(x) = \\frac{d}{dx}[x^7]$$

Bring down the exponent (7) and subtract 1:

$$= 7x^{7-1}$$

$$= 7x^6$$

**Answer: f\'(x) = 7x⁶**`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'Find the derivative of g(x) = 1/x⁴',
            solution: `First, rewrite using negative exponents:

$$g(x) = \\frac{1}{x^4} = x^{-4}$$

Now apply the power rule:

$$g'(x) = \\frac{d}{dx}[x^{-4}]$$

$$= -4x^{-4-1}$$

$$= -4x^{-5}$$

We can rewrite in fraction form:

$$= -\\frac{4}{x^5}$$

**Answer: g\'(x) = -4x⁻⁵ or -4/x⁵**`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          },
          {
            question: 'Find the derivative of h(x) = ∛x',
            solution: `First, convert the cube root to exponential form:

$$h(x) = \\sqrt[3]{x} = x^{1/3}$$

Apply the power rule:

$$h'(x) = \\frac{d}{dx}[x^{1/3}]$$

$$= \\frac{1}{3}x^{1/3 - 1}$$

$$= \\frac{1}{3}x^{-2/3}$$

We can rewrite this:

$$= \\frac{1}{3x^{2/3}} = \\frac{1}{3\\sqrt[3]{x^2}}$$

**Answer: h\'(x) = (1/3)x⁻²/³ or 1/(3∛(x²))**`,
            difficulty: 'MEDIUM',
            order: 3,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What is the Power Rule for derivatives?',
            back: 'd/dx[xⁿ] = nxⁿ⁻¹ (bring down the exponent, subtract 1 from exponent)'
          },
          {
            front: 'What is the derivative of x?',
            back: '1 (using power rule: d/dx[x¹] = 1·x⁰ = 1)'
          },
          {
            front: 'What is the derivative of any constant c?',
            back: '0 (constants don\'t change, so their rate of change is zero)'
          },
          {
            front: 'Does the power rule work for negative and fractional exponents?',
            back: 'Yes! The power rule works for any real number exponent: d/dx[xⁿ] = nxⁿ⁻¹'
          }
        ]
      }
    }
  })

  // 6. Constant Multiple and Sum/Difference Rules
  const topic6 = await prisma.topic.create({
    data: {
      title: 'Constant Multiple and Sum Rules',
      slug: 'constant-multiple-sum-rules',
      description: 'Essential rules for differentiating linear combinations of functions',
      order: 6,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## Constant Multiple and Sum/Difference Rules

These rules let us differentiate polynomials and combinations of functions easily!

### The Constant Multiple Rule

$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot \\frac{d}{dx}[f(x)] = c \\cdot f'(x)$$

> **You can pull constants out front when differentiating!**

### Examples of Constant Multiple Rule

**Example 1:** $\\frac{d}{dx}[5x^3]$

Pull out the 5:
$$= 5 \\cdot \\frac{d}{dx}[x^3] = 5 \\cdot 3x^2 = 15x^2$$

**Example 2:** $\\frac{d}{dx}[-2x^4]$

Pull out the -2:
$$= -2 \\cdot \\frac{d}{dx}[x^4] = -2 \\cdot 4x^3 = -8x^3$$

**Example 3:** $\\frac{d}{dx}\\left[\\frac{3}{4}x^2\\right]$

$$= \\frac{3}{4} \\cdot \\frac{d}{dx}[x^2] = \\frac{3}{4} \\cdot 2x = \\frac{3x}{2}$$

### The Sum Rule

$$\\frac{d}{dx}[f(x) + g(x)] = \\frac{d}{dx}[f(x)] + \\frac{d}{dx}[g(x)] = f'(x) + g'(x)$$

> **Differentiate term by term!**

### The Difference Rule

$$\\frac{d}{dx}[f(x) - g(x)] = \\frac{d}{dx}[f(x)] - \\frac{d}{dx}[g(x)] = f'(x) - g'(x)$$

> **Same as the sum rule, but with subtraction!**

### Examples of Sum/Difference Rules

**Example 1:** $\\frac{d}{dx}[x^3 + x^2]$

Differentiate each term:
$$= \\frac{d}{dx}[x^3] + \\frac{d}{dx}[x^2] = 3x^2 + 2x$$

**Example 2:** $\\frac{d}{dx}[x^5 - x^3 + x]$

$$= \\frac{d}{dx}[x^5] - \\frac{d}{dx}[x^3] + \\frac{d}{dx}[x]$$
$$= 5x^4 - 3x^2 + 1$$

**Example 3:** $\\frac{d}{dx}[2x^4 + 3x^2 - 7]$

$$= 2 \\cdot 4x^3 + 3 \\cdot 2x - 0$$
$$= 8x^3 + 6x$$

### Combining All the Rules

For polynomials, we use all three rules together!

**General polynomial:**
$$\\frac{d}{dx}[a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0]$$

$$= na_nx^{n-1} + (n-1)a_{n-1}x^{n-2} + ... + a_1$$

### Step-by-Step Process

**Find the derivative of:** $f(x) = 4x^5 - 3x^3 + 7x - 2$

**Step 1:** Differentiate each term separately
- $\\frac{d}{dx}[4x^5] = 4 \\cdot 5x^4 = 20x^4$
- $\\frac{d}{dx}[-3x^3] = -3 \\cdot 3x^2 = -9x^2$
- $\\frac{d}{dx}[7x] = 7 \\cdot 1 = 7$
- $\\frac{d}{dx}[-2] = 0$

**Step 2:** Combine them
$$f'(x) = 20x^4 - 9x^2 + 7$$

### Why These Rules Work

**Constant Multiple:** Constants are just scaling factors. The rate of change gets scaled too!

**Sum/Difference:** Rates of change add/subtract independently. If one quantity increases at rate a and another at rate b, the total increases at rate a + b.

### Extended to More Terms

These rules work for **any number of terms**:

$$\\frac{d}{dx}[f_1 + f_2 + f_3 + ... + f_n] = f_1' + f_2' + f_3' + ... + f_n'$$

### Important Note

These rules apply to **sums and differences**, NOT products or quotients!

❌ **Wrong:** $\\frac{d}{dx}[f \\cdot g] \\neq f' \\cdot g'$

We need special rules for products and quotients (coming next)!

### Common Patterns

| Function | Derivative |
|----------|------------|
| $x^n$ | $nx^{n-1}$ |
| $cx^n$ | $cnx^{n-1}$ |
| $x^n + x^m$ | $nx^{n-1} + mx^{m-1}$ |
| $ax^2 + bx + c$ | $2ax + b$ |

### Practice Tips

1. Handle each term independently
2. Pull out constants first
3. Apply power rule to each term
4. Remember: derivative of constant = 0
5. Combine all the results
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of f(x) = 3x² - 5x + 7',
            solution: `Differentiate term by term:

**First term:** $\\frac{d}{dx}[3x^2]$
$$= 3 \\cdot 2x = 6x$$

**Second term:** $\\frac{d}{dx}[-5x]$
$$= -5 \\cdot 1 = -5$$

**Third term:** $\\frac{d}{dx}[7]$
$$= 0$$ (constant)

**Combine:**
$$f'(x) = 6x - 5$$

**Answer: f\'(x) = 6x - 5**`,
            difficulty: 'EASY',
            order: 1,
            isPremium: false
          },
          {
            question: 'Find dy/dx if y = 2x⁴ - 3x³ + x² - 8x + 12',
            solution: `Differentiate each term:

$$\\frac{dy}{dx} = \\frac{d}{dx}[2x^4] - \\frac{d}{dx}[3x^3] + \\frac{d}{dx}[x^2] - \\frac{d}{dx}[8x] + \\frac{d}{dx}[12]$$

**Calculate each:**
- $\\frac{d}{dx}[2x^4] = 2 \\cdot 4x^3 = 8x^3$
- $\\frac{d}{dx}[3x^3] = 3 \\cdot 3x^2 = 9x^2$
- $\\frac{d}{dx}[x^2] = 2x$
- $\\frac{d}{dx}[8x] = 8$
- $\\frac{d}{dx}[12] = 0$

**Combine:**
$$\\frac{dy}{dx} = 8x^3 - 9x^2 + 2x - 8$$

**Answer: dy/dx = 8x³ - 9x² + 2x - 8**`,
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          },
          {
            question: 'Find the derivative of g(x) = 5√x - 2/x + 4',
            solution: `First, rewrite using exponents:

$$g(x) = 5x^{1/2} - 2x^{-1} + 4$$

Now differentiate term by term:

**First term:** $\\frac{d}{dx}[5x^{1/2}]$
$$= 5 \\cdot \\frac{1}{2}x^{-1/2} = \\frac{5}{2}x^{-1/2} = \\frac{5}{2\\sqrt{x}}$$

**Second term:** $\\frac{d}{dx}[-2x^{-1}]$
$$= -2 \\cdot (-1)x^{-2} = 2x^{-2} = \\frac{2}{x^2}$$

**Third term:** $\\frac{d}{dx}[4] = 0$

**Combine:**
$$g'(x) = \\frac{5}{2\\sqrt{x}} + \\frac{2}{x^2}$$

Or in exponent form:
$$g'(x) = \\frac{5}{2}x^{-1/2} + 2x^{-2}$$

**Answer: g\'(x) = 5/(2√x) + 2/x²**`,
            difficulty: 'HARD',
            order: 3,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What is the Constant Multiple Rule?',
            back: 'd/dx[c·f(x)] = c·f\'(x) - you can pull constants out when differentiating'
          },
          {
            front: 'What is the Sum Rule for derivatives?',
            back: 'd/dx[f(x) + g(x)] = f\'(x) + g\'(x) - differentiate term by term'
          },
          {
            front: 'What is the derivative of a constant?',
            back: '0 - constants don\'t change, so their derivative is always zero'
          },
          {
            front: 'Can you use the sum rule for products like f(x)·g(x)?',
            back: 'No! The sum rule only works for addition and subtraction. Products need the Product Rule'
          }
        ]
      }
    }
  })

  // 7. The Product Rule
  const topic7 = await prisma.topic.create({
    data: {
      title: 'The Product Rule',
      slug: 'product-rule',
      description: 'Differentiating the product of two functions',
      order: 7,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Product Rule

When you have two functions **multiplied together**, you need the Product Rule!

### The Rule

If $y = f(x) \\cdot g(x)$, then:

$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

### In Words

> **First times derivative of second, PLUS second times derivative of first**

Or think of it as:
$$[\\text{first}]' \\cdot [\\text{second}] + [\\text{first}] \\cdot [\\text{second}]'$$

### Why Not Just Multiply the Derivatives?

❌ **Wrong:** $(fg)' \\neq f' \\cdot g'$

This would miss information! The product rule is necessary.

### Basic Example

Find $\\frac{d}{dx}[(x^2)(x^3)]$

**Method 1: Using Product Rule**

Let $f(x) = x^2$ and $g(x) = x^3$

- $f'(x) = 2x$
- $g'(x) = 3x^2$

Apply the rule:
$$= f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$
$$= (2x)(x^3) + (x^2)(3x^2)$$
$$= 2x^4 + 3x^4 = 5x^4$$

**Method 2: Simplify First**

$$\\frac{d}{dx}[(x^2)(x^3)] = \\frac{d}{dx}[x^5] = 5x^4$$ ✓

Same answer! But the product rule is needed when you can't simplify first.

### Step-by-Step Process

**Find:** $\\frac{d}{dx}[(3x + 1)(x^2 - 5)]$

**Step 1:** Identify the two functions
- First function: $f(x) = 3x + 1$
- Second function: $g(x) = x^2 - 5$

**Step 2:** Find their derivatives
- $f'(x) = 3$
- $g'(x) = 2x$

**Step 3:** Apply product rule
$$= f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$
$$= (3)(x^2 - 5) + (3x + 1)(2x)$$

**Step 4:** Expand and simplify
$$= 3x^2 - 15 + 6x^2 + 2x$$
$$= 9x^2 + 2x - 15$$

### Memory Tricks

**"First dee-second plus second dee-first"**

**Visual:** Draw a cross:
\`\`\`
  f   ·   g
   \\   /
    \\ /
     X
    / \\
   /   \\
  f'  ·  g  +  f  ·  g'
\`\`\`

### When to Use Product Rule

Use it when you have:
- Two functions multiplied: $(\\text{stuff}) \\times (\\text{stuff})$
- Can't easily simplify first
- Each "stuff" needs its own derivative

### Example with More Complex Functions

Find $\\frac{d}{dx}[x^5(2x^2 + 3x)]$

**Step 1:** Identify
- $f(x) = x^5$, so $f'(x) = 5x^4$
- $g(x) = 2x^2 + 3x$, so $g'(x) = 4x + 3$

**Step 2:** Apply product rule
$$= (5x^4)(2x^2 + 3x) + (x^5)(4x + 3)$$

**Step 3:** Expand
$$= 10x^6 + 15x^5 + 4x^6 + 3x^5$$

**Step 4:** Combine like terms
$$= 14x^6 + 18x^5$$

### Three or More Functions

For three functions, apply the product rule twice:

$$\\frac{d}{dx}[f \\cdot g \\cdot h] = f'gh + fg'h + fgh'$$

**Pattern:** Differentiate each function once, multiply by the others, then add.

### Common Mistakes

❌ **Forgetting the second term**
Don't write: $(fg)' = f'g$ (incomplete!)

❌ **Mixing up the order**
Both terms are needed: $f'g + fg'$

❌ **Not simplifying**
Always combine like terms at the end!

### When NOT to Use It

If you can simplify first, do it!

**Example:** $\\frac{d}{dx}[x^3 \\cdot x^2]$

**Easy way:** $\\frac{d}{dx}[x^5] = 5x^4$

**Hard way:** Product rule (unnecessary here)

### Practice Strategy

1. Identify the two functions clearly
2. Find each derivative separately
3. Write out the product rule formula
4. Substitute carefully
5. Expand and simplify
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of y = (x² + 1)(x³ - 2x)',
            solution: `**Step 1: Identify the functions**
- First: $f(x) = x^2 + 1$
- Second: $g(x) = x^3 - 2x$

**Step 2: Find the derivatives**
- $f'(x) = 2x$
- $g'(x) = 3x^2 - 2$

**Step 3: Apply product rule**
$$\\frac{dy}{dx} = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

$$= (2x)(x^3 - 2x) + (x^2 + 1)(3x^2 - 2)$$

**Step 4: Expand**
$$= 2x^4 - 4x^2 + 3x^4 - 2x^2 + 3x^2 - 2$$

**Step 5: Combine like terms**
$$= 5x^4 - 3x^2 - 2$$

**Answer: dy/dx = 5x⁴ - 3x² - 2**`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Find f\'(x) if f(x) = (2x - 5)(3x² + x - 1)',
            solution: `**Step 1: Identify**
- First: $u = 2x - 5$, so $u' = 2$
- Second: $v = 3x^2 + x - 1$, so $v' = 6x + 1$

**Step 2: Product rule**
$$f'(x) = u'v + uv'$$
$$= (2)(3x^2 + x - 1) + (2x - 5)(6x + 1)$$

**Step 3: Expand first term**
$$2(3x^2 + x - 1) = 6x^2 + 2x - 2$$

**Step 4: Expand second term (FOIL)**
$$(2x - 5)(6x + 1) = 12x^2 + 2x - 30x - 5 = 12x^2 - 28x - 5$$

**Step 5: Add them together**
$$f'(x) = 6x^2 + 2x - 2 + 12x^2 - 28x - 5$$
$$= 18x^2 - 26x - 7$$

**Answer: f\'(x) = 18x² - 26x - 7**`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What is the Product Rule?',
            back: 'd/dx[f(x)·g(x)] = f\'(x)·g(x) + f(x)·g\'(x) - first times derivative of second plus second times derivative of first'
          },
          {
            front: 'Why can\'t you just multiply the derivatives: (fg)\' = f\'·g\'?',
            back: 'This formula is incorrect and misses information. You must use the product rule which includes both terms'
          },
          {
            front: 'What\'s a memory trick for the Product Rule?',
            back: '"First dee-second plus second dee-first" or "low dee-high plus high dee-low"'
          },
          {
            front: 'When should you use the Product Rule?',
            back: 'When you have two functions multiplied together and you can\'t easily simplify them first'
          }
        ]
      }
    }
  })

  // 8. The Quotient Rule
  const topic8 = await prisma.topic.create({
    data: {
      title: 'The Quotient Rule',
      slug: 'quotient-rule',
      description: 'Differentiating fractions and rational functions',
      order: 8,
      categoryId: category.id,
      isPremium: false,
      textContent: `
## The Quotient Rule

When you have one function **divided by** another, use the Quotient Rule!

### The Rule

If $y = \\frac{f(x)}{g(x)}$, then:

$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

### In Words

> **Bottom times derivative of top, MINUS top times derivative of bottom, ALL OVER bottom squared**

$$\\frac{[\\text{bottom}] \\cdot [\\text{top}]' - [\\text{top}] \\cdot [\\text{bottom}]'}{[\\text{bottom}]^2}$$

### Memory Tricks

**"Low dee-high minus high dee-low, over low-low"**

Or sing it to a tune:
\`\`\`
♪ Low dee-high,
  Minus high dee-low,
  All over low squared! ♪
\`\`\`

**Visual:**
\`\`\`
    f
   ---
    g

becomes

  g·f' - f·g'
  -----------
      g²
\`\`\`

### Basic Example

Find $\\frac{d}{dx}\\left[\\frac{x^2}{x + 1}\\right]$

**Step 1:** Identify top and bottom
- Top (numerator): $f(x) = x^2$, so $f'(x) = 2x$
- Bottom (denominator): $g(x) = x + 1$, so $g'(x) = 1$

**Step 2:** Apply quotient rule
$$= \\frac{g(x) \\cdot f'(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

$$= \\frac{(x + 1)(2x) - (x^2)(1)}{(x + 1)^2}$$

**Step 3:** Expand numerator
$$= \\frac{2x^2 + 2x - x^2}{(x + 1)^2}$$

**Step 4:** Simplify
$$= \\frac{x^2 + 2x}{(x + 1)^2}$$

We can factor if desired:
$$= \\frac{x(x + 2)}{(x + 1)^2}$$

### Important: Order Matters!

The quotient rule has a **minus sign**, so order is crucial!

$$g \\cdot f' - f \\cdot g' \\quad \\neq \\quad f \\cdot g' - g \\cdot f'$$

Always: **bottom times top prime** minus **top times bottom prime**

### When Can You Avoid the Quotient Rule?

**Case 1:** Constant in numerator

$$\\frac{d}{dx}\\left[\\frac{5}{x^2}\\right] = \\frac{d}{dx}[5x^{-2}] = -10x^{-3} = -\\frac{10}{x^3}$$

Use negative exponent instead!

**Case 2:** Factorable expression

Sometimes you can simplify before differentiating.

### Step-by-Step Example

Find $\\frac{d}{dx}\\left[\\frac{3x + 2}{x^2 - 1}\\right]$

**Step 1:** Identify
- Top: $f(x) = 3x + 2$, so $f'(x) = 3$
- Bottom: $g(x) = x^2 - 1$, so $g'(x) = 2x$

**Step 2:** Write the quotient rule
$$= \\frac{g \\cdot f' - f \\cdot g'}{g^2}$$

**Step 3:** Substitute
$$= \\frac{(x^2 - 1)(3) - (3x + 2)(2x)}{(x^2 - 1)^2}$$

**Step 4:** Expand numerator
$$= \\frac{3x^2 - 3 - (6x^2 + 4x)}{(x^2 - 1)^2}$$

$$= \\frac{3x^2 - 3 - 6x^2 - 4x}{(x^2 - 1)^2}$$

**Step 5:** Combine like terms
$$= \\frac{-3x^2 - 4x - 3}{(x^2 - 1)^2}$$

Or factor out -1:
$$= \\frac{-(3x^2 + 4x + 3)}{(x^2 - 1)^2}$$

### Quotient Rule vs. Rewriting

Sometimes rewriting is easier:

**Hard way (quotient rule):**
$$\\frac{d}{dx}\\left[\\frac{1}{x^3}\\right]$$

**Easy way (power rule):**
$$\\frac{d}{dx}[x^{-3}] = -3x^{-4} = -\\frac{3}{x^4}$$

If the numerator is constant or simple, consider rewriting!

### Product Rule + Chain Rule Alternative

You can also rewrite quotients as products:

$$\\frac{f(x)}{g(x)} = f(x) \\cdot [g(x)]^{-1}$$

Then use product rule + chain rule. But quotient rule is usually faster!

### Common Mistakes

❌ **Wrong sign:** $g \\cdot f' + f \\cdot g'$ (should be minus!)

❌ **Forgetting to square bottom:** $\\frac{...}{g}$ (should be $g^2$!)

❌ **Wrong order:** $f \\cdot g' - g \\cdot f'$ (backwards!)

✓ **Correct:** $\\frac{g \\cdot f' - f \\cdot g'}{g^2}$

### Simplification Tips

After applying the quotient rule:
1. Expand the numerator completely
2. Combine like terms
3. Factor if possible
4. Don't expand $(g(x))^2$ unless necessary

### Practice Strategy

1. Circle the numerator (top)
2. Box the denominator (bottom)
3. Find both derivatives
4. Write the quotient rule formula
5. Substitute carefully (watch the minus!)
6. Simplify the numerator
7. Leave denominator factored (usually)
`,
      exampleProblems: {
        create: [
          {
            question: 'Find the derivative of y = (x + 3)/(x - 2)',
            solution: `**Step 1: Identify top and bottom**
- Top: $f(x) = x + 3$, so $f'(x) = 1$
- Bottom: $g(x) = x - 2$, so $g'(x) = 1$

**Step 2: Apply quotient rule**
$$\\frac{dy}{dx} = \\frac{g \\cdot f' - f \\cdot g'}{g^2}$$

$$= \\frac{(x - 2)(1) - (x + 3)(1)}{(x - 2)^2}$$

**Step 3: Expand numerator**
$$= \\frac{x - 2 - x - 3}{(x - 2)^2}$$

**Step 4: Simplify**
$$= \\frac{-5}{(x - 2)^2}$$

**Answer: dy/dx = -5/(x - 2)²**`,
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            question: 'Find f\'(x) if f(x) = (2x² - 3x)/(x² + 1)',
            solution: `**Step 1: Identify**
- Top: $u = 2x^2 - 3x$, so $u' = 4x - 3$
- Bottom: $v = x^2 + 1$, so $v' = 2x$

**Step 2: Quotient rule**
$$f'(x) = \\frac{v \\cdot u' - u \\cdot v'}{v^2}$$

$$= \\frac{(x^2 + 1)(4x - 3) - (2x^2 - 3x)(2x)}{(x^2 + 1)^2}$$

**Step 3: Expand first term**
$$(x^2 + 1)(4x - 3) = 4x^3 - 3x^2 + 4x - 3$$

**Step 4: Expand second term**
$$(2x^2 - 3x)(2x) = 4x^3 - 6x^2$$

**Step 5: Subtract**
$$= \\frac{4x^3 - 3x^2 + 4x - 3 - (4x^3 - 6x^2)}{(x^2 + 1)^2}$$

$$= \\frac{4x^3 - 3x^2 + 4x - 3 - 4x^3 + 6x^2}{(x^2 + 1)^2}$$

**Step 6: Combine like terms**
$$= \\frac{3x^2 + 4x - 3}{(x^2 + 1)^2}$$

**Answer: f\'(x) = (3x² + 4x - 3)/(x² + 1)²**`,
            difficulty: 'HARD',
            order: 2,
            isPremium: false
          }
        ]
      },
      flashcards: {
        create: [
          {
            front: 'What is the Quotient Rule?',
            back: 'd/dx[f/g] = (g·f\' - f·g\')/g² - bottom times derivative of top minus top times derivative of bottom, all over bottom squared'
          },
          {
            front: 'What\'s the memory trick for the Quotient Rule?',
            back: '"Low dee-high minus high dee-low, over low squared" or "lo d-hi minus hi d-lo, over lo-lo"'
          },
          {
            front: 'When can you avoid using the Quotient Rule?',
            back: 'When the numerator is a constant (rewrite with negative exponent) or when you can simplify the fraction first'
          },
          {
            front: 'What are common mistakes with the Quotient Rule?',
            back: 'Wrong sign (using + instead of -), forgetting to square the denominator, or getting the order backwards'
          }
        ]
      }
    }
  })

  console.log('✅ Created 4 Differentiation Rules micro-lessons!')
  console.log('📚 Topics created (Part 2):')
  console.log('   5. The Power Rule')
  console.log('   6. Constant Multiple and Sum Rules')
  console.log('   7. The Product Rule')
  console.log('   8. The Quotient Rule')
  console.log('\n💡 Ready to continue with Chain Rule and more!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
