export const englitDramaticStructurePart6Data = {
  topicSlug: 'englit-dramatic-structure',
  sections: [
    {
      id: 'englitdr6-intro',
      type: 'text' as const,
      content: `
# 🎭 Dramatic Structure

**Part 6 of 7 — Drama on the AP Exam**

---

| Section |
|---------|
| 📋 Where Drama Shows Up |
| A Five-Step Routine for a Drama Passage |
| Practice Passage: *Othello*, Act 3, Scene 3 |
| Q3 With a Play: An Annotated Paragraph |

> 🔑 **Key Concept:** Drama appears on the exam in two places: as a passage in Section I and as a choice of work for Question 3, the literary argument. In both, the skills from Parts 2 to 5 (structure, speech types, tragic terms, dramatic irony and staging) become evidence for an interpretation.

| Exam fact | Detail |
|---|---|
| Section I | 55 multiple-choice questions in 60 minutes, 45% of the score, in five passage sets; the College Board groups drama with prose fiction, so a scene can appear as one of the prose sets |
| Section II | 3 essays in 2 hours, 55% of the score: poetry analysis (Q1), prose fiction analysis (Q2), literary argument (Q3) |
| Q3 | You choose a work of fiction; plays count, and prompt lists often include them |
| Scoring | Each essay 0-6: Row A thesis (0-1), Row B evidence and commentary (0-4), Row C sophistication (0-1) |
`
    },
    {
      id: 'englitdr6-routine',
      type: 'text' as const,
      content: `
## A Five-Step Routine for a Drama Passage

| Step | Do this | Why |
|---|---|---|
| 1. Read the headnote | Note who the characters are and what has just happened | Drama passages drop you into the middle; the headnote replaces the earlier acts |
| 2. Read every stage direction | Mark entrances, exits, asides, gestures | They tell you who can hear what |
| 3. Track who knows what | Write a quick note: what does the audience know that a character does not? | Most tone and effect questions depend on this gap |
| 4. Find the turn | Where does a character's attitude change, even slightly? | Questions about structure and "shift" target this |
| 5. Hear the verse | Notice short lines, shared lines, repetition, rhyming couplets | Rhythm changes often mark a change in power or feeling |

### How drama questions are worded

- "The stage direction in line ... primarily serves to"
- "Which of the following best describes the effect of the aside in line ...?"
- "Iago's response to Othello in lines ... can best be described as"
- "The exchange in lines ... reveals which of the following about the relationship between the two characters?"
`
    },
    {
      id: 'englitdr6-passage',
      type: 'text' as const,
      content: `
## Practice Passage: *Othello*, Act 3, Scene 3

*Headnote: Othello, a Moorish general in the service of Venice, has recently married Desdemona against her father's wishes. His ensign Iago, who has told the audience that he plans to destroy Othello, has begun to hint that Desdemona is unfaithful with Cassio, Othello's lieutenant.*

> IAGO. O, beware, my lord, of jealousy;
> It is the green-ey'd monster which doth mock
> The meat it feeds on.
>
> ...
>
> OTHELLO. I'll see before I doubt; when I doubt, prove;
> And on the proof, there is no more but this:
> Away at once with love or jealousy!
>
> IAGO. I am glad of it, for now I shall have reason
> To show the love and duty that I bear you
> With franker spirit: therefore, as I am bound,
> Receive it from me. I speak not yet of proof.
> Look to your wife; observe her well with Cassio;
>
> ...
>
> IAGO. She did deceive her father, marrying you;
> And when she seem'd to shake and fear your looks,
> She loved them most.
>
> OTHELLO. And so she did.
>
> IAGO. Why, go to then.
> She that so young could give out such a seeming,
> To seal her father's eyes up close as oak,
> He thought 'twas witchcraft. But I am much to blame.
> I humbly do beseech you of your pardon
> For too much loving you.
>
> OTHELLO. I am bound to thee for ever.
>
> IAGO. I see this hath a little dash'd your spirits.
>
> OTHELLO. Not a jot, not a jot.
>
> — William Shakespeare, *Othello*, Act 3, scene 3 (c. 1603)

### Annotation notes

| Moment | What a strong reader notices |
|---|---|
| "beware... of jealousy" | Iago warns against the very feeling he is planting, which makes him look like a protector |
| "I'll see before I doubt; when I doubt, prove" | Othello's confident, balanced syntax: he believes he is a man of evidence |
| "I speak not yet of proof" | Iago admits he has none, and the word "yet" promises it is coming |
| "She did deceive her father" | Iago turns Desdemona's love for Othello into evidence against her |
| "And so she did." | Othello's reply shrinks to four words. He has accepted Iago's premise |
| "I am bound to thee for ever." | An oath of loyalty to the wrong man; "bound" also suggests being tied up |
| "Not a jot, not a jot." | The repetition protests too much; his "spirits" are plainly dashed |

The structural turn is the shift from Othello's long, confident speech to his short replies. The verse shows the power moving to Iago.
`
    },
    {
      id: 'englitdr6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Practice Set: *Othello*, Act 3, Scene 3** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Iago's warning "beware, my lord, of jealousy" is ironic chiefly because`,
            options: [
              `Iago himself is the one deliberately stirring that jealousy`,
              `Othello has openly confessed to being a very jealous man`,
              `Desdemona has asked Iago to warn Othello on her behalf`,
              `jealousy is a feeling that Iago has never experienced`
            ],
            correctAnswer: 0,
            explanation: `The audience knows Iago is planting the suspicion he warns against, so his caution doubles as manipulation. Othello claims the opposite of jealousy, Desdemona asked nothing of Iago, and Iago himself claims to suspect Othello with his own wife.`
          },
          {
            question: `The change from Othello's speech beginning "I'll see before I doubt" to his reply "And so she did" chiefly marks`,
            options: [
              `his growing impatience with Iago's slow and cautious manner`,
              `the moment he resolves to confront Desdemona immediately`,
              `a shift from confident self-command to accepting Iago's case`,
              `his recognition that Iago has been lying to him all along`
            ],
            correctAnswer: 2,
            explanation: `His long, balanced lines about demanding proof give way to a short agreement with Iago's insinuation, so the verse records his confidence draining away. He shows no impatience, plans no confrontation yet, and recognizes Iago's lies only in Act 5.`
          },
          {
            question: `In context, Othello's repeated "Not a jot, not a jot" most strongly suggests that`,
            options: [
              `he has stopped listening to Iago and is thinking of his wife`,
              `he is more shaken than he is willing to admit to Iago`,
              `he finds Iago's concern for his feelings amusing`,
              `he has decided Iago is wrong and will drop the matter`
            ],
            correctAnswer: 1,
            explanation: `The doubled denial, just after Iago observes that his spirits are "dash'd," sounds like a man insisting too hard. Nothing suggests amusement, distraction or dismissal; the scene goes on with Othello growing more disturbed.`
          }
        ]
      }
    },
    {
      id: 'englitdr6-q3',
      type: 'text' as const,
      content: `
## Q3 With a Play: An Annotated Paragraph

Here is a practice prompt written in the AP format (it is not a released exam question):

> In many works of literature, a character places trust in someone who does not deserve it. That misplaced trust may reveal the character's strengths as well as weaknesses.
>
> Either from your own reading or from the following list, choose a work of fiction in which a character's misplaced trust is significant. Then, in a well-written essay, analyze how that trust contributes to an interpretation of the work as a whole.

### Planning with the tragedy toolkit

| Question | For *Othello* |
|---|---|
| What is the trust? | Othello trusts Iago ("honest Iago") and distrusts his wife |
| Where is the reversal? | Act 3, scene 3: the man who demanded "the ocular proof" accepts a handkerchief as proof |
| Where is the recognition? | Act 5, scene 2, when Emilia and Cassio expose Iago |
| What is the complexity? | Iago says Othello's "free and open nature" makes him easy to lead: his virtue is his vulnerability |

**Thesis:** In *Othello*, Shakespeare makes the hero's trust in Iago an outgrowth of his own generous "free and open nature," so the tragedy suggests that the virtue which raised Othello is the very thing that destroys him.

**Body paragraph:**

> (1) Othello's trust is not foolishness alone; it grows from the openness that made him great. (2) Iago tells the audience as much in his first soliloquy, sneering that the Moor "thinks men honest that but seem to be so." (3) Because we hear this plan before Othello ever doubts his wife, every later use of "honest Iago" becomes dramatic irony, and we watch a noble habit of mind turned into a weapon. (4) The turn comes in Act 3, when Othello vows, "I'll see before I doubt; when I doubt, prove," and a few lines later answers Iago's insinuation with a bare "And so she did." (5) The shrinking of his speech enacts the transfer of power: the man who demanded proof now accepts suggestion as fact. (6) Yet the play does not let Othello off entirely. (7) His final claim to be "one not easily jealous" sits uneasily beside the speed of his collapse, so his recognition is real but incomplete, and the tragedy asks us to pity a great man while seeing clearly what he still will not see in himself.

| Sentence | What it does | Rubric link |
|---|---|---|
| (1) | Claim that advances the thesis | Row B: line of reasoning |
| (2) | Evidence from the play, remembered closely | Row B: specific evidence |
| (3) | Commentary on how a structural device (soliloquy + dramatic irony) shapes meaning | Row B: explains the evidence |
| (4)-(5) | Evidence of the reversal and analysis of the verse | Row B: evidence and commentary |
| (6)-(7) | Complicates the claim with the partial recognition | Row C: explores complexity |

On Q3 you write from memory. Exact phrases like "honest Iago" or "ocular proof" are worth learning for the plays you prepare, but a precise paraphrase of a scene earns credit too. Never invent a quotation.
`
    },
    {
      id: 'englitdr6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Score the Sentence** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"Othello is a play by Shakespeare about a general who kills his wife." As a thesis, this ___`,
            options: ['summarizes without a defensible claim', 'earns Row A as written', 'earns the sophistication point', 'counts as specific evidence']
          },
          {
            label: `Sentence (3), explaining how the soliloquy turns "honest Iago" into irony, is chiefly ___`,
            options: ['commentary', 'evidence', 'thesis', 'summary']
          },
          {
            label: `Sentences (6)-(7), arguing the recognition is incomplete, most help the writer toward ___`,
            options: ['Row C', 'Row A', 'a grammar penalty', 'a plot summary']
          }
        ],
        correctAnswers: ['summarizes without a defensible claim', 'commentary', 'Row C'],
        hint1: 'Could anyone reasonably disagree with that sentence?',
        hint2: 'Does it quote, or does it explain why the quotation matters?',
        hint3: 'Exploring tension and complexity is one path to sophistication.',
        explanation: 'A plot description makes no arguable claim, so it cannot earn the thesis point; sentence (3) explains the significance of evidence, which is commentary; and the complication about partial recognition explores complexity, a route to Row C.'
      }
    },
    {
      id: 'englitdr6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `For the misplaced-trust prompt, which thesis about *Othello* is strongest?`,
            options: [
              `Othello trusts Iago, which leads to many tragic events and deaths.`,
              `Shakespeare uses many literary devices to show the theme of trust.`,
              `The open nature that makes Othello trusting is also what ruins him.`,
              `In this essay I will discuss trust, jealousy and betrayal in Othello.`
            ],
            correctAnswer: 2,
            explanation: `The strongest thesis makes a defensible interpretation with a line of reasoning: openness is both virtue and vulnerability. The others summarize, name devices without a claim, or announce topics.`
          },
          {
            question: `A student planning a Q3 essay on *Othello* remembers the handkerchief but not the exact words of any scene involving it. The best approach is to`,
            options: [
              `invent a plausible line of dialogue so the evidence looks precise`,
              `leave the handkerchief out, since only exact quotations earn credit`,
              `trace the handkerchief's path through the play precisely`,
              `replace it with a better-remembered example from a different play`
            ],
            correctAnswer: 2,
            explanation: `Specific paraphrase of a scene counts as evidence on Q3, and the handkerchief's path is strong evidence. Invented quotations damage credibility, exact quotation is not required, and switching plays breaks the essay's focus on one work.`
          }
        ]
      }
    }
  ]
}
