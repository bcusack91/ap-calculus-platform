export const mcatAntimicrobialsPart3Data = {
  topicSlug: 'mcat-microbiology-antimicrobials-mcat',
  sections: [
    {
      id: 'abx3-intro',
      type: 'text' as const,
      content: `# Antimicrobials

**Part 3 of 4 — Nucleic Acid, Folate & Membrane Targets**

### Folate Antagonists: Sequential Blockade

Bacteria must SYNTHESIZE tetrahydrofolate (THF), the one-carbon carrier required for thymidylate and purine synthesis; humans simply eat folate (no synthesis pathway = built-in selectivity).

**PABA** → *(dihydropteroate synthase)* → **DHF** → *(dihydrofolate reductase)* → **THF**

- **Sulfonamides** are **PABA structural analogs** that competitively inhibit dihydropteroate synthase.
- **Trimethoprim** inhibits bacterial **dihydrofolate reductase** (its affinity for the bacterial enzyme vastly exceeds that for the human one — selectivity by DEGREE, not absence).
- Together (**TMP-SMX**) they block two sequential steps: a synergistic combination that is far harder to defeat with a single mutation. Starved of THF, the cell cannot make dTMP or purines — DNA synthesis halts.

### DNA and RNA Machines

- **Fluoroquinolones** (ciprofloxacin) inhibit **DNA gyrase (topoisomerase II)** and **topoisomerase IV**. Gyrase introduces negative supercoils ahead of the replication fork; poisoning it traps the enzyme mid-cut, leaving double-strand breaks — **bactericidal**. Human type II topoisomerases are structurally distinct.
- **Rifampin** binds **bacterial RNA polymerase**, blocking initiation of transcription. Resistance arises fast from single point mutations in the gene for its polymerase binding site — hence rifampin is used in COMBINATION (classically for tuberculosis).

<!-- yield:low -->
- Rifampin binds the polymerase's beta subunit, encoded by **rpoB** (the gene where the resistance mutations fall). Trivia: it turns secretions orange.
<!-- /yield -->

- **Metronidazole** is a **prodrug**: only under the strongly reducing conditions inside anaerobes is its nitro group reduced to a radical that shreds DNA. Aerobes cannot activate it — selectivity via activation chemistry.

<!-- yield:low -->
- The electron donors that activate metronidazole are the low-potential ferredoxin/flavodoxin systems of anaerobic metabolism.
<!-- /yield -->

### Membrane Agent: Polymyxins

**Polymyxins** are cationic detergent-like peptides that bind gram-negative **LPS** and disrupt both membranes. Because all cell membranes are chemically similar, selectivity is poor — nephrotoxicity limits them to last-resort gram-negative infections.

<!-- yield:low -->
- **Daptomycin** inserts into gram-positive membranes, collapsing the membrane potential (it is inactivated by pulmonary surfactant, so never used for pneumonia).
<!-- /yield -->

### Beyond Bacteria: the Same Logic

Antifungals show the identical design principle with a different handle: fungal membranes use **ergosterol** where ours use cholesterol. Azoles block ergosterol synthesis; amphotericin B binds ergosterol and punches pores. Narrow chemical differences → usable selectivity, but much less margin than antibacterials (fungi are eukaryotes) — which is why antifungals are systematically more toxic.`
    },
    {
      id: 'abx3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Pathway Pharmacology

**Problem 1.** Bacterial growth inhibited by drug Z is fully rescued by adding thymidine plus purines to the medium, but not by adding excess PABA.

- **(a)** What does rescue by thymidine plus purines tell you about drug Z?
- **(b)** What does the failure of PABA to rescue tell you?
- **(c)** Which enzyme does drug Z inhibit?

**(a) Rescue by end products.** Thymidine and purines are the END PRODUCTS whose synthesis requires THF; supplying them bypasses any folate-pathway block, so Z is a **folate antagonist**.

**(b) No rescue by PABA.** Excess PABA would outcompete a sulfonamide, a competitive PABA analog. No rescue means the block lies DOWNSTREAM of the PABA-using step.

**(c) The target.** A folate block downstream of the PABA step points to **dihydrofolate reductase**: Z acts like trimethoprim. Whatever restores growth lies downstream of the block; whatever fails to rescue is upstream or irrelevant.

**Problem 2.** A gram-negative isolate loses a major porin protein. Consider three drugs: a small hydrophilic beta-lactam, polymyxin and trimethoprim.

- **(a)** How does porin loss change susceptibility to the beta-lactam?
- **(b)** How does it change susceptibility to polymyxin?
- **(c)** How does it change susceptibility to trimethoprim?
- **(d)** What kind of resistance mechanism is porin loss?

**(a) The beta-lactam.** Beta-lactams reach the periplasm through porins, so porin loss reduces entry and **resistance rises**.

**(b) Polymyxin.** Polymyxin attacks LPS on the outer surface directly and needs no porin, so it is **unaffected**.

**(c) Trimethoprim.** It is small and lipophilic enough that porin loss has a **modest** effect, though reduced uptake can contribute low-level resistance.

**(d) A permeability mechanism.** Porin mutations shift many drugs a little rather than one drug a lot. For each drug, ask what path it takes to its target: in permeability mutants, resistance follows the path, not the target.

**Problem 3.** Amphotericin B (an antifungal) and penicillin both exploit selective toxicity, yet amphotericin B is far more toxic to the host.

- **(a)** Does penicillin's target have a human counterpart?
- **(b)** How does amphotericin B harm human cells?
- **(c)** What rule ranks drugs by host safety?

**(a) Penicillin.** Its target, the peptidoglycan transpeptidase, has NO human counterpart, so selectivity is absolute in principle.

**(b) Amphotericin B.** It binds ergosterol, but cholesterol is chemically similar; partial binding to cholesterol-containing human membranes (notably renal cells) causes pores and nephrotoxicity.

**(c) The rule.** Toxicity scales inversely with the chemical distance between microbial and host targets: absent target > different enzyme family > similar molecule. Bacteria (prokaryotes) offer big distances; fungi (fellow eukaryotes) offer small ones.`
    },
    {
      id: 'abx3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Folate, Nucleic Acid & Membrane Drugs** 🎯`,
      exercise: {
        questions: [
          {
            question: `Sulfonamides do not affect human cells because humans:`,
            options: [`Express a sulfonamide-degrading esterase`, `Convert sulfonamides to inactive metabolites in the liver`, `Lack the enzyme pathway that synthesizes folate de novo`, `Have a mutated dihydropteroate synthase with low drug affinity`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Sulfonamides mimic PABA and jam dihydropteroate synthase, an enzyme humans do not possess at all — we import dietary folate with transporters. Selectivity by target ABSENCE is the cleanest kind (compare trimethoprim, which relies on an affinity difference).`
          },
          {
            question: `Trimethoprim-sulfamethoxazole is synergistic primarily because the two drugs:`,
            options: [`Inhibit two sequential enzymes in the THF-synthesis pathway`, `Bind one enzyme at two separate allosteric sites`, `Have identical spectra but different half-lives`, `Prevent each other's efflux from the bacterial cell`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Sulfamethoxazole blocks dihydropteroate synthase (upstream) and trimethoprim blocks dihydrofolate reductase (downstream). A sequential double blockade multiplies the reduction in THF flux and requires two independent resistance mutations to escape.`
          },
          {
            question: `Fluoroquinolones are bactericidal rather than merely halting replication because poisoned gyrase:`,
            options: [`Hydrolyzes ATP futilely until the cell's energy is depleted`, `Is trapped mid-cleavage, leaving double-strand DNA breaks`, `Overwinds DNA into positive supercoils that block only transcription`, `Releases endotoxin into the cytoplasm`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Quinolones stabilize the gyrase-DNA cleavage complex after the enzyme has cut both strands but before it reseals them. Colliding replication forks convert these frozen complexes into lethal chromosome fragmentation — the drug weaponizes the cell's own enzyme.`
          },
          {
            question: `Metronidazole kills anaerobes but spares aerobic bacteria and human cells because:`,
            options: [`Aerobic bacteria export it through multidrug efflux pumps`, `It inhibits a cell wall enzyme found only in anaerobes`, `Human mitochondria degrade the drug before it reaches DNA`, `Only anaerobes reduce it to its active DNA-damaging form`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Metronidazole is a prodrug whose activation demands electron donors at very negative redox potential, which only anaerobic metabolism supplies. Cells living on oxygen never generate the radical, so the pharmacology recapitulates the microbe's ecology.`
          },
          {
            question: `Rifampin monotherapy for tuberculosis fails within weeks. (The gene rpoB encodes rifampin's binding site on RNA polymerase.) The most likely reason is:`,
            options: [`The drug cannot cross the waxy mycolic acid wall`, `Rifampin is bacteriostatic against all mycobacteria`, `Pre-existing rpoB point mutants are rapidly selected`, `Rifampin induces its own hepatic degradation to zero levels`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Rifampin's binding pocket on RNA polymerase is destroyed by any of several single amino acid substitutions in rpoB. In a large bacterial population such mutants pre-exist; monotherapy selects them within weeks, which is why TB regimens always combine drugs with independent targets.`
          }
        ]
      }
    },
    {
      id: 'abx3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Sulfonamides.** As PABA analogs they block dihydropteroate synthase, an enzyme humans lack entirely.
- **TMP-SMX synergy.** Trimethoprim inhibits bacterial DHFR; with a sulfonamide it blocks two sequential steps.
- **DNA and RNA machines.** Fluoroquinolones trap gyrase mid-cut, leaving lethal breaks; rifampin blocks RNA-pol initiation.
- **Membrane drugs are toxic.** Polymyxins disrupt gram-negative membranes, but membrane chemistry is shared, so they are a last resort.

**Common traps**

- **Selectivity always by absence.** Trimethoprim relies on an affinity difference; of the folate pair, only sulfonamides hit an enzyme humans lack.
- **Rifampin alone.** Point mutants in its target pre-exist and are selected within weeks, so rifampin is always combined.
- **Metronidazole for aerobes.** It is a prodrug that only anaerobes reduce; aerobes and human cells never activate it.
- **Antifungals as safe as antibacterials.** Fungi are eukaryotes, so ergosterol vs cholesterol leaves a thin safety margin.

<!-- yield:low -->
**Low-yield extras**

- Rifampin binds the beta subunit (gene rpoB) and turns secretions orange; metronidazole is activated by ferredoxin/flavodoxin electron donors; daptomycin depolarizes gram-positive membranes and is inactivated by lung surfactant
<!-- /yield -->`
    }
  ]
};
