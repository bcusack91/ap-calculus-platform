const ais5PathFigure = {
  svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="4" y="60" width="54" height="44" rx="5"/><rect x="96" y="66" width="56" height="32" rx="12"/><rect x="186" y="62" width="78" height="40" rx="14"/></g><g class="fig-accent" stroke="currentColor" stroke-width="5" fill="none"><line x1="58" y1="82" x2="96" y2="82"/><line x1="152" y1="82" x2="186" y2="82"/><line x1="264" y1="82" x2="314" y2="82"/></g><g class="fig-accent-2" fill="currentColor"><rect x="72" y="62" width="8" height="16"/><rect x="164" y="62" width="8" height="16"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="31" y="80">exhaust</text><text x="31" y="92">manifold</text><text x="124" y="80">catalytic</text><text x="124" y="91">converter</text><text x="225" y="86">muffler</text><text x="300" y="104">tailpipe</text><text x="76" y="54">O2</text><text x="168" y="54">O2</text><text x="124" y="128">CO → CO2</text><text x="124" y="141">HC → CO2 + H2O</text><text x="124" y="154">NOx → N2</text><text x="225" y="126">reduces noise</text></g></svg>',
  alt: 'A diagram of the exhaust system from left to right: the exhaust manifold collects gases from the engine; an oxygen sensor sits in the pipe before the catalytic converter, and a second oxygen sensor after it; the catalytic converter changes carbon monoxide to carbon dioxide, unburned hydrocarbons to carbon dioxide and water, and nitrogen oxides to nitrogen; the muffler reduces noise; the tailpipe releases the gases.',
  caption: 'Figure 5. The exhaust path, with what the catalytic converter does.',
  size: 'md' as const,
}

export const asvabAiSystemsPart5Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais5-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 5 of 7 — Exhaust and Emissions**

### The Exhaust System

| Part | What it does | When it fails |
|:---|:---|:---|
| **Exhaust manifold** | collects the hot gases from each cylinder's exhaust port into one pipe | cracked manifold or leaking gasket: ticking or puffing noise, exhaust smell |
| **Oxygen (O2) sensors** | the one before the converter tells the computer rich or lean; the one after it checks that the converter is working | failed sensor: poor mileage, check-engine light |
| **Catalytic converter** | a honeycomb coated with precious metals (platinum, palladium, rhodium) that **chemically converts harmful gases** into less harmful ones | clogged converter: loss of power, rattling; a **rotten-egg (sulfur) smell** means it is struggling |
| **Muffler** (and resonator) | chambers and baffles that **reduce noise** | rusted through: loud exhaust |
| **Tailpipe** | carries the gases out from under the car | |

### What the catalytic converter does (Figure 5)

| Pollutant | Where it comes from | Converted into |
|:---|:---|:---|
| **Carbon monoxide (CO)** | incomplete burning | carbon dioxide (CO2) |
| **Hydrocarbons (HC)** | unburned fuel | carbon dioxide and water |
| **Nitrogen oxides (NOx)** | very hot combustion | nitrogen (N2) and oxygen |

A **three-way** converter handles all three. Raw fuel from a misfiring cylinder can overheat and destroy it.

> **Safety:** **Carbon monoxide** is colorless, odorless and deadly. An exhaust leak can let it into the cabin, and running an engine in a closed garage can kill. The muffler quiets the exhaust but does **not** clean it.`,
      figure: ais5PathFigure,
    },
    {
      id: 'ais5-emissions',
      type: 'text' as const,
      content: `## Emission Controls

| System | What it does | When it fails |
|:---|:---|:---|
| **PCV** (positive crankcase ventilation) valve | draws **blow-by gases** (combustion gases that leaked past the rings into the crankcase) back into the intake to be burned, instead of venting them to the air | clogged PCV: pressure builds, pushing out oil leaks; sludge |
| **EGR** (exhaust gas recirculation) valve | feeds a small amount of exhaust back into the intake; the inert gas **lowers combustion temperature**, which **reduces NOx** | stuck open: rough idle or stalling; stuck closed: pinging and high NOx |
| **EVAP** (evaporative emission) system | a **charcoal canister** traps gasoline vapors from the tank, and the engine later draws them in and burns them | a **loose or missing gas cap** is the most common cause of an EVAP check-engine light |
| **OBD-II** (on-board diagnostics) | the computer monitors the engine and emission systems and stores **trouble codes**, read by plugging a scanner into a port under the dashboard | |

### The check-engine light

- **Steady:** a fault has been stored; have the code read soon.
- **Flashing:** a **severe misfire** is dumping raw fuel into the exhaust, which can overheat the catalytic converter; reduce speed and get it checked right away.`,
    },
    {
      id: 'ais5-mc',
      type: 'multiple-choice' as const,
      content: '**Check exhaust and emissions.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which part of the exhaust system reduces noise but does not clean the gases?',
            options: ['The muffler', 'The catalytic converter', 'The EGR valve', 'The oxygen sensor'],
            correctAnswer: 0,
            explanation: 'The muffler uses chambers and baffles to quiet the exhaust. The catalytic converter is what cleans it.',
          },
          {
            question: 'What does the EGR valve do?',
            options: ['It feeds some exhaust back in to cool combustion and cut NOx', 'It sends crankcase blow-by gases back into the intake to burn', 'It traps gasoline vapors from the fuel tank in a canister', 'It measures the oxygen in the exhaust to adjust the mixture'],
            correctAnswer: 0,
            explanation: 'Exhaust gas recirculation adds inert exhaust to the incoming charge, cooling the burn and cutting nitrogen oxides. Blow-by is the PCV valve\'s job, vapors are EVAP\'s, and oxygen is measured by the O2 sensor.',
          },
          {
            question: 'Shortly after filling up, a driver sees the check-engine light come on. The car runs normally. What is the most common simple cause?',
            options: ['A loose or missing gas cap', 'A failed water pump', 'A worn clutch disc', 'A blown cylinder head gasket'],
            correctAnswer: 0,
            explanation: 'A gas cap left loose lets fuel vapor escape, which the EVAP system detects as a leak and reports with the check-engine light.',
          },
          {
            question: 'The catalytic converter changes carbon monoxide (CO) into:',
            options: ['carbon dioxide (CO2)', 'nitrogen (N2)', 'hydrocarbons (HC)', 'nitrogen oxides (NOx)'],
            correctAnswer: 0,
            explanation: 'Carbon monoxide picks up oxygen in the converter and becomes carbon dioxide. Nitrogen oxides are the ones converted to nitrogen.',
          },
        ],
      },
    },
    {
      id: 'ais5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the emission part to its job.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Sends crankcase blow-by gases into the intake to be burned:', options: ['PCV valve', 'EGR valve', 'charcoal canister', 'muffler'], correctAnswer: 0 },
          { label: 'Stores fuel-tank vapors:', options: ['charcoal canister', 'PCV valve', 'oxygen sensor', 'resonator'], correctAnswer: 0 },
          { label: 'A rotten-egg smell from the exhaust points to the:', options: ['catalytic converter', 'radiator pressure cap', 'PCV valve', 'heater core'], correctAnswer: 0 },
          { label: 'A flashing check-engine light means:', options: ['a severe misfire', 'the gas cap is loose', 'the oil needs changing soon', 'the battery is fully charged'], correctAnswer: 0 },
        ],
        correctAnswers: ['PCV valve', 'charcoal canister', 'catalytic converter', 'a severe misfire'],
        hint1: 'Crankcase ventilation = PCV.',
        hint2: 'Charcoal soaks up vapors.',
        hint3: 'Sulfur smell comes from the converter; flashing is the urgent version of the light.',
        explanation: 'PCV routes blow-by into the intake; the charcoal canister stores vapors (EVAP); rotten-egg smell = struggling catalytic converter; flashing check-engine = severe misfire.',
      },
    },
    {
      id: 'ais5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Path: **exhaust manifold → O2 sensor → catalytic converter → O2 sensor → muffler → tailpipe**
- **Catalytic converter:** CO → CO2, HC → CO2 + H2O, NOx → N2; rotten-egg smell = converter trouble; misfires can destroy it
- **Muffler** quiets but doesn't clean; **carbon monoxide** is odorless and deadly
- **PCV** sends crankcase blow-by into the intake to be burned; **EGR** cools combustion to cut **NOx**; **EVAP** charcoal canister stores fuel vapor (loose gas cap → light)
- Check-engine light: **steady** = stored fault; **flashing** = severe misfire

> **Up Next:** Part 6 — systems test strategy and common traps.`,
    },
  ],
}
