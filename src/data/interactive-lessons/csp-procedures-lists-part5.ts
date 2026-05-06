export const cspProceduresListsPart5Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl5-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 5 of 7 — Change Over Time**

---

## How Procedures & Lists Have Evolved

| Era | Trend |
|-----|-------|
| 1970s | Procedural programming (subroutines). |
| 1990s | Object-oriented (methods on objects). |
| 2000s | Functional resurgence (map/filter/reduce in mainstream langs). |
| 2010s | Lambdas / arrow functions everywhere. |
| 2020s | Pattern matching, immutable collections by default in many new langs. |
      `
    },
    {
      id: "csppl5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Modern languages widely adopt **map / filter / reduce** because ___",
            options: [
              "they consistently make the resulting source code longer than equivalent loops.",
              "they express common patterns concisely and enable parallel implementations.",
              "they replace ordered indexed lists entirely with unordered set collections.",
              "they automatically encrypt the elements of the list as they are processed."
            ],
            correctAnswer: 1,
            explanation: "Functional patterns express intent and parallelize well."
          },
          {
            question: "A \"lambda\" or \"arrow function\" is ___",
            options: [
              "a hardware feature built into modern multi-core processors for fast execution.",
              "an unnamed inline procedure typically passed to a higher-order function as data.",
              "a network protocol used to transmit anonymous code between distributed services.",
              "a compression algorithm that shortens function bodies by removing whitespace."
            ],
            correctAnswer: 1,
            explanation: "Lambdas = anonymous procedures."
          }
        ]
      }
    },
    {
      id: "csppl5-content",
      type: 'text' as const,
      content: `
## Lists Got A Cousin: Other Collections

| Collection | Property |
|-----------|----------|
| List / array | Ordered, indexed. |
| Set | Unordered, no duplicates. |
| Map / dictionary | Key → value. |
| Tuple | Fixed-size ordered group. |
| Stream | Lazy, possibly infinite sequence. |

AP CSP focuses on lists, but real software uses all of these.

## Procedures As Values

Modern languages let you store procedures in variables, pass them as arguments, and return them from other procedures. This makes patterns like map and filter natural.

    doubled ← MAP(nums, lambda x: x * 2)
    evens ← FILTER(nums, lambda x: x MOD 2 = 0)

The AP exam emphasizes the conceptual underpinnings even if it uses simpler pseudocode.

## Immutability Pressure

Many modern languages favor **persistent / immutable** lists. Operations return new lists instead of mutating the original. This eliminates whole classes of bugs but requires more memory (mitigated by structural sharing).
      `
    },
    {
      id: "csppl5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An unordered collection of unique values is called a _______.

2) A collection mapping keys to values is called a _______ or dictionary.

3) An anonymous inline procedure is often called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["set", "map", "lambda"],
        hint1: "No duplicates.",
        hint2: "Key → value.",
        hint3: "Greek letter.",
        explanation: "Set, map / dictionary, lambda — modern collection vocabulary."
      }
    },
    {
      id: "csppl5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A higher-order function takes a procedure as ___",
            options: ["an argument (or returns one)", "a network address", "a file", "an encrypted message"]
          },
          {
            label: "Immutable lists ___",
            options: ["return new lists from operations instead of modifying the original", "cannot store data", "compress automatically", "encrypt automatically"]
          },
          {
            label: "\"Procedures as values\" enables ___",
            options: ["patterns like map / filter where you parameterize the operation", "compression", "TLS", "IPv6"]
          }
        ],
        correctAnswers: ["an argument (or returns one)", "return new lists from operations instead of modifying the original", "patterns like map / filter where you parameterize the operation"],
        hint1: "HOF behavior.",
        hint2: "Functional collections.",
        hint3: "Parameterized ops.",
        explanation: "HOF = procedure as argument/return. Immutable ops return new. Procedures-as-values enable map/filter."
      }
    },
    {
      id: "csppl5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Modern Procedures/Lists

- Functional patterns (map / filter / reduce) are everywhere.
- Procedures can be values (lambdas, callbacks).
- Immutability is increasingly the default in new languages.
      `
    },
    {
      id: "csppl5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team writes the same \"loop and accumulate\" code in 8 places. The single best refactor (using modern patterns) is ___",
            options: [
              "leave the duplication and rely on careful copy-paste discipline going forward.",
              "extract a higher-order REDUCE helper that takes the per-element combiner as a parameter.",
              "compress the source file so the eight duplicated blocks take less disk space overall.",
              "encrypt the eight loops so future maintainers cannot accidentally edit one of them."
            ],
            correctAnswer: 1,
            explanation: "A higher-order reducer eliminates the duplication."
          },
          {
            question: "A program needs to test \"is each name in this list unique?\". The most direct collection to use is ___",
            options: [
              "a list, scanning every prior name linearly each time a new name is examined.",
              "a set — insert each name; if the set's size grows each time, names are unique.",
              "a tuple of fixed length holding the names that have already been examined.",
              "an encrypted blob whose ciphertext length is compared after each insertion."
            ],
            correctAnswer: 1,
            explanation: "Sets natively encode uniqueness; building one tells you instantly."
          }
        ]
      }
    }
  ]
};
