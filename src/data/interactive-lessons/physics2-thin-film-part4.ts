export const physics2ThinFilmPart4Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p4-intro',
      type: 'text' as const,
      content: `# 🔘 Newton's Rings & Wedge Films

**Part 4 of 7 — Variable Thickness Films**

---

### Air Wedge Interference

When two flat glass plates touch at one edge and are separated by a thin spacer at the other, the air gap forms a **wedge** that increases linearly from zero to the spacer thickness.

**Setup:** Glass (top plate) → Air gap (wedge) → Glass (bottom plate)

**Phase changes:** 
- Top reflection (glass → air): high→low → **no shift**
- Bottom reflection (air → glass): low→high → **shift**
- Total: **1 phase change**

---

### Fringe Pattern

Each dark fringe corresponds to where $2nt = m\\lambda$ (destructive, 1 phase change). As the gap increases linearly, you see **equally spaced** parallel fringes.

$$\\boxed{\\text{Fringe spacing: } \\Delta x = \\frac{\\lambda}{2n\\tan\\alpha} \\approx \\frac{\\lambda L}{2d}}$$

| Variable | Meaning |
|----------|---------|
| $\\alpha$ | Wedge angle |
| $L$ | Length of wedge |
| $d$ | Spacer thickness at wide end |
| $n$ | Refractive index of gap (usually air, $n = 1$) |

---

### Key Observations

| Feature | Explanation |
|---------|-------------|
| Contact edge is **dark** | Gap = 0, one phase change → destructive |
| Fringes are **equally spaced** | Linear increase in gap thickness |
| Thinner spacer → **wider** fringes | $\\Delta x \\propto 1/d$ |
| Using liquid ($n > 1$) in gap → **closer** fringes | $\\Delta x \\propto 1/n$ |

> 🔑 **Counting fringes** between contact edge and spacer lets you calculate either $d$ or $\\lambda$!`
    },
    {
      id: 'thinfilminterference-p4-newton',
      type: 'text' as const,
      content: `### Newton's Rings

A **convex lens** resting on a flat glass plate creates a circular air gap that increases with distance from the contact point. This produces **concentric circular** interference fringes called Newton's rings.

---

### Ring Radii

**Dark rings** (destructive, 1 phase change):

$$\\boxed{r_m = \\sqrt{m\\lambda R}, \\quad m = 0, 1, 2, \\ldots}$$

**Bright rings** (constructive, 1 phase change):

$$\\boxed{r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)\\lambda R}}$$

| Variable | Meaning |
|----------|---------|
| $r_m$ | Radius of the $m$-th ring |
| $R$ | Radius of curvature of the convex lens |
| $\\lambda$ | Wavelength of light |
| $m$ | Ring order (0, 1, 2, ...) |

---

### Important Properties

| Property | Detail |
|----------|--------|
| **Center ($m = 0$)** | Dark spot (air gap → 0, one phase change → destructive) |
| **Ring spacing** | Rings get **closer together** as $m$ increases ($r \\propto \\sqrt{m}$) |
| **Larger $R$** | Larger rings (more spread out) |
| **Longer $\\lambda$** | Larger rings |

| Ring | $r_m / \\sqrt{\\lambda R}$ | Spacing |
|------|----------------------|---------|
| $m = 1$ | 1.000 | — |
| $m = 2$ | 1.414 | 0.414 |
| $m = 3$ | 1.732 | 0.318 |
| $m = 4$ | 2.000 | 0.268 |
| $m = 5$ | 2.236 | 0.236 |

The rings crowd together outward — a characteristic signature of Newton's rings.

---

### Applications of Newton's Rings

| Application | How |
|-------------|-----|
| **Measuring $\\lambda$** | Count rings, measure radii, known $R$ |
| **Measuring $R$** | Known $\\lambda$, measure ring radii |
| **Testing surface flatness** | Distorted rings → surface imperfections |
| **Checking lens quality** | Rings should be perfectly circular |

> 🔑 **Practical tip:** If the rings aren't perfectly circular, the lens or plate has surface defects. This is a standard quality control test in optics manufacturing.`
    },
    {
      id: 'thinfilminterference-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The center of Newton\'s rings is:',
            options: ['Dark', 'Bright', 'Neither — no pattern at center', 'Alternating'],
            correctAnswer: 0,
            explanation: 'At the contact point, air gap = 0. With 1 phase change and zero path difference → destructive → dark spot.'
          },
          {
            question: 'Newton\'s ring radii increase proportionally to:',
            options: ['$\\sqrt{m}$', '$m$', '$m^2$', '$1/m$'],
            correctAnswer: 0,
            explanation: '$r_m = \\sqrt{m\\lambda R}$ → $r \\propto \\sqrt{m}$. Rings get closer together outward because the air gap increases faster at larger radii.'
          },
          {
            question: 'In an air wedge, if the spacer thickness doubles, the fringe spacing:',
            options: ['Halves', 'Doubles', 'Stays the same', 'Quadruples'],
            correctAnswer: 0,
            explanation: '$\\Delta x \\propto 1/d$. Double the spacer → half the fringe spacing → twice as many fringes visible.'
          },
          {
            question: 'If an air wedge is filled with water ($n = 1.33$) instead of air, the fringes:',
            options: ['Get closer together', 'Get farther apart', 'Disappear', 'Don\'t change'],
            correctAnswer: 0,
            explanation: '$\\Delta x \\propto 1/n$. Water has $n > 1$, so fringes get closer. Also, the phase change analysis may change depending on the glass $n$ values.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p4-input',
      type: 'input-boxes' as const,
      content: `
**Newton's Rings Calculations** 🧮

A plano-convex lens ($R = 2.0$ m) on a flat glass plate, illuminated with sodium light ($\\lambda = 589$ nm).

**1)** Radius of the 1st dark ring ($m = 1$)? (in mm, round to 2 decimal places)

**2)** Radius of the 4th dark ring ($m = 4$)? (in mm, round to 2 decimal places)

**3)** Ratio $r_4/r_1$?

**4)** How many dark rings fit within a radius of 5 mm? (round down to nearest whole number)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['1.09', '2.17', '2', '21'],
        hint1: '$r_1 = \\sqrt{1 \\times 589 \\times 10^{-9} \\times 2.0}$',
        hint2: '$r_4 = \\sqrt{4 \\times 589 \\times 10^{-9} \\times 2.0}$',
        hint3: '$r_4/r_1 = \\sqrt{4/1}$',
        hint4: '$r_m = 5$ mm → $m = r^2/(\\lambda R)$',
        explanation: '1) $r_1 = \\sqrt{1.178 \\times 10^{-6}} = 1.085 \\times 10^{-3}$ m $= 1.09$ mm. 2) $r_4 = \\sqrt{4.712 \\times 10^{-6}} = 2.17$ mm. 3) $\\sqrt{4} = 2$. 4) $m = (5 \\times 10^{-3})^2/(589 \\times 10^{-9} \\times 2) = 25 \\times 10^{-6}/1.178 \\times 10^{-6} = 21.2$ → 21 rings.'
      }
    }
  ]
};