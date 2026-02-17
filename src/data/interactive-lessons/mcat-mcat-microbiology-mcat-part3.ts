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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fungi',
            options: ['Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.', 'organisms that live on/in hosts; protozoa (single-celled) and helminths (worms).', 'eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores.', 'Symbiosis: mutualism (both benefit), commensalism (one benefits, other neutral), parasitism (one benefits, other harmed).']
          },
          {
            label: 'Parasites',
            options: ['Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.', 'eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores.', 'Symbiosis: mutualism (both benefit), commensalism (one benefits, other neutral), parasitism (one benefits, other harmed).', 'organisms that live on/in hosts; protozoa (single-celled) and helminths (worms).']
          },
          {
            label: 'Key Insight',
            options: ['eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores.', 'Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.', 'Symbiosis: mutualism (both benefit), commensalism (one benefits, other neutral), parasitism (one benefits, other harmed).', 'organisms that live on/in hosts; protozoa (single-celled) and helminths (worms).']
          }
        ],
        correctAnswers: ['eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores.', 'organisms that live on/in hosts; protozoa (single-celled) and helminths (worms).', 'Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.'],
        hint1: 'Think about what each concept specifically describes in Fungi & Parasites.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fungi & Parasites describes a specific idea. Fungi: eukaryotic, cell walls of chitin, heterotrophic, reproduce by spores. Parasites: organisms that live on/in hosts; protozoa (single-celled) and helminths (worms). Key Insight: Opportunistic infections: normally harmless microbes cause disease in immunocompromised hosts.'
      }
    }
  ]
}
