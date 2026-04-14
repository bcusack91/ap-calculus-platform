export const physics2ThinFilmPart3Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p3-intro',
      type: 'text' as const,
      content: `# 🌑 Destructive Interference & Anti-Reflection Coatings

**Part 3 of 7 — Eliminating Reflections**

---

### Destructive Interference Conditions

To make reflected light **disappear** at a specific wavelength:

| Phase Changes | Destructive Condition | Min Thickness |
|--------------|----------------------|---------------|
| **1** (odd) | $2nt = m\\lambda$ ($m = 1, 2, \\ldots$) | $\\lambda/(2n)$ |
| **0 or 2** (even) | $2nt = (m + \\frac{1}{2})\\lambda$ | $\\lambda/(4n)$ |

---

### Anti-Reflection Coatings — The Most Important Application

Camera lenses, eyeglasses, and solar panels use thin film coatings to **minimize** unwanted reflections.

**Setup:** Air ($n = 1.0$) → Coating ($n_c$) → Glass ($n_g \\approx 1.5$)

Since $n_{air} < n_c < n_g$: **both** reflections go low→high → **two** phase changes.

With two phase changes, destructive interference requires:

$$2n_ct = \\left(m + \\frac{1}{2}\\right)\\lambda$$

Minimum thickness ($m = 0$):

$$\\boxed{t_{min} = \\frac{\\lambda}{4n_c}}$$

---

### Ideal Coating Refractive Index

For **maximum** cancellation, the two reflected amplitudes should be equal. This requires:

$$\\boxed{n_c = \\sqrt{n_{top} \\cdot n_{bottom}} = \\sqrt{n_{glass}}}$$

(assuming top medium is air with $n = 1$)

| Glass $n$ | Ideal $n_c$ | Real Material | Actual $n_c$ |
|----------|-----------|---------------|-------------|
| 1.50 | 1.22 | MgF₂ | 1.38 |
| 1.52 | 1.23 | MgF₂ | 1.38 |
| 1.70 | 1.30 | MgF₂ or SiO₂ | ~1.38–1.46 |

> ⚠️ MgF₂ ($n = 1.38$) isn't ideal but is widely used because it's durable, hard, and close enough. Perfect cancellation isn't achieved, but reflection drops from ~4% to ~1%.

---

### The Purple Tint of Coated Lenses

Anti-reflection coatings are optimized for **green light** (~550 nm, where the eye is most sensitive). Red and blue wavelengths don't satisfy the destructive condition as well, so they partially reflect → purple/violet tint.`
    },
    {
      id: 'thinfilminterference-p3-multicoat',
      type: 'text' as const,
      content: `### Multi-Layer Coatings

Single-layer coatings only cancel one wavelength. **Multi-layer** coatings stack films of alternating high and low $n$ to cancel a broader range:

| Coating Type | Layers | Residual Reflection |
|-------------|--------|-------------------|
| Uncoated glass | 0 | ~4% per surface |
| Single-layer (MgF₂) | 1 | ~1.2% |
| Double-layer | 2 | ~0.5% |
| Multi-layer (broadband) | 4–7 | <0.2% |

High-end camera lenses may have 7+ layers per surface and 10+ surfaces → without coatings, they'd lose 30–40% of light to reflections!

---

### Design Summary Table

| Goal | Phase Changes | Condition for Goal | Min $t$ |
|------|--------------|-------------------|---------|
| Bright reflection (1 shift) | 1 | $2nt = (m+1/2)\\lambda$ | $\\lambda/(4n)$ |
| Dark reflection (1 shift) | 1 | $2nt = m\\lambda$ | $\\lambda/(2n)$ |
| Bright reflection (2 shifts) | 2 | $2nt = m\\lambda$ | $\\lambda/(2n)$ |
| Dark reflection (2 shifts) | 2 | $2nt = (m+1/2)\\lambda$ | $\\lambda/(4n)$ |

> 🔑 **Notice the pattern:** Odd shifts and even shifts swap the constructive/destructive conditions. The condition with the half-integer always gives the thinner minimum.

---

### Transmitted vs. Reflected Light

By **energy conservation**, what is not reflected is transmitted (ignoring absorption):

| Reflected | Transmitted |
|-----------|-------------|
| Constructive (bright) | Destructive (dark) |
| Destructive (dark) | Constructive (bright) |

An anti-reflection coating makes reflected light dark → more light passes through → better camera images, more efficient solar panels.`
    },
    {
      id: 'thinfilminterference-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An anti-reflection coating on glass has how many phase changes?',
            options: ['2', '1', '0', 'Depends on coating thickness'],
            correctAnswer: 0,
            explanation: 'Air → coating (low→high): shift. Coating → glass (low→high): shift. Total: 2 phase changes.'
          },
          {
            question: 'MgF₂ ($n = 1.38$) coating optimized for $\\lambda = 550$ nm. Minimum thickness:',
            options: ['99.6 nm', '199.3 nm', '275 nm', '137.5 nm'],
            correctAnswer: 0,
            explanation: '$t = \\lambda/(4n) = 550/(4 \\times 1.38) = 550/5.52 = 99.6$ nm.'
          },
          {
            question: 'Why do coated lenses appear slightly purple?',
            options: ['Green is cancelled; red and blue partially reflect', 'The coating absorbs green light', 'Purple light has the shortest path through the coating', 'Manufacturing impurity'],
            correctAnswer: 0,
            explanation: 'The coating is tuned for green destructive interference. Red and blue wavelengths aren\'t perfectly cancelled and partially reflect, mixing to appear purple.'
          },
          {
            question: 'A solar panel with anti-reflection coating transmits more light because:',
            options: ['Destructive interference in reflection means more energy goes into transmission', 'The coating absorbs UV light', 'The coating is very thick', 'The coating has a high $n$'],
            correctAnswer: 0,
            explanation: 'Energy conservation: if less light is reflected (destructive), more must be transmitted. This increases solar cell efficiency.'
          }
        ]
      }
    },
    {
      id: 'thinfilminterference-p3-input',
      type: 'input-boxes' as const,
      content: `
**Anti-Reflection Coating Design** 🧮

Design a coating for glass ($n = 1.52$) optimized for green light ($\\lambda = 520$ nm).

**1)** Ideal coating refractive index ($n_c = \\sqrt{n_{glass}}$)? (round to 2 decimal places)

**2)** Minimum coating thickness using ideal $n_c$? (in nm, round to 1 decimal place)

**3)** If MgF₂ ($n = 1.38$) is used instead, minimum thickness? (in nm, round to 1 decimal place)

**4)** Uncoated glass reflects ~4% per surface. A 6-surface lens system loses approximately what % to reflection without coatings? (round to nearest whole number)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['1.23', '105.7', '94.2', '22'],
        hint1: '$\\sqrt{1.52}$',
        hint2: '$t = 520/(4 \\times 1.23)$',
        hint3: '$t = 520/(4 \\times 1.38)$',
        hint4: 'Transmission per surface ≈ 96%. Total: $0.96^6$. Loss = $1 - 0.96^6$.',
        explanation: '1) $\\sqrt{1.52} = 1.233 \\approx 1.23$. 2) $t = 520/4.92 = 105.7$ nm. 3) $t = 520/5.52 = 94.2$ nm. 4) $(1-0.96^6) = 1 - 0.783 = 0.217 \\approx 22\\%$ lost to reflections!'
      }
    }
  ]
};