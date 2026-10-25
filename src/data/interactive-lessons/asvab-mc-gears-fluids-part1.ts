export const asvabMcGearsFluidsPart1Data = {
  topicSlug: 'asvab-mc-gears-fluids',
  sections: [
    {
      id: 'mgf1-intro',
      type: 'text' as const,
      content: `# ⚙️ Gears, Fluids and Structures

**Part 1 of 7 — Gears, Fluids and Structures on the ASVAB**

### The rest of Mechanical Comprehension

Mechanical Comprehension (MC) is $15$ questions in $22$ minutes on the CAT-ASVAB, about $1\\frac{1}{2}$ minutes each. Besides forces and simple machines, the official topic list includes "mechanical motion," "fluid dynamics" and "structural support." In practice that means pictures like these:

- a **gear train**: which way does the last gear turn, and how fast?
- **belt-driven pulleys** of different sizes: which one spins fastest?
- a **cam** pushing a rod up and down, or **springs** stretched by weights
- a **hydraulic lift** or a pump with valves
- objects **floating** in water
- a **beam on two posts** (which post holds more?), or **shelves and brackets** (which holds the most weight?)

### Why these are good points

Each picture type has **one rule** behind it. Learn the rule once and every version of the picture becomes a 30-to-60-second question:

| Picture | The rule |
|:---|:---|
| Meshed gears | neighbors turn **opposite** ways; teeth × rpm is the same for both |
| Belt drive | an open belt keeps the **same** direction; diameter × rpm is the same for both |
| Hydraulic lift | **pressure** is the same everywhere: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$ |
| Floating object | it sinks until it pushes aside its **own weight** of water |
| Beam on two posts | the post **nearer the load** carries more |
| Brackets and frames | **triangles** are rigid |`
    },
    {
      id: 'mgf1-map',
      type: 'text' as const,
      content: `## The plan for this lesson

| Part | Skill |
|:---:|:---|
| 2 | Gears and gear trains |
| 3 | Belts, chains, cams, cranks and springs |
| 4 | Fluids, Pascal's principle and hydraulics |
| 5 | Buoyancy and structural support |
| 6 | Test strategy and traps |
| 7 | Mastery set |

Where MC counts: Marine Corps **GT** ($\\text{AR} + \\text{MC} + \\text{VE}$) and **MM**, Air Force **M**, Navy **MEC**, **MEC2** and **NUC**, and the Army's mechanical maintenance area, which leans heavily on AS, MC and EI. Strong MC scores open a wide range of mechanical, aviation, engineering and technical jobs.`
    },
    {
      id: 'mgf1-warmup-gears',
      type: 'multiple-choice' as const,
      content: '**Warm-up 1.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 165" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="118.1,71.9 125.2,71.2 126.1,74.8 119.3,77.3 119.3,82.7 119.3,82.7 126.1,85.2 125.2,88.8 118.1,88.1 115.7,93.0 115.7,93.0 120.7,98.2 118.4,101.0 112.3,97.3 108.0,100.7 108.0,100.7 110.3,107.5 107.0,109.1 103.1,103.1 97.7,104.3 97.7,104.3 96.8,111.4 93.2,111.4 92.3,104.3 86.9,103.1 86.9,103.1 83.0,109.1 79.7,107.5 82.0,100.7 77.7,97.3 77.7,97.3 71.6,101.0 69.3,98.2 74.3,93.0 71.9,88.1 71.9,88.1 64.8,88.8 63.9,85.2 70.7,82.7 70.7,77.3 70.7,77.3 63.9,74.8 64.8,71.2 71.9,71.9 74.3,67.0 74.3,67.0 69.3,61.8 71.6,59.0 77.7,62.7 82.0,59.3 82.0,59.3 79.7,52.5 83.0,50.9 86.9,56.9 92.3,55.7 92.3,55.7 93.2,48.6 96.8,48.6 97.7,55.7 103.1,56.9 103.1,56.9 107.0,50.9 110.3,52.5 108.0,59.3 112.3,62.7 112.3,62.7 118.4,59.0 120.7,61.8 115.7,67.0 118.1,71.9" fill="none" stroke="currentColor" stroke-width="1.5"/><polygon points="126.7,82.7 119.6,81.8 119.6,78.2 126.7,77.3 127.9,71.9 127.9,71.9 121.9,68.0 123.5,64.7 130.3,67.0 133.7,62.7 133.7,62.7 130.0,56.6 132.8,54.3 138.0,59.3 142.9,56.9 142.9,56.9 142.2,49.8 145.8,48.9 148.3,55.7 153.7,55.7 153.7,55.7 156.2,48.9 159.8,49.8 159.1,56.9 164.0,59.3 164.0,59.3 169.2,54.3 172.0,56.6 168.3,62.7 171.7,67.0 171.7,67.0 178.5,64.7 180.1,68.0 174.1,71.9 175.3,77.3 175.3,77.3 182.4,78.2 182.4,81.8 175.3,82.7 174.1,88.1 174.1,88.1 180.1,92.0 178.5,95.3 171.7,93.0 168.3,97.3 168.3,97.3 172.0,103.4 169.2,105.7 164.0,100.7 159.1,103.1 159.1,103.1 159.8,110.2 156.2,111.1 153.7,104.3 148.3,104.3 148.3,104.3 145.8,111.1 142.2,110.2 142.9,103.1 138.0,100.7 138.0,100.7 132.8,105.7 130.0,103.4 133.7,97.3 130.3,93.0 130.3,93.0 123.5,95.3 121.9,92.0 127.9,88.1 126.7,82.7" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="95.0" cy="80.0" r="3" fill="currentColor"/><circle cx="151.0" cy="80.0" r="3" fill="currentColor"/><g class="fig-accent"><path d="M73.7 74.3 A22 22 0 0 1 106.0 60.9" fill="none" stroke="currentColor" stroke-width="2.5"/><polygon points="112.1,64.4 103.8,64.8 108.2,57.1" fill="currentColor"/></g><text x="95.0" y="150.0" font-size="12" fill="currentColor" text-anchor="middle">X: clockwise</text><text x="151.0" y="150.0" font-size="12" fill="currentColor" text-anchor="middle">Y</text></svg>',
        alt: 'Two gears of the same size meshed side by side. Gear X on the left turns clockwise, shown by a curved arrow. Gear Y is on the right.',
        caption: 'Figure 1. Gear X drives gear Y.'
      },
      exercise: {
        questions: [
          {
            question: 'Gear X turns clockwise and is meshed with gear Y beside it. Which way does gear Y turn?',
            options: ['Counterclockwise', 'Clockwise', 'It does not turn', 'It rocks back and forth'],
            correctAnswer: 0,
            explanation: 'Where two gears mesh, their teeth move together in the same direction at the contact point, so the gears themselves spin in opposite directions. X clockwise means Y counterclockwise.'
          }
        ]
      }
    },
    {
      id: 'mgf1-warmup-beam',
      type: 'multiple-choice' as const,
      content: '**Warm-up 2.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="30.0" y="90.0" width="260.0" height="10.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="32.0" y="100.0" width="16.0" height="50.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="272.0" y="100.0" width="16.0" height="50.0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="10.0" y1="150.0" x2="310.0" y2="150.0" stroke="currentColor" stroke-width="2"/><rect x="72.0" y="60.0" width="32.0" height="30.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-accent"/><text x="88.0" y="54.0" font-size="12" fill="currentColor" text-anchor="middle">500 lb</text><text x="40.0" y="168.0" font-size="12" fill="currentColor" text-anchor="middle">post A</text><text x="280.0" y="168.0" font-size="12" fill="currentColor" text-anchor="middle">post B</text><g class="fig-muted"><line x1="40.0" y1="182.0" x2="88.0" y2="182.0" stroke="currentColor" stroke-width="1"/><line x1="88.0" y1="182.0" x2="280.0" y2="182.0" stroke="currentColor" stroke-width="1"/><line x1="40.0" y1="177.0" x2="40.0" y2="187.0" stroke="currentColor" stroke-width="1"/><line x1="88.0" y1="177.0" x2="88.0" y2="187.0" stroke="currentColor" stroke-width="1"/><line x1="280.0" y1="177.0" x2="280.0" y2="187.0" stroke="currentColor" stroke-width="1"/></g><text x="64.0" y="198.0" font-size="11" fill="currentColor" text-anchor="middle">2 ft</text><text x="184.0" y="198.0" font-size="11" fill="currentColor" text-anchor="middle">8 ft</text></svg>',
        alt: 'A beam resting on two posts, A on the left and B on the right, 10 feet apart. A 500-pound load sits on the beam 2 feet from post A and 8 feet from post B.',
        caption: 'Figure 2. A load on a beam supported by two posts.'
      },
      exercise: {
        questions: [
          {
            question: 'A $500$-lb load sits on a beam $2$ ft from post A and $8$ ft from post B. Ignoring the beam\'s own weight, which post carries more of the load?',
            options: ['Post A', 'Post B', 'Both carry the same', 'It depends on the beam material'],
            correctAnswer: 0,
            explanation: 'The post nearer the load carries more of it. Each post\'s share is proportional to the load\'s distance from the OTHER post: A carries $500 \\times \\frac{8}{10} = 400$ lb and B carries $100$ lb.'
          }
        ]
      }
    },
    {
      id: 'mgf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- This lesson covers gears, belts, cams, springs, fluids, buoyancy and structures, all **picture-driven**
- Meshed gears turn **opposite** ways; the post **nearer** a load carries more of it
- Every picture type has one rule. Learn the rule, then each question takes well under the $1\\frac{1}{2}$ minutes you have

> **Up Next:** Part 2 — gears and gear trains.`
    }
  ]
};
