export const physCEMMagForcePart2Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf2-intro',
      type: 'text' as const,
      content: `# Circular Motion in Magnetic Fields

**Part 2 of 7 — Cyclotron Motion**

### Uniform Circular Motion

When $\\vec{v} \\perp \\vec{B}$, the magnetic force provides the centripetal acceleration:

$$qvB = \\frac{mv^2}{r}$$

Solving for the **cyclotron radius**:

$$\\boxed{r = \\frac{mv}{qB}}$$

### Period and Frequency

The **cyclotron period** (time for one revolution):

$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$

The **cyclotron frequency**:

$$f = \\frac{1}{T} = \\frac{qB}{2\\pi m} \\qquad \\omega = \\frac{qB}{m}$$

> **Critical insight:** The period and frequency are **independent of velocity**. Faster particles trace larger circles but at the same frequency.`
    },
    {
      id: 'magf2-mcq1',
      type: 'mcq' as const,
      question: 'An electron ($m = 9.1 \\times 10^{-31}$ kg, $|q| = 1.6 \\times 10^{-19}$ C) moves at $2 \\times 10^7$ m/s perpendicular to a 0.01 T field. The radius of its circular path is:',
      options: ['$\\approx 1.14$ cm', '$\\approx 11.4$ cm', '$\\approx 0.114$ cm', '$\\approx 1.14$ m'],
      correctAnswer: 0,
      explanation: '$r = mv/(qB) = (9.1 \\times 10^{-31})(2 \\times 10^7)/((1.6 \\times 10^{-19})(0.01)) = 1.82 \\times 10^{-23}/1.6 \\times 10^{-21} \\approx 0.0114$ m $= 1.14$ cm.'
    },
    {
      id: 'magf2-helical',
      type: 'text' as const,
      content: `### Helical Motion

If $\\vec{v}$ has components both parallel and perpendicular to $\\vec{B}$:

$$\\vec{v} = v_\\parallel \\hat{b} + v_\\perp \\hat{n}$$

- $v_\\parallel$ is unchanged (no force along $\\vec{B}$)
- $v_\\perp$ produces circular motion with $r = mv_\\perp/(qB)$

The result is a **helix** with:

$$\\text{pitch} = v_\\parallel T = \\frac{2\\pi m v_\\parallel}{qB}$$

### Decomposition

If the initial velocity makes angle $\\alpha$ with $\\vec{B}$:

$$v_\\parallel = v\\cos\\alpha, \\qquad v_\\perp = v\\sin\\alpha$$

$$r = \\frac{mv\\sin\\alpha}{qB}, \\qquad \\text{pitch} = \\frac{2\\pi m v\\cos\\alpha}{qB}$$`
    },
    {
      id: 'magf2-mcq2',
      type: 'mcq' as const,
      question: 'A proton enters a magnetic field at $45°$ to $\\vec{B}$. Compared to a proton entering perpendicular to $\\vec{B}$ at the same speed, the cyclotron radius is:',
      options: ['Smaller by factor $1/\\sqrt{2}$', 'The same', 'Larger by factor $\\sqrt{2}$', 'Smaller by factor $1/2$'],
      correctAnswer: 0,
      explanation: '$r = mv\\sin\\alpha/(qB)$. At $45°$: $r = mv\\sin 45°/(qB) = mv/(qB\\sqrt{2})$, which is $1/\\sqrt{2}$ times the perpendicular case.'
    },
    {
      id: 'magf2-cyclotron',
      type: 'text' as const,
      content: `### The Cyclotron

A cyclotron accelerates charged particles using:
1. A magnetic field to bend particles in semicircles
2. An oscillating electric field across a gap to accelerate them

Since $T = 2\\pi m/(qB)$ is independent of speed, the AC frequency stays constant (non-relativistic limit).

### Energy Gained

After $N$ full turns (each crossing the gap twice):

$$K = 2NqV_{\\text{gap}}$$

The maximum kinetic energy (at radius $R$ of the cyclotron):

$$K_{\\max} = \\frac{q^2B^2R^2}{2m}$$

Derivation: $r = mv/(qB)$ at the edge gives $v = qBR/m$, so:

$$K = \\frac{1}{2}mv^2 = \\frac{q^2B^2R^2}{2m}$$`
    },
    {
      id: 'magf2-mcq3',
      type: 'mcq' as const,
      question: 'A cyclotron with $R = 0.5$ m and $B = 1.5$ T accelerates protons. The maximum kinetic energy is approximately:',
      options: ['$\\approx 27$ MeV', '$\\approx 54$ MeV', '$\\approx 13.5$ MeV', '$\\approx 6.75$ MeV'],
      correctAnswer: 0,
      explanation: '$K = q^2B^2R^2/(2m) = (1.6\\times10^{-19})^2(1.5)^2(0.25)/(2 \\times 1.67\\times10^{-27})$. Numerator: $2.56 \\times 10^{-38} \\times 2.25 \\times 0.25 = 1.44 \\times 10^{-38}$. Denom: $3.34 \\times 10^{-27}$. $K \\approx 4.3 \\times 10^{-12}$ J $\\approx 27$ MeV.'
    },
    {
      id: 'magf2-mcq4',
      type: 'mcq' as const,
      question: 'If the magnetic field in a cyclotron is doubled, the maximum kinetic energy of the accelerated particles:',
      options: ['Quadruples', 'Doubles', 'Stays the same', 'Halves'],
      correctAnswer: 0,
      explanation: '$K_{\\max} = q^2B^2R^2/(2m)$. $K \\propto B^2$, so doubling $B$ quadruples $K$.'
    },
    {
      id: 'magf2-summary',
      type: 'text' as const,
      content: `### Summary — Part 2

| Quantity | Formula |
|:---:|:---:|
| Cyclotron radius | $r = mv/(qB)$ |
| Period | $T = 2\\pi m/(qB)$ |
| Cyclotron frequency | $\\omega = qB/m$ |
| Helical pitch | $v_\\parallel \\cdot T$ |
| Max cyclotron KE | $K = q^2B^2R^2/(2m)$ |

> **Next up:** The mass spectrometer — Part 3.`
    }
  ]
};
