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
- Convert normal PrP$^{C}$ to the misfolded form
- Cannot be sterilized by standard methods (resist heat, UV, chemicals)
- Cause spongiform encephalopathies (BSE, CJD, kuru)`
    },
    {
      id: 'mi5-worked',
      type: 'text' as const,
      content: `### Worked Example — Why Prions Defy Sterilization

**Scenario:** A passage describes surgical instruments contaminated by a patient with Creutzfeldt-Jakob disease (CJD). Standard autoclaving (which reliably kills bacteria, viruses, and fungal spores) fails to make the instruments safe. A question asks why prions resist this treatment that destroys every other infectious agent.

**Step 1 — Identify what the infectious agent is made of.** A prion is **only a misfolded protein** (PrP$^{Sc}$) — it contains **no nucleic acid** (no DNA or RNA) and no membrane or cell structure.

**Step 2 — Recall how standard sterilization works.** Autoclaving, UV, and many disinfectants kill pathogens by damaging **nucleic acids** and disrupting membranes/proteins enough to halt replication. A prion has no genome to damage and no membrane to lyse, so these methods miss their usual targets.

**Step 3 — Explain the propagation mechanism.** The misfolded PrP$^{Sc}$ acts as a **template**, forcing normal cellular PrP$^{C}$ to refold into the pathogenic shape — a chain reaction that needs no replication machinery. The aggregated, $\\beta$-sheet-rich form is also extraordinarily heat- and protease-stable.

> **MCAT takeaway:** Prions are infectious **proteins with no nucleic acid**, so genome-targeting sterilization fails. They propagate by templating the misfolding of normal host protein, and require extreme measures (prolonged high-temperature autoclaving with NaOH or incineration) to inactivate.`
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
          },
          {
            question: `Why is a $\\beta$-lactam antibiotic such as penicillin ineffective against a fungal infection?`,
            options: [`Fungal cell walls are made of chitin, not the peptidoglycan that $\\beta$-lactams target`, `Fungi have no cell wall at all`, `Fungi lack ribosomes`, `Penicillin is degraded by ergosterol`],
            correctAnswer: 0,
            explanation: `$\\beta$-lactams block peptidoglycan cross-linking in bacterial cell walls. Fungi build their walls from chitin and have no peptidoglycan, so penicillin has no target. Antifungals instead exploit ergosterol or chitin synthesis.`
          },
          {
            question: `A patient develops malaria after a mosquito bite. The causative organism and vector are:`,
            options: [`Plasmodium (a protozoan), transmitted by the Anopheles mosquito`, `Trypanosoma, transmitted by the tsetse fly`, `Giardia, transmitted by contaminated water`, `A tapeworm, transmitted by undercooked meat`],
            correctAnswer: 0,
            explanation: `Malaria is caused by the protozoan Plasmodium, transmitted by the female Anopheles mosquito. Trypanosoma (tsetse fly) causes sleeping sickness; Giardia causes waterborne diarrhea; tapeworms are helminths from undercooked meat.`
          },
          {
            question: `Which feature distinguishes a prion from all other infectious agents (bacteria, viruses, fungi)?`,
            options: [`It is composed of misfolded protein and contains no nucleic acid`, `It contains only RNA`, `It has a peptidoglycan cell wall`, `It reproduces by binary fission`],
            correctAnswer: 0,
            explanation: `Prions are infectious proteins (PrP$^{Sc}$) with no DNA or RNA. They propagate by templating the misfolding of normal PrP$^{C}$, which is why standard nucleic-acid-targeting sterilization cannot inactivate them.`
          },
          {
            question: `A dimorphic fungus is one that:`,
            options: [`Can switch between yeast (unicellular) and mold (multicellular hyphal) forms, often depending on temperature`, `Has two nuclei per cell at all times`, `Reproduces only sexually`, `Lacks both chitin and ergosterol`],
            correctAnswer: 0,
            explanation: `Dimorphic fungi (e.g., Histoplasma) grow as molds in the environment but convert to yeast forms at body temperature (37 °C). This temperature-dependent switch is a high-yield MCAT detail about fungal biology.`
          },
          {
            question: `An immunocompromised patient acquires a Toxoplasma gondii infection. The two classic routes of transmission are:`,
            options: [`Exposure to cat feces and ingestion of undercooked meat`, `Mosquito bite and contaminated water`, `Tsetse fly bite and sexual contact`, `Airborne droplets and skin contact`],
            correctAnswer: 0,
            explanation: `Toxoplasma is acquired by ingesting oocysts from cat feces or tissue cysts in undercooked meat. It is especially dangerous in immunocompromised patients and during pregnancy (congenital toxoplasmosis).`
          }
        ]
      }
    },
    {
      id: 'mi5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Fungi: chitin cell wall, ergosterol in membrane (drug target) — no peptidoglycan, so $\\beta$-lactams fail
- Dimorphic fungi switch between yeast and mold forms, often by temperature
- Malaria (*Plasmodium*) is transmitted by the *Anopheles* mosquito
- Prions: misfolded proteins with NO nucleic acid that template host protein misfolding
- Antifungals target ergosterol (azoles, amphotericin B) or chitin — not peptidoglycan`
    }
  ]
};
