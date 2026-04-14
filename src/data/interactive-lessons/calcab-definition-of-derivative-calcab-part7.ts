export const calcabDerivativeDefPart7Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef7-intro',
      type: 'text' as const,
      content: `# ∫ Review & AP Exam Applications

**Part 7 of 7 — Comprehensive Review**

---

### The Derivative: Three Perspectives

| Perspective | Interpretation |
|------------|---------------|
| **Geometric** | Slope of the tangent line to $f$ at $x = a$ |
| **Physical** | Instantaneous rate of change of $f$ at $a$ |
| **Algebraic** | $\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$ |

> 🔑 **Key Principle:** Mastering the definition of the derivative means understanding ALL three perspectives and knowing when each is most useful.`
    },
    {
      id: 'derdef7-summary',
      type: 'text' as const,
      content: `
## 📖 Complete Formulas Reference

$$\\boxed{f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} = \\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}}$$

$$\\boxed{\\text{Tangent: } y - f(a) = f'(a)(x-a)}$$

$$\\boxed{\\text{Linear approx: } f(x) \\approx f(a) + f'(a)(x-a)}$$

---

### The Differentiability Hierarchy

$$\\text{Differentiable} \\implies \\text{Continuous} \\implies \\text{Limit Exists}$$

**None reverse!** $|x|$ is continuous but not differentiable. $\\lfloor x \\rfloor$ has limits from one side but isn't continuous.

---

### Motion Connections

$$s(t) \\xrightarrow{d/dt} v(t) = s'(t) \\xrightarrow{d/dt} a(t) = s''(t)$$

| Concept | Meaning |
|---------|---------|
| $v(t) = 0$ | Particle at rest |
| $v(t) > 0$ | Moving right/up |
| $v(t) < 0$ | Moving left/down |
| $a(t)$ and $v(t)$ same sign | Speeding up |
| $a(t)$ and $v(t)$ opposite sign | Slowing down |`
    },
    {
      id: 'derdef7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Comprehensive Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A particle moves along the $x$-axis with position $s(t) = t^2 - 4t$. At what time is the particle at rest?',
            options: ['$t = 0$', '$t = 2$', '$t = 4$', '$t = -2$'],
            correctAnswer: 1,
            explanation: '"At rest" → $v(t) = s\'(t) = 2t - 4 = 0 \\Rightarrow t = 2$.'
          },
          {
            question: 'The tangent line to $y = f(x)$ at $(1, 3)$ has slope $-2$. Approximate $f(1.05)$.',
            options: ['$2.9$', '$3.1$', '$2.95$', '$3.05$'],
            correctAnswer: 0,
            explanation: '$f(1.05) \\approx 3 + (-2)(0.05) = 3 - 0.1 = 2.9$.'
          },
          {
            question: 'If $f(x) = x^2$ and $g(x) = |x|$, which is differentiable at $x = 0$?',
            options: ['Both', 'Neither', 'Only $f$', 'Only $g$'],
            correctAnswer: 2,
            explanation: '$f\'(0) = 0$ (exists). $g\'(0)$ DNE because left slope = $-1$ and right slope = $+1$ (corner).'
          }
        ]
      }
    },
    {
      id: 'derdef7-apquestions',
      type: 'text' as const,
      content: `
## 📌 Common AP Exam Question Types

| Question Type | What to Do |
|--------------|-----------|
| "Find $f'(a)$ using the definition" | Write the limit, expand, simplify, cancel $h$, evaluate |
| "$f'(3) = -2$. Interpret in context." | "At $x=3$, $f$ is decreasing at 2 [units] per [unit]" |
| "Is $f$ differentiable at $c$?" | Check continuity AND left/right derivatives |
| "Find the tangent line" | $y - f(a) = f'(a)(x-a)$ |
| "Approximate $f(x)$" | Linear approx: $f(a) + f'(a)(x-a)$ |
| "Over or underestimate?" | Check $f''$ sign (concavity) |
| "Evaluate this limit" | Is it a derivative in disguise? Identify $f$ and $a$ |

---

### AP FRQ Interpretation Template

> "At time $t = [\\text{value}]$ [units], the [quantity] is [increasing/decreasing] at a rate of $|f'(a)|$ [units of $y$] per [units of $x$]."

**Example:** If $T(t)$ = temperature (°C) at time $t$ (hours) and $T'(3) = -1.5$:

> "At $t = 3$ hours, the temperature is **decreasing** at a rate of **1.5 degrees Celsius per hour**."

> **AP Tip:** You MUST include units, state increasing/decreasing, and use "rate of" language. This is worth 1–2 points on every contextual interpretation question.`
    },
    {
      id: 'derdef7-quiz2',
      type: 'multiple-choice' as const,
      content: `**AP Exam Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $f(4) = 7$ and $f\'(4) = -3$, what is the equation of the normal line at $x = 4$?',
            options: [
              '$y - 7 = -3(x - 4)$',
              '$y - 7 = 3(x - 4)$',
              '$y - 7 = \\frac{1}{3}(x - 4)$',
              '$y - 7 = -\\frac{1}{3}(x - 4)$'
            ],
            correctAnswer: 2,
            explanation: 'Tangent slope = $-3$, so normal slope = $-(-1/3) = 1/3$. Normal: $y - 7 = \\frac{1}{3}(x-4)$.'
          },
          {
            question: 'For $s(t) = t^3 - 6t^2$, the particle is speeding up when:',
            options: [
              '$v(t) > 0$',
              '$a(t) > 0$',
              '$v(t)$ and $a(t)$ have the same sign',
              '$v(t)$ and $a(t)$ have opposite signs'
            ],
            correctAnswer: 2,
            explanation: 'A particle speeds up when velocity and acceleration have the same sign (both pushing the same direction).'
          }
        ]
      }
    },
    {
      id: 'derdef7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Final Review** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'If $f$ has a corner at $x=2$, is $f$ differentiable?', options: ['Yes', 'No', 'Only from the left', 'Depends on $f$'] },
          { label: '$s(t) = 5t^2$. Find $v(3) = s\'(3)$', options: ['15', '30', '45', '90'] },
          { label: 'Tangent to $y=x^2$ at $(1,1)$: $y =$', options: ['$2x-1$', '$2x+1$', '$x+1$', '$x-1$'] },
          { label: 'Concave up → linearization is an', options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot tell'] }
        ],
        correctAnswers: ['No', '30', '$2x-1$', 'Underestimate'],
        hint1: 'Corners have different one-sided slopes.',
        hint2: '$s\'(t) = 10t$, so $s\'(3) = ?$',
        hint3: '$f\'(1) = 2$. $y - 1 = 2(x-1)$.',
        explanation: 'Corner → not differentiable. $v(3)=30$. $y=2x-1$. Concave up → tangent below → underestimate.'
      }
    },
    {
      id: 'derdef7-input',
      type: 'input-box' as const,
      content: `**Tangent Line Application** ✍️`,
      exercise: {
        question: 'The tangent line to $f(x) = x^3$ at $x = 1$ has equation $y = 3x - 2$. Use this to approximate $f(1.1)$. Give your answer as a decimal.',
        correctAnswer: '1.3',
        acceptableAnswers: ['1.3', '1.30'],
        hint1: 'Plug $x = 1.1$ into the tangent line equation $y = 3x - 2$.',
        hint2: '$y = 3(1.1) - 2 = 3.3 - 2 = ?$',
        explanation: '$f(1.1) \\approx 3(1.1) - 2 = 3.3 - 2 = 1.3$. (Actual: $1.1^3 = 1.331$.)'
      }
    }
  ]
}
