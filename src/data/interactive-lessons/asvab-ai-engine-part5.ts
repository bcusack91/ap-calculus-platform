const aie5OilFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="110" y="160" width="100" height="40" rx="6"/><rect x="10" y="100" width="76" height="40" rx="6"/><rect x="10" y="20" width="76" height="40" rx="6"/><rect x="122" y="20" width="76" height="40" rx="6"/><rect x="234" y="20" width="78" height="60" rx="6"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><polyline points="110,180 48,180 48,146"/><line x1="48" y1="100" x2="48" y2="66"/><line x1="86" y1="40" x2="116" y2="40"/><line x1="198" y1="40" x2="228" y2="40"/><polyline points="273,80 273,180 216,180"/></g><g class="fig-accent" fill="currentColor"><polygon points="48,140 42,150 54,150"/><polygon points="48,60 42,70 54,70"/><polygon points="122,40 112,34 112,46"/><polygon points="234,40 224,34 224,46"/><polygon points="210,180 220,174 220,186"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="160" y="178">oil pan (sump)</text><text x="160" y="192">holds the oil</text><text x="48" y="117">oil pump</text><text x="48" y="131">(via pickup)</text><text x="48" y="37">oil filter</text><text x="48" y="51">cleans it</text><text x="160" y="37">oil galleries</text><text x="160" y="51">(passages)</text><text x="273" y="40">bearings,</text><text x="273" y="54">cylinder walls,</text><text x="273" y="68">camshaft</text><text x="290" y="130" text-anchor="start" font-size="10">drains</text><text x="290" y="142" text-anchor="start" font-size="10">back</text></g></svg>',
  alt: 'A loop diagram of the lubrication system. Oil sits in the oil pan, or sump. It flows to the oil pump, through a pickup, then up to the oil filter, which cleans it, then through the oil galleries, which are passages in the engine, to the bearings, cylinder walls and camshaft. From there it drains back down to the oil pan.',
  caption: 'Figure 9. How oil circulates through the engine.',
  size: 'md' as const,
}

export const asvabAiEnginePart5Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie5-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 5 of 7 — Lubrication and Engine Diagnosis**

### Why Oil Matters

Inside a running engine, metal parts slide and spin against each other thousands of times a minute. Without oil they would weld themselves together in minutes. Engine oil has **four jobs**:

1. **Lubricate:** a thin film keeps metal from touching metal and **reduces friction**
2. **Cool:** carries heat away from parts the coolant cannot reach, like the bottom of the pistons
3. **Clean:** picks up dirt and combustion byproducts and carries them to the filter
4. **Seal:** helps the piston rings seal against the cylinder walls

### The oil's path (Figure 9)

The **oil pan** (sump) at the bottom of the engine holds the oil. The **oil pump**, driven by the engine, draws oil up through a **pickup** screen, pushes it through the **oil filter**, and forces it through drilled passages (**oil galleries**) to the crankshaft and connecting-rod bearings, the camshaft, the valve train and the cylinder walls. Then it drains back into the pan.

| Part | What it does | What fails, and the symptom |
|:---|:---|:---|
| **Oil pump** | creates oil pressure | failing pump: **oil pressure warning light**, then knocking and engine damage |
| **Oil filter** | traps dirt | clogged filter: dirty oil (a bypass valve keeps oil flowing) |
| **Dipstick** | lets you check the oil level | oil below the low mark: add oil and look for leaks or burning |
| **Oil pressure light or gauge** | warns of low oil pressure | light on while driving: **pull over and shut off the engine** |

> **Key Fact:** The oil pressure warning light means **stop the engine now**. Running without oil pressure can destroy the bearings in minutes.`,
      figure: aie5OilFigure,
    },
    {
      id: 'aie5-viscosity',
      type: 'text' as const,
      content: `## Oil Grades

**Viscosity** is how thick an oil is (how easily it flows). Oil thins as it heats up. A **multigrade** oil such as **10W-30** behaves like a thin 10-weight oil when cold, so it flows quickly at startup (the **W** stands for **winter**), and like a thicker 30-weight oil at operating temperature.

- **Lower first number:** flows better in the cold
- **Higher second number:** stays thicker when hot

Use the grade the owner's manual specifies.

## Reading Engine Symptoms

Many AI questions describe a symptom and ask for the cause. The exhaust smoke color is the classic one.

| Symptom | Most likely cause |
|:---|:---|
| **Blue or blue-gray smoke** | the engine is **burning oil**: **worn piston rings** (smoke when accelerating) or worn **valve guide seals** (a puff at startup) |
| **Black smoke** | **too much fuel**: the mixture is too **rich** (stuck injector, clogged air filter, bad sensor) |
| **Thick white smoke** that keeps coming, sweet smell | **coolant burning** in the cylinders: a **blown head gasket** or cracked head |
| Thin white vapor on a cold morning that goes away | normal water condensation, nothing wrong |
| **Milky, tan oil** on the dipstick | **coolant mixing into the oil** (head gasket) |
| Oil level keeps dropping, no leaks | burning oil (rings or valve seals) |
| **Deep knock** that rises with engine speed | worn **rod or main bearings** (often from low oil) |
| Light **ticking** from the top of the engine | valve train noise, often low oil or a worn lifter |
| **Low compression** in one cylinder | worn rings, a burned or leaking valve, or a blown head gasket |

**Blow-by** is combustion gas that leaks past the piston rings into the crankcase. Worn rings mean more blow-by.`,
    },
    {
      id: 'aie5-mc',
      type: 'multiple-choice' as const,
      content: '**Diagnose it.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car leaves a cloud of blue-gray smoke whenever it accelerates, and its oil level drops between oil changes with no leaks. What is the most likely cause?',
            options: ['Worn piston rings letting oil into the cylinders', 'A clogged air filter making the mixture rich', 'A failed thermostat that is stuck in the open position', 'A spark plug gap set slightly too narrow'],
            correctAnswer: 0,
            explanation: 'Blue smoke means oil is burning. Worn rings let oil past the pistons into the combustion chamber, and the oil level falls. A rich mixture makes black smoke instead.',
          },
          {
            question: 'Thick white exhaust smoke with a sweet smell keeps pouring out even after the engine is warm. What is the most likely cause?',
            options: ['Coolant leaking in through a blown head gasket', 'Normal condensation from a cold morning start', 'Too much fuel from a fuel injector stuck open', 'Oil getting past worn valve guide seals'],
            correctAnswer: 0,
            explanation: 'Persistent, sweet-smelling white smoke is burning coolant. Condensation is thin and disappears once the engine warms; too much fuel makes black smoke; oil makes blue smoke.',
          },
          {
            question: 'What does the "W" in a 10W-30 motor oil stand for?',
            options: ['Winter', 'Weight', 'Wear', 'Water'],
            correctAnswer: 0,
            explanation: 'The W marks the winter (cold-temperature) rating: a 10W-30 flows like a thin 10-grade oil when cold.',
          },
          {
            question: 'The oil pressure warning light comes on while you are driving. What should you do?',
            options: ['Pull over safely and shut off the engine', 'Keep driving and check the oil next week', 'Drive faster to raise the oil pressure', 'Turn on the heater to cool the engine'],
            correctAnswer: 0,
            explanation: 'Low oil pressure means parts are not being lubricated, and the bearings can be destroyed within minutes. Stop the engine, then check the oil level.',
          },
        ],
      },
    },
    {
      id: 'aie5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the symptom to the cause.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Black smoke:', options: ['too much fuel (rich mixture)', 'burning oil', 'burning coolant', 'normal condensation'], correctAnswer: 0 },
          { label: 'Blue smoke:', options: ['burning oil', 'too much fuel (rich mixture)', 'burning coolant', 'normal condensation'], correctAnswer: 0 },
          { label: 'Thick, sweet-smelling white smoke that does not clear:', options: ['burning coolant', 'burning oil', 'too much fuel (rich mixture)', 'normal condensation'], correctAnswer: 0 },
          { label: 'Milky, tan-colored oil on the dipstick:', options: ['coolant mixing into the oil', 'oil that is too thin', 'fuel mixing into the oil', 'normal oil after a long trip'], correctAnswer: 0 },
        ],
        correctAnswers: ['too much fuel (rich mixture)', 'burning oil', 'burning coolant', 'coolant mixing into the oil'],
        hint1: 'Black = soot from unburned fuel.',
        hint2: 'Blue = oil.',
        hint3: 'Coolant makes white smoke, and turns oil milky when the two mix.',
        explanation: 'Black = rich mixture; blue = oil burning; persistent sweet white = coolant burning; milky oil = coolant in the oil, usually from a head gasket.',
      },
    },
    {
      id: 'aie5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Oil **lubricates, cools, cleans and seals**
- Path: **oil pan → pickup → pump → filter → galleries → bearings and moving parts → back to the pan**
- Oil pressure light on = **stop the engine**
- **10W-30:** W = winter; first number = cold flow, second = hot thickness
- Smoke: **blue = oil** (rings, valve seals); **black = rich mixture** (too much fuel); **thick white, sweet = coolant** (head gasket); milky oil = coolant in the oil
- Deep knock rising with speed = worn bearings; low compression = rings, valves or head gasket

> **Up Next:** Part 6 — how to work engine questions fast and avoid the traps.`,
    },
  ],
}
