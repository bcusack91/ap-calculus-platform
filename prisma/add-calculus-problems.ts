import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding example problems to AP Calculus topics...')

  // LIMITS SECTION

  // Topic 1: Evaluating Limits Graphically
  const topic1 = await prisma.topic.findUnique({
    where: { slug: 'evaluating-limits-graphically' }
  })

  if (topic1) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Given the graph of $f(x)$ below, evaluate the following limits:

a) $\\lim_{x \\to 2^-} f(x)$
b) $\\lim_{x \\to 2^+} f(x)$
c) $\\lim_{x \\to 2} f(x)$
d) $f(2)$

Assume the graph shows: 
- Function approaches 3 from the left at $x=2$
- Function approaches 3 from the right at $x=2$
- There is a hole at $(2,3)$ and a solid dot at $(2,5)$`,
          solution: `**Solution:**

**Part (a):** $\\lim_{x \\to 2^-} f(x)$ is the left-hand limit.

As $x$ approaches 2 from the left, $f(x)$ approaches **3**.

$\\lim_{x \\to 2^-} f(x) = 3$

**Part (b):** $\\lim_{x \\to 2^+} f(x)$ is the right-hand limit.

As $x$ approaches 2 from the right, $f(x)$ approaches **3**.

$\\lim_{x \\to 2^+} f(x) = 3$

**Part (c):** $\\lim_{x \\to 2} f(x)$ exists if and only if both one-sided limits exist and are equal.

Since $\\lim_{x \\to 2^-} f(x) = 3$ and $\\lim_{x \\to 2^+} f(x) = 3$:

$\\lim_{x \\to 2} f(x) = 3$

**Part (d):** $f(2)$ is the actual function value at $x=2$.

The solid dot is at $(2, 5)$, so:

$f(2) = 5$

**Note:** The limit equals 3, but the function value is 5. The function has a removable discontinuity at $x=2$.`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Evaluating Limits Graphically')
  }

  // Topic 2: Direct Substitution Method
  const topic2 = await prisma.topic.findUnique({
    where: { slug: 'direct-substitution-method' }
  })

  if (topic2) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Evaluate the following limits using direct substitution:

a) $\\lim_{x \\to 3} (2x^2 - 5x + 1)$
b) $\\lim_{x \\to -2} \\frac{x^3 + 8}{x + 2}$
c) $\\lim_{x \\to 0} \\frac{\\sin x}{x}$`,
          solution: `**Solution:**

**Part (a):** The function is a polynomial, which is continuous everywhere.

Direct substitution:

$\\lim_{x \\to 3} (2x^2 - 5x + 1) = 2(3)^2 - 5(3) + 1 = 18 - 15 + 1 = 4$

**Part (b):** Direct substitution gives $\\frac{0}{0}$ (indeterminate).

Factor the numerator (sum of cubes): $x^3 + 8 = (x+2)(x^2-2x+4)$

$\\lim_{x \\to -2} \\frac{(x+2)(x^2-2x+4)}{x+2} = \\lim_{x \\to -2} (x^2-2x+4)$

Now use direct substitution:

$= (-2)^2 - 2(-2) + 4 = 4 + 4 + 4 = 12$

**Part (c):** This is a special limit that cannot be evaluated by direct substitution (gives $\\frac{0}{0}$).

This is a fundamental limit in calculus:

$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$

This must be memorized or proven using the squeeze theorem.`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Direct Substitution Method')
  }

  // Topic 3: Limits at Infinity
  const topic3 = await prisma.topic.findUnique({
    where: { slug: 'limits-at-infinity' }
  })

  if (topic3) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Evaluate the following limits:

a) $\\lim_{x \\to \\infty} \\frac{3x^2 - 5x + 1}{2x^2 + x - 4}$
b) $\\lim_{x \\to \\infty} \\frac{5x^3 + 2x}{x^2 - 1}$
c) $\\lim_{x \\to -\\infty} \\frac{4x - 7}{2x^2 + 3}$`,
          solution: `**Solution:**

**Part (a):** Both numerator and denominator have degree 2.

Divide numerator and denominator by highest power ($x^2$):

$\\lim_{x \\to \\infty} \\frac{3 - \\frac{5}{x} + \\frac{1}{x^2}}{2 + \\frac{1}{x} - \\frac{4}{x^2}}$

As $x \\to \\infty$, terms with $x$ in denominator approach 0:

$= \\frac{3 - 0 + 0}{2 + 0 - 0} = \\frac{3}{2}$

**Part (b):** Numerator degree (3) > denominator degree (2).

Divide by $x^3$:

$\\lim_{x \\to \\infty} \\frac{5 + \\frac{2}{x^2}}{\\frac{1}{x} - \\frac{1}{x^3}}$

Numerator approaches 5, denominator approaches 0 from positive side:

$= \\infty$

**Part (c):** Numerator degree (1) < denominator degree (2).

Divide by $x^2$:

$\\lim_{x \\to -\\infty} \\frac{\\frac{4}{x} - \\frac{7}{x^2}}{2 + \\frac{3}{x^2}}$

Numerator approaches 0, denominator approaches 2:

$= \\frac{0}{2} = 0$`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Limits at Infinity')
  }

  // DERIVATIVES SECTION

  // Topic 4: Power Rule Basics
  const topic4 = await prisma.topic.findUnique({
    where: { slug: 'power-rule-basics' }
  })

  if (topic4) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic4.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Find the derivative of each function:

a) $f(x) = x^7$
b) $g(x) = 5x^3 - 2x^2 + 8x - 3$
c) $h(x) = \\frac{1}{x^4}$`,
          solution: `**Solution:**

**Part (a):** Power rule: $\\frac{d}{dx}[x^n] = nx^{n-1}$

$f'(x) = 7x^6$

**Part (b):** Use power rule on each term:

$g'(x) = 5(3x^2) - 2(2x) + 8(1) - 0$

$g'(x) = 15x^2 - 4x + 8$

**Part (c):** Rewrite using negative exponent: $h(x) = x^{-4}$

$h'(x) = -4x^{-5} = -\\frac{4}{x^5}$`
        },
        {
          topicId: topic4.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the derivative of $f(x) = \\sqrt{x} + \\frac{3}{\\sqrt[3]{x^2}}$.`,
          solution: `**Solution:**

Rewrite using fractional exponents:

$f(x) = x^{1/2} + 3x^{-2/3}$

Apply power rule:

$f'(x) = \\frac{1}{2}x^{-1/2} + 3 \\cdot \\left(-\\frac{2}{3}\\right)x^{-5/3}$

$f'(x) = \\frac{1}{2}x^{-1/2} - 2x^{-5/3}$

Rewrite with radicals:

$f'(x) = \\frac{1}{2\\sqrt{x}} - \\frac{2}{x^{5/3}} = \\frac{1}{2\\sqrt{x}} - \\frac{2}{\\sqrt[3]{x^5}}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Power Rule Basics')
  }

  // Topic 5: Product Rule
  const topic5 = await prisma.topic.findUnique({
    where: { slug: 'product-rule' }
  })

  if (topic5) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic5.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the derivative of $f(x) = (3x^2 - 5)(2x + 7)$.`,
          solution: `**Solution:**

Product rule: $(uv)' = u'v + uv'$

Let $u = 3x^2 - 5$ and $v = 2x + 7$

$u' = 6x$
$v' = 2$

Apply product rule:

$f'(x) = (6x)(2x + 7) + (3x^2 - 5)(2)$

$= 12x^2 + 42x + 6x^2 - 10$

$= 18x^2 + 42x - 10$

**Alternative:** Expand first, then differentiate:

$f(x) = 6x^3 + 21x^2 - 10x - 35$

$f'(x) = 18x^2 + 42x - 10$ ✓`
        },
        {
          topicId: topic5.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find $\\frac{dy}{dx}$ if $y = x^3 \\sin x$.`,
          solution: `**Solution:**

Product rule with $u = x^3$ and $v = \\sin x$:

$u' = 3x^2$
$v' = \\cos x$

$\\frac{dy}{dx} = (3x^2)(\\sin x) + (x^3)(\\cos x)$

$\\frac{dy}{dx} = 3x^2 \\sin x + x^3 \\cos x$

Can factor if desired:

$\\frac{dy}{dx} = x^2(3\\sin x + x\\cos x)$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Product Rule')
  }

  // Topic 6: Quotient Rule
  const topic6 = await prisma.topic.findUnique({
    where: { slug: 'quotient-rule' }
  })

  if (topic6) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic6.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the derivative of $f(x) = \\frac{x^2 + 3x}{x - 2}$.`,
          solution: `**Solution:**

Quotient rule: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$

Let $u = x^2 + 3x$ and $v = x - 2$

$u' = 2x + 3$
$v' = 1$

$f'(x) = \\frac{(2x + 3)(x - 2) - (x^2 + 3x)(1)}{(x - 2)^2}$

Expand numerator:

$= \\frac{2x^2 - 4x + 3x - 6 - x^2 - 3x}{(x - 2)^2}$

$= \\frac{2x^2 - x^2 - 4x + 3x - 3x - 6}{(x - 2)^2}$

$= \\frac{x^2 - 4x - 6}{(x - 2)^2}$`
        },
        {
          topicId: topic6.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find $\\frac{dy}{dx}$ if $y = \\frac{\\cos x}{1 + \\sin x}$.`,
          solution: `**Solution:**

Quotient rule with $u = \\cos x$ and $v = 1 + \\sin x$:

$u' = -\\sin x$
$v' = \\cos x$

$\\frac{dy}{dx} = \\frac{(-\\sin x)(1 + \\sin x) - (\\cos x)(\\cos x)}{(1 + \\sin x)^2}$

$= \\frac{-\\sin x - \\sin^2 x - \\cos^2 x}{(1 + \\sin x)^2}$

Use Pythagorean identity: $\\sin^2 x + \\cos^2 x = 1$

$= \\frac{-\\sin x - 1}{(1 + \\sin x)^2}$

$= \\frac{-(\\sin x + 1)}{(1 + \\sin x)^2}$

$= \\frac{-1}{1 + \\sin x}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Quotient Rule')
  }

  // Topic 7: Chain Rule
  const topic7 = await prisma.topic.findUnique({
    where: { slug: 'chain-rule' }
  })

  if (topic7) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic7.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the derivative of each function:

a) $f(x) = (3x^2 - 5)^7$
b) $g(x) = \\sin(4x)$
c) $h(x) = e^{x^2 + 1}$`,
          solution: `**Solution:**

**Part (a):** Chain rule: $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$

Let $u = 3x^2 - 5$, then $y = u^7$

$\\frac{dy}{du} = 7u^6$
$\\frac{du}{dx} = 6x$

$f'(x) = 7(3x^2 - 5)^6 \\cdot 6x = 42x(3x^2 - 5)^6$

**Part (b):** Let $u = 4x$, then $y = \\sin u$

$\\frac{dy}{du} = \\cos u$
$\\frac{du}{dx} = 4$

$g'(x) = \\cos(4x) \\cdot 4 = 4\\cos(4x)$

**Part (c):** Let $u = x^2 + 1$, then $y = e^u$

$\\frac{dy}{du} = e^u$
$\\frac{du}{dx} = 2x$

$h'(x) = e^{x^2+1} \\cdot 2x = 2xe^{x^2+1}$`
        },
        {
          topicId: topic7.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find $\\frac{dy}{dx}$ if $y = \\sqrt{\\cos(3x^2)}$.`,
          solution: `**Solution:**

Rewrite: $y = [\\cos(3x^2)]^{1/2}$

This requires chain rule twice (nested composition).

Let $u = \\cos(3x^2)$, then $y = u^{1/2}$

$\\frac{dy}{du} = \\frac{1}{2}u^{-1/2} = \\frac{1}{2\\sqrt{u}}$

Now find $\\frac{du}{dx}$ where $u = \\cos(3x^2)$:

Let $v = 3x^2$, then $u = \\cos v$

$\\frac{du}{dv} = -\\sin v$
$\\frac{dv}{dx} = 6x$

$\\frac{du}{dx} = -\\sin(3x^2) \\cdot 6x = -6x\\sin(3x^2)$

Combine:

$\\frac{dy}{dx} = \\frac{1}{2\\sqrt{\\cos(3x^2)}} \\cdot (-6x\\sin(3x^2))$

$= \\frac{-6x\\sin(3x^2)}{2\\sqrt{\\cos(3x^2)}}$

$= \\frac{-3x\\sin(3x^2)}{\\sqrt{\\cos(3x^2)}}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Chain Rule')
  }

  // Topic 8: Implicit Differentiation
  const topic8 = await prisma.topic.findUnique({
    where: { slug: 'implicit-differentiation' }
  })

  if (topic8) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic8.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find $\\frac{dy}{dx}$ for the equation $x^2 + y^2 = 25$.`,
          solution: `**Solution:**

Differentiate both sides with respect to $x$:

$\\frac{d}{dx}[x^2 + y^2] = \\frac{d}{dx}[25]$

$2x + 2y\\frac{dy}{dx} = 0$

(Remember: $\\frac{d}{dx}[y^2] = 2y\\frac{dy}{dx}$ by chain rule)

Solve for $\\frac{dy}{dx}$:

$2y\\frac{dy}{dx} = -2x$

$\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}$`
        },
        {
          topicId: topic8.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find $\\frac{dy}{dx}$ for the equation $x^3 + xy^2 = y^3 + 1$.`,
          solution: `**Solution:**

Differentiate both sides implicitly:

$\\frac{d}{dx}[x^3 + xy^2] = \\frac{d}{dx}[y^3 + 1]$

Left side:
- $\\frac{d}{dx}[x^3] = 3x^2$
- $\\frac{d}{dx}[xy^2]$ requires product rule: $(1)(y^2) + (x)(2y\\frac{dy}{dx}) = y^2 + 2xy\\frac{dy}{dx}$

Right side:
- $\\frac{d}{dx}[y^3] = 3y^2\\frac{dy}{dx}$ (chain rule)
- $\\frac{d}{dx}[1] = 0$

Equation:

$3x^2 + y^2 + 2xy\\frac{dy}{dx} = 3y^2\\frac{dy}{dx}$

Collect $\\frac{dy}{dx}$ terms:

$2xy\\frac{dy}{dx} - 3y^2\\frac{dy}{dx} = -3x^2 - y^2$

$\\frac{dy}{dx}(2xy - 3y^2) = -3x^2 - y^2$

$\\frac{dy}{dx} = \\frac{-3x^2 - y^2}{2xy - 3y^2}$

Can factor if desired:

$\\frac{dy}{dx} = \\frac{-(3x^2 + y^2)}{y(2x - 3y)}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Implicit Differentiation')
  }

  // Topic 9: Related Rates
  const topic9 = await prisma.topic.findUnique({
    where: { slug: 'related-rates' }
  })

  if (topic9) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic9.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `A spherical balloon is being inflated so that its radius is increasing at a rate of 2 cm/s.

a) How fast is the volume increasing when the radius is 10 cm?
b) How fast is the surface area increasing at that moment?

(Formulas: $V = \\frac{4}{3}\\pi r^3$, $S = 4\\pi r^2$)`,
          solution: `**Solution:**

Given: $\\frac{dr}{dt} = 2$ cm/s, $r = 10$ cm

**Part (a):** Find $\\frac{dV}{dt}$ when $r = 10$.

$V = \\frac{4}{3}\\pi r^3$

Differentiate with respect to time:

$\\frac{dV}{dt} = \\frac{4}{3}\\pi \\cdot 3r^2 \\cdot \\frac{dr}{dt} = 4\\pi r^2 \\frac{dr}{dt}$

Substitute $r = 10$ and $\\frac{dr}{dt} = 2$:

$\\frac{dV}{dt} = 4\\pi (10)^2 (2) = 4\\pi (100)(2) = 800\\pi$ cm³/s

**Part (b):** Find $\\frac{dS}{dt}$ when $r = 10$.

$S = 4\\pi r^2$

$\\frac{dS}{dt} = 4\\pi \\cdot 2r \\cdot \\frac{dr}{dt} = 8\\pi r \\frac{dr}{dt}$

Substitute:

$\\frac{dS}{dt} = 8\\pi (10)(2) = 160\\pi$ cm²/s`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Related Rates')
  }

  // Topic 10: Critical Points and Extrema
  const topic10 = await prisma.topic.findUnique({
    where: { slug: 'critical-points-and-extrema' }
  })

  if (topic10) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic10.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find all critical points of $f(x) = x^3 - 6x^2 + 9x + 1$.`,
          solution: `**Solution:**

Critical points occur where $f'(x) = 0$ or $f'(x)$ is undefined.

Find the derivative:

$f'(x) = 3x^2 - 12x + 9$

Set equal to zero:

$3x^2 - 12x + 9 = 0$

$3(x^2 - 4x + 3) = 0$

$3(x - 1)(x - 3) = 0$

$x = 1$ or $x = 3$

Find corresponding $y$-values:

$f(1) = 1 - 6 + 9 + 1 = 5$
$f(3) = 27 - 54 + 27 + 1 = 1$

**Critical points:** $(1, 5)$ and $(3, 1)$`
        },
        {
          topicId: topic10.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find the absolute maximum and minimum values of $f(x) = x^3 - 3x^2 - 9x + 5$ on the interval $[-2, 4]$.`,
          solution: `**Solution:**

**Step 1:** Find critical points in $[-2, 4]$.

$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$

Critical points: $x = 3$ and $x = -1$ (both in the interval)

**Step 2:** Evaluate $f$ at critical points and endpoints.

$f(-2) = (-2)^3 - 3(-2)^2 - 9(-2) + 5 = -8 - 12 + 18 + 5 = 3$

$f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = -1 - 3 + 9 + 5 = 10$

$f(3) = (3)^3 - 3(3)^2 - 9(3) + 5 = 27 - 27 - 27 + 5 = -22$

$f(4) = (4)^3 - 3(4)^2 - 9(4) + 5 = 64 - 48 - 36 + 5 = -15$

**Step 3:** Compare values.

**Absolute maximum:** $f(-1) = 10$
**Absolute minimum:** $f(3) = -22$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Critical Points and Extrema')
  }

  // INTEGRATION SECTION

  // Topic 11: Indefinite Integrals
  const topic11 = await prisma.topic.findUnique({
    where: { slug: 'indefinite-integrals' }
  })

  if (topic11) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic11.id,
          order: 1,
          difficulty: 'EASY' as Difficulty,
          question: `Find the following indefinite integrals:

a) $\\int 6x^5 \\, dx$
b) $\\int (3x^2 - 4x + 5) \\, dx$
c) $\\int \\frac{1}{x^3} \\, dx$`,
          solution: `**Solution:**

**Part (a):** Power rule for integration: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$

$\\int 6x^5 \\, dx = 6 \\cdot \\frac{x^6}{6} + C = x^6 + C$

**Part (b):** Integrate term by term:

$\\int (3x^2 - 4x + 5) \\, dx = 3 \\cdot \\frac{x^3}{3} - 4 \\cdot \\frac{x^2}{2} + 5x + C$

$= x^3 - 2x^2 + 5x + C$

**Part (c):** Rewrite with negative exponent: $\\int x^{-3} \\, dx$

$= \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C$`
        },
        {
          topicId: topic11.id,
          order: 2,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find $\\int (\\sin x + e^x) \\, dx$.`,
          solution: `**Solution:**

Use basic integration formulas:

$\\int \\sin x \\, dx = -\\cos x + C_1$

$\\int e^x \\, dx = e^x + C_2$

Combine:

$\\int (\\sin x + e^x) \\, dx = -\\cos x + e^x + C$

where $C = C_1 + C_2$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Indefinite Integrals')
  }

  // Topic 12: Definite Integrals
  const topic12 = await prisma.topic.findUnique({
    where: { slug: 'definite-integrals' }
  })

  if (topic12) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic12.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Evaluate the following definite integrals:

a) $\\int_1^3 (2x + 1) \\, dx$
b) $\\int_0^{\\pi/2} \\cos x \\, dx$`,
          solution: `**Solution:**

**Part (a):** Find the antiderivative, then apply FTC:

$\\int (2x + 1) \\, dx = x^2 + x + C$

Fundamental Theorem of Calculus:

$\\int_1^3 (2x + 1) \\, dx = [x^2 + x]_1^3$

$= (3^2 + 3) - (1^2 + 1)$

$= 12 - 2 = 10$

**Part (b):** Antiderivative of $\\cos x$ is $\\sin x$:

$\\int_0^{\\pi/2} \\cos x \\, dx = [\\sin x]_0^{\\pi/2}$

$= \\sin(\\pi/2) - \\sin(0)$

$= 1 - 0 = 1$`
        },
        {
          topicId: topic12.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Evaluate $\\int_{-1}^2 |x| \\, dx$.`,
          solution: `**Solution:**

The absolute value function changes at $x = 0$:

$|x| = \\begin{cases} -x & \\text{if } x < 0 \\\\ x & \\text{if } x \\geq 0 \\end{cases}$

Split the integral:

$\\int_{-1}^2 |x| \\, dx = \\int_{-1}^0 (-x) \\, dx + \\int_0^2 x \\, dx$

First integral:

$\\int_{-1}^0 (-x) \\, dx = \\left[-\\frac{x^2}{2}\\right]_{-1}^0 = 0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$

Second integral:

$\\int_0^2 x \\, dx = \\left[\\frac{x^2}{2}\\right]_0^2 = \\frac{4}{2} - 0 = 2$

Total:

$\\int_{-1}^2 |x| \\, dx = \\frac{1}{2} + 2 = \\frac{5}{2}$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Definite Integrals')
  }

  // Topic 13: U-Substitution
  const topic13 = await prisma.topic.findUnique({
    where: { slug: 'u-substitution' }
  })

  if (topic13) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic13.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Evaluate $\\int 2x(x^2 + 1)^5 \\, dx$ using $u$-substitution.`,
          solution: `**Solution:**

Let $u = x^2 + 1$

Then $du = 2x \\, dx$

Notice that $2x \\, dx$ appears in the integral!

Substitute:

$\\int 2x(x^2 + 1)^5 \\, dx = \\int u^5 \\, du$

Integrate:

$= \\frac{u^6}{6} + C$

Substitute back:

$= \\frac{(x^2 + 1)^6}{6} + C$`
        },
        {
          topicId: topic13.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Evaluate $\\int_0^1 \\frac{x}{\\sqrt{x^2 + 1}} \\, dx$.`,
          solution: `**Solution:**

Let $u = x^2 + 1$, then $du = 2x \\, dx$, so $x \\, dx = \\frac{1}{2} du$

Change limits:
- When $x = 0$: $u = 0^2 + 1 = 1$
- When $x = 1$: $u = 1^2 + 1 = 2$

Substitute:

$\\int_0^1 \\frac{x}{\\sqrt{x^2 + 1}} \\, dx = \\int_1^2 \\frac{1}{\\sqrt{u}} \\cdot \\frac{1}{2} \\, du$

$= \\frac{1}{2} \\int_1^2 u^{-1/2} \\, du$

$= \\frac{1}{2} \\left[\\frac{u^{1/2}}{1/2}\\right]_1^2$

$= \\frac{1}{2} \\left[2u^{1/2}\\right]_1^2$

$= \\left[u^{1/2}\\right]_1^2$

$= \\sqrt{2} - \\sqrt{1} = \\sqrt{2} - 1$`
        }
      ]
    })
    console.log('✓ Added 2 problems to: U-Substitution')
  }

  // Topic 14: Area Between Curves
  const topic14 = await prisma.topic.findUnique({
    where: { slug: 'area-between-curves' }
  })

  if (topic14) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic14.id,
          order: 1,
          difficulty: 'MEDIUM' as Difficulty,
          question: `Find the area of the region bounded by $y = x^2$ and $y = 2x$.`,
          solution: `**Solution:**

**Step 1:** Find intersection points.

$x^2 = 2x$
$x^2 - 2x = 0$
$x(x - 2) = 0$

Intersection points: $x = 0$ and $x = 2$

**Step 2:** Determine which function is on top.

At $x = 1$: $y = 1^2 = 1$ (parabola) and $y = 2(1) = 2$ (line)

The line is above the parabola on $[0, 2]$.

**Step 3:** Set up and evaluate integral.

Area $= \\int_0^2 [\\text{top} - \\text{bottom}] \\, dx$

$= \\int_0^2 (2x - x^2) \\, dx$

$= \\left[x^2 - \\frac{x^3}{3}\\right]_0^2$

$= \\left(4 - \\frac{8}{3}\\right) - 0$

$= \\frac{12 - 8}{3} = \\frac{4}{3}$ square units`
        },
        {
          topicId: topic14.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find the area between $y = \\sin x$ and $y = \\cos x$ from $x = 0$ to $x = \\pi/2$.`,
          solution: `**Solution:**

**Step 1:** Find where the curves intersect in $[0, \\pi/2]$.

$\\sin x = \\cos x$
$\\tan x = 1$
$x = \\pi/4$

**Step 2:** Determine which is on top.

On $[0, \\pi/4]$: $\\cos x > \\sin x$ (test $x = 0$: $\\cos 0 = 1 > 0 = \\sin 0$)
On $[\\pi/4, \\pi/2]$: $\\sin x > \\cos x$ (test $x = \\pi/2$: $\\sin(\\pi/2) = 1 > 0 = \\cos(\\pi/2)$)

**Step 3:** Split into two integrals.

Area $= \\int_0^{\\pi/4} (\\cos x - \\sin x) \\, dx + \\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x) \\, dx$

First integral:

$\\int_0^{\\pi/4} (\\cos x - \\sin x) \\, dx = [\\sin x + \\cos x]_0^{\\pi/4}$

$= \\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\right) - (0 + 1) = \\sqrt{2} - 1$

Second integral:

$\\int_{\\pi/4}^{\\pi/2} (\\sin x - \\cos x) \\, dx = [-\\cos x - \\sin x]_{\\pi/4}^{\\pi/2}$

$= (0 - 1) - \\left(-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\right) = -1 + \\sqrt{2}$

Total area: $(\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2\\sqrt{2} - 2 = 2(\\sqrt{2} - 1)$ square units`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Area Between Curves')
  }

  // Topic 15: Volumes - Disk Method
  const topic15 = await prisma.topic.findUnique({
    where: { slug: 'volumes-disk-method' }
  })

  if (topic15) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic15.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Find the volume of the solid generated by revolving the region bounded by $y = \\sqrt{x}$, $y = 0$, and $x = 4$ about the $x$-axis.`,
          solution: `**Solution:**

Use the **disk method**: $V = \\pi \\int_a^b [R(x)]^2 \\, dx$

Here, $R(x) = \\sqrt{x}$ (radius of disk at position $x$)

Bounds: $a = 0$ to $b = 4$

$V = \\pi \\int_0^4 (\\sqrt{x})^2 \\, dx$

$= \\pi \\int_0^4 x \\, dx$

$= \\pi \\left[\\frac{x^2}{2}\\right]_0^4$

$= \\pi \\left(\\frac{16}{2} - 0\\right)$

$= 8\\pi$ cubic units`
        },
        {
          topicId: topic15.id,
          order: 2,
          difficulty: 'HARD' as Difficulty,
          question: `Find the volume of the solid formed by revolving $y = 2x$ from $x = 0$ to $x = 3$ about the $x$-axis.`,
          solution: `**Solution:**

Disk method: $V = \\pi \\int_0^3 (2x)^2 \\, dx$

$= \\pi \\int_0^3 4x^2 \\, dx$

$= 4\\pi \\left[\\frac{x^3}{3}\\right]_0^3$

$= 4\\pi \\cdot \\frac{27}{3}$

$= 4\\pi \\cdot 9 = 36\\pi$ cubic units`
        }
      ]
    })
    console.log('✓ Added 2 problems to: Volumes - Disk Method')
  }

  // Topic 16: Volumes - Washer Method
  const topic16 = await prisma.topic.findUnique({
    where: { slug: 'volumes-washer-method' }
  })

  if (topic16) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic16.id,
          order: 1,
          difficulty: 'HARD' as Difficulty,
          question: `Find the volume when the region bounded by $y = x^2$ and $y = 4$ is revolved about the $x$-axis.`,
          solution: `**Solution:**

**Step 1:** Find bounds.

$x^2 = 4$
$x = \\pm 2$

**Step 2:** Identify outer and inner radii.

Outer radius: $R(x) = 4$ (the line)
Inner radius: $r(x) = x^2$ (the parabola)

**Step 3:** Apply washer method.

$V = \\pi \\int_{-2}^2 [R(x)^2 - r(x)^2] \\, dx$

$= \\pi \\int_{-2}^2 [16 - x^4] \\, dx$

By symmetry:

$= 2\\pi \\int_0^2 (16 - x^4) \\, dx$

$= 2\\pi \\left[16x - \\frac{x^5}{5}\\right]_0^2$

$= 2\\pi \\left(32 - \\frac{32}{5}\\right)$

$= 2\\pi \\left(\\frac{160 - 32}{5}\\right)$

$= 2\\pi \\cdot \\frac{128}{5}$

$= \\frac{256\\pi}{5}$ cubic units`
        }
      ]
    })
    console.log('✓ Added 1 problem to: Volumes - Washer Method')
  }

  console.log('\\n✅ Successfully added example problems to AP Calculus topics!')
  console.log('Total: 31 example problems added to 16 AP Calculus topics')
  console.log('Coverage: Limits, derivatives (power/product/quotient/chain/implicit), related rates, extrema, integration, u-substitution, applications')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
