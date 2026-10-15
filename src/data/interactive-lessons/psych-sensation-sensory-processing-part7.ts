export const psychSensationPart7Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 7 of 7 — Synthesis: One Model for Every Sense**

> 🔑 **Key Concept:** Every sense follows the same chain: **stimulus → receptor → transduction → pathway → brain area**. Most exam items about sensation ask you to locate a scenario on that chain. Knowing *where* something happens (receptor, nerve, thalamus or cortex) answers questions about theories, disorders and data alike.

### Concept map: the whole topic in one table

| Sense | Stimulus | Receptors | First brain stop | Main cortex | Key theory or case |
|---|---|---|---|---|---|
| **Vision** | Light; wavelength → hue, amplitude → brightness | Rods (periphery, dim light) and cones (fovea, color) | Thalamus | Occipital lobe | Trichromatic + opponent-process; blindsight; prosopagnosia |
| **Hearing** | Sound; wavelength → pitch, amplitude → loudness | Hair cells in the cochlea | Thalamus | Temporal lobe | Place, frequency, volley; conduction vs sensorineural loss |
| **Smell** | Airborne molecules | Olfactory receptor cells | **Olfactory bulb, not the thalamus** | Smell cortex and limbic areas | Pheromones; emotional memories |
| **Taste** | Dissolved chemicals | Taste receptor cells in taste buds | Thalamus | Taste cortex | Six tastes incl. umami and oleogustus; supertasters |
| **Touch** | Pressure, warmth, cold | Skin receptors | Thalamus | Parietal lobe (somatosensory cortex) | "Hot" = warm + cold receptors together |
| **Pain** | Tissue damage | Pain receptors | Spinal cord, then thalamus | Several areas | Gate control theory; phantom limb |
| **Vestibular** | Head rotation and tilt | Hair cells in semicircular canals | Brainstem and cerebellum | — | Balance; motion sickness |
| **Kinesthesis** | Body-part position and movement | Receptors in muscles, tendons, joints | Spinal cord, then thalamus | Parietal lobe | Touching your nose with eyes closed |

### Rules that cut across every sense (Part 1)

| Rule | Applies to | One-line reminder |
|---|---|---|
| Absolute threshold | All senses | Lowest intensity detected at least 50% of the time |
| JND and Weber's law | All senses | Change needed is a constant proportion of the base |
| Sensory adaptation | All senses | Constant input fades; change is noticed |
| Sensory interaction | Pairs of senses | Smell shapes taste; vision shapes hearing |
| Synesthesia | Some people | One sense automatically triggers another |
      `
    },
    {
      id: 'sensation-sensory-processing-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Integrated Check — Locate It on the Chain** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of cases shows a problem at the same stage of the sensory chain, the receptors?',
            options: [
              'Blindsight and prosopagnosia',
              'Dichromatism and hair cells destroyed by loud noise',
              'Phantom limb pain and conduction hearing loss in one ear',
              'Nearsightedness and blindsight'
            ],
            correctAnswer: 1,
            explanation: 'Dichromatism involves a missing or nonworking cone type, and noise-induced sensorineural loss involves destroyed hair cells, so both are receptor problems. Blindsight and prosopagnosia arise in the brain, and nearsightedness and conduction loss are problems of focusing or mechanics before the receptors.'
          },
          {
            question: 'A patient\'s eyes, cones and optic nerves test as normal, yet she cannot recognize familiar faces. Where is the problem most likely located?',
            options: [
              'In the lens of the eye',
              'In the retina',
              'In visual brain areas',
              'In the blind spot'
            ],
            correctAnswer: 2,
            explanation: 'With the eye and optic nerve working, the problem lies further along the chain, in the brain\'s visual areas, mainly in the occipital lobes, which is the pattern of prosopagnosia. The lens, retina and blind spot are all parts of the eye.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p7-s3-pairs',
      type: 'text' as const,
      content: `
### ⚖️ The Pairs the Exam Loves to Swap

| Pair | First one | Second one | Tell them apart by asking |
|---|---|---|---|
| Absolute vs difference threshold | Detect a stimulus at all | Detect a change in a stimulus | Starting from nothing, or from something? |
| Rods vs cones | Periphery, dim light, shape and movement | Fovea, bright light, color and detail | Is it dark, or is color or detail needed? |
| Trichromatic vs opponent-process | Three cone types (retina) | Opposing pairs in ganglion cells and beyond | Color mixing, or afterimages? |
| Place vs frequency (and volley) | Where the cochlea vibrates most; high pitches | Firing rate; low pitches (volley for the middle range) | High pitch or low pitch? |
| Conduction vs sensorineural loss | Mechanical: outer or middle ear | Neural: hair cells or auditory nerve | Is the break before or inside the cochlea? |
| Nearsighted vs farsighted | Distant objects blurry; focus in front of the retina | Near objects blurry; focus behind the retina | Which distance is blurry? |
| Blindsight vs prosopagnosia | No conscious sight in part of the field, yet can locate objects | Sees faces clearly but cannot recognize them | What is lost: sight itself, or face identity? |
| Vestibular vs kinesthesis | Balance and head movement (semicircular canals) | Position of body parts (muscles, joints) | Whole-body balance, or limb position? |
| Sensory interaction vs synesthesia | Everyone: one sense shapes another | Some people: one sense triggers another | Is it typical, or a consistent cross-sense extra? |
| Sensory adaptation vs habituation | Receptors respond less to constant input | A learned drop in behavioral response | Sensory system or learned behavior? |

### Worked example: one scenario, three concepts

*Practice scenario.* A concert drummer, age 58, notices that after a loud show, quiet conversations sound muffled for hours, and over the years he has had more trouble hearing high voices. His audiologist says the cells in his cochlea that code high frequencies are damaged.

1. **Loudness:** a loud show means high **amplitude** (many decibels).
2. **Type of loss:** damage to cochlear receptor cells is **sensorineural** loss, made worse by **aging**.
3. **Pitch theory:** losing high frequencies specifically, from damage at particular places in the cochlea, fits **place theory**.
      `
    },
    {
      id: 'sensation-sensory-processing-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Theory or Concept Explains It?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After staring at a yellow logo, Ben sees a blue logo on a white wall. Best explained by _____.',
            options: ['trichromatic theory', 'opponent-process theory', 'place theory', 'gate control theory']
          },
          {
            label: 'Neurons firing in staggered groups track a 3,000 Hz tone. Best explained by _____.',
            options: ['place theory', 'frequency theory', 'volley theory', 'opponent-process theory']
          },
          {
            label: 'A runner feels no pain from a blister until the race ends. Best explained by _____.',
            options: ['gate control theory', 'sensory interaction', 'place theory', 'trichromatic theory']
          },
          {
            label: 'A screen makes every color from red, green and blue pixels. Best explained by _____.',
            options: ['opponent-process theory', 'synesthesia', 'trichromatic theory', 'volley theory']
          }
        ],
        correctAnswers: ['opponent-process theory', 'volley theory', 'gate control theory', 'trichromatic theory'],
        hint1: 'Afterimages flip a color to its opposing partner.',
        hint2: 'Groups of neurons taking turns can mark frequencies faster than any one neuron fires.',
        hint3: 'Attention on the race sends messages from the brain that affect pain signals in the spinal cord.',
        explanation: 'The blue afterimage comes from opponent cells; staggered firing for a mid-range tone is the volley principle; pain blocked during intense focus fits gate control theory; and mixing three lights to match colors reflects three cone types, the trichromatic theory.'
      }
    },
    {
      id: 'sensation-sensory-processing-p7-s5-misconceptions',
      type: 'text' as const,
      content: `
### 🚫 Misconceptions Across the Topic

| Misconception | What is actually true |
|---|---|
| "The absolute threshold is the faintest stimulus a person ever notices." | It is the lowest intensity detected **at least 50%** of the time. |
| "Weber's law means the JND is a fixed amount." | The JND is a fixed **proportion** of the starting stimulus, so it grows as the stimulus grows. |
| "Rods see color in the dark." | Rods do not code color; that is why night vision is gray. |
| "Trichromatic and opponent-process theories compete; only one is right." | Both are right, at **different stages**: cones first, opponent ganglion cells after. |
| "The blind spot is a defect some people have." | Everyone has one where the optic nerve leaves the eye; the brain fills in the gap. |
| "Amplitude sets pitch." | Wavelength (frequency) sets pitch; amplitude sets loudness. |
| "Place theory explains all pitches." | Place fits **high** pitches; frequency and volley fit **lower** ones. |
| "All senses go through the thalamus first." | **Smell** does not; it goes to the olfactory bulb and then to cortex and limbic areas. |
| "There are four or five basic tastes." | The CED lists **six**: sweet, sour, salty, bitter, umami and oleogustus. |
| "Hot is sensed by special heat receptors." | "Hot" comes from **warm and cold** receptors firing together. |
| "Pain is just a signal from injured tissue." | Pain is processed in body **and** brain: see gate control and phantom limbs. |

> 🔑 **AP Connection:** In free response, name the **specific** concept ("opponent-process theory," "sensorineural hearing loss") and tie it to a detail of the scenario or source. A general phrase such as "the senses were affected" does not earn credit.
      `
    },
    {
      id: 'sensation-sensory-processing-p7-s6-input',
      type: 'input-boxes' as const,
      content: `
**Final Recall** ✍️

Type a single term.
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the only sense whose signals are not processed first in the thalamus?',
            answer: 'smell',
            acceptableAnswers: ['olfaction', 'the sense of smell', 'olfactory'],
            explanation: 'Smell signals go from the olfactory bulb to smell and limbic areas without a first relay in the thalamus.'
          },
          {
            question: 'Which type of hearing loss results from damage to the eardrum or the tiny bones of the middle ear?',
            answer: 'conduction',
            acceptableAnswers: ['conduction deafness', 'conduction hearing loss', 'conductive', 'conductive hearing loss'],
            explanation: 'Damage to the mechanical parts of the outer or middle ear causes conduction hearing loss.'
          },
          {
            question: 'Which sense, based in the semicircular canals, keeps track of balance?',
            answer: 'vestibular',
            acceptableAnswers: ['vestibular sense', 'the vestibular sense', 'balance'],
            explanation: 'The vestibular sense uses the semicircular canals of the inner ear to detect head rotation and maintain balance.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Integrated Scenarios — Final Review** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'At a dim campfire, Rosa can see her friends moving around the fire but cannot tell the color of their jackets. Ten minutes later, smoke from the fire no longer bothers her nose. Which pair of concepts best explains both observations?',
            options: [
              'Cone vision and synesthesia',
              'Rod vision and sensory adaptation',
              'Opponent cells and sensory interaction',
              'Rods and a raised difference threshold'
            ],
            correctAnswer: 1,
            explanation: 'In dim light, rods detect shapes and movement but not color, and a constant smell fades through sensory adaptation. Cones need bright light, and a difference threshold concerns detecting changes, not the fading of a steady smell.'
          },
          {
            question: 'Which finding would be the strongest evidence for opponent-process theory rather than for trichromatic theory alone?',
            options: [
              'People can match most colors by mixing three lights',
              'The retina contains three kinds of cones',
              'Staring at green leaves a red afterimage',
              'Rods respond best in dim light'
            ],
            correctAnswer: 2,
            explanation: 'Afterimages in the opposing color come from fatigued opponent cells beyond the cones, which three cone types alone cannot explain. Mixing three lights and three cone types are the core evidence for trichromatic theory.'
          },
          {
            question: 'A food scientist finds that people with colds rate soup as much less flavorful, and that supertasters in the sample rate bitter greens as harsher than nontasters do. Which pair of concepts best explains these two findings?',
            options: [
              'Sensory interaction, and differences in taste receptor number',
              'Synesthesia, and differences in taste receptor number',
              'Sensory adaptation, and differences in smell receptor type',
              'Absolute threshold, and differences in taste receptor number'
            ],
            correctAnswer: 0,
            explanation: 'A cold blocks smell, and because taste depends on smell, flavor is muted, which is sensory interaction. Supertasters have more taste receptors, which makes bitter tastes more intense.'
          },
          {
            question: 'In a practice study, people with long-term back pain who learned to shift attention away from their pain reported lower pain ratings than a waitlist group. Which statement best connects this result to course concepts?',
            options: [
              'Brain messages can help close the pain gate',
              'Pain receptors in the back had been replaced',
              'The back pain was a form of phantom limb pain',
              'The patients had adapted to constant warmth'
            ],
            correctAnswer: 0,
            explanation: 'Gate control theory says messages from the brain, such as shifts in attention, can close the spinal gate and reduce felt pain. The patients still had their backs, so phantom limb pain does not apply.'
          }
        ]
      }
    }
  ]
}
