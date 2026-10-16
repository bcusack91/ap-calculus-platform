export const physCEMMagForcePart5Data = {
  topicSlug: "magnetic-forces-physics-c-em",
  sections: [
    {
      id: 'magf5-intro',
      type: 'text' as const,
      content: `# Moving Charges as Field Sources
**Part 5 of 7 — Moving Charges as Field Sources; Combined Fields**

### A Moving Charge Makes a Magnetic Field
Parts 1–4 treated $\\vec{B}$ as given. But every moving charge is also a **source** of magnetic field. For a point charge $q$ moving with velocity $\\vec{v}$, the field at a point a distance $r$ away is

$$\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{q\\,\\vec{v} \\times \\hat{r}}{r^2}, \\qquad B = \\frac{\\mu_0}{4\\pi}\\frac{|q| v \\sin\\theta}{r^2}$$

where $\\hat{r}$ points **from the charge to the field point** and $\\theta$ is the angle between $\\vec{v}$ and $\\hat{r}$.

Key properties:
- The field grows with the charge's **speed** and falls off with **distance** as $1/r^2$
- $\\vec{B}$ is **perpendicular to both** $\\vec{v}$ and $\\hat{r}$ (right-hand rule: fingers along $\\vec{v}$, curl toward $\\hat{r}$; flip the result for a negative charge)
- $B$ is **maximum** when $\\vec{v} \\perp \\hat{r}$ ($\\theta = 90°$)
- $B = 0$ at points directly ahead of or behind the charge ($\\theta = 0°$ or $180°$)

A current is just a stream of moving charges, so adding up these contributions along a wire gives the Biot–Savart law for currents.`
    },
    {
      id: 'magf5-mcq1',
      type: 'mcq' as const,
      question: 'A proton at the origin moves in the $+x$ direction. What is the direction of its magnetic field at a point on the $+y$ axis?',
      options: ['$+\\hat{z}$', '$-\\hat{z}$', '$+\\hat{y}$', '$-\\hat{x}$'],
      correctAnswer: 0,
      explanation: '$\\hat{r}$ points from the proton to the field point, so $\\hat{r} = \\hat{y}$ and $\\vec{v} \\times \\hat{r} \\propto \\hat{x} \\times \\hat{y} = +\\hat{z}$. The field must be perpendicular to both $\\vec{v}$ and $\\hat{r}$, which rules out $\\pm\\hat{x}$ and $\\pm\\hat{y}$.'
    },
    {
      id: 'magf5-worked',
      type: 'text' as const,
      content: `### Worked Example: Field of a Fast Proton
A proton ($q = 1.6 \\times 10^{-19}$ C) moves at $v = 2.0 \\times 10^6$ m/s. Find $B$ at a distance $r = 1.0 \\times 10^{-10}$ m when the line to the field point makes (a) $90°$, (b) $30°$, (c) $0°$ with $\\vec{v}$. Use $\\mu_0/4\\pi = 10^{-7}$ T·m/A.

**(a) $\\theta = 90°$:**
$$B = (10^{-7})\\frac{(1.6 \\times 10^{-19})(2.0 \\times 10^6)(1)}{(1.0 \\times 10^{-10})^2} = (10^{-7})\\frac{3.2 \\times 10^{-13}}{10^{-20}} = 3.2 \\text{ T}$$

**(b) $\\theta = 30°$:** $\\sin 30° = 0.5$, so $B = 1.6$ T.

**(c) $\\theta = 0°$:** $\\sin 0° = 0$, so $B = 0$ — no field directly ahead of the charge.

**Takeaway.** At atomic distances a single fast charge makes a strong field; the $\\sin\\theta$ factor makes the field strongest to the side of the motion and zero along it.`
    },
    {
      id: 'magf5-mcq2',
      type: 'mcq' as const,
      question: 'A positive charge moves along the $+x$ axis. At which of these points, all the same distance from it, is the charge’s magnetic field zero?',
      options: [
        'Directly ahead of it',
        'Directly beside it, along $y$',
        'Directly above it, along $z$',
        'At $45°$ from its path'
      ],
      correctAnswer: 0,
      explanation: 'The field is proportional to $\\sin\\theta$, where $\\theta$ is the angle between $\\vec{v}$ and the line to the point. Directly ahead $\\theta = 0°$, so $B = 0$; the side points ($\\theta = 90°$) have the maximum field and the $45°$ point has a smaller but nonzero field.'
    },
    {
      id: 'magf5-combined',
      type: 'text' as const,
      content: `### Combined Electric and Magnetic Fields
In a region with both fields, a moving charge feels **independent** forces from each, and they simply add:

$$\\vec{F} = q\\vec{E} + q\\vec{v} \\times \\vec{B}$$

What each force can do:
| Force | Direction | Can it change the speed? |
|:---|:---|:---:|
| Electric, $q\\vec{E}$ | Along $\\vec{E}$ (opposite for $q < 0$) | Yes — it can do work |
| Magnetic, $q\\vec{v} \\times \\vec{B}$ | Perpendicular to $\\vec{v}$ | No — it does no work |

So any change in kinetic energy comes from the electric field alone: $\\Delta K = -q\\Delta V$.

### Crossed Fields When $v \\neq E/B$
In a velocity selector (Part 1), only $v = E/B$ passes straight through. Otherwise:
- If $v > E/B$, the **magnetic** force is larger and the particle bends toward the magnetic-force side.
- If $v < E/B$, the **electric** force is larger and the particle bends toward the electric-force side.

As it bends, the electric field does work on it, so its speed is no longer constant.`
    },
    {
      id: 'magf5-mcq3',
      type: 'mcq' as const,
      question: 'A proton enters a velocity selector set for $v = E/B$, but it moves faster than $E/B$. Just after entering, the proton:',
      options: [
        'Bends toward the side the magnetic force points',
        'Bends toward the electric force’s side',
        'Goes straight, since the fields cancel',
        'Slows to $E/B$, then goes straight'
      ],
      correctAnswer: 0,
      explanation: 'The electric force $qE$ does not depend on speed, but the magnetic force $qvB$ grows with $v$. For $v > E/B$, $qvB > qE$, so the net force points the way the magnetic force does.'
    },
    {
      id: 'magf5-mcq4',
      type: 'mcq' as const,
      question: 'A proton moves in the $+x$ direction at $3.0 \\times 10^4$ m/s through a region with $\\vec{E} = 2000\\hat{y}$ V/m and $\\vec{B} = 0.10\\hat{z}$ T. The net force on it is:',
      options: [
        '$1.6 \\times 10^{-16}$ N along $-\\hat{y}$',
        '$1.6 \\times 10^{-16}$ N along $+\\hat{y}$',
        '$8.0 \\times 10^{-16}$ N along $-\\hat{y}$',
        '$4.8 \\times 10^{-16}$ N along $-\\hat{y}$'
      ],
      correctAnswer: 0,
      explanation: '$\\vec{F}_E = eE\\hat{y} = 3.2 \\times 10^{-16}\\hat{y}$ N. $\\vec{F}_B = e v B(\\hat{x} \\times \\hat{z}) = -(1.6 \\times 10^{-19})(3.0 \\times 10^4)(0.10)\\hat{y} = -4.8 \\times 10^{-16}\\hat{y}$ N. The forces are independent and add: $-1.6 \\times 10^{-16}\\hat{y}$ N.'
    },
    {
      id: 'magf5-summary',
      type: 'text' as const,
      content: `### Summary — Part 5
| Idea | Formula / Rule |
|:---:|:---:|
| Field of a moving charge | $B = \\dfrac{\\mu_0}{4\\pi}\\dfrac{|q| v\\sin\\theta}{r^2}$ |
| Direction | Perpendicular to $\\vec{v}$ and $\\hat{r}$ (right-hand rule) |
| Maximum / zero | $\\theta = 90°$ / directly ahead or behind |
| Combined fields | $\\vec{F} = q\\vec{E} + q\\vec{v} \\times \\vec{B}$ (independent forces) |
| Work | Only $q\\vec{E}$ changes the kinetic energy |
| Crossed fields | $v > E/B$: magnetic side; $v < E/B$: electric side |

> **Next up:** Problem-solving workshop — Part 6.`
    }
  ]
};
