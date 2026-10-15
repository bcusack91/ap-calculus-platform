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
              'Statistical data drawn from a large peer-reviewed study',
              'Testimony from an expert recognized in the relevant field',
              'A single personal anecdote with no supporting data',
              'Historical evidence drawn from well-documented past events'
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
            options: ['An unrepresentative single case', 'Irrelevant to the question of college', 'Too old to reflect current conditions', 'From a source with a financial bias']
          },
          {
            label: '"A 2023 Pew Research study of 10,000 adults found that 72% support the policy." This evidence is strong because it is ___',
            options: ['Sufficient and representative', 'Recent and therefore unquestionable', 'Emotionally vivid and memorable', 'A single expert\'s personal view']
          },
          {
            label: '"While opponents argue the policy is too expensive, the Congressional Budget Office projects it will save \\$50 billion over ten years." This sentence uses ___',
            options: ['Concession and rebuttal', 'Definition and example', 'Anecdote and appeal to fear', 'Ad hominem and straw man']
          }
        ],
        correctAnswers: ['An unrepresentative single case', 'Sufficient and representative', 'Concession and rebuttal'],
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
- The essay rubric has no separate row for counterarguments: it scores thesis (0–1), evidence and commentary (0–4), and sophistication (0–1). A concession and rebuttal that consistently explores the complexity of the issue is one route to the sophistication point
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
              'Its reasoning is sound, but the paragraph needs clearer organization',
              'Its only evidence is personal feeling and a small, biased sample',
              'Its use of first person is not allowed in persuasive writing',
              'Its topic is too personal to be argued in academic writing'
            ],
            correctAnswer: 1,
            explanation: 'The argument relies solely on personal feelings and a small, unrepresentative sample (friends). A strong argument would include research data, educational expert opinions, and representative studies on homework effectiveness.'
          },
          {
            question: 'Which of the following demonstrates effective use of concession and rebuttal?',
            options: [
              '"Homework opponents claim it causes stress, but they are simply wrong, and anyone who has studied hard knows it pays off."',
              '"While some studies suggest moderate homework benefits younger students, the overwhelming evidence for high schoolers shows diminishing returns beyond 90 minutes."',
              '"Because research shows homework beyond 90 minutes yields diminishing returns for high schoolers, schools should cap it."',
              '"Although some studies suggest homework helps younger students, others find that it helps high schoolers just as much."'
            ],
            correctAnswer: 1,
            explanation: 'This sentence concedes that some evidence supports moderate homework ("While some studies suggest...") before rebutting with stronger evidence for the writer\'s position. The other sentences dismiss opponents without conceding anything, present evidence with no opposing view, or concede a point and then never answer it.'
          }
        ]
      }
    }
  ]
};
