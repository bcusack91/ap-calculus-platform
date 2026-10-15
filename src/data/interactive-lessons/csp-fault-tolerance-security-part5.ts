export const cspFaultToleranceSecurityPart5Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts5-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 5 of 7 — Speedup and the Limits of Parallelism**

---

## Measuring Speedup

The **speedup** of a parallel solution is measured as:

**speedup = time to complete the task sequentially ÷ time to complete the task in parallel**

| Sequential time | Parallel time | Speedup |
|----------------|---------------|---------|
| 60 s | 30 s | 2 |
| 90 s | 30 s | 3 |
| 100 s | 80 s | 1.25 |

A parallel computing solution consists of a **parallel portion** and a **sequential portion**. Only the parallel portion gets faster when you add processors.
      `
    },
    {
      id: "cspfts5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A task takes 120 seconds sequentially and 40 seconds with a parallel solution. What is the speedup?",
            options: [
              "1/3",
              "3",
              "80",
              "160"
            ],
            correctAnswer: 1,
            explanation: "Speedup = sequential time ÷ parallel time = 120 ÷ 40 = 3."
          },
          {
            question: "Why does the speedup of a parallel solution eventually level off as more processors are added?",
            options: [
              "Each added processor slows down all of the other processors.",
              "The sequential portion still has to run one step at a time.",
              "Parallel solutions cannot use more than two processors at once.",
              "Adding processors increases the amount of input data to process."
            ],
            correctAnswer: 1,
            explanation: "Efficiency is limited by the sequential portion, so at some point adding parallel portions no longer meaningfully increases efficiency."
          }
        ]
      }
    },
    {
      id: "cspfts5-content",
      type: 'text' as const,
      content: `
## Worked Example: The Sequential Portion Sets a Floor

A program has a **30-second sequential portion** and **60 seconds of work** that can be split evenly across processors.

| Processors | Time | Speedup |
|-----------|------|---------|
| 1 | 30 + 60 = 90 s | 1 |
| 2 | 30 + 30 = 60 s | 1.5 |
| 3 | 30 + 20 = 50 s | 1.8 |
| 6 | 30 + 10 = 40 s | 2.25 |
| 60 | 30 + 1 = 31 s | about 2.9 |

No matter how many processors are added, the program can never finish in less than **30 seconds**, so the speedup can never reach 90 ÷ 30 = 3. When increasing the use of parallel computing, **the efficiency of the solution is still limited by the sequential portion**.

## Choosing a Model

| Situation | Good fit |
|-----------|----------|
| A small task with steps that depend on each other | Sequential |
| Many independent tasks of similar size | Parallel |
| A problem too slow or too large for one computer | Distributed |
      `
    },
    {
      id: "cspfts5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In the worked example, the speedup with 2 processors is _______.

2) No matter how many processors are added, the worked example can never finish in less than _______ seconds.

3) Speedup equals the sequential time divided by the _______ time.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1.5", "30", "parallel"],
        hint1: "90 ÷ 60.",
        hint2: "The sequential portion.",
        hint3: "The time when tasks run at the same time.",
        explanation: "90 ÷ 60 = 1.5. The 30-second sequential portion can never be split. Speedup = sequential ÷ parallel."
      }
    },
    {
      id: "cspfts5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Speedup is calculated as ___",
            options: ["sequential time ÷ parallel time", "parallel time ÷ sequential time", "sequential time − parallel time", "processors × parallel time"]
          },
          {
            label: "A task that is entirely sequential gets a speedup of ___ from extra processors",
            options: ["1, meaning no improvement", "2, for every added processor", "the number of processors", "0, meaning it stops"]
          },
          {
            label: "As more processors are added, a parallel solution's efficiency is still limited by ___",
            options: ["its sequential portion", "the number of packets", "the file's metadata", "its encryption key"]
          }
        ],
        correctAnswers: ["sequential time ÷ parallel time", "1, meaning no improvement", "its sequential portion"],
        hint1: "Old time over new time.",
        hint2: "Nothing can run at the same time.",
        hint3: "The part that can't be split.",
        explanation: "Speedup = sequential ÷ parallel. A fully sequential task takes the same time however many processors there are. The sequential portion limits efficiency."
      }
    },
    {
      id: "cspfts5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Speedup

- Speedup = sequential time ÷ parallel time (bigger is better; 1 means no gain).
- Parallel time = sequential portion + longest parallel task.
- The sequential portion sets a floor on the time and a ceiling on the speedup.
- "Will doubling the processors double the speed?" → only if there is no sequential portion and the work splits evenly.
      `
    },
    {
      id: "cspfts5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program runs a 10-second sequential setup, then 8 independent tasks that take 5 seconds each. With 4 processors sharing the tasks evenly, how long does the program take?",
            options: [
              "15 seconds",
              "20 seconds",
              "30 seconds",
              "50 seconds"
            ],
            correctAnswer: 1,
            explanation: "Each processor runs 2 tasks (10 seconds) after the 10-second setup: 10 + 10 = 20 seconds. Sequentially it would take 10 + 40 = 50 seconds."
          },
          {
            question: "A programmer says, \"If I double the number of processors, my program will always run twice as fast.\" Which is the best response?",
            options: [
              "Yes; the speedup always equals the number of processors used.",
              "Not always; the sequential portion does not speed up at all.",
              "No; adding processors always makes a program run more slowly.",
              "Sometimes; it depends only on how fast each processor runs."
            ],
            correctAnswer: 1,
            explanation: "Only the parallel portion benefits from more processors, so the sequential portion limits the speedup."
          }
        ]
      }
    }
  ]
};
