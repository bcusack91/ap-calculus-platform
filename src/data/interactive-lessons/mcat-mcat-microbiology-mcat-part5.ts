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

### Parasitology

- Eukaryotic parasites are either single-celled **protozoa** or multicellular **helminths** (worms).
- The one to know: ***Plasmodium***, a protozoan, causes **malaria** and is transmitted by the ***Anopheles*** mosquito. (Malaria is also why the sickle-cell trait persists: heterozygotes are protected.)

<!-- yield:low -->
| Organism | Type | Disease | Transmission |
|----------|------|---------|-------------|
| *Trypanosoma* | Protozoan | Sleeping sickness | Tsetse fly |
| *Giardia* | Protozoan | Giardiasis (diarrhea) | Contaminated water |
| *Toxoplasma* | Protozoan | Toxoplasmosis | Cat feces, undercooked meat |
| Tapeworms | Helminth | Intestinal infection | Undercooked meat |
<!-- /yield -->

### Prions

- Misfolded proteins (PrP$^{Sc}$) — NO nucleic acid
- Convert normal PrP$^{C}$ to the misfolded form
- Cannot be sterilized by standard methods (resist heat, UV, chemicals)
- Cause spongiform encephalopathies (BSE, CJD, kuru)
- Contrast **viroids**: tiny circular RNAs with NO protein coat that infect plants — nucleic acid without protein, the mirror image of a prion`
    },
    {
      id: 'mi5-worked',
      type: 'text' as const,
      content: `### Worked Example — Why Prions Defy Sterilization

**Scenario:** A passage describes surgical instruments contaminated by a patient with Creutzfeldt-Jakob disease (CJD). Standard autoclaving (which reliably kills bacteria, viruses, and fungal spores) fails to make the instruments safe. A question asks why prions resist this treatment that destroys every other infectious agent.

**Step 1 — Identify what the infectious agent is made of.** A prion is **only a misfolded protein** (PrP$^{Sc}$) — it contains **no nucleic acid** (no DNA or RNA) and no membrane or cell structure.

**Step 2 — Recall how standard sterilization works.** Autoclaving, UV, and many disinfectants kill pathogens by damaging **nucleic acids** and disrupting membranes/proteins enough to halt replication. A prion has no genome to damage and no membrane to lyse, so these methods miss their usual targets.

**Step 3 — Explain the propagation mechanism.** The misfolded PrP$^{Sc}$ acts as a **template**, forcing normal cellular PrP$^{C}$ to refold into the pathogenic shape — a chain reaction that needs no replication machinery. The aggregated, $\\beta$-sheet-rich form is also extraordinarily heat- and protease-stable.

> **MCAT takeaway:** Prions are infectious **proteins with no nucleic acid**, so genome-targeting sterilization fails. They propagate by templating the misfolding of normal host protein, and require far harsher measures than standard sterilization to inactivate.

<!-- yield:low -->
- The accepted decontamination is prolonged high-temperature autoclaving combined with NaOH, or incineration.
<!-- /yield -->`
    },
    {
      id: 'mi5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fungi & Parasites** 🎯`,
      exercise: {
        questions: [
          {
            question: `Antifungal drugs target ergosterol because:`,
            options: [`It is in fungal but not human membranes`, `It is the main sterol of bacterial membranes`, `It is identical to human cholesterol`, `It is the main component of fungal cell walls`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Fungal membranes use ergosterol instead of cholesterol. Drugs like amphotericin B bind ergosterol (creating pores) and azoles block ergosterol synthesis. Since humans use cholesterol, these drugs selectively target fungi. Ergosterol is a membrane sterol distinct from cholesterol; it is not a wall component (fungal walls are chitin), and bacteria generally lack membrane sterols.`
          },
          {
            question: `Why is a $\\beta$-lactam antibiotic such as penicillin ineffective against a fungal infection?`,
            options: [`Fungi build chitin walls lacking peptidoglycan`, `Fungi have no cell wall for the drug to act on`, `Fungi break penicillin down with ergosterol`, `Fungi pump penicillin out faster than it enters`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `$\\beta$-lactams block peptidoglycan cross-linking in bacterial cell walls. Fungi build their walls from chitin and have no peptidoglycan, so penicillin has no target. Fungi do have a cell wall, ergosterol is a membrane sterol that does not degrade drugs, and efflux is not the reason: the drug simply has no target to act on. Antifungals instead exploit ergosterol or chitin synthesis.`
          },
          {
            question: `A patient develops malaria after a mosquito bite. The causative organism and vector are:`,
            options: [`Plasmodium, transmitted by the Anopheles mosquito`, `Trypanosoma, transmitted by the tsetse fly`, `Giardia, transmitted by contaminated water`, `A tapeworm, transmitted by undercooked meat`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Malaria is caused by the protozoan Plasmodium, transmitted by the female Anopheles mosquito. The other organism-route pairings are real parasite transmission routes, but none of them causes malaria, and none is mosquito-borne.`
          },
          {
            question: `Which feature distinguishes a prion from all other infectious agents (bacteria, viruses, fungi)?`,
            options: [`It is misfolded protein with no nucleic acid`, `It replicates as a naked RNA circle`, `It has a peptidoglycan cell wall`, `It reproduces by binary fission`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Prions are infectious proteins (PrP$^{Sc}$) with no DNA or RNA. They propagate by templating the misfolding of normal PrP$^{C}$, which is why standard nucleic-acid-targeting sterilization cannot inactivate them. A naked circular RNA with no protein coat describes a viroid, the opposite composition.`
          },
          {
            question: `A dimorphic fungus is one that:`,
            options: [`Can switch between yeast and mold forms`, `Has two genetically distinct nuclei per cell`, `Grows only as hyphae at body temperature`, `Lacks both chitin walls and ergosterol membranes`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Dimorphic fungi (e.g., Histoplasma) switch between unicellular yeast and multicellular hyphal mold forms: they grow as molds in the environment but convert to yeast forms at body temperature (37 °C). Two genetically distinct nuclei per cell describes a dikaryotic stage, not dimorphism, and like other fungi, dimorphic fungi have chitin walls and ergosterol membranes.`
          },
          {
            question: `An immunocompromised patient acquires a Toxoplasma gondii infection. The two classic routes of transmission are:`,
            options: [`Cat feces and undercooked meat`, `Mosquito bite and contaminated water`, `Tsetse fly bite and sexual contact`, `Airborne droplets and skin contact`],
            correctAnswer: 0,
            yield: 'LOW',
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
- Antifungals target ergosterol (azoles, amphotericin B) or wall glucan (echinocandins) — not peptidoglycan
- Viroids are the reverse of prions: naked circular RNA with no protein

<!-- yield:low -->
- Low-yield extras: the other parasites (Trypanosoma by tsetse fly, Giardia by contaminated water, Toxoplasma by cat feces or undercooked meat, tapeworms by undercooked meat); prion decontamination by NaOH autoclaving or incineration
<!-- /yield -->`
    }
  ]
};
