export const psychSensationPart5Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 5 of 7 — Chemical and Body Senses**

> 🔑 **Key Concept:** Smell and taste are **chemical senses**: receptors respond to molecules, not energy waves. The body senses (touch, pain, balance and body position) keep track of the skin, the tissues and where the body is in space. Two facts anchor this part: **smell is the only sense not processed first in the thalamus**, and **pain is processed in both the body and the brain**.

### Smell (olfaction)

1. Airborne molecules dissolve in the mucus at the top of the nasal cavity.
2. **Olfactory receptor cells** there transduce them. Humans have several hundred receptor types, and each odor activates a particular **combination** of them, much as letters combine into words.
3. The receptor cells send signals to the **olfactory bulb** at the base of the brain.
4. From the bulb, signals go **directly** to smell areas of the cortex and to limbic structures such as the **amygdala** and **hippocampus**. Every other sense relays through the **thalamus** first; smell's main route does not.

| Sense | First major relay in the brain |
|---|---|
| Vision, hearing, taste, touch | Thalamus |
| **Smell** | Olfactory bulb, then cortex and limbic areas, **not the thalamus first** |

That direct line to emotion and memory areas helps explain why a smell, such as a grandparent's kitchen or a school hallway, can bring back a vivid, emotional memory in an instant.

**Pheromones** are chemical signals released by an animal that are detected through the olfactory system and affect the behavior or physiology of others of the **same species**. In many animals they shape mating, alarm and territory (moths can find mates by pheromone trails). In humans, the evidence for pheromones that steer behavior is limited and debated.

**Smell adapts quickly.** Within minutes you stop noticing the smell of your own home or perfume, an example of the sensory adaptation from Part 1.
      `
    },
    {
      id: 'sensation-sensory-processing-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Smell** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A neurologist explains that one sense sends its signals to the cortex and limbic areas without first passing through the thalamus. Which sense is she describing?',
            options: [
              'Smell',
              'Taste',
              'Touch',
              'Hearing'
            ],
            correctAnswer: 0,
            explanation: 'Smell is the only sense not processed first in the thalamus; olfactory signals go from the olfactory bulb straight to smell and limbic areas. Taste, touch and hearing all relay through the thalamus.'
          },
          {
            question: 'Researchers find that female moths release a chemical that draws males of the same species from far away. What is this chemical signal called?',
            options: [
              'A hormone carried in the moth\'s blood',
              'A pheromone detected by the olfactory system',
              'A neurotransmitter released at a synapse',
              'A taste molecule sensed by the tongue'
            ],
            correctAnswer: 1,
            explanation: 'Pheromones are chemicals released into the environment that send messages to others of the same species through the olfactory system. Hormones and neurotransmitters act inside the body, not between animals.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p5-s3-taste',
      type: 'text' as const,
      content: `
### 👅 Taste (gustation)

**Gustation** is the sense of taste. Chemicals dissolved in saliva reach **taste receptor cells** clustered in **taste buds**, most of them on the small bumps (papillae) of the tongue, with others in the mouth and throat. Taste receptor cells are replaced every week or two. Signals travel through the thalamus to taste areas of the cortex.

**The six basic tastes in the CED:**

| Taste | Typical source | Likely survival value |
|---|---|---|
| **Sweet** | Fruit, sugar | Signals energy |
| **Salty** | Salt | Signals sodium the body needs |
| **Sour** | Lemon, vinegar | Can signal acidity or spoiled food |
| **Bitter** | Coffee, dark greens, many plant toxins | Can signal possible poisons |
| **Umami** | Broth, aged cheese, soy sauce | Signals savory protein-rich food |
| **Oleogustus** | Fat on its own (plain oil, fatty acids) | Signals energy-dense fat; unpleasant by itself |

Myth check: the old "tongue map" (sweet only at the tip, bitter only at the back) is wrong. Taste buds across the tongue respond to all basic tastes.

### Supertasters, medium tasters and nontasters

People differ in the **number of taste receptors** (taste buds) on the tongue, and that number is related to how intensely they experience tastes.

| Group | Taste receptors | Typical experience |
|---|---|---|
| **Supertasters** | Many | Bitter foods (black coffee, broccoli, grapefruit) taste intensely, sometimes unpleasantly |
| **Medium tasters** | Average | Typical intensity |
| **Nontasters** | Fewer | Tastes seem mild; may add more salt or spice |

### Taste needs smell

The chemical senses work together to create what we call taste. Much of flavor comes from odor molecules that rise from the mouth to the nasal cavity as you chew. **Without smell, taste is muted or lost**: with a cold, food seems bland, and with a pinched nose, cherry and grape candies can be hard to tell apart. This is the sensory interaction from Part 1, at work in every meal.
      `
    },
    {
      id: 'sensation-sensory-processing-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Taste Experience** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The savory, meaty taste of a bowl of mushroom broth is called _____.',
            options: ['umami', 'oleogustus', 'salty', 'sweet']
          },
          {
            label: 'In a practice study, people sip plain cooking oil and describe a distinct, mildly unpleasant taste. That taste is called _____.',
            options: ['bitter', 'umami', 'oleogustus', 'sour']
          },
          {
            label: 'Rosa has an unusually large number of taste buds and finds plain kale painfully bitter. She is most likely a _____.',
            options: ['nontaster', 'medium taster', 'supertaster', 'synesthete']
          },
          {
            label: 'With a stuffy nose, Ken finds that coffee and tea taste nearly the same. This shows that taste depends on _____.',
            options: ['smell', 'touch', 'hearing', 'vision']
          }
        ],
        correctAnswers: ['umami', 'oleogustus', 'supertaster', 'smell'],
        hint1: 'Savory taste and fat taste are the two newest names on the list of six.',
        hint2: 'More taste receptors means more intense tastes, especially bitter ones.',
        hint3: 'Which sense is blocked by a cold, and how does that change flavor?',
        explanation: 'Savory broth is umami and plain fat is oleogustus; a person with many taste receptors who finds bitter foods intense is a supertaster; and blocked smell mutes flavor, because taste depends heavily on smell.'
      }
    },
    {
      id: 'sensation-sensory-processing-p5-s5-body',
      type: 'text' as const,
      content: `
### ✋ Touch

The skin holds separate receptors for **pressure**, **warmth**, **cold** and **pain**. Their signals travel up the spinal cord, through the thalamus, to the **somatosensory cortex** in the parietal lobe.

**Where does "hot" come from?** There is no dedicated "hot" receptor. The sensation of **hot** is produced when **warm and cold receptors are activated together**. In a classic demonstration, a person grips a grill of alternating lukewarm and cool bars. Neither bar alone is hot, yet the grill feels burning hot, because warm and cold receptors fire at the same time.

### 🩹 Pain

Pain is processed **both in the body and in the brain**. Receptors in skin and tissue (nociceptors) respond to damaging stimuli, but how much pain a person feels also depends on attention, mood, expectations and context.

**Gate control theory** (Ronald Melzack and Patrick Wall, 1965) proposes that the **spinal cord** contains a neurological "gate" that can block pain signals or let them pass to the brain.

| What happens | Effect on the gate | Everyday example |
|---|---|---|
| Activity in small pain fibers | **Opens** the gate | A stubbed toe sends sharp pain upward |
| Activity in larger fibers from rubbing, pressure or massage | **Closes** the gate | Rubbing the stubbed toe dulls the pain |
| Messages from the brain (distraction, calm, expectations, endorphins) | **Close** the gate | An athlete does not notice an injury until the game ends |

**Phantom limb sensation** occurs when people who have lost a limb still report sensation or pain where the limb used to be. No receptors exist there anymore, so the experience must be generated by the brain. Phantom limbs are strong evidence that pain is not only a message from the body; the brain can produce it on its own.

### 🧭 Balance and body position

| Sense | What it tracks | Where the receptors are | Example |
|---|---|---|---|
| **Vestibular sense** | Balance, head rotation and tilt | **Semicircular canals**: three fluid-filled loops in the inner ear | Dizziness after spinning; keeping balance on a moving bus |
| **Kinesthesis** | Position and movement of body parts | Receptors in muscles, tendons and joints | Touching your nose with your eyes closed |

When the vestibular sense and vision disagree, as when reading in a moving car, the conflict can produce **motion sickness**, another case of senses interacting.
      `
    },
    {
      id: 'sensation-sensory-processing-p5-s6-input',
      type: 'input-boxes' as const,
      content: `
**Quick Recall — Chemical and Body Senses** ✍️

Type a single term.
      `,
      exercise: {
        questions: [
          {
            question: 'Which fluid-filled structures in the inner ear detect head rotation for the vestibular sense?',
            answer: 'semicircular canals',
            acceptableAnswers: ['semicircular canal', 'the semicircular canals', 'semi-circular canals'],
            explanation: 'The semicircular canals are three fluid-filled loops; fluid moving inside them signals rotation and supports balance.'
          },
          {
            question: 'What is the name for the sense of the position and movement of your own body parts?',
            answer: 'kinesthesis',
            acceptableAnswers: ['kinesthesia', 'kinesthetic sense', 'kinaesthesis', 'kinesthetic'],
            explanation: 'Kinesthesis uses receptors in muscles, tendons and joints to track where body parts are and how they move.'
          },
          {
            question: 'Which theory says a "gate" in the spinal cord can block pain signals from reaching the brain? (Two words.)',
            answer: 'gate control',
            acceptableAnswers: ['gate control theory', 'gate-control', 'gate-control theory'],
            explanation: 'Gate control theory proposes that larger-fiber activity and messages from the brain can close a spinal gate to pain.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Chemical and Body Senses** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Walking past a bakery, Ana smells cinnamon rolls and is suddenly flooded with emotion as she remembers her grandmother\'s kitchen. Which fact about smell best explains how strong this reaction is?',
            options: [
              'Smell adapts more quickly than other senses',
              'Smell uses more receptor types than vision',
              'Smell reaches limbic areas without a thalamic relay',
              'Smell receptors are replaced every week or two'
            ],
            correctAnswer: 2,
            explanation: 'Olfactory signals travel from the olfactory bulb directly to emotion and memory areas such as the amygdala and hippocampus, rather than relaying through the thalamus first. Fast adaptation and receptor turnover do not explain an emotional memory.'
          },
          {
            question: 'After banging his elbow, Malik rubs it hard and the pain eases. According to gate control theory, why does rubbing help?',
            options: [
              'Rubbing releases pain-blocking hormones in the elbow',
              'Rubbing activates larger fibers that block pain',
              'Rubbing fatigues the elbow\'s pain receptors at once',
              'Rubbing distracts the somatosensory cortex entirely'
            ],
            correctAnswer: 1,
            explanation: 'Gate control theory holds that signals in larger fibers from rubbing or pressure close the spinal gate, so fewer pain signals reach the brain. The theory places the gate in the spinal cord, not in the elbow or the cortex.'
          },
          {
            question: 'Months after losing his right leg, a veteran reports cramping pain in his missing foot. Which conclusion does this case most directly support?',
            options: [
              'Pain can be generated by the brain without input',
              'Pain receptors regrow where an injury has healed',
              'Pain is felt only when tissue is still being damaged',
              'Pain fades once sensory adaptation is complete'
            ],
            correctAnswer: 0,
            explanation: 'Phantom limb pain occurs with no receptors left in the missing limb, so the brain itself must produce the experience. That directly contradicts the idea that pain requires ongoing tissue damage.'
          },
          {
            question: 'Two volunteers each touch a grill of alternating lukewarm and cool bars, and both pull back, saying it feels burning hot. What explains the report?',
            options: [
              'Warm and cold receptors firing together',
              'Pain receptors responding to a real burn',
              'Cold receptors adapting to the lukewarm bars',
              'Pressure receptors reacting to the metal bars'
            ],
            correctAnswer: 0,
            explanation: 'The sensation of hot is produced when warm and cold receptors are activated at the same time, which the alternating bars do. No bar is hot enough to burn, so pain receptors responding to damage do not explain it.'
          }
        ]
      }
    }
  ]
}
