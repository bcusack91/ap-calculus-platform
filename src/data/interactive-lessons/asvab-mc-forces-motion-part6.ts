export const asvabMcForcesMotionPart6Data = {
  topicSlug: 'asvab-mc-forces-motion',
  sections: [
    {
      id: 'mcf6-intro',
      type: 'text' as const,
      content: `# ⚙️ Forces, Work and Energy

**Part 6 of 7 — Forces and Energy Test Strategy and Traps**

### Your clock: about 1½ minutes a question

Mechanical Comprehension gives you **$15$ questions in $22$ minutes**, about **$88$ seconds** each. That is more time per question than Shop or Auto, because you have to study a picture. Use it, but don't overspend:

- **Concept questions** (which way friction points, where a pendulum is fastest) should take **30 to 45 seconds**.
- **Calculation questions** (work, power, pressure) take a line or two of scratch work. Write the formula first, then plug in.
- You cannot go back. Answer each question before moving on, and treat every question as scored, because tryout questions look the same.
- If time runs short, keep reading and answering for real. A string of wrong answers at the end of a subtest is penalized heavily on the CAT.

### A four-step routine for picture questions

1. **Label the forces** in your head: weight (down), support (perpendicular to the surface), friction (along the surface, against sliding), pushes and pulls.
2. **Circle the numbers** that matter and ignore the ones that don't (a weight is irrelevant to the work done by a horizontal push).
3. **Pick the principle**: net force, center of gravity, friction, $W = Fd$, energy trade, $P = W/t$, $P = F/A$.
4. **Check with an extreme case.** If the rope were almost flat, would the tension be huge? (Yes.) If the area shrank to a point, would the pressure soar? (Yes.)`
    },
    {
      id: 'mcf6-traps',
      type: 'text' as const,
      content: `## The traps test writers like

| Trap | The fact that beats it |
|:---|:---|
| Friction drawn in the direction of motion | friction points **against** the sliding, or against the way the object **would** slide |
| "Work" for holding or carrying | no movement in the direction of the force = **no work** |
| Using weight when the push is given | horizontal push: work = **push** × distance |
| Pressure versus force | the same force on a smaller area is **more pressure**, not more force |
| Kinetic energy doubles with speed | it **quadruples** (speed squared) |
| Mass versus weight | mass never changes with location; weight does |
| Released object curves | it flies off in a **straight line**, tangent to its path |
| A machine over 100% efficient | impossible; eliminate that choice |
| Heavier box tips harder | stability depends on the **height of the CG** and the **width of the base**, not just weight |`
    },
    {
      id: 'mcf6-ramp',
      type: 'multiple-choice' as const,
      content: '**Trap 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="20,160 300,160 300,40" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="150,104.3 190,87.1 178.2,59.5 138.2,76.7" fill="none" stroke="currentColor" stroke-width="2"/><text x="104" y="52" font-size="12" fill="currentColor" text-anchor="middle">crate at rest</text></svg>',
        alt: 'A ramp rising from left to right. A crate sits on the ramp partway up and is not moving.',
        caption: 'Figure 1. A crate resting on a ramp without sliding.'
      },
      exercise: {
        questions: [
          {
            question: 'A crate sits on a ramp that rises from left to right, and it is not moving. In which direction does friction act on the crate?',
            options: ['Up the ramp, parallel to its surface', 'Down the ramp, parallel to its surface', 'There is no friction on a crate at rest', 'Straight up, opposite the crate\'s weight'],
            correctAnswer: 0,
            explanation: 'Gravity tends to slide the crate down the ramp, so static friction acts up the ramp to hold it still. A resting object can still feel friction; that is exactly what keeps it from sliding.'
          }
        ]
      }
    },
    {
      id: 'mcf6-trap-check',
      type: 'multiple-choice' as const,
      content: '**Traps 2 to 4.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A private carries a $40$-lb box at a constant height across a level $30$-foot hallway at a steady speed. How much work does the lifting (upward) force she applies do on the box?',
            options: ['0 ft·lb', '1,200 ft·lb', '40 ft·lb', '70 ft·lb'],
            correctAnswer: 0,
            explanation: 'Her upward force is perpendicular to the sideways motion, and the box never rises, so that force does zero work. $1{,}200$ ft·lb is the trap from multiplying the weight by a horizontal distance.'
          },
          {
            question: 'Two loaded trailers weigh the same. Trailer X rides on four narrow tires; trailer Y rides on eight wide tires. On soft ground, which sinks in more, and why?',
            options: ['X, because its weight presses on a smaller area', 'Y, because more tires add more force to the ground', 'Both sink the same, because their weights are equal', 'Y, because wide tires create more friction with mud'],
            correctAnswer: 0,
            explanation: 'Equal weights give equal force, but X spreads it over less tire area, so its pressure on the ground is higher and it sinks more. Extra tires spread the load; they do not add force.'
          },
          {
            question: 'An inventor claims a new pulley system puts out $1{,}200$ ft·lb of work for every $1{,}000$ ft·lb put in. What is wrong with the claim?',
            options: ['No machine can put out more work than goes in', 'Pulleys cannot do any work at all', 'The output should be exactly 1,000 ft·lb', 'Pulley efficiency is always exactly 50%'],
            correctAnswer: 0,
            explanation: 'That would be $120\\%$ efficiency. Machines can multiply force, but never work: friction always makes the output less than the input.'
          }
        ]
      }
    },
    {
      id: 'mcf6-speed-dd',
      type: 'dropdown-select' as const,
      content: '**Speed drill.** Under 30 seconds each. ⏱️',
      exercise: {
        dropdowns: [
          {
            label: 'Power = ',
            options: ['work ÷ time', 'force × time', 'force ÷ area', 'mass × speed'],
            correctAnswer: 0
          },
          {
            label: 'Pressure = ',
            options: ['force ÷ area', 'force × distance', 'work ÷ time', 'mass ÷ volume'],
            correctAnswer: 0
          },
          {
            label: 'A pendulum moves fastest at:',
            options: ['the bottom of its swing', 'the top of its swing', 'the moment it is released', 'every point equally'],
            correctAnswer: 0
          },
          {
            label: 'One horsepower equals:',
            options: ['550 ft·lb per second', '100 ft·lb per second', '1,000 ft·lb per second', '33 ft·lb per second'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['work ÷ time', 'force ÷ area', 'the bottom of its swing', '550 ft·lb per second'],
        hint1: 'Power is how fast work is done.',
        hint2: 'Pounds per square inch.',
        hint3: 'Lowest point = most kinetic energy.',
        explanation: 'Power is work per unit time; pressure is force per unit area; a pendulum is fastest at the bottom; one horsepower is 550 ft·lb per second.'
      }
    },
    {
      id: 'mcf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- MC: **15 questions, 22 minutes, about 88 seconds each**; concept questions in 30 to 45 seconds
- Routine: **label forces → circle the numbers → pick the principle → check an extreme case**
- Friction opposes sliding **or would-be sliding** (a crate at rest on a ramp feels friction up the ramp)
- No movement along the force = no work; use the **push**, not the weight, for horizontal work
- Same weight on a smaller area = more pressure; efficiency is never over $100\\%$

> **Up Next:** Part 7 — a mixed mastery set for forces, work and energy.`
    }
  ]
};
