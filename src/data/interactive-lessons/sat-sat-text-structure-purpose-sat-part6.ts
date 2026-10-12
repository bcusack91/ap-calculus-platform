export const satTextStructurePurposePart6Data = {
  topicSlug: 'sat-text-structure-purpose',
  sections: [
    {
      id: 'tsp6-intro',
      type: 'text' as const,
      content: `# Trap Answers and Elimination

**Part 6 of 7 — Why Wrong Choices Look Right**

On harder Text Structure and Purpose questions, you will often find two choices that both seem reasonable. The test writers build wrong answers from a small set of patterns. Learn the patterns and you can eliminate with confidence.

### The Five Trap Families

| Trap | How it fails | Example (for a text that reports one study) |
|---|---|---|
| **Too strong** | The verb or claim goes further than the author | "To **prove** that..." / "To argue that **all**..." |
| **Wrong size** | Too narrow (one detail) or too broad (a bigger topic) | "To note that the study lasted two years" |
| **Content, not function** | Restates what a sentence says instead of naming its job | "It states that bees visit flowers" |
| **Reversed relationship** | Says *supports* where the text *challenges*, or points at the wrong sentence | "It supports the view in the first sentence" when it undercuts it |
| **Outside the text** | True or plausible in the real world, but not in the text | A cause, motive, or outcome the text never mentions |

### The Half-Right Choice

Structure and function choices often have two halves joined by "and then" or by a comma. Test writers make the first half perfect and break the second:

> *It describes a study, notes the belief it challenged, and then explains how doctors quickly embraced it.*

If **any** part is wrong, the whole choice is wrong. Read every choice to the last word.

### An Elimination Routine

1. **Predict** (label the sentences, find the pivot).
2. **Verb check:** cross out choices whose verb is too strong or points the wrong way.
3. **Object check:** cross out choices that are too narrow, too broad, or about something else.
4. **Every-word check:** for the survivors, test each half against the text.`,
    },
    {
      id: 'tsp6-quiz',
      type: 'multiple-choice' as const,
      content: '**Practice: Spot the Trap** 🎯',
      exercise: {
        questions: [
          {
            question: `Coffee plants grown in full sun produce more beans per acre than those grown under a canopy of taller trees, which is why many farms have cleared their shade trees. Ecologist Pilar Vega notes that shade-grown farms shelter far more bird species, and that the birds eat insects that would otherwise damage the coffee. Some shade farms, she found, needed almost no pesticide.

Which choice best states the main purpose of the text?`,
            options: [
              `To prove that shade-grown coffee is more profitable than coffee grown in full sun`,
              `To describe how coffee beans are harvested, dried, and shipped from farms in many countries`,
              `To argue that birds are the most important source of pest control on all farms`,
              `To point out a benefit of shade-grown coffee that yield figures alone do not show`,
            ],
            correctAnswer: 3,
            explanation: `The text grants that sun-grown coffee yields more, then presents a benefit of shade (birds that control insects) that yield numbers miss. The "prove... more profitable" choice is too strong: profit is never measured. Harvesting and shipping are outside the text, and "all farms" stretches Vega's findings about coffee farms far beyond the text.`,
          },
          {
            question: `In 1854, physician John Snow mapped cholera deaths in one London neighborhood and found that they clustered around a single water pump. At the time, most doctors believed cholera spread through foul air. Snow's map did not immediately change their minds, but it became one of the first pieces of evidence that the disease traveled through contaminated water.

Which choice best describes the overall structure of the text?`,
            options: [
              `It describes a study, notes the belief it challenged, and then explains how doctors quickly embraced it.`,
              `It describes a study, notes the belief it challenged, and then explains its long-term importance.`,
              `It describes a study, notes the belief it confirmed, and then explains why the study was later doubted.`,
              `It describes a study, notes the doctors who funded it, and then explains how it changed London's water.`,
            ],
            correctAnswer: 1,
            explanation: `Snow's map is described, the competing belief (foul air) is noted, and the last sentence explains the map's eventual importance as early evidence of waterborne spread. The text says the map "did not immediately change their minds," so "quickly embraced" breaks the first choice's final half. Snow's map challenged the foul-air belief rather than confirming it, and no funders or changes to London's water are mentioned.`,
          },
          {
            question: `Many bird species sing at dawn, and the reason has long puzzled scientists. One idea is that sound carries farther in the still, cool air of early morning. Yet when researchers measured how far birdsong traveled at different times of day, they found little difference between dawn and midday. The dawn chorus, it seems, needs another explanation.

Which choice best describes the function of the second sentence in the text as a whole?`,
            options: [
              `It states that birdsong carries farther in cool, still morning air than at midday.`,
              `It explains why the researchers chose to measure birdsong only at dawn.`,
              `It presents an explanation that the findings described next fail to support.`,
              `It offers the conclusion that the text goes on to support with measurements.`,
            ],
            correctAnswer: 2,
            explanation: `The second sentence offers a possible explanation ("One idea is"), and the "Yet" sentence reports measurements that undercut it. The first choice restates the idea as if it were a fact, which is the content-not-function trap. The researchers measured at several times of day, not only at dawn, and the measurements contradict the idea rather than supporting it.`,
          },
        ],
      },
    },
    {
      id: 'tsp6-text2',
      type: 'text' as const,
      content: `## Worked Example: Trap Anatomy

> Beavers are often called nature's engineers, and the title is earned. Their dams slow streams, raise water tables, and create ponds that support frogs, fish, and birds. In parts of the western United States, land managers now build simple beaver-like dams of their own, hoping to restore dried-out streams where beavers have disappeared.

**Which choice best states the main purpose of the text?**

| Choice | Trap? | Reasoning |
|---|---|---|
| To explain how beavers change streams and how that effect has inspired a restoration practice | ✅ Correct | Covers both halves: what dams do, then the human imitation |
| To argue that beavers should be reintroduced to every stream in the western United States | Too strong | No one argues for reintroduction, and "every stream" is far beyond the text |
| To list the kinds of animals that live in beaver ponds | Too narrow | Frogs, fish, and birds are one detail |
| To explain why beavers disappeared from the western United States | Outside the text | The text says they disappeared, never why |

### When Two Choices Survive

Compare them **word by word** and ask which one the text supports more completely.

| Survivor A | Survivor B | Decider |
|---|---|---|
| "...and then **rejects** it" | "...and then **complicates** it" | Did the author throw the view out, or show it was incomplete? |
| "to **describe** a finding" | "to **explain** a finding" | Does the text give reasons ("because," "the reason"), or only report? |
| "supports the claim in the **first** sentence" | "supports the claim in the **second** sentence" | Which sentence actually makes the claim? |

**A strong habit:** for every eliminated choice, name its trap in a word or two ("too strong," "half-right"). If you can't name the flaw, reread before eliminating.`,
    },
    {
      id: 'tsp6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Practice: Close Calls** 🎯',
      exercise: {
        questions: [
          {
            question: `Urban planners once assumed that adding lanes to a crowded highway would reduce traffic. Decades of data suggest otherwise. When a highway grows, driving becomes easier for a while, so more people drive, and within a few years traffic often returns to its former level. Planners call this effect "induced demand."

Which choice best describes the function of the third sentence in the text as a whole?`,
            options: [
              `It explains the process behind the finding stated in the second sentence.`,
              `It provides evidence supporting the assumption described in the first sentence.`,
              `It introduces a term that the text goes on to define in the final sentence.`,
              `It proposes a solution to the traffic problem described earlier in the text.`,
            ],
            correctAnswer: 0,
            explanation: `The second sentence says the data contradict the old assumption, and the third explains how that happens: wider highways make driving easier, more people drive, and traffic returns. It undercuts the first sentence's assumption rather than supporting it, the term "induced demand" is named only in the final sentence (which labels the process rather than defining a new term), and no solution is proposed.`,
          },
          {
            question: `Before refrigerators, many households kept food cold with ice cut from frozen lakes in winter and stored in insulated icehouses. By the mid-1800s, ships carried this "natural ice" from New England to ports as distant as India. The trade collapsed within a few decades, as factories learned to make ice cheaply wherever it was needed.

Which choice best states the main purpose of the text?`,
            options: [
              `To argue that natural ice was safer to use than the ice that factories made`,
              `To explain how the first electric refrigerators were invented and sold`,
              `To show how New England's economy came to depend on shipping to India`,
              `To describe the rise and decline of a trade in ice harvested from lakes`,
            ],
            correctAnswer: 3,
            explanation: `The text traces the ice trade from local icehouses to long-distance shipping and then to its collapse when factory ice became cheap, so it describes the trade's rise and decline. Safety is never compared, refrigerators are mentioned only as a time marker, and India is one destination, not evidence that New England's economy depended on it.`,
          },
          {
            question: `Art historians have long credited painter Clara Voss with inventing the "split view," a technique that shows the inside and outside of a building in a single image. But sketchbooks recently discovered in a Vienna attic show her teacher, Emil Hartung, using the technique fifteen years earlier. Voss may still deserve credit for making the split view famous; she may not deserve credit for inventing it.

Which choice best describes the function of the last sentence in the text as a whole?`,
            options: [
              `It rejects the new evidence entirely and restores Voss's place as the technique's sole inventor.`,
              `It explains why Hartung's sketchbooks remained hidden in an attic for so long.`,
              `It distinguishes between two kinds of credit in light of the evidence just described.`,
              `It suggests that Hartung learned the split view from his student, Clara Voss.`,
            ],
            correctAnswer: 2,
            explanation: `After the sketchbook evidence, the last sentence separates credit for popularizing the technique (Voss may keep it) from credit for inventing it (she may lose it). It accepts the new evidence rather than rejecting it, gives no reason the sketchbooks were hidden, and the evidence points the other way: Hartung used the technique before Voss.`,
          },
        ],
      },
    },
    {
      id: 'tsp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Trap Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"To prove that..." for a text that only reports one study is usually [too strong|too narrow|correct|too broad]',
          'A choice whose first half fits but whose second half does not is [wrong|correct|partly correct and acceptable|the best choice]',
          'A choice that is true in real life but not stated in the text is [outside the text|the best answer|a strong inference|too narrow]',
          'A choice saying a sentence "supports" a claim it actually "challenges" has [the relationship reversed|too narrow a scope|too weak a verb|the right idea]',
        ],
        correctAnswers: ['too strong', 'wrong', 'outside the text', 'the relationship reversed'],
        hint1: 'One study rarely proves anything.',
        hint2: 'Every part of a choice must be true.',
        hint3: 'Answer from the text, not from the world.',
        explanation: 'Overclaiming verbs are too strong. A half-right choice is wrong. Real-world truths that the text never states are outside the text. Supports-vs-challenges mix-ups reverse the relationship.',
      },
    },
    {
      id: 'tsp6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Trap | Quick test |
|---|---|
| Too strong | Does the author really prove, argue, or reject? |
| Wrong size | Does the choice cover the whole text, and only the text? |
| Content, not function | Does the choice name a job, or just repeat the sentence? |
| Reversed | Supports or challenges? Which sentence? |
| Outside the text | Can you point to the words that support it? |
| Half-right | Test every half to the last word |

*Next: Mixed Practice and Test Strategy →*`,
    },
  ],
}
