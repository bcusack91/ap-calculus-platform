export const cspFaultToleranceSecurityPart2Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts2-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 2 of 7 — Key Processes**

---

## Fault Tolerance: Working Despite Failures

When a system can support failures and still continue to function, it is **fault-tolerant**. The key idea is **redundancy**: the inclusion of extra components that can be used to mitigate failure if other components fail.

| Redundant component | How it tolerates faults |
|-----------|------------------------|
| **Extra paths** | If one connection fails, data take another route. |
| **Extra servers** | If one server crashes, another keeps the service running. |
| **Extra copies of data** | If one drive fails, a backup copy on another device survives. |

Redundancy usually **requires additional resources** (more devices, more connections, more cost), but it provides the benefit of fault tolerance.
      `
    },
    {
      id: "cspfts2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A web service runs on 3 servers. One server crashes, and users keep working without noticing. This demonstrates ___",
            options: [
              "faster processing, since three servers run each request three times as fast",
              "fault tolerance, since redundant servers keep everything running",
              "encryption, since the crashed server's data is hidden from attackers",
              "compression, since the crashed server's files are stored in fewer bits"
            ],
            correctAnswer: 1,
            explanation: "Redundant servers mean the failure of one does not stop the service, which is fault tolerance."
          },
          {
            question: "Why does adding redundancy to a system usually cost more?",
            options: [
              "It requires additional components, such as extra devices or connections.",
              "It requires every device in the system to be replaced by a new model.",
              "It slows every request down, so the system must buy more bandwidth.",
              "It prevents the system from using open protocols, so licenses are needed."
            ],
            correctAnswer: 0,
            explanation: "Redundancy means extra components, which use additional resources; the benefit is fault tolerance."
          }
        ]
      }
    },
    {
      id: "cspfts2-content",
      type: 'text' as const,
      content: `
## Why The Internet Survives Failures

The Internet has been **engineered to be fault-tolerant**, with abstractions for routing and transmitting data. Elements of complex systems fail at unexpected times, often **in groups** (a storm can knock out several connections at once), and fault tolerance lets users keep using the network.

| Failure | What the redundancy does |
|---------|-----------|
| A cable is cut | Data are sent along a different route, if one exists. |
| A server crashes | Another server handles the requests. |
| A disk fails | A backup copy on another device is used. |

The redundancy of routing options between two points also **increases the reliability of the Internet** and helps it **scale** to more devices and more people.

## Identifying Vulnerabilities

To find where a system can fail, look for a component that **everything depends on**.

Network: Lab–Hub, Library–Hub, Office–Hub, Hub–Internet.

- Every device reaches the Internet through **Hub**, so Hub is a single point of failure.
- The Hub–Internet connection is also a single point of failure.
- Adding a second connection from the Library straight to the Internet gives the Library a path that does not depend on the Hub.
      `
    },
    {
      id: "cspfts2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Including extra components so a system keeps working when others fail is called _______.

2) A component that every path depends on is called a single point of _______.

3) A system that can support failures and still function is called fault-_______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["redundancy", "failure", "tolerant"],
        hint1: "Backup parts.",
        hint2: "If it breaks, everything breaks.",
        hint3: "It tolerates faults.",
        explanation: "Redundancy provides backups. A component on every path is a single point of failure. Systems that survive failures are fault-tolerant."
      }
    },
    {
      id: "cspfts2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Parts of complex systems often fail ___",
            options: ["at unexpected times, often in groups", "one at a time, on a predictable schedule", "never, as long as they are new", "only when a user makes a mistake"]
          },
          {
            label: "Adding a second path between two routers ___",
            options: ["adds redundancy at extra cost", "removes the need for routing", "lowers the network's fault tolerance", "costs nothing and changes nothing"]
          },
          {
            label: "If a connection on the Internet fails, later data are ___",
            options: ["sent along a different route if possible", "lost until the connection is repaired", "returned to the sender to try later", "held at the failed connection forever"]
          }
        ],
        correctAnswers: ["at unexpected times, often in groups", "adds redundancy at extra cost", "sent along a different route if possible"],
        hint1: "Failures are hard to predict.",
        hint2: "Extra components are not free.",
        hint3: "Routing is dynamic.",
        explanation: "Failures are unpredictable and often come in groups. Extra paths add redundancy but cost resources. The Internet reroutes around failures when it can."
      }
    },
    {
      id: "cspfts2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Fault Tolerance

- Redundancy (extra components) = the canonical fault-tolerance answer.
- Redundancy costs additional resources; its benefit is fault tolerance.
- To identify a vulnerability, find a component that every path or process depends on.
- The Internet itself is a giant fault-tolerant system.
      `
    },
    {
      id: "cspfts2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school network connects the Lab, Library, and Office to one Hub, and the Hub has the school's only connection to the Internet. Which change most improves fault tolerance?",
            options: [
              "Replace the Hub with a newer model with a faster Internet connection.",
              "Add a second Internet connection that does not go through the Hub.",
              "Disconnect the Lab so that the Hub carries less traffic each day.",
              "Run a longer cable between the Lab and the Hub than the current one."
            ],
            correctAnswer: 1,
            explanation: "A second path that bypasses the Hub removes the single point of failure; a faster Hub can still fail."
          },
          {
            question: "Which is the best example of a vulnerability to failure in a system?",
            options: [
              "Two separate cables connect the same two school buildings.",
              "Every path from the school to the Internet passes through one router.",
              "Files are copied each night to a backup drive in another room.",
              "Each classroom connects to two different switches in the building."
            ],
            correctAnswer: 1,
            explanation: "A router on every path is a single point of failure; the other choices describe redundancy."
          }
        ]
      }
    }
  ]
};
