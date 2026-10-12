export const satTextStructurePurposePart2Data = {
  topicSlug: 'sat-text-structure-purpose',
  sections: [
    {
      id: 'tsp2-intro',
      type: 'text' as const,
      content: `# Main Purpose Questions

**Part 2 of 7 — Why Did the Author Write This?**

"Which choice best states the main purpose of the text?" asks for the job of the **whole** text. Every correct answer has two parts:

> **To [verb] + [object]**
> *To explain + what allows a glacier to move unexpectedly fast*

Both parts have to fit.

### Step 1: Find the Center

The center of a short text is usually in one of two places:
- **The pivot** ("But," "Yet," "In fact") — everything after it is the author's real point.
- **The last sentence** — authors often end with the conclusion, the significance, or the takeaway.

### Step 2: Choose the Verb (Strength Matters)

| Weaker ← | | | | → Stronger |
|---|---|---|---|---|
| describe / present | explain | suggest / propose | argue / advocate | refute / reject |

Match the author's actual commitment. A text that reports a study is *describing* or *presenting*; it is not *arguing* unless the author takes a side ("should," "must," "clearly").

### Step 3: Check the Object

The object must be the right **size**:
- **Too narrow:** names one detail ("To point out that honey contains sugar")
- **Too broad:** names a bigger topic than the text covers ("To explain the history of food preservation")
- **Just right:** covers every sentence ("To explain why honey resists spoiling")

### The Four Trap Types

| Trap | Example of how it fails |
|---|---|
| Too strong | "To **argue** that cities **must**..." when the text only reports one city's results |
| Too narrow | Names a supporting detail as if it were the point |
| Wrong object | Right kind of verb, but about something the text only mentions |
| Off the page | Plausible in real life, never said in the text |`,
    },
    {
      id: 'tsp2-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Main Purpose** 🎯',
      exercise: {
        questions: [
          {
            question: `Octopuses can change the color of their skin in a fraction of a second, yet their eyes appear to contain only one kind of light-detecting cell, which in most animals would mean they cannot tell colors apart. Biologists Alana Kim and Robert Fisch have proposed a solution to this puzzle: the octopus's unusual U-shaped pupil may split incoming light into its colors, letting the animal judge color by how sharply an object comes into focus.

Which choice best states the main purpose of the text?`,
            options: [
              `To argue that octopuses see colors more sharply than humans do`,
              `To present a proposed explanation for how octopuses might perceive color`,
              `To describe the speed at which octopuses are able to change their skin color`,
              `To explain why most animals need several kinds of light-detecting cells to see well`,
            ],
            correctAnswer: 1,
            explanation: `The text sets up a puzzle (color-changing animals with apparently color-blind eyes) and then presents Kim and Fisch's proposed solution, so its purpose is to present that explanation. Humans are never compared with octopuses. The speed of color change and the general rule about light-detecting cells are background details that set up the puzzle, so those choices are too narrow.`,
          },
          {
            question: `Grocery stores in Fairview once threw away about two tons of edible food each week. Last year the city council passed an ordinance requiring large stores to donate unsold food that is still safe to eat. Food banks now receive most of that surplus, and the amount of food the stores send to landfills has fallen by nearly 80 percent.

Which choice best states the main purpose of the text?`,
            options: [
              `To urge other cities to pass laws that require grocery stores to donate food`,
              `To explain how food banks decide which donated foods are still safe to eat`,
              `To describe a local law and the effect it has had on food waste`,
              `To criticize grocery stores for throwing away large amounts of edible food`,
            ],
            correctAnswer: 2,
            explanation: `The text reports a problem, the ordinance that addressed it, and the measured result, without urging or criticizing anyone, so its purpose is to describe the law and its effect. Urging other cities is too strong for a text that only reports. Food banks' safety checks are never discussed, and the stores' past waste is reported as background, not criticized.`,
          },
          {
            question: `Many readers know Ada Okonjo only as the author of Harvest Songs, the 1958 novel that made her famous. Few know that she spent the decade before it writing radio plays, more than forty of them, for a station in Lagos. Those plays, recently rediscovered in a station archive, show Okonjo experimenting with the shifting narrators and overlapping dialogue that critics would later praise in her novel.

Which choice best states the main purpose of the text?`,
            options: [
              `To argue that Okonjo's radio plays are better written than her famous novel`,
              `To summarize the plot of the novel that made Okonjo famous in 1958`,
              `To explain how a radio station in Lagos came to preserve its archive`,
              `To call attention to lesser-known work that shaped an author's later writing`,
            ],
            correctAnswer: 3,
            explanation: `The text moves from what readers know (the novel) to what they don't (the radio plays) and ends by linking the plays' techniques to the novel, so it calls attention to overlooked work that shaped her later writing. It never ranks the plays above the novel, never summarizes the novel's plot, and mentions the archive only as the place where the plays were found.`,
          },
        ],
      },
    },
    {
      id: 'tsp2-text2',
      type: 'text' as const,
      content: `## Worked Example: Taking Apart Four Choices

> Honey found in ancient Egyptian tombs is sometimes described as still edible after three thousand years. The claim is roughly true, and the reason is chemistry, not magic. Honey contains so little water and so much sugar that microbes landing in it lose water to the honey and die, and its natural acidity discourages them further.

**Which choice best states the main purpose of the text?**

**Predict first.** Center: "the reason is chemistry." Everything after that explains the chemistry. Prediction: *to explain why honey lasts so long.*

| Choice | Verdict | Why |
|---|---|---|
| To explain why honey can resist spoiling for a very long time | ✅ | Right verb (the text gives reasons) and right object (the whole text is about honey lasting) |
| To argue that honey from tombs is safe and healthy for people to eat today | ❌ Too strong | The text says the claim is "roughly true"; it argues for nothing and never mentions health |
| To describe the burial customs that led Egyptians to place honey in tombs | ❌ Wrong object | Tombs appear only as the setting for the opening claim |
| To point out that honey contains a great deal of sugar | ❌ Too narrow | Sugar is one part of the explanation, not the purpose of the text |

### Choosing the Verb: Quick Tests

| If the author... | The verb is probably... |
|---|---|
| reports what someone found or did, without judging | describe, present, report |
| gives causes or a mechanism ("because," "so," "the reason is") | explain |
| offers a possible answer with hedges ("may," "might," "could") | propose, suggest |
| takes a side ("should," "must," "it is a mistake to") | argue, advocate, criticize |
| corrects a common belief ("Many assume... but") | challenge, correct, complicate |

**Hedges matter.** If the author says a finding "suggests" or "may," a choice that says the text *proves* or *demonstrates* the point is too strong.`,
    },
    {
      id: 'tsp2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Verb and Scope** 🎯',
      exercise: {
        questions: [
          {
            question: `Economists have long held that people save too little for retirement because they are impatient. But a study by Teresa Quan found that when workers were automatically enrolled in a savings plan, with the option to leave it, almost none left, even workers who described themselves as impatient. Quan suggests that many people fail to save not because they prefer spending now but because signing up requires a decision they keep postponing.

Which choice best states the main purpose of the text?`,
            options: [
              `To present research suggesting that a common explanation for low saving is incomplete`,
              `To argue that employers should be required by law to enroll every worker in a savings plan`,
              `To describe how retirement savings plans have changed over the past several decades`,
              `To show that workers who call themselves impatient save less than other workers do`,
            ],
            correctAnswer: 0,
            explanation: `The text states a long-held explanation (impatience), then presents Quan's study, introduced with "But," and her suggestion that procrastination plays a role, so it presents research that complicates the common explanation. Quan "suggests"; no one argues for a legal requirement. The text describes one study, not the history of savings plans, and it says that even impatient workers stayed enrolled, which undercuts the choice about impatient workers saving less.`,
          },
          {
            question: `When the Linwood Library added a "library of things" in 2021, lending out sewing machines, telescopes, and power drills alongside books, some board members worried that the items would be broken or never returned. Three years of records show that fewer than two percent of the items have been lost or damaged, a rate similar to that of the library's books.

Which choice best states the main purpose of the text?`,
            options: [
              `To list objects, such as telescopes and drills, that a library now lends`,
              `To report evidence that eased a concern some had about a library's new lending program`,
              `To argue that libraries should stop lending books and lend only tools instead`,
              `To explain why some members of a library board opposed lending power drills`,
            ],
            correctAnswer: 1,
            explanation: `The text raises a worry (items would be broken or lost) and then reports records showing the worry was unfounded, so its purpose is to report evidence that eased the concern. The list of objects is a detail, so that choice is too narrow. Nothing suggests ending book lending, and the board's worry applied to all items, not to drills in particular.`,
          },
          {
            question: `Painted on a cave wall on the Indonesian island of Sulawesi, an image of a wild pig has been dated to at least 45,000 years ago, making it one of the oldest known figurative paintings. The date matters beyond the record books. For decades, many scholars assumed that representational art first flourished in Europe; a painting this old, this far from Europe, makes that assumption much harder to defend.

Which choice best states the main purpose of the text?`,
            options: [
              `To describe the methods researchers used to date a painting found in Indonesia`,
              `To argue that representational art was invented in Sulawesi and spread to Europe`,
              `To compare the cave paintings of Sulawesi with the cave paintings found in Europe`,
              `To explain why an old cave painting matters for a debate about art's origins`,
            ],
            correctAnswer: 3,
            explanation: `"The date matters beyond the record books" signals the point: the painting's age weakens the assumption that representational art began in Europe, so the text explains the painting's significance for that debate. The text says the assumption is "harder to defend," not that art began in Sulawesi, so the "invented in Sulawesi" choice is too strong. No dating methods are described and no European paintings are compared.`,
          },
        ],
      },
    },
    {
      id: 'tsp2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Main Purpose Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A main purpose answer must cover [the whole text|only the first sentence|only the last sentence|the most surprising fact]',
          'If the author only reports research without taking a side, the verb should be closer to [describe|argue|criticize|refute]',
          'A choice that names one supporting detail as the purpose is [too narrow|too strong|correct|too broad]',
          '"To argue that every city should..." for a text that describes one city\'s program is [too strong|too narrow|correct|a summary]',
        ],
        correctAnswers: ['the whole text', 'describe', 'too narrow', 'too strong'],
        hint1: 'Purpose = verb + object, and the object must cover everything.',
        hint2: 'Match the author\'s level of commitment.',
        hint3: 'One detail is never the purpose of the whole text.',
        explanation: 'A purpose covers the whole text. Reporting without judging calls for "describe" or "present." A single detail is too narrow. Turning one city\'s results into a demand for every city is too strong.',
      },
    },
    {
      id: 'tsp2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Step | Rule |
|---|---|
| Find the center | The pivot or the last sentence |
| Choose the verb | describe < explain < propose < argue < refute; match the author's commitment |
| Check the object | Must cover the whole text: not one detail, not a bigger topic |
| Hedges | "suggests," "may" → the answer cannot say "proves" |
| Traps | Too strong, too narrow, wrong object, off the page |

*Next: Overall Structure Questions →*`,
    },
  ],
}
