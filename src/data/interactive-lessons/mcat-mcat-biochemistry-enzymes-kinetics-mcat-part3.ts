export const mcatEnzKineticsPart3Data = {
  topicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  sections: [
    {
      id: 'ek3-intro',
      type: 'text' as const,
      content: `# Enzymes & Kinetics

**Part 3 of 4 — Enzyme Inhibition**

### Reversible Inhibition — The Big Three (Plus Mixed)

| Type | Binds to | Effect on $K_m$ (apparent) | Effect on $V_{max}$ | Overcome by more substrate? |
|------|----------|---------------------------|---------------------|------------------------------|
| Competitive | Free enzyme (active site) | Increases | Unchanged | Yes |
| Noncompetitive | E and ES equally (allosteric site) | Unchanged | Decreases | No |
| Uncompetitive | ES complex ONLY | Decreases | Decreases (same factor) | No |
| Mixed | E and ES unequally | Increases or decreases | Decreases | No |

### The Logic Behind the Table (Don't Memorize Blindly)

- **Competitive:** the inhibitor and substrate fight for the same site. Flooding with substrate outcompetes the inhibitor, so $V_{max}$ is reachable — it just takes more substrate (higher apparent $K_m$). Statins (resemble HMG-CoA) and methotrexate (resembles dihydrofolate) are classic drugs.
- **Noncompetitive:** the inhibitor binds an allosteric site with equal affinity whether or not substrate is bound. It effectively removes a fraction of enzyme from action — like lowering $[E]$ — so $V_{max}$ falls but substrate binding to the remaining enzyme ($K_m$) is unchanged.
- **Uncompetitive:** the inhibitor binds ONLY the ES complex, locking substrate on the enzyme. This pulls the $E + S \\rightleftharpoons ES$ equilibrium toward ES (apparent $K_m$ DROPS — looks like higher affinity) while blocking turnover ($V_{max}$ drops). More substrate makes it WORSE, not better.

### Lineweaver-Burk Signatures

- **Competitive:** lines intersect on the **y-axis** (same $1/V_{max}$).
- **Noncompetitive:** lines intersect on the **x-axis** (same $-1/K_m$).
- **Uncompetitive:** **parallel lines** (same slope $K_m/V_{max}$; both parameters fall by the same factor).

### Irreversible Inhibition

Irreversible inhibitors covalently modify the enzyme (or bind so tightly they never leave). Activity returns only when the cell synthesizes new enzyme.

- **Aspirin** acetylates a serine in cyclooxygenase.
- **Organophosphates** (nerve agents, some pesticides) phosphorylate the active-site serine of acetylcholinesterase.
- **Penicillin** covalently traps the bacterial transpeptidase — a "suicide substrate" (mechanism-based inhibitor) that the enzyme itself activates.

Functional $[E]$ falls, so $V_{max}$ falls over time. The test is **dilution or dialysis**: reversible inhibition washes out, covalent inhibition does not.

### A Note on In-Vivo Relevance

Uncompetitive and mixed inhibitors are pharmacologically attractive: a competitive inhibitor's effect fades as the blocked pathway backs up substrate, but an uncompetitive inhibitor gets no such relief — the accumulating substrate actually helps it.`
    },
    {
      id: 'ek3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Enzyme Inhibition** 🎯`,
      exercise: {
        questions: [
          {
            question: `An inhibitor raises the apparent $K_m$ of an enzyme without changing $V_{max}$. Increasing substrate concentration restores full activity. The inhibitor is:`,
            options: [`Noncompetitive`, `Uncompetitive`, `Competitive`, `Irreversible`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Higher apparent $K_m$, unchanged $V_{max}$, and reversal by excess substrate are the three fingerprints of competitive inhibition — the substrate can always outcompete the inhibitor for the shared active site.`
          },
          {
            question: `On a Lineweaver-Burk plot, adding an inhibitor produces a line parallel to the uninhibited line. The inhibitor binds:`,
            options: [`The free enzyme's active site`, `Only the enzyme-substrate complex`, `The free enzyme and ES complex with equal affinity`, `The substrate itself`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Parallel lines mean the slope $K_m/V_{max}$ is constant, which happens only when $K_m$ and $V_{max}$ decrease by the same factor — the signature of uncompetitive inhibition, which requires the ES complex to already exist before the inhibitor can bind.`
          },
          {
            question: `A noncompetitive inhibitor at a fixed concentration is added to an assay. Which statement is TRUE at saturating substrate?`,
            options: [`The reaction reaches the original $V_{max}$ because substrate displaces the inhibitor`, `The reaction runs below the original $V_{max}$ no matter how much substrate is added`, `The apparent $K_m$ triples`, `The enzyme is covalently inactivated`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `A noncompetitive inhibitor binds an allosteric site, so substrate cannot displace it regardless of concentration. It functionally removes active enzyme, capping the rate below the original $V_{max}$ while leaving $K_m$ unchanged.`
          },
          {
            question: `After exposure to an organophosphate, a patient's acetylcholinesterase activity does not recover when the enzyme is extensively dialyzed. This is because the inhibitor:`,
            options: [`Has an extremely low $K_m$`, `Covalently phosphorylated the active-site serine`, `Competitively blocks the acetylcholine site`, `Binds cooperatively at four sites`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Dialysis removes reversibly bound small molecules; failure to recover activity indicates a covalent modification. Organophosphates phosphorylate the catalytic serine of acetylcholinesterase, permanently inactivating each modified enzyme molecule. A merely competitive inhibitor holds the active site noncovalently, so dialysis would wash it out and restore activity.`
          },
          {
            question: `Methotrexate closely resembles dihydrofolate and inhibits dihydrofolate reductase. In cells treated with methotrexate, which change would MOST directly reduce the drug's effectiveness?`,
            options: [`A rise in intracellular dihydrofolate concentration`, `A fall in intracellular dihydrofolate concentration`, `Increased temperature`, `A decrease in enzyme expression`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `A structural analog of the substrate acts as a competitive inhibitor. Accumulating substrate (dihydrofolate) competes the drug off the active site — the defining vulnerability of competitive inhibition. Less enzyme would strengthen the drug's effect, not blunt it (cancer cells resist methotrexate the opposite way, by amplifying the DHFR gene), less dihydrofolate would let the drug occupy even more active sites, and raising the temperature does not selectively displace a competitive inhibitor.`
          }
        ]
      }
    },
    {
      id: 'ek3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Diagnosing Inhibitors

**Problem 1.** Without inhibitor: $K_m = 5$ mM, $V_{max} = 200$ units. With inhibitor: apparent $K_m = 2.5$ mM, apparent $V_{max} = 100$ units.

- **(a)** Can the inhibitor be competitive?
- **(b)** How did the apparent $K_m$ change, and by what factor compared with $V_{max}$?
- **(c)** What type of inhibitor is it, and what do its Lineweaver-Burk lines look like?

**(a) $V_{max}$ first.** $V_{max}$ fell from 200 to 100, so the inhibitor is not competitive.

**(b) $K_m$ next.** The apparent $K_m$ also FELL, from 5 to 2.5 mM: the same factor of 2 as $V_{max}$.

**(c) Classify.** Both parameters reduced by the same factor = **uncompetitive** inhibition: parallel Lineweaver-Burk lines, with $K_m/V_{max}$ unchanged at 0.025. Unchanged ratio = uncompetitive; $K_m$ unchanged alone = noncompetitive; $V_{max}$ unchanged alone = competitive.

**Problem 2.** Drug X competitively inhibits enzyme 2 of a linear pathway (A to B to C). After dosing, the concentration of B rises 20-fold.

- **(a)** What happens to the drug's inhibition of enzyme 2 over time?
- **(b)** How would an uncompetitive inhibitor of enzyme 2 behave instead?
- **(c)** Which inhibitor types suit an enzyme whose substrate builds up?

**(a) The competitive drug.** B is enzyme 2's substrate. As B accumulates, it increasingly outcompetes the drug, so inhibition weakens: the pathway partially "self-rescues".

**(b) An uncompetitive drug.** It binds only the ES complex. More substrate means MORE ES complex, so the buildup of B would maintain or even enhance inhibition.

**(c) The design choice.** Uncompetitive or mixed inhibitors, which is why medicinal chemists often prefer them for such enzymes. In pathway questions, always ask what happens to the inhibited enzyme's substrate level.

**Problem 3.** An enzyme preparation loses 90% of its activity when incubated with compound Z. Is Z a tight-binding reversible inhibitor or a covalent irreversible one?

- **(a)** What simple experiment distinguishes the two?
- **(b)** What result would a reversible inhibitor give?
- **(c)** What result would an irreversible inhibitor give, and how could it be confirmed?

**(a) The experiment.** **Dilute or dialyze** the enzyme-Z mixture extensively, then re-assay.

**(b) Reversible.** The inhibitor dissociates and washes away; activity returns toward 100%.

**(c) Irreversible.** The covalent adduct stays; activity remains ~10% after dialysis. Mass spectrometry showing an enzyme mass increase equal to the adduct confirms it. Activity that keeps falling with incubation time at a fixed inhibitor concentration also hints at covalent chemistry.`
    },
    {
      id: 'ek3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Competitive.** Binds free E at the active site; $K_m$ up, $V_{max}$ same; beaten by substrate; LB lines meet on the y-axis.
- **Noncompetitive.** Binds E and ES equally at an allosteric site; $V_{max}$ down, $K_m$ same; LB lines meet on the x-axis.
- **Uncompetitive.** Binds ES only; $K_m$ and $V_{max}$ fall by the same factor; parallel LB lines; worse with more substrate.
- **Irreversible.** Covalent (aspirin, organophosphates, penicillin); survives dialysis; recovery needs new enzyme synthesis.

**Common traps**

- **More substrate always rescues.** Only competitive inhibition is overcome by substrate; uncompetitive inhibition gets worse with more.
- **Lower $K_m$ as a better enzyme.** A falling apparent $K_m$ is no gain: the uncompetitive inhibitor traps ES and blocks turnover, so $V_{max}$ falls equally.
- **Mixed as noncompetitive.** A mixed inhibitor binds E and ES unequally, so $K_m$ moves either way while $V_{max}$ falls.
- **Tight binding vs. covalent.** Reversible inhibitors wash out on dilution or dialysis; activity that never returns means covalent modification.`
    }
  ]
};
