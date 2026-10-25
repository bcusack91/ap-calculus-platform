const ais2CircuitFigure = {
  svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="10" y="90" width="70" height="44" rx="5"/><rect x="118" y="20" width="76" height="40" rx="5"/><rect x="118" y="90" width="76" height="44" rx="5"/><rect x="232" y="90" width="80" height="44" rx="5"/><rect x="118" y="168" width="76" height="44" rx="5"/><circle cx="272" cy="190" r="22"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><polyline points="45,90 45,40 118,40"/><line x1="156" y1="60" x2="156" y2="90"/><line x1="194" y1="112" x2="232" y2="112"/><line x1="80" y1="112" x2="118" y2="112"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="2" fill="none"><polyline points="118,190 45,190 45,134"/><path d="M 194 182 L 262 172"/><path d="M 194 200 L 262 210"/></g><g class="fig-accent" fill="currentColor"><polygon points="118,40 110,35 110,45"/><polygon points="156,90 151,82 161,82"/><polygon points="232,112 224,107 224,117"/></g><g class="fig-accent-2" fill="currentColor"><polygon points="45,134 40,142 50,142"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="45" y="109">battery</text><text x="45" y="122">12 V</text><text x="156" y="37">ignition</text><text x="156" y="50">switch</text><text x="156" y="109">starter</text><text x="156" y="122">solenoid</text><text x="272" y="109">starter motor</text><text x="272" y="122">turns flywheel</text><text x="156" y="187">alternator</text><text x="156" y="200">(+ regulator)</text><text x="272" y="194">crank</text><text x="272" y="160">drive belt</text><text x="80" y="184">recharges</text></g></svg>',
  alt: 'A diagram of the starting and charging systems. Starting: the battery, 12 volts, feeds the ignition switch; turning the switch energizes the starter solenoid, which connects the battery through a heavy cable to the starter motor, which turns the flywheel. Charging: a drive belt from the crankshaft pulley spins the alternator, which, with its voltage regulator, sends current back to recharge the battery.',
  caption: 'Figure 2. Starting (top: battery → switch → solenoid → starter) and charging (bottom: crank pulley → belt → alternator → battery).',
  size: 'md' as const,
}

export const asvabAiSystemsPart2Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais2-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 2 of 7 — Starting and Charging Systems**

### The Battery

A car battery is a **12-volt lead-acid** battery: **six cells** of about **2 volts** each (about 12.6 V when fully charged), with plates of lead in a **sulfuric acid** electrolyte. Its main job is to supply the big burst of current the **starter** needs. It also powers the electrical system when the engine is off.

- **Corrosion** (white or green crust) on the terminals blocks current; clean it off.
- A charging battery gives off **hydrogen gas**, which is explosive: no sparks or flames near a battery.
- Batteries are rated in **cold cranking amps (CCA)**: how much current they can deliver to the starter in cold weather.

**Jump-starting** (connect in this order): red clamp to the **dead battery's +**, other red clamp to the **good battery's +**, black clamp to the **good battery's −**, last black clamp to **bare metal on the dead car's engine** (a ground point away from the battery), so any spark happens away from battery gas.

### The Starting System

| Part | What it does |
|:---|:---|
| **Ignition switch** | turning the key or pressing START sends a small current to the solenoid |
| **Starter solenoid** | an electromagnetic switch: it (1) closes the heavy contacts so battery current flows to the starter motor, and (2) pushes the starter's small **drive gear** into mesh with the **flywheel's ring gear** |
| **Starter motor** | a powerful electric motor that cranks the engine through the flywheel until it starts |
| **Neutral safety switch** | lets the engine crank only in Park or Neutral (or with the clutch pedal down) |`,
      figure: ais2CircuitFigure,
    },
    {
      id: 'ais2-charging',
      type: 'text' as const,
      content: `## The Charging System

Once the engine runs, the battery needs recharging and the lights, radio and computer need power. That is the **alternator's** job.

| Part | What it does | When it fails |
|:---|:---|:---|
| **Drive belt** (serpentine belt) | a long ribbed belt from the crankshaft pulley that spins the alternator (and often the water pump and power-steering pump) | squeal; if it breaks, the alternator stops (battery light) and the engine may overheat |
| **Alternator** | spun by the belt, it produces **AC**; built-in **diodes** (a rectifier) convert it to **DC** for the car | battery light on, dimming lights, battery keeps going dead |
| **Voltage regulator** | holds the charging voltage at about **14 volts**, so the battery is charged but not overcharged | overcharging (battery boils, bulbs burn out) or undercharging |

Older vehicles used a DC **generator** instead of an alternator.

> **Key Fact:** The battery **starts** the car; the alternator **runs** the car and recharges the battery. A battery light while driving means the **charging system** (alternator or belt), not the battery itself, has a problem.

## Starting and Charging Symptoms

| Symptom | Most likely cause |
|:---|:---|
| Rapid **clicking**, engine won't crank | **weak or dead battery**, or corroded or loose battery cables |
| One loud **click**, no crank, lights stay bright | bad **starter solenoid** or starter motor |
| **Slow, labored cranking** | weak battery, bad cables, or a failing starter |
| **Grinding** when starting | worn starter drive gear or damaged flywheel ring gear teeth |
| Starter keeps whining after the engine starts | stuck solenoid |
| Battery light on while driving; lights dim | failed **alternator** or broken **drive belt** |
| Car starts fine after a jump but dies again the next day | alternator not charging, or a battery that no longer holds a charge |`,
    },
    {
      id: 'ais2-mc',
      type: 'multiple-choice' as const,
      content: '**Diagnose it.** 🎯',
      exercise: {
        questions: [
          {
            question: 'When the driver turns the key, the car makes a rapid clicking sound and the engine does not crank. The dome light dims. What is the most likely cause?',
            options: ['A weak battery or corroded battery cables', 'A broken timing belt deep inside the engine', 'A thermostat that is stuck closed', 'A clogged catalytic converter'],
            correctAnswer: 0,
            explanation: 'Rapid clicking happens when the solenoid tries to engage but the battery cannot supply enough current, so it releases and tries again. Dimming lights confirm a weak battery or a poor connection.',
          },
          {
            question: 'What are the two jobs of the starter solenoid?',
            options: ['It switches starter current and engages the gear', 'It charges the battery and regulates the system voltage', 'It turns AC into DC and powers the lights', 'It opens the thermostat and starts the fan'],
            correctAnswer: 0,
            explanation: 'The solenoid is an electromagnetic switch: it connects battery current to the starter motor and pushes the starter drive gear into the flywheel ring gear.',
          },
          {
            question: 'An alternator produces alternating current, but a car\'s electrical system uses DC. What converts the alternator\'s output to DC?',
            options: ['Diodes in the alternator (a rectifier)', 'The voltage regulator inside the alternator', 'The starter solenoid', 'The battery\'s six cells'],
            correctAnswer: 0,
            explanation: 'A set of diodes inside the alternator rectifies its AC into DC. The regulator controls how much voltage the alternator puts out.',
          },
          {
            question: 'When jump-starting a car, where should the last (black) clamp be connected?',
            options: ['To bare metal on the dead car\'s engine block', 'To the positive terminal of the dead battery', 'To the negative terminal of the good (charged) battery', 'To the positive terminal of the good battery'],
            correctAnswer: 0,
            explanation: 'The final connection can spark, so it goes on a ground point away from the battery, where hydrogen gas could collect.',
          },
        ],
      },
    },
    {
      id: 'ais2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the part to the job.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Keeps the charging voltage near 14 volts:', options: ['voltage regulator', 'starter solenoid', 'ignition switch', 'battery'], correctAnswer: 0 },
          { label: 'Cranks the engine by turning the flywheel:', options: ['starter motor', 'alternator', 'voltage regulator', 'water pump'], correctAnswer: 0 },
          { label: 'Lets the engine crank only in Park or Neutral:', options: ['neutral safety switch', 'voltage regulator', 'radiator cap', 'drive belt'], correctAnswer: 0 },
          { label: 'Spins the alternator:', options: ['the drive belt', 'starter motor', 'battery current', 'flywheel ring gear'], correctAnswer: 0 },
        ],
        correctAnswers: ['voltage regulator', 'starter motor', 'neutral safety switch', 'the drive belt'],
        hint1: 'Regulator = regulates voltage.',
        hint2: 'The starter turns the flywheel.',
        hint3: 'The alternator is belt-driven by the engine.',
        explanation: 'The regulator holds about 14 V; the starter motor cranks the engine; the neutral safety switch blocks starting in gear; the crankshaft pulley drives the alternator through the belt.',
      },
    },
    {
      id: 'ais2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Battery:** 12-V lead-acid, six cells of about 2 V; keep terminals clean; hydrogen gas = no sparks; jump-start ground goes on **engine metal**, not the dead battery's −
- **Starting:** ignition switch → **solenoid** (closes heavy circuit + engages the drive gear) → **starter motor** turns the **flywheel ring gear**
- **Charging:** belt-driven **alternator** makes AC, **diodes** rectify to DC, **regulator** holds about 14 V
- Rapid clicking = weak battery or bad cables; single click = solenoid/starter; grinding = starter gear; **battery light while driving = alternator or belt**

> **Up Next:** Part 3 — the fuel and air systems.`,
    },
  ],
}
