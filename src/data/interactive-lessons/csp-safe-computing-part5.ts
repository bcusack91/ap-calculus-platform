export const cspSafeComputingPart5Data = {
  topicSlug: "csp-safe-computing",
  sections: [
    {
      id: "cspsc5-intro",
      type: 'text' as const,
      content: `
# 🔐 Safe Computing

**Part 5 of 7 — Change Over Time**

---

## How Safe Computing Has Evolved

| Era | Defining shift |
|-----|----------------|
| 1990s | Antivirus + "don't open weird attachments". |
| 2000s | Spyware, popups, browser hardening. |
| 2010s | Mobile phishing; MFA mainstream. |
| 2020s | Passkeys, AI-assisted phishing, cloud account takeovers. |
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
            question: "Passkeys (FIDO2) primarily replace ___",
            options: [
              "encryption of stored data with a fundamentally different cryptographic primitive",
              "passwords with cryptographic device-bound credentials that resist phishing",
              "two-factor codes with longer codes sent by text message to the user's phone",
              "usernames with randomly generated IDs that are harder for attackers to guess"
            ],
            correctAnswer: 1,
            explanation: "Passkeys replace passwords with phishing-resistant cryptography."
          },
          {
            question: "AI-assisted phishing is concerning because ___",
            options: [
              "it produces grammatically clean, personalized lures at scale.",
              "it lets attackers crack strong passwords much more quickly.",
              "it removes encryption from the emails that victims receive.",
              "it hides malware inside attachments that antivirus can't scan."
            ],
            correctAnswer: 0,
            explanation: "Personalized, fluent lures are harder to spot."
          }
        ]
      }
    },
    {
      id: "cspsc5-content",
      type: 'text' as const,
      content: `
## Passwordless Future

Industry is moving toward **passkeys** (FIDO2 / WebAuthn): the user's device holds a private key; the site only ever sees a public key + signed challenge. This is phishing-resistant by design.

## Cloud Account Takeover

Modern attackers target the **cloud account** itself (email, identity provider) because that often unlocks dozens of services. Defenses:

- MFA on the identity provider.
- Audit which services are connected.
- Review session activity.

## What Hasn't Changed

- Patches still matter.
- Phishing still works.
- Backups still save you.
- Healthy skepticism still beats most attacks.
      `
    },
    {
      id: "cspsc5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A modern phishing-resistant alternative to passwords is called a _______.

2) A single account that grants access to many services is often the user's _______ provider.

3) Despite new attacks, _______ patches remain essential.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["passkey", "identity", "software"],
        hint1: "FIDO2.",
        hint2: "IdP.",
        hint3: "Patch hygiene.",
        explanation: "Passkeys / identity provider / software patches."
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
            label: "Passkeys are phishing-resistant because ___",
            options: ["the private key never leaves the device and the signature is bound to the real site", "the private key is sent to the site and checked against a stored copy each login", "they are long passwords that the user memorizes and types on each site", "the server stores the private key so it can detect fake sites"]
          },
          {
            label: "Compromise of the user's primary email account often ___",
            options: ["enables password resets and account takeovers across many other services", "only exposes old messages and has no effect on any other accounts", "is harmless as long as the email password is changed within a week", "automatically locks every linked account until you visit each provider in person"]
          },
          {
            label: "AI-generated phishing emails ___",
            options: ["are typically more polished and personalized than older phishing", "are typically easier to spot because of awkward grammar and typos", "are always blocked by modern spam filters before delivery", "cannot include links, so they are harmless to open and read"]
          }
        ],
        correctAnswers: ["the private key never leaves the device and the signature is bound to the real site", "enables password resets and account takeovers across many other services", "are typically more polished and personalized than older phishing"],
        hint1: "Origin-bound crypto.",
        hint2: "Email = master key.",
        hint3: "Quality boost.",
        explanation: "Passkeys are origin-bound; email is high-value; AI improves phishing quality."
      }
    },
    {
      id: "cspsc5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Modern Safe Computing

- Passkeys are the modern direction.
- Identity providers are high-value targets — protect them.
- AI raises the floor of phishing quality.
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
            question: "A user's personal email is compromised. Within hours, attackers reset passwords on 12 other services. The most accurate framing is ___",
            options: [
              "unrelated — the email compromise has no causal connection to the other twelve service resets.",
              "email is the recovery channel for those services, so securing it with MFA protects them all.",
              "the attackers must have guessed each of the twelve passwords separately in a few hours.",
              "the twelve services were breached together, and the email takeover was a coincidence."
            ],
            correctAnswer: 1,
            explanation: "Email is the master account."
          },
          {
            question: "A site offers passkeys instead of passwords. The most CSP-aligned reason to enable them is ___",
            options: [
              "no compelling reason, since passwords with MFA are equivalent to passkeys in every way.",
              "they resist phishing because the credential is bound to the real site's origin and stays on device.",
              "they let the user skip MFA entirely, since a passkey is just a longer stored password.",
              "they work without a device, since the passkey is kept on the site's server for the user."
            ],
            correctAnswer: 1,
            explanation: "Passkeys = phishing-resistant by construction."
          }
        ]
      }
    }
  ]
};
