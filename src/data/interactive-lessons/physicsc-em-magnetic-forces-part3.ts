export const physCEMMagForcePart3Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf3-intro',
      type: 'text' as const,
      content: `# Mass Spectrometer

**Part 3 of 7 — Separating Ions by Mass**

### How It Works

A mass spectrometer combines three stages:

1. **Ion source** — atoms are ionized (given charge $q$)
2. **Velocity selector** — crossed $\\vec{E}$ and $\\vec{B}_1$ select $v = E/B_1$
3. **Deflection chamber** — uniform $\\vec{B}_2$ bends ions in semicircles

In the deflection chamber:

$$r = \\frac{mv}{qB_2}$$

After a semicircle, the ion hits a detector at distance:

$$d = 2r = \\frac{2mv}{qB_2}$$

Since $v = E/B_1$ is fixed:

$$d = \\frac{2mE}{qB_1B_2}$$

> Different masses land at different positions, allowing identification.`
    },
    {
      id: 'magf3-mcq1',
      type: 'mcq' as const,
      question: 'In a mass spectrometer, singly-ionized carbon-12 ($m = 12$ u) and carbon-13 ($m = 13$ u) are separated. If $^{12}$C lands at $d_{12} = 24$ cm, where does $^{13}$C land?',
      options: ['26 cm', '25 cm', '28 cm', '24 cm'],
      correctAnswer: 0,
      explanation: '$d \\propto m$ (same $q$, $v$, $B$). $d_{13} = d_{12} \\times 13/12 = 24 \\times 13/12 = 26$ cm.'
    },
    {
      id: 'magf3-accelerating',
      type: 'text' as const,
      content: `### Alternative: Accelerating Potential

Instead of a velocity selector, ions may be accelerated through a potential difference $V_0$:

$$qV_0 = \\frac{1}{2}mv^2 \\implies v = \\sqrt{\\frac{2qV_0}{m}}$$

In the deflection region:

$$r = \\frac{mv}{qB} = \\frac{m}{qB}\\sqrt{\\frac{2qV_0}{m}} = \\frac{1}{B}\\sqrt{\\frac{2mV_0}{q}}$$

$$\\boxed{r = \\frac{1}{B}\\sqrt{\\frac{2mV_0}{q}}}$$

So $r \\propto \\sqrt{m}$ when accelerated through a fixed potential.

### Resolving Power

Two masses $m$ and $m + \\Delta m$ are resolved when their semicircular paths are separated by more than the detector resolution $\\delta$:

$$\\Delta d = 2\\Delta r = \\frac{2\\Delta m \\cdot E}{q B_1 B_2} \\quad (\\text{velocity selector})$$

$$\\Delta d = \\frac{\\Delta m}{B}\\sqrt{\\frac{2V_0}{mq}} \\quad (\\text{accelerating potential})$$`
    },
    {
      id: 'magf3-mcq2',
      type: 'mcq' as const,
      question: 'Ions of $m_1$ and $m_2 = 4m_1$ (same charge) are accelerated through the same $V_0$ into a magnetic field. The ratio of their radii $r_2/r_1$ is:',
      options: ['2', '4', '$\\sqrt{2}$', '1/2'],
      correctAnswer: 0,
      explanation: '$r \\propto \\sqrt{m}$. $r_2/r_1 = \\sqrt{m_2/m_1} = \\sqrt{4} = 2$.'
    },
    {
      id: 'magf3-applications',
      type: 'text' as const,
      content: `### Applications of Mass Spectrometry

| Application | What's Measured |
|:---:|:---:|
| Isotope identification | Mass-to-charge ratio $m/q$ |
| Chemical analysis | Molecular ion masses |
| Carbon dating | $^{14}$C/$^{12}$C ratio |
| Doping detection | Trace element concentrations |

### The Thomson Experiment ($e/m$ of Electron)

J.J. Thomson used crossed $\\vec{E}$ and $\\vec{B}$ fields:

1. With both fields: $v = E/B$ (velocity selector)
2. With only $\\vec{E}$: deflection gives $qE = ma$, so $a = qE/m$
3. Time in field: $t = L/v$
4. Deflection: $y = \\frac{1}{2}at^2 = \\frac{qEL^2}{2mv^2}$

$$\\frac{q}{m} = \\frac{2yv^2}{EL^2} = \\frac{2yE}{B^2L^2}$$`
    },
    {
      id: 'magf3-mcq3',
      type: 'mcq' as const,
      question: 'Two singly-charged ions enter a mass spectrometer after acceleration through $V_0 = 1000$ V into $B = 0.2$ T. Ion A has $r_A = 10$ cm. What is the mass of ion A?',
      options: ['$m_A = qB^2r_A^2/(2V_0)$, approximately $3.2 \\times 10^{-25}$ kg', '$6.4 \\times 10^{-25}$ kg', '$1.6 \\times 10^{-25}$ kg', '$3.2 \\times 10^{-26}$ kg'],
      correctAnswer: 0,
      explanation: '$r = \\frac{1}{B}\\sqrt{2mV_0/q}$ → $m = qB^2r^2/(2V_0) = (1.6 \\times 10^{-19})(0.04)(0.01)/(2000) = 6.4 \\times 10^{-23}/2000 = 3.2 \\times 10^{-26}$ kg.'
    },
    {
      id: 'magf3-mcq4',
      type: 'mcq' as const,
      question: 'In a mass spectrometer using a velocity selector, if the magnetic field in the deflection region is increased, the separation between two isotopes:',
      options: ['Decreases', 'Increases', 'Stays the same', 'Depends on the masses'],
      correctAnswer: 0,
      explanation: '$d = 2mE/(qB_1B_2)$. Since $d \\propto 1/B_2$ (deflection field), increasing $B_2$ decreases the radius and the separation.'
    },
    {
      id: 'magf3-summary',
      type: 'text' as const,
      content: `### Summary — Part 3

| Configuration | Radius Formula |
|:---:|:---:|
| Velocity selector ($v$ fixed) | $r = mv/(qB)$, $r \\propto m$ |
| Accelerating potential ($V_0$ fixed) | $r = \\sqrt{2mV_0/q}/B$, $r \\propto \\sqrt{m}$ |
| Thomson experiment | $q/m = 2yE/(B^2L^2)$ |

> **Next up:** Force on current-carrying wires — Part 4.`
    }
  ]
};
