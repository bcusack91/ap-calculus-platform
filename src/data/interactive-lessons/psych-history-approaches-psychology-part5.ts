export const psychHistoryApproachesPart5Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo5-ethics',
      type: 'text' as const,
      content: `
# ## Ethics in Psychological Research

### APA Ethical Guidelines

1. **Informed consent:** participants must know what the study involves
2. **Deception:** allowed only when necessary, must debrief afterward
3. **Confidentiality:** protect participants' personal information
4. **Right to withdraw:** participants can leave at any time
5. **Debriefing:** explain the true purpose of the study afterward
6. **Minimize harm:** avoid physical and psychological harm

### Institutional Review Board (IRB)

- Reviews all research proposals involving human subjects
- Ensures ethical standards are met
- Weighs potential benefits against risks

### Famous Ethical Controversies

| Study | Researcher | Ethical Issue |
|-------|-----------|---------------|
| **Milgram obedience** | Milgram | Psychological distress |
| **Stanford prison** | Zimbardo | Harm to participants |
| **Little Albert** | Watson | Conditioning fear in infant |
      `
    },
    {
      id: 'histo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Informed consent requires that participants:',
            options: [
              'Sign a legal contract',
              'Know what the study involves before participating',
              'Are paid for their time',
              'Have a psychology background'
            ],
            correctAnswer: 1,
            explanation: 'Informed consent means participants must be told what the study involves and voluntarily agree to participate before the study begins.'
          }
        ]
      }
    },
    {
      id: 'histo5-animal',
      type: 'text' as const,
      content: `
# ## Animal Research Ethics

- **IACUC** (Institutional Animal Care and Use Committee) oversees animal research
- Animals must be treated humanely
- Research must have scientific merit
- Minimize pain and suffering
- Use alternatives when possible

Animal research has contributed to understanding of:
- Learning (conditioning)
- Brain function
- Drug effects
- Genetics of behavior
      `
    },
    {
      id: 'histo5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Debriefing occurs:',
            options: [
              'Before the study begins',
              'During data collection',
              'After the study, to explain the true purpose',
              'Only if deception was used'
            ],
            correctAnswer: 2,
            explanation: 'Debriefing occurs after the study to explain the true purpose, address any deception, and ensure participant well-being.'
          }
        ]
      }
    },
    {
      id: 'histo5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The committee that reviews research ethics is the ___',
            options: ['APA', 'IRB', 'NIH', 'FDA']
          },
          {
            label: 'Participants must always have the right to ___',
            options: ['be paid', 'withdraw', 'see results', 'choose their group']
          },
          {
            label: 'The Milgram study raised concerns about ___',
            options: ['animal welfare', 'participant distress', 'data fabrication', 'informed consent']
          }
        ],
        correctAnswers: ['IRB', 'withdraw', 'participant distress'],
        hint1: 'This board reviews all human research proposals.',
        hint2: 'Participation must always be voluntary.',
        hint3: 'Participants showed extreme anxiety during this obedience study.',
        explanation: 'The IRB reviews research ethics. Participants can always withdraw. The Milgram study caused significant psychological distress.'
      }
    }
  ]
}
