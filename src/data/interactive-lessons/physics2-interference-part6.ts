export const physics2InterferencePart6Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id6-intro',
      type: 'text' as const,
      content: `
# 🔦 The Real Double-Slit Pattern

**Part 6 of 7 — Double Slits Inside a Single-Slit Envelope**

In Part 2 we treated each slit as a point source, which predicts a row of equally bright fringes. Real slits have a width, so each one also **diffracts** (Part 3). The pattern you actually see on the screen is both effects at once — and learning to read it lets you work backward from a photo of a pattern to the slits that made it.
      `
    },
    {
      id: 'id6-envelope',
      type: 'text' as const,
      content: `
## Interference Inside a Diffraction Envelope

Two things happen at once:

- **Interference between the two slits** (spacing $d$) sets **where** the bright fringes are: $d\\sin\\theta = m\\lambda$, with spacing $\\Delta y = \\lambda L/d$
- **Diffraction through each slit** (width $a$) sets **how bright** each region can be: a broad central maximum between the first minima at $a\\sin\\theta = \\pm\\lambda$, then dimmer side regions

The result is a row of evenly spaced interference fringes whose brightness follows the single-slit pattern — the fringes sit **inside the single-slit envelope**. Because the slits are much narrower than they are far apart ($a < d$), the envelope is much wider than the fringe spacing, so many fringes fit inside it.

### Missing Fringes

Where an interference maximum lands exactly on a single-slit minimum, no light arrives there and that fringe is **missing**. This happens when both conditions hold at the same angle:

$$d\\sin\\theta = m\\lambda \\quad \\text{and} \\quad a\\sin\\theta = \\lambda \\quad \\Rightarrow \\quad m = \\frac{d}{a}$$

If $d/a$ is a whole number $n$, the $m = \\pm n$ fringes are missing, and the central envelope holds $2n - 1$ bright fringes ($m = 0, \\pm 1, \\ldots, \\pm(n-1)$).

### What Each Change Does

| Change | Fringe spacing ($\\lambda L/d$) | Envelope width ($2\\lambda L/a$) |
|--------|-------------------------------|-------------------------------|
| Increase $d$ | Smaller | Unchanged |
| Increase $a$ | Unchanged | Smaller |
| Increase $\\lambda$ | Larger | Larger |
| Increase $L$ | Larger | Larger |

Changing $\\lambda$ or $L$ stretches the whole pattern but keeps the same number of fringes in the central envelope; only the ratio $d/a$ changes that count.
      `
    },
    {
      id: 'id6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Envelope Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a real double-slit pattern, the bright fringes get dimmer farther from the center. What causes this?',
            options: [
              'Light that reaches distant fringes travels a longer path',
              'Diffraction through each slit sets a fading envelope',
              'The two slits stop being coherent at large angles',
              'Path differences larger than λ cannot interfere'
            ],
            correctAnswer: 1,
            explanation: 'Each slit has a finite width, so its single-slit diffraction pattern limits how much light reaches each angle, and the interference fringes are bright only inside that envelope. Coherence and interference do not fail at large angles; whole-number path differences of several wavelengths still give bright fringes.'
          },
          {
            question: 'The width of each slit is decreased while the slit separation stays the same. What happens to the pattern?',
            options: [
              'The envelope stays fixed while the fringes spread apart',
              'The envelope widens, so more fringes fit inside it',
              'The envelope narrows, so fewer fringes fit inside it',
              'The fringes and the envelope both stay unchanged'
            ],
            correctAnswer: 1,
            explanation: 'The envelope width is $2\\lambda L/a$, so a smaller $a$ widens it, while the fringe spacing $\\lambda L/d$ is unchanged. With the same spacing inside a wider envelope, more fringes appear in the central maximum.'
          },
          {
            question: 'The slit separation of a double slit is four times the slit width ($d = 4a$). Which order of bright fringe is the first one missing from the pattern?',
            options: [
              '$m = 2$',
              '$m = 3$',
              '$m = 4$',
              '$m = 8$'
            ],
            correctAnswer: 2,
            explanation: 'The fringe of order $m = d/a = 4$ lands on the first single-slit minimum, so it is missing. Orders 2 and 3 lie inside the central envelope, and $m = 8$ is also missing but only after $m = 4$.'
          }
        ]
      }
    },
    {
      id: 'id6-worked-example',
      type: 'text' as const,
      content: `
## Worked Example: Reading the Pattern

Light of wavelength 600 nm passes through two slits, each $a = 0.10$ mm wide, with centers $d = 0.30$ mm apart. The screen is $L = 2.0$ m away.

**Step 1 — fringe spacing:**
$$\\Delta y = \\frac{\\lambda L}{d} = \\frac{(600 \\times 10^{-9})(2.0)}{0.30 \\times 10^{-3}} = 4.0 \\times 10^{-3} \\text{ m} = 4.0 \\text{ mm}$$

**Step 2 — central envelope:** the first single-slit minima are at
$$y = \\pm\\frac{\\lambda L}{a} = \\pm\\frac{(600 \\times 10^{-9})(2.0)}{0.10 \\times 10^{-3}} = \\pm 12 \\text{ mm}$$
so the central envelope is 24 mm wide.

**Step 3 — count the fringes:** bright fringes sit at 0, ±4, ±8, ±12 mm. The ones at ±12 mm land on the envelope's minima and are **missing**. That leaves **5 bright fringes** in the central envelope — consistent with $d/a = 3$ and $2n - 1 = 5$.

### Working Backward

On the exam you may be handed a sketch of a pattern instead. Measure the fringe spacing to find $d$ (or $\\lambda$), measure the central envelope to find $a$, or simply count the fringes in the central envelope to find $d/a$.
      `
    },
    {
      id: 'id6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Envelope Calculation Drill** 🧮

Light of wavelength 500 nm passes through two slits, each 0.10 mm wide, with centers 0.40 mm apart. The screen is 2.0 m away.

1) Fringe spacing on the screen (in mm)

2) Full width of the central diffraction envelope (in mm)

3) Number of bright fringes inside the central envelope
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '20', '7'],
        hint1: '$\\Delta y = \\lambda L/d = (500 \\times 10^{-9})(2.0)/(0.40 \\times 10^{-3})$.',
        hint2: 'Full width $= 2\\lambda L/a = 2(500 \\times 10^{-9})(2.0)/(0.10 \\times 10^{-3})$.',
        hint3: '$d/a = 4$, so the $m = \\pm 4$ fringes are missing. Count $m = 0, \\pm 1, \\pm 2, \\pm 3$.',
        explanation: '$\\Delta y = 2.5$ mm. Envelope width $= 0.020$ m $= 20$ mm, so it reaches ±10 mm. Fringes at 0, ±2.5, ±5.0, ±7.5 mm are inside; the ±10 mm fringes fall on the minima and are missing, leaving 7 bright fringes.'
      }
    },
    {
      id: 'id6-comparing-patterns',
      type: 'text' as const,
      content: `
## Telling Patterns Apart

Given only the pattern on a screen, you can identify what made it.

| What you see | What made it | Why |
|--------------|--------------|-----|
| One wide, bright central band; dim side bands half as wide | **Single slit** | Diffraction alone; the formula $a\\sin\\theta = m\\lambda$ marks the dark bands |
| Many evenly spaced fringes whose brightness rises and falls in groups | **Double slit** | Interference fringes inside the single-slit envelope |
| A few very sharp, bright lines far apart, with darkness between | **Diffraction grating** | Many slits sharpen each maximum at $d\\sin\\theta = m\\lambda$ |
| A bright central spot surrounded by faint rings | **Small circular hole** | The pattern takes the shape of the opening |

### With White Light

- **Double slit:** a white central fringe with colored fringes on each side that blur together farther out
- **Grating:** a white central maximum, then a full rainbow in each order, with **red farthest** from the center (longest wavelength, largest angle)

The fact that light makes these patterns at all — fringes, envelopes, and sharp grating lines — is the evidence, starting with Young's double-slit experiment, that light behaves as a wave.
      `
    },
    {
      id: 'id6-exit-quiz',
      type: 'dropdown-select' as const,
      content: `
**Exit Check — Which Pattern Is It?** ✅
      `,
      exercise: {
        dropdowns: [
          {
            label: 'One wide central band with much dimmer side bands comes from',
            options: ['a single slit', 'a double slit', 'a diffraction grating', 'a circular hole']
          },
          {
            label: 'Evenly spaced fringes that fade in and out in groups come from',
            options: ['a single slit', 'a double slit', 'a diffraction grating', 'a circular hole']
          },
          {
            label: 'A few very sharp, widely spaced lines on a dark screen come from',
            options: ['a single slit', 'a double slit', 'a diffraction grating', 'a circular hole']
          },
          {
            label: 'Increasing the slit separation d in a double slit makes the central envelope',
            options: ['wider', 'narrower', 'unchanged']
          },
          {
            label: 'If d/a = 2, the number of bright fringes in the central envelope is',
            options: ['1', '2', '3', '4']
          }
        ],
        correctAnswers: ['a single slit', 'a double slit', 'a diffraction grating', 'unchanged', '3'],
        hint1: 'Diffraction alone gives one dominant central band; adding a second slit adds evenly spaced fringes.',
        hint2: 'The envelope width $2\\lambda L/a$ depends on the slit width, not the separation.',
        hint3: 'With $d/a = n$, the central envelope holds $2n - 1$ bright fringes.',
        explanation: 'A single slit gives one wide central band; a double slit gives evenly spaced fringes inside the single-slit envelope; a grating gives a few very sharp lines. The envelope depends only on $a$, so changing $d$ leaves it unchanged. With $d/a = 2$, the $m = \\pm 2$ fringes are missing, leaving $m = 0, \\pm 1$: 3 bright fringes.'
      }
    }
  ]
}
