export const calcabEstimatingLimitsTablesPart3Data = {
  topicSlug: 'estimating-limits-tables',
  sections: [
    {
      id: 'elt3-intro',
      type: 'text' as const,
      content: `# 🚫 Recognizing DNE from a Table

**Part 3 of 4 — Spotting jump, blow-up, and oscillation in numerical data**

---

### Topics in This Part

| Section |
|---------|
| Jump (the "step" pattern) |
| Blow-up (numbers explode) |
| Oscillation (numbers won't settle) |

> 🔑 **Why this matters:** Tables don't just give limits — they expose *which way* a limit fails.`
    },
    {
      id: 'elt3-jump',
      type: 'text' as const,
      content: `
## 1️⃣ Jump

Two clean values that disagree across $a$.

For $f(x) = \\dfrac{|x|}{x}$ near 0:

| $x$ | $-0.1$ | $-0.01$ | $-0.001$ | $0.001$ | $0.01$ | $0.1$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $-1$ | $-1$ | $-1$ | $1$ | $1$ | $1$ |

Left → $-1$, right → $+1$. **Jump.** $\\lim_{x \\to 0} f(x)$ DNE.
      `
    },
    {
      id: 'elt3-blowup',
      type: 'text' as const,
      content: `
## 2️⃣ Blow-up

Magnitudes balloon as $x$ approaches $a$.

For $f(x) = \\dfrac{1}{x^2}$ near 0:

| $x$ | $-0.1$ | $-0.01$ | $-0.001$ | $0.001$ | $0.01$ | $0.1$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $100$ | $10{,}000$ | $1{,}000{,}000$ | $1{,}000{,}000$ | $10{,}000$ | $100$ |

Both sides race to $+\\infty$. We *describe* this as $\\lim_{x \\to 0} \\dfrac{1}{x^2} = +\\infty$, but **the limit does not exist as a finite number**.

> 💡 Signature: outputs grow by factors of 10 or more as $x$ moves by factors of 10.
      `
    },
    {
      id: 'elt3-oscillation',
      type: 'text' as const,
      content: `
## 3️⃣ Oscillation

Outputs bounce around with no convergence.

For $f(x) = \\sin\\!\\left(\\dfrac{1}{x}\\right)$ near 0:

| $x$ | $0.1$ | $0.01$ | $0.001$ | $0.0001$ |
|---|---|---|---|---|
| $f(x)$ | $-0.544$ | $-0.506$ | $0.827$ | $-0.306$ |

No pattern, no settling — and choosing different $x$-values gives wildly different outputs. **Oscillation.** $\\lim_{x \\to 0} \\sin(1/x)$ DNE.

> ⚠️ This is the case where tables can *trick* you: pick the "wrong" $x$-values and you might see a fake pattern. Always sanity-check with the algebraic form.
      `
    },
    {
      id: 'elt3-mc',
      type: 'multiple-choice' as const,
      content: `**Diagnose the failure mode** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Table: $f(-0.01)=-100$, $f(-0.001)=-1000$, $f(0.001)=1000$, $f(0.01)=100$. This shows:',
            options: ['Limit equals 0, since the values average to 0', 'Jump from $-100$ on the left to $100$ on the right', 'Blow-up in opposite directions', 'Oscillation, since the outputs change sign'],
            correctAnswer: 2,
            explanation: 'Magnitudes grow without bound as $|x| \\to 0$: left $\\to -\\infty$, right $\\to +\\infty$ — classic $1/x$ behavior. Limit DNE. The outputs are not settling on $\\pm 100$ (they get larger in size), and one sign change across 0 is not oscillation.'
          },
          {
            question: 'Table: $f(0.1)=0.74$, $f(0.01)=-0.51$, $f(0.001)=0.83$, $f(0.0001)=-0.31$. This shows:',
            options: ['Limit $\\approx 0$, the average value', 'A jump between two values', 'Blow-up, as the outputs keep growing', 'Oscillation, as the values never settle'],
            correctAnswer: 3,
            explanation: 'Outputs swing between positive and negative values without converging, all from the same side of 0. Classic oscillation, like $\\sin(1/x)$. The outputs stay below 1 in size, so nothing blows up, and averaging the swings does not produce a limit.'
          }
        ]
      }
    },
    {
      id: 'elt3-input',
      type: 'input-boxes' as const,
      content: `**Read the table** 🧮

A table for $\\lim_{x \\to 4} g(x)$ shows:
$g(3.99) = 5.0$, $g(3.999) = 5.0$, $g(4.001) = 7.0$, $g(4.01) = 7.0$.

**1)** Left-hand limit estimate: \`?\`

**2)** Right-hand limit estimate: \`?\`

**3)** Does $\\lim_{x \\to 4} g(x)$ exist? Type \`yes\` or \`no\`:

**4)** Failure mode (\`jump\`, \`blowup\`, \`oscillation\`, or \`none\`):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['5', '7', 'no', 'jump'],
        hint1: 'Both left values agree on 5.',
        hint2: 'Both right values agree on 7.',
        hint3: 'Two different finite one-sided limits → jump.',
        explanation: 'Two clean disagreeing one-sided limits — a jump discontinuity. Two-sided limit DNE.'
      }
    }
  ]
}
