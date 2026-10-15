export const englangReasoningOrgReadingPart2Data = {
  topicSlug: 'englang-reasoning-org-reading',
  sections: [
    {
      id: 'englangr2-intro',
      type: 'text' as const,
      content: `
# 🧠 Reasoning and Organization in Reading

**Part 2 of 7 — Line of Reasoning in Depth: Federalist No. 10**

---

| Section |
|---------|
| 📖 How One Claim Leads to the Next |
| Deductive and Inductive Arrangement |
| Madison's Division and Elimination |
| Does the Line of Reasoning Support the Thesis? |

> 🔑 **Key Concept:** Part 1 showed that a line of reasoning is a chain. This part looks at the **links**. A writer can arrange claims so that each one follows from the one before, so that a general principle is applied to a case, or so that alternatives are ruled out one by one until only the writer's answer is left. Skill 5.A asks you to **describe** that arrangement and **judge whether it actually supports the thesis**.
`
    },
    {
      id: 'englangr2-links',
      type: 'text' as const,
      content: `
## 📖 How One Claim Leads to the Next

A line of reasoning is more than a list of good points. Each claim has a job in relation to the claims around it. When you read, ask what the link is between this claim and the last one.

| Link | What the second claim does | Typical signals |
|---|---|---|
| **Premise to inference** | Draws a conclusion that the earlier claims make necessary | "therefore," "it follows that," "the inference is" |
| **Principle to application** | Applies a general rule to the case at hand | "in this case," "so it is with," "here" |
| **Alternative to elimination** | Rejects one option so that another remains | "the first... the second," "neither," "but this cannot" |
| **Problem to remedy** | Answers a difficulty the earlier claim set out | "the cure," "the remedy," "relief is to be sought" |
| **Claim to limit** | Narrows how far the earlier claim reaches | "only," "unless," "in most cases" |

## Deductive and Inductive Arrangement

| Arrangement | Direction | How the reader experiences it |
|---|---|---|
| **Deductive** | General premises lead to a specific conclusion | The thesis often comes early, and the rest of the text shows that it must be true |
| **Inductive** | Specific cases or experiences lead to a general conclusion | The evidence comes first, and the thesis arrives once the reader has seen enough cases |

The two can sit inside one text. A writer may reason inductively within a paragraph (several examples, then a generalization) and deductively across the whole essay.

Patrick Henry announced an inductive method in his 1775 speech to the Virginia Convention:

> I have but one lamp by which my feet are guided, and that is the lamp of experience. I know of no way of judging of the future but by the past.
>
> — Patrick Henry, speech to the Second Virginia Convention, March 23, 1775, as reconstructed by William Wirt (1817)

Henry tells his audience how to read the rest of his argument: the record of Britain's recent conduct will be his evidence, and a prediction about Britain's future conduct will be his conclusion. (Part 5 reads this speech closely.)
`
    },
    {
      id: 'englangr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer argues that every free press invites criticism, that a nation with a free press must therefore expect criticism, and that its leaders should not treat criticism as disloyalty. This line of reasoning moves',
            options: [
              'from a general premise to a conclusion about one case',
              'from several observed cases to a general conclusion',
              'from a personal story to a broader moral lesson',
              'from an opposing claim to a rebuttal of that claim'
            ],
            correctAnswer: 0,
            explanation: 'The argument starts from a general premise about every free press and applies it to one nation, which is deductive arrangement. It does not gather cases, tell a story or answer an opponent.'
          },
          {
            question: 'Henry\'s statement "I know of no way of judging of the future but by the past" prepares his audience for reasoning that is',
            options: [
              'deductive, applying a principle of English law to the colonies',
              'inductive, predicting what is to come from a record of events',
              'concessive, granting that his opponents\' hopes have some merit',
              'emotional, replacing evidence with an appeal to the fear of war'
            ],
            correctAnswer: 1,
            explanation: 'Henry will treat Britain\'s past conduct as evidence and draw a general prediction from it, which is inductive reasoning. The line names a method of judging, not a legal principle, a concession or an appeal that replaces evidence.'
          }
        ]
      }
    },
    {
      id: 'englangr2-fed10a',
      type: 'text' as const,
      content: `
## Madison's Division and Elimination

### The Situation

| Component | Details |
|---|---|
| **Writer** | James Madison, writing as "Publius" with Alexander Hamilton and John Jay |
| **Occasion** | The proposed Constitution of 1787 needed ratification by state conventions; New York's was in doubt |
| **Audience** | "The People of the State of New York," reading the essays in city newspapers |
| **Purpose** | To show that a large union would control faction better than small republics could |

### Step 1: The Thesis and a Definition

> Among the numerous advantages promised by a well constructed Union, none deserves to be more accurately developed than its tendency to break and control the violence of faction.
>
> By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adversed to the rights of other citizens, or to the permanent and aggregate interests of the community.
>
> — James Madison, *The Federalist* No. 10, November 1787

The thesis comes first, so the essay is arranged deductively. The definition follows at once, because every later step depends on what "faction" means. Notice that a faction can be **a majority**. That detail matters later: the hardest problem Madison must solve is a majority faction.

### Step 2: Dividing the Problem

> There are two methods of curing the mischiefs of faction: the one, by removing its causes; the other, by controlling its effects.
>
> There are again two methods of removing the causes of faction: the one, by destroying the liberty which is essential to its existence; the other, by giving to every citizen the same opinions, the same passions, and the same interests.

### Step 3: Eliminating the Alternatives

> It could never be more truly said than of the first remedy, that it was worse than the disease. Liberty is to faction what air is to fire, an aliment without which it instantly expires.

> The second expedient is as impracticable as the first would be unwise.

Madison's reasoning branches and then prunes:

\`\`\`
Cure faction
 ├─ Remove its causes
 │    ├─ Destroy liberty .............. rejected: "worse than the disease"
 │    └─ Give everyone the same views . rejected: "impracticable"
 └─ Control its effects ............... the only branch left
\`\`\`

| Move | Text | Function in the line of reasoning |
|---|---|---|
| Division | "two methods... the one... the other" | Claims to list every possible remedy, so that ruling options out is meaningful |
| Analogy | "Liberty is to faction what air is to fire" | Shows that removing liberty would destroy political life along with faction |
| Elimination | "as impracticable as the first would be unwise" | Closes the second branch in one balanced sentence |

This pattern is sometimes called **division and elimination**. It works only if the division is complete. If there were a third way to remove the causes of faction, the elimination would prove nothing.
`
    },
    {
      id: 'englangr2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"There are two methods of curing the mischiefs of faction: the one, by removing its causes; the other, by controlling its effects." This sentence is a ___',
            options: ['division into alternatives', 'concession to opponents', 'narrative of past events', 'call to immediate action']
          },
          {
            label: '"By a faction, I understand a number of citizens..." This sentence is a ___',
            options: ['definition of a key term', 'rebuttal of an objection', 'prediction about the future', 'summary of earlier essays']
          },
          {
            label: '"The second expedient is as impracticable as the first would be unwise." This sentence is an ___',
            options: ['elimination of an option', 'illustration by anecdote', 'appeal to shared emotion', 'admission of uncertainty']
          }
        ],
        correctAnswers: ['division into alternatives', 'definition of a key term', 'elimination of an option'],
        hint1: 'The sentence splits the problem into "the one" and "the other."',
        hint2: '"I understand" introduces what the word will mean in this essay.',
        hint3: 'Madison is closing off the second way of removing causes.',
        explanation: 'Madison divides the possible cures, defines the term his argument depends on, and then rules out the second way of removing causes, leaving the control of effects.'
      }
    },
    {
      id: 'englangr2-fed10b',
      type: 'text' as const,
      content: `
## Step 4: The Inference and the Remedy

After eliminating the first branch, Madison draws the inference in so many words:

> The inference to which we are brought is, that the CAUSES of faction cannot be removed, and that relief is only to be sought in the means of controlling its EFFECTS.

He then narrows the problem again. A minority faction is easy to defeat:

> If a faction consists of less than a majority, relief is supplied by the republican principle, which enables the majority to defeat its sinister views by regular vote.

So the real danger is a **majority** faction, the case his definition prepared for. A pure democracy cannot control it, he argues, but a republic can:

> A republic, by which I mean a government in which the scheme of representation takes place, opens a different prospect, and promises the cure for which we are seeking.

> Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens.

The essay ends by returning to the thesis:

> In the extent and proper structure of the Union, therefore, we behold a republican remedy for the diseases most incident to republican government.

### The Whole Line of Reasoning

| Stage | Claim | Link to the next stage |
|---|---|---|
| 1 | A well-constructed Union can control faction (thesis) | Requires a definition |
| 2 | Faction can be a majority or a minority | Sets up the hard case |
| 3 | Causes can be removed only by ending liberty or forcing sameness | Both options rejected |
| 4 | Therefore only the effects can be controlled | Inference |
| 5 | Voting controls a minority faction | Narrows the problem to a majority |
| 6 | A large representative republic controls a majority faction | Answers the remaining case |
| 7 | So the Union is "a republican remedy" | Returns to the thesis with "therefore" |

## Does the Line of Reasoning Support the Thesis?

Skill 5.A has two halves: describe the reasoning, then **evaluate whether it supports the thesis**. Ask three questions.

| Question | Federalist 10 |
|---|---|
| Does each step follow from the one before? | Yes; each stage either narrows the problem or removes an option |
| Is any step assumed rather than shown? | The completeness of the division is asserted, not proved |
| Does the conclusion answer the thesis? | Yes; the last sentence restates the thesis as a proven result with "therefore" |

> 🔑 **AP Connection:** Multiple-choice stems such as "The sentence beginning 'The inference to which we are brought' serves to..." test 5.A. The right answer names the sentence's **job in the chain** (drawing a conclusion from the eliminations), not just its content (that causes cannot be removed).
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
            question: 'Madison\'s judgment that the first remedy "was worse than the disease" functions in his line of reasoning to',
            options: [
              'concede that no government can ever cure faction',
              'rule out one way of removing the causes of faction',
              'introduce the republic as the cure Madison defends',
              'define faction before the essay turns to its causes'
            ],
            correctAnswer: 1,
            explanation: 'The judgment closes the first branch, destroying liberty, so that the reasoning can move on. Madison does not give up on a cure, the republic comes later, and the definition has already been given.'
          },
          {
            question: 'The sentence beginning "The inference to which we are brought" marks a shift from',
            options: [
              'defining faction to listing historical examples of factions',
              'conceding an objection to rebutting it with new evidence',
              'ruling out cures for causes to controlling effects',
              'describing a democracy to narrating the convention\'s debates'
            ],
            correctAnswer: 2,
            explanation: 'Once both ways of removing the causes of faction are rejected, the inference turns the essay toward controlling effects, the only branch left. The essay is not listing historical examples, answering an objection or narrating the convention.'
          },
          {
            question: 'Which of the following, if shown to be true, would most weaken the support Madison\'s line of reasoning gives to his thesis?',
            options: [
              'A third practical way of removing the causes of faction exists.',
              'Some readers of the essay had never heard the word "faction."',
              'Small republics in history had sometimes been well governed.',
              'Madison published the essay under a pen name, not his own.'
            ],
            correctAnswer: 0,
            explanation: 'Division and elimination works only if the alternatives listed are all the alternatives there are, so a third way of removing causes would break the chain. The other facts do not touch any link in the reasoning.'
          }
        ]
      }
    }
  ]
}
