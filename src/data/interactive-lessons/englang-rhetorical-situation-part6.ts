export const englangRhetoricalSituationPart6Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'englangr6-intro',
      type: 'text' as const,
      content: `
# 🎯 The Rhetorical Situation (Reading)

**Part 6 of 7 — AP Practice: Rhetorical Analysis of Susan B. Anthony (1873)**

---

| Section |
|---------|
| 📖 The Passage and Its Headnote |
| Exam-Style Questions |
| Annotated Model Introduction and Body Paragraph |
| How the Model Meets the Rubric |

> 🔑 **Key Concept:** On the rhetorical analysis essay, the headnote gives you the situation and the passage gives you the choices. A high-scoring response uses the situation **inside** its commentary to explain why each choice suits this writer, this audience and this moment.
`
    },
    {
      id: 'englangr6-passage',
      type: 'text' as const,
      content: `
## 📖 The Passage and Its Headnote

*Headnote: In November 1872, Susan B. Anthony voted in the presidential election in Rochester, New York. She was arrested and indicted for voting illegally, since New York did not allow women to vote. Before her trial in 1873, she delivered the following speech in many towns of Monroe County, where the jurors for her trial would be drawn.*

> Friends and fellow citizens: I stand before you tonight under indictment for the alleged crime of having voted at the last presidential election, without having a lawful right to vote. It shall be my work this evening to prove to you that in thus voting, I not only committed no crime, but, instead, simply exercised my citizen's rights, guaranteed to me and all United States citizens by the National Constitution, beyond the power of any State to deny.
>
> ...
>
> It was we, the people; not we, the white male citizens; nor yet we, the male citizens; but we, the whole people, who formed the Union. And we formed it, not to give the blessings of liberty, but to secure them; not to the half of ourselves and the half of our posterity, but to the whole people—women as well as men.
>
> — Susan B. Anthony, "Is It a Crime for a Citizen of the United States to Vote?" (1873)

### Mapping the Situation

| Component | Details |
|---|---|
| **Exigence** | Her arrest and indictment for voting |
| **Audience** | Citizens of Monroe County, some of whom could sit on her jury; nearly all of them men, since only men served on New York juries |
| **Purpose** | To convince listeners that her vote was a lawful exercise of constitutional rights, not a crime |
| **Context** | The Fourteenth Amendment (1868) had defined citizenship; women's suffrage advocates argued that citizens could not be denied the vote |
`
    },
    {
      id: 'englangr6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Questions, Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the first sentence, the words "alleged crime" primarily serve to',
            options: [
              'question from the outset that her vote was unlawful at all',
              'admit that she broke the law and now seeks the jury\'s mercy',
              'show the audience that she misunderstands the charges against her',
              'describe the exact wording of the indictment for the record'
            ],
            correctAnswer: 0,
            explanation: '"Alleged" marks the charge as unproven and sets up her claim that she "committed no crime." She does not admit guilt or plead for mercy, and the word signals disagreement, not confusion.'
          },
          {
            question: 'The writer\'s primary purpose in the first paragraph is to',
            options: [
              'describe the events of election day in Rochester',
              'announce the claim her speech will set out to prove',
              'apologize to the citizens who were offended by her vote',
              'explain why women should be allowed to serve on juries'
            ],
            correctAnswer: 1,
            explanation: 'She states that it "shall be my work this evening to prove" her vote was a lawful exercise of rights, which previews the argument to come. The paragraph gives no narrative of election day, offers no apology and does not discuss jury service.'
          }
        ]
      }
    },
    {
      id: 'englangr6-model',
      type: 'text' as const,
      content: `
## Annotated Model Introduction and Body Paragraph

### Model Introduction

> **[Situation, briefly]** Facing trial in 1873 for voting in the previous year's presidential election, Susan B. Anthony spoke directly to the men of Monroe County who might soon decide her case. **[Defensible thesis: choices + purpose]** Rather than plead for leniency, Anthony recasts herself from defendant to lawful citizen, first by treating the charge as merely "alleged" and then by rereading the Constitution's own words, "we, the people," so that her listeners must either include her among the people or narrow a phrase they revere.

Notice what the thesis does **not** do: it does not list "ethos, pathos and logos," and it does not stop at "Anthony uses many rhetorical strategies." It names two choices in the order the essay will discuss them and connects them to a purpose.

### Model Body Paragraph

> **[Topic sentence: a choice and its purpose]** Anthony's most powerful move is to turn the Preamble's familiar words into a test that her audience must answer. **[Evidence]** She declares that "It was we, the people; not we, the white male citizens; nor yet we, the male citizens; but we, the whole people, who formed the Union." **[Commentary: how it works]** The sentence repeats "we" four times, and each time strips away a qualifier her listeners might have silently added, moving from "white male" to "male" to "the whole people." **[Commentary: why for this audience]** For men who could sit on her jury and who revered the Constitution, the structure makes exclusion look like an edit to a sacred text; to convict her, they would have to read words into the Preamble that the founders never wrote. **[Link to situation]** By grounding her case in the document her listeners already honor, Anthony makes the alleged criminal sound like the faithful reader and the law that charged her sound like the departure.

### How the Model Meets the Rubric

| Rubric row | Evidence in the model |
|---|---|
| **Row A: Thesis (0–1)** | The thesis names specific choices and a purpose that can be defended |
| **Row B: Evidence and Commentary (0–4)** | Exact quotations, followed by explanation of how the structure works and why it suits jurors who revere the Constitution |
| **Row C: Sophistication (0–1)** | The paragraph explains the significance of the choice within the situation: a defendant speaking to potential jurors turns their own reverence into her argument |
`
    },
    {
      id: 'englangr6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the Model** 🔍

Choose the job each sentence from the model body paragraph performs.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Anthony\'s most powerful move is to turn the Preamble\'s familiar words into a test that her audience must answer." ___',
            options: ['topic sentence', 'evidence', 'commentary', 'summary']
          },
          {
            label: '"She declares that \'It was we, the people; not we, the white male citizens...\'" ___',
            options: ['topic sentence', 'evidence', 'commentary', 'summary']
          },
          {
            label: '"The sentence repeats \'we\' four times, and each time strips away a qualifier..." ___',
            options: ['topic sentence', 'evidence', 'commentary', 'summary']
          }
        ],
        correctAnswers: ['topic sentence', 'evidence', 'commentary'],
        hint1: 'Which sentence makes a claim the paragraph will support?',
        hint2: 'Which sentence presents the writer\'s words?',
        hint3: 'Which sentence explains how the quoted words work?',
        explanation: 'The first sentence states the paragraph\'s claim about a choice. The second supplies the quotation as evidence. The third explains how the repetition works, which is commentary.'
      }
    },
    {
      id: 'englangr6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Questions, Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The sequence "not we, the white male citizens; nor yet we, the male citizens; but we, the whole people" is best described as',
            options: [
              'a progression that removes one limiting term at a time',
              'a list of groups that opposed the writer\'s right to vote',
              'a concession that the founders intended only men to vote',
              'a quotation taken directly from the Fourteenth Amendment'
            ],
            correctAnswer: 0,
            explanation: 'Each phrase drops a qualifier until only "the whole people" remains, so the sentence enacts the widening it argues for. It does not list opponents, concede the founders\' intent or quote the amendment.'
          },
          {
            question: 'Which feature of the rhetorical situation best explains why Anthony relies so heavily on the Constitution\'s language?',
            options: [
              'Her listeners included men who might judge her case',
              'Her listeners were mostly women who had already voted',
              'Her listeners were legal scholars who doubted the Preamble',
              'Her listeners had asked her to explain the election results'
            ],
            correctAnswer: 0,
            explanation: 'Potential jurors would decide whether she broke the law, so arguing from the nation\'s founding legal text speaks to the question they would face. The audience was not mostly women voters, legal scholars or people asking about results.'
          },
          {
            question: 'In the final sentence, the contrast "not to give the blessings of liberty, but to secure them" primarily serves to',
            options: [
              'argue that liberty is a right people already hold and government must protect',
              'suggest that the founders hoped to give liberty to future generations',
              'admit that women had not yet received all the blessings of liberty',
              'distinguish between the rights of state and national governments'
            ],
            correctAnswer: 0,
            explanation: 'By insisting the Union was formed to "secure" rather than "give" liberty, Anthony implies that women already possess the right and that government may only protect it. That framing makes denying her vote a failure of government\'s duty, not a withheld gift.'
          }
        ]
      }
    }
  ]
}
