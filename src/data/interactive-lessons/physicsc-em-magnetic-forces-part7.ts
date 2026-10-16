export const physCEMMagForcePart7Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf7-intro',
      type: 'text' as const,
      content: `# Review & Applications

**Part 7 of 7 — Comprehensive Assessment**

### Formula Reference

| Concept | Formula |
|:---:|:---:|
| Lorentz force | $\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})$ |
| Cyclotron radius | $r = mv/(qB)$ |
| Cyclotron frequency | $\\omega = qB/m$ |
| Force on wire | $\\vec{F} = I\\vec{L} \\times \\vec{B}$ |
| Differential force | $d\\vec{F} = Id\\vec{\\ell} \\times \\vec{B}$ |
| Parallel wires | $F/L = \\mu_0 I_1 I_2/(2\\pi d)$ |
| Field of a moving charge | $B = \\mu_0 |q| v\\sin\\theta/(4\\pi r^2)$ |
| Velocity selector | $v = E/B$ |
| Hall voltage | $V_H = IB/(net)$ |`
    },
    {
      id: 'magf7-mcq1',
      type: 'mcq' as const,
      question: 'A charged particle moves at constant velocity through a region that has both $\\vec{E}$ and $\\vec{B}$ fields. Which must be true?',
      options: ['$q\\vec{E} = -q\\vec{v} \\times \\vec{B}$', '$\\vec{E}$ is parallel to $\\vec{B}$', '$\\vec{v}$ is parallel to $\\vec{E}$', '$\\vec{v}$ is parallel to $\\vec{B}$'],
      correctAnswer: 0,
      explanation: 'Constant velocity requires zero net force: $q\\vec{E} + q\\vec{v} \\times \\vec{B} = 0$, so $q\\vec{E} = -q\\vec{v} \\times \\vec{B}$. If $\\vec{v}$ were parallel to $\\vec{B}$, the electric force would be unbalanced and the velocity would change.'
    },
    {
      id: 'magf7-applications',
      type: 'text' as const,
      content: `### Applications in Modern Physics

**1. Particle Accelerators and Spectrometers**
Charged particles are bent by magnetic fields and sped up by electric fields. Because $r = mv/(qB)$, a stronger field is needed to bend faster or heavier particles around the same curve, and a velocity selector followed by a deflecting field sorts ions by mass.

**2. Hall Probes**
A Hall probe measures $B$ by reading the Hall voltage $V_H = IB/(net)$ across a thin conducting strip carrying a known current.

**3. Aurora Borealis**

Charged particles from the solar wind spiral along Earth's magnetic field lines ($v_\\parallel$ carries them toward the poles; $v_\\perp$ gives helical motion). They excite atmospheric molecules, producing light.`
    },
    {
      id: 'magf7-mcq2',
      type: 'mcq' as const,
      question: 'An electron with kinetic energy $K$ enters a region of uniform $\\vec{B}$. If the kinetic energy is quadrupled, the cyclotron radius:',
      options: ['Doubles', 'Quadruples', 'Increases by $\\sqrt{2}$', 'Stays the same'],
      correctAnswer: 0,
      explanation: '$r = mv/(qB)$. $K = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2K/m}$. $r = m\\sqrt{2K/m}/(qB) = \\sqrt{2mK}/(qB)$. $r \\propto \\sqrt{K}$. Quadrupling $K$ doubles $r$.'
    },
    {
      id: 'magf7-mcq3',
      type: 'mcq' as const,
      question: 'A $0.25$ m straight wire carrying $8.0$ A makes a $30°$ angle with a uniform $0.50$ T field. The magnitude of the magnetic force on it is:',
      options: ['0.50 N', '1.0 N', '0.87 N', '0.25 N'],
      correctAnswer: 0,
      explanation: '$F = BIL\\sin\\theta = (0.50)(8.0)(0.25)\\sin 30° = 1.0 \\times 0.5 = 0.50$ N. Using $\\cos 30°$ gives $0.87$ N, and ignoring the angle gives $1.0$ N.'
    },
    {
      id: 'magf7-mcq4',
      type: 'mcq' as const,
      question: 'Two ions with the same charge but masses $m$ and $2m$ enter a mass spectrometer after passing through a velocity selector. The ratio of their deflection radii is:',
      options: ['$1:2$', '$1:\\sqrt{2}$', '$1:4$', '$1:1$'],
      correctAnswer: 0,
      explanation: 'After velocity selector, both have the same $v$. $r = mv/(qB)$, so $r \\propto m$. Ratio = $m:2m = 1:2$.'
    },
    {
      id: 'magf7-mcq5',
      type: 'mcq' as const,
      question: 'A proton ($m = 1.67 \\times 10^{-27}$ kg) circles with radius $0.20$ m in a uniform $0.50$ T field. The period of its motion is:',
      options: ['$1.3 \\times 10^{-7}$ s', '$6.6 \\times 10^{-8}$ s', '$2.6 \\times 10^{-7}$ s', '$2.1 \\times 10^{-8}$ s'],
      correctAnswer: 0,
      explanation: '$T = 2\\pi m/(qB) = 2\\pi(1.67 \\times 10^{-27})/((1.6 \\times 10^{-19})(0.50)) \\approx 1.3 \\times 10^{-7}$ s. The radius is not needed: the period does not depend on the speed or radius. Leaving out the $2\\pi$ gives $2.1 \\times 10^{-8}$ s.'
    },
    {
      id: 'magf7-completion',
      type: 'text' as const,
      content: `### 🎉 Topic Complete!

You've mastered **Magnetic Forces** for AP Physics C: E&M:

| Part | Topic | Status |
|:---:|:---:|:---:|
| 1 | Lorentz force | ✅ |
| 2 | Circular motion in B fields | ✅ |
| 3 | Mass spectrometer | ✅ |
| 4 | Force on current-carrying wire | ✅ |
| 5 | Moving charges as sources; combined fields | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key takeaway:** The cross product is central to all magnetic force problems. Master the determinant method, understand that magnetic forces do no work, and remember that closed loops in uniform fields have zero net force.`
    }
  ]
};
