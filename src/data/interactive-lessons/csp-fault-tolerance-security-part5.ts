export const cspFaultToleranceSecurityPart5Data = {
  topicSlug: "csp-fault-tolerance-security",
  sections: [
    {
      id: "cspfts5-intro",
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 5 of 7 — Change Over Time**

---

## How Security & Fault Tolerance Have Evolved

| Era | Defining shift |
|-----|----------------|
| 1990s | Anti-virus, basic firewalls. |
| 2000s | TLS adoption; widespread cyberattacks. |
| 2010s | Cloud-scale DDoS, ransomware, MFA mainstream. |
| 2020s | Supply-chain attacks, AI-assisted phishing, post-quantum prep. |
      `
    },
    {
      id: "cspfts5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A \"supply-chain attack\" compromises ___",
            options: [
              "only individual end users' phones, with no impact on the broader software ecosystem.",
              "a tool or library many systems depend on, multiplying the impact across all users.",
              "only firewalls at the network perimeter, leaving applications inside untouched.",
              "a single website's login page, which attackers copy to collect user passwords."
            ],
            correctAnswer: 1,
            explanation: "Supply chain = trusted dependency compromise."
          },
          {
            question: "Post-quantum cryptography research aims to ___",
            options: [
              "speed up classical encryption algorithms by using more efficient mathematical primitives.",
              "design algorithms that resist attacks from future large quantum computers.",
              "use quantum computers to encrypt everyday web traffic in place of current algorithms.",
              "prove that today's public-key algorithms are already safe against quantum attacks."
            ],
            correctAnswer: 1,
            explanation: "Post-quantum = quantum-resistant designs."
          }
        ]
      }
    },
    {
      id: "cspfts5-content",
      type: 'text' as const,
      content: `
## Notable Modern Shifts

| Shift | Effect |
|-------|--------|
| Cloud everywhere | Big providers handle base infra; devs share responsibility. |
| Zero trust | Don't trust any network; verify every request. |
| Ransomware | Backups + segmentation + plan = recoverability. |
| AI-assisted attacks | Phishing/spam quality is rising. |
| Open-source dependencies | Strong upside; supply-chain risk. |

## "Security Through Obscurity" Doesn't Work

Hiding the algorithm isn't a substitute for sound design. Strong cryptography is **public** — its security depends on the key, not the secrecy of the method.
      `
    },
    {
      id: "cspfts5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A model that does NOT trust any network and verifies every request is called _______ trust.

2) An attack on a popular library to compromise its many downstream users is a _______-chain attack.

3) Cryptography designed to resist future quantum-computer attacks is called _______-quantum.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["zero", "supply", "post"],
        hint1: "Trust nothing.",
        hint2: "Dependency-chain.",
        hint3: "After-quantum.",
        explanation: "Zero trust / supply chain / post-quantum."
      }
    },
    {
      id: "cspfts5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "\"Security through obscurity\" alone ___",
            options: ["is widely considered insufficient — open-design + strong keys is preferred", "is widely considered sufficient — secret designs + short keys are enough", "is the strongest defense — hidden code + no public review is preferred", "replaces encryption — attackers cannot break what they cannot see"]
          },
          {
            label: "Ransomware's greatest defense is ___",
            options: ["regular tested backups + network segmentation + a plan", "paying the ransom promptly + asking for the decryption key", "full-disk encryption + longer passwords + a VPN", "a single antivirus tool + a perimeter firewall alone"]
          },
          {
            label: "AI-assisted phishing is harder to detect because ___",
            options: ["it produces grammatically clean, personalized messages at scale", "it encrypts every message so spam filters cannot read its content", "it always comes from the real company's verified email servers", "it is sent only through text messages rather than through email"]
          }
        ],
        correctAnswers: ["is widely considered insufficient — open-design + strong keys is preferred", "regular tested backups + network segmentation + a plan", "it produces grammatically clean, personalized messages at scale"],
        hint1: "Open + strong > obscure.",
        hint2: "Recoverability.",
        hint3: "Quality boost.",
        explanation: "Open design + strong keys; backups + segmentation; AI-quality phishing."
      }
    },
    {
      id: "cspfts5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Security Evolution

- Modern attackers exploit supply chain, not always users directly.
- Zero trust is the dominant new architecture.
- AI changes the threat landscape (phishing quality up).
      `
    },
    {
      id: "cspfts5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A company's build pipeline is compromised — every customer download contains malware. The most accurate framing is ___",
            options: [
              "phishing of individual customers via emails sent from the compromised build server.",
              "a supply-chain attack: a trusted artifact source was compromised, multiplying impact.",
              "a DDoS attack: the download server was flooded until it served corrupted files.",
              "a man-in-the-middle attack: each customer's connection was intercepted separately."
            ],
            correctAnswer: 1,
            explanation: "Build pipeline compromise = canonical supply-chain attack."
          },
          {
            question: "A school is hit by ransomware. The single most useful preparation BEFORE the attack would have been ___",
            options: [
              "no preparation, since ransomware response is purely reactive",
              "tested offline backups, network segmentation, and a written response plan.",
              "antivirus, firewalls, and spam filters, with no backups needed",
              "cyber insurance, which restores files once the ransom is paid"
            ],
            correctAnswer: 1,
            explanation: "Backups + segmentation + plan = ransomware resilience."
          }
        ]
      }
    }
  ]
};
