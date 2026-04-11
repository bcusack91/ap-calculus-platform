export const chemMixturesSeparationsPart4Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx4-intro',
      type: 'text' as const,
      content: `# 🌈 Spectroscopy Introduction

**Part 4 of 7 — Beer\'s Law and Absorbance**

---

### Topics in This Part

| Section |
|---------|
| 🔧 How Solutions Absorb Light |
| Color Wheel |
| Key Concept: Absorbance |
| Relationship: $A$ and $T$ |
| 📏 Beer\'s Law (Beer-Lambert Law) |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'mx4-light-absorption',
      type: 'text' as const,
      content: `
## 🔧 How Solutions Absorb Light

When white light passes through a colored solution:
- The solution **absorbs** certain wavelengths
- The remaining wavelengths pass through (**transmitted light**)
- The color you see is the **complementary color** of what was absorbed


---

### Color Wheel

| Absorbed Color | Wavelength (nm) | Solution Appears |
|---------------|-----------------|-----------------|
| Violet | 380–450 | Yellow-green |
| Blue | 450–490 | Orange |
| Green | 490–570 | Red/magenta |
| Yellow | 570–590 | Violet |
| Orange | 590–620 | Blue |
| Red | 620–750 | Green/cyan |


---

### Key Concept: Absorbance

**Absorbance** ($A$) measures how much light a solution absorbs at a particular wavelength:

$$\\boxed{A = -\\log\\left(\\frac{I}{I_0}\\right) = -\\log(T)}$$

where:
- $I_0$ = intensity of incident light
- $I$ = intensity of transmitted light
- $T = I/I_0$ = transmittance (fraction of light passing through)


---

### Relationship: $A$ and $T$

- If $T = 1.0$ (100% transmitted) → $A = 0$ (no absorption)
- If $T = 0.10$ (10% transmitted) → $A = 1.0$
- If $T = 0.01$ (1% transmitted) → $A = 2.0$
      `
    },
    {
      id: 'mx4-beers-law',
      type: 'text' as const,
      content: `
## 📏 Beer\'s Law (Beer-Lambert Law)

$$\\boxed{A = \\varepsilon bc}$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| $A$ | Absorbance | unitless |
| $\\varepsilon$ | Molar absorptivity (extinction coefficient) | L/(mol·cm) |
| $b$ | Path length (width of cuvette) | cm |
| $c$ | Concentration of absorbing species | mol/L (M) |


---

### Key Takeaways

- Absorbance is **directly proportional** to concentration
- If you double the concentration, absorbance doubles
- $\\varepsilon$ is a constant for a given substance at a given wavelength
- Standard cuvettes have $b = 1.00$ cm, so often $A = \\varepsilon c$

> 🔑 **Key Concept:** Beer\'s Law is **linear** — doubling concentration doubles absorbance. This makes calibration curves powerful analytical tools.


---

### Practical Use: Calibration Curves

1. Prepare solutions of **known concentrations**
2. Measure absorbance of each at a chosen wavelength ($\\lambda_{\\text{max}}$)
3. Plot $A$ vs. $c$ → should give a **straight line** through the origin
4. Slope = $\\varepsilon b$
5. Measure absorbance of **unknown** → read concentration from the line


---

### Choosing $\\lambda_{\\text{max}}$

Always measure at the wavelength of **maximum absorbance** ($\\lambda_{\\text{max}}$) because:
- Greatest sensitivity (largest change in $A$ per change in $c$)
- Beer\'s Law is most linear at $\\lambda_{\\text{max}}$

> ⚠️ **Warning:** Measuring at the wrong wavelength reduces sensitivity and can cause non-linear Beer\'s Law behavior, leading to inaccurate concentrations.
      `
    },
    {
      id: 'mx4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Beer\'s Law Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution that appears blue absorbs light most strongly in which color range?',
            options: [
              'Blue',
              'Green',
              'Orange',
              'Violet'
            ],
            correctAnswer: 2,
            explanation: 'A blue solution absorbs the complementary color, which is orange (~590–620 nm). The blue wavelengths pass through and reach your eye.'
          },
          {
            question: 'According to Beer\'s Law, if the concentration of a solution is tripled while path length stays constant, the absorbance will:',
            options: [
              'Triple',
              'Decrease by one-third',
              'Stay the same',
              'Increase by a factor of 9'
            ],
            correctAnswer: 0,
            explanation: '$A = \\varepsilon bc$. Absorbance is directly proportional to concentration. If $c$ triples, $A$ triples.'
          },
          {
            question: 'Why do we measure absorbance at λ_max rather than at another wavelength?',
            options: [
              'It gives the lowest absorbance reading',
              'It provides the greatest sensitivity and best linearity',
              'It is the only wavelength the spectrophotometer can use',
              'It eliminates the need for a calibration curve'
            ],
            correctAnswer: 1,
            explanation: 'At $\\lambda_{\\text{max}}$, the change in absorbance per unit change in concentration is greatest (maximum sensitivity), and Beer\'s Law deviations are minimized.'
          }
        ]
      }
    },
    {
      id: 'mx4-beers-law-calcs',
      type: 'input-boxes' as const,
      content: `
**Beer\'s Law Calculations** 🧮

**1)** A solution has transmittance $T = 0.25$. What is the absorbance? (to 3 significant figures)

**2)** A solution with concentration 0.0200 M has absorbance 0.440 in a 1.00 cm cuvette. What is $\\varepsilon$? (in L/(mol·cm), to the nearest whole number)

**3)** Using the same $\\varepsilon$ and path length from problem 2, what concentration gives an absorbance of 0.880? (in M, to 3 significant figures)
      `,
      exercise: {
        inputs: [
          {
            label: 'Absorbance from T = 0.25',
            correctAnswer: '0.60',
            explanation: '$A = -\\log(T) = -\\log(0.25) = -(-0.602) = 0.602 \\approx 0.60$.'
          },
          {
            label: 'Molar absorptivity ε',
            correctAnswer: '22',
            explanation: '$\\varepsilon = A/(bc) = 0.440/((1.00)(0.0200)) = 0.440/0.0200 = 22$ L/(mol·cm).'
          },
          {
            label: 'Concentration for A = 0.880 (M)',
            correctAnswer: '0.0400',
            explanation: '$c = A/(\\varepsilon b) = 0.880/((22)(1.00)) = 0.0400$ M. Doubling the concentration doubled the absorbance, as Beer\'s Law predicts.'
          }
        ]
      }
    },
    {
      id: 'mx4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Spectroscopy Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx4-dd1',
            label: 'According to Beer\'s Law ($A = \\varepsilon bc$), increasing concentration',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 0,
            explanation: 'According to Beer\'s Law ($A = \\varepsilon bc$), increasing concentration increases absorbance proportionally.'
          },
          {
            id: 'mx4-dd2',
            label: 'Transmittance $T = 10^{-A}$. As absorbance increases, transmittance',
            options: ['increases', 'decreases', 'stays the same'],
            correctIndex: 1,
            explanation: 'Transmittance $T = 10^{-A}$. As absorbance increases, transmittance decreases. More light is absorbed, less is transmitted.'
          },
          {
            id: 'mx4-dd3',
            label: 'A plot of $A$ vs. $c$ (Beer\'s Law plot) gives',
            options: ['a straight line through the origin', 'a curved line', 'a horizontal line'],
            correctIndex: 0,
            explanation: 'A plot of $A$ vs. $c$ (Beer\'s Law plot) gives a straight line through the origin with slope $= \\varepsilon b$, provided Beer\'s Law is obeyed.'
          },
          {
            id: 'mx4-dd4',
            label: '$\\lambda_{\\text{max}}$ is the _______',
            options: ['wavelength of maximum absorbance', 'wavelength of minimum absorbance', 'any convenient wavelength'],
            correctIndex: 0,
            explanation: '$\\lambda_{\\text{max}}$ is the wavelength of maximum absorbance. It provides the best sensitivity and linearity for quantitative analysis.'
          }
        ]
      }
    },
    {
      id: 'mx4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Spectroscopy** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A calibration curve has a slope of 15.0 L/(mol·cm) using 1.00 cm cuvettes. An unknown solution gives A = 0.750. Its concentration is:',
            options: [
              '0.0200 M',
              '0.0500 M',
              '0.100 M',
              '0.750 M'
            ],
            correctAnswer: 1,
            explanation: 'Slope $= \\varepsilon b = 15.0$. $c = A/(\\varepsilon b) = 0.750/15.0 = 0.0500$ M.'
          },
          {
            question: 'A solution has an absorbance of 1.0. What percentage of the incident light is transmitted?',
            options: [
              '1%',
              '10%',
              '50%',
              '90%'
            ],
            correctAnswer: 1,
            explanation: '$T = 10^{-A} = 10^{-1.0} = 0.10 = 10\\%$. An absorbance of 1.0 means 90% of the light is absorbed and only 10% passes through.'
          }
        ]
      }
    }
  ]
}
