export const cspInternetProtocolsPart3Data = {
  topicSlug: "csp-internet-protocols",
  sections: [
    {
      id: "cspip3-intro",
      type: 'text' as const,
      content: `
# 🌐 The Internet & Protocols

**Part 3 of 7 — Patterns & Examples**

---

## Common Internet Patterns

The same shapes recur across services.

| Pattern | Example |
|---------|---------|
| **Client / server** | Browser ↔ web server. |
| **Peer-to-peer (P2P)** | BitTorrent file sharing; some video calls. |
| **Request / response** | HTTP GET → 200 OK. |
| **Streaming** | Video and audio data delivered as a continuous flow. |
| **Publish / subscribe** | Notifications, social feeds. |
      `
    },
    {
      id: "cspip3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "In a client/server architecture, the role of the server is to ___",
            options: [
              "initiate connections to clients.",
              "wait for client requests and respond.",
              "route packets between clients.",
              "compress all data."
            ],
            correctAnswer: 1,
            explanation: "Servers wait; clients initiate."
          },
          {
            question: "Which service most clearly fits the peer-to-peer pattern?",
            options: [
              "Email between two users via Gmail.",
              "A web search.",
              "BitTorrent file distribution where each downloader also uploads.",
              "A bank login page."
            ],
            correctAnswer: 2,
            explanation: "BitTorrent peers exchange data with each other directly, not through a central server."
          }
        ]
      }
    },
    {
      id: "cspip3-content",
      type: 'text' as const,
      content: `
## Client / Server vs. Peer-to-Peer

| Aspect | Client / Server | Peer-to-Peer |
|--------|-----------------|--------------|
| Initiator | Client. | Any peer. |
| Coordination | Centralized server. | Distributed among peers. |
| Failure | Server outage = service down. | Some peers can vanish; service continues. |
| Examples | Web, email. | BitTorrent, some video calls. |

## Request / Response Anatomy

An HTTP request:

    GET /api/student/42 HTTP/1.1
    Host: example.com
    Authorization: Bearer eyJ…

An HTTP response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: 142
    
    {"id": 42, "name": "Alex", …}

Status codes: **2xx** = OK, **3xx** = redirect, **4xx** = client error (e.g., 404 not found), **5xx** = server error.

## Streaming As A Pattern

Video streams break the file into small chunks; the player buffers a few seconds ahead. If the network slows, the player switches to a lower-bitrate version (adaptive bitrate). The connection remains open while the stream plays.
      `
    },
    {
      id: "cspip3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In client/server, the _______ initiates the connection.

2) In a P2P network, peers can both _______ and serve data.

3) An HTTP status of 404 means the requested resource was not _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["client", "request", "found"],
        hint1: "Browser, app, etc.",
        hint2: "Two roles in one node.",
        hint3: "The \"Not Found\" code.",
        explanation: "Clients initiate. P2P peers both consume and serve. 404 = Not Found."
      }
    },
    {
      id: "cspip3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A 500-series HTTP status indicates ___",
            options: ["a server-side error", "a client-side error", "a redirect", "success"]
          },
          {
            label: "A push-notification service most closely resembles the ___ pattern",
            options: ["publish / subscribe", "request / response", "P2P file sharing", "streaming"]
          },
          {
            label: "For a service that must remain available if any single server fails, a ___ design helps",
            options: ["distributed / redundant", "single-server", "client-only", "P2P-only"]
          }
        ],
        correctAnswers: ["a server-side error", "publish / subscribe", "distributed / redundant"],
        hint1: "5xx is server's fault.",
        hint2: "Subscribers receive when publishers post.",
        hint3: "Redundancy beats single point of failure.",
        explanation: "5xx = server error. Pub/sub fits notifications. Distributed/redundant designs survive single-server failures."
      }
    },
    {
      id: "cspip3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Architecture Questions

- "Single point of failure" almost always means client/server with no redundancy.
- "Some peers can drop without taking the system down" → P2P or distributed.
- "Long-lived connection delivering continuous data" → streaming.
- HTTP status codes: 200 OK, 301/302 redirect, 404 not found, 500 server error. Recognize these on sight.
      `
    },
    {
      id: "cspip3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school deploys a single attendance server. When that server is down, no one can mark attendance. Which design change most directly addresses this?",
            options: [
              "Use redundant servers behind a load balancer so any one server can fail without service interruption.",
              "Add explanatory comments throughout the existing single attendance server's codebase to document what fails.",
              "Switch all attendance traffic from TCP to UDP so requests will arrive faster than they currently do.",
              "Change the school's Wi-Fi network password to a stronger value to prevent future server outage events."
            ],
            correctAnswer: 0,
            explanation: "Redundancy + load balancing eliminates the single point of failure."
          },
          {
            question: "A music service is redesigning to allow listeners to share locally-cached songs with nearby listeners on the same Wi-Fi network. Which architecture is most appropriate?",
            options: [
              "Peer-to-peer between nearby listeners on the same Wi-Fi, with a central server for catalog metadata.",
              "Strict client/server only, in which every song must be re-downloaded from a central server every time.",
              "Email-based file delivery, where each listener emails the song file to nearby listeners on demand.",
              "DNS-based file lookup, where each listener resolves song names through the Domain Name System."
            ],
            correctAnswer: 0,
            explanation: "Hybrid: P2P for the bulk data, centralized server for coordination/metadata."
          }
        ]
      }
    }
  ]
};
