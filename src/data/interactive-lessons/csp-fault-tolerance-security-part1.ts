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

**Fault tolerance** is the ability of a system to continue operating when a component fails.

### Redundancy
The primary method for achieving fault tolerance is **redundancy** — having backup components or paths.

| Type | Description | Example |
|------|-----------|---------|
| **Path redundancy** | Multiple routes between nodes | Internet routing around a failed link |
| **Data redundancy** | Multiple copies of data | Cloud backups, RAID drives |
| **Hardware redundancy** | Backup equipment | Redundant servers, power supplies |

### Internet Redundancy

\`\`\`
    A ---- B ---- C
    |      |      |
    D ---- E ---- F
\`\`\`

If the link between B and C fails, data can route A → B → E → F → C or A → D → E → F → C. Multiple paths ensure no single failure brings down the network.

> 🔑 The Internet was designed with redundancy so that **no single point of failure** can take down the entire network. Packets automatically reroute around failed links.
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
              'All communication stops immediately',
              'Data is automatically rerouted through alternative paths',
              'The failed link repairs itself',
              'Users must manually select a new path'
            ],
            correctAnswer: 1,
            explanation: 'Routers automatically detect failed links and reroute packets through alternative paths. This is the key benefit of redundancy — the network continues to function despite failures.'
          },
          {
            question: 'Which network design is MORE fault tolerant?\nA: Each node connected to exactly one other node (chain)\nB: Each node connected to multiple other nodes (mesh)',
            options: [
              'A — simpler is more reliable',
              'B — multiple connections provide alternative paths if one fails',
              'Both are equally fault tolerant',
              'Neither is fault tolerant'
            ],
            correctAnswer: 1,
            explanation: 'A mesh network (B) has multiple paths between nodes. If one connection fails, data can take another route. A chain network has single points of failure — one broken link disconnects part of the network.'
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

| Type | Keys | Speed | Use Case |
|------|------|-------|----------|
| **Symmetric** | One shared key for encrypt and decrypt | Fast | Encrypting stored data |
| **Asymmetric** | Public key (encrypt) + Private key (decrypt) | Slower | Secure communication, HTTPS |

### How HTTPS Uses Both
1. Browser gets web server public key (asymmetric)
2. Browser encrypts a session key with the public key
3. Server decrypts session key with its private key
4. Both sides use the session key (symmetric) for fast communication

## Common Threats

| Threat | Description |
|--------|-----------|
| **Phishing** | Fake emails/sites tricking users into giving up passwords |
| **Malware** | Software designed to damage or gain unauthorized access |
| **DDoS** | Distributed Denial of Service — flooding a server with traffic |
| **Man-in-the-middle** | Attacker intercepts communication between two parties |
| **Keylogger** | Records everything typed, capturing passwords |
| **Ransomware** | Encrypts user files and demands payment to unlock |
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
            label: 'HTTPS uses ___ encryption for the initial key exchange',
            options: ['Asymmetric (public/private key pair)', 'Symmetric (shared key)', 'No encryption', 'Caesar cipher']
          },
          {
            label: 'A DDoS attack works by ___',
            options: ['Flooding a server with traffic so it cannot serve legitimate users', 'Stealing passwords', 'Encrypting user files', 'Guessing passwords']
          },
          {
            label: 'A network where every node connects to every other node is the MOST ___',
            options: ['Fault tolerant (maximum redundancy)', 'Vulnerable', 'Efficient', 'Simple']
          }
        ],
        correctAnswers: ['Asymmetric (public/private key pair)', 'Flooding a server with traffic so it cannot serve legitimate users', 'Fault tolerant (maximum redundancy)'],
        hint1: 'Public key encrypts, private key decrypts.',
        hint2: 'Denial of service = denying access by overloading.',
        hint3: 'Maximum connections = maximum backup paths.',
        explanation: 'HTTPS starts with asymmetric. DDoS floods servers. Full mesh = most fault tolerant.'
      }
    },
    {
      id: 'cspfts1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Fault Tolerance & Security

- **Redundancy** is the #1 fault tolerance mechanism — multiple paths and backups
- Know symmetric (one key, fast) vs asymmetric (two keys, secure key exchange)
- HTTPS uses BOTH: asymmetric for initial handshake, symmetric for ongoing communication
- Know common attacks: phishing, malware, DDoS, man-in-the-middle
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
              'Data is automatically recovered from the cloud',
              'Customer data is permanently lost because there is no redundancy',
              'The data can be recovered from RAM',
              'The operating system recreates the data'
            ],
            correctAnswer: 1,
            explanation: 'Without redundancy (backups, RAID, etc.), a single hardware failure causes permanent data loss. This is why redundancy is critical for fault tolerance.'
          },
          {
            question: 'Alice wants to send a secure message to Bob. She encrypts it with Bob public key. Who can decrypt it?',
            options: [
              'Anyone with the public key',
              'Only Bob, using his private key',
              'Only Alice, using her private key',
              'No one — public key encryption cannot be decrypted'
            ],
            correctAnswer: 1,
            explanation: 'In asymmetric encryption, data encrypted with the public key can ONLY be decrypted with the corresponding private key. Only Bob has his private key, so only Bob can read the message.'
          }
        ]
      }
    }
  ]
};
