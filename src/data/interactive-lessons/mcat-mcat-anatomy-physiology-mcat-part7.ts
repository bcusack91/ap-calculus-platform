export const mcatAnatPhysPart7Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).

Gastrulation: three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              'Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast)'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Neurulation: ectoderm folds to form neural tube (becomes CNS).

**MCAT Tip:** Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to review & mcat practice?',
            options: [
              'Neurulation: ectoderm folds to form neural tube (becomes CNS)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Neurulation: ectoderm folds to form neural tube (becomes CNS)'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cleavage',
            options: ['Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.', 'three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).', 'rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).']
          },
          {
            label: 'Gastrulation',
            options: ['three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).', 'rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).']
          },
          {
            label: 'Key Insight',
            options: ['rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).', 'three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.']
          }
        ],
        correctAnswers: ['rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).', 'three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast). Gastrulation: three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver). Key Insight: Neurulation: ectoderm folds to form neural tube (becomes CNS).'
      }
    }
  ]
}
