export const englangRhetoricalSituationPart5Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'englangr5-intro',
      type: 'text' as const,
      content: `
# 🎯 The Rhetorical Situation (Reading)

**Part 5 of 7 — Complex Situations: Divided Audiences and Layered Purposes**

---

| Section |
|---------|
| 📖 Six Misconceptions About the Rhetorical Situation |
| Divided Audiences: Lincoln's Second Inaugural Address |
| Layered Purposes |
| AP Connection: Writing About Complexity |

> 🔑 **Key Concept:** Real situations are rarely simple. A text may address several audiences who want opposite things, and a writer may pursue more than one purpose at once. Explaining how a writer manages those tensions is one way strong essays show a complex understanding of the rhetorical situation.
`
    },
    {
      id: 'englangr5-myths',
      type: 'text' as const,
      content: `
## 📖 Six Misconceptions About the Rhetorical Situation

| Misconception | Correction |
|---|---|
| "The exigence is the topic." | The topic is what the text is about; the exigence is the specific event or need that prompted it. "Slavery" is a topic; the invitation to speak at a Fourth of July event is an exigence. |
| "The audience is anyone who reads it." | Analysis focuses on the **intended** audience the writer shaped choices for, plus any secondary audience the writer anticipated. |
| "A text has one purpose." | Many texts have a primary purpose and supporting ones, such as honoring the dead while recommitting the living. |
| "Context is background for the introduction." | Context matters only when it explains a choice. Use it inside body paragraphs. |
| "The writer's identity is just a credential." | The writer's perspective and relationship to the audience shape tone, evidence and structure, not only credibility. |
| "Every audience is either friendly or hostile." | Audiences can be sympathetic but complacent, divided, skeptical, grieving or triumphant, and each calls for different choices. |
`
    },
    {
      id: 'englangr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "The context of Douglass\'s speech is slavery." What is the most accurate criticism?',
            options: [
              'Slavery is the topic; context names conditions like the Fugitive Slave Act',
              'Slavery is the audience; context would name the people listening in Rochester',
              'Slavery is the purpose; context would name what Douglass wanted listeners to do',
              'Slavery is the message; context would name Douglass\'s main claim in the speech'
            ],
            correctAnswer: 0,
            explanation: 'Slavery is what the speech is about. Context means specific conditions shaping how the speech was given and received, such as the 1850 law that pulled Northern states into returning people who escaped slavery.'
          },
          {
            question: 'Why should context usually appear in body paragraphs rather than only in the introduction of a rhetorical analysis?',
            options: [
              'Body paragraphs are where context explains why a choice was made',
              'Introductions on the exam are not allowed to mention history',
              'Context earns the thesis point only when placed in body paragraphs',
              'Graders skip introductions and read only the body of an essay'
            ],
            correctAnswer: 0,
            explanation: 'Context is useful as commentary: it explains why a writer made a particular choice for this audience. Introductions may mention it, and no rule requires it in a particular place, but context that never touches a choice adds little.'
          }
        ]
      }
    },
    {
      id: 'englangr5-lincoln',
      type: 'text' as const,
      content: `
## Divided Audiences: Lincoln's Second Inaugural Address

**Situation.** Lincoln was inaugurated for a second term on March 4, 1865. Union victory was close; Lee would surrender about five weeks later. The crowd at the Capitol and the Northern public had suffered four years of war, and many wanted the South punished. Lincoln also knew the South would read the speech, and that the nation would have to be reunited.

| Audience | What they wanted or feared |
|---|---|
| Northern public | Vindication and, for many, punishment of the South |
| White Southerners | Fear of harsh treatment after defeat |
| Opponents of slavery | Assurance that the war's moral purpose would not be abandoned |

The speech had to satisfy a demand for moral judgment without feeding a desire for revenge. Read how it does that.

> Both parties deprecated war; but one of them would make war rather than let the nation survive; and the other would accept war rather than let it perish. And the war came.

> Both read the same Bible and pray to the same God, and each invokes His aid against the other. It may seem strange that any men should dare to ask a just God's assistance in wringing their bread from the sweat of other men's faces, but let us judge not, that we be not judged. The prayers of both could not be answered. That of neither has been answered fully.

> With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in, to bind up the nation's wounds, to care for him who shall have borne the battle and for his widow and his orphan, to do all which may achieve and cherish a just and lasting peace among ourselves and with all nations.
>
> — Abraham Lincoln, Second Inaugural Address, March 4, 1865

### How the Choices Manage the Division

| Choice | What it does for each audience |
|---|---|
| "Both parties," "Both read," "each invokes" | Treats North and South as parallel, which avoids gloating and includes Southerners in the story |
| "would make war... would accept war" | Still assigns responsibility: one side made war, the other accepted it, which gives Northerners their moral judgment |
| "And the war came." | A four-word sentence that presents the war almost as a force beyond either side's control |
| "wringing their bread from the sweat of other men's faces" | Condemns slavery in a biblical image (echoing Genesis), so opponents of slavery hear the moral case |
| "but let us judge not, that we be not judged" | Immediately restrains that condemnation with a quotation from the Sermon on the Mount, warning Northerners against vengeance |
| "With malice toward none, with charity for all" | Ends with a program of reconciliation that every audience can share |

The pattern is **judgment, then restraint**. Lincoln names slavery as a wrong and the South as the side that "would make war," and in the same breath he refuses to let that judgment become revenge.
`
    },
    {
      id: 'englangr5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Audience Is Served?** 🔍

Choose the audience each choice most directly addresses.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"wringing their bread from the sweat of other men\'s faces" most directly reassures ___',
            options: ['opponents of slavery', 'white Southerners', 'foreign governments', 'Union generals']
          },
          {
            label: '"let us judge not, that we be not judged" most directly cautions ___',
            options: ['Northerners seeking revenge', 'white Southerners', 'foreign governments', 'opponents of slavery']
          },
          {
            label: '"Both read the same Bible" invites ___ to see themselves in the speech',
            options: ['white Southerners', 'Union generals', 'foreign governments', 'newspaper editors']
          }
        ],
        correctAnswers: ['opponents of slavery', 'Northerners seeking revenge', 'white Southerners'],
        hint1: 'The image condemns living off the forced labor of others.',
        hint2: 'Who is tempted to judge after winning a war?',
        hint3: '"Both" includes the side that lost.',
        explanation: 'The biblical image of bread wrung from others\' sweat condemns slavery, reassuring those who saw the war as a moral cause. The warning against judging is aimed at victorious Northerners. "Both read the same Bible" places Southerners inside a shared faith.'
      }
    },
    {
      id: 'englangr5-layers',
      type: 'text' as const,
      content: `
## Layered Purposes

The Second Inaugural pursues several purposes at once:

1. **To interpret the war:** it was, as Lincoln says elsewhere in the speech, "somehow" caused by slavery, and it is a judgment on the whole nation.
2. **To restrain vengeance** among victorious Northerners.
3. **To prepare for reunion** on terms of "charity for all."

A strong analysis identifies the primary purpose and shows how secondary purposes support or complicate it. For example, the moral judgment of slavery and the call for charity could seem to conflict. Lincoln resolves the tension by placing both sides under a judgment higher than either, which makes humility, not vengeance, the fitting response.

> 🔑 **AP Connection:** The sophistication point (Row C) on the rhetorical analysis essay can be earned by explaining the significance or relevance of the writer's choices within the broader situation, or by explaining a purpose or tension in the passage. A sentence such as "Lincoln must condemn slavery without inflaming a victorious North, so he pairs every judgment with a restraint" shows exactly that kind of understanding, as long as the essay develops it throughout.
`
    },
    {
      id: 'englangr5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The sentence "And the war came." is notable primarily because it',
            options: [
              'presents the war briefly, as a force neither side controlled',
              'announces that the war has finally ended in a Union victory',
              'blames the Union for failing to prevent the war from starting',
              'introduces a detailed history of the war\'s major battles'
            ],
            correctAnswer: 0,
            explanation: 'After two balanced clauses about the two sides, the short sentence describes the war arriving rather than being chosen. The war had not ended in March 1865, and the speech offers no battle history or blame of the Union.'
          },
          {
            question: 'The phrase "let us judge not, that we be not judged" functions in the passage to',
            options: [
              'restrain the condemnation that comes just before it',
              'reject the claim that slavery caused the war',
              'quote a Southern leader\'s defense of slavery',
              'conclude the speech with a direct call to arms'
            ],
            correctAnswer: 0,
            explanation: 'Lincoln has just condemned those who live off others\' labor; the scriptural warning keeps that condemnation from becoming vengeance. It does not deny slavery\'s role, quote a Southern leader or call for more fighting.'
          },
          {
            question: 'Which statement best describes how Lincoln addresses his divided audience?',
            options: [
              'He speaks only to the Union and leaves the South for later speeches',
              'He pairs moral judgment of slavery with restraint and shared hope',
              'He avoids mentioning slavery so that no audience will be offended',
              'He blames both sides equally so that no one feels singled out'
            ],
            correctAnswer: 1,
            explanation: 'Lincoln names slavery as a wrong and the South as the side that made war, then immediately restrains judgment and offers "charity for all." He does not ignore the South, avoid slavery or assign equal blame.'
          }
        ]
      }
    }
  ]
}
