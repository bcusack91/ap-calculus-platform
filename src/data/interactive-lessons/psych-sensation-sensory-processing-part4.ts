export const psychSensationPart4Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 4 of 7 — Hearing: From Sound Waves to Pitch**

> 🔑 **Key Concept:** Hearing (**audition**) turns air-pressure waves into fluid waves inside the **cochlea**, where **hair cells** on a membrane inside it transduce the motion into neural signals. Pitch is coded two ways: by **where** the membrane vibrates most (place) and by **how fast** neurons fire (frequency and volley).

### The stimulus: sound waves

| Physical property | Measured in | Psychological experience |
|---|---|---|
| **Wavelength**, and with it **frequency** (waves per second) | Frequency in hertz (Hz) | **Pitch**: shorter wavelength = higher frequency = higher pitch |
| **Amplitude** (wave height) | Decibels (dB) | **Loudness**: greater amplitude sounds louder |
| **Complexity** (mix of frequencies) | Pattern of overtones | **Timbre**: why a violin and a flute playing the same note sound different |

Wavelength and frequency are two descriptions of the same property: when waves are packed closer together (shorter wavelength), more of them pass each second (higher frequency). Young adults typically hear frequencies from about **20 to 20,000 Hz**; the upper limit drops with age. The decibel scale is logarithmic: every **10 dB** step is a **tenfold** increase in sound intensity. Normal conversation is around 60 dB, and long or repeated exposure above about **85 dB** can damage hair cells.

### The ear in three stages

| Region | What happens there | Why it matters for this topic |
|---|---|---|
| **Outer ear** | The visible ear and ear canal funnel sound to the **eardrum**, which vibrates | Blockage or eardrum damage weakens sound mechanically |
| **Middle ear** | Three tiny bones pass and amplify the eardrum's vibration | Fluid or stiff bones here also weaken sound mechanically |
| **Inner ear** | In the fluid-filled, snail-shaped **cochlea**, the vibration makes a membrane ripple and bends **hair cells**, which transduce it | Damage here or to the auditory nerve stops the signal |

From the auditory nerve, signals relay through the **thalamus** to the **auditory cortex** in the **temporal lobe**. The three stages matter mostly for one exam skill: deciding whether a hearing loss is **mechanical** (outer and middle ear) or **neural** (cochlea and nerve).
      `
    },
    {
      id: 'sensation-sensory-processing-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Sound and the Ear** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A singer holds the same note while getting steadily louder. Which property of the sound wave is changing?',
            options: [
              'Its amplitude',
              'Its frequency',
              'Its wavelength',
              'Its overtone mix'
            ],
            correctAnswer: 0,
            explanation: 'Loudness corresponds to amplitude, measured in decibels. Holding the same note keeps frequency, and so pitch, constant; overtone mix is what gives timbre.'
          },
          {
            question: 'Two tones have the same amplitude, but tone A has a much shorter wavelength than tone B. How will tone A sound compared with tone B?',
            options: [
              'Higher in pitch and equally loud',
              'Lower in pitch and equally loud',
              'Equal in pitch and noticeably louder',
              'Higher in pitch and noticeably louder'
            ],
            correctAnswer: 0,
            explanation: 'A shorter wavelength means a higher frequency, which is heard as a higher pitch; equal amplitude means equal loudness. Loudness depends on amplitude, not wavelength.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p4-s3-pitch',
      type: 'text' as const,
      content: `
### 🎵 How Is Pitch Coded? Three Theories

| Theory | Core idea | Best explains | Limitation |
|---|---|---|---|
| **Place theory** | Different frequencies cause peak vibration at different **places** along the membrane in the cochlea | **High** pitches | Low frequencies vibrate the membrane too broadly to pick out one place |
| **Frequency theory** | The whole membrane vibrates at the sound's frequency, and the auditory nerve fires at the **same rate** | **Low** pitches | A single neuron cannot fire much faster than about 1,000 times per second |
| **Volley principle** | Groups of neurons fire **in alternation**, so their combined output keeps pace with faster frequencies | Middle-range pitches, up to roughly 4,000–5,000 Hz | Still cannot reach the highest frequencies |

**Place details.** High frequencies produce peak vibration near the **base** of the cochlea (the end nearest the middle ear); low frequencies spread toward the far end, the **apex**. That is why noise damage, which tends to harm hair cells near the base, often robs people of high-pitched sounds first.

**Volley details.** Picture a squad of soldiers firing in turns. No soldier fires faster than he can reload, but the squad together produces a rapid stream of shots. Neurons sharing the load can mark a 3,000 Hz tone even though no single neuron fires 3,000 times a second.

### Worked example: which theory fits?

| Tone | Reasoning | Main coding |
|---|---|---|
| 100 Hz (low hum) | Neurons can fire 100 times per second | Frequency theory |
| 2,500 Hz (whistle) | Too fast for one neuron; groups can share it | Volley principle, with help from place |
| 12,000 Hz (high whine) | Far beyond any firing pattern | Place theory |

The modern view combines them: **frequency and volley coding for lower pitches, place coding for higher pitches**, with overlap in the middle.

### Locating a sound

With two ears, a sound off to one side reaches the **nearer ear slightly sooner** and **slightly louder** (the head blocks some of the sound to the far ear). The brain uses those small time and intensity differences to locate the source. A sound directly in front, behind or overhead reaches both ears at the same time and intensity, so its location is harder to judge; tilting the head breaks the tie.
      `
    },
    {
      id: 'sensation-sensory-processing-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Quick Recall — Hearing** ✍️

Type a single term.
      `,
      exercise: {
        questions: [
          {
            question: 'In what unit is the loudness (amplitude) of a sound measured?',
            answer: 'decibels',
            acceptableAnswers: ['decibel', 'dB', 'db'],
            explanation: 'Loudness is measured in decibels, a logarithmic scale on which each 10 dB step is a tenfold rise in intensity.'
          },
          {
            question: 'Which theory of pitch says that different pitches cause peak vibration at different locations in the cochlea?',
            answer: 'place',
            acceptableAnswers: ['place theory', 'the place theory'],
            explanation: 'Place theory codes pitch by location of peak vibration, and it explains high pitches best.'
          },
          {
            question: 'Which theory of pitch says neurons fire in alternating groups to keep up with fast frequencies?',
            answer: 'volley',
            acceptableAnswers: ['volley principle', 'volley theory', 'the volley principle'],
            explanation: 'The volley principle explains how staggered groups of neurons can track frequencies faster than any one neuron can fire.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p4-s5-loss',
      type: 'text' as const,
      content: `
### 🦻 Hearing Loss: Where Is the Break?

| Feature | **Conduction hearing loss** | **Sensorineural hearing loss** |
|---|---|---|
| Where the damage is | Outer or middle ear: the **mechanical** system | Inner ear (hair cells) or the **auditory nerve** |
| Example causes | Punctured eardrum, fluid in the middle ear, stiffened middle-ear bones, blocked ear canal | Loud-noise exposure, **aging**, some infections, inherited conditions |
| Sound reaching the cochlea | Weakened | Reaches it, but is not transduced or sent on |
| Typical help | Hearing aids that amplify; medical or surgical repair | Hearing aids for partial loss; **cochlear implants** for severe loss |

A **cochlear implant** uses a microphone and a small processor to turn sound into electrical signals that stimulate the auditory nerve directly, standing in for damaged hair cells. It works only if the auditory nerve itself is intact.

Why hair-cell damage matters: in humans, hair cells that die are **not replaced**. Noise damage builds up over years, which is why the 85 dB guideline focuses on duration as well as volume. **Aging** produces the same kind of gradual sensorineural loss, usually affecting high pitches first, which is why older adults often struggle with high voices and consonant sounds.

### Common mix-ups

| Mix-up | Correction |
|---|---|
| "Amplitude sets pitch." | Frequency sets pitch; amplitude sets loudness. |
| "The eardrum transduces sound." | The eardrum vibrates; **hair cells** transduce. |
| "Place theory explains all pitches." | Place fits **high** pitches best; frequency and volley fit **lower** ones. |
| "Every hearing loss is helped by a louder hearing aid." | Amplifying helps conduction loss most; severe sensorineural loss may need an implant. |

> 🔑 **AP Connection:** For a hearing-loss item, locate the break first. Before the cochlea means **conduction**; at the hair cells or nerve means **sensorineural**.
      `
    },
    {
      id: 'sensation-sensory-processing-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Hearing** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An audiologist finds that a 60-year-old carpenter who used power saws for decades without ear protection has lost hearing for high-pitched sounds while hearing for low sounds is close to normal. Which explanation fits best?',
            options: [
              'Conduction loss from a torn or scarred eardrum',
              'Conduction loss from stiff middle-ear bones',
              'Sensorineural loss from noise-damaged receptors',
              'Conduction loss from wax in the ear canal'
            ],
            correctAnswer: 2,
            explanation: 'Years of loud noise destroy hair cells in the cochlea, and the cells that code high pitches are usually lost first, which is sensorineural loss. Eardrum, bone or wax problems are mechanical conduction losses that muffle many frequencies.'
          },
          {
            question: 'A researcher measures auditory nerve firing as a listener hears a 200 Hz tone and finds that bursts of impulses occur about 200 times per second. Which theory do these data most directly support?',
            options: [
              'Place theory',
              'Frequency theory',
              'Opponent-process theory',
              'Trichromatic theory'
            ],
            correctAnswer: 1,
            explanation: 'Frequency theory holds that the nerve fires at a rate matching the tone\'s frequency, which is exactly what is observed for a low 200 Hz tone. Place theory would point to the location of peak vibration, not the firing rate.'
          },
          {
            question: 'A car horn sounds to Priya\'s left, and she immediately turns toward it. Which cue most likely let her locate the horn so quickly?',
            options: [
              'Her nearer ear got the honk slightly sooner and louder',
              'The horn\'s high pitch carried farther than a low pitch would',
              'The horn\'s loud amplitude reached both ears at the same time',
              'Her auditory cortex compared the horn to her memories of horns'
            ],
            correctAnswer: 0,
            explanation: 'Sound localization relies on small differences in arrival time and intensity between the two ears; the ear nearer the source gets the sound first and louder. Pitch, the overall loudness reaching both ears and memories of horns do not tell the brain which side a sound came from.'
          },
          {
            question: 'A child has repeated ear infections that leave fluid in the middle ear, muffling sounds of every pitch. Which type of hearing loss is this, and what help is most suitable?',
            options: [
              'Sensorineural loss, best helped by a cochlear implant',
              'Conduction loss, eased by draining the ear',
              'Sensorineural loss, best helped by a louder hearing aid',
              'Auditory nerve loss, best helped by a cochlear implant'
            ],
            correctAnswer: 1,
            explanation: 'Fluid in the middle ear blocks the mechanical transfer of vibration, which is conduction loss, and treating the fluid or amplifying sound usually helps. A cochlear implant replaces failed hair cells, which is not the problem here.'
          }
        ]
      }
    }
  ]
}
