export const cspInternetProtocolsPart7Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip7-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Internet & Protocols

The protocol facts and architectural ideas most likely to appear on the exam.
      `
    },
    {
      id: "cspip7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "The Internet uses ___-switched delivery, not circuit-switched.",
            options: [
              "packet",
              "circuit",
              "wave",
              "message"
            ],
            correctAnswer: 0,
            explanation: "Packet switching is foundational to the Internet (vs. dedicated circuits in old phone systems)."
          },
          {
            question: "A protocol that provides reliable, ordered, error-checked delivery between two endpoints is ___",
            options: [
              "UDP",
              "IP",
              "TCP",
              "DNS"
            ],
            correctAnswer: 2,
            explanation: "TCP's defining job."
          }
        ]
      }
    },
    {
      id: "cspip7-content",
      type: 'text' as const,
      content: `
## One-Line Definitions

| Term | Definition |
|------|-----------|
| Protocol | An agreed set of rules for communication. |
| Packet | A unit of data with headers (source, destination, etc.) plus payload. |
| IP | Routes packets to destination addresses (best-effort). |
| TCP | Adds reliable, ordered, error-checked delivery on top of IP. |
| UDP | Connectionless, faster, no delivery guarantee. |
| HTTP | Application-layer request/response for the web. |
| HTTPS | HTTP over TLS — encrypted and authenticated. |
| DNS | Domain → IP resolution. |
| TLS | Encrypts a TCP connection; authenticates server via certificate. |
| Router | A device that forwards packets toward their destination. |
| CDN | Geographically distributed caching of content. |
| IPv6 | Successor to IPv4 with 128-bit addresses. |

## Common Exam Pitfalls

- "TCP and IP are the same protocol." (No — TCP is transport, IP is routing.)
- "UDP is unreliable, so it's bad." (No — it's a deliberate trade-off for low latency.)
- "HTTPS protects me from any threat." (No — it protects in transit, not from phishing or compromised servers.)
- "DNS encrypts traffic." (No — DNS resolves names; encryption is TLS's job.)
      `
    },
    {
      id: "cspip7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The protocol that resolves human names to IP addresses is _______.

2) The transport protocol that guarantees ordered, reliable delivery is _______.

3) The transport protocol used for real-time apps that prefer low latency over retransmission is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["DNS", "TCP", "UDP"],
        hint1: "Domain Name System.",
        hint2: "Three-letter, starts with T.",
        hint3: "Three-letter, starts with U.",
        explanation: "DNS for naming, TCP for reliability, UDP for speed."
      }
    },
    {
      id: "cspip7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "The padlock icon in a browser indicates ___",
            options: ["HTTPS / TLS is in use", "the site is owned by a bank", "the page cannot be hacked", "no cookies are stored"]
          },
          {
            label: "A 404 status means ___",
            options: ["the requested resource was not found", "the server is down", "the user is unauthorized", "success"]
          },
          {
            label: "Routing decisions on the Internet are made by ___",
            options: ["routers running routing algorithms", "the application layer", "browsers", "DNS servers"]
          }
        ],
        correctAnswers: ["HTTPS / TLS is in use", "the requested resource was not found", "routers running routing algorithms"],
        hint1: "Lock = encryption.",
        hint2: "404 is the famous code.",
        hint3: "Routers route.",
        explanation: "Padlock = TLS. 404 = not found. Routers handle routing."
      }
    },
    {
      id: "cspip7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Be ready to identify: TCP vs UDP, IP vs HTTP, HTTPS vs HTTP, DNS's job.
- Know the layered model: change at one layer doesn't require changes at others.
- Know that the Internet provides best-effort packet delivery; reliability is added by TCP on top.
- Recognize architecture trade-offs: client/server vs P2P, centralized vs distributed.
- HTTPS protects in transit; it does not solve phishing, social engineering, or server-side breaches.
      `
    },
    {
      id: "cspip7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "You receive an email asking you to log in to your bank \"to verify your account\". The link begins with https:// and shows a padlock. The most appropriate response is ___",
            options: [
              "log in to the bank immediately through the link, because the HTTPS padlock guarantees the destination is safe.",
              "do NOT log in via the link; navigate to the bank manually because HTTPS does not authenticate the email's sender.",
              "reply to the email message with your username and password so the bank's support team can verify your account.",
              "forward the email to several friends so they can also verify their accounts through the same convenient link."
            ],
            correctAnswer: 1,
            explanation: "HTTPS confirms the connection to whatever URL the link points to — but the URL itself may be a lookalike. Phishing defeats blind reliance on the padlock."
          },
          {
            question: "An online classroom needs both real-time voice (with low latency) and reliable file uploads. The most appropriate design uses ___",
            options: [
              "only the TCP transport-layer protocol for both the real-time voice stream and the reliable file uploads alike.",
              "only the UDP transport-layer protocol for both the real-time voice stream and the reliable file uploads alike.",
              "UDP (or its cousin RTP) for the real-time voice stream and TCP/HTTPS for the reliable file upload requests.",
              "no transport-layer protocol at all; both the real-time voice stream and the file uploads ride on raw IP packets."
            ],
            correctAnswer: 2,
            explanation: "Match the protocol to the requirement: UDP-style for real-time voice, TCP for reliable file transfer."
          }
        ]
      }
    }
  ]
};
