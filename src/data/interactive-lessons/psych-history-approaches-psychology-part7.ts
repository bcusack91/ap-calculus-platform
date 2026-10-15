export const psychHistoryApproachesPart7Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo7-synthesis',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 7 of 7 — Synthesis & AP Review**

> 🔑 **Key Concept:** This topic gives you the toolkit for every other unit: why psychology needs science, the perspectives used to explain behavior, the methods and statistics used to test explanations, and the ethics that protect participants.

### Concept Map

| Part | Big idea | Must-know terms |
|------|---------|-----------------|
| 1. Psychology as a Science | Intuition is biased, so claims must be tested | Hindsight bias, overconfidence, confirmation bias, falsifiable hypothesis, peer review, replication |
| 2. Perspectives | Seven lenses explain the same behavior differently | Biological, behavioral, cognitive, evolutionary, humanistic, psychodynamic, sociocultural, biopsychosocial |
| 3. Research Methods | Only experiments show causation | IV, DV, operational definition, random assignment, confound, random vs. convenience sampling, meta-analysis |
| 4. Statistics | Describe data, then judge whether results are real and how big | Mean, median, mode, SD, percentile rank, skew, r, significance, effect size, regression toward the mean |
| 5. Ethics | Protect participants at every stage | IRB, informed consent and assent, confidentiality, anonymity, deception, confederates, debriefing |
| 6. The AAQ | Six tasks applied to one study | Method, operational definition, statistic, ethics, generalizability, support or refute |
      `
    },
    {
      id: 'histo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair correctly matches a perspective with the cause of behavior it emphasizes?',
            options: [
              'Psychodynamic, with rewards and punishments from the environment',
              'Behavioral, with unconscious conflicts rooted in childhood',
              'Humanistic, with personal growth and fulfilling one\'s potential',
              'Cognitive, with traits shaped by natural selection over time'
            ],
            correctAnswer: 2,
            explanation: 'The humanistic perspective emphasizes free will and personal growth. Rewards and punishments belong to the behavioral perspective, unconscious conflicts to the psychodynamic, and natural selection to the evolutionary.'
          },
          {
            question: 'A researcher finds r = −.62 between hours of video gaming and hours of sleep among teens. Which conclusion is justified?',
            options: [
              'Gaming causes teens to lose a large amount of sleep',
              'More gaming is moderately linked with less sleep',
              'The relationship is weak because the sign is negative',
              'Sleep loss causes teens to spend more time gaming'
            ],
            correctAnswer: 1,
            explanation: 'A coefficient of −.62 shows a moderately strong negative relationship: as gaming rises, sleep tends to fall. Correlation cannot show which variable causes the other, and the minus sign gives direction, not strength.'
          }
        ]
      }
    },
    {
      id: 'histo7-ebq',
      type: 'text' as const,
      content: `
## ✍️ EBQ Practice

The Evidence-Based Question gives three short sources and asks for an argument (7 points, 3 parts): **(A)** a specific, defensible claim; **(B)** evidence from one source plus an explanation that uses a psychological concept; **(C)** evidence from a DIFFERENT source plus an explanation that uses a DIFFERENT concept. Cite as "(Source 1)."

**Prompt:** Develop an argument about whether high schools should require students to keep phones out of reach during class.

*The three sources below are invented for this lesson; they are not real published studies.*

**Source 1 (correlational study):** Among 1,200 students from 15 high schools, the number of times students checked their phones during class correlated r = −.41 with their end-of-term grades.

**Source 2 (experiment):** 160 high school students were randomly assigned to leave their phones in a locker or keep them face-down on their desks during a 30-minute reading test. The locker group answered significantly more comprehension questions correctly (effect size d = 0.5).

**Source 3 (structured interviews):** In interviews with 40 students at one school, many said they felt anxious when separated from their phones, and several said the anxiety made it harder to focus during the first week of a phone-free policy.

### Model response

**(A) Claim:** "High schools should require students to keep phones out of reach during class, because having a phone nearby reduces learning."

**(B) Evidence and explanation:** "Students randomly assigned to leave their phones in a locker answered more comprehension questions correctly than students with phones on their desks, a medium effect (d = 0.5) (Source 2). Because this was an **experiment with random assignment**, the phone's location likely caused the difference; a nearby phone draws on limited **attention**, leaving less for the reading."

**(C) Evidence and explanation:** "Students who checked their phones more often during class tended to earn lower grades, r = −.41 (Source 1). This **negative correlation** supports the claim, although by itself it cannot rule out a **third variable** such as low motivation. Together with the experiment, it suggests that phone use in class is linked to poorer learning."

⚠️ Source 3 could support a qualified claim: a phone policy may cause short-term **anxiety**, so schools might phase it in. A defensible claim can acknowledge limits.
      `
    },
    {
      id: 'histo7-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What one-word term describes a hypothesis that some possible result could prove wrong?

      2) Which perspective focuses on unconscious thoughts and conflicts rooted in childhood?

      3) What does the abbreviation "DV" stand for in an experiment?

      Use the exact term from this topic.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['falsifiable', 'psychodynamic', 'dependent variable'],
        hint1: 'Starts with: F — it can be shown false',
        hint2: 'Starts with: P — the unconscious mind',
        hint3: 'Two words: ___ variable — the outcome that is measured',
        explanation: 'Expected answers: falsifiable (testable because it could fail), psychodynamic (unconscious conflicts), and dependent variable (the measured outcome).'
      }
    },
    {
      id: 'histo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Statistically combining the results of many studies on one question is a _____.',
            options: ['case study', 'meta-analysis', 'naturalistic observation', 'replication']
          },
          {
            label: 'An effect size of 0.2 is usually interpreted as _____.',
            options: ['small', 'medium', 'large', 'significant']
          },
          {
            label: 'p < 0.05 means the results are statistically _____.',
            options: ['insignificant', 'significant', 'invalid', 'unreliable']
          }
        ],
        correctAnswers: ['meta-analysis', 'small', 'significant'],
        hint1: 'A study of studies.',
        hint2: '0.2 and below.',
        hint3: 'The common cutoff for results unlikely to be due to chance.',
        explanation: 'A meta-analysis combines many studies. An effect size of 0.2 is small. Results below the 0.05 cutoff are called statistically significant.'
      }
    },
    {
      id: 'histo7-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- The biopsychosocial approach does NOT favor one perspective; it combines biological, psychological, and social-cultural factors.
- The behavioral perspective does NOT deny that thoughts exist; it explains behavior through observable learning and consequences.
- A strong correlation (r = −.85) does NOT imply causation. Only experiments with random assignment can establish cause and effect.
- Statistical significance is NOT the same as a large effect. Check the effect size.
- A single study does NOT settle a question. Peer review and replication do.

### AP Strategy Moves
- For "which perspective would explain..." questions, find the key word: brain, consequences, thoughts, ancestors, growth, unconscious, or culture.
- For correlation coefficients, the sign gives direction and the absolute value gives strength.
- On the **AAQ**, use the study's own words and numbers for all six tasks.
- On the **EBQ**, make a specific claim, cite each source by number, and explain each piece of evidence with a DIFFERENT psychological concept.
      `
    },
    {
      id: 'histo7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A teenager develops anxiety after a car accident. How would a psychodynamic psychologist and a behavioral psychologist explain this differently?',
            options: [
              'Psychodynamic: repressed childhood fears resurfaced; behavioral: cars became conditioned fear cues',
              'Psychodynamic: a neurotransmitter imbalance; behavioral: the teen consciously chose to be anxious',
              'Psychodynamic: cars became conditioned fear cues; behavioral: an unconscious conflict resurfaced',
              'Psychodynamic and behavioral: both trace the anxiety to the same learned association with cars'
            ],
            correctAnswer: 0,
            explanation: 'The psychodynamic perspective looks to unconscious processes and past experiences. The behavioral perspective looks to learning: the car became a conditioned stimulus associated with fear.'
          },
          {
            question: 'For the EBQ above, which sentence would earn credit for using evidence from a source?',
            options: [
              'Most teachers would agree that phones are distracting (Source 1)',
              'Phones in a locker led to better reading scores than phones on desks (Source 2)',
              'Source 3 is about phones, so it supports my claim about the policy',
              'Research generally shows that technology harms learning in schools'
            ],
            correctAnswer: 1,
            explanation: 'Credit for evidence requires a specific finding attributed to a source. Opinions, general statements, and naming a source without its finding do not count.'
          },
          {
            question: 'In the Source 2 experiment, which change would most improve the generalizability of the findings?',
            options: [
              'Testing students from many schools chosen by random sampling',
              'Assigning students to conditions based on their own preference',
              'Replacing the reading test with students\' own ratings of focus',
              'Dropping the debriefing so students do not learn the hypothesis'
            ],
            correctAnswer: 0,
            explanation: 'Generalizability depends on how representative the sample is, so randomly sampling students from many schools would let the results apply more widely. Self-selection would also introduce a confound.'
          }
        ]
      }
    }
  ]
}
