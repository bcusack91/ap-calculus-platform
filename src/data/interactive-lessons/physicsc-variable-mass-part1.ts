export const physCVarMassPart1Data = {
  topicSlug: "variable-mass-physics-c",
  sections: [
    {
      id: 'vm1-intro',
      type: 'text' as const,
      content: `# Rocket Equation Derivation

**Part 1 of 7**

When a system's mass changes with time (e.g., a rocket expelling fuel), Newton's second law must be applied carefully.

### The Setup

Consider a rocket of mass $m(t)$ moving at velocity $v(t)$. In a small time $dt$:
- The rocket expels mass $|dm|$ (where $dm < 0$) at exhaust velocity $v_e$ relative to the rocket
- The rocket's mass changes to $m + dm$ and velocity to $v + dv$

### Momentum Conservation

At time $t$: total momentum $= mv$

At time $t + dt$: 
$$p = (m + dm)(v + dv) + |dm|(v - v_e)$$

Since $|dm| = -dm$ (dm is negative for mass loss):

$$p = (m+dm)(v+dv) + (-dm)(v-v_e)$$

Setting $p(t+dt) = p(t)$ (no external forces):

$$mv + m\\,dv + v\\,dm + dm\\,dv - v\\,dm + v_e\\,dm = mv$$

Dropping the $dm\\,dv$ term (second order):

$$m\\,dv = -v_e\\,dm$$`
    },
    {
      id: 'vm1-mcq1',
      type: 'mcq' as const,
      question: 'In the rocket equation derivation, why do we drop the $dm \\cdot dv$ term?',
      options: [
        'It is a second-order infinitesimal (product of two infinitesimals)',
        'It equals zero by Newton\'s third law',
        'It is absorbed into the exhaust velocity',
        'It violates conservation of energy'
      ],
      correctAnswer: 0,
      explanation: 'The term $dm \\cdot dv$ is the product of two infinitesimally small quantities. In the limit $dt \\to 0$, it vanishes faster than the first-order terms $m\\,dv$ and $v_e\\,dm$.'
    },
    {
      id: 'vm1-eom',
      type: 'text' as const,
      content: `## The Variable-Mass Equation of Motion

Dividing $m\\,dv = -v_e\\,dm$ by $dt$:

$$m\\frac{dv}{dt} = -v_e \\frac{dm}{dt}$$

With external forces (such as gravity):

$$\\boxed{m\\frac{dv}{dt} = -v_e\\frac{dm}{dt} + F_{\\text{ext}}}$$

This is the **generalized rocket equation**.

### Key Terms

| Symbol | Meaning |
|:---|:---|
| $m(t)$ | Instantaneous mass of rocket + remaining fuel |
| $v_e$ | Exhaust speed relative to rocket (constant for ideal rocket) |
| $dm/dt$ | Rate of mass change (negative for mass ejection) |
| $-v_e(dm/dt)$ | Thrust force (positive since $dm/dt < 0$) |

### Sign Convention
- $dm/dt < 0$ → mass is being **lost** (rocket, leaking sand)
- $dm/dt > 0$ → mass is being **gained** (catching rain, accreting)
- The term $-v_e\\,dm/dt$ is called the **thrust** and is always in the direction of $v_e$ (opposite the exhaust direction)`
    },
    {
      id: 'vm1-mcq2',
      type: 'mcq' as const,
      question: 'A rocket has mass $m = 1000$ kg and exhaust speed $v_e = 3000$ m/s. If it burns fuel at $5$ kg/s, the thrust is:',
      options: ['$15{,}000$ N', '$3{,}000$ N', '$5{,}000$ N', '$600$ N'],
      correctAnswer: 0,
      explanation: 'Thrust $= -v_e \\frac{dm}{dt} = -(3000)(-5) = 15{,}000$ N. The negative signs cancel because $dm/dt$ is negative for mass loss.'
    },
    {
      id: 'vm1-gravity',
      type: 'text' as const,
      content: `## Rocket Under Gravity

For a vertical launch with gravity:

$$m\\frac{dv}{dt} = -v_e\\frac{dm}{dt} - mg$$

### Liftoff Condition

For the rocket to leave the pad, thrust must exceed weight:

$$|v_e \\frac{dm}{dt}| > mg$$

$$\\left|\\frac{dm}{dt}\\right| > \\frac{mg}{v_e}$$

### Worked Example

A rocket ($m_0 = 5000$ kg, fuel mass = $4000$ kg) has $v_e = 2500$ m/s. Minimum burn rate for liftoff:

$$\\left|\\frac{dm}{dt}\\right|_{\\min} = \\frac{m_0 g}{v_e} = \\frac{5000 \\times 9.8}{2500} = 19.6 \\text{ kg/s}$$`
    },
    {
      id: 'vm1-mcq3',
      type: 'mcq' as const,
      question: 'A rocket at rest on the launch pad has mass $m_0$ and exhaust velocity $v_e$. What is the minimum fuel burn rate $|dm/dt|$ for liftoff?',
      options: ['$m_0 g / v_e$', '$m_0 v_e / g$', '$m_0 g$', '$v_e / g$'],
      correctAnswer: 0,
      explanation: 'At liftoff, thrust = weight: $v_e |dm/dt| = m_0 g$, so $|dm/dt| = m_0 g / v_e$.'
    },
    {
      id: 'vm1-mcq4',
      type: 'mcq' as const,
      question: 'The thrust of a rocket depends on:',
      options: [
        'Both exhaust velocity and mass flow rate',
        'Only the exhaust velocity',
        'Only the mass flow rate',
        'The total mass of the rocket'
      ],
      correctAnswer: 0,
      explanation: 'Thrust $= v_e |dm/dt|$. It depends on both how fast the exhaust moves ($v_e$) and how much mass is ejected per second ($|dm/dt|$).'
    },
    {
      id: 'vm1-summary',
      type: 'text' as const,
      content: `## Summary

| Concept | Expression |
|:---|:---|
| Rocket equation (no gravity) | $m\\frac{dv}{dt} = -v_e \\frac{dm}{dt}$ |
| With external forces | $m\\frac{dv}{dt} = -v_e\\frac{dm}{dt} + F_{\\text{ext}}$ |
| Thrust | $F_{\\text{thrust}} = v_e\\left|\\frac{dm}{dt}\\right|$ |
| Liftoff condition | $v_e\\left|\\frac{dm}{dt}\\right| > m_0 g$ |

> **Next:** Part 2 — The Tsiolkovsky rocket equation (integrated form).`
    }
  ]
};
