export const englangIntroRhetoricPart7Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'englangi7-intro',
      type: 'text' as const,
      content: `
# 🗣️ Introduction to Rhetoric

**Part 7 of 7 — Synthesis Review: From First Read to Finished Analysis**

---

| Section |
|---------|
| 📖 The Whole Workflow in One Table |
| Key Vocabulary |
| Fresh Passage: Emerson's "Self-Reliance" |
| Final Checklist |

> 🔑 **Key Concept:** Rhetorical analysis is one repeatable process: identify the situation, state a specific purpose, find the choices that serve it, trace how they are ordered, and explain each one's effect on the audience. This part puts the pieces from Parts 1–6 together and tests them on a new text.
`
    },
    {
      id: 'englangi7-workflow',
      type: 'text' as const,
      content: `
## 📖 The Whole Workflow in One Table

| Step | Question to ask | Where you practiced it |
|---|---|---|
| 1. Situation | Who is writing, to whom, prompted by what, in what context? | Part 1; the Gettysburg table in Part 3 |
| 2. Purpose | What specific change does the writer want in this audience? | Purpose statements in Part 5 |
| 3. Choices | Which choices of evidence, order and style serve that purpose? | The four big ideas in Part 2 |
| 4. Reasoning | How does the text move, and where does it turn? | Past, present and future in the Gettysburg Address |
| 5. Tone and irony | Does the speaker mean what the words say? | Twain in Part 4 and Swift in Part 5 |
| 6. Commentary | For each choice, how does it work and why does it matter here? | The model paragraphs in Parts 3 and 6 |

## Key Vocabulary

| Term | Meaning | Example from this lesson |
|---|---|---|
| **Rhetorical choice** | Any decision a writer makes about content, order or language | Lincoln placing "But, in a larger sense" after "fitting and proper" |
| **Function** | What a part of a text does in the whole | Twain's first paragraph sets up expectations he will subvert |
| **Antithesis** | Opposites in balanced form | "what we say here... what they did here" |
| **Antimetabole** | Words repeated in reversed order | "ask not what your country can do for you—ask what you can do for your country" |
| **Verbal irony** | Saying one thing while meaning another | "Always obey your parents, when they are present." |
| **Persona** | The voice a writer adopts, which may differ from the writer's own | Swift's calm projector |
| **Commentary** | Explanation of how evidence supports a line of reasoning | The how and why sentences in a model paragraph |
| **Sophistication** | Complex understanding shown consistently (Row C) | Linking Kennedy's portrait of his generation to his youth and the Cold War |
`
    },
    {
      id: 'englangi7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing correctly matches a text from this lesson with the choice most central to its purpose?',
            options: [
              'Gettysburg Address: overturning the ceremony\'s expected role',
              'Advice to Youth: statistics about children\'s behavior',
              'A Modest Proposal: a speaker who openly admits the joke',
              'Kennedy\'s inaugural: a detailed list of policy proposals'
            ],
            correctAnswer: 0,
            explanation: 'Lincoln\'s turn from "fitting and proper" to "we can not dedicate" is the speech\'s central move. Twain uses ironic maxims, not statistics; Swift\'s speaker never admits the joke; and the excerpts from Kennedy contain no policy list.'
          },
          {
            question: 'A student\'s body paragraph quotes the passage three times and follows each quotation with a sentence beginning "This shows that the writer uses..." What is the most likely weakness?',
            options: [
              'Too many quotations for a single paragraph',
              'Commentary that labels choices without explaining them',
              'A thesis that does not take a defensible position',
              'Evidence drawn from too many parts of the passage'
            ],
            correctAnswer: 1,
            explanation: '"This shows that the writer uses..." names a device and stops, so the commentary never explains how the choice works or why it matters. Three quotations is reasonable, and nothing in the description concerns the thesis.'
          }
        ]
      }
    },
    {
      id: 'englangi7-emerson',
      type: 'text' as const,
      content: `
## Fresh Passage: Emerson's "Self-Reliance"

*Headnote: In "Self-Reliance," published in his* Essays *(1841), Ralph Waldo Emerson urges readers to trust their own thinking rather than conform to society or to their own past opinions.*

> A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines. ... Is it so bad then to be misunderstood? Pythagoras was misunderstood, and Socrates, and Jesus, and Luther, and Copernicus, and Galileo, and Newton, and every pure and wise spirit that ever took flesh. To be great is to be misunderstood.
>
> — Ralph Waldo Emerson, "Self-Reliance" (1841)

### Guided Analysis

| Step | Applied to Emerson |
|---|---|
| Situation | An essayist addressing readers who fear looking inconsistent or being judged |
| Purpose | To free readers from the fear of contradicting themselves or being misunderstood |
| Choice 1 | "hobgoblin of little minds": a mocking, almost childish image turns consistency into a petty fear |
| Choice 2 | A **rhetorical question** ("Is it so bad...?") voices the reader's worry so it can be answered |
| Choice 3 | A long list of thinkers joined by repeated "and" (**polysyndeton**) piles up examples until the pattern feels undeniable |
| Choice 4 | The short closing sentence, "To be great is to be misunderstood," compresses the list into a maxim |
| Line of reasoning | Mock the fear, voice the doubt, overwhelm it with examples, then state the conclusion |

Note how the qualifier "**foolish** consistency" matters: Emerson does not reject all consistency, only the kind that keeps a person from changing a mistaken mind. A careful reader notices the modifier before claiming Emerson "rejects consistency."
`
    },
    {
      id: 'englangi7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What Each Choice Does in Emerson** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Is it so bad then to be misunderstood?" is a ___',
            options: ['rhetorical question', 'concession', 'antithesis', 'statistic']
          },
          {
            label: 'Repeating "and" in "and Socrates, and Jesus, and Luther, and Copernicus" makes the list feel ___',
            options: ['hesitant', 'piled up', 'ironic', 'casual']
          },
          {
            label: 'The list of misunderstood thinkers functions as ___',
            options: ['evidence for a claim', 'a concession to critics', 'a definition of terms', 'a shift in audience']
          },
          {
            label: '"To be great is to be misunderstood" functions as ___',
            options: ['an opening question', 'a concluding maxim', 'a counterargument', 'a statement of fact']
          }
        ],
        correctAnswers: ['rhetorical question', 'piled up', 'evidence for a claim', 'a concluding maxim'],
        hint1: 'The question expects the reader to supply the answer.',
        hint2: 'Each "and" gives one more name its own weight.',
        hint3: 'The examples support a generalization, which the last sentence then states as a rule.',
        explanation: 'The question voices the reader\'s doubt. Repeating "and" between items gives each name its own weight, so the examples pile up until the pattern feels undeniable. The thinkers are examples offered as evidence, and the final sentence compresses them into a maxim that concludes the reasoning.'
      }
    },
    {
      id: 'englangi7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

### Before You Write
- Read the headnote and identify the situation in one line.
- Write a purpose statement that names an audience and a change.
- Mark the turns and the qualifiers ("foolish," "when they are present," "in a larger sense").

### While You Write
- Organize body paragraphs by what the writer **does**, in the order it serves the purpose.
- Quote briefly and follow every quotation with **how** and **why**.
- Keep the speaker and the author separate when the voice is ironic.

### After You Write
- Does the thesis analyze choices rather than list appeals?
- Would a reader who has not seen the passage understand why each choice matters?

> 🔑 **AP Connection:** The process is the same in Section I and Section II. Multiple-choice questions ask you to recognize a choice's function; the rhetorical analysis essay asks you to explain it in your own sentences.
`
    },
    {
      id: 'englangi7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions on Emerson** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The list of thinkers from Pythagoras to Newton primarily serves to',
            options: [
              'show that misunderstanding has accompanied greatness across history',
              'argue that scientists are misunderstood more often than poets',
              'prove that the reader will become famous by being misunderstood',
              'suggest that religious leaders opposed the scientists named'
            ],
            correctAnswer: 0,
            explanation: 'The varied examples, from ancient philosophers to modern scientists and religious figures, support the generalization that great minds are often misunderstood. The list does not rank groups, promise fame or set the figures against each other.'
          },
          {
            question: 'The word "foolish" in "A foolish consistency" is significant because it',
            options: [
              'limits the criticism to one kind of consistency',
              'shows that Emerson opposes every form of consistency',
              'introduces the essay\'s main audience of statesmen',
              'signals a shift from an ironic tone to a sincere one'
            ],
            correctAnswer: 0,
            explanation: 'The modifier narrows the target: Emerson criticizes consistency that is foolish, not consistency itself. Statesmen appear as admirers of that consistency, not as the audience, and the passage does not shift from irony to sincerity.'
          },
          {
            question: 'Which statement best describes the passage\'s line of reasoning?',
            options: [
              'It concedes a point to critics and then qualifies its own claim',
              'It voices a doubt, then answers it with examples and a rule',
              'It defines a term, then applies it to the statesmen of its era',
              'It narrates a personal experience and then draws a lesson from it'
            ],
            correctAnswer: 1,
            explanation: 'The rhetorical question raises the reader\'s doubt, the list of thinkers answers it and the final sentence generalizes. There is no concession, extended definition or personal narrative.'
          }
        ]
      }
    }
  ]
}
