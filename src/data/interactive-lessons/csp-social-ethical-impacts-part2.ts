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
              "the app can bring some people together and expose others to harm at the same time.",
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
              "consider intended use, foreseeable misuse, and unintended effects on different stakeholders.",
              "consider only the price, speed, and features listed in the makers' press releases.",
              "consider only the opinions of early adopters who chose to try the technology first."
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
            options: ["has both beneficial and harmful effects, often for different groups", "has only beneficial effects, shared equally by all groups", "has only harmful effects, falling equally on all groups", "has effects that are fully predictable before release"]
          },
          {
            label: "A facial-recognition system that performs much worse on dark-skinned faces demonstrates ___",
            options: ["bias often rooted in training-data composition", "a privacy breach rooted in leaked face data", "fault tolerance rooted in redundant servers", "the digital divide rooted in internet access gaps"]
          },
          {
            label: "Vulnerable populations include ___",
            options: ["children, people with disabilities, marginalized groups, and others", "only paying customers, investors, and company shareholders", "only the engineers, designers, and testers who built it", "only adults, English speakers, and frequent Internet users"]
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
              "weigh the benefits against bias, privacy, consent, and data-retention risks.",
              "only whether the cameras, software, and storage fit within the school's yearly budget.",
              "only the accuracy rate, since a system that works well on average is fair to everyone."
            ],
            correctAnswer: 1,
            explanation: "Stakeholder + bias + privacy + alternatives = full analysis."
          },
          {
            question: "A gig-economy app benefits riders and consumers but precarious workers face inconsistent income. The most accurate framing is ___",
            options: [
              "the app is purely beneficial to every party that interacts with it through the gig-economy model.",
              "computing reshapes work, and its benefits and harms are spread unevenly across stakeholder groups.",
              "the app has no measurable impact on the precarious workers who fulfill the gig-economy requests.",
              "the workers' unstable income comes from rider demand alone and has nothing to do with the app."
            ],
            correctAnswer: 1,
            explanation: "Uneven impact across stakeholder groups."
          }
        ]
      }
    }
  ]
};
