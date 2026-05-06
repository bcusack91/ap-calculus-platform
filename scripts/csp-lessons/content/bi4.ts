// BI4 — csp-internet-protocols. Bespoke AP-quality content.

import type { Topic } from '../types';
import { bi4ExtraTopics } from './bi4-extra';

const cspInternetProtocols: Topic = {
  slug: 'csp-internet-protocols',
  display: 'The Internet & Protocols',
  emoji: '🌐',
  exportPrefix: 'cspInternetProtocols',
  idPrefix: 'cspip',
  parts: {
    2: {
      introMd: `## How Information Travels The Internet

Two devices talk by following a stack of **protocols** — agreed rules at each layer. Each layer hides the layer below it.

| Layer | Job | Example protocol |
|-------|-----|------------------|
| **Application** | What the data MEANS to the app. | HTTP, SMTP, DNS |
| **Transport** | Reliable (or fast-but-lossy) delivery between two endpoints. | TCP, UDP |
| **Internet** | Routing packets across networks; addressing. | IP |
| **Link** | Physical signaling on a single hop (Wi-Fi, Ethernet). | 802.11, Ethernet |`,
      quiz1: [
        { q: 'When you type a URL in a browser, the very first step usually involves which protocol?', opts: ['SMTP', 'DNS', 'FTP', 'SSH'], a: 1, exp: 'DNS resolves the human-readable name to an IP address before the browser can connect.' },
        { q: 'Data that crosses the Internet is broken into ___', opts: ['files', 'streams', 'packets', 'channels'], a: 2, exp: 'IP networks are packet-switched; everything is divided into discrete packets.' },
      ],
      contentMd: `## A Single Web Request, Layer By Layer

You click a link to **example.com/page**:

1. **DNS** (application layer): browser asks a DNS server, "What\'s the IP for example.com?" → gets back, e.g., 93.184.216.34.
2. **TCP** (transport layer): browser opens a reliable connection to 93.184.216.34 on port 80 (or 443 for HTTPS).
3. **HTTP** (application layer): browser sends "GET /page HTTP/1.1".
4. **IP + link** layers: each TCP segment is wrapped in an IP packet and sent hop-by-hop across routers.
5. Server replies with the page; browser reassembles packets in order; renders HTML.

## Why Layered Protocols?

- **Independence:** the link layer can change (Wi-Fi → 5G) without breaking the higher layers.
- **Interoperability:** any device that speaks the standard layers can join.
- **Scalability:** changes at one layer don\'t cascade.

This is **abstraction at scale** — the central design idea of the Internet.

## Packets, Routers, And Best-Effort

A router\'s job is simple: read the destination IP in each packet\'s header and forward it toward the next hop. There\'s no guaranteed path; consecutive packets might take different routes. The Internet provides **best-effort** delivery — TCP layers reliability on top.`,
      inputs: {
        prompts: [
          'A set of agreed rules for how computers communicate is called a _______.',
          'The system that translates domain names like example.com into IP addresses is called _______.',
          'The basic unit of data that travels across the Internet is called a _______.',
        ],
        answers: ['protocol', 'DNS', 'packet'],
        hints: ['Greek for "first" + "agreement".', 'Domain Name System.', 'Small chunks with headers.'],
        explanation: 'A protocol is an agreed rule. DNS resolves names → IPs. Data crosses the Internet as packets.',
      },
      dropdowns: {
        items: [
          { label: 'TCP guarantees ___', options: ['ordered, reliable delivery', 'fastest possible delivery', 'encryption', 'compression'] },
          { label: 'IP\'s primary job is ___', options: ['routing packets to the destination address', 'rendering web pages', 'compressing data', 'encrypting data'] },
          { label: 'A web page that fails to load might be a problem at the ___ layer', options: ['any layer of the stack', 'physical only', 'DNS only', 'browser only'] },
        ],
        correct: ['ordered, reliable delivery', 'routing packets to the destination address', 'any layer of the stack'],
        hints: ['That\'s TCP\'s defining feature.', 'IP = Internet Protocol = routing.', 'Every layer can fail.'],
        explanation: 'TCP = ordered & reliable. IP = routing. A failed page load can come from any layer.',
      },
      strategyMd: `## AP Exam Strategy: The Stack

- The exam will name a protocol and ask its **layer / job**. Memorize: DNS = naming, HTTP = web, SMTP = email, TCP = reliable transport, UDP = fast/unreliable transport, IP = routing.
- "Reliable + ordered" → TCP.
- "Fast, real-time, can drop packets" (e.g., voice/video) → UDP.
- "Best-effort" describes IP\'s lack of delivery guarantees.
- A change at one layer (new physical medium, new app) doesn\'t require changes elsewhere — that\'s the whole point of the layered design.`,
      applied: [
        { q: 'You\'re streaming a live video call. Some packets arrive out of order or are dropped. The call still works. Which transport-layer protocol is most likely in use?', opts: ['TCP, because reliability is the most important property of any real-time video-call session.', 'UDP, because real-time apps prefer low latency over the cost of waiting for retransmission.', 'IP, because the Internet Protocol itself provides the reliability guarantees a video call needs.', 'DNS, because the Domain Name System efficiently streams call audio and video as needed.'], a: 1, exp: 'Real-time A/V uses UDP; a slightly garbled frame is preferable to waiting for retransmits.' },
        { q: 'A new wireless standard (Wi-Fi 7) is rolled out. Existing web browsers continue to work without modification. Why?', opts: ['Wi-Fi 7 fundamentally does not carry IP packets the way previous Wi-Fi standards historically did.', 'The layered protocol design isolates link-layer changes from the higher application-layer software.', 'Browser developers worldwide pushed an emergency overnight update to support the new wireless standard.', 'Wi-Fi 7 only carries the TCP transport-layer protocol and not application-layer protocols like HTTP.'], a: 1, exp: 'Layering means the application layer doesn\'t need to know which physical medium carries its packets.' },
      ],
    },
    3: {
      introMd: `## Common Internet Patterns

The same shapes recur across services.

| Pattern | Example |
|---------|---------|
| **Client / server** | Browser ↔ web server. |
| **Peer-to-peer (P2P)** | BitTorrent file sharing; some video calls. |
| **Request / response** | HTTP GET → 200 OK. |
| **Streaming** | Video and audio data delivered as a continuous flow. |
| **Publish / subscribe** | Notifications, social feeds. |`,
      quiz1: [
        { q: 'In a client/server architecture, the role of the server is to ___', opts: ['initiate connections to clients.', 'wait for client requests and respond.', 'route packets between clients.', 'compress all data.'], a: 1, exp: 'Servers wait; clients initiate.' },
        { q: 'Which service most clearly fits the peer-to-peer pattern?', opts: ['Email between two users via Gmail.', 'A web search.', 'BitTorrent file distribution where each downloader also uploads.', 'A bank login page.'], a: 2, exp: 'BitTorrent peers exchange data with each other directly, not through a central server.' },
      ],
      contentMd: `## Client / Server vs. Peer-to-Peer

| Aspect | Client / Server | Peer-to-Peer |
|--------|-----------------|--------------|
| Initiator | Client. | Any peer. |
| Coordination | Centralized server. | Distributed among peers. |
| Failure | Server outage = service down. | Some peers can vanish; service continues. |
| Examples | Web, email. | BitTorrent, some video calls. |

## Request / Response Anatomy

An HTTP request:

\u00A0\u00A0\u00A0\u00A0GET /api/student/42 HTTP/1.1
\u00A0\u00A0\u00A0\u00A0Host: example.com
\u00A0\u00A0\u00A0\u00A0Authorization: Bearer eyJ…

An HTTP response:

\u00A0\u00A0\u00A0\u00A0HTTP/1.1 200 OK
\u00A0\u00A0\u00A0\u00A0Content-Type: application/json
\u00A0\u00A0\u00A0\u00A0Content-Length: 142
\u00A0\u00A0\u00A0\u00A0
\u00A0\u00A0\u00A0\u00A0{"id": 42, "name": "Alex", …}

Status codes: **2xx** = OK, **3xx** = redirect, **4xx** = client error (e.g., 404 not found), **5xx** = server error.

## Streaming As A Pattern

Video streams break the file into small chunks; the player buffers a few seconds ahead. If the network slows, the player switches to a lower-bitrate version (adaptive bitrate). The connection remains open while the stream plays.`,
      inputs: {
        prompts: [
          'In client/server, the _______ initiates the connection.',
          'In a P2P network, peers can both _______ and serve data.',
          'An HTTP status of 404 means the requested resource was not _______.',
        ],
        answers: ['client', 'request', 'found'],
        hints: ['Browser, app, etc.', 'Two roles in one node.', 'The "Not Found" code.'],
        explanation: 'Clients initiate. P2P peers both consume and serve. 404 = Not Found.',
      },
      dropdowns: {
        items: [
          { label: 'A 500-series HTTP status indicates ___', options: ['a server-side error', 'a client-side error', 'a redirect', 'success'] },
          { label: 'A push-notification service most closely resembles the ___ pattern', options: ['publish / subscribe', 'request / response', 'P2P file sharing', 'streaming'] },
          { label: 'For a service that must remain available if any single server fails, a ___ design helps', options: ['distributed / redundant', 'single-server', 'client-only', 'P2P-only'] },
        ],
        correct: ['a server-side error', 'publish / subscribe', 'distributed / redundant'],
        hints: ['5xx is server\'s fault.', 'Subscribers receive when publishers post.', 'Redundancy beats single point of failure.'],
        explanation: '5xx = server error. Pub/sub fits notifications. Distributed/redundant designs survive single-server failures.',
      },
      strategyMd: `## AP Exam Strategy: Architecture Questions

- "Single point of failure" almost always means client/server with no redundancy.
- "Some peers can drop without taking the system down" → P2P or distributed.
- "Long-lived connection delivering continuous data" → streaming.
- HTTP status codes: 200 OK, 301/302 redirect, 404 not found, 500 server error. Recognize these on sight.`,
      applied: [
        { q: 'A school deploys a single attendance server. When that server is down, no one can mark attendance. Which design change most directly addresses this?', opts: ['Use redundant servers behind a load balancer so any one server can fail without service interruption.', 'Add explanatory comments throughout the existing single attendance server\'s codebase to document what fails.', 'Switch all attendance traffic from TCP to UDP so requests will arrive faster than they currently do.', 'Change the school\'s Wi-Fi network password to a stronger value to prevent future server outage events.'], a: 0, exp: 'Redundancy + load balancing eliminates the single point of failure.' },
        { q: 'A music service is redesigning to allow listeners to share locally-cached songs with nearby listeners on the same Wi-Fi network. Which architecture is most appropriate?', opts: ['Peer-to-peer between nearby listeners on the same Wi-Fi, with a central server for catalog metadata.', 'Strict client/server only, in which every song must be re-downloaded from a central server every time.', 'Email-based file delivery, where each listener emails the song file to nearby listeners on demand.', 'DNS-based file lookup, where each listener resolves song names through the Domain Name System.'], a: 0, exp: 'Hybrid: P2P for the bulk data, centralized server for coordination/metadata.' },
      ],
    },
    4: {
      introMd: `## Internet Connections Across the Course

The Internet is the substrate everything else runs on.

| Connection | Why it matters |
|-----------|---------------|
| Internet ↔ Binary (BI 2) | All packets are bit sequences. |
| Internet ↔ Algorithms (BI 3) | Routing IS an algorithm; so is congestion control. |
| Internet ↔ Security (BI 4) | TLS encrypts traffic; certificates establish trust. |
| Internet ↔ Impact (BI 5) | Global reach amplifies both benefit and harm. |`,
      quiz1: [
        { q: 'Which property of the Internet most directly enables global, low-cost communication?', opts: ['Centralized control by a single company.', 'Open, standardized protocols any device can implement.', 'Mandatory encryption at every layer.', 'Government-issued IP addresses.'], a: 1, exp: 'Open standards + interoperability = anyone can join, anyone can build.' },
        { q: 'HTTPS adds which property over HTTP?', opts: ['Faster page loads in all cases.', 'Encryption (and authenticated identity of the server) via TLS.', 'Compression of every page.', 'Lower bandwidth use.'], a: 1, exp: 'HTTPS = HTTP over TLS, which encrypts traffic and authenticates the server\'s certificate.' },
      ],
      contentMd: `## Open Standards As The Internet\'s Superpower

Anyone can implement TCP/IP. Any vendor\'s router can interoperate with any other\'s. This **open standardization** is why the Internet scaled to billions of devices in 30 years.

## Routing As An Algorithm

Routers run algorithms (e.g., BGP) to decide where to forward each packet. These algorithms must adapt to:

- New networks coming online.
- Failed links being removed.
- Congestion shifting traffic to alternate paths.

The result is a network that **self-heals** as conditions change.

## Encryption On The Internet

TLS (Transport Layer Security) wraps TCP connections to provide:

- **Confidentiality**: an eavesdropper sees ciphertext only.
- **Integrity**: tampering is detected.
- **Authentication**: the server\'s certificate proves it\'s really who it claims to be.

Modern web traffic is overwhelmingly HTTPS. The padlock icon in your browser indicates TLS is active.

## Global Reach And Impact

A single webpage can reach billions instantly. This is the Internet\'s greatest gift and gravest danger:

- **Beneficial**: open access to knowledge, global collaboration.
- **Harmful**: misinformation spreads at the same global speed.

Big Idea 5 examines these consequences.`,
      inputs: {
        prompts: [
          'The "S" in HTTPS stands for _______ (the protocol that adds encryption).',
          'An open _______ enables any device to join the Internet.',
          'When a network self-adapts after a router fails, this is enabled by _______ algorithms.',
        ],
        answers: ['secure', 'standard', 'routing'],
        hints: ['HTTP + secure = HTTPS.', 'Like TCP/IP standards.', 'They adjust paths.'],
        explanation: 'HTTPS = HTTP over TLS (S for secure). Open standards enable joining. Routing algorithms enable resilience.',
      },
      dropdowns: {
        items: [
          { label: 'Inside HTTPS, the encryption itself happens at the ___ layer', options: ['TLS (between transport and application)', 'physical', 'IP', 'DNS'] },
          { label: 'A "self-healing" property of the Internet means ___', options: ['traffic re-routes around failed links', 'broken cables fix themselves', 'malware is auto-removed', 'all packets are encrypted'] },
          { label: 'Open standards make the Internet ___', options: ['interoperable across vendors', 'controlled by a single company', 'slower', 'unencrypted'] },
        ],
        correct: ['TLS (between transport and application)', 'traffic re-routes around failed links', 'interoperable across vendors'],
        hints: ['TLS sits above TCP.', 'Routing protocols adjust.', 'Anyone can implement the standards.'],
        explanation: 'TLS sits above TCP; routing self-heals around failures; open standards enable interoperability.',
      },
      strategyMd: `## AP Exam Strategy: Cross-Topic Internet Questions

- "Open standards" + "interoperability" + "scalability" = Internet design wins.
- HTTPS = HTTP + TLS. Provides confidentiality, integrity, authentication.
- Self-healing routing = a built-in algorithmic property of the Internet.
- A question about "single point of failure" is asking about redundancy / distributed design.`,
      applied: [
        { q: 'A user visits a banking site. The browser shows a padlock and the URL begins with https://. Which guarantees does this primarily provide?', opts: ['The site has been verified safe by every government.', 'Traffic is encrypted in transit AND the server\'s certificate has been validated.', 'The user\'s account cannot be hacked.', 'The page loads faster than HTTP.'], a: 1, exp: 'HTTPS provides encryption and server authentication; it does NOT promise safety of the site\'s practices or the user\'s account.' },
        { q: 'A regional Internet outage causes a major undersea cable to fail. Many websites still load, possibly slower. The most accurate explanation is ___', opts: ['websites cached themselves locally.', 'routing algorithms automatically forward traffic over alternate paths.', 'each website has its own private fiber.', 'TCP retransmits the cable.'], a: 1, exp: 'Routing protocols redirect packets via remaining paths — the network\'s self-healing property.' },
      ],
    },
    5: {
      introMd: `## How The Internet Has Scaled

The Internet has grown from a few thousand devices to tens of billions. The principles that enabled this scale.

| Era | Devices | Notable change |
|-----|---------|---------------|
| 1980s | thousands | Birth of TCP/IP. |
| 1990s | millions | Web browsers; HTML/HTTP. |
| 2000s | hundreds of millions | Broadband; CDNs; cloud. |
| 2010s | billions | Mobile-first; HTTPS by default. |
| 2020s | tens of billions | IoT; IPv6 deployment widens. |`,
      quiz1: [
        { q: 'IPv4 has ~4 billion addresses, which is no longer enough. The successor protocol with vastly more addresses is ___', opts: ['IPv5', 'IPv6', 'TCP/2', 'DNS+'], a: 1, exp: 'IPv6 uses 128-bit addresses (~3.4 × 10³⁸), enough for every device for the foreseeable future.' },
        { q: 'A Content Delivery Network (CDN) reduces page-load times by ___', opts: ['compressing every byte of traffic at the origin server before it leaves the data center.', 'serving cached copies of content from locations geographically near each requesting user.', 'using only peer-to-peer connections between every requesting user and every other one nearby.', 'rewriting every requested URL to point at the geographically nearest origin data center directly.'], a: 1, exp: 'CDNs cache content close to users, reducing latency.' },
      ],
      contentMd: `## Address Exhaustion And IPv6

IPv4 addresses are 32 bits → 2³² ≈ 4.3 billion. With smartphones, IoT, and rapid global growth, this isn\'t enough. **IPv6** uses 128-bit addresses → vastly more than the number of atoms on Earth\'s surface.

Workarounds during transition: NAT (Network Address Translation) lets one public IP serve many devices behind a router.

## Cloud And CDNs Changed The Picture

- **Cloud computing**: applications run on shared, on-demand infrastructure rather than self-hosted servers.
- **CDNs**: replicate content geographically so users connect to a nearby server.
- **Edge computing**: even more local processing — close to the user / device.

These reduce latency, increase reliability, and absorb traffic spikes.

## Encrypted-By-Default

In 2015 most web traffic was HTTP. By the 2020s the majority is HTTPS. Browsers now warn users on plain HTTP. This shift was driven by free certificate authorities (Let\'s Encrypt) and pressure from browser vendors.

## IoT And The Surface Of The Internet

"Things" — thermostats, cameras, doorbells — now connect to the Internet. This expands the **attack surface** dramatically. Every connected device is a potential entry point.`,
      inputs: {
        prompts: [
          'IPv4 addresses are _______ bits long.',
          'The successor with 128-bit addresses is _______.',
          'A geographically distributed system that caches content close to users is called a _______.',
        ],
        answers: ['32', 'IPv6', 'CDN'],
        hints: ['~4.3 billion addresses.', 'After v4.', 'Content Delivery Network.'],
        explanation: 'IPv4 = 32 bits. IPv6 = 128 bits. CDN = cached content geographically distributed.',
      },
      dropdowns: {
        items: [
          { label: 'IPv6 was created primarily to address ___', options: ['IPv4 address exhaustion', 'slow page-load times', 'lack of encryption', 'too many DNS servers'] },
          { label: 'Adding many IoT devices to a network primarily increases ___', options: ['the attack surface', 'IP address availability', 'screen brightness', 'bandwidth supply'] },
          { label: 'A CDN reduces page-load latency by ___', options: ['serving from a nearby cache', 'compressing TCP', 'using IPv4 only', 'disabling DNS'] },
        ],
        correct: ['IPv4 address exhaustion', 'the attack surface', 'serving from a nearby cache'],
        hints: ['Need more addresses.', 'More endpoints = more risk.', 'Closer = faster.'],
        explanation: 'IPv6 = address space. IoT = larger attack surface. CDN = geographic caching.',
      },
      strategyMd: `## AP Exam Strategy: Internet Evolution

- "Out of IP addresses" → IPv6 (or NAT as a stopgap).
- "Faster page loads worldwide" → CDN.
- "More devices = more attack opportunities" = a Big Idea 5/security tie-in.
- "Encrypted by default" describes the modern web.`,
      applied: [
        { q: 'A streaming service sees viewers in 80 countries. Page load time is poor for users far from its main data center. The most appropriate scaling response is ___', opts: ['build one bigger data center near the company headquarters.', 'use a CDN with edge servers in many regions.', 'switch from TCP to UDP.', 'move from IPv6 back to IPv4.'], a: 1, exp: 'CDNs reduce latency by serving cached content from regional edge locations.' },
        { q: 'An organization adds 2,000 IoT sensors (cameras, thermostats) to its network. The most pressing CSP-aligned concern is ___', opts: ['the existing organizational network requires no architectural changes to handle the additional 2,000 sensors safely.', 'every connected device expands the attack surface and requires patching, credential management, and segmentation.', 'IPv6 addressing fundamentally cannot operate with sensor devices the way it operates with conventional computers.', 'TCP transport-layer protocol fundamentally cannot carry sensor telemetry the way it carries conventional traffic.'], a: 1, exp: 'IoT devices commonly ship with weak defaults; managing them is a top security concern.' },
      ],
    },
    6: {
      introMd: `## Internet & Protocols Workshop

Apply the layered model and the protocol vocabulary to scenarios.`,
      quiz1: [
        { q: 'A page loads partially: text and CSS arrive but a single image doesn\'t. The most likely cause is at the ___', opts: ['transport layer for the entire page, since the image\'s failure means TCP itself stopped working.', 'application/HTTP layer for the image\'s specific request — the other resources arrived, so lower layers worked.', 'physical layer because the network connection itself is fully down for every resource the page requested.', 'DNS layer for the entire page, since the failed image lookup blocked every other DNS resolution attempt.'], a: 1, exp: 'Other resources loaded, so DNS / transport / physical work. The image\'s individual HTTP request failed (e.g., 404, server error).' },
        { q: 'You\'re building a real-time multiplayer game. Which transport protocol is most appropriate for in-game position updates?', opts: ['TCP, because reliability of every single position update is the most important property of the game.', 'UDP, because low latency matters more than retransmitting position updates that are already stale by then.', 'DNS, because the Domain Name System resolves position updates faster than the transport layer alone could.', 'IP only with no transport-layer protocol layered on top, since the game does not need any reliability features.'], a: 1, exp: 'Stale position updates aren\'t worth retransmitting; UDP fits real-time games.' },
      ],
      contentMd: `## Worked Scenario 1: Diagnose A Slow Site

Symptoms: site loads but is slow.

Possible bottlenecks by layer:

| Layer | Symptom | Diagnosis tool |
|-------|---------|---------------|
| DNS | Long delay before any byte | DNS lookup time. |
| TCP | Connect succeeds slowly | TCP handshake timing. |
| HTTP server | Slow response after request sent | Server response time. |
| Network path | All traffic slow | Traceroute / latency. |

Modern dev tools show this waterfall directly.

## Worked Scenario 2: Choose A Protocol

| Use case | Best transport |
|---------|---------------|
| File download | TCP (reliability matters). |
| Live video call | UDP (latency matters; small drops tolerated). |
| Online banking page | TCP + TLS (HTTPS — reliability + encryption). |
| Software update | TCP (must arrive complete and correct). |

## Worked Scenario 3: Naming vs. Routing

A user goes to bank.com → DNS resolves to 192.0.2.5 → packets routed via IP → TCP connection on port 443 → TLS handshake → HTTP GET.

If DNS is wrong, the user lands on a wrong server. If the cert doesn\'t match, TLS warns the user. Both protect against impersonation.`,
      inputs: {
        prompts: [
          'A real-time game uses _______ transport for low-latency state updates.',
          'A banking page uses _______ over TCP for confidentiality and authentication.',
          'A long delay before any byte arrives often points to a _______ lookup problem.',
        ],
        answers: ['UDP', 'TLS', 'DNS'],
        hints: ['Connectionless, fast.', 'The "S" in HTTPS.', 'First step of every web request.'],
        explanation: 'UDP for low latency, TLS for HTTPS confidentiality, DNS for early-stage delays.',
      },
      dropdowns: {
        items: [
          { label: 'A 503 status code most likely means ___', options: ['the server is temporarily overloaded or down', 'the URL is misspelled', 'the user is not logged in', 'TLS failed'] },
          { label: 'For software updates that must arrive complete, the right transport is ___', options: ['TCP', 'UDP', 'IP only', 'no transport'] },
          { label: 'For audio in a live call, the right transport is usually ___', options: ['UDP', 'TCP', 'IP only', 'DNS'] },
        ],
        correct: ['the server is temporarily overloaded or down', 'TCP', 'UDP'],
        hints: ['5xx = server side.', 'Reliability needed.', 'Latency matters more than retransmission.'],
        explanation: '503 = service unavailable. TCP for reliability. UDP for real-time.',
      },
      strategyMd: `## AP Exam Strategy: Protocol Choice Workshops

- Ask "what does this app prioritize?": reliability, latency, security?
- Reliability → TCP. Confidentiality → TLS (HTTPS). Real-time / drop-tolerant → UDP.
- For naming → DNS. For routing → IP. For requests → HTTP.
- The Internet\'s layered model means you can swap any layer\'s protocol without breaking the others.`,
      applied: [
        { q: 'A school records video lectures and posts them for students to watch later. Which two technologies fit this best?', opts: ['HTTPS for delivery to each student\'s browser plus a CDN to serve cached copies near each student.', 'UDP-only video calls between every student and the school\'s central origin server, with no caching at all.', 'Plain HTTP served from a single origin server worldwide, with no encryption and no geographic caching layer.', 'A peer-to-peer-only design with no central catalog server, where students must discover lectures from each other.'], a: 0, exp: 'HTTPS for secure delivery + CDN for low-latency global access.' },
        { q: 'A social app must immediately notify followers when a user posts. The most appropriate pattern is ___', opts: ['publish/subscribe with persistent connections so the central server can push updates to followers immediately.', 'have every follower\'s browser actively poll the central server every 60 seconds for any new posts to display.', 'send each follower an email notification through the school\'s SMTP mail server every time someone posts.', 'require every follower to manually refresh their feed page in order to ever see any newly published posts.'], a: 0, exp: 'Pub/sub with push delivers low-latency notifications without polling overhead.' },
      ],
    },
    7: {
      introMd: `## AP Exam Recap — Internet & Protocols

The protocol facts and architectural ideas most likely to appear on the exam.`,
      quiz1: [
        { q: 'The Internet uses ___-switched delivery, not circuit-switched.', opts: ['packet', 'circuit', 'wave', 'message'], a: 0, exp: 'Packet switching is foundational to the Internet (vs. dedicated circuits in old phone systems).' },
        { q: 'A protocol that provides reliable, ordered, error-checked delivery between two endpoints is ___', opts: ['UDP', 'IP', 'TCP', 'DNS'], a: 2, exp: 'TCP\'s defining job.' },
      ],
      contentMd: `## One-Line Definitions

| Term | Definition |
|------|-----------|
| Protocol | An agreed set of rules for communication. |
| Packet | A unit of data with headers (source, destination, etc.) plus payload. |
| IP | Routes packets to destination addresses (best-effort). |
| TCP | Adds reliable, ordered, error-checked delivery on top of IP. |
| UDP | Connectionless, faster, no delivery guarantee. |
| HTTP | Application-layer request/response for the web. |
| HTTPS | HTTP over TLS — encrypted and authenticated. |
| DNS | Domain → IP resolution. |
| TLS | Encrypts a TCP connection; authenticates server via certificate. |
| Router | A device that forwards packets toward their destination. |
| CDN | Geographically distributed caching of content. |
| IPv6 | Successor to IPv4 with 128-bit addresses. |

## Common Exam Pitfalls

- "TCP and IP are the same protocol." (No — TCP is transport, IP is routing.)
- "UDP is unreliable, so it\'s bad." (No — it\'s a deliberate trade-off for low latency.)
- "HTTPS protects me from any threat." (No — it protects in transit, not from phishing or compromised servers.)
- "DNS encrypts traffic." (No — DNS resolves names; encryption is TLS\'s job.)`,
      inputs: {
        prompts: [
          'The protocol that resolves human names to IP addresses is _______.',
          'The transport protocol that guarantees ordered, reliable delivery is _______.',
          'The transport protocol used for real-time apps that prefer low latency over retransmission is _______.',
        ],
        answers: ['DNS', 'TCP', 'UDP'],
        hints: ['Domain Name System.', 'Three-letter, starts with T.', 'Three-letter, starts with U.'],
        explanation: 'DNS for naming, TCP for reliability, UDP for speed.',
      },
      dropdowns: {
        items: [
          { label: 'The padlock icon in a browser indicates ___', options: ['HTTPS / TLS is in use', 'the site is owned by a bank', 'the page cannot be hacked', 'no cookies are stored'] },
          { label: 'A 404 status means ___', options: ['the requested resource was not found', 'the server is down', 'the user is unauthorized', 'success'] },
          { label: 'Routing decisions on the Internet are made by ___', options: ['routers running routing algorithms', 'the application layer', 'browsers', 'DNS servers'] },
        ],
        correct: ['HTTPS / TLS is in use', 'the requested resource was not found', 'routers running routing algorithms'],
        hints: ['Lock = encryption.', '404 is the famous code.', 'Routers route.'],
        explanation: 'Padlock = TLS. 404 = not found. Routers handle routing.',
      },
      strategyMd: `## Final Exam Tips

- Be ready to identify: TCP vs UDP, IP vs HTTP, HTTPS vs HTTP, DNS\'s job.
- Know the layered model: change at one layer doesn\'t require changes at others.
- Know that the Internet provides best-effort packet delivery; reliability is added by TCP on top.
- Recognize architecture trade-offs: client/server vs P2P, centralized vs distributed.
- HTTPS protects in transit; it does not solve phishing, social engineering, or server-side breaches.`,
      applied: [
        { q: 'You receive an email asking you to log in to your bank "to verify your account". The link begins with https:// and shows a padlock. The most appropriate response is ___', opts: ['log in to the bank immediately through the link, because the HTTPS padlock guarantees the destination is safe.', 'do NOT log in via the link; navigate to the bank manually because HTTPS does not authenticate the email\'s sender.', 'reply to the email message with your username and password so the bank\'s support team can verify your account.', 'forward the email to several friends so they can also verify their accounts through the same convenient link.'], a: 1, exp: 'HTTPS confirms the connection to whatever URL the link points to — but the URL itself may be a lookalike. Phishing defeats blind reliance on the padlock.' },
        { q: 'An online classroom needs both real-time voice (with low latency) and reliable file uploads. The most appropriate design uses ___', opts: ['only the TCP transport-layer protocol for both the real-time voice stream and the reliable file uploads alike.', 'only the UDP transport-layer protocol for both the real-time voice stream and the reliable file uploads alike.', 'UDP (or its cousin RTP) for the real-time voice stream and TCP/HTTPS for the reliable file upload requests.', 'no transport-layer protocol at all; both the real-time voice stream and the file uploads ride on raw IP packets.'], a: 2, exp: 'Match the protocol to the requirement: UDP-style for real-time voice, TCP for reliable file transfer.' },
      ],
    },
  },
};

export const bi4Topics: Topic[] = [cspInternetProtocols, ...bi4ExtraTopics];
