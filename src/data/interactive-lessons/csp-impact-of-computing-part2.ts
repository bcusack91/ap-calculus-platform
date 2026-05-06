export const cspImpactOfComputingPart2Data = {
  topicSlug: "csp-impact-of-computing",
  sections: [
    {
      id: "cspic2-intro",
      type: 'text' as const,
      content: `
# 🌍 Impact of Computing

**Part 2 of 7 — Key Processes**

---

## Computing Reshapes Society

Every powerful technology produces both **beneficial** and **harmful** effects, often in the same product. AP CSP wants you to identify both — not just one.

| Domain | Beneficial | Harmful |
|--------|-----------|---------|
| Communication | Global reach, free messaging | Misinformation spreads at the same speed |
| Health | Telemedicine, AI diagnostic tools | Sensitive data exposure |
| Education | Free open courses worldwide | Digital divide for those without access |
| Commerce | Convenient shopping, cheaper goods | Job displacement, market concentration |
      `
    },
    {
      id: "cspic2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new app helps farmers in remote areas check crop prices on a basic phone. The most likely UNINTENDED consequence is ___",
            options: [
              "farmers across the entire region will permanently abandon their basic phones in favor of in-person market visits.",
              "farmers without phones may be at a disadvantage relative to those with phones who can check crop prices instantly.",
              "the basic phones used to check crop prices will gradually become more weather-resistant in remote farming areas.",
              "crop prices set at central markets will become entirely irrelevant for the farmers using the price-checking app."
            ],
            correctAnswer: 1,
            explanation: "Even helpful technology can deepen the gap for those who don't have access (a digital-divide effect)."
          },
          {
            question: "Computing technologies generally have ___",
            options: [
              "only beneficial effects on the people and groups who choose to use them or are affected by their deployment.",
              "only harmful effects on the people and groups who choose to use them or are affected by their deployment.",
              "both beneficial and harmful effects on the people and groups affected, often in the same product simultaneously.",
              "no significant effects on the people and groups affected that are worth analyzing under the AP CSP framework."
            ],
            correctAnswer: 2,
            explanation: "AP CSP frames technologies as having dual effects — both must be considered."
          }
        ]
      }
    },
    {
      id: "cspic2-content",
      type: 'text' as const,
      content: `
## Beneficial vs. Harmful Effects

When evaluating a technology, ask:

- Who **benefits** from it? In what way?
- Who is **harmed** or excluded? In what way?
- Was the harm **intended** or **unintended**?
- What are **secondary** effects (e.g., changes to industries, public discourse)?

These questions structure the AP exam's "impact of computing" prompts.

## Intended vs. Unintended Consequences

| Type | Example |
|------|---------|
| **Intended beneficial** | Email lets you send messages instantly. |
| **Unintended beneficial** | Email infrastructure also enabled mailing lists, calendars, threaded discussions. |
| **Intended harmful** | Spam, intentional malware. |
| **Unintended harmful** | Email phishing exploiting trust in messages; "always-on" worker burnout. |

Most exam scenarios focus on **unintended** consequences — second-order effects nobody planned but everyone now lives with.

## The Digital Divide

The **digital divide** is the gap between those who have meaningful access to digital technology (devices, bandwidth, skills) and those who don't. It maps onto:

- **Geography**: rural vs urban broadband.
- **Income**: cost of devices and service.
- **Age**: comfort with new technology.
- **Disability**: whether software is accessible.

A "best in class" web service is meaningless to users who can't afford service or use it.
      `
    },
    {
      id: "cspic2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The gap between those with and without meaningful access to digital tech is the digital _______.

2) A consequence that designers did not plan for is called a(n) _______ consequence.

3) Identifying both who benefits and who is _______ is part of evaluating computing's impact.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["divide", "unintended", "harmed"],
        hint1: "Gap, split.",
        hint2: "Opposite of planned.",
        hint3: "Negative side.",
        explanation: "Digital divide = access gap. Unintended consequences are unplanned. Always weigh harms alongside benefits."
      }
    },
    {
      id: "cspic2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Telemedicine that requires high-speed Internet may worsen ___",
            options: ["the digital divide for rural patients", "doctor handwriting", "paper consumption", "patient height"]
          },
          {
            label: "A platform that goes viral globally affects ___",
            options: ["far more people than its designers may have anticipated", "only its designers", "only one country", "only Wi-Fi networks"]
          },
          {
            label: "A \"dual use\" technology is one that ___",
            options: ["can be used for both beneficial and harmful purposes", "requires two users", "has two pricing tiers", "doubles the bandwidth"]
          }
        ],
        correctAnswers: ["the digital divide for rural patients", "far more people than its designers may have anticipated", "can be used for both beneficial and harmful purposes"],
        hint1: "Connectivity gap matters.",
        hint2: "Internet scale = global effects.",
        hint3: "Same tool, different uses.",
        explanation: "Telemedicine relies on bandwidth. Internet-scale tech affects everyone. Dual-use describes most computing."
      }
    },
    {
      id: "cspic2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Analysis

- Always answer with **both** a benefit and a harm — the rubric usually demands both.
- Look for **second-order** effects (e.g., displaced jobs, behavioral changes).
- Mention specific affected populations (rural users, low-income users, users with disabilities, minors, etc.).
- Don't just say "good" or "bad" — explain WHO is affected and HOW.
      `
    },
    {
      id: "cspic2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school replaces paper textbooks with tablets to save money. What is a likely UNINTENDED harmful effect?",
            options: [
              "Books delivered to students at the start of the year will no longer be printed with paper pages bound together.",
              "Students without home Wi-Fi may struggle to do homework that requires the new tablet to access digital textbook content.",
              "The new tablets distributed to students will be noticeably heavier in their backpacks than the old paper textbooks were.",
              "Teachers across the entire district will collectively refuse to teach any further classes if textbooks are replaced."
            ],
            correctAnswer: 1,
            explanation: "A digital-divide effect — students without home connectivity may be disadvantaged."
          },
          {
            question: "A facial-recognition system is deployed in a city to find missing children (intended beneficial use). What is a plausible UNINTENDED harmful use?",
            options: [
              "It will reliably help locate every missing child reported in the city without ever producing a false positive identification.",
              "The same camera-and-recognition infrastructure can later be repurposed to track political protesters or other lawful demonstrators.",
              "It runs on the standard TCP/IP networking protocols used elsewhere on the internet for routine application-layer traffic.",
              "It will gradually increase broadband demand on the city's residential ISPs as more cameras are added to the facial system."
            ],
            correctAnswer: 1,
            explanation: "Surveillance infrastructure built for one purpose is easily redeployed for others — a classic dual-use concern."
          }
        ]
      }
    }
  ]
};
