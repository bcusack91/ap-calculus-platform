export const physCEMMagFieldsPart4Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p4-intro',
      type: 'text' as const,
      content: `# 🔁 Ampere’s Law

**Part 4 of 7 — Symmetry and Magnetic Fields**

---

### Ampere’s Law

$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$$

---

### When to Use Ampere’s Law

Use when there is sufficient symmetry to simplify $\\oint \\vec{B} \\cdot d\\vec{l}$:

| Configuration | Amperian Loop | Result |
|--------------|---------------|--------|
| Long straight wire | Circular loop (radius $r$) | $B = \\mu_0 I/(2\\pi r)$ |
| Solenoid | Rectangle (length $L$) | $B = \\mu_0 n I$ |
| Thick wire, uniform $J$ (inside) | Circle of radius $r < a$ | $B = \\mu_0 I r/(2\\pi a^2)$ |

> 🔑 Ampere's law is the magnetic analog of Gauss's law — use symmetry!`
    },
    {
      id: 'physicsc-magnetic-fields-em-p4-choosing',
      type: 'text' as const,
      content: `### Choosing the Amperian Loop

Ampère's law $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}$ is *always* true, but it only **solves** for $B$ when you can pull $B$ out of the integral. That requires picking a loop along which $\\vec{B}$ is either constant-and-parallel or perpendicular-to-$d\\vec{l}$ (contributing nothing):

| Symmetry | Good Amperian loop |
|----------|--------------------|
| Long straight wire (cylindrical) | Circle centered on the wire |
| Solenoid / conducting slab (planar) | Rectangle |
| Cylindrical conductor with current density $J(r)$ | Circle; find $I_{\\text{enc}} = \\int J\\,dA$ |

**The full field of a thick wire** (radius $a$, uniform current) has two regimes:

- **Inside** ($r < a$): $B = \\frac{\\mu_0 I r}{2\\pi a^2}$ — grows **linearly** with $r$.
- **Outside** ($r > a$): $B = \\frac{\\mu_0 I}{2\\pi r}$ — falls as $1/r$.

The two pieces match at the surface ($r = a$), where the field peaks at $\\frac{\\mu_0 I}{2\\pi a}$. Plotting $B$ vs. $r$ gives a triangle-then-tail shape — a classic free-response figure.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p4-worked',
      type: 'text' as const,
      content: `### Worked Example — Field Inside a Thick Wire

A long cylindrical wire of radius $a = 2.0\\text{ mm}$ carries a total current $I = 8.0\\text{ A}$ distributed **uniformly** over its cross-section. Find $B$ at $r = 1.0\\text{ mm}$ (inside the wire).

**Step 1 — Choose an Amperian loop.** By cylindrical symmetry, $\\vec{B}$ is tangential with constant magnitude on a circle of radius $r$, so $\\oint \\vec{B}\\cdot d\\vec{l} = B(2\\pi r)$.

**Step 2 — Enclosed current.** The current density is $J = \\frac{I}{\\pi a^2}$. The loop of radius $r$ encloses

$I_{\\text{enc}} = J(\\pi r^2) = I\\frac{r^2}{a^2}.$

**Step 3 — Apply Ampère's law.** $B(2\\pi r) = \\mu_0 I\\frac{r^2}{a^2}$, giving

$B = \\frac{\\mu_0 I r}{2\\pi a^2}.$

Inside the wire $B$ grows **linearly** with $r$ (unlike the $1/r$ falloff outside).

**Step 4 — Plug in.** $B = \\frac{(4\\pi\\times10^{-7})(8.0)(1.0\\times10^{-3})}{2\\pi(2.0\\times10^{-3})^2} = \\frac{(2\\times10^{-7})(8.0)(1.0\\times10^{-3})}{(2.0\\times10^{-3})^2} = \\frac{1.6\\times10^{-9}}{4.0\\times10^{-6}} = 4.0\\times10^{-4}\\text{ T}.$`
    },
    {
      id: 'physicsc-magnetic-fields-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Inside an ideal solenoid, the magnetic field is:',
            options: ['Zero', 'Uniform, $\\mu_0 nI$', 'Strongest near the windings', 'Infinite'],
            correctAnswer: 1,
            explanation: 'Inside an ideal solenoid, $B = \\mu_0 nI$ — uniform and parallel to the axis.'
          },
          {
            question: 'Ampere’s law is most useful when:',
            options: ['No current is enclosed', 'The current has high symmetry', 'The magnetic field is zero', 'The charges are stationary'],
            correctAnswer: 1,
            explanation: 'Like Gauss’s law, Ampere’s law always holds but is useful for finding $B$ only with high symmetry (long wire, solenoid, slab, cylindrical conductor).'
          },
          {
            question: 'Inside a uniformly-conducting cylindrical wire of radius $a$, the field at radius $r < a$ varies as:',
            options: ['$\\propto 1/r$', '$\\propto r$', '$\\propto 1/r^2$', 'Constant'],
            correctAnswer: 1,
            explanation: '$B = \\frac{\\mu_0 I r}{2\\pi a^2} \\propto r$. It rises linearly inside and then falls as $1/r$ outside, peaking at the surface.'
          },
          {
            question: 'A solenoid has 500 turns over 0.25 m and carries 3.0 A. The interior field is (use $\\mu_0 = 4\\pi\\times10^{-7}$):',
            options: ['$7.5\\times10^{-3}$ T', '$1.9\\times10^{-3}$ T', '$3.8\\times10^{-3}$ T', '$6.0\\times10^{-3}$ T'],
            correctAnswer: 0,
            explanation: '$n = 500/0.25 = 2000\\text{ m}^{-1}$, so $B = \\mu_0 nI = (4\\pi\\times10^{-7})(2000)(3.0) \\approx 7.5\\times10^{-3}$ T.'
          },
          {
            question: 'For an Amperian loop that encloses zero net current, $\\oint \\vec{B}\\cdot d\\vec{l}$ equals:',
            options: ['$\\mu_0 I$', 'Zero', 'A nonzero constant', '$B \\cdot 2\\pi r$'],
            correctAnswer: 1,
            explanation: 'Ampère’s law gives $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}} = 0$ when no net current is enclosed (though $\\vec{B}$ itself need not be zero everywhere on the loop).'
          },
          {
            question: 'A long cylindrical conductor of radius $a$ carries a nonuniform current density $J(r) = br$. Inside it ($r < a$), the field magnitude is:',
            options: ['$\\mu_0 b r^2/3$', '$\\mu_0 b r^2/2$', '$\\mu_0 b r/3$', '$\\mu_0 b r^3/3$'],
            correctAnswer: 0,
            explanation: '$I_{\\text{enc}} = \\int_0^r (br\')(2\\pi r\'\\,dr\') = \\frac{2\\pi b r^3}{3}$. Ampère: $B(2\\pi r) = \\mu_0 \\frac{2\\pi b r^3}{3}$, so $B = \\mu_0 b r^2/3$.'
          }
        ]
      }
    }
  ]
};
