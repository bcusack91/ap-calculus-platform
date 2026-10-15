export const psychPrenatalPart2Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 2 of 7 — Infancy and Childhood: Reflexes, Depth Perception, and Motor Skills**

Newborns can look helpless, but they arrive equipped with automatic responses, sensory preferences and a brain primed to learn. Over the next few years, physical growth unlocks the skills that make a child more independent.

> 🔑 **Key Concept:** Physical development in infancy and childhood happens in **generally the same order** for all children, but the **timing varies**. Reflexes, motor milestones and early perceptual abilities are signs that development is on track.

### Newborn Reflexes

A **reflex** is an unlearned, automatic response to a specific stimulus. Several newborn reflexes help survival, and doctors check them because their presence, and their later fading, indicates a healthy nervous system.

| Reflex | Stimulus | Response | Why it matters |
|---|---|---|---|
| **Rooting** | Touch on the cheek or corner of the mouth | Baby turns its head toward the touch and opens its mouth | Helps the baby find the nipple to feed |
| **Sucking** | Object placed in the mouth | Rhythmic sucking | Allows feeding |
| **Grasping** | Object pressed into the palm | Fingers close tightly around it | Fades as voluntary grasping develops |
| **Moro (startle)** | Sudden loss of support or loud noise | Arms fling outward, then pull back in | Fades in the first months of life |

Most of these reflexes fade during the first months as the cortex matures and voluntary control takes over. A reflex that is **missing at birth** or that **persists far longer than expected** can be an early sign of a neurological problem. That is why the AP framework describes reflexes as indicators of on-track physical and psychological milestones.

### Early Perceptual Preferences

Newborns are not blank slates for perception either. Within days they:
- look longer at face-like patterns than at scrambled patterns,
- turn toward their mother's voice and the smell of her milk,
- see best at about 20 to 30 centimeters, roughly the distance to a caregiver's face during feeding.

Researchers learned these facts with methods that use behaviors infants can already control, such as **looking time** and sucking rate. A baby who looks longer at one image than another is showing that it can tell them apart.
      `
    },
    {
      id: 'prenatal-childhood-development-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Reflexes and Early Perception** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A nurse gently strokes a newborn\'s cheek, and the baby turns toward her finger with its mouth open. What does this response show?',
            options: [
              'The rooting reflex, an unlearned response that aids feeding',
              'Operant conditioning from being rewarded with milk at birth',
              'Object permanence, the knowledge that hidden objects exist',
              'The grasping reflex, a response to pressure on the palm'
            ],
            correctAnswer: 0,
            explanation: 'Turning toward a touch on the cheek with the mouth open is the rooting reflex, which is present at birth without learning. Grasping is triggered by pressure on the palm, and object permanence is a later cognitive milestone.'
          },
          {
            question: 'A pediatrician notices that a 1-year-old still shows a strong grasping reflex that should have faded months earlier. Why might this concern her?',
            options: [
              'Reflexes are learned habits that the parents failed to discourage',
              'Persisting reflexes can signal a delay in nervous system development',
              'Strong reflexes mean the child will walk much earlier than peers',
              'All reflexes should remain strong for the whole of early childhood'
            ],
            correctAnswer: 1,
            explanation: 'Newborn reflexes normally fade as the cortex matures and voluntary control develops, so a reflex that persists can indicate a neurological delay. Reflexes are unlearned, and they do not predict early walking.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p2-s3-cliff',
      type: 'text' as const,
      content: `
## The Visual Cliff: Testing Depth Perception in Infants

How can you ask a baby who cannot talk whether it sees depth? In 1960, Eleanor Gibson and Richard Walk built an ingenious apparatus.

### The Apparatus

A table is covered with a sheet of sturdy glass. Under one half, a checkerboard pattern sits directly beneath the glass (the **shallow side**). Under the other half, the same pattern sits several feet below the glass, creating the look of a drop-off (the **deep side**). A plank runs down the middle.

### The Procedure and Results

1. Infants 6 to 14 months old, all able to crawl, were placed on the center plank.
2. Their mothers called to them from the shallow side, then from the deep side.
3. Most infants crawled to their mothers across the shallow side. Of the 27 infants who moved off the plank, only 3 crept onto the deep side. Many cried or peered down at the "cliff" and refused to cross, even though they could feel the solid glass.
4. Newborn animals that walk soon after birth, such as chicks and baby goats, avoided the deep side from their first exposure.

### What It Shows, and What It Cannot Show

| Conclusion | Strength |
|---|---|
| By the time they crawl, most infants perceive depth | Strongly supported |
| The visual cliff is an innovative way to measure infant perception without words | Strongly supported |
| Depth perception is entirely inborn in humans | **Not** shown. The infants were at least 6 months old, so they had months of visual and crawling experience |

Later studies found that babies who have more crawling experience show more wariness of the drop-off. The best reading is that the ability to see depth appears early and experience with moving through the world adds the fear of falling. This is a classic **nature and nurture** interaction.

> 🔑 **AP Connection:** The visual cliff is named in the CED. Be ready to describe the apparatus, state what the infants' behavior shows, and explain why the study cannot settle whether depth perception is innate in humans.
      `
    },
    {
      id: 'prenatal-childhood-development-p2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Visual Cliff Reasoning** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the visual cliff study, the behavior used to measure depth perception was the infant\'s _____',
            options: ['refusal to crawl onto the deep side', 'heart rate during feeding', 'grasping of the plank', 'crying when the mother left']
          },
          {
            label: 'The study cannot show that human depth perception is entirely inborn because the infants _____',
            options: ['were tested only on the shallow side', 'could not see the checkerboard', 'already had months of experience', 'were younger than one week old']
          },
          {
            label: 'Chicks avoiding the deep side on first exposure is evidence that, in some species, depth perception is _____',
            options: ['learned from mothers', 'present without experience', 'absent until adulthood', 'caused by conditioning']
          }
        ],
        correctAnswers: ['refusal to crawl onto the deep side', 'already had months of experience', 'present without experience'],
        hint1: 'What did the infants do, or refuse to do, when called from the far side?',
        hint2: 'The infants had to be able to crawl. How old does that make them?',
        hint3: 'The chicks had no time to learn about drop-offs.',
        explanation: 'Depth perception was inferred from refusal to cross the deep side. Because crawling infants are at least 6 months old, experience could have contributed, while chicks and goats tested at first exposure show depth perception without prior experience.'
      }
    },
    {
      id: 'prenatal-childhood-development-p2-s5-motor',
      type: 'text' as const,
      content: `
## Motor Development: Same Order, Different Timing

**Motor development** is the growth of the ability to move and control the body. Psychologists split it into two kinds of skills.

| Type | Muscles involved | Examples in infancy and childhood |
|---|---|---|
| **Gross motor skills** | Large muscles of the trunk, arms and legs | Holding the head up, rolling over, sitting, crawling, standing, walking, running, jumping |
| **Fine motor skills** | Small muscles of the hands and fingers, coordinated with the eyes | Reaching, picking up a raisin with thumb and finger, stacking blocks, drawing, buttoning, writing |

### A Typical Sequence

| Approximate age | Common milestone |
|---|---|
| 2–4 months | Holds head up; rolls over |
| 6–8 months | Sits without support; begins crawling |
| 9–12 months | Pulls to stand; picks up small objects with thumb and forefinger |
| About 12 months | Takes first independent steps (normal range roughly 9 to 17 months) |
| 2–3 years | Runs; stacks several blocks; scribbles |
| 5–6 years | Hops, skips; draws simple shapes; begins to print letters |

The **order** of these milestones is nearly universal: children sit before they stand and stand before they walk. The **age** at which each appears varies a great deal. A child who walks at 15 months is not "behind" a child who walks at 10 months.

### Maturation Sets the Pace

**Maturation** is the biologically driven growth that unfolds on a genetic timetable and makes new behaviors possible. Experience cannot push a skill much earlier than the body and nervous system allow. Two pieces of evidence:
- **Brain readiness.** Walking requires myelination of motor pathways and growth of the cerebellum. Before these mature, practice has little effect.
- **Restriction studies.** Infants raised on cradleboards that limited their movement in the first months of life walked at about the same age as unrestricted infants.

Experience still matters at the margins. In cultures where caregivers exercise babies' legs and practice upright stepping, infants tend to walk somewhat earlier. Severe deprivation, such as an institution where infants are rarely held or allowed to move, can delay milestones.

### Brain Growth Behind the Milestones

After birth the brain's weight roughly triples by age 3. Neurons form rapid, dense connections, and then **synaptic pruning** removes connections that are rarely used while frequently used pathways are strengthened and myelinated. This "use it or lose it" process is one reason early experience matters so much, and it sets up the idea of sensitive periods in Part 3.

> 🔑 **AP Connection:** Physical skills let children explore without help: a crawling baby can reach a toy, and a walking toddler can follow a parent. Link motor milestones to independence and to cognitive growth. Crawling, for example, coincides with new wariness on the visual cliff.
      `
    },
    {
      id: 'prenatal-childhood-development-p2-s6-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice — Motor Development** ✍️

Type one term for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Skills such as stacking blocks and holding a crayon use small hand muscles. These are ______ motor skills.',
            answer: 'fine',
            explanation: 'Fine motor skills use the small muscles of the hands and fingers.'
          },
          {
            question: 'Biological growth on a genetic timetable that makes new behaviors possible is called ______.',
            answer: 'maturation',
            explanation: 'Maturation sets the order and approximate timing of milestones; experience adjusts them only at the margins.'
          },
          {
            question: 'The process that removes rarely used synapses in the developing brain is synaptic ______.',
            answer: 'pruning',
            explanation: 'Pruning removes unused connections while used pathways are strengthened.'
          }
        ],
        hint1: 'The opposite of gross motor skills.',
        hint2: 'It shares a root with "mature".',
        hint3: 'Think of a gardener trimming branches.'
      }
    },
    {
      id: 'prenatal-childhood-development-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Physical Milestones** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Parents worry because their 14-month-old is not yet walking, though she crawls, pulls to stand and cruises along furniture. What is the best response from a developmental psychologist?',
            options: [
              'Timing varies, and she is following the usual order',
              'She has missed the critical period for learning to walk',
              'Daily walking drills will let her skip the crawling stage',
              'Late walking proves she will have a learning disability'
            ],
            correctAnswer: 0,
            explanation: 'Children reach motor milestones in the same order but at different ages, and many typical children walk after 14 months. Practice cannot reorder the sequence, and late walking within the normal range does not predict a disability.'
          },
          {
            question: 'Which example describes a gross motor skill rather than a fine motor skill?',
            options: [
              'Picking up a cereal piece',
              'Climbing up a short staircase',
              'Turning the pages of a book',
              'Drawing a circle with a crayon'
            ],
            correctAnswer: 1,
            explanation: 'Climbing stairs uses the large muscles of the legs and trunk, so it is a gross motor skill. The other three rely on precise movements of the hands and fingers.'
          },
          {
            question: 'Babies in one culture who were carried on cradleboards that limited movement began walking at about the same age as other babies. What does this finding best support?',
            options: [
              'Walking depends more on maturation than practice',
              'Restricting movement in infancy speeds up walking',
              'Walking is learned mainly by imitating older siblings',
              'Cradleboards caused a delay in fine motor development'
            ],
            correctAnswer: 0,
            explanation: 'If babies with little chance to practice walk on schedule, the timing is driven mainly by biological maturation. The finding shows no speed-up, says nothing about imitation, and did not measure fine motor skills.'
          }
        ]
      }
    }
  ]
}
