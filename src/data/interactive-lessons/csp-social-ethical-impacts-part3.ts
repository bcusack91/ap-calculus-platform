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
              "sensational content reliably drives more clicks and time-on-platform; the optimizer rewards it.",
              "transport-layer security on the user's connection automatically rewards more sensational posts.",
              "compression algorithms favor sensational text content because it shrinks more efficiently than calm text."
            ],
            correctAnswer: 1,
            explanation: "Optimizing engagement amplifies what gets engagement."
          },
          {
            question: "A platform whose value rises with each new user has ___",
            options: [
              "network effects — each additional user makes the platform more valuable to existing users",
              "compression — each additional user makes the platform store less data per active interaction",
              "transport-layer security — each additional user strengthens the platform's cryptography",
              "a content-delivery network — each additional user routes other users' traffic geographically"
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
            options: ["amplify content that drives engagement, not necessarily content that is accurate or beneficial", "show only government news", "remove all content", "compress content"]
          },
          {
            label: "A vendor-locked platform makes it ___",
            options: ["hard for users to switch to a competitor", "easy to switch competitors", "free to use forever", "compressible"]
          },
          {
            label: "A crowdsourced project benefits from ___",
            options: ["governance: clear contribution rules and trusted maintainers", "no rules", "a single contributor", "only experts"]
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
              "filter bubbles + echo chambers can narrow user perspectives and amplify polarization over time.",
              "transport-layer security on each user's connection becomes slower as the personalization improves.",
              "compression of personalized feeds becomes less efficient than compression of unpersonalized feeds."
            ],
            correctAnswer: 1,
            explanation: "Personalization without diversity = echo chamber."
          },
          {
            question: "A community Wikipedia for a small topic faces vandalism. The most CSP-aligned response is ___",
            options: [
              "close the wiki entirely so that no further vandalism can be added by anonymous contributors.",
              "add governance: clear policies, trusted editors, version history, and rate limits on edits per hour.",
              "switch the wiki's underlying transport from TCP to UDP to discourage repeat vandalism attempts.",
              "compress every page on the wiki more aggressively to make vandalized content harder to read."
            ],
            correctAnswer: 1,
            explanation: "Crowdsourcing scales only with governance."
          }
        ]
      }
    }
  ]
};
