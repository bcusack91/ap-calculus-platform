import type { LessonData } from './registry'

export const wavesInterferenceMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-waves-interference-mcat',
  sections: [
    {
      id: 'ws2-intro',
      type: 'text' as const,
      content: `# Waves & Interference

**Part 2 of 2 — Superposition, Interference & Standing Waves**

**Building on Part 1.** Part 1 of this lesson covered oscillations, simple harmonic motion and the basics of waves. This part shows what happens when waves overlap: superposition, path difference, beats, standing waves and resonance.

### Superposition: Overlapping Waves Simply Add

When two waves pass through the same point at the same time, the medium's displacement there is the SUM of the displacements each wave would cause alone. This is the **principle of superposition**. Displacements carry signs: a crest is positive, a trough negative. After the overlap, each wave continues on exactly as before, unchanged by the meeting.

- **Constructive interference**: the waves arrive **in phase** (crest on crest). The amplitudes add: $A_1 + A_2$.
- **Destructive interference**: the waves arrive **$180^\\circ$ out of phase** (crest on trough). The amplitudes subtract: $|A_1 - A_2|$. Equal amplitudes cancel completely at that point.
- Any other phase difference gives an amplitude somewhere in between.

Energy is not destroyed where waves cancel. It is redistributed: the quiet spots are matched by loud spots elsewhere, where the same waves reinforce.

### Path Difference Decides the Phase

Two speakers driven by the same signal start out in phase. A listener hears them in or out of phase depending on how much farther one sound has travelled. Call the **path difference** $\\Delta d = |d_1 - d_2|$, where $d_1$ and $d_2$ are the listener's distances from the two speakers.

| Path difference | Phase difference | Result |
|---|---|---|
| $0, \\lambda, 2\\lambda, \\ldots$ (a whole number of wavelengths) | $0^\\circ$, $360^\\circ, \\ldots$ | constructive: loud |
| $\\tfrac{1}{2}\\lambda, \\tfrac{3}{2}\\lambda, \\ldots$ (an odd number of half-wavelengths) | $180^\\circ$, $540^\\circ, \\ldots$ | destructive: quiet |

Always convert the path difference into WAVELENGTHS before deciding. A path difference of $0.5\\;\\text{m}$ is destructive if $\\lambda = 1.0\\;\\text{m}$ (half a wavelength); if $\\lambda = 0.5\\;\\text{m}$ it is one full wavelength, and the sound is loud.

**Noise-cancelling headphones** put this to work. A microphone samples the incoming noise, and the speaker plays a copy with the same frequency and amplitude, shifted by half a cycle. The two cancel at the ear. The same rules govern light's interference patterns, which belong to the *Optics* lesson.

### Beats

Play two tones of slightly different frequencies, $f_1$ and $f_2$, together. They drift in and out of phase, so the loudness swells and fades in a regular throb. The number of throbs per second is the **beat frequency**:

$$f_{\\text{beat}} = |f_1 - f_2|$$

The pitch you hear is the average of the two frequencies, and it pulses in loudness.

### Worked Example — Tuning by Beats

**Problem.** A tuner sounds a $440\\;\\text{Hz}$ tuning fork together with a string and hears $3$ beats per second. Tightening a string raises its frequency.

- **(a)** What frequency could the string have?
- **(b)** She tightens the string slightly. What does it mean if the beats get SLOWER, and what if they get FASTER?
- **(c)** How does she know when the string is in tune?

**(a) Two candidates.** $f_{\\text{beat}} = |f_1 - f_2| = 3\\;\\text{Hz}$, so the string is at either $437$ or $443\\;\\text{Hz}$; the beats alone cannot say which.

**(b) Change it and listen.** Tightening raises the string's frequency. If the beats slow down, the string is approaching $440$: it was flat ($437\\;\\text{Hz}$). If they speed up, it is moving away: it was sharp ($443\\;\\text{Hz}$).

**(c) In tune.** When the beats vanish, the frequencies match.`
    },
    {
      id: 'ws2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Superposition, Interference & Beats** 🎯`,
      exercise: {
        questions: [
          {
            question: `Two pulses travel toward each other on a rope. One is an upright pulse of height $3\\;\\text{cm}$; the other is an inverted pulse of depth $1\\;\\text{cm}$. What is the rope's displacement at the moment they exactly overlap, and what happens afterward?`,
            options: [`$+4\\;\\text{cm}$; then both continue unchanged`, `$+2\\;\\text{cm}$; then they travel on as one pulse`, `$+2\\;\\text{cm}$; then both continue unchanged`, `$+4\\;\\text{cm}$; then they travel on as one pulse`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Displacements add with their signs: $+3 + (-1) = +2\\;\\text{cm}$. Superposition is temporary, so after the overlap each pulse emerges with its original shape and keeps going. A value of $+4\\;\\text{cm}$ ignores that the second pulse is inverted, and "one pulse" wrongly treats the overlap as a permanent merger.`
          },
          {
            question: `Two speakers driven in phase emit a $680\\;\\text{Hz}$ tone ($v = 340\\;\\text{m/s}$). At which listener position, given as the distances to the two speakers, is the sound quietest?`,
            options: [`$2.00\\;\\text{m}$ and $2.00\\;\\text{m}$`, `$2.00\\;\\text{m}$ and $2.50\\;\\text{m}$`, `$2.00\\;\\text{m}$ and $3.00\\;\\text{m}$`, `$2.00\\;\\text{m}$ and $2.75\\;\\text{m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The wavelength is $340/680 = 0.50\\;\\text{m}$. A path difference of $0.75\\;\\text{m}$ is $1.5\\lambda$, an odd number of half-wavelengths, so the waves cancel. A $0.50\\;\\text{m}$ difference looks like "half" but is one full wavelength, and $1.00\\;\\text{m}$ is two wavelengths; both are loud, as is the equidistant point with no path difference.`
          },
          {
            question: `Noise-cancelling headphones reduce a steady engine drone. Compared with the drone arriving at the ear, the sound the headphones play has:`,
            options: [`The same frequency and amplitude, but shifted by half a cycle`, `The same frequency, but twice the amplitude, in step with it`, `A frequency a few hertz higher, so the two beat and fade`, `A much larger amplitude, so the drone is drowned out`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Cancellation needs crest meeting trough at every instant: equal frequency and amplitude, $180^\\circ$ out of phase. An in-step sound of any amplitude interferes constructively and makes the drone louder. A slightly different frequency produces beats, a throbbing sound rather than silence, and a louder masking sound adds noise instead of removing it.`
          },
          {
            question: `A piano tuner sounds a $440\\;\\text{Hz}$ tuning fork together with a piano string and hears $4$ beats per second. She tightens the string slightly, and the beats slow down. What was the string's frequency before she tightened it?`,
            options: [`$444\\;\\text{Hz}$`, `$436\\;\\text{Hz}$`, `$440\\;\\text{Hz}$`, `$448\\;\\text{Hz}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Four beats per second puts the string at $436$ or $444\\;\\text{Hz}$. Tightening raises its frequency, and the beats slowed, so the string moved closer to $440$: it started at $436\\;\\text{Hz}$. Choosing $444\\;\\text{Hz}$ assumes tightening lowers the pitch. Beats mean the two frequencies differ, which rules out $440\\;\\text{Hz}$, and $448\\;\\text{Hz}$ wrongly doubles the beat frequency.`
          }
        ]
      }
    },
    {
      id: 'ws2-standing',
      type: 'text' as const,
      content: `### Superposition and Standing Waves

Send a wave down a string fixed at the far end and it reflects back. The outgoing and returning waves, identical but travelling in opposite directions, superpose into a **standing wave**: a pattern that oscillates in place instead of travelling.

- **Nodes** are points that never move; the two waves always cancel there.
- **Antinodes** are points that oscillate with the greatest amplitude, midway between nodes.
- Adjacent nodes are $\\lambda/2$ apart; a node and the next antinode are $\\lambda/4$ apart.

Only certain wavelengths fit a given length, because the ends force a node or an antinode. Each allowed pattern is a **harmonic**. The lowest-frequency one is the **fundamental**, or first harmonic ($f_1$), and the $n$th harmonic has frequency $nf_1$.

- **String fixed at both ends**: both ends are nodes, so the string must hold a whole number of half-wavelengths: $L = n\\lambda/2$.
- **Pipe open at both ends**: air at an open end moves freely, so both ends are displacement antinodes. Antinode to antinode also fits whole half-wavelengths: $L = n\\lambda/2$.
- **Pipe closed at one end**: the closed end is a displacement node (air cannot move into a wall), and the open end is an antinode. Node to antinode fits an ODD number of quarter-wavelengths: $L = n\\lambda/4$ with $n = 1, 3, 5, \\ldots$

| System | Ends (displacement) | Allowed $n$ | $\\lambda_n$ | $f_n$ |
|---|---|---|---|---|
| String fixed at both ends | node, node | all: $1, 2, 3, \\ldots$ | $\\dfrac{2L}{n}$ | $\\dfrac{nv}{2L}$ |
| Pipe open at both ends | antinode, antinode | all: $1, 2, 3, \\ldots$ | $\\dfrac{2L}{n}$ | $\\dfrac{nv}{2L}$ |
| Pipe closed at one end | node, antinode | odd only: $1, 3, 5, \\ldots$ | $\\dfrac{4L}{n}$ | $\\dfrac{nv}{4L}$ |

Four things to remember:

- **The closed pipe has no even harmonics.** Its resonances are $f_1, 3f_1, 5f_1, \\ldots$, so consecutive resonances differ by $2f_1$. For strings and open pipes, consecutive resonances differ by $f_1$.
- **Overtones** are the harmonics above the fundamental. The first overtone is the 2nd harmonic for strings and open pipes, but the 3rd harmonic for a closed pipe.
- **A closed pipe's fundamental is half that of an open pipe of the same length**: its fundamental wavelength is $4L$ rather than $2L$.
- **$v$ is the speed in the vibrating medium.** For a string, it is the wave speed on the string, $\\sqrt{F_T/\\mu}$. The sound the string sends into the air has the SAME frequency but a different wavelength, because air carries it at $343\\;\\text{m/s}$ (Part 1 of this lesson: the source sets $f$, the medium sets $v$).

A passage may describe pipes by pressure instead of displacement. The two are swapped: an open end is a pressure node (it stays at room pressure), and a closed end is a pressure antinode. The harmonic formulas are the same.

### Resonance, Natural Frequency & Damping

The harmonics of an object are its **natural frequencies**. Push an object periodically at one of them and each push arrives in phase with the motion, so the amplitude builds up dramatically. That build-up is **resonance**.

- A child on a swing goes higher when pushed once per swing, at the swing's natural frequency.
- A singer holding the natural frequency of a wine glass can make it vibrate hard enough to shatter.
- **The ear canal is a pipe closed at one end** (open to the air, closed by the eardrum). About $2.5\\;\\text{cm}$ long, it resonates near $v/4L = 340/0.10 = 3400\\;\\text{Hz}$, which helps explain why human hearing is most sensitive at roughly $2$ to $5\\;\\text{kHz}$.

**Damping** is the gradual loss of a vibration's energy to friction, viscosity or absorption, so its amplitude dies away. A heavily damped system resonates less sharply: its amplitude at resonance is smaller. Damping of sound travelling through a medium is called attenuation, covered in the *Sound, Doppler & Ultrasound* lesson.`
    },
    {
      id: 'ws2-worked',
      type: 'text' as const,
      content: `### Worked Example — Pipes, Strings and Tuning

**Problem 1 — A closed organ pipe.** A pipe $0.85\\;\\text{m}$ long is closed at one end ($v = 340\\;\\text{m/s}$).

- **(a)** What is its fundamental frequency?
- **(b)** What are the next two resonances above it?
- **(c)** What are the fundamental and the resonance series of an open pipe of the same length?

**(a) Fundamental.** A closed pipe holds a quarter-wavelength: $\\lambda_1 = 4L = 3.4\\;\\text{m}$, so $f_1 = v/4L = 340/3.4 = 100\\;\\text{Hz}$.

**(b) Next resonances.** Even harmonics are missing, so the next is the THIRD: $f_3 = 300\\;\\text{Hz}$, then $f_5 = 500\\;\\text{Hz}$.

**(c) Compare an open pipe.** $f_1 = v/2L = 340/1.7 = 200\\;\\text{Hz}$, with the full series $200, 400, 600\\;\\text{Hz}$. Against the closed pipe's $100, 300, 500\\;\\text{Hz}$: capping one end halves the fundamental and deletes every even harmonic.

**Problem 2 — A guitar string.** A string $0.50\\;\\text{m}$ long carries waves at $200\\;\\text{m/s}$. Sound travels at $340\\;\\text{m/s}$ in the surrounding air.

- **(a)** What is the string's fundamental frequency?
- **(b)** What are the third harmonic's frequency and wavelength, and how many antinodes and nodes does it show?
- **(c)** When the fundamental reaches your ear, what are its frequency and wavelength in the air?

**(a) Fundamental.** $\\lambda_1 = 2L = 1.0\\;\\text{m}$, so $f_1 = 200/1.0 = 200\\;\\text{Hz}$.

**(b) Third harmonic.** $f_3 = 600\\;\\text{Hz}$ and $\\lambda_3 = 2L/3 \\approx 0.33\\;\\text{m}$. The string shows three antinodes ("loops") and four nodes, counting both fixed ends.

**(c) The sound in the air.** The fundamental reaches your ear at $200\\;\\text{Hz}$, but its wavelength in air is $340/200 = 1.7\\;\\text{m}$, not the string's $1.0\\;\\text{m}$. Frequency carries over; wavelength does not.

**Problem 3 — Identify a mystery tube.** A tube's two consecutive resonances are $150\\;\\text{Hz}$ and $250\\;\\text{Hz}$.

- **(a)** What is the gap between consecutive resonances?
- **(b)** Could the tube be open at both ends?
- **(c)** Could it be closed at one end, and if so, what is its fundamental?

**(a) The gap.** Consecutive resonances differ by $250 - 150 = 100\\;\\text{Hz}$.

**(b) Test an open tube.** If open, the $100\\;\\text{Hz}$ gap from (a) equals $f_1$, so every resonance would be a multiple of $100$; but $150$ is not. It is not open at both ends.

**(c) Test a closed tube.** If closed, the gap is $2f_1$, so $f_1 = 50\\;\\text{Hz}$, and $150 = 3f_1$, $250 = 5f_1$. Both odd: the tube is closed at one end.`
    },
    {
      id: 'ws2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Standing Waves & Resonance** 🎯`,
      exercise: {
        questions: [
          {
            question: `A string fixed at both ends vibrates in its third harmonic. Counting both ends, how many nodes does the pattern have, and what is the wavelength in terms of the string's length $L$?`,
            options: [`$3$ nodes; $\\lambda = 2L/3$`, `$4$ nodes; $\\lambda = 2L/3$`, `$4$ nodes; $\\lambda = 3L/2$`, `$3$ nodes; $\\lambda = 3L/2$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The third harmonic fits three half-wavelengths: $L = 3\\lambda/2$, so $\\lambda = 2L/3$. Three loops need four nodes, the two ends plus two between. Counting three nodes confuses nodes with loops (antinodes), and $3L/2$ inverts the relationship between $L$ and $\\lambda$.`
          },
          {
            question: `A passage reports that a tube's two consecutive resonant frequencies are $300\\;\\text{Hz}$ and $500\\;\\text{Hz}$, with no resonance between them. Which description of the tube fits?`,
            options: [`Open at both ends; fundamental $200\\;\\text{Hz}$`, `Open at both ends; fundamental $100\\;\\text{Hz}$`, `Closed at one end; fundamental $200\\;\\text{Hz}$`, `Closed at one end; fundamental $100\\;\\text{Hz}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Closed at one end with $f_1 = 100\\;\\text{Hz}$ gives odd harmonics $100, 300, 500\\;\\text{Hz}$, matching both values with nothing between. An open tube with $f_1 = 200\\;\\text{Hz}$ resonates at multiples of $200$, which excludes $300$; with $f_1 = 100\\;\\text{Hz}$ it would also resonate at $400\\;\\text{Hz}$, between the two. A closed tube with $f_1 = 200\\;\\text{Hz}$ resonates at $200$ and $600\\;\\text{Hz}$, not $300$.`
          },
          {
            question: `An organ pipe open at both ends has a fundamental of $260\\;\\text{Hz}$. One end is then capped, with the length unchanged. What are the capped pipe's fundamental and the next resonance above it?`,
            options: [`$130\\;\\text{Hz}$ and $390\\;\\text{Hz}$`, `$130\\;\\text{Hz}$ and $260\\;\\text{Hz}$`, `$520\\;\\text{Hz}$ and $1560\\;\\text{Hz}$`, `$520\\;\\text{Hz}$ and $1040\\;\\text{Hz}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Capping changes the fundamental wavelength from $2L$ to $4L$, halving the frequency to $130\\;\\text{Hz}$. A closed pipe has only odd harmonics, so the next resonance is $3 \\times 130 = 390\\;\\text{Hz}$. Pairing $130$ with $260\\;\\text{Hz}$ forgets that the second harmonic is missing, and the $520\\;\\text{Hz}$ options double the fundamental instead of halving it.`
          },
          {
            question: `A patient's ear canal behaves like a pipe $3.0\\;\\text{cm}$ long, open to the air at one end and closed by the eardrum at the other. Taking $v = 340\\;\\text{m/s}$, what is its lowest resonant frequency?`,
            options: [`About $5.7\\;\\text{kHz}$`, `About $11.3\\;\\text{kHz}$`, `About $2.8\\;\\text{kHz}$`, `About $8.5\\;\\text{kHz}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A pipe closed at one end has $f_1 = v/4L = 340/(4 \\times 0.030) = 340/0.12 \\approx 2800\\;\\text{Hz}$: a longer canal resonates lower than the typical $3.4\\;\\text{kHz}$. $5.7\\;\\text{kHz}$ uses the open-pipe formula $v/2L$, and $11.3\\;\\text{kHz}$ drops the 4 entirely ($v/L$). $8.5\\;\\text{kHz}$ is a real resonance of the canal, but it is the third harmonic ($3f_1$), not the lowest.`
          }
        ]
      }
    },
    {
      id: 'ws2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Interference.** Displacements add with signs; whole wavelengths of path difference are loud, odd half-wavelengths quiet.
- **Beats.** Two close tones throb at $f_{\\text{beat}} = |f_1 - f_2|$; tighten or loosen and listen to tell which side you are on.
- **Standing waves.** Strings and open pipes: $f_n = nv/2L$, every $n$; a pipe closed at one end: $f_n = nv/4L$, odd $n$ only.
- **Resonance.** Driving at a natural frequency builds large amplitude; the ear canal, a closed pipe, resonates near $3.4\\;\\text{kHz}$.

**Common traps**

- **Metres instead of wavelengths.** Convert the path difference first: $0.5\\;\\text{m}$ is quiet if $\\lambda = 1.0\\;\\text{m}$, loud if $\\lambda = 0.5\\;\\text{m}$.
- **Counting loops as nodes.** The $n$th harmonic on a string has $n$ loops but $n + 1$ nodes, counting both fixed ends.
- **Even harmonics in a closed pipe.** A closed pipe has only odd harmonics, and its fundamental wavelength is $4L$, not $2L$.
- **The string's wavelength in air.** The sound keeps the string's frequency, but air carries it at its own speed, so $\\lambda$ changes.

**Next up:** the *Sound, Doppler & Ultrasound* lesson, which covers sound intensity, decibels and hearing, then the Doppler effect, ultrasound and shock waves.`
    }
  ]
}
