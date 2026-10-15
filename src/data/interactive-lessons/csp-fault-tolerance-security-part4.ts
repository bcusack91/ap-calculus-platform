export const cspFaultToleranceSecurityPart4Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts4-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 4 of 7 — Connections: Parallel and Distributed Computing**

---

## Many Computers, One Problem

Fault tolerance uses extra devices so a system survives failures. The same idea of **many devices working together** also makes computing faster and lets us solve bigger problems.

| Model | Meaning |
|-------|---------|
| **Sequential computing** | Operations are performed in order, one at a time. |
| **Parallel computing** | The program is broken into multiple smaller sequential operations, some of which are performed at the same time. |
| **Distributed computing** | Multiple devices are used to run a program. |
      `
    },
    {
      id: "cspfts4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A breach exposing children's data has primarily ___",
            options: [
              "no impact, since children's data is automatically anonymized by data-protection laws.",
              "serious privacy and safety consequences for vulnerable users and their families.",
              "only financial costs for the company, since children have no credit to steal.",
              "little lasting effect, since children's data changes as they grow older."
            ],
            correctAnswer: 1,
            explanation: "Personally identifiable information can be used to stalk or steal the identity of a person, so breaches harm real people."
          },
          {
            question: "A system that crashes whenever any single component fails is the OPPOSITE of ___",
            options: [
              "scalable — handling more users by adding servers as demand grows",
              "fault-tolerant — continuing to run even when some parts break",
              "secure — keeping data safe from attackers who try to break in",
              "efficient — finishing tasks using as little time and memory as possible"
            ],
            correctAnswer: 1,
            explanation: "A fault-tolerant system supports failures and still continues to function."
          }
        ]
      }
    },
    {
      id: "cspfts4-content",
      type: 'text' as const,
      content: `
## How Long Does Each Solution Take?

We compare the efficiency of solutions by comparing the **time** they take to perform the same task.

- A **sequential** solution takes as long as the **sum** of all its steps.
- A **parallel** solution takes as long as its **sequential tasks plus the longest of its parallel tasks**.

**Example:** a teacher's grading program must load a class list (2 minutes, sequential), then grade three sections that take 4, 7, and 5 minutes.

| Solution | Time |
|---------|------|
| Sequential | 2 + 4 + 7 + 5 = 18 minutes |
| Parallel (three processors, one section each) | 2 + 7 = 9 minutes |

## Why Distributed Computing Matters

- Distributed computing allows problems to be solved that **could not be solved on a single computer**, because of either the processing time or the storage needed.
- It also allows much larger problems to be solved **more quickly** than a single computer could.
- Solutions that use parallel computing can **scale more effectively** than sequential solutions.

Examples: a weather model split across thousands of computers; a science project that sends small pieces of a huge data set to volunteers' computers.
      `
    },
    {
      id: "cspfts4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Performing operations in order, one at a time, is called _______ computing.

2) Using multiple devices to run a program is called _______ computing.

3) Independent tasks of 4, 7, and 5 minutes run sequentially take _______ minutes.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["sequential", "distributed", "16"],
        hint1: "In sequence.",
        hint2: "The work is spread out across devices.",
        hint3: "Add them up.",
        explanation: "One at a time = sequential. Many devices = distributed. 4 + 7 + 5 = 16 minutes."
      }
    },
    {
      id: "cspfts4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A parallel solution takes as long as its sequential tasks plus ___",
            options: ["its longest parallel task", "its shortest parallel task", "all its parallel tasks added", "one second per processor"]
          },
          {
            label: "Distributed computing can solve problems a single computer cannot because of their ___",
            options: ["processing time or storage needs", "need for encryption keys", "use of open protocols", "number of packets"]
          },
          {
            label: "Compared with sequential solutions, parallel solutions can ___",
            options: ["scale more effectively", "never finish sooner", "only run on one device", "skip every sequential step"]
          }
        ],
        correctAnswers: ["its longest parallel task", "processing time or storage needs", "scale more effectively"],
        hint1: "Parallel tasks finish when the slowest one does.",
        hint2: "Too slow or too big for one machine.",
        hint3: "More processors can share growing work.",
        explanation: "Parallel time = sequential part + longest parallel task. Distributed computing handles problems too slow or too large for one computer. Parallel solutions scale better."
      }
    },
    {
      id: "cspfts4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Parallel and Distributed

- Sequential time = sum of all steps.
- Parallel time = sequential tasks + the longest parallel task.
- Distributed computing = many devices; it handles problems too slow or too large for one computer.
- Read carefully: which steps MUST run in order, and which can run at the same time?
      `
    },
    {
      id: "cspfts4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Four independent tasks take 10, 20, 30, and 40 seconds. They run on two processors, and each task must stay on one processor. What is the minimum time to finish all four?",
            options: [
              "40 seconds",
              "50 seconds",
              "60 seconds",
              "100 seconds"
            ],
            correctAnswer: 1,
            explanation: "Pair 40 with 10 and 30 with 20: each processor works 50 seconds. No split can do better, since the total is 100 seconds across two processors."
          },
          {
            question: "A weather agency's simulation needs more memory than any single computer it owns. Which approach makes running it possible?",
            options: [
              "Sequential computing on the agency's fastest computer.",
              "Distributed computing across many computers at once.",
              "Lossy compression of the simulation's program code.",
              "Running the simulation twice on one computer to check it."
            ],
            correctAnswer: 1,
            explanation: "Distributed computing allows problems to be solved that could not be solved on a single computer because of storage needs."
          }
        ]
      }
    }
  ]
};
