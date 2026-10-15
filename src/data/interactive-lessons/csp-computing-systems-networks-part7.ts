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
            question: "A \"system\" in CSP is ___",
            options: [
              "only the software programs installed on a device.",
              "a collection of components that interact to provide some function.",
              "only the physical hardware inside a computer's case.",
              "only the network links that connect separate devices."
            ],
            correctAnswer: 1,
            explanation: "System = interacting components."
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
| System | Interacting components. |
| Network | A system where components communicate. |
| Bandwidth / throughput / latency | Capacity / actual / delay. |
| Client-server / P2P | Two architecture models. |
| Packet switching | Independent packet routing. |
| TCP / UDP | Reliable / unreliable transport. |
| DNS | Name → address. |
| Cloud / edge | Remote / nearby compute. |
| Digital divide | Unequal connectivity → unequal opportunity. |

## Common Pitfalls

- Confusing bandwidth and latency.
- Assuming all packets take the same path.
- Forgetting DNS exists until it breaks.
- Treating IoT devices as patched.
- Ignoring connectivity inequality.
      `
    },
    {
      id: "cspcsn7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A reliable, in-order transport protocol is _______.

2) Translating example.com to an IP is the job of _______.

3) Unequal access to computing and connectivity is called the digital _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["TCP", "DNS", "divide"],
        hint1: "Reliable transport.",
        hint2: "Name resolver.",
        hint3: "Equity gap.",
        explanation: "TCP / DNS / digital divide."
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
            label: "High bandwidth ___",
            options: ["does NOT guarantee low latency", "guarantees low latency on every connection", "is just another word for latency", "prevents congestion on busy links"]
          },
          {
            label: "A CDN reduces ___",
            options: ["latency for users far from origin servers", "the need for any origin servers at all", "the number of packets in each download", "the security risks of using HTTPS"]
          },
          {
            label: "A protocol like HTTP is ___",
            options: ["an agreed set of rules for client / server communication", "a hardware device that forwards packets between networks", "a naming system that maps domain names to IP addresses", "a programming language used to build web pages"]
          }
        ],
        correctAnswers: ["does NOT guarantee low latency", "latency for users far from origin servers", "an agreed set of rules for client / server communication"],
        hint1: "Bandwidth ≠ latency.",
        hint2: "Edge proximity.",
        hint3: "Rules of communication.",
        explanation: "Bandwidth ≠ latency; CDN cuts latency; protocols = rules."
      }
    },
    {
      id: "cspcsn7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Distinguish bandwidth, throughput, latency.
- Packet switching, TCP/UDP, DNS, CDNs.
- Digital divide framing for access questions.
- Layered systems = abstraction at every layer.
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
            explanation: "Local caching + appropriate bitrate is the standard equity-aware design."
          },
          {
            question: "A team builds an API used by partners worldwide. The single most impactful step to reduce global latency is ___",
            options: [
              "add a CDN or edge points-of-presence close to its users.",
              "switch every API endpoint from TCP to UDP and accept the packet loss.",
              "remove HTTPS and serve every API response over plain HTTP instead.",
              "move the API to one larger server in a single central data center."
            ],
            correctAnswer: 0,
            explanation: "CDNs / edge POPs are the standard latency mitigation for global APIs."
          }
        ]
      }
    }
  ]
};
