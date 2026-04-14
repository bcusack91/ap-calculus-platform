export const physics2ThinFilmPart7Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p7-intro',
      type: 'text' as const,
      content: `# 📝 Comprehensive Review

**Part 7 of 7 — Everything Thin Film Interference**

---

### Master Reference Table

| Configuration | Phase Changes | Constructive | Destructive | Min $t$ (constructive) |
|--------------|--------------|-------------|-------------|----------------------|
| **1 shift** (odd) | 1 | $2nt = (m+\\frac{1}{2})\\lambda$ | $2nt = m\\lambda$ | $\\lambda/(4n)$ |
| **0 or 2 shifts** (even) | 0 or 2 | $2nt = m\\lambda$ | $2nt = (m+\\frac{1}{2})\\lambda$ | $\\lambda/(2n)$ |

---

### Key Equations Summary

| Equation | Purpose |
|----------|---------|
| $\\Delta = 2nt$ | Optical path difference through film |
| $\\lambda_{film} = \\lambda/n$ | Wavelength inside the film |
| $t = \\lambda/(4n)$ | Min thickness (1 shift, constructive) |
| $t = \\lambda/(2n)$ | Min thickness (0 or 2 shifts, constructive) |
| $r_m = \\sqrt{m\\lambda R}$ | Newton's ring dark radii |
| $\\Delta x = \\lambda L/(2d)$ | Air wedge fringe spacing |
| $n_c = \\sqrt{n_{glass}}$ | Ideal anti-reflection coating index |

---

### Phase Change Decision Tree

| Top Medium | Film | Bottom Medium | Top Shift? | Bottom Shift? | Total |
|-----------|------|---------------|-----------|--------------|-------|
| Air (1.0) | Soap (1.33) | Air (1.0) | Yes | No | **1** |
| Air (1.0) | Oil (1.45) | Water (1.33) | Yes | No | **1** |
| Air (1.0) | Oil (1.40) | Glass (1.52) | Yes | Yes | **2** |
| Air (1.0) | MgF₂ (1.38) | Glass (1.52) | Yes | Yes | **2** |
| Glass (1.5) | Air (1.0) | Glass (1.5) | No | Yes | **1** |
| Glass (1.5) | Film ($n > 1.5$) | Glass (1.5) | Yes | No | **1** |
| Water (1.33) | Oil (1.45) | Glass (1.52) | Yes | Yes | **2** |

> 🔑 **Rule:** Low→high = shift. High→low = no shift. Just compare adjacent $n$ values at each surface.`
    },
    {
      id: 'thinfilminterference-p7-tips',
      type: 'text' as const,
      content: `### AP Exam Tips — Don't Lose Points!

| Common Error | How to Avoid It |
|-------------|----------------|
| Not identifying all three media | Always write: Medium 1 → Film → Medium 2 with $n$ values |
| Forgetting to count phase changes | Do this BEFORE choosing an equation |
| Using $m = 0$ for even-shift constructive ($2nt = m\\lambda$) | $m = 0$ gives $t = 0$ → use $m = 1$ |
| Confusing reflected vs. transmitted colors | They're complementary: bright in reflection = dark in transmission |
| Thinking thicker films give brighter colors | Minimum thickness gives purest single-wavelength reflection |
| Ignoring angle dependence | Normal incidence assumed unless stated otherwise |

---

### Connecting Thin Films to Other Wave Topics

| Concept | Connection |
|---------|-----------|
| **Single-slit diffraction** | Both involve path differences causing interference |
| **Double-slit interference** | $d\\sin\\theta = m\\lambda$ vs. $2nt = m\\lambda$ — same principle, different geometry |
| **Standing waves** | Thin film conditions resemble resonance conditions |
| **Polarization** | Brewster's angle: reflected light is polarized |
| **Snell's law** | Refraction determines $\\lambda_{film} = \\lambda/n$ |

---

### Quick Problem Categories

| Problem Type | What You Find | Key Equation |
|-------------|---------------|-------------|
| "Minimum thickness for bright/dark" | $t$ | Use appropriate condition with $m = 0$ or $m = 1$ |
| "What color appears?" | $\\lambda$ | Solve $\\lambda = 2nt/(m + 1/2)$ or $2nt/m$, find visible $\\lambda$ |
| "Number of phase changes?" | Count | Compare $n$ values at each surface |
| "Newton's ring radius?" | $r_m$ | $r_m = \\sqrt{m\\lambda R}$ |
| "Wedge fringe spacing?" | $\\Delta x$ | $\\Delta x = \\lambda L/(2d)$ |
| "Anti-reflection thickness?" | $t$ | $t = \\lambda/(4n_c)$ with 2 phase changes |

---

### Visible Spectrum Reference

| Color | Wavelength Range |
|-------|-----------------|
| Violet | 380–450 nm |
| Blue | 450–495 nm |
| Green | 495–570 nm |
| Yellow | 570–590 nm |
| Orange | 590–620 nm |
| Red | 620–750 nm |

If your calculated $\\lambda$ falls outside 380–750 nm, it's not visible!`
    },
    {
      id: 'thinfilminterference-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A film ($n = 1.6$) is placed between glass ($n = 1.5$) and air. Light enters from the air side. Phase changes?',
            options: ['1 (air→film shifts, film→glass does not)', '2', '0', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Air ($1.0$) → Film ($1.6$): low→high → shift. Film ($1.6$) → Glass ($1.5$): high→low → no shift. Total: 1.'
          },
          {
            question: 'A 200 nm film ($n = 1.5$, one phase change). Which visible wavelength is constructively reflected?',
            options: ['400 nm ($m = 1$)', '600 nm ($m = 0$)', '1200 nm ($m = 0$)', '200 nm ($m = 2$)'],
            correctAnswer: 0,
            explanation: '$\\lambda = 2nt/(m+1/2)$. $2nt = 600$. $m = 0$: $\\lambda = 1200$ nm (IR). $m = 1$: $\\lambda = 600/1.5 = 400$ nm (violet — visible!). $m = 2$: $\\lambda = 240$ nm (UV).'
          },
          {
            question: 'Phase change at reflection is analogous to:',
            options: ['A wave on a string reflecting from a fixed end', 'A wave on a string reflecting from a free end', 'A wave diffracting through a slit', 'A standing wave node'],
            correctAnswer: 0,
            explanation: 'Low→high $n$ reflection (phase change) is like a mechanical wave reflecting from a rigid/fixed boundary — the wave inverts.'
          },
          {
            question: 'Which correctly ranks minimum constructive thickness from thinnest to thickest for the same $\\lambda$ and $n$?',
            options: ['1 shift ($\\lambda/4n$) < 2 shifts ($\\lambda/2n$)', '2 shifts < 1 shift', 'They are equal', 'Depends on the wavelength'],
            correctAnswer: 0,
            explanation: 'With 1 shift: $t_{min} = \\lambda/(4n)$. With 2 shifts: $t_{min} = \\lambda/(2n)$. Quarter-wave is thinner than half-wave.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

**1)** Soap film ($n = 1.33$) min thickness to appear red ($\\lambda = 650$ nm) in reflected light? (1 phase change, in nm, round to 1 decimal place)

**2)** At this thickness, what wavelength is destructively reflected? Use $2nt = m\\lambda$, $m = 1$. (in nm, round to 1 decimal place)

**3)** Oil ($n = 1.40$) on glass ($n = 1.50$): how many phase changes? (number)

**4)** For that oil-on-glass setup, minimum thickness for constructive reflection of $\\lambda = 560$ nm? (in nm)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['122.2', '325.1', '2', '200'],
        hint1: '$t = \\lambda/(4n) = 650/(4 \\times 1.33)$',
        hint2: '$\\lambda = 2nt/m = 2(1.33)(122.2)/1$',
        hint3: 'Air→oil: low→high. Oil→glass: low→high.',
        hint4: 'Even shifts → $2nt = m\\lambda$, min at $m = 1$: $t = \\lambda/(2n)$',
        explanation: '1) $650/5.32 = 122.2$ nm. 2) $2 \\times 1.33 \\times 122.2 = 325.1$ nm (UV — not visible). 3) Both surfaces: low→high → 2 shifts. 4) $t = 560/(2 \\times 1.40) = 200$ nm.'
      }
    }
  ]
};