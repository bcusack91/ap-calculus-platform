export const englangWritingForAudiencePart6Data = {
  topicSlug: 'englang-writing-for-audience',
  sections: [
    {
      id: 'englangw6-intro',
      type: 'text' as const,
      content: `
# 👥 Writing for Audience

**Part 6 of 7 — Exam Practice: Audience Revisions and an Argument Essay**

---

| Section |
|---------|
| Section I: Revising a Draft for Its Audience |
| How to Read an Audience-Revision Question |
| An Argument Prompt and a Model Response |
| Mapping the Response to the Rubric |

> 🔑 **Key Concept:** On the exam, audience shows up in two places. In **Section I**, writing questions describe a student's draft and its intended readers, then ask which revision "best addresses" those readers' concerns or fits the writer's purpose. In the **free-response section**, your own essay has an audience, and the argument essay (Q3) rewards a writer who anticipates what a doubting reader will say. This part practices both.
`
    },
    {
      id: 'englangw6-draft',
      type: 'text' as const,
      content: `
## Section I: Revising a Draft for Its Audience

*Practice draft written for this lesson, modeled on the format of AP writing questions.*

**The situation:** A student is writing a letter to the members of the Millbrook Historical Society, who have looked after the town's old train depot for decades. The art club wants to put a mural about the depot's history on its blank east wall. Several Society members opposed the idea at their last meeting. The writer's purpose is to win the members' support.

> (1) I am writing on behalf of the Millbrook High art club about our proposal for a mural on the east wall of the old train depot. (2) Honestly, the old depot looks kind of sad and boring right now. (3) Our mural would show three moments in the depot's history: the first train in 1871, the flood of 1927, and the station's closing in 1968. (4) We know some members worry about the building. (5) A mural would also bring more visitors downtown. (6) Other towns have murals too. (7) We hope you will support us.

### Profile the readers before you read the questions

| Question | Answer from the situation |
|---|---|
| Who are they? | People who have spent years preserving one building |
| What do they value? | The building's integrity and historical accuracy |
| What is their likely resistance? | Fear that a mural will damage or cheapen the depot |
| What do they need from the writer? | A specific answer to that fear and a sign of respect for their expertise |

Keep this profile in front of you. In audience-revision questions, the right answer is almost always the choice that serves **this** profile, even when another choice sounds livelier or more forceful.
`
    },
    {
      id: 'englangw6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Revising the Letter** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The writer wants to revise sentence 2 so that its tone suits readers who have worked for years to preserve the depot. Which version best accomplishes this goal?',
            options: [
              'Today the depot is honestly an eyesore that most people in town would rather ignore.',
              'Today the depot, like most old buildings, is falling apart and needs young people\'s help.',
              'Today the depot\'s east wall is blank, and few passersby stop to learn its story.',
              'Today the depot looks dull, though we are sure it was impressive in its own time.'
            ],
            correctAnswer: 2,
            explanation: 'This version states the problem the mural solves without insulting a building the readers love. The other versions call the depot an eyesore, claim it is falling apart, or praise it only in the past, each of which belittles the members\' work.'
          },
          {
            question: 'The writer wants to replace sentence 4 with a sentence that names the members\' specific concern and answers it. Which choice best accomplishes this goal?',
            options: [
              'Some members have told us that they dislike murals, and we respect their right to that view.',
              'Some members worry about the building, but a mural is surely worth a small amount of risk.',
              'Some members fear that murals invite graffiti, but our club has painted three murals at school.',
              'Some members fear that paint would harm the old brick, so we would paint on removable panels.'
            ],
            correctAnswer: 3,
            explanation: 'Only this choice names the concern most tied to preservation, harm to the brick, and answers it with a specific plan. Respecting a dislike answers nothing, graffiti is a different worry, and dismissing the risk tells preservationists their concern does not matter.'
          },
          {
            question: 'The writer wants to add evidence after the revised sentence 4. Which evidence would most strengthen the letter for this audience?',
            options: [
              'a survey showing that most Millbrook students want more color downtown',
              'a list of murals in nearby towns that have drawn tourists and attention',
              'a preservation architect\'s finding that panels leave no mark on brick',
              'an estimate of the paint and scaffolding the club will need this spring'
            ],
            correctAnswer: 2,
            explanation: 'An expert in preservation speaks to exactly what these readers fear and comes from a field they respect. Student preferences, tourist appeal, and supply costs do not address the risk to the building.'
          },
          {
            question: 'The writer is considering deleting sentence 6. Should the writer keep or delete it?',
            options: [
              'Keep it, because it shows the members that murals are common and so are safe.',
              'Delete it, because it gives these readers no reason they would find persuasive.',
              'Keep it, because it helps the members picture what the finished mural would show.',
              'Delete it, because it repeats the details about the depot\'s history in sentence 3.'
            ],
            correctAnswer: 1,
            explanation: 'Preservationists are not moved by the fact that other towns have murals, so the sentence adds nothing for this audience. Being common does not prove a mural is safe, the sentence describes no image, and it does not repeat sentence 3.'
          },
          {
            question: 'The writer wants to end the letter by inviting the members into the project in a way that respects their expertise. Which choice best accomplishes this goal?',
            options: [
              'We hope the Society will stop opposing the project once members see how good it looks.',
              'We will finish the mural by June whether or not the Society decides to support it.',
              'We think the Society should be more willing to trust young artists than in the past.',
              'We would be grateful if the Society chose the scenes and checked every date first.'
            ],
            correctAnswer: 3,
            explanation: 'Asking the members to choose the scenes and check the dates gives their expertise a real role, turning opponents into partners. The other endings predict their surrender, ignore them, or scold them.'
          }
        ]
      }
    },
    {
      id: 'englangw6-howto',
      type: 'text' as const,
      content: `
## How to Read an Audience-Revision Question

| Step | What to do | In the Historical Society set |
|---|---|---|
| 1. Find the reader | Reread the situation, not just the sentence | Preservationists who opposed the mural |
| 2. Find the goal | Underline the goal stated in the stem ("names the concern and answers it") | The stem tells you exactly what the revision must do |
| 3. Eliminate by audience | Cross out choices that would irritate, belittle, or ignore this reader | "Eyesore," "surely worth a small amount of risk," "whether or not" |
| 4. Eliminate by goal | Cross out choices that are polite but do not do the stated job | "We respect their right to that view" names nothing and answers nothing |
| 5. Check the survivor | The answer should serve both the reader and the goal | Panels instead of paint on brick |

Two traps recur. The **livelier** choice ("honestly an eyesore") is often wrong because liveliness is not what this reader needs. The **polite but empty** choice ("we respect their right") is wrong because courtesy without an answer does not meet the reader's need.
`
    },
    {
      id: 'englangw6-essay',
      type: 'text' as const,
      content: `
## An Argument Prompt and a Model Response

*Practice prompt written for this lesson, modeled on the format of AP argument prompts.*

> In an 1842 address to a temperance society, Abraham Lincoln argued, "If you would win a man to your cause, first convince him that you are his sincere friend."
>
> Write an essay that argues your position on the extent to which Lincoln's claim about persuasion is valid.
>
> In your response you should do the following:
> - Respond to the prompt with a thesis that presents a defensible position.
> - Provide evidence to support your line of reasoning.
> - Explain how the evidence supports your line of reasoning.
> - Use appropriate grammar and punctuation in communicating your argument.

### The audience decision

The writer of the model below expected a skeptical reader: someone who thinks that some ideas must be confronted, not befriended. Rather than ignore that reader, the writer built the reader's best objection into the thesis.

### Student model: introduction (written for this lesson)

> Anyone who has tried to change a friend's mind knows that a lecture rarely works; the friend digs in, exactly as Lincoln predicted. Lincoln was right that persuasion begins with sincere friendship, but his maxim describes how to treat the **people** we hope to win, not the **ideas** we hope to defeat. The most persuasive advocates are friends to their audience and opponents of the argument that misled it, and they keep those two roles carefully apart.

### Student model: body paragraph (written for this lesson)

> George Washington's address to his officers at Newburgh in 1783 shows both roles at work. The officers were angry and unpaid, and an anonymous pamphlet had told them to distrust anyone who preached patience. Had Washington simply lectured them about obedience, he would have proved the pamphlet right. Instead he reminded them that he had "never left your side" except on public duty, building the friendship Lincoln describes before asking for anything. Yet the same speech asks whether the pamphlet's author is not "an insidious foe." Washington was gentle with the officers and severe with the idea that had misled them, and that distinction let the officers change their minds without losing face: they could reject the pamphlet without rejecting themselves. Lincoln's maxim explains why the officers listened; Washington's severity toward the pamphlet shows that friendship toward an audience does not require softness toward every argument it has heard.
`
    },
    {
      id: 'englangw6-rubric',
      type: 'text' as const,
      content: `
## Mapping the Response to the Rubric

The argument essay is scored out of **6 points**: Row A (thesis) 0–1, Row B (evidence and commentary) 0–4, Row C (sophistication) 0–1. Rows are judged across a whole essay, so the notes below describe what this introduction and paragraph **show**, not a final score.

| Row | What the rubric looks for | Where the model shows it |
|---|---|---|
| **A: Thesis** | A defensible position that responds to the prompt | "Lincoln was right that persuasion begins with sincere friendship, but his maxim describes how to treat the people we hope to win, not the ideas we hope to defeat." A reasonable reader could dispute this, and it answers "to what extent." |
| **B: Evidence and commentary** | Specific evidence for every claim, and commentary that consistently explains how the evidence supports the line of reasoning | Specific details ("never left your side," "an insidious foe," the anonymous pamphlet) and a sentence that explains them: "they could reject the pamphlet without rejecting themselves." |
| **C: Sophistication** | Sophistication of thought or a complex understanding of the rhetorical situation; for Q3 this can include exploring complexities or tensions, or making rhetorical choices that consistently strengthen the argument | The thesis anticipates the skeptical reader's best objection (some ideas must be confronted) and turns it into a distinction rather than ignoring it. The essay also practices its own claim: it treats Lincoln generously while limiting his maxim. |

### What a weaker version of the same paragraph would look like

A Row B 2-level paragraph would say that "Washington was nice to his soldiers, so they listened to him, which proves Lincoln right," and stop. It has evidence, but it is general, it explains only part of how the evidence works, and it never meets the reader who doubts the maxim. The model's advantage is not length. It is that every sentence is chosen with that doubting reader in mind.

> 🔑 **AP Connection:** Row C for "a complex understanding of the rhetorical situation" is rarely earned by one clever sentence. It is earned when the whole essay shows that the writer knows who is reading, what that reader will object to, and how to answer it without overstating. Planning your reader in the first minutes of the essay is the most reliable way to get there.
`
    },
    {
      id: 'englangw6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check the Model Response** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature of the model introduction is most responsible for meeting the Row A requirement?',
            options: [
              'Its opening sentence about trying to change a friend\'s mind',
              'Its promise to discuss several historical examples in turn',
              'Its use of bold type to separate people from their ideas',
              'Its qualified position that a reasonable reader could dispute'
            ],
            correctAnswer: 3,
            explanation: 'Row A rewards a thesis with a defensible position, and the model takes a qualified, arguable stance on the extent of Lincoln\'s claim. The opening anecdote engages the reader, bold type is formatting, and the introduction promises no list of examples.'
          },
          {
            question: 'The sentence "they could reject the pamphlet without rejecting themselves" contributes to Row B chiefly by',
            options: [
              'adding a second historical example to the paragraph',
              'restating the thesis in the words of the introduction',
              'explaining how the evidence supports the distinction',
              'conceding that Lincoln\'s claim is sometimes wrong'
            ],
            correctAnswer: 2,
            explanation: 'The sentence is commentary: it explains why separating the men from the idea worked, which ties the Washington evidence to the essay\'s line of reasoning. It adds no new example, does not repeat the thesis, and makes no concession.'
          },
          {
            question: 'Which choice in the model most clearly reflects a complex understanding of the rhetorical situation?',
            options: [
              'Opening with an anecdote that most readers will recognize',
              'Quoting Washington\'s address directly rather than summarizing it',
              'Building the skeptical reader\'s best objection into its own thesis',
              'Choosing a famous historical figure to impress the essay\'s reader'
            ],
            correctAnswer: 2,
            explanation: 'Anticipating the doubting reader and answering that reader\'s strongest objection in the thesis shows awareness of audience across the whole argument. A familiar opening and direct quotation are good habits but common ones, and choosing a famous figure to impress is not a rhetorical strategy the rubric rewards.'
          }
        ]
      }
    }
  ]
};
