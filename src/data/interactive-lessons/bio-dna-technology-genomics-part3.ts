export const bioDnaTechnologyGenomicsPart3Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna3-intro',
      type: 'text' as const,
      content: `
## Gene Cloning & Recombinant DNA

**Part 3 of 7 — DNA Technology & Genomics**

Gene cloning produces many identical copies of a gene by inserting it into a self-replicating **vector** and growing it in host cells.

### What Is Recombinant DNA?

Recombinant DNA (rDNA) is a molecule constructed by joining DNA from **two or more different sources**. The basic recipe:

1. **Cut** both the gene of interest and the vector with the **same restriction enzyme** (producing compatible sticky ends).
2. **Ligate** — DNA ligase seals the gene into the vector.
3. **Transform** — introduce the recombinant vector into a host cell (usually *E. coli*).
4. **Select** — identify cells that took up the recombinant vector using selectable markers.

### Vectors

A **vector** is a DNA molecule that can carry foreign DNA into a host cell and replicate there.

| Vector Type | Insert Size | Features |
|-------------|------------|----------|
| **Plasmid** | Up to ~15 kb | Small, circular, easy to manipulate |
| **Bacteriophage λ** | Up to ~25 kb | Infects bacteria; higher capacity |
| **BAC** (Bacterial Artificial Chromosome) | 100–300 kb | Stable in *E. coli*; used for genome projects |
| **YAC** (Yeast Artificial Chromosome) | 200–2,000 kb | Propagated in yeast; very large inserts |
      `
    },
    {
      id: 'dna3-plasmid-text',
      type: 'text' as const,
      content: `
### Anatomy of a Plasmid Vector

A cloning plasmid typically contains:

- **Origin of replication (ori)** — allows autonomous replication in the host cell
- **Selectable marker** — usually an antibiotic resistance gene (e.g., *ampR*, *kanR*) that lets you identify cells containing the plasmid
- **Multiple cloning site (MCS)** — a short region with many unique restriction enzyme sites, providing flexibility for inserting different genes
- **Reporter gene** (optional) — e.g., *lacZ* (β-galactosidase) for blue-white screening

### Transformation

**Transformation** = uptake of foreign DNA by a cell.

Methods:
- **Heat shock**: Briefly heat $CaCl_{2}$-treated *E. coli* to 42°C → membrane becomes transiently permeable
- **Electroporation**: Short electrical pulse creates temporary pores in the membrane
- For eukaryotes: **lipofection**, **microinjection**, or **gene guns** (biolistics)

### Selection: How Do You Know It Worked?

#### Antibiotic Selection
- Plate transformed bacteria on medium containing the antibiotic.
- Only cells with the plasmid (carrying the resistance gene) survive.

#### Blue-White Screening
- The MCS is located inside the *lacZ* gene.
- If a gene is **inserted** into the MCS, *lacZ* is disrupted → colonies are **white**.
- If the plasmid **re-circularizes** without an insert, *lacZ* is intact → colonies are **blue** (on X-gal medium).
- **White colonies** = recombinant clones (what you want!).
      `
    },
    {
      id: 'dna3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Recombinant DNA** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why must the gene of interest and the plasmid vector be cut with the same restriction enzyme?',
            options: [
              'So that both produce compatible sticky ends that can be joined by DNA ligase',
              'So that the plasmid replicates at the same rate as the gene',
              'To ensure the gene is expressed at the correct temperature',
              'Because different restriction enzymes would destroy the antibiotic resistance gene'
            ],
            correctAnswer: 0,
            explanation: 'Using the same restriction enzyme ensures both the insert and the vector have complementary sticky ends. These matching overhangs base-pair with each other, allowing DNA ligase to form phosphodiester bonds and seal the recombinant molecule.'
          },
          {
            question: 'In blue-white screening, white colonies indicate:',
            options: [
              'Successful insertion of foreign DNA into the lacZ gene, disrupting it',
              'Cells that failed to take up the plasmid',
              'Cells with an intact lacZ gene producing functional β-galactosidase',
              'Contamination of the culture plate'
            ],
            correctAnswer: 0,
            explanation: 'When foreign DNA is inserted into the MCS within lacZ, the gene is disrupted and β-galactosidase is not produced. Without this enzyme, X-gal is not cleaved, so colonies appear white. Blue colonies have an intact lacZ (no insert).'
          }
        ]
      }
    },
    {
      id: 'dna3-libraries-text',
      type: 'text' as const,
      content: `
### Gene Libraries

A **gene library** is a collection of clones that together represent all the DNA sequences from a particular source.

#### Genomic Library
- Contains fragments of the **entire genome** (including introns, promoters, non-coding regions).
- Made by cutting total genomic DNA with restriction enzymes and cloning all fragments.

#### cDNA Library
- Contains only **expressed genes** (no introns).
- Made from **mRNA** using **reverse transcriptase** to synthesize complementary DNA (cDNA).
- Represents only genes active in the tissue/cell type from which the mRNA was isolated.

| Feature | Genomic Library | cDNA Library |
|---------|----------------|--------------|
| Contains introns? | Yes | No |
| Contains promoters? | Yes | No |
| Tissue-specific? | No (whole genome) | Yes (reflects gene expression) |
| Made from | Genomic DNA | mRNA → cDNA |
      `
    },
    {
      id: 'dna3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Gene Libraries** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which enzyme is used to create a cDNA library from mRNA?',
            options: [
              'Reverse transcriptase',
              'DNA ligase',
              'Restriction endonuclease',
              'Taq polymerase'
            ],
            correctAnswer: 0,
            explanation: 'Reverse transcriptase synthesizes a complementary DNA (cDNA) strand from an mRNA template. This cDNA lacks introns because the mRNA has already been spliced, making cDNA libraries useful for studying expressed genes.'
          },
          {
            question: 'A researcher wants to study the promoter region of a gene. Which type of library should they use?',
            options: [
              'Genomic library, because it contains non-coding regions including promoters',
              'cDNA library, because it contains the most complete gene sequences',
              'Either library, since both contain promoter sequences',
              'Neither library — promoters cannot be cloned'
            ],
            correctAnswer: 0,
            explanation: 'Genomic libraries contain all DNA sequences, including promoters, introns, and other non-coding regions. cDNA libraries are made from processed mRNA and therefore lack promoters and introns.'
          }
        ]
      }
    },
    {
      id: 'dna3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Gene Cloning** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'DNA ligase forms _____ bonds to seal the recombinant DNA molecule.',
            options: ['phosphodiester', 'hydrogen', 'peptide', 'ionic']
          },
          {
            label: 'In blue-white screening, _____ colonies contain the desired insert.',
            options: ['white', 'blue', 'red', 'green']
          },
          {
            label: 'A cDNA library is made from mRNA using the enzyme _____.',
            options: ['reverse transcriptase', 'DNA polymerase III', 'helicase', 'primase']
          },
          {
            label: 'The _____ on a plasmid allows it to replicate independently in a host cell.',
            options: ['origin of replication', 'multiple cloning site', 'selectable marker', 'reporter gene']
          }
        ],
        correctAnswers: ['phosphodiester', 'white', 'reverse transcriptase', 'origin of replication'],
        hint1: 'DNA ligase catalyzes the formation of the same type of bond that links nucleotides in a DNA strand.',
        hint2: 'Insertion into lacZ disrupts β-galactosidase — think about which color means the enzyme is NOT working.',
        hint3: 'The enzyme that makes DNA from an RNA template is named for doing the "reverse" of transcription.',
        explanation: 'DNA ligase forms phosphodiester bonds. White colonies have disrupted lacZ (insert present). Reverse transcriptase converts mRNA to cDNA. The origin of replication (ori) enables autonomous plasmid replication in host cells.'
      }
    }
  ]
};
