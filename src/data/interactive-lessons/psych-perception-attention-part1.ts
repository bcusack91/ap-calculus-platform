export const psychPerceptionPart1Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce1-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 1 of 7 — Perceptual Organization**

Perception is NOT a passive recording of the world — it's an active, constructive process. Your brain doesn't just receive sensory data; it organizes, interprets, and sometimes invents what you "see." This unit covers how and why.

### Key Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Sensation** | Detection of physical energy by sensory receptors | Light hitting your retina |
| **Perception** | Organization and interpretation of sensory information | Recognizing a face in the light pattern |
| **Top-down processing** | Perception guided by higher-level knowledge, expectations, and experience | Reading "TH_ C_T" as "THE CAT" |
| **Bottom-up processing** | Analysis starting with raw sensory data, building up to recognition | Assembling individual pixels into an image |

### Gestalt Principles of Perceptual Organization

The Gestalt psychologists (early 1900s, Germany) argued **"the whole is different from the sum of its parts."** We perceive organized patterns, not isolated elements:

| Principle | Rule | Example |
|-----------|------|---------|
| **Figure-ground** | We organize perception into a foreground figure and background | Rubin's vase/faces illusion |
| **Proximity** | Objects near each other are grouped together | ●● ●● looks like 2 pairs, not 4 dots |
| **Similarity** | Similar objects are grouped together | ●●○○●● — dots grouped by type |
| **Closure** | We fill in gaps to perceive complete figures | A circle with a gap is still seen as a circle |
| **Continuity** | We perceive smooth, continuous patterns | Crossing lines seen as 2 smooth lines, not 4 segments |
| **Common fate** | Objects moving in the same direction are grouped | A flock of birds perceived as one unit |

> **Why this matters for the AP exam:** Gestalt principles appear in ~2-3 questions per exam. You must identify which principle is operating in a scenario — especially figure-ground, closure, and proximity.
      `
    },
    {
      id: 'perce1-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A radiologist examines an X-ray and immediately spots a tumor that a medical student misses entirely. The radiologist is primarily using:',
            options: [
              'Bottom-up processing — analyzing each pixel of the X-ray systematically',
              'Top-down processing — using prior knowledge and expectations to guide perception',
              'The Gestalt principle of closure — filling in missing information',
              'Selective attention — focusing on one part of the X-ray'
            ],
            correctAnswer: 1,
            explanation: 'The radiologist\'s years of experience create expectations about what tumors look like and where they appear. This prior knowledge guides perception — the hallmark of top-down processing. The medical student, lacking this experience, must rely more on bottom-up processing (examining each element without guidance from expectation). This is why experienced doctors sometimes spot things in a glance that trainees miss after careful study.'
          },
          {
            question: 'You see the Olympic rings logo and perceive five interlocking circles, even though parts of each circle are hidden behind others. This BEST demonstrates:',
            options: [
              'Proximity — the rings are near each other',
              'Similarity — the rings look alike',
              'Closure — we fill in the hidden portions to perceive complete circles',
              'Common fate — the rings appear to move together'
            ],
            correctAnswer: 2,
            explanation: 'Even though portions of each ring are occluded (hidden) by overlapping rings, we perceive five COMPLETE circles. Our brain fills in the missing segments — this is the Gestalt principle of closure. Proximity and similarity are also present but don\'t explain why we see complete circles rather than arcs.'
          }
        ]
      }
    },
    {
      id: 'perce1-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Top-Down vs. Bottom-Up Processing

| Feature | Top-Down | Bottom-Up |
|---------|----------|-----------|
| **Direction** | Concept → data (theory-driven) | Data → concept (data-driven) |
| **Driven by** | Prior knowledge, expectations, context | Raw sensory input |
| **Speed** | Fast (uses shortcuts) | Slow (builds from scratch) |
| **Accuracy** | Can cause errors (see what you expect) | More accurate but slower |
| **Example** | Reading messy handwriting because you expect certain words | A baby exploring a new toy for the first time |
| **Brain areas** | Higher cortical areas → primary sensory areas | Primary sensory areas → higher cortical areas |

**How they work together:**
Most real-world perception uses BOTH simultaneously. When you read this sentence, bottom-up processing detects the letter shapes while top-down processing uses language knowledge to anticipate words.

### When Top-Down Processing Goes Wrong

| Error | What Happens | Example |
|-------|-------------|---------|
| **Confirmation bias in perception** | We see what we expect | Expecting to see a weapon → perceiving a phone as a gun |
| **Perceptual set** | Mental predisposition to perceive one thing over another | After studying bugs, seeing ambiguous shapes as insects |
| **Priming** | Recent experience influences perception | Hearing "nurse" → faster recognition of "doctor" |

> **AP Connection:** The AP exam loves questions about when top-down processing leads to ERRORS — this connects to social psychology (stereotypes affect perception), memory (false memories), and eyewitness testimony.
      `
    },
    {
      id: 'perce1-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Gestalt principle where objects near each other are grouped together is called ___', answer: 'proximity' },
          { label: 'Processing that starts with expectations and prior knowledge is called ___-down processing', answer: 'top' },
          { label: 'The Gestalt principle that "the ___ is different from the sum of its parts"', answer: 'whole' }
        ]
      }
    },
    {
      id: 'perce1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Gestalt Principle** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'You see a circle drawn with dashed lines and perceive a complete circle', options: ['Proximity', 'Similarity', 'Closure', 'Common fate'] },
          { label: 'Stars and circles arranged in alternating rows are grouped by shape', options: ['Proximity', 'Similarity', 'Closure', 'Continuity'] },
          { label: 'Two crossing lines are perceived as two smooth continuous lines rather than four separate segments', options: ['Proximity', 'Similarity', 'Closure', 'Continuity'] }
        ],
        correctAnswers: ['Closure', 'Similarity', 'Continuity'],
        hint1: 'We fill in gaps to see complete figures.',
        hint2: 'We group similar-looking objects together.',
        hint3: 'We perceive smooth, continuous patterns rather than abrupt changes.',
        explanation: 'Dashed circle = closure (filling gaps). Grouping by shape = similarity. Smooth crossing lines = continuity (we prefer smooth continuous paths).'
      }
    },
    {
      id: 'perce1-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Perception Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Sensation and perception are the same thing | Sensation = detection; perception = interpretation |
| We perceive the world exactly as it is | Perception is constructed — we actively organize and interpret |
| Bottom-up is "better" than top-down | Both are essential; neither is superior |
| Gestalt principles are learned | They appear to be innate organizing tendencies |

**Key Distinctions for the Exam:**
- **Sensation vs. Perception**: Sensation is PHYSICAL (receptor detection). Perception is PSYCHOLOGICAL (brain interpretation).
- **Top-down vs. Bottom-up**: Ask "Is prior knowledge needed?" If YES → top-down. If the organism is starting from scratch → bottom-up.
- **Figure-ground vs. other Gestalt principles**: Figure-ground is about separating foreground from background. The other principles are about GROUPING elements within the figure.

> **AP Tip:** When asked about perceptual organization in an FRQ, always name the SPECIFIC Gestalt principle — don't just say "Gestalt."
      `
    },
    {
      id: 'perce1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A proofreader is less likely to catch typos in her own writing than in someone else\'s writing. This is BEST explained by:',
            options: [
              'Bottom-up processing — she is not detecting the sensory data',
              'Top-down processing — her knowledge of what she intended to write leads her to see correct words even when they contain errors',
              'The Gestalt principle of closure — she fills in the missing letters',
              'Change blindness — she fails to detect the changes in her text'
            ],
            correctAnswer: 1,
            explanation: 'The proofreader KNOWS what she intended to write, so her top-down processing fills in the "correct" version even when the actual text contains errors. When reading someone else\'s work, she has fewer expectations about specific wording, forcing more bottom-up processing of the actual text. This is a classic example of how top-down processing can create errors.'
          },
          {
            question: 'A designer creates a website where the navigation buttons are different colors but placed far apart, while unrelated text elements are placed close together. Users keep accidentally clicking the text instead of the buttons. Which Gestalt principle explains this usability problem?',
            options: [
              'Similarity — the text elements look similar to buttons',
              'Proximity — users group the nearby text elements as related/clickable',
              'Closure — users perceive the text as part of the navigation',
              'Continuity — users follow the text in a smooth pattern'
            ],
            correctAnswer: 1,
            explanation: 'Proximity overrides similarity in this case. Even though the buttons are visually distinct (different colors), users group the nearby text elements together because proximity is one of the strongest Gestalt principles. Good UI/UX design uses Gestalt principles: related items should be near each other (proximity), visually similar (similarity), and clearly separated from unrelated items.'
          }
        ]
      }
    }
  ]
}
