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
              "farmers who check prices on the app will get better deals by comparing markets before selling.",
              "farmers without phones may fall behind those who can check crop prices instantly.",
              "crop prices across the region will become identical, since every farmer will see the same data.",
              "the app will cause basic phones to stop working in areas without strong cellular coverage."
            ],
            correctAnswer: 1,
            explanation: "Even helpful technology can deepen the gap for those who don't have access (a digital-divide effect)."
          },
          {
            question: "Computing technologies generally have ___",
            options: [
              "only beneficial effects, since people choose whether to adopt each new technology.",
              "only harmful effects, since every technology eventually gets misused by someone.",
              "beneficial and harmful effects, which may fall on different groups at the same time.",
              "no significant effects, since any impact depends entirely on the user, not the tool."
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

These questions structure the AP exam's multiple-choice "impact of computing" questions.

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
            options: ["the digital divide for rural patients", "data redundancy in hospital servers", "patent disputes between device makers", "the digital footprint of hospital staff"]
          },
          {
            label: "A platform that goes viral globally affects ___",
            options: ["far more people than its designers may have anticipated", "only the users its designers originally intended to reach", "only people within the country where it was first launched", "only people who have chosen to create an account on it"]
          },
          {
            label: "A \"dual use\" technology is one that ___",
            options: ["can be used for both beneficial and harmful purposes", "requires two separate users to approve each action", "runs on both desktop and mobile devices at once", "is licensed for both commercial and personal use"]
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

- Always weigh **both** a benefit and a harm — the best answer choice usually accounts for both.
- Look for **second-order** effects (e.g., displaced jobs, behavioral changes).
- Prefer answer choices that name a specific affected group (rural users, low-income users, users with disabilities, minors, etc.).
- Eliminate choices that call a technology purely "good" or purely "bad"; the best choice says WHO is affected and HOW.
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
              "Paper textbooks will no longer be printed, which is the change the district set out to make.",
              "Students without home Wi-Fi may struggle with homework that needs the digital textbooks.",
              "The district will save money on printing and replacing worn-out books every school year.",
              "Every student's reading scores will fall, regardless of how the tablets are used in class."
            ],
            correctAnswer: 1,
            explanation: "A digital-divide effect — students without home connectivity may be disadvantaged."
          },
          {
            question: "A facial-recognition system is deployed in a city to find missing children (intended beneficial use). What is a plausible UNINTENDED harmful use?",
            options: [
              "It will locate every missing child in the city without ever producing a false match.",
              "The same camera network could later be aimed at tracking lawful protesters.",
              "It will find missing children faster than officers could by searching the city on foot.",
              "It will lower camera monitoring costs, since fewer officers need to watch the footage."
            ],
            correctAnswer: 1,
            explanation: "Surveillance infrastructure built for one purpose is easily redeployed for others — a classic dual-use concern."
          }
        ]
      }
    }
  ]
};
