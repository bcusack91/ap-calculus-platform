export const englangRhetoricalSituationPart1Data = {
  topicSlug: 'englang-rhetorical-situation',
  sections: [
    {
      id: 'elrs1-intro',
      type: 'text' as const,
      content: `
# 🎯 The Rhetorical Situation (Reading)

**Part 1 of 7 — Analyzing How Writers Respond to Context, Audience, and Purpose**

---

## Defining the Rhetorical Situation

The **rhetorical situation** is the set of circumstances that shapes a text. Every piece of writing exists within a situation that includes:

| Component | Description | Key Questions |
|-----------|-----------|---------------|
| **Exigence** | The issue, problem, or need that prompts writing | What motivated this text? What problem does it address? |
| **Speaker** | The person communicating | What is their background? What perspective do they bring? |
| **Audience** | The intended readers/listeners | Who is this for? What do they already know or believe? |
| **Purpose** | The goal of the communication | Is this meant to persuade, inform, entertain, or call to action? |
| **Context** | The circumstances surrounding the text | What historical, cultural, or social factors are at play? |

> 🔑 **Exigence** is the most frequently tested and least understood element. It is the specific trigger — the event, situation, or problem — that makes the writer feel compelled to communicate.

---

## Exigence in Action

| Text | Exigence |
|------|---------|
| Martin Luther King Jr., "Letter from Birmingham Jail" | Fellow clergymen criticized his activism as "unwise and untimely" |
| Rachel Carson, *Silent Spring* | Widespread, unchecked pesticide use was harming ecosystems |
| Declaration of Independence | Britain continued to violate colonists' rights without redress |
      `
    },
    {
      id: 'elrs1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the "exigence" of a text?',
            options: [
              'The author biography',
              'The issue, event, or need that prompted the writer to communicate',
              'The final paragraph of the text',
              'The number of rhetorical devices used'
            ],
            correctAnswer: 1,
            explanation: 'Exigence is the specific trigger for writing — the problem, event, or situation that makes the writer feel compelled to respond. Without exigence, there is no reason for the text to exist.'
          },
          {
            question: 'A newspaper publishes an editorial the day after a school shooting, calling for new gun legislation. What is the exigence?',
            options: [
              'The newspaper industry',
              'The school shooting — the immediate event prompting the editorial',
              'The editorial board',
              'Gun legislation in general'
            ],
            correctAnswer: 1,
            explanation: 'The school shooting is the specific event that prompted the editorial. It is the urgent issue that makes the writer feel compelled to act. This is the exigence — the trigger for the communication.'
          }
        ]
      }
    },
    {
      id: 'elrs1-content',
      type: 'text' as const,
      content: `
## How the Rhetorical Situation Shapes a Text

Writers do not make choices in a vacuum. Every element of the rhetorical situation influences the text:

### Audience Shapes Tone and Diction
| Audience | Likely Tone | Diction |
|----------|-----------|---------|
| Academic peers | Formal, objective | Technical terminology |
| General public | Accessible, engaging | Everyday language |
| Hostile audience | Conciliatory, measured | Careful, diplomatic phrasing |
| Sympathetic audience | Passionate, direct | Emotionally charged language |

### Purpose Shapes Structure
| Purpose | Structure |
|---------|----------|
| Persuade | Claim → Evidence → Counterargument → Rebuttal |
| Inform | Introduction → Explanation → Examples → Summary |
| Call to action | Problem → Urgency → Solution → Call to action |

### Context Shapes Content
- A speech during wartime emphasizes patriotism and sacrifice
- An essay during an economic crisis focuses on jobs and financial security
- A letter during a social movement appeals to justice and equality

## Reading Strategy: SOAPSTone

| Letter | Stands For | Question |
|--------|-----------|----------|
| **S** | Speaker | Who is speaking? |
| **O** | Occasion | What is the occasion (exigence)? |
| **A** | Audience | Who is the intended audience? |
| **P** | Purpose | What is the purpose? |
| **S** | Subject | What is the subject? |
| **Tone** | Tone | What is the tone? |
      `
    },
    {
      id: 'elrs1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The problem or event that prompts a writer to communicate is called the _______.

2) When writing for a hostile audience, a writer will likely adopt a _______ tone.

3) The SOAPSTone reading strategy stands for Speaker, Occasion, Audience, Purpose, Subject, and _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['exigence', 'conciliatory', 'Tone'],
        hint1: 'The trigger or urgency behind the text.',
        hint2: 'Trying to reconcile rather than confront.',
        hint3: 'The final letter in SOAPSTone.',
        explanation: 'Exigence = the trigger. Conciliatory for hostile audiences. SOAPSTone ends with Tone.'
      }
    },
    {
      id: 'elrs1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Element** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In "Letter from Birmingham Jail," the clergymen who criticized MLK are the ___',
            options: ['Audience (the people he is addressing)', 'Exigence', 'Context', 'Purpose']
          },
          {
            label: 'The Civil Rights Movement of the 1960s is the ___ for many of MLK writings',
            options: ['Context (historical/social circumstances)', 'Audience', 'Purpose', 'Tone']
          },
          {
            label: 'A scientist writing for a general magazine would use ___ diction compared to a peer-reviewed journal',
            options: ['More accessible, everyday', 'More technical, specialized', 'Identical', 'More formal and Latin-based']
          }
        ],
        correctAnswers: ['Audience (the people he is addressing)', 'Context (historical/social circumstances)', 'More accessible, everyday'],
        hint1: 'He is writing TO the clergymen.',
        hint2: 'The broader historical movement.',
        hint3: 'General readers need simpler language.',
        explanation: 'Clergymen = audience. Civil Rights Movement = context. General magazine = accessible diction.'
      }
    },
    {
      id: 'elrs1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Rhetorical Situation

- ALWAYS start your rhetorical analysis by identifying the **rhetorical situation** (speaker, audience, exigence, purpose, context)
- **Exigence** is the most commonly tested element — know it cold
- Explain how the situation SHAPES the writer's choices (don't just list elements)
- Use **SOAPSTone** as a pre-reading checklist for any passage
- The AP rubric rewards connecting rhetorical choices to purpose and audience
- Context questions test whether you understand WHY a text was written at that particular moment
      `
    },
    {
      id: 'elrs1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Frederick Douglass gave his speech "What to the Slave Is the Fourth of July?" on July 5, 1852, to a predominantly white abolitionist audience. What is the strategic significance of the DATE?',
            options: [
              'It was a convenient scheduling decision',
              'Speaking the day after July 4th highlights the hypocrisy of celebrating freedom while millions remain enslaved',
              'He wanted to avoid crowds on July 4th',
              'The date has no rhetorical significance'
            ],
            correctAnswer: 1,
            explanation: 'Douglass deliberately leveraged the context of Independence Day to sharpen his argument. The juxtaposition of celebrating liberty while slavery exists makes the hypocrisy undeniable. This is the rhetorical situation shaping the text.'
          },
          {
            question: 'An author writes an opinion piece in the New York Times about income inequality. If the same author published the same argument in an academic economics journal, what would MOST likely change?',
            options: [
              'The topic and thesis',
              'The diction, tone, and level of technical detail — adjusted for a different audience',
              'Nothing — good writing works for all audiences',
              'Only the title'
            ],
            correctAnswer: 1,
            explanation: 'Different audiences require different approaches. A newspaper audience expects accessible language and concrete examples. An academic audience expects technical terminology, citations, and formal tone. The audience shapes the writer-s choices.'
          }
        ]
      }
    }
  ]
};
