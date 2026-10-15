export const englangIntroRhetoricPart5Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'englangi5-intro',
      type: 'text' as const,
      content: `
# 🗣️ Introduction to Rhetoric

**Part 5 of 7 — Misconceptions and Nuance: What Analysis Is Not**

---

| Section |
|---------|
| 📖 Six Misconceptions About Rhetorical Analysis |
| Purpose Statements That Actually Say Something |
| Speaker vs. Author: Persona in Swift's "A Modest Proposal" |
| AP Connection: Why These Habits Cost Points |

> 🔑 **Key Concept:** Most weak rhetorical analysis is not wrong about the text. It is wrong about the **task**. Students summarize, label appeals or call choices "effective" when the task is to explain how specific choices serve a specific purpose for a specific audience.
`
    },
    {
      id: 'englangi5-myths',
      type: 'text' as const,
      content: `
## 📖 Six Misconceptions About Rhetorical Analysis

| Misconception | Why it is wrong | Better habit |
|---|---|---|
| **"Rhetoric means manipulation."** | Rhetoric is the study of how language achieves purposes. It can serve honest or dishonest ends; analysis describes the means. | Analyze how a choice works, not whether you approve of the writer. |
| **"I have to find ethos, pathos and logos."** | The appeals are one useful lens, but the exam does not require labels; it rewards explaining specific choices. | Name the actual choice: an anecdote, a concession, a shift in pronoun. |
| **"Naming the device is the analysis."** | "Lincoln uses anaphora" is a starting point, not a point. | Add how it works and why it matters. |
| **"Summary shows I understand."** | Retelling the passage restates content without explaining choices. | Ask "why did the writer say it this way?" after every quotation. |
| **"The purpose is to persuade."** | Nearly every argument aims to persuade; the statement says nothing specific. | Persuade **whom** to believe or do **what**? |
| **"This choice is very effective."** | "Effective" is a verdict without evidence. | Show the effect on the audience; the reader will infer effectiveness. |

### Purpose Statements That Actually Say Something

| Vague | Specific |
|---|---|
| Lincoln's purpose is to persuade. | Lincoln seeks to turn the grief of a cemetery dedication into renewed commitment to the war's aims. |
| Twain wants to entertain. | Twain mocks pious advice to the young to expose how much of it values appearances over judgment. |
| The writer informs readers about the library. | The council member urges wary taxpayers to see a library tax as an investment in their own street. |

A specific purpose statement names **the audience**, **the change the writer wants** and often **the tension** the writer must overcome.
`
    },
    {
      id: 'englangi5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Student Sentence** 🔍

Choose the main problem with each sentence from a student's rhetorical analysis. One sentence has no problem.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"In paragraph 2, Douglass explains that the Fourth of July is a celebration that enslaved people cannot share." ___',
            options: ['summary without analysis', 'device label without effect', 'vague purpose statement', 'complete analysis']
          },
          {
            label: '"Douglass uses rhetorical questions and pathos." ___',
            options: ['summary without analysis', 'device label without effect', 'vague purpose statement', 'complete analysis']
          },
          {
            label: '"Douglass\'s purpose is to persuade his audience." ___',
            options: ['summary without analysis', 'device label without effect', 'vague purpose statement', 'complete analysis']
          },
          {
            label: '"By calling the holiday \'your national independence,\' Douglass distances himself from his listeners\' celebration, forcing them to see it from outside." ___',
            options: ['summary without analysis', 'device label without effect', 'vague purpose statement', 'complete analysis']
          }
        ],
        correctAnswers: ['summary without analysis', 'device label without effect', 'vague purpose statement', 'complete analysis'],
        hint1: 'Does the sentence only restate what the text says?',
        hint2: 'A list of devices without effects is labeling.',
        hint3: 'Persuade whom of what? The last sentence names a choice, an effect and an audience.',
        explanation: 'The first restates content. The second names devices without saying what they do. The third gives a purpose so broad it fits any argument. The fourth names a specific choice, its effect and its audience, which is analysis.'
      }
    },
    {
      id: 'englangi5-swift',
      type: 'text' as const,
      content: `
## Speaker vs. Author: Persona in Swift's "A Modest Proposal"

In 1729 Jonathan Swift published a pamphlet whose full title begins *A Modest Proposal for Preventing the Children of Poor People in Ireland from Being a Burden to Their Parents or Country*. The "proposer" writes in the calm voice of a policy expert.

> I have been assured by a very knowing American of my acquaintance in London, that a young healthy child well nursed is at a year old a most delicious, nourishing, and wholesome food, whether stewed, roasted, baked, or boiled; and I make no doubt that it will equally serve in a fricassee, or a ragout.
>
> — Jonathan Swift, *A Modest Proposal* (1729)

### Three Layers to Separate

| Layer | In "A Modest Proposal" |
|---|---|
| **The speaker (persona)** | A reasonable-sounding projector who calmly proposes selling poor children as food |
| **The literal claim** | Ireland's poverty can be solved by eating babies |
| **The author's purpose** | To shock readers into seeing that Irish poverty and the policies of landlords and England already treat the poor as commodities |

The horror comes from a **mismatch**: the gentle, technical diction ("well nursed," "wholesome," "fricassee") is applied to an unthinkable act. The calmer the voice, the more monstrous the idea seems, and the more readers recognize the cold economic reasoning they had accepted in other forms.

> ⚠️ When a passage's voice seems unreasonable, ask whether the **writer** and the **speaker** are the same. Writing "Swift believes children should be eaten" is the most damaging literal misreading possible.

> 🔑 **AP Connection:** Section I sometimes includes satirical or ironic passages, and the essays reward students who explain the gap between what a speaker says and what a writer means. Phrases like "the persona Swift adopts" or "the ironic speaker" signal that you see the layers.
`
    },
    {
      id: 'englangi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the excerpt from "A Modest Proposal," the list "stewed, roasted, baked, or boiled" primarily serves to',
            options: [
              'make the horror worse by treating it as an ordinary recipe',
              'demonstrate the speaker\'s expertise in Irish cooking traditions',
              'offer readers practical choices for carrying out the proposal',
              'add humor that softens the writer\'s criticism of England'
            ],
            correctAnswer: 0,
            explanation: 'Listing cooking methods in a matter-of-fact tone makes the unthinkable sound routine, which shocks the reader into recognizing the cruelty. The detail is ironic, not practical, and it sharpens the satire rather than softening it.'
          },
          {
            question: 'Which statement best distinguishes the speaker of "A Modest Proposal" from its author?',
            options: [
              'The speaker defends the plan sincerely; Swift uses him to attack its cruelty',
              'The speaker is Irish and poor; Swift is a wealthy English landlord who opposes him',
              'The speaker is joking openly; Swift intends the plan to be adopted as written',
              'The speaker reports the plan secondhand; Swift invented the plan in his own voice'
            ],
            correctAnswer: 0,
            explanation: 'The persona earnestly advances the proposal, while Swift uses that earnestness to expose how the poor were already treated. Swift did not intend the plan literally, and the proposer is not presented as poor or as merely reporting.'
          }
        ]
      }
    },
    {
      id: 'englangi5-ap',
      type: 'text' as const,
      content: `
## AP Connection: Why These Habits Cost Points

On the rhetorical analysis essay, the **evidence and commentary** row (0–4 points) separates responses by the quality of explanation:

| Score in Row B | Typical description |
|---|---|
| 1 | Mostly summary; commentary repeats or is missing |
| 2 | Some evidence, but commentary is general, often a list of devices |
| 3 | Specific evidence with commentary that explains how some choices work |
| 4 | Specific evidence with consistent commentary that explains how multiple choices contribute to the writer's purpose and line of reasoning |

Each misconception in this part keeps a response stuck at 1 or 2. Summary has no commentary; labels without effects are general; vague purposes make it impossible to connect choices to anything. The **sophistication** point (Row C) goes to responses that, for example, explain the significance of choices within the broader situation or explain a complex purpose such as Swift's irony.

### A Quick Self-Check for Every Body Paragraph

- [ ] Does the topic sentence name what the writer **does**, not just what the text is about?
- [ ] Does every quotation get at least one sentence of **how** and **why**?
- [ ] Does the paragraph end by tying the choice to the writer's **specific** purpose?
`
    },
    {
      id: 'englangi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "The author uses ethos, pathos and logos to persuade the reader, which is very effective." What is the most important revision?',
            options: [
              'Add a fourth appeal such as kairos to cover more of the passage',
              'Replace the labels with specific choices and what they do',
              'Move the sentence to the conclusion, where summary is expected',
              'Define each of the three appeals before discussing the passage'
            ],
            correctAnswer: 1,
            explanation: 'The sentence earns little because it labels appeals and asserts effectiveness without evidence. Naming concrete choices and explaining how each works moves it toward analysis; more labels or definitions would not.'
          },
          {
            question: 'Which purpose statement would best support a rhetorical analysis of the Gettysburg Address?',
            options: [
              'Lincoln wants to persuade his audience at Gettysburg.',
              'Lincoln seeks to turn mourners\' grief into renewed commitment to the war.',
              'Lincoln explains what happened during the three days of the battle.',
              'Lincoln uses many rhetorical devices throughout the speech to make his message more effective.'
            ],
            correctAnswer: 1,
            explanation: 'The strong statement names the audience (mourners), the change Lincoln seeks (renewed commitment) and the tension (grief). The others are too vague, inaccurate about the speech\'s content or a list of devices.'
          },
          {
            question: 'A passage\'s speaker praises a cruel policy in a calm, reasonable voice. What should a careful reader consider first?',
            options: [
              'Whether the writer is using an ironic persona',
              'Whether the passage is a reliable source of facts',
              'Whether the speaker has expert qualifications',
              'Whether the audience was hostile or friendly'
            ],
            correctAnswer: 0,
            explanation: 'A calm voice defending cruelty is a classic signal of satire, so the first question is whether the speaker\'s views are the writer\'s. Reliability, credentials and audience matter only after that layer is settled.'
          }
        ]
      }
    }
  ]
}
