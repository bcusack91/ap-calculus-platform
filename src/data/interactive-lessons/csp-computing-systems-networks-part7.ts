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
              "only software.",
              "a collection of components that interact to provide some function.",
              "only hardware.",
              "only networks."
            ],
            correctAnswer: 1,
            explanation: "System = interacting components."
          },
          {
            question: "A protocol is ___",
            options: [
              "random behavior.",
              "an agreed set of rules for how parties communicate.",
              "a hardware feature only.",
              "only encryption."
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
            options: ["does NOT guarantee low latency", "always means low latency", "is the same as latency", "eliminates congestion"]
          },
          {
            label: "A CDN reduces ___",
            options: ["latency for users far from origin servers", "all server costs to zero", "bandwidth at the origin to zero", "all bugs"]
          },
          {
            label: "A protocol like HTTP is ___",
            options: ["an agreed set of rules for client / server communication", "a hardware device", "random data", "a DNS record"]
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
              "pre-download or cache lower-resolution lossy versions and serve from a community device.",
              "serve only fully lossless video files so quality is preserved no matter the bandwidth.",
              "serve videos with no compression at all and rely on the underlying network capacity."
            ],
            correctAnswer: 1,
            explanation: "Local caching + appropriate bitrate is the standard equity-aware design."
          },
          {
            question: "A team builds an API used by partners worldwide. The single most impactful step to reduce global latency is ___",
            options: [
              "add a global CDN or geographically distributed edge points-of-presence.",
              "switch every API endpoint from TCP to UDP and accept whatever packet loss results.",
              "remove transport-layer security and serve every API response over plain HTTP.",
              "serve all responses with lossless compression only and never use lossy formats."
            ],
            correctAnswer: 0,
            explanation: "CDNs / edge POPs are the standard latency mitigation for global APIs."
          }
        ]
      }
    }
  ]
};
