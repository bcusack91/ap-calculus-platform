export const englangIntroRhetoricPart3Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'englangi3-intro',
      type: 'text' as const,
      content: `
# 🗣️ Introduction to Rhetoric

**Part 3 of 7 — Close Reading Worked Example: The Gettysburg Address**

---

| Section |
|---------|
| 📖 The Situation and the Text |
| Annotating the Choices |
| The Line of Reasoning: Past, Present, Future |
| A Model Analytical Paragraph |

> 🔑 **Key Concept:** Close reading means slowing down to ask why each choice is there. A short, famous text is the best place to practice, because every word in it was chosen.
`
    },
    {
      id: 'englangi3-text',
      type: 'text' as const,
      content: `
## 📖 The Situation and the Text

| Element | Gettysburg, November 19, 1863 |
|---|---|
| **Writer** | President Abraham Lincoln |
| **Exigence** | The dedication of a national cemetery for the Union soldiers killed at the Battle of Gettysburg (July 1–3, 1863) |
| **Audience** | The crowd at the ceremony, many of them mourners, and the wider Northern public who would read the speech in newspapers |
| **Context** | The war is in its third year with no end in sight; the main oration of the day, by Edward Everett, ran about two hours |
| **Purpose** | To honor the dead and to turn their sacrifice into a reason for the living to keep fighting for the Union and its founding ideals |

Lincoln spoke for only a few minutes, fewer than 300 words. Read the text slowly, twice.

> Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
>
> Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
>
> But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.
>
> — Abraham Lincoln, Gettysburg Address (Bliss copy), November 19, 1863
`
    },
    {
      id: 'englangi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**First Read: The Situation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Four score and seven years ago" counts back 87 years from 1863. What is the primary effect of dating the nation\'s birth this way?',
            options: [
              'It ties the founding to the Declaration and its claim of equality',
              'It reminds listeners that the Constitution was recently ratified',
              'It shows that the Union is too old and too settled to be destroyed by one war',
              'It establishes Lincoln\'s personal knowledge of the founders'
            ],
            correctAnswer: 0,
            explanation: 'Eighty-seven years before 1863 is 1776, so Lincoln locates the nation\'s birth in the Declaration of Independence and its proposition "that all men are created equal," not in the Constitution of 1787. That choice makes equality the founding principle the war is testing.'
          },
          {
            question: 'The writer\'s primary purpose in the address as a whole is to',
            options: [
              'describe the events of the three-day battle',
              'recommit the living to the cause the dead served',
              'argue that the cemetery should not be dedicated',
              'praise the planners of the dedication ceremony'
            ],
            correctAnswer: 1,
            explanation: 'Lincoln says the living cannot add to what the soldiers did and instead calls on listeners to be "dedicated here to the unfinished work." He gives no battle narrative, and his claim that "we can not dedicate" this ground is a reversal, not an objection to the ceremony.'
          }
        ]
      }
    },
    {
      id: 'englangi3-annotate',
      type: 'text' as const,
      content: `
## Annotating the Choices

| Text | Choice | Effect |
|---|---|---|
| "Four score and seven years ago" | Formal, biblical-sounding phrasing for 87 years | Gives the founding a solemn, almost scriptural weight and points to 1776 |
| "brought forth... conceived... new birth of freedom" | An extended birth metaphor that opens and closes the speech | Presents the nation as a living thing that can die or be reborn, which raises the stakes of the war |
| "dedicated" (sentence 1), "dedicate" (paragraph 2), "can not dedicate," "to be dedicated" | Repetition of one word with a shifting meaning | Moves the act of dedication from the ground to the listeners themselves |
| "we can not dedicate—we can not consecrate—we can not hallow" | Three parallel clauses that rise in sacredness | Builds to a reversal: the living lack the power the dead already exercised |
| "what we say here... what they did here" | Antithesis (balanced opposites) | Contrasts words with deeds and humbles the speaker's own speech |
| "of the people, by the people, for the people" | Tricolon with repeated "the people" | Ends on a memorable definition of what the war is defending |

### The Turn on "But"

The second paragraph seems to do exactly what the occasion expects: "We have come to dedicate a portion of that field... It is altogether fitting and proper that we should do this." Then "But, in a larger sense" overturns it. The speech **refuses the ceremonial task** in order to give the audience a harder one. This is the central rhetorical move: Lincoln uses the expectations of the occasion and then redirects them.

> ⚠️ Do not stop at "Lincoln uses repetition." Say **what** is repeated (the word *dedicate*), **how** its meaning changes (from consecrating ground to committing oneself) and **why** that matters (it converts mourners into participants in the war's purpose).
`
    },
    {
      id: 'englangi3-input',
      type: 'input-boxes' as const,
      content: `
**Close-Reading Check** ✍️

**1)** "Four score and seven years ago," spoken in 1863, points to what year?

**2)** Which single word does Lincoln repeat, in different forms, to move the act of honoring from the ground to the listeners? (Give the base verb.)

**3)** The pairing "what we say here" and "what they did here" sets two opposites in balanced form. What is this device called?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1776', 'dedicate', 'antithesis'],
        hint1: 'A score is 20. Subtract 87 from 1863.',
        hint2: 'It appears in the first sentence as "dedicated to the proposition."',
        hint3: 'The term comes from Greek for "set against."',
        explanation: '1) 1863 − 87 = 1776, the year of the Declaration. 2) "Dedicate" shifts from dedicating a field to "us the living" being dedicated to unfinished work. 3) Balanced opposites in parallel form are antithesis.'
      }
    },
    {
      id: 'englangi3-reasoning',
      type: 'text' as const,
      content: `
## The Line of Reasoning: Past, Present, Future

The three paragraphs move through time, and each one does a different job.

| Paragraph | Time | Job |
|---|---|---|
| 1 | Past (1776) | States the founding premise: a nation "dedicated to the proposition that all men are created equal" |
| 2 | Present (the war, the ceremony) | Frames the war as a **test** of whether such a nation "can long endure" and names the occasion |
| 3 | Future ("the great task remaining") | Turns the audience's grief into a resolution that "these dead shall not have died in vain" |

The structure is itself an argument: if the nation was born on a principle and is now being tested, the only fitting response is to finish the work. The listener is carried from memory to obligation.

## A Model Analytical Paragraph

Here is a model body paragraph for a rhetorical analysis of the address, annotated with what each sentence does.

> **[Claim about a choice]** Lincoln first accepts and then rejects the ceremonial purpose of the day in order to give his audience a larger task. **[Evidence]** After calling the dedication "altogether fitting and proper," he reverses himself: "But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground." **[Commentary]** Each verb is more sacred than the last, so the sentence climbs toward holiness only to deny that the living can reach it; the soldiers, he says, have already "consecrated it, far above our poor power to add or detract." **[Commentary linked to purpose]** By stripping the mourners of their expected role, Lincoln makes room for a new one, and when the word returns as "us the living... to be dedicated here to the unfinished work," dedication is no longer something the crowd does to a field but something it must do with its own lives. **[Link to line of reasoning]** The reversal thus turns a funeral audience into a committed one, which is exactly what a Union still at war needed from its citizens.

| Rubric row | What this paragraph shows |
|---|---|
| Row B (evidence and commentary) | Specific quotations, each followed by explanation of how the choice works and why |
| Row C (sophistication) | Explains the significance of the choice within the war-time situation, not just its effect in isolation |
`
    },
    {
      id: 'englangi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Questions on the Address** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The function of the sentence beginning "But, in a larger sense" is to',
            options: [
              'introduce new evidence about the battle\'s cost',
              'concede that the ceremony has been poorly planned',
              'reverse the expected purpose of the occasion',
              'shift the audience from the North to the South'
            ],
            correctAnswer: 2,
            explanation: 'After calling the dedication "fitting and proper," Lincoln declares that the living cannot dedicate the ground at all. The sentence overturns the ceremony\'s expected purpose to set up a new one; it offers no new battle evidence and criticizes no planners.'
          },
          {
            question: 'The sequence "dedicate... consecrate... hallow" is best described as',
            options: [
              'a list of synonyms that slows the speech for the mourners',
              'a progression of verbs that rises toward the sacred',
              'a contradiction that undercuts the speaker\'s own claim',
              'an allusion to the oath taken by Union soldiers'
            ],
            correctAnswer: 1,
            explanation: 'The verbs move from setting something apart to making it holy, so the sentence climbs before Lincoln denies that the living can do any of it. They are not mere synonyms, and they are not drawn from a soldiers\' oath.'
          },
          {
            question: 'Which statement best describes the relationship between the speech\'s first and final sentences?',
            options: [
              'The first states a premise and the last makes it a task for listeners',
              'The first praises the founders and the last criticizes their compromises',
              'The first addresses the soldiers and the last addresses foreign nations',
              'The first offers a fact and the last offers a statistic that confirms it'
            ],
            correctAnswer: 0,
            explanation: 'The opening states the founding proposition of equality; the close resolves that the government built on it "shall not perish from the earth." The speech moves from premise to obligation, and the birth imagery links the two ends.'
          }
        ]
      }
    }
  ]
}
