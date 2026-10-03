export const actPassageTypesPart1Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📖 Reading Passage Types

**Part 1 of 7 — Literary Narrative / Prose Fiction**

The Enhanced ACT Reading test gives you **36 questions in 40 minutes**, built around **four passage sets** (usually nine questions each), and every question has **four answer choices**. Each set comes from one of four families: **literary narrative**, **social science**, **humanities**, and **natural science**, and one set may be a **pair of shorter passages** on a shared topic. Knowing which family you are in tells you what to read for.

**Literary narrative** passages are excerpts from short stories, novels, memoirs, or personal essays. There is no thesis to find. Meaning lives in **characters, actions, dialogue, and the way the story is told**, so the questions ask you to read people.

| Question type | What it asks | What to track while reading |
|---|---|---|
| Character and motivation | Why does a character act this way? | What each person wants, fears, or is trying to prove |
| Relationships | How do two characters relate, and does that change? | Tension, gestures, who speaks and who stays silent |
| Shift in attitude | "Her feelings change from ___ to ___" | Turning words: *at first, but, until, by noon, years later* |
| Narrator / point of view | Who tells the story, from when, knowing what? | "I" versus "she"; an adult voice looking back |
| Tone and mood | What feeling does the narration create? | Word choice, humor, pacing, sensory details |
| Meaning of a detail | What does this action or object suggest? | Objects with history, small physical gestures |
| Function | Why is this line or paragraph here? | How the scene is different before and after it |
| Word in context | What does a word mean in this sentence? | The sentence around it, not the dictionary's first meaning |

## Read for People: Who, Wants, Changes, Told How

As you read, keep four running notes (in your head or as one-word margin marks):

1. **Who** — the main characters and how they are connected (brothers, boss and apprentice, grandmother and grandchild).
2. **Wants** — what each one wants or resists. Motivation questions are answered here.
3. **Changes** — where a feeling or relationship turns. Mark the sentence where the turn happens.
4. **Told how** — first person ("I") or third person ("she"), and whether the narrator is living the moment or remembering it.

## Inference: One Small Step From the Text

Literary passages rarely state feelings outright, so many questions use *suggests*, *implies*, or *most likely*. The rule: **an inference must be one short step from specific words in the passage.**

- Text: *She folded the letter twice and put it in her coat pocket instead of the trash.*
- Supported: she wants to keep the letter, or is not ready to throw it away.
- Not supported: she will answer the letter, or she has forgiven the sender. Those claims go beyond what the text shows.

**Actions and gestures are evidence.** A character who sets something down *gently*, who *does not close the door*, or who *takes off his coat slowly* is telling you something. The correct answer usually paraphrases what such a gesture shows.

## Narrator and Perspective

| Narration | Signal | What questions test |
|---|---|---|
| First person, in the moment | "I" with present feelings, no later commentary | The narrator knows only what she sees and feels |
| First person, retrospective | "I" plus phrases like *years later*, *I did not understand then* | The gap between what the younger self felt and what the adult now understands |
| Third person | "he," "she," "they" | Whose thoughts the narration enters, and whose it does not |

A retrospective narrator is a favorite ACT target. When an adult looks back, the passage often contains **two attitudes**: the child's at the time and the adult's now. Read the question stem carefully to see which one it asks about.

## Tone: Every Word Must Fit

Tone answers often come in pairs, such as *amused and fond* or *bitter and scornful*. **Both halves must be supported.** If one word is wrong, the whole choice is wrong.

| Positive | Negative | Mixed or neutral |
|---|---|---|
| fond, admiring, amused, hopeful, nostalgic | bitter, resentful, scornful, anxious, mournful | wry, ambivalent, reflective, detached, bittersweet |

Playful details (a bus missed "by the length of a sneeze") point toward amusement; careful, lingering memories point toward fondness or nostalgia. Extreme tones are correct only when the text is extreme.

## Common Traps

- **Predicting the future.** "She decides to move to the town" when the passage only shows she enjoyed a morning there.
- **Reversing the shift.** The character goes from resentment to attachment, and a choice offers attachment to resentment.
- **Too strong.** *Never, completely, fully repaired* rarely survive a passage built on small, careful changes.
- **Right detail, wrong person.** A feeling that belongs to one character is assigned to another.
- **Reading figurative language literally.** "She was a storm in the kitchen" says nothing about the weather.
      `
    },
    {
      id: 'act-r1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

Read this original passage, then open each example.

> My father kept his fishing boat long after he stopped fishing. Every April he scraped the hull, repainted the name on the bow, LUCKY ANNE, after my mother, and then left the boat on its trailer beside the garage for another year. When I was sixteen I told him it was a waste of a good weekend. He kept scraping. "Some things you take care of," he said, "because of what they carried." I rolled my eyes. It was not until I helped my own son sand a bookshelf my mother had built that I understood he had never been talking about the boat.

<details>
<summary><b>Example 1: A shift in attitude</b></summary>

**Question:** Over the course of the passage, the narrator's view of his father's yearly ritual changes from:

- dismissive impatience to understanding
- admiration to embarrassment
- curiosity to boredom
- understanding to resentment

**Solution:**
1. Find the "before": at sixteen he calls the work "a waste of a good weekend" and rolls his eyes. That is dismissive impatience.
2. Find the "after": the final sentence says that later he "understood" his father's meaning.
3. Match both halves. Only **dismissive impatience to understanding** fits. "Understanding to resentment" reverses the order, and neither admiration nor curiosity appears at the start.
</details>

<details>
<summary><b>Example 2: The meaning of a line</b></summary>

**Question:** The father's statement that some things deserve care "because of what they carried" most nearly suggests that he values the boat:

- as a source of income from fishing
- for the memories and people connected to it
- because he plans to sell it at a high price
- because it is the newest boat in town

**Solution:**
1. He no longer fishes, so the boat is not about income.
2. He repaints the name of the narrator's mother every year, and the narrator later connects the boat to a bookshelf his mother built. The boat "carried" memories of family.
3. Nothing mentions selling or how new it is. The answer is **for the memories and people connected to it**: one short step from the repainted name and the narrator's realization.
</details>
      `
    },
    {
      id: 'act-r1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Passage A: Read for People** 🎯

> Priya arrived at the bakery at four-thirty, half an hour before Mr. Okafor, because she wanted the ovens warm before he could tell her they weren't. For three weeks he had corrected everything: how she folded the dough, how she floured the board, how she said good morning. Today she had a plan. She shaped the morning's rolls exactly as he did, down to the twist he gave each end, and lined them up on the cooling rack before he walked in.
>
> Mr. Okafor took off his coat slowly. He picked up one roll, turned it over, and set it down. "Too even," he said. "Bread should look like a person made it." Then, for the first time, he laughed, a short and surprised sound, and handed her an apron with her name already stitched on the pocket.
      `,
      exercise: {
        questions: [
          {
            question: `Why does Priya arrive at the bakery half an hour before Mr. Okafor?`,
            options: [
              `To avoid having to speak with Mr. Okafor that day`,
              `To show she can meet Mr. Okafor's exacting standards`,
              `To bake a separate batch of rolls to sell herself`,
              `To ask Mr. Okafor for a raise once he arrives`
            ],
            correctAnswer: 1,
            explanation: `She wants the ovens warm "before he could tell her they weren't" and copies his technique down to the twist, so she is trying to meet the standards he has enforced for three weeks. She plans to be ready when he walks in, not to avoid him. Nothing in the passage mentions selling her own rolls or asking for more pay.`
          },
          {
            question: `The detail that Priya's name was "already stitched" on the apron most strongly suggests that Mr. Okafor:`,
            options: [
              `had planned to fire her at the end of the week`,
              `thought her rolls that morning were flawless`,
              `had mistaken her for a different apprentice`,
              `had decided to keep her before this morning`
            ],
            correctAnswer: 3,
            explanation: `Stitching a name takes time, so "already" signals that he had accepted her before he saw today's rolls. A personalized apron contradicts a plan to fire her. He calls the rolls "Too even," so he did not find them flawless, and the name on the pocket is hers, which rules out mistaken identity.`
          },
          {
            question: `Mr. Okafor's comment "Too even . . . Bread should look like a person made it" mainly reveals that he:`,
            options: [
              `values a handmade look over perfect uniformity`,
              `believes Priya copied another baker's methods`,
              `prefers bread made by machines to handmade bread`,
              `will never praise any of Priya's work at all`
            ],
            correctAnswer: 0,
            explanation: `He objects that the rolls are too uniform and says bread should show a human hand, so he values a handmade look. Priya copied his own twist, not another baker's. Preferring machine-made bread reverses his point, and his laugh and the gift of an apron show approval, so "never praise" is too extreme.`
          },
          {
            question: `Over the course of the second paragraph, the mood shifts from:`,
            options: [
              `cheerful celebration to quiet disappointment`,
              `calm boredom to a moment of sudden alarm`,
              `tense uncertainty to unexpected warmth`,
              `open anger to a grudging sort of tolerance`
            ],
            correctAnswer: 2,
            explanation: `He removes his coat "slowly" and inspects a roll in silence, which builds tension; his first laugh and the stitched apron bring warmth. The paragraph moves toward warmth, not disappointment. Nothing in it is boring or alarming, and Mr. Okafor is never openly angry; the gift shows more than grudging tolerance.`
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Narrator, Evidence, and Traps** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A passage says, "I was nine that winter, and I did not yet know my aunt was frightened too." It is told by …',
            options: ['a retrospective first-person narrator', 'a third-person narrator', 'a narrator living the moment', 'a second-person narrator']
          },
          {
            label: 'The best evidence for what a character feels is usually …',
            options: ['what most people would feel', 'actions, gestures, and dialogue', 'the most dramatic answer choice', 'the title of the source book']
          },
          {
            label: 'A choice predicting what a character will do after the excerpt ends is usually …',
            options: ['the main idea', 'correct if it sounds hopeful', 'unsupported, so eliminate it', 'a valid inference']
          }
        ],
        correctAnswers: ['a retrospective first-person narrator', 'actions, gestures, and dialogue', 'unsupported, so eliminate it'],
        hint1: '"I did not yet know" means the speaker knows it now: an adult looking back.',
        hint2: 'Literary passages show feelings rather than stating them.',
        hint3: 'An inference must be one short step from the text, and the text stops where the excerpt stops.',
        explanation: 'The phrase "did not yet know" marks a first-person narrator looking back on a younger self. Feelings are shown through actions, gestures, and dialogue rather than stated. Predictions about events after the excerpt go beyond the text, so they are unsupported.'
      }
    },
    {
      id: 'act-r1-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice: Passage B** 📋

Give yourself about four minutes for this passage and its questions.

> The summer I turned eleven, my grandmother decided I would learn to swim in the lake rather than the town pool. "Pools have walls," she said, as if this were a flaw. I stood at the end of the dock every morning for a week, toes curled over the edge, while she floated on her back twenty feet out, humming. She never called me in. On the eighth morning I jumped, mostly to make the humming stop. The water was colder than anything I had imagined, and I came up shouting. My grandmother simply rolled onto her stomach and swam a slow circle around me, close enough to grab, far enough that I did not think to.
>
> I have taught both my daughters to swim since then, and I have never once stood in the water and called them.
      `,
      exercise: {
        questions: [
          {
            question: `Based on the passage, the grandmother's remark "Pools have walls" most likely reflects her belief that:`,
            options: [
              `pools are more dangerous for children than lakes`,
              `the town pool was too crowded during the summer`,
              `a learner who can grab a wall may never let go`,
              `she herself had never learned how to swim`
            ],
            correctAnswer: 2,
            explanation: `She says it "as if this were a flaw": a wall is something to cling to, and her method makes the narrator enter open water with nothing to hold. The passage never compares the danger of pools and lakes or mentions crowding. She floats twenty feet out and swims circles, so she clearly can swim.`
          },
          {
            question: `The description of the grandmother as "close enough to grab, far enough that I did not think to" suggests that she:`,
            options: [
              `stayed out of reach so that the narrator would panic`,
              `stood by to help yet let the narrator float alone`,
              `did not notice that the narrator had jumped in`,
              `was trying to race the narrator back to the dock`
            ],
            correctAnswer: 1,
            explanation: `"Close enough to grab" means she could rescue the narrator; "far enough that I did not think to" means the narrator was not tempted to cling, so the narrator stayed up alone. She was within reach, so she was not trying to cause panic. She swims a circle around the narrator, so she noticed the jump, and a slow circle is not a race.`
          },
          {
            question: `The final sentence of the passage mainly suggests that the narrator:`,
            options: [
              `has taken on her grandmother's patient approach`,
              `regrets never teaching her daughters to swim`,
              `now prefers pools to lakes for swim lessons`,
              `still resents her grandmother for that summer`
            ],
            correctAnswer: 0,
            explanation: `Never calling her daughters into the water copies the grandmother, who "never called me in," so the narrator has adopted the same patient method. She says she has taught both daughters, so there is nothing to regret on that score. No pool is mentioned, and repeating the method shows respect for that summer, not resentment.`
          },
          {
            question: `The passage is told from the point of view of:`,
            options: [
              `a child describing the events as they happen`,
              `a grandmother recalling how she taught a grandchild`,
              `an outside observer watching from the shore`,
              `an adult recalling a childhood experience`
            ],
            correctAnswer: 3,
            explanation: `"The summer I turned eleven" and "I have taught both my daughters since then" show an adult looking back. The past tense and later commentary rule out a child narrating in the moment. The "I" is the grandchild who jumps, not the grandmother, and the narrator is in the water, not watching from shore.`
          }
        ]
      }
    },
    {
      id: 'act-r1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Literary narrative = read people.** Track who the characters are, what they want, where feelings change, and how the story is told.
- **Inferences stay one step from the text.** Gestures such as setting something down gently, leaving a door open, or a name "already" stitched are the evidence.
- **Shift questions need both halves.** Find the "before" and the "after," and watch for reversed choices.
- **Know the narrator.** A retrospective "I" carries two viewpoints: the younger self's and the adult's.
- **Tone pairs: both words must fit.** Eliminate any choice with one unsupported word.
- **Eliminate predictions and extremes.** The passage ends where the excerpt ends; small, careful changes beat "fully" and "never."
      `
    }
  ]
}
