export const physCEMMaxwellPart2Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p2-intro',
      type: 'text' as const,
      content: `# 🧲 Gauss's Law for Magnetism

**Part 2 of 7 — Gauss's Law for Magnetism and Closed Field Lines**

---

### Maxwell's Second Equation
$$\\oint \\vec{B} \\cdot d\\vec{A} = 0$$

The net magnetic flux through **any** closed surface is zero: every magnetic field line that enters a closed surface also leaves it. The reason is that magnetic fields come from **dipoles** — current loops, moving charges, and aligned atomic dipoles — never from isolated poles (monopoles).

| | Gauss's law for $\\vec{E}$ | Gauss's law for $\\vec{B}$ |
|---|---|---|
| Right-hand side | $Q_{enc}/\\varepsilon_0$ | $0$ |
| Field lines | Start on $+$ charges, end on $-$ charges | Form **closed loops** |
| Sources | Charges | Dipoles only |

---

### Bar Magnets and Earth
- Outside a bar magnet the field points from the north pole to the south pole; **inside** it runs from south back to north, closing each loop.
- Cut a magnet in half and you get **two complete dipoles** — no lone north or south pole ever appears.
- Earth's field is approximately that of a dipole. A compass's north end points toward geographic north, so the pole near geographic north is a magnetic **south** pole.

---

### Sign Convention for Closed Surfaces
Area vectors on a closed surface point **outward**: flux leaving the surface counts as positive, flux entering counts as negative. Gauss's law for magnetism says these always cancel.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A closed surface surrounds only the north-pole end of a bar magnet. The net magnetic flux through the surface is:',
            options: ['Zero', 'Positive, as lines leave the north pole', 'Negative, as lines enter the surface', 'Positive and equal to $BA$'],
            correctAnswer: 0,
            explanation: 'Field lines leaving the north pole outside the magnet are matched by lines running back through the magnet\'s interior into the surface, so the net flux is zero, as $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ requires.'
          },
          {
            question: 'A bar magnet is cut in half. Each half:',
            options: ['Has both a north and a south pole', 'Is a single isolated pole', 'Loses its magnetism entirely', 'Is magnetic only near the cut'],
            correctAnswer: 0,
            explanation: 'Magnetism comes from aligned atomic dipoles throughout the material, so each piece is still a complete dipole with two poles.'
          },
          {
            question: 'Inside a bar magnet, its magnetic field points:',
            options: ['From its south pole to its north pole', 'From its north pole to its south pole', 'Nowhere, since $B = 0$ inside', 'Toward its center from both ends'],
            correctAnswer: 0,
            explanation: 'Outside, the field runs north to south; inside it runs south to north, so each field line closes on itself.'
          }
        ]
      }
    },
    {
      id: 'physicsc-maxwell-equations-em-p2-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Flux Through Closed Surfaces

**(a) Uniform field.** A closed cylinder of radius $0.050 \\text{ m}$ has its axis along a uniform field $B = 0.40 \\text{ T}$. Find the flux through each part.

- Cap where the field leaves: $\\Phi = +BA = (0.40)\\pi(0.050)^2 = +3.14 \\times 10^{-3} \\text{ Wb}$
- Cap where the field enters: $\\Phi = -3.14 \\times 10^{-3} \\text{ Wb}$
- Curved side: $\\vec{B}$ runs along the surface, so $\\vec{B} \\cdot d\\vec{A} = 0$

Total: $0$, as Gauss's law for magnetism demands.

**(b) Nonuniform field.** A closed surface is made of a flat disk and a dome. $2.5 \\times 10^{-4} \\text{ Wb}$ of magnetic flux **enters** through the disk. Without knowing anything else about the field, the dome must carry exactly $2.5 \\times 10^{-4} \\text{ Wb}$ **outward**, because the total must be zero.

> 🔑 For any open surface, the magnetic flux depends only on its boundary: any two surfaces sharing the same edge carry the same flux. That is why "the flux through a loop" is well defined in Faraday's law.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A closed surface is a flat disk plus a dome. If $2.5 \\times 10^{-4}$ Wb of magnetic flux enters through the disk, the flux through the dome is:',
            options: ['$2.5 \\times 10^{-4}$ Wb outward', '$2.5 \\times 10^{-4}$ Wb inward', 'Zero', '$5.0 \\times 10^{-4}$ Wb outward'],
            correctAnswer: 0,
            explanation: 'The net flux through the closed surface must be zero, so the $2.5 \\times 10^{-4}$ Wb that enters through the disk must leave through the dome.'
          },
          {
            question: 'A compass needle\'s north end points toward geographic north. The magnetic pole located near Earth\'s geographic north pole is:',
            options: ['A magnetic south pole', 'A magnetic north pole', 'Not a pole at all', 'Both poles at once'],
            correctAnswer: 0,
            explanation: 'Opposite poles attract, so the north end of the compass is pulled toward a magnetic south pole, which lies near geographic north.'
          },
          {
            question: 'Electric field lines can begin and end on charges, but magnetic field lines cannot, because:',
            options: ['Monopoles do not exist', 'Magnetic fields are always uniform', 'Magnetic fields are always weaker', 'Magnetic field lines never curve'],
            correctAnswer: 0,
            explanation: 'A field line could end only on a magnetic "charge", and none exists ($\\oint \\vec{B} \\cdot d\\vec{A} = 0$), so magnetic field lines close on themselves.'
          }
        ]
      }
    }
  ]
};
