export const psychAdolescencePart4Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol4-s1-intro',
      type: 'text' as const,
      content: `
## Adulthood & Aging

**Part 4 of 7 — Physical, Cognitive & Social Changes**

Development doesn't stop at adulthood — physical, cognitive, and social changes continue throughout the lifespan. Understanding these changes (and which popular beliefs about aging are MYTHS) is critical for the AP exam.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Crystallized intelligence** | Accumulated knowledge and verbal skills — tends to INCREASE or remain stable with age |
| **Fluid intelligence** | Ability to reason speedily and abstractly — tends to DECLINE with age |
| **Menopause** | The cessation of menstruation and reproductive capacity in women, typically around age 50 |
| **Empty nest syndrome** | Feelings of sadness when children leave home (research shows most parents actually adjust positively) |
| **Social clock** | Cultural expectations for the "right time" for major life events (marriage, career, children) |

### Erikson's Adult Stages

| Stage | Age | Crisis | Key question |
|-------|-----|--------|-------------|
| **Intimacy vs. Isolation** | Young adulthood (18-40) | Can I form deep, committed relationships? | Do I have love and connection? |
| **Generativity vs. Stagnation** | Middle adulthood (40-65) | Am I contributing to future generations? | Am I making a difference? |
| **Integrity vs. Despair** | Late adulthood (65+) | Was my life meaningful? | Can I look back with satisfaction? |

### Real-World Example

A 75-year-old retired teacher can still recite Shakespeare passages she learned decades ago (crystallized intelligence preserved), but finds it harder to learn new smartphone apps quickly (fluid intelligence declining). This pattern — preserved knowledge with declining processing speed — is normal aging, NOT dementia.
      `
    },
    {
      id: 'adol4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 65-year-old crossword champion continues to excel at puzzles requiring vocabulary and general knowledge, but struggles with timed tasks requiring rapid problem-solving of novel patterns. This illustrates:',
            options: [
              'Both crystallized and fluid intelligence decline equally with age',
              'Crystallized intelligence (knowledge-based) is preserved while fluid intelligence (speed/novel reasoning) declines',
              'Fluid intelligence increases with age while crystallized declines',
              'This person likely has dementia because of the processing speed decline'
            ],
            correctAnswer: 1,
            explanation: 'Crystallized intelligence (accumulated knowledge, vocabulary, expertise) tends to remain stable or even increase throughout adulthood. Fluid intelligence (processing speed, abstract reasoning with novel problems) begins declining in the mid-20s. The crossword champion\'s pattern is completely normal aging.'
          },
          {
            question: 'According to Erikson, a 50-year-old who mentors young employees, volunteers in the community, and feels a strong sense of purpose has successfully resolved which crisis?',
            options: [
              'Identity vs. Role Confusion — forming a sense of self',
              'Intimacy vs. Isolation — forming close relationships',
              'Generativity vs. Stagnation — contributing to and guiding the next generation',
              'Integrity vs. Despair — reflecting on life with satisfaction'
            ],
            correctAnswer: 2,
            explanation: 'Generativity vs. Stagnation is the middle adulthood crisis (40-65). Generativity = contributing to the next generation through mentoring, parenting, community involvement, and creative work. Stagnation = feeling unproductive and uninvolved. This person is clearly generative — actively contributing to others.'
          }
        ]
      }
    },
    {
      id: 'adol4-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Aging — Facts vs. Myths

| Popular belief | Reality |
|---------------|---------|
| "Memory inevitably declines dramatically" | Normal aging involves some memory decline, but most older adults maintain functional memory. Severe memory loss signals disease, not normal aging |
| "Older adults are generally unhappy" | Research shows well-being often INCREASES in later life — the "positivity effect" means older adults focus more on positive experiences |
| "Creativity declines with age" | Some forms of creativity peak later. Architects, writers, and historians often produce their best work in their 50s-60s |
| "Empty nest = depression" | Most parents adjust well and report increased relationship satisfaction after children leave |
| "Intelligence declines overall" | Crystallized intelligence is maintained; only fluid intelligence declines. Total intellectual capacity remains substantial |

### Physical Changes in Adulthood

**Young adulthood (20s-30s):** Peak physical performance, peak bone density
**Middle adulthood (40s-50s):** Gradual decline in vision, hearing, reaction time; menopause in women; some decline in fertility
**Late adulthood (60s+):** Continued sensory decline, decreased immune function, slower processing speed — BUT wide individual variation

### Social Changes

- **Social clock:** Cultural timeline for "appropriate" life milestones. Missing the social clock (e.g., unmarried at 40) can cause stress, though social clocks vary across cultures and generations
- **Empty nest:** Transition when children leave home — initially stressful for some, but most parents report improved relationship satisfaction
- **Retirement:** Can be positive (freedom, leisure) or negative (loss of identity, social connections)
- **Selective optimization with compensation (Baltes):** Older adults focus on their most important activities and find new ways to compensate for declining abilities
      `
    },
    {
      id: 'adol4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) What type of intelligence involves accumulated knowledge and vocabulary and is maintained with age?

      2) What type of intelligence involves processing speed and abstract reasoning and declines with age?

      3) Erikson's final stage crisis is integrity vs. ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['crystallized', 'fluid', 'despair'],
        hint1: 'Like crystals forming over time — knowledge builds up',
        hint2: 'Like fluid flowing — quick, flexible, but diminishes',
        hint3: 'Looking back on life with regret = ___',
        explanation: 'Expected answers: crystallized (knowledge-based intelligence preserved with age), fluid (speed/reasoning intelligence that declines), and despair (looking back on life with regret and bitterness — the negative outcome of Erikson\'s final stage).'
      }
    },
    {
      id: 'adol4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A 45-year-old who coaches youth soccer and mentors interns at work is demonstrating ___',
            options: ['identity achievement', 'intimacy', 'generativity', 'integrity']
          },
          {
            label: 'An 80-year-old reflects on life with peace, saying "I lived a good life" — this is ___',
            options: ['generativity', 'integrity', 'despair', 'identity']
          },
          {
            label: 'A retired professor scores well on vocabulary tests but slowly on timed puzzles. This illustrates preserved ___ intelligence',
            options: ['fluid', 'crystallized', 'emotional', 'general']
          }
        ],
        correctAnswers: ['generativity', 'integrity', 'crystallized'],
        hint1: 'Contributing to the next generation = generativity.',
        hint2: 'Looking back with satisfaction and acceptance = integrity.',
        hint3: 'Knowledge and vocabulary = crystallized intelligence.',
        explanation: 'Mentoring and coaching = generativity (Erikson\'s middle adulthood stage). Peaceful reflection on life = integrity (Erikson\'s final stage). Vocabulary preserved = crystallized intelligence.'
      }
    },
    {
      id: 'adol4-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"All intelligence declines with age"** — Only fluid intelligence declines. Crystallized intelligence (knowledge, vocabulary, expertise) remains stable or increases. The AP exam specifically tests this distinction.
- **"The empty nest always causes depression"** — Research shows most parents adjust positively and report improved relationship satisfaction. Don't assume empty nest = negative.
- **"Erikson's stages stop being relevant in adulthood"** — The three adult stages (intimacy, generativity, integrity) are heavily tested on the AP exam.
- **"Aging = inevitable decline in everything"** — Aging involves selective changes. Physical abilities decline, but emotional regulation, wisdom, and life satisfaction often IMPROVE.

### AP Strategy Moves
- **Crystallized vs. fluid is one of the most tested concepts in developmental psychology.** Know examples: crystallized = vocabulary, trivia, historical knowledge; fluid = puzzle speed, novel problem-solving, working memory.
- Erikson's three adult stages: 18-40 (intimacy), 40-65 (generativity), 65+ (integrity). Match scenarios to the correct stage.
- If a question describes someone looking back on life → integrity vs. despair. If someone is mentoring/parenting → generativity. If forming deep relationships → intimacy.
- The AP exam may test the "positivity effect" — the finding that older adults tend to focus on positive stimuli and memories more than younger adults.
      `
    },
    {
      id: 'adol4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 70-year-old woman says she can no longer garden as fast as she used to, so she now focuses only on her favorite roses and uses raised beds to avoid bending. According to developmental psychology, this strategy is called:',
            options: [
              'Denial of aging — she should accept declining abilities',
              'Selective optimization with compensation — she narrowed her focus and found compensatory strategies',
              'Learned helplessness — she has given up on challenging activities',
              'Identity diffusion — she has lost her sense of purpose'
            ],
            correctAnswer: 1,
            explanation: 'Selective optimization with compensation (Baltes) describes how older adults cope with decline: they SELECT their most important activities (favorite roses), OPTIMIZE their performance in those areas, and COMPENSATE for limitations (raised beds). This is an adaptive, healthy aging strategy — not giving up.'
          },
          {
            question: 'Research on the "positivity effect" in aging suggests that compared to younger adults, older adults tend to:',
            options: [
              'Remember negative events more vividly due to accumulated life stress',
              'Focus more on positive information, memories, and experiences, which often leads to greater emotional well-being',
              'Have identical emotional processing patterns as younger adults',
              'Become increasingly pessimistic as physical abilities decline'
            ],
            correctAnswer: 1,
            explanation: 'The positivity effect is a well-documented finding: older adults pay more attention to positive information, remember positive events better, and spend less time dwelling on negative experiences compared to younger adults. This cognitive shift contributes to the surprising finding that emotional well-being often INCREASES in later life.'
          }
        ]
      }
    }
  ]
}
