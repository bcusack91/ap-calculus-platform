export const cspFaultToleranceSecurityPart3Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts3-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 3 of 7 — Patterns & Examples: Authentication and Encryption**

---

## Authentication: Proving Who You Are

**Authentication** measures protect devices and information from unauthorized access. Two examples the AP exam names:

- A **strong password** is easy for the user to remember but difficult for someone else to guess based on knowledge of that user.
- **Multifactor authentication (MFA)** grants access only after the user presents several separate pieces of evidence, typically from at least two of these categories:

| Category | Meaning | Example |
|----------|---------|---------|
| **Knowledge** | Something you know | A password or PIN |
| **Possession** | Something you have | A phone that receives a code |
| **Inherence** | Something you are | A fingerprint or face scan |

Each MFA step adds a new layer of security that must be broken to gain unauthorized access.
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
            question: "Data sent over public Wi-Fi through a rogue access point can be ___",
            options: [
              "intercepted, analyzed, and modified by the attacker",
              "protected, encrypted, and hidden by the public network",
              "sent only to the device that the user intended to reach",
              "deleted before it reaches any device on the network"
            ],
            correctAnswer: 0,
            explanation: "A rogue access point gives unauthorized access to a network, and data sent through it can be intercepted, analyzed, and modified."
          },
          {
            question: "Which pair of login steps is an example of multifactor authentication?",
            options: [
              "A password plus a second, different password",
              "A password plus a code sent to the user's phone",
              "A username plus a password that is typed twice",
              "A security question plus a second security question"
            ],
            correctAnswer: 1,
            explanation: "A password (knowledge) plus a phone code (possession) uses two different categories; the other choices repeat the knowledge category."
          }
        ]
      }
    },
    {
      id: "cspfts3-content",
      type: 'text' as const,
      content: `
## Encryption

**Encryption** is the process of encoding data to prevent unauthorized access. **Decryption** is the process of decoding the data.

| Approach | How it works |
|-------|-----|
| **Symmetric** | One key is used for both encryption and decryption. |
| **Public key** | A public key encrypts; a private key decrypts. The sender does not need the receiver's private key to encrypt, but the receiver's private key is required to decrypt. |

**Certificate authorities** issue digital certificates that validate the ownership of encryption keys used in secure communications; they are based on a trust model. You do not need to know the math of any encryption method; that is outside the AP exam.

## Protecting a Computer

| Protection | Why it helps |
|-----------|--------------|
| Virus and malware scanning software | Helps protect a system against infection. |
| Regular software updates | All real-world systems have errors or design flaws that can be exploited; updates fix them. |
| Reviewing program permissions | Users can control what information programs collect about them. |
      `
    },
    {
      id: "cspfts3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A phone that receives a login code belongs to the _______ category of authentication factors.

2) Encryption that uses one shared key for both encryption and decryption is called _______ encryption.

3) Decoding encrypted data back into readable form is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["possession", "symmetric", "decryption"],
        hint1: "Something you have.",
        hint2: "One key both ways.",
        hint3: "The reverse of encryption.",
        explanation: "A phone is possession. One shared key = symmetric. Decoding is decryption."
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
            label: "A fingerprint scan belongs to the ___ authentication category",
            options: ["inherence (something you are)", "knowledge (something you know)", "possession (something you have)", "encryption (something you hide)"]
          },
          {
            label: "A strong password is ___",
            options: ["easy for you to remember but hard for others to guess", "your pet's name followed by the year you were born", "short enough to be typed quickly on any phone", "the same one you use on every website you visit"]
          },
          {
            label: "Multifactor authentication (MFA) defends against ___",
            options: ["stolen passwords being enough to log in alone", "a server losing power during a storm", "malware already running on the user's unlocked device", "lost data being unrecoverable after a disk failure"]
          }
        ],
        correctAnswers: ["inherence (something you are)", "easy for you to remember but hard for others to guess", "stolen passwords being enough to log in alone"],
        hint1: "Part of your body.",
        hint2: "Memorable to you, not guessable by others.",
        hint3: "Two factors.",
        explanation: "Fingerprints are inherence. A strong password is memorable to you and hard for others to guess. MFA means a password alone is not enough."
      }
    },
    {
      id: "cspfts3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Security Basics

- MFA uses at least two categories: knowledge, possession, inherence.
- Symmetric = one shared key. Public key = public key encrypts, private key decrypts.
- Certificate authorities validate who owns encryption keys.
- Malware scanning, regular updates, and reviewing permissions all protect a system.
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
            question: "A company finds a design flaw in its software that attackers could exploit and releases an update that fixes it. Which user action best protects the user's computer?",
            options: [
              "Skip the update, since new versions of software usually add new flaws.",
              "Install the update promptly, since it repairs the flaw.",
              "Turn off malware scanning, since the update makes scanning unnecessary.",
              "Download the update from a free sharing site instead of the company's site."
            ],
            correctAnswer: 1,
            explanation: "Regular software updates help fix errors that could compromise a computing system."
          },
          {
            question: "A user enables MFA. An attacker who steals their password ___",
            options: [
              "logs in immediately, since the password alone is enough.",
              "still cannot log in without producing the second factor required by MFA.",
              "is unaffected, since MFA only guards against phishing.",
              "logs in anyway, since MFA only applies on new devices."
            ],
            correctAnswer: 1,
            explanation: "Each MFA step adds a layer that must be broken, so a password alone no longer grants access."
          }
        ]
      }
    }
  ]
};
