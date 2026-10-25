const gspWaveFigure = {
  svg: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="72" y1="35" x2="72" y2="185"/><line x1="104" y1="35" x2="104" y2="185"/><line x1="136" y1="35" x2="136" y2="185"/><line x1="168" y1="35" x2="168" y2="185"/><line x1="200" y1="35" x2="200" y2="185"/><line x1="232" y1="35" x2="232" y2="185"/><line x1="264" y1="35" x2="264" y2="185"/><line x1="296" y1="35" x2="296" y2="185"/><line x1="40" y1="35" x2="296" y2="35"/><line x1="40" y1="60" x2="296" y2="60"/><line x1="40" y1="85" x2="296" y2="85"/><line x1="40" y1="135" x2="296" y2="135"/><line x1="40" y1="160" x2="296" y2="160"/><line x1="40" y1="185" x2="296" y2="185"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="40" y1="110" x2="302" y2="110"/><line x1="40" y1="190" x2="40" y2="28"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="200">0</text><text x="72" y="200">1</text><text x="104" y="200">2</text><text x="136" y="200">3</text><text x="168" y="200">4</text><text x="200" y="200">5</text><text x="232" y="200">6</text><text x="264" y="200">7</text><text x="296" y="200">8</text><text x="168" y="222">Distance along the rope (meters)</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="39">3</text><text x="34" y="64">2</text><text x="34" y="89">1</text><text x="34" y="114">0</text><text x="34" y="139">−1</text><text x="34" y="164">−2</text><text x="34" y="189">−3</text></g><text x="12" y="110" font-size="11" fill="currentColor" text-anchor="middle" transform="rotate(-90 12 110)">Height (cm)</text><g class="fig-accent"><polyline points="40.0,110.0 43.2,102.2 46.4,94.5 49.6,87.3 52.8,80.6 56.0,74.6 59.2,69.5 62.4,65.4 65.6,62.4 68.8,60.6 72.0,60.0 75.2,60.6 78.4,62.4 81.6,65.4 84.8,69.5 88.0,74.6 91.2,80.6 94.4,87.3 97.6,94.5 100.8,102.2 104.0,110.0 107.2,117.8 110.4,125.5 113.6,132.7 116.8,139.4 120.0,145.4 123.2,150.5 126.4,154.6 129.6,157.6 132.8,159.4 136.0,160.0 139.2,159.4 142.4,157.6 145.6,154.6 148.8,150.5 152.0,145.4 155.2,139.4 158.4,132.7 161.6,125.5 164.8,117.8 168.0,110.0 171.2,102.2 174.4,94.5 177.6,87.3 180.8,80.6 184.0,74.6 187.2,69.5 190.4,65.4 193.6,62.4 196.8,60.6 200.0,60.0 203.2,60.6 206.4,62.4 209.6,65.4 212.8,69.5 216.0,74.6 219.2,80.6 222.4,87.3 225.6,94.5 228.8,102.2 232.0,110.0 235.2,117.8 238.4,125.5 241.6,132.7 244.8,139.4 248.0,145.4 251.2,150.5 254.4,154.6 257.6,157.6 260.8,159.4 264.0,160.0 267.2,159.4 270.4,157.6 273.6,154.6 276.8,150.5 280.0,145.4 283.2,139.4 286.4,132.7 289.6,125.5 292.8,117.8 296.0,110.0" fill="none" stroke="currentColor" stroke-width="2.5"/></g></svg>',
  alt: 'A transverse wave on a rope. The horizontal axis is distance along the rope in meters, from 0 to 8, with gridlines every 1 meter. The vertical axis is height in centimeters, from −3 to 3, with gridlines every 1 centimeter. The wave starts at height 0 at 0 m, reaches a crest of +2 cm at 1 m, returns to 0 at 2 m, reaches a trough of −2 cm at 3 m, returns to 0 at 4 m, and then repeats the same shape: crest at 5 m, zero at 6 m, trough at 7 m, zero at 8 m. Two full cycles are shown.',
  caption: 'Figure 1. A snapshot of a wave traveling along a rope.',
  size: 'md' as const,
}

export const asvabGsPhysicsPart4Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp4-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 4 of 7 — Waves, Sound and Light**

### Anatomy of a Wave

A **wave** carries **energy** from place to place without carrying matter along with it. A cork on a pond bobs up and down as waves pass, but it does not travel across the pond.

| Term | Meaning |
|:---|:---|
| **Crest** | The highest point of a wave |
| **Trough** | The lowest point |
| **Wavelength** ($\\lambda$) | The distance from one crest to the next (one full cycle) |
| **Amplitude** | The height from the **rest line** to a crest (NOT crest to trough) |
| **Frequency** ($f$) | How many waves pass a point each second, in **hertz (Hz)** |
| **Period** | The time for one full wave; period = 1 ÷ frequency |

### The wave equation

$$v = f\\lambda$$

Wave speed = frequency × wavelength.

**Example 1.** A wave has a frequency of 5 Hz and a wavelength of 2 m. Speed = 5 × 2 = **10 m/s**.

**Example 2.** A wave travels at 12 m/s with a wavelength of 3 m. Frequency = 12 ÷ 3 = **4 Hz**, and its period is 1/4 second.

> **Key Fact:** For waves moving at the same speed, **higher frequency means shorter wavelength**. Frequency and wavelength trade off.

### Two kinds of waves

| Type | How the medium moves | Examples |
|:---|:---|:---|
| **Transverse** | **Perpendicular** (at right angles) to the wave's direction | Light, a wave on a rope, ripples on water |
| **Longitudinal** (compression) | **Back and forth along** the wave's direction | **Sound**, a pushed Slinky |`
    },
    {
      id: 'gsp4-figure-mc',
      type: 'multiple-choice' as const,
      figure: gspWaveFigure,
      content: '**Read the wave.** 🌊 Use Figure 1.',
      exercise: {
        questions: [
          {
            question: 'What is the wavelength of this wave?',
            options: ['4 m', '2 m', '8 m', '1 m'],
            correctAnswer: 0,
            explanation: 'One full cycle runs from 0 m to 4 m (crest at 1 m, the next crest at 5 m: also 4 m apart). 2 m is only half a cycle, and 8 m is two full cycles.'
          },
          {
            question: 'What is the amplitude of this wave?',
            options: ['2 cm', '4 cm', '1 cm', '3 cm'],
            correctAnswer: 0,
            explanation: 'Amplitude is measured from the rest line (0) to a crest: 2 cm. The crest-to-trough height of 4 cm is twice the amplitude, a common trap.'
          },
          {
            question: 'The wave in Figure 1 has a frequency of 3 Hz. What is its speed?',
            options: ['12 m/s', '6 m/s', '7 m/s', '24 m/s'],
            correctAnswer: 0,
            explanation: 'v = fλ = 3 Hz × 4 m = 12 m/s. Using half the wavelength gives 6 m/s, and using two cycles (8 m) gives 24 m/s.'
          }
        ]
      }
    },
    {
      id: 'gsp4-sound',
      type: 'text' as const,
      content: `## Sound

Sound is a **longitudinal** wave of compressions and spread-out regions in a material. It **needs a medium** (air, water, a solid), so **sound cannot travel through a vacuum** such as outer space.

| Medium | Speed of sound (about) |
|:---|:---|
| Air (room temperature) | 343 m/s (about 1,125 ft/s) |
| Water | 1,500 m/s |
| Steel | 5,000 m/s or more |

Sound is **slowest in gases and fastest in solids**, the opposite of what many people guess.

| What you hear | What causes it |
|:---|:---|
| **Pitch** (high or low) | **Frequency**: higher frequency = higher pitch |
| **Loudness** | **Amplitude**: bigger amplitude = louder; measured in **decibels (dB)** |
| **Echo** | Sound **reflecting** off a surface |

- Humans hear roughly **20 Hz to 20,000 Hz**. Above that is **ultrasound** (used for medical imaging and sonar); below it is infrasound.
- **Sonar** times an echo to find distance. If a ping returns in 2 seconds, the sound went out and back, so the object is **1 second's travel** away.
- **Doppler effect:** a source moving **toward** you sounds **higher** in pitch; moving **away**, **lower**. An ambulance siren drops in pitch as it passes.

**Example 3.** You see lightning and hear the thunder 3 seconds later. Sound covers about 343 m each second, so the strike is about 3 × 343 ≈ **1,000 m (1 km)** away. (Rule of thumb: about 5 seconds per mile.)`
    },
    {
      id: 'gsp4-light',
      type: 'text' as const,
      content: `## Light and the Electromagnetic Spectrum

Light is an **electromagnetic (EM) wave**. EM waves are transverse and **need no medium**: they cross empty space. In a vacuum all of them travel at the **speed of light, about 300,000 km/s (186,000 miles per second)**, nearly a million times faster than sound in air.

### The spectrum, from long wavelength to short

| Wave | Common use | |
|:---|:---|:---|
| **Radio** | Radio, TV, cell signals | longest wavelength, lowest frequency, lowest energy |
| **Microwave** | Microwave ovens, radar | |
| **Infrared** | Heat lamps, TV remotes, night vision | |
| **Visible light** | What you see: **ROY G BIV** | red is longest, violet shortest |
| **Ultraviolet (UV)** | Causes sunburn | |
| **X-ray** | Medical images of bones | |
| **Gamma ray** | Cancer treatment; from radioactive decay | shortest wavelength, highest frequency, highest energy |

**Mnemonic:** **R**aging **M**artians **I**nvaded **V**enus **U**sing **X**-ray **G**uns.

**ROY G BIV** = red, orange, yellow, green, blue, indigo, violet.

### What light does

| Behavior | Meaning | Example |
|:---|:---|:---|
| **Reflection** | Light bounces off a surface; angle in = angle out | A mirror |
| **Refraction** | Light **bends** when it passes from one material into another and changes speed | A straw looks bent in water; a prism splits white light into colors |
| **Absorption** | Light energy is taken in, often warming the object | A black shirt gets hot in the sun |

**Lenses.** A **convex** lens (thicker in the middle) bends light **together** to a focus: magnifying glasses, and glasses for farsightedness. A **concave** lens (thinner in the middle) spreads light **apart**: glasses for nearsightedness.

**Color.** White light is a mix of all colors. An object looks red because it **reflects red** and absorbs the other colors. A white object reflects all colors; a black object absorbs them all.`
    },
    {
      id: 'gsp4-mc',
      type: 'multiple-choice' as const,
      content: '**Sound and light.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Astronauts on a spacewalk cannot hear each other without radios. Why?',
            options: ['Sound needs a medium, and space is a vacuum', 'Sound moves too slowly to cross open space', 'Their helmets reflect every sound wave', 'Cold temperatures stop sound vibrations'],
            correctAnswer: 0,
            explanation: 'Sound is a vibration of matter. Space has almost no matter to vibrate, so sound cannot travel there. Radios work because radio waves are electromagnetic and need no medium.'
          },
          {
            question: 'Which type of electromagnetic wave has the highest frequency?',
            options: ['Gamma rays', 'Radio waves', 'Visible light', 'Microwaves'],
            correctAnswer: 0,
            explanation: 'The spectrum runs radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Gamma rays sit at the end with the shortest wavelength and highest frequency; radio waves have the lowest.'
          },
          {
            question: 'A guitar string is tightened so that it vibrates faster. What happens to the sound?',
            options: ['The pitch gets higher', 'The sound gets louder', 'The pitch gets lower', 'The sound travels faster'],
            correctAnswer: 0,
            explanation: 'Faster vibration means higher frequency, and frequency sets pitch. Loudness depends on amplitude, and the speed of sound depends on the air, not on the string.'
          },
          {
            question: 'A pencil standing in a glass of water looks broken at the water\'s surface. What causes this?',
            options: ['Refraction', 'Reflection', 'Absorption', 'Diffraction'],
            correctAnswer: 0,
            explanation: 'Light changes speed as it passes from water into air, so it bends: refraction. Reflection is bouncing off a surface, as in a mirror.'
          }
        ]
      }
    },
    {
      id: 'gsp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Waves vocabulary.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Sound is an example of a:',
            options: ['longitudinal wave', 'transverse wave', 'electromagnetic wave', 'standing current'],
            correctAnswer: 0
          },
          {
            label: 'The loudness of a sound depends mainly on its:',
            options: ['amplitude', 'frequency', 'wavelength', 'speed'],
            correctAnswer: 0
          },
          {
            label: 'Sound travels fastest through:',
            options: ['steel', 'air', 'water', 'a vacuum'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['longitudinal wave', 'amplitude', 'steel'],
        hint1: 'Sound squeezes and spreads air along its direction of travel.',
        hint2: 'Pitch goes with frequency; the other property is height.',
        hint3: 'Sound is fastest where particles are packed most tightly.',
        explanation: 'Sound is a longitudinal (compression) wave. Its loudness depends on amplitude, measured in decibels. It travels fastest in solids such as steel, slower in water, slowest in air, and not at all in a vacuum.'
      }
    },
    {
      id: 'gsp4-input',
      type: 'input-boxes' as const,
      content: `**Wave math.** ✍️

**1)** A water wave has a frequency of 2 Hz and a wavelength of 6 m. What is its speed, in m/s?

**2)** A wave moves at 20 m/s and has a wavelength of 5 m. What is its frequency, in Hz?

**3)** A sonar ping returns to a ship 4 seconds after it was sent. Sound travels about 1,500 m/s in seawater. How deep is the sea floor, in meters?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '4', '3000'],
        hint1: 'v = f × λ.',
        hint2: 'f = v ÷ λ.',
        hint3: 'The 4 seconds covers the trip down AND back up.',
        explanation: '(1) 2 × 6 = 12 m/s. (2) 20 ÷ 5 = 4 Hz. (3) The ping takes 2 s to reach the bottom, so the depth is 1,500 × 2 = 3,000 m. Using all 4 seconds doubles the depth by mistake.'
      }
    },
    {
      id: 'gsp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Waves carry energy, not matter; wavelength = crest to crest, amplitude = rest line to crest
- $v = f\\lambda$; frequency in hertz; period = 1 ÷ frequency
- Transverse: light, rope waves. Longitudinal: **sound**
- Sound needs a medium: fastest in solids, slowest in gases, none in a vacuum; about 343 m/s in air
- Pitch = frequency, loudness = amplitude (decibels); Doppler: approaching sounds higher
- Light: about 300,000 km/s, needs no medium; spectrum **radio, microwave, infrared, visible, UV, X-ray, gamma** (long → short wavelength, low → high energy)
- ROY G BIV; reflection bounces, refraction bends; convex lens converges, concave lens spreads

> **Up Next:** Part 5 — charges, magnets and electromagnets.`
    }
  ]
};
