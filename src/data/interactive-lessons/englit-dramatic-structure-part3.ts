export const englitDramaticStructurePart3Data = {
  topicSlug: 'englit-dramatic-structure',
  sections: [
    {
      id: 'englitdr3-intro',
      type: 'text' as const,
      content: `
# 🎭 Dramatic Structure

**Part 3 of 7 — Speech on Stage: Dialogue, Soliloquy, Aside and Monologue**

---

| Section |
|---------|
| 🗣️ Who Hears What: Four Kinds of Stage Speech |
| Hamlet: The Aside and the First Soliloquy |
| Iago: A Villain Who Confides in Us |
| Macbeth: An Aside That Grows |
| Writing About Stage Speech |

> 🔑 **Key Concept:** In drama, the question "who can hear this?" is as important as "what is said?" Skills **4.A** and **4.C** ask you to describe a speaker and the details that reveal his perspective. On stage, the kind of speech a character uses tells you how far to trust it and what the audience knows that others do not.
`
    },
    {
      id: 'englitdr3-types',
      type: 'text' as const,
      content: `
## 🗣️ Who Hears What: Four Kinds of Stage Speech

| Device | Definition | Who hears it | What it gives the audience |
|---|---|---|---|
| **Dialogue** | Conversation between characters | Everyone onstage | Public selves: what characters choose to say to each other |
| **Monologue** | A long speech by one character **to others** onstage | The other characters | A public performance, often persuasive or self-justifying |
| **Soliloquy** | A speech by a character **alone** (or believing himself alone), thinking aloud | Only the audience | Private thought; by stage convention, what the character really thinks or feels at that moment |
| **Aside** | A brief remark the other characters onstage do **not** hear | The audience (or one chosen character) | A quick glimpse behind the public mask, often ironic |

Two other forms also speak over the characters' heads:

- A **chorus** (in Greek tragedy, a group; in *Romeo and Juliet*, a single speaker) comments on the action and frames it.
- A **prologue** or **epilogue** addresses the audience before or after the play.

### Why the convention matters

A soliloquy is not a lie the character tells the audience; the convention is that we hear honest thought. But "honest" does not mean "correct." A character can sincerely misjudge, rationalize or contradict himself in a soliloquy, and that self-deception is often the point.
`
    },
    {
      id: 'englitdr3-hamlet',
      type: 'text' as const,
      content: `
## Hamlet: The Aside and the First Soliloquy

In Act 1, scene 2, the new king, Claudius, has just married Hamlet's mother. In front of the whole court he turns to Hamlet:

> KING. But now, my cousin Hamlet, and my son—
>
> HAMLET. [Aside.] A little more than kin, and less than kind.
>
> KING. How is it that the clouds still hang on you?
>
> HAMLET. Not so, my lord, I am too much i' the sun.
>
> — William Shakespeare, *Hamlet*, Act 1, scene 2 (c. 1600)

| Line | Kind of speech | What it does |
|---|---|---|
| "A little more than kin, and less than kind" | Aside | Hamlet's first words in the play are for us. Claudius is now more than kin (uncle **and** stepfather) but less than "kind," a word meaning both *kindly* and *natural*. The marriage feels unnatural to him |
| "too much i' the sun" | Dialogue | A public pun: "sun" sounds like "son." He resents being called Claudius's son, but he hides the barb inside a polite answer |

The court then leaves. The stage direction reads "Exeunt all but Hamlet," and he speaks his first soliloquy:

> O that this too too solid flesh would melt,
> Thaw, and resolve itself into a dew!
> ...
> How weary, stale, flat, and unprofitable
> Seem to me all the uses of this world!
> Fie on't! Oh fie! 'tis an unweeded garden
> That grows to seed; things rank and gross in nature
> Possess it merely.
> ...
> But break, my heart, for I must hold my tongue.

| Feature | Evidence | What it reveals |
|---|---|---|
| Wish for dissolution | Flesh that would "melt, / Thaw, and resolve itself into a dew" | Despair so deep that he wishes he could simply cease |
| Image of the world | "an unweeded garden / That grows to seed" | Denmark, and life itself, seem overrun by corruption |
| Broken syntax | Dashes, exclamations, a thought that keeps returning to "within a month" | A mind that cannot stop circling his mother's hasty remarriage |
| Final line | "I must hold my tongue" | The soliloquy exists **because** he cannot speak in public |

The scene's structure is the lesson: a public exchange full of guarded puns, then an empty stage and an outpouring. The gap between the two shows us a man forced to perform.
`
    },
    {
      id: 'englitdr3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Hamlet's line "A little more than kin, and less than kind" is an aside, which means that`,
            options: [
              `Claudius hears it and chooses to ignore the insult`,
              `the audience hears it but the court onstage does not`,
              `Hamlet speaks it alone after the court has departed`,
              `a chorus speaks it on Hamlet's behalf to the audience`
            ],
            correctAnswer: 1,
            explanation: `An aside is a brief remark that other characters onstage are understood not to hear, so only the audience catches Hamlet's resentment. Speaking alone after others leave describes a soliloquy, and no chorus speaks for Hamlet.`
          },
          {
            question: `The final line of Hamlet's first soliloquy, "But break, my heart, for I must hold my tongue," chiefly suggests that`,
            options: [
              `he plans to reveal his grief to the court the next day`,
              `he has already decided to take revenge on Claudius`,
              `he believes his mother will soon regret her marriage`,
              `his private anguish has no outlet in the public court`
            ],
            correctAnswer: 3,
            explanation: `He must stay silent in public, so the soliloquy is the only place his anguish can go. He makes no plan to speak, he has not yet met the Ghost, so revenge is not on his mind, and he predicts nothing about his mother.`
          }
        ]
      }
    },
    {
      id: 'englitdr3-iago',
      type: 'text' as const,
      content: `
## Iago: A Villain Who Confides in Us

In *Othello*, the ensign Iago tells the audience his plans in soliloquy after soliloquy. At the end of Act 1 he is left alone:

> I hate the Moor,
> And it is thought abroad that 'twixt my sheets
> He has done my office. I know not if 't be true,
> But I, for mere suspicion in that kind,
> Will do as if for surety.
> ...
> The Moor is of a free and open nature
> That thinks men honest that but seem to be so,
> And will as tenderly be led by the nose
> As asses are.
> I have't. It is engender'd. Hell and night
> Must bring this monstrous birth to the world's light.
>
> — William Shakespeare, *Othello*, Act 1, scene 3 (c. 1603)

| Detail | Analysis |
|---|---|
| "I know not if 't be true, / But I, for mere suspicion... / Will do as if for surety" | He admits his motive (a rumor that Othello slept with his wife) may be false, and he will act on it anyway. The audience sees a man who wants a reason more than he has one |
| "a free and open nature / That thinks men honest that but seem to be so" | Othello is characterized by his enemy: his trust is the weakness Iago will use |
| "led by the nose / As asses are" | Contempt that turns a general into a beast of burden |
| "Hell and night / Must bring this monstrous birth" | The plot is imagined as a monster being born; the rhyming couplet seals the scene |

In Act 2 Iago even taunts us: "And what's he then, that says I play the villain?" He argues that his advice to Cassio is honest, then answers himself: "Divinity of hell!" He will "out of her own goodness make the net / That shall enmesh them all."

### What Iago's soliloquies do to the audience

- **Dramatic irony:** we know the plan; every character who calls him "honest Iago" does not.
- **Uncomfortable complicity:** he speaks to us as if we were his partners, so we watch the trap close with knowledge we cannot use.
- **Tension, not surprise:** the play's suspense comes from waiting for the victims to see what we already see.

Iago also uses an aside in the middle of a public scene. As Cassio takes Desdemona's hand in polite greeting, Iago mutters: "He takes her by the palm. Ay, well said, whisper. With as little a web as this will I ensnare as great a fly as Cassio." The web image joins the net of his later soliloquy.
`
    },
    {
      id: 'englitdr3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Speech Type** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Iago, alone on stage at the end of Act 1, reveals his plan against Othello. This is a ___`,
            options: ['soliloquy', 'aside', 'monologue', 'dialogue']
          },
          {
            label: `During a public greeting, Iago mutters a line about catching Cassio in "a web" that Cassio does not hear. This is an ___`,
            options: ['aside', 'soliloquy', 'epilogue', 'monologue']
          },
          {
            label: `Othello's long account to the Venetian senators of how he won Desdemona is a ___`,
            options: ['monologue', 'soliloquy', 'aside', 'prologue']
          }
        ],
        correctAnswers: ['soliloquy', 'aside', 'monologue'],
        hint1: 'He is alone with the audience.',
        hint2: 'A brief remark, unheard by others onstage.',
        hint3: 'A long speech addressed to other characters.',
        explanation: 'Iago alone with the audience speaks a soliloquy; his muttered line in company is an aside; and Othello\'s long speech to the senators is a monologue, a public speech to listeners onstage.'
      }
    },
    {
      id: 'englitdr3-macbeth',
      type: 'text' as const,
      content: `
## Macbeth: An Aside That Grows

In Act 1, scene 3, the witches have hailed Macbeth as future king, and a messenger has just named him Thane of Cawdor, fulfilling one of their predictions. While his companions wait, Macbeth turns aside:

> Two truths are told,
> As happy prologues to the swelling act
> Of the imperial theme.—I thank you, gentlemen.—
> This supernatural soliciting
> Cannot be ill; cannot be good. If ill,
> Why hath it given me earnest of success,
> Commencing in a truth? I am Thane of Cawdor:
> If good, why do I yield to that suggestion
> Whose horrid image doth unfix my hair,
> And make my seated heart knock at my ribs,
> Against the use of nature? Present fears
> Are less than horrible imaginings.
>
> — William Shakespeare, *Macbeth*, Act 1, scene 3 (c. 1606)

| Feature | What it shows |
|---|---|
| "I thank you, gentlemen" breaking into the aside | Macbeth is split between public courtesy and private calculation, in the same breath |
| Theater metaphor: "happy prologues to the swelling act / Of the imperial theme" | He already imagines his life as a drama building to a crown |
| "Cannot be ill; cannot be good" | Balanced, contradictory clauses: a mind arguing with itself |
| "that suggestion / Whose horrid image" | The idea of murder appears here, unnamed, before anyone has proposed it |
| "Present fears / Are less than horrible imaginings" | What he imagines frightens him more than anything real |

An aside is usually brief. This one stretches on while the other characters stand by; his companion Banquo remarks on how "rapt" he is. The length itself becomes a sign that Macbeth is being pulled away from the people around him and into his own ambition.
`
    },
    {
      id: 'englitdr3-writing',
      type: 'text' as const,
      content: `
## Writing About Stage Speech

| Weak | Strong |
|---|---|
| "Hamlet has a soliloquy where he is sad." | "Shakespeare follows the guarded puns of the court scene with Hamlet's first soliloquy, so the audience feels the pressure of a grief that can be voiced only on an empty stage." |
| "Iago tells the audience his plan." | "By confiding his plot to the audience, Iago makes us complicit witnesses: every later 'honest Iago' becomes an irony we share and cannot stop." |
| "Macbeth has an aside." | "Macbeth's aside swells far beyond a quick remark, and its length dramatizes how fast his ambition draws him out of the company of loyal men." |

### Common Misconceptions

- **"A soliloquy is any long speech."** A long speech to others is a monologue. A soliloquy is spoken alone, or as if alone.
- **"Soliloquies are always reliable."** They are sincere, not necessarily accurate. Iago's shifting motives and Hamlet's self-accusations both need judging.
- **"An aside is a stage direction."** The word "Aside" in brackets is the stage direction; the aside is the spoken line.

> 🔑 **AP Connection:** When a Section I drama passage includes an aside or soliloquy, expect a question about what the audience learns that other characters do not. The best answer names the gap between public speech and private thought.
`
    },
    {
      id: 'englitdr3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In his Act 1 soliloquy, Iago's admission "I know not if 't be true, / But I, for mere suspicion in that kind, / Will do as if for surety" most clearly suggests that`,
            options: [
              `he seeks justice for a wrong that Othello has openly admitted`,
              `his motive is shaky, yet he is resolved to act on it all the same`,
              `he intends to test the rumor carefully before he takes any action`,
              `he has been ordered by the Venetian senate to spy on Othello`
            ],
            correctAnswer: 1,
            explanation: `He concedes the rumor may be false and commits to acting "as if" it were certain, so the motive is thin and the resolve is firm. Othello admits nothing, Iago plans no fair test, and no senate order exists.`
          },
          {
            question: `Macbeth's description of the witches' prophecies as "happy prologues to the swelling act / Of the imperial theme" chiefly reveals that he`,
            options: [
              `is already picturing his own path to the crown as a play`,
              `doubts the witches because their words sound like a play`,
              `wishes to reward the messengers who brought him the news`,
              `fears that Banquo will be the one to take the throne`
            ],
            correctAnswer: 0,
            explanation: `The theater metaphor frames the prophecies as the opening of a drama that ends in kingship, so his imagination has leapt ahead. He does not doubt them here, the thanks to the messengers are separate courtesy, and Banquo is not mentioned in these lines.`
          },
          {
            question: `Which of the following best describes the main dramatic effect of Iago's soliloquies on the audience?`,
            options: [
              `They build surprise when his plot is finally exposed in Act 5.`,
              `They suggest that the other characters secretly support his plan.`,
              `They create irony each time others trust him as an honest man.`,
              `They reassure the audience that his schemes cannot really succeed.`
            ],
            correctAnswer: 2,
            explanation: `Because the audience knows Iago's plans, every expression of trust in him becomes dramatic irony. His exposure is no surprise to us, the other characters do not support him, and the soliloquies make his success seem more likely, not less.`
          }
        ]
      }
    }
  ]
}
