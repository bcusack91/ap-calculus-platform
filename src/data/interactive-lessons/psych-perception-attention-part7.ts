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
| Monocular cues | Depth cues needing one eye | — | Motion parallax is monocular (not binocular) |
| Visual cliff | Tests innate depth perception | Gibson & Walk (1960) | Can't prove depth perception is fully innate |
| Size constancy | Stable size despite distance | — | Different from relative size (depth cue) |
| Shape constancy | Stable shape despite angle | — | The retinal image DOES change — perception doesn't |
| Color constancy | Stable color despite lighting | — | Can fail in ambiguous conditions (The Dress) |
| Müller-Lyer | Arrow direction affects perceived line length | Müller-Lyer | Cultural experience affects susceptibility |
| Selective attention | Focusing while filtering | Cherry, Broadbent | Treisman's attenuation is the most accepted model |
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
              'Our retinas accurately detect light waves',
              'We perceive a white shirt as white even under blue lighting — our brain computes the "real" color by factoring out the illumination',
              'Our pupils dilate in darkness to let in more light',
              'Sound waves are converted to neural signals in the cochlea'
            ],
            correctAnswer: 1,
            explanation: 'Color constancy perfectly demonstrates constructive perception. Your retina receives BLUE light reflected from the shirt (physical reality), but your brain COMPUTES that the shirt is white by factoring out the blue illumination. This is active construction — your brain creates a perception that differs from the raw sensory data to give you a more useful representation of the world. Options A, C, and D describe SENSATION (passive detection), not perception (active interpretation).'
          },
          {
            question: 'An AP Psychology FRQ asks: "Explain how TWO concepts from perception and attention relate to eyewitness testimony reliability." Which pair would earn the MOST credit?',
            options: [
              'Size constancy and shape constancy',
              'Inattentional blindness and perceptual set',
              'Motion parallax and convergence',
              'The Gestalt principles of proximity and similarity'
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

### FRQ Template for Perception Questions

**Step 1: IDENTIFY** the concept from the scenario
**Step 2: DEFINE** it precisely (use textbook language)
**Step 3: APPLY** it to the specific scenario details
**Step 4: EXPLAIN** why it matters / what it demonstrates

**Example FRQ Application:**

*"Explain how inattentional blindness could affect the reliability of an eyewitness account."*

**Model Answer:** **Inattentional blindness** is the failure to notice a fully visible but unexpected stimulus when attention is focused on another task. An eyewitness who is focused on the weapon during a robbery (known as the **weapon focus effect**) may experience inattentional blindness for the perpetrator's facial features, clothing, or other identifying details. Despite looking directly at the scene, the witness's selective attention was narrowed to the threatening stimulus, leaving other details unprocessed at the conscious level. This means the eyewitness may provide an **inaccurate or incomplete** identification, not because of dishonesty or poor memory, but because the relevant details were never fully perceived in the first place.
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
          { label: 'Treisman proposed that unattended messages are ___, not completely blocked', answer: 'attenuated' },
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
          { label: 'Proposed the attenuation model of selective attention', options: ['Broadbent', 'Treisman', 'Simons & Chabris', 'Gibson & Walk'] },
          { label: 'Demonstrated inattentional blindness with the gorilla study', options: ['Broadbent', 'Treisman', 'Simons & Chabris', 'Gibson & Walk'] },
          { label: 'Tested infant depth perception using the visual cliff', options: ['Broadbent', 'Treisman', 'Simons & Chabris', 'Gibson & Walk'] }
        ],
        correctAnswers: ['Treisman', 'Simons & Chabris', 'Gibson & Walk'],
        hint1: 'This researcher modified Broadbent\'s filter theory to allow important stimuli to break through.',
        hint2: 'These researchers had participants count basketball passes while a gorilla walked through.',
        hint3: 'These researchers created a glass-topped table with a shallow and deep side.',
        explanation: 'Treisman (1964) proposed attenuation theory. Simons & Chabris (1999) demonstrated inattentional blindness with the gorilla video. Gibson & Walk (1960) tested infant depth perception with the visual cliff.'
      }
    },
    {
      id: 'perce7-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 High-Frequency AP Topics

**Most likely to appear on the AP exam** (based on frequency analysis):

1. **Gestalt principles** — Especially proximity, closure, and figure-ground
2. **Top-down vs. bottom-up processing** — Know the difference and examples
3. **Inattentional blindness** — The gorilla study is a favorite
4. **Depth cues** — Binocular vs. monocular; identify specific cues
5. **Perceptual constancies** — Size, shape, and color
6. **Müller-Lyer illusion** — Mechanism AND cultural differences
7. **Selective attention** — Cocktail party effect and Treisman's model
8. **Perceptual set** — Expectations shaping perception

### Common Misconceptions (Wrong Answer Choices)

| Misconception | Reality |
|--------------|---------|
| Perception = sensation | Sensation is detection; perception is interpretation |
| We see things as they are | We construct perception from data + context + expectations |
| Inattentional blindness = not looking | You ARE looking — you're just not perceiving |
| Only 2 Gestalt principles exist | There are at least 6: figure-ground, proximity, similarity, closure, continuity, common fate |
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
              'Bottom-up processing only — the figure determines what is seen',
              'Top-down processing (verbal context created expectations) and perceptual set (readiness to see one thing over another)',
              'Inattentional blindness and change blindness',
              'Size constancy and shape constancy'
            ],
            correctAnswer: 1,
            explanation: 'The verbal instructions created a TOP-DOWN expectation (swim → duck, hop → rabbit) that resulted in a PERCEPTUAL SET — a readiness to perceive one interpretation over the other. The sensory data (bottom-up) is identical for both groups, but the perception differs because of the expectations created by the instructions. This is a classic demonstration that perception = sensory data + prior knowledge/expectations. Top-down processing and perceptual set work together here.'
          },
          {
            question: 'Which of the following is the BEST evidence that perceptual organization has INNATE components rather than being entirely learned?',
            options: [
              'Adults from all cultures experience the Müller-Lyer illusion (even if strength varies)',
              'Newborn infants show preferential looking toward face-like patterns over scrambled patterns within hours of birth',
              'Experienced radiologists spot tumors faster than students',
              'People from carpentered environments are more susceptible to certain illusions'
            ],
            correctAnswer: 1,
            explanation: 'Newborn preferential looking for faces is the strongest evidence for INNATE perceptual organization because: (1) it occurs within hours of birth, leaving minimal time for learning, and (2) it shows organized pattern preference (faces over scrambled), not just detection. Option A actually shows cultural VARIATION (learned component). Option C demonstrates expertise (learned). Option D explicitly shows environmental influence (learned). Only the newborn face preference data points strongly to innate organizational tendencies.'
          }
        ]
      }
    }
  ]
}
