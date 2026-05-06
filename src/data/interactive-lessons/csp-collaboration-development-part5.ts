export const cspCollaborationDevelopmentPart5Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll5-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 5 of 7 — Change Over Time**

---

## How Collaboration Has Evolved

| Era | Dominant collab pattern |
|-----|------------------------|
| 1970s | Co-located teams; manual change tracking. |
| 1990s | First distributed VCS (CVS, Subversion). |
| 2000s | Git, GitHub; rise of open source. |
| 2010s | Distributed teams; Slack-style chat. |
| 2020s | Remote-first; AI assistants; async-first culture. |
      `
    },
    {
      id: "cspcoll5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "GitHub (and similar platforms) most fundamentally changed software collaboration by ___",
            options: [
              "making the underlying compilers and runtimes significantly faster.",
              "making it easy for strangers to collaborate on code with reviews and issue tracking.",
              "eliminating common categories of programming bugs at the language level.",
              "replacing the need for human developers with automated platform tooling."
            ],
            correctAnswer: 1,
            explanation: "GitHub-style platforms standardized PR-based collaboration."
          },
          {
            question: "A \"remote-first\" team optimizes ___",
            options: [
              "for in-office synchronous meetings during traditional business hours.",
              "for async written communication so different time zones can contribute equally.",
              "for never collaborating, since each engineer is supposed to work alone.",
              "for short messaging URLs that fit easily on small mobile-phone screens."
            ],
            correctAnswer: 1,
            explanation: "Remote-first means async-first written communication."
          }
        ]
      }
    },
    {
      id: "cspcoll5-content",
      type: 'text' as const,
      content: `
## The Open-Source Revolution

Most modern software builds on open-source libraries. This means:

- Companies depend on volunteer maintainers.
- Bugs and security flaws ripple across the ecosystem.
- Contributions can shape software billions use.

## Remote / Distributed Teams

Practices that make this work:

- Documented decisions.
- Async-first communication.
- Overlap windows.
- Inclusive scheduling — no time zone always wins.

## AI Assistants As Collaborators

Treat AI output like a junior dev's — review before trusting. Don't paste sensitive code into public AI tools. AI doesn't understand long-term context the way a teammate does.
      `
    },
    {
      id: "cspcoll5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A team that prioritizes written communication so global teammates can contribute is _______-first.

2) Modern software is built on top of many _______-source libraries.

3) AI coding assistants should be treated like a _______ developer — useful but reviewed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["remote", "open", "junior"],
        hint1: "Distributed by default.",
        hint2: "Public source code.",
        hint3: "Less experienced.",
        explanation: "Remote-first = async-default. Open-source libraries underpin most software. AI ≈ junior dev."
      }
    },
    {
      id: "cspcoll5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Documenting key decisions in writing helps remote teams by ___",
            options: ["making knowledge available across time zones", "forcing everyone to be online at once", "replacing video calls entirely", "compressing files"]
          },
          {
            label: "A bug in a popular open-source library may affect ___",
            options: ["millions of dependent applications worldwide", "only that library's author", "no one", "only government apps"]
          },
          {
            label: "AI-suggested code in a PR should be ___",
            options: ["reviewed by a human just like any other code", "merged automatically without review", "always rejected", "encrypted before merging"]
          }
        ],
        correctAnswers: ["making knowledge available across time zones", "millions of dependent applications worldwide", "reviewed by a human just like any other code"],
        hint1: "Async > sync for global teams.",
        hint2: "Dependency cascade.",
        hint3: "AI = collaborator, not authority.",
        explanation: "Written decisions cross time zones. Open-source bugs cascade. AI output needs human review."
      }
    },
    {
      id: "cspcoll5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Modern Collaboration

- Remote-first teams require async-first communication.
- Open-source dependencies mean shared risks AND shared maintenance burden.
- AI assistants accelerate routine work but require review.
- Tooling shapes team norms — choose tools deliberately.
      `
    },
    {
      id: "cspcoll5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A startup uses 200 open-source libraries. A critical bug is found in one of them. The most CSP-aligned response is ___",
            options: [
              "ignore the bug since the library is maintained by someone else.",
              "audit which apps depend on it, update to the patched version, and report upstream.",
              "immediately rewrite the entire library in-house to avoid depending on it.",
              "pin every dependency permanently and never accept any future updates."
            ],
            correctAnswer: 1,
            explanation: "Dependency hygiene + responsible upstream contribution."
          },
          {
            question: "A globally distributed team is consistently leaving Asia-Pacific teammates out of decisions because all calls happen during US hours. The most CSP-aligned fix is ___",
            options: [
              "ignore the issue and rely on the AP teammates to read meeting notes later.",
              "shift to async-first written decisions and rotate sync meeting times across regions.",
              "remove the AP teammates from decision-making projects to avoid the conflict.",
              "require the AP teammates to permanently shift their working hours to US time."
            ],
            correctAnswer: 1,
            explanation: "Async-first + rotating sync times = standard remote-team equity practice."
          }
        ]
      }
    }
  ]
};
