export const cspInternetProtocolsPart5Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip5-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 5 of 7 — Change Over Time**

---

## How The Internet Has Scaled

The Internet has grown from a few thousand devices to tens of billions. The principles that enabled this scale.

| Era | Devices | Notable change |
|-----|---------|---------------|
| 1980s | thousands | Birth of TCP/IP. |
| 1990s | millions | Web browsers; HTML/HTTP. |
| 2000s | hundreds of millions | Broadband; CDNs; cloud. |
| 2010s | billions | Mobile-first; HTTPS by default. |
| 2020s | tens of billions | IoT; IPv6 deployment widens. |
      `
    },
    {
      id: "cspip5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "IPv4 has ~4 billion addresses, which is no longer enough. The successor protocol with vastly more addresses is ___",
            options: [
              "IPv5",
              "IPv6",
              "TCP/2",
              "DNS+"
            ],
            correctAnswer: 1,
            explanation: "IPv6 uses 128-bit addresses (~$3.4 \\times 10^{38}$), enough for every device for the foreseeable future."
          },
          {
            question: "A Content Delivery Network (CDN) reduces page-load times by ___",
            options: [
              "compressing every byte of traffic at the origin server before it leaves the data center.",
              "serving cached copies of content from locations geographically near each requesting user.",
              "using only peer-to-peer connections between every requesting user and every other one nearby.",
              "rewriting every requested URL to point at the geographically nearest origin data center directly."
            ],
            correctAnswer: 1,
            explanation: "CDNs cache content close to users, reducing latency."
          }
        ]
      }
    },
    {
      id: "cspip5-content",
      type: 'text' as const,
      content: `
## Address Exhaustion And IPv6

IPv4 addresses are 32 bits → $2^{32}$ ≈ 4.3 billion. With smartphones, IoT, and rapid global growth, this isn't enough. **IPv6** uses 128-bit addresses → vastly more than the number of atoms on Earth's surface.

Workarounds during transition: NAT (Network Address Translation) lets one public IP serve many devices behind a router.

## Cloud And CDNs Changed The Picture

- **Cloud computing**: applications run on shared, on-demand infrastructure rather than self-hosted servers.
- **CDNs**: replicate content geographically so users connect to a nearby server.
- **Edge computing**: even more local processing — close to the user / device.

These reduce latency, increase reliability, and absorb traffic spikes.

## Encrypted-By-Default

In 2015 most web traffic was HTTP. By the 2020s the majority is HTTPS. Browsers now warn users on plain HTTP. This shift was driven by free certificate authorities (Let's Encrypt) and pressure from browser vendors.

## IoT And The Surface Of The Internet

"Things" — thermostats, cameras, doorbells — now connect to the Internet. This expands the **attack surface** dramatically. Every connected device is a potential entry point.
      `
    },
    {
      id: "cspip5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) IPv4 addresses are _______ bits long.

2) The successor with 128-bit addresses is _______.

3) A geographically distributed system that caches content close to users is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["32", "IPv6", "CDN"],
        hint1: "~4.3 billion addresses.",
        hint2: "After v4.",
        hint3: "Content Delivery Network.",
        explanation: "IPv4 = 32 bits. IPv6 = 128 bits. CDN = cached content geographically distributed."
      }
    },
    {
      id: "cspip5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "IPv6 was created primarily to address ___",
            options: ["IPv4 address exhaustion", "slow page-load times", "lack of encryption", "too many DNS servers"]
          },
          {
            label: "Adding many IoT devices to a network primarily increases ___",
            options: ["the attack surface", "IP address availability", "screen brightness", "bandwidth supply"]
          },
          {
            label: "A CDN reduces page-load latency by ___",
            options: ["serving from a nearby cache", "compressing TCP", "using IPv4 only", "disabling DNS"]
          }
        ],
        correctAnswers: ["IPv4 address exhaustion", "the attack surface", "serving from a nearby cache"],
        hint1: "Need more addresses.",
        hint2: "More endpoints = more risk.",
        hint3: "Closer = faster.",
        explanation: "IPv6 = address space. IoT = larger attack surface. CDN = geographic caching."
      }
    },
    {
      id: "cspip5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Internet Evolution

- "Out of IP addresses" → IPv6 (or NAT as a stopgap).
- "Faster page loads worldwide" → CDN.
- "More devices = more attack opportunities" = a Big Idea 5/security tie-in.
- "Encrypted by default" describes the modern web.
      `
    },
    {
      id: "cspip5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A streaming service sees viewers in 80 countries. Page load time is poor for users far from its main data center. The most appropriate scaling response is ___",
            options: [
              "build one bigger data center near the company headquarters.",
              "use a CDN with edge servers in many regions.",
              "switch from TCP to UDP.",
              "move from IPv6 back to IPv4."
            ],
            correctAnswer: 1,
            explanation: "CDNs reduce latency by serving cached content from regional edge locations."
          },
          {
            question: "An organization adds 2,000 IoT sensors (cameras, thermostats) to its network. The most pressing CSP-aligned concern is ___",
            options: [
              "the existing organizational network requires no architectural changes to handle the additional 2,000 sensors safely.",
              "every connected device expands the attack surface and requires patching, credential management, and segmentation.",
              "IPv6 addressing fundamentally cannot operate with sensor devices the way it operates with conventional computers.",
              "TCP transport-layer protocol fundamentally cannot carry sensor telemetry the way it carries conventional traffic."
            ],
            correctAnswer: 1,
            explanation: "IoT devices commonly ship with weak defaults; managing them is a top security concern."
          }
        ]
      }
    }
  ]
};
