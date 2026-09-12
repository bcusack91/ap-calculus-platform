export const mcatNatSelPart3Data = {
  topicSlug: 'mcat-genetics-evolution-natural-selection-mcat',
  sections: [
    {
      id: 'ns3-intro',
      type: 'text' as const,
      content: `# Natural Selection — Deep Dive

**Part 3 of 4 — Speciation, Reproductive Isolation & Phylogeny**

### What Is a Species?

The **biological species concept**: a species is a group of populations whose members can interbreed and produce viable, FERTILE offspring, and which is reproductively isolated from other such groups. Its limits are themselves testable material: it cannot classify **asexual** organisms (bacteria), **fossils** (no mating test possible), and it strains where distinct species occasionally **hybridize** (many plants, some birds and canids).

### Reproductive Isolating Barriers

**Prezygotic barriers** prevent mating or fertilization — no zygote ever forms:

| Barrier | Mechanism | Example |
|---------|-----------|---------|
| Habitat | Populations occupy different habitats and rarely meet | Garter snakes in water vs. on land |
| Temporal | Breeding at different times | Field crickets maturing in spring vs. fall |
| Behavioral | Courtship signals not recognized | Firefly flash patterns; bird songs |
| Mechanical | Reproductive structures incompatible | Snail shells spiraling in opposite directions |
| Gametic | Sperm cannot fertilize the egg | Sea urchin egg-recognition proteins |

**Postzygotic barriers** act after fertilization:

- **Hybrid inviability** — hybrid zygotes fail to develop or die young
- **Hybrid sterility** — hybrids live but cannot reproduce: the **mule** (horse × donkey) is robust but sterile, partly because mismatched chromosome sets (63 total) cannot pair properly in meiosis
- **Hybrid breakdown** — first-generation hybrids are fertile, but their offspring are feeble or sterile

Prezygotic barriers are "cheaper": no gametes are wasted on doomed offspring, so selection can strengthen them where hybrids fare poorly (reinforcement).

### Geography of Speciation

**Allopatric speciation**: a physical barrier (river, mountain uplift, habitat fragmentation) splits a population; drift and divergent selection accumulate differences until interbreeding fails even on recontact. The most common and best-documented route.

**Sympatric speciation**: divergence WITHOUT geographic separation. Two credible mechanisms:

- **Polyploidy** — especially in plants: a chromosome-doubling error creates individuals (e.g., tetraploids) instantly isolated from diploid parents, because triploid offspring are sterile. Speciation in one generation.
- **Disruptive selection + assortative mating** — ecological niches favor opposite extremes and like mates with like (Part 2's seedcracker logic; cichlid fish and apple maggot flies are the usual cases).

**Adaptive radiation**: one lineage rapidly diversifies into many niche-specialized species — Darwin's finches, Hawaiian honeycreepers, and silverswords — typically after colonizing an island system or after competitors vanish.

### Reading Evolutionary Trees

- **Divergent evolution** produces **homologous** structures: same ancestral origin, possibly different functions (human arm, whale flipper, bat wing — one forelimb skeleton).
- **Convergent evolution** produces **analogous** structures: similar function, independent origins (bird vs. insect wings; shark vs. dolphin body form). Similarity from convergence (or reversal) is **homoplasy** — it misleads tree-building if mistaken for homology.
- A **cladogram**'s nodes are common ancestors; a **monophyletic group (clade)** is an ancestor plus ALL of its descendants; **sister taxa** share an immediate common ancestor.
- **Branch order, not left-right position or "ladder height," carries the information.** No living taxon is "more evolved" than another — all tips have had equal time since the root.

### Tempo

**Gradualism**: change accumulates steadily. **Punctuated equilibrium** (Eldredge & Gould): fossil species show long stasis interrupted by geologically rapid change, often associated with speciation events. "Rapid" here means thousands of generations — still ordinary population genetics, compressed relative to stasis, not a different mechanism.`
    },
    {
      id: 'ns3-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Cladogram Without Getting Fooled

**Passage-style problem.** A cladogram of four taxa has this branching structure: the deepest node splits taxon D from the rest; the next node splits taxon C from the pair (A, B); the shallowest node splits A from B. Character data: all four taxa share trait 1; C, A, and B share trait 2; A and B alone share trait 3; B alone shows trait 4.

**Question 1 — Which taxa are sister taxa?** A and B: they share an immediate common ancestor (the shallowest node) that neither shares with C or D. C is the sister taxon of the CLADE (A + B), not of A alone.

**Question 2 — Is the group (C, A, B) monophyletic? Is (D, C)?** (C, A, B) is monophyletic — it contains their common ancestor at the second node and all of that ancestor's descendants. (D, C) is NOT: the most recent common ancestor of D and C is the root, and a group containing the root's descendants must include A and B too. Leaving descendants out makes a group paraphyletic or polyphyletic, not a clade.

**Question 3 — Where did trait 3 arise?** On the branch leading to the (A, B) ancestor — after the split from C, before A and B diverged. Trait 4 arose on B's own terminal branch.

**Question 4 — A student concludes that "B is the most evolved taxon because it has the most derived traits and sits at the end of the tree."** Both reasons fail. Every tip has experienced the same amount of time since the root, and each lineage has been evolving throughout — D's terminal branch is the LONGEST-running independent lineage, yet that does not make D "more evolved" either. Trait counts reflect which characters were chosen for the table, and left-right order on a cladogram is typographically arbitrary: rotating any node (drawing B before A) depicts the identical evolutionary history.

**Question 5 — Suppose trait 2 were later found in taxon D but analysis shows it arose independently there.** Then trait 2 in D is homoplasy (convergence): similarity NOT inherited from a common ancestor. Counting it as homology would wrongly pull D inside the (C, A, B) clade.`
    },
    {
      id: 'ns3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Speciation & Phylogeny** 🎯`,
      exercise: {
        questions: [
          {
            question: `A horse and a donkey can mate and produce a mule, which is healthy and long-lived but cannot produce offspring of its own. The barrier isolating horses and donkeys is classified as:`,
            options: [`Prezygotic — gametic isolation`, `Postzygotic — hybrid sterility`, `Postzygotic — hybrid inviability`, `Prezygotic — behavioral isolation`],
            correctAnswer: 1,
            explanation: `A zygote forms and develops into a vigorous adult, so the barrier is postzygotic; because the hybrid LIVES but cannot reproduce (its mismatched chromosome complement fails at meiotic pairing), it is hybrid sterility. Hybrid inviability would mean the hybrid dies or fails to develop; prezygotic barriers would have prevented fertilization altogether.`
          },
          {
            question: `Two closely related frog species occupy the same ponds, but one breeds in early spring and the other in late summer, so their gametes never meet. This is:`,
            options: [`Temporal isolation, a prezygotic barrier`, `Hybrid breakdown, a postzygotic barrier`, `Mechanical isolation, a prezygotic barrier`, `Gametic isolation, a postzygotic barrier`],
            correctAnswer: 0,
            explanation: `Breeding at different times prevents mating in the first place — temporal isolation, which is prezygotic since no zygote ever forms. Mechanical isolation involves incompatible reproductive structures, and gametic isolation (also prezygotic, despite the distractor's label) involves sperm-egg incompatibility after mating; here the sexes never even overlap in breeding season.`
          },
          {
            question: `A diploid plant lineage produces a tetraploid individual through a meiotic error. The tetraploid can self-fertilize, but its crosses with the parental diploids yield sterile triploids. This scenario illustrates:`,
            options: [`Allopatric speciation driven by a geographic barrier`, `Adaptive radiation into open niches`, `Hybrid breakdown in the second generation`, `Sympatric speciation by polyploidy — reproductive isolation arising in a single generation`],
            correctAnswer: 3,
            explanation: `Polyploidy isolates the new lineage instantly and requires no geographic separation — the hallmark sympatric mechanism, common in plants (a large fraction of flowering plant species have polyploid ancestry). No physical barrier exists, so it is not allopatric; the sterile triploid is the isolating MECHANISM here, not multigenerational hybrid breakdown.`
          },
          {
            question: `The wings of bats and the wings of insects both generate lift for flight but develop from entirely different ancestral structures. These wings are best described as:`,
            options: [`Homologous structures produced by divergent evolution`, `Vestigial structures`, `Analogous structures produced by convergent evolution`, `Monophyletic structures inherited from a common flying ancestor`],
            correctAnswer: 2,
            explanation: `Similar function with independent evolutionary origins defines analogy, the product of convergent evolution under similar selective demands — an instance of homoplasy. Homology is the reverse pattern (shared ancestry, e.g., a bat's wing versus a human arm), and the last common ancestor of bats and insects had no wings at all.`
          },
          {
            question: `On a cladogram, a monophyletic group (clade) is defined as:`,
            options: [`A common ancestor together with ALL of its descendant taxa`, `Any set of taxa drawn next to each other at the tips of the tree`, `All taxa that share a similar overall body plan`, `The taxa with the greatest number of derived characters`],
            correctAnswer: 0,
            explanation: `A clade is an ancestor plus every one of its descendants — omit any descendant and the group is paraphyletic (e.g., "reptiles" without birds). Tip adjacency is meaningless because branches can rotate freely around nodes, and overall similarity fails whenever convergence (homoplasy) makes unrelated taxa look alike.`
          }
        ]
      }
    },
    {
      id: 'ns3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Biological species concept = interbreeding + reproductive isolation; breaks down for asexual taxa, fossils, and hybridizing species
- Prezygotic barriers (habitat, temporal, behavioral, mechanical, gametic) block zygote formation; postzygotic barriers (inviability, sterility — the mule — and breakdown) waste it
- Allopatric speciation: geographic split, then divergence; sympatric speciation: polyploidy (instant, plant-heavy) or disruptive selection with assortative mating
- Adaptive radiation: one colonist lineage → many niche specialists (Darwin's finches, honeycreepers)
- Divergence → homology (same origin, different function); convergence → analogy/homoplasy (same function, different origin)
- Cladograms: nodes = common ancestors, clade = ancestor + ALL descendants, sister taxa share the immediate node; branch rotation is free, and no tip is "more evolved"
- Punctuated equilibrium = long stasis + geologically rapid change at speciation; still standard mechanisms, different tempo`
    }
  ]
};
