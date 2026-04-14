export const psychAdolescencePart6Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol6-s1-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Applying Developmental Concepts to Scenarios**

This workshop integrates everything from Parts 1-5: adolescent development, Erikson's stages, Kohlberg's moral reasoning, adulthood/aging, and death/dying. The AP exam frequently presents scenario-based questions that require applying multiple theories to a single case — this is where you practice that skill.

### Problem-Solving Framework

| Step | Action | Example |
|------|--------|---------|
| **1. Identify the age** | Determine the person's developmental stage | "A 16-year-old..." → adolescence |
| **2. Apply Erikson** | Match to the correct psychosocial crisis | Adolescent → identity vs. role confusion |
| **3. Apply Kohlberg** | Analyze moral reasoning level if moral dilemma is present | "I'll get in trouble" → preconventional |
| **4. Consider cognition** | What cognitive changes are relevant? | Teen → adolescent egocentrism, prefrontal cortex still developing |
| **5. Evaluate context** | Cultural factors? Stereotypes? Alternative explanations? | Is the question testing a common misconception? |

### Quick Reference: Erikson's 8 Stages

| Stage | Age | Crisis | Key word |
|-------|-----|--------|----------|
| 1 | 0-1 | Trust vs. Mistrust | Hope |
| 2 | 1-3 | Autonomy vs. Shame/Doubt | Will |
| 3 | 3-6 | Initiative vs. Guilt | Purpose |
| 4 | 6-12 | Industry vs. Inferiority | Competence |
| 5 | 12-18 | Identity vs. Role Confusion | Fidelity |
| 6 | 18-40 | Intimacy vs. Isolation | Love |
| 7 | 40-65 | Generativity vs. Stagnation | Care |
| 8 | 65+ | Integrity vs. Despair | Wisdom |

### Quick Reference: Kohlberg's 3 Levels

| Level | Reasoning basis | Example response to Heinz dilemma |
|-------|---------------|-----------------------------------|
| **Preconventional** | Self-interest — rewards and punishments | "He shouldn't steal because he'll go to jail" |
| **Conventional** | Social norms — law, order, approval | "He shouldn't steal because stealing is against the law" |
| **Postconventional** | Abstract principles — justice, rights | "He should steal because the right to life outweighs property rights" |
      `
    },
    {
      id: 'adol6-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 15-year-old shoplifts a hoodie because "everyone does it and I\'ll look stupid without one." When caught, she says she didn\'t think she\'d get in trouble. Which developmental concepts BEST explain her behavior?',
            options: [
              'Generativity and crystallized intelligence — she is contributing to peer culture',
              'Adolescent egocentrism (personal fable — "I won\'t get caught") and conventional moral reasoning (doing what peers approve of)',
              'Postconventional moral reasoning — she is following her own ethical code',
              'Integrity vs. despair — she is reflecting on her life choices'
            ],
            correctAnswer: 1,
            explanation: 'Two concepts apply here: (1) Personal fable (part of adolescent egocentrism) — she believed she was special enough to not get caught. (2) Conventional moral reasoning — her justification was based on peer norms ("everyone does it" = Stage 3 — gaining peer approval). This combination of egocentrism + conventional reasoning is very common in adolescent behavior scenarios on the AP exam.'
          },
          {
            question: 'A 72-year-old retired doctor volunteers at a free clinic and says, "I\'ve had a wonderful career. I want to keep giving back while I can." Which TWO Erikson stages is this person demonstrating successful resolution of?',
            options: [
              'Identity (knowing who she is) and Intimacy (close relationships)',
              'Generativity (giving back to community) and Integrity (looking back with satisfaction)',
              'Autonomy (independence) and Industry (competence)',
              'Trust (reliability) and Initiative (taking action)'
            ],
            correctAnswer: 1,
            explanation: 'This person shows (1) Generativity — still actively contributing to the next generation through volunteering, and (2) Integrity — reflecting on her career with satisfaction ("I\'ve had a wonderful career"). At 72, she would be in the integrity vs. despair stage, but her continued volunteering also reflects generativity that extends beyond middle adulthood.'
          }
        ]
      }
    },
    {
      id: 'adol6-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Complex Scenario Analysis

#### Scenario 1: The Teenage Driver

*Marcus, 16, just got his license. He drives 85 mph on the highway with friends in the car, filming for social media. He says, "Nothing bad will ever happen to me."*

| Concept | Application |
|---------|------------|
| **Personal fable** | "Nothing bad will ever happen to me" — belief in personal invulnerability |
| **Imaginary audience** | Filming for social media — performing for an audience he believes is watching |
| **Prefrontal cortex** | Risk assessment is underdeveloped — limbic system (thrill) overrides PFC (caution) |
| **Peer influence** | Friends in the car increase risk-taking — adolescents take more risks with peers present |

#### Scenario 2: The Aging Stereotype

*A company refuses to hire a 62-year-old applicant, arguing that "older workers can't learn new technology."*

| Claim | Reality |
|-------|---------|
| "Can't learn new technology" | Fluid intelligence declines but crystallized intelligence is maintained — older adults CAN learn, just may be slower at novel tasks |
| "Older = less productive" | Research shows older workers often have lower absenteeism, greater reliability, and deeper expertise |
| "Should retire at 65" | Social clock expectation — varies by culture and individual; many people remain productive well into their 70s and 80s |

#### Scenario 3: Moral Reasoning Across Ages

*A teacher catches a student cheating. Different students react:*

| Student response | Kohlberg level | Stage |
|-----------------|---------------|-------|
| "I don't want detention" | Preconventional | Stage 1 — avoiding punishment |
| "The school rules say no cheating" | Conventional | Stage 4 — law and order |
| "Cheating undermines the purpose of education for everyone" | Postconventional | Stage 5 — social contract |
      `
    },
    {
      id: 'adol6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) A teen who believes "everyone is watching me" is experiencing the ___ (two words) aspect of adolescent egocentrism.

      2) When a person reasons morally based on abstract principles of justice (beyond social rules), they are at Kohlberg's ___ level. (one word)

      3) Erikson's middle adulthood crisis (40-65) is generativity vs. ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['imaginary audience', 'postconventional', 'stagnation'],
        hint1: 'The teen acts as if performing on a stage for an ___ ___',
        hint2: 'Post + conventional = beyond conventional rules',
        hint3: 'The opposite of being productive and generative = feeling stuck and ___',
        explanation: 'Expected answers: imaginary audience (believing everyone is watching and evaluating you), postconventional (Stage 5-6 moral reasoning based on abstract principles beyond laws), and stagnation (feeling unproductive, uninvolved, and stuck — the negative resolution of Erikson\'s middle adulthood stage).'
      }
    },
    {
      id: 'adol6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A child says "I won\'t steal because I\'ll get spanked." This is ___ moral reasoning',
            options: ['preconventional', 'conventional', 'postconventional']
          },
          {
            label: 'A 45-year-old who coaches Little League and mentors interns is demonstrating Erikson\'s ___',
            options: ['identity', 'intimacy', 'generativity', 'integrity']
          },
          {
            label: 'A teen who takes dangerous risks because "bad things only happen to other people" is showing the ___',
            options: ['imaginary audience', 'personal fable', 'formal operations', 'object permanence']
          }
        ],
        correctAnswers: ['preconventional', 'generativity', 'personal fable'],
        hint1: 'Reasoning based purely on avoiding punishment = preconventional.',
        hint2: 'Contributing to the next generation = generativity.',
        hint3: 'Belief in personal invulnerability = personal fable.',
        explanation: 'Avoiding punishment = preconventional (Stage 1). Coaching and mentoring = generativity (Erikson\'s middle adulthood — contributing to the next generation). "Bad things only happen to other people" = personal fable — the belief in personal uniqueness and invulnerability.'
      }
    },
    {
      id: 'adol6-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Kohlberg's stages = age-locked"** — While younger children are more likely to be preconventional, many adults reason at the conventional level. Postconventional is rare at any age. Don't assume a teenager can't reason postconventionally.
- **"Adolescent risk-taking = poor character"** — The AP exam frames adolescent risk-taking as a BRAIN DEVELOPMENT issue (immature prefrontal cortex), not a moral failing.
- **"All elderly people decline cognitively"** — This is the aging stereotype the AP exam tests frequently. Be prepared to challenge it with the crystallized vs. fluid distinction.
- **"Erikson's stages must be resolved in order with no overlap"** — People can work on multiple crises simultaneously, and unresolved stages can be revisited later.

### AP Strategy Moves
- **For scenario questions:** First identify the age → then match Erikson's stage → then look for Kohlberg cues if moral reasoning is involved → then consider any cognitive development factors.
- **The AP exam loves tricky Kohlberg questions.** Two people can reach the SAME conclusion (e.g., "he should steal the drug") for different REASONS (preconventional: "he won't get caught" vs. postconventional: "life outweighs property"). Kohlberg's theory is about REASONING, not the answer.
- **Free-response tip:** When analyzing a developmental scenario, name the theory + stage + specific behavioral evidence. Example: "This reflects preconventional moral reasoning (Kohlberg, Stage 1) because the child's decision is based solely on avoiding punishment."
- **Aging stereotypes:** If a question presents negative assumptions about aging, the correct answer usually challenges those assumptions using research evidence (positivity effect, crystallized intelligence, selective optimization with compensation).
      `
    },
    {
      id: 'adol6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two students debate whether to report a classmate for cheating. Student A says, "We should report her — the school handbook says cheating is a violation and must be reported." Student B says, "We should talk to her first — she might be going through something, and the principle of compassion should guide our response." According to Kohlberg, what levels of moral reasoning do Students A and B represent?',
            options: [
              'Both are conventional — they are following social rules',
              'A is preconventional (self-interest) and B is conventional (social norms)',
              'A is conventional (following rules/law and order) and B is postconventional (abstract principle of compassion)',
              'Both are postconventional — they are thinking about ethical principles'
            ],
            correctAnswer: 2,
            explanation: 'Student A reasons at the conventional level (Stage 4 — law and order): the school handbook defines what\'s right. Student B reasons at the postconventional level: she appeals to an abstract principle (compassion) that transcends the specific rules. This is a classic AP exam question — same situation, different reasoning levels, based on the JUSTIFICATION, not the conclusion.'
          },
          {
            question: 'A researcher claims that adolescent risk-taking behavior is primarily caused by poor parenting. A developmental psychologist would most likely respond by noting that:',
            options: [
              'Research confirms that parenting is the sole predictor of adolescent risk-taking behavior',
              'Adolescent risk-taking is better explained by the developmental gap between the mature limbic system (emotional/reward responses) and the still-developing prefrontal cortex (impulse control)',
              'Adolescents never take risks — this is an unfair stereotype',
              'Risk-taking only occurs in adolescents with formal operational thinking deficits'
            ],
            correctAnswer: 1,
            explanation: 'The neuroscience explanation for adolescent risk-taking is that the limbic system (which drives emotional responses and reward-seeking) matures earlier than the prefrontal cortex (which manages impulse control and long-term planning). This creates a developmental mismatch — adolescents experience adult-level drives without fully developed braking systems. While parenting matters, the primary explanation on the AP exam is neurological development.'
          }
        ]
      }
    }
  ]
}
