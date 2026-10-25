export const asvabMcSimpleMachinesPart5Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm5-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 5 of 7 — Screws and Wheel and Axle**

### Wheel and axle

A **wheel and axle** is a large wheel (or crank, or handle) fixed to a smaller shaft so they turn **together**. It works like a lever that goes all the way around: the center of the axle is the fulcrum.

$$\\text{effort} \\times \\text{wheel radius} = \\text{load} \\times \\text{axle radius}, \\qquad \\text{MA} = \\frac{\\text{wheel radius}}{\\text{axle radius}}$$

(Diameters work just as well as radii, as long as you use the same kind for both.)

**Worked example.** A well winch has a crank handle $12$ inches from the center and a drum (axle) of radius $2$ inches. $\\text{MA} = 12 \\div 2 = 6$. Lifting a $90$-lb bucket takes $90 \\div 6 = 15$ lb on the handle. The handle travels $6$ times as far as the rope.

**Where you see it:** steering wheels, doorknobs, screwdrivers (a fatter handle is easier to turn), faucet handles, winches and capstans, the crank on a hand drill.

**Turning it the other way:** if the force is applied to the **axle** to turn the **wheel** (like a car's drive axle turning its tires), you **lose** force but **gain** speed and distance at the rim.`
    },
    {
      id: 'msm5-winch-input',
      type: 'input-boxes' as const,
      content: `**The winch.** ✍️ Use the figure.

A crank handle turns $15$ inches from the center of a drum whose radius is $3$ inches. The rope on the drum lifts a $100$-lb bucket.

**1)** The mechanical advantage of the winch (number only):

**2)** The ideal force on the handle to lift the bucket, in pounds (number only):

**3)** If the handle were moved in to $10$ inches from the center, the ideal force would be how many pounds? (number only)`,
      figure: {
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="40" y="40" width="16" height="140" fill="none" stroke="currentColor" stroke-width="2" class="fig-muted"/><circle cx="120" cy="80" r="15" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="120" cy="80" r="2.5" fill="currentColor"/><line x1="56" y1="80" x2="105" y2="80" stroke="currentColor" stroke-width="1" class="fig-muted"/><g class="fig-accent"><line x1="120" y1="80" x2="195" y2="80" stroke="currentColor" stroke-width="4"/><circle cx="195" cy="80" r="5" fill="currentColor"/><line x1="200" y1="88" x2="200" y2="120" stroke="currentColor" stroke-width="3"/><polygon points="200,130 194,118 206,118" fill="currentColor"/><text x="214" y="112" font-size="12" fill="currentColor">effort</text></g><line x1="105" y1="80" x2="105" y2="150" stroke="currentColor" stroke-width="2"/><rect x="89" y="150" width="32" height="30" fill="none" stroke="currentColor" stroke-width="2"/><g font-size="11" fill="currentColor"><text x="105" y="196" text-anchor="middle">100 lb</text><text x="160" y="72" text-anchor="middle">15 in.</text><text x="66" y="58">drum radius 3 in.</text></g></svg>',
        alt: 'A winch. A drum of radius 3 inches turns on an axle. A crank arm extends 15 inches from the center to a handle, where an effort arrow pushes down. A rope wound on the drum hangs down to a 100-pound bucket.',
        caption: 'Figure 1. A hand winch.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '20', '30'],
        hint1: 'MA = handle radius ÷ drum radius.',
        hint2: 'Effort = load ÷ MA.',
        hint3: 'At 10 in., MA = 10 ÷ 3; or use effort × 10 = 100 × 3.',
        explanation: '(1) $15 \\div 3 = 5$. (2) $100 \\div 5 = 20$ lb. (3) effort $\\times 10 = 100 \\times 3 = 300$, so effort $= 30$ lb. A shorter crank needs more force.'
      }
    },
    {
      id: 'msm5-wheel-check',
      type: 'multiple-choice' as const,
      content: '**Wheel and axle checks.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two screwdrivers have the same tip. One has a handle $1$ inch across and the other a handle $2$ inches across. With the same grip force at the rim of the handle, how does the turning force at the tip compare?',
            options: ['The 2-inch handle gives twice the turning force', 'The 1-inch handle gives twice the turning force', 'Both give the same turning force at the tip', 'The 2-inch handle gives four times the force'],
            correctAnswer: 0,
            explanation: 'A screwdriver is a wheel and axle: MA = handle diameter ÷ tip (shank) diameter. Doubling the handle diameter doubles the MA, so the same grip gives twice the turning force.'
          },
          {
            question: 'Why do large trucks without power steering have larger steering wheels than small cars?',
            options: ['A bigger wheel gives a larger MA, so less force turns it', 'A bigger wheel makes the truck turn faster per rotation', 'A bigger wheel weighs more, which steadies the truck', 'A bigger wheel reduces the work needed to steer'],
            correctAnswer: 0,
            explanation: 'The steering wheel is the "wheel" of a wheel and axle. A larger radius means more mechanical advantage, so the driver needs less force (but turns the wheel through a longer distance). The work is not reduced.'
          }
        ]
      }
    },
    {
      id: 'msm5-screws',
      type: 'text' as const,
      content: `## Screws

A **screw** is an inclined plane wrapped around a cylinder. Each full turn moves the screw (or a nut on it) forward by one **pitch**: the distance from one thread to the next.

$$\\text{distance moved} = \\text{number of turns} \\times \\text{pitch}, \\qquad \\text{pitch} = \\frac{1}{\\text{threads per inch}}$$

**Worked example.** A vise screw has $8$ threads per inch, so its pitch is $\\frac{1}{8}$ inch. To close the jaws $1\\frac{1}{2}$ inches takes $1\\frac{1}{2} \\div \\frac{1}{8} = 12$ turns.

### Mechanical advantage of a screw jack

In one turn, your hand travels once around a circle (the **circumference** of the handle's path), while the load rises just **one pitch**:

$$\\text{MA} = \\frac{\\text{distance the handle travels in one turn}}{\\text{pitch}}$$

**Worked example.** A jack handle's end travels $48$ inches around in one turn, and the screw's pitch is $\\frac{1}{4}$ inch. $\\text{MA} = 48 \\div \\frac{1}{4} = 192$. A $40$-lb push on the handle could ideally lift $40 \\times 192 = 7{,}680$ lb. Friction in real screws is large, which is why a jack also **holds** the load without slipping back.

**Finer threads** (smaller pitch) give a **larger** MA but need **more turns**.`
    },
    {
      id: 'msm5-jack',
      type: 'input-boxes' as const,
      content: `**The screw jack.** ✍️ Use the figure.

A screw jack has a pitch of $\\frac{1}{4}$ inch. The end of its handle travels $60$ inches around in one full turn.

**1)** How many full turns raise the load $2$ inches? (number only)

**2)** What is the jack's ideal mechanical advantage? (number only)

**3)** With that MA, what ideal push on the handle lifts a $3{,}000$-lb load, in pounds? (number only)`,
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="110,200 210,200 190,160 130,160" fill="none" stroke="currentColor" stroke-width="2"/><rect x="146" y="50" width="28" height="110" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.5"><line x1="146" y1="60" x2="174" y2="70"/><line x1="146" y1="80" x2="174" y2="90"/><line x1="146" y1="100" x2="174" y2="110"/><line x1="146" y1="120" x2="174" y2="130"/><line x1="146" y1="140" x2="174" y2="150"/></g><rect x="126" y="34" width="68" height="16" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="174" y1="58" x2="290" y2="58" stroke="currentColor" stroke-width="4"/><circle cx="290" cy="58" r="5" fill="currentColor"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="120" y1="80" x2="140" y2="80"/><line x1="120" y1="100" x2="140" y2="100"/><line x1="124" y1="80" x2="124" y2="100"/></g><g font-size="11" fill="currentColor"><text x="118" y="94" text-anchor="end">pitch 1/4 in.</text><text x="160" y="26" text-anchor="middle">load</text><text x="232" y="50" text-anchor="middle">handle</text></g></svg>',
        alt: 'A screw jack: a threaded vertical screw rising from a base, with a load platform on top and a long handle sticking out sideways. The distance between neighboring threads, the pitch, is 1/4 inch.',
        caption: 'Figure 2. A screw jack with a 1/4-inch pitch.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '240', '12.5'],
        hint1: 'Turns = distance ÷ pitch.',
        hint2: 'MA = handle travel per turn ÷ pitch.',
        hint3: 'Effort = load ÷ MA.',
        explanation: '(1) $2 \\div \\frac{1}{4} = 8$ turns. (2) $60 \\div \\frac{1}{4} = 240$. (3) $3{,}000 \\div 240 = 12.5$ lb (ideal; friction makes the real push much larger).'
      }
    },
    {
      id: 'msm5-dd',
      type: 'dropdown-select' as const,
      content: '**Screws and wheels.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A screw is really this simple machine wrapped around a cylinder:',
            options: ['an inclined plane', 'a first-class lever', 'a fixed pulley', 'a wedge only'],
            correctAnswer: 0
          },
          {
            label: 'Compared with a coarse thread, a finer thread (smaller pitch) gives:',
            options: ['more MA but more turns', 'less MA and fewer turns', 'more MA and fewer turns', 'the same MA'],
            correctAnswer: 0
          },
          {
            label: 'A doorknob 2 inches in radius on a spindle 1/4 inch in radius has an MA of:',
            options: ['8', '2', '1/8', '4'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['an inclined plane', 'more MA but more turns', '8'],
        hint1: 'Unwrap the thread and you get a long ramp.',
        hint2: 'Each turn moves the load less, so your effort goes farther per inch of travel.',
        hint3: 'Wheel radius ÷ axle radius.',
        explanation: 'A screw thread is an inclined plane wrapped around a shaft. A smaller pitch means more mechanical advantage but more turns for the same travel. The doorknob: $2 \\div \\frac{1}{4} = 8$.'
      }
    },
    {
      id: 'msm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Wheel and axle:** effort × wheel radius = load × axle radius; **MA = wheel radius ÷ axle radius**
- Bigger handle, wheel or crank = **less force**, more distance
- **Screw:** distance = turns × pitch; pitch $= \\frac{1}{\\text{TPI}}$
- **Screw jack MA = handle travel per turn ÷ pitch**; finer thread = more MA, more turns
- Real screws have lots of friction, which also keeps them from slipping back

> **Up Next:** Part 6 — test strategy and the classic simple-machine traps.`
    }
  ]
};
