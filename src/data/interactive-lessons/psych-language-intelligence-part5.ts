export const psychLanguagePart5Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 5 of 7 — Intelligence Controversies**

Few topics in psychology generate more debate than the nature of intelligence. Is it genetic? Environmental? Can tests be fair across cultures? These controversies are heavily tested on the AP exam — and you need to understand the nuance, not just the headlines.

| Controversy | Key Question | Current Consensus |
|-------------|-------------|-------------------|
| **Nature vs. Nurture** | Is intelligence inherited or learned? | Both matter — heritability ≈ .50–.80 in adults |
| **Flynn Effect** | Why do IQ scores keep rising generation over generation? | Better nutrition, education, test familiarity |
| **Stereotype Threat** | Can awareness of stereotypes lower test performance? | Yes — Steele & Aronson (1995) demonstrated this |
| **Cultural Bias** | Do IQ tests favor certain cultural groups? | Some items show bias; "culture-fair" tests attempt to fix this |
| **Growth vs. Fixed Mindset** | Does believing intelligence is fixed harm performance? | Yes — Dweck showed growth mindset improves outcomes |

### 🗣️ Real-World Example

In Steele & Aronson's (1995) landmark study, Black college students performed worse on a difficult test when told it measured "intellectual ability" (activating stereotype threat) compared to when told it was a "lab exercise." Same test, same students — the only difference was the framing. This showed that stereotypes can become self-fulfilling prophecies.

> **Why This Matters for the AP Exam:** The nature-nurture debate for intelligence appears on nearly every AP exam. The key: heritability is about GROUPS, not individuals. Even if heritability is 80%, it does NOT mean 80% of YOUR intelligence is genetic.
      `
    },
    {
      id: 'langu5-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the heritability of IQ is estimated at .75, this means:',
            options: [
              '75% of YOUR intelligence is determined by genes',
              '75% of the variation in IQ scores within a population is attributable to genetic differences',
              'Environment accounts for 75% of intelligence',
              'Identical twins will have IQs within 75 points of each other'
            ],
            correctAnswer: 1,
            explanation: 'Heritability describes how much of the VARIATION in a trait within a POPULATION is due to genetic differences. It does NOT tell you about any individual. Even with high heritability, environmental interventions (better nutrition, education) can still raise IQ scores — as the Flynn effect proves.'
          },
          {
            question: 'The Flynn effect refers to the observation that:',
            options: [
              'IQ scores have been declining in recent decades',
              'IQ scores have been rising approximately 3 points per decade across generations',
              'Identical twins have increasingly similar IQ scores',
              'Cultural bias in IQ tests has been eliminated'
            ],
            correctAnswer: 1,
            explanation: 'James Flynn documented that IQ scores have risen about 3 points per decade across 30+ countries throughout the 20th century. This CANNOT be genetic (genes don\'t change that fast) — it must be environmental (better nutrition, education, familiarity with testing, more cognitively stimulating environments).'
          }
        ]
      }
    },
    {
      id: 'langu5-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: The Nature-Nurture Evidence

**Evidence for Genetic Influence (Nature)**

| Study Type | Finding | What It Shows |
|-----------|---------|---------------|
| **Identical twins raised together** | IQ correlation ≈ .86 | Shared genes + shared environment |
| **Identical twins raised apart** | IQ correlation ≈ .72 | Genes alone produce high similarity |
| **Fraternal twins raised together** | IQ correlation ≈ .60 | Shared environment + 50% shared genes |
| **Adopted siblings** | IQ correlation ≈ .00 by adulthood | Shared environment alone has diminishing effect |

Key finding: As people age, the genetic influence on IQ INCREASES and the environmental influence DECREASES. Adopted children's IQs correlate more with biological parents by adulthood.

**Evidence for Environmental Influence (Nurture)**

| Factor | Effect on IQ | Research |
|--------|-------------|----------|
| **Nutrition** | Malnutrition lowers IQ by 10–15 points | Studies from developing nations |
| **Education** | Each year of school adds ~1–5 IQ points | Summer learning loss studies |
| **Enriched environments** | Early intervention programs raise IQ | Head Start, Perry Preschool study |
| **Lead exposure** | Lowers IQ significantly | Environmental toxin research |
| **Flynn Effect** | IQ rises ~3 points/decade | Cannot be genetic — too fast for evolution |

### Stereotype Threat vs. Self-Fulfilling Prophecy

| Concept | Definition | Mechanism |
|---------|-----------|-----------|
| **Stereotype threat** | Fear of confirming a negative stereotype impairs performance | Anxiety → working memory overload → worse performance |
| **Self-fulfilling prophecy** | Expectations cause the expected behavior | Teacher expects less → teaches less → student learns less |

**Carol Dweck's Mindset Research**: Students who believe intelligence is FIXED ("I'm just not a math person") give up when challenged. Students with a GROWTH mindset ("I can improve with effort") persist and perform better over time. Praising effort > praising intelligence.
      `
    },
    {
      id: 'langu5-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who demonstrated stereotype threat in a 1995 study?', answer: 'Steele and Aronson' },
          { label: 'IQ scores rising ~3 points per decade across generations is called the ___ effect', answer: 'Flynn' },
          { label: 'Who proposed the concepts of fixed mindset vs. growth mindset?', answer: 'Dweck' }
        ]
      }
    },
    {
      id: 'langu5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Controversy** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Black students score lower when told test measures "ability" vs. "lab exercise"', options: ['Flynn effect', 'Stereotype threat', 'Cultural bias', 'Heritability'] },
          { label: 'IQ scores have risen 3 points per decade worldwide', options: ['Flynn effect', 'Stereotype threat', 'Growth mindset', 'Heritability'] },
          { label: 'Identical twins reared apart still have similar IQs (r ≈ .72)', options: ['Flynn effect', 'Stereotype threat', 'Cultural bias', 'Genetic heritability'] }
        ],
        correctAnswers: ['Stereotype threat', 'Flynn effect', 'Genetic heritability'],
        hint1: 'Being told a test measures ability activates fear of confirming stereotypes.',
        hint2: 'Rising scores over generations = Flynn effect.',
        hint3: 'Twins reared apart sharing similar IQs shows genetic influence.',
        explanation: 'Steele & Aronson\'s study demonstrated stereotype threat — framing affects performance. Rising IQ scores across generations = Flynn effect. Twin studies showing similarity despite different environments = genetic heritability.'
      }
    },
    {
      id: 'langu5-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Controversy Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| High heritability = genes determine YOUR IQ | Heritability applies to populations, not individuals | Even 80% heritability leaves room for environmental impact |
| Flynn effect is genetic | Genes cannot change fast enough across 1–2 generations | Environmental factors (nutrition, education) drive it |
| Stereotype threat = low ability | It affects HIGH-ability members of stereotyped groups most | The anxiety, not low ability, impairs performance |
| Group IQ differences = genetic | Within-group heritability ≠ between-group differences | Between-group differences can be entirely environmental |

**Critical Distinction: Within-Group vs. Between-Group Heritability**

Imagine planting seeds from the same batch in rich soil vs. poor soil. Within EACH pot, height differences are genetic (same soil, different genes). But the BETWEEN-pot difference is entirely environmental (different soil). The same logic applies to IQ group differences — within-group heritability tells us NOTHING about between-group causes.

> **AP Tip:** If a free-response question asks about "the role of genetics AND environment in intelligence," you MUST discuss BOTH. Use twin studies for genetics and Flynn effect/intervention programs for environment. Conclude that it's an interaction, not either/or.
      `
    },
    {
      id: 'langu5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher finds that children raised in enriched foster homes have IQ scores 15 points higher than their biological siblings raised in deprived institutions, even though identical twins in the study have correlated IQs. What conclusion is best supported?',
            options: [
              'Intelligence is entirely genetic — twin correlations prove this',
              'Intelligence is entirely environmental — foster home results prove this',
              'Both genes and environment contribute to intelligence',
              'The study is invalid because it has conflicting results'
            ],
            correctAnswer: 2,
            explanation: 'The twin correlations show genetic influence, while the foster home vs. institution difference shows environmental influence. Both are present simultaneously — genes set a RANGE of potential, and environment determines where within that range a person falls. This is the interactionist conclusion the AP exam expects.'
          },
          {
            question: 'A teacher tells a student, "You\'re so smart — you don\'t even have to try!" According to Dweck\'s research, what is the most likely effect on the student?',
            options: [
              'The student will be motivated to work harder to maintain the "smart" label',
              'The student may avoid challenges to protect the "smart" identity (fixed mindset)',
              'The student will develop a growth mindset from the positive reinforcement',
              'The praise will have no effect on the student\'s behavior'
            ],
            correctAnswer: 1,
            explanation: 'Dweck\'s research shows that praising intelligence ("You\'re so smart") fosters a FIXED mindset — students begin to see intelligence as a trait to protect rather than a skill to develop. They avoid challenges because failure would threaten their "smart" identity. Praising EFFORT ("You worked so hard on that!") fosters a growth mindset instead.'
          }
        ]
      }
    }
  ]
}
