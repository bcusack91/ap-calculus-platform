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
| **Backups** | Recover from lost, damaged, or infected files. |
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
              "attackers can reuse the leaked password to break into the user's accounts elsewhere.",
              "only the breached site's account is at risk, since passwords are checked per site.",
              "the user's other accounts lock automatically once the password appears in a breach."
            ],
            correctAnswer: 1,
            explanation: "A leaked password that was reused lets attackers into every account that shares it."
          },
          {
            question: "A user delays installing OS updates for 6 months. The biggest practical risk is ___",
            options: [
              "no risk at all, since the operating system already shipped with security defaults.",
              "known vulnerabilities patched in those updates remain exploitable on this device.",
              "the device slowly loses storage space as older update files pile up unused.",
              "the device's antivirus stops working, since it needs each update to start."
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
| Same password everywhere | A unique password for each account. |
| Short / common passwords | Long passphrases that are easy for you to remember but hard for others to guess. |
| Passwords based on personal facts | Avoid pet names, birthdays, and other things people can learn about you. |
| Password alone | Add multifactor authentication. |

## Phishing And Social Engineering

**Phishing** is a technique that attempts to trick a user into providing personal information, which can then be used to access sensitive accounts such as bank accounts and email. Many attacks start with a person, not a flaw in the software. Recognize warning signs:

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

1) A password that is easy for you to remember but hard for others to guess is called a _______ password.

2) A separate device or app providing a one-time code is the second _______ in MFA.

3) A common starting point of attacks targets users via _______ (deceptive emails, texts, or calls).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["strong", "factor", "phishing"],
        hint1: "The opposite of weak.",
        hint2: "MFA term.",
        hint3: "Social engineering.",
        explanation: "Strong password, second factor, phishing."
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
            label: "Regular software updates primarily help by ___",
            options: ["fixing errors and design flaws that attackers could exploit", "letting you reuse one memorable password safely across every site", "encrypting your web traffic so no one on the network can see it", "replacing two-factor authentication on every account you own"]
          },
          {
            label: "An email asking for an MFA code \"to verify your account\" is most likely ___",
            options: ["phishing — never share MFA codes", "legitimate — reply with the code", "a DDoS attack — flooding your inbox", "a keylogger — malware on your PC"]
          },
          {
            label: "Limiting an app's permissions reduces ___",
            options: ["the data it can access if compromised", "the need for MFA on your accounts", "the number of updates it needs", "its encryption strength in transit"]
          }
        ],
        correctAnswers: ["fixing errors and design flaws that attackers could exploit", "phishing — never share MFA codes", "the data it can access if compromised"],
        hint1: "All real-world systems have flaws.",
        hint2: "Codes are private.",
        hint3: "Least privilege.",
        explanation: "Updates fix exploitable flaws; never share MFA codes; reviewing permissions limits what programs can collect."
      }
    },
    {
      id: "cspsc2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Safe Computing Basics

- Unique strong passwords + MFA = the baseline.
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
              "don't share the code and call the bank on a number you already know is real.",
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
              "one breach would expose every system, so teach unique strong passwords and MFA.",
              "longer shared passwords would fully solve the problem, since length matters more than reuse.",
              "reuse is safe as long as the school changes the shared password once every semester."
            ],
            correctAnswer: 1,
            explanation: "Reuse compounds breach impact."
          }
        ]
      }
    }
  ]
};
