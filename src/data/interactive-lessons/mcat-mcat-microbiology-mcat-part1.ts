export const mcatMicroPart1Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi1-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 1 of 7 — Bacteria: Structure & Classification**

### Bacterial Cell Structure

| Structure | Function | Notes |
|-----------|----------|-------|
| Cell wall | Protection, shape | Peptidoglycan |
| Plasma membrane | Selective barrier | No cholesterol |
| Nucleoid | Circular DNA | No membrane-bound nucleus |
| Ribosomes | Protein synthesis | 70S (target for antibiotics!) |
| Plasmid | Accessory genes | Often carry antibiotic resistance |
| Flagella | Motility | Chemotaxis |
| Pili | Attachment, conjugation | Sex pili for DNA transfer |
| Capsule | Immune evasion | Prevents phagocytosis |

### Gram Stain Classification

| Feature | Gram Positive | Gram Negative |
|---------|-------------|-------------|
| Stain color | Purple/Blue | Pink/Red |
| Cell wall | Thick peptidoglycan | Thin peptidoglycan |
| Outer membrane | No | Yes (contains LPS) |
| LPS (endotoxin) | No | Yes |

### LPS (Lipopolysaccharide) — HIGH YIELD

- Found ONLY in Gram-negative outer membrane
- Released when bacteria lyse, triggering a massive immune response
- Can cause septic shock, fever, disseminated intravascular coagulation (DIC)`
    },
    {
      id: 'mi1-worked',
      type: 'text' as const,
      content: `### Worked Example — Why Bacterial Ribosomes Make Good Drug Targets

**Scenario:** A passage describes a patient with a *Staphylococcus aureus* (Gram-positive) infection treated with two antibiotics: penicillin (a $\\beta$-lactam) and gentamicin (an aminoglycoside). The question asks why these drugs harm the bacterium but spare the patient's own cells.

**Step 1 — Identify the targets.** Penicillin inhibits cell wall (peptidoglycan) cross-linking; gentamicin binds the **30S** ribosomal subunit and blocks translation.

**Step 2 — Find the structural difference exploited.** Human cells have **no peptidoglycan cell wall**, so penicillin has no target in the host. Human ribosomes are **80S** (40S + 60S subunits), whereas bacterial ribosomes are **70S** (30S + 50S). Aminoglycosides selectively recognize the 30S subunit's rRNA, which differs from the eukaryotic 40S.

**Step 3 — State the principle (selective toxicity).** A drug is clinically useful when it attacks a structure or pathway that the pathogen has and the host lacks (or that differs enough to allow selective binding). The cell wall and the 70S ribosome are the two classic exploited differences.

> **MCAT takeaway:** When asked "why does this antibiotic spare human cells," scan for a uniquely prokaryotic target — peptidoglycan, 70S ribosome, DNA gyrase, or folate synthesis. Because human ribosomes are 80S, ribosome-targeting antibiotics ($30S$ or $50S$) are selectively toxic.`
    },
    {
      id: 'mi1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bacteria Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `A Gram-negative bacterium is more difficult to treat with certain antibiotics because:`,
            options: [`The outer membrane acts as an additional barrier, blocking drug entry`, `It has a thicker peptidoglycan layer`, `It lacks a cell wall`, `It has no ribosomes`],
            correctAnswer: 0,
            explanation: `Gram-negative bacteria have an outer membrane (with LPS) that many antibiotics cannot penetrate. This is why Gram-negative infections (E. coli, Pseudomonas) are often harder to treat than Gram-positive.`
          },
          {
            question: `A clinical isolate stains pink during a Gram stain. Which feature is most likely responsible for its pathology when the cells lyse?`,
            options: [`Lipopolysaccharide (endotoxin) in the outer membrane`, `A thick peptidoglycan layer retaining crystal violet`, `Secreted exotoxin from a Gram-positive wall`, `Loss of the plasma membrane`],
            correctAnswer: 0,
            explanation: `Pink staining indicates Gram-negative. Their outer membrane contains LPS (endotoxin). When the cells lyse, LPS is released and triggers fever, hypotension, and potentially septic shock and DIC.`
          },
          {
            question: `Bacterial ribosomes are 70S while human ribosomes are 80S. This difference is the basis for:`,
            options: [`Selective toxicity of ribosome-targeting antibiotics`, `The Gram stain color difference`, `Bacterial resistance to all antibiotics`, `The presence of a nuclear membrane`],
            correctAnswer: 0,
            explanation: `Because bacterial (70S; 30S + 50S) and eukaryotic (80S; 40S + 60S) ribosomes differ, drugs such as aminoglycosides (30S) and macrolides (50S) bind the bacterial ribosome selectively, sparing host translation.`
          },
          {
            question: `Which bacterial structure most directly allows a pathogen to evade phagocytosis by host immune cells?`,
            options: [`The polysaccharide capsule`, `The 70S ribosome`, `The nucleoid`, `The flagellum`],
            correctAnswer: 0,
            explanation: `The capsule is a slippery polysaccharide layer that masks surface molecules and prevents phagocytes from engulfing the bacterium. Encapsulated organisms (e.g., Streptococcus pneumoniae) are more virulent; vaccines often target capsular antigens.`
          },
          {
            question: `A bacterium uses a long, hollow appendage to transfer a copy of a plasmid directly into a neighboring cell. This appendage is the:`,
            options: [`Sex pilus`, `Flagellum`, `Capsule`, `Mesosome`],
            correctAnswer: 0,
            explanation: `The sex (conjugative) pilus mediates conjugation, drawing two cells together so plasmid DNA (often the F plasmid, frequently carrying resistance genes) can pass between them. Flagella are for motility, not DNA transfer.`
          },
          {
            question: `Which feature is found in a typical bacterial cell but NOT in a human cell?`,
            options: [`A peptidoglycan cell wall`, `A plasma membrane`, `Ribosomes`, `DNA`],
            correctAnswer: 0,
            explanation: `Peptidoglycan is unique to bacteria (human cells have no cell wall at all). Both cell types have a plasma membrane, ribosomes (though different sizes), and DNA. The peptidoglycan wall is why $\\beta$-lactams are selectively toxic.`
          }
        ]
      }
    },
    {
      id: 'mi1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Gram-positive: thick peptidoglycan, no outer membrane (stains purple)
- Gram-negative: thin peptidoglycan + outer membrane with LPS (stains pink)
- LPS = endotoxin, causing fever and shock
- Bacterial ribosomes = 70S (antibiotics target these); human ribosomes = 80S
- Selective toxicity exploits uniquely prokaryotic targets: cell wall, 70S ribosome, DNA gyrase, folate synthesis`
    }
  ]
};
