export const englitNarrationPovPart7Data = {
  topicSlug: 'englit-narration-pov',
  sections: [
    {
      id: 'englitna7-intro',
      type: 'text' as const,
      content: `
# 👁️ Narration and Point of View

**Part 7 of 7 — Narration Synthesis: Reading Montresor**

---

| Section |
|---------|
| 📖 The Narration Checklist |
| The Opening: A Confession With a Listener |
| In the Vaults: Irony Built by Point of View |
| The Ending: Fifty Years Later |
| The Whole Topic in One Table |

> 🔑 **Key Concept:** This part puts every tool from the topic to work on one story, Edgar Allan Poe's "The Cask of Amontillado" (1846). Its narrator, Montresor, lures a man named Fortunato into his family's catacombs during carnival and walls him up alive. The question is not only what Montresor did but **how his telling shapes what we know, whom we side with, and what we are left to judge.**
`
    },
    {
      id: 'englitna7-checklist',
      type: 'text' as const,
      content: `
## 📖 The Narration Checklist

Use these six questions on any passage. Each one points back to an earlier part of this topic.

| Question | Tool | Part |
|---|---|---|
| 1. Who tells, and how much can the teller access? | Person and access; protagonist or witness | 2 |
| 2. To whom, and on what occasion? | Narratee; retrospective telling | 2 |
| 3. Through what lens? | Perspective revealed by diction, syntax and selected detail | 3 |
| 4. How far can the reader trust the account? | Report vs. judgment; naive, self-deceived or lying | 4 |
| 5. What does the reader know, compared with the characters? | Less, the same, or more; suspense and dramatic irony | 5 |
| 6. So what? | A defensible claim about what the narration makes the reader see or feel | 6 |
`
    },
    {
      id: 'englitna7-opening',
      type: 'text' as const,
      content: `
## The Opening: A Confession With a Listener

> The thousand injuries of Fortunato I had borne as I best could; but when he ventured upon insult, I vowed revenge. You, who so well know the nature of my soul, will not suppose, however, that I gave utterance to a threat. At length I would be avenged; this was a point definitively settled—but the very definitiveness with which it was resolved, precluded the idea of risk. I must not only punish, but punish with impunity. A wrong is unredressed when retribution overtakes its redresser. It is equally unredressed when the avenger fails to make himself felt as such to him who has done the wrong.
>
> It must be understood, that neither by word nor deed had I given Fortunato cause to doubt my good will. I continued, as was my wont, to smile in his face, and he did not perceive that my smile now was at the thought of his immolation.
>
> — Edgar Allan Poe, "The Cask of Amontillado," 1846

### Walking the checklist

| Question | Evidence | Reading |
|---|---|---|
| 1. Who tells? | "I vowed revenge" | A first-person **protagonist**: the narrator is the avenger, telling his own crime |
| 2. To whom? | "You, who so well know the nature of my soul" | A **narratee** who knows him intimately. A confessor? An old friend? Poe never says, and the reader is placed in that listener's seat |
| 3. Through what lens? | "punish with impunity"; "A wrong is unredressed when..." | Cold, legalistic syntax: balanced clauses and maxims, as if revenge were a point of law. Perspective: a proud man for whom honor is a system |
| 4. Can we trust him? | "The thousand injuries" are never named | He is precise about method and silent about cause. We cannot check whether the wrong was real |
| 5. Who knows what? | "he did not perceive that my smile now was at the thought of his immolation" | The reader knows what Fortunato does not, from the start. Every friendly word that follows becomes dramatic irony |

Notice how different this is from Huck. Montresor is not naive; he understands his deceit perfectly and lies to Fortunato on every page. To the narratee, though, he is candid about his methods. The gap that matters here is not between what he knows and what we know, but between what he *explains* (how) and what he *withholds* (why).
`
    },
    {
      id: 'englitna7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The phrase "You, who so well know the nature of my soul" primarily establishes that`,
            options: [
              `the reader is meant to stand in for Fortunato himself`,
              `Montresor is addressing a court that will try his crime`,
              `the story will now shift into second-person narration`,
              `he tells his story to a listener who knows him well`
            ],
            correctAnswer: 3,
            explanation: `The "you" is a narratee who already knows Montresor's character, so the story is framed as speech to an intimate. Fortunato is the victim rather than the listener, no court is mentioned, and "you" here is addressed, not made the actor of the story.`
          },
          {
            question: `Montresor's remark that Fortunato "did not perceive that my smile now was at the thought of his immolation" chiefly creates`,
            options: [
              `suspense about whether Montresor has any motive at all`,
              `dramatic irony that makes the reader a kind of accomplice`,
              `sympathy for Montresor as the victim of Fortunato's cruelty`,
              `doubt about whether Fortunato will appear in the story`
            ],
            correctAnswer: 1,
            explanation: `The reader now knows the smile's meaning while Fortunato does not, so every friendly exchange is read from the murderer's side. His motive has just been stated, the cold diction works against sympathy, and Fortunato appears in the very next scene.`
          },
          {
            question: `The "thousand injuries" of Fortunato are never described. The most likely effect of this omission is that`,
            options: [
              `Fortunato is shown to be wholly innocent of any wrong`,
              `the reader must judge the revenge without proof of the wrong`,
              `the narrator appears more objective and trustworthy`,
              `the story's real subject becomes its carnival setting`
            ],
            correctAnswer: 1,
            explanation: `Montresor details his method but never his grievance, so the reader cannot confirm the cause and must weigh the revenge on his word alone. The silence proves nothing about Fortunato's innocence, it makes the narrator less verifiable rather than more, and the carnival is only the occasion.`
          }
        ]
      }
    },
    {
      id: 'englitna7-vaults',
      type: 'text' as const,
      content: `
## In the Vaults: Irony Built by Point of View

Montresor finds Fortunato drunk at the carnival, dressed as a jester in "the conical cap and bells," and tempts him with a cask of rare Amontillado wine that is supposedly waiting in the family vaults. Underground, Fortunato coughs from the damp nitre. Montresor answers:

> "Come," I said, with decision, "we will go back; your health is precious. You are rich, respected, admired, beloved; you are happy, as once I was. You are a man to be missed. For me it is no matter. We will go back; you will be ill, and I cannot be responsible. Besides, there is Luchesi—"
>
> — Edgar Allan Poe, "The Cask of Amontillado," 1846

A moment later Fortunato raises a toast: "I drink," he said, "to the buried that repose around us." Montresor replies, "And I to your long life."

| Line | What Fortunato hears | What the reader hears |
|---|---|---|
| "your health is precious" | Concern | A man measuring how long his victim will be missed |
| "You are a man to be missed" | Flattery | A plain statement of what is about to happen |
| "Besides, there is Luchesi—" | A rival who might taste the wine instead | Bait: Montresor knows Fortunato's pride will not let him turn back |
| "And I to your long life" | A friendly toast | A cruel joke, since his life will end in these vaults |

Every one of these ironies depends on point of view. Because Montresor narrates and has told us his plan, the reader hears both meanings at once; Fortunato hears only one. One phrase also slips past the performance: "you are happy, as once I was." For a moment the narrator's perspective shows through his mask, a hint of lost fortune or standing that may be the real "injury." He does not stop to explain it.
`
    },
    {
      id: 'englitna7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Tool** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `Montresor narrating a crime that he himself plans and commits makes him a first-person ___ narrator`,
            options: ['protagonist', 'witness', 'omniscient', 'naive']
          },
          {
            label: `The listener addressed as "You, who so well know the nature of my soul" is the story's ___`,
            options: ['narratee', 'narrator', 'antagonist', 'protagonist']
          },
          {
            label: `"You are a man to be missed," said to a man Montresor plans to entomb, is an example of ___`,
            options: ['verbal irony', 'free indirect discourse', 'objective narration', 'retrospective narration']
          }
        ],
        correctAnswers: ['protagonist', 'narratee', 'verbal irony'],
        hint1: 'Whose story is it: his own, or someone else\'s?',
        hint2: 'The listener the narrator imagines addressing.',
        hint3: 'He says something whose second meaning he intends and his listener misses.',
        explanation: 'Montresor tells his own story, so he is a protagonist narrator. The "you" he addresses is the narratee. Saying "You are a man to be missed" while planning the man\'s death is verbal irony, and the reader catches it because the narration has revealed the plan.'
      }
    },
    {
      id: 'englitna7-ending',
      type: 'text' as const,
      content: `
## The Ending: Fifty Years Later

Fortunato, chained in a niche, cries out as the last stones go in:

> "For the love of God, Montressor!"
>
> "Yes," I said, "for the love of God!"
>
> ...There came forth in return only a jingling of the bells. My heart grew sick—on account of the dampness of the catacombs. I hastened to make an end of my labor. I forced the last stone into its position; I plastered it up. Against the new masonry I re-erected the old rampart of bones. For the half of a century no mortal has disturbed them. In pace requiescat!
>
> — Edgar Allan Poe, "The Cask of Amontillado," 1846 (this edition spells the name "Montressor" in Fortunato's cry)

### Reading the reliability of the last lines

| Detail | Question it raises |
|---|---|
| "My heart grew sick—on account of the dampness" | The dash hurries an explanation onto a feeling. Is this cold, or a guilt he will not name? |
| "For the half of a century" | Montresor is telling this as an old man, fifty years later. Why tell it now, and to the "you" who knows his soul? |
| "In pace requiescat!" (Latin: may he rest in peace) | A prayer for the dead. Mockery, or a confession's closing formula? |
| His own rule: a wrong is unredressed if the avenger does not "make himself felt as such" | Fortunato never hears what injury he is paying for. By Montresor's own standard, did the revenge succeed? |

The ending supports more than one defensible reading:

- **A boast:** Montresor is still proud of a perfect crime, and the calm syntax of the last sentences is the triumph of his method.
- **A confession:** an old man telling the story at last, to someone who knows his soul, perhaps a priest. The heart that "grew sick" and the prayer for the dead suggest that the crime has never left him.

A strong essay does not need to choose blindly. It can argue that the **narration itself** stages the conflict: a voice built to sound controlled keeps letting slip the signs of what it will not admit. That is the kind of tension that can earn the sophistication point.
`
    },
    {
      id: 'englitna7-table',
      type: 'text' as const,
      content: `
## The Whole Topic in One Table

| Concept | Definition | Example from this topic |
|---|---|---|
| Grammatical person | Who says "I," "you" or "he/she" | Ishmael's "Call me Ishmael" |
| Access | How many minds the narration can enter | Watson can only infer what Holmes thinks |
| Protagonist vs. witness | Teller of his own story vs. observer of another's | Montresor vs. Watson |
| Intrusive vs. effaced omniscient | All-knowing narrator who comments vs. one who stays out of sight | Thackeray's "manager of the Performance" |
| Narratee | The listener the narrator addresses | Huck's "you"; Montresor's "you" |
| Point of view vs. perspective | Position vs. lens | Lockwood and Nelly Dean: same person, different lens |
| Report vs. interpretation | What the narrator observes vs. what he concludes | Lockwood's rabbits and "favourites" |
| Naive narrator | Honest reporter who misjudges | Huck praising Emmeline's ode; condemning himself in Chapter 31 |
| Knowledge control | Reader knows less, the same, or more than a character | Watson in the dark; Emma's charade; Amelia at Waterloo |
| Function | What the narration makes the reader see or feel | "The narrator makes the reader the only one who knows" |

### Final misconceptions check

- The pronoun is the beginning of a description, not the end. Add access, role and stance.
- Every narrator has a perspective, including third-person ones.
- Unreliable, naive and lying are different relationships between narrator and truth.
- Withholding is a technique, not a flaw.

> 🔑 **AP Connection:** On exam day, the checklist above becomes a habit. In Section I, it helps you eliminate answers that treat a narrator's view as plain fact. In Q2, question 6 ("So what?") turns your notes on narration into a thesis.
`
    },
    {
      id: 'englitna7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `In "My heart grew sick—on account of the dampness of the catacombs," the dash most likely suggests that Montresor`,
            options: [
              `has fallen ill from the cold air of the vaults`,
              `is explaining away a feeling he won't name`,
              `is mocking Fortunato's cough from earlier on`,
              `regrets that no one tasted the Amontillado`
            ],
            correctAnswer: 1,
            explanation: `The dash interrupts a confession of feeling and attaches a convenient physical cause, which invites readers to suspect guilt. Nothing suggests real illness, the earlier cough is not recalled here, and the Amontillado was only bait.`
          },
          {
            question: `Montresor claims that a wrong is unredressed "when the avenger fails to make himself felt as such to him who has done the wrong." Read against the ending, this principle most complicates`,
            options: [
              `Fortunato's claim to be a judge of fine wines`,
              `the family motto he recites in the vaults`,
              `his claim that the revenge succeeded`,
              `the story's carnival setting and costumes`
            ],
            correctAnswer: 2,
            explanation: `Fortunato never learns what injury he is being punished for, and Montresor still needs to tell the story fifty years later, so by his own rule the success of the revenge is in doubt. The principle has no bearing on wine, the motto or the carnival.`
          },
          {
            question: `Which statement best distinguishes Montresor from Huck Finn as narrators?`,
            options: [
              `Huck deceives the people he meets, but Montresor never does`,
              `Montresor grasps his deceit, but Huck misjudges his goodness`,
              `Huck narrates in the third person, and Montresor in the first`,
              `Montresor is a witness to the crime, and Huck its protagonist`
            ],
            correctAnswer: 1,
            explanation: `Montresor understands exactly what he is doing, while Huck, a naive narrator, condemns the best act of his life as a sin. Both narrate in the first person as protagonists, and Montresor deceives Fortunato constantly.`
          },
          {
            question: `A student's Q2 essay on this story begins, "Poe uses first-person point of view in the story." The most effective revision would`,
            options: [
              `add the date of publication and details of Poe's life`,
              `list the other literary devices used in the story`,
              `define first-person point of view for the reader`,
              `say what Montresor's telling lets readers see that Fortunato cannot`
            ],
            correctAnswer: 3,
            explanation: `A thesis earns Row A by making a defensible interpretation, and the strongest one explains the function of the point of view: here, the knowledge it gives readers and withholds from the victim. Biography, device lists and definitions describe without interpreting.`
          }
        ]
      }
    }
  ]
}
