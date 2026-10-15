export const cspComputingSystemsNetworksPart1Data = {
  topicSlug: 'csp-computing-systems-networks',
  sections: [
    {
      id: 'cspcsn1-intro',
      type: 'text' as const,
      content: `
# 🌐 Computing Systems & Networks

**Part 1 of 7 — Devices, Networks, and the Internet**

---

## The Vocabulary of Big Idea 4

| Term | Meaning | Examples |
|------|---------|----------|
| **Computing device** | A physical artifact that can run a program | Computers, tablets, servers, routers, smart sensors |
| **Computing system** | A group of computing devices and programs working together for a common purpose | A school's grading system |
| **Computer network** | A group of interconnected computing devices capable of sending or receiving data | A home Wi-Fi network |

A computer network is a **type of computing system**.

---

## Paths, Routing, and Bandwidth

- A **path** between a sender and a receiver is a sequence of directly connected computing devices that begins at the sender and ends at the receiver.
- **Routing** is the process of finding a path from sender to receiver.
- **Bandwidth** is the maximum amount of data that can be sent in a fixed amount of time, usually measured in **bits per second**.

## How Data Travels

Information passes through the Internet as a **data stream**. The stream is split into chunks of data, and each chunk is wrapped in a **packet**. A packet contains:
- **A chunk of the data** being sent
- **Metadata** used to route the packet from origin to destination and to reassemble the data at the end

Packets may arrive **in order, out of order, or not at all**.
      `
    },
    {
      id: 'cspcsn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is data sent across the internet in packets rather than as one large file?',
            options: [
              'Packets always arrive faster, since smaller units move faster',
              'Packets can take different routes, so traffic can avoid failures',
              'Large files cannot be sent electronically in a single piece',
              'Packets are encrypted automatically, but whole files are not'
            ],
            correctAnswer: 1,
            explanation: 'Each packet is routed on its own, so packets can take different paths to the destination. If one path is congested or fails, later packets can go another way, and they are reassembled at the destination.'
          },
          {
            question: 'Which of the following is a computing device, as the AP framework defines the term?',
            options: [
              'A smart sensor that runs a program to report temperature',
              'The set of rules that two computers follow to exchange data',
              'A path of directly connected devices from sender to receiver',
              'The maximum amount of data a network can send per second'
            ],
            correctAnswer: 0,
            explanation: 'A computing device is a physical artifact that can run a program, such as a computer, router, or smart sensor. The others describe a protocol, a path, and bandwidth.'
          }
        ]
      }
    },
    {
      id: 'cspcsn1-content',
      type: 'text' as const,
      content: `
## The Internet

The **Internet** is a computer network made of interconnected networks that use **standardized, open (nonproprietary) communication protocols**.

| Idea | What the CED says |
|------|-------------------|
| **Protocol** | An agreed-upon set of rules that specify the behavior of a system |
| **Open protocols** | Let anyone easily connect additional devices to the Internet |
| **Access** | Depends on the ability to connect a device to an Internet-connected device |
| **Dynamic routing** | Routing on the Internet is usually not specified in advance |
| **Scalability** | The capacity of a system to change in size and scale to meet new demands; the Internet was designed to be scalable |

Common Internet protocols: **IP**, **TCP**, and **UDP**. The **World Wide Web** is a system of linked pages, programs, and files; it uses the Internet, and **HTTP** is a protocol used by the Web.

## Parallel and Distributed Computing
- **Sequential**: operations are performed in order, one at a time
- **Parallel**: the program is broken into smaller sequential operations, some of which run at the same time
- **Distributed**: multiple devices are used to run a program

> 🔑 Parallel computing can speed up a task, but the sequential portion that cannot be split limits how much faster it can get.
      `
    },
    {
      id: 'cspcsn1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The process of finding a path from sender to receiver is called _______.

2) Data is split into smaller chunks called _______ before being sent across the Internet.

3) An agreed-upon set of rules that specify the behavior of a system is a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['routing', 'packets', 'protocol'],
        hint1: 'Finding the route.',
        hint2: 'Small pieces of data sent independently.',
        hint3: 'IP, TCP, UDP, and HTTP are examples.',
        explanation: 'Routing finds a path. Packets carry chunks of data. Protocols are agreed-upon rules.'
      }
    },
    {
      id: 'cspcsn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Network Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A group of interconnected computing devices that can send or receive data is a ___',
            options: ['computer network', 'computing device', 'protocol', 'packet']
          },
          {
            label: 'The maximum amount of data that can be sent in a fixed amount of time is called ___',
            options: ['Bandwidth', 'Routing', 'Redundancy', 'Scalability']
          },
          {
            label: 'The World Wide Web ___ the Internet',
            options: ['uses', 'is the same as', 'replaced', 'is older than']
          }
        ],
        correctAnswers: ['computer network', 'Bandwidth', 'uses'],
        hint1: 'Devices connected together.',
        hint2: 'Measured in bits per second.',
        hint3: 'The Web is a system of linked pages that runs on top of the network.',
        explanation: 'Connected devices form a network. Bandwidth is the maximum data rate. The Web uses the Internet, with HTTP as its protocol.'
      }
    },
    {
      id: 'cspcsn1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Computing Systems & Networks

- Know the definitions: computing device, computing system, network, path, routing, bandwidth
- **Packets** carry a chunk of data plus metadata for routing and reassembly, and can arrive out of order or not at all
- The Internet uses **open protocols** (IP, TCP, UDP); the Web uses **HTTP** and runs on the Internet
- **Redundancy** in the Internet means multiple paths exist, so a single failure rarely stops communication
- Bandwidth = maximum data per unit of time, in bits per second
- A parallel solution takes as long as its sequential tasks plus its longest parallel task
      `
    },
    {
      id: 'cspcsn1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two packets from the same email arrive at the destination in different order. What happens?',
            options: [
              'The email is discarded, and the sender is notified of the error',
              'The receiver uses the packets\' metadata to put them back in order',
              'The email is displayed with its content scrambled out of order',
              'The sender must resend every packet of the email in order'
            ],
            correctAnswer: 1,
            explanation: 'Packets carry metadata used for reassembly, so the receiving computer can rebuild the message in the correct order regardless of arrival order.'
          },
          {
            question: 'A task takes 60 seconds when run sequentially. It is split into 4 equal parts that run in parallel on 4 processors, with no sequential portion. What is the minimum time?',
            options: [
              '60 seconds',
              '15 seconds',
              '240 seconds',
              '4 seconds'
            ],
            correctAnswer: 1,
            explanation: 'Four equal parallel parts of 15 seconds each finish together, so the task takes 60 / 4 = 15 seconds. Any sequential portion would add to that time.'
          }
        ]
      }
    }
  ]
};
