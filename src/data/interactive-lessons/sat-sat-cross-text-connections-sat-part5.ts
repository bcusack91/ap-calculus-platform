export const satCrossTextConnectionsPart5Data = {
  topicSlug: 'sat-cross-text-connections',
  sections: [
    {
      id: 'ctc5-intro',
      type: 'text' as const,
      content: `# Difference and Disagreement Questions

**Part 5 of 7 — Pinning Down Where the Authors Part Ways**

Two stems ask you to locate disagreement precisely:

- "Which choice best describes a **difference** in how the authors of Text 1 and Text 2 view [X]?"
- "Based on the texts, [the author of Text 2] would most likely **challenge** which aspect of [the argument in Text 1]?"

### The Two-Column Method

Before reading the choices, fill in two columns **on the same issue** (the X in the stem):

| Issue: X | Text 1's view | Text 2's view |
|---|---|---|
| (from the stem) | one phrase | one phrase |

Difference answers are built as two halves: *"Text 1 [view], while Text 2 [view]."* **Each half must match its own author.**

### How Difference Choices Go Wrong

| Trap | Example |
|---|---|
| **Swapped halves** | Gives Text 1's view to Text 2 and vice versa |
| **One bad half** | Text 1's half is right; Text 2's half is invented |
| **Different issues** | The halves describe views on two different things, so they aren't a real "difference" |
| **Exaggerated** | Turns "doubts" into "denies," or "some" into "all" |

### "Which Aspect Would Text 2 Challenge?"

Text 1's argument usually has several parts (claims, reasons, evidence). Text 2 typically accepts some and disputes one. List Text 1's parts, then ask which one Text 2's point actually hits. The wrong choices name parts of Text 1 that Text 2 leaves alone or even shares.`,
    },
    {
      id: 'ctc5-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Two Columns** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: Shakespeare's plays were written to be performed, director Ana Lucero insists, and they come fully alive only on a stage, where audiences hear the verse spoken and watch the action unfold.

Text 2: Scholar Peter Hale argues that reading Shakespeare's plays offers something performance cannot: the chance to pause over a line, reread a speech, and notice patterns of imagery that rush past in the theater.

Which choice best describes a difference in how Lucero and Hale view Shakespeare's plays?`,
            options: [
              `Lucero values them most in performance, while Hale sees special value in reading them closely.`,
              `Lucero prefers reading the plays, while Hale prefers watching them performed on a stage.`,
              `Lucero thinks the plays' verse is hard to follow, while Hale thinks it is easy to follow.`,
              `Lucero believes the plays were never meant to be staged, while Hale believes they were.`,
            ],
            correctAnswer: 0,
            explanation: `Lucero says the plays "come fully alive only on a stage," while Hale points to benefits of reading that performance cannot give. The reading-versus-watching choice swaps the two. Neither discusses whether the verse is easy to follow, and Lucero says the plays were written to be performed.`,
          },
          {
            question: `Text 1: Reintroducing wolves to Yellowstone National Park in 1995 set off a chain of effects, ecologist William Ripple and colleagues have argued: the wolves reduced browsing by elk, allowing willows and aspens to recover along streams.

Text 2: Other ecologists, including Matthew Kauffman, have found that aspen recovery has been patchy and slower than such accounts suggest. They argue that elk numbers declined for several reasons, including drought and hunting by people, so the wolves' role is hard to isolate.

Which choice best describes a difference in how the ecologists in Text 1 and Text 2 view the recovery of trees along Yellowstone's streams?`,
            options: [
              `Text 1 says the trees have not recovered at all, while Text 2 says they recovered quickly after 1995.`,
              `Text 1 blames drought for the recovery, while Text 2 credits the reintroduction of wolves for it.`,
              `Text 1 credits wolves with the recovery, while Text 2 says the wolves' role is hard to pin down.`,
              `Text 1 says elk numbers rose after 1995, while Text 2 says elk numbers stayed the same over time.`,
            ],
            correctAnswer: 2,
            explanation: `Ripple's group credits the wolves with letting trees recover, while Text 2 says recovery is patchy and elk declined for several reasons, making the wolves' role hard to isolate. Text 1 says the trees recovered, and Text 2 calls the recovery slow. The drought-versus-wolves choice swaps the texts and misdescribes both, and neither text says elk numbers rose or held steady.`,
          },
          {
            question: `Text 1: Many companies now use personality tests in hiring, and consultant Rachel Moss defends the practice. The tests, she argues, are cheap, quick, and objective, since every applicant answers the same questions.

Text 2: Psychologist Ian Ford points out that applicants can easily guess which answers employers want and adjust their responses. A test that every applicant takes in the same form, he notes, is not objective if applicants can shape the results.

Based on the texts, Ford would most likely challenge which aspect of Moss's defense in Text 1?`,
            options: [
              `Her claim that the tests are objective because the questions are the same`,
              `Her claim that the tests are cheap for the companies that use them in hiring`,
              `Her claim that the tests are quick for applicants to finish and for companies to score`,
              `Her observation that many companies now use personality tests when they hire`,
            ],
            correctAnswer: 0,
            explanation: `Ford's point targets objectivity: identical questions don't make a test objective if applicants can steer their answers. He says nothing about speed or cost, and he does not dispute that many companies use the tests.`,
          },
        ],
      },
    },
    {
      id: 'ctc5-text2',
      type: 'text' as const,
      content: `## Worked Example: Same Issue, Two Views

> **Text 1:** Many linguists predict that English, as the dominant language of business and the internet, will gradually crowd out smaller languages, as younger speakers switch to the language that offers the most opportunity.
>
> **Text 2:** Linguist Sara Haddad notes that the internet has also given speakers of small languages new ways to connect: online dictionaries, video channels, and messaging groups now help scattered communities keep their languages in daily use.

**Question:** Which choice best describes a difference in how the authors view the internet's effect on smaller languages?

| Issue: internet's effect on small languages | Text 1 | Text 2 |
|---|---|---|
| | A force that helps English crowd them out | A tool that helps communities keep them alive |

| Choice | Verdict |
|---|---|
| Text 1 links the internet to the spread of a dominant language, while Text 2 notes ways it helps preserve smaller ones. | ✅ Each half matches its author |
| Text 1 sees the internet as a way to preserve small languages, while Text 2 sees it as a threat. | ❌ Swapped |
| Text 1 says English is the language of business, while Text 2 says online dictionaries are popular. | ❌ Different issues; not a disagreement |
| Text 1 claims all small languages will vanish within a decade, while Text 2 says none will. | ❌ Exaggerated: neither text says "all," "none," or "within a decade" |

**Tip:** Read each half of a difference choice separately and check it against its own text. Then ask whether the two halves are about the same issue.`,
    },
    {
      id: 'ctc5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Precise Disagreements** 🎯',
      exercise: {
        questions: [
          {
            question: `Text 1: The novelist's first book was rejected by eleven publishers, a fact that critic Laura Chen cites as proof that the publishing industry routinely fails to recognize original work.

Text 2: Critic Martin Sauer points out that the version eventually published differed sharply from the one first submitted: the novelist cut a third of the pages and rewrote the ending after reading the rejection letters. The rejections, Sauer suggests, may have improved the book.

Which choice best describes a difference in how Chen and Sauer view the rejections of the novelist's first book?`,
            options: [
              `Chen thinks the rejections were deserved, while Sauer thinks the publishers made a mistake.`,
              `Chen sees them as publishers' failure, while Sauer suggests they may have helped the book.`,
              `Chen says the book was rejected eleven times, while Sauer says it was rejected only once.`,
              `Chen blames the novelist for the rejections, while Sauer blames the publishing industry.`,
            ],
            correctAnswer: 1,
            explanation: `Chen treats the rejections as evidence that publishers fail to recognize original work, while Sauer suggests the rejections pushed the novelist to improve the book. The "deserved" and "blames the novelist" choices give Chen a view she never takes, and Sauer does not dispute the number of rejections.`,
          },
          {
            question: `Text 1: Daylight saving time was adopted partly to save energy, on the theory that later sunsets would reduce the need for electric lighting in the evening.

Text 2: When Indiana adopted daylight saving time statewide in 2006, economists Matthew Kotchen and Laura Grant found that household electricity use rose slightly. Savings on lighting, they concluded, were outweighed by greater use of air conditioning on warm evenings and heating on cool mornings.

Based on the texts, how would Kotchen and Grant (Text 2) most likely respond to the theory described in Text 1?`,
            options: [
              `By agreeing that daylight saving time lowered the total electricity that households used`,
              `By arguing that any lighting savings can be offset by increases in other energy uses`,
              `By claiming that daylight saving time was never intended to save energy in any way`,
              `By suggesting that Indiana households used less air conditioning after the change`,
            ],
            correctAnswer: 1,
            explanation: `Kotchen and Grant accept that lighting use fell but found that heating and cooling rose by more, so total use went up. Their finding contradicts the claim that total use fell. Text 1 says the time change was adopted partly to save energy, and Text 2 reports more air conditioning, not less.`,
          },
          {
            question: `Text 1: Historian Grace Liu argues that the 1918 flu pandemic was deadliest in American cities that delayed closing schools and theaters. Cities such as St. Louis, which banned public gatherings quickly, recorded far lower peak death rates than cities such as Philadelphia, which waited.

Text 2: Epidemiologist Ahmed Karim agrees that early closures lowered peak death rates. But he notes that several cities that closed early and then reopened soon after saw a second wave that pushed their total deaths close to those of slower cities. Timing mattered, he argues, but so did how long the measures lasted.

Based on the texts, how would Karim (Text 2) most likely respond to Liu's argument in Text 1?`,
            options: [
              `By rejecting the claim that St. Louis recorded lower peak death rates than Philadelphia did`,
              `By arguing that closing schools and theaters had no effect on death rates in any city`,
              `By accepting that early action helped but adding that the duration of closures mattered as well`,
              `By claiming that the cities that waited to close public gatherings suffered no second wave`,
            ],
            correctAnswer: 2,
            explanation: `Karim "agrees that early closures lowered peak death rates" but adds that cities reopening too soon lost much of that benefit, so how long closures lasted also mattered. He accepts the St. Louis comparison, he credits closures with lowering peaks, and nothing in Text 2 says the slower cities avoided a second wave.`,
          },
        ],
      },
    },
    {
      id: 'ctc5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Difference Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'In a difference answer, each half must match [its own author|either author|neither author|the question writer]',
          'A choice that gives Text 1\'s view to Text 2 has [swapped the authors|the right relationship|too narrow a scope|the best answer]',
          'Both halves of a difference answer should describe views on [the same issue|two unrelated issues|the authors\' careers|the titles]',
          'If Text 2 accepts part of Text 1 and disputes the rest, Text 2 would challenge [only the part it disputes|all of Text 1|nothing in Text 1|its own claim]',
        ],
        correctAnswers: ['its own author', 'swapped the authors', 'the same issue', 'only the part it disputes'],
        hint1: 'Check each half against its own text.',
        hint2: 'Swapped halves are the most common trap.',
        hint3: 'A real difference is two views of one issue.',
        explanation: 'Each half of a difference answer must match its own author, a swapped choice is wrong, both halves must concern the same issue, and Text 2 challenges only the part of Text 1 it disputes.',
      },
    },
    {
      id: 'ctc5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Rule | Detail |
|---|---|
| Two columns | Text 1's view and Text 2's view of the SAME issue |
| Check each half | Against its own text |
| Traps | Swapped halves, one bad half, different issues, exaggeration |
| "Which aspect" stems | List Text 1's parts; pick the one Text 2's point hits |

*Next: Cross-Text Traps →*`,
    },
  ],
}
