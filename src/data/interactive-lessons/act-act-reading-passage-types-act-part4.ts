export const actPassageTypesPart4Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r4-intro',
      type: 'text' as const,
      content: `
# 🔬 Reading Passage Types

**Part 4 of 7 — Natural Science**

Natural science passages explain **how the physical and living world works**: biology, ecology, chemistry, physics, astronomy, geology, medicine, and technology. They are dense with terms and numbers, which makes many students nervous. The good news: **every term you need is defined or explained in the passage, and every question is answered by the text.** You do not need outside science knowledge, and relying on it can lead you to a choice the passage does not support.

## Read for Structure, Not for Memory

Most natural science passages tell the story of an investigation. Map each paragraph to one of these jobs:

| Stage | What it contains | Typical signal |
|---|---|---|
| Question or puzzle | What scientists wanted to explain | *Why do...? For decades, scientists believed...* |
| Hypothesis | A proposed explanation, not yet proven | *suspected, proposed, hypothesized, one idea held* |
| Method | What was done to test it | *To test the idea, researchers recorded / buried / played...* |
| Results | What was observed or measured | *Birds in noisy parks sang about 300 hertz higher* |
| Conclusion | What the researchers decided the results mean | *concluded, this suggests, must depend on* |
| Limits / next steps | What the study cannot yet show | *caution, cannot settle, plans to repeat* |

A common wrong answer swaps stages: it offers the **hypothesis** as a **result**, or a **result** as the researchers' **conclusion**. Ask what stage the question is about before you look at choices.

## Method Questions: What Does This Step Isolate?

When a question asks why researchers did something ("Playing recorded traffic noise in quiet parks was most likely meant to..."), think about **what the step separates from everything else**.

- Noisy and quiet parks differ in many ways (trees, people, food). Adding **only noise** to quiet parks tests whether **noise itself** changes the birds' songs.
- Leaving a comparison group untreated (unheated trees, untouched plots) gives a **baseline** so the change can be credited to the treatment.

The right answer almost always names the **variable being isolated**. Wrong answers name something the step could not measure, such as the loudness of a highway when the recording was played somewhere else.

## Competing Hypotheses and Predictions

Some passages lay out **two explanations** and a test that tells them apart. Questions then ask: "If hypothesis X were correct, what would researchers expect?" Work it out like a mini proof:

1. State what hypothesis X claims.
2. Ask what that claim predicts in the experiment's conditions.
3. Compare the prediction to what actually happened. A mismatch counts against X.

## Detail Questions: Number, Direction, Group

Detail questions with numbers have three ways to go wrong, and the ACT builds a wrong answer for each:

| Check | Example of a trap |
|---|---|
| The **number** | 300 hertz becomes 30 hertz |
| The **direction** | higher becomes lower; fell becomes rose |
| The **group** | a result about quiet-park birds assigned to noisy-park birds |

Put your finger on the sentence and check all three before you choose.

## "Based On" Questions: Find the Because

When a question asks what a conclusion was **based on**, look for the reasoning word in the passage: *because, since, so, therefore*. In "Because no sunlight reaches that depth, the scientists concluded that these communities must depend on chemical energy," the basis is the **absence of sunlight**, not the heat of the water or the age of the discovery.

## Significance Questions

Many passages open with an old belief ("the deep ocean floor was nearly lifeless") and then describe a discovery. A question asking why the discovery **matters** usually wants **it overturned or revised that belief**. The opening sentence is your setup; the discovery is the payoff.

## Terms Defined in Context

Technical words are usually explained in the same or the next sentence, sometimes after a comma or dash. If a question asks what a term means, **quote the passage's own definition** rather than guessing from what the word sounds like.

## Common Traps

- **Outside knowledge.** A choice that is true in the real world but not stated in the passage.
- **Stage swaps.** A hypothesis presented as a proven result.
- **Number, direction, or group errors** in detail questions.
- **Overclaiming.** "proved," "always," "in every case" when the researchers hedged.
- **The tool for the finding.** The submersible or the heating cable is how scientists learned something, not what they learned.
      `
    },
    {
      id: 'act-r4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

> Why do some trees in the same forest leaf out weeks earlier than others? Ecologist Hana Mori suspected that soil temperature, not air temperature, sets the timing, since roots must thaw before they can pump water to the buds. To test the idea, she buried heating cables beneath twenty young maples, warming their soil by 3°C while leaving the air around them unchanged, and compared them with twenty unheated maples nearby. The heated trees opened their buds an average of nine days earlier. Mori notes that her trees were all young and growing on the same slope, and she plans to repeat the study with older trees on different terrain.

<details>
<summary><b>Example 1: Hypothesis versus result</b></summary>

**Question:** Mori's hypothesis was that:

- heated maples open their buds nine days earlier
- soil temperature controls when trees leaf out
- air temperature controls when trees leaf out
- older trees leaf out later than young trees

**Solution:**
1. "Suspected" marks the hypothesis: soil temperature, not air temperature, sets the timing.
2. The nine-day difference is the **result** of the test, not the hypothesis. That is a stage swap.
3. Air temperature is what she argued against, and older trees are her next study, not her claim. The answer is **soil temperature controls when trees leaf out**.
</details>

<details>
<summary><b>Example 2: Why the method has two parts</b></summary>

**Question:** Mori warmed the soil "while leaving the air around them unchanged" and compared the heated maples with unheated maples nearby. These choices were most likely meant to:

- make sure any earlier budding could be credited to soil warmth
- measure how quickly air warms in early spring
- find out whether maples grow taller in warm soil
- show that young maples are hardier than old ones

**Solution:**
1. Holding air temperature steady keeps it from competing as an explanation.
2. The unheated maples are a **baseline**: same forest, same season, no soil heating.
3. Together they isolate soil temperature. Air warming, height, and hardiness are never measured. The answer is **make sure any earlier budding could be credited to soil warmth**.

**Bonus:** Mori's note that all trees were young and on one slope is a **limitation**. A question asking about it would want "the results may not apply to all trees or settings," not "the results were wrong."
</details>
      `
    },
    {
      id: 'act-r4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Passage A: Method, Result, Limits** 🎯

> Air bubbles trapped in Antarctic ice preserve samples of ancient atmosphere. As snow piles up year after year, it compresses into firn, a granular layer that is no longer snow but not yet solid ice, and finally into ice that seals off tiny pockets of air. By drilling cores more than three kilometers long, scientists have recovered ice that formed roughly 800,000 years ago. They measured the carbon dioxide in each bubble and, separately, the ratio of two forms of oxygen in the ice itself, a ratio that shifts with temperature. The two records rise and fall together across eight glacial cycles. Still, the researchers caution that the cores alone cannot settle which change came first in every cycle, because air in the firn can mix with younger air for centuries before a bubble finally seals.
      `,
      exercise: {
        questions: [
          {
            question: `According to the passage, researchers infer past temperatures from:`,
            options: [
              `the amount of carbon dioxide in each air bubble`,
              `the total length of each ice core they drilled`,
              `the number of glacial cycles found in the ice`,
              `the ratio of two forms of oxygen in the ice`
            ],
            correctAnswer: 3,
            explanation: `The passage says the oxygen ratio "shifts with temperature," so it is the temperature record. Carbon dioxide is the second record, measured separately. Core length tells how far back the ice reaches, and the eight cycles are a result of the comparison, not a thermometer.`
          },
          {
            question: `The information about air in the firn mixing "with younger air for centuries" serves mainly to:`,
            options: [
              `explain how snow is compressed into solid ice`,
              `explain why the order of changes stays uncertain`,
              `show that the oldest ice is younger than reported`,
              `prove that carbon dioxide changed before temperature`
            ],
            correctAnswer: 1,
            explanation: `The sentence begins with the researchers' caution that the cores cannot settle which change came first, and the mixing is the "because." Compression is described earlier and is not this sentence's job. Nothing questions the age of the ice, and the point is that the order cannot be proved either way.`
          },
          {
            question: `The main finding described in the passage is that:`,
            options: [
              `carbon dioxide and temperature rose and fell together`,
              `temperature always changed before carbon dioxide did`,
              `the cores hold air from only a single glacial cycle`,
              `carbon dioxide levels stayed constant for 800,000 years`
            ],
            correctAnswer: 0,
            explanation: `"The two records rise and fall together across eight glacial cycles" is the central result. The researchers say they cannot settle which came first, so "always changed before" overclaims. The cores span eight cycles, not one, and records that rise and fall are not constant.`
          },
          {
            question: `As it is used in the passage, "firn" refers to:`,
            options: [
              `the air trapped inside a sealed bubble`,
              `the drill used to recover deep ice cores`,
              `compacted snow not yet turned fully to ice`,
              `the oldest layer at the bottom of a core`
            ],
            correctAnswer: 2,
            explanation: `The passage defines firn right after the word: "a granular layer that is no longer snow but not yet solid ice." The trapped air forms only after firn becomes ice. The drill is never named, and firn forms near the surface as snow compresses, not at the bottom of a core.`
          }
        ]
      }
    },
    {
      id: 'act-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Stage** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Researchers suspected that the frogs\' color change was triggered by daylight length." This sentence states a …',
            options: ['result', 'hypothesis', 'method', 'limitation']
          },
          {
            label: '"Half the tanks received twelve hours of light; the other half received eight." This sentence describes the …',
            options: ['conclusion', 'hypothesis', 'method', 'result']
          },
          {
            label: '"The team cautions that all the frogs came from a single pond." This sentence states a …',
            options: ['limitation', 'result', 'hypothesis', 'method']
          }
        ],
        correctAnswers: ['hypothesis', 'method', 'limitation'],
        hint1: '"Suspected" signals an idea not yet tested.',
        hint2: 'This is what the researchers did to test the idea.',
        hint3: '"Cautions" introduces something the study cannot show.',
        explanation: '"Suspected" marks a hypothesis. Splitting the tanks into two light conditions is the method. A caution that all the frogs came from one pond is a limitation on how widely the results apply.'
      }
    },
    {
      id: 'act-r4-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice: Passage B** 📋

Give yourself about four minutes.

> Bats hunt at night by echolocation, timing the echoes that return from their own calls to locate insects. Some tiger moths answer an approaching bat with bursts of ultrasonic clicks. Biologists proposed two explanations. Under the warning hypothesis, the clicks advertise that the moth tastes bad, much as bright colors warn daytime predators. Under the jamming hypothesis, the clicks interfere with the bat's ability to read its own echoes. To separate the two, a research team offered bats a clicking moth species that is perfectly edible. If the clicks were only a warning, the bats should have learned within a few encounters that the warning was false and begun catching the moths. Instead, the bats kept missing them night after night, and recordings showed the bats' calls breaking down into irregular patterns as they closed in.
      `,
      exercise: {
        questions: [
          {
            question: `The researchers used a clicking moth species that is edible mainly in order to:`,
            options: [
              `find out whether bats prefer edible moths to bad-tasting ones`,
              `measure how far the clicks can travel through the night air`,
              `tell apart the warning and jamming explanations`,
              `teach the bats to hunt moths without echolocation`
            ],
            correctAnswer: 2,
            explanation: `The passage says the choice was made "to separate the two" hypotheses: an edible moth makes any warning false, so only jamming could keep bats missing it. Taste preference was not the question, and no measurement of how far clicks travel is described. The bats were still echolocating; that is what the recordings captured.`
          },
          {
            question: `If the warning hypothesis alone were correct, bats that repeatedly met the edible clicking moths would be expected to:`,
            options: [
              `learn to ignore the clicks and start catching the moths`,
              `avoid the moths permanently after a single encounter`,
              `stop using echolocation whenever moths were nearby`,
              `produce clicks of their own to warn other bats away`
            ],
            correctAnswer: 0,
            explanation: `The passage states the prediction: the bats "should have learned within a few encounters that the warning was false and begun catching the moths." Permanent avoidance is the opposite of learning that the warning is false. Neither hypothesis predicts bats abandoning echolocation or clicking to warn other bats.`
          },
          {
            question: `Which observation from the passage most directly supports the jamming hypothesis?`,
            options: [
              `Tiger moths click only when a bat comes near`,
              `Bright colors warn daytime predators away`,
              `Some tiger moths taste bad to predators`,
              `Bats' calls broke down near clicking moths`
            ],
            correctAnswer: 3,
            explanation: `Jamming means the clicks disrupt the bats' echolocation, and the recordings showed the bats' calls breaking down as they closed in. Clicking when a bat approaches fits both hypotheses equally. Bright colors are an analogy for the warning idea, and bad taste is the warning hypothesis itself.`
          },
          {
            question: `According to the passage, bats locate insects by:`,
            options: [
              `listening for the beating of the insects' wings`,
              `timing echoes that return from their own calls`,
              `detecting the heat given off by flying insects`,
              `watching for movement against the night sky`
            ],
            correctAnswer: 1,
            explanation: `The first sentence defines echolocation as "timing the echoes that return from their own calls." Wing sounds, body heat, and vision may sound plausible from outside knowledge, but the passage never mentions them, so they are unsupported.`
          }
        ]
      }
    },
    {
      id: 'act-r4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Natural science = read for structure.** Label question, hypothesis, method, results, conclusion, and limits.
- **Everything you need is in the passage.** Use the passage's definitions; outside knowledge leads to unsupported choices.
- **Method questions ask what a step isolates.** Untreated comparison groups give a baseline; adding one factor tests that factor alone.
- **Competing hypotheses:** state what each predicts, then compare with what happened.
- **Detail questions:** check the number, the direction, and the group.
- **Conclusions rest on a "because."** Significance questions usually point back to the old belief the discovery overturned.
      `
    }
  ]
}
