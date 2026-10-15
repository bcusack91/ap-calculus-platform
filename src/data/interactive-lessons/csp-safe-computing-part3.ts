export const cspSafeComputingPart3Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc3-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 3 of 7 — Patterns & Examples**

---

## Patterns Of Personal Data Risk

| Pattern | Why it's risky |
|---------|----------------|
| **Oversharing** | Public posts reveal patterns / locations. |
| **Old accounts** | Forgotten accounts may be breached. |
| **Default passwords** | IoT devices shipped with "admin/admin". |
| **Public Wi-Fi without HTTPS** | Eavesdropping risk. |
| **Browser auto-fill on shared devices** | Credentials leak to whoever uses next. |
      `
    },
    {
      id: "cspsc3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A new IoT camera is installed with default credentials \"admin/admin\". The most direct risk is ___",
            options: [
              "no measurable risk, since attackers cannot easily find new IoT devices on the internet.",
              "attackers can log in with the widely published defaults and reach the home network.",
              "the camera's video is stored unencrypted, since default credentials disable encryption.",
              "the camera stops receiving firmware updates until the default password is changed."
            ],
            correctAnswer: 1,
            explanation: "Default creds are scanned and exploited at scale."
          },
          {
            question: "Posting daily location-tagged stories during a vacation publicly ___",
            options: [
              "has no measurable impact on the safety of the home left empty during the vacation period.",
              "tells anyone watching the public posts that your home is currently unoccupied for days.",
              "lets the platform sell your location, but strangers have no way to view the tags.",
              "only matters if the account is private, since public posts are rarely viewed by strangers."
            ],
            correctAnswer: 1,
            explanation: "Location patterns enable physical-world risks."
          }
        ]
      }
    },
    {
      id: "cspsc3-content",
      type: 'text' as const,
      content: `
## Privacy Settings Are Defaults Worth Reviewing

Defaults often favor sharing. Periodically review:

- Who can see your posts / location / photos.
- What apps have what permissions.
- What third-party logins are connected.
- Which devices are signed in to your accounts.

## Public Wi-Fi Caveats

Data sent over public networks can be intercepted, analyzed, and modified. One way this happens is through a **rogue access point**: a wireless access point that gives unauthorized access to a network. Encryption (HTTPS) protects most web traffic, but:

- Some apps still send data unencrypted.
- A rogue access point may present a certificate that a certificate authority did not issue for that site; never click past a certificate warning.

## Warning Signs From Familiar Senders

Unsolicited emails, attachments, links, and forms can be used to compromise a computing system. They can come from **unknown senders** or from **known senders whose security has been compromised**.

| Sign | Why it matters |
|------|-----|
| A friend's account suddenly sends odd links | The account may be compromised; the link may be malicious. |
| A link's text doesn't match where it leads | A malicious link can be disguised on a web page or in an email. |
| An unexpected attachment "you must open" | Attachments can carry viruses or other malware. |
| A free download from an unfamiliar site | Untrustworthy (often free) downloads can contain malware. |
      `
    },
    {
      id: "cspsc3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A device shipped with "admin/admin" credentials uses a _______ password.

2) Public Wi-Fi is much safer when sites use _______ rather than HTTP.

3) A wireless access point that gives unauthorized access to a secure network is called a _______ access point.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["default", "HTTPS", "rogue"],
        hint1: "Out of the box.",
        hint2: "Encrypted web.",
        hint3: "It is not supposed to be there.",
        explanation: "Default passwords, HTTPS, rogue access points."
      }
    },
    {
      id: "cspsc3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Default credentials should be ___",
            options: ["changed immediately on setup", "kept until the first breach", "written on a label on the device", "shared only with family members"]
          },
          {
            label: "A browser warning \"your connection is not private\" should ___",
            options: ["be taken seriously, especially on public Wi-Fi", "be clicked through, since it is usually harmless", "be fixed by turning off the antivirus program", "be ignored if the site's padlock is still shown"]
          },
          {
            label: "An unexpected email attachment from a friend whose account was hacked ___",
            options: ["could contain malware, so don't open it", "is safe because you know the sender", "is safe if it arrived in the morning", "can only contain plain text, not malware"]
          }
        ],
        correctAnswers: ["changed immediately on setup", "be taken seriously, especially on public Wi-Fi", "could contain malware, so don't open it"],
        hint1: "Setup hardening.",
        hint2: "Certificate warnings.",
        hint3: "Known senders can be compromised.",
        explanation: "Change defaults; respect certificate warnings; attachments from compromised known senders can carry malware."
      }
    },
    {
      id: "cspsc3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Personal Data Risks

- Defaults favor sharing; review privacy settings.
- Default device passwords are widely known and scanned.
- Don't click past certificate warnings, especially on public Wi-Fi (rogue access points).
- Unsolicited links and attachments can come from known senders whose accounts were compromised.
      `
    },
    {
      id: "cspsc3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A friend's social account starts sending suspicious links to everyone. The most CSP-aligned response from the friend is ___",
            options: [
              "ignore the situation entirely and continue using the account normally without any changes.",
              "sign out of all sessions and reset the password and MFA, then check linked apps.",
              "delete the sent messages and keep the password, since the account itself still works.",
              "switch to a brand new account immediately with no warning to existing contacts at all."
            ],
            correctAnswer: 1,
            explanation: "Malicious links can come from known senders whose security has been compromised; the friend should lock the attacker out and warn contacts not to click."
          },
          {
            question: "A school deploys 200 IoT thermostats with default passwords. The biggest CSP-aligned concern is ___",
            options: [
              "the main risk is higher energy bills if students change the room temperature settings.",
              "200 devices easily found and exploited via default-credential scans, possibly pivoting onward.",
              "thermostats hold no personal data, so a breach would only change room temperatures.",
              "default passwords only matter for cameras, since thermostats cannot join networks."
            ],
            correctAnswer: 1,
            explanation: "Default creds at scale = mass exploitation surface."
          }
        ]
      }
    }
  ]
};
