export const mcatMolBioPart1Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb1-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 1 of 7 — DNA Replication**

### DNA Replication is Semiconservative

Each new double helix has one old strand and one new strand (proven by the **Meselson-Stahl experiment** using $^{15}$N heavy isotope labeling). After one round, all molecules were intermediate density. After two rounds, half intermediate and half light.

### Replication Overview

- **Bidirectional**: Proceeds in both directions from each origin of replication
- **Origins**: Bacteria have one origin; eukaryotes have many (to speed up replication of much larger genomes)
- **Direction**: DNA polymerases can ONLY synthesize $5' \\to 3'$ (add nucleotides to the free $3'$-OH)
- **Antiparallel template**: The template strand is read $3' \\to 5'$

### Key Enzymes — Complete Table

| Enzyme | Function | Key Details |
|--------|----------|-------------|
| **Helicase** | Unwinds double helix | Breaks H-bonds between base pairs at the replication fork |
| **Topoisomerase (Gyrase)** | Relieves supercoiling | Cuts and rejoins DNA ahead of the fork to prevent tangling |
| **SSB proteins** | Keep strands separated | Bind single-stranded DNA to prevent re-annealing |
| **Primase** | Synthesizes RNA primer | Provides the free $3'$-OH that DNA Pol III needs to start |
| **DNA Pol III** | Main replication enzyme | $5' \\to 3'$ synthesis + $3' \\to 5'$ proofreading exonuclease |
| **DNA Pol I** | Removes RNA primers | Replaces primers with DNA (5' → 3' exonuclease removes primer) |
| **Ligase** | Joins Okazaki fragments | Seals phosphodiester backbone nicks |
| **Sliding clamp (PCNA)** | Processivity factor | Keeps DNA Pol III attached to the template |

### Leading vs. Lagging Strand

- **Leading strand**: Template runs $3' \\to 5'$ → continuous synthesis toward the fork
- **Lagging strand**: Template runs $5' \\to 3'$ → discontinuous synthesis AWAY from the fork → Okazaki fragments (~1000-2000 nt in bacteria, ~100-200 in eukaryotes)
- Each Okazaki fragment needs its own RNA primer

### Telomeres and Telomerase

- **Telomeres**: Protective caps at chromosome ends (TTAGGG repeats in humans)
- **End replication problem**: When the last RNA primer on the lagging strand is removed, DNA Pol cannot fill the gap (no upstream $3'$-OH) → telomere shortens each division
- **Telomerase**: Reverse transcriptase that uses an internal RNA template to extend telomeres
- Active in: stem cells, germ cells, cancer cells
- Inactive in: most somatic cells → cellular aging (Hayflick limit)`
    },
    {
      id: 'mb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**DNA Replication** 🎯`,
      exercise: {
        questions: [
          {
            question: `DNA polymerase III requires a primer because it:`,
            options: [`Can only add nucleotides to an existing 3'-OH group — it cannot initiate synthesis de novo`, `Needs a template strand to read the sequence`, `Can only work in the 3' to 5' direction`, `Uses exclusively RNA nucleotides for synthesis`],
            correctAnswer: 0,
            explanation: `DNA Pol III adds deoxyribonucleotides to the free 3'-OH of a pre-existing strand. Primase (an RNA polymerase) provides a short RNA primer with a free 3'-OH to initiate synthesis. Note: RNA polymerase does NOT need a primer — it can start de novo. This is a frequently tested distinction.`
          },
          {
            question: `Okazaki fragments are found on the lagging strand because:`,
            options: [`DNA Pol III can only synthesize 5' to 3', but the lagging template runs 5' to 3' toward the fork`, `The leading strand replicates faster`, `Ligase only works on the lagging strand`, `Helicase unwinds DNA unevenly`],
            correctAnswer: 0,
            explanation: `DNA Pol III synthesizes only 5' → 3'. On the lagging strand, the template runs 5' → 3' pointing toward the fork, so synthesis must proceed AWAY from the fork in short fragments. Each fragment needs a new primer from primase. Ligase then joins adjacent Okazaki fragments after Pol I removes the primers.`
          },
          {
            question: `Fluoroquinolone antibiotics inhibit bacterial gyrase (a type II topoisomerase). This would:`,
            options: [`Prevent relief of supercoiling ahead of the replication fork, stalling replication`, `Block RNA primer synthesis`, `Prevent Okazaki fragment joining`, `Inhibit base pairing between complementary strands`],
            correctAnswer: 0,
            explanation: `As helicase unwinds DNA, the unreplicated region ahead becomes overwound (positive supercoiling). Gyrase/topoisomerase relieves this by cutting, rotating, and rejoining the DNA. Without gyrase, supercoiling tension builds → fork cannot advance → replication stalls → bacterial death. Human topoisomerases are different enough to avoid toxicity.`
          }
        ]
      }
    },
    {
      id: 'mb1-deep',
      type: 'text' as const,
      content: `### Eukaryotic vs. Prokaryotic Replication — Comparison

| Feature | Prokaryotes | Eukaryotes |
|---------|------------|-----------|
| Origins of replication | 1 (OriC) | Many (~10,000 in human cells) |
| Speed | ~1000 nt/sec | ~50 nt/sec |
| Okazaki fragments | ~1000-2000 nt | ~100-200 nt |
| Main polymerase | DNA Pol III | DNA Pol delta (lagging) and epsilon (leading) |
| Topoisomerase | Gyrase (type II) | Topoisomerase I and II |
| Telomere issue | No (circular DNA) | Yes (linear chromosomes need telomerase) |
| Histones | No | Yes (old histones distributed to both daughter strands) |

### Drugs Targeting DNA Replication (MCAT Favorites!)

| Drug | Target | Mechanism | Use |
|------|--------|-----------|-----|
| Fluoroquinolones (ciprofloxacin) | Bacterial gyrase | Blocks supercoil relief | Antibiotic |
| AZT (zidovudine) | Reverse transcriptase | Chain terminator (nucleoside analog without 3'-OH) | HIV treatment |
| Methotrexate | Dihydrofolate reductase | Blocks thymidylate synthesis → no dTTP | Cancer chemotherapy |
| Cytarabine | DNA polymerase | Nucleoside analog, inhibits chain elongation | Leukemia treatment |

### Repair After Replication — Error Rates

- DNA Pol III error rate: ~1 in $10^5$ nucleotides (before proofreading)
- After proofreading ($3' \\to 5'$ exonuclease): ~1 in $10^7$
- After mismatch repair: ~1 in $10^9$ to $10^{10}$
- This extraordinary accuracy is essential for genome stability`
    },
    {
      id: 'mb1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Concepts** 🎯`,
      exercise: {
        questions: [
          {
            question: `Telomerase is a reverse transcriptase. This means it:`,
            options: [`Uses an RNA template to synthesize DNA, extending the 3' end of the chromosome`, `Synthesizes RNA from a DNA template`, `Repairs damaged telomere DNA using DNA as a template`, `Cleaves telomeric repeats from chromosome ends`],
            correctAnswer: 0,
            explanation: `Telomerase carries its own RNA template complementary to the telomeric repeat (TTAGGG). It reverse-transcribes this RNA → DNA, extending the 3' overhang. DNA polymerase can then fill in the complementary strand. Cancer cells reactivate telomerase to achieve immortality — this is a major chemotherapy target.`
          },
          {
            question: `AZT (azidothymidine) treats HIV by acting as a nucleoside analog. It terminates the growing DNA chain because:`,
            options: [`It lacks a 3'-OH group, so no further nucleotides can be added`, `It is incorporated faster than normal nucleotides`, `It causes DNA strand breaks`, `It inhibits helicase from unwinding viral DNA`],
            correctAnswer: 0,
            explanation: `AZT is a thymidine analog with an azido group instead of 3'-OH. After incorporation by reverse transcriptase, there is no 3'-OH for the next nucleotide → chain termination. This specifically targets reverse transcriptase (HIV) and not human DNA polymerases, though mitochondrial DNA Pol gamma can be affected (side effects).`
          }
        ]
      }
    },
    {
      id: 'mb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Semiconservative replication proven by Meselson-Stahl (heavy isotope experiment)
- DNA Pol III: $5' \\to 3'$ synthesis, $3' \\to 5'$ proofreading — needs a primer (3'-OH)
- Leading strand: continuous. Lagging strand: discontinuous (Okazaki fragments, each with own primer)
- Enzyme order: helicase → topoisomerase (ahead) → primase → DNA Pol III → DNA Pol I (removes primers) → ligase
- Telomeres shorten each division (end replication problem); telomerase extends them (active in stem/cancer cells)
- Error rates: Pol III alone ~$10^{-5}$ → with proofreading ~$10^{-7}$ → with mismatch repair ~$10^{-9}$
- Drugs: fluoroquinolones (gyrase), AZT (chain terminator for reverse transcriptase), methotrexate (dTTP synthesis)`
    }
  ]
};
