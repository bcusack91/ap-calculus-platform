export const cspCollaborationDevelopmentPart4Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll4-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 4 of 7 — Connections & Interactions**

---

## Collaboration Connects Across The Course

| Cross-link | Why |
|-----------|-----|
| Collab ↔ Internet | Tools enable global teams. |
| Collab ↔ Algorithms | Diff / merge algorithms power version control. |
| Collab ↔ Security | Credential management and access control. |
| Collab ↔ Impact | Diverse teams build more inclusive products. |
      `
    },
    {
      id: "cspcoll4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Two developers in different countries co-edit the same file. The technology that prevents their changes from clobbering each other is ___",
            options: [
              "faster local hardware so each save completes before the other starts.",
              "a version-control system with merging (for example, Git).",
              "a real-time chat app that notifies each developer when the file is touched.",
              "a network protocol upgrade such as IPv6 that orders concurrent writes."
            ],
            correctAnswer: 1,
            explanation: "Version control merges changes; without it concurrent edits would overwrite."
          },
          {
            question: "When new contributors join a project, the most efficient way for them to get up to speed is usually ___",
            options: [
              "start coding immediately and figure things out by trial and error.",
              "read documentation, study recent PRs, then make a small contribution under review.",
              "rewrite the whole codebase in their own style to learn how it works.",
              "avoid asking the rest of the team any questions during onboarding."
            ],
            correctAnswer: 1,
            explanation: "Docs + PR history + small reviewed contribution."
          }
        ]
      }
    },
    {
      id: "cspcoll4-content",
      type: 'text' as const,
      content: `
## Tools That Make Collaboration Possible

| Tool | Purpose |
|------|---------|
| Git / GitHub | Version control + PRs + issue tracking. |
| Chat (Slack, Discord) | Async + real-time team communication. |
| Video conferencing | Sync conversation, demos, pair programming. |
| Docs (wikis, Notion) | Long-lived shared knowledge. |
| Issue trackers | Plan and triage work. |

## Permissions And Access

Collaboration introduces access decisions:

- Who can read / write / merge / deploy / delete?

Principle: grant the **least privilege** needed. Review access regularly. Revoke when teammates leave.
      `
    },
    {
      id: "cspcoll4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A version-control system that powers most modern open-source collaboration is _______.

2) The principle of granting only the access a teammate actually needs is called _______ privilege.

3) A real-time document editor that merges concurrent edits enables _______ editing.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["Git", "least", "concurrent"],
        hint1: "Three letters.",
        hint2: "Minimum access.",
        hint3: "Many at once.",
        explanation: "Git = dominant VCS. Least privilege = security best practice. Concurrent editing supports many simultaneously."
      }
    },
    {
      id: "cspcoll4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "When a teammate leaves the team, their access should be ___",
            options: ["revoked immediately", "left in place forever", "expanded", "shared with strangers"]
          },
          {
            label: "A version-control merge conflict happens when ___",
            options: ["two people edited the same lines in different ways", "the network is down", "a file was renamed", "the program won't compile"]
          },
          {
            label: "A team that loses internet access ___",
            options: ["can still work locally with Git, then sync later", "cannot do any work at all", "must use only encryption", "must use only UDP"]
          }
        ],
        correctAnswers: ["revoked immediately", "two people edited the same lines in different ways", "can still work locally with Git, then sync later"],
        hint1: "Stale access = risk.",
        hint2: "Same lines, different edits.",
        hint3: "Git is distributed.",
        explanation: "Revoke departing teammates' access. Conflicts = same lines edited. Git allows offline work."
      }
    },
    {
      id: "cspcoll4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Collaboration Tools

- "Two people edit the same file" → version control with merging.
- "Teammate leaves" → revoke access, rotate credentials.
- "Distributed team" → async written communication + version control + occasional sync calls.
      `
    },
    {
      id: "cspcoll4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team uses a shared admin account where everyone knows the password. The biggest CSP-aligned concerns are ___",
            options: [
              "shared admin accounts are convenient and have no real downside.",
              "no audit trail of who did what and revocation requires resetting the password for everyone.",
              "the password is too long for everyone on the team to remember accurately.",
              "shared accounts force the team to use slower transport-layer protocols."
            ],
            correctAnswer: 1,
            explanation: "Shared accounts break least privilege and audit trails."
          },
          {
            question: "A junior developer makes their first PR with a small bug. A healthy team response is ___",
            options: [
              "publicly call out the developer in chat so others avoid the same mistake.",
              "leave constructive review comments, suggest a fix, and approve once corrected.",
              "silently revert the commits without explaining what was wrong with them.",
              "block the developer from submitting any further pull requests this quarter."
            ],
            correctAnswer: 1,
            explanation: "Constructive code review centers the work."
          }
        ]
      }
    }
  ]
};
