const ais4LoopFigure = {
  svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="20" y="70" width="110" height="90" rx="6"/><rect x="230" y="40" width="70" height="150" rx="4"/><rect x="88" y="30" width="68" height="26" rx="4"/><circle cx="120" cy="190" r="16"/><rect x="30" y="196" width="68" height="26" rx="4"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="240" y1="52" x2="240" y2="178"/><line x1="252" y1="52" x2="252" y2="178"/><line x1="264" y1="52" x2="264" y2="178"/><line x1="276" y1="52" x2="276" y2="178"/><line x1="288" y1="52" x2="288" y2="178"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="3" fill="none"><polyline points="122,70 122,56"/><polyline points="156,43 230,43"/></g><g class="fig-accent" stroke="currentColor" stroke-width="3" fill="none"><polyline points="265,190 265,206 136,206 136,198"/><polyline points="104,190 75,190 75,160"/></g><g class="fig-accent-2" fill="currentColor"><polygon points="230,43 222,38 222,48"/></g><g class="fig-accent" fill="currentColor"><polygon points="75,160 70,168 80,168"/></g><circle cx="265" cy="30" r="7" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="10" text-anchor="middle"><text x="75" y="110">engine</text><text x="75" y="123">(water jackets)</text><text x="122" y="47">thermostat</text><text x="265" y="118">radiator</text><text x="265" y="20">pressure cap</text><text x="120" y="194">pump</text><text x="64" y="213">heater core</text><text x="193" y="36">hot (upper hose)</text><text x="200" y="220">cooled (lower hose)</text></g></svg>',
  alt: 'A diagram of the cooling system loop. Hot coolant leaves the engine water jackets through the thermostat at the top and travels through the upper hose to the radiator, which has a pressure cap on top and many thin tubes. Cooled coolant leaves the bottom of the radiator through the lower hose to the water pump, which pushes it back into the engine. A heater core branch sits near the pump.',
  caption: 'Figure 4. Engine → thermostat → upper hose → radiator → lower hose → water pump → engine.',
  size: 'md' as const,
}

export const asvabAiSystemsPart4Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais4-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 4 of 7 — The Cooling System**

### Why Engines Need Cooling

Burning fuel releases far more heat than the engine can turn into motion. Without a cooling system, the metal would quickly get hot enough to warp the cylinder head, blow the head gasket and seize the pistons. Most car engines are **liquid-cooled**; some motorcycles, small engines and old Volkswagen Beetles are **air-cooled**, using metal **fins** on the cylinders.

### The Coolant Loop (Figure 4)

| Part | What it does | When it fails |
|:---|:---|:---|
| **Coolant** (antifreeze + water) | usually a **50/50 mix** of antifreeze (ethylene glycol) and water; **lowers the freezing point, raises the boiling point** and fights corrosion | too much water: freezes in winter, boils in summer; a sweet-smelling green, orange or pink puddle = leak |
| **Water jackets** | passages in the block and head that coolant flows through | |
| **Water pump** | belt-driven (or electric) pump that **circulates** the coolant | leaking or failed pump: overheating, a puddle under the front of the engine |
| **Thermostat** | a heat-operated valve between the engine and the radiator: **closed when cold** so the engine warms up fast, **opens** at operating temperature | **stuck closed: overheating**; **stuck open: engine slow to warm up, weak heater, temperature gauge stays low** |
| **Radiator** | thin tubes and fins that pass the coolant's heat to the outside air | clogged or leaking radiator: overheating |
| **Radiator fan** | pulls air through the radiator when the car is slow or stopped | failed fan: overheats in traffic but is fine on the highway |
| **Pressure cap** | holds the system under pressure, which **raises the boiling point** of the coolant | weak cap: coolant boils over |
| **Hoses** | upper hose carries hot coolant to the radiator; lower hose returns it | cracked or collapsed hose: leaks, overheating |
| **Overflow (recovery) tank** | holds coolant pushed out as it expands and returns it as it cools | |
| **Heater core** | a small radiator behind the dashboard; engine heat warms the cabin | leaking core: wet passenger floor, fogged windows, sweet smell inside |

> **Safety:** **Never open the radiator cap on a hot engine.** The coolant is under pressure and above its normal boiling point; releasing the cap lets it flash into scalding steam.`,
      figure: ais4LoopFigure,
    },
    {
      id: 'ais4-overheat',
      type: 'text' as const,
      content: `## Why an Engine Overheats

Think through the loop and ask what could stop the heat from getting out:

| Cause | Clue |
|:---|:---|
| **Low coolant** from a leak | puddle, sweet smell, low reservoir |
| **Thermostat stuck closed** | the engine heats up fast and the upper radiator hose stays cool |
| **Failed water pump** or **broken drive belt** | coolant doesn't circulate; a broken belt also turns on the battery light |
| **Radiator fan not working** | overheats when idling or in traffic, fine at highway speed |
| **Clogged radiator** (inside or bugs and dirt outside) | gradually worse overheating |
| **Blown head gasket** | white sweet exhaust smoke, bubbles in the radiator, coolant loss with no leak |

**If the temperature light comes on:** pull over, shut the engine off, and let it cool before checking anything. Turning the **heater** to full hot with the fan on high can move a little extra heat out of the engine on the way to a safe stop.`,
    },
    {
      id: 'ais4-mc',
      type: 'multiple-choice' as const,
      content: '**Diagnose the cooling system.** 🎯',
      exercise: {
        questions: [
          {
            question: 'An engine takes a very long time to warm up, the temperature gauge stays low, and the heater blows only lukewarm air. What is the most likely cause?',
            options: ['A thermostat stuck open', 'A thermostat stuck closed', 'A failed radiator cap', 'A clogged fuel filter'],
            correctAnswer: 0,
            explanation: 'A thermostat stuck open sends coolant to the radiator all the time, so the engine never gets fully warm. One stuck closed would cause overheating instead.',
          },
          {
            question: 'A car overheats while sitting in traffic but its temperature returns to normal on the highway. Which part is the most likely cause?',
            options: ['The radiator fan', 'The thermostat', 'The heater core', 'The fuel pump'],
            correctAnswer: 0,
            explanation: 'At highway speed, air is forced through the radiator by the car\'s motion. When stopped, only the fan moves air, so a failed fan shows up in traffic.',
          },
          {
            question: 'Why is the cooling system kept under pressure by the radiator cap?',
            options: ['Pressure raises the boiling point of the coolant', 'Pressure makes the water pump turn faster', 'Pressure keeps air out of the fuel lines', 'Pressure lowers the freezing point of the coolant'],
            correctAnswer: 0,
            explanation: 'Raising the pressure raises the boiling point, so the coolant can run hotter without boiling. The antifreeze itself is what lowers the freezing point.',
          },
          {
            question: 'What are the main purposes of mixing antifreeze with the water in a cooling system?',
            options: ['To lower the freezing point and raise the boiling point', 'To raise the freezing point and lower the boiling point', 'To make the coolant thicker so the pump works less', 'To add fuel value so the engine runs richer'],
            correctAnswer: 0,
            explanation: 'Antifreeze keeps coolant from freezing in winter and from boiling in summer, and it contains corrosion inhibitors.',
          },
        ],
      },
    },
    {
      id: 'ais4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the part to the job.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Circulates coolant through the engine:', options: ['water pump', 'thermostat', 'radiator cap', 'heater core'], correctAnswer: 0 },
          { label: 'Stays closed until the engine is warm:', options: ['thermostat', 'water pump', 'radiator fan', 'overflow tank'], correctAnswer: 0 },
          { label: 'Passes engine heat into the passenger cabin:', options: ['heater core', 'radiator fan', 'water pump', 'pressure cap'], correctAnswer: 0 },
          { label: 'Catches coolant pushed out as it expands:', options: ['overflow tank', 'water jacket', 'thermostat', 'lower hose'], correctAnswer: 0 },
        ],
        correctAnswers: ['water pump', 'thermostat', 'heater core', 'overflow tank'],
        hint1: 'The pump pumps.',
        hint2: 'A thermostat is a temperature-controlled valve.',
        hint3: 'The heater core is a tiny radiator under the dash.',
        explanation: 'Water pump circulates; thermostat controls flow by temperature; heater core heats the cabin; overflow tank stores expansion coolant.',
      },
    },
    {
      id: 'ais4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Loop: **engine → thermostat → upper hose → radiator → lower hose → water pump → engine**
- **Coolant** (about 50/50 antifreeze and water) lowers freezing, raises boiling, fights corrosion
- **Thermostat stuck closed → overheating; stuck open → slow warm-up, weak heater**
- **Pressure cap** raises the boiling point; **never open it hot**
- Overheats only in traffic → **radiator fan**; overheating causes also include leaks, water pump, belt, clogged radiator, head gasket
- **Heater core** = cabin heat from engine coolant

> **Up Next:** Part 5 — exhaust and emissions.`,
    },
  ],
}
