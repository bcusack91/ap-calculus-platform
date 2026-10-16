export const physics2InterferencePart7Data = {
  topicSlug: 'interference-diffraction',
  sections: [
    {
      id: 'id7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Mastering Interference and Diffraction for the AP Exam**

Let's bring everything together: compare the key phenomena, review common AP mistakes, and practice the types of questions you'll see on the exam.
      `
    },
    {
      id: 'id7-comparison',
      type: 'text' as const,
      content: `
## Interference vs Diffraction — Side by Side

### The Big Picture

| Feature | Double-Slit Interference | Single-Slit Diffraction | Diffraction Grating |
|---------|--------------------------|------------------------|---------------------|
| **Formula** | $d\\sin\\theta = m\\lambda$ (maxima) | $a\\sin\\theta = m\\lambda$ (minima) | $d\\sin\\theta = m\\lambda$ (maxima) |
| **Central max** | Same width as others | **Twice** as wide | Same as others |
| **Fringe brightness** | All roughly equal | Rapidly decreasing | All roughly equal, very sharp |
| **Number of slits** | 2 | 1 | Thousands |
| **Sharpness** | Moderate | Broad | Very sharp |

### Key Formulas to Memorize

| Quantity | Formula |
|----------|---------|
| Double-slit bright fringes | $d\\sin\\theta = m\\lambda$ |
| Double-slit dark fringes | $d\\sin\\theta = (m + \\frac{1}{2})\\lambda$ |
| Fringe spacing | $\\Delta y = \\lambda L / d$ |
| Single-slit minima | $a\\sin\\theta = m\\lambda$ |
| Central max width (single slit) | $w = 2\\lambda L / a$ |
| Grating maxima | $d\\sin\\theta = m\\lambda$, $d = 1/N$ |
| Double-slit pattern | Fringes inside the single-slit envelope; $m = d/a$ missing |
| Thin film (one phase shift, constructive) | $2nt = (m + \\frac{1}{2})\\lambda$ |
| Thin film (one phase shift, destructive) | $2nt = m\\lambda$ |
| Anti-reflection coating (minimum) | $t = \\lambda/(4n)$ |
      `
    },
    {
      id: 'id7-common-mistakes',
      type: 'text' as const,
      content: `
## ⚠️ Common AP Mistakes

### Mistake 1: Mixing Up Maxima and Minima Formulas
- Double slit: $d\\sin\\theta = m\\lambda$ gives **bright** fringes
- Single slit: $a\\sin\\theta = m\\lambda$ gives **dark** fringes
- They look identical but mean opposite things!

### Mistake 2: Forgetting Phase Shifts in Thin Films
- Always check **both** surfaces for phase shifts
- Low $n$ → high $n$ reflection: ½λ shift
- High $n$ → low $n$ reflection: no shift
- Count the total shifts, then choose the right condition

### Mistake 3: Central Maximum Width
- Single slit: central max is **2×** the width of other maxima
- Double slit: all fringes are the same width

### Mistake 4: Effect of Changing Variables
- Increasing wavelength → **wider** fringes (for both single and double slit)
- Increasing slit separation $d$ → **narrower** fringes
- Increasing slit width $a$ → **narrower** central max (less diffraction)
- Students often get the direction wrong!

### Mistake 5: Using the Small-Angle Shortcut Where It Fails
- $y = m\\lambda L/d$ relies on $\\sin\\theta \\approx \\tan\\theta$, which holds only for small angles (under about 10°)
- Grating maxima are usually at **large** angles: find $\\theta$ from $d\\sin\\theta = m\\lambda$, then use $y = L\\tan\\theta$ if you need a position
- Always check the angle before using the shortcut
      `
    },
    {
      id: 'id7-sorting-quiz',
      type: 'dropdown-select' as const,
      content: `
**Formula Sorting Challenge** 🧠

Match each situation to the correct formula or result:
      `,
      exercise: {
        dropdowns: [
          {
            label: 'dsinθ = mλ in a double-slit experiment gives',
            options: ['positions of bright fringes', 'positions of dark fringes', 'positions of minima', 'width of central max']
          },
          {
            label: 'asinθ = mλ in a single-slit experiment gives',
            options: ['positions of bright fringes', 'positions of dark fringes', 'grating maxima', 'fringe spacing']
          },
          {
            label: 'The brightness of double-slit fringes rises and falls across the screen because of',
            options: ['the single-slit envelope', 'thin-film interference', 'a loss of coherence', 'polarization']
          },
          {
            label: '2nt = (m+½)λ with one phase shift gives',
            options: ['destructive thin-film interference', 'constructive thin-film interference', 'single-slit minima', 'grating maxima']
          },
          {
            label: 't = λ/(4n) describes',
            options: ['single-slit minima', 'the thinnest anti-reflection coating', 'grating maxima', 'fringe spacing']
          }
        ],
        correctAnswers: [
          'positions of bright fringes',
          'positions of dark fringes',
          'the single-slit envelope',
          'constructive thin-film interference',
          'the thinnest anti-reflection coating'
        ],
        hint1: 'Double-slit $d\\sin\\theta = m\\lambda$: constructive → bright maxima.',
        hint2: 'Single-slit $a\\sin\\theta = m\\lambda$: these are the minima, not maxima.',
        hint3: 'Each slit has a width, so each slit diffracts. A quarter-wave coating cancels reflected light.',
        explanation: 'Double-slit formula → bright fringes. Single-slit formula → dark minima. Fringe brightness follows the single-slit envelope. 2nt = (m+½)λ with one shift → constructive. t = λ/(4n) → minimum anti-reflection coating thickness.'
      }
    },
    {
      id: 'id7-ap-frq-preview',
      type: 'input-boxes' as const,
      content: `
**AP FRQ Practice** 📝

A student performs a double-slit experiment with $\\lambda = 632.8$ nm (He-Ne laser), slit separation $d = 0.30$ mm, and screen distance $L = 1.5$ m.

1) Calculate the fringe spacing (in mm, to 3 significant figures)

2) The student then covers one slit. The central maximum width of the resulting single-slit pattern is 12.0 mm. What is the slit width $a$? (in mm, to 3 significant figures)

3) A diffraction grating with 300 lines/mm replaces the double slit. At what angle does the 2nd-order maximum appear? (in degrees, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.2', '0.16', '22.3'],
        hint1: '$\\Delta y = \\lambda L / d$.',
        hint2: 'Central max width $= 2\\lambda L / a \\Rightarrow a = 2\\lambda L / w$.',
        hint3: '$d = 1/300$ mm. $\\sin\\theta = m\\lambda / d = 2(632.8 \\times 10^{-9})/(1/300 \\times 10^{-3})$.',
        explanation: '1) $\\Delta y = (632.8 \\times 10^{-9})(1.5)/(0.30 \\times 10^{-3}) = 3.16 \\times 10^{-3}$ m $\\approx 3.2$ mm. 2) $a = 2\\lambda L / w = 2(632.8 \\times 10^{-9})(1.5)/(12.0 \\times 10^{-3}) = 1.58 \\times 10^{-4}$ m $= 0.16$ mm. 3) $d = 3.33 \\times 10^{-6}$ m. $\\sin\\theta = 2(632.8 \\times 10^{-9})/(3.33 \\times 10^{-6}) = 0.380$. $\\theta = 22.3°$.'
      }
    },
    {
      id: 'id7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'In a double-slit experiment, the pattern observed on the screen is actually a combination of:',
            options: [
              'Interference between the slits alone, with equal fringes',
              'Single-slit diffraction alone, since the slits have width',
              'Two-slit fringes inside a single-slit diffraction envelope',
              'Two separate single-slit patterns with no fringes'
            ],
            correctAnswer: 2,
            explanation: 'Each slit has finite width, so each produces a single-slit diffraction pattern. The double-slit interference fringes appear **within** the single-slit diffraction envelope. Some interference maxima may be "missing" if they fall at a diffraction minimum.'
          },
          {
            question: 'A soap film ($n = 1.33$) has thickness $t = 300$ nm. Which wavelength is most strongly reflected? (one phase shift)',
            options: [
              '399 nm (violet)',
              '532 nm (green)',
              '798 nm (infrared)',
              '266 nm (ultraviolet)'
            ],
            correctAnswer: 1,
            explanation: 'One phase shift → constructive: $\\lambda = 2nt/(m + \\frac{1}{2})$. For $m = 0$: $\\lambda = 2(1.33)(300)/0.5 = 1596$ nm (IR). For $m = 1$: $\\lambda = 798/1.5 = 532$ nm (green, visible!). For $m = 2$: $\\lambda = 798/2.5 = 319$ nm (UV).'
          },
          {
            question: 'A grating with 1000 lines/mm is used with white light. The 2nd-order spectrum for red (700 nm) overlaps with the 3rd-order spectrum for which wavelength?',
            options: [
              '350 nm',
              '467 nm',
              '525 nm',
              '1050 nm'
            ],
            correctAnswer: 1,
            explanation: 'Overlap occurs when $m_1 \\lambda_1 = m_2 \\lambda_2$. So $2(700) = 3\\lambda_2 \\Rightarrow \\lambda_2 = 1400/3 = 467$ nm (blue-violet light).'
          },
          {
            question: 'A double-slit apparatus is moved from air into water ($n = 1.33$) with the same laser. The spacing between bright fringes on the screen:',
            options: [
              'Increases, since light travels slower in water',
              'Decreases, since the wavelength in water is shorter',
              'Stays the same, since the frequency does not change',
              'Increases, since water makes the slits look narrower'
            ],
            correctAnswer: 1,
            explanation: 'In water the wavelength becomes $\\lambda/n$, and $\\Delta y = \\lambda L/d$, so the fringes move closer together. The frequency is indeed unchanged, but the spacing depends on wavelength, and the slit dimensions do not change.'
          }
        ]
      }
    },
    {
      id: 'id7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which phenomenon is responsible for the colored patterns seen when looking at a CD or DVD surface?',
            options: [
              'Thin-film interference in the plastic layer',
              'Diffraction from the regularly spaced tracks',
              'Polarization of light reflected at an angle',
              'Dispersion as light refracts in the plastic'
            ],
            correctAnswer: 1,
            explanation: 'The closely spaced tracks on a CD/DVD act like a diffraction grating. Different wavelengths diffract at different angles, producing rainbow-like colors. The track spacing is about 1.6 μm (CD) or 0.74 μm (DVD).'
          },
          {
            question: 'A student observes that the 3rd bright fringe of a double-slit pattern is missing. The most likely explanation is:',
            options: [
              'The light source is too dim for that order',
              'It lands on a single-slit diffraction minimum',
              'The slits are too far apart for that order',
              'The wavelength is too short for that order'
            ],
            correctAnswer: 1,
            explanation: 'A "missing order" occurs when a double-slit interference maximum falls exactly at a single-slit diffraction minimum. This happens when $d/a$ is an integer. If $d/a = 3$, the 3rd, 6th, 9th, etc. interference maxima are suppressed. Wider slit spacing or shorter wavelength would allow more orders, not fewer, and a dim source dims every fringe equally.'
          }
        ]
      }
    }
  ]
}
