export const calcbcIntTechPart2Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it2-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 2 of 7 \u2014 Trigonometric Substitution**

Trig substitution converts integrals with square roots into trigonometric integrals. It\u2019s the go-to method when you see $\\sqrt{a^2 - x^2}$, $\\sqrt{a^2 + x^2}$, or $\\sqrt{x^2 - a^2}$.`
    },
    {
      id: 'it2-table',
      type: 'text' as const,
      content: `### The Three Substitutions

| Expression | Substitution | Identity Used | Range |
|:---:|:---:|:---:|:---:|
| $\\sqrt{a^2 - x^2}$ | $x = a\\sin\\theta$ | $1 - \\sin^2\\theta = \\cos^2\\theta$ | $-\\pi/2 \\le \\theta \\le \\pi/2$ |
| $\\sqrt{a^2 + x^2}$ | $x = a\\tan\\theta$ | $1 + \\tan^2\\theta = \\sec^2\\theta$ | $-\\pi/2 < \\theta < \\pi/2$ |
| $\\sqrt{x^2 - a^2}$ | $x = a\\sec\\theta$ | $\\sec^2\\theta - 1 = \\tan^2\\theta$ | $0 \\le \\theta < \\pi/2$ |

$$\\boxed{\\text{Match the form } \\sqrt{\\pm a^2 \\pm x^2} \\text{ to choose the substitution}}$$

> **Memory Device:** \u201cMinus \u2192 Sine, Plus \u2192 Tangent, $x$ first \u2192 Secant.\u201d`
    },
    {
      id: 'it2-example',
      type: 'text' as const,
      content: `### Worked Example: $\\int \\frac{dx}{\\sqrt{4-x^2}}$

Form: $\\sqrt{a^2 - x^2}$ with $a = 2$. Use $x = 2\\sin\\theta$.

| Step | Work |
|------|------|
| $x = 2\\sin\\theta$ | $dx = 2\\cos\\theta\\,d\\theta$ |
| $\\sqrt{4-x^2}$ | $\\sqrt{4-4\\sin^2\\theta} = 2\\cos\\theta$ |
| Substitute | $\\int \\frac{2\\cos\\theta}{2\\cos\\theta}\\,d\\theta = \\int d\\theta$ |
| Integrate | $\\theta + C$ |
| Back-substitute | $\\arcsin(x/2) + C$ |

$$\\boxed{\\int \\frac{dx}{\\sqrt{4-x^2}} = \\arcsin\\frac{x}{2} + C}$$

### Worked Example: $\\int \\frac{dx}{(x^2+9)^{3/2}}$

Form: $\\sqrt{x^2 + a^2}$ with $a = 3$. Use $x = 3\\tan\\theta$.

$dx = 3\\sec^2\\theta\\,d\\theta$, $(x^2+9)^{3/2} = (9\\sec^2\\theta)^{3/2} = 27\\sec^3\\theta$

$$\\int \\frac{3\\sec^2\\theta}{27\\sec^3\\theta}\\,d\\theta = \\frac{1}{9}\\int \\cos\\theta\\,d\\theta = \\frac{\\sin\\theta}{9} + C = \\frac{x}{9\\sqrt{x^2+9}} + C$$`
    },
    {
      id: 'it2-mc1',
      type: 'multiple-choice' as const,
      content: '**Choose the Substitution**',
      exercise: {
        questions: [
          {
            question: 'For $\\int \\sqrt{x^2 - 25}\\,dx$, the correct substitution is:',
            options: [
              '$x = 5\\sec\\theta$',
              '$x = 5\\sin\\theta$',
              '$x = 5\\tan\\theta$',
              '$u = x^2 - 25$'
            ],
            correctAnswer: 0,
            explanation: 'Form: $\\sqrt{x^2 - a^2}$ with $a = 5$. Use $x = a\\sec\\theta = 5\\sec\\theta$.'
          },
          {
            question: 'For $\\int \\frac{x^2}{\\sqrt{1-x^2}}\\,dx$, after $x = \\sin\\theta$:',
            options: [
              '$\\int \\sin^2\\theta\\,d\\theta$',
              '$\\int \\cos^2\\theta\\,d\\theta$',
              '$\\int \\tan^2\\theta\\,d\\theta$',
              '$\\int \\sin\\theta\\cos\\theta\\,d\\theta$'
            ],
            correctAnswer: 0,
            explanation: '$x = \\sin\\theta$, $dx = \\cos\\theta\\,d\\theta$, $\\sqrt{1-x^2} = \\cos\\theta$. So $\\frac{\\sin^2\\theta \\cdot \\cos\\theta}{\\cos\\theta}\\,d\\theta = \\sin^2\\theta\\,d\\theta$.'
          }
        ]
      }
    },
    {
      id: 'it2-backsub',
      type: 'text' as const,
      content: `### Back-Substitution with Triangles

After integrating in $\\theta$, you need to convert back to $x$. Draw a right triangle:

**For $x = a\\sin\\theta$:**
- $\\sin\\theta = x/a$, so opposite $= x$, hypotenuse $= a$, adjacent $= \\sqrt{a^2 - x^2}$

**For $x = a\\tan\\theta$:**
- $\\tan\\theta = x/a$, so opposite $= x$, adjacent $= a$, hypotenuse $= \\sqrt{a^2 + x^2}$

**For $x = a\\sec\\theta$:**
- $\\sec\\theta = x/a$, so hypotenuse $= x$, adjacent $= a$, opposite $= \\sqrt{x^2 - a^2}$

> **AP Tip:** Always draw the reference triangle. It\u2019s the fastest way to convert back without errors.`
    },
    {
      id: 'it2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Triangle Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'If $x = 3\\tan\\theta$, then $\\sin\\theta =$',
            options: ['$\\frac{x}{\\sqrt{x^2+9}}$', '$\\frac{x}{3}$', '$\\frac{3}{\\sqrt{x^2+9}}$', '$\\frac{\\sqrt{x^2+9}}{x}$'],
            correctAnswers: ['$\\frac{x}{\\sqrt{x^2+9}}$'],
            hints: ['Triangle: opposite $= x$, adjacent $= 3$, hypotenuse $= \\sqrt{x^2 + 9}$.'],
            explanation: '$\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{x}{\\sqrt{x^2+9}}$.'
          },
          {
            label: 'If $x = 4\\sec\\theta$, then $\\tan\\theta =$',
            options: ['$\\frac{\\sqrt{x^2-16}}{4}$', '$\\frac{x}{4}$', '$\\frac{4}{\\sqrt{x^2-16}}$', '$\\frac{x}{\\sqrt{x^2-16}}$'],
            correctAnswers: ['$\\frac{\\sqrt{x^2-16}}{4}$'],
            hints: ['Triangle: hypotenuse $= x$, adjacent $= 4$, opposite $= \\sqrt{x^2 - 16}$.'],
            explanation: '$\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{\\sqrt{x^2-16}}{4}$.'
          }
        ]
      }
    },
    {
      id: 'it2-input',
      type: 'input-box' as const,
      content: '**Definite Integral**',
      exercise: {
        question: 'Evaluate $\\int_0^1 \\frac{dx}{\\sqrt{1-x^2}}$. This is a known form. What is the exact answer? Give the numeric value (as a fraction of $\\pi$).',
        correctAnswer: 'pi/2',
        acceptableAnswers: ['pi/2', '\u03c0/2'],
        hints: ['$\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C$.', '$[\\arcsin x]_0^1 = \\arcsin(1) - \\arcsin(0) = \\pi/2 - 0$.'],
        explanation: '$\\int_0^1 \\frac{dx}{\\sqrt{1-x^2}} = [\\arcsin x]_0^1 = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}$.'
      }
    },
    {
      id: 'it2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2

| Form | Sub | Key Identity |
|------|-----|-------------|
| $\\sqrt{a^2 - x^2}$ | $x = a\\sin\\theta$ | $1 - \\sin^2 = \\cos^2$ |
| $\\sqrt{a^2 + x^2}$ | $x = a\\tan\\theta$ | $1 + \\tan^2 = \\sec^2$ |
| $\\sqrt{x^2 - a^2}$ | $x = a\\sec\\theta$ | $\\sec^2 - 1 = \\tan^2$ |

> **Coming Up:** Part 3 covers **$\\sec$ and $\\tan$ integrals** \u2014 essential for completing trig substitution problems.`
    }
  ]
};
