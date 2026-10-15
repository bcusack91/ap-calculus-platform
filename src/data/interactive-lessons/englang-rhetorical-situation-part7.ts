export const englangRhetoricalSituationPart7Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'englangr7-intro',
      type: 'text' as const,
      content: `
# 🎯 The Rhetorical Situation (Reading)

**Part 7 of 7 — Synthesis Review: Reading Any Text Through Its Situation**

---

| Section |
|---------|
| 📖 Six Texts, Six Situations |
| A Headnote Routine for Section I and Question 2 |
| Fresh Practice: Wilson's War Message (1917) |
| Final Review Checklist |

> 🔑 **Key Concept:** Every text in this lesson made different choices because it faced a different situation. The skill that transfers to any passage on the exam is a routine: read the headnote, map the six components, find the central tension, and explain each choice as a response to it.
`
    },
    {
      id: 'englangr7-table',
      type: 'text' as const,
      content: `
## 📖 Six Texts, Six Situations

| Text | Exigence | Audience | Central tension | Signature choice |
|---|---|---|---|---|
| Lincoln to Greeley (1862) | Greeley's public criticism | A public divided over emancipation | Keep both sides behind the war | One "paramount object" everyone shares |
| Declaration of Independence (1776) | A vote to separate | "mankind," a "candid world" | Rebellion must look lawful | Appeal to "the Laws of Nature" |
| Paine, *The American Crisis* (1776) | Retreat and expiring enlistments | Discouraged soldiers and citizens | Admit hardship without breaking morale | "summer soldier and the sunshine patriot" |
| Douglass (1852) | Invitation to a Fourth of July event | Sympathetic but complacent Northerners | An honored guest excluded from the celebration | "This Fourth July is yours, not mine." |
| Lincoln, Second Inaugural (1865) | A second term as victory nears | North, South and opponents of slavery | Judge slavery without inviting revenge | "let us judge not, that we be not judged" |
| Anthony (1873) | Indictment for voting | Potential jurors | A defendant must sound like a loyal citizen | "we, the whole people" |

### Patterns Across the Texts

- A **friendly** audience can still be a **difficult** one (Douglass).
- A **divided** audience pushes writers toward shared values (Lincoln in 1862 and 1865).
- A writer in a **weak position** often borrows authority from texts the audience reveres (the Declaration's "Laws of Nature," Anthony's Preamble).
- **Admitting** a difficulty can be more persuasive than denying it when the audience already knows it (Paine).
`
    },
    {
      id: 'englangr7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which two texts from this lesson most clearly borrow authority from a founding document their audiences revered?',
            options: [
              'Douglass\'s speech and Paine\'s essay',
              'Anthony\'s speech and Douglass\'s speech',
              'Paine\'s essay and Lincoln\'s Second Inaugural',
              'Lincoln\'s letter to Greeley and Paine\'s essay'
            ],
            correctAnswer: 1,
            explanation: 'Anthony rereads the Preamble, and Douglass asks whether the principles "embodied in that Declaration of Independence" extend to the enslaved. Paine and the Greeley letter do not build on a founding document in these excerpts.'
          },
          {
            question: 'What do Lincoln\'s letter to Greeley and his Second Inaugural have in common as responses to their situations?',
            options: [
              'Both rely on statistics to persuade a skeptical public',
              'Both seek shared ground with a divided audience',
              'Both were addressed mainly to foreign governments',
              'Both avoid any reference to slavery or emancipation'
            ],
            correctAnswer: 1,
            explanation: 'In 1862 Lincoln names a goal every faction shares, and in 1865 he offers "charity for all" to North and South alike. Neither text relies on statistics or targets foreign governments, and both address slavery directly.'
          }
        ]
      }
    },
    {
      id: 'englangr7-routine',
      type: 'text' as const,
      content: `
## A Headnote Routine for Section I and Question 2

1. **Underline** the writer, date, place and audience named in the headnote.
2. **Ask what happened** that made the text necessary (exigence).
3. **Ask what the audience believes, values or needs**, including where it is divided.
4. **Name the tension**: what makes this situation hard for this writer?
5. **Read the passage** looking for choices that resolve that tension.

## Fresh Practice: Wilson's War Message (1917)

*Headnote: On April 2, 1917, President Woodrow Wilson addressed a joint session of Congress to ask for a declaration of war against Germany. Germany had resumed unrestricted submarine warfare against ships, including American ones, two months earlier. Wilson had won reelection in 1916 in part on the slogan "He kept us out of war," and many Americans still opposed entering the conflict.*

> The world must be made safe for democracy. Its peace must be planted upon the tested foundations of political liberty.
>
> — Woodrow Wilson, address to Congress, April 2, 1917

### Applying the Routine

| Step | Wilson |
|---|---|
| Exigence | Germany's renewed submarine attacks |
| Audience | Congress, which must vote, and a public that had reelected him as a peacekeeper |
| Tension | A president known for keeping the country out of war must ask for war |
| Choice | He frames entry not as revenge for sunk ships but as a cause larger than national interest: making the world "safe for democracy" |

The framing addresses the tension directly. A war for narrow interests would contradict his record; a war for democracy and "political liberty" can be presented as continuous with the values that made him seek peace.
`
    },
    {
      id: 'englangr7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Map Wilson's Situation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Germany\'s resumed submarine attacks are the ___',
            options: ['exigence', 'purpose', 'message', 'audience']
          },
          {
            label: 'Persuading Congress to declare war is the ___',
            options: ['exigence', 'purpose', 'message', 'audience']
          },
          {
            label: 'Wilson\'s 1916 slogan "He kept us out of war" creates a ___ he must overcome',
            options: ['tension', 'concession', 'statistic', 'persona']
          }
        ],
        correctAnswers: ['exigence', 'purpose', 'tension'],
        hint1: 'Which item is the event that prompted the speech?',
        hint2: 'Which item is the action Wilson wants?',
        hint3: 'His own record seems to point the other way.',
        explanation: 'The submarine campaign prompted the address (exigence). A declaration of war is the outcome he seeks (purpose). His reputation as a peacekeeper creates a tension the speech must resolve.'
      }
    },
    {
      id: 'englangr7-checklist',
      type: 'text' as const,
      content: `
## Final Review Checklist

| Skill | Can you... |
|---|---|
| Distinguish components | Separate exigence (what prompted it) from purpose (what it seeks) and message (what it says)? |
| Profile the audience | Name shared values and the divisions within the audience? |
| Find the tension | State in one sentence what makes the situation hard for this writer? |
| Connect choice to situation | Explain why a choice fits this audience at this moment? |
| Use context as commentary | Bring in context only where it explains a choice? |

> 🔑 **AP Connection:** In Section I, wrong options often describe a choice correctly but tie it to the wrong audience or purpose. In the essay, the same skill becomes commentary: "Because her listeners could sit on her jury, Anthony..." is the sentence shape that turns description into analysis.
`
    },
    {
      id: 'englangr7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions on Wilson** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Wilson\'s claim that "The world must be made safe for democracy" primarily serves to',
            options: [
              'present the war as a cause larger than revenge for lost ships',
              'promise Congress that the war will be brief and inexpensive',
              'concede that his earlier policy of neutrality had been wrong',
              'warn Germany that the United States has already begun fighting'
            ],
            correctAnswer: 0,
            explanation: 'By naming democracy rather than sunk ships as the stake, Wilson lifts the war above national grievance, which suits a president known for avoiding war. The sentence makes no promise about cost, admits no error and does not address Germany.'
          },
          {
            question: 'Which detail from the headnote best explains why Wilson needed a large, principled justification?',
            options: [
              'He had been reelected partly as the president who kept the nation out of war',
              'He spoke to a joint session of Congress rather than to the Senate alone',
              'Germany had resumed unrestricted submarine warfare two months earlier',
              'The address was delivered in early April rather than in the winter months'
            ],
            correctAnswer: 0,
            explanation: 'His reputation as a peacekeeper meant a request for war could look like a reversal, so he needed a principle large enough to justify it. The submarine attacks are the exigence, not the source of that difficulty, and the other details do not bear on it.'
          },
          {
            question: 'Which statement best describes a pattern shared by Anthony\'s speech and the Declaration of Independence?',
            options: [
              'Each speaks from a weak position by appealing to an authority the audience accepts',
              'Each was written to persuade foreign governments to recognize a new nation',
              'Each relies mainly on personal anecdote to win over a hostile audience',
              'Each concedes that the opposing side has the stronger legal argument'
            ],
            correctAnswer: 0,
            explanation: 'Colonists in rebellion appealed to the "Laws of Nature," and a woman indicted for voting appealed to the Preamble; both borrow authority their audiences already respect. Neither relies on anecdote or concedes the legal argument, and only the Declaration addressed foreign powers.'
          }
        ]
      }
    }
  ]
}
