export const psychAdolescencePart2Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol2-s1-intro',
      type: 'text' as const,
      content: `
## Identity Formation

**Part 2 of 7 — Erikson & Marcia on Identity**

The central challenge of adolescence is answering "Who am I?" Erik Erikson described this as the **identity vs. role confusion** stage — the fifth of his eight psychosocial stages. James Marcia later expanded this by identifying four identity statuses based on whether someone has explored options and made commitments.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Identity vs. role confusion** | Erikson's adolescent stage — successfully forming a coherent sense of self vs. being uncertain about who you are |
| **Identity achievement** | Explored options AND made a commitment (e.g., tried several career paths, chose medicine) |
| **Identity moratorium** | Currently exploring options but has NOT yet committed (e.g., trying different college majors) |
| **Identity foreclosure** | Committed to an identity WITHOUT exploring options (e.g., became a doctor "because my parents are doctors") |
| **Identity diffusion** | Neither exploring nor committed — apathetic about identity (e.g., "I don't know and I don't care") |

### Real-World Example

Consider four high school seniors asked about their career plans:
- **Achievement:** "I explored engineering, art, and teaching. I've decided on engineering — it fits my strengths."
- **Moratorium:** "I'm taking classes in different fields to figure out what I want."
- **Foreclosure:** "I'm going into the family business. I've never considered anything else."
- **Diffusion:** "I have no idea what I want to do and I'm not really thinking about it."

### Why This Matters

Erikson's stages and Marcia's statuses appear on nearly every AP exam. You need to classify real-world scenarios into the correct status based on two criteria: exploration (yes/no) and commitment (yes/no).
      `
    },
    {
      id: 'adol2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A college sophomore has changed her major three times and is currently taking electives in psychology, business, and art to "figure out what fits." According to Marcia, she is in:',
            options: [
              'Identity achievement — she has explored many options',
              'Identity moratorium — she is actively exploring but has not yet committed',
              'Identity foreclosure — she is following her parents\' expectations',
              'Identity diffusion — she doesn\'t care about her identity'
            ],
            correctAnswer: 1,
            explanation: 'Moratorium = actively exploring (trying different majors) but NOT yet committed. This is a healthy phase — most people pass through moratorium before reaching achievement. The key distinction: she IS exploring (unlike diffusion) but has NOT committed (unlike achievement).'
          },
          {
            question: 'Which of Marcia\'s identity statuses involves commitment WITHOUT exploration?',
            options: [
              'Achievement — explored and committed',
              'Moratorium — exploring but not committed',
              'Foreclosure — committed without exploring alternatives',
              'Diffusion — neither exploring nor committed'
            ],
            correctAnswer: 2,
            explanation: 'Foreclosure occurs when someone adopts an identity (usually from parents or authority figures) without ever exploring alternatives. Example: "I\'m a Republican because my family is" — commitment exists, but the person never questioned or explored other options.'
          }
        ]
      }
    },
    {
      id: 'adol2-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Marcia's 2×2 Grid

|  | **Commitment: YES** | **Commitment: NO** |
|--|---------------------|-------------------|
| **Exploration: YES** | **Achievement** (explored options, chose one) | **Moratorium** (still exploring) |
| **Exploration: NO** | **Foreclosure** (adopted identity without questioning) | **Diffusion** (no exploration, no commitment) |

### Erikson's Psychosocial Stages (Adolescence Focus)

Erikson proposed eight stages spanning the entire lifespan. Each stage involves a crisis that must be resolved:

| Stage | Age | Crisis | Positive outcome |
|-------|-----|--------|-----------------|
| Trust vs. Mistrust | Infancy (0-1) | Can I trust the world? | Hope, security |
| Autonomy vs. Shame | Toddler (1-3) | Can I do things myself? | Independence |
| Initiative vs. Guilt | Preschool (3-6) | Can I make things happen? | Purpose |
| Industry vs. Inferiority | School age (6-12) | Can I succeed at tasks? | Competence |
| **Identity vs. Role Confusion** | **Adolescence (12-18)** | **Who am I?** | **Fidelity (faithfulness to self)** |
| Intimacy vs. Isolation | Young adult (18-40) | Can I form close relationships? | Love |
| Generativity vs. Stagnation | Middle adult (40-65) | Am I contributing to the next generation? | Care |
| Integrity vs. Despair | Late adult (65+) | Was my life meaningful? | Wisdom |

### Peer Influence in Adolescence

- Peer influence increases dramatically during adolescence (compared to childhood)
- Teens are more susceptible to peer pressure due to the developing prefrontal cortex
- Peer groups contribute to identity formation — teens try on different "selves" with different groups
- Social media has amplified peer comparison and its effects on identity development
      `
    },
    {
      id: 'adol2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) In Erikson's framework, the adolescent crisis is identity vs. role ___. (one word)

      2) In Marcia's model, commitment WITHOUT exploration is called identity ___. (one word)

      3) Active exploration WITHOUT commitment yet is called identity ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['confusion', 'foreclosure', 'moratorium'],
        hint1: 'The teen doesn\'t know who they are — they\'re ___',
        hint2: 'Like a foreclosed mortgage — locked in without shopping around',
        hint3: 'Like a moratorium/pause — exploring before deciding',
        explanation: 'Expected answers: confusion (identity vs. role confusion is Erikson\'s adolescent crisis), foreclosure (commitment without exploration), and moratorium (exploring but not yet committed).'
      }
    },
    {
      id: 'adol2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A teen says "I\'m going to be a lawyer because my parents are lawyers" without considering other careers. This is identity ___',
            options: ['achievement', 'moratorium', 'foreclosure', 'diffusion']
          },
          {
            label: 'A teen has explored multiple religions, volunteered with different organizations, and decided to become Buddhist. This is identity ___',
            options: ['achievement', 'moratorium', 'foreclosure', 'diffusion']
          },
          {
            label: 'A teen says "I don\'t know what I believe and I don\'t really care." This is identity ___',
            options: ['achievement', 'moratorium', 'foreclosure', 'diffusion']
          }
        ],
        correctAnswers: ['foreclosure', 'achievement', 'diffusion'],
        hint1: 'Committed without exploring = foreclosure.',
        hint2: 'Explored AND committed = achievement.',
        hint3: 'Not exploring AND not committed = diffusion.',
        explanation: 'Foreclosure = committed without exploration. Achievement = explored and committed. Diffusion = neither exploring nor committed (apathy).'
      }
    },
    {
      id: 'adol2-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Foreclosure is always bad"** — While it lacks exploration, some individuals with foreclosed identities are satisfied and well-adjusted. It's considered less psychologically mature than achievement, but it's not inherently harmful.
- **"Moratorium means the person is lost"** — Moratorium is actually a healthy, active process of exploration. It's different from diffusion, where the person isn't even trying.
- **"Erikson's stages must be completed in order"** — While they typically progress sequentially, individuals can revisit earlier stages. A divorce might re-trigger intimacy vs. isolation even if it was previously resolved.
- **"Identity is formed once and never changes"** — Identity continues to evolve throughout adulthood. Major life events (career changes, parenthood) can trigger re-exploration.

### AP Strategy Moves
- **Marcia classification trick:** Make a 2×2 grid with Exploration (yes/no) and Commitment (yes/no). Map every scenario onto this grid.
- Know ALL eight of Erikson's stages, but focus on identity vs. role confusion (adolescence), intimacy vs. isolation (young adulthood), and generativity vs. stagnation (middle adulthood).
- If a question describes someone adopting their parents' values without questioning → foreclosure. If exploring → moratorium or achievement (check for commitment).
- The AP exam often tests the difference between moratorium and diffusion — both lack commitment, but moratorium involves active exploration while diffusion does not.
      `
    },
    {
      id: 'adol2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 17-year-old has always planned to attend his father\'s alma mater and major in business, just like his father and grandfather did. He has never considered other schools or majors. According to Marcia, this teen is in:',
            options: [
              'Identity achievement — he knows exactly what he wants',
              'Identity moratorium — he is still exploring family expectations',
              'Identity foreclosure — he has committed to a path without exploring alternatives',
              'Identity diffusion — he is passively accepting others\' decisions'
            ],
            correctAnswer: 2,
            explanation: 'This is classic foreclosure: the teen has made a commitment (specific school and major) but has never explored alternatives. The identity was adopted from family tradition rather than personal exploration. Key distinction from achievement: achievement requires exploration BEFORE commitment.'
          },
          {
            question: 'According to Erikson, a 70-year-old who reflects on their life with satisfaction and a sense of meaning has successfully resolved which psychosocial crisis?',
            options: [
              'Generativity vs. Stagnation — contributing to the next generation',
              'Integrity vs. Despair — looking back on life with acceptance rather than regret',
              'Identity vs. Role Confusion — forming a coherent sense of self',
              'Intimacy vs. Isolation — forming close loving relationships'
            ],
            correctAnswer: 1,
            explanation: 'Integrity vs. Despair is Erikson\'s final stage (late adulthood). Successfully resolving this crisis means looking back on life with satisfaction and acceptance (integrity), rather than bitterness and regret (despair). The virtue that emerges from this resolution is wisdom.'
          }
        ]
      }
    }
  ]
}
