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
              "algorithm that picks among ready tasks according to a ranking policy",
              "data structure that stores each task's memory until it ends",
              "network protocol the kernel uses to message each task",
              "hardware circuit that maps each task to a fixed core"
            ],
            correctAnswer: 0,
            explanation: "Schedulers are algorithms."
          },
          {
            question: "A region with no broadband access faces ___",
            options: [
              "no real effect on residents, since most daily activities happen offline.",
              "a digital divide, with fewer chances for online learning and remote jobs.",
              "lower prices for online services, since providers charge by distance.",
              "faster internet once it arrives, since newer networks skip old equipment."
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
            options: ["layered system trust", "application-level security", "open-source transparency", "network firewall rules"]
          },
          {
            label: "IoT devices that ship without security updates create ___",
            options: ["large attack surfaces over time", "stronger security as they age", "fewer targets for attackers", "no new risk once installed"]
          },
          {
            label: "A school in an area with poor connectivity faces ___",
            options: ["educational disadvantages tied to the digital divide", "no effect, since most lessons can be printed out", "advantages, since students face fewer distractions online", "lower costs that fully offset the slower access"]
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
              "known vulnerabilities pile up, and the device may be hijacked into a botnet.",
              "the device's encryption keys expire after five years, so it stops working.",
              "the device will slow down, since older firmware runs less efficiently."
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
              "a security risk, since public Wi-Fi networks are always unsafe for every student."
            ],
            correctAnswer: 1,
            explanation: "Public Wi-Fi as a digital-divide intervention."
          }
        ]
      }
    }
  ]
};
