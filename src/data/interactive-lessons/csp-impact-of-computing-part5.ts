export const cspImpactOfComputingPart5Data = {
  topicSlug: "csp-impact-of-computing",
  sections: [
    {
      id: "cspic5-intro",
      type: 'text' as const,
      content: `
# 🌍 Impact of Computing

**Part 5 of 7 — Change Over Time**

---

## How Computing Impact Has Evolved

Themes to recognize across decades.

| Decade | Defining impact theme |
|--------|----------------------|
| 1990s | Web makes information widely accessible. |
| 2000s | Social media reshapes communication. |
| 2010s | Smartphones move computing into pockets; data collection becomes ambient. |
| 2020s | AI / ML produce decisions and content at scale; new IP and labor questions. |
      `
    },
    {
      id: "cspic5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which trend most directly enabled \"always-on\" personal data collection?",
            options: [
              "The original ARPANET research program in the 1960s that demonstrated long-distance packet-switched networking between universities.",
              "Mass adoption of smartphones with GPS, microphones, cameras, and continuous network connectivity carried by users at all times.",
              "The rise of removable floppy disks in the 1980s as the dominant low-cost medium for transferring personal files between computers.",
              "The exhaustion of available IPv4 address blocks during the 2010s and the resulting need for ISPs to deploy network address translation."
            ],
            correctAnswer: 1,
            explanation: "Smartphones turned every person into a continuous source of fine-grained data."
          },
          {
            question: "Generative AI most clearly raises new questions about ___",
            options: [
              "the deployment of IPv6 addressing across consumer ISPs and the corresponding upgrades required in residential home networking equipment.",
              "authorship, attribution, and the line between human and machine creation when training data may include copyrighted human work.",
              "the behavior of the TCP transport-layer protocol when retransmitting dropped packets across high-latency wireless cellular links.",
              "the typical refresh rates of computer monitors used to display generative AI output and the associated power-consumption concerns."
            ],
            correctAnswer: 1,
            explanation: "Synthetic content blurs traditional IP and authorship norms."
          }
        ]
      }
    },
    {
      id: "cspic5-content",
      type: 'text' as const,
      content: `
## Smartphones Changed Data Collection

A 2005 person used the Internet from a desktop, intermittently. A 2025 person carries a sensor-rich device 24/7 that continuously emits:

- Location.
- App usage.
- Social interactions.
- Biometrics (steps, heart rate, sleep).

Data is no longer a snapshot — it's a stream. Aggregated, it forms a near-complete behavioral record.

## AI / ML At Scale

Generative AI now produces text, images, audio, and video at near-human quality. New questions:

- Who **owns** the output of a model trained on others' work?
- What **labor disruption** comes from automating creative tasks?
- How do we **detect** synthetic content?
- What are the **environmental** costs (training large models requires massive energy)?

## Labor Effects

Automation changes the job mix:

- **Routine tasks** (data entry, simple translation, basic image editing) — increasingly automated.
- **Complex judgment / interpersonal work** — augmented by computing, less easily automated.
- **New roles** — data engineers, ML practitioners, AI ethicists — created by computing itself.

The net effect is rarely "no jobs" but rather "different jobs, different distributions of pay and power."

## Open Questions Of The 2020s

- Should AI-generated content be labeled?
- Who is liable when an autonomous system makes a harmful decision?
- How should training data be licensed?
- How do we preserve democratic discourse against automated influence?

These are exactly the kinds of "evaluate the impact" prompts the AP exam loves.
      `
    },
    {
      id: "cspic5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Always-on devices like smartphones enabled _______ data collection.

2) AI systems that produce text, images, or media are called _______ AI.

3) Automation tends to displace _______ tasks faster than complex-judgment ones.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["continuous", "generative", "routine"],
        hint1: "Not occasional.",
        hint2: "They generate new outputs.",
        hint3: "Repetitive tasks.",
        explanation: "Continuous data, generative AI, and routine-task automation are the dominant 2020s themes."
      }
    },
    {
      id: "cspic5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Training a large generative model requires ___",
            options: ["significant energy and computation", "no resources", "one floppy disk", "no data"]
          },
          {
            label: "Automation usually changes ___",
            options: ["the mix and distribution of jobs, not their total elimination", "nothing", "only one industry", "only Wi-Fi networks"]
          },
          {
            label: "Synthetic media that imitates a real person's likeness or voice is called ___",
            options: ["a deepfake", "a CDN", "a packet", "a router"]
          }
        ],
        correctAnswers: ["significant energy and computation", "the mix and distribution of jobs, not their total elimination", "a deepfake"],
        hint1: "Data centers, GPUs, electricity.",
        hint2: "Net effects, not \"no jobs\".",
        hint3: "Deep learning + fake.",
        explanation: "Large models = big energy. Automation = job-mix shifts. Deepfakes = synthetic likeness/voice."
      }
    },
    {
      id: "cspic5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Modern Impact Questions

- "Always-on devices" → continuous data + privacy concerns.
- "AI-generated content" → IP, labor, misinformation framing.
- "Automation" → distribution of work, not pure replacement.
- Cite a SPECIFIC affected group when describing harm.
      `
    },
    {
      id: "cspic5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "An AI image generator produces a poster style indistinguishable from a living human artist's work, without that artist's consent. What CSP-aligned concern is most accurate?",
            options: [
              "No CSP-aligned concern arises here at all because at the lowest level digital images are simply patterns of bits on disk.",
              "Training data plus IP rights plus attribution plus livelihood: the artist's prior work was used as training data without consent or compensation.",
              "A TCP transport-layer retransmission concern arises when the AI-generated poster image is delivered to the requesting client over a slow link.",
              "An IPv6 deployment concern arises when the AI-generated poster image is delivered through residential ISPs that have not yet adopted IPv6."
            ],
            correctAnswer: 1,
            explanation: "AI-generated content raises consent, attribution, and livelihood questions for the source artists."
          },
          {
            question: "A delivery company replaces local dispatchers with an algorithm. Which framing best matches the AP rubric?",
            options: [
              "Beneficial: the algorithm produces more efficient routing for the company. Harmful: dispatcher job loss plus a new dependence on the routing algorithm working correctly.",
              "Purely beneficial for everyone affected, since the new algorithm will reliably produce better routing decisions than the local dispatchers it replaced ever could.",
              "Purely harmful for everyone affected, since automated dispatch is fundamentally less reliable than the local human dispatchers it replaces in every measurable way.",
              "No effect on anyone, since dispatcher work is essentially invisible to the customers who place the orders and the drivers who ultimately deliver them."
            ],
            correctAnswer: 0,
            explanation: "AP impact answers should name BOTH benefits and harms with affected parties."
          }
        ]
      }
    }
  ]
};
