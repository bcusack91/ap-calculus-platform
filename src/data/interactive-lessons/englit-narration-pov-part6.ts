export const englitNarrationPovPart6Data = {
  topicSlug: 'englit-narration-pov',
  sections: [
    {
      id: 'englitna6-intro',
      type: 'text' as const,
      content: `
# 👁️ Narration and Point of View

**Part 6 of 7 — Narration on the Exam**

---

| Section |
|---------|
| 📖 Narrator Questions in Section I |
| Practice Passage: The Opening of *Emma* |
| A Q2 Thesis About Narration |
| An Annotated Model Paragraph |
| From Label to Function |

> 🔑 **Key Concept:** Narration shows up everywhere on the AP Literature exam. In Section I (55 questions, 60 minutes, 45% of the score), prose sets regularly ask about the narrator's identity, attitude and reliability. In Section II, the prose fiction essay (Q2) asks you to analyze how an author conveys something complex, and the narrator is often the best engine for that argument. This part practices both, using the opening of Jane Austen's *Emma*.
`
    },
    {
      id: 'englitna6-stems',
      type: 'text' as const,
      content: `
## 📖 Narrator Questions in Section I

| Stem you will see | What it tests | How to answer |
|---|---|---|
| "The narrator is best described as..." | Point of view and stance (4.A) | Check person and access, then the narrator's relation to the story (witness, participant, commentator) |
| "The narrator's attitude toward... is best described as..." | Perspective (4.C) | Find diction and qualifiers; choose a precise, often mixed, tone pair over an extreme |
| "The narrator's description of... suggests that..." | Inference from perspective | Choose what the description *reveals*, which is often more than the character sees |
| "In context, the phrase... primarily reflects..." | Whose view a phrase carries | Ask whether the words belong to the narrator, to a character, or to both (free indirect discourse) |
| "The shift in lines... primarily serves to..." | Function of a change in access or distance (4.B) | Name what the reader learns or feels after the shift that was unavailable before |
| "Which best describes the relationship between the narrator and..." | Irony and reliability (4.D) | Look for a gap between what is said and what is shown |

### Traps in the answer choices

| Trap | Why it is wrong |
|---|---|
| Treats a character's view as plain fact | In limited or free indirect narration, many sentences are filtered through a mind |
| Extreme tone words ("contemptuous," "worshipful") | Exam passages are usually chosen for mixed or subtle attitudes |
| Restates the plot | Narrator questions ask about stance and effect, not what happens |
| Confuses the narrator with the author | The narrator is a constructed voice, even in the third person |
`
    },
    {
      id: 'englitna6-passage',
      type: 'text' as const,
      content: `
## Practice Passage: The Opening of *Emma*

> Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her.
>
> Sixteen years had Miss Taylor been in Mr. Woodhouse's family, less as a governess than a friend, very fond of both daughters, but particularly of Emma. Between them it was more the intimacy of sisters. Even before Miss Taylor had ceased to hold the nominal office of governess, the mildness of her temper had hardly allowed her to impose any restraint; and the shadow of authority being now long passed away, they had been living together as friend and friend very mutually attached, and Emma doing just what she liked; highly esteeming Miss Taylor's judgment, but directed chiefly by her own.
>
> The real evils, indeed, of Emma's situation were the power of having rather too much her own way, and a disposition to think a little too well of herself; these were the disadvantages which threatened alloy to her many enjoyments. The danger, however, was at present so unperceived, that they did not by any means rank as misfortunes with her.
>
> Sorrow came—a gentle sorrow—but not at all in the shape of any disagreeable consciousness.—Miss Taylor married. It was Miss Taylor's loss which first brought grief. ... The event had every promise of happiness for her friend. Mr. Weston was a man of unexceptionable character, easy fortune, suitable age, and pleasant manners; and there was some satisfaction in considering with what self-denying, generous friendship she had always wished and promoted the match; but it was a black morning's work for her.
>
> — Jane Austen, *Emma*, 1815 (Chapter 1; the novel's second paragraph is omitted)

"Alloy" is a cheaper metal mixed into gold, so "threatened alloy to her many enjoyments" means *threatened to debase her pleasures*.
`
    },
    {
      id: 'englitna6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In the first sentence, the word "seemed" primarily serves to`,
            options: [
              `hint that Emma's good fortune may be less whole than it looks`,
              `show that Emma doubts whether she is really handsome and clever`,
              `suggest that the neighbors envy Emma's wealth and comfort`,
              `signal that the narrator has not yet met Emma in person`
            ],
            correctAnswer: 0,
            explanation: `"Seemed" turns a list of blessings into an appearance, preparing for the "real evils" named two paragraphs later. Emma has no such doubts, no neighbors are mentioned, and the narrator plainly knows her well.`
          },
          {
            question: `The narrator's attitude toward Emma in the passage is best described as`,
            options: [
              `fond but ironic`,
              `admiring and uncritical`,
              `scornful and severe`,
              `detached and indifferent`
            ],
            correctAnswer: 0,
            explanation: `The narrator praises Emma's gifts and softens her faults with "rather" and "a little," yet still calls them "evils," which is affection with an ironic edge. The criticism rules out uncritical admiration, the soft qualifiers rule out severity, and the close attention rules out indifference.`
          },
          {
            question: `The sentence beginning "The real evils, indeed" chiefly serves to`,
            options: [
              `list the hardships Emma has suffered since childhood`,
              `name faults in Emma that she does not yet perceive in herself`,
              `explain why Miss Taylor left Mr. Woodhouse's family`,
              `predict that Emma will soon lose her family's fortune`
            ],
            correctAnswer: 1,
            explanation: `The narrator identifies Emma's willfulness and vanity and adds that the danger is "at present so unperceived" that she does not count them as misfortunes. They are faults rather than hardships, Miss Taylor leaves to marry, and nothing threatens the fortune.`
          },
          {
            question: `In context, the praise of the "self-denying, generous friendship" with which Emma promoted Miss Taylor's match most likely reflects`,
            options: [
              `Miss Taylor's spoken thanks to Emma`,
              `Mr. Weston's private opinion of the match`,
              `the narrator's own settled verdict on Emma`,
              `Emma's flattering view of her own role`
            ],
            correctAnswer: 3,
            explanation: `The phrase sits inside Emma's "satisfaction in considering" her conduct, so the praise is her self-assessment, colored by the vanity the narrator has just named. No one else speaks here, and the narrator's own verdict was the more critical one.`
          }
        ]
      }
    },
    {
      id: 'englitna6-thesis',
      type: 'text' as const,
      content: `
## A Q2 Thesis About Narration

Here is a practice prompt in the exam's format (written for this lesson):

> The following passage is the opening of Jane Austen's novel *Emma* (1815). Read the passage carefully. Then, in a well-written essay, analyze how Austen uses literary elements and techniques to convey a complex portrait of Emma Woodhouse.

Every Q2 prompt then gives the same instructions:

> Respond to the prompt with a thesis that presents a defensible interpretation. Select and use evidence to support your line of reasoning. Explain how the evidence supports your line of reasoning. Use appropriate grammar and punctuation in communicating your argument.

### A thesis ladder

| Level | Thesis | Verdict |
|---|---|---|
| Restates the prompt | *Austen uses literary techniques to convey a complex portrait of Emma.* | No Row A point: nothing is interpreted |
| Names a label | *Austen uses third-person omniscient narration to describe Emma.* | No Row A point: a label, not an interpretation |
| Defensible but thin | *Austen's narrator shows that Emma is spoiled.* | Defensible, but "spoiled" flattens the complexity the prompt asks for |
| Defensible with a line of reasoning | *Austen's narrator praises Emma in terms that quietly qualify themselves, so that the reader admires her gifts while seeing, before she does, that an easy life has left her judgment untested.* | Earns Row A and sets up body paragraphs: the praise, the qualifications, the gap in perception |

The strongest thesis makes **narration itself** part of the argument: not "the narrator says Emma is vain," but "the way the narrator tells us lets us see what Emma cannot."
`
    },
    {
      id: 'englitna6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Score the Thesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"Austen uses third-person narration in the opening of Emma." This thesis ___`,
            options: ['labels without interpreting', 'earns the Row A point', 'restates the prompt', 'earns the Row C point']
          },
          {
            label: `"In this passage, Austen conveys a complex portrait of Emma Woodhouse." This thesis ___`,
            options: ['restates the prompt', 'earns the Row A point', 'labels without interpreting', 'earns the Row C point']
          },
          {
            label: `"Austen's narrator flatters Emma in phrases that undercut themselves, so readers see her untested judgment before she does." This thesis ___`,
            options: ['earns the Row A point', 'restates the prompt', 'labels without interpreting', 'earns the Row C point']
          }
        ],
        correctAnswers: ['labels without interpreting', 'restates the prompt', 'earns the Row A point'],
        hint1: 'Naming a point of view is not yet a claim about meaning.',
        hint2: 'Compare it word for word with the prompt.',
        hint3: 'Does it make a defensible interpretation the essay could argue?',
        explanation: 'Naming the point of view only labels it, and echoing the prompt interprets nothing. The third thesis makes a defensible claim about how narration shapes the reader\'s view, which earns Row A. Row C is judged across the whole essay, not from a thesis alone.'
      }
    },
    {
      id: 'englitna6-model',
      type: 'text' as const,
      content: `
## An Annotated Model Paragraph

> (1) From its first sentence, Austen's narrator praises Emma in language that quietly qualifies itself, inviting the reader to admire her while recognizing what she cannot yet see. (2) The opening list, "handsome, clever, and rich," sounds like a tribute, yet its verb is "seemed": Emma only seemed to "unite some of the best blessings of existence." (3) The single word turns a portrait into an appearance and makes the reader ask what the appearance hides. (4) The answer arrives in a sentence that names "the real evils" of her situation in the mildest terms possible: "the power of having rather too much her own way, and a disposition to think a little too well of herself." (5) The qualifiers "rather" and "a little" keep the judgment affectionate, but the noun "evils" refuses to let the faults pass as charms. (6) Most telling is the remark that the danger was "so unperceived, that they did not by any means rank as misfortunes with her": the narrator knows something Emma does not, and the reader is invited to share that knowledge. (7) By opening a gap between what Emma perceives and what the reader is told, Austen makes the novel's real plot not a courtship but an education, in which Emma must learn to see herself as clearly as the narrator already does.

### How the paragraph earns its points

| Sentence | Move | Rubric |
|---|---|---|
| (1) | A claim about how the narration works, tied to the thesis | Row B: claim in a line of reasoning |
| (2) | Short quotations embedded in the writer's own sentence | Row B: specific evidence |
| (3) | Explains the effect of one word | Row B: commentary |
| (4)-(5) | Quotes the key sentence, then explains what the qualifiers and the noun do | Row B: evidence plus commentary on diction |
| (6) | Names the knowledge gap between narrator and character | Row B: commentary on point of view's function (4.B) |
| (7) | Connects the gap to the shape of the whole novel | Row B: consistent explanation; Row C: broader context |

### Reaching for Row C: an alternative reading

> One might read the narrator as Emma's critic, standing coolly above her. Yet the same voice slips into Emma's own flattering terms when it describes "what self-denying, generous friendship she had always wished and promoted the match," so the reader is drawn into her self-approval even while being warned about it. The narration does not simply judge Emma; it moves in and out of her view, which is why the reader can laugh at her and still wish her well.

This addition accounts for an alternative interpretation and explores a tension, two of the recognized routes to the sophistication point.
`
    },
    {
      id: 'englitna6-frames',
      type: 'text' as const,
      content: `
## From Label to Function

| Label (earns little) | Function (earns credit) |
|---|---|
| "The story is in third person." | "The narration stays close enough to Emma to share her pleasure and far enough away to judge it." |
| "The narrator is unreliable." | "Lockwood reports the details accurately but reads them through drawing-room assumptions, so the reader learns to distrust a polite outsider's view." |
| "Huck is a naive narrator." | "Huck's sincere self-condemnation makes the reader admire the very act he calls a sin." |
| "The narrator is omniscient." | "By reporting George's death while Amelia still prays, the narrator makes the reader the only one who knows." |

Useful verbs for narration commentary: the narration *withholds, reveals, filters, qualifies, undercuts, aligns the reader with, distances the reader from, exposes.*

> 🔑 **AP Connection:** In Q2, point of view is strongest as the backbone of a line of reasoning, not as one item in a list of devices. Ask: what does this narration let the reader know or feel that a different narration would not? Your answer to that question is usually a thesis.
`
    },
    {
      id: 'englitna6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Essay Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Which revision best turns the sentence "The passage is told by a third-person omniscient narrator" into commentary that could earn Row B credit?`,
            options: [
              `The narrator knows everything about each character in the passage.`,
              `The narrator uses the pronouns "she" and "her" throughout the passage.`,
              `The narrator's soft qualifiers let readers see Emma's faults before she does.`,
              `Austen wrote the novel in 1815, when omniscient narration was common.`
            ],
            correctAnswer: 2,
            explanation: `Only this revision explains what the narration does: its qualifiers create a gap in perception between reader and character. The other choices restate the label, describe pronouns, or add context without analysis.`
          },
          {
            question: `A student's paragraph argues that the narrator is cruel to Emma. Which addition would most likely help the essay earn the sophistication point?`,
            options: [
              `A second quotation that also shows Emma's vanity`,
              `A definition of irony and a list of its main kinds`,
              `A summary of the novel's plot to show that Emma changes`,
              `A concession that soft qualifiers keep the irony fond`
            ],
            correctAnswer: 3,
            explanation: `Accounting for an alternative interpretation, here the affection in "rather" and "a little," is a recognized route to Row C. More evidence for the same point, definitions and plot summary do not add complexity.`
          }
        ]
      }
    }
  ]
}
