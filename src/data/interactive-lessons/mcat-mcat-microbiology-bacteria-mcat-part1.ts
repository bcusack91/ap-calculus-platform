export const mcatBacteriaPart1Data = {
  topicSlug: 'mcat-microbiology-bacteria-mcat',
  sections: [
    {
      id: 'bac1-intro',
      type: 'text' as const,
      content: `# Bacteria

**Part 1 of 4 — Prokaryotic Architecture & the Gram Stain**

### What a Prokaryote Does NOT Have

No nucleus (a single circular chromosome sits in the **nucleoid**), no membrane-bound organelles, no histone-wrapped chromatin (though DNA is supercoiled by gyrase), no 80S ribosomes. What it DOES have: **70S ribosomes**, a plasma membrane WITHOUT cholesterol (except Mycoplasma, which steals host sterols), often **plasmids** (small autonomous DNA circles), and in most species a **peptidoglycan wall**.

Transcription and translation are coupled — ribosomes load onto mRNA while RNA polymerase is still working, possible only because there is no nuclear envelope. Bacterial mRNA is often **polycistronic** (operons).

### The Gram Stain Divides the Bacterial World

| Feature | Gram-positive (purple) | Gram-negative (pink) |
|---------|------------------------|----------------------|
| Peptidoglycan | THICK, many layers — retains crystal violet-iodine | Thin layer in the periplasm — decolorized, counterstained with safranin |
| Outer membrane | None | Present — with **LPS (endotoxin)** in the outer leaflet |
| Unique polymers | Teichoic acids | Porins, periplasmic space |
| Consequences | Vancomycin-susceptible; lysozyme-sensitive | Blocks many drugs; **lipid A** triggers septic shock |

**Peptidoglycan** itself: chains of alternating **NAG-NAM** sugars, cross-linked by short peptides containing **D-amino acids** (a prokaryotic signature — human proteases cannot cut D-linkages). **Lysozyme** (tears, saliva) hydrolyzes the NAG-NAM glycosidic bond; beta-lactams block the cross-linking (transpeptidase) step. Acid-fast organisms (Mycobacterium) wrap the wall in waxy **mycolic acids** and stain with neither Gram reagent.

### Outside the Wall

- **Capsule:** polysaccharide slime layer; **antiphagocytic** — the major virulence factor of encapsulated organisms; the basis of polysaccharide vaccines; visualized by negative staining.
- **Flagella:** rotary protein motors driven by the **proton-motive force** (not ATP directly); direction of rotation sets run-vs-tumble **chemotaxis**.
- **Pili/fimbriae:** adhesion to host surfaces; the special **sex pilus** initiates conjugation.
- **Endospores** (Bacillus, Clostridium): metabolically inert survival capsules — dipicolinic acid + calcium core, resistant to heat, desiccation, radiation; killed reliably only by autoclaving (121 C, pressurized steam). A spore is a lifeboat, not a reproductive cell: one cell → one spore → one cell.

### Shapes and Arrangements

Cocci (spheres) and bacilli (rods) dominate; division-plane geometry generates chains (strepto-) or clusters (staphylo-). Spirochetes corkscrew using internal axial filaments.`
    },
    {
      id: 'bac1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bacterial Structure & Gram Stain** 🎯`,
      exercise: {
        questions: [
          {
            question: `A bacterium stains pink after Gram staining. Which structure does it necessarily possess?`,
            options: [`Thick multilayered peptidoglycan`, `Teichoic acids`, `An outer membrane containing lipopolysaccharide`, `Mycolic acid coat`],
            correctAnswer: 2,
            explanation: `Pink (safranin counterstain) = gram-negative: the thin peptidoglycan cannot hold crystal violet through alcohol decolorization. The defining gram-negative feature is the LPS-bearing outer membrane. Thick peptidoglycan and teichoic acids are gram-POSITIVE traits; mycolic acids mark acid-fast organisms.`
          },
          {
            question: `Septic shock caused by gram-negative bacteremia is triggered primarily by:`,
            options: [`The lipid A portion of LPS activating a massive innate immune response`, `Secreted exotoxin proteins`, `Teichoic acid release`, `Peptidoglycan fragments alone`],
            correctAnswer: 0,
            explanation: `Endotoxin = LPS, and its toxic moiety is lipid A, recognized by TLR4 on innate immune cells. Released in bulk during bacterial lysis, it drives cytokine storm, vasodilation, and DIC. It is heat-stable and membrane-integral — unlike secreted, protein exotoxins.`
          },
          {
            question: `In a bacterium, ribosomes begin translating an mRNA before its transcription is complete. This is possible because:`,
            options: [`Bacterial ribosomes read RNA 3' to 5'`, `There is no nuclear envelope separating transcription from the translational machinery`, `Bacterial mRNA requires no ribosomes`, `RNA polymerase itself synthesizes the protein`],
            correctAnswer: 1,
            explanation: `In eukaryotes, transcription (nucleus) and translation (cytosol) are physically separated and mRNA is processed in between. Prokaryotes have no such compartment: ribosomes engage the 5' end of nascent mRNA immediately — coupled transcription-translation, one basis for their rapid growth.`
          },
          {
            question: `An autoclave (121 degrees C, pressurized steam) is required to sterilize surgical instruments contaminated with Clostridium because boiling alone fails to destroy:`,
            options: [`LPS in the outer membrane`, `The organism's plasmids`, `Capsular polysaccharide`, `Endospores, whose dehydrated dipicolinate-calcium core resists 100 degrees C`],
            correctAnswer: 3,
            explanation: `Endospores are dormant, dehydrated structures packed with calcium dipicolinate and shielded by keratin-like coats; many survive hours of boiling. Pressurized steam above 121 C denatures even spore components. Vegetative cells, capsules, and plasmids are destroyed far more easily.`
          },
          {
            question: `The D-amino acids in peptidoglycan cross-bridges benefit bacteria because they:`,
            options: [`Rotate plane-polarized light for chemotaxis`, `Are required for Gram stain retention`, `Resist cleavage by host proteases, which recognize only L-amino acid peptide bonds`, `Provide the energy for wall synthesis`],
            correctAnswer: 2,
            explanation: `Host proteolytic enzymes evolved on L-amino acid substrates; D-Ala and D-Glu linkages are effectively invisible to them, protecting the wall from digestion. (Lysozyme circumvents this by attacking the sugar backbone instead, and beta-lactams mimic the D-Ala-D-Ala motif.)`
          }
        ]
      }
    },
    {
      id: 'bac1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Prokaryote kit: nucleoid + circular chromosome, plasmids, 70S ribosomes, coupled transcription-translation, polycistronic mRNA, no cholesterol in the membrane
- Gram-positive = thick peptidoglycan + teichoic acid (purple); gram-negative = thin wall + outer membrane with LPS/lipid A = endotoxin (pink)
- Peptidoglycan = NAG-NAM chains, D-amino-acid cross-links; lysozyme cuts sugars, beta-lactams block cross-linking; acid-fast = mycolic acids
- Capsule = antiphagocytic + vaccine target; flagella run on proton-motive force; pili adhere (sex pilus conjugates)
- Endospores (Bacillus, Clostridium) = dormant survival, dipicolinic acid, autoclave to kill`
    },
    {
      id: 'bac1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Structure Logic

<details>
<summary><b>Example 1: Predict lysozyme sensitivity</b></summary>

**Question:** Rank the vulnerability of a gram-positive coccus, a gram-negative rod, and a Mycoplasma to lysozyme in tears, and justify.

**Solution:**
1. Gram-positive: peptidoglycan is thick but EXPOSED at the surface — most vulnerable; lysozyme digestion leaves an osmotically fragile protoplast that lyses in hypotonic tears.
2. Gram-negative: has peptidoglycan, but the outer membrane shields it; lysozyme is largely blocked unless the outer membrane is first disrupted.
3. Mycoplasma: no peptidoglycan at all — nothing for lysozyme to cut; intrinsically insensitive.

**MCAT Strategy:** The same access logic governs lysozyme and vancomycin: possession of a target is necessary but not sufficient — the agent must reach it.
</details>

<details>
<summary><b>Example 2: Deduce the structure from an experiment</b></summary>

**Question:** Mutant pneumococci lacking one surface structure are readily engulfed by neutrophils in vitro and avirulent in mice, while the wild type resists phagocytosis and kills the mice. Injecting the purified structure alone into mice raises protective antibodies. Identify it.

**Solution:**
1. Antiphagocytic + virulence-determining points to the **capsule**.
2. Purified capsular polysaccharide raising protective antibody is the principle behind pneumococcal vaccines: opsonizing anti-capsule IgG restores phagocytosis.
3. This mirrors Griffith's smooth (encapsulated, lethal) vs rough (unencapsulated, harmless) strains — the same molecule later starred in the transformation story.

**MCAT Strategy:** Capsule questions bundle three testable ideas: phagocytosis evasion, opsonization, and polysaccharide vaccine design.
</details>

<details>
<summary><b>Example 3: Flagellar motor energetics</b></summary>

**Question:** A drug collapses a bacterium's proton gradient without lowering cytoplasmic ATP (ATP is maintained by substrate-level phosphorylation). Predict effects on flagellar motility and on flagellin synthesis.

**Solution:**
1. The flagellar motor is driven directly by the **proton-motive force**, not ATP hydrolysis — motility stops immediately despite normal ATP.
2. Flagellin SYNTHESIS is ordinary translation, powered by GTP/ATP — it continues (until the PMF collapse has secondary effects).
3. Contrast with eukaryotic flagella (dynein ATPases, 9+2 microtubules): a favorite discrete comparison.

**MCAT Strategy:** Prokaryotic flagellum = PMF-driven rotary motor; eukaryotic flagellum = ATP-driven bending. Energy source is the discriminating experimental prediction.
</details>`
    }
  ]
};
