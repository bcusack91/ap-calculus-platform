export const lessonData = {
  topicSlug: 'sat-quadratic-equations-advanced',
  sections: [
    {
      id: 'qa2-traps',
      type: 'text' as const,
      content: `# Quadratic Equations: Traps & Speed

**Part 2 of 3 — Distractor Autopsy and Faster Routes**

Every hard-tier quadratic item plants its wrong answers deliberately. Learn the four plants and you can often eliminate two choices before doing any algebra.

### The Four Standard Distractors

1. **The intermediate value.** The time when the max occurs (asked: max height). The optimal fee (asked: max revenue). The value of $a$ (asked: $b$). Whatever value your work naturally produces FIRST is sitting in the choices.
2. **The unit trap.** "$x$ hundred units" — the raw vertex value $7$ appears next to $700$. "Thousands of dollars" appears next to dollars.
3. **The sign flip.** In Vieta problems, the answer with one negative dropped is always a choice.
4. **The unattainable vertex.** When the input must be a whole number and the vertex is not, the exact vertex value $R(3.75)$ is planted. Test both neighboring integers instead.

### Speed Techniques

- **Factored form is a gift:** $P(x) = -2(x - 3)(x - 11)$ has its vertex midway between the zeros, at $x = 7$. Never expand.
- **Vieta before formula:** any question about $r + s$, $rs$, $\\frac{1}{r} + \\frac{1}{s}$, or $r^{2} + s^{2}$ is a 10-second Vieta computation. If your scratch work has a $\\sqrt{\\phantom{x}}$ in it, you took the slow road.
- **Desmos exploit:** for tangency problems, type the parabola and $y = mx + 4$ with a slider for $m$ — slide until the intersection points merge. For max-revenue models, type the revenue expression in one variable and click the vertex. Desmos gives exact coordinates.
- **Answer-choice arithmetic:** on "greatest revenue" items, the current (unoptimized) revenue is always a choice — compute it first and eliminate everything at or below it.`
    },
    {
      id: 'qa2-q1',
      type: 'quiz' as const,
      question: 'A question gives $h(t) = -16t^{2} + 64t + 5$ for a ball\'s height in feet and asks for the maximum height. A student answers $2$. Which describes the student\'s error?',
      options: [
        'The student reported the starting height instead of the height at the peak',
        'The student dropped the $-16t^{2}$ term before substituting the peak time',
        'The student reported when the peak occurs instead of the height at the peak',
        'The student subtracted the starting height from the height reached at the peak'
      ],
      correctAnswer: 2,
      explanation: 'The vertex is at $t = \\frac{64}{32} = 2$ seconds, and $h(2) = -64 + 128 + 5 = 69$ feet is the real answer. An answer of $2$ is the vertex TIME: the student found when the peak happens and stopped. The question asks for a HEIGHT, so a quick sanity check ("is 2 feet a plausible max for a thrown ball?") catches it. The other slips produce different numbers: reporting the starting height gives $h(0) = 5$, dropping the squared term gives $128 + 5 = 133$, and subtracting the launch height gives $69 - 5 = 64$. None of them produces $2$.'
    },
    {
      id: 'qa2-q2',
      type: 'quiz' as const,
      question: 'The roots of $3x^{2} + 5x - 11 = 0$ are $r$ and $s$. What is the value of $rs - (r + s)$?',
      options: [
        '$-\\frac{16}{3}$',
        '$-2$',
        '$2$',
        '$\\frac{16}{3}$'
      ],
      correctAnswer: 1,
      explanation: 'Vieta instantly: $r + s = -\\frac{5}{3}$ and $rs = -\\frac{11}{3}$. Then $rs - (r+s) = -\\frac{11}{3} - \\left(-\\frac{5}{3}\\right) = -\\frac{6}{3} = -2$. The quadratic formula route drags you through $\\sqrt{157}$ — a pure time-loss. $-\\frac{16}{3}$ is $rs + (r+s)$ (subtraction sign ignored), $\\frac{16}{3}$ is the full sign flip, and $2$ drops one negative in the subtraction.'
    },
    {
      id: 'qa2-q3',
      type: 'quiz' as const,
      question: 'A farm stand\'s weekly revenue is modeled by $R(w) = 1000 + 36w - 8w^{2}$, where $w$ must be a WHOLE number of weeks. What is the greatest possible revenue, in dollars?',
      options: [
        '$1036$',
        '$1040$',
        '$1040.50$',
        '$1072$'
      ],
      correctAnswer: 1,
      explanation: 'The vertex is at $w = \\frac{36}{16} = 2.25$ — not a whole number, so test both neighbors: $R(2) = 1000 + 72 - 32 = 1040$ and $R(3) = 1000 + 108 - 72 = 1036$. The answer is $1040$ at $w = 2$. The central trap is $1040.50 = R(2.25)$: the true vertex value, which the whole-number restriction makes unattainable. $1036$ comes from rounding $2.25$ up without testing both sides, and $1072$ is $R(2)$ with the $-8w^{2}$ term dropped.'
    }
  ]
};
