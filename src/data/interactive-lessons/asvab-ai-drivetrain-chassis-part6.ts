export const asvabAiDrivetrainChassisPart6Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid6-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 6 of 7 — Drivetrain and Chassis Test Strategy and Common Traps**

### Timing

CAT-ASVAB Auto Information: **10 questions in 7 minutes**, about **42 seconds** each. On the paper test, Auto and Shop are combined into one 25-question, 11-minute subtest, which leaves only about 26 seconds a question. These are recall and diagnosis questions, so the winning habit is to **predict the answer before you read the choices**.

On the CAT you can't go back, you must answer to move on, and any question could be an unscored tryout, so treat each one as scored. If time runs short, keep answering for real rather than guessing wildly: a run of wrong answers at the end is penalized heavily.

### Symptom questions: a three-step routine

1. **Where is the symptom?** Pedal feel → brakes. Steering wheel → steering, tires, alignment, balance. Noise when turning → CV joints or wheel bearings. Clunk into gear → U-joints or mounts.
2. **When does it happen?** Only when braking? Only in turns? Only at highway speed? The condition narrows it to one part.
3. **Which part's job failed?** Match the symptom to the part whose job stopped happening.

| Clue words | Likely answer |
|:---|:---|
| "spongy," "soft" brake pedal | air in the brake lines |
| "pulls when braking" | sticking caliper or contaminated pad |
| "pulses when braking" | warped rotor |
| "clicks in sharp turns" | outer CV joint |
| "clunk shifting into drive" | U-joint |
| "hum that rises with speed" | wheel bearing |
| "keeps bouncing" | shock absorbers |
| "shakes at highway speed" | wheel balance |
| "engine revs, car doesn't speed up" | slipping clutch (or slipping automatic transmission) |`,
    },
    {
      id: 'aid6-traps',
      type: 'text' as const,
      content: `## The Traps

| Trap | Wrong idea | Right idea |
|:---|:---|:---|
| Springs vs shocks | "Shocks hold the car up" | **springs** hold it up; **shocks** stop the bouncing |
| Clutch pedal | "Pedal down = clutch engaged" | pedal down = **disengaged** |
| Gears | "High gear gives the most pulling power" | **low** gear gives the most torque |
| Overdrive | "Overdrive multiplies torque" | overdrive (below 1 : 1) **trades torque for speed** to save fuel |
| Differential | "It sends equal speed to both wheels" | it **lets the wheels turn at different speeds** |
| Transaxle vs transfer case | mixing them up | **transaxle** = FWD transmission + differential; **transfer case** = 4WD front/rear split |
| U-joint vs CV joint | swapping symptoms | U-joints on RWD driveshafts (**clunk**); CV joints on FWD axles (**clicking in turns**) |
| Spongy vs hard pedal | swapping causes | **spongy = air**; **hard = booster** |
| Alignment vs balance | "Vibration at speed means alignment" | vibration = **balance**; **pulling and uneven wear** = alignment |
| Tire wear | mixing over and under | **center = over**; **both edges = under** |
| Brake fluid | "It never needs changing" | it **absorbs water**; replace it periodically |`,
    },
    {
      id: 'aid6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which part of a car\'s suspension actually supports the vehicle\'s weight?',
            options: ['The springs', 'The shocks', 'The tie rods', 'The steering knuckles'],
            correctAnswer: 0,
            explanation: 'Springs carry the weight. Shock absorbers only damp the springs\' motion.',
          },
          {
            question: 'A car drifts steadily to the left on a straight, flat road, and its left front tire is wearing on one edge. What is the most likely fix?',
            options: ['Aligning the wheels', 'Balancing the wheels', 'Bleeding the brakes', 'Replacing the U-joints'],
            correctAnswer: 0,
            explanation: 'Pulling plus one-edge wear points to an alignment problem (camber). Balancing fixes vibration at speed, not pulling.',
          },
          {
            question: 'Which statement about overdrive is correct?',
            options: ['The output shaft turns faster than the engine', 'It gives the most torque for climbing hills', 'It is the gear used to start from a stop', 'It locks the differential for better traction'],
            correctAnswer: 0,
            explanation: 'Overdrive is a ratio below 1 : 1, so the output spins faster than the engine, lowering engine speed at highway cruising. First gear gives the most torque.',
          },
          {
            question: 'The brake pedal on a car is extremely hard to press, though the brakes do not feel spongy. Which part is the most likely cause?',
            options: ['The power brake booster', 'Air in the brake lines', 'A worn pad wear indicator', 'A warped brake rotor'],
            correctAnswer: 0,
            explanation: 'Without booster assist (often from a vacuum leak), the driver must supply all the force: a hard pedal. Air causes a soft, spongy pedal instead.',
          },
        ],
      },
    },
    {
      id: 'aid6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Where would you look?** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Clicking from the front wheels only in sharp turns:', options: ['CV joints', 'U-joints', 'brake rotors', 'shock absorbers'], correctAnswer: 0 },
          { label: 'Engine RPM rises but a manual-transmission car doesn\'t speed up:', options: ['clutch', 'differential', 'wheel bearing', 'power steering pump'], correctAnswer: 0 },
          { label: 'Tire worn in the center from too much air:', options: ['overinflation', 'underinflation', 'toe', 'worn shocks'], correctAnswer: 0 },
        ],
        correctAnswers: ['CV joints', 'clutch', 'overinflation'],
        hint1: 'Front-wheel-drive axles have CV joints.',
        hint2: 'The clutch is slipping.',
        hint3: 'An overinflated tire bulges in the middle.',
        explanation: 'Turning clicks = CV joints; revving without speed = slipping clutch; center wear = overinflation.',
      },
    },
    {
      id: 'aid6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- About **42 s** per AI question on the CAT (about 26 s on the paper AS subtest): predict the answer first
- Symptom routine: **where** is it, **when** does it happen, **which part's job** failed
- Key swaps: springs/shocks, clutch pedal down = disengaged, low gear = torque, overdrive = speed, transaxle/transfer case, U-joint/CV joint, spongy/hard pedal, alignment/balance, over/under inflation

> **Up Next:** Part 7 — a mixed mastery set.`,
    },
  ],
}
