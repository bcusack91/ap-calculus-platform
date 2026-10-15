export const cspFaultToleranceSecurityPart7Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts7-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Fault Tolerance & Security
      `
    },
    {
      id: "cspfts7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "CIA in security stands for ___",
            options: [
              "Confidentiality, Integrity, Availability",
              "Confidentiality, Identity, Authentication",
              "Cryptography, Integrity, Authorization",
              "Control, Integrity, Accountability"
            ],
            correctAnswer: 0,
            explanation: "CIA = Confidentiality, Integrity, Availability."
          },
          {
            question: "A system that keeps serving users when one server crashes is ___",
            options: [
              "scalable",
              "fault-tolerant",
              "high-performance",
              "secure"
            ],
            correctAnswer: 1,
            explanation: "Fault tolerance = continued operation despite failures."
          }
        ]
      }
    },
    {
      id: "cspfts7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Fault tolerance | Continues operating during failures. |
| Redundancy / replication / failover | Mechanisms enabling fault tolerance. |
| Backup | Point-in-time data snapshot. |
| CIA | Confidentiality, Integrity, Availability. |
| Symmetric / asymmetric encryption | One key vs. key pair. |
| Hash | One-way digest. |
| MFA | Multi-factor authentication. |
| Phishing / DDoS / ransomware | Common threats. |
| Defense in depth | Layered defenses. |
| Zero trust | Verify every request. |
| Supply-chain attack | Compromise a trusted dependency. |

## Common Pitfalls

- Confusing replication and backup.
- Storing passwords in plaintext or reversible encryption.
- Treating security as a one-time install.
- No incident plan / runbooks / drills.
- Trusting the network instead of verifying each request.
      `
    },
    {
      id: "cspfts7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The "I" in CIA stands for _______.

2) An attack that overwhelms a service to deny availability is a _______ attack.

3) A second proof of identity beyond the password is the second _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["integrity", "DDoS", "factor"],
        hint1: "Unaltered data.",
        hint2: "Distributed denial.",
        hint3: "MFA.",
        explanation: "Integrity / DDoS / second factor."
      }
    },
    {
      id: "cspfts7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A password should be ___",
            options: ["salted-hashed using a slow KDF (bcrypt / Argon2 / scrypt)", "hashed using a fast unsalted function (MD5 / SHA-1)", "encrypted reversibly with one shared key (AES / DES)", "stored in plaintext so support can read it (no hashing)"]
          },
          {
            label: "TLS protects ___",
            options: ["confidentiality and integrity in transit", "confidentiality and integrity of data at rest", "availability and uptime during a DDoS attack", "users from phishing sites and fake login pages"]
          },
          {
            label: "A blameless post-mortem focuses on ___",
            options: ["systemic causes and improvements, not individual blame", "the individual who caused the outage, not the process", "speed of recovery only, not underlying causes", "identifying who to discipline, not process changes"]
          }
        ],
        correctAnswers: ["salted-hashed using a slow KDF (bcrypt / Argon2 / scrypt)", "confidentiality and integrity in transit", "systemic causes and improvements, not individual blame"],
        hint1: "Slow + salted hash.",
        hint2: "In-transit protection.",
        hint3: "Systemic > blame.",
        explanation: "Slow hashed passwords; TLS in transit; blameless post-mortems improve systems."
      }
    },
    {
      id: "cspfts7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- CIA framing for security questions.
- Replication ≠ backup.
- Defense in depth, MFA, TLS, hashed passwords.
- Process matters: patches, monitoring, drills, post-mortems.
      `
    },
    {
      id: "cspfts7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school upgrades to MFA for student accounts. The most accurate framing is ___",
            options: [
              "no real improvement, since attackers who steal a password can also skip the second step.",
              "it reduces the risk that a stolen or phished password alone lets an attacker in.",
              "it removes the need for strong passwords, since the second factor alone protects accounts.",
              "it fully prevents phishing, since students can no longer be tricked into sharing any codes."
            ],
            correctAnswer: 1,
            explanation: "MFA dramatically reduces credential-based account takeover."
          },
          {
            question: "A team's backup strategy is \"the database has 3 replicas.\" The most CSP-aligned critique is ___",
            options: [
              "the strategy is perfect because three live replicas are equivalent to three independent backups.",
              "replicas copy deletes and corruption too; add separate point-in-time backups kept offline.",
              "three replicas are too many; one primary and one replica would be safer against deletes.",
              "the replicas must be in the same data center so they stay perfectly in sync with no lag."
            ],
            correctAnswer: 1,
            explanation: "Replicas ≠ backups; need separate offline / immutable backups."
          }
        ]
      }
    }
  ]
};
