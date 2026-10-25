const aid1RwdFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="20" y="28" width="22" height="40" rx="4"/><rect x="20" y="152" width="22" height="40" rx="4"/><rect x="262" y="28" width="22" height="40" rx="4"/><rect x="262" y="152" width="22" height="40" rx="4"/><line x1="31" y1="68" x2="31" y2="152"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><rect x="52" y="88" width="50" height="44" rx="4"/><rect x="104" y="96" width="44" height="28" rx="4"/></g><g class="fig-accent" stroke="currentColor" stroke-width="4"><line x1="148" y1="110" x2="246" y2="110"/><line x1="273" y1="68" x2="273" y2="96"/><line x1="273" y1="124" x2="273" y2="152"/></g><circle cx="273" cy="110" r="14" fill="none" stroke="currentColor" stroke-width="2.5"/><g fill="currentColor"><circle cx="150" cy="110" r="4"/><circle cx="244" cy="110" r="4"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="77" y="114">engine</text><text x="126" y="150">clutch +</text><text x="126" y="162">transmission</text><text x="197" y="104">driveshaft</text><text x="197" y="126">(U-joints at ends)</text><text x="266" y="88" text-anchor="end">axle</text><text x="273" y="212">rear wheels drive</text><text x="300" y="114" text-anchor="start">diff.</text><text x="31" y="20">front</text><text x="273" y="20">rear</text></g></svg>',
  alt: 'Top view of a rear-wheel-drive layout. The engine sits at the front, with the clutch and transmission right behind it. A long driveshaft, with U-joints at each end, runs back to the differential between the rear wheels. Axles run from the differential out to each rear wheel, which drive the car. The front wheels are connected only by a steering link.',
  caption: 'Figure 1. Rear-wheel drive: engine → clutch and transmission → driveshaft → differential → axles → rear wheels.',
  size: 'md' as const,
}

export const asvabAiDrivetrainChassisPart1Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid1-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 1 of 7 — The Drivetrain and Chassis on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **The drivetrain and chassis on the ASVAB** |
| 2 | Clutches and transmissions |
| 3 | Driveshafts, differentials and axles |
| 4 | Brakes |
| 5 | Steering, suspension, tires and alignment |
| 6 | Drivetrain and chassis test strategy and common traps |
| 7 | Mixed mastery set |

### Where This Fits on the Test

Auto Information is **10 questions in 7 minutes** on the CAT-ASVAB (about 42 seconds each). Besides engines, AI asks about everything **between the engine and the road**: how power gets to the wheels, how the car stops, how it steers, and how it rides over bumps. As with engines, learn each part as **what it does → what fails → what symptom you notice**.

### Drivetrain vs Chassis

- The **drivetrain** (or powertrain, when the engine is included) carries the engine's spinning power to the wheels: **clutch or torque converter → transmission → driveshaft → differential → axles → wheels**.
- The **chassis** is the frame and everything that holds the car up and controls it: **brakes, steering, suspension, wheels and tires**.

Many cars have a separate steel **frame** with the body bolted on (common in trucks and military vehicles). Most cars today use a **unibody**, where the body and frame are one welded structure.`,
    },
    {
      id: 'aid1-layouts',
      type: 'text' as const,
      content: `## Drive Layouts

| Layout | Which wheels are driven | How the power gets there |
|:---|:---|:---|
| **Rear-wheel drive (RWD)** | rear | front engine → transmission → long **driveshaft** → rear **differential** → rear axles |
| **Front-wheel drive (FWD)** | front | the engine sits sideways; a **transaxle** (transmission and differential in one housing) drives two short front axles with **CV joints** |
| **Four-wheel drive (4WD)** | all four, usually selectable | a **transfer case** behind the transmission splits power to front and rear driveshafts; common on trucks and off-road vehicles |
| **All-wheel drive (AWD)** | all four, full time | a center differential or coupling shares power automatically between front and rear |

> **Key Fact:** A **transaxle** = transmission + differential combined, used in front-wheel-drive cars. A **transfer case** splits power between the front and rear axles in four-wheel drive.`,
      figure: aid1RwdFigure,
    },
    {
      id: 'aid1-mc',
      type: 'multiple-choice' as const,
      figure: aid1RwdFigure,
      content: '**Warm-up: trace the power.** 🎯 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'In the rear-wheel-drive car shown, which part carries power from the transmission back to the differential?',
            options: ['The driveshaft', 'The front axle', 'The steering link', 'The transfer case'],
            correctAnswer: 0,
            explanation: 'In RWD the long driveshaft (propeller shaft) runs from the transmission to the rear differential. A transfer case appears only in four-wheel drive.',
          },
          {
            question: 'A front-wheel-drive car combines its transmission and differential in one unit. What is that unit called?',
            options: ['A transaxle', 'A transfer case', 'A torque converter', 'A U-joint'],
            correctAnswer: 0,
            explanation: 'A transaxle houses both the transmission and the differential and drives the front axles directly.',
          },
          {
            question: 'Which of these is part of the chassis rather than the drivetrain?',
            options: ['The brake system', 'The transmission', 'The differential', 'The driveshaft'],
            correctAnswer: 0,
            explanation: 'Brakes, steering, suspension and tires make up the chassis. The transmission, differential and driveshaft carry power, so they are drivetrain parts.',
          },
        ],
      },
    },
    {
      id: 'aid1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Put the power path in order (rear-wheel drive).** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Right after the engine comes the:', options: ['clutch or torque converter', 'differential', 'driveshaft', 'axle'], correctAnswer: 0 },
          { label: 'The clutch or torque converter passes power to the:', options: ['transmission', 'differential', 'wheel bearing', 'brake caliper'], correctAnswer: 0 },
          { label: 'The driveshaft delivers power to the:', options: ['differential', 'clutch', 'flywheel', 'master cylinder'], correctAnswer: 0 },
          { label: 'Finally the axles turn the:', options: ['wheels', 'transmission', 'camshaft', 'steering rack'], correctAnswer: 0 },
        ],
        correctAnswers: ['clutch or torque converter', 'transmission', 'differential', 'wheels'],
        hint1: 'The engine must be connected to (and disconnected from) the rest first.',
        hint2: 'Gears come next.',
        hint3: 'The differential splits power between the two drive wheels.',
        explanation: 'Engine → clutch (manual) or torque converter (automatic) → transmission → driveshaft → differential → axles → wheels.',
      },
    },
    {
      id: 'aid1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Drivetrain:** clutch/torque converter → transmission → driveshaft → differential → axles → wheels
- **Chassis:** frame, brakes, steering, suspension, wheels and tires
- **RWD** uses a long driveshaft; **FWD** uses a **transaxle** and CV-jointed axles; **4WD** adds a **transfer case**; **AWD** shares power full time
- Learn each part as what it does → what fails → the symptom

> **Up Next:** Part 2 — clutches and transmissions: why cars need gears.`,
    },
  ],
}
