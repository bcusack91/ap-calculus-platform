export const physCEMMaxwellPart4Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p4-intro',
      type: 'text' as const,
      content: `# 🔁 Ampère's Law and Maxwell's Addition

**Part 4 of 7 — Ampère's Law for Symmetric Currents and Maxwell's Addition**

---

### Maxwell's Fourth Equation, Current Term
$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$$

Ampère's law always holds, but it **solves** for $B$ only when symmetry makes $B$ constant along the Amperian loop (or perpendicular to it on some segments). The AP exam uses it for exactly these shapes:

| Current distribution | Amperian loop | Result |
|---|---|---|
| Long straight wire | Circle around the wire | $B = \\dfrac{\\mu_0 I}{2\\pi r}$ |
| Long solenoid | Rectangle, one side inside | $B = \\mu_0 n I$ inside, $\\approx 0$ outside |
| Solid cylinder, uniform $J$ (inside) | Circle, $r < a$ | $B = \\dfrac{\\mu_0 I r}{2\\pi a^2}$ |
| Cylinder with $J(r)$ | Circle; $I_{enc} = \\int_0^r J(r')\\,2\\pi r'\\,dr'$ | $B = \\dfrac{\\mu_0 I_{enc}}{2\\pi r}$ |
| Wide slab, thickness $t$, uniform $J$ (outside) | Rectangle straddling the slab | $B = \\dfrac{\\mu_0 J t}{2}$, independent of distance |

Several conductors? Use superposition: add the fields of each, or let the Amperian loop count the **net** enclosed current.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A long hollow metal tube carries current along its length, spread uniformly through the metal. In the empty space inside the tube, the magnetic field is:',
            options: ['Zero', '$\\mu_0 I/(2\\pi r)$', '$\\mu_0 I/(2\\pi a)$', '$\\mu_0 I r/(2\\pi a^2)$'],
            correctAnswer: 0,
            explanation: 'A circular Amperian loop inside the hollow encloses no current, and by symmetry $B$ is the same all around it, so $B(2\\pi r) = 0$ and $B = 0$.'
          },
          {
            question: 'Outside a wide, flat conducting slab carrying a uniform current density, the magnetic field magnitude:',
            options: ['Is the same at every distance', 'Falls off as $1/r$', 'Falls off as $1/r^2$', 'Is zero'],
            correctAnswer: 0,
            explanation: 'A rectangular Amperian loop straddling the slab gives $2BL = \\mu_0 J t L$, so $B = \\mu_0 J t/2$ with no dependence on distance — like the electric field of a large charged sheet.'
          }
        ]
      }
    },
    {
      id: 'physicsc-maxwell-equations-em-p4-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — A Hollow Cylindrical Conductor

A long tube has inner radius $a = 1.0 \\text{ mm}$ and outer radius $b = 3.0 \\text{ mm}$ and carries $I = 12 \\text{ A}$ spread uniformly over its cross-section. Find $B$ at $r = 2.0 \\text{ mm}$ (inside the metal).

**Step 1 — Enclosed current.** The current is uniform over the metal's area $\\pi(b^2 - a^2)$, so a circle of radius $r$ encloses the fraction of that area between $a$ and $r$:
$I_{enc} = I\\,\\frac{r^2 - a^2}{b^2 - a^2} = 12\\cdot\\frac{4.0 - 1.0}{9.0 - 1.0} = 12 \\cdot \\frac{3}{8} = 4.5 \\text{ A}$

**Step 2 — Ampère's law.** $B(2\\pi r) = \\mu_0 I_{enc}$:
$B = \\frac{\\mu_0 I_{enc}}{2\\pi r} = \\frac{(2 \\times 10^{-7})(4.5)}{2.0 \\times 10^{-3}} = 4.5 \\times 10^{-4} \\text{ T}$

**Check the regions:** $B = 0$ in the hollow ($r < a$); $B$ grows through the metal; $B = \\mu_0 I/(2\\pi r)$ outside ($r > b$), just like a thin wire.

---

### Maxwell's Addition — Qualitatively
While a capacitor charges, no charge crosses the gap between its plates, yet a magnetic field circles the gap just as it circles the wires. The source is the **changing electric field** between the plates: Maxwell's addition says a changing $\\vec{E}$ creates $\\vec{B}$, much as a moving charge does. The AP exam does not ask you to calculate with this term; you need only the idea.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In the worked example (tube with $a = 1.0$ mm, $b = 3.0$ mm, $I = 12$ A), the field at $r = 2.0$ mm is:',
            options: ['$4.5 \\times 10^{-4}$ T', '$1.2 \\times 10^{-3}$ T', '$6.0 \\times 10^{-4}$ T', '$5.3 \\times 10^{-4}$ T'],
            correctAnswer: 0,
            explanation: '$I_{enc} = 12(4 - 1)/(9 - 1) = 4.5$ A, so $B = (2 \\times 10^{-7})(4.5)/(0.002) = 4.5 \\times 10^{-4}$ T. Using all 12 A gives $1.2 \\times 10^{-3}$ T; ignoring the hollow ($r^2/b^2$) gives $5.3 \\times 10^{-4}$ T.'
          },
          {
            question: 'While a capacitor charges, a magnetic field circles the gap between its plates even though no charge crosses the gap. This field is produced by:',
            options: ['The changing electric field in the gap', 'Charges flowing across the gap', 'The static charge on the plates', 'The magnetic field of the battery'],
            correctAnswer: 0,
            explanation: 'Maxwell\'s addition to Ampère\'s law: a changing electric field produces a magnetic field. No charge crosses the gap, and static charges make no magnetic field.'
          },
          {
            question: 'A long cylindrical conductor of radius $a$ carries total current $I$ uniformly. Compared with the field at its surface, the field at $r = a/2$ is:',
            options: ['Half as large', 'Twice as large', 'One-fourth as large', 'The same'],
            correctAnswer: 0,
            explanation: 'Inside, $B = \\mu_0 I r/(2\\pi a^2) \\propto r$, so halving $r$ halves $B$. Enclosed current falls as $r^2$ while the loop length falls as $r$.'
          }
        ]
      }
    }
  ]
};
