export const mcatMechFluidsWavesPart4Data = {
  topicSlug: 'mcat-physics-mechanics-fluids-waves-mcat',
  sections: [
    {
      id: 'flw4-intro',
      type: 'text' as const,
      content: `# Fluids & Waves

**Part 4 of 4 — MCAT Integration: Blood Flow, Ultrasound & Passage Strategy**

### The Circulation as a Fluids Problem

The MCAT rarely asks about pipes; it asks about vessels. Map the physics onto the physiology:

- **Continuity with TOTAL area:** each capillary is microscopic, but there are billions — their summed cross-section (~$1000\\times$ the aorta's) is what enters $Q = A_{total}v$. Blood therefore CRAWLS through capillaries, buying time for gas and nutrient exchange. Answering "blood speeds up in narrow capillaries" applies single-vessel intuition to a branching bed — the signature trap.
- **Poiseuille for resistance:** flow scales with $r^4$, so arteriolar constriction is the body's volume knob, and a modestly stenosed coronary artery loses most of its flow reserve.
- **Bernoulli in pathology:** blood racing through a stenosis is a low-pressure region; the vessel wall can flutter or transiently collapse, and downstream of the jet, turbulence makes the murmur you hear with a stethoscope.
- **Hydrostatics in posture:** standing adds $\\rho gh$ to blood pressure below the heart — ankle venous pressure far exceeds brachial pressure, which is why measurement is standardized at heart level.

### Ultrasound: Waves Doing Medicine

Ultrasound imaging reflects megahertz sound off tissue interfaces; **Doppler ultrasound** reads blood velocity from the frequency shift of echoes off moving red cells — approach shifts the echo up, recession shifts it down, and the shift size gives the speed. A stenotic jet announces itself as a localized velocity (and Doppler-shift) spike.

### Passage Strategy: Pick the Regime First

1. Is the fluid treated as **ideal** (continuity, Bernoulli, Torricelli) or **viscous** (Poiseuille, pressure loss along a uniform tube)? The passage's assumptions decide.
2. Single tube or **branching network**? Networks demand total cross-sectional area.
3. For sound: is the question about **intensity** (watts, $1/r^2$) or **level** (dB, logarithmic)? Convert deliberately, never by proportion.
4. Doppler: identify WHO moves, then force the sign so approach raises frequency.`
    },
    {
      id: 'flw4-worked',
      type: 'text' as const,
      content: `### Worked Example — Why Capillary Blood Crawls

The aorta (cross-section $\\approx 3\\;\\text{cm}^2$) carries blood at about $30\\;\\text{cm/s}$. The capillary bed's total cross-section is roughly $900\\;\\text{cm}^2$.

**Step 1 — Flow rate is fixed by the heart.**

$Q = Av = (3)(30) = 90\\;\\text{cm}^3/\\text{s}$ (about 5.4 L/min — cardiac output, a sanity check)

**Step 2 — Continuity across the whole bed.**

$v_{cap} = \\frac{Q}{A_{total}} = \\frac{90}{900} = 0.1\\;\\text{cm/s}$

A 300-fold slowdown, in the one place slow flow is physiologically useful. Any single capillary IS narrower than the aorta, but continuity binds $Q$ to the summed area of the parallel paths.

### Worked Example — Grading a Stenosis with Doppler

A carotid ultrasound shows peak systolic velocity jumping from $60\\;\\text{cm/s}$ upstream to $240\\;\\text{cm/s}$ within a stenosis.

**Step 1 — Continuity backward.** A $4\\times$ speed-up at (approximately) fixed flow means the lumen area is down to one-quarter: $A \\propto 1/v$. Radius is therefore halved ($A \\propto r^2$) — about a 50% diameter stenosis.

**Step 2 — Bernoulli forward.** The kinetic term $\\tfrac{1}{2}\\rho v^2$ grows $16\\times$ in the jet, so intravascular pressure dips there; post-stenotic turbulence produces the audible bruit.

**Step 3 — Poiseuille's warning.** With radius halved, the segment's flow capacity at a given pressure difference is down to $(1/2)^4 = 1/16$ — the physiologic cost is far steeper than "half blocked" sounds.`
    },
    {
      id: 'flw4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: Fluids & Waves** 🎯`,
      exercise: {
        questions: [
          {
            question: `Blood moves far more slowly through the capillaries than through the aorta primarily because:`,
            options: [`Blood viscosity is higher in capillaries`, `Capillary blood pressure is higher`, `The TOTAL cross-sectional area of the capillary bed far exceeds the aorta's`, `Gravity opposes capillary flow`],
            correctAnswer: 2,
            explanation: `Continuity with the summed area of all parallel capillaries: $v = Q/A_{total}$, and $A_{total}$ is hundreds of times the aortic area. The single-narrow-tube intuition (narrow = fast) is exactly the trap this physiology defeats.`
          },
          {
            question: `Within an arterial stenosis, compared with the segment just upstream, blood velocity and pressure are respectively:`,
            options: [`Lower and higher`, `Higher and lower`, `Higher and higher`, `Unchanged and lower`],
            correctAnswer: 1,
            explanation: `One narrowed vessel obeys single-tube continuity (faster in the smaller lumen), and Bernoulli then prices that speed as reduced pressure in the jet. Fast and low-pressure travel together in ideal flow.`
          },
          {
            question: `By Poiseuille's law, if vasoconstriction halves an arteriole's radius at a fixed pressure difference, blood flow through it becomes:`,
            options: [`One-half of the original`, `One-fourth of the original`, `One-eighth of the original`, `One-sixteenth of the original`],
            correctAnswer: 3,
            explanation: `$Q \\propto r^4$ and $(1/2)^4 = 1/16$. The fourth power makes small radius changes a powerful physiological control — and a favorite MCAT calculation.`
          },
          {
            question: `In Doppler ultrasound, echoes returning from blood flowing TOWARD the transducer are received at:`,
            options: [`A higher frequency than was transmitted`, `A lower frequency than was transmitted`, `The transmitted frequency, with greater intensity`, `The transmitted frequency, with a phase inversion only`],
            correctAnswer: 0,
            explanation: `Approaching scatterers compress the reflected wavefronts, shifting the echo up in frequency; receding flow shifts it down. The machine converts that shift into a velocity — the basis of flow imaging.`
          },
          {
            question: `A passage applies Bernoulli's equation to flow in a large artery. The equation's validity rests on the assumption that the flow is:`,
            options: [`Turbulent and compressible`, `Driven by osmotic pressure`, `Nonviscous, incompressible, and laminar`, `Slower than the speed of sound in blood`],
            correctAnswer: 2,
            explanation: `Bernoulli is ideal-fluid energy conservation: no viscous losses, constant density, smooth streamlines. In capillaries — where viscosity dominates — Bernoulli fails and Poiseuille takes over; recognizing the regime is the tested skill.`
          }
        ]
      }
    },
    {
      id: 'flw4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Branching beds use TOTAL cross-sectional area in continuity: capillary blood crawls because the summed area is enormous
- One narrowed vessel: faster and lower-pressure inside the stenosis (continuity + Bernoulli); turbulence downstream is the murmur
- Poiseuille's $r^4$: halving radius cuts flow to $1/16$ — constriction is the circulation's volume knob
- Standing posture adds $\\rho gh$ to pressures below the heart; measure BP at heart level
- Doppler ultrasound: approach shifts echoes up in frequency; the shift encodes blood speed
- Strategy: fix the regime first (ideal vs. viscous, single tube vs. network, intensity vs. dB), then compute`
    }
  ]
};
