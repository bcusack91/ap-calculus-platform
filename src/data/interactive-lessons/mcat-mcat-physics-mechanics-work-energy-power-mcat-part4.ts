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

Force methods win when a question asks about a force, a normal force, or an acceleration — energy alone cannot give a force or acceleration at one instant.

### The Physiology Crossover

MCAT passages love metabolic energy accounting:

- $1$ food Calorie (kcal) $= 4184\\;\\text{J} \\approx 4200\\;\\text{J}$
- Muscle efficiency $\\approx 20\\%$: metabolic power $\\approx 5\\times$ the mechanical power output
- Stair-climb experiments measure **useful** power as $mgh/t$; the passage then asks you to scale up to metabolic cost

<!-- yield:low -->
- Cycle-ergometer studies measure useful power instead from the friction force braking the machine's flywheel.
<!-- /yield -->

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

**Problem.** Exercise physiologists have a $60\\;\\text{kg}$ subject run up a staircase rising $3\\;\\text{m}$ in $4\\;\\text{s}$. Oxygen-uptake measurements independently put her metabolic power during the climb at about $2250\\;\\text{W}$. ($g = 10\\;\\text{m/s}^2$)

- **(a)** How much useful mechanical work does the climb do?
- **(b)** What is the subject's useful power output?
- **(c)** What is her muscular efficiency?
- **(d)** How many food Calories does the climb cost?
- **(e)** What efficiency would you get by dividing the wrong way, and what goes wrong if you use the stair length?

**(a) Useful mechanical work.** Only the vertical rise stores energy: $W = mgh = (60)(10)(3) = 1800\\;\\text{J}$

**(b) Useful power output.** With $1800\\;\\text{J}$ from (a): $P_{out} = \\dfrac{1800}{4} = 450\\;\\text{W}$

**(c) Efficiency.** With $450\\;\\text{W}$ from (b): $e = \\dfrac{P_{out}}{P_{met}} = \\dfrac{450}{2250} = 20\\%$, right at the textbook value for muscle. A passage will often make you extract this number from a data table across several subjects.

**(d) Fuel cost.** At $2250\\;\\text{W}$ for $4\\;\\text{s}$, the climb costs $9000\\;\\text{J} \\approx 2$ food Calories. Climbing stairs is cheap in Calories and expensive in perceived effort, a contrast passages exploit in their discussion paragraphs.

**(e) Passage strategy.** Dividing metabolic by mechanical power gives $2250/450 = 500\\%$, an impossible efficiency that flags the inverted ratio. The stair length overstates the work: gravity counts only the $3\\;\\text{m}$ vertical rise. Label each number *mechanical out* or *metabolic in* first.`
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
            yield: 'HIGH',
            explanation: `$P = mgh/t = (50)(10)(4)/10 = 2000/10 = 200$ W. Forgetting to divide by time gives $2000$ W; using the mass instead of the weight (dropping $g$) gives $20$ W; dividing by the height instead of the time gives $500$ W.`
          },
          {
            question: `Muscle operates at about $20\\%$ efficiency. To deliver $100\\;\\text{J}$ of mechanical work, the metabolic energy consumed is about:`,
            options: [`$20\\;\\text{J}$`, `$120\\;\\text{J}$`, `$500\\;\\text{J}$`, `$2000\\;\\text{J}$`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Input $=$ output/efficiency $= 100/0.2 = 500$ J. Multiplying by $0.2$ (giving $20$ J) runs the efficiency backwards — inputs must exceed outputs. $120$ J just adds $20\\%$ to the output, and $2000$ J treats $20\\%$ as the number $20$ ($100 \\times 20$).`
          },
          {
            question: `For a block sliding down a frictionless but curving ramp, energy conservation is preferred over kinematics chiefly because:`,
            options: [`Gravity's work depends only on the height change, not the path shape`, `Energy methods also give the normal force at each point`, `Acceleration is constant along the curve`, `Kinematics cannot handle vertical motion`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Gravity is conservative: $W = mgh$ regardless of the winding route, so $v = \\sqrt{2gh}$ drops out instantly. Kinematics fails here precisely because acceleration is NOT constant on a curve — and energy methods never reveal individual forces such as the normal force. Kinematics handles vertical motion perfectly well (free fall); its limit is a changing acceleration.`
          },
          {
            question: `A car's brakes apply the same force regardless of speed. If the car's speed doubles, its stopping distance:`,
            options: [`Stays the same`, `Doubles, since $d \\propto v$`, `Increases by $\\sqrt{2}$`, `Quadruples`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Stopping distance $d = KE/F \\propto v^2$: doubling $v$ quadruples $d$. It is the stopping TIME that only doubles, since $t = p/F \\propto v$ — the distance/time, energy/momentum pairing.`
          },
          {
            question: `A $10\\;\\text{kg}$ crate is lowered $2\\;\\text{m}$ at constant velocity ($g = 10\\;\\text{m/s}^2$). The work done by the rope is:`,
            options: [`$+200\\;\\text{J}$`, `$-200\\;\\text{J}$`, `$0\\;\\text{J}$`, `$-20\\;\\text{J}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `At constant velocity the tension equals the weight, $T = mg = 100$ N, and it pulls up while the crate moves down: $W = Td\\cos 180^\\circ = -(100)(2) = -200$ J. $+200$ J is gravity's work, not the rope's; $0$ J is the NET work (rope plus gravity, matching $\\Delta KE = 0$); $-20$ J uses the $10$ kg mass as if it were the force.`
          }
        ]
      }
    },
    {
      id: 'wke4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **When to use energy.** Curved paths, missing time and "how much was lost?" audits call for energy methods.
- **When to use forces.** A force, a normal force or an acceleration at one instant needs Newton's laws, not energy.
- **Stair-climb power.** Useful power is $mgh/t$; at $20\\%$ efficiency muscle burns $5\\times$ that, and $1$ Calorie $\\approx 4200\\;\\text{J}$.
- **Distance vs. time.** At a fixed braking force, stopping distance scales with $v^2$ (energy), stopping time with $v$ (momentum).

**Common traps**

- **Stair length for height.** Gravitational energy uses the vertical rise, never the length of the stairs or path.
- **Inverted efficiency.** Label numbers mechanical-out or metabolic-in first; an efficiency above $100\\%$ means an upside-down ratio.
- **Doubling distance with speed.** Doubling the speed quadruples the stopping distance; only the stopping time doubles.
- **Lowering as positive work.** A rope lowering a crate pulls up while the crate moves down, so the rope's work is negative.

<!-- yield:low -->
- Low-yield extras: the cycle-ergometer flywheel method of measuring useful power.
<!-- /yield -->`
    }
  ]
};
