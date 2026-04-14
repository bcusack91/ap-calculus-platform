export const physCEMElecFieldPart5Data = {
  topicSlug: "electric-fields-physics-c-em",
  sections: [
    {
      id: 'ef5-intro',
      type: 'text' as const,
      content: `# Dipole Fields

**Part 5 of 7 — Electric Dipoles**

An **electric dipole** consists of two charges $+q$ and $-q$ separated by distance $d$. The **dipole moment** is:

$$\\vec{p} = q\\vec{d}$$

where $\\vec{d}$ points from $-q$ to $+q$. The SI unit is $\\text{C}\\cdot\\text{m}$.

### Why Dipoles Matter

- Polar molecules (like $\\text{H}_2\\text{O}$) are permanent dipoles.
- Neutral atoms in external fields become **induced dipoles**.
- Dipole fields fall off as $1/r^3$, faster than point-charge fields ($1/r^2$).`
    },
    {
      id: 'ef5-mcq1',
      type: 'mcq' as const,
      question: 'Charges $+3\\;\\mu\\text{C}$ and $-3\\;\\mu\\text{C}$ are separated by $2\\;\\text{mm}$. The dipole moment magnitude is:',
      options: [
        '$6 \\times 10^{-9}\\;\\text{C}\\cdot\\text{m}$',
        '$6 \\times 10^{-6}\\;\\text{C}\\cdot\\text{m}$',
        '$1.5 \\times 10^{-3}\\;\\text{C}\\cdot\\text{m}$',
        '$3 \\times 10^{-9}\\;\\text{C}\\cdot\\text{m}$'
      ],
      correctAnswer: 0,
      explanation: '$p = qd = (3\\times10^{-6})(2\\times10^{-3}) = 6\\times10^{-9}\\;\\text{C}\\cdot\\text{m}$.'
    },
    {
      id: 'ef5-axial',
      type: 'text' as const,
      content: `## Axial (On-Axis) Field of a Dipole

Place the dipole at the origin with $+q$ at $(0,0,d/2)$ and $-q$ at $(0,0,-d/2)$. At point $P$ on the axis at distance $z \\gg d$:

**Exact:**
$$E_z = kq\\left[\\frac{1}{(z-d/2)^2} - \\frac{1}{(z+d/2)^2}\\right]$$

**For $z \\gg d$**, expand using the binomial approximation:

$$E_z \\approx kq\\cdot\\frac{2d}{z^3} = \\frac{2kp}{z^3}$$

$$\\boxed{E_{\\text{axial}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{2p}{z^3}}$$

The field points in the $+z$ direction (same as $\\vec{p}$) and falls off as $1/z^3$.

### Derivation Detail

$$\\frac{1}{(z \\mp d/2)^2} = \\frac{1}{z^2}\\left(1 \\mp \\frac{d}{2z}\\right)^{-2} \\approx \\frac{1}{z^2}\\left(1 \\pm \\frac{d}{z}\\right)$$

Subtracting: $\\frac{2d/z}{z^2} = \\frac{2d}{z^3}$. Multiply by $kq$: $E = 2kqd/z^3 = 2kp/z^3$.`
    },
    {
      id: 'ef5-mcq2',
      type: 'mcq' as const,
      question: 'If you double the distance from a dipole (along the axis), the field strength becomes:',
      options: ['$1/8$ of the original', '$1/4$ of the original', '$1/2$ of the original', '$1/16$ of the original'],
      correctAnswer: 0,
      explanation: '$E \\propto 1/z^3$. Doubling $z$: $E \\to E/2^3 = E/8$.'
    },
    {
      id: 'ef5-equatorial',
      type: 'text' as const,
      content: `## Equatorial (Perpendicular Bisector) Field

At point $P$ on the perpendicular bisector at distance $r \\gg d$:

Each charge is at distance $\\sqrt{r^2 + (d/2)^2} \\approx r$ from $P$.

The components parallel to the dipole axis add, while perpendicular components cancel:

$$E_{\\text{eq}} = -\\frac{kp}{r^3}$$

$$\\boxed{E_{\\text{equatorial}} = -\\frac{1}{4\\pi\\epsilon_0}\\frac{p}{r^3}}$$

The field points **antiparallel** to $\\vec{p}$ (from $+q$ toward $-q$ along the axis).

### Comparison

| Location | $E$ | Direction |
|:---:|:---:|:---:|
| On axis ($z \\gg d$) | $\\frac{2kp}{z^3}$ | Parallel to $\\vec{p}$ |
| Equatorial ($r \\gg d$) | $\\frac{kp}{r^3}$ | Antiparallel to $\\vec{p}$ |

The axial field is **twice** the equatorial field at the same distance.`
    },
    {
      id: 'ef5-mcq3',
      type: 'mcq' as const,
      question: 'At the same distance $r$ from a dipole, $E_{\\text{axial}} / E_{\\text{equatorial}}$ equals:',
      options: ['$2$', '$1/2$', '$3$', '$1$'],
      correctAnswer: 0,
      explanation: '$E_{\\text{axial}} = 2kp/r^3$ and $E_{\\text{equatorial}} = kp/r^3$, so the ratio is $2$.'
    },
    {
      id: 'ef5-torque',
      type: 'text' as const,
      content: `## Dipole in a Uniform External Field

A dipole with moment $\\vec{p}$ in a uniform field $\\vec{E}$ experiences:

**Torque:**
$$\\vec{\\tau} = \\vec{p} \\times \\vec{E}, \\quad |\\tau| = pE\\sin\\theta$$

This torque tends to align $\\vec{p}$ with $\\vec{E}$.

**Potential energy:**
$$U = -\\vec{p}\\cdot\\vec{E} = -pE\\cos\\theta$$

| $\\theta$ | $U$ | Stability |
|:---:|:---:|:---:|
| $0$ | $-pE$ | Stable equilibrium |
| $\\pi/2$ | $0$ | Max torque |
| $\\pi$ | $+pE$ | Unstable equilibrium |

### Work to Rotate

The work done to rotate the dipole from $\\theta_1$ to $\\theta_2$:

$$W = \\int_{\\theta_1}^{\\theta_2} \\tau\\,d\\theta = pE(\\cos\\theta_1 - \\cos\\theta_2)$$`
    },
    {
      id: 'ef5-mcq4',
      type: 'mcq' as const,
      question: 'A dipole with $p = 5.0 \\times 10^{-9}\\;\\text{C}\\cdot\\text{m}$ is in a field $E = 4.0 \\times 10^4\\;\\text{N/C}$ at angle $\\theta = 90°$. The torque on the dipole is:',
      options: [
        '$2.0 \\times 10^{-4}\\;\\text{N}\\cdot\\text{m}$',
        '$0$',
        '$1.0 \\times 10^{-4}\\;\\text{N}\\cdot\\text{m}$',
        '$4.0 \\times 10^{-4}\\;\\text{N}\\cdot\\text{m}$'
      ],
      correctAnswer: 0,
      explanation: '$\\tau = pE\\sin\\theta = (5\\times10^{-9})(4\\times10^4)\\sin 90° = 2.0\\times10^{-4}\\;\\text{N}\\cdot\\text{m}$.'
    }
  ]
};
