export const psychLanguagePart6Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 6 of 7 — Problem-Solving Workshop and AAQ Practice**

> 🔑 **Key Concept:** The exam tests whether you can APPLY language and intelligence concepts to new scenarios and to research studies. This part practices both: first with short scenarios, then with an Article Analysis Question (AAQ) built on a practice study.

### 🔧 Problem-Solving Framework

| Step | Action | Key Question |
|------|--------|-------------|
| 1 | **Identify the domain** | Is this about language units, language development, defining intelligence, or measuring it? |
| 2 | **Name the specific concept** | Which term fits exactly (phoneme or morpheme? reliability or validity?) |
| 3 | **Tie it to the scenario** | Which detail in the scenario shows the concept? |
| 4 | **Check for traps** | Am I confusing two similar concepts? |
| 5 | **Use evidence** | Which finding or data point supports the answer? |

### Quick Reference: Most Common Traps

| Concept pair | Most Common Trap | Correct Answer |
|---------|-----------------|----------------|
| Phoneme vs. morpheme | Mixing up sound and meaning | Phoneme = sound; morpheme = meaning |
| Overgeneralization | Calling it a delay | It shows that a rule has been learned |
| Critical vs. sensitive period | Saying adults cannot learn language | Language learning is easiest early, not impossible later |
| Reliability vs. validity | Assuming reliable means valid | Consistent scores can still measure the wrong thing |
| Test-retest vs. split-half | Thinking split-half needs two sessions | Split-half compares two halves of one test |
| Heritability | Applying a group statistic to one person | It describes variation within a population |
| Stereotype threat vs. lift | Mixing up whose group is stereotyped | Threat lowers your group's scores; lift raises scores when ANOTHER group is stereotyped |
      `
    },
    {
      id: 'langu6-s2-scenarios',
      type: 'multiple-choice' as const,
      content: `
**Scenario Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bilingual child speaks Spanish at home and English at school. She sometimes says "I want the dress red" (Spanish word order) instead of "I want the red dress." Which language component is involved in this error?',
            options: [
              'Phonemes, since she is mixing up Spanish and English sounds',
              'Syntax, since Spanish sentence rules carry over into English',
              'Semantics, since she does not know what the word "red" means',
              'Morphemes, since she is leaving the plural "-s" off her nouns'
            ],
            correctAnswer: 1,
            explanation: 'Spanish usually places adjectives after nouns, and she applied that word-order rule to English. Word order is syntax; her sounds and word meanings are correct.'
          },
          {
            question: 'A researcher gives the same intelligence test to two groups: one in a quiet room and one in a noisy cafeteria. The quiet-room group scores 10 points higher, and the researcher concludes that it is more intelligent. What is the main flaw?',
            options: [
              'The test lacks split-half reliability across its two halves',
              'The test lacks construct validity for measuring intelligence',
              'The test was not standardized across the two testing settings',
              'The test lacks predictive validity for later school grades'
            ],
            correctAnswer: 2,
            explanation: 'Standardization requires consistent procedures and environments. Different settings, not intelligence, may explain the 10-point gap.'
          }
        ]
      }
    },
    {
      id: 'langu6-s3-casework',
      type: 'text' as const,
      content: `
### 📚 Two Cases to Work Through

**Case 1: The advanced-program test**

A district uses a single intelligence test score to choose students for an advanced-learning program. Critics point out that the program enrolls far more students from wealthy neighborhoods.

Apply your knowledge:
- **Systemic issues (2.8.C.2):** Poverty and unequal schooling can lower scores, so a score gap may reflect opportunity rather than ability.
- **Construct validity (2.8.B.2):** Is the test measuring reasoning, or familiarity with vocabulary common in wealthier homes?
- **Within vs. between groups:** Scores vary far more within each neighborhood than between neighborhoods, so many qualified students from every neighborhood exist.
- **Socio-culturally responsive testing (2.8.B.3):** Neutral framing and familiar content reduce stereotype threat.
- **g vs. multiple abilities (2.8.A.1):** One total score can hide a student's strong specific ability.

**Case 2: The bilingual toddler**

Parents worry because their 2-year-old, who hears two languages, knows fewer words in each language than a cousin who hears one.

Apply your knowledge:
- **Total vocabulary:** Counting words across both languages gives a fairer comparison than counting words in one.
- **Stages (3.5.B.1):** Ask whether the child is moving through the usual sequence. A child using telegraphic phrases such as "more milk" is on track.
- **Overgeneralization:** Errors such as "I goed" in either language show rule learning.
- **Sensitive period (3.2.B.4):** Early exposure to both languages is an advantage, because language is learned most easily in early childhood.

### Decision Guide

| If the question involves... | Think about... |
|---------------------------|----------------|
| Counting sounds or units of meaning | Phonemes and morphemes |
| A grammatical but meaningless sentence | Syntax vs. semantics |
| A child applying "-ed" or "-s" to an irregular word | Overgeneralization |
| Learning a language early vs. late | Sensitive period |
| Scores on many tests rising and falling together | General intelligence (g) |
| Uneven abilities or one skill lost after injury | Multiple abilities |
| Same scores on two occasions / two halves | Test-retest / split-half reliability |
| Scores forecasting a later outcome | Predictive validity |
| Scores rising across generations | Flynn effect |
| Lower scores after a reminder of a stereotype about one's own group | Stereotype threat |
      `
    },
    {
      id: 'langu6-s4-aaq-study',
      type: 'text' as const,
      content: `
## ✍️ AAQ Practice

The Article Analysis Question gives you one study summary and asks six focused tasks (7 points, 6 parts): identify the **research method**, state an **operational definition**, describe what a **statistic** shows, identify an **ethical guideline** and how it was applied, explain **generalizability** with evidence, and explain how a finding **supports or refutes** the hypothesis.

### Practice study summary

*This practice study is invented for this lesson; it is not a real published study.*

**Introduction:** The researchers hypothesized that students told a math test measures their ability would score lower than students told the same test is a practice puzzle activity.

**Participants:** 120 ninth graders (64 girls, 56 boys) from two public high schools in one Midwestern city volunteered. Parents gave written informed consent, and students gave written assent and were told they could stop at any time.

**Method:** Students were randomly assigned to one of two instructions. The "ability" group read that the test "measures your true math ability." The "puzzle" group read that the test is "a set of practice puzzles that do not measure ability." Everyone then took the same 20-item multiple-choice math test in a 25-minute session. Score was the number of items answered correctly (0 to 20). Test forms were labeled with ID numbers, and afterward all students were told the real purpose of the study.

**Results:** The ability group averaged 11.2 correct (SD = 3.1); the puzzle group averaged 13.6 correct (SD = 3.0). The difference was statistically significant, and the effect size was d = 0.6.
      `
    },
    {
      id: 'langu6-s5-aaq-walkthrough',
      type: 'text' as const,
      content: `
### Model responses for the six AAQ tasks

**A. Research method:** "This is an **experiment**: the researchers manipulated the test instructions (the independent variable) and randomly assigned students to the two conditions."

**B. Operational definition:** "Math performance was operationally defined as **the number of items answered correctly out of 20** on the test."

**C. Statistic:** "The means show that the ability group answered about 2.4 fewer items correctly on average (11.2 vs. 13.6). Because the difference was statistically significant, it is unlikely to be due to chance, and an effect size of 0.6 is a **medium** effect."

**D. Ethical guideline:** "The researchers used **informed consent and assent**: parents signed consent forms and students gave assent after being told they could stop at any time." (Confidentiality, through ID numbers, or debriefing, by explaining the real purpose afterward, would also work.)

**E. Generalizability:** "The findings generalize only **to a limited extent**. All 120 students were ninth graders from two schools in one Midwestern city who volunteered, so the results may not apply to older students, students in other regions, or students who would not volunteer."

**F. Support or refute:** "The results **support** the hypothesis. Students told the test measured their ability scored lower (11.2) than students told it was a puzzle activity (13.6). Since only the instructions differed and students were randomly assigned, the framing likely caused the difference, consistent with stereotype threat and test anxiety."

⚠️ Always use specific numbers and details from the summary. A general answer such as "the sample is too small" earns nothing unless the summary shows why.
      `
    },
    {
      id: 'langu6-s6-aaq-check',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Use the Practice Study Above** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the independent variable in the practice study?',
            options: [
              'The number of math items answered correctly',
              'The instructions on what the test measured',
              'The school each student attended in the city',
              'The 25-minute time limit for the math test'
            ],
            correctAnswer: 1,
            explanation: 'The researchers manipulated the instructions, so the instructions are the independent variable. The number correct is the dependent variable, and the time limit was held constant.'
          },
          {
            question: 'Which response would earn credit for describing what the effect size of d = 0.6 indicates?',
            options: [
              'The difference between the two groups was a medium-sized effect',
              'Sixty percent of students in the ability group scored lower',
              'The results had a 0.6 chance of occurring by chance alone',
              'The test is reliable because the effect size is above 0.5'
            ],
            correctAnswer: 0,
            explanation: 'Effect sizes from about 0.3 to 0.7 are usually read as medium, so d = 0.6 describes a moderate difference between conditions. Effect size is not a percentage of students or a probability of chance.'
          },
          {
            question: 'Which statement best explains a limit on the generalizability of the findings?',
            options: [
              'Random assignment placed students in one of two instruction groups',
              'The math test used multiple-choice items rather than written answers',
              'Students were volunteers from two schools in a single Midwestern city',
              'The researchers explained the true purpose of the study afterward'
            ],
            correctAnswer: 2,
            explanation: 'Generalizability depends on who was studied, so the best answer cites the volunteer sample from two schools in one city. Random assignment supports causal conclusions; it does not widen the population the results apply to.'
          }
        ]
      }
    },
    {
      id: 'langu6-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Scenario to the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A child says "mouses" instead of "mice": _____', options: ['Phoneme error', 'Overgeneralization', 'Semantic error', 'Telegraphic speech'] },
          { label: 'A "leadership test" turns out to measure mostly reading speed: _____', options: ['Low test-retest reliability', 'Low predictive validity', 'Low construct validity', 'Low standardization'] },
          { label: 'Scores on a test\'s first half and second half barely relate to each other: _____', options: ['Low split-half reliability', 'Low predictive validity', 'Low construct validity', 'Low standardization'] }
        ],
        correctAnswers: ['Overgeneralization', 'Low construct validity', 'Low split-half reliability'],
        hint1: 'A regular plural rule applied to an irregular noun.',
        hint2: 'Is the test measuring the trait it claims to measure?',
        hint3: 'Two halves of one test should agree.',
        explanation: '"Mouses" applies the plural rule too widely, which is overgeneralization. A leadership test that measures reading speed lacks construct validity. Halves of the same test that do not agree show low split-half reliability.'
      }
    },
    {
      id: 'langu6-s8-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Dr. Martinez designs an intelligence test that uses only abstract patterns and shapes, with no words and no questions about cultural knowledge. Her main goal is most likely to',
            options: [
              'raise the test\'s reliability across retests',
              'make the test fairer across different groups',
              'turn the test into a measure of achievement',
              'raise the test\'s split-half reliability'
            ],
            correctAnswer: 1,
            explanation: 'Removing language and culture-specific knowledge is an attempt to make the test more socio-culturally responsive. Even so, puzzle formats and timed testing are not equally familiar everywhere, so bias can remain.'
          },
          {
            question: 'Adopted children\'s IQ scores correlate more with their biological parents\' scores than with their adoptive parents\' scores. Yet adopted children raised in enriched homes score higher on average than their biological parents. Which pair of conclusions is best supported?',
            options: [
              'Genes alone explain IQ, so the enrichment gains must come from biased testing',
              'Environment alone explains IQ, so the biological-parent link must reflect contact',
              'Genes influence differences in IQ, and environment influences the overall level',
              'The two findings contradict each other, so one must be a measurement error'
            ],
            correctAnswer: 2,
            explanation: 'The biological-parent correlation shows genetic influence on who scores higher than whom, while the enrichment effect shows that environment can raise the average level of scores. The findings complement each other.'
          }
        ]
      }
    }
  ]
}
