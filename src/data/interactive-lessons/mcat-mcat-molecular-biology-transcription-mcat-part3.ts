export const mcatTranscriptionPart3Data = {
  topicSlug: 'mcat-molecular-biology-transcription-mcat',
  sections: [
    {
      id: 'txn3-intro',
      type: 'text' as const,
      content: `# Transcription for the MCAT

**Part 3 of 4 — Regulation: Operons, Enhancers & Epigenetics**

### Prokaryotic Logic: The Operon

An **operon** = one promoter driving several genes onto ONE polycistronic mRNA — coordinated control of a whole pathway.

**The lac operon (inducible, catabolic)** — two inputs, an AND gate:

| Glucose | Lactose | Repressor (LacI) | CAP-cAMP | Transcription |
|---------|---------|------------------|----------|---------------|
| High | Absent | Bound to operator | Inactive (low cAMP) | OFF |
| High | Present | Released (allolactose binds it) | Inactive | Barely on |
| Low | Absent | Bound | Active | OFF (repressor wins) |
| Low | Present | Released | Active | **Strongly ON** |

- **Negative control**: the LacI repressor sits on the **operator** (DNA between promoter and genes) until the inducer **allolactose** pulls it off.
- **Positive control**: low glucose raises **cAMP**; cAMP-CAP binds upstream and recruits polymerase. Both conditions must be right — use lactose only when the better fuel is gone.

**The trp operon (repressible, anabolic)**: the repressor is INACTIVE alone; **tryptophan is a corepressor** that activates it. Product shuts off its own synthesis — end-product feedback at the gene level. (Attenuation adds a second, translation-coupled brake.)

> Classify any operon question fast: catabolic pathways are inducible (substrate turns them ON); anabolic pathways are repressible (product turns them OFF).

### Cis vs Trans — The Genetics of Regulation

- **Cis-acting elements** (promoter, operator, enhancer): DNA sites serving only the genes on their OWN molecule. An operator mutation (O$^c$) that cannot bind repressor makes its own operon constitutive — a second normal copy elsewhere cannot fix it.
- **Trans-acting factors** (repressors, activators, sigma): diffusible proteins acting on ANY copy. A lacI$^-$ mutation is rescued by a good lacI gene on a plasmid. Merodiploid (F') puzzles all reduce to: elements = cis, products = trans.

### Eukaryotic Layers

1. **Enhancers/silencers**: cis elements that work at huge distances, in either orientation, upstream or downstream — DNA **looping** brings their bound activators to the promoter's mediator complex. Contrast with the fixed, close-range prokaryotic operator.
2. **Chromatin**: **histone acetylation** (HATs) neutralizes lysine's positive charge, loosening DNA-histone grip → transcription up; **HDACs** reverse it. **DNA methylation** of CpG islands (promoter regions) silences — stable, heritable through division = **epigenetics** (genomic imprinting, X-inactivation/Barr body).
3. **Combinatorial control**: each gene's promoter integrates many transcription factors; tissue identity = the combination of factors present. No polycistronic mRNAs — each eukaryotic mRNA is monocistronic (one gene, one message).`
    },
    {
      id: 'txn3-worked',
      type: 'text' as const,
      content: `### Worked Example — Merodiploid Operon Genetics

**Passage-style problem.** E. coli strains carry the chromosomal lac region plus an F' plasmid with a second lac copy. Beta-galactosidase (LacZ) activity is measured with and without inducer (glucose absent throughout). Genotype notation: I = lacI (repressor), O = operator, Z = lacZ; superscript + is wild type, minus is loss of function, O$^c$ is an operator that cannot bind repressor.

**Strain 1**: I$^+$ O$^c$ Z$^+$ / F' I$^+$ O$^+$ Z$^-$. Result: enzyme made WITHOUT inducer (constitutive).

**Analysis.** Ask of each Z$^+$ gene: what controls MY operator? The functional Z$^+$ sits downstream of O$^c$, which cannot bind any repressor — from either lacI copy, because repressor acts in trans but the operator only protects its own DNA (cis). So Z$^+$ is always on. The plasmid's normal operator dutifully represses... a dead Z$^-$. Constitutive expression confirmed: **O$^c$ is cis-dominant**.

**Strain 2**: I$^-$ O$^+$ Z$^+$ / F' I$^+$ O$^+$ Z$^-$. Result: inducible (normal regulation).

**Analysis.** The chromosome makes no repressor, but the plasmid's I$^+$ produces diffusible repressor that finds and binds the chromosomal O$^+$, restoring control of Z$^+$. **I$^+$ is trans-dominant over I$^-$** — the defining demonstration that repressor is a diffusible product.

**Strain 3**: I$^s$ (super-repressor that cannot bind allolactose) O$^+$ Z$^+$ / F' I$^+$ O$^+$ Z$^-$. Result: NO enzyme even WITH inducer.

**Analysis.** I$^s$ repressor binds operators normally but ignores the inducer — it never lets go. Because it diffuses, it clamps every O$^+$ in the cell, and wild-type repressor cannot displace it (an empty operator is instantly rebound). **I$^s$ is trans-dominant negative** — uninducible.

**The algorithm**: (1) inventory every functional Z; (2) examine only the operator physically attached to it; (3) let all repressor genes contribute one shared repressor pool; (4) remember O$^c$ = cis-constitutive, I$^-$ = trans-recessive, I$^s$ = trans-dominant uninducible.`
    },
    {
      id: 'txn3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gene Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `E. coli are grown with abundant glucose AND abundant lactose. Lac operon transcription is minimal because:`,
            options: [`The repressor remains bound to the operator despite lactose`, `Allolactose is only produced when glucose is absent`, `High glucose keeps cAMP low, so CAP cannot assist polymerase — positive control is missing even though the repressor has been released`, `Glucose directly inhibits beta-galactosidase enzyme activity`],
            correctAnswer: 2,
            explanation: `Both switches must be ON: lactose (via allolactose) removes the repressor — negative control cleared — but the weak lac promoter still needs cAMP-CAP to recruit polymerase effectively, and glucose suppresses adenylate cyclase, keeping cAMP low. Result: a trickle, not full expression. This is catabolite repression, the cell's fuel-preference circuit. Options A and B misstate inducer logic (allolactose forms whenever lactose enters), and D confuses gene regulation with enzyme inhibition.`
          },
          {
            question: `In the trp operon, tryptophan functions as a corepressor. This means high tryptophan levels:`,
            options: [`Activate an otherwise inactive repressor, which then blocks transcription of the tryptophan synthesis genes`, `Bind the repressor and pull it off the operator`, `Directly inhibit RNA polymerase in all operons`, `Increase cAMP to recruit CAP`],
            correctAnswer: 0,
            explanation: `Anabolic logic runs opposite to catabolic: the trp repressor is born unable to bind DNA and needs its corepressor (the pathway's END PRODUCT) to fold into binding shape — so abundance of tryptophan shuts down its own production line. Compare lac: there the small molecule (allolactose, the substrate signal) INACTIVATES the repressor. One sentence to memorize: inducers disable repressors of catabolic operons; corepressors enable repressors of anabolic operons.`
          },
          {
            question: `An enhancer located 40,000 base pairs downstream of a human gene strongly increases its transcription. Deleting the enhancer reduces expression of this gene but no others, and supplying the enhancer sequence on a separate plasmid does not restore expression. The enhancer is best described as:`,
            options: [`A trans-acting factor, since it works at a distance`, `A cis-acting DNA element whose bound activators reach the promoter through DNA looping`, `A silencer with negative activity`, `An alternative promoter for the gene`],
            correctAnswer: 1,
            explanation: `Distance does not make something trans — physical connectivity is the criterion. Enhancers act on genes sharing their DNA molecule (cis), which is exactly why a detached plasmid copy fails: looping can only deliver activators to promoters on the same chromosome. Trans factors are the diffusible PROTEINS that bind the enhancer. Positioning (40 kb away, orientation-independent, downstream-capable) distinguishes enhancers from promoters, which sit at fixed short range and set the start site.`
          },
          {
            question: `A drug inhibiting histone deacetylases (HDACs) is applied to cells. The predicted direct consequence for chromatin and transcription is:`,
            options: [`Increased DNA methylation and gene silencing`, `Tighter DNA-histone binding and heterochromatin spread`, `Excision of nucleosomes from the genome`, `Accumulation of acetylated histones, looser DNA-histone contacts, and generally increased transcription of affected genes`],
            correctAnswer: 3,
            explanation: `Acetylation is written by HATs and erased by HDACs; block the eraser and acetyl marks accumulate. Acetyl groups neutralize the lysine positive charges that grip the negatively charged backbone, so nucleosomes loosen and promoters become accessible — transcription rises. Work the causal chain: enzyme inhibited, mark accumulates, charge neutralized, packing opens, output up. HDAC inhibitors are real chemotherapeutics that de-repress silenced tumor-suppressor genes; methylation is an entirely separate silencing system.`
          },
          {
            question: `A female mammal silences one X chromosome in each cell (the Barr body), and daughter cells maintain the SAME silenced X through many divisions without any DNA sequence change. The property that best explains this stable inheritance is:`,
            options: [`A mutation in the silenced X's promoters`, `Continuous action of the lac repressor`, `Epigenetic marks — DNA methylation and repressive chromatin — that are copied to daughter strands at replication`, `Loss of the silenced chromosome during mitosis`],
            correctAnswer: 2,
            explanation: `Heritable-but-not-genetic is the definition of epigenetics: methylated CpGs are restored on new daughter strands by maintenance methyltransferases that recognize hemimethylated sites, so the silent state survives replication indefinitely — sequence untouched, chromosome retained (it is visible as the Barr body). The same machinery underlies genomic imprinting. Calico cat coat patterns are the standard phenotypic evidence: patches descend from single cells that fixed one X's inactivation early.`
          }
        ]
      }
    },
    {
      id: 'txn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Operon = one promoter, polycistronic mRNA, coordinated pathway control; catabolic operons are inducible (lac), anabolic are repressible (trp)
- lac needs BOTH: repressor off (allolactose) AND cAMP-CAP on (low glucose); glucose present = catabolite repression regardless of lactose
- trp: tryptophan is a corepressor that arms its repressor — end product silences its own synthesis
- Cis vs trans by connectivity, not distance: operators/promoters/enhancers serve their own molecule (O-c is cis-dominant constitutive); repressors/activators diffuse (I-plus rescues I-minus in trans; I-s super-repressor is trans-dominant uninducible)
- Merodiploid algorithm: for each functional structural gene, consult only ITS operator; pool all repressors
- Eukaryotes: enhancers act far away via looping (still cis); histone acetylation opens chromatin (HAT up, HDAC down); CpG methylation silences stably
- Epigenetics = heritable expression states without sequence change: maintenance methylation copies marks at replication (X-inactivation, imprinting)`
    }
  ]
};
