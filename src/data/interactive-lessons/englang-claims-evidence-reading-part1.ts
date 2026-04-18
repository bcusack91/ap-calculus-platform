export const englangClaimsEvidenceReadingPart1Data = {
  topicSlug: 'englang-claims-evidence-reading',
  sections: [
    {
      id: 'elcer1-intro',
      type: 'text' as const,
      content: `
# 📖 Claims and Evidence in Reading

**Part 1 of 7 — Identifying What an Author Argues and How They Support It**

---

## Reading Arguments Like a Rhetorician

When you read a nonfiction passage on AP Lang, do not just ask, "What is this about?"
Ask:
- What is the author claiming?
- What evidence supports that claim?
- Is the evidence credible and sufficient?
- How effectively is the claim developed?

---

## Types of Claims You Will Encounter

| Claim Type | What It Does | Signal Words |
|-----------|--------------|--------------|
| **Factual claim** | Asserts what is true | "is," "are," "did" |
| **Value claim** | Judges what is good/bad, right/wrong | "better," "ethical," "unjust" |
| **Policy claim** | Recommends action | "should," "must," "ought" |
| **Causal claim** | Links cause and effect | "because," "leads to," "results in" |

### Example Passage Snippet
"Schools should start no earlier than 8:30 AM because adolescent sleep cycles shift later during puberty, and districts that adopted later start times saw attendance and test scores rise."

- Main claim: Schools should start later (policy claim)
- Supporting reason: Teen sleep cycles shift (causal claim)
- Evidence: District outcomes improved (data-based support)

> 🔑 On AP multiple-choice, wrong answers often confuse **topic** with **claim**. Topic = broad subject. Claim = specific arguable assertion.
      `
    },
    {
      id: 'elcer1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement is a policy claim?',
            options: [
              'Teenagers often get less sleep than adults.',
              'Schools that start later report fewer tardies.',
              'School start times should be moved to 8:30 AM or later.',
              'Later start times are more common in urban districts.'
            ],
            correctAnswer: 2,
            explanation: 'Policy claims advocate action and are usually signaled by words like "should" or "must." "Schools should be moved..." explicitly proposes a change, making it a policy claim.'
          },
          {
            question: 'In rhetorical reading, what is the difference between topic and claim?',
            options: [
              'They mean the same thing.',
              'Topic is broad subject; claim is specific arguable assertion about that subject.',
              'Topic is always emotional; claim is always factual.',
              'Claim is broad; topic is narrow.'
            ],
            correctAnswer: 1,
            explanation: 'Topic names what the text is about (e.g., education policy). Claim states what the author argues about that topic (e.g., schools should start later). AP questions often test this distinction.'
          }
        ]
      }
    },
    {
      id: 'elcer1-content',
      type: 'text' as const,
      content: `
## Evidence Types in Passages

| Evidence Type | Strength | What to Watch For |
|--------------|----------|-------------------|
| **Statistics/data** | Strong if sourced and contextualized | Sample size, source credibility, date |
| **Expert testimony** | Strong if expertise is relevant | Is the expert qualified in THIS field? |
| **Historical example** | Moderate-strong | Is the comparison truly analogous? |
| **Anecdote** | Vivid but limited | Does one story stand in for many cases? |
| **Hypothetical scenario** | Useful but speculative | Is it plausible and relevant? |

### Reading for Evidence Quality
Use these checks:
1. **Relevance**: Does this evidence directly support the claim?
2. **Sufficiency**: Is there enough evidence, or only one example?
3. **Credibility**: Is the source trustworthy?
4. **Representativeness**: Is this typical, or cherry-picked?

### Common Weaknesses in AP Passages
- Overgeneralizing from one anecdote
- Using outdated statistics without context
- Appealing to authority outside the expert's domain
- Presenting correlation as proof of causation

### Your Annotation Strategy
Mark passages like this:
- C = claim
- E = evidence
- Co = commentary (analysis connecting evidence to claim)
- CA = counterargument
- R = rebuttal

This gives you a map of the argument before answering questions.
      `
    },
    {
      id: 'elcer1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A claim that recommends action using words like "should" is a _______ claim.

2) Evidence must be both relevant and _______ to be persuasive.

3) In annotation shorthand, the letter pair used for counterargument is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['policy', 'sufficient', 'CA'],
        hint1: 'It proposes policy/action.',
        hint2: 'Enough quantity and depth.',
        hint3: 'Counterargument initials.',
        explanation: 'Policy claims advocate action. Evidence must be sufficient. CA = counterargument.'
      }
    },
    {
      id: 'elcer1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Evaluate the Support** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"My uncle quit social media and felt happier, so social media harms everyone." The weakness is ___',
            options: ['Overgeneralization from anecdotal evidence', 'Lack of policy recommendation', 'Too many statistics', 'No emotional appeal']
          },
          {
            label: '"A 2025 longitudinal study of 15,000 students found..." This is strongest as ___',
            options: ['Data-based evidence with strong credibility potential', 'Anecdotal support only', 'Circular reasoning', 'Pathos only']
          },
          {
            label: '"Because two variables rise together, one causes the other." This likely commits ___',
            options: ['Correlation-causation error', 'Concession', 'Ethos appeal', 'Rogerian structure']
          }
        ],
        correctAnswers: ['Overgeneralization from anecdotal evidence', 'Data-based evidence with strong credibility potential', 'Correlation-causation error'],
        hint1: 'One uncle is not everyone.',
        hint2: 'Large longitudinal sample is strong data.',
        hint3: 'Association is not automatic causation.',
        explanation: 'Single anecdote overgeneralizes. Large long-term study is credible data. Correlation does not prove causation.'
      }
    },
    {
      id: 'elcer1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Claims & Evidence in Reading

- In MC passages, find the **main claim** first, then map each paragraph's support
- Distinguish **what the author says** from **how well it is supported**
- Watch for distractors that cite details not tied to the central claim
- Evaluate source credibility and whether evidence is representative
- If a question asks "the primary purpose of paragraph 4," think function: evidence, concession, rebuttal, transition, etc.
- Fast annotation with C/E/CA/R saves time and improves accuracy
      `
    },
    {
      id: 'elcer1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An author argues that urban parks reduce crime. She cites one neighborhood where crime fell after a park opened, but gives no broader data. Which evaluation is strongest?',
            options: [
              'The evidence is conclusive because the example is vivid.',
              'The evidence is suggestive but insufficient; one case cannot establish a general causal claim.',
              'The argument is invalid because anecdotes are never allowed.',
              'The claim is strong because it includes pathos.'
            ],
            correctAnswer: 1,
            explanation: 'A single case can illustrate a possibility but cannot prove a broad causal claim. Strong support would require wider data, controls, and repeated results across contexts.'
          },
          {
            question: 'A passage begins with a policy claim, then presents statistics, then acknowledges critics, then explains why the policy still stands. What is the best structural description?',
            options: [
              'Narrative only',
              'Claim → Evidence → Concession → Rebuttal',
              'Description → Definition → Anecdote',
              'Counterclaim → Refutation → No thesis'
            ],
            correctAnswer: 1,
            explanation: 'The sequence matches a standard argumentative progression: state claim, support it, acknowledge opposing views, and rebut them. Recognizing this structure helps answer rhetorical function questions.'
          }
        ]
      }
    }
  ]
};
