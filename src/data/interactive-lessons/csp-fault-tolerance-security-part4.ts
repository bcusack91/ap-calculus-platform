export const cspFaultToleranceSecurityPart4Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts4-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 4 of 7 — Connections & Interactions**

---

## Security & Fault Tolerance Connect Across CSP

| Connection | Why |
|-----------|-----|
| Security ↔ Networks | Most attacks come over the network. |
| Fault tolerance ↔ Systems | Systems fail; designs must adapt. |
| Security ↔ Data | Data must be protected throughout its lifecycle. |
| Security ↔ Impact | Breaches have human consequences. |
      `
    },
    {
      id: "cspfts4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A breach exposing children's data has primarily ___",
            options: [
              "no impact, since children's data is automatically anonymized by data-protection laws.",
              "serious privacy and safety consequences for vulnerable users and their families.",
              "transport-layer-security implications only, with no human-level harm involved.",
              "compression-related issues only, because the breached files happened to be small."
            ],
            correctAnswer: 1,
            explanation: "Breaches harm real people."
          },
          {
            question: "A system that crashes whenever any single component fails is the OPPOSITE of ___",
            options: [
              "encrypted — protecting data confidentiality through cryptographic algorithms",
              "fault-tolerant — continuing to operate even when some components fail",
              "compressed — storing the same content in fewer bits than its raw form",
              "routed — forwarded between systems by intermediate network devices"
            ],
            correctAnswer: 1,
            explanation: "Fault tolerance = survives failures."
          }
        ]
      }
    },
    {
      id: "cspfts4-content",
      type: 'text' as const,
      content: `
## Defense In Depth

No single defense is enough. Layer them:

| Layer | Defense |
|-------|---------|
| Perimeter | Firewall, DDoS scrubbing. |
| Network | TLS, segmentation. |
| Host | Patching, hardening. |
| App | Input validation, least privilege. |
| Data | Encryption-at-rest, backups. |
| Identity | MFA, strong auth. |
| Process | Code review, secure SDLC. |

If one layer fails, others still hold.

## Threat Modeling

Ask: who would attack this, why, and how? Common categories: nation-states, organized crime, opportunistic attackers, disgruntled insiders, accidental damage.

## Security Is A Process, Not A Product

Tools alone don't make a system secure. Patching, monitoring, and incident response matter as much as initial design.
      `
    },
    {
      id: "cspfts4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Layering multiple security defenses is called defense in _______.

2) A formal exercise to ask "who would attack this and how" is called _______ modeling.

3) A system's ability to keep responding during partial failure is _______ tolerance.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["depth", "threat", "fault"],
        hint1: "Layered defenses.",
        hint2: "Adversary thinking.",
        hint3: "Survival.",
        explanation: "Depth, threat modeling, fault tolerance."
      }
    },
    {
      id: "cspfts4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Security is best treated as ___",
            options: ["an ongoing process: patch, monitor, respond", "a one-time install", "a feature toggle", "a compression setting"]
          },
          {
            label: "Defense in depth means ___",
            options: ["layering multiple defenses so a single failure does not breach the system", "one strong wall and nothing else", "no defenses at all", "TLS only"]
          },
          {
            label: "A breach plan that includes detection + response is part of ___",
            options: ["incident-response readiness", "compression", "IPv6 routing", "lossy encoding"]
          }
        ],
        correctAnswers: ["an ongoing process: patch, monitor, respond", "layering multiple defenses so a single failure does not breach the system", "incident-response readiness"],
        hint1: "Process, not product.",
        hint2: "Layered defense.",
        hint3: "Detection + response.",
        explanation: "Process / depth / response are core."
      }
    },
    {
      id: "cspfts4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Security

- Defense in depth — layered defenses.
- Threat modeling identifies WHO and HOW.
- Backups + replication + monitoring + response = comprehensive resilience.
      `
    },
    {
      id: "cspfts4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A startup fixes a critical bug but never deploys patches automatically. Six months later, an unpatched server is breached. The most CSP-aligned lesson is ___",
            options: [
              "patches are optional once the original code has been initially reviewed and tested.",
              "security is an ongoing process; automated patching and monitoring are part of the posture.",
              "transport-layer security on inbound traffic would have made the unpatched bug irrelevant.",
              "compressing the server's log files more aggressively would have prevented the breach."
            ],
            correctAnswer: 1,
            explanation: "Process matters more than one-time fixes."
          },
          {
            question: "A health app that stores patient records would benefit MOST from ___",
            options: [
              "just transport-layer security on incoming requests and nothing else added on top.",
              "defense in depth: TLS, encryption at rest, MFA, audit logs, regular pen-tests, breach plan.",
              "just multi-factor authentication on user logins, with no other defenses added.",
              "just nightly backups, with no other defenses added on top of the backup process."
            ],
            correctAnswer: 1,
            explanation: "Sensitive data needs layered defenses."
          }
        ]
      }
    }
  ]
};
