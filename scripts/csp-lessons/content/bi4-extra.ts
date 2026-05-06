// BI4 (extra) — csp-computing-systems-networks and csp-fault-tolerance-security. Bespoke AP-quality content.

import type { Topic } from '../types';

const cspComputingSystemsNetworks: Topic = {
  slug: 'csp-computing-systems-networks',
  display: 'Computing Systems & Networks',
  emoji: '🖥️',
  exportPrefix: 'cspComputingSystemsNetworks',
  idPrefix: 'cspcsn',
  parts: {
    2: {
      introMd: `## A Computing System Is A Stack Of Layers

Every modern device — phone, laptop, server, smart thermostat — is built from layered components, each abstracting the one below.

| Layer | Examples |
|-------|---------|
| **Hardware** | CPU, RAM, storage, network card. |
| **Firmware** | BIOS / UEFI, embedded controllers. |
| **OS kernel** | Memory + process + I/O management. |
| **System libraries** | Standard runtimes, drivers. |
| **Applications** | Browsers, games, your code. |

Each layer **abstracts** the messy details below, letting the next layer up be simpler.`,
      quiz1: [
        { q: 'A web browser does NOT need to know which brand of network card the device uses. The mechanism that hides this detail is ___', opts: ['encryption applied between the browser and the network card before any send', 'abstraction provided by the operating system and its installed device drivers', 'compression of the network-card identifier so the browser can\'t read it', 'lossy encoding of card-specific bytes before they reach the application layer'], a: 1, exp: 'OS + drivers abstract hardware specifics.' },
        { q: 'A "system" in CSP terminology means ___', opts: ['only the central processing unit — the chip that runs instructions.', 'a collection of components that interact to provide some function.', 'only software applications running on top of the operating system.', 'only physical hardware components inside the device\'s case.'], a: 1, exp: 'A system = interacting components, hardware + software.' },
      ],
      contentMd: `## A Network Is A System Of Systems

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

A high-bandwidth, high-latency link (satellite) can move lots of data — slowly.`,
      inputs: {
        prompts: [
          'A network spanning a single building or home is called a _______.',
          'A model where each node acts as both client and server is called _______-to-_______.',
          'The time for a single packet to make a round trip is called _______.',
        ],
        answers: ['LAN', 'peer/peer', 'latency'],
        hints: ['Local area.', 'P2P.', 'Round-trip time.'],
        explanation: 'LAN; peer-to-peer; latency.',
      },
      dropdowns: {
        items: [
          { label: 'A satellite link with high bandwidth but high latency is best for ___', options: ['bulk file transfers, NOT real-time interactive use', 'real-time gaming', 'video calls', 'live debate'] },
          { label: 'A client-server architecture centralizes ___', options: ['control and data on the server', 'storage on each peer', 'all decisions on clients', 'compression on the network'] },
          { label: 'A P2P system continues working when ___', options: ['individual nodes leave or join, since no single point is required', 'the central server fails (there is none)', 'TLS fails', 'IPv6 fails'] },
        ],
        correct: ['bulk file transfers, NOT real-time interactive use', 'control and data on the server', 'individual nodes leave or join, since no single point is required'],
        hints: ['Bandwidth ≠ low latency.', 'Server-centric.', 'No central node.'],
        explanation: 'Sat = bulk; client-server centralizes; P2P resists individual failures.',
      },
      strategyMd: `## AP Exam Strategy: Systems & Networks

- Distinguish bandwidth, throughput, and latency.
- Client-server vs. P2P trade-offs.
- A "system" is interacting components — abstraction is the unifying idea.`,
      applied: [
        { q: 'A school provides a Wi-Fi network with 1 Gbps total bandwidth shared among 500 simultaneous users. Per-user effective throughput depends on ___', opts: ['only the underlying link\'s rated bandwidth, regardless of how busy it currently is.', 'how many users are active and how the bandwidth is allocated; congestion lowers each share.', 'only the transport-layer security protocol the users\' applications happen to be using.', 'only whether the network has switched from IPv4 to IPv6 for client addressing.'], a: 1, exp: 'Shared bandwidth = per-user throughput depends on contention.' },
        { q: 'A live online game cares more about ___ than bulk download speed.', opts: ['low latency between every player and the central game server', 'high bandwidth on the link from the central server out to each player', 'compression ratio of the game\'s installer downloaded once at the start', 'lossless coding of every texture file shipped inside the game\'s install bundle'], a: 0, exp: 'Real-time interactive needs low latency.' },
      ],
    },
    3: {
      introMd: `## How The Internet Routes Data

The Internet is a **packet-switched** network: data is split into packets, each of which finds its own way through routers to the destination.

| Concept | Effect |
|---------|--------|
| **Packet** | A chunk of data with source + destination addresses. |
| **Router** | Forwards packets toward their destination. |
| **Path** | Packets may take different routes to the same destination. |
| **Protocol** | Rules for how packets are formatted and exchanged. |`,
      quiz1: [
        { q: 'Two packets in the same conversation may take ___', opts: ['identical paths every single time, in the order the sender originally produced them.', 'different paths through the network and arrive in a different order than sent.', 'no path at all, since packet switching does not actually move packets through routers.', 'only fully encrypted paths reserved for that single conversation by upstream routers.'], a: 1, exp: 'Packet switching allows independent routing.' },
        { q: 'A router decides where to forward a packet based on ___', opts: ['the packet\'s payload content, by inspecting the application-layer body in detail.', 'the destination address combined with the router\'s current routing table.', 'the original sender\'s preference about which neighboring router to forward through.', 'the compression ratio achievable on the packet\'s payload by a downstream router.'], a: 1, exp: 'Routers use destination addresses + routing tables.' },
      ],
      contentMd: `## Layered Network Stack

| Layer | Role | Example |
|-------|------|---------|
| Application | What the program means | HTTP, DNS, SMTP |
| Transport | Reliable / unreliable streams between processes | TCP, UDP |
| Network | Routing between hosts | IP |
| Link | One hop between physical devices | Ethernet, Wi-Fi |

Each layer offers a service to the layer above and consumes services from the layer below.

## TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| Reliable? | Yes (retransmits lost) | No |
| In-order? | Yes | No |
| Overhead | Higher | Lower |
| Use case | Web, email, files | Video calls, games, DNS |

## DNS Translates Names To Addresses

When you type **example.com**, DNS resolves the name to an IP address. DNS is itself a globally distributed system; failures cascade visibly when it breaks.`,
      inputs: {
        prompts: [
          'The Internet is a _______-switched network.',
          'A reliable, in-order transport protocol is _______.',
          'Translating "example.com" to an IP address is the job of _______.',
        ],
        answers: ['packet', 'TCP', 'DNS'],
        hints: ['Independently routed chunks.', 'Reliable transport.', 'Domain Name System.'],
        explanation: 'Packet switching, TCP, DNS.',
      },
      dropdowns: {
        items: [
          { label: 'For a video call where occasional dropped frames are tolerable, the right protocol is ___', options: ['UDP-based (low latency, no retransmission)', 'TCP only', 'no protocol', 'TLS only'] },
          { label: 'For downloading a software update, the right protocol is ___', options: ['TCP (reliable, in-order)', 'UDP only', 'no protocol', 'no transport'] },
          { label: 'When DNS fails for a site, users see ___', options: ['the site appears unreachable, even though servers are healthy', 'no effect', 'TLS errors only', 'better routing'] },
        ],
        correct: ['UDP-based (low latency, no retransmission)', 'TCP (reliable, in-order)', 'the site appears unreachable, even though servers are healthy'],
        hints: ['Real-time → UDP.', 'Reliability → TCP.', 'Name resolution failure.'],
        explanation: 'UDP for real-time; TCP for reliability; DNS failure makes sites unreachable.',
      },
      strategyMd: `## AP Exam Strategy: Internet Routing

- Packets travel independently and may reorder.
- TCP = reliable + ordered; UDP = unreliable + low-overhead.
- DNS = name → address translation.`,
      applied: [
        { q: 'A user notices "ERR_NAME_NOT_RESOLVED" when visiting a site. The most likely root cause is ___', opts: ['the site\'s origin server has crashed and is no longer responding to TCP connections.', 'DNS lookup failed; the browser couldn\'t translate the domain into an IP address.', 'the user has no electricity supply, so the browser cannot send any packets at all.', 'the site\'s TLS certificate is misconfigured and the browser is refusing to connect.'], a: 1, exp: 'Name-not-resolved = DNS failure.' },
        { q: 'A real-time multiplayer game uses ___ for game-state updates and ___ for chat history.', opts: ['UDP for state updates because lossy is fine; TCP for chat because reliability matters.', 'TCP for state updates because reliability matters; UDP for chat because lossy is fine.', 'No transport protocols at all; both kinds of traffic skip the transport layer entirely.', 'Only the TLS handshake protocol; both state updates and chat history piggyback on it.'], a: 0, exp: 'Game state = low-latency UDP; chat history = reliable TCP.' },
      ],
    },
    4: {
      introMd: `## Systems & Networks Connect Across CSP

| Connection | Why |
|-----------|-----|
| Systems ↔ Algorithms | OS schedulers, routing all use algorithms. |
| Networks ↔ Internet | The Internet is the largest network. |
| Systems ↔ Security | Each layer is a potential attack surface. |
| Networks ↔ Impact | Connectivity (or lack of) shapes equality of access. |`,
      quiz1: [
        { q: 'An OS scheduler that decides which process runs next is fundamentally implementing an ___', opts: ['algorithm that ranks ready processes by some scheduling policy', 'compression scheme applied to ready processes before they execute', 'TLS handshake between the kernel and each ready user process', 'router whose forwarding table maps process IDs to CPU cores'], a: 0, exp: 'Schedulers are algorithms.' },
        { q: 'A region with no broadband access faces ___', opts: ['no impact at all on its residents\' day-to-day activities or opportunities.', 'a digital divide — limited access to education, jobs, and online services.', 'consistently lower latency than well-connected urban regions on the same continent.', 'consistently better TLS handshake performance because of reduced background traffic.'], a: 1, exp: 'Digital-divide framing.' },
      ],
      contentMd: `## Each System Layer Adds Trust Decisions

| Layer | Trust questions |
|-------|----------------|
| Hardware | Is firmware genuine? |
| OS | Are processes isolated? |
| App | Does the user trust this code? |
| Network | Is this connection encrypted? |
| Cloud | Do we trust the provider? |

A vulnerability at any layer can compromise the whole stack.

## Mobile And IoT Are Networks Too

| Device | Network role |
|--------|-------------|
| Smartphone | Multi-radio (cellular + Wi-Fi + Bluetooth). |
| Smart speaker | Always-listening client of cloud APIs. |
| Sensor | Often constrained — low power, tiny memory. |
| Smart car | Edge-to-cloud telemetry. |

These add scale and security challenges (lots of devices, many never patched).`,
      inputs: {
        prompts: [
          'A vulnerability at any layer of a system can compromise the _______ stack.',
          'Lack of broadband access in some regions is part of the digital _______.',
          'Tiny low-power sensors are typical of the _______ category of devices.',
        ],
        answers: ['whole', 'divide', 'IoT'],
        hints: ['Layers stack.', 'Equity issue.', 'Internet of Things.'],
        explanation: 'Layered trust; digital divide; IoT.',
      },
      dropdowns: {
        items: [
          { label: 'A trusted hardware module that protects keys even from the OS is part of ___', options: ['layered system trust', 'compression', 'a routing table', 'a DNS resolver'] },
          { label: 'IoT devices that ship without security updates create ___', options: ['large attack surfaces over time', 'better latency', 'compression gains', 'TLS speedups'] },
          { label: 'A school in an area with poor connectivity faces ___', options: ['educational disadvantages tied to the digital divide', 'no impact', 'lower TLS overhead', 'cleaner DNS'] },
        ],
        correct: ['layered system trust', 'large attack surfaces over time', 'educational disadvantages tied to the digital divide'],
        hints: ['Hardware roots of trust.', 'Unpatched IoT.', 'Equity gap.'],
        explanation: 'Trust per layer, unpatched IoT risk, digital divide impact.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Systems

- "Why does my browser work on different network cards?" → OS abstraction.
- "Lack of broadband impact?" → digital divide.
- "Why is this IoT device dangerous?" → never patched, large attack surface.`,
      applied: [
        { q: 'A smart-home device hasn\'t received updates in 5 years. The most accurate concern is ___', opts: ['no concern — unpatched IoT devices on a home network are essentially harmless.', 'known vulnerabilities accumulate; the device may become a vector for botnets.', 'the device\'s TLS handshake will simply run more slowly than freshly patched devices.', 'the device will compress its traffic less efficiently than recently updated devices do.'], a: 1, exp: 'Unpatched IoT = compounding risk.' },
        { q: 'A community center in a low-connectivity area provides public Wi-Fi for students. The most CSP-aligned framing is ___', opts: ['unnecessary spending of community funds on a service students don\'t really need.', 'addressing the digital divide so students can access learning resources online.', 'wasted electricity that could have been used for other community programs instead.', 'extra TLS overhead on the broader internet that slows down other users\' traffic.'], a: 1, exp: 'Public Wi-Fi as a digital-divide intervention.' },
      ],
    },
    5: {
      introMd: `## How Systems & Networks Have Evolved

| Era | Defining shift |
|-----|----------------|
| 1960s | Mainframes; time-sharing. |
| 1980s | Personal computers. |
| 1990s | Public Internet; World Wide Web. |
| 2000s | Cloud + mobile. |
| 2010s | Smartphones everywhere; IoT. |
| 2020s | Edge computing; 5G; specialized AI hardware. |`,
      quiz1: [
        { q: '"Cloud" computing primarily means ___', opts: ['weather-dependent computing whose performance varies with atmospheric conditions.', 'on-demand access to remote computing resources delivered over networks.', 'computing in which all programs run only on each user\'s local laptop.', 'computing that runs without any networks between client and any server.'], a: 1, exp: 'Cloud = on-demand remote resources.' },
        { q: 'Edge computing pushes processing ___', opts: ['toward central data centers only, far from any device that produces the data.', 'closer to the data source (sensors, devices) to reduce latency and bandwidth.', 'into orbital satellites that handle every workload regardless of physical location.', 'into the operating-system kernel only, refusing to run user-space code at all.'], a: 1, exp: 'Edge = nearer data source.' },
      ],
      contentMd: `## Cloud Service Models

| Model | What you manage |
|-------|----------------|
| **IaaS** | Virtual machines and storage. |
| **PaaS** | Your application code. |
| **SaaS** | Just the user interface (provider runs everything). |

## 5G And Edge

5G enables higher mobile bandwidth and lower latency. Edge computing puts compute near users (e.g., a CDN edge node) so latency-sensitive apps work even with intermittent core connectivity.

## Specialized Hardware

Modern AI workloads run on GPUs / TPUs / NPUs. The CSP big idea: hardware specialization keeps reshaping what kinds of programs are feasible.`,
      inputs: {
        prompts: [
          'On-demand access to remote computing resources is called the _______.',
          'Pushing computation closer to the data source is called _______ computing.',
          'A model where the provider runs everything and you only use a UI is called _______.',
        ],
        answers: ['cloud', 'edge', 'SaaS'],
        hints: ['Symbolic.', 'Boundary location.', 'Software as a Service.'],
        explanation: 'Cloud / edge / SaaS.',
      },
      dropdowns: {
        items: [
          { label: 'A real-time video filter on a phone is best run ___', options: ['on the device or at the network edge — local for low latency', 'at a distant central data center only', 'on a satellite only', 'on a router only'] },
          { label: '5G primarily improves ___', options: ['mobile bandwidth and latency', 'lossless ratio', 'AES key length', 'TCP overhead'] },
          { label: 'GPUs / TPUs are specialized for ___', options: ['parallel matrix / tensor math used by AI workloads', 'web browsing only', 'hard-drive control', 'firmware'] },
        ],
        correct: ['on the device or at the network edge — local for low latency', 'mobile bandwidth and latency', 'parallel matrix / tensor math used by AI workloads'],
        hints: ['Latency wins on edge.', '5G specs.', 'AI math.'],
        explanation: 'Edge for latency; 5G for mobile speed; GPUs/TPUs for AI.',
      },
      strategyMd: `## AP Exam Strategy: Systems Evolution

- Cloud + mobile reshaped where computation happens.
- Edge brings compute near users — lower latency, less core network usage.
- Specialized hardware enables new classes of applications.`,
      applied: [
        { q: 'A startup wants its app to load fast for users worldwide. The most CSP-aligned strategy is ___', opts: ['one origin server in one country, serving every user worldwide directly from there.', 'a CDN with edge nodes globally so static content is served close to each user.', 'no caching anywhere; rely on the user\'s browser to fetch every byte every time.', 'transport-layer encryption of every static asset before any user can fetch it.'], a: 1, exp: 'CDN edges minimize latency.' },
        { q: 'A medical-imaging team trains AI models on tens of thousands of scans. The most appropriate hardware is ___', opts: ['general-purpose CPUs only, without specialized parallel-math accelerators added.', 'GPUs or TPUs designed for the parallel tensor math that AI training requires.', 'a single laptop running a desktop operating system and consumer-grade hardware.', 'no special hardware — the team can train the models with pencil and paper instead.'], a: 1, exp: 'AI training requires specialized parallel hardware.' },
      ],
    },
    6: {
      introMd: `## Systems & Networks Workshop`,
      quiz1: [
        { q: 'Two computers in the same room transfer a 10 GB file at 100 Mbps. Approximate transfer time?', opts: ['8 minutes', '8 seconds', '8 hours', '8 days'], a: 0, exp: '10 GB ≈ 80,000 Mb / 100 Mbps = 800 s ≈ 13 min (8–13 min range).' },
        { q: 'A user from New York pings a server in Tokyo and gets ~150 ms RTT. The dominant factor is ___', opts: ['CPU speed.', 'distance / speed of light + intermediate routers.', 'TLS handshake only.', 'compression.'], a: 1, exp: 'Long-distance latency is dominated by physical distance + hops.' },
      ],
      contentMd: `## Worked: Estimate A Transfer

1 byte = 8 bits. 1 GB = 8 Gb. At 100 Mbps you transfer 100 Mb / second = ~12.5 MB / second. So 10 GB ≈ 800 seconds.

## Worked: Choose An Architecture

| Use case | Best fit |
|---------|---------|
| News article serving | CDN + caching |
| Multiplayer game | Game servers + UDP |
| Banking transactions | Strong consistency + TCP + TLS |
| Sensor telemetry | Edge aggregation + bursty upstream |

## Worked: Diagnose A Slow App

| Symptom | Likely cause |
|---------|-------------|
| Spinner forever | DNS / TCP / firewall |
| Loads then stalls | Backend slow query |
| Slow on first visit | No caching, large bundle |
| Slow only on Wi-Fi | Local interference / bandwidth |
| Slow worldwide except home country | No CDN |`,
      inputs: {
        prompts: [
          'Transferring 1 GB at 100 Mbps takes about _______ seconds.',
          'A "spinner forever" symptom often points to a _______ failure.',
          'Slow app worldwide except home country suggests no _______.',
        ],
        answers: ['80', 'DNS', 'CDN'],
        hints: ['8 Gb / 100 Mb/s.', 'Name resolution.', 'Edge delivery.'],
        explanation: 'Bandwidth math; DNS; CDN.',
      },
      dropdowns: {
        items: [
          { label: 'A satellite link with 100 Mbps and 600 ms RTT is best for ___', options: ['large bulk transfers', 'real-time first-person shooters', 'live debate', 'video calls'] },
          { label: 'A region without a nearby CDN node experiences ___', options: ['higher latency to fetch the same content', 'free service', 'better DNS', 'lower TLS overhead'] },
          { label: 'A multi-tenant cloud server\'s shared CPU may cause ___', options: ['"noisy neighbor" performance variance', 'lossy compression', 'TLS failure', 'IPv6 collapse'] },
        ],
        correct: ['large bulk transfers', 'higher latency to fetch the same content', '"noisy neighbor" performance variance'],
        hints: ['Bandwidth ≠ latency.', 'No nearby cache.', 'Shared resources.'],
        explanation: 'Sat for bulk; no CDN = high latency; cloud noisy neighbors are real.',
      },
      strategyMd: `## AP Exam Strategy: Workshop

- Practice bandwidth × time math for file transfers.
- Match symptoms to causes (DNS / TCP / CDN / backend / bandwidth).
- Real-time vs. bulk drives architecture.`,
      applied: [
        { q: 'A team\'s app feels fast in the US but slow in Asia. The single most useful change is ___', opts: ['no architectural change — the user-perceived gap will resolve as users adapt over time.', 'add a CDN with Asian edge nodes so static content is served closer to users there.', 'switch the entire site from TLS 1.3 down to the older TLS 1.0 protocol everywhere.', 'switch every endpoint from TCP to UDP and accept whatever packet loss results.'], a: 1, exp: 'Geographic CDN reduces transcontinental latency.' },
        { q: 'A user complains about laggy video calls on a Wi-Fi connection with 200 Mbps download. The most likely culprit is ___', opts: ['raw bandwidth — 200 Mbps is simply not enough capacity to make video calls usable.', 'latency, jitter, or packet loss on Wi-Fi or upstream — bandwidth alone isn\'t enough.', 'transport-layer security overhead on every packet exchanged with the call server.', 'lossy compression artifacts in the video stream that the call client can\'t decode.'], a: 1, exp: 'Real-time depends on latency / jitter / packet loss, not just bandwidth.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Computing Systems & Networks`,
      quiz1: [
        { q: 'A "system" in CSP is ___', opts: ['only software.', 'a collection of components that interact to provide some function.', 'only hardware.', 'only networks.'], a: 1, exp: 'System = interacting components.' },
        { q: 'A protocol is ___', opts: ['random behavior.', 'an agreed set of rules for how parties communicate.', 'a hardware feature only.', 'only encryption.'], a: 1, exp: 'Protocols = agreed rules.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| System | Interacting components. |
| Network | A system where components communicate. |
| Bandwidth / throughput / latency | Capacity / actual / delay. |
| Client-server / P2P | Two architecture models. |
| Packet switching | Independent packet routing. |
| TCP / UDP | Reliable / unreliable transport. |
| DNS | Name → address. |
| Cloud / edge | Remote / nearby compute. |
| Digital divide | Unequal connectivity → unequal opportunity. |

## Common Pitfalls

- Confusing bandwidth and latency.
- Assuming all packets take the same path.
- Forgetting DNS exists until it breaks.
- Treating IoT devices as patched.
- Ignoring connectivity inequality.`,
      inputs: {
        prompts: [
          'A reliable, in-order transport protocol is _______.',
          'Translating example.com to an IP is the job of _______.',
          'Unequal access to computing and connectivity is called the digital _______.',
        ],
        answers: ['TCP', 'DNS', 'divide'],
        hints: ['Reliable transport.', 'Name resolver.', 'Equity gap.'],
        explanation: 'TCP / DNS / digital divide.',
      },
      dropdowns: {
        items: [
          { label: 'High bandwidth ___', options: ['does NOT guarantee low latency', 'always means low latency', 'is the same as latency', 'eliminates congestion'] },
          { label: 'A CDN reduces ___', options: ['latency for users far from origin servers', 'all server costs to zero', 'bandwidth at the origin to zero', 'all bugs'] },
          { label: 'A protocol like HTTP is ___', options: ['an agreed set of rules for client / server communication', 'a hardware device', 'random data', 'a DNS record'] },
        ],
        correct: ['does NOT guarantee low latency', 'latency for users far from origin servers', 'an agreed set of rules for client / server communication'],
        hints: ['Bandwidth ≠ latency.', 'Edge proximity.', 'Rules of communication.'],
        explanation: 'Bandwidth ≠ latency; CDN cuts latency; protocols = rules.',
      },
      strategyMd: `## Final Exam Tips

- Distinguish bandwidth, throughput, latency.
- Packet switching, TCP/UDP, DNS, CDNs.
- Digital divide framing for access questions.
- Layered systems = abstraction at every layer.`,
      applied: [
        { q: 'A library wants to serve students in a low-bandwidth area with educational videos. The most CSP-aligned strategy is ___', opts: ['stream original-quality 4K video to every student regardless of their connection.', 'pre-download or cache lower-resolution lossy versions and serve from a community device.', 'serve only fully lossless video files so quality is preserved no matter the bandwidth.', 'serve videos with no compression at all and rely on the underlying network capacity.'], a: 1, exp: 'Local caching + appropriate bitrate is the standard equity-aware design.' },
        { q: 'A team builds an API used by partners worldwide. The single most impactful step to reduce global latency is ___', opts: ['add a global CDN or geographically distributed edge points-of-presence.', 'switch every API endpoint from TCP to UDP and accept whatever packet loss results.', 'remove transport-layer security and serve every API response over plain HTTP.', 'serve all responses with lossless compression only and never use lossy formats.'], a: 0, exp: 'CDNs / edge POPs are the standard latency mitigation for global APIs.' },
      ],
    },
  },
};

const cspFaultToleranceSecurity: Topic = {
  slug: 'csp-fault-tolerance-security',
  display: 'Fault Tolerance & Security',
  emoji: '🛡️',
  exportPrefix: 'cspFaultToleranceSecurity',
  idPrefix: 'cspfts',
  parts: {
    2: {
      introMd: `## Fault Tolerance: Working Despite Failures

A **fault-tolerant** system continues operating correctly when a component fails. The key idea: **redundancy** plus a way to detect and recover from failures.

| Technique | How it tolerates faults |
|-----------|------------------------|
| **Redundancy** | Multiple copies of data or compute. |
| **Replication** | Same data in many locations. |
| **Failover** | Automatic switch to a backup. |
| **Retries** | Try again when a request fails. |
| **Graceful degradation** | Reduce functionality instead of crashing. |`,
      quiz1: [
        { q: 'A web service runs on 3 servers behind a load balancer. One server crashes; users keep working. This demonstrates ___', opts: ['compression of failed requests so they take less storage on the surviving servers', 'fault tolerance via redundancy and automatic failover to healthy servers', 'transport-layer security replacing the failed server\'s role for waiting clients', 'a routing-table update on the load balancer with no underlying redundancy at all'], a: 1, exp: 'Redundancy + failover = classic fault tolerance.' },
        { q: 'When a sensor returns an obviously wrong value, the most defensive approach is ___', opts: ['use the obviously wrong value anyway and propagate it into downstream calculations.', 'detect the anomaly, ignore or flag the bad reading, and continue with valid data.', 'crash the entire program so that no further sensor reading can ever be processed.', 'shut off all sensors connected to the program until a human operator intervenes.'], a: 1, exp: 'Defensive handling of bad inputs.' },
      ],
      contentMd: `## Why The Internet Survives Failures

The original Internet design (1960s ARPANET) assumed parts of the network would fail. Packet switching + dynamic routing means traffic can flow around broken links automatically.

| Failure | Mitigation |
|---------|-----------|
| Cable cut | Routers find alternate paths. |
| Server crash | Load balancer routes to a healthy peer. |
| Region outage | Multi-region deployment. |
| Disk failure | RAID + offsite backup. |

## Backups Are Different From Replication

| Concept | Purpose |
|---------|---------|
| **Replication** | Live copies for high availability. |
| **Backup** | Snapshot in time for recovery from corruption / mistake. |

If a bug DELETES data and replicates the deletion to all replicas, only a backup saves you.

## A Tiny Example: Retries With Backoff

\u00A0\u00A0\u00A0\u00A0attempt ← 1
\u00A0\u00A0\u00A0\u00A0REPEAT WHILE attempt ≤ 5:
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0result ← TRY_REQUEST()
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0IF result.success THEN STOP
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0WAIT(2 ^ attempt seconds)   // exponential backoff
\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0attempt ← attempt + 1

Exponential backoff prevents retry storms from overwhelming a recovering service.`,
      inputs: {
        prompts: [
          'Tolerating component failure typically requires _______ — extra capacity / copies.',
          'A system that reduces functionality instead of crashing during partial failure is showing _______ degradation.',
          'A disk-failure-resistant arrangement of multiple disks is called _______.',
        ],
        answers: ['redundancy', 'graceful', 'RAID'],
        hints: ['Backup parts.', 'Soft fail.', 'Disk redundancy acronym.'],
        explanation: 'Redundancy / graceful degradation / RAID.',
      },
      dropdowns: {
        items: [
          { label: 'Replication alone does NOT protect against ___', options: ['a buggy delete that propagates to every replica', 'a single disk failure', 'a single server failure', 'a network blip'] },
          { label: 'Exponential backoff exists to ___', options: ['avoid hammering a recovering service with retry storms', 'compress data', 'encrypt data', 'route packets'] },
          { label: 'A multi-region deployment protects against ___', options: ['region-level outages and natural disasters', 'all bugs', 'compression failure', 'TLS failure'] },
        ],
        correct: ['a buggy delete that propagates to every replica', 'avoid hammering a recovering service with retry storms', 'region-level outages and natural disasters'],
        hints: ['Replication ≠ backup.', 'Backoff = patience.', 'Region resilience.'],
        explanation: 'Replication doesn\'t cover deletes; backoff prevents storms; multi-region survives outages.',
      },
      strategyMd: `## AP Exam Strategy: Fault Tolerance

- Redundancy + failover = canonical fault-tolerance answer.
- Distinguish replication (live) from backups (point-in-time).
- The Internet itself is a giant fault-tolerant system.`,
      applied: [
        { q: 'A team replicates their database across 3 servers but takes no backups. A bug deletes a critical table. The most accurate framing is ___', opts: ['replication is enough — having three live copies guarantees the table can be restored.', 'replication propagates the deletion to all servers; only a backup could recover the data.', 'transport-layer security would have prevented the buggy delete from reaching any replica.', 'compression of the database file would have made the deletion easier to undo afterward.'], a: 1, exp: 'Replication ≠ backup.' },
        { q: 'A flaky network causes occasional request failures. The most CSP-aligned client behavior is ___', opts: ['immediately retry forever, as fast as the client can produce new outbound requests.', 'retry a small bounded number of times with exponential backoff, then surface a clear error.', 'crash the application immediately on the first failure and require a manual restart.', 'silently ignore the failure and proceed as if the request had completed successfully.'], a: 1, exp: 'Bounded retries with backoff is the standard pattern.' },
      ],
    },
    3: {
      introMd: `## Security Has Three Goals: CIA

| Goal | Meaning |
|------|---------|
| **Confidentiality** | Only authorized parties can read. |
| **Integrity** | Data isn\'t altered without detection. |
| **Availability** | The service keeps responding. |

Different threats target different goals; defenses are different for each.`,
      quiz1: [
        { q: 'A man-in-the-middle eavesdropping on traffic primarily threatens ___', opts: ['confidentiality, since the attacker can read messages they were never authorized to see', 'integrity only, leaving the secrecy of the conversation entirely undisturbed', 'availability only, by preventing the legitimate parties from communicating', 'compression efficiency, by injecting noise that defeats lossless coders downstream'], a: 0, exp: 'Eavesdropping = confidentiality breach.' },
        { q: 'A DDoS attack primarily threatens ___', opts: ['confidentiality, by exposing private user data stored on the targeted service', 'integrity, by silently rewriting the data the targeted service stores on disk', 'availability, by overwhelming the service so legitimate users cannot reach it', 'compression efficiency, by stuffing data with patterns that codecs cannot exploit'], a: 2, exp: 'DDoS overwhelms a service → availability loss.' },
      ],
      contentMd: `## Common Threats And Defenses

| Threat | Defense |
|--------|---------|
| Eavesdropping | TLS / encryption in transit. |
| Tampering | Digital signatures, message-authentication codes (MAC). |
| Phishing | User awareness, MFA, anti-phishing tools. |
| Malware | Updates, sandboxing, antivirus, code signing. |
| DDoS | Rate limiting, CDNs, scrubbing. |
| SQL injection | Parameterized queries, input validation. |
| Credential theft | MFA, password managers, breached-password checks. |

## Symmetric vs. Asymmetric Encryption

| Style | Key |
|-------|-----|
| **Symmetric** | Same key encrypts and decrypts (AES). |
| **Asymmetric** | Public key encrypts; private key decrypts (RSA, ECC). |

Real systems use both: asymmetric to safely exchange a symmetric key, then symmetric for bulk traffic.

## Hashing Vs Encryption

| Property | Hash | Encryption |
|----------|------|-----------|
| Reversible? | No | Yes (with key) |
| Use | Verify integrity, store password hashes | Confidentiality |

A password should be **hashed** (with salt + slow algorithm), not encrypted.`,
      inputs: {
        prompts: [
          'The "C" in CIA stands for _______.',
          'Encryption that uses one shared key is called _______.',
          'A one-way function that produces a fixed-size digest is called a _______.',
        ],
        answers: ['confidentiality', 'symmetric', 'hash'],
        hints: ['Privacy.', 'One key both ways.', 'Digest function.'],
        explanation: 'Confidentiality, symmetric, hash.',
      },
      dropdowns: {
        items: [
          { label: 'TLS / HTTPS protects ___', options: ['data confidentiality + integrity in transit', 'data on disk', 'against compression', 'against phishing alone'] },
          { label: 'A password database should store ___', options: ['salted hashes (e.g., bcrypt / Argon2), not plaintext or reversible encryption', 'plaintext for fast retrieval', 'simple MD5 hashes only', 'encrypted strings only'] },
          { label: 'Multi-factor authentication (MFA) defends against ___', options: ['stolen passwords being enough to log in alone', 'all malware', 'all DDoS', 'all phishing forever'] },
        ],
        correct: ['data confidentiality + integrity in transit', 'salted hashes (e.g., bcrypt / Argon2), not plaintext or reversible encryption', 'stolen passwords being enough to log in alone'],
        hints: ['HTTPS in transit.', 'Slow salted hashes.', 'Two factors.'],
        explanation: 'TLS = transit; salted hashes for passwords; MFA blocks credential reuse.',
      },
      strategyMd: `## AP Exam Strategy: Security Basics

- CIA: confidentiality / integrity / availability.
- Match defense to threat.
- Hashes ≠ encryption — passwords get hashed.
- Real systems use symmetric + asymmetric together.`,
      applied: [
        { q: 'A site stores user passwords as plaintext "for support to look up if needed". The most accurate critique is ___', opts: ['no concern — storing plaintext passwords is acceptable as long as the database is private.', 'a single breach exposes every user\'s password instantly; passwords should be salted-hashed.', 'compression of the password column would resolve the underlying security problem here.', 'transport-layer security on incoming login requests fully replaces the need for hashing.'], a: 1, exp: 'Plaintext password storage is a fundamental security failure.' },
        { q: 'A user enables MFA. An attacker who steals their password ___', opts: ['logs in immediately, since the password alone is sufficient credential material.', 'still cannot log in without producing the second factor required by MFA.', 'is unaffected by MFA, which only protects against unrelated phishing attacks.', 'logs in only over a transport-layer-secured connection but otherwise succeeds.'], a: 1, exp: 'MFA breaks the "password alone is enough" assumption.' },
      ],
    },
    4: {
      introMd: `## Security & Fault Tolerance Connect Across CSP

| Connection | Why |
|-----------|-----|
| Security ↔ Networks | Most attacks come over the network. |
| Fault tolerance ↔ Systems | Systems fail; designs must adapt. |
| Security ↔ Data | Data must be protected throughout its lifecycle. |
| Security ↔ Impact | Breaches have human consequences. |`,
      quiz1: [
        { q: 'A breach exposing children\'s data has primarily ___', opts: ['no impact, since children\'s data is automatically anonymized by data-protection laws.', 'serious privacy and safety consequences for vulnerable users and their families.', 'transport-layer-security implications only, with no human-level harm involved.', 'compression-related issues only, because the breached files happened to be small.'], a: 1, exp: 'Breaches harm real people.' },
        { q: 'A system that crashes whenever any single component fails is the OPPOSITE of ___', opts: ['encrypted — protecting data confidentiality through cryptographic algorithms', 'fault-tolerant — continuing to operate even when some components fail', 'compressed — storing the same content in fewer bits than its raw form', 'routed — forwarded between systems by intermediate network devices'], a: 1, exp: 'Fault tolerance = survives failures.' },
      ],
      contentMd: `## Defense In Depth

No single defense is enough. Layer them:

| Layer | Defense |
|-------|---------|
| Perimeter | Firewall, DDoS scrubbing. |
| Network | TLS, segmentation. |
| Host | Patching, hardening. |
| App | Input validation, least privilege. |
| Data | Encryption-at-rest, backups. |
| Identity | MFA, strong auth. |
| Process | Code review, secure SDLC. |

If one layer fails, others still hold.

## Threat Modeling

Ask: who would attack this, why, and how? Common categories: nation-states, organized crime, opportunistic attackers, disgruntled insiders, accidental damage.

## Security Is A Process, Not A Product

Tools alone don\'t make a system secure. Patching, monitoring, and incident response matter as much as initial design.`,
      inputs: {
        prompts: [
          'Layering multiple security defenses is called defense in _______.',
          'A formal exercise to ask "who would attack this and how" is called _______ modeling.',
          'A system\'s ability to keep responding during partial failure is _______ tolerance.',
        ],
        answers: ['depth', 'threat', 'fault'],
        hints: ['Layered defenses.', 'Adversary thinking.', 'Survival.'],
        explanation: 'Depth, threat modeling, fault tolerance.',
      },
      dropdowns: {
        items: [
          { label: 'Security is best treated as ___', options: ['an ongoing process: patch, monitor, respond', 'a one-time install', 'a feature toggle', 'a compression setting'] },
          { label: 'Defense in depth means ___', options: ['layering multiple defenses so a single failure does not breach the system', 'one strong wall and nothing else', 'no defenses at all', 'TLS only'] },
          { label: 'A breach plan that includes detection + response is part of ___', options: ['incident-response readiness', 'compression', 'IPv6 routing', 'lossy encoding'] },
        ],
        correct: ['an ongoing process: patch, monitor, respond', 'layering multiple defenses so a single failure does not breach the system', 'incident-response readiness'],
        hints: ['Process, not product.', 'Layered defense.', 'Detection + response.'],
        explanation: 'Process / depth / response are core.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Security

- Defense in depth — layered defenses.
- Threat modeling identifies WHO and HOW.
- Backups + replication + monitoring + response = comprehensive resilience.`,
      applied: [
        { q: 'A startup fixes a critical bug but never deploys patches automatically. Six months later, an unpatched server is breached. The most CSP-aligned lesson is ___', opts: ['patches are optional once the original code has been initially reviewed and tested.', 'security is an ongoing process; automated patching and monitoring are part of the posture.', 'transport-layer security on inbound traffic would have made the unpatched bug irrelevant.', 'compressing the server\'s log files more aggressively would have prevented the breach.'], a: 1, exp: 'Process matters more than one-time fixes.' },
        { q: 'A health app that stores patient records would benefit MOST from ___', opts: ['just transport-layer security on incoming requests and nothing else added on top.', 'defense in depth: TLS, encryption at rest, MFA, audit logs, regular pen-tests, breach plan.', 'just multi-factor authentication on user logins, with no other defenses added.', 'just nightly backups, with no other defenses added on top of the backup process.'], a: 1, exp: 'Sensitive data needs layered defenses.' },
      ],
    },
    5: {
      introMd: `## How Security & Fault Tolerance Have Evolved

| Era | Defining shift |
|-----|----------------|
| 1990s | Anti-virus, basic firewalls. |
| 2000s | TLS adoption; widespread cyberattacks. |
| 2010s | Cloud-scale DDoS, ransomware, MFA mainstream. |
| 2020s | Supply-chain attacks, AI-assisted phishing, post-quantum prep. |`,
      quiz1: [
        { q: 'A "supply-chain attack" compromises ___', opts: ['only individual end users\' phones, with no impact on the broader software ecosystem.', 'a tool or library many systems depend on, multiplying the impact across all users.', 'only firewalls at the network perimeter, leaving applications inside untouched.', 'only the compression algorithm used by the build pipeline of the affected project.'], a: 1, exp: 'Supply chain = trusted dependency compromise.' },
        { q: 'Post-quantum cryptography research aims to ___', opts: ['speed up classical encryption algorithms by using more efficient mathematical primitives.', 'design algorithms that resist attacks from sufficiently powerful future quantum computers.', 'eliminate the need for transport-layer security by relying on physical isolation alone.', 'compress encrypted data so that ciphertext takes less storage than the original plaintext.'], a: 1, exp: 'Post-quantum = quantum-resistant designs.' },
      ],
      contentMd: `## Notable Modern Shifts

| Shift | Effect |
|-------|--------|
| Cloud everywhere | Big providers handle base infra; devs share responsibility. |
| Zero trust | Don\'t trust any network; verify every request. |
| Ransomware | Backups + segmentation + plan = recoverability. |
| AI-assisted attacks | Phishing/spam quality is rising. |
| Open-source dependencies | Strong upside; supply-chain risk. |

## "Security Through Obscurity" Doesn\'t Work

Hiding the algorithm isn\'t a substitute for sound design. Strong cryptography is **public** — its security depends on the key, not the secrecy of the method.`,
      inputs: {
        prompts: [
          'A model that does NOT trust any network and verifies every request is called _______ trust.',
          'An attack on a popular library to compromise its many downstream users is a _______-chain attack.',
          'Cryptography designed to resist future quantum-computer attacks is called _______-quantum.',
        ],
        answers: ['zero', 'supply', 'post'],
        hints: ['Trust nothing.', 'Dependency-chain.', 'After-quantum.'],
        explanation: 'Zero trust / supply chain / post-quantum.',
      },
      dropdowns: {
        items: [
          { label: '"Security through obscurity" alone ___', options: ['is widely considered insufficient — open-design + strong keys is preferred', 'is the strongest defense', 'replaces TLS', 'eliminates phishing'] },
          { label: 'Ransomware\'s greatest defense is ___', options: ['regular tested backups + network segmentation + a plan', 'a single antivirus tool', 'TLS only', 'compression'] },
          { label: 'AI-assisted phishing is harder to detect because ___', options: ['it produces grammatically clean, personalized messages at scale', 'it slows down emails', 'it removes encryption', 'it shrinks attachments'] },
        ],
        correct: ['is widely considered insufficient — open-design + strong keys is preferred', 'regular tested backups + network segmentation + a plan', 'it produces grammatically clean, personalized messages at scale'],
        hints: ['Open + strong > obscure.', 'Recoverability.', 'Quality boost.'],
        explanation: 'Open design + strong keys; backups + segmentation; AI-quality phishing.',
      },
      strategyMd: `## AP Exam Strategy: Security Evolution

- Modern attackers exploit supply chain, not always users directly.
- Zero trust is the dominant new architecture.
- AI changes the threat landscape (phishing quality up).`,
      applied: [
        { q: 'A company\'s build pipeline is compromised — every customer download contains malware. The most accurate framing is ___', opts: ['phishing of individual customers via emails sent from the compromised build server.', 'a supply-chain attack: a trusted artifact source was compromised, multiplying impact.', 'a compression error in which the build output happened to corrupt some downloads.', 'a transport-layer-security misconfiguration on the customer-facing download server.'], a: 1, exp: 'Build pipeline compromise = canonical supply-chain attack.' },
        { q: 'A school is hit by ransomware. The single most useful preparation BEFORE the attack would have been ___', opts: ['no preparation — ransomware response is purely reactive once the attack begins.', 'tested offline backups, network segmentation, and a written incident-response plan.', 'transport-layer security on every external link the school operates with the internet.', 'aggressive compression of the school\'s data so the encrypted blobs would be smaller.'], a: 1, exp: 'Backups + segmentation + plan = ransomware resilience.' },
      ],
    },
    6: {
      introMd: `## Fault Tolerance & Security Workshop`,
      quiz1: [
        { q: 'A user notices their bank prompted for a one-time code via app push. This is most directly ___', opts: ['encryption applied to the login request before it leaves the user\'s device', 'multi-factor authentication via a second factor delivered through the app', 'compression of the user\'s credentials before they are sent to the bank server', 'a content-delivery-network optimization unrelated to the user\'s authentication'], a: 1, exp: 'A second factor = MFA.' },
        { q: 'A web service auto-restarts crashed worker processes. The general technique is ___', opts: ['failover or self-healing — automated recovery from a worker process crash', 'encryption of every restart event so workers cannot observe each other\'s state', 'compression of the worker\'s in-memory state before its replacement starts up', 'caching of the worker\'s most recent output so future requests can skip it entirely'], a: 0, exp: 'Auto-restart = a self-healing fault-tolerance pattern.' },
      ],
      contentMd: `## Worked: Designing An Outage-Resistant Service

| Layer | Plan |
|-------|------|
| Servers | Multiple instances behind a load balancer. |
| Region | Multi-region with automatic DNS failover. |
| Data | Replicated DB + nightly backups + retention plan. |
| Code | Blue/green or canary deploys to enable rollback. |
| Monitoring | Alerts on errors, latency, saturation. |
| People | On-call rotation + runbooks + post-incident review. |

## Worked: A Phishing Triage

1. **Don\'t click**.
2. Check sender domain (often misspelled).
3. Hover URLs to see the actual destination.
4. Verify out-of-band (call the company at a known number).
5. Report to IT / mark as phishing.

## Worked: Choosing Authentication

| Use case | Recommendation |
|---------|---------------|
| School portal | Username + password + MFA |
| API for partners | OAuth / API key + rate limits |
| Internal admin | SSO + hardware-key MFA + role-based access |
| Public read-only | No auth, rate-limit only |`,
      inputs: {
        prompts: [
          'A deployment style that gradually rolls out to a small fraction first is called a _______ release.',
          'A document teammates follow during an outage is called a _______.',
          'After an incident, the team usually runs a _______-mortem to learn from it.',
        ],
        answers: ['canary', 'runbook', 'post'],
        hints: ['Bird name.', 'Step-by-step doc.', 'After-action.'],
        explanation: 'Canary / runbook / postmortem.',
      },
      dropdowns: {
        items: [
          { label: 'Email from "support@bnk-of-anytown.com" warning your account is locked is most likely ___', options: ['phishing — typo-squatted domain', 'a legitimate alert', 'a CDN issue', 'a TLS handshake'] },
          { label: 'A canary release ___', options: ['routes a small fraction of traffic to the new version first to detect regressions', 'replaces all traffic instantly', 'eliminates testing', 'turns off TLS'] },
          { label: 'Tabletop exercises (drills) help teams ___', options: ['practice incident response BEFORE a real outage', 'compress code', 'replace monitoring', 'shrink databases'] },
        ],
        correct: ['phishing — typo-squatted domain', 'routes a small fraction of traffic to the new version first to detect regressions', 'practice incident response BEFORE a real outage'],
        hints: ['Look-alike domain.', 'Gradual rollout.', 'Drills work.'],
        explanation: 'Phishing typo / canary / drills.',
      },
      strategyMd: `## AP Exam Strategy: Workshop

- Plan for failure: redundancy + monitoring + runbooks + drills.
- Layered authentication based on use case.
- Canary releases reduce blast radius of bad changes.`,
      applied: [
        { q: 'A team deploys a buggy change directly to all users. Errors spike. The most CSP-aligned post-mortem recommendation is ___', opts: ['publicly punish the engineer responsible for writing the change that caused the spike.', 'add canary or staged rollout, automated rollback on error spikes, and a blameless post-mortem.', 'remove transport-layer security so future deploys can roll out faster than they currently do.', 'compress the team\'s log files so the next bug investigation requires less disk space.'], a: 1, exp: 'Process improvements + blameless post-mortems beat blame.' },
        { q: 'A user reports an email from "amaz0n-security@example.com". The most accurate response is ___', opts: ['click the link in the email and explore the destination page to investigate further.', 'don\'t click the link, verify the sender domain is legitimate, and report as phishing.', 'reply to the email with the requested credentials so the sender can confirm the account.', 'forward the email to all colleagues so they can each click and investigate independently.'], a: 1, exp: 'Don\'t-click + verify + report is the standard.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Fault Tolerance & Security`,
      quiz1: [
        { q: 'CIA in security stands for ___', opts: ['Confidentiality, Integrity, Availability', 'Compression, Internet, Authentication', 'Cryptography, Internet, Auth', 'Confidentiality, Internet, Algorithms'], a: 0, exp: 'CIA = Confidentiality, Integrity, Availability.' },
        { q: 'A system that keeps serving users when one server crashes is ___', opts: ['encrypted', 'fault-tolerant', 'compressed', 'optional'], a: 1, exp: 'Fault tolerance = continued operation despite failures.' },
      ],
      contentMd: `## Final Vocab

| Term | Definition |
|------|-----------|
| Fault tolerance | Continues operating during failures. |
| Redundancy / replication / failover | Mechanisms enabling fault tolerance. |
| Backup | Point-in-time data snapshot. |
| CIA | Confidentiality, Integrity, Availability. |
| Symmetric / asymmetric encryption | One key vs. key pair. |
| Hash | One-way digest. |
| MFA | Multi-factor authentication. |
| Phishing / DDoS / ransomware | Common threats. |
| Defense in depth | Layered defenses. |
| Zero trust | Verify every request. |
| Supply-chain attack | Compromise a trusted dependency. |

## Common Pitfalls

- Confusing replication and backup.
- Storing passwords in plaintext or reversible encryption.
- Treating security as a one-time install.
- No incident plan / runbooks / drills.
- Trusting the network instead of verifying each request.`,
      inputs: {
        prompts: [
          'The "I" in CIA stands for _______.',
          'An attack that overwhelms a service to deny availability is a _______ attack.',
          'A second proof of identity beyond the password is the second _______.',
        ],
        answers: ['integrity', 'DDoS', 'factor'],
        hints: ['Unaltered data.', 'Distributed denial.', 'MFA.'],
        explanation: 'Integrity / DDoS / second factor.',
      },
      dropdowns: {
        items: [
          { label: 'A password should be ___', options: ['salted-hashed using a slow KDF (bcrypt / Argon2 / scrypt)', 'stored in plaintext for support', 'simple MD5 hashed', 'encrypted reversibly'] },
          { label: 'TLS protects ___', options: ['confidentiality and integrity in transit', 'data at rest only', 'against phishing alone', 'against compression'] },
          { label: 'A blameless post-mortem focuses on ___', options: ['systemic causes and improvements, not individual blame', 'finding someone to fire', 'compressing logs', 'TLS upgrades only'] },
        ],
        correct: ['salted-hashed using a slow KDF (bcrypt / Argon2 / scrypt)', 'confidentiality and integrity in transit', 'systemic causes and improvements, not individual blame'],
        hints: ['Slow + salted hash.', 'In-transit protection.', 'Systemic > blame.'],
        explanation: 'Slow hashed passwords; TLS in transit; blameless post-mortems improve systems.',
      },
      strategyMd: `## Final Exam Tips

- CIA framing for security questions.
- Replication ≠ backup.
- Defense in depth, MFA, TLS, hashed passwords.
- Process matters: patches, monitoring, drills, post-mortems.`,
      applied: [
        { q: 'A school upgrades to MFA for student accounts. The most accurate framing is ___', opts: ['no measurable improvement to the security posture of any student account at the school.', 'reduces the risk that a stolen or phished password alone gives an attacker access — a major win.', 'simply compresses each student\'s authentication request before sending it to the server.', 'replaces transport-layer security on the login form with a different cryptographic primitive.'], a: 1, exp: 'MFA dramatically reduces credential-based account takeover.' },
        { q: 'A team\'s backup strategy is "the database has 3 replicas." The most CSP-aligned critique is ___', opts: ['the strategy is perfect because three live replicas are equivalent to three independent backups.', 'replicas don\'t protect against accidental or malicious deletes; add point-in-time backups stored offline.', 'transport-layer security on the database\'s replication links would replace the need for any backups.', 'compressing the database files would have made the replication strategy a complete backup solution.'], a: 1, exp: 'Replicas ≠ backups; need separate offline / immutable backups.' },
      ],
    },
  },
};

export const bi4ExtraTopics: Topic[] = [cspComputingSystemsNetworks, cspFaultToleranceSecurity];
