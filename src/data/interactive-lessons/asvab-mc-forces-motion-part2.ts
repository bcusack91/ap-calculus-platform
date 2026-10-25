export const asvabMcForcesMotionPart2Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf2-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 2 of 7 — Forces, Weight and Center of Gravity**

### Forces and net force

A **force** is a push or a pull. On the ASVAB, forces are usually given in **pounds (lb)**. When several forces act on one object, what matters is the **net force**:

- Forces in the **same** direction **add**.
- Forces in **opposite** directions **subtract**, and the net force points the way of the bigger one.
- If the forces cancel (net force $= 0$), the forces are **balanced**: the object stays at rest, or keeps moving at a steady speed in a straight line.

**Worked example.** Two soldiers pull a sled to the right with $40$ lb and $25$ lb, and friction pulls left with $15$ lb. Net force $= 40 + 25 - 15 = 50$ lb to the right.

### Newton's three laws in plain words

| Law | Plain words | Example |
|:---|:---|:---|
| 1st (inertia) | an object keeps doing what it is doing unless a net force changes it | passengers lurch forward when a bus brakes |
| 2nd | a bigger net force gives a bigger acceleration; a bigger mass gives a smaller one ($F = ma$) | an empty truck speeds up faster than a loaded one |
| 3rd | every push has an equal and opposite push back | a rifle kicks back as the bullet goes forward; a swimmer pushes water back to move forward |

### Mass and weight

**Mass** is how much matter an object has; it is the same everywhere. **Weight** is the force of gravity on that mass. On the Moon, gravity is weaker, so the same toolbox **weighs less** but has the **same mass**.`
    },
    {
      id: 'mcf2-net-input',
      type: 'input-boxes' as const,
      content: `**Net force.** ✍️ Use the figure.

A crate is pulled to the right by a $30$-lb rope and to the left by a $12$-lb rope.

**1)** The size of the net force on the crate, in pounds (number only):

**2)** A second $20$-lb pull to the left is added. Now what is the size of the net force, in pounds (number only)?`,
      figure: {
        svg: '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="100" x2="310" y2="100" stroke="currentColor" stroke-width="2"/><rect x="125" y="50" width="70" height="50" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="195" y1="75" x2="280" y2="75" stroke="currentColor" stroke-width="3"/><polygon points="292,75 280,68 280,82" fill="currentColor"/><text x="240" y="64" font-size="13" fill="currentColor" text-anchor="middle">30 lb</text></g><g class="fig-accent-2"><line x1="125" y1="75" x2="58" y2="75" stroke="currentColor" stroke-width="3"/><polygon points="46,75 58,68 58,82" fill="currentColor"/><text x="88" y="64" font-size="13" fill="currentColor" text-anchor="middle">12 lb</text></g></svg>',
        alt: 'A crate on the floor with a rope pulling it to the right with 30 pounds and another rope pulling it to the left with 12 pounds.',
        caption: 'Figure 1. Two ropes pull a crate in opposite directions.'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['18', '2'],
        hint1: 'Opposite directions subtract.',
        hint2: 'Total left is now 12 + 20 = 32 lb.',
        hint3: 'Compare 30 lb right with 32 lb left.',
        explanation: '(1) $30 - 12 = 18$ lb, to the right. (2) Left pulls total $12 + 20 = 32$ lb, so the net force is $32 - 30 = 2$ lb, now to the **left**.'
      }
    },
    {
      id: 'mcf2-newton-check',
      type: 'multiple-choice' as const,
      content: '**Newton\'s laws and weight.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A soldier fires a rifle, and the rifle pushes back against her shoulder. Which law explains the push on her shoulder?',
            options: ['Newton\'s third law: equal and opposite forces', 'Newton\'s first law: objects keep moving', 'The law of conservation of mass', 'Pascal\'s principle of transmitted pressure'],
            correctAnswer: 0,
            explanation: 'The gases push the bullet forward, and the bullet and gases push the rifle backward with an equal force: action and reaction. Pascal\'s principle is about pressure in confined fluids.'
          },
          {
            question: 'A toolbox has a mass of $10$ kilograms on Earth. Taken to the Moon, which is true?',
            options: ['Its mass stays 10 kg, but it weighs less', 'Its mass and its weight both get smaller', 'Its mass drops, but its weight stays the same', 'Its mass and its weight both stay the same'],
            correctAnswer: 0,
            explanation: 'Mass is the amount of matter and does not change with location. Weight is gravity\'s pull, and the Moon\'s gravity is weaker, so the toolbox weighs less there.'
          }
        ]
      }
    },
    {
      id: 'mcf2-cg',
      type: 'text' as const,
      content: `## Center of gravity and stability

The **center of gravity (CG)** is the point where an object's weight can be treated as acting: its balance point.

- An object **tips over** when its CG moves outside the edge of its **base of support**.
- **Lower CG** and a **wider base** = more stable. That is why race cars sit low, why heavy cargo is loaded on the **bottom** of a truck, and why you spread your feet on a moving deck.
- Adding weight **high up** raises the CG and makes tipping easier: a ladder rack full of steel on top of a van, or a load lifted high on a forklift.

### Cranes and counterweights

A crane lifting a load out on its boom is like a seesaw with the tipping edge at its front wheels or outriggers. The **farther out** the load and the **heavier** it is, the more it tends to tip the crane forward. A **counterweight** at the back, **outriggers** that widen the base, and a **shorter reach** all keep the combined CG inside the base.

### Tension and compression

- A rope or cable can only **pull**: it is in **tension**.
- A post, column or strut that is **pushed on** from both ends is in **compression**.
- When a load hangs from two ropes, the **more nearly horizontal** the ropes, the **greater the tension** in each one. Steep, nearly vertical ropes share the weight with the least tension. Two vertical ropes holding a centered load each carry **half** of it.`
    },
    {
      id: 'mcf2-crane',
      type: 'multiple-choice' as const,
      content: '**The crane.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="174" x2="310" y2="174" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><rect x="60" y="134" width="120" height="28"/><circle cx="82" cy="166" r="8"/><circle cx="158" cy="166" r="8"/><rect x="146" y="108" width="34" height="26"/><line x1="110" y1="132" x2="262" y2="40" stroke-width="5"/><line x1="262" y1="40" x2="262" y2="112"/></g><g class="fig-muted"><rect x="60" y="110" width="36" height="24" fill="currentColor"/></g><g class="fig-accent"><rect x="247" y="112" width="30" height="26" fill="none" stroke="currentColor" stroke-width="2.5"/></g><g font-size="12" fill="currentColor"><text x="20" y="104">counterweight</text><text x="230" y="156">load</text><text x="166" y="192" text-anchor="middle">front wheels</text></g></svg>',
        alt: 'A truck crane. A counterweight sits on the back of the truck. A long boom rises from the middle of the truck and reaches far out past the front wheels, and a cable hangs from its tip holding a load.',
        caption: 'Figure 2. A truck crane holding a load out past its front wheels.'
      },
      exercise: {
        questions: [
          {
            question: 'The crane in the figure has a counterweight at the back and holds a load on a long boom that reaches out past its front wheels. Which change would make the crane MORE likely to tip forward?',
            options: ['Extending the boom so the load is farther out', 'Adding weight to the counterweight at the back', 'Lowering the boom tip so the load is closer in', 'Setting outriggers out ahead of the front wheels'],
            correctAnswer: 0,
            explanation: 'Moving the load farther out shifts the combined center of gravity toward and past the front wheels, which act as the tipping edge. A heavier counterweight, a closer load or outriggers that widen the base all keep the center of gravity inside the base.'
          }
        ]
      }
    },
    {
      id: 'mcf2-ropes',
      type: 'multiple-choice' as const,
      content: '**Two ways to hang a sign.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2"><line x1="10" y1="20" x2="150" y2="20"/><line x1="170" y1="20" x2="310" y2="20"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="45" y1="20" x2="52" y2="96"/><line x1="115" y1="20" x2="108" y2="96"/><line x1="174" y1="20" x2="222" y2="62"/><line x1="306" y1="20" x2="258" y2="62"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="50" y="96" width="60" height="30"/><rect x="210" y="62" width="60" height="30"/></g><g font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle"><text x="80" y="146">A</text><text x="240" y="146">B</text></g></svg>',
        alt: 'Two identical signs, each hung from a ceiling by two ropes. In arrangement A, the ropes hang almost straight down. In arrangement B, the ropes are attached far apart and slant at a shallow angle toward the sign.',
        caption: 'Figure 3. The same sign hung two ways.'
      },
      exercise: {
        questions: [
          {
            question: 'The same sign is hung two ways: in A the two ropes hang nearly straight down, and in B they slant out at a shallow angle. How does the tension in each rope compare?',
            options: ['Each rope in B has more tension than each rope in A', 'Each rope in A has more tension than each rope in B', 'The tension is the same, because the sign is the same', 'Neither rope set carries tension, only the ceiling does'],
            correctAnswer: 0,
            explanation: 'Only the upward part of each rope\'s pull holds up the sign. A shallow rope pulls mostly sideways, so it needs a larger total tension to supply the same upward force. Nearly vertical ropes each carry about half the weight, the least possible.'
          }
        ]
      }
    },
    {
      id: 'mcf2-dd',
      type: 'dropdown-select' as const,
      content: '**Stability, tension and compression.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'To make a loaded truck less likely to roll over, put the heaviest cargo:',
            options: ['low and centered', 'high and centered', 'on the roof rack', 'at the very back'],
            correctAnswer: 0
          },
          {
            label: 'A steel cable holding up a hanging load is in:',
            options: ['tension', 'compression', 'balance only', 'friction'],
            correctAnswer: 0
          },
          {
            label: 'A wooden post holding up a porch roof is in:',
            options: ['compression', 'tension', 'friction', 'torsion only'],
            correctAnswer: 0
          },
          {
            label: 'A centered 80-lb load hangs from two vertical ropes. Each rope holds:',
            options: ['40 lb', '80 lb', '20 lb', '160 lb'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['low and centered', 'tension', 'compression', '40 lb'],
        hint1: 'A low center of gravity is stable.',
        hint2: 'Cables can only pull.',
        hint3: 'Two equal vertical supports share a centered load equally.',
        explanation: 'Low, centered cargo keeps the center of gravity low and inside the wheelbase. A cable that holds a load is pulled (tension); a post that holds up a roof is squeezed (compression). Two vertical ropes under a centered load each carry half: $80 \\div 2 = 40$ lb.'
      }
    },
    {
      id: 'mcf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Net force**: same direction adds, opposite directions subtract; balanced forces = no change in motion
- Newton: **inertia**; **$F = ma$** (more mass, less acceleration); **equal and opposite** reaction
- **Mass** stays the same everywhere; **weight** depends on gravity
- Tipping happens when the **center of gravity** passes the edge of the base: keep it **low**, keep the base **wide**
- Load farther out on a crane boom = more tipping; counterweights and outriggers fight it
- Ropes are in **tension**, posts in **compression**; shallow ropes carry **more** tension than steep ones

> **Up Next:** Part 3 — friction and motion.`
    }
  ]
};
