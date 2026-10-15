export const bioDnaReplicationPart5Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dr5-intro',
      type: 'text' as const,
      content: `
## Modeling the Replication Fork

**Part 5 of 7**

The CED asks you to **explain relationships between the parts of a biological model**. For DNA replication, the model is usually a diagram of a replication fork with strands, arrows and 5′/3′ labels, and the questions ask what each part does and what happens when one part fails. This part trains you to read that model quickly and reliably.

(Some textbooks also cover telomeres and the "end-replication problem" of linear chromosomes. Those topics are beyond the scope of the AP exam.)
      `
    },
    {
      id: 'dr5-problem',
      type: 'text' as const,
      content: `
### Reading a Fork Diagram in Four Steps

**Step 1 — Label the template strands.** The two parental strands are antiparallel: if one runs 3′ → 5′ toward the fork, the other runs 5′ → 3′ toward the fork.

**Step 2 — Place the enzymes.** **Helicase** sits at the point of the fork, separating the strands. **Topoisomerase** acts **ahead** of the fork, on the still-double-stranded DNA, relieving the overwinding that unwinding creates.

**Step 3 — Decide which new strand is leading.** New DNA always grows 5′ → 3′, so it is built along a template read 3′ → 5′.
- The template that runs **3′ → 5′ toward the fork** lets its new strand grow **toward** the fork, continuously: the **leading strand**.
- The other template lets its new strand grow only **away** from the fork, so that strand is made in short pieces (**Okazaki fragments**), each started by its own **RNA primer**: the **lagging strand**.

**Step 4 — Finish the lagging strand.** The RNA primers are replaced with DNA, and **ligase** joins the fragments into one continuous strand.

### Worked Example: Predicting a New Strand

**Problem.** At a fork, one template strand reads 3′–T A C G G T A C–5′ running toward the fork. Write the new strand and say whether it is leading or lagging.

**Step 1 — Pair the bases.** T → A, A → T, C → G, G → C, giving A T G C C A T G.

**Step 2 — Label the ends.** The new strand is antiparallel to its template: **5′–A T G C C A T G–3′**.

**Step 3 — Decide the strand type.** The template runs 3′ → 5′ toward the fork, so the new strand grows toward the fork as one continuous piece: it is the **leading strand**.

**Check.** The new strand grows from its 5′ end to its 3′ end, which is the only direction DNA polymerase can build.
      `
    },
    {
      id: 'dr5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading the Fork
      `,
      exercise: {
        questions: [
          {
            question: 'In a fork diagram, the upper template strand runs 3′ → 5′ toward the fork and the lower template strand runs 5′ → 3′ toward the fork. Which statement is correct?',
            options: [
              'The new upper strand is lagging, and the new lower strand is leading',
              'The new strands are both leading, since each grows toward the fork',
              'The new upper strand is leading, and the new lower strand is the lagging one',
              'Both new strands are lagging, since each must be made in fragments'
            ],
            correctAnswer: 2,
            explanation: 'New DNA grows 5′ → 3′ along a template read 3′ → 5′. The upper template runs 3′ → 5′ toward the fork, so its new strand grows toward the fork continuously (leading). The lower template forces its new strand to grow away from the fork in fragments (lagging). The two strands of one fork always differ, because the templates are antiparallel.'
          },
          {
            question: 'A drug stops topoisomerase from working. Where on a fork diagram would the first problem appear?',
            options: [
              'Ahead of the fork, where unwound DNA becomes overwound',
              'Behind the fork, where Okazaki fragments must be joined',
              'At each RNA primer, which can no longer be laid down',
              'On the leading strand only, which then stops growing at once'
            ],
            correctAnswer: 0,
            explanation: 'Topoisomerase relieves the strain that builds up ahead of the fork as helicase unwinds the helix. Without it, the DNA ahead of the fork becomes overwound and the fork eventually stalls on both strands. Joining fragments is ligase\'s job, and priming does not depend on topoisomerase.'
          }
        ]
      }
    },
    {
      id: 'dr5-circular',
      type: 'text' as const,
      content: `
### Replicating Circular and Linear DNA

**Prokaryotic chromosomes and plasmids are circular.** Replication of a bacterial chromosome begins at a single origin. Two forks move in opposite directions around the circle until they meet, giving two complete circular chromosomes, each with one old and one new strand.

**Plasmids** are small, extra-chromosomal circles of DNA found in many prokaryotes and some eukaryotes. Each plasmid has its own origin, so it is replicated independently of the chromosome, and copies are passed to daughter cells. Plasmids often carry genes that help the cell survive, such as genes for antibiotic resistance, and they can be transferred between bacteria, a source of genetic variation.

**Eukaryotic chromosomes are linear** and much longer, so each one is replicated from many origins at once, as Part 2 described.

### Connecting Replication to Cell Division

DNA is replicated during **S phase**, before mitosis or meiosis begins. Because replication is semiconservative, each **sister chromatid** of a replicated chromosome contains **one original strand and one new strand**. When sister chromatids separate in mitosis (or in meiosis II), each daughter cell receives a complete copy of the genetic information.

| Stage | What happens to the DNA |
|-------|-------------------------|
| S phase | Each chromosome is replicated; sister chromatids form, each one parental strand + one new strand |
| Mitosis | Sister chromatids separate, so each daughter cell gets one copy of every chromosome |
| Meiosis | One replication is followed by two divisions, so gametes get half the DNA (Topic 5.1) |
      `
    },
    {
      id: 'dr5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Circles, Plasmids and Chromatids
      `,
      exercise: {
        questions: [
          {
            question: 'A bacterium carries a plasmid with an antibiotic-resistance gene. Why do its descendants usually keep the resistance after many cell divisions?',
            options: [
              'The resistance gene is copied into each daughter cell\'s main chromosome',
              'The plasmid has its own origin, so it is replicated and passed on',
              'The antibiotic induces each new cell to make a fresh resistance gene',
              'Plasmids are made of RNA, which is copied faster than chromosomes'
            ],
            correctAnswer: 1,
            explanation: 'A plasmid replicates independently from its own origin of replication, so copies are passed to daughter cells along with the chromosome. The resistance gene stays on the plasmid rather than moving into the chromosome, antibiotics do not create resistance genes, and plasmids are DNA, not RNA.'
          },
          {
            question: 'A chromosome is replicated in S phase in the presence of labeled nucleotides, and the cell then divides by mitosis without the label. How is the label distributed between the two sister chromatids before they separate?',
            options: [
              'One chromatid is fully labeled, and the other carries no label at all',
              'Each chromatid has one labeled strand and one unlabeled strand',
              'Neither chromatid is labeled, since the label is lost in mitosis',
              'Both chromatids carry a random mix of labeled and old segments'
            ],
            correctAnswer: 1,
            explanation: 'Replication is semiconservative, so each sister chromatid is one DNA molecule made of one parental (unlabeled) strand and one new (labeled) strand. A fully labeled and a fully unlabeled chromatid would require conservative replication, and a random mix would require dispersive replication.'
          }
        ]
      }
    },
    {
      id: 'dr5-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — The Replication Fork
      `,
      exercise: {
        questions: [
          {
            question: 'The new strand that is synthesized continuously toward the replication fork:',
            answer: 'leading strand',
            acceptableAnswers: ['leading strand', 'leading', 'Leading strand', 'the leading strand'],
            placeholder: 'e.g. template strand'
          },
          {
            question: 'The short molecule that must be laid down before DNA polymerase can begin a new strand:',
            answer: 'RNA primer',
            acceptableAnswers: ['RNA primer', 'primer', 'an RNA primer', 'Primer', 'RNA primers'],
            placeholder: 'e.g. promoter'
          },
          {
            question: 'Small circular DNA molecules that replicate independently of a bacterium\'s chromosome:',
            answer: 'plasmids',
            acceptableAnswers: ['plasmids', 'plasmid', 'Plasmids', 'Plasmid'],
            placeholder: 'e.g. ribosomes'
          }
        ]
      }
    },
    {
      id: 'dr5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket
      `,
      exercise: {
        questions: [
          {
            question: 'A template strand reads 3′–GACCTA–5′. What is the sequence of the new DNA strand built on it?',
            options: [
              '5′–CTGGAT–3′',
              '3′–CTGGAT–5′',
              '5′–GACCTA–3′',
              '5′–CUGGAU–3′'
            ],
            correctAnswer: 0,
            explanation: 'Each base pairs with its complement (G–C, A–T), giving CTGGAT, and the new strand is antiparallel to its template, so it runs 5′–CTGGAT–3′. Writing it 3′ to 5′ ignores antiparallel structure, copying the template sequence ignores base pairing, and U belongs in RNA, not DNA.'
          }
        ]
      }
    }
  ]
};
