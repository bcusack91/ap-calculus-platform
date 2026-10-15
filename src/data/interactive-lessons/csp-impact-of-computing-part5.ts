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

## Innovations Get Used in New Ways

The AP framework describes how the effects of computing innovations change once people start using them:

| Idea | Example |
|------|---------|
| The way people complete tasks changes to incorporate new innovations. | Students submit homework online instead of on paper. |
| Innovations get used in ways their creators did not intend. | The World Wide Web was first meant only for scientists to share information quickly. |
| Not every effect is anticipated in advance. | Location sharing built for maps is also used to track people. |
| Computing has increased creativity in other fields. | Medicine, engineering, communications, and the arts all use computing to create new things. |
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
              "The ARPANET research of the 1960s, which first linked distant university computers by packet switching.",
              "Mass adoption of smartphones that carry GPS and cameras and stay connected to the network all day.",
              "The spread of floppy disks in the 1980s as a cheap way to move personal files between computers.",
              "The exhaustion of IPv4 addresses in the 2010s, which pushed internet providers toward IPv6."
            ],
            correctAnswer: 1,
            explanation: "Smartphones turned every person into a continuous source of fine-grained data."
          },
          {
            question: "Generative AI most clearly raises new questions about ___",
            options: [
              "the speed of home internet connections, since generated videos take longer to download than text.",
              "authorship and attribution when models trained on copyrighted human work produce new content.",
              "how computers store numbers in binary, since AI models represent their outputs as patterns of bits.",
              "whether students should learn to type, since AI tools can produce text without any keyboard input."
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

These are exactly the kinds of "evaluate the impact" scenarios the AP exam's multiple-choice questions love.
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
            label: "The World Wide Web was originally intended for ___",
            options: ["rapid sharing of information among scientists", "online shopping and advertising for businesses", "social media posts shared among friends", "streaming music and video to the public"]
          },
          {
            label: "Automation usually changes ___",
            options: ["the mix and distribution of jobs, not their total elimination", "the total number of jobs, eliminating nearly all of them quickly", "only low-skill jobs, leaving every other industry unchanged", "nothing about the job market, since new tools only add work"]
          },
          {
            label: "Using someone else's work without permission and presenting it as your own is ___",
            options: ["plagiarism", "crowdsourcing", "open access", "citizen science"]
          }
        ],
        correctAnswers: ["rapid sharing of information among scientists", "the mix and distribution of jobs, not their total elimination", "plagiarism"],
        hint1: "An example of an innovation used beyond its intended purpose.",
        hint2: "Net effects, not \"no jobs\".",
        hint3: "It may have legal consequences.",
        explanation: "The Web began as a tool for scientists. Automation = job-mix shifts. Presenting others' work as your own is plagiarism."
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
- The best answer choice usually names a SPECIFIC affected group.
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
              "No concern arises, since an artistic style cannot be owned and copying it needs no consent.",
              "The artist's work was likely used as training data with no consent or pay, raising IP and attribution concerns.",
              "The main concern is image quality, since AI posters are lower resolution than an artist's work.",
              "The main concern is bandwidth, since AI-generated posters are larger files than hand-made ones."
            ],
            correctAnswer: 1,
            explanation: "AI-generated content raises consent, attribution, and livelihood questions for the source artists."
          },
          {
            question: "A delivery company replaces local dispatchers with an algorithm. Which framing is the most complete impact analysis?",
            options: [
              "Benefit: more efficient routing for the business. Harm: dispatchers lose jobs and the firm depends on the software.",
              "Benefit only: the algorithm routes better than dispatchers did, so no one involved is made worse off.",
              "Harm only: automated dispatch is less reliable than people in every case, so nothing is gained.",
              "No effect: dispatch work is invisible to customers and drivers, so nobody notices the change."
            ],
            correctAnswer: 0,
            explanation: "A complete impact analysis names BOTH benefits and harms and who is affected by each."
          }
        ]
      }
    }
  ]
};
