const aid4HydraulicFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="20" y1="60" x2="30" y2="150"/><line x1="16" y1="150" x2="38" y2="150"/><line x1="24" y1="96" x2="56" y2="104"/><circle cx="72" cy="106" r="16"/><rect x="88" y="96" width="50" height="20" rx="3"/><rect x="98" y="78" width="30" height="18" rx="2"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="138,102 190,102 190,40 236,40"/><polyline points="190,102 190,180 236,180"/><polyline points="138,110 160,110 160,60 236,60"/><polyline points="160,110 160,160 236,160"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="236" y="28" width="80" height="44" rx="5"/><rect x="236" y="148" width="80" height="44" rx="5"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="24" y="50">pedal</text><text x="72" y="140">power</text><text x="72" y="151">booster</text><text x="113" y="132">master</text><text x="113" y="143">cylinder</text><text x="113" y="72">fluid</text><text x="276" y="48">front</text><text x="276" y="60">calipers</text><text x="276" y="166">rear calipers or</text><text x="276" y="178">wheel cylinders</text><text x="226" y="126">brake lines</text><text x="226" y="137">(fluid)</text></g></svg>',
  alt: 'A diagram of a hydraulic brake system. The brake pedal pushes a rod through the power booster into the master cylinder, which has a fluid reservoir on top. Brake lines filled with fluid run from the master cylinder to the front calipers and to the rear calipers or wheel cylinders.',
  caption: 'Figure 5. Pedal → booster → master cylinder → brake lines → calipers or wheel cylinders at each wheel.',
  size: 'md' as const,
}

const aid4DiscFigure = {
  svg: '<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="72" y="20" width="16" height="122"/><path d="M 44 20 L 44 8 L 116 8 L 116 20 L 116 70 L 100 70 L 100 22 L 60 22 L 60 70 L 44 70 Z"/></g><g class="fig-accent-2" fill="currentColor"><rect x="62" y="30" width="9" height="34"/><rect x="89" y="30" width="9" height="34"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><rect x="47" y="36" width="12" height="22"/></g><line x1="34" y1="47" x2="46" y2="47" class="fig-muted" stroke="currentColor" stroke-width="1"/><g fill="currentColor" font-size="10"><text x="92" y="120">rotor</text><text x="120" y="40">caliper</text><text x="104" y="84">pads</text><text x="2" y="50">piston</text></g><text x="80" y="158" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Disc brake</text></svg>',
  alt: 'A disc brake seen edge-on. A flat rotor disc spins with the wheel. A caliper straddles the top edge of the rotor and holds a brake pad on each side of it. A hydraulic piston in the caliper presses the pads against the rotor.',
  size: 'sm' as const,
}

const aid4DrumFigure = {
  svg: '<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><circle cx="80" cy="76" r="62" fill="none" stroke="currentColor" stroke-width="3"/><g class="fig-accent-2" stroke="currentColor" stroke-width="5" fill="none"><path d="M 70 26 A 50 50 0 0 0 70 126"/><path d="M 90 26 A 50 50 0 0 1 90 126"/></g><g class="fig-accent" stroke="currentColor" stroke-width="2" fill="none"><rect x="64" y="20" width="32" height="12" rx="2"/></g><polyline points="64,122 68,116 72,128 76,116 80,128 84,116 88,128 92,122" fill="none" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="10" text-anchor="middle"><text x="80" y="48">wheel cylinder</text><text x="80" y="80">shoes</text><text x="80" y="108">spring</text></g><text x="80" y="156" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">Drum brake</text></svg>',
  alt: 'A drum brake seen from the side with the drum shown as a large circle. Inside are two curved brake shoes. A wheel cylinder at the top pushes the tops of the shoes outward against the inside of the drum, and a return spring at the bottom pulls them back.',
  size: 'sm' as const,
}

export const asvabAiDrivetrainChassisPart4Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid4-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 4 of 7 — Brakes**

### How Brakes Work: Hydraulics

Brakes stop a car by **friction**: pads or shoes rub against a spinning disc or drum and turn the car's motion into **heat**. The driver's foot can't squeeze that hard on its own, so the force is carried and multiplied by **hydraulics** (liquid under pressure):

1. The driver presses the **brake pedal**, a lever that multiplies the foot's force.
2. The **power brake booster** adds more force, using **engine vacuum** (or a pump).
3. A pushrod presses pistons in the **master cylinder**, pressurizing the **brake fluid**.
4. **Brake lines and hoses** carry that pressure to every wheel. Liquid can't be compressed, so the pressure arrives instantly, and it is the **same everywhere** in the system (Pascal's principle).
5. At each wheel, the pressure pushes pistons in a **caliper** (disc brakes) or **wheel cylinder** (drum brakes), forcing the friction material against the spinning metal.

Brake fluid **absorbs water** from the air over time, which lowers its boiling point, so it is replaced periodically.`,
      figure: aid4HydraulicFigure,
    },
    {
      id: 'aid4-types',
      type: 'text' as const,
      content: `## Disc and Drum Brakes

| | **Disc brakes** | **Drum brakes** |
|:---|:---|:---|
| Spinning part | a flat **rotor** (disc) bolted to the wheel hub | a **drum** shaped like a shallow pot |
| Friction part | **brake pads**, squeezed against both faces of the rotor | curved **brake shoes**, pushed outward against the inside of the drum |
| Hydraulic part | the **caliper** and its piston(s) | the **wheel cylinder**; **return springs** pull the shoes back |
| Where used | the front of almost every car; all four wheels on many | the rear of some cars and trucks |
| Strengths | shed heat well, resist fade, easy to inspect | cheap; easy to add a parking brake |

**The front brakes do most of the work.** When a car brakes, its weight shifts forward onto the front wheels, so the front brakes are bigger and wear faster.

**Parking (emergency) brake:** a **mechanical cable** system, usually on the rear wheels, that works even if the hydraulics fail.

**Anti-lock brakes (ABS):** wheel-speed sensors detect a wheel about to **lock up and skid**; the ABS unit rapidly pulses the pressure to that wheel so it keeps turning. Keeping the wheels rolling lets the driver **keep steering** during a hard stop. A pulsing pedal during a panic stop is normal ABS action.`,
    },
    {
      id: 'aid4-gallery',
      type: 'figure' as const,
      figure: [aid4DiscFigure, aid4DrumFigure],
      content: 'Figure 6. Disc brake (pads squeeze the rotor) and drum brake (shoes press out against the drum).',
    },
    {
      id: 'aid4-symptoms',
      type: 'text' as const,
      content: `## Brake Symptoms

| Symptom | Most likely cause |
|:---|:---|
| **Spongy, soft pedal** | **air in the brake lines** (air compresses, liquid doesn't); fix by **bleeding** the brakes. Old, water-logged fluid can do it too |
| Pedal **sinks slowly to the floor** | a **fluid leak** or a failing master cylinder |
| **Hard pedal**, car hard to stop | failed **power brake booster** (vacuum leak) |
| Car **pulls to one side** when braking | a **sticking caliper**, a collapsed brake hose, or a pad soaked with grease or brake fluid on one side |
| High-pitched **squeal** | the pads' metal **wear indicator** touching the rotor: pads are nearly worn out |
| **Grinding** | pads worn down to the metal backing plate, cutting into the rotor |
| **Pulsing pedal** or shaking steering wheel during normal stops | a **warped rotor** (uneven thickness) |
| Red **brake warning light** | low fluid or the parking brake left on |

> **Key Fact:** A **spongy pedal means air in the lines**. Air is compressible, so part of the pedal stroke is wasted squeezing the bubbles.`,
    },
    {
      id: 'aid4-mc',
      type: 'multiple-choice' as const,
      content: '**Check the brakes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'After a brake line was replaced, the brake pedal feels soft and spongy. What most likely needs to be done?',
            options: ['Bleed the air out of the brake lines', 'Replace the worn parking brake cable', 'Tighten the wheel lug nuts', 'Add more fluid to the power steering'],
            correctAnswer: 0,
            explanation: 'Opening the system let air in. Air compresses, so the pedal feels spongy until the brakes are bled to push the air out.',
          },
          {
            question: 'In a disc brake, which part holds the pads and squeezes them against the rotor?',
            options: ['The caliper', 'The wheel cylinder', 'The brake drum', 'The master cylinder'],
            correctAnswer: 0,
            explanation: 'The caliper\'s hydraulic piston squeezes the pads against the rotor. Wheel cylinders and drums belong to drum brakes, and the master cylinder is at the pedal end of the system.',
          },
          {
            question: 'What is the main safety advantage of anti-lock brakes (ABS)?',
            options: ['They let the driver keep steering during a hard stop', 'They shorten the stopping distance on every surface', 'They make the pads last twice as long', 'They keep working even if all the brake fluid leaks out'],
            correctAnswer: 0,
            explanation: 'ABS keeps the wheels from locking, so they keep rolling and the driver can still steer. It does not always shorten stopping distance (on gravel or snow it can lengthen it).',
          },
          {
            question: 'A car shakes through the steering wheel and the brake pedal pulses every time the driver brakes gently from highway speed. What is the most likely cause?',
            options: ['Warped front brake rotors', 'Air in the brake lines', 'A failed brake booster', 'Low parking brake cable tension'],
            correctAnswer: 0,
            explanation: 'A warped rotor has uneven thickness, so the pads push in and out as it turns, pulsing the pedal and shaking the wheel. Air in the lines gives a spongy pedal instead.',
          },
          {
            question: 'Why are a car\'s front brakes usually larger than its rear brakes?',
            options: ['The car\'s weight shifts forward during braking', 'The front wheels are closer to the master cylinder', 'The rear wheels are driven by the engine', 'The front brakes also serve as the parking brake'],
            correctAnswer: 0,
            explanation: 'Braking throws weight onto the front wheels, so they can and must do most of the stopping (often 60 to 70 percent).',
          },
        ],
      },
    },
    {
      id: 'aid4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Symptom → cause.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'A high-pitched squeal when braking:', options: ['pad wear indicator', 'air in the brake lines', 'failed booster', 'warped rotor'], correctAnswer: 0 },
          { label: 'A loud metal-on-metal grinding:', options: ['pads worn to the metal', 'air in the lines', 'low tire pressure on one side', 'new pads seating in'], correctAnswer: 0 },
          { label: 'The car pulls to the right when braking:', options: ['a sticking caliper on one side', 'a failed brake booster', 'air trapped in all four brake lines', 'a full master cylinder'], correctAnswer: 0 },
          { label: 'The pedal is very hard to push and the car is hard to stop:', options: ['failed power brake booster', 'a worn-out pad wear indicator', 'air in the lines', 'warped rotor'], correctAnswer: 0 },
        ],
        correctAnswers: ['pad wear indicator', 'pads worn to the metal', 'a sticking caliper on one side', 'failed power brake booster'],
        hint1: 'The squeal is a built-in warning.',
        hint2: 'Grinding means nothing is left between metal and metal.',
        hint3: 'Pulling means one side is gripping harder; a hard pedal means the boost is gone.',
        explanation: 'Squeal = wear indicator; grinding = pads gone; pulling = one side braking unevenly (sticking caliper, contaminated pad); hard pedal = no booster assist.',
      },
    },
    {
      id: 'aid4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Hydraulics:** pedal → **booster** (engine vacuum) → **master cylinder** → **brake fluid in lines** → **calipers** (disc) or **wheel cylinders** (drum)
- **Disc:** rotor, caliper, pads. **Drum:** drum, shoes, wheel cylinder, return springs. Front brakes do most of the work
- **Parking brake** = mechanical cable; **ABS** prevents lockup so you can steer
- **Spongy pedal = air in the lines (bleed)**; sinking pedal = leak; hard pedal = booster; pulling = sticking caliper or contaminated pad; squeal = wear indicator; grinding = metal on metal; pulsing = warped rotor
- Brake fluid absorbs water; replace it periodically

> **Up Next:** Part 5 — steering, suspension, tires and alignment.`,
    },
  ],
}
