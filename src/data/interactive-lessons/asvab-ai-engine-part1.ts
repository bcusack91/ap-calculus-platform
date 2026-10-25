const aie1MapFigure = {
  svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="8" y="90" width="66" height="44" rx="6"/><rect x="100" y="84" width="76" height="56" rx="6"/><rect x="200" y="90" width="72" height="44" rx="6"/><rect x="100" y="10" width="76" height="40" rx="6"/><rect x="100" y="176" width="76" height="40" rx="6"/><rect x="200" y="10" width="112" height="40" rx="6"/><rect x="200" y="176" width="112" height="40" rx="6"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="74" y1="112" x2="96" y2="112"/><line x1="176" y1="112" x2="196" y2="112"/><line x1="272" y1="112" x2="292" y2="112"/></g><g class="fig-accent" fill="currentColor"><polygon points="100,112 92,107 92,117"/><polygon points="200,112 192,107 192,117"/><polygon points="296,112 288,107 288,117"/></g><circle cx="306" cy="112" r="9" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="306" cy="112" r="2.5" fill="currentColor"/><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="138" y1="50" x2="138" y2="84"/><line x1="138" y1="140" x2="138" y2="176"/><line x1="176" y1="30" x2="200" y2="30"/><line x1="176" y1="196" x2="200" y2="196"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="41" y="109">fuel + air</text><text x="41" y="123">system</text><text x="138" y="108" font-weight="bold">ENGINE</text><text x="138" y="124">burns fuel</text><text x="236" y="109">drivetrain</text><text x="236" y="123">to the wheels</text><text x="138" y="27">electrical</text><text x="138" y="41">(battery, spark)</text><text x="138" y="193">lubrication</text><text x="138" y="207">(oil)</text><text x="256" y="27">cooling</text><text x="256" y="41">(radiator, coolant)</text><text x="256" y="193">exhaust</text><text x="256" y="207">(muffler, converter)</text></g></svg>',
  alt: 'A block diagram of a car. In the center is a box labeled ENGINE, burns fuel. An arrow comes into it from a box on the left labeled fuel plus air system, and an arrow leaves it to a box labeled drivetrain, to the wheels, which points on to a wheel. Dashed lines connect the engine to four support systems: electrical (battery, spark) above, lubrication (oil) below, cooling (radiator, coolant) at upper right, and exhaust (muffler, converter) at lower right.',
  caption: 'Figure 1. The main systems of a car and how they connect to the engine.',
  size: 'md' as const,
}

export const asvabAiEnginePart1Data = {
  topicSlug: 'asvab-ai-engine',
  sections: [
    {
      id: 'aie1-intro',
      type: 'text' as const,
      content: `# 🚗 Engines and Combustion

**Part 1 of 7 — Auto Information on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Auto Information on the ASVAB** |
| 2 | Engine parts: block, pistons, crankshaft and valves |
| 3 | The four-stroke cycle |
| 4 | Ignition and combustion |
| 5 | Lubrication and engine diagnosis |
| 6 | Engine test strategy and common traps |
| 7 | Mixed mastery set |

### What Auto Information (AI) Is

Auto Information is the **7th subtest** on the CAT-ASVAB, right after Electronics Information. You get **10 scored questions in 7 minutes**, about **42 seconds each**, with 4 answer choices per question. It is followed by Shop Information (10 questions in 6 minutes).

**You do not need to have worked on a car.** AI asks about a fairly small list of parts: what each one **does**, what happens when it **fails**, and what **symptom** a driver would notice. This course teaches every part from zero, in exactly that order.

> **Key Fact:** AI is **not** part of your AFQT. It is combined with Shop Information into the **AS (Auto & Shop)** score, which feeds mechanical and maintenance line scores: for example the Air Force Mechanical score (M = AR + MC + AS + 2·VE), the Marine Corps Mechanical Maintenance score (MM = AR + MC + EI + AS), and the Navy Engineering (ENG = MK + AS) and Mechanical (MEC = AR + MC + AS) scores. In the Army, AS is the biggest single factor in the Mechanical Maintenance score and weighs heavily in General Maintenance and Operators and Food. Ask your recruiter which line scores your target job uses.

On the paper version of the test, Auto and Shop are a **single combined subtest** (AS: 25 questions in 11 minutes). The high-school CEP computer version has 11 AI questions.`,
    },
    {
      id: 'aie1-map',
      type: 'text' as const,
      content: `## The Car from Zero

A car turns the chemical energy in fuel into motion. Every system you will study exists to make that happen or to keep it running safely.

| System | Its job in one sentence | Topic in this course |
|:---|:---|:---|
| **Engine** | burns a mix of fuel and air inside sealed cylinders to spin a crankshaft | this topic |
| **Ignition** | makes the spark that lights the fuel at exactly the right moment | this topic (Part 4) |
| **Lubrication** | pumps oil between moving metal parts so they don't grind themselves apart | this topic (Part 5) |
| **Fuel and air** | delivers the right amount of fuel and clean air to the engine | Electrical, Fuel, Cooling and Exhaust Systems |
| **Electrical** | the battery starts the engine; the alternator recharges it | Electrical, Fuel, Cooling and Exhaust Systems |
| **Cooling** | carries away the heat of combustion so the engine does not overheat | Electrical, Fuel, Cooling and Exhaust Systems |
| **Exhaust** | carries burned gases away, quiets them and cleans them | Electrical, Fuel, Cooling and Exhaust Systems |
| **Drivetrain** | carries the engine's spinning power to the wheels | Drivetrain, Brakes, Steering and Suspension |
| **Chassis** | brakes, steering, suspension and tires | Drivetrain, Brakes, Steering and Suspension |

### The question pattern

Most AI questions fit one of three molds:

1. **What does it do?** "The purpose of the camshaft is to ..."
2. **Which system is it part of?** "The thermostat is part of the ... system."
3. **What causes this symptom?** "Blue smoke from the tailpipe usually means ..."`,
    },
    {
      id: 'aie1-figure-mc',
      type: 'multiple-choice' as const,
      figure: aie1MapFigure,
      content: '**Warm-up: use the map.** 🎯 Don\'t worry if these are new; Parts 2–5 explain every one.',
      exercise: {
        questions: [
          {
            question: 'According to the diagram, which system carries the engine\'s power to the wheels?',
            options: ['The drivetrain', 'The cooling system', 'The exhaust system', 'The lubrication system'],
            correctAnswer: 0,
            explanation: 'The drivetrain (transmission, driveshaft, differential, axles) delivers the engine\'s spinning power to the wheels. The other three support the engine itself.',
          },
          {
            question: 'A radiator is part of which system?',
            options: ['The cooling system', 'The fuel system', 'The ignition system', 'The braking system'],
            correctAnswer: 0,
            explanation: 'The radiator releases engine heat carried by the coolant into the outside air, so it belongs to the cooling system.',
          },
          {
            question: 'What is the basic job of a car engine?',
            options: ['To burn fuel and air to produce turning power', 'To store electricity for the lights and radio', 'To slow the car by pressing pads on the wheels', 'To clean the exhaust gases before they leave'],
            correctAnswer: 0,
            explanation: 'An engine burns a fuel-air mixture inside its cylinders and turns that energy into rotation of the crankshaft. Storing electricity is the battery\'s job, slowing is the brakes\', and cleaning exhaust is the catalytic converter\'s.',
          },
        ],
      },
    },
    {
      id: 'aie1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- AI is the 7th CAT-ASVAB subtest: **10 questions in 7 minutes**, about 42 seconds each
- AI + Shop form the **AS** score, used in mechanical and maintenance line scores; it is not in the AFQT
- Learn every part as **what it does → what fails → what symptom you notice**
- The engine burns fuel and air to spin the crankshaft; every other system feeds it, cools it, cleans up after it, or carries its power to the wheels

> **Up Next:** Part 2 — the parts inside an engine and what each one does.`,
    },
  ],
}
