export const cspInternetProtocolsPart2Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip2-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 2 of 7 — Key Processes**

---

## How Information Travels The Internet

Two devices talk by following a stack of **protocols** — agreed rules at each layer. Each layer hides the layer below it.

| Layer | Job | Example protocol |
|-------|-----|------------------|
| **Application** | What the data MEANS to the app. | HTTP, SMTP, DNS |
| **Transport** | Reliable (or fast-but-lossy) delivery between two endpoints. | TCP, UDP |
| **Internet** | Routing packets across networks; addressing. | IP |
| **Link** | Physical signaling on a single hop (Wi-Fi, Ethernet). | 802.11, Ethernet |
      `
    },
    {
      id: "cspip2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "When you type a URL in a browser, the very first step usually involves which protocol?",
            options: [
              "SMTP",
              "DNS",
              "FTP",
              "SSH"
            ],
            correctAnswer: 1,
            explanation: "DNS resolves the human-readable name to an IP address before the browser can connect."
          },
          {
            question: "Data that crosses the Internet is broken into ___",
            options: [
              "files",
              "streams",
              "packets",
              "channels"
            ],
            correctAnswer: 2,
            explanation: "IP networks are packet-switched; everything is divided into discrete packets."
          }
        ]
      }
    },
    {
      id: "cspip2-content",
      type: 'text' as const,
      content: `
## A Single Web Request, Layer By Layer

You click a link to **example.com/page**:

1. **DNS** (application layer): browser asks a DNS server, "What's the IP for example.com?" → gets back, e.g., 93.184.216.34.
2. **TCP** (transport layer): browser opens a reliable connection to 93.184.216.34 on port 80 (or 443 for HTTPS).
3. **HTTP** (application layer): browser sends "GET /page HTTP/1.1".
4. **IP + link** layers: each TCP segment is wrapped in an IP packet and sent hop-by-hop across routers.
5. Server replies with the page; browser reassembles packets in order; renders HTML.

## Why Layered Protocols?

- **Independence:** the link layer can change (Wi-Fi → 5G) without breaking the higher layers.
- **Interoperability:** any device that speaks the standard layers can join.
- **Scalability:** changes at one layer don't cascade.

This is **abstraction at scale** — the central design idea of the Internet.

## Packets, Routers, And Best-Effort

A router's job is simple: read the destination IP in each packet's header and forward it toward the next hop. There's no guaranteed path; consecutive packets might take different routes. The Internet provides **best-effort** delivery — TCP layers reliability on top.
      `
    },
    {
      id: "cspip2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A set of agreed rules for how computers communicate is called a _______.

2) The system that translates domain names like example.com into IP addresses is called _______.

3) The basic unit of data that travels across the Internet is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["protocol", "DNS", "packet"],
        hint1: "Greek for \"first\" + \"agreement\".",
        hint2: "Domain Name System.",
        hint3: "Small chunks with headers.",
        explanation: "A protocol is an agreed rule. DNS resolves names → IPs. Data crosses the Internet as packets."
      }
    },
    {
      id: "cspip2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "TCP guarantees ___",
            options: ["ordered, reliable delivery", "fastest possible delivery", "encryption", "compression"]
          },
          {
            label: "IP's primary job is ___",
            options: ["routing packets to the destination address", "rendering web pages", "compressing data", "encrypting data"]
          },
          {
            label: "A web page that fails to load might be a problem at the ___ layer",
            options: ["any layer of the stack", "physical only", "DNS only", "browser only"]
          }
        ],
        correctAnswers: ["ordered, reliable delivery", "routing packets to the destination address", "any layer of the stack"],
        hint1: "That's TCP's defining feature.",
        hint2: "IP = Internet Protocol = routing.",
        hint3: "Every layer can fail.",
        explanation: "TCP = ordered & reliable. IP = routing. A failed page load can come from any layer."
      }
    },
    {
      id: "cspip2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: The Stack

- The exam will name a protocol and ask its **layer / job**. Memorize: DNS = naming, HTTP = web, SMTP = email, TCP = reliable transport, UDP = fast/unreliable transport, IP = routing.
- "Reliable + ordered" → TCP.
- "Fast, real-time, can drop packets" (e.g., voice/video) → UDP.
- "Best-effort" describes IP's lack of delivery guarantees.
- A change at one layer (new physical medium, new app) doesn't require changes elsewhere — that's the whole point of the layered design.
      `
    },
    {
      id: "cspip2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "You're streaming a live video call. Some packets arrive out of order or are dropped. The call still works. Which transport-layer protocol is most likely in use?",
            options: [
              "TCP, because reliability is the most important property of any real-time video-call session.",
              "UDP, because real-time apps prefer low latency over the cost of waiting for retransmission.",
              "IP, because the Internet Protocol itself provides the reliability guarantees a video call needs.",
              "DNS, because the Domain Name System efficiently streams call audio and video as needed."
            ],
            correctAnswer: 1,
            explanation: "Real-time A/V uses UDP; a slightly garbled frame is preferable to waiting for retransmits."
          },
          {
            question: "A new wireless standard (Wi-Fi 7) is rolled out. Existing web browsers continue to work without modification. Why?",
            options: [
              "Wi-Fi 7 fundamentally does not carry IP packets the way previous Wi-Fi standards historically did.",
              "The layered protocol design isolates link-layer changes from the higher application-layer software.",
              "Browser developers worldwide pushed an emergency overnight update to support the new wireless standard.",
              "Wi-Fi 7 only carries the TCP transport-layer protocol and not application-layer protocols like HTTP."
            ],
            correctAnswer: 1,
            explanation: "Layering means the application layer doesn't need to know which physical medium carries its packets."
          }
        ]
      }
    }
  ]
};
