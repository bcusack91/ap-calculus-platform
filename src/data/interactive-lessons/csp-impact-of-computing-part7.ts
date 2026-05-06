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
            question: "AP impact-of-computing answers usually require ___",
            options: [
              "identifying only one specific beneficial effect of the technology under analysis without naming any specific affected party or population.",
              "identifying only one specific harmful effect of the technology under analysis without naming any specific affected party or population.",
              "identifying BOTH a beneficial AND a harmful effect of the technology under analysis, with specific affected parties named for each.",
              "identifying neither a beneficial nor a harmful effect of the technology under analysis and offering only abstract general statements."
            ],
            correctAnswer: 2,
            explanation: "The rubric typically demands balanced analysis with affected parties."
          },
          {
            question: "The phrase \"the digital divide\" describes ___",
            options: [
              "an ongoing technical dispute among ISPs and standards bodies about the relative merits of IPv4 versus IPv6 for the public internet.",
              "gaps in meaningful access to digital technology across geography, income, age, or ability between groups of people in a society.",
              "the process of splitting digital files into individual packets for transmission across a packet-switched network like the modern internet.",
              "a lossy audio compression technique that splits a digital sound file into low-frequency and high-frequency bands for separate processing."
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
            options: ["the training data and how the model was evaluated", "pure randomness", "TCP packet loss", "Wi-Fi signal strength"]
          },
          {
            label: "A platform that uses engagement-maximizing recommendations may unintentionally promote ___",
            options: ["extreme or polarizing content", "always-truthful content", "always-boring content", "random unrelated content"]
          },
          {
            label: "Asking \"WHO benefits and WHO is harmed?\" is the right starting point for ___",
            options: ["any AP impact-of-computing question", "no AP impact question", "only privacy questions", "only IP questions"]
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
            question: "An AP exam free-response asks: \"Describe one beneficial and one harmful effect of using ML in college admissions.\" A model answer would ___",
            options: [
              "praise the efficiency of automated college-admissions screening across thousands of applications and stop the response there.",
              "name a specific benefit (consistency or scale) and a specific harm (encoded bias against under-represented groups), naming the affected population.",
              "argue at length that no machine-learning system can ever meaningfully read or evaluate the free-form essays submitted with college applications.",
              "discuss the ongoing IPv6 deployment in the residential ISPs that admitted college students will use to access their online learning platforms."
            ],
            correctAnswer: 1,
            explanation: "Balanced answer with specific benefit + specific harm + named population."
          },
          {
            question: "An AP exam free-response asks: \"What mitigation could reduce harm from using ML in admissions?\" A strong response would mention ___",
            options: [
              "nothing at all about possible mitigations because machine-learning admissions systems are fundamentally impossible to fix or to make any fairer.",
              "auditing the model on demographic subgroups, requiring human review of borderline decisions, and being transparent with applicants about how decisions are made.",
              "switching the underlying transport-layer protocol used by the admissions system from TCP to UDP for faster delivery of admissions decisions.",
              "switching the underlying network-layer protocol used by the admissions system from IPv4 to IPv6 for more reliable delivery of decisions."
            ],
            correctAnswer: 1,
            explanation: "Mitigations: subgroup audits, human-in-the-loop, transparency. Concrete and rubric-friendly."
          }
        ]
      }
    }
  ]
};
