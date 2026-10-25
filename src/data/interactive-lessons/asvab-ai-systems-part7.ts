const ais7LoopFigure = {
  svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="20" y="60" width="100" height="80" rx="6"/><rect x="220" y="40" width="80" height="120" rx="4"/><rect x="92" y="22" width="40" height="24" rx="4"/><circle cx="120" cy="170" r="16"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="3" fill="none"><line x1="112" y1="60" x2="112" y2="46"/><line x1="132" y1="34" x2="220" y2="34"/></g><g class="fig-accent" stroke="currentColor" stroke-width="3" fill="none"><polyline points="260,160 260,186 136,186 136,178"/><polyline points="104,170 70,170 70,140"/></g><g fill="currentColor" font-size="13" font-weight="bold" text-anchor="middle"><text x="112" y="39">1</text><text x="260" y="105">2</text><text x="120" y="175">3</text><text x="70" y="105">4</text></g></svg>',
  alt: 'A cooling system loop with four numbered parts. 1 is a valve where hot coolant leaves the top of the engine. 2 is the large finned unit at the front that the hot coolant flows to through the upper hose. 3 is the pump that receives cooled coolant through the lower hose. 4 is the engine block with its water jackets.',
  caption: 'Figure 6. A cooling loop with numbered parts.',
  size: 'md' as const,
}

export const asvabAiSystemsPart7Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais7-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 7 of 7 — Mixed Mastery Set**

Ten questions covering the whole topic at real AI difficulty. Aim for about **40 seconds each**.

| Skill | Where it was taught |
|:---|:---:|
| Battery, starter, alternator | Part 2 |
| Fuel and air, air-fuel ratio | Part 3 |
| Cooling system | Part 4 |
| Exhaust and emissions | Part 5 |`,
    },
    {
      id: 'ais7-figure-mc',
      type: 'multiple-choice' as const,
      figure: ais7LoopFigure,
      content: '**Questions 1–2 use Figure 6.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which numbered part stays closed until the engine reaches operating temperature?',
            options: ['Part 1', 'Part 2', 'Part 3', 'Part 4'],
            correctAnswer: 0,
            explanation: 'Part 1 is the thermostat, between the engine outlet and the upper hose. Part 2 is the radiator, Part 3 the water pump, and Part 4 the engine.',
          },
          {
            question: 'Part 3 stops working. What is the most likely result?',
            options: ['The engine overheats as coolant stops moving', 'The battery stops charging but the engine stays cool', 'The exhaust turns black from a rich mixture', 'The heater blows hotter air than normal'],
            correctAnswer: 0,
            explanation: 'Part 3 is the water pump. Without it, coolant sits still, heat builds up in the engine, and it overheats.',
          },
        ],
      },
    },
    {
      id: 'ais7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Questions 3–6.** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many cells does a standard 12-volt lead-acid car battery have?',
            options: ['Six', 'Four', 'Twelve', 'Eight'],
            correctAnswer: 0,
            explanation: 'Each cell makes about 2 volts, so six cells give about 12 volts (12.6 V fully charged).',
          },
          {
            question: 'When the key is turned, there is one loud click from under the hood, the engine does not crank, and the headlights stay bright. What is the most likely cause?',
            options: ['A bad starter solenoid or starter motor', 'A battery that is completely dead and flat', 'An empty fuel tank', 'A clogged air filter'],
            correctAnswer: 0,
            explanation: 'Bright lights show the battery has power. A single click means the solenoid tried to engage but current isn\'t reaching or turning the starter motor. An empty tank or clogged filter would still let the engine crank.',
          },
          {
            question: 'Which part sprays fuel into the engine in a modern fuel-injected car?',
            options: ['The fuel injector', 'The carburetor', 'The fuel pump', 'The throttle plate'],
            correctAnswer: 0,
            explanation: 'Injectors are electrically controlled valves that spray atomized fuel. The pump supplies the pressure, and the throttle plate controls air.',
          },
          {
            question: 'Which pollutant is the EGR system mainly designed to reduce?',
            options: ['Nitrogen oxides (NOx)', 'Carbon dioxide gas (CO2)', 'Water vapor (H2O)', 'Oxygen (O2)'],
            correctAnswer: 0,
            explanation: 'EGR lowers combustion temperatures, and NOx forms mainly in very hot combustion.',
          },
        ],
      },
    },
    {
      id: 'ais7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Questions 7–10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A pickup truck runs fine around town but sputters and loses power on long uphill climbs and at highway speed. Which fuel-system part is a likely cause?',
            options: ['A clogged fuel filter', 'A loose gas cap', 'A stuck-open thermostat', 'A worn muffler'],
            correctAnswer: 0,
            explanation: 'A clogged filter can pass enough fuel at light load but starves the engine when it needs a lot of fuel, under heavy load or high speed.',
          },
          {
            question: 'What is the purpose of the PCV valve?',
            options: ['To send crankcase blow-by gases into the intake to burn', 'To recirculate exhaust gas to lower combustion temperature', 'To hold the cooling system under pressure', 'To regulate the alternator\'s charging voltage'],
            correctAnswer: 0,
            explanation: 'Positive crankcase ventilation draws blow-by gases out of the crankcase and into the intake, so they are burned instead of released.',
          },
          {
            question: 'A driver notices a rotten-egg smell from the exhaust. Which part is most likely involved?',
            options: ['The catalytic converter', 'The radiator', 'The starter motor', 'The air filter'],
            correctAnswer: 0,
            explanation: 'A sulfur (rotten-egg) smell usually comes from the catalytic converter when it is overloaded or failing, often because the engine is running rich.',
          },
          {
            question: 'The heater in a car blows cold air even though the engine is fully warmed up and the coolant level is fine. Which part could be the cause?',
            options: ['A clogged heater core', 'A dead battery', 'A loose gas cap', 'A worn front brake pad'],
            correctAnswer: 0,
            explanation: 'The heater core carries hot coolant behind the dash; if it is clogged, no heat reaches the cabin even though the engine is hot. (A stuck-open thermostat would also keep the engine itself from warming.)',
          },
        ],
      },
    },
    {
      id: 'ais7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Electrical, Fuel, Cooling and Exhaust Systems

- **Starting/charging:** 12-V battery (six cells) → solenoid → starter turns the flywheel; belt-driven **alternator** (AC → diodes → DC) with a **regulator** near 14 V; battery light = charging problem
- **Fuel/air:** pump in the tank → filter → injectors; air filter → throttle; computer uses the **O2 sensor**; 14.7 : 1; **rich = extra fuel**, **lean = extra air**
- **Cooling:** water pump, thermostat (closed → overheat, open → never warm), radiator, fan, pressure cap (never open hot), 50/50 coolant, heater core
- **Exhaust:** manifold → converter (CO, HC, NOx) → muffler → tailpipe; PCV, EGR (NOx), EVAP (gas cap); flashing check-engine light = severe misfire

> **Next subtest:** Shop Information.`,
    },
  ],
}
