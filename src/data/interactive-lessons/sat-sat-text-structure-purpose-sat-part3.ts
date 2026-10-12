export const satTextStructurePurposePart3Data = {
  topicSlug: 'sat-text-structure-purpose',
  sections: [
    {
      id: 'tsp3-intro',
      type: 'text' as const,
      content: `# Overall Structure Questions

**Part 3 of 7 — Mapping the Order of Moves**

"Which choice best describes the overall structure of the text?" asks you to match the **sequence** of the author's moves. The answer choices are written as two or three beats:

> *It describes a long-held assumption and then presents findings that complicate it.*

### Common Structures

| Template | Typical signals | Example beats |
|---|---|---|
| Claim → support | "for example," data, a study | states a claim, then gives evidence |
| Common view → challenge | "Many assume... But" | presents a view, then complicates or rejects it |
| Problem → solution | "To address this," "one option" | identifies a problem, then describes a response |
| Observation → explanation | "The reason," "because" | describes something, then explains its cause |
| Puzzle → hypothesis → test | "wondered whether," "To test" | raises a question, proposes an answer, describes a test |
| General → specific | "One striking case" | states a pattern, then gives an example |
| Past → present | dates, "today," "now" | describes an earlier situation, then a change |

### The Matching Rules

1. **Every beat must happen.** If a choice says the text "proposes a solution" and no solution appears, the choice is wrong even if its other beats fit.
2. **The order must match.** "Presents evidence, then states the view it supports" is wrong for a text that states the view first.
3. **The relationship must match.** "Then *confirms* it" and "then *complicates* it" describe opposite texts.

### Fast Mapping

Give each sentence a label (Part 1), then **compress** the labels into two or three beats. Sentences that do the same job merge into one beat: two sentences of evidence are one "presents evidence" beat.`,
    },
    {
      id: 'tsp3-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Overall Structure** 🎯',
      exercise: {
        questions: [
          {
            question: `Sea otters often float on their backs and use rocks to crack open clams and sea urchins. Researchers have long wondered whether this tool use is learned or inborn. A recent study offers a clue: otters raised in captivity without contact with adult otters still began using rocks, though they did so later and less skillfully than wild otters.

Which choice best describes the overall structure of the text?`,
            options: [
              `It raises a question about an animal, reports that the question cannot be answered, and suggests why.`,
              `It compares the behavior of two species and then explains which of them uses tools more skillfully.`,
              `It describes a behavior, explains its cause, and then argues that the behavior should be studied further.`,
              `It describes a behavior, raises a question about it, and then reports evidence relevant to the question.`,
            ],
            correctAnswer: 3,
            explanation: `Sentence 1 describes the rock-cracking behavior, sentence 2 raises the learned-or-inborn question, and sentence 3 reports a study that bears on it. The text does not say the question cannot be answered (the study "offers a clue"), it discusses only one species, and it calls for no further study.`,
          },
          {
            question: `In the 1950s, many towns in the American Midwest replaced their brick streets with asphalt, which was cheaper to lay and smoother to drive on. Today a few of those towns are tearing the asphalt back up. Brick streets, planners have found, last far longer than asphalt with little upkeep, and their rough surface slows traffic in neighborhoods where children play.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes a past change, notes a recent reversal of that change, and then gives reasons for the reversal.`,
              `It explains why asphalt is cheaper than brick and then predicts that more towns will choose asphalt in the future.`,
              `It describes the advantages of brick streets and then explains why towns in the 1950s chose to keep them.`,
              `It presents a debate between planners and residents and then describes how the debate was finally settled.`,
            ],
            correctAnswer: 0,
            explanation: `The text moves from the 1950s switch to asphalt, to today's reversal ("tearing the asphalt back up"), to the planners' reasons (durability and slower traffic). It predicts nothing about asphalt's future, says the towns replaced brick in the 1950s rather than keeping it, and describes no debate between groups.`,
          },
          {
            question: `Pianist Lena Moravec is often praised for the speed of her playing. That praise, while deserved, misses what is most original in her recordings of Chopin's nocturnes. Again and again, she lets a single note hang for a fraction of a second longer than the score suggests, so that the melody seems to hesitate before going on. It is these pauses, not her speed, that make her performances unlike anyone else's.

Which choice best describes the overall structure of the text?`,
            options: [
              `It praises a pianist's speed and then gives examples of the pieces in which her speed is most impressive.`,
              `It grants a common view of a pianist and then describes a quality that the view overlooks.`,
              `It criticizes a pianist's recordings and then explains how she could improve her performances of Chopin.`,
              `It compares two pianists' approaches to Chopin and then argues that one of the two approaches is better.`,
            ],
            correctAnswer: 1,
            explanation: `The text grants the common praise ("while deserved"), says it "misses" something, and then describes the pauses that the praise overlooks. The speed is acknowledged, not illustrated with examples; the author admires the recordings rather than criticizing them; and only one pianist is discussed.`,
          },
        ],
      },
    },
    {
      id: 'tsp3-text2',
      type: 'text' as const,
      content: `## Worked Example: Compressing Labels into Beats

> (1) Most maps of medieval trade routes show goods moving along roads and rivers. (2) Such maps leave out one of the busiest routes of all: the frozen surface of rivers in winter. (3) Records from one northern trading town describe sledges carrying furs and grain hundreds of kilometers over river ice each January. (4) Historians who ignore the seasons, the records suggest, may badly underestimate how much trade took place.

| Sentence | Label |
|---|---|
| 1 | Common picture |
| 2 | What the picture leaves out (pivot) |
| 3 | Evidence for the omission |
| 4 | Implication |

**Compressed:** *describes a common picture → identifies an omission and supports it with evidence → draws an implication.*

### Why Order Matters

Two choices can contain the same beats in a different order:

| Choice | Verdict |
|---|---|
| "It describes a common view of trade routes, identifies something that view leaves out, and considers what follows from the omission." | ✅ Same beats, same order |
| "It presents evidence about winter travel and then describes the common view that the evidence supports." | ❌ Wrong order, and "supports" reverses the relationship |
| "It describes a common view of trade routes and then explains why historians have abandoned it." | ❌ The text never says historians abandoned the view |

### Relationship Words to Check

| If the later beat... | The choice should say... |
|---|---|
| agrees with and adds to the earlier one | supports, extends, illustrates |
| partly disagrees | complicates, qualifies, refines |
| fully disagrees | rejects, refutes, overturns |
| answers it | explains, resolves, addresses |`,
    },
    {
      id: 'tsp3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Every Beat, In Order** 🎯',
      exercise: {
        questions: [
          {
            question: `Desert locusts usually live alone, avoiding one another. When crowded, however, they change color, grow stronger flight muscles, and begin to swarm. Biologist Hana Sato suspected that touch, not sight or smell, triggers the change. To test the idea, she brushed the hind legs of isolated locusts for several hours; those locusts began to behave like swarming locusts, while locusts that could only see or smell other locusts did not.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes a transformation, presents a hypothesis about its trigger, and then describes an experiment supporting it.`,
              `It describes a transformation, explains why it harms crops, and then proposes a method for preventing it entirely.`,
              `It presents a hypothesis about locust swarms, describes an experiment that disproved it, and then offers a new one.`,
              `It compares solitary insects with swarming insects and then argues that swarming insects are more successful.`,
            ],
            correctAnswer: 0,
            explanation: `Sentences 1 and 2 describe the change from solitary to swarming, sentence 3 gives Sato's hypothesis (touch is the trigger), and sentence 4 describes the brushing experiment whose results support it. Crops and prevention never come up, the experiment supported rather than disproved the hypothesis, and no claim about success is made.`,
          },
          {
            question: `For centuries, sailors navigated by the stars, and the skill is often thought to be lost to modern travelers. In the Pacific, however, navigators trained in traditional methods still guide canoes across thousands of kilometers of open ocean by reading star paths, ocean swells, and the flight of seabirds. In 1976, one such navigator guided a double-hulled canoe from Hawaii to Tahiti without instruments.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes a historical skill, explains how it was lost, and then argues that it should be taught in schools again.`,
              `It compares two methods of navigation and then explains why the older method is more accurate than the newer one.`,
              `It notes a widely held belief, presents a tradition that contradicts it, and then gives one notable example.`,
              `It describes a voyage from Hawaii to Tahiti and then explains why navigators began using instruments after 1976.`,
            ],
            correctAnswer: 2,
            explanation: `Sentence 1 gives the belief that star navigation is lost, sentence 2 ("however") presents Pacific navigators who still practice it, and sentence 3 offers the 1976 voyage as an example. The text says the skill survives rather than explaining how it was lost, makes no accuracy comparison, and presents the voyage last, not first.`,
          },
          {
            question: `Tomato growers have long noticed that fruit from some vines tastes blander than fruit from others grown in the same field. Plant geneticist Arturo Pena traced the difference to a single gene that affects how much sugar the fruit stores. Varieties bred for a uniform red color, he found, often carry a version of the gene that lowers sugar storage, which may explain why many supermarket tomatoes taste flat.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes an observation, rejects one explanation for it, and then calls for further research.`,
              `It describes an observation, identifies its cause, and then connects that cause to a broader pattern.`,
              `It explains how tomatoes are bred for color and then argues that growers should stop the practice.`,
              `It compares two tomato varieties grown side by side in one field and then describes how supermarkets sell each.`,
            ],
            correctAnswer: 1,
            explanation: `The text begins with growers' observation (some fruit is blander), identifies the cause (a gene affecting sugar storage), and then links that cause to a wider pattern (bland supermarket tomatoes bred for color). No explanation is rejected and no research is called for, the author never tells growers to stop anything, and supermarket sales are not described.`,
          },
        ],
      },
    },
    {
      id: 'tsp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Structure Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A structure answer must match the text\'s moves in the [same order|reverse order|order of importance|order of length]',
          'A choice that includes a step the text never takes is [wrong even if its other steps fit|correct if most steps fit|usually the best choice|partly correct]',
          '"Many assume X. However, a study found Y." follows the pattern [view, then challenge|problem, then solution|claim, then example|cause, then effect]',
          'To map structure quickly, give each sentence [a one- to three-word label|a full summary|a vocabulary check|a score from 1 to 10]',
        ],
        correctAnswers: ['same order', 'wrong even if its other steps fit', 'view, then challenge', 'a one- to three-word label'],
        hint1: 'Order is part of structure.',
        hint2: 'One invented beat makes the whole choice wrong.',
        hint3: '"However" after a common belief = challenge.',
        explanation: 'Structure answers must match the moves in order, with no invented beats. "Many assume... However" is the view-then-challenge pattern. Short labels make the map quick to build.',
      },
    },
    {
      id: 'tsp3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Rule | Detail |
|---|---|
| Every beat | A choice with one invented beat is wrong |
| Same order | Right beats in the wrong order is still wrong |
| Same relationship | Supports vs. complicates vs. rejects |
| Compress | Merge sentences that do the same job into one beat |
| Templates | View → challenge, problem → solution, observation → explanation, puzzle → hypothesis → test |

*Next: The Function of a Sentence →*`,
    },
  ],
}
