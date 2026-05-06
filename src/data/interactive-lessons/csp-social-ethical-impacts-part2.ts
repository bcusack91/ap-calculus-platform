export const cspSocialEthicalImpactsPart2Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei2-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 2 of 7 — Key Processes**

---

## Computing Reshapes Society

Every major innovation has social, economic, and ethical impacts — often unevenly distributed.

| Domain | Example impact |
|--------|---------------|
| Communication | Global messaging in seconds. |
| Work | Remote jobs; automation displacement. |
| Education | Online learning at scale. |
| Health | Telemedicine, fitness tracking. |
| Civic life | Online voting info, activism. |
| Privacy | Data collection at unprecedented scale. |

The same technology can enable opportunity AND harm. Both happen at once.
      `
    },
    {
      id: "cspsei2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new app helps users connect AND enables harassment. The most accurate framing is ___",
            options: [
              "it has only positive effects on the people who choose to use the app to connect with each other.",
              "computing innovations typically have BOTH beneficial and harmful effects, often for different groups.",
              "it has only negative effects on every population that ends up exposed to the app indirectly.",
              "its effects on people are essentially random and cannot be evaluated systematically in advance."
            ],
            correctAnswer: 1,
            explanation: "Dual-use is the norm."
          },
          {
            question: "When evaluating a new technology, the most rigorous approach is ___",
            options: [
              "consider only the technology's intended use case as described by the original designers.",
              "consider intended use, foreseeable misuse, and unintended consequences for different stakeholders.",
              "consider only the public statements and press releases that the technology's makers issue.",
              "consider only the marketing material the technology's makers prepare for general consumers."
            ],
            correctAnswer: 1,
            explanation: "Holistic stakeholder analysis."
          }
        ]
      }
    },
    {
      id: "cspsei2-content",
      type: 'text' as const,
      content: `
## Beneficial vs. Harmful — A Useful Lens

| Beneficial | Harmful |
|-----------|---------|
| Access to information | Misinformation spreads fast |
| New careers | Old jobs displaced |
| Inclusion (assistive tech) | New divides (digital, broadband) |
| Civic participation | Online harassment, manipulation |
| Lifesaving medicine | Surveillance, breach |

## Stakeholder Thinking

For any technology, list:

- Direct users.
- People affected indirectly (gig workers, local businesses).
- Vulnerable populations (children, those with disabilities, marginalized groups).
- Future generations (data retained forever).

## Bias In Computing Systems

| Source | Result |
|--------|--------|
| Biased training data | Biased ML predictions. |
| Biased design assumptions | Excludes some users. |
| Biased deployment | Disproportionate harm to certain groups. |

Bias is rarely intentional but always real. The CSP-aligned response is to test for it explicitly across populations.
      `
    },
    {
      id: "cspsei2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When evaluating a new technology you should consider both _______ and harmful effects.

2) People affected by a technology, even indirectly, are called _______.

3) A system whose outcomes systematically disadvantage some groups exhibits _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["beneficial", "stakeholders", "bias"],
        hint1: "Positive side.",
        hint2: "Affected parties.",
        hint3: "Unequal outcomes.",
        explanation: "Beneficial / stakeholders / bias are core CSP impact vocabulary."
      }
    },
    {
      id: "cspsei2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A new technology typically ___",
            options: ["has both beneficial and harmful effects, often for different groups", "has only positive effects", "has only negative effects", "has no measurable effects"]
          },
          {
            label: "A facial-recognition system that performs much worse on dark-skinned faces demonstrates ___",
            options: ["bias often rooted in training-data composition", "random errors only", "a TLS issue", "a compression issue"]
          },
          {
            label: "Vulnerable populations include ___",
            options: ["children, people with disabilities, marginalized groups, and others", "no one in particular", "only adults", "only English speakers"]
          }
        ],
        correctAnswers: ["has both beneficial and harmful effects, often for different groups", "bias often rooted in training-data composition", "children, people with disabilities, marginalized groups, and others"],
        hint1: "Dual nature.",
        hint2: "Data-driven bias.",
        hint3: "Thoughtful inclusion.",
        explanation: "Dual nature, training-data bias, broad vulnerable populations."
      }
    },
    {
      id: "cspsei2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Social & Ethical Basics

- Always consider BOTH beneficial and harmful effects.
- List stakeholders explicitly.
- Bias is real and testable.
- "It wasn't intentional" doesn't neutralize harm.
      `
    },
    {
      id: "cspsei2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school adopts facial-recognition attendance. The most CSP-aligned analysis is ___",
            options: [
              "only the convenience of how much faster student attendance can be recorded each morning.",
              "weigh benefits against bias risks, surveillance impact, data retention, consent, and alternatives.",
              "only the transport-layer security implications of the camera traffic between the cameras and server.",
              "only the storage compression ratio of recorded attendance data over a typical academic year."
            ],
            correctAnswer: 1,
            explanation: "Stakeholder + bias + privacy + alternatives = full analysis."
          },
          {
            question: "A gig-economy app benefits riders and consumers but precarious workers face inconsistent income. The most accurate framing is ___",
            options: [
              "the app is purely beneficial to every party that interacts with it through the gig-economy model.",
              "computing reshapes work — benefits and harms are unevenly distributed across stakeholder groups.",
              "the app has no measurable impact on the precarious workers who fulfill the gig-economy requests.",
              "the app raises only a transport-layer-security issue between worker devices and the central server."
            ],
            correctAnswer: 1,
            explanation: "Uneven impact across stakeholder groups."
          }
        ]
      }
    }
  ]
};
