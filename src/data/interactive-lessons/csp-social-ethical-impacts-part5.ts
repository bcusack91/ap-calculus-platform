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
              "compression ratio of the model's output relative to its training set on a per-token basis",
              "authorship, attribution, training-data consent, misinformation, and creative-labor displacement",
              "the transport-layer security handshake speed between the AI client and the model's server",
              "the IPv6 routing of packets between the AI client and the model's underlying inference server"
            ],
            correctAnswer: 1,
            explanation: "Generative AI surfaces all of these social concerns."
          },
          {
            question: "A deepfake video of a politician saying things they never said most directly threatens ___",
            options: [
              "compression efficiency of video streams during the broadcast of the synthesized speech",
              "public trust in media and elections — an information-integrity concern at societal scale",
              "transport-layer security between the viewer's browser and the originating broadcast server",
              "IPv6 routing of the synthesized video between the original publisher and downstream viewers"
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
            options: ["consent and attribution", "compression", "TLS", "IPv6"]
          },
          {
            label: "Energy use of large model training is ___",
            options: ["significant and a growing sustainability concern", "negligible always", "unrelated to the environment", "a TLS issue"]
          },
          {
            label: "A small handful of platforms mediating public discourse raises ___",
            options: ["questions about platform power, governance, and accountability", "TLS issues only", "compression issues only", "IPv6 routing"]
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
              "an academic-integrity concern that also raises authorship and attribution questions; norms must be explicit.",
              "a transport-layer-security concern between the user's browser and the underlying language-model server.",
              "a compression concern, since the model's output happens to compress more efficiently than human writing."
            ],
            correctAnswer: 1,
            explanation: "Academic integrity + clear AI-use norms."
          },
          {
            question: "An AI chatbot confidently states a wrong historical fact a student then cites. The CSP-aligned response is ___",
            options: [
              "always trust the AI chatbot's output, on the grounds that confident answers are usually correct.",
              "verify factual claims against authoritative sources; AI hallucinations are common and confidence ≠ correctness.",
              "compress the chatbot's response before citing it, so that any factual error becomes harder to detect later.",
              "switch the chatbot's underlying transport from TCP to UDP so that future hallucinations stop occurring."
            ],
            correctAnswer: 1,
            explanation: "AI hallucinations require verification."
          }
        ]
      }
    }
  ]
};
