export const cspSafeComputingPart5Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc5-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 5 of 7 — Encryption, Certificates, and Data Collection**

---

## Encryption

**Encryption** is the process of encoding data to prevent unauthorized access. **Decryption** is the process of decoding the data. There are two common approaches:

| Approach | Keys | Example |
|-----|----------------|---------|
| **Symmetric** | One key both encrypts and decrypts | Two friends share one secret key for their messages |
| **Public key** | A public key encrypts; a matching private key decrypts | Anyone can encrypt a message to Ana with her public key, but only Ana's private key can decrypt it |

In public key encryption, the sender does **not** need the receiver's private key to encrypt a message, but the receiver's private key **is** required to decrypt it. The math behind these methods is not on the AP exam.
      `
    },
    {
      id: "cspsc5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Lena wants to send Omar a message using public key encryption. Which key does she use to encrypt it?",
            options: [
              "Omar's private key",
              "Omar's public key",
              "Lena's private key",
              "Lena's public key"
            ],
            correctAnswer: 1,
            explanation: "The sender encrypts with the receiver's public key; only the receiver's private key can decrypt it."
          },
          {
            question: "Which statement describes symmetric encryption?",
            options: [
              "The same key both encrypts and decrypts the data.",
              "A public key encrypts and a private key decrypts.",
              "No key is needed, because the data is only hidden.",
              "The data can be decrypted only by a certificate authority."
            ],
            correctAnswer: 0,
            explanation: "Symmetric encryption uses one key for both encryption and decryption."
          }
        ]
      }
    },
    {
      id: "cspsc5-content",
      type: 'text' as const,
      content: `
## Certificate Authorities

How do you know a public key really belongs to your bank and not an impostor? **Certificate authorities** issue **digital certificates** that validate the ownership of encryption keys used in secure communications. The system is based on a **trust model**: your browser trusts certain certificate authorities, and they vouch for the sites' keys.

## Who Is Collecting Data About You?

| Collector | What it can record |
|--------|---------|
| Search engines | A history of your searches, used to suggest websites or for targeted marketing |
| Websites | A history of who has viewed their pages |
| Devices, websites, and networks | Your location: where you have been, how you got there, and how long you stayed |
| Social media | Posts that others can combine with other sources to deduce private information about you |

Personal data also has benefits: it can enhance your online experience and simplify online purchases. But commercial and governmental curation of information may be exploited if privacy and other protections are ignored.
      `
    },
    {
      id: "cspsc5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Encoding data to prevent unauthorized access is called _______.

2) Decoding encrypted data back into readable form is called _______.

3) Organizations that issue digital certificates validating who owns encryption keys are called certificate _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["encryption", "decryption", "authorities"],
        hint1: "Encoding.",
        hint2: "The reverse.",
        hint3: "They have the authority to vouch.",
        explanation: "Encryption / decryption / certificate authorities."
      }
    },
    {
      id: "cspsc5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "In public key encryption, the key needed to decrypt a message is ___",
            options: ["the receiver's private key", "the receiver's public key", "the sender's public key", "any public key at all"]
          },
          {
            label: "A phone app that records where you go and how long you stay is collecting ___",
            options: ["location data", "only photo metadata", "no personal data", "only encrypted data"]
          },
          {
            label: "A search engine that keeps your search history can use it to ___",
            options: ["suggest websites and target ads", "make your connection faster", "encrypt your future searches", "delete your browsing history"]
          }
        ],
        correctAnswers: ["the receiver's private key", "location data", "suggest websites and target ads"],
        hint1: "Private keys stay private.",
        hint2: "Where you have been.",
        hint3: "Targeted marketing.",
        explanation: "Only the receiver's private key decrypts. Programs can record your location history. Search history is used for suggestions and targeted marketing."
      }
    },
    {
      id: "cspsc5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Encryption and Data Collection

- Symmetric = one shared key. Public key = encrypt with the receiver's public key, decrypt with the receiver's private key.
- Certificate authorities issue digital certificates that validate key ownership (a trust model).
- Search engines, websites, devices, and networks all collect data about you; combined, it reveals a lot.
- You do not need encryption math for the exam.
      `
    },
    {
      id: "cspsc5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A messaging app uses public key encryption. An attacker intercepts a message that was sent to Ana. Why can't the attacker read it?",
            options: [
              "The message was deleted from the network as soon as it was sent.",
              "Only Ana's private key can decrypt it, and the attacker does not have it.",
              "The attacker would need the sender's public key, which is kept secret.",
              "Intercepted messages are automatically sent back to the original sender."
            ],
            correctAnswer: 1,
            explanation: "Messages encrypted with Ana's public key can be decrypted only with Ana's private key."
          },
          {
            question: "A browser warns that a shopping site's certificate was not issued by a trusted certificate authority. What is the most appropriate action?",
            options: [
              "Continue and enter payment details, since the warning is usually wrong.",
              "Stop, since the site's keys can't be validated and it may be an impostor.",
              "Turn off the browser's warnings so they do not appear on other sites again.",
              "Continue, but only after clearing the browser's history and cookies first."
            ],
            correctAnswer: 1,
            explanation: "Certificate authorities validate who owns the encryption keys; without that, the connection could belong to an impostor."
          }
        ]
      }
    }
  ]
};
