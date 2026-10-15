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
            question: "Data sent through the Internet are broken into ___ that may take different paths.",
            options: [
              "packets",
              "circuits",
              "protocols",
              "addresses"
            ],
            correctAnswer: 0,
            explanation: "Data streams are split into chunks carried in packets, and each packet is routed on its own."
          },
          {
            question: "A protocol that makes sure every packet arrives and puts the data back in order is ___",
            options: [
              "UDP",
              "IP",
              "TCP",
              "HTTP"
            ],
            correctAnswer: 2,
            explanation: "TCP provides reliable, ordered delivery; UDP and IP do not guarantee it, and HTTP is the Web's protocol."
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
| Packet | A chunk of data plus metadata used for routing and reassembly. |
| IP | Addresses packets and routes them across networks. |
| TCP | Adds reliable, ordered delivery: lost packets are resent. |
| UDP | No guarantee of delivery or order; less waiting. |
| HTTP | The protocol of the World Wide Web. |
| HTTPS | HTTP with encryption, using a certificate from a certificate authority. |
| World Wide Web | A system of linked pages, programs, and files that uses the Internet. |
| Router | A device that forwards packets toward their destination. |
| Scalability | The capacity to change in size and scale to meet new demands. |
| IPv6 | Successor to IPv4 with 128-bit addresses. |

## Common Exam Pitfalls

- "TCP and IP are the same protocol." (No — TCP makes delivery reliable, IP routes packets.)
- "UDP is unreliable, so it's bad." (No — it's a deliberate trade-off for low delay.)
- "HTTPS protects me from any threat." (No — it protects data in transit, not from phishing or compromised servers.)
- "The Internet and the Web are the same thing." (No — the Web uses the Internet.)
      `
    },
    {
      id: "cspip7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The protocol used by the World Wide Web is _______.

2) The transport protocol that guarantees ordered, reliable delivery is _______.

3) The protocol used for real-time apps that prefer low delay over resending lost data is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["HTTP", "TCP", "UDP"],
        hint1: "HyperText Transfer Protocol.",
        hint2: "Three-letter, starts with T.",
        hint3: "Three-letter, starts with U.",
        explanation: "HTTP for the Web, TCP for reliability, UDP for speed."
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
            options: ["HTTPS encryption is in use", "the site is owned by a bank", "the page cannot be hacked", "no cookies are stored"]
          },
          {
            label: "Packets sent across the Internet may arrive ___",
            options: ["in order, out of order, or not at all", "only in the exact order they were sent", "only after every router approves them", "only over one fixed path per message"]
          },
          {
            label: "Routing decisions on the Internet are made by ___",
            options: ["routers running routing algorithms", "web servers that look up each hop", "web browsers choosing each path", "a central Internet control server"]
          }
        ],
        correctAnswers: ["HTTPS encryption is in use", "in order, out of order, or not at all", "routers running routing algorithms"],
        hint1: "Lock = encryption.",
        hint2: "No ordering or delivery guarantee from IP.",
        hint3: "Routers route.",
        explanation: "Padlock = encrypted connection. Packets may arrive in any order or be lost. Routers handle routing."
      }
    },
    {
      id: "cspip7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Be ready to identify: TCP vs UDP, IP vs HTTP, HTTPS vs HTTP, the Internet vs the Web.
- Packets carry data + metadata and may arrive in order, out of order, or not at all; TCP adds reliability.
- Open protocols and a scalable design let the Internet grow; redundant paths make it fault-tolerant.
- HTTPS protects data in transit; it does not stop phishing or a compromised server.
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
              "do NOT log in through the link but visit the bank directly, since HTTPS never verifies who sent an email.",
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
              "UDP for the real-time voice stream and TCP/HTTPS for the reliable file upload requests.",
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
