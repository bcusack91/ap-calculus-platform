export const asvabMcSimpleMachinesPart6Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm6-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 6 of 7 — Simple Machines Test Strategy and Traps**

### Timing

Mechanical Comprehension: **$15$ questions in $22$ minutes**, about **$88$ seconds** each. Simple-machine questions are some of the most reliable points on the subtest, because one formula solves each type. Aim for **45 to 75 seconds** each, with one line of scratch work.

- You cannot go back on the CAT, so finish each question before moving on.
- Treat every question as scored; tryout questions look exactly the same.
- If time runs short, keep working real answers. The CAT penalizes a run of wrong answers at the end of a subtest heavily.

### One formula per machine

| Machine | Ideal relationship | MA |
|:---|:---|:---|
| Lever | effort × effort arm = load × load arm | effort arm ÷ load arm |
| Pulleys | effort = load ÷ supporting segments | number of supporting segments |
| Inclined plane | effort × length = load × height | length ÷ height |
| Wedge | (MA only) | length ÷ thickness |
| Wheel and axle | effort × wheel radius = load × axle radius | wheel radius ÷ axle radius |
| Screw | effort × handle travel per turn = load × pitch | handle travel per turn ÷ pitch |

All six are the same idea: **force × distance in = force × distance out**.

### Sanity checks that catch most mistakes

- With MA above 1, the **effort must be smaller** than the load. If your effort comes out bigger, you multiplied when you should have divided.
- The heavier side of a balanced lever is always **closer** to the fulcrum.
- A machine never puts out **more work** than you put in.`
    },
    {
      id: 'msm6-traps',
      type: 'text' as const,
      content: `## The traps test writers like

| Trap | The fact that beats it |
|:---|:---|
| Measuring lever arms from the **end of the bar** | arms are measured from the **fulcrum** |
| Counting the free end of a pulley rope that comes off a **fixed** pulley | count only segments that hold up the **moving** block |
| Forgetting the free end when it leaves the **moving** block going up | that one **does** count |
| Using the **horizontal** run of a ramp | use the length **along the slope** |
| Thinking a machine saves **work** | it saves **force**; you pay in distance |
| Expecting every lever to multiply force | **3rd-class** levers (tweezers, forearm, broom) have MA **below 1** |
| Comparing weights instead of weight × distance | turning effect = **weight × distance** from the fulcrum |
| Mixing radius and diameter | use the same kind for wheel and axle |`
    },
    {
      id: 'msm6-bar-trap',
      type: 'multiple-choice' as const,
      content: '**Trap 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="26" y1="92" x2="294" y2="92" stroke="currentColor" stroke-width="6"/><polygon points="110,96 98,120 122,120" fill="none" stroke="currentColor" stroke-width="2"/><rect x="14" y="58" width="32" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="30" y="52" font-size="12" fill="currentColor" text-anchor="middle">140 lb</text><g class="fig-accent"><line x1="290" y1="40" x2="290" y2="78" stroke="currentColor" stroke-width="3"/><polygon points="290,88 283,76 297,76" fill="currentColor"/><text x="290" y="32" font-size="12" fill="currentColor" text-anchor="middle">effort</text></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="30" y1="140" x2="290" y2="140"/><line x1="30" y1="134" x2="30" y2="146"/><line x1="110" y1="134" x2="110" y2="146"/><line x1="290" y1="134" x2="290" y2="146"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="70" y="158">3 ft</text><text x="200" y="158">7 ft</text><text x="160" y="16">bar 10 ft long</text></g></svg>',
        alt: 'A 10-foot bar on a fulcrum. A 140-pound load sits on the left end, 3 feet from the fulcrum. The effort pushes down on the right end, 7 feet from the fulcrum.',
        caption: 'Figure 1. A 10-ft bar with the fulcrum 3 ft from the load.'
      },
      exercise: {
        questions: [
          {
            question: 'A $10$-ft bar has its fulcrum $3$ ft from a $140$-lb load on one end. What effort at the other end balances the load?',
            options: ['60 lb', '42 lb', '140 lb', '327 lb'],
            correctAnswer: 0,
            explanation: 'The effort arm is $10 - 3 = 7$ ft, measured from the fulcrum. effort × $7 = 140 \\times 3 = 420$, so effort $= 60$ lb. Using the full $10$ ft gives the trap answer $42$ lb; $327$ lb comes from multiplying instead of dividing.'
          }
        ]
      }
    },
    {
      id: 'msm6-trap-check',
      type: 'multiple-choice' as const,
      content: '**Traps 2 and 3.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The forearm is a third-class lever: the elbow is the fulcrum, the biceps pulls $2$ inches from the elbow, and a $10$-lb dumbbell is held $14$ inches from the elbow. What force must the biceps supply to hold it level?',
            options: ['70 lb', '10 lb', '1.4 lb', '5 lb'],
            correctAnswer: 0,
            explanation: 'Biceps × $2$ = $10 \\times 14 = 140$, so the biceps must pull $70$ lb. A third-class lever has MA below $1$ ($2 \\div 14 = \\frac{1}{7}$): it costs force but moves the hand fast and far.'
          },
          {
            question: 'A ramp rises $2$ feet over a horizontal run of about $10$ feet, and its sloped surface measures $10.2$ feet. Which length should you use to find its ideal MA?',
            options: ['The 10.2-ft sloped surface', 'The 10-ft horizontal run', 'The 2-ft height alone', 'The sum, about 22 ft'],
            correctAnswer: 0,
            explanation: 'Ramp MA = length along the slope ÷ height, because that is the distance the effort actually moves. Here $10.2 \\div 2 = 5.1$. On a gentle ramp the two lengths are close, but the slope length is the correct one.'
          }
        ]
      }
    },
    {
      id: 'msm6-speed-dd',
      type: 'dropdown-select' as const,
      content: '**Speed drill.** Under 30 seconds each. ⏱️',
      exercise: {
        dropdowns: [
          {
            label: 'MA of a lever with a 6-ft effort arm and a 1.5-ft load arm:',
            options: ['4', '9', '7.5', '1/4'],
            correctAnswer: 0
          },
          {
            label: 'Effort to lift 500 lb with 5 supporting rope segments:',
            options: ['100 lb', '2,500 lb', '500 lb', '50 lb'],
            correctAnswer: 0
          },
          {
            label: 'MA of a ramp 15 ft long and 3 ft high:',
            options: ['5', '45', '12', '1/5'],
            correctAnswer: 0
          },
          {
            label: 'MA of a crank 18 in. long turning a 3-in. radius drum:',
            options: ['6', '15', '54', '21'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['4', '100 lb', '5', '6'],
        hint1: 'Effort arm ÷ load arm.',
        hint2: 'Load ÷ number of segments.',
        hint3: 'Length ÷ height; crank radius ÷ drum radius.',
        explanation: '$6 \\div 1.5 = 4$; $500 \\div 5 = 100$ lb; $15 \\div 3 = 5$; $18 \\div 3 = 6$.'
      }
    },
    {
      id: 'msm6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Every simple machine: **force × distance in = force × distance out**
- Lever arms from the **fulcrum**; ramp length **along the slope**; pulleys count **supporting segments on the moving block**
- With MA above 1, effort is **smaller** than the load; machines never save **work**
- 3rd-class levers trade force for **speed and reach** (MA below 1)

> **Up Next:** Part 7 — a mixed mastery set across all six simple machines.`
    }
  ]
};
