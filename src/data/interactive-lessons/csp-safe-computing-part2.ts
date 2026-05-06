export const cspSafeComputingPart2Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc2-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 2 of 7 — Key Processes**

---

## Safe Computing Is About Personal Practice

CSP's "safe computing" topic focuses on what individuals and organizations DO to protect themselves: choices, habits, and configuration — not just the underlying tech.

| Practice | What it does |
|----------|-------------|
| **Strong unique passwords** | Limits damage of any one breach. |
| **Multi-factor authentication** | Makes a stolen password insufficient. |
| **Software updates** | Closes known vulnerabilities. |
| **Backups** | Recover from ransomware / mistakes. |
| **Awareness of phishing** | Block attacks that exploit users, not code. |
      `
    },
    {
      id: "cspsc2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A breach exposes the password \"qwerty123\" used at 14 different sites by the same person. The biggest direct consequence is ___",
            options: [
              "no measurable impact, since each site stores its own independent password copy.",
              "attackers can try the same password on the user's other sites — credential stuffing.",
              "the user's connection to those sites runs slightly slower because of the breach.",
              "the user's browser refuses to compress requests sent to any of the breached sites."
            ],
            correctAnswer: 1,
            explanation: "Password reuse + breach = credential stuffing."
          },
          {
            question: "A user delays installing OS updates for 6 months. The biggest practical risk is ___",
            options: [
              "no risk at all, since the operating system already shipped with security defaults.",
              "known vulnerabilities patched in those updates remain exploitable on this device.",
              "the device's file compression algorithm becomes slightly slower than freshly patched ones.",
              "the device removes its support for transport-layer security on outbound connections."
            ],
            correctAnswer: 1,
            explanation: "Patches close known vulnerabilities."
          }
        ]
      }
    },
    {
      id: "cspsc2-content",
      type: 'text' as const,
      content: `
## Password Hygiene

| Anti-pattern | Better practice |
|-------------|----------------|
| Same password everywhere | Use a password manager + unique passwords. |
| Short / common passwords | Long passphrases or generated random strings. |
| Sharing passwords | Use account delegation features. |
| Writing them on a sticky note | Encrypted vault. |

## Phishing And Social Engineering

Most modern breaches start with a person, not a zero-day. Recognize warning signs:

- Urgency / threats ("Your account will be locked in 24 hours").
- Mismatched sender / domain.
- Generic greetings.
- Asking for credentials, MFA codes, or money.
- Links that don't match where they claim to go.

## Personal Data Footprint

Every account is a target. Reduce risk by:

- Closing unused accounts.
- Limiting what each app can access (permissions).
- Reviewing privacy settings periodically.
      `
    },
    {
      id: "cspsc2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Reusing the same password across sites is risky because of the _______ stuffing attack.

2) A separate device or app providing a one-time code is the second _______ in MFA.

3) A common starting point of attacks targets users via _______ (deceptive emails, texts, or calls).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["credential", "factor", "phishing"],
        hint1: "Reuse attack name.",
        hint2: "MFA term.",
        hint3: "Social engineering.",
        explanation: "Credential stuffing, second factor, phishing."
      }
    },
    {
      id: "cspsc2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A password manager primarily helps by ___",
            options: ["enabling unique strong passwords for every site without memorizing them", "shortening passwords", "compressing data", "replacing TLS"]
          },
          {
            label: "An email asking for an MFA code \"to verify your account\" is most likely ___",
            options: ["phishing — never share MFA codes", "a legitimate request", "a CDN issue", "a TLS handshake"]
          },
          {
            label: "Limiting an app's permissions reduces ___",
            options: ["the data it can access if compromised", "compression ratio", "TLS overhead", "IPv6 routing"]
          }
        ],
        correctAnswers: ["enabling unique strong passwords for every site without memorizing them", "phishing — never share MFA codes", "the data it can access if compromised"],
        hint1: "Manager solves reuse.",
        hint2: "Codes are private.",
        hint3: "Least privilege.",
        explanation: "Password managers, never-share-codes, least privilege."
      }
    },
    {
      id: "cspsc2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Safe Computing Basics

- Unique strong passwords + password manager + MFA = the modern baseline.
- Don't share MFA codes; legitimate services never ask.
- Patch promptly; phishing is the most common entry point.
      `
    },
    {
      id: "cspsc2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user gets a text \"From [bank]: confirm transfer with code 482911\". They didn't initiate a transfer. The most appropriate response is ___",
            options: [
              "reply to the text with the code so the bank can finalize the transfer for them.",
              "don't share the code; contact the bank directly using a known channel — likely phishing.",
              "click any link in the text to investigate the source of the unexpected transfer.",
              "reset every personal password without first contacting the bank to verify the text."
            ],
            correctAnswer: 1,
            explanation: "Never share codes; verify out-of-band."
          },
          {
            question: "A school encourages students to use the same password on every system \"for convenience\". The most CSP-aligned critique is ___",
            options: [
              "no critique — password reuse is a reasonable trade-off for student convenience here.",
              "a single breach exposes every system; teach unique passwords + a manager + MFA instead.",
              "transport-layer security on each login form fully replaces the need for unique passwords.",
              "compressing each password before storage would resolve the underlying reuse problem here."
            ],
            correctAnswer: 1,
            explanation: "Reuse compounds breach impact."
          }
        ]
      }
    }
  ]
};
