export const calcabChainRulePart4Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain4-intro',
      type: 'text' as const,
      content: `# 🔗 Related Rates

**Part 4 of 7 — Related Rates**

### What Are Related Rates?

In related rates problems, two or more quantities are **changing with respect to time** ($t$), and they are connected by an equation. We use implicit differentiation (with respect to $t$) to find how fast one quantity changes given information about the other.

> **Key Concept:** Related Rates = Implicit Differentiation with respect to time instead of $x$.

### The Strategy

$$\\boxed{\\text{Draw} \\to \\text{Equation} \\to \\text{Differentiate (w.r.t. } t\\text{)} \\to \\text{Substitute} \\to \\text{Solve}}$$

| Step | Action | Details |
|:---:|------|--------|
| 1 | Draw a picture | Label ALL changing quantities with variables |
| 2 | Write an equation | Relate the variables (geometry formulas, Pythagorean theorem, etc.) |
| 3 | Differentiate w.r.t. $t$ | Every variable gets $\\frac{d}{dt}$ (implicit diff) |
| 4 | Substitute known values | Plug in AFTER differentiating, never before! |
| 5 | Solve for unknown rate | Algebra |

> **AP Tip (Critical):** **NEVER substitute numerical values before differentiating.** This is the #1 related rates mistake.`
    },
    {
      id: 'chain4-examples',
      type: 'text' as const,
      content: `### Worked Example 1: Expanding Circle

**A stone is dropped in a pond. The circular ripple expands so that its radius increases at $2$ ft/s. How fast is the area increasing when the radius is $5$ ft?**

| Step | Work |
|------|------|
| Known | $\\frac{dr}{dt} = 2$ ft/s, $r = 5$ ft |
| Find | $\\frac{dA}{dt}$ |
| Equation | $A = \\pi r^2$ |
| Differentiate | $\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt}$ |
| Substitute | $\\frac{dA}{dt} = 2\\pi(5)(2) = 20\\pi$ ft$^2$/s |

---

### Worked Example 2: Ladder Problem

**A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?**

| Step | Work |
|------|------|
| Setup | $x^2 + y^2 = 169$ |
| Known | $\\frac{dx}{dt} = 2$ ft/s, $x = 5$ |
| Find $y$ | $y = \\sqrt{169 - 25} = 12$ |
| Differentiate | $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$ |
| Substitute | $2(5)(2) + 2(12)\\frac{dy}{dt} = 0$ |
| Solve | $\\frac{dy}{dt} = -\\frac{20}{24} = -\\frac{5}{6}$ ft/s |

The negative sign means the top is sliding **down** at $\\frac{5}{6}$ ft/s.

---

### Worked Example 3: Conical Tank

**Water drains from a conical tank (vertex down) at $2$ ft$^3$/min. The cone has radius 3 ft and height 6 ft. How fast is the water level dropping when the depth is 4 ft?**

Similar triangles: $\\frac{r}{h} = \\frac{3}{6} = \\frac{1}{2}$, so $r = \\frac{h}{2}$.

| Step | Work |
|------|------|
| Volume | $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi h^3}{12}$ |
| Differentiate | $\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$ |
| Substitute | $-2 = \\frac{\\pi}{4}(16)\\frac{dh}{dt}$ |
| Solve | $\\frac{dh}{dt} = \\frac{-2}{4\\pi} = -\\frac{1}{2\\pi}$ ft/min |`
    },
    {
      id: 'chain4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Solve These Related Rates Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A balloon is being inflated. Its radius increases at $3$ cm/s. How fast is the volume increasing when $r = 10$ cm? (Use $V = \\frac{4}{3}\\pi r^3$)',
            options: ['$400\\pi$ cm$^3$/s', '$1200\\pi$ cm$^3$/s', '$120\\pi$ cm$^3$/s', '$4000\\pi$ cm$^3$/s'],
            correctAnswer: 1,
            explanation: '$\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt} = 4\\pi(10)^2(3) = 1200\\pi$ cm$^3$/s.'
          },
          {
            question: 'A 10-ft ladder: base moves out at 1 ft/s. When $x = 6$, how fast is the top sliding down?',
            options: ['$-\\frac{3}{4}$ ft/s', '$-\\frac{4}{3}$ ft/s', '$-\\frac{1}{8}$ ft/s', '$-6$ ft/s'],
            correctAnswer: 0,
            explanation: '$y = \\sqrt{100-36} = 8$. From $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$: $\\frac{dy}{dt} = -\\frac{6(1)}{8} = -\\frac{3}{4}$ ft/s.'
          },
          {
            question: 'A square has sides growing at $4$ cm/s. How fast is the area growing when each side is $10$ cm?',
            options: ['$40$ cm$^2$/s', '$80$ cm$^2$/s', '$160$ cm$^2$/s', '$400$ cm$^2$/s'],
            correctAnswer: 1,
            explanation: '$A = s^2$. $\\frac{dA}{dt} = 2s\\frac{ds}{dt} = 2(10)(4) = 80$ cm$^2$/s.'
          }
        ]
      }
    },
    {
      id: 'chain4-formulas',
      type: 'text' as const,
      content: `### Essential Geometry Formulas for Related Rates

| Shape | Formula | Differentiated |
|:---:|:---:|:---:|
| Circle area | $A = \\pi r^2$ | $\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt}$ |
| Circle circumference | $C = 2\\pi r$ | $\\frac{dC}{dt} = 2\\pi \\frac{dr}{dt}$ |
| Sphere volume | $V = \\frac{4}{3}\\pi r^3$ | $\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}$ |
| Sphere surface area | $S = 4\\pi r^2$ | $\\frac{dS}{dt} = 8\\pi r\\frac{dr}{dt}$ |
| Cone volume | $V = \\frac{1}{3}\\pi r^2 h$ | Product rule needed |
| Right triangle | $a^2 + b^2 = c^2$ | $2a\\frac{da}{dt} + 2b\\frac{db}{dt} = 2c\\frac{dc}{dt}$ |
| Rectangle area | $A = lw$ | $\\frac{dA}{dt} = l\\frac{dw}{dt} + w\\frac{dl}{dt}$ |

### Common Related Rates Mistakes

| Mistake | Why It's Wrong |
|---------|---------------|
| Substituting values before differentiating | Turns variables into constants — derivative becomes 0 |
| Forgetting to use similar triangles | Eliminates a variable (e.g., replacing $r$ with $h/2$) |
| Missing the negative sign | Decreasing quantities have negative rates |
| Using wrong formula | Double-check: is it area, volume, or distance? |`
    },
    {
      id: 'chain4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Related Rates** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two cars leave an intersection. Car A goes north at 30 mph, Car B goes east at 40 mph. After 2 hours, how fast is the distance between them increasing?',
            options: ['$35$ mph', '$50$ mph', '$70$ mph', '$100$ mph'],
            correctAnswer: 1,
            explanation: 'At $t=2$: $a=60$, $b=80$, $d=100$. From $d^2=a^2+b^2$: $\\frac{dd}{dt} = \\frac{a(30)+b(40)}{d} = \\frac{1800+3200}{100} = 50$ mph.'
          },
          {
            question: 'Oil spills in a circular pattern. The area increases at $10$ m$^2$/s. How fast is the radius increasing when $r = 5$ m?',
            options: ['$\\frac{1}{\\pi}$ m/s', '$\\frac{2}{\\pi}$ m/s', '$\\frac{10}{\\pi}$ m/s', '$2\\pi$ m/s'],
            correctAnswer: 0,
            explanation: '$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. So $10 = 2\\pi(5)\\frac{dr}{dt}$. Then $\\frac{dr}{dt} = \\frac{10}{10\\pi} = \\frac{1}{\\pi}$ m/s.'
          }
        ]
      }
    },
    {
      id: 'chain4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Related Rates Setup** 🔍\n\nMatch each scenario with the correct geometric relationship.',
      exercise: {
        dropdowns: [
          {
            label: 'Ladder sliding down a wall:',
            options: ['$A = \\pi r^2$', '$x^2 + y^2 = L^2$', '$V = \\frac{4}{3}\\pi r^3$', '$s = rt$'],
            correctAnswers: ['$x^2 + y^2 = L^2$'],
            hints: ['The ladder forms the hypotenuse of a right triangle.'],
            explanation: 'Pythagorean theorem: the wall, ground, and ladder form a right triangle.'
          },
          {
            label: 'Expanding balloon (radius → volume):',
            options: ['$A = \\pi r^2$', '$x^2 + y^2 = L^2$', '$V = \\frac{4}{3}\\pi r^3$', '$V = \\frac{1}{3}\\pi r^2 h$'],
            correctAnswers: ['$V = \\frac{4}{3}\\pi r^3$'],
            hints: ['A balloon is approximately a sphere.'],
            explanation: 'Sphere volume formula: $V = \\frac{4}{3}\\pi r^3$.'
          },
          {
            label: 'Ripple in a pond (radius → area):',
            options: ['$A = \\pi r^2$', '$C = 2\\pi r$', '$V = \\frac{4}{3}\\pi r^3$', '$A = s^2$'],
            correctAnswers: ['$A = \\pi r^2$'],
            hints: ['A ripple is a circle expanding outward.'],
            explanation: 'Circle area: $A = \\pi r^2$.'
          },
          {
            label: 'Water draining from a cone:',
            options: ['$A = \\pi r^2$', '$x^2 + y^2 = L^2$', '$V = \\frac{4}{3}\\pi r^3$', '$V = \\frac{1}{3}\\pi r^2 h$'],
            correctAnswers: ['$V = \\frac{1}{3}\\pi r^2 h$'],
            hints: ['A cone has volume $\\frac{1}{3}$ base area times height.'],
            explanation: 'Cone volume: $V = \\frac{1}{3}\\pi r^2 h$. Usually use similar triangles to eliminate $r$.'
          }
        ]
      }
    },
    {
      id: 'chain4-input',
      type: 'input-box' as const,
      content: '**Related Rates computation.** ✍️',
      exercise: {
        question: "A circle's radius is increasing at $3$ cm/s. How fast is the area increasing (in terms of $\\pi$) when the radius is $5$ cm? Give the coefficient of $\\pi$ only (e.g., if the answer is $30\\pi$, enter 30).",
        correctAnswer: '30',
        acceptableAnswers: ['30', '30.0'],
        hints: [
          'Use $A = \\pi r^2$ and differentiate with respect to $t$.',
          '$\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt}$.',
          'Substitute $r = 5$ and $\\frac{dr}{dt} = 3$: $\\frac{dA}{dt} = 2\\pi(5)(3)$.'
        ],
        explanation: '$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(5)(3) = 30\\pi$.\\n\\nThe coefficient of $\\pi$ is $30$.'
      }
    },
    {
      id: 'chain4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

$$\\boxed{\\text{Related Rates = Implicit Differentiation with respect to } t}$$

| Problem Type | Key Formula |
|:---:|:---:|
| Expanding/contracting circle | $A = \\pi r^2$ |
| Sliding ladder | $x^2 + y^2 = L^2$ |
| Filling/draining cone | $V = \\frac{1}{3}\\pi r^2 h$ + similar triangles |
| Balloon inflation | $V = \\frac{4}{3}\\pi r^3$ |
| Separating objects | $d^2 = a^2 + b^2$ |

**Remember:** Differentiate FIRST, substitute AFTER!

> **Up Next:** Part 5 — Advanced Chain Rule Applications (Logarithmic Differentiation & Inverse Trig).`
    }
  ]
};
