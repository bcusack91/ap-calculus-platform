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
| Magnetic moment | $\\vec{\\mu} = NIA\\hat{n}$ |
| Torque | $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$ |
| Dipole energy | $U = -\\vec{\\mu} \\cdot \\vec{B}$ |
| Hall voltage | $V_H = IB/(net)$ |`
    },
    {
      id: 'magf7-mcq1',
      type: 'mcq' as const,
      question: 'A charged particle enters a region with both $\\vec{E}$ and $\\vec{B}$ fields. If it moves in a straight line, which must be true?',
      options: ['$q\\vec{E} = -q\\vec{v} \\times \\vec{B}$ (electric and magnetic forces balance)', 'The particle is neutral', '$\\vec{E} = 0$', '$\\vec{B} = 0$'],
      correctAnswer: 0,
      explanation: 'Straight-line motion requires zero net force: $q\\vec{E} + q\\vec{v} \\times \\vec{B} = 0$, so $q\\vec{E} = -q\\vec{v} \\times \\vec{B}$.'
    },
    {
      id: 'magf7-applications',
      type: 'text' as const,
      content: `### Applications in Modern Physics

**1. MRI (Magnetic Resonance Imaging)**

Protons in hydrogen atoms precess at the **Larmor frequency**:
$$f = \\frac{\\gamma B}{2\\pi}$$
where $\\gamma = qB/(2m)$ for a classical magnetic moment. Varying $B$ with gradient coils selects spatial slices.

**2. Particle Accelerators**

Charged particles are bent by magnetic fields and accelerated by electric fields. The **magnetic rigidity** is:
$$B\\rho = \\frac{p}{q} = \\frac{mv}{q} \\quad (\\text{or } \\frac{\\gamma mv}{q} \\text{ relativistically})$$

**3. Aurora Borealis**

Charged particles from the solar wind spiral along Earth's magnetic field lines ($v_\\parallel$ carries them toward the poles; $v_\\perp$ gives helical motion). They excite atmospheric molecules, producing light.

**4. Electric Motors**

A current loop in a magnetic field experiences torque $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$. A commutator reverses current each half-turn to maintain continuous rotation.`
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
      question: 'A DC motor coil has 200 turns, area $50$ $cm^{2}$, carries 3 A in a 0.8 T field. At the position of maximum torque, $\\tau$ is:',
      options: ['2.4 N·m', '1.2 N·m', '4.8 N·m', '0.24 N·m'],
      correctAnswer: 0,
      explanation: '$\\tau_{\\max} = NIAB = 200 \\times 3 \\times 50 \\times 10^{-4} \\times 0.8 = 200 \\times 3 \\times 0.004 = 2.4$ N·m.'
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
      question: 'The potential energy of a magnetic dipole is $-0.3$ J when aligned with $\\vec{B}$, and $+0.3$ J when anti-aligned. The torque at $\\theta = 30°$ is:',
      options: ['0.15 N·m', '0.3 N·m', '0.26 N·m', '0.6 N·m'],
      correctAnswer: 0,
      explanation: '$U = -\\mu B \\cos\\theta$. $\\mu B = 0.3$ J (from $U_{\\theta=0} = -0.3$). $\\tau = \\mu B \\sin 30° = 0.3 \\times 0.5 = 0.15$ N·m.'
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
| 5 | Torque on current loop | ✅ |
| 6 | Problem-solving workshop | ✅ |
| 7 | Review & applications | ✅ |

> **Key takeaway:** The cross product is central to all magnetic force problems. Master the determinant method, understand that magnetic forces do no work, and remember that closed loops in uniform fields have zero net force but generally nonzero torque.`
    }
  ]
};
