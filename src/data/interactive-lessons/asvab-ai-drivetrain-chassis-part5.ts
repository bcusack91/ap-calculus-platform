const aid5TireCodeFigure = {
  svg: '<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><text x="160" y="50" font-size="34" font-weight="bold" fill="currentColor" text-anchor="middle" letter-spacing="2">P215/65R15</text><g class="fig-accent" stroke="currentColor" stroke-width="1.5" fill="none"><polyline points="62,60 62,70 78,70 78,60"/><polyline points="88,60 88,70 140,70 140,60"/><polyline points="160,60 160,70 196,70 196,60"/><polyline points="204,60 204,70 222,70 222,60"/><polyline points="230,60 230,70 266,70 266,60"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1"><line x1="70" y1="70" x2="40" y2="96"/><line x1="114" y1="70" x2="104" y2="112"/><line x1="178" y1="70" x2="176" y2="96"/><line x1="213" y1="70" x2="236" y2="112"/><line x1="248" y1="70" x2="290" y2="96"/></g><g fill="currentColor" font-size="10" text-anchor="middle"><text x="40" y="108">passenger</text><text x="104" y="124">width 215 mm</text><text x="176" y="108">sidewall = 65% of width</text><text x="236" y="124">radial</text><text x="290" y="108">15-in. wheel</text></g></svg>',
  alt: 'The tire size code P215/65R15 printed large, with brackets under each part. P means passenger. 215 is the tire width in millimeters. 65 means the sidewall height is 65 percent of the width. R means radial construction. 15 is the wheel (rim) diameter in inches.',
  caption: 'Figure 7. Reading a tire size code.',
  size: 'md' as const,
}

const tread = (heights: number[], title: string) => {
  const blocks = heights.map((h, i) => `<rect x="${14 + i * 27}" y="${70 - h}" width="22" height="${h}" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>`).join('')
  return `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="8" y1="70" x2="152" y2="70" stroke="currentColor" stroke-width="2"/>${blocks}<text x="80" y="96" font-size="11" fill="currentColor" text-anchor="middle">${title}</text></svg>`
}
const feathered = '<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="8" y1="70" x2="152" y2="70" stroke="currentColor" stroke-width="2"/>'
  + [0, 1, 2, 3, 4].map((i) => `<polygon points="${14 + i * 27},70 ${14 + i * 27},40 ${36 + i * 27},52 ${36 + i * 27},70" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>`).join('')
  + '<text x="80" y="96" font-size="11" fill="currentColor" text-anchor="middle">Pattern 4</text></svg>'

const aid5WearPanels = [
  { svg: tread([26, 34, 38, 34, 26].map((h) => h), 'Pattern 1'), alt: 'Pattern 1: tread cross-section in which both outer edges are worn lower than the center.', size: 'sm' as const },
  { svg: tread([38, 32, 24, 32, 38], 'Pattern 2'), alt: 'Pattern 2: tread cross-section in which the center ribs are worn lower than both edges.', size: 'sm' as const },
  { svg: tread([38, 36, 33, 29, 22], 'Pattern 3'), alt: 'Pattern 3: tread cross-section that is worn more and more toward one edge only.', size: 'sm' as const },
  { svg: feathered, alt: 'Pattern 4: every tread rib is worn into a slanted ramp, high on one side and low on the other, like a row of saw teeth (feathering).', size: 'sm' as const },
]

const aid5CamberFigure = {
  svg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><line x1="10" y1="130" x2="150" y2="130" stroke="currentColor" stroke-width="2"/><line x1="170" y1="130" x2="310" y2="130" stroke="currentColor" stroke-width="2"/><g class="fig-accent" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="30" y="40" width="20" height="90" rx="3" transform="rotate(-8 40 130)"/><rect x="110" y="40" width="20" height="90" rx="3" transform="rotate(8 120 130)"/><rect x="190" y="40" width="20" height="90" rx="3" transform="rotate(8 200 130)"/><rect x="270" y="40" width="20" height="90" rx="3" transform="rotate(-8 280 130)"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"><line x1="40" y1="130" x2="40" y2="30"/><line x1="120" y1="130" x2="120" y2="30"/><line x1="200" y1="130" x2="200" y2="30"/><line x1="280" y1="130" x2="280" y2="30"/></g><g fill="currentColor" font-size="11" text-anchor="middle"><text x="80" y="150">positive camber:</text><text x="80" y="163">tops tilt outward</text><text x="240" y="150">negative camber:</text><text x="240" y="163">tops tilt inward</text><text x="80" y="18">front view</text><text x="240" y="18">front view</text></g></svg>',
  alt: 'Two front views of a pair of wheels. On the left, positive camber: the tops of both wheels tilt outward, away from the car. On the right, negative camber: the tops of both wheels tilt inward, toward the car. Dashed vertical lines show straight up for comparison.',
  caption: 'Figure 9. Camber is the inward or outward tilt of the wheel, seen from the front.',
  size: 'md' as const,
}

export const asvabAiDrivetrainChassisPart5Data = {
  topicSlug: 'asvab-ai-drivetrain-chassis',
  sections: [
    {
      id: 'aid5-intro',
      type: 'text' as const,
      content: `# 🛞 Drivetrain, Brakes, Steering and Suspension

**Part 5 of 7 — Steering, Suspension, Tires and Alignment**

### Steering

| Part | What it does | What fails, and the symptom |
|:---|:---|:---|
| **Rack-and-pinion steering** (most cars) | a **pinion gear** on the end of the steering shaft moves a toothed **rack** side to side | worn rack: loose, vague steering |
| **Recirculating-ball steering** (many trucks) | a gearbox with ball bearings turns a pitman arm that moves the linkage | play in the steering wheel |
| **Tie rods** | connect the rack (or linkage) to the **steering knuckles** that the wheels pivot on | worn tie rod ends: loose steering, wandering, uneven tire wear |
| **Ball joints** | flexible pivots joining the **control arms** to the steering knuckle | worn ball joint: **clunk** over bumps, wandering |
| **Power steering** | a belt-driven **hydraulic pump** (or an electric motor) adds force | **hard steering**: low power-steering fluid, slipping belt, failed pump; a **whine** when turning = low fluid |

### Suspension

The suspension keeps the tires on the road and the ride comfortable.

| Part | What it does | What fails, and the symptom |
|:---|:---|:---|
| **Springs** (coil, **leaf**, torsion bar) | **hold up the weight** of the vehicle and absorb bumps; leaf springs are common on trucks | sagging: the car sits low |
| **Shock absorbers** (dampers) | mounted between the axle (or control arm) and the frame; **control the springs' bouncing** by forcing oil through small holes, turning motion into heat | worn shocks: car **keeps bouncing** after a bump, nose dives when braking, **cupped** tires |
| **Struts** | a shock absorber built into a structural support that also holds the spring | same as shocks, plus clunks |
| **Control arms** | hinged arms that locate each wheel and let it move up and down | worn bushings: clunks |
| **Sway bar** (stabilizer, anti-roll bar) | a twisting bar linking left and right sides that **reduces body lean** in turns | broken link: clunk, extra lean |

> **Key Fact:** **Springs hold the car up; shock absorbers stop the bouncing.** A car that keeps bobbing after a bump has worn shocks.`,
    },
    {
      id: 'aid5-tires',
      type: 'text' as const,
      content: `## Tires

### The size code (Figure 7)

**P215/65R15** means: **P** = passenger car tire; **215** = section width in **millimeters**; **65** = aspect ratio, the sidewall height as a **percentage** of the width; **R** = **radial** construction; **15** = fits a **15-inch** wheel (rim diameter). A number and letter after it (such as 95H) give the load index and speed rating.

### Reading tread wear

| Wear pattern | Cause |
|:---|:---|
| Center worn more than the edges | **over**inflation (the center bulges and carries the load) |
| **Both** edges worn more than the center | **under**inflation (the tire sags onto its shoulders) |
| **One** edge worn | wrong **camber** (wheel tilted in or out) |
| **Feathered** ribs (each rib a sawtooth ramp) | wrong **toe** (wheels pointing in or out) |
| **Cupping** (scalloped dips around the tire) | worn **shock absorbers** or an out-of-balance wheel |

Tires are worn out at **2/32 inch** of tread, the usual legal minimum. **Rotating** tires (moving them to different positions) evens out wear.

## Alignment

**Alignment** sets the angles of the wheels:

| Angle | Seen from | What it is | Effect when wrong |
|:---|:---|:---|:---|
| **Camber** | the front | tilt of the top of the wheel **in or out** (Figure 9) | wear on **one edge**, pulling |
| **Caster** | the side | forward or backward tilt of the steering axis | poor straight-line stability, wheel slow to return to center |
| **Toe** | above | wheels pointing **in** (toe-in) or **out** (toe-out) like feet | **feathered** wear, the fastest tire wear of all |

**Wheel balancing** is different from alignment: small weights clipped to the rim even out the weight around the wheel. An **unbalanced wheel** causes a **vibration** or shimmy that shows up at highway speed.`,
      figure: aid5TireCodeFigure,
    },
    {
      id: 'aid5-wear-mc',
      type: 'multiple-choice' as const,
      figure: aid5WearPanels,
      content: '**Read the tread.** 🎯 Figure 8 shows four tread cross-sections (the tire is cut across its width).',
      exercise: {
        questions: [
          {
            question: 'Which pattern in Figure 8 points to a tire that has been run underinflated?',
            options: ['Pattern 1', 'Pattern 2', 'Pattern 3', 'Pattern 4'],
            correctAnswer: 0,
            explanation: 'Pattern 1 has both edges worn more than the center: an underinflated tire sags onto its shoulders. Pattern 2 (center worn) is overinflation, Pattern 3 (one edge) is camber, and Pattern 4 (feathered) is toe.',
          },
          {
            question: 'Pattern 4 shows every rib worn into a sawtooth ramp. Which adjustment is most likely needed?',
            options: ['Toe', 'Tire pressure', 'Caster', 'Brake pads'],
            correctAnswer: 0,
            explanation: 'Feathering comes from wheels that point slightly in or out, so the tire is dragged sideways as it rolls: the toe setting needs correcting.',
          },
        ],
      },
    },
    {
      id: 'aid5-mc',
      type: 'multiple-choice' as const,
      figure: aid5CamberFigure,
      content: '**Steering, suspension and alignment.** 🎯 The first question uses Figure 9.',
      exercise: {
        questions: [
          {
            question: 'The wheels on the right side of Figure 9 have their tops tilted inward. Which alignment angle describes this tilt?',
            options: ['Negative camber', 'Positive camber', 'Toe-in', 'Positive caster'],
            correctAnswer: 0,
            explanation: 'Camber is the in-or-out tilt seen from the front; tops tilted inward is negative camber. Toe is where the wheels point when seen from above, and caster is the tilt of the steering axis seen from the side.',
          },
          {
            question: 'After hitting a bump, a car keeps bouncing up and down several times. Which part is most likely worn?',
            options: ['The shock absorbers', 'The coil springs', 'The tie rod ends', 'The front wheel bearings'],
            correctAnswer: 0,
            explanation: 'Springs let the car bounce; shock absorbers are what stop the bouncing. Continued bobbing means the shocks are worn out.',
          },
          {
            question: 'Steering suddenly becomes very hard to turn, and a whine is heard when the wheel is turned. What should be checked first?',
            options: ['The power steering fluid level and belt', 'The brake fluid level', 'The tire tread depth', 'The color of the automatic transmission fluid'],
            correctAnswer: 0,
            explanation: 'Low power-steering fluid makes the pump whine and lose assist, and a slipping belt can cause the same loss. These are the first things to check.',
          },
          {
            question: 'A tire is marked P225/60R16. What does the 16 tell you?',
            options: ['It fits a 16-inch wheel', 'Its width is 16 inches', 'Its sidewall is 16% of its width', 'It is rated for 16 years of use'],
            correctAnswer: 0,
            explanation: 'The last number is the wheel (rim) diameter in inches. 225 is the width in millimeters and 60 is the sidewall height as a percentage of the width.',
          },
        ],
      },
    },
    {
      id: 'aid5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each clue to its answer.** 🔽',
      exercise: {
        dropdowns: [
          { label: 'The steering wheel shakes only at highway speed:', options: ['an unbalanced wheel', 'a worn ball joint', 'low brake fluid', 'a weak battery'], correctAnswer: 0 },
          { label: 'The car leans heavily in turns after a part broke:', options: ['sway bar or its link', 'tie rod end', 'shock absorber mount', 'wheel bearing'], correctAnswer: 0 },
          { label: 'Holds up the weight of the vehicle:', options: ['springs', 'shock absorbers', 'tie rods', 'the sway bar'], correctAnswer: 0 },
          { label: 'Connects the steering rack to the steering knuckle:', options: ['tie rod', 'ball joint', 'pitman arm', 'control arm'], correctAnswer: 0 },
        ],
        correctAnswers: ['an unbalanced wheel', 'sway bar or its link', 'springs', 'tie rod'],
        hint1: 'Speed-dependent shake = balance.',
        hint2: 'The anti-roll bar limits lean.',
        hint3: 'Springs carry weight; tie rods link the rack to the knuckles.',
        explanation: 'Highway-speed shake = wheel balance; extra lean = sway bar; springs carry the weight; tie rods connect the rack to the steering knuckles.',
      },
    },
    {
      id: 'aid5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Rack and pinion** (cars) or **recirculating ball** (trucks); **tie rods** link to the steering knuckles; **ball joints** pivot the knuckles on the control arms; hard steering + whine = low power-steering fluid
- **Springs hold the weight; shocks/struts stop the bouncing**; sway bar limits lean
- **P215/65R15:** passenger, 215 mm wide, sidewall 65% of width, radial, 15-inch wheel
- Wear: **center = over**inflated, **both edges = under**inflated, **one edge = camber**, **feathered = toe**, **cupping = shocks or balance**
- Alignment: **camber** (tilt, front view), **caster** (steering axis, side view), **toe** (pointing, top view); highway shake = **wheel balance**

> **Up Next:** Part 6 — strategy and traps for drivetrain and chassis questions.`,
    },
  ],
}
