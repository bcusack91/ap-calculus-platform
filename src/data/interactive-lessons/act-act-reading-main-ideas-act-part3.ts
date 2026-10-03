export const actReadingMainPart3Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# 🧩 Making Inferences

**Part 3 of 7 — Reading Between the Lines Without Going Too Far**

## What an ACT Inference Is

An inference is a conclusion the passage **doesn't state outright but clearly supports**. On the ACT, inferences are *small steps*: one move beyond the text, never a leap. If you can't point to the words that support your answer, it isn't an inference. It's a guess.

**Stems that signal an inference question:**
- "It can reasonably be inferred that..."
- "The passage most strongly suggests that..."
- "Which statement is best supported by the passage?"
- "The narrator would most likely agree that..."
- "Based on the passage, X most likely..."

## The Prove-It Test

Before you choose, finish this sentence: *"I know this because the passage says ____."* The blank must be filled with actual words from the passage. The best inferences usually **combine two or more clues**:

| Clue 1 | Clue 2 | Inference |
|---|---|---|
| The umbrella by the door is dripping | Her shoes are soaked | She just came in from the rain |
| The trophy case is dusty | The newest banner is from 1987 | The team hasn't won a title in years |
| She rehearses her speech in the car | Her hands shake at the podium | She is nervous about speaking |
| Birds abandon the feeder | A hawk's shadow crosses the yard | The birds are hiding from a predator |

## Signal Words Carry Logic

Small words often hold the whole inference. Read them as logic:

| Word or phrase | What it implies | Example |
|---|---|---|
| **anyway** | Someone acts despite a reason not to | "The forecast called for snow. She drove to the coast anyway." |
| **finally / at last** | A long wait came first | "The package finally arrived." |
| **no longer / once** | Something used to be true | "The theater no longer showed silent films." |
| **still** | Something continues, often unexpectedly | "He still sets two places at the table." |
| **even** | Something is surprising | "Even the youngest volunteers knew the codes." |
| **among the first** | Few or none did it before | "Among the first schools to offer computer classes" → few schools offered them earlier |
| **advised readers to buy X** | X already existed | "She advised readers to buy a thermometer" → thermometers were available, so she didn't invent them |

## Inferences in Prose Fiction

Fiction *shows* rather than tells. Characters' feelings and relationships come through:
- **Actions and gestures:** tapping a pencil faster and faster, turning a ring around and around a finger.
- **Objects:** a suitcase left packed by the door, a phone checked again and again.
- **What characters say, and don't say:** an "I'm fine" that comes too quickly suggests the opposite.
- **Contrast with the past:** a kitchen once crowded for Sunday dinners, now set for one.

## Why Wrong Inferences Are Wrong

| Trap | Example | Why it fails |
|---|---|---|
| **Too extreme** | "Every student now loves math" from one class's improved test scores | Goes far past the evidence |
| **Unstated motive** | "She moved because she disliked her neighbors" | The passage never gives a reason |
| **Unsupported prediction** | "The town will build a second pool next year" | The future isn't described |
| **Outside knowledge** | "Most scientists now agree..." when no scientists are mentioned | True or not, it's not in the passage |
| **Contradiction** | "He has never met her" when he greets her by her childhood nickname | The text says otherwise |
| **Wrong character** | Giving the brother's feelings to the sister | Mixes up who did or felt what |

**A useful pattern:** correct inferences often use measured words such as *some, may, likely, at least*. That isn't a rule to pick blindly; the right answer is the one the text supports. But choices with *all, every, never, prove,* or *only* need very strong support.

**ACT Tip:** If two choices both seem possible, pick the one that requires *fewer* assumptions. The ACT's answer is the safest conclusion, not the most interesting one.
      `
    },
    {
      id: 'act-r3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A character inference from combined clues</b></summary>

**Passage:**

> Elena set two cups on the table out of habit, then put one back in the cabinet. The kettle whistled. On the windowsill, her husband's reading glasses lay folded on top of a crossword, half-finished in his small, careful handwriting, exactly where they had been since March.

**Question:** The passage most strongly suggests that Elena:

- A. dislikes crossword puzzles and plans to throw this one away.
- B. is expecting a guest to join her for tea in a few minutes.
- C. is adjusting to her husband's absence from her daily routine.
- D. has asked her husband several times to put away his glasses.

**Solution:**
1. **Combine clues:** a second cup set out "out of habit" and then put away; his glasses and crossword untouched "since March."
2. **Inference:** her husband used to share this routine and is no longer there. The passage doesn't say *why*, so the safest answer names the absence, not a cause.
3. **Eliminate:** A and D add motives the passage never gives. B contradicts the cup being put back.

**Answer: C** ✓
</details>

<details>
<summary><b>Example 2: Logic from a signal word</b></summary>

**Passage:**

> By 1930, the Ridley Theater no longer showed silent films. Its organist, who had played along with every picture for twelve years, was offered a job as the building's night manager.

**Question:** It can most reasonably be inferred that:

- A. the organist had been a poor musician for most of those twelve years.
- B. every theater in the city stopped showing films in 1930.
- C. the organist turned down the job of night manager.
- D. the organist's original job was no longer needed at the theater.

**Solution:**
1. **"No longer"** tells you the theater used to show silent films, and the organist played along with them.
2. Once silent films stopped, the job of playing along with them disappeared, which is why he was offered a *different* job.
3. **Eliminate:** A gives an unstated reason. B is too extreme and shifts from "silent films" to "films." C predicts a decision the passage never reports.

**Answer: D** ✓
</details>
      `
    },
    {
      id: 'act-r3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Inferences in Prose Fiction** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Jonah read the email a third time, then closed the laptop without replying. At dinner he answered his mother's questions in single words and pushed his peas into neat rows. When his little sister asked whether he'd heard from the college yet, he said, "Can you pass the bread?"

It can most reasonably be inferred that Jonah:`,
            options: [
              `is angry with his little sister about something she did earlier today.`,
              `received news from the college that he doesn't want to discuss.`,
              `has decided not to apply to any colleges this year after all.`,
              `is too busy with schoolwork to pay attention to his family.`
            ],
            correctAnswer: 1,
            explanation: `He rereads an email, won't reply, goes quiet at dinner, and dodges the question about the college by asking for bread, which together suggest the email brought college news he wants to avoid discussing. His sister's question bothers him, but nothing shows anger at her for an earlier act. The question "whether he'd heard" implies he already applied, and the passage never mentions schoolwork.`
          },
          {
            question: `Mrs. Castellano had run the corner bakery for thirty-one years. On her last morning, she arrived at four as usual, though there was nothing left to bake. She wiped down the already-clean counters, straightened the empty display case, and stood for a while by the window, watching the street wake up.

The passage most strongly suggests that Mrs. Castellano:`,
            options: [
              `plans to reopen the bakery in a new location next year.`,
              `is relieved to be finished with such early mornings.`,
              `was forced to close the bakery because of falling sales.`,
              `finds it hard to let go of a routine she has kept for decades.`
            ],
            correctAnswer: 3,
            explanation: `She arrives at four with nothing to bake, cleans counters that are already clean, and lingers at the window, which shows a reluctance to leave a long-held routine. Coming in at the usual early hour is the opposite of relief about early mornings. The passage gives no reason the bakery is closing and no plan to reopen, so those choices add information.`
          },
          {
            question: `Every Saturday, Grandpa Ray took Lucia to the lake to fish, though neither of them ever caught much. This Saturday, Lucia packed both rods into the car before he came downstairs. When he saw them, he laughed, picked up his old canvas hat from the hook, and said, "Well, I suppose the fish won't wait."

The passage suggests that Lucia and her grandfather:`,
            options: [
              `value their Saturday trips for reasons other than the fish.`,
              `are both expert anglers who usually catch a great deal.`,
              `have recently argued about whether to keep fishing.`,
              `plan to sell their fishing rods at the end of the season.`
            ],
            correctAnswer: 0,
            explanation: `They go every week even though "neither of them ever caught much," and Lucia eagerly packs the rods, so the trips matter for something besides the catch, such as time together. Rarely catching much rules out expert anglers who catch a great deal. Ray laughs and grabs his hat, which shows no sign of an argument, and nothing mentions selling the rods.`
          },
          {
            question: `The new girl sat at the end of the lunch table, unwrapping her sandwich slowly. Dana watched her for a minute, then picked up her own tray. "Is this seat taken?" she asked, though there were six empty chairs around them.

Dana's question most likely shows that she:`,
            options: [
              `cannot see that most of the chairs at the table are empty.`,
              `wants to tell the new girl that she is sitting at the wrong table.`,
              `is offering friendship in a polite way that eases awkwardness.`,
              `is annoyed that the new girl took her usual seat at lunch.`
            ],
            correctAnswer: 2,
            explanation: `The phrase "though there were six empty chairs" shows that Dana asks a question she already knows the answer to, a polite way to open a conversation with someone sitting alone. The narrator points out the empty chairs, so Dana's question is not a failure to see them. Nothing suggests the table is wrong for the new girl or that Dana usually sits in that seat.`
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Read the Signal Word** 🔍

Choose what each sentence lets you infer.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The bus finally pulled up at 8:40."',
            options: ['The bus was late or the wait was long', 'The bus is always early', 'The bus broke down on the way']
          },
          {
            label: '"Mira no longer walks to school."',
            options: ['Mira has never walked to school', 'Mira used to walk to school', 'Mira lives very close to school']
          },
          {
            label: '"Even the coach was surprised by the score."',
            options: ['The coach expected this score', 'The score was unexpected', 'The coach missed the game']
          },
          {
            label: '"The 1950 manual was among the first to include diagrams."',
            options: ['Few earlier manuals had diagrams', 'All later manuals copied it', 'The author invented diagrams']
          }
        ],
        correctAnswers: ['The bus was late or the wait was long', 'Mira used to walk to school', 'The score was unexpected', 'Few earlier manuals had diagrams'],
        hint1: '"Finally" implies waiting.',
        hint2: '"No longer" means something used to be true.',
        hint3: '"Among the first" says little about what came after.',
        explanation: '"Finally" signals a long wait. "No longer" means Mira once walked. "Even the coach" signals that the result surprised someone who would be least likely to be surprised. "Among the first" tells you few earlier manuals had diagrams; it says nothing about every later manual or about inventing diagrams.'
      }
    },
    {
      id: 'act-r3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Inferences in Informational Passages** 📋
      `,
      exercise: {
        questions: [
          {
            question: `When the town of Ferris replaced its streetlights with dimmer, downward-facing fixtures in 2020, amateur astronomers began driving in from nearby cities on clear nights. Two motels on the edge of town now advertise "dark-sky weekends," and the high school started an astronomy club the following fall.

Which statement is best supported by the passage?`,
            options: [
              `Ferris now has the darkest skies of any town in the country.`,
              `The motels were losing money before the lights were replaced.`,
              `Before 2020, light in Ferris made stargazing harder.`,
              `Every resident of Ferris has joined the astronomy club.`
            ],
            correctAnswer: 2,
            explanation: `After dimmer fixtures went in, astronomers started coming and motels advertised dark skies, which suggests the earlier lighting interfered with viewing the stars. "Darkest of any town in the country" is a comparison the passage never makes. Nothing describes the motels' earlier finances, and a high school club says nothing about every resident.`
          },
          {
            question: `In 1912, the Brandt Company began printing its catalog in four languages. Within a decade, its mail-order sales in the river valley, home to many recent immigrant families, had tripled.

The passage suggests that the four-language catalog most likely:`,
            options: [
              `helped the company reach customers who read other languages.`,
              `was the only catalog in the valley printed in more than one language.`,
              `caused every immigrant family in the valley to buy from Brandt.`,
              `cost more to print than the company earned from new sales.`
            ],
            correctAnswer: 0,
            explanation: `The catalog added languages, and sales tripled in a valley home to many immigrant families, so the reasonable conclusion is that the new catalog reached readers of other languages. The passage compares Brandt with no other catalogs, so "the only catalog" is unsupported. "Every immigrant family" is far too extreme, and the passage gives no printing costs.`
          },
          {
            question: `Field researchers noticed that crows in one city dropped walnuts onto crosswalks rather than onto open road. The birds waited on nearby wires until the walk signal stopped traffic, then flew down to collect the cracked nuts.

The passage most strongly suggests that the crows:`,
            options: [
              `are unable to crack walnuts in any other way.`,
              `prefer walnuts to every other kind of food in the city.`,
              `were trained by researchers to use the crosswalks.`,
              `time their actions to avoid the danger of moving cars.`
            ],
            correctAnswer: 3,
            explanation: `The crows choose crosswalks and wait for the walk signal to stop traffic before landing, a pattern that keeps them away from moving cars. The passage never says they lack other ways to crack nuts or that walnuts are their favorite food. The researchers only "noticed" the behavior, so nothing suggests the researchers trained the birds.`
          },
          {
            question: `The author of a passage on public parks writes: "A park that closes at sunset serves only people who are free during the day. The neighborhoods that most need green space are often home to people who work long shifts."

The author would most likely agree that:`,
            options: [
              `parks should be closed to the public after sunset.`,
              `park hours can limit who is able to use a park.`,
              `people who work long shifts have no interest in parks.`,
              `every city park should stay open all night long.`
            ],
            correctAnswer: 1,
            explanation: `The author argues that sunset closing serves only people free during the day, which means hours shape who can use a park. Favoring sunset closing reverses that concern. The author says those workers need green space, not that they lack interest, and "every park ... all night" goes beyond anything the author proposes.`
          }
        ]
      }
    },
    {
      id: 'act-r3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> The letter from the conservatory came on a Tuesday. Aunt Bea read it aloud twice at the kitchen table, then pinned it to the refrigerator with the magnet shaped like a lemon, the one that had held up every report card since second grade. That night, from her room, Kiran could hear her on the phone with someone, laughing in a way she hadn't since the winter. In the morning, the old upright piano in the hallway, which had been out of tune for as long as Kiran could remember, had a business card from a piano tuner tucked under its lid.

**Question 1:** It can most reasonably be inferred that the conservatory's letter:

**Question 2:** The detail about the piano tuner's card most strongly suggests that Aunt Bea:

<details>
<summary><b>Show answers</b></summary>

**1. Brought good news about Kiran.** It goes on the refrigerator with the magnet reserved for report cards, and Bea laughs on the phone that night. Reading it "aloud twice" points to pride, not worry.

**2. Intends to support Kiran's music by fixing the long-neglected piano.** The card appears the morning after the letter, under the lid of a piano out of tune "for as long as Kiran could remember." A choice saying she "plans to sell the piano" would be unsupported.
</details>
      `
    },
    {
      id: 'act-r3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- An inference is a **small, supported step** beyond the text. Pass the **prove-it test**: point to the words.
- The strongest inferences **combine two or more clues**.
- Read **signal words as logic**: *anyway, finally, no longer, still, even, among the first.*
- In fiction, infer feelings from **actions, objects, dialogue,** and **contrast with the past**.
- Reject **extreme, unstated-motive, prediction, outside-knowledge, contradiction,** and **wrong-character** choices.
- When two choices seem possible, choose the one that needs **fewer assumptions**.
      `
    }
  ]
}
