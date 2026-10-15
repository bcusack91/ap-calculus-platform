export const psychHistoryApproachesPart1Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo1-intro',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 1 of 7 — Psychology as a Science**

> 🔑 **Key Concept:** Psychology is the **scientific study of behavior and mental processes**. It relies on science because everyday intuition is distorted by predictable thinking errors: **hindsight bias**, **overconfidence**, and **confirmation bias** (skill 1.B).

The history of psychology (its founders, early schools, and timelines) is not tested on the current exam; this course starts with how psychologists build reliable knowledge.

### Why common sense is not enough

| Bias | What it is | Everyday example | How science counters it |
|------|-----------|------------------|------------------------|
| **Hindsight bias** | The "I knew it all along" feeling after learning an outcome | After a team loses, fans say the loss was obvious | State predictions BEFORE collecting data |
| **Overconfidence** | Being more sure of our judgments than the evidence justifies | A student is "100% sure" of answers that turn out to be wrong | Measure accuracy instead of trusting confidence |
| **Confirmation bias** | Seeking and remembering evidence that supports what we already believe | Someone who believes full moons cause chaos remembers the wild nights and forgets the calm ones | Test whether the prediction could fail, and count ALL cases |

**A classic demonstration of hindsight bias:** Tell one group that research shows "opposites attract" and another group that research shows "birds of a feather flock together." Both groups tend to rate the finding they heard as obvious. When any outcome feels obvious after the fact, intuition cannot tell us which one is true.
      `
    },
    {
      id: 'histo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Name the Bias** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After a stock market crash, a commentator says, "Anyone could have seen that coming," although he made no such prediction beforehand. This is an example of',
            options: [
              'confirmation bias',
              'hindsight bias',
              'overconfidence',
              'a falsifiable claim'
            ],
            correctAnswer: 1,
            explanation: 'Feeling that an outcome was predictable only after learning it is hindsight bias. He made no prediction in advance, so the "obvious" feeling came after the fact.'
          },
          {
            question: 'A student who believes that people with tattoos are rebellious notices every tattooed classmate who breaks a rule and ignores those who do not. This pattern best illustrates',
            options: [
              'hindsight bias',
              'overconfidence',
              'confirmation bias',
              'random sampling'
            ],
            correctAnswer: 2,
            explanation: 'Attending to evidence that fits an existing belief while overlooking evidence against it is confirmation bias.'
          },
          {
            question: 'Students predict they will finish a group project in 3 days, and they rate their confidence at 95%. It takes them 9 days. Their prediction best shows',
            options: [
              'overconfidence in their own judgment',
              'confirmation bias about the project topic',
              'hindsight bias about the deadline',
              'a hypothesis that cannot be tested'
            ],
            correctAnswer: 0,
            explanation: 'Being far more certain than the evidence justifies is overconfidence. Hindsight bias would involve claiming afterward that the delay was predictable.'
          }
        ]
      }
    },
    {
      id: 'histo1-attitude',
      type: 'text' as const,
      content: `
## The Scientific Attitude

Good scientific thinking combines three habits:

| Habit | Meaning | In practice |
|-------|---------|-------------|
| **Curiosity** | Asking questions about behavior and mental processes | "Does texting while studying lower test scores?" |
| **Skepticism** | Asking "How do you know?" and "What is the evidence?" | Checking whether a claim comes from data or from anecdotes |
| **Humility** | Being willing to be wrong when the data disagree | Dropping a favorite idea when results do not support it |

## From Theory to Hypothesis

- A **theory** is an explanation that organizes many observations and predicts behavior. Example: "Sleep strengthens memories."
- A **hypothesis** is a specific, testable prediction derived from a theory. Example: "Students who sleep 8 hours after studying will recall more words the next day than students who sleep 4 hours."
- A hypothesis must be **falsifiable**: it must be possible for some result to show it is wrong.

| Statement | Falsifiable? | Why |
|-----------|-------------|-----|
| "Students who sleep 8 hours will recall more words than students who sleep 4 hours." | Yes | If the 4-hour group recalls as many words, the prediction fails |
| "Everything happens for a reason." | No | No result could ever count against it |
| "Some people have hidden abilities that disappear whenever they are tested." | No | The claim explains away every failed test |
| "Students who use flashcards will score higher on a quiz than students who reread notes." | Yes | Quiz scores could come out equal or lower |

To be tested, a hypothesis also needs **operational definitions**: precise descriptions of how each variable will be measured, such as "recall = number of words written correctly in 5 minutes." Operational definitions let other researchers **replicate** the study.
      `
    },
    {
      id: 'histo1-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'What one-word term describes a hypothesis that could be shown wrong by some possible result?',
            answer: 'falsifiable',
            acceptableAnswers: ['falsifiability'],
            explanation: 'A falsifiable hypothesis makes a prediction that some outcome could contradict.'
          },
          {
            question: 'What bias is the tendency to look for and remember information that supports what we already believe?',
            answer: 'confirmation bias',
            acceptableAnswers: ['confirmation'],
            explanation: 'Confirmation bias leads people to notice supporting evidence and overlook contradicting evidence.'
          },
          {
            question: 'What is the term for repeating a study, often with different participants, to see whether the results hold?',
            answer: 'replication',
            acceptableAnswers: ['replicate', 'replicating', 'replication study'],
            explanation: 'Replication tests whether a finding is reliable rather than a one-time fluke.'
          }
        ]
      }
    },
    {
      id: 'histo1-evolve',
      type: 'text' as const,
      content: `
## How Conclusions Evolve: Peer Review and Replication

A single study is never the final word. Scientific conclusions change through two processes:

1. **Peer review.** Before a study is published, other experts in the field evaluate its methods, statistics, and conclusions. Reviewers may ask for changes or reject the paper.
2. **Replication.** Other researchers repeat the study, often with different participants or settings. If the result holds, confidence grows. If repeated attempts fail, the original conclusion is revised or abandoned.

**Worked example (hypothetical): a surprising finding.**
- Imagine that a small study reports that holding a warm drink makes people judge strangers as friendlier.
- Peer reviewers check the method and accept the paper.
- Other labs try to replicate it with larger samples. Several find a much smaller effect or none.
- Conclusion: the original claim is weakened. The scientific process, not any single study, decides what psychology accepts.

Researchers can also combine the results of many studies on the same question in a **meta-analysis**, which gives a more trustworthy overall estimate than any one study.

### Common Misconceptions

| Misconception | Correct Understanding |
|---------------|----------------------|
| "Psychology is just common sense." | Common sense often contradicts itself, and hindsight bias makes every result feel obvious |
| "A published study proves a claim." | Findings must survive replication; one study is a starting point |
| "A good theory can explain any result." | A theory that explains every possible result predicts nothing and cannot be tested |
| "Overconfidence only affects careless people." | Experts are often overconfident too, which is why we test predictions |
      `
    },
    {
      id: 'histo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Before publication, experts evaluate a study\'s methods through _____.',
            options: ['peer review', 'replication', 'debriefing', 'random sampling']
          },
          {
            label: 'A specific, testable prediction derived from a theory is a _____.',
            options: ['law', 'hypothesis', 'meta-analysis', 'case study']
          },
          {
            label: 'Saying "I knew it all along" after hearing a result reflects _____.',
            options: ['overconfidence', 'confirmation bias', 'hindsight bias', 'skepticism']
          }
        ],
        correctAnswers: ['peer review', 'hypothesis', 'hindsight bias'],
        hint1: 'Other experts check the work before it appears in a journal.',
        hint2: 'It must be falsifiable.',
        hint3: 'The outcome feels obvious only after it is known.',
        explanation: 'Peer review is expert evaluation before publication. A hypothesis is a testable prediction derived from a theory. "I knew it all along" after the fact is hindsight bias.'
      }
    },
    {
      id: 'histo1-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which hypothesis is falsifiable?',
            options: [
              'Dreams contain hidden meanings that only the dreamer can sense',
              'Teens who use phones after 11 p.m. will sleep fewer hours on average',
              'Every behavior a person shows serves some purpose for that person',
              'People act kindly when it feels right to them in the moment'
            ],
            correctAnswer: 1,
            explanation: 'Phone use and sleep hours can both be measured, and the data could show no difference, so the prediction could fail. The other claims are vague enough that no result could contradict them.'
          },
          {
            question: 'A widely reported study finds that a brief writing exercise raises test scores. Five larger studies in other schools find no effect. How should psychologists treat the original finding?',
            options: [
              'Accept it, because it was published first and passed peer review',
              'Accept it, because larger studies are often less carefully run',
              'Doubt it, because the result did not hold up in repeat attempts',
              'Doubt it, because any writing exercise is too brief to matter'
            ],
            correctAnswer: 2,
            explanation: 'Conclusions evolve through replication. When repeated, larger attempts fail to find the effect, confidence in the original result should drop.'
          }
        ]
      }
    }
  ]
}
