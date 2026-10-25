const aid7DiscFigure = {
  svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="152" y="22" width="16" height="140"/><path d="M 124 22 L 124 8 L 196 8 L 196 72 L 180 72 L 180 24 L 140 24 L 140 72 L 124 72 Z"/></g><g class="fig-accent-2" fill="currentColor"><rect x="142" y="32" width="9" height="34"/><rect x="169" y="32" width="9" height="34"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><rect x="127" y="38" width="12" height="22"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="200" y1="14" x2="240" y2="14"/><line x1="176" y1="66" x2="240" y2="88"/><line x1="168" y1="130" x2="240" y2="130"/><line x1="133" y1="49" x2="80" y2="49"/></g><g fill="currentColor" font-size="13" font-weight="bold"><text x="246" y="18">1</text><text x="246" y="92">2</text><text x="246" y="134">3</text><text x="66" y="53">4</text></g></svg>',
  alt: 'An edge-on view of a disc brake with four numbered callouts. 1 points to the U-shaped housing that straddles the top edge of the disc. 2 points to the friction blocks on either side of the disc. 3 points to the flat disc that spins with the wheel. 4 points to the hydraulic piston inside the housing.',
  caption: 'Figure 10. A disc brake with numbered parts.',
  size: 'md' as const,
}

export const asvabAiDrivetrainChassisPart7Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid7-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 7 of 7 — Mixed Mastery Set**

Ten questions covering the whole topic, at real AI difficulty. Aim for about **40 seconds each**.

| Skill | Where it was taught |
|:---|:---:|
| Drive layouts and power path | Part 1 |
| Clutches, gears, automatics | Part 2 |
| Driveshafts, CV and U-joints, differentials | Part 3 |
| Brakes | Part 4 |
| Steering, suspension, tires, alignment | Part 5 |`,
    },
    {
      id: 'aid7-figure-mc',
      type: 'multiple-choice' as const,
      figure: aid7DiscFigure,
      content: '**Questions 1–2 use Figure 10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which numbered part wears out and must be replaced most often in normal use?',
            options: ['Part 2', 'Part 1', 'Part 3', 'Part 4'],
            correctAnswer: 0,
            explanation: 'Part 2 is the brake pads, the friction material that wears away with every stop. Part 1 is the caliper, Part 3 the rotor, and Part 4 the caliper piston.',
          },
          {
            question: 'Part 3 has become warped (uneven in thickness). What will the driver most likely notice?',
            options: ['A pulsing brake pedal during stops', 'A spongy pedal that sinks slowly', 'Clicking noises in sharp turns', 'The engine racing when accelerating'],
            correctAnswer: 0,
            explanation: 'Part 3 is the rotor. A warped rotor pushes the pads in and out as it turns, so the pedal pulses and the steering wheel may shake.',
          },
        ],
      },
    },
    {
      id: 'aid7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Questions 3–6.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a front-wheel-drive car, which component combines the transmission and the differential?',
            options: ['The transaxle', 'The transfer case', 'The driveshaft', 'The pressure plate'],
            correctAnswer: 0,
            explanation: 'Front-wheel-drive cars use a transaxle, one housing containing both the transmission and the differential.',
          },
          {
            question: 'A 15-tooth gear drives a 45-tooth gear. If the 15-tooth gear turns at 1,800 RPM, how fast does the 45-tooth gear turn?',
            options: ['600 RPM', '5,400 RPM', '1,800 RPM', '900 RPM'],
            correctAnswer: 0,
            explanation: 'The driven gear has 3 times as many teeth, so it turns one third as fast: 1,800 ÷ 3 = 600 RPM (with about 3 times the torque).',
          },
          {
            question: 'What is the job of the torque converter in a car with an automatic transmission?',
            options: ['It couples the engine to the transmission through fluid', 'It splits power between the front and rear axles', 'It lets the drive wheels turn at different speeds', 'It turns the steering wheel\'s motion into wheel movement'],
            correctAnswer: 0,
            explanation: 'The torque converter is a fluid coupling (that also multiplies torque at low speed). Splitting front and rear is the transfer case; different wheel speeds is the differential.',
          },
          {
            question: 'A tire is worn noticeably more on both outer edges than in the center. What is the most likely cause?',
            options: ['Running the tire underinflated', 'Running the tire overinflated', 'Incorrect toe setting', 'Worn shock absorbers'],
            correctAnswer: 0,
            explanation: 'An underinflated tire sags so its shoulders carry the load, wearing both edges. Overinflation wears the center, toe causes feathering, and worn shocks cause cupping.',
          },
        ],
      },
    },
    {
      id: 'aid7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Questions 7–10.** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a rear-wheel-drive vehicle, what allows the driveshaft to change its angle as the rear axle moves up and down?',
            options: ['The universal joints', 'The ring gear', 'The torque converter', 'The tie rods'],
            correctAnswer: 0,
            explanation: 'U-joints at each end of the driveshaft let it flex through changing angles.',
          },
          {
            question: 'A pickup truck\'s rear wheel spins on an icy patch while the other rear wheel does not turn at all. Which part sends power to the wheel that is easiest to turn?',
            options: ['An open differential', 'A limited-slip differential', 'A transfer case in low range', 'An overdrive gear'],
            correctAnswer: 0,
            explanation: 'An open differential sends power to the wheel with the least resistance, so the wheel on ice spins. A limited-slip differential is designed to prevent exactly that.',
          },
          {
            question: 'Which brake part is operated by a mechanical cable rather than hydraulic pressure on most vehicles?',
            options: ['The parking brake', 'The front calipers', 'The master cylinder', 'The ABS pump'],
            correctAnswer: 0,
            explanation: 'The parking (emergency) brake uses a cable, so it can hold the car even if the hydraulic system fails.',
          },
          {
            question: 'What does caster describe in a wheel alignment?',
            options: ['The forward or backward tilt of the steering axis, seen from the side', 'The inward or outward tilt of the top of the wheel, seen from the front', 'Whether the fronts of the wheels point toward or away from each other', 'How evenly the weight is spread around the wheel and tire'],
            correctAnswer: 0,
            explanation: 'Caster is the steering axis tilt viewed from the side; it affects straight-line stability. Tilt from the front is camber, pointing in or out is toe, and even weight is balance.',
          },
        ],
      },
    },
    {
      id: 'aid7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Drivetrain, Brakes, Steering and Suspension

- Power path: clutch/torque converter → transmission → driveshaft (U-joints) → differential → axles; FWD uses a **transaxle** and **CV joints**; 4WD adds a **transfer case**
- **Low gear = torque**, overdrive = speed; slipping clutch = revs without speed
- **Differential** lets drive wheels turn at different speeds; open diffs spin the wheel with least grip
- **Brakes:** hydraulic (master cylinder → calipers/wheel cylinders); spongy = air, hard = booster, pulse = warped rotor, squeal = wear indicator, pull = sticking caliper
- **Springs hold, shocks damp**; tire wear and alignment (camber, caster, toe); highway shake = balance

> **Next topic:** Electrical, Fuel, Cooling and Exhaust Systems.`,
    },
  ],
}
