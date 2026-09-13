export const mcatVirusesPart2Data = {
  topicSlug: 'mcat-microbiology-viruses-mcat',
  sections: [
    {
      id: 'vir2-intro',
      type: 'text' as const,
      content: `# Viruses

**Part 2 of 4 — Bacteriophages: Lytic & Lysogenic Cycles**

### The Phage Body Plan

**Bacteriophages** — viruses of bacteria — include the iconic tailed phages (T4, lambda): an icosahedral head packed with dsDNA, a contractile or non-contractile tail, and **tail fibers** that recognize receptors on the bacterial surface (LPS, pili, teichoic acids). Injection is distinctive: the tail contracts like a syringe and drives the DNA through the envelope — **the capsid stays outside**. Hershey and Chase exploited exactly this: $^{32}$P-labeled DNA entered cells, $^{35}$S-labeled protein did not, proving DNA is the genetic material.

### The Lytic Cycle (Virulent Phages, e.g., T4)

Injection → immediate takeover: host transcription is redirected, **early genes** (nucleases, replication enzymes) degrade host DNA and copy the phage genome; **late genes** build capsids and lysis proteins. Assembly, then **lysozyme-mediated wall rupture** releases 100-200 progeny per cell in ~25 minutes. Virulent phages have exactly one setting: kill.

### The Lysogenic Cycle (Temperate Phages, e.g., Lambda)

A temperate phage has a choice. Instead of replicating, its genome can integrate into the host chromosome (site-specific recombination by phage **integrase**) as a **prophage**:

- The prophage is replicated PASSIVELY with the chromosome — every daughter cell inherits it. The carrier cell is a **lysogen**.
- A phage-encoded **repressor** protein silences the lytic genes AND confers **superinfection immunity**: another phage of the same type injecting its DNA finds the repressor already waiting.
- **Induction:** DNA damage (UV, mutagens) triggers the host SOS response; activated RecA promotes cleavage of the repressor → the prophage excises and enters the lytic cycle. Teleologically: the ship is sinking, launch the lifeboats.
- The lysis-lysogeny decision itself tilts with conditions: high multiplicity of infection and starved hosts favor lysogeny (poor prospects for a burst); rich, sparse conditions favor lysis.

### Why Lysogeny Matters Medically

**Lysogenic conversion:** prophage genes change the host's phenotype. Diphtheria toxin, cholera toxin, botulinum toxin, and Shiga toxin are all encoded by prophages — the bacterium is only pathogenic while 'infected.' And **specialized transduction** is a lysogeny error: an imprecisely excising prophage carries flanking host genes to its next host (vs **generalized transduction**, a lytic packaging error that can move any gene — see the Bacteria lesson).

### Phages as Tools

Plaque assays, transduction-based gene mapping, phage display, and modern **phage therapy** against multidrug-resistant bacteria all rest on this biology. CRISPR-Cas immunity is the bacterial counterattack: captured phage sequence fragments (spacers) guide Cas nucleases to destroy re-invading phage DNA — an adaptive immune system in a single cell.`
    },
    {
      id: 'vir2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Phage Cycles & Lysogeny** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the Hershey-Chase experiment, only 32P (not 35S) appeared inside infected bacteria because tailed phages:`,
            options: [`Inject their nucleic acid, leaving the capsid outside`, `Contain protein that lacks any sulfur-containing residues`, `Degrade their own capsid proteins upon entry`, `Enter cells whole and export their sulfur atoms`],
            correctAnswer: 0,
            explanation: `The phage tail pierces the envelope and injects DNA (32P-labeled) like a syringe; the protein shell (35S-labeled through its sulfur-containing methionine and cysteine) never enters and can be sheared off in a blender. Since only the injected component programmed progeny production, DNA had to be the genetic material.`
          },
          {
            question: `A lysogen carrying prophage lambda is resistant to infection by additional lambda phage. The immunity is due to:`,
            options: [`Loss of the lambda receptor from the cell surface`, `CRISPR spacers the host acquired from the prophage`, `Prophage-made repressor silencing incoming lambda genes`, `Restriction enzymes that cut only superinfecting DNA`],
            correctAnswer: 2,
            explanation: `The same diffusible repressor that keeps the resident prophage dormant is present in the cytoplasm and immediately binds the operators of any newly injected lambda genome, silencing its lytic genes — superinfection immunity. It is phage-specific (a different phage with different operators infects normally), which distinguishes it from receptor loss or restriction.`
          },
          {
            question: `UV irradiation of a lysogenic culture causes a burst of phage release. The mechanistic chain is:`,
            options: [`UV directly excises the prophage by photolyase action`, `UV activates RecA, which triggers repressor self-cleavage`, `UV mutates tail-fiber genes, enabling escape from the host`, `UV crosslinks the repressor to DNA, locking in lysogeny`],
            correctAnswer: 1,
            explanation: `DNA damage activates RecA (the SOS sensor), which stimulates autocleavage of the phage repressor. With the repressor destroyed, lytic genes fire, the prophage loops out via excisionase/integrase, and progeny lyse the doomed host — the phage abandons a sinking ship.`
          },
          {
            question: `A previously harmless bacterial strain begins producing a potent exotoxin after becoming a lysogen. Curing the strain of its prophage abolishes toxin production. This is an example of:`,
            options: [`Generalized transduction of host genes`, `Conjugative transfer of a toxin plasmid`, `Transformation by environmental DNA`, `Lysogenic conversion by the prophage`],
            correctAnswer: 3,
            explanation: `The toxin gene resides IN the prophage and is expressed from it; phenotype tracks perfectly with prophage presence. Diphtheria, cholera, Shiga, and botulinum toxins follow this pattern. Generalized transduction moves random HOST genes and does not require an ongoing prophage.`
          },
          {
            question: `Conditions that favor a temperate phage choosing lysogeny over lysis include:`,
            options: [`A fast-growing host in rich medium at low phage density`, `A starved host and a high ratio of phage to bacteria`, `Loss of integrase activity in the infecting phage`, `Prior UV irradiation that damages host DNA`],
            correctAnswer: 1,
            explanation: `Lysis pays off when a burst of progeny can find fresh hosts: rich conditions, plentiful bacteria. Starvation (poor burst prospects) and high multiplicity of infection (few uninfected hosts remain) both tip the decision circuitry toward quietly integrating and waiting. A phage without integrase cannot insert a prophage, so it cannot establish lysogeny, and UV-induced DNA damage pushes the OPPOSITE way — induction.`
          }
        ]
      }
    },
    {
      id: 'vir2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Tailed phage = DNA-packed head + syringe tail; DNA injected, capsid stays out (Hershey-Chase: 32P in, 35S out)
- Lytic (virulent, T4): early genes hijack and copy, late genes build and lyse — burst of progeny
- Lysogenic (temperate, lambda): integrase inserts prophage; repressor silences lytic genes + grants superinfection immunity
- Induction: DNA damage → SOS/RecA → repressor cleaved → excision → lysis; starvation + high phage density favor lysogeny instead
- Lysogenic conversion arms bacteria with phage-encoded toxins (diphtheria, cholera, Shiga, botulinum)
- Sloppy prophage excision = specialized transduction; lytic mispackaging = generalized; CRISPR = bacterial adaptive defense`
    },
    {
      id: 'vir2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Phage Genetics

<details>
<summary><b>Example 1: Turbid vs clear plaques</b></summary>

**Question:** Wild-type lambda forms turbid (cloudy) plaques; a mutant forms perfectly clear plaques. Propose the mutation and explain the plaque morphologies.

**Solution:**
1. Within a wild-type plaque, some infected cells choose LYSOGENY, survive (immune to superinfection), and keep growing — a haze of live lysogens clouds the cleared zone: turbid.
2. Clear plaques mean NO survivors — the mutant cannot establish lysogeny. The classic lesion is a defective repressor (cI) gene.
3. Corollary: cI-minus phage can still grow lytically (plaques form) but can never form stable lysogens.

**MCAT Strategy:** Plaque morphology is a phenotype readout of the lysis-lysogeny circuit; turbidity = lysogens = functional repressor.
</details>

<details>
<summary><b>Example 2: Which genes can a specialized transducer carry?</b></summary>

**Question:** Lambda integrates between the E. coli gal and bio genes. A rare transducing lysate moves gal+ or bio+ into recipients, but never trp+ (located far away). Explain, and contrast with phage P1 generalized transduction.

**Solution:**
1. Specialized transduction requires IMPRECISE prophage excision: the loop-out accidentally captures DNA adjacent to the attachment site — only gal or bio can be included; trp is never adjacent.
2. The resulting particle is usually defective (it left phage genes behind in trade).
3. P1 (generalized) mispackages random chromosome fragments during LYTIC growth: any locus, including trp, moves at roughly comparable low frequency.

**MCAT Strategy:** Ask where the phage DNA sits when the error happens: integrated (specialized → neighbors only) vs never integrated (generalized → anything).
</details>

<details>
<summary><b>Example 3: Design a phage-therapy susceptibility test</b></summary>

**Question:** A patient's multidrug-resistant Pseudomonas isolate is tested against a phage library. Phage 12 lyses it today; a week into therapy, resistant bacterial colonies emerge whose surfaces lack the type IV pilus. Explain the resistance and one countermeasure.

**Solution:**
1. Phage 12 evidently uses the type IV pilus as its receptor; losing the pilus removes the attachment site — resistance by receptor loss (the phage version of 'keep the drug out').
2. Countermeasure: a phage COCKTAIL targeting several distinct receptors — simultaneous loss of all is improbable; bonus if receptor loss costs the bacterium virulence (pili are adhesins).
3. Note the evolutionary trade: phage resistance here made the pathogen less able to adhere to host tissue.

**MCAT Strategy:** Phage-host coevolution mirrors antibiotic resistance logic — receptor alteration, restriction, CRISPR — and cocktails mirror combination therapy.
</details>`
    }
  ]
};
