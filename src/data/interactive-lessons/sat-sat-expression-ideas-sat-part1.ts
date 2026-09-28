export const satExpressionPart1Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei1-intro',
      type: 'text' as const,
      content: `# Expression of Ideas on the Digital SAT

**Part 1 of 7 — How Expression of Ideas Questions Work**

Expression of Ideas is about 20% of the Reading and Writing section: roughly 8 to 12 of the 54 questions. It contains exactly **two** question types, and you can recognize both from the question line alone.

| Question type | What the question says | What you judge |
|---|---|---|
| **Transitions** | "Which choice completes the text with the most logical transition?" | How the idea after the blank relates to the idea before it |
| **Rhetorical Synthesis** | "While researching a topic, a student has taken the following notes… Which choice most effectively uses relevant information from the notes to accomplish this goal?" | Which choice does the job the goal names |

### What these questions do NOT test

Every answer choice is grammatical, and every synthesis choice is accurate to the notes. You are never choosing the most formal word, the shortest sentence, or the "best-sounding" option. Both question types are **logic** questions.

### Transitions: the logical-relationship blank

A transition question gives you two short sentences (or two clauses) with a blank at the start of the second one. The four choices are words like *however*, *therefore*, *for example*, and *similarly*. Each belongs to a family:

| Relationship | Common transitions |
|---|---|
| **Contrast** | however, by contrast, in contrast, on the other hand, instead |
| **Concession** | nevertheless, nonetheless, even so, still |
| **Cause → effect** | therefore, thus, consequently, as a result, accordingly |
| **Addition / similarity** | moreover, furthermore, in addition, similarly, likewise |
| **Example** | for example, for instance |
| **Restatement** | in other words, that is |
| **Sequence** | first, next, then, subsequently, finally |

Usually the four choices come from four **different** families, so naming the relationship is most of the work.

### Rhetorical Synthesis: goal + notes

A synthesis question gives you four to six bulleted notes and then a goal: "The student wants to *emphasize a difference between the two rivers*." All four choices use real information from the notes. Only one of them accomplishes that specific goal.`
    },
    {
      id: 'ei1-quiz',
      type: 'multiple-choice' as const,
      content: '**Recognize the Question Type** 🎯',
      exercise: {
        questions: [
          {
            question: `Most bats find insects mainly by echolocation. The fringe-lipped bat, ______ locates frogs mainly by listening for their mating calls. Which choice completes the text with the most logical transition?`,
            options: ['however,', 'for example,', 'thus,', 'similarly,'],
            correctAnswer: 0,
            explanation: `The first sentence describes most bats; the second describes a bat that hunts a different way. That is a contrast, so "however" fits. The fringe-lipped bat is an exception to the pattern, not an example of it, its hunting method is not a result of what most bats do ("thus"), and it is not a parallel case ("similarly").`
          },
          {
            question: `In a Rhetorical Synthesis question, all four choices are accurate to the notes. What makes exactly one of them correct?`,
            options: ['It does the specific job that the goal names', 'It includes more of the notes than the other choices', 'It repeats the wording of the notes most closely', 'It gives the most specific numbers from the notes'],
            correctAnswer: 0,
            explanation: `Accuracy is shared by all four choices, so it cannot decide the question. The deciding test is the goal: the correct choice does the specific job the student wants done. A choice can use many notes, copy their wording, or pack in numbers and still fail that job.`
          },
          {
            question: `A question asks, "Which choice completes the text with the most logical transition?" All four choices are grammatical. What are you actually being asked to judge?`,
            options: ['How the idea after the blank relates to the one before it', 'Which of the four transition words sounds most formal', 'Whether a comma or a semicolon should follow the blank', 'Which option keeps the second sentence the shortest'],
            correctAnswer: 0,
            explanation: `Transition questions test the logical relationship between two ideas: contrast, concession, cause and effect, addition, example, restatement, or sequence. Formality and length play no part, and the punctuation around the blank is fixed in the text, so it is not what the choices vary.`
          }
        ]
      }    },
    {
      id: 'ei1-text2',
      type: 'text' as const,
      content: `## Deep Dive: One Routine for Each Question Type

### Worked Example 1: A Transition Question

"Octopuses have no bones. ______ a large octopus can squeeze through an opening barely wider than its beak."

| Step | Action |
|---|---|
| **1. Cover the blank** | Do not look at the choices yet |
| **2. Sentence 1 in a few words** | Octopuses have no bones |
| **3. Sentence 2 in a few words** | They fit through tiny openings |
| **4. Name the relationship** | Having no bones is *why* they fit: cause → effect |
| **5. Match** | "As a result," fits. "However" (contrast), "For instance" (example), and "Similarly" (a parallel case) do not. |

### Worked Example 2: A Rhetorical Synthesis Question

**Notes:**
- The Svalbard Global Seed Vault is located on a Norwegian island in the Arctic.
- It stores backup copies of seeds from gene banks around the world.
- It holds more than one million seed samples.
- Its site in permafrost keeps the seeds frozen even if the power fails.

**Goal:** explain why the vault was built in the Arctic.

| Choice | Verdict | Why |
|---|---|---|
| "The vault holds more than one million seed samples." | ❌ | Accurate, but says nothing about location |
| "The vault stores backup copies of seeds from gene banks around the world." | ❌ | Explains the vault's purpose, not its site |
| "The Svalbard vault is located on a Norwegian island in the Arctic." | ❌ | Names the location but gives no reason for it |
| "Built in Arctic permafrost, the vault keeps its seeds frozen even if the power fails." | ✅ | Gives the reason the location matters |

### Three Habits for Both Types

| Habit | Transitions | Rhetorical Synthesis |
|---|---|---|
| **Decide before you look** | Name the relationship first | Turn the goal into a checklist first |
| **Expect accurate traps** | Every choice is a real transition | Every choice is true to the notes |
| **Eliminate by job** | Wrong family = wrong answer | Wrong job = wrong answer |`
    },
    {
      id: 'ei1-quiz2',
      type: 'multiple-choice' as const,
      content: '**First Look at Real Items** 🎯',
      exercise: {
        questions: [
          {
            question: `Snow and ice reflect most of the sunlight that reaches them, while open ocean water absorbs most of it. ______ as Arctic sea ice melts and exposes more open water, the region absorbs more heat, which melts still more ice. Which choice completes the text with the most logical transition?`,
            options: ['Consequently,', 'Nevertheless,', 'For instance,', 'Similarly,'],
            correctAnswer: 0,
            explanation: `The first sentence sets up a difference in how ice and water handle sunlight; the second describes what follows from it when ice gives way to water. That is cause and effect, so "Consequently" fits. "Nevertheless" would mean the warming happens despite the first fact, the second sentence is a consequence rather than an instance, and it is not a parallel case.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • The Atlantic salmon hatches in freshwater rivers. • It migrates to the ocean to feed and grow. • The American eel hatches in the Sargasso Sea, part of the Atlantic Ocean. • It migrates to freshwater rivers to feed and grow. The student wants to emphasize a difference between where the two species hatch. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['The Atlantic salmon hatches in rivers, whereas the American eel hatches at sea.', 'Both the Atlantic salmon and the American eel migrate between rivers and the ocean.', 'The American eel hatches in the Sargasso Sea, which is part of the Atlantic Ocean.', 'After hatching in rivers, the Atlantic salmon migrates to the ocean to grow.'],
            correctAnswer: 0,
            explanation: `A difference needs both species and the feature on which they differ: here, where each one hatches. Only the rivers-versus-sea sentence does that. The migration sentence states a similarity, and the other two describe one species each, so neither can show a difference.`
          },
          {
            question: `Many desert plants store water in their tissues. ______ the saguaro cactus can take in hundreds of liters of water after a single heavy rain and swell to hold it. Which choice completes the text with the most logical transition?`,
            options: ['For example,', 'However,', 'As a result,', 'In contrast,'],
            correctAnswer: 0,
            explanation: `The first sentence makes a general claim about desert plants, and the second gives one specific plant that does exactly that, so "For example" fits. "However" and "In contrast" signal a difference, but the saguaro follows the pattern rather than breaking it, and storing water is not a result of other plants storing water.`
          }
        ]
      }
    },
    {
      id: 'ei1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Question Type Check** — Select the best answer.',
      exercise: {
        dropdowns: [
          'A transition question tests the [logical relationship between ideas|formality of the linking word|punctuation after the blank|length of the second sentence]',
          'The correct synthesis choice [accomplishes the stated goal|uses every note given|is the longest option|copies the notes exactly]',
          '"The trail was steep and icy. ___, the hikers reached the summit by noon." [Even so|Therefore|For example|Similarly]',
          'In a synthesis question, the four choices are all [accurate to the notes|grammatically flawed|drawn from outside facts|equally effective]'
        ],
        correctAnswers: ['logical relationship between ideas', 'accomplishes the stated goal', 'Even so', 'accurate to the notes'],
        hint1: 'Every transition choice is grammatical, so only the logic can differ.',
        hint2: 'Accuracy is shared by all four synthesis choices; the goal is not.',
        hint3: 'A steep, icy trail would slow hikers down. Did they fail or succeed anyway?',
        explanation: 'Transition questions test the relationship between ideas. The correct synthesis choice is the one that does the job the goal names. The hikers succeeded despite the hard trail, a concession, so "Even so" fits. All synthesis choices are accurate; the goal decides.'
      }
    },
    {
      id: 'ei1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Concept | Key Rule |
|---|---|
| The domain | Expression of Ideas = Transitions + Rhetorical Synthesis, nothing else |
| Transitions | Name the relationship between the two ideas before looking at the choices |
| Transition families | Contrast, concession, cause → effect, addition, example, restatement, sequence |
| Rhetorical Synthesis | All choices are accurate; only one does the job the goal names |
| Not tested | Formality, length, and "sounds better" are never the deciding factor |

*Next: Transitions — Contrast and Concession →*`    }
  ]
};
