export const cspInternetProtocolsPart4Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip4-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 4 of 7 — Connections & Interactions**

---

## Internet Connections Across the Course

The Internet is the substrate everything else runs on.

| Connection | Why it matters |
|-----------|---------------|
| Internet ↔ Binary (BI 2) | All packets are bit sequences. |
| Internet ↔ Algorithms (BI 3) | Routing IS an algorithm; so is congestion control. |
| Internet ↔ Security (BI 4) | TLS encrypts traffic; certificates establish trust. |
| Internet ↔ Impact (BI 5) | Global reach amplifies both benefit and harm. |
      `
    },
    {
      id: "cspip4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which property of the Internet most directly enables global, low-cost communication?",
            options: [
              "Centralized control by a single company.",
              "Open, standardized protocols any device can implement.",
              "Mandatory encryption at every layer.",
              "Government-issued IP addresses."
            ],
            correctAnswer: 1,
            explanation: "Open standards + interoperability = anyone can join, anyone can build."
          },
          {
            question: "HTTPS adds which property over HTTP?",
            options: [
              "Faster page loads in all cases.",
              "Encryption (and authenticated identity of the server) via TLS.",
              "Compression of every page.",
              "Lower bandwidth use."
            ],
            correctAnswer: 1,
            explanation: "HTTPS = HTTP over TLS, which encrypts traffic and authenticates the server's certificate."
          }
        ]
      }
    },
    {
      id: "cspip4-content",
      type: 'text' as const,
      content: `
## Open Standards As The Internet's Superpower

Anyone can implement TCP/IP. Any vendor's router can interoperate with any other's. This **open standardization** is why the Internet scaled to billions of devices in 30 years.

## Routing As An Algorithm

Routers run algorithms (e.g., BGP) to decide where to forward each packet. These algorithms must adapt to:

- New networks coming online.
- Failed links being removed.
- Congestion shifting traffic to alternate paths.

The result is a network that **self-heals** as conditions change.

## Encryption On The Internet

TLS (Transport Layer Security) wraps TCP connections to provide:

- **Confidentiality**: an eavesdropper sees ciphertext only.
- **Integrity**: tampering is detected.
- **Authentication**: the server's certificate proves it's really who it claims to be.

Modern web traffic is overwhelmingly HTTPS. The padlock icon in your browser indicates TLS is active.

## Global Reach And Impact

A single webpage can reach billions instantly. This is the Internet's greatest gift and gravest danger:

- **Beneficial**: open access to knowledge, global collaboration.
- **Harmful**: misinformation spreads at the same global speed.

Big Idea 5 examines these consequences.
      `
    },
    {
      id: "cspip4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The "S" in HTTPS stands for _______ (the protocol that adds encryption).

2) An open _______ enables any device to join the Internet.

3) When a network self-adapts after a router fails, this is enabled by _______ algorithms.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["secure", "standard", "routing"],
        hint1: "HTTP + secure = HTTPS.",
        hint2: "Like TCP/IP standards.",
        hint3: "They adjust paths.",
        explanation: "HTTPS = HTTP over TLS (S for secure). Open standards enable joining. Routing algorithms enable resilience."
      }
    },
    {
      id: "cspip4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Inside HTTPS, the encryption itself happens at the ___ layer",
            options: ["TLS (between transport and application)", "physical", "IP", "DNS"]
          },
          {
            label: "A \"self-healing\" property of the Internet means ___",
            options: ["traffic re-routes around failed links", "broken cables fix themselves", "malware is auto-removed", "all packets are encrypted"]
          },
          {
            label: "Open standards make the Internet ___",
            options: ["interoperable across vendors", "controlled by a single company", "slower", "unencrypted"]
          }
        ],
        correctAnswers: ["TLS (between transport and application)", "traffic re-routes around failed links", "interoperable across vendors"],
        hint1: "TLS sits above TCP.",
        hint2: "Routing protocols adjust.",
        hint3: "Anyone can implement the standards.",
        explanation: "TLS sits above TCP; routing self-heals around failures; open standards enable interoperability."
      }
    },
    {
      id: "cspip4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Internet Questions

- "Open standards" + "interoperability" + "scalability" = Internet design wins.
- HTTPS = HTTP + TLS. Provides confidentiality, integrity, authentication.
- Self-healing routing = a built-in algorithmic property of the Internet.
- A question about "single point of failure" is asking about redundancy / distributed design.
      `
    },
    {
      id: "cspip4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user visits a banking site. The browser shows a padlock and the URL begins with https://. Which guarantees does this primarily provide?",
            options: [
              "The site has been verified safe by every government.",
              "Traffic is encrypted in transit AND the server's certificate has been validated.",
              "The user's account cannot be hacked.",
              "The page loads faster than HTTP."
            ],
            correctAnswer: 1,
            explanation: "HTTPS provides encryption and server authentication; it does NOT promise safety of the site's practices or the user's account."
          },
          {
            question: "A regional Internet outage causes a major undersea cable to fail. Many websites still load, possibly slower. The most accurate explanation is ___",
            options: [
              "websites cached themselves locally.",
              "routing algorithms automatically forward traffic over alternate paths.",
              "each website has its own private fiber.",
              "TCP retransmits the cable."
            ],
            correctAnswer: 1,
            explanation: "Routing protocols redirect packets via remaining paths — the network's self-healing property."
          }
        ]
      }
    }
  ]
};
