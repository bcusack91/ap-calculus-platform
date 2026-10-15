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

1. Information is passed through the Internet as a **data stream**.
2. The stream is split into **chunks of data**, and each chunk is wrapped in a **packet**.
3. Each packet carries **metadata** used to route it from origin to destination and to reassemble the data.
4. **Routing** is dynamic: each packet's path is found as it travels, not fixed in advance.
5. Packets may arrive **in order, out of order, or not at all**, so the receiver uses the metadata (and TCP) to rebuild the original data.

| Step | Who does it |
|------|-------------|
| Split data into packets | The sending device |
| Find a path for each packet | Routers along the way |
| Put packets back in order, ask for missing ones | TCP on the receiving device |
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
            question: "Which information does a packet carry in addition to its chunk of data?",
            options: [
              "metadata",
              "a key",
              "a bitmap",
              "a protocol"
            ],
            correctAnswer: 0,
            explanation: "Packets contain a chunk of data plus metadata used for routing and for reassembling the data."
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
            explanation: "Data streams are split into chunks, and each chunk is encapsulated in a packet."
          }
        ]
      }
    },
    {
      id: "cspip2-content",
      type: 'text' as const,
      content: `
## Worked Example: Packets Out of Order

A message is split into five packets, numbered 1 to 5 in their metadata. They arrive in this order: **2, 1, 5, 3**. Packet 4 never arrives.

- The receiver uses the numbers in the metadata to place packets 1, 2, 3, and 5.
- With **TCP**, the receiver notices that packet 4 is missing and asks for it to be sent again, then rebuilds the full message in order.
- With **UDP**, there is no guarantee: the missing data is simply lost, and the program must cope (a video call might skip a frame).

## Why Open Protocols?

- **Anyone can join**: because the protocols are open (nonproprietary), any company or person can build a device that connects to the Internet.
- **Access** depends on connecting a device to an Internet-connected device.
- **Scalability**: the Internet was designed so it can grow to meet new demands, from a few thousand devices to billions.

This is **abstraction at scale**: a person sending a message does not need to know how it is split up, which path each packet takes, or how it is put back together.
      `
    },
    {
      id: "cspip2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A set of agreed-upon rules for how computers communicate is called a _______.

2) The data that a packet carries for routing and reassembly is called _______.

3) The basic unit of data that travels across the Internet is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["protocol", "metadata", "packet"],
        hint1: "IP, TCP, and UDP are examples.",
        hint2: "Data about the data.",
        hint3: "A small chunk with metadata.",
        explanation: "A protocol is an agreed set of rules. Packets carry metadata for routing and reassembly. Data cross the Internet as packets."
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
            options: ["ordered, reliable delivery", "fast, low-latency delivery", "encrypted, private delivery", "a fixed path for every packet"]
          },
          {
            label: "IP's primary job is ___",
            options: ["routing packets to the destination address", "translating web pages into packets", "guaranteeing packets arrive in order", "encrypting data before transmission"]
          },
          {
            label: "Routing on the Internet is usually ___",
            options: ["dynamic, not specified in advance", "fixed by the sender before sending", "the same for every packet in a message", "done once when a device first connects"]
          }
        ],
        correctAnswers: ["ordered, reliable delivery", "routing packets to the destination address", "dynamic, not specified in advance"],
        hint1: "That's TCP's defining feature.",
        hint2: "IP = Internet Protocol = routing.",
        hint3: "Paths can change as conditions change.",
        explanation: "TCP = ordered and reliable. IP = addressing and routing. Internet routing is dynamic."
      }
    },
    {
      id: "cspip2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: How Data Travels

- Data stream → chunks → packets (data + metadata) → routed dynamically → reassembled.
- Packets may arrive in order, out of order, or not at all.
- "Reliable + ordered" → TCP. "Fast, real-time, can drop packets" → UDP. Routing → IP.
- Open protocols make it easy to connect new devices; the Internet was designed to scale.
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
            question: "You're on a live video call. Some packets arrive out of order or are dropped, and the call keeps going without waiting for them. Which protocol is most likely carrying the video?",
            options: [
              "TCP, because reliability is the most important property of any real-time video-call session.",
              "UDP, because real-time apps prefer low delay over having every lost packet resent.",
              "IP alone, because the Internet Protocol itself guarantees every packet arrives in the right order.",
              "HTTP, because web requests automatically skip any lost frames so the call keeps running smoothly."
            ],
            correctAnswer: 1,
            explanation: "Real-time audio and video commonly use UDP; a skipped frame is better than waiting for a resend."
          },
          {
            question: "A start-up builds a new kind of device without asking permission from anyone who runs the Internet, and the device connects and communicates successfully. Which feature of the Internet best explains this?",
            options: [
              "The protocols are open, so any company can make hardware that follows them.",
              "Every device must be approved by one central company before it can connect.",
              "Each new device receives its own private network that is separate from others.",
              "Only approved vendors know the secret protocols needed to connect."
            ],
            correctAnswer: 0,
            explanation: "The Internet's protocols are open (nonproprietary), which lets users easily connect additional computing devices."
          }
        ]
      }
    }
  ]
};
