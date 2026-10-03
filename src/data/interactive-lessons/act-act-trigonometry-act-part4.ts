export const actTrigPart4Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t4-intro',
      type: 'text' as const,
      content: `
# 🔁 Trig Identities

**Part 4 of 7 — Reciprocal Functions, Quotient & Pythagorean Identities, Double-Angle Formulas**

An **identity** is an equation that is true for every angle where both sides are defined. On the ACT, identities show up in two ways: "Which expression is equivalent to…?" and "If $\\cos\\theta = \\ldots$, what is $\\sec\\theta$ (or $\\sin 2\\theta$)?" A short list of identities covers almost all of them.

## The Reciprocal Functions

| Function | Definition | Right-triangle ratio |
|---|---|---|
| cosecant | $\\csc\\theta = \\dfrac{1}{\\sin\\theta}$ | $\\dfrac{\\text{hyp}}{\\text{opp}}$ |
| secant | $\\sec\\theta = \\dfrac{1}{\\cos\\theta}$ | $\\dfrac{\\text{hyp}}{\\text{adj}}$ |
| cotangent | $\\cot\\theta = \\dfrac{1}{\\tan\\theta}$ | $\\dfrac{\\text{adj}}{\\text{opp}}$ |

**Pairing trap:** secant goes with **cosine** and cosecant goes with **sine**, the opposite of what the letters suggest. One way to remember it: each pair has exactly one "co-" (sine/**co**secant, **co**sine/secant, tangent/**co**tangent).

**Notation trap:** $\\sin^{-1}x$ is the inverse sine (an angle). $(\\sin x)^{-1} = \\frac{1}{\\sin x} = \\csc x$ is the reciprocal. They are different.

Reciprocals keep the sign: if $\\cos\\theta = -\\frac{2}{7}$, then $\\sec\\theta = -\\frac{7}{2}$.

## Quotient Identities

$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\qquad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$$

These come straight from the unit circle: $\\tan\\theta = \\frac{y}{x}$, and $y = \\sin\\theta$, $x = \\cos\\theta$.

## Pythagorean Identities

$$\\sin^2\\theta + \\cos^2\\theta = 1$$

Divide every term by $\\cos^2\\theta$ or by $\\sin^2\\theta$ to get the other two:

$$1 + \\tan^2\\theta = \\sec^2\\theta, \\qquad 1 + \\cot^2\\theta = \\csc^2\\theta$$

Be ready to spot the rearranged forms:

| Expression | Equals |
|---|---|
| $1 - \\sin^2\\theta$ | $\\cos^2\\theta$ |
| $1 - \\cos^2\\theta$ | $\\sin^2\\theta$ |
| $\\sec^2\\theta - 1$ | $\\tan^2\\theta$ |
| $\\csc^2\\theta - 1$ | $\\cot^2\\theta$ |

Remember that $\\sin^2\\theta$ means $(\\sin\\theta)^2$. The identity works for **any** angle, so $\\sin^2 17^\\circ + \\cos^2 17^\\circ = 1$ with no calculator.

## Cofunction Identities

Complementary angles swap sine and cosine:

$$\\sin(90^\\circ - \\theta) = \\cos\\theta, \\quad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\quad \\tan(90^\\circ - \\theta) = \\cot\\theta$$

So if $\\sin\\theta = \\cos 25^\\circ$ for an acute angle θ, then $\\theta = 65^\\circ$.

## Double-Angle Identities

When the ACT needs these, it often prints them in the question, but you should recognize them on sight:

$$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$

$$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$

**The big trap:** $\\sin 2\\theta \\neq 2\\sin\\theta$. Doubling the angle does not double the value. (Test it: $\\sin 60^\\circ \\approx 0.87$, but $2\\sin 30^\\circ = 1$.) Likewise $\\sin(A + B) \\neq \\sin A + \\sin B$.

To use $\\sin 2\\theta$ when you are given only $\\sin\\theta$, find $\\cos\\theta$ first with the Pythagorean identity (and the correct sign for the quadrant).

## Strategy 1: Simplifying an Expression

1. **Rewrite everything in sines and cosines** (sec, csc, tan, cot all have sin/cos forms).
2. **Simplify the fractions**: multiply by reciprocals, cancel common factors.
3. **Look for a Pythagorean pattern** like $1 - \\cos^2\\theta$.

Example: $\\csc\\theta \\cdot \\tan\\theta = \\frac{1}{\\sin\\theta} \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{1}{\\cos\\theta} = \\sec\\theta$.

**Backup plan:** plug in an angle such as 30° or 60° into the original expression and into each answer choice. The equivalent one gives the same number. (Avoid 45°, where sine and cosine are equal and can hide a wrong choice.)

## Strategy 2: Finding One Value from Another

Given one ratio, sketch a right triangle (or use $\\sin^2\\theta + \\cos^2\\theta = 1$), then attach the sign from the quadrant.

**In terms of a variable:** if $\\sin x = k$ for an acute angle $x$, draw opposite $k$ and hypotenuse 1. The adjacent leg is $\\sqrt{1 - k^2}$, so

$$\\cos x = \\sqrt{1 - k^2}, \\qquad \\tan x = \\frac{k}{\\sqrt{1 - k^2}}$$
      `
    },
    {
      id: 'act-t4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Simplify with a Pythagorean pattern</b></summary>

**Question:** Simplify $\\dfrac{1 - \\cos^2\\theta}{\\sin\\theta\\cos\\theta}$.

**Solution:**
1. Replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$: $\\dfrac{\\sin^2\\theta}{\\sin\\theta\\cos\\theta}$.
2. Cancel one $\\sin\\theta$: $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$. ✓
</details>

<details>
<summary><b>Example 2: Convert to sines and cosines</b></summary>

**Question:** Simplify $\\sec\\theta\\cot\\theta$.

**Solution:** $\\dfrac{1}{\\cos\\theta} \\cdot \\dfrac{\\cos\\theta}{\\sin\\theta} = \\dfrac{1}{\\sin\\theta} = \\csc\\theta$. ✓
</details>

<details>
<summary><b>Example 3: Double angle from one given ratio</b></summary>

**Question:** θ is acute and $\\cos\\theta = \\frac{3}{5}$. Find $\\sin 2\\theta$ and $\\cos 2\\theta$.

**Solution:**
1. 3-4-5 triangle: $\\sin\\theta = \\frac{4}{5}$.
2. $\\sin 2\\theta = 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$.
3. $\\cos 2\\theta = \\frac{9}{25} - \\frac{16}{25} = -\\frac{7}{25}$. (Negative is fine: θ ≈ 53°, so 2θ ≈ 106° is in Quadrant II.) ✓
</details>

<details>
<summary><b>Example 4: Answer in terms of a variable</b></summary>

**Question:** $\\cos x = k$ for an acute angle $x$. Express $\\tan x$ in terms of $k$.

**Solution:** Adjacent $k$, hypotenuse 1, opposite $\\sqrt{1 - k^2}$. So $\\tan x = \\dfrac{\\sqrt{1 - k^2}}{k}$. ✓
</details>
      `
    },
    {
      id: 'act-t4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Reciprocals & Basic Identities** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $\\sin\\theta = \\frac{4}{9}$, what is $\\csc\\theta$?',
            options: ['$\\frac{9}{4}$', '$\\frac{9}{\\sqrt{65}}$', '$-\\frac{4}{9}$', '$\\frac{\\sqrt{65}}{9}$'],
            correctAnswer: 0,
            explanation: 'Cosecant is the reciprocal of sine: csc θ = 9/4. 9/√65 is the reciprocal of cosine (for an acute angle, cos θ = √65/9), so it is sec θ, the classic secant/cosecant mix-up. −4/9 is the opposite of sin θ, not its reciprocal, and √65/9 is cos θ itself.'
          },
          {
            question: 'For all θ where it is defined, $\\cos\\theta \\cdot \\tan\\theta$ is equivalent to which expression?',
            options: ['$\\cot\\theta$', '$\\sec\\theta$', '$\\sin\\theta$', '$1$'],
            correctAnswer: 2,
            explanation: 'cos θ · (sin θ/cos θ) = sin θ, because the cosines cancel. cot θ and sec θ would leave a cosine in the result, and 1 would require tan θ to be the reciprocal of cos θ, which is sec θ.'
          },
          {
            question: 'What is the value of $\\sin^2 17^\\circ + \\cos^2 17^\\circ$?',
            options: ['$0$', '$2$', '$\\sin 34^\\circ$', '$1$'],
            correctAnswer: 3,
            explanation: 'The Pythagorean identity holds for every angle, so the sum is exactly 1. A sum of 0 is impossible because both squares are positive for 17°, and 2 would need each square to equal 1 on its own. And sin 34° confuses this expression with the double-angle formula 2 sin 17° cos 17°.'
          },
          {
            question: 'Which expression is equal to $1 + \\tan^2\\theta$ for all θ where both are defined?',
            options: ['$\\csc^2\\theta$', '$\\sec^2\\theta$', '$\\cot^2\\theta$', '$\\cos^2\\theta$'],
            correctAnswer: 1,
            explanation: 'Dividing sin²θ + cos²θ = 1 by cos²θ gives tan²θ + 1 = sec²θ. csc²θ equals 1 + cot²θ, the version you get by dividing by sin²θ. cot²θ and cos²θ are reciprocals of the pieces, not the sum.'
          },
          {
            question: 'For all θ where it is defined, $\\dfrac{\\cot\\theta}{\\csc\\theta}$ is equivalent to which expression?',
            options: ['$\\sin\\theta$', '$\\tan\\theta$', '$\\sec\\theta$', '$\\cos\\theta$'],
            correctAnswer: 3,
            explanation: '(cos θ/sin θ) ÷ (1/sin θ) = (cos θ/sin θ) · sin θ = cos θ. sin θ comes from flipping the wrong fraction, and tan θ and sec θ both put a cosine in the denominator, but the cosine here ends up in the numerator.'
          }
        ]
      }
    },
    {
      id: 'act-t4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Rewrite in Sines and Cosines** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sec θ = …',
            options: ['1/sin θ', '1/cos θ', 'cos θ/sin θ', 'sin θ/cos θ']
          },
          {
            label: 'cot θ = …',
            options: ['1/sin θ', '1/cos θ', 'cos θ/sin θ', 'sin θ/cos θ']
          },
          {
            label: '1 − sin²θ = …',
            options: ['cos²θ', 'tan²θ', 'sec²θ', '−cos²θ']
          }
        ],
        correctAnswers: ['1/cos θ', 'cos θ/sin θ', 'cos²θ'],
        hint1: 'Secant pairs with cosine.',
        hint2: 'Cotangent is the reciprocal of tangent.',
        hint3: 'Rearrange sin²θ + cos²θ = 1.',
        explanation: 'sec θ = 1/cos θ; cot θ = 1/tan θ = cos θ/sin θ; and subtracting sin²θ from both sides of the Pythagorean identity gives 1 − sin²θ = cos²θ.'
      }
    },
    {
      id: 'act-t4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

<details>
<summary><b>Try it: Simplify (sec θ − cos θ).</b></summary>

$\\frac{1}{\\cos\\theta} - \\cos\\theta = \\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\frac{\\sin^2\\theta}{\\cos\\theta} = \\sin\\theta \\cdot \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta\\tan\\theta$.
</details>

<details>
<summary><b>Try it: θ is acute and sin θ = 0.8. Find sin 2θ.</b></summary>

$\\cos\\theta = \\sqrt{1 - 0.64} = 0.6$, so $\\sin 2\\theta = 2(0.8)(0.6) = 0.96$. Doubling 0.8 to get 1.6 is impossible, since a sine is never greater than 1.
</details>

<details>
<summary><b>Try it: Check an answer choice by plugging in. Is (sin θ)/(tan θ) equal to cos θ?</b></summary>

Try θ = 60°: $\\frac{\\sqrt{3}/2}{\\sqrt{3}} = \\frac{1}{2}$, and $\\cos 60^\\circ = \\frac{1}{2}$. They match. Algebraically, $\\sin\\theta \\cdot \\frac{\\cos\\theta}{\\sin\\theta} = \\cos\\theta$.
</details>

**ACT Tip:** When every answer choice is a single trig function, the expression almost always simplifies by "convert to sin and cos, then cancel." When the choices contain squares, look for a Pythagorean identity.
      `
    },
    {
      id: 'act-t4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'θ is an acute angle with $\\cos\\theta = \\frac{5}{13}$. Given that $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, what is $\\sin 2\\theta$?',
            options: ['$\\frac{10}{13}$', '$\\frac{120}{169}$', '$\\frac{60}{169}$', '$\\frac{24}{13}$'],
            correctAnswer: 1,
            explanation: 'From the 5-12-13 triangle, sin θ = 12/13, so sin 2θ = 2(12/13)(5/13) = 120/169. 24/13 doubles sin θ, which cannot be right because a sine is never greater than 1. 10/13 doubles cos θ, the same mistake with the other ratio, and 60/169 forgets the factor of 2.'
          },
          {
            question: 'If $\\sin x = k$, where $x$ is an acute angle, which expression is equal to $\\cos x$?',
            options: ['$1 - k^2$', '$1 - k$', '$\\sqrt{1 - k^2}$', '$\\frac{1}{k}$'],
            correctAnswer: 2,
            explanation: 'cos²x = 1 − sin²x = 1 − k², and cos x is positive for an acute angle, so cos x = √(1 − k²). 1 − k² is cos²x, not cos x. 1 − k subtracts without squaring, and 1/k is csc x.'
          },
          {
            question: 'For an acute angle θ, $\\sin\\theta = \\cos 25^\\circ$. What is the measure of θ?',
            options: ['65°', '25°', '115°', '155°'],
            correctAnswer: 0,
            explanation: 'By the cofunction identity, sin(90° − 25°) = cos 25°, so θ = 65°. 25° would make sin θ = sin 25°, which equals cos 65°, not cos 25°. 115° and 155° are not acute.'
          },
          {
            question: 'Which expression is equivalent to $\\cos 2\\theta$ for all values of θ?',
            options: ['$\\sin^2\\theta - \\cos^2\\theta$', '$\\cos^2\\theta + \\sin^2\\theta$', '$2\\sin\\theta\\cos\\theta$', '$1 - 2\\sin^2\\theta$'],
            correctAnswer: 3,
            explanation: 'Substitute cos²θ = 1 − sin²θ into cos²θ − sin²θ to get 1 − 2 sin²θ. sin²θ − cos²θ has the subtraction reversed, so it equals −cos 2θ. cos²θ + sin²θ adds instead of subtracting, and that sum is always 1. 2 sin θ cos θ is sin 2θ.'
          },
          {
            question: 'For all θ where it is defined, $\\sec\\theta - \\cos\\theta$ is equivalent to which expression?',
            options: ['$\\sin\\theta\\tan\\theta$', '$\\tan\\theta$', '$\\sin\\theta$', '$\\tan^2\\theta$'],
            correctAnswer: 0,
            explanation: 'Use a common denominator: (1 − cos²θ)/cos θ = sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ. tan θ and sin θ each keep only one of the two factors. tan²θ equals sec²θ − 1, which looks similar but squares the secant and subtracts 1 rather than subtracting cos θ.'
          }
        ]
      }
    },
    {
      id: 'act-t4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Reciprocals:** $\\csc\\theta = \\frac{1}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\cot\\theta = \\frac{1}{\\tan\\theta}$. Secant goes with cosine.
- **Quotients:** $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$.
- **Pythagorean:** $\\sin^2\\theta + \\cos^2\\theta = 1$, $1 + \\tan^2\\theta = \\sec^2\\theta$, $1 + \\cot^2\\theta = \\csc^2\\theta$.
- **Cofunction:** $\\sin(90^\\circ - \\theta) = \\cos\\theta$.
- **Double angle:** $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$; $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 1 - 2\\sin^2\\theta = 2\\cos^2\\theta - 1$. Never $2\\sin\\theta$.
- **Simplifying:** convert to sin and cos, cancel, look for Pythagorean patterns; plug in 30° or 60° to check.
- **From one ratio:** build the triangle, then use the quadrant for the sign.
      `
    }
  ]
}
