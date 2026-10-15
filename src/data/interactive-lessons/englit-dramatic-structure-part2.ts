export const englitDramaticStructurePart2Data = {
  topicSlug: 'englit-dramatic-structure',
  sections: [
    {
      id: 'englitdr2-intro',
      type: 'text' as const,
      content: `
# 🎭 Dramatic Structure

**Part 2 of 7 — The Architecture of a Play**

---

| Section |
|---------|
| 🏗️ The Units of a Play |
| The Five-Act Shape: *Hamlet* Mapped |
| Exposition Without a Narrator |
| A Prologue That Gives Away the Ending |
| Structure Beyond the Pyramid |

> 🔑 **Key Concept:** Skills **3.A**, **3.B** and **3.C** ask how a text orders events and what that order does. A play has no narrator to summarize, explain or skip ahead, so its structure carries much of the meaning: what the audience learns first, where the turning point falls, and which scenes are set side by side.
`
    },
    {
      id: 'englitdr2-units',
      type: 'text' as const,
      content: `
## 🏗️ The Units of a Play

| Unit | What it is | What to watch for |
|---|---|---|
| **Act** | A major division of the action | Acts often end on a decision, a discovery or a threat |
| **Scene** | A continuous stretch of action in one place and time | A new scene usually means a new place, a time jump, or a new set of characters |
| **Entrance and exit** | A character arriving or leaving | Who is onstage controls who can hear what is said |
| **Stage direction** | Text addressed to readers and actors, not spoken | Setting, gesture, costume, props, silence |
| **Dramatis personae** | The list of characters | Ranks and family ties are often set out here |

Many act and scene numbers in modern editions of Shakespeare were added or regularized by later editors, but the divisions still mark real shifts in place, time and pressure. When you read a scene on the exam, ask three questions first: **Where are we? Who is onstage? What has just happened?**

### Why structure matters more on stage

A novelist can tell you that years passed or that a character secretly despised her brother. A playwright has to **show** it, through what characters say, when they say it, and who hears. That is why the order of scenes, and the moments when one character is left alone, do so much work in drama.
`
    },
    {
      id: 'englitdr2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A new scene in a play most often signals`,
            options: [
              `a change of place, time or the people onstage`,
              `the arrival of the climax of the play's action`,
              `that the earlier action has been only a dream`,
              `the moment a narrator steps in to comment`
            ],
            correctAnswer: 0,
            explanation: `A scene is a continuous stretch of action in one place and time, so a new scene marks a shift in place, time or company. Climaxes and dreams are not built into scene breaks, and drama has no narrator to step in.`
          },
          {
            question: `Because a play has no narrator, a playwright must usually reveal a character's hidden feelings through`,
            options: [
              `a summary printed between the acts of the script`,
              `footnotes the audience reads during the scene`,
              `speech, action and who is present to hear it`,
              `the list of characters at the start of the play`
            ],
            correctAnswer: 2,
            explanation: `Drama shows feeling through what characters say and do and through who hears them. Plays do not print summaries between acts or footnotes for audiences, and the list of characters gives names and ranks, not feelings.`
          }
        ]
      }
    },
    {
      id: 'englitdr2-fiveact',
      type: 'text' as const,
      content: `
## The Five-Act Shape: *Hamlet* Mapped

The German critic Gustav Freytag (1863) described the five-act play as a rise and fall. His "pyramid" is a model, not a law, but it fits many Renaissance tragedies well.

| Stage | Job in the play | In *Hamlet* (c. 1600) |
|---|---|---|
| **Exposition** | Sets out the situation and the pressures on the characters | Act 1: a ghost on the battlements; Claudius has taken the throne and married Hamlet's mother; Hamlet, still in mourning, is miserable at court |
| **Inciting incident** | The event that sets the central conflict in motion | Act 1, scene 5: the Ghost says Claudius murdered him and demands revenge |
| **Rising action** | Complications build | Act 2 to Act 3, scene 1: Hamlet's "antic disposition," Polonius's spying, the arrival of the players, "To be, or not to be" |
| **Climax (turning point)** | The decisive moment after which events turn | Act 3: the play-within-the-play exposes Claudius's guilt; Hamlet spares him at prayer, then kills Polonius by mistake |
| **Falling action** | Consequences unfold, often against the hero | Act 4: Hamlet is shipped to England; Ophelia goes mad and drowns; Laertes returns for revenge and plots with Claudius |
| **Catastrophe (resolution)** | The final outcome; in tragedy, the hero's death | Act 5: the rigged duel, the poisoned cup and blade; Hamlet, Claudius, Gertrude and Laertes die; Fortinbras arrives to take the throne |

### Reading the map

- The **climax** is not the bloodiest moment. In *Hamlet* the bodies pile up in Act 5, but the turn comes in Act 3, when Hamlet finally has proof and then fails to use it.
- After the turn, the hero stops driving the action and starts being driven by it. Claudius, not Hamlet, plans the events of Act 4.
- Act 3 holds the whole hinge: proof (scene 2), a missed chance (scene 3), and a fatal mistake (scene 4).
`
    },
    {
      id: 'englitdr2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Place the Event** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `The Ghost tells Hamlet that Claudius poisoned him and demands revenge. This is the ___`,
            options: ['inciting incident', 'catastrophe', 'falling action', 'denouement']
          },
          {
            label: `Hamlet is sent to England while Laertes returns and plots with Claudius. This belongs to the ___`,
            options: ['falling action', 'exposition', 'inciting incident', 'climax']
          },
          {
            label: `The rigged duel ends in the deaths of the royal family. This is the ___`,
            options: ['catastrophe', 'rising action', 'exposition', 'inciting incident']
          }
        ],
        correctAnswers: ['inciting incident', 'falling action', 'catastrophe'],
        hint1: 'Which event starts the central conflict?',
        hint2: 'After the Act 3 turn, consequences unfold against the hero.',
        hint3: 'The final outcome of a tragedy.',
        explanation: 'The Ghost\'s command sets the revenge plot going; Act 4\'s exile and counterplot are consequences of the Act 3 turn; and the duel is the tragic catastrophe.'
      }
    },
    {
      id: 'englitdr2-exposition',
      type: 'text' as const,
      content: `
## Exposition Without a Narrator

Plays have to deliver background through dialogue. Weak exposition sounds like characters telling each other what they already know. Strong exposition makes the delivery itself dramatic. Look at the first two lines of *Hamlet*:

> BARNARDO. Who's there?
>
> FRANCISCO. Nay, answer me. Stand and unfold yourself.
>
> — William Shakespeare, *Hamlet*, Act 1, scene 1 (c. 1600)

| Detail | What it establishes |
|---|---|
| Barnardo, arriving to relieve the guard, challenges the man on duty | The normal order is reversed: the newcomer is so nervous that he demands the password from the sentry |
| "Who's there?" as the play's first words | A play about hidden identity and hidden guilt opens with a question about who someone is |
| "Stand and unfold yourself" | "Unfold" means reveal. The whole play will be about forcing hidden things into the open |
| Night, cold, a watch on the battlements | A state on alert; something is wrong in Denmark before anyone says what |

Only after the mood is set does Horatio explain the political background: the old King Hamlet's victory over the King of Norway, and young Fortinbras raising troops to win back the lost lands. The exposition is wrapped inside fear, so the audience absorbs facts while feeling the tension.

## A Prologue That Gives Away the Ending

> Two households, both alike in dignity,
> In fair Verona, where we lay our scene,
> From ancient grudge break to new mutiny,
> Where civil blood makes civil hands unclean.
> From forth the fatal loins of these two foes
> A pair of star-cross'd lovers take their life;
>
> — William Shakespeare, *Romeo and Juliet*, Prologue (c. 1595)

The Chorus speaks a sonnet that announces the ending: the lovers will die, and only their deaths will end the feud. Why spoil the plot?

| Effect | How it works |
|---|---|
| **Suspense shifts from *what* to *how*** | The audience knows the outcome and watches each choice move toward it |
| **Fate frames every scene** | "Star-cross'd" (thwarted by the stars) and "death-mark'd love" make chance meetings feel doomed |
| **Dramatic irony from the start** | When the lovers hope, the audience already knows better |
| **The play declares itself a play** | "where we lay our scene" and "the two hours' traffic of our stage" remind us we are watching a made thing |
`
    },
    {
      id: 'englitdr2-beyond',
      type: 'text' as const,
      content: `
## Structure Beyond the Pyramid

Freytag's model describes the rise and fall of one line of action. Real plays also build meaning through how scenes are **arranged**.

| Structural device | Definition | Example |
|---|---|---|
| **Juxtaposed scenes** | Two scenes placed side by side to invite comparison | In *Hamlet*, Act 3, scene 3, Hamlet stands over the praying Claudius; in the next scene he stabs through a curtain without looking |
| **Play-within-a-play** | A performance staged inside the play | "The Mousetrap" in *Hamlet* turns theater into a trap: "The play's the thing / Wherein I'll catch the conscience of the King" |
| **Parallel situations** | Characters placed in matching situations | Three sons avenge fathers in *Hamlet*: Hamlet delays, Laertes rushes, and Fortinbras marches; each sheds light on the others |
| **Unity of action** | One complete action with "a beginning, a middle, and an end" (Aristotle) | Greek tragedy keeps to a single action; Shakespeare often adds parallel plots |

> 🔑 **AP Connection:** Section I questions often ask about "the function of" a scene or a line "in the context of the passage as a whole." For a drama passage, the answer usually depends on where the moment sits: setting up a conflict, turning it, or showing its consequences.

### Common Misconceptions

- **"The climax is the most violent scene."** The climax is the turn. Violence may come later, as a consequence.
- **"Exposition is boring background."** Good exposition is itself dramatic, as the nervous guards in *Hamlet* show.
- **"Knowing the ending ruins suspense."** A prologue like Romeo and Juliet's trades suspense about the outcome for suspense about how it arrives.
`
    },
    {
      id: 'englitdr2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In the opening exchange of *Hamlet*, the fact that the arriving guard, Barnardo, challenges the sentry on duty primarily serves to`,
            options: [
              `convey the men's dread and a sense that all is not well`,
              `show that Barnardo outranks Francisco in the army`,
              `reveal that Francisco has been plotting with Norway`,
              `establish that the play will be a comedy of errors`
            ],
            correctAnswer: 0,
            explanation: `The reversed challenge shows a nervous man jumping at shadows, which sets a mood of dread before any facts arrive. Nothing in the exchange concerns rank or treason, and the mood points toward tragedy, not comedy.`
          },
          {
            question: `By announcing in its Prologue that the lovers will die, *Romeo and Juliet* chiefly`,
            options: [
              `removes all tension, so the audience can focus on the poetry`,
              `turns suspense toward how the known ending will come about`,
              `proves that the Chorus misunderstands the play that follows`,
              `suggests that the families will refuse to end their feud`
            ],
            correctAnswer: 1,
            explanation: `Once the outcome is known, the audience watches each choice move the lovers toward it, so suspense shifts from what to how. Tension is not removed, the Chorus is accurate, and the Prologue says the deaths will end the feud.`
          },
          {
            question: `Placing the scene in which Hamlet spares the praying Claudius directly before the scene in which he kills Polonius invites the audience to compare`,
            options: [
              `two kings who rule Denmark in different ways`,
              `Hamlet's two methods of disguising himself`,
              `a deliberate pause with a rash, unseeing act`,
              `the comic and the tragic halves of the play`
            ],
            correctAnswer: 2,
            explanation: `Hamlet reasons himself out of killing Claudius, then strikes blindly through a curtain, so the juxtaposition sets careful delay against impulsive violence. Polonius is not a king, disguise is not at issue, and the scenes are not split into comic and tragic halves.`
          }
        ]
      }
    }
  ]
}
