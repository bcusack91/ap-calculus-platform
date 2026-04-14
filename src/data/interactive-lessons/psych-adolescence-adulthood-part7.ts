export const psychAdolescencePart7Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

**Part 7 of 7 — Integrating Adolescence & Adulthood for the AP Exam**

This final part brings together ALL the developmental concepts from Parts 1-6: adolescent physical/cognitive development, identity formation (Erikson, Marcia), moral reasoning (Kohlberg, Gilligan), adulthood and aging, and death/dying. Master these connections and you'll be ready for any lifespan development question on the AP exam.

### Master Integration Table

| Theory/Concept | Theorist | Key idea | Common AP trap |
|---------------|----------|----------|----------------|
| **Psychosocial development** | Erikson | 8 stages across lifespan, each with a crisis | Confusing intimacy (relationships) with generativity (contribution) |
| **Identity statuses** | Marcia | 4 outcomes based on exploration × commitment | Foreclosure ≠ achievement — both have commitment, but foreclosure lacks exploration |
| **Moral reasoning** | Kohlberg | 3 levels based on reasoning, not conclusions | Same answer (steal/don't steal) can come from different reasoning levels |
| **Ethic of care** | Gilligan | Kohlberg's model had a male bias; women may prioritize relationships | Gilligan didn't say women are morally inferior — she said the measurement was biased |
| **Adolescent egocentrism** | Elkind | Imaginary audience + personal fable | Egocentrism ≠ selfishness — it's a cognitive limitation |
| **Crystallized vs. fluid** | Cattell/Horn | Knowledge preserved; speed declines with age | Not ALL intelligence declines — only fluid |
| **Kübler-Ross** | Kübler-Ross | DABDA stages of grief | Stages are NOT linear or universal — this is the exam's favorite critique |
| **Selective optimization** | Baltes | Older adults narrow focus and compensate | This is ADAPTIVE, not giving up |

### Why This Matters for the AP Exam

The Developmental Psychology unit accounts for approximately 7-9% of the AP Psychology exam. Questions frequently:
- Present scenarios requiring you to identify Erikson stages or Kohlberg levels
- Ask you to critique theories (especially Kohlberg and Kübler-Ross)
- Test the crystallized vs. fluid intelligence distinction
- Include aging stereotypes that you must challenge with research evidence
      `
    },
    {
      id: 'adol7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher studying moral development finds that a 14-year-old girl explains her decision to help a friend cheat by saying, "She\'s my best friend and she was going to fail — I couldn\'t let her down." Carol Gilligan would most likely interpret this as evidence that:',
            options: [
              'The girl is at Kohlberg\'s preconventional level because she is helping a friend avoid a bad outcome',
              'The girl demonstrates an ethic of care — prioritizing relationships and responsiveness to others\' needs, which Kohlberg\'s justice-focused model undervalues',
              'The girl lacks moral development because she helped someone cheat',
              'Kohlberg\'s model accurately captures her reasoning at the conventional level'
            ],
            correctAnswer: 1,
            explanation: 'Gilligan argued that Kohlberg\'s model was biased toward a male "justice" orientation and failed to value the "care" orientation that emphasizes relationships, empathy, and responsiveness. The girl\'s reasoning centers on loyalty and not letting her friend down — exactly the kind of relational reasoning Gilligan said deserved its own moral framework.'
          },
          {
            question: 'Which combination correctly matches ALL three concepts to the right developmental period?',
            options: [
              'Adolescence: personal fable, identity vs. role confusion, postconventional reasoning',
              'Adolescence: personal fable, identity vs. role confusion, prefrontal cortex still developing',
              'Middle adulthood: personal fable, generativity, crystallized intelligence peak',
              'Late adulthood: formal operations, integrity vs. despair, fluid intelligence increase'
            ],
            correctAnswer: 1,
            explanation: 'All three concepts correctly apply to adolescence: (1) Personal fable = belief in personal uniqueness/invulnerability (Elkind\'s adolescent egocentrism), (2) Identity vs. role confusion = Erikson\'s adolescent psychosocial crisis, (3) Prefrontal cortex still developing = explains risk-taking and impulsive behavior. Option A is wrong because postconventional reasoning is rare even in adults, not typical of adolescence.'
          }
        ]
      }
    },
    {
      id: 'adol7-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Theory Comparisons for the AP Exam

#### Erikson vs. Marcia (Identity Development)

| Feature | Erikson | Marcia |
|---------|---------|--------|
| **Scope** | 8 stages across the entire lifespan | Focuses specifically on identity formation in adolescence |
| **Framework** | Psychosocial crises with two possible outcomes | 2×2 grid: exploration (yes/no) × commitment (yes/no) |
| **Prediction** | Identity vs. role confusion in adolescence | Four possible outcomes: achievement, moratorium, foreclosure, diffusion |
| **Relationship** | Marcia's model elaborates ON Erikson's adolescent stage | Marcia provides the specifics that Erikson's broad framework lacks |

#### Kohlberg vs. Gilligan (Moral Development)

| Feature | Kohlberg | Gilligan |
|---------|----------|----------|
| **Focus** | Justice, rights, abstract principles | Care, relationships, responsiveness |
| **Basis** | Studied primarily males (especially the Heinz dilemma) | Critiqued Kohlberg's male sample and justice bias |
| **Stages** | 3 levels, 6 stages — universal and hierarchical | Did NOT propose formal stages; proposed care as an alternative lens |
| **AP trap** | Confusing reasoning LEVEL with moral CONCLUSION | Thinking Gilligan said women are morally inferior (she didn't) |

#### Nature vs. Nurture Across the Lifespan

| Domain | Nature (biology) | Nurture (environment) |
|--------|-----------------|----------------------|
| **Adolescent risk-taking** | PFC/limbic maturity gap (biological) | Peer pressure, parenting, culture |
| **Moral reasoning** | Brain development enables abstract thinking | Cultural values, education, religious training |
| **Aging** | Genetic factors, telomere length | Exercise, diet, social engagement, cognitive stimulation |
| **Grief** | Possibly universal emotional response | Cultural mourning practices, social support availability |
      `
    },
    {
      id: 'adol7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Marcia's identity status where a person has explored options AND made a commitment is called identity ___. (one word)

      2) The Kübler-Ross mnemonic for the five grief stages is ___. (five letters)

      3) Gilligan critiqued Kohlberg for undervaluing the ethic of ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['achievement', 'DABDA', 'care'],
        hint1: 'Explored + committed = the best outcome = ___',
        hint2: 'Denial, Anger, Bargaining, Depression, Acceptance',
        hint3: 'Gilligan emphasized relationships and ___ over abstract justice',
        explanation: 'Expected answers: achievement (Marcia\'s ideal outcome — both exploration and commitment present), DABDA (Denial, Anger, Bargaining, Depression, Acceptance — Kübler-Ross\'s five stages), and care (Gilligan argued Kohlberg\'s model was biased toward a justice orientation, undervaluing women\'s tendency toward a care/relationship orientation).'
      }
    },
    {
      id: 'adol7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A teen who accepts her parents\' career choice without ever considering alternatives shows Marcia\'s ___',
            options: ['identity achievement', 'identity moratorium', 'identity foreclosure', 'identity diffusion']
          },
          {
            label: 'A 75-year-old who focuses only on gardening (her favorite hobby) and uses raised beds to compensate for back pain demonstrates ___',
            options: ['learned helplessness', 'selective optimization with compensation', 'crystallized intelligence', 'denial of aging']
          },
          {
            label: 'A child who says "I won\'t steal because I might go to jail" is reasoning at Kohlberg\'s ___ level',
            options: ['preconventional', 'conventional', 'postconventional']
          }
        ],
        correctAnswers: ['identity foreclosure', 'selective optimization with compensation', 'preconventional'],
        hint1: 'Commitment without exploration = foreclosure.',
        hint2: 'Narrowing focus + compensating for decline = Baltes.',
        hint3: 'Avoiding punishment = self-interest = preconventional.',
        explanation: 'Foreclosure = committing to an identity (parents\' career) without exploring alternatives. Selective optimization with compensation (Baltes) = choosing the most important activities and finding ways to compensate for declining abilities. Preconventional = moral reasoning based on self-interest (avoiding punishment, seeking rewards).'
      }
    },
    {
      id: 'adol7-s6-strategy',
      type: 'text' as const,
      content: `
## Final Exam Strategy: Adolescence & Adulthood

### High-Frequency AP Topics (This Unit)
1. **Erikson's stages** — Especially identity, intimacy, generativity, integrity
2. **Kohlberg's levels** — Identifying reasoning level from scenarios (NOT the conclusion)
3. **Crystallized vs. fluid intelligence** — The #1 aging question
4. **Adolescent egocentrism** — Imaginary audience and personal fable
5. **Kübler-Ross critiques** — Stages are not linear or universal

### Free-Response Template

When analyzing a developmental scenario in the FRQ:

**Step 1:** Name the theory and theorist → "According to Erikson's psychosocial theory..."
**Step 2:** Identify the specific stage/level → "...this person is in the generativity vs. stagnation stage..."
**Step 3:** Cite behavioral evidence → "...as evidenced by her commitment to mentoring young employees..."
**Step 4:** Explain WHY this evidence matches → "...which demonstrates generativity because she is actively contributing to the development of the next generation."

### Last-Minute Reminders
- Kohlberg = reasoning level, NOT whether the answer is "steal" or "don't steal"
- Gilligan critiqued the METHOD, not women's moral capacity
- Kübler-Ross stages: DABDA — but they're NOT linear. Always mention this critique.
- Aging: crystallized UP, fluid DOWN, emotional well-being often UP (positivity effect)
- Adolescent brain: limbic system mature, PFC still developing → explains risk-taking
- Marcia's 2×2: explore × commit → achievement/moratorium/foreclosure/diffusion
      `
    },
    {
      id: 'adol7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A free-response question asks: "Explain how Erikson\'s theory of psychosocial development applies to a 35-year-old woman who recently ended a long-term relationship and now focuses entirely on her career, avoiding all social connections." The strongest response would identify this as:',
            options: [
              'Successful resolution of generativity vs. stagnation through career focus',
              'Unsuccessful resolution of intimacy vs. isolation — she is avoiding deep personal connections and may experience isolation',
              'Identity diffusion — she doesn\'t know who she is',
              'Integrity vs. despair — she is reflecting on her life choices with regret'
            ],
            correctAnswer: 1,
            explanation: 'At 35, this woman is in Erikson\'s young adulthood stage: intimacy vs. isolation. Her avoidance of social connections after a breakup suggests she may be moving toward isolation rather than forming new intimate relationships. A strong FRQ answer would: (1) name Erikson\'s theory, (2) identify the stage as intimacy vs. isolation, (3) cite the behavioral evidence (avoiding social connections), and (4) explain that this pattern, if continued, represents the negative resolution (isolation).'
          },
          {
            question: 'A student writes on the AP exam: "Kübler-Ross proved that all people experience denial, then anger, then bargaining, then depression, then acceptance — in that order — when facing death." A teacher would give this response partial credit because:',
            options: [
              'The student correctly described all five stages but failed to note that the stages are not necessarily experienced in order, are not universal, and have been criticized for limited empirical support',
              'The student is completely correct — this is exactly how the stages work',
              'The student listed the wrong stages — the correct order is acceptance first',
              'Kübler-Ross never proposed five stages of grief'
            ],
            correctAnswer: 0,
            explanation: 'The student correctly recalls the five stages (DABDA) but makes a critical error: presenting them as proven, universal, and sequential. For full credit, the student must note that (1) people don\'t always experience all stages, (2) stages don\'t always follow this order, (3) the model has been critiqued for limited empirical support and cultural bias, and (4) Kübler-Ross\'s work was based on informal interviews, not controlled studies. The AP exam rewards critical evaluation of theories, not just memorization.'
          }
        ]
      }
    }
  ]
}
