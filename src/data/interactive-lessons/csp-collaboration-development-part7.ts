export const cspCollaborationDevelopmentPart7Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll7-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Collaboration in Development

The collaboration concepts the AP exam tests most.
      `
    },
    {
      id: "cspcoll7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "AP CSP's definition of collaboration includes ___",
            options: [
              "silent solo work where each person codes their own piece in isolation.",
              "inclusive practices: many voices, shared knowledge, and constructive feedback.",
              "always working in person, since face-to-face meetings are required for trust.",
              "always working remotely, since in-person work is treated as a failure mode."
            ],
            correctAnswer: 1,
            explanation: "Collaboration = inclusion + shared knowledge + constructive feedback."
          },
          {
            question: "A pull-request workflow primarily supports ___",
            options: [
              "encrypting source code so only project maintainers can read it.",
              "asynchronous code review by teammates before changes are merged.",
              "compressing commit history so the repository takes less disk space.",
              "generating random review comments to satisfy automated reviewers."
            ],
            correctAnswer: 1,
            explanation: "PRs = mechanism for async code review."
          }
        ]
      }
    },
    {
      id: "cspcoll7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Collaboration | Multiple people working together with shared goals + practices. |
| Pair programming | Two devs at one keyboard. |
| Code review | Inspecting proposed changes before merge. |
| Pull request (PR) | A proposed change submitted for review. |
| Open source | Source code publicly available. |
| Crowdsourcing | Many small contributions to a shared output. |
| Bus factor | Number of teammates whose loss would block work. |
| Least privilege | Grant only the access actually needed. |
| Async-first | Default to written, time-zone-friendly communication. |

## Common Pitfalls

- Mistaking "many people in a room" for collaboration.
- Centralizing knowledge in one person (low bus factor).
- Skipping code review "because we trust each other".
- Ignoring quieter voices.
- Using a shared admin account.
- Pasting sensitive code into public AI tools.
      `
    },
    {
      id: "cspcoll7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A proposed change submitted for review is called a _______ request.

2) The number of teammates whose loss would block the team is the _______ factor.

3) Granting only the access actually needed is called _______ privilege.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["pull", "bus", "least"],
        hint1: "Git terminology.",
        hint2: "\"Hit by a bus\".",
        hint3: "Minimum access.",
        explanation: "PR = pull request. Bus factor = knowledge concentration. Least privilege = minimal access."
      }
    },
    {
      id: "cspcoll7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A team's knowledge stays distributed when it ___",
            options: ["documents decisions and uses code review", "centralizes everything in one person's head", "uses no version control", "avoids meetings entirely"]
          },
          {
            label: "A PR description should answer ___",
            options: ["\"what changed and why\" so reviewers have context", "just \"fixed it\"", "private team gossip", "compression ratios"]
          },
          {
            label: "When AI suggests code, the team should ___",
            options: ["review it as carefully as any other change", "merge it automatically", "never use it", "paste it into more AI tools"]
          }
        ],
        correctAnswers: ["documents decisions and uses code review", "\"what changed and why\" so reviewers have context", "review it as carefully as any other change"],
        hint1: "Spread knowledge.",
        hint2: "Context = better review.",
        hint3: "Trust but verify.",
        explanation: "Docs + review distribute knowledge. Good PRs explain what + why. AI output gets human review."
      }
    },
    {
      id: "cspcoll7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- AP collaboration questions reward inclusivity, knowledge sharing, and feedback culture.
- Pair programming, code review, and version control are the three workhorses.
- Bus factor and least privilege are the two big risk-management ideas.
- Open source and crowdsourcing harness scale but require governance.
      `
    },
    {
      id: "cspcoll7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school project team is told to \"use collaboration tools\". The most AP-aligned interpretation is ___",
            options: [
              "email each member's changes around at the end of every working day.",
              "use a version-controlled repo, review each other's changes, and split work into small reviewable pieces.",
              "have one student do all the coding while the others handle non-technical tasks.",
              "share a single account whose credentials are posted in the team chat channel."
            ],
            correctAnswer: 1,
            explanation: "AP-style \"collaboration tools\" = VCS + code review + shared docs + small reviewable changes."
          },
          {
            question: "A team's only senior engineer takes vacation. Work stalls because no one else understands the deployment process. The CSP-aligned long-term fix is ___",
            options: [
              "discourage vacations so the senior engineer is always available on demand.",
              "document the deployment process and cross-train teammates to raise the bus factor.",
              "replace the senior engineer with someone less central to the deployment process.",
              "switch deployment platforms so the existing tribal knowledge no longer matters."
            ],
            correctAnswer: 1,
            explanation: "Documentation + cross-training raises the bus factor."
          }
        ]
      }
    }
  ]
};
