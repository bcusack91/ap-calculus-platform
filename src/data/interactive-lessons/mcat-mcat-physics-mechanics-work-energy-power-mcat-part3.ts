export const mcatMechWorkPart3Data = {
  topicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  sections: [
    {
      id: 'wke3-intro',
      type: 'text' as const,
      content: `# Work, Energy & Power

**Part 3 of 4 — Power, Efficiency & Simple Machines**

### Power: The Rate of Doing Work

$P = W/t = \\Delta E/t$

For a force moving at speed $v$: $P = Fv$

Units: watts ($1\\;\\text{W} = 1\\;\\text{J/s}$). A motor's power rating tells you how FAST it converts energy, not how much work it can ultimately do — a weak motor can lift any weight given a pulley system and enough time.

The $P = Fv$ form explains everyday physics: at highway speed, drag force is large, so maintaining constant $v$ demands high engine power even though $KE$ is not changing.

### Efficiency

$e = \\frac{\\text{useful energy out}}{\\text{total energy in}} \\times 100\\%$

No machine exceeds $100\\%$; the shortfall leaves as heat. Human muscle runs near $20$-$25\\%$ efficiency — for every $100\\;\\text{J}$ of metabolic energy spent, only about $20$-$25\\;\\text{J}$ becomes mechanical work, the rest warming the body (why exercise makes you hot).

### Simple Machines: Trading Force for Distance

An ideal machine **cannot multiply work or energy** — only force (or speed). Mechanical advantage comes from moving the effort through a longer distance:

$F_{in} d_{in} = F_{out} d_{out} \\quad \\text{(ideal)} \\qquad MA = \\frac{F_{out}}{F_{in}} = \\frac{d_{in}}{d_{out}}$

| Machine | Ideal mechanical advantage |
|---|---|
| Inclined plane (ramp) | length of ramp / height gained |
| Lever | effort arm / load arm |
| Pulley system | number of rope strands supporting the load |

A ramp $5\\;\\text{m}$ long rising $1\\;\\text{m}$ has $MA = 5$: one fifth the force, five times the distance, same work. Real machines add friction, so the actual force needed always exceeds the ideal.`
    },
    {
      id: 'wke3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Construction Hoist

**Problem.** A motor lifts a $100\\;\\text{kg}$ beam $20\\;\\text{m}$ at constant speed in $40\\;\\text{s}$. ($g = 10\\;\\text{m/s}^2$)

- **(a)** How much useful work does the motor do on the beam?
- **(b)** What is the motor's useful power output?
- **(c)** What electrical power must the motor draw if it is 50% efficient?
- **(d)** Does $P = Fv$ give the same output power?

**(a) Useful work.** $W = mgh = (100)(10)(20) = 20000\\;\\text{J}$

**(b) Useful power output.** With $20000\\;\\text{J}$ from (a): $P = \\dfrac{W}{t} = \\dfrac{20000}{40} = 500\\;\\text{W}$

**(c) Electrical input.** With the $500\\;\\text{W}$ output from (b): $P_{in} = \\dfrac{500}{0.5} = 1000\\;\\text{W}$. Half the electrical energy becomes heat in the motor; only half lifts the beam.

**(d) Cross-check.** The beam rises at $v = 20/40 = 0.5\\;\\text{m/s}$, and at constant speed the lifting force equals the weight, $1000\\;\\text{N}$, so $P = Fv = (1000)(0.5) = 500\\;\\text{W}$. Same answer as (b) by a second route, a good MCAT self-audit.

### Worked Example — Why the Ramp Helps

**Problem.** An $800\\;\\text{N}$ barrel must be raised onto a $1.5\\;\\text{m}$ platform, either lifted straight up or rolled at constant speed up a frictionless ramp $6\\;\\text{m}$ long.

- **(a)** What force does lifting it straight up take?
- **(b)** What is the ramp's mechanical advantage, and what force does the ramp route take?
- **(c)** How much work does each route take?
- **(d)** How would friction on the ramp change the total work?

**(a) Straight up.** At constant speed the lift must match the weight: $800\\;\\text{N}$.

**(b) Up the ramp.** $MA = \\dfrac{6}{1.5} = 4 \\Rightarrow F = \\dfrac{800}{4} = 200\\;\\text{N}$

**(c) Work.** With the $200\\;\\text{N}$ from (b), the work is identical either way: $(800)(1.5) = 1200\\;\\text{J}$ vertically, or $(200)(6) = 1200\\;\\text{J}$ along the ramp. The ramp lowers the force, never the energy bill.

**(d) Friction.** Friction adds work over the whole $6\\;\\text{m}$, so the ramp route with friction actually costs MORE than $1200\\;\\text{J}$ in total.`
    },
    {
      id: 'wke3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Power, Efficiency & Machines** 🎯`,
      exercise: {
        questions: [
          {
            question: `A machine does $3000\\;\\text{J}$ of work in $60\\;\\text{s}$. Its power output is:`,
            options: [`$180\\;\\text{kW}$`, `$0.02\\;\\text{W}$`, `$3000\\;\\text{W}$`, `$50\\;\\text{W}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$P = W/t = 3000/60 = 50$ W. Multiplying gives $180$ kW, dividing time by work gives $0.02$ W, and $3000$ W forgets the time altogether; power is a RATE, so divide work by time.`
          },
          {
            question: `A car's engine provides a $2000\\;\\text{N}$ forward force while cruising at a constant $15\\;\\text{m/s}$. The engine's useful power output is:`,
            options: [`$30\\;\\text{kW}$`, `$133\\;\\text{W}$`, `$2\\;\\text{kW}$`, `$15\\;\\text{kW}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$P = Fv = (2000)(15) = 30000$ W $= 30$ kW. Constant speed means this power all goes to fighting drag and friction. $133$ W divides force by speed instead of multiplying, and $2$ kW and $15$ kW each keep only one factor (the force or the speed) and drop the other.`
          },
          {
            question: `A frictionless ramp is $8\\;\\text{m}$ long and rises $2\\;\\text{m}$. The force needed to push a $1000\\;\\text{N}$ crate up at constant speed is:`,
            options: [`$1000\\;\\text{N}$`, `$4000\\;\\text{N}$`, `$250\\;\\text{N}$`, `$125\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$MA = 8/2 = 4$, so $F = 1000/4 = 250$ N. Equivalently $F = mg\\sin\\theta$ with $\\sin\\theta = 2/8 = 0.25$. The work, $2000$ J, is unchanged. $1000$ N is the force to lift the crate straight up with no ramp, $4000$ N multiplies by the mechanical advantage instead of dividing, and $125$ N divides the weight by the ramp length alone.`
          },
          {
            question: `An ideal simple machine can multiply:`,
            options: [`Work`, `Force`, `Energy`, `Power`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Machines trade force for distance: $F_{in}d_{in} = F_{out}d_{out}$. Work and energy can never be multiplied (conservation of energy), and an ideal machine transmits power unchanged.`
          },
          {
            question: `A motor consumes $2000\\;\\text{J}$ of electrical energy while doing $1500\\;\\text{J}$ of useful work. Its efficiency is:`,
            options: [`$25\\%$`, `$133\\%$`, `$50\\%$`, `$75\\%$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$e = 1500/2000 = 0.75 = 75\\%$. The other $500$ J becomes heat. $25\\%$ is that wasted fraction ($500/2000$), not the useful one; $50\\%$ would need only $1000$ J of useful work. An answer above $100\\%$ ($133\\%$, the inverted ratio) is physically impossible — free elimination.`
          }
        ]
      }
    },
    {
      id: 'wke3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Power is a rate.** $P = W/t = \\Delta E/t$ in watts (J/s), and $P = Fv$ for a force pushing at speed $v$.
- **Cruising still costs power.** At constant speed the engine's $P = Fv$ feeds drag and friction, not kinetic energy.
- **Efficiency is out over in.** Useful energy out divided by total energy in; the rest is heat, and muscle runs near $20$-$25\\%$.
- **Machines trade force for distance.** Ideally $F_{in}d_{in} = F_{out}d_{out}$; ramp MA is length/height, pulley MA is strands.

**Common traps**

- **Multiplying by time.** Power is work DIVIDED by time; $W \\times t$ gives a huge, meaningless number.
- **Machines saving work.** An ideal machine cuts the force but never the work, and friction makes the real total larger.
- **Efficiency above 100%.** Any answer over 100% means the ratio is inverted: useful output goes on top.
- **Rating as capacity.** A power rating says how fast energy converts, not how much work a motor can eventually do.`
    }
  ]
};
