export const mcatMicroPart3Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi3-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 3 of 7 — Bacterial Genetics & Antibiotic Resistance**

### Horizontal Gene Transfer

| Mechanism | How it works |
|-----------|-------------|
| **Transformation** | Bacteria picks up free (naked) DNA from environment |
| **Transduction** | Bacteriophage transfers DNA between bacteria |
| **Conjugation** | Direct DNA transfer via sex pilus (F plasmid) |

Unlike vertical transmission (parent to offspring), horizontal gene transfer spreads genes **between** cells, even across species — a major driver of resistance.

### Antibiotic Resistance Mechanisms

| Mechanism | Example |
|-----------|---------|
| Enzyme degradation | $\\beta$-lactamase destroys penicillin |
| Target modification | Altered ribosome binding site, causing macrolide resistance |
| Efflux pumps | Pump drug out of cell, causing tetracycline resistance |
| Decreased permeability | Porin mutations reduce drug entry |

### MCAT Connection: Antibiotic Targets

| Antibiotic Class | Target | Spectrum |
|-----------------|--------|----------|
| $\\beta$-lactams (penicillin) | Cell wall synthesis | Bacteria only |
| Aminoglycosides | 30S ribosomal subunit | Bacteria only |
| Macrolides (erythromycin) | 50S ribosomal subunit | Bacteria only |
| Fluoroquinolones | DNA gyrase (topoisomerase) | Bacteria only |
| Sulfonamides | Folate synthesis | Bacteria only |

Antibiotics DON'T work against viruses — viruses use host machinery!`
    },
    {
      id: 'mi3-worked',
      type: 'text' as const,
      content: `### Worked Example — Tracing How Resistance Spreads

**Scenario:** A hospital reports an outbreak of *Klebsiella* carrying a plasmid that encodes both a $\\beta$-lactamase and a tetracycline efflux pump. Genetically identical resistance plasmids appear in unrelated *E. coli* strains on the same ward. A question asks which mechanism most likely spread the resistance and why it threatens multiple drug classes at once.

**Step 1 — Recognize the unit of transfer.** The genes sit on a **plasmid** — a self-replicating, mobile piece of DNA separate from the chromosome. Plasmids are the classic vehicles of conjugation.

**Step 2 — Choose the transfer mechanism.** The same plasmid appearing in a different species points to **conjugation**: the donor extends a sex pilus, draws the recipient close, and passes a plasmid copy through direct cell-to-cell contact. Transformation (naked DNA uptake) and transduction (phage-mediated) typically move smaller or species-restricted fragments.

**Step 3 — Explain the multidrug threat.** One plasmid carries **two distinct resistance mechanisms**: enzymatic destruction ($\\beta$-lactamase cleaves the $\\beta$-lactam ring of penicillins) and active efflux (a pump expels tetracycline before it can act). A single conjugation event therefore confers resistance to two unrelated drug classes simultaneously.

> **MCAT takeaway:** Conjugation via plasmids is the most efficient route for spreading resistance, especially across species. Watch for plasmids bundling several mechanisms — enzymatic degradation, target modification, efflux, and reduced permeability — onto one mobile element.`
    },
    {
      id: 'mi3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bacterial Genetics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A bacterium acquires antibiotic resistance after being infected by a bacteriophage carrying resistance genes from another bacterium. This is:`,
            options: [`Transduction — phage-mediated DNA transfer between bacteria`, `Transformation`, `Conjugation`, `Mutation`],
            correctAnswer: 0,
            explanation: `Transduction = bacteriophage accidentally packages bacterial DNA and transfers it to a new host. Generalized transduction transfers random genes; specialized transduction transfers genes near the phage integration site.`
          },
          {
            question: `A non-pathogenic bacterium becomes virulent after taking up free DNA released by dead, lysed pathogenic cells in its environment. This process is:`,
            options: [`Transformation`, `Transduction`, `Conjugation`, `Transposition`],
            correctAnswer: 0,
            explanation: `Transformation is the uptake of naked (free) DNA from the surroundings by a competent cell. This is exactly the Griffith experiment scenario, in which a harmless strain becomes virulent after absorbing DNA from killed virulent cells.`
          },
          {
            question: `A clinical strain of E. coli produces $\\beta$-lactamase. How does this enzyme confer resistance to penicillin?`,
            options: [`It hydrolyzes the $\\beta$-lactam ring, inactivating the drug before it can block cell wall synthesis`, `It pumps penicillin out of the cell`, `It mutates the ribosome so penicillin cannot bind`, `It thickens the outer membrane to exclude the drug`],
            correctAnswer: 0,
            explanation: `$\\beta$-lactamases cleave the four-membered $\\beta$-lactam ring that defines penicillins and cephalosporins. Once the ring is opened, the drug can no longer inhibit the transpeptidases that build the cell wall. This is enzymatic (degradative) resistance.`
          },
          {
            question: `Which antibiotic class targets DNA gyrase (a topoisomerase), preventing the relief of supercoiling during DNA replication?`,
            options: [`Fluoroquinolones`, `Aminoglycosides`, `$\\beta$-lactams`, `Macrolides`],
            correctAnswer: 0,
            explanation: `Fluoroquinolones (e.g., ciprofloxacin) inhibit bacterial DNA gyrase/topoisomerase, blocking the supercoil management required for replication. Aminoglycosides and macrolides hit the ribosome (30S and 50S); $\\beta$-lactams hit the cell wall.`
          },
          {
            question: `Why are conventional antibiotics ineffective against viral infections such as influenza?`,
            options: [`Viruses replicate using host-cell machinery and lack the bacterial targets (cell wall, 70S ribosome) that antibiotics attack`, `Viruses have a thicker peptidoglycan layer`, `Viruses divide too slowly for antibiotics to act`, `Antibiotics are destroyed by the viral envelope`],
            correctAnswer: 0,
            explanation: `Antibiotics target bacterial structures and pathways (peptidoglycan synthesis, the 70S ribosome, DNA gyrase, folate synthesis). Viruses have none of these; they hijack host enzymes and ribosomes, so antibiotics have nothing to bind. Antivirals, not antibiotics, are required.`
          },
          {
            question: `Resistance to tetracycline frequently arises from a membrane protein that actively exports the drug, keeping its intracellular concentration below an effective level. This mechanism is a(n):`,
            options: [`Efflux pump`, `Target-site modification`, `Drug-degrading enzyme`, `Porin loss`],
            correctAnswer: 0,
            explanation: `Efflux pumps are transport proteins that expel antibiotics (commonly tetracyclines) faster than they enter, lowering the internal dose. This differs from enzymatic degradation and from mutating the drug's target, though bacteria can combine several mechanisms.`
          }
        ]
      }
    },
    {
      id: 'mi3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Horizontal gene transfer: Transformation (naked DNA), Transduction (phage), Conjugation (pilus/plasmid)
- Conjugation via plasmids is the most efficient route for spreading resistance, even across species
- Antibiotic resistance: enzyme degradation, target modification, efflux pumps, decreased permeability
- Know antibiotic targets: cell wall, 30S/50S ribosome, DNA gyrase, folate
- Antibiotics target bacteria, NOT viruses (viruses use host machinery)`
    }
  ]
};
