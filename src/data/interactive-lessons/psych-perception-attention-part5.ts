export const psychPerceptionPart5Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce5-s1-intro',
      type: 'text' as const,
      content: `
# 👁️ Perception & Attention

**Part 5 of 7 — Perceptual Set & Context**

What we perceive depends not just on what's "out there" — it depends on what's "in here" (our expectations, experiences, culture, and emotions). This is one of the most important themes in perception.

### Key Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Perceptual set** | A mental predisposition to perceive one thing and not another | After studying spiders, you see a spider in ambiguous shapes |
| **Context effects** | Surrounding information influences how we interpret a stimulus | "THE CAT" — the middle letter in each word is the same shape but read as "H" and "A" |
| **Schema** | A mental framework or concept that organizes and interprets information | A "restaurant" schema includes expectations of menus, servers, tables |
| **Priming** | Exposure to one stimulus influences response to a later stimulus | Seeing the word "yellow" → faster recognition of "banana" |

### What Creates a Perceptual Set?

| Factor | How It Influences Perception | Example |
|--------|------------------------------|---------|
| **Expectations** | We see what we expect to see | A parent expecting their child hears their name in crowd noise |
| **Motivation** | Needs and desires shape perception | Hungry people see ambiguous images as food-related |
| **Emotions** | Current emotional state affects interpretation | Anxious people perceive neutral faces as threatening |
| **Culture** | Cultural experience shapes perceptual habits | Carpentered cultures are more susceptible to the Müller-Lyer illusion |
| **Context** | Surrounding stimuli guide interpretation | The same sound is "B" or "D" depending on surrounding speech sounds |

> **Why this matters for the AP exam:** Perceptual set questions test whether you understand that perception is CONSTRUCTIVE — we actively build our perceptual experience using both sensory data AND prior knowledge. This connects to top-down processing (Part 1).
      `
    },
    {
      id: 'perce5-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a famous demonstration, the same ambiguous figure is perceived as a young woman by people who were first shown pictures of young women, and as an old woman by people who were first shown pictures of old women. This demonstrates:',
            options: [
              'Bottom-up processing — the sensory data determined perception',
              'Perceptual set — prior exposure created expectations that influenced interpretation',
              'Change blindness — people didn\'t notice the figure changed',
              'The Gestalt principle of closure — people filled in missing details'
            ],
            correctAnswer: 1,
            explanation: 'The "young woman/old woman" ambiguous figure demonstrates perceptual set perfectly. The figure itself is ambiguous (identical sensory data), but what people PERCEIVE depends on their prior exposure (expectations). Those primed with young women see a young woman; those primed with old women see an old woman. Same stimulus, different perception = perceptual set at work. This is top-down processing in action.'
          },
          {
            question: 'Research shows that people who are afraid of spiders estimate spider sizes as LARGER than they actually are, compared to people who are not afraid. This finding demonstrates that:',
            options: [
              'Arachnophobes have better visual acuity for spiders',
              'Emotional state (fear) influences perception, creating a perceptual set',
              'Spiders actually appear larger when someone is afraid',
              'Bottom-up processing is enhanced by fear'
            ],
            correctAnswer: 1,
            explanation: 'Fear creates a perceptual set that influences size perception — frightened people literally PERCEIVE spiders as larger than non-frightened people do. This illustrates that emotion is a powerful factor in creating perceptual sets. The spider\'s actual (physical) size is the same; the PERCEIVED size differs based on emotional state. This connects to motivated perception and has implications for anxiety disorders.'
          }
        ]
      }
    },
    {
      id: 'perce5-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Cultural Influences on Perception

**Cross-Cultural Research in Perception:**

| Finding | Researchers | Implication |
|---------|------------|-------------|
| Müller-Lyer illusion weaker in non-carpentered cultures | Segall et al. (1966) | Experience with right angles affects depth-related illusions |
| People in open environments (plains) have less susceptibility to the horizontal-vertical illusion | Segall et al. (1966) | Ecological environment shapes perceptual habits |
| East Asian observers attend more to background/context; Western observers attend more to focal objects | Nisbett & Masuda (2003) | Culture affects what we ATTEND to, not just how we interpret |
| The Ebbinghaus illusion (circles) is stronger for Westerners | Cross-cultural research | Western focus on individual objects vs. Eastern focus on relationships |

### Schemas and Perception

**How schemas shape what we perceive:**
1. **Direction of attention** — Schemas tell us where to look (entering a restaurant, you look for a host stand)
2. **Fill in gaps** — We perceive schema-consistent details that may not be there (remembering a "doctor" as male)
3. **Filter information** — Schema-inconsistent information may be ignored or distorted
4. **Speed processing** — Familiar schemas allow faster perception (an experienced chess player "sees" the board differently than a novice)

### Context Effects in Detail

| Type | Example |
|------|---------|
| **Same stimulus, different perception** | "THE CAT" — the H and A share the same letter shape but context determines which you read |
| **Phonemic restoration** | If a cough replaces a letter in a word, you still "hear" the complete word — context fills it in |
| **Word superiority effect** | Letters are recognized faster in words than in isolation — word context aids letter perception |
| **McGurk effect** | Visual mouth movements change what you "hear" — cross-modal context influences auditory perception |

> **AP Connection:** Schemas connect to memory (schema-consistent memories are easier to form), social psychology (stereotypes are social schemas), and developmental psychology (Piaget's schemas).
      `
    },
    {
      id: 'perce5-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'A mental predisposition to perceive one thing and not another is called a perceptual ___', answer: 'set' },
          { label: 'Exposure to one stimulus influencing response to a later stimulus is called ___', answer: 'priming' },
          { label: 'Mental frameworks that organize and interpret information are called ___', answer: 'schemas' }
        ]
      }
    },
    {
      id: 'perce5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify What Influences Perception** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A hungry person sees ambiguous images as food-related', options: ['Expectation', 'Motivation', 'Emotion', 'Context'] },
          { label: 'Seeing the word "nurse" makes you recognize "doctor" faster', options: ['Perceptual set', 'Priming', 'Schema', 'Change blindness'] },
          { label: 'Japanese observers notice more background details in a scene than American observers', options: ['Bottom-up processing differences', 'Cultural influences on attention', 'Perceptual constancy', 'Inattentional blindness'] }
        ],
        correctAnswers: ['Motivation', 'Priming', 'Cultural influences on attention'],
        hint1: 'Needs and desires shape what we perceive.',
        hint2: 'Prior exposure to a related word speeds up recognition of the next word.',
        hint3: 'Cross-cultural research shows different cultures attend to different aspects of scenes.',
        explanation: 'Hunger = motivation influencing perception. "nurse" → "doctor" = priming (prior exposure facilitates related processing). Japanese vs. American attention patterns = cultural influences (Nisbett & Masuda research).'
      }
    },
    {
      id: 'perce5-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Perceptual Set Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Perceptual set = perceptual constancy | Perceptual SET = expectations shaping interpretation. Perceptual CONSTANCY = perceiving stable properties despite changing input |
| Context effects are errors | Context effects usually HELP perception — they only cause errors with ambiguous or misleading stimuli |
| Schemas only affect memory | Schemas affect perception, attention, memory, and reasoning |
| Culture only affects higher-level cognition | Culture affects even basic perceptual processes (what you attend to, illusion susceptibility) |

**Connecting the Dots:**
- Perceptual set IS top-down processing applied to ambiguous stimuli
- Schemas provide the FRAMEWORK for top-down processing
- Context provides the CURRENT information that activates specific schemas
- Priming is the MECHANISM by which recent experience creates temporary perceptual sets

> **AP Tip:** When an FRQ mentions "expectations," "prior experience," or "cultural background" affecting how someone perceives something, use the term "perceptual set" explicitly. Define it, then apply it to the scenario's specific details.
      `
    },
    {
      id: 'perce5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Police officers in a high-crime neighborhood are more likely to misperceive a cell phone held by a young Black man as a weapon, compared to the same cell phone held in a low-crime neighborhood. This tragic pattern BEST illustrates:',
            options: [
              'Bottom-up processing — the cell phone looks like a weapon',
              'Perceptual set — expectations based on context and stereotypes influence what officers perceive',
              'Change blindness — officers fail to detect the change from weapon to phone',
              'The Gestalt principle of similarity — the phone and weapon look similar'
            ],
            correctAnswer: 1,
            explanation: 'This is a critically important real-world example of perceptual set. The officer\'s expectations (high-crime area + racial stereotypes) create a perceptual set to see "weapon." The same ambiguous stimulus (a dark object in someone\'s hand) is perceived differently depending on context, expectations, and unfortunately, implicit bias. This connects to social psychology (implicit bias, stereotypes) and has life-or-death consequences. Research by Correll et al. (2002) demonstrated this pattern experimentally.'
          },
          {
            question: 'After spending a week at a bird-watching retreat, Maria notices birds everywhere — in trees, on buildings, in the sky — that she would normally have overlooked. This is BEST explained by:',
            options: [
              'There are actually more birds than usual that week',
              'Perceptual set — her bird-focused experience created a readiness to perceive birds',
              'Inattentional blindness — she was previously blind to all birds',
              'Bottom-up processing — her visual acuity improved at the retreat'
            ],
            correctAnswer: 1,
            explanation: 'Maria\'s birdwatching experience created a perceptual set — a mental predisposition to perceive (notice and identify) birds. The birds were always there; what changed was her readiness to perceive them. This is top-down processing: her new knowledge and expectations guide her attention and interpretation of sensory data. Her visual acuity didn\'t change — her perceptual framework did.'
          }
        ]
      }
    }
  ]
}
