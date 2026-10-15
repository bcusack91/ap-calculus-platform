export const englangClaimsEvidencePart6Data = {
  topicSlug: 'englang-claims-evidence',
  sections: [
    {
      id: 'englangc6-intro',
      type: 'text' as const,
      content: `
# 📋 Claims and Evidence

**Part 6 of 7 — Exam Practice: Scoring Claims and Evidence**

---

| Section |
|---------|
| 📖 The Rubric Rows That Score Claims and Evidence |
| Argument Essay: Two Paragraphs, Two Scores |
| Synthesis Essay: A Paragraph That Uses Sources |

> 🔑 **Key Concept:** Each free-response essay is scored out of 6: **Row A** thesis (0–1), **Row B** evidence and commentary (0–4), and **Row C** sophistication (0–1). Two-thirds of the points sit in Row B, and the difference between its levels is mostly about **commentary**: whether you explain how your evidence supports a line of reasoning, and whether you do it consistently.
`
    },
    {
      id: 'englangc6-rubric',
      type: 'text' as const,
      content: `
## 📖 The Rubric Rows That Score Claims and Evidence

### Row B for the Argument Essay (summarized)

| Score | Evidence | Commentary |
|---|---|---|
| **1** | Mostly general | Summarizes the evidence without explaining how it supports the argument |
| **2** | Some specific, relevant evidence | Explains how some evidence relates to the argument, but there is no line of reasoning, or it is faulty |
| **3** | Specific evidence for all claims in a line of reasoning | Explains how **some** of the evidence supports the line of reasoning |
| **4** | Specific evidence for all claims in a line of reasoning | **Consistently** explains how the evidence supports the line of reasoning |

### What Changes for the Synthesis Essay

The synthesis rubric adds a source requirement. At score 1, the response draws on at least two of the provided sources. From score 2 upward, it must draw evidence from **at least three** of the provided sources, and scores 3 and 4 require **specific** evidence from them. Cite sources by letter, such as (Source C), or by the author's name.

### Rows A and C

- **Row A (0–1):** a thesis that responds to the prompt with a defensible position. Restating the prompt, summarizing, or not taking a position earns 0.
- **Row C (0–1):** sophistication of thought. On the argument and synthesis essays, routes include crafting a nuanced argument that consistently identifies and explores complexities or tensions, articulating the implications or limitations of the argument by situating it in a broader context, making effective rhetorical choices that consistently strengthen the argument, or employing a style that is consistently vivid and persuasive. The point is earned through the response as a whole, not by a single phrase.

> 🔑 **AP Connection:** The rubric scores the whole essay, not single paragraphs. The paragraphs in this part are labeled with the level they would support **if the whole essay worked the same way**.
`
    },
    {
      id: 'englangc6-argument',
      type: 'text' as const,
      content: `
## Argument Essay: Two Paragraphs, Two Scores

**Prompt:** In "Corn-pone Opinions" (written 1901), Mark Twain claims that people's opinions largely follow the views of the groups they depend on. Write an essay that argues your position on the extent to which Twain's claim is valid.

**Student thesis (Row A, 1 point):** *Twain's claim holds, and with more force than he gave it: people now depend less on a group for their income than for their sense of belonging, and that dependence shapes opinion even when nothing material is at stake.*

### Student Model 1: Row B, 2 level

> Twain is right that people get their opinions from other people. For example, many people vote the same way as their parents. Also, people follow trends, like when everyone at my school started wearing the same brand of sneakers. Social media makes this even worse because people see what their friends post. This shows that Twain's claim is valid and people do not really think for themselves.

| Feature | Comment |
|---|---|
| Evidence | Relevant, but "many people" and "social media" are general; the sneaker example is the only specific one |
| Commentary | "This shows that Twain's claim is valid" asserts the link without explaining it |
| Line of reasoning | Three unconnected examples; none builds on the one before |
| Fit with thesis | The thesis is about *belonging*, but the paragraph never explains why the examples show dependence on belonging |

### Student Model 2: Row B, 4 level

> **(1)** Twain is right that opinions follow dependence, but the dependence that matters most is social rather than financial. **(2)** Jerry's "corn pone" is a livelihood: a man echoes his employer because disagreement could cost him his bread. **(3)** Yet in Solomon Asch's experiments in the 1950s, college students asked which of three lines matched a fourth went along with a group's obviously wrong answer on about a third of the trials, though no one's income depended on the answer. **(4)** The students risked only a few minutes of awkwardness among strangers, and that was enough. **(5)** If so small a social cost can bend a judgment about the length of a line, the larger cost of losing friends must bend opinions on politics, where the right answer is not printed on a card. **(6)** Twain's claim holds, then, with more force than he gave it: the corn pone people protect today is approval itself.

| Sentence | Role | Why it earns credit |
|---|---|---|
| 1 | Claim | Accepts Twain's claim and **refines** it, which sets up the paragraph's line of reasoning |
| 2 | Evidence from the text | Uses Twain's own example accurately and briefly |
| 3 | Specific evidence | A named study with a concrete result |
| 4 | Commentary | Points out what the evidence shows: the stakes were tiny |
| 5 | Commentary | Reasons from the small case to the larger one the prompt cares about |
| 6 | Commentary tied to thesis | Returns to the thesis in Twain's own image |

The two paragraphs agree with Twain. What separates them is not the position but the **explanation**: Model 2 tells the reader why each piece of evidence matters and how it leads to the next step. Model 2's refinement of Twain, and its move from a laboratory to political life, also points toward the complexity that Row C rewards.
`
    },
    {
      id: 'englangc6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature most clearly accounts for the difference in Row B level between Student Model 1 and Student Model 2?',
            options: [
              'Model 2 explains how each piece of evidence advances one line of reasoning',
              'Model 2 includes a larger number of examples from different areas of life',
              'Model 2 takes a more favorable position toward Twain than Model 1 takes',
              'Model 2 opens with a direct quotation from Twain before stating its claim'
            ],
            correctAnswer: 0,
            explanation: 'Row B rewards consistent commentary that connects evidence to a line of reasoning, which Model 2 supplies in sentences 4 through 6. Model 1 actually lists more examples, both models agree with Twain, and Model 2 states its claim before it quotes Twain.'
          },
          {
            question: 'In Student Model 2, sentence 3 relates to sentence 2 primarily by',
            options: [
              'restating Jerry\'s point about livelihoods in modern scientific terms',
              'presenting a case of conformity in which no livelihood was at stake',
              'conceding that Twain\'s claim does not hold in experimental settings',
              'qualifying the claim so that it applies only to college-age students'
            ],
            correctAnswer: 1,
            explanation: 'Sentence 2 locates opinion in livelihood, and sentence 3 offers evidence of conformity where income played no part, which supports the claim that social dependence matters most. The experiment does not restate Jerry\'s point, it supports rather than undercuts Twain, and the paragraph goes on to apply it beyond students.'
          },
          {
            question: 'Sentence 5 of Student Model 2 ("If so small a social cost...") functions mainly to',
            options: [
              'introduce evidence from a second study of conformity',
              'concede that the experiment says nothing about politics',
              'restate the findings of sentence 3 in simpler language',
              'reason from a minor case to a far more significant one'
            ],
            correctAnswer: 3,
            explanation: 'The sentence argues that if a trivial cost changes a visible judgment, a larger cost must change opinions on harder questions, which is reasoning from a lesser case to a greater one. It cites no new study, it applies the experiment to politics rather than denying the connection, and it adds an inference rather than restating.'
          }
        ]
      }
    },
    {
      id: 'englangc6-synthesis',
      type: 'text' as const,
      content: `
## Synthesis Essay: A Paragraph That Uses Sources

**Prompt:** Write an essay that develops your position on the role public libraries should play in their communities today. Use at least three of the provided sources.

**Sources (hypothetical, written for this practice):**

| Source | Description |
|---|---|
| **A** | Essay by a public librarian describing patrons who use library computers to apply for jobs |
| **B** | Chart showing that total library visits fell over a decade while attendance at library programs rose |
| **C** | Article by a sociologist arguing that libraries are among the few indoor public places where people can stay without buying anything |
| **D** | Opinion piece by a city council member arguing that money for print books should move to e-books |

### Student Model: Row B, 4 level

> **(1)** A public library's most valuable collection is now its space rather than its shelves. **(2)** Although overall visits have declined, attendance at programs such as job workshops and children's story hours has risen (Source B), which suggests that people come less to borrow and more to gather and learn. **(3)** That shift matters because, as a sociologist observes, the library is one of the few indoor places where anyone can stay without buying anything (Source C). **(4)** For a job seeker with no home internet, like the patrons in Source A, a free seat and a computer can decide whether an application gets sent at all. **(5)** A city council member argues that money spent on print would reach more residents if it went to e-books (Source D), and for reading alone that may be true; yet an e-book cannot provide a warm room, a workshop or a librarian's help, so moving money from space to downloads would cut the very service the attendance figures show is growing. **(6)** Libraries should therefore be funded as community centers first and book collections second.

| Sentence | Move |
|---|---|
| 1 | Claim that answers the prompt |
| 2 | Evidence from Source B, followed by commentary on what the trend means |
| 3 | Source C explains **why** the trend matters, so two sources work together |
| 4 | Source A gives a specific human case of the general point |
| 5 | Source D is conceded in part, then rebutted with reasoning built on Sources B and C |
| 6 | Claim restated with the qualification the paragraph has earned |

### Habits Worth Copying

| Habit | In the model |
|---|---|
| Lead with your claim, not a source | Sentence 1 states a position before any source appears |
| Put sources in conversation | Source C explains Source B's trend |
| Use an opposing source | Source D becomes a concession and rebuttal, not a source to avoid |
| Cite every borrowed idea | Each source is credited in parentheses, even when paraphrased |
`
    },
    {
      id: 'englangc6-input',
      type: 'input-boxes' as const,
      content: `
**Know the Rubric** ✍️

Enter a number for each blank.

**1)** The maximum score in Row B (evidence and commentary) is _______.

**2)** The maximum total score for one AP English Language essay is _______.

**3)** To score 2 or higher in Row B on the synthesis essay, a response must use evidence from at least _______ of the provided sources.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '6', '3'],
        hint1: 'Row B has four levels above zero.',
        hint2: 'Add Row A, Row B and Row C maximums: 1 + 4 + 1.',
        hint3: 'The synthesis prompt itself tells you to use at least this many.',
        explanation: 'Row B runs from 0 to 4, so the essay totals 1 + 4 + 1 = 6. On the synthesis essay, scores of 2 and above require evidence from at least three of the provided sources.'
      }
    },
    {
      id: 'englangc6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the synthesis model, sentence 5 primarily serves to',
            options: [
              'grant part of Source D\'s argument and then answer it',
              'introduce Source D as the strongest support for the claim',
              'shift the paragraph from libraries to the city\'s budget',
              'show that Source D contradicts the figures in Source B'
            ],
            correctAnswer: 0,
            explanation: 'The writer allows that e-books may serve readers well ("for reading alone that may be true") and then argues that cutting space would remove the service that is growing. Source D opposes the claim rather than supporting it, the budget point stays tied to libraries, and Source D never disputes Source B\'s figures.'
          },
          {
            question: 'Which revision of sentence 2 would most weaken the paragraph\'s use of Source B?',
            options: [
              'Deleting the clause about why people now come to the library',
              'Naming the specific programs whose attendance figures rose',
              'Adding the time span over which the chart\'s figures were kept',
              'Moving the source citation to the end of the second sentence'
            ],
            correctAnswer: 0,
            explanation: 'The clause beginning "which suggests" is the commentary that turns Source B\'s trend into support for the claim; without it the sentence only reports data. Naming programs and adding a time span would make the evidence more specific, and moving the citation changes nothing of substance.'
          }
        ]
      }
    }
  ]
};
