export const psychAdolescencePart7Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

**Part 7 of 7 — Integrating Adolescence & Adulthood for the AP Exam**

This final part brings together the developmental concepts from Parts 1-6: adolescent physical and cognitive development, identity formation (Erikson, Marcia), peers and gender socialization, adult physical and cognitive change, and adult social development. Master these connections and you'll be ready for lifespan questions on the AP exam.

### Master Integration Table

| Concept | Key idea | Common AP trap |
|---------|----------|----------------|
| **Puberty** | Growth spurt; primary and secondary sex characteristics; menarche and spermarche | Puberty is the biological part of adolescence, not all of it |
| **Adolescent egocentrism** | Imaginary audience + personal fable | Egocentrism here means self-consciousness, not selfishness |
| **Adolescent brain** | Limbic system matures before the prefrontal cortex | Teens usually know the risks; impulse control lags |
| **Psychosocial development (Erikson)** | 8 stages across the lifespan, each with a conflict | Confusing intimacy (relationships) with generativity (contribution) |
| **Identity statuses (Marcia)** | 4 outcomes based on exploration × commitment, applied domain by domain | Foreclosure ≠ achievement: both have commitment, but foreclosure lacks exploration |
| **Possible selves** | Hoped-for and feared selves guide present choices | They are not just daydreams |
| **Peers and gender** | Reliance on peers rises gradually; gender roles are socialized | Peers add to parents' influence rather than replacing it |
| **Adult physical change** | Menopause; slower reaction time; declining mobility, flexibility, and sensory acuity | Decline is gradual and varies widely |
| **Crystallized vs. fluid** | Knowledge stays relatively stable; fluid intelligence wanes | Not ALL intelligence declines |
| **Dementia** | A cognitive disorder that disrupts daily life | Dementia is not normal aging |
| **Social clock / emerging adulthood** | Culture sets when adulthood begins and when life events are expected | "On time" differs across cultures |
| **Adult attachment and ACEs** | Childhood attachment and ACEs can affect adult relationships | Tendencies and risks, not destinies |
| **Cross-sectional vs. longitudinal** | Different ages at one time vs. same people over time | Cohort effects vs. attrition |

### Why This Matters for the AP Exam

Questions on this topic frequently:
- Present scenarios requiring you to identify Erikson stages or Marcia statuses
- Test the crystallized vs. fluid intelligence distinction and normal aging vs. dementia
- Ask you to identify a developmental research design and its limits
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
            question: 'A 17-year-old has firmly decided to become a pharmacist after job-shadowing in three careers, but she has never thought about her religious beliefs and says she does not care to. How would Marcia\'s framework best describe her?',
            options: [
              'Achievement overall, because her career decision followed real exploration',
              'Diffusion overall, because she has not committed to any religious view',
              'Achievement for occupation and diffusion for religion, judged domain by domain',
              'Moratorium overall, because she is still in high school and exploring options'
            ],
            correctAnswer: 2,
            explanation: 'Identity statuses can differ by domain. She explored and committed in the occupational domain (achievement) but has neither explored nor committed in the religious domain (diffusion).'
          },
          {
            question: 'Which combination correctly matches ALL three concepts to the right developmental period?',
            options: [
              'Adolescence: personal fable, identity vs. role confusion, menopause',
              'Adolescence: personal fable, identity vs. role confusion, spermarche',
              'Adolescence: personal fable, intimacy vs. isolation, spermarche',
              'Late adulthood: imaginary audience, integrity vs. despair, and menarche'
            ],
            correctAnswer: 1,
            explanation: 'The personal fable, identity vs. role confusion, and spermarche (a boy\'s first ejaculation) all belong to adolescence. Menopause is a milestone of middle adulthood, intimacy vs. isolation is the young-adult conflict, and menarche belongs to adolescence, not late adulthood.'
          }
        ]
      }
    },
    {
      id: 'adol7-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Connections for the AP Exam

#### Erikson vs. Marcia (Identity Development)

| Feature | Erikson | Marcia |
|---------|---------|--------|
| **Scope** | 8 stages across the entire lifespan | Focuses specifically on identity formation in adolescence |
| **Framework** | Psychosocial conflicts with two possible outcomes | 2×2 grid: exploration (yes/no) × commitment (yes/no) |
| **Prediction** | Identity vs. role confusion in adolescence | Four possible outcomes: achievement, moratorium, foreclosure, diffusion |
| **Relationship** | Marcia's model elaborates ON Erikson's adolescent stage | Marcia provides the specifics that Erikson's broad framework lacks |

#### The Three Developmental Themes Applied to This Topic

| Theme | Adolescence example | Adulthood example |
|-------|--------------------|-------------------|
| **Nature and nurture** | Puberty timing is biological; how peers react to it is social | Menopause is biological; the social clock is cultural |
| **Stability and change** | Temperament carries forward while identity changes a great deal | Crystallized intelligence is stable while fluid intelligence changes |
| **Continuity and discontinuity (stages)** | Erikson describes adolescence as a distinct stage | Physical decline is gradual and continuous |

#### Nature vs. Nurture Across the Lifespan

| Domain | Nature (biology) | Nurture (environment) |
|--------|-----------------|----------------------|
| **Adolescent risk-taking** | Prefrontal/limbic maturity gap | Peer presence, parenting, culture |
| **Identity** | Temperament and puberty timing | Family, peers, culture, and opportunities to explore |
| **Aging** | Genetic factors, menopause | Exercise, diet, social engagement, cognitive stimulation |
| **Adult relationships** | Temperament | Childhood attachment, ACEs, culture's social clock |
      `
    },
    {
      id: 'adol7-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Marcia\'s identity status where a person has explored options AND made a commitment is called identity _____.',
            answer: 'achievement',
            acceptableAnswers: ['achieved', 'identity achievement'],
            explanation: 'Achievement requires both exploration and commitment.'
          },
          {
            question: 'A cognitive disorder in which memory and thinking decline enough to disrupt daily life is called _____.',
            answer: 'dementia',
            acceptableAnswers: ['dementias'],
            explanation: 'Dementia is a disorder, not normal aging; Alzheimer\'s disease is its most common cause.'
          },
          {
            question: 'The developmental theme asking whether development proceeds gradually or in distinct stages is continuity vs. _____.',
            answer: 'discontinuity',
            acceptableAnswers: ['discontinuous', 'stages'],
            explanation: 'Continuity vs. discontinuity is one of the enduring themes in developmental psychology, along with nature vs. nurture and stability vs. change.'
          }
        ]
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
            label: 'A teen who accepts her parents\' career choice without ever considering alternatives shows Marcia\'s _____',
            options: ['identity achievement', 'identity moratorium', 'identity foreclosure', 'identity diffusion']
          },
          {
            label: 'A study that tests 20-, 40-, and 60-year-olds in the same month uses a _____ design',
            options: ['longitudinal', 'cross-sectional', 'experimental', 'case study']
          },
          {
            label: 'A 30-year-old\'s relatives say she is "late" to marry because most women in their community marry by 22. This reflects the _____',
            options: ['personal fable', 'social clock', 'imaginary audience', 'cohort effect']
          }
        ],
        correctAnswers: ['identity foreclosure', 'cross-sectional', 'social clock'],
        hint1: 'Commitment without exploration.',
        hint2: 'Different age groups, one point in time.',
        hint3: 'A culture\'s expected timing for life events.',
        explanation: 'Adopting a career without exploring is foreclosure. Testing different age groups at one time is cross-sectional. Expectations about the "right" age to marry are the social clock.'
      }
    },
    {
      id: 'adol7-s6-strategy',
      type: 'text' as const,
      content: `
## Final Exam Strategy: Adolescence & Adulthood

### High-Frequency AP Topics (This Topic)
1. **Erikson's stages:** especially identity, intimacy, generativity, integrity
2. **Marcia's statuses:** exploration × commitment, applied by domain
3. **Crystallized vs. fluid intelligence** and normal aging vs. dementia
4. **Adolescent egocentrism:** imaginary audience and personal fable
5. **Developmental designs:** cross-sectional (cohort effects) vs. longitudinal (attrition)

### EBQ Template (7 points, 3 parts)

The Evidence-Based Question gives three sources and asks you to build an argument. For a prompt such as "Develop and justify an argument about the extent to which adolescent risk-taking is shaped by the social environment":

**Part A, claim:** Take a specific, defensible position. "Adolescent risk-taking rises sharply when peers are present, so the social environment strongly shapes it, although brain maturation sets the stage."
**Part B, evidence + explanation:** Cite one source ("According to Source 1, ...") and explain how it supports the claim using a psychological concept, such as **peer influence**.
**Part C, evidence + explanation:** Cite a **different** source and explain it with a **different** concept, such as the **prefrontal cortex** maturing after the limbic system.

### Last-Minute Reminders
- Marcia's 2×2: explore × commit → achievement/moratorium/foreclosure/diffusion
- Aging: crystallized stable, fluid down; dementia is a disorder, not normal aging
- Adolescent brain: limbic system matures first, PFC still developing → risk-taking
- Social clock and emerging adulthood depend on culture
- Cross-sectional = cohort effects; longitudinal = attrition
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
            question: 'A 35-year-old woman recently ended a long-term relationship and now focuses entirely on her career, avoiding all close social connections. Using Erikson\'s theory, which explanation fits her situation best?',
            options: [
              'She is resolving generativity vs. stagnation successfully through her career',
              'She is moving toward isolation in the conflict of intimacy vs. isolation',
              'She is in identity diffusion, having neither explored nor committed to a self',
              'She is in integrity vs. despair, looking back over her life with regret'
            ],
            correctAnswer: 1,
            explanation: 'At 35 she is in young adulthood, where the conflict is intimacy vs. isolation. Avoiding close relationships after the breakup moves her toward isolation; generativity and integrity belong to later stages.'
          },
          {
            question: 'An EBQ asks for an argument about whether adult intelligence declines with age. A student uses a cross-sectional source in Part B, explained with fluid intelligence. Which plan for Part C best meets the EBQ requirements?',
            options: [
              'The same source again, now explained with crystallized intelligence',
              'A longitudinal source, explained with crystallized intelligence',
              'A longitudinal source, explained again with fluid intelligence',
              'No source, with a personal story about a grandparent\'s memory'
            ],
            correctAnswer: 1,
            explanation: 'Part C needs evidence from a different source and a different psychological concept from Part B. Only the longitudinal source explained with crystallized intelligence changes both.'
          }
        ]
      }
    }
  ]
}
