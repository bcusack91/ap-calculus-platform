export const cspImpactOfComputingPart6Data = {
  topicSlug: "csp-impact-of-computing",
  sections: [
    {
      id: "cspic6-intro",
      type: 'text' as const,
      content: `
# 🌍 Impact of Computing

**Part 6 of 7 — Problem-Solving Workshop**

---

## Impact Of Computing Workshop

Apply the dual-effect framework to scenarios — the kind of scenario the AP exam's multiple-choice impact questions use.
      `
    },
    {
      id: "cspic6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new app shows a personalized news feed. The most likely UNINTENDED harmful effect is ___",
            options: [
              "users will receive their news significantly faster than they did from non-personalized feeds.",
              "users may end up seeing mostly views they already agree with.",
              "users will see more news sources than before, since personalized feeds draw from more outlets.",
              "the app will stop working for users who have not yet set any personal content preferences."
            ],
            correctAnswer: 1,
            explanation: "Personalization can narrow what users see — a classic unintended effect."
          },
          {
            question: "A school district installs cameras in every hallway \"for safety\". A reasonable balanced response is ___",
            options: [
              "the cameras only benefit students and staff, since anyone behaving well has nothing to hide.",
              "cameras may speed up handling of incidents but raise privacy concerns, so rules on viewing footage are needed.",
              "the cameras only harm students, since being recorded never improves safety in a school.",
              "no analysis is needed, since the cameras record hallways only during normal school hours."
            ],
            correctAnswer: 1,
            explanation: "A balanced impact analysis names both effects and the governance question."
          }
        ]
      }
    },
    {
      id: "cspic6-content",
      type: 'text' as const,
      content: `
## Workshop Checklist

Impact is tested with multiple-choice questions only. Before you choose an answer, sort the scenario's effects into four boxes:

1. **Beneficial intended:** what the system is designed to do well.
2. **Harmful intended (if any):** ways the design itself causes harm (e.g., addictive design).
3. **Unintended beneficial:** unexpected helpful uses.
4. **Unintended harmful:** unexpected harm — the most exam-relevant.

Then pick the choice that matches the right box and names the **affected group** and the **mechanism** (data, algorithm, network reach).

## Worked Scenario: Smart Doorbell

| Lens | Note |
|------|------|
| Beneficial intended | Owner sees who's at the door; can deter porch theft. |
| Unintended beneficial | Footage helps police solve crimes. |
| Unintended harmful (privacy) | Continuous video of neighbors and passersby; many cameras feed into one company's database. |
| Unintended harmful (bias) | Recommended-watch features may flag certain demographics more often. |
| Governance question | Who can request footage? Police without a warrant? |

## Worked Scenario: Public-Health Tracker

| Lens | Note |
|------|------|
| Beneficial intended | Identify outbreak hotspots; allocate resources. |
| Unintended beneficial | Data informs urban planning beyond health. |
| Unintended harmful (privacy) | Location data could be combined with other data to identify individuals. |
| Unintended harmful (equity) | People without smartphones are invisible. |
| Mitigations | Publish only group totals, ask permission first, delete data that is no longer needed. |
      `
    },
    {
      id: "cspic6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A balanced impact analysis should describe both _______ and harms.

2) When a system's data collection identifies individuals despite "anonymization", this is a _______ concern.

3) A single effect of a computing innovation can be viewed as both beneficial and _______ by different people.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["benefits", "privacy", "harmful"],
        hint1: "Positive side.",
        hint2: "Anonymity isn't guaranteed.",
        hint3: "The opposite of beneficial.",
        explanation: "Balanced analysis, privacy as a key lens, and the fact that one effect can help some people and hurt others are the basics of impact questions."
      }
    },
    {
      id: "cspic6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Once information is placed online, it is ___",
            options: ["difficult to delete", "deleted after a year", "visible only to its author", "impossible to copy"]
          },
          {
            label: "Aggregating data before publishing protects privacy by ___",
            options: ["removing individual-level identifiability", "encrypting each individual-level record", "adding individual-level detail to records", "publishing every individual's raw record"]
          },
          {
            label: "A mitigation that gives users control over whether their data is used is ___",
            options: ["opt-in consent", "mandatory inclusion", "auto-publication", "no notice at all"]
          }
        ],
        correctAnswers: ["difficult to delete", "removing individual-level identifiability", "opt-in consent"],
        hint1: "Copies can be forwarded and saved.",
        hint2: "Aggregate ≠ individual.",
        hint3: "Opt-in respects autonomy.",
        explanation: "Online information is hard to remove. Aggregation hides individuals. Opt-in gives users control over their data."
      }
    },
    {
      id: "cspic6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Workshops

- Sort effects into the four boxes (intended/unintended × beneficial/harmful) before reading the choices.
- Prefer choices that name a specific population (low-income, rural, students, elderly, etc.).
- Prefer choices that name a specific mechanism (data collection, algorithmic decision, network amplification).
- For "how could this harm be reduced?" questions, look for consent, aggregation, transparency, or human review.
- Avoid extreme answer choices ("only good", "only bad") — the correct choice is usually the balanced one.
      `
    },
    {
      id: "cspic6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school deploys an AI grading assistant for essays. Which statement best describes its likely impact?",
            options: [
              "It saves teachers time, and that benefit is the only effect worth considering.",
              "It saves time but may be biased against some writing, so humans should check close calls.",
              "It is unfit for any classroom use, since it offers teachers no benefit of any kind.",
              "Computers can never grade written work, so the tool will have no effect on grades."
            ],
            correctAnswer: 1,
            explanation: "Balanced: benefits + biases + concrete mitigation (human review)."
          },
          {
            question: "A city offers free public Wi-Fi in parks. Which statement most completely describes its effects?",
            options: [
              "It gives residents and visitors in the parks free access, and it has no drawbacks.",
              "It helps residents without home internet, but data sent on the open network can be intercepted.",
              "It creates a security risk on the open network, and it gives no one any real benefit.",
              "It only matters to residents who never visit the parks, since they cannot use it."
            ],
            correctAnswer: 1,
            explanation: "A complete answer names the equity benefit AND the security caveat."
          }
        ]
      }
    }
  ]
};
