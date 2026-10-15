export const cspComputingSystemsNetworksPart4Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn4-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 4 of 7 — Connections & Interactions: Fault Tolerance and Access**

---

## Systems & Networks Connect Across CSP

| Connection | Why |
|-----------|-----|
| Networks ↔ Reliability | Redundant paths keep the Internet running when parts fail. |
| Networks ↔ Data | Large data sets may need many computers working in parallel. |
| Networks ↔ Security | Data sent over public networks can be intercepted. |
| Networks ↔ Impact | Who can connect, and who cannot, shapes access and opportunity. |
      `
    },
    {
      id: "cspcsn4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which statement best describes a fault-tolerant system?",
            options: [
              "It is built so that none of its components ever fail.",
              "It keeps working even when some of its components fail.",
              "It shuts down safely as soon as any one component fails.",
              "It has exactly one path between any two of its devices."
            ],
            correctAnswer: 1,
            explanation: "A fault-tolerant system can support failures and still continue to function."
          },
          {
            question: "A region with no broadband access faces ___",
            options: [
              "no real effect on residents, since most daily activities happen offline.",
              "a digital divide, with fewer chances for online learning and remote jobs.",
              "lower prices for online services, since providers charge by distance.",
              "faster internet once it arrives, since newer networks skip old equipment."
            ],
            correctAnswer: 1,
            explanation: "Differing access to computing devices and the Internet based on geography is part of the digital divide."
          }
        ]
      }
    },
    {
      id: "cspcsn4-content",
      type: 'text' as const,
      content: `
## Fault Tolerance and Redundancy

- **Redundancy** is the inclusion of extra components that can be used to mitigate failure if other components fail.
- One way to build network redundancy is to have **more than one path** between any two connected devices.
- If a device or connection on the Internet fails, later data are sent along a **different route**, if one exists.
- A system that can support failures and still function is **fault-tolerant**. This matters because parts of complex systems fail at unexpected times, often in groups.
- Redundancy usually **requires additional resources** (more devices, more connections, more cost), but it provides the benefit of fault tolerance.
- Redundant routing options also help the Internet **scale** to more devices and more people.

## The Digital Divide

The **digital divide** is differing access to computing devices and the Internet based on **socioeconomic, geographic, or demographic** characteristics.

| Fact | Example |
|------|---------|
| Access varies within and between countries | Rural areas often have slower or no broadband. |
| It affects groups and individuals | A whole town, or one family that cannot afford a device. |
| It raises issues of equity, access, and influence | Students without home Internet struggle with online homework. |
| It is affected by individuals, organizations, and governments | A library lends hotspots; a government funds rural broadband. |
      `
    },
    {
      id: "cspcsn4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Including extra components so a system can keep working when others fail is called _______.

2) Differing access to computing devices and the Internet is called the digital _______.

3) A system that can support failures and still function is called fault-_______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["redundancy", "divide", "tolerant"],
        hint1: "Extra, backup components.",
        hint2: "An equity gap.",
        hint3: "It tolerates faults.",
        explanation: "Redundancy provides backups. Unequal access is the digital divide. Systems that survive failures are fault-tolerant."
      }
    },
    {
      id: "cspcsn4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Adding redundant connections to a network usually ___",
            options: ["costs more but improves fault tolerance", "saves money and improves fault tolerance", "costs more and lowers fault tolerance", "has no effect on fault tolerance"]
          },
          {
            label: "If one connection on the Internet fails, later data are usually ___",
            options: ["sent along a different route", "lost for good", "held until it is repaired", "returned to the sender"]
          },
          {
            label: "A school in an area with poor connectivity faces ___",
            options: ["educational disadvantages tied to the digital divide", "no effect, since most lessons can be printed out", "advantages, since students face fewer distractions online", "lower costs that fully offset the slower access"]
          }
        ],
        correctAnswers: ["costs more but improves fault tolerance", "sent along a different route", "educational disadvantages tied to the digital divide"],
        hint1: "Extra parts are not free.",
        hint2: "Routing is dynamic.",
        hint3: "Equity gap.",
        explanation: "Redundancy costs resources but adds fault tolerance. Internet data are rerouted around failures when possible. Poor connectivity is part of the digital divide."
      }
    },
    {
      id: "cspcsn4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Fault Tolerance and Access

- Fault-tolerant = keeps working despite failures. Redundancy = extra components that make that possible.
- More than one path between devices → no single connection failure stops communication.
- Redundancy costs resources; the benefit is reliability and scalability.
- Digital divide: access differs by socioeconomic, geographic, and demographic factors.
      `
    },
    {
      id: "cspcsn4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A company links its two offices with one cable. When the cable is cut, the offices cannot communicate at all. Which change best improves fault tolerance?",
            options: [
              "Increase the bandwidth of the single existing cable.",
              "Add a second, separate connection between the offices.",
              "Send smaller packets over the single existing cable.",
              "Let only one office send data at any given moment."
            ],
            correctAnswer: 1,
            explanation: "A second path is redundancy: if one connection fails, data can still travel along the other."
          },
          {
            question: "A community center in a low-connectivity area provides public Wi-Fi for students. The most CSP-aligned framing is ___",
            options: [
              "unnecessary spending of community funds on a service students don't really need.",
              "addressing the digital divide so students can access learning resources online.",
              "wasted electricity that could have been used for other community programs instead.",
              "a security risk, since public Wi-Fi networks are always unsafe for every student."
            ],
            correctAnswer: 1,
            explanation: "The actions of organizations can narrow the digital divide by giving people access they would not otherwise have."
          }
        ]
      }
    }
  ]
};
