export const englangRhetoricalSituationPart2Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'englangr2-intro',
      type: 'text' as const,
      content: `
# 🎯 The Rhetorical Situation (Reading)

**Part 2 of 7 — The Six Components in Depth**

---

| Section |
|---------|
| 📖 Exigence, Context, Purpose and Message: Telling Them Apart |
| The Audience: Shared and Individual Beliefs, Values and Needs |
| The Writer: Perspective and Relationship to the Audience |
| Worked Example: Mapping One Text |

> 🔑 **Key Concept:** The CED names six components of the rhetorical situation: **exigence, audience, writer, purpose, context and message**. Students often blur four of them together. Precise distinctions let you explain *why* a writer made a choice instead of just restating the topic.
`
    },
    {
      id: 'englangr2-four',
      type: 'text' as const,
      content: `
## 📖 Exigence, Context, Purpose and Message

These four are the easiest to confuse because each one can be stated as a sentence about "the issue."

| Component | Definition | Test question | Example (a letter to the editor about a closed bridge) |
|---|---|---|---|
| **Exigence** | The specific event, problem or need that prompts the writer to write **now** | What happened that made this text necessary? | The county closed the river bridge last week, cutting a 3-minute trip to 25 minutes |
| **Context** | The wider circumstances (historical, cultural, political) in which the text is written and read | What larger conditions shape how readers will receive it? | A tight county budget, an election next month, years of deferred road repair |
| **Purpose** | What the writer wants the audience to think, feel or do | What change is the writer trying to cause? | To push commissioners to fund a temporary span before winter |
| **Message** | The main idea or claim the text communicates | What does the text actually say? | The bridge closure is an emergency that cannot wait for next year's budget |

### Three Distinctions That Matter

1. **Exigence vs. context.** Exigence is the spark; context is the room the spark lands in. The bridge closing is the exigence; the election and the budget are context.
2. **Purpose vs. message.** The message is *what is said*; the purpose is *what the writer wants to happen*. A message can be "the closure is an emergency" while the purpose is "get funding approved."
3. **Exigence vs. purpose.** Exigence looks backward (what prompted this?); purpose looks forward (what should happen next?).

> ⚠️ "The exigence is to persuade people" mixes up two components. Persuading is a purpose. An exigence is always an event, problem or need.
`
    },
    {
      id: 'englangr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯

A school nurse writes to parents two days after a measles case is confirmed at the school. Her letter states that vaccination protects classmates who cannot be vaccinated and asks families to check their records by Friday. Many local families have been debating vaccine exemptions at school board meetings all year.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the exigence of the nurse\'s letter?',
            options: [
              'A year of debate over exemptions at board meetings',
              'The confirmed measles case at the school',
              'Her wish that families check their records by Friday',
              'The idea that vaccines protect vulnerable classmates'
            ],
            correctAnswer: 1,
            explanation: 'The confirmed case is the specific event that makes the letter necessary now. The year of debate is context, checking records by Friday is the purpose, and the protection of classmates is the message.'
          },
          {
            question: 'Which statement best describes the difference between the letter\'s message and its purpose?',
            options: [
              'The message is the debate; the purpose is the case',
              'The message is her claim; the purpose is the action she seeks',
              'The message is for parents; the purpose is for the school board',
              'The message is factual; the purpose is emotional'
            ],
            correctAnswer: 1,
            explanation: 'The message is the claim that vaccination protects vulnerable classmates; the purpose is the action she seeks, checking records by Friday. The debate and the case are context and exigence, and nothing suggests a separate audience for each.'
          }
        ]
      }
    },
    {
      id: 'englangr2-audience',
      type: 'text' as const,
      content: `
## The Audience: Shared and Individual Beliefs, Values and Needs

The CED stresses that an audience has **shared** as well as **individual** beliefs, values, needs and backgrounds. A writer has to address what the group has in common while anticipating the differences inside it.

| Term | Meaning | In the nurse's letter |
|---|---|---|
| **Intended audience** | The readers the writer is addressing | Parents of students at the school |
| **Secondary audience** | Others who will read or hear the text | Board members, local reporters |
| **Shared values** | What most of the audience cares about | Their children's safety |
| **Divided beliefs** | Where members of the audience disagree | Whether exemptions should be allowed |
| **Needs** | What the audience requires in order to act | Clear instructions and a deadline |

### Reading Choices Through the Audience

A writer's choices often make sense only once you see the audience's divisions. If the nurse argued about exemptions, she would split her readers. Instead she appeals to the **shared** value (every parent wants the school to be safe) and gives a simple action. A strong reading would say: *by grounding her request in classmates' safety rather than the exemption debate, the nurse speaks to what divided parents share.*

## The Writer: Perspective and Relationship

The **writer** is not just a name. What matters for analysis is the writer's **perspective** (background, experience, position) and **relationship to the audience** (insider or outsider, equal or authority, ally or opponent).

| Writer's relationship | Typical choices |
|---|---|
| Authority speaking to the public | Clear directives, credentials stated briefly |
| Insider speaking to a community | "We," shared references, local detail |
| Outsider or critic speaking to a group | Common ground first, criticism later |
| Member of a marginalized group addressing those with power | Appeals to the audience's own stated principles |

> 🔑 **AP Connection:** Headnotes often describe the writer's position in one phrase ("a former enslaved person addressing an antislavery society," "a scientist writing for a general magazine"). That phrase is evidence. Use it to explain choices, not just to introduce the essay.
`
    },
    {
      id: 'englangr2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Map the Situation** 🔍

A city council member publishes an op-ed the morning after a heat wave knocks out power to 40,000 homes. She argues that the city must bury its power lines, and she urges readers to attend Tuesday's budget hearing. Electricity rates have risen twice this year.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The overnight power outage is the ___',
            options: ['exigence', 'context', 'purpose', 'message']
          },
          {
            label: 'Two rate increases this year are part of the ___',
            options: ['exigence', 'context', 'purpose', 'message']
          },
          {
            label: 'Getting readers to attend Tuesday\'s hearing is the ___',
            options: ['exigence', 'context', 'purpose', 'message']
          },
          {
            label: '"The city must bury its power lines" is the ___',
            options: ['exigence', 'context', 'purpose', 'message']
          }
        ],
        correctAnswers: ['exigence', 'context', 'purpose', 'message'],
        hint1: 'Which item is the specific event that prompted writing this morning?',
        hint2: 'Which item is a background condition that affects how readers react?',
        hint3: 'One item is an action the writer wants; the other is the claim she states.',
        explanation: 'The outage is the triggering event (exigence). Rate increases shape how readers will weigh new spending (context). Attending the hearing is the desired action (purpose). Burying the lines is the claim the op-ed states (message).'
      }
    },
    {
      id: 'englangr2-worked',
      type: 'text' as const,
      content: `
## Worked Example: Mapping One Text

On August 22, 1862, President Lincoln answered a public letter from the newspaper editor Horace Greeley, who had criticized him for moving too slowly against slavery. Lincoln's reply was printed in newspapers.

> My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery.
>
> — Abraham Lincoln, letter to Horace Greeley, August 22, 1862

| Component | In Lincoln's reply |
|---|---|
| **Exigence** | Greeley's published criticism ("The Prayer of Twenty Millions") |
| **Context** | The Civil War; border slave states still in the Union whose loyalty mattered |
| **Writer** | A president who must hold a divided coalition together |
| **Audience** | Greeley, but also the newspaper-reading public, including Unionists who opposed emancipation |
| **Purpose** | To keep both antislavery and anti-emancipation Unionists behind the war |
| **Message** | Every policy on slavery will be judged by whether it saves the Union |

Once the situation is mapped, the choice makes sense: by naming the Union as his single "paramount object," Lincoln gives every faction a goal it already shares. In fact, he had already drafted a preliminary Emancipation Proclamation, issued a month later, so the letter also prepares readers to accept emancipation as a means to the Union's survival.

> 💡 This is why the situation matters. Without the context of the border states and the divided public, the sentence reads as indifference to slavery. With it, it reads as a calculated framing for a divided audience.
`
    },
    {
      id: 'englangr2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which piece of context best explains why Lincoln framed his "paramount object" as saving the Union rather than ending slavery?',
            options: [
              'Greeley had asked him to explain the war\'s military strategy',
              'Loyal border states with enslaved people might still secede',
              'Most of Lincoln\'s readers had never heard of Horace Greeley',
              'Newspapers in 1862 printed only brief presidential statements'
            ],
            correctAnswer: 1,
            explanation: 'Lincoln needed the loyalty of border slave states and Unionists who opposed emancipation, so a goal they all shared served him best. Greeley\'s letter concerned slavery, not strategy, and the other options are not supported by the situation.'
          },
          {
            question: 'An audience shares a value but is divided on a policy. Which choice is a writer most likely to make?',
            options: [
              'Ground the request in a concern both sides hold',
              'Open with the most disputed part of the policy',
              'Avoid stating any specific request or action',
              'Address only the readers who already agree'
            ],
            correctAnswer: 0,
            explanation: 'Building on shared values lets the writer reach readers on both sides of the divided question. Leading with the dispute splits the audience, and dropping the request or half the audience defeats the purpose.'
          },
          {
            question: 'A student writes, "The exigence of the op-ed is to convince readers to attend the hearing." What is the error?',
            options: [
              'The student has described the message, not the exigence',
              'The student has described the purpose, not the exigence',
              'The student has described the context, not the exigence',
              'The student has described the audience, not the exigence'
            ],
            correctAnswer: 1,
            explanation: 'Convincing readers to attend is the goal the writer is working toward, which is purpose. The exigence is the event that prompted the op-ed, the power outage.'
          }
        ]
      }
    }
  ]
}
