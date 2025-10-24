import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
  EXPERT = 'EXPERT',
}

async function main() {
  console.log('🔄 Creating Integration micro-lessons - Part 2...')

  // Get the Integration category
  const integrationCategory = await prisma.category.upsert({
    where: { slug: 'integration' },
    update: {},
    create: {
      slug: 'integration',
      name: 'Integration',
      description: 'Antiderivatives and the reverse process of differentiation',
      order: 4,
      icon: '∫',
    },
  })

  // Delete any existing topics with the same slugs to avoid conflicts
  await prisma.topic.deleteMany({
    where: {
      slug: {
        in: [
          'u-substitution',
          'integration-by-parts',
        ],
      },
    },
  })

  console.log('✓ Cleared any existing topics with same slugs')

  // ============================================
  // TOPIC 1: U-Substitution
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'u-substitution',
      title: 'U-Substitution Method',
      description: 'The chain rule in reverse - substitution technique for integration',
      order: 3,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🔗 U-Substitution Method

## What is U-Substitution?

**U-substitution** is the reverse of the chain rule for derivatives. It's the most important integration technique you'll learn!

> **💡 Key Idea**: If an integral has the form "function times its derivative," use u-substitution!

---

## The Chain Rule (Review)

Remember the chain rule for derivatives:

$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

**Example**: $\\frac{d}{dx}[(x^2+1)^5] = 5(x^2+1)^4 \\cdot 2x$

---

## Reversing the Chain Rule

If we integrate both sides:

$$\\int f'(g(x)) \\cdot g'(x)\\,dx = f(g(x)) + C$$

**This is the foundation of u-substitution!**

---

## The U-Substitution Process

### Step-by-Step Method

**Step 1**: Identify $u$ (the "inside function")
- Look for a composite function
- Choose $u = g(x)$

**Step 2**: Find $du$
- Calculate $du = g'(x)\\,dx$

**Step 3**: Rewrite the integral in terms of $u$
- Replace all $x$ terms with $u$ terms
- Replace $dx$ with $du$

**Step 4**: Integrate with respect to $u$

**Step 5**: Substitute back to $x$
- Replace $u$ with the original expression

**Step 6**: Add $+C$

---

## Example 1: Basic U-Substitution

Evaluate $\\int 2x(x^2+1)^5\\,dx$

**Step 1: Choose $u$**

Let $u = x^2 + 1$ (the inside function)

---

**Step 2: Find $du$**

$$\\frac{du}{dx} = 2x$$

$$du = 2x\\,dx$$

---

**Step 3: Rewrite the integral**

Notice that we have $2x\\,dx$ in the original integral!

$$\\int 2x(x^2+1)^5\\,dx = \\int (x^2+1)^5 \\cdot 2x\\,dx$$

$$= \\int u^5\\,du$$

---

**Step 4: Integrate**

$$= \\frac{u^6}{6} + C$$

---

**Step 5: Substitute back**

$$= \\frac{(x^2+1)^6}{6} + C$$

---

**Check** (using chain rule):
$$\\frac{d}{dx}\\left[\\frac{(x^2+1)^6}{6}\\right] = \\frac{6(x^2+1)^5 \\cdot 2x}{6} = 2x(x^2+1)^5$$ ✓

---

## Example 2: When You Need to Adjust

Evaluate $\\int x(x^2+1)^5\\,dx$

**Step 1: Choose $u$**

$u = x^2 + 1$

---

**Step 2: Find $du$**

$du = 2x\\,dx$

So: $x\\,dx = \\frac{1}{2}du$

---

**Step 3: Rewrite**

$$\\int x(x^2+1)^5\\,dx = \\int (x^2+1)^5 \\cdot x\\,dx$$

$$= \\int u^5 \\cdot \\frac{1}{2}du$$

$$= \\frac{1}{2}\\int u^5\\,du$$

---

**Step 4: Integrate**

$$= \\frac{1}{2} \\cdot \\frac{u^6}{6} + C = \\frac{u^6}{12} + C$$

---

**Step 5: Substitute back**

$$= \\frac{(x^2+1)^6}{12} + C$$

---

## Pattern Recognition

### Type 1: Exact Match

$$\\int f'(g(x)) \\cdot g'(x)\\,dx$$

The derivative $g'(x)$ appears **exactly**!

**Example**: $\\int 2x(x^2+1)^5\\,dx$
- $u = x^2+1$, $du = 2x\\,dx$ ✓

---

### Type 2: Constant Multiple Off

$$\\int f'(g(x)) \\cdot k \\cdot g'(x)\\,dx$$

The derivative is off by a constant factor.

**Example**: $\\int x(x^2+1)^5\\,dx$
- $u = x^2+1$, $du = 2x\\,dx$
- Have $x\\,dx = \\frac{1}{2}du$ ✓

---

### Type 3: Won't Work

If after substitution you still have $x$ terms mixed with $u$, u-substitution won't work (try different $u$ or different method).

---

## Trigonometric Examples

### Example 3: Sine and Cosine

Evaluate $\\int \\sin x \\cos^4 x\\,dx$

**Step 1: Choose $u$**

$u = \\cos x$ (we have its derivative $\\sin x$ in the integral!)

---

**Step 2: Find $du$**

$$\\frac{du}{dx} = -\\sin x$$

$$du = -\\sin x\\,dx$$

$$\\sin x\\,dx = -du$$

---

**Step 3: Rewrite**

$$\\int \\sin x \\cos^4 x\\,dx = \\int \\cos^4 x \\cdot \\sin x\\,dx$$

$$= \\int u^4 \\cdot (-du) = -\\int u^4\\,du$$

---

**Step 4: Integrate**

$$= -\\frac{u^5}{5} + C$$

---

**Step 5: Substitute back**

$$= -\\frac{\\cos^5 x}{5} + C$$

---

## Exponential Examples

### Example 4: Exponential with Chain Rule

Evaluate $\\int xe^{x^2}\\,dx$

**Step 1: Choose $u$**

$u = x^2$ (the exponent)

---

**Step 2: Find $du$**

$du = 2x\\,dx$

$x\\,dx = \\frac{1}{2}du$

---

**Step 3: Rewrite**

$$\\int xe^{x^2}\\,dx = \\int e^{x^2} \\cdot x\\,dx$$

$$= \\int e^u \\cdot \\frac{1}{2}du = \\frac{1}{2}\\int e^u\\,du$$

---

**Step 4: Integrate**

$$= \\frac{1}{2}e^u + C$$

---

**Step 5: Substitute back**

$$= \\frac{1}{2}e^{x^2} + C$$

---

## Example 5: Requiring Algebraic Manipulation

Evaluate $\\int \\frac{x}{x^2+1}\\,dx$

**Step 1: Choose $u$**

$u = x^2 + 1$ (the denominator)

---

**Step 2: Find $du$**

$du = 2x\\,dx$

$x\\,dx = \\frac{1}{2}du$

---

**Step 3: Rewrite**

$$\\int \\frac{x}{x^2+1}\\,dx = \\int \\frac{1}{x^2+1} \\cdot x\\,dx$$

$$= \\int \\frac{1}{u} \\cdot \\frac{1}{2}du = \\frac{1}{2}\\int \\frac{1}{u}\\,du$$

---

**Step 4: Integrate**

$$= \\frac{1}{2}\\ln|u| + C$$

---

**Step 5: Substitute back**

$$= \\frac{1}{2}\\ln|x^2+1| + C$$

Since $x^2+1 > 0$ always, we can write:

$$= \\frac{1}{2}\\ln(x^2+1) + C$$

---

## When to Use U-Substitution

### Good Candidates

Look for these patterns:

1. **Composite function with its derivative present**
   - $\\int (x^2+1)^5 \\cdot 2x\\,dx$

2. **Fraction where numerator is derivative of denominator**
   - $\\int \\frac{2x}{x^2+1}\\,dx$

3. **Trig functions with derivatives**
   - $\\int \\tan x\\,dx = \\int \\frac{\\sin x}{\\cos x}\\,dx$ (let $u = \\cos x$)

4. **Exponentials with derivatives of exponent**
   - $\\int xe^{x^2}\\,dx$

---

## Common U-Choices

| Integral Type | Common Choice for $u$ |
|---------------|----------------------|
| $(ax+b)^n$ | $u = ax+b$ |
| $f'(x) \\cdot [f(x)]^n$ | $u = f(x)$ |
| $\\frac{f'(x)}{f(x)}$ | $u = f(x)$ (gives $\\ln$ ) |
| $e^{f(x)} \\cdot f'(x)$ | $u = f(x)$ |
| $\\sin^n x \\cos x$ | $u = \\sin x$ |
| $\\cos^n x \\sin x$ | $u = \\cos x$ |

---

## ⚠️ Common Mistakes

### Mistake 1: Choosing Wrong $u$

**WRONG**: For $\\int x(x^2+1)^5\\,dx$, choosing $u = x$

**RIGHT**: Choose $u = x^2+1$ (the composite function)

---

### Mistake 2: Forgetting to Adjust Constants

**WRONG**: $u = x^2+1$, $du = 2x\\,dx$, and writing $\\int u^5\\,du$ for $\\int x(x^2+1)^5\\,dx$

**RIGHT**: Need $\\frac{1}{2}$ factor! $\\int u^5 \\cdot \\frac{1}{2}du$

---

### Mistake 3: Not Substituting Everything

After substitution, you should have **only $u$ and $du$** - no $x$ remaining!

If $x$ remains, choose different $u$ or method won't work.

---

### Mistake 4: Forgetting to Substitute Back

**WRONG**: Final answer $\\frac{u^6}{12} + C$

**RIGHT**: Final answer $\\frac{(x^2+1)^6}{12} + C$

Always convert back to the original variable!

---

### Mistake 5: Wrong Sign

When $du = -\\sin x\\,dx$, we have $\\sin x\\,dx = -du$ (negative!)

Don't forget the negative sign!

---

## U-Substitution Checklist

✓ **Choose $u$** = inner function or complicated part

✓ **Find $du$** and solve for needed differential

✓ **Rewrite integral** completely in terms of $u$

✓ **Check**: No $x$ should remain after substitution

✓ **Integrate** using basic formulas

✓ **Substitute back** to original variable

✓ **Add $+C$**

✓ **Check** by differentiating (if time permits)

---

## Practice Tips

### Tip 1: Look for the Derivative

Ask: "What function's derivative do I see here?"

### Tip 2: Try the "Inside" First

For composite functions like $(x^2+1)^5$, try $u =$ inside function first.

### Tip 3: Don't Force It

If after substitution you still have messy $x$ and $u$ mixed, try different $u$ or different method.

### Tip 4: Practice Pattern Recognition

The more you practice, the faster you'll recognize which $u$ to choose!

---

## Advanced Example

Evaluate $\\int \\frac{\\ln x}{x}\\,dx$

**Solution**:

Let $u = \\ln x$

$du = \\frac{1}{x}dx$

$$\\int \\frac{\\ln x}{x}\\,dx = \\int u\\,du = \\frac{u^2}{2} + C = \\frac{(\\ln x)^2}{2} + C$$

---

## 📝 Practice Strategy

1. **Identify the composite function** or complicated part
2. **Look for its derivative** somewhere in the integral
3. **Set $u$** equal to the inner function
4. **Calculate $du$** and solve for needed form
5. **Substitute completely** - no $x$ should remain!
6. **Integrate** the simpler $u$ integral
7. **Substitute back** to $x$
8. **Always add $+C$**
9. **Check** your answer by differentiating
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\int (3x^2+2)(x^3+2x)^7\\,dx$ using u-substitution.',
            solution: `**Step 1: Identify $u$**

Let $u = x^3 + 2x$ (the inside function that's raised to the 7th power)

---

**Step 2: Find $du$**

$$\\frac{du}{dx} = 3x^2 + 2$$

$$du = (3x^2 + 2)\\,dx$$

---

**Step 3: Notice the pattern**

We have exactly $(3x^2+2)\\,dx$ in the integral! Perfect match!

$$\\int (3x^2+2)(x^3+2x)^7\\,dx = \\int (x^3+2x)^7 \\cdot (3x^2+2)\\,dx$$

---

**Step 4: Substitute**

$$= \\int u^7\\,du$$

---

**Step 5: Integrate**

$$= \\frac{u^8}{8} + C$$

---

**Step 6: Substitute back**

$$= \\frac{(x^3+2x)^8}{8} + C$$

---

**Check**:
$$\\frac{d}{dx}\\left[\\frac{(x^3+2x)^8}{8}\\right] = \\frac{8(x^3+2x)^7(3x^2+2)}{8} = (3x^2+2)(x^3+2x)^7$$ ✓

**Answer**: $\\frac{(x^3+2x)^8}{8} + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 1,
          },
          {
            question: 'Evaluate $\\int \\sin^3 x \\cos x\\,dx$.',
            solution: `**Step 1: Choose $u$**

Let $u = \\sin x$ (we have its derivative $\\cos x$ in the integral)

---

**Step 2: Find $du$**

$$\\frac{du}{dx} = \\cos x$$

$$du = \\cos x\\,dx$$

---

**Step 3: Rewrite the integral**

$$\\int \\sin^3 x \\cos x\\,dx = \\int (\\sin x)^3 \\cdot \\cos x\\,dx$$

$$= \\int u^3\\,du$$

---

**Step 4: Integrate**

$$= \\frac{u^4}{4} + C$$

---

**Step 5: Substitute back**

$$= \\frac{\\sin^4 x}{4} + C$$

---

**Check**:
$$\\frac{d}{dx}\\left[\\frac{\\sin^4 x}{4}\\right] = \\frac{4\\sin^3 x \\cdot \\cos x}{4} = \\sin^3 x \\cos x$$ ✓

**Answer**: $\\frac{\\sin^4 x}{4} + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Evaluate $\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx$.',
            solution: `**Step 1: Choose $u$**

Let $u = \\sqrt{x} = x^{1/2}$ (the exponent in $e^{\\sqrt{x}}$)

---

**Step 2: Find $du$**

$$\\frac{du}{dx} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$$

$$du = \\frac{1}{2\\sqrt{x}}\\,dx$$

Solve for $\\frac{dx}{\\sqrt{x}}$:
$$2\\,du = \\frac{dx}{\\sqrt{x}}$$

---

**Step 3: Rewrite the integral**

$$\\int \\frac{e^{\\sqrt{x}}}{\\sqrt{x}}\\,dx = \\int e^{\\sqrt{x}} \\cdot \\frac{1}{\\sqrt{x}}\\,dx$$

$$= \\int e^u \\cdot 2\\,du = 2\\int e^u\\,du$$

---

**Step 4: Integrate**

$$= 2e^u + C$$

---

**Step 5: Substitute back**

$$= 2e^{\\sqrt{x}} + C$$

---

**Check**:
$$\\frac{d}{dx}[2e^{\\sqrt{x}}] = 2e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{e^{\\sqrt{x}}}{\\sqrt{x}}$$ ✓

**Answer**: $2e^{\\sqrt{x}} + C$`,
            difficulty: Difficulty.HARD,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the basic idea behind u-substitution?',
            back: 'U-substitution is the reverse of the chain rule. If you see a function composed with another function, and the derivative of the inner function appears in the integral, use u-substitution. Let $u$ = inner function, find $du$, substitute, integrate, then substitute back.',
            hint: 'Chain rule in reverse',
          },
          {
            front: 'What are the steps for u-substitution?',
            back: '1) Choose $u$ (usually inner/composite function), 2) Find $du = u\'(x)dx$, 3) Rewrite integral in terms of $u$ and $du$ only, 4) Integrate with respect to $u$, 5) Substitute back to $x$, 6) Add $+C$.',
            hint: 'Choose u, find du, substitute, integrate, substitute back',
          },
          {
            front: 'How do you know when to use u-substitution?',
            back: 'Look for: 1) A composite function with its derivative present, 2) Fraction where numerator is derivative of denominator, 3) Exponential/trig functions with derivative of exponent/argument. Pattern: $\\int f\'(g(x)) \\cdot g\'(x)\\,dx$.',
            hint: 'Composite function plus its derivative',
          },
          {
            front: 'For $\\int \\frac{f\'(x)}{f(x)}\\,dx$, what should $u$ be and what\'s the answer?',
            back: 'Let $u = f(x)$, then $du = f\'(x)dx$. The integral becomes $\\int \\frac{1}{u}du = \\ln|u| + C = \\ln|f(x)| + C$. This is a very common pattern!',
            hint: 'Derivative over function gives natural log',
          },
        ],
      },
    },
  })

  // ============================================
  // TOPIC 2: Integration by Parts
  // ============================================
  await prisma.topic.create({
    data: {
      slug: 'integration-by-parts',
      title: 'Integration by Parts',
      description: 'The product rule in reverse for integrating products of functions',
      order: 4,
      categoryId: integrationCategory.id,
      isPremium: false,
      textContent: `
# 🔀 Integration by Parts

## What is Integration by Parts?

**Integration by parts** is the reverse of the product rule for derivatives. It's used to integrate products of functions.

> **💡 Key Idea**: Trade one integral for another (hopefully easier) integral!

---

## The Product Rule (Review)

The product rule for derivatives states:

$$\\frac{d}{dx}[u(x) \\cdot v(x)] = u'(x)v(x) + u(x)v'(x)$$

---

## Deriving the Formula

Integrate both sides of the product rule:

$$\\int \\frac{d}{dx}[uv]\\,dx = \\int u'v\\,dx + \\int uv'\\,dx$$

$$uv = \\int u'v\\,dx + \\int uv'\\,dx$$

Rearranging:

$$\\int uv'\\,dx = uv - \\int u'v\\,dx$$

---

## The Integration by Parts Formula

$$\\int u\\,dv = uv - \\int v\\,du$$

**Or equivalently**:

$$\\int u(x)v'(x)\\,dx = u(x)v(x) - \\int u'(x)v(x)\\,dx$$

---

## How to Apply Integration by Parts

### Step-by-Step Process

**Step 1**: Identify $u$ and $dv$ from the integrand
- Choose what to call $u$
- The rest becomes $dv$

**Step 2**: Differentiate $u$ to get $du$

**Step 3**: Integrate $dv$ to get $v$

**Step 4**: Apply the formula:
$$\\int u\\,dv = uv - \\int v\\,du$$

**Step 5**: Evaluate the new integral $\\int v\\,du$

**Step 6**: Simplify and add $+C$

---

## Choosing $u$ and $dv$

### The LIATE Rule (or ILATE)

Choose $u$ in this priority order:

**L** - Logarithmic functions ($\\ln x$, $\\log x$)

**I** - Inverse trig functions ($\\arctan x$, $\\arcsin x$)

**A** - Algebraic functions ($x$, $x^2$, $\\sqrt{x}$)

**T** - Trigonometric functions ($\\sin x$, $\\cos x$, $\\tan x$)

**E** - Exponential functions ($e^x$, $a^x$)

**Pick the one that comes first for $u$, the rest becomes $dv$!**

---

## Example 1: Basic Application

Evaluate $\\int x e^x\\,dx$

**Step 1: Choose $u$ and $dv$**

Using LIATE:
- Algebraic ($x$) comes before Exponential ($e^x$)

Let $u = x$ (algebraic)

Let $dv = e^x\\,dx$ (exponential)

---

**Step 2: Find $du$**

$$du = dx$$

---

**Step 3: Find $v$**

$$v = \\int e^x\\,dx = e^x$$

(Don't add +C to $v$!)

---

**Step 4: Apply formula**

$$\\int x e^x\\,dx = uv - \\int v\\,du$$

$$= x \\cdot e^x - \\int e^x \\cdot dx$$

$$= xe^x - e^x + C$$

$$= e^x(x-1) + C$$

---

**Check**:
$$\\frac{d}{dx}[e^x(x-1)] = e^x(x-1) + e^x(1) = e^x(x-1+1) = xe^x$$ ✓

---

## Example 2: With Logarithm

Evaluate $\\int \\ln x\\,dx$

**Trick**: Write as $\\int 1 \\cdot \\ln x\\,dx$

---

**Step 1: Choose $u$ and $dv$**

Using LIATE:
- Logarithmic ($\\ln x$) comes first

Let $u = \\ln x$

Let $dv = 1\\,dx$ (or just $dx$)

---

**Step 2: Find $du$**

$$du = \\frac{1}{x}\\,dx$$

---

**Step 3: Find $v$**

$$v = \\int 1\\,dx = x$$

---

**Step 4: Apply formula**

$$\\int \\ln x\\,dx = uv - \\int v\\,du$$

$$= (\\ln x)(x) - \\int x \\cdot \\frac{1}{x}\\,dx$$

$$= x\\ln x - \\int 1\\,dx$$

$$= x\\ln x - x + C$$

$$= x(\\ln x - 1) + C$$

---

## Example 3: Trigonometric

Evaluate $\\int x\\sin x\\,dx$

**Step 1: Choose $u$ and $dv$**

Using LIATE:
- Algebraic ($x$) before Trigonometric ($\\sin x$)

Let $u = x$

Let $dv = \\sin x\\,dx$

---

**Step 2: Find $du$**

$$du = dx$$

---

**Step 3: Find $v$**

$$v = \\int \\sin x\\,dx = -\\cos x$$

---

**Step 4: Apply formula**

$$\\int x\\sin x\\,dx = uv - \\int v\\,du$$

$$= x(-\\cos x) - \\int (-\\cos x)\\,dx$$

$$= -x\\cos x + \\int \\cos x\\,dx$$

$$= -x\\cos x + \\sin x + C$$

---

## Repeated Integration by Parts

Sometimes you need to apply integration by parts **multiple times**.

### Example 4: Apply Twice

Evaluate $\\int x^2 e^x\\,dx$

**First application**:

$u = x^2$, $dv = e^x\\,dx$

$du = 2x\\,dx$, $v = e^x$

$$\\int x^2 e^x\\,dx = x^2 e^x - \\int e^x \\cdot 2x\\,dx$$

$$= x^2 e^x - 2\\int xe^x\\,dx$$

---

**Second application on** $\\int xe^x\\,dx$:

$u = x$, $dv = e^x\\,dx$

$du = dx$, $v = e^x$

$$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x$$

---

**Combine**:

$$\\int x^2 e^x\\,dx = x^2 e^x - 2(xe^x - e^x) + C$$

$$= x^2 e^x - 2xe^x + 2e^x + C$$

$$= e^x(x^2 - 2x + 2) + C$$

---

## Tabular Method (For Repeated Parts)

When you need to apply parts multiple times with polynomial times exponential/trig:

**Example**: $\\int x^3 e^x\\,dx$

| Sign | $u$ and derivatives | $dv$ and integrals |
|------|-------------------|-------------------|
| + | $x^3$ | $e^x$ |
| − | $3x^2$ | $e^x$ |
| + | $6x$ | $e^x$ |
| − | $6$ | $e^x$ |
| + | $0$ | $e^x$ |

**Answer**: 
$$x^3e^x - 3x^2e^x + 6xe^x - 6e^x + C = e^x(x^3 - 3x^2 + 6x - 6) + C$$

Multiply diagonally with alternating signs!

---

## Circular Integration by Parts

Sometimes integration by parts leads back to the original integral!

### Example 5: Circular Case

Evaluate $\\int e^x \\sin x\\,dx$

**First application**:

$u = \\sin x$, $dv = e^x\\,dx$

$du = \\cos x\\,dx$, $v = e^x$

$$\\int e^x \\sin x\\,dx = e^x \\sin x - \\int e^x \\cos x\\,dx$$

---

**Second application on** $\\int e^x \\cos x\\,dx$:

$u = \\cos x$, $dv = e^x\\,dx$

$du = -\\sin x\\,dx$, $v = e^x$

$$\\int e^x \\cos x\\,dx = e^x \\cos x - \\int e^x(-\\sin x)\\,dx$$

$$= e^x \\cos x + \\int e^x \\sin x\\,dx$$

---

**Substitute back**:

Let $I = \\int e^x \\sin x\\,dx$

$$I = e^x \\sin x - (e^x \\cos x + I)$$

$$I = e^x \\sin x - e^x \\cos x - I$$

$$2I = e^x(\\sin x - \\cos x)$$

$$I = \\frac{e^x(\\sin x - \\cos x)}{2} + C$$

---

## When to Use Integration by Parts

### Good Candidates

1. **Polynomial times exponential**: $\\int x^n e^x\\,dx$
2. **Polynomial times trig**: $\\int x^n \\sin x\\,dx$ or $\\int x^n \\cos x\\,dx$
3. **Logarithm times polynomial**: $\\int x^n \\ln x\\,dx$
4. **Inverse trig times polynomial**: $\\int x \\arctan x\\,dx$
5. **Exponential times trig**: $\\int e^x \\sin x\\,dx$

---

## ⚠️ Common Mistakes

### Mistake 1: Wrong Choice of $u$

**WRONG**: For $\\int x e^x\\,dx$, choosing $u = e^x$

This makes things harder! Differentiating $e^x$ doesn't simplify.

**RIGHT**: Choose $u = x$ (it simplifies when differentiated)

---

### Mistake 2: Adding +C to $v$

When finding $v = \\int dv$, **don't add +C** yet!

The +C comes at the very end.

---

### Mistake 3: Forgetting the Minus Sign

The formula is $uv - \\int v\\,du$ (minus, not plus!)

---

### Mistake 4: Not Simplifying

After applying the formula, you still need to evaluate $\\int v\\,du$!

---

### Mistake 5: Circular Without Solving

If you get the original integral back, don't give up!

Solve algebraically: $I = \\ldots - I$ → $2I = \\ldots$

---

## Integration by Parts vs U-Substitution

### When to use what?

**U-Substitution**: Composite function with derivative present
- $\\int 2x(x^2+1)^5\\,dx$
- $\\int xe^{x^2}\\,dx$

**Integration by Parts**: Product of different types of functions
- $\\int x e^x\\,dx$ (polynomial × exponential)
- $\\int x \\sin x\\,dx$ (polynomial × trig)
- $\\int \\ln x\\,dx$ (logarithm)

---

## Quick Reference

### The Formula

$$\\int u\\,dv = uv - \\int v\\,du$$

### LIATE Priority for $u$

L - Logarithmic

I - Inverse trig

A - Algebraic

T - Trigonometric  

E - Exponential

### Steps

1. Choose $u$ and $dv$ (use LIATE)
2. Find $du$ and $v$
3. Apply formula
4. Evaluate remaining integral
5. Simplify and add +C

---

## 📝 Practice Strategy

1. **Use LIATE** to choose $u$ (first in list) and $dv$ (the rest)
2. **Find $du$** by differentiating $u$
3. **Find $v$** by integrating $dv$ (no +C yet!)
4. **Write out the formula** $uv - \\int v\\,du$ before substituting
5. **Evaluate** the new integral $\\int v\\,du$
6. **Check**: Does $du$ simplify things? (If not, try different choice)
7. **Be ready** to apply parts multiple times
8. **Watch for circular cases** - solve algebraically
9. **Add +C** at the very end
10. **Check** by differentiating your answer
`,
      exampleProblems: {
        create: [
          {
            question: 'Evaluate $\\int x^2 \\sin x\\,dx$ using integration by parts.',
            solution: `**First application of integration by parts**

**Step 1: Choose $u$ and $dv$**

Using LIATE: Algebraic before Trigonometric

$u = x^2$, $dv = \\sin x\\,dx$

---

**Step 2: Find $du$ and $v$**

$du = 2x\\,dx$

$v = \\int \\sin x\\,dx = -\\cos x$

---

**Step 3: Apply formula**

$$\\int x^2 \\sin x\\,dx = uv - \\int v\\,du$$

$$= x^2(-\\cos x) - \\int (-\\cos x)(2x)\\,dx$$

$$= -x^2 \\cos x + 2\\int x\\cos x\\,dx$$

---

**Second application on** $\\int x\\cos x\\,dx$:

$u = x$, $dv = \\cos x\\,dx$

$du = dx$, $v = \\sin x$

$$\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx$$

$$= x\\sin x - (-\\cos x) = x\\sin x + \\cos x$$

---

**Combine**:

$$\\int x^2 \\sin x\\,dx = -x^2\\cos x + 2(x\\sin x + \\cos x) + C$$

$$= -x^2\\cos x + 2x\\sin x + 2\\cos x + C$$

$$= (2-x^2)\\cos x + 2x\\sin x + C$$

**Answer**: $(2-x^2)\\cos x + 2x\\sin x + C$`,
            difficulty: Difficulty.HARD,
            order: 1,
          },
          {
            question: 'Evaluate $\\int x\\ln x\\,dx$.',
            solution: `**Step 1: Choose $u$ and $dv$**

Using LIATE: Logarithmic before Algebraic

$u = \\ln x$ (logarithmic - comes first in LIATE)

$dv = x\\,dx$ (algebraic)

---

**Step 2: Find $du$ and $v$**

$$du = \\frac{1}{x}\\,dx$$

$$v = \\int x\\,dx = \\frac{x^2}{2}$$

---

**Step 3: Apply formula**

$$\\int x\\ln x\\,dx = uv - \\int v\\,du$$

$$= (\\ln x)\\left(\\frac{x^2}{2}\\right) - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx$$

$$= \\frac{x^2\\ln x}{2} - \\int \\frac{x}{2}\\,dx$$

$$= \\frac{x^2\\ln x}{2} - \\frac{1}{2}\\int x\\,dx$$

$$= \\frac{x^2\\ln x}{2} - \\frac{1}{2} \\cdot \\frac{x^2}{2} + C$$

$$= \\frac{x^2\\ln x}{2} - \\frac{x^2}{4} + C$$

---

**Factor**:

$$= \\frac{x^2}{4}(2\\ln x - 1) + C$$

**Answer**: $\\frac{x^2\\ln x}{2} - \\frac{x^2}{4} + C$ or $\\frac{x^2}{4}(2\\ln x - 1) + C$`,
            difficulty: Difficulty.MEDIUM,
            order: 2,
          },
          {
            question: 'Evaluate $\\int e^x \\cos x\\,dx$.',
            solution: `This is a circular case!

**First application**:

$u = \\cos x$, $dv = e^x\\,dx$

$du = -\\sin x\\,dx$, $v = e^x$

$$\\int e^x \\cos x\\,dx = e^x\\cos x - \\int e^x(-\\sin x)\\,dx$$

$$= e^x\\cos x + \\int e^x\\sin x\\,dx$$

---

**Second application on** $\\int e^x\\sin x\\,dx$:

$u = \\sin x$, $dv = e^x\\,dx$

$du = \\cos x\\,dx$, $v = e^x$

$$\\int e^x\\sin x\\,dx = e^x\\sin x - \\int e^x\\cos x\\,dx$$

---

**Substitute back**:

Let $I = \\int e^x\\cos x\\,dx$

$$I = e^x\\cos x + (e^x\\sin x - I)$$

$$I = e^x\\cos x + e^x\\sin x - I$$

$$2I = e^x(\\cos x + \\sin x)$$

$$I = \\frac{e^x(\\cos x + \\sin x)}{2} + C$$

---

**Answer**: $\\frac{e^x(\\cos x + \\sin x)}{2} + C$`,
            difficulty: Difficulty.EXPERT,
            order: 3,
          },
        ],
      },
      flashcards: {
        create: [
          {
            front: 'What is the integration by parts formula?',
            back: '$\\int u\\,dv = uv - \\int v\\,du$. It\'s the product rule in reverse. Choose $u$ and $dv$ from integrand, find $du$ and $v$, then apply formula. Used for products of different types of functions.',
            hint: 'Product rule backwards',
          },
          {
            front: 'What is the LIATE rule for choosing $u$ in integration by parts?',
            back: 'LIATE priority: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Choose $u$ as the first type that appears (highest priority), and $dv$ is the rest. Example: $\\int x\\sin x\\,dx$ → $u=x$ (A), $dv=\\sin x\\,dx$ (T).',
            hint: 'Logarithmic, Inverse trig, Algebraic, Trig, Exponential',
          },
          {
            front: 'How do you handle circular integration by parts (like $\\int e^x\\sin x\\,dx$)?',
            back: 'Apply parts twice. The original integral reappears on the right side. Set $I = \\int e^x\\sin x\\,dx$, get equation like $I = ... - I$, solve algebraically: $2I = ...$, so $I = .../2 + C$.',
            hint: 'Solve algebraically when original integral reappears',
          },
          {
            front: 'When should you use integration by parts vs u-substitution?',
            back: 'U-sub: composite function with its derivative present. Parts: product of different function types (polynomial×exponential, polynomial×trig, logarithm, inverse trig). If both work, u-sub is usually simpler!',
            hint: 'U-sub for chain rule, parts for products',
          },
        ],
      },
    },
  })

  console.log('✅ Created 2 more Integration micro-lessons!')
  console.log('\nTopics created:')
  console.log('  3. U-Substitution Method')
  console.log('  4. Integration by Parts')
  console.log('\n💡 Integration techniques are building up!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
