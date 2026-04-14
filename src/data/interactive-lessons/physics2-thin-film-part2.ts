export const physics2ThinFilmPart2Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p2-intro',
      type: 'text' as const,
      content: `# ✨ Constructive Interference in Thin Films

**Part 2 of 7 — Bright Colors and Minimum Thickness**

---

### One Phase Change — The Most Common Case

Soap bubbles in air, oil on water — these have **one** phase change. For constructive (bright) interference:

$$\\boxed{2nt = \\left(m + \\frac{1}{2}\\right)\\lambda, \\quad m = 0, 1, 2, \\ldots}$$

### Minimum Thickness for Constructive Interference

The thinnest film that maximally reflects a given wavelength uses $m = 0$:

$$\\boxed{t_{min} = \\frac{\\lambda}{4n}}$$

---

### Why $\\lambda / (4n)$?

Think about it physically: the light travels through the film twice (down and back), covering an optical path of $2nt$. Setting this equal to $\\lambda/2$ means the path difference provides the "missing" half-wavelength to complement the phase shift — putting the two waves perfectly in phase.

---

### Thickness Hierarchy

| Order ($m$) | Thickness Formula | Multiple of $t_{min}$ |
|-------------|------------------|----------------------|
| $m = 0$ | $\\lambda/(4n)$ | $1\\times$ |
| $m = 1$ | $3\\lambda/(4n)$ | $3\\times$ |
| $m = 2$ | $5\\lambda/(4n)$ | $5\\times$ |
| $m = 3$ | $7\\lambda/(4n)$ | $7\\times$ |

Pattern: constructive thicknesses are **odd multiples** of $\\lambda/(4n)$.

---

### Worked Example

**Soap film** ($n = 1.33$) appears green ($\\lambda = 530$ nm). Minimum thickness:

$$t = \\frac{530}{4(1.33)} = \\frac{530}{5.32} = 99.6 \\text{ nm}$$

That's less than 100 nm — about 1/5000th of a human hair!`
    },
    {
      id: 'thinfilminterference-p2-colors',
      type: 'text' as const,
      content: `### Why Soap Bubbles Show Rainbow Colors

A soap bubble has **varying thickness** across its surface due to gravity (thinner at top, thicker at bottom) and air currents. Each thickness enhances a different wavelength → rainbow swirl.

| Observation | Explanation |
|-------------|-------------|
| Swirling colors | Thickness varies continuously across surface |
| Colors shift over time | Film thins as water drains downward |
| Top appears dark just before popping | Film too thin ($t \\ll \\lambda$) → destructive interference |
| Bright bands move downward | Gravity pulls water down, changing thickness distribution |

---

### Multiple Wavelengths from One Thickness

A given thickness can constructively reflect **more than one wavelength** at different orders:

$$\\lambda_m = \\frac{2nt}{m + 1/2}$$

| For $n = 1.33$, $t = 300$ nm | $m$ | $\\lambda$ | Visible? |
|-------------------------------|-----|-----------|---------|
| | 0 | 1596 nm | No (infrared) |
| | 1 | 532 nm | **Yes — green** |
| | 2 | 319 nm | No (ultraviolet) |

So this film appears green. But thicker films may reflect multiple visible wavelengths → appears white/silvery.

---

### Zero or Two Phase Changes — Constructive

When the phase changes are even (0 or 2), constructive interference uses the integer condition:

$$\\boxed{2nt = m\\lambda, \\quad m = 1, 2, 3, \\ldots}$$

Minimum thickness: $t_{min} = \\lambda/(2n)$ (using $m = 1$; $m = 0$ gives $t = 0$, trivial).

| Phase Changes | Constructive Min Thickness |
|--------------|---------------------------|
| 1 (odd) | $\\lambda/(4n)$ |
| 0 or 2 (even) | $\\lambda/(2n)$ |

> 🔑 **Memory Aid:** Odd phase changes → odd multiples of $\\lambda/(4n)$. Even phase changes → integer multiples of $\\lambda/(2n)$.`
    },
    {
      id: 'thinfilminterference-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Minimum thickness for bright reflection (one phase change) with $\\lambda = 600$ nm, $n = 1.5$:',
            options: ['100 nm', '200 nm', '300 nm', '150 nm'],
            correctAnswer: 0,
            explanation: '$t_{min} = \\lambda/(4n) = 600/(4 \\times 1.5) = 100$ nm.'
          },
          {
            question: 'The next constructive thickness after $t_{min}$ (one phase change) is:',
            options: ['$3\\lambda/(4n)$', '$\\lambda/(2n)$', '$\\lambda/n$', '$2\\lambda/(4n)$'],
            correctAnswer: 0,
            explanation: '$m = 1$: $t = (1 + 1/2)\\lambda/(2n) = 3\\lambda/(4n)$. Three times the minimum thickness.'
          },
          {
            question: 'A soap film that appears uniformly dark in reflected white light is:',
            options: ['Extremely thin ($t \\ll \\lambda$)', 'Extremely thick', 'Exactly one wavelength thick', 'At the critical angle'],
            correctAnswer: 0,
            explanation: 'When $t \\to 0$, path difference $\\to 0$, but there\'s one phase change → destructive → dark. This happens just before a bubble pops.'
          },
          {
            question: 'An oil film ($n = 1.4$) on glass ($n = 1.5$) — two phase changes. Minimum constructive thickness for $\\lambda = 560$ nm is:',
            options: ['200 nm', '100 nm', '280 nm', '140 nm'],
            correctAnswer: 0,
            explanation: 'Two phase changes → $2nt = m\\lambda$, min at $m = 1$: $t = \\lambda/(2n) = 560/(2 \\times 1.4) = 200$ nm.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p2-input',
      type: 'input-boxes' as const,
      content: `
**Constructive Interference Calculations** 🧮

An oil film ($n = 1.40$) on water ($n = 1.33$). One phase change. Bright red reflection at $\\lambda = 700$ nm.

**1)** Minimum thickness for bright reflection? (in nm)

**2)** Next constructive thickness ($m = 1$)? (in nm)

**3)** Wavelength of light inside the oil film? (in nm)

**4)** If the same film is viewed in transmitted light, does red appear bright or dark? (bright/dark)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['125', '375', '500', 'dark'],
        hint1: '$t = \\lambda/(4n) = 700/(4 \\times 1.40)$',
        hint2: '$t = 3\\lambda/(4n)$',
        hint3: '$\\lambda_{film} = \\lambda/n = 700/1.40$',
        hint4: 'If reflected light is bright (constructive), transmitted must be...',
        explanation: '1) $t = 700/5.6 = 125$ nm. 2) $t = 3 \\times 700/5.6 = 375$ nm. 3) $\\lambda_{film} = 700/1.40 = 500$ nm. 4) Dark — energy conservation: if red is strongly reflected, it is weakly transmitted.'
      }
    }
  ]
};