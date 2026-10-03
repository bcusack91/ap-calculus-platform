export const actScienceReasonPart6Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Conflicting Viewpoints

**Part 6 of 7 — Comparing Hypotheses, Predictions, Evidence, and Common Ground**

## What the Passage Looks Like

A Conflicting Viewpoints passage opens with a short introduction describing something that needs explaining, sometimes with a table of facts everyone accepts. Then two or more people explain it differently: "Scientist 1" and "Scientist 2," "Student 1, 2, and 3," or "Hypothesis 1 and 2." Each viewpoint gives a **claim**, usually a **mechanism** (how it works), and sometimes a **prediction** or a piece of evidence.

This passage type has more reading and fewer numbers than the others. The questions test whether you can keep the viewpoints straight and reason about what each one would expect.

**Key rule:** you are never asked which viewpoint is true in the real world. Answer from what **each viewpoint says**, even if one of them sounds wrong to you.

## A Four-Step Strategy

1. **Read the introduction closely.** It states the facts all viewpoints accept and defines the terms.
2. **Read Viewpoint 1 and map it** in a few words: claim, cause, prediction. If you like, answer the questions that ask only about Viewpoint 1 before reading further.
3. **Read Viewpoint 2 and map it** the same way, then answer its questions.
4. **Answer the comparison questions** last: agree, differ, supports one but not the other.

| | Student 1 | Student 2 |
|---|---|---|
| Claim | Island songbirds declined because of invasive rats | Island songbirds declined because of a drought |
| Mechanism | Rats eat eggs and chicks in the nests | Less rain → fewer insects → chicks starve |
| Predicts | Removing rats lets the birds recover; nests show egg loss | Bird numbers track rainfall; chicks are underweight |
| Shared ground | The bird population fell, and fewer chicks survived to adulthood | (same) |

## Question Types and How to Answer Them

| Question asks... | How to answer |
|---|---|
| What does Viewpoint X claim or assume? | Use **only** X's paragraph |
| Which finding **supports** X? | The finding matches what X predicts |
| Which finding **weakens** X? | The finding contradicts what X predicts or claims |
| Supports X **but not** Y | The finding must fit X **and** contradict Y (or be something Y's account cannot explain) |
| On which point do X and Y **agree**? | The statement must appear in, or follow from, **both** viewpoints |
| On which point do they **differ**? | The cause or mechanism where they part ways |
| What would X **predict** for a new situation? | Apply X's mechanism to the new case |
| How many viewpoints are consistent with a result? | Test the result against each viewpoint one at a time |

## Finding Common Ground

Viewpoints often share an **outcome** or a middle step but disagree about the **cause**. If one hypothesis says a river's salmon declined because a new dam blocks adults from their upstream spawning grounds, and another says warmer river water kills many of the eggs before they hatch, both agree that **fewer young salmon are being produced**. A detail that appears in only one viewpoint, such as the dam or the warming, is **not** shared ground.

## Judging Evidence

| If a finding... | Then it... |
|---|---|
| matches a prediction only Viewpoint 1 makes | supports 1 more than 2 |
| contradicts a claim of Viewpoint 2 | weakens 2 |
| fits both viewpoints equally (their shared ground) | does not help choose between them |
| concerns something neither viewpoint addresses | is irrelevant to both |

## Data Inside Conflicting Viewpoints Passages

Many passages include a table in the introduction. Every viewpoint must be **consistent** with those shared data, so the data alone often cannot decide between them. The decisive evidence is usually a **new** finding described in a question. All the data skills from Parts 3 to 5 still apply: read trends carefully, keep to the tested range, and check which variable was changed.

## The Most Common Traps

- **Swapping viewpoints:** choosing a claim that belongs to the other scientist. Recheck your map.
- **"Supports both" when only one predicts it:** if only one viewpoint expects the result, it favors that one.
- **Outside knowledge:** picking the viewpoint you believe is true instead of the one the finding supports.
- **Partial agreement:** a statement that matches one viewpoint and is merely not contradicted by the other is not something they both claim.

**ACT Tip:** For "supports X but not Y," check both halves. Many wrong choices support X but also fit Y, which makes them useless for telling the viewpoints apart.
      `
    },
    {
      id: 'act-s6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Agreement and decisive evidence (two students)</b></summary>

**Passage:** The population of a songbird on a small island fell by half over 10 years.

**Student 1:** Rats that arrived on supply boats eat the eggs and chicks. The rats are the main cause of the decline.

**Student 2:** Rainfall on the island has dropped during the 10 years. With less rain, there are fewer insects, so many chicks starve before leaving the nest.

**Question 1:** Both students would most likely agree that:
- A. rats eat songbird eggs.
- B. fewer chicks have survived to adulthood.
- C. rainfall on the island has decreased.
- D. insects are the birds' main food.

**Question 2:** Which finding would support Student 1 but NOT Student 2?
- A. The bird population has fallen.
- B. Chicks in the remaining nests weigh less than chicks did 10 years ago.
- C. On a nearby island with no rats but the same drop in rainfall, the songbird population stayed steady.
- D. Rainfall dropped by 30% during the decade.

**Solution:**
1. **Q1:** Both explanations end with fewer chicks surviving; they differ on why. A belongs only to Student 1; C and D belong only to Student 2. **Answer: B**
2. **Q2:** Choice C shows the same drought with no rats and no decline, which fits Student 1 and contradicts Student 2. A fits both. B and D support Student 2. **Answer: C** ✓
</details>

<details>
<summary><b>Example 2: Three viewpoints and one result</b></summary>

**Passage:** A burning candle is covered with a glass jar and goes out after a few seconds.

**Student 1:** The flame uses up the oxygen in the jar, and it goes out when no oxygen is left.
**Student 2:** The flame produces carbon dioxide, which builds up until it smothers the flame.
**Student 3:** Heat trapped in the jar makes the wax melt so fast that it floods the wick.

**Question:** A candle in a jar kept cold in an ice bath went out after the same time as a candle in a room-temperature jar. This result is consistent with which students?

**Solution:**
1. **Student 3** says trapped heat puts the flame out, so keeping the jar cold should make the candle last longer. It did not, so the result weakens Student 3.
2. **Students 1 and 2** blame changes in the gases, which an ice bath would not prevent. The result fits both.

**Answer: Students 1 and 2 only** ✓
</details>
      `
    },
    {
      id: 'act-s6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice: Two Scientists** 🎯

> **Introduction:** On Mirrin Flat, a dry lake bed in a desert valley, stones weighing up to 20 kg sit at the ends of long, shallow trails in the clay, showing that the stones have moved. No one has seen a stone move during a dry period.
>
> **Scientist 1:** Strong winds alone push the stones. After a heavy rain, the clay surface becomes wet and slick, and gusts above 60 km/h can slide even large stones across it.
>
> **Scientist 2:** The stones are pushed by ice. After winter rain, a shallow pond covers the flat, and a thin sheet of ice forms on it overnight. When the morning sun breaks the sheet into floating panels, even a light breeze moves the panels, and the panels shove the stones along the wet clay.
      `,
      exercise: {
        questions: [
          {
            question: `Both scientists would most likely agree that the stones move:`,
            options: [
              `only when the clay surface of the flat is wet`,
              `only when wind gusts are faster than 60 km/h`,
              `only when ice has formed on the pond overnight`,
              `only when the morning sun shines on the stones`
            ],
            correctAnswer: 0,
            explanation: `Scientist 1 requires wet, slick clay after rain, and Scientist 2 describes a pond and wet clay under the ice panels, so both depend on a wet surface. Gusts above 60 km/h are part of Scientist 1's view only, while overnight ice and the morning sun breaking it apart are part of Scientist 2's view only.`
          },
          {
            question: `Which finding would support Scientist 2's view but NOT Scientist 1's view?`,
            options: [
              `The trails in the clay are deepest under the very heaviest stones`,
              `Stones moved only amid floating ice, in winds under 15 km/h`,
              `Stones on the flat have not been seen moving during long dry periods`,
              `Rain gauges show that the flat floods with shallow water a few times a year`
            ],
            correctAnswer: 1,
            explanation: `Movement only when ice panels were present, in winds far too weak to slide stones by themselves, matches Scientist 2 and contradicts Scientist 1's claim that strong winds alone do the work. No movement in dry periods and occasional flooding fit both views, since both need water on the flat. Deep trails under heavy stones say nothing about whether wind or ice pushed them.`
          },
          {
            question: `Which observation would most weaken Scientist 2's view?`,
            options: [
              `A stone that moved during a winter morning while thin ice panels drifted on the pond`,
              `Two neighboring stones that moved the same distance in the same direction on one morning`,
              `A stone that moved during a summer rainstorm at 30°C, when no ice could form`,
              `A stone that did not move during a long dry spell with steady, strong winds`
            ],
            correctAnswer: 2,
            explanation: `Scientist 2 says ice panels push the stones, so movement at 30°C, when no ice can exist, contradicts that mechanism; it fits Scientist 1, who needs only wet clay and wind. Movement while ice panels drifted is what Scientist 2 predicts. A stone staying put in dry weather fits both views, and two neighbors moving together fits Scientist 2 especially well.`
          },
          {
            question: `Researchers find that two stones 5 m apart, one weighing 2 kg and one weighing 18 kg, moved on the same morning along parallel trails of the same length. This finding supports:`,
            options: [
              `Scientist 1's view more than Scientist 2's view`,
              `both views about equally well`,
              `Scientist 2's view more than Scientist 1's view`,
              `neither view, since it concerns stone mass`
            ],
            correctAnswer: 2,
            explanation: `A single ice panel pushing both stones would move them together the same distance whatever their mass, which is what Scientist 2's mechanism suggests. Under Scientist 1's view, the same gust would slide a 2 kg stone much farther than an 18 kg stone, so matching trails fit that view poorly. Because the result favors one mechanism, it neither supports both equally nor falls outside both views.`
          }
        ]
      }
    },
    {
      id: 'act-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Viewpoint Does It Support?** 🔍

> **Hypothesis 1:** Bees stopped visiting the clover in a meadow because a new pesticide used on nearby farms killed many of the local bees.
>
> **Hypothesis 2:** Bees stopped visiting the clover because a new sunflower field next to the meadow draws the bees away.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hive counts near the meadow are unchanged, and the sunflower field is crowded with bees.',
            options: ['Supports 1 only', 'Supports 2 only', 'Fits both', 'Irrelevant to both']
          },
          {
            label: 'Many dead bees with pesticide residue were found in hives near the farms.',
            options: ['Supports 1 only', 'Supports 2 only', 'Fits both', 'Irrelevant to both']
          },
          {
            label: 'Fewer bees are seen on the meadow clover than five years ago.',
            options: ['Supports 1 only', 'Supports 2 only', 'Fits both', 'Irrelevant to both']
          },
          {
            label: 'The clover in the meadow is a different color from the clover on the farms.',
            options: ['Supports 1 only', 'Supports 2 only', 'Fits both', 'Irrelevant to both']
          }
        ],
        correctAnswers: ['Supports 2 only', 'Supports 1 only', 'Fits both', 'Irrelevant to both'],
        hint1: 'If the bees are alive and busy elsewhere, which hypothesis does that fit?',
        hint2: 'Which hypothesis says bees died?',
        hint3: 'Both hypotheses start from the same observation. Neither mentions clover color.',
        explanation: 'Healthy hive counts plus a crowded sunflower field fit Hypothesis 2 and contradict the claim that many bees died. Dead bees with pesticide residue support Hypothesis 1. Fewer bees on the clover is the shared observation both hypotheses explain, so it cannot separate them. Clover color is not part of either explanation.'
      }
    },
    {
      id: 'act-s6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Three Students and a Data Table** 📋

> **Introduction:** When a glass jar is placed over a burning candle, the flame goes out. A class recorded how long a candle burned under jars of different sizes. Each jar started with ordinary air (about 21% oxygen).

| Jar volume (mL) | 250 | 500 | 1,000 |
|---|---|---|---|
| Burn time (s) | 9 | 18 | 37 |

> **Student 1:** The flame goes out when it has used up all the oxygen in the jar. A larger jar holds more oxygen, so the candle burns longer.
>
> **Student 2:** The flame goes out when the carbon dioxide it produces builds up to a level that smothers it. In a larger jar, that level takes longer to reach.
>
> **Student 3:** Heat trapped in the jar melts the wax so fast that liquid wax floods the wick. A larger jar warms more slowly, so the candle burns longer.
      `,
      exercise: {
        questions: [
          {
            question: `The results in the table are consistent with the explanations of which students?`,
            options: [
              `Student 1 only`,
              `Students 1 and 2 only`,
              `Students 2 and 3 only`,
              `Students 1, 2, and 3`
            ],
            correctAnswer: 3,
            explanation: `Each student predicts a longer burn in a larger jar: more oxygen to use up, more room before carbon dioxide reaches a smothering level, or slower heating. The table shows exactly that, so it fits all three. Choosing only one or two students assumes the data contradict someone, but no student's explanation predicts shorter burns in bigger jars.`
          },
          {
            question: `The class repeated the 500 mL trial with the jar sitting in an ice bath, and the candle again burned for 18 s. This result weakens the explanation of:`,
            options: [
              `Student 1 only`,
              `Student 2 only`,
              `Student 3 only`,
              `Students 1 and 2`
            ],
            correctAnswer: 2,
            explanation: `Student 3 blames trapped heat, so cooling the jar should have lengthened the burn; an unchanged 18 s contradicts that. Students 1 and 2 blame changes in the gases inside the jar, which an ice bath would not prevent, so the result is consistent with both of them.`
          },
          {
            question: `Students 1 and 2 would both agree that the flame goes out because:`,
            options: [
              `liquid wax floods the wick of the candle`,
              `all of the oxygen in the jar is used up`,
              `the mix of gases inside the jar changes over time`,
              `carbon dioxide reaches a smothering level`
            ],
            correctAnswer: 2,
            explanation: `Student 1 says oxygen is used up and Student 2 says carbon dioxide builds up; both are changes in the gases inside the jar, which is their common ground. Running out of oxygen belongs only to Student 1, and a smothering level of carbon dioxide belongs only to Student 2. Wax flooding the wick is Student 3's explanation.`
          },
          {
            question: `A sensor showed that when the flame went out, the air in the jar still contained about 15% oxygen. This finding most directly weakens the explanation of:`,
            options: [
              `Student 1, because oxygen remained when the flame died`,
              `Student 2, because carbon dioxide was not measured`,
              `Student 3, because the oxygen level was measured`,
              `none of them, because the jar still held some air`
            ],
            correctAnswer: 0,
            explanation: `Student 1 claims the flame goes out only when all the oxygen is gone, so finding 15% oxygen left contradicts that claim directly. The finding does not test Student 2's carbon dioxide level, and not measuring something cannot weaken a view. Student 3's heat mechanism says nothing about oxygen, and the leftover oxygen is exactly what makes the finding decisive for Student 1.`
          },
          {
            question: `Suppose a 500 mL jar were filled with air containing 40% oxygen instead of 21%, with the same starting amount of carbon dioxide. Student 1 would most likely predict that the candle would burn:`,
            options: [
              `for less than 18 s`,
              `for exactly 18 s`,
              `for more than 18 s`,
              `without going out at all`
            ],
            correctAnswer: 2,
            explanation: `Student 1 says the candle burns until the oxygen runs out, so nearly doubling the oxygen should make it burn longer than the 18 s measured with ordinary air. A shorter or identical burn would ignore the extra oxygen. The oxygen is still limited, so Student 1 would expect the flame to go out eventually, just later.`
          }
        ]
      }
    },
    {
      id: 'act-s6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

> **Introduction:** On clear, calm nights, drops of water (dew) appear on a lawn by morning, but the concrete sidewalk next to it stays dry.
>
> **Student 1:** The dew comes from inside the grass. At night, grass blades release water through their leaves, and it collects as drops.
>
> **Student 2:** The dew comes from the air. Thin grass blades cool faster at night than thick concrete does, and water vapor in the air condenses on the coldest surfaces.

**Question 1:** On the same lawn, a mat of plastic artificial grass, which releases no water, was covered in dew by morning. Which student's explanation does this weaken?

**Question 2:** On what point do the two students agree?

<details>
<summary><b>Show answers</b></summary>

1. **Student 1's.** If dew came from inside living grass, a plastic mat that releases no water should stay dry; dew on the mat contradicts that. Student 2's explanation fits, because thin plastic blades can cool quickly too.
2. **They agree that the dew forms on the grass and not on the sidewalk.** That is the observation both are explaining. They disagree about *where the water comes from*: inside the plant (Student 1) versus water vapor in the air (Student 2).
</details>
      `
    },
    {
      id: 'act-s6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- Read the introduction closely; it holds the facts **every** viewpoint accepts.
- **Map** each viewpoint: claim, cause or mechanism, prediction. Keep them separate.
- A finding **supports** a viewpoint whose prediction it matches and **weakens** one it contradicts.
- "Supports X **but not** Y" must fit X **and** contradict Y; a finding that fits both cannot separate them.
- **Agreement** means both viewpoints say it, usually a shared outcome with different causes.
- Answer from the viewpoints, **never** from which one you think is true.
      `
    }
  ]
}
