export const englitShortFiction3Part3Data = {
  topicSlug: 'englit-short-fiction-3',
  sections: [
    {
      id: 'englitsh3-intro',
      type: 'text' as const,
      content: `
# 🧭 Short Fiction III

**Part 3 of 7 — Structure and Time: "An Occurrence at Owl Creek Bridge"**

---

| Section |
|---------|
| 🏗️ Three Sections, Three Kinds of Time |
| Section II: The Delayed Backstory |
| Clues Hidden in Section III |
| The Last Sentence Recasts the Story |

> 🔑 **Key Concept:** **Structure** is the order and grouping of a story's parts. **Plot time** is the order in which events happen; **narrative time** is the order and speed in which the story tells them. When the two diverge, ask what the arrangement makes the reader believe, and when it lets the reader find out the truth (skills 3.C and 3.E).
`
    },
    {
      id: 'englitsh3-sections',
      type: 'text' as const,
      content: `
## 🏗️ Three Sections, Three Kinds of Time

Ambrose Bierce's story (1890) is set during the Civil War and divided into three numbered sections. It opens at the worst possible moment:

> A man stood upon a railroad bridge in northern Alabama, looking down into the swift water twenty feet below. The man's hands were behind his back, the wrists bound with a cord. A rope closely encircled his neck.
>
> — Ambrose Bierce, "An Occurrence at Owl Creek Bridge," 1890

| Section | Plot time | How it is told | What it does to the reader |
|---|---|---|---|
| **I** | The present: the minutes before the hanging | Detached, almost military description; the man is unnamed | Starts *in medias res*; creates suspense and a sense of ritual |
| **II** | The past: an evening some time earlier | Brisk summary with a short scene of dialogue | Explains how he got there; the reveal ("He was a Federal scout") lands as irony |
| **III** | Seconds of plot time, told across many paragraphs | Intense close attention to sensation; a long chase and journey home | Lets the reader live inside an escape that, the last sentence reveals, never happened |

### Time slows down before Section III begins

Section I already distorts time. The man watches driftwood: "How slowly it appeared to move! What a sluggish stream!" Then he hears a sound "as slow as the tolling of a death knell," whose intervals grow "progressively longer."

> What he heard was the ticking of his watch.

The ticking is ordinary; the man's perception of it is not. Bierce is teaching us early that under extreme pressure this mind stretches seconds into long spans. Section III is built on that principle.

Section I ends with a sentence that admits the narrator is translating: "As these thoughts, which have here to be set down in words, were flashed into the doomed man's brain rather than evolved from it the captain nodded to the sergeant. The sergeant stepped aside." The phrase "have here to be set down in words" tells us that what happens in a flash may take paragraphs to tell.
`
    },
    {
      id: 'englitsh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The detail "What he heard was the ticking of his watch" primarily serves to',
            options: [
              'show that the soldiers are timing the execution precisely',
              'prepare the reader for a mind that stretches out its seconds',
              'reveal that Farquhar values his possessions above his family',
              'introduce a symbol of the Union army\'s mechanical discipline'
            ],
            correctAnswer: 1,
            explanation: 'An ordinary sound feels slow and painfully loud, which shows the condemned man\'s sense of time stretching, the same distortion Section III depends on. The watch is his own, and the passage says nothing about valuing it over his family.'
          },
          {
            question: 'The effect of beginning the story with the man already on the bridge, before we learn who he is, is that the reader',
            options: [
              'sympathizes with him as a victim, not yet knowing his motives',
              'is led to distrust the Federal soldiers\' account of his crime',
              'assumes from the start that he deserves to be hanged',
              'knows his past before the present scene can create suspense'
            ],
            correctAnswer: 0,
            explanation: 'Section I shows a man with a "kindly expression" facing death; only Section II reveals he tried to burn the bridge. The soldiers give no account to distrust, nothing invites us to judge him first, and his past comes after the suspense, not before.'
          }
        ]
      }
    },
    {
      id: 'englitsh3-backstory',
      type: 'text' as const,
      content: `
## Section II: The Delayed Backstory

Section II steps back in time and names the man: Peyton Farquhar, "a well to do planter, of an old and highly respected Alabama family." The narrator's account of him is laced with irony. Prevented from serving in the army, he "chafed under the inglorious restraint, longing for the release of his energies, the larger life of the soldier, the opportunity for distinction."

A gray-clad soldier stops for water and tells him the Union army has posted an order that any civilian caught interfering with the railroad "will be summarily hanged." Farquhar asks, smiling:

> "Suppose a man—a civilian and student of hanging—should elude the picket post and perhaps get the better of the sentinel," said Farquhar, smiling, "what could he accomplish?"

The soldier mentions driftwood piled against the bridge that "would burn like tinder." The section ends:

> He was a Federal scout.

### The significant event

The scout's visit is the **significant event** of the plot (skill 3.E): everything in Section I follows from it. Bierce's choice to tell it second, not first, has three effects.

| Placement choice | Effect |
|---|---|
| We see the hanging before the cause | We feel for Farquhar before we can judge him |
| We already know how his plan ends | Dramatic irony: Farquhar's joke about being a "student of hanging" reads as a grim prediction |
| The scout's identity comes in a short final sentence | A twist showing that Farquhar walked into a trap from the start |
| The flashback sits between the drop and the "escape" | A pause in suspense: the reader waits, as Farquhar's body falls, to learn what happens |

Farquhar's romantic hunger for "distinction" also matters for Section III, where his mind writes him the heroic escape his life never gave him.
`
    },
    {
      id: 'englitsh3-input',
      type: 'input-boxes' as const,
      content: `
**Name the Structural Technique** ✍️

Type the standard literary term for each.
      `,
      exercise: {
        questions: [
          {
            question: 'Section I begins at a moment of crisis, the man already bound with a rope around his neck. The Latin term for beginning in the middle of the action is ___',
            answer: 'in medias res',
            acceptableAnswers: ['in medias res', 'medias res']
          },
          {
            question: 'Section II moves back in time to the evening the scout visited. A scene from an earlier time inserted into the narrative is a ___',
            answer: 'flashback',
            acceptableAnswers: ['flashback', 'flash back', 'flash-back', 'analepsis']
          },
          {
            question: 'Farquhar jokes that he is "a civilian and student of hanging," but the reader, who has already watched Section I, knows he will be hanged. When the reader knows more than the character, the result is ___ irony',
            answer: 'dramatic',
            acceptableAnswers: ['dramatic', 'dramatic irony']
          }
        ],
        hint1: 'One answer is a three-word Latin phrase; one is a single word for moving backward in time.',
        hint2: 'The kind of irony common in tragedies, where the audience sees the danger before the hero does.',
        explanation: 'The story opens in medias res, Section II is a flashback, and the scout reveal creates dramatic irony because the reader understands Farquhar\'s joke better than he does.'
      }
    },
    {
      id: 'englitsh3-clues',
      type: 'text' as const,
      content: `
## Clues Hidden in Section III

Section III tells us that the rope breaks, Farquhar frees his hands, dodges a volley and a cannon, crawls ashore and walks all day and night toward home. On a first reading most readers believe it. On a second reading, the clues are everywhere.

| Clue | Text | What it suggests |
|---|---|---|
| Impossible senses | "He felt the ripples upon his face and heard their separate sounds as they struck." He sees "the veining of each leaf" and the insects on it | His perception is no longer realistic |
| A paradise landscape | The sand "looked like diamonds, rubies, emeralds"; the wind makes "the music of AEolian harps" | Wish fulfillment, not a riverbank |
| An unreal road | "wide and straight as a city street, yet it seemed untraveled"; trees end "in a point, like a diagram in a lesson in perspective" | A mental image, flat and schematic |
| A strange sky | "great golden stars looking unfamiliar and grouped in strange constellations" | He is no longer in his own world |
| His body | His neck is "horribly swollen"; "he could no longer feel the roadway beneath his feet!" | The physical truth breaks through the dream |
| A shift in tense | "for now he sees another scene... He stands at the gate of his own home." | The past tense of the whole story gives way to the present as the fantasy reaches its climax |

### The return to the bridge

> As he is about to clasp her he feels a stunning blow upon the back of the neck; a blinding white light blazes all about him with a sound like the shock of a cannon—then all is darkness and silence!
>
> Peyton Farquhar was dead; his body, with a broken neck, swung gently from side to side beneath the timbers of the Owl Creek bridge.

The "stunning blow upon the back of the neck" is the rope going taut. The two sentences put the story's two kinds of time side by side: the exclamatory present tense of Farquhar's mind, then the flat past tense of the outside report.
`
    },
    {
      id: 'englitsh3-function',
      type: 'text' as const,
      content: `
## The Last Sentence Recasts the Story

An ending that **recasts** forces the reader to reinterpret everything before it. Bierce's final sentence does this in two ways.

1. **It reclassifies Section III.** The escape becomes the content of a few seconds of consciousness during the fall. Nothing in it happened outside Farquhar's mind.
2. **It reverses the reader's sympathies about time.** We were made to feel hours of struggle; the outside world measured only the length of a drop.

### What the structure means

| Interpretive claim | Structural evidence |
|---|---|
| The story exposes how the mind builds a comforting fiction under threat | Section III's escalating beauty and the final flat report |
| It undercuts romantic ideas of war and heroism | Section II's ironic tone about "the opportunity for distinction," then the hero's escape that exists only in his head |
| It implicates the reader, who wanted the escape to be real | We, like Farquhar, read past the clues because we hoped |

> 🔑 **AP Connection:** For a structure question, never stop at "the story uses a flashback." Say what the arrangement makes the reader believe and when it takes that belief away. On Owl Creek: "By placing the hanging before its cause and the dream before the death, Bierce makes the reader share Farquhar's hope, so that the final sentence indicts our own appetite for the heroic escape."
`
    },
    {
      id: 'englitsh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The shift from past tense to present tense near the end of Section III ("now he sees another scene") primarily serves to',
            options: [
              'signal that the narrator has begun telling a new story',
              'mark the height of the fantasy before it collapses',
              'show that Farquhar has reached home on the following day',
              'reveal that the whole story is Farquhar\'s retelling later'
            ],
            correctAnswer: 1,
            explanation: 'The present tense makes the homecoming feel immediate and vivid at the very moment it is about to be cut off. It is still the same story, he never reaches home, and he does not survive to retell anything.'
          },
          {
            question: 'Which of the following best describes the function of the story\'s final sentence?',
            options: [
              'It reveals the escape as a dying man\'s fantasy',
              'It explains why the Federal scout misled Farquhar',
              'It confirms that Farquhar reached his wife first',
              'It shifts the point of view to the captain'
            ],
            correctAnswer: 0,
            explanation: 'The flat report of the body "beneath the timbers of the Owl Creek bridge" shows that Section III took place in Farquhar\'s mind as he fell. The sentence does not explain the scout, confirm that he reached his wife or adopt the captain\'s view.'
          },
          {
            question: 'The comparison of the road to "a diagram in a lesson in perspective" suggests that',
            options: [
              'Farquhar is an educated man who once studied drawing and design',
              'the road was built recently by the Union army for its own use',
              'the landscape is a mental construction rather than a real place',
              'Farquhar has finally found the shortest way back to his home'
            ],
            correctAnswer: 2,
            explanation: 'A textbook diagram is schematic and perfect, not lived-in, which hints that the road exists only in his mind. Nothing in the story supports a drawing education, Union road-building or a real shortcut home.'
          }
        ]
      }
    }
  ]
}
