export const cspInternetProtocolsPart1Data = {
  topicSlug: 'csp-internet-protocols',
  sections: [
    {
      id: 'cspip1-intro',
      type: 'text' as const,
      content: `
# 🔗 Internet Protocols

**Part 1 of 7 — TCP/IP, HTTP, and How the Internet Works**

---

## The Protocol Stack

The Internet uses layered protocols, each handling a specific job:

| Layer | Protocol | Purpose |
|-------|----------|---------|
| **Application** | HTTP, HTTPS, SMTP, FTP | Formats data for user applications |
| **Transport** | TCP, UDP | Ensures reliable delivery (TCP) or fast delivery (UDP) |
| **Internet** | IP | Addresses and routes packets across networks |
| **Network Access** | Ethernet, WiFi | Physical connection and data framing |

> 🔑 Each layer adds its own header to the data (encapsulation). The receiving end removes headers layer by layer.

---

## Key Protocols

### IP (Internet Protocol)
- Assigns a unique address to every device
- **IPv4**: 32-bit addresses (e.g., 192.168.1.1) — about 4.3 billion addresses
- **IPv6**: 128-bit addresses (e.g., 2001:0db8::1) — virtually unlimited addresses
- IPv6 was created because IPv4 addresses are running out

### TCP (Transmission Control Protocol)
- Guarantees reliable, ordered delivery
- Breaks data into packets, numbers them, and reassembles at destination
- Requests retransmission of lost packets
- Used for: web pages, email, file transfers

### HTTP / HTTPS
- **HTTP**: HyperText Transfer Protocol — how web browsers request and receive web pages
- **HTTPS**: HTTP Secure — adds encryption using TLS/SSL
- HTTPS prevents eavesdropping on the data in transit
      `
    },
    {
      id: 'cspip1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why was IPv6 developed?',
            options: [
              'IPv4 was too slow',
              'IPv4 does not support wireless connections',
              'IPv4 addresses (about 4.3 billion) are running out as more devices connect',
              'IPv4 could not handle video streaming'
            ],
            correctAnswer: 2,
            explanation: 'IPv4 has 32-bit addresses (about 4.3 billion unique addresses). With smartphones, IoT devices, and global growth, this is not enough. IPv6 uses 128-bit addresses, providing virtually unlimited addresses.'
          },
          {
            question: 'What does TCP guarantee that IP alone does not?',
            options: [
              'Faster delivery',
              'Reliable, ordered delivery with retransmission of lost packets',
              'Encryption of all data',
              'Wireless connectivity'
            ],
            correctAnswer: 1,
            explanation: 'IP only handles addressing and routing — packets may arrive out of order, be duplicated, or be lost. TCP adds reliability: sequence numbers, acknowledgments, and retransmission of lost packets.'
          }
        ]
      }
    },
    {
      id: 'cspip1-content',
      type: 'text' as const,
      content: `
## How a Web Request Works

When you type a URL in your browser:

1. **DNS lookup**: Browser asks DNS server to translate domain name to IP address
2. **TCP connection**: Browser establishes a connection to the web server
3. **HTTP request**: Browser sends a request for the specific page
4. **Server response**: Server sends back HTML, CSS, JavaScript, images as packets
5. **Rendering**: Browser assembles and displays the page

## Protocols Comparison

| Protocol | Reliable? | Ordered? | Speed | Use Case |
|----------|-----------|---------|-------|----------|
| **TCP** | Yes | Yes | Slower (overhead) | Web, email, file transfer |
| **UDP** | No | No | Faster (less overhead) | Video streaming, gaming, VoIP |

### Why UDP Sometimes?
- Video calls: a few dropped frames are better than waiting for retransmission
- Gaming: outdated position data is useless even if reliably delivered
- Streaming: better to skip ahead than pause for missing data

## Certificate Authorities and HTTPS
- A **Certificate Authority (CA)** verifies website identity
- HTTPS uses certificates to prove the server is who it claims to be
- The lock icon in your browser means the connection is encrypted AND the server identity was verified
      `
    },
    {
      id: 'cspip1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The protocol that translates domain names to IP addresses is _______.

2) TCP guarantees reliable delivery; _______ trades reliability for speed and is used in video streaming.

3) HTTPS adds _______ to HTTP, preventing eavesdropping on data in transit.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['DNS', 'UDP', 'encryption'],
        hint1: 'Domain Name System.',
        hint2: 'User Datagram Protocol.',
        hint3: 'Scrambles data so only the intended recipient can read it.',
        explanation: 'DNS resolves names. UDP = fast but unreliable. HTTPS adds encryption.'
      }
    },
    {
      id: 'cspip1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Protocol Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Downloading a file that must arrive complete and in order should use ___',
            options: ['TCP', 'UDP', 'DNS', 'IP only']
          },
          {
            label: 'IPv4 uses ___ bits for addresses, providing about 4.3 billion unique addresses',
            options: ['32 bits', '64 bits', '128 bits', '16 bits']
          },
          {
            label: 'The "S" in HTTPS stands for ___',
            options: ['Secure', 'Simple', 'Standard', 'Server']
          }
        ],
        correctAnswers: ['TCP', '32 bits', 'Secure'],
        hint1: 'Needs reliability and ordering.',
        hint2: '2^32 = about 4.3 billion.',
        hint3: 'HTTP Secure.',
        explanation: 'File download needs TCP. IPv4 = 32-bit. HTTPS = HTTP Secure.'
      }
    },
    {
      id: 'cspip1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Internet Protocols

- Know the protocol layers: Application (HTTP), Transport (TCP/UDP), Internet (IP), Network Access
- **TCP** = reliable + ordered (web, email). **UDP** = fast + unreliable (video, gaming)
- **IPv4** (32-bit) vs **IPv6** (128-bit) — know WHY IPv6 was needed
- DNS = domain name to IP address translation
- HTTPS = HTTP + encryption — the lock icon means encrypted AND authenticated
- Know the 5 steps of a web request: DNS → TCP → HTTP request → response → render
      `
    },
    {
      id: 'cspip1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A user connects to a website using HTTP instead of HTTPS. Which risk does this create?',
            options: [
              'The website loads slower',
              'The data is not encrypted, so third parties on the network could read it',
              'The website cannot display images',
              'The user cannot log in'
            ],
            correctAnswer: 1,
            explanation: 'HTTP sends data in plaintext. Anyone on the same network (e.g., public WiFi) could intercept and read the data, including passwords and personal information. HTTPS encrypts data in transit.'
          },
          {
            question: 'Which protocol would be BEST for a live video call?',
            options: [
              'TCP — because all data must arrive reliably',
              'UDP — because speed matters more than perfect reliability',
              'HTTP — because it is used for web content',
              'DNS — because it resolves addresses'
            ],
            correctAnswer: 1,
            explanation: 'Live video calls prioritize low latency. A few dropped frames are acceptable, but waiting for retransmission would cause unacceptable delays. UDP provides the speed needed.'
          }
        ]
      }
    }
  ]
};
