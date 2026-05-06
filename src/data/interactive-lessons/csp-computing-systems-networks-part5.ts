export const cspComputingSystemsNetworksPart5Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn5-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 5 of 7 — Change Over Time**

---

## How Systems & Networks Have Evolved

| Era | Defining shift |
|-----|----------------|
| 1960s | Mainframes; time-sharing. |
| 1980s | Personal computers. |
| 1990s | Public Internet; World Wide Web. |
| 2000s | Cloud + mobile. |
| 2010s | Smartphones everywhere; IoT. |
| 2020s | Edge computing; 5G; specialized AI hardware. |
      `
    },
    {
      id: "cspcsn5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "\"Cloud\" computing primarily means ___",
            options: [
              "weather-dependent computing whose performance varies with atmospheric conditions.",
              "on-demand access to remote computing resources delivered over networks.",
              "computing in which all programs run only on each user's local laptop.",
              "computing that runs without any networks between client and any server."
            ],
            correctAnswer: 1,
            explanation: "Cloud = on-demand remote resources."
          },
          {
            question: "Edge computing pushes processing ___",
            options: [
              "toward central data centers only, far from any device that produces the data.",
              "closer to the data source (sensors, devices) to reduce latency and bandwidth.",
              "into orbital satellites that handle every workload regardless of physical location.",
              "into the operating-system kernel only, refusing to run user-space code at all."
            ],
            correctAnswer: 1,
            explanation: "Edge = nearer data source."
          }
        ]
      }
    },
    {
      id: "cspcsn5-content",
      type: 'text' as const,
      content: `
## Cloud Service Models

| Model | What you manage |
|-------|----------------|
| **IaaS** | Virtual machines and storage. |
| **PaaS** | Your application code. |
| **SaaS** | Just the user interface (provider runs everything). |

## 5G And Edge

5G enables higher mobile bandwidth and lower latency. Edge computing puts compute near users (e.g., a CDN edge node) so latency-sensitive apps work even with intermittent core connectivity.

## Specialized Hardware

Modern AI workloads run on GPUs / TPUs / NPUs. The CSP big idea: hardware specialization keeps reshaping what kinds of programs are feasible.
      `
    },
    {
      id: "cspcsn5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) On-demand access to remote computing resources is called the _______.

2) Pushing computation closer to the data source is called _______ computing.

3) A model where the provider runs everything and you only use a UI is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["cloud", "edge", "SaaS"],
        hint1: "Symbolic.",
        hint2: "Boundary location.",
        hint3: "Software as a Service.",
        explanation: "Cloud / edge / SaaS."
      }
    },
    {
      id: "cspcsn5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A real-time video filter on a phone is best run ___",
            options: ["on the device or at the network edge — local for low latency", "at a distant central data center only", "on a satellite only", "on a router only"]
          },
          {
            label: "5G primarily improves ___",
            options: ["mobile bandwidth and latency", "lossless ratio", "AES key length", "TCP overhead"]
          },
          {
            label: "GPUs / TPUs are specialized for ___",
            options: ["parallel matrix / tensor math used by AI workloads", "web browsing only", "hard-drive control", "firmware"]
          }
        ],
        correctAnswers: ["on the device or at the network edge — local for low latency", "mobile bandwidth and latency", "parallel matrix / tensor math used by AI workloads"],
        hint1: "Latency wins on edge.",
        hint2: "5G specs.",
        hint3: "AI math.",
        explanation: "Edge for latency; 5G for mobile speed; GPUs/TPUs for AI."
      }
    },
    {
      id: "cspcsn5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Systems Evolution

- Cloud + mobile reshaped where computation happens.
- Edge brings compute near users — lower latency, less core network usage.
- Specialized hardware enables new classes of applications.
      `
    },
    {
      id: "cspcsn5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A startup wants its app to load fast for users worldwide. The most CSP-aligned strategy is ___",
            options: [
              "one origin server in one country, serving every user worldwide directly from there.",
              "a CDN with edge nodes globally so static content is served close to each user.",
              "no caching anywhere; rely on the user's browser to fetch every byte every time.",
              "transport-layer encryption of every static asset before any user can fetch it."
            ],
            correctAnswer: 1,
            explanation: "CDN edges minimize latency."
          },
          {
            question: "A medical-imaging team trains AI models on tens of thousands of scans. The most appropriate hardware is ___",
            options: [
              "general-purpose CPUs only, without specialized parallel-math accelerators added.",
              "GPUs or TPUs designed for the parallel tensor math that AI training requires.",
              "a single laptop running a desktop operating system and consumer-grade hardware.",
              "no special hardware — the team can train the models with pencil and paper instead."
            ],
            correctAnswer: 1,
            explanation: "AI training requires specialized parallel hardware."
          }
        ]
      }
    }
  ]
};
