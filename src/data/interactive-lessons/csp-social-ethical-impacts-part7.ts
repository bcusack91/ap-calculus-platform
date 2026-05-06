export const cspSocialEthicalImpactsPart7Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei7-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Social & Ethical Impacts
      `
    },
    {
      id: "cspsei7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Computing innovations typically have ___",
            options: [
              "only positive effects on every population they reach across society as a whole.",
              "both positive AND negative effects, often unevenly distributed across stakeholder groups.",
              "only negative effects on every population that they reach in any direct or indirect way.",
              "no measurable effects at all on the populations they reach in any direct or indirect way."
            ],
            correctAnswer: 1,
            explanation: "Dual-use is the rule."
          },
          {
            question: "A \"digital divide\" refers to ___",
            options: [
              "differences between popular file-compression formats used by different operating systems",
              "unequal access to computing and connectivity, which leads to unequal opportunity in society",
              "transport-layer-security version mismatches between web browsers and the servers they call",
              "differences between IPv4 and IPv6 addressing across consumer-grade home internet connections"
            ],
            correctAnswer: 1,
            explanation: "Digital divide = unequal access."
          }
        ]
      }
    },
    {
      id: "cspsei7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Beneficial / harmful effects | Both come with most innovations. |
| Stakeholders | Anyone affected, directly or indirectly. |
| Bias | Systematic outcome disparities. |
| Mis / dis / mal information | False or misleading information by intent. |
| Network effects | Value scales with users. |
| Algorithmic amplification | Optimizers boost what gets engagement. |
| Digital divide | Unequal access to computing. |
| Transparency / accountability / recourse | Three ethical-design properties. |
| Contextual integrity | Data should flow as the original context expected. |
| Open vs. closed | Modify-friendly vs. controlled platforms. |

## Common Pitfalls

- Listing only benefits or only harms.
- Forgetting indirect stakeholders.
- "It wasn't intentional" treated as exoneration.
- Treating algorithm output as objective truth.
- Ignoring environmental and labor impacts.
- Over-trusting AI / hallucinations.
      `
    },
    {
      id: "cspsei7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Inequality of access to computing and connectivity is called the digital _______.

2) The principle that data should flow consistently with original-context norms is called contextual _______.

3) AI outputs that are confident but factually wrong are called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["divide", "integrity", "hallucinations"],
        hint1: "Access gap.",
        hint2: "Norm-respecting flow.",
        hint3: "Confident-wrong AI.",
        explanation: "Digital divide / contextual integrity / hallucinations."
      }
    },
    {
      id: "cspsei7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A high-stakes algorithmic decision should provide ___",
            options: ["transparency, accountability, and recourse", "only the result", "no documentation", "no appeal"]
          },
          {
            label: "AI training-data ethics centers on ___",
            options: ["provenance, consent, attribution, and bias", "compression ratio", "TLS handshake", "IPv6 routing"]
          },
          {
            label: "Computing innovations' impacts are typically ___",
            options: ["unevenly distributed across groups", "identical for everyone", "always negligible", "always positive"]
          }
        ],
        correctAnswers: ["transparency, accountability, and recourse", "provenance, consent, attribution, and bias", "unevenly distributed across groups"],
        hint1: "Three properties.",
        hint2: "AI ethics.",
        hint3: "Equity matters.",
        explanation: "Three ethical properties, AI training ethics, unequal impact."
      }
    },
    {
      id: "cspsei7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Stakeholder + benefit + harm framing for every impact question.
- Bias is real; audit and address.
- Algorithm choices are policy choices; design transparency, accountability, and recourse in.
- Digital divide framing for access questions.
- AI raises new authorship, consent, and accuracy concerns.
      `
    },
    {
      id: "cspsei7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new translation app makes communication easier across languages but reinforces stereotypes through gendered defaults. The most CSP-aligned response is ___",
            options: [
              "ignore the stereotypes on the grounds that the underlying translation accuracy is statistically high overall.",
              "audit outputs across demographic groups, document the issue, fix gendered defaults, and offer overrides.",
              "remove the translation app entirely from circulation rather than attempt to fix the underlying defaults.",
              "compress the app's training data more aggressively so the gendered defaults will be harder to surface."
            ],
            correctAnswer: 1,
            explanation: "Audit + fix + user agency."
          },
          {
            question: "A school district deploys an algorithm to allocate counseling resources. The MOST important guardrails are ___",
            options: [
              "no specific guardrails, on the grounds that any algorithm that ships in production has already been reviewed.",
              "transparent criteria, human review of high-stakes decisions, bias audits across student groups, and an appeal path.",
              "transport-layer security on the algorithm's outbound traffic, with no other guardrails on its decision process.",
              "aggressive compression of the algorithm's training data, with no other guardrails on its decision process at all."
            ],
            correctAnswer: 1,
            explanation: "Full ethical-design framing for high-stakes algorithms."
          }
        ]
      }
    }
  ]
};
