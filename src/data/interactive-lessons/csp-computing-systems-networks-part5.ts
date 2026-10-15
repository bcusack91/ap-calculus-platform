export const cspComputingSystemsNetworksPart5Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn5-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 5 of 7 — Parallel and Distributed Computing**

---

## Three Computational Models

| Model | Meaning | How long it takes |
|-------|---------|-------------------|
| **Sequential** | Operations are performed in order, one at a time. | The **sum** of all its steps. |
| **Parallel** | The program is broken into smaller sequential operations, some of which run at the same time. | Its **sequential tasks plus the longest of its parallel tasks**. |
| **Distributed** | Multiple devices are used to run a program. | Depends on how the work is split among the devices. |

We compare the efficiency of solutions by comparing the **time** each takes to do the same task. The **speedup** of a parallel solution is:

**speedup = time to complete the task sequentially ÷ time to complete it in parallel**
      `
    },
    {
      id: "cspcsn5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Three independent tasks take 30, 40, and 50 seconds. How long does it take to run all of them sequentially on one processor?",
            options: [
              "40 seconds",
              "50 seconds",
              "60 seconds",
              "120 seconds"
            ],
            correctAnswer: 3,
            explanation: "A sequential solution takes as long as the sum of its steps: 30 + 40 + 50 = 120 seconds."
          },
          {
            question: "The same three tasks (30, 40, and 50 seconds) run in parallel on two processors, and each task must stay on one processor. What is the minimum total time?",
            options: [
              "50 seconds",
              "60 seconds",
              "70 seconds",
              "120 seconds"
            ],
            correctAnswer: 2,
            explanation: "Put the 50-second task on one processor and the 30- and 40-second tasks on the other (70 seconds). The job finishes when the slower processor does, at 70 seconds."
          }
        ]
      }
    },
    {
      id: "cspcsn5-content",
      type: 'text' as const,
      content: `
## Worked Example: The Sequential Portion Limits Speedup

A program must first run a 20-second setup step (sequential), then four independent 10-second tasks.

| Processors | Time | Speedup |
|-----------|------|---------|
| 1 (sequential) | 20 + 10 + 10 + 10 + 10 = 60 s | — |
| 2 | 20 + (10 + 10) = 40 s | 60 ÷ 40 = 1.5 |
| 4 | 20 + 10 = 30 s | 60 ÷ 30 = 2 |
| 8 | 20 + 10 = 30 s | still 2 |

Going from 4 to 8 processors does not help: there are only four parallel tasks, and the 20-second setup can never be split. **When increasing parallel computing in a solution, efficiency is still limited by the sequential portion.** At some point, adding parallel portions no longer meaningfully increases efficiency.

## Benefits of Parallel and Distributed Computing

- Parallel solutions can **scale more effectively** than sequential ones.
- Distributed computing allows problems to be solved that **could not be solved on a single computer** because of the processing time or storage needed.
- Distributed computing allows much larger problems to be solved **more quickly** than a single computer could.
      `
    },
    {
      id: "cspcsn5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Speedup equals the sequential time divided by the _______ time.

2) In the worked example, the speedup with 4 processors is _______.

3) Using multiple devices to run a program is called _______ computing.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["parallel", "2", "distributed"],
        hint1: "The time when tasks run at the same time.",
        hint2: "60 ÷ 30.",
        hint3: "The work is spread across devices.",
        explanation: "Speedup = sequential ÷ parallel. 60 ÷ 30 = 2. Many devices running one program is distributed computing."
      }
    },
    {
      id: "cspcsn5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A parallel solution takes as long as its sequential tasks plus ___",
            options: ["its longest parallel task", "its shortest parallel task", "the sum of its parallel tasks", "the number of processors used"]
          },
          {
            label: "As more processors are added, a parallel solution's efficiency is still limited by ___",
            options: ["its sequential portion", "its network bandwidth", "its file's metadata", "the size of each packet"]
          },
          {
            label: "A problem that needs more storage than any single computer has is best solved with ___ computing",
            options: ["distributed", "sequential", "lossy", "single-device"]
          }
        ],
        correctAnswers: ["its longest parallel task", "its sequential portion", "distributed"],
        hint1: "Parallel tasks finish when the slowest one does.",
        hint2: "Some work can never be split.",
        hint3: "Spread the data across many devices.",
        explanation: "Parallel time = sequential tasks + longest parallel task. The sequential portion caps the speedup. Distributed computing handles problems too big for one computer."
      }
    },
    {
      id: "cspcsn5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Parallel Computing

- Sequential time = sum of every task.
- Parallel time = sequential tasks + the longest parallel task (on its processor).
- Speedup = sequential time ÷ parallel time.
- Extra processors stop helping once the sequential portion dominates or there are no more tasks to split.
      `
    },
    {
      id: "cspcsn5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A job has a 10-second step that must run first, followed by three independent tasks of 20, 30, and 15 seconds. With three processors, what is the minimum time for the whole job?",
            options: [
              "30 seconds",
              "40 seconds",
              "65 seconds",
              "75 seconds"
            ],
            correctAnswer: 1,
            explanation: "The 10-second sequential step runs first; then the three tasks run at once and finish with the longest (30 seconds): 10 + 30 = 40 seconds."
          },
          {
            question: "A job takes 90 seconds sequentially and 30 seconds with a parallel solution. What is the speedup?",
            options: [
              "1/3",
              "3",
              "60",
              "120"
            ],
            correctAnswer: 1,
            explanation: "Speedup = sequential time ÷ parallel time = 90 ÷ 30 = 3."
          }
        ]
      }
    }
  ]
};
