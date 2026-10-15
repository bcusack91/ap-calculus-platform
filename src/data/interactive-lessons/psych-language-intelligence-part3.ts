export const psychLanguagePart3Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 3 of 7 — Defining Intelligence: One Ability or Many?**

> 🔑 **Key Concept:** Throughout history, psychologists have not agreed on how to define or measure intelligence, and both the definition and the measurement can be subject to bias. The central debate is whether intelligence is one **general ability (g)** or a set of **multiple abilities** (CED 2.8.A.1).

### A working definition

Most definitions describe intelligence as the mental ability to **learn from experience, solve problems, and adapt to new situations**. Beyond that shared core, definitions differ:

- **Across cultures.** Some cultures stress quick, abstract reasoning and school knowledge. Others stress social responsibility, practical skill, or wisdom in getting along with others. A definition built in one culture may miss abilities another culture values.
- **Across time.** Early test makers often treated familiarity with their own culture's vocabulary and customs as a sign of intelligence, which gave an advantage to people raised in that culture.
- **Across researchers.** Whatever definition a researcher chooses decides what the test measures, and therefore who scores high.

### The central debate

| View | Core claim | What it predicts |
|------|-----------|------------------|
| **General intelligence (g)** | One broad mental ability underlies performance on many different tasks | People who do well on one kind of mental test tend to do well on others |
| **Multiple abilities** | Intelligence is made up of several distinct abilities | A person can be strong in one ability and average or weak in another |

Charles Spearman proposed **g** after noticing that people's scores on very different school subjects and tests tended to rise and fall together.

Named theories that list specific types of intelligence are not tested on the current exam; know the g versus multiple-abilities debate and the evidence on each side.
      `
    },
    {
      id: 'langu3-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — g or Multiple Abilities?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A psychologist reports that students who score high on vocabulary tests also tend to score high on math reasoning and puzzle tests. This pattern is most consistent with',
            options: [
              'the view that abilities are fully separate',
              'a general intelligence factor called g',
              'the idea that intelligence cannot be measured',
              'a bias in favor of vocabulary over math'
            ],
            correctAnswer: 1,
            explanation: 'When scores on very different tests rise and fall together, a single general ability is a simple explanation, which is the idea behind g. Fully separate abilities would predict little or no relationship among the scores.'
          },
          {
            question: 'Which observation would best support the view that intelligence is made up of multiple abilities?',
            options: [
              'A student earns very similar scores on all eight sections of a test',
              'A single total score predicts grades in nearly every school subject',
              'A stroke patient loses verbal skills but keeps strong spatial skills',
              'Scores on reading and math tests are strongly and positively related'
            ],
            correctAnswer: 2,
            explanation: 'If one ability can be damaged while another stays intact, the two abilities are at least partly separate. Similar section scores and strong positive correlations fit the general-ability view instead.'
          }
        ]
      }
    },
    {
      id: 'langu3-s3-evidence',
      type: 'text' as const,
      content: `
### 📚 Evidence on Both Sides

| Evidence for g | Evidence for multiple abilities |
|----------------|--------------------------------|
| Scores on verbal, math, memory, and spatial tests are all positively correlated | Those correlations are moderate, not perfect, so the abilities are not identical |
| One overall score predicts school grades and job training success fairly well | Many people show uneven profiles, such as strong spatial skill with average verbal skill |
| People who are quick on one kind of reasoning task tend to be quick on others | Brain injury can impair one ability, such as language, while sparing others |
| | Modern tests report several subscores (for example, verbal reasoning, working memory, and processing speed) because a single number hides differences |

**The middle ground.** Many researchers today describe intelligence as a general ability **plus** several more specific abilities. The two views disagree mostly about how much weight to give each.

### Another way to divide abilities: crystallized and fluid

Topic 3.4 introduces a related distinction:
- **Crystallized intelligence** is accumulated knowledge and verbal skill, such as vocabulary. It tends to hold steady or grow through adulthood.
- **Fluid intelligence** is the ability to reason quickly and solve new problems. It tends to decline gradually in later adulthood.

Because the two follow different paths with age, this distinction is evidence that intelligence has more than one part.
      `
    },
    {
      id: 'langu3-s4-data',
      type: 'multiple-choice' as const,
      content: `
**Reading the Data** 📊

*Practice data invented for this lesson.* A researcher gives 300 high school students four tests and reports the correlation between each pair of tests.

| | Vocabulary | Reading | Mental rotation | Block puzzles |
|---|---|---|---|---|
| **Vocabulary** | — | +.72 | +.31 | +.28 |
| **Reading** | +.72 | — | +.29 | +.33 |
| **Mental rotation** | +.31 | +.29 | — | +.69 |
| **Block puzzles** | +.28 | +.33 | +.69 | — |
      `,
      exercise: {
        questions: [
          {
            question: 'What does the fact that every correlation in the table is positive suggest?',
            options: [
              'Each test measures a fully separate ability',
              'Some general ability contributes to all four tests',
              'High vocabulary scores cause higher puzzle scores',
              'The four tests are not reliable measures'
            ],
            correctAnswer: 1,
            explanation: 'Positive correlations among all four tests mean that people who do well on one tend to do well on the others, which is consistent with a general ability. Correlations cannot show that one score causes another.'
          },
          {
            question: 'Which pattern in the table best supports the multiple-abilities view?',
            options: [
              'All six correlations are positive rather than negative',
              'Vocabulary and reading correlate at +.72 with each other',
              'Tests form two clusters that relate weakly to each other',
              'Mental rotation and block puzzles both involve shapes'
            ],
            correctAnswer: 2,
            explanation: 'Verbal tests correlate strongly with each other and spatial tests correlate strongly with each other, but the two groups relate only weakly. That clustering suggests a verbal ability and a spatial ability that are partly separate.'
          },
          {
            question: 'A student scores at the 90th percentile in vocabulary and the 40th percentile in block puzzles. How do the two views account for this?',
            options: [
              'Only the g view can explain any difference between two test scores',
              'Only the multiple-abilities view allows scores to differ at all',
              'Both views would predict identical scores on every type of test',
              'Each view allows a gap, though they explain it in different ways'
            ],
            correctAnswer: 3,
            explanation: 'Even with a general ability, the correlations are far from perfect, so some differences between tests are expected. The multiple-abilities view treats a large gap as normal because the abilities are partly separate.'
          }
        ]
      }
    },
    {
      id: 'langu3-s5-bias',
      type: 'text' as const,
      content: `
### 📚 Why Intelligence Is Hard to Define and Measure Fairly

The CED stresses that defining and measuring intelligence "continues to be elusive and can be subject to bias." Three reasons:

1. **The definition shapes the test.** If intelligence is defined as speed on abstract puzzles, a test will reward speed, and people from settings that do not emphasize timed tests may score lower without being less capable.
2. **Test content reflects a culture.** A question that asks what to do "if you lose a library book" assumes that the test taker grew up with libraries. Unfamiliar content lowers scores for reasons unrelated to reasoning ability.
3. **A single number can hide strengths.** Under the multiple-abilities view, reporting only one total score can misrepresent a person with a very uneven profile.

These problems connect directly to Part 4 (does a test measure what it claims to, which is **construct validity**?) and Part 5 (how test scores have been misused).

### 🎯 AP Exam Strategy: Defining-Intelligence Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| "g means everyone has the same abilities" | g describes a shared factor across tests, not identical people | People differ in g and in specific abilities |
| "Positive correlations prove abilities are identical" | Moderate correlations leave room for differences | Correlated but distinct abilities |
| "The debate is settled" | Researchers still disagree on how much weight each view deserves | Know evidence for both sides |
| "A test free of words is free of culture" | Puzzle and timing formats are cultural too | Bias can enter through format as well as content |
      `
    },
    {
      id: 'langu3-s6-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'What single letter names the general intelligence factor that underlies performance on many different mental tasks?',
            answer: 'g',
            acceptableAnswers: ['g factor', 'general intelligence'],
            explanation: 'Spearman called the general factor g.'
          },
          {
            question: 'What type of intelligence refers to accumulated knowledge and verbal skills that tend to remain stable or grow with age?',
            answer: 'crystallized',
            acceptableAnswers: ['crystallized intelligence', 'crystallised', 'crystallised intelligence'],
            explanation: 'Crystallized intelligence, such as vocabulary, tends to hold steady or grow; fluid intelligence tends to decline in later adulthood.'
          }
        ]
      }
    },
    {
      id: 'langu3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A school uses one total score to decide which students enter an enrichment program. A critic who holds the multiple-abilities view would most likely argue that',
            options: [
              'a single total can hide a student\'s strong specific abilities',
              'total scores are always lower for students who speak two languages',
              'the program should rely only on teacher ratings of student effort',
              'one total score is the most complete picture of a student\'s ability'
            ],
            correctAnswer: 0,
            explanation: 'If intelligence includes partly separate abilities, a single total can average away a strong ability. That is the multiple-abilities objection to relying on one number.'
          },
          {
            question: 'Researchers in two countries ask parents to describe an "intelligent child." Parents in one country mention quick learning and good test scores; parents in the other mention helping others and showing good judgment. This finding best illustrates that',
            options: [
              'parents in one of the two countries misunderstand intelligence',
              'definitions of intelligence vary with cultural values',
              'intelligence is a single ability that every culture measures',
              'intelligence tests are equally fair in both countries'
            ],
            correctAnswer: 1,
            explanation: 'The two groups value different abilities, which shows why the CED calls the definition of intelligence elusive and open to bias. A test built around one culture\'s definition could misjudge children from the other.'
          }
        ]
      }
    }
  ]
}
