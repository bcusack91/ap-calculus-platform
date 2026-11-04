export const mcatBacteriaPart4Data = {
  topicSlug: 'mcat-microbiology-bacteria-mcat',
  sections: [
    {
      id: 'bac4-intro',
      type: 'text' as const,
      content: `# Bacteria

**Part 4 of 4 — Pathogenesis, Toxins & MCAT Integration**

### From Colonization to Disease

Infection proceeds through recognizable stages, each with a molecular tool: **adhesion** (pili, adhesins binding host receptors) → **colonization/invasion** (invasins, degradative enzymes that break down host tissue) → **immune evasion** (capsule, IgA proteases, antigenic variation, intracellular hiding) → **damage** (toxins, or the host's own inflammation). Not all colonists cause disease: **normal flora** occupy niches, compete for nutrients, and even prime immunity — broad-spectrum antibiotics that clear them open the door to opportunists (C. difficile colitis, Candida overgrowth).

<!-- yield:low -->
Named spreading enzymes: hyaluronidase and collagenase digest connective-tissue matrix.
<!-- /yield -->

### Exotoxin vs Endotoxin — the Highest-Yield Table in Microbiology

| Property | Exotoxin | Endotoxin |
|----------|----------|-----------|
| Chemistry | Secreted **protein** | **LPS (lipid A)** — structural outer-membrane component |
| Source | Gram-positive AND gram-negative | Gram-negative only |
| Released | Actively secreted by living cells | Mainly on cell LYSIS (including antibiotic-induced) |
| Potency | Extreme (nanogram lethal doses possible) | Weaker, but massive release → septic shock |
| Heat | Usually labile | Stable (boiling does not destroy it) |
| Immunology | Highly antigenic; **toxoid vaccines** (formalin-inactivated toxin: tetanus, diphtheria) | Poorly antigenic; no toxoid possible |
| Genes | Often on plasmids or prophages | Chromosomal (LPS synthesis) |

### The A-B Toxin Architecture

Many exotoxins are two-part machines: the **B (binding) subunit** docks onto a specific host receptor and delivers the **A (active) subunit**, an intracellular enzyme. Classic catalytic strategies:

- **ADP-ribosylation:** diphtheria toxin ADP-ribosylates elongation factor EF-2, halting host translation; cholera toxin ADP-ribosylates a G$_s$ protein, locking adenylyl cyclase ON → cAMP floods the enterocyte → massive Cl$^-$/water secretion (watery diarrhea with an intact epithelium).
- **Protease:** tetanus and botulinum toxins cleave SNARE proteins. Tetanus acts on INHIBITORY interneurons → spastic paralysis; botulinum blocks acetylcholine release at the neuromuscular junction → flaccid paralysis. Opposite phenotypes, same molecular step (blocked vesicle fusion) in different neurons.
- **Superantigens** (toxic shock syndrome toxin): crosslink MHC II to T-cell receptors NONSPECIFICALLY, activating up to 20 percent of all T cells at once — a cytokine storm without any antigen specificity.

### Integration: Reading a Pathogenesis Passage

Ask in order: (1) Which stage of infection is the experiment probing — adhesion, evasion, or damage? (2) Is the damage molecule a secreted protein (mutable, vaccinable, neutralizable by antitoxin) or structural LPS? (3) Where does the gene live — chromosome, plasmid, or prophage — and what does that predict about spread (Part 3) and about antibiotic strategy (the Antimicrobials lesson)? Bacterial vignettes are integration tests: structure (Part 1) sets drug access, growth phase (Part 2) sets drug timing, genetics (Part 3) sets resistance spread, and virulence factors (this part) set the clinical picture.`
    },
    {
      id: 'bac4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Pathogenesis Integration

**Problem 1.** A patient with gram-negative bacteremia deteriorates in the hours after the first dose of a bactericidal antibiotic.

- **(a)** When do gram-negative cells release endotoxin?
- **(b)** What does a large, rapid kill do to the host?
- **(c)** Why can the patient worsen while the bacteria are dying?

**(a) Release on lysis.** Endotoxin (LPS) is a structural membrane component, released chiefly when cells LYSE.

**(b) An LPS bolus.** A cidal drug lysing a large bacterial load dumps a bolus of LPS at once; lipid A activates TLR4 on macrophages → TNF/IL-1 surge → vasodilation and capillary leak.

**(c) Two separate problems.** The bacteria are dying, but the inflammatory cargo peaks: killing the organism and neutralizing its products are separate problems. A bacteriostatic drug would not dump this bolus; the risk tracks how fast the drug lyses cells.

**Problem 2.** Purified subunit A of a toxin does nothing to intact cells but halts protein synthesis when microinjected into the cytoplasm. Purified subunit B binds cells but is harmless.

- **(a)** What job does each subunit do?
- **(b)** What does the microinjection result prove?
- **(c)** Antibodies against which subunit best protect intact animals?

**(a) Warhead and delivery.** A is the catalytic warhead (here, EF-2 ADP-ribosylation, diphtheria-style) but cannot ENTER without help; B is the delivery system.

**(b) Entry is the barrier.** Bypassing the membrane restores A's activity, so the barrier is entry, not catalysis — the classic logic for all A-B toxins.

**(c) Anti-B.** Anti-B antibodies block receptor binding, so the toxin never gets in; this is usually the most protective neutralization target on the intact toxin. Activity needs BOTH binding and catalysis; each subunit alone is a null.

**Problem 3.** An encapsulated, lactose-fermenting gram-negative rod causes a UTI. It carries a conjugative R plasmid with a beta-lactamase gene, and a biofilm forms on the patient's catheter.

- **(a)** What obstacles does its envelope (Part 1) predict?
- **(b)** What does the biofilm's growth state (Part 2) predict?
- **(c)** What does the R plasmid (Part 3) predict?
- **(d)** How do you get around the beta-lactamase?

**(a) Structure.** The gram-negative outer membrane restricts drug entry; the capsule fights phagocytosis; LPS threatens sepsis on lysis.

**(b) Growth.** Biofilm cells sit near stationary phase, so beta-lactams, which need growth, underperform; the catheter likely must come out.

**(c) Genetics.** The R plasmid can conjugate resistance to neighboring flora, so isolation and drug choice matter beyond this one strain.

**(d) Resistance enzyme.** Beta-lactamase = "destroy the drug": pair the beta-lactam with an inhibitor (clavulanate) or switch class. This layering — envelope, growth phase, gene mobility, resistance and virulence factors — is how the MCAT builds microbiology passages.`
    },
    {
      id: 'bac4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Pathogenesis & Toxins** 🎯`,
      exercise: {
        questions: [
          {
            question: `A vaccine is made by formalin-inactivating a purified bacterial product, and it elicits protective antibodies. The product must be:`,
            options: [`Lipopolysaccharide from the outer membrane`, `Peptidoglycan wall fragments`, `A secreted protein exotoxin`, `A capsular lipid anchor`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Toxoids are denatured protein exotoxins: antigenic enough to raise neutralizing antitoxin, but catalytically dead (tetanus and diphtheria vaccines). LPS is poorly antigenic, structurally required, and cannot be 'inactivated' into a useful protein-like immunogen.`
          },
          {
            question: `Cholera toxin causes profuse watery diarrhea WITHOUT destroying intestinal cells. Its A subunit acts by:`,
            options: [`ADP-ribosylating a stimulatory G protein`, `Cleaving SNARE proteins in enterocytes`, `Forming pores in the apical membrane`, `ADP-ribosylating elongation factor EF-2`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Cholera toxin's ADP-ribosylation freezes G-alpha-s in its GTP-bound (active) state; runaway cAMP drives CFTR-mediated chloride secretion, and water follows osmotically. The epithelium stays intact — pure signaling hijack. EF-2 ADP-ribosylation is DIPHTHERIA toxin's move.`
          },
          {
            question: `Botulinum and tetanus toxins both cleave SNARE proteins, yet botulism causes flaccid paralysis while tetanus causes spastic paralysis. The difference arises because the toxins:`,
            options: [`Use entirely different catalytic mechanisms`, `Act on different types of neurons`, `Differ in heat stability, not in target site`, `Are endotoxin vs exotoxin respectively`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Same enzymatic step — SNARE cleavage stops vesicle fusion — but location decides the sign: silencing motor-neuron ACh output relaxes muscle (flaccid); silencing inhibitory interneurons disinhibits motor neurons (spastic). A beautiful example of context determining phenotype.`
          },
          {
            question: `A patient on broad-spectrum antibiotics for pneumonia develops severe colitis caused by toxin-producing C. difficile. The predisposing event was:`,
            options: [`Direct stimulation of C. difficile growth by the antibiotic`, `Transfer of toxin genes from the pneumonia pathogen`, `Antibiotic-induced mutation of gut commensals into pathogens`, `Elimination of competing normal gut flora`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Normal flora suppress C. difficile by competition for nutrients and niches. Broad-spectrum therapy clears the competitors; ingested or resident C. difficile spores (intrinsically resistant to many drugs) germinate and expand. Antibiotics select and vacate — they neither feed, mutate, nor transfer.`
          },
          {
            question: `Toxic shock syndrome toxin activates about 20 percent of the body's T cells regardless of their antigen specificity. It accomplishes this by:`,
            options: [`Being processed and presented on MHC I in every cell`, `Directly binding the CD8 coreceptor on T cells`, `Crosslinking MHC II to T-cell receptors outside the groove`, `Mimicking interleukin-2 at its receptor`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Superantigens clamp MHC II to the TCR's variable beta region externally, bypassing peptide specificity entirely — so entire TCR V-beta families fire at once. Normal antigens activate roughly 1 in 10,000 T cells; superantigens activate 1 in 5, releasing a systemic cytokine storm.`
          }
        ]
      }
    },    {
      id: 'bac4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Infection stages.** Adhere (pili), invade (enzymes), evade (capsule, IgA protease, hiding), then damage by toxins or inflammation.
- **Exotoxins.** Secreted proteins, both Gram types: potent, toxoid-vaccinable, usually heat-labile (S. aureus enterotoxin is heat-stable).
- **Endotoxin.** Lipid A of gram-negative LPS: released on lysis, heat-stable, poorly antigenic, the main trigger of gram-negative septic shock.
- **A-B toxins.** B binds, A acts: diphtheria ADP-ribosylates EF-2; cholera ADP-ribosylates G$_s$ (cAMP up); tetanus/botulinum cut SNAREs.

**Common traps**

- **Tetanus vs botulinum.** Same mechanism, opposite paralysis: the difference is which neuron is silenced (inhibitory interneuron vs motor neuron).
- **Endotoxin toxoids.** LPS is poorly antigenic, so no toxoid exists; toxoid vaccines (tetanus, diphtheria) are inactivated exotoxins.
- **Superantigens as antigens.** They are not processed or loaded into the MHC groove; they clamp MHC II to TCR V-beta from outside.
- **Antibiotics creating C. difficile.** Antibiotics clear competing normal flora and vacate niches; they do not turn commensals into pathogens.

<!-- yield:low -->
**Low-yield extras**

- Hyaluronidase and collagenase are the named tissue-spreading enzymes
<!-- /yield -->`
    }
  ]
};
