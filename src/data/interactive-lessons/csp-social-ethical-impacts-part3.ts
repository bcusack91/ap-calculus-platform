export const cspSocialEthicalImpactsPart3Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei3-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 3 of 7 — Patterns & Examples: Crowdsourcing and Unintended Uses**

---

## Problem-Solving at Scale

Widespread access to information and public data makes it easier to identify problems, develop solutions, and share results. Computing lets **many people collaborate**, which enhances what humans can do.

| Pattern | Meaning | Example |
|---------|---------|---------|
| **Crowdsourcing** | Obtaining input or information from a large number of people via the Internet | Wikipedia; volunteers labeling photos |
| **Citizen science** | Scientific research done in whole or part by distributed individuals, many not scientists, who contribute data with their own devices | Phone apps where volunteers report bird sightings |
| **Crowdfunding** | A new model for connecting businesses or social causes with funding | Thousands of people each give a few dollars to launch a product |
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
            question: "Volunteers use a phone app to report the birds they see, and researchers use the reports to track migration. This is an example of ___",
            options: [
              "open access",
              "citizen science",
              "plagiarism",
              "the digital divide"
            ],
            correctAnswer: 1,
            explanation: "Citizen science is research conducted partly by distributed individuals, many of them not scientists, who contribute data using their own devices."
          },
          {
            question: "Which is the best example of crowdfunding?",
            options: [
              "One investor pays for a company's entire new factory.",
              "Thousands of people each give a few dollars online for an invention.",
              "A bank lends money to one small business owner in town.",
              "A student saves up an allowance to buy a new laptop."
            ],
            correctAnswer: 1,
            explanation: "Crowdfunding connects a project with funding from a large number of people over the Internet."
          }
        ]
      }
    },
    {
      id: "cspsei3-content",
      type: 'text' as const,
      content: `
## Innovations Get Used in Ways Nobody Planned

Computing innovations can be used in ways their creators had not originally intended:

| Innovation | Intended use | Unintended use |
|-----------|--------------|----------------|
| World Wide Web | Rapid, easy exchange of information within the scientific community | Shopping, social media, news, entertainment for everyone |
| Targeted advertising | Help businesses reach customers | Can be misused at both the individual and aggregate levels |
| Machine learning and data mining | Innovation in medicine, business, and science | Information discovered this way has been used to discriminate against groups |

Key ideas:

- Responsible programmers try to consider the unintended ways their innovations can be used, but **it is not possible to consider all of them**.
- **Rapid sharing** of a program, or running it with a large number of users, can cause significant impacts beyond the intended purpose or the programmer's control.
- Unintended effects are not always harmful: innovations have often led to **advances in other fields**.

## Crowdsourcing's Double Edge

Wikipedia harnesses thousands of editors, but the same openness can be exploited (vandalism, false edits). Projects that rely on many contributors need clear rules and a way to review changes.
      `
    },
    {
      id: "cspsei3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Research done partly by volunteers who contribute data with their own devices is called _______ science.

2) Obtaining input or information from a large number of people via the Internet is called _______.

3) The World Wide Web was originally intended for exchanging information within the _______ community.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["citizen", "crowdsourcing", "scientific"],
        hint1: "Ordinary citizens help.",
        hint2: "Sourcing from the crowd.",
        hint3: "Researchers sharing results.",
        explanation: "Citizen science / crowdsourcing / the Web began in the scientific community."
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
            label: "Targeted advertising helps businesses, but it ___",
            options: ["can be misused at individual and aggregate levels", "cannot collect any information about users", "is the same thing as citizen science", "works only on printed advertisements"]
          },
          {
            label: "Considering every possible way an innovation could be used is ___ for a programmer",
            options: ["not possible", "always easy", "required by law", "never useful"]
          },
          {
            label: "Rapidly sharing a program with millions of users can lead to ___",
            options: ["impacts beyond the programmer's intended purpose or control", "no effects beyond exactly what the programmer planned", "the program being deleted from every device automatically", "fewer users than the programmer originally expected"]
          }
        ],
        correctAnswers: ["can be misused at individual and aggregate levels", "not possible", "impacts beyond the programmer's intended purpose or control"],
        hint1: "Helpful and harmful at once.",
        hint2: "Nobody can foresee everything.",
        hint3: "Scale multiplies effects.",
        explanation: "Targeted ads can be misused. Programmers cannot foresee every use. Rapid sharing spreads impacts beyond the creator's control."
      }
    },
    {
      id: "cspsei3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Patterns

- Crowdsourcing = input from many people via the Internet; citizen science and crowdfunding are examples.
- Innovations are often used in ways their creators did not intend (the Web is the classic example).
- Programmers should consider unintended uses, but cannot foresee all of them.
- Unintended effects can be harmful or beneficial.
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
              "users may mostly see views they already hold, an unintended effect that can deepen divisions.",
              "personalized feeds usually show balanced views, since algorithms are neutral by design.",
              "the only concern is data storage, since personalized feeds take more server space."
            ],
            correctAnswer: 1,
            explanation: "Personalization meant to keep users engaged can narrow what they see, an unintended harmful effect."
          },
          {
            question: "A community Wikipedia for a small topic faces vandalism. The most CSP-aligned response is ___",
            options: [
              "close the wiki, delete its history, and block every anonymous contributor from editing.",
              "add clear policies, trusted editors, version history, and limits on how fast edits can be made.",
              "require real names from all editors and publish their home addresses to deter vandals.",
              "let the vandalized pages stand, since crowdsourced content will fix itself eventually."
            ],
            correctAnswer: 1,
            explanation: "Crowdsourcing keeps its benefits only when there is a way to review and correct contributions."
          }
        ]
      }
    }
  ]
};
