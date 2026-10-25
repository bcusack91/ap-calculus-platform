export const asvabMcSimpleMachinesPart4Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm4-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 4 of 7 — Inclined Planes and Wedges**

### The inclined plane (ramp)

Rolling or sliding a heavy load up a ramp takes less force than lifting it straight up, because you spread the same work over a longer distance.

$$\\text{MA} = \\frac{\\text{length of the ramp (slope)}}{\\text{height of the ramp}}$$

$$\\text{effort} \\times \\text{length} = \\text{load} \\times \\text{height} \\quad \\Rightarrow \\quad \\text{effort} = \\frac{\\text{load} \\times \\text{height}}{\\text{length}}$$

Use the length **along the slope**, not the horizontal distance along the ground.

**Worked example.** A $300$-lb generator is pushed up a ramp $9$ feet long to a truck bed $3$ feet high. $\\text{MA} = 9 \\div 3 = 3$, and the ideal effort is $300 \\div 3 = 100$ lb.

**Key ideas:**

- A **longer** ramp to the **same height** needs **less** force but more distance.
- A **steeper** ramp (shorter, same height) needs **more** force.
- The **work** (load × height) is the same either way; friction makes the real effort a bit more than ideal.
- Roads that switch back and forth up a mountain are long inclined planes: gentler grade, longer drive.`
    },
    {
      id: 'msm4-ramp-input',
      type: 'input-boxes' as const,
      content: `**Roll the barrel.** ✍️ Use the figure.

A $400$-lb barrel is rolled up a ramp $12$ feet long to a platform $3$ feet high.

**1)** The mechanical advantage of the ramp (number only):

**2)** The ideal effort needed, in pounds (number only):

**3)** The same barrel goes up a $6$-foot ramp to the same $3$-foot height. The ideal effort, in pounds (number only):`,
      figure: {
        svg: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="150" x2="310" y2="150" stroke="currentColor" stroke-width="2"/><polygon points="40,150 280,150 280,90" fill="none" stroke="currentColor" stroke-width="2"/><rect x="280" y="90" width="30" height="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="146.1" cy="107" r="16" fill="none" stroke="currentColor" stroke-width="2"/><text x="146" y="111" font-size="10" fill="currentColor" text-anchor="middle">400 lb</text><g class="fig-accent"><line x1="166" y1="103" x2="214.5" y2="90.9" stroke="currentColor" stroke-width="3"/><polygon points="224.2,88.5 213,85.1 216,96.7" fill="currentColor"/><text x="200" y="76" font-size="12" fill="currentColor" text-anchor="middle">effort</text></g><g font-size="12" fill="currentColor"><text x="110" y="142">12 ft (along the slope)</text><text x="262" y="126" text-anchor="end">3 ft</text></g><line x1="270" y1="90" x2="270" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" class="fig-muted"/></svg>',
        alt: 'A ramp 12 feet long along its slope rises to a platform 3 feet high. A 400-pound barrel sits on the ramp, and an effort arrow pushes it up along the slope.',
        caption: 'Figure 1. A barrel on a 12-ft ramp to a 3-ft platform.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '100', '200'],
        hint1: 'MA = length ÷ height.',
        hint2: 'Effort = load ÷ MA.',
        hint3: 'A 6-ft ramp to 3 ft has MA 2.',
        explanation: '(1) $12 \\div 3 = 4$. (2) $400 \\div 4 = 100$ lb. (3) $6 \\div 3 = 2$, so $400 \\div 2 = 200$ lb: the shorter, steeper ramp needs twice the force.'
      }
    },
    {
      id: 'msm4-two-ramps',
      type: 'multiple-choice' as const,
      content: '**Two ramps.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="130" x2="310" y2="130" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="14,130 106,130 106,90"/><polygon points="114,130 310,130 310,90"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="50" y="92">X: 10 ft long</text><text x="200" y="98">Y: 20 ft long</text><text x="60" y="150">X: 4 ft high</text><text x="212" y="150">Y: 4 ft high</text></g></svg>',
        alt: 'Two ramps that both rise 4 feet. Ramp X is 10 feet long along its slope and steeper. Ramp Y is 20 feet long along its slope and gentler.',
        caption: 'Figure 2. Two ramps of the same height.'
      },
      exercise: {
        questions: [
          {
            question: 'Ramps X ($10$ ft long) and Y ($20$ ft long) both rise $4$ feet. Ignoring friction, what effort pushes a $200$-lb cart up ramp Y?',
            options: ['40 lb', '80 lb', '100 lb', '50 lb'],
            correctAnswer: 0,
            explanation: 'Ramp Y: effort $= 200 \\times 4 \\div 20 = 40$ lb. Ramp X would take $200 \\times 4 \\div 10 = 80$ lb. The longer ramp halves the force, and the work is $200 \\times 4 = 800$ ft·lb either way.'
          }
        ]
      }
    },
    {
      id: 'msm4-wedges',
      type: 'text' as const,
      content: `## Wedges

A **wedge** is an inclined plane that **moves** into the material. As it is driven forward, its sloped sides push the material **apart** with a much larger sideways force.

$$\\text{MA of a wedge} \\approx \\frac{\\text{length of the wedge}}{\\text{thickness at its back}}$$

- A **long, thin** wedge has a **large** MA: it splits with less force but must be driven farther.
- A **short, thick** wedge has a **small** MA: it needs more force.
- Examples: an axe or splitting maul, a chisel, a knife blade, a doorstop, a nail point, the teeth of a saw.

**Worked example.** A splitting wedge is $10$ inches long and $2$ inches thick at the back. Its ideal MA is $10 \\div 2 = 5$. Sharpening an axe makes its edge thinner, which raises its MA, so it bites in with less force.`
    },
    {
      id: 'msm4-wedge-fig',
      type: 'multiple-choice' as const,
      content: '**Two wedges.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="20,70 180,60 180,80"/><polygon points="220,70 300,50 300,90"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="100" y="46">A: 8 in. long, 1 in. thick</text><text x="260" y="36">B: 4 in. long, 2 in. thick</text><text x="100" y="120">A</text><text x="260" y="120">B</text></g></svg>',
        alt: 'Two wedges drawn to scale. Wedge A is 8 inches long and 1 inch thick at its back: long and thin. Wedge B is 4 inches long and 2 inches thick: short and blunt.',
        caption: 'Figure 3. Two wedges.'
      },
      exercise: {
        questions: [
          {
            question: 'Wedge A is $8$ inches long and $1$ inch thick; wedge B is $4$ inches long and $2$ inches thick. Which needs less driving force to split a log, and what is its ideal MA?',
            options: ['A, with an MA of 8', 'B, with an MA of 2', 'A, with an MA of 2', 'B, with an MA of 8'],
            correctAnswer: 0,
            explanation: 'MA ≈ length ÷ thickness: A is $8 \\div 1 = 8$, B is $4 \\div 2 = 2$. The long, thin wedge multiplies force more, so it needs less driving force (though it must be driven farther).'
          }
        ]
      }
    },
    {
      id: 'msm4-check',
      type: 'multiple-choice' as const,
      content: '**Ramps and wedges in practice.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Mountain roads zigzag back and forth instead of running straight up the slope. What does this do?',
            options: ['Makes a longer, gentler incline that needs less force', 'Shortens the trip so vehicles use less total energy', 'Raises the height a truck must climb to the top', 'Adds friction so trucks cannot roll back down'],
            correctAnswer: 0,
            explanation: 'Switchbacks turn a steep climb into a long, gentle inclined plane: less force (power) needed at any moment, over a longer distance. The height gained is the same.'
          },
          {
            question: 'Why is a sharp axe easier to use than a dull one?',
            options: ['A thinner edge makes it a wedge with a larger MA', 'A sharp edge makes the axe head heavier', 'A sharp edge lowers the work needed to split the log', 'A sharp edge makes the axe a first-class lever'],
            correctAnswer: 0,
            explanation: 'The axe head is a wedge, and sharpening makes its edge thinner, so it has more mechanical advantage and starts the split with less force. Machines never reduce the total work.'
          }
        ]
      }
    },
    {
      id: 'msm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Ramp MA = slope length ÷ height**; **effort = load × height ÷ length**
- Longer ramp, same height: **less force, more distance, same work**
- A **wedge** is a moving inclined plane; MA ≈ **length ÷ thickness**; long and thin = more MA
- Axes, chisels, knives, nail points and doorstops are wedges

> **Up Next:** Part 5 — screws and the wheel and axle.`
    }
  ]
};
