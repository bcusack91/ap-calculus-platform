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
              "8 minutes",
              "8 seconds",
              "8 hours",
              "8 days"
            ],
            correctAnswer: 0,
            explanation: "10 GB ≈ 80,000 Mb / 100 Mbps = 800 s ≈ 13 min (8–13 min range)."
          },
          {
            question: "A user from New York pings a server in Tokyo and gets ~150 ms RTT. The dominant factor is ___",
            options: [
              "CPU speed.",
              "distance / speed of light + intermediate routers.",
              "TLS handshake only.",
              "compression."
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
            options: ["large bulk transfers", "real-time first-person shooters", "live debate", "video calls"]
          },
          {
            label: "A region without a nearby CDN node experiences ___",
            options: ["higher latency to fetch the same content", "free service", "better DNS", "lower TLS overhead"]
          },
          {
            label: "A multi-tenant cloud server's shared CPU may cause ___",
            options: ["\"noisy neighbor\" performance variance", "lossy compression", "TLS failure", "IPv6 collapse"]
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
              "no architectural change — the user-perceived gap will resolve as users adapt over time.",
              "add a CDN with Asian edge nodes so static content is served closer to users there.",
              "switch the entire site from TLS 1.3 down to the older TLS 1.0 protocol everywhere.",
              "switch every endpoint from TCP to UDP and accept whatever packet loss results."
            ],
            correctAnswer: 1,
            explanation: "Geographic CDN reduces transcontinental latency."
          },
          {
            question: "A user complains about laggy video calls on a Wi-Fi connection with 200 Mbps download. The most likely culprit is ___",
            options: [
              "raw bandwidth — 200 Mbps is simply not enough capacity to make video calls usable.",
              "latency, jitter, or packet loss on Wi-Fi or upstream — bandwidth alone isn't enough.",
              "transport-layer security overhead on every packet exchanged with the call server.",
              "lossy compression artifacts in the video stream that the call client can't decode."
            ],
            correctAnswer: 1,
            explanation: "Real-time depends on latency / jitter / packet loss, not just bandwidth."
          }
        ]
      }
    }
  ]
};
