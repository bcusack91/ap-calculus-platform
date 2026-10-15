export const englangArgumentStructurePart1Data = {
  topicSlug: 'englang-argument-structure',
  sections: [
    {
      id: 'elas1-intro',
      type: 'text' as const,
      content: `
# 🏗️ Argument Structure

**Part 1 of 7 — How Arguments Are Organized and Developed**

---

## The Architecture of an Argument

Every effective argument has a clear structure. Understanding structure helps you both ANALYZE texts and WRITE your own arguments.

### Classical Argument Structure (Aristotelian)

| Section | Purpose | Typical Location |
|---------|---------|-----------------|
| **Introduction (Exordium)** | Hook the reader, establish context | Opening paragraph |
| **Narration (Narratio)** | Provide background information | Early paragraphs |
| **Proposition (Propositio)** | State the thesis/main claim | End of intro or beginning of body |
| **Confirmation (Confirmatio)** | Present evidence supporting the claim | Body paragraphs |
| **Refutation (Refutatio)** | Address and refute counterarguments | Before or after confirmation |
| **Conclusion (Peroratio)** | Summarize and make final appeal | Closing paragraph |

---

## Other Argument Structures

| Structure | Pattern | Best For |
|-----------|---------|----------|
| **Rogerian** | Find common ground → Present your side → Propose compromise | Controversial topics with a hostile audience |
| **Toulmin** | Claim → Evidence → Warrant (underlying assumption) | Analytical arguments requiring logical rigor |
| **Problem-Solution** | Describe problem → Propose solution → Address objections | Policy arguments |
| **Cause-Effect** | Identify causes → Show effects → Argue for action | Causal claims |

> 🔑 On the AP exam, you need to recognize these structures in texts you READ and use effective structure in essays you WRITE.
      `
    },
    {
      id: 'elas1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In classical argument structure, the section where the writer addresses and counters opposing viewpoints is called the:',
            options: [
              'Narration',
              'Confirmation',
              'Refutation',
              'Exordium'
            ],
            correctAnswer: 2,
            explanation: 'The refutation (refutatio) is where the writer acknowledges opposing arguments and explains why they are wrong or less compelling. This is distinct from the confirmation, where the writer presents supporting evidence.'
          },
          {
            question: 'When writing to a hostile audience about a controversial topic, which argument structure is most appropriate?',
            options: [
              'Classical — lead with your strongest claims immediately',
              'Rogerian — find common ground before presenting your position',
              'Problem-Solution — describe the crisis in vivid, alarming detail',
              'No structure needed — just state your opinion'
            ],
            correctAnswer: 1,
            explanation: 'The Rogerian structure is designed for controversial topics. By finding common ground first, the writer reduces defensiveness in a hostile audience before carefully introducing their position. This builds trust before persuading.'
          }
        ]
      }
    },
    {
      id: 'elas1-content',
      type: 'text' as const,
      content: `
## The Toulmin Model in Detail

The **Toulmin model** breaks arguments into components that reveal the underlying logic:

| Component | Role | Example |
|-----------|------|---------|
| **Claim** | What you are arguing | "Schools should start later." |
| **Evidence** | Data supporting the claim | "Studies show teens perform better after 8:30 AM." |
| **Warrant** | The logical bridge connecting evidence to claim | "School schedules should align with student performance data." |
| **Backing** | Support for the warrant | "Educational research consistently shows policy should be evidence-based." |
| **Qualifier** | Limits the scope of the claim | "In most cases..." or "For high school students specifically..." |
| **Rebuttal** | Addresses exceptions or objections | "While earlier start times benefit working parents..." |

### Why Warrants Matter
The **warrant** is often unstated — it is the assumption connecting evidence to claim. Identifying unstated warrants is a key analytical skill.

**Example:**
- Claim: "We should ban soda in schools."
- Evidence: "Childhood obesity rates have doubled."
- Warrant (unstated): "Schools have a responsibility to promote student health. Soda contributes to obesity."

If the audience does not share the warrant, the argument fails — even if the evidence is strong.

## Transitions That Signal Structure
| Transition | Signals |
|-----------|---------|
| "Furthermore," "Moreover" | Additional support (confirmation) |
| "However," "On the other hand" | Counterargument or concession |
| "Therefore," "Consequently" | Conclusion from evidence |
| "Despite this," "Nevertheless" | Rebuttal after concession |
      `
    },
    {
      id: 'elas1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In the Toulmin model, the unstated assumption connecting evidence to a claim is called the _______.

2) The argument structure that begins by finding common ground with the audience is called _______.

3) A word like "however" or "on the other hand" signals a shift to a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['warrant', 'Rogerian', 'counterargument'],
        hint1: 'The logical bridge or underlying assumption.',
        hint2: 'Named after psychologist Carl Rogers.',
        hint3: 'The opposing side of the argument.',
        explanation: 'Warrant = unstated assumption. Rogerian = common ground first. "However" = counterargument.'
      }
    },
    {
      id: 'elas1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Argument Component** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"For high school students specifically, later start times improve outcomes." The phrase "for high school students specifically" is a ___',
            options: ['Qualifier', 'Warrant', 'Rebuttal', 'Concession']
          },
          {
            label: '"While earlier start times benefit working parents, research shows the academic gains for students far outweigh the scheduling inconvenience." This sentence is a ___',
            options: ['Concession and rebuttal', 'Claim and evidence', 'Thesis and qualifier', 'Narration and confirmation']
          },
          {
            label: '"Therefore, the school board should implement a 9:00 AM start time beginning next fall." This sentence is a ___',
            options: ['Policy claim', 'Value claim', 'Factual claim', 'Warrant']
          }
        ],
        correctAnswers: ['Qualifier', 'Concession and rebuttal', 'Policy claim'],
        hint1: '"Specifically" restricts the claim.',
        hint2: '"While...but" = concede then refute.',
        hint3: '"Should implement" = advocate action.',
        explanation: 'Qualifier limits scope. While/but = concession-rebuttal. "Should" = policy claim.'
      }
    },
    {
      id: 'elas1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Argument Structure

- For the **rhetorical analysis** essay, identify how the writer structures the argument
- For the **argument** essay, use clear structural organization (intro → body with evidence → counterargument → conclusion)
- Identify **warrants** in texts you analyze — what unstated assumptions is the writer relying on?
- Use **transitions** to make your argument structure explicit
- Always include **refutation** — addressing counterarguments shows sophistication
- The AP rubric values "a line of reasoning" — each paragraph should logically build on the previous one
      `
    },
    {
      id: 'elas1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student argues: "Electric cars reduce emissions (evidence). Therefore, everyone should buy one (claim)." What is the unstated warrant?',
            options: [
              'Electric cars produce no emissions at all across their full manufacturing and driving life',
              'Reducing emissions matters, and individual purchases can help achieve it',
              'Electric cars reduce maintenance costs and outperform most comparable gasoline cars',
              'No warrant is needed, because the evidence already states the claim directly and fully'
            ],
            correctAnswer: 1,
            explanation: 'The warrant is the unstated assumption bridging evidence to claim: that reducing emissions matters AND that consumer choices can meaningfully address the problem. Without these assumptions, the evidence does not logically lead to the claim.'
          },
          {
            question: 'A writer addressing gun control for a politically divided audience would most benefit from which structure?',
            options: [
              'Classical — state the thesis at once and argue it forcefully',
              'Rogerian — open with shared values such as safety before stating a position',
              'Problem-Solution — lead with the most alarming statistics',
              'Cause-Effect — trace the history of gun laws step by step'
            ],
            correctAnswer: 1,
            explanation: 'With a divided or hostile audience, leading with common ground (Rogerian structure) reduces defensiveness. Starting with shared values (safety, protecting families) before introducing policy positions makes the audience more receptive.'
          }
        ]
      }
    }
  ]
};
