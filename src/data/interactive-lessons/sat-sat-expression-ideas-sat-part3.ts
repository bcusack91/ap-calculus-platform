export const satExpressionPart3Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei3-intro',
      type: 'text' as const,
      content: `# Transitions II: Cause, Addition, Example, and Sequence

**Part 3 of 7 — Transitions: Cause, Addition, Example, and Sequence**

Part 2 covered the "but" family. The other transition families each carry a specific promise about the second sentence. Check whether the text keeps that promise.

### The Families and Their Promises

| Family | Transitions | The second sentence must… |
|---|---|---|
| **Cause → effect** | therefore, thus, consequently, as a result, accordingly | be a **result** of the first |
| **Addition** | moreover, furthermore, in addition, additionally, also | add **another point** pushing the same way |
| **Similarity** | similarly, likewise | show a **different subject** doing a parallel thing |
| **Example** | for example, for instance | give a **specific case** of the first sentence's general claim |
| **Restatement** | in other words, that is | say the **same thing** more plainly |
| **Sequence** | first, next, then, subsequently, finally | describe the **next step or event** in time |

### Check the Direction of Cause and Effect

"Therefore," "thus," and "as a result" introduce the **effect**. If the second sentence gives the **reason** for the first, those words run backward.

- ✅ "The river flooded the valley. *As a result*, farmers lost most of their crops." (flood → crop loss)
- ❌ "Farmers lost most of their crops. *As a result*, the river flooded the valley." (crop loss did not cause the flood)

### Example vs. Addition vs. Similarity

- **Example:** the second sentence is one *instance* of the first. "Some birds cannot fly. *For instance*, the ostrich runs rather than flies."
- **Addition:** the second sentence is a *new, separate point*. "Cycling to work saves money on fuel. *Moreover*, it builds exercise into the day."
- **Similarity:** the second sentence is about a *different subject* that behaves the same way. "Dolphins find prey by echolocation. *Similarly*, many bats hunt by listening for echoes."`
    },
    {
      id: 'ei3-quiz',
      type: 'multiple-choice' as const,
      content: '**Transition Families Practice** 🎯',
      exercise: {
        questions: [
          {
            question: `Beavers build dams that slow the flow of streams. ______ the water behind a dam spreads out and soaks into the surrounding soil, creating wetlands. Which choice completes the text with the most logical transition?`,
            options: ['As a result,', 'For example,', 'Nevertheless,', 'Previously,'],
            correctAnswer: 0,
            explanation: `Slowing the stream is what makes the water spread out and form wetlands, so the second sentence is an effect of the first: "As a result" fits. The wetlands are not an instance of dam building, nothing is being overcome, and "Previously" would put the wetlands before the dams.`
          },
          {
            question: `Some animals change color with the seasons. ______ the snowshoe hare grows a white coat each fall and a brown one each spring. Which choice completes the text with the most logical transition?`,
            options: ['For instance,', 'Consequently,', 'Nevertheless,', 'Finally,'],
            correctAnswer: 0,
            explanation: `The first sentence makes a general claim, and the snowshoe hare is one specific animal that does exactly that, so "For instance" fits. The hare's coat is not caused by other animals changing color, nothing about it pushes against the claim, and nothing marks it as the last step in a sequence.`
          }
        ]
      }    },
    {
      id: 'ei3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Keeping Each Family's Promise

### Worked Example 1: Cause or Addition?

"Many cities are replacing old streetlights with LED bulbs. ______ one large city cut its streetlight energy use by more than half after switching."

| Candidate | Promise | Kept? |
|---|---|---|
| For example, | The city is one case of the general trend | ✅ One city that switched to LEDs |
| Moreover, | A separate, new point | ❌ It is the same point, narrowed to one city |
| As a result, | Sentence 2 is caused by sentence 1 | ❌ Other cities switching did not cut this city's energy use |
| In contrast, | A different subject behaving differently | ❌ The city follows the trend |

### Worked Example 2: Similarity vs. Example

| Text | Right choice | Why |
|---|---|---|
| "Dolphins find prey by echolocation. ___ many bats hunt by listening for echoes." | Similarly, | Bats are not dolphins; they are a parallel case |
| "Some mammals find prey by echolocation. ___ many bats hunt by listening for echoes." | For example, | Bats are one of the mammals the claim covers |

One word in sentence 1 changes the answer. Read the first sentence for its **scope**: a general claim invites an example; a claim about one specific subject invites a parallel.

### Worked Example 3: Sequence and Restatement

| Text | Right choice |
|---|---|
| "The bakers first mixed the dough. ___ they left it to rise for two hours." | Next, |
| "Many deep-sea fish are bioluminescent. ___ they produce their own light through chemical reactions." | In other words, |

### Direction Check for Cause and Effect

| Order in the text | "As a result" correct? |
|---|---|
| Cause, then effect | ✅ Yes |
| Effect, then cause | ❌ No; the second sentence is the reason, not the result |
| Two unrelated facts | ❌ No; nothing causes anything |`
    },
    {
      id: 'ei3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Transition Families Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: `Octopuses can change the color of their skin in a fraction of a second to blend in with their surroundings. ______ cuttlefish use pigment cells in their skin to match the rocks and sand around them. Which choice completes the text with the most logical transition?`,
            options: ['Similarly,', 'Therefore,', 'For instance,', 'Still,'],
            correctAnswer: 0,
            explanation: `Cuttlefish are a different animal doing a parallel thing, so "Similarly" fits. Cuttlefish camouflage is not caused by octopus camouflage, cuttlefish are not an instance of octopuses, and nothing is overcome.`
          },
          {
            question: `To make paper by hand, workers first beat plant fibers into a watery pulp. ______ they lift a fine screen up through the pulp, catching a thin layer of fibers that dries into a sheet. Which choice completes the text with the most logical transition?`,
            options: ['After that,', 'Instead,', 'Similarly,', 'For example,'],
            correctAnswer: 0,
            explanation: `"First" in the opening sentence starts a process, and lifting the screen is the following step, so "After that" fits. The screen step does not replace the pulp step, it is not a parallel case, and it is not an example of beating fibers.`
          },
          {
            question: `Planting trees along city streets lowers summer temperatures by shading the pavement. ______ street trees absorb rainwater that would otherwise flood storm drains. Which choice completes the text with the most logical transition?`,
            options: ['Moreover,', 'In contrast,', 'Consequently,', 'For instance,'],
            correctAnswer: 0,
            explanation: `The second sentence adds a separate benefit of street trees, so "Moreover" fits. Absorbing rainwater does not contradict cooling, it is not caused by shading, and it is a different benefit rather than an instance of lower temperatures.`
          }
        ]
      }
    },
    {
      id: 'ei3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Transition Families Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Therefore" introduces [a result|a reason|an example|a contrast]',
          '"The dam slowed the stream. ___, wetlands formed." [As a result|For example|However|Similarly]',
          '"Many spiders spin webs to catch prey. ___, the orb weaver builds a new spiral web each night." [For instance|Therefore|In contrast|Meanwhile]',
          '"Similarly" needs [a second subject doing a parallel thing|a cause followed by its effect|a claim followed by an exception|one step followed by the next]'
        ],
        correctAnswers: ['a result', 'As a result', 'For instance', 'a second subject doing a parallel thing'],
        hint1: 'Therefore = so.',
        hint2: 'Slowing the water is what creates the wetlands.',
        hint3: 'The orb weaver is one of the many web-spinning spiders.',
        explanation: '"Therefore" introduces a result. The dam causes the wetlands ("As a result"). The orb weaver is one case of the general claim ("For instance"). "Similarly" needs a different subject behaving in a parallel way.'
      }
    },
    {
      id: 'ei3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Family | Promise to check |
|---|---|
| Cause → effect | Sentence 2 is the result, and the direction is right |
| Addition | Sentence 2 is a new point pushing the same way |
| Similarity | A different subject behaves in a parallel way |
| Example | Sentence 2 is one case of sentence 1's general claim |
| Restatement | Sentence 2 says the same thing more plainly |
| Sequence | Sentence 2 is the next step or event |

*Next: Rhetorical Synthesis — Reading the Goal →*`    }
  ]
};
