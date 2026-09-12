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

A bullet embeds in a hanging block, which then swings upward. This is the MCAT's favorite momentum problem because it forces you to switch tools mid-problem:

1. **The collision (bullet embeds):** perfectly inelastic. Use **momentum conservation only** — kinetic energy is destroyed wholesale here.
2. **The swing (block rises):** no collision anymore, just gravity acting on a moving pendulum. Use **energy conservation**: $\\tfrac{1}{2}(M+m)v'^2 = (M+m)gh$.

The trap — equating the bullet's initial KE to the final potential energy $(M+m)gh$ — skips the collision's enormous energy loss and wildly overestimates the height (or underestimates the bullet speed). Draw a mental fence at the moment of impact: momentum crosses the fence, kinetic energy does not.

### Two Dimensions: Conserve Each Component

Momentum is a vector, so in 2-D collisions, $p_x$ and $p_y$ are conserved **independently**. A car heading east and a car heading north that lock together leave the crash moving northeast — each component of the wreck's momentum equals the corresponding incoming component.`
    },
    {
      id: 'mom3-worked',
      type: 'text' as const,
      content: `### Worked Example — Ballistic Pendulum, Start to Finish

A $0.02\\;\\text{kg}$ bullet strikes a $1.98\\;\\text{kg}$ block hanging from strings and embeds in it. The block-plus-bullet swings up $0.2\\;\\text{m}$. Find the bullet's speed. ($g = 10\\;\\text{m/s}^2$)

**Step 1 — Work the swing BACKWARD with energy conservation.**

$\\tfrac{1}{2}v'^2 = gh \\Rightarrow v' = \\sqrt{2gh} = \\sqrt{2(10)(0.2)} = \\sqrt{4} = 2\\;\\text{m/s}$

This is the speed of the $2\\;\\text{kg}$ combination just after impact.

**Step 2 — Work the collision with momentum conservation.**

$mv = (M+m)v' \\Rightarrow (0.02)v = (2)(2) \\Rightarrow v = \\frac{4}{0.02} = 200\\;\\text{m/s}$

**Step 3 — Audit the energy (the point of the problem).**

$KE_{bullet} = \\tfrac{1}{2}(0.02)(200)^2 = 400\\;\\text{J}, \\qquad KE_{after} = \\tfrac{1}{2}(2)(2)^2 = 4\\;\\text{J}$

99% of the bullet's kinetic energy became heat and wood-splitting. Had you equated $400\\;\\text{J}$ to $(M+m)gh$, you would predict a rise of $20\\;\\text{m}$ — a hundred times the real $0.2\\;\\text{m}$.

### Worked Example — Rifle Recoil

A $4\\;\\text{kg}$ rifle fires a $0.01\\;\\text{kg}$ bullet at $400\\;\\text{m/s}$:

$v_{rifle} = \\frac{(0.01)(400)}{4} = 1\\;\\text{m/s}$

Same magnitude of momentum, but the bullet carries $\\frac{1}{2}(0.01)(400)^2 = 800\\;\\text{J}$ against the rifle's $2\\;\\text{J}$ — the lighter partner always hoards the kinetic energy ($KE = p^2/2m$ at fixed $p$).`
    },
    {
      id: 'mom3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Recoil & the Ballistic Pendulum** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $60\\;\\text{kg}$ astronaut at rest in space throws a $2\\;\\text{kg}$ wrench forward at $15\\;\\text{m/s}$. The astronaut recoils at:`,
            options: [`$15\\;\\text{m/s}$ opposite the throw`, `$0.5\\;\\text{m/s}$ opposite the throw`, `$0.5\\;\\text{m/s}$ in the direction of the throw`, `$2\\;\\text{m/s}$ opposite the throw`],
            correctAnswer: 1,
            explanation: `Total momentum stays zero: $(2)(15) = (60)v \\Rightarrow v = 30/60 = 0.5\\;\\text{m/s}$, directed opposite the wrench. Recoil is always opposite — throwing mass forward is how rockets go backward-in-reverse.`
          },
          {
            question: `In a ballistic pendulum, why is it invalid to set the bullet's initial kinetic energy equal to the final potential energy $(M+m)gh$?`,
            options: [`Momentum is not conserved while the pendulum swings`, `Gravity does too much work during the brief collision`, `The bullet transfers most of its momentum to the Earth`, `Kinetic energy is lost to heat and deformation when the bullet embeds`],
            correctAnswer: 3,
            explanation: `Embedding is perfectly inelastic — typically over 90% of the bullet's KE becomes heat and deformation. Energy conservation applies only to the swing AFTER the collision; momentum conservation handles the collision itself.`
          },
          {
            question: `A firecracker at rest explodes into two pieces: a $1\\;\\text{kg}$ piece flying east at $6\\;\\text{m/s}$ and a $2\\;\\text{kg}$ piece. The second piece moves:`,
            options: [`West at $3\\;\\text{m/s}$`, `West at $6\\;\\text{m/s}$`, `East at $3\\;\\text{m/s}$`, `West at $12\\;\\text{m/s}$`],
            correctAnswer: 0,
            explanation: `Momentum must remain zero: $(1)(6) = (2)v \\Rightarrow v = 3\\;\\text{m/s}$, directed west to cancel the eastward momentum. The heavier fragment moves slower by the mass ratio.`
          },
          {
            question: `A $3\\;\\text{kg}$ cart moving at $+4\\;\\text{m/s}$ collides head-on with a $1\\;\\text{kg}$ cart moving at $-4\\;\\text{m/s}$, and they stick. The pair's final velocity is:`,
            options: [`$0\\;\\text{m/s}$`, `$4\\;\\text{m/s}$ in the lighter cart's direction`, `$2\\;\\text{m/s}$ in the heavier cart's direction`, `$8\\;\\text{m/s}$ in the heavier cart's direction`],
            correctAnswer: 2,
            explanation: `Signed sum: $p = (3)(+4) + (1)(-4) = +8\\;\\text{kg}\\cdot\\text{m/s}$; divide by $4\\;\\text{kg}$ to get $+2\\;\\text{m/s}$. Head-on momenta partially cancel — forgetting the minus sign gives $16/4 = 4\\;\\text{m/s}$, a wrong answer built into the choices.`
          },
          {
            question: `After a bullet embeds in a pendulum block, the $2\\;\\text{kg}$ combination moves at $2\\;\\text{m/s}$ ($g = 10\\;\\text{m/s}^2$). It swings up to a height of:`,
            options: [`$0.4\\;\\text{m}$`, `$0.2\\;\\text{m}$`, `$2\\;\\text{m}$`, `$0.1\\;\\text{m}$`],
            correctAnswer: 1,
            explanation: `Post-collision, energy is conserved: $h = \\frac{v'^2}{2g} = \\frac{4}{20} = 0.2\\;\\text{m}$. Mass cancels — the height depends only on the launch speed of the swing.`
          }
        ]
      }
    },
    {
      id: 'mom3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Explosions and push-offs conserve momentum around zero: $m_1v_1 = m_2v_2$, opposite directions
- The lighter fragment moves faster AND carries more kinetic energy ($KE = p^2/2m$)
- Ballistic pendulum = two fenced-off regimes: momentum across the collision, energy across the swing
- Never carry kinetic energy across an embedding impact — most of it dies there
- Head-on collisions: assign signs first; momenta subtract when directions oppose
- 2-D collisions: conserve $p_x$ and $p_y$ separately, as independent equations`
    }
  ]
};
