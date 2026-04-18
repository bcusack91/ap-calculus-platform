export const englangClaimsEvidencePart1Data = {
  topicSlug: 'englang-claims-evidence',
  sections: [
    {
      id: 'elce1-intro',
      type: 'text' as const,
      content: `
# 📋 Claims and Evidence

**Part 1 of 7 — Building and Evaluating Arguments**

---

## What Is a Claim?

A **claim** is a statement that asserts something to be true. It is the foundation of any argument.

| Claim Type | Definition | Example |
|-----------|-----------|---------|
| **Factual** | Asserts something is true or false | "The Earth revolves around the Sun." |
| **Value** | Asserts something is good/bad, right/wrong | "Universal healthcare is a moral imperative." |
| **Policy** | Advocates for a specific action or change | "The voting age should be lowered to 16." |
| **Causal** | Asserts cause-and-effect | "Social media use increases anxiety in teenagers." |

### Thesis vs. Claim
- A **thesis** is your MAIN claim — the central argument of your essay
- **Supporting claims** are smaller arguments that back up the thesis
- Each body paragraph should have its own supporting claim

---

## What Counts as Evidence?

| Evidence Type | Strength | Example |
|--------------|----------|---------|
| **Statistics/Data** | Strong — measurable, specific | "67% of respondents reported improvement" |
| **Expert testimony** | Strong — authoritative | "Dr. Martinez, a leading epidemiologist, states..." |
| **Historical examples** | Moderate-Strong | "The New Deal created 4 million jobs in its first year" |
| **Anecdotes** | Moderate — vivid but limited | "My neighbor lost her job during the recession" |
| **Analogies** | Moderate — clarifying but imperfect | "Schools are like ecosystems — remove one element and the whole system suffers" |
| **Personal experience** | Weak alone — strengthened by other evidence | "In my experience as a teacher..." |

> 🔑 **Strong arguments** combine multiple types of evidence. A statistic provides credibility; an anecdote makes it relatable; expert testimony adds authority.
      `
    },
    {
      id: 'elce1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"The school board should require financial literacy courses for all high school students." What type of claim is this?',
            options: [
              'Factual — it states a fact',
              'Value — it makes a judgment about good or bad',
              'Policy — it advocates for a specific action',
              'Causal — it asserts cause and effect'
            ],
            correctAnswer: 2,
            explanation: 'The word "should" signals a policy claim — it advocates for a specific change or action. Policy claims propose what ought to be done, not just what is true or what is right.'
          },
          {
            question: 'Which type of evidence is generally considered weakest when used alone?',
            options: [
              'Statistical data from peer-reviewed research',
              'Expert testimony from a recognized authority',
              'A single personal anecdote without supporting data',
              'Historical evidence from documented events'
            ],
            correctAnswer: 2,
            explanation: 'A single anecdote is vivid and relatable but represents only one case. It does not demonstrate a broader pattern. Anecdotes are most effective when paired with statistics or expert testimony that confirm the pattern.'
          }
        ]
      }
    },
    {
      id: 'elce1-content',
      type: 'text' as const,
      content: `
## Evaluating Evidence Quality

Not all evidence is created equal. Strong evidence is:

| Criterion | Questions to Ask |
|-----------|-----------------|
| **Relevant** | Does this evidence directly support the claim? |
| **Sufficient** | Is there enough evidence, or is it one isolated example? |
| **Accurate** | Is the data current and from a reliable source? |
| **Representative** | Does it reflect the broader situation, or is it cherry-picked? |

### Commentary: The Bridge Between Evidence and Claim

Evidence alone is not an argument. You need **commentary** — your analysis of how the evidence supports the claim.

**Weak**: "Studies show that reading improves test scores." (evidence with no analysis)

**Strong**: "A 2019 Stanford study found that students who read 30 minutes daily scored 15% higher on standardized tests. This data suggests that consistent reading practice builds the comprehension skills tested on these exams, supporting the case for dedicated reading time in schools."

### Counterarguments
Strong arguments **acknowledge and refute** opposing views:

| Strategy | Example |
|----------|---------|
| **Concession** | "While cost is a legitimate concern..." |
| **Rebuttal** | "...the long-term savings outweigh the initial investment by 3-to-1" |
| **Qualification** | "This solution may not work for every district, but for urban schools specifically..." |
      `
    },
    {
      id: 'elce1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A claim that advocates for a specific action or change (often using "should") is called a _______ claim.

2) Your analysis of HOW evidence supports a claim is called _______.

3) Acknowledging an opposing view before refuting it is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['policy', 'commentary', 'concession'],
        hint1: 'Policy = what should be done.',
        hint2: 'Your voice analyzing the evidence.',
        hint3: 'Conceding a point before arguing against it.',
        explanation: 'Policy claims = "should" statements. Commentary = analysis. Concession = acknowledging the other side.'
      }
    },
    {
      id: 'elce1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Evidence** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"My cousin did not go to college and became a successful entrepreneur, so college is unnecessary." This evidence is weak because it is ___',
            options: ['Not representative — one anecdote does not prove a general rule', 'Not relevant to the topic', 'Too formal', 'Based on expert opinion']
          },
          {
            label: '"A 2023 Pew Research study of 10,000 adults found that 72% support the policy." This evidence is strong because it is ___',
            options: ['Sufficient and representative — large sample from a credible source', 'Based on a single experience', 'An emotional anecdote', 'A personal opinion']
          },
          {
            label: '"While opponents argue the policy is too expensive, the Congressional Budget Office projects it will save $50 billion over ten years." This sentence uses ___',
            options: ['Concession and rebuttal', 'Only pathos', 'Only ethos', 'Only anecdote']
          }
        ],
        correctAnswers: ['Not representative — one anecdote does not prove a general rule', 'Sufficient and representative — large sample from a credible source', 'Concession and rebuttal'],
        hint1: 'One person is not everyone.',
        hint2: '10,000 people from Pew = solid data.',
        hint3: '"While opponents argue" = concession; CBO data = rebuttal.',
        explanation: 'Single anecdote = unrepresentative. Pew study = strong data. "While...but" = concession + rebuttal.'
      }
    },
    {
      id: 'elce1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Claims and Evidence

- Every argument paragraph needs: **claim + evidence + commentary**
- On the argument essay, use at least 2-3 types of evidence (statistics, examples, expert testimony)
- ALWAYS include commentary — evidence without explanation earns minimal credit
- Address counterarguments to show sophistication
- The AP rubric specifically rewards "concession and rebuttal" in the argument essay
- Evaluate source credibility: peer-reviewed research > news articles > personal blogs
      `
    },
    {
      id: 'elce1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "Homework should be eliminated because I hate doing it and my friends agree." What is the primary weakness of this argument?',
            options: [
              'The claim is well-supported but needs formatting',
              'The evidence is entirely personal and anecdotal, with no data, expert testimony, or representative examples',
              'The grammar is incorrect',
              'Homework cannot be discussed in academic writing'
            ],
            correctAnswer: 1,
            explanation: 'The argument relies solely on personal feelings and a small, unrepresentative sample (friends). A strong argument would include research data, educational expert opinions, and representative studies on homework effectiveness.'
          },
          {
            question: 'Which of the following demonstrates effective use of concession and rebuttal?',
            options: [
              '"My opponents are wrong about everything."',
              '"While some studies suggest moderate homework benefits younger students, the overwhelming evidence for high schoolers shows diminishing returns beyond 90 minutes."',
              '"Homework is bad because students do not like it."',
              '"I believe homework should be optional."'
            ],
            correctAnswer: 1,
            explanation: 'This sentence concedes that some evidence supports moderate homework ("While some studies suggest...") before rebutting with stronger evidence for the writer-s position. This demonstrates sophistication and fair-mindedness.'
          }
        ]
      }
    }
  ]
};
