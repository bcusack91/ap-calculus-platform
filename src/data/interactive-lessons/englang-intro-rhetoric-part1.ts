export const englangIntroRhetoricPart1Data = {
  topicSlug: 'englang-intro-rhetoric',
  sections: [
    {
      id: 'elir1-intro',
      type: 'text' as const,
      content: `
# 🗣️ Introduction to Rhetoric

**Part 1 of 7 — What Rhetoric Is, Why It Matters, and How Writers Persuade**

---

## What Is Rhetoric?

**Rhetoric** is the art of effective communication — the study of how writers and speakers use language to achieve a purpose with a specific audience.

Every act of communication involves choices:
- **What** to say
- **How** to say it
- **Who** you are saying it to
- **Why** you are saying it

> 🔑 Rhetoric is not about tricking people. It is about making **strategic choices** to communicate effectively. A doctor explaining a diagnosis, a lawyer presenting a case, and a student writing an essay all use rhetoric.

---

## The Rhetorical Triangle

| Element | Question | Focus |
|---------|----------|-------|
| **Speaker/Writer** | Who is communicating? | Credibility, tone, perspective |
| **Audience** | Who is being addressed? | Values, expectations, knowledge level |
| **Subject/Message** | What is being communicated? | Claims, evidence, ideas |
| **Purpose** | Why is this being communicated? | Persuade, inform, entertain, call to action |
| **Context** | When and where? | Historical moment, cultural setting, medium |

### Example Analysis
A climate scientist writing a policy brief for Congress:
- **Speaker**: Expert with scientific authority
- **Audience**: Legislators who need actionable recommendations
- **Subject**: Climate data and policy proposals
- **Purpose**: Persuade Congress to act on climate legislation
- **Context**: Amid growing public concern about extreme weather
      `
    },
    {
      id: 'elir1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best defines rhetoric?',
            options: [
              'Using complicated language to confuse an audience',
              'The art of using language effectively to communicate and persuade',
              'A type of formal debate with strict rules',
              'The study of grammar and punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Rhetoric is the study and practice of effective communication. It encompasses how speakers and writers make strategic choices about language, structure, and appeal to achieve their purpose with a specific audience.'
          },
          {
            question: 'A nonprofit writes a fundraising email to past donors during the holiday season. Which element of the rhetorical situation is the "holiday season"?',
            options: [
              'Speaker',
              'Audience',
              'Purpose',
              'Context'
            ],
            correctAnswer: 3,
            explanation: 'Context refers to the circumstances surrounding the communication — the time, place, and cultural moment. The holiday season creates a context where donors may be more generous and charitable.'
          }
        ]
      }
    },
    {
      id: 'elir1-content',
      type: 'text' as const,
      content: `
## The Three Appeals (Aristotle)

Aristotle identified three strategies writers and speakers use to persuade:

| Appeal | Targets | Strategy | Example |
|--------|---------|----------|---------|
| **Ethos** | Credibility | Establish trust and authority | "As a 20-year veteran firefighter, I can tell you..." |
| **Pathos** | Emotions | Evoke feelings (sympathy, fear, pride) | "Imagine a child going to bed hungry every night..." |
| **Logos** | Logic | Use evidence, data, reasoning | "Studies show that 73% of participants improved..." |

### How They Work Together
Effective rhetoric rarely relies on just one appeal. A strong argument typically:
1. Establishes the writer as credible (**ethos**)
2. Presents logical evidence (**logos**)
3. Connects emotionally with the audience (**pathos**)

### Important Distinction
- **Rhetorical analysis** = examining HOW a writer persuades (what you do on the AP exam)
- **Argumentation** = actually building your OWN persuasive argument

On the AP English Language exam, you will do BOTH.
      `
    },
    {
      id: 'elir1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The appeal to credibility and trust is called _______.

2) The appeal to logic, evidence, and reasoning is called _______.

3) The appeal to emotions is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ethos', 'logos', 'pathos'],
        hint1: 'Think "ethics" — the character of the speaker.',
        hint2: 'Think "logic" — data and evidence.',
        hint3: 'Think "pathetic" (original meaning: relating to feelings).',
        explanation: 'Ethos = credibility. Logos = logic/evidence. Pathos = emotion. These are the three Aristotelian appeals.'
      }
    },
    {
      id: 'elir1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Appeal** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"According to a Harvard study, students who read daily score 23% higher on standardized tests." This uses ___',
            options: ['Logos (evidence and statistics)', 'Ethos (credibility)', 'Pathos (emotion)', 'None of the above']
          },
          {
            label: '"As a board-certified physician with 15 years of experience..." This establishes ___',
            options: ['Ethos (speaker credibility)', 'Logos (logical reasoning)', 'Pathos (emotional appeal)', 'Context']
          },
          {
            label: '"Every day, thousands of families face the heartbreaking choice between food and medicine." This uses ___',
            options: ['Pathos (emotional appeal)', 'Logos (statistical evidence)', 'Ethos (authority)', 'None of the above']
          }
        ],
        correctAnswers: ['Logos (evidence and statistics)', 'Ethos (speaker credibility)', 'Pathos (emotional appeal)'],
        hint1: 'Statistics and study results = logic.',
        hint2: 'Credentials and experience = trust.',
        hint3: '"Heartbreaking" targets feelings.',
        explanation: 'Harvard study with data = logos. Physician credentials = ethos. "Heartbreaking choice" = pathos.'
      }
    },
    {
      id: 'elir1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Rhetoric

- Always identify the **rhetorical situation** first: speaker, audience, purpose, context
- The three appeals (ethos, logos, pathos) appear on EVERY rhetorical analysis essay
- Do not just NAME the appeal — explain HOW it works and WHY the writer chose it
- Context matters: the same argument changes meaning in different historical moments
- The AP exam rewards analysis of how rhetorical choices serve the writer's purpose
- Practice identifying appeals in everyday texts: ads, editorials, speeches, social media
      `
    },
    {
      id: 'elir1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A politician gives a speech at a veterans memorial on Memorial Day, citing her own military service and sharing stories of fallen soldiers. Which appeals is she PRIMARILY using?',
            options: [
              'Logos only — she is presenting factual evidence',
              'Ethos and pathos — her service establishes credibility while the stories evoke emotion',
              'Pathos only — she is just making people cry',
              'None — memorial speeches are not rhetorical'
            ],
            correctAnswer: 1,
            explanation: 'Her military service establishes ethos (she has firsthand credibility). Stories of fallen soldiers evoke pathos (grief, patriotism, gratitude). The Memorial Day context amplifies both appeals. Effective rhetoric layers multiple appeals.'
          },
          {
            question: 'Why is understanding the AUDIENCE essential to rhetorical analysis?',
            options: [
              'The audience determines the word count',
              'Writers make strategic choices based on the audience values, knowledge, and expectations',
              'The audience writes the response',
              'All audiences respond to rhetoric in the same way'
            ],
            correctAnswer: 1,
            explanation: 'Writers tailor their choices to their audience. A scientist writes differently for peer reviewers than for a general magazine. Understanding who the audience is reveals WHY the writer made specific rhetorical choices.'
          }
        ]
      }
    }
  ]
};
