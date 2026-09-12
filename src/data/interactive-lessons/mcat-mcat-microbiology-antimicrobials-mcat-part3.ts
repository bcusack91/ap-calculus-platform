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
- **Rifampin** binds the beta subunit of **bacterial RNA polymerase**, blocking initiation of transcription. Resistance arises fast from single point mutations in rpoB — hence rifampin is used in COMBINATION (classically for tuberculosis). Trivia with a mechanism: it turns secretions orange.
- **Metronidazole** is a **prodrug**: only under the strongly reducing conditions inside anaerobes (ferredoxin-based metabolism) is its nitro group reduced to a radical that shreds DNA. Aerobes cannot activate it — selectivity via activation chemistry.

### Membrane Agents (Blunt Instruments)

**Polymyxins** are cationic detergent-like peptides that bind gram-negative **LPS** and disrupt both membranes. Because all cell membranes are chemically similar, selectivity is poor — nephrotoxicity limits them to last-resort gram-negative infections. **Daptomycin** inserts into gram-positive membranes, collapsing the membrane potential (it is inactivated by pulmonary surfactant, so never used for pneumonia).

### Beyond Bacteria: the Same Logic

Antifungals show the identical design principle with a different handle: fungal membranes use **ergosterol** where ours use cholesterol. Azoles block ergosterol synthesis; amphotericin B binds ergosterol and punches pores. Narrow chemical differences → usable selectivity, but much less margin than antibacterials (fungi are eukaryotes) — which is why antifungals are systematically more toxic.`
    },
    {
      id: 'abx3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Folate, Nucleic Acid & Membrane Drugs** 🎯`,
      exercise: {
        questions: [
          {
            question: `Sulfonamides do not affect human cells because humans:`,
            options: [`Express a sulfonamide-degrading esterase`, `Convert sulfonamides to inactive metabolites in the liver`, `Lack the folate-synthesis pathway entirely and obtain folate from the diet`, `Have a mutated dihydropteroate synthase with low drug affinity`],
            correctAnswer: 2,
            explanation: `Sulfonamides mimic PABA and jam dihydropteroate synthase, an enzyme humans do not possess at all — we import dietary folate with transporters. Selectivity by target ABSENCE is the cleanest kind (compare trimethoprim, which relies on an affinity difference).`
          },
          {
            question: `Trimethoprim-sulfamethoxazole is synergistic primarily because the two drugs:`,
            options: [`Inhibit two sequential enzymes in the same THF-synthesis pathway`, `Bind the same enzyme at two allosteric sites`, `Have identical spectra but different half-lives`, `Prevent each other's efflux from the bacterial cell`],
            correctAnswer: 0,
            explanation: `Sulfamethoxazole blocks dihydropteroate synthase (upstream) and trimethoprim blocks dihydrofolate reductase (downstream). A sequential double blockade multiplies the reduction in THF flux and requires two independent resistance mutations to escape.`
          },
          {
            question: `Fluoroquinolones are bactericidal rather than merely halting replication because poisoned gyrase:`,
            options: [`Depletes the cell's ATP supply`, `Is trapped mid-catalysis, converting the enzyme into a generator of double-strand DNA breaks`, `Overwinds DNA into positive supercoils that block only transcription`, `Releases endotoxin into the cytoplasm`],
            correctAnswer: 1,
            explanation: `Quinolones stabilize the gyrase-DNA cleavage complex after the enzyme has cut both strands but before it reseals them. Colliding replication forks convert these frozen complexes into lethal chromosome fragmentation — the drug weaponizes the cell's own enzyme.`
          },
          {
            question: `Metronidazole kills anaerobes but spares aerobic bacteria and human cells because:`,
            options: [`Aerobes pump it out through porins`, `It requires light activation found only in abscesses`, `Human mitochondria destroy the drug`, `Only the low-redox, ferredoxin-rich interior of anaerobes reduces its nitro group to the active DNA-damaging radical`],
            correctAnswer: 3,
            explanation: `Metronidazole is a prodrug whose activation demands electron donors at very negative redox potential (ferredoxin/flavodoxin systems of anaerobic metabolism). Cells living on oxygen never generate the radical, so the pharmacology recapitulates the microbe's ecology.`
          },
          {
            question: `Rifampin monotherapy for tuberculosis fails within weeks. The most likely reason is:`,
            options: [`The drug cannot enter mycobacteria`, `Rifampin is bacteriostatic against all mycobacteria`, `Single point mutations in the RNA polymerase beta subunit (rpoB) arise and are rapidly selected`, `Rifampin induces its own hepatic degradation to zero levels`],
            correctAnswer: 2,
            explanation: `Rifampin's binding pocket on RNA polymerase is destroyed by any of several single amino acid substitutions in rpoB. In a large bacterial population such mutants pre-exist; monotherapy selects them within weeks, which is why TB regimens always combine drugs with independent targets.`
          }
        ]
      }
    },
    {
      id: 'abx3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Folate: sulfonamides = PABA mimics (enzyme humans lack); trimethoprim = bacterial DHFR (affinity difference); TMP-SMX = sequential synergy
- Fluoroquinolones trap gyrase/topo IV mid-cleavage → double-strand breaks → cidal
- Rifampin blocks bacterial RNA-pol initiation; one rpoB point mutation = resistance → always combination therapy
- Metronidazole = prodrug activated only by anaerobic (ferredoxin) reduction
- Polymyxins/daptomycin attack membranes — effective but toxic (membranes are universal chemistry)
- Antifungal parallel: ergosterol vs cholesterol = the fungal selectivity handle, with a thinner safety margin`
    },
    {
      id: 'abx3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Pathway Pharmacology

<details>
<summary><b>Example 1: Rescue experiments identify the blocked step</b></summary>

**Question:** Bacterial growth inhibited by drug Z is fully rescued by adding thymidine plus purines to the medium, but not by adding PABA. Which pathway does Z block, and where relative to PABA?

**Solution:**
1. Thymidine + purines are the END PRODUCTS whose synthesis requires THF; supplying them bypasses any folate-pathway block. Z is a folate antagonist.
2. Excess PABA would outcompete a sulfonamide (a competitive PABA analog). No rescue by PABA means the block is DOWNSTREAM of the PABA-using step — consistent with a DHFR inhibitor like trimethoprim.
3. Conclusion: Z inhibits dihydrofolate reductase.

**MCAT Strategy:** Metabolite-rescue logic: whatever restores growth lies downstream of the block; whatever fails to rescue is upstream or irrelevant.
</details>

<details>
<summary><b>Example 2: Predict cross-resistance patterns</b></summary>

**Question:** A gram-negative isolate loses a major porin protein. Predict its susceptibility changes to (a) a small hydrophilic beta-lactam, (b) polymyxin, (c) trimethoprim.

**Solution:**
1. (a) Beta-lactams reach the periplasm through porins; porin loss reduces entry → resistance rises.
2. (b) Polymyxin attacks LPS on the outer surface directly — no porin needed → unaffected.
3. (c) Trimethoprim is small and lipophilic enough that porin loss has modest effect, though reduced uptake can contribute low-level resistance.
4. Porin mutations are a general PERMEABILITY mechanism — they shift many drugs a little rather than one drug a lot.

**MCAT Strategy:** For each drug, ask what path it takes to its target; resistance follows the path, not the target, in permeability mutants.
</details>

<details>
<summary><b>Example 3: Why amphotericin B is more toxic than penicillin</b></summary>

**Question:** Both amphotericin B (antifungal) and penicillin exploit selective toxicity. Explain the large difference in host toxicity from first principles.

**Solution:**
1. Penicillin's target (peptidoglycan transpeptidase) has NO human counterpart — selectivity is absolute in principle.
2. Amphotericin binds ergosterol, but cholesterol is chemically similar; partial binding to cholesterol-containing human membranes (notably renal cells) causes pores and nephrotoxicity.
3. Rule: toxicity scales inversely with the chemical distance between microbial and host targets. Bacteria (prokaryotes) offer big distances; fungi (fellow eukaryotes) offer small ones.

**MCAT Strategy:** When ranking drug safety, compare target divergence: absent target > different enzyme family > similar molecule.
</details>`
    }
  ]
};
