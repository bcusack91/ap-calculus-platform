export const cspBinaryDataPart4Data = {
  topicSlug: "csp-binary-data",
  sections: [
    {
      id: "cspbd4-intro",
      type: 'text' as const,
      content: `
# 🔢 Binary & Data Representation

**Part 4 of 7 — Connections & Interactions**

---

## Why Binary Connects To Everything Else

The "everything is bits" idea makes the rest of the course possible.

| Topic | Connection |
|-------|-----------|
| **Internet (BI 4)** | All packets are bits, regardless of media (fiber, copper, radio). |
| **Algorithms (BI 3)** | Algorithms manipulate bit patterns — search, sort, compress. |
| **Compression (BI 2)** | Encode the same data in fewer bits. |
| **Security (BI 5)** | Encryption transforms bits into other bits unreadable without a key. |
| **Impact (BI 5)** | A digital file is trivial to copy and share — that changes society. |
      `
    },
    {
      id: "cspbd4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A photograph and an audio clip are sent over the same network connection. From the network's perspective, ___",
            options: [
              "the photograph travels faster because image packets get priority.",
              "each is just a sequence of bits carried in ordinary packets.",
              "the audio clip is converted to text before it is transmitted.",
              "photographs need a dedicated channel separate from audio data."
            ],
            correctAnswer: 1,
            explanation: "On the wire, all data is bits packaged into packets."
          },
          {
            question: "A 100 KB text file is encrypted into a different 100 KB file. The encrypted bytes ___",
            options: [
              "no longer represent binary data until they are decrypted.",
              "are still a bit pattern, just meaningless as text without the key.",
              "cannot be sent over the Internet until they are decrypted first.",
              "are guaranteed to be smaller than the original plaintext file."
            ],
            correctAnswer: 1,
            explanation: "Encryption is a transformation of bits, not a removal of bits."
          }
        ]
      }
    },
    {
      id: "cspbd4-content",
      type: 'text' as const,
      content: `
## Bits Are Format-Agnostic

A network router doesn't know whether the bits it forwards are an image, a song, or a chess move. It only knows source/destination headers and the payload bits. This is why a single Internet works for so many uses — the binary layer is universal.

## Same Bytes, Different Meaning

A 4-byte sequence 01000001 01000010 01000011 01000100 could mean:

- **Text**: the letters "ABCD", under a common character code
- **Four small unsigned integers**: 65, 66, 67, 68
- **One large whole number**: all 32 bits read together as a single binary number
- **Pixels**: four grayscale brightness levels, one byte each

The interpretation lives in the program reading the file, not in the file itself. This is the CED idea that **the same sequence of bits may represent different types of data in different contexts**.

## Lossless Encoding Connections

Lossless compression takes a bit pattern and produces a shorter one that decodes back to the same original. Encryption takes a bit pattern and produces one that can only be decoded with a key. Both rely on the universality of bits.
      `
    },
    {
      id: "cspbd4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) On a network, all data — text, image, video — is transmitted as _______.

2) The same byte sequence can have different meanings depending on how the program _______ it.

3) Using digital data to approximate real-world analog data is an example of _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["bits", "interprets", "abstraction"],
        hint1: "The base-2 universal layer.",
        hint2: "Reading-side decision.",
        hint3: "Hiding details to focus on the main idea.",
        explanation: "All network data = bits. Bytes need an interpretation. Approximating analog data with digital samples is abstraction."
      }
    },
    {
      id: "cspbd4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Read as a whole number, the byte 01000001 equals ___",
            options: ["65", "64", "129", "130"]
          },
          {
            label: "A network router primarily reads ___ when forwarding a packet",
            options: ["the headers (source / destination)", "the payload (the data being sent)", "the file metadata (name / type)", "the encryption key (sender's / receiver's)"]
          },
          {
            label: "The same 8 bits 01000001 mean the letter \"A\" only when interpreted as ___",
            options: ["a text character", "a grayscale pixel", "a whole number", "an audio sample"]
          }
        ],
        correctAnswers: ["65", "the headers (source / destination)", "a text character"],
        hint1: "Place values 64 and 1 are on.",
        hint2: "Routers care about routing.",
        hint3: "Interpretation gives meaning.",
        explanation: "01000001 = 64 + 1 = 65. Routers route using the packet's metadata. Interpretation gives bit patterns meaning."
      }
    },
    {
      id: "cspbd4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Binary Questions

- "How is X transmitted on the Internet?" → bits, regardless of X.
- "What does a byte sequence MEAN?" → the encoding scheme decides.
- Encryption and compression are both bit-pattern transformations.
      `
    },
    {
      id: "cspbd4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A video conferencing app simultaneously sends video frames, audio samples, and chat text. From a network standpoint, ___",
            options: [
              "each of the three media must travel on its own physically separate channel between the endpoints.",
              "every stream is sent as bits in packets, with metadata that lets the receiver reassemble each stream.",
              "the video stream must first be converted back into an analog signal before it can travel across the network.",
              "the chat text must arrive at the recipient before any of the video frames or audio samples are processed."
            ],
            correctAnswer: 1,
            explanation: "Different media share the same network and protocols; each packet carries metadata used for routing and reassembly."
          },
          {
            question: "One program saves a list of pixel brightness values to a file. A second program opens the same file as text and shows meaningless characters. What is the best explanation?",
            options: [
              "The bits were damaged while the file was being saved.",
              "The same bits mean different things in different contexts.",
              "Pixel brightness values cannot be stored as binary data.",
              "Text characters always need more bits than pixel values."
            ],
            correctAnswer: 1,
            explanation: "The bits were stored correctly; the second program interpreted them under a different convention, so they became different data."
          }
        ]
      }
    }
  ]
};
