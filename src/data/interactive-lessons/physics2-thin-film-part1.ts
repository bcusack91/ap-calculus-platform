export const physics2ThinFilmPart1Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p1-intro',
      type: 'text' as const,
      content: `# 🌈 Thin Film Interference

**Part 1 of 7 — Thin Film Basics**

---

### What is Thin Film Interference?

When light hits a thin transparent film (soap bubble, oil slick, anti-glare coating), it reflects from **both** the top and bottom surfaces. These two reflected waves travel different paths and can **interfere** — producing bright colors or darkness depending on the film thickness and wavelength.

---

### Phase Changes on Reflection — The Critical First Step

| Reflection Condition | Phase Shift | Analogy |
|---------------------|-------------|---------|
| Low $n$ → High $n$ (e.g., air → glass) | **$\\lambda/2$ shift** (180°) | Wave on string hitting fixed end |
| High $n$ → Low $n$ (e.g., glass → air) | **No phase change** | Wave on string hitting free end |

> ⚠️ **This is the #1 source of errors!** Always determine phase changes FIRST before applying any formula.

---

### Path Difference

The wave reflecting from the bottom surface travels through the film **twice** (down and back up):

$$\\boxed{\\text{Extra path} = 2t}$$

But the wavelength inside the film is shorter: $\\lambda_{film} = \\lambda/n$

So the effective optical path difference is:

$$\\boxed{\\Delta = 2nt}$$

where $n$ = refractive index of the film and $t$ = thickness.

---

### The Three-Layer Setup

Every thin film problem involves **three media** stacked:

| Layer | Example 1 (Soap Bubble) | Example 2 (Oil on Water) | Example 3 (Coating on Glass) |
|-------|------------------------|--------------------------|------------------------------|
| Top | Air ($n = 1.00$) | Air ($n = 1.00$) | Air ($n = 1.00$) |
| Film | Soap ($n = 1.33$) | Oil ($n \\approx 1.4$) | MgF₂ ($n = 1.38$) |
| Bottom | Air ($n = 1.00$) | Water ($n = 1.33$) | Glass ($n = 1.52$) |
| Top reflection | low→high: **shift** | low→high: **shift** | low→high: **shift** |
| Bottom reflection | high→low: **no shift** | high→low: **no shift** | low→high: **shift** |
| **Total shifts** | **1** | **1** | **2** |

> 🔑 **Rule:** Count the number of $\\lambda/2$ phase shifts. You need all three $n$ values to do this correctly!`
    },
    {
      id: 'thinfilminterference-p1-conditions',
      type: 'text' as const,
      content: `### Interference Conditions

The conditions for constructive and destructive interference depend on whether there is an **odd** or **even** number of phase shifts.

---

#### Case 1: ONE phase change (odd number)

The $\\lambda/2$ shift means the two waves are already half a wavelength out of step. To get constructive interference, the path difference must add another half wavelength to make them line up:

| Interference Type | Condition | Why |
|------------------|-----------|-----|
| **Constructive** (bright) | $2nt = (m + \\frac{1}{2})\\lambda$ | Half-wavelength offset from phase change + half-integer path makes full wavelength |
| **Destructive** (dark) | $2nt = m\\lambda$ | Path difference is integer wavelengths, but phase shift makes them cancel |

#### Case 2: ZERO or TWO phase changes (even number)

No net phase offset, so standard interference applies:

| Interference Type | Condition | Why |
|------------------|-----------|-----|
| **Constructive** (bright) | $2nt = m\\lambda$ | Integer wavelength path difference → in phase |
| **Destructive** (dark) | $2nt = (m + \\frac{1}{2})\\lambda$ | Half-integer path → out of phase |

In both cases: $m = 0, 1, 2, 3, \\ldots$

---

### Decision Flowchart

1. **Identify** the three media and their $n$ values
2. **Count** phase changes at each reflecting surface
3. **Odd or even?** → Select the correct equation set
4. **Plug in** $n$, $t$, and $\\lambda$ to solve

---

### Why Do We See Colors?

White light contains all wavelengths. A film of specific thickness satisfies the constructive condition for one color while partially destroying others. That's why:

- **Soap bubbles** show swirling rainbow patterns (varying thickness)
- **Oil slicks** display colorful bands
- **Anti-reflection coatings** look slightly purple (green is eliminated, red/blue partially reflect)

> 🔑 **Key Distinction:** These are interference colors (structural), not pigment colors. They change with viewing angle because the effective path through the film changes.`
    },
    {
      id: 'thinfilminterference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Light reflects from a surface going from $n = 1.0$ to $n = 1.5$. There is:',
            options: ['A $\\lambda/2$ phase change', 'No phase change', 'A full $\\lambda$ phase change', 'Phase change depends on wavelength'],
            correctAnswer: 0,
            explanation: 'Low $n$ → high $n$: always a $\\lambda/2$ (180°) phase change, like a wave on a string reflecting from a fixed end.'
          },
          {
            question: 'An oil film ($n = 1.4$) on water ($n = 1.33$). How many phase changes for reflected light?',
            options: ['1', '0', '2', 'Depends on film thickness'],
            correctAnswer: 0,
            explanation: 'Top: air ($1.0$) → oil ($1.4$): low→high = shift. Bottom: oil ($1.4$) → water ($1.33$): high→low = no shift. Total: 1.'
          },
          {
            question: 'A coating ($n = 1.38$) on glass ($n = 1.52$). How many phase changes?',
            options: ['2', '1', '0', '3'],
            correctAnswer: 0,
            explanation: 'Top: air ($1.0$) → coating ($1.38$): low→high = shift. Bottom: coating ($1.38$) → glass ($1.52$): low→high = shift. Total: 2.'
          },
          {
            question: 'In thin film problems, "thin" means the film thickness is on the order of:',
            options: ['Wavelengths of visible light (~100–1000 nm)', 'Centimeters', 'Atomic diameters', 'Meters'],
            correctAnswer: 0,
            explanation: 'Thin films have thickness comparable to visible light wavelengths (hundreds of nanometers). Much thicker → too many fringes to see distinct colors. Much thinner → negligible path difference.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p1-input',
      type: 'input-boxes' as const,
      content: `
**Thin Film Setup** 🧮

A soap film ($n = 1.33$) suspended in air. Consider reflected light at $\\lambda = 550$ nm (green).

**1)** Phase change at top surface (air → film)? (yes/no)

**2)** Phase change at bottom surface (film → air)? (yes/no)

**3)** Total phase changes? (number)

**4)** For constructive interference, we use: $2nt = $ ___ (write "m+1/2" or "m" to indicate which coefficient of $\\lambda$)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['yes', 'no', '1', 'm+1/2'],
        hint1: 'Air ($n=1.0$) → soap ($n=1.33$): is this low→high?',
        hint2: 'Soap ($n=1.33$) → air ($n=1.0$): is this high→low?',
        hint3: 'Add up the yes answers',
        hint4: 'Odd number of phase changes → half-integer condition for constructive',
        explanation: '1) Yes — low $n$ to high $n$. 2) No — high $n$ to low $n$. 3) 1 phase change. 4) One phase change → constructive requires $2nt = (m+1/2)\\lambda$.'
      }
    }
  ]
};