export const cspComputingSystemsNetworksPart2Data = {
  topicSlug: "csp-computing-systems-networks",
  sections: [
    {
      id: "cspcsn2-intro",
      type: 'text' as const,
      content: `
# 🖥️ Computing Systems & Networks

**Part 2 of 7 — Key Processes**

---

## A Computing System Is A Stack Of Layers

Every modern device — phone, laptop, server, smart thermostat — is built from layered components, each abstracting the one below.

| Layer | Examples |
|-------|---------|
| **Hardware** | CPU, RAM, storage, network card. |
| **Firmware** | BIOS / UEFI, embedded controllers. |
| **OS kernel** | Memory + process + I/O management. |
| **System libraries** | Standard runtimes, drivers. |
| **Applications** | Browsers, games, your code. |

Each layer **abstracts** the messy details below, letting the next layer up be simpler.
      `
    },
    {
      id: "cspcsn2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A web browser does NOT need to know which brand of network card the device uses. The mechanism that hides this detail is ___",
            options: [
              "encryption between the browser and the network card before any send",
              "abstraction provided by the operating system and its drivers",
              "a standard that requires every network card to work the same way inside",
              "the browser itself, which contains code for every brand of card"
            ],
            correctAnswer: 1,
            explanation: "OS + drivers abstract hardware specifics."
          },
          {
            question: "A \"system\" in CSP terminology means ___",
            options: [
              "only the central processing unit — the chip that runs instructions.",
              "a collection of components that interact to provide some function.",
              "only software applications running on top of the operating system.",
              "only physical hardware components inside the device's case."
            ],
            correctAnswer: 1,
            explanation: "A system = interacting components, hardware + software."
          }
        ]
      }
    },
    {
      id: "cspcsn2-content",
      type: 'text' as const,
      content: `
## A Network Is A System Of Systems

A **network** is itself a computing system whose components are other computing systems plus the links between them. Each device:

- Has an address.
- Sends and receives data via a protocol.
- Cooperates with neighbors to forward traffic.

| Network type | Scale |
|-------------|-------|
| **PAN** (personal) | Bluetooth around one user. |
| **LAN** (local) | Home / classroom network. |
| **WAN** (wide) | Across cities / countries. |
| **Internet** | Network of networks. |

## Client-Server Vs. Peer-To-Peer

| Model | Behavior |
|-------|----------|
| **Client-server** | One central server; many clients request from it (web browsing, email). |
| **Peer-to-peer** | Each node is both client and server (BitTorrent, some video calls). |

Client-server is easier to administer; P2P is more fault-tolerant and scales differently.

## Throughput, Latency, Bandwidth

| Term | Meaning | Analogy |
|------|---------|---------|
| **Bandwidth** | Capacity (bits / second). | Width of a pipe. |
| **Throughput** | Actual rate achieved. | Water flowing right now. |
| **Latency** | Time for data to travel from sender to receiver (a ping reports the round trip). | Time for first drop to arrive. |

A high-bandwidth, high-latency link (satellite) can move lots of data — slowly.
      `
    },
    {
      id: "cspcsn2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A network spanning a single building or home is called a _______.

2) A model where each node acts as both client and server is called _______-to-_______.

3) The time it takes data to travel from sender to receiver is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["LAN", "peer/peer", "latency"],
        hint1: "Local area.",
        hint2: "P2P.",
        hint3: "It is a delay, not a rate.",
        explanation: "LAN; peer-to-peer; latency."
      }
    },
    {
      id: "cspcsn2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A satellite link with high bandwidth but high latency is best for ___",
            options: ["bulk file transfers, NOT real-time interactive use", "real-time gaming, since high bandwidth means fast replies", "live video calls, since bandwidth matters more than delay", "remote control of robots, NOT bulk file transfers"]
          },
          {
            label: "A client-server architecture centralizes ___",
            options: ["control and data on the server", "storage across every client device", "all decisions on the client devices", "routing on each individual peer"]
          },
          {
            label: "A P2P system continues working when ___",
            options: ["individual nodes leave or join, since no single point is required", "the central server stays online, since every peer depends on it", "all peers stay connected at once, since data lives on one node", "every peer holds a full copy, since partial copies cannot be shared"]
          }
        ],
        correctAnswers: ["bulk file transfers, NOT real-time interactive use", "control and data on the server", "individual nodes leave or join, since no single point is required"],
        hint1: "Bandwidth ≠ low latency.",
        hint2: "Server-centric.",
        hint3: "No central node.",
        explanation: "Sat = bulk; client-server centralizes; P2P resists individual failures."
      }
    },
    {
      id: "cspcsn2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Systems & Networks

- Distinguish bandwidth, throughput, and latency.
- Client-server vs. P2P trade-offs.
- A "system" is interacting components — abstraction is the unifying idea.
      `
    },
    {
      id: "cspcsn2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school provides a Wi-Fi network with 1 Gbps total bandwidth shared among 500 simultaneous users. Per-user effective throughput depends on ___",
            options: [
              "only the link's rated bandwidth, no matter how busy the network is.",
              "how many people are active and how the capacity is split between them.",
              "only the encryption protocol that each person's apps happen to use.",
              "only the distance between each device and the nearest wireless access point."
            ],
            correctAnswer: 1,
            explanation: "Shared bandwidth = per-user throughput depends on contention."
          },
          {
            question: "A live online game cares more about ___ than bulk download speed.",
            options: [
              "low latency between every player and the central game server",
              "high bandwidth on the link from the central server out to each player",
              "a large disk cache so that the game's files load quickly at launch",
              "a high download speed for patches that are installed at the start"
            ],
            correctAnswer: 0,
            explanation: "Real-time interactive needs low latency."
          }
        ]
      }
    }
  ]
};
