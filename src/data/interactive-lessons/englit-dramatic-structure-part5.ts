export const englitDramaticStructurePart5Data = {
  topicSlug: 'englit-dramatic-structure',
  sections: [
    {
      id: 'englitdr5-intro',
      type: 'text' as const,
      content: `
# 🎭 Dramatic Structure

**Part 5 of 7 — Dramatic Irony, Comic Structure and Staging**

---

| Section |
|---------|
| 🎭 Three Kinds of Irony on Stage |
| Comic Structure: *The Importance of Being Earnest* |
| Reading Stage Directions, Props and Costume |
| Common Misconceptions About Drama |

> 🔑 **Key Concept:** Skills **3.D** (contrasts) and **3.F** (conflict) apply to drama with a twist: the audience is a participant. A play can let the audience know more than the characters, and that gap is one of the playwright's main tools. The same tool can produce terror in a tragedy and laughter in a comedy.
`
    },
    {
      id: 'englitdr5-irony',
      type: 'text' as const,
      content: `
## 🎭 Three Kinds of Irony on Stage

| Kind | Definition | Stage example |
|---|---|---|
| **Verbal irony** | A speaker says one thing and means another | Hamlet's "I am too much i' the sun": polite on the surface, a jab at being called Claudius's "son" |
| **Situational irony** | The outcome is the opposite of what was intended or expected | The Corinthian messenger's comforting news destroys Oedipus |
| **Dramatic irony** | The audience knows something a character does not | Othello repeatedly calls the man destroying him "honest Iago" |

### Dramatic irony in tragedy

The phrase "honest Iago" is spoken again and again in *Othello*. Othello says it as he leaves Desdemona in Iago's care: "My life upon her faith! Honest Iago, / My Desdemona must I leave to thee." Cassio says it: "Good night, honest Iago." And the moment Cassio leaves, Iago turns to the audience: "And what's he then, that says I play the villain?"

Each repetition widens the gap between what the characters believe and what we know. That gap produces **tension** (we wait for them to see), **pity** (we watch good people trust the wrong man) and a sense of **inevitability** (the trap is set before the victims sense it).

Dramatic irony is often called **tragic irony** when the character's words point, without his knowing it, toward his own doom, as in Oedipus's curse on the murderer he will turn out to be.
`
    },
    {
      id: 'englitdr5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Irony** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Oedipus vows to avenge Laius "As though he were my sire," not knowing Laius was his father. This is ___ irony`,
            options: ['dramatic', 'verbal', 'situational', 'cosmic']
          },
          {
            label: `Hamlet tells Claudius, "I am too much i' the sun," punning on "son" to needle him. This is ___ irony`,
            options: ['verbal', 'dramatic', 'situational', 'structural']
          },
          {
            label: `News sent to free Oedipus from fear instead reveals his worst crimes. This is ___ irony`,
            options: ['situational', 'verbal', 'dramatic', 'romantic']
          }
        ],
        correctAnswers: ['dramatic', 'verbal', 'situational'],
        hint1: 'The audience knows what the speaker does not.',
        hint2: 'The speaker means more than his polite words say.',
        hint3: 'The result is the opposite of what was intended.',
        explanation: 'Oedipus speaks a truth the audience recognizes and he does not (dramatic irony); Hamlet deliberately means more than he says (verbal irony); and comforting news that destroys is an outcome opposite to its intent (situational irony).'
      }
    },
    {
      id: 'englitdr5-comedy',
      type: 'text' as const,
      content: `
## Comic Structure: *The Importance of Being Earnest*

Comedy and tragedy share the same machinery: complication, a hidden truth and a recognition. What differs is the direction of the turn. In tragedy, recognition brings ruin; in comedy, it brings restoration, usually sealed by marriages.

Oscar Wilde's *The Importance of Being Earnest* (first performed 1895) runs on a double lie. Jack Worthing calls himself "Ernest" in town and pretends to have a wicked younger brother named Ernest. His friend Algernon invents an invalid friend, "Bunbury," as an excuse to escape dull engagements. Gwendolen, whom Jack loves, announces that "my ideal has always been to love some one of the name of Ernest."

| Stage | Tragedy (*Oedipus*) | Comedy (*Earnest*) |
|---|---|---|
| Hidden truth | Oedipus does not know his parents | Jack does not know his parents; he was found as a baby in "a hand-bag" |
| Complication | His search for the killer leads toward himself | Two men claim to be "Ernest"; two engagements collapse |
| Recognition | The herdsman's story: "all brought to pass, all true!" | Miss Prism's story about the hand-bag reveals Jack's real family, and his real name |
| Resolution | Death, blinding, exile | Three couples embrace, each with "At last!" |

### A scene built on dramatic irony

In Act 2, Algernon has arrived at Jack's country house pretending to be the wicked brother Ernest. Then:

> [Enter Jack slowly from the back of the garden. He is dressed in the deepest mourning, with crape hatband and black gloves.]
>
> ...
>
> CHASUBLE. Dear Mr. Worthing, I trust this garb of woe does not betoken some terrible calamity?
>
> JACK. My brother.
>
> ...
>
> JACK. [Shaking his head.] Dead!
>
> — Oscar Wilde, *The Importance of Being Earnest*, Act 2 (1895)

The audience knows what Jack does not: the "dead" brother is alive and well, inside the house behind him. The costume (full mourning, described in the stage direction) makes the lie visual, and the comedy comes from waiting for Jack to meet his own invention.

### The ending's pun

The play's last line turns its title into a joke about its own structure. Jack, discovering that his real name actually is Ernest, says: "I've now realised for the first time in my life the vital Importance of Being Earnest." The stage direction that follows is one word: "TABLEAU." The cast freezes, as if in a picture, and the comic order is complete.
`
    },
    {
      id: 'englitdr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Jack's entrance "in the deepest mourning" for a brother who does not exist is comic mainly because`,
            options: [
              `the audience knows Algernon is in the house posing as that brother`,
              `Chasuble has already been told the truth about the invented brother`,
              `mourning clothes were considered amusing by audiences of the 1890s`,
              `Jack is pretending to grieve in order to win Miss Prism's sympathy`
            ],
            correctAnswer: 0,
            explanation: `The joke depends on dramatic irony: we know the "dead" brother is being impersonated, very much alive, a few yards away. Chasuble is as deceived as anyone, mourning dress is not funny in itself, and Jack's aim is to end the Ernest fiction, not to court Miss Prism.`
          },
          {
            question: `The recognition scenes in *Oedipus the King* and *The Importance of Being Earnest* are most alike in that each`,
            options: [
              `is staged as a duel between the hero and a rival`,
              `brings the hero's true parentage to light`,
              `is spoken by a chorus addressing the audience`,
              `reveals that the hero has committed a murder`
            ],
            correctAnswer: 1,
            explanation: `Both plays turn on a hero who does not know his parents until a witness from the past tells the story. Neither recognition is a duel or a choral speech, and only Oedipus learns he has killed someone.`
          }
        ]
      }
    },
    {
      id: 'englitdr5-staging',
      type: 'text' as const,
      content: `
## Reading Stage Directions, Props and Costume

On the exam you read a play rather than watch it, so the stage directions are part of the text you analyze. Shakespeare's original directions are sparse (many in modern editions were added by editors), so his staging often lives **inside the dialogue**. Later playwrights such as Wilde write fuller directions.

| Element | What to ask | Example |
|---|---|---|
| **Entrances and exits** | Who is left alone? Who arrives at the wrong moment? | "Exeunt all but Hamlet" clears the stage for his first soliloquy |
| **Costume** | What does clothing announce or hide? | Hamlet's "inky cloak" of mourning at the newly married king's court; Jack's mourning for a living "brother" |
| **Props** | Which objects carry the plot or a meaning? | Desdemona's handkerchief, which becomes Iago's "proof"; the hand-bag that holds Jack's origins |
| **Gesture and position** | What does the body do that words do not? | Claudius "Retires and kneels" to pray, and Hamlet, seeing him, holds back |
| **Silence and pause** | Who does not speak, and when? | A character who says nothing while others decide her fate |

### A prop that becomes a plot

Desdemona's handkerchief starts as a love token, Othello's first gift to her. When she drops it, Emilia picks it up and gives it to Iago, who plants it in Cassio's room. By Act 3 Othello treats it as the "ocular proof" he demanded. A small object carries the whole movement from trust to murder, which is why so many essays on *Othello* follow it.

## Common Misconceptions About Drama

- **"Comedy means jokes."** In dramatic terms, comedy is a structure that moves from confusion to restored order, often ending in marriage. A comedy can be serious in places.
- **"Dramatic irony is when something ironic happens."** That is situational irony. Dramatic irony requires a gap between what the audience knows and what a character knows.
- **"Stage directions are not part of the text."** On the page they are evidence, and Section I questions can ask about them.
- **"Tragedy and comedy have nothing in common."** They share complication and recognition; the direction of the turn differs.

> 🔑 **AP Connection:** For a drama passage, track **who knows what**. Many questions about tone or effect turn on the gap between a character's understanding and the audience's.
`
    },
    {
      id: 'englitdr5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In *Othello*, the repeated phrase "honest Iago" functions chiefly to`,
            options: [
              `remind the audience that Iago's advice to Othello is sound`,
              `widen the gap between the characters' trust and our knowledge`,
              `suggest that Othello secretly suspects Iago from the start`,
              `show that the Venetians value honesty above military skill`
            ],
            correctAnswer: 1,
            explanation: `The audience has heard Iago's plans, so every use of the phrase deepens the dramatic irony. His advice is poisonous, Othello does not suspect him until the end, and the phrase reveals misplaced trust rather than Venetian values.`
          },
          {
            question: `The best description of the role of Desdemona's handkerchief in *Othello* is that it`,
            options: [
              `is a love token that Iago turns into false evidence of her betrayal`,
              `is a symbol of Venice that Othello rejects when he moves to Cyprus`,
              `is a gift from Cassio that Desdemona conceals from her husband`,
              `is a family relic that Emilia steals for her own profit and gain`
            ],
            correctAnswer: 0,
            explanation: `The handkerchief was Othello's first gift to Desdemona, and Iago plants it on Cassio as "proof." It is not a symbol of Venice, it was never Cassio's gift, and Emilia hands it to Iago because he asked for it, not for profit.`
          },
          {
            question: `Which statement best distinguishes comic from tragic structure?`,
            options: [
              `Comedy avoids complication entirely; tragedy depends on it.`,
              `Comedy has no recognition scene; tragedy always has one.`,
              `Comedy uses prose throughout; tragedy uses verse alone.`,
              `Comedy's recognition restores order; tragedy's brings ruin.`
            ],
            correctAnswer: 3,
            explanation: `Both forms build complication and resolve it through recognition; comedy's turn restores order while tragedy's brings ruin. Comedies are full of complication and recognition, and verse and prose appear in both.`
          }
        ]
      }
    }
  ]
}
