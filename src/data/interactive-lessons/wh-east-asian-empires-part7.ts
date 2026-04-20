export const whEastAsianEmpiresPart7Data = {
  topicSlug: 'wh-east-asian-empires',
  sections: [
    {
      id: 'wheastas7-intro',
      type: 'text' as const,
      content: `
# 🌏 East Asian Empires & Isolation

**Part 7 of 7 — AP Review**

    Final AP review of high-yield ideas, common question traps, and answer construction patterns.

### Key Concepts

| Concept | Description |
|---------|-------------|
    | **Anchor vocabulary** | Terms you should deploy precisely in MCQ/SAQ/LEQ responses |
    | **Prompt pattern recognition** | Identifying what kind of reasoning the question asks for |
    | **Scoring-aware writing** | Structuring responses to maximize AP rubric points |
      `
    },
    {
      id: 'wheastas7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which vocabulary pair is most useful for describing East Asian state legitimacy?',
            options: [
              'mercantilism and plantation',
              'civil service examination and Neo-Confucianism',
              'factory and proletariat',
              'encomienda and creole'
            ],
            correctAnswer: 1,
            explanation: 'Those terms directly capture how East Asian states organized governance and ideological legitimacy in this period.'
          },
          {
            question: 'A prompt asks: "Evaluate the extent to which East Asian states were isolated from 1450 to 1750." What does it require?',
            options: [
              'A simple yes/no answer with one fact',
              'A qualified argument using both evidence of regulation and evidence of continued contact',
              'A biography of one ruler',
              'A list of vocabulary terms with no argument'
            ],
            correctAnswer: 1,
            explanation: '"Evaluate the extent" signals nuanced judgment, not absolute claims. You should weigh both sides with evidence.'
          }
        ]
      }
    },
    {
      id: 'wheastas7-content',
      type: 'text' as const,
      content: `
## AP Review — Deeper Dive

> **Anchor Vocabulary**

    High-yield terms to use precisely:

    - **Neo-Confucianism**
    - **civil service examinations**
    - **sakoku**
    - **shogunate / daimyo / samurai**
    - **tributary system**
    - **selective adaptation**

> **Common AP Prompt Types**

    Most common AP asks:

    - **Causation:** Why did states regulate contact?
    - **Comparison:** How did China and Japan differ in political organization?
    - **CCOT:** What changed and what remained stable from 1200-1750?
    - **Evaluation:** To what extent was East Asia "isolated"?

> **AP Comparison Anchor**

    Rubric-friendly response skeleton:

    1. Make a historically defensible thesis.
    2. Use at least two specific pieces of evidence.
    3. Explain how each example supports the claim.
    4. Add complexity (qualification, comparison, or long-term consequence).
      `
    },
    {
      id: 'wheastas7-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What term describes high-value AP vocabulary like Neo-Confucianism, sakoku, and tributary system that should be deployed precisely in responses?',
            options: [
              'Anchor vocabulary',
              'Prompt pattern recognition',
              'Scoring-aware writing',
              'Chronological memorization'
            ],
            correctAnswer: 0,
            explanation: 'Anchor vocabulary terms are the specific historical language that signals to AP readers you understand the content at a sophisticated level — not just surface facts.'
          },
          {
            question: 'Recognizing whether an AP prompt asks for causation, comparison, or CCOT analysis is called what?',
            options: [
              'Prompt pattern recognition',
              'Anchor vocabulary',
              'Scoring-aware writing',
              'Guessing'
            ],
            correctAnswer: 0,
            explanation: 'Prompt pattern recognition saves time on exam day: once you identify the reasoning type demanded, you can deploy the right argument structure immediately.'
          },
          {
            question: 'Structuring an AP response to include a defensible thesis, specific evidence, reasoning, and complexity demonstrates what?',
            options: [
              'Scoring-aware writing',
              'Anchor vocabulary',
              'Prompt pattern recognition',
              'Fact dumping'
            ],
            correctAnswer: 0,
            explanation: 'Scoring-aware writing means knowing the rubric and deliberately building each element into your response — thesis, evidence, reasoning, and at least one complexity move.'
          }
        ]
      }
    },
    {
      id: 'wheastas7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Select the concept that best matches each description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'High-value terms to use accurately in responses are ___',
            options: ['Anchor vocabulary', 'Prompt pattern recognition', 'Scoring-aware writing', 'chronological memorization']
          },
          {
            label: 'Recognizing whether a prompt asks for causation, comparison, or evaluation is ___',
            options: ['Anchor vocabulary', 'Prompt pattern recognition', 'Scoring-aware writing', 'guessing']
          },
          {
            label: 'Writing to maximize AP rubric points is ___',
            options: ['Scoring-aware writing', 'Anchor vocabulary', 'Prompt pattern recognition', 'fact dumping']
          }
        ],
        correctAnswers: ['Anchor vocabulary', 'Prompt pattern recognition', 'Scoring-aware writing'],
        hint1: 'This is the first key concept from the lesson.',
        hint2: 'This is the second key concept from the lesson.',
        hint3: 'This is the third key concept from the lesson.',
        explanation: 'Use this sequence on exam day: know the terms, decode the prompt, then write to the rubric.'
      }
    },
    {
      id: 'wheastas7-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
    - A good essay is not just "many facts"; it is argument + evidence + reasoning.
    - Avoid absolute language like "completely isolated" unless the evidence truly supports it.
    - Vocabulary without context does not earn analysis credit.

### AP Strategy Moves
    - For LEQ prompts, draft a one-line thesis before writing body paragraphs.
    - In each paragraph, include at least one named policy, ruler, or institution.
    - Reserve your final sentence for significance (regional or global consequence).
      `
    },
    {
      id: 'wheastas7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An unfamiliar stimulus asks about East Asia. Best first response?',
            options: [
              'Ignore the source and write memorized content',
              'Apply known reasoning patterns (causation/comparison/CCOT) and anchor vocabulary to the new evidence',
              'Assume the prompt is a trick and skip it',
              'Write only a definition paragraph'
            ],
            correctAnswer: 1,
            explanation: 'AP questions frequently use new stimuli; transfer skills matter more than memorizing one exact scenario.'
          },
          {
            question: 'Which paragraph move most improves AP free-response scoring?',
            options: [
              'Use broad generalizations and avoid named evidence',
              'State a claim, cite one specific East Asian example, and explain how it proves the claim',
              'Write long introductions with no thesis',
              'End each paragraph with a repeated definition'
            ],
            correctAnswer: 1,
            explanation: 'This is the exact claim-evidence-reasoning pattern AP rubrics reward.'
          }
        ]
      }
    }
  ]
}
