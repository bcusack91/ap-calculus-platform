export const cspSocialEthicalImpactsPart6Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei6-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 6 of 7 — Problem-Solving Workshop**

---

## Social & Ethical Impact Workshop
      `
    },
    {
      id: "cspsei6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new app helps the deaf community communicate AND collects voice samples for training. The most CSP-aligned framing is ___",
            options: [
              "only the benefit to deaf users, with no further consideration of how voice samples are reused.",
              "weigh the benefits to deaf users against privacy and consent for the collected voice samples.",
              "only the implementation cost of building the underlying voice-sample collection and training pipeline.",
              "only the accuracy of the speech recognition, since that decides whether the app helps."
            ],
            correctAnswer: 1,
            explanation: "Stakeholder + privacy + consent analysis."
          },
          {
            question: "A \"neutral\" app exposes a digital divide because some students lack home internet. The most CSP-aligned response is ___",
            options: [
              "ignore the divide on the grounds that home connectivity is the family's responsibility, not the school's.",
              "provide hotspots or library access, and check that the app still works on slow connections.",
              "require every student to buy a home internet plan before the app becomes part of grading.",
              "drop the app entirely, since any technology that some students lack must never be used."
            ],
            correctAnswer: 1,
            explanation: "Alternative access + design-time consideration."
          }
        ]
      }
    },
    {
      id: "cspsei6-content",
      type: 'text' as const,
      content: `
## Worked: Stakeholder Analysis Of A New Tool

| Stakeholder | Benefit | Risk |
|------------|---------|------|
| End users | Faster task completion | Data collected |
| Workers | New roles | Displacement of older roles |
| Vulnerable groups | Possibly better access | Possibly worse if poorly designed |
| Society | Productivity gains | Concentration of power |

## Worked: Bias Audit Sketch

1. Define metric (accuracy, error rate, false-positive rate).
2. Compute the metric across demographic groups.
3. Investigate and report disparities.
4. Iterate design / data; re-test.
5. Document the audit process.

## Worked: Responsible AI Use

| Question | Why it matters |
|---------|----------------|
| Where did training data come from? | Provenance & consent. |
| Who is over / under represented? | Bias risk. |
| What can go wrong if the model is wrong? | Stakes. |
| Is there human review? | Accountability. |
| Is there recourse for affected users? | Justice. |
      `
    },
    {
      id: "cspsei6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A formal exercise to measure bias across demographic groups is called a bias _______.

2) Identifying everyone who might be affected by a system is called a _______ analysis.

3) A way for affected users to appeal a system's decision is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["audit", "stakeholder", "recourse"],
        hint1: "Measure + report.",
        hint2: "Affected parties.",
        hint3: "Appeal mechanism.",
        explanation: "Bias audit, stakeholder analysis, recourse."
      }
    },
    {
      id: "cspsei6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A school deploying an automated scheduling tool should also ___",
            options: ["offer humans a way to override and appeal", "lock every decision in permanently after release", "hide how the tool reaches its decisions from staff", "let the tool's output replace all human review"]
          },
          {
            label: "A bias audit reports ___",
            options: ["error rates broken down by relevant groups", "overall accuracy averaged across all users", "the developers' stated intentions for the model", "total error rate only, with no group breakdown"]
          },
          {
            label: "Stakeholder analysis explicitly includes ___",
            options: ["vulnerable populations who may be hardest hit", "only paying customers who generate revenue", "only the developers who designed the system", "only the managers who approve the project"]
          }
        ],
        correctAnswers: ["offer humans a way to override and appeal", "error rates broken down by relevant groups", "vulnerable populations who may be hardest hit"],
        hint1: "Recourse.",
        hint2: "Disaggregated metrics.",
        hint3: "Inclusive list.",
        explanation: "Override + recourse, group-level metrics, inclusive stakeholder lists."
      }
    },
    {
      id: "cspsei6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Always do stakeholder analysis (including vulnerable populations).
- Bias audits: report metrics by group, not just overall.
- Build in human override + recourse for high-stakes decisions.
      `
    },
    {
      id: "cspsei6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team launches a hiring screener. The most CSP-aligned ethical guard is ___",
            options: [
              "no formal guard at all, on the grounds that the screener's training data is statistically representative.",
              "audit pass rates by demographic group, document criteria, and allow human review and appeals.",
              "hide the criteria, scores, and cutoffs from candidates so that no one can tailor resumes to them.",
              "train the screener on more past hires so that its decisions match previous managers."
            ],
            correctAnswer: 1,
            explanation: "Audit + transparency + review + appeal."
          },
          {
            question: "A volunteer crowdsources a community map. The most CSP-aligned guardrail against vandalism is ___",
            options: [
              "no guardrail at all, on the grounds that volunteer contributors will self-police one another's edits.",
              "governance through a clear policy, trusted moderators, change history, and escalation paths.",
              "require each contributor to pay a small fee, since paid edits are never vandalized.",
              "lock the map after its first version, so no one can edit, correct, or update it later."
            ],
            correctAnswer: 1,
            explanation: "Crowdsourcing + governance."
          }
        ]
      }
    }
  ]
};
