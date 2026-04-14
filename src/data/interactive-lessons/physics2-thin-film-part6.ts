export const physics2ThinFilmPart6Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Thin Film Practice**

---

### Thin Film Problem Strategy

| Step | Action | Common Pitfalls |
|------|--------|----------------|
| 1 | **Draw the setup** — label all 3 media with $n$ values | Forgetting the bottom medium |
| 2 | **Count phase changes** at each reflecting surface | Mixing up low→high vs high→low |
| 3 | **Choose the correct equation** (odd vs even shifts) | Using the wrong condition |
| 4 | **Solve** for the unknown ($t$, $\\lambda$, or $m$) | Using $\\lambda$ instead of $\\lambda/n$ when needed |
| 5 | **Check** — does the answer make physical sense? | Thickness should be ~100–1000 nm |

---

### Common Mistakes Table

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|-----------------|
| Forgetting phase changes | The equation choice depends on this! | Always count shifts first |
| Using wrong $n$ in $2nt$ | $n$ must be the film's refractive index | $n$ in the formula = $n_{film}$ |
| Confusing $\\lambda$ and $\\lambda_n$ | $\\lambda$ in the formulas is the **vacuum** wavelength | Always use $\\lambda_{vacuum}$ in $2nt = \\ldots$ |
| Setting $m = 0$ for even shifts with $2nt = m\\lambda$ | $m = 0$ gives $t = 0$ (trivial) | Use $m = 1$ for minimum thickness |
| Thinking thicker films are better | More orders overlap → less pure color | Minimum thickness usually asked |

---

### 🔍 Worked Problem 1: Oil on Water

**Problem:** An oil film ($n = 1.45$) on water ($n = 1.33$) looks bright green ($\\lambda = 520$ nm) in reflected white light. Find the minimum film thickness.

| Step | Work |
|------|------|
| Media | Air (1.00) → Oil (1.45) → Water (1.33) |
| Phase changes | Air→Oil: low→high → **shift**. Oil→Water: high→low → **no shift** |
| Total shifts | **1** (odd) |
| Constructive | $2nt = (m + 1/2)\\lambda$ |
| Min ($m = 0$) | $t = \\lambda/(4n) = 520/(4 \\times 1.45) = 89.7$ nm |
| Check | Thickness ~90 nm is reasonable for a visible thin film ✅ |`
    },
    {
      id: 'thinfilminterference-p6-worked',
      type: 'text' as const,
      content: `### 🔍 Worked Problem 2: Coating on Glass

**Problem:** A MgF₂ coating ($n = 1.38$) on crown glass ($n = 1.52$) is designed to minimize reflection of $\\lambda = 550$ nm light. Find the minimum coating thickness.

| Step | Work |
|------|------|
| Media | Air (1.00) → MgF₂ (1.38) → Glass (1.52) |
| Phase changes | Air→MgF₂: low→high → **shift**. MgF₂→Glass: low→high → **shift** |
| Total shifts | **2** (even) |
| Destructive | $2nt = (m + 1/2)\\lambda$ |
| Min ($m = 0$) | $t = \\lambda/(4n) = 550/(4 \\times 1.38) = 99.6$ nm |
| Check | ~100 nm coating on glass — standard for optical coatings ✅ |

---

### 🔍 Worked Problem 3: Finding the Wavelength

**Problem:** A soap film ($n = 1.33$, thickness $t = 175$ nm) in air. Which visible wavelength is most strongly reflected?

| Step | Work |
|------|------|
| Phase changes | 1 (air→soap: shift; soap→air: no shift) |
| Constructive | $2nt = (m + 1/2)\\lambda$ → $\\lambda = 2nt/(m + 1/2)$ |
| $2nt$ | $2(1.33)(175) = 465.5$ nm |
| $m = 0$ | $\\lambda = 465.5/0.5 = 931$ nm (infrared — not visible) |
| $m = 1$ | $\\lambda = 465.5/1.5 = 310$ nm (ultraviolet — not visible) |
| **Result** | No visible wavelength is constructively reflected at this exact thickness |

This film would appear **dark** in reflected visible light — it's between the constructive conditions for any visible color.

---

### 🔍 Worked Problem 4: Two Phase Changes with a Twist

**Problem:** A film of unknown material ($n_f$) is sandwiched between glass ($n = 1.5$) on both sides. Film thickness $t = 200$ nm. It strongly reflects $\\lambda = 600$ nm. Find possible $n_f$ values.

| Step | Work |
|------|------|
| Phase changes (if $n_f < 1.5$) | Glass→film: high→low (no shift). Film→glass: low→high (shift). Total: **1** |
| Phase changes (if $n_f > 1.5$) | Glass→film: low→high (shift). Film→glass: high→low (no shift). Total: **1** |
| Either way: 1 shift | Constructive: $2n_f t = (m+1/2)\\lambda$ |
| $m = 0$ | $n_f = \\lambda/(4t) = 600/(4 \\times 200) = 0.75$ (too low for any material) |
| $m = 1$ | $n_f = 3\\lambda/(4t) = 1800/800 = 2.25$ (possible — e.g., ZnS) |

> 🔑 **Lesson:** When the film is between identical media, you always get 1 phase change regardless of whether $n_f$ is higher or lower.`
    },
    {
      id: 'thinfilminterference-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Practice Problems** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A soap film ($n = 1.33$) in air. For $\\lambda = 650$ nm, which is the minimum constructive thickness?',
            options: ['122.2 nm', '244.4 nm', '162.5 nm', '325 nm'],
            correctAnswer: 0,
            explanation: '1 phase change → $t = \\lambda/(4n) = 650/(4 \\times 1.33) = 122.2$ nm.'
          },
          {
            question: 'Oil ($n = 1.4$) on glass ($n = 1.5$). For $\\lambda = 560$ nm, minimum constructive thickness:',
            options: ['200 nm', '100 nm', '140 nm', '280 nm'],
            correctAnswer: 0,
            explanation: 'Two phase changes (both low→high) → $2nt = m\\lambda$, min at $m = 1$: $t = \\lambda/(2n) = 560/(2 \\times 1.4) = 200$ nm.'
          },
          {
            question: 'If white light hits a thin film and you see blue in reflection and orange in transmission, this is because:',
            options: ['Blue is constructively reflected; orange (complement) passes through', 'The film absorbs blue', 'The film absorbs orange', 'Blue scatters more than orange'],
            correctAnswer: 0,
            explanation: 'By energy conservation, wavelengths strongly reflected are weakly transmitted. Blue and orange are complementary colors.'
          },
          {
            question: 'A film appears bright red ($\\lambda = 700$ nm) at $m = 0$ and also at $m = 1$. What other wavelength is also bright at $m = 1$ thickness?',
            options: ['None — only $\\lambda = 700$ nm is bright at $m = 1$', '$\\lambda = 233$ nm', '$\\lambda = 350$ nm', '$\\lambda = 1400$ nm'],
            correctAnswer: 0,
            explanation: 'At the $m = 1$ thickness ($3\\lambda/(4n)$ for 1 shift), only $\\lambda = 700$ nm satisfies the $m = 1$ condition. Other wavelengths would need different $m$ values to be constructive at this same thickness.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p6-input',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Problems** 🧮

An oil film ($n = 1.50$) floats on water ($n = 1.33$). White light illuminates from above.

**1)** How many phase changes for reflected light? (number)

**2)** The film looks bright yellow ($\\lambda = 580$ nm). Minimum thickness? (in nm, round to 1 decimal place)

**3)** At this same thickness, is $\\lambda = 580$ nm constructive or destructive in transmitted light? (constructive/destructive)

**4)** What wavelength (if any) would be destructively reflected at this minimum thickness? Use $2nt = m\\lambda$ with $m = 1$. (in nm)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['1', '96.7', 'destructive', '290'],
        hint1: 'Air→oil: low→high. Oil→water: high→low.',
        hint2: '$t = \\lambda/(4n) = 580/(4 \\times 1.50)$',
        hint3: 'If a wavelength is bright in reflection, what is it in transmission?',
        hint4: '$2nt = \\lambda$ at this thickness: $\\lambda = 2(1.50)(96.7)$',
        explanation: '1) Air→oil: shift. Oil→water: no shift. Total: 1. 2) $t = 580/6 = 96.7$ nm. 3) Destructive — energy goes to reflection, not transmission. 4) $\\lambda = 2 \\times 1.50 \\times 96.7 = 290$ nm (UV — not visible).'
      }
    }
  ]
};