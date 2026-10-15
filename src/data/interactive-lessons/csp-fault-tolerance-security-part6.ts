export const cspFaultToleranceSecurityPart6Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts6-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 6 of 7 — Problem-Solving Workshop**

---

## Fault Tolerance & Security Workshop

Practice the three kinds of reasoning this topic asks for: spotting weak points and adding redundancy, timing parallel solutions, and recognizing how attackers gain access.
      `
    },
    {
      id: "cspfts6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A user notices their bank prompted for a one-time code via app push. This is most directly ___",
            options: [
              "encryption applied to the login request before it leaves the phone",
              "multi-factor authentication via a second factor delivered through the app",
              "single-factor authentication, since the code replaces the password",
              "a phishing attempt, since banks never send codes through apps"
            ],
            correctAnswer: 1,
            explanation: "The code proves possession of the phone, a second factor alongside the password."
          },
          {
            question: "Devices are connected as A–B, B–C, C–D, and A–D. Which single connection, if added, would give A a second path to C that avoids both B and D?",
            options: [
              "A–C",
              "B–D",
              "A–B",
              "C–D"
            ],
            correctAnswer: 0,
            explanation: "A direct A–C connection is a new path that uses neither B nor D. B–D connects two devices A already reaches."
          }
        ]
      }
    },
    {
      id: "cspfts6-content",
      type: 'text' as const,
      content: `
## Worked: Making a Service Survive Failures

A school's homework site runs on one server in one building with one Internet connection.

| Weak point | Redundancy that fixes it |
|-------|------|
| One server | A second server that can take over |
| One Internet connection | A second connection from a different provider |
| One copy of the data | A backup copy kept on another device |

Each fix costs more, but each removes a single point of failure.

## Worked: Phishing Triage

Phishing tries to trick a user into providing personal information, which can then be used to access accounts. Malicious links can be disguised in a web page or email, and unsolicited emails can come from unknown senders or from known senders whose accounts were compromised.

1. **Don't click** links or open attachments you did not expect.
2. Check the sender's address for look-alike spellings.
3. Check where a link actually leads before following it.
4. Verify by contacting the company at a phone number or website you already trust.
5. Report the message as phishing.

## Worked: Timing a Parallel Job

A job has a 6-second sequential step, then three independent tasks of 9, 4, and 7 seconds.

- Sequential: 6 + 9 + 4 + 7 = 26 seconds.
- Parallel on three processors: 6 + 9 = 15 seconds.
- Speedup: 26 ÷ 15 ≈ 1.7.
      `
    },
    {
      id: "cspfts6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A technique that tricks a user into giving away personal information is called _______.

2) In the timing example, the parallel job takes _______ seconds.

3) In the timing example, the job takes _______ seconds when run sequentially.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["phishing", "15", "26"],
        hint1: "Fishing for information.",
        hint2: "Sequential step + longest parallel task.",
        hint3: "Add every step.",
        explanation: "Phishing tricks users. Parallel: 6 + 9 = 15 seconds. Sequential: 6 + 9 + 4 + 7 = 26 seconds."
      }
    },
    {
      id: "cspfts6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Email from \"support@bnk-of-anytown.com\" warning your account is locked is most likely ___",
            options: ["phishing — look-alike domain", "legitimate — official bank domain", "a computer virus — copying itself", "keylogging — malware on your device"]
          },
          {
            label: "A free program downloaded from an unknown sharing site ___",
            options: ["may contain malware", "is always safe to run", "cannot be a virus", "is checked by the Internet"]
          },
          {
            label: "Keeping a backup copy of files on a second device is an example of ___",
            options: ["redundancy", "encryption", "phishing", "routing"]
          }
        ],
        correctAnswers: ["phishing — look-alike domain", "may contain malware", "redundancy"],
        hint1: "Look closely at the spelling.",
        hint2: "Untrustworthy downloads.",
        hint3: "An extra component.",
        explanation: "A misspelled bank domain signals phishing. Untrustworthy (often free) downloads can contain malware. A backup copy is redundancy."
      }
    },
    {
      id: "cspfts6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Find the single point of failure, then add a redundant component that bypasses it.
- Parallel time = sequential part + longest parallel task; speedup = sequential ÷ parallel.
- Phishing, malicious links, unsolicited attachments, untrustworthy downloads, keylogging, and rogue access points are how unauthorized access is gained.
      `
    },
    {
      id: "cspfts6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A company stores all customer orders on one server in one building. Which plan most improves the system's fault tolerance?",
            options: [
              "Buy a faster server to replace the one in the same building.",
              "Keep a second server with a copy of the data in another building.",
              "Ask employees to restart the existing server once every evening.",
              "Encrypt the order data stored on the existing server with a new key."
            ],
            correctAnswer: 1,
            explanation: "A second server with a copy of the data, in a separate location, is redundancy: one failure (even of the whole building) no longer stops the service."
          },
          {
            question: "A user reports an email from \"amaz0n-security@example.com\". The most accurate response is ___",
            options: [
              "click the link in the email and explore the destination page to investigate further.",
              "leave the link unclicked and flag the message as phishing after checking its domain.",
              "reply to the email with the requested credentials so the sender can confirm the account.",
              "forward the email to all colleagues so they can each click and investigate independently."
            ],
            correctAnswer: 1,
            explanation: "A look-alike sender address is a sign of phishing; don't click, verify, and report."
          }
        ]
      }
    }
  ]
};
