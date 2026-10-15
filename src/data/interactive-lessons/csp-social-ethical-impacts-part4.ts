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
            explanation: "Computing innovations can reflect existing human biases through the data they learn from; past patterns get repeated as if they were objective."
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

When a credit-score, hiring, or healthcare-triage algorithm is deployed, its rules become policy. Computing innovations can reflect existing human biases, through biases written into the algorithm or biases in the data it uses, and **biases can be embedded at all levels of software development**. Programmers should take action to reduce bias, for example by:

- testing results separately for different groups of people,
- checking whether the training data represent everyone the system will affect,
- letting people see how a decision was made and ask for it to be reviewed.

## Intellectual Property And Creative Commons

| Option | Effect |
|---------|--------|
| Creative Commons | The creator lets others share, use, and build on the work; most Creative Commons licenses require credit. |
| Open source | Programs freely available to redistribute and modify. |
| Open access | Research free of access restrictions. |
| Proprietary | All rights reserved. |

CSP-aligned thinking: respect creators' intent, cite your sources, and remember that using someone else's work without permission and presenting it as your own is plagiarism.

## Privacy Expectations

Information placed online can be used in ways that were not intended: an email can be forwarded, a post can be reshared, and social media can be viewed by potential employers. A "public" post in a small-town context becomes very different when it is shared globally.
      `
    },
    {
      id: "cspsei4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Using someone else's work without permission and presenting it as your own is called _______.

2) Biases can be embedded at _______ levels of software development.

3) A Creative Commons license lets others share, use, and build on a work, usually as long as they give the creator _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["plagiarism", "all", "credit"],
        hint1: "It may have legal consequences.",
        hint2: "Not just one stage.",
        hint3: "Attribution.",
        explanation: "Plagiarism / bias can enter at all levels / Creative Commons usually requires credit."
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
            label: "Reusing an image under a Creative Commons license that requires credit means ___",
            options: ["giving credit to the creator under the license terms", "paying the creator under the license terms", "asking the creator for written permission each time", "giving no credit, since the work is free to use"]
          },
          {
            label: "Privacy expectations vary by ___",
            options: ["context, culture, and population", "nothing — identical everywhere", "device, browser, and OS", "file size and format only"]
          }
        ],
        correctAnswers: ["exhibiting bias that needs investigation, regardless of intent", "giving credit to the creator under the license terms", "context, culture, and population"],
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

- Algorithm + data choices encode policy; bias can enter at every level.
- Programmers should act to reduce bias: test across groups and check the data.
- Respect creator licenses, cite sources, and remember online information can be used in unintended ways.
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
            explanation: "Programmers should take action to reduce bias: human review, clear criteria, checking results across groups, and a way to appeal all help."
          },
          {
            question: "A song is shared under a Creative Commons license that requires credit. A user remixes it and posts the remix without crediting the creator. The most CSP-aligned framing is ___",
            options: [
              "no measurable concern, since the user has remixed the song into something that sounds different.",
              "the user broke the terms by leaving out the attribution the license asks for.",
              "the license only forbids selling the song, so posting a free remix without credit is allowed.",
              "remixing creates a new work, so the original license no longer applies to the remix."
            ],
            correctAnswer: 1,
            explanation: "Creative Commons lets creators set the terms of reuse; this license requires credit, and others' work should always be cited."
          }
        ]
      }
    }
  ]
};
