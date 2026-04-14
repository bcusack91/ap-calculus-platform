export const psychPerceptionPart3Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce3-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 3 of 7 — Perceptual Constancies & Illusions**

Despite constantly changing sensory input, we perceive a stable world. This is thanks to perceptual constancies — and when these constancies are tricked, we experience visual illusions.

### Perceptual Constancies

| Constancy | What Stays Stable | Despite Changes In... | Example |
|-----------|-------------------|----------------------|---------|
| **Size constancy** | Perceived size of an object | Retinal image size (distance changes) | A car driving away still looks "car-sized" even though its retinal image shrinks |
| **Shape constancy** | Perceived shape of an object | Viewing angle (orientation changes) | A door looks rectangular even when viewed at an angle (trapezoidal retinal image) |
| **Color constancy** | Perceived color of an object | Lighting conditions | A white shirt looks white under indoor lighting, sunlight, and fluorescent light |
| **Brightness constancy** | Perceived brightness | Illumination levels | White paper in a dark room still looks lighter than black paper in sunlight |

### How Constancies Work

Constancies rely on **context** — your brain compares the target object to surrounding objects:
- **Size constancy**: Brain uses distance cues to "correct" the retinal image size
- **Color constancy**: Brain accounts for the color of the illumination (remember #TheDress viral debate — was it blue/black or white/gold?)
- **Shape constancy**: Brain uses knowledge of the object's actual shape plus viewing angle

> **Why this matters:** Perceptual constancies demonstrate that perception is an active, constructive process — your brain COMPUTES what it "sees" rather than passively recording retinal images.
      `
    },
    {
      id: 'perce3-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'You look at a coin from directly above (it appears circular) and then from an angle (the retinal image is now an ellipse). Yet you still perceive it as circular. This is:',
            options: [
              'Size constancy — the coin appears the same size',
              'Shape constancy — the coin appears the same shape despite viewing angle changes',
              'Color constancy — the coin appears the same color',
              'The Gestalt principle of closure — you fill in the missing round shape'
            ],
            correctAnswer: 1,
            explanation: 'Shape constancy allows us to perceive objects as maintaining their actual shape even when the retinal image changes due to viewing angle. The coin\'s retinal image is elliptical when viewed at an angle, but our brain "knows" the coin is round and perceives it accordingly. This is NOT closure (no gaps to fill) or size constancy (size isn\'t changing).'
          },
          {
            question: 'In the viral photo debate about "The Dress" (2015), people disagreed about whether a dress was blue/black or white/gold. This disagreement is best explained by differences in:',
            options: [
              'Visual acuity — some people had better vision',
              'Color constancy — different brains made different assumptions about the illumination',
              'Retinal disparity — each eye saw different colors',
              'The Gestalt principle of similarity — people grouped colors differently'
            ],
            correctAnswer: 1,
            explanation: 'The Dress illusion perfectly illustrates color constancy. Our brains must "subtract" the illumination color to determine the object\'s true color. Some brains assumed the dress was in shadow (blue illumination → subtract blue → perceive white/gold). Others assumed bright yellowish light (→ subtract yellow → perceive blue/black). Same retinal image, different color constancy assumptions = different perceived colors!'
          }
        ]
      }
    },
    {
      id: 'perce3-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Visual Illusions

Illusions reveal HOW our perceptual system works by showing when it fails. Each illusion exploits a specific perceptual mechanism:

| Illusion | What You See | Why It Happens |
|----------|-------------|----------------|
| **Müller-Lyer** | Two equal lines look different lengths (arrows in/out) | Size constancy misapplied — arrowheads suggest interior vs. exterior corners (depth cues) |
| **Ponzo** | Two equal lines between converging lines — top line looks longer | Linear perspective cues trick size constancy — "farther" objects should be bigger if same retinal size |
| **Ames room** | One person looks giant, another looks tiny in the same room | Room is actually trapezoidal but designed to look rectangular from one viewpoint |
| **Moon illusion** | The moon looks larger on the horizon than overhead | Depth cues at the horizon (buildings, terrain) trigger size constancy adjustments |
| **Necker cube** | A wireframe cube spontaneously flips orientation | Ambiguous figure — two equally valid interpretations of depth |
| **Rubin's vase** | Image alternates between a vase and two faces | Ambiguous figure-ground — brain can assign either region as "figure" |

### The Müller-Lyer Illusion in Detail (Most Tested)

**Why it works (Richard Gregory's theory):**
- Outward arrows (><) resemble an **interior corner** of a room (close to you)
- Inward arrows (<>) resemble an **exterior corner** of a building (far from you)
- Size constancy says: if two lines produce the same retinal image but one appears farther → the farther one must be BIGGER
- So the line with outward arrows (appearing "farther") is perceived as longer

**Cultural evidence:** The Müller-Lyer illusion is WEAKER in people from non-carpentered environments (e.g., Zulu culture with round huts) — supporting the idea that experience with rectangular buildings contributes to the illusion.

> **AP Connection:** This cultural difference supports the NURTURE side of the nature-nurture debate in perception. Experience shapes how we interpret depth cues.
      `
    },
    {
      id: 'perce3-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The constancy that allows a white shirt to look white in any lighting is ___ constancy', answer: 'color' },
          { label: 'The Müller-Lyer illusion uses arrows to make equal ___ appear different', answer: 'lines' },
          { label: 'Rubin\'s vase demonstrates the Gestalt principle of figure and ___', answer: 'ground' }
        ]
      }
    },
    {
      id: 'perce3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Constancy or Illusion** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A door viewed at an angle looks rectangular despite its trapezoidal retinal image', options: ['Size constancy', 'Shape constancy', 'Color constancy', 'Müller-Lyer illusion'] },
          { label: 'Two equal horizontal lines between converging railroad tracks — the top one looks longer', options: ['Müller-Lyer illusion', 'Ponzo illusion', 'Ames room', 'Moon illusion'] },
          { label: 'A friend walks away but you don\'t perceive them as actually shrinking', options: ['Size constancy', 'Shape constancy', 'Color constancy', 'Brightness constancy'] }
        ],
        correctAnswers: ['Shape constancy', 'Ponzo illusion', 'Size constancy'],
        hint1: 'Shape stays the same despite changing viewing angle.',
        hint2: 'Converging lines (like railroad tracks) create the Ponzo illusion.',
        hint3: 'Perceiving stable size despite distance change = size constancy.',
        explanation: 'Door = shape constancy (perceived shape stable despite angle). Railroad tracks + equal lines = Ponzo (linear perspective makes top line look farther, thus bigger). Friend walking away = size constancy (perceived size stable despite distance).'
      }
    },
    {
      id: 'perce3-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Constancies & Illusions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Illusions show our perceptual system is "broken" | Illusions reveal the RULES our system normally uses successfully |
| Size constancy is innate and universal | Cultural experience affects how strongly it operates |
| The Müller-Lyer illusion tricks everyone equally | It's weaker in non-carpentered cultures |
| Color constancy means we always see the "right" color | It can fail (The Dress!) when illumination assumptions differ |

**Quick Decision Guide for AP Questions:**

- Question mentions STABLE perception despite CHANGING input → **Perceptual constancy**
- Question mentions MISPERCEIVING actual properties → **Visual illusion**
- Question mentions viewing angle changing → **Shape constancy**
- Question mentions distance changing → **Size constancy**
- Question mentions lighting changing → **Color constancy**
- Question mentions arrows or converging lines → **Müller-Lyer or Ponzo**

> **AP Tip:** In FRQs, always explain the MECHANISM behind an illusion (e.g., "misapplied depth cues triggering size constancy"), not just what the illusion looks like.
      `
    },
    {
      id: 'perce3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers found that the Müller-Lyer illusion is significantly weaker among the Zulu people of South Africa, who traditionally live in round dwellings without right angles. This finding BEST supports the idea that:',
            options: [
              'The Müller-Lyer illusion is entirely innate',
              'Perceptual experiences with carpentered environments (right angles, corners) influence susceptibility to the illusion',
              'The Zulu people have superior visual acuity',
              'Visual illusions are entirely cultural and have no biological basis'
            ],
            correctAnswer: 1,
            explanation: 'Gregory\'s theory suggests the Müller-Lyer illusion works because outward/inward arrows resemble corners of rectangular buildings. People who grow up in carpentered environments (with many right angles) develop stronger associations between arrow shapes and depth, making the illusion more powerful. The Zulu, with round dwellings, have less experience with these corner cues, so the illusion is weaker. This doesn\'t mean the illusion is entirely cultural — it\'s BOTH biological (basic depth processing) and experiential (carpentered environment strengthens the effect).'
          },
          {
            question: 'A photographer notices that the moon looks enormous when it\'s near the horizon but small when high in the sky, even though its actual size and retinal image are essentially the same. This is:',
            options: [
              'Size constancy working correctly — the horizon moon IS closer to us',
              'The moon illusion — depth cues at the horizon trigger inappropriate size constancy',
              'Brightness constancy — the horizon moon is dimmer, making it look bigger',
              'Shape constancy — the moon\'s apparent shape changes near the horizon'
            ],
            correctAnswer: 1,
            explanation: 'The moon illusion occurs because when the moon is on the horizon, abundant depth cues (buildings, trees, terrain) signal "far away." Size constancy kicks in: if the moon is far away AND producing a certain retinal image size, it must be HUGE. When overhead, few depth cues are available, so no size constancy correction occurs. The moon\'s actual retinal image is identical in both positions — you can verify this by measuring it with a ruler at arm\'s length.'
          }
        ]
      }
    }
  ]
}
