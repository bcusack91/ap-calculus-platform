export const calcbcPolarPart5Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'pol5-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 5 of 7 \u2014 Arc Length in Polar Coordinates**

### The Polar Arc Length Formula

For $r = f(\\theta)$ from $\\theta = \\alpha$ to $\\theta = \\beta$:

$$\\boxed{L = \\int_{\\alpha}^{\\beta}\\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta}$$

**Derivation:** From the parametric formula with $x = r\\cos\\theta$, $y = r\\sin\\theta$:

$$(dx/d\\theta)^2 + (dy/d\\theta)^2 = (r')^2\\cos^2\\theta - 2rr'\\cos\\theta\\sin\\theta + r^2\\sin^2\\theta$$
$$+ (r')^2\\sin^2\\theta + 2rr'\\sin\\theta\\cos\\theta + r^2\\cos^2\\theta = (r')^2 + r^2$$

> **Key Fact:** The polar arc length formula is simpler than the parametric one because the cross terms cancel!`
    },
    {
      id: 'pol5-examples',
      type: 'text' as const,
      content: `### Example 1: Arc Length of a Circle

$r = a$ (constant). $dr/d\\theta = 0$.

$$L = \\int_0^{2\\pi}\\sqrt{a^2+0}\\,d\\theta = a \\cdot 2\\pi = 2\\pi a \\checkmark$$

### Example 2: Cardioid $r = 1 + \\cos\\theta$

$dr/d\\theta = -\\sin\\theta$

$$L = \\int_0^{2\\pi}\\sqrt{(1+\\cos\\theta)^2 + \\sin^2\\theta}\\,d\\theta$$

$$= \\int_0^{2\\pi}\\sqrt{2 + 2\\cos\\theta}\\,d\\theta = \\int_0^{2\\pi}\\sqrt{4\\cos^2(\\theta/2)}\\,d\\theta = \\int_0^{2\\pi}2|\\cos(\\theta/2)|\\,d\\theta$$

Using symmetry: $= 4\\int_0^{\\pi}\\cos(\\theta/2)\\,d\\theta = 4[2\\sin(\\theta/2)]_0^{\\pi} = 8$

> **AP Note:** The half-angle identity $1 + \\cos\\theta = 2\\cos^2(\\theta/2)$ is essential for cardioid problems.`
    },
    {
      id: 'pol5-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice Problems**',
      exercise: {
        questions: [
          {
            question: 'The arc length of $r = 2$ from $\\theta = 0$ to $\\theta = \\pi$ is:',
            options: ['$2\\pi$', '$\\pi$', '$4\\pi$', '$2$'],
            correctAnswer: 0,
            explanation: '$L = \\int_0^{\\pi}\\sqrt{4+0}\\,d\\theta = 2\\pi$. This is half the circumference of a circle of radius $2$.'
          },
          {
            question: 'For $r = e^\\theta$, $\\sqrt{r^2 + (r\')^2}$ simplifies to:',
            options: ['$e^\\theta\\sqrt{2}$', '$e^\\theta$', '$2e^\\theta$', '$e^{2\\theta}$'],
            correctAnswer: 0,
            explanation: '$r\' = e^\\theta$. $\\sqrt{e^{2\\theta}+e^{2\\theta}} = e^\\theta\\sqrt{2}$.'
          },
          {
            question: 'The arc length of the spiral $r = \\theta$ from $\\theta = 0$ to $\\theta = 2\\pi$ requires:',
            options: ['$\\int_0^{2\\pi}\\sqrt{\\theta^2 + 1}\\,d\\theta$ (trig sub or formula)', '$\\int_0^{2\\pi}\\theta\\,d\\theta$', '$\\int_0^{2\\pi}\\sqrt{\\theta}\\,d\\theta$', '$2\\pi^2$'],
            correctAnswer: 0,
            explanation: '$r = \\theta$, $r\' = 1$. $L = \\int_0^{2\\pi}\\sqrt{\\theta^2+1}\\,d\\theta$. This requires trig substitution or a hyperbolic formula.'
          }
        ]
      }
    },
    {
      id: 'pol5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Setting Up Arc Length**',
      exercise: {
        dropdowns: [
          {
            label: 'For one petal of $r = \\cos(2\\theta)$, the arc length integral limits are:',
            options: ['$-\\pi/4$ to $\\pi/4$', '$0$ to $\\pi/2$', '$0$ to $\\pi$', '$0$ to $2\\pi$'],
            correctAnswers: ['$-\\pi/4$ to $\\pi/4$'],
            hints: ['The first petal exists where $\\cos(2\\theta) \\ge 0$.'],
            explanation: '$\\cos(2\\theta) \\ge 0$ when $-\\pi/4 \\le \\theta \\le \\pi/4$. This traces one petal.'
          },
          {
            label: 'The identity $1 + \\cos\\theta = 2\\cos^2(\\theta/2)$ is most useful for:',
            options: ['Cardioid arc length integrals', 'Rose curve areas', 'Converting coordinates', 'Finding slopes'],
            correctAnswers: ['Cardioid arc length integrals'],
            hints: ['It simplifies $\\sqrt{(1+\\cos\\theta)^2 + \\sin^2\\theta}$.'],
            explanation: 'In cardioid arc length, the integrand becomes $\\sqrt{2+2\\cos\\theta}$, which simplifies to $2|\\cos(\\theta/2)|$ via this identity.'
          }
        ]
      }
    },
    {
      id: 'pol5-input',
      type: 'input-box' as const,
      content: '**Compute**',
      exercise: {
        question: 'Find the arc length of the logarithmic spiral $r = e^\\theta$ from $\\theta = 0$ to $\\theta = \\ln 2$. The integrand is $e^\\theta\\sqrt{2}$. Evaluate and express as $a(\\sqrt{2})$ where $a$ is a number. What is $a$?',
        correctAnswer: '1',
        acceptableAnswers: ['1', '1.0'],
        hints: ['$L = \\sqrt{2}\\int_0^{\\ln 2}e^\\theta\\,d\\theta = \\sqrt{2}[e^\\theta]_0^{\\ln 2}$.', '$= \\sqrt{2}(2 - 1) = \\sqrt{2}$.'],
        explanation: '$L = \\sqrt{2}(e^{\\ln 2} - e^0) = \\sqrt{2}(2-1) = \\sqrt{2} = 1 \\cdot \\sqrt{2}$. So $a = 1$.'
      }
    },
    {
      id: 'pol5-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Polar arc length: $L = \\int\\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$
- For a circle $r = a$: arc length on $[\\alpha, \\beta]$ is $a(\\beta - \\alpha)$
- Half-angle identities simplify cardioid integrals
- Logarithmic spiral $r = e^\\theta$: integrand is $e^\\theta\\sqrt{2}$ (nice!)

> **Next:** Part 6 is a **Problem-Solving Workshop** with mixed polar problems.`
    }
  ]
};
