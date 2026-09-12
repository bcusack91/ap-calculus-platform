export const mcatMechWorkPart3Data = {
  topicSlug: 'mcat-physics-mechanics-work-energy-power-mcat',
  sections: [
    {
      id: 'wke3-intro',
      type: 'text' as const,
      content: `# Work, Energy & Power

**Part 3 of 4 — Power, Efficiency & Simple Machines**

### Power: The Rate of Doing Work

$P = \\frac{W}{t} = \\frac{\\Delta E}{t} \\qquad \\text{and for a force moving at speed } v: \\quad P = Fv$

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

A ramp $6\\;\\text{m}$ long rising $1.5\\;\\text{m}$ has $MA = 4$: one quarter the force, four times the distance, same work. Real machines add friction, so the actual force needed always exceeds the ideal.`
    },
    {
      id: 'wke3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Construction Hoist

A motor lifts a $100\\;\\text{kg}$ beam $20\\;\\text{m}$ at constant speed in $40\\;\\text{s}$. ($g = 10\\;\\text{m/s}^2$)

**Step 1 — Useful work.**

$W = mgh = (100)(10)(20) = 20000\\;\\text{J}$

**Step 2 — Useful power output.**

$P = \\frac{W}{t} = \\frac{20000}{40} = 500\\;\\text{W}$

**Step 3 — Electrical input if the motor is 50% efficient.**

$P_{in} = \\frac{500}{0.5} = 1000\\;\\text{W}$

Half the electrical energy becomes heat in the motor; only half lifts the beam.

**Cross-check with** $P = Fv$: the beam rises at $v = 20/40 = 0.5\\;\\text{m/s}$ and the lifting force at constant speed equals the weight, $1000\\;\\text{N}$, so $P = (1000)(0.5) = 500\\;\\text{W}$. Same answer, two routes — a good MCAT self-audit.

### Worked Example — Why the Ramp Helps

Loading an $800\\;\\text{N}$ barrel straight up onto a $1.5\\;\\text{m}$ platform takes $800\\;\\text{N}$ of force. Rolling it up a frictionless $6\\;\\text{m}$ ramp instead:

$MA = \\frac{6}{1.5} = 4 \\Rightarrow F = \\frac{800}{4} = 200\\;\\text{N}$

Work is identical either way: $(800)(1.5) = 1200\\;\\text{J}$ vertically, or $(200)(6) = 1200\\;\\text{J}$ along the ramp. The ramp lowers the force, never the energy bill — with friction, the ramp actually costs MORE total work.`
    },
    {
      id: 'wke3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Power, Efficiency & Machines** 🎯`,
      exercise: {
        questions: [
          {
            question: `A machine does $3000\\;\\text{J}$ of work in $60\\;\\text{s}$. Its power output is:`,
            options: [`$180\\;\\text{kW}$`, `$20\\;\\text{W}$`, `$3000\\;\\text{W}$`, `$50\\;\\text{W}$`],
            correctAnswer: 3,
            explanation: `$P = W/t = 3000/60 = 50$ W. Multiplying gives the $180000$ distractor; power is a RATE, so divide by time.`
          },
          {
            question: `A car's engine provides a $2000\\;\\text{N}$ forward force while cruising at a constant $15\\;\\text{m/s}$. The engine's useful power output is:`,
            options: [`$30\\;\\text{kW}$`, `$133\\;\\text{W}$`, `$2\\;\\text{kW}$`, `$15\\;\\text{kW}$`],
            correctAnswer: 0,
            explanation: `$P = Fv = (2000)(15) = 30000$ W $= 30$ kW. Constant speed means this power all goes to fighting drag and friction.`
          },
          {
            question: `A frictionless ramp is $6\\;\\text{m}$ long and rises $1.5\\;\\text{m}$. The force needed to push an $800\\;\\text{N}$ barrel up at constant speed is:`,
            options: [`$800\\;\\text{N}$`, `$3200\\;\\text{N}$`, `$200\\;\\text{N}$`, `$133\\;\\text{N}$`],
            correctAnswer: 2,
            explanation: `$MA = 6/1.5 = 4$, so $F = 800/4 = 200$ N. Equivalently $F = W\\sin\\theta$ with $\\sin\\theta = 1.5/6 = 0.25$. The work, $1200$ J, is unchanged.`
          },
          {
            question: `An ideal simple machine can multiply:`,
            options: [`Work`, `Force`, `Energy`, `Power`],
            correctAnswer: 1,
            explanation: `Machines trade force for distance: $F_{in}d_{in} = F_{out}d_{out}$. Work and energy can never be multiplied (conservation of energy), and an ideal machine transmits power unchanged.`
          },
          {
            question: `A motor consumes $2000\\;\\text{J}$ of electrical energy while doing $1500\\;\\text{J}$ of useful work. Its efficiency is:`,
            options: [`$25\\%$`, `$133\\%$`, `$50\\%$`, `$75\\%$`],
            correctAnswer: 3,
            explanation: `$e = 1500/2000 = 0.75 = 75\\%$. The other $500$ J becomes heat. An answer above $100\\%$ ($133\\%$) is physically impossible — free elimination.`
          }
        ]
      }
    },
    {
      id: 'wke3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $P = W/t = \\Delta E/t$, and $P = Fv$ for a force pushing at speed $v$; watts are joules per second
- Constant cruising speed still requires power — it feeds drag and friction, not kinetic energy
- Efficiency $=$ useful out / total in; the rest is heat; muscle runs near $20$-$25\\%$
- Ideal machines conserve work: less force means proportionally more distance ($MA = d_{in}/d_{out}$)
- Ramp $MA =$ length/height; pulley $MA =$ supporting strands; lever $MA =$ arm ratio
- Cross-check power answers by computing both $W/t$ and $Fv$ when the data allows`
    }
  ]
};
