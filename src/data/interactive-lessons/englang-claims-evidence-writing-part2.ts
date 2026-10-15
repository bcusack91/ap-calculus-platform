export const englangClaimsEvidenceWritingPart2Data = {
  topicSlug: 'englang-claims-evidence-writing',
  sections: [
    {
      id: 'englangc2-intro',
      type: 'text' as const,
      content: `
# 🛠️ Claims and Evidence in Writing

**Part 2 of 7 — A Thesis That Earns Row A, in All Three Essays**

---

| Section |
|---------|
| 📖 What Row A Asks For |
| Three Prompts, Three Theses |
| Why Some Theses Score Zero |
| From Defensible to Strong: Previewing the Line of Reasoning |

> 🔑 **Key Concept:** Skill 4.B asks you to write a thesis statement that **requires proof or defense** and that **may preview** the structure of your argument. On every free-response essay, Row A awards 1 point for a defensible thesis that responds to the prompt. It is the easiest point to earn and the easiest to lose, because a thesis that only restates, summarizes or sits on the fence earns nothing.
`
    },
    {
      id: 'englangc2-rowa',
      type: 'text' as const,
      content: `
## 📖 What Row A Asks For

### The Requirement, Essay by Essay

| Essay | Row A asks for a thesis that... | The thesis must name... |
|---|---|---|
| **Question 1: Synthesis** | responds to the prompt with a defensible position | **Your position** on the issue the sources discuss |
| **Question 2: Rhetorical Analysis** | analyzes the writer's rhetorical choices | **What the writer does** and, ideally, **what it accomplishes** for the purpose and audience |
| **Question 3: Argument** | responds to the prompt with a defensible position | **Your position** on the claim or question in the prompt |

### Rules Worth Knowing

- **One sentence or several.** The thesis may run more than one sentence if the sentences are close together.
- **Location.** Readers will credit a thesis anywhere in the essay, but the end of the introduction is the safest place, because it tells the reader what to watch for.
- **Defensible means arguable.** A reasonable reader could disagree, so the claim needs support. A fact ("Roosevelt gave a speech in Paris in 1910") cannot be defended because it does not need defending.
- **Row A is independent.** A good thesis earns the point even if the essay that follows is weak; a strong essay with no defensible thesis still loses it.

> 🔑 **AP Connection:** For Question 2 there is a special trap. A thesis about the **topic** ("Johnson argues that patrons are useless") summarizes the writer's argument but does not analyze **choices**. A Row A thesis for rhetorical analysis says what the writer **does** with language to achieve a purpose.
`
    },
    {
      id: 'englangc2-prompts',
      type: 'text' as const,
      content: `
## Three Prompts, Three Theses

### Question 3: Argument

**Prompt:** In a 1910 speech in Paris, Theodore Roosevelt declared, "It is not the critic who counts... The credit belongs to the man who is actually in the arena." Write an essay that argues your position on the extent to which Roosevelt's claim is valid.

| Thesis | Row A? | Why |
|---|---|---|
| "Roosevelt says the person who acts matters more than the critic." | 0 | Restates the quotation; takes no position |
| "There are good arguments on both sides of Roosevelt's claim." | 0 | Refuses to take a position |
| "Roosevelt is right that doers deserve more credit than critics, because action requires risk." | 1 | Defensible position with a reason |
| "Roosevelt is right to honor those who risk failure, but he wrongly dismisses critics, whose judgment is what makes the arena's risks worth taking." | 1 | Defensible, qualified, and previews a two-part line of reasoning |

### Question 2: Rhetorical Analysis

**Prompt:** In 1755, after years of work on his *Dictionary of the English Language*, Samuel Johnson wrote to the Earl of Chesterfield, a nobleman to whom Johnson had addressed his plan for the dictionary years earlier, who had then given him almost no support, and who praised the dictionary in print just before it appeared. Write an essay that analyzes the rhetorical choices Johnson makes to decline Chesterfield's belated patronage.

| Thesis | Row A? | Why |
|---|---|---|
| "Johnson writes a letter to Chesterfield about his dictionary." | 0 | Summary of the situation; no analysis |
| "Johnson uses ethos, pathos and logos in his letter." | 0 | Names labels but says nothing about how they serve his purpose |
| "Johnson uses rhetorical questions and parallel structure to reject Chesterfield." | 1 | Identifies choices tied to the purpose; basic but defensible |
| "Johnson keeps the courteous forms a nobleman expects while filling them with reproach, so that his refusal sounds polite and is unanswerable." | 1 | Analyzes how choices serve purpose and audience; previews the essay |

### Question 1: Synthesis

**Prompt:** Using at least three of the provided sources, write an essay that develops your position on whether cities should make public transit free to riders.

| Thesis | Row A? | Why |
|---|---|---|
| "Free public transit is an issue many cities are debating." | 0 | Names the topic only |
| "Cities should make transit free for students and low-income riders before considering free fares for everyone." | 1 | Defensible and qualified; sets up a line of reasoning about cost and need |
`
    },
    {
      id: 'englangc2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Does It Earn Row A?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis would earn the Row A point on the Roosevelt argument prompt?',
            options: [
              'Roosevelt believed that people who act deserve more credit than critics.',
              'Critics matter most when they have once stood in the arena themselves.',
              'Many people have opinions about critics and about people who act.',
              'Roosevelt gave his famous speech about the arena in Paris in 1910.'
            ],
            correctAnswer: 1,
            explanation: 'Claiming that critics matter most when they have acted themselves takes an arguable position on Roosevelt\'s claim. The other choices restate Roosevelt\'s view, name the topic, or state a fact, none of which requires defense.'
          },
          {
            question: 'A student writes for the Johnson prompt: "In his letter, Johnson argues that Chesterfield\'s help comes too late to matter." Why would this thesis most likely fail to earn Row A?',
            options: [
              'It is too short to be defensible.',
              'It summarizes instead of analyzing.',
              'It disagrees with Johnson\'s position.',
              'It appears in the wrong paragraph.'
            ],
            correctAnswer: 1,
            explanation: 'The sentence accurately states Johnson\'s argument but says nothing about his rhetorical choices, which a rhetorical analysis thesis must analyze. Length and location do not decide Row A, and the sentence does not disagree with Johnson.'
          }
        ]
      }
    },
    {
      id: 'englangc2-zero',
      type: 'text' as const,
      content: `
## Why Some Theses Score Zero

| Failure | Example | Fix |
|---|---|---|
| **Restates the prompt** | "Roosevelt claims that the man in the arena deserves credit." | Add your judgment: valid, invalid, or valid to an extent you can name |
| **Summarizes** | "Johnson tells Chesterfield that he finished the dictionary alone." | Name what Johnson does with language and why |
| **Fence-sits** | "Free transit has advantages and disadvantages." | Choose, then acknowledge the other side inside your claim |
| **Lists devices only** | "Johnson uses diction, syntax and imagery." | Tie each choice to the purpose and audience |
| **Off-prompt** | "Critics on social media are often cruel." | Keep the prompt's terms: credit, critics, action |
| **Too vague to defend** | "Roosevelt's quote is very interesting and relevant." | Replace evaluation words like *interesting* with a claim |

### Fence-Sitting Versus Qualifying

A qualified thesis is not a fence-sitting thesis. The difference is commitment.

- **Fence-sitting:** "Roosevelt's claim is partly true and partly false." (Which part? Why?)
- **Qualified:** "Roosevelt's claim is valid for public life, where action carries real risk, but not for the arts, where the critic's judgment shapes what work is attempted at all."

The qualified version commits to a position and states exactly where its limits are. It is also more interesting to defend.
`
    },
    {
      id: 'englangc2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Thesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Free transit has both benefits and drawbacks for cities." ___',
            options: ['fence-sits', 'earns Row A', 'summarizes the passage', 'lists devices only']
          },
          {
            label: '"Johnson\'s mock-courteous phrasing lets him reproach a lord without breaking the rules of polite address." ___',
            options: ['earns Row A', 'fence-sits', 'summarizes the passage', 'lists devices only']
          },
          {
            label: '"Johnson uses rhetorical questions, metaphor and parallelism." ___',
            options: ['lists devices only', 'earns Row A', 'fence-sits', 'summarizes the passage']
          }
        ],
        correctAnswers: ['fence-sits', 'earns Row A', 'lists devices only'],
        hint1: 'Does it choose a side?',
        hint2: 'It names a choice and what the choice accomplishes.',
        hint3: 'It names devices without a purpose.',
        explanation: 'Naming benefits and drawbacks without choosing is fence-sitting. Tying mock courtesy to the purpose of a polite reproach is an analytical thesis. A list of devices with no purpose does not analyze.'
      }
    },
    {
      id: 'englangc2-preview',
      type: 'text' as const,
      content: `
## From Defensible to Strong: Previewing the Line of Reasoning

Row A is a yes-or-no point, but the thesis also shapes Rows B and C. A thesis that **previews the line of reasoning** gives every body paragraph a job.

### Open and Closed Theses

| Type | Example | Use when |
|---|---|---|
| **Closed** (names the steps) | "Johnson declines Chesterfield's patronage by recalling his years of neglect, redefining what a patron is, and showing that the help now offered is useless." | You have time to plan and want the clearest map |
| **Open** (names the claim and its logic, not every step) | "Johnson keeps the courteous forms a nobleman expects while filling them with reproach." | Your paragraphs will follow the passage's order, or you want room to develop |

The CED says a thesis **may** preview structure. It does not require a list of three points, and a mechanical list ("ethos, pathos and logos") can lock you into weaker paragraphs.

### A Thesis-Building Formula

> **[Position or choice]** + **[reason, purpose or effect]** + **[limit or tension, if you have one]**

| Piece | Roosevelt argument example |
|---|---|
| Position | Roosevelt is right to honor those who risk failure |
| Reason | because action exposes a person to costs that commentary never does |
| Limit or tension | but he undervalues critics, whose standards tell the doer what is worth attempting |

> 🔑 **AP Connection:** The "limit or tension" piece is optional for Row A, but it is one of the most reliable routes to Row C. Sophistication rewards an essay that explores complexities or tensions throughout, and a thesis that names a tension gives the whole essay a reason to explore it.
`
    },
    {
      id: 'englangc2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision best turns "Free public transit has advantages and disadvantages" into a defensible thesis?',
            options: [
              'Free public transit has many advantages and also several disadvantages.',
              'Cities should make transit free first for low-income riders.',
              'Free public transit is a topic that many city councils are debating now.',
              'Some people support free public transit, and other people oppose it.'
            ],
            correctAnswer: 1,
            explanation: 'The revision commits to a policy and limits it, which gives the essay something to prove. The other choices still describe the debate or the topic without taking a position.'
          },
          {
            question: 'A student\'s thesis reads, "Johnson keeps the courteous forms a nobleman expects while filling them with reproach." The thesis is best classified as',
            options: [
              'a closed thesis listing three body paragraphs',
              'an open thesis naming a choice and its effect',
              'a summary of the letter\'s content and situation',
              'a fence-sitting thesis that avoids a position'
            ],
            correctAnswer: 1,
            explanation: 'The thesis names a pattern of choices (courteous form, reproachful content) and its effect without listing the steps, which makes it open. It lists no paragraphs, it analyzes rather than summarizes, and it takes a clear interpretive position.'
          },
          {
            question: 'Where may a thesis appear and still earn Row A?',
            options: [
              'only in the final sentence of the introductory paragraph',
              'anywhere in the essay, in one or more nearby sentences',
              'only in the first sentence of the essay',
              'only in the conclusion, after the evidence'
            ],
            correctAnswer: 1,
            explanation: 'Readers credit a defensible thesis wherever it appears, and it may take more than one sentence if the sentences are close together. The end of the introduction is a wise habit, not a rule.'
          }
        ]
      }
    }
  ]
};
