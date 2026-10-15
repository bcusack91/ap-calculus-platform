export const bioMeiosisPart4Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio4-intro-p4',
      type: 'text' as const,
      content: `
## Crossing Over & Recombination

**Part 4 of 7 — Crossing Over & Recombination**

1. Nonsister chromatids exchange segments
2. Occurs at chiasmata during prophase I
3. Creates recombinant chromosomes
4. Increases genetic variation in offspring
      `
    },
    {
      id: 'meio4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which description of crossing over is accurate?',
            options: [
              'Sister chromatids of one chromosome trade identical segments',
              'Two nonhomologous chromosomes swap pieces during metaphase I',
              'Homologous chromosomes trade whole chromosomes during anaphase II',
              'Nonsister chromatids of homologs exchange segments in prophase I'
            ],
            correctAnswer: 3,
            explanation: 'Crossing over occurs in prophase I, when nonsister chromatids of paired homologs exchange corresponding segments at chiasmata. Exchange between sister chromatids would produce no new combinations, and a swap between nonhomologous chromosomes is a translocation, a chromosomal mutation.'
          },
          {
            question: 'After crossing over between homologs, some chromatids carry:',
            options: [
              'new mutations created where the DNA strands were cut and rejoined',
              'two copies of every allele present in the original homologs',
              'only the alleles from the parent that provided the larger homolog',
              'a new combination of maternal and paternal alleles'
            ],
            correctAnswer: 3,
            explanation: 'Crossing over produces recombinant chromatids: segments from the maternal and paternal homologs are joined, so one chromatid carries a combination of alleles not found on either original chromosome. It reshuffles existing alleles rather than creating new mutations.'
          }
        ]
      }
    },
    {
      id: 'meio4-detail-p4',
      type: 'text' as const,
      content: `
### Key Details

- **Nonsister chromatids exchange segments**
- **Occurs at chiasmata during prophase I**
- **Creates recombinant chromosomes**
- **Increases genetic variation in offspring**
      `
    },
    {
      id: 'meio4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the main evolutionary significance of crossing over?',
            options: [
              'It repairs mutations so offspring inherit only functional alleles',
              'It ensures every gamete carries exactly the same set of alleles',
              'It doubles the number of genes carried by each gamete',
              'It increases genetic variation among the offspring of the same parents'
            ],
            correctAnswer: 3,
            explanation: 'By creating recombinant chromosomes, crossing over increases genetic variation among offspring. That variation is the raw material natural selection acts on. It does not repair mutations, make gametes identical, or change the number of genes per gamete.'
          }
        ]
      }
    },
    {
      id: 'meio4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nonsister chromatids exchange segments',
            options: ['Creates recombinant chromosomes', 'Increases genetic variation in offspring', 'Occurs at chiasmata during prophase I', 'Nonsister chromatids exchange segments']
          },
          {
            label: 'Occurs at chiasmata during prophase I',
            options: ['Creates recombinant chromosomes', 'Increases genetic variation in offspring', 'Nonsister chromatids exchange segments', 'Occurs at chiasmata during prophase I']
          },
          {
            label: 'Creates recombinant chromosomes',
            options: ['Increases genetic variation in offspring', 'Occurs at chiasmata during prophase I', 'Nonsister chromatids exchange segments', 'Creates recombinant chromosomes']
          }
        ],
        correctAnswers: ['Nonsister chromatids exchange segments', 'Occurs at chiasmata during prophase I', 'Creates recombinant chromosomes'],
        hint1: 'Think about what each concept specifically describes in Crossing Over & Recombination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Crossing Over & Recombination describes a specific idea. Nonsister chromatids exchange segments. Occurs at chiasmata during prophase I. Creates recombinant chromosomes.'
      }
    }
  ]
}
