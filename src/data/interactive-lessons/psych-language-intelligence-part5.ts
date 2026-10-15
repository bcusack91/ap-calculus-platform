export const psychLanguagePart5Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 5 of 7 — Intelligence Controversies**

> 🔑 **Key Concept:** Intelligence scores are shaped by genes, environments, and the conditions of testing. Systemic issues such as poverty, discrimination, and unequal schooling affect scores, and test results have been misused to limit people's opportunities (CED 2.8.B.3, 2.8.C, 2.8.D.2).

| Controversy | Key Question | What the evidence shows |
|-------------|-------------|-------------------|
| **Genes and environment** | Are differences in IQ inherited or learned? | Both matter; twin and adoption studies show genetic influence, and environments shift scores |
| **Flynn effect** | Why have IQ scores risen across generations? | Societal factors such as higher socioeconomic status, better health care, and better nutrition |
| **Within vs. between groups** | Do group averages tell us about individuals? | Scores vary more within a group than between groups |
| **Stereotype threat and lift** | Can stereotypes change test performance? | Yes; testing situations that call up stereotypes can lower or raise scores |
| **Misuse of tests** | How have scores been used against people? | To limit access to jobs, military ranks, schools, and immigration to the US |
| **Fixed vs. growth mindset** | Do beliefs about intelligence matter? | Believing intelligence can grow is linked to better academic achievement |

### 🗣️ Real-World Example

In a well-known 1995 study, Claude Steele and Joshua Aronson gave Black and White college students a difficult verbal test. When the test was described as a measure of intellectual ability, Black students scored lower than White students with similar prior test scores. When the same test was described as a problem-solving exercise that did not measure ability, the gap largely disappeared. Same test, same kind of students; only the framing changed.

> **Why This Matters for the AP Exam:** Heritability describes differences within a **group**, not any one person. Even a high heritability estimate does not mean that a person's own score is fixed by genes.
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
            question: 'If the heritability of IQ in a population is estimated at .75, this means',
            options: [
              '75% of any one person\'s IQ score was fixed by the genes they inherited',
              '75% of the variation in IQ within that population is linked to genetic differences',
              'environment explains 75% of the IQ differences within that population',
              'IQ scores can be raised by at most 25% through changes in environment'
            ],
            correctAnswer: 1,
            explanation: 'Heritability describes how much of the variation among people in a particular population is linked to genetic differences. It says nothing about an individual and does not limit how much environments can change scores.'
          },
          {
            question: 'The Flynn effect refers to the observation that',
            options: [
              'IQ scores have fallen across generations as schooling has grown less rigorous',
              'IQ scores in many countries have risen across generations',
              'adopted children\'s IQs drift toward those of their adoptive parents over time',
              'cultural bias in IQ tests has been eliminated by modern nonverbal test items'
            ],
            correctAnswer: 1,
            explanation: 'Average IQ scores have risen across generations in much of the world. The rise is too fast to be genetic and is linked to societal factors such as higher socioeconomic status, better health care, and better nutrition.'
          }
        ]
      }
    },
    {
      id: 'langu5-s3-nature-nurture',
      type: 'text' as const,
      content: `
### 📚 Genes and Environment: The Evidence

**Evidence for genetic influence** (twin and adoption studies, CED 1.1.A.3)

| Comparison | Typical IQ correlation | What it shows |
|-----------|---------|---------------|
| Identical twins raised together | about +.85 | Shared genes plus shared home |
| Identical twins raised apart | about +.75 | Similarity remains even without a shared home |
| Fraternal twins raised together | about +.60 | Half the shared genes, same home |
| Unrelated children adopted into the same home (as adults) | near 0 | Shared home alone has little lasting effect on differences |

**Evidence for environmental influence**

| Factor | Effect |
|--------|--------|
| **Schooling** | Each additional year of school is linked to higher scores |
| **Poverty and health** | Malnutrition, lead exposure, and poor health care are linked to lower scores |
| **Discrimination and educational inequity** | Unequal access to good schools and resources lowers scores for individuals and groups (CED 2.8.C.2) |
| **Flynn effect** | Scores rose across generations as living standards improved (CED 2.8.C.1) |

### 📚 Within-Group vs. Between-Group Differences (CED 2.8.C.2)

IQ scores vary **more within a group than between groups**. The range of scores inside any one group is far larger than the difference between two groups' averages.

**Seed analogy:** Plant seeds from the same varied batch in two pots, one with rich soil and one with poor soil. Within each pot, height differences reflect the seeds' genes, because the soil is the same. The difference **between** the pots comes entirely from the soil. In the same way, a trait can be highly heritable within groups while the gap between groups is caused by environment.

Personal and sociocultural biases can also affect how an individual's score is interpreted. A tester who expects low performance from a group may read the same score differently.
      `
    },
    {
      id: 'langu5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Finding to the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Women score lower on a math test after being reminded of a gender stereotype about math: _____', options: ['Flynn effect', 'Stereotype threat', 'Stereotype lift', 'Heritability'] },
          { label: 'A nation\'s average IQ score rises over 50 years as nutrition and health care improve: _____', options: ['Flynn effect', 'Stereotype threat', 'Growth mindset', 'Heritability'] },
          { label: 'Members of a group score higher after being reminded that another group is stereotyped as weaker in that area: _____', options: ['Flynn effect', 'Stereotype threat', 'Stereotype lift', 'Fixed mindset'] }
        ],
        correctAnswers: ['Stereotype threat', 'Flynn effect', 'Stereotype lift'],
        hint1: 'A reminder of a negative stereotype about your OWN group.',
        hint2: 'Scores rising across generations.',
        hint3: 'A boost from comparing yourself with a group stereotyped as worse.',
        explanation: 'Worry about confirming a negative stereotype about one\'s own group is stereotype threat. Rising scores across generations is the Flynn effect. A performance boost from awareness that another group is negatively stereotyped is stereotype lift.'
      }
    },
    {
      id: 'langu5-s5-threat-misuse',
      type: 'text' as const,
      content: `
### 📚 Stereotype Threat and Stereotype Lift (CED 2.8.B.3)

| Concept | Definition | Effect on scores |
|---------|-----------|-----------|
| **Stereotype threat** | Worry about confirming a negative stereotype about one's own group | Lowers performance, often by adding anxiety that uses up working memory |
| **Stereotype lift** | A boost in performance from awareness that another group is negatively stereotyped | Raises performance for members of the non-stereotyped group |

Both effects can make test scores unequal for reasons that have nothing to do with ability. That is why researchers try to build assessments that are **socio-culturally responsive**: familiar content, neutral framing, and testing conditions that do not call attention to group stereotypes.

### 📚 How Test Scores Have Been Misused (CED 2.8.C.3)

Scores from intelligence tests have been used to **limit access** to:
- **Jobs** (screening applicants with tests unrelated to the work)
- **Military ranks** (assigning recruits to roles and promotions by test score)
- **Educational institutions** (keeping students out of programs or schools)
- **Immigration to the US** (early-1900s testers claimed that some immigrant groups were less intelligent, using tests given in English to people who had just arrived)

This history is an example of applying psychological concepts in inappropriate or discriminatory ways (skill 1.B).

### 📚 Fixed vs. Growth Mindset (CED 2.8.D.2)

People's beliefs about intelligence can affect academic achievement. Psychologist **Carol Dweck** described two beliefs:
- **Fixed mindset:** intelligence is set at birth. Students who hold this view tend to avoid challenges and give up after failure, because failure seems to reveal low ability.
- **Growth mindset:** intelligence can grow through effort and experience. Students who hold this view tend to persist and see mistakes as information.

In studies by Dweck's group, children praised for being smart were more likely to choose easy tasks afterward than children praised for their effort.

### 🎯 AP Exam Strategy: Controversy Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| High heritability means genes decide YOUR IQ | Heritability describes variation in a group | It says nothing about one person |
| The Flynn effect is genetic | Genes cannot change that fast | Societal factors drive it |
| Group gaps must be genetic | Within-group heritability says nothing about between-group causes | Environment can explain the gap |
| Stereotype threat means low ability | The test situation, not ability, lowers scores | Changing the framing changes scores |
| Mindset is just self-esteem | Mindset is a belief about whether ability can change | It affects how students respond to challenge |
      `
    },
    {
      id: 'langu5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a study, identical twins have more similar IQ scores than fraternal twins, and children adopted from under-resourced orphanages into well-resourced homes score higher than expected. What conclusion is best supported?',
            options: [
              'Genes explain the twin data, so the adoption gain must reflect sampling error',
              'Environment explains the adoption gain, so the twin pattern must reflect shared homes',
              'Genetic and environmental influences each play a real part',
              'The two results conflict, so the study cannot support any conclusion'
            ],
            correctAnswer: 2,
            explanation: 'The twin comparison points to genetic influence, and the adoption gain points to environmental influence. The findings fit together: genes and environments each contribute.'
          },
          {
            question: 'A teacher tells a student, "You\'re so smart, you don\'t even have to try!" According to mindset research, what is the most likely effect on the student?',
            options: [
              'The student will work harder to keep earning praise for being smart',
              'The student will start avoiding challenges that could expose mistakes',
              'The student will develop a growth mindset from the positive feedback',
              'The praise will have no lasting effect on the student\'s effort or choices'
            ],
            correctAnswer: 1,
            explanation: 'Praising intelligence encourages a fixed mindset, so the student may avoid hard tasks that could threaten the "smart" label. Praising effort encourages a growth mindset instead.'
          },
          {
            question: 'Two groups differ by a few points in average test score, yet scores within each group span more than 60 points. Which conclusion is best supported?',
            options: [
              'Knowing a person\'s group predicts that person\'s score quite accurately',
              'The difference between the groups must be caused by genetic differences',
              'The test cannot be reliable if scores within each group vary so widely',
              'Group membership tells you very little about any one person\'s score'
            ],
            correctAnswer: 3,
            explanation: 'Because variation within each group is far larger than the gap between the averages, group membership is a poor guide to an individual\'s score. Nothing in the data shows the cause of the small gap.'
          }
        ]
      }
    }
  ]
}
