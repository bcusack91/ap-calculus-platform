export const mcatMicroPart3Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-3-intro',
      type: 'text' as const,
      content: `
# Fungi & Parasites

**Part 3 of 7 — Fungi & Parasites**

Fungi: eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores.

Parasites: organisms that live on/in hosts; protozoa (single-celled) and helminths (worms).
      `
    },
    {
      id: 'mcat-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in fungi & parasites?',
            options: [
              'Fungi: eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Fungi: eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores'
          }
        ]
      }
    },
    {
      id: 'mcat-3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.

**MCAT Tip:** Symbiosis: mutualism (both benefit), commensalism (one benefits, other neutral), parasitism (one benefits, other harmed).
      `
    },
    {
      id: 'mcat-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to fungi & parasites?',
            options: [
              'Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts'
          }
        ]
      }
    },
    {
      id: 'mcat-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Fungi & Parasites:',
            options: ['Fungi: eukaryotic, cell walls of chitin, heterotrophic, repr', 'Parasites: organisms that live on/in hosts; protozoa (single', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Opportunistic infections: normally harmless microbes cause d', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Fungi: eukaryotic, cell walls of chitin, heterotrophic, repr', 'Opportunistic infections: normally harmless microbes cause d'],
        hint1: 'Think about fungi & parasites',
        hint2: 'Consider the MCAT application',
        explanation: 'Fungi: eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores. Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.'
      }
    }
  ]
}
