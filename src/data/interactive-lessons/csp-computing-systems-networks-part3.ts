export const cspComputingSystemsNetworksPart3Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn3-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 3 of 7 — Patterns & Examples**

---

## How The Internet Routes Data

The Internet is a **packet-switched** network: data is split into packets, each of which finds its own way through routers to the destination.

| Concept | Effect |
|---------|--------|
| **Packet** | A chunk of data with source + destination addresses. |
| **Router** | Forwards packets toward their destination. |
| **Path** | Packets may take different routes to the same destination. |
| **Protocol** | Rules for how packets are formatted and exchanged. |
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
              "no path at all, since packet switching does not actually move packets through routers.",
              "only fully encrypted paths reserved for that single conversation by upstream routers."
            ],
            correctAnswer: 1,
            explanation: "Packet switching allows independent routing."
          },
          {
            question: "A router decides where to forward a packet based on ___",
            options: [
              "the packet's payload content, by inspecting the application-layer body in detail.",
              "the destination address combined with the router's current routing table.",
              "the original sender's preference about which neighboring router to forward through.",
              "the compression ratio achievable on the packet's payload by a downstream router."
            ],
            correctAnswer: 1,
            explanation: "Routers use destination addresses + routing tables."
          }
        ]
      }
    },
    {
      id: "cspcsn3-content",
      type: 'text' as const,
      content: `
## Layered Network Stack

| Layer | Role | Example |
|-------|------|---------|
| Application | What the program means | HTTP, DNS, SMTP |
| Transport | Reliable / unreliable streams between processes | TCP, UDP |
| Network | Routing between hosts | IP |
| Link | One hop between physical devices | Ethernet, Wi-Fi |

Each layer offers a service to the layer above and consumes services from the layer below.

## TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliable? | Yes (retransmits lost) | No |
| In-order? | Yes | No |
| Overhead | Higher | Lower |
| Use case | Web, email, files | Video calls, games, DNS |

## DNS Translates Names To Addresses

When you type **example.com**, DNS resolves the name to an IP address. DNS is itself a globally distributed system; failures cascade visibly when it breaks.
      `
    },
    {
      id: "cspcsn3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The Internet is a _______-switched network.

2) A reliable, in-order transport protocol is _______.

3) Translating "example.com" to an IP address is the job of _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["packet", "TCP", "DNS"],
        hint1: "Independently routed chunks.",
        hint2: "Reliable transport.",
        hint3: "Domain Name System.",
        explanation: "Packet switching, TCP, DNS."
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
            label: "For a video call where occasional dropped frames are tolerable, the right protocol is ___",
            options: ["UDP-based (low latency, no retransmission)", "TCP only", "no protocol", "TLS only"]
          },
          {
            label: "For downloading a software update, the right protocol is ___",
            options: ["TCP (reliable, in-order)", "UDP only", "no protocol", "no transport"]
          },
          {
            label: "When DNS fails for a site, users see ___",
            options: ["the site appears unreachable, even though servers are healthy", "no effect", "TLS errors only", "better routing"]
          }
        ],
        correctAnswers: ["UDP-based (low latency, no retransmission)", "TCP (reliable, in-order)", "the site appears unreachable, even though servers are healthy"],
        hint1: "Real-time → UDP.",
        hint2: "Reliability → TCP.",
        hint3: "Name resolution failure.",
        explanation: "UDP for real-time; TCP for reliability; DNS failure makes sites unreachable."
      }
    },
    {
      id: "cspcsn3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Internet Routing

- Packets travel independently and may reorder.
- TCP = reliable + ordered; UDP = unreliable + low-overhead.
- DNS = name → address translation.
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
            question: "A user notices \"ERR_NAME_NOT_RESOLVED\" when visiting a site. The most likely root cause is ___",
            options: [
              "the site's origin server has crashed and is no longer responding to TCP connections.",
              "DNS lookup failed; the browser couldn't translate the domain into an IP address.",
              "the user has no electricity supply, so the browser cannot send any packets at all.",
              "the site's TLS certificate is misconfigured and the browser is refusing to connect."
            ],
            correctAnswer: 1,
            explanation: "Name-not-resolved = DNS failure."
          },
          {
            question: "A real-time multiplayer game uses ___ for game-state updates and ___ for chat history.",
            options: [
              "UDP for state updates because lossy is fine; TCP for chat because reliability matters.",
              "TCP for state updates because reliability matters; UDP for chat because lossy is fine.",
              "No transport protocols at all; both kinds of traffic skip the transport layer entirely.",
              "Only the TLS handshake protocol; both state updates and chat history piggyback on it."
            ],
            correctAnswer: 0,
            explanation: "Game state = low-latency UDP; chat history = reliable TCP."
          }
        ]
      }
    }
  ]
};
