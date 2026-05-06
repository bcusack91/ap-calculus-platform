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
              "encryption applied between the browser and the network card before any send",
              "abstraction provided by the operating system and its installed device drivers",
              "compression of the network-card identifier so the browser can't read it",
              "lossy encoding of card-specific bytes before they reach the application layer"
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
| **Latency** | Time for one packet round trip. | Time for first drop to arrive. |

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

3) The time for a single packet to make a round trip is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["LAN", "peer/peer", "latency"],
        hint1: "Local area.",
        hint2: "P2P.",
        hint3: "Round-trip time.",
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
            options: ["bulk file transfers, NOT real-time interactive use", "real-time gaming", "video calls", "live debate"]
          },
          {
            label: "A client-server architecture centralizes ___",
            options: ["control and data on the server", "storage on each peer", "all decisions on clients", "compression on the network"]
          },
          {
            label: "A P2P system continues working when ___",
            options: ["individual nodes leave or join, since no single point is required", "the central server fails (there is none)", "TLS fails", "IPv6 fails"]
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
              "only the underlying link's rated bandwidth, regardless of how busy it currently is.",
              "how many users are active and how the bandwidth is allocated; congestion lowers each share.",
              "only the transport-layer security protocol the users' applications happen to be using.",
              "only whether the network has switched from IPv4 to IPv6 for client addressing."
            ],
            correctAnswer: 1,
            explanation: "Shared bandwidth = per-user throughput depends on contention."
          },
          {
            question: "A live online game cares more about ___ than bulk download speed.",
            options: [
              "low latency between every player and the central game server",
              "high bandwidth on the link from the central server out to each player",
              "compression ratio of the game's installer downloaded once at the start",
              "lossless coding of every texture file shipped inside the game's install bundle"
            ],
            correctAnswer: 0,
            explanation: "Real-time interactive needs low latency."
          }
        ]
      }
    }
  ]
};
