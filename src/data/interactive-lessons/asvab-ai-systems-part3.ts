const ais3FlowFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="4" y="20" width="56" height="36" rx="5"/><rect x="80" y="20" width="56" height="36" rx="5"/><rect x="156" y="20" width="56" height="36" rx="5"/><rect x="4" y="150" width="56" height="36" rx="5"/><rect x="80" y="150" width="56" height="36" rx="5"/><rect x="156" y="150" width="56" height="36" rx="5"/><rect x="240" y="78" width="76" height="52" rx="6"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="2"><line x1="60" y1="38" x2="76" y2="38"/><line x1="136" y1="38" x2="152" y2="38"/><polyline points="212,38 262,38 262,74" fill="none"/></g><g class="fig-accent-2" fill="currentColor"><polygon points="80,38 72,33 72,43"/><polygon points="156,38 148,33 148,43"/><polygon points="262,78 257,70 267,70"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="60" y1="168" x2="76" y2="168"/><line x1="136" y1="168" x2="152" y2="168"/><polyline points="212,168 290,168 290,134" fill="none"/></g><g class="fig-accent" fill="currentColor"><polygon points="80,168 72,163 72,173"/><polygon points="156,168 148,163 148,173"/><polygon points="290,130 285,138 295,138"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="32" y="36">fuel</text><text x="32" y="48">tank</text><text x="108" y="36">fuel pump</text><text x="108" y="48">(in tank)</text><text x="184" y="36">fuel filter</text><text x="184" y="48">+ rail</text><text x="32" y="166">air</text><text x="32" y="178">filter</text><text x="108" y="166">airflow</text><text x="108" y="178">sensor</text><text x="184" y="166">throttle</text><text x="184" y="178">body</text><text x="278" y="98">intake port</text><text x="278" y="110">and cylinder</text><text x="278" y="122">(injector sprays)</text><text x="160" y="104" font-size="11">engine computer sets</text><text x="160" y="117" font-size="11">the fuel for the air</text></g></svg>',
  alt: 'A diagram of the fuel and air systems. Top row, fuel: fuel tank, then fuel pump (in the tank), then fuel filter and fuel rail, then to the intake port and cylinder where the injector sprays fuel. Bottom row, air: air filter, then airflow sensor, then throttle body, then to the same intake port and cylinder. A note in the middle says the engine computer sets the amount of fuel for the amount of air.',
  caption: 'Figure 3. Fuel (top) and air (bottom) meet at the intake port and cylinder.',
  size: 'md' as const,
}

export const asvabAiSystemsPart3Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais3-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 3 of 7 — Fuel and Air Systems**

### The Fuel Side

| Part | What it does | When it fails |
|:---|:---|:---|
| **Fuel tank** | stores the fuel | |
| **Fuel pump** | usually an **electric pump inside the tank**; pushes fuel forward under pressure | engine cranks but won't start, or sputters and dies under load |
| **Fuel filter** | traps dirt and rust before they reach the injectors | clogged: loss of power at high speed or uphill, hard starting |
| **Fuel rail and pressure regulator** | a pipe feeding all the injectors, held at the right pressure | |
| **Fuel injectors** | electrically opened valves that **spray a fine mist** of fuel into the intake port (or straight into the cylinder) | clogged or leaking injector: misfire, rough idle, fuel smell |

### The Air Side

| Part | What it does | When it fails |
|:---|:---|:---|
| **Air filter** | cleans the incoming air | **clogged: less power and slower acceleration** (the engine is starved of air); on older carbureted engines, worse mileage too |
| **Mass airflow (MAF) sensor** | measures how much air is coming in | wrong readings: rough running, poor mileage |
| **Throttle body** | holds the **throttle plate**, a butterfly valve that opens as you press the accelerator, letting in more air | sticking: high or erratic idle |
| **Intake manifold** | branches that deliver air to each cylinder | vacuum leak: high idle, lean running |

### The Brain

The **engine computer** (ECU or PCM) reads its **sensors** and decides how long to hold each injector open:

- **Oxygen (O2) sensor**, in the exhaust: tells whether the burned mixture was **rich** (extra fuel) or **lean** (extra air)
- **Mass airflow sensor:** how much air is entering
- **Throttle position sensor:** how far the pedal is pressed
- **Coolant temperature sensor:** a cold engine gets a richer mixture`,
      figure: ais3FlowFigure,
    },
    {
      id: 'ais3-ratio',
      type: 'text' as const,
      content: `## The Air-Fuel Ratio

Gasoline burns most completely at about **14.7 parts air to 1 part fuel**, **by weight**. That is the **stoichiometric** (chemically correct) ratio.

| Mixture | Meaning | Signs |
|:---|:---|:---|
| **Rich** | **too much fuel** for the air (for example 12 : 1) | **black smoke**, fuel smell, poor mileage, fouled spark plugs |
| **Lean** | **too much air** for the fuel (for example 17 : 1) | hesitation, misfire, running hot, risk of knock |

> **Key Fact:** Rich = **extra fuel**; lean = **extra air**. Engines need a richer mixture when cold, which is what a carburetor's **choke** used to provide.

## Carburetors (Older Engines)

Before fuel injection, a **carburetor** mixed air and fuel mechanically. Air rushing through a narrow throat called a **venturi** speeds up, its pressure drops, and that low pressure **draws fuel** from a float bowl into the airstream. A **choke** plate partly blocks the air on a cold engine to make the mixture **richer** for starting. Small engines (lawn mowers, generators) still use carburetors.

**Vapor lock** is fuel boiling in the lines on a very hot day, so the pump moves vapor instead of liquid and the engine stalls; it was mostly a carburetor-era problem.

## Diesel Fuel Systems

A diesel draws in air only. A high-pressure **injection pump** forces fuel through the **injectors** directly into the hot, compressed air in each cylinder, and the fuel ignites from the heat. Diesel fuel systems usually include a **water separator**, because water in diesel fuel damages the injection parts.`,
    },
    {
      id: 'ais3-mc',
      type: 'multiple-choice' as const,
      content: '**Check fuel and air.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car with a badly clogged air filter will most likely show which symptom?',
            options: ['Reduced power and slower acceleration', 'A clicking sound when the key is turned', 'A battery warning light on the dash', 'A spongy brake pedal'],
            correctAnswer: 0,
            explanation: 'A clogged air filter starves the engine of air, so it makes less power and accelerates slowly (older carbureted engines also lose mileage). The other symptoms belong to the starting, charging and brake systems.',
          },
          {
            question: 'Which sensor in the exhaust tells the engine computer whether the mixture is running rich or lean?',
            options: ['The oxygen (O2) sensor', 'The coolant temperature sensor', 'The throttle position sensor', 'The crankshaft position sensor'],
            correctAnswer: 0,
            explanation: 'The oxygen sensor measures leftover oxygen in the exhaust: little oxygen means rich, lots means lean. The computer adjusts the injectors to match.',
          },
          {
            question: 'An engine is running "rich." What does that mean?',
            options: ['There is too much fuel for the amount of air', 'There is too much air for the amount of fuel', 'The engine is using premium fuel', 'The fuel pressure is too low'],
            correctAnswer: 0,
            explanation: 'Rich means extra fuel. Lean means extra air.',
          },
          {
            question: 'On an older carbureted engine, what is the purpose of the choke?',
            options: ['To enrich the mixture for starting a cold engine', 'To slow the engine down when braking', 'To keep dirt out of the fuel tank', 'To cool the fuel before it reaches the hot engine'],
            correctAnswer: 0,
            explanation: 'Closing the choke restricts the incoming air, making the mixture richer so a cold engine, which vaporizes fuel poorly, can start and run.',
          },
        ],
      },
    },
    {
      id: 'ais3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Fill in the fuel system.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Sprays a fine mist of fuel into the intake port:', options: ['fuel injector', 'fuel filter', 'throttle plate', 'oxygen sensor'], correctAnswer: 0 },
          { label: 'Opens to let in more air when the accelerator is pressed:', options: ['throttle plate', 'fuel injector', 'choke', 'fuel filter'], correctAnswer: 0 },
          { label: 'The chemically correct gasoline air-fuel ratio by weight is about:', options: ['14.7 : 1', '1 : 14.7', '50 : 1', '8 : 1'], correctAnswer: 0 },
          { label: 'Where the electric fuel pump is usually found:', options: ['inside the fuel tank', 'on the radiator', 'in the exhaust pipe', 'behind the dashboard'], correctAnswer: 0 },
        ],
        correctAnswers: ['fuel injector', 'throttle plate', '14.7 : 1', 'inside the fuel tank'],
        hint1: 'Injectors inject.',
        hint2: 'The throttle controls air.',
        hint3: 'Much more air than fuel, by weight.',
        explanation: 'Injectors spray fuel; the throttle plate meters air; gasoline burns best near 14.7 parts air to 1 part fuel by weight; the electric pump usually sits inside the tank.',
      },
    },
    {
      id: 'ais3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Fuel path: **tank → electric pump (in tank) → filter → rail → injectors**
- Air path: **air filter → airflow sensor → throttle body (throttle plate) → intake manifold**
- The **engine computer** uses the **O2 sensor**, MAF, throttle position and coolant temperature to set the fuel
- About **14.7 : 1** air to fuel by weight; **rich = extra fuel** (black smoke), **lean = extra air** (hesitation, heat)
- Clogged air filter → less power; clogged fuel filter → power loss under load
- Carburetor: **venturi** draws fuel; **choke** enriches for cold starts

> **Up Next:** Part 4 — the cooling system.`,
    },
  ],
}
