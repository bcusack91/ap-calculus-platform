export const cspSocialEthicalImpactsPart1Data = {
  topicSlug: 'csp-social-ethical-impacts',
  sections: [
    {
      id: 'cspsei1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'cspsei1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'cspsei1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Legal protection for creative works like books, music, and software is called _______.

2) Software that allows anyone to view, modify, and share the source code is called _______ source.

3) The trade-off between personal _______ and convenience is a central issue in modern computing.
      `,
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
      content: `
**Classify the Protection** 🔍
      `,
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
      content: `
## AP Exam Strategy: Social & Ethical Impacts

- Know the **privacy vs convenience** trade-off — free services collect data for targeted ads
- Be able to argue BOTH sides of surveillance vs privacy debates
- **Copyright** (creative works), **Patent** (inventions), **Trademark** (brands) — know the differences
- Know software license types: proprietary, open source, Creative Commons, public domain
- Ethical questions often have no single "right" answer — show you understand BOTH sides
- The AP exam tests whether you can identify stakeholders and impacts, not whether you pick a "correct" side
      `
    },
    {
      id: 'cspsei1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
