export const psychLanguagePart7Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 7 of 7 — Synthesis & AP Review**

> 🔑 **Key Concept:** Language and intelligence share one big idea: both are complex mental abilities that grow through an interaction of biology and experience, and both are measured in ways that can be done well or badly.

### Master Integration Table

| Concept | Core Idea | Common AP Trap |
|---------|-----------|----------------|
| Phoneme | Smallest unit of SOUND | Counting letters instead of sounds |
| Morpheme | Smallest unit of MEANING | Forgetting that prefixes and suffixes count |
| Semantics vs. syntax | Meaning vs. word order | Calling a meaningless but grammatical sentence a syntax error |
| Generative language | Finite units and rules yield endless new sentences | Confusing it with arbitrariness |
| Gestures | Pointing and other gestures come before words in all cultures | Treating gestures as unrelated to language |
| Stages | Cooing → babbling → one-word → telegraphic | Memorizing exact ages instead of order |
| Overgeneralization | "Goed," "foots": a rule applied too widely | Calling it a delay |
| Sensitive period | Language is learned most easily in early childhood | Saying adults cannot learn a language |
| g vs. multiple abilities | One general ability or several distinct ones | Thinking the debate is settled |
| IQ = MA ÷ CA × 100 | The original intelligence quotient | Dividing CA by MA |
| Standardization | Consistent procedures and environments | Confusing it with reliability |
| Reliability (test-retest, split-half) | Consistent results | Treating reliable as valid |
| Validity (construct, predictive) | Measures what it claims; predicts what it should | Forgetting reliability is required first |
| Achievement vs. aptitude | What you have learned vs. how you will perform | Judging by format instead of purpose |
| Flynn effect | Scores rose across generations for societal reasons | Calling it genetic |
| Within vs. between groups | More variation within groups than between them | Using a group average to judge a person |
| Stereotype threat / lift | Stereotypes can lower or raise scores | Mixing up whose group is stereotyped |
| Misuse of tests | Scores used to limit jobs, military ranks, schooling, and immigration | Treating scores as free of social context |
| Fixed vs. growth mindset | Beliefs about intelligence affect achievement | Equating mindset with self-esteem |
      `
    },
    {
      id: 'langu7-s2-review',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 3-year-old says "foots" and "goed," speaks in full sentences, and follows conversations easily. Which conclusion is best supported?',
            options: [
              'Normal rule learning shown through overgeneralization at age 3',
              'A language delay, since errors like "goed" signal phoneme confusion',
              'Imitation of parents\' errors, repeated each time the parents use them',
              'Semantic confusion, since the child misunderstands what the words mean'
            ],
            correctAnswer: 0,
            explanation: 'Applying the plural and past-tense rules to irregular words is overgeneralization, a sign that the child has learned the rules. Adults do not say "goed," so the errors are not imitation.'
          },
          {
            question: 'Which statement correctly applies heritability to a real-world situation?',
            options: [
              'Since the heritability of IQ is .75, 75% of Maria\'s own intelligence was set by her genes',
              'Since the heritability of IQ is .75, school programs cannot meaningfully raise children\'s IQ',
              'Since the heritability of IQ is .75, 75% of IQ variation within this population is genetic',
              'Since the heritability of IQ is .75, average IQ gaps between two groups must be 75% genetic'
            ],
            correctAnswer: 2,
            explanation: 'Heritability describes the share of variation within a population linked to genetic differences. It does not apply to an individual, does not limit environmental change, and says nothing about the causes of gaps between groups.'
          }
        ]
      }
    },
    {
      id: 'langu7-s3-connections',
      type: 'text' as const,
      content: `
### 📚 Cross-Unit Connections

| This Topic | Connects to... | How |
|-------------------|---------------|-----|
| Sensitive period for language | **Physical development (3.2)** | Critical and sensitive periods; imprinting in some animals |
| Overgeneralization | **Cognitive development (3.4)** | Children actively build rules, much as they build schemas |
| Crystallized vs. fluid intelligence | **Cognitive development (3.4)** | Different paths across adulthood support the multiple-abilities view |
| Twin and adoption studies | **Genetics and behavior (1.1)** | The same designs estimate genetic influence on many traits |
| Reliability and validity | **Research methods** | The same standards apply to every measurement in psychology |
| Normal curve and percentile rank | **Statistics** | IQ scores are a ready-made normal distribution |
| Stereotype threat | **Social psychology (4.x)** | Stereotypes and prejudice affect performance |
| Growth mindset | **Motivation and personality** | Beliefs shape persistence after failure |
| Misuse of tests | **Skill 1.B** | Applying psychological concepts in discriminatory ways |

### How the parts fit together

1. **Language is built from units** (Part 1) and **develops in a fixed order** (Part 2), with a sensitive period that makes early exposure matter.
2. **Intelligence is hard to define** (Part 3). The g vs. multiple-abilities debate shapes what tests try to measure.
3. **Tests must be standardized, reliable, and valid** (Part 4), and achievement and aptitude tests serve different purposes.
4. **Scores reflect more than ability** (Part 5): environments, stereotypes, and systemic inequities all affect them, and scores have been misused.
      `
    },
    {
      id: 'langu7-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Final Recall Check** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'What type of reliability compares scores on two halves of the same test?',
            answer: 'split-half',
            acceptableAnswers: ['split half', 'split-half reliability', 'split half reliability'],
            explanation: 'Split-half reliability correlates, for example, odd-numbered items with even-numbered items from a single session.'
          },
          {
            question: 'What stage of language development produces two-word phrases such as "want juice"?',
            answer: 'telegraphic speech',
            acceptableAnswers: ['telegraphic', 'telegraphic stage', 'two-word stage'],
            explanation: 'Telegraphic speech keeps the key nouns and verbs and leaves out small words.'
          },
          {
            question: 'What is the name for the rise in average IQ scores across generations?',
            answer: 'Flynn effect',
            acceptableAnswers: ['the Flynn effect', 'Flynn'],
            explanation: 'The Flynn effect is linked to societal factors such as better nutrition, health care, and socioeconomic status.'
          }
        ]
      }
    },
    {
      id: 'langu7-s5-ebq',
      type: 'text' as const,
      content: `
## ✍️ EBQ Practice

The Evidence-Based Question gives you three short sources and asks for an argument (7 points, 3 parts): **(A)** a specific, defensible claim; **(B)** evidence from one source plus an explanation that uses a psychological concept; **(C)** evidence from a DIFFERENT source plus an explanation that uses a DIFFERENT concept. Cite sources as "(Source 1)."

**Prompt:** Develop an argument about whether schools should rely on a single intelligence test score to decide which students enter advanced programs.

*The three sources below are invented for this lesson; they are not real published studies.*

**Source 1:** Researchers gave 200 high school students the same reasoning test. Half read that the test "measures natural intelligence"; half read that it was "a problem-solving warm-up." Students from groups stereotyped as weaker in reasoning scored significantly lower in the "intelligence" condition but not in the "warm-up" condition.

**Source 2:** A district compared students' placement-test scores with family income. Average scores were higher in high-income neighborhoods, but students in every neighborhood earned scores across the full range, and the spread of scores within each neighborhood was about ten times larger than the gap between neighborhood averages.

**Source 3:** A school tested students twice, one month apart, with its placement test. Scores correlated +.90 across the two sessions, but placement-test scores correlated only +.20 with students' later grades in the advanced program.

### Model response

**(A) Claim:** "Schools should not rely on a single intelligence test score to place students in advanced programs, because scores are affected by testing conditions and may not predict success in the program."

**(B) Evidence and explanation:** "Students from stereotyped groups scored lower only when the test was described as measuring intelligence (Source 1). This shows **stereotype threat**: worry about confirming a negative stereotype about one's group lowered performance, so a single score can understate a student's real ability."

**(C) Evidence and explanation:** "The placement test was consistent across sessions (r = +.90) but barely related to later grades (r = +.20) (Source 3). The test is **reliable but lacks predictive validity**, so using it alone would admit and reject students based on a number that does not forecast success in the program."

⚠️ Part C must use a different source AND a different concept from Part B. Source 2 could support a third argument using **within-group vs. between-group variation**.
      `
    },
    {
      id: 'langu7-s6-final',
      type: 'multiple-choice' as const,
      content: `
**Final Exam Simulation** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'For the EBQ above, a student writes: "Source 2 shows scores vary a lot." Why would this response NOT earn the evidence-and-explanation credit?',
            options: [
              'It cites a source, which the EBQ does not allow in Part B',
              'It describes the data but connects it to no concept',
              'It uses Source 2, which does not relate to the prompt at all',
              'It is too long to count as a specific, defensible claim'
            ],
            correctAnswer: 1,
            explanation: 'The response names a source and a vague finding but does not explain how the finding supports a claim using a psychological concept, such as within-group vs. between-group variation. Citing sources is required, not forbidden.'
          },
          {
            question: 'Which situation requires knowledge of BOTH language development AND intelligence testing to evaluate fully?',
            options: [
              'Explaining why identical twins raised apart still have similar IQ scores',
              'Describing the stages a child passes through from cooing to telegraphic speech',
              'Judging whether a bilingual child\'s low score on an English-only test shows low ability',
              'Explaining why a test with high split-half reliability can still lack validity'
            ],
            correctAnswer: 2,
            explanation: 'Evaluating the bilingual child\'s score requires knowing how bilingual vocabulary develops and whether an English-only test has construct validity for a child still learning English. The other situations draw on only one of the two areas.'
          },
          {
            question: 'Source 3 reports that scores correlated +.90 across two testing sessions. Which psychometric principle does this statistic describe?',
            options: [
              'Construct validity',
              'Predictive validity',
              'Standardization',
              'Test-retest reliability'
            ],
            correctAnswer: 3,
            explanation: 'A high correlation between scores on the same test given at two times is test-retest reliability. The +.20 correlation with later grades, by contrast, describes predictive validity.'
          }
        ]
      }
    }
  ]
}
