import type { LessonData } from './registry'

export const soundDopplerMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-waves-sound-mcat',
  sections: [
    {
      id: 'ws3-intro',
      type: 'text' as const,
      content: `# Sound, Doppler & Ultrasound

**Part 1 of 2 — Sound: Intensity, Decibels & Hearing**

**Where this fits.** The previous lesson, *Waves & Interference*, covered periodic motion, wave basics, superposition, beats, standing waves and resonance. This lesson closes the fluids-and-waves sequence with sound itself: intensity, decibels and hearing, then the Doppler effect, ultrasound and shock waves. The next lesson, *Optics*, moves on to light.

### How Sound Is Made

Every sound starts with something vibrating: vocal folds, a speaker cone, a tuning fork's prongs, a guitar string's body. As the vibrating surface pushes outward it crowds the air in front of it into a **compression** (pressure and density slightly above normal); as it pulls back it leaves a **rarefaction** (slightly below normal). These alternating zones travel outward as a longitudinal pressure wave. The air molecules themselves only jiggle back and forth about their resting positions.

- Sound needs a medium. In a vacuum there is nothing to compress, so no sound travels, although light still crosses it.
- Its speed is set by the medium (the *Waves & Interference* lesson): about $343\\;\\text{m/s}$ in room-temperature air, faster in warmer air, faster still in liquids, and fastest in solids.
- The frequency is the vibration rate of the source.

### Passage Strategy: Decide What Is Fixed Before You Compute

Most wave errors come from changing the wrong variable. Before writing a formula, ask what is FIXED:

| Situation | Fixed | What follows |
|---|---|---|
| Wave crosses into a new medium | $f$ | $v$ and $\\lambda$ change together |
| Same medium, new source frequency | $v$ | $\\lambda \\propto 1/f$ |
| Standing wave on a given string or pipe | $\\lambda_n$ (set by $L$) | $f_n = v/\\lambda_n$, so $f$ follows $v$ |
| Tighten a string, or warm the air in a pipe | $\\lambda_n$ | $v$ rises, so the resonant frequencies rise |

The last row explains a passage favourite: a wind instrument goes sharp as it warms up, because its pipe fixes the resonant wavelengths while warmer air carries sound faster. Helium is the related case. The vocal folds vibrate at about the same rate, but the vocal tract's resonant frequencies rise because sound travels faster in helium, so the voice's quality (its timbre, the blend of harmonics covered later in this part) shifts toward its higher harmonics (the *Waves & Interference* lesson).

### Intensity and the Inverse-Square Law

**Intensity** is the power a wave carries through each square metre of area perpendicular to its travel:

$$I = \\frac{P}{A} \\qquad (\\text{W/m}^2)$$

A small source radiating equally in all directions (a **point source**) spreads its power over a growing sphere of area $4\\pi r^2$:

$$I = \\frac{P}{4\\pi r^2} \\quad\\Rightarrow\\quad I \\propto \\frac{1}{r^2}$$

Double the distance and the intensity drops to $1/4$; triple it, $1/9$; ten times farther, $1/100$. Intensity also grows with the square of the wave's amplitude, as all wave energy does.

### The Decibel Scale

Human ears respond to intensities from about $10^{-12}\\;\\text{W/m}^2$ (barely audible) to about $1\\;\\text{W/m}^2$ (painful), a range of a trillion. To tame that range, the **sound level** $\\beta$ uses a logarithm:

$$\\beta = 10\\log\\frac{I}{I_0}, \\qquad I_0 = 10^{-12}\\;\\text{W/m}^2$$

$\\beta$ is in decibels (dB), and $I_0$ is the reference intensity, the threshold of human hearing, defined as $0\\;\\text{dB}$. Keep the two quantities apart: **intensity** $I$ is physical power per area; **level** $\\beta$ is a logarithmic rating of it.

| Intensity ratio | Change in level |
|---|---|
| $\\times 10$ | $+10\\;\\text{dB}$ |
| $\\times 100$ | $+20\\;\\text{dB}$ |
| $\\times 1000$ | $+30\\;\\text{dB}$ |
| $\\times 2$ | about $+3\\;\\text{dB}$ (because $\\log 2 \\approx 0.3$) |
| $\\times 1/2$ | about $-3\\;\\text{dB}$ |
| $\\times 1/4$ (distance doubled) | about $-6\\;\\text{dB}$ |

Rules that follow:

- **Never add decibels directly.** Two identical $70\\;\\text{dB}$ sources double the intensity, giving about $73\\;\\text{dB}$, not $140$. Ten identical sources give ten times the intensity: $+10\\;\\text{dB}$.
- **Unequal sources: the louder one dominates.** A $60\\;\\text{dB}$ and a $50\\;\\text{dB}$ source together make only about $60.4\\;\\text{dB}$, because the quieter one adds just a tenth more intensity.
- **A level difference is a ratio, never a fraction of the levels.** From $40$ to $70\\;\\text{dB}$ is $\\times 1000$, not $\\times 70/40$.
- Sounds fainter than $I_0$ have negative levels: $10^{-13}\\;\\text{W/m}^2$ is $-10\\;\\text{dB}$.

Rough landmarks (approximate; no need to memorize): a whisper about $30\\;\\text{dB}$, conversation about $60\\;\\text{dB}$, heavy traffic about $80\\;\\text{dB}$, a siren up close $110$ to $120\\;\\text{dB}$, the threshold of pain about $120$ to $130\\;\\text{dB}$.

<!-- yield:low -->
- Occupational guidelines treat long exposure above about $85\\;\\text{dB}$ as a hearing-damage risk.
<!-- /yield -->`
    },
    {
      id: 'ws3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Intensity & Decibels** 🎯`,
      exercise: {
        questions: [
          {
            question: `During a hearing test, an audiologist raises a tone from $30\\;\\text{dB}$ to $50\\;\\text{dB}$. By what factor has the tone's intensity increased?`,
            options: [`$20$`, `$100$`, `$2$`, `$10$`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The level rose by $20\\;\\text{dB}$, and every $10\\;\\text{dB}$ is a factor of $10$ in intensity, so the factor is $10 \\times 10 = 100$. A factor of $20$ reads decibels as a linear multiplier, $2$ treats the two steps of $10\\;\\text{dB}$ as a doubling, and $10$ counts only one step of ten.`
          },
          {
            question: `One ventilator alarm produces $70\\;\\text{dB}$ at the nursing station. A second, identical alarm beside it starts sounding too. What is the combined sound level at the station, approximately?`,
            options: [`$73\\;\\text{dB}$`, `$140\\;\\text{dB}$`, `$80\\;\\text{dB}$`, `$70\\;\\text{dB}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Two identical sources double the intensity, and doubling adds $10\\log 2 \\approx 3\\;\\text{dB}$: about $73\\;\\text{dB}$. Adding the levels to get $140\\;\\text{dB}$ treats a log scale as linear. $80\\;\\text{dB}$ would require ten alarms, and $70\\;\\text{dB}$ ignores the second alarm's energy.`
          },
          {
            question: `A sound reaching a listener has an intensity of $10^{-4}\\;\\text{W/m}^2$. What is its sound level? ($I_0 = 10^{-12}\\;\\text{W/m}^2$)`,
            options: [`$40\\;\\text{dB}$`, `$8\\;\\text{dB}$`, `$-40\\;\\text{dB}$`, `$80\\;\\text{dB}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$\\beta = 10\\log(10^{-4}/10^{-12}) = 10\\log(10^{8}) = 80\\;\\text{dB}$. The value $-40\\;\\text{dB}$ takes the log of $I$ without dividing by $I_0$, and $40\\;\\text{dB}$ drops the minus sign from that mistake. $8\\;\\text{dB}$ forgets the factor of 10 in front of the log.`
          }
        ]
      }
    },
    {
      id: 'ws3-worked',
      type: 'text' as const,
      content: `### Worked Example — Decibel Arithmetic Without a Calculator

**Problem 1 — Levels and intensities.** Use $\\beta = 10\\log(I/I_0)$ with $I_0 = 10^{-12}\\;\\text{W/m}^2$. Every factor of 10 in intensity is $10\\;\\text{dB}$.

- **(a)** A monitor alarm measures $40\\;\\text{dB}$ at a nurse's station and $70\\;\\text{dB}$ beside the patient. How much more intense is it beside the patient?
- **(b)** A blender delivers $10^{-5}\\;\\text{W/m}^2$ to your ear. What is its sound level?
- **(c)** A siren is rated at $90\\;\\text{dB}$. What intensity is that?

**(a) A ratio from a difference.** $\\Delta\\beta = 30\\;\\text{dB} \\Rightarrow \\dfrac{I_2}{I_1} = 10^{30/10} = 10^3 = 1000$

Thirty decibels is three factors of ten. Never treat the levels as a ratio ($70/40$): the scale is logarithmic.

**(b) From intensity to level.** $\\beta = 10\\log\\dfrac{10^{-5}}{10^{-12}} = 10\\log(10^{7}) = 10(7) = 70\\;\\text{dB}$

Shortcut: count the powers of ten above $10^{-12}$ and multiply by 10.

**(c) From level to intensity.** Run the shortcut from (b) backward: $90\\;\\text{dB}$ is nine powers of ten above $I_0$, so $I = 10^{9} \\times 10^{-12} = 10^{-3}\\;\\text{W/m}^2$.

**Problem 2 — Ratios that are not powers of ten.** A factor of 10 in intensity is $10\\;\\text{dB}$, and a factor of 2 is about $3\\;\\text{dB}$ (because $\\log 2 \\approx 0.3$).

- **(a)** A sound becomes five times as intense. About how much does its level rise?
- **(b)** About how much does it rise if the sound becomes four times as intense?
- **(c)** What happens to the level when the wave's amplitude doubles?

**(a) Five times.** Write $5 = 10/2$: that is $+10\\;\\text{dB}$ and then $-3\\;\\text{dB}$, so about $+7\\;\\text{dB}$.

**(b) Four times.** $4 = 2 \\times 2$: about $+3 + 3 = +6\\;\\text{dB}$.

**(c) Double the amplitude.** Intensity grows as amplitude squared, so doubling the amplitude gives $\\times 4$ the intensity: about $+6\\;\\text{dB}$, as in (b).

**Problem 3 — Several sources, and distance.** One infusion pump hums at $40\\;\\text{dB}$. A loudspeaker, treated as a point source, gives $90\\;\\text{dB}$ at $1\\;\\text{m}$.

- **(a)** What level do two identical pumps make together?
- **(b)** What level do ten identical pumps make?
- **(c)** What level does the loudspeaker give at $10\\;\\text{m}$?
- **(d)** What level does it give at $2\\;\\text{m}$?

**(a) Two pumps.** Intensity $\\times 2$, about $43\\;\\text{dB}$ (never $80$).

**(b) Ten pumps.** Intensity $\\times 10$, $50\\;\\text{dB}$.

**(c) Ten times as far.** The intensity is $1/10^2 = 1/100$ as great, which is $-20\\;\\text{dB}$, so $70\\;\\text{dB}$.

**(d) Twice as far.** The intensity is $1/4$, about $-6\\;\\text{dB}$, so about $84\\;\\text{dB}$. The strategy in every case: convert the question into an INTENSITY RATIO, then turn each factor of 10 into $10\\;\\text{dB}$ and each factor of 2 into $3\\;\\text{dB}$.`
    },
    {
      id: 'ws3-hearing',
      type: 'text' as const,
      content: `### Attenuation: Sound Fades for Two Reasons

The inverse-square law describes only geometric spreading: the same power covering a larger area. A real medium also **absorbs** sound, converting its energy into heat, so intensity falls even faster than $1/r^2$. This damping of a travelling wave is called **attenuation**.

- **Higher frequencies are absorbed more strongly.** That is why distant thunder is a low rumble while nearby thunder cracks, and why music through a wall loses its treble and keeps its bass.
- Soft tissue absorbs ultrasound heavily, and more so at higher frequencies. That trade-off decides which ultrasound frequency a clinician chooses (Part 2 of this lesson).
- Reflection and scattering at boundaries also remove energy from the forward beam.

<!-- yield:low -->
- In soft tissue, ultrasound attenuation is roughly $0.5\\;\\text{dB}$ per centimetre for each megahertz of frequency.
<!-- /yield -->

### Pitch, Loudness and Hearing

The physics maps onto perception:

| Physical property | What you perceive |
|---|---|
| frequency | **pitch**: higher frequency, higher pitch; doubling the frequency raises the pitch one octave |
| intensity | **loudness**: roughly logarithmic, which is why the decibel scale fits hearing |
| mix of harmonics | **timbre**: the quality that distinguishes instruments |

A violin and a flute playing the same note share the same fundamental frequency, so they have the same pitch. They sound different because each adds a different blend of **overtones**, the harmonics above the fundamental (the *Waves & Interference* lesson).

- **Human hearing spans about $20\\;\\text{Hz}$ to $20\\;\\text{kHz}$.** The upper limit falls with age and noise exposure, so high frequencies are lost first. Sensitivity peaks around $2$ to $5\\;\\text{kHz}$, helped by the ear canal's resonance.
- **Infrasound** lies below $20\\;\\text{Hz}$ (elephant and whale calls, earthquakes). **Ultrasound** lies above $20\\;\\text{kHz}$: bats and dolphins use it to echolocate, and medical imaging uses 1 to 20 MHz.
- **Where pitch is decoded:** different places along the cochlea's basilar membrane vibrate best at different frequencies, high frequencies near its base and low frequencies near its apex. The anatomy is covered in the *Sensory Systems* lesson.
- Amplitude changes loudness, not pitch: strike a tuning fork harder and it gets louder at the same frequency.`
    },
    {
      id: 'ws3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Distance, Attenuation & Hearing** 🎯`,
      exercise: {
        questions: [
          {
            question: `A jackhammer produces a sound level of $100\\;\\text{dB}$ at a distance of $10\\;\\text{m}$. Treating it as a point source and ignoring absorption, what is the level at $100\\;\\text{m}$?`,
            options: [`$90\\;\\text{dB}$`, `$80\\;\\text{dB}$`, `$10\\;\\text{dB}$`, `$50\\;\\text{dB}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Ten times the distance gives $1/10^2 = 1/100$ of the intensity, which is two factors of ten, or $-20\\;\\text{dB}$: $80\\;\\text{dB}$. $90\\;\\text{dB}$ treats intensity as falling with $1/r$ instead of $1/r^2$. Dividing the level by ten ($10\\;\\text{dB}$) or halving it ($50\\;\\text{dB}$) treats decibels as if they were intensities.`
          },
          {
            question: `An audiogram (a chart of hearing thresholds across frequencies) shows that a patient's hearing threshold at $4\\;\\text{kHz}$ is $40\\;\\text{dB}$, while a typical young adult's is $0\\;\\text{dB}$. To be just audible to this patient, how intense must a $4\\;\\text{kHz}$ tone be, compared with the typical threshold?`,
            options: [`$4$ times as intense`, `$40$ times as intense`, `$10\\,000$ times as intense`, `$400$ times as intense`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A $40\\;\\text{dB}$ difference is four factors of ten: $10^{4}$ times the intensity, or $10^{-8}\\;\\text{W/m}^2$. The values $4$ and $40$ treat the decibel difference as a direct multiplier, and $400$ multiplies the decibels by 10 instead of dividing them by 10 to get the exponent. High frequencies like $4\\;\\text{kHz}$ are typically the first lost to age and noise.`
          },
          {
            question: `A tuning fork is struck harder, so its prongs vibrate with a larger amplitude at the same rate. Compared with a gentle strike, the tone is:`,
            options: [`Louder, with a higher pitch`, `Equally loud, with a higher pitch`, `Louder, with a lower pitch`, `Louder, at the same pitch`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Amplitude sets intensity, which we hear as loudness. Pitch follows frequency, which is fixed by the fork's natural frequency and does not depend on how hard it is struck. Linking a bigger amplitude to a change in pitch, up or down, confuses the two properties.`
          },
          {
            question: `A thunderclap close by sounds like a sharp crack, but the same thunder heard several kilometres away is a low rumble. Which statement best explains the difference?`,
            options: [`Air absorbs higher frequencies more strongly as sound travels`, `Low frequencies travel faster, so they reach a distant listener first`, `The inverse-square law weakens the high frequencies more than the low`, `The frequency of each component falls steadily as the sound travels`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Attenuation by absorption grows with frequency, so over long distances the high-frequency components fade and the low ones remain. In air, all audible frequencies travel at the same speed, and inverse-square spreading is pure geometry that dims every frequency equally. A wave's frequency is set by its source and does not drift as it travels.`
          }
        ]
      }
    },
    {
      id: 'ws3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Inverse-square law.** A point source gives $I = P/(4\\pi r^2)$, so doubling the distance cuts the intensity to $1/4$.
- **The decibel scale.** $\\beta = 10\\log(I/I_0)$, $I_0 = 10^{-12}\\;\\text{W/m}^2$; each $+10\\;\\text{dB}$ is $\\times 10$ intensity, $+3\\;\\text{dB}$ about $\\times 2$.
- **Attenuation.** Absorption adds to spreading and is stronger at higher frequencies, so distant sounds lose their treble.
- **Pitch, loudness, timbre.** Pitch follows frequency, loudness intensity, timbre the harmonic mix; hearing spans $20\\;\\text{Hz}$ to $20\\;\\text{kHz}$.

**Common traps**

- **Adding decibels.** Two $70\\;\\text{dB}$ sources double the intensity: about $73\\;\\text{dB}$, never $140$.
- **Taking a ratio of levels.** From $40$ to $70\\;\\text{dB}$ is $\\times 1000$ in intensity, not $\\times 70/40$.
- **Dropping the square.** Intensity falls as $1/r^2$: ten times farther is $1/100$ the intensity, or $-20\\;\\text{dB}$.
- **Louder means higher.** A bigger amplitude makes a sound louder at the same pitch; pitch follows frequency alone.

<!-- yield:low -->
- Low-yield extras: the $85\\;\\text{dB}$ occupational exposure guideline; the attenuation coefficient of soft tissue.
<!-- /yield -->`
    }
  ]
}
