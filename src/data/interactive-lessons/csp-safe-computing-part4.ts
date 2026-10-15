export const cspSafeComputingPart4Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc4-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 4 of 7 — Connections & Interactions: Viruses, Malware, and Keyloggers**

---

## Malicious Software

| Term | Meaning |
|-----------|-----|
| **Malware** | Software intended to damage a computing system or to take partial control over its operation. |
| **Computer virus** | A malicious program that can copy itself and gain access to a computer in an unauthorized way. Viruses often attach themselves to legitimate programs and start running independently. |
| **Keylogging** | The use of a program to record every keystroke a user makes, to gain fraudulent access to passwords and other confidential information. |

Safe computing connects to the rest of the course: malware spreads over networks, steals data, and one person's infected computer can harm the people connected to them.
      `
    },
    {
      id: "cspsc4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A compromised personal account that automatically forwarded contacts' info caused phishing attacks against them. The most accurate framing is ___",
            options: [
              "no impact on others, since the compromise affected only one account.",
              "one user's weak security can harm the people connected to them, not just that user.",
              "the contacts are safe as long as their own passwords are strong and never reused.",
              "the email provider alone is responsible, since users cannot affect others' security."
            ],
            correctAnswer: 1,
            explanation: "Unsolicited messages can come from known senders whose security has been compromised, so one person's lapse can harm many."
          },
          {
            question: "A user installs random browser extensions for novelty. The most direct risk is ___",
            options: [
              "no risk, since browser extensions run inside a fully isolated sandbox by default everywhere.",
              "extensions can read browsing data and steal passwords, so their permissions need checking.",
              "only slower page loads, since extensions mainly use extra memory while the browser runs.",
              "only extra ads, since extensions can change how pages look but cannot read what you type."
            ],
            correctAnswer: 1,
            explanation: "Untrustworthy downloads can contain malware, and users should review the permissions programs have to collect information."
          }
        ]
      }
    },
    {
      id: "cspsc4-content",
      type: 'text' as const,
      content: `
## Protecting a Device

| Protection | What the CED says |
|-------|------------------|
| Virus and malware scanning software | Can help protect a computing system against infection. |
| Regular software updates | All real-world systems have errors or design flaws that can be exploited; updates help fix them. |
| Reviewing permissions | Users can control the permissions programs have for collecting user information and should review them to protect their privacy. |
| Trustworthy sources | Untrustworthy (often free) downloads from freeware or shareware sites can contain malware. |

## How a Keylogger Steals a Password

1. A user downloads a "free" game from an unfamiliar site.
2. Hidden inside is a keylogging program that starts running in the background.
3. The user later types a bank password, and the program records every keystroke.
4. The attacker receives the recording and logs in to the account.

Multifactor authentication would have stopped step 4: the password alone would not have been enough.
      `
    },
    {
      id: "cspsc4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Software intended to damage a computing system or take partial control of it is called _______.

2) A program that records every keystroke to capture passwords is used for _______.

3) A malicious program that copies itself, often by attaching to legitimate programs, is a computer _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["malware", "keylogging", "virus"],
        hint1: "Mal- means bad.",
        hint2: "Key + logging.",
        hint3: "It spreads like an illness.",
        explanation: "Malware / keylogging / computer virus."
      }
    },
    {
      id: "cspsc4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Virus and malware scanning software ___",
            options: ["can help protect a system against infection", "guarantees a system can never be infected", "replaces the need for software updates", "encrypts every file on the device"]
          },
          {
            label: "A free program from an unfamiliar sharing site ___",
            options: ["may contain malware", "is checked by the Internet", "cannot contain a virus", "is safer than a paid one"]
          },
          {
            label: "Trusted browser extensions should be ___",
            options: ["installed only from reputable stores with reviewed permissions", "installed from any site, since browsers sandbox all extensions", "granted every permission they request so they work correctly", "installed freely, as extensions cannot read page contents"]
          }
        ],
        correctAnswers: ["can help protect a system against infection", "may contain malware", "installed only from reputable stores with reviewed permissions"],
        hint1: "Helpful, not perfect.",
        hint2: "Untrustworthy downloads.",
        hint3: "Permissions review.",
        explanation: "Scanning software helps but is not a guarantee; untrustworthy downloads can carry malware; review permissions before installing."
      }
    },
    {
      id: "cspsc4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Malware

- Malware = software meant to damage or control a system. A virus copies itself, often attached to a legitimate program.
- Keylogging records keystrokes to steal passwords; MFA limits the damage.
- Protections: scanning software, regular updates, reviewing permissions, avoiding untrustworthy downloads.
- One person's compromised account can be used to attack their contacts.
      `
    },
    {
      id: "cspsc4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A student's laptop has a keylogging program on it. Which additional measure would best keep the student's email account safe even though the password has been captured?",
            options: [
              "Choosing a longer password that the keylogger will also record.",
              "Turning on multifactor authentication for that login.",
              "Typing the password more slowly so fewer keys are recorded.",
              "Clearing the browser's history after every time they log in."
            ],
            correctAnswer: 1,
            explanation: "With MFA, a captured password alone is not enough; the attacker would also need the second factor."
          },
          {
            question: "A teenager streams video games and shares their schedule and town publicly. The most accurate concern is ___",
            options: [
              "no measurable concern, since publicly shared streaming schedules are normal among gamers.",
              "predictable times and personal details could help someone stalk or harass them in real life.",
              "the main risk is copyright strikes, since posting schedules can reveal unlicensed content.",
              "the risk is limited to online trolling, since viewers cannot learn anything offline."
            ],
            correctAnswer: 1,
            explanation: "Personal information placed online can be used to stalk a person, and combined details reveal more than any one alone."
          }
        ]
      }
    }
  ]
};
