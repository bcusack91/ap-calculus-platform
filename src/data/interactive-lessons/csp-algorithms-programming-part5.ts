export const cspAlgorithmsProgrammingPart5Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap5-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 5 of 7 — Libraries, APIs, and Random Values**

---

## Reusing Code: Libraries and APIs

A **software library** contains procedures that may be used in creating new programs. Existing code segments can come from inside your own project (code you or a teammate wrote earlier) or from outside sources such as libraries.

| Term | Meaning |
|------|---------|
| **Library** | A collection of procedures that can be used in new programs |
| **API** (application program interface) | A specification for how the procedures in a library behave and how they can be used |
| **Documentation** | Describes what each procedure does, what its parameters mean, and what it returns |

Using a library simplifies the task of creating a complex program. Its procedures have already been tested, so you can write programs more quickly and with more confidence. Documentation is what lets you use them correctly without reading their code.
      `
    },
    {
      id: "cspap5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A programmer wants to call a library procedure named drawCircle but does not know what its parameters mean. What should the programmer consult first?",
            options: [
              "The library's documentation for drawCircle",
              "The source code of every procedure in the library, line by line",
              "A list of the other programs that already call drawCircle",
              "The names and contact details of the library's authors"
            ],
            correctAnswer: 0,
            explanation: "API and library documentation describes what each procedure does and how to use it, so it answers the question without reading the library's code."
          },
          {
            question: "Which statement about using a well-tested library procedure in a new program is most accurate?",
            options: [
              "It guarantees that the whole program will be free of errors.",
              "It saves time by reusing code that others have already checked.",
              "It requires the programmer to understand every line inside it.",
              "It always runs faster than code the programmer could write."
            ],
            correctAnswer: 1,
            explanation: "Libraries simplify building complex programs by reusing tested procedures. The rest of the program can still contain errors, and the programmer only needs to know what the procedure does, not how."
          }
        ]
      }
    },
    {
      id: "cspap5-content",
      type: 'text' as const,
      content: `
## Random Values

The exam reference sheet provides **RANDOM(a, b)**, which returns a random integer from a to b, **including both a and b**. Each result is equally likely.

\`\`\`
roll ← RANDOM(1, 6)      // 1, 2, 3, 4, 5, or 6
coin ← RANDOM(0, 1)      // 0 or 1
\`\`\`

Using random numbers means each run of a program may produce a different result.

### Evaluating Random Expressions

| Expression | Possible values |
|------------|-----------------|
| RANDOM(1, 6) | 1 through 6 (6 values) |
| RANDOM(1, 6) + RANDOM(1, 6) | 2 through 12 |
| RANDOM(0, 4) * 2 | 0, 2, 4, 6, or 8 |
| RANDOM(1, 10) ≤ 3 | true (3 of the 10 values) or false |

### Simulating a Chance Event

\`\`\`
IF (RANDOM(1, 100) ≤ 30)
{
    DISPLAY("rain")
}
ELSE
{
    DISPLAY("dry")
}
\`\`\`

This displays "rain" about 30% of the time, because 30 of the 100 equally likely values make the condition true.

## Simulations

A **simulation** is an abstraction of a more complex phenomenon. Developing one means removing specific details or simplifying how things work. Random numbers model the variability of the real world. Simulations are most useful when a real experiment would be too big, too small, too fast, too slow, too expensive, or too dangerous. Because developers choose which real-world elements to include or leave out, a simulation can contain **bias**.
      `
    },
    {
      id: "cspap5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) How many different values can RANDOM(3, 7) return? _______

2) The largest value RANDOM(1, 6) + RANDOM(1, 6) can produce is _______.

3) A specification of how the procedures in a library behave and can be used is called an _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5", "12", "API"],
        hint1: "Both ends are included: 3, 4, 5, 6, 7.",
        hint2: "Each call can be at most 6.",
        hint3: "Three letters: application program interface.",
        explanation: "RANDOM(3, 7) can return 3, 4, 5, 6, or 7. Two calls of at most 6 add to at most 12. An API specifies how a library's procedures behave and are used."
      }
    },
    {
      id: "cspap5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "RANDOM(2, 5) * 10 could evaluate to ___",
            options: ["50", "10", "55", "0"]
          },
          {
            label: "A traffic simulation leaves out pedestrians. Its results may contain ___",
            options: ["bias from what was left out", "a syntax error in the code", "the exact real-world outcome", "no variability at all"]
          },
          {
            label: "Crash-testing a car design by simulation is useful mainly because a real crash test is ___",
            options: ["expensive and dangerous", "impossible to measure", "less accurate than any model", "not allowed by law"]
          }
        ],
        correctAnswers: ["50", "bias from what was left out", "expensive and dangerous"],
        hint1: "RANDOM(2, 5) is 2, 3, 4, or 5.",
        hint2: "Choices about what to include can skew a model.",
        hint3: "Simulations help when real experiments are costly or unsafe.",
        explanation: "RANDOM(2, 5) * 10 is 20, 30, 40, or 50. Leaving out real-world elements can bias a simulation. Simulations are most useful when real experiments are too expensive or too dangerous."
      }
    },
    {
      id: "cspap5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Libraries, RANDOM, and Simulations

- RANDOM(a, b) includes both ends, so it can return b − a + 1 different values.
- To estimate how often a condition is true, count the values that make it true and divide by the total number of values.
- One run of a program that uses RANDOM proves little; reason about **every** value RANDOM could return.
- Use documentation to learn what a library procedure does; acknowledge any code you did not write.
- Simulations are cheaper and safer than real experiments, but they are only as good as their simplifying assumptions, and they can contain bias.
      `
    },
    {
      id: "cspap5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which code segment displays true about 25% of the time it runs?",
            options: [
              "DISPLAY(RANDOM(1, 4) ≤ 2)",
              "DISPLAY(RANDOM(0, 4) = 0)",
              "DISPLAY(RANDOM(1, 4) = 1)",
              "DISPLAY(RANDOM(1, 25) = 1)"
            ],
            correctAnswer: 2,
            explanation: "RANDOM(1, 4) returns 1, 2, 3, or 4 with equal chance, so it equals 1 one time in four. RANDOM(0, 4) has five values, so = 0 is true one time in five, and ≤ 2 on RANDOM(1, 4) is true half the time."
          },
          {
            question: "A city uses a simulation to choose a location for a new bus stop. The model assumes that every rider walks at the same speed. Which statement is best supported?",
            options: [
              "The results are exact, since a computer does not make arithmetic mistakes.",
              "The model is useless, since a simulation must include every real detail.",
              "The model cannot use random values, since walking speed is a fixed number.",
              "Its predictions can help, but the simplified walking speeds may skew some."
            ],
            correctAnswer: 3,
            explanation: "Simulations remove details to stay manageable, so they can still inform a decision, but each simplifying assumption can make some predictions inaccurate."
          }
        ]
      }
    }
  ]
};
