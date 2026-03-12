export const calcabChainRulePart4Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain4-intro',
      type: 'text' as const,
      content: `# 🔗 Related Rates

**Part 4 of 7 — Related Rates Intro**

### What Are Related Rates?

In related rates problems, two or more quantities are **changing with respect to time** ($t$), and they are connected by an equation. We use implicit differentiation (with respect to $t$) to find how fast one quantity changes given information about the other.

### The Strategy

1. **Draw a picture** and label changing quantities with variables
2. **Write an equation** relating the variables
3. **Differentiate both sides** with respect to $t$ (implicit differentiation)
4. **Substitute** known values and solve for the unknown rate

### Worked Example 1: Expanding Circle

**A stone is dropped in a pond. The circular ripple expands so that its radius increases at $2$ ft/s. How fast is the area increasing when the radius is $5$ ft?**

| Step | Work |
|------|------|
| Known | $\\frac{dr}{dt} = 2$ ft/s, $r = 5$ ft |
| Find | $\\frac{dA}{dt}$ |
| Equation | $A = \\pi r^2$ |
| Differentiate | $\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt}$ |
| Substitute | $\\frac{dA}{dt} = 2\\pi(5)(2) = 20\\pi \\approx 62.8$ ft$^2$/s |

### Worked Example 2: Ladder Problem

**A 13-ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?**

| Step | Work |
|------|------|
| Setup | $x^2 + y^2 = 169$ (Pythagorean theorem) |
| Known | $\\frac{dx}{dt} = 2$ ft/s, $x = 5$ |
| Find $y$ | $y = \\sqrt{169 - 25} = 12$ |
| Differentiate | $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$ |
| Substitute | $2(5)(2) + 2(12)\\frac{dy}{dt} = 0$ |
| Solve | $\\frac{dy}{dt} = -\\frac{20}{24} = -\\frac{5}{6}$ ft/s |

The negative sign means the top is sliding **down** at $\\frac{5}{6}$ ft/s.`
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
            question: 'For the ladder problem: a 10-ft ladder with the base moving at 1 ft/s. When $x = 6$, how fast is the top sliding down?',
            options: ['$-\\frac{6}{8} = -\\frac{3}{4}$ ft/s', '$-\\frac{8}{6} = -\\frac{4}{3}$ ft/s', '$-\\frac{1}{8}$ ft/s', '$-6$ ft/s'],
            correctAnswer: 0,
            explanation: '$y = \\sqrt{100-36} = 8$. From $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$: $\\frac{dy}{dt} = -\\frac{x \\cdot dx/dt}{y} = -\\frac{6 \\cdot 1}{8} = -\\frac{3}{4}$ ft/s.'
          }
        ]
      }
    },
    {
      id: 'chain4-text2',
      type: 'text' as const,
      content: `### Worked Example 3: Conical Tank

**Water drains from a conical tank (vertex down) at 2 ft$^3$/min. The cone has radius 3 ft and height 6 ft at the top. How fast is the water level dropping when the depth is 4 ft?**

Since the cone is similar: $\\frac{r}{h} = \\frac{3}{6} = \\frac{1}{2}$, so $r = \\frac{h}{2}$.

| Step | Work |
|------|------|
| Volume formula | $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{h}{2}\\right)^2 h = \\frac{\\pi h^3}{12}$ |
| Differentiate | $\\frac{dV}{dt} = \\frac{\\pi}{4} h^2 \\frac{dh}{dt}$ |
| Substitute | $-2 = \\frac{\\pi}{4}(16)\\frac{dh}{dt}$ |
| Solve | $\\frac{dh}{dt} = \\frac{-2}{4\\pi} = -\\frac{1}{2\\pi}$ ft/min |

> **AP Tip:** Related rates problems are a staple of AP Calculus free-response questions. Always clearly state what each variable represents and what rate you are finding.`
    },
    {
      id: 'chain4-quiz2',
      type: 'multiple-choice' as const,
      content: '**More Related Rates** 🎯',
      exercise: {
        questions: [
          {
            question: 'A square has sides growing at $4$ cm/s. How fast is the area growing when each side is $10$ cm?',
            options: ['$40$ cm$^2$/s', '$80$ cm$^2$/s', '$160$ cm$^2$/s', '$400$ cm$^2$/s'],
            correctAnswer: 1,
            explanation: '$A = s^2$. $\\frac{dA}{dt} = 2s\\frac{ds}{dt} = 2(10)(4) = 80$ cm$^2$/s.'
          },
          {
            question: 'Two cars leave an intersection. Car A goes north at 30 mph, Car B goes east at 40 mph. After 2 hours, how fast is the distance between them increasing?',
            options: ['$35$ mph', '$50$ mph', '$70$ mph', '$100$ mph'],
            correctAnswer: 1,
            explanation: 'At $t=2$: $a = 60$, $b = 80$, $d = \\sqrt{60^2+80^2} = 100$. From $d^2 = a^2+b^2$: $2d\\frac{dd}{dt} = 2a(30)+2b(40)$. So $\\frac{dd}{dt} = \\frac{60(30)+80(40)}{100} = \\frac{1800+3200}{100} = 50$ mph.'
          }
        ]
      }
    },
    {
      id: 'chain4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. **Related rates** = implicit differentiation with respect to time
2. **Steps:** draw → equation → differentiate → substitute → solve
3. **Key equations to know:** Pythagorean theorem, area/volume formulas, similar triangles
4. **Watch signs:** negative rates mean decreasing quantities

> **Next up:** More Chain Rule applications including logarithmic differentiation.`
    }
  ]
};
