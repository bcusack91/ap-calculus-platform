const aid2ClutchFigure = {
  svg: '<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"><line x1="8" y1="100" x2="312" y2="100"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><rect x="40" y="30" width="22" height="140" rx="3"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="100" y="40" width="10" height="120" rx="2"/><line x1="96" y1="44" x2="96" y2="156"/><line x1="114" y1="44" x2="114" y2="156"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><rect x="150" y="38" width="20" height="124" rx="3"/><path d="M 172 50 Q 196 70 186 100 Q 196 130 172 150"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="226" y="84" width="22" height="32" rx="3"/></g><g stroke="currentColor" stroke-width="3"><line x1="248" y1="100" x2="312" y2="100"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="51" y="188">flywheel</text><text x="51" y="201">(on engine)</text><text x="166" y="188">pressure plate</text><text x="166" y="201">(springs)</text><text x="237" y="140">release</text><text x="237" y="153">bearing</text><text x="285" y="90">to trans-</text><text x="285" y="122">mission</text></g><text x="4" y="20" font-size="11" fill="currentColor">engine side</text><text x="210" y="20" font-size="11" fill="currentColor">transmission side</text><text x="110" y="22" font-size="11" fill="currentColor" text-anchor="middle">clutch disc</text><text x="110" y="34" font-size="11" fill="currentColor" text-anchor="middle">(friction)</text></svg>',
  alt: 'An exploded side view of a manual clutch along one centerline. From the engine side on the left: the flywheel, bolted to the engine; the clutch disc, faced with friction material; the pressure plate with its springs; and the release (throwout) bearing. A shaft continues to the transmission on the right.',
  caption: 'Figure 2. The parts of a manual clutch, pulled apart along the centerline.',
  size: 'md' as const,
}

const aid2GearFigure = {
  svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="90" cy="85" r="34"/><circle cx="210" cy="85" r="68"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2"><line x1="90" y1="85" x2="90" y2="51"/><line x1="210" y1="85" x2="210" y2="17"/></g><g fill="currentColor"><circle cx="90" cy="85" r="4"/><circle cx="210" cy="85" r="4"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="90" y="140">driving gear</text><text x="90" y="153">12 teeth (engine side)</text><text x="210" y="168">driven gear: 36 teeth (to the wheels)</text></g></svg>',
  alt: 'A small driving gear with 12 teeth, on the engine side, meshes with a large driven gear with 36 teeth, which turns toward the wheels. The driven gear is three times the size of the driving gear.',
  caption: 'Figure 3. A 12-tooth gear driving a 36-tooth gear: a 3 : 1 reduction.',
  size: 'md' as const,
}

export const asvabAiDrivetrainChassisPart2Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid2-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 2 of 7 — Clutches and Transmissions**

### Why Cars Need Gears

An engine makes useful power only within a range of speeds, and it cannot start from zero RPM under load. A **transmission** uses gears to match engine speed to wheel speed:

- **Low gear** (first gear): the engine turns many times for each turn of the output. You get **the most torque** (twisting force) but **low speed**: good for starting from a stop, climbing and towing.
- **High gear:** fewer engine turns per output turn: **less torque, more speed**.
- **Direct drive** is a **1 : 1** ratio: the output turns at engine speed.
- **Overdrive** is a ratio **below 1 : 1** (such as 0.7 : 1): the output turns **faster** than the engine, which saves fuel at highway speed.
- **Reverse** adds an extra **idler gear** so the output turns the other way.

**Reading a gear ratio.** In Figure 3, a 12-tooth gear drives a 36-tooth gear. The driven gear has 3 times as many teeth, so the small gear must turn **3 times** for each turn of the big one: a **3 : 1** ratio. Speed is divided by 3 and torque is multiplied by about 3.`,
      figure: aid2GearFigure,
    },
    {
      id: 'aid2-clutch',
      type: 'text' as const,
      content: `## The Manual Clutch

In a car with a **manual transmission** (stick shift), the **clutch** connects the engine to the transmission and lets the driver **disconnect** them to start, stop and shift gears.

| Part | What it does |
|:---|:---|
| **Flywheel** | bolted to the crankshaft; spins with the engine |
| **Clutch disc** | a plate faced with friction material, splined to the transmission input shaft |
| **Pressure plate** | strong springs clamp the disc against the flywheel so they spin together |
| **Release (throwout) bearing** | when the driver presses the pedal, it pushes on the pressure plate's springs to release the clamp |

- **Pedal up:** the disc is clamped, so the clutch is **engaged** and power flows.
- **Pedal down:** the clamp is released, so the clutch is **disengaged** and the engine is disconnected from the transmission.

### What goes wrong

| Symptom | Likely cause |
|:---|:---|
| Engine RPM rises when you accelerate but the car does not speed up to match; burning smell | **slipping clutch**: worn clutch disc (or oil on the disc, or weak pressure-plate springs) |
| Gears grind when shifting even with the pedal fully down | clutch not fully **disengaging** (linkage or hydraulic problem) |
| Squeal or whir only when the pedal is pressed | worn **release bearing** |
| Shudder when pulling away | **clutch chatter**: glazed or contaminated disc |`,
      figure: aid2ClutchFigure,
    },
    {
      id: 'aid2-auto',
      type: 'text' as const,
      content: `## Automatic Transmissions

An **automatic transmission** shifts by itself. It has no clutch pedal; instead:

| Part | What it does |
|:---|:---|
| **Torque converter** | a **fluid coupling** between the engine and the transmission. An engine-driven impeller (pump) flings fluid at a turbine connected to the transmission, so the car can sit still in gear with the engine idling. It also **multiplies torque** at low speed. |
| **Planetary gear sets** | compact gear sets (a sun gear, planet gears and a ring gear) that give the different ratios when parts of them are held or released |
| **Clutch packs and bands** | hold or release parts of the planetary gears to select each gear |
| **Valve body** | hydraulic "brain" (with computer control in modern cars) that directs fluid to make the shifts |
| **Automatic transmission fluid (ATF)** | usually **red**; it transmits power in the torque converter, works the clutches, lubricates and cools. It is cooled by a small cooler, often inside the radiator. |

**Symptoms:** slipping, harsh or delayed shifts, or a **burnt smell** and **dark brown fluid** point to low, old or overheated ATF or internal wear.

A **continuously variable transmission (CVT)** uses a belt or chain between two cone-shaped pulleys that change size, giving a smooth, unlimited range of ratios with no separate gears.`,
    },
    {
      id: 'aid2-mc',
      type: 'multiple-choice' as const,
      content: '**Check your understanding.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A driver presses the accelerator in a manual-transmission truck. The engine speed jumps, but the truck barely speeds up, and there is a burning smell. What is the most likely problem?',
            options: ['A slipping clutch with a worn disc', 'A torque converter that has locked up', 'A differential that is low on gear oil', 'A warped brake rotor dragging the wheel'],
            correctAnswer: 0,
            explanation: 'Engine RPM climbing without matching road speed is the classic sign of a slipping clutch: the worn disc can no longer grip the flywheel. Manual transmissions have no torque converter.',
          },
          {
            question: 'In an automatic transmission, which part does the job that the clutch does in a manual?',
            options: ['The torque converter', 'The planetary gear set', 'The transfer case', 'The valve spring'],
            correctAnswer: 0,
            explanation: 'The torque converter couples the engine to the transmission through fluid, so the car can idle in gear and pull away smoothly.',
          },
          {
            question: 'Which gear gives the most torque to the wheels?',
            options: ['First gear', 'Top gear', 'Overdrive', 'Direct drive (1 : 1)'],
            correctAnswer: 0,
            explanation: 'First gear has the largest reduction ratio, so it multiplies torque the most (at the cost of speed). Overdrive gives the least torque and the most speed.',
          },
          {
            question: 'When the clutch pedal is pushed all the way down, the clutch is:',
            options: ['disengaged, so the engine is disconnected from the transmission', 'engaged, so the engine is driving the wheels', 'locked, so the car cannot roll', 'shifting the car into reverse'],
            correctAnswer: 0,
            explanation: 'Pressing the pedal moves the release bearing, which frees the disc from the pressure plate\'s clamp. Engine and transmission are disconnected so you can shift.',
          },
        ],
      },
    },
    {
      id: 'aid2-input',
      type: 'input-boxes' as const,
      content: `**Gear ratios.** ✍️ Numbers only.

**1)** A 10-tooth gear drives a 40-tooth gear. How many turns does the 10-tooth gear make for each turn of the 40-tooth gear?

**2)** An engine turns at 3,000 RPM in a gear with a 2 : 1 ratio. How fast does the transmission output shaft turn, in RPM?

**3)** In overdrive with a 0.75 : 1 ratio, the engine turns at 1,500 RPM. How fast does the output shaft turn, in RPM?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '1500', '2000'],
        hint1: '40 ÷ 10.',
        hint2: 'A 2 : 1 ratio means the engine turns twice for each output turn.',
        hint3: 'Output speed = engine speed ÷ ratio, and dividing by 0.75 is the same as multiplying by 4/3.',
        explanation: '(1) 40 ÷ 10 = 4 turns. (2) 3,000 ÷ 2 = 1,500 RPM. (3) 1,500 ÷ 0.75 = 2,000 RPM: in overdrive the output spins faster than the engine.',
      },
    },
    {
      id: 'aid2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Low gear = more torque, less speed**; high gear = less torque, more speed; **1 : 1 = direct drive**; **overdrive < 1 : 1**
- Gear ratio = driven teeth ÷ driving teeth; output speed = engine speed ÷ ratio
- **Manual clutch:** flywheel, clutch disc, pressure plate, release bearing; **pedal down = disengaged**
- **Slipping clutch:** RPM rises but the car doesn't speed up, burning smell → worn disc
- **Automatic:** **torque converter** (fluid coupling) replaces the clutch; **planetary gears**; **ATF** (red); burnt-smelling dark fluid = trouble
- **CVT:** belt and variable pulleys, no fixed gears

> **Up Next:** Part 3 — driveshafts, differentials and axles.`,
    },
  ],
}
