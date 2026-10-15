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
| Internet ↔ Algorithms (BI 3) | Routing, finding a path, is an algorithm. |
| Internet ↔ Security (BI 5) | Encryption protects traffic; certificate authorities establish trust. |
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
              "Centralized control of the network by a single company.",
              "Open, standardized protocols that any device can implement.",
              "Mandatory encryption at every layer of the network.",
              "Government-issued IP addresses for every connected device."
            ],
            correctAnswer: 1,
            explanation: "Open standards + interoperability = anyone can join, anyone can build."
          },
          {
            question: "HTTPS adds which property over HTTP?",
            options: [
              "Faster page loads, since every response is compressed.",
              "Encryption, with a certificate that validates the server.",
              "Guaranteed delivery of every packet in the right order.",
              "Lower bandwidth use, since encrypted pages are smaller."
            ],
            correctAnswer: 1,
            explanation: "HTTPS encrypts the traffic, and the site's digital certificate, issued by a certificate authority, validates its encryption keys."
          }
        ]
      }
    },
    {
      id: "cspip4-content",
      type: 'text' as const,
      content: `
## Open Standards As The Internet's Superpower

Anyone can implement TCP/IP. Any vendor's router can interoperate with any other's. Because the protocols are **open**, users can easily connect additional devices, which is a big reason the Internet scaled to billions of devices.

## Routing As An Algorithm

Routing is the process of finding a path from sender to receiver, and on the Internet it is **dynamic**. Paths adapt to:

- New networks coming online.
- Failed devices or connections.
- Busy connections, shifting traffic to other paths.

If a device or connection fails, later data are sent along a different route if one exists, so the network keeps working. This is **fault tolerance**, made possible by **redundant** paths.

## Encryption On The Internet

Data sent over public networks can be intercepted, analyzed, and modified. **Encryption** encodes data to prevent unauthorized access; only someone with the right key can decrypt it. When you see **https://** and a padlock:

- The traffic between you and the site is **encrypted**.
- The site presented a **digital certificate**. **Certificate authorities** issue these certificates to validate who owns the encryption keys, based on a trust model.

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

3) When data are rerouted after a router fails, this is made possible by _______ paths between devices.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["secure", "standard", "redundant"],
        hint1: "HTTP + secure = HTTPS.",
        hint2: "Like TCP/IP standards.",
        hint3: "Extra, backup paths.",
        explanation: "HTTPS = HTTP Secure. Open standards enable joining. Redundant paths make rerouting possible."
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
            label: "A digital certificate for a website is issued by ___",
            options: ["a certificate authority", "the user's web browser", "the nearest router", "the Internet's routing protocol"]
          },
          {
            label: "A \"self-healing\" property of the Internet means ___",
            options: ["traffic re-routes around failed links", "failed routers restart automatically", "every packet takes a fixed backup path", "lost packets are rebuilt by routers"]
          },
          {
            label: "Open standards make the Internet ___",
            options: ["interoperable across vendors", "controlled by a single company", "faster than proprietary networks", "secure by default for all users"]
          }
        ],
        correctAnswers: ["a certificate authority", "traffic re-routes around failed links", "interoperable across vendors"],
        hint1: "They validate ownership of encryption keys.",
        hint2: "Routing is dynamic.",
        hint3: "Anyone can implement the standards.",
        explanation: "Certificate authorities issue digital certificates; routing works around failures; open standards enable interoperability."
      }
    },
    {
      id: "cspip4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Internet Questions

- "Open standards" + "interoperability" + "scalability" = Internet design wins.
- HTTPS = HTTP + encryption, with a certificate from a certificate authority.
- Dynamic routing + redundant paths = fault tolerance.
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
              "The site has been reviewed and verified safe by a government agency.",
              "Traffic is encrypted, and the server's certificate was validated.",
              "The user's account is protected from being hacked by any means.",
              "The page and its images will load faster than they would over HTTP."
            ],
            correctAnswer: 1,
            explanation: "HTTPS encrypts the connection and the certificate validates the site's keys; it does NOT promise the site's practices are safe or that the user's account cannot be compromised."
          },
          {
            question: "A regional Internet outage causes a major undersea cable to fail. Many websites still load, possibly slower. The most accurate explanation is ___",
            options: [
              "every website keeps a full local copy on each user's device.",
              "routers automatically send traffic along other available paths.",
              "each website owns a private fiber line around the cable.",
              "TCP retransmits packets until the broken cable is repaired."
            ],
            correctAnswer: 1,
            explanation: "The Internet is fault-tolerant: when a connection fails, data are sent along a different route if one exists."
          }
        ]
      }
    }
  ]
};
