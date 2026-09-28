export const satRWStrategyPart3Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw3-intro',
      type: 'text' as const,
      content: `# Transitions & Logical Flow

**Part 3 of 7 — Connecting Ideas Effectively**

Transition questions test whether you understand the logical relationship between sentences or paragraphs. They are among the most frequent writing questions on the Reading and Writing section.

### Transition Categories

| Relationship | Transitions | Example |
|---|---|---|
| **Continuation/Addition** | furthermore, moreover, additionally, also | "She excels in math. Moreover, she leads the debate team." |
| **Contrast** | however, nevertheless, on the other hand, yet | "The plan was expensive. However, it produced results." |
| **Cause/Effect** | therefore, consequently, as a result, thus | "Sales dropped 40%. Consequently, the company restructured." |
| **Example/Illustration** | for instance, for example, specifically | "Many species are threatened. For example, the vaquita population fell below 10." |
| **Concession** | admittedly, granted, although | "Admittedly, the sample size was small." |
| **Sequence** | first, then, finally, subsequently | "First, gather data. Then, analyze the results." |

### Strategy: Cover the Transition, Predict the Relationship

1. Read the sentence BEFORE the transition
2. Read the sentence AFTER the transition
3. Ask: Are these ideas **continuing**, **contrasting**, or **cause/effect**?
4. Choose the transition that matches

### Example

"The city invested \\$50 million in public transit. _______, ridership increased by 35% the following year."

- Before: investment happened
- After: positive result occurred
- Relationship: **cause → effect**
- Answer: **As a result** (not "However," "Nevertheless," or "For example")

### SAT Trap ⚠️

"However" is the most commonly chosen WRONG answer. Students pick it because it "sounds academic." Only use "however" when the second sentence **contradicts or contrasts** with the first.`
    },
    {
      id: 'rw3-quiz',
      type: 'multiple-choice' as const,
      content: '**Transitions Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The new policy reduced carbon emissions by 15%. _______, manufacturing output remained unchanged, dispelling fears of economic harm." Choose the best transition.',
            options: ['Moreover', 'Therefore', 'For example', 'Instead'],
            correctAnswer: 0,
            explanation: 'The first sentence gives a positive result (emissions down). The second adds ANOTHER positive result (output stayed the same). "Moreover" adds supporting information. Steady output is not caused by lower emissions ("Therefore"), is not an example of them ("For example"), and does not replace them ("Instead").'
          },
          {
            question: '"Critics argued the study was flawed due to its small sample size. _______, the researchers conducted a follow-up study with 10,000 participants and found identical results."',
            options: ['In response', 'Similarly', 'Meanwhile', 'Moreover'],
            correctAnswer: 0,
            explanation: 'The second sentence directly addresses the criticism from the first. "In response" captures this action-reaction relationship. "Similarly" implies the same kind of thing happened, "Meanwhile" implies an unrelated event at the same time, and "Moreover" would add another criticism.'
          },
          {
            question: 'The transition "nevertheless" is most similar in meaning to:',
            options: ['Even so', 'As a result', 'In addition', 'Specifically'],
            correctAnswer: 0,
            explanation: '"Nevertheless" means "despite what was just said" — it introduces a contrasting result that goes against expectation. It belongs in the contrast/concession category alongside "however" and "yet."'
          }
        ]
      }    },
    {
      id: 'rw3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Transition Mastery

### Worked Example 1: Predicting the Relationship

| Sentence 1 | Sentence 2 | Relationship | Correct Transition |
|---|---|---|---|
| "Sales increased 20%." | "The company hired 50 new employees." | Cause → Effect | As a result |
| "Sales increased 20%." | "Profits fell." | Contrast | However / Yet |
| "Sales increased 20%." | "Revenue grew from \\$1M to \\$1.2M." | Example / Restatement | Specifically / In fact |
| "Sales increased 20%." | "Its main rival's sales also rose 20%." | Similarity | Similarly / Likewise |

### Worked Example 2: The "However" Trap

**Students overuse "However" because it sounds academic.** Test yourself:

| Sentence Pair | "However" correct? | Right Transition |
|---|---|---|
| "The plan is expensive. _____, it produces results." | ✅ Yes | However (contrast: cost vs. effectiveness) |
| "The plan is expensive. _____, it requires significant funding." | ❌ No | Indeed / In fact (continuation, not contrast) |
| "The plan is expensive. _____, the company invested in it." | ✅ Yes | However or Nevertheless (despite the cost) |
| "The plan is expensive. _____, the team looked for ways to cut costs." | ❌ No | Therefore (cause → response) |

### Transition Decision Flowchart

| Is sentence 2… | Use |
|---|---|
| Adding more of the SAME idea? | Moreover, Furthermore, Additionally |
| CONTRASTING or COMPLICATING sentence 1? | However, Nevertheless, On the other hand |
| A RESULT of sentence 1? | Therefore, Consequently, As a result |
| An EXAMPLE of sentence 1's claim? | For instance, For example, Specifically |
| A CONCESSION before a counter? | Admittedly, Granted, While it is true that |`
    },
    {
      id: 'rw3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Transitions Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: '"The vaccine was 95% effective in trials. _____, the company applied for emergency authorization." Best transition:',
            options: ['Accordingly', 'However', 'For example', 'Nevertheless'],
            correctAnswer: 0,
            explanation: 'High effectiveness → applying for authorization. This is a cause/effect relationship, and "Accordingly" means "as a logical result." "However" and "Nevertheless" signal contrast, which does not fit a result the evidence supports, and the application is not an example of effectiveness.'
          },
          {
            question: '"The evidence overwhelmingly supports the theory. _____, not all scientists are convinced." Best transition:',
            options: ['Nevertheless', 'Therefore', 'Consequently', 'For instance'],
            correctAnswer: 0,
            explanation: 'Despite overwhelming evidence, some scientists disagree. "Nevertheless" captures this "despite what you\'d expect" contrast. "Therefore" and "Consequently" would claim the evidence CAUSED the doubt, and the doubt is not an instance of the evidence.'
          },
          {
            question: '"The city built 5 new parks. _____, it expanded the public transit system." Best transition:',
            options: ['In addition', 'However', 'As a result', 'For example'],
            correctAnswer: 0,
            explanation: 'Both sentences describe city improvements — this is a continuation/addition relationship. "In addition" adds another similar action.'
          }
        ]
      }
    },
    {
      id: 'rw3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Transition Check** — Select the correct transition.',
      exercise: {
        dropdowns: [
          '"The data is strong. _____, more research is needed." [Nevertheless|Therefore|For example|Moreover]',
          '"She trained for months. _____, she won the race." [As a result|However|For instance|Admittedly]',
          '"Coral reefs are declining. _____, Arctic ice is melting." [Similarly|However|Therefore|For example]',
          '"The policy was popular. _____, 80% of voters supported it." [In fact|However|Nevertheless|Therefore]'
        ],
        correctAnswers: ['Nevertheless', 'As a result', 'Similarly', 'In fact'],
        hint1: 'Strong data BUT more research needed = contrast.',
        hint2: 'Training → winning = cause → effect.',
        hint3: 'Two parallel environmental problems = similar/addition.',
        explanation: 'Strong data but more needed = Nevertheless. Training → winning = As a result. Two similar problems = Similarly. Specific number supporting a claim = In fact.'
      }
    },
    {
      id: 'rw3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Relationship | Transitions |
|---|---|
| Addition | Moreover, Furthermore, In addition, Also |
| Contrast | However, Nevertheless, On the other hand, Yet |
| Cause/Effect | Therefore, Consequently, As a result, Accordingly |
| Example | For instance, For example, Specifically |
| Concession | Admittedly, Granted, While true |
| #1 trap | "However" when the relationship is actually addition |

*Next: Supplements, Colons, and Lists →*`    }
  ]
};