export const cspSafeComputingPart7Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc7-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Safe Computing
      `
    },
    {
      id: "cspsc7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which is most clearly NOT safe-computing best practice?",
            options: [
              "Using a different strong password on every site.",
              "Turning on MFA for email and banking accounts.",
              "Sharing the same password everywhere \"for convenience\".",
              "Installing software updates soon after release."
            ],
            correctAnswer: 2,
            explanation: "Password reuse is the antithesis of safe computing."
          },
          {
            question: "A \"rogue access point\" is ___",
            options: [
              "a router that forwards packets along a redundant path.",
              "a wireless device that gives unauthorized entry to a network.",
              "a certificate authority that issues digital certificates.",
              "a program that records every keystroke a user types."
            ],
            correctAnswer: 1,
            explanation: "A rogue access point gives unauthorized access to secure networks, and data sent through it can be intercepted."
          }
        ]
      }
    },
    {
      id: "cspsc7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| PII | Information that identifies, links, relates, or describes a person. |
| Strong password | Easy for you to remember, hard for others to guess. |
| MFA | Access only after evidence from two or more categories: know, have, are. |
| Encryption / decryption | Encoding data to prevent unauthorized access / decoding it. |
| Symmetric / public key | One shared key / public key encrypts, private key decrypts. |
| Certificate authority | Issues digital certificates that validate ownership of encryption keys. |
| Malware / virus | Software meant to damage or control a system / a program that copies itself. |
| Phishing | Tricking a user into providing personal information. |
| Keylogging | Recording keystrokes to steal passwords. |
| Rogue access point | A wireless access point that gives unauthorized access to a network. |

## Common Pitfalls

- Reusing passwords across sites.
- Skipping MFA on email.
- Sharing MFA codes.
- Clicking past certificate warnings.
- Leaving default device credentials.
- Downloading software from untrustworthy sites.
- Treating safe computing as one-time, not ongoing.
      `
    },
    {
      id: "cspsc7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Information that identifies a specific person is called personally identifiable information, or _______.

2) A program that records every keystroke to steal passwords is used for _______.

3) Organizations that issue digital certificates are called certificate _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["PII", "keylogging", "authorities"],
        hint1: "Three-letter abbreviation.",
        hint2: "Key + logging.",
        hint3: "They have the authority to vouch for keys.",
        explanation: "PII / keylogging / certificate authorities."
      }
    },
    {
      id: "cspsc7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A password should be ___",
            options: ["unique per site, and hard for others to guess", "identical on every site, so it is easy to remember", "short and simple, so it can be typed quickly", "your pet's name plus your birth year, for easy recall"]
          },
          {
            label: "A \"click any link to verify\" email is ___",
            options: ["highly suspicious — verify out-of-band first", "probably safe — click the link to check", "safe if it has a logo — banks use logos", "harmless — spam filters block bad links"]
          },
          {
            label: "Once information is placed online, it is ___",
            options: ["difficult to delete, since it can be copied and reshared", "deleted automatically after a short time by most sites", "visible only to the person who first posted it online", "impossible for employers or strangers to ever view"]
          }
        ],
        correctAnswers: ["unique per site, and hard for others to guess", "highly suspicious — verify out-of-band first", "difficult to delete, since it can be copied and reshared"],
        hint1: "Uniqueness.",
        hint2: "Verify first.",
        hint3: "Emails get forwarded; posts get reshared.",
        explanation: "Unique strong passwords; verify before clicking; online information is hard to remove."
      }
    },
    {
      id: "cspsc7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Personal safe computing = strong unique passwords + MFA + updates + malware scanning + skepticism.
- Know how unauthorized access is gained: phishing, keylogging, rogue access points, malicious links, untrustworthy downloads.
- Encryption: symmetric vs public key; certificate authorities validate keys.
- PII can be combined, is hard to delete once online, and can be used to steal an identity.
- Safe computing affects others connected to you.
      `
    },
    {
      id: "cspsc7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A grandparent forwards \"click here to claim a prize\" emails. The CSP-aligned response is ___",
            options: [
              "mock them for falling for an obvious scam and refuse to discuss safer practices with them.",
              "gently explain how phishing works and help turn on MFA and browser protection.",
              "recommend they stop using email entirely, since older adults cannot learn to spot scams.",
              "unsubscribe them from every mailing list, since that blocks all future phishing emails."
            ],
            correctAnswer: 1,
            explanation: "Phishing tricks users into giving up information; explaining it and adding MFA protects the account even if a password is stolen."
          },
          {
            question: "A school deploys 1,000 student laptops. The single most impactful safe-computing default is ___",
            options: [
              "no special default — each student should configure their own laptop without any baseline policy.",
              "enforce MFA on student accounts, OS auto-updates, full-disk encryption, and unique passwords.",
              "configure one shared admin account, a common password, and no lock screen on every laptop.",
              "disable operating-system updates on every laptop so students are not interrupted by restarts."
            ],
            correctAnswer: 1,
            explanation: "MFA, regular updates, encryption, and strong unique passwords are the protections the AP framework names."
          }
        ]
      }
    }
  ]
};
