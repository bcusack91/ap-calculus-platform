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
              "the underlying recognition algorithm itself is intrinsically unfair regardless of which training images were used to fit it.",
              "the training image dataset was likely not representative of the target population, leading to biased recognition outcomes.",
              "pixel data fundamentally encodes a bias against certain skin tones at the level of the file format the camera produced.",
              "modern digital camera sensors have been shown to systematically dislike certain skin tones during the recognition process."
            ],
            correctAnswer: 1,
            explanation: "Algorithmic bias most often stems from non-representative training data; the model learns the gaps in its input."
          },
          {
            question: "Wikipedia is most clearly an example of ___",
            options: [
              "a strict client-server architecture in which one central authoritative server publishes all article content to passive readers.",
              "crowdsourcing — many distributed contributors collectively producing and editing a shared body of encyclopedic knowledge.",
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

| Direct PII | Indirect / quasi PII |
|-----------|---------------------|
| Name, SSN, email | ZIP + birth date + gender (often unique!) |
| Home address | Browsing history |
| Phone number | Geolocation traces |

A surprising number of "anonymous" datasets can be **re-identified** by linking quasi-identifiers across sources.

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

A digital file is trivially copyable. This collides with traditional IP law (copyright, patents). Modern responses include:

- **Open licenses**: Creative Commons, MIT, GPL — explicit grants of permission.
- **DRM** (Digital Rights Management): technical restrictions on copying.
- **Attribution**: even open work usually requires credit.
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
            label: "A \"Creative Commons BY-SA\" license requires ___",
            options: ["attribution and that derivatives use the same license", "paying a fee", "no use whatsoever", "destroying the original"]
          },
          {
            label: "An \"anonymized\" dataset of medical records combined with public voter rolls might allow ___",
            options: ["re-identification of specific individuals", "no privacy concerns", "TLS encryption", "longer battery life"]
          },
          {
            label: "Open-source software is most clearly an example of ___",
            options: ["crowdsourcing applied to code", "centralized corporate development", "a P2P file system", "compression"]
          }
        ],
        correctAnswers: ["attribution and that derivatives use the same license", "re-identification of specific individuals", "crowdsourcing applied to code"],
        hint1: "BY=attribution, SA=share alike.",
        hint2: "Cross-linked datasets defeat anonymization.",
        hint3: "Many contributors, shared code.",
        explanation: "CC BY-SA = attribution + share alike. Linkage attacks defeat naive anonymization. Open source = crowdsourced code."
      }
    },
    {
      id: "cspic3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Impact Categories

- For privacy questions, identify what data is collected and what could go wrong if it leaks or is combined.
- For bias questions, look at the training data, not just the model.
- For IP questions, think about copying, remixing, and attribution.
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
              "the hiring tool will be perfectly fair across genders because algorithms automatically remove human bias from the hiring process.",
              "the hiring tool will likely reproduce the historical hiring bias, systematically disadvantaging qualified women applying for the same roles.",
              "the hiring tool will simply fail to read resume files because resumes contain too many free-form text fields for it to parse.",
              "the hiring tool will overcorrect and end up hiring only women, even when the male candidates are clearly better qualified."
            ],
            correctAnswer: 1,
            explanation: "ML systems learn historical patterns; biased input data → biased predictions."
          },
          {
            question: "A free photo-storage service offers unlimited storage in exchange for permission to scan photos for advertising data. Which is the most accurate framing?",
            options: [
              "The user pays nothing of value for the storage service and faces no other costs in return for the unlimited storage offer.",
              "The user pays with personal data; the economic value of that data may exceed the storage cost the company would otherwise charge.",
              "There are no privacy implications because photos uploaded to the service are scanned only by automated software and not by humans.",
              "Photos cannot reliably be stored in digital form on a remote service like this one without significantly degrading their quality."
            ],
            correctAnswer: 1,
            explanation: "When the product is free, you are often the product — the data has economic value."
          }
        ]
      }
    }
  ]
};
