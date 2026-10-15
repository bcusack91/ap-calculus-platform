export const cspComputingSystemsNetworksPart2Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn2-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 2 of 7 — Key Processes: Paths and Routing**

---

## Reading a Network

AP questions often describe a network as a list of direct connections. Here is one:

| Device | Directly connected to |
|--------|----------------------|
| A | B, C |
| B | A, D |
| C | A, D |
| D | B, C, E |
| E | D |

A **path** from A to E is a sequence of directly connected devices that starts at A and ends at E. This network has two paths that do not repeat a device:

- A → B → D → E
- A → C → D → E

**Routing** is finding one of these paths. On the Internet, routing is usually **dynamic**: it is not specified in advance, so if B fails, data can be sent through C instead.
      `
    },
    {
      id: "cspcsn2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "In the network above, which single device, if it failed, would leave A with no path to E?",
            options: [
              "B",
              "C",
              "D",
              "none of them"
            ],
            correctAnswer: 2,
            explanation: "Both paths from A to E pass through D, so D's failure cuts A off. If B or C fails, the other path still works."
          },
          {
            question: "Which statement about routing on the Internet is accurate?",
            options: [
              "Each route is fixed in advance by the sender before data is sent.",
              "Routes are found as data is sent rather than fixed beforehand.",
              "All the packets of one message usually follow exactly the same route.",
              "Routing is only needed in networks that contain one single device."
            ],
            correctAnswer: 1,
            explanation: "Routing on the Internet is usually dynamic, which lets data go around failed or busy devices."
          }
        ]
      }
    },
    {
      id: "cspcsn2-content",
      type: 'text' as const,
      content: `
## Bandwidth in Practice

**Bandwidth** is the maximum amount of data a network can send in a fixed amount of time, usually measured in **bits per second**. Remember that 1 byte = 8 bits.

| Bandwidth | Data sent in 1 second |
|-----------|----------------------|
| 8 bits per second | 1 byte |
| 10 megabits per second | 10 megabits = 1.25 megabytes |
| 100 megabits per second | 100 megabits = 12.5 megabytes |

To estimate transfer time, divide the amount of data (in bits) by the bandwidth (in bits per second). A 40-megabit file over a 10-megabit-per-second connection takes about 4 seconds.

## Systems Hide Their Details

A **computing system** is a group of computing devices and programs working together for a common purpose. A school's grading system, for example, includes servers, teachers' laptops, and the grading program itself.

The Internet uses **abstractions for routing and transmitting data**: a person sending a message does not need to know which path the packets take or which devices they pass through.
      `
    },
    {
      id: "cspcsn2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Bandwidth is usually measured in _______ per second.

2) Because routing on the Internet is not specified in advance, it is called _______ routing.

3) A 40-megabit file sent over a 10-megabit-per-second connection takes about _______ seconds.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["bits", "dynamic", "4"],
        hint1: "The smallest unit of data.",
        hint2: "The opposite of fixed or static.",
        hint3: "40 ÷ 10.",
        explanation: "Bandwidth is in bits per second. Internet routing is dynamic. 40 megabits ÷ 10 megabits per second = 4 seconds."
      }
    },
    {
      id: "cspcsn2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "If device B in the network above fails, A can still reach E through ___",
            options: ["C and D", "B and D", "B only", "no other path"]
          },
          {
            label: "Doubling a connection's bandwidth lets it send ___ data in the same amount of time",
            options: ["twice as much", "half as much", "the same amount of", "four times as much"]
          },
          {
            label: "A school's grading system, made of servers, laptops, and a grading program, is an example of a ___",
            options: ["computing system", "single computing device", "protocol", "packet"]
          }
        ],
        correctAnswers: ["C and D", "twice as much", "computing system"],
        hint1: "Use the second path.",
        hint2: "Bandwidth is data per unit of time.",
        hint3: "Devices and programs working together.",
        explanation: "The path A → C → D → E avoids B. Twice the bandwidth moves twice the data per second. Devices plus programs working together form a computing system."
      }
    },
    {
      id: "cspcsn2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Paths and Routing

- List every path from sender to receiver without repeating a device.
- A device or connection that appears on **every** path is a single point of failure.
- Internet routing is dynamic: data goes around failures when another path exists.
- Transfer time ≈ data size in bits ÷ bandwidth in bits per second.
      `
    },
    {
      id: "cspcsn2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Devices P, Q, R, and S are connected as P–Q, Q–R, Q–S, and R–S. Which single device, if it failed, would stop P from communicating with S?",
            options: [
              "Q",
              "R",
              "either Q or R",
              "no single device"
            ],
            correctAnswer: 0,
            explanation: "P's only connection is to Q, so every path from P to S passes through Q. If R fails, the direct Q–S connection still works."
          },
          {
            question: "An 800-megabit video file is sent over a connection with a bandwidth of 100 megabits per second. Ignoring other delays, about how long does the transfer take?",
            options: [
              "0.8 seconds",
              "8 seconds",
              "80 seconds",
              "100 seconds"
            ],
            correctAnswer: 1,
            explanation: "800 megabits ÷ 100 megabits per second = 8 seconds."
          }
        ]
      }
    }
  ]
};
