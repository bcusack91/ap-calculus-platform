export const cspFaultToleranceSecurityPart1Data = {
  topicSlug: 'csp-fault-tolerance-security',
  sections: [
    {
      id: 'cspfts1-intro',
      type: 'text' as const,
      content: `
# 🛡️ Fault Tolerance & Security

**Part 1 of 7 — Redundancy, Encryption, and Network Security**

---

## Fault Tolerance

**Fault tolerance** is the ability of a system to support failures and still continue to function.

### Redundancy
The primary method for achieving fault tolerance is **redundancy** — having backup components or paths.

| Type | Description | Example |
|------|-----------|---------|
| **Path redundancy** | Multiple routes between nodes | Internet routing around a failed link |
| **Data redundancy** | Multiple copies of data | Backup copies kept on another device |
| **Hardware redundancy** | Backup equipment | Redundant servers, power supplies |

### Internet Redundancy

\`\`\`
    A ---- B ---- C
    |      |      |
    D ---- E ---- F
\`\`\`

If the link between B and C fails, data can route A → B → E → F → C or A → D → E → F → C. Multiple paths ensure no single failure brings down the network.

> 🔑 The Internet was engineered to be fault-tolerant, with redundant paths so that a single failure does not take down the network. If a device or connection fails, later data are sent along a different route, if one exists.
      `
    },
    {
      id: 'cspfts1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a network with redundant paths, what happens when one link fails?',
            options: [
              'All communication stops until the link is repaired',
              'Data is automatically rerouted through other links',
              'Routers wait for an admin to set up a new route',
              'Users must pick a different path by hand'
            ],
            correctAnswer: 1,
            explanation: 'Routers automatically detect failed links and reroute packets through alternative paths. This is the key benefit of redundancy — the network continues to function despite failures.'
          },
          {
            question: 'Which network design is MORE fault tolerant?\nA: Each node connected to exactly one other node (chain)\nB: Each node connected to multiple other nodes (mesh)',
            options: [
              'A — fewer links mean fewer parts that can fail',
              'B — extra links give data another route if one fails',
              'Both — either design can survive one failed link',
              'Neither — one broken link splits either network'
            ],
            correctAnswer: 1,
            explanation: 'A mesh network has multiple paths between nodes. If one connection fails, data can take another route. A chain network has single points of failure — one broken link disconnects part of the network.'
          }
        ]
      }
    },
    {
      id: 'cspfts1-content',
      type: 'text' as const,
      content: `
## Cybersecurity Fundamentals

### Encryption
**Encryption** transforms readable data (plaintext) into unreadable data (ciphertext) to protect it from unauthorized access.

| Type | Keys | Who can decrypt |
|------|------|-----------------|
| **Symmetric** | One shared key for both encryption and decryption | Anyone with the shared key |
| **Public key** (asymmetric) | A public key encrypts; a private key decrypts | Only the holder of the private key |

With public key encryption, the sender does **not** need the receiver's private key to encrypt a message, but the receiver's private key is required to decrypt it. **Certificate authorities** issue digital certificates that validate who owns the encryption keys used in secure communications. (The math behind encryption is not on the AP exam.)

## Common Threats

| Threat | Description |
|--------|-----------|
| **Phishing** | Fake emails/sites tricking users into giving up passwords |
| **Malware** | Software designed to damage or gain unauthorized access |
| **Computer virus** | A malicious program that copies itself and gains unauthorized access, often by attaching to a legitimate program |
| **Keylogging** | A program records every keystroke to capture passwords |
| **Rogue access point** | A wireless access point that gives unauthorized access to a network; data sent through it can be intercepted |
      `
    },
    {
      id: 'cspfts1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Having multiple backup paths or components so a system continues working after a failure is called _______.

2) Encryption that uses one shared key for both encryption and decryption is called _______ encryption.

3) An attack that tricks users into revealing passwords through fake emails or websites is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['redundancy', 'symmetric', 'phishing'],
        hint1: 'Extra copies/paths as backup.',
        hint2: 'The same (symmetric) key used both ways.',
        hint3: 'Fishing for your information.',
        explanation: 'Redundancy = backup components. Symmetric = one shared key. Phishing = fake emails/sites.'
      }
    },
    {
      id: 'cspfts1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Security Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Encryption in which a public key encrypts and only a private key decrypts is called ___',
            options: ['Public key encryption (a key pair)', 'Symmetric encryption (one shared key)', 'Multifactor authentication (two steps)', 'No encryption (plain, readable text)']
          },
          {
            label: 'Keylogging works by ___',
            options: ['Recording each keystroke a user types to capture their passwords', 'Guessing many passwords until one account finally lets the attacker in', 'Tricking users into revealing login credentials through fake emails', 'Setting up a fake wireless network that intercepts users\' traffic']
          },
          {
            label: 'A network where every node connects to every other node is the MOST ___',
            options: ['Fault tolerant (maximum redundancy)', 'Fragile (any one link failure splits it)', 'Centralized (all traffic through one hub)', 'Inexpensive (fewest cables required)']
          }
        ],
        correctAnswers: ['Public key encryption (a key pair)', 'Recording each keystroke a user types to capture their passwords', 'Fault tolerant (maximum redundancy)'],
        hint1: 'Public key encrypts, private key decrypts.',
        hint2: 'Key + logging.',
        hint3: 'Maximum connections = maximum backup paths.',
        explanation: 'A public/private key pair is public key encryption. Keylogging records keystrokes. Full mesh = most fault tolerant.'
      }
    },
    {
      id: 'cspfts1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Fault Tolerance & Security

- **Redundancy** is the #1 fault tolerance mechanism — multiple paths and backups
- Know symmetric (one shared key) vs public key (public key encrypts, private key decrypts)
- Certificate authorities issue digital certificates that validate ownership of encryption keys
- Know common threats: phishing, malware and viruses, keylogging, rogue access points
- A single point of failure means the system is NOT fault tolerant at that point
- More connections in a network = more redundancy = more fault tolerant
      `
    },
    {
      id: 'cspfts1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A company stores customer data on a single server with no backups. A hard drive fails. What is the result?',
            options: [
              'The data is restored automatically from the cloud provider',
              'The data is lost because no other copy of it exists',
              'The data can be rebuilt from what was cached in the server\'s RAM',
              'The operating system recreates the files because it logs every write'
            ],
            correctAnswer: 1,
            explanation: 'Without redundancy, such as a backup copy on another device, a single hardware failure causes permanent data loss. This is why redundancy is critical for fault tolerance.'
          },
          {
            question: 'Alice wants to send a secure message to Bob. She encrypts it with Bob\'s public key. Who can decrypt it?',
            options: [
              'Anyone who has Bob\'s public key',
              'Only Bob, using his private key',
              'Only Alice, using her private key',
              'Both Alice and Bob, using the public key'
            ],
            correctAnswer: 1,
            explanation: 'In public key encryption, data encrypted with the public key can ONLY be decrypted with the matching private key. Only Bob has his private key, so only Bob can read the message.'
          }
        ]
      }
    }
  ]
};
