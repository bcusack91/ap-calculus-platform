export const psychPerceptionPart2Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce2-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 2 of 7 — Depth Perception**

How do we perceive a 3D world from 2D images on our retinas? The answer involves two categories of depth cues — some require both eyes, others work with just one.

### Key Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Depth perception** | Ability to judge distance and 3D spatial relationships | Catching a ball thrown toward you |
| **Binocular cues** | Depth cues requiring both eyes | Retinal disparity, convergence |
| **Monocular cues** | Depth cues available to either eye alone | Relative size, overlap, linear perspective |

### Binocular Depth Cues (Need BOTH Eyes)

| Cue | How It Works | Distance Range |
|-----|-------------|----------------|
| **Retinal disparity** (binocular disparity) | Each eye receives a slightly different image; brain computes distance from the difference | Effective up to ~6 meters |
| **Convergence** | Eyes turn inward for close objects; brain uses the muscle tension as a distance cue | Effective up to ~3 meters |

### Monocular Depth Cues (Need Only ONE Eye)

| Cue | Rule | How Artists Use It |
|-----|------|--------------------|
| **Relative size** | Smaller objects appear farther away | Draw distant objects smaller |
| **Interposition** (overlap) | Objects that block others appear closer | Overlap figures to show depth |
| **Linear perspective** | Parallel lines converge in the distance | Railroad tracks meeting at horizon |
| **Texture gradient** | Texture becomes finer and denser with distance | Detailed grass in foreground, smooth in background |
| **Relative clarity** | Hazy, blurry objects appear farther; sharp, clear objects appear closer | Paint distant mountains hazy and less detailed |

> **Why this matters for the AP exam:** You must distinguish binocular from monocular cues and identify specific cues from scenario descriptions. The exam addresses only these five monocular cues: relative clarity, relative size, texture gradient, linear perspective, and interposition (CED 2.1.B.2).
      `
    },
    {
      id: 'perce2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Standing on a beach, you can see individual pebbles near your feet, but farther down the shore the sand looks smooth and fine-grained. This depth cue is:',
            options: [
              'Retinal disparity — each eye receives a slightly different image of the sand',
              'Linear perspective — the edges of the shoreline converge toward the horizon',
              'Texture gradient — detail grows finer and denser as distance increases',
              'Convergence — your eyes turn inward more sharply to focus on the pebbles'
            ],
            correctAnswer: 2,
            explanation: 'A surface whose texture shifts from coarse and distinct up close to fine and dense far away signals distance through texture gradient, a monocular cue. The scenario describes texture, not two different retinal images, converging lines, or eye-muscle tension.'
          },
          {
            question: 'A person who has lost vision in one eye would STILL be able to use all of the following depth cues EXCEPT:',
            options: [
              'Linear perspective',
              'Retinal disparity',
              'Relative size',
              'Texture gradient'
            ],
            correctAnswer: 1,
            explanation: 'Retinal disparity requires BOTH eyes to work — it computes depth from the difference between the two retinal images. All others are monocular cues that work with just one eye. This is why someone who loses an eye can still judge depth reasonably well (using monocular cues) but may have difficulty with close-range depth judgments where binocular cues are most useful.'
          }
        ]
      }
    },
    {
      id: 'perce2-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 The Visual Cliff Experiment

**Researchers:** Eleanor Gibson & Richard Walk (1960)

**Purpose:** Test whether depth perception is innate or learned

**Procedure:**
- Created a glass-topped table with a shallow side and a deep side (a visual "cliff")
- The deep side showed a checkered pattern far below the glass
- Tested infants (6-14 months) by having mothers call from the deep side

**Results:**
| Finding | Implication |
|---------|------------|
| Of 36 infants tested, only 3 crept onto the "deep" side when called | Depth perception present by crawling age (~6 months) |
| Heart rate DECREASED when young infants viewed the deep side | Interest, not fear — suggesting depth perception develops before fear of heights |
| Animals (chicks, goats, kittens) avoided the deep side from birth | Depth perception has innate components |

**Limitations:**
- Can't test younger (pre-crawling) infants with crawling behavior
- Can't determine if depth perception is truly INNATE or learned by 6 months
- Cross-cultural studies show the age of crawling varies but cliff avoidance timing is similar

### Binocular vs. Monocular: Quick Decision Guide

**AP Question asks about depth cue?**
1. Does it mention BOTH eyes, eye muscles, or slightly different images? → **Binocular**
2. Does it mention objects at different distances with one eye, or an artist's technique? → **Monocular**
3. Does it mention haziness versus sharpness? → **Relative clarity** (monocular)
4. Does it mention lines converging to a point? → **Linear perspective** (monocular)
      `
    },
    {
      id: 'perce2-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The depth cue where each eye receives a slightly different image is called retinal ___', answer: 'disparity' },
          { label: 'Gibson & Walk\'s experiment testing depth perception in infants used the visual ___', answer: 'cliff' },
          { label: 'The monocular cue where parallel lines appear to meet in the distance is called linear ___', answer: 'perspective' }
        ]
      }
    },
    {
      id: 'perce2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Depth Cue** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Your eyes turn inward when focusing on a close object, providing distance information', options: ['Retinal disparity', 'Convergence', 'Linear perspective', 'Texture gradient'] },
          { label: 'In a painting, a house partially blocking a tree indicates the house is closer', options: ['Relative size', 'Interposition', 'Texture gradient', 'Relative clarity'] },
          { label: 'Distant mountains appear hazy and blurred compared to sharply detailed nearby trees', options: ['Relative size', 'Relative clarity', 'Texture gradient', 'Retinal disparity'] }
        ],
        correctAnswers: ['Convergence', 'Interposition', 'Relative clarity'],
        hint1: 'Eye muscles turning inward = a binocular cue related to muscle tension.',
        hint2: 'One object blocking another = interposition/overlap.',
        hint3: 'Hazy and blurry at a distance, sharp up close = relative clarity.',
        explanation: 'Convergence = eyes turning inward (binocular muscle cue). Interposition = one object partially blocking another (monocular). Relative clarity = hazy objects are judged farther than sharp ones (monocular).'
      }
    },
    {
      id: 'perce2-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Depth Perception

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| You need both eyes to perceive depth | Monocular cues allow depth perception with one eye |
| Depth perception is 100% innate | It has innate components but experience also plays a role |
| Relative clarity and relative size are the same cue | Clarity is about how sharp or hazy an object looks; size is about how large its image is |
| Convergence works at all distances | It's only effective up to about 3 meters |

**Binocular vs. Monocular Mnemonic:**
- **BI**nocular = **BI** = both = 2 eyes needed (retinal disparity + convergence — only 2!)
- **MONO**cular = **MONO** = one = 1 eye is enough (everything else — many cues!)

> **AP Tip:** If the question says "one eye is covered" or "a person who is blind in one eye," immediately eliminate binocular cues. Only retinal disparity and convergence are binocular — all other cues are monocular.
      `
    },
    {
      id: 'perce2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An artist wants to create the illusion of depth in a flat painting. She cannot use binocular cues because the painting is 2D. Which combination of monocular cues would be MOST effective?',
            options: [
              'Retinal disparity, convergence, and relative size',
              'Linear perspective, interposition, and relative size',
              'Convergence, relative clarity, and texture gradient',
              'Retinal disparity, interposition, and texture gradient'
            ],
            correctAnswer: 1,
            explanation: 'Artists can only use MONOCULAR cues in 2D paintings (binocular cues like retinal disparity and convergence require two eyes viewing actual 3D space), so any set containing one of them fails. Linear perspective (converging lines), interposition (overlapping objects), and relative size (smaller = farther) are all monocular and are the most commonly used artistic techniques for creating depth.'
          },
          {
            question: 'A 5-month-old infant is placed on the visual cliff apparatus. The infant shows interest (decreased heart rate) when looking at the deep side but does NOT show fear. A 9-month-old infant shows fear (increased heart rate) and refuses to cross. What does this suggest?',
            options: [
              'Only the 9-month-old can perceive depth; the 5-month-old cannot detect the drop',
              'Depth perception is present early, but fear of drops develops later with crawling',
              'The 5-month-old\'s visual system is too immature to register texture',
              'Infants learn depth perception entirely between 5 and 9 months of age'
            ],
            correctAnswer: 1,
            explanation: 'The decreased heart rate in the 5-month-old indicates INTEREST — meaning the infant CAN perceive the depth difference (otherwise there would be nothing interesting about the deep side). However, the FEAR response (avoidance) develops later, likely after the infant gains crawling experience and learns that drops are dangerous. This supports the view that depth PERCEPTION has innate components, but the FEAR of heights is partly learned through experience.'
          }
        ]
      }
    }
  ]
}
