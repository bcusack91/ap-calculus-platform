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

## The Internet Runs on Open Protocols

The **Internet** is a computer network made of interconnected networks that use **standardized, open (nonproprietary) communication protocols**. A **protocol** is an agreed-upon set of rules that specify the behavior of a system. Because the Internet's protocols are open, anyone can connect a new device by following them.

| Protocol | Job |
|----------|-----|
| **IP** (Internet Protocol) | Gives each device an address and routes packets across networks |
| **TCP** (Transmission Control Protocol) | Makes sure all packets arrive, asks for lost ones to be resent, and puts the data back in order |
| **UDP** (User Datagram Protocol) | Sends packets without checking that they arrive or keeping them in order; less waiting, but some data may be lost |
| **HTTP** (HyperText Transfer Protocol) | The protocol the World Wide Web uses to request and deliver pages |

> 🔑 IP, TCP, and UDP are common protocols on the Internet. HTTP is a protocol used by the World Wide Web, which runs on top of the Internet.

---

## IP Addresses and Scalability

Every device on the Internet needs an address, and an address is just a group of bits.
- **IPv4** uses 32-bit addresses: $2^{32}$, about 4.3 billion addresses
- **IPv6** uses 128-bit addresses: $2^{128}$, vastly more
- IPv6 was created because the Internet keeps growing and IPv4 addresses are running out; the Internet was **designed to be scalable**
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
              'IPv4 was too slow for modern broadband connections',
              'IPv4 does not support wireless or mobile connections',
              'IPv4\'s roughly 4.3 billion addresses are running out',
              'IPv4 could not carry video or other streaming media'
            ],
            correctAnswer: 2,
            explanation: 'IPv4 has 32-bit addresses (about 4.3 billion unique addresses). With so many more devices online, that is not enough. IPv6 uses 128-bit addresses, which provide vastly more.'
          },
          {
            question: 'What does TCP guarantee that IP alone does not?',
            options: [
              'Faster delivery by skipping the routing step',
              'Reliable, ordered delivery with lost packets resent',
              'Encryption of all data sent between two devices',
              'A unique address for each device on the network'
            ],
            correctAnswer: 1,
            explanation: 'IP handles addressing and routing, but packets may arrive out of order or not at all. TCP adds reliability by having lost packets resent and putting the data back in order.'
          }
        ]
      }
    },
    {
      id: 'cspip1-content',
      type: 'text' as const,
      content: `
## How a Web Page Reaches You

When you open a web page:

1. **HTTP request**: your browser sends a request for the page to the web server
2. **Packets**: the server's response is split into chunks of data, each wrapped in a packet with metadata
3. **Routing**: IP routes each packet across the Internet; different packets may take different paths
4. **Reassembly**: TCP checks that every packet arrived, asks for missing ones again, and puts the data in order
5. **Display**: the browser shows the page

## TCP vs. UDP

| Protocol | Every packet arrives? | Kept in order? | Typical use |
|----------|----------------------|----------------|-------------|
| **TCP** | Yes, lost packets are resent | Yes | Web pages, email, file transfer |
| **UDP** | No guarantee | No guarantee (packets may arrive in any order) | Live video and voice calls, online games |

### Why UDP Sometimes?
- Video calls: a few dropped frames are better than waiting for missing data to be resent
- Games: an old position update is useless even if it arrives

## Encryption and Certificate Authorities
- Web traffic sent with plain HTTP can be read by anyone who intercepts it; **HTTPS** encrypts it
- **Certificate authorities** issue digital certificates that validate the ownership of the encryption keys used in secure communications
- The lock icon in your browser means the connection is encrypted and the site's certificate was validated
      `
    },
    {
      id: 'cspip1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An agreed-upon set of rules that specify the behavior of a system is called a _______.

2) TCP guarantees reliable delivery; _______ makes no such guarantee and is used for live video calls.

3) HTTPS adds _______ to HTTP, so intercepted data cannot be read.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['protocol', 'UDP', 'encryption'],
        hint1: 'IP, TCP, UDP, and HTTP are all examples.',
        hint2: 'User Datagram Protocol.',
        hint3: 'Encoding data to prevent unauthorized access.',
        explanation: 'Protocols are agreed-upon rules. UDP does not guarantee delivery. HTTPS adds encryption.'
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
            options: ['TCP', 'UDP', 'HTTP only', 'IP only']
          },
          {
            label: 'IPv4 uses ___ bits for addresses, providing about 4.3 billion unique addresses',
            options: ['32 bits', '64 bits', '128 bits', '16 bits']
          },
          {
            label: 'The protocol used by the World Wide Web is ___',
            options: ['HTTP', 'UDP', 'TCP', 'IP']
          }
        ],
        correctAnswers: ['TCP', '32 bits', 'HTTP'],
        hint1: 'Needs reliability and ordering.',
        hint2: '2^32 = about 4.3 billion.',
        hint3: 'HyperText Transfer Protocol.',
        explanation: 'A file download needs TCP. IPv4 = 32-bit addresses. The Web uses HTTP.'
      }
    },
    {
      id: 'cspip1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Internet Protocols

- A protocol is an agreed-upon set of rules; the Internet's protocols are **open**
- **TCP** = every packet arrives and data are put in order. **UDP** = no such guarantee, less waiting
- **IP** addresses and routes packets; **HTTP** is the Web's protocol
- **IPv4** (32-bit) vs **IPv6** (128-bit): more bits, more addresses, so the Internet can keep scaling
- Encryption protects data in transit; certificate authorities validate encryption keys
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
              'The website loads more slowly than it would over HTTPS',
              'Data is unencrypted, so others on the network could read it',
              'The website cannot display images or other media files',
              'The user cannot log in to any account on the website'
            ],
            correctAnswer: 1,
            explanation: 'Data sent over public networks can be intercepted. Without encryption, anyone who intercepts the data (for example, on public Wi-Fi) can read it, including passwords.'
          },
          {
            question: 'Which protocol would be BEST for a live video call?',
            options: [
              'TCP — because every frame must arrive reliably',
              'UDP — because low delay matters more than reliability',
              'HTTP — because it is the protocol used for web content',
              'IP alone — because it guarantees that frames stay in order'
            ],
            correctAnswer: 1,
            explanation: 'A few dropped frames are acceptable in a live call, but waiting for lost data to be resent would cause delays, so UDP fits.'
          }
        ]
      }
    }
  ]
};
