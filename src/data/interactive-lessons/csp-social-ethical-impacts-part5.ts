export const cspSocialEthicalImpactsPart5Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei5-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 5 of 7 — Legal and Ethical Concerns**

---

## When Computing Raises Legal and Ethical Questions

As with any technology or medium, **using computing to harm individuals or groups** raises legal and ethical concerns. The AP framework gives three examples of computing innovations that raise such concerns:

| Innovation | Concern |
|-----|----------------|
| Software that allows access to digital media downloads and streaming | Copies of music, movies, and games can be shared without the creators' permission (intellectual property). |
| Algorithms that include bias | Decisions about loans, jobs, or policing can treat groups unfairly. |
| Computing devices that continuously monitor activities and collect and analyze data | Smart speakers, cameras, and location trackers raise privacy concerns. |

Computing also plays a role in **social and political issues**, which often raises further legal and ethical concerns, and the **digital divide** raises ethical concerns about who gets access at all.
      `
    },
    {
      id: "cspsei5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Generative AI most directly raises new questions about ___",
            options: [
              "whether binary can represent images, colors, and sound, since generated media are stored as bits",
              "authorship, credit, and consent, since models learn from human work gathered without asking",
              "whether algorithms can be written in pseudocode, since AI models follow learned rules",
              "how routers forward packets, since AI responses travel across the internet like any other data stream"
            ],
            correctAnswer: 1,
            explanation: "Material created by people is their intellectual property, so learning from it without permission raises questions of authorship, credit, and consent."
          },
          {
            question: "A free app lets users download copies of movies that other users share without the studios' permission. Which concern does this most directly raise?",
            options: [
              "intellectual property concerns about ownership and use",
              "fault tolerance concerns about redundant network paths",
              "data compression concerns about lossy movie formats",
              "routing concerns about which path each packet takes"
            ],
            correctAnswer: 0,
            explanation: "Software that allows access to digital media downloads raises legal and ethical concerns about intellectual property."
          }
        ]
      }
    },
    {
      id: "cspsei5-content",
      type: 'text' as const,
      content: `
## Intellectual Property in Practice

| Situation | Legal and ethical? |
|---------|---------|
| Using a photo shared under a Creative Commons license and crediting the photographer | Yes |
| Modifying and sharing an open-source program | Yes |
| Reading a research article published with open access | Yes |
| Copying a classmate's code and submitting it as your own | No — plagiarism |
| Downloading a paid movie that someone shared without permission | No — violates the creator's intellectual property |

## Monitoring and Bias

- Devices that **continuously monitor** people (smart speakers, fitness trackers, cameras) collect data that can be analyzed, combined, and used in ways the user never expected.
- **Biased algorithms** used for important decisions can harm whole groups, even when no one intended it.
- Responsible programmers try to consider these harmful uses before they release an innovation.
      `
    },
    {
      id: "cspsei5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Software that lets people download others' media without permission raises _______ property concerns.

2) Devices that continuously monitor activities and collect data raise concerns about _______.

3) Material created by someone else should always be _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["intellectual", "privacy", "cited"],
        hint1: "Creations of the mind.",
        hint2: "Keeping personal information to yourself.",
        hint3: "Give the source credit.",
        explanation: "Intellectual property / privacy / always cite others' work."
      }
    },
    {
      id: "cspsei5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "AI training raises ___ concerns about sources of training data",
            options: ["consent and attribution", "network speed and latency", "file format and compression", "hardware cost and cooling"]
          },
          {
            label: "A smart speaker that is always listening is an example of ___",
            options: ["a device that continuously monitors activities", "a citizen science research project", "an open access research publication", "a crowdfunding campaign for a cause"]
          },
          {
            label: "Using computing to harm individuals or groups of people raises ___",
            options: ["legal and ethical concerns", "only technical concerns", "only financial concerns", "no concerns if it is legal"]
          }
        ],
        correctAnswers: ["consent and attribution", "a device that continuously monitors activities", "legal and ethical concerns"],
        hint1: "Whose work was used, and did they agree?",
        hint2: "It collects data all the time.",
        hint3: "Both the law and right and wrong.",
        explanation: "AI training data raise consent and attribution concerns. Always-listening devices continuously monitor. Harmful uses of computing raise legal and ethical concerns."
      }
    },
    {
      id: "cspsei5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Legal and Ethical Concerns

- Know the three named examples: media download/streaming software, biased algorithms, continuous-monitoring devices.
- Legal reuse: Creative Commons, open source, open access, with citation. Passing off others' work: plagiarism.
- Computing plays a role in social and political issues; the digital divide is also an ethical concern.
      `
    },
    {
      id: "cspsei5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user submits a school essay generated by an AI tool as their own work. The most CSP-aligned framing is ___",
            options: [
              "no measurable concern, since the tool's output is technically the property of whoever prompted it.",
              "presenting work you did not create as your own is plagiarism, so rules for AI use must be clear.",
              "a plagiarism issue only if the essay copies a published source word for word.",
              "a copyright issue for the AI company, which legally owns every essay the tool writes."
            ],
            correctAnswer: 1,
            explanation: "Presenting material you did not create as your own is plagiarism and may have consequences."
          },
          {
            question: "A city installs sensors that continuously record the locations of residents' phones to study traffic. Which concern is most directly raised?",
            options: [
              "The sensors will slow down every resident's phone connection.",
              "Tracking where people go puts their personal privacy at risk.",
              "The traffic data will be too small to show any useful patterns.",
              "Phone locations cannot be stored as data, so the plan cannot work."
            ],
            correctAnswer: 1,
            explanation: "Devices that continuously monitor activities and collect data raise legal and ethical concerns, especially about privacy."
          }
        ]
      }
    }
  ]
};
