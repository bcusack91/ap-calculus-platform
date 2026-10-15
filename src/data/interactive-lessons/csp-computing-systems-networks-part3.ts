export const cspComputingSystemsNetworksPart3Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn3-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 3 of 7 — Patterns & Examples: Packets and Protocols**

---

## How The Internet Moves Data

Data is split into packets, and each packet finds its own way through the network to the destination.

| Concept | Effect |
|---------|--------|
| **Packet** | A chunk of data plus metadata for routing and reassembly. |
| **Router** | A computing device that forwards packets toward their destination. |
| **Path** | Packets may take different routes to the same destination. |
| **Protocol** | Agreed-upon rules for how data is formatted and exchanged. |
      `
    },
    {
      id: "cspcsn3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Two packets in the same conversation may take ___",
            options: [
              "identical paths every single time, in the order the sender originally produced them.",
              "different paths through the network and arrive in a different order than sent.",
              "one fixed circuit reserved for the whole conversation before any data is sent.",
              "only the path chosen by the sender, in the order the sender picks for them."
            ],
            correctAnswer: 1,
            explanation: "Each packet is routed on its own, so packets can take different paths and arrive out of order."
          },
          {
            question: "A router decides where to forward a packet based mainly on ___",
            options: [
              "the chunk of data inside, after reading the message the packet carries.",
              "the destination information stored in the packet's metadata.",
              "the sender's choice of which neighboring router should be used next.",
              "the size of the packet, sending larger packets along faster links."
            ],
            correctAnswer: 1,
            explanation: "Packets carry metadata, including the destination, that devices use to route them."
          }
        ]
      }
    },
    {
      id: "cspcsn3-content",
      type: 'text' as const,
      content: `
## Common Internet Protocols

The CED names **IP**, **TCP**, and **UDP** as common protocols on the Internet, and **HTTP** as the protocol of the World Wide Web.

| Protocol | Job |
|----------|-----|
| **IP** | Addresses packets and routes them between networks. |
| **TCP** | Makes sure every packet arrives, asks for missing ones to be resent, and puts the data back in order. |
| **UDP** | Sends packets without checking that they arrive and without guaranteeing order; quicker, but some data may be lost. |
| **HTTP** | Requests and delivers Web pages and files. |

Because these protocols are **open** (nonproprietary), anyone can build a device or program that connects to the Internet.

## The Internet vs. the World Wide Web

| | Internet | World Wide Web |
|---|----------|----------------|
| What it is | A network of interconnected networks | A system of linked pages, programs, and files |
| Relationship | Carries data for many uses (email, video calls, games, the Web) | **Uses** the Internet |
| Protocol | IP, TCP, UDP | HTTP |
      `
    },
    {
      id: "cspcsn3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Packets contain a chunk of data plus _______ used for routing and reassembly.

2) The protocol that makes sure every packet arrives and puts the data back in order is _______.

3) The protocol used by the World Wide Web is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["metadata", "TCP", "HTTP"],
        hint1: "Data about the data.",
        hint2: "The reliable one of TCP and UDP.",
        hint3: "Hypertext Transfer Protocol.",
        explanation: "Packets carry metadata. TCP provides reliable, in-order delivery. HTTP is the Web's protocol."
      }
    },
    {
      id: "cspcsn3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "For a live video call where a few lost packets are acceptable, a reasonable protocol is ___",
            options: ["UDP, which does not resend lost packets", "TCP, which waits to resend each lost packet", "HTTP, which links Web pages to each other", "IP alone, which ignores each destination"]
          },
          {
            label: "For downloading a software update, the right protocol is ___",
            options: ["TCP (reliable, in order)", "UDP (fast, no resends)", "HTTP (Web pages only)", "none (packets are optional)"]
          },
          {
            label: "The World Wide Web is ___",
            options: ["a system of linked pages, programs, and files", "another name for the entire Internet", "the cables and routers that connect networks", "a protocol used to route packets"]
          }
        ],
        correctAnswers: ["UDP, which does not resend lost packets", "TCP (reliable, in order)", "a system of linked pages, programs, and files"],
        hint1: "Speed matters more than every frame.",
        hint2: "Every byte must arrive.",
        hint3: "It runs on the Internet.",
        explanation: "UDP suits real-time data where a little loss is fine. TCP suits files that must arrive complete. The Web is linked pages, programs, and files that use the Internet."
      }
    },
    {
      id: "cspcsn3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Packets and Protocols

- Packets travel independently and may arrive in order, out of order, or not at all.
- IP, TCP, and UDP are common Internet protocols; HTTP is the Web's protocol.
- The Web uses the Internet; they are not the same thing.
- Open protocols make it easy to connect new devices.
      `
    },
    {
      id: "cspcsn3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A student says, \"The Internet and the World Wide Web are the same thing.\" Which is the best correction?",
            options: [
              "The Web is the network of networks, and the Internet runs on it.",
              "The Web is a system of linked pages that uses the Internet.",
              "The Web is the set of cables and routers inside the Internet.",
              "The Internet only carries data for the Web and nothing else."
            ],
            correctAnswer: 1,
            explanation: "The Web is a system of linked pages, programs, and files that runs on the Internet using HTTP; the Internet also carries email, games, and more."
          },
          {
            question: "A real-time multiplayer game uses ___ for game-state updates and ___ for chat history.",
            options: [
              "UDP for state, since stale updates can be skipped; TCP for chat, since it must arrive.",
              "TCP for state, since every update must arrive; UDP for chat, since lost lines are fine.",
              "Both on UDP, since speed matters more than reliability for every kind of game data.",
              "TCP for both, since UDP cannot carry data between players in a multiplayer game."
            ],
            correctAnswer: 0,
            explanation: "Game state changes constantly, so a lost update can be skipped; chat history must arrive complete."
          }
        ]
      }
    }
  ]
};
