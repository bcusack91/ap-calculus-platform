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
- **Hybrid sterility** — hybrids live but cannot reproduce: the **mule** (horse × donkey) is robust but sterile, partly because mismatched chromosome sets cannot pair properly in meiosis

<!-- yield:low -->
- The mule's count: horse 2n = 64, donkey 2n = 62, so the mule carries an odd 63.
<!-- /yield -->

- **Hybrid breakdown** — first-generation hybrids are fertile, but their offspring are feeble or sterile

Prezygotic barriers are "cheaper": no gametes are wasted on doomed offspring, so selection can strengthen them where hybrids fare poorly (reinforcement).

### Geography of Speciation

**Allopatric speciation**: a physical barrier (river, mountain uplift, habitat fragmentation) splits a population; drift and divergent selection accumulate differences until interbreeding fails even on recontact. The most common and best-documented route.

**Sympatric speciation**: divergence WITHOUT geographic separation. Two credible mechanisms:

- **Polyploidy** — especially in plants: a chromosome-doubling error creates individuals (e.g., tetraploids) instantly isolated from diploid parents, because triploid offspring are sterile. Speciation in one generation.
- **Disruptive selection + assortative mating** — ecological niches favor opposite extremes and like mates with like (Part 2's seedcracker logic; cichlid fish and apple maggot flies are the usual cases).

**Adaptive radiation**: one lineage rapidly diversifies into many niche-specialized species — Darwin's finches, Hawaiian honeycreepers, and silverswords — typically after colonizing an island system or after competitors vanish.

### Reading Evolutionary Trees

- **Divergent evolution** produces **homologous** structures: same ancestral origin, possibly different functions (human arm, whale flipper, bat wing).
- **Convergent evolution** produces **analogous** structures: similar function, independent origins (bird vs. insect wings). Convergent similarity is **homoplasy**; mistaken for homology, it misleads tree-building.
- On a **cladogram**, nodes are common ancestors; a **clade (monophyletic group)** is an ancestor plus ALL its descendants; **sister taxa** share the nearest node.
- **Branch order carries the information, not left-right position or "ladder height."** No living taxon is "more evolved": all tips have had equal time since the root.

### Tempo

**Gradualism**: change accumulates steadily. **Punctuated equilibrium**: fossil species show long stasis interrupted by geologically rapid change, often associated with speciation events. "Rapid" here means thousands of generations — still ordinary population genetics, compressed relative to stasis, not a different mechanism.

<!-- yield:low -->
Punctuated equilibrium was proposed by Niles Eldredge and Stephen Jay Gould (1972).
<!-- /yield -->`
    },
    {
      id: 'ns3-worked-barriers',
      type: 'text' as const,
      content: `### Worked Example — Classifying Reproductive Barriers

**Problem.** Two cricket populations diverged within one meadow, never geographically separated. Females ignore the other population's courtship song; forced crosses rarely fertilize eggs; the few hybrids that hatch are fertile, but their offspring are feeble.

- **(a)** Which barrier is the ignored song, and is it prezygotic or postzygotic?
- **(b)** Which barrier is the failed fertilization, and which side of the zygote does it act on?
- **(c)** Which barrier explains the feeble offspring of fertile hybrids?
- **(d)** Which geographic mode of speciation is this, and by what route?
- **(e)** Since hybrids fare poorly, which kind of barrier should selection strengthen, and why?

**(a) Behavioral isolation.** Courtship signals that are not recognized prevent mating, so no zygote forms: a prezygotic barrier.

**(b) Gametic isolation.** Sperm that cannot fertilize the egg also act before any zygote exists, so this barrier is prezygotic too.

**(c) Hybrid breakdown.** First-generation hybrids are fertile, but their offspring are feeble or sterile: a postzygotic barrier.

**(d) Sympatric.** The populations diverged with no geographic separation. The animal route the lesson describes is disruptive selection plus assortative mating, with like mating with like.

**(e) Prezygotic barriers.** Habitat, temporal, behavioral, mechanical and gametic barriers are "cheaper": no gametes are wasted on doomed offspring, so selection strengthens them where hybrids fare poorly (reinforcement).`
    },
    {
      id: 'ns3-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Cladogram Without Getting Fooled

**Problem.** A four-taxon cladogram: the deepest node splits D from the rest, the next splits C from the pair (A, B), and the shallowest splits A from B. All four share trait 1; C, A and B share trait 2; A and B alone share trait 3; B alone shows trait 4.

- **(a)** Which taxa are sister taxa?
- **(b)** Is the group (C, A, B) monophyletic? Is the group (D, C)?
- **(c)** Where on the tree did trait 3 arise, and where did trait 4?
- **(d)** A student calls B the "most evolved" taxon because it has the most derived traits and sits at the end of the tree. Is that right?
- **(e)** Trait 2 is later found in taxon D, but analysis shows it arose independently there. What is trait 2 in D, and why does it matter?

**(a) A and B.** They share an immediate common ancestor (the shallowest node) that neither shares with C or D. C is the sister taxon of the CLADE (A + B), not of A alone.

**(b) Yes, then no.** (C, A, B) holds their common ancestor at the second node and every taxon descended from it, so it is a clade. (D, C) is NOT: their most recent common ancestor is the root, so the group must include A and B too. Leaving descendants out makes a group paraphyletic or polyphyletic.

**(c) Trait origins.** Trait 3 arose on the branch leading to the (A, B) ancestor: after the split from C, before A and B diverged. Trait 4 arose on B's own terminal branch.

**(d) No.** Every tip has had the same time since the root, and D's terminal branch is the LONGEST-running independent lineage. Trait counts reflect which characters were scored, and left-right order is arbitrary: rotating any node (drawing B before A) depicts the identical history.

**(e) Homoplasy.** Trait 2 in D is homoplasy (convergence): similarity NOT inherited from a common ancestor. Counting it as homology would wrongly pull D inside the (C, A, B) clade.`
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
            yield: 'HIGH',
            explanation: `A zygote forms and develops into a vigorous adult, so the barrier is postzygotic; because the hybrid LIVES but cannot reproduce (its mismatched chromosome complement fails at meiotic pairing), it is hybrid sterility. Hybrid inviability would mean the hybrid dies or fails to develop; prezygotic barriers would have prevented fertilization altogether.`
          },
          {
            question: `Two closely related frog species occupy the same ponds, but one breeds in early spring and the other in late summer, so their gametes never meet. This is:`,
            options: [`Temporal isolation, a prezygotic barrier`, `Hybrid breakdown, a postzygotic barrier`, `Mechanical isolation, a prezygotic barrier`, `Gametic isolation, a postzygotic barrier`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Breeding at different times prevents mating in the first place — temporal isolation, which is prezygotic since no zygote ever forms. Mechanical isolation involves incompatible reproductive structures, and gametic isolation (also prezygotic, despite the distractor's label) involves sperm-egg incompatibility after mating; here the sexes never even overlap in breeding season.`
          },
          {
            question: `A diploid plant lineage produces a tetraploid individual through a meiotic error. The tetraploid can self-fertilize, but its crosses with the parental diploids yield sterile triploids. This scenario illustrates:`,
            options: [`Allopatric speciation driven by a geographic barrier`, `Adaptive radiation into open niches`, `Hybrid breakdown in the second generation`, `Sympatric speciation by polyploidy`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Polyploidy isolates the new lineage instantly, within a single generation, and requires no geographic separation — the hallmark sympatric mechanism, common in plants (a large fraction of flowering plant species have polyploid ancestry). No physical barrier exists, so it is not allopatric; the sterile triploid is the isolating MECHANISM here, not multigenerational hybrid breakdown.`
          },
          {
            question: `The wings of bats and the wings of insects both generate lift for flight but develop from entirely different ancestral structures. These wings are best described as:`,
            options: [`Homologous structures produced by divergent evolution`, `Vestigial structures`, `Analogous structures produced by convergent evolution`, `Monophyletic structures inherited from a common flying ancestor`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Similar function with independent evolutionary origins defines analogy, the product of convergent evolution under similar selective demands — an instance of homoplasy. Homology is the reverse pattern (shared ancestry, e.g., a bat's wing versus a human arm), and the last common ancestor of bats and insects had no wings at all.`
          },
          {
            question: `On a cladogram, a monophyletic group (clade) is defined as:`,
            options: [`A common ancestor together with all of its descendant taxa`, `Any taxa drawn next to each other at the tree's tips`, `All taxa that share a similar overall body plan`, `The taxa with the greatest number of derived characters`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `A clade is an ancestor plus every one of its descendants — omit any descendant and the group is paraphyletic (e.g., "reptiles" without birds). Tip adjacency is meaningless because branches can rotate freely around nodes, and overall similarity fails whenever convergence (homoplasy) makes unrelated taxa look alike.`
          }
        ]
      }
    },
    {
      id: 'ns3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Pre- vs. postzygotic.** Prezygotic barriers (habitat, temporal, behavioral, mechanical, gametic) block the zygote; postzygotic ones waste it.
- **Allopatric vs. sympatric.** Allopatric needs a geographic split; sympatric runs on polyploidy or disruptive selection plus assortative mating.
- **Homology vs. analogy.** Divergence gives homologous structures; convergence gives analogous ones (similar function, independent origins).
- **Reading a cladogram.** Nodes are common ancestors, a clade is an ancestor plus ALL its descendants, and sister taxa share the nearest node.

**Common traps**

- **Reading tip position.** Left-right order is arbitrary and no living tip is "more evolved"; only branch order carries information.
- **Counting homoplasy as homology.** Convergent similarity is not inherited from a common ancestor and pulls taxa into false clades.
- **The mule as inviable.** The mule lives but cannot reproduce, so its barrier is hybrid sterility, not hybrid inviability.
- **One species concept for all.** The biological species concept cannot classify asexual organisms or fossils and strains for hybridizers.

<!-- yield:low -->
**Low-yield extras**

- The mule's 63 chromosomes (horse 64, donkey 62); punctuated equilibrium's proposers, Eldredge and Gould
<!-- /yield -->`
    }
  ]
};
