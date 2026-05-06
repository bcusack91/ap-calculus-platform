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

Apply the dual-effect framework to scenarios — exactly the format the AP exam uses.
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
              "users will receive their news significantly faster than they previously did from non-personalized news feed apps elsewhere.",
              "users may be siloed into a filter bubble of viewpoints similar to those they have already engaged with in the past.",
              "the TCP transport-layer protocol carrying the personalized news feed will gradually slow down on residential broadband connections.",
              "the IPv6 deployment carrying the personalized news feed will stop working on residential broadband connections in many regions."
            ],
            correctAnswer: 1,
            explanation: "Personalization can narrow exposure (filter bubble) — a classic unintended effect."
          },
          {
            question: "A school district installs cameras in every hallway \"for safety\". A reasonable balanced response is ___",
            options: [
              "the newly installed hallway cameras have only beneficial effects on the school district's students, families, and staff alike.",
              "the cameras may improve incident response (benefit) but raise privacy and chilling-effect concerns (harm) and need governance about who can view footage.",
              "the newly installed hallway cameras have only harmful effects on the school district's students, families, and staff alike.",
              "no impact analysis is needed for the newly installed hallway cameras because they only run during normal school district hours."
            ],
            correctAnswer: 1,
            explanation: "A balanced AP-style answer names both effects and the governance question."
          }
        ]
      }
    },
    {
      id: "cspic6-content",
      type: 'text' as const,
      content: `
## Workshop Template

For any scenario, write four bullet points:

1. **Beneficial intended:** what the system is designed to do well.
2. **Harmful intended (if any):** ways the design itself causes harm (e.g., addictive design).
3. **Unintended beneficial:** unexpected helpful uses.
4. **Unintended harmful:** unexpected harm — the most exam-relevant.

Always name **affected populations** and the **mechanism** of impact (data, algorithm, network reach).

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
| Unintended harmful (privacy) | Location data could re-identify individuals. |
| Unintended harmful (equity) | People without smartphones are invisible. |
| Mitigations | Aggregate data, opt-in, sunset clauses, audits. |
      `
    },
    {
      id: "cspic6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A balanced AP-style impact answer should describe both _______ and harms.

2) When a system's data collection identifies individuals despite "anonymization", this is a _______ concern.

3) Naming the specific _______ population affected strengthens an impact answer.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["benefits", "privacy", "affected"],
        hint1: "Positive side.",
        hint2: "Anonymity isn't guaranteed.",
        hint3: "Be specific about WHO.",
        explanation: "Balanced answers, privacy as a key lens, and naming affected populations are AP rubric basics."
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
            label: "A \"sunset clause\" on collected data means ___",
            options: ["data is deleted after a defined period", "data is duplicated", "data is encrypted", "data is published"]
          },
          {
            label: "Aggregating data before publishing protects privacy by ___",
            options: ["removing individual-level identifiability", "making data more identifiable", "compressing it losslessly", "changing the format"]
          },
          {
            label: "A mitigation that gives users control over whether their data is used is ___",
            options: ["opt-in consent", "mandatory inclusion", "auto-publication", "no notice at all"]
          }
        ],
        correctAnswers: ["data is deleted after a defined period", "removing individual-level identifiability", "opt-in consent"],
        hint1: "Sunset = end-of-life.",
        hint2: "Aggregate ≠ individual.",
        hint3: "Opt-in respects autonomy.",
        explanation: "Sunset = scheduled deletion. Aggregation hides individuals. Opt-in is the strongest consent."
      }
    },
    {
      id: "cspic6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Workshops

- Use the four-bullet template (intended/unintended × beneficial/harmful).
- Name a specific population (low-income, rural, students, elderly, etc.).
- Name a specific mechanism (data collection, algorithmic decision, network amplification).
- Suggest at least one mitigation (consent, aggregation, transparency, audit, sunset).
- Avoid extreme answers ("only good", "only bad") — the rubric rewards balance.
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
            question: "A school deploys an AI grading assistant for essays. The strongest AP-style impact analysis would ___",
            options: [
              "praise the AI grading assistant as a substantial time-saver for classroom teachers and stop the impact analysis there.",
              "note efficiency benefits AND risks of bias against non-standard writing styles AND propose human review of borderline grades.",
              "criticize the AI grading assistant as fundamentally unfit for any classroom essay-grading purpose without offering any concrete benefits.",
              "argue at length that computers in any form are intrinsically incapable of grading written student essays meaningfully or accurately."
            ],
            correctAnswer: 1,
            explanation: "Balanced: benefits + biases + concrete mitigation (human review)."
          },
          {
            question: "A city offers free public Wi-Fi in parks. A complete AP-style impact analysis would mention ___",
            options: [
              "only the access benefit that the new free public Wi-Fi service provides for residents and park visitors in the city.",
              "access benefits, plus that traffic on open Wi-Fi is exposed to eavesdropping unless users use HTTPS or a VPN, plus equity benefits for those without home internet.",
              "only the security harm that traffic on the new free public Wi-Fi may be exposed to eavesdropping by other users on the same open wireless network.",
              "only the equity harm that the new free public Wi-Fi service is unavailable to city residents who never visit any of the public parks."
            ],
            correctAnswer: 1,
            explanation: "A complete answer names the equity benefit AND the security caveat."
          }
        ]
      }
    }
  ]
};
