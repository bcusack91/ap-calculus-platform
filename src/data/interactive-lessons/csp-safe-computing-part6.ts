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
            question: "A user asks if MFA via SMS is enough for an admin account. The most accurate answer is ___",
            options: [
              "SMS MFA is the strongest possible second factor available for any sensitive admin account.",
              "SMS MFA helps but is vulnerable to SIM-swap; use an authenticator app or hardware key instead.",
              "No multi-factor authentication is needed at all on a properly configured admin account.",
              "Transport-layer security on the admin login fully covers everything multi-factor would add."
            ],
            correctAnswer: 1,
            explanation: "SMS > nothing, but app/hardware factor is stronger."
          },
          {
            question: "Using a unique random password per site requires ___",
            options: [
              "memorizing each random password yourself, as humans can reliably recall hundreds of strings.",
              "a password manager — humans cannot reliably memorize hundreds of unique random passwords.",
              "no tool whatsoever, since browsers will autofill any random password without storing it.",
              "transport-layer security on the login form to make each random password short enough."
            ],
            correctAnswer: 1,
            explanation: "Password managers enable real uniqueness."
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
| Passwords | Move to manager + unique per site. |
| MFA | Enable on email, banking, social. |
| Email | Audit forwarding rules and recovery info. |
| Devices | Enable OS encryption; auto-update; lock screen. |
| Backups | Off-device backups; test restore. |
| Browser | Review extensions and permissions. |
| Apps | Audit installed apps and permissions. |

## Worked: A Phishing Smell-Test

If a message:

1. Pressures urgency, OR
2. Asks for credentials / MFA codes / money, OR
3. Has a mismatched sender / domain, OR
4. Has a link whose actual destination differs from its text,

…treat as phishing until proven otherwise. Verify out-of-band.

## Worked: Recovering A Compromised Account

1. Sign out from all sessions.
2. Change password (long, unique, manager-stored).
3. Reset MFA; remove old factors.
4. Audit recovery email + phone — change if compromised.
5. Audit connected apps and revoke unknown ones.
6. Notify contacts.
7. Run an antivirus / malware scan if you suspect device compromise.
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
            label: "A password manager primarily makes ___ practical",
            options: ["unique strong passwords for every site", "memorizing one password for all sites", "no passwords at all", "compression of passwords"]
          },
          {
            label: "A long passphrase like \"correct-horse-battery-staple\" is ___",
            options: ["stronger than a short complex password and easier to remember", "weaker than \"P@ss1\"", "always invalid", "always rejected"]
          },
          {
            label: "Reviewing privacy settings periodically is ___",
            options: ["important because defaults and policies change over time", "unnecessary", "a TLS feature", "a compression feature"]
          }
        ],
        correctAnswers: ["unique strong passwords for every site", "stronger than a short complex password and easier to remember", "important because defaults and policies change over time"],
        hint1: "Manager solves uniqueness.",
        hint2: "Length wins.",
        hint3: "Settings drift.",
        explanation: "Manager + uniqueness; long passphrases; review settings periodically."
      }
    },
    {
      id: "cspsc6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Personal security checkup as a habit, not a one-time event.
- Phishing smell-test = urgency + creds/codes/money + mismatched sender + suspicious link.
- Account recovery = sign out + reset password + reset MFA + audit recovery channels + audit connected apps.
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
              "deny the push, then change the password and review account activity — someone has the password.",
              "turn off multi-factor authentication on the account so future spurious pushes will not appear.",
              "compress the authenticator app's notification log so the spurious push will be hidden inside."
            ],
            correctAnswer: 1,
            explanation: "\"MFA bombing\" deny + investigate is the right answer."
          },
          {
            question: "A teacher wants to recommend ONE upgrade to student safety. The single highest-impact change is ___",
            options: [
              "use shorter passwords so students will reliably memorize them across every account they own.",
              "enable MFA on the student email account, since it's the recovery channel for everything else.",
              "disable transport-layer security on the student's outbound browser traffic to simplify access.",
              "install a wide variety of unfamiliar browser extensions to extend the student's capabilities."
            ],
            correctAnswer: 1,
            explanation: "MFA on email is highest-leverage."
          }
        ]
      }
    }
  ]
};
