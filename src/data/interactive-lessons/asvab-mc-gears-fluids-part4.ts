export const asvabMcGearsFluidsPart4Data = {
  topicSlug: 'asvab-mc-gears-fluids',
  sections: [
    {
      id: 'mgf4-intro',
      type: 'text' as const,
      content: `# ⚙️ Gears, Fluids and Structures

**Part 4 of 7 — Fluids, Pascal's Principle and Hydraulics**

### Pressure in a liquid grows with depth

The deeper you go in a liquid, the more liquid is stacked above you, so the **pressure increases with depth**.

- At the **same depth**, the pressure is the **same** in every direction and does not depend on the **shape** or width of the container. A narrow pipe and a wide tank filled to the same height have the same pressure at the bottom.
- A **water tower** is tall so the water at the bottom has high pressure to push through the town's pipes.
- Water squirts out of a hole near the **bottom** of a tank **faster and farther** than out of a hole near the top.
- Dams are built **thicker at the bottom**, where the water pressure is greatest.

### Pascal's principle

**Pressure applied to a confined fluid is passed on equally to every part of the fluid and the walls of its container.**

Liquids barely compress, so a push on one end of a sealed system shows up instantly at the other end. That is how **hydraulic** brakes, jacks and lifts work. Air bubbles ruin the effect, because gas **does** compress: air in brake lines makes the pedal feel **spongy**.`
    },
    {
      id: 'mgf4-hydraulics',
      type: 'text' as const,
      content: `## Hydraulic lifts

Because the pressure is the same under both pistons,

$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\qquad \\Rightarrow \\qquad F_2 = F_1 \\times \\frac{A_2}{A_1}$$

A small force on a **small** piston makes a large force on a **large** piston.

**The trade-off:** the volume of liquid pushed out of the small cylinder equals the volume that enters the large one, so

$$A_1 \\times d_1 = A_2 \\times d_2$$

The small piston moves **much farther** than the large one. Force is multiplied; work is not.

**Worked example.** A car lift has a small piston of $3$ square inches and a large piston of $90$ square inches. A $100$-lb push on the small piston gives $100 \\times \\frac{90}{3} = 3{,}000$ lb on the large piston. To raise the car $1$ inch, the small piston must move $30$ inches.

**Watch areas, not widths.** A piston's area grows with the **square** of its diameter. A piston with **twice** the diameter has **four** times the area, so it multiplies force by $4$, not $2$.`
    },
    {
      id: 'mgf4-lift-input',
      type: 'input-boxes' as const,
      content: `**Hydraulic lift.** ✍️ Use the figure.

A $50$-lb force pushes down on a small piston with an area of $2$ square inches. The large piston has an area of $40$ square inches.

**1)** The pressure in the fluid, in psi (number only):

**2)** The upward force on the large piston, in pounds (number only):

**3)** How far must the small piston move to raise the large piston $1$ inch? (number only, inches)`,
      figure: {
        svg: '<svg viewBox="0 0 320 186" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><path d="M30 60 L30 160 L290 160 L290 60" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50 60 L50 130 L200 130 L200 60" fill="none" stroke="currentColor" stroke-width="2"/><rect x="30.0" y="74.0" width="20.0" height="10.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><rect x="200.0" y="74.0" width="90.0" height="10.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="40.0" y1="30.0" x2="40.0" y2="60.0" stroke="currentColor" stroke-width="3"/><polygon points="40.0,70.0 35.0,60.0 45.0,60.0" fill="currentColor"/></g><rect x="215.0" y="44.0" width="60.0" height="30.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-accent-2"/><text x="40.0" y="24.0" font-size="12" fill="currentColor" text-anchor="middle">50 lb</text><text x="245.0" y="38.0" font-size="11" fill="currentColor" text-anchor="middle">load</text><text x="14.0" y="178.0" font-size="11" fill="currentColor" text-anchor="start">small piston: 2 sq in.</text><text x="306.0" y="178.0" font-size="11" fill="currentColor" text-anchor="end">large: 40 sq in.</text><g class="fig-muted"><line x1="34.0" y1="100.0" x2="286.0" y2="100.0" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4"/><line x1="34.0" y1="120.0" x2="286.0" y2="120.0" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4"/><line x1="34.0" y1="145.0" x2="286.0" y2="145.0" stroke="currentColor" stroke-width="1" stroke-dasharray="2 4"/></g></svg>',
        alt: 'A hydraulic lift: a sealed U-shaped container of fluid with a narrow cylinder on the left and a wide cylinder on the right. A 50-pound force pushes down on the small left piston, area 2 square inches. The large right piston, area 40 square inches, holds up a load.',
        caption: 'Figure 1. A hydraulic lift.'
      },
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '1000', '20'],
        hint1: 'Pressure = force ÷ area on the small piston.',
        hint2: 'The same pressure acts on 40 square inches.',
        hint3: 'Area ratio is 40 ÷ 2 = 20.',
        explanation: '(1) $50 \\div 2 = 25$ psi. (2) $25 \\times 40 = 1{,}000$ lb. (3) The area ratio is $20$, so the small piston moves $20$ inches for each inch the large piston rises.'
      }
    },
    {
      id: 'mgf4-diameter',
      type: 'multiple-choice' as const,
      content: '**Diameter trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a hydraulic jack, the large piston has 3 times the DIAMETER of the small piston. By what factor does the jack multiply the force on the small piston?',
            options: ['9', '3', '6', '1/3'],
            correctAnswer: 0,
            explanation: 'Force is multiplied by the ratio of the AREAS, and area grows with the square of the diameter: $3^2 = 9$. Using the diameter ratio ($3$) is the classic trap.'
          },
          {
            question: 'Why do mechanics bleed the air out of a car\'s hydraulic brake lines?',
            options: ['Air compresses, so the pedal goes soft and spongy', 'Air makes the brake fluid boil at a lower temperature', 'Air adds extra pressure that locks up the wheels', 'Air is heavier than brake fluid and clogs the lines'],
            correctAnswer: 0,
            explanation: 'Liquids barely compress, so a push on the pedal goes straight to the brakes. Air bubbles squeeze instead of passing the pressure on, so the pedal sinks and the brakes feel weak.'
          }
        ]
      }
    },
    {
      id: 'mgf4-tank',
      type: 'multiple-choice' as const,
      content: '**Holes in a tank.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><path d="M80 20 L80 170 L200 170 L200 20" fill="none" stroke="currentColor" stroke-width="2"/><line x1="80.0" y1="34.0" x2="200.0" y2="34.0" stroke="currentColor" stroke-width="1.5" class="fig-muted" stroke-dasharray="4 3"/><circle cx="200.0" cy="70.0" r="3.0" fill="currentColor" stroke="currentColor" stroke-width="1.5"/><text x="214.0" y="74.0" font-size="12" font-weight="bold" fill="currentColor" text-anchor="start">1</text><circle cx="200.0" cy="110.0" r="3.0" fill="currentColor" stroke="currentColor" stroke-width="1.5"/><text x="214.0" y="114.0" font-size="12" font-weight="bold" fill="currentColor" text-anchor="start">2</text><circle cx="200.0" cy="150.0" r="3.0" fill="currentColor" stroke="currentColor" stroke-width="1.5"/><text x="214.0" y="154.0" font-size="12" font-weight="bold" fill="currentColor" text-anchor="start">3</text><text x="140.0" y="28.0" font-size="11" fill="currentColor" text-anchor="middle">water surface</text><text x="140.0" y="192.0" font-size="11" fill="currentColor" text-anchor="middle">A tank of water with three small holes</text></svg>',
        alt: 'A tall tank filled with water. Three small holes are in its side at different heights: hole 1 near the top, hole 2 in the middle and hole 3 near the bottom.',
        caption: 'Figure 2. A water tank with three holes.'
      },
      exercise: {
        questions: [
          {
            question: 'A tank of water has three small holes in its side: hole 1 near the top, hole 2 in the middle and hole 3 near the bottom. Out of which hole does water leave fastest?',
            options: ['Hole 3', 'Hole 1', 'Hole 2', 'All three equally'],
            correctAnswer: 0,
            explanation: 'Pressure grows with depth, and hole 3 has the most water above it, so the water there is pushed out hardest and fastest. Hole 1, with little water above it, barely dribbles.'
          }
        ]
      }
    },
    {
      id: 'mgf4-flow',
      type: 'text' as const,
      content: `## Liquids in motion

**Flow through a pipe:** in a full pipe, the same volume of liquid passes every point each second. Where the pipe gets **narrower**, the liquid must move **faster** to keep up. That is why putting your thumb over the end of a hose makes the water shoot out faster.

**Pumps and valves:** pumps use **one-way (check) valves** so liquid can move only forward. A simple piston pump draws liquid in through an inlet valve on the up stroke and pushes it out through an outlet valve on the down stroke.

**Siphon:** a tube can carry liquid up over the rim of a tank and down the other side, as long as the tube's outlet is **lower** than the liquid's surface in the tank. Air pressure on the tank's surface keeps pushing the liquid through.`
    },
    {
      id: 'mgf4-pipe',
      type: 'multiple-choice' as const,
      content: '**The narrowing pipe.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><path d="M20 60 L140 60 L180 80 L300 80" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 140 L140 140 L180 120 L300 120" fill="none" stroke="currentColor" stroke-width="2"/><g class="fig-accent"><line x1="40.0" y1="100.0" x2="80.0" y2="100.0" stroke="currentColor" stroke-width="3"/><polygon points="90.0,100.0 80.0,105.0 80.0,95.0" fill="currentColor"/></g><text x="80.0" y="170.0" font-size="12" fill="currentColor" text-anchor="middle">X: wide</text><text x="240.0" y="170.0" font-size="12" fill="currentColor" text-anchor="middle">Y: narrow</text><g class="fig-accent"><line x1="220.0" y1="100.0" x2="260.0" y2="100.0" stroke="currentColor" stroke-width="3"/><polygon points="270.0,100.0 260.0,105.0 260.0,95.0" fill="currentColor"/></g></svg>',
        alt: 'A pipe full of flowing water. On the left is a wide section, X. The pipe then narrows to a thinner section, Y, on the right. Arrows show water flowing from left to right.',
        caption: 'Figure 3. Water flows from a wide section into a narrow one.'
      },
      exercise: {
        questions: [
          {
            question: 'Water fills a pipe and flows from a wide section X into a narrower section Y. Compared with section X, the water in section Y moves:',
            options: ['Faster', 'Slower', 'At the same speed', 'Backward'],
            correctAnswer: 0,
            explanation: 'The same volume of water passes each point every second. Section Y has a smaller cross-section, so the water must move faster through it.'
          }
        ]
      }
    },
    {
      id: 'mgf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Liquid pressure **increases with depth**, is the same at the same depth, and does not depend on container shape
- **Pascal:** pressure on a confined fluid is passed on equally everywhere
- Hydraulic lift: $F_2 = F_1 \\times \\frac{A_2}{A_1}$; the small piston moves farther: $A_1 d_1 = A_2 d_2$
- Use **areas**: twice the diameter = **4 times** the force
- Liquids barely compress (air in brake lines = spongy brakes); narrower pipe = **faster** flow

> **Up Next:** Part 5 — buoyancy and structural support.`
    }
  ]
};
