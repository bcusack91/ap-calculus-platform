export const psychPrenatalPart3Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 3 of 7 — Critical Periods, Imprinting, and How Development Is Studied**

Some experiences matter far more at one age than at another. This part covers windows of heightened sensitivity, then steps back to the big themes and research designs that developmental psychologists use for every question in this unit.

> 🔑 **Key Concept:** A **critical period** is a limited window when a specific experience is *required* for normal development. A **sensitive period** is a window when an experience has its *strongest* effect, though some learning is still possible later.

### Critical vs. Sensitive Periods

| Feature | Critical period | Sensitive period |
|---|---|---|
| Window | Sharp start and end | Gradual opening and closing |
| If the experience is missed | Lasting or permanent deficit | Later learning is possible but harder and often less complete |
| Classic example | Imprinting in ducks and geese; binocular vision in kittens | Human language, especially grammar and native-like pronunciation |

### Evidence From Vision

In classic studies, kittens that had one eye kept closed during the first months of life were left functionally blind in that eye, even though the eye itself was healthy. The visual cortex had wired itself to the open eye. The same closure in an adult cat had no lasting effect. In humans, this is why doctors remove infant cataracts early: the visual system needs clear input during its sensitive period.

### Evidence From Language

Children exposed to a language early typically master its grammar and accent. People who learn a second language after childhood usually keep an accent and make more grammar errors, even after many years. Rare cases of children isolated from language until late childhood show severe, lasting grammar deficits. (The Language and Intelligence topic covers language milestones and these cases in detail.) Because late learners still gain a great deal, psychologists usually describe language as having a **sensitive** period rather than a strict critical period.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s2-imprinting',
      type: 'text' as const,
      content: `
## Imprinting: Lorenz and the Goslings

Konrad Lorenz, an Austrian zoologist, studied greylag geese. He divided a clutch of eggs: some hatched with their mother, and some hatched in an incubator where the first moving object the goslings saw was Lorenz.

| Group | First moving object seen | Behavior afterward |
|---|---|---|
| Hatched with mother | Mother goose | Followed the mother |
| Hatched in incubator | Lorenz | Followed Lorenz everywhere, even when later placed near their mother |

**Imprinting** is the process by which certain animals form a strong attachment to the first moving object they encounter during a brief period after birth or hatching. Key features:
- It happens only within a short window shortly after hatching, a true **critical period**.
- It is very hard to reverse once formed.
- It works on unusual objects: researchers have imprinted birds on boxes and balls.
- It aids **survival**: following the mother keeps young birds close to food and protection.

**Humans do not imprint.** Human infants form attachments gradually over many months through caregiving and comfort (Part 6). Avoid writing that a baby "imprinted" on a parent.

> 🔑 **AP Connection:** The CED states that some non-human animals imprint on the first object they encounter as a means of survival. Expect scenario questions where a duckling follows a farmer, a dog or a toy.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Critical Periods and Imprinting** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ducklings hatched in a barn spend their first hours near a farmer\'s boots and afterward follow the farmer around the yard. What process does this show?',
            options: [
              'Imprinting during a critical period',
              'Secure attachment built over months',
              'Operant shaping with food rewards',
              'Habituation to a repeated stimulus'
            ],
            correctAnswer: 0,
            explanation: 'The ducklings formed a fast, lasting bond with the first moving object they encountered shortly after hatching, which is imprinting. Attachment in humans forms gradually, and no rewards or repeated-stimulus decline are described.'
          },
          {
            question: 'An adult who moved to a new country at age 25 speaks the new language fluently but with a strong accent and occasional grammar errors. Which conclusion fits best?',
            options: [
              'Language has no sensitive period, so the errors reflect low effort',
              'Language has a sensitive period, so later learning is harder but possible',
              'Language has a strict critical period, so adults cannot learn a new one',
              'Language is learned by imprinting, so the first language blocks others'
            ],
            correctAnswer: 1,
            explanation: 'Late learners can become fluent, which rules out a strict critical period, but they rarely reach native-like accent and grammar, which fits a sensitive period. Humans do not imprint on languages.'
          },
          {
            question: 'Why do eye doctors recommend removing a dense cataract from an infant\'s eye as early as possible?',
            options: [
              'Cataracts in infants spread quickly to the other eye',
              'Vision needs clear input during a key window',
              'Infants recover from surgery faster than adults do',
              'Clear vision is necessary for newborn reflexes to fade'
            ],
            correctAnswer: 1,
            explanation: 'The visual cortex wires itself during an early window, so an eye that receives no clear input may never develop normal vision even after later surgery. The other options do not explain the urgency.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p3-s4-themes',
      type: 'text' as const,
      content: `
## Three Enduring Themes in Developmental Psychology

Developmental psychology studies both the **chronological order** of development and **thematic issues** that cut across the lifespan. The CED names three themes.

| Theme | The question | Evidence on one side | Evidence on the other |
|---|---|---|---|
| **Nature and nurture** | How much do genes vs. experience shape development? | Motor milestones follow maturation; imprinting windows are biological | PKU outcomes depend on diet; language depends on exposure |
| **Continuity and discontinuity** | Is development gradual and continuous, or a series of distinct stages? | Vocabulary and height grow steadily (continuous) | Piaget and Erikson describe qualitatively different stages (discontinuous) |
| **Stability and change** | Do early traits persist, or do people change? | Temperament shows some stability from infancy | Many shy toddlers become outgoing adults; adolescence brings big changes |

Most modern answers are "both". The useful skill is to identify **which side a piece of evidence supports** and explain why.

## Cross-Sectional vs. Longitudinal Designs

To study change with age, researchers choose between two designs.

| Feature | Cross-sectional design | Longitudinal design |
|---|---|---|
| Who is studied | Different people of different ages | The same people |
| When | All at one point in time | Repeatedly over months or years |
| Speed and cost | Fast and relatively cheap | Slow and expensive |
| Main weakness | **Cohort effects**: age groups grew up in different times, so differences may reflect generation rather than age | **Attrition**: participants drop out, and those who stay may differ from those who leave; practice effects from repeated testing |
| Best for | A quick snapshot of age differences | Tracking how individuals change, and whether early traits predict later ones |

### Worked Example: Choosing and Critiquing a Design

**Question:** Does early reading to children predict vocabulary at age 10?

**Step 1 — Pick a design.** Because the question links an early experience to a later outcome *in the same children*, a **longitudinal** design fits. Researchers record how often parents read to each 2-year-old, then test the same children's vocabulary at age 10.

**Step 2 — Identify a weakness.** Families who move or lose interest may drop out. If the families who stay read more and have more resources, the final sample is biased (**attrition**).

**Step 3 — Identify the method type.** Reading was measured, not assigned, so even a strong relationship is **correlational**. Parents who read more may differ in income or education.

**Step 4 — Contrast with a cross-sectional version.** Testing 2-, 6- and 10-year-olds at one time would be faster, but different children cannot show whether *early* reading predicts *later* vocabulary for the same child.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Design or Theme** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Researchers test the memory of 5-, 8- and 11-year-olds in the same week. This is a _____ design.',
            options: ['longitudinal', 'case study', 'cross-sectional', 'naturalistic']
          },
          {
            label: 'The same 200 children are assessed at ages 3, 7 and 12. The biggest threat is _____.',
            options: ['cohort effects', 'attrition', 'imprinting', 'placebo effects']
          },
          {
            label: 'A theorist argues that children think in qualitatively different ways at each age. This takes the _____ side of a developmental theme.',
            options: ['continuity', 'stability', 'nurture', 'discontinuity']
          }
        ],
        correctAnswers: ['cross-sectional', 'attrition', 'discontinuity'],
        hint1: 'Different children, one point in time.',
        hint2: 'In a long study, what happens to some participants over the years?',
        hint3: 'Stages are steps, not a smooth ramp.',
        explanation: 'Testing different age groups at once is cross-sectional. Following the same children for years risks attrition. Qualitatively different stages reflect the discontinuity side of the continuity-discontinuity theme.'
      }
    },
    {
      id: 'prenatal-childhood-development-p3-s6-data',
      type: 'text' as const,
      content: `
## Reading Developmental Data: Spotting a Cohort Effect

A practice cross-sectional study in 2024 gave the same computer-skills test to three age groups.

| Age group | Mean score (out of 50) |
|---|---|
| 10-year-olds | 41 |
| 40-year-olds | 33 |
| 70-year-olds | 22 |

**Tempting conclusion:** "Computer skill declines steadily with age."

**Better reasoning:** The 70-year-olds grew up before personal computers were common, while the 10-year-olds have used devices since infancy. The gap may reflect **when each group was born**, a cohort effect, rather than aging. A longitudinal study following the same people as they age would separate the two explanations.

> 🔑 **AP Connection:** When an AAQ or multiple-choice item shows age differences from a single testing session, ask whether generational experience could explain them. Name the design, then name the cohort effect as its limitation.
      `
    },
    {
      id: 'prenatal-childhood-development-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Methods and Themes** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher wants to know whether children rated as very shy at age 2 are still shy at age 12. Which design fits this question best?',
            options: [
              'Cross-sectional, because it compares several ages at once',
              'Longitudinal, because it tracks the same people over time',
              'Experimental, because shyness levels can be randomly assigned',
              'Case study, because only a few toddlers are extremely shy'
            ],
            correctAnswer: 1,
            explanation: 'Only following the same children over time can show whether an individual\'s early shyness persists, so the design is longitudinal; the question addresses the stability and change theme. Shyness cannot be randomly assigned, and comparing different children at one time cannot track individuals.'
          },
          {
            question: 'A 20-year longitudinal study ends with 45% of its original participants, and those who remained had higher incomes. What is the main problem?',
            options: [
              'Cohort effects make the age groups different',
              'The sample may be biased by attrition',
              'Random assignment was not used correctly',
              'Results reflect a critical period effect'
            ],
            correctAnswer: 1,
            explanation: 'When participants who leave differ systematically from those who stay, the remaining sample no longer represents the original group, which is attrition bias. A longitudinal study follows one cohort, so cohort effects between groups are not the issue.'
          }
        ]
      }
    }
  ]
}
