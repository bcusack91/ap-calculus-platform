export const bioBiotechPart7Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'bio-biotechnology-p7-s1-intro',
      type: 'text' as const,
      content: `# 🧬 Biotechnology

**Part 7 of 7 — Synthesis Review: From Gene to Product**

---

### Topics in This Part

| Section |
|---------|
| The Whole Workflow |
| Choosing the Right Technique |
| Big Ideas Behind the Techniques |
| Troubleshooting Results |
| Numbers and Rules to Know |

> 🔑 **Key Concept:** Each technique answers one question. PCR makes more of a sequence, restriction enzymes and ligase rearrange it, transformation puts it in a living cell, electrophoresis sorts it by size, and sequencing reads it. Real projects chain them together.

## The Whole Workflow

Here is how the parts of this lesson fit together in one project: making a human protein in bacteria and confirming that it worked.

| Stage | Technique | Part | Check that it worked |
|---|---|---|---|
| 1. Get the coding sequence | Make cDNA from mature mRNA; amplify it by **PCR** | 3, 4 | A band of the expected size on a gel |
| 2. Prepare the pieces | Cut cDNA and plasmid with the same **restriction enzyme** | 1 | Linearized plasmid runs as one band of the expected size |
| 3. Join them | **DNA ligase** seals the backbones | 1 | Recombinant plasmid |
| 4. Put it in cells | **Bacterial transformation** with heat shock | 4 | Colonies on antibiotic plates |
| 5. Confirm the insert | PCR or a restriction digest of plasmid from a colony; **gel electrophoresis** | 2 | Insert-sized band present |
| 6. Confirm the sequence | **DNA sequencing** of the insert | 5 | No mutations; correct orientation |
| 7. Make the protein | Grow the culture; induce the promoter | 4 | Protein detected |

## Choosing the Right Technique

| If the question is… | Use… | Because… |
|---|---|---|
| "Is this gene present in the sample?" | PCR, then a gel | Specific primers amplify only the target |
| "How big are these fragments?" | Gel electrophoresis with a ladder | Migration distance depends on size |
| "Do these two people share DNA profiles?" | PCR of STR loci, then electrophoresis | Repeat numbers differ between people |
| "What is the exact base sequence?" | DNA sequencing | Only sequencing reads each nucleotide |
| "Can bacteria make this protein?" | Cloning into a plasmid and transformation | Bacteria copy and express the plasmid |
| "Can we change one specific gene?" | Gene editing such as CRISPR | A guide RNA targets a chosen sequence |`
    },
    {
      id: 'bio-biotechnology-p7-s2-mcq-choose',
      type: 'multiple-choice' as const,
      content: `**Choose the Technique** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A doctor needs to know whether a patient carries a single-base substitution that does not change any restriction site. Which approach can detect it most directly?',
            options: [
              'Run the patient\'s uncut DNA on an agarose gel',
              'Amplify the gene by PCR and sequence the product',
              'Digest the gene with a restriction enzyme and compare bands',
              'Transform bacteria with the gene and count the colonies'
            ],
            correctAnswer: 1,
            explanation: 'Sequencing reads each nucleotide, so it finds a substitution anywhere, and PCR first supplies enough copies. A one-base change that alters no restriction site leaves fragment sizes unchanged, so gels and digests miss it.'
          },
          {
            question: 'A biologist has a few nanograms of DNA from a museum specimen and wants to compare one gene with the same gene in living relatives. What is the best first step?',
            options: [
              'Transform bacteria with the specimen DNA',
              'Run the specimen DNA on a gel with a ladder',
              'Amplify the gene with PCR',
              'Cut the specimen DNA with a restriction enzyme'
            ],
            correctAnswer: 2,
            explanation: 'With so little template, the gene must first be amplified; primers make PCR copy only that gene, ready for sequencing and comparison. A gel or digest of a few nanograms of whole-genome DNA would not reveal one gene.'
          }
        ]
      }
    },
    {
      id: 'bio-biotechnology-p7-s3-bigideas',
      type: 'text' as const,
      content: `## Big Ideas Behind the Techniques

Biotechnology is applied biology. Each technique works because of a principle you learned elsewhere in the course.

| Principle | Where it appears in biotechnology |
|---|---|
| **Complementary base pairing** | Sticky ends pair; primers anneal; guide RNAs find targets; sequencing reads the complement |
| **Antiparallel strands and 5′→3′ synthesis** | Polymerase extends primers only at their 3′ ends; terminators lacking a 3′-OH stop synthesis |
| **DNA's negative charge** | Phosphate groups pull DNA toward the positive electrode |
| **Structure determines function** | A heat-stable polymerase survives 95°C; a restriction enzyme's shape fits one sequence |
| **Gene regulation** | An inducer such as arabinose switches on an inserted gene |
| **Eukaryotic RNA processing** | Introns force the use of cDNA in bacteria |
| **Common ancestry** | A nearly universal genetic code lets one species express another's genes |
| **Natural selection** | Antibiotic plates select transformed cells; pests evolve resistance to engineered crops |

## Troubleshooting Results

Experimental results that "go wrong" are rich FRQ material. Work backward from the symptom to the step.

| Symptom | Most likely cause |
|---|---|
| Band in the no-template PCR control | Contaminated reagents |
| No PCR product, even in the positive control | Reagent or cycling problem (for example, a polymerase that is not heat-stable) |
| Lawn on the "no plasmid + ampicillin" plate | Inactive antibiotic |
| No colonies on any ampicillin plate, including with plasmid | Failed transformation or no recovery period |
| Colonies on ampicillin, but the protein is wrong | Genomic gene with introns used instead of cDNA, or insert in the wrong orientation |
| Colonies glow only on plates with arabinose | Expected: the GFP gene is under inducible control |`
    },
    {
      id: 'bio-biotechnology-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Troubleshooting Match** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A band appears in the PCR lane that had water instead of template. The likely cause is _____.',
            options: ['contamination', 'denaturation', 'methylation', 'selection']
          },
          {
            label: 'Cells with no plasmid grow on ampicillin plates. The likely cause is an inactive _____.',
            options: ['antibiotic', 'primer', 'promoter', 'ladder']
          },
          {
            label: 'Bacteria given a genomic human gene make a faulty protein because they cannot remove _____.',
            options: ['introns', 'exons', 'primers', 'promoters']
          },
          {
            label: 'A brighter-than-expected band most likely contains two fragments of the same _____.',
            options: ['size', 'charge', 'sequence', 'origin']
          }
        ],
        correctAnswers: ['contamination', 'antibiotic', 'introns', 'size'],
        hint1: 'A negative control should be blank; what puts DNA where none was added?',
        hint2: 'Untransformed cells should die on ampicillin.',
        hint3: 'Bacteria lack the splicing machinery that eukaryotic nuclei have.',
        explanation: 'Stray DNA contaminates a negative control; growth of untransformed cells means the antibiotic failed; bacteria cannot splice out introns; and same-size fragments co-migrate into one brighter band.'
      }
    },
    {
      id: 'bio-biotechnology-p7-s5-numbers',
      type: 'text' as const,
      content: `## Numbers and Rules to Know

| Rule | Formula or fact | Example |
|---|---|---|
| Fragments from a linear molecule | $n$ cuts → $n + 1$ fragments | 2 sites → 3 fragments |
| Fragments from a circular plasmid | $n$ cuts → $n$ fragments | 2 sites → 2 fragments |
| Expected spacing of a site | $4^{\\text{site length}}$ bp | 6-bp site → about 4,096 bp |
| PCR copies | $N = N_0 \\times 2^{n}$ | 10 copies, 10 cycles → 10,240 |
| qPCR threshold | 1 cycle earlier ≈ twice the starting template | 3 cycles earlier ≈ 8× |
| Transformation efficiency | colonies ÷ µg DNA **spread on the plate** | 240 ÷ 0.1 µg = 2,400 per µg |
| Gel migration | Smaller fragments travel farther; DNA moves toward + | 500 bp runs past 3,000 bp |
| STR inheritance | One allele per locus from each parent | A child's non-maternal allele must be paternal |

### One-sentence summaries
- **Restriction enzymes** cut at specific, usually palindromic sequences; **ligase** seals backbones.
- **Electrophoresis** separates molecules by size and charge.
- **PCR** amplifies the DNA between two primers by repeated denature-anneal-extend cycles.
- **Transformation** introduces plasmid DNA into bacteria; antibiotic selection finds the transformed cells.
- **Sequencing** determines nucleotide order from fragments that stop at every position.

> 🔑 **AP Connection:** On the exam, a strong biotechnology answer names the technique, states the principle it relies on, and ties the data to that principle. "Smaller fragments migrate farther because the gel matrix slows larger molecules" beats "the band is lower, so it's smaller."`
    },
    {
      id: 'bio-biotechnology-p7-s6-mcq-integrated',
      type: 'multiple-choice' as const,
      content: `**Integrated Review** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A plasmid from a transformed colony is cut with the enzyme used for cloning and run on a gel. The empty plasmid is 4,000 bp and the insert is 1,500 bp. Which band pattern shows the colony carries a plasmid with the insert?',
            options: [
              'One band at 4,000 bp',
              'One band at 5,500 bp',
              'Bands at 4,000 and 1,500 bp',
              'Bands at 2,500 and 1,500 bp'
            ],
            correctAnswer: 2,
            explanation: 'Cutting at the cloning sites releases the insert, giving the 4,000-bp vector and the 1,500-bp insert. One 4,000-bp band means an empty plasmid; a single 5,500-bp band would come only from a single cut that leaves the insert attached.'
          },
          {
            question: 'Why can PCR and DNA sequencing both use the same kind of DNA polymerase?',
            options: [
              'Each requires an enzyme that cuts at palindromic sites',
              'Each extends a short starter strand from its 3′ end',
              'Both depend on sealing nicks in the sugar-phosphate backbone',
              'Both copy RNA templates into matching strands of DNA'
            ],
            correctAnswer: 1,
            explanation: 'In both methods, polymerase adds nucleotides to the 3′ end of a primer annealed to a template; in sequencing, terminators stop some strands. Cutting, sealing and reverse transcription are done by other enzymes.'
          },
          {
            question: 'A crop engineered to make a bacterial toxin that kills insect larvae is planted across a whole region for many years. Which outcome is most likely?',
            options: [
              'Insects learn to avoid the toxin and pass on that habit',
              'Resistance to the toxin spreads by natural selection',
              'The crop loses the toxin gene, since bacteria lose plasmids',
              'Insects mutate on purpose to survive the toxin in the crop'
            ],
            correctAnswer: 1,
            explanation: 'Any insects with heritable variations that let them survive the toxin leave more offspring, so resistance alleles increase in frequency. Mutations arise randomly rather than in response to need, and the transgene is in the plant\'s chromosomes, not a bacterial plasmid.'
          }
        ]
      }
    }
  ]
};
