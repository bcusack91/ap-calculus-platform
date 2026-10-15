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
            question: "Strong impact-of-computing analysis usually requires ___",
            options: [
              "identifying only one specific beneficial effect of the technology under analysis without naming any specific affected party or population.",
              "identifying only one specific harmful effect of the technology under analysis without naming any specific affected party or population.",
              "identifying BOTH a beneficial AND a harmful effect of the technology under analysis, with specific affected parties named for each.",
              "identifying neither a beneficial nor a harmful effect of the technology under analysis and offering only abstract general statements."
            ],
            correctAnswer: 2,
            explanation: "Balanced analysis names both a beneficial and a harmful effect and identifies who is affected by each."
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
| Re-identification | Linking "anonymous" data back to specific people. |
| Algorithmic bias | Systematic skew in algorithmic outputs, often from biased data. |
| Crowdsourcing | Many small contributors → one shared product. |
| Open-source / Creative Commons | Licenses that grant permissions explicitly. |
| Filter bubble | Algorithmically narrowed information exposure. |
| Deepfake | AI-generated synthetic likeness or voice. |
| Sunset clause | Scheduled deletion of collected data. |

## Common Pitfalls

- "It's just a tool — neutral." Tools have consequences shaped by who builds and deploys them.
- "Anonymous data is safe." Linkage attacks frequently re-identify.
- "If it's legal, it's fine." Legality and ethics differ.
- "Automation just kills jobs." It changes job mix; some new jobs are created, others disappear, distribution shifts.
- "More data is always better." Collected data is also collected risk.

## How To Write A Strong Impact Answer

1. Identify the technology and its intended purpose.
2. Name **at least one** beneficial effect with WHO benefits.
3. Name **at least one** harmful effect (preferably unintended) with WHO is harmed.
4. Describe the **mechanism** (data, algorithm, network reach).
5. Suggest a **mitigation** if asked.
      `
    },
    {
      id: "cspic7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A strong AP impact answer names both a benefit and a _______.

2) PII stands for Personally _______ Information.

3) A scheduled deletion of stored data is enabled by a _______ clause.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["harm", "Identifiable", "sunset"],
        hint1: "Negative side.",
        hint2: "Identifying.",
        hint3: "Setting beyond which data ends.",
        explanation: "Balance harms with benefits, recognize PII, and know sunset clauses as a privacy mitigation."
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
- Recognize key vocabulary: PII, digital divide, algorithmic bias, crowdsourcing, filter bubble, deepfake.
- For privacy: think aggregation, opt-in, sunset, transparency.
- For algorithmic fairness: think representative data, oversight, auditability, recourse.
- Always end with a concrete mitigation if the prompt asks "how could this be addressed?"
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
            question: "A student is asked to describe one beneficial and one harmful effect of using ML in college admissions. A strong answer would ___",
            options: [
              "praise how quickly automated screening handles thousands of applications and stop there.",
              "name one positive effect such as consistency and one negative such as bias against under-represented applicants.",
              "argue that no machine-learning system could ever meaningfully evaluate an application essay.",
              "explain how the model is trained, without naming any effect on applicants or on colleges."
            ],
            correctAnswer: 1,
            explanation: "Balanced answer with specific benefit + specific harm + named population."
          },
          {
            question: "A student is asked what mitigation could reduce harm from using ML in admissions. A strong answer would mention ___",
            options: [
              "no mitigation, since machine-learning admissions systems cannot be made any fairer.",
              "auditing the model across demographic groups and having humans review borderline cases.",
              "training the model on more years of past admissions decisions so its biases average out.",
              "hiding the model's criteria from applicants so that no one can game the admissions process."
            ],
            correctAnswer: 1,
            explanation: "Concrete mitigations include auditing outcomes across demographic groups, human review of borderline cases, and transparency with applicants about how decisions are made."
          }
        ]
      }
    }
  ]
};
