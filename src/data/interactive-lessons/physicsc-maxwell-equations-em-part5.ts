export const physCEMMaxwellPart5Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p5-intro',
      type: 'text' as const,
      content: `# 🧭 Gaussian Surfaces vs. Amperian Loops

**Part 5 of 7 — Choosing Gaussian Surfaces and Amperian Loops**

---

### The Same Strategy, Two Laws

| | Gauss's law | Ampère's law |
|---|---|---|
| Integral | $\\oint \\vec{E} \\cdot d\\vec{A}$ over a **closed surface** | $\\oint \\vec{B} \\cdot d\\vec{l}$ around a **closed path** |
| Counts | Enclosed charge $Q_{enc}$ | Enclosed current $I_{enc}$ |
| Goal | $\\vec{E}$ perpendicular to the surface (constant) or parallel to it | $\\vec{B}$ along the path (constant) or perpendicular to it |

### Matching the Symmetry

| Source | Gaussian surface (for $\\vec{E}$) | Amperian loop (for $\\vec{B}$) |
|---|---|---|
| Point charge / sphere | Concentric sphere | — |
| Long line or cylinder | Coaxial cylinder | Circle around the axis |
| Large plane or slab | Pillbox through the plane | Rectangle through the slab |
| Long solenoid | — | Rectangle, one side inside |

### When Symmetry Fails
Both laws are always **true**, but they give a field only with spherical, cylindrical, or planar symmetry (for $\\vec{E}$) or the long-wire, solenoid, slab, and cylinder shapes (for $\\vec{B}$). Otherwise:
- Few point charges → superpose Coulomb fields.
- Ring, arc, or finite line of charge → integrate $dE = k\\,dq/r^2$.
- Current segment, arc, or single loop → use the Biot–Savart law.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To find $E$ outside a long, uniformly charged cylinder, the most useful Gaussian surface is:',
            options: ['A coaxial cylinder', 'A sphere centered on the axis', 'A cube around the cylinder', 'A flat disk across the axis'],
            correctAnswer: 0,
            explanation: 'On a coaxial cylinder the radial field is constant and perpendicular to the curved side and parallel to the end caps, so $\\oint \\vec{E} \\cdot d\\vec{A} = E(2\\pi r L)$.'
          },
          {
            question: 'A Gaussian surface must be a ____, while an Amperian loop must be a ____.',
            options: ['Closed surface; closed path', 'Open surface; closed path', 'Closed path; closed surface', 'Open surface; open path'],
            correctAnswer: 0,
            explanation: 'Gauss\'s law integrates flux over a closed surface; Ampère\'s law integrates $\\vec{B} \\cdot d\\vec{l}$ around a closed path.'
          },
          {
            question: 'Why can\'t Ampère\'s law by itself give the field at the center of a single circular current loop?',
            options: ['No simple path has $B$ constant along it', 'The loop encloses no current at all', 'Ampère\'s law holds only for solenoids', 'The field at the center is zero'],
            correctAnswer: 0,
            explanation: 'Ampère\'s law is still true, but no Amperian path has a constant $B$ along it, so $B$ cannot be pulled out of the integral. Use the Biot–Savart law: $B = \\mu_0 I/(2R)$.'
          }
        ]
      }
    },
    {
      id: 'physicsc-maxwell-equations-em-p5-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Two Coaxial Problems Side by Side

**(a) Concentric charged cylinders (Gauss).** A long inner cylinder carries charge $+\\lambda$ per length; a thin outer coaxial shell carries $-\\lambda$ per length.
- Between them: a coaxial Gaussian cylinder encloses $+\\lambda L$, so $E(2\\pi rL) = \\lambda L/\\varepsilon_0$ and $E = \\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}$.
- Outside both: the enclosed charge is $\\lambda L - \\lambda L = 0$, so $E = 0$.

**(b) Coaxial cable (Ampère).** An inner wire carries current $I$ one way; the outer conducting shell carries $I$ back.
- Between them: a circular Amperian loop encloses $I$, so $B(2\\pi r) = \\mu_0 I$ and $B = \\dfrac{\\mu_0 I}{2\\pi r}$.
- Outside both: the net enclosed current is $I - I = 0$, so $B = 0$.

**Numbers for (b):** with $I = 5.0 \\text{ A}$ at $r = 2.0 \\text{ mm}$: $B = \\dfrac{(2 \\times 10^{-7})(5.0)}{2.0 \\times 10^{-3}} = 5.0 \\times 10^{-4} \\text{ T}$.

> 🔑 Same symmetry, same steps: pick the surface or loop, find what it encloses, pull the field out of the integral.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A coaxial cable carries current $I$ out along its inner wire and back along its outer shell. Outside the cable, the magnetic field is:',
            options: ['Zero', '$\\mu_0 I/(2\\pi r)$', '$\\mu_0 I/(\\pi r)$', '$\\mu_0 I/(4\\pi r)$'],
            correctAnswer: 0,
            explanation: 'An Amperian circle outside the cable encloses $I - I = 0$, and by symmetry $B$ is constant around it, so $B = 0$. Adding the two currents instead of canceling them gives the $\\mu_0 I/(\\pi r)$ distractor.'
          },
          {
            question: 'In the worked example, the field between the conductors at $r = 2.0$ mm with $I = 5.0$ A is:',
            options: ['$5.0 \\times 10^{-4}$ T', '$1.0 \\times 10^{-3}$ T', '$2.5 \\times 10^{-4}$ T', '$1.6 \\times 10^{-4}$ T'],
            correctAnswer: 0,
            explanation: '$B = \\mu_0 I/(2\\pi r) = (2 \\times 10^{-7})(5.0)/(2.0 \\times 10^{-3}) = 5.0 \\times 10^{-4}$ T; only the inner current is enclosed.'
          }
        ]
      }
    }
  ]
};
