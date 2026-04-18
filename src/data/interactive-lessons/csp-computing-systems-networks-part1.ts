export const cspComputingSystemsNetworksPart1Data = {
  topicSlug: 'csp-computing-systems-networks',
  sections: [
    {
      id: 'cspcsn1-intro',
      type: 'text' as const,
      content: `
# 🌐 Computing Systems & Networks

**Part 1 of 7 — Hardware, Software, and Network Fundamentals**

---

## Computing Systems

A computing system processes data using:

| Component | Role | Examples |
|-----------|------|---------|
| **Input** | Receives data from users/environment | Keyboard, mouse, microphone, sensor |
| **Processing** | Executes instructions on data | CPU (Central Processing Unit) |
| **Storage** | Saves data for later use | Hard drive, SSD, RAM |
| **Output** | Presents results | Monitor, speakers, printer |

### Software Types
| Type | Description | Examples |
|------|-----------|---------|
| **System software** | Manages hardware resources | Operating system (Windows, macOS, Linux) |
| **Application software** | Performs tasks for users | Web browser, word processor, game |

> 🔑 Software is a set of instructions. Hardware is the physical equipment. Software runs ON hardware.

---

## Networks

A **network** connects computing devices to share resources and communicate.

| Network Type | Scale | Example |
|-------------|-------|---------|
| **LAN** | Local Area Network (building/room) | School WiFi |
| **WAN** | Wide Area Network (large geographic area) | The Internet |

### How Data Travels
Data is broken into **packets** — small chunks sent independently across the network. Each packet contains:
- **Header**: Source address, destination address, packet number
- **Payload**: The actual data being sent
- **Trailer**: Error-checking information
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
              'Packets are cheaper to send',
              'Packets can take different routes, improving reliability and efficiency',
              'Large files cannot be sent electronically',
              'Packets are encrypted but files are not'
            ],
            correctAnswer: 1,
            explanation: 'Packet switching allows different packets to take different routes to the destination. If one path is congested or fails, packets reroute automatically. They are reassembled at the destination.'
          },
          {
            question: 'What is the role of the CPU in a computing system?',
            options: [
              'Stores data permanently',
              'Displays information on screen',
              'Processes instructions and performs calculations',
              'Connects to the internet'
            ],
            correctAnswer: 2,
            explanation: 'The CPU (Central Processing Unit) is the "brain" of the computer. It fetches, decodes, and executes instructions. Storage is handled by drives, display by monitors, and networking by NICs.'
          }
        ]
      }
    },
    {
      id: 'cspcsn1-content',
      type: 'text' as const,
      content: `
## The Internet

The Internet is a global network of networks — a **WAN** connecting millions of smaller networks worldwide.

### Key Internet Infrastructure

| Component | Purpose |
|-----------|---------|
| **Router** | Forwards packets between networks, choosing the best path |
| **DNS** | Domain Name System — translates names (google.com) to IP addresses |
| **IP Address** | Unique numerical address for each device on the network |
| **Bandwidth** | Maximum data transfer rate (bits per second) |
| **Latency** | Time delay for data to travel from source to destination |

### Scalability
The Internet was designed to scale. Key design principles:
- **Open standards**: Anyone can connect using standard protocols
- **Redundancy**: Multiple paths between any two points
- **Decentralized**: No single point of control
- **Packet switching**: Efficient use of shared connections

## Parallel and Distributed Computing
- **Sequential**: Tasks done one after another
- **Parallel**: Multiple tasks done simultaneously on multiple processors
- **Distributed**: Tasks split across multiple computers on a network

> 🔑 Parallel computing can speed up tasks but has limits — some tasks have dependencies that prevent parallelization.
      `
    },
    {
      id: 'cspcsn1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The system that translates domain names (like google.com) to IP addresses is called _______.

2) Data is split into smaller chunks called _______ before being sent across a network.

3) A device that forwards data between networks, choosing the best path, is a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNS', 'packets', 'router'],
        hint1: 'Domain Name System.',
        hint2: 'Small pieces of data sent independently.',
        hint3: 'It routes traffic between networks.',
        explanation: 'DNS = name to IP. Packets = data chunks. Router = forwards between networks.'
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
            label: 'A school WiFi network covering one building is a ___',
            options: ['LAN (Local Area Network)', 'WAN (Wide Area Network)', 'DNS', 'The Internet']
          },
          {
            label: 'The maximum data transfer rate of a connection is called ___',
            options: ['Bandwidth', 'Latency', 'DNS resolution', 'Packet size']
          },
          {
            label: 'The Internet uses ___ switching, which breaks data into small independent chunks',
            options: ['Packet switching', 'Circuit switching', 'Message switching', 'Cell switching']
          }
        ],
        correctAnswers: ['LAN (Local Area Network)', 'Bandwidth', 'Packet switching'],
        hint1: 'Local to one building.',
        hint2: 'Maximum rate, measured in bits per second.',
        hint3: 'Data broken into packets.',
        explanation: 'School WiFi = LAN. Max rate = bandwidth. Internet uses packet switching.'
      }
    },
    {
      id: 'cspcsn1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Computing Systems & Networks

- Know the four components: input, processing, storage, output
- **DNS** translates human-readable names to IP addresses — tested frequently
- **Packets** contain header (addresses), payload (data), and can take different routes
- **Redundancy** in the Internet means multiple paths exist — no single point of failure
- Bandwidth = max speed. Latency = delay. Know the difference
- Parallel computing has speedup limits due to task dependencies (sequential bottleneck)
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
              'The email is lost',
              'The packets are reassembled in the correct order using sequence numbers in the headers',
              'The email arrives with the content scrambled',
              'The sender must resend the email'
            ],
            correctAnswer: 1,
            explanation: 'Each packet has a sequence number in its header. The destination computer uses these numbers to reassemble packets in the correct order, regardless of arrival order.'
          },
          {
            question: 'A task takes 60 seconds sequentially. With 4 processors running in parallel (assuming perfect parallelization), the minimum time is:',
            options: [
              '60 seconds',
              '15 seconds',
              '240 seconds',
              '4 seconds'
            ],
            correctAnswer: 1,
            explanation: 'With perfect parallelization, 4 processors divide the work equally: 60/4 = 15 seconds. In practice, overhead and dependencies often prevent perfect speedup.'
          }
        ]
      }
    }
  ]
};
