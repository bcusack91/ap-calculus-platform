export const cspCollaborationDevelopmentPart6Data = {
  topicSlug: "csp-collaboration-development",
  sections: [
    {
      id: "cspcoll6-intro",
      type: 'text' as const,
      content: `
# 🤝 Collaboration in Development

**Part 6 of 7 — Problem-Solving Workshop**

---

## Collaboration Workshop

Apply collaboration vocabulary to scenarios.
      `
    },
    {
      id: "cspcoll6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team has weekly meetings where one person dominates. The most appropriate adjustment is ___",
            options: [
              "cancel all team meetings and rely entirely on private messaging instead.",
              "use facilitated turn-taking, written agendas, and silent brainstorming to elevate quieter voices.",
              "remove the dominant person from the team to restore balance in discussions.",
              "reduce meeting time so the dominant person has less opportunity to speak."
            ],
            correctAnswer: 1,
            explanation: "Facilitation + async patterns elevate quieter voices."
          },
          {
            question: "A code review is taking 2 weeks because the PR is huge. The best fix is ___",
            options: [
              "skip the review entirely so the team can move on to the next change.",
              "split the PR into smaller focused changes that can each be reviewed quickly.",
              "approve the PR with a quick \"looks good\" without reading the diff carefully.",
              "rewrite the PR in a different programming language to make it shorter."
            ],
            correctAnswer: 1,
            explanation: "Small PRs get fast, useful review."
          }
        ]
      }
    },
    {
      id: "cspcoll6-content",
      type: 'text' as const,
      content: `
## Worked: Sizing A Pull Request

| PR size | Likely review experience |
|---------|-------------------------|
| < 50 lines | Reviewed in minutes. Specific feedback. |
| 200 lines | Manageable. Some context-loading. |
| 1000+ lines | "LGTM" with little real review. |
| 10,000 lines | Effectively unreviewable. |

## Worked: Onboarding A New Teammate

Day 1: setup environment, read README + contribution guide.
Week 1: shadow a teammate; review small PRs.
Week 2: pick a "first issue"; pair with mentor; submit a tiny PR.
Month 1: handle a small feature end-to-end with code review.
      `
    },
    {
      id: "cspcoll6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Sharing the agenda before a meeting helps people _______ in advance.

2) A pull request with a small number of changed lines tends to receive _______ review feedback.

3) A new teammate's first task should be _______ in scope, not a major feature.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["prepare", "better", "small"],
        hint1: "Reading time.",
        hint2: "Quality of feedback.",
        hint3: "Build confidence.",
        explanation: "Pre-shared agendas help preparation. Small PRs get better review. Small first tasks build confidence."
      }
    },
    {
      id: "cspcoll6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A \"first issue\" labeled in a project is for ___",
            options: ["new contributors to find an approachable starting task", "closing the project", "archiving old code", "compressing data"]
          },
          {
            label: "Silent brainstorming primarily helps ___",
            options: ["quieter teammates contribute on equal footing with louder ones", "remove all discussion", "accelerate typing speed", "compress files"]
          },
          {
            label: "A 5,000-line PR most likely gets ___",
            options: ["superficial review", "rigorous line-by-line review", "no review at all", "rejected for size only"]
          }
        ],
        correctAnswers: ["new contributors to find an approachable starting task", "quieter teammates contribute on equal footing with louder ones", "superficial review"],
        hint1: "Onboarding-friendly.",
        hint2: "Equalizes voices.",
        hint3: "Too big = skim.",
        explanation: "\"First issue\" = friendly starter. Silent brainstorm = inclusion. Huge PRs = surface-level review."
      }
    },
    {
      id: "cspcoll6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop Style

- "Inclusive collaboration" = facilitation + async records + small PRs + onboarding paths.
- "What should the team change?" → smaller PRs, written records, more inclusive meeting practices.
      `
    },
    {
      id: "cspcoll6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team merges all changes directly to main with no review. They suffer frequent regressions. The single highest-leverage change is ___",
            options: [
              "stop writing automated tests so the team can move faster overall.",
              "require pull-request review on every change before it is merged to main.",
              "remove the staging environment and ship directly to production every time.",
              "merge changes only on Fridays so all regressions surface on the same day."
            ],
            correctAnswer: 1,
            explanation: "Mandatory code review catches regressions."
          },
          {
            question: "A class project group has skills imbalances: one student knows the language, three are beginners. The most CSP-aligned approach is ___",
            options: [
              "have the experienced student write all the code while the others observe.",
              "use pair programming and code review so beginners learn while contributing real code.",
              "restrict the beginners to writing only documentation and never any code.",
              "have the beginners hand-copy code that the experienced student wrote first."
            ],
            correctAnswer: 1,
            explanation: "Pair + review spreads skill while everyone contributes."
          }
        ]
      }
    }
  ]
};
