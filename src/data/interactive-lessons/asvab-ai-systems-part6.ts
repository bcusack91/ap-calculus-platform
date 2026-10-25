export const asvabAiSystemsPart6Data = {
  topicSlug: 'asvab-ai-systems',
  sections: [
    {
      id: 'ais6-intro',
      type: 'text' as const,
      content: `# 🔋 Electrical, Fuel, Cooling and Exhaust Systems

**Part 6 of 7 — Systems Test Strategy and Common Traps**

### Timing

CAT-ASVAB Auto Information: **10 questions in 7 minutes**, about **42 seconds** each. Paper test: Auto and Shop combined, 25 questions in 11 minutes. Systems questions are short: name the system, recall the part's job, match the symptom. Predict the answer before looking at the choices.

On the CAT you can't go back and must answer to move on; treat every question as scored, since tryouts can't be identified. If time is short, keep answering for real: a string of wrong answers at the end is penalized heavily.

### Sort the symptom into a system first

| The symptom involves... | Look in... |
|:---|:---|
| clicking, no crank, slow crank, dim lights, battery light | **starting and charging** |
| hard starting, sputtering, power loss under load, black smoke, poor mileage | **fuel and air** |
| temperature gauge high or low, steam, sweet smell, weak heater | **cooling** |
| loud exhaust, rotten-egg smell, check-engine light after fueling | **exhaust and emissions** |

Then use the **job → failure → symptom** chain to pick the part.`,
    },
    {
      id: 'ais6-traps',
      type: 'text' as const,
      content: `## The Traps

| Trap | Wrong idea | Right idea |
|:---|:---|:---|
| Battery light | "The battery is bad" | the **charging system** (alternator or belt) is not charging |
| Alternator output | "The alternator makes DC" | it makes **AC**, rectified to DC by its **diodes** |
| Starter vs alternator | swapping their jobs | starter **cranks** the engine; alternator **recharges** while it runs |
| Thermostat | mixing up the two failures | stuck **closed = overheats**; stuck **open = never warms up** |
| Radiator cap | "It just keeps dirt out" | it **pressurizes** the system to **raise the boiling point** |
| Antifreeze | "It only matters in winter" | it **also raises the boiling point** and stops corrosion |
| Rich vs lean | "Rich = extra air" | **rich = extra fuel**, lean = extra air |
| Muffler vs converter | "The muffler cleans the exhaust" | the **catalytic converter** cleans; the muffler **quiets** |
| PCV vs EGR | swapping them | **PCV** = crankcase gases; **EGR** = exhaust into intake to cut **NOx** |
| Air filter | "A dirty filter only matters for dust" | a clogged filter cuts **power** |`,
    },
    {
      id: 'ais6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The red battery-shaped light comes on while driving at night, and the headlights slowly dim. A new battery was installed last week. What should be checked?',
            options: ['The alternator and its drive belt', 'The battery\'s cold cranking amps', 'The fuel filter', 'The catalytic converter heat shield'],
            correctAnswer: 0,
            explanation: 'The battery light means the charging system isn\'t charging. With the alternator out (or its belt broken), the car drains even a brand-new battery.',
          },
          {
            question: 'A car\'s temperature gauge climbs into the red within ten minutes of every start, and the upper radiator hose stays cool. What is the most likely cause?',
            options: ['A thermostat stuck closed', 'A thermostat stuck open', 'A weak battery', 'A loose gas cap after fueling'],
            correctAnswer: 0,
            explanation: 'A closed thermostat blocks hot coolant from reaching the radiator, so the engine overheats while the upper hose, which would carry that coolant, stays cool.',
          },
          {
            question: 'Which statement about the catalytic converter and the muffler is correct?',
            options: ['The converter cleans the exhaust; the muffler quiets it', 'The muffler cleans the exhaust; the converter quiets it', 'Both of them clean the exhaust gases', 'Both of them only reduce exhaust noise'],
            correctAnswer: 0,
            explanation: 'The catalytic converter chemically converts pollutants; the muffler reduces noise.',
          },
          {
            question: 'An engine running "lean" has:',
            options: ['too much air for the amount of fuel', 'too much fuel for the amount of air', 'too little coolant in the radiator', 'too little oil in the crankcase'],
            correctAnswer: 0,
            explanation: 'Lean means extra air (or too little fuel). A rich mixture has extra fuel.',
          },
        ],
      },
    },
    {
      id: 'ais6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Which system would you check first?** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Steam from under the hood and a sweet smell:', options: ['cooling', 'charging', 'fuel', 'exhaust'], correctAnswer: 0 },
          { label: 'Rapid clicking and no crank:', options: ['starting', 'cooling', 'exhaust', 'fuel'], correctAnswer: 0 },
          { label: 'Engine sputters and loses power climbing hills:', options: ['fuel', 'cooling', 'charging', 'starting'], correctAnswer: 0 },
          { label: 'Very loud rumble from under the car:', options: ['exhaust', 'cooling', 'charging', 'fuel'], correctAnswer: 0 },
        ],
        correctAnswers: ['cooling', 'starting', 'fuel', 'exhaust'],
        hint1: 'Steam and sweet smell = coolant.',
        hint2: 'Clicking = not enough current to the starter.',
        hint3: 'Power loss under load = fuel delivery (pump or filter); a loud rumble = exhaust leak or muffler.',
        explanation: 'Coolant leaks steam and smell sweet; clicking is a starting-system symptom; power loss under load points to fuel delivery; a loud rumble points to the exhaust.',
      },
    },
    {
      id: 'ais6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **42 s** per question on the CAT; sort each symptom into **starting/charging, fuel/air, cooling or exhaust** first
- Battery light = **charging system**, not the battery; alternator makes **AC**, diodes make DC
- Thermostat: **closed → overheats**, **open → never warms up**; radiator cap raises the boiling point
- **Rich = extra fuel**, **lean = extra air**; converter **cleans**, muffler **quiets**; PCV = crankcase, EGR = NOx

> **Up Next:** Part 7 — a mixed mastery set.`,
    },
  ],
}
