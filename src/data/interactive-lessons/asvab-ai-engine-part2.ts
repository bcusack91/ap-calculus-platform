// Engine cross-section, drawn once and labeled either with names (teaching) or numbers (checks).
const ENGINE_BODY = '<g stroke="currentColor" stroke-width="2" fill="none"><rect x="96" y="34" width="128" height="34"/><line x1="96" y1="68" x2="96" y2="200"/><line x1="224" y1="68" x2="224" y2="200"/><line x1="110" y1="68" x2="110" y2="200"/><line x1="210" y1="68" x2="210" y2="200"/><path d="M 96 200 L 80 214 L 80 250 L 240 250 L 240 214 L 224 200"/></g>'
  + '<rect class="fig-accent-2" x="111" y="69" width="98" height="34" fill="currentColor" fill-opacity="0.18"/>'
  + '<g stroke="currentColor" stroke-width="2"><line x1="132" y1="6" x2="132" y2="62"/><line x1="188" y1="6" x2="188" y2="62"/></g><g stroke="currentColor" stroke-width="5"><line x1="121" y1="66" x2="143" y2="66"/><line x1="177" y1="66" x2="199" y2="66"/></g>'
  + '<g stroke="currentColor" stroke-width="2" fill="none"><rect x="154" y="4" width="12" height="18"/><line x1="160" y1="22" x2="160" y2="66"/></g>'
  + '<g class="fig-accent"><rect x="112" y="104" width="96" height="44" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/><g stroke="currentColor" stroke-width="1.5"><line x1="112" y1="110" x2="208" y2="110"/><line x1="112" y1="116" x2="208" y2="116"/><line x1="112" y1="122" x2="208" y2="122"/></g><circle cx="160" cy="134" r="6" fill="none" stroke="currentColor" stroke-width="2"/></g>'
  + '<g stroke="currentColor" stroke-linecap="round"><line x1="160" y1="134" x2="182" y2="214" stroke-width="7"/><line x1="160" y1="226" x2="182" y2="214" stroke-width="8"/></g><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="160" cy="226" r="10"/><circle cx="182" cy="214" r="6"/><path d="M 138 238 A 24 24 0 0 0 182 238" stroke-width="4"/></g>'

type EngineLabel = { text: string; x: number; y: number; lx1: number; ly1: number; lx2: number; ly2: number; anchor: 'start' | 'end' }
const ENGINE_LABELS: Record<string, Omit<EngineLabel, 'text'>> = {
  spark: { x: 232, y: 16, lx1: 168, ly1: 12, lx2: 228, ly2: 12, anchor: 'start' },
  intake: { x: 74, y: 34, lx1: 78, ly1: 30, lx2: 130, ly2: 30, anchor: 'end' },
  exhaust: { x: 232, y: 40, lx1: 190, ly1: 36, lx2: 228, ly2: 36, anchor: 'start' },
  head: { x: 232, y: 62, lx1: 224, ly1: 58, lx2: 228, ly2: 58, anchor: 'start' },
  chamber: { x: 74, y: 90, lx1: 78, ly1: 86, lx2: 124, ly2: 86, anchor: 'end' },
  rings: { x: 74, y: 120, lx1: 78, ly1: 116, lx2: 116, ly2: 116, anchor: 'end' },
  piston: { x: 232, y: 140, lx1: 206, ly1: 136, lx2: 228, ly2: 136, anchor: 'start' },
  rod: { x: 232, y: 182, lx1: 177, ly1: 178, lx2: 228, ly2: 178, anchor: 'start' },
  crank: { x: 74, y: 230, lx1: 78, ly1: 226, lx2: 148, ly2: 226, anchor: 'end' },
  pan: { x: 246, y: 246, lx1: 240, ly1: 242, lx2: 244, ly2: 242, anchor: 'start' },
}
const engineSvg = (labels: Record<string, string>) => {
  let out = '<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' + ENGINE_BODY
  for (const [key, text] of Object.entries(labels)) {
    const l = ENGINE_LABELS[key]
    out += `<line x1="${l.lx1}" y1="${l.ly1}" x2="${l.lx2}" y2="${l.ly2}" class="fig-muted" stroke="currentColor" stroke-width="1"/>`
    const lines = text.split('\n')
    const y0 = l.y - (lines.length - 1) * 6
    out += `<text x="${l.x}" y="${y0}" font-size="11" fill="currentColor" text-anchor="${l.anchor}">`
      + lines.map((t, i) => `<tspan x="${l.x}" dy="${i === 0 ? 0 : 12}">${t}</tspan>`).join('')
      + '</text>'
  }
  return out + '</svg>'
}

const aie2LabeledFigure = {
  svg: engineSvg({ spark: 'spark plug', intake: 'intake\nvalve', exhaust: 'exhaust valve', head: 'cylinder head', chamber: 'combustion\nchamber', rings: 'piston\nrings', piston: 'piston', rod: 'connecting rod', crank: 'crankshaft', pan: 'oil pan' }),
  alt: 'Cross-section of one engine cylinder. At the top is the cylinder head, holding the intake valve on the left, the spark plug in the middle and the exhaust valve on the right. Below the head, the shaded space above the piston is the combustion chamber. The piston slides in the cylinder and has piston rings around its upper part. A connecting rod joins the piston (at the wrist pin) to an offset crank pin on the crankshaft at the bottom. The oil pan closes the bottom of the engine.',
  caption: 'Figure 2. One cylinder of a gasoline engine.',
  size: 'lg' as const,
}

const aie2NumberedFigure = {
  svg: engineSvg({ spark: '1', chamber: '2', rings: '3', rod: '4', crank: '5' }),
  alt: 'The same engine cross-section with five numbered callouts. 1 points to the device screwed into the top center of the cylinder head. 2 points to the shaded space between the top of the piston and the cylinder head. 3 points to the rings around the upper part of the piston. 4 points to the rod joining the piston to the crank. 5 points to the rotating shaft at the bottom of the engine.',
  caption: 'Figure 3. Numbered engine parts.',
  size: 'lg' as const,
}

export const asvabAiEnginePart2Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie2-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 2 of 7 — Engine Parts: Block, Pistons, Crankshaft and Valves**

### How an Engine Makes Turning Power

A car engine is an **internal combustion engine**: fuel burns **inside** sealed **cylinders**. The burning gas expands and shoves a **piston** down. A **connecting rod** passes that push to the **crankshaft**, which turns the up-and-down motion of the pistons into **rotation**, the same way your legs turn a bicycle's pedals.

Follow one push from top to bottom in Figure 2 (next screen):

1. A spark lights the fuel-air mixture in the **combustion chamber**.
2. The expanding gas pushes the **piston** down the **cylinder**.
3. The **connecting rod** carries the push to the **crankshaft**.
4. The **crankshaft** spins, and the spinning power goes on to the transmission and wheels.`,
    },
    {
      id: 'aie2-figure',
      type: 'figure' as const,
      figure: aie2LabeledFigure,
      content: 'Find each part as you read the table on the next screen. The shaded space is where the fuel actually burns.',
    },
    {
      id: 'aie2-parts',
      type: 'text' as const,
      content: `## The Parts, One by One

| Part | What it does | What goes wrong (and the symptom) |
|:---|:---|:---|
| **Engine block** | the heavy metal casting that contains the cylinders | a crack: coolant or oil leaks |
| **Cylinder** | the tube the piston slides up and down in | worn walls: lost compression, oil burning |
| **Cylinder head** | bolts on top of the block; holds the valves and spark plugs and forms the top of the combustion chamber | warped by overheating |
| **Head gasket** | seals the joint between the head and the block | "blown" gasket: coolant leaks into the cylinders (white exhaust smoke) or mixes with oil |
| **Combustion chamber** | the space above the piston where the fuel-air mixture **burns** | carbon buildup |
| **Piston** | the plug that is pushed down by the burning gas | cracked or burned piston: lost power |
| **Piston rings** | **compression rings** seal the gap between piston and cylinder wall; the **oil control ring** scrapes excess oil off the wall | **worn rings: the engine burns oil (blue smoke), loses compression and power** |
| **Wrist pin** | connects the piston to the connecting rod | knocking noise when worn |
| **Connecting rod** | links the piston to the crankshaft | a worn rod bearing: deep knocking that gets louder with speed |
| **Crankshaft** | turns the pistons' up-and-down motion into **rotation** | worn main bearings: knocking, low oil pressure |
| **Flywheel** | a heavy wheel on the end of the crankshaft that smooths out the power pulses; the starter motor turns it | |
| **Camshaft** | a shaft with egg-shaped **lobes** that push the valves open at the right moment | worn lobes: valves open too little |
| **Valves** | **intake** valves let the fuel-air mixture in; **exhaust** valves let burned gas out; **valve springs** snap them shut | burned or leaking valve: lost compression, misfire |
| **Timing belt or chain** | connects the crankshaft to the camshaft so the valves stay in step with the pistons | a broken belt stops the engine, and in some engines lets pistons hit valves |
| **Oil pan** | the reservoir at the bottom of the engine that holds the oil | leaks: oil spots under the car |

> **Key Fact:** Combustion happens in the **combustion chamber**, the space between the **top of the piston** and the **cylinder head**. Not in the carburetor, the manifold or the crankcase.`,
    },
    {
      id: 'aie2-numbered-mc',
      type: 'multiple-choice' as const,
      figure: aie2NumberedFigure,
      content: '**Name the numbered parts.** 🎯 Use Figure 3.',
      exercise: {
        questions: [
          {
            question: 'In which numbered location does the fuel-air mixture burn?',
            options: ['Location 2', 'Location 1', 'Location 3', 'Location 5'],
            correctAnswer: 0,
            explanation: 'Location 2 is the combustion chamber, between the top of the piston and the cylinder head. Location 1 is the spark plug, which only starts the burn.',
          },
          {
            question: 'Which numbered part turns the up-and-down motion of the piston into rotation?',
            options: ['Part 5', 'Part 4', 'Part 3', 'Part 1'],
            correctAnswer: 0,
            explanation: 'Part 5 is the crankshaft. Part 4, the connecting rod, carries the push to it but does not rotate the shaft by itself.',
          },
          {
            question: 'Part 3 is worn out. What is the most likely symptom?',
            options: ['The engine burns oil and gives off blue smoke', 'The engine overheats because coolant cannot flow', 'The car pulls to one side when braking', 'The headlights dim when the engine idles'],
            correctAnswer: 0,
            explanation: 'Part 3 is the piston rings. Worn rings let oil get past into the combustion chamber, where it burns and makes blue smoke; compression and power drop too.',
          },
        ],
      },
    },
    {
      id: 'aie2-size',
      type: 'text' as const,
      content: `## Engine Layouts and Size

**Layouts.** Cylinders can sit in a single row (**inline**, such as an inline-4), in two rows forming a V (**V6**, **V8**), or lying flat and opposed (**flat** or "boxer").

**Displacement** is the total volume all the pistons sweep through, in **liters** (L) or **cubic inches**. More displacement usually means more power and more fuel used. A 4-cylinder engine whose cylinders each sweep 0.5 L is a 2.0-L engine.

**Compression ratio** compares the cylinder's volume with the piston at the **bottom** of its stroke to its volume with the piston at the **top**. If the space shrinks from 500 cc to 50 cc, the compression ratio is 500 ÷ 50 = **10 : 1**. Higher compression squeezes the mixture harder and gets more power from each drop of fuel, but needs higher-octane fuel to avoid knocking (Part 4).

**Top dead center (TDC)** is the piston's highest point; **bottom dead center (BDC)** is its lowest.`,
    },
    {
      id: 'aie2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the part to its job.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Pushes the valves open at the right time:', options: ['camshaft', 'crankshaft', 'flywheel', 'wrist pin'], correctAnswer: 0 },
          { label: 'Seals the joint between the cylinder head and the block:', options: ['head gasket', 'oil ring', 'valve spring', 'oil pan'], correctAnswer: 0 },
          { label: 'Keeps the camshaft turning in step with the crankshaft:', options: ['timing belt or chain', 'connecting rod', 'head gasket', 'piston ring'], correctAnswer: 0 },
          { label: 'Smooths the power pulses and is turned by the starter:', options: ['flywheel', 'camshaft', 'oil pump', 'valve spring'], correctAnswer: 0 },
        ],
        correctAnswers: ['camshaft', 'head gasket', 'timing belt or chain', 'flywheel'],
        hint1: 'Cam lobes push the valves.',
        hint2: 'A gasket is a seal.',
        hint3: 'The flywheel is the heavy wheel on the back of the crankshaft.',
        explanation: 'The camshaft opens the valves; the head gasket seals head to block; the timing belt or chain links crank and cam; the flywheel smooths pulses and is turned by the starter.',
      },
    },
    {
      id: 'aie2-input',
      type: 'input-boxes' as const,
      content: `**Engine numbers.** ✍️ Numbers only.

**1)** A 6-cylinder engine has cylinders that each sweep 0.5 L. What is its displacement, in liters?

**2)** With the piston at the bottom, a cylinder holds 450 cc; at the top, 50 cc. What is the compression ratio? (Give the first number of the ratio, as in "__ : 1".)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '9'],
        hint1: 'Multiply by the number of cylinders.',
        hint2: 'Volume at the bottom ÷ volume at the top.',
        hint3: '450 ÷ 50.',
        explanation: '(1) 6 × 0.5 = 3.0 L. (2) 450 ÷ 50 = 9, a 9 : 1 compression ratio.',
      },
    },
    {
      id: 'aie2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Burning gas pushes the **piston**; the **connecting rod** passes the push to the **crankshaft**, which turns it into **rotation**
- **Combustion happens in the combustion chamber**, between the piston top and the cylinder head
- **Piston rings** seal compression and control oil; worn rings → **oil burning, blue smoke, low compression**
- The **camshaft** opens the valves; the **timing belt/chain** keeps it in step with the crankshaft
- **Head gasket** seals head to block; **flywheel** smooths power and is turned by the starter
- Displacement = total swept volume; compression ratio = bottom volume ÷ top volume

> **Up Next:** Part 3 — the four-stroke cycle: intake, compression, power, exhaust.`,
    },
  ],
}
