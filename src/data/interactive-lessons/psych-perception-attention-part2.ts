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
| **Relative height** | Objects higher in the visual field appear farther | Mountains higher on canvas = more distant |
| **Light and shadow** | Shading indicates depth and curvature | Shadow on one side of a sphere |
| **Motion parallax** | Closer objects appear to move faster when you move | Trees zip by from a car; mountains barely move |
| **Aerial perspective** | Distant objects appear hazier and bluer | Mountains in the distance look pale blue |

> **Why this matters for the AP exam:** You must distinguish binocular from monocular cues and identify specific cues from scenario descriptions. Motion parallax and linear perspective are the most frequently tested monocular cues.
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
            question: 'While driving, you notice that nearby fence posts seem to fly past quickly, but distant mountains barely move. This depth cue is:',
            options: [
              'Retinal disparity — each eye sees the fence posts differently',
              'Linear perspective — the fence posts converge in the distance',
              'Motion parallax — closer objects appear to move faster during observer movement',
              'Convergence — your eyes turn inward to focus on the fence posts'
            ],
            correctAnswer: 2,
            explanation: 'Motion parallax is a MONOCULAR cue based on the apparent speed of objects during observer movement. Close objects (fence posts) appear to move quickly in the opposite direction of your movement, while distant objects (mountains) barely move. This is why you can judge distance even with one eye closed while moving. Key: the OBSERVER must be moving for motion parallax to work.'
          },
          {
            question: 'A person who has lost vision in one eye would STILL be able to use all of the following depth cues EXCEPT:',
            options: [
              'Linear perspective',
              'Retinal disparity',
              'Relative size',
              'Motion parallax'
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
| Most infants (36 of 36) refused to crawl over the "deep" side | Depth perception present by crawling age (~6 months) |
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
3. Does it mention movement of the observer? → **Motion parallax** (monocular)
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
          { label: 'Your eyes turn inward when focusing on a close object, providing distance information', options: ['Retinal disparity', 'Convergence', 'Linear perspective', 'Motion parallax'] },
          { label: 'In a painting, a house partially blocking a tree indicates the house is closer', options: ['Relative size', 'Interposition (overlap)', 'Texture gradient', 'Aerial perspective'] },
          { label: 'Distant mountains appear hazy and bluish compared to nearby trees', options: ['Relative height', 'Aerial perspective', 'Light and shadow', 'Retinal disparity'] }
        ],
        correctAnswers: ['Convergence', 'Interposition (overlap)', 'Aerial perspective'],
        hint1: 'Eye muscles turning inward = a binocular cue related to muscle tension.',
        hint2: 'One object blocking another = interposition/overlap.',
        hint3: 'Haziness and blue tint at distance = atmospheric/aerial perspective.',
        explanation: 'Convergence = eyes turning inward (binocular muscle cue). Interposition = one object partially blocking another (monocular). Aerial perspective = distant objects appear hazy/bluish due to atmosphere (monocular).'
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
| Motion parallax requires two eyes | It's a monocular cue — the observer's movement provides the information |
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
              'Retinal disparity and convergence',
              'Linear perspective, interposition, and relative size',
              'Motion parallax and convergence',
              'Retinal disparity and texture gradient'
            ],
            correctAnswer: 1,
            explanation: 'Artists can only use MONOCULAR cues in 2D paintings (binocular cues like retinal disparity and convergence require actual 3D space). Linear perspective (converging lines), interposition (overlapping objects), and relative size (smaller = farther) are the most commonly used artistic techniques for creating depth. Motion parallax also can\'t be used in a static painting.'
          },
          {
            question: 'A 5-month-old infant is placed on the visual cliff apparatus. The infant shows interest (decreased heart rate) when looking at the deep side but does NOT show fear. A 9-month-old infant shows fear (increased heart rate) and refuses to cross. What does this suggest?',
            options: [
              'Only the 9-month-old can perceive depth',
              'Depth perception is present early, but the fear response develops later with crawling experience',
              'The 5-month-old has defective vision',
              'Depth perception is entirely learned between 5 and 9 months'
            ],
            correctAnswer: 1,
            explanation: 'The decreased heart rate in the 5-month-old indicates INTEREST — meaning the infant CAN perceive the depth difference (otherwise there would be nothing interesting about the deep side). However, the FEAR response (avoidance) develops later, likely after the infant gains crawling experience and learns that drops are dangerous. This supports the view that depth PERCEPTION has innate components, but the FEAR of heights is partly learned through experience.'
          }
        ]
      }
    }
  ]
}
