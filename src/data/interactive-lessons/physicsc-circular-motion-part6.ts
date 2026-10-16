export const physCCircMotionPart6Data = {
  topicSlug: "circular-motion-physics-c",
  sections: [
    {
      id: 'cm6-intro',
      type: 'text' as const,
      content: `# Problem-Solving Workshop

**Part 6 of 7 — Circular Motion**

### Strategy for Circular Motion Problems

| Step | Action |
|:---:|:---:|
| 1 | Identify the circular path and radius $r$ |
| 2 | Draw FBD at the specified point |
| 3 | Establish radial direction (toward center) and tangential direction |
| 4 | Apply $\\sum F_r = mv^2/r$ (radial) |
| 5 | Apply $\\sum F_t = ma_t$ (tangential, if non-uniform) |
| 6 | Use energy conservation to relate speeds at different positions |`
    },
    {
      id: 'cm6-mcq1',
      type: 'mcq' as const,
      question: 'A 1000 kg car rounds an unbanked curve of radius 80 m at 25 m/s. If $\\mu_s = 0.9$, what is the ratio of the required centripetal force to the maximum static friction? ($g = 10$ $m/s^{2}$)',
      options: [
        '$\\approx 0.87$ (the car is close to skidding)',
        '$\\approx 0.50$ (well within the limit)',
        '$\\approx 1.1$ (the car is skidding)',
        '$\\approx 0.35$ (far below the limit)'
      ],
      correctAnswer: 0,
      explanation: 'Required centripetal force: $F_c = mv^2/r = 1000(625)/80 = 7812.5$ N. Max friction: $f_{s,\\max} = \\mu_s mg = 0.9(10000) = 9000$ N. Ratio: $7812.5/9000 \\approx 0.87$.'
    },
    {
      id: 'cm6-problem2',
      type: 'text' as const,
      content: `## Problem 2: Conical Pendulum with Calculus

A mass $m$ hangs from a string of length $L$ and swings in a horizontal circle, making angle $\\theta$ with the vertical. Show that the period is $T = 2\\pi\\sqrt{L\\cos\\theta/g}$ and find $dT/d\\theta$.

### Solution

From Part 1: $\\omega = \\sqrt{g/(L\\cos\\theta)}$, so:

$$T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$$

**Differentiating with respect to $\\theta$:**

$$\\frac{dT}{d\\theta} = 2\\pi \\cdot \\frac{1}{2}\\left(\\frac{L\\cos\\theta}{g}\\right)^{-1/2} \\cdot \\frac{-L\\sin\\theta}{g}$$

$$\\frac{dT}{d\\theta} = -\\pi\\sin\\theta\\sqrt{\\frac{L}{g\\cos\\theta}} = -\\frac{\\pi L \\sin\\theta}{\\sqrt{gL\\cos\\theta}}$$

Since $dT/d\\theta < 0$ for $0 < \\theta < 90°$: as the angle increases, the period **decreases**. A wider swing means a faster revolution (shorter period).

For small angles: $T \\approx 2\\pi\\sqrt{L/g}$ (simple pendulum period) — this is the maximum period.`
    },
    {
      id: 'cm6-mcq2',
      type: 'mcq' as const,
      question: 'A ball on a string makes a conical pendulum. As the angular speed $\\omega$ increases, the angle $\\theta$ with the vertical:',
      options: [
        'Increases (the string rises toward horizontal)',
        'Decreases (the string drops toward vertical)',
        'Stays the same',
        'First increases, then decreases'
      ],
      correctAnswer: 0,
      explanation: 'From $\\cos\\theta = g/(\\omega^2 L)$: as $\\omega$ increases, $\\cos\\theta$ decreases, so $\\theta$ increases. The mass swings outward and upward toward horizontal.'
    },
    {
      id: 'cm6-problem3',
      type: 'text' as const,
      content: `## Problem 3: Bead on a Rotating Hoop

A bead slides frictionlessly on a circular hoop of radius $R$ that rotates about a vertical axis with angular speed $\\omega$. Find the equilibrium angle $\\theta$ from the bottom of the hoop.

### Setup

The bead is at angle $\\theta$ from the bottom of the hoop. Its distance from the rotation axis is $r = R\\sin\\theta$.

**Forces on the bead:**
- Normal force $N$ (perpendicular to the hoop, along the radius)
- Gravity $mg$ (downward)

**Radial direction (toward rotation axis):**
$$N\\sin\\theta = m\\omega^2 R\\sin\\theta$$

**Vertical direction:**
$$N\\cos\\theta = mg$$

From the radial equation (for $\\theta \\neq 0$):
$$N = m\\omega^2 R$$

Substituting into vertical:
$$m\\omega^2 R \\cos\\theta = mg$$

$$\\cos\\theta = \\frac{g}{\\omega^2 R}$$

### Analysis

- If $\\omega^2 R > g$ (fast rotation): $\\cos\\theta < 1$, so $\\theta > 0$. The bead rises.
- If $\\omega^2 R < g$ (slow rotation): $\\cos\\theta > 1$ is impossible — the bead stays at the bottom ($\\theta = 0$).
- Critical angular speed: $\\omega_c = \\sqrt{g/R}$

Above $\\omega_c$ the bead rides up the hoop, and the faster the hoop spins, the closer $\\theta$ gets to $90°$ (it never quite reaches it).`
    },
    {
      id: 'cm6-mcq3',
      type: 'mcq' as const,
      question: 'For the bead on a rotating hoop, the critical angular speed $\\omega_c = \\sqrt{g/R}$ is the speed at which:',
      options: [
        'The bead first rises off the bottom of the hoop',
        'The bead climbs all the way to the side of the hoop',
        'The normal force on the bead first becomes zero',
        'The bead flies off the hoop entirely'
      ],
      correctAnswer: 0,
      explanation: 'From $\\cos\\theta = g/(\\omega^2 R)$, a nonzero angle requires $\\omega^2 R > g$. Below $\\omega_c$ the bead stays at the bottom; just above it, the bead begins to rise. The normal force is $m\\omega^2 R$, never zero.'
    },
    {
      id: 'cm6-mcq4',
      type: 'mcq' as const,
      question: 'A ball on a string swings in a vertical circle. At the 3 o\'clock position ($\\theta = 90°$), the centripetal force is provided by:',
      options: [
        'Tension alone',
        'The weight of the ball alone',
        'Tension and gravity together',
        'Neither, since the ball is in free fall'
      ],
      correctAnswer: 0,
      explanation: 'At $\\theta = 90°$ (measuring from bottom), the string points horizontally toward the center while gravity points straight down, which is tangential there. So only tension provides the centripetal force: $T = mv^2/r$.'
    },
    {
      id: 'cm6-mcq5',
      type: 'mcq' as const,
      question: 'A particle moves on a circle of radius $R$ with speed $v(t) = v_0 + \\beta t$. At what time does the angle between the total acceleration vector and the radius equal $45°$?',
      options: [
        'When $a_t = a_c$, i.e., $\\beta = (v_0 + \\beta t)^2/R$',
        'When $a_t = 2a_c$, i.e., $\\beta = 2(v_0 + \\beta t)^2/R$',
        'When $a_c = 0$, i.e., $v_0 + \\beta t = 0$',
        'Never, since $a_t$ is constant while $a_c$ grows'
      ],
      correctAnswer: 0,
      explanation: 'The angle from the radial direction: $\\tan\\phi = a_t/a_c$. At $\\phi = 45°$: $a_t = a_c$. So $\\beta = v^2/R = (v_0 + \\beta t)^2/R$. Solving this quadratic in $t$ gives the time.'
    },
    {
      id: 'cm6-summary',
      type: 'text' as const,
      content: `## Workshop Summary

### Key Problem Types

| Type | Strategy |
|:---:|:---:|
| Flat curve | Friction = centripetal, $v_{\\max} = \\sqrt{\\mu_s gr}$ |
| Banked curve | Resolve $N$ and $f$ into radial and vertical |
| Vertical circle | Energy for speeds, N2L for forces at each position |
| Conical pendulum | Vertical = $mg$, horizontal = centripetal |
| Rotating hoop | $\\cos\\theta = g/(\\omega^2 R)$; rises only if $\\omega > \\sqrt{g/R}$ |

> **Next up:** Part 7 — Review & Applications, bringing it all together.`
    }
  ]
};
