export const cspInternetProtocolsPart6Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip6-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 6 of 7 — Problem-Solving Workshop**

---

## Internet & Protocols Workshop

Apply the layered model and the protocol vocabulary to scenarios.
      `
    },
    {
      id: "cspip6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A page loads partially: text and CSS arrive but a single image doesn't. The most likely cause is at the ___",
            options: [
              "transport layer for the entire page, since the image's failure means TCP itself stopped working.",
              "application/HTTP layer for the image's specific request — the other resources arrived, so lower layers worked.",
              "physical layer because the network connection itself is fully down for every resource the page requested.",
              "DNS layer for the entire page, since the failed image lookup blocked every other DNS resolution attempt."
            ],
            correctAnswer: 1,
            explanation: "Other resources loaded, so DNS / transport / physical work. The image's individual HTTP request failed (e.g., 404, server error)."
          },
          {
            question: "You're building a real-time multiplayer game. Which transport protocol is most appropriate for in-game position updates?",
            options: [
              "TCP, because reliability of every single position update is the most important property of the game.",
              "UDP, because low latency matters more than retransmitting position updates that are already stale by then.",
              "DNS, because the Domain Name System resolves position updates faster than the transport layer alone could.",
              "IP only with no transport-layer protocol layered on top, since the game does not need any reliability features."
            ],
            correctAnswer: 1,
            explanation: "Stale position updates aren't worth retransmitting; UDP fits real-time games."
          }
        ]
      }
    },
    {
      id: "cspip6-content",
      type: 'text' as const,
      content: `
## Worked Scenario 1: Diagnose A Slow Site

Symptoms: site loads but is slow.

Possible bottlenecks by layer:

| Layer | Symptom | Diagnosis tool |
|-------|---------|---------------|
| DNS | Long delay before any byte | DNS lookup time. |
| TCP | Connect succeeds slowly | TCP handshake timing. |
| HTTP server | Slow response after request sent | Server response time. |
| Network path | All traffic slow | Traceroute / latency. |

Modern dev tools show this waterfall directly.

## Worked Scenario 2: Choose A Protocol

| Use case | Best transport |
|---------|---------------|
| File download | TCP (reliability matters). |
| Live video call | UDP (latency matters; small drops tolerated). |
| Online banking page | TCP + TLS (HTTPS — reliability + encryption). |
| Software update | TCP (must arrive complete and correct). |

## Worked Scenario 3: Naming vs. Routing

A user goes to bank.com → DNS resolves to 192.0.2.5 → packets routed via IP → TCP connection on port 443 → TLS handshake → HTTP GET.

If DNS is wrong, the user lands on a wrong server. If the cert doesn't match, TLS warns the user. Both protect against impersonation.
      `
    },
    {
      id: "cspip6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A real-time game uses _______ transport for low-latency state updates.

2) A banking page uses _______ over TCP for confidentiality and authentication.

3) A long delay before any byte arrives often points to a _______ lookup problem.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["UDP", "TLS", "DNS"],
        hint1: "Connectionless, fast.",
        hint2: "The \"S\" in HTTPS.",
        hint3: "First step of every web request.",
        explanation: "UDP for low latency, TLS for HTTPS confidentiality, DNS for early-stage delays."
      }
    },
    {
      id: "cspip6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A 503 status code most likely means ___",
            options: ["the server is temporarily overloaded or down", "the URL is misspelled", "the user is not logged in", "TLS failed"]
          },
          {
            label: "For software updates that must arrive complete, the right transport is ___",
            options: ["TCP", "UDP", "IP only", "no transport"]
          },
          {
            label: "For audio in a live call, the right transport is usually ___",
            options: ["UDP", "TCP", "IP only", "DNS"]
          }
        ],
        correctAnswers: ["the server is temporarily overloaded or down", "TCP", "UDP"],
        hint1: "5xx = server side.",
        hint2: "Reliability needed.",
        hint3: "Latency matters more than retransmission.",
        explanation: "503 = service unavailable. TCP for reliability. UDP for real-time."
      }
    },
    {
      id: "cspip6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Protocol Choice Workshops

- Ask "what does this app prioritize?": reliability, latency, security?
- Reliability → TCP. Confidentiality → TLS (HTTPS). Real-time / drop-tolerant → UDP.
- For naming → DNS. For routing → IP. For requests → HTTP.
- The Internet's layered model means you can swap any layer's protocol without breaking the others.
      `
    },
    {
      id: "cspip6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school records video lectures and posts them for students to watch later. Which two technologies fit this best?",
            options: [
              "HTTPS for delivery to each student's browser plus a CDN to serve cached copies near each student.",
              "UDP-only video calls between every student and the school's central origin server, with no caching at all.",
              "Plain HTTP served from a single origin server worldwide, with no encryption and no geographic caching layer.",
              "A peer-to-peer-only design with no central catalog server, where students must discover lectures from each other."
            ],
            correctAnswer: 0,
            explanation: "HTTPS for secure delivery + CDN for low-latency global access."
          },
          {
            question: "A social app must immediately notify followers when a user posts. The most appropriate pattern is ___",
            options: [
              "publish/subscribe with persistent connections so the central server can push updates to followers immediately.",
              "have every follower's browser actively poll the central server every 60 seconds for any new posts to display.",
              "send each follower an email notification through the school's SMTP mail server every time someone posts.",
              "require every follower to manually refresh their feed page in order to ever see any newly published posts."
            ],
            correctAnswer: 0,
            explanation: "Pub/sub with push delivers low-latency notifications without polling overhead."
          }
        ]
      }
    }
  ]
};
