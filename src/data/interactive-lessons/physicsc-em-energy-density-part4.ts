export const physCEMEnergyDenPart4Data = {
  topicSlug: "energy-density-physics-c-em",
  sections: [
    {
      id: 'eden4-intro',
      type: 'text' as const,
      content: `# Energy Density — Part 4: Magnetic Energy Density u = B²/(2μ₀)

Just as electric fields store energy with density $u_E = \\frac{1}{2}\\varepsilon_0 E^2$, **magnetic fields** also store energy:

$$\\boxed{u_B = \\frac{B^2}{2\\mu_0}}$$

where $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A is the permeability of free space.

### Derivation from an inductor

An inductor stores energy $U = \\frac{1}{2}LI^2$. For a solenoid (length $\\ell$, area $A$, $n$ turns/length):

$$L = \\mu_0 n^2 A \\ell, \\qquad B = \\mu_0 n I$$

$$U = \\frac{1}{2}(\\mu_0 n^2 A\\ell)I^2 = \\frac{(\\mu_0 nI)^2}{2\\mu_0}(A\\ell) = \\frac{B^2}{2\\mu_0}\\cdot\\text{Volume}$$

$$\\implies u_B = \\frac{B^2}{2\\mu_0}$$`
    },
    {
      id: 'eden4-mcq1',
      type: 'mcq' as const,
      question: 'What is the magnetic energy density inside a solenoid where $B = 0.5$ T? ($\\mu_0 = 4\\pi \\times 10^{-7}$)',
      options: [
        '$\\approx 10^5$ J/m³',
        '$\\approx 10^3$ J/m³',
        '$\\approx 10^{-3}$ J/m³',
        '$\\approx 10$ J/m³'
      ],
      correctAnswer: 0,
      explanation: '$u_B = B^2/(2\\mu_0) = (0.25)/(2 \\times 4\\pi \\times 10^{-7}) = 0.25/(8\\pi \\times 10^{-7}) \\approx 0.25/2.51 \\times 10^{-6} \\approx 10^5$ J/m³.'
    },
    {
      id: 'eden4-comparison',
      type: 'text' as const,
      content: `## Comparing electric and magnetic energy densities

| Property | Electric | Magnetic |
|:---|:---:|:---:|
| Energy density | $u_E = \\frac{1}{2}\\varepsilon_0 E^2$ | $u_B = \\frac{B^2}{2\\mu_0}$ |
| Stored by | Capacitor ($\\frac{1}{2}CV^2$) | Inductor ($\\frac{1}{2}LI^2$) |
| Field source | Charges | Currents |
| In matter | $u_E = \\frac{1}{2}\\kappa\\varepsilon_0 E^2$ | $u_B = \\frac{B^2}{2\\mu_0/\\kappa_m} = \\frac{\\kappa_m B^2}{2\\mu_0}$ |

### Electromagnetic waves

In an EM wave, the electric and magnetic energy densities are **equal** at every point:

$$\\frac{1}{2}\\varepsilon_0 E^2 = \\frac{B^2}{2\\mu_0}$$

This follows from $E = cB$ and $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$:

$$\\frac{1}{2}\\varepsilon_0(cB)^2 = \\frac{1}{2}\\varepsilon_0 \\cdot \\frac{B^2}{\\mu_0\\varepsilon_0} = \\frac{B^2}{2\\mu_0} \\checkmark$$`
    },
    {
      id: 'eden4-mcq2',
      type: 'mcq' as const,
      question: 'In an electromagnetic wave with $E = 300$ V/m, what is $B$? ($c = 3 \\times 10^8$ m/s)',
      options: [
        '$10^{-6}$ T',
        '$10^{-3}$ T',
        '$10^{6}$ T',
        '$9 \\times 10^{10}$ T'
      ],
      correctAnswer: 0,
      explanation: '$B = E/c = 300/(3 \\times 10^8) = 10^{-6}$ T = 1 μT.'
    },
    {
      id: 'eden4-inductor',
      type: 'text' as const,
      content: `## Energy stored in an inductor

From Faraday's law, the work done to build up current $I$ in an inductor:

$$\\mathcal{E} = -L\\frac{dI}{dt} \\implies P = LI\\frac{dI}{dt}$$

$$U = \\int_0^I LI'\\,dI' = \\frac{1}{2}LI^2$$

### Toroidal inductor

For a toroid with $N$ turns, inner radius $a$, outer radius $b$, height $h$:

$$B = \\frac{\\mu_0 NI}{2\\pi r} \\quad (a < r < b)$$

$$U = \\int_a^b \\frac{B^2}{2\\mu_0}\\cdot h \\cdot 2\\pi r\\,dr = \\frac{\\mu_0 N^2 I^2 h}{4\\pi}\\int_a^b \\frac{dr}{r} = \\frac{\\mu_0 N^2 I^2 h}{4\\pi}\\ln\\frac{b}{a}$$

This gives $L = \\mu_0 N^2 h \\ln(b/a)/(2\\pi)$, consistent with $U = \\frac{1}{2}LI^2$.`
    },
    {
      id: 'eden4-mcq3',
      type: 'mcq' as const,
      question: 'A solenoid with $L = 50$ mH carries $I = 4$ A. The total magnetic energy stored is:',
      options: ['$0.4$ J', '$0.1$ J', '$0.8$ J', '$0.2$ J'],
      correctAnswer: 0,
      explanation: '$U = \\frac{1}{2}LI^2 = \\frac{1}{2}(0.05)(16) = 0.4$ J.'
    },
    {
      id: 'eden4-coax',
      type: 'text' as const,
      content: `## Magnetic energy in a coaxial cable

A coaxial cable carrying current $I$ has:

$$B = \\frac{\\mu_0 I}{2\\pi r} \\quad (a < r < b)$$

Energy per unit length:

$$\\frac{U}{L} = \\int_a^b \\frac{B^2}{2\\mu_0}2\\pi r\\,dr = \\frac{\\mu_0 I^2}{4\\pi}\\ln\\frac{b}{a}$$

The inductance per unit length is:

$$\\frac{\\mathcal{L}}{L} = \\frac{\\mu_0}{2\\pi}\\ln\\frac{b}{a}$$

verifying $U/L = \\frac{1}{2}(\\mathcal{L}/L)I^2$.`
    },
    {
      id: 'eden4-mcq4',
      type: 'mcq' as const,
      question: 'Earth\'s magnetic field is $\\sim 5 \\times 10^{-5}$ T. The magnetic energy density at Earth\'s surface is approximately:',
      options: [
        '$\\sim 10^{-3}$ J/m³',
        '$\\sim 10^{-6}$ J/m³',
        '$\\sim 1$ J/m³',
        '$\\sim 10^{3}$ J/m³'
      ],
      correctAnswer: 0,
      explanation: '$u = B^2/(2\\mu_0) = (2.5 \\times 10^{-9})/(2 \\times 4\\pi \\times 10^{-7}) \\approx 2.5 \\times 10^{-9}/2.5 \\times 10^{-6} = 10^{-3}$ J/m³.'
    }
  ]
};
