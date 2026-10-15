export const cspComputingSystemsNetworksPart7Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn7-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Computing Systems & Networks
      `
    },
    {
      id: "cspcsn7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A \"computing system\" in CSP is ___",
            options: [
              "only the software programs installed on one device.",
              "a group of devices and programs working toward a common purpose.",
              "only the physical hardware inside a single computer's case.",
              "only the network links that connect separate devices."
            ],
            correctAnswer: 1,
            explanation: "A computing system is a group of computing devices and programs working together for a common purpose."
          },
          {
            question: "A protocol is ___",
            options: [
              "a program that sends data across a network.",
              "an agreed set of rules for how parties communicate.",
              "a physical cable standard for linking routers.",
              "an encryption method that protects transmitted data."
            ],
            correctAnswer: 1,
            explanation: "Protocols = agreed rules."
          }
        ]
      }
    },
    {
      id: "cspcsn7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Computing device | A physical artifact that can run a program. |
| Computing system | Devices and programs working together for a common purpose. |
| Network | Interconnected devices that can send or receive data. |
| Path / routing | Directly connected devices from sender to receiver / finding a path. |
| Bandwidth | Maximum data sent in a fixed time, in bits per second. |
| Packet | A chunk of data plus metadata for routing and reassembly. |
| IP, TCP, UDP / HTTP | Common Internet protocols / the Web's protocol. |
| Redundancy / fault tolerance | Extra components / keeps working when parts fail. |
| Speedup | Sequential time ÷ parallel time. |
| Digital divide | Unequal access to devices and the Internet. |

## Common Pitfalls

- Assuming all packets take the same path or arrive in order.
- Treating the Internet and the World Wide Web as the same thing.
- Mixing up bits and bytes in bandwidth questions.
- Adding the parallel tasks instead of taking the longest one.
- Forgetting that redundancy costs extra resources.
      `
    },
    {
      id: "cspcsn7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A reliable, in-order transport protocol is _______.

2) The process of finding a path from sender to receiver is called _______.

3) Unequal access to computing and connectivity is called the digital _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["TCP", "routing", "divide"],
        hint1: "Reliable transport.",
        hint2: "Finding the route.",
        hint3: "Equity gap.",
        explanation: "TCP / routing / digital divide."
      }
    },
    {
      id: "cspcsn7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Having more than one path between devices makes a network ___",
            options: ["more fault-tolerant", "less fault-tolerant", "unable to route data", "slower in every case"]
          },
          {
            label: "A job with a 10-second sequential step and parallel tasks of 5 and 8 seconds takes at least ___",
            options: ["18 seconds", "23 seconds", "13 seconds", "8 seconds"]
          },
          {
            label: "A protocol like HTTP is ___",
            options: ["an agreed set of rules for client / server communication", "a hardware device that forwards packets between networks", "a naming system that maps domain names to IP addresses", "a programming language used to build web pages"]
          }
        ],
        correctAnswers: ["more fault-tolerant", "18 seconds", "an agreed set of rules for client / server communication"],
        hint1: "Redundant paths.",
        hint2: "Sequential part + longest parallel task.",
        hint3: "Rules of communication.",
        explanation: "Redundant paths add fault tolerance. 10 + 8 = 18 seconds. Protocols are agreed-upon rules."
      }
    },
    {
      id: "cspcsn7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Know the definitions: device, system, network, path, routing, bandwidth, protocol.
- Packets, IP/TCP/UDP, and HTTP for the Web.
- Fault tolerance through redundancy; find single points of failure.
- Parallel time, speedup, and the limit set by the sequential portion.
- Digital divide framing for access questions.
      `
    },
    {
      id: "cspcsn7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A library wants to serve students in a low-bandwidth area with educational videos. The most CSP-aligned strategy is ___",
            options: [
              "stream original-quality 4K video to every student regardless of their connection.",
              "pre-download lower-resolution lossy versions and serve them from a community device.",
              "serve only lossless video files so quality is preserved for everyone.",
              "serve uncompressed videos and rely on the network's full capacity."
            ],
            correctAnswer: 1,
            explanation: "Smaller lossy versions stored locally reduce how much bandwidth each student needs, which helps where access is limited."
          },
          {
            question: "A research group must analyze a data set too large to store on any one of its computers. Which approach best fits?",
            options: [
              "distribute the data and processing across many computers.",
              "run the analysis sequentially on the group's fastest computer.",
              "delete most of the data so that it fits on a single computer.",
              "compress the data with a lossy method and analyze the result."
            ],
            correctAnswer: 0,
            explanation: "Distributed computing allows problems to be solved that could not be solved on a single computer because of processing time or storage needs."
          }
        ]
      }
    }
  ]
};
