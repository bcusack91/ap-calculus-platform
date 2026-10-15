export const cspSocialEthicalImpactsPart4Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei4-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 4 of 7 — Connections & Interactions**

---

## Social & Ethical Impact Connects Everywhere

| Connection | Why |
|-----------|-----|
| Impact ↔ Data | What data we collect shapes what we can do. |
| Impact ↔ Algorithms | Algorithm choices encode policy. |
| Impact ↔ Networks | Connectivity drives access (and divide). |
| Impact ↔ Security | Breaches = real human harm. |
      `
    },
    {
      id: "cspsei4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A predictive-policing model trained on historic arrest data may ___",
            options: [
              "perfectly predict every future criminal incident across every neighborhood it is deployed in.",
              "repeat past biases in policing patterns, harming the same communities again.",
              "eliminate every form of bias automatically by virtue of being a statistical machine-learning model.",
              "shift policing evenly to every neighborhood, regardless of where arrests occurred before."
            ],
            correctAnswer: 1,
            explanation: "\"Bias laundering\" — historical patterns replicated as objective predictions."
          },
          {
            question: "A region without high-speed Internet ___",
            options: [
              "has no measurable impact on the residents' daily access to opportunities and public services.",
              "faces limited access to telehealth, online education, and many jobs that need a fast connection.",
              "gains better privacy, fewer scams, and less screen time with no real downside to residents.",
              "can rely on mobile data alone, since phones now offer the same access as home broadband."
            ],
            correctAnswer: 1,
            explanation: "Connectivity = access to opportunity."
          }
        ]
      }
    },
    {
      id: "cspsei4-content",
      type: 'text' as const,
      content: `
## Algorithm Choices Are Policy Choices

When a credit-score, hiring, or healthcare-triage algorithm is deployed, its rules become policy. CSP frames this as a design and accountability concern:

- **Transparency**: can outsiders audit the system?
- **Accountability**: who is responsible for harms?
- **Recourse**: can affected people appeal?

## Intellectual Property And Creative Commons

| License | Effect |
|---------|--------|
| Public domain | No restrictions. |
| Creative Commons (CC-BY) | Reuse with attribution. |
| Open source (MIT, GPL) | Reuse under license terms. |
| Proprietary | All rights reserved. |

CSP-aligned thinking: respect creators' intent, give credit, understand what AI training and remix imply.

## Privacy Expectations

Different cultures, populations, and contexts have different expectations. A "public" post in a small-town context becomes very different when amplified globally. **Contextual integrity** is the CSP framing: data should flow in ways consistent with the original context's norms.
      `
    },
    {
      id: "cspsei4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A property of a system that lets outsiders examine how it works is called _______.

2) A property that allows affected users to appeal a decision is called _______.

3) A privacy framework that asks whether data flows match the original context's norms is called contextual _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["transparency", "recourse", "integrity"],
        hint1: "Visibility.",
        hint2: "Appeal mechanism.",
        hint3: "Context-aware.",
        explanation: "Transparency / recourse / contextual integrity."
      }
    },
    {
      id: "cspsei4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A hiring algorithm that disproportionately rejects qualified candidates from a group is ___",
            options: ["exhibiting bias that needs investigation, regardless of intent", "unbiased, as long as the developers never intended any group to be harmed", "acceptable, because an algorithm is objective and cannot hold any bias of its own", "fair, since the identical code is applied to every single applicant who submits"]
          },
          {
            label: "Reusing a CC-BY image requires ___",
            options: ["attribution to the creator under the license terms", "payment to the creator under the license terms", "written permission from the creator for each use", "no acknowledgment, since CC-BY works are public domain"]
          },
          {
            label: "Privacy expectations vary by ___",
            options: ["context, culture, and population", "nothing — identical everywhere", "device, browser, and OS", "file size and format only"]
          }
        ],
        correctAnswers: ["exhibiting bias that needs investigation, regardless of intent", "attribution to the creator under the license terms", "context, culture, and population"],
        hint1: "Outcome bias.",
        hint2: "Attribution.",
        hint3: "Context matters.",
        explanation: "Outcome bias matters; attribution required; context-dependent privacy."
      }
    },
    {
      id: "cspsei4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Impact

- Algorithm + data choices encode policy.
- Transparency, accountability, recourse for high-stakes systems.
- Respect creator licenses and contextual privacy norms.
      `
    },
    {
      id: "cspsei4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school deploys a predictive model to flag \"at-risk\" students. The most CSP-aligned design includes ___",
            options: [
              "fully automated decisions with no human review of any individual flag the model produces during use.",
              "human review of every flag, transparent criteria, bias audits across student groups, and appeals.",
              "no documentation, no appeals, and no audits, so that students cannot learn to game the model.",
              "no review process at all, on the grounds that the model's training data is statistically representative."
            ],
            correctAnswer: 1,
            explanation: "Transparency + accountability + recourse + bias audits = ethical deployment."
          },
          {
            question: "A user remixes a CC-BY song without attribution and posts it. The most CSP-aligned framing is ___",
            options: [
              "no measurable concern, since the user has remixed the song into something that sounds different.",
              "CC-BY requires crediting the original creator, so posting the remix without credit breaks the license.",
              "CC-BY only forbids selling the song, so posting a free remix without credit is allowed.",
              "remixing creates a new work, so the original license no longer applies to the remix."
            ],
            correctAnswer: 1,
            explanation: "CC-BY = attribution required."
          }
        ]
      }
    }
  ]
};
