export const englangDictionSyntaxPart7Data = {
  topicSlug: 'englang-diction-syntax',
  sections: [
    {
      id: 'englangd7-intro',
      type: 'text' as const,
      content: `
# 🧩 Diction and Syntax

**Part 7 of 7 — Review: The Toolkit, the Method, and Mixed Practice**

---

| Part | What it taught | Main text |
|---|---|---|
| 1 | Diction dimensions and syntax choices; pairing them in analysis | Short models |
| 2 | Denotation, connotation, register, specificity, plain and learned words | Roosevelt's war message, 1941, and its draft |
| 3 | Clauses, coordination and subordination, loose and periodic sentences, balance | Johnson to Chesterfield, 1755 |
| 4 | Punctuation, sentence length, repetition patterns, ellipsis | Thoreau, *Walden*, 1854 |
| 5 | Older meanings, combined analysis, seven misconceptions | Roosevelt, Johnson, Thoreau, Lincoln |
| 6 | Section I passage set and a Row B 4 analysis paragraph | Wilson's war message, 1917 |

> 🔑 **Key Concept:** Every question about diction or syntax reduces to one sequence: **what is the choice, what does it do here, and why does that matter to this audience and purpose?**
`
    },
    {
      id: 'englangd7-toolkit',
      type: 'text' as const,
      content: `
## The Toolkit

### Diction (Skill 7.A)

| Term | Quick test |
|---|---|
| **Denotation / connotation** | Swap in a neutral synonym; what is lost? |
| **Register** | Formal, neutral, or colloquial? Who is it for? |
| **Specificity** | General ("the Pacific area") or particular ("Guam")? |
| **Plain / learned** | Short Old English word or longer Latin-derived word? |
| **Older meaning** | Does the modern meaning make the sentence's logic work? If not, look for an older one |

### Syntax (Skills 7.B and 7.C)

| Term | What it shows |
|---|---|
| **Coordination** | Equal ideas (and, but, semicolon) |
| **Subordination** | Main versus supporting idea (although, because, which) |
| **Loose / periodic** | Main clause first, or held to the end for emphasis |
| **Parallelism, tricolon, antithesis** | Balance, build, contrast |
| **Inversion** | A moved element gets emphasis |
| **Semicolon / colon / dash** | Balance / explanation / interruption |
| **Anaphora, epistrophe, epizeuxis, antimetabole** | Repetition at the start, at the end, back to back, in reverse |
| **Polysyndeton / asyndeton** | Many conjunctions / none |
| **Ellipsis** | Words left out but understood |

### The Method

1. **Quote** briefly.
2. **Describe** the choice precisely (a term helps, but a clear description is enough).
3. **Explain** the effect in this context, not a generic effect.
4. **Connect** to audience and purpose.
`
    },
    {
      id: 'englangd7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing of a passage and a choice it makes is accurate?',
            options: [
              'Thoreau: an inversion that fronts an insult to a patron',
              'Roosevelt: a draft change from "world history" to "infamy"',
              'Johnson: anaphora on "Last night" to list attacks in order',
              'Wilson: "We do not ride on the railroad; it rides upon us"'
            ],
            correctAnswer: 1,
            explanation: 'Roosevelt revised "a date which will live in world history" to "infamy." The fronted insult is Johnson\'s, the "Last night" anaphora is Roosevelt\'s, and the railroad antimetabole is Thoreau\'s.'
          },
          {
            question: 'A writer revises "The tax is fair, and it is unpopular" to "Although the tax is unpopular, it is fair." The revision mainly',
            options: [
              'makes fairness the main claim and grants the lack of support',
              'gives both ideas equal weight in two independent clauses',
              'removes the writer\'s judgment about whether the tax is fair',
              'adds a new piece of evidence about how popular the tax is'
            ],
            correctAnswer: 0,
            explanation: 'Subordinating "unpopular" in an "although" clause concedes it and puts fairness in the main clause, at the end. The original version gave equal weight; the revision keeps the judgment and adds no evidence.'
          },
          {
            question: 'Which sentence from this topic\'s texts is the best example of form enacting content?',
            options: [
              'Wilson: "We must put excited feeling away."',
              'Johnson: "Such treatment I did not expect."',
              'Thoreau: "instead of a hundred dishes, five"',
              'Roosevelt: "Last night Japanese forces attacked Guam."'
            ],
            correctAnswer: 2,
            explanation: 'Thoreau leaves out the verb as he urges cutting back, so the sentence is itself simplified. Wilson\'s and Johnson\'s sentences are effective but do not imitate their meaning in their shape, and Roosevelt\'s sentence reports one attack in a list.'
          }
        ]
      }
    },
    {
      id: 'englangd7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What the Choice Does** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Johnson: "without one act of assistance, one word of encouragement, or one smile of favour" shrinks his request to ___',
            options: ['almost nothing', 'a formal demand', 'a long grievance', 'a polite question']
          },
          {
            label: 'Thoreau: "We do not ride on the railroad; it rides upon us" reverses its terms to show that ___',
            options: ['the tool now masters its users', 'railroads are unsafe to ride', 'travel has become too slow', 'people prefer walking to riding']
          },
          {
            label: 'Roosevelt: "a date which will live in infamy" replaced "world history" chiefly to change the phrase\'s ___',
            options: ['rhythm', 'connotation', 'grammar', 'length']
          }
        ],
        correctAnswers: ['almost nothing', 'the tool now masters its users', 'connotation'],
        hint1: 'An act, then a word, then only a smile, and he received none of them.',
        hint2: 'Who carries whom after the semicolon?',
        hint3: '"Infamy" adds disgrace that "world history" lacked.',
        explanation: 'Johnson\'s shrinking three-part series reduces his request to almost nothing, Thoreau\'s reversal turns the railroad from servant into master, and Roosevelt\'s revision changes connotation from neutral to disgraceful.'
      }
    },
    {
      id: 'englangd7-stems',
      type: 'text' as const,
      content: `
## Section I Stem Bank: Diction and Syntax

| Stem | How to answer |
|---|---|
| "In context, the word X most nearly means..." | Choose the meaning that makes the sentence's logic work; watch for older senses |
| "The writer's use of the word X suggests..." | Substitute a neutral synonym and name what is lost |
| "The series of clauses beginning with X serves to..." | Explain what the **order** of the series does, not only that it is parallel |
| "The sentence in line X is notable for its..." | Look for contrast with the surrounding sentences: length, structure, register |
| "The dashes (or semicolon, or colon) in line X primarily..." | Name the relationship the mark creates and its effect on the idea |
| "The shift in diction from paragraph 2 to paragraph 3 reflects..." | Name both registers and connect the change to a change in purpose or audience |

## Q2 Paragraph Checklist

- One **claim** per paragraph about a choice and its purpose.
- **Short, embedded** quotations rather than block quotes.
- At least two sentences of **commentary** per piece of evidence.
- Mention the **audience** at least once.
- Let the **order** of your paragraph follow the order of the writer's argument where you can.
`
    },
    {
      id: 'englangd7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A sentence that places its main clause first and adds details after it usually sounds natural and _______.

2) Joining two ideas of equal weight with "and," "but," or a semicolon is called _______.

3) Leaving out words that the reader understands, as in "instead of a hundred dishes, five," is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['conversational', 'coordination', 'ellipsis'],
        hint1: 'It adds detail as it goes, the way people talk.',
        hint2: 'The partner term to subordination.',
        hint3: 'The same word names the three-dot mark for omitted words in a quotation.',
        explanation: 'A sentence that states its main clause first and then adds detail reads like natural, conversational speech, equal joining is coordination, and omitting understood words is ellipsis.'
      }
    },
    {
      id: 'englangd7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which commentary on Johnson\'s final "till" clause would earn the most credit in a Q2 essay?',
            options: [
              'Johnson uses parallel structure with the repeated word "till."',
              'The clause "till I am known, and do not want it" is very effective.',
              'Ending on "do not want it" recasts his grievance as independence from Chesterfield.',
              'Johnson\'s tone is angry throughout his letter to Lord Chesterfield.'
            ],
            correctAnswer: 2,
            explanation: 'This commentary explains what the placement of the final clause does and why it matters to the relationship between the writer and his audience. The other choices identify a device, assert effectiveness, or label tone without explaining a choice.'
          },
          {
            question: 'A passage shifts from long, formal sentences to the short line "Hostilities exist." The most precise description of this shift is a move from',
            options: [
              'detailed report to bare statement of fact',
              'hopeful argument to a despairing complaint',
              'personal story to general philosophy',
              'humorous aside to solemn warning'
            ],
            correctAnswer: 0,
            explanation: 'After an extended account of diplomacy and attacks, the two-word sentence states the legal fact of war without elaboration. The passage is not hopeful, personal, or humorous before the shift.'
          }
        ]
      }
    }
  ]
};
