export const satTextStructurePurposePart5Data = {
  topicSlug: 'sat-text-structure-purpose',
  sections: [
    {
      id: 'tsp5-intro',
      type: 'text' as const,
      content: `# Purpose and Structure in Literary Texts

**Part 5 of 7 — Stories and Poems**

Some Text Structure and Purpose questions use an excerpt from a novel, a short story, a play, or a poem. The College Board introduces these with a line such as *"The following text is from a short story..."* — read that line; it often tells you who the character is and what situation they are in.

The question stems are the same (main purpose, overall structure, function), but the answer choices use a different set of verbs.

| Literary verb | Means the passage... |
|---|---|
| portray / depict | shows a person, place, or scene |
| convey | communicates a feeling or attitude |
| reveal / suggest | lets the reader infer something about a character |
| establish | sets up a setting, mood, or situation |
| contrast | sets two moments, places, or attitudes against each other |
| reflect on | shows a character or speaker thinking back on something |

### What to Track While You Read

1. **Who and where.** Name the character and the setting in a few words.
2. **Shifts.** Mark any turn in time (past → present), in mood (calm → anxious), or in action (routine → break from routine). Literary structure questions are usually about shifts.
3. **What details reveal.** A character who moves an unopened letter around the kitchen for three days is *avoiding* it. Purpose answers are about what the details add up to, not the details themselves.

### Stay on the Page

The biggest literary trap is **over-reading**: choices that invent plot ("she decides to leave"), name an emotion that is too strong ("despair" for mild disappointment), or explain causes the text never gives. Every word of the right answer should be supported by something you can point to.`,
    },
    {
      id: 'tsp5-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Literary Purpose and Function** 🎯',
      exercise: {
        questions: [
          {
            question: `The following text is from a short story. Mira has just moved to a new city.

The apartment was smaller than the photographs had suggested, and the window looked out onto a brick wall. Mira set her suitcase down and stood for a long moment in the middle of the room. Then she opened the window, leaned out, and found that if she turned her head just so, she could see a narrow slice of the river, glittering in the late sun.

Which choice best states the main purpose of the text?`,
            options: [
              `To describe the history of the city that a character has just moved to`,
              `To explain why a character chose to rent an apartment that faces a wall`,
              `To show a character finding some hope in a disappointing new home`,
              `To portray a character deciding to leave her apartment and go home`,
            ],
            correctAnswer: 2,
            explanation: `The apartment disappoints (smaller than the photographs, a view of a wall), but Mira finds a glimpse of the glittering river, a small hopeful turn. No city history is given, the text never says why she chose the apartment, and she leans out of the window rather than deciding to leave.`,
          },
          {
            question: `The following text is from a short story. Elias has worked on his family's farm all his life.

Every morning for forty years, Elias had walked the fence line before breakfast. He knew which posts leaned and which wires sagged, and he could tell from the tracks in the frost which animals had passed in the night. This morning he stopped at the gate, looked out over the field, and went back inside without taking a single step along the fence.

Which choice best describes the function of the last sentence in the text as a whole?`,
            options: [
              `It marks a break from a long-established routine described earlier.`,
              `It explains how Elias learned to identify animals from their tracks.`,
              `It provides an example of the care Elias takes with the farm's fences.`,
              `It describes the weather conditions Elias faces on most mornings.`,
            ],
            correctAnswer: 0,
            explanation: `The first two sentences establish a forty-year habit, and the last sentence ("This morning... without taking a single step") breaks it. The sentence does not explain how he learned tracking, it shows him skipping the fence rather than caring for it, and it says nothing about the weather.`,
          },
          {
            question: `The following text is from a poem. The speaker addresses an old oak tree.

You have stood here through a hundred winters, / Bare as a hand held open to the snow; / And every spring, without a word of thanks, / You dress yourself again in green, and grow.

Which choice best describes the overall structure of the text?`,
            options: [
              `The speaker praises the tree's beauty and then mourns that it has been cut down.`,
              `The speaker describes the tree in winter and then describes its renewal in spring.`,
              `The speaker asks the tree a question and then imagines how the tree would answer.`,
              `The speaker compares the tree with a person and then rejects that comparison.`,
            ],
            correctAnswer: 1,
            explanation: `The first two lines picture the bare tree through winters, and the last two describe it growing green again each spring. The tree is still standing, the speaker asks no question, and although the tree is compared with "a hand," the comparison is never rejected.`,
          },
        ],
      },
    },
    {
      id: 'tsp5-text2',
      type: 'text' as const,
      content: `## Worked Example: What the Details Add Up To

> The following text is from a short story.
>
> The letter had been on the kitchen table for three days. Nora had moved it twice, once to wipe the table and once to make room for the fruit bowl, but she had not opened it. Her brother's handwriting on the envelope was the same as it had been when they were children: large, slanting, impatient.

**Function of the second sentence:** It shows Nora handling the letter without opening it, which reveals that she is **avoiding** it. (It does not tell us why; a choice that says "because she is angry at her brother" over-reads.)

**Purpose of the text:** *to convey a character's reluctance to face a message connected to her past.*

| Choice | Verdict |
|---|---|
| To convey a character's hesitation about a letter from someone she knows well | ✅ Supported by every sentence |
| To explain why Nora and her brother stopped speaking | ❌ The text never says they stopped speaking |
| To describe how Nora keeps her kitchen clean and organized | ❌ Too narrow: wiping the table is a detail |
| To show Nora reading her brother's letter with growing joy | ❌ She never opens it |

### Literary Structure: Look for the Turn

| Pattern | Signal |
|---|---|
| Routine → break | "Every morning... This morning" |
| Expectation → reality | "had suggested," "turned out" |
| Memory → present | past perfect ("had been") giving way to simple past or present |
| Outer scene → inner feeling | description of a place, then a character's reaction |
| Busy → still (or the reverse) | a scene that empties, fills, quiets, or erupts |`,
    },
    {
      id: 'tsp5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Stories and Poems** 🎯',
      exercise: {
        questions: [
          {
            question: `The following text is from a short story. Ana is a violinist preparing for an audition.

For weeks Ana had practiced the concerto's opening until her fingers moved through it without her. Now, in the waiting room, she tried to run it in her head and found nothing there, only the hum of the radiator and the muffled sound of someone else's scales through the wall. She looked down at her hands. They, at least, seemed calm.

Which choice best describes the function of the last two sentences in the text as a whole?`,
            options: [
              `They reveal that Ana has decided not to perform the concerto at the audition.`,
              `They explain why the music from the next room is making it hard to concentrate.`,
              `They show that Ana feels confident because she has practiced for many weeks.`,
              `They suggest that Ana's trained hands may still hold what her anxious mind has lost.`,
            ],
            correctAnswer: 3,
            explanation: `Her mind goes blank ("found nothing there"), but her hands, which had learned the piece "without her," seem calm; "at least" sets the hands against her anxious mind. Nothing suggests she will skip the concerto. The scales are part of the scene, not given as the cause of her blankness, and "at least" signals that only her hands are calm, not that she feels confident.`,
          },
          {
            question: `The following text is from a short story. Theo, a boy of nine, is visiting his grandmother's house.

The house smelled of cedar and old paper. In the hallway hung dozens of framed photographs, and Theo walked slowly past them, studying the faces. Most were strangers. But near the end of the row he stopped: a boy about his own age stood squinting into the sun, and he had Theo's ears, Theo's crooked smile, and Theo's habit of standing with one foot turned in.

Which choice best states the main purpose of the text?`,
            options: [
              `To describe the furniture and smells of a grandmother's house in detail`,
              `To show a boy recognizing himself in a family member from the past`,
              `To explain why Theo's grandmother keeps so many framed photographs`,
              `To portray a boy's growing boredom during a long visit to a relative`,
            ],
            correctAnswer: 1,
            explanation: `The text builds to the "But" moment when Theo sees a boy from an old photograph who shares his ears, smile, and stance. The smell of the house is a single detail and no furniture is described, the grandmother's reasons are never given, and Theo studies the photographs with interest rather than boredom.`,
          },
          {
            question: `The following text is from a poem.

At noon the market roars with voices, carts, / The clang of pans, the bargaining, the bells; / By dusk the square is swept, the stalls are folded, / And only pigeons cross the empty stones.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes a market at noon and then explains why the market's sellers left early.`,
              `It lists the sounds of a market and then argues that the market should be quieter.`,
              `It contrasts a scene of busy activity with the same scene emptied later in the day.`,
              `It describes a peaceful square and then imagines it filled with crowds in the future.`,
            ],
            correctAnswer: 2,
            explanation: `The first two lines fill the market with noise at noon, and the last two show the same square empty at dusk. The poem gives no reason for the change (the sellers simply pack up at day's end), makes no argument about noise, and moves from busy to quiet, not the reverse.`,
          },
        ],
      },
    },
    {
      id: 'tsp5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Literary Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Purpose answers for literary texts often begin with verbs like [portray|prove|calculate|refute]',
          'A sentence that interrupts a long habit usually [marks a shift|gives background|restates the habit|ends the story]',
          'A character avoiding an unopened letter reveals [her feelings or attitude|the setting\'s history|the author\'s biography|the time period]',
          'Choose the answer that stays [within what the text shows|closest to your guess about the plot|furthest from the details|most dramatic]',
        ],
        correctAnswers: ['portray', 'marks a shift', 'her feelings or attitude', 'within what the text shows'],
        hint1: 'Stories show; they rarely prove.',
        hint2: 'Routine, then a break = a shift.',
        hint3: 'Actions reveal attitudes; stay on the page.',
        explanation: 'Literary purpose answers use verbs like portray and convey. A break in routine marks a shift. Actions such as avoiding a letter reveal a character\'s attitude. The right answer never goes beyond what the text shows.',
      },
    },
    {
      id: 'tsp5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Rule |
|---|---|
| Read the intro line | It names the character and situation |
| Literary verbs | portray, convey, reveal, establish, contrast, reflect on |
| Track shifts | Time, mood, routine vs. break, busy vs. still |
| Details → meaning | Ask what the details reveal, then match the choice |
| Over-reading trap | Invented plot, emotions that are too strong, unstated causes |

*Next: Trap Answers and Elimination →*`,
    },
  ],
}
