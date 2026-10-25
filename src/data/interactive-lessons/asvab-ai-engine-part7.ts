const strokePanel = (o: { intakeOpen: boolean; exhaustOpen: boolean; pistonY: number; dir: 'up' | 'down' }) => {
  const iv = o.intakeOpen ? 44 : 34
  const ev = o.exhaustOpen ? 44 : 34
  const arrow = o.dir === 'down'
    ? '<line x1="140" y1="62" x2="140" y2="102" stroke="currentColor" stroke-width="2.5"/><polygon points="140,110 134,100 146,100" fill="currentColor"/>'
    : '<line x1="140" y1="110" x2="140" y2="70" stroke="currentColor" stroke-width="2.5"/><polygon points="140,62 134,72 146,72" fill="currentColor"/>'
  return '<svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
    + '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="30" y1="32" x2="130" y2="32"/><line x1="45" y1="32" x2="45" y2="128"/><line x1="115" y1="32" x2="115" y2="128"/></g>'
    + `<g stroke="currentColor"><line x1="60" y1="6" x2="60" y2="${iv}" stroke-width="2"/><line x1="51" y1="${iv}" x2="69" y2="${iv}" stroke-width="4"/><line x1="100" y1="6" x2="100" y2="${ev}" stroke-width="2"/><line x1="91" y1="${ev}" x2="109" y2="${ev}" stroke-width="4"/></g>`
    + `<rect x="47" y="${o.pistonY}" width="66" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>`
    + arrow
    + '</svg>'
}

const aie7Figure = {
  svg: strokePanel({ intakeOpen: false, exhaustOpen: true, pistonY: 56, dir: 'up' }),
  alt: 'A cylinder with its left valve (intake) closed and its right valve (exhaust) open. The piston is moving up.',
  caption: 'Figure 10. The left valve is the intake valve; the right valve is the exhaust valve.',
  size: 'sm' as const,
}

export const asvabAiEnginePart7Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie7-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 7 of 7 — Mixed Mastery Set**

Ten questions covering the whole topic, at real AI difficulty. Give yourself about **40 seconds each**.

| Skill | Where it was taught |
|:---|:---:|
| Engine parts | Part 2 |
| Four-stroke cycle, two-strokes, diesels | Part 3 |
| Ignition, heat range, knock | Part 4 |
| Oil and engine symptoms | Part 5 |`,
    },
    {
      id: 'aie7-figure-mc',
      type: 'multiple-choice' as const,
      figure: aie7Figure,
      content: '**Question 1.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which stroke of the four-stroke cycle does Figure 10 show?',
            options: ['Exhaust', 'Intake', 'Compression', 'Power'],
            correctAnswer: 0,
            explanation: 'Only the exhaust valve is open and the piston is rising, pushing burned gas out: the exhaust stroke.',
          },
        ],
      },
    },
    {
      id: 'aie7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Questions 2–5.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which part connects the piston to the crankshaft?',
            options: ['The connecting rod', 'The camshaft gear', 'The timing chain', 'The valve spring seat'],
            correctAnswer: 0,
            explanation: 'The connecting rod links the piston (at the wrist pin) to the crankshaft, passing each push along.',
          },
          {
            question: 'A mechanic finds a car\'s engine oil looks like a milkshake. What is the most likely cause?',
            options: ['A failed head gasket mixing coolant into oil', 'Worn piston rings letting fuel into the oil pan', 'An oil filter that is overdue for a change', 'A spark plug with too much heat range'],
            correctAnswer: 0,
            explanation: 'Milky oil means coolant is mixing in, usually through a failed head gasket (or a cracked head or block).',
          },
          {
            question: 'Why does a diesel engine need a much higher compression ratio than a gasoline engine?',
            options: ['The squeezed air must get hot enough to ignite the fuel', 'Diesel fuel must be burned before the intake stroke', 'Higher compression keeps the glow plugs from wearing out', 'Diesel engines have no valves to seal the cylinders'],
            correctAnswer: 0,
            explanation: 'A diesel has no spark plugs. Compressing air very hard raises its temperature enough to ignite the fuel sprayed into it.',
          },
          {
            question: 'In a four-stroke engine running at 3,000 crankshaft revolutions per minute, how many revolutions per minute does the camshaft make?',
            options: ['1,500', '3,000', '6,000', '750'],
            correctAnswer: 0,
            explanation: 'The camshaft turns at half crankshaft speed, because each valve opens once every two crank revolutions: 3,000 ÷ 2 = 1,500.',
          },
        ],
      },
    },
    {
      id: 'aie7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Questions 6–10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car pings under hard acceleration. Which condition could cause this?',
            options: ['Ignition timing that is too far advanced', 'An oil grade that is too thick for winter', 'A spark plug heat range that is too cold', 'An air filter that has just been replaced'],
            correctAnswer: 0,
            explanation: 'Over-advanced timing is a classic cause of detonation (ping), along with low octane, overheating and carbon buildup.',
          },
          {
            question: 'Black smoke pours from the tailpipe of a gasoline engine. What does it usually mean?',
            options: ['The engine is getting too much fuel', 'The engine is burning its oil', 'Coolant is leaking into one cylinder', 'The exhaust valve is stuck closed'],
            correctAnswer: 0,
            explanation: 'Black smoke is soot from unburned fuel: the mixture is too rich.',
          },
          {
            question: 'Which is NOT one of the jobs of engine oil?',
            options: ['Igniting the fuel-air mixture', 'Reducing friction between parts', 'Carrying heat away from parts', 'Carrying dirt to the filter'],
            correctAnswer: 0,
            explanation: 'Oil lubricates, cools, cleans and seals. Ignition is the spark plug\'s job (or compression heat in a diesel).',
          },
          {
            question: 'An engine has a cylinder volume of 600 cc with the piston at bottom dead center and 60 cc at top dead center. What is its compression ratio?',
            options: ['10 : 1', '6 : 1', '540 : 1', '9 : 1'],
            correctAnswer: 0,
            explanation: 'Compression ratio = volume at the bottom ÷ volume at the top = 600 ÷ 60 = 10, so 10 : 1. 9 : 1 would wrongly use the 540-cc difference.',
          },
          {
            question: 'A small engine gets one power stroke on every crankshaft revolution and runs on gasoline mixed with oil. What type of engine is it?',
            options: ['A two-stroke engine', 'A four-stroke diesel engine', 'A four-stroke gasoline engine', 'A rotary electric motor'],
            correctAnswer: 0,
            explanation: 'Two-stroke engines complete the cycle in one revolution and are usually lubricated by oil mixed into the fuel.',
          },
        ],
      },
    },
    {
      id: 'aie7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Engines and Combustion

- Piston → connecting rod → **crankshaft** (rotation); **camshaft** opens valves at half crank speed; timing belt/chain keeps them in step
- **Combustion chamber** = where fuel burns; **piston rings** seal compression and control oil
- Four strokes: **intake, compression, power, exhaust**; 2 crank turns per cycle; only power makes power
- Ignition: coil steps 12 V up; plug gap; **hot plug = long nose**, cold plug for hot-running engines; **knock** = detonation (octane, timing, heat, carbon)
- Oil: lubricate, cool, clean, seal; oil light = stop; **blue smoke = oil, black = rich, sweet white = coolant**

> **Next topic:** Drivetrain, Brakes, Steering and Suspension.`,
    },
  ],
}
