export const cspInternetProtocolsPart5Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip5-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 5 of 7 — Scalability and Growth**

---

## Built to Scale

The **scalability** of a system is its capacity to change in size and scale to meet new demands. The Internet was **designed to be scalable**, and it has grown from a few thousand devices to billions.

| Design feature | How it helps the Internet grow |
|---------------|-------------------------------|
| **Open protocols** | Anyone can connect new devices by following the rules. |
| **Dynamic routing** | Paths are found as data travel, so new networks can join at any time. |
| **Redundant paths** | Extra routing options increase reliability and help the Internet scale to more devices and more people. |
| **Packets** | Many conversations share the same connections at once. |
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
              "HTTP/2"
            ],
            correctAnswer: 1,
            explanation: "IPv6 uses 128-bit addresses (~$3.4 \\times 10^{38}$), enough for every device for the foreseeable future."
          },
          {
            question: "The Internet grew from thousands of devices to billions. Which design feature most directly made this possible?",
            options: [
              "One central computer approves and routes every packet that is sent.",
              "It was built to be scalable, with open protocols anyone can use.",
              "Every device has a fixed, permanent path to every other connected device.",
              "Each new network must invent and use its own private set of protocols."
            ],
            correctAnswer: 1,
            explanation: "Open protocols and a scalable design let new devices and networks join without redesigning the Internet."
          }
        ]
      }
    },
    {
      id: "cspip5-content",
      type: 'text' as const,
      content: `
## Addresses Are Bits

An address is a group of bits, so the number of possible addresses is $2^{n}$ for n-bit addresses.

| Version | Bits | Possible addresses |
|---------|------|--------------------|
| IPv4 | 32 | $2^{32}$ ≈ 4.3 billion |
| IPv6 | 128 | $2^{128}$ ≈ $3.4 \\times 10^{38}$ |

Each extra bit doubles the number of addresses, so going from 32 to 128 bits multiplies the count by $2^{96}$. Moving to longer addresses is one way the Internet scales to meet new demand.

## More Devices, More to Protect

Smart sensors, cameras, and thermostats are computing devices too. Every real-world system has errors or design flaws that can be exploited, and **regular software updates** help fix them. A network with thousands of connected devices needs every one of them kept up to date.

## Encryption Everywhere

As more personal information travels over the Internet, more of it is **encrypted**. Data sent over public networks can be intercepted, so web sites now commonly use HTTPS, with digital certificates issued by **certificate authorities**.
      `
    },
    {
      id: "cspip5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) IPv4 addresses are _______ bits long.

2) The successor with 128-bit addresses is _______.

3) A system's capacity to change in size and scale to meet new demands is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["32", "IPv6", "scalability"],
        hint1: "~4.3 billion addresses.",
        hint2: "After v4.",
        hint3: "Can the system scale?",
        explanation: "IPv4 = 32 bits. IPv6 = 128 bits. Scalability = capacity to grow to meet demand."
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
            options: ["IPv4 address exhaustion", "slow routing between continents", "lack of encryption", "too many web pages"]
          },
          {
            label: "Regular software updates for connected devices help ___",
            options: ["fix flaws that could be exploited", "increase the network's bandwidth", "add more IP addresses", "make the protocols proprietary"]
          },
          {
            label: "Redundant routing options help the Internet ___",
            options: ["scale to more devices and people", "use fewer protocols overall", "avoid using packets entirely", "fix every path in advance"]
          }
        ],
        correctAnswers: ["IPv4 address exhaustion", "fix flaws that could be exploited", "scale to more devices and people"],
        hint1: "Need more addresses.",
        hint2: "All real systems have flaws.",
        hint3: "Redundancy supports growth.",
        explanation: "IPv6 = more address space. Updates fix exploitable flaws. Redundant routing increases reliability and helps the Internet scale."
      }
    },
    {
      id: "cspip5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Internet Growth

- The Internet was designed to be scalable; open protocols and dynamic routing let it grow.
- n-bit addresses → $2^{n}$ addresses; each extra bit doubles the count.
- Redundant paths improve reliability AND help the Internet scale.
- More connected devices means more systems that need regular updates.
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
            question: "IPv4 addresses use 32 bits and IPv6 addresses use 128 bits. How many times as many possible addresses does IPv6 provide?",
            options: [
              "4",
              "96",
              "$2^{96}$",
              "$2^{128}$"
            ],
            correctAnswer: 2,
            explanation: "$2^{128}$ ÷ $2^{32}$ = $2^{96}$. Each of the 96 extra bits doubles the number of addresses; 128 ÷ 32 = 4 compares bit counts, not addresses."
          },
          {
            question: "An organization adds 2,000 smart sensors (cameras, thermostats) to its network. The most pressing CSP-aligned concern is ___",
            options: [
              "the network needs no changes to handle 2,000 more devices safely.",
              "each device may have flaws attackers can exploit, so each needs updates.",
              "IPv6 addressing cannot work with sensors the way it does with PCs.",
              "TCP cannot carry sensor data the way it carries ordinary traffic."
            ],
            correctAnswer: 1,
            explanation: "All real-world systems have errors or design flaws that can be exploited; regular software updates help fix them."
          }
        ]
      }
    }
  ]
};
