export const physCMomentumPart6Data = {
  topicSlug: 'momentum-impulse-physics-c',
  sections: [
    {
      id: 'physicsc-momentum-impulse-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Momentum Workshop

**Part 6 of 7 — AP Physics C Problem Strategies**

---

### Types of Momentum Problems on AP Physics C

| Problem Type | Key Approach |
|-------------|-------------|
| Impulse calculation | $J = \\int F\\,dt$ or $J = \\Delta p$ |
| Collision (1D) | Conservation of $p$; check if elastic |
| Collision (2D) | Separate $x$ and $y$ components |
| Explosion | Reverse collision — one object splits |
| Mass added at constant velocity | $F = v\\,dm/dt$ |
| Center of mass | $x_{\\text{cm}} = \\sum m_i x_i / M$ |

---

### Worked Example: Ballistic Pendulum

A bullet (mass $m = 0.01\\,\\text{kg}$, speed $v_0 = 400\\,\\text{m/s}$) embeds in a block (mass $M = 2\\,\\text{kg}$) hanging from strings. How high does the block + bullet swing?

**Step 1 (conservation of momentum during the collision):**

$mv_0 = (m + M)V$

$V = \\frac{0.01 \\times 400}{2.01} \\approx 1.99\\,\\text{m/s}$

**Step 2 (conservation of energy during the swing):**

$\\tfrac{1}{2}(m+M)V^2 = (m+M)gh$

$h = \\frac{V^2}{2g} = \\frac{(1.99)^2}{2(9.8)} \\approx 0.20\\,\\text{m}$`
    },
    {
      id: 'physicsc-momentum-impulse-p6-worked',
      type: 'text' as const,
      content: `### 📝 Worked Example — Changing Mass at Constant Velocity (Conveyor Belt)

Sand falls straight down onto a horizontal conveyor belt at a rate $\\dfrac{dm}{dt} = 5.0\\,\\text{kg/s}$. A motor keeps the belt moving at a constant $v = 2.0\\,\\text{m/s}$. Find the extra horizontal force the motor must supply and the extra power it delivers.

**Step 1 — Use the general form of Newton's second law.** The momentum of the belt-plus-sand system is $p = mv$, and the mass on the belt grows while $v$ stays fixed:

$F = \\frac{dp}{dt} = m\\frac{dv}{dt} + v\\frac{dm}{dt} = 0 + v\\frac{dm}{dt}$

**Step 2 — Evaluate the force.**

$F = (2.0)(5.0) = 10\\,\\text{N}$

Using $F = ma$ would wrongly give zero, because the belt does not accelerate. The force is needed to bring each new bit of sand up to belt speed.

**Step 3 — Power.** The motor's force acts on a belt moving at $v$:

$P = Fv = (10)(2.0) = 20\\,\\text{W}$

**Step 4 — Where does the power go?** The sand's kinetic energy grows at

$\\frac{dK}{dt} = \\frac{1}{2}\\frac{dm}{dt}v^2 = \\frac{1}{2}(5.0)(2.0)^2 = 10\\,\\text{W}$

The other $10\\,\\text{W}$ is dissipated by kinetic friction while each new grain slides on the belt before it matches the belt's speed.

> 🔑 For a system whose mass changes while its velocity stays constant, $F = v\\,\\dfrac{dm}{dt}$. This is the only variable-mass case the AP Physics C exam requires.`
    },
    {
      id: 'physicsc-momentum-impulse-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a ballistic pendulum, which is conserved during the collision?',
            options: ['Kinetic energy', 'Momentum', 'Both KE and momentum', 'Neither quantity'],
            correctAnswer: 1,
            explanation: 'The collision is perfectly inelastic (the bullet embeds), so only momentum is conserved. KE is lost; energy conservation is then used for the swing.'
          },
          {
            question: 'For the ballistic pendulum above, the block + bullet rise to a height of about:',
            options: ['$0.05\\,\\text{m}$', '$0.10\\,\\text{m}$', '$0.20\\,\\text{m}$', '$0.40\\,\\text{m}$'],
            correctAnswer: 2,
            explanation: 'After the collision $V \\approx 1.99\\,\\text{m/s}$, then $h = V^2/(2g) = (1.99)^2/(2\\cdot 9.8) \\approx 0.20\\,\\text{m}$.'
          },
          {
            question: 'Sand drops vertically onto a conveyor belt at 5.0 kg/s while the belt keeps moving at a constant 2.0 m/s. The extra horizontal force the motor must supply is:',
            options: ['$2.5\\,\\text{N}$', '$10\\,\\text{N}$', '$5.0\\,\\text{N}$', '$20\\,\\text{N}$'],
            correctAnswer: 1,
            explanation: 'With $dv/dt = 0$, $F = dp/dt = v\\,dm/dt = (2.0)(5.0) = 10\\,\\text{N}$. Basing the force on the sand\'s kinetic-energy gain alone gives half that, 5.0 N.'
          },
          {
            question: 'For that belt, the motor supplies an extra 20 W, but the sand\'s kinetic energy grows at only 10 W. The other 10 W:',
            options: ['Is dissipated by friction as the sand slips on the belt', 'Is stored as gravitational energy of the sand', 'Is lost because momentum is not conserved', 'Goes into the kinetic energy of the belt itself'],
            correctAnswer: 0,
            explanation: 'Each new grain slides on the belt until it reaches belt speed, and kinetic friction dissipates energy during that slipping. The belt\'s own speed, and so its kinetic energy, does not change.'
          },
          {
            question: 'Why must $F = dp/dt$ (rather than $F = ma$) be used for the conveyor belt?',
            options: [
              'Because its velocity is constant',
              'Because the moving mass changes with time',
              'Because friction on the sand is not constant',
              'Because momentum is not conserved for the belt'
            ],
            correctAnswer: 1,
            explanation: 'Expanding $dp/dt = m\\,dv/dt + v\\,dm/dt$: the belt\'s velocity is constant, so $F = ma$ would give zero, but the growing mass on the belt requires $F = v\\,dm/dt$.'
          },
          {
            question: 'An explosion splits a stationary 4 kg object into a 1 kg piece moving at $+9\\,\\text{m/s}$ and a 3 kg piece. The 3 kg piece moves at:',
            options: ['$+3\\,\\text{m/s}$', '$-3\\,\\text{m/s}$', '$-9\\,\\text{m/s}$', '$+9\\,\\text{m/s}$'],
            correctAnswer: 1,
            explanation: 'Total momentum stays zero: $1(9) + 3v = 0 \\Rightarrow v = -3\\,\\text{m/s}$ (opposite direction).'
          }
        ]
      }
    }
  ]
};
