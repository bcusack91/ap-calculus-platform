export const psychSensationPart3Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Sensation and Sensory Processing

**Part 3 of 7 — Color Vision: Two Theories, Two Stages**

> 🔑 **Key Concept:** Color vision is explained by **two theories that are both right, at different stages**. **Trichromatic theory** describes the cones in the retina. **Opponent-process theory** describes how neurons *beyond* the cones (ganglion cells, the thalamus and the visual cortex) recode the cone signals into opposing pairs.

### Stage 1: Trichromatic (Young–Helmholtz) theory

Thomas Young and Hermann von Helmholtz proposed that the retina contains **three kinds of color receptors**. Later research confirmed three cone types, each most sensitive to a different range of wavelengths:

| Cone type | Detects | Peak sensitivity (approximate) |
|---|---|---|
| **Blue** cones (S) | **Short** wavelengths | about 420 nm |
| **Green** cones (M) | **Medium** wavelengths | about 530 nm |
| **Red** cones (L) | **Long** wavelengths | about 560 nm |

Cones sit mainly in the **fovea**, which is why color and fine detail are sharpest at the center of gaze.

Each cone type responds to a **broad, overlapping** range of wavelengths. No single cone "knows" the color. The brain reads hue from the **ratio** of activity across all three types.

**Worked example: where does yellow come from?**
1. A light of about 580 nm falls on the retina.
2. It excites red (long) cones strongly, green (medium) cones somewhat less, and blue (short) cones hardly at all.
3. That particular ratio is read as **yellow**.
4. A mix of "red" and "green" light that produces the *same* red-to-green cone ratio also looks yellow. This is why a phone or TV screen can show thousands of colors with only red, green and blue pixels: it reproduces cone ratios, not actual wavelengths.

Trichromatic theory explains **color mixing** of lights and the most common forms of color vision deficiency (a missing or altered cone type). What it cannot explain on its own are **afterimages** and why some color combinations never appear.
      `
    },
    {
      id: 'sensation-sensory-processing-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Trichromatic Theory** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A television screen produces the full range of colors a viewer sees using only tiny red, green and blue light sources. Which idea best explains why three sources are enough?',
            options: [
              'Opponent cells in the thalamus pair each light with its complement',
              'Color is coded by the ratio of activity across cones',
              'Ganglion cells in the retina fill in the colors that are missing',
              'Rods in the periphery add the colors that cones do not detect'
            ],
            correctAnswer: 1,
            explanation: 'Trichromatic theory holds that hue is coded by the relative activity of three cone types, so three lights that set those ratios can match almost any color. Rods do not code color, and opponent cells recode cone signals rather than supply new colors.'
          },
          {
            question: 'According to trichromatic theory, how does the visual system tell a 580 nm yellow light from a 530 nm green light?',
            options: [
              'Each wavelength activates its own separate cone type',
              'Only the yellow light activates the rods',
              'The pattern of activity across the cone types differs',
              'The yellow light excites the blue cones most'
            ],
            correctAnswer: 2,
            explanation: 'Each cone type responds to a wide band of wavelengths, so color is coded by the pattern or ratio of activity across all three types. There is no separate cone for every wavelength, and yellow light barely affects the short-wavelength cones.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p3-s3-opponent',
      type: 'text' as const,
      content: `
### 🔄 Stage 2: Opponent-Process Theory

Ewald Hering noticed two things trichromatic theory could not handle. People can picture a reddish-yellow (orange) or a bluish-green (teal), but nobody can picture a **reddish-green** or a **bluish-yellow**. And people with red–green color deficiency usually still see **yellow**. He proposed that color is coded in **three opposing pairs**:

| Opponent channel | One side | Other side |
|---|---|---|
| Red versus green | Red | Green |
| Blue versus yellow | Blue | Yellow |
| Black versus white | Dark | Light |

**Where does it happen?** Not in the cones. After the cones, **ganglion cells** in the retina and neurons in the **thalamus** and **visual cortex** are excited by one member of a pair and inhibited by the other. A single opponent cell cannot signal "red" and "green" at the same moment, which is why reddish-green is never seen.

### Afterimages

An **afterimage** is an image that persists after the stimulus is removed. The opponent theory explains its colors:

1. Stare at a **red** patch for about 30 seconds. The red side of the red–green channel fires steadily and **adapts** (fatigues).
2. Look at a **white** wall. White light stimulates both sides of each channel equally.
3. The fatigued red side responds weakly, so the **green** side wins.
4. You see a **green** patch on the wall.

| Stare at | Afterimage on a white surface |
|---|---|
| Red | Green |
| Green | Red |
| Yellow | Blue |
| Blue | Yellow |
| Black | White |
| White | Black |

**Worked example.** A flag printed in **green, black and yellow** stripes produces an afterimage in **red, white and blue**. Each stripe flips to the other member of its opponent pair.
      `
    },
    {
      id: 'sensation-sensory-processing-p3-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the Afterimage** 🔍

Each person stares at a colored shape for 30 seconds, then looks at a plain white wall.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After staring at a yellow star, the afterimage is _____.',
            options: ['blue', 'green', 'red', 'black']
          },
          {
            label: 'After staring at a green apple, the afterimage is _____.',
            options: ['blue', 'yellow', 'red', 'white']
          },
          {
            label: 'After staring at a black square, the afterimage is _____.',
            options: ['gray', 'white', 'blue', 'yellow']
          },
          {
            label: 'The afterimage is best explained by _____ theory.',
            options: ['opponent-process', 'trichromatic', 'place', 'gate-control']
          }
        ],
        correctAnswers: ['blue', 'red', 'white', 'opponent-process'],
        hint1: 'Each color flips to the other member of its opponent pair.',
        hint2: 'The pairs are red–green, blue–yellow and black–white.',
        hint3: 'The theory that explains afterimages works beyond the cones, in ganglion cells and the thalamus.',
        explanation: 'Yellow flips to blue, green flips to red, and black flips to white, because fatigue on one side of an opponent channel lets the other side dominate. That is opponent-process theory.'
      }
    },
    {
      id: 'sensation-sensory-processing-p3-s5-deficiency',
      type: 'text' as const,
      content: `
### 🧩 Putting the Two Theories Together

| Stage | Where | Theory | What it explains |
|---|---|---|---|
| 1 | Cones in the retina | **Trichromatic** | Color mixing of lights; deficiencies from a missing or altered cone type |
| 2 | Ganglion cells, thalamus, visual cortex | **Opponent-process** | Afterimages; no reddish-green or bluish-yellow; yellow seen without red-green vision |

On the exam, the phrase "both theories are correct" is the safe synthesis: three cone types feed signals into opponent-coded neurons.

### Color vision deficiency

"Color blindness" almost never means seeing no color at all. **Color vision deficiency** involves damage to or irregularities in one or more **cone types** or in the **opponent ganglion cells** (red/green, blue/yellow), so some colors are confused with others.

| Type | What is going on | What the person sees |
|---|---|---|
| **Dichromatism** | One of the three cone types is missing or not working, so color is coded with two | Some color pairs look alike; red–green confusion is far more common than blue–yellow |
| **Monochromatism** | Only one kind of working cone, or no working cones at all | Little or no color; the world appears in shades of one hue or of gray |

Milder forms also exist in which all three cone types work but one is shifted in sensitivity. Red–green deficiency runs in families and is far more common in males than in females.

**Testing.** Plates of colored dots (such as the Ishihara test) hide a number that a person with typical color vision sees and a person with red–green deficiency does not.

**Linking it back.** A person missing one cone type can match any color using just two lights, as trichromatic theory predicts. Yet many people with red–green deficiency still see yellow, which opponent-process theory explains: their blue–yellow channel still works.
      `
    },
    {
      id: 'sensation-sensory-processing-p3-s6-input',
      type: 'input-boxes' as const,
      content: `
**Quick Recall — Color Vision** ✍️

Type a single word or number.
      `,
      exercise: {
        questions: [
          {
            question: 'How many types of cones does trichromatic theory propose?',
            answer: '3',
            acceptableAnswers: ['three', 'three types', '3 types'],
            explanation: 'Trichromatic theory proposes three cone types, most sensitive to short, medium and long wavelengths.'
          },
          {
            question: 'After staring at a red circle and then looking at a white page, what color is the afterimage?',
            answer: 'green',
            acceptableAnswers: ['green afterimage'],
            explanation: 'Red and green form one opponent pair, so fatigue on the red side lets green dominate.'
          },
          {
            question: 'A person with only one kind of working cone, who sees little or no color, has which type of color vision deficiency?',
            answer: 'monochromatism',
            acceptableAnswers: ['monochromacy', 'monochromat', 'monochromatic'],
            explanation: 'Monochromatism means vision with only one cone type, or none, so hues cannot be told apart. Dichromatism means two working cone types.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Color** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Students in a practice demonstration stare at a bright blue square, then look at a white screen and report a yellow square. Which statement best explains the report?',
            options: [
              'Fatigued opponent cells let the yellow side dominate',
              'The blue cones shift to detect yellow wavelengths instead',
              'The blue light raised the absolute threshold for color',
              'Rods take over color coding once the cones have adapted'
            ],
            correctAnswer: 0,
            explanation: 'Prolonged blue stimulation fatigues the blue side of the blue–yellow opponent channel, so white light now drives the yellow side more strongly. Cones do not switch the wavelengths they detect, and rods do not code color.'
          },
          {
            question: 'Marcus, who is red–green color deficient, says he has no trouble seeing a yellow traffic sign. Which theory best accounts for this?',
            options: [
              'Place theory',
              'Opponent-process theory',
              'Trichromatic theory',
              'Gate control theory'
            ],
            correctAnswer: 1,
            explanation: 'Opponent-process theory treats blue–yellow as a channel separate from red–green, so yellow can be seen even when red–green coding fails. On a purely trichromatic account, yellow depends on red and green cones, so this observation was a puzzle.'
          },
          {
            question: 'On a color plate test, Theo cannot see the number that most classmates read easily, and an eye doctor finds that one of his three cone types does not respond to light. Which description fits Theo best?',
            options: [
              'Dichromatism, color coded by two kinds of cone',
              'Monochromatism, color coded by one kind of cone',
              'Blindsight, color seen without awareness of it',
              'Rod vision, color coded by cells in the periphery'
            ],
            correctAnswer: 0,
            explanation: 'With one of three cone types missing, color is coded by the remaining two, which is dichromatism; certain colors then look alike. Monochromatism would leave only one working cone type, and rods do not code color at all.'
          }
        ]
      }
    }
  ]
}
