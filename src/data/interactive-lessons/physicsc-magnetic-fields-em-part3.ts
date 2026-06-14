export const physCEMMagFieldsPart3Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p3-intro',
      type: 'text' as const,
      content: `# 🔬 Biot-Savart Law

**Part 3 of 7 — Magnetic Field from Current**

---

### The Biot-Savart Law

$$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I \, d\\vec{l} \\times \\hat{r}}{r^2}$$

---

### Common Results

| Configuration | $B$ at Center/Point |
|--------------|-------------------|
| Long straight wire | $B = \\frac{\\mu_0 I}{2\\pi r}$ |
| Center of circular loop | $B = \\frac{\\mu_0 I}{2R}$ |
| On axis of loop | $B = \\frac{\\mu_0 IR^2}{2(R^2+x^2)^{3/2}}$ |

$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

> 🔑 Right-hand rule: curl fingers in direction of current → thumb points in direction of $\\vec{B}$.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p3-structure',
      type: 'text' as const,
      content: `### How to Attack a Biot-Savart Integral

The law $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}$ is the magnetic analog of Coulomb's law for fields. A reliable recipe:

1. **Pick the field point** and draw $\\hat{r}$ from a typical current element to it.
2. **Evaluate the cross product** $d\\vec{l}\\times\\hat{r}$ — its magnitude is $dl\\sin\\theta$, and its direction (right-hand rule) tells you which way $d\\vec{B}$ points.
3. **Exploit symmetry** to cancel components before integrating. (On a loop's axis, only the axial component survives.)
4. **Integrate** what is left, pulling constants outside.

**Finite straight wire.** Integrating for a straight segment subtending angles $\\theta_1$ and $\\theta_2$ at perpendicular distance $d$ gives

$B = \\frac{\\mu_0 I}{4\\pi d}\\left(\\sin\\theta_1 + \\sin\\theta_2\\right).$

For an *infinite* wire both angles approach $90^\\circ$, so $\\sin\\theta_1 + \\sin\\theta_2 \\to 2$ and $B \\to \\frac{\\mu_0 I}{2\\pi d}$ — recovering the familiar result.

> Use Biot-Savart when symmetry is **too low** for Ampère's law (finite segments, arcs, off-axis points). Use Ampère when symmetry is high.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p3-worked',
      type: 'text' as const,
      content: `### Worked Example — Integrating Biot-Savart for a Loop's Axis

Find the on-axis field of a circular loop of radius $R$ carrying current $I$, at distance $x$ from the center, by integrating the Biot-Savart law. Then evaluate the center.

**Step 1 — Set up $dB$.** Each element $d\\vec{l}$ is perpendicular to $\\hat{r}$ (the vector to the axial point), so $|d\\vec{l}\\times\\hat{r}| = dl$ and $dB = \\frac{\\mu_0}{4\\pi}\\frac{I\\,dl}{r^2}$, where $r = \\sqrt{R^2 + x^2}$.

**Step 2 — Symmetry kills the perpendicular components.** Components transverse to the axis cancel in pairs; only the axial part survives, scaled by $\\cos\\alpha = \\frac{R}{\\sqrt{R^2+x^2}}$:

$dB_x = \\frac{\\mu_0}{4\\pi}\\frac{I\\,dl}{R^2+x^2}\\cdot\\frac{R}{\\sqrt{R^2+x^2}}.$

**Step 3 — Integrate around the loop.** Everything except $dl$ is constant, and $\\oint dl = 2\\pi R$:

$B_x = \\frac{\\mu_0 I R}{4\\pi (R^2+x^2)^{3/2}}(2\\pi R) = \\frac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}.$

**Step 4 — At the center ($x = 0$).** $B = \\frac{\\mu_0 I R^2}{2R^3} = \\frac{\\mu_0 I}{2R}$, recovering the standard center-of-loop result.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The magnetic field of a long straight wire falls off as:',
            options: ['$1/r$', '$1/r^2$', '$1/r^3$', 'Constant'],
            correctAnswer: 0,
            explanation: '$B = \\mu_0 I/(2\\pi r)$. Field decreases as $1/r$.'
          },
          {
            question: 'The magnetic field at the center of a circular loop of radius $R$ carrying current $I$ is:',
            options: ['$\\frac{\\mu_0 I}{2\\pi R}$', '$\\frac{\\mu_0 I}{2R}$', '$\\frac{\\mu_0 I}{4\\pi R}$', '$\\frac{\\mu_0 I R}{2}$'],
            correctAnswer: 1,
            explanation: 'Setting $x = 0$ in the axial formula gives $B = \\frac{\\mu_0 I}{2R}$.'
          },
          {
            question: 'Far on the axis of a loop ($x \\gg R$), the field falls off as:',
            options: ['$1/x$', '$1/x^2$', '$1/x^3$', 'Constant'],
            correctAnswer: 2,
            explanation: 'For $x \\gg R$, $(R^2+x^2)^{3/2} \\approx x^3$, so $B \\approx \\frac{\\mu_0 I R^2}{2x^3}$ — the dipole $1/x^3$ behavior.'
          },
          {
            question: 'A long straight wire carries $I = 10\\text{ A}$. The field at $r = 0.05\\text{ m}$ is (use $\\mu_0 = 4\\pi\\times10^{-7}$):',
            options: ['$2.0\\times10^{-5}$ T', '$4.0\\times10^{-5}$ T', '$1.0\\times10^{-5}$ T', '$8.0\\times10^{-5}$ T'],
            correctAnswer: 1,
            explanation: '$B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{(4\\pi\\times10^{-7})(10)}{2\\pi(0.05)} = \\frac{2\\times10^{-6}}{0.05} = 4.0\\times10^{-5}$ T.'
          },
          {
            question: 'In the Biot-Savart law $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\vec{l}\\times\\hat{r}}{r^2}$, the contribution $dB$ is zero when $d\\vec{l}$ is:',
            options: ['Perpendicular to $\\hat{r}$', 'Parallel (or antiparallel) to $\\hat{r}$', 'At 45° to $\\hat{r}$', 'Of maximum length'],
            correctAnswer: 1,
            explanation: 'The cross product $d\\vec{l}\\times\\hat{r}$ vanishes when $d\\vec{l}\\parallel\\hat{r}$ (i.e., looking along the wire toward the point).'
          },
          {
            question: 'Two long parallel wires carry current in the SAME direction. They:',
            options: ['Attract each other', 'Repel each other', 'Exert no force', 'Twist but feel no net force'],
            correctAnswer: 0,
            explanation: 'Each wire sits in the other’s field; using $\\vec{F} = I\\vec{L}\\times\\vec{B}$, parallel currents attract (antiparallel currents repel).'
          }
        ]
      }
    }
  ]
};
