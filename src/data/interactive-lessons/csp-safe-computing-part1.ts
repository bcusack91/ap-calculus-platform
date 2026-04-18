export const cspSafeComputingPart1Data = {
  topicSlug: 'csp-safe-computing',
  sections: [
    {
      id: 'cspsc1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'cspsc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'cspsc1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Data that can identify a specific individual is called Personally _______ Information (PII).

2) Using a password (something you know) PLUS a phone code (something you have) is called _______-factor authentication.

3) The trail of data created by your online activity is called your digital _______.
      `,
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
      content: `
**Classify the Concept** 🔍
      `,
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
      content: `
## AP Exam Strategy: Safe Computing

- Know what **PII** is — and that INDIRECT PII combined can identify someone
- Three auth factors: know (password), have (phone), are (fingerprint)
- **Multi-factor** = two DIFFERENT factors (password + password is NOT multi-factor)
- **Authentication** (who are you?) vs **Authorization** (what can you do?) — know the difference
- Digital footprint is largely permanent — even deleted content may persist
- Cookies track behavior; Terms of Service often grant data collection rights
      `
    },
    {
      id: 'cspsc1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
