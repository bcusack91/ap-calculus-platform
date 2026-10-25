export const asvabMcGearsFluidsPart5Data = {
  topicSlug: 'asvab-mc-gears-fluids',
  sections: [
    {
      id: 'mgf5-intro',
      type: 'text' as const,
      content: `# ⚙️ Gears, Fluids and Structures

**Part 5 of 7 — Buoyancy and Structural Support**

### Buoyancy: Archimedes' principle

Any object in a fluid is pushed **up** by a **buoyant force** equal to the **weight of the fluid it pushes aside (displaces)**.

- If the object is **less dense** than the fluid, it **floats**. It sinks only until it has displaced **its own weight** of fluid.
- If it is **denser**, it sinks, but it still **weighs less** in the fluid than in air: its apparent weight = real weight − buoyant force.
- A **steel ship floats** because its hollow hull pushes aside a huge volume of water, enough to weigh as much as the ship.
- **Salt water** is denser than fresh water, so a boat floats **higher** in the ocean than in a lake.
- Of several same-size blocks floating in the same water, the one that sits **deepest** is the **densest** (heaviest).

**Worked example.** A $50$-lb block is lowered completely into water and pushes aside $30$ lb of water. The buoyant force is $30$ lb, so the block's apparent weight is $50 - 30 = 20$ lb, and it sinks. A $20$-lb log that would displace $30$ lb of water if pushed under instead floats, sinking only until it displaces $20$ lb.`
    },
    {
      id: 'mgf5-floats',
      type: 'multiple-choice' as const,
      content: '**Floating blocks.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 184" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="10.0" y="70.0" width="300.0" height="90.0" fill="none" stroke="currentColor" stroke-width="0" class="fig-muted"/><line x1="10.0" y1="70.0" x2="310.0" y2="70.0" stroke="currentColor" stroke-width="2"/><rect x="40.0" y="40.0" width="40.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="60.0" y="175.0" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">1</text><rect x="140.0" y="52.0" width="40.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="160.0" y="175.0" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">2</text><rect x="240.0" y="64.0" width="40.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="260.0" y="175.0" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">3</text><text x="160.0" y="20.0" font-size="11" fill="currentColor" text-anchor="middle">Three blocks of the same size floating in water</text></svg>',
        alt: 'Three blocks of the same size floating in water. Block 1 floats high, with only about a quarter of it under water. Block 2 floats about halfway under. Block 3 floats low, with most of it under water.',
        caption: 'Figure 1. Three same-size blocks floating at different depths.'
      },
      exercise: {
        questions: [
          {
            question: 'Three blocks of the same size float in the same water: block 1 floats high, block 2 floats about halfway under, and block 3 floats with most of its volume under water. Which block is the heaviest?',
            options: ['Block 3', 'Block 1', 'Block 2', 'All weigh the same'],
            correctAnswer: 0,
            explanation: 'A floating block sinks until it displaces its own weight of water. Block 3 displaces the most water, so it weighs the most (it is the densest).'
          }
        ]
      }
    },
    {
      id: 'mgf5-buoy-check',
      type: 'multiple-choice' as const,
      content: '**Buoyancy checks.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A loaded boat sails from a freshwater river out into the salty ocean. What happens?',
            options: ['It rises a little higher in the water', 'It sinks a little deeper in the water', 'It floats at exactly the same level', 'It loses buoyancy and starts to sink'],
            correctAnswer: 0,
            explanation: 'Salt water is denser, so the boat needs to push aside less of it to equal its own weight. It rides higher.'
          },
          {
            question: 'An $80$-lb metal part, completely under water, displaces $10$ lb of water. What is its apparent weight in the water?',
            options: ['70 lb', '90 lb', '80 lb', '8 lb'],
            correctAnswer: 0,
            explanation: 'Apparent weight = real weight − buoyant force = $80 - 10 = 70$ lb. The water pushes up with $10$ lb, the weight of the water displaced.'
          }
        ]
      }
    },
    {
      id: 'mgf5-beams',
      type: 'text' as const,
      content: `## Beams on two supports

When a load sits on a beam held up by two posts, the post **closer to the load carries more of it**. Each post's share is proportional to the load's distance from the **other** post:

$$\\text{share on post A} = \\text{load} \\times \\frac{\\text{distance from load to post B}}{\\text{distance between posts}}$$

The two shares always add up to the whole load. A load in the **middle** is shared **equally**, and so is the beam's own weight if the beam is uniform.

**Worked example.** A $900$-lb machine sits on a $9$-ft beam, $3$ ft from post A and $6$ ft from post B. Post A carries $900 \\times \\frac{6}{9} = 600$ lb; post B carries $900 \\times \\frac{3}{9} = 300$ lb. Check: $600 + 300 = 900$. ✓`
    },
    {
      id: 'mgf5-beam-input',
      type: 'input-boxes' as const,
      content: `**Which post holds more?** ✍️ Use the figure.

A $600$-lb load sits on a $12$-ft beam, $4$ ft from post A and $8$ ft from post B.

**1)** The load carried by post A, in pounds (number only):

**2)** The load carried by post B, in pounds (number only):`,
      figure: {
        svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="30.0" y="90.0" width="260.0" height="10.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="32.0" y="100.0" width="16.0" height="50.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="272.0" y="100.0" width="16.0" height="50.0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="10.0" y1="150.0" x2="310.0" y2="150.0" stroke="currentColor" stroke-width="2"/><rect x="104.0" y="60.0" width="32.0" height="30.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-accent"/><text x="120.0" y="54.0" font-size="12" fill="currentColor" text-anchor="middle">600 lb</text><text x="40.0" y="168.0" font-size="12" fill="currentColor" text-anchor="middle">post A</text><text x="280.0" y="168.0" font-size="12" fill="currentColor" text-anchor="middle">post B</text><g class="fig-muted"><line x1="40.0" y1="182.0" x2="120.0" y2="182.0" stroke="currentColor" stroke-width="1"/><line x1="120.0" y1="182.0" x2="280.0" y2="182.0" stroke="currentColor" stroke-width="1"/><line x1="40.0" y1="177.0" x2="40.0" y2="187.0" stroke="currentColor" stroke-width="1"/><line x1="120.0" y1="177.0" x2="120.0" y2="187.0" stroke="currentColor" stroke-width="1"/><line x1="280.0" y1="177.0" x2="280.0" y2="187.0" stroke="currentColor" stroke-width="1"/></g><text x="80.0" y="198.0" font-size="11" fill="currentColor" text-anchor="middle">4 ft</text><text x="200.0" y="198.0" font-size="11" fill="currentColor" text-anchor="middle">8 ft</text></svg>',
        alt: 'A beam on two posts, A on the left and B on the right, 12 feet apart. A 600-pound load sits 4 feet from post A and 8 feet from post B.',
        caption: 'Figure 2. A 600-lb load on a 12-ft beam.'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['400', '200'],
        hint1: 'Post A\'s share uses the distance from the load to post B.',
        hint2: '600 × 8/12',
        hint3: 'The two shares add to 600.',
        explanation: '(1) Post A: $600 \\times \\frac{8}{12} = 400$ lb. (2) Post B: $600 \\times \\frac{4}{12} = 200$ lb. The nearer post carries twice as much because the load is twice as close to it.'
      }
    },
    {
      id: 'mgf5-structures',
      type: 'text' as const,
      content: `## Structural strength

- **Triangles are rigid.** A square or rectangular frame with pinned corners can fold (rack) into a slanted parallelogram. Add one **diagonal brace** and it becomes two triangles that cannot change shape. That is why bridges, roof trusses, towers and gates are built from triangles.
- **Shelf brackets:** a diagonal brace that runs from low on the wall out to the **outer end** of the shelf makes a large triangle and supports the most weight. A short brace near the wall leaves the outer end hanging.
- **Beams are stronger on edge.** A $2 \\times 8$ joist set on its narrow edge bends far less than the same board laid flat, because its material is spread farther from the center of bending. An **I-beam** puts most of its steel in the top and bottom flanges for the same reason.
- **Load path:** weight travels from the roof to the rafters, down the walls and studs, to the foundation and the ground. Every member along the way must carry the load above it.`
    },
    {
      id: 'mgf5-shelves',
      type: 'multiple-choice' as const,
      content: '**Which shelf holds the most?** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 182" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="10.0" y="20.0" width="8.0" height="130.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-muted"/><rect x="18.0" y="40.0" width="80.0" height="8.0" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="18.0,48.0 36.0,48.0 18.0,66.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="74.0" y="26.0" width="20.0" height="14.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-accent"/><text x="58.0" y="172.0" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">A</text><rect x="115.0" y="20.0" width="8.0" height="130.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-muted"/><rect x="123.0" y="40.0" width="80.0" height="8.0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="123.0" y1="110.0" x2="199.0" y2="48.0" stroke="currentColor" stroke-width="3"/><rect x="179.0" y="26.0" width="20.0" height="14.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-accent"/><text x="163.0" y="172.0" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">B</text><rect x="220.0" y="20.0" width="8.0" height="130.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-muted"/><rect x="228.0" y="40.0" width="80.0" height="8.0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="228.0" y1="90.0" x2="266.0" y2="48.0" stroke="currentColor" stroke-width="3"/><rect x="284.0" y="26.0" width="20.0" height="14.0" fill="none" stroke="currentColor" stroke-width="2" class="fig-accent"/><text x="268.0" y="172.0" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">C</text></svg>',
        alt: 'Three identical shelves fastened to a wall, each with a box at its outer end. Shelf A has only a tiny triangular corner bracket right at the wall. Shelf B has a long diagonal brace running from low on the wall to the outer end of the shelf. Shelf C has a diagonal brace that reaches only halfway out along the shelf.',
        caption: 'Figure 3. Three ways to support a shelf.'
      },
      exercise: {
        questions: [
          {
            question: 'Three identical shelves each hold a box at their outer end. Shelf A has only a tiny corner bracket at the wall, shelf B has a diagonal brace from low on the wall to the outer end, and shelf C has a brace that reaches only halfway out. Which shelf can hold the most weight at its outer end?',
            options: ['Shelf B', 'Shelf A', 'Shelf C', 'All hold the same'],
            correctAnswer: 0,
            explanation: 'Shelf B\'s brace forms a large triangle that carries the load at the outer end straight down to the wall. On shelves A and C, the outer part of the shelf sticks out unsupported and must bend to carry the load.'
          }
        ]
      }
    },
    {
      id: 'mgf5-frames',
      type: 'multiple-choice' as const,
      content: '**Rigid frames.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 184" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><polygon points="40.0,40.0 130.0,40.0 130.0,130.0 40.0,130.0" fill="none" stroke="currentColor" stroke-width="3"/><polygon points="190.0,40.0 280.0,40.0 280.0,130.0 190.0,130.0" fill="none" stroke="currentColor" stroke-width="3"/><line x1="190.0" y1="130.0" x2="280.0" y2="40.0" stroke="currentColor" stroke-width="3"/><circle cx="40.0" cy="40.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="130.0" cy="40.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="130.0" cy="130.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="40.0" cy="130.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="190.0" cy="40.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="280.0" cy="40.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="280.0" cy="130.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><circle cx="190.0" cy="130.0" r="4.0" fill="currentColor" stroke="currentColor" stroke-width="2"/><text x="85.0" y="156.0" font-size="12" fill="currentColor" text-anchor="middle">Frame 1</text><text x="235.0" y="156.0" font-size="12" fill="currentColor" text-anchor="middle">Frame 2</text><text x="160.0" y="174.0" font-size="11" fill="currentColor" text-anchor="middle">Every joint is a single pin (free to pivot).</text></svg>',
        alt: 'Two square frames made of bars joined by single pins at the corners. Frame 1 is a plain square. Frame 2 is the same square with one diagonal bar added from corner to corner.',
        caption: 'Figure 4. Two pinned frames.'
      },
      exercise: {
        questions: [
          {
            question: 'Two square frames have single pins at every corner. Frame 2 also has one diagonal bar. If each frame is pushed sideways at a top corner, what happens?',
            options: ['Frame 1 folds into a slant; Frame 2 holds its shape', 'Frame 2 folds into a slant; Frame 1 holds its shape', 'Both frames hold their square shape equally well', 'Both frames fold into a slant equally easily'],
            correctAnswer: 0,
            explanation: 'Pinned corners let a plain square rack into a parallelogram. The diagonal turns Frame 2 into two triangles, and a triangle with fixed side lengths cannot change shape.'
          }
        ]
      }
    },
    {
      id: 'mgf5-boards',
      type: 'multiple-choice' as const,
      content: '**Flat or on edge?** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><rect x="20.0" y="60.0" width="10.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="130.0" y="60.0" width="10.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="20.0" y="52.0" width="120.0" height="8.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="80.0" y="40.0" font-size="11" fill="currentColor" text-anchor="middle">Board laid flat</text><rect x="180.0" y="60.0" width="10.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="290.0" y="60.0" width="10.0" height="40.0" fill="none" stroke="currentColor" stroke-width="2"/><rect x="180.0" y="30.0" width="120.0" height="30.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="240.0" y="22.0" font-size="11" fill="currentColor" text-anchor="middle">Same board on edge</text><line x1="10.0" y1="100.0" x2="310.0" y2="100.0" stroke="currentColor" stroke-width="2"/><text x="160.0" y="130.0" font-size="11" fill="currentColor" text-anchor="middle">Each board spans the same gap and carries the same load.</text></svg>',
        alt: 'The same board used two ways across the same gap: on the left it is laid flat, and on the right it is turned up on its narrow edge.',
        caption: 'Figure 5. One board, laid flat or on edge.'
      },
      exercise: {
        questions: [
          {
            question: 'The same board spans the same gap and carries the same load, either laid flat or turned up on its narrow edge. Which way does it bend less?',
            options: ['On its edge', 'Laid flat', 'Both bend the same', 'It depends on the load\'s weight'],
            correctAnswer: 0,
            explanation: 'On edge, more of the board\'s material sits far from the center of bending, so it is much stiffer. That is why floor joists and rafters are always installed on edge.'
          }
        ]
      }
    },
    {
      id: 'mgf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Buoyant force = weight of fluid displaced**; a floating object displaces its **own weight**
- Same-size floaters: the one riding **deepest** is the heaviest; boats float **higher** in salt water
- Apparent weight under water = real weight − buoyant force
- Beam on two posts: the **nearer** post carries more; share = load × (distance to the **other** post) ÷ span
- **Triangles are rigid**; a brace to the shelf's outer end is strongest; boards are stiffer **on edge**

> **Up Next:** Part 6 — test strategy and traps for gears, fluids and structures.`
    }
  ]
};
