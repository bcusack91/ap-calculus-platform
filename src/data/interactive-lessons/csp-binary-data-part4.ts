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
| **Security (BI 4)** | Encryption transforms bits into other bits unreadable without a key. |
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
              "the photograph travels faster.",
              "both are sequences of bits and travel through the same packets.",
              "the audio clip is stored as text.",
              "photographs need a special \"photo channel\"."
            ],
            correctAnswer: 1,
            explanation: "On the wire, all data is bits packaged into packets."
          },
          {
            question: "A 100 KB text file is encrypted into a different 100 KB file. The encrypted bytes ___",
            options: [
              "no longer need any encoding scheme.",
              "still represent some bit pattern, just not meaningful as text without the key.",
              "cannot be sent over the Internet.",
              "are guaranteed to be smaller."
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

- **Text (ASCII)**: "ABCD"
- **Four small unsigned integers**: 65, 66, 67, 68
- **One 32-bit unsigned integer**: 1,094,861,636
- **Pixels**: ¼ of a row of an image (each byte a grayscale level)

The interpretation lives in the program reading the file, not in the file itself. **File extensions** (".txt", ".png") and **headers** (magic bytes at the start of the file) tell programs how to interpret bytes.

## Lossless Encoding Connections

Compression (next part) takes a bit pattern and produces a shorter one that decodes back to the same original. Encryption takes a bit pattern and produces a same-length one that only decodes with a key. Both rely on the universality of bits.
      `
    },
    {
      id: "cspbd4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) On a network, all data — text, image, video — is transmitted as _______.

2) The same byte sequence can have different meanings depending on how the program _______ it.

3) A short magic-bytes signature at the start of a file tells programs the file _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["bits", "interprets", "format"],
        hint1: "The base-2 universal layer.",
        hint2: "Reading-side decision.",
        hint3: "PNG, JPEG, GIF — these are all formats.",
        explanation: "All network data = bits. Bytes need an interpretation. File format is signaled by headers and extensions."
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
            label: "Encrypting a 1 MB document produces a ciphertext that is approximately ___",
            options: ["1 MB", "0.5 MB", "2 MB", "0 bytes"]
          },
          {
            label: "A network router primarily reads ___ when forwarding a packet",
            options: ["the headers (source / destination)", "the file extension", "the encryption key", "the user's name"]
          },
          {
            label: "The same 8 bits 01000001 mean \"A\" only when interpreted as ___",
            options: ["ASCII text", "an audio sample", "a CSS color", "a Wi-Fi password"]
          }
        ],
        correctAnswers: ["1 MB", "the headers (source / destination)", "ASCII text"],
        hint1: "Encryption preserves length (roughly).",
        hint2: "Routers care about routing.",
        hint3: "Interpretation gives meaning.",
        explanation: "Encryption preserves size. Routers route by header. Interpretation gives bit patterns meaning."
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
- File extension ≠ guarantee: malicious bytes can be mislabeled. (Hence: never rely on extension for security.)
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
              "all three are sequences of bits sent in packets, distinguished by metadata in the application protocol.",
              "the video stream bypasses transport-layer encryption while the audio and chat streams are still encrypted.",
              "the chat text must arrive at the recipient before any of the video frames or audio samples are processed."
            ],
            correctAnswer: 1,
            explanation: "Different media share the same physical and Internet protocols; the application layer separates them."
          },
          {
            question: "A user receives a file labeled \"vacation.jpg\" but the file's magic bytes correspond to a Windows executable. What is the most accurate concern?",
            options: [
              "The image will simply appear inverted or color-shifted when the user opens it in a normal image viewer.",
              "The file extension can be misleading; opening the file as an executable may run unexpected code on the device.",
              "A file's magic bytes are guaranteed by the operating system to always match the file extension on disk.",
              "There is no concern at all, since file extensions on a downloaded file always honestly describe the contents."
            ],
            correctAnswer: 1,
            explanation: "Mismatched magic bytes / extensions are a classic malware-delivery technique."
          }
        ]
      }
    }
  ]
};
