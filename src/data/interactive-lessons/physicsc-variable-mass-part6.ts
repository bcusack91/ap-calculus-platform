export const physCVarMassPart6Data = {
  topicSlug: "variable-mass-physics-c",
  sections: [
    {
      id: 'vm6-intro',
      type: 'text' as const,
      content: `# Variable Mass — Problem-Solving Workshop

**Part 6 of 7**

### Strategy for Variable-Mass Problems

| Step | Action |
|:---|:---|
| 1 | Define the system and determine if mass is gained or lost |
| 2 | Identify $v_{\\text{rel}}$ — the velocity of entering/leaving mass relative to the system |
| 3 | Write $F_{\\text{ext}} = m(dv/dt) + v_{\\text{rel}}(dm/dt)$ |
| 4 | Choose the right variable (time, position, or mass) for integration |
| 5 | Apply initial conditions and solve |
| 6 | Check limiting cases |`
    },
    {
      id: 'vm6-mcq1',
      type: 'mcq' as const,
      question: 'A rocket in deep space (no gravity) has $m_0 = 1000$ kg, $v_e = 4000$ m/s, and burns $500$ kg of fuel. Its final speed (starting from rest) is:',
      options: ['$2773$ m/s', '$4000$ m/s', '$2000$ m/s', '$1000$ m/s'],
      correctAnswer: 0,
      explanation: '$\\Delta v = v_e \\ln(m_0/m_f) = 4000 \\ln(1000/500) = 4000 \\ln 2 = 4000(0.693) = 2773$ m/s.'
    },
    {
      id: 'vm6-prob1',
      type: 'text' as const,
      content: `### Problem 1: Leaking Sand Cart

A cart of mass $M$ carries sand of mass $m_0$. It moves at speed $v_0$ on a frictionless track. Sand leaks out at a constant rate $\\alpha$ through a hole in the bottom.

**Question:** Find the speed of the cart as a function of time.

**Solution:**

The sand drops straight down — it leaves with the same horizontal velocity as the cart. Therefore $v_{\\text{rel}} = 0$ in the horizontal direction.

$$F_{\\text{ext}} = 0, \\quad v_{\\text{rel}} = 0$$

$$m\\frac{dv}{dt} = 0 \\implies \\frac{dv}{dt} = 0$$

$$\\boxed{v(t) = v_0}$$

**The speed doesn't change!** This is often counterintuitive. Since the sand leaves with the cart's velocity, no horizontal momentum is transferred. The momentum of the (cart + remaining sand) system is not conserved, but the total momentum (including fallen sand) is.`
    },
    {
      id: 'vm6-mcq2',
      type: 'mcq' as const,
      question: 'Sand leaks from a moving cart through a hole in the bottom. The cart (on a frictionless surface):',
      options: [
        'Maintains constant speed',
        'Speeds up',
        'Slows down',
        'Depends on the leak rate'
      ],
      correctAnswer: 0,
      explanation: 'The sand leaves with the same velocity as the cart ($v_{\\text{rel}} = 0$), so there is no thrust-like reaction. The remaining cart+sand system keeps the same velocity.'
    },
    {
      id: 'vm6-prob2',
      type: 'text' as const,
      content: `### Problem 2: Rocket with Drag

A rocket in an atmosphere experiences drag $F_D = -bv$ in addition to thrust. In free space (no gravity):

$$m\\frac{dv}{dt} = v_e\\dot{m} - bv$$

With constant $\\dot{m}$ and $m = m_0 - \\dot{m}t$:

$$\\frac{dv}{dt} = \\frac{v_e \\dot{m}}{m_0 - \\dot{m}t} - \\frac{b v}{m_0 - \\dot{m} t}$$

This is a first-order linear ODE. Using $m = m_0 - \\dot{m}t$, $dm = -\\dot{m}dt$:

$$\\frac{dv}{dm} = \\frac{-v_e}{m} + \\frac{bv}{\\dot{m}\\,m}$$

$$\\frac{dv}{dm} - \\frac{b}{\\dot{m}\\,m}v = \\frac{-v_e}{m}$$

This can be solved with an integrating factor $\\mu = m^{-b/\\dot{m}}$.

For the special case $b = 0$: reduces to the Tsiolkovsky equation.`
    },
    {
      id: 'vm6-mcq3',
      type: 'mcq' as const,
      question: 'A fire hose sprays water at $20$ kg/s with nozzle velocity $30$ m/s against a wall. Assuming the water splashes and runs down (doesn\'t bounce back), the force on the wall is:',
      options: ['$600$ N', '$300$ N', '$1200$ N', '$10$ N'],
      correctAnswer: 0,
      explanation: 'The wall stops the water\'s horizontal momentum. $F = v(dm/dt) = 30 \\times 20 = 600$ N. If the water bounced back elastically, the force would be $1200$ N (double).'
    },
    {
      id: 'vm6-mcq4',
      type: 'mcq' as const,
      question: 'A 2000 kg rocket in free space ($g = 0$) has $v_e = 3000$ m/s. It needs $\\Delta v = 6000$ m/s. The mass of fuel required is:',
      options: ['$2000(e^2 - 1) \\approx 12{,}778$ kg', '$2000e^2 \\approx 14{,}778$ kg', '$4000$ kg', '$12{,}000$ kg'],
      correctAnswer: 0,
      explanation: '$\\Delta v = v_e \\ln(m_0/m_f)$. $6000 = 3000 \\ln(m_0/2000)$. $\\ln(m_0/2000) = 2$. $m_0 = 2000e^2$. Fuel mass $= m_0 - m_f = 2000e^2 - 2000 = 2000(e^2 - 1) \\approx 12{,}778$ kg.'
    },
    {
      id: 'vm6-summary',
      type: 'text' as const,
      content: `## Workshop Takeaways

| Scenario | Key Insight |
|:---|:---|
| Sand leaking (same $v$) | $v_{\\text{rel}} = 0$ → no thrust → $v$ = const |
| Sand thrown backward | $v_{\\text{rel}} \\neq 0$ → thrust → cart accelerates |
| Water hitting wall | $F = v(dm/dt)$ — momentum flux |
| Rocket with drag | First-order linear ODE with integrating factor |
| Always check | Does $v_{\\text{rel}} = 0$ or not? |

> **Next:** Part 7 — Comprehensive review.`
    }
  ]
};
