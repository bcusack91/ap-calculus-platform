export const mcatMicroPart5Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mi5-intro',
      type: 'text' as const,
      content: `# Microbiology for the MCAT

**Part 5 of 7 — Fungi, Parasites & Prions**

### Fungi

| Feature | Details |
|---------|---------|
| Cell wall | **Chitin** (not peptidoglycan!) |
| Cell membrane | Contains **ergosterol** (target for antifungals) |
| Nutrition | Heterotrophs, absorptive feeding |
| Forms | Yeasts (unicellular), molds (multicellular), dimorphic (both) |

### Fungal Reproduction

- **Asexual**: Budding (yeasts), spore formation
- **Sexual**: Occurs under stress conditions

### Parasitology (Key MCAT Parasites)

| Organism | Type | Disease | Transmission |
|----------|------|---------|-------------|
| *Plasmodium* | Protozoan | Malaria | Mosquito (*Anopheles*) |
| *Trypanosoma* | Protozoan | Sleeping sickness | Tsetse fly |
| *Giardia* | Protozoan | Giardiasis (diarrhea) | Contaminated water |
| *Toxoplasma* | Protozoan | Toxoplasmosis | Cat feces, undercooked meat |
| Tapeworms | Helminth | Intestinal infection | Undercooked meat |

### Prions

- Misfolded proteins (PrP$^{Sc}$) — NO nucleic acid
- Convert normal PrP$^{C}$ to misfolded form
- Cannot be sterilized by standard methods (resist heat, UV, chemicals)
- Cause spongiform encephalopathies (BSE, CJD, kuru)`
    },
    {
      id: 'mi5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fungi & Parasites** 🎯`,
      exercise: {
        questions: [
          {
            question: `Antifungal drugs target ergosterol because:`,
            options: [`Ergosterol is in fungal membranes but not human membranes (humans use cholesterol)`, `Ergosterol is in all cell walls`, `It disrupts bacterial growth too`, `Ergosterol is the same as cholesterol`],
            correctAnswer: 0,
            explanation: `Fungal membranes use ergosterol instead of cholesterol. Drugs like amphotericin B bind ergosterol (creating pores) and azoles block ergosterol synthesis. Since humans use cholesterol, these drugs selectively target fungi.`
          }
        ]
      }
    },
    {
      id: 'mi5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Fungi: chitin cell wall, ergosterol in membrane (drug target)
- Malaria (*Plasmodium*) transmitted by *Anopheles* mosquito
- Prions: misfolded proteins with NO nucleic acid — unique infectious agents
- Antifungals target ergosterol (azoles) or chitin — not peptidoglycan`
    }
  ]
};
