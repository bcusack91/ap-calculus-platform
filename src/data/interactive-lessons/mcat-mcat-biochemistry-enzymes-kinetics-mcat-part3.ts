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

Kinetically, irreversible inhibition lowers $V_{max}$ over time because functional $[E]$ falls; it is distinguished experimentally by **dilution or dialysis** — reversible inhibition washes out, covalent inhibition does not.

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
            explanation: `Higher apparent $K_m$, unchanged $V_{max}$, and reversal by excess substrate are the three fingerprints of competitive inhibition — the substrate can always outcompete the inhibitor for the shared active site.`
          },
          {
            question: `On a Lineweaver-Burk plot, adding an inhibitor produces a line parallel to the uninhibited line. The inhibitor binds:`,
            options: [`The free enzyme's active site`, `Only the enzyme-substrate complex`, `The free enzyme and ES complex with equal affinity`, `The substrate itself`],
            correctAnswer: 1,
            explanation: `Parallel lines mean the slope $K_m/V_{max}$ is constant, which happens only when $K_m$ and $V_{max}$ decrease by the same factor — the signature of uncompetitive inhibition, which requires the ES complex to already exist before the inhibitor can bind.`
          },
          {
            question: `A noncompetitive inhibitor at a fixed concentration is added to an assay. Which statement is TRUE at saturating substrate?`,
            options: [`The reaction reaches the original $V_{max}$ because substrate displaces the inhibitor`, `The reaction runs below the original $V_{max}$ no matter how much substrate is added`, `The apparent $K_m$ triples`, `The enzyme is covalently inactivated`],
            correctAnswer: 1,
            explanation: `A noncompetitive inhibitor binds an allosteric site, so substrate cannot displace it regardless of concentration. It functionally removes active enzyme, capping the rate below the original $V_{max}$ while leaving $K_m$ unchanged.`
          },
          {
            question: `After exposure to an organophosphate, a patient's acetylcholinesterase activity does not recover when the enzyme is extensively dialyzed. This is because the inhibitor:`,
            options: [`Has an extremely low $K_m$`, `Covalently phosphorylated the active-site serine`, `Is trapped in the dialysis membrane`, `Binds cooperatively at four sites`],
            correctAnswer: 1,
            explanation: `Dialysis removes reversibly bound small molecules; failure to recover activity indicates a covalent modification. Organophosphates phosphorylate the catalytic serine of acetylcholinesterase, permanently inactivating each modified enzyme molecule.`
          },
          {
            question: `Methotrexate closely resembles dihydrofolate and inhibits dihydrofolate reductase. In cells treated with methotrexate, which change would MOST directly reduce the drug's effectiveness?`,
            options: [`A rise in intracellular dihydrofolate concentration`, `A fall in intracellular dihydrofolate concentration`, `Increased temperature`, `A decrease in enzyme expression`],
            correctAnswer: 0,
            explanation: `A structural analog of the substrate acts as a competitive inhibitor. Accumulating substrate (dihydrofolate) competes the drug off the active site — the defining vulnerability of competitive inhibition. This is also why cancer cells amplify DHFR expression to resist methotrexate, but among the options, more substrate is the direct competitive effect.`
          }
        ]
      }
    },
    {
      id: 'ek3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Competitive: binds free E at active site; $K_m$ up, $V_{max}$ same; beaten by substrate; LB lines meet on y-axis
- Noncompetitive: binds E and ES equally at allosteric site; $V_{max}$ down, $K_m$ same; LB lines meet on x-axis
- Uncompetitive: binds ES only; BOTH $K_m$ and $V_{max}$ down; parallel LB lines; worsened by more substrate
- Mixed: unequal E/ES binding; $V_{max}$ down, $K_m$ either direction
- Irreversible = covalent (aspirin, organophosphates, penicillin); survives dialysis; recovery needs new enzyme synthesis`
    },
    {
      id: 'ek3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Diagnosing Inhibitors

<details>
<summary><b>Example 1: Classify an inhibitor from a kinetics table</b></summary>

**Question:** Without inhibitor: $K_m = 5$ mM, $V_{max} = 200$ units. With inhibitor: apparent $K_m = 2.5$ mM, apparent $V_{max} = 100$ units. Classify the inhibitor.

**Solution:**
1. $V_{max}$ fell (200 to 100), so it is not competitive.
2. Apparent $K_m$ also FELL — and by the same factor of 2 as $V_{max}$.
3. Both parameters reduced by the same factor = **uncompetitive** inhibition (parallel Lineweaver-Burk lines; the ratio $K_m/V_{max}$ is unchanged at 0.025).

**MCAT Strategy:** Compute the ratio $K_m/V_{max}$ with and without inhibitor. Unchanged ratio = uncompetitive. $K_m$ unchanged alone = noncompetitive. $V_{max}$ unchanged alone = competitive.
</details>

<details>
<summary><b>Example 2: Predict the effect of substrate accumulation in a pathway</b></summary>

**Question:** Drug X competitively inhibits enzyme 2 of a linear pathway (A to B to C). After dosing, the concentration of B rises 20-fold. What happens to the drug's inhibition of enzyme 2 over time, and how would an uncompetitive inhibitor differ?

**Solution:**
1. B is enzyme 2's substrate. As B accumulates, it increasingly outcompetes the competitive drug — inhibition weakens (the pathway partially "self-rescues").
2. An uncompetitive inhibitor binds only the ES complex. More substrate means MORE ES complex, so accumulation of B would maintain or even enhance inhibition.
3. This is why medicinal chemists often prefer uncompetitive/mixed inhibitors for enzymes whose substrates build up.

**MCAT Strategy:** In pathway questions, always ask what happens to the inhibited enzyme's substrate level and feed that back into the inhibition type.
</details>

<details>
<summary><b>Example 3: Design an experiment to distinguish reversible from irreversible inhibition</b></summary>

**Question:** An enzyme preparation loses 90% activity when incubated with compound Z. Propose a simple experiment to determine whether Z is a tight-binding reversible inhibitor or a covalent irreversible one.

**Solution:**
1. **Dilute or dialyze** the enzyme-Z mixture extensively, then re-assay.
2. Reversible inhibitor: dissociates and washes away; activity returns toward 100%.
3. Irreversible inhibitor: the covalent adduct stays; activity remains ~10% after dialysis. (Confirmation: mass spectrometry showing an enzyme mass increase equal to the adduct.)

**MCAT Strategy:** "Does activity recover after dialysis/dilution?" is the standard experimental discriminator; time-dependent, concentration-independent loss of activity also hints at covalent chemistry.
</details>`
    }
  ]
};
