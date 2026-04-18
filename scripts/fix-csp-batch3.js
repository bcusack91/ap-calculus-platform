const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Data Compression & Analysis ───
write('csp-data-compression-analysis-part1.ts', `export const cspDataCompressionAnalysisPart1Data = {
  topicSlug: 'csp-data-compression-analysis',
  sections: [
    {
      id: 'cspdca1-intro',
      type: 'text' as const,
      content: \`
# 📦 Data Compression & Analysis

**Part 1 of 7 — Lossless vs Lossy, Compression Techniques, and Data Analysis**

---

## Why Compress Data?

Smaller files mean:
- Faster transmission over networks
- Less storage space needed
- Lower bandwidth usage
- Faster loading for users

---

## Lossless vs Lossy Compression

| Type | Data Loss? | Quality | Smaller? | Use Cases |
|------|-----------|---------|----------|-----------|
| **Lossless** | No — original perfectly restored | Identical to original | Moderate reduction | Text, code, spreadsheets, medical images |
| **Lossy** | Yes — some data permanently removed | Slightly reduced | Much smaller | Photos (JPEG), music (MP3), video (MP4) |

### Lossless Example: Run-Length Encoding
\\\`\\\`\\\`
Original:  AAABBBCCDDDDDD
Compressed: 3A3B2C6D
\\\`\\\`\\\`
The original can be perfectly reconstructed from the compressed version.

### Lossy Example: JPEG Compression
A photograph has millions of color values. JPEG removes subtle color differences that human eyes cannot easily detect. The file shrinks dramatically, but the removed data cannot be recovered.

> 🔑 **Lossless** = perfect reconstruction. **Lossy** = smaller file but permanent data loss. Choose based on whether quality loss is acceptable.
      \`
    },
    {
      id: 'cspdca1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A hospital stores digital X-ray images. Which compression type should they use?',
            options: [
              'Lossy — to save storage space',
              'Lossless — medical images cannot lose any detail',
              'No compression needed',
              'Either type works equally well'
            ],
            correctAnswer: 1,
            explanation: 'Medical images require lossless compression because any lost detail could affect diagnosis. Lossy compression removes data permanently, which is unacceptable for medical records.'
          },
          {
            question: 'A music streaming service wants to minimize bandwidth. Which compression is most appropriate?',
            options: [
              'Lossless — to preserve perfect audio quality',
              'Lossy — most listeners cannot hear the removed frequencies, and files are much smaller',
              'No compression — music must be uncompressed',
              'Run-length encoding'
            ],
            correctAnswer: 1,
            explanation: 'Lossy compression (like MP3) removes frequencies most people cannot hear, dramatically reducing file size. For streaming where bandwidth matters, lossy is the standard choice.'
          }
        ]
      }
    },
    {
      id: 'cspdca1-content',
      type: 'text' as const,
      content: \`
## Data Analysis and Visualization

### Extracting Patterns from Data
When working with large datasets, visualization reveals patterns that raw numbers cannot.

| Visualization | Best For |
|--------------|---------|
| **Bar chart** | Comparing categories |
| **Line graph** | Showing trends over time |
| **Scatter plot** | Showing relationships between two variables |
| **Pie chart** | Showing parts of a whole |
| **Histogram** | Showing frequency distributions |

### Filtering and Transforming Data
\\\`\\\`\\\`
// Filter: Keep only rows where score > 80
// Sort: Order by date ascending
// Aggregate: Calculate average score per student
\\\`\\\`\\\`

## Interpreting Results
- Look for **trends** (increasing, decreasing, stable)
- Identify **outliers** (values far from the norm)
- Check for **clusters** (groups of similar data points)
- Be cautious of **bias** in data collection

### Challenges with Large Datasets
- **Storage**: Require significant space
- **Privacy**: May contain sensitive personal information
- **Accuracy**: Errors are amplified at scale
- **Bias**: If collection methods are biased, conclusions will be skewed
      \`
    },
    {
      id: 'cspdca1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Compression that can perfectly restore the original data is called _______ compression.

2) MP3 audio files use _______ compression, permanently removing some frequencies.

3) A chart that shows the relationship between two variables using dots is called a _______ plot.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['lossless', 'lossy', 'scatter'],
        hint1: 'No data is lost.',
        hint2: 'Some data is lost permanently.',
        hint3: 'Points are scattered across the graph.',
        explanation: 'Lossless = perfect reconstruction. MP3 = lossy. Two-variable dot chart = scatter plot.'
      }
    },
    {
      id: 'cspdca1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Compression** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'ZIP files use ___ compression (original files perfectly restored)',
            options: ['Lossless', 'Lossy', 'No compression', 'Hybrid']
          },
          {
            label: 'JPEG images use ___ compression (some color detail permanently removed)',
            options: ['Lossy', 'Lossless', 'No compression', 'Encrypted']
          },
          {
            label: 'A line graph is best for showing ___',
            options: ['Trends over time', 'Parts of a whole', 'Individual data points', 'Category comparisons']
          }
        ],
        correctAnswers: ['Lossless', 'Lossy', 'Trends over time'],
        hint1: 'ZIP must restore files perfectly.',
        hint2: 'JPEG sacrifices quality for size.',
        hint3: 'X-axis is usually time.',
        explanation: 'ZIP = lossless. JPEG = lossy. Line graph = trends over time.'
      }
    },
    {
      id: 'cspdca1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Data Compression & Analysis

- Know the difference: **lossless** (ZIP, PNG) vs **lossy** (JPEG, MP3, MP4)
- Lossless for critical data (medical, legal, code). Lossy for media where small quality loss is acceptable
- Run-length encoding is the lossless technique the AP exam expects you to understand
- Data analysis questions test your ability to interpret visualizations and identify patterns
- **Correlation does not imply causation** — always consider confounding variables
- Large datasets can reveal patterns but also amplify errors and privacy concerns
      \`
    },
    {
      id: 'cspdca1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A file is compressed using lossy compression, then compressed again using lossy compression. What happens to quality?',
            options: [
              'Quality improves because compression is applied twice',
              'Quality degrades further because more data is permanently removed in each round',
              'Quality stays the same after the first compression',
              'The file returns to its original quality'
            ],
            correctAnswer: 1,
            explanation: 'Each round of lossy compression removes more data. Compressing an MP3 file again as a lower-bitrate MP3 removes additional frequencies. Quality only goes down, never up. This is called generation loss.'
          },
          {
            question: 'Run-length encoding converts "AAAABBCC" to "4A2B2C". Which input would NOT benefit from this technique?',
            options: [
              'ZZZZZZZZZ (nine Zs)',
              'ABCDEFGH (all different characters)',
              'RRRRRGGGGG (repeated characters)',
              'XXXXXXXXXX (ten Xs)'
            ],
            correctAnswer: 1,
            explanation: 'ABCDEFGH has no repeated consecutive characters. Run-length encoding would produce 1A1B1C1D1E1F1G1H — actually LARGER than the original. RLE works best with long runs of repeated values.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Fault Tolerance & Security ───
write('csp-fault-tolerance-security-part1.ts', `export const cspFaultToleranceSecurityPart1Data = {
  topicSlug: 'csp-fault-tolerance-security',
  sections: [
    {
      id: 'cspfts1-intro',
      type: 'text' as const,
      content: \`
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

\\\`\\\`\\\`
    A ---- B ---- C
    |      |      |
    D ---- E ---- F
\\\`\\\`\\\`

If the link between B and C fails, data can route A → B → E → F → C or A → D → E → F → C. Multiple paths ensure no single failure brings down the network.

> 🔑 The Internet was designed with redundancy so that **no single point of failure** can take down the entire network. Packets automatically reroute around failed links.
      \`
    },
    {
      id: 'cspfts1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
            question: 'Which network design is MORE fault tolerant?\\nA: Each node connected to exactly one other node (chain)\\nB: Each node connected to multiple other nodes (mesh)',
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
      content: \`
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
      \`
    },
    {
      id: 'cspfts1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Having multiple backup paths or components so a system continues working after a failure is called _______.

2) Encryption that uses one shared key for both encryption and decryption is called _______ encryption.

3) An attack that tricks users into revealing passwords through fake emails or websites is called _______.
      \`,
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
      content: \`
**Security Classification** 🔍
      \`,
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
      content: \`
## AP Exam Strategy: Fault Tolerance & Security

- **Redundancy** is the #1 fault tolerance mechanism — multiple paths and backups
- Know symmetric (one key, fast) vs asymmetric (two keys, secure key exchange)
- HTTPS uses BOTH: asymmetric for initial handshake, symmetric for ongoing communication
- Know common attacks: phishing, malware, DDoS, man-in-the-middle
- A single point of failure means the system is NOT fault tolerant at that point
- More connections in a network = more redundancy = more fault tolerant
      \`
    },
    {
      id: 'cspfts1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
`);

// ─── 3. Safe Computing ───
write('csp-safe-computing-part1.ts', `export const cspSafeComputingPart1Data = {
  topicSlug: 'csp-safe-computing',
  sections: [
    {
      id: 'cspsc1-intro',
      type: 'text' as const,
      content: \`
# 🔒 Safe Computing

**Part 1 of 7 — Privacy, Authentication, and Online Safety**

---

## Personal Data and Privacy

### What Is PII?
**Personally Identifiable Information (PII)** is data that can identify a specific individual.

| Direct PII | Indirect PII |
|-----------|-------------|
| Full name | ZIP code |
| Social Security number | Date of birth |
| Email address | Gender |
| Phone number | Browsing history |
| Home address | Purchase history |
| Biometric data | Location data |

> 🔑 **Indirect PII** alone may not identify a person, but **combining** multiple pieces of indirect PII often can. ZIP code + date of birth + gender can uniquely identify 87% of Americans.

---

## How Data Is Collected

| Method | Example |
|--------|---------|
| **Cookies** | Websites track browsing behavior across sessions |
| **Location services** | GPS data from mobile devices |
| **Social media** | Posts, likes, friend connections |
| **Transactions** | Credit card purchases, online orders |
| **Search history** | Queries entered into search engines |
| **IoT devices** | Smart speakers, fitness trackers |

Companies collect this data for targeted advertising, product improvement, and analytics. Users often agree to data collection through **Terms of Service** agreements that many do not read.
      \`
    },
    {
      id: 'cspsc1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which combination of indirect PII could potentially identify a specific person?',
            options: [
              'Favorite color and preferred music genre',
              'ZIP code, date of birth, and gender',
              'The weather in their city',
              'The brand of phone they use'
            ],
            correctAnswer: 1,
            explanation: 'Research shows ZIP code + date of birth + gender can uniquely identify 87% of Americans. Each piece alone is not identifying, but combined they narrow down to one person.'
          },
          {
            question: 'What is the primary purpose of cookies on websites?',
            options: [
              'To protect against viruses',
              'To speed up the internet connection',
              'To track user behavior and preferences across sessions',
              'To encrypt all website data'
            ],
            correctAnswer: 2,
            explanation: 'Cookies are small files stored by websites on your computer. They track browsing behavior, remember login status, and enable personalized advertising by following users across sites.'
          }
        ]
      }
    },
    {
      id: 'cspsc1-content',
      type: 'text' as const,
      content: \`
## Authentication and Authorization

### Authentication Methods
| Method | What You | Example |
|--------|---------|---------|
| **Know** | Knowledge factor | Password, PIN, security question |
| **Have** | Possession factor | Phone (for SMS code), security key |
| **Are** | Biometric factor | Fingerprint, face scan, iris scan |

### Multi-Factor Authentication (MFA)
Using TWO OR MORE different factors together. Example: password (know) + phone code (have).

### Strong Password Practices
- Use long, unique passwords for each account
- Combine uppercase, lowercase, numbers, and symbols
- NEVER reuse passwords across sites
- Use a password manager to store them securely

## Authorization vs Authentication
| Concept | Question Answered |
|---------|-----------------|
| **Authentication** | "Who are you?" (Verify identity) |
| **Authorization** | "What are you allowed to do?" (Verify permissions) |

## Digital Footprint
Everything you do online creates a **digital footprint** — a trail of data including:
- Posts, comments, and likes on social media
- Websites visited and searches made
- Emails sent and received
- Files uploaded and downloaded

> ⚠️ Your digital footprint is largely **permanent**. Deleted posts may still exist in backups, screenshots, or cached versions. Future employers and colleges may review it.
      \`
    },
    {
      id: 'cspsc1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Data that can identify a specific individual is called Personally _______ Information (PII).

2) Using a password (something you know) PLUS a phone code (something you have) is called _______-factor authentication.

3) The trail of data created by your online activity is called your digital _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['Identifiable', 'multi', 'footprint'],
        hint1: 'PII = Personally ___ Information.',
        hint2: 'Multiple factors combined.',
        hint3: 'Like footprints in sand, but digital.',
        explanation: 'PII = Personally Identifiable Information. Multi-factor = 2+ auth methods. Digital footprint = online trail.'
      }
    },
    {
      id: 'cspsc1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A fingerprint scan is an example of ___ authentication',
            options: ['Something you ARE (biometric)', 'Something you KNOW', 'Something you HAVE', 'Multi-factor by itself']
          },
          {
            label: 'Checking if a logged-in user has permission to delete files is ___',
            options: ['Authorization', 'Authentication', 'Encryption', 'Compression']
          },
          {
            label: 'Using the same password on every website is dangerous because ___',
            options: ['If one site is breached, all accounts are compromised', 'Passwords expire faster', 'Websites reject reused passwords', 'It slows down login times']
          }
        ],
        correctAnswers: ['Something you ARE (biometric)', 'Authorization', 'If one site is breached, all accounts are compromised'],
        hint1: 'Biometrics = body-based identification.',
        hint2: 'Already logged in — now checking permissions.',
        hint3: 'One breach unlocks everything.',
        explanation: 'Fingerprint = biometric. Permission check = authorization. Password reuse = cascade risk.'
      }
    },
    {
      id: 'cspsc1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Safe Computing

- Know what **PII** is — and that INDIRECT PII combined can identify someone
- Three auth factors: know (password), have (phone), are (fingerprint)
- **Multi-factor** = two DIFFERENT factors (password + password is NOT multi-factor)
- **Authentication** (who are you?) vs **Authorization** (what can you do?) — know the difference
- Digital footprint is largely permanent — even deleted content may persist
- Cookies track behavior; Terms of Service often grant data collection rights
      \`
    },
    {
      id: 'cspsc1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A website requires both a password and a fingerprint to log in. This is an example of:',
            options: [
              'Single-factor authentication',
              'Multi-factor authentication (knowledge + biometric)',
              'Authorization',
              'Encryption'
            ],
            correctAnswer: 1,
            explanation: 'Password = something you know. Fingerprint = something you are. Using two DIFFERENT factors = multi-factor authentication. This is much more secure than a password alone.'
          },
          {
            question: 'A data breach exposes millions of users email addresses and hashed passwords. Users who reused that password on other sites are at risk because:',
            options: [
              'The breach also affects other websites directly',
              'Attackers can try those credentials on other services (credential stuffing)',
              'Email addresses become invalid after a breach',
              'Hashed passwords cannot be cracked'
            ],
            correctAnswer: 1,
            explanation: 'If stolen credentials work on other sites (because the user reused the password), attackers gain access to multiple accounts. This is called credential stuffing and is why password reuse is dangerous.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Impact of Computing ───
write('csp-impact-of-computing-part1.ts', `export const cspImpactOfComputingPart1Data = {
  topicSlug: 'csp-impact-of-computing',
  sections: [
    {
      id: 'cspic1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Impact of Computing

**Part 1 of 7 — Digital Divide, Bias, and Beneficial/Harmful Effects**

---

## The Digital Divide

The **digital divide** is the gap between those who have access to technology and the Internet and those who do not.

| Factor | Description |
|--------|-----------|
| **Economic** | Cost of devices and internet service |
| **Geographic** | Rural areas often lack broadband infrastructure |
| **Age** | Older populations may have less tech literacy |
| **Education** | Schools in different areas have unequal tech resources |
| **Global** | Developing nations have less connectivity |

> 🔑 The digital divide creates **inequality of opportunity**. Online education, job applications, healthcare portals, and government services increasingly require internet access.

---

## Beneficial and Harmful Effects

Computing innovations often have BOTH beneficial and harmful consequences:

| Innovation | Beneficial | Harmful |
|-----------|-----------|---------|
| **Social media** | Connect with people worldwide | Cyberbullying, misinformation, addiction |
| **AI/Machine learning** | Medical diagnosis, efficiency | Job displacement, algorithmic bias |
| **Drones** | Disaster relief, delivery | Privacy invasion, weaponization |
| **Facial recognition** | Security, finding missing people | Mass surveillance, racial bias |
| **Self-driving cars** | Reduce human-error accidents | Job loss for drivers, ethical dilemmas |

> 🔑 Most computing innovations have **dual-use** potential — they can be used for good or harm depending on implementation and intent.
      \`
    },
    {
      id: 'cspic1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the digital divide?',
            options: [
              'The difference between digital and analog technology',
              'The gap between those with and without access to computing and the internet',
              'The border between safe and unsafe websites',
              'The split between hardware and software'
            ],
            correctAnswer: 1,
            explanation: 'The digital divide refers to inequalities in access to technology and the internet. It can be economic, geographic, or demographic, and it creates unequal opportunities in education, employment, and services.'
          },
          {
            question: 'Which best describes the impact of most computing innovations?',
            options: [
              'They are always beneficial',
              'They are always harmful',
              'They have both beneficial and harmful effects',
              'Their effects are neutral'
            ],
            correctAnswer: 2,
            explanation: 'Nearly every computing innovation has dual-use potential. Social media connects people (good) but also enables misinformation (bad). The impact depends on how the technology is used.'
          }
        ]
      }
    },
    {
      id: 'cspic1-content',
      type: 'text' as const,
      content: \`
## Algorithmic Bias

**Algorithmic bias** occurs when a computer system systematically produces unfair results. Sources include:

| Source | Example |
|--------|---------|
| **Biased training data** | Facial recognition trained mostly on lighter skin performs poorly on darker skin |
| **Biased assumptions** | Hiring algorithm assumes past hiring patterns (which were biased) are ideal |
| **Exclusion bias** | Health study data excludes certain demographics, skewing results |
| **Proxy variables** | ZIP code used as a proxy correlates with race, introducing discrimination |

### Reducing Bias
- Use diverse, representative training data
- Test systems across different demographic groups
- Include diverse teams in development
- Regularly audit algorithms for biased outcomes

## Crowdsourcing
**Crowdsourcing** leverages large groups of people to contribute to a project:
- **Wikipedia**: Knowledge contributed by millions
- **Open-source software**: Code from global communities
- **Citizen science**: Public helps gather scientific data
- **Crowdfunding**: Financial support from many small donors

## Legal and Ethical Issues
- **Copyright**: Protects creative works. Using without permission may be illegal
- **Open source**: Software freely available to use, modify, and share
- **Creative Commons**: Flexible licensing allowing specific uses of creative work
      \`
    },
    {
      id: 'cspic1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The gap between those with and without access to technology is called the digital _______.

2) When a computer system produces systematically unfair results due to biased data or assumptions, this is called algorithmic _______.

3) Projects that rely on contributions from large groups of people (like Wikipedia) use _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['divide', 'bias', 'crowdsourcing'],
        hint1: 'A divide between the haves and have-nots.',
        hint2: 'The algorithm is biased.',
        hint3: 'Sourcing from the crowd.',
        explanation: 'Digital divide = access gap. Algorithmic bias = unfair systematic results. Crowdsourcing = group contributions.'
      }
    },
    {
      id: 'cspic1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Impact** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A facial recognition system that performs poorly on certain skin tones demonstrates ___',
            options: ['Algorithmic bias (biased training data)', 'The digital divide', 'Data compression', 'Fault tolerance']
          },
          {
            label: 'Free software that anyone can modify and share is called ___',
            options: ['Open source', 'Proprietary', 'Copyrighted', 'Crowdfunded']
          },
          {
            label: 'Rural communities lacking broadband internet is an example of the ___',
            options: ['Digital divide', 'Algorithmic bias', 'Digital footprint', 'Encryption gap']
          }
        ],
        correctAnswers: ['Algorithmic bias (biased training data)', 'Open source', 'Digital divide'],
        hint1: 'Performance differs by demographic due to training data.',
        hint2: 'Open for anyone to use and modify.',
        hint3: 'Unequal access to technology.',
        explanation: 'Skin tone bias = algorithmic bias. Freely modifiable = open source. No broadband = digital divide.'
      }
    },
    {
      id: 'cspic1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Impact of Computing

- Any innovation can have BOTH beneficial AND harmful effects — always consider both sides
- **Digital divide** questions test understanding of WHO lacks access and WHY it matters
- **Algorithmic bias** stems from biased data, not intentional malice — but the effects are real
- Know examples of crowdsourcing: Wikipedia, open source, citizen science
- Copyright protects original works; open source/Creative Commons offer flexible alternatives
- Exam tip: when asked about impact, provide specific examples with both positive and negative effects
      \`
    },
    {
      id: 'cspic1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A hiring algorithm is trained on 10 years of hiring data from a company that historically hired mostly men. What is the likely result?',
            options: [
              'The algorithm will hire the best candidates regardless of gender',
              'The algorithm will likely favor male candidates, reflecting the bias in the training data',
              'The algorithm will favor female candidates to compensate',
              'The training data does not affect algorithm outcomes'
            ],
            correctAnswer: 1,
            explanation: 'The algorithm learns patterns from historical data. If past hiring was biased toward men, the algorithm replicates that bias. This is algorithmic bias — the system reflects the biases present in its training data.'
          },
          {
            question: 'A school district moves all coursework online. Which group is MOST negatively affected?',
            options: [
              'Students who already own computers',
              'Students without reliable internet access at home',
              'Teachers with technology training',
              'Students who prefer digital assignments'
            ],
            correctAnswer: 1,
            explanation: 'Moving coursework online makes internet access essential. Students without reliable home internet are excluded — this is the digital divide in action. The policy widens educational inequality.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Social & Ethical Impacts ───
write('csp-social-ethical-impacts-part1.ts', `export const cspSocialEthicalImpactsPart1Data = {
  topicSlug: 'csp-social-ethical-impacts',
  sections: [
    {
      id: 'cspsei1-intro',
      type: 'text' as const,
      content: \`
# ⚖️ Social & Ethical Impacts of Computing

**Part 1 of 7 — Privacy, Surveillance, Intellectual Property, and Responsibility**

---

## Privacy in the Digital Age

Every digital interaction generates data. The tension between **convenience** and **privacy** is a defining issue of modern computing.

| Scenario | Convenience | Privacy Concern |
|----------|-----------|----------------|
| **Location services** | Maps, directions, local recommendations | Company tracks everywhere you go |
| **Smart speakers** | Hands-free control, quick answers | Device may record conversations |
| **Social media** | Stay connected, share experiences | Platform sells behavioral data to advertisers |
| **Fitness trackers** | Health monitoring | Insurance companies could access health data |
| **Email scanning** | Better spam filtering | Provider reads email content for ad targeting |

> 🔑 **Privacy trade-offs** are everywhere. Users often give up personal data in exchange for free or convenient services without fully understanding what they are agreeing to.

---

## Government Surveillance vs Individual Privacy

| Argument FOR Surveillance | Argument FOR Privacy |
|--------------------------|---------------------|
| National security and counter-terrorism | Constitutional right to privacy |
| Crime prevention | Surveillance can be abused by authorities |
| Public safety | Chilling effect on free speech |
| Finding missing persons | Disproportionate impact on marginalized groups |

There is no single right answer — this is an ongoing societal debate.
      \`
    },
    {
      id: 'cspsei1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'What is the primary trade-off users make when using free online services?',
            options: [
              'Speed for accuracy',
              'Personal data and privacy for convenience and free access',
              'Security for simplicity',
              'Storage space for processing power'
            ],
            correctAnswer: 1,
            explanation: 'Free services (social media, email, search) are funded by advertising. Companies collect user data to target ads. Users trade privacy and personal data for free access to the service.'
          },
          {
            question: 'What is a "chilling effect" in the context of surveillance?',
            options: [
              'Surveillance makes computers run slower',
              'People self-censor and avoid free expression because they know they are being watched',
              'Surveillance lowers the temperature of data centers',
              'It refers to cold storage of digital data'
            ],
            correctAnswer: 1,
            explanation: 'When people know they are being surveilled, they may avoid expressing controversial opinions, organizing protests, or engaging in lawful but sensitive activities. This self-censorship is the chilling effect.'
          }
        ]
      }
    },
    {
      id: 'cspsei1-content',
      type: 'text' as const,
      content: \`
## Intellectual Property

**Intellectual property (IP)** refers to creations of the mind protected by law.

| Protection | What It Covers | Duration |
|-----------|---------------|----------|
| **Copyright** | Creative works (books, music, code, art) | Life of author + 70 years |
| **Patent** | Inventions and processes | 20 years |
| **Trademark** | Brands, logos, slogans | Indefinite (if maintained) |

### Software Licensing

| License Type | Permissions |
|-------------|------------|
| **Proprietary** | Cannot view, modify, or distribute source code |
| **Open source** | Can view, modify, and distribute source code |
| **Creative Commons** | Flexible: author chooses what is allowed (share, modify, commercial use) |
| **Public domain** | No restrictions — free for any use |

## Responsibility in Computing

### Who is responsible when technology causes harm?
- **Developers** who create systems without adequate testing or bias checks
- **Companies** that deploy technology without considering negative impacts
- **Users** who misuse technology for harmful purposes
- **Government** for regulation (or lack thereof)

### Ethical Considerations for Developers
- Consider potential misuse of your software
- Test for bias across demographic groups
- Protect user data and privacy by default
- Be transparent about data collection and use
- Report security vulnerabilities responsibly
      \`
    },
    {
      id: 'cspsei1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Legal protection for creative works like books, music, and software is called _______.

2) Software that allows anyone to view, modify, and share the source code is called _______ source.

3) The trade-off between personal _______ and convenience is a central issue in modern computing.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['copyright', 'open', 'privacy'],
        hint1: 'The right to copy the work.',
        hint2: 'The source code is open to all.',
        hint3: 'Keeping personal information private.',
        explanation: 'Copyright protects creative works. Open source = freely available code. Privacy vs convenience is the key trade-off.'
      }
    },
    {
      id: 'cspsei1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Protection** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A unique invention for a new type of battery is protected by a ___',
            options: ['Patent', 'Copyright', 'Trademark', 'Creative Commons']
          },
          {
            label: 'A logo and brand name (like the Nike swoosh) is protected by a ___',
            options: ['Trademark', 'Patent', 'Copyright', 'Public domain']
          },
          {
            label: 'An author releases a book that anyone can share but not sell commercially. This uses ___',
            options: ['Creative Commons license', 'Public domain', 'Patent', 'Proprietary license']
          }
        ],
        correctAnswers: ['Patent', 'Trademark', 'Creative Commons license'],
        hint1: 'Inventions get patents.',
        hint2: 'Brand identity protection.',
        hint3: 'Flexible licensing with specific conditions.',
        explanation: 'Inventions = patent. Brands = trademark. Selective sharing = Creative Commons.'
      }
    },
    {
      id: 'cspsei1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Social & Ethical Impacts

- Know the **privacy vs convenience** trade-off — free services collect data for targeted ads
- Be able to argue BOTH sides of surveillance vs privacy debates
- **Copyright** (creative works), **Patent** (inventions), **Trademark** (brands) — know the differences
- Know software license types: proprietary, open source, Creative Commons, public domain
- Ethical questions often have no single "right" answer — show you understand BOTH sides
- The AP exam tests whether you can identify stakeholders and impacts, not whether you pick a "correct" side
      \`
    },
    {
      id: 'cspsei1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A developer creates an app and releases it under an open-source license. What can users do?',
            options: [
              'Only use the app; they cannot see the code',
              'View, modify, and redistribute the source code',
              'Nothing — open source means the app is not functional',
              'Only use it for educational purposes'
            ],
            correctAnswer: 1,
            explanation: 'Open source means the source code is freely available. Users can view it, modify it, and distribute their modifications. This enables collaboration, transparency, and community-driven improvement.'
          },
          {
            question: 'A company collects user location data and sells it to advertisers without informing users. Which ethical principle is violated?',
            options: [
              'Copyright law',
              'Transparency and informed consent regarding data collection',
              'Open-source licensing',
              'Patent protection'
            ],
            correctAnswer: 1,
            explanation: 'Users should be informed about what data is collected and how it is used. Selling location data without disclosure violates the principle of transparency and informed consent — a key privacy issue.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with CSP batch 3 (5 files)');
