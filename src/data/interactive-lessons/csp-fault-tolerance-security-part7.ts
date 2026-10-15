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
            question: "In public key encryption, which key is needed to decrypt a message sent to Maya?",
            options: [
              "Maya's private key",
              "Maya's public key",
              "the sender's public key",
              "the sender's private key"
            ],
            correctAnswer: 0,
            explanation: "Anyone can encrypt with Maya's public key, but only Maya's private key decrypts the message."
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
| Fault tolerance | Supports failures and still continues to function. |
| Redundancy | Extra components that mitigate failure; costs additional resources. |
| Sequential / parallel / distributed | One at a time / some at the same time / many devices. |
| Speedup | Sequential time ÷ parallel time. |
| Symmetric / public key encryption | One shared key vs. a public key to encrypt and a private key to decrypt. |
| Certificate authority | Issues digital certificates that validate ownership of encryption keys. |
| MFA | Access only after evidence from two or more categories: know, have, are. |
| Phishing / keylogging / rogue access point | Common ways unauthorized access is gained. |
| Malware / virus | Software meant to damage or control a system / a program that copies itself. |

## Common Pitfalls

- Thinking redundancy is free; it costs extra resources.
- Adding parallel task times instead of taking the longest one.
- Forgetting the sequential portion limits speedup.
- Thinking the sender needs the receiver's private key to encrypt.
- Treating a password plus a second password as multifactor.
      `
    },
    {
      id: "cspfts7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Including extra components to mitigate failure is called _______.

2) A program that records every keystroke to capture passwords is used for _______.

3) A second proof of identity beyond the password is the second _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["redundancy", "keylogging", "factor"],
        hint1: "Backup parts.",
        hint2: "Key + logging.",
        hint3: "MFA.",
        explanation: "Redundancy / keylogging / second factor."
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
            label: "A strong password is ___",
            options: ["easy for you to remember but hard for others to guess", "a word anyone who knows you could figure out", "as short as possible so it is quick to type", "the same one reused on every account you have"]
          },
          {
            label: "A sequential step of 5 seconds followed by parallel tasks of 3 and 8 seconds takes at least ___",
            options: ["13 seconds", "16 seconds", "8 seconds", "11 seconds"]
          },
          {
            label: "A wireless access point that gives unauthorized access to a secure network is called a ___",
            options: ["rogue access point", "certificate authority", "redundant path", "public key"]
          }
        ],
        correctAnswers: ["easy for you to remember but hard for others to guess", "13 seconds", "rogue access point"],
        hint1: "Memorable to you, not guessable by others.",
        hint2: "Sequential step + longest parallel task.",
        hint3: "It is not supposed to be there.",
        explanation: "Strong passwords resist guessing. 5 + 8 = 13 seconds. A rogue access point gives unauthorized network access."
      }
    },
    {
      id: "cspfts7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Fault tolerance comes from redundancy; find and remove single points of failure.
- Parallel time, speedup, and the limit set by the sequential portion.
- Symmetric vs. public key encryption; certificate authorities; MFA categories.
- Know how unauthorized access is gained: phishing, keylogging, malware, rogue access points, untrustworthy downloads.
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
            question: "A video-processing job takes 200 seconds sequentially. With a parallel solution it takes 50 seconds. Adding many more processors only brings it down to 45 seconds. Which is the best explanation?",
            options: [
              "The parallel portion is too small to split, so it all runs sequentially.",
              "The sequential portion needs about 45 seconds and cannot be split up.",
              "Each new processor slows the others, adding about 45 seconds of delay.",
              "The speedup of a parallel solution always falls as processors are added."
            ],
            correctAnswer: 1,
            explanation: "The time can never drop below the sequential portion, so the speedup levels off near 200 ÷ 45 ≈ 4.4."
          }
        ]
      }
    }
  ]
};
