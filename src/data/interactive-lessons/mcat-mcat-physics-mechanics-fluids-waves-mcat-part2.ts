export const mcatMechFluidsWavesPart2Data = {
  topicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  sections: [
    {
      id: 'flw2-intro',
      type: 'text' as const,
      content: `# Fluids & Waves

**Part 2 of 4 — Fluid Dynamics: Continuity, Bernoulli & Viscosity**

### Continuity: Mass In = Mass Out

For an incompressible fluid in a pipe, the volumetric flow rate $Q$ is the same everywhere:

$Q = A_1 v_1 = A_2 v_2$

Narrow the pipe and the fluid MUST speed up. Since area scales with radius squared, halving the radius quarters the area and quadruples the speed.

### Bernoulli: Energy Conservation for Ideal Fluids

$P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$

Valid for **ideal flow**: incompressible, nonviscous, laminar. At constant height, the trade is stark: **where the fluid moves fast, its pressure is low**. This feels backward — students picture fast fluid "blasting" harder — but the pressure term is what remains after the kinetic term takes its share.

**Discriminate the two tools:** continuity converts *areas into speeds*; Bernoulli converts *speeds into pressures*. A classic MCAT chain uses both: area down, so speed up (continuity), so pressure down (Bernoulli).

A special case worth knowing: **Torricelli's theorem**. Fluid leaking from a hole a depth $h$ below the open surface exits at $v = \\sqrt{2gh}$ — the free-fall speed, because Bernoulli here is just energy conservation per unit volume.

### Viscosity: When Fluids Are Real

Real fluids dissipate energy through internal friction (viscosity $\\eta$), so pressure drops along a pipe even at constant area. **Poiseuille's law** for laminar viscous flow:

$Q = \\frac{\\pi \\, \\Delta P \\, r^4}{8 \\eta L}$

The punchline is the **fourth power of the radius**: doubling $r$ multiplies flow 16-fold; a 19% narrowing already halves it. This is why arteriolar radius is the body's dominant flow control and why mild vessel narrowing is hemodynamically expensive.

At high speeds flow turns **turbulent** — chaotic, energy-hungry, and audible (heart murmurs, bruits). High velocity, large diameter, high density, and low viscosity all push toward turbulence.`
    },
    {
      id: 'flw2-worked',
      type: 'text' as const,
      content: `### Worked Example — Chaining Continuity into Bernoulli

Water flows at $1\\;\\text{m/s}$ through a horizontal pipe of cross-section $10\\;\\text{cm}^2$ that narrows to $2\\;\\text{cm}^2$.

**Step 1 — Continuity for the new speed.**

$v_2 = v_1\\frac{A_1}{A_2} = (1)\\frac{10}{2} = 5\\;\\text{m/s}$

**Step 2 — Bernoulli for the pressure change** (horizontal, so the $\\rho gh$ terms cancel):

$P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = \\tfrac{1}{2}(1000)(25 - 1) = 12000\\;\\text{Pa}$

The narrow, fast section is LOWER in pressure by $12\\;\\text{kPa}$. Order matters: continuity first (geometry to speed), Bernoulli second (speed to pressure).

### Worked Example — Torricelli's Tank

A drum of water has a small hole $5\\;\\text{m}$ below the open surface ($g = 10\\;\\text{m/s}^2$):

$v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = 10\\;\\text{m/s}$

Same speed a dropped stone would have after falling $5\\;\\text{m}$ — the escaping parcel cashes in exactly its column's potential energy.

**Viscous contrast:** none of the above predicts a pressure drop along a UNIFORM pipe, yet real IV lines and blood vessels lose pressure steadily along their length. That loss is viscosity's signature, governed by Poiseuille — ideal-fluid tools cannot see it.`
    },
    {
      id: 'flw2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fluid Dynamics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Blood flows through an artery that narrows to half its original radius. By continuity, the blood's speed in the narrowed segment is:`,
            options: [`Half as large`, `Unchanged`, `Twice as large`, `Four times as large`],
            correctAnswer: 3,
            explanation: `Area goes as $r^2$, so half the radius means one-quarter the area, and $A_1v_1 = A_2v_2$ forces the speed to quadruple. Doubling is the trap for students who forget the square.`
          },
          {
            question: `In the fast-moving narrowed section of a horizontal pipe carrying ideal fluid, the pressure is:`,
            options: [`Lower than in the wide section`, `Higher than in the wide section`, `Equal to the wide-section pressure`, `Zero`],
            correctAnswer: 0,
            explanation: `Bernoulli at constant height: $P + \\tfrac{1}{2}\\rho v^2$ is constant, so higher $v$ means lower $P$. The intuition that fast fluid "pushes harder" is precisely the misconception being tested.`
          },
          {
            question: `A question gives the cross-sectional areas at two points in a pipe and the speed at one point, then asks for the speed at the other. The single principle required is:`,
            options: [`Bernoulli's equation`, `Poiseuille's law`, `The continuity equation`, `Archimedes' principle`],
            correctAnswer: 2,
            explanation: `Areas-to-speeds is continuity's whole job: $A_1v_1 = A_2v_2$. Bernoulli would be needed only if pressure entered the question; Poiseuille handles viscous flow driven by a pressure difference.`
          },
          {
            question: `By Poiseuille's law, doubling a vessel's radius (all else fixed) changes the volumetric flow rate by a factor of:`,
            options: [`$2$`, `$16$`, `$4$`, `$8$`],
            correctAnswer: 1,
            explanation: `$Q \\propto r^4$, and $2^4 = 16$. This fourth-power sensitivity is why small changes in arteriolar radius dominate blood-flow regulation — and why the exam loves this number.`
          },
          {
            question: `Water escapes through a small hole $5\\;\\text{m}$ below the surface of an open tank ($g = 10\\;\\text{m/s}^2$). Its exit speed is:`,
            options: [`$5\\;\\text{m/s}$`, `$50\\;\\text{m/s}$`, `$100\\;\\text{m/s}$`, `$10\\;\\text{m/s}$`],
            correctAnswer: 3,
            explanation: `Torricelli: $v = \\sqrt{2gh} = \\sqrt{100} = 10\\;\\text{m/s}$ — the same as free-fall from $5\\;\\text{m}$. Answering $100$ forgets the square root.`
          }
        ]
      }
    },
    {
      id: 'flw2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Continuity: $A_1v_1 = A_2v_2$; area shrinks as $r^2$, so half the radius means four times the speed
- Bernoulli (ideal flow only): fast means low pressure at the same height
- Standard chain: geometry to speed (continuity), then speed to pressure (Bernoulli)
- Torricelli: efflux speed $\\sqrt{2gh}$, the free-fall speed from the surface
- Poiseuille for real, viscous flow: $Q \\propto \\Delta P \\, r^4/(\\eta L)$ — the $r^4$ is the tested fact
- Turbulence arrives at high speed and is noisy (murmurs); ideal-fluid equations stop applying`
    }
  ]
};
