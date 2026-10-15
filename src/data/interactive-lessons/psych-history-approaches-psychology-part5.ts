export const psychHistoryApproachesPart5Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo5-ethics',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 5 of 7 — Research Ethics**

> 🔑 **Key Concept:** The exam asks you to evaluate whether a study followed appropriate ethical procedures (skill 2.D): institutional review, informed consent or assent, protection from harm, confidentiality or anonymity, justified use of deception, and debriefing.

### Ethical Guidelines for Research with People

| Guideline | What it requires | When it happens |
|-----------|-----------------|-----------------|
| **Institutional review** | An institutional review board (IRB) reviews the study before it begins and weighs risks against benefits | Before the study |
| **Informed consent** | Participants learn what the study involves and agree voluntarily, knowing they can withdraw at any time | Before the study |
| **Informed assent** | Minors (or others who cannot legally consent) agree to take part, while a parent or guardian gives consent | Before the study |
| **Protection from harm** | Researchers minimize physical and psychological risks | Throughout |
| **Confidentiality** | Researchers know who participants are but keep their information private | Throughout and after |
| **Anonymity** | Researchers never record who gave which responses | Throughout |
| **Deception** | Misleading participants is allowed only when necessary and when it causes no lasting harm, sometimes using **confederates** (people secretly working with the researcher) | During the study |
| **Debriefing** | Researchers explain the true purpose, reveal any deception, and answer questions | After the study |

### Confidentiality vs. Anonymity
- **Confidential:** "Your name is on file, but no one outside the research team will see your answers."
- **Anonymous:** "We are not collecting your name at all, so no one can link answers to you."

### Famous Studies That Shaped Ethics Rules

| Study | Ethical issue |
|-------|---------------|
| **Milgram's obedience studies** | Participants were deceived and experienced intense stress while believing they were shocking another person |
| **The Stanford prison study** | Participants were harmed emotionally, and the study was stopped early |
| **The "Little Albert" study** | An infant was conditioned to fear a white rat, and the fear was never removed |

These studies are useful examples of WHY the guidelines exist. The exam focuses on applying the guidelines to a described study.
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
            question: 'Informed consent requires that participants',
            options: [
              'sign a legal contract waiving their right to withdraw',
              'know what the study involves before they agree to take part',
              'are paid fairly for the time they spend in the study',
              'have the research background to judge the study\'s methods'
            ],
            correctAnswer: 1,
            explanation: 'Informed consent means participants are told what the study involves and agree voluntarily before it begins, with the right to withdraw at any time.'
          },
          {
            question: 'A researcher studying 14-year-olds gets signed permission from parents and also asks each teen to agree to participate. Asking the teens to agree is called',
            options: [
              'debriefing',
              'informed assent',
              'anonymity',
              'peer review'
            ],
            correctAnswer: 1,
            explanation: 'Minors give informed assent, while their parents or guardians give informed consent.'
          }
        ]
      }
    },
    {
      id: 'histo5-animal',
      type: 'text' as const,
      content: `
## Research with Non-Human Animals

Institutional review applies to research with non-human animals too. A review committee checks that:
- the research has scientific value that could not be gained another way,
- animals are housed and treated humanely,
- pain and distress are minimized, and
- alternatives are used whenever possible.

Animal research has contributed to understanding of learning (conditioning), brain function, and drug effects.

## Worked Example: Evaluating a Study's Ethics

*Hypothetical study:* Researchers tell high school volunteers they are testing "reading speed." Actually, they are measuring whether students conform when a **confederate** gives a wrong answer out loud. Parents sign consent forms, students sign assent forms, and response sheets are labeled with numbers instead of names. At the end, the researchers explain the real purpose and why deception was needed.

| Guideline | Followed? | Evidence |
|-----------|-----------|---------|
| Informed consent and assent | ✔ | Parents signed consent forms; students signed assent forms |
| Deception | ✔ (justified) | The true purpose was hidden because telling it would change behavior; a confederate was used |
| Confidentiality | ✔ | Numbers replaced names |
| Debriefing | ✔ | The true purpose was explained afterward |

On the AAQ, you will **identify one guideline described in the study** and **describe how the researchers applied it**, for example: "The researchers used debriefing: at the end they explained that the study measured conformity, not reading speed."
      `
    },
    {
      id: 'histo5-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What board reviews research proposals involving human participants? (abbreviation)

      2) What procedure explains the true purpose of a study to participants after it ends?

      3) What term describes a person who secretly works with the researcher while posing as a participant?

      Use the exact abbreviation or term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['IRB', 'debriefing', 'confederate'],
        hint1: 'Three-letter abbreviation: Institutional Review ___',
        hint2: 'Starts with: D — happens after the study ends',
        hint3: 'Starts with: C — an insider playing a role',
        explanation: 'Expected answers: IRB (institutional review board), debriefing (explaining the true purpose afterward), and confederate (a researcher\'s accomplice posing as a participant).'
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
            label: 'A survey that never collects names, so no answer can be linked to a person, is _____.',
            options: ['confidential', 'anonymous', 'debriefed', 'deceptive']
          },
          {
            label: 'Participants must always have the right to _____.',
            options: ['be paid', 'withdraw', 'see results', 'choose their group']
          },
          {
            label: 'Milgram\'s obedience studies raised concerns mainly about _____.',
            options: ['animal welfare', 'participant distress', 'data fabrication', 'sampling bias']
          }
        ],
        correctAnswers: ['anonymous', 'withdraw', 'participant distress'],
        hint1: 'No names collected at all.',
        hint2: 'Participation must stay voluntary.',
        hint3: 'Participants showed extreme stress during the study.',
        explanation: 'A survey that never records identities is anonymous. Participants can always withdraw. Milgram\'s participants experienced intense stress, which raised concerns about protection from harm.'
      }
    },
    {
      id: 'histo5-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Deception is NOT always unethical. It is allowed when necessary and harmless, but participants MUST be debriefed afterward.
- Debriefing happens AFTER the study; informed consent happens BEFORE.
- Confidential is NOT the same as anonymous. Confidential data have names that are protected; anonymous data never had names.
- The IRB reviews ALL human research proposals, not only risky or deceptive ones.
- Informed consent does NOT mean participants know every detail. Some details may be withheld when deception is justified.

### AP Strategy Moves
- Ethics questions often describe a study and ask which guideline was followed or violated. Find the specific procedure in the description (signed forms? ID numbers? an explanation at the end?).
- For minors, look for BOTH parental consent and the child's assent.
- On the AAQ, name ONE guideline and quote how the researchers applied it. Do not list every guideline.
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
            question: 'A researcher tells participants they are testing "memory skills," but the study actually measures conformity. After the study, she explains the true purpose and answers questions. Which statement best evaluates the ethics?',
            options: [
              'Deception was used, and debriefing afterward made it acceptable',
              'The study is unethical, since any deception violates informed consent',
              'The researcher should have debriefed before the study, not after',
              'The IRB would reject the study, since it involved deception'
            ],
            correctAnswer: 0,
            explanation: 'Deception is permitted when necessary and followed by debriefing. The researcher explained the true purpose afterward, so the deception was handled properly.'
          },
          {
            question: 'A researcher records participants\' names next to their answers about drug use and later shares the list with their school principal. Which guideline was violated?',
            options: [
              'Informed assent',
              'Debriefing',
              'Confidentiality',
              'Random assignment'
            ],
            correctAnswer: 2,
            explanation: 'Sharing identified answers with someone outside the research team breaks confidentiality. Random assignment is a design feature, not an ethical guideline.'
          }
        ]
      }
    }
  ]
}
