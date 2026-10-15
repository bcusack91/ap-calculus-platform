export const psychPerceptionPart7Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce7-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 7 of 7 — Synthesis & AP Review**

This final part integrates everything from the unit into one comprehensive review.

### 🔧 Master Integration Table

| Concept | Key Idea | Researcher(s) | AP Trap to Avoid |
|---------|----------|---------------|------------------|
| Gestalt principles | We organize elements into meaningful patterns | Wertheimer et al. | Name the SPECIFIC principle, not just "Gestalt" |
| Top-down processing | Knowledge/expectations guide perception | — | Don't confuse with bottom-up (data → concept) |
| Bottom-up processing | Raw data builds up to recognition | Gibson | Don't say it requires no brain processing — it does |
| Binocular cues | Depth cues needing both eyes | — | Only 2: retinal disparity + convergence |
| Monocular cues | Depth cues needing one eye | — | The exam uses five: relative clarity, relative size, texture gradient, linear perspective, interposition |
| Visual cliff | Tests innate depth perception | Gibson & Walk (1960) | Can't prove depth perception is fully innate |
| Size constancy | Stable size despite distance | — | Different from relative size (depth cue) |
| Shape constancy | Stable shape despite angle | — | The retinal image DOES change — perception doesn't |
| Color constancy | Stable color despite lighting | — | Can fail in ambiguous conditions (The Dress) |
| Müller-Lyer | Arrow direction affects perceived line length | Müller-Lyer | Cultural experience affects susceptibility |
| Selective attention | Focusing while filtering | Cherry | Relevant words in unattended input can still capture attention (cocktail party effect) |
| Inattentional blindness | Missing visible stimuli when focused | Simons & Chabris (1999) | They ARE looking — just not consciously perceiving |
| Change blindness | Missing changes during disruptions | Simons & Levin (1998) | It's not about memory — the change is happening NOW |
| Perceptual set | Expectations shape perception | — | Different from perceptual constancy |
| Priming | Recent exposure influences perception | — | A mechanism that creates temporary perceptual sets |

### The Big Theme: Perception Is Constructive

Everything in this unit supports ONE central idea:
> **Perception is NOT a passive recording of reality. It is an active, constructive process shaped by sensory input, prior knowledge, expectations, context, culture, and attention.**

This connects to:
- **Memory** — We reconstruct memories, we don't replay recordings
- **Social psychology** — Stereotypes are schemas that shape social perception
- **Abnormal psychology** — Anxiety disorders involve biased threat perception
- **Developmental** — Perception develops through interaction of nature + nurture
      `
    },
    {
      id: 'perce7-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Integration Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST illustrates how perception is an active, constructive process rather than a passive recording?',
            options: [
              'Our retinas accurately detect light waves and pass a faithful copy of them to the brain',
              'A white shirt looks white under blue light as the brain factors out the illumination',
              'Our pupils dilate in darkness, automatically letting more light reach the retina',
              'Sound waves are converted to neural signals by hair cells in the cochlea'
            ],
            correctAnswer: 1,
            explanation: 'Color constancy perfectly demonstrates constructive perception. Your retina receives BLUE light reflected from the shirt (physical reality), but your brain COMPUTES that the shirt is white by factoring out the blue illumination. This is active construction — your brain creates a perception that differs from the raw sensory data to give you a more useful representation of the world. The retina, pupil, and cochlea options describe SENSATION (passive detection), not perception (active interpretation).'
          },
          {
            question: 'On an Evidence-Based Question about eyewitness reliability, a student must explain two different sources with two DIFFERENT perception and attention concepts. Which pair fits the topic BEST?',
            options: [
              'Size constancy and shape constancy',
              'Inattentional blindness and perceptual set',
              'Retinal disparity and convergence',
              'Perceptual constancy and Gestalt proximity'
            ],
            correctAnswer: 1,
            explanation: 'Inattentional blindness + perceptual set is the strongest pair for eyewitness testimony: (1) Inattentional blindness — a witness focused on one aspect (weapon focus) may miss other details (suspect\'s face, clothing). (2) Perceptual set — the witness\'s expectations, emotions, and schemas influence what they perceive and later recall (e.g., perceiving a suspect as taller/more threatening due to fear). The other options are real perception concepts but don\'t directly connect to eyewitness reliability.'
          }
        ]
      }
    },
    {
      id: 'perce7-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Cross-Unit Connections

| This Unit's Concept | Connected Unit | Connection |
|-------------------|----------------|------------|
| Top-down processing | **Memory** | Schemas guide encoding and retrieval (reconstructive memory) |
| Perceptual set | **Social Psychology** | Stereotypes = social schemas that create perceptual sets |
| Inattentional blindness | **Research Methods** | Observer bias — researchers may miss disconfirming data |
| Gestalt principles | **Developmental** | Perceptual organization appears to have innate components |
| Context effects | **Cognition** | Context-dependent memory — recall is better in original context |
| Change blindness | **Neuroscience** | Demonstrates that consciousness requires attention |
| Cultural influences | **Social Psychology** | Individualist vs. collectivist differences in attention patterns |
| Selective attention | **Biological** | Neural mechanisms of attention in the thalamus and cortex |

### Free-Response Connection: Perception on the AAQ and EBQ

**EBQ (7 points, 3 parts):** you write a defensible claim, then explain evidence from one source with a psychological concept and evidence from a DIFFERENT source with a DIFFERENT concept.

*Sample claim:* "Eyewitness accounts should be corroborated before they are used to convict."

| Source evidence (hypothetical) | Concept used to explain it |
|--------------------------------|----------------------------|
| Source 1: witnesses who watched a staged theft while a weapon was visible described the thief's face less accurately | **Inattentional blindness** — attention fixed on the weapon left the face unprocessed even though it was in view |
| Source 2: witnesses told beforehand that the area had "a lot of gang activity" more often described a neutral bystander as threatening | **Perceptual set** — expectations primed by the warning shaped what witnesses perceived |

**AAQ (7 points, 6 parts):** a perception study summary might report a visual cliff or change-blindness experiment. Be ready to name the method, a variable's operational definition (for example, "noticed the change = reported a different person within 10 seconds"), what a percentage or mean shows, an ethical guideline the researchers followed, how far the sample generalizes, and whether a finding supports the hypothesis.
      `
    },
    {
      id: 'perce7-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Final Recall Challenge** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The Gestalt psychologists said "the whole is different from the sum of its ___"', answer: 'parts' },
          { label: 'Failing to notice a fully visible but unexpected object while attending to something else is ___ blindness', answer: 'inattentional' },
          { label: 'Gibson & Walk\'s visual ___ experiment tested depth perception in infants', answer: 'cliff' }
        ]
      }
    },
    {
      id: 'perce7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Concept to Researcher** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Showed that many people giving directions fail to notice when the stranger they are talking to is swapped for someone else', options: ['Simons & Levin', 'Cherry', 'Simons & Chabris', 'Gibson & Walk'] },
          { label: 'Demonstrated inattentional blindness with the gorilla study', options: ['Simons & Levin', 'Cherry', 'Simons & Chabris', 'Gibson & Walk'] },
          { label: 'Tested infant depth perception using the visual cliff', options: ['Simons & Levin', 'Cherry', 'Simons & Chabris', 'Gibson & Walk'] }
        ],
        correctAnswers: ['Simons & Levin', 'Simons & Chabris', 'Gibson & Walk'],
        hint1: 'A door carried between two people hid the swap; this is the classic change blindness study.',
        hint2: 'These researchers had participants count basketball passes while a gorilla walked through.',
        hint3: 'These researchers created a glass-topped table with a shallow and deep side.',
        explanation: 'Simons & Levin (1998) demonstrated change blindness with the person-swap study. Simons & Chabris (1999) demonstrated inattentional blindness with the gorilla video. Gibson & Walk (1960) tested infant depth perception with the visual cliff.'
      }
    },
    {
      id: 'perce7-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 High-Frequency AP Topics

**Core CED perception content to master:**

1. **Gestalt principles** — Especially proximity, closure, and figure-ground
2. **Top-down vs. bottom-up processing** — Know the difference and examples
3. **Inattentional blindness** — The gorilla study is a favorite
4. **Depth cues** — Binocular vs. monocular; identify specific cues
5. **Perceptual constancies** — Size, shape, and color
6. **Cultural and contextual influences** — Experiences and expectations filter perception (CED 2.1.A.3)
7. **Selective attention and change blindness** — Cocktail party effect; failing to notice changes
8. **Perceptual set** — Expectations shaping perception

### Common Misconceptions (Wrong Answer Choices)

| Misconception | Reality |
|--------------|---------|
| Perception = sensation | Sensation is detection; perception is interpretation |
| We see things as they are | We construct perception from data + context + expectations |
| Inattentional blindness = not looking | You ARE looking — you're just not perceiving |
| Gestalt principles are all about grouping | Figure-ground separates an object from its background; proximity, similarity, and closure organize elements into wholes |
| Binocular cues include relative size | Relative size is monocular — only retinal disparity and convergence are binocular |
| The visual cliff proves depth perception is innate | It shows depth perception exists by crawling age — can't prove it's innate |

> **Final AP Tip:** Perception questions often overlap with other units. Be prepared to apply perception concepts to memory (eyewitness testimony), social psychology (stereotypes), developmental psychology (nature vs. nurture in perception), and abnormal psychology (biased threat perception in anxiety).
      `
    },
    {
      id: 'perce7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Final AP-Style Questions** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher shows participants an ambiguous figure that could be seen as either a duck or a rabbit. Before viewing, Group A is told "You\'ll see an animal that swims," and Group B is told "You\'ll see an animal that hops." Group A overwhelmingly reports seeing a duck, while Group B reports seeing a rabbit. This experiment demonstrates the interaction between:',
            options: [
              'Bottom-up processing and feature detection, with the figure alone fixing what is seen',
              'Top-down processing and perceptual set, with verbal cues priming one reading of it',
              'Inattentional blindness and change blindness, with each group missing part of the figure',
              'Size constancy and shape constancy, with each group judging the figure\'s form differently'
            ],
            correctAnswer: 1,
            explanation: 'The verbal instructions created a TOP-DOWN expectation (swim → duck, hop → rabbit) that resulted in a PERCEPTUAL SET — a readiness to perceive one interpretation over the other. The sensory data (bottom-up) is identical for both groups, but the perception differs because of the expectations created by the instructions. This is a classic demonstration that perception = sensory data + prior knowledge/expectations. Top-down processing and perceptual set work together here.'
          },
          {
            question: 'Which of the following is the BEST evidence that perceptual organization has INNATE components rather than being entirely learned?',
            options: [
              'Adults from all cultures experience the Müller-Lyer illusion, though its strength varies',
              'Newborns look longer at face-like patterns than at scrambled ones within hours of birth',
              'Experienced radiologists spot tumors on scans faster than medical students do',
              'People from carpentered environments are more susceptible to certain illusions'
            ],
            correctAnswer: 1,
            explanation: 'Newborn preferential looking for faces is the strongest evidence for INNATE perceptual organization because: (1) it occurs within hours of birth, leaving minimal time for learning, and (2) it shows organized pattern preference (faces over scrambled), not just detection. The Müller-Lyer option actually shows cultural VARIATION (learned component). The radiologist option demonstrates expertise (learned). The carpentered-environment option explicitly shows environmental influence (learned). Only the newborn face preference data points strongly to innate organizational tendencies.'
          }
        ]
      }
    }
  ]
}
