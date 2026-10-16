export const physCEMMaxwellPart7Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 Maxwell's Equations Review

**Part 7 of 7 — Final Summary**

---

### The Big Picture
Maxwell's four equations describe ALL of classical electromagnetism:

1. **Gauss for E:** $\\oint \\vec{E} \\cdot d\\vec{A} = Q_{enc}/\\varepsilon_0$ — charges create electric fields
2. **Gauss for B:** $\\oint \\vec{B} \\cdot d\\vec{A} = 0$ — no magnetic monopoles; field lines close
3. **Faraday:** $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_B/dt$ — changing magnetic flux creates a circulating electric field
4. **Ampère + Maxwell's addition:** currents create magnetic fields (quantitative), and so does a changing electric field (qualitative only)

| Skill | Where you used it |
|---|---|
| Choose a Gaussian surface or Amperian loop | Spheres, coaxial cylinders, pillboxes, circles, rectangles |
| Integrate a density | $Q_{enc} = \\int \\rho\\,dV$, $I_{enc} = \\int J\\,dA$, $\\Phi_B = \\int B\\,dA$ |
| Differentiate a flux | EMF and induced $\\vec{E}$ from Faraday's law |

> 🔑 "Maxwell's equations are the most beautiful equations in physics." — Richard Feynman`
    },
    {
      id: 'physicsc-maxwell-equations-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many Maxwell\'s equations are there?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 2,
            explanation: 'There are exactly four Maxwell\'s equations, together covering all of classical electromagnetism.'
          },
          {
            question: 'Which equation states that a changing magnetic flux produces an induced electric field?',
            options: ['Faraday\'s law', 'Gauss\'s law', 'Ampère\'s law', 'Gauss\'s law for magnetism'],
            correctAnswer: 0,
            explanation: 'Faraday\'s law, $\\oint \\vec{E} \\cdot d\\vec{l} = -d\\Phi_B/dt$, links a changing magnetic flux to a circulating electric field. Ampère\'s law goes the other way, from currents to magnetic fields.'
          }
        ]
      }
    },
    {
      id: 'physicsc-maxwell-equations-em-p7-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Synthesis: Wire Field → Flux → EMF

A long straight wire carries a current that increases as $I(t) = (2.0 \\text{ A/s})\\,t$. A square loop of side $\\ell = 0.10 \\text{ m}$ lies in the same plane, with its near side $a = 0.050 \\text{ m}$ from the wire and its far side at $0.15 \\text{ m}$. Find the EMF induced in the loop.

**Step 1 — Field of the wire (Ampère's law).** $B(r) = \\dfrac{\\mu_0 I}{2\\pi r}$, perpendicular to the loop's plane.

**Step 2 — Flux by integration.** Strips of width $dr$ and length $\\ell$:
$\\Phi_B = \\int_{a}^{3a} \\frac{\\mu_0 I}{2\\pi r}\\,\\ell\\,dr = \\frac{\\mu_0 I \\ell}{2\\pi}\\ln 3 = (2 \\times 10^{-7})(0.10)(1.10)\\,I = (2.2 \\times 10^{-8})\\,I$

**Step 3 — EMF (Faraday's law).**
$|\\mathcal{E}| = \\frac{d\\Phi_B}{dt} = (2.2 \\times 10^{-8})\\frac{dI}{dt} = (2.2 \\times 10^{-8})(2.0) = 4.4 \\times 10^{-8} \\text{ V}$

**Step 4 — Direction (Lenz's law).** The flux into the loop is increasing, so the induced current circulates to make a field opposite to the wire's field inside the loop.

> 🔑 One problem, three laws: Ampère gives $B$, integration gives $\\Phi_B$, Faraday gives $\\mathcal{E}$.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'In the worked example, the magnitude of the EMF induced in the square loop is:',
            options: ['$4.4 \\times 10^{-8}$ V', '$2.2 \\times 10^{-8}$ V', '$8.8 \\times 10^{-8}$ V', '$4.0 \\times 10^{-8}$ V'],
            correctAnswer: 0,
            explanation: '$|\\mathcal{E}| = (\\mu_0 \\ell/2\\pi)\\ln 3\\,(dI/dt) = (2 \\times 10^{-7})(0.10)(1.10)(2.0) = 4.4 \\times 10^{-8}$ V. Forgetting $dI/dt$ gives $2.2 \\times 10^{-8}$; replacing $\\ln 3$ by 1 gives $4.0 \\times 10^{-8}$.'
          },
          {
            question: 'Besides currents, which of these also produces a magnetic field, according to Maxwell\'s addition?',
            options: ['A changing electric field', 'A static charge', 'A steady field', 'A magnetic monopole'],
            correctAnswer: 0,
            explanation: 'Maxwell\'s addition to Ampère\'s law: a changing electric field creates a magnetic field. Static charges and constant electric fields do not, and monopoles do not exist.'
          },
          {
            question: 'Which statement best summarizes Maxwell\'s own contribution to these laws?',
            options: ['He showed a changing $\\vec{E}$ field also creates $\\vec{B}$', 'He proved that gravity is electromagnetic', 'He discovered the electron and its charge', 'He measured the gravitational constant $G$'],
            correctAnswer: 0,
            explanation: 'Gauss, Faraday, and Ampère supplied the earlier laws; Maxwell added the changing-electric-field term to Ampère\'s law, completing the set of four equations.'
          }
        ]
      }
    }
  ]
};
