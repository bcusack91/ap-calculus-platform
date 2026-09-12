export const mcatBacteriaPart4Data = {
  topicSlug: 'mcat-microbiology-bacteria-mcat',
  sections: [
    {
      id: 'bac4-intro',
      type: 'text' as const,
      content: `# Bacteria

**Part 4 of 4 — Pathogenesis, Toxins & MCAT Integration**

### From Colonization to Disease

Infection proceeds through recognizable stages, each with a molecular tool: **adhesion** (pili, adhesins binding host receptors) → **colonization/invasion** (invasins, degradative enzymes like hyaluronidase and collagenase) → **immune evasion** (capsule, IgA proteases, antigenic variation, intracellular hiding) → **damage** (toxins, or the host's own inflammation). Not all colonists cause disease: **normal flora** occupy niches, compete for nutrients, and even prime immunity — broad-spectrum antibiotics that clear them open the door to opportunists (C. difficile colitis, Candida overgrowth).

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
      id: 'bac4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Pathogenesis & Toxins** 🎯`,
      exercise: {
        questions: [
          {
            question: `A vaccine is made by formalin-inactivating a purified bacterial product, and it elicits protective antibodies. The product must be:`,
            options: [`Lipopolysaccharide from the outer membrane`, `Peptidoglycan fragments`, `A protein exotoxin (the vaccine is a toxoid)`, `Capsular lipid`],
            correctAnswer: 2,
            explanation: `Toxoids are denatured protein exotoxins: antigenic enough to raise neutralizing antitoxin, but catalytically dead (tetanus and diphtheria vaccines). LPS is poorly antigenic, structurally required, and cannot be 'inactivated' into a useful protein-like immunogen.`
          },
          {
            question: `Cholera toxin causes profuse watery diarrhea WITHOUT destroying intestinal cells. Its A subunit acts by:`,
            options: [`ADP-ribosylating a stimulatory G protein, locking adenylyl cyclase on and raising cAMP`, `Cleaving SNARE proteins in enterocytes`, `Forming pores in the apical membrane`, `Inactivating elongation factor EF-2`],
            correctAnswer: 0,
            explanation: `Cholera toxin's ADP-ribosylation freezes G-alpha-s in its GTP-bound (active) state; runaway cAMP drives CFTR-mediated chloride secretion, and water follows osmotically. The epithelium stays intact — pure signaling hijack. EF-2 ADP-ribosylation is DIPHTHERIA toxin's move.`
          },
          {
            question: `Botulinum and tetanus toxins both cleave SNARE proteins, yet botulism causes flaccid paralysis while tetanus causes spastic paralysis. The difference arises because the toxins:`,
            options: [`Use entirely different catalytic mechanisms`, `Act on different neurons — botulinum at the neuromuscular junction (blocking ACh release), tetanus in inhibitory interneurons (blocking glycine/GABA release)`, `Differ in heat stability`, `Are endotoxin vs exotoxin respectively`],
            correctAnswer: 1,
            explanation: `Same enzymatic step — SNARE cleavage stops vesicle fusion — but location decides the sign: silencing motor-neuron ACh output relaxes muscle (flaccid); silencing inhibitory interneurons disinhibits motor neurons (spastic). A beautiful example of context determining phenotype.`
          },
          {
            question: `A patient on broad-spectrum antibiotics for pneumonia develops severe colitis caused by toxin-producing C. difficile. The predisposing event was:`,
            options: [`Direct stimulation of C. difficile growth by the antibiotic`, `Transfer of toxin genes from the pneumonia pathogen`, `Antibiotic-induced mutation of gut commensals into pathogens`, `Elimination of competing normal gut flora, vacating a niche the resistant spore-former then colonized`],
            correctAnswer: 3,
            explanation: `Normal flora suppress C. difficile by competition for nutrients and niches. Broad-spectrum therapy clears the competitors; ingested or resident C. difficile spores (intrinsically resistant to many drugs) germinate and expand. Antibiotics select and vacate — they neither feed, mutate, nor transfer.`
          },
          {
            question: `Toxic shock syndrome toxin activates about 20 percent of the body's T cells regardless of their antigen specificity. It accomplishes this by:`,
            options: [`Being processed and presented on MHC I in every cell`, `Directly binding the CD8 coreceptor`, `Crosslinking MHC II on antigen-presenting cells to T-cell receptors OUTSIDE the normal peptide-binding groove`, `Mimicking interleukin-2 at its receptor`],
            correctAnswer: 2,
            explanation: `Superantigens clamp MHC II to the TCR's variable beta region externally, bypassing peptide specificity entirely — so entire TCR V-beta families fire at once. Normal antigens activate roughly 1 in 10,000 T cells; superantigens activate 1 in 5, releasing a systemic cytokine storm.`
          }
        ]
      }
    },
    {
      id: 'bac4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Infection stages: adhere (pili) → invade (enzymes) → evade (capsule, IgA protease, hiding) → damage (toxins or inflammation)
- Exotoxin = secreted protein, both Gram types, heat-labile, hyperpotent, toxoid-vaccinable, often plasmid/phage-encoded
- Endotoxin = lipid A of LPS, gram-negative only, released on lysis, heat-stable, septic shock
- A-B architecture: B binds, A acts — ADP-ribosylation (diphtheria: EF-2; cholera: G$_s$ → cAMP), SNARE proteases (tetanus spastic vs botulinum flaccid)
- Superantigens crosslink MHC II-TCR nonspecifically → cytokine storm
- Normal flora are a defense; clearing them invites C. difficile — antibiotics vacate niches, they do not create pathogens`
    },
    {
      id: 'bac4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Pathogenesis Integration

<details>
<summary><b>Example 1: Why antibiotics can transiently WORSEN gram-negative sepsis</b></summary>

**Question:** A patient with gram-negative bacteremia deteriorates in the hours after the first bactericidal antibiotic dose. Propose the mechanism.

**Solution:**
1. Endotoxin is a structural membrane component, released chiefly when cells LYSE.
2. A cidal drug lysing a large bacterial load dumps a bolus of LPS at once; lipid A activates TLR4 on macrophages → TNF/IL-1 surge → vasodilation and capillary leak.
3. The bacteria are dying, but the inflammatory cargo peaks — killing the organism and neutralizing its products are separate problems.

**MCAT Strategy:** Endotoxin release scales with lysis, not with bacterial viability; expect questions pairing antibiotic mechanism (lysis vs static) with endotoxin kinetics.
</details>

<details>
<summary><b>Example 2: Dissect an A-B toxin experimentally</b></summary>

**Question:** Purified subunit A of a toxin, added to intact cells, does nothing; microinjected into the cytoplasm, it halts protein synthesis. Purified subunit B binds cells but is harmless. Antibodies against which subunit best protect intact animals, and why?

**Solution:**
1. A is the catalytic warhead (here, EF-2 ADP-ribosylation, diphtheria-style) but cannot ENTER without help; B is the delivery system.
2. Anti-B antibodies block receptor binding — the toxin never gets in; this is usually the most protective neutralization target on the intact toxin.
3. The microinjection bypass proves the barrier is entry, not catalysis — the classic logic for all A-B toxins.

**MCAT Strategy:** For A-B toxins: activity requires BOTH binding and catalysis; each subunit alone is a null, and neutralizing antibodies work at the binding step.
</details>

<details>
<summary><b>Example 3: Full-stack vignette — connect all four parts</b></summary>

**Question:** An encapsulated, lactose-fermenting gram-negative rod causes a UTI. It carries a conjugative R plasmid with a beta-lactamase gene, and biofilm forms on the patient's catheter. Name the concept from each lesson part that predicts a treatment obstacle.

**Solution:**
1. Part 1 (structure): gram-negative outer membrane restricts drug entry; capsule fights phagocytosis; LPS threatens sepsis on lysis.
2. Part 2 (growth): biofilm cells sit near stationary phase — beta-lactams, which need growth, underperform; the catheter likely must come out.
3. Part 3 (genetics): the R plasmid can conjugate resistance to neighboring flora — isolation and drug choice matter beyond this one strain.
4. Part 4 (pathogenesis): beta-lactamase = 'destroy the drug'; pair the beta-lactam with an inhibitor (clavulanate) or switch class.

**MCAT Strategy:** This layering — envelope, growth phase, gene mobility, virulence factor — is exactly how the MCAT builds multi-paragraph microbiology passages. Practice naming which layer each experimental detail addresses.
</details>`
    }
  ]
};
