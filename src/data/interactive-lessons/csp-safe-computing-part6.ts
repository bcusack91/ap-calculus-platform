export const cspSafeComputingPart6Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc6-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 6 of 7 — Problem-Solving Workshop**

---

## Safe Computing Workshop
      `
    },
    {
      id: "cspsc6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A login requires a password and a fingerprint scan. Which categories of evidence does it use?",
            options: [
              "Knowledge and inherence",
              "Knowledge and possession",
              "Possession and inherence",
              "Knowledge and nothing else"
            ],
            correctAnswer: 0,
            explanation: "A password is something you know (knowledge); a fingerprint is something you are (inherence)."
          },
          {
            question: "Which password is the strongest choice for Maria, whose dog is named Rex and who was born in 2009?",
            options: [
              "Rex2009",
              "maria2009",
              "purple-violin-harbor-71",
              "password123"
            ],
            correctAnswer: 2,
            explanation: "A strong password is easy for the user to remember but hard for someone else to guess from knowledge of the user; pet names, birth years, and common passwords are easy to guess."
          }
        ]
      }
    },
    {
      id: "cspsc6-content",
      type: 'text' as const,
      content: `
## Worked: A Personal Security Checkup

| Area | Action |
|------|--------|
| Passwords | Strong and unique for each site. |
| MFA | Enable on email, banking, and social accounts. |
| Devices | Install software updates regularly; run virus and malware scanning software. |
| Downloads | Install only from trustworthy sources. |
| Apps and browser | Review the permissions each program has to collect your information. |
| Wi-Fi | Be careful on public networks, where a rogue access point can intercept data. |

## Worked: A Phishing Smell-Test

If a message:

1. Pressures urgency, OR
2. Asks for credentials / MFA codes / money, OR
3. Has a mismatched sender / domain, OR
4. Has a link whose actual destination differs from its text,

…treat as phishing until proven otherwise. Verify out-of-band.

## Worked: Recovering A Compromised Account

1. Change the password to a new strong, unique one.
2. Turn on (or reset) multifactor authentication.
3. Review which apps have permission to use the account, and remove unknown ones.
4. Run virus and malware scanning software in case a keylogger captured the password.
5. Warn contacts, since messages from a compromised account can carry malicious links.
      `
    },
    {
      id: "cspsc6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) After a compromise, after changing the password you should reset _______.

2) You should audit connected _______ to revoke anything unfamiliar.

3) If you suspect device-level compromise, run an _______ scan.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["MFA", "apps", "antivirus"],
        hint1: "Reset second factor.",
        hint2: "Third-party access.",
        hint3: "Malware scan.",
        explanation: "MFA reset / connected apps audit / antivirus scan."
      }
    },
    {
      id: "cspsc6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Multifactor authentication means a stolen password alone is ___",
            options: ["not enough to log in", "enough to log in", "deleted automatically", "encrypted automatically"]
          },
          {
            label: "A long passphrase like \"correct-horse-battery-staple\" is ___",
            options: ["stronger than a short complex password and easier to remember", "weaker than a short complex password such as \"P@ss1\"", "harder to remember than a short complex password", "invalid on most sites because it contains hyphens"]
          },
          {
            label: "Reviewing privacy settings periodically is ___",
            options: ["important because defaults and policies change over time", "unnecessary because defaults never change after signup", "unnecessary because privacy laws already protect all data", "important only when you first create an account"]
          }
        ],
        correctAnswers: ["not enough to log in", "stronger than a short complex password and easier to remember", "important because defaults and policies change over time"],
        hint1: "Each step adds a layer.",
        hint2: "Length wins.",
        hint3: "Settings drift.",
        explanation: "MFA requires more than a password; long passphrases; review settings periodically."
      }
    },
    {
      id: "cspsc6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Personal security checkup as a habit, not a one-time event.
- Phishing smell-test = urgency + creds/codes/money + mismatched sender + suspicious link.
- After a compromise: new strong password + MFA + review permissions + malware scan + warn contacts.
      `
    },
    {
      id: "cspsc6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user gets an authenticator-app push they did NOT initiate. The most appropriate response is ___",
            options: [
              "approve the push so the notification disappears and the user can return to what they were doing.",
              "deny the push and change the password at once, as someone else clearly has it.",
              "turn off multi-factor authentication on the account so future spurious pushes will not appear.",
              "approve it once to check whether the notification was a glitch, then change nothing."
            ],
            correctAnswer: 1,
            explanation: "An unexpected approval request means someone else has the password; denying it keeps the second layer of MFA intact."
          },
          {
            question: "A teacher wants to recommend ONE upgrade to student safety. The single highest-impact change is ___",
            options: [
              "use shorter passwords so students will reliably memorize them across every account they own.",
              "enable MFA on student accounts, so a stolen password alone is no longer enough to log in.",
              "require students to change their passwords every week, even if no breach has occurred.",
              "install antivirus on student laptops, since malware is the main way email gets hacked."
            ],
            correctAnswer: 1,
            explanation: "Each MFA step adds a layer that must be broken, which blocks most account takeovers that start with a stolen password."
          }
        ]
      }
    }
  ]
};
