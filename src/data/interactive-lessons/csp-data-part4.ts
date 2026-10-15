export const cspDataPart4Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata4-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 4 of 7 — Connections & Interactions**

---

## Data Connects Across CSP

| Connection | Why |
|-----------|-----|
| Data ↔ Algorithms | Algorithms operate on data. |
| Data ↔ Internet | Data flows over networks. |
| Data ↔ Security | Data must be protected at rest and in transit. |
| Data ↔ Impact | Decisions about data collection affect privacy, fairness, and trust. |
      `
    },
    {
      id: "cspdata4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Choosing between a list and a hash table for a lookup task is primarily an ___ decision.",
            options: [
              "encryption decision driven by how sensitive the data is",
              "algorithm and data-structure decision driven by performance",
              "network decision driven by the link's bandwidth limits",
              "compression decision driven by the available storage budget"
            ],
            correctAnswer: 1,
            explanation: "Data structure choice impacts algorithm performance."
          },
          {
            question: "A medical study collects identifying data; a researcher loses a laptop with the dataset. The most accurate framing is ___",
            options: [
              "no concern, since the laptop will probably never be powered on again.",
              "a privacy and security incident that encryption and gathering less data would limit.",
              "a hardware concern only, since the data on the device is irrelevant to anyone else.",
              "an accuracy problem, since the study's results can no longer be checked or reproduced."
            ],
            correctAnswer: 1,
            explanation: "Lost device with sensitive data is a privacy/security incident."
          }
        ]
      }
    },
    {
      id: "cspdata4-content",
      type: 'text' as const,
      content: `
## Data Structures Affect Algorithms

| Task | Bad choice | Better choice |
|------|-----------|---------------|
| Look up by ID | Linear scan of a list | Hash table (O(1) avg) |
| Sorted access | Unsorted list | Sorted array / balanced tree |
| "Top K" repeatedly | Resort each time | Heap |
| Network of relations | Pairs of IDs in a list | Graph |

## Encryption At Rest vs. In Transit

| Phase | Protection |
|-------|-----------|
| **At rest** (storage) | Disk-level or field-level encryption. |
| **In transit** (network) | TLS / HTTPS. |
| **In use** (memory) | Hardest; emerging tech (TEE, FHE). |

A complete data-protection plan addresses all three.

## Data Lifecycles

Real datasets have a lifecycle: collect → process → store → share → archive → **delete**. The "delete" stage is often skipped — and that's a security/privacy failure waiting to happen.

| Lifecycle stage | Question |
|----------------|----------|
| Collect | Do we really need this? |
| Store | Encrypted? Minimal access? |
| Share | With whom, under what terms? |
| Archive | How long? Why? |
| Delete | When does this go away? |
      `
    },
    {
      id: "cspdata4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Encrypting files on a hard drive is "encryption at _______".

2) TLS / HTTPS provides encryption "in _______".

3) A complete data lifecycle ends with a _______ stage.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["rest", "transit", "delete"],
        hint1: "Static storage.",
        hint2: "Moving over network.",
        hint3: "Lifecycle endpoint.",
        explanation: "At rest = stored; in transit = on the wire; deletion ends the lifecycle."
      }
    },
    {
      id: "cspdata4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A program that needs O(1) average lookup by ID should use ___",
            options: ["a hash table", "a linear list", "a linked list", "a sorted array"]
          },
          {
            label: "Encryption-in-transit is provided by ___",
            options: ["TLS / HTTPS", "full-disk encryption", "gzip / Brotli", "DNS / IP"]
          },
          {
            label: "A \"data minimization\" principle says ___",
            options: ["collect only the data actually needed", "compress data to use minimal storage", "anonymize everything that is collected", "collect everything, then delete what is unused"]
          }
        ],
        correctAnswers: ["a hash table", "TLS / HTTPS", "collect only the data actually needed"],
        hint1: "Hash = constant time.",
        hint2: "Network encryption.",
        hint3: "Less = safer.",
        explanation: "Hash tables = O(1) avg lookups. TLS = transit encryption. Data minimization = collect less."
      }
    },
    {
      id: "cspdata4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Data

- Match data structure to algorithm need.
- Cite both at-rest and in-transit encryption for full protection.
- "Data minimization" is the big-picture privacy principle.
- Always include "delete" in the lifecycle.
      `
    },
    {
      id: "cspdata4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A streaming service stores 10 years of every user's every click. The most CSP-aligned critique is ___",
            options: [
              "storage is cheap, so keeping click logs forever is fine.",
              "keeping behavioral data that long creates privacy and breach risk.",
              "encryption at rest alone removes all of the risk.",
              "click logs are anonymous, so keeping them carries no risk."
            ],
            correctAnswer: 1,
            explanation: "Indefinite retention multiplies risk; minimization + sunset is the answer."
          },
          {
            question: "A program needs to repeatedly find \"the highest priority task\" from a large set. The most appropriate data structure is ___",
            options: [
              "a priority queue that supports efficient removal of the maximum",
              "a singly linked list scanned linearly on each priority request",
              "a binary file written sequentially with no in-memory index built",
              "a hash table keyed by task ID with no ordering by priority"
            ],
            correctAnswer: 0,
            explanation: "Heaps support efficient repeated extraction of max/min."
          }
        ]
      }
    }
  ]
};
