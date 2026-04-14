export const physCEMMagForcePart6Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — AP Physics C: E&M Style Problems**

### Strategy for Magnetic Force Problems

1. **Identify** the charged object: single particle, wire, or loop.
2. **Write** the appropriate force law:
   - Particle: $\\vec{F} = q\\vec{v} \\times \\vec{B}$
   - Wire: $\\vec{F} = I\\vec{L} \\times \\vec{B}$ or $d\\vec{F} = Id\\vec{\\ell} \\times \\vec{B}$
   - Dipole: $\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$
3. **Evaluate** cross products carefully using the determinant method.
4. **Apply** Newton's second law or energy methods as needed.`
    },
    {
      id: 'magf6-mcq1',
      type: 'mcq' as const,
      question: 'A proton and an alpha particle ($q = 2e$, $m = 4m_p$) enter the same magnetic field with the same kinetic energy. The ratio of their cyclotron radii $r_\\alpha/r_p$ is:',
      options: ['$1$', '$2$', '$1/2$', '$\\sqrt{2}$'],
      correctAnswer: 0,
      explanation: '$r = mv/(qB)$. Same KE: $\\frac{1}{2}mv^2 = K$, so $mv = \\sqrt{2mK}$. $r = \\sqrt{2mK}/(qB)$. $r_\\alpha/r_p = \\sqrt{4m_p/m_p} \\cdot (e/2e) = 2 \\times (1/2) = 1$. They trace circles of equal radius!'
    },
    {
      id: 'magf6-problem2',
      type: 'text' as const,
      content: `### Worked Example: Hall Effect

A conducting slab (width $w$, thickness $t$) carries current $I$ in the $+x$ direction through a field $\\vec{B} = B\\hat{z}$.

**Step 1:** Current carriers (electrons) drift with $\\vec{v}_d = -v_d\\hat{x}$.

**Step 2:** Magnetic force on electrons:
$$\\vec{F} = (-e)(-v_d\\hat{x}) \\times (B\\hat{z}) = ev_dB(\\hat{x} \\times \\hat{z}) = -ev_dB\\hat{y}$$

Electrons accumulate on the $-y$ face, creating a transverse electric field.

**Step 3:** Equilibrium: $eE_H = ev_dB$, so $E_H = v_dB$.

**Step 4:** Hall voltage:
$$V_H = E_H w = v_d B w$$

Since $I = nev_d(wt)$, we get $v_d = I/(newt)$:

$$V_H = \\frac{IB}{net} = \\frac{R_H IB}{t}$$

where $R_H = 1/(ne)$ is the **Hall coefficient**.`
    },
    {
      id: 'magf6-mcq2',
      type: 'mcq' as const,
      question: 'A Hall probe has carrier density $n = 10^{29}$ m$^{-3}$, thickness $t = 1$ mm, carries $I = 10$ A in a $B = 0.5$ T field. The Hall voltage is:',
      options: ['$\\approx 3.1 \\times 10^{-7}$ V', '$\\approx 3.1 \\times 10^{-5}$ V', '$\\approx 3.1 \\times 10^{-3}$ V', '$\\approx 0.5$ V'],
      correctAnswer: 0,
      explanation: '$V_H = IB/(net) = (10)(0.5)/((10^{29})(1.6 \\times 10^{-19})(10^{-3})) = 5/(1.6 \\times 10^{7}) \\approx 3.1 \\times 10^{-7}$ V.'
    },
    {
      id: 'magf6-mcq3',
      type: 'mcq' as const,
      question: 'An electron moves in a circle of radius $R$ in a magnetic field $B$. Its angular momentum is:',
      options: ['$L = qBR^2$', '$L = qBR$', '$L = mvR = qBR^2/2$', '$L = 2qBR^2$'],
      correctAnswer: 0,
      explanation: '$r = mv/(qB)$ gives $mv = qBR$. $L = mvR = qBR \\cdot R = qBR^2$.'
    },
    {
      id: 'magf6-mcq4',
      type: 'mcq' as const,
      question: 'A current loop has $\\vec{\\mu} = 0.1\\hat{x}$ A·m² in a field $\\vec{B} = 0.5\\hat{x} + 0.3\\hat{y}$ T. The torque on the loop is:',
      options: ['$0.03\\hat{z}$ N·m', '$-0.03\\hat{z}$ N·m', '$0.05\\hat{z}$ N·m', '$0$'],
      correctAnswer: 0,
      explanation: '$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B} = 0.1\\hat{x} \\times (0.5\\hat{x} + 0.3\\hat{y}) = 0.1(0.5)(\\hat{x}\\times\\hat{x}) + 0.1(0.3)(\\hat{x}\\times\\hat{y}) = 0 + 0.03\\hat{z}$.'
    },
    {
      id: 'magf6-mcq5',
      type: 'mcq' as const,
      question: 'A wire carries current $I$ along a parabolic path $y = x^2$ from $(0,0)$ to $(1,1)$ in a uniform field $\\vec{B} = B\\hat{z}$. The net force on the wire is the same as on a straight wire from $(0,0)$ to $(1,1)$. That force magnitude is:',
      options: ['$IB\\sqrt{2}$', '$IB$', '$2IB$', '$IB/\\sqrt{2}$'],
      correctAnswer: 0,
      explanation: 'In uniform $\\vec{B}$, $\\vec{F} = I\\vec{L}_{\\text{net}} \\times \\vec{B}$ where $\\vec{L}_{\\text{net}} = \\hat{x} + \\hat{y}$. $|\\vec{L}| = \\sqrt{2}$. $F = IB\\sqrt{2}\\sin 90° = IB\\sqrt{2}$.'
    },
    {
      id: 'magf6-summary',
      type: 'text' as const,
      content: `### Workshop Summary

| Problem Type | Key Approach |
|:---:|:---:|
| Same KE comparison | $r \\propto \\sqrt{m}/q$ |
| Hall effect | $V_H = IB/(net)$ |
| Angular momentum | $L = qBR^2$ |
| Curved wire, uniform $\\vec{B}$ | Use $\\vec{L}_{\\text{net}}$ |

> **Next up:** Review and applications — Part 7.`
    }
  ]
};
