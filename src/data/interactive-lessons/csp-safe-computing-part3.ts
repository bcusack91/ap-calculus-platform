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
              "attackers can access the camera (and possibly the home network) using widely known defaults.",
              "the camera's built-in compression algorithm becomes less efficient than recently shipped models.",
              "the camera's transport-layer security handshake slows down measurably under default credentials."
            ],
            correctAnswer: 1,
            explanation: "Default creds are scanned and exploited at scale."
          },
          {
            question: "Posting daily location-tagged stories during a vacation publicly ___",
            options: [
              "has no measurable impact on the safety of the home left empty during the vacation period.",
              "tells anyone watching the public posts that your home is currently unoccupied for days.",
              "compresses your stored vacation photos to a smaller size than untagged photos would be.",
              "speeds up your residential internet connection slightly while you are away from home."
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

Modern HTTPS protects most traffic on public Wi-Fi. But:

- Some apps still use unencrypted endpoints.
- A malicious access point can present invalid certificates (don't bypass).
- Using a trusted VPN adds an extra layer for higher-risk activities.

## Account-Takeover Recovery Plan

| Step | Why |
|------|-----|
| Sign out everywhere | Force attackers off if you re-secure. |
| Reset password + MFA | Lock attackers out. |
| Check connected apps | Revoke anything suspicious. |
| Check recovery email + phone | Attackers often change these. |
| Notify contacts if needed | They may receive impostor messages. |
      `
    },
    {
      id: "cspsc3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A device shipped with "admin/admin" credentials uses a _______ password.

2) Public Wi-Fi is much safer when sites use _______ rather than HTTP.

3) After an account compromise, you should also check connected apps and the recovery _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["default", "HTTPS", "email"],
        hint1: "Out of the box.",
        hint2: "Encrypted web.",
        hint3: "Recovery channel.",
        explanation: "Default passwords, HTTPS, recovery email."
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
            options: ["changed immediately on setup", "left as-is", "shared with neighbors", "compressed"]
          },
          {
            label: "A browser warning \"your connection is not private\" should ___",
            options: ["be taken seriously, especially on public Wi-Fi", "always be ignored", "be compressed", "be encrypted further"]
          },
          {
            label: "After an account takeover, you should also ___",
            options: ["check (and reset) recovery email, phone, and connected apps", "tell no one and continue normally", "compress logs", "switch to UDP"]
          }
        ],
        correctAnswers: ["changed immediately on setup", "be taken seriously, especially on public Wi-Fi", "check (and reset) recovery email, phone, and connected apps"],
        hint1: "Setup hardening.",
        hint2: "TLS warnings.",
        hint3: "Recovery surface.",
        explanation: "Change defaults; respect TLS warnings; reset recovery surface after compromise."
      }
    },
    {
      id: "cspsc3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Personal Data Risks

- Defaults favor sharing; review privacy settings.
- Default device passwords are widely known and scanned.
- Don't bypass TLS warnings.
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
              "sign out everywhere, reset password + MFA, audit recovery email/phone and connected apps.",
              "reply to the contacts with the requested credentials so the friend can confirm the activity.",
              "switch to a brand new account immediately with no warning to existing contacts at all."
            ],
            correctAnswer: 1,
            explanation: "Standard account-recovery checklist."
          },
          {
            question: "A school deploys 200 IoT thermostats with default passwords. The biggest CSP-aligned concern is ___",
            options: [
              "no measurable concern, since the thermostats only control room temperatures within the school.",
              "200 devices easily found and exploited via default-credential scans, possibly pivoting onward.",
              "each thermostat's built-in compression algorithm becomes slightly less efficient than newer models.",
              "each thermostat's transport-layer security handshake will slow down by a small amount over time."
            ],
            correctAnswer: 1,
            explanation: "Default creds at scale = mass exploitation surface."
          }
        ]
      }
    }
  ]
};
