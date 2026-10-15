export const psychPrenatalPart7Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 7 of 7 — AP Practice and Synthesis Review**

This final part puts the topic to work in the two AP free-response formats, then ties Parts 1 to 6 together.

> 🔑 **Key Concept:** The AP Psychology exam has two free-response questions, each worth 7 points. The **Article Analysis Question (AAQ)** has 6 parts about one study. The **Evidence-Based Question (EBQ)** has 3 parts: you make a claim and support it with evidence from different sources, explaining each piece of evidence with a psychological concept.

## AAQ Practice: A Longitudinal Attachment Study

**Practice study summary (hypothetical, written for this lesson)**

*Participants:* 120 infants (61 girls, 59 boys) from middle-income families in two cities in the United States were recruited through pediatric clinics.

*Method:* At 12 months, each infant was observed with a parent in the Strange Situation and classified as securely or insecurely attached. Four years later, at age 5, each child's preschool teacher rated the child's social competence with peers on a scale from 1 (very low) to 10 (very high). Teachers did not know the children's attachment classifications. Of the original 120 children, 104 completed the age-5 assessment.

*Ethics:* Parents gave informed consent for their infants and could withdraw at any time. Children's names were replaced with ID numbers, and all records were kept confidential.

*Results:* Securely attached children (n = 66) had a mean social competence rating of 7.4 (SD = 1.2). Insecurely attached children (n = 38) had a mean of 5.9 (SD = 1.6). The difference was statistically significant (p < .05).

*Researchers' claim:* Secure attachment in infancy predicts more positive peer relationships at age 5.

### Walking Through the Six AAQ Tasks

| AAQ task | Strong response for this study |
|---|---|
| **Identify the research method** | A correlational (non-experimental) study using a longitudinal design. Attachment was measured, not manipulated, and the same children were followed over time |
| **State the operational definition of a variable** | Social competence was operationally defined as the teacher's rating on a 1 to 10 scale of the child's competence with peers |
| **Describe what a statistic shows** | Securely attached children averaged 1.5 points higher in teacher-rated social competence than insecurely attached children, and the difference was unlikely to be due to chance |
| **Identify an ethical guideline and how it was applied** | Informed consent: parents agreed to their infants' participation and could withdraw at any time. (Confidentiality, through ID numbers, would also work) |
| **Explain generalizability** | Limited: all families were middle-income and from two U.S. cities, and attachment distributions vary by culture, so results may not extend to other incomes or cultures. Attrition (16 children lost) could also bias the sample |
| **Explain how a finding supports or refutes the claim** | Supports it: the secure group's higher mean rating at age 5 shows that attachment at 12 months predicts later peer competence. Because the study is correlational, it shows prediction, not that attachment caused the difference |

Notice that the claim says **predicts**, which a correlational study *can* support. If the claim had said **causes**, your answer would need to explain why this design cannot establish causation.
      `
    },
    {
      id: 'prenatal-childhood-development-p7-s2-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Check — Using the Practice Study Above** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes that this study is an experiment because the researchers compared two groups. Why is that answer incorrect?',
            options: [
              'Attachment was measured rather than assigned to the infants',
              'The study lasted four years, and experiments must finish within a day',
              'Teachers rated the children, and experiments cannot use rating scales',
              'Only 104 children finished, and experiments need at least 200 people'
            ],
            correctAnswer: 0,
            explanation: 'An experiment requires the researcher to manipulate an independent variable and randomly assign participants, and infants cannot be assigned to an attachment style. Comparing groups alone does not make a study an experiment.'
          },
          {
            question: 'Why did the researchers keep teachers unaware of each child\'s attachment classification?',
            options: [
              'To guarantee that parents had given informed consent',
              'To prevent expectations from biasing the ratings',
              'To make the sample represent more cultures and incomes',
              'To ensure that every infant was securely attached'
            ],
            correctAnswer: 1,
            explanation: 'Teachers who knew a child\'s classification might rate that child in line with their expectations, so keeping them unaware reduces bias in the measured variable. Blinding does not affect consent, sample diversity or attachment itself.'
          },
          {
            question: 'Which change would most improve the generalizability of the findings?',
            options: [
              'Recruiting families from varied incomes and cultures',
              'Rating social competence on a scale from 1 to 100',
              'Telling the teachers each child\'s attachment style',
              'Testing the same children again at 13 months old'
            ],
            correctAnswer: 0,
            explanation: 'Generalizability depends on how well the sample represents the population, so including families from different incomes and cultures helps most. The other changes affect measurement or bias, not who the results apply to.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p7-s3-ebq',
      type: 'text' as const,
      content: `
## EBQ Practice: Does Early Experience Have Lasting Effects?

**Prompt:** Develop and justify an argument about whether experiences in infancy and early childhood have lasting effects on development.

**Source 1 (practice summary).** Researchers followed children who spent their first months or years in severely understaffed orphanages before adoption into supportive families. Children adopted before 6 months of age scored, on average, close to non-institutionalized children on cognitive tests at age 11. Children adopted after 6 months scored lower on average, and the gap remained at age 11.

**Source 2 (practice summary).** A survey of 8,000 adults asked how many types of adverse childhood experiences they had had. The percentage reporting a diagnosed depressive disorder rose with each additional ACE: 8% for zero ACEs, 15% for one or two, and 28% for four or more.

**Source 3 (practice summary).** A longitudinal study rated toddlers' shyness at age 2 and again at age 10. Shyness at the two ages was positively but only moderately correlated (r = +.35), and many very shy toddlers were rated as outgoing at age 10.

### Building the Response

**Part A — Claim.** "Early experiences can have lasting effects on development, especially when they occur during sensitive periods, though they do not fix a child's outcome."

**Part B — Evidence and explanation (Source 1).** Children adopted after 6 months still showed cognitive deficits at age 11, while those adopted earlier caught up. This supports the claim because it fits the concept of a **sensitive period**: deprivation during an early window had effects that later enrichment did not fully reverse.

**Part C — Evidence and explanation (Source 2).** Depression rates rose from 8% with no ACEs to 28% with four or more. This supports the claim because it shows a dose-response pattern for **adverse childhood experiences**: more early adversity was associated with higher adult risk, so childhood experience predicts outcomes decades later.

**Using the third source wisely.** Source 3 complicates the claim by showing **change** as well as **stability**. Mentioning it can strengthen the "do not fix a child's outcome" part of the claim, but each part of the EBQ must use evidence from a *different* source and must explain it with a psychological concept, not simply restate it.

> 🔑 **AP Connection:** EBQ points come from (1) a defensible claim, (2) specific, accurate evidence from a named source, and (3) an explanation that links the evidence to the claim through a course concept. A quote alone earns nothing without the concept-based explanation.
      `
    },
    {
      id: 'prenatal-childhood-development-p7-s4-ebq-dropdown',
      type: 'dropdown-select' as const,
      content: `
**EBQ Reasoning — Match Evidence to Concept** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Later-adopted children remaining behind at age 11 is best explained with the concept of a _____.',
            options: ['sensitive period', 'cohort effect', 'conservation task', 'parallel play stage']
          },
          {
            label: 'The correlation of +.35 between shyness at ages 2 and 10 is best used to discuss the theme of _____.',
            options: ['nature and nurture', 'stability and change', 'continuity and discontinuity', 'assimilation and accommodation']
          },
          {
            label: 'Because Source 2 surveyed adults about their past, its main limitation is that ACE reports rely on _____.',
            options: ['random assignment', 'imprinting windows', 'retrospective self-report', 'teacher observations']
          }
        ],
        correctAnswers: ['sensitive period', 'stability and change', 'retrospective self-report'],
        hint1: 'Timing of the deprivation mattered.',
        hint2: 'A moderate correlation means some children stayed the same and many changed.',
        hint3: 'Adults had to remember events from decades earlier.',
        explanation: 'Timing effects in Source 1 illustrate a sensitive period. A moderate positive correlation over time speaks to stability and change. Asking adults to recall childhood events relies on retrospective self-report, which can be distorted by memory.'
      }
    },
    {
      id: 'prenatal-childhood-development-p7-s5-synthesis',
      type: 'text' as const,
      content: `
## Synthesis: The Whole Topic on One Page

| Part | Core ideas | Best evidence or example | Theme it illustrates best |
|---|---|---|---|
| 1. Prenatal influences | Teratogens, maternal illness, genetic mutations, hormones, environment; timing and dose | Alcohol and FASD; rubella; PKU and diet | Nature and nurture interact before birth |
| 2. Infant physical development | Reflexes such as rooting; gross and fine motor skills; maturation | Visual cliff; cradleboard walking | Nature (maturation) with experience at the margins |
| 3. Critical periods and methods | Critical vs. sensitive periods; imprinting; cross-sectional vs. longitudinal | Lorenz's goslings; kitten vision; cohort effects | Timing; how designs answer each theme |
| 4. Piaget | Schemas, assimilation, accommodation; four stages | Conservation tasks; searching for hidden objects | Discontinuity (stages) built from continuous processes |
| 5. Vygotsky and context | ZPD, scaffolding, theory of mind, parallel and pretend play, ecological systems | Sally-Anne task; school board as exosystem | Nurture: development in a social and cultural setting |
| 6. Social-emotional growth | Attachment styles, separation anxiety, temperament, parenting styles, Erikson's first four stages, ACEs | Harlow; Strange Situation; ACE dose-response | Stability and change; culture shapes outcomes |

### Cross-Topic Links to Remember
- **Unit 1 (biology):** maturation depends on myelination and synaptic pruning; temperament is partly heritable.
- **Research methods:** most developmental questions cannot be answered by experiments because age, attachment and prenatal exposures cannot be assigned. Expect correlational and longitudinal designs.
- **Unit 3 (learning):** Vygotsky's scaffolding and modeling connect to observational learning.
- **Unit 4 (social and personality):** temperament foreshadows trait theories of personality; attachment styles reappear in adult relationships.
- **Unit 5 (health):** ACEs predict later physical and mental health risk.

### Final Checklist
- Can you name the type of prenatal influence in a scenario, without using stage names?
- Can you tell a critical period from a sensitive period and explain imprinting?
- Can you pick cross-sectional or longitudinal and name the matching weakness?
- Can you identify a Piagetian stage from what a child can and cannot do?
- Can you spot scaffolding, the ZPD and each ecological system?
- Can you classify attachment from reunion behavior and a parenting style from demands plus warmth?
      `
    },
    {
      id: 'prenatal-childhood-development-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Integrated Review** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher compares 3-, 5- and 7-year-olds tested on the same day and finds that only the older children pass false-belief tasks. Which statement best evaluates the study?',
            options: [
              'It is longitudinal, so it shows how each child changed',
              'It is cross-sectional, so it shows age differences quickly',
              'It is an experiment, so age caused the improvement',
              'It is a case study, so it cannot compare age groups'
            ],
            correctAnswer: 1,
            explanation: 'Testing different age groups at one time is a cross-sectional design, which efficiently shows age differences but cannot track individual change. Age cannot be manipulated, so the study is not an experiment.'
          },
          {
            question: 'A toddler with a difficult temperament has a parent who stays calm, responds quickly to distress and adjusts routines to the child. Which outcome is most consistent with research?',
            options: [
              'Disorganized attachment because temperament controls the outcome',
              'Secure attachment because the caregiving is matched to her own needs',
              'Avoidant attachment because difficult infants reject comfort',
              'No attachment because difficult infants do not form bonds'
            ],
            correctAnswer: 1,
            explanation: 'Sensitive, responsive caregiving that fits the child\'s temperament predicts secure attachment, so temperament influences but does not decide the outcome. The other options treat temperament as destiny.'
          },
          {
            question: 'Which pair correctly matches a researcher to a central idea from this topic?',
            options: [
              'Lorenz with scaffolding in the zone of proximal development',
              'Harlow with contact comfort as the basis of attachment',
              'Piaget with imprinting on the first moving object',
              'Ainsworth with the three-mountains egocentrism task'
            ],
            correctAnswer: 1,
            explanation: 'Harlow\'s cloth-mother studies showed that contact comfort, not food, underlies attachment. Scaffolding belongs to Vygotsky, imprinting to Lorenz, and the three-mountains task to Piaget.'
          }
        ]
      }
    }
  ]
}
