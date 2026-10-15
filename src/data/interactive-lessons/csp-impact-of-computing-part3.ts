export const cspImpactOfComputingPart3Data = {
  topicSlug: "csp-impact-of-computing",
  sections: [
    {
      id: "cspic3-intro",
      type: 'text' as const,
      content: `
# 🌍 Impact of Computing

**Part 3 of 7 — Patterns & Examples**

---

## Patterns Of Impact

Recurring categories of impact you'll be asked to recognize.

| Category | Examples |
|---------|---------|
| **Privacy** | Personal data collected, sold, leaked. |
| **Security** | Phishing, malware, breaches. |
| **Bias / Fairness** | ML systems trained on biased data. |
| **Intellectual property** | Copying, remixing, attribution. |
| **Crowdsourcing** | Wikipedia, citizen science, open-source. |
| **Automation / labor** | Job displacement, task augmentation. |
      `
    },
    {
      id: "cspic3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A face-recognition system is significantly less accurate on people of color than on white faces. The most accurate diagnosis is ___",
            options: [
              "the recognition algorithm itself is inherently unfair no matter which training images are used.",
              "the training images likely did not represent the population the system is used on, so it learned uneven accuracy.",
              "the system's developers must have deliberately programmed it to treat some faces differently.",
              "darker skin tones carry less information in an image, so no system can match them accurately."
            ],
            correctAnswer: 1,
            explanation: "Algorithmic bias most often stems from non-representative training data; the model learns the gaps in its input."
          },
          {
            question: "Wikipedia is most clearly an example of ___",
            options: [
              "a strict client-server architecture in which one central authoritative server publishes all article content to passive readers.",
              "crowdsourcing, in which many volunteer contributors write and edit a shared body of encyclopedic knowledge.",
              "a peer-to-peer file-sharing network in which each reader directly distributes article files to other readers nearby.",
              "a machine-learning system that automatically generates new encyclopedia articles from raw web-scraped training data."
            ],
            correctAnswer: 1,
            explanation: "Wikipedia is a textbook example of crowdsourcing."
          }
        ]
      }
    },
    {
      id: "cspic3-content",
      type: 'text' as const,
      content: `
## Privacy: What Counts as PII?

**Personally Identifiable Information (PII)** = any data that can identify a specific person on its own or combined with other data.

| Identifies a person directly | Identifies a person when combined |
|-----------|---------------------|
| Name, Social Security number, email | ZIP code + birth date + gender |
| Home address | Browsing history and cookies |
| Phone number | Location history |

Disparate personal data, such as geolocation, cookies, and browsing history, can be **aggregated** to create knowledge about an individual, so a surprising number of "anonymous" datasets can be traced back to real people.

## Algorithmic Bias

A model that learns from biased data reproduces that bias. Common cases:

- Hiring tools trained on past hires perpetuate past hiring biases.
- Risk-assessment scores trained on biased policing data target the same neighborhoods.
- Speech recognition trained mostly on certain accents performs worse on others.

The fix is multi-layered: representative data, fairness audits, human oversight, transparency.

## Crowdsourcing

Crowdsourcing harnesses many people's small contributions:

- **Wikipedia**: knowledge.
- **OpenStreetMap**: maps.
- **Galaxy Zoo**: classifying galaxies.
- **Open-source software**: code.

Pros: scale, diversity, cost. Cons: quality control, vandalism, governance.

## Intellectual Property In A Digital World

Material created on a computer is the **intellectual property** of its creator or an organization. A digital file is trivially copyable, which raises concerns about ownership, value, and use. Legal ways to use someone else's material include:

- **Creative Commons**: a public copyright license that lets creators give others the right to share, use, and build on their work.
- **Open source**: programs that are made freely available and may be redistributed and modified.
- **Open access**: online research output free of restrictions on access and of many restrictions on use.
- **Citation**: material created by someone else should always be cited. Using it without permission and presenting it as your own is **plagiarism**.
      `
    },
    {
      id: "cspic3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Data that can identify a specific person is called _______.

2) When an algorithm produces unfair outcomes due to its training data, this is called algorithmic _______.

3) A project where many people contribute small pieces toward a shared product is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["PII", "bias", "crowdsourcing"],
        hint1: "Personally Identifiable Information.",
        hint2: "A systematic skew.",
        hint3: "Wikipedia is the canonical example.",
        explanation: "PII = identifying data. Algorithmic bias usually traces to data. Crowdsourcing = many small contributions."
      }
    },
    {
      id: "cspic3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A Creative Commons license lets a creator ___",
            options: ["give others the right to share, use, and build on a work", "keep anyone else from ever viewing or sharing the work", "collect a fee every time someone opens the work online", "transfer ownership of the work to whoever copies it first"]
          },
          {
            label: "An \"anonymized\" dataset of medical records combined with public voter lists might allow ___",
            options: ["identification of specific individuals", "permanent deletion of the original records", "stronger encryption of the medical records", "guaranteed anonymity for every patient listed"]
          },
          {
            label: "Open-source software is most clearly an example of ___",
            options: ["crowdsourcing applied to code", "centralized corporate development", "proprietary licensing of code", "closed-source vendor software"]
          }
        ],
        correctAnswers: ["give others the right to share, use, and build on a work", "identification of specific individuals", "crowdsourcing applied to code"],
        hint1: "It is used when a creator WANTS others to reuse the work.",
        hint2: "Combined data can reveal identities.",
        hint3: "Many contributors, shared code.",
        explanation: "Creative Commons grants others rights to share and build on a work. Aggregating data sources can identify people. Open source = crowdsourced code."
      }
    },
    {
      id: "cspic3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Categories

- For privacy questions, identify what data is collected and what could go wrong if it leaks or is combined.
- For bias questions, look at the training data, not just the model.
- For IP questions, think about ownership, permission (Creative Commons, open source, open access), citation, and plagiarism.
- For crowdsourcing, weigh scale benefits against quality / vandalism risks.
      `
    },
    {
      id: "cspic3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A hiring tool is trained on resumes from the past 10 years of a company that historically hired mostly men. The most likely outcome is ___",
            options: [
              "the tool will be fair across genders, since algorithms remove human bias from hiring.",
              "the tool will likely repeat the old bias, rating qualified women lower than similar men.",
              "the tool will ignore past outcomes and judge each resume only on the skills it lists.",
              "the tool will overcorrect and favor women, even over clearly better-qualified men."
            ],
            correctAnswer: 1,
            explanation: "ML systems learn historical patterns; biased input data → biased predictions."
          },
          {
            question: "A free photo-storage service offers unlimited storage in exchange for permission to scan photos for advertising data. Which is the most accurate framing?",
            options: [
              "Nothing is paid, since a service that charges no money has no other cost to the user.",
              "The user pays with personal data, which can be worth more to the company than a fee.",
              "There is no privacy concern, since only software, not people, scans the uploaded photos.",
              "The scanning permission is meaningless, since terms of service cannot be enforced in court."
            ],
            correctAnswer: 1,
            explanation: "When the product is free, you are often the product — the data has economic value."
          }
        ]
      }
    }
  ]
};
