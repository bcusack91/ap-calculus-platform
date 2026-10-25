export const asvabSiMaterialsFastenersPart6Data = {
  topicSlug: 'asvab-si-materials-fasteners',
  sections: [
    {
      id: 'simf6-intro',
      type: 'text' as const,
      content: `# 🔩 Materials, Fasteners and Shop Processes

**Part 6 of 7 — Materials and Fasteners Test Strategy and Traps**

### Timing

Shop Information gives you **$10$ questions in $6$ minutes**, about **$36$ seconds** each, and materials and fastener questions share that clock with the tool questions.

- Fact questions ("What does *d* mean in 16d?") should take **under 15 seconds**. Answer, move on, bank the time.
- Number questions (penny length, board feet, actual lumber size, turns of a nut) need a quick line of scratch work. Write it; don't juggle it in your head.
- You must answer to move on and cannot return, so commit to your best answer. Treat every question as scored, since tryout items look the same.

### A routine for fastener and material questions

1. **What is being joined or built?** Wood to wood, metal to metal, something to a hollow wall, something to concrete?
2. **What does the joint need?** Permanent or removable? Resist pulling out, resist vibration, sit flush, survive outdoors?
3. **Pick the item designed for that job**, not one that could merely be forced to work.

**Worked example.** "What is the best way to attach a heavy coat rack to a concrete block wall?" Joined to: masonry. Needs: strong, removable screws. Answer: drill with a **masonry bit** and use **masonry anchors** (expansion anchors) with screws or bolts. A toggle bolt is for hollow drywall; nails will not hold in block.`
    },
    {
      id: 'simf6-traps',
      type: 'text' as const,
      content: `## The number traps

These four scales go in **opposite directions**, and test writers know it.

| Scale | Bigger number means | Example |
|:---|:---|:---|
| **Penny** (nails) | **longer** nail | 16d ($3\\frac{1}{2}$ in.) is longer than 8d ($2\\frac{1}{2}$ in.) |
| **Gauge** (sheet metal, wire) | **thinner** | 10-gauge is thicker than 20-gauge |
| **Grit** (sandpaper) | **finer** | 220 is finer than 80 |
| **TPI** (threads per inch) | **finer thread**, smaller pitch | a 28-TPI bolt has a finer thread than a 20-TPI bolt |

## The word traps

| Trap | The fact that beats it |
|:---|:---|
| Nominal versus actual lumber | a $2 \\times 4$ is really $1\\frac{1}{2} \\times 3\\frac{1}{2}$ |
| "d" means "dollars" or "diameter" | it is the **penny** length code |
| Tap versus die | **tap** = inside threads in a hole; **die** = outside threads on a rod |
| Solder versus weld | solder and braze never melt the base metal; welding does |
| Hardwood and softwood by feel | named by tree type: fir and pine are softwoods, oak and maple hardwoods |
| Lock washer versus flat washer | **lock** resists loosening; **flat** spreads the load |
| Pop rivet versus solid rivet | pop rivets go in from **one side** |
| Carriage bolt versus lag screw | carriage bolt goes **through** with a nut; lag screw threads **into** the wood |
| Concrete "dries" | it **cures** by a chemical reaction; keep it moist |`
    },
    {
      id: 'simf6-trap-check',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which nail is the longest?',
            options: ['20d', '12d', '8d', '4d'],
            correctAnswer: 0,
            explanation: 'Penny size grows with length, so the biggest penny number is the longest nail: a 20d nail is $4$ inches. Do not mix this up with gauge, where bigger means thinner.'
          },
          {
            question: 'A duct installer has four sheets of galvanized steel. Which sheet is the thinnest?',
            options: ['18 gauge', '14 gauge', '12 gauge', '10 gauge'],
            correctAnswer: 0,
            explanation: 'For sheet-metal gauge, the higher the number, the thinner the sheet. 18 gauge is the thinnest of these and 10 gauge the thickest.'
          },
          {
            question: 'A shelf plan calls for two boards totaling exactly $7$ inches of width when laid edge to edge. Which pair of nominal boards gives that actual width?',
            options: ['Two 1 × 8 boards (7 1/4 in. each)', 'Two 1 × 4 boards (3 1/2 in. each)', 'Two 1 × 3 boards (2 1/2 in. each)', 'Two 1 × 6 boards (5 1/2 in. each)'],
            correctAnswer: 1,
            explanation: 'Use actual widths: two $1 \\times 4$ boards are $3\\frac{1}{2} + 3\\frac{1}{2} = 7$ inches. The trap is adding nominal sizes: two nominal 1 × 4s "sound like" 8 inches, and two nominal 1 × 3s "sound like" 6.'
          },
          {
            question: 'Which statement about joining metals is correct?',
            options: ['Brazing melts the two base metals together', 'Soldering uses more heat than welding', 'Welding fuses the base metals themselves', 'Flux is only used in arc welding rods'],
            correctAnswer: 2,
            explanation: 'Only welding melts and fuses the base metal. Brazing and soldering melt just a filler, soldering uses the least heat of the three, and flux is used in soldering and brazing as well as in coated welding rods.'
          }
        ]
      }
    },
    {
      id: 'simf6-speed-dd',
      type: 'dropdown-select' as const,
      content: '**Speed drill.** Under 15 seconds each. ⏱️',
      exercise: {
        dropdowns: [
          {
            label: 'Holds a light fixture box to a hollow plaster wall:',
            options: ['toggle bolt', 'carriage bolt', 'lag screw', 'duplex nail'],
            correctAnswer: 0
          },
          {
            label: 'Keeps a nut from vibrating loose:',
            options: ['lock nut', 'acorn nut', 'fender washer', 'wing nut'],
            correctAnswer: 0
          },
          {
            label: 'Cuts threads on the outside of a steel rod:',
            options: ['die', 'tap', 'reamer', 'countersink'],
            correctAnswer: 0
          },
          {
            label: 'Copper and zinc make:',
            options: ['brass', 'bronze', 'stainless steel', 'cast iron'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['toggle bolt', 'lock nut', 'die', 'brass'],
        hint1: 'Spring wings open behind the wall.',
        hint2: 'Nylon insert or distorted thread.',
        hint3: 'Outside threads: die. Inside threads: tap.',
        explanation: 'Toggle bolts hold in hollow walls; lock nuts resist vibration; a die cuts outside threads; and brass is copper plus zinc (bronze is copper plus tin).'
      }
    },
    {
      id: 'simf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Fact questions in under 15 seconds; number questions with one line of scratch work
- Routine: **what is joined** → **what the joint needs** → the item **designed** for it
- Bigger number: **penny = longer**, **gauge = thinner**, **grit = finer**, **TPI = finer thread**
- Always use **actual** lumber sizes for math
- **Tap** inside, **die** outside; **solder/braze** never melt the base metal, **welding** does

> **Up Next:** Part 7 — a mixed mastery set for materials, fasteners and shop processes.`
    }
  ]
};
