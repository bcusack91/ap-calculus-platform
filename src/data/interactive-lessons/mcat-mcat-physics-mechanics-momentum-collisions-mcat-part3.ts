export const mcatMechMomentumPart3Data = {
  topicSlug: 'mcat-physics-mechanics-momentum-collisions-mcat',
  sections: [
    {
      id: 'mom3-intro',
      type: 'text' as const,
      content: `# Momentum & Collisions

**Part 3 of 4 — Recoil, Explosions & the Ballistic Pendulum**

### Explosions: Collisions Run Backward

A system at rest has zero total momentum — and keeps it, even when it blows apart. Rifles recoiling, astronauts throwing wrenches, radioactive nuclei emitting particles: in every case the fragments' momenta must sum to zero:

$m_1 v_1 = m_2 v_2 \\quad \\text{(opposite directions)}$

The lighter fragment always moves faster, in inverse proportion to its mass. Kinetic energy is NOT conserved in an explosion — it is *created* from chemical or nuclear potential energy. Momentum bookkeeping still works perfectly.

### The Ballistic Pendulum: Two Regimes, Two Laws

A bullet embeds in a hanging block, which then swings upward. This is a classic two-stage problem because it forces you to switch tools mid-problem:

- **Stage 1, the collision (bullet embeds):** perfectly inelastic. Use **momentum conservation only** — kinetic energy is destroyed wholesale here.
- **Stage 2, the swing (block rises):** no collision anymore, just gravity acting on a moving pendulum. Use **energy conservation**: $\\tfrac{1}{2}(M+m)v'^2 = (M+m)gh$.

The trap — equating the bullet's initial KE to the final potential energy $(M+m)gh$ — skips the collision's enormous energy loss and wildly overestimates the height (or underestimates the bullet speed). Draw a mental fence at the moment of impact: momentum crosses the fence, kinetic energy does not.

### Two Dimensions: Conserve Each Component

Momentum is a vector, so in 2-D collisions, $p_x$ and $p_y$ are conserved **independently**. A car heading east and a car heading north that lock together leave the crash moving somewhere between east and north (exactly northeast only when the two momenta are equal) — each component of the wreck's momentum equals the corresponding incoming component.`
    },
    {
      id: 'mom3-worked',
      type: 'text' as const,
      content: `### Worked Example — Ballistic Pendulum, Start to Finish

**Problem.** A $0.02\\;\\text{kg}$ bullet embeds in a $1.98\\;\\text{kg}$ block hanging from strings, and the block-plus-bullet swings up $0.2\\;\\text{m}$. ($g = 10\\;\\text{m/s}^2$)

- **(a)** How fast is the $2\\;\\text{kg}$ combination moving just after impact?
- **(b)** How fast was the bullet moving?
- **(c)** How much of the bullet's kinetic energy survives the collision?
- **(d)** What height would equating the bullet's kinetic energy to $(M+m)gh$ predict?

**(a) The swing, worked backward.** Energy is conserved during the swing: $\\tfrac{1}{2}v'^2 = gh \\Rightarrow v' = \\sqrt{2gh} = \\sqrt{2(10)(0.2)} = \\sqrt{4} = 2\\;\\text{m/s}$, the speed of the combination just after impact.

**(b) The collision.** Momentum is conserved across the impact. With $v' = 2\\;\\text{m/s}$ from (a): $mv = (M+m)v' \\Rightarrow (0.02)v = (2)(2) \\Rightarrow v = \\dfrac{4}{0.02} = 200\\;\\text{m/s}$

**(c) Energy audit.** With $v = 200\\;\\text{m/s}$ from (b): $KE_{bullet} = \\tfrac{1}{2}(0.02)(200)^2 = 400\\;\\text{J}$, but $KE_{after} = \\tfrac{1}{2}(2)(2)^2 = 4\\;\\text{J}$. Only 1% survives: 99% of the bullet's kinetic energy became heat and splintered wood.

**(d) The trap.** Equating the $400\\;\\text{J}$ from (c) to $(M+m)gh = (2)(10)h$ predicts a rise of $20\\;\\text{m}$, a hundred times the real $0.2\\;\\text{m}$. Momentum crosses the impact; kinetic energy does not.

### Worked Example — Rifle Recoil

**Problem.** A $4\\;\\text{kg}$ rifle at rest fires a $0.01\\;\\text{kg}$ bullet at $400\\;\\text{m/s}$.

- **(a)** How fast does the rifle recoil?
- **(b)** How do the kinetic energies of the bullet and the rifle compare, and why?

**(a) Recoil speed.** Total momentum stays zero, so $v_{rifle} = \\dfrac{(0.01)(400)}{4} = 1\\;\\text{m/s}$, opposite the bullet.

**(b) Who gets the energy.** The momenta are equal in magnitude, but the bullet carries $\\tfrac{1}{2}(0.01)(400)^2 = 800\\;\\text{J}$ against the rifle's $\\tfrac{1}{2}(4)(1)^2 = 2\\;\\text{J}$. At fixed $p$, $KE = p^2/2m$, so the lighter partner always takes most of the kinetic energy.`
    },
    {
      id: 'mom3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Recoil & the Ballistic Pendulum** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $60\\;\\text{kg}$ astronaut at rest in space throws a $2\\;\\text{kg}$ wrench forward at $15\\;\\text{m/s}$. The astronaut recoils at:`,
            options: [`$2\\;\\text{m/s}$ along the throw`, `$0.5\\;\\text{m/s}$ opposite to the throw`, `$0.5\\;\\text{m/s}$ along the throw`, `$2\\;\\text{m/s}$ opposite to the throw`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Total momentum stays zero: $(2)(15) = (60)v \\Rightarrow v = 30/60 = 0.5\\;\\text{m/s}$, directed opposite the wrench. $2\\;\\text{m/s}$ inverts the ratio ($60/30$). Recoil is always opposite the thrown mass; a rocket works the same way, throwing exhaust backward to move forward.`
          },
          {
            question: `In a ballistic pendulum, why is it invalid to set the bullet's initial kinetic energy equal to the final potential energy $(M+m)gh$?`,
            options: [`Momentum is not conserved during the collision`, `Gravity does too much work during the brief collision`, `The bullet transfers most of its momentum to the Earth`, `Kinetic energy is lost to heat and deformation when the bullet embeds`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Embedding is perfectly inelastic — typically over 90% of the bullet's KE becomes heat and deformation. Energy conservation applies only to the swing AFTER the collision; momentum conservation handles the collision itself, so momentum IS conserved there. Gravity does negligible work over the brief contact, and the strings and Earth supply negligible horizontal impulse, so the bullet's momentum goes to the block.`
          },
          {
            question: `A firecracker at rest explodes into two pieces: a $1\\;\\text{kg}$ piece flying east at $6\\;\\text{m/s}$ and a $2\\;\\text{kg}$ piece. The second piece moves:`,
            options: [`West at $3\\;\\text{m/s}$`, `West at $6\\;\\text{m/s}$`, `East at $3\\;\\text{m/s}$`, `East at $6\\;\\text{m/s}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Momentum must remain zero: $(1)(6) = (2)v \\Rightarrow v = 3\\;\\text{m/s}$, directed west to cancel the eastward momentum. The heavier fragment moves slower by the mass ratio, so an equal $6\\;\\text{m/s}$ is wrong, and an eastward piece could never cancel the first one.`
          },
          {
            question: `A $3\\;\\text{kg}$ cart moving at $+4\\;\\text{m/s}$ collides head-on with a $1\\;\\text{kg}$ cart moving at $-4\\;\\text{m/s}$, and they stick. The pair's final velocity is:`,
            options: [`$0\\;\\text{m/s}$`, `$4\\;\\text{m/s}$ in the heavier cart's direction`, `$2\\;\\text{m/s}$ in the heavier cart's direction`, `$8\\;\\text{m/s}$ in the heavier cart's direction`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Signed sum: $p = (3)(+4) + (1)(-4) = +8\\;\\text{kg}\\cdot\\text{m/s}$; divide by $4\\;\\text{kg}$ to get $+2\\;\\text{m/s}$. Head-on momenta partially cancel — forgetting the minus sign gives $16/4 = 4\\;\\text{m/s}$. Zero assumes equal speeds mean equal momenta (the masses differ), and $8\\;\\text{m/s}$ forgets to divide the net momentum by the total mass.`
          },
          {
            question: `After a bullet embeds in a pendulum block, the $2\\;\\text{kg}$ combination moves at $3\\;\\text{m/s}$ ($g = 10\\;\\text{m/s}^2$). It swings up to a height of:`,
            options: [`$0.9\\;\\text{m}$`, `$0.45\\;\\text{m}$`, `$4.5\\;\\text{m}$`, `$0.15\\;\\text{m}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Post-collision, energy is conserved: $h = \\frac{v'^2}{2g} = \\frac{9}{20} = 0.45\\;\\text{m}$. Mass cancels — the height depends only on the launch speed of the swing. $0.9\\;\\text{m}$ drops the $\\tfrac{1}{2}$, $4.5\\;\\text{m}$ forgets to divide by $g$, and $0.15\\;\\text{m}$ uses $v$ instead of $v^2$.`
          }
        ]
      }
    },
    {
      id: 'mom3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **From rest, total p stays zero.** In an explosion, $m_1v_1 = m_2v_2$ in opposite directions; the lighter piece moves faster.
- **Light piece takes the KE.** At equal momentum $KE = p^2/2m$, so the lighter fragment carries most of the energy.
- **Pendulum: two regimes.** Momentum across the impact, then energy across the swing: $\\tfrac{1}{2}v'^2 = gh$.
- **Components conserve separately.** In 2-D, $p_x$ and $p_y$ are two independent conservation equations.

**Common traps**

- **Bullet KE to height.** Equating the bullet's KE to $(M+m)gh$ skips the impact loss: it predicts $20\\;\\text{m}$, not $0.2\\;\\text{m}$.
- **KE conserved in explosions.** Explosions CREATE kinetic energy from chemical or nuclear energy; only momentum is conserved.
- **Dropping the minus sign.** Head-on momenta partially cancel: $(3)(4) + (1)(-4) = 8$, not $16$.
- **Recoil along the throw.** The recoiling body always moves opposite the thrown or fired mass.`
    }
  ]
};
