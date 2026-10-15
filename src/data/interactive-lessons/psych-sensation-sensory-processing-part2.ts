export const psychSensationPart2Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 2 of 7 — Vision: From Light to the Brain**

> 🔑 **Key Concept:** The eye is a light-focusing device built around one receptor layer, the **retina**. Light is bent and focused onto the retina, rods and cones transduce it, and the signal travels the optic nerve to the thalamus and then to the **occipital lobe**.

### The stimulus: light

Visible light is a narrow band of electromagnetic energy, roughly **400 to 700 nanometers** in wavelength. Three physical properties map onto three experiences:

| Physical property | What it is | Psychological experience |
|---|---|---|
| **Wavelength** | Distance from one wave peak to the next | **Hue** (color): short waves look violet-blue, long waves look red |
| **Amplitude** (intensity) | Height of the wave, amount of energy | **Brightness**: greater amplitude looks brighter |
| **Purity** | How many wavelengths are mixed | **Saturation**: one wavelength looks vivid, many look washed out |

### The eye, front to back

| Structure | Job | Exam detail |
|---|---|---|
| **Cornea** | Clear outer covering; bends (refracts) light | Does most of the eye's fixed focusing |
| **Pupil** | Opening that lets light in | Widens in dim light, narrows in bright light |
| **Iris** | Colored ring of muscle around the pupil | Controls pupil size |
| **Lens** | Flexible, clear structure behind the pupil | Changes shape to fine-tune focus |
| **Retina** | Light-sensitive inner surface at the back | Holds rods and cones, where transduction happens |
| **Fovea** | Central pit of the retina | Packed with cones; sharpest detail |
| **Optic nerve** | Bundle of ganglion-cell axons | Carries signals from the eye to the brain |
| **Blind spot** | Where the optic nerve leaves the eye | No rods or cones, so no transduction there |

**Accommodation** is the lens changing shape to focus. For a **near** object the lens becomes **rounder** (thicker), bending light more; for a **far** object it **flattens**. The image that lands on the retina is upside down and left-right reversed; the brain works with that pattern without any need to "flip" it.

**Order of light through the eye:** cornea → pupil (sized by the iris) → lens → retina.
      `
    },
    {
      id: 'sensation-sensory-processing-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Structures of the Eye** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mia looks up from her phone to read a sign across the street, and the sign comes into focus within a moment. Which change inside her eye made this possible?',
            options: [
              'The lens flattened to bend light from the far sign',
              'The pupil narrowed to let in more light',
              'The cornea thickened to bend the light',
              'The retina shifted closer to the back of the lens'
            ],
            correctAnswer: 0,
            explanation: 'Accommodation is the lens changing shape: it flattens for distant objects and rounds for near ones. The cornea and retina do not change shape to focus, and a narrower pupil admits less light, not more.'
          },
          {
            question: 'Twenty minutes after entering a dark movie theater, Sam can make out the shapes of people walking down the aisle but cannot tell what color their shirts are. Which photoreceptors are doing most of the work?',
            options: [
              'Rods',
              'Cones',
              'Blue cones',
              'Red cones'
            ],
            correctAnswer: 0,
            explanation: 'Rods dominate in low light, detect shapes and movement, and become more sensitive during dark adaptation, but they do not code color. Cones of every type need brighter light.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p2-s3-retina',
      type: 'text' as const,
      content: `
### 🔬 Inside the Retina: Rods and Cones

The retina holds two kinds of photoreceptors. Each eye has roughly **120 million rods** and roughly **6 million cones** (common textbook estimates).

| Feature | Rods | Cones |
|---|---|---|
| Light needed | Work in **dim** light | Need **bright** light |
| Color | No color; black, white and gray | Detect **color** |
| Where | Mostly in the **periphery** | Concentrated in the **fovea** |
| Best at | Detecting **shapes and movement** | Fine **detail** and color |
| Detail (acuity) | Low: many rods share one pathway | High: foveal cones have nearly private lines |
| Dark adaptation | Slow, about 20–30 minutes to full sensitivity | Fast, about 10 minutes, but less sensitive |

**Light and dark adaptation.** Walking into a dark theater, you see almost nothing at first; over the next 20–30 minutes the **rods** become far more sensitive (**dark adaptation**), and shapes emerge, though without color. Walking back into sunlight, the world is painfully bright until the system resets within a minute or so (**light adaptation**) and the cones take over again.

### The signal's route out of the eye

1. Light passes through the front layers of the retina to reach the **rods and cones** at the back.
2. Rods and cones transduce light and pass the signal to **bipolar cells**.
3. Bipolar cells activate **ganglion cells**.
4. Ganglion-cell axons bundle together into the **optic nerve**, which exits at the **blind spot**.
5. At the **optic chiasm**, fibers from the inner half of each retina cross, so each side of the brain receives the opposite half of the visual field.
6. Signals relay through the **thalamus** to the **primary visual cortex** in the **occipital lobe**.

### Worked example: why look slightly away from a faint star?

1. A faint star sends very little light, so only **rods** can respond.
2. Rods are scarce in the fovea and plentiful in the periphery.
3. Looking straight at the star puts its image on the cone-packed fovea, where it may vanish.
4. Looking a little to one side puts the image on rod-rich retina, and the star reappears.

The same logic explains why you can see shapes but not colors in a dark room: only rods are working.
      `
    },
    {
      id: 'sensation-sensory-processing-p2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Trace the Pathway** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Light passes through the pupil and is then focused by the _____.',
            options: ['lens', 'iris', 'retina', 'optic nerve']
          },
          {
            label: 'Cones that give sharp, detailed color vision are packed into the central region called the _____.',
            options: ['fovea', 'periphery', 'blind spot', 'optic nerve']
          },
          {
            label: 'The optic nerve leaves the eye at a spot with no receptors, called the _____.',
            options: ['blind spot', 'fovea', 'optic chiasm', 'pupil']
          },
          {
            label: 'After relaying through the thalamus, visual signals reach the primary visual cortex in the _____ lobe.',
            options: ['occipital', 'temporal', 'parietal', 'frontal']
          }
        ],
        correctAnswers: ['lens', 'fovea', 'blind spot', 'occipital'],
        hint1: 'Focusing happens before light reaches the retina.',
        hint2: 'Rods sit mostly in the periphery; cones crowd into the center of the retina.',
        hint3: 'Vision is processed at the back of the brain.',
        explanation: 'Light is focused by the lens; cones are concentrated in the fovea; the optic nerve leaves the eye at the blind spot; and the thalamus relays visual signals to the occipital lobe.'
      }
    },
    {
      id: 'sensation-sensory-processing-p2-s5-problems',
      type: 'text' as const,
      content: `
### 👓 When Focusing Goes Wrong

| Condition | What happens to the image | What looks blurry | Typical cause | Corrective lens |
|---|---|---|---|---|
| **Nearsightedness** (myopia) | Focuses **in front of** the retina | **Distant** objects | Eyeball too long or cornea too curved | Concave (diverging) |
| **Farsightedness** (hyperopia) | Focuses **behind** the retina | **Near** objects | Eyeball too short or cornea too flat | Convex (converging) |

Memory hook: a near*sighted* person sees **near** things clearly. A related change with age is **presbyopia**: the lens stiffens, accommodation weakens, and reading glasses become necessary for close work.

### When the eye works but the brain does not

These two cases show that seeing depends on the brain, not just the eye.

**Blindsight.** After damage to the primary visual cortex, a person reports seeing nothing in part of the visual field. Yet when asked to guess, the person can point to or avoid objects there well above chance. The eyes and some visual pathways still carry information to other brain areas, but it does not reach conscious awareness.

**Prosopagnosia** ("face blindness"). A person sees faces clearly, including eyes, nose and mouth, but cannot recognize *whose* face it is, even a close family member's. Other objects are recognized normally. Like blindsight, it can follow damage to the brain's visual areas, mainly in the **occipital lobes** (including where they meet the temporal lobe on the underside of the brain). Some people acquire it after a stroke or injury; others are born with it.

| Case | Eyes working? | What is lost | What remains |
|---|---|---|---|
| Blindsight | Yes | Conscious experience of seeing in part of the field | Ability to locate or react to objects there |
| Prosopagnosia | Yes | Recognition of familiar faces | Seeing facial features; recognizing voices and objects |

**Common mix-up:** the blind spot is not damage. Everyone has one in each eye; you rarely notice it because the other eye covers that region and the brain fills in the gap.
      `
    },
    {
      id: 'sensation-sensory-processing-p2-s6-input',
      type: 'input-boxes' as const,
      content: `
**Name the Structure** ✍️

Type a single term.
      `,
      exercise: {
        questions: [
          {
            question: 'Which photoreceptors let you see shapes, but not colors, in a dark room?',
            answer: 'rods',
            acceptableAnswers: ['rod', 'rod cells'],
            explanation: 'Rods work in dim light and do not code color, so night vision is in shades of gray.'
          },
          {
            question: 'Which central region of the retina, packed with cones, gives the sharpest detail?',
            answer: 'fovea',
            acceptableAnswers: ['the fovea', 'fovea centralis'],
            explanation: 'The fovea is dense with cones that have nearly private pathways to the brain, giving high acuity.'
          },
          {
            question: 'Damage to the primary visual cortex, located in which lobe, can produce blindsight?',
            answer: 'occipital',
            acceptableAnswers: ['occipital lobe', 'the occipital lobe'],
            explanation: 'The primary visual cortex is in the occipital lobe; damage there removes conscious sight in part of the field, while some visual information still guides behavior.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Vision** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A camper walking at night notices that a gray shape at the edge of the trail is easier to see when she does not look straight at it. Which explanation fits best?',
            options: [
              'Her cones adapt to darkness faster than her rods can',
              'Her fovea holds the rods that respond best in dim light',
              'Her periphery is rich in rods that work in dim light',
              'Her blind spot sits at the center of her visual field'
            ],
            correctAnswer: 2,
            explanation: 'Rods respond in dim light and are concentrated in the periphery, so an image off to the side lands on rod-rich retina. The fovea is mostly cones, and the blind spot lies off center where the optic nerve exits.'
          },
          {
            question: 'Jalen can read his textbook easily but cannot make out the board from the back of the classroom. His eye doctor says light from distant objects is focusing short of his retina. Which condition does he have?',
            options: [
              'Farsightedness, with images focused behind the retina',
              'Nearsightedness, with images focused in front of the retina',
              'Presbyopia, with a lens too stiff to change its shape',
              'Blindsight, with damage to the primary visual cortex'
            ],
            correctAnswer: 1,
            explanation: 'Clear near vision with blurry distant vision, and focus falling in front of the retina, define nearsightedness. Farsightedness blurs near objects, and presbyopia is an age-related loss of near focus.'
          },
          {
            question: 'After a stroke in the back of his brain, a patient cannot tell who his daughter is from her appearance alone, though he describes her eyes and smile in detail and knows her instantly when she speaks. Which condition best fits this case?',
            options: [
              'Blindsight, from losing conscious sight in part of the field',
              'Prosopagnosia, from damage to visual areas of the cortex',
              'Monochromatism, from losing the use of the cones',
              'Nearsightedness, from a change in the shape of the eye'
            ],
            correctAnswer: 1,
            explanation: 'He still sees facial features in detail, so his eyes and basic vision work; what is lost is the identity of a familiar face, which is prosopagnosia. Blindsight would remove conscious sight of part of the visual field, not just face recognition.'
          }
        ]
      }
    }
  ]
}
