export const actReadSciTipsPart4Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p4-intro',
      type: 'text' as const,
      content: `
# 🧗 Managing Difficult Passages

**Part 4 of 7 — Competing Explanations, Dense Prose, and Multiple Figures**

Some passages feel hard before you answer a single question. Usually the difficulty comes from one of three sources, and each has a fix.

| What makes it hard | Where you see it | The fix |
|---|---|---|
| Two or more competing explanations | Science Conflicting Viewpoints; Reading passages that weigh theories | Summarize each view in one line; list agreements and disagreements |
| Dense, technical prose | Reading natural science | Label terms, map paragraph roles, read questions for direction |
| Several figures at once | Science Data Representation and Research Summaries | Find the shared variable that links the figures |

## Conflicting Viewpoints: The Four-Step Method

A Conflicting Viewpoints passage gives a short introduction (facts everyone accepts), then two or more explanations from Scientist 1, Scientist 2, Student A, Hypothesis 1, and so on. **The introduction is common ground.** The viewpoints are claims.

1. **Read the introduction** for the shared facts and the puzzle.
2. **Write a one-line summary of each view** in your own words: "S1: warm water, less oxygen. S2: mussels eat the food."
3. **List agreement and disagreement.** What do both accept? What exactly do they dispute: the cause, the timing, the mechanism?
4. **Predict reactions to new evidence.** For each view, ask: "If this were true, would this person be pleased or worried?"

## Common Question Types

| Question | How to answer |
|---|---|
| "Scientist 1 would most likely agree that ..." | Match only what that view states or clearly implies |
| "Both scientists would agree that ..." | Look for a detail in **both** summaries, often from the introduction |
| "The viewpoints differ mainly about ..." | Name the single point of dispute: cause, process, timing |
| "Which finding supports Scientist 2 but NOT Scientist 1?" | It must fit S2's claim **and** cut against S1's |
| "These results support / weaken ..." | Check the results against each view's prediction separately |

**"Support A but NOT B" needs two checks.** A finding that fits both views, or fits neither, is wrong. A finding that fits A and directly undercuts B's mechanism is right.

**Opposite predictions cannot both be supported.** When two views predict opposite outcomes for the same test, a result that supports one must weaken the other.

## Reading Passages That Weigh Explanations

Natural-science Reading passages often do the same thing in essay form: "Some researchers argue X. Others point to Y. New evidence complicates both." Track three things:

- **Who holds each view** (named researchers, "a competing camp," "most geologists").
- **The evidence each side cites.** Questions ask which detail supports which side.
- **The author's lean.** Words like *more persuasive*, *remains the stronger explanation*, or *fails to account for* reveal it. If the author stays neutral, the correct answer will say so.

## Dense Prose: Tactics That Save Time

- **Label, don't decode.** Call "phosphoenolpyruvate carboxylase" *the enzyme* and move on. A question will tell you if the name matters.
- **Read the first and last sentence of each paragraph closely,** and skim long lists of examples. Return when a question sends you there.
- **Use the question to aim your rereading.** A line or paragraph reference narrows the search; key nouns in the stem tell you where to look.

## Linking Two Figures Through a Shared Variable

Some questions need two figures. One table connects condition A to variable X; another connects X to result Y. **X is the bridge.**

1. Use the first figure to find the value of the bridge variable.
2. Carry that value to the second figure.
3. If it falls between two rows, **interpolate**: take the value halfway (or proportionally) between the neighboring results.

**Example:** Table 1 says a field's soil was 17 °C at noon. Table 2 gives a beetle's activity as 26 moves per minute at 16 °C and 34 at 18 °C. At noon the activity is about **30 moves per minute**, halfway between.
      `
    },
    {
      id: 'act-rsci-p4-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Conflicting viewpoints</b></summary>

> **Introduction:** A small island's lizards have longer back legs today than lizards on the mainland where the population originated about 60 years ago.
>
> **Scientist 1:** The island has few trees and many open rocks. Lizards with longer legs run faster on open ground and escape predators, so over generations, long-legged lizards left more offspring.
>
> **Scientist 2:** The longer legs do not reflect inherited differences at all. Young lizards that grow up running on rocks simply develop longer legs, just as muscles grow with use. Offspring raised on the mainland would have normal legs.

**Question:** Which finding would support Scientist 2 but NOT Scientist 1?

**Solution:**
1. S1 says legs changed because long-legged lizards **reproduced more** (an inherited change). S2 says legs grow longer **with use** during each lizard's life.
2. A finding that fits S2 only: **island lizard eggs hatched and raised on the mainland grew normal-length legs.** If the trait were inherited, these lizards should keep long legs, so this undercuts S1.
3. A finding like "long-legged lizards escape predators faster" supports S1, not S2. "The island has many rocks" is in both accounts, so it supports neither over the other.
</details>

<details>
<summary><b>Example 2: Linking two tables</b></summary>

**Table 1: Altitude and air temperature on a mountain trail**

| Altitude (m) | Air temperature (°C) |
|---|---|
| 1,000 | 18 |
| 1,500 | 15 |
| 2,000 | 12 |

**Table 2: Air temperature and a beetle's walking speed**

| Air temperature (°C) | Walking speed (cm/s) |
|---|---|
| 12 | 2.0 |
| 14 | 2.6 |
| 16 | 3.2 |
| 18 | 3.8 |

**Question:** About how fast would the beetle walk at 1,500 m?

**Solution:**
1. Table 1: 1,500 m → 15 °C. Temperature is the bridge.
2. Table 2: 15 °C is halfway between 14 °C (2.6 cm/s) and 16 °C (3.2 cm/s).
3. Halfway between 2.6 and 3.2 is **2.9 cm/s**. Trap: reading "15" as a speed, or using 1,500 to look up Table 2 directly.
</details>
      `
    },
    {
      id: 'act-rsci-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Conflicting Viewpoints** 🎯

> **Introduction:** In a mountain valley, the trees on south-facing slopes begin dropping their leaves about two weeks earlier in autumn than the same species on north-facing slopes. South-facing slopes in this valley receive more direct sunlight.
>
> **Hypothesis 1:** South-facing soils dry out faster in late summer. Water-stressed trees shed their leaves early to reduce water loss through the leaves.
>
> **Hypothesis 2:** Soil moisture plays no role. The extra sunlight warms the leaves on south-facing slopes, speeding up the aging of leaf tissue, so leaves wear out and fall sooner.
      `,
      exercise: {
        questions: [
          {
            question: `The two hypotheses disagree mainly about:`,
            options: [
              `whether south-facing slopes get more sunlight`,
              `whether leaves fall earlier on south-facing slopes`,
              `why the leaves on south-facing slopes fall earlier`,
              `which tree species grow in the mountain valley`
            ],
            correctAnswer: 2,
            explanation: `Hypothesis 1 blames dry soil and Hypothesis 2 blames leaf warming, so they dispute the cause. The extra sunlight and the earlier leaf drop are stated in the introduction, which both accept. Neither hypothesis discusses which species grow there.`
          },
          {
            question: `Both hypotheses would most likely agree that:`,
            options: [
              `south-facing slopes receive more direct sunlight`,
              `south-facing soils dry out faster`,
              `warm leaves age faster than cool leaves`,
              `trees drop leaves early to save water`
            ],
            correctAnswer: 0,
            explanation: `The extra sunlight is a fact from the introduction, and Hypothesis 2 even builds on it, so both accept it. Drier soil and saving water belong only to Hypothesis 1, and Hypothesis 2 says soil moisture plays no role. Faster aging of warm leaves is the core of Hypothesis 2 alone.`
          },
          {
            question: `Researchers watered trees on a south-facing slope all summer so their soil stayed as moist as north-facing soil. The watered trees still dropped their leaves two weeks early. This result:`,
            options: [
              `supports Hypothesis 1 and weakens Hypothesis 2`,
              `weakens Hypothesis 1, fits Hypothesis 2`,
              `supports both of the hypotheses about equally`,
              `has no bearing on either of the hypotheses`
            ],
            correctAnswer: 1,
            explanation: `Hypothesis 1 predicts that moist soil should stop the early leaf drop, so continued early drop weakens it. Hypothesis 2 says moisture plays no role, so the result is exactly what it predicts. Because the two make opposite predictions about watering, the result cannot support both, and it clearly bears on Hypothesis 1's central claim.`
          },
          {
            question: `Which finding would support Hypothesis 1 but NOT Hypothesis 2?`,
            options: [
              `Leaves on south-facing slopes were warmer at midday`,
              `Shaded south-facing branches kept leaves longer`,
              `Leaf tissue aged faster when warmed in a laboratory`,
              `In a rainy summer, the early leaf drop did not occur`
            ],
            correctAnswer: 3,
            explanation: `If extra rain keeps soils moist and the early drop disappears, soil moisture matters, which supports Hypothesis 1 and contradicts Hypothesis 2's claim that moisture plays no role. Warmer leaves, shaded branches holding leaves longer, and faster aging when warmed all fit Hypothesis 2's sunlight-and-warming explanation.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p4-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: A Reading Passage That Weighs Two Views

Read for **who claims what** and **the author's lean**. Give yourself about two minutes.

> When the first fossils of feathered dinosaurs were described, many paleontologists assumed feathers had evolved for flight. That view has lost ground. Several of the feathered species were far too heavy to fly, and their feathers were short and fuzzy rather than broad and stiff. A second camp proposed that early feathers served as insulation, trapping body heat the way down does in modern chicks. Still other researchers point to fossils in which long feathers are arranged in patterns on the arms and tail, and they argue that feathers first worked as display, much as a peacock's tail does today.
>
> The insulation and display ideas need not be rivals. A structure can begin with one job and later take on others; the earliest fuzz may have kept small dinosaurs warm, while later, larger feathers attracted mates. What seems clear is that flight came late. Feathers were not invented for the sky, but the sky eventually found a use for them.

<details>
<summary><b>Check yourself</b></summary>

| Question | Answer and evidence |
|---|---|
| Which view does the author reject? | That feathers first evolved **for flight**: "That view has lost ground"; "flight came late." |
| What evidence counts against the flight view? | Heavy species and short, fuzzy feathers. |
| How does the author treat insulation and display? | As **compatible**: "need not be rivals"; one job can lead to another. |
| What does the last sentence mean? | Flight was a later use of feathers that already existed for other reasons. |
</details>
      `
    },
    {
      id: 'act-rsci-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Feathers and Linked Figures** 📋

Questions 1–2 refer to the feather passage above. Questions 3–4 use the tables below.

**Table 1: Pond water temperature during one evening**

| Time | Water temperature (°C) |
|---|---|
| 19:00 | 23 |
| 21:00 | 21 |
| 23:00 | 17 |

**Table 2: Water temperature and a frog's call rate**

| Water temperature (°C) | Calls per minute |
|---|---|
| 16 | 30 |
| 18 | 38 |
| 20 | 46 |
| 22 | 54 |
| 24 | 62 |
      `,
      exercise: {
        questions: [
          {
            question: `The author's view of the insulation and display explanations is best described as:`,
            options: [
              `both may be correct at different stages`,
              `display is right and insulation is wrong`,
              `both have been disproven by new fossils`,
              `insulation is right and display is wrong`
            ],
            correctAnswer: 0,
            explanation: `The author says the two ideas "need not be rivals" because "a structure can begin with one job and later take on others," so both may be right at different times. The author never picks one over the other, and the only view the author treats as losing ground is the flight explanation, not these two.`
          },
          {
            question: `According to the passage, which detail is evidence against the idea that feathers first evolved for flight?`,
            options: [
              `Long feathers arranged in patterns on the arms and tail`,
              `Down feathers that keep modern chicks warm`,
              `Feathered species too heavy to fly`,
              `The peacock's tail as used in present-day displays`
            ],
            correctAnswer: 2,
            explanation: `The passage says the flight view lost ground because several feathered species "were far too heavy to fly." Patterned arm and tail feathers and the peacock comparison support the display idea, and chick down illustrates the insulation idea; none of them is offered as evidence against flight.`
          },
          {
            question: `Based on both tables, the frog's call rate at 21:00 was most likely about:`,
            options: [`42 calls per minute`, `46 calls per minute`, `50 calls per minute`, `54 calls per minute`],
            correctAnswer: 2,
            explanation: `Table 1 gives 21 °C at 21:00, and in Table 2, 21 °C is halfway between 20 °C (46 calls) and 22 °C (54 calls), so the rate is about 50. Choosing 46 or 54 rounds the temperature to one neighbor instead of interpolating. The value 42 lies below the 20 °C rate, so it would require water cooler than 20 °C.`
          },
          {
            question: `If water temperature kept falling at the rate shown between 21:00 and 23:00, what would the call rate most likely be near 24:00?`,
            options: [
              `About 22 calls per minute`,
              `About 30 calls per minute`,
              `About 38 calls per minute`,
              `About 26 calls per minute`
            ],
            correctAnswer: 3,
            explanation: `From 21:00 to 23:00 the water cooled 4 °C, or 2 °C per hour, so near 24:00 it would be about 15 °C. Table 2 adds 8 calls for every 2 °C, which is 4 calls per degree, so 15 °C gives about 30 − 4 = 26 calls. The value 30 is the rate at 16 °C, one degree too warm. Thirty-eight matches 18 °C, and 22 calls would need about 14 °C.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Diagnose the difficulty:** competing explanations, dense prose, or multiple figures. Each has a method.
- **Conflicting Viewpoints:** the introduction is common ground; summarize each view in one line; list agreement and disagreement.
- **"Support A but NOT B"** must fit A and undercut B. Findings that fit both, or neither, are wrong.
- **Opposite predictions** mean a result cannot support both views.
- **Reading passages that weigh theories:** track who holds each view, what evidence each cites, and the author's lean.
- **Dense prose:** label terms, read topic sentences closely, and let the question aim your rereading.
- **Two figures:** find the shared variable, carry its value across, and interpolate between rows.
      `
    }
  ]
};
