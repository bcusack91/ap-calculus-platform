export const englangArgumentStructurePart6Data = {
  topicSlug: 'englang-argument-structure',
  sections: [
    {
      id: 'englanga6-intro',
      type: 'text' as const,
      content: `
# 🏗️ Argument Structure

**Part 6 of 7 — Exam Practice: A Section I Passage Set and a Structured Argument Essay**

---

| Section |
|---------|
| 📖 Passage: Lincoln's First Inaugural Address, March 4, 1861 |
| Passage Set, Questions 1–3 |
| How Lincoln Revised His Conclusion |
| Structuring Your Own Argument Essay (Question 3) |
| An Annotated Model Mapped to the Rubric |

> 🔑 **Key Concept:** Structure is tested twice on the AP exam. In **Section I**, reading questions ask about the function of paragraphs, shifts, and relationships between parts. In **Section II**, the argument essay (Question 3) is scored on whether your own line of reasoning holds together. This part practices both.
`
    },
    {
      id: 'englanga6-passage',
      type: 'text' as const,
      content: `
## 📖 Passage: Lincoln's First Inaugural Address, March 4, 1861

**Situation.** Seven Southern states had declared that they were leaving the Union and had formed the Confederate States of America. Lincoln took office with the country divided; the attack on Fort Sumter came about five weeks later. He spoke to the whole nation, but his hardest audience was the South and the slave states that had not yet seceded.

The four paragraphs below appear in this order in the address, with other material between them.

> **[1]** From questions of this class spring all our constitutional controversies, and we divide upon them into majorities and minorities. If the minority will not acquiesce, the majority must, or the government must cease. There is no other alternative; for continuing the government is acquiescence on one side or the other.... Plainly, the central idea of secession is the essence of anarchy.
>
> **[2]** Physically speaking, we cannot separate. We cannot remove our respective sections from each other, nor build an impassable wall between them. A husband and wife may be divorced, and go out of the presence and beyond the reach of each other; but the different parts of our country cannot do this. They cannot but remain face to face, and intercourse, either amicable or hostile, must continue between them. Is it possible, then, to make that intercourse more advantageous or more satisfactory after separation than before? Can aliens make treaties easier than friends can make laws? Can treaties be more faithfully enforced between aliens than laws can among friends?
>
> **[3]** In your hands, my dissatisfied fellow-countrymen, and not in mine, is the momentous issue of civil war. The government will not assail you. You can have no conflict without being yourselves the aggressors. You have no oath registered in heaven to destroy the government, while I shall have the most solemn one to "preserve, protect, and defend it."
>
> **[4]** I am loath to close. We are not enemies, but friends. We must not be enemies. Though passion may have strained, it must not break our bonds of affection. The mystic chords of memory, stretching from every battle-field and patriot grave to every living heart and hearthstone all over this broad land, will yet swell the chorus of the Union when again touched, as surely they will be, by the better angels of our nature.
>
> — Abraham Lincoln, First Inaugural Address, March 4, 1861

### Reading the Arrangement

| Paragraph | Kind of appeal | Function in the line of reasoning |
|---|---|---|
| [1] | Logical, almost deductive | Secession destroys the majority rule on which any government depends |
| [2] | Practical | Even if separation were lawful, it would not solve anything: the sections must still deal with each other |
| [3] | Direct address, assigning responsibility | Any war will be the South's choice, since the government will not strike first |
| [4] | Emotional and unifying | Turns from argument to shared memory and hope |

The order moves from the **head** to the **hands** to the **heart**: what the law requires, what is physically possible, who will be responsible, and what the listeners share.
`
    },
    {
      id: 'englanga6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Passage Set, Questions 1–3** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The shift from paragraph 1 to paragraph 2 is best described as a move from',
            options: [
              'a constitutional argument to a practical one',
              'a personal appeal to a historical narrative',
              'a concession to a refutation of that concession',
              'a statement of policy to a description of the South'
            ],
            correctAnswer: 0,
            explanation: 'Paragraph 1 argues from the nature of majority rule, while "Physically speaking" opens an argument from geography and everyday relations. Neither paragraph is a personal appeal or a narrative, paragraph 1 concedes nothing, and paragraph 2 describes the sections\' relationship rather than the South.'
          },
          {
            question: 'The questions at the end of paragraph 2 ("Can aliens make treaties easier than friends can make laws?") primarily serve to',
            options: [
              'request that Southern leaders propose terms for a peaceful treaty',
              'lead listeners to see that separation would make relations harder',
              'suggest that foreign nations would side with the Union in a war',
              'admit that the Constitution does not settle the question directly'
            ],
            correctAnswer: 1,
            explanation: 'The questions expect the answer "no," leading listeners to conclude that becoming "aliens" would worsen the relations the sections must keep. Lincoln is not inviting a treaty, predicting foreign alliances, or conceding a constitutional gap here.'
          },
          {
            question: 'In paragraph 3, the phrase "In your hands... and not in mine" functions primarily to',
            options: [
              'threaten an immediate attack on the seceding states',
              'concede that the President lacks authority to act',
              'place responsibility for any war on the secessionists',
              'show that Lincoln regrets the oath he has just taken'
            ],
            correctAnswer: 2,
            explanation: 'Lincoln says the government "will not assail you," so any conflict would make the seceding states "the aggressors." He threatens nothing, claims his oath as authority rather than conceding a lack of it, and expresses no regret.'
          }
        ]
      }
    },
    {
      id: 'englanga6-revision',
      type: 'text' as const,
      content: `
## How Lincoln Revised His Conclusion

Lincoln's final paragraph began as a suggestion from William H. Seward, who became his Secretary of State. Seward advised that "something besides or in addition to argument is needful to meet and remove prejudice and passion in the South," and offered this closing:

> I close. We are not, we must not be, aliens or enemies, but fellow-countrymen and brethren. Although passion has strained our bonds of affection too hardly, they must not. I am sure they will not, be broken. The mystic chords which, proceeding from so many battlefields and so many patriot graves, pass through all the hearts and all hearths in this broad continent of ours, will yet again harmonize in their ancient music when breathed upon by the guardian angel of the nation.
>
> — William H. Seward's draft, as printed in the notes to Lincoln's collected works

| Seward's draft | Lincoln's final version | Effect of the change |
|---|---|---|
| "I close." | "I am loath to close." | The speaker's reluctance to stop becomes a sign of affection |
| "aliens or enemies, but fellow-countrymen and brethren" | "not enemies, but friends. We must not be enemies." | Shorter, plainer antithesis, then a repeated command |
| "will yet again harmonize in their ancient music" | "will yet swell the chorus of the Union" | Names the Union outright as the thing restored |
| "the guardian angel of the nation" | "the better angels of our nature" | Moves the source of rescue from an outside guardian to the listeners themselves |

The last change is the most important for structure. The whole speech has argued that the choice of war is "in your hands." The revised closing keeps that logic: peace depends on something **inside** the audience, not on rescue from outside. A conclusion that echoes the argument's central claim is stronger than one that merely sounds beautiful.
`
    },
    {
      id: 'englanga6-essay',
      type: 'text' as const,
      content: `
## Structuring Your Own Argument Essay (Question 3)

**Practice prompt.** In his closing speech to the Constitutional Convention in 1787, Benjamin Franklin asked every delegate who still had objections to "doubt a little of his own infallibility." Write an essay that argues your position on the value of doubting one's own certainty.

### Step 1: Choose a Structure That Fits Your Position (5 minutes)

| If your position is... | A structure that fits |
|---|---|
| Doubt is valuable, with no serious exception | Classical: thesis, two or three reasons with evidence, refutation of the strongest objection |
| Doubt is valuable only under certain conditions | Qualified classical: thesis with its condition, evidence for the value, evidence for the limit, a closing that reconciles them |
| Readers are likely to distrust doubt as weakness | Common ground: start from the value readers place on conviction, then show what conviction requires |

### Step 2: A Plan for a Qualified Position

| Section | Content |
|---|---|
| Thesis | Doubt is valuable when it leads a person to test a belief, but it becomes a failure when it becomes an excuse never to decide. |
| Body 1 | The value: doubt that tests belief against evidence (medicine, Semmelweis) |
| Body 2 | The limit: endless doubt that prevents action (a committee or a personal example) |
| Body 3 | The reconciliation: Franklin himself doubted and still signed |
| Conclusion | Doubt is a tool for reaching decisions, not a substitute for them |

Notice that the plan uses the prompt's own source as evidence in Body 3. The structure ends where Franklin ended: doubt followed by a decision.
`
    },
    {
      id: 'englanga6-model',
      type: 'text' as const,
      content: `
## An Annotated Model Mapped to the Rubric

The AP argument rubric awards up to 6 points: **Row A** thesis (0–1), **Row B** evidence and commentary (0–4), and **Row C** sophistication (0–1).

### Thesis (Row A)

> Doubting one's own certainty is valuable when it sends a person back to the evidence, but doubt that never ends in a decision is not humility; it is a way of avoiding responsibility.

This earns Row A because it takes a **defensible position** that responds to the prompt. It also previews the structure: value first, limit second.

### Body Paragraph 1 (Row B)

> **(1)** The most valuable doubt is the kind that sends us back to the evidence, because certainty can make even experts blind to what is in front of them. **(2)** In 1847, the physician Ignaz Semmelweis found that when doctors at Vienna's General Hospital washed their hands in a chlorine solution, deaths from childbed fever in his maternity ward fell sharply. **(3)** Yet for years many physicians rejected his findings, unwilling to believe that they themselves had been carrying disease to their patients. **(4)** Their certainty was not a lack of intelligence; it was a refusal to treat their own competence as a question. **(5)** Had they doubted a little of their own infallibility, as Franklin urged, they would have tested the claim instead of dismissing it, and patients would have lived. **(6)** Doubt of this kind does not weaken expertise; it is how expertise corrects itself.

| Sentence | Role | Rubric note |
|---|---|---|
| (1) | Topic claim that states the reason | Connects directly to the thesis |
| (2) | Specific evidence | Concrete, accurate, and relevant |
| (3) | Evidence of the opposing certainty | Sets up the analysis |
| (4) | Commentary: interprets the evidence | Explains **why** the doctors resisted, not just **that** they did |
| (5) | Commentary linking evidence to the prompt's source | Ties the example back to Franklin and the thesis |
| (6) | Commentary that extends the claim | Turns one case into a general principle |

Row B at 4 points requires evidence that supports **all** the claims in a line of reasoning and commentary that consistently explains how the evidence supports it. Sentences (4) through (6) are where those points are earned. A paragraph that stopped after sentence (3) would be a summary of history, not an argument.

### Where Row C Comes From

The thesis already contains a tension: doubt is valuable, **and** doubt can be an evasion. If the essay develops both sides and resolves them in Body 3 (Franklin doubted, then signed), it shows the "complexities or tensions" the sophistication point rewards. Row C is earned across the whole essay, not by one impressive sentence.
`
    },
    {
      id: 'englanga6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam Practice: Structure and the Rubric** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Compared with Seward\'s draft, Lincoln\'s phrase "the better angels of our nature" changes the conclusion chiefly by',
            options: [
              'placing the hope for peace within the listeners themselves',
              'adding a religious appeal that the draft had left out entirely',
              'replacing a familiar image with a more learned classical one',
              'making the closing longer and more formal than the original'
            ],
            correctAnswer: 0,
            explanation: 'Seward looked to "the guardian angel of the nation," an outside rescuer; Lincoln locates the angels in "our nature," matching the speech\'s claim that the choice lies with the audience. Both versions use angels, the image is not classical, and Lincoln\'s revisions generally shorten and simplify the draft.'
          },
          {
            question: 'In the model body paragraph, which sentence does the most to move the paragraph from summary to argument?',
            options: [
              'Sentence 2, which dates and places the evidence',
              'Sentence 3, which reports the physicians\' rejection',
              'Sentence 4, which explains why the doctors resisted',
              'Sentence 1, which announces the paragraph\'s topic'
            ],
            correctAnswer: 2,
            explanation: 'Sentence 4 interprets the evidence, explaining that the physicians\' certainty was a refusal to question their own competence, which is the commentary Row B rewards. Sentences 2 and 3 supply evidence, and sentence 1 states the claim without explaining any evidence.'
          },
          {
            question: 'A student\'s thesis reads: "Franklin talks about doubting yourself, which is something many people think about." Why would it NOT earn the Row A point?',
            options: [
              'It mentions the prompt\'s source instead of the student\'s own life.',
              'It describes the topic but does not take a defensible position on it.',
              'It is a single sentence when the rubric requires at least two of them.',
              'It fails to preview three separate body paragraphs for the reader.'
            ],
            correctAnswer: 1,
            explanation: 'Row A requires a defensible position that responds to the prompt, and this sentence only restates the topic. Mentioning the source is allowed, a thesis may be one sentence or more, and a preview of body paragraphs is optional.'
          }
        ]
      }
    }
  ]
};
