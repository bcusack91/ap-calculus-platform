export const cspAlgorithmsProgrammingPart2Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap2-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 2 of 7 — Key Processes**

---

## From Algorithm to Program

An **algorithm** is a step-by-step plan; a **program** is that plan written in a language a machine can run. The bridge between them is **expressing** sequence, selection, and iteration with the precise vocabulary the language demands.

| Concept | Algorithm version | Program version |
|---------|-------------------|-----------------|
| Storage | "remember the value" | declare a **variable**, assign with ← |
| Choice | "if … otherwise …" | **IF** / **ELSE** with a Boolean expression |
| Repetition | "do this n times" | **REPEAT N TIMES** or **REPEAT UNTIL** |
| Reuse | "do step X again here" | call a **procedure** |
      `
    },
    {
      id: "cspap2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which is the most precise distinction between an algorithm and a program?",
            options: [
              "Algorithms are written only in plain English; programs must always be written in compiled code.",
              "Algorithms are conceptual sequences of steps; programs are algorithms expressed in a runnable language.",
              "Algorithms always run faster than programs because algorithms skip the language-translation step.",
              "Programs always contain loops; algorithms by definition never contain any kind of repetition step."
            ],
            correctAnswer: 1,
            explanation: "An algorithm is the *idea*; a program is its concrete expression in a runnable language."
          },
          {
            question: "You have a working pseudocode algorithm but no program. Which step is the most likely next move?",
            options: [
              "Run the pseudocode algorithm directly on the computer without any translation step in between.",
              "Translate the pseudocode into a programming language and test it on small sample inputs first.",
              "Add explanatory comments to the pseudocode itself before writing any actual program code at all.",
              "Replace the working pseudocode algorithm with a simpler one before writing any program code at all."
            ],
            correctAnswer: 1,
            explanation: "Pseudocode itself does not run; you implement it in a language and verify with tests."
          }
        ]
      }
    },
    {
      id: "cspap2-content",
      type: 'text' as const,
      content: `
## Worked Translation: Pseudocode → Program

**Pseudocode**

    PROCEDURE areaOfRect(w, h) {
      RETURN w * h
    }

**Equivalent ideas in any language**

- A function/method called areaOfRect.
- Two parameters w and h (numbers).
- Returns a number.

**Calling it**

    a ← areaOfRect(3, 4)
    DISPLAY(a)

The call evaluates each argument **before** entering the procedure. Inside the procedure, the parameters are local — assigning to w would not affect the caller.

## Common Statement Types

| Statement | Pseudocode shape | Effect |
|-----------|------------------|--------|
| Assignment | x ← expr | Compute right side, store in x. |
| Conditional | IF (cond) {…} ELSE {…} | Pick one branch. |
| Loop | REPEAT N TIMES {…} | Run block N times (N captured at start). |
| Procedure call | name(args) | Pause caller, run procedure, return value. |
| Output | DISPLAY(value) | Show value to user. |
| Input | INPUT() | Get a value from the user. |
      `
    },
    {
      id: "cspap2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A reusable named block of code is called a _______.

2) In w ← w + 1, the operator ← means _______.

3) Values that are given to a procedure when it is called are called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["procedure", "assignment", "arguments"],
        hint1: "AP CSP word for function.",
        hint2: "It is not equality.",
        hint3: "Caller-side word; \"parameters\" is the procedure-side word.",
        explanation: "Procedures package reusable steps. ← assigns a value. Caller passes arguments; procedure receives them as parameters."
      }
    },
    {
      id: "cspap2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "In areaOfRect(3, 4), the values 3 and 4 are ___",
            options: ["arguments", "parameters", "returns", "variables"]
          },
          {
            label: "In PROCEDURE areaOfRect(w, h), the names w and h are ___",
            options: ["parameters", "arguments", "returns", "globals"]
          },
          {
            label: "After RETURN x, the procedure ___",
            options: ["exits immediately and sends x back", "continues executing the next line", "sets a global named x", "discards x"]
          }
        ],
        correctAnswers: ["arguments", "parameters", "exits immediately and sends x back"],
        hint1: "Caller side.",
        hint2: "Procedure header side.",
        hint3: "RETURN ends execution of the procedure.",
        explanation: "Arguments are values supplied; parameters are the names that bind them inside the procedure. RETURN ends the procedure and yields the value."
      }
    },
    {
      id: "cspap2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Translation

- The exam will give you BOTH a block-style and a text-style version of pseudocode. They mean the same thing — pick whichever you read faster.
- A procedure CALL replaces the call site with the procedure's RETURN value.
- Parameters are **local**: changing a parameter inside doesn't change the caller's variable.
- Watch the difference: DISPLAY(x) shows x but doesn't return it; RETURN x yields a value but doesn't print.
      `
    },
    {
      id: "cspap2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program defines:\n\nPROCEDURE bump(n) { n ← n + 1 }\nx ← 5\nbump(x)\nDISPLAY(x)\n\nWhat does it display?",
            options: [
              "5",
              "6",
              "0",
              "undefined"
            ],
            correctAnswer: 0,
            explanation: "n is a local parameter. bump(x) gives n the value 5 and increments n locally; the caller's x is unchanged."
          },
          {
            question: "A team must convert a working algorithm into a runnable program. Which sequence is most appropriate?",
            options: [
              "Write the program, ship it, then write the algorithm.",
              "Translate pseudocode → run on small test inputs → fix bugs → run on representative inputs.",
              "Translate pseudocode → ship → wait for users to report bugs.",
              "Skip pseudocode and write directly in production."
            ],
            correctAnswer: 1,
            explanation: "Iterative testing on small inputs first catches translation errors cheaply."
          }
        ]
      }
    }
  ]
};
