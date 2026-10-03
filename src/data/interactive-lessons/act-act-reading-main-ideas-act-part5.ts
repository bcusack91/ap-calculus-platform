export const actReadingMainPart5Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r5-intro',
      type: 'text' as const,
      content: `
# 📖 Vocabulary in Context

**Part 5 of 7 — Context Clues, Secondary Meanings, and the Substitution Test**

## What These Questions Really Test

ACT vocabulary questions read: *"As it is used in line 23, the word 'grave' most nearly means..."* The word is almost never obscure. It's usually a **common word used in a less common sense**, and the trap answer is the meaning you know best. A concern can't be a burial site, so a "grave concern" must be a *serious* one.

## The Four-Step Method

1. **Cover the choices.** Reread the full sentence, plus the sentence before and after if needed.
2. **Predict your own word.** Replace the target word with a simple word or phrase that keeps the sentence's meaning.
3. **Match** your prediction to the choices.
4. **Substitute** the choice back into the sentence. If the sentence now says something the passage doesn't mean, the choice is wrong.

## Context Clue Types

| Clue type | Signal words / punctuation | Example | Meaning |
|---|---|---|---|
| **Restatement** | colon, semicolon, dash, "that is" | "His reply was **terse**: three words and no explanation." | brief to the point of rudeness |
| **Contrast** | although, but, yet, however, rather than, "anything but" | "Although the first act dragged, the second was **brisk**." | quick, lively |
| **Example** | such as, for instance, including | "She favored **economical** fixes, such as reusing old crates as shelves." | cost-saving |
| **Cause / effect** | because, so, therefore, as a result | "The drought had so **depleted** the reservoir that watering was limited to one day a week." | used up |
| **Overall situation** | the scene or argument as a whole | "The team's reaction to the extra practice was **frosty**; players stared at the floor and no one spoke." | unfriendly |

**Punctuation is a clue.** What follows a colon or semicolon usually explains or restates what came before it. "Although" and "but" promise that the two halves of the sentence point in **opposite** directions.

## Common Words, Uncommon Senses

These are the kinds of words the ACT likes. Know the secondary sense:

| Word | Everyday sense | Secondary sense often tested |
|---|---|---|
| grave | burial place | serious ("a grave concern") |
| host | someone who welcomes guests | a large number ("a host of problems") |
| novel | a long work of fiction (noun) | new, original (adjective) ("a novel approach") |
| economical | cheap | sparing, concise ("an economical writing style") |
| thin | slender | weak, unconvincing ("thin evidence") |
| check | look over | hold back, restrain ("check the spread of a fire") |
| qualified | trained, eligible | limited by conditions ("a qualified endorsement") |
| telling | narrating | revealing, significant ("a telling pause") |
| reservation | a booking | a doubt ("agreed, but with reservations") |
| appreciate | be grateful for | rise in value ("the house appreciated") |
| conviction | a guilty verdict | a firm belief ("spoke with conviction") |
| tender | soft; caring | offer formally ("tender a resignation") |
| champion | a winner | defend or promote ("champion a cause") |
| pedestrian | a person walking | ordinary, dull ("a pedestrian speech") |
| faculty | a school's teachers | an ability ("a faculty for languages") |

## Why Wrong Choices Tempt You

| Trap | Example | How to avoid it |
|---|---|---|
| **Most common meaning** | "check" = look over, in "check the spread of a fire" | Ask: does looking over a fire stop it from spreading? |
| **Sense that fits a different kind of noun** | "thin" = slender, about evidence | Slenderness describes bodies, not evidence |
| **Sound-alike word** | "complimentary" confused with "complementary" | Spell it out; they are different words |
| **Wrong part of speech** | "novel" = a book, in "a novel approach" | Before "approach," the word must be an adjective |
| **Opposite meaning** | Missing an "although" contrast | Check which direction the signal word points |
| **Related but off** | "economical" = cheap, for a writing style | "Cheap" fits a price; "concise" fits writing |

**ACT Tip:** If you know the word's usual meaning and it fits the sentence perfectly, be suspicious. The ACT rarely asks about a word used in its most ordinary sense.
      `
    },
    {
      id: 'act-r5-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: A contrast clue</b></summary>

**Sentence:**

> Although the committee's first report was sweeping, recommending changes to nearly every department, its final report was narrow: it proposed revising a single form.

**Question:** As it is used in the sentence, "sweeping" most nearly means:

- A. cleaning with a broom.
- B. winning by a wide margin.
- C. wide-ranging.
- D. curving gracefully.

**Solution:**
1. **Predict:** "Although" sets the first report against a "narrow" final one, and "changes to nearly every department" restates the idea, so the word means *broad*.
2. **Match:** "wide-ranging." ✓
3. **Eliminate:** A is the literal, most common meaning. B fits "a sweeping victory," and D fits "a sweeping gesture," but neither describes a report's scope.

**Answer: C** ✓
</details>

<details>
<summary><b>Example 2: A restatement clue after a colon</b></summary>

**Sentence:**

> The scientist's conclusions were qualified: she noted that the results applied only to adult mice and might not hold for other species.

**Question:** As it is used in the sentence, "qualified" most nearly means:

- A. limited by conditions.
- B. properly certified.
- C. highly skilled.
- D. eligible to compete.

**Solution:**
1. **Read past the colon:** the clause lists *limits* ("only to adult mice," "might not hold").
2. **Substitute:** "Her conclusions were *limited by conditions*" matches the explanation.
3. **Eliminate:** B, C, and D describe a *person's* credentials, not conclusions, and they ignore the colon's restatement.

**Answer: A** ✓
</details>
      `
    },
    {
      id: 'act-r5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Most Nearly Means** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `With the river rising by the hour, the town council set aside its usual agenda; the only pressing question was whether to open the floodgates before nightfall.

As it is used in the sentence, the word "pressing" most nearly means:`,
            options: [
              `flattening with an iron`,
              `pushing down on firmly`,
              `demanding immediate action`,
              `crowding close together`
            ],
            correctAnswer: 2,
            explanation: `A rising river and a decision needed "before nightfall" make the question urgent, which is why the council dropped its usual agenda. Ironing and pushing down are physical senses of "press" that a question cannot have. Crowding together describes people in a space, not a single question.`
          },
          {
            question: `The editor's notes on the manuscript were measured: she praised the opening chapters, questioned two plot turns, and suggested only modest cuts.

As it is used in the sentence, the word "measured" most nearly means:`,
            options: [
              `careful and restrained`,
              `sized with a ruler`,
              `timed with a clock`,
              `divided into equal portions`
            ],
            correctAnswer: 0,
            explanation: `The colon introduces balanced feedback, praise mixed with a few questions and small cuts, so "measured" means careful and restrained. Sizing with a ruler and timing with a clock are literal senses that make no sense for notes. Nothing suggests the notes were split into equal parts.`
          },
          {
            question: `Though the hotel advertised luxury, its service was found wanting: the front desk was often empty, and guests waited an hour for towels.

As it is used in the sentence, the word "wanting" most nearly means:`,
            options: [
              `desiring something`,
              `highly sought after`,
              `missing a person`,
              `inadequate`
            ],
            correctAnswer: 3,
            explanation: `"Though" contrasts advertised luxury with the reality, and the clause after the colon lists failures, so the service was inadequate. Desiring something is the everyday sense, but service does not desire anything. "Highly sought after" reverses the meaning, and missing a person does not fit service that was poor.`
          },
          {
            question: `The twins shared a striking resemblance; even their teachers, who saw them every day, often called them by the wrong names.

As it is used in the sentence, the word "striking" most nearly means:`,
            options: [
              `refusing to work`,
              `noticeable at a glance`,
              `hitting forcefully`,
              `suddenly thought of`
            ],
            correctAnswer: 1,
            explanation: `Teachers who see the twins daily still mix them up, so the resemblance is noticeable at a glance. Refusing to work is the labor sense of "strike," and hitting forcefully is the physical sense; neither describes a resemblance. "Suddenly thought of" fits an idea that strikes someone, not how alike two people look.`
          }
        ]
      }
    },
    {
      id: 'act-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Context Clue** 🔍

Identify the type of clue that reveals the meaning of the bolded word.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"His directions were **cryptic**: he said only, \'Turn where the old mill used to be.\'"',
            options: ['Restatement', 'Contrast', 'Example', 'Cause / effect']
          },
          {
            label: '"Unlike her **gregarious** sister, who knew everyone at the party, Maya spoke to almost no one."',
            options: ['Restatement', 'Contrast', 'Example', 'Cause / effect']
          },
          {
            label: '"The garden attracts many **pollinators**, such as bees, moths, and hummingbirds."',
            options: ['Restatement', 'Contrast', 'Example', 'Cause / effect']
          },
          {
            label: '"The bridge was so **dilapidated** that the city closed it to all traffic."',
            options: ['Restatement', 'Contrast', 'Example', 'Cause / effect']
          }
        ],
        correctAnswers: ['Restatement', 'Contrast', 'Example', 'Cause / effect'],
        hint1: 'A colon usually introduces an explanation of what came before it.',
        hint2: '"Unlike" sets two people against each other.',
        hint3: '"So ... that" links a condition to its result.',
        explanation: 'The colon restates "cryptic" by giving the puzzling directions. "Unlike" contrasts the outgoing sister with quiet Maya. "Such as" introduces examples of pollinators. "So dilapidated that the city closed it" ties the bridge\'s condition to its result.'
      }
    },
    {
      id: 'act-r5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Traps and Tricky Senses** 📋
      `,
      exercise: {
        questions: [
          {
            question: `The reviewer's remarks about the young chef were largely complimentary; she called his sauces "fearless" and his desserts "the best in the city."

As it is used in the sentence, the word "complimentary" most nearly means:`,
            options: [
              `offered free of charge`,
              `expressing praise`,
              `completing something`,
              `politely brief`
            ],
            correctAnswer: 1,
            explanation: `The clause after the semicolon quotes the reviewer calling the sauces "fearless" and the desserts "the best in the city," so the remarks express praise. "Free of charge" is a real sense of the word, as in a complimentary breakfast, but remarks quoted as praise are not a free gift. "Completing something" confuses the word with "complementary," and nothing suggests the remarks were brief.`
          },
          {
            question: `The science teacher's approach was novel: no one in the district had ever tried teaching chemistry through cooking.

As it is used in the sentence, the word "novel" most nearly means:`,
            options: [
              `a long work of fiction`,
              `written as a story`,
              `old-fashioned`,
              `new and original`
            ],
            correctAnswer: 3,
            explanation: `The colon restates the idea: no one in the district had tried this before, so the approach is new and original. "A long work of fiction" is the noun sense, but here "novel" is an adjective describing an approach. "Written as a story" stretches the book sense to fit, and "old-fashioned" is the opposite of something no one had tried.`
          },
          {
            question: `Critics had expected the senator's speech to be inflammatory, but it was notably temperate: she acknowledged her opponents' concerns and proposed a compromise.

As it is used in the sentence, the word "temperate" most nearly means:`,
            options: [
              `moderate`,
              `mild in climate`,
              `fiercely partisan`,
              `short in length`
            ],
            correctAnswer: 0,
            explanation: `"But" contrasts the expected inflammatory speech with what she gave, and acknowledging opponents and proposing a compromise show restraint, so "temperate" means moderate. Mild climate is a real sense of the word, but it describes weather, not speeches. Fiercely partisan is the opposite of the contrast, and the sentence says nothing about the speech's length.`
          },
          {
            question: `The evidence for the company's claim was thin: a single survey of twelve customers, all of them relatives of employees.

As it is used in the sentence, the word "thin" most nearly means:`,
            options: [
              `slim in build`,
              `watery and diluted`,
              `not convincing`,
              `sparsely spread out`
            ],
            correctAnswer: 2,
            explanation: `The colon explains the judgment: one tiny survey of employees' relatives is weak support, so the evidence is not convincing. "Slim in build" describes a body, and "watery and diluted" fits soup or paint. "Sparsely spread out" fits hair or trees; the problem with the evidence is its quality, not how it is distributed.`
          }
        ]
      }
    },
    {
      id: 'act-r5-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> When Dr. Halsey first proposed that the marsh could filter the town's runoff, her colleagues agreed to fund the study only with reservations; one called it "a pleasant theory with no data." Halsey answered with three years of water samples. Her reports were economical, rarely longer than four pages, but the numbers were telling: the water leaving the marsh was cleaner every season. By the fourth year the town had dropped its plan for a new treatment plant and had begun to champion the marsh as a model for neighboring towns.

**Question 1:** As it is used in the passage, "reservations" most nearly means:

**Question 2:** As it is used in the passage, "economical" most nearly means:

**Question 3:** As it is used in the passage, "telling" most nearly means:

**Question 4:** As it is used in the passage, "champion" most nearly means:

<details>
<summary><b>Show answers</b></summary>

**1. Doubts.** The colleague's dismissive quotation explains them. Not "bookings."

**2. Concise.** The restatement "rarely longer than four pages" defines it. Not "inexpensive."

**3. Revealing or significant.** The colon introduces what the numbers showed. Not "narrating a story."

**4. Promote or defend.** The town now holds the marsh up as a model. Not "a winner of a contest."
</details>
      `
    },
    {
      id: 'act-r5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Vocabulary questions test **common words in secondary senses**; the most familiar meaning is usually the trap.
- **Cover, predict, match, substitute.**
- Use the clue types: **restatement** (colon, semicolon, dash), **contrast** (although, but, anything but), **example**, **cause/effect**, and the **overall situation**.
- Check that the meaning fits the **kind of noun** described: a plan, a person, a budget, a piece of evidence.
- Watch for **sound-alike words** (complimentary / complementary) and **part-of-speech** shifts (a *novel* approach).
      `
    }
  ]
}
