export const cspComputingSystemsNetworksPart6Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn6-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 6 of 7 — Problem-Solving Workshop**

---

## Systems & Networks Workshop

Three kinds of calculation show up again and again: transfer time from bandwidth, paths and failure points in a network, and the time of a parallel solution.
      `
    },
    {
      id: "cspcsn6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Two computers in the same room transfer a 10 GB file at 100 Mbps. Approximate transfer time?",
            options: [
              "About 13 minutes",
              "About 100 seconds",
              "About 2 hours",
              "About 1 day"
            ],
            correctAnswer: 0,
            explanation: "10 GB = 80,000 megabits, and 80,000 ÷ 100 Mbps = 800 s, about 13 minutes. Reading 100 Mbps as 100 megabytes per second gives 100 s, the classic bits-versus-bytes mistake."
          },
          {
            question: "Devices are connected as W–X, W–Y, X–Z, Y–Z, and Z–V. How many different paths from W to V do not repeat a device?",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            correctAnswer: 1,
            explanation: "W → X → Z → V and W → Y → Z → V. Every path must pass through Z to reach V."
          }
        ]
      }
    },
    {
      id: "cspcsn6-content",
      type: 'text' as const,
      content: `
## Worked: Estimate A Transfer

1 byte = 8 bits. 1 GB = 8 Gb. At 100 Mbps you transfer 100 Mb / second = ~12.5 MB / second. So 10 GB ≈ 800 seconds.

## Worked: Paths And Failure Points

Network: W–X, W–Y, X–Z, Y–Z, Z–V.

| Question | Answer |
|---------|--------|
| Paths from W to V | W→X→Z→V and W→Y→Z→V |
| Does losing X stop W from reaching V? | No, use W→Y→Z→V |
| Does losing Z stop W from reaching V? | Yes, Z is on every path |
| How to remove that weak point? | Add a connection that bypasses Z, such as Y–V |

## Worked: Time A Parallel Solution

Tasks of 8, 6, and 4 seconds, all independent:

| Setup | Time |
|------|------|
| Sequential | 8 + 6 + 4 = 18 s |
| 3 processors, one task each | longest task = 8 s |
| 2 processors: {8} and {6, 4} | larger of 8 and 10 = 10 s |

Speedup with 3 processors = 18 ÷ 8 = 2.25.
      `
    },
    {
      id: "cspcsn6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Transferring 1 GB at 100 Mbps takes about _______ seconds.

2) In the worked network, the one device whose failure cuts W off from V is _______.

3) Running independent tasks of 8, 6, and 4 seconds sequentially takes _______ seconds.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["80", "Z", "18"],
        hint1: "8 Gb / 100 Mb/s.",
        hint2: "Which device is on every path?",
        hint3: "Add them up.",
        explanation: "1 GB = 8,000 Mb, and 8,000 ÷ 100 = 80 s. Z lies on every path from W to V. Sequential time is the sum: 18 s."
      }
    },
    {
      id: "cspcsn6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A network in which every pair of devices has at least two separate paths is more ___",
            options: ["fault-tolerant", "lossy", "sequential", "centralized"]
          },
          {
            label: "In the worked network, if X fails, W still reaches V through ___",
            options: ["Y and Z", "X and Z", "Y only", "no path"]
          },
          {
            label: "Adding a fifth processor to a job that has only four parallel tasks will ___",
            options: ["not reduce the time further", "cut the time by one fifth", "double the speedup", "remove the sequential portion"]
          }
        ],
        correctAnswers: ["fault-tolerant", "Y and Z", "not reduce the time further"],
        hint1: "Redundant paths.",
        hint2: "Use the other branch.",
        hint3: "There is no fifth task to run.",
        explanation: "Redundant paths make a network fault-tolerant. W → Y → Z → V avoids X. With only four tasks, a fifth processor has nothing to do."
      }
    },
    {
      id: "cspcsn6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Transfer time ≈ bits ÷ bits per second (watch bits vs. bytes).
- List every path; a device on all of them is a single point of failure.
- Sequential time = sum; parallel time = sequential part + longest parallel task.
- Speedup = sequential ÷ parallel, and it stops growing once the sequential part dominates.
      `
    },
    {
      id: "cspcsn6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Four devices are connected in a ring: A–B, B–C, C–D, and D–A. What is the greatest number of connections that can fail, in any combination, with every device still able to reach every other device?",
            options: [
              "0",
              "1",
              "2",
              "3"
            ],
            correctAnswer: 1,
            explanation: "Losing any one connection leaves a line that still links all four devices. Losing two can split the ring, for example A–B and C–D cut {A, D} off from {B, C}."
          },
          {
            question: "A job takes 60 seconds sequentially, 35 seconds on 2 processors, and 30 seconds on 4 processors. What best explains why the extra processors barely help?",
            options: [
              "Each processor added makes every task run more slowly.",
              "A sequential portion of the job cannot be split up.",
              "Parallel solutions always take longer than sequential ones.",
              "The network's bandwidth is too low for four processors."
            ],
            correctAnswer: 1,
            explanation: "The efficiency of a parallel solution is limited by its sequential portion, so adding processors eventually stops helping."
          }
        ]
      }
    }
  ]
};
