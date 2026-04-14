export const psychHistoryApproachesPart5Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo5-ethics',
      type: 'text' as const,
      content: `
## Ethics in Psychological Research

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
## Animal Research Ethics

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
      id: 'histo5-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What board reviews all research proposals involving human subjects?

      2) What ethical principle requires telling participants the true purpose after a study?

      3) What committee oversees animal research ethics?

      Use the exact abbreviation or term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['IRB', 'debriefing', 'IACUC'],
        hint1: 'Three-letter abbreviation: Institutional Review ___',
        hint2: 'Starts with: D — happens after the study ends',
        hint3: 'Abbreviation for Institutional Animal Care and Use Committee',
        explanation: 'Expected answers: IRB (Institutional Review Board reviews human research), debriefing (explaining the true purpose afterward), and IACUC (oversees animal research ethics).'
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
    },
    {
      id: 'histo5-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Deception is NOT always unethical — it's allowed when necessary, but participants MUST be debriefed afterward.
      - Debriefing happens AFTER the study, not before — don't confuse it with informed consent (which happens before).
      - The IRB does NOT only review deceptive studies — it reviews ALL human research proposals regardless of perceived risk.
      - The Milgram study was controversial because of psychological distress, NOT physical harm — participants weren't actually shocking anyone.
      - Informed consent does NOT mean participants know everything about the study — some details may be withheld if deception is justified.

      ### AP Strategy Moves
      - Ethics questions often present scenarios and ask which principle was violated — read for the specific violation (consent? deception without debriefing? harm?).
      - Know the big three controversial studies cold: Milgram (obedience/distress), Zimbardo (prison/harm), Watson/Little Albert (fear conditioning in infant).
      - If a question asks about animal research, think IACUC. If it asks about human research, think IRB.
      - Debriefing and informed consent are the most commonly tested ethical concepts — know exactly when each occurs and what each requires.
      `
    },
    {
      id: 'histo5-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher tells participants they are testing "memory skills," but the study actually measures conformity. After the study, the researcher explains the true purpose and answers questions. Which ethical principles are relevant?',
            options: [
              'Deception was used, but debriefing made it ethically acceptable',
              'This study is unethical because any deception violates informed consent',
              'The researcher should have debriefed before the study, not after',
              'The IRB would automatically reject any study involving deception'
            ],
            correctAnswer: 0,
            explanation: 'Deception is permitted in psychology when necessary and when followed by debriefing. The researcher properly debriefed participants by explaining the true purpose afterward. The APA allows deception when the research has scientific merit and harm is minimized.'
          },
          {
            question: 'A psychology student reads that Zimbardo\'s Stanford prison experiment was halted early. What was the primary ethical concern?',
            options: [
              'Participants were not paid for their time',
              'Guards and prisoners experienced significant psychological harm and distress',
              'The study used deception without debriefing',
              'The results could not be replicated'
            ],
            correctAnswer: 1,
            explanation: 'The Stanford prison experiment was stopped after 6 days (planned for 14) because participants playing guards became abusive and "prisoners" experienced severe emotional distress. The primary ethical violation was failure to minimize harm — the situation escalated beyond acceptable levels.'
          }
        ]
      }
    }
  ]
}
