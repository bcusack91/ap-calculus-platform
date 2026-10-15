export const psychPersonalityPart7Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Personality Theories

**Part 7 of 7 — Synthesis Review: Four Perspectives Compared**

> 🔑 **Key Concept:** Each perspective on personality gives its own answer to two questions: **how is personality defined, and how is it assessed?** Exam questions often describe one behavior and ask which perspective an explanation or a method belongs to.

### The Big Comparison Table

| | Psychodynamic | Humanistic | Social-cognitive | Trait |
|--|---------------|------------|------------------|-------|
| **Personality is driven by…** | Unconscious processes | Unconditional regard and the self-actualizing tendency | Reciprocal determinism among behavior, personal factors, and environment | Enduring characteristics that lead to typical responses |
| **Key concepts** | Levels of awareness, ego, the eight defense mechanisms | Self-concept, congruence, conditions of worth, genuineness, acceptance, empathy | Self-concept, self-efficacy, self-esteem, observational learning | Big Five (openness, conscientiousness, extraversion, agreeableness, emotional stability), factor analysis |
| **View of human nature** | Shaped by hidden conflict | Basically good and growth-seeking | Active learners shaped by and shaping their settings | Described along dimensions, without a view of "good" or "bad" |
| **Assessment** | Projective tests (Rorschach, TAT) | Self-reports comparing actual and ideal self, interviews | Past behavior in similar situations, simulations, task-specific self-efficacy scales | Objectively scored personality inventories |
| **Main critique** | Hard to falsify; weak test reliability and validity | Concepts vague and hard to measure | May underplay emotion, unconscious motives, and stable traits | Describes more than it explains; self-report bias |
| **Parts** | 1, 2 | 3 | 4 | 5 |

### Worked Case: One Behavior, Four Explanations

**Scenario:** Keisha, a senior, keeps putting off her college application essays until two days before each deadline.

| Perspective | How it would explain Keisha's procrastination |
|-------------|----------------------------------------------|
| **Psychodynamic** | Fear of leaving home is kept out of awareness. Her ego protects itself with **rationalization**: "I write better under pressure." |
| **Humanistic** | She learned **conditions of worth** ("I'm only worthwhile if I get into a top school"). Writing an essay that might be judged threatens her self-concept, so she avoids it. |
| **Social-cognitive** | She has low **self-efficacy** for personal writing. Avoiding the essays means she never gets mastery experiences, and her friends, who also procrastinate, model the same behavior: **reciprocal determinism**. |
| **Trait** | She scores low in **conscientiousness** and low in **emotional stability**, a combination that predicts last-minute work across many tasks, not just essays. |

**What each would recommend:** psychodynamic, exploring the hidden fear; humanistic, an accepting relationship that removes conditions of worth; social-cognitive, small writing successes and a better-organized study group; trait, accepting the tendency and building structure, such as early deadlines, around it.
      `
    },
    {
      id: 'personality-theories-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Which Perspective?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A counselor claims that a man\'s rudeness toward coworkers comes from envy he cannot admit to himself and therefore sees in them instead. This explanation comes from which perspective?',
            options: [
              'The trait perspective',
              'The psychodynamic perspective',
              'The humanistic perspective',
              'The social-cognitive perspective'
            ],
            correctAnswer: 1,
            explanation: 'Unadmitted envy seen in others is projection, a defense mechanism, which belongs to the psychodynamic perspective. Trait theory would describe a low agreeableness score, and the other two perspectives do not rely on unconscious defenses.'
          },
          {
            question: 'A researcher predicts how well applicants will handle angry customers by watching them deal with a staged complaint, reasoning that behavior in a similar situation is the best predictor. This assessment reflects which perspective?',
            options: [
              'Social-cognitive theory, which looks at how people act in realistic settings',
              'Humanistic theory, which asks people to describe how they see themselves',
              'Psychodynamic theory, which uses ambiguous material to reveal hidden needs',
              'Trait theory, which uses inventories built from correlated item responses'
            ],
            correctAnswer: 0,
            explanation: 'Assessing behavior in a realistic simulation of the target situation is the social-cognitive approach. Humanistic assessment relies on self-descriptions, psychodynamic assessment on projective tests, and trait assessment on inventories.'
          },
          {
            question: 'Which pair shows a correct match between a perspective and the motivating force it emphasizes?',
            options: [
              'Trait theory and the drive to resolve unconscious conflict between competing impulses',
              'Psychodynamic theory and the self-actualizing tendency that pushes people toward growth',
              'Humanistic theory and acceptance that does not hinge on meeting standards',
              'Social-cognitive theory and five broad dimensions found through factor analysis'
            ],
            correctAnswer: 2,
            explanation: 'The CED names unconditional regard and the self-actualizing tendency as the primary motivating factors in humanistic theory. Unconscious conflict belongs to psychodynamic theory, the self-actualizing tendency to humanistic theory, and factor-analyzed dimensions to trait theory.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p7-s3-connections',
      type: 'text' as const,
      content: `
## 🔗 Connections and Distinctions Across the Topic

### Terms That Students Mix Up

| These two… | …differ this way |
|------------|------------------|
| **Self-esteem (Part 4) vs. self-efficacy (Part 4)** | Overall sense of worth versus belief in capability at a specific task |
| **Congruence (Part 3) vs. self-esteem (Part 4)** | Match between self-concept and experience versus overall evaluation of worth |
| **Conscientiousness (Part 5) vs. self-efficacy (Part 4)** | An enduring trait measured by an inventory versus a task-specific belief that can change with mastery experiences |
| **Projection (Part 2) vs. projective test (Part 1)** | A defense mechanism versus an assessment method that relies on people projecting onto ambiguous stimuli |
| **Emotional stability (Part 5) vs. denial (Part 2)** | A trait dimension (calm versus anxious) versus a defense that refuses to accept a painful reality |
| **Reliability vs. validity (Parts 1 and 5)** | Consistency of a measure versus whether it measures what it claims |

### Topic-Wide Misconceptions

| Misconception | Reality |
|--------------|---------|
| Defense mechanisms are deliberate strategies people choose | They operate unconsciously; a chosen strategy is coping, and a planned excuse is a lie |
| Unconditional positive regard means approving of everything a person does | It means valuing the person while still being free to object to a behavior |
| Reciprocal determinism means the environment controls behavior | All three factors influence one another in every direction |
| The fifth Big Five trait should be called neuroticism on the exam | The CED's term is emotional stability; neuroticism names its low end |
| A trait score predicts what someone will do in any single moment | Traits predict behavior averaged across many situations |
| Personality inventories are free of bias because they are objectively scored | Scoring is objective, but self-report answers can still be distorted by social desirability |

### Science Practice Summary

| Design or measurement idea | Where it appears in personality research |
|----------------------------|------------------------------------------|
| **Case study** | Freud's conclusions about his patients |
| **Correlational study** | Trait scores and outcomes (GPA, on-time work, job performance) |
| **Experiment** | Training that raises self-efficacy, with random assignment to conditions |
| **Interrater reliability** | Agreement between clinicians scoring projective tests |
| **Test-retest reliability** | Inventory scores for the same people at two times |
| **Factor analysis** | Grouping correlated inventory items into Big Five traits |
      `
    },
    {
      id: 'personality-theories-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
**Integrated Recall** ✍️

Type the single term that fits each description.
      `,
      exercise: {
        questions: [
          {
            question: 'A woman who feels intense rivalry with her sister channels it into building a successful business that employs half her town. Psychodynamic theory calls this defense _____.',
            answer: 'sublimation',
            acceptableAnswers: ['sublimating', 'sublimate'],
            explanation: 'Turning an unacceptable impulse into a socially valued achievement is sublimation. Aiming it at a safer target would be displacement.'
          },
          {
            question: 'The CED\'s name for the Big Five trait on which calm, secure people score high and anxious, moody people score low is emotional _____.',
            answer: 'stability',
            acceptableAnswers: ['emotional stability'],
            explanation: 'Emotional stability is the CED\'s term. Many sources call the same dimension neuroticism, which names the low end.'
          },
          {
            question: 'In Bandura\'s theory, the belief that "I can successfully give this speech" is an example of self-_____.',
            answer: 'efficacy',
            acceptableAnswers: ['self-efficacy', 'efficacy belief'],
            explanation: 'A belief about capability at a specific task is self-efficacy, which, together with self-esteem, contributes to self-concept.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p7-s5-integrated',
      type: 'multiple-choice' as const,
      content: `
**Integrated Practice — Across the Perspectives** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Two psychologists study the same shy teenager. One finds that he scores low in extraversion on an inventory; the other notices that he speaks up confidently in the robotics club, where he feels capable. Which conclusion best combines the two findings?',
            options: [
              'The inventory is invalid, since a true introvert would never speak in a group',
              'His shyness is a defense mechanism that disappears once he has repressed it',
              'His trait is real, and the setting and his self-efficacy shape how it shows',
              'His behavior in the club proves that personality has no stable component'
            ],
            correctAnswer: 2,
            explanation: 'A trait describes a typical tendency across situations, while social-cognitive theory explains why a setting where he feels capable brings out different behavior, so both findings fit. Traits predict averages rather than every act, so one setting neither invalidates the inventory nor disproves stability.'
          },
          {
            question: 'Which research finding would most weaken the claim that projective tests are useful for assessing personality?',
            options: [
              'Trained scorers often disagree about what the same responses reveal',
              'Clients say that the inkblots and pictures seem unusual and vague to them',
              'Clinicians who use the tests report that they find the results interesting',
              'The tests take longer to give and score than most personality inventories'
            ],
            correctAnswer: 0,
            explanation: 'Disagreement between trained scorers shows low interrater reliability, and an unreliable measure cannot be valid, which directly undercuts usefulness. Ambiguity is intended by design, clinicians\' interest is not evidence, and testing time says nothing about accuracy.'
          },
          {
            question: 'A teacher praises every student\'s effort, lets students redo work after mistakes, and makes clear that her respect for them does not depend on grades. Her approach most closely applies which concept?',
            options: [
              'Reciprocal determinism, as each student\'s grades fully determine the classroom setting',
              'Sublimation, as students redirect frustration about grades into socially valued work',
              'Unconditional positive regard, as she values students whatever their marks',
              'Factor analysis, as she sorts students into groups based on how their scores cluster'
            ],
            correctAnswer: 2,
            explanation: 'Respect that does not depend on performance is unconditional positive regard, the humanistic condition Rogers said allows growth. The teacher is not describing an unconscious defense, a statistical procedure, or a one-way effect of grades on the setting.'
          }
        ]
      }
    }
  ]
}
