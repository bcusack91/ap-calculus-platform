export const asvabAiEnginePart6Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie6-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 6 of 7 — Engine Test Strategy and Common Traps**

### Your Time Budget

| Version | Questions | Time | Average |
|:---|:---:|:---:|:---:|
| CAT-ASVAB, Auto Information | 10 | 7 min | about **42 s** |
| Paper test, Auto & Shop combined (AS) | 25 | 11 min | about 26 s |

AI questions are short and mostly recall: you either know what a camshaft does or you don't. Read the question, decide your answer **before** looking at the choices, then find it. If you don't know, eliminate what you can and pick the best remaining choice; don't sink a minute into one question.

CAT reminders: no going back, you must answer to move on, and any question might be an unscored tryout, so treat each one as scored. If time is short, keep answering for real; a burst of random wrong answers at the end is penalized heavily.

### Three questions to ask yourself

1. **Which system?** Is this about fuel, spark, oil, cooling or the engine's mechanical parts? Choices from the wrong system are usually wrong.
2. **What does it do?** Say the part's job in your own words.
3. **What would fail look like?** Match the symptom to the part whose job just stopped happening.`,
    },
    {
      id: 'aie6-traps',
      type: 'text' as const,
      content: `## The Traps

| Trap | Wrong idea | Right idea |
|:---|:---|:---|
| Crankshaft vs camshaft | "The camshaft turns the pistons' motion into rotation" | **crankshaft** = rotation from pistons; **camshaft** = opens the valves at half crank speed |
| Where combustion happens | "In the carburetor" or "in the crankcase" | in the **combustion chamber**, above the piston |
| Smoke colors | mixing up blue and black | **blue = oil**, **black = too much fuel**, **thick white = coolant** |
| Heat range | "A hot plug makes a hotter spark" | hot plug = **long insulator nose**, tip **stays** hotter; spark unchanged |
| Hot vs cold use | "Racing engines need hot plugs" | hot-running engines need **cold** plugs |
| Octane | "Premium has more energy" | octane = **knock resistance** |
| Valve timing | "Both valves open during the power stroke" | **both closed** for compression and power |
| Diesel | "Diesels use spark plugs" | diesels use **compression ignition** (glow plugs only help cold starts) |
| Revolutions | "One cycle = one crank turn" | four-stroke cycle = **two** crank turns |
| Ring jobs | "Rings only keep oil out" | compression rings **seal pressure**; the oil ring **scrapes oil** |

### Words that point to answers

- **"Ping," "knock" when accelerating** → detonation (octane, timing, overheating, carbon)
- **"Uses oil," "blue smoke"** → rings or valve seals
- **"Milky oil," "sweet white smoke"** → head gasket
- **"Rough idle," "shakes," "one cylinder"** → misfire (plug, wire, coil, injector, compression)
- **"Oil light"** → low oil pressure: stop the engine`,
    },
    {
      id: 'aie6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which shaft opens the engine\'s valves?',
            options: ['The camshaft', 'The crankshaft', 'The driveshaft', 'The axle shaft'],
            correctAnswer: 0,
            explanation: 'The camshaft\'s lobes push the valves open. The crankshaft turns the pistons\' motion into rotation, and the driveshaft and axles are in the drivetrain.',
          },
          {
            question: 'A truck used for heavy towing in hot weather shows signs of overheated spark plug tips. Which plug change makes sense?',
            options: ['A colder heat-range plug', 'A hotter heat-range plug', 'A plug with a wider gap', 'A plug with a longer insulator nose'],
            correctAnswer: 0,
            explanation: 'Hot-running engines need plugs that shed heat quickly: a colder plug (shorter insulator nose). A longer nose would make the plug hotter.',
          },
          {
            question: 'Which statement about higher-octane gasoline is correct?',
            options: ['It resists knocking better', 'It contains much more energy per gallon', 'It makes any engine produce more power', 'It burns oil out of worn piston rings'],
            correctAnswer: 0,
            explanation: 'Octane measures resistance to knock. It does not add significant energy and helps only engines designed to need it.',
          },
          {
            question: 'During the power stroke, the intake and exhaust valves are:',
            options: ['both closed', 'both open', 'intake open, exhaust closed', 'intake closed, exhaust open'],
            correctAnswer: 0,
            explanation: 'Both valves stay closed for compression and power so the pressure stays in the cylinder and pushes the piston.',
          },
        ],
      },
    },
    {
      id: 'aie6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which system?** 🔽 Choose the system each part belongs to.',
      exercise: {
        dropdowns: [
          { label: 'Spark plug:', options: ['ignition', 'lubrication', 'cooling', 'fuel'], correctAnswer: 0 },
          { label: 'Oil pump:', options: ['lubrication', 'ignition', 'cooling', 'exhaust'], correctAnswer: 0 },
          { label: 'Connecting rod:', options: ['engine (mechanical)', 'ignition', 'cooling', 'fuel'], correctAnswer: 0 },
          { label: 'Ignition coil:', options: ['ignition', 'charging', 'cooling', 'lubrication'], correctAnswer: 0 },
        ],
        correctAnswers: ['ignition', 'lubrication', 'engine (mechanical)', 'ignition'],
        hint1: 'Spark = ignition.',
        hint2: 'Oil = lubrication.',
        hint3: 'The rod is part of the engine\'s moving machinery.',
        explanation: 'Spark plugs and ignition coils belong to the ignition system, the oil pump to lubrication, and the connecting rod to the engine\'s mechanical parts.',
      },
    },
    {
      id: 'aie6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- CAT AI: **10 questions, 7 minutes**, about 42 s each; on paper, AS is 25 questions in 11 minutes
- Ask: **which system → what does it do → what would failure look like?**
- Watch the swaps: crankshaft/camshaft, blue/black smoke, hot/cold plugs, octane/energy, gas/diesel ignition
- Symptom words point to causes: ping → detonation; blue smoke → rings; milky oil → head gasket; rough idle → misfire

> **Up Next:** Part 7 — a mixed mastery set.`,
    },
  ],
}
