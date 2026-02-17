export const mcatAnatPhysPart6Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Embryology & Development

**Part 6 of 7 — Embryology & Development**

Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).

Gastrulation: three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in embryology & development?',
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
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Neurulation: ectoderm folds to form neural tube (becomes CNS).

**MCAT Tip:** Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to embryology & development?',
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
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cleavage',
            options: ['Neurulation: ectoderm folds to form neural tube (becomes CNS).', 'rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).', 'three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.']
          },
          {
            label: 'Gastrulation',
            options: ['Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.', 'three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).']
          },
          {
            label: 'Key Insight',
            options: ['three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).', 'rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).', 'Organogenesis: germ layers differentiate into organs; teratogens can disrupt development.']
          }
        ],
        correctAnswers: ['rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast).', 'three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver).', 'Neurulation: ectoderm folds to form neural tube (becomes CNS).'],
        hint1: 'Think about what each concept specifically describes in Embryology & Development.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Embryology & Development describes a specific idea. Cleavage: rapid mitotic divisions of zygote; morula, then blastocyst (inner cell mass + trophoblast). Gastrulation: three germ layers form — ectoderm (skin, nervous system), mesoderm (muscle, bone, blood), endoderm (GI, lungs, liver). Key Insight: Neurulation: ectoderm folds to form neural tube (becomes CNS).'
      }
    }
  ]
}
