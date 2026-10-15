export const cspVariablesControlPart5Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc5-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 5 of 7 — Change Over Time**

---

## How Programming Languages Handle Variables Has Evolved

| Era | Trend |
|-----|-------|
| 1970s | Static typing (C, Pascal); declare type up front. |
| 1990s | Dynamic typing (Python, JavaScript); flexibility. |
| 2010s | Type inference + optional types (TypeScript, Rust). |
| 2020s | Stronger compile-time guarantees, immutability by default in many new languages. |
      `
    },
    {
      id: "cspvc5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "TypeScript adds ___ to JavaScript.",
            options: [
              "noticeably faster runtime execution of the same JavaScript program",
              "optional static typing checked at compile time, before the program runs",
              "a garbage collector that JavaScript programs previously lacked",
              "automatic source-code compression so the resulting bundle is smaller"
            ],
            correctAnswer: 1,
            explanation: "TypeScript = JS + static types."
          },
          {
            question: "Why are modern languages trending toward immutability by default?",
            options: [
              "Mutable data is always slower, so immutability is a performance fix.",
              "Immutable data is easier to reason about, especially in parallel code.",
              "Immutable values use less memory, since copies are never needed.",
              "Mutable variables cannot be shared between procedures in modern languages."
            ],
            correctAnswer: 1,
            explanation: "Immutability simplifies concurrency and reasoning."
          }
        ]
      }
    },
    {
      id: "cspvc5-content",
      type: 'text' as const,
      content: `
## Static vs. Dynamic Typing

| Style | When type is checked |
|-------|---------------------|
| Static | Compile time (C, Java, Rust). |
| Dynamic | Run time (Python, JS). |
| Gradual | Optional annotations (TypeScript, mypy). |

Static = catch errors earlier; Dynamic = faster prototyping; Gradual = mix-and-match.

## Concurrency Pressure On Variables

Modern multi-core hardware made shared mutable state risky. New languages (Rust, Go, modern Java) provide tools to make concurrent variable access safer.

## AP CSP Pseudocode Style

The AP exam uses simple pseudocode similar to Python in spirit:

    count ← 0
    FOR EACH item IN list:
      IF item > 0 THEN count ← count + 1

You won't need to worry about types or memory management on the exam.
      `
    },
    {
      id: "cspvc5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A language that checks types at compile time is _______-typed.

2) A language like Python that checks types at run time is _______-typed.

3) A philosophy where variables don't change after creation is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["statically", "dynamically", "immutability"],
        hint1: "Compile-time check.",
        hint2: "Run-time check.",
        hint3: "Unchangeable.",
        explanation: "Static / dynamic typing; immutability."
      }
    },
    {
      id: "cspvc5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Compile-time type checking helps catch ___",
            options: ["certain errors before the program runs", "every logic error in the program's design", "mistakes that only appear with user input", "performance problems during execution"]
          },
          {
            label: "Immutability helps with ___",
            options: ["easier reasoning, especially in concurrent code", "faster updates, since values change in place", "lower memory use, since copies are never made", "simpler syntax, especially in nested loops"]
          },
          {
            label: "AP CSP pseudocode is closest in style to ___",
            options: ["Python-like, with words like FOR EACH and REPEAT UNTIL", "assembly-like, with registers and jump instructions", "binary-like, with instructions written as 0s and 1s", "HTML-like, with tags that open and close each block"]
          }
        ],
        correctAnswers: ["certain errors before the program runs", "easier reasoning, especially in concurrent code", "Python-like, with words like FOR EACH and REPEAT UNTIL"],
        hint1: "Pre-runtime safety.",
        hint2: "Concurrency.",
        hint3: "High-level pseudocode.",
        explanation: "Static types catch errors early. Immutability eases concurrency. AP pseudocode is high-level."
      }
    },
    {
      id: "cspvc5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Language Evolution

- Static vs. dynamic typing tradeoffs.
- Immutability + scope tightening = modern best practices.
- AP pseudocode is high-level, English-like.
      `
    },
    {
      id: "cspvc5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team migrates a large JavaScript codebase to TypeScript. The most direct benefit is ___",
            options: [
              "noticeably faster runtime since the TypeScript compiler optimizes the JS output.",
              "catching many type errors at compile time, before the code reaches deployment.",
              "producing smaller bundle files because TypeScript syntax is more compact than JS.",
              "automatic removal of logic errors, since the compiler checks each program's intent."
            ],
            correctAnswer: 1,
            explanation: "TypeScript catches type errors before runtime."
          },
          {
            question: "A concurrent program where two threads update the same shared counter without coordination most often suffers from ___",
            options: [
              "no issue, since concurrent updates to one counter are safe by default.",
              "race conditions that produce wrong counts unless updates are synchronized.",
              "a deadlock, since two threads can never touch the same variable.",
              "an overflow error, since two threads double the counter's size."
            ],
            correctAnswer: 1,
            explanation: "Unsynchronized shared mutable state = race conditions."
          }
        ]
      }
    }
  ]
};
