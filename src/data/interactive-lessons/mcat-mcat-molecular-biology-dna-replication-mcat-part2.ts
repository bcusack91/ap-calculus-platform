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

- Lagging-strand cleanup: RNA primers are removed (**RNase H / Pol I's 5' to 3' exonuclease** in prokaryotes), the gaps are filled with DNA, and **DNA ligase** seals the final nick (forms the last phosphodiester bond, using ATP or NAD$^+$).
- **Sliding clamp** (beta clamp / PCNA) rings the DNA and holds the polymerase on — the source of processivity.
- Workhorses: prokaryotic **Pol III** (main synthesis), **Pol I** (primer removal + fill-in); eukaryotic Pol alpha (with primase, starts chains), Pol delta and epsilon (extend lagging and leading strands respectively).
- The whole assembly — helicase, primase, polymerases, clamps — moves as one **replisome**; the lagging-strand template loops so both polymerases travel together.`
    },
    {
      id: 'dnar2-worked',
      type: 'text' as const,
      content: `### Worked Example — Diagnosing Mutant Forks

**Passage-style problem.** Four temperature-sensitive E. coli strains are shifted to the restrictive temperature; replication intermediates are analyzed on gels that separate short DNA fragments from long ones.

- **Strain 1**: replication halts almost immediately; no new strands of any kind appear.
- **Strain 2**: short fragments accumulate and are never joined into long strands; the fragments each begin with a stretch of RNA.
- **Strain 3**: short fragments accumulate and ARE all-DNA, but they are never joined.
- **Strain 4**: synthesis proceeds briefly, then forks stall; supercoiling ahead of the fork is dramatically elevated.

**Question 1 — Assign Strain 1.** No unwinding, no templates, no synthesis: **helicase** is dead. (A primase mutant would still make the leading strand's first stretch after initial priming; a total shutdown of both strands from the start points to the enzyme every other enzyme waits on.)

**Question 2 — Distinguish Strains 2 and 3.** Both look like "Okazaki fragments never mature," but the fragments' composition is the tell. Strain 2's fragments still carry their **RNA primers** — primer removal (Pol I's 5' to 3' exonuclease / RNase H function) has failed, and ligase cannot seal a nick against RNA. Strain 3's fragments are clean DNA with primers removed and gaps filled — only the final nick-sealing is missing: a **ligase** mutant. Order of operations is the discriminator: remove primer, fill gap, THEN ligate.

**Question 3 — Assign Strain 4 and name a drug with the same phenotype.** Torsional strain accumulating ahead of the fork means **topoisomerase (gyrase)** failure — helicase keeps injecting supercoils no one relaxes, and the fork grinds to a halt. Fluoroquinolones (e.g., ciprofloxacin) phenocopy this by trapping gyrase on DNA.

**The general skill**: match each phenotype to the FIRST step that fails, and use fragment composition (RNA-tipped vs all-DNA) to order the lagging-strand maturation steps.`
    },
    {
      id: 'dnar2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fork Machinery** 🎯`,
      exercise: {
        questions: [
          {
            question: `DNA polymerases cannot initiate strand synthesis de novo because they strictly require:`,
            options: [`A free 3'-hydroxyl group on an existing base-paired nucleotide to attack the incoming dNTP`, `A free 5'-phosphate on the template strand`, `Double-stranded DNA with no unwound regions`, `Simultaneous access to both the leading and lagging strands`],
            correctAnswer: 0,
            explanation: `The polymerase mechanism is a single reaction repeated: the primer's 3'-OH attacks the alpha-phosphate of the incoming dNTP, releasing pyrophosphate. No 3'-OH, no chemistry — hence primase, an RNA polymerase that CAN start de novo, must lay an RNA primer first. This one mechanistic fact explains 5'-to-3'-only synthesis, the need for primers, Okazaki fragments, and (in Part 3) the telomere end-replication problem.`
          },
          {
            question: `On the lagging strand, the correct order of events converting Okazaki fragments into a continuous strand is:`,
            options: [`Ligation, then primer removal, then gap filling`, `Primer removal by 5' to 3' exonuclease activity, gap filling by DNA polymerase, then ligase seals the nick`, `Gap filling, then ligation, then primer removal`, `Helicase removes the primers as it unwinds, then ligase fills the gaps with nucleotides`],
            correctAnswer: 1,
            explanation: `Each fragment starts with RNA; Pol I (5' to 3' exonuclease, or RNase H in eukaryotes) chews out the primer while polymerase activity fills the gap with DNA, leaving a single nick — one missing phosphodiester bond — that ligase seals. Ligase joins existing ends only; it cannot add nucleotides, and helicase only separates strands. Sequencing errors here are the most commonly tested detail of the entire fork.`
          },
          {
            question: `A eukaryotic cell line has a defective PCNA sliding clamp that cannot encircle DNA. The most direct consequence for replication is:`,
            options: [`RNA primers can no longer be synthesized`, `Supercoils accumulate ahead of the fork`, `Polymerases dissociate after adding only short stretches — processivity collapses and S phase slows drastically`, `Okazaki fragments are joined prematurely`],
            correctAnswer: 2,
            explanation: `The clamp is a topological tether: by ringing the duplex it converts a polymerase that falls off after tens of nucleotides into one that synthesizes tens of thousands per binding event. Losing it does not change what the polymerase CAN do chemically — priming (primase), unwinding (helicase), and torsion (topoisomerase) are separate machines — it changes how long the polymerase stays on. Distinguish catalytic defects from processivity defects.`
          },
          {
            question: `Compared with the single origin of an E. coli chromosome, eukaryotic chromosomes use thousands of replication origins. The primary reason is that:`,
            options: [`Eukaryotic polymerases are much faster, so extra origins prevent collisions`, `Eukaryotic genomes are far larger (and their forks slower), so replication could not finish in a single S phase from one origin`, `Linear chromosomes cannot form replication bubbles`, `Eukaryotes lack helicase and must open DNA at many points passively`],
            correctAnswer: 1,
            explanation: `It is an arithmetic argument the MCAT expects you to run: a human chromosome is hundreds of megabases, eukaryotic forks move roughly 50-fold slower than bacterial ones, and one origin would take weeks. Thousands of origins firing in parallel, each making a bidirectional bubble that merges with its neighbors, compress the job into hours. Eukaryotic polymerases are slower, not faster (nucleosomes in the way), and linear DNA forms bubbles perfectly well.`
          },
          {
            question: `Ciprofloxacin, a fluoroquinolone, inhibits bacterial DNA gyrase. Replication in treated bacteria fails because:`,
            options: [`Primers can no longer be removed from Okazaki fragments`, `SSB proteins can no longer coat single strands`, `The polymerase active site is directly blocked by the drug`, `Positive supercoils generated by unwinding accumulate ahead of the fork until further unwinding becomes impossible`],
            correctAnswer: 3,
            explanation: `Every ten base pairs unwound injects one turn of overwinding downstream; gyrase (a type II topoisomerase) normally cuts both strands, passes the duplex through, and reseals to relieve it. Poisoned gyrase leaves torsional stress that stalls helicase — and trapped gyrase-DNA cleavage complexes become double-strand breaks. The drug's selectivity for the bacterial enzyme over human topoisomerases is the selective-toxicity principle from antimicrobials.`
          }
        ]
      }
    },
    {
      id: 'dnar2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Fork crew: helicase unwinds (ATP, breaks H-bonds), SSBs keep strands apart, topoisomerase/gyrase relaxes supercoils AHEAD of the fork (fluoroquinolone target)
- Two iron laws of polymerases: synthesis 5' to 3' only (3'-OH attacks incoming dNTP; pyrophosphate release drives it) and no de novo starts — primase makes RNA primers
- Leading strand: continuous, one primer; lagging strand: Okazaki fragments, primer each; maturation order = remove primer, fill with DNA, ligase seals the last nick
- Sliding clamp (beta/PCNA) = processivity, not catalysis; the replisome loops the lagging template so both polymerases move together
- Division of labor: Pol III synthesizes, Pol I removes primers and fills (prokaryotes); Pol alpha-primase starts, delta/epsilon extend (eukaryotes)
- One bacterial origin vs thousands of eukaryotic origins is a genome-size and fork-speed argument — be ready to do the arithmetic
- Mutant-phenotype logic: total shutdown = helicase; RNA-tipped fragments = primer removal; all-DNA unjoined fragments = ligase; runaway supercoiling = topoisomerase`
    }
  ]
};
