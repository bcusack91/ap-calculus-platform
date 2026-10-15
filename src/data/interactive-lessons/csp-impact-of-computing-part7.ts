export const cspImpactOfComputingPart7Data = {
  topicSlug: "csp-impact-of-computing",
  sections: [
    {
      id: "cspic7-intro",
      type: 'text' as const,
      content: `
# 🌍 Impact of Computing

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Impact Of Computing

The framings most likely to appear on the AP exam.
      `
    },
    {
      id: "cspic7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "On an AP impact-of-computing question, the best answer choice usually ___",
            options: [
              "names only one beneficial effect of the technology and no affected group.",
              "names only one harmful effect of the technology and no affected group.",
              "accounts for a benefit and a harm and says who is affected by each.",
              "avoids naming any effect and offers only abstract general statements."
            ],
            correctAnswer: 2,
            explanation: "A single effect can be viewed as both beneficial and harmful by different people, so the best choice accounts for both and identifies who is affected."
          },
          {
            question: "The phrase \"the digital divide\" describes ___",
            options: [
              "the gap between people who build software and people who only use apps and websites made by others.",
              "unequal access to computers and the internet between groups such as rural and urban households.",
              "the split between countries that make computer hardware and countries that write the software for it.",
              "the difference between analog and digital media, such as film cameras versus digital cameras."
            ],
            correctAnswer: 1,
            explanation: "Digital divide = unequal access."
          }
        ]
      }
    },
    {
      id: "cspic7-content",
      type: 'text' as const,
      content: `
## Final Vocabulary

| Term | Definition |
|------|-----------|
| Digital divide | Gap in meaningful access to digital tech. |
| PII | Personally Identifiable Information. |
| Algorithmic bias | Systematic skew in algorithmic outputs, from biased algorithms or biased data. |
| Crowdsourcing | Obtaining input or information from many people via the Internet. |
| Citizen science | Research done partly by volunteers who contribute data with their own devices. |
| Intellectual property | Material created on a computer belongs to its creator or an organization. |
| Creative Commons / open source / open access | Legal ways to share and reuse others' work. |
| Plagiarism | Using someone else's work without permission and presenting it as your own. |

## Common Pitfalls

- "It's just a tool — neutral." Tools have consequences shaped by who builds and deploys them.
- "Anonymous data is safe." Combined with other data, it can often identify people.
- "If it's legal, it's fine." Legality and ethics differ.
- "Automation just kills jobs." It changes job mix; some new jobs are created, others disappear, distribution shifts.
- "More data is always better." Collected data is also collected risk.

## How To Answer Impact Questions

Impact of computing is tested with multiple-choice questions only.

1. Identify the technology and its intended purpose.
2. Look for the beneficial effect and WHO benefits.
3. Look for the harmful effect (often unintended) and WHO is harmed.
4. Check the **mechanism** (data, algorithm, network reach).
5. Eliminate extreme choices ("only good", "only bad", "no effect").
      `
    },
    {
      id: "cspic7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A strong AP impact answer names both a benefit and a _______.

2) PII stands for Personally _______ Information.

3) Obtaining input or information from a large number of people via the Internet is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["harm", "Identifiable", "crowdsourcing"],
        hint1: "Negative side.",
        hint2: "Identifying.",
        hint3: "Wikipedia is a famous example.",
        explanation: "Balance harms with benefits, recognize PII, and know crowdsourcing."
      }
    },
    {
      id: "cspic7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "When a model trained on biased data produces unfair outcomes, the root cause is most often ___",
            options: ["the training data and how the model was evaluated", "the programming language the model was written in", "the speed of the computer the model runs on", "random chance in each individual prediction"]
          },
          {
            label: "A platform that uses engagement-maximizing recommendations may unintentionally promote ___",
            options: ["extreme or polarizing content", "balanced, verified news content", "content chosen purely at random", "older, less-viewed posts first"]
          },
          {
            label: "Asking \"WHO benefits and WHO is harmed?\" is the right starting point for ___",
            options: ["any AP impact-of-computing question", "only intellectual-property questions", "only questions about a program's code", "only questions with a single user group"]
          }
        ],
        correctAnswers: ["the training data and how the model was evaluated", "extreme or polarizing content", "any AP impact-of-computing question"],
        hint1: "Garbage in → bias out.",
        hint2: "Engagement ≠ truth.",
        hint3: "It's the universal frame.",
        explanation: "Training data drives bias; engagement maximization can amplify polarization; \"who benefits / who is harmed\" is the universal lens."
      }
    },
    {
      id: "cspic7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Lead with WHO benefits and WHO is harmed.
- Distinguish intended vs. unintended consequences.
- Recognize key vocabulary: PII, digital divide, algorithmic bias, crowdsourcing, citizen science, Creative Commons, open source, open access, plagiarism.
- For privacy: think aggregation of data, consent, and how hard it is to delete information once it is online.
- For algorithmic fairness: think representative data, oversight, and testing across groups.
- When a question asks how a harm could be reduced, pick the choice with a concrete, targeted action.
      `
    },
    {
      id: "cspic7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A college uses machine learning to screen applications. Which statement best describes one beneficial and one harmful effect?",
            options: [
              "It screens thousands of applications quickly, and it has no harmful effects.",
              "It applies the same rules to everyone, but it may be biased against some groups.",
              "It cannot evaluate applications at all, so it has no beneficial effects.",
              "It changes how the model is trained, but it has no effect on applicants."
            ],
            correctAnswer: 1,
            explanation: "Consistency is a benefit; bias learned from past decisions can harm under-represented applicants."
          },
          {
            question: "Which action would most directly reduce the harm of bias in a machine-learning admissions system?",
            options: [
              "Doing nothing, since machine-learning systems can never be made any fairer.",
              "Testing the model across demographic groups and having humans review close cases.",
              "Training the model on more years of the same past decisions so the bias averages out.",
              "Hiding the model's criteria from applicants so that no one can game the process."
            ],
            correctAnswer: 1,
            explanation: "Concrete mitigations include auditing outcomes across demographic groups, human review of borderline cases, and transparency with applicants about how decisions are made."
          }
        ]
      }
    }
  ]
};
