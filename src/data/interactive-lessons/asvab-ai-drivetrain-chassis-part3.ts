const aid3TurnFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4" fill="none"><path d="M 40 200 A 160 160 0 0 1 200 40"/><path d="M 90 200 A 110 110 0 0 1 200 90"/></g><g class="fig-accent" stroke="currentColor" stroke-width="3" fill="none"><path d="M 40 200 A 160 160 0 0 1 200 40"/></g><g class="fig-accent-2" stroke="currentColor" stroke-width="3" fill="none"><path d="M 90 200 A 110 110 0 0 1 200 90"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="78" y="90" width="54" height="30" rx="5" transform="rotate(-45 105 105)"/></g><circle cx="200" cy="200" r="4" fill="currentColor"/><g fill="currentColor" font-size="11"><text x="206" y="204">center of the turn</text><text x="206" y="44" font-size="10">outer path (longer)</text><text x="206" y="94" font-size="10">inner path (shorter)</text></g></svg>',
  alt: 'Top view of a car going around a left-hand curve. Two arcs share the same center: the outer wheel follows a large arc and the inner wheel follows a smaller arc. The outer arc is labeled longer and the inner arc shorter, so in the same time the outer wheel must travel farther and turn faster.',
  caption: 'Figure 4. In a turn, the outer wheel travels farther than the inner wheel.',
  size: 'md' as const,
}

export const asvabAiDrivetrainChassisPart3Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid3-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 3 of 7 — Driveshafts, Differentials and Axles**

### Getting Power from the Transmission to the Wheels

| Part | What it does | What fails, and the symptom |
|:---|:---|:---|
| **Driveshaft** (propeller shaft) | a long tube carrying power from the transmission to the rear differential in RWD and 4WD | bent or unbalanced shaft: vibration that rises with speed |
| **U-joint** (universal joint) | a cross-shaped joint at each end of the driveshaft that lets it **bend at an angle** as the suspension moves | worn U-joint: a **clunk** when shifting into drive or reverse, vibration, squeaking |
| **Slip yoke** | lets the driveshaft **change length** as the rear axle moves up and down | |
| **CV joint** (constant-velocity joint) | on front-wheel-drive axles; lets the axle turn smoothly while the wheel **steers and bounces** | worn outer CV joint: **clicking or popping during sharp turns**; a torn rubber **CV boot** throws grease and lets dirt in, which ruins the joint |
| **Differential** | splits power between the two drive wheels and lets them turn at **different speeds** (see below) | low gear oil or worn gears: **whine or howl** that changes with speed |
| **Axle shafts** | carry power from the differential to each drive wheel | |
| **Wheel bearings** | let each wheel spin smoothly on its hub | worn bearing: a **hum or growl** that gets louder with speed (and often changes when turning) |
| **Transfer case** (4WD) | splits power between front and rear driveshafts; usually has high and low ranges | |`,
    },
    {
      id: 'aid3-diff',
      type: 'text' as const,
      content: `## The Differential

When a car turns, its **outer wheel travels a longer path** than its inner wheel in the same amount of time (Figure 4), so the outer wheel has to **spin faster**. If both drive wheels were locked to one solid axle, one tire would have to skid in every turn.

The **differential** solves this. It does three jobs:

1. **Lets the drive wheels turn at different speeds** in a turn (its main job)
2. Provides the **final gear reduction**: a small **pinion gear** drives a large **ring gear**, typically about 3 : 1 to 4 : 1 (written as the axle ratio, such as 3.73 : 1)
3. In rear-wheel drive, **turns the power 90 degrees** from the lengthwise driveshaft to the sideways axles

A basic ("open") differential sends power to the wheel that is **easiest to turn**. On ice or mud, one wheel can spin uselessly while the other sits still. A **limited-slip** or **locking** differential limits that slipping and sends power to the wheel with grip.

> **Key Fact:** The differential's main job is to let the left and right drive wheels turn at **different speeds**, which they must do in every turn.`,
    },
    {
      id: 'aid3-figure-mc',
      type: 'multiple-choice' as const,
      figure: aid3TurnFigure,
      content: '**Use Figure 4.** 🎯',
      exercise: {
        questions: [
          {
            question: 'As the car rounds the curve, how do the speeds of its two drive wheels compare?',
            options: ['The outer wheel spins faster than the inner wheel', 'The inner wheel spins faster than the outer wheel', 'Both wheels spin at exactly the same speed', 'The inner wheel stops turning completely'],
            correctAnswer: 0,
            explanation: 'The outer wheel covers the longer arc in the same time, so it must spin faster. The differential makes this possible.',
          },
          {
            question: 'Which part allows the two drive wheels to turn at different speeds?',
            options: ['The differential', 'The U-joint', 'The torque converter', 'The slip yoke'],
            correctAnswer: 0,
            explanation: 'The differential lets the wheels share power while turning at different speeds. U-joints let the driveshaft bend; the slip yoke lets it change length.',
          },
        ],
      },
    },
    {
      id: 'aid3-mc',
      type: 'multiple-choice' as const,
      content: '**Diagnose the drivetrain.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A front-wheel-drive car makes a rapid clicking noise whenever it makes a sharp turn while accelerating. What is the most likely cause?',
            options: ['A worn outer CV joint', 'A worn rear U-joint', 'A slipping clutch disc', 'A low brake fluid level'],
            correctAnswer: 0,
            explanation: 'Clicking or popping in sharp turns is the classic worn outer CV joint symptom, often after its rubber boot tears. Front-wheel-drive cars have CV-jointed axles, not a long U-jointed driveshaft.',
          },
          {
            question: 'A rear-wheel-drive pickup makes a clunk each time the driver shifts from park into drive. Which part is the most likely cause?',
            options: ['A worn U-joint on the driveshaft', 'A worn tie rod end in the steering', 'A loose spark plug', 'A dirty air filter'],
            correctAnswer: 0,
            explanation: 'A worn U-joint has play in it; the sudden torque of engaging a gear takes up the slack with a clunk.',
          },
          {
            question: 'A humming noise from one wheel gets louder as the car speeds up and changes when the car turns. What is the most likely cause?',
            options: ['A worn wheel bearing', 'A worn clutch disc', 'An empty windshield washer tank', 'A low coolant level'],
            correctAnswer: 0,
            explanation: 'A worn wheel bearing hums or growls in step with wheel speed, and the sound changes as cornering shifts the load on it.',
          },
          {
            question: 'In a four-wheel-drive truck, which component divides power between the front and rear driveshafts?',
            options: ['The transfer case', 'The torque converter', 'The pressure plate', 'The master cylinder'],
            correctAnswer: 0,
            explanation: 'The transfer case sits behind the transmission and sends power to both the front and rear axles.',
          },
        ],
      },
    },
    {
      id: 'aid3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the part to the job.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'Lets the driveshaft bend at an angle as the axle moves:', options: ['U-joint', 'ring gear', 'transfer case', 'wheel bearing'], correctAnswer: 0 },
          { label: 'Lets the driveshaft change length:', options: ['slip yoke', 'U-joint', 'CV boot', 'pinion gear'], correctAnswer: 0 },
          { label: 'Turns power 90 degrees and provides the final reduction in a RWD axle:', options: ['ring and pinion gears', 'CV joints', 'slip yoke', 'transfer case'], correctAnswer: 0 },
          { label: 'Keeps grease in and dirt out of a CV joint:', options: ['CV boot', 'slip yoke', 'U-joint cap', 'wheel bearing'], correctAnswer: 0 },
        ],
        correctAnswers: ['U-joint', 'slip yoke', 'ring and pinion gears', 'CV boot'],
        hint1: 'Universal joints handle angles.',
        hint2: 'A sliding yoke handles length.',
        hint3: 'The pinion drives the ring gear at a right angle.',
        explanation: 'U-joints handle angle changes, the slip yoke handles length changes, the ring and pinion turn the power and reduce speed, and the CV boot seals the CV joint.',
      },
    },
    {
      id: 'aid3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Driveshaft** (RWD/4WD) with **U-joints** for angle changes and a **slip yoke** for length changes; worn U-joint = clunk into gear
- FWD axles use **CV joints**; worn outer CV = **clicking in sharp turns**; torn boot ruins the joint
- **Differential:** lets drive wheels turn at **different speeds** in turns; ring and pinion give final reduction and turn power 90° in RWD; open diffs spin the wheel with least grip, limited-slip helps
- **Wheel bearing:** hum or growl that rises with speed
- **Transfer case:** splits power front and rear in 4WD

> **Up Next:** Part 4 — brakes.`,
    },
  ],
}
