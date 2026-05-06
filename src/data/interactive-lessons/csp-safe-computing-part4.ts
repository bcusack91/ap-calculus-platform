export const cspSafeComputingPart4Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc4-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 4 of 7 — Connections & Interactions**

---

## Safe Computing Connects Across CSP

| Connection | Why |
|-----------|-----|
| Safe computing ↔ Security | Personal practice is part of defense in depth. |
| Safe computing ↔ Networks | Most attacks reach you over a network. |
| Safe computing ↔ Data | Your data is what attackers want. |
| Safe computing ↔ Impact | Bad practice harms others (forwarded malware, stolen contacts). |
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
              "no measurable impact on others, since the original compromise affected only one user account.",
              "the user's safe-computing posture has effects on people connected to them — a network effect.",
              "each affected contact's transport-layer security handshake will slow down for several days.",
              "the affected contacts' inboxes will simply compress less efficiently for several weeks afterward."
            ],
            correctAnswer: 1,
            explanation: "One person's lapse can harm many."
          },
          {
            question: "A user installs random browser extensions for novelty. The most direct risk is ___",
            options: [
              "no risk, since browser extensions run inside a fully isolated sandbox by default everywhere.",
              "extensions can read browsing data, inject scripts, and exfiltrate credentials — vet permissions.",
              "each installed extension speeds up the browser's transport-layer security handshake noticeably.",
              "each installed extension forces the browser to abandon its built-in compression of cached data."
            ],
            correctAnswer: 1,
            explanation: "Browser extensions are powerful and abusable."
          }
        ]
      }
    },
    {
      id: "cspsc4-content",
      type: 'text' as const,
      content: `
## Defense In Depth For Individuals

| Layer | Personal practice |
|-------|------------------|
| Identity | Unique passwords + MFA. |
| Devices | Updates + lock screens + encryption-at-rest (FileVault / BitLocker). |
| Apps | Install from trusted stores; review permissions. |
| Network | Trusted networks; HTTPS; trusted VPN when needed. |
| Backups | Off-device backups (cloud or external drive). |
| Awareness | Recognize phishing; healthy skepticism. |

## Threat Modeling For Yourself

Different people face different threats:

- **General public**: opportunistic phishing, scams.
- **High-profile**: targeted phishing, account takeover.
- **Activists / journalists**: state-level adversaries; need stronger ops.

Match your defenses to your realistic threat model.
      `
    },
    {
      id: "cspsc4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Personal full-disk encryption on macOS / Windows is provided by _______ / BitLocker.

2) A useful exercise to identify YOUR specific risks is personal _______ modeling.

3) Restoring a lost laptop's data depends on having _______ off the device.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["FileVault", "threat", "backups"],
        hint1: "Apple disk encryption.",
        hint2: "Adversary thinking.",
        hint3: "Off-device.",
        explanation: "FileVault / BitLocker, threat modeling, backups."
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
            label: "Locking your screen when leaving a device ___",
            options: ["blocks casual physical access to your accounts", "has no benefit", "speeds up TLS", "compresses data"]
          },
          {
            label: "A backup that lives only on the same device ___",
            options: ["does not protect against device loss / theft / ransomware", "is the safest possible setup", "replaces encryption", "eliminates phishing risk"]
          },
          {
            label: "Trusted browser extensions should be ___",
            options: ["installed only from reputable stores with reviewed permissions", "installed from any random site", "never reviewed", "always silent"]
          }
        ],
        correctAnswers: ["blocks casual physical access to your accounts", "does not protect against device loss / theft / ransomware", "installed only from reputable stores with reviewed permissions"],
        hint1: "Lock screens block casual access.",
        hint2: "Off-device matters.",
        hint3: "Permissions review.",
        explanation: "Lock screens, off-device backups, vet extensions."
      }
    },
    {
      id: "cspsc4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Personal Defense In Depth

- Layer defenses: identity + device + app + network + backups + awareness.
- Match defenses to your real threat model.
- Personal lapses can harm your network of contacts.
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
            question: "A high-profile journalist's threat model includes targeted state-level adversaries. The most appropriate baseline is ___",
            options: [
              "just a strong password and nothing else added on top of it for the journalist's accounts.",
              "hardware-key MFA, full-disk encryption, vetted device + app sources, OPSEC training, and a plan.",
              "just multi-factor authentication via SMS text messages and no other defenses for the accounts.",
              "just transport-layer security on the journalist's outbound traffic and no other defenses at all."
            ],
            correctAnswer: 1,
            explanation: "High-risk targets need stronger defenses, including hardware MFA."
          },
          {
            question: "A teenager streams video games and shares their schedule publicly. The most accurate concern is ___",
            options: [
              "no measurable concern, since publicly shared streaming schedules are normal among gamers.",
              "predictable presence + visible patterns may enable harassment, swatting, or physical-world risks.",
              "the streamer's transport-layer security handshake will slow down because of the public schedule.",
              "the streamer's upload connection will simply compress less efficiently while a stream is live."
            ],
            correctAnswer: 1,
            explanation: "Public exposure of patterns enables real-world risks."
          }
        ]
      }
    }
  ]
};
