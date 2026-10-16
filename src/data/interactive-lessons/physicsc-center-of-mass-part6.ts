export const physCCOMPart6Data = {
  topicSlug: "center-of-mass-physics-c",
  sections: [
    {
      id: 'com6-intro',
      type: 'text' as const,
      content: `# Center of Mass — Problem-Solving Workshop

**Part 6 of 7**

### Strategy Guide

| Step | Action |
|:---|:---|
| 1 | Identify the system and all masses |
| 2 | Choose coordinates (use symmetry!) |
| 3 | Determine if the problem is discrete or continuous |
| 4 | For $\\vec{F}_{\\text{ext}} = 0$: use $\\vec{v}_{\\text{cm}} = \\text{const}$ |
| 5 | For integration: choose $dm$ wisely ($\\lambda dx$, $\\sigma dA$, $\\rho dV$) |
| 6 | Check: does the COM position make physical sense? |`
    },
    {
      id: 'com6-mcq1',
      type: 'mcq' as const,
      question: 'A cone of height $h$ and base radius $R$ has uniform density. The COM is at height (from base):',
      options: ['$h/4$', '$h/3$', '$h/2$', '$3h/4$'],
      correctAnswer: 0,
      explanation: 'Using disk slicing from apex ($z=0$) to base ($z=h$): radius at height $z$ is $Rz/h$. $dm = \\rho \\pi (Rz/h)^2 dz$. $z_{\\text{cm}} = \\frac{\\int_0^h z \\cdot z^2 dz}{\\int_0^h z^2 dz} = \\frac{h^4/4}{h^3/3} = 3h/4$ from apex $= h/4$ from base.'
    },
    {
      id: 'com6-prob1',
      type: 'text' as const,
      content: `### Problem 1: A Rod Whose Density Grows Linearly

A rod lies from $x = 0$ to $x = L$ with $\\lambda(x) = \\lambda_0\\left(1 + \\dfrac{x}{L}\\right)$, so the right end is twice as dense as the left. Find $x_{\\text{cm}}$.

**Solution:**

Total mass:

$$M = \\int_0^L \\lambda_0\\left(1 + \\frac{x}{L}\\right)dx = \\lambda_0\\left(L + \\frac{L}{2}\\right) = \\frac{3}{2}\\lambda_0 L$$

First moment:

$$\\int_0^L x\\,\\lambda_0\\left(1 + \\frac{x}{L}\\right)dx = \\lambda_0\\left(\\frac{L^2}{2} + \\frac{L^2}{3}\\right) = \\frac{5}{6}\\lambda_0 L^2$$

$$x_{\\text{cm}} = \\frac{\\frac{5}{6}\\lambda_0 L^2}{\\frac{3}{2}\\lambda_0 L} = \\frac{5L}{9} \\approx 0.56L$$

The COM sits just past the midpoint, toward the denser end, as expected.`
    },
    {
      id: 'com6-mcq2',
      type: 'mcq' as const,
      question: 'A rod of length $L$ has density $\\lambda(x) = \\lambda_0(1 + x/L)$ from $x=0$ to $x=L$. Its total mass is:',
      options: ['$3\\lambda_0 L/2$', '$\\lambda_0 L$', '$2\\lambda_0 L$', '$\\lambda_0 L/2$'],
      correctAnswer: 0,
      explanation: '$M = \\int_0^L \\lambda_0(1+x/L)dx = \\lambda_0[x + x^2/(2L)]_0^L = \\lambda_0(L + L/2) = 3\\lambda_0 L/2$.'
    },
    {
      id: 'com6-prob2',
      type: 'text' as const,
      content: `### Problem 2: Collision + COM

A 3 kg block moving at $4$ m/s to the right collides elastically with a 1 kg block at rest.

**In the COM frame:**

$$v_{\\text{cm}} = \\frac{3(4) + 1(0)}{4} = 3 \\text{ m/s}$$

COM frame velocities:
- $v_1' = 4 - 3 = 1$ m/s (right)
- $v_2' = 0 - 3 = -3$ m/s (left)

Check: $3(1) + 1(-3) = 0$ ✓

After elastic collision (reverse in COM frame):
- $v_1'^{\\text{after}} = -1$ m/s
- $v_2'^{\\text{after}} = +3$ m/s

Back to lab frame:
- $v_1^{\\text{after}} = -1 + 3 = 2$ m/s
- $v_2^{\\text{after}} = 3 + 3 = 6$ m/s

**Verify:** $3(2) + 1(6) = 12 = 3(4) + 1(0)$ ✓ and KE is conserved ✓`
    },
    {
      id: 'com6-mcq3',
      type: 'mcq' as const,
      question: 'A 5 kg ball moving at $8$ m/s collides elastically with a 3 kg ball at rest. The speed of the 5 kg ball after the collision is:',
      options: ['$2$ m/s', '$5$ m/s', '$10$ m/s', '$4$ m/s'],
      correctAnswer: 0,
      explanation: '$v_{\\text{cm}} = 5(8)/8 = 5$ m/s. In the COM frame the 5 kg ball moves at $+3$ m/s and reverses to $-3$ m/s, so in the lab it moves at $-3 + 5 = 2$ m/s, matching $\\frac{m_1-m_2}{m_1+m_2}v_1 = \\frac{2}{8}(8) = 2$ m/s. The 3 kg ball leaves at 10 m/s.'
    },
    {
      id: 'com6-mcq4',
      type: 'mcq' as const,
      question: 'A uniform chain of length $L$ and mass $M$ hangs from one end. The height of its center of mass above the bottom is:',
      options: ['$L/2$', '$L/3$', '$2L/3$', '$L/4$'],
      correctAnswer: 0,
      explanation: 'A uniform chain hanging vertically has its COM at the midpoint of its length, height $L/2$ above the bottom end. $y_{\\text{cm}} = \\frac{1}{M}\\int_0^L y \\frac{M}{L}dy = L/2$.'
    },
    {
      id: 'com6-summary',
      type: 'text' as const,
      content: `## Workshop Takeaways

| Problem Type | Key Technique |
|:---|:---|
| Non-uniform rod | $x_{\\text{cm}} = \\frac{\\int x\\lambda(x)dx}{\\int \\lambda(x)dx}$ |
| 2D shapes | Slice into strips: $dm = \\sigma \\times$ (strip area) |
| Collisions | Transform to COM frame, reverse, transform back |
| Missing piece | Negative-mass subtraction |
| Solids of revolution | Use disk/shell slicing |

> **Next:** Part 7 — Comprehensive review & applications.`
    }
  ]
};
