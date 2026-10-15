export const psychAdolescencePart6Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol6-s1-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Applying Developmental Concepts to Scenarios and Studies**

This workshop integrates Parts 1-5: adolescent physical and cognitive development, identity and peers, adult physical and cognitive change, and adult social development. The AP exam presents scenarios that combine several concepts, and its Article Analysis Question (AAQ) asks you to analyze a developmental study. This part practices both.

### Problem-Solving Framework

| Step | Action | Example |
|------|--------|---------|
| **1. Identify the age** | Determine the person's developmental period | "A 16-year-old..." → adolescence |
| **2. Apply Erikson** | Match to the correct psychosocial conflict | Adolescent → identity vs. role confusion |
| **3. Consider cognition** | What cognitive changes are relevant? | Teen → adolescent egocentrism, prefrontal cortex still developing; older adult → fluid vs. crystallized |
| **4. Consider social context** | Peers, identity domain, attachment, social clock, culture | "Everyone her age is married" → social clock |
| **5. Check the evidence** | If a study is described, what design is it, and what can it conclude? | Same teens surveyed for 4 years → longitudinal, correlational |

### Quick Reference: Erikson's 8 Stages

| Stage | Age | Conflict | Key word |
|-------|-----|--------|----------|
| 1 | 0-1 | Trust vs. Mistrust | Hope |
| 2 | 1-3 | Autonomy vs. Shame/Doubt | Will |
| 3 | 3-6 | Initiative vs. Guilt | Purpose |
| 4 | 6-12 | Industry vs. Inferiority | Competence |
| 5 | 12-18 | Identity vs. Role Confusion | Fidelity |
| 6 | 18-40 | Intimacy vs. Isolation | Love |
| 7 | 40-65 | Generativity vs. Stagnation | Care |
| 8 | 65+ | Integrity vs. Despair | Wisdom |
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
            question: 'A 15-year-old shoplifts a hoodie with two friends watching, saying "everyone does it." When caught, she says she never thought she would get in trouble. Which developmental concepts BEST explain her behavior?',
            options: [
              'Generativity and crystallized intelligence, since she is shaping peer culture',
              'The personal fable and the way peers amplify adolescent risk-taking',
              'Identity achievement and a secure attachment to her two friends',
              'Concrete operational thinking and a decline in her reaction time'
            ],
            correctAnswer: 1,
            explanation: 'Believing she would not get caught is the personal fable, the adolescent sense of invulnerability. Doing it with friends watching fits the finding that peer presence increases adolescent risk-taking while the prefrontal cortex is still maturing.'
          },
          {
            question: 'A 72-year-old retired doctor volunteers at a free clinic and says, "I\'ve had a wonderful career. I want to keep giving back while I can." Which TWO Erikson stages is this person demonstrating successful resolution of?',
            options: [
              'Identity (knowing who she is) and Intimacy (forming close relationships)',
              'Generativity (giving back) and Integrity (satisfaction with life)',
              'Autonomy (acting independently) and Industry (feeling competent at work)',
              'Trust (relying on others) and Initiative (starting new projects)'
            ],
            correctAnswer: 1,
            explanation: 'Volunteering contributes to others, which is generativity, and her satisfied look back on her career reflects integrity. At 72 she is in the integrity vs. despair stage, but generativity can continue past middle adulthood.'
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
| **Personal fable** | "Nothing bad will ever happen to me": belief in personal invulnerability |
| **Imaginary audience** | Filming for social media: performing for an audience he believes is watching |
| **Prefrontal cortex** | Risk assessment is underdeveloped; the limbic system's thrill-seeking overrides caution |
| **Peer influence** | Friends in the car increase risk-taking; adolescents take more risks with peers present |

#### Scenario 2: The Aging Stereotype

*A company refuses to hire a 62-year-old applicant, arguing that "older workers can't learn new technology."*

| Claim | Reality |
|-------|---------|
| "Can't learn new technology" | Fluid intelligence declines but crystallized intelligence is maintained; older adults CAN learn, though they may be slower at novel tasks |
| "Slower means worse" | Slower reaction time matters for some tasks; experience and knowledge often matter more |
| "Should retire at 65" | A social clock expectation; it varies by culture and individual |

#### Scenario 3: Practice AAQ Study

*This practice study is invented for this lesson; it is not a real published study.*

**Hypothesis:** Adolescents who spend more time with peers will report more risk-taking.

**Method:** Researchers recruited 300 students from three public high schools in one Midwestern city when they were 14 and surveyed the same students every year until age 18. Peer time was the number of hours per week a teen reported spending with friends without adults present. Risk-taking was the number of 15 risky behaviors (such as riding with a driver who had been drinking) the teen reported in the past month. Parents gave written consent, teens gave assent, and surveys were labeled with ID numbers instead of names.

**Results:** Across the four years, peer time and risk-taking were positively correlated, r = +.38. Average risk-taking rose from age 14 to 17 and dipped slightly at 18. By age 18, 22% of the original students had dropped out of the study.

| AAQ task | Model answer |
|---------|-------------|
| **Research method** | Correlational study using a **longitudinal** design: the same teens were surveyed each year, and no variable was manipulated |
| **Operational definition** | Risk-taking = the number of 15 listed risky behaviors reported in the past month |
| **Statistic** | r = +.38 is a moderate positive correlation: teens who spent more unsupervised time with friends tended to report more risk-taking |
| **Ethical guideline** | Informed consent: parents signed consent forms and teens gave assent. (Confidentiality, through ID numbers, is another choice.) |
| **Generalizability** | Limited: all students came from three schools in one city, and the 22% who dropped out may differ from those who stayed |
| **Support or refute** | Supports the hypothesis, because more peer time went with more reported risk-taking, though the design cannot show that peer time **caused** it |
      `
    },
    {
      id: 'adol6-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word or short phrase for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'A teen who believes "everyone is watching me" is experiencing the imaginary _____.',
            answer: 'audience',
            acceptableAnswers: ['imaginary audience'],
            explanation: 'The imaginary audience is the adolescent belief that others are constantly watching and evaluating you.'
          },
          {
            question: 'A design that surveys the same teens every year from age 14 to 18 is a _____ design.',
            answer: 'longitudinal',
            acceptableAnswers: ['longitudinal study', 'longitudinal research'],
            explanation: 'Following the same people over time is longitudinal; comparing different age groups at one time would be cross-sectional.'
          },
          {
            question: 'Erikson\'s middle-adulthood conflict is generativity vs. _____.',
            answer: 'stagnation',
            acceptableAnswers: ['stagnating'],
            explanation: 'Stagnation is the negative pole: feeling unproductive and uninvolved rather than contributing to the next generation.'
          }
        ]
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
            label: 'In the practice study, the fact that 22% of the students left before age 18 is a problem of _____',
            options: ['cohort effects', 'attrition', 'random assignment', 'debriefing']
          },
          {
            label: 'A 45-year-old who coaches Little League and mentors interns is demonstrating Erikson\'s _____',
            options: ['identity', 'intimacy', 'generativity', 'integrity']
          },
          {
            label: 'A teen who takes dangerous risks because "bad things only happen to other people" is showing the _____',
            options: ['imaginary audience', 'personal fable', 'formal operations', 'object permanence']
          }
        ],
        correctAnswers: ['attrition', 'generativity', 'personal fable'],
        hint1: 'Participants dropping out of a long study.',
        hint2: 'Contributing to the next generation.',
        hint3: 'Belief in personal invulnerability.',
        explanation: 'Losing participants over a longitudinal study is attrition, which limits generalizability because those who leave may differ from those who stay. Coaching and mentoring are generativity. "Bad things only happen to other people" is the personal fable.'
      }
    },
    {
      id: 'adol6-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Adolescent risk-taking = poor character"** — The AP exam frames adolescent risk-taking as a brain-development issue (an immature prefrontal cortex), amplified by peers, not a moral failing.
- **"All elderly people decline cognitively"** — Challenge this stereotype with the crystallized vs. fluid distinction, and separate normal aging from dementia.
- **"Erikson's stages must be resolved in order with no overlap"** — People can work on more than one conflict at once, and life events can reopen earlier stages.
- **"A longitudinal study is an experiment"** — Following the same people over time does not manipulate anything; age and peer time are measured, not assigned.

### AP Strategy Moves
- **For scenario questions:** First identify the age → then match Erikson's stage → then look for cognitive cues (egocentrism, fluid vs. crystallized) → then social cues (peers, identity domain, attachment, social clock).
- **AAQ (7 points, 6 parts):** One study summary. Identify the method, state an operational definition, describe what a statistic shows, identify an ethical guideline and how it was applied, explain generalizability with evidence from the study, and explain how a finding supports or refutes the hypothesis.
- **For developmental studies:** Say **longitudinal** or **cross-sectional**, and pair it with the matching weakness (attrition or cohort effects). Use sample details from the summary for generalizability.
- **Aging stereotypes:** If a question presents negative assumptions about aging, the correct answer usually challenges them with research evidence (crystallized intelligence, wide individual variation).
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
            question: 'Using the practice study in Scenario 3, which response best explains the extent to which its findings generalize?',
            options: [
              'Fully, because 300 students is a large sample for a study of teenagers',
              'Fully, because the same students were followed for four full years',
              'Not at all, because the study did not randomly assign teens to peer groups',
              'Limited, because all students came from one city and many dropped out'
            ],
            correctAnswer: 3,
            explanation: 'Generalizability depends on who was studied. All students came from three schools in one city, and 22% left before the end, so the results may not apply to other teens. Random assignment concerns cause, not generalizability.'
          },
          {
            question: 'A researcher claims that adolescent risk-taking behavior is primarily caused by poor parenting. A developmental psychologist would most likely respond by noting that:',
            options: [
              'Research shows parenting style is the single strongest predictor of adolescent risk-taking',
              'Risk-taking is better explained by a limbic system that matures before the prefrontal cortex',
              'Risk-taking is better explained by low self-esteem that peaks in the early teen years',
              'Risk-taking is better explained by delayed formal operational thinking in most teens'
            ],
            correctAnswer: 1,
            explanation: 'The limbic system, which drives reward-seeking, matures earlier than the prefrontal cortex, which manages impulse control and planning. This mismatch, not parenting alone, is the main explanation for adolescent risk-taking.'
          }
        ]
      }
    }
  ]
}
