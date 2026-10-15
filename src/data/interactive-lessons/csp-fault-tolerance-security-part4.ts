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
              "only financial costs for the company, since children have no credit to steal.",
              "little lasting effect, since children's data changes as they grow older."
            ],
            correctAnswer: 1,
            explanation: "Breaches harm real people."
          },
          {
            question: "A system that crashes whenever any single component fails is the OPPOSITE of ___",
            options: [
              "scalable — handling more users by adding servers as demand grows",
              "fault-tolerant — continuing to run even when some parts break",
              "secure — keeping data safe from attackers who try to break in",
              "efficient — finishing tasks using as little time and memory as possible"
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
            options: ["an ongoing process: patch, monitor, respond", "a one-time setup: install, configure, done", "a product purchase: buy antivirus, then forget", "a launch checklist: audit once before release"]
          },
          {
            label: "Defense in depth means ___",
            options: ["layering multiple defenses so a single failure does not breach the system", "relying on one very strong firewall so attackers never get past the perimeter", "hiding the system's design so attackers cannot learn how it works", "encrypting all data once so no other defenses are needed"]
          },
          {
            label: "A breach plan that includes detection + response is part of ___",
            options: ["incident-response readiness", "firewall configuration", "password-strength policy", "encryption key management"]
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
              "security is ongoing, so updates must reach every server promptly and be monitored.",
              "a strong firewall in front of the server would have made applying the patch unnecessary.",
              "the original code review should have caught the bug, so the breach was an unavoidable fluke."
            ],
            correctAnswer: 1,
            explanation: "Process matters more than one-time fixes."
          },
          {
            question: "A health app that stores patient records would benefit MOST from ___",
            options: [
              "one very strong firewall, since a single solid barrier keeps all attackers out.",
              "defense in depth, layering encryption, MFA, audit logs, and backups",
              "encryption in transit alone, since stored records are already safe on the server.",
              "strong passwords alone, since MFA, logs, and backups add cost without protection."
            ],
            correctAnswer: 1,
            explanation: "Sensitive data needs layered defenses."
          }
        ]
      }
    }
  ]
};
