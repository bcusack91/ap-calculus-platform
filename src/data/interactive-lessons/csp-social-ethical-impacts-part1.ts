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
              'Higher device costs in exchange for faster load times',
              'Personal data and privacy for convenience and free access',
              'Weaker encryption in exchange for simpler login screens',
              'Software ownership in exchange for automatic updates'
            ],
            correctAnswer: 1,
            explanation: 'Free services (social media, email, search) are funded by advertising. Companies collect user data to target ads. Users trade privacy and personal data for free access to the service.'
          },
          {
            question: 'A search engine records each user\'s search history. Which use of that history does the AP framework describe?',
            options: [
              'Making each later search run faster by skipping the routing step',
              'Suggesting websites and targeting ads based on past searches',
              'Encrypting each new search so that no one else can ever read it',
              'Deleting the history automatically once the user closes the browser'
            ],
            correctAnswer: 1,
            explanation: 'Search engines can record and keep a history of searches and use it to suggest websites or for targeted marketing.'
          }
        ]
      }
    },
    {
      id: 'cspsei1-content',
      type: 'text' as const,
      content: `
## Intellectual Property

Material created on a computer is the **intellectual property** of the creator or an organization. Easy access to and distribution of digital files raise concerns about ownership, value, and use, so measures should be taken to safeguard intellectual property. Creative works such as books, music, code, and art are protected by **copyright**.

### Legal Ways to Use Others' Work

| Option | What it allows |
|-------------|------------|
| **Creative Commons** | A public copyright license: the creator gives others the right to share, use, and build on the work |
| **Open source** | Programs made freely available that may be redistributed and modified |
| **Open access** | Online research output free of restrictions on access and of many restrictions on use |
| **Proprietary** (for contrast) | All rights reserved; the code cannot be viewed, modified, or shared |

Material created by someone else should always be **cited**. Using it without permission and presenting it as your own is **plagiarism** and may have legal consequences.

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
            label: 'Online research output that anyone can read free of access restrictions is called ___',
            options: ['Open access', 'Plagiarism', 'Proprietary', 'Crowdfunding']
          },
          {
            label: 'Copying a classmate\'s program and submitting it as your own is ___',
            options: ['Plagiarism', 'Open source', 'Open access', 'Citizen science']
          },
          {
            label: 'An author releases a book that anyone can share but not sell commercially. This uses ___',
            options: ['Creative Commons license', 'Proprietary license', 'All-rights-reserved copyright', 'Open access journal']
          }
        ],
        correctAnswers: ['Open access', 'Plagiarism', 'Creative Commons license'],
        hint1: 'Open to anyone who wants to read it.',
        hint2: 'Presenting someone else\'s work as your own.',
        hint3: 'Flexible licensing with specific conditions.',
        explanation: 'Freely readable research = open access. Passing off others\' work = plagiarism. Selective sharing = Creative Commons.'
      }
    },
    {
      id: 'cspsei1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Social & Ethical Impacts

- Know the **privacy vs convenience** trade-off — free services collect data for targeted ads
- Recognize the arguments on BOTH sides of surveillance vs privacy debates
- Material created on a computer is the creator's intellectual property; cite others' work, and know that passing it off as your own is plagiarism
- Know the legal ways to use others' work: Creative Commons, open source, open access
- Ethical questions often have no single "right" answer — the best choice usually recognizes BOTH sides
- The AP exam tests whether you can identify who is affected and how, not whether you pick a "correct" side
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
              'Use and share it, but never change the source code',
              'Only use it for non-commercial educational purposes'
            ],
            correctAnswer: 1,
            explanation: 'Open source means the source code is freely available. Users can view it, modify it, and distribute their modifications. This enables collaboration, transparency, and community-driven improvement.'
          },
          {
            question: 'A company collects user location data and sells it to advertisers without informing users. Which ethical principle is violated?',
            options: [
              'Copyright protection for the company\'s own app code',
              'Transparency and user consent about personal data use',
              'Open-source licensing terms for third-party libraries',
              'Patent rights over the location-tracking technology'
            ],
            correctAnswer: 1,
            explanation: 'Users should be informed about what data is collected and how it is used. Selling location data without disclosure violates the principle of transparency and informed consent — a key privacy issue.'
          }
        ]
      }
    }
  ]
};
