export const cspCollaborationDevelopmentPart3Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll3-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 3 of 7 — Patterns & Examples**

---

## Common Collaboration Patterns

| Pattern | Description |
|---------|-------------|
| **Pair programming** | Two devs at one keyboard. |
| **Code review** | Async review before merge. |
| **Mob / ensemble** | Whole team works on one problem. |
| **Open source** | Public project; anyone can contribute. |
| **Crowdsourcing** | Many small contributors → big shared output. |
      `
    },
    {
      id: "cspcoll3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "In pair programming, the \"navigator\" usually ___",
            options: [
              "types code in a second editor at the same time as the driver.",
              "thinks about higher-level design and reviews while the driver types.",
              "works on a separate unrelated program to maximize parallelism.",
              "monitors network traffic to make sure the driver stays online."
            ],
            correctAnswer: 1,
            explanation: "Driver types tactical code; navigator thinks strategically."
          },
          {
            question: "Wikipedia is most accurately described as ___",
            options: [
              "a centralized corporate product written by a small editorial staff.",
              "a crowdsourced encyclopedia built by millions of volunteer contributors.",
              "a peer-to-peer file-sharing system for distributing reference works.",
              "a closed-source proprietary program licensed to participating schools."
            ],
            correctAnswer: 1,
            explanation: "Wikipedia is the canonical crowdsourcing example."
          }
        ]
      }
    },
    {
      id: "cspcoll3-content",
      type: 'text' as const,
      content: `
## Pair Programming

Two developers, one workstation: **driver** writes, **navigator** reviews live, they swap roles regularly. Catches errors instantly, transfers skills, decisions get challenged in real time.

## Code Review

The dominant collaboration pattern in modern teams. A developer opens a **pull request**; teammates review the diff, leave inline comments, approve or request changes. Good review checks: correctness, tests, readability, edge cases, security/privacy.

## Open Source And Crowdsourcing

- **Open source**: source is public; anyone can fork and propose changes.
- **Crowdsourcing**: many people contribute small pieces (Wikipedia, OpenStreetMap).

Both rely on **clear contribution guidelines** and **maintainers** who curate quality.
      `
    },
    {
      id: "cspcoll3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In pair programming, the person typing is called the _______.

2) A proposed change submitted for review is often packaged as a _______ request.

3) A project whose source code is publicly readable is called _______ source.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["driver", "pull", "open"],
        hint1: "Tactical role.",
        hint2: "Common Git term.",
        hint3: "Public + readable.",
        explanation: "Driver/navigator pair pattern. Pull request opens review. Open source = public."
      }
    },
    {
      id: "cspcoll3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Code review is most useful for ___",
            options: ["catching issues early and sharing knowledge across the team", "slowing the team down for no benefit", "preventing all bugs forever", "compressing files"]
          },
          {
            label: "Crowdsourcing relies on ___",
            options: ["clear guidelines and maintainers to curate quality", "no rules at all", "a single contributor", "closed-source software"]
          },
          {
            label: "A pair programming pair should ___",
            options: ["swap driver / navigator roles regularly", "never swap roles", "work in different rooms", "each write a separate program"]
          }
        ],
        correctAnswers: ["catching issues early and sharing knowledge across the team", "clear guidelines and maintainers to curate quality", "swap driver / navigator roles regularly"],
        hint1: "Two birds, one stone.",
        hint2: "Open ≠ unmoderated.",
        hint3: "Avoid one-sided fatigue.",
        explanation: "Code review = catch + learn. Crowdsourcing needs governance. Pair programming swaps roles."
      }
    },
    {
      id: "cspcoll3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Collaboration Patterns

- Pair / mob = synchronous, intense, fast feedback.
- Code review = async, scalable, durable record.
- Open source = public participation; needs maintainers.
- Crowdsourcing = many small contributions; needs quality controls.
      `
    },
    {
      id: "cspcoll3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team adds 5 new developers in one month. Knowledge transfer becomes painful. The most appropriate practice to add is ___",
            options: [
              "silent solo work so each new developer learns by doing alone.",
              "pair programming and code review so knowledge spreads as work happens.",
              "longer one-shot onboarding lectures from senior staff at month's end.",
              "larger less-frequent commits so reviewers see fewer separate changes."
            ],
            correctAnswer: 1,
            explanation: "Pair programming and code review spread knowledge organically."
          },
          {
            question: "An open-source project receives a wave of low-quality PRs. The most CSP-aligned response is ___",
            options: [
              "close the project to outside contributions and keep it strictly internal.",
              "add clearer contribution guidelines, automated checks, and active maintainer review.",
              "merge every incoming pull request to encourage broader community participation.",
              "reject all pull requests for the next 90 days regardless of their quality."
            ],
            correctAnswer: 1,
            explanation: "Crowdsourcing scales only with governance."
          }
        ]
      }
    }
  ]
};
