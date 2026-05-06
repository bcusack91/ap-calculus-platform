export const cspComputingSystemsNetworksPart4Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn4-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 4 of 7 — Connections & Interactions**

---

## Systems & Networks Connect Across CSP

| Connection | Why |
|-----------|-----|
| Systems ↔ Algorithms | OS schedulers, routing all use algorithms. |
| Networks ↔ Internet | The Internet is the largest network. |
| Systems ↔ Security | Each layer is a potential attack surface. |
| Networks ↔ Impact | Connectivity (or lack of) shapes equality of access. |
      `
    },
    {
      id: "cspcsn4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "An OS scheduler that decides which process runs next is fundamentally implementing an ___",
            options: [
              "algorithm that ranks ready processes by some scheduling policy",
              "compression scheme applied to ready processes before they execute",
              "TLS handshake between the kernel and each ready user process",
              "router whose forwarding table maps process IDs to CPU cores"
            ],
            correctAnswer: 0,
            explanation: "Schedulers are algorithms."
          },
          {
            question: "A region with no broadband access faces ___",
            options: [
              "no impact at all on its residents' day-to-day activities or opportunities.",
              "a digital divide — limited access to education, jobs, and online services.",
              "consistently lower latency than well-connected urban regions on the same continent.",
              "consistently better TLS handshake performance because of reduced background traffic."
            ],
            correctAnswer: 1,
            explanation: "Digital-divide framing."
          }
        ]
      }
    },
    {
      id: "cspcsn4-content",
      type: 'text' as const,
      content: `
## Each System Layer Adds Trust Decisions

| Layer | Trust questions |
|-------|----------------|
| Hardware | Is firmware genuine? |
| OS | Are processes isolated? |
| App | Does the user trust this code? |
| Network | Is this connection encrypted? |
| Cloud | Do we trust the provider? |

A vulnerability at any layer can compromise the whole stack.

## Mobile And IoT Are Networks Too

| Device | Network role |
|--------|-------------|
| Smartphone | Multi-radio (cellular + Wi-Fi + Bluetooth). |
| Smart speaker | Always-listening client of cloud APIs. |
| Sensor | Often constrained — low power, tiny memory. |
| Smart car | Edge-to-cloud telemetry. |

These add scale and security challenges (lots of devices, many never patched).
      `
    },
    {
      id: "cspcsn4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A vulnerability at any layer of a system can compromise the _______ stack.

2) Lack of broadband access in some regions is part of the digital _______.

3) Tiny low-power sensors are typical of the _______ category of devices.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["whole", "divide", "IoT"],
        hint1: "Layers stack.",
        hint2: "Equity issue.",
        hint3: "Internet of Things.",
        explanation: "Layered trust; digital divide; IoT."
      }
    },
    {
      id: "cspcsn4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A trusted hardware module that protects keys even from the OS is part of ___",
            options: ["layered system trust", "compression", "a routing table", "a DNS resolver"]
          },
          {
            label: "IoT devices that ship without security updates create ___",
            options: ["large attack surfaces over time", "better latency", "compression gains", "TLS speedups"]
          },
          {
            label: "A school in an area with poor connectivity faces ___",
            options: ["educational disadvantages tied to the digital divide", "no impact", "lower TLS overhead", "cleaner DNS"]
          }
        ],
        correctAnswers: ["layered system trust", "large attack surfaces over time", "educational disadvantages tied to the digital divide"],
        hint1: "Hardware roots of trust.",
        hint2: "Unpatched IoT.",
        hint3: "Equity gap.",
        explanation: "Trust per layer, unpatched IoT risk, digital divide impact."
      }
    },
    {
      id: "cspcsn4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Systems

- "Why does my browser work on different network cards?" → OS abstraction.
- "Lack of broadband impact?" → digital divide.
- "Why is this IoT device dangerous?" → never patched, large attack surface.
      `
    },
    {
      id: "cspcsn4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A smart-home device hasn't received updates in 5 years. The most accurate concern is ___",
            options: [
              "no concern — unpatched IoT devices on a home network are essentially harmless.",
              "known vulnerabilities accumulate; the device may become a vector for botnets.",
              "the device's TLS handshake will simply run more slowly than freshly patched devices.",
              "the device will compress its traffic less efficiently than recently updated devices do."
            ],
            correctAnswer: 1,
            explanation: "Unpatched IoT = compounding risk."
          },
          {
            question: "A community center in a low-connectivity area provides public Wi-Fi for students. The most CSP-aligned framing is ___",
            options: [
              "unnecessary spending of community funds on a service students don't really need.",
              "addressing the digital divide so students can access learning resources online.",
              "wasted electricity that could have been used for other community programs instead.",
              "extra TLS overhead on the broader internet that slows down other users' traffic."
            ],
            correctAnswer: 1,
            explanation: "Public Wi-Fi as a digital-divide intervention."
          }
        ]
      }
    }
  ]
};
