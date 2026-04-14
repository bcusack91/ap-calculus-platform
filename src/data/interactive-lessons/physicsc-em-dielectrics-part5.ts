export const physCEMDielecPart5Data = {
  topicSlug: "dielectrics-physics-c-em",
  sections: [
    {
      id: 'dielec5-intro',
      type: 'text' as const,
      content: `# Dielectrics — Part 5: Dielectric Breakdown

Every dielectric material has a maximum electric field it can withstand. Beyond this **dielectric strength** $E_{\\max}$, the material ionizes and becomes conducting—this is **dielectric breakdown**.

### Dielectric strengths (approximate)

| Material | $E_{\\max}$ (V/m) | $\\kappa$ |
|:---|:---:|:---:|
| Air | $3 \\times 10^6$ | $1.0006$ |
| Paper | $16 \\times 10^6$ | $3.7$ |
| Glass | $14 \\times 10^6$ | $5{-}10$ |
| Mica | $200 \\times 10^6$ | $5.4$ |
| Teflon | $60 \\times 10^6$ | $2.1$ |

### Maximum voltage across a capacitor

$$V_{\\max} = E_{\\max} \\cdot d$$

Higher $\\kappa$ materials often have higher $E_{\\max}$, giving a double benefit: more capacitance **and** higher voltage rating.`
    },
    {
      id: 'dielec5-mcq1',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor has plate separation $d = 0.1$ mm and uses a dielectric with $E_{\\max} = 60 \\times 10^6$ V/m. What is the maximum voltage?',
      options: ['$6000$ V', '$600$ V', '$60$ V', '$60{,}000$ V'],
      correctAnswer: 0,
      explanation: '$V_{\\max} = E_{\\max} \\cdot d = 60 \\times 10^6 \\times 0.1 \\times 10^{-3} = 6000$ V.'
    },
    {
      id: 'dielec5-energy',
      type: 'text' as const,
      content: `## Maximum Energy Storage

The maximum energy a capacitor can store is limited by dielectric breakdown:

$$U_{\\max} = \\frac{1}{2}CV_{\\max}^2 = \\frac{1}{2}\\left(\\frac{\\kappa\\varepsilon_0 A}{d}\\right)(E_{\\max}\\cdot d)^2 = \\frac{1}{2}\\kappa\\varepsilon_0 E_{\\max}^2 \\cdot (Ad)$$

Since $Ad$ is the volume of the dielectric:

$$U_{\\max} = \\frac{1}{2}\\kappa\\varepsilon_0 E_{\\max}^2 \\cdot \\text{Volume}$$

This means the **maximum energy density** is:

$$u_{\\max} = \\frac{1}{2}\\kappa\\varepsilon_0 E_{\\max}^2$$

Choosing a dielectric that maximizes $\\kappa E_{\\max}^2$ gives the best energy storage per unit volume.`
    },
    {
      id: 'dielec5-mcq2',
      type: 'mcq' as const,
      question: 'Which material stores the most energy per unit volume before breakdown? (Use values: mica $\\kappa = 5.4$, $E_{\\max} = 200$ MV/m; teflon $\\kappa = 2.1$, $E_{\\max} = 60$ MV/m.)',
      options: [
        'Mica, because $\\kappa E_{\\max}^2$ is much larger',
        'Teflon, because it has lower $\\kappa$',
        'They are equal',
        'Cannot determine without plate area'
      ],
      correctAnswer: 0,
      explanation: 'Mica: $\\kappa E_{\\max}^2 = 5.4 \\times (200)^2 = 216{,}000$. Teflon: $2.1 \\times (60)^2 = 7{,}560$. Mica wins by a factor of $\\sim 28$.'
    },
    {
      id: 'dielec5-breakdown-physics',
      type: 'text' as const,
      content: `## Physics of Breakdown

At the molecular level, dielectric breakdown occurs when:

1. The electric field accelerates free electrons (always a few present) fast enough to ionize nearby molecules.
2. Each ionization creates more free electrons → **avalanche** (Townsend breakdown).
3. A conducting channel (spark/arc) forms through the material.

### Factors affecting breakdown

- **Temperature:** Higher $T$ → lower $E_{\\max}$ (more thermal ionization)
- **Thickness:** Very thin films can have higher effective $E_{\\max}$ (fewer defects)
- **Humidity/impurities:** Contaminants lower $E_{\\max}$
- **Time:** Prolonged stress can cause gradual degradation (**aging**)

### Lightning

Lightning is dielectric breakdown of air. When $E > 3 \\times 10^6$ V/m, air ionizes and a conducting channel forms between cloud and ground. The charge transfer is typically $\\sim 5$ C over $\\sim 30$ μs.`
    },
    {
      id: 'dielec5-mcq3',
      type: 'mcq' as const,
      question: 'A capacitor rated at $V_{\\max} = 100$ V has plate separation $d = 0.05$ mm. What is the dielectric strength of the material used?',
      options: [
        '$2 \\times 10^6$ V/m',
        '$2 \\times 10^3$ V/m',
        '$5 \\times 10^7$ V/m',
        '$2 \\times 10^9$ V/m'
      ],
      correctAnswer: 0,
      explanation: '$E_{\\max} = V_{\\max}/d = 100/(0.05 \\times 10^{-3}) = 100/5 \\times 10^{-5} = 2 \\times 10^6$ V/m.'
    },
    {
      id: 'dielec5-mcq4',
      type: 'mcq' as const,
      question: 'To double the maximum voltage rating of a parallel-plate capacitor without changing the dielectric material or plate area, you should:',
      options: [
        'Double the plate separation $d$',
        'Double the plate area $A$',
        'Use a material with double $\\kappa$',
        'Halve the plate separation $d$'
      ],
      correctAnswer: 0,
      explanation: '$V_{\\max} = E_{\\max} d$. Since $E_{\\max}$ is a material property, doubling $d$ doubles $V_{\\max}$. (This also halves $C$, but the question asks only about voltage rating.)'
    },
    {
      id: 'dielec5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Formula |
|:---|:---:|
| Maximum voltage | $V_{\\max} = E_{\\max} d$ |
| Maximum energy | $U_{\\max} = \\frac{1}{2}\\kappa\\varepsilon_0 E_{\\max}^2 (Ad)$ |
| Max. energy density | $u_{\\max} = \\frac{1}{2}\\kappa\\varepsilon_0 E_{\\max}^2$ |
| Breakdown mechanism | Electron avalanche ionization |

> **Design trade-off:** Increasing $d$ raises $V_{\\max}$ but lowers $C$. Increasing $\\kappa$ raises both $C$ and (often) $E_{\\max}$, but exotic dielectrics are costly. Engineering capacitors is an optimization problem balancing $\\kappa$, $E_{\\max}$, size, and cost.`
    }
  ]
};
