const aie4PathFigure = {
  svg: '<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="4" y="50" width="56" height="44" rx="5"/><rect x="82" y="50" width="56" height="44" rx="5"/><rect x="160" y="50" width="60" height="44" rx="5"/><rect x="244" y="50" width="72" height="44" rx="5"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="60" y1="72" x2="76" y2="72"/><line x1="138" y1="72" x2="154" y2="72"/><line x1="220" y1="72" x2="238" y2="72"/></g><g class="fig-accent" fill="currentColor"><polygon points="81,72 73,67 73,77"/><polygon points="159,72 151,67 151,77"/><polygon points="243,72 235,67 235,77"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="32" y="69">battery</text><text x="32" y="83">12 V</text><text x="110" y="69">ignition</text><text x="110" y="83">coil</text><text x="190" y="65">distributor</text><text x="190" y="78">or computer</text><text x="190" y="90">control</text><text x="280" y="69">spark</text><text x="280" y="83">plugs</text></g></svg>',
  alt: 'A flow diagram of the ignition system: battery, 12 volts, arrow to ignition coil, arrow to distributor or computer control, arrow to spark plugs.',
  caption: 'Figure 6. The ignition system, from battery to spark.',
  size: 'md' as const,
}

const aie4PlugFigure = {
  svg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="102" y="8" width="16" height="16"/><rect x="98" y="24" width="24" height="86"/><line x1="98" y1="44" x2="122" y2="44"/><line x1="98" y1="60" x2="122" y2="60"/><line x1="98" y1="76" x2="122" y2="76"/><rect x="86" y="110" width="48" height="30"/><polyline points="94,140 126,146 94,152 126,158 94,164 126,170 94,176 126,182 94,188"/><line x1="94" y1="140" x2="94" y2="190"/><line x1="126" y1="140" x2="126" y2="190"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><polygon points="104,190 116,190 113,204 107,204"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="3" fill="none"><line x1="110" y1="204" x2="110" y2="214"/><polyline points="96,190 96,224 114,224"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="122" y1="16" x2="180" y2="16"/><line x1="122" y1="50" x2="180" y2="50"/><line x1="134" y1="125" x2="180" y2="125"/><line x1="128" y1="165" x2="180" y2="165"/><line x1="116" y1="198" x2="180" y2="196"/><line x1="112" y1="210" x2="180" y2="212"/><line x1="114" y1="224" x2="180" y2="230"/><line x1="70" y1="219" x2="104" y2="219"/></g><g fill="currentColor" font-size="11"><text x="184" y="20">terminal</text><text x="184" y="54">ceramic insulator</text><text x="184" y="129">metal shell (hex)</text><text x="184" y="169">threads (into cylinder head)</text><text x="184" y="200">insulator nose</text><text x="184" y="216">center electrode</text><text x="184" y="234">ground electrode</text><text x="66" y="223" text-anchor="end">gap</text></g></svg>',
  alt: 'A labeled spark plug. From top to bottom: the terminal where the plug wire connects; a ribbed ceramic insulator; a hex-shaped metal shell; threads that screw into the cylinder head; the insulator nose inside the end of the shell; the center electrode sticking out of the nose; and an L-shaped ground electrode attached to the shell, bending under the center electrode. The small space between the two electrodes is labeled gap.',
  caption: 'Figure 7. The parts of a spark plug.',
  size: 'md' as const,
}

const aie4HeatFigure = {
  svg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="20" x2="40" y2="140"/><line x1="120" y1="20" x2="120" y2="140"/><line x1="200" y1="20" x2="200" y2="140"/><line x1="280" y1="20" x2="280" y2="140"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><path d="M 62 20 L 62 30 L 52 30 L 52 32 L 68 128 L 92 128 L 108 32 L 108 30 L 98 30 L 98 20"/><path d="M 222 20 L 222 30 L 212 30 L 212 32 L 236 82 L 264 82 L 288 32 L 288 30 L 278 30 L 278 20"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="3"><line x1="80" y1="128" x2="80" y2="140"/><line x1="250" y1="82" x2="250" y2="140"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3" fill="none"><path d="M 74 120 L 60 40 L 44 36"/><path d="M 244 76 L 226 40 L 204 36"/></g><g fill="currentColor" font-size="12" text-anchor="middle"><text x="80" y="160" font-weight="bold">Hot plug</text><text x="80" y="176">long insulator nose</text><text x="250" y="160" font-weight="bold">Cold plug</text><text x="250" y="176">short insulator nose</text></g></svg>',
  alt: 'Side-by-side cross-sections of the firing ends of two spark plugs inside their metal shells. The hot plug, on the left, has a long, tapering insulator nose that reaches far down before meeting the shell; a dashed line shows heat traveling a long path from the tip up to the shell. The cold plug, on the right, has a short insulator nose; its dashed heat path to the shell is short.',
  caption: 'Figure 8. Heat range: the longer the insulator nose, the longer the path heat must travel to escape, and the hotter the tip runs.',
  size: 'md' as const,
}

export const asvabAiEnginePart4Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie4-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 4 of 7 — Ignition and Combustion**

### The Ignition System's Job

A gasoline engine needs a strong spark in each cylinder at exactly the right moment near the end of the compression stroke. The car's battery supplies only about **12 volts**, but jumping the spark plug gap under compression takes **tens of thousands of volts**.

| Part | What it does |
|:---|:---|
| **Battery** and **ignition switch** | supply 12 V to the system when the key or button is on |
| **Ignition coil** | a **transformer** that steps the 12 V up to tens of thousands of volts |
| **Distributor** (older cars) | a spinning rotor under a cap sends the high voltage to each spark plug wire in turn; older ones used **points** and a **condenser** to switch the coil |
| **Electronic ignition / coil-on-plug** (modern cars) | the engine computer fires a separate coil sitting on each plug, timed by a crankshaft position sensor; no distributor |
| **Spark plug wires** | carry the high voltage to the plugs (not needed with coil-on-plug) |
| **Spark plug** | screws into the cylinder head; the spark jumps its **gap** and lights the mixture |

The order in which the cylinders fire, such as 1-3-4-2 on many 4-cylinder engines, is the **firing order**.`,
      figure: aie4PathFigure,
    },
    {
      id: 'aie4-plug',
      type: 'text' as const,
      content: `## The Spark Plug

The high voltage arrives at the **terminal**, travels down the **center electrode** inside the **ceramic insulator**, and jumps the **gap** to the **ground electrode**, which is attached to the metal shell. The gap is set with a feeler or wire gauge:

- **Gap too wide:** the spark may not jump, causing a **misfire**.
- **Gap too narrow:** a weak, small spark that may not light the mixture well.

### Heat range

A spark plug's tip has to run hot enough to burn off carbon deposits, but not so hot that it becomes a glowing hot spot. **Heat range** describes how fast the plug passes heat from its tip to the cylinder head, and it is set mainly by the **length of the insulator nose** (Figure 8, coming up):

| | **Hot plug** | **Cold plug** |
|:---|:---|:---|
| Insulator nose | **long** | **short** |
| Heat path to the head | long, so the tip **stays hotter** | short, so the tip **sheds heat fast** |
| Use | engines that run cool: lots of low-speed or short-trip driving, prone to **fouling** (carbon or oil deposits) | engines that run hot: high-compression, turbocharged, high-performance, towing, sustained high speed |
| Wrong choice causes | too hot: **preignition** and engine damage | too cold: **fouling** and misfires |`,
      figure: aie4PlugFigure,
    },
    {
      id: 'aie4-heat-mc',
      type: 'multiple-choice' as const,
      figure: aie4HeatFigure,
      content: '**Heat range.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What makes the plug on the left in the figure a "hot" plug?',
            options: ['Its long insulator nose gives heat a longer path to escape', 'It produces a much hotter and stronger spark across the gap', 'It is made of a metal that burns at a higher temperature', 'It is designed only for high-performance racing engines'],
            correctAnswer: 0,
            explanation: 'Heat range depends on how quickly heat flows from the tip to the cylinder head. A long insulator nose makes a long path, so the tip runs hotter. It does not change the spark itself, and cold plugs (not hot ones) suit high-performance engines.',
          },
          {
            question: 'An engine used mostly for short, slow trips keeps getting carbon-fouled spark plugs. What change usually helps?',
            options: ['A slightly hotter heat-range plug', 'A slightly colder heat-range plug', 'A wider spark plug gap', 'A lower-octane fuel'],
            correctAnswer: 0,
            explanation: 'A hotter plug keeps its tip hot enough to burn deposits off. A colder plug would foul even faster; widening the gap or using lower octane does not address the deposits.',
          },
        ],
      },
    },
    {
      id: 'aie4-combustion',
      type: 'text' as const,
      content: `## Timing and Abnormal Combustion

### Ignition timing

The mixture takes a moment to burn, so the spark fires slightly **before** the piston reaches top dead center on the compression stroke. That lets the pressure peak just as the piston starts down. Firing earlier is called **advancing** the timing; later is **retarding** it. Engines advance the timing as RPM rises, because there is less time for the burn.

### When combustion goes wrong

| Problem | What happens | Common causes | What you notice |
|:---|:---|:---|:---|
| **Detonation** (knock, ping, spark knock) | after the spark, the **last part of the mixture explodes on its own** instead of burning smoothly | fuel octane **too low**, timing **too far advanced**, **overheating**, carbon buildup, lean mixture | a metallic **pinging or knocking**, especially when accelerating or climbing hills; can crack pistons |
| **Preignition** | the mixture ignites **before the spark**, set off by a **hot spot** (glowing carbon, an overheated plug) | carbon deposits, too-hot plug, overheating | power loss, knocking; can quickly damage pistons |
| **Misfire** | a cylinder **fails to fire** | worn or fouled plug, bad plug wire or coil, fuel problem, low compression | rough idle, shaking, loss of power, a flashing check-engine light |

### Octane

The **octane rating** on the pump measures a fuel's **resistance to knock**, not how much energy it holds. Higher-compression and turbocharged engines need higher octane; putting premium in an engine designed for regular adds nothing.`,
    },
    {
      id: 'aie4-mc',
      type: 'multiple-choice' as const,
      content: '**Check ignition and combustion.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which part of the ignition system steps the battery\'s 12 volts up to the high voltage needed to fire the spark plugs?',
            options: ['The ignition coil', 'The alternator', 'The distributor cap', 'The starter solenoid'],
            correctAnswer: 0,
            explanation: 'The ignition coil is a transformer that raises 12 V to tens of thousands of volts. The distributor only routes that voltage; the alternator charges the battery; the starter solenoid works the starter.',
          },
          {
            question: 'A car pings and knocks when climbing hills after the owner switched to a cheaper, lower-octane gasoline than the engine requires. What is happening?',
            options: ['Detonation, because the fuel resists knock too little', 'A misfire, because the plugs are not getting voltage', 'Preignition, because the fuel has too much energy', 'Normal combustion, because hills always cause pinging'],
            correctAnswer: 0,
            explanation: 'Low-octane fuel resists knock poorly, so the end of the mixture explodes on its own: detonation. Octane is about knock resistance, not energy content.',
          },
          {
            question: 'The spark normally fires slightly before the piston reaches top dead center. Why?',
            options: ['The burn takes time, so pressure peaks just after TDC', 'The valves must be open when the spark fires', 'The spark must happen during the intake stroke', 'Firing early keeps carbon from building up and fouling the spark plug'],
            correctAnswer: 0,
            explanation: 'Burning takes a short time. Starting it a little early means peak pressure arrives as the piston begins its power stroke. Both valves are closed when the spark fires.',
          },
          {
            question: 'A spark plug\'s gap has been set much too wide. What is the most likely result?',
            options: ['Misfires, because the spark may fail to jump the gap', 'Detonation, because the wider spark is much too strong', 'Overheating, because the plug grows hotter', 'Higher fuel octane, because more air enters'],
            correctAnswer: 0,
            explanation: 'A gap that is too wide needs more voltage than the coil can reliably supply, so the spark sometimes fails and the cylinder misfires.',
          },
        ],
      },
    },
    {
      id: 'aie4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Diagnose it.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Mixture ignites before the spark, from a glowing carbon deposit:', options: ['preignition', 'detonation', 'misfire', 'normal combustion'], correctAnswer: 0 },
          { label: 'One cylinder never fires; the engine shakes at idle:', options: ['misfire', 'preignition', 'detonation', 'advanced timing'], correctAnswer: 0 },
          { label: 'A high-performance turbocharged engine needs plugs that are:', options: ['colder', 'hotter', 'the same heat range as any engine', 'gapped wider than specified'], correctAnswer: 0 },
        ],
        correctAnswers: ['preignition', 'misfire', 'colder'],
        hint1: 'Pre = before the spark.',
        hint2: 'Mis-fire = fails to fire.',
        hint3: 'Engines that run hot need plugs that shed heat fast.',
        explanation: 'Ignition before the spark is preignition; a cylinder that does not fire is a misfire; hot-running engines need colder plugs.',
      },
    },
    {
      id: 'aie4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Ignition path: **battery → ignition coil** (steps 12 V up to tens of thousands of volts) **→ distributor or computer → spark plugs**, in the **firing order**
- Spark fires slightly **before** top dead center on the compression stroke (timing advance)
- Plug gap too wide → misfire. **Hot plug** = long insulator nose, resists fouling; **cold plug** = short nose, for hot-running engines
- **Detonation/knock/ping:** low octane, over-advanced timing, overheating, carbon. **Preignition:** hot spot fires the mixture before the spark. **Misfire:** a cylinder doesn't fire
- **Octane** = knock resistance, not extra energy
- **Diesels** have no spark plugs (compression ignition)

> **Up Next:** Part 5 — oil, lubrication, and reading engine symptoms.`,
    },
  ],
}
