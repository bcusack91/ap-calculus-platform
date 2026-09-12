export const mcatMechWorkPart4Data = {
  topicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  sections: [
    {
      id: 'wke4-intro',
      type: 'text' as const,
      content: `# Work, Energy & Power

**Part 4 of 4 — MCAT Integration: Energy Accounting & Passage Strategy**

### When to Reach for Energy Instead of Forces

Energy methods shine exactly where kinematics struggles:

- **Curved or unknown paths:** gravity's work depends only on the height change, so a twisting frictionless waterslide is a one-line problem.
- **No time given, none wanted:** energy equations never contain $t$; power questions then bring time back in at the end.
- **"How much was lost?" questions:** compute mechanical energy before and after; the gap is heat.

Force methods win when a question asks about a force, a normal force, or an acceleration at one instant — energy conservation cannot see individual forces.

### The Physiology Crossover

MCAT passages love metabolic energy accounting:

- $1$ food Calorie (kcal) $= 4184\\;\\text{J} \\approx 4200\\;\\text{J}$
- Muscle efficiency $\\approx 20\\%$: metabolic power $\\approx 5\\times$ the mechanical power output
- Stair-climb and ergometer experiments measure **useful** power as $mgh/t$ or from a flywheel's friction; the passage then asks you to scale up to metabolic cost

### Scaling Arguments Answer Whole Question Sets

Because $KE = \\tfrac{1}{2}mv^2$ and $W = Fd$:

- Same braking force, double the speed: stopping **distance** quadruples ($d = KE/F$), while stopping **time** merely doubles ($t = p/F$ — momentum, not energy)
- Same speed, double the mass: both KE and momentum double; distance and time double
- The distance/time contrast above is the classic energy-vs-momentum discrimination — distance pairs with energy, time pairs with momentum (impulse)`
    },
    {
      id: 'wke4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Stair-Climb Metabolic Study (Passage Style)

*Exercise physiologists have a* $60\\;\\text{kg}$ *subject run up a staircase rising* $3\\;\\text{m}$ *in* $5\\;\\text{s}$*. Oxygen-uptake measurements independently show the subject's metabolic power during the climb is about* $1800\\;\\text{W}$*. (*$g = 10\\;\\text{m/s}^2$*)*

**Step 1 — Useful mechanical work.** Only the vertical rise stores energy:

$W = mgh = (60)(10)(3) = 1800\\;\\text{J}$

**Step 2 — Useful power output.**

$P_{out} = \\frac{1800}{5} = 360\\;\\text{W}$

**Step 3 — Efficiency.**

$e = \\frac{P_{out}}{P_{met}} = \\frac{360}{1800} = 20\\%$

Right at the textbook value for muscle — a passage will often make you extract this number from a data table across several subjects.

**Step 4 — Fuel cost sanity check.** At $1800\\;\\text{W}$ for $5\\;\\text{s}$, the climb costs $9000\\;\\text{J} \\approx 2$ food Calories. Climbing stairs is cheap in Calories and expensive in perceived effort — passages exploit that contrast in their discussion paragraphs.

**Passage strategy:** label every energy number as *mechanical out* or *metabolic in* before computing anything. Most wrong answer choices come from dividing the right numbers in the wrong direction (yielding an efficiency of $500\\%$) or from using the stair path length instead of the vertical height.`
    },
    {
      id: 'wke4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Energy Integration & Passage Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $50\\;\\text{kg}$ subject climbs $4\\;\\text{m}$ of stairs in $10\\;\\text{s}$ ($g = 10\\;\\text{m/s}^2$). Her useful power output is:`,
            options: [`$2000\\;\\text{W}$`, `$200\\;\\text{W}$`, `$20\\;\\text{W}$`, `$500\\;\\text{W}$`],
            correctAnswer: 1,
            explanation: `$P = mgh/t = (50)(10)(4)/10 = 2000/10 = 200$ W. Forgetting to divide by time gives $2000$; only the vertical height counts, not the stair path.`
          },
          {
            question: `Muscle operates at about $20\\%$ efficiency. To deliver $100\\;\\text{J}$ of mechanical work, the metabolic energy consumed is about:`,
            options: [`$20\\;\\text{J}$`, `$120\\;\\text{J}$`, `$500\\;\\text{J}$`, `$2000\\;\\text{J}$`],
            correctAnswer: 2,
            explanation: `Input $=$ output/efficiency $= 100/0.2 = 500$ J. Multiplying by $0.2$ (giving $20$ J) runs the efficiency backwards — inputs must exceed outputs.`
          },
          {
            question: `For a block sliding down a frictionless but curving ramp, energy conservation is preferred over kinematics chiefly because:`,
            options: [`Gravity's work depends only on the height change, not the path shape`, `Energy methods also give the normal force at each point`, `Acceleration is constant along the curve`, `Kinematics cannot handle vertical motion`],
            correctAnswer: 0,
            explanation: `Gravity is conservative: $W = mgh$ regardless of the winding route, so $v = \\sqrt{2gh}$ drops out instantly. Kinematics fails here precisely because acceleration is NOT constant on a curve — and energy methods never reveal individual forces.`
          },
          {
            question: `A car's brakes apply the same force regardless of speed. If the car's speed doubles, its stopping distance:`,
            options: [`Stays the same`, `Doubles`, `Increases by $\\sqrt{2}$`, `Quadruples`],
            correctAnswer: 3,
            explanation: `Stopping distance $d = KE/F \\propto v^2$: doubling $v$ quadruples $d$. (Stopping TIME only doubles, since $t = p/F \\propto v$ — the distance/time, energy/momentum pairing.)`
          },
          {
            question: `A crate is lowered $2\\;\\text{m}$ at constant velocity by a rope. The work done on the crate by the rope's tension is:`,
            options: [`Positive`, `Negative`, `Zero`, `Equal to $+2mg$`],
            correctAnswer: 1,
            explanation: `Tension pulls up while the displacement points down: $W = Td\\cos 180^\\circ < 0$. At constant velocity $T = mg$, so the rope does $-2mg$ joules while gravity does $+2mg$ — net zero, matching $\\Delta KE = 0$.`
          }
        ]
      }
    },
    {
      id: 'wke4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Choose energy methods for curved paths, missing time, and "how much was lost" audits; choose force methods for instantaneous forces and accelerations
- Stair-climb experiments: useful power $= mgh/t$; metabolic power $\\approx 5\\times$ larger at $20\\%$ muscle efficiency
- $1$ food Calorie $\\approx 4200\\;\\text{J}$ — mechanical work is startlingly cheap in Calories
- Same braking force: stopping distance scales with $v^2$ (energy), stopping time with $v$ (momentum)
- Label numbers as mechanical-out vs. metabolic-in before dividing — efficiency above $100\\%$ signals an inverted ratio
- Use vertical height, never path length, for gravitational energy`
    }
  ]
};
