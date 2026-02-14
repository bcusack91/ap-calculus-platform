export const physics2InterferencePart5Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id5-intro',
      type: 'text' as const,
      content: `
# 🫧 Thin-Film Interference

**Part 5 of 7 — The Colors of Soap Bubbles and Oil Slicks**

When light reflects off a thin film (like a soap bubble or oil on water), the reflections from the top and bottom surfaces interfere. This produces the beautiful rainbow colors you see in everyday life.
      `
    },
    {
      id: 'id5-phase-shifts',
      type: 'text' as const,
      content: `
## Phase Shifts on Reflection

The key to thin-film problems is understanding **phase shifts**:

### The Rule
- Light reflecting off a surface with a **higher** index of refraction undergoes a **½λ phase shift** (equivalent to a path difference of $\\lambda/2$)
- Light reflecting off a surface with a **lower** index of refraction undergoes **no phase shift**

### Example: Soap Film in Air

A soap film ($n_{\\text{film}} > n_{\\text{air}}$) in air:

| Reflection | Interface | Phase Shift? |
|-----------|-----------|-------------|
| Ray 1 (top surface) | air → film (low $n$ → high $n$) | **Yes** — ½λ shift |
| Ray 2 (bottom surface) | film → air (high $n$ → low $n$) | **No** shift |

Since only **one** reflection has a phase shift, the two reflected rays start **½λ out of phase**. This changes the conditions!

### Wavelength in the Film

Inside the film, light has a shorter wavelength:

$$\\lambda_{\\text{film}} = \\frac{\\lambda}{n}$$

The extra path traveled by ray 2 inside the film is $2t$ (down and back up), where $t$ is the film thickness.
      `
    },
    {
      id: 'id5-conditions',
      type: 'text' as const,
      content: `
## Interference Conditions for Thin Films

### Case 1: One Phase Shift (most common — soap bubbles, oil on water)

When there is exactly **one** ½λ phase shift between the two reflections:

**Constructive** (bright reflection):
$$2nt = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, 1, 2, \\ldots)$$

**Destructive** (no reflection):
$$2nt = m\\lambda \\quad (m = 0, 1, 2, \\ldots)$$

### Case 2: Zero or Two Phase Shifts

When both reflections have the same phase shift (both shift, or neither shifts):

**Constructive**:
$$2nt = m\\lambda \\quad (m = 0, 1, 2, \\ldots)$$

**Destructive**:
$$2nt = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, 1, 2, \\ldots)$$

### Memory Aid 🧠

> "**Odd** shifts swap the conditions" — if there's an **odd** number of ½λ phase shifts, constructive and destructive conditions are **swapped** compared to ordinary interference.

### Anti-Reflection Coatings

A thin coating with $n$ between air and glass can eliminate reflection at one wavelength. The coating thickness is chosen so the two reflected rays destructively interfere. Minimum thickness for destructive reflection:

$$t = \\frac{\\lambda}{4n}$$
      `
    },
    {
      id: 'id5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Thin-Film Concept Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Light in air ($n = 1.0$) reflects off a glass surface ($n = 1.5$). The reflected ray experiences:',
            options: [
              'No phase shift',
              'A ½λ phase shift',
              'A full λ phase shift',
              'A phase shift that depends on wavelength'
            ],
            correctAnswer: 1,
            explanation: 'Reflection from a medium with a higher index of refraction always produces a ½λ phase shift. Air ($n = 1.0$) → glass ($n = 1.5$) is low-to-high, so there is a ½λ shift.'
          },
          {
            question: 'A soap film in air has $n = 1.33$. For the two reflected rays, there is:',
            options: [
              'No phase shift for either ray',
              'A ½λ shift for both rays',
              'A ½λ shift for the top reflection only',
              'A ½λ shift for the bottom reflection only'
            ],
            correctAnswer: 2,
            explanation: 'Top: air → film (low → high $n$) → ½λ shift. Bottom: film → air (high → low $n$) → no shift. Only the top reflection has a phase shift.'
          },
          {
            question: 'A thin film appears dark (no reflected light) at a certain wavelength. This means the two reflected rays undergo:',
            options: [
              'Constructive interference',
              'Destructive interference',
              'No interference',
              'Total internal reflection'
            ],
            correctAnswer: 1,
            explanation: 'Dark in reflection means the reflected waves cancel — destructive interference. The light is transmitted through instead of being reflected.'
          }
        ]
      }
    },
    {
      id: 'id5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Thin-Film Calculation Drill** 🧮

A soap film ($n = 1.33$) in air is illuminated with white light.

1) What is the minimum thickness for the film to strongly reflect light of wavelength $\\lambda = 630$ nm? (in nm, round to nearest integer)

2) An oil film ($n = 1.40$) floats on water ($n = 1.33$). What is the minimum thickness for constructive reflection of $\\lambda = 560$ nm? (in nm)

3) An anti-reflection coating ($n = 1.38$) on glass ($n = 1.52$). What minimum thickness eliminates reflection at $\\lambda = 550$ nm? (in nm, round to nearest integer)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['118', '100', '100'],
        hint1: 'Soap in air: one phase shift. Constructive: $2nt = (m + \\frac{1}{2})\\lambda$. Minimum at $m = 0$: $t = \\lambda/(4n)$.',
        hint2: 'Oil on water: top (air → oil, $n$ increases → shift), bottom (oil → water, $n$ decreases → no shift). One shift → constructive: $2nt = (m+\\frac{1}{2})\\lambda$, min at $m = 0$.',
        hint3: 'Coating on glass: air → coating ($n$ up → shift) and coating → glass ($n$ up → shift). Two shifts → destructive: $2nt = (m+\\frac{1}{2})\\lambda$, min at $m = 0$: $t = \\lambda/(4n)$.',
        explanation: '1) One phase shift → constructive: $t = \\lambda/(4n) = 630/(4 \\times 1.33) \\approx 118$ nm. 2) One phase shift → same formula: $t = 560/(4 \\times 1.40) = 100$ nm. 3) Two phase shifts → destructive uses same formula: $t = 550/(4 \\times 1.38) \\approx 100$ nm.'
      }
    },
    {
      id: 'id5-applications-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Thin-Film Applications** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Soap bubbles show colors because of',
            options: ['refraction only', 'thin-film interference', 'diffraction', 'polarization']
          },
          {
            label: 'An anti-reflection coating works by producing',
            options: ['constructive interference of reflected rays', 'destructive interference of reflected rays', 'total internal reflection', 'absorption of light']
          },
          {
            label: 'Oil on water shows colors because different thicknesses reflect different',
            options: ['amplitudes', 'wavelengths constructively', 'polarizations', 'speeds']
          },
          {
            label: 'A very thin soap film (t ≈ 0) in reflected light appears',
            options: ['bright (all colors)', 'dark (no reflection)', 'red only', 'blue only']
          }
        ],
        correctAnswers: ['thin-film interference', 'destructive interference of reflected rays', 'wavelengths constructively', 'dark (no reflection)'],
        hint1: 'The colors come from path differences between reflections off the top and bottom surfaces.',
        hint2: 'Anti-reflection coatings cancel reflected light so more light passes through.',
        hint3: 'Different film thicknesses satisfy the constructive condition for different wavelengths.',
        explanation: 'Soap bubbles → thin-film interference. Anti-reflection → destructive interference of reflections. Oil colors → thickness-dependent wavelength selection. Very thin film ($t \\to 0$) with one phase shift: the only path difference is the ½λ shift → destructive → dark.'
      }
    },
    {
      id: 'id5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Thin-Film Interference** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A thin film with $n = 1.50$ in air has thickness $t = 100$ nm. For which visible wavelength does it most strongly reflect? (Hint: one phase shift)',
            options: [
              '400 nm',
              '500 nm',
              '600 nm',
              '700 nm'
            ],
            correctAnswer: 2,
            explanation: 'One phase shift → constructive: $2nt = (m + \\frac{1}{2})\\lambda \\Rightarrow \\lambda = 2nt/(m+\\frac{1}{2})$. For $m = 0$: $\\lambda = 2(1.50)(100)/0.5 = 600$ nm — orange light, visible! For $m = 1$: $\\lambda = 300/1.5 = 200$ nm (UV). So the film most strongly reflects 600 nm light.'
          },
          {
            question: 'When a soap bubble gets very thin just before popping, it appears:',
            options: [
              'Bright white',
              'Bright blue',
              'Dark / black',
              'Bright red'
            ],
            correctAnswer: 2,
            explanation: 'As $t \\to 0$, the only phase difference is the ½λ shift from the top surface. This makes the two reflections nearly perfectly out of phase → destructive interference for all wavelengths → the film appears dark/black.'
          }
        ]
      }
    }
  ]
}
