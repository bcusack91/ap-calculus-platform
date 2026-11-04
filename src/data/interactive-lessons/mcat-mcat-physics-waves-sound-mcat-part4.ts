import type { LessonData } from './registry'

export const wavesSoundMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-waves-sound-mcat',
  sections: [
    {
      id: 'ws4-intro',
      type: 'text' as const,
      content: `# Waves & Sound

**Part 4 of 4 — Doppler, Ultrasound & Shock Waves**

### Doppler: Relative Approach Raises Pitch

When a sound source and a listener move toward each other, the listener hears a higher frequency than the source emits; when they move apart, a lower one. That is the **Doppler effect**:

$$f' = f\\,\\frac{v \\pm v_o}{v \\mp v_s}$$

Here $f$ is the emitted frequency, $f'$ the frequency heard, $v$ the speed of sound in the medium, $v_o$ the observer's speed and $v_s$ the source's speed, both measured relative to the air (or other medium). Use speeds as positive numbers and let the signs carry the direction. The two signs are chosen independently: observer toward or away, source toward or away.

**The sign ritual: approach raises.** Choose each sign so that motion TOWARD the other party raises $f'$:

- Observer moving toward the source: $+v_o$ in the numerator (bigger top). Moving away: $-v_o$.
- Source moving toward the observer: $-v_s$ in the denominator (smaller bottom). Moving away: $+v_s$.
- Anyone standing still contributes zero.

**Why it happens.** A moving SOURCE chases its own wavefronts, bunching them up ahead (shorter $\\lambda$) and spreading them out behind. Since the air still carries them at $v$, the bunched waves arrive more often: $f = v/\\lambda$ rises. A moving OBSERVER leaves the wavelength untouched but runs into wavefronts more often. Either way, the speed of the sound in the air does not change.

- Only motion along the line joining source and listener counts. Sound emitted when a passing car is exactly beside you carries no shift, because at that instant its motion is sideways.
- **Shortcut for slow motion**: when the relative approach speed $u$ is much smaller than $v$, the fractional shift is $\\Delta f/f \\approx u/v$.

**Reflection from a moving object gives a double shift.** Bounce sound off a moving target and two Doppler shifts happen in sequence: the target first RECEIVES the sound as a moving observer, then RE-EMITS it as a moving source. For a target moving at speed $u$ (much slower than sound), the echo's shift is about twice the one-way shift, the shift a stationary listener would hear from a source moving at $u$:

$$\\Delta f \\approx \\frac{2fu}{v}$$

The shift is upward for an approaching target and downward for a receding one. Bats, police radar guns (with radio waves) and Doppler ultrasound all use this.

### Worked Example — Doppler Direction Check

An ambulance siren at $600\\;\\text{Hz}$ approaches a stationary pedestrian at $34\\;\\text{m/s}$. Take $v = 340\\;\\text{m/s}$ for clean arithmetic (the room-temperature value, $343\\;\\text{m/s}$, gives about $666\\;\\text{Hz}$, the same to the precision tested).

**Step 1 — Approaching source.** The source approaches, so subtract in the denominator:

$f' = 600\\,\\dfrac{340}{340 - 34} = 600\\,\\dfrac{340}{306} \\approx 667\\;\\text{Hz}$

Approach, so the answer must exceed $600$: the minus sign was chosen to make that happen.

**Step 2 — After it passes.** Now the source recedes, the denominator becomes $340 + 34 = 374$, and $f' = 600(340/374) \\approx 545\\;\\text{Hz}$: the classic drive-by pitch drop.

**Step 3 — Estimate first.** $u/v = 34/340 = 10\\%$, so expect a shift of about $60\\;\\text{Hz}$: roughly $660\\;\\text{Hz}$ approaching and $540\\;\\text{Hz}$ receding. Answer choices are usually far enough apart for the estimate to pick the right one.

**Step 4 — Switch who moves.** If instead the pedestrian runs toward a parked ambulance at $34\\;\\text{m/s}$: $f' = 600(340 + 34)/340 = 600(1.1) = 660\\;\\text{Hz}$. Close to $667$, but not identical, because only a moving source changes the wavelength.`
    },
    {
      id: 'ws4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: The Doppler Effect** 🎯`,
      exercise: {
        questions: [
          {
            question: `An ambulance drives toward a stationary observer with its siren on. Compared with the frequency the siren emits, the observer hears:`,
            options: [`A lower frequency, because its waves are stretched out`, `A higher frequency, because the wavefronts ahead are bunched`, `The same frequency, but growing louder as it gets nearer`, `A higher frequency, because the sound itself moves faster`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The moving source chases its own wavefronts and shortens the wavelength ahead of it; the air still carries sound at the same speed, so $f = v/\\lambda$ rises. The speed of sound is set by the medium, so a faster-moving sound is the tested misconception. Stretched waves describe a receding source, and loudness changes do not cancel the frequency shift.`
          },
          {
            question: `A cyclist rides at $17\\;\\text{m/s}$ directly toward a stationary alarm emitting $680\\;\\text{Hz}$. Taking $v = 340\\;\\text{m/s}$, what frequency does she hear?`,
            options: [`$646\\;\\text{Hz}$`, `$697\\;\\text{Hz}$`, `$714\\;\\text{Hz}$`, `$680\\;\\text{Hz}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `An approaching observer adds her speed in the numerator: $f' = 680(340 + 17)/340 = 680(1.05) = 714\\;\\text{Hz}$. $646\\;\\text{Hz}$ uses the receding sign, and $680\\;\\text{Hz}$ assumes only a moving source causes a shift. $697\\;\\text{Hz}$ adds the speed directly to the frequency, mixing units.`
          },
          {
            question: `A stationary Doppler ultrasound probe is aimed along a vein in which blood flows directly away from it. Compared with the transmitted frequency, the echo from the moving red blood cells is shifted:`,
            options: [`Up, by about twice the one-way shift`, `Down, by about the one-way shift`, `Down, by about twice the one-way shift`, `Up, by about the one-way shift`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Receding red blood cells lower the frequency twice: once as moving observers receiving the beam, and again as moving sources sending the echo back. The result is a downward shift of about $2fu/v$. An upward shift would mean the blood approached, and a single shift forgets that reflection involves two Doppler steps.`
          }
        ]
      }
    },
    {
      id: 'ws4-ultrasound',
      type: 'text' as const,
      content: `### Ultrasound Imaging

Medical ultrasound uses frequencies of about 1 to 20 MHz, far above the $20\\;\\text{kHz}$ limit of hearing. A probe held on the skin contains a crystal that turns a brief electrical pulse into a burst of sound, then listens, turning returning echoes back into electrical signals.

The crystal is **piezoelectric**: it deforms when a voltage is applied and generates a voltage when squeezed.

**Depth from echo time.** Each tissue boundary reflects part of the pulse. The machine times each echo and assumes sound moves at $1540\\;\\text{m/s}$ in soft tissue. The pulse travels to the boundary AND back, so:

$$d = \\frac{vt}{2}$$

Forgetting the factor of 2 doubles every depth.

**Resolution vs. penetration.** An ultrasound beam cannot resolve details much smaller than its wavelength, and $\\lambda = v/f$: about $1\\;\\text{mm}$ at $1.5\\;\\text{MHz}$, about $0.1\\;\\text{mm}$ at $15\\;\\text{MHz}$. So higher frequency gives FINER detail. But tissue absorbs higher frequencies more strongly (attenuation, Part 3 of this lesson), so higher frequency penetrates LESS deeply.

Typical choices (approximate; no need to memorize the numbers):

| Target | Typical choice | Why |
|---|---|---|
| deep: liver, kidney, fetus | 2 to 5 MHz | penetration matters most |
| shallow: thyroid, carotid artery, tendons | 10 to 15 MHz | fine detail, and depth is small |

**Why echoes happen, and why gel is needed.** How strongly a boundary reflects depends on the mismatch in **acoustic impedance**, $Z = \\rho v$, the product of a tissue's density and its speed of sound. Soft tissues differ only slightly, so they return weak echoes that build up the image. Tissue and bone differ more, so bone reflects strongly and casts an acoustic shadow behind it; gallstones do the same. Tissue and air differ enormously, so almost all the sound is reflected at an air gap. That is why gel is spread between probe and skin (to push out the air), and why gas-filled lungs and bowel block the view.

Ultrasound uses no ionizing radiation, which is why it is the imaging method of choice in pregnancy.

<!-- yield:low -->
- The fraction of intensity reflected at a boundary is $\\left(\\frac{Z_2 - Z_1}{Z_2 + Z_1}\\right)^2$.
<!-- /yield -->

### Doppler Ultrasound and Blood Flow

**Doppler ultrasound** measures blood velocity from the double shift of echoes off moving red blood cells. Blood flowing toward the probe shifts the echo up, flowing away shifts it down, and the size of the shift is proportional to the speed. Only the velocity component along the beam counts: at beam-to-flow angle $\\theta$, $\\Delta f = 2fu\\cos\\theta/v$. A perpendicular beam gives zero shift, so the probe is tilted along the vessel; in a ratio of two shifts taken at the same angle, $\\theta$ cancels. The shifts are typically a few kilohertz, which is audible: Doppler machines play them as the familiar whooshing pulse.

**Grading a stenosis.** A **stenosis** is a narrowing of a vessel's **lumen**, the open channel the blood flows through. Continuity gives $A_1u_1 = A_2u_2$ ($u$ = blood speed; the *Fluids* lesson writes it as $v$), so blood speeds up where the lumen narrows, and the Doppler shift is proportional to that speed. A stenosis therefore shows up as a local jump in the shift, and the shift ratio gives the area ratio (Problem 3 below works the numbers).

<!-- yield:low -->
- Colour Doppler displays flow toward the probe in red and away in blue (remembered as "BART": blue away, red toward).
<!-- /yield -->

### Shock Waves and Sonic Booms

As a source speeds up toward the speed of sound, the wavefronts ahead of it crowd closer and closer. At $v_s = v$ they pile into a single intense front, and the Doppler formula's denominator reaches zero: the formula no longer applies.

When the source moves FASTER than sound ($v_s > v$), it outruns its own wavefronts. They overlap along a cone trailing behind the source, the **Mach cone**, and the cone's surface is a **shock wave**: a thin zone of abrupt, large pressure change. The **Mach number** is $M = v_s/v$; the faster the source, the narrower the cone.

- A **sonic boom** is the shock cone sweeping past a listener. The aircraft drags the cone along for as long as it flies supersonically, so the boom is not a one-time event at the moment of "breaking the sound barrier". Each listener under the flight path hears it once, AFTER the plane has passed overhead.
- Medicine uses shock waves too: **lithotripsy** focuses shock waves generated outside the body onto a kidney stone and shatters it.

<!-- yield:low -->
- The cone's half-angle $\\theta$ satisfies $\\sin\\theta = 1/M$. A cracking whip is a small sonic boom: the tip briefly moves faster than sound.
<!-- /yield -->`
    },
    {
      id: 'ws4-worked',
      type: 'text' as const,
      content: `### Worked Example — Depth, Frequency and a Stenosis

**Problem 1 — How deep?** A pulse leaves the probe, and an echo from the far edge of the liver returns $130\\;\\mu\\text{s}$ later ($1\\;\\mu\\text{s} = 10^{-6}\\;\\text{s}$; $v = 1540\\;\\text{m/s}$).

**Step 1.** Round-trip distance: $vt = (1540)(1.30 \\times 10^{-4}) \\approx 0.20\\;\\text{m}$

**Step 2.** Halve it: $d \\approx 0.10\\;\\text{m} = 10\\;\\text{cm}$. For comparison, a carotid artery about $2\\;\\text{cm}$ below the skin echoes after only about $26\\;\\mu\\text{s}$.

**Problem 2 — Which probe?** For the shallow carotid, a $12\\;\\text{MHz}$ probe gives $\\lambda = 1540/(1.2 \\times 10^{7}) \\approx 0.13\\;\\text{mm}$, fine enough to see the vessel wall. A $3\\;\\text{MHz}$ probe gives $\\lambda \\approx 0.51\\;\\text{mm}$: coarser, but it is the right choice for the liver, $10\\;\\text{cm}$ deep, where a $12\\;\\text{MHz}$ beam would be absorbed before its echo returned.

**Problem 3 — Grading a stenosis with Doppler.** A $4.0\\;\\text{MHz}$ beam is aligned with carotid flow. The echo shift is $2.0\\;\\text{kHz}$ upstream and $8.0\\;\\text{kHz}$ inside a narrowing.

**Step 1 — Speeds from the double shift.** $u = \\dfrac{v\\,\\Delta f}{2f}$. Upstream: $u = \\dfrac{(1540)(2000)}{2(4.0 \\times 10^{6})} \\approx 0.39\\;\\text{m/s}$. Inside: four times the shift, so four times the speed, about $1.5\\;\\text{m/s}$.

**Step 2 — Area by continuity.** At (nearly) constant flow, $A \\propto 1/u$: the lumen's area is one-quarter of the upstream area.

**Step 3 — Radius.** $A \\propto r^2$, so the radius is halved, about a 50% diameter narrowing. Note that a ratio question never needs the factor of 2 or the probe frequency; they cancel.

**Step 4 — Interpret.** Beyond the stenosis, turbulence widens the spread of shifts. The pressure and resistance consequences of the narrowing (Bernoulli and Poiseuille) are in the *Fluids* lesson.`
    },
    {
      id: 'ws4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Ultrasound, Stenosis & Shock Waves** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $2.0\\;\\text{MHz}$ Doppler probe is aimed along an artery in which blood moves directly toward it at $0.77\\;\\text{m/s}$. The speed of sound in tissue is $1540\\;\\text{m/s}$. By about how much is the echo's frequency shifted?`,
            options: [`$1000\\;\\text{Hz}$`, `$2000\\;\\text{Hz}$`, `$500\\;\\text{Hz}$`, `$0\\;\\text{Hz}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `For a reflection, $\\Delta f \\approx 2fu/v = 2(2.0 \\times 10^{6})(0.77)/1540 = 2000\\;\\text{Hz}$, an upward shift. $1000\\;\\text{Hz}$ is the one-way shift, forgetting that the moving cells both receive and re-emit. $500\\;\\text{Hz}$ halves instead of doubling, borrowing the factor of 2 from the echo-depth rule. $0\\;\\text{Hz}$ assumes a stationary probe cannot detect a shift, but the moving blood cells create it.`
          },
          {
            question: `An echo from the surface of a kidney returns $65\\;\\mu\\text{s}$ after the pulse leaves the probe. Taking the speed of sound in tissue as $1540\\;\\text{m/s}$, how deep is the kidney's surface?`,
            options: [`$100\\;\\text{mm}$`, `$25\\;\\text{mm}$`, `$50\\;\\text{mm}$`, `$200\\;\\text{mm}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The round trip is $vt = (1540)(6.5 \\times 10^{-5}) \\approx 0.10\\;\\text{m}$, and the depth is half of that: $0.050\\;\\text{m} = 50\\;\\text{mm}$. $100\\;\\text{mm}$ forgets that the echo travels there and back, and $200\\;\\text{mm}$ doubles instead of halving. $25\\;\\text{mm}$ halves the round trip twice.`
          },
          {
            question: `A sonographer switches from a $3\\;\\text{MHz}$ probe to a $12\\;\\text{MHz}$ probe. Compared with the $3\\;\\text{MHz}$ beam, the $12\\;\\text{MHz}$ beam gives:`,
            options: [`Coarser resolution, but deeper penetration`, `Finer resolution and deeper penetration`, `Coarser resolution and less penetration`, `Finer resolution, but shallower penetration`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Four times the frequency in the same tissue gives one-quarter the wavelength, so finer detail can be resolved. Absorption rises with frequency, so the beam fades sooner and penetrates less. Believing a higher frequency also reaches deeper ignores attenuation, and coarser resolution would require a longer wavelength, which needs a lower frequency.`
          },
          {
            question: `With the same probe, frequency and beam angle, the Doppler shift from blood inside a carotid stenosis is three times the shift measured just upstream. Treating blood as incompressible, the lumen's cross-sectional area inside the stenosis, compared with upstream, is:`,
            options: [`One-ninth as large`, `One-third as large`, `Two-thirds as large`, `Three times as large`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The shift is proportional to blood speed, so the speed has tripled. Continuity ($A_1u_1 = A_2u_2$, with $u$ the blood speed; the *Fluids* lesson writes it as $v$) then requires one-third of the area. One-ninth squares the speed ratio, as if area tracked kinetic energy. Two-thirds wrongly halves the shift ratio for the reflection, though that factor of 2 cancels in a ratio, and "three times as large" reverses continuity.`
          },
          {
            question: `A jet flies level at Mach 1.5 over a town. Which statement about its sonic boom is correct?`,
            options: [`There is no boom, because the jet outruns all of its sound`, `A single boom occurs at the instant the jet passes Mach 1`, `A shock cone trails the jet throughout supersonic flight`, `The boom reaches each listener before the jet passes overhead`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `A supersonic source continuously piles its wavefronts into a trailing Mach cone, and each listener hears the boom when the cone sweeps past. Because the cone trails the jet, the boom arrives after the jet has passed overhead. Outrunning the sound does not erase it, and the boom is not a single event at Mach 1.`
          }
        ]
      }
    },
    {
      id: 'ws4-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Doppler: $f' = f(v \\pm v_o)/(v \\mp v_s)$; choose signs so that approach raises $f'$ and recession lowers it
- A moving source changes the wavelength; a moving observer only meets wavefronts more often; the speed of sound never changes
- Slow motion: $\\Delta f/f \\approx u/v$; only motion along the line of sight counts
- Reflection off a moving target: double shift, $\\Delta f \\approx 2fu/v$, up if approaching, down if receding
- Ultrasound: 1 to 20 MHz; depth $d = vt/2$ with $v \\approx 1540\\;\\text{m/s}$ in tissue
- Higher frequency = shorter wavelength = finer resolution, but stronger attenuation = less depth
- Echo strength depends on acoustic impedance mismatch ($Z = \\rho v$); gel removes the air gap; bone and gas reflect strongly
- Doppler ultrasound: the shift is proportional to blood speed; a stenosis shows a local jump, and continuity turns the speed ratio into an area ratio
- Source faster than sound: a trailing Mach cone, a shock wave; the sonic boom lasts as long as the flight is supersonic
- Passage checklist: decide what is fixed (medium, source or geometry; see Part 3 of this lesson) before you compute
- Intensity or level? Convert through a ratio, never by proportion
- Doppler: who moves, toward or away? Approach raises; reflection doubles; estimate with $u/v$ first
- Echo timing? Halve the round trip
- Watch the powers: square roots in string speed and pendulum period; squares in amplitude-energy and inverse-square spreading

**Common traps**

- Saying a moving source makes sound travel faster
- Choosing the Doppler signs by memory instead of by "approach raises"
- Forgetting the double shift for echoes, or the factor of 2 in echo depth
- Thinking higher-frequency ultrasound penetrates deeper
- Squaring a speed ratio to get an area ratio
- Thinking the sonic boom happens only once, at Mach 1

<!-- yield:low -->
- Low-yield extras: the reflection-fraction formula; the colour Doppler red/blue convention; the Mach-cone angle formula; the cracking whip.
<!-- /yield -->

**Next up:** revisit the *Fluids* lesson's continuity and Bernoulli sections. Passages often pair a Doppler blood-flow measurement with exactly those equations.`
    }
  ]
}
