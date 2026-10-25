export const asvabMcSimpleMachinesPart1Data = {
  topicSlug: 'asvab-mc-simple-machines',
  sections: [
    {
      id: 'msm1-intro',
      type: 'text' as const,
      content: `# 🏗️ Levers, Pulleys, Inclined Planes and Screws

**Part 1 of 7 — Simple Machines and Mechanical Advantage**

### Why simple machines are all over the MC subtest

Mechanical Comprehension (MC) is $15$ questions in $22$ minutes on the CAT-ASVAB, about $1\\frac{1}{2}$ minutes each. A large share of them show a **simple machine**: a lever with weights on it, a set of pulleys, a ramp, a jack, a crank. Each one is solved with the same small idea, so this lesson pays off fast.

### The six simple machines

| Machine | What it is | Everyday examples |
|:---|:---|:---|
| **Lever** | a bar that pivots on a **fulcrum** | crowbar, seesaw, wheelbarrow, pliers |
| **Pulley** | a wheel with a rope or cable over it | flagpole, block and tackle, engine hoist |
| **Wheel and axle** | a large wheel fixed to a smaller axle | steering wheel, doorknob, winch crank, screwdriver |
| **Inclined plane** | a ramp | loading ramp, wheelchair ramp, road up a hill |
| **Wedge** | a moving inclined plane, often two back to back | axe, chisel, doorstop, knife |
| **Screw** | an inclined plane wrapped around a cylinder | jackscrew, bolt, vise, C-clamp |

### Mechanical advantage (MA)

A machine's **mechanical advantage** tells you how much it multiplies your force:

$$\\text{MA} = \\frac{\\text{output force (load)}}{\\text{input force (effort)}}$$

**Worked example.** A jack lets you lift a $3{,}000$-lb corner of a truck with a $60$-lb push on the handle. $\\text{MA} = 3{,}000 \\div 60 = 50$.`
    },
    {
      id: 'msm1-tradeoff',
      type: 'text' as const,
      content: `## The catch: you trade force for distance

A machine **cannot** give you more work out than you put in. For an ideal machine (no friction):

$$\\text{effort} \\times \\text{effort distance} = \\text{load} \\times \\text{load distance}$$

So if a machine lets you push with **one-fourth** the force, you must push **four times as far**. That is why:

- a long ramp needs less force than a short steep one, but you walk farther;
- a pulley system with MA $4$ makes you pull $4$ feet of rope for every $1$ foot the load rises;
- a jack with a huge MA needs many strokes to lift the truck a few inches.

**Worked example.** A block and tackle with MA $4$ lifts a $200$-lb engine. Ideal effort $= 200 \\div 4 = 50$ lb. To raise the engine $3$ feet, you pull $4 \\times 3 = 12$ feet of rope. Check the work: $50 \\times 12 = 600$ ft·lb in, $200 \\times 3 = 600$ ft·lb out. ✓

Real machines lose some work to friction, so the real effort is a little **more** than the ideal answer. Unless a question mentions friction or efficiency, use the ideal numbers. Some machines (like tweezers or a broom) have an MA **less than 1**: they cost force but gain **speed and distance** at the business end.`
    },
    {
      id: 'msm1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A hoist lets a mechanic lift a $480$-lb transmission by pulling with $120$ lb. What is the hoist\'s mechanical advantage?',
            options: ['4', '360', '1/4', '600'],
            correctAnswer: 0,
            explanation: 'MA = output force ÷ input force = $480 \\div 120 = 4$. Subtracting ($360$) or adding ($600$) the forces does not give MA.'
          },
          {
            question: 'Which simple machine is a doorknob?',
            options: ['Wheel and axle', 'Wedge', 'Inclined plane', 'Pulley'],
            correctAnswer: 0,
            explanation: 'The knob is a large wheel fixed to a thin shaft (the axle). A small force on the knob turns the shaft with a larger force.'
          }
        ]
      }
    },
    {
      id: 'msm1-ramp-fig',
      type: 'multiple-choice' as const,
      content: '**Warm-up 3.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="140" x2="310" y2="140" stroke="currentColor" stroke-width="2"/><rect x="250" y="80" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="70,140 250,140 250,80" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><rect x="40" y="116" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"/><line x1="52" y1="112" x2="52" y2="72" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><polygon points="52,64 46,76 58,76" fill="currentColor"/></g><text x="34" y="60" font-size="12" fill="currentColor">lift straight up</text><text x="160" y="160" font-size="12" fill="currentColor" text-anchor="middle">or push it up the ramp</text><text x="280" y="114" font-size="12" fill="currentColor" text-anchor="middle">platform</text></svg>',
        alt: 'A box on the ground next to a raised platform. It can be lifted straight up to the platform, or pushed up a long ramp that leads to the same platform.',
        caption: 'Figure 1. Two ways to get a box up to a platform.'
      },
      exercise: {
        questions: [
          {
            question: 'A box can be lifted straight up onto a platform or pushed up a frictionless ramp to the same platform. Compared with lifting, how do the force and the work for the ramp compare?',
            options: ['Less force, but the same work', 'Less force and less work', 'More force, but less work', 'The same force and the same work'],
            correctAnswer: 0,
            explanation: 'The ramp lets you push with less force over a longer distance. The work (force × distance) ends up the same: weight × height. Machines trade force for distance; they never reduce the work.'
          }
        ]
      }
    },
    {
      id: 'msm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- The six simple machines: **lever, pulley, wheel and axle, inclined plane, wedge, screw**
- **MA = load ÷ effort**
- Ideal machines: **effort × effort distance = load × load distance**. Less force always means more distance
- Machines never reduce the **work**; friction makes real effort a bit higher than ideal

> **Up Next:** Part 2 — levers: classes, fulcrum math and balance problems.`
    }
  ]
};
