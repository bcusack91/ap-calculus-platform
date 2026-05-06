export const cspFaultToleranceSecurityPart3Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts3-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 3 of 7 — Patterns & Examples**

---

## Security Has Three Goals: CIA

| Goal | Meaning |
|------|---------|
| **Confidentiality** | Only authorized parties can read. |
| **Integrity** | Data isn't altered without detection. |
| **Availability** | The service keeps responding. |

Different threats target different goals; defenses are different for each.
      `
    },
    {
      id: "cspfts3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A man-in-the-middle eavesdropping on traffic primarily threatens ___",
            options: [
              "confidentiality, since the attacker can read messages they were never authorized to see",
              "integrity only, leaving the secrecy of the conversation entirely undisturbed",
              "availability only, by preventing the legitimate parties from communicating",
              "compression efficiency, by injecting noise that defeats lossless coders downstream"
            ],
            correctAnswer: 0,
            explanation: "Eavesdropping = confidentiality breach."
          },
          {
            question: "A DDoS attack primarily threatens ___",
            options: [
              "confidentiality, by exposing private user data stored on the targeted service",
              "integrity, by silently rewriting the data the targeted service stores on disk",
              "availability, by overwhelming the service so legitimate users cannot reach it",
              "compression efficiency, by stuffing data with patterns that codecs cannot exploit"
            ],
            correctAnswer: 2,
            explanation: "DDoS overwhelms a service → availability loss."
          }
        ]
      }
    },
    {
      id: "cspfts3-content",
      type: 'text' as const,
      content: `
## Common Threats And Defenses

| Threat | Defense |
|--------|---------|
| Eavesdropping | TLS / encryption in transit. |
| Tampering | Digital signatures, message-authentication codes (MAC). |
| Phishing | User awareness, MFA, anti-phishing tools. |
| Malware | Updates, sandboxing, antivirus, code signing. |
| DDoS | Rate limiting, CDNs, scrubbing. |
| SQL injection | Parameterized queries, input validation. |
| Credential theft | MFA, password managers, breached-password checks. |

## Symmetric vs. Asymmetric Encryption

| Style | Key |
|-------|-----|
| **Symmetric** | Same key encrypts and decrypts (AES). |
| **Asymmetric** | Public key encrypts; private key decrypts (RSA, ECC). |

Real systems use both: asymmetric to safely exchange a symmetric key, then symmetric for bulk traffic.

## Hashing Vs Encryption

| Property | Hash | Encryption |
|----------|------|-----------|
| Reversible? | No | Yes (with key) |
| Use | Verify integrity, store password hashes | Confidentiality |

A password should be **hashed** (with salt + slow algorithm), not encrypted.
      `
    },
    {
      id: "cspfts3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The "C" in CIA stands for _______.

2) Encryption that uses one shared key is called _______.

3) A one-way function that produces a fixed-size digest is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["confidentiality", "symmetric", "hash"],
        hint1: "Privacy.",
        hint2: "One key both ways.",
        hint3: "Digest function.",
        explanation: "Confidentiality, symmetric, hash."
      }
    },
    {
      id: "cspfts3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "TLS / HTTPS protects ___",
            options: ["data confidentiality + integrity in transit", "data on disk", "against compression", "against phishing alone"]
          },
          {
            label: "A password database should store ___",
            options: ["salted hashes (e.g., bcrypt / Argon2), not plaintext or reversible encryption", "plaintext for fast retrieval", "simple MD5 hashes only", "encrypted strings only"]
          },
          {
            label: "Multi-factor authentication (MFA) defends against ___",
            options: ["stolen passwords being enough to log in alone", "all malware", "all DDoS", "all phishing forever"]
          }
        ],
        correctAnswers: ["data confidentiality + integrity in transit", "salted hashes (e.g., bcrypt / Argon2), not plaintext or reversible encryption", "stolen passwords being enough to log in alone"],
        hint1: "HTTPS in transit.",
        hint2: "Slow salted hashes.",
        hint3: "Two factors.",
        explanation: "TLS = transit; salted hashes for passwords; MFA blocks credential reuse."
      }
    },
    {
      id: "cspfts3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Security Basics

- CIA: confidentiality / integrity / availability.
- Match defense to threat.
- Hashes ≠ encryption — passwords get hashed.
- Real systems use symmetric + asymmetric together.
      `
    },
    {
      id: "cspfts3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A site stores user passwords as plaintext \"for support to look up if needed\". The most accurate critique is ___",
            options: [
              "no concern — storing plaintext passwords is acceptable as long as the database is private.",
              "a single breach exposes every user's password instantly; passwords should be salted-hashed.",
              "compression of the password column would resolve the underlying security problem here.",
              "transport-layer security on incoming login requests fully replaces the need for hashing."
            ],
            correctAnswer: 1,
            explanation: "Plaintext password storage is a fundamental security failure."
          },
          {
            question: "A user enables MFA. An attacker who steals their password ___",
            options: [
              "logs in immediately, since the password alone is sufficient credential material.",
              "still cannot log in without producing the second factor required by MFA.",
              "is unaffected by MFA, which only protects against unrelated phishing attacks.",
              "logs in only over a transport-layer-secured connection but otherwise succeeds."
            ],
            correctAnswer: 1,
            explanation: "MFA breaks the \"password alone is enough\" assumption."
          }
        ]
      }
    }
  ]
};
