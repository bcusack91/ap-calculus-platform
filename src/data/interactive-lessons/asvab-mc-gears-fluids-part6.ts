export const asvabMcGearsFluidsPart6Data = {
  topicSlug: 'asvab-mc-gears-fluids',
  sections: [
    {
      id: 'mgf6-intro',
      type: 'text' as const,
      content: `# ⚙️ Gears, Fluids and Structures

**Part 6 of 7 — Gears, Fluids and Structures Test Strategy and Traps**

### Timing

Mechanical Comprehension: **$15$ questions in $22$ minutes**, about **$88$ seconds** each. Gear-direction, belt and float questions are often answerable in **20 to 40 seconds** once you know the rule; save your time for the multi-step ones (compound gears, hydraulic distances, beam shares).

- You must answer each question to move on, and you cannot go back.
- Treat every question as scored; tryout items look identical.
- If time runs short, keep working real answers. A string of wrong answers at the end of a subtest is penalized heavily on the CAT.

### Fast routines

| Picture | Routine |
|:---|:---|
| Gear train | **count** the gears from the driver: odd = same direction, even = opposite. For speed, use **teeth × rpm** between the gears that matter, skipping idlers |
| Compound gears | work **pair by pair**; gears on one shaft share rpm |
| Belts | open = same direction, crossed = opposite; smallest pulley is fastest |
| Hydraulics | **pressure first** ($F \\div A$), then multiply by the other area |
| Floating objects | floats → displaces its own weight; deeper = heavier |
| Beams | nearer post carries more; share = load × (distance to the **other** post) ÷ span |
| Brackets and frames | look for the **triangle** |`
    },
    {
      id: 'mgf6-traps',
      type: 'text' as const,
      content: `## The traps test writers like

| Trap | The fact that beats it |
|:---|:---|
| Thinking an idler gear changes the speed ratio | it changes **direction only** |
| Thinking the bigger gear turns faster | **smaller** gear = **faster** |
| Thinking gears on the same shaft turn opposite ways | same shaft = **same direction, same rpm** |
| Forgetting a crossed belt reverses direction | open = same, **crossed = opposite** |
| Using the **diameter** ratio for hydraulic pistons | use the **area** ratio: diameter × 2 → force × 4 |
| Thinking the small piston moves as far as the big one | small piston moves **farther** ($A_1 d_1 = A_2 d_2$) |
| Thinking a wide tank has more bottom pressure than a narrow one of the same depth | pressure depends on **depth only** |
| Thinking the farther post carries more | the **nearer** post carries more |
| Thinking springs in series stretch less | in series they stretch **more** |`
    },
    {
      id: 'mgf6-trap-check',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Gear A ($24$ teeth) turns at $50$ rpm and drives an $8$-tooth idler, which drives gear C ($12$ teeth). How fast does gear C turn?',
            options: ['100 rpm', '150 rpm', '25 rpm', '50 rpm'],
            correctAnswer: 0,
            explanation: 'Skip the idler for speed: $24 \\times 50 = 12 \\times \\text{rpm}_C$, so C turns at $100$ rpm. ($150$ rpm is the idler\'s own speed, the trap.) C turns the same direction as A.'
          },
          {
            question: 'A narrow pipe standing upright and a wide tank are both filled with water to a depth of $10$ feet. How does the water pressure at the bottom compare?',
            options: ['It is the same in both', 'It is greater in the wide tank', 'It is greater in the narrow pipe', 'It depends on the tank\'s total volume'],
            correctAnswer: 0,
            explanation: 'Liquid pressure depends only on depth (and the kind of liquid), not on the container\'s width or total volume. Same depth, same pressure.'
          },
          {
            question: 'Two identical springs are hooked end to end and a $20$-lb weight hangs from the bottom. One spring alone stretches $2$ inches under $20$ lb. How far does the weight drop?',
            options: ['4 inches', '1 inch', '2 inches', '8 inches'],
            correctAnswer: 0,
            explanation: 'In series, each spring carries the full $20$ lb and stretches $2$ inches, so the total stretch is $4$ inches. Side by side, they would stretch only $1$ inch each.'
          }
        ]
      }
    },
    {
      id: 'mgf6-speed-dd',
      type: 'dropdown-select' as const,
      content: '**Speed drill.** Under 30 seconds each. ⏱️',
      exercise: {
        dropdowns: [
          {
            label: 'Six gears in a row; the first turns clockwise. The sixth turns:',
            options: ['counterclockwise', 'clockwise', 'not at all', 'faster than the first'],
            correctAnswer: 0
          },
          {
            label: 'A hydraulic piston with twice the diameter multiplies force by:',
            options: ['4', '2', '8', '1/2'],
            correctAnswer: 0
          },
          {
            label: 'A load sits at the exact middle of a beam on two posts. Each post carries:',
            options: ['half the load', 'the whole load', 'none of the load', 'a third of the load'],
            correctAnswer: 0
          },
          {
            label: 'A 6-in. pulley at 200 rpm drives a 3-in. pulley. The 3-in. pulley turns at:',
            options: ['400 rpm', '100 rpm', '200 rpm', '600 rpm'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['counterclockwise', '4', 'half the load', '400 rpm'],
        hint1: 'Even-numbered gears oppose the first.',
        hint2: 'Area goes with diameter squared.',
        hint3: 'Diameter × rpm is equal: 6 × 200 = 3 × rpm.',
        explanation: 'The sixth gear is even-numbered, so it turns counterclockwise. Twice the diameter is four times the area and force. A centered load splits evenly. $6 \\times 200 = 3 \\times 400$.'
      }
    },
    {
      id: 'mgf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Gears: count for direction, **teeth × rpm** for speed, skip idlers, same shaft = same rpm
- Belts: open = same, crossed = opposite, smallest = fastest
- Hydraulics: **areas**, not diameters; the small piston moves farther
- Pressure depends on **depth**; floaters displace their own weight
- Beams: the **nearer** post carries more; series springs stretch **more**

> **Up Next:** Part 7 — a mixed mastery set for gears, fluids and structures.`
    }
  ]
};
