export const psychPerceptionPart6Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce6-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 6 of 7 — Problem-Solving Workshop**

This workshop applies all perception and attention concepts to AP-style scenarios. The key skill is identifying WHICH concept best explains a scenario when multiple options seem plausible.

### 🔧 Concept Identification Framework

| If the scenario involves... | The concept is... |
|---------------------------|-------------------|
| Organizing elements into patterns/groups | **Gestalt principles** (which one?) |
| Judging distance or 3D relationships | **Depth cues** (binocular or monocular?) |
| Perceiving stable properties despite changing input | **Perceptual constancy** (size, shape, or color?) |
| Misperceiving an object's properties | **Visual illusion** (which one?) |
| Focusing on one thing while filtering others | **Selective attention** |
| Missing something obvious while focused | **Inattentional blindness** |
| Missing a change during a disruption | **Change blindness** |
| Hearing your name in background noise | **Cocktail party effect** |
| Expectations shaping what you perceive | **Perceptual set** |
| Using prior knowledge to guide interpretation | **Top-down processing** |
| Starting from raw sensory data | **Bottom-up processing** |

### Common AP Scenario Types

**Scenario Type 1: "Same stimulus, different perceiver"**
→ Usually testing PERCEPTUAL SET or TOP-DOWN PROCESSING
- Example: Two people see the same ambiguous figure differently based on prior experience

**Scenario Type 2: "Something obvious was missed"**
→ Usually testing INATTENTIONAL or CHANGE BLINDNESS
- Clue: Was the person focused on something else? Did a disruption occur?

**Scenario Type 3: "Stable perception despite changing input"**
→ Usually testing PERCEPTUAL CONSTANCY
- Clue: Distance changes = size. Angle changes = shape. Lighting changes = color.
      `
    },
    {
      id: 'perce6-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Scenario Classification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A experienced radiologist quickly spots a small tumor on a chest X-ray that a medical student misses after careful examination. Meanwhile, both the radiologist and the student fail to notice that a matchbook-sized image of a gorilla has been inserted into the X-ray (Trafton Drew, 2013). This scenario demonstrates:',
            options: [
              'The radiologist uses top-down processing (expertise), while both demonstrate inattentional blindness (missed gorilla)',
              'The radiologist has better bottom-up processing and change blindness',
              'Both demonstrate the cocktail party effect for visual stimuli',
              'The student has perceptual set for gorillas'
            ],
            correctAnswer: 0,
            explanation: 'This real study by Drew et al. (2013) beautifully demonstrates TWO concepts: (1) The radiologist\'s expertise creates top-down processing — knowledge guides attention to tumors (perceptual set for medical abnormalities). The student, lacking this knowledge, relies more on bottom-up processing. (2) BOTH miss the gorilla — 83% of radiologists missed it! This is inattentional blindness: when focused on searching for tumors, even experts fail to notice an unexpected gorilla-shaped stimulus. Same scenario, two different concepts.'
          },
          {
            question: 'While watching a movie in a dimly lit room, the screen shows a bright outdoor scene. A character\'s white shirt appears white on screen despite your room being dark. However, the actual light emitted by the "white shirt" pixels is dimmer than a flashlight shone at the wall. This demonstrates:',
            options: [
              'Inattentional blindness — you don\'t notice the actual light levels',
              'Color constancy — your brain adjusts for the lighting context within the scene',
              'Size constancy — objects on screen appear normal size',
              'The Gestalt principle of figure-ground'
            ],
            correctAnswer: 1,
            explanation: 'Color constancy operates WITHIN the scene\'s context. Your brain processes the movie scene as a whole: the sky is bright, shadows are dark, so the shirt (being the brightest object relative to the on-screen context) is perceived as "white." Your visual system doesn\'t compare the shirt to your actual dark room — it compares it to the other elements in the scene. This is why movies "work" in dark theaters.'
          }
        ]
      }
    },
    {
      id: 'perce6-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Multi-Concept Scenario Analysis

**Complex Scenario: The Eyewitness**

A bank robbery occurs. The witness was texting when the robber entered (attention diverted). She looks up and sees a man with a gun. Later, police show her 6 photos. She identifies suspect #3 as the robber, but she's wrong.

| Stage | Concept | Explanation |
|-------|---------|-------------|
| Texting when robber entered | **Inattentional blindness** | Initial details missed due to divided attention |
| Saw a man with a gun | **Weapon focus effect** | Attention narrowed to the weapon, missing facial features |
| Influenced by fear | **Perceptual set** (emotion) | Fear may have altered perception of height, size, threat level |
| Photo identification | **Context effects** | Police instructions, photo arrangement, and her schemas about "criminals" influence her selection |
| Wrong identification | **Top-down processing error** | She constructed a memory/perception based on expectations rather than actual details |

**Rules for Multi-Concept Questions:**
1. Read the ENTIRE scenario before selecting
2. Identify ALL concepts present
3. Choose the one that BEST explains what the question specifically asks about
4. "Best" usually means the most DIRECT explanation

### Perception vs. Sensation Decision Guide

| If the question asks about... | It's about... |
|------------------------------|---------------|
| Whether a stimulus was DETECTED at all | **Sensation** (thresholds) |
| How detected stimuli were ORGANIZED | **Perception** (Gestalt, constancies) |
| How stimuli were INTERPRETED | **Perception** (top-down, perceptual set) |
| Whether stimuli were NOTICED | **Attention** (inattentional blindness, selective attention) |
      `
    },
    {
      id: 'perce6-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Quick ID Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'A person misses a obvious stop sign while focused on GPS directions — this is ___ blindness', answer: 'inattentional' },
          { label: 'Railroad tracks appearing to converge in the distance is the monocular cue called linear ___', answer: 'perspective' },
          { label: 'After watching a horror movie, you perceive shadows as threats — this is a perceptual ___', answer: 'set' }
        ]
      }
    },
    {
      id: 'perce6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Scenario** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A researcher plays the same ambiguous sound and tells one group it\'s a word, another group it\'s music — groups perceive differently', options: ['Bottom-up processing', 'Top-down processing / perceptual set', 'Inattentional blindness', 'Change blindness'] },
          { label: 'During a basketball game, an announcer misses that a player switched jerseys during halftime', options: ['Inattentional blindness', 'Change blindness', 'Selective attention', 'Perceptual set'] },
          { label: 'A one-eyed pirate can still judge distance using the sizes of ships and where they overlap the horizon', options: ['Binocular cues', 'Monocular cues', 'Convergence', 'Retinal disparity'] }
        ],
        correctAnswers: ['Top-down processing / perceptual set', 'Change blindness', 'Monocular cues'],
        hint1: 'Prior instruction (expectations) shaped how they interpreted the same stimulus.',
        hint2: 'A change occurred and wasn\'t detected — especially with a break (halftime).',
        hint3: 'One eye available = can only use monocular cues (relative size, interposition).',
        explanation: 'Same sound + different expectations = top-down processing/perceptual set. Jersey change during a break = change blindness. One eye = monocular cues only (relative size, overlap with horizon).'
      }
    },
    {
      id: 'perce6-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 The Hardest AP Distinctions in This Unit

**1. Inattentional Blindness vs. Change Blindness**
- IB: You don't see something that IS there (attention elsewhere)
- CB: You don't notice something CHANGED (disruption during change)
- **Test:** Was something new/unexpected present? → IB. Did something change? → CB.

**2. Perceptual Set vs. Context Effects**
- Perceptual SET: Your prior experiences/expectations shape NEW perception
- Context EFFECTS: Surrounding stimuli in the CURRENT scene shape interpretation
- **Test:** Is prior experience/expectations the cause? → Set. Is the surrounding information the cause? → Context.

**3. Top-Down vs. Perceptual Set**
- Top-down is the PROCESS (using knowledge to guide perception)
- Perceptual set is the RESULT (a readiness to perceive specific things)
- **Test:** On the AP exam, these are often treated as closely related — define BOTH if unsure.

**4. Size Constancy (perception) vs. Relative Size (depth cue)**
- Size CONSTANCY: Maintaining perceived size despite distance changes (perception)
- Relative SIZE: Using apparent size to judge distance (depth cue)
- **Test:** Is the question about STABLE perception? → Constancy. About JUDGING distance? → Depth cue.

> **AP Tip:** When stuck between two similar concepts on an MC question, ask: "Which concept is being DEMONSTRATED?" The question usually asks about the primary concept, not a contributing factor.
      `
    },
    {
      id: 'perce6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A sports referee is focused on watching whether a player\'s foot touches the boundary line. At the same moment, another player commits a foul directly in front of the referee, but the referee doesn\'t call it. Fans are furious, claiming the referee is biased. What psychological concept BEST explains the missed call?',
            options: [
              'The referee is biased against the fouling player\'s team',
              'Inattentional blindness — the referee\'s focused attention on the boundary caused failure to perceive the foul',
              'Change blindness — the foul happened too quickly to detect',
              'The referee lacks the perceptual set to recognize fouls'
            ],
            correctAnswer: 1,
            explanation: 'This is a real-world example of inattentional blindness. The referee was focused on the boundary line (selective attention), causing them to miss a fully visible foul happening right in front of them. Fans assume bias, but the more likely explanation is attentional limitation — humans simply cannot attend to everything simultaneously. This is why multiple officials are used in sports. Research by Chabris et al. confirms that even trained observers miss unexpected events when attention is focused elsewhere.'
          },
          {
            question: 'A graphic designer creates a poster where product images are arranged in three tight clusters. Viewers automatically perceive three product "groups" even though the designer never drew any borders or lines around them. The viewers are using:',
            options: [
              'The Gestalt principle of proximity — nearby objects are grouped together',
              'The Gestalt principle of closure — viewers fill in invisible borders',
              'Top-down processing — viewers expect products to be in groups',
              'Perceptual constancy — products maintain their appearance despite grouping'
            ],
            correctAnswer: 0,
            explanation: 'Proximity is the operative Gestalt principle here — objects near each other are automatically perceived as belonging to the same group, even without explicit borders. While closure (B) might seem tempting (perceiving invisible borders), the grouping effect is driven by SPATIAL NEARNESS, not gap-filling. No borders or containers are perceived — just groups based on proximity. This is why graphic designers use spacing as a primary tool for visual organization.'
          }
        ]
      }
    }
  ]
}
