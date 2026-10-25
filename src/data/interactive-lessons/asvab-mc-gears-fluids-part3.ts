export const asvabMcGearsFluidsPart3Data = {
  topicSlug: 'asvab-mc-gears-fluids',
  sections: [
    {
      id: 'mgf3-intro',
      type: 'text' as const,
      content: `# ⚙️ Gears, Fluids and Structures

**Part 3 of 7 — Belts, Chains, Cams, Cranks and Springs**

### Belt-driven pulleys

A belt connects two pulleys so they turn together. Every inch of belt that runs off one pulley runs onto the other, so

$$\\text{diameter}_1 \\times \\text{rpm}_1 = \\text{diameter}_2 \\times \\text{rpm}_2$$

- The **smallest** pulley in a belt system turns **fastest**.
- An **open** belt (a simple loop) turns both pulleys the **same** direction.
- A **crossed** belt (a figure 8) turns them in **opposite** directions.
- Pulleys fixed on the same shaft turn together, at the same rpm.

**Worked example.** A motor turns a $3$-inch pulley at $1{,}200$ rpm. A belt drives a $9$-inch pulley. $3 \\times 1{,}200 = 9 \\times \\text{rpm}$, so the big pulley turns at $400$ rpm.

### Chains and sprockets

A chain works exactly like a belt, but with teeth: **teeth × rpm** is the same for both sprockets, and both turn the same direction. On a bicycle with a $48$-tooth front sprocket and a $16$-tooth rear sprocket, the rear wheel turns $48 \\div 16 = 3$ times for each turn of the pedals.`
    },
    {
      id: 'mgf3-belt-input',
      type: 'input-boxes' as const,
      content: `**Belt drive.** ✍️ Use the figure.

A $4$-inch pulley turns clockwise at $300$ rpm and drives a $12$-inch pulley with an open belt.

**1)** How fast does the $12$-inch pulley turn, in rpm? (number only)

**2)** If the driver speeds up to $600$ rpm, how fast does the $12$-inch pulley turn? (number only)`,
      figure: {
        svg: '<svg viewBox="0 0 320 175" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="70.0" cy="80.0" r="20.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="230.0" cy="80.0" r="60.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70.0" cy="80.0" r="3" fill="currentColor"/><circle cx="230.0" cy="80.0" r="3" fill="currentColor"/><line x1="65.0" y1="99.4" x2="215.0" y2="138.1" stroke="currentColor" stroke-width="2" class="fig-accent"/><line x1="65.0" y1="60.6" x2="215.0" y2="21.9" stroke="currentColor" stroke-width="2" class="fig-accent"/><g class="fig-accent"><path d="M41.8 69.7 A30 30 0 0 1 93.0 60.7" fill="none" stroke="currentColor" stroke-width="2.5"/><polygon points="97.5,66.1 89.5,63.6 96.4,57.8" fill="currentColor"/></g><text x="10.0" y="140.0" font-size="11" fill="currentColor" text-anchor="start">4-in. pulley</text><text x="10.0" y="154.0" font-size="11" fill="currentColor" text-anchor="start">(driver, clockwise)</text><text x="230.0" y="160.0" font-size="11" fill="currentColor" text-anchor="middle">12-in. pulley</text></svg>',
        alt: 'A small 4-inch pulley on the left, turning clockwise, connected by an open belt loop to a large 12-inch pulley on the right.',
        caption: 'Figure 1. An open belt drive.'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['100', '200'],
        hint1: '4 × 300 = 12 × rpm.',
        hint2: 'The large pulley always turns at one-third the driver\'s speed.',
        hint3: '600 ÷ 3',
        explanation: '(1) $4 \\times 300 = 1{,}200 = 12 \\times \\text{rpm}$, so $100$ rpm. (2) $4 \\times 600 = 12 \\times \\text{rpm}$, so $200$ rpm. With an open belt, it turns clockwise like the driver.'
      }
    },
    {
      id: 'mgf3-crossed',
      type: 'multiple-choice' as const,
      content: '**Crossed belt.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="70.0" cy="80.0" r="30.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="230.0" cy="80.0" r="30.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70.0" cy="80.0" r="3" fill="currentColor"/><circle cx="230.0" cy="80.0" r="3" fill="currentColor"/><line x1="81.2" y1="107.8" x2="218.8" y2="52.2" stroke="currentColor" stroke-width="2" class="fig-accent"/><line x1="81.2" y1="52.2" x2="218.8" y2="107.8" stroke="currentColor" stroke-width="2" class="fig-accent"/><g class="fig-accent"><path d="M32.4 66.3 A40 40 0 0 1 100.6 54.3" fill="none" stroke="currentColor" stroke-width="2.5"/><polygon points="105.1,59.7 97.2,57.2 104.1,51.4" fill="currentColor"/></g><text x="70.0" y="135.0" font-size="11" fill="currentColor" text-anchor="middle">X (driver), clockwise</text><text x="230.0" y="135.0" font-size="12" fill="currentColor" text-anchor="middle">Y</text></svg>',
        alt: 'Two pulleys of the same size connected by a belt that crosses over itself in a figure 8 between them. Pulley X on the left is the driver and turns clockwise; pulley Y is on the right.',
        caption: 'Figure 2. A crossed belt.'
      },
      exercise: {
        questions: [
          {
            question: 'Pulley X turns clockwise and drives pulley Y, the same size, through a belt that crosses over itself between them. How does Y turn?',
            options: ['Counterclockwise, at the same speed', 'Clockwise, at the same speed', 'Counterclockwise, at half the speed', 'Clockwise, at twice the speed'],
            correctAnswer: 0,
            explanation: 'A crossed belt reverses direction, so Y turns counterclockwise. Equal diameters mean equal rpm.'
          }
        ]
      }
    },
    {
      id: 'mgf3-three',
      type: 'multiple-choice' as const,
      content: '**Which pulley is fastest?** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 195" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="60.0" cy="70.0" r="36.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60.0" cy="70.0" r="3" fill="currentColor"/><circle cx="250.0" cy="60.0" r="14.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="250.0" cy="60.0" r="3" fill="currentColor"/><circle cx="170.0" cy="140.0" r="24.0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="170.0" cy="140.0" r="3" fill="currentColor"/><line x1="62.3" y1="34.1" x2="250.9" y2="46.0" stroke="currentColor" stroke-width="2" class="fig-accent"/><line x1="260.7" y1="69.0" x2="188.4" y2="155.4" stroke="currentColor" stroke-width="2" class="fig-accent"/><line x1="159.0" y1="161.3" x2="43.5" y2="102.0" stroke="currentColor" stroke-width="2" class="fig-accent"/><text x="60.0" y="24.0" font-size="11" fill="currentColor" text-anchor="middle">A: 9 in.</text><text x="300.0" y="100.0" font-size="11" fill="currentColor" text-anchor="end">B: 3.5 in.</text><text x="170.0" y="184.0" font-size="11" fill="currentColor" text-anchor="middle">C: 6 in.</text></svg>',
        alt: 'One belt wraps around three pulleys: A, 9 inches across; B, 3.5 inches across; and C, 6 inches across.',
        caption: 'Figure 3. One belt drives three pulleys.'
      },
      exercise: {
        questions: [
          {
            question: 'One belt runs around three pulleys: A is $9$ inches across, B is $3.5$ inches and C is $6$ inches. Which pulley turns the most revolutions per minute?',
            options: ['B', 'A', 'C', 'All turn at the same rpm'],
            correctAnswer: 0,
            explanation: 'The belt moves at one speed, so each pulley\'s rpm is inversely proportional to its diameter. The smallest pulley, B, turns fastest; the largest, A, turns slowest.'
          }
        ]
      }
    },
    {
      id: 'mgf3-cams',
      type: 'text' as const,
      content: `## Cams, cranks and ratchets

| Device | What it does | Example |
|:---|:---|:---|
| **Cam** | an off-round wheel that pushes a **follower** up and down as it turns: **rotary → back-and-forth** motion | engine camshaft opening valves |
| **Crank and connecting rod** | turns **back-and-forth** motion into **rotary** motion (or the reverse) | a piston turning an engine's crankshaft |
| **Ratchet and pawl** | lets a wheel turn **one way only**; the pawl catches the teeth if it tries to turn back | a socket ratchet, a winch |

**Counting cam lifts:** the follower rises once for each **lobe** (bump) on the cam, every revolution. A cam with $3$ lobes turning at $100$ rpm lifts its follower $300$ times a minute.`
    },
    {
      id: 'mgf3-cam-fig',
      type: 'multiple-choice' as const,
      content: '**Two cams.** Use the figure. 🎯',
      figure: {
        svg: '<svg viewBox="0 0 320 195" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><path d="M106.0 120.0 L105.9 122.3 L105.6 124.5 L105.1 126.7 L104.4 128.9 L103.6 131.0 L102.5 133.0 L101.3 134.9 L99.9 136.7 L98.4 138.4 L96.7 139.9 L94.9 141.3 L93.0 142.5 L91.0 143.6 L88.9 144.4 L86.7 145.1 L84.5 145.6 L82.3 145.9 L80.0 146.0 L77.7 145.9 L75.5 145.6 L73.3 145.1 L71.1 144.4 L69.0 143.6 L67.0 142.5 L65.1 141.3 L63.3 139.9 L61.6 138.4 L60.1 136.7 L58.7 134.9 L57.5 133.0 L56.4 131.0 L55.6 128.9 L54.9 126.7 L54.4 124.5 L54.1 122.3 L54.0 120.0 L54.0 117.7 L53.9 115.4 L53.7 113.0 L53.6 110.4 L53.5 107.7 L53.6 104.8 L53.9 101.7 L54.4 98.5 L55.3 95.3 L56.5 92.0 L58.2 88.8 L60.2 85.8 L62.8 83.0 L65.7 80.6 L68.9 78.7 L72.5 77.2 L76.2 76.3 L80.0 76.0 L83.8 76.3 L87.5 77.2 L91.1 78.7 L94.3 80.6 L97.2 83.0 L99.7 85.8 L101.8 88.8 L103.5 92.0 L104.7 95.3 L105.6 98.5 L106.1 101.7 L106.4 104.8 L106.5 107.7 L106.4 110.4 L106.3 113.0 L106.1 115.4 L106.0 117.7 L106.0 120.0 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="80.0" cy="120.0" r="3" fill="currentColor"/><rect x="73.0" y="40.0" width="14.0" height="36.0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="80.0" y1="20.0" x2="80.0" y2="40.0" stroke="currentColor" stroke-width="2"/><path d="M266.0 120.0 L266.7 122.3 L268.6 125.0 L270.9 128.3 L272.9 132.0 L273.7 135.7 L272.9 139.0 L270.5 141.3 L266.8 142.5 L262.6 142.6 L258.6 142.2 L255.4 142.0 L253.0 142.5 L251.0 143.6 L248.9 144.4 L246.7 145.1 L244.5 145.6 L242.3 145.9 L240.0 146.0 L237.7 145.9 L235.5 145.6 L233.3 145.1 L231.1 144.4 L229.0 143.6 L227.0 142.5 L224.6 142.0 L221.4 142.2 L217.4 142.6 L213.2 142.5 L209.5 141.3 L207.1 139.0 L206.3 135.7 L207.1 132.0 L209.1 128.3 L211.4 125.0 L213.3 122.3 L214.0 120.0 L214.1 117.7 L214.4 115.5 L214.9 113.3 L215.6 111.1 L216.4 109.0 L217.5 107.0 L218.7 105.1 L220.1 103.3 L221.6 101.6 L223.3 100.1 L225.1 98.7 L227.0 97.5 L228.7 95.7 L230.1 92.7 L231.7 89.1 L233.9 85.5 L236.8 82.9 L240.0 82.0 L243.2 82.9 L246.1 85.5 L248.3 89.1 L249.9 92.7 L251.3 95.7 L253.0 97.5 L254.9 98.7 L256.7 100.1 L258.4 101.6 L259.9 103.3 L261.3 105.1 L262.5 107.0 L263.6 109.0 L264.4 111.1 L265.1 113.3 L265.6 115.5 L265.9 117.7 L266.0 120.0 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="240.0" cy="120.0" r="3" fill="currentColor"/><rect x="233.0" y="48.0" width="14.0" height="34.0" fill="none" stroke="currentColor" stroke-width="2"/><line x1="240.0" y1="26.0" x2="240.0" y2="48.0" stroke="currentColor" stroke-width="2"/><text x="80.0" y="184.0" font-size="12" fill="currentColor" text-anchor="middle">Cam 1</text><text x="240.0" y="184.0" font-size="12" fill="currentColor" text-anchor="middle">Cam 2</text><text x="104.0" y="60.0" font-size="11" fill="currentColor" text-anchor="start">follower</text></svg>',
        alt: 'Two cams, each with a follower rod resting on top. Cam 1 is egg-shaped with one bump (lobe). Cam 2 is rounded with three evenly spaced bumps.',
        caption: 'Figure 4. Cam 1 has one lobe; cam 2 has three.'
      },
      exercise: {
        questions: [
          {
            question: 'Cam 1 has one lobe and cam 2 has three lobes, and both turn at $60$ rpm. How many times per minute is cam 2\'s follower lifted?',
            options: ['180', '60', '20', '3'],
            correctAnswer: 0,
            explanation: 'Each lobe lifts the follower once per revolution: $3$ lobes × $60$ rpm $= 180$ lifts per minute. Cam 1\'s follower is lifted only $60$ times.'
          }
        ]
      }
    },
    {
      id: 'mgf3-springs',
      type: 'text' as const,
      content: `## Springs

A spring stretches (or compresses) in proportion to the force on it (**Hooke's law**):

$$F = kx$$

where $x$ is the stretch and $k$ is the spring's stiffness. Double the weight, double the stretch.

**Worked example.** A spring stretches $2$ inches under a $10$-lb weight. Under $25$ lb it stretches $\\frac{25}{10} \\times 2 = 5$ inches.

| Arrangement | Each spring carries | Total stretch compared with one spring |
|:---|:---|:---|
| **Series** (one hanging below the other) | the **full** weight | **twice** as much (each stretches the full amount) |
| **Parallel** (side by side, sharing the load) | **half** the weight | **half** as much |

So two springs in series act like a **softer** spring, and two side by side act like a **stiffer** one.`
    },
    {
      id: 'mgf3-spring-input',
      type: 'input-boxes' as const,
      content: `**Springs.** ✍️ Use the figure.

All springs are identical and every weight is the same. In setup A, the single spring stretches $3$ inches.

**1)** In setup B (two springs in series), how far does the weight move down in total, in inches? (number only)

**2)** In setup C (two springs side by side sharing a bar), how far does each spring stretch, in inches? (decimal or fraction)`,
      figure: {
        svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10.0" y1="14.0" x2="310.0" y2="14.0" stroke="currentColor" stroke-width="3"/><polyline points="50.0,14.0 60.0,16.5 40.0,21.5 60.0,26.5 40.0,31.5 60.0,36.5 40.0,41.5 60.0,46.5 40.0,51.5 60.0,56.5 40.0,61.5 60.0,66.5 40.0,71.5 50.0,74.0" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="36.0" y="74.0" width="28.0" height="22.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="50.0" y="112.0" font-size="11" fill="currentColor" text-anchor="middle">A: one spring</text><polyline points="150.0,14.0 160.0,16.5 140.0,21.5 160.0,26.5 140.0,31.5 160.0,36.5 140.0,41.5 160.0,46.5 140.0,51.5 160.0,56.5 140.0,61.5 160.0,66.5 140.0,71.5 150.0,74.0" fill="none" stroke="currentColor" stroke-width="1.8"/><polyline points="150.0,74.0 160.0,76.5 140.0,81.5 160.0,86.5 140.0,91.5 160.0,96.5 140.0,101.5 160.0,106.5 140.0,111.5 160.0,116.5 140.0,121.5 160.0,126.5 140.0,131.5 150.0,134.0" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="136.0" y="134.0" width="28.0" height="22.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="150.0" y="172.0" font-size="11" fill="currentColor" text-anchor="middle">B: in series</text><polyline points="240.0,14.0 250.0,15.2 230.0,17.8 250.0,20.2 230.0,22.8 250.0,25.2 230.0,27.8 250.0,30.2 230.0,32.8 250.0,35.2 230.0,37.8 250.0,40.2 230.0,42.8 240.0,44.0" fill="none" stroke="currentColor" stroke-width="1.8"/><polyline points="280.0,14.0 290.0,15.2 270.0,17.8 290.0,20.2 270.0,22.8 290.0,25.2 270.0,27.8 290.0,30.2 270.0,32.8 290.0,35.2 270.0,37.8 290.0,40.2 270.0,42.8 280.0,44.0" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="232.0" y1="44.0" x2="288.0" y2="44.0" stroke="currentColor" stroke-width="3"/><rect x="246.0" y="48.0" width="28.0" height="22.0" fill="none" stroke="currentColor" stroke-width="2"/><text x="260.0" y="86.0" font-size="11" fill="currentColor" text-anchor="middle">C: side by side</text><text x="260.0" y="112.0" font-size="11" fill="currentColor" text-anchor="middle">Identical springs,</text><text x="260.0" y="126.0" font-size="11" fill="currentColor" text-anchor="middle">equal weights</text></svg>',
        alt: 'Three setups hanging from a ceiling, with identical springs and equal weights. A: one spring holding the weight. B: two springs hooked end to end, one below the other, holding the weight. C: two springs side by side holding a bar, with the weight hanging from the bar.',
        caption: 'Figure 5. One spring, two in series, two side by side.'
      },
      exercise: {
        boxes: 2,
        correctAnswers: ['6', '1.5'],
        hint1: 'In series, each spring carries the full weight.',
        hint2: 'Side by side, each spring carries half the weight.',
        hint3: 'Half the force, half the stretch.',
        explanation: '(1) Each spring in series feels the whole weight and stretches $3$ in., so the total is $6$ in. (2) Side by side, each spring carries half the weight, so each stretches $1.5$ in.'
      }
    },
    {
      id: 'mgf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Belts: **diameter × rpm** is equal; smallest pulley is fastest; **open** = same direction, **crossed** = opposite
- Chains and sprockets: **teeth × rpm** is equal, same direction
- **Cam:** rotary to up-and-down; lifts per minute = lobes × rpm. **Crank:** back-and-forth to rotary. **Ratchet:** one way only
- **Springs:** stretch ∝ force; **series** = more stretch, **parallel** = less stretch

> **Up Next:** Part 4 — fluids, Pascal's principle and hydraulics.`
    }
  ]
};
