const aisLightPanel = (body: string, name: string, alt: string) => ({
  svg: `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">${body}<text x="80" y="102" font-size="11" fill="currentColor" text-anchor="middle">${name}</text></svg>`,
  alt,
  size: 'sm' as const,
})

const ais1Lights = [
  aisLightPanel('<g class="fig-accent-2" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M 40 50 L 100 50 L 112 40 L 124 46 L 106 66 L 46 66 Z"/><line x1="58" y1="50" x2="58" y2="42"/><line x1="50" y1="42" x2="66" y2="42"/><path d="M 124 46 Q 128 56 126 62"/></g><circle cx="126" cy="68" r="2.5" class="fig-accent-2" fill="currentColor"/>', 'oil pressure', 'Oil pressure warning light: an old-style oil can with a drip falling from its spout.'),
  aisLightPanel('<g class="fig-accent-2" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="80" y1="18" x2="80" y2="58"/><circle cx="80" cy="66" r="8"/><line x1="80" y1="28" x2="94" y2="28"/><line x1="80" y1="40" x2="94" y2="40"/><path d="M 50 80 Q 58 74 66 80 Q 74 86 82 80 Q 90 74 98 80 Q 106 86 114 80"/></g>', 'engine temperature', 'Engine temperature warning light: a thermometer standing in wavy lines that represent coolant.'),
  aisLightPanel('<g class="fig-accent-2" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="44" y="34" width="72" height="44" rx="3"/><rect x="54" y="26" width="12" height="8"/><rect x="94" y="26" width="12" height="8"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="2.5"><line x1="54" y1="52" x2="66" y2="52"/><line x1="60" y1="46" x2="60" y2="58"/><line x1="94" y1="52" x2="106" y2="52"/></g>', 'charging system', 'Charging system warning light: a battery outline with a plus sign on one terminal side and a minus sign on the other.'),
  aisLightPanel('<g class="fig-accent" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M 42 44 L 52 44 L 52 36 L 98 36 L 106 44 L 114 44 L 114 76 L 52 76 L 42 66 Z"/><line x1="66" y1="36" x2="66" y2="28"/><line x1="58" y1="28" x2="76" y2="28"/><line x1="114" y1="54" x2="122" y2="54"/></g>', 'check engine', 'Check engine light: the outline of an engine block seen from the side.'),
]

export const asvabAiSystemsPart1Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais1-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 1 of 7 — Vehicle Systems on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Vehicle systems on the ASVAB** |
| 2 | Starting and charging systems |
| 3 | Fuel and air systems |
| 4 | The cooling system |
| 5 | Exhaust and emissions |
| 6 | Systems test strategy and common traps |
| 7 | Mixed mastery set |

### What These Questions Look Like

Auto Information gives **10 questions in 7 minutes** on the CAT-ASVAB, about 42 seconds each. A big share of them ask about the systems that keep the engine running: **which system a part belongs to**, **what the part does**, and **what goes wrong when it fails**. You don't need to have worked on a car; you need a clear picture of four loops:

| System | The loop in one line |
|:---|:---|
| **Starting and charging** | the **battery** powers the **starter** to crank the engine; once running, the engine spins the **alternator**, which recharges the battery and runs the electrical loads |
| **Fuel and air** | a **pump** sends fuel from the tank to the **injectors**; air comes in through the **air filter** and **throttle**; a computer mixes them in the right ratio |
| **Cooling** | the **water pump** pushes coolant through the engine to pick up heat and through the **radiator** to get rid of it; the **thermostat** controls the flow |
| **Exhaust and emissions** | burned gases leave through the **exhaust manifold**, get cleaned in the **catalytic converter**, are quieted by the **muffler** and exit the **tailpipe** |

(The ignition system and engine oil are covered in the *Engines and Combustion* topic.)`,
    },
    {
      id: 'ais1-lights',
      type: 'figure' as const,
      figure: ais1Lights,
      content: `Figure 1. Four dashboard warning lights you should know.

| Light | Meaning | What to do |
|:---|:---|:---|
| **Oil pressure** (red oil can) | oil pressure is low | stop the engine as soon as it is safe |
| **Engine temperature** (red thermometer) | the engine is overheating | pull over and shut it off; let it cool |
| **Charging system** (battery shape) | the alternator is not charging | the car is running on battery power alone; check the belt and alternator soon |
| **Check engine** (engine outline) | the engine computer has stored a fault | have the code read; if it **flashes**, a severe misfire is happening, so drive gently and get it checked right away |`,
    },
    {
      id: 'ais1-mc',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The battery-shaped warning light comes on while you are driving. Which part is most likely not doing its job?',
            options: ['The alternator', 'The fuel pump', 'The thermostat', 'The muffler'],
            correctAnswer: 0,
            explanation: 'The battery-shaped light warns that the charging system is not charging, usually because of a failed alternator or a broken drive belt. The car is now running down its battery.',
          },
          {
            question: 'Which system does the water pump belong to?',
            options: ['The cooling system', 'The fuel system', 'The exhaust system', 'The charging system'],
            correctAnswer: 0,
            explanation: 'Despite its name, the water pump circulates coolant (antifreeze mixed with water) through the engine and radiator: the cooling system.',
          },
          {
            question: 'Which part cleans harmful gases out of the exhaust before they leave the car?',
            options: ['The catalytic converter', 'The muffler', 'The tailpipe', 'The exhaust manifold gasket'],
            correctAnswer: 0,
            explanation: 'The catalytic converter chemically converts harmful gases into less harmful ones. The muffler only reduces noise; the manifold and tailpipe only carry the gases.',
          },
        ],
      },
    },
    {
      id: 'ais1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which system?** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Fuel injector:', options: ['fuel', 'cooling', 'charging', 'exhaust'], correctAnswer: 0 },
          { label: 'Muffler:', options: ['exhaust', 'fuel', 'cooling', 'starting'], correctAnswer: 0 },
          { label: 'Thermostat:', options: ['cooling', 'charging', 'exhaust', 'fuel'], correctAnswer: 0 },
          { label: 'Starter solenoid:', options: ['starting', 'cooling', 'fuel', 'exhaust'], correctAnswer: 0 },
        ],
        correctAnswers: ['fuel', 'exhaust', 'cooling', 'starting'],
        hint1: 'Injectors spray fuel.',
        hint2: 'Mufflers quiet the exhaust.',
        hint3: 'A thermostat controls coolant flow; a solenoid helps the starter.',
        explanation: 'Injector → fuel; muffler → exhaust; thermostat → cooling; starter solenoid → starting system.',
      },
    },
    {
      id: 'ais1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Four support systems: **starting/charging**, **fuel/air**, **cooling**, **exhaust/emissions**
- **Battery + starter** crank the engine; the **alternator** recharges the battery once running
- The **water pump**, **thermostat** and **radiator** keep the engine from overheating
- The **catalytic converter** cleans the exhaust; the **muffler** quiets it
- Red oil or temperature light = **stop the engine**; battery light = **charging problem**; flashing check-engine light = **severe misfire**

> **Up Next:** Part 2 — the starting and charging systems.`,
    },
  ],
}
