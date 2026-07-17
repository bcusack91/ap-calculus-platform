export const physCEMEnergyDenPart6Data = {
  topicSlug: "energy-density-physics-c-em",
  sections: [
    {
      id: 'eden6-intro',
      type: 'text' as const,
      content: `# Energy Density — Part 6: Problem-Solving Workshop

This workshop practices computing electromagnetic energy using integration and energy-density methods. These problems are representative of AP Physics C: E&M free-response questions.

### Strategy

1. Find $\\vec{E}$ or $\\vec{B}$ using Gauss's or Ampère's law.
2. Compute $u = \\frac{1}{2}\\varepsilon_0 E^2$ or $u = B^2/(2\\mu_0)$.
3. Integrate over the appropriate volume with the correct element ($4\\pi r^2 dr$, $2\\pi r L\\,dr$, etc.).
4. Check units and limiting cases.`
    },
    {
      id: 'eden6-mcq1',
      type: 'mcq' as const,
      question: 'A parallel-plate capacitor has $A = 0.04$ $m^{2}$, $d = 2$ mm, $V = 500$ V. What energy is stored? (Use $\\varepsilon_0 = 8.85 \\times 10^{-12}$.)',
      options: [
        '$22.1$ μJ',
        '$44.3$ μJ',
        '$11.1$ μJ',
        '$88.5$ μJ'
      ],
      correctAnswer: 0,
      explanation: '$C = \\varepsilon_0 A/d = 8.85 \\times 10^{-12} \\times 0.04/0.002 = 1.77 \\times 10^{-10}$ F. $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(1.77 \\times 10^{-10})(2.5 \\times 10^5) = 2.21 \\times 10^{-5}$ J $= 22.1$ μJ.'
    },
    {
      id: 'eden6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Energy in a spherical capacitor

A spherical capacitor has inner radius $a$ and outer radius $b$, with charge $\\pm Q$.

$$E = \\frac{Q}{4\\pi\\varepsilon_0 r^2} \\quad (a < r < b)$$

$$U = \\frac{\\varepsilon_0}{2}\\int_a^b \\left(\\frac{Q}{4\\pi\\varepsilon_0 r^2}\\right)^2 4\\pi r^2\\,dr = \\frac{Q^2}{8\\pi\\varepsilon_0}\\int_a^b \\frac{dr}{r^2}$$

$$= \\frac{Q^2}{8\\pi\\varepsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right)$$

### Verification via capacitance

$$C = \\frac{4\\pi\\varepsilon_0 ab}{b - a}$$

$$U = \\frac{Q^2}{2C} = \\frac{Q^2(b-a)}{8\\pi\\varepsilon_0 ab} = \\frac{Q^2}{8\\pi\\varepsilon_0}\\left(\\frac{1}{a} - \\frac{1}{b}\\right) \\checkmark$$`
    },
    {
      id: 'eden6-mcq2',
      type: 'mcq' as const,
      question: 'A spherical capacitor has $a = 5$ cm, $b = 10$ cm, $Q = 1$ μC. How much energy is stored? ($k = 9 \\times 10^9$)',
      options: [
        '$0.045$ J',
        '$0.09$ J',
        '$0.018$ J',
        '$0.9$ J'
      ],
      correctAnswer: 0,
      explanation: '$U = kQ^2(1/a - 1/b)/2 = (9 \\times 10^9)(10^{-12})(1/0.05 - 1/0.1)/2 = (9 \\times 10^{-3})(20 - 10)/2 = (9 \\times 10^{-3})(10)/2 = 0.045$ J.'
    },
    {
      id: 'eden6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Magnetic energy in a solenoid

A solenoid has $n = 2000$ turns/m, length $\\ell = 0.5$ m, radius $R = 3$ cm, current $I = 5$ A.

$$B = \\mu_0 nI = (4\\pi \\times 10^{-7})(2000)(5) = 4\\pi \\times 10^{-3} \\approx 0.01257 \\text{ T}$$

$$u_B = \\frac{B^2}{2\\mu_0} = \\frac{(4\\pi \\times 10^{-3})^2}{2(4\\pi \\times 10^{-7})} = \\frac{16\\pi^2 \\times 10^{-6}}{8\\pi \\times 10^{-7}} = 2\\pi \\times 10 \\cdot 1 = 20\\pi \\approx 62.8 \\text{ J/m}^3$$

$$U = u_B \\cdot \\pi R^2 \\ell = 62.8 \\times \\pi(9 \\times 10^{-4})(0.5) \\approx 62.8 \\times 1.414 \\times 10^{-3} \\approx 0.089 \\text{ J}$$`
    },
    {
      id: 'eden6-mcq3',
      type: 'mcq' as const,
      question: 'If the current in the solenoid above is doubled, the magnetic energy:',
      options: [
        'Quadruples',
        'Doubles',
        'Stays the same',
        'Increases by $\\sqrt{2}$'
      ],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}LI^2 \\propto I^2$. Doubling $I$ quadruples $U$. Equivalently, $B$ doubles so $u \\propto B^2$ quadruples.'
    },
    {
      id: 'eden6-problem4',
      type: 'text' as const,
      content: `## Problem 4: Combined electric and magnetic energy

A coaxial cable has inner radius $a$, outer radius $b$, carries current $I$ and has charge per unit length $\\lambda$.

### Electric energy per unit length

$$\\frac{U_E}{L} = \\frac{\\lambda^2}{4\\pi\\varepsilon_0}\\ln\\frac{b}{a}$$

### Magnetic energy per unit length

$$\\frac{U_B}{L} = \\frac{\\mu_0 I^2}{4\\pi}\\ln\\frac{b}{a}$$

### Total EM energy per unit length

$$\\frac{U}{L} = \\frac{\\ln(b/a)}{4\\pi}\\left(\\frac{\\lambda^2}{\\varepsilon_0} + \\mu_0 I^2\\right)$$

Both contributions have the same geometric factor $\\ln(b/a)/(4\\pi)$ — the energy depends on the same spatial distribution.`
    },
    {
      id: 'eden6-mcq4',
      type: 'mcq' as const,
      question: 'Which has larger energy density: $E = 10^6$ V/m (electric) or $B = 1$ T (magnetic)?',
      options: [
        '$B = 1$ T has much larger energy density',
        '$E = 10^6$ V/m has larger energy density',
        'They are approximately equal',
        'Cannot compare without more information'
      ],
      correctAnswer: 0,
      explanation: '$u_E = \\frac{1}{2}\\varepsilon_0 E^2 = \\frac{1}{2}(8.85 \\times 10^{-12})(10^{12}) \\approx 4.4$ $J/m^{3}$. $u_B = B^2/(2\\mu_0) = 1/(2 \\times 4\\pi \\times 10^{-7}) \\approx 4 \\times 10^5$ $J/m^{3}$. $u_B \\gg u_E$.'
    },
    {
      id: 'eden6-mcq5',
      type: 'mcq' as const,
      question: 'A long straight wire carries $I = 10$ A. The total magnetic energy per unit length stored between $r = 1$ mm and $r = 1$ m is:',
      options: [
        '$\\approx 69$ μJ/m',
        '$\\approx 7$ μJ/m',
        '$\\approx 690$ μJ/m',
        '$\\approx 6.9$ μJ/m'
      ],
      correctAnswer: 0,
      explanation: '$U/L = \\mu_0 I^2 \\ln(b/a)/(4\\pi) = (4\\pi \\times 10^{-7})(100)\\ln(1000)/(4\\pi) = 10^{-5} \\times 6.91 \\approx 69 \\times 10^{-6}$ J/m $= 69$ μJ/m.'
    }
  ]
};
