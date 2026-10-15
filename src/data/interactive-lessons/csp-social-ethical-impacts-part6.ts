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

## Worked: Checking a System for Bias

Programmers should take action to reduce bias in the algorithms they write. One way to check:

1. Decide what "working well" means (for example, how often the system is wrong).
2. Measure it separately for each group of people the system affects.
3. If one group fares much worse, look at the data and the algorithm for the cause.
4. Fix the data or design, then check again.

## Worked: Questions to Ask About a New Innovation

| Question | Why it matters |
|---------|----------------|
| Who benefits, and who could be harmed? | One effect can be beneficial to some people and harmful to others. |
| Who might be left out? | The digital divide affects groups and individuals. |
| Does the data represent everyone affected? | Biased data lead to biased results. |
| How could it be used in ways nobody intended? | Not every effect can be anticipated in advance. |
      `
    },
    {
      id: "cspsei6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A single effect of an innovation can be viewed as both beneficial and harmful by different _______.

2) Differing access to computing devices and the Internet is called the digital _______.

3) Computing innovations can reflect existing human biases through their algorithms or their _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["people", "divide", "data"],
        hint1: "Or even by the same person.",
        hint2: "An access gap.",
        hint3: "What the innovation learns from.",
        explanation: "One effect can help some people and harm others. Unequal access is the digital divide. Bias comes from algorithms or data."
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
            label: "Programmers who find that their algorithm treats one group unfairly should ___",
            options: ["take action to reduce the bias", "ignore it if it was not intended", "hide the results from users", "collect more of the same data"]
          },
          {
            label: "A check for bias in a system should report ___",
            options: ["error rates broken down by relevant groups", "overall accuracy averaged across all users", "the developers' stated intentions for the model", "total error rate only, with no group breakdown"]
          },
          {
            label: "Stakeholder analysis explicitly includes ___",
            options: ["vulnerable populations who may be hardest hit", "only paying customers who generate revenue", "only the developers who designed the system", "only the managers who approve the project"]
          }
        ],
        correctAnswers: ["take action to reduce the bias", "error rates broken down by relevant groups", "vulnerable populations who may be hardest hit"],
        hint1: "Responsible programmers act.",
        hint2: "Results for each group.",
        hint3: "Inclusive list.",
        explanation: "Programmers should act to reduce bias, results should be checked group by group, and the groups most at risk should be considered."
      }
    },
    {
      id: "cspsei6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Ask who benefits, who is harmed, and who is left out (including vulnerable populations).
- Check for bias by measuring results for each group, not just overall.
- Programmers should act to reduce bias; collecting more of the same biased data does not fix it.
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
              "check pass rates for each group, document the criteria, and let humans review decisions.",
              "hide the criteria, scores, and cutoffs from candidates so that no one can tailor resumes to them.",
              "train the screener on more past hires so that its decisions match previous managers."
            ],
            correctAnswer: 1,
            explanation: "Checking results by group and allowing human review are ways programmers can act to reduce bias."
          },
          {
            question: "A volunteer crowdsources a community map. The most CSP-aligned guardrail against vandalism is ___",
            options: [
              "no guardrail at all, on the grounds that volunteer contributors will self-police one another's edits.",
              "clear rules, trusted moderators, and a history of changes so bad edits can be undone.",
              "require each contributor to pay a small fee, since paid edits are never vandalized.",
              "lock the map after its first version, so no one can edit, correct, or update it later."
            ],
            correctAnswer: 1,
            explanation: "Crowdsourcing works best when contributions can be reviewed and corrected."
          }
        ]
      }
    }
  ]
};
