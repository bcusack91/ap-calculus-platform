export const cspImpactOfComputingPart1Data = {
  topicSlug: 'csp-impact-of-computing',
  sections: [
    {
      id: 'cspic1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'cspic1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'cspic1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The gap between those with and without access to technology is called the digital _______.

2) When a computer system produces systematically unfair results due to biased data or assumptions, this is called algorithmic _______.

3) Projects that rely on contributions from large groups of people (like Wikipedia) use _______.
      `,
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
      content: `
**Classify the Impact** 🔍
      `,
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
      content: `
## AP Exam Strategy: Impact of Computing

- Any innovation can have BOTH beneficial AND harmful effects — always consider both sides
- **Digital divide** questions test understanding of WHO lacks access and WHY it matters
- **Algorithmic bias** stems from biased data, not intentional malice — but the effects are real
- Know examples of crowdsourcing: Wikipedia, open source, citizen science
- Copyright protects original works; open source/Creative Commons offer flexible alternatives
- Exam tip: when asked about impact, provide specific examples with both positive and negative effects
      `
    },
    {
      id: 'cspic1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
