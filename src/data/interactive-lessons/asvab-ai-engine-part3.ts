// One four-stroke panel: valve positions, piston position and direction, optional spark.
const strokePanel = (o: { intakeOpen: boolean; exhaustOpen: boolean; pistonY: number; dir: 'up' | 'down'; spark: boolean; title: string }) => {
  const iv = o.intakeOpen ? 44 : 34
  const ev = o.exhaustOpen ? 44 : 34
  const arrow = o.dir === 'down'
    ? '<line x1="140" y1="62" x2="140" y2="102" stroke="currentColor" stroke-width="2.5"/><polygon points="140,110 134,100 146,100" fill="currentColor"/>'
    : '<line x1="140" y1="110" x2="140" y2="70" stroke="currentColor" stroke-width="2.5"/><polygon points="140,62 134,72 146,72" fill="currentColor"/>'
  const flowIn = o.intakeOpen ? '<g class="fig-accent"><line x1="18" y1="20" x2="48" y2="40" stroke="currentColor" stroke-width="2"/><polygon points="54,44 43,42 49,34" fill="currentColor"/></g>' : ''
  const flowOut = o.exhaustOpen ? '<g class="fig-accent-2"><line x1="112" y1="40" x2="138" y2="22" stroke="currentColor" stroke-width="2"/><polygon points="144,18 133,20 138,28" fill="currentColor"/></g>' : ''
  const spark = o.spark ? '<g class="fig-accent-2" stroke="currentColor" stroke-width="2"><line x1="80" y1="36" x2="80" y2="50"/><line x1="73" y1="43" x2="87" y2="43"/><line x1="75" y1="38" x2="85" y2="48"/><line x1="85" y1="38" x2="75" y2="48"/></g>' : ''
  return {
    svg: '<svg viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">'
      + '<g stroke="currentColor" stroke-width="2" fill="none"><line x1="30" y1="32" x2="130" y2="32"/><line x1="45" y1="32" x2="45" y2="128"/><line x1="115" y1="32" x2="115" y2="128"/></g>'
      + `<g stroke="currentColor"><line x1="60" y1="6" x2="60" y2="${iv}" stroke-width="2"/><line x1="51" y1="${iv}" x2="69" y2="${iv}" stroke-width="4"/><line x1="100" y1="6" x2="100" y2="${ev}" stroke-width="2"/><line x1="91" y1="${ev}" x2="109" y2="${ev}" stroke-width="4"/></g>`
      + `<rect x="47" y="${o.pistonY}" width="66" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="2.5"/>`
      + spark + flowIn + flowOut + arrow
      + `<text x="80" y="145" font-size="12" font-weight="bold" fill="currentColor" text-anchor="middle">${o.title}</text>`
      + '</svg>',
  }
}

const panels = [
  { ...strokePanel({ intakeOpen: true, exhaustOpen: false, pistonY: 92, dir: 'down', spark: false, title: '1. Intake' }), alt: 'Stroke 1, intake: the intake valve on the left is open with an arrow showing mixture flowing in, the exhaust valve is closed, and the piston is moving down.', size: 'sm' as const },
  { ...strokePanel({ intakeOpen: false, exhaustOpen: false, pistonY: 56, dir: 'up', spark: false, title: '2. Compression' }), alt: 'Stroke 2, compression: both valves are closed and the piston is moving up, squeezing the mixture.', size: 'sm' as const },
  { ...strokePanel({ intakeOpen: false, exhaustOpen: false, pistonY: 92, dir: 'down', spark: true, title: '3. Power' }), alt: 'Stroke 3, power: both valves are closed, a spark flashes at the top of the cylinder, and the piston is driven down.', size: 'sm' as const },
  { ...strokePanel({ intakeOpen: false, exhaustOpen: true, pistonY: 56, dir: 'up', spark: false, title: '4. Exhaust' }), alt: 'Stroke 4, exhaust: the exhaust valve on the right is open with an arrow showing gas flowing out, the intake valve is closed, and the piston is moving up.', size: 'sm' as const },
]

const mysteryA = { ...strokePanel({ intakeOpen: false, exhaustOpen: false, pistonY: 56, dir: 'up', spark: false, title: '?' }), alt: 'A cylinder with both valves closed. The piston is moving up. There is no spark.', caption: 'Figure 5. Which stroke is this?', size: 'sm' as const }

export const asvabAiEnginePart3Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie3-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 3 of 7 — The Four-Stroke Cycle**

### Suck, Squeeze, Bang, Blow

Almost every car engine runs on the **four-stroke cycle**. A **stroke** is one trip of the piston, either down or up. Four strokes make one complete cycle:

| Stroke | Piston moves | Intake valve | Exhaust valve | What happens |
|:---|:---:|:---:|:---:|:---|
| **1. Intake** | down | **open** | closed | the falling piston draws the fuel-air mixture into the cylinder ("suck") |
| **2. Compression** | up | closed | closed | the rising piston squeezes the mixture into the combustion chamber ("squeeze") |
| **3. Power** | down | closed | closed | the spark plug fires; the burning mixture expands and drives the piston down ("bang") |
| **4. Exhaust** | up | closed | **open** | the rising piston pushes the burned gases out ("blow") |

Then the cycle repeats.

> **Key Fact:** Only the **power stroke** produces power. The other three strokes are kept going by the momentum of the crankshaft and flywheel (and by the other cylinders firing).

### Counting revolutions

- Each stroke is **half a turn** of the crankshaft (down = ½ turn, up = ½ turn).
- One full cycle = 4 strokes = **2 crankshaft revolutions** (720°).
- Each valve opens once per cycle, so the **camshaft turns at half the speed of the crankshaft**. That is why the cam gear is twice the size of the crank gear on the timing belt or chain.`,
    },
    {
      id: 'aie3-panels',
      type: 'figure' as const,
      figure: panels,
      content: 'Figure 4. The four strokes. Watch the valves: only one stroke has the intake valve open, only one has the exhaust valve open, and both are closed for compression and power.',
    },
    {
      id: 'aie3-mystery-mc',
      type: 'multiple-choice' as const,
      figure: mysteryA,
      content: '**Read the cylinder.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In Figure 5, both valves are closed and the piston is moving up with no spark. Which stroke is shown?',
            options: ['Compression', 'Exhaust', 'Power', 'Intake'],
            correctAnswer: 0,
            explanation: 'Both valves closed rules out intake and exhaust. The piston moving up (not driven down by a spark) makes it the compression stroke.',
          },
          {
            question: 'Which stroke immediately follows the one shown in Figure 5?',
            options: ['Power', 'Intake', 'Exhaust', 'Compression again'],
            correctAnswer: 0,
            explanation: 'The order is intake, compression, power, exhaust. After compression, the spark fires and the power stroke begins.',
          },
        ],
      },
    },
    {
      id: 'aie3-other',
      type: 'text' as const,
      content: `## Two Other Engine Types

### Two-stroke engines

Lawn equipment, chainsaws, some outboard motors and small motorcycles often use a **two-stroke** engine. It completes the whole cycle in **two strokes (one crankshaft revolution)**, so it gets a power stroke **every revolution**. It usually has ports in the cylinder wall instead of valves, and its oil is **mixed into the fuel** (that is why you add oil to the gas can for a chainsaw). It is light and simple but less efficient and dirtier.

### Diesel engines

A diesel is also usually a four-stroke engine, but it ignites its fuel differently:

| | Gasoline engine | Diesel engine |
|:---|:---|:---|
| What is drawn in on intake | fuel-air mixture (or air, with fuel injected) | **air only** |
| How the fuel ignites | a **spark plug** | **heat of compression**: air squeezed hard gets hot enough to ignite fuel sprayed into it |
| Compression ratio | lower (about 8 : 1 to 12 : 1) | much higher (about 15 : 1 to 22 : 1) |
| Cold-start helper | | **glow plugs** heat the combustion chamber |
| Spark plugs? | yes | **no** |

Diesels are common in trucks, military vehicles, buses and heavy equipment because they give strong pulling power (torque) and good fuel economy.`,
    },
    {
      id: 'aie3-mc',
      type: 'multiple-choice' as const,
      content: '**Check the cycle.** 🎯',
      exercise: {
        questions: [
          {
            question: 'During which stroke is the exhaust valve open?',
            options: ['Exhaust', 'Intake', 'Compression', 'Power'],
            correctAnswer: 0,
            explanation: 'The exhaust valve opens only on the exhaust stroke, when the rising piston pushes the burned gases out.',
          },
          {
            question: 'How many times does the crankshaft turn during one complete four-stroke cycle?',
            options: ['Twice', 'Once', 'Four times', 'Half a turn'],
            correctAnswer: 0,
            explanation: 'Each stroke is half a turn, so four strokes take two full crankshaft revolutions.',
          },
          {
            question: 'A diesel engine has no spark plugs. What ignites its fuel?',
            options: ['The heat of highly compressed air', 'A glow plug firing on every power stroke', 'A spark from the alternator', 'The hot exhaust valve'],
            correctAnswer: 0,
            explanation: 'Squeezing air to a very high compression ratio makes it hot enough to ignite the injected diesel fuel. Glow plugs only help when the engine is cold.',
          },
          {
            question: 'Why do people mix oil into the gasoline for many chainsaws and string trimmers?',
            options: ['Their two-stroke engines get lubrication from the fuel', 'Oil raises the octane so the small engine does not knock', 'The oil cools the spark plug between firings', 'Oil keeps the gasoline from evaporating'],
            correctAnswer: 0,
            explanation: 'Small two-stroke engines usually have no separate oil supply; oil mixed into the fuel lubricates the moving parts as the mixture passes through.',
          },
        ],
      },
    },
    {
      id: 'aie3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Fill in the cycle.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'The stroke that draws in the fuel-air mixture:', options: ['intake', 'compression', 'power', 'exhaust'], correctAnswer: 0 },
          { label: 'The stroke in which the burning mixture drives the piston down:', options: ['power', 'intake', 'exhaust', 'compression'], correctAnswer: 0 },
          { label: 'Compared with the crankshaft, the camshaft turns:', options: ['at half the speed', 'at the same speed', 'at twice the speed', 'only when starting'], correctAnswer: 0 },
        ],
        correctAnswers: ['intake', 'power', 'at half the speed'],
        hint1: 'Suck, squeeze, bang, blow.',
        hint2: 'The bang is the power stroke.',
        hint3: 'Each valve opens once every two crankshaft turns.',
        explanation: 'Intake draws in the mixture; the spark fires at the very end of compression, and the burning mixture then drives the piston down on the power stroke; the camshaft turns once for every two crankshaft turns.',
      },
    },
    {
      id: 'aie3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Intake** (down, intake valve open) → **compression** (up, both closed) → **power** (down, both closed, spark) → **exhaust** (up, exhaust valve open)
- Only the **power stroke** makes power
- One cycle = **2 crankshaft revolutions**; the camshaft turns at **half** crankshaft speed
- **Two-stroke:** power every revolution, oil mixed with fuel
- **Diesel:** air only on intake, **compression ignition**, no spark plugs, **glow plugs** for cold starts, higher compression ratio

> **Up Next:** Part 4 — the ignition system and what makes combustion go right or wrong.`,
    },
  ],
}
