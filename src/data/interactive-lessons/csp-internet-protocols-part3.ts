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

## The Internet vs. the World Wide Web

People often use the two names as if they meant the same thing. They do not.

| | Internet | World Wide Web |
|---|----------|----------------|
| What it is | A computer network of interconnected networks | A system of linked pages, programs, and files |
| Protocols | IP, TCP, UDP | HTTP |
| Relationship | Carries data for many uses | **Uses** the Internet |

Email apps, video-call apps, and online games all use the Internet. Only some of what happens on the Internet is the Web.
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
            question: "Which statement correctly describes the World Wide Web?",
            options: [
              "Another name for the Internet's network of interconnected networks",
              "A system of linked pages, programs, and files that uses the Internet",
              "The set of protocols, such as IP and TCP, that route each packet",
              "A private network that only devices with web browsers can join"
            ],
            correctAnswer: 1,
            explanation: "The Web is a system of linked pages, programs, and files; it uses the Internet and the HTTP protocol."
          },
          {
            question: "Which activity uses the Internet but not necessarily the World Wide Web?",
            options: [
              "Reading a page linked from a list of search results",
              "A voice call made in a dedicated calling app",
              "Clicking a link from one web page to another",
              "Loading the home page of an online newspaper"
            ],
            correctAnswer: 1,
            explanation: "A calling app sends its data over the Internet without using linked web pages; the other choices are all browsing the Web."
          }
        ]
      }
    },
    {
      id: "cspip3-content",
      type: 'text' as const,
      content: `
## Patterns in Packet Delivery

Packets may arrive at the destination **in order, out of order, or not at all**.

| What happens | With TCP | With UDP |
|-------------|----------|----------|
| All packets arrive in order | Data delivered as is | Data delivered as is |
| Packets arrive out of order | Put back in order using metadata | No guarantee of order |
| A packet never arrives | It is requested again | That data is lost |

## A Single Server Is a Weak Point

If a service runs on **one** server, that server is a single point of failure: when it goes down, the service is gone. Adding **redundant** servers, so that another can take over, makes the service **fault-tolerant**. The Internet itself follows the same idea with redundant paths between devices.

## Scalability in Action

The Internet grew from a few thousand connected devices to billions without being redesigned, because it was built to **scale**: open protocols let anyone add devices, and routing finds paths through whatever networks are connected.
      `
    },
    {
      id: "cspip3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The World Wide Web uses the _______ protocol.

2) A web browser and an email app both send their data over the _______.

3) Packets may arrive in order, out of order, or not at _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["HTTP", "Internet", "all"],
        hint1: "HyperText Transfer Protocol.",
        hint2: "The network of networks.",
        hint3: "Some packets are lost.",
        explanation: "The Web uses HTTP. Many applications, the Web among them, run over the Internet. Packets can be lost entirely."
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
            label: "Loading a web page in a browser uses ___",
            options: ["both the Web and the Internet", "the Web but not the Internet", "the Internet but not the Web", "neither the Web nor the Internet"]
          },
          {
            label: "Packets that arrive out of order are put back in order using their ___",
            options: ["metadata", "bandwidth", "encryption key", "file extension"]
          },
          {
            label: "For a service that must remain available if any single server fails, a ___ design helps",
            options: ["distributed / redundant", "single powerful server", "centralized database", "client-side only"]
          }
        ],
        correctAnswers: ["both the Web and the Internet", "metadata", "distributed / redundant"],
        hint1: "The Web runs on the Internet.",
        hint2: "Data about the data.",
        hint3: "Redundancy beats a single point of failure.",
        explanation: "The Web uses the Internet. Metadata guide reassembly. Redundant designs survive single-server failures."
      }
    },
    {
      id: "cspip3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Patterns

- Internet = network of networks (IP, TCP, UDP). Web = linked pages, programs, files (HTTP). The Web uses the Internet.
- Packets: in order, out of order, or not at all. TCP repairs order and loss; UDP does not.
- "Single point of failure" → add redundancy.
- "How did the Internet grow so large?" → it was designed to be scalable, with open protocols.
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
            question: "A school runs attendance on a single server. When that server is down, no one can mark attendance. Which design change most directly addresses this?",
            options: [
              "Add redundant servers that can take over the work if any one server fails.",
              "Add explanatory comments throughout the existing single attendance server's code to document what fails.",
              "Switch all attendance traffic from TCP to UDP so requests will arrive faster than they currently do.",
              "Change the school's Wi-Fi network password to a stronger value to prevent future server outages."
            ],
            correctAnswer: 0,
            explanation: "Redundancy removes the single point of failure, making the service fault-tolerant."
          },
          {
            question: "A web page's packets arrive at a laptop out of order, and two packets are lost along the way. The page still displays correctly. Which is the best explanation?",
            options: [
              "IP guarantees every packet arrives in the order it was sent.",
              "TCP had the lost packets resent and used metadata to order them.",
              "The browser guessed the missing content from the rest of the page.",
              "UDP resent the missing packets and then sorted all of them by size."
            ],
            correctAnswer: 1,
            explanation: "TCP provides reliable, ordered delivery: it asks for lost packets again and reassembles the data using packet metadata."
          }
        ]
      }
    }
  ]
};
