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
              "positive AND negative effects that fall unevenly across different stakeholder groups.",
              "only negative effects on every population that they reach in any direct or indirect way.",
              "no measurable effects at all on the populations they reach in any direct or indirect way."
            ],
            correctAnswer: 1,
            explanation: "Dual-use is the rule."
          },
          {
            question: "A \"digital divide\" refers to ___",
            options: [
              "the gap between people who write code and people who only use apps that others build",
              "unequal access to computing and connectivity, leading to unequal opportunity",
              "the difference between analog and digital media, such as print books versus e-books",
              "the split between countries that design computer chips and countries that build them"
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
| Unintended use | Innovations are often used in ways their creators did not plan. |
| Bias | Unfair outcomes from biased algorithms or biased data. |
| Digital divide | Differing access based on socioeconomic, geographic, or demographic factors. |
| Crowdsourcing / citizen science | Input from many people via the Internet / research with volunteer-contributed data. |
| Intellectual property | Material created on a computer belongs to its creator. |
| Creative Commons / open source / open access | Legal ways to share and reuse work. |
| Plagiarism | Presenting someone else's work as your own. |

## Common Pitfalls

- Listing only benefits or only harms.
- Forgetting indirect stakeholders.
- "It wasn't intentional" treated as exoneration.
- Treating algorithm output as objective truth.
- Forgetting to cite material created by someone else.
- Assuming more data will remove bias.
      `
    },
    {
      id: "cspsei7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Inequality of access to computing and connectivity is called the digital _______.

2) Research in which volunteers contribute data with their own devices is called _______ science.

3) Using someone else's work without permission and presenting it as your own is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["divide", "citizen", "plagiarism"],
        hint1: "Access gap.",
        hint2: "Ordinary citizens help.",
        hint3: "It may have legal consequences.",
        explanation: "Digital divide / citizen science / plagiarism."
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
            label: "The digital divide is affected by the actions of ___",
            options: ["individuals, organizations, and governments", "only the companies that build computers", "only students and their teachers", "no one, since access cannot change"]
          },
          {
            label: "Biases can be embedded in software development ___",
            options: ["at all levels", "only in the training data", "only in the user interface", "never, since code is neutral"]
          },
          {
            label: "Computing innovations' impacts are typically ___",
            options: ["unevenly distributed across groups", "evenly distributed across all groups", "limited to the people who build them", "identical for every user everywhere"]
          }
        ],
        correctAnswers: ["individuals, organizations, and governments", "at all levels", "unevenly distributed across groups"],
        hint1: "Many different actors.",
        hint2: "Anywhere along the way.",
        hint3: "Equity matters.",
        explanation: "Individuals, organizations, and governments all affect the digital divide; bias can enter at every level; impacts fall unevenly."
      }
    },
    {
      id: "cspsei7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Who benefits + who is harmed framing for every impact question.
- Bias is real; programmers should act to reduce it.
- Innovations get used in unintended ways; not every effect can be anticipated.
- Digital divide framing for access questions.
- Intellectual property: Creative Commons, open source, open access, citation, plagiarism.
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
              "check outputs for each group, fix the gendered defaults, and let users choose other wording.",
              "remove the app, its data, and its models from circulation rather than fix the defaults.",
              "warn users about the stereotypes but leave the gendered defaults unchanged for now."
            ],
            correctAnswer: 1,
            explanation: "Programmers should take action to reduce bias in their innovations."
          },
          {
            question: "A school district deploys an algorithm to allocate counseling resources. The MOST important guardrails are ___",
            options: [
              "no specific guardrails, on the grounds that any algorithm that ships in production has already been reviewed.",
              "clear criteria, human review of major decisions, and checks for bias across groups.",
              "keeping the criteria secret, so families cannot game the algorithm's allocation process.",
              "letting the algorithm decide alone, with no reviews, audits, or appeals, to avoid human bias."
            ],
            correctAnswer: 1,
            explanation: "Clear criteria, human review, and checking results across groups help reduce bias in important decisions."
          }
        ]
      }
    }
  ]
};
