export const bioDnaReplicationPart6Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — DNA Replication

**Part 6 of 7**

This workshop applies DNA replication concepts to experimental scenarios and quantitative problems.
      `
    },
    {
      id: 'dr6-scenario1',
      type: 'text' as const,
      content: `
### Scenario 1: Replication Fork Analysis

A researcher treats E. coli with radioactive thymidine (\\(^3\\)H-thymidine) for a brief pulse, then chases with unlabeled thymidine. After autoradiography of the replicating DNA:

- The label appears as a band along the newly synthesized DNA
- The leading strand shows a continuous band of label
- The lagging strand shows a series of short labeled segments (Okazaki fragments) with gaps where primers were located

**If the pulse is very short** (seconds), only the most recently synthesized DNA is labeled.  The leading strand shows label near the fork, while the lagging strand shows label in the most recently completed Okazaki fragment.

**If the chase is long enough**, DNA Pol I replaces primers with DNA and ligase joins fragments, so the lagging strand eventually looks continuous.
      `
    },
    {
      id: 'dr6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Scenario 1 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'If DNA ligase is mutated (non-functional), what would autoradiography of the replicated DNA reveal?',
            options: [
              'Normal continuous strands on both sides',
              'The leading strand would appear normal and continuous; the lagging strand would remain fragmented (Okazaki fragments not joined) because ligase cannot seal the nicks between them',
              'Both strands would be fragmented',
              'No replication would occur'
            ],
            correctAnswer: 1,
            explanation: 'The leading strand is synthesized as one continuous piece — no ligation needed (beyond the initial primer replacement). The lagging strand consists of many Okazaki fragments that require ligase to be joined. Without ligase, Okazaki fragments remain separate, and the lagging strand is fragmented.'
          }
        ]
      }
    },
    {
      id: 'dr6-scenario2',
      type: 'text' as const,
      content: `
### Scenario 2: Density Gradient Predictions

Starting with one double-stranded DNA molecule where BOTH strands are labeled with \\(^{15}\\)N (heavy):

**After 1 generation in \\(^{14}\\)N:**
- 2 molecules, each with one \\(^{15}\\)N strand + one \\(^{14}\\)N strand = **2 intermediate**

**After 2 generations in \\(^{14}\\)N:**
- 4 molecules total
- 2 have one \\(^{15}\\)N + one \\(^{14}\\)N = **2 intermediate**  
- 2 have both \\(^{14}\\)N = **2 light**

**After n generations:**
- Total molecules = \\(2^n\\)
- Intermediate molecules = **always 2** (the two original parental strands + a new partner)
- Light molecules = \\(2^n - 2\\)
- Heavy molecules = **0** (after generation 1)

> **Quantitative AP Tip:** The number of intermediate-density molecules never changes (always 2) because the two original heavy strands are conserved indefinitely, each paired with a new light strand.
      `
    },
    {
      id: 'dr6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Scenario 2 Questions
      `,
      exercise: {
        questions: [
          {
            question: 'After 5 generations of replication in 14N medium (starting from all 15N DNA), how many total DNA molecules are there and how many are intermediate density?',
            options: [
              '32 total, 16 intermediate',
              '32 total, 2 intermediate and 30 light',
              '64 total, 2 intermediate',
              '10 total, 5 intermediate'
            ],
            correctAnswer: 1,
            explanation: 'After 5 generations: 2^5 = 32 total molecules. The two original 15N strands are each paired with a 14N strand = 2 intermediate molecules. The remaining 30 molecules are all-14N (light). The number of intermediate molecules is always exactly 2.'
          }
        ]
      }
    },
    {
      id: 'dr6-input',
      type: 'input-boxes' as const,
      content: `
### Apply Your Knowledge
      `,
      exercise: {
        questions: [
          {
            question: 'After 4 generations of semiconservative replication, one original DNA molecule produces how many total molecules?',
            answer: '16',
            acceptableAnswers: ['16', 'sixteen', '2^4'],
            placeholder: 'e.g. 8'
          },
          {
            question: 'Of those molecules, how many contain a parental (original) strand?',
            answer: '2',
            acceptableAnswers: ['2', 'two'],
            placeholder: 'e.g. 4'
          }
        ]
      }
    },
    {
      id: 'dr6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Workshop
      `,
      exercise: {
        questions: [
          {
            question: 'BrdU (bromodeoxyuridine) is a thymidine analog that is incorporated into newly synthesized DNA and can be detected by antibodies. If cells replicate once in BrdU, then once without BrdU, what pattern of BrdU labeling would be seen in the daughter chromosomes?',
            options: [
              'All four chromatids would be labeled',
              'In the second division: each replicated chromosome would have one chromatid labeled (containing the BrdU strand from round 1) and one unlabeled (containing only thymidine), demonstrating semiconservative replication at the chromosomal level',
              'No chromatids would be labeled — BrdU is diluted out',
              'Only the leading strand would contain BrdU'
            ],
            correctAnswer: 1,
            explanation: 'After replication in BrdU (round 1), both daughter molecules have one BrdU strand and one original strand. After replication WITHOUT BrdU (round 2), each of the two chromatids contains either the BrdU strand + unlabeled new strand (labeled chromatid) or the original strand + unlabeled new strand (unlabeled chromatid). This produces a "harlequin" pattern visible by staining.'
          }
        ]
      }
    }
  ]
};