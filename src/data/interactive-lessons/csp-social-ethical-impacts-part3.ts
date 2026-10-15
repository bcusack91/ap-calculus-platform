export const cspSocialEthicalImpactsPart3Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei3-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 3 of 7 — Patterns & Examples**

---

## Common Patterns Of Impact

| Pattern | Example |
|---------|---------|
| **Disintermediation** | Direct seller-to-buyer; cuts middlemen. |
| **Network effects** | Each user adds value for others (and lock-in). |
| **Algorithmic amplification** | Engagement-driven feeds boost extreme content. |
| **Surveillance creep** | Data collection grows past stated purpose. |
| **Automation shift** | Tasks shift from people to machines. |
      `
    },
    {
      id: "cspsei3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A social platform's engagement-optimizing feed surfaces sensational content because ___",
            options: [
              "users explicitly request sensational content through clearly labeled platform settings each session.",
              "shocking posts reliably draw more clicks and viewing time, so the ranking rewards them.",
              "moderators manually choose sensational posts to promote, independent of the algorithm.",
              "sensational posts are always more accurate, so the algorithm ranks them as most useful."
            ],
            correctAnswer: 1,
            explanation: "Optimizing engagement amplifies what gets engagement."
          },
          {
            question: "A platform whose value rises with each new user has ___",
            options: [
              "network effects — each additional user makes the platform more useful to others",
              "economies of scale — each additional user lowers the cost of running the servers",
              "a filter bubble — each additional user narrows what other users get to see",
              "crowdsourcing — each additional user adds content that the platform must review"
            ],
            correctAnswer: 0,
            explanation: "Network effects = value scales with users."
          }
        ]
      }
    },
    {
      id: "cspsei3-content",
      type: 'text' as const,
      content: `
## Misinformation And Disinformation

| Term | Meaning |
|------|---------|
| **Misinformation** | False information shared without intent to mislead. |
| **Disinformation** | False information shared deliberately to mislead. |
| **Malinformation** | True information shared with malicious intent (out of context). |

Computing speeds the spread of all three. Algorithmic feeds, generative AI, and synthetic media (deepfakes) raise the stakes.

## Open Vs. Closed Platforms

| | Open | Closed |
|---|------|--------|
| Modify | Yes | No |
| Vendor lock-in | Low | High |
| Examples | Linux, Wikipedia | iOS app store, proprietary services |

Open systems enable wider participation; closed systems may offer easier UX or stronger curation.

## Crowdsourcing's Double Edge

Wikipedia harnesses thousands of editors. Same model can be exploited (vandalism, brigading). Governance matters.
      `
    },
    {
      id: "cspsei3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) False information spread WITHOUT intent to mislead is called _______.

2) A system whose value rises as more users join exhibits _______ effects.

3) AI-generated synthetic videos of real people are called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["misinformation", "network", "deepfakes"],
        hint1: "Unintentional.",
        hint2: "Scaling with users.",
        hint3: "Synthetic video.",
        explanation: "Misinformation / network effects / deepfakes."
      }
    },
    {
      id: "cspsei3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "An algorithmically-curated feed optimized for engagement tends to ___",
            options: ["amplify content that drives engagement, not necessarily content that is accurate or beneficial", "show content in strictly chronological order, not ranked by predicted engagement at all", "prioritize content that fact-checkers verified as accurate and beneficial, even if it drives less engagement", "show every user the same content, not content personalized to their past clicks"]
          },
          {
            label: "A vendor-locked platform makes it ___",
            options: ["hard for users to switch to a competitor", "easy for users to export data to a competitor", "free for users to use with any competitor's tools", "impossible for the vendor to change its prices"]
          },
          {
            label: "A crowdsourced project benefits from ___",
            options: ["governance: clear contribution rules and trusted maintainers", "no structure: anyone edits anything without review", "isolation: a single expert writing every contribution", "exclusivity: accepting contributions only from paid staff"]
          }
        ],
        correctAnswers: ["amplify content that drives engagement, not necessarily content that is accurate or beneficial", "hard for users to switch to a competitor", "governance: clear contribution rules and trusted maintainers"],
        hint1: "Optimizer follows clicks.",
        hint2: "Lock-in.",
        hint3: "Crowdsourcing needs governance.",
        explanation: "Engagement amplification; lock-in; crowdsourcing governance."
      }
    },
    {
      id: "cspsei3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Patterns

- Distinguish mis / dis / mal information.
- Algorithmic amplification is a structural force, not just an editorial choice.
- Open vs. closed has real trade-offs.
      `
    },
    {
      id: "cspsei3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new social app personalizes feeds with no \"show me the opposite view\" option. A long-term concern is ___",
            options: [
              "no measurable concern, since users naturally seek out diverse opinions on their own anyway.",
              "filter bubbles and echo chambers can narrow user perspectives and amplify polarization.",
              "personalized feeds always show balanced views, since algorithms are neutral by design.",
              "the only concern is data storage, since personalized feeds take more server space."
            ],
            correctAnswer: 1,
            explanation: "Personalization without diversity = echo chamber."
          },
          {
            question: "A community Wikipedia for a small topic faces vandalism. The most CSP-aligned response is ___",
            options: [
              "close the wiki, delete its history, and block every anonymous contributor from editing.",
              "add governance such as clear policies, trusted editors, version history, and edit rate limits.",
              "require real names from all editors and publish their home addresses to deter vandals.",
              "let the vandalized pages stand, since crowdsourced content will fix itself eventually."
            ],
            correctAnswer: 1,
            explanation: "Crowdsourcing scales only with governance."
          }
        ]
      }
    }
  ]
};
