export const cspSocialEthicalImpactsPart5Data = {
  topicSlug: "csp-social-ethical-impacts",
  sections: [
    {
      id: "cspsei5-intro",
      type: 'text' as const,
      content: `
# ⚖️ Social & Ethical Impacts

**Part 5 of 7 — Change Over Time**

---

## How Computing's Impact Has Evolved

| Era | Defining shift |
|-----|----------------|
| 1990s | Email + web democratize publishing. |
| 2000s | Social media; Wikipedia; smartphones. |
| 2010s | Algorithmic feeds; gig economy; ML decisions. |
| 2020s | Generative AI; deepfakes; LLM-mediated information. |
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
            explanation: "Generative AI surfaces all of these social concerns."
          },
          {
            question: "A deepfake video of a politician saying things they never said most directly threatens ___",
            options: [
              "the copyright of the video's background music, which the creator did not license",
              "public trust in media and elections, since viewers can no longer believe what they see",
              "the bandwidth of streaming sites, since synthetic videos are larger than real ones",
              "the politician's device security, since making a deepfake requires hacking the person's phone"
            ],
            correctAnswer: 1,
            explanation: "Deepfakes erode trust in media."
          }
        ]
      }
    },
    {
      id: "cspsei5-content",
      type: 'text' as const,
      content: `
## Generative AI Stakes

| Concern | Example |
|---------|---------|
| Authorship | Whose work is in the training data? |
| Consent | Did sources agree? |
| Bias | What populations are over / under represented? |
| Hallucination | Confident but wrong outputs. |
| Labor | Displacement of certain creative / knowledge work. |
| Energy | Training large models is energy-intensive. |

## Platform Power And Regulation

A handful of platforms now mediate much of public discourse, commerce, and labor. Regulators worldwide are responding (data-protection laws, antitrust, age-verification debates). CSP framing: **technology design embeds policy**, so policy must engage with design.

## Long-Term Sustainability

Compute uses electricity, water (cooling), rare materials. Decisions about which problems are worth computing on (and at what scale) have environmental impact.
      `
    },
    {
      id: "cspsei5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Confident but factually wrong AI outputs are called _______.

2) AI-generated synthetic videos of real people are called _______.

3) Computing's electricity, water, and materials use raises questions about its environmental _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["hallucinations", "deepfakes", "sustainability"],
        hint1: "\"Made-up\" outputs.",
        hint2: "Synthetic video.",
        hint3: "Environmental footprint.",
        explanation: "Hallucinations / deepfakes / sustainability."
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
            label: "Energy use of large model training is ___",
            options: ["significant and a growing sustainability concern", "negligible compared with everyday web browsing", "fully offset because data centers produce no emissions", "limited to the moment a user types a prompt"]
          },
          {
            label: "A small handful of platforms mediating public discourse raises ___",
            options: ["questions about platform power, governance, and accountability", "no concerns, because market competition prevents abuse", "questions only about server uptime, latency, and bandwidth", "concerns only for the platforms' own shareholders and investors"]
          }
        ],
        correctAnswers: ["consent and attribution", "significant and a growing sustainability concern", "questions about platform power, governance, and accountability"],
        hint1: "Source ethics.",
        hint2: "Real footprint.",
        hint3: "Concentrated influence.",
        explanation: "AI ethics / sustainability / platform power."
      }
    },
    {
      id: "cspsei5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Modern Impact

- Generative AI raises authorship, consent, bias, hallucination, labor, and energy concerns.
- Platforms shape public life; their design choices are policy.
- Sustainability matters as compute scales.
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
            question: "A user submits a school essay generated by an LLM as their own work. The most CSP-aligned framing is ___",
            options: [
              "no measurable concern, since the LLM's output is technically the property of whoever prompted it.",
              "an academic-integrity issue that also raises authorship questions, so AI-use rules must be clear.",
              "a plagiarism issue only if the essay copies a published source word for word.",
              "a copyright issue for the LLM company, which legally owns every essay the model writes."
            ],
            correctAnswer: 1,
            explanation: "Academic integrity + clear AI-use norms."
          },
          {
            question: "An AI chatbot confidently states a wrong historical fact a student then cites. The CSP-aligned response is ___",
            options: [
              "always trust the AI chatbot's output, on the grounds that confident answers are usually correct.",
              "verify claims against authoritative sources, since AI tools can give false facts in a sure tone.",
              "cite the chatbot as the source, since quoting it accurately moves the responsibility to the AI.",
              "ask the chatbot whether it was correct, since it will reliably catch its own earlier errors."
            ],
            correctAnswer: 1,
            explanation: "AI hallucinations require verification."
          }
        ]
      }
    }
  ]
};
