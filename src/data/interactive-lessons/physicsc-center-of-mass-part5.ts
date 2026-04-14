export const physCCOMPart5Data = {
  topicSlug: "center-of-mass-physics-c",
  sections: [
    {
      id: 'com5-intro',
      type: 'text' as const,
      content: `# COM Motion Under External Forces

**Part 5 of 7**

Newton's second law for the center of mass:

$$\\vec{F}_{\\text{ext}} = M\\vec{a}_{\\text{cm}} = M\\frac{d\\vec{v}_{\\text{cm}}}{dt} = \\frac{d\\vec{p}_{\\text{total}}}{dt}$$

This is the most powerful consequence of the COM concept:

> No matter how complex the internal interactions, the COM moves as if it were a single point particle of mass $M$ subject to the net external force.

### Applications
- A wrench tossed in the air: the COM follows a parabola even though the wrench rotates
- A firework in flight: the COM continues on the parabolic trajectory after explosion
- A binary star system: the COM follows the gravitational trajectory of the total mass`
    },
    {
      id: 'com5-mcq1',
      type: 'mcq' as const,
      question: 'A 2 kg ball and a 3 kg ball are connected by a spring and tossed upward together. The acceleration of their center of mass while in the air (ignoring drag) is:',
      options: ['$g$ downward', 'Less than $g$ downward', 'Zero', 'Depends on the spring constant'],
      correctAnswer: 0,
      explanation: 'The spring force is internal. The only external force is gravity: $\\vec{F}_{\\text{ext}} = -Mg\\hat{j}$. So $\\vec{a}_{\\text{cm}} = -g\\hat{j}$, regardless of the spring.'
    },
    {
      id: 'com5-projectile',
      type: 'text' as const,
      content: `## Projectile Breakup

### Worked Example

A projectile is launched at $45°$ with speed $v_0$. At the top of its trajectory, it breaks into two equal pieces. One piece falls straight down. Where does the other piece land?

**Solution:**

**Step 1:** Range of intact projectile: $R = v_0^2 \\sin(90°)/g = v_0^2/g$

**Step 2:** At the peak, the projectile is at $x = R/2$, $y = R/4$, with velocity $(v_0/\\sqrt{2}, 0)$.

**Step 3:** The COM must continue the original parabolic path and land at $x = R$.

**Step 4:** Piece 1 ($m/2$) falls straight down from $x = R/2$. By COM condition at landing time:

$$R = \\frac{(m/2)(R/2) + (m/2)(x_2)}{m}$$

$$x_2 = 2R - R/2 = \\frac{3R}{2} = \\frac{3v_0^2}{2g}$$

The second piece lands at $3R/2$ from the launch point — 50% farther than the original range.`
    },
    {
      id: 'com5-mcq2',
      type: 'mcq' as const,
      question: 'A shell is at the peak of its trajectory (horizontal velocity $v$, zero vertical velocity) when it explodes into two equal masses. One piece has zero velocity. The other piece\'s speed is:',
      options: ['$2v$', '$v$', '$v/2$', '$4v$'],
      correctAnswer: 0,
      explanation: 'Conservation of momentum: $Mv = (M/2)(0) + (M/2)v_2$, so $v_2 = 2v$.'
    },
    {
      id: 'com5-atwood',
      type: 'text' as const,
      content: `## COM of an Atwood Machine

Consider an Atwood machine with masses $m_1 > m_2$, connected by a massless string over a frictionless pulley.

The acceleration: $a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$

**COM acceleration:** Mass $m_1$ accelerates down, $m_2$ accelerates up, both with magnitude $a$.

$$a_{\\text{cm}} = \\frac{m_1 a_{\\downarrow} + m_2 a_{\\uparrow}}{m_1 + m_2} = \\frac{m_1(-a) + m_2(a)}{m_1+m_2}$$

Wait — actually $m_1$ goes down ($-a$) and $m_2$ goes up ($+a$)... but the net external force is $(m_1 - m_2)g$ downward while the string/pulley system is internal.

$$a_{\\text{cm}} = \\frac{(m_1 - m_2)g - 0}{m_1 + m_2}$$

Actually: the constraint forces (tension, normal from pulley) contribute externally via the pulley support. The COM accelerates downward at:

$$a_{\\text{cm}} = \\frac{(m_1 - m_2)^2 g}{(m_1+m_2)^2}$$`
    },
    {
      id: 'com5-mcq3',
      type: 'mcq' as const,
      question: 'A boat of mass $M$ (length $L$) is at rest on frictionless water. A person of mass $m$ walks from one end to the other. How far does the boat move?',
      options: ['$mL/(m+M)$', '$ML/(m+M)$', '$L/2$', '$L$'],
      correctAnswer: 0,
      explanation: 'No external horizontal forces, so $x_{\\text{cm}}$ is constant. Let the boat move distance $d$ opposite the person. The person moves $(L-d)$ relative to ground. $m(L-d) = Md$ (momentum conservation). $d = mL/(m+M)$.'
    },
    {
      id: 'com5-mcq4',
      type: 'mcq' as const,
      question: 'A man stands on one end of a 200 kg boat that is 10 m long. He walks 6 m toward the other end. The man has mass 50 kg. How far does the boat move (on frictionless water)?',
      options: ['$1.2$ m', '$2.4$ m', '$3$ m', '$6$ m'],
      correctAnswer: 0,
      explanation: 'Let boat displacement = $d$. Person moves $(6-d)$ relative to ground (same direction). COM fixed: $50(6-d) = 200d$. $300 - 50d = 200d$. $250d = 300$. $d = 1.2$ m.'
    },
    {
      id: 'com5-summary',
      type: 'text' as const,
      content: `## Summary

| Scenario | COM Behavior |
|:---|:---|
| Only gravity | $\\vec{a}_{\\text{cm}} = \\vec{g}$ (parabolic path) |
| No external forces | $\\vec{v}_{\\text{cm}} = \\text{const}$ |
| Breakup/explosion | COM continues original trajectory |
| Person on boat | COM stays fixed; boat shifts |

> **Next:** Part 6 — Problem-solving workshop.`
    }
  ]
};
