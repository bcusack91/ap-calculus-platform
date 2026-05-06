export const cspCreativeDevelopmentPart5Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd5-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 5 of 7 — Change Over Time**

---

## How Development Practices Have Evolved

| Era | Dominant practice |
|-----|------------------|
| 1970s | Waterfall: design, build, ship. |
| 1990s | Object-oriented + early agile. |
| 2000s | Agile / Scrum: short iterations, frequent releases. |
| 2010s | Continuous integration / continuous deployment (CI/CD). |
| 2020s | AI-assisted coding; LLM prototyping. |
      `
    },
    {
      id: "cspcd5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "CI/CD primarily aims to ___",
            options: [
              "archive old commits so the repository stays small.",
              "integrate code changes frequently and deploy them quickly with automated tests.",
              "eliminate the need for human developers on the team.",
              "compress source files in the repository to save disk space."
            ],
            correctAnswer: 1,
            explanation: "CI/CD shortens the loop from change to production with automation."
          },
          {
            question: "AI coding assistants change the developer's role mostly by ___",
            options: [
              "automating typing and boilerplate while shifting human attention to design and review.",
              "writing perfect bug-free code automatically.",
              "eliminating the need for testing.",
              "replacing all developers next year."
            ],
            correctAnswer: 0,
            explanation: "AI accelerates routine tasks; humans still design, judge, and review."
          }
        ]
      }
    },
    {
      id: "cspcd5-content",
      type: 'text' as const,
      content: `
## Modern Tooling

| Tool | Job |
|------|-----|
| **Version control** (Git) | Track changes; collaborate. |
| **CI / CD** | Auto-test and auto-deploy. |
| **Issue tracker** | Coordinate work and bugs. |
| **Code review** | Inspect each other's work. |
| **AI assistants** | Suggest code, explain code, draft tests. |

## Generative AI Cautions

- AI-generated code may be subtly wrong.
- Pasting proprietary code into public AI tools may leak it.
- Generated code may resemble licensed training data.
- Skill atrophy if used as a crutch instead of a tutor.
      `
    },
    {
      id: "cspcd5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A short development cycle of plan-build-test-review-release is called a _______.

2) A practice of automatically running tests on every code change is part of CI / _______ delivery / deployment.

3) A tool that tracks every change and supports many contributors is called _______ control.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["sprint", "continuous", "version"],
        hint1: "Agile term.",
        hint2: "CI / CD.",
        hint3: "Git is one.",
        explanation: "Sprints are agile units. CI/CD = continuous. Git = version control."
      }
    },
    {
      id: "cspcd5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "AI-generated code should be ___ before being trusted",
            options: ["reviewed and tested", "pushed directly to production", "deleted", "ignored"]
          },
          {
            label: "A pull request enables ___",
            options: ["code review by other team members before changes are merged", "pulling files off a server", "instant deployment", "compression"]
          },
          {
            label: "CI / CD's main benefit is ___",
            options: ["rapid, low-risk deployment of small changes", "eliminating the need for testing", "reducing the developer headcount", "larger releases"]
          }
        ],
        correctAnswers: ["reviewed and tested", "code review by other team members before changes are merged", "rapid, low-risk deployment of small changes"],
        hint1: "Trust but verify.",
        hint2: "Code review is the point.",
        hint3: "Small + frequent = lower risk.",
        explanation: "AI output needs review. PRs enable review. CI/CD trades big releases for small frequent ones."
      }
    },
    {
      id: "cspcd5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Modern Development

- "Frequent small releases with automated tests" = CI/CD.
- "Track every change, multiple contributors" = version control.
- AI assistants: helpful but require review and care about privacy/licensing.
- Agile = short iterative cycles, not "no planning".
      `
    },
    {
      id: "cspcd5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A 100-developer team needs to coordinate changes to one codebase without overwriting each other's work. The most appropriate tool category is ___",
            options: [
              "emailing patched files around as attachments after each edit.",
              "a version-control system (e.g., Git) with branches, merges, and pull requests.",
              "a shared network drive where everyone edits the same files in place.",
              "a spreadsheet that tracks who is allowed to touch each file today."
            ],
            correctAnswer: 1,
            explanation: "Git enables parallel work with explicit merge points."
          },
          {
            question: "A developer pastes the company's internal authentication code into a public AI assistant for help. The most relevant CSP concern is ___",
            options: [
              "the AI tool may rewrite the code in a less efficient style.",
              "proprietary or sensitive code may be retained or exposed by the third-party service.",
              "the AI tool may flag the code as unreadable and refuse to respond.",
              "public AI tools always strip code formatting before processing it."
            ],
            correctAnswer: 1,
            explanation: "Pasting sensitive code into public AI tools risks confidentiality breaches."
          }
        ]
      }
    }
  ]
};
