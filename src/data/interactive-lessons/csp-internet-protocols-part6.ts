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

Apply packets, protocols, routing, and fault tolerance to scenarios.
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
            question: "A message is split into packets 1 through 5. Packets 1, 2, 4, and 5 arrive, and packet 3 never does. The message is delivered with TCP. What happens next?",
            options: [
              "The receiver displays the message with a gap where packet 3 belongs.",
              "The receiver notices packet 3 is missing and has it sent again.",
              "The receiver throws away packets 4 and 5 and keeps only 1 and 2.",
              "The receiver waits for the sender to start over from packet 1."
            ],
            correctAnswer: 1,
            explanation: "TCP provides reliable delivery: missing packets are requested again, and the data are reassembled in order."
          },
          {
            question: "You're building a real-time multiplayer game. Which protocol is most appropriate for in-game position updates?",
            options: [
              "TCP, because reliability of every single position update is the most important property of the game.",
              "UDP, because low delay matters more than resending position updates that are already out of date.",
              "HTTP, because the Web's protocol delivers position updates faster than any other protocol could.",
              "IP alone with no other protocol on top, because IP guarantees the updates arrive in order."
            ],
            correctAnswer: 1,
            explanation: "Old position updates are not worth resending; UDP fits real-time games."
          }
        ]
      }
    },
    {
      id: "cspip6-content",
      type: 'text' as const,
      content: `
## Worked Scenario 1: Choose A Protocol

| Use case | Best fit |
|---------|---------------|
| File download | TCP (every byte must arrive). |
| Live video call | UDP (low delay; small drops tolerated). |
| Online banking page | TCP, with encryption (HTTPS). |
| Software update | TCP (must arrive complete and correct). |

## Worked Scenario 2: Reassemble A Message

A message is split into packets 1 to 6. They arrive as **4, 1, 6, 2**.

- Packets 3 and 5 are missing.
- With TCP, the receiver requests packets 3 and 5 again, then uses each packet's metadata to put all six in order: 1, 2, 3, 4, 5, 6.
- With UDP, packets 3 and 5 are simply lost.

## Worked Scenario 3: Will It Keep Working?

Network: Home–R1, Home–R2, R1–R3, R2–R3, R3–Server.

- If R1 fails, data go Home → R2 → R3 → Server. Still works (redundant path).
- If R3 fails, every path is broken. R3 is a **single point of failure**.
- Adding a connection R2–Server would make the network tolerate the loss of R3.
      `
    },
    {
      id: "cspip6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A real-time game uses _______ for low-delay position updates.

2) A banking page is sent with HTTPS so that the data are _______.

3) A message is split into 6 packets, and only packets 1, 2, 4, and 6 arrive. With TCP, the receiver requests _______ packets again.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["UDP", "encrypted", "2"],
        hint1: "No waiting for resends.",
        hint2: "The \"S\" means secure.",
        hint3: "Which numbers from 1 to 6 are missing?",
        explanation: "UDP for low delay. HTTPS encrypts data in transit. Packets 3 and 5 are missing, so 2 packets are requested again."
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
            label: "A message's packets arrive in the order 3, 1, 2. Using TCP, the receiver ___",
            options: ["reorders them using their metadata", "discards the whole message", "shows the data in arrival order", "asks for all three again"]
          },
          {
            label: "For software updates that must arrive complete, the right protocol is ___",
            options: ["TCP", "UDP", "IP only", "HTTP only"]
          },
          {
            label: "For audio in a live call, the right protocol is usually ___",
            options: ["UDP", "TCP", "IP only", "HTTP only"]
          }
        ],
        correctAnswers: ["reorders them using their metadata", "TCP", "UDP"],
        hint1: "Packets carry data for reassembly.",
        hint2: "Reliability needed.",
        hint3: "Delay matters more than resending.",
        explanation: "TCP reorders packets using metadata. TCP for reliability. UDP for real-time audio."
      }
    },
    {
      id: "cspip6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Protocol Workshops

- Ask "what does this app prioritize?": complete data or low delay?
- Complete and in order → TCP. Real-time, drops tolerated → UDP. Routing → IP. Web pages → HTTP.
- Track packets by number: which arrived, which are missing, what order they go back in.
- For network diagrams, look for a device or connection that is on every path.
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
            question: "A school posts recorded lectures that students download to watch later. Which protocol choice fits the download best?",
            options: [
              "TCP, since every part of the file must arrive complete and in order.",
              "UDP, since lost parts of a lecture file can be skipped with no effect.",
              "IP alone, since it guarantees that every packet arrives in order.",
              "No protocol, since files can be sent without any agreed rules."
            ],
            correctAnswer: 0,
            explanation: "A downloaded file must be complete, so TCP's reliable, ordered delivery fits."
          },
          {
            question: "A new app sends a live sports score every second. If one update is lost, a newer one arrives a second later anyway. Which choice fits best?",
            options: [
              "TCP, since every out-of-date score must eventually be delivered.",
              "UDP, since waiting for a resend would gain nothing here.",
              "HTTP only, since live data cannot use any other Internet protocol.",
              "No packets at all, since live scores need their own dedicated wire."
            ],
            correctAnswer: 1,
            explanation: "When old data quickly become useless, there is no point waiting to resend them; UDP fits."
          }
        ]
      }
    }
  ]
};
