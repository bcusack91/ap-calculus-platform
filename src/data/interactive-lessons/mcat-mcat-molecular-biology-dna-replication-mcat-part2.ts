export const mcatDnaReplicationPart2Data = {
  topicSlug: 'mcat-molecular-biology-dna-replication-mcat',
  sections: [
    {
      id: 'dnar2-intro',
      type: 'text' as const,
      content: `# DNA Replication for the MCAT

**Part 2 of 4 — The Replication Fork: Enzymes & Choreography**

### Opening the Helix

- **Origin of replication**: replication starts at defined, AT-rich sequences (easier to melt — only 2 H-bonds per pair). Prokaryotes: ONE origin on a circular chromosome, two forks moving in opposite directions. Eukaryotes: THOUSANDS of origins per linear chromosome — the only way to copy a huge genome in one S phase.
- **Helicase** unwinds the duplex at the fork, hydrolyzing ATP to break hydrogen bonds (not covalent bonds).
- **Single-stranded binding proteins (SSBs)** coat the exposed strands so they neither re-anneal nor fold into hairpins.
- **Topoisomerase** works AHEAD of the fork: unwinding piles up positive supercoils downstream, and topoisomerases nick (type I) or double-cut (type II/gyrase) the backbone, relax the strain, and reseal. Fluoroquinolone antibiotics poison bacterial gyrase — replication forks stall on their own tension.

### Building the New Strands

Every DNA polymerase obeys two absolute rules:

1. **Synthesis is 5' to 3' only** — new nucleotides add to a free **3'-OH**. The energy comes from cleaving the incoming dNTP's own triphosphate (pyrophosphate release, then hydrolysis, pulls the reaction forward).
2. **No polymerase can start a chain** — each needs a **primer**. **Primase** (an RNA polymerase, which CAN start de novo) lays down short RNA primers.

Because strands are antiparallel and the fork opens in one direction:

| Strand | Template orientation | Behavior |
|--------|----------------------|----------|
| Leading | Read 3' to 5' toward the fork | Continuous synthesis, one primer |
| Lagging | Read 3' to 5' away from the fork | Discontinuous **Okazaki fragments**, one primer each |

- Lagging-strand cleanup: RNA primers are removed (in prokaryotes by **Pol I's 5' to 3' exonuclease**), the gaps are filled with DNA, and **DNA ligase** seals the final nick (forms the last phosphodiester bond).

<!-- yield:low -->
- **RNase H**, which degrades the RNA strand of RNA-DNA hybrids, also helps remove primers, especially in eukaryotes. Ligase is powered by ATP in eukaryotes and by NAD$^+$ in bacteria.
<!-- /yield -->

- **Sliding clamp** (beta clamp / PCNA) rings the DNA and holds the polymerase on — the source of processivity.
- Workhorses: prokaryotic **Pol III** (main synthesis), **Pol I** (primer removal + fill-in); eukaryotes split the same jobs among several specialized polymerases.

<!-- yield:low -->
- The eukaryotic polymerases: Pol alpha (with primase, starts chains), Pol delta and Pol epsilon (extend the lagging and leading strands respectively).
<!-- /yield -->

- The whole assembly — helicase, primase, polymerases, clamps — moves as one **replisome**; the lagging-strand template loops so both polymerases travel together.`
    },
    {
      id: 'dnar2-worked',
      type: 'text' as const,
      content: `### Worked Example — Diagnosing Mutant Forks

**Problem 1.** Temperature-sensitive E. coli strains are shifted to the restrictive temperature. In Strains 1 and 2, short fragments accumulate and are never joined; Strain 1's fragments each begin with RNA, Strain 2's are all DNA.

- **(a)** Which step has failed in Strain 1?
- **(b)** Which enzyme is defective in Strain 2?
- **(c)** What order of lagging-strand steps lets fragment composition tell the two apart?

**(a) Primer removal.** Strain 1's fragments still carry their **RNA primers**, so primer removal (Pol I's 5' to 3' exonuclease function) has failed, and ligase cannot seal a nick against RNA.

**(b) Ligase.** Strain 2's fragments are clean DNA, with primers removed and gaps filled. Only the final nick-sealing is missing: a **ligase** mutant.

**(c) Remove, fill, then ligate.** RNA-tipped fragments stall AT primer removal; all-DNA fragments stall at the last step, ligation. The general skill: match each phenotype to the FIRST step that fails.

**Problem 2.** Two more strains at the restrictive temperature: in Strain 3, replication halts almost immediately and no new strands of any kind appear; in Strain 4, synthesis runs briefly, then forks stall as supercoiling ahead of the fork soars.

- **(a)** Which enzyme is dead in Strain 3?
- **(b)** Why is a primase mutant a poorer fit for Strain 3?
- **(c)** Which enzyme has failed in Strain 4?
- **(d)** Which drug class produces Strain 4's phenotype?

**(a) Helicase.** No unwinding, no templates, no synthesis: **helicase** is dead, the enzyme every other fork enzyme waits on.

**(b) Primed strands would continue.** A primase mutant would stop new priming, but forks already under way would keep extending their already-primed leading strands.

**(c) Topoisomerase.** Torsional strain accumulating ahead of the fork means **topoisomerase (gyrase)** failure: helicase keeps injecting supercoils no one relaxes, and the fork grinds to a halt.

**(d) Fluoroquinolones.** Fluoroquinolones (e.g., ciprofloxacin) phenocopy this by trapping gyrase on DNA.`
    },
    {
      id: 'dnar2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fork Machinery** 🎯`,
      exercise: {
        questions: [
          {
            question: `DNA polymerases cannot initiate strand synthesis de novo because they strictly require:`,
            options: [`A free 3'-hydroxyl on a base-paired primer strand`, `A free 5'-phosphate at the end of the template strand`, `Fully double-stranded template DNA with no unwound regions`, `Simultaneous access to both the leading and lagging strands`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The polymerase mechanism is a single reaction repeated: the primer's 3'-OH attacks the alpha-phosphate of the incoming dNTP, releasing pyrophosphate. No 3'-OH, no chemistry — hence primase, an RNA polymerase that CAN start de novo, must lay an RNA primer first. This one mechanistic fact explains 5'-to-3'-only synthesis, the need for primers, Okazaki fragments, and (in Part 3) the telomere end-replication problem.`
          },
          {
            question: `On the lagging strand, the correct order of events converting Okazaki fragments into a continuous strand is:`,
            options: [`Ligation, then primer removal, then gap filling`, `Primer removal, then gap filling, then ligation`, `Gap filling, then ligation, then primer removal`, `Helicase removes primers, then ligase fills the gaps`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Each fragment starts with RNA; Pol I (5' to 3' exonuclease) chews out the primer while polymerase activity fills the gap with DNA, leaving a single nick — one missing phosphodiester bond — that ligase seals. Ligase joins existing ends only; it cannot add nucleotides, and helicase only separates strands. Sequencing errors here are the most commonly tested detail of the entire fork.`
          },
          {
            question: `A eukaryotic cell line has a defective PCNA sliding clamp that cannot encircle DNA. The most direct consequence for replication is:`,
            options: [`Primase can no longer synthesize RNA primers`, `Positive supercoils accumulate ahead of the fork`, `Polymerases dissociate after adding short stretches`, `Okazaki fragments are ligated before primer removal`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The clamp is a topological tether: by ringing the duplex it converts a polymerase that falls off after tens of nucleotides into one that synthesizes tens of thousands per binding event. Losing it does not change what the polymerase CAN do chemically — priming (primase), unwinding (helicase), and torsion (topoisomerase) are separate machines — it changes how long the polymerase stays on. Distinguish catalytic defects from processivity defects.`
          },
          {
            question: `Compared with the single origin of an E. coli chromosome, eukaryotic chromosomes use thousands of replication origins. The primary reason is that:`,
            options: [`Eukaryotic polymerases are much faster, so extra origins prevent collisions`, `Eukaryotic genomes are far larger and their forks move more slowly`, `Linear chromosomes cannot form replication bubbles`, `Eukaryotes lack helicase and must open DNA at many points passively`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `It is an arithmetic argument the MCAT expects you to run: a human chromosome is hundreds of megabases, eukaryotic forks move roughly 20-fold slower than bacterial ones, and one origin would take weeks. Thousands of origins firing in parallel, each making a bidirectional bubble that merges with its neighbors, compress the job into hours. Eukaryotic polymerases are slower, not faster (nucleosomes in the way), and linear DNA forms bubbles perfectly well.`
          },
          {
            question: `Ciprofloxacin, a fluoroquinolone, inhibits bacterial DNA gyrase. Replication in treated bacteria fails because:`,
            options: [`Primers can no longer be removed from Okazaki fragments`, `SSB proteins can no longer coat the single strands`, `The polymerase active site is directly blocked by the drug`, `Positive supercoils accumulate ahead of the fork`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Every ten base pairs unwound injects one turn of overwinding downstream; gyrase (a type II topoisomerase) normally cuts both strands, passes the duplex through, and reseals to relieve it. Poisoned gyrase leaves torsional stress that stalls helicase — and trapped gyrase-DNA cleavage complexes become double-strand breaks. The drug's selectivity for the bacterial enzyme over human topoisomerases is the selective-toxicity principle from antimicrobials.`
          }
        ]
      }
    },
    {
      id: 'dnar2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Fork crew.** Helicase unwinds, SSBs hold strands apart, topoisomerase (gyrase, the fluoroquinolone target) relaxes supercoils ahead.
- **Two polymerase rules.** Synthesis runs 5' to 3' only, from a free 3'-OH, and every chain needs an RNA primer from primase.
- **Leading vs lagging.** The leading strand grows continuously from one primer; the lagging strand is primed Okazaki fragments.
- **Origins and genome size.** Huge genomes and slow forks need thousands of eukaryotic origins; a bacterium uses one.

**Common traps**

- **Wrong maturation order.** Ligase acts last: remove the RNA primer, fill the gap with DNA, then seal the nick.
- **Clamp as catalyst.** The sliding clamp adds processivity by keeping polymerase on DNA; it does not change the chemistry.
- **Helicase cutting the backbone.** Helicase breaks hydrogen bonds between bases; topoisomerases are the enzymes that cut and reseal.
- **Pol III does it all.** Pol III synthesizes both strands; in bacteria Pol I removes primers and fills the gaps.

<!-- yield:low -->
- Low-yield extras: RNase H also strips RNA primers (especially in eukaryotes); bacterial ligase uses NAD+ rather than ATP; the eukaryotic polymerases are alpha-primase (starts chains), delta (lagging) and epsilon (leading)
<!-- /yield -->`
    }
  ]
};
