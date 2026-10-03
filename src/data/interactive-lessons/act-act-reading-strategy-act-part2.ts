export const actReadingStratPart2Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-rs2-intro',
      type: 'text' as const,
      content: `
# 🎯 Main Idea vs. Detail

**Part 2 of 7 — Topic + Claim, the Umbrella Test, Detail Traps & Qualified Positions**

## What a Main Idea Actually Is

A main idea has two parts: **the topic** (what the passage is about) and **the claim** (what the author says about that topic). "Octopuses" is a topic. "Octopus behavior suggests an intelligence that evolved separately from ours" is a main idea.

Big-picture questions use stems like these:

| Stem | What it wants |
|---|---|
| "Which choice best states the main idea of the passage?" | topic + the author's overall claim |
| "The passage is primarily concerned with…" | what the passage spends most of its length doing |
| "The author's main point is that…" | the claim the author is arguing for |
| "Which choice best summarizes the author's overall position?" | the author's conclusion, including any conditions |
| "The main idea of the third paragraph is…" | the same question, scaled down to one paragraph |

## Where the Main Idea Lives

- **Argument and social science passages** often state the claim near the **end**, after the evidence, or right after a turn word: *"Yet," "Still," "In other words," "The evidence suggests…"*
- **Science passages** often build from examples to what the examples **suggest**. The main idea is the suggestion, not any single example.
- **Narratives** rarely state a main idea. Ask instead: *What changes for the main character, and what causes it?*
- **Chain passages** (one event leads to the next) have a main idea that names the whole chain: "how a chance find led to the discovery of an ancient village," not just the first or last link.

## The Umbrella Test

The correct main-idea choice is an umbrella that covers **every paragraph**, and nothing beyond the passage. Hold each choice over the passage:

| Choice type | What it looks like | Verdict |
|---|---|---|
| **Main idea** | Covers all paragraphs and includes the author's claim | ✅ |
| **Too narrow (detail trap)** | True, but covers only one paragraph or one example | ❌ |
| **Too broad / too extreme** | Says "all," "every," "always," or covers more than the passage discusses | ❌ |
| **Distorted** | Uses the passage's words but reverses or twists the author's view | ❌ |
| **Half right** | Starts with the topic correctly, then adds a claim the passage never makes | ❌ |

The **detail trap** is the most tempting because the choice is **true**. That is the point: on a main-idea question, "it's in the passage" is not enough. Ask, *"Could this be the title of the whole passage, or only of one paragraph?"*

## Supporting Details Serve the Main Idea

Examples, statistics, anecdotes, and quotations are evidence. They are there to **support** the claim, so they are almost never the main idea themselves. If the passage lists three behaviors and then says what they suggest, the behaviors are details and the suggestion is the main idea.

## Qualified Positions: Keep the Condition

ACT authors are rarely all-for or all-against. A common structure is:

> **Concession** ("It is true that…," "Critics point out…") → **Response** ("But…," "Still…") → **Qualified conclusion** ("…can work *if*…," "…on balance," "…*provided* that…")

When the conclusion carries a condition, the correct answer carries it too. A choice that drops "if districts plan carefully" or "on balance" overstates the author's position, and a choice that repeats only the concession reverses it.

**Signal words for qualified claims:** *if, provided, unless, on balance, partly, largely, in many cases, neither… nor…*

## A Three-Step Routine

1. **Before looking at the choices,** say the main idea in about ten words: topic + claim (+ condition, if there is one).
2. **Eliminate** choices that fit only one paragraph, overreach with extreme words, or flip the author's view.
3. **Confirm** the survivor against the first and last paragraphs. If it clashes with either, recheck.
      `
    },
    {
      id: 'act-rs2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A qualified argument</b></summary>

**Passage:** Many companies that switched to remote work report lower office costs, and most employees say they value the shorter commute. Yet surveys also suggest that new hires learn their jobs more slowly when they rarely see experienced colleagues. The answer, then, is not to order everyone back to the office, but to bring teams together on purpose, on the days when learning matters most.

**Predict:** Topic = remote work. Claim = keep it, but gather teams deliberately for learning. Condition = "on purpose, on the days when learning matters most."

**Sort the choices:**
- "Remote work lowers office costs for many companies." → **too narrow** (one detail from the first sentence)
- "Remote work harms new employees and should be ended." → **distorted** (the author rejects ordering everyone back)
- "Companies should keep remote work but gather teams when learning matters." → **main idea** ✅
- "Every company's workers prefer remote work to the office." → **too extreme** ("every"; the passage says "most employees")
</details>

<details>
<summary><b>Example 2: Main idea of a narrative</b></summary>

**Passage:** Teo had failed the swim test twice, and he sat out the third try with a stomachache that disappeared as soon as the bus pulled away. That summer his older sister took him to the lake every evening. She never mentioned the test. They floated, splashed, and raced to the dock, and by August he was racing her back. When the fall test came, he passed it before he had time to be afraid.

**Ask:** What changes for Teo, and what causes it? He goes from avoiding the test to passing it easily, because casual practice with his sister replaced fear with comfort.

**Main idea:** Relaxed practice with his sister helps a fearful boy overcome his anxiety about swimming. A choice like "Teo's sister was a strong swimmer" is a detail the passage only implies, and "Teo learned that tests are unfair" is a claim the passage never makes.
</details>
      `
    },
    {
      id: 'act-rs2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Main Idea or Detail?** 🎯

**Passage 1**

Supporters argue that homework teaches young children discipline and lets parents see what is happening in class. Research on elementary students, however, finds little connection between time spent on homework and test scores, and long assignments often end in frustration at the kitchen table. Short daily reading is the exception: children who read at home for even fifteen minutes a night tend to read better. Rather than banning homework, then, elementary schools should limit it to brief nightly reading.

**Passage 2**

Honeybees share the locations of flowers with a dance. A forager returning from a rich patch runs a figure-eight pattern on the honeycomb. The angle of the straight run in the middle of the figure tells other bees the direction of the flowers relative to the sun, and the length of that run signals distance. Bees that follow the dancer then fly straight to the patch. To many researchers, the dance is one of the clearest examples of symbolic communication outside of humans.
      `,
      exercise: {
        questions: [
          {
            question: `Which choice best states the main idea of Passage 1?`,
            options: [
              `Homework teaches young children discipline and daily responsibility`,
              `Elementary homework should be limited to brief nightly reading`,
              `Children who read at home every night tend to read better`,
              `All homework should be banned from elementary schools`,
            ],
            correctAnswer: 1,
            explanation: `The final sentence gives the author's conclusion, and it covers both the weak evidence for homework in general and the exception for reading. Discipline is the supporters' claim, which the research challenges. The reading result is one supporting detail, and banning all homework is exactly what the author says not to do.`,
          },
          {
            question: `Which choice is a supporting detail in Passage 1 rather than its main idea?`,
            options: [
              `Limiting homework to reading is better than banning it`,
              `Research gives elementary homework little academic support`,
              `Long assignments often end in frustration at home`,
              `Young children benefit from reading but not from most homework`,
            ],
            correctAnswer: 2,
            explanation: `Frustration at the kitchen table is one specific consequence mentioned in a single sentence, so it is a detail. The other three choices each sum up the passage's overall position or a large part of it: the research finding, the reading exception, and the conclusion that limiting beats banning.`,
          },
          {
            question: `Which choice best states the main idea of Passage 2?`,
            options: [
              `Honeybees use a dance to share direction and distance, a form of symbolic communication`,
              `Honeybee foragers run a figure-eight pattern after finding rich flower patches`,
              `Honeybees communicate more effectively than any other animal species except humans`,
              `Honeybees find flowers by following the position of the sun across the sky each day`,
            ],
            correctAnswer: 0,
            explanation: `The passage explains how the dance encodes direction and distance and ends with what researchers conclude about it, so the main idea joins the mechanism to that conclusion. The figure-eight pattern is one step in the description. "More effectively than any other species" overreaches the claim that it is one of the clearest examples, and the sun is a reference point in the dance, not the passage's subject.`,
          },
          {
            question: `Passage 2 is primarily concerned with:`,
            options: [
              `why bees prefer some flower patches over all others`,
              `how bees tell one another where food can be found`,
              `how researchers first discovered the bee dance`,
              `what humans can learn from the way bees dance`,
            ],
            correctAnswer: 1,
            explanation: `Nearly every sentence describes how the dance passes along the location of flowers. The passage never compares flower patches, never tells the story of the dance's discovery, and mentions humans only as a point of comparison in the last sentence.`,
          },
        ],
      },
    },
    {
      id: 'act-rs2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Sort the Choices** 🔍

Passage: *City trees cool streets, clean the air, and raise property values. Planting and watering them costs money, and roots can crack sidewalks. Even so, studies of several cities find that the benefits of a well-chosen street tree outweigh its costs within a decade.*

Classify each answer choice to the question "Which choice best states the main idea?"
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Tree roots can crack city sidewalks."',
            options: ['main idea', 'too narrow (detail)', 'too extreme', 'distorted'],
          },
          {
            label: '"Well-chosen street trees are worth their costs over time."',
            options: ['main idea', 'too narrow (detail)', 'too extreme', 'distorted'],
          },
          {
            label: '"Every city should plant trees on every street immediately."',
            options: ['main idea', 'too narrow (detail)', 'too extreme', 'distorted'],
          },
          {
            label: '"Street trees cost more than they are worth."',
            options: ['main idea', 'too narrow (detail)', 'too extreme', 'distorted'],
          },
        ],
        correctAnswers: ['too narrow (detail)', 'main idea', 'too extreme', 'distorted'],
        hint1: 'Is the sidewalk point the whole passage or one sentence?',
        hint2: 'The last sentence gives the author\'s conclusion, with a condition: "well-chosen."',
        hint3: 'Look for "every" and claims that reverse "outweigh its costs."',
        explanation: 'Cracked sidewalks is one cost (detail). The conclusion is that well-chosen trees repay their costs (main idea). "Every city… every street" goes far beyond the passage (extreme), and "cost more than they are worth" reverses the author\'s finding (distorted).',
      },
    },
    {
      id: 'act-rs2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

**Passage:** In 1911, a farmer near Lake Torva plowed up a small bronze pin. For years it sat in a drawer. When a visiting scholar finally identified it as nearly three thousand years old, archaeologists began digging in the field, and they uncovered the posts of a village that had once stood on the lakeshore. Its houses, tools, and storage pits now offer the clearest picture of daily life in the region at that time.

<details>
<summary><b>Try it: The passage is primarily concerned with what?</b></summary>

How a chance find led to the discovery of an ancient village. The passage is a chain: pin found → pin identified → digging → village → what it reveals. "Why the pin sat in a drawer" covers half a sentence, and "what villagers stored in their pits" is a detail from the last sentence.
</details>

<details>
<summary><b>Try it: An answer choice says "Ancient lakeside villages are common throughout the region." Why is it wrong?</b></summary>

It is too broad. The passage describes one village and says it offers the clearest picture of local life; it never says such villages are common. Watch for main-idea choices that turn one example into a general rule.
</details>

**ACT Tip:** Predict the main idea in your own words before reading the choices. The detail traps are written to sound right, and a prediction gives you something to measure them against.
      `
    },
    {
      id: 'act-rs2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋

Humanities: this passage discusses the return of an old printing method.

¶1 When computers made typesetting cheap in the 1980s, most commercial letterpress shops closed, and many of their heavy iron presses were sold for scrap.

¶2 Two decades later, the presses began to come back. Art schools bought surviving machines, and small studios started printing wedding invitations and posters, prizing the slight dent that each letter presses into thick paper.

¶3 Critics call the revival a nostalgic hobby for people with money to spend; a letterpress invitation can cost several times as much as a printed-at-home one.

¶4 That charge is partly fair. But the revival has also kept alive skills (setting type by hand, mixing ink, adjusting the pressure of a press) that would otherwise have vanished with the last generation of commercial printers.
      `,
      exercise: {
        questions: [
          {
            question: `Which choice best states the main idea of the passage?`,
            options: [
              `Letterpress printing costs far more than printing at home`,
              `Computers made commercial letterpress shops obsolete`,
              `The letterpress revival is merely a costly nostalgic hobby`,
              `The letterpress revival, though costly, preserves old skills`,
            ],
            correctAnswer: 3,
            explanation: `The passage traces the decline and return of letterpress, grants the critics' point about cost, and ends by crediting the revival with saving skills, so the main idea must include both the concession and that conclusion. The cost comparison is one detail, the shops' closing covers only the first paragraph, and "merely a hobby" is the critics' view, which the author calls only partly fair.`,
          },
          {
            question: `The author's overall position on the critics described in the third paragraph is that their view is:`,
            options: [
              `partly fair but incomplete`,
              `entirely correct in every respect`,
              `completely mistaken about the cost`,
              `too technical for most readers`,
            ],
            correctAnswer: 0,
            explanation: `"That charge is partly fair. But…" concedes some truth and then adds what the critics leave out, the preserved skills. "Entirely correct" ignores the "But," "completely mistaken" ignores "partly fair," and the passage never discusses whether the critics are too technical.`,
          },
          {
            question: `The main idea of the second paragraph is that:`,
            options: [
              `art schools bought every surviving letterpress machine`,
              `letterpress returned as schools and studios took it up`,
              `wedding invitations are the most popular letterpress item`,
              `printed letters leave a slight dent in thick paper`,
            ],
            correctAnswer: 1,
            explanation: `The paragraph opens with its topic sentence, "the presses began to come back," and the art schools and studios are its examples. "Every surviving machine" overstates "bought surviving machines," the paragraph never ranks invitations as most popular, and the dent in the paper is one supporting detail.`,
          },
          {
            question: `The passage is primarily concerned with:`,
            options: [
              `how to set type and mix ink by hand`,
              `why computers replaced iron presses`,
              `the craft's decline, return, and worth`,
              `what letterpress invitations cost today`,
            ],
            correctAnswer: 2,
            explanation: `The umbrella that covers all four paragraphs is the craft's decline, its revival, and the author's judgment of the revival's worth. The hand skills are listed only in the last paragraph, the computers' role is limited to the first, and cost appears in a single sentence.`,
          },
          {
            question: `Which statement best summarizes how the fourth paragraph relates to the third?`,
            options: [
              `It changes the subject from the revival to the history of commercial printing`,
              `It rejects the criticism entirely by showing that letterpress is inexpensive`,
              `It repeats the criticism in stronger terms and supports it with new examples`,
              `It accepts part of the criticism and then adds a benefit the critics overlook`,
            ],
            correctAnswer: 3,
            explanation: `The fourth paragraph concedes ("partly fair") and then responds ("But the revival has also kept alive skills"), the classic qualified-position move. It never claims letterpress is cheap, it softens rather than strengthens the criticism, and it stays on the revival instead of changing the subject.`,
          },
        ],
      },
    },
    {
      id: 'act-rs2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Main idea = topic + claim.** "Bees" is a topic; "the bee dance is symbolic communication" is a main idea.
- **Find the claim** after turn words ("Yet," "Still," "In other words") or at the end of an argument; in narratives, ask what changes and why.
- **Umbrella test:** the right choice covers every paragraph and nothing beyond the passage.
- **Detail traps are true.** Reject a choice that fits only one paragraph, one example, or one statistic.
- **Reject extreme and distorted choices:** "all," "every," "always," or a reversal of the author's view.
- **Keep the condition.** If the author says "can work if…" or "on balance," the correct answer says so too.
- **Predict first** in about ten words, then eliminate, then confirm against the first and last paragraphs.
      `
    }
  ]
};
