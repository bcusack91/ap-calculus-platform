export const bioGeneRegPart6Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'grp6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — *lac* Operon Genetics

**Part 6 of 7**

The classic test of whether you *understand* the lac operon is to predict the behavior of **mutants**. AP and college genetics both lean on this. To solve these problems you need two ideas from Part 1, applied ruthlessly:

- **cis vs. trans.** A mutation in a **cis-element** (promoter, operator) affects **only the operon physically attached to it** on the same DNA molecule. A mutation in a **trans-factor's gene** (lacI repressor) makes a diffusible protein that affects **every** lac operator in the cell.
- **Dominance in partial diploids.** A **merodiploid (partial diploid)** carries two copies of the lac region — one on the chromosome and one on an **F$'$ plasmid**. We write the genotype as *chromosome / F$'$*. Comparing the two copies reveals whether a mutation is dominant or recessive, and whether it acts in cis or trans.

The readout in every problem is **$\\beta$-galactosidase** (the lacZ product): is it made **with** inducer, **without** inducer, or **never**?

**The mutant alphabet:**

| Symbol | Meaning | Type |
|---|---|---|
| $I^+$ | Normal repressor gene (makes functional, inducible repressor) | trans |
| $I^-$ | Repressor gene broken (no functional repressor → cannot repress) | trans (recessive) |
| $I^s$ | "Super-repressor": repressor cannot bind inducer, stays on operator | trans (dominant) |
| $O^+$ | Normal operator | cis |
| $O^c$ | "Operator-constitutive": operator mutated so repressor cannot bind | cis (dominant, cis-only) |
| $P^-$ | Promoter broken: RNA polymerase cannot bind | cis |
| $Z^+ / Z^-$ | lacZ gene functional / nonfunctional ($\\beta$-gal made / not) | cis (reports for ITS operon) |

> **Golden rule:** Operator and promoter mutations are **cis** — they govern only the genes downstream **on the same DNA molecule**. Repressor mutations are **trans** — the protein floats and acts on **both** operons in a merodiploid. Keep asking: "Is this element a *sequence on the DNA* (cis) or a *diffusible protein* (trans)?"
      `
    },
    {
      id: 'grp6-worked1',
      type: 'text' as const,
      content: `
### Worked Problem 1 — A Repressor Mutation ($I^-$) and Its Rescue

**Setup.** Consider the haploid genotype $I^-\\;O^+\\;Z^+$. Predict $\\beta$-galactosidase production with and without inducer.

**Reason it through.**
- $I^-$ means no functional repressor is made. With nothing to bind the operator, RNA polymerase transcribes lacZ **regardless** of inducer.
- **Result:** $\\beta$-gal is made **constitutively** — present **both with and without** inducer. The operon has lost its "off" switch.

**Now make a partial diploid** to ask whether $I^-$ is dominant or recessive. Genotype: $I^-\\;O^+\\;Z^+ \\;/\\; I^+\\;O^+\\;Z^+$ (chromosome / F$'$).

- The $I^+$ copy on one DNA molecule makes a **functional repressor protein**. Because the repressor is a **trans-acting diffusible protein**, it spreads through the cell and can bind **both** operators — the one next to $I^-$ *and* the one next to $I^+$.
- So **both** copies are now normally regulated: **off without inducer, on with inducer**.
- **Conclusion:** $I^+$ is **dominant** to $I^-$; $I^-$ is **recessive**. This is the hallmark of a **trans** element — a good copy *anywhere* in the cell rescues the bad copy. The functional repressor does not care which DNA molecule it came from.

> **Take-away:** A recessive defect that is rescued by a good copy *on the other DNA molecule* proves the gene acts in **trans** (it makes a diffusible product). $I^-$ passes this test.
      `
    },
    {
      id: 'grp6-worked2',
      type: 'text' as const,
      content: `
### Worked Problem 2 — The Operator-Constitutive Mutation ($O^c$) Acts Only in Cis

**Setup.** Genotype: $I^+\\;O^c\\;Z^+$ (haploid). The operator is mutated so the repressor **cannot bind** it.

**Reason it through.**
- Even though a perfectly good repressor ($I^+$) is present, it has no operator to grip. lacZ is transcribed **constitutively** — $\\beta$-gal **with and without** inducer.
- Note this *looks* like the $I^-$ phenotype (constitutive), but the cause is different: a broken **cis** site, not a missing **trans** protein.

**The decisive partial diploid.** Arrange the mutation and the reporter carefully — genotype $I^+\\;O^c\\;Z^+ \\;/\\; I^+\\;O^+\\;Z^-$ (chromosome / F$'$):

Here the $O^c$ operator sits next to a **functional** $Z^+$; the normal $O^+$ operator sits next to a **broken** $Z^-$. Predict each operon's lacZ output:

| DNA molecule | Operator | lacZ | Repressor can bind operator? | This operon's $\\beta$-gal |
|---|---|---|---|---|
| Chromosome | $O^c$ (mutant) | $Z^+$ (good) | **No** | **Constitutive** (on with or without inducer) |
| F$'$ plasmid | $O^+$ (normal) | $Z^-$ (broken) | Yes | Inducible — but $Z^-$ makes **no functional enzyme anyway** |

- The functional $\\beta$-gal comes **only** from the molecule carrying $O^c$, and it is **constitutive**. The good repressor in the cell **cannot** fix it, because the operator defect affects only the genes **physically attached** to it.
- **Conclusion:** $O^c$ is **cis-dominant** (also called *cis-acting*). It controls **only its own operon**, and no trans-factor can rescue it.

**Contrast the two constitutive mutants:**

| | $I^-$ (repressor gene) | $O^c$ (operator) |
|---|---|---|
| Element type | trans (diffusible protein) | cis (DNA sequence) |
| Rescued by a good copy elsewhere? | **Yes** ($I^+$ rescues → recessive) | **No** (cis-acting → cis-dominant) |
| Affects which operon? | Both, in a merodiploid | Only its own |

> **The key experiment:** Putting $O^c$ next to $Z^+$ but $O^+$ next to $Z^-$ forces each operon to "report" separately. Constitutive enzyme tracking *with the $O^c$ copy* proves the operator acts in **cis**. This cis/trans test is the single most important reasoning pattern in operon genetics.
      `
    },
    {
      id: 'grp6-worked3',
      type: 'text' as const,
      content: `
### Worked Problem 3 — The Super-Repressor ($I^s$) Is Trans AND Dominant

**Setup.** $I^s$ encodes a repressor that **cannot bind inducer**. It clamps onto the operator and **never lets go**, even when lactose/allolactose is present.

**Haploid** $I^s\\;O^+\\;Z^+$: the operon is **permanently OFF** — no $\\beta$-gal **with or without** inducer, because the inducer can no longer pry the repressor off.

**Partial diploid** $I^s\\;O^+\\;Z^+ \\;/\\; I^+\\;O^+\\;Z^+$:
- The cell contains both the mutant $I^s$ repressor and the normal $I^+$ repressor. The $I^s$ protein is **diffusible (trans)** and binds **both** operators, shutting them down regardless of the normal repressor.
- Even with inducer present, the $I^s$ molecules keep clamping operators faster than they release, so **both** operons stay **off**.
- **Conclusion:** $I^s$ is **dominant** *and* **trans-acting** — the defective protein imposes its phenotype on the whole cell. (Contrast with $I^-$, which is *recessive* because the absence of a protein is rescued by a good copy.)

**A summary of all the lac genotypes you should be able to predict cold:**

| Genotype (haploid unless noted) | Without inducer | With inducer | One-line reason |
|---|---|---|---|
| $I^+\\;O^+\\;Z^+$ (wild type) | OFF | **ON** | Normal inducible control |
| $I^-\\;O^+\\;Z^+$ | **ON** | ON | No repressor → constitutive |
| $I^+\\;O^c\\;Z^+$ | **ON** | ON | Repressor can't bind mutant operator → constitutive |
| $I^s\\;O^+\\;Z^+$ | OFF | **OFF** | Super-repressor never releases |
| $I^+\\;O^+\\;Z^+\\;/\\;I^-$ (diploid) | OFF | ON | Good repressor (trans) rescues → $I^-$ recessive |
| $I^s\\;.../\\;I^+$ (diploid) | OFF | **OFF** | $I^s$ dominant + trans → both operons off |

> **Decision recipe for any lac mutant:** (1) Is the repressor functional and inducible? ($I^+$ yes; $I^-$ none; $I^s$ stuck on). (2) Can that repressor reach **this** operator? (Only if the operator is $O^+$ — an $O^c$ blocks it *for its own operon only*). (3) Is the promoter intact and is $Z$ functional? Walk these in order and the phenotype falls out.
      `
    },
    {
      id: 'grp6-worked4',
      type: 'text' as const,
      content: `
### Worked Problem 4 — A Promoter Mutation ($P^-$) Is Cis and Silences Its Own Operon

A **promoter** mutation, $P^-$, prevents RNA polymerase from binding. Because the promoter is a **cis** element, it affects **only the operon on its own DNA molecule** — and the effect is the opposite of $O^c$: instead of being stuck *on*, the operon is stuck *off*.

**Haploid** $I^+\\;P^-\\;O^+\\;Z^+$: no polymerase can load, so **no $\\beta$-gal is ever made**, with or without inducer. Note this *mimics* the $I^s$ phenotype (always off) but for a completely different reason — a broken *cis* promoter, not a stuck *trans* repressor.

**Decisive partial diploid** $I^+\\;P^-\\;O^+\\;Z^+ \\;/\\; I^+\\;P^+\\;O^+\\;Z^-$ (chromosome / F$'$):

| DNA molecule | Promoter | lacZ | Can polymerase transcribe? | This operon's $\\beta$-gal |
|---|---|---|---|---|
| Chromosome | $P^-$ (broken) | $Z^+$ (good) | **No** | None (no transcription at all) |
| F$'$ plasmid | $P^+$ (normal) | $Z^-$ (broken) | Yes, when induced | Inducible — but $Z^-$ yields no functional enzyme |

- The good $P^+$ on the plasmid **cannot** rescue the chromosomal $Z^+$, because a promoter only serves the genes **physically attached** to it. The functional $Z^+$ has a dead promoter; the working promoter sits over a dead $Z^-$.
- **Result:** essentially **no functional $\\beta$-gal**, inducer or not. $P^-$ is **cis-acting**, just like $O^c$ — but it locks the operon OFF rather than ON.

**The cis/trans grand summary** (memorize the pattern, not just the rows):

| Mutation | Element | cis or trans | Phenotype of its own operon | Rescued by good copy elsewhere? |
|---|---|---|---|---|
| $I^-$ | repressor gene | trans | constitutive | **Yes** (recessive) |
| $I^s$ | repressor gene | trans | always OFF | No (dominant) |
| $O^c$ | operator | cis | constitutive | No (cis-acting) |
| $P^-$ | promoter | cis | always OFF | No (cis-acting) |

> **Pattern to extract:** The *two cis mutations* ($O^c$, $P^-$) can never be rescued in trans and act only locally. The *two trans mutations* ($I^-$, $I^s$) act cell-wide; whether a good copy rescues them depends on whether the defect is an *absence* ($I^-$, recessive, rescuable) or a *dominant poison* ($I^s$, not rescuable).
      `
    },
    {
      id: 'grp6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predict the Mutant Phenotype
      `,
      exercise: {
        questions: [
          {
            question: 'Predict β-galactosidase production for the haploid genotype I⁺ Oᶜ Z⁺ (functional repressor, operator-constitutive mutation, functional lacZ).',
            options: [
              'Made only when inducer is present (normal inducible control)',
              'Made constitutively — both with and without inducer — because the repressor cannot bind the mutant operator',
              'Never made, because the repressor is permanently bound',
              'Never made, because the promoter is broken'
            ],
            correctAnswer: 1,
            explanation: 'Oᶜ prevents the (perfectly good) repressor from binding, so transcription proceeds whether or not inducer is present — constitutive β-gal. Option A is the wild-type pattern, but a good repressor that cannot dock cannot impose inducibility. Option C describes the Iˢ super-repressor phenotype, not Oᶜ. Option D invents a promoter defect not present in the genotype.'
          },
          {
            question: 'In the partial diploid Iˢ O⁺ Z⁺ / I⁺ O⁺ Z⁺, what is the expected β-galactosidase phenotype, and what does it reveal about Iˢ?',
            options: [
              'Inducible (off without inducer, on with inducer); Iˢ is recessive',
              'Constitutive (always on); Iˢ destroys all repressors',
              'Always OFF (no enzyme with or without inducer); Iˢ is dominant and trans-acting because the mutant repressor binds both operators and cannot release',
              'Always OFF; but only the chromosomal operon is affected'
            ],
            correctAnswer: 2,
            explanation: 'The Iˢ super-repressor is a diffusible protein that clamps BOTH operators and cannot be removed by inducer, so the whole cell is OFF — demonstrating Iˢ is dominant and trans. Option A wrongly calls it recessive (that is I⁻). Option B inverts the mechanism (a super-repressor silences, it does not destroy repressors). Option D forgets that a trans-acting protein reaches both operons, not just one.'
          },
          {
            question: 'A partial diploid has genotype I⁺ Oᶜ Z⁻ / I⁺ O⁺ Z⁺. Will functional β-galactosidase be produced WITHOUT inducer?',
            options: [
              'Yes — the Oᶜ operon is constitutive and makes functional enzyme',
              'No — the constitutive Oᶜ operon carries Z⁻ (no functional enzyme), while the functional Z⁺ is on the normally repressed O⁺ operon, which stays off without inducer',
              'Yes — the repressor cannot bind either operator',
              'No — both operons are permanently silenced'
            ],
            correctAnswer: 1,
            explanation: 'Track each operon separately. Oᶜ is cis-acting, so it makes its own operon constitutive — but that operon has Z⁻, so no functional enzyme. The functional Z⁺ sits on the O⁺ operon, which the good repressor keeps OFF without inducer. Result: no β-gal without inducer. Option A forgets the Oᶜ copy is Z⁻. Option C is false (repressor binds O⁺ fine; Oᶜ is cis-only). Option D wrongly claims permanent silencing — the O⁺ Z⁺ operon is inducible.'
          }
        ]
      }
    }
  ]
};
