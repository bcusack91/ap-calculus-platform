export const cspComputingSystemsNetworksPart6Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn6-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 6 of 7 — Problem-Solving Workshop**

---

## Systems & Networks Workshop
      `
    },
    {
      id: "cspcsn6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Two computers in the same room transfer a 10 GB file at 100 Mbps. Approximate transfer time?",
            options: [
              "About 13 minutes",
              "About 100 seconds",
              "About 2 hours",
              "About 1 day"
            ],
            correctAnswer: 0,
            explanation: "10 GB = 80,000 megabits, and 80,000 ÷ 100 Mbps = 800 s, about 13 minutes. Reading 100 Mbps as 100 megabytes per second gives 100 s, the classic bits-versus-bytes mistake."
          },
          {
            question: "A user from New York pings a server in Tokyo and gets ~150 ms RTT. The dominant factor is ___",
            options: [
              "the CPU speed of the user's own computer.",
              "the physical distance and the routers along the path.",
              "the time the Tokyo server takes to encrypt each reply.",
              "the compression applied to each ping packet."
            ],
            correctAnswer: 1,
            explanation: "Long-distance latency is dominated by physical distance + hops."
          }
        ]
      }
    },
    {
      id: "cspcsn6-content",
      type: 'text' as const,
      content: `
## Worked: Estimate A Transfer

1 byte = 8 bits. 1 GB = 8 Gb. At 100 Mbps you transfer 100 Mb / second = ~12.5 MB / second. So 10 GB ≈ 800 seconds.

## Worked: Choose An Architecture

| Use case | Best fit |
|---------|---------|
| News article serving | CDN + caching |
| Multiplayer game | Game servers + UDP |
| Banking transactions | Strong consistency + TCP + TLS |
| Sensor telemetry | Edge aggregation + bursty upstream |

## Worked: Diagnose A Slow App

| Symptom | Likely cause |
|---------|-------------|
| Spinner forever | DNS / TCP / firewall |
| Loads then stalls | Backend slow query |
| Slow on first visit | No caching, large bundle |
| Slow only on Wi-Fi | Local interference / bandwidth |
| Slow worldwide except home country | No CDN |
      `
    },
    {
      id: "cspcsn6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Transferring 1 GB at 100 Mbps takes about _______ seconds.

2) A "spinner forever" symptom often points to a _______ failure.

3) Slow app worldwide except home country suggests no _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["80", "DNS", "CDN"],
        hint1: "8 Gb / 100 Mb/s.",
        hint2: "Name resolution.",
        hint3: "Edge delivery.",
        explanation: "Bandwidth math; DNS; CDN."
      }
    },
    {
      id: "cspcsn6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A satellite link with 100 Mbps and 600 ms RTT is best for ___",
            options: ["large bulk transfers", "live online gaming", "two-way video calls", "remote desktop control"]
          },
          {
            label: "A region without a nearby CDN node experiences ___",
            options: ["higher latency to fetch the same content", "lower latency, since servers are less busy", "no change, since bandwidth is all that matters", "no access at all to content hosted abroad"]
          },
          {
            label: "A multi-tenant cloud server's shared CPU may cause ___",
            options: ["\"noisy neighbor\" performance variance", "guaranteed fixed performance for each tenant", "automatic data sharing between tenants", "faster speeds than a dedicated server"]
          }
        ],
        correctAnswers: ["large bulk transfers", "higher latency to fetch the same content", "\"noisy neighbor\" performance variance"],
        hint1: "Bandwidth ≠ latency.",
        hint2: "No nearby cache.",
        hint3: "Shared resources.",
        explanation: "Sat for bulk; no CDN = high latency; cloud noisy neighbors are real."
      }
    },
    {
      id: "cspcsn6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Practice bandwidth × time math for file transfers.
- Match symptoms to causes (DNS / TCP / CDN / backend / bandwidth).
- Real-time vs. bulk drives architecture.
      `
    },
    {
      id: "cspcsn6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team's app feels fast in the US but slow in Asia. The single most useful change is ___",
            options: [
              "buy a faster processor for the single US server that handles all traffic.",
              "add a CDN with Asian edge nodes so content is served near users there.",
              "compress the images further so pages in Asia download fewer bytes.",
              "increase the bandwidth of the US data center's own connection to the internet."
            ],
            correctAnswer: 1,
            explanation: "Geographic CDN reduces transcontinental latency."
          },
          {
            question: "A user complains about laggy video calls on a Wi-Fi connection with 200 Mbps download. The most likely culprit is ___",
            options: [
              "raw bandwidth, since 200 Mbps is not enough capacity for a video call.",
              "latency, jitter, or packet loss on the Wi-Fi link, not raw bandwidth.",
              "encryption, headers, and checksums added to every packet of the call.",
              "the screen resolution, since high-resolution displays slow decoding."
            ],
            correctAnswer: 1,
            explanation: "Real-time depends on latency / jitter / packet loss, not just bandwidth."
          }
        ]
      }
    }
  ]
};
